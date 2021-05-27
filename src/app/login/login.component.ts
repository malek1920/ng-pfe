import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/authservices/auth.service';
import { AuthroutesService } from '../services/authservices/authroutes.service';
import { TokenService } from '../services/authservices/token.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  user: any = [];
  connected: string;
  errorData = false;

  loading = false;
  returnUrl: string;
  error = '';

  etat = false;

  result:any;


  constructor(
    private authservice: AuthService,
    private Token: TokenService,
    private route: Router, private formBuilder: FormBuilder,
  ) {

    this.connected = "true";

  }

  ngOnInit(): void {

    this.user = null;
    this.user = JSON.parse(localStorage.getItem("currentUser"));
    if (!this.user) {
      this.connected = "false";
    }

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });


  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }


  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    return this.authservice.login(this.loginForm.value).subscribe(

      data => this.handleResponse(data),

      error => this.handleError(error)




    )

  }

  handleResponse(data) {
    //this.Token.handle(data.access_token);

    // store user details and jwt token in local storage to keep user logged in between page refreshes
      this.result = JSON.stringify(data);
 
    if (data.message === "succ") {
      localStorage.setItem('currentUser', JSON.stringify(data));
      this.route.navigateByUrl('dashboard/bureaucomptable');
    }else{
      this.errorData = true;
    }
    //document.location.href = '/voiture';

  }

  handleError(error) {
    this.error = error.error.error;



  }

}
