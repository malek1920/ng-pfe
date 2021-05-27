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
export class EditBureauComptableComponent implements OnInit {
  public id;
  public error = [] as any;
  public form = {
    name: null,
    phone: null,
    adress: null,
    user_id: null,
    id: null,
  }
  constructor(
    private Notfiy: SnotifyService,
    private authService: AuthService,
    private activatedRoute:ActivatedRoute,
    private bureaucomptableService: BureaucomptableService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form.id = this.activatedRoute.snapshot.params.id;
    this.getData();
  }

  getData() {
    this.bureaucomptableService.getBureauComptable({id: this.form.id}).subscribe(res => {
      // this.listeBureau = res['Bureau comptable'];
      this.form = res['Bureau comptable'];
    })
  }

  editBureau() {
    this.Notfiy.info('please wait ...', { timeout: 5000 })
    this.bureaucomptableService.editBureauComptable(this.form).subscribe(
      data => this.handleResponse1(data),
      error => this.Notfiy.error(error.error.error)
    )
  }

  handleResponse1(data) {
    let _router = this.router;
    this.Notfiy.confirm('Success', {
      buttons: [
        {
          text: 'Bureau comptable Modifié avec success',
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
