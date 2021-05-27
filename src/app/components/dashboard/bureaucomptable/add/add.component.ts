import { Component, OnInit } from '@angular/core';
import { BureaucomptableService } from 'src/app/services/bureaucomptable/bureaucomptable.service';
import { SnotifyService } from 'ng-snotify';
import { AuthService } from 'src/app/services/authservices/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-bureau-comptable',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddBureauComptableComponent implements OnInit {
  public error = [] as any;
  public form = {
    name: null,
    phone: null,
    adress: null,
    user_id: null,
  }
  constructor(
    private Notfiy: SnotifyService,
    private authService:AuthService,
    private bureaucomptableService: BureaucomptableService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // set user id
    const user_info = this.authService.getLoggedUserInfo();
    this.form.user_id = user_info['id'];
  }

  addBureau() {
    this.Notfiy.info('please wait ...', { timeout: 5000 })
    this.bureaucomptableService.addBureauComptable(this.form).subscribe(
      data => this.handleResponse1(data),
      error => this.Notfiy.error(error.error.error)
    )
  }

  handleResponse1(data) {
    let _router = this.router;
    this.Notfiy.confirm('Success', {
      buttons: [
        {
          text: 'Bureau comptable cree avec success',
          action: toster => {
            _router.navigateByUrl('/dashboard/bureaucomptable'),
              this.Notfiy.remove(toster.id)
          }
        },
      ]
    });
    _router.navigateByUrl('/dashboard/bureaucomptable');
  }

}
