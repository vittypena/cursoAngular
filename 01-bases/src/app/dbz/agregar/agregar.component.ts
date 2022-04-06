import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {  

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor( private dbzService: DbzService){}

  //Para emitir al componente padre, eventEmitter es un generico lo que quiere decir que puede ser cualquier cosa, para ello le indicamos e tipo que vamos a emitir
  //@Output("dataNuevoPersonaje") onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  /*
  cambiarNombre(event: any){
    console.log(event.target.value);
  }*/

  agregar(): void{    
    //El trim quita los espacios en blanco con esto podemos ver si esta vacio, === es igualdad estricta, compara por ejemplo a ver si es del mismo tipo tb, por si metes '10' y 10, verifica el tipo de dato y el valor y si es el mismo objeto, es decir tiene qwue ser una referencia a la misma variable
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }
    console.log(this.nuevo);
    //Enviar el evento a el componente padre
    //this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);
    //Reiniciamos el objeto despues de insertar, si no nos cambiara los ya insertados cuando añadamos otros ya que la referencia se queda en el objeto
    this.nuevo ={
      nombre: '',
      poder: 0
    }
  }
}
