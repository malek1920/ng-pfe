import { Component, OnInit } from '@angular/core';
import { SnotifyService } from 'ng-snotify';
import { AuthService } from 'src/app/services/authservices/auth.service';

@Component({
  selector: 'app-request-reset-password',
  templateUrl: './request-reset-password.component.html',
  styleUrls: ['./request-reset-password.component.css']
})
export class RequestResetPasswordComponent implements OnInit {

  public form = {
    email: null
  };

  
  public error=[] as any;


  constructor(
    private authservice:AuthService,
    private notify: SnotifyService,
    private Notfiy:SnotifyService

    ) {}

  ngOnInit(): void {
  }

 onSubmit()
{

  this.Notfiy.info('Attendez svp ...' ,{timeout:5000})


   this.authservice.sendPasswordResetLink(this.form).subscribe(

  data => this.handleResponse(data),
  error => this.notify.error(error.error.error)
)
}

handleResponse(res) {
  this.Notfiy.success(res.data,{timeout:0});
  this.form.email = null;
}
}  

