import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html'
})
export class TabPage {

  noticiaRoot = 'NoticiaPage'
  actividadesRoot = 'ActividadesPage'
  calendarioRoot = 'CalendarioPage'


  constructor(public navCtrl: NavController) {}

}
