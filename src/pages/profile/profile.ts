import { ProfileModel } from './profile.model';
import { ProfileProvider } from '../../providers/profile/profile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profiledata:ProfileModel= new ProfileModel();
  constructor(public navCtrl: NavController, public navParams: NavParams,public profileProvider:ProfileProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.profileProvider.getData().then(res =>{
      this.profiledata = res
      console.log(this.profiledata);
    })
  }


}
