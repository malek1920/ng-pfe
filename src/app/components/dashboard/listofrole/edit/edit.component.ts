import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';
import { RolperService } from 'src/app/services/rolepermissionservices/rolper.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id:any;
  data:any;
  
  public form={
    name:null, 
  }
  constructor(private rolperService:RolperService ,
    private route:ActivatedRoute,
    private router: Router,

    private notify: SnotifyService,
    private Notfiy:SnotifyService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
   this.getData();
  }


  
  getData(){
    this.rolperService.getRoleById(this.id).subscribe(res=>{
     this.data=res;
     this.form=this.data;
   })
 }

 updateRole(){
  this.Notfiy.info('Attendez svp ...' ,{timeout:5000})

this.rolperService.updateRole(this.id,this.form).subscribe(
data => this.handleResponse1(data),
error => this.notify.error(error.error.error),

)

}
 

handleResponse1(data){
  // this.token.handle(data.access_token);
 
   let _router = this.router;
   this.Notfiy.confirm('Done! your role name is updated ', {
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


  

}