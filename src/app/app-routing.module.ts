import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AjoutBddComponent } from './ajout-bdd/ajout-bdd.component';
import { ConfProComponent } from './conf-pro/conf-pro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { StadeComponent } from './stade/stade.component';

const routes: Routes = [
  {
    path: '',
    component: AccueilComponent,
  },
  {
     path:'login',
     component:LoginComponent
  },
{
  path:'dashboard',
  component:DashboardComponent
},
  {
    path:'confirmation_d"envoie_demande',
    component :ConfProComponent

  },
  {
    path: 'ajout-bdd',
    component: AjoutBddComponent,
  },
  {
    path: 'accueil',
    component: AccueilComponent,
  },
  {
    path: 'choisir_terrain',
    component: StadeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
