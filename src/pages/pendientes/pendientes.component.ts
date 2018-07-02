import { Component, OnInit} from '@angular/core';
import { ListaDeseosService } from "../../app/services/lista-deseos.service";

import { NavController } from "ionic-angular"; //navcontroller para moverse entre pages
import { agregarComponent } from "../agregar/agregar.component"; 
//agrego component ajeno para usar el NavCTRL.push y moverse a elHTML de ese component

import { DetalleComponent } from "../detalle/detalle.component"; 


@Component({
    selector: 'app-pendientes',
    templateUrl: 'pendientes.component.html',
})

export class pendientesComponent implements OnInit {
    
    constructor(private _listaDeseo:ListaDeseosService, 
                private NavCtrl:NavController) //navcontroller para moverse entre pages
                
                {  }

    ngOnInit(){}


    irAgregar(){
        this.NavCtrl.push( agregarComponent )
    }

    verDetalle(lista, idx){
        this.NavCtrl.push( DetalleComponent,{lista,idx} )
    }

}