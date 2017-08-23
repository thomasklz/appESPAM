import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { EmailComposer } from '@ionic-native/email-composer';

import { MyApp } from './app.component';
import { PerfilPage } from '../pages/perfil/perfil';
import { ContactoPage } from '../pages/contacto/contacto';
import { SesionPage } from '../pages/sesion/sesion';
import { DetallePage } from '../pages/detalle/detalle';
import { ExpedientePage } from '../pages/expediente/expediente';
import { NoticiasServicesProvider } from '../providers/noticias-services/noticias-services';
import { TabPage } from '../pages/tab/tab';
import { DetalleMateriasPage } from '../pages/detalle-materias/detalle-materias';
import { LibrosPage } from '../pages/libros/libros';
import { MateriasPage } from '../pages/materias/materias';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    PerfilPage,
    ContactoPage,
    SesionPage, 
    DetallePage,
    ExpedientePage,
    TabPage,
    DetalleMateriasPage,
    LibrosPage,
    MateriasPage,
    LoginPage
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
    SesionPage,
    DetallePage,
    ExpedientePage,
    TabPage,
    DetalleMateriasPage,
    LibrosPage,
    MateriasPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoticiasServicesProvider,
    EmailComposer
  ]
})
export class AppModule {}
