/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WhatsonService } from './whatson.service';

describe('WhatsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WhatsonService]
    });
  });

  it('should ...', inject([WhatsonService], (service: WhatsonService) => {
    expect(service).toBeTruthy();
  }));
});
