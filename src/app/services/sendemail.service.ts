import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendemailService {
  bureauData: any;
  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(
    private http: HttpClient
  ) { }

  sendemail(data) {
    return this.http.post(`${this.baseUrl}/send-email`, data)
  }

}