import { Component } from '@angular/core';
import { MainservService } from './mainserv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front1';
  constructor(public main_service: MainservService){}

}
