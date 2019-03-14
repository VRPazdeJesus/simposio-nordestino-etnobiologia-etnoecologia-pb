import { Component } from '@angular/core';
import leaflet from 'leaflet';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  map: any;
  public center:leaflet.PointTuple;
 
  constructor() { 
    this.center= [-29.691484, -53.812409];
  }
 
  ionViewDidEnter(){
     this.leafletMap();
  }
 
  leafletMap(){
 
    this.map=leaflet.map('mapId', {
       center: this.center,
       zoom: 17
    });
 
    //http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
    //http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}
 
    var position =leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'NETZ Art Soluções em Internet © LeafLet'
    }).addTo(this.map);
 
    var marker = new leaflet.Marker(this.center);
    this.map.addLayer(marker);
 
    marker.bindPopup("<p> Leaflet Mapa Funcionando. </p>");
  }
}
