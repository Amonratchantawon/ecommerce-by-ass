import { Component, Input } from '@angular/core';

/**
 * Generated class for the ListFavoriteComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'list-favorite',
  templateUrl: 'list-favorite.html'
})
export class ListFavoriteComponent {

  @Input() favoriteData:any;
  text: string;

  constructor() {
    console.log('Hello ListFavoriteComponent Component');
    this.text = 'Hello World';
  }

}
