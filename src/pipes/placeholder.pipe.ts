import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'placeholder'
})

export class placeholderPipe implements PipeTransform{
    transform(value:string, TextoDefecto:string): string {
        return (value)? value:TextoDefecto; //si hay algun valor ponga el valor y si no el defecto
    }
}