import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss'],
})
export class ModalPagePage implements OnInit {
  public valor;
  constructor(public modalController: ModalController, public navParams: NavParams) { 
    this.valor = this.navParams.get('value');
  }
  
  ngOnInit() {
  }

  dismiss(){
    this.modalController.dismiss();
  }

}
