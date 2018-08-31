import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleLibrosPage } from './detalle-libros';

@NgModule({
  declarations: [
    DetalleLibrosPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleLibrosPage),
  ],
  entryComponents: [
    DetalleLibrosPage
  ],
})
export class DetalleLibrosPageModule {}
