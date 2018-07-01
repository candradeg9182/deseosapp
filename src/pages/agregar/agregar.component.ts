import { Component,OnInit } from "@angular/core";
import { Lista, ListaItem } from "../../app/clases/index";

import { AlertController, NavController } from 'ionic-angular';

import { ListaDeseosService } from "../../app/services/lista-deseos.service";

@Component({
    selector:'app-agregar',
    templateUrl:'agregar.component.html',
})

export class agregarComponent implements OnInit {
    
    nombreLista: string = "";
    nombreItem: string = "";

    items: ListaItem[] = [];

    
    constructor(
      public alertCtrl:AlertController,
      public NavCtrl:NavController,
      public service:ListaDeseosService
    ){}

    ngOnInit(){}

    agregar(){
        if( this.nombreItem.length == 0 ){
            return;
        }

        let item = new ListaItem();
        item.nombre = this.nombreItem;

        this.items.push( item )
        this.nombreItem = "";

    }

    desagregar(index:number){
        this.items.splice(index, 1);
    }

    guardarLista(){
        if(this.nombreLista.length < 1){
            const alert = this.alertCtrl.create({
                title: 'Nombre de lista necesario',
                subTitle: 'La lista necestia tener un nombre',
                buttons: ['OK']
              });
              alert.present();
            return ;
        }

        let lista = new Lista(this.nombreLista);
        lista.items = this.items;

        this.service.listas.push( lista );
        this.NavCtrl.pop(); //[para devolverse a la pagina de donde vino]
    }
}