import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../../../node_modules/ngx-toastr';
import { UserService } from '../shared/user.service';
import { Entreprise } from '../module/Entreprise';
import { NgForm } from '../../../node_modules/@angular/forms';
import { Postuler } from '../module/postuler';
import { Condidat } from '../module/condidat';
import { Annonce } from '../modules/annonces';

@Component({
  selector: 'app-profil-entreprise',
  templateUrl: './profil-entreprise.component.html',
  styleUrls: ['./profil-entreprise.component.scss']
})
export class ProfilEntrepriseComponent implements OnInit {
  listEntreprise :Entreprise[];
  listepostuler1 :Postuler[];
  listepostuler2 :Postuler[];
  listeCondidat1 :Condidat[];
  listeCondidat2 :Condidat[];
  listeannonce :Annonce[];
  email :string = "zeinbbelkhiria@gmail.com"
  baliseE:string;
  constructor(private Service : UserService,private toastr: ToastrService) { }

  ngOnInit() {
   
    this.Service.GetE().subscribe((res: Entreprise[])=>{
      console.log(res)
      console.log("************************") 
      this.listEntreprise = res; 
      })
    
        this.Service.GetC().subscribe((res: Condidat[])=>{
          console.log(res)
          console.log("************************")
          this.listeCondidat1 = res; 
          })
          this.Service.Get().subscribe((res: Annonce[])=>{
            console.log(res)
            console.log("************************")
            this.listeannonce = res; 
            })
      //this.baliseE= "<p>Invalide Mot de passe ou email, veuillez réessayer</p>"
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
 this.Service.PutEntreprise(form.value.id_entreprise +form.value).subscribe(res => {
     this.toastr.info('Updated successfully', 'Condidat. Register');
      this.resetForm(form);
      this.Service.refreshListCondidat()
    });}
    public chartType: string = 'line';

  public chartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40,90], label: 'premier candidat' },
    { data: [28, 48, 40, 19, 86, 27, 80,100], label: 'deuxiéme candidat' }
  ];

  public chartLabels: Array<any> = ['semaine 1', 'semaine 2', 'semaine 3', 'semaine 4', 'semaine 5', 'semaine 6', 'semaine 7', 'semaine 8'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}
