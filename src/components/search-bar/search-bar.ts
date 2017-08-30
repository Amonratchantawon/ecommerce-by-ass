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
  @Output() outdatafilter:EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    console.log('Hello SearchBarComponent Component');
  
  }

  initializeItems() {
   this.datafilter = this.items; 
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.datafilter = this.datafilter.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } this.outdatafilter.emit(this.datafilter);
  }

}
