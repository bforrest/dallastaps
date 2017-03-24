import { Component, Input, OnInit  } from '@angular/core';
import {Tap} from '../tap';
import {TapService} from '../tap.service';
import {Beer} from '../../beers/beer';
import {BeerService} from '../../beers/beer.service';
@Component({
  selector: 'tap-details',
  templateUrl: './tap-details.component.html',
  styleUrls: ['./tap-details.component.css'],
  providers: [BeerService]
})
export class TapDetailsComponent implements OnInit {
  @Input()
  tap: Tap;

  selectedBeer: Beer;

  beers: Beer[];

  @Input()
  createHandler: Function;

  @Input()
  updateHandler: Function;

  @Input()
  deleteHandler: Function;

  selectBeer(beer: Beer){
    this.selectedBeer = beer;
  }

  constructor(private tapService: TapService, private beerService: BeerService) { }
  ngOnInit() {
    this.beerService
      .getBeers()
      .then((beers: Beer[])=> {
        this.beers = beers.map((beer)=> {
          return beer;
        })
      })
  }
  createTap(tap: Tap){
    this.tapService.createTap(tap)
      .then((newTap: Tap) => {
        this.createHandler(newTap)
      });
  }

  updateTap(tap: Tap){
    this.tapService.updateTap(tap)
      .then((updatedTap: Tap) => {
        this.updateHandler(updatedTap);
      });
  }

  deleteTap(tapId: String): void {
    this.tapService.deleteTap(tapId)
      .then((deletedId: String) => {
        this.deleteHandler(deletedId);
      });
  }
}
