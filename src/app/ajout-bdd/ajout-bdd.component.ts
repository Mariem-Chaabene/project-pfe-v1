import { Component } from '@angular/core';
/*import {MatDialog} from '@angular/material/dialog';*/

@Component({
  selector: 'app-ajout-bdd',
  templateUrl: './ajout-bdd.component.html',
  styleUrls: ['./ajout-bdd.component.css']
})
export class AjoutBddComponent {
 onSubmit(data:any)
  {
    console.warn(data);
  }
 
 /* constructor(public dialog: MatDialog) {}
 openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }*/

}


