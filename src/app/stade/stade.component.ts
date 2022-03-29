import { Component, OnInit ,} from '@angular/core';
import { AgmMap } from '@agm/core';
import { response } from 'express';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { url } from 'inspector';
@Component({
  selector: 'app-stade',
  templateUrl: './stade.component.html',
  styleUrls: ['./stade.component.css']
})
export class StadeComponent {
 
  zoom: number = 8;
  latitude= 33.886917;
  longitude=9.537499;
  

}


