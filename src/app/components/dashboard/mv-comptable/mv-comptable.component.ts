import { Component, OnInit, ViewChild } from '@angular/core';
import { MvcomptableService } from 'src/app/services/mvcomptable/mvcomptable.service';
import { SnotifyService } from 'ng-snotify';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mv-comptable',
  templateUrl: './mv-comptable.component.html',
  styleUrls: ['./mv-comptable.component.css']
})
export class MvComptableComponent implements OnInit {
  listeMvComptable;
  id_parent;

  constructor(
    private mvcomptableService: MvcomptableService,
    private Notfiy: SnotifyService,
    private activatedRoute:ActivatedRoute,
  ) {

  }
  ngOnInit() {
    this.id_parent = this.activatedRoute.snapshot.params.id;
    this.getData();
  }

  getData() {
    console.log("get" + this.id_parent);
    this.mvcomptableService.getMvComptable({ id: this.id_parent }).subscribe((res: any[]) => {
      this.listeMvComptable = res['mv_global'];
      console.log("result" + this.id_parent);
      console.log(res);
    })
  }

  deleteMvComptable(id) {
    this.Notfiy.info('please wait ...', { timeout: 5000 })
    this.mvcomptableService.deleteMvComptable({ id: id }).subscribe(
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
