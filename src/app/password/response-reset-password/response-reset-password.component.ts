import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SnotifyService } from 'ng-snotify';
import { AuthService } from 'src/app/services/authservices/auth.service';

@Component({
  selector: 'app-response-reset-password',
  templateUrl: './response-reset-password.component.html',
  styleUrls: ['./response-reset-password.component.css']
})
export class ResponseResetPasswordComponent implements OnInit {


  public error=[];
  public form = {
    email : null,
    password : null,
    password_confirmation:null,
    token :null
  }


  constructor(
    private route:ActivatedRoute,
    private authservice:AuthService,
    private notify: SnotifyService,
    private Notfiy:SnotifyService


  ) { route.queryParams.subscribe(params => {
    this.form.token = params['token']
  });}

  ngOnInit(): void {
  }


  onSubmit(){

    this.Notfiy.info('Wait...' ,{timeout:5000})

    this.authservice.changePassword(this.form).subscribe(

      data => this.handleResponse(data),
      error => this.notify.error(error.error.error)
    );

    

  }
  handleResponse(res) {
    this.Notfiy.success(res.data,{timeout:0});
    this.form.email = null;
  }


}
