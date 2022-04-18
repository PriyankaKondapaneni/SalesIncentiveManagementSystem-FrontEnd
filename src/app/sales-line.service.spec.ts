import { TestBed } from '@angular/core/testing';

import { SalesLineService } from './sales-line.service';

describe('SalesLineService', () => {
  let service: SalesLineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesLineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
