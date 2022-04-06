import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {
  //Con el input le decimos a angular que personajes va a venir del componente padre
  @Input("data") personajes: Personaje[] = [];
}
