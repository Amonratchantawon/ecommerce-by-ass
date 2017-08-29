import { Component, Input } from '@angular/core';

/**
 * Generated class for the ShopDetailsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'shop-details',
  templateUrl: 'shop-details.html'
})
export class ShopDetailsComponent {
  @Input() shopdata:any;
  text: string;

  constructor() {
    console.log('Hello ShopDetailsComponent Component');
    this.text = 'Hello World';
  }

}
