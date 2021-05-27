import { Component, OnInit } from '@angular/core';
import { MvcomptableService } from 'src/app/services/mvcomptable/mvcomptable.service';
import { SnotifyService } from 'ng-snotify';
import { AuthService } from 'src/app/services/authservices/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditMvComptableGlobalComponent implements OnInit {
  public id;
  public error = [] as any;
  public form = {
    code: null,
    f_id: 1,
    libelle: null,
    m_credit_total: null,
    user_id: null,
    id: null,
  }
  constructor(
    private Notfiy: SnotifyService,
    private authService: AuthService,
    private activatedRoute:ActivatedRoute,
    private mvcomptableService: MvcomptableService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form.id = this.activatedRoute.snapshot.params.id;
    this.getData();
  }

  getData() {
    this.mvcomptableService.getMvComptableGlobal({id: this.form.id}).subscribe(res => {
      this.form = res['mv_comptable'];
    })
  }

  editMv() {
    this.Notfiy.info('please wait ...', { timeout: 5000 })
    this.mvcomptableService.editMvComptableGlobal(this.form).subscribe(
      data => this.handleResponse1(data),
      error => this.Notfiy.error(error.error.error)
    )
  }

  handleResponse1(data) {
    let _router = this.router;
    this.Notfiy.confirm('Success', {
      buttons: [
        {
          text: 'Mouvement comptable Modifié avec success',
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
