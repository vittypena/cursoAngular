import { Component } from '@angular/core';

@Component({
    selector:'app-contador',
    template: `
    <!--Se puede colocar el titulo desde otro lado de esta manera-->
        <h1> {{ title }} </h1>
        <h3>La base es: <strong> {{ base }} </strong></h3>


        <!--No se aconseja de que la logica la haga el template, debe de ser el componente de typeScript-->
        <button (click)="acumular(base)"> +{{base}} </button>

        <span> {{ numero }} </span>

        <button (click)="acumular(-1)"> -1 </button>

    `,
    styleUrls: ['../../app.component.css']
})
//Export para utilizarlo fuera del archivo
export class ContadorComponent{
    title: string = 'Contador App';
  numero: number = 10;

  base: number = 5;

  acumular(valor: number){
    this.numero += valor;
  }
}