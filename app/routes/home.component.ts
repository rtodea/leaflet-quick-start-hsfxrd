import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { LeafletService } from '../services/leaflet.service';
import { LatLngExpression } from 'leaflet';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  providers: [ LeafletService ]
})
export class HomeComponent implements OnInit {
  @ViewChild('leaflet') map: ElementRef;

  constructor(
    private leaflet: LeafletService
  ) { }

  ngOnInit() {
    this.leaflet.initializeMap(this.map, 51.505);
    this.leaflet.addPopupMarker(51.5, -0.09, "<b>Hello world!</b><br>I am a popup.");
    this.leaflet.addCircle(51.508, -0.11, 'red', '#f03', 0.5, 500);
    this.leaflet.addPolygon([[51.509, -0.08], [51.503, -0.06], [51.51, -0.049]]);
    this.leaflet.registerClick('You clicked at');
  }
}