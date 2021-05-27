import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BureaucomptableService {
  bureauData: any;
  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(
    private http: HttpClient
  ) { }

  addBureauComptable(data) {
    return this.http.post(`${this.baseUrl}/bureau-comptable/create`, data)
  }

  editBureauComptable(data) {
    return this.http.post(`${this.baseUrl}/bureau-comptable/update`, data)
  }

  deleteBureauComptable(data) {
    return this.http.post(`${this.baseUrl}/bureau-comptable/delete`, data)
  }

  getListeBureauComptable() {
    return this.http.get(`${this.baseUrl}/bureau-comptable`)
  }

  getBureauComptable(data) {
    return this.http.post(`${this.baseUrl}/get-bureau`, data)
  }

}
