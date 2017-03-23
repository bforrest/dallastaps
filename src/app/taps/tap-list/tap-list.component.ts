import { Component, OnInit } from '@angular/core';
import {Tap} from '../tap';
import {TapService} from '../tap.service';
import {TapDetailsComponent} from '../tap-details/tap-details.component';

@Component({
  selector: 'tap-list',
  templateUrl: './tap-list.component.html',
  styleUrls: ['./tap-list.component.css'],
  providers: [TapService]
})
export class TapListComponent implements OnInit {

  taps: Tap[]
  selectedTap: Tap;

  constructor(private tapService: TapService) { }

  ngOnInit() {
    this.tapService
      .getTaps()
      .then((( taps: Tap[]) => {
        this.taps = taps.map((tap) => {
          return tap;
        })
      }))
  }

  selectTap(tap: Tap){
    this.selectedTap = tap;
  }

  createNewTap(){
    var spigot = new Tap();
    this.selectedTap = spigot;
  }

  deleteTap = (tapId: string) => {
    var idx = this.getIndexOfTap(tapId);
    if(idx !== -1){
      this.taps.splice(idx, 1);
      this.selectTap(null);
    }
  }

  addTap = (tap: Tap) => {
    this.taps.push(tap);
    this.selectTap(tap);
    return this.taps;
  }

    updateTap = (tap: Tap) => {
    var idx = this.getIndexOfTap(tap._id);
    if (idx !== -1) {
      this.taps[idx] = tap;
      this.selectTap(tap);
    }
    return this.taps;
  }

  private getIndexOfTap = (tapId: string) => {
    return this.taps.findIndex((tap) => {
      return tap._id === tapId;
    })
  }
}
