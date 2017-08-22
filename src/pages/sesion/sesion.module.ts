import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SesionPage } from './sesion';

@NgModule({
  declarations: [
    SesionPage,
  ],
  imports: [
    IonicPageModule.forChild(SesionPage),
  ],
})
export class SesionPageModule {}
