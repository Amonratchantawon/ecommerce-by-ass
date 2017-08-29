import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ListProfileComponent } from './list-profile';

@NgModule({
  declarations: [
    ListProfileComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ListProfileComponent
  ]
})
export class ListProfileComponentModule {}
