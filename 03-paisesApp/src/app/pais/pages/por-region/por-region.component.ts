import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { RESTCountriesResponse } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button{
      margin-right: 5px;
    }
    `
  ]
})
export class PorRegionComponent{
  regiones: string[] = ['AU', 'USAN', 'SAARC', 'Europe', 'PA'];
  regionActiva: string = '';
  paises: RESTCountriesResponse[] = [];
  constructor( private paiseService: PaisService) { }  

  activarRegion(region: string){
    this.regionActiva = region;
    this.paises = [];
    this.paiseService.buscarCapital(region)
      .subscribe( paises => this.paises = paises);
  }

}
