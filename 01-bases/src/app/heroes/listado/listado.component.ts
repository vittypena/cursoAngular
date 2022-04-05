import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado: string = "";
  //heroeBorrado: string = "" || undefined;   //Tb es otra opcion para cuando no esta inicializado
  constructor() { 
    console.log('constructor')
  }

  ngOnInit(): void {
    console.log('onInit')
  }

  borrarHeroe(): void{
    this.heroeBorrado = this.heroes.shift() || ''
    console.log(this.heroeBorrado)
  }
}
