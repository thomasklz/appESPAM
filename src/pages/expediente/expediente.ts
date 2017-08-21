import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {DetalleMateriasPage} from '../detalle-materias/detalle-materias'

@IonicPage()
@Component({
  selector: 'page-expediente',
  templateUrl: 'expediente.html',
})
export class ExpedientePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  pushPage(){
    this.navCtrl.push(DetalleMateriasPage, {
      idMateria: "123"
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpedientePage');
  }

}
