import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalleMateriasPage } from '../detalle-materias/detalle-materias';

@IonicPage()
@Component({
  selector: 'page-materias',
  templateUrl: 'materias.html',
})
export class MateriasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  pushPageNotas(){
    this.navCtrl.push(DetalleMateriasPage, {id:123});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MateriasPage');
  }

}
