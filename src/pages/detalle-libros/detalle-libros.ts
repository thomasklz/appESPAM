import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalleLibrosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
			segment: 'detalle-libro/:id'
		   })
@Component({
  selector: 'page-detalle-libros',
  templateUrl: 'detalle-libros.html',
})
export class DetalleLibrosPage {
	public idBook: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
	this.idBook = this.navParams.get('id');
    console.log(this.idBook);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleLibrosPage');
  }

}
