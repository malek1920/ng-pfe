import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {
  private iss = {
    login: 'http://localhost:8080/api/login',
    signup: 'http://localhost:8080/api/signup'
  };

  constructor() { }

  handle(Token) {
    this.set(Token);
  }

  set(Token) {
    localStorage.setItem('Token', Token);
  }
  get() {
    return localStorage.getItem('Token');
  }

  remove() {
    localStorage.removeItem('Token');
  }

  isValid() {
    const Token = this.get();
    if (Token) {
      const payload = this.payload(Token);
      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;
  }

  payload(Token) {
    const payload = Token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload) {
    return JSON.parse(atob(payload));
  }

  loggedIn() {
    return this.isValid();
  }
}
