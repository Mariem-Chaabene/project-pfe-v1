import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AjoutBddComponent } from './ajout-bdd/ajout-bdd.component';
import { StadeComponent } from './stade/stade.component';


const routes: Routes = [

{
    path :'ajout-bdd',
    component :AjoutBddComponent
},
{
  path: 'accueil',
  component :AccueilComponent
},
{
  path:'liste_terrain',
  component :StadeComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
