import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RolperService } from 'src/app/services/rolepermissionservices/rolper.service';

import * as $ from 'jquery';
import { AuthService } from 'src/app/services/authservices/auth.service';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {

  users: any = [];
  changeEtatData: any = [];
  userDataStorage: any;
  constructor(private authservice: AuthService,) {
    this.authservice.ckIfuserAdministrateur();

  }

  ngOnInit(): void {

    this.authservice.getUser().subscribe(res => {
      this.users = res;
    }, err => {
      console.log(err);
    })


  }


  deleteUtilisateur(id, index) {
    const data = {
      id: id,
    };
    this.authservice.deleteUser(data).subscribe(res => {
      this.users.splice(index);
    }, err => {
      console.log(err);
    });

  }
}
