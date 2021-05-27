import { Component, OnInit } from '@angular/core';
import { BureaucomptableService } from 'src/app/services/bureaucomptable/bureaucomptable.service';
import { SnotifyService } from 'ng-snotify';
import { AuthService } from 'src/app/services/authservices/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditClientComponent implements OnInit {
  public id;
  public error = [] as any;
  public form = {
    id: null,
    name: null,
    email: null,
    role: 0,
    offre: null,
    adress: null,
    phone: null,
    c_id: null,
    remember_token: null,
  }
  constructor(
    private Notfiy: SnotifyService,
    private authService: AuthService,
    private activatedRoute:ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form.id = this.activatedRoute.snapshot.params.id;
    this.getData();
  }

  getData() {
    this.authService.getClientById({id: this.form.id}).subscribe(res => {
      // this.listeBureau = res['Bureau comptable'];
      this.form = res['user'];
    })
  }

  editBureau() {
    this.Notfiy.info('please wait ...', { timeout: 5000 })
    this.authService.updateClient(this.form).subscribe(
      data => this.handleResponse1(data),
      error => this.Notfiy.error(error.error.error)
    )
  }

  handleResponse1(data) {
    let _router = this.router;
    this.Notfiy.confirm('Success', {
      buttons: [
        {
          text: 'client comptable Modifié avec success',
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
