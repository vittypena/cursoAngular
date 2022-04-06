import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService{

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre:'Vegeta',
          poder: 7500
        }
      ];
      
      get personajes(): Personaje[]{
          //El [...] rompe la referencia con la variable, es como decir separa la referencia con la variable this. de aqui y generate una copia en donde se invoque el get. Esto no es necesario en java, es sobre todo de javascript pero por buena practica se pone.
        return [...this._personajes];
      }

    constructor(){
        console.log('Servicio inicializado');
    }
    
    agregarPersonaje( personaje: Personaje){
        this._personajes.push (personaje);
    }
}