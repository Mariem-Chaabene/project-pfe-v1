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
  zoom: number = 8;
  latitude= 33.886917;
  longitude=9.537499;

   villes: any =[];
  ngOnInit(): void 
  {
    this.http.get(this.url).subscribe(response=>{
      this.villes= response;
    }
      )
  }
  constructor(private http:HttpClient){}
    url= "http://192.168.1.45:8080/villes";
  

  


  /*villes;
  constructor(dbservices:DBServices){
this.villes=dbservices.getall();
  }  */

}


