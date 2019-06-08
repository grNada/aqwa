import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import{Annonce}from '../modules/annonces'
import { ToastrService } from '../../../node_modules/ngx-toastr';
import { NgForm } from '../../../node_modules/@angular/forms';
import { Postuler } from '../module/postuler';


@Component({
  selector: 'app-nos-offres',
  templateUrl: './nos-offres.component.html',
  styleUrls: ['./nos-offres.component.scss']
})
export class NosOffresComponent implements OnInit {
  listAnnonce: Annonce[];
  listPostuler:any=[];
  searchTerm:string;
  searchDate :string;
  constructor(private Service : UserService,private toastr: ToastrService) { }

  ngOnInit() {   
    this.Service.Get().subscribe((res: Annonce[])=>{
      console.log(res)
      console.log("************************")
      this.listAnnonce = res; 
      })

  }

 
 
  populateForm(annonce: Annonce) {
    this.Service.formDataAnnonce = Object.assign({}, annonce);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.Service.DeleteJob(id).subscribe(res => {
        this.Service.refreshListAnnonce();
       this.toastr.warning('Deleted successfully', 'annonce. Register');
      });
    }
  }
  /*ngOnInit() {
   this.service.getAnnonces().subscribe((res)=>{
    console.log(res)
    console.log("************************")
    this.annonceObject=Object.keys(res).map(key=>{
      console.log(res[key])
      return res[key];
    })})*/

  }
