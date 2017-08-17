import { Component, ViewChild } from '@angular/core';
import { Nav,Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PerfilPage } from '../pages/perfil/perfil';
import { ContactoPage } from '../pages/contacto/contacto';
import { AcercaPage } from '../pages/acerca/acerca';
import { TabPage } from '../pages/tab/tab';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = TabPage;
  pages: Array<{titulo: string, component:any, icono:string}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    
    this.pages=[
        { titulo: 'Inicio', component:TabPage, icono:'home' },
        { titulo: 'Perfil', component:PerfilPage, icono:'person' },
        { titulo: 'Expediente', component:PerfilPage, icono:'albums' },
        { titulo: 'Consulta libros', component:PerfilPage, icono:'search' },
        { titulo: 'Contacto', component:ContactoPage, icono:'mail' },
        { titulo: 'Acerca de', component:AcercaPage, icono:'information-circle' }
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

