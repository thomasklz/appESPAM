import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {MateriasPage} from '../materias/materias';

@IonicPage()
@Component({
  selector: 'page-expediente',
  templateUrl: 'expediente.html',
})
export class ExpedientePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  pushPageMateria(){
    this.navCtrl.push(MateriasPage, {
      idMateria: "123"
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpedientePage');
  }

}
