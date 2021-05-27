import { Component, OnInit, ViewChild } from '@angular/core';
import { BureaucomptableService } from 'src/app/services/bureaucomptable/bureaucomptable.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-bureaucomptable',
  templateUrl: './bureaucomptable.component.html',
  styleUrls: ['./bureaucomptable.component.css']
})
export class BureaucomptableComponent implements OnInit {
  listeBureau;

  constructor(
    private bureauComptableService: BureaucomptableService,
    private Notfiy: SnotifyService,
  ) {

  }
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.bureauComptableService.getListeBureauComptable().subscribe((res: any[]) => {
      this.listeBureau = res['Bureau comptable'];
    })
  }

  deleteBureau(id) {
    this.Notfiy.info('please wait ...', { timeout: 5000 })
    this.bureauComptableService.deleteBureauComptable({ id: id }).subscribe(
      data => this.handleResponse1(data),
      error => this.Notfiy.error(error.error.error)
    )
  }

  handleResponse1(data) {
    this.Notfiy.confirm('Success', {
      buttons: [
        {
          text: 'Bureau comptable cree avec success'
        },
      ]
    });
    this.getData();
  }

}
