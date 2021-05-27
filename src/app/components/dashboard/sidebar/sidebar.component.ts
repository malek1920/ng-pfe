import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authservices/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  userRole;
  userInfo;

  constructor( private authservice:AuthService) {
  }

  ngOnInit(): void {
    this.userRole = this.authservice.getUserRole();
    this.userInfo = this.authservice.getLoggedUserInfo();
  }

}
