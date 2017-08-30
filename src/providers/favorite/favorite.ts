import { NotificationsModel } from '../../pages/favorite/favorite.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FavoriteProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FavoriteProvider {
  errorHandle(err: any): Promise<any> {
    return Promise.reject(err.message || err);
  }

  constructor(public http: Http) {
    console.log('Hello FavoriteProvider Provider');
  }
  getData(): Promise<NotificationsModel> {
    return this.http.get('../../assets/example_data/notifications.json')
      .toPromise()
      .then(res => res.json() as NotificationsModel)
      .catch(this.errorHandle);
  }

}
