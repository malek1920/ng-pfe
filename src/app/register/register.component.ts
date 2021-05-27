import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';
import { AuthService } from '../services/authservices/auth.service';
import { TokenService } from '../services/authservices/token.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OffreService } from 'src/app/services/offre/offre.service';  
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public listeOffres;
  submitted = false;
  user: any = []; 
  hardcodedToken:any;
  userConnected : any;
  inscriptionForm: FormGroup;
  password_match = false;

  
  datastat = 0;
  datastatrole = 2;

  public error = [] as any;


  constructor(private authservice:AuthService,
    private router: Router,
    private token:TokenService,
    private notify: SnotifyService,
    private offreService: OffreService,
    private Notfiy:SnotifyService,private formBuilder: FormBuilder

     ) { }

  ngOnInit(): void {


    this.inscriptionForm = this.formBuilder.group({ 
      email: ['', [Validators.required, Validators.email]], 
      name: ['', [Validators.required]], 
      role: ['', [Validators.required]], 
      offre: ['', [Validators.required]], 
      adress: ['', [Validators.required]], 
      phone	: ['', [Validators.required]], 
      c_id	: ['', [Validators.required]], 
      password: ['', [Validators.required, Validators.minLength(6)]] ,
      Confpassword: ['', [Validators.required, Validators.minLength(6)]] 
  });
  this.getOffresData();


 
  }

  getOffresData() {
    this.offreService.getListeOffres().subscribe((res: any[]) => {
      this.listeOffres = res['offre'];
    })
  }

    // convenience getter for easy access to form fields
    get f() { return this.inscriptionForm.controls; }


  onSubmit(){

    this.submitted = true; 
   
    // stop here if form is invalid
    if (this.inscriptionForm.invalid) {
      console.log(this.inscriptionForm.value);
        return;
    } 
    if(this.inscriptionForm.value.password != this.inscriptionForm.value.Confpassword){
      this.password_match = true;
      return;
    }
  
    this.Notfiy.info('Attendez svp ...' ,{timeout:5000})
    return this.authservice.signup(this.inscriptionForm.value).subscribe(
       data => this.handleResponse(data),
       error => this.notify.error(error.error.error)  
    )

  }

  handleResponse(data){
    this.token.handle(data.access_token);
  
    let _router = this.router;
    this.Notfiy.confirm('Done! your are registered Now , Please confirm yourself by clicking on verify user button sent to you on your email', {
      buttons:[
        {text: 'Okay  ! thank u ', 
        action: toster =>{
           _router.navigateByUrl('/'),
           this.Notfiy.remove(toster.id)
          }
      },
      ]
    })
    
  }
  
  
  handleError(error) {
    this.error = error.error.errors;
  }



}
