import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BilibotecaServiceProvider } from '../../providers/biliboteca-service/biliboteca-service';

@IonicPage()
@Component({
  selector: 'page-libros',
  templateUrl: 'libros.html',
  providers: [BilibotecaServiceProvider]
})
export class LibrosPage {
  public txtbook: string;
  items: string[];
  public book: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public searchbookServe: BilibotecaServiceProvider) {
    this.book = [];
  }

   SearchBooks() {
    this.searchbookServe.searchBook(this.txtbook).subscribe(books => {
    console.log(books.Biblios);
    this.book = books['Biblios'];
    });
  }

  goToDetailBook(detailBook) {
    this.navCtrl.push('DetalleLibrosPage', {
      'id': detailBook
    })
  }
  

}
