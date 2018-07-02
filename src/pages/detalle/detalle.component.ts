import { Component,OnInit } from "@angular/core";

import { NavController, NavParams } from "ionic-angular";

import { Lista,ListaItem } from "../../app/clases/index";
import { ListaDeseosService } from "../../app/services/lista-deseos.service";

import { AlertController } from "ionic-angular";


@Component({
    selector:'app-detalle',
    templateUrl:'detalle.component.html',
})

export class DetalleComponent implements OnInit{

    idx:number;
    lista:Lista;

    constructor(public NavCtrl:NavController,
                public NavPrm:NavParams,
                public service:ListaDeseosService,
                public alertCtrl:AlertController)
    {
             this.idx = this.NavPrm.get("idx")
             this.lista = this.NavPrm.get("lista")
    }

    ngOnInit(){}

    actualizar(item:ListaItem){
        item.completado = !item.completado;

        let todosMarcados = true;
        for(let item of this.lista.items){
            if (!item.completado){
                todosMarcados = false;
                break
            }
        }

        this.lista.terminado = todosMarcados;

        this.service.actualizarData();
    }

    borrarItem()
    {
        const confirm = this.alertCtrl.create({
            title: 'Borrando lista',
            message: 'Deseas borrar esta lista y su contenido?',
            buttons: 
            [
                    "Cancelar",
                
                {
                    text: 'Agree',
                    handler: () => 
                    {
                        console.log('Agree clicked');
                        this.service.desagregarLista(this.idx)
                        this.NavCtrl.pop()
                    }
                }
            ]
        });
        confirm.present();
    }
    
}