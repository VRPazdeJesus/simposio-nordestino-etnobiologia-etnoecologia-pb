import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPagePage } from '../modal-page/modal-page.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(public modalController: ModalController){

  }
  
  async presentModal(book: any){
    const modal = await this.modalController.create({
      component: ModalPagePage,
      componentProps: {'value': book}
    });
    await modal.present();
  }
  public livros:Array<object> = [
    {'imagem':'/assets/image/plantasmedicinais.PNG',
     'titulo': 'Plantas e Animais Medicinais da Paraíba',
     'subtitulo': 'Um Olhar de Etnobiologia e Etnoecologia',
     'autores':'Reinaldo Farias Paiva de Lucena, Camilla Marques de Lucena, Thamires Kelly Nunes Carvalho, Ezequiel da Costa Ferreira',
     'ano': '2018',
     'editora': 'IESP - Instituto de Educação Superior da Paraíba',
     'sinopse': 'Este livro apresenta não apenas resultados de pesquisa, ele também retrata a história de um grupo de pesquisa. Os trabalhos que compõe hoje este livro são frutos de PIBIC’s, PIVIC’s e trabalhos de conclusão de curso. Os campos eram executados em grupo, o que permitia que se cultivasse o espírito da coletividade, onde todos se ajudavam mesmo que não fizessem parte do trabalho. Desta maneira, cada aluno poderia conviver melhor com seus colegas e adquirir experiências fora de sua área de atuação. As coletas de dados eram prioritariamente em campo, portanto, são incontáveis as histórias acumuladas no decorrer dos anos. Poderíamos escrever um outro livro falando apenas sobre isso, e talvez escrevamos um dia.Esperamos que este livro transmita nossos resultados e também nossa história. Os organizadores.',
     'site': 'https://www.iesp.edu.br/sistema/uploads/arquivos/publicacoes/plantas-e-animais-medicinais-da-paraiba-visoes-da-etnobiologia-e-etnoecologia.pdf'
    }, 
    {'imagem':'/assets/image/livroredeprodema.PNG',
     'titulo': 'A Rede PRODEMA (1996 - 2016)',
     'subtitulo': 'Em Busca da Sustentabilidade Socioambiental vol. 5',
     'autores':'Maristela Oliveira de Andrade e Salvador Dal Pozzo Trevizan',
     'ano': '2017',
     'editora': 'Ideia',
     'sinopse': 'As coletâneas Série Pesquisa-Prodema fruto da iniciativa do Prodema-UFPB visam divulgar pesquisas deste programa e de outros de áreas afins. Seu volume 5 é dedicado à comemoração dos vinte anos da Rede Prodema (1996-2016), ensejando a realização de um balanço da trajetória da Rede, diante dos primeiros e atuais desafios. Os organizadores deste volume conseguiram reunir contribuições de docentes e discentes comprometidos com esta trajetória, desde a sua construção, entre os quais Rodrigo Ramalho Filho (UFAL) o idealizador e mentor deste ambicioso projeto. Os autores produziram desde relatos preciosos da memória do Prodema, a reflexões críticas acerca das conferências internacionais, ideias e debates em torno da problemática ambiental que inspiraram a criação do Prodema, a levantamentos de experiências de pesquisas interdisciplinares, analisando a contribuição do Prodema para o conhecimento no campo das interações entre ambiente e sociedade.',
     'site': 'https://drive.google.com/file/d/1J2X3D49FfgrSGj8L2cA_UQQhLSxYuCI4/view'
    },
    {'imagem':'/assets/image/oralindigena.PNG',
     'titulo': 'Panton Pia - Narrativa Oral Indígena',
     'subtitulo': 'Registro na terra indígena São Marcos',
     'autores':'Devair Antônio Fiorotti',
     'ano': '2019',
     'editora': 'Boa Vista, UERR Edições, Wei Editora',
     'sinopse': '"A ideia central do livro é valorizar os protagonistas dessa comunidade, ou seja, os anciões. Quis entender a historia deles, como por exemplo, a visão deles sobre ser indígena nos dias de hoje. A partir do momento que o público ler as histórias vai entender mais sobre a cultura amazônica, afinal, esses personagens fazem parte de uma geração única.", afirmou Fiorotti em entrevista para o Portal Amazônia.',
     'site': 'https://pantonpia.com.br/wp-content/uploads/2019/01/ebook-narrativa-oral-indigena.pdf'
    },
    {'imagem':'/assets/image/plantandosonhos.PNG',
     'titulo': 'Plantando sonhos',
     'subtitulo': 'Experiêcias em Agroecologia no Estado de São Paulo',
     'autores':'LIN CHAU MING, MARINA FAGUNDES DO VAL, FERNANDO SILVEIRA FRANCO, MARISTELA SIMÕES DO CARMO e MIRELLA SANTOS MOREIRA',
     'ano': '2018',
     'editora': 'sbee - sociedade brasileira de etnobiologia e etnoecologia',
     'sinopse': 'O livro reune experiências de trabalhos realizados dentro do âmbito do projeto Centro Vocacional e Tecnológico em Agroecologia e Horticultura Orgânica (CVT) do estado de São Paulo. São 34 capítulos descrevendo atividades relacionados a questões técnicas e de pesquisa, extensão rural e universitária, articulação e comunicação, economia solidária e comércio justo e processos educativos e agroecologia.',
     'site':'https://drive.google.com/file/d/1U1xgeNxlFQY9U4AZ3Qwf9lekhKoJhEQB/view'
    }
  ];
}
