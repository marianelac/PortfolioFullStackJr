/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RedesServiceService } from './RedesService.service';

describe('Service: RedesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RedesServiceService]
    });
  });

  it('should ...', inject([RedesServiceService], (service: RedesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
