import { Component, OnInit } from '@angular/core';
import { MvcomptableService } from 'src/app/services/mvcomptable/mvcomptable.service';
import { SnotifyService } from 'ng-snotify';
import { AuthService } from 'src/app/services/authservices/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddMvComptableGlobalComponent implements OnInit {
  public error = [] as any;
  public form = {
    code: null,
    f_id: 1,
    libelle: null,
    m_credit_total: null,
    user_id: null,
  }
  constructor(
    private Notfiy: SnotifyService,
    private authService:AuthService,
    private mvcomptableService: MvcomptableService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // set user id
    const user_info = this.authService.getLoggedUserInfo();
    this.form.user_id = user_info['id'];
  }

  addMv() {
    this.Notfiy.info('please wait ...', { timeout: 5000 })
    this.mvcomptableService.addMvComptableGlobal(this.form).subscribe(
      data => this.handleResponse1(data),
      error => this.Notfiy.error(error.error.error)
    )
  }

  handleResponse1(data) {
    let _router = this.router;
    this.Notfiy.confirm('Success', {
      buttons: [
        {
          text: 'Mouvement comptable cree avec success',
          action: toster => {
            _router.navigateByUrl('/dashboard/mvglobal'),
              this.Notfiy.remove(toster.id)
          }
        },
      ]
    });
    _router.navigateByUrl('/dashboard/mvglobal');
  }

}
