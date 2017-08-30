import { SearchModel } from './search.model';
import { SearchProvider } from '../../providers/search/search';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  searchdata: SearchModel = new SearchModel();
  sendData: SearchModel = new SearchModel();

  constructor(public navCtrl: NavController, public navParams: NavParams, public searchProvider: SearchProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
    this.searchProvider.getData().then(res => {
      this.searchdata = res;
      this.sendData.items = res.items;
    });
  }
  itemClicked(event) {
    alert(JSON.stringify(event));

  }

  datafilter($event) {
    this.sendData.items = $event;
    console.log("sendData"+this.sendData);
  }
}
