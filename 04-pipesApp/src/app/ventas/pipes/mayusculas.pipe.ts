import { Pipe, PipeTransform } from "@angular/core";
import { Validators } from "@angular/forms";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{
    transform(value: string, enMayusculas?: boolean): string {
        // if( enMayusculas ){
        //     return value.toUpperCase();
        // }
        // return value.toLowerCase();
        return ( enMayusculas ) ? value.toUpperCase() : value.toLowerCase();
    }
}