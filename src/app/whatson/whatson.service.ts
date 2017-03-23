import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Tap} from '../taps/tap';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WhatsonService {
  private serviceUrl = "/api/whatson";

  constructor(private http: Http) { }

  getTaps(): Promise<Tap[]>{
    return this.http.get(this.serviceUrl)
      .toPromise()
      .then( response => response.json() as Tap[])
      .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }
}
