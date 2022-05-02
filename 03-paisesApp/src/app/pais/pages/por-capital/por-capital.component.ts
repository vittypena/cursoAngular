import { Component } from '@angular/core';
import { RESTCountriesResponse } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent{  
  termino: string = '';
  hayError: boolean = false;
  paises: RESTCountriesResponse[] = []; //Para llenar la tabla de paises

  constructor( private paisService: PaisService ) { }

  buscar( termino: string){
    this.hayError = false;  
    this.termino = termino;
      
    this.paisService.buscarCapital(this.termino)
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
}
