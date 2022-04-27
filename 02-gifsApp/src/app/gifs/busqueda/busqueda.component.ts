import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent{

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService){}
  buscar( termino: string ){    
    const valor = this.txtBuscar.nativeElement.value;

    if(valor.trim().length === 0){ //Evitar meter vacios
      return;
    }

    console.log(valor);
    this.gifsService.buscarGifs(valor);
    this.txtBuscar.nativeElement.value = '';
  }

}
