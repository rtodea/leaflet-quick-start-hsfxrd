import { Injectable, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as L from 'leaflet';

@Injectable()
export class LeafletService {
  map: L.Map;
  private apiKey = 'pk.eyJ1IjoianBzdGlsbDg1IiwiYSI6ImNqbDcxZ3RsdDAxa3UzcG84b3lzaHRuZ2oifQ.CqIHqPgH0lwz2QldWcE37Q';
  private attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';

  initializeMap = (el: ElementRef, lat: number, long: number = -0.09, zoom: number = 13, maxZoom: number = 18) => {
    this.map = L.map(el.nativeElement).setView([lat, long], zoom);
    L.tileLayer(`https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${this.apiKey}`, {
      attribution: this.attribution,
      maxZoom: 18,
      id: 'mapbox.streets'      
    }).addTo(this.map);
  }

  addMarker = (lat: number, long: number, title?: string) => {
    L.marker([lat, long], {
      title: title
    }).addTo(this.map);
  }
  
  addPopupMarker = (lat: number, long: number, popup: string) => {
    const marker = L.marker([lat, long])
      .addTo(this.map);

    marker.bindPopup(popup).openPopup();
  }

  addCircle = (lat: number, long: number, color: string, fill: string, opacity: number, radius: number) => {
    L.circle([lat, long], {
      color: color,
      fillColor: fill,
      fillOpacity: opacity,
      radius: radius
    }).addTo(this.map);
  }

  addPolygon = (latlngs: L.LatLngExpression[] | L.LatLngExpression[][]) => {
    L.polygon(latlngs).addTo(this.map);
  }

  registerClick = (message: string) => {
    const onMapClick = (e) => alert(`${message} ${e.latlng}`);
    this.map.on('click', onMapClick);
  }
}