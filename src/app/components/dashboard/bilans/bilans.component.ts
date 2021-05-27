import { Component, OnInit, ViewChild } from '@angular/core';
import { OffreService } from 'src/app/services/offre/offre.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-bilans',
  templateUrl: './bilans.component.html',
  styleUrls: ['./bilans.component.css']
})
export class BilansComponent implements OnInit {

  listebilans;

  constructor(
    private offreService: OffreService,
    private Notfiy: SnotifyService,
  ) {

  }
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.offreService.getListeBilans().subscribe((res: any[]) => {
      this.listebilans = res['bilan'];
    })
  }

  deletebilans(id) {
    this.Notfiy.info('please wait ...', { timeout: 5000 })
    this.offreService.deleteBilans({ id: id }).subscribe(
      data => this.handleResponse1(data),
      error => this.Notfiy.error(error.error.error)
    )
  }

  handleResponse1(data) {
    this.Notfiy.confirm('Success', {
      buttons: [
        {
          text: 'offre cree avec success'
        },
      ]
    });
    this.getData();
  }


}
