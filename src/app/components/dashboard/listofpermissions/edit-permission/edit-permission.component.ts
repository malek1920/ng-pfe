import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';
import { RolperService } from 'src/app/services/rolepermissionservices/rolper.service';

@Component({
  selector: 'app-edit-permission',
  templateUrl: './edit-permission.component.html',
  styleUrls: ['./edit-permission.component.css']
})
export class EditPermissionComponent implements OnInit {

  id:any;
  data:any;
  public error = [] as any;
  //public error = null;

  public form={
    name:null, 
  }
  constructor(private rolperService:RolperService ,
    private route:ActivatedRoute,
    private notify: SnotifyService,
    private Notfiy:SnotifyService,
    private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.getData();
 
  }

  getData(){
    this.rolperService.getPermissionById(this.id).subscribe(res=>{
     this.data=res;
     this.form=this.data;
   })
 }

 updateRole(){
  this.Notfiy.info('please wait ...' ,{timeout:5000})
  this.rolperService.updatePermission(this.id,this.form).subscribe(
    data => this.handleResponse1(data),
    error => this.notify.error(error.error.error)


  )
  
    }


    handleResponse1(data){
      // this.token.handle(data.access_token);
     
       let _router = this.router;
       this.Notfiy.confirm('Done! your permission is updated', {
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
}



