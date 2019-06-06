import { Component, OnInit } from '@angular/core';
import{UserService} from './../../shared/user.service';
import { Condidat } from './../../module/Condidat';
import { from } from 'rxjs';
import { NgForm } from './../../../../node_modules/@angular/forms';
import { ToastrService } from '../../../../node_modules/ngx-toastr';
import {FormControl,Validator } from '@angular/forms';

@Component({
  selector: 'app-condidat',
  templateUrl: './condidat.component.html',
  styleUrls: ['./condidat.component.scss']
})
export class CondidatComponent implements OnInit {

condidat:Condidat=new Condidat()
constructor(private Service:UserService ,private toastr: ToastrService) { }
  ngOnInit() {
    this.resetForm();
    this.Service.getEmails().subscribe((res : Condidat[])=>{
      console.log(res +"************************")
    });
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.Service.dataCondidat = {
      id_personne:null,
      username:'',
      email:'',
      password:'',
      cv:'',
      gouvernorat:'',
      tel:null,
      sexe:'',
      competence:'',
      datenaissance:'',
     
     
    }
  }

 onSubmit(form: NgForm) {
    if (form.value.id_personne == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  
  insertRecord(form: NgForm) {
    
    this.Service.PostCondidat(form.value).subscribe(res => {
      this.toastr.success('Inserted successfully', 'Condidat. Register');
      this.resetForm(form);
      this.Service.refreshListCondidat();
    });
  }

  updateRecord(form: NgForm) {
    this.Service.PutCondidat(form.value).subscribe(res => {
     this.toastr.info('Updated successfully', 'Condidat. Register');
      this.resetForm(form);
      this.Service.refreshListCondidat()
    });

  }
}