import { Component, OnInit, ViewChild } from '@angular/core';
import { MvcomptableService } from 'src/app/services/mvcomptable/mvcomptable.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-mv-comptable-global',
  templateUrl: './mv-comptable-global.component.html',
  styleUrls: ['./mv-comptable-global.component.css']
})
export class MvComptableGlobalComponent implements OnInit {
  listeMvComptable;

  constructor(
    private mvcomptableService: MvcomptableService,
    private Notfiy: SnotifyService,
  ) {

  }
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.mvcomptableService.getListeMvComptableGlobal().subscribe((res: any[]) => {
      this.listeMvComptable = res['Movement_Comptable'];
    })
  }

  deleteMvComptable(id) {
    this.Notfiy.info('please wait ...', { timeout: 5000 })
    this.mvcomptableService.deleteMvComptableGlobal({ id: id }).subscribe(
      data => this.handleResponse1(data),
      error => this.Notfiy.error(error.error.error)
    )
  }

  handleResponse1(data) {
    this.Notfiy.confirm('Success', {
      buttons: [
        {
          text: 'Movement comptable global cree avec success'
        },
      ]
    });
    this.getData();
  }

}
