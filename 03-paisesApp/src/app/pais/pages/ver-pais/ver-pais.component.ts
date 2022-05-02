import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { RESTCountriesResponse } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: RESTCountriesResponse;

  constructor( private activatedRoute: ActivatedRoute,
               private paiseService: PaisService ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ( param ) => this.paiseService.getPaisPorCodigo( param['id'] )),
        tap( console.log )
      )
      .subscribe( resp  => {
        this.pais = resp[0];
      });

    // this.activatedRoute.params
    // .subscribe( ({id}) => {    //Observable para escuchar cambios en la ruta de este componente
    //   console.log( id );

    //   this.paiseService.getPaisPorCodigo( id )  //Nos subscribimos por que getPaisPorCodigo es un observable y asi obtenemos la información
    //   .subscribe( pais => {
    //     console.log(pais);
    //   });
    // });

  }

}
