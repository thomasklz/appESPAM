import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NoticiasServicesProvider } from '../../providers/noticias-services/noticias-services';
import { DetallePage } from '../detalle/detalle';

@IonicPage()
@Component({
  selector: 'page-noticia',
  templateUrl: 'noticia.html',
  providers: [NoticiasServicesProvider]
})
export class NoticiaPage {
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

    });
  }

}
