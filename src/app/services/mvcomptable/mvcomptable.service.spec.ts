import { TestBed } from '@angular/core/testing';

import { MvcomptableService } from './mvcomptable.service';

describe('MvcomptableService', () => {
  let service: MvcomptableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MvcomptableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
