import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class NoticiasServicesProvider {

  constructor(public http: Http) {
    //console.log('Hello NoticiasServicesProvider Provider');
  }

  getNoticias(){
   return this.http.get('/deezer/user/2529/playlists')
    .map(res => res.json());
  }

}
