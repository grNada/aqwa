import { Component, OnInit } from '@angular/core';
import { Condidat } from '../module/condidat';
import { Entreprise } from '../module/Entreprise';
import { UserService } from '../shared/user.service';
import { ToastrService } from '../../../node_modules/ngx-toastr';
import { Annonce } from '../modules/annonces';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-profile-simpl-user',
  templateUrl: './profile-simpl-user.component.html',
  styleUrls: ['./profile-simpl-user.component.scss']
})
export class ProfileSimplUserComponent implements OnInit {
  listEntreprise :Entreprise[];
  listeCondidat :Condidat[];
  listejob:Annonce[];
  searchTerm:string;
  email :string = "garrab.nada@gmail.com";
  constructor(private Service : UserService,private toastr: ToastrService) { }

  ngOnInit() {
    this.Service.GetC().subscribe((res: Condidat[])=>{
      console.log(res)
      console.log("************************")
      this.listeCondidat = res; 
      })
      this.Service.Get().subscribe((res: Annonce[])=>{
        console.log(res)
        console.log("************************")
        this.listejob = res; 
        })
  }
  onSubmit(form:NgForm){
    this.Service.PutCondidat(form.value).subscribe(res => {
      this.toastr.info('Updated successfully', 'Condidat. Register');
       //this.resetForm(form);
       console.log(res)
       this.Service.refreshListCondidat()
     });
  }
}