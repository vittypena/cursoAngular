import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit{

  //Definimos el formulario
  // miFormulario: FormGroup = new FormGroup({
  //   nombre      : new FormControl('RTX 4080ti'),
  //   precio      : new FormControl(1500),
  //   existencias : new FormControl(5)
  // });  

  //Builder form, otra forma de definir
  miFormulario: FormGroup = this.fb.group({
    nombre      : [ , [ Validators.required, Validators.minLength(3) ] , ],
    precio      : [ , [ Validators.required, Validators.min(0) ] ],
    existencias : [ , [ Validators.required, Validators.min(0) ] ]    
  })

  constructor( private fb: FormBuilder){ }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'RTX 4080Ti',
      precio: 1600,
      existencias: 10
    })
  }

  campoEsValido( campo: string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched(); //Para que muestre los mensajes como si hubiese tocado los campos
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();  //Resetea el formulario
  }
}
