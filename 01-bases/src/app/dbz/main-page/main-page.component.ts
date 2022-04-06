import { Component, OnInit } from '@angular/core';
import { NodeCompatibleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

  nuevo: Personaje ={
    nombre:'',
    poder:0
  }
  
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
  }
}
