import { Component } from '@angular/core';
import leaflet from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  map: any;
  minhaposicao: any;
  public center:leaflet.PointTuple;
  public ibio:leaflet.PointTuple;
  public igeo:leaflet.PointTuple;
  public faufba:leaflet.PointTuple;
  public ihac:leaflet.PointTuple;
  public paf1:leaflet.PointTuple;
  public paf3:leaflet.PointTuple;
  public paf5:leaflet.PointTuple;
  public vilavelha:leaflet.PointTuple;
 
  constructor(private geolocation: Geolocation) { 
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
    predioaulas3.bindPopup("<p> Prédio de Aulas 3 </p>");
    predioaulas5.bindPopup("<p> Prédio de Aulas 5 </p>");
    teatro.bindPopup("<p> Teatro Vila Velha </p>");

    var shapeibio = leaflet.polygon([
        [-13.00073, -38.50886],
        [-13.00087, -38.50872],
        [-13.00069, -38.50852],
        [-13.00056, -38.50866]
    ]).addTo(this.map);

    var shapepaf1 = leaflet.polygon([
        [-13.00069, -38.50812],
        [-13.00094, -38.50786],
        [-13.00046, -38.50737],
        [-13.00021, -38.50764]
    ]).addTo(this.map);

    var shapepaf3 = leaflet.polygon([
        [-13.00288, -38.50971],
        [-13.00309, -38.50948],
        [-13.00274, -38.5091],
        [-13.00251, -38.50934]
    ]).addTo(this.map);

    var shapepaf5 = leaflet.polygon([
        [-13.00362, -38.50956],
        [-13.0035, -38.50943],
        [-13.00367, -38.50923],
        [-13.00375, -38.50932],
        [-13.00381, -38.50927],
        [-13.00399, -38.50947],
        [-13.00393, -38.50953],
        [-13.00398, -38.50958],
        [-13.00403, -38.50952],
        [-13.00409, -38.50958],
        [-13.00404, -38.50962],
        [-13.00409, -38.50967],
        [-13.00396, -38.50979],
        [-13.00368, -38.50949]
    ]).addTo(this.map);

    var shapefau = leaflet.polygon([
        [-12.99748, -38.50851],
        [-12.99779, -38.50841],
        [-12.99767, -38.50794],
        [-12.99802, -38.50785],
        [-12.99797, -38.50766],
        [-12.99746, -38.50782],
        [-12.99758, -38.5083],
        [-12.99744, -38.50834]
    ]).addTo(this.map);

    var shapeihac = leaflet.polygon([
        [-13.00297, -38.50991],
        [-13.00288, -38.50981],
        [-13.00324, -38.50944],
        [-13.00333, -38.50955]
    ]).addTo(this.map);

    var shapeigeo = leaflet.polygon([
        [-12.9987, -38.50719],
        [-12.99857, -38.50674],
        [-12.99806, -38.50688],
        [-12.9981, -38.50708],
        [-12.99806, -38.50709],
        [-12.99804, -38.50702],
        [-12.99781, -38.5071],
        [-12.99782, -38.50717],
        [-12.99775, -38.50719],
        [-12.99769, -38.50696],
        [-12.9975, -38.50705],
        [-12.99752, -38.50716],
        [-12.99726, -38.50706],
        [-12.9972, -38.50723],
        [-12.99725, -38.50726],
        [-12.99723, -38.50732],
        [-12.99745, -38.5074],
        [-12.99747, -38.50735],
        [-12.99759, -38.50737],
        [-12.99762, -38.50747],
        [-12.99782, -38.50742],
        [-12.99781, -38.50738],
        [-12.99789, -38.50736],
        [-12.9979, -38.5074],
        [-12.99811, -38.50734],
        [-12.99809, -38.50727],
        [-12.99817, -38.50724],
        [-12.99819, -38.50731],
        [-12.9984, -38.50725],
        [-12.99839, -38.5072],
        [-12.99847, -38.50718],
        [-12.99848, -38.50724]
    ]).addTo(this.map);

    var me;
    
    //Pegando a localizacao pelo dispositivo
    this.geolocation.getCurrentPosition().then((resp) => {
        this.minhaposicao = {'lat': resp.coords.latitude, 'lng': resp.coords.longitude};
        me = new leaflet.Circle(this.minhaposicao, 20).addTo(this.map);
    }).catch((error) => {
        console.log('Error getting location', error);
    });
    
  }

}
