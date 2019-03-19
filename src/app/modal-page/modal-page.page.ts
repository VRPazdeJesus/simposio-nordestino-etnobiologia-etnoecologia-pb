import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { File } from '@ionic-native/File/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss'],
})
export class ModalPagePage implements OnInit {
  public valor;
  constructor(public modalController: ModalController, public navParams: NavParams, private platform: Platform, private file: File, private ft: FileTransfer, private fileOpener: FileOpener, private document: DocumentViewer) { 
    this.valor = this.navParams.get('value');
  }
  
  ngOnInit() {
  }

  dismiss(){
    this.modalController.dismiss();
  }

  downloadAndOpenPdf(endereco:any) {
    console.log("Chamado link de download");
    console.log(endereco)
    let downloadUrl = endereco;
    let path = this.file.dataDirectory;
    const transfer = this.ft.create();
   
    transfer.download(downloadUrl, path + 'myfile.pdf').then(entry => {
      let url = entry.toURL();
   
      if (this.platform.is('ios')) {
        this.document.viewDocument(url, 'application/pdf', {});
      } else {
        this.fileOpener.open(url, 'application/pdf')
          .then(() => console.log('File is opened'))
          .catch(e => console.log('Error opening file', e));
      }
    });
  }

}
