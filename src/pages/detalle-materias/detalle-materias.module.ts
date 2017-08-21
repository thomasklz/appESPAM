import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleMateriasPage } from './detalle-materias';

@NgModule({
  declarations: [
    DetalleMateriasPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleMateriasPage),
  ],
})
export class DetalleMateriasPageModule {}
