import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LibrosPage } from './libros';

@NgModule({
  declarations: [
    LibrosPage,
  ],
  imports: [
    IonicPageModule.forChild(LibrosPage),
  ],
})
export class LibrosPageModule {}
