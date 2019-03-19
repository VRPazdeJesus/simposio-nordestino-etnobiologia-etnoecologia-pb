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
  public reitoriaufba:leaflet.PointTuple;
  public prediodanca:leaflet.PointTuple;
  public facom:leaflet.PointTuple;
  public biologia:leaflet.PointTuple;
 
  constructor(private geolocation: Geolocation) { 
    this.center = [-13.000568540806505, -38.50881973885408];
    this.ibio = [-13.000797590631436, -38.508692781097125];
    this.igeo = [-12.998279414804692, -38.50707014393266];
    this.faufba = [-12.997683687857446, -38.50811680102198];
    this.ihac = [-13.00366, -38.51];
    this.paf1 = [-13.00123, -38.50731];
    this.paf3 = [-13.002837723143662, -38.50940922918199];
    this.paf5 = [-13.003838718191286, -38.50945870115538];
    this.vilavelha = [-12.986501260928508, -38.521125316738114];
    this.reitoriaufba = [-12.99281, -38.52059];
    this.prediodanca = [-13.00534, -38.50983];
    this.facom = [-13.00146, -38.51026];
    this.biologia = [-13.0011, -38.50855];
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
    var reitoria = new leaflet.Marker(this.reitoriaufba);
    var danca = new leaflet.Marker(this.prediodanca);
    var prediofacom = new leaflet.Marker(this.facom);
    var predioibio = new leaflet.Marker(this.biologia);

    this.map.addLayer(auditorioibio);
    this.map.addLayer(institutogeociencia);
    this.map.addLayer(faculdadearquitetura);
    this.map.addLayer(institutohumanidades);
    this.map.addLayer(predioaulas1);
    this.map.addLayer(predioaulas3);
    this.map.addLayer(predioaulas5);
    this.map.addLayer(teatro);
    this.map.addLayer(reitoria);
    this.map.addLayer(danca);
    this.map.addLayer(prediofacom);
    this.map.addLayer(predioibio);
 
    auditorioibio.bindPopup("<p> Auditório Externo do IBIO </p>");
    institutogeociencia.bindPopup("<p> IGEO </p>");
    faculdadearquitetura.bindPopup("<p> Faculdade de Arquitetura </p>");
    institutohumanidades.bindPopup("<p> Vão livre do IHAC </p>");
    predioaulas1.bindPopup("<p> Instituto de Matemática </p>");
    predioaulas3.bindPopup("<p> PAF 3 </p>");
    predioaulas5.bindPopup("<p> PAF 5 </p>");
    teatro.bindPopup("<p> Teatro Vila Velha </p>");
    reitoria.bindPopup("<p> Reitoria da UFBA </p>");
    danca.bindPopup("<p> Escola de Dança da UFBA </p>");
    prediofacom.bindPopup("<p> FACOM </p>");
    predioibio.bindPopup("<p> Instituto de Biologia </p>");

    var shapeibio = leaflet.polygon([
        [-13.00073, -38.50886],
        [-13.00087, -38.50872],
        [-13.00069, -38.50852],
        [-13.00056, -38.50866]
    ]).addTo(this.map);

    var shapepaf1 = leaflet.polygon([
        [-13.00114, -38.50765],
        [-13.00144, -38.5073],
        [-13.00121, -38.50707],
        [-13.00105, -38.50725],
        [-13.00111, -38.50731],
        [-13.00107, -38.50736],
        [-13.001, -38.5073],
        [-13.0009, -38.5074]
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
        [-13.00374, -38.51037],
        [-13.004, -38.51003],
        [-13.00366, -38.50967],
        [-13.00334, -38.5099]
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
    
    var shapereitoria = leaflet.polygon([
        [-12.99263, -38.52079],
        [-12.99299, -38.52075],
        [-12.99298, -38.52067],
        [-12.99305, -38.52063],
        [-12.99304, -38.52052],
        [-12.99297, -38.52048],
        [-12.99296, -38.52039],
        [-12.99261, -38.52043],
        [-12.99261, -38.52053],
        [-12.99257, -38.52053],
        [-12.99258, -38.5207],
        [-12.99262, -38.52069]
    ]).addTo(this.map);

    var shapedanca = leaflet.polygon([
        [-13.00531, -38.51016],
        [-13.00548, -38.51015],
        [-13.00545, -38.50961],
        [-13.00523, -38.50961],
        [-13.00522, -38.50968],
        [-13.00472, -38.50969],
        [-13.00472, -38.50997],
        [-13.0053, -38.50996]
    ]).addTo(this.map);
    
    var shapefacom = leaflet.polygon([
        [-13.00176, -38.51061],
        [-13.00191, -38.51042],
        [-13.00165, -38.51018],
        [-13.00172, -38.51011],
        [-13.00162, -38.51],
        [-13.00154, -38.51006],
        [-13.00138, -38.50988],
        [-13.00119, -38.51004],
        [-13.00126, -38.51009],
        [-13.00112, -38.51022],
        [-13.00147, -38.51055],
        [-13.00158, -38.51046]
    ]).addTo(this.map);
    
    var shapebiologia= leaflet.polygon([
        [-13.00099, -38.50905],
        [-13.00135, -38.50871],
        [-13.00127, -38.50862],
        [-13.00132, -38.50856],
        [-13.00142, -38.50864],
        [-13.00155, -38.50847],
        [-13.00119, -38.50811],
        [-13.00104, -38.50827],
        [-13.00116, -38.50839],
        [-13.00109, -38.50845],
        [-13.00097, -38.50834],
        [-13.00082, -38.5085],
        [-13.00097, -38.50865],
        [-13.0008, -38.50883]
    ]).addTo(this.map);

    var shapecongregart= leaflet.polygon([
        [-12.997, -38.5084],
        [-12.99727, -38.50836],
        [-12.99724, -38.50816],
        [-12.99696, -38.5082]
    ]).addTo(this.map);
    
    //Pegando a localizacao pelo dispositivo
    var me;
    this.geolocation.getCurrentPosition().then((resp) => {
        this.minhaposicao = {'lat': resp.coords.latitude, 'lng': resp.coords.longitude};
        me = new leaflet.Circle(this.minhaposicao, 20).addTo(this.map);
    }).catch((error) => {
        console.log('Error getting location', error);
    });
    
  }

  position(){
    var me;
    this.geolocation.getCurrentPosition().then((resp) => {
        this.minhaposicao = {'lat': resp.coords.latitude, 'lng': resp.coords.longitude};
        me = new leaflet.Circle(this.minhaposicao, 20).addTo(this.map);
    }).catch((error) => {
        console.log('Error getting location', error);
    });
   }

}
