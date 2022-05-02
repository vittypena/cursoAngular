import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

 nombreLower: string = 'vitty';
 nombreUpper: string = 'Vitty';
 nombreCompleto: string = 'VitTY PEna';

 fecha: Date = new Date();
}
