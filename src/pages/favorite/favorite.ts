import { NotificationsModel } from './favorite.model';
import { FavoriteProvider } from '../../providers/favorite/favorite';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

/**
 * Generated class for the FavoritePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {

  favoritedata: NotificationsModel = new NotificationsModel();

  @ViewChild('pageSlider') pageSlider: Slides;
  tabs: any = '0';
  constructor(public navCtrl: NavController, public navParams: NavParams, public favoriteProvider: FavoriteProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritePage');
    this.getdatafavorite();
  }
  selectTab(index) {
    this.pageSlider.slideTo(index);
  }

  changeWillSlide($event) {
    this.tabs = $event._snapIndex.toString();
  }

  getdatafavorite() {
    this.favoriteProvider.getData().then(res => {
      this.favoritedata = res
      console.log(this.favoritedata);
    })
  }
}
