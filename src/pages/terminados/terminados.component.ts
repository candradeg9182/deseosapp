import { Component, OnInit } from "@angular/core";

import { ListaDeseosService } from "../../app/services/lista-deseos.service";

import { NavController } from "ionic-angular"; //navcontroller para moverse entre pages

//agrego component ajeno para usar el NavCTRL.push y moverse a elHTML de ese component

import { DetalleComponent } from "../detalle/detalle.component"; 

@Component ({
    selector: 'app-terminados',
    templateUrl: 'terminados.component.html',
})

export class terminadosComponent implements OnInit {


    
    constructor(private service:ListaDeseosService, 
                private NavCtrl:NavController) //navcontroller para moverse entre pages
                
                {  }

    ngOnInit(){}


    verDetalle(lista, idx){
        this.NavCtrl.push( DetalleComponent,{lista,idx} )
    }

}