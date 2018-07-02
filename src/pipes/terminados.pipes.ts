import {Pipe, PipeTransform} from '@angular/core'
import { Lista } from "../app/clases/index";


@Pipe({
    name:'terminados',
    pure: false
})
export class terminadosPipe implements PipeTransform {
    transform(listas: Lista[], estado:boolean = true) :Lista[] {
        
        let listaFiltrada:Lista[] = [];

        for(let lista of listas){
            if(lista.terminado == estado){
                listaFiltrada.push(lista); 
            }
        }
        
        return listaFiltrada;
    }
}