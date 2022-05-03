import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array( [
      [ 'Metal Gear', Validators.required],
      [ 'Death Stranding', Validators.required]
    ], Validators.required)
  });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required );

  get favoritosArr(){ //Para obtener el arreglo de favoritos
    return this.miFormulario.get('favoritos') as FormArray;
  }

  ngOnInit(): void {
  }

  campoIsValid(campo: string) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  agregarFavorito(){
    if( this.nuevoFavorito.invalid ){return}
    
    this.favoritosArr.push( new FormControl( this.nuevoFavorito.value, Validators.required ))

    this.nuevoFavorito.reset();
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched(); //Para que muestre los mensajes como si hubiese tocado los campos
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();  //Resetea el formulario
  }

  borrar( index: number){
    this.favoritosArr.removeAt(index);
  }
}
