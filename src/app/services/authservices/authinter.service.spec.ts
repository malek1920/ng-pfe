import { TestBed } from '@angular/core/testing';

import { AuthinterService } from './authinter.service';

describe('AuthinterService', () => {
  let service: AuthinterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthinterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
