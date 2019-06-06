import { Component, OnInit } from '@angular/core';
import { Condidat } from '../module/condidat';
import { Entreprise } from '../module/Entreprise';
import { UserService } from '../shared/user.service';
import { ToastrService } from '../../../node_modules/ngx-toastr';
import { Annonce } from '../modules/annonces';

@Component({
  selector: 'app-profile-simpl-user',
  templateUrl: './profile-simpl-user.component.html',
  styleUrls: ['./profile-simpl-user.component.scss']
})
export class ProfileSimplUserComponent implements OnInit {
  listEntreprise :Entreprise[];
  listeCondidat :Condidat[];
  listejob:Annonce[];
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

}
