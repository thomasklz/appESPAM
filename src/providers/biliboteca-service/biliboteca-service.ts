import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class BilibotecaServiceProvider {

  constructor(public http: Http) {
    
  }

   searchBook(book){
   return this.http.get('http://127.0.0.1:8000/api/v01/biblios/search/'+ book)
    .map(res => res.json());
  }

}
