import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './../shared/user.service';
import { NgForm } from '../../../node_modules/@angular/forms';
import { HttpErrorResponse } from '../../../node_modules/@angular/common/http';
import {FormControl,Validator } from '@angular/forms';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})

export class ConnexionComponent implements OnInit {
   formModel={
     UserName:'',
     Password:''
   }
   isLoginE : boolean=false;
   isLoginC : boolean=false;
   errorbalise: string;
  constructor(private router: Router,
) { }

  ngOnInit() {

  }
  
  onSubmit(form: NgForm) {
    console.log(form.value);
    const username = form.value['email'];
    const password = form.value['password'];
   
    if(form.value['username']==""||form.value['password']=="")
    { 

      this.errorbalise= "<p>Champ vide, veuillez remplire </p>"
    
    }
    else if ((username=="zeinebbelkhiria@gmail.com")&&(password=="zeineb123")){
      this.isLoginE=true;
      this.router.navigate(['/profilentreprise']);
            }
          else
          if((username=="garrab.nada@gmail.com")&&(password=="nadathouraya123")){
            this.isLoginC=true;
            this.router.navigate(['/profilesimpluser']);
                  }
        else {
          this.errorbalise= "<p>Invalide Mot de passe ou email, veuillez réessayer</p>"
        }
   
}
}
