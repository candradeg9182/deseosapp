import { Injectable } from "@angular/core";
import { Lista } from "../clases/listas";


@Injectable()
export class ListaDeseosService{


    listas:Lista[] = []

    constructor(){

        let lista1 = new Lista('Compras del supermercado')
        let lista2 = new Lista('Juegos que deseo');
        let lista3 = new Lista('Cosas de la U');

        //this.listas.push(lista1,lista2,lista3)
        this.listas.push(lista1)
        this.listas.push(lista2)
        this.listas.push(lista3)

        console.log("servicio inicializado")
    }

}