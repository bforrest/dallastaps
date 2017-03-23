import { Component, Input } from '@angular/core';
import {Tap} from '../tap';
import {TapService} from '../tap.service';

@Component({
  selector: 'tap-details',
  templateUrl: './tap-details.component.html',
  styleUrls: ['./tap-details.component.css']
})
export class TapDetailsComponent {
  @Input()
  tap: Tap;

  @Input()
  createHandler: Function;

  @Input()
  updateHandler: Function;

  @Input()
  deleteHandler: Function;


  constructor(private tapService: TapService) { }

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
