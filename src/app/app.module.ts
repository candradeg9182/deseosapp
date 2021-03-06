import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { pendientesComponent } from "../pages/pendientes/pendientes.component";
import { terminadosComponent } from "../pages/terminados/terminados.component";
import { agregarComponent } from "../pages/agregar/agregar.component";

import { ListaDeseosService } from "../app/services/lista-deseos.service";


import { placeholderPipe } from "../pipes/placeholder.pipe";
import { DetalleComponent } from "../pages/detalle/detalle.component";

import { PendientePipe } from "../pipes/pendientes.pipe";
import { terminadosPipe } from "../pipes/terminados.pipes";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    pendientesComponent,
    terminadosComponent,
    agregarComponent,
    placeholderPipe,
    PendientePipe,
    terminadosPipe,
    DetalleComponent

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    pendientesComponent,
    terminadosComponent,
    agregarComponent,
    DetalleComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListaDeseosService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
