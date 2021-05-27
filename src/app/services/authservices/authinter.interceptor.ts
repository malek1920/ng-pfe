import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

const TOKEN_HEADER_KEY = 'Authorization';


@Injectable()
export class AuthinterInterceptor implements HttpInterceptor {

  constructor(    private token:TokenService  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
      let authReq = req;
      const token = this.token.get();

      if (token != null) {
          authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
      }
      return next.handle(authReq);
  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthinterInterceptor, multi: true }
];


