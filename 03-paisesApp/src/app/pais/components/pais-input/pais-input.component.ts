import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{
  
  @Input() placeholder: string = "";   

  @Output() onEnter: EventEmitter<string>= new EventEmitter();  //Se va a emitir cuando la persona le da enter
  @Output() onDebounce: EventEmitter<string>= new EventEmitter(); //Se va a emitir cuando la persona deja de escribir

  debouncer: Subject<string> = new Subject(); //Es un observable, que utilizare para ver cuando dejo de escribir

  ngOnInit(): void {
    this.debouncer
    .pipe(  //Para transformar la salida de este subscrime
      debounceTime(300)  //Cuantas milesimas de segundo puede esperar antes de emitir el valor
    )
    .subscribe(valor => {
      this.onDebounce.emit(valor);
    });
  }

  termino: string = '';

  buscar(){
    this.onEnter.emit( this.termino )
    
  }

  teclaPresionada(){
    this.debouncer.next( this.termino );
  }

}
