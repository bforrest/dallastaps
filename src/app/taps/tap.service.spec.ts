/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TapService } from './tap.service';

describe('TapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TapService]
    });
  });

  it('should ...', inject([TapService], (service: TapService) => {
    expect(service).toBeTruthy();
  }));
});
