import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';
import { RolperService } from 'src/app/services/rolepermissionservices/rolper.service';

@Component({
  selector: 'app-listofrole',
  templateUrl: './listofrole.component.html',
  styleUrls: ['./listofrole.component.css']
})
export class ListofroleComponent implements OnInit {

  data= [] ;
  public error: any;

  public form = {
    name: null,
  }
  

  constructor(private rolperService:RolperService,
    private router: Router,
    private notify: SnotifyService,
    private Notfiy:SnotifyService
) { }
dtOptions: any = {}; 


  ngOnInit(): void {
    this.getRolesData();
    this.data= [];


    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      lengthMenu : [10,15, 25],
      processing: true
    };
    this.data = [];
    //gestion des roles
    //this.Authroute.authStatus.subscribe(value => this.loggedIn = value);


  }



  getRolesData(){
    this.rolperService.getRoles().subscribe((res: any[])=> {


      this.data=res;
      
      setTimeout(()=>{                          
        $('#datatableexample').DataTable( {
          pagingType: 'full_numbers',
          pageLength: 10,
          processing: true,
          lengthMenu : [ 10, 15,25],
          order:[[1,"desc"]]
      } );
      }, 1);

    }) }

    insertData()
{
  this.Notfiy.info('Attendez svp ...' ,{timeout:5000})

  return this.rolperService.storeRole(this.form).subscribe(
    data => this.handleResponse1(data),
    error => this.notify.error(error.error.error),
   // this.getDictionariesData();
  );

}


handleResponse1(data){
  // this.token.handle(data.access_token);
 
   let _router = this.router;
   this.Notfiy.confirm('Done! your post is created ,it will be approved by one of our adminstrator', {
     buttons:[
       {text: 'Okay  ! thank u ', 
       action: toster =>{
          _router.navigateByUrl('/listofroles'),
          this.Notfiy.remove(toster.id)
         }
     },
     ]
   })
  }

    deleteData(id){
      this.Notfiy.info('Attendez svp ...' ,{timeout:5000})
      return this.rolperService.deleteRole(id).subscribe(
        data => this.handleResponse(data),
        error => this.notify.error(error.error.error)
     )
  
  }
  handleResponse(res) {
    this.Notfiy.success(res.data,{timeout:0});
  }
}
