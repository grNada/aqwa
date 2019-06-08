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
    { data: [28, 48, 80,100], label: 'deuxiéme candidat' }
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

  
public Type: string = 'bar';

public Datasets: Array<any> = [
  { data: [65, 59, 100, 81], label: '1er freelance ' },
];

public Labels: Array<any> = ['Activité 1', 'Activité 2', 'Activité 3', 'Activité 4'];

  public Colors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    },
    {
      backgroundColor: [
        'rgba(255, 125, 158, 0.2)',
        'rgba(3, 111, 184, 0.2)',
        'rgba(255, 255, 137, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(126, 243, 243, 0.2)',
        'rgba(255, 210, 115, 0.2)'
      ],
      borderColor: [
        'rgba(255, 125, 158, 1)',
        'rgba(3, 111, 184, 1)',
        'rgba(255, 255, 137, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(126, 243, 243, 1)',
        'rgba(255, 210, 115, 1)'
      ],
      borderWidth: 2,
    },
    ];

    public Options: any = {
      responsive: true,
        scales: {
          xAxes: [{
            stacked: true
            }],
          yAxes: [
          {
            stacked: true
          }
        ]
      }
    };
    public Clicked(e: any): void { }
    public Hovered(e: any): void { }
    

public Typ: string = 'bar';

public Dataset: Array<any> = [
  { data: [75, 80, 90, 100, 55], label: '1ére freelanc' },
];

public Label: Array<any> = ['Activite 1', 'Activite 2', 'Activite 3', 'Activite 4', 'Activite 5',];

  public Color: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    },
    {
      backgroundColor: [
        'rgba(255, 125, 158, 0.2)',
        'rgba(3, 111, 184, 0.2)',
        'rgba(255, 255, 137, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(126, 243, 243, 0.2)',
        'rgba(255, 210, 115, 0.2)'
      ],
      borderColor: [
        'rgba(255, 125, 158, 1)',
        'rgba(3, 111, 184, 1)',
        'rgba(255, 255, 137, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(126, 243, 243, 1)',
        'rgba(255, 210, 115, 1)'
      ],
      borderWidth: 2,
    },
    ];

    public Option: any = {
      responsive: true,
        scales: {
          xAxes: [{
            stacked: true
            }],
          yAxes: [
          {
            stacked: true
          }
        ]
      }
    };
    public Click(e: any): void { }
    public Hover(e: any): void { }
}

