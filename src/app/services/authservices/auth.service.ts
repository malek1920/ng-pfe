import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
  private baseUrl = 'http://127.0.0.1:8000/api';


  constructor(
    private http: HttpClient
  ) { }


  signup(data) {
    return this.http.post(`${this.baseUrl}/register`, data)
  }

  getUser() {
    return this.http.get(`${this.baseUrl}/liste-user`);
  }

  getClient() {
    return this.http.get(`${this.baseUrl}/liste-client`);
  }

  getClientById(id) {
    return this.http.post(`${this.baseUrl}/get-user`, id);
  }

  updateClient(data) {
    return this.http.post(`${this.baseUrl}/update-user`, data);
  }
  
  deleteUser(data) {
    return this.http.post(`${this.baseUrl}/delete-user`, data);
  }

  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data)
  }


  sendPasswordResetLink(data) {
    return this.http.post(`${this.baseUrl}/password/email`, data)
  }

  changePassword(data) {
    return this.http.post(`${this.baseUrl}/password/reset`, data)
  }


  logout() {
    // remove user from local storage and set current user to null
    localStorage.clear();
    document.location.href = '/login';
  }
  ckIfuserAdministrateur() {
    this.userData = null;
    this.userData = JSON.parse(localStorage.getItem("currentUser"));
    if (this.userData.user.role != 1) {
      return this.logout();
    }
  }
  getUserRole() {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if(user['user']['role']){
      return user['user']['role'];
    }else{
      return false;
    }
  }
  getLoggedUserInfo() {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if(user['user']){
      return user['user'];
    }else{
      return false;
    }
  }
}
