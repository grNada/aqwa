import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './../shared/user.service';
import { NgForm, AbstractControl } from '../../../node_modules/@angular/forms';
import{FormBuilder,Validators,FormGroup,FormControl} from '@angular/forms'
import { Key } from '../../../node_modules/protractor';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {
  logForm: FormGroup;
 validationMessages={
   'email':{
     'required':'email is reqired .',
     'emailDomain':'Email domain should be praimtech.com'
   }
 }
  constructor(private router: Router,private fb :FormBuilder) { }
 
  ngOnInit() {
    this.logForm=this.fb.group({
      email:['',Validators.required],
      password:['']
    })
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    const email = form.value['email'];
    const password = form.value['password'];
   
    if(form.value['email']==""||form.value['password']=="")
    { 

    window.alert("svp remplire tt les champs")
    console.log("svp remplire tt les champs")
    
    }
    else if ((email=="nadazeineb@gmail.com")&&(password=="nadazeineb")){
      this.router.navigate(['/profiladmin']);
    }
   
    
}
    
  

}
/*function emailDomain(control:AbstractControl):{ [key:string]:any}|null{
  const email:string= control.value;
  const domain = email.substring(email.lastIndexOf('@')+1);
  if (email === '' || domain.toLocaleLowerCase()==='gmail.com'){
     return null;

  } else {
    return{'emailDomain': true}
  }
}*/