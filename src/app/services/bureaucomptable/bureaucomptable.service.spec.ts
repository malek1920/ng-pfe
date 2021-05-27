import { TestBed } from '@angular/core/testing';

import { BureaucomptableService } from './bureaucomptable.service';

describe('BureaucomptableService', () => {
  let service: BureaucomptableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BureaucomptableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
