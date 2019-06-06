import { Component, OnInit } from '@angular/core';
import { Annonce } from '../modules/annonces';
import { UserService } from '../shared/user.service';
import { from } from 'rxjs';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-ajouter-offre',
  templateUrl: './ajouter-offre.component.html',
  styleUrls: ['./ajouter-offre.component.scss']
})
export class AjouterOffreComponent implements OnInit {
annonce: Annonce=new Annonce();
  
  constructor(private Service: UserService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.Service.formDataAnnonce = {
    id:null,
    date:'',
    title:'',
    description:'',
    name_annonceur:'',
    phone:'',
    email:'',
    budgee:'',
    duree:'',
    }
  }
  onSubmit(form: NgForm) {
    if (form.value.id_client == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.Service.PostJob(form.value).subscribe(res => {
      //this.toastr.success('Inserted successfully', 'EMP. Register');
      this.resetForm(form);
      this.Service.refreshListAnnonce();
    });
  }

  updateRecord(form: NgForm) {
    this.Service.PutJob(form.value).subscribe(res => {
      //this.toastr.info('Updated successfully', 'EMP. Register');
      this.resetForm(form);
      this.Service.refreshListAnnonce();
    });
}
}
