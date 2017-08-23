import { Component, ViewChild } from '@angular/core';
import { Nav,Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PerfilPage } from '../pages/perfil/perfil';
import { ContactoPage } from '../pages/contacto/contacto';
import { TabPage } from '../pages/tab/tab';
import { ExpedientePage } from '../pages/expediente/expediente';
import { LibrosPage } from '../pages/libros/libros'
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = LoginPage;
  pages: Array<{titulo: string, component:any, icono:string}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    
    this.pages=[
        { titulo: 'Inicio', component:TabPage, icono:'home' },
        { titulo: 'Perfil', component:PerfilPage, icono:'person' },
        { titulo: 'Expediente', component:ExpedientePage, icono:'albums' },
        { titulo: 'Consulta libros', component:LibrosPage, icono:'search' },
        { titulo: 'Contáctanos', component:ContactoPage, icono:'mail' },
        { titulo: 'Cerrar sesión', component:LoginPage, icono:'exit' }
    ];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.show();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}

