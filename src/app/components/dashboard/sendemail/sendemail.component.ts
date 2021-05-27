import { Component, OnInit } from '@angular/core';
import { SendemailService } from 'src/app/services/sendemail.service';
import { SnotifyService } from 'ng-snotify';
import { AuthService } from 'src/app/services/authservices/auth.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-sendemail',
  templateUrl: './sendemail.component.html',
  styleUrls: ['./sendemail.component.css']
})
export class SendemailComponent implements OnInit {
  public listeClient;
  public error = [] as any;
  public form = {
    subject: null,
    message: null,
    id: null,
  }
  constructor(
    private Notfiy: SnotifyService,
    private authService: AuthService,
    private sendemailService: SendemailService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // set user id
    this.getData();
  }

  getData() {
    this.authService.getClient().subscribe((res: any[]) => {
      this.listeClient = res['users'];
    })
  }

  sendEmail() {
    this.Notfiy.info('please wait ...', { timeout: 5000 })
    this.sendemailService.sendemail(this.form).subscribe(
      data => this.handleResponse1(data),
      error => this.Notfiy.error(error.error.error)
    )
  }

  handleResponse1(data) {
    let _router = this.router;
    this.Notfiy.confirm('Success', {
      buttons: [
        {
          text: 'Email envoyer avec success',
          action: toster => {
            this.form = {
              subject: null,
              message: null,
              id: null,
            }
            this.Notfiy.remove(toster.id)
          }
        },
      ]
    });
  }

}
