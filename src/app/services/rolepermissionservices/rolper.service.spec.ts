import { TestBed } from '@angular/core/testing';

import { RolperService } from './rolper.service';

describe('RolperService', () => {
  let service: RolperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
