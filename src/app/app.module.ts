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
import {DropdownModule} from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';
import {StyleClassModule} from 'primeng/styleclass';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {AgmCoreModule} from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    StadeComponent,
    AjoutBddComponent,
    ConfProComponent,
    DashboardComponent,
    LoginComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    CustomFormsModule,
    DropdownModule,
    BrowserAnimationsModule,
    StyleClassModule,
  
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyDP6m9-cEXqrO6qY5jDyDGeDP9gVZgxg7s'
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
