import { TestBed } from '@angular/core/testing';

import { NgProgressRingService } from './ng-progress-ring.service';

describe('NgProgressRingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgProgressRingService = TestBed.get(NgProgressRingService);
    expect(service).toBeTruthy();
  });
});
