import { Component, Input } from '@angular/core';

/**
 * Generated class for the ListCartComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'list-cart',
  templateUrl: 'list-cart.html'
})
export class ListCartComponent {

  @Input() dataCartList:any;
  text: string;

  constructor() {
    console.log('Hello ListCartComponent Component');
    this.text = 'Hello World';
  }

}
