import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

@IonicPage()
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class ContactoPage {

  constructor(
                public navCtrl: NavController, 
                public navParams: NavParams,
                private emailComposer: EmailComposer
              ){
                
  }

  // this.emailComposer.isAvailable().then((available: boolean) =>{
  //   if(available) {
  //     console.log('email view dismissed');
  //   }
  //  });

  sendEmail() {
    let email = {
      to: 'saimon@devdactic.com',
      cc: 'max@mustermann.de',
      attachments: [
        'file://img/logo.png',
        'res://icon.png',
        'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
        'file://README.pdf'
      ],
      subject: 'My Cool Image',
      body: 'Hey Simon, what do you thing about this image?',
      isHtml: true
    };
 
    this.emailComposer.open(email);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactoPage');
  }

}
