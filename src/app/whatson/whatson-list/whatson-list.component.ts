import { Component, OnInit } from '@angular/core';
import {Tap} from '../../taps/tap';
import {WhatsonService} from '../whatson.service';

@Component({
  selector: 'whatson-list',
  templateUrl: './whatson-list.component.html',
  styleUrls: ['./whatson-list.component.css'],
  providers: [WhatsonService]
})

export class WhatsonListComponent implements OnInit {
  taps: Tap[]

  constructor(private whatsonService: WhatsonService) { }

  ngOnInit() {
    this.whatsonService
      .getTaps()
      .then((taps: Tap[])=>{
        this.taps = taps.map((tap) => {
          return tap;
        })
      })
  }

}
