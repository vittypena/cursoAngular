import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre  : String = 'Ironman';
    edad    : number = 25

    get nombreMayusculas(){
        return this.nombre.toUpperCase();
    }
    obtenerNombre(): string{
            return `${ this.nombre } - ${ this.edad}`;  //En javascript
            //return this.nombre + ' - ' + this.edad    //En typescript
    }
    
    cambiarNombre():void{
        this.nombre = 'Spiderman';
    }

    cambiarEdad():void{
        console.log('Hey...')
        this.edad = 18;
    }
}    