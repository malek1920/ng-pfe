import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MvcomptableService {
  bureauData: any;
  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(
    private http: HttpClient
  ) { }

  addMvComptableGlobal(data) {
    return this.http.post(`${this.baseUrl}/mv-comptable-global/create`, data)
  }

  editMvComptableGlobal(data) {
    return this.http.post(`${this.baseUrl}/mv-comptable-global/update`, data)
  }

  deleteMvComptableGlobal(data) {
    return this.http.post(`${this.baseUrl}/mv-comptable-global/delete`, data)
  }

  getListeMvComptableGlobal() {
    return this.http.get(`${this.baseUrl}/mv-comptable-global`)
  }

  getMvComptableGlobal(data) {
    return this.http.post(`${this.baseUrl}/get-mv-comptable-global`, data)
  }

  /**/
  addMvComptable(data) {
    return this.http.post(`${this.baseUrl}/mv-comptable/create`, data)
  }

  editMvComptable(data) {
    return this.http.post(`${this.baseUrl}/mv-comptable/update`, data)
  }

  deleteMvComptable(data) {
    return this.http.post(`${this.baseUrl}/mv-comptable/delete`, data)
  }

  getListeMvComptable() {
    return this.http.get(`${this.baseUrl}/mv-comptable`)
  }

  getMvComptableById(data) {
    return this.http.post(`${this.baseUrl}/get-mv-comptable`, data)
  }

  getMvComptable(data) {
    return this.http.post(`${this.baseUrl}/get-mv-comptable-by-parent`, data)
  }

}