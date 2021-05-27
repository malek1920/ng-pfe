import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaderResponse, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, finalize, retry} from 'rxjs/operators';
import { Router } from '@angular/router';  
import { AuthService } from '../services/authservices/auth.service';
@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor{
    router: Router;
    user:any = [];
    hardcodedToken : any;
    constructor( private userService:AuthService) {  
   }

    intercept(req : HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
     
     this.user =null;
    this.user  = JSON.parse(localStorage.getItem("currentUser")); 
    if(this.user){
    this.hardcodedToken =this.user.token;
    }
    
    

    if(req.url !== "http://127.0.0.1:8000/api/login" 
    && req.url !== "http://127.0.0.1:8000/api/register"  
     ){
        req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.hardcodedToken}`
      }
    });
    }  

    return next.handle(req)
      .pipe(
        // Retry on failure
        retry(2),

        // Handle errors
        catchError((error: HttpErrorResponse) => {
          // TODO: Add error handling logic here
         // alert(`HTTP Error: ${req.url}`);
          return throwError(error);
        }),

            // PROFILING
            finalize(() => {
                const profilingMsg = `${req.method} "${req.urlWithParams}"`;
                console.log(profilingMsg);
              })

        );
    
  }

}