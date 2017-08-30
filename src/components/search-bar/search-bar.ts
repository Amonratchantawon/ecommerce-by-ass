import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Generated class for the SearchBarComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'search-bar',
  templateUrl: 'search-bar.html'
})
export class SearchBarComponent {

  @Input() items: any[];
  datafilter: any;
  @Output() outdatafilter: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    console.log('Hello SearchBarComponent Component');

  }

  initializeItems() {
    this.datafilter = this.items;
  }

  getItems(ev: any) {
    this.initializeItems();
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.datafilter = this.datafilter.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } this.outdatafilter.emit(this.datafilter);
  }

}
