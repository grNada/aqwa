import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { ProfileAdminComponent } from './profile-admin/profile-admin.component';
import { ProfileSimplUserComponent } from './profile-simpl-user/profile-simpl-user.component';
import { ProfilEntrepriseComponent } from './profil-entreprise/profil-entreprise.component';
import { NosOffresComponent } from './nos-offres/nos-offres.component';
import { ChatComponent } from './chat/chat.component';
import { DetailOffreComponent } from './detail-offre/detail-offre.component';
import { AjouterOffreComponent } from './ajouter-offre/ajouter-offre.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { CondidatComponent } from './Utilisateur/condidat/condidat.component';
import { EntrepriseComponent } from './Utilisateur/entreprise/entreprise.component';
import { AuthGuard } from './auth.guard';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

import { SuiviProjetComponent } from './suivi-projet/suivi-projet.component';

const routes: Routes = [
  {path:'' , redirectTo:'acceuile',pathMatch:'full'},
  {path: '' ,component:AcceuilComponent },
  {path: 'connexion' ,component: ConnexionComponent},
  {path: 'loga' ,component: LoginAdminComponent},
  {path: 'profiladmin' ,component: ProfileAdminComponent},
   {path: 'profilesimpluser' ,component: ProfileSimplUserComponent},
   {path: 'profilentreprise' ,component: ProfilEntrepriseComponent},
   {path: 'nosoffres' ,component: NosOffresComponent},
   {path: 'chat' ,component: ChatComponent},
   {path: 'nosoffres/:annonce' ,component: DetailOffreComponent},
   {path: 'ajouter' ,component: AjouterOffreComponent},
   {path: 'discussion' ,component: DiscussionComponent},
   {path: 'utilisateur' ,component: UtilisateurComponent},
   {path: 'condidat' ,component: CondidatComponent},
   {path: 'entreprise' ,component: EntrepriseComponent},
   {path: 'forgetpassword' ,component: ForgetPasswordComponent},
   {path: 'suiviprojet' ,component: SuiviProjetComponent},
  
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
export const routingComponents=[AcceuilComponent, ConnexionComponent, LoginAdminComponent, ProfileAdminComponent,
  ProfileSimplUserComponent,ProfilEntrepriseComponent, NosOffresComponent,ChatComponent,DetailOffreComponent,  AjouterOffreComponent,
  DiscussionComponent,UtilisateurComponent,CondidatComponent,EntrepriseComponent,SuiviProjetComponent,ForgetPasswordComponent]  