import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/authservices/auth.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  listeClient;

  constructor(
    private authService: AuthService,
    private Notfiy: SnotifyService,
  ) {

  }
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.authService.getClient().subscribe((res: any[]) => {
      this.listeClient = res['users'];
    })
  }

  deleteclient(id) {
    this.Notfiy.info('please wait ...', { timeout: 5000 })
    this.authService.deleteUser({ id: id }).subscribe(
      data => this.handleResponse1(data),
      error => this.Notfiy.error(error.error.error)
    )
  }

  handleResponse1(data) {
    this.Notfiy.confirm('Success', {
      buttons: [
        {
          text: 'client comptable cree avec success'
        },
      ]
    });
    this.getData();
  }

}
