import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public livros:Array<object> = [
    {'imagem':'/assets/image/la-selva.png',
     'titulo': 'La Selva de los Elefantes Blancos',
     'subtitulo': 'Megaproyectos y extractivismos en la Amazonía ecuatoriana',
     'autores':'Japhy Wilson e Manuel Bayón',
     'ano': '',
     'editora': ''
    }, 
    {'imagem':'/assets/image/el-sur.png',
     'titulo': 'Educação Ambiental Desde El Sur',
     'subtitulo': '',
     'autores':'Anne Kassiadou, Celso Sánchez, Daniel Renaud Camargo, Marcelo Aranda Stortti e Rafael Nogueira Costa',
     'ano': '',
     'editora': 'Nupem Editora'
    },
    {'imagem':'/assets/image/alternativas-sistemicas.png',
     'titulo': 'Alternativas Sistêmicas',
     'subtitulo': 'Bem Viver, descrescimento, comuns, ecofeminismo, direitos da Mãe Terra e desglobalização',
     'autores':'Pablo Solón',
     'ano': '',
     'editora': ''
    }
  ];
}
