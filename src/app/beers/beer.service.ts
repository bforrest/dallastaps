import { Injectable } from '@angular/core';
import { Beer } from './beer';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BeerService{
  private serviceUrl = "/api/beers";

  constructor (private http: Http) {}

  // get("/api/beers")
   getBeers(): Promise<Beer[]> {
      return this.http.get(this.serviceUrl)
              .toPromise()
              .then(response => response.json() as Beer[])
              .catch(this.handleError);
    }
  // post
  createBeer(newBeer: Beer): Promise<Beer> {
    return this.http.post(this.serviceUrl, newBeer)
            .toPromise()
            .then(response => response.json() as Beer)
            .catch(this.handleError);
  }

  // get("/api/beers/:id") endpoint not used by Angular app
  getBeer(beerId: String): Promise<Beer> {
    return this.http.get(this.serviceUrl + '/' + beerId)
            .toPromise()
            .then(response => response.json() as Beer)
            .catch(this.handleError);
  }

  // delete("/api/beers/:id")
  deleteBeer(beerId: String): Promise<String>{
    return this.http.delete(this.serviceUrl + "/" + beerId)
            .toPromise()
            .then(response => response.json() as String)
            .catch(this.handleError);
  }

  // put("/api/contacts/:id")
  updateBeer(beer: Beer): Promise<Beer> {
    var putUrl = this.serviceUrl + '/' + beer._id;
    return this.http.put(putUrl, beer)
            .toPromise()
            .then(response => response.json() as Beer)
            .catch(this.handleError);
  }

  private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }
}
