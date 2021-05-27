import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolperService {

  private baseUrl = 'http://127.0.0.1:8000/api';


  constructor(private http:HttpClient) { }

  getRoles() {
    return this.http.get(`${this.baseUrl}/roles`)
  }

  getRoleById(id){
    return this.http.get(`${this.baseUrl}/get-specefic-role/`+id)
  }

  
  storeRole(data) {
    //const headers = new HttpHeaders({'Authorization': 'Bearer ${localStorage.getItem('token')}  });
    return this.http.post(`${this.baseUrl}/roles`,data)
  }

  deleteRole(id){ 
    return this.http.delete(`${this.baseUrl}/delete-role/`+id)
  }


  updateRole(id,data) {
    //const headers = new HttpHeaders({'Authorization': 'Bearer ${localStorage.getItem('token')}  });
    return this.http.post(`${this.baseUrl}/edit-role-name/`+id,data)
  }


  getUsersData() {
    return this.http.get(`${this.baseUrl}/users_list`)
  }

  getPermissionsData() {
    return this.http.get(`${this.baseUrl}/permissions`)
  }

  storePermissions(data) {
    //const headers = new HttpHeaders({'Authorization': 'Bearer ${localStorage.getItem('token')}  });
    return this.http.post(`${this.baseUrl}/permissions`,data)
  }

  adRoleToUser(id,data) {
    //const headers = new HttpHeaders({'Authorization': 'Bearer ${localStorage.getItem('token')}  });
    return this.http.post(`${this.baseUrl}/assignroletouser/`+id,data)
  
  }

  adPermissionsToRole(id,data) {
    //const headers = new HttpHeaders({'Authorization': 'Bearer ${localStorage.getItem('token')}  });
    return this.http.post(`${this.baseUrl}/rolepermissions/`+id,data)
  }

  getPermissionById(id){
    return this.http.get(`${this.baseUrl}/get-specefic-permission/`+id)
  }

  updatePermission(id,data) {
    //const headers = new HttpHeaders({'Authorization': 'Bearer ${localStorage.getItem('token')}  });
    return this.http.post(`${this.baseUrl}/edit-permission-name/`+id,data)
  }

  deletepermission(id){ 
    return this.http.delete(`${this.baseUrl}/delete-permission/`+id)
  }


 
  
}