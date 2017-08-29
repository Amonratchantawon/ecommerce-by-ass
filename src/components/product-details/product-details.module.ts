import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ProductDetailsComponent } from './product-details';

@NgModule({
  declarations: [
    ProductDetailsComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ProductDetailsComponent
  ]
})
export class ProductDetailsComponentModule {}
