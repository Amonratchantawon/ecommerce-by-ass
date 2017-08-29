import { Component, Input } from '@angular/core';

/**
 * Generated class for the ProductDetailsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'product-details',
  templateUrl: 'product-details.html'
})
export class ProductDetailsComponent {

  @Input() productData:any
  text: string;

  constructor() {
    console.log('Hello ProductDetailsComponent Component');
    this.text = 'Hello World';
  }

}
