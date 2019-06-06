import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Condidat } from '../module/condidat';
import { Entreprise } from '../module/Entreprise';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.scss']
})
export class ProfileAdminComponent implements OnInit {
  listCondidat : Condidat[];
  listEntreprise :Entreprise[];
  constructor(private Service : UserService,private toastr: ToastrService) { }

  ngOnInit() {
    this.Service.GetC().subscribe((res: Condidat[])=>{
      console.log(res)
      console.log("************************")
      this.listCondidat = res; 
      })
      this.Service.GetE().subscribe((res: Entreprise[])=>{
        console.log(res)
        console.log("************************")
        this.listEntreprise = res; 
        })
    
  }
  onDeleteC(id: number) {
    if (confirm('Are you sure to delete this record ?')) {
      this.Service.DeleteCondidat(id).subscribe(res => {
        this.Service.GetC();
        this.toastr.warning('Deleted successfully', 'EMP. Register');
      });
    }
  }
  
  onDeleteE(id: number) {
    if (confirm('Are you sure to delete this record ?')) {
      this.Service.DeleteEntreprise(id).subscribe(res => {
        this.Service.GetE();
        this.toastr.warning('Deleted successfully', 'EMP. Register');
      });
    }
  }
}
 