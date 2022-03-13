import { Component } from '@angular/core';

@Component({
  selector: 'app-ajout-bdd',
  templateUrl: './ajout-bdd.component.html',
  styleUrls: ['./ajout-bdd.component.css']
})
export class AjoutBddComponent {
  logObj(partner_firstname: any) {
    console.log(partner_firstname);
  }

}
