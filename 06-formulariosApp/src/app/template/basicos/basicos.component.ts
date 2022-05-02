import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm ={
    producto: 'rtx',
    precio: 0,
    existencias: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  precioValido(): boolean{    
    return this.miFormulario?.controls['precio']?.value < 0 && this.miFormulario?.controls['precio']?.touched && this.miFormulario?.controls['precio']?.value;        
  }

  guardar(){
    console.log(this.miFormulario.value);

    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0
    });
  }
}
