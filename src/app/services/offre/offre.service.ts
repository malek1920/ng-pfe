import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OffreService {
  bureauData: any;
  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(
    private http: HttpClient
  ) { }

  addOffres(data) {
    return this.http.post(`${this.baseUrl}/offre/create`, data)
  }

  deleteOffres(data) {
    return this.http.post(`${this.baseUrl}/offre/delete`, data)
  }

  getListeOffres() {
    return this.http.get(`${this.baseUrl}/offre`)
  }

  

  addBilans(data) {
    return this.http.post(`${this.baseUrl}/bilan/create`, data)
  }

  deleteBilans(data) {
    return this.http.post(`${this.baseUrl}/bilan/delete`, data)
  }

  getListeBilans() {
    return this.http.get(`${this.baseUrl}/bilan`)
  }

}