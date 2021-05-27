import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MainservService {

  constructor( private router: Router) { }

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }}
