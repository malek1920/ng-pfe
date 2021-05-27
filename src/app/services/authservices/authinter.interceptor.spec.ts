import { TestBed } from '@angular/core/testing';

import { AuthinterInterceptor } from './authinter.interceptor';

describe('AuthinterInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthinterInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthinterInterceptor = TestBed.inject(AuthinterInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
