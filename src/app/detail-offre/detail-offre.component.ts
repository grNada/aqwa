import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { Annonce } from '../modules/annonces';
import { Postuler } from '../module/postuler';
import { NgForm } from '../../../node_modules/@angular/forms';
import { UserService } from '../shared/user.service';
import { ToastrService } from '../../../node_modules/ngx-toastr';
@Component({
  selector: 'app-detail-offre',
  templateUrl: './detail-offre.component.html',
  styleUrls: ['./detail-offre.component.scss']
})
export class DetailOffreComponent implements OnInit {
annonce: Annonce;
postuler : any=[];
  constructor(private router:ActivatedRoute,private Service :UserService ,private toastr: ToastrService) { }
  
  ngOnInit() {
    this.router.params.subscribe(params=>{
      console.log(params);
    this.annonce=new Annonce();
    this.annonce.id=params.id;
    this.annonce.title=params.title;
    this.annonce.description=params.description;
    this.annonce.date=params.date;
    this.annonce.email=params.email;
    this.annonce.name_annonceur=params.name_annonceur;
    this.annonce.phone=params.phone;
    this.annonce.budgee=params.budgee;
    this.annonce.duree=params.duree;
    console.log(this.annonce)

    this.postuler=new Postuler();
    this.postuler.id_personne=12;
    this.postuler.description=params.description;
    this.postuler.datePostulation=params.date;
    this.postuler.budgee=params.budgee;
    this.postuler.duree=params.duree;
    console.log(this.postuler);
   
  });
  }
  
  onSubmit(postuler){
    console.log(postuler)
    this.Service.PostPostuler(postuler.value).subscribe(res => {
      console.log(res);
      this.toastr.success('Inserted successfully', 'EMP. Register');
      this.Service.GetE();
    });
     }
     
}
