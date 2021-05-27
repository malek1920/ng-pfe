import { Component, OnInit } from '@angular/core';
import { SnotifyService } from 'ng-snotify';
import { AuthService } from 'src/app/services/authservices/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddClientComponent implements OnInit {
  public error = [] as any;
  public form = {
    name: null,
    email: null,
    password: null,
    role: 0,
    offre: null,
    adress: null,
    phone: null,
    c_id: null,
    remember_token: null,
  }
  constructor(
    private Notfiy: SnotifyService,
    private authService:AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // set user id
    const user_info = this.authService.getLoggedUserInfo();
    this.form.c_id = user_info['id'];
  }

  addBureau() {
    this.Notfiy.info('please wait ...', { timeout: 5000 })
    this.authService.signup(this.form).subscribe(
      data => this.handleResponse1(data),
      error => this.Notfiy.error(error.error.error)
    )
  }

  handleResponse1(data) {
    let _router = this.router;
    this.Notfiy.confirm('Success', {
      buttons: [
        {
          text: 'client comptable cree avec success',
          action: toster => {
            _router.navigateByUrl('/dashboard/client'),
              this.Notfiy.remove(toster.id)
          }
        },
      ]
    });
    _router.navigateByUrl('/dashboard/client');
  }

}
