import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKeyGif   : string = '1enouhGe0CqHaOr1FNdJjpfWU44zoRCJ';
  private _historial  : string[] = [];
  private apiUrl: string = 'https://api.giphy.com/v1/gifs';

  //TODO cambiar any por su tipo correspondiente
  public resultados: Gif[] = [];

  get historial() {    
    return [...this._historial];
  }

  constructor( private http: HttpClient ){
    if(localStorage.getItem('historial')){
      this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    }
    if(localStorage.getItem('resultado')){
      this.resultados = JSON.parse(localStorage.getItem('resultado')!) || [];
    }    
  }

  buscarGifs(query: string ){
    //Asegurar que sean unicos
    if (!this._historial.includes(query)) {
      this._historial.unshift(query); //Lo inserta al inicio
      this._historial = this._historial.splice(0,10); //Para limitar el array, cortara del primero al 10

      localStorage.setItem('historial', JSON.stringify( this._historial));
    }

    console.log(this._historial);

    const params = new HttpParams().set('api_key',this.apiKeyGif)
                                   .set('limit','10')
                                   .set('q',query);
    console.log(params.toString());

    this.http.get<SearchGifsResponse>(`${this.apiUrl}/search`, { params })
        .subscribe( ( resp ) => {
          this.resultados = resp.data;
          localStorage.setItem('resultado', JSON.stringify(this.resultados));
        });
  }
  
}
