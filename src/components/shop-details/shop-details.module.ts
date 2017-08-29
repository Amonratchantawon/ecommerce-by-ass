import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ShopDetailsComponent } from './shop-details';

@NgModule({
  declarations: [
    ShopDetailsComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ShopDetailsComponent
  ]
})
export class ShopDetailsComponentModule {}
