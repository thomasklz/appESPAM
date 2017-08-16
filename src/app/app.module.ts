import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';


import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { PerfilPage } from '../pages/perfil/perfil';
import { ContactoPage } from '../pages/contacto/contacto';
import { AcercaPage } from '../pages/acerca/acerca';
import { DetallePage } from '../pages/detalle/detalle';
import { NoticiasServicesProvider } from '../providers/noticias-services/noticias-services';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    PerfilPage,
    ContactoPage,
    AcercaPage, 
    DetallePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    PerfilPage,
    ContactoPage,
    AcercaPage,
    DetallePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoticiasServicesProvider
  ]
})
export class AppModule {}
