import { Component, OnInit ,} from '@angular/core';
import { AgmMap } from '@agm/core';
import { response } from 'express';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { url } from 'inspector';
/*import {DBServices } from '../db.services';*/
@Component({
  selector: 'app-stade',
  templateUrl: './stade.component.html',
  styleUrls: ['./stade.component.css']
})
export class StadeComponent implements OnInit{
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
   
 


  zoom: number = 8;
  latitude= 33.886917;
  longitude=9.537499;

  
   /*regions:any [];*/
   villes: any =[1,2,3,5,9,4,7,8,6,6,3,5,8,9,8,8,8,8,8,8,8,88,8,8,8,8,8,8];
  ngOnInit(): void 
  {
    this.http.get(this.url).subscribe(response=>{
      this.villes= response;
    }
      )
  }
  constructor(private http:HttpClient){}
    url= "http://192.168.1.45:8080/villes?size=24";
    /*url="http://192.168.1.45:8080/regions";*/
 

  


  /*villes;
  constructor(dbservices:DBServices){
this.villes=dbservices.getall();
  }  */

}


