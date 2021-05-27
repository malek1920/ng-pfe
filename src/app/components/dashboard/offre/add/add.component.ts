import { Component, OnInit } from '@angular/core';
import { OffreService } from 'src/app/services/offre/offre.service';
import { SnotifyService } from 'ng-snotify';
import { AuthService } from 'src/app/services/authservices/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-bureau-comptable',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddOffreComponent implements OnInit {
  public error = [] as any;
  public form = {
    name: null,
    user_id: null,
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
    this.form.user_id = user_info['id'];
  }

  addOffre() {
    this.Notfiy.info('please wait ...', { timeout: 5000 })
    this.offreService.addOffres(this.form).subscribe(
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
            _router.navigateByUrl('/dashboard/offre'),
              this.Notfiy.remove(toster.id)
          }
        },
      ]
    });
    _router.navigateByUrl('/dashboard/offre');
  }

}
