import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DetallePage } from '../detalle/detalle';
import { NoticiasServicesProvider } from '../../providers/noticias-services/noticias-services';


@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
  providers: [ NoticiasServicesProvider ]
})
export class InicioPage {

  public arNoticias: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public notiServe: NoticiasServicesProvider) {
    this.arNoticias = [];

  }
  goToDetalleNew(IdNew) {
    this.navCtrl.push(DetallePage, { IdNew: IdNew });
  }
  ionViewDidLoad() {
    this.notiServe.getNoticias().subscribe(noticias => {
      this.arNoticias.push(noticias.data);
      console.log(this.arNoticias);
    });
  }

}
