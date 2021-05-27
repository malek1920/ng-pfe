import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';
import { RolperService } from 'src/app/services/rolepermissionservices/rolper.service';

@Component({
  selector: 'app-listofpermissions',
  templateUrl: './listofpermissions.component.html',
  styleUrls: ['./listofpermissions.component.css']
})
export class ListofpermissionsComponent implements OnInit {

  dtOptions: any = {};
  data= [] ;
  public form = {
    name: null,
  }

  constructor(
    private rolperService:RolperService,
    private router: Router,

    private notify: SnotifyService,
    private Notfiy:SnotifyService

  ) { }

  ngOnInit(): void {
    this.getpermissionsList();
    this.data= [];
    
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      lengthMenu : [10,15, 25],
      processing: true
    };

  }


  getpermissionsList(){
    this.rolperService.getPermissionsData().subscribe((res: any[])=> {
      //this.data = res.roles.roles;
        this.data = res;
          
  setTimeout(()=>{                          
  $('#datatableexample').DataTable( {
    pagingType: 'full_numbers',
    pageLength: 10,
    processing: true,
    lengthMenu : [ 10, 15,25],
    order:[[1,"desc"]]
} );
}, 1);
      
        })
      

  }

  insertData()
{
  this.Notfiy.info('Attendez svp ...' ,{timeout:5000})

  return this.rolperService.storePermissions(this.form).subscribe(
    data => this.handleResponse1(data),
    error => this.notify.error(error.error.error)
  );

}


handleResponse1(data){
  // this.token.handle(data.access_token);
 
   let _router = this.router;
   this.Notfiy.confirm('Done! your post is created ,it will be approved by one of our adminstrator', {
     buttons:[
       {text: 'Okay  ! thank u ', 
       action: toster =>{
          _router.navigateByUrl('/permissions'),
          this.Notfiy.remove(toster.id)
         }
     },
     ]
   })
  }


  deleteData(id){
    this.Notfiy.info('Attendez svp ...' ,{timeout:5000})
    return this.rolperService.deletepermission(id).subscribe(
      data => this.handleResponse(data),
      error => this.notify.error(error.error.error)
   )


    }
    handleResponse(res) {
      this.Notfiy.success(res.data,{timeout:0});
    }
  

}
