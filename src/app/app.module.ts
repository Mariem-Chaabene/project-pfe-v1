import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { StadeComponent } from './stade/stade.component';
import { AjoutBddComponent } from './ajout-bdd/ajout-bdd.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { ConfProComponent } from './conf-pro/conf-pro.component';




@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    StadeComponent,
    AjoutBddComponent,
    ConfProComponent,
    

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    CustomFormsModule
    


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
