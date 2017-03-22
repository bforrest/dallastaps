import { Component, OnInit } from '@angular/core';
import {Beer} from '../beer';
import {BeerService} from '../beer.service';
import {BeerDetailsComponent} from '../beer-details/beer-details.component';
@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  beers: Beer[]
  selectedBeer: Beer;

  constructor(private beerService: BeerService) { }

  ngOnInit() {
    this.beerService
      .getBeers()
      .then((beers: Beer[])=> {
        this.beers = beers.map((beer)=> {
          return beer;
        })
      })
  }

  private getIndexOfBeer = (beerId: string) => {
    return this.beers.findIndex((beer)=> {
      return beer._id === beerId;
    })
  }

  selectBeer(beer: Beer){
    this.selectedBeer = beer;
  }

  createNewBeer(){
    var suds: Beer = {
          name: '',
          brewery: '',
          brewer_url: '',
          url: '',
          abv: 0,
          ibu: 0,
          description: ''
        }
    this.selectBeer(suds);
  }

  deleteBeer = (beerId: string) => {
    var idx = this.getIndexOfBeer(beerId);
    if (idx !== -1) {
      this.beers.splice(idx, 1);
      this.selectBeer(null);
    }
    return this.beers;
  }

  addBeer = (beer: Beer) => {
    this.beers.push(beer);
    this.selectBeer(beer);
    return this.beers;
  }

  updateBeert = (beer: Beer) => {
    var idx = this.getIndexOfBeer(beer._id);
    if (idx !== -1) {
      this.beers[idx] = beer;
      this.selectBeer(beer);
    }
    return this.beers;
  }
}

/*
*/
