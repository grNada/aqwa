import { Component, OnInit } from '@angular/core';
import{UserService} from './../../shared/user.service';
import { Entreprise } from './../../module/Entreprise';
import { from } from 'rxjs';
import { NgForm } from './../../../../node_modules/@angular/forms';
import {FormControl,Validator } from '@angular/forms';
@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.scss']
})
export class EntrepriseComponent implements OnInit {

  entreprise:Entreprise=new Entreprise()
  constructor(private Service:UserService) { }
  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.Service.dataEntreprise = {
      id_entreprise:null,
      email:'',
      password:'',
      nom_entreprise:'',
      gouvernorat:'',
      tel:0,
      sexe:'',
      activite:'',
      datenaissance:'',
     
    }
  }

 onSubmit(form: NgForm) {
    if (form.value.id_entreprise == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.Service.PostEntreprise(form.value).subscribe(res => {
      //this.toastr.success('Inserted successfully', 'EMP. Register');
      this.resetForm(form);
      this.Service.GetE();
    });
  }

  updateRecord(form: NgForm) {
    this.Service.PutEntreprise(form.value).subscribe(res => {
      //this.toastr.info('Updated successfully', 'EMP. Register');
      this.resetForm(form);
      this.Service.GetE();
    });

  }

}
