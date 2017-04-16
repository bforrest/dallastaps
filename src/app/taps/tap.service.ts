import { Injectable } from '@angular/core';
import {Tap} from './tap';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class TapService {
  private serviceUrl = '/api/taps';

  constructor(private http: Http) { }

  getTaps(): Promise<Tap[]> {
    return this.http.get(this.serviceUrl)
      .toPromise()
      .then(response => response.json() as Tap[])
      .catch(this.handleError);
  }
  // tslint:disable-next-line:one-line
  createTap(newTap: Tap): Promise<Tap>{
    return this.http.post(this.serviceUrl, newTap)
      .toPromise()
      .then(response => response.json() as Tap)
      .catch(this.handleError);
  }

  deleteTap(tapId: String): Promise<String>{
    return this.http.delete(this.serviceUrl + '/' + tapId)
      .toPromise()
      .then(response => response.json() as String)
      .catch(this.handleError);
  }

  updateTap(tap: Tap): Promise<Tap>{
    const putUrl = this.serviceUrl + '/' + tap._id;
    return this.http.put(putUrl, tap)
      .toPromise()
      .then(response => response.json() as Tap)
      .catch(this.handleError);
  }


    private handleError (error: any) {
      const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }
}
