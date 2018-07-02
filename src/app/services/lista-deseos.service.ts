import { Injectable } from "@angular/core";
import { Lista } from "../clases/listas";


@Injectable()
export class ListaDeseosService{


    listas:Lista[] = []

    constructor(){

        // let lista1 = new Lista('Compras del supermercado')
        // let lista2 = new Lista('Juegos que deseo');
        // let lista3 = new Lista('Cosas de la U');

        //this.listas.push(lista1,lista2,lista3)
        // this.listas.push(lista1)
        // this.listas.push(lista2)
        // this.listas.push(lista3)        // this.listas.push(lista1)
        // this.listas.push(lista2)
        // this.listas.push(lista3)

        this.cargarData();

        console.log("servicio inicializado")
    }


    actualizarData(){

        localStorage.setItem("data",JSON.stringify(this.listas)) //ocupo convertir la listas
                                                                //a string para poder usar el setItem
    }

    cargarData(){
        if(localStorage.getItem("data")){
         this.listas = JSON.parse(localStorage.getItem("data")) //convierte el json en un objeto
        }
        
    }

    agregarLista(lista:Lista){
        this.listas.push(lista);
        this.actualizarData();
    }

    desagregarLista(idx:number){
        this.listas.splice(idx,1);
        this.actualizarData();
    }

}