import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {
  public IdNew: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.IdNew = this.navParams.get('IdNew');
    console.log(this.IdNew);
  }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad DetallePage');
  }

}
