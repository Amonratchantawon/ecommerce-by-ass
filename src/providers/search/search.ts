import { SearchModel } from '../../pages/search/search.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SearchProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SearchProvider {
  errorHandle(err: any): Promise<any> {
    return Promise.reject(err.message || err);
  }

  constructor(public http: Http) {
    console.log('Hello SearchProvider Provider');
  }
  getData():Promise<SearchModel>{
    return this.http.get('../../assets/example_data/search.json')
    .toPromise()
    .then(res =>res.json() as SearchModel)
    .catch(this.errorHandle);
  }

}
