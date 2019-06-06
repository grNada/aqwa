import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import{ Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import{Annonce}from '../modules/annonces'
import { Utilisateur } from '../module/utilisateur';
import { Condidat } from '../module/condidat';
import { Postuler } from '../module/postuler';
import { variable } from '../../../node_modules/@angular/compiler/src/output/output_ast';
import { Entreprise } from '../module/Entreprise';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  formData  : Utilisateur;
  formDataAnnonce  : Annonce;
  dataCondidat:Condidat;
  dataEntreprise:Entreprise;
  dataPostulation:Postuler;
  list : Utilisateur[];
  listAnnonce : any=[];
  listEntreprise :Entreprise[];
  listCondidat : Condidat[];
  listPostulation : Postuler[];
  rootURL="http://localhost:53480/api/";
  
  constructor(private fb: FormBuilder, private http: HttpClient) {}
 
  //Utilisateur
  PostUtilisateur(formData : Utilisateur){
    return this.http.post(this.rootURL+'/Utilisateur',formData);
   
   }
 
   refreshListuser(){
     this.http.get(this.rootURL+'/Utilisateur')
     .toPromise()
     .then(res => this.list = res as Utilisateur[]);
   }
 
   PutUtilisateur(formData : Utilisateur){
     return this.http.put(this.rootURL+'/Utilisateur/'+formData.id_user,formData);
      
    }
 
    DeleteUtilisateur(id : number){
     return this.http.delete(this.rootURL+'/Utilisateur/'+id);
    }
    //Offre
    PostJob(formDataAnnonce : Annonce){
      return this.http.post(this.rootURL+'/Job',formDataAnnonce);
     
     }
   
     refreshListAnnonce(){
      this.http.get(this.rootURL+'/Job')
      .toPromise()
     .then((res:Annonce[]) =>{ 
        console.log(res)
        console.log("************************")
         this.listAnnonce = res });
    /* .subscribe((res)=>{
        console.log(res)
        console.log("************************")
        this.listAnnonce=Object.keys(res).map(key=>{
          console.log(res[key])
          return res[key];
        })})*/
      }
     Get():Observable<any>{
        return this.http.get(this.rootURL+'/Job')
      } 
   
     PutJob(formDataAnnonce : Annonce){
       return this.http.put(this.rootURL+'/Job/'+formDataAnnonce.id,formDataAnnonce);
        
      }
   
      DeleteJob(id : number){
       return this.http.delete(this.rootURL+'/Job/'+id);
      }
       //Condidat ***************************
    PostCondidat(dataCondidat : Condidat){
      return this.http.post(this.rootURL+'/Condidat',dataCondidat);
     
     }
   
     refreshListCondidat(){
       this.http.get(this.rootURL+'/Condidat')
       .toPromise()
       .then(res => this.listCondidat = res as Condidat[]);
     
      } 
      GetC():Observable<any>{
        return this.http.get(this.rootURL+'/Condidat')
      } 
   
      getListCondidat(){
        return this.http.get(this.rootURL+'/Condidat')
      
       }
   
     PutCondidat(dataCondidat : Condidat){
       return this.http.put(this.rootURL+'/Job/'+dataCondidat.id_personne,dataCondidat);
        
     }
     GetCondidat(id : number):Observable<any>{
      return this.http.get(this.rootURL+'/Condidat'+id);
    } 
   
      DeleteCondidat(id : number){
       return this.http.delete(this.rootURL+'/Condidat/'+id);
      }
      getEmails():Observable<any>{
        return this.http.get(this.rootURL+'/Condidat/email')
      }
     /* userAuthentication(userName, password) {
        var data = "username=" + userName + "&password=" + password + "&grant_type=password";
        var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
        return this.http.post(this.rootURL + '/token', data, { headers: reqHeader });
      }*/
       //Entreprise ***************************
    PostEntreprise(dataEntreprise : Entreprise){
      return this.http.post(this.rootURL+'/Entreprise',dataEntreprise);
     
     }
   
     refreshListEntreprise(){
       this.http.get(this.rootURL+'/Entreprise')
       .toPromise()
       .then(res => this.listEntreprise = res as Entreprise[]);
     
      }
      getListEntreprise(){
        return this.http.get(this.rootURL+'/Entreprise')
      
       }
       GetE():Observable<any>{
        return this.http.get(this.rootURL+'/Entreprise')
      } 
   
     PutEntreprise(dataEntreprise : Entreprise){
       return this.http.put(this.rootURL+'/Entreprise/'+dataEntreprise.id_entreprise , +dataEntreprise);
        
      }
   
      DeleteEntreprise(id : number){
       return this.http.delete(this.rootURL+'/Entreprise/'+id);
      }
      GetEntreprise(id :number){
        return this.http.get(this.rootURL+'/Entreprise/'+id)
      }
      // Postuler ****************************************
      PostPostuler(dataPostuler : Entreprise){
        return this.http.post(this.rootURL+'/Postuler',dataPostuler);
       
       }
     
       refreshListPostuler(){
         this.http.get(this.rootURL+'/Postuler')
         .toPromise()
         .then(res => this.listPostulation = res as Postuler[]);
       
        }
        
         GetP():Observable<any>{
          return this.http.get(this.rootURL+'/Postuler')
        } 
     
        PutPostuler(dataPostuler : Postuler){
         return this.http.put(this.rootURL+'/Postuler/'+dataPostuler.id_post , +dataPostuler);
          
        }
     
        DeletePostuler(id : number){
         return this.http.delete(this.rootURL+'/Postuler/'+id);
        }
        GetPostuler(id :number){
          return this.http.get(this.rootURL+'/Postuler/'+id)
        }
}