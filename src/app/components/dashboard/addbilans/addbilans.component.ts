import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';
import { AuthService } from '../../../services/authservices/auth.service';
import { OffreService } from '../../../services/offre/offre.service';

@Component({
  selector: 'app-addbilans',
  templateUrl: './addbilans.component.html',
  styleUrls: ['./addbilans.component.css']
})
export class AddbilansComponent implements OnInit {
  public error = [] as any;
  public form = {
    nom: null,
    code: null,
    etat: null,
    mv_comptable_id: null,
  }
  constructor(
    private Notfiy: SnotifyService,
    private authService:AuthService,
    private offreService: OffreService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // set user id
    const user_info = this.authService.getLoggedUserInfo();
    
  }

  addbilans() {
    console.log(this.form);
    this.Notfiy.info('please wait ...', { timeout: 5000 })
    this.offreService.addBilans(this.form).subscribe(
      data => this.handleResponse1(data),
      error => this.Notfiy.error(error.error.error)
    )
  }

  handleResponse1(data) {
    let _router = this.router;
    this.Notfiy.confirm('Success', {
      buttons: [
        {
          text: 'Offre cree avec success',
          action: toster => {
            _router.navigateByUrl('/dashboard/bilans'),
              this.Notfiy.remove(toster.id)
          }
        },
      ]
    });
    _router.navigateByUrl('/dashboard/bilans');
  }

}
