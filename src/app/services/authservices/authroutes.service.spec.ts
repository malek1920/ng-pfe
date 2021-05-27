import { TestBed } from '@angular/core/testing';

import { AuthroutesService } from './authroutes.service';

describe('AuthroutesService', () => {
  let service: AuthroutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthroutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
