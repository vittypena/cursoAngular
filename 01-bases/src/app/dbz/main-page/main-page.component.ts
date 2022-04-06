import { Component, OnInit } from '@angular/core';
import { NodeCompatibleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{
  //personajes: Personaje[] = [];
//Esta logica la mudo al dbz.service.ts, por eso comento estas lineas
/*
personajes: Personaje[] = [
  {
    nombre: 'Goku',
    poder: 15000
  },
  {
    nombre:'Vegeta',
    poder: 7500
  }
]
*/
//Codigo del servicio incluido dbz.service.ts
//Comento lo del servicio para poner otra manera de hacerlo.
/*
get personajes(): Personaje[]{
  return this.dbzService.personajes
}
  constructor( private dbzService: DbzService){
    //Esta linea esta comentada ya que no vamos a hacer esto de esta manera, vamos a obtener el array mediante un get al servicio
    //this.personajes = this.dbzService.personajes
  }
//FIN Codigo del servicio incluido dbz.service.ts
*/
  nuevo: Personaje ={
    nombre:'Maestro Roshi',
    poder:1000
  }
  
  /*
  agregarNuevoPersonaje( argumento: Personaje): void{
    //debugger;
    //Este metodo recibe un evento desde el hijo, habiendo cambiado previamente el contenido de nuevo:{} y lo inserta en el array. Recibe un personaje como argumento
    console.log('Evento desde el hijo')
    //this.personajes.push(argumento)
  }*/
  
  constructor(){}
  
  //Esta logica la mudo al dbz.service.ts, por eso comento estas lineas FIN COMENTARIO

  /*
  cambiarNombre(event: any){
    console.log(event.target.value);
  }  
  agregar(): void{    
    //El trim quita los espacios en blanco con esto podemos ver si esta vacio, === es igualdad estricta, compara por ejemplo a ver si es del mismo tipo tb, por si metes '10' y 10, verifica el tipo de dato y el valor y si es el mismo objeto, es decir tiene qwue ser una referencia a la misma variable
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }
    console.log(this.nuevo);
    //Insertar en this.personajes     
    this.personajes.push(this.nuevo)
    //Reiniciamos el objeto despues de insertar, si no nos cambiara los ya insertados cuando añadamos otros ya que la referencia se queda en el objeto
    this.nuevo ={
      nombre: '',
      poder: 0
    }
  }*/
}
