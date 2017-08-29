import { ProfileModel } from '../../pages/profile/profile.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProfileProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ProfileProvider {
  errorHandle(err: any): Promise<any> {
    return Promise.reject(err.message || err);
  }

  constructor(public http: Http) {
    console.log('Hello ProfileProvider Provider');
  }
  getData():Promise<ProfileModel>{
    return this.http.get('../../assets/example_data/profile.json')
    .toPromise()
    .then(res =>res.json() as ProfileModel)
    .catch(this.errorHandle);
  }

}
