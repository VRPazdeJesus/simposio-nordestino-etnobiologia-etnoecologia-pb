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
  public ibio:leaflet.PointTuple;
  public igeo:leaflet.PointTuple;
  public faufba:leaflet.PointTuple;
  public ihac:leaflet.PointTuple;
  public paf1:leaflet.PointTuple;
  public paf3:leaflet.PointTuple;
  public paf5:leaflet.PointTuple;
  public vilavelha:leaflet.PointTuple;
 
  constructor() { 
    this.center = [-13.000568540806505, -38.50881973885408];
    this.ibio = [-13.000797590631436, -38.508692781097125];
    this.igeo = [-12.998279414804692, -38.50707014393266];
    this.faufba = [-12.997683687857446, -38.50811680102198];
    this.ihac = [-13.003146285462813, -38.50967109203339];
    this.paf1 = [-13.000723873900453, -38.50780705583248];
    this.paf3 = [-13.002837723143662, -38.50940922918199];
    this.paf5 = [-13.003838718191286, -38.50945870115538];
    this.vilavelha = [-12.986501260928508, -38.521125316738114];
  }
 
  ionViewDidEnter(){
     this.leafletMap();
  }
 
  leafletMap(){
    this.map = leaflet.map('mapId', {
       center: this.center,
       zoom: 16
    });
 
    var position =leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© LeafLet'
    }).addTo(this.map);
  
    var auditorioibio = new leaflet.Marker(this.ibio);
    var institutogeociencia = new leaflet.Marker(this.igeo);
    var faculdadearquitetura = new leaflet.Marker(this.faufba);
    var institutohumanidades = new leaflet.Marker(this.ihac);
    var predioaulas1 = new leaflet.Marker(this.paf1);
    var predioaulas3 = new leaflet.Marker(this.paf3);
    var predioaulas5 = new leaflet.Marker(this.paf5);
    var teatro = new leaflet.Marker(this.vilavelha);
    
    this.map.addLayer(auditorioibio);
    this.map.addLayer(institutogeociencia);
    this.map.addLayer(faculdadearquitetura);
    this.map.addLayer(institutohumanidades);
    this.map.addLayer(predioaulas1);
    this.map.addLayer(predioaulas3);
    this.map.addLayer(predioaulas5);
    this.map.addLayer(teatro);
 
    auditorioibio.bindPopup("<p> Auditório Externo do IBIO </p>");
    institutogeociencia.bindPopup("<p> IGEO </p>");
    faculdadearquitetura.bindPopup("<p> Faculdade de Arquitetura </p>");
    institutohumanidades.bindPopup("<p> IHAC </p>");
    predioaulas1.bindPopup("<p> Prédio de Aulas 1 </p>");
    predioaulas3.bindPopup("<p> Prédio de Aulas 1 </p>");
    predioaulas5.bindPopup("<p> Prédio de Aulas 1 </p>");
    teatro.bindPopup("<p> Teatro Vila Velha </p>");

    this.map.on('click', function(e) {
        alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng)
    });

  }

}
