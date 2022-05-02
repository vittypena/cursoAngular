import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {


  //i18nSelect
  nombre: string = 'Susana';
  genero: string = 'femenino';

  invitacionMapa= {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  cambiarCliente(){
    this.nombre =  'Fernando';
    this.genero = 'masculino';
  }

  //i18nPlural
  clientes:string[] = ['Pedro', 'Maria', 'Juan','Pedro', 'Maria', 'Juan'];

  clientesMapa= {
    '=0':'no tenemos ningún cliente esperando',
    '=1':'tenemos un cliente esperando',
    '=2':'tenemos dos clientes esperando',
    'other':'tenemos # clientes esperando'
  }

  borrarCLiente(){
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad:35,
    direccion: 'Ottawa, Canada'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Acuaman',
      vuela: false
    }
  ]
  

  //Async Pipe
    //Mediante Observable
    miObservable = interval(1000);
    //Mediante Promesa
    valorPromesa = new Promise( (resolve, reject)  => {
      setTimeout(() => {
        resolve('Fin de la promesa')
      }, 3500);
    });

}

