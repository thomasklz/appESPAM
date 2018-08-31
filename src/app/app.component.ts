import { Component, ViewChild } from '@angular/core';
import { Nav,Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as $ from 'jquery';
import { PerfilPage } from '../pages/perfil/perfil';
import { ContactoPage } from '../pages/contacto/contacto';
import { TabPage } from '../pages/tab/tab';
import { ExpedientePage } from '../pages/expediente/expediente';
import { LibrosPage } from '../pages/libros/libros'
import { LoginPage } from '../pages/login/login';

@Component({
 // templateUrl: 'app.html'
  templateUrl: 'app.html',
  selector: 'lottie-animation-view-demo-app',
  template: ` <div id="xx"><lottie-animation-view
                  [options]="lottieConfig"
                  [width]="300"
                  [height]="600"
                  (animCreated)="handleAnimation($event)">
                  </lottie-animation-view>
                  </div>
                  <div id='mostrar' class='ocultar'><ion-menu [content]="content">
                  <ion-content class="menu-content myBg user">
                      <img src="assets/imagenes/user.png" alt="">
                      <h1>Thomas Loor</h1>
                      <ion-list>
                          <button color="belize_hole" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
                          <ion-icon item-left name="{{p.icono}}"></ion-icon>
                          {{p.titulo}}
                      </button>
                      </ion-list>
                  </ion-content>
                </ion-menu><ion-nav [root]="rootPage" #content></ion-nav>
             </div>`
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = LoginPage;

  pages: Array<{titulo: string, component:any, icono:string}>;
  //lottie
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;
  //end lottie
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
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.lottieConfig = {
      path: 'assets/paprika_marketing_logo.json',
      autoplay: true,
      loop: true
    };

    setTimeout(() => {
      this.anim.pause();
      //this.viewCtrl.dismiss();
       //this.nav.push(LoginPage);
      // this.openPage(LoginPage);
      //this.anim.destroy();
      //this.navCtrl.push(HomePage);
      $('#xx').fadeOut();
      $('#mostrar').toggle();
    }, 5000);
  }
  handleAnimation(anim: any) {
    this.anim = anim;
  }

  stop() {
    this.anim.stop();
  }

  play() {
    this.anim.play();
  }

  pause() {
    this.anim.pause();
  }

  setSpeed(speed: number) {
    this.animationSpeed = speed;
    this.anim.setSpeed(speed);
  }
  openPage(page) {
    this.nav.setRoot(page.component);
  }
  


}

