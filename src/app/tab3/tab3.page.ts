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
  public reitoria:leaflet.PointTuple;
  public edufisica:leaflet.PointTuple;
  public ead:leaflet.PointTuple;
  public prodema:leaflet.PointTuple;
  public concertos:leaflet.PointTuple;
  public multimidias:leaflet.PointTuple;
  public administrativo:leaflet.PointTuple;
  public ccen:leaflet.PointTuple;
  public reitoriaufba:leaflet.PointTuple;
  public prediodanca:leaflet.PointTuple;
  public facom:leaflet.PointTuple;
  public biologia:leaflet.PointTuple;
 
  constructor(private geolocation: Geolocation) { 
    this.center = [-7.139578, -34.848065];
    this.reitoria = [-7.136861, -34.845922];
    this.edufisica = [-7.136080, -34.844898];
    this.ead = [-7.136468, -34.844749];
    this.prodema = [-7.139973, -34.844336];
    this.concertos = [-7.138475, -34.850643];
    this.multimidias = [-7.144005, -34.850165];
    this.administrativo = [-7.143961, -34.850792];
    this.ccen = [-7.139444, -34.845190];
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
       zoom: 15
    });
 
    var position =leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© LeafLet'
    }).addTo(this.map);
  
    var reitoriaUFPB = new leaflet.Marker(this.reitoria);
    var edufisicaUFPB = new leaflet.Marker(this.edufisica);
    var eadUFPB = new leaflet.Marker(this.ead);
    var prodemaUFPB = new leaflet.Marker(this.prodema);
    var concertosUFPB = new leaflet.Marker(this.concertos);
    var multimidiasUFPB = new leaflet.Marker(this.multimidias);
    var administrativoUFPB = new leaflet.Marker(this.administrativo);
    var ccenUFPB = new leaflet.Marker(this.ccen);
    var reitoria = new leaflet.Marker(this.reitoriaufba);
    var danca = new leaflet.Marker(this.prediodanca);
    var prediofacom = new leaflet.Marker(this.facom);
    var predioibio = new leaflet.Marker(this.biologia);

    this.map.addLayer(reitoriaUFPB);
    this.map.addLayer(edufisicaUFPB);
    this.map.addLayer(eadUFPB);
    this.map.addLayer(prodemaUFPB);
    this.map.addLayer(concertosUFPB);
    this.map.addLayer(multimidiasUFPB);
    this.map.addLayer(administrativoUFPB);
    this.map.addLayer(ccenUFPB);
 
    reitoriaUFPB.bindPopup("<p> Reitoria da UFPB </p>");
    edufisicaUFPB.bindPopup("<p> Pós Graduação de Educação Física da UFPB </p>");
    eadUFPB.bindPopup("<p> Prédio de EAD da UFPB </p>");
    prodemaUFPB.bindPopup("<p> PRODEMA </p>");
    concertosUFPB.bindPopup("<p> Sala de Concertos Radegundis Feitosa </p>");
    multimidiasUFPB.bindPopup("<p> Auditório Multimidia - CT </p>");
    administrativoUFPB.bindPopup("<p> Auditório Administrativo - CT </p>");
    ccenUFPB.bindPopup("<p> CCEN - Centro de Ciências Exatas e da Natureza </p>");

    var shapeReitoria = leaflet.polygon([
        [-7.137081, -34.845983],
        [-7.136824, -34.846062],
        [-7.136807, -34.846018],
        [-7.136487, -34.846114],
        [-7.136397, -34.845830],
        [-7.136602, -34.845766],
        [-7.136643, -34.845893],
        [-7.136922, -34.845794],
        [-7.136860, -34.845586],
        [-7.136905, -34.845532],
        [-7.137106, -34.845553],
        [-7.136998, -34.845732]
    ]).addTo(this.map);

    var shapeEduFisica = leaflet.polygon([
        [-7.136288, -34.844737],
        [-7.136347, -34.844935],
        [-7.135942, -34.845054],
        [-7.135930, -34.845023],
        [-7.135872, -34.845037],
        [-7.135855, -34.845007],
        [-7.135882, -34.844980],
        [-7.135835, -34.844874]
    ]).addTo(this.map);

    var shapeEad = leaflet.polygon([
        [-7.136582, -34.844562],
        [-7.136672, -34.844845],
        [-7.136351, -34.844940],
        [-7.136261, -34.844654]
    ]).addTo(this.map);

    var shapeProdema = leaflet.polygon([
        [-7.139819, -34.844067],
        [-7.139969, -34.844016],
        [-7.140119, -34.844529],
        [-7.139961, -34.844573]
    ]).addTo(this.map);

    var shapeConcertos = leaflet.polygon([
        [-7.138337, -34.850647],
        [-7.138609, -34.850718],
        [-7.138602, -34.850408],
        [-7.138475, -34.850385]
    ]).addTo(this.map);

    var shapeMultimidias = leaflet.polygon([
        [-7.144167, -34.850294],
        [-7.144150, -34.850236],
        [-7.144093, -34.850254],
        [-7.144143, -34.850164],
        [-7.144129, -34.850033],
        [-7.144016, -34.849982],
        [-7.143923, -34.850004],
        [-7.143842, -34.850094],
        [-7.143860, -34.850210],
        [-7.143921, -34.850275],
        [-7.144012, -34.850287],
        [-7.143956, -34.850300],
        [-7.143972, -34.850354]
    ]).addTo(this.map);

    var shapeAdministrativo = leaflet.polygon([
        [-7.144043, -34.850671],
        [-7.144092, -34.850825],
        [-7.143870, -34.850889],
        [-7.143824, -34.850741]
    ]).addTo(this.map);
    
    var shapeCcen = leaflet.polygon([
        [-7.139283, -34.844907],
        [-7.139417, -34.844866],
        [-7.139532, -34.845249],
        [-7.139397, -34.845290]
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
