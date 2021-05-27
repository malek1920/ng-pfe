import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SnotifyService } from 'ng-snotify';
import { RolperService } from 'src/app/services/rolepermissionservices/rolper.service';

@Component({
  selector: 'app-permissiontorole',
  templateUrl: './permissiontorole.component.html',
  styleUrls: ['./permissiontorole.component.css']
})
export class PermissiontoroleComponent implements OnInit {

  
  data= [] ;
  public form = {
    permission_id:null,
    }
  constructor(    private rolperService:RolperService ,
    private route:ActivatedRoute,
    private notify: SnotifyService,
    private Notfiy:SnotifyService

    ) { let id = this.route.snapshot.params.id;
    }
  ngOnInit(): void {

    this.data = [];
    this.getData();
  }

  
  getData(){
    this.rolperService.getPermissionsData().subscribe((res: any[])=> {
 //this.data = res.roles.roles;
   this.data = res;    
  } 
    )}


    insertData(){
      this.Notfiy.info('Attendez svp ...' ,{timeout:5000})

        let permission =  Object.keys(this.form);
        let pickedRoles = permission.filter(r=>{
         return this.form[r] == true;
        })
        this.form['permission_id'] = pickedRoles[0];
     // console.log(this.form);// OUTPUT id
     this.rolperService.adPermissionsToRole(this.route.snapshot.params.id,this.form).subscribe(

      data => this.handleResponse1(data),
      error => this.notify.error(error.error.error),
  
      )
    }

    handleResponse1(res) {
      this.Notfiy.success(res.data,{timeout:0});
    }





}
