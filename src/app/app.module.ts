import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';


import { MyApp } from './app.component';
import { PerfilPage } from '../pages/perfil/perfil';
import { ContactoPage } from '../pages/contacto/contacto';
import { AcercaPage } from '../pages/acerca/acerca';
import { DetallePage } from '../pages/detalle/detalle';
import { ExpedientePage } from '../pages/expediente/expediente';
import { NoticiasServicesProvider } from '../providers/noticias-services/noticias-services';
import { TabPage } from '../pages/tab/tab';
import { DetalleMateriasPage } from '../pages/detalle-materias/detalle-materias'

@NgModule({
  declarations: [
    MyApp,
    PerfilPage,
    ContactoPage,
    AcercaPage, 
    DetallePage,
    ExpedientePage,
    TabPage,
    DetalleMateriasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PerfilPage,
    ContactoPage,
    AcercaPage,
    DetallePage,
    ExpedientePage,
    TabPage,
    DetalleMateriasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoticiasServicesProvider
  ]
})
export class AppModule {}
