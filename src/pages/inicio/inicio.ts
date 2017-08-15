import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DetallePage } from '../detalle/detalle';

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToDetalleNew(IdNew){
    this.navCtrl.push(DetallePage, {IdNew:IdNew});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

}
