import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpedientePage } from './expediente';

@NgModule({
  declarations: [
    ExpedientePage,
  ],
  imports: [
    IonicPageModule.forChild(ExpedientePage),
  ],
})
export class ExpedientePageModule {}
