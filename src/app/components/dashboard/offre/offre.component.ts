import { Component, OnInit, ViewChild } from '@angular/core';
import { OffreService } from 'src/app/services/offre/offre.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {
  listeOffres;

  constructor(
    private offreService: OffreService,
    private Notfiy: SnotifyService,
  ) {

  }
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.offreService.getListeOffres().subscribe((res: any[]) => {
      this.listeOffres = res['offre'];
    })
  }

  deleteoffre(id) {
    this.Notfiy.info('please wait ...', { timeout: 5000 })
    this.offreService.deleteOffres({ id: id }).subscribe(
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
