import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BeerDetailsComponent } from './beers/beer-details/beer-details.component';
import { BeerListComponent } from './beers/beer-list/beer-list.component';
import { TapListComponent } from './taps/tap-list/tap-list.component';
import { TapDetailsComponent } from './taps/tap-details/tap-details.component';
import { WhatsonListComponent } from './whatson/whatson-list/whatson-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerDetailsComponent,
    BeerListComponent,
    TapListComponent,
    TapDetailsComponent,
    WhatsonListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
