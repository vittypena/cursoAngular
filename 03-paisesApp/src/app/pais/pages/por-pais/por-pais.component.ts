import { Component, OnInit } from '@angular/core';
import { RESTCountriesResponse } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent{

  termino: string = '';
  hayError: boolean = false;
  paises: RESTCountriesResponse[] = []; //Para llenar la tabla de paises
  paisesSugeridos: RESTCountriesResponse[] = [];

  constructor( private paisService: PaisService ) { }

  buscar( termino: string){
    this.hayError = false;  
    this.termino = termino;
      
    this.paisService.buscarPais(this.termino)
      .subscribe({        
        next: (data) => {
          console.log('DATA', data);
          this.paises = data; 
        },
        error: (_) => {
          this.hayError = true;
          this.paises = [];
        }
       });
  }

  sugerencias( termino: string ){
    this.hayError = false;
    
    this.paisService.buscarPais( termino )
      .subscribe( paises => this.paisesSugeridos = paises.splice(0, 5))
  }
}
