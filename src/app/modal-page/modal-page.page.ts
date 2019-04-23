import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ModalController, NavParams } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { File } from '@ionic-native/File/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss'],
})
export class ModalPagePage implements OnInit {
  public valor;
  constructor(public modalController: ModalController, public navParams: NavParams, private platform: Platform, private file: File, private ft: FileTransfer, private fileOpener: FileOpener, private document: DocumentViewer, public toastController: ToastController,private iab: InAppBrowser) { 
    this.valor = this.navParams.get('value');
  }
  
  ngOnInit() {
  }

  dismiss(){
    this.modalController.dismiss();
  }

  async downloadToast() {
    const toast = await this.toastController.create({
      message: 'Baixando...Arquivo pesado!',
      duration: 4000
    });
    toast.present();
  }

  openBook(endereco:any) {
    this.downloadToast();
    let browser = this.iab.create(endereco, '_system');
  }

}
