import { Component, Input } from '@angular/core';

/**
 * Generated class for the ListProfileComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'list-profile',
  templateUrl: 'list-profile.html'
})
export class ListProfileComponent {

  @Input() profiledata:any;
  text: string;

  constructor() {
    console.log('Hello ListProfileComponent Component');
    this.text = 'Hello World';
    
  }

}
