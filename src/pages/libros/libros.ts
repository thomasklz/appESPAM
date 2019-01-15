import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BilibotecaServiceProvider } from '../../providers/biliboteca-service/biliboteca-service';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

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
  searchTerm: string = '';
  searchControl: FormControl;
  searching: any = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public searchbookServe: BilibotecaServiceProvider) {
    this.book = [];
    this.searchControl = new FormControl();
  }

  ionViewDidLoad() {
    this.SearchBooks();
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
      this.searching = false;
      this.SearchBooks();
    });
  }
   SearchBooks() {
    this.searchbookServe.searchBook(this.txtbook).subscribe(books => {
    this.book = books['Biblios'];
    });
  }
   onSearchInput() {
     this.searching = true;
   }
  goToDetailBook(detailBook) {
    this.navCtrl.push('DetalleLibrosPage', {
      'id': detailBook
    })
  }
  

}
