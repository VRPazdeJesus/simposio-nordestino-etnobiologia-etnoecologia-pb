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
     'site': 'https://static.wixstatic.com/ugd/88df49_f73dfde60f594c7d87ef1240e6cb86c7.pdf'
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
     'site':'https://static.wixstatic.com/ugd/88df49_0eadd8a63bb24362a16a5e3c0057f579.pdf'
    },
    {'imagem':'/assets/image/enee.PNG',
     'titulo': 'Anais do IX Encontro Nordestino de Etnobiologia e Etnoecologia',
     'subtitulo': 'e o I encontro de Etnobiologia e Etnoecologia do Piauí',
     'autores':'Wedson Medeiros Silva Souto (DBIO/ UFPI), Nélson Leal Alencar (DBIO/UFPI), Aníbal da Silva Cantalice (Biologia/ UFPI) e Valber Couto Luz Junior (Biologia/ UFPI)',
     'ano': '2017',
     'editora': 'sbee - sociedade brasileira de etnobiologia e etnoecologia',
     'sinopse': 'Anais do IX Encontro Nordestino de Etnobiologia e Etnoecologia e o I encontro de Etnobiologia e Etnoecologia do Piauí.',
     'site':'https://static.wixstatic.com/ugd/88df49_54a3a253cbd74e05905c5c4c83623269.pdf'
    },
    {'imagem':'/assets/image/redeprodemaambientais.PNG',
     'titulo': 'Rede PRODEMA em Ação nas Ciências Ambientais',
     'subtitulo': '',
     'autores':'Maria José Nascimento Soares, Jonielton Oliveira Dantas, Josiclêda Domiciano Galvíncio, Laura Jane Gomes, Ronise Nascimento de Almeida',
     'ano': '2018',
     'editora': 'Criação Editora',
     'sinopse': 'O livro “REDE PRODEMA EM AÇÃO NAS CIÊNCIAS AMBIENTAIS” vem mostrar todo o caminho e potencialidades do Programa de Desenvolvimento e Meio Ambiente que surgiu em 1995 após várias reuniões dos Professores/Pesquisadores dos diferentes Estados do Nordeste do Brasil onde se discutia um novo modelo de desenvolvimento para o País.',
     'site':'https://static.wixstatic.com/ugd/88df49_8ef8958d47e6407cb3922265c78a9b2f.pdf'
    },
    {'imagem':'/assets/image/insectos.PNG',
     'titulo': 'USOS TRADICIONALES Y APLICACIONES ACTUALES DE ALGUNOS INSECTOS Y OTROS ARTRÓPODOS CON FINES MEDICINALES EN MÉXICO',
     'subtitulo': '',
     'autores':'DR. JOSÉ MANUEL PINO MORENO - BIÓL. ENIA CAMARILLO CIENFUEGOS',
     'ano': '2019',
     'editora': 'Criação Editora',
     'sinopse': 'Se presenta un análisis taxonómico de 107 artrópodos pertenecientes a las Clases: Aracnidae, Diplopoda, Malacostraca e Insecta, de ellas 101 pertenecen al grupo de los insectos, utilizados en la medicina tradicional y actual mexicana, para cada especie se reporta: nombre científico, sinónimos, nombre común, antecedentes, padecimientos o enfermedades tratadas , localidades registradas , forma de preparación y uso, aplicaciones actuales como nutracéuticos o en la preparación de medicamentos homeopáticos, productos derivados de ellos y los principios activos que poseen, asimismo se señalan las enfermedades en las cuales se usan, relativas a los aparatos circulatorio, digestivo, reproductor y respiratorio, a los sistemas: inmunológico, linfático y nervioso, neuromuscular, óseo y renal, así como a los órganos de los sentidos oídos y ojos y a enfermedades dermatológicas.',
     'site':'https://static.wixstatic.com/ugd/88df49_093180ead7174cf4a3f092adc3220b0f.pdf'
    }
  ];

  public livroscomplementares:Array<object> = [
    {'imagem':'/assets/image/etnicidade.PNG',
     'titulo': 'Educação e Etnicidade:',
     'subtitulo': 'Diálogos Interdisciplinares',
     'autores':'Ana Cristina Silva Daxenberg, Rosivaldo Gomes de Sá Sobrinho e Magna Lúcia da Silva',
     'ano': '2017',
     'editora': 'UFPB Editora',
     'sinopse': 'Este livro é a quarta obra sobre a temática e traz a marca dos anteriores, nos quais procuramos compilar ideias e discussões sobre Comunidades Quilombolas e etnicidade.',
     'site': 'https://static.wixstatic.com/ugd/88df49_46fc0648813b41598068319507de7a2d.pdf'
    }, 
    {'imagem':'/assets/image/anais.PNG',
     'titulo': 'X SNEE - PROGRAMAÇÃO COMPLETA E ANAIS DE RESUMOS',
     'subtitulo': '',
     'autores':'',
     'ano': '2019',
     'editora': 'UFPB',
     'sinopse': 'Anais e Resumos do X Simpósio de Etnobiologia e Etnoecologia.',
     'site': 'https://www.dropbox.com/s/04sz0a8uatta1hf/ANAIS%20X%20SNEE.pdf'
    },
    {'imagem':'/assets/image/domesticacion.PNG',
     'titulo': 'Domesticatión en el continente americano volume 1',
     'subtitulo': 'Manejo de biodiversidad y evolución dirigida por las culturas del Nuevo Mundo',
     'autores':'Alejandro Casas, Juan Torres-Guevara y Fabiola Parra',
     'ano': '2016',
     'editora': 'UNIVERSIDAD NACIONAL AGRARIA LA MOLINA (UNALM) DEL PERÚ',
     'sinopse': 'Se reúnen en este volumen información, reflexiones y teorías sobre los procesos de domesticación a escala de poblaciones biológicas, para explicar desde aproximaciones evolutivas darwinianas cómo se desarrolla la diversificación de recursos genéticos a lo largo de la historia. Asimismo, el libro incluye teorías sobre la domesticación de ecosistemas, paisajes y territorios. Es primordialmente un material de lectura para apoyar el curso "Domesticación y Manejo in situ de Resursos Genéticos", organizado desde 2006 por la Universidad Nacional Autónoma de México (UNAM) y la Universidad Nacional Agraria La Molina (UNALM).',
     'site': 'https://www.dropbox.com/s/1jhzfkbcd7ou0y7/DOMESTICACIONENELCONTINENTEAMERICANOVol.1LIBROCOMPLETO20Nov.2016.pdf'
    },
    {'imagem':'/assets/image/comunidades.PNG',
     'titulo': 'Comunidades quilombolas:',
     'subtitulo': 'das reflexões às práticas de inclusão social',
     'autores':'Ana Cristina Silva Daxenberger e Rosivaldo Gomes de Sá Sobrinho',
     'ano': '2013',
     'editora': 'Editora da UFPB',
     'sinopse': '',
     'site':'https://static.wixstatic.com/ugd/88df49_c45d8e2d74da446ba285373a3e5ab4fe.pdf'
    },
    {'imagem':'/assets/image/diversidade.PNG',
     'titulo': 'A DIVERSIDADE COMO PRINCÍPIO DOS ESTUDOS ETNICO-RACIAIS',
     'subtitulo': '',
     'autores':'ANA CRISTINA SILVA DAXENBERGER e ROSIVALDO GOMES DE SÁ SOBRINHO',
     'ano': '2015',
     'editora': 'Editora da UFPB',
     'sinopse': '',
     'site':'https://static.wixstatic.com/ugd/88df49_b4f736b7eecd4288b2ec03aa1f96ae0f.pdf'
    },
    {'imagem':'/assets/image/mexican.PNG',
     'titulo': 'Mexican Ethnobotany:',
     'subtitulo': 'Interactions of People and Plants in Mesoamerica',
     'autores':'Alejandro Casas , José Blancas e Rafael Lira',
     'ano': '2016',
     'editora': '',
     'sinopse': '',
     'site':'https://static.wixstatic.com/ugd/88df49_b7d183753aa543cb89441d1921c6cbff.pdf'
    },
    {'imagem':'/assets/image/quilombola.PNG',
     'titulo': 'COMUNIDADES QUILOMBOLAS E DIVERSIDADE ÉTNICO-RACIAL:',
     'subtitulo': 'diferentes olhares e perspectivas',
     'autores':'Ana Cristina Silva Daxenberger e Rosivaldo Gomes de Sá Sobrinho',
     'ano': '2014',
     'editora': 'Editora da UFPB',
     'sinopse': '',
     'site':'https://static.wixstatic.com/ugd/88df49_4896c4956a6349d8a7c5e13be15e9cf5.pdf'
    }
  ];
}
