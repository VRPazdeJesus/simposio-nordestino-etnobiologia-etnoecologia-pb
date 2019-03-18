import { Component } from '@angular/core';
import { log, isFunction } from 'util';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public dia;
  public hora;
  public minuto;

  public agora:Array<object> = [];

  constructor() { 
    let date =  new Date(); 

    this.dia = date.getDate();
    this.hora = date.getHours();
    this.minuto = date.getMinutes();

    this.atribuirGrade(this.dia, this.hora, this.minuto);
  } 

  atribuirGrade(dia:any, hora:any, minuto:any){
    if(dia < 18) {
      this.agora = this.dia18manha0830;
    } else if(dia == 18) {
      if((hora < 8) || ((hora == 8) && (minuto <= 30))){
        this.agora = this.dia18manha0830;
      } else if(((hora == 8) && (minuto > 30)) || (hora == 9) || ((hora == 10) && (minuto < 15)))  {
        this.agora = this.dia18manha0900;
      } else if((hora == 10) && (minuto >= 15) && (minuto < 45)) {
        this.agora = this.dia18manha1015;
      } else if(((hora == 10) && (minuto >= 45)) || (hora == 11) || ((hora == 12) && (minuto <= 30))) {
        this.agora = this.dia18manha1045;
      } else if(((hora == 12) && (minuto >= 30)) || ((hora > 12) && (hora <= 14)) || ((hora == 15) && (minuto < 30))){
        this.agora = this.dia18tarde1400;
      } else if(((hora == 15) && (minuto >= 30)) || ((hora == 16) && (minuto < 30))) {
        this.agora = this.dia18tarde1545;
      } else if(((hora == 16) && (minuto >= 30)) || ((hora == 17) && (minuto <= 15))) {
        this.agora = this.dia18tarde1630;
      } else if(((hora == 17) && (minuto > 15)) || ((hora == 18) && (minuto < 30))) {
        this.agora = this.dia18noite1800;
      } else if(((hora == 18) && (minuto >= 30)) || ((hora >= 19) && (hora <= 20))){
        this.agora = this.dia18noite1830;
      } else if (hora > 20){
        this.agora = this.fim;
      }
    } else if(dia == 19) {
      if((hora < 8) || ((hora == 8) && (minuto <= 30))){
        this.agora = this.dia19manha0830;
      } else if(((hora == 8) && (minuto > 30)) || (hora == 9) || ((hora == 10) && (minuto < 15))) {
        this.agora = this.dia19manha0900;
      } else if((hora == 10) && (minuto >= 15) && (minuto < 30)) {
        this.agora = this.dia19manha1015;
      } else if((hora == 10) && (minuto >= 30) && (minuto < 45)) {
        this.agora = this.dia19manha1030;
      } else if(((hora == 10) && (minuto >= 45)) || (hora == 11) || ((hora == 12) && (minuto <= 30))) {
        this.agora = this.dia19manha1045;
      } else if(((hora == 12) && (minuto >= 30)) || ((hora > 12) && (hora <= 14)) || ((hora == 15) && (minuto < 30))){
        this.agora = this.dia19tarde1400;
      } else if(((hora == 15) && (minuto >= 30)) || (hora == 16) || ((hora == 17) && (minuto <= 15))) {
        this.agora = this.dia19tarde1530;
      } else if(((hora == 17) && (minuto > 15)) || (hora == 18)) {
        this.agora = this.dia19noite1830;
      } else if(hora == 19){
        this.agora = this.dia19noite1900;
      } else if((hora == 20) || (hora == 21)){
        this.agora = this.dia19noite2000;
      }else if (hora >= 22){
        this.agora = this.fim;
      }
    } else if(dia == 20) {
      if((hora < 8) || ((hora == 8) && (minuto <= 30))){
        this.agora = this.dia20manha0830;
      } else if(((hora == 8) && (minuto > 30)) || (hora == 9) || ((hora == 10) && (minuto < 15)))  {
        this.agora = this.dia20manha0900;
      } else if((hora == 10) && (minuto >= 15) && (minuto < 45)) {
        this.agora = this.dia20manha1015;
      } else if(((hora == 10) && (minuto >= 45)) || (hora == 11) || ((hora == 12) && (minuto < 30))) {
        this.agora = this.dia20manha1045;
      } else if(((hora == 12) && (minuto >= 30)) || ((hora > 12) && (hora <= 14)) || ((hora == 15) && (minuto < 30))){
        this.agora = this.dia20tarde1400;
      } else if(((hora == 15) && (minuto >= 30)) || (hora == 16)) {
        this.agora = this.dia20tarde1545;
      } else if((hora == 17)  || (hora == 18) || (hora == 19) || ((hora == 20) && (minuto < 30))) {
        this.agora = this.dia20tarde1800;
      } else if(((hora == 20) && (minuto >= 30)) || (hora == 21) || (hora == 22) ) {
        this.agora = this.dia20noite2100;
      } else if (hora == 23){
        this.agora = this.encerramento;
      }
    } else if(dia > 20) {
      this.agora = this.encerramento;
    }
  }

  // Cronograma do primeiro dia
  public dia18manha0830:Array<object> = [
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: sala 404',
     'titulo':'Sessões de Trabalho',
     'participantes': [{'nome':'A retomada da cidade como insurgência radical na construção de modos de “ser indígena”', 'bio': '- Gabriela De Freitas Figueiredo Rocha - Universidade de Coimbra'}, {'nome':'Conservação do pecado: trajetória e conflitos de praia em Macaé – RJ', 'bio':'- Astrea Gomes Castro - Universidade Federal do Rio de Janeiro'}, {'nome':'Estrategias de descontaminacion del aire en algunas ciudades ubicadas en condiciones de valle-montaña', 'bio':'- Dora Luz Yepes Palacio - Politécnico Colombiano Jaime Isaza Cadavid'}],
     'moderadores': [{'nome':'Gilca Garcia Oliveira', 'bio':'- Economia UFBA/POSGEO/UFBA'}]
    }, 
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: sala 406',
     'titulo':'Sessões de Trabalho',
     'participantes': [{'nome':'A luta por justiça ambiental e soberania alimentar através da educação ambiental', 'bio': '- Letícia Riguetto Nunes - Universidade Federal de Juiz de Fora'}, {'nome':'Agroecologia, educação popular e resistência na primeira favella do Rio de Janeiro', 'bio':'- Lorena Portela Soares - Horta Inteligente'}, {'nome':'Caminhos para práticas de consumo responsável: o caso da feira popular agroecológica no município de Barbacena, Minas Gerais, Brasil', 'bio':'- Suelen Couto - Universidade Federal do Rio de Janeiro'}, {'nome':'O ecofeminismo como prática pedagógica e a experiência do grupo de mulheres do assentamento Dandara dos Palmares na roça agroecológica', 'bio':'- Luísa De Pinho Valle - Universidade de Coimbra'}],
     'moderadores': [{'nome':'Michel Fernandes Rosa', 'bio':'- UFRB'}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: sala 407',
     'titulo':'Sessões de Trabalho',
     'participantes': [{'nome':'Transiciones pedagogicas para la infancia desde la ecologia y la interculturalidad', 'bio': '- Correa Zanotti-Cavazzoni Chiara Leticia - Universidad San Francisco de Quito'}, {'nome':'A pertinência da ecologia política nos processos dedesconstrução de injusticas socioambientais e na construçãode alternativas decoloniais', 'bio':'- Luciano Zanetti Pessoa Candiotto - Universidade Estadual do Oeste do Paraná'}, {'nome':'Aprender a entreser: aprendizaje transformacional y formación de adultos en ecología política', 'bio':'- María Paz Aedo Zuñiga - Universidad Academia de Humanismo Cristiano'}, {'nome':'Extractivismo, conflictos socio-ecológicos, ecociudadanía y emergencia de alternativas: dimensiones crítica y política de la educación ambiental en la resistencia social"', 'bio':'- Isabel Orellana - Universidade de Quebec'}],
     'moderadores': [{'nome':'Evandro Costa de Medeiros', 'bio':'- UNIFESSPA'}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: sala 408',
     'titulo':'Sessões de Trabalho',
     'participantes': [{'nome':'Acidentes nucleares, corpos e ambientes contaminados: os processos de publicização e a questão do urânio em Caetité/Ba', 'bio': '- Israel De Jesus Rocha - Universidade Federal do Amazonas'}, {'nome':'Ocupações urbanas e autoprodução do espaço', 'bio':'- Viviane Zerlotini Da Silva - Pontificia Universidade Católica de Minas Gerais'}, {'nome':'Outras Práxis Possíveis: Reflexões sobre a Posição do Trabalho Humano para a Economia Política e a Visão de Mundo das Populações não Ocidentais', 'bio':'- Isabela Prado Callegari (UFRGS), Queren Hapuque Borges Rodrigues (Universidade de Campinas), Rodrigo Costa de Andrade (UFMG)'}],
     'moderadores': [{'nome':'Vanessa Empinotti', 'bio':'- UFABC'}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: Auditório 1',
     'titulo':'Sessões de Trabalho',
     'participantes': [{'nome':'A conquista dos recursos naturais e das paisagens de Minas Gerais (1780 - 1804)', 'bio': '- Mark De Soldi Matzner - Universidade Federal de Ouro Preto'}, {'nome':'Conflitos agroambientais e programa fomento florestal: pela historicidade e informalidade', 'bio':'- Frederico Magalhães Siman - Universidade Federal de Viçosa'}, {'nome':'Dreams of development and haunted modernity: colonial memories in contemporary potosí', 'bio':'- Sue Angélica Serra Iamamoto - Universidade Federal da Bahia'}, {'nome':'Caboclos contra o progresso: a guerra do contestado como um conflito ambiental', 'bio':'- Daniel Vieira Nunes - Universidade Federal Rural do Rio de Janeiro'}],
     'moderadores': [{'nome':'Horacio Machado Araoz', 'bio':''}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: Auditório 2',
     'titulo':'Sessões de Trabalho',
     'participantes': [{'nome':'Agronegocio y extractivismo en la argentina contemporanea: un estudio de la cadena sojera', 'bio': '- Virginia Toledo López - Instituto de Investigaciones Gino Germani'}, {'nome':'Monocultivo de la caña de azucar, caso norte del valle del cauca, Colombia: una mirada desde la ecología política', 'bio':'- Fernando Moreno Betancourt - Universidad del Valle'}, {'nome':'¿objeto o proceso? un acercamiento a la construcción en madera desde una perspectiva sistémica a la sustentabilidad', 'bio':'- Massimiliano Farris - Universidad de Chile'}],
     'moderadores': [{'nome':'Beatriz Bustos', 'bio':''}]
    },
    {'imagem':'/assets/image/paf3.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 3: Auditório',
     'titulo':'Sessões de Trabalho',
     'participantes': [ {'nome':'Acumulación capitalista y ecología política: el acaparamiento de tierras en los países del sur global', 'bio':'- Agostina Costantino - Instituto de Investigaciones Económicas y Sociales del Sur'}, {'nome':'Algumas reflexões sobre a questão agráriaracial no recôncavo da Bahia', 'bio':'- Jánderson Santana Dos Santos - Movimento dos Pequenos Agricultores'}, {'nome':'Cosmopolíticas na terra: construção da paisagem e regime de propriedade avá-guarani no oeste do Paraná', 'bio':'- Diogo de Oliveira - Universidade Federal de Santa Catarina'}, {'nome':'Disputas socioterritoriais no Amapá - Brasil', 'bio':'- Roni Mayer Lomba - Universidade Federal do Amapá'}],
     'moderadores': [{'nome':'Salvatore Engel-Dimauro', 'bio':''}]
    },
    {'imagem':'/assets/image/ibio.jpg',
     'hora': '08:00 - 18:00',
     'instituto':'Hall do Instituto de Biologia',
     'titulo':'Breve História do Pó',
     'participantes': [ {'nome':'Breve História do Pó é uma instalação a partir da investigação sobre a memória de locais de assassinatos por disputa de terra na região Sul e Sudeste do Pará. Ao realizar uma cartografia precisa dos locais dos assassinatos, um levantamento junto à testemunhas e parentes se fez necessário. Além do registro dessas narrativas, outros depoimentos encontrados ao longo da pesquisa foram coletados, como testemunhos para os inquéritos; e os discursos de um julgamento em que o mandante de um dos assassinatos foi considerado culpado e condenado. A justaposição destas falas junto às fotografias revela níveis da linguagem produzida em relação aos eventos, que os torna menos palpáveis a cada novo estágio do discurso. A pesquisa investiga o quanto a observação destas reminiscências reserva a possibilidade de enxergar o invisível dos mortos sempre presentes.', 'bio':''}],
     'moderadores': [{'nome':'Tomaz Klotzel', 'bio':'- Fotógrafo, vive em São Paulo'}]
    },
    {'imagem':'/assets/image/ibio.jpg',
     'hora': '08:30 - 18:00',
     'instituto':'Hall do Instituto de Biologia',
     'titulo':'Floresta em pé, mulheres vivas: Escutas de (R) Existências',
     'participantes': [ {'nome':'Breve História do Pó é uma instalação a partir da investigação sobre a memória de locais de assassinatos por disputa de terra na região Sul e Sudeste do Pará. Ao realizar uma cartografia precisa dos locais dos assassinatos, um levantamento junto à testemunhas e parentes se fez necessário. Além do registro dessas narrativas, outros depoimentos encontrados ao longo da pesquisa foram coletados, como testemunhos para os inquéritos; e os discursos de um julgamento em que o mandante de um dos assassinatos foi considerado culpado e condenado. A justaposição destas falas junto às fotografias revela níveis da linguagem produzida em relação aos eventos, que os torna menos palpáveis a cada novo estágio do discurso. A pesquisa investiga o quanto a observação destas reminiscências reserva a possibilidade de enxergar o invisível dos mortos sempre presentes.', 'bio':''}],
     'moderadores': [{'nome':'Anastasia G. Itokazu', 'bio':'- UFABC'}, {'nome':'Giovanna Moller', 'bio':'- UFABC'}, {'nome':'Henrique P. Xavier', 'bio':'- USP'}, {'nome':'Juliana de Souza', 'bio':'- UNESP'}, {'nome':'Lea Tosold', 'bio':'- USP'}, {'nome':'Luciana Furlanetto Pereira', 'bio':'- UFSCar'}, {'nome':'Mariana Ruggieri', 'bio':'- Unicamp'}, {'nome':'Marilia M. Pisani', 'bio':'- UFABC'}, {'nome':'Silvana Ramos', 'bio':'- USP'}]
    }
  ];

  public dia18manha0900:Array<object> = [
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: sala 404',
     'titulo':'Sessões de Trabalho',
     'participantes': [{'nome':'A retomada da cidade como insurgência radical na construção de modos de “ser indígena”', 'bio': '- Gabriela De Freitas Figueiredo Rocha - Universidade de Coimbra'}, {'nome':'Conservação do pecado: trajetória e conflitos de praia em Macaé – RJ', 'bio':'- Astrea Gomes Castro - Universidade Federal do Rio de Janeiro'}, {'nome':'Estrategias de descontaminacion del aire en algunas ciudades ubicadas en condiciones de valle-montaña', 'bio':'- Dora Luz Yepes Palacio - Politécnico Colombiano Jaime Isaza Cadavid'}],
     'moderadores': [{'nome':'Gilca Garcia Oliveira', 'bio':'- Economia UFBA/POSGEO/UFBA'}]
    }, 
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: sala 406',
     'titulo':'Sessões de Trabalho',
     'participantes': [{'nome':'A luta por justiça ambiental e soberania alimentar através da educação ambiental', 'bio': '- Letícia Riguetto Nunes - Universidade Federal de Juiz de Fora'}, {'nome':'Agroecologia, educação popular e resistência na primeira favella do Rio de Janeiro', 'bio':'- Lorena Portela Soares - Horta Inteligente'}, {'nome':'Caminhos para práticas de consumo responsável: o caso da feira popular agroecológica no município de Barbacena, Minas Gerais, Brasil', 'bio':'- Suelen Couto - Universidade Federal do Rio de Janeiro'}, {'nome':'O ecofeminismo como prática pedagógica e a experiência do grupo de mulheres do assentamento Dandara dos Palmares na roça agroecológica', 'bio':'- Luísa De Pinho Valle - Universidade de Coimbra'}],
     'moderadores': [{'nome':'Michel Fernandes Rosa', 'bio':'- UFRB'}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: sala 407',
     'titulo':'Sessões de Trabalho',
     'participantes': [{'nome':'Transiciones pedagogicas para la infancia desde la ecologia y la interculturalidad', 'bio': '- Correa Zanotti-Cavazzoni Chiara Leticia - Universidad San Francisco de Quito'}, {'nome':'A pertinência da ecologia política nos processos dedesconstrução de injusticas socioambientais e na construçãode alternativas decoloniais', 'bio':'- Luciano Zanetti Pessoa Candiotto - Universidade Estadual do Oeste do Paraná'}, {'nome':'Aprender a entreser: aprendizaje transformacional y formación de adultos en ecología política', 'bio':'- María Paz Aedo Zuñiga - Universidad Academia de Humanismo Cristiano'}, {'nome':'Extractivismo, conflictos socio-ecológicos, ecociudadanía y emergencia de alternativas: dimensiones crítica y política de la educación ambiental en la resistencia social"', 'bio':'- Isabel Orellana - Universidade de Quebec'}],
     'moderadores': [{'nome':'Evandro Costa de Medeiros', 'bio':'- UNIFESSPA'}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: sala 408',
     'titulo':'Sessões de Trabalho',
     'participantes': [{'nome':'Acidentes nucleares, corpos e ambientes contaminados: os processos de publicização e a questão do urânio em Caetité/Ba', 'bio': '- Israel De Jesus Rocha - Universidade Federal do Amazonas'}, {'nome':'Ocupações urbanas e autoprodução do espaço', 'bio':'- Viviane Zerlotini Da Silva - Pontificia Universidade Católica de Minas Gerais'}, {'nome':'Outras Práxis Possíveis: Reflexões sobre a Posição do Trabalho Humano para a Economia Política e a Visão de Mundo das Populações não Ocidentais', 'bio':'- Isabela Prado Callegari (UFRGS), Queren Hapuque Borges Rodrigues (Universidade de Campinas), Rodrigo Costa de Andrade (UFMG)'}],
     'moderadores': [{'nome':'Vanessa Empinotti', 'bio':'- UFABC'}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: Auditório 1',
     'titulo':'Sessões de Trabalho',
     'participantes': [{'nome':'A conquista dos recursos naturais e das paisagens de Minas Gerais (1780 - 1804)', 'bio': '- Mark De Soldi Matzner - Universidade Federal de Ouro Preto'}, {'nome':'Conflitos agroambientais e programa fomento florestal: pela historicidade e informalidade', 'bio':'- Frederico Magalhães Siman - Universidade Federal de Viçosa'}, {'nome':'Dreams of development and haunted modernity: colonial memories in contemporary potosí', 'bio':'- Sue Angélica Serra Iamamoto - Universidade Federal da Bahia'}, {'nome':'Caboclos contra o progresso: a guerra do contestado como um conflito ambiental', 'bio':'- Daniel Vieira Nunes - Universidade Federal Rural do Rio de Janeiro'}],
     'moderadores': [{'nome':'Horacio Machado Araoz', 'bio':''}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: Auditório 2',
     'titulo':'Sessões de Trabalho',
     'participantes': [{'nome':'Agronegocio y extractivismo en la argentina contemporanea: un estudio de la cadena sojera', 'bio': '- Virginia Toledo López - Instituto de Investigaciones Gino Germani'}, {'nome':'Monocultivo de la caña de azucar, caso norte del valle del cauca, Colombia: una mirada desde la ecología política', 'bio':'- Fernando Moreno Betancourt - Universidad del Valle'}, {'nome':'¿objeto o proceso? un acercamiento a la construcción en madera desde una perspectiva sistémica a la sustentabilidad', 'bio':'- Massimiliano Farris - Universidad de Chile'}],
     'moderadores': [{'nome':'Beatriz Bustos', 'bio':''}]
    },
    {'imagem':'/assets/image/paf3.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 3: Auditório',
     'titulo':'Sessões de Trabalho',
     'participantes': [ {'nome':'Acumulación capitalista y ecología política: el acaparamiento de tierras en los países del sur global', 'bio':'- Agostina Costantino - Instituto de Investigaciones Económicas y Sociales del Sur'}, {'nome':'Algumas reflexões sobre a questão agráriaracial no recôncavo da Bahia', 'bio':'- Jánderson Santana Dos Santos - Movimento dos Pequenos Agricultores'}, {'nome':'Cosmopolíticas na terra: construção da paisagem e regime de propriedade avá-guarani no oeste do Paraná', 'bio':'- Diogo de Oliveira - Universidade Federal de Santa Catarina'}, {'nome':'Disputas socioterritoriais no Amapá - Brasil', 'bio':'- Roni Mayer Lomba - Universidade Federal do Amapá'}],
     'moderadores': [{'nome':'Salvatore Engel-Dimauro', 'bio':''}]
    },
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório A do IGEO  - Instituto de Geociências',
     'titulo':'Mariana, Barcarena, Brumadinho: mineração e crimes ambientais',
     'participantes': [{'nome':'Carol Moura', 'bio': '- Movimento Atingidos pela Vale, Brumadinho'}, {'nome':'Charles Trocate', 'bio':'- MAM'}, {'nome':'Tádzio Coelho', 'bio':'- UFMA e POeMAS'}, {'nome':'Magno Luiz', 'bio':'- CPT'}, {'nome':'Milton Sanchez', 'bio':'- Colectivo Guardianas y Guardianes de La Laguna, Peru'}, {'nome':'Raquel Neyra', 'bio':'- Universidad de Zaragoza e Ejatlas.org'}],
     'moderadores': [{'nome':'Camila Mudrek', 'bio':'- MAM'}, {'nome':'Magno Oliveira','bio':'- MAM'}]
    },
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório Yeda do IGEO  - Instituto de Geociências',
     'titulo':'Autonomias e movimentos pela Terra',
     'participantes': [{'nome':'Jerry Matalawe', 'bio': '- Coordenador de Políticas para Povos Indígenas da Bahia, mestrando em Antropologia / UFBA'}, {'nome':'Marcley Pataxó', 'bio': '- Coordenador Extremo Sul do MUPOIBA'}, {'nome':'Mãdí Pataxó', 'bio': '- Coordenador Extremo sul do MUPOIBA'}, {'nome':'Agnaldo Pataxó Hã Hã Hãe', 'bio':'- Coordenador Sul do MUPOIBA'}, {'nome':'Miguel Tumbalalá', 'bio':'- Ccoordenador Norte do MUPOIBA'},  {'nome':'Jorge Nahuel', 'bio':'- líder Mapuche'}, {'nome':'Edilena Krikati', 'bio':'- COIAB'}, {'nome':'Modesta Carvalho', 'bio':'- do povo Tukano - COIAB'}],
     'moderadores': [{'nome':'Kâhu Pataxó', 'bio':'- Coordenador Geral do MUPOIBA, Graduando em Direito/UFBA'},{'nome':'Danilo Paiva Ramos', 'bio':'- UFBA'}]
    }, 
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório B do IGEO  - Instituto de Geociências',
     'titulo':'A práxis está na mesa: a contribuição do veganismo para a sustentabilidade ambiental',
     'participantes': [{'nome':'Camilla Almeida', 'bio': '- Sociedade Vegetariana Brasileira'}, {'nome':'Caroline Reis', 'bio':'- Nutrição UFBA'}, {'nome':'Daiana', 'bio':'- Rosas do Dendê e movimento Afrovegan'}, {'nome':'João Pedro Carvalho', 'bio':'- Biologia/UFBA'}, {'nome':'Maria Bittencourt', 'bio':'- Gastronomia/UFBA'},{'nome':'Priscilla Karen', 'bio':'- Oceanografia/UFBA'}],
     'moderadores': [{'nome':'Luis Henrique Vieira de Souza', 'bio':'- UFBA'}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório externo do Instituto de Biologia',
     'titulo':'Resistência nas águas: pescadoras e pescadores na defesa de seus territórios',
     'participantes': [{'nome':'Josana Pinto da Costa', 'bio': '- Pará, Comunidade amador. Associação pescadores e pescadores artesanais. Coordenação Nacional do Movimento de Pescadores e Pescadoras Artesanais (MPP)'}, {'nome':'Maria Alice Borges da Silva', 'bio':'- Lagoa do Curralinho / Juazeiro e Movimento de Pescadores e Pescadoras Artesanais BA (MPP)'}, {'nome':'João Barba', 'bio':'- Reserva Extrativista Marinha Canavieiras - CONFREM'}, {'nome':'Edson Falcão', 'bio':'- Reserva Extrativista Marinha Baía do Iguape, Movimento de Pescadores e Pescadoras Artesanais (MPP)'}],
     'moderadores': [{'nome':'Ivana Muricy', 'bio':''},{'nome':'Eliete Paraguaçu Conceição', 'bio':''},{'nome':'Andrea Rocha do Espirito Santo', 'bio':''}]
    },
    {'imagem':'/assets/image/paf1.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'PAF 1: Auditório Instituto de Matemática',
     'titulo':'Construindo propostas a partir das pedagogias que emergem dos conflitos ambientais, das lutas populares e dos movimentos sociais: perspectivas desde a Educação Ambiental e a Ecologia Política',
     'participantes': [{'nome':'Grupo de Estudos em Educação Ambiental Desde el Sur: Anne Kassiadou - UNIRIO', 'bio': ''}, {'nome':'Celso Sánchez', 'bio':'- UNIRIO'}, {'nome':'Stephanie Di Chiara Salgado', 'bio':'- UNIRIO - Grupo de Estudos em Educação Ambiental Desde el Sur'}],
     'moderadores': [{'nome':'', 'bio':''}]
    },
    {'imagem':'/assets/image/danca.jpg',
     'hora': '09:00 - 12:30',
     'instituto':'Sala 5 - Escola de Dança',
     'titulo':'Dança Sensorial Háptica (ação dos Artivistas)s',
     'participantes': [{'nome':'Marta Bezerra', 'bio': ''}],
     'moderadores': [{'nome':'Marta Bezerra', 'bio':''}]
    },
    {'imagem':'/assets/image/ibio.jpg',
     'hora': '08:00 - 18:00',
     'instituto':'Hall do Instituto de Biologia',
     'titulo':'Breve História do Pó',
     'participantes': [ {'nome':'Breve História do Pó é uma instalação a partir da investigação sobre a memória de locais de assassinatos por disputa de terra na região Sul e Sudeste do Pará. Ao realizar uma cartografia precisa dos locais dos assassinatos, um levantamento junto à testemunhas e parentes se fez necessário. Além do registro dessas narrativas, outros depoimentos encontrados ao longo da pesquisa foram coletados, como testemunhos para os inquéritos; e os discursos de um julgamento em que o mandante de um dos assassinatos foi considerado culpado e condenado. A justaposição destas falas junto às fotografias revela níveis da linguagem produzida em relação aos eventos, que os torna menos palpáveis a cada novo estágio do discurso. A pesquisa investiga o quanto a observação destas reminiscências reserva a possibilidade de enxergar o invisível dos mortos sempre presentes.', 'bio':''}],
     'moderadores': [{'nome':'Tomaz Klotzel', 'bio':'- Fotógrafo, vive em São Paulo'}]
    },
    {'imagem':'/assets/image/ibio.jpg',
     'hora': '08:30 - 18:00',
     'instituto':'Hall do Instituto de Biologia',
     'titulo':'Floresta em pé, mulheres vivas: Escutas de (R) Existências',
     'participantes': [ {'nome':'Breve História do Pó é uma instalação a partir da investigação sobre a memória de locais de assassinatos por disputa de terra na região Sul e Sudeste do Pará. Ao realizar uma cartografia precisa dos locais dos assassinatos, um levantamento junto à testemunhas e parentes se fez necessário. Além do registro dessas narrativas, outros depoimentos encontrados ao longo da pesquisa foram coletados, como testemunhos para os inquéritos; e os discursos de um julgamento em que o mandante de um dos assassinatos foi considerado culpado e condenado. A justaposição destas falas junto às fotografias revela níveis da linguagem produzida em relação aos eventos, que os torna menos palpáveis a cada novo estágio do discurso. A pesquisa investiga o quanto a observação destas reminiscências reserva a possibilidade de enxergar o invisível dos mortos sempre presentes.', 'bio':''}],
     'moderadores': [{'nome':'Anastasia G. Itokazu', 'bio':'- UFABC'}, {'nome':'Giovanna Moller', 'bio':'- UFABC'}, {'nome':'Henrique P. Xavier', 'bio':'- USP'}, {'nome':'Juliana de Souza', 'bio':'- UNESP'}, {'nome':'Lea Tosold', 'bio':'- USP'}, {'nome':'Luciana Furlanetto Pereira', 'bio':'- UFSCar'}, {'nome':'Mariana Ruggieri', 'bio':'- Unicamp'}, {'nome':'Marilia M. Pisani', 'bio':'- UFABC'}, {'nome':'Silvana Ramos', 'bio':'- USP'}]
    }
  ];

  public dia18manha1015:Array<object> = [
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório A do IGEO  - Instituto de Geociências',
     'titulo':'Mariana, Barcarena, Brumadinho: mineração e crimes ambientais',
     'participantes': [{'nome':'Carol Moura', 'bio': '- Movimento Atingidos pela Vale, Brumadinho'}, {'nome':'Charles Trocate', 'bio':'- MAM'}, {'nome':'Tádzio Coelho', 'bio':'- UFMA e POeMAS'}, {'nome':'Magno Luiz', 'bio':'- CPT'}, {'nome':'Milton Sanchez', 'bio':'- Colectivo Guardianas y Guardianes de La Laguna, Peru'}, {'nome':'Raquel Neyra', 'bio':'- Universidad de Zaragoza e Ejatlas.org'}],
     'moderadores': [{'nome':'Camila Mudrek', 'bio':'- MAM'}, {'nome':'Magno Oliveira','bio':'- MAM'}]
    },
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório Yeda do IGEO  - Instituto de Geociências',
     'titulo':'Autonomias e movimentos pela Terra',
     'participantes': [{'nome':'Jerry Matalawe', 'bio': '- Coordenador de Políticas para Povos Indígenas da Bahia, mestrando em Antropologia / UFBA'}, {'nome':'Marcley Pataxó', 'bio': '- Coordenador Extremo Sul do MUPOIBA'}, {'nome':'Mãdí Pataxó', 'bio': '- Coordenador Extremo sul do MUPOIBA'}, {'nome':'Agnaldo Pataxó Hã Hã Hãe', 'bio':'- Coordenador Sul do MUPOIBA'}, {'nome':'Miguel Tumbalalá', 'bio':'- Ccoordenador Norte do MUPOIBA'},  {'nome':'Jorge Nahuel', 'bio':'- líder Mapuche'}, {'nome':'Edilena Krikati', 'bio':'- COIAB'}, {'nome':'Modesta Carvalho', 'bio':'- do povo Tukano - COIAB'}],
     'moderadores': [{'nome':'Kâhu Pataxó', 'bio':'- Coordenador Geral do MUPOIBA, Graduando em Direito/UFBA'},{'nome':'Danilo Paiva Ramos', 'bio':'- UFBA'}]
    }, 
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório B do IGEO  - Instituto de Geociências',
     'titulo':'A práxis está na mesa: a contribuição do veganismo para a sustentabilidade ambiental',
     'participantes': [{'nome':'Camilla Almeida', 'bio': '- Sociedade Vegetariana Brasileira'}, {'nome':'Caroline Reis', 'bio':'- Nutrição UFBA'}, {'nome':'Daiana', 'bio':'- Rosas do Dendê e movimento Afrovegan'}, {'nome':'João Pedro Carvalho', 'bio':'- Biologia/UFBA'}, {'nome':'Maria Bittencourt', 'bio':'- Gastronomia/UFBA'},{'nome':'Priscilla Karen', 'bio':'- Oceanografia/UFBA'}],
     'moderadores': [{'nome':'Luis Henrique Vieira de Souza', 'bio':'- UFBA'}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório externo do Instituto de Biologia',
     'titulo':'Resistência nas águas: pescadoras e pescadores na defesa de seus territórios',
     'participantes': [{'nome':'Josana Pinto da Costa', 'bio': '- Pará, Comunidade amador. Associação pescadores e pescadores artesanais. Coordenação Nacional do Movimento de Pescadores e Pescadoras Artesanais (MPP)'}, {'nome':'Maria Alice Borges da Silva', 'bio':'- Lagoa do Curralinho / Juazeiro e Movimento de Pescadores e Pescadoras Artesanais BA (MPP)'}, {'nome':'João Barba', 'bio':'- Reserva Extrativista Marinha Canavieiras - CONFREM'}, {'nome':'Edson Falcão', 'bio':'- Reserva Extrativista Marinha Baía do Iguape, Movimento de Pescadores e Pescadoras Artesanais (MPP)'}],
     'moderadores': [{'nome':'Ivana Muricy', 'bio':''},{'nome':'Eliete Paraguaçu Conceição', 'bio':''},{'nome':'Andrea Rocha do Espirito Santo', 'bio':''}]
    },
    {'imagem':'/assets/image/paf1.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'PAF 1: Auditório Instituto de Matemática',
     'titulo':'Construindo propostas a partir das pedagogias que emergem dos conflitos ambientais, das lutas populares e dos movimentos sociais: perspectivas desde a Educação Ambiental e a Ecologia Política',
     'participantes': [{'nome':'Grupo de Estudos em Educação Ambiental Desde el Sur: Anne Kassiadou - UNIRIO', 'bio': ''}, {'nome':'Celso Sánchez', 'bio':'- UNIRIO'}, {'nome':'Stephanie Di Chiara Salgado', 'bio':'- UNIRIO - Grupo de Estudos em Educação Ambiental Desde el Sur'}],
     'moderadores': [{'nome':'', 'bio':''}]
    },
    {'imagem':'/assets/image/danca.jpg',
     'hora': '09:00 - 12:30',
     'instituto':'Sala 5 - Escola de Dança',
     'titulo':'Dança Sensorial Háptica (ação dos Artivistas)s',
     'participantes': [{'nome':'Marta Bezerra', 'bio': ''}],
     'moderadores': [{'nome':'Marta Bezerra', 'bio':''}]
    },
    {'imagem':'/assets/image/ibio.jpg',
     'hora': '08:00 - 18:00',
     'instituto':'Hall do Instituto de Biologia',
     'titulo':'Breve História do Pó',
     'participantes': [ {'nome':'Breve História do Pó é uma instalação a partir da investigação sobre a memória de locais de assassinatos por disputa de terra na região Sul e Sudeste do Pará. Ao realizar uma cartografia precisa dos locais dos assassinatos, um levantamento junto à testemunhas e parentes se fez necessário. Além do registro dessas narrativas, outros depoimentos encontrados ao longo da pesquisa foram coletados, como testemunhos para os inquéritos; e os discursos de um julgamento em que o mandante de um dos assassinatos foi considerado culpado e condenado. A justaposição destas falas junto às fotografias revela níveis da linguagem produzida em relação aos eventos, que os torna menos palpáveis a cada novo estágio do discurso. A pesquisa investiga o quanto a observação destas reminiscências reserva a possibilidade de enxergar o invisível dos mortos sempre presentes.', 'bio':''}],
     'moderadores': [{'nome':'Tomaz Klotzel', 'bio':'- Fotógrafo, vive em São Paulo'}]
    },
    {'imagem':'/assets/image/ibio.jpg',
     'hora': '08:30 - 18:00',
     'instituto':'Hall do Instituto de Biologia',
     'titulo':'Floresta em pé, mulheres vivas: Escutas de (R) Existências',
     'participantes': [ {'nome':'Breve História do Pó é uma instalação a partir da investigação sobre a memória de locais de assassinatos por disputa de terra na região Sul e Sudeste do Pará. Ao realizar uma cartografia precisa dos locais dos assassinatos, um levantamento junto à testemunhas e parentes se fez necessário. Além do registro dessas narrativas, outros depoimentos encontrados ao longo da pesquisa foram coletados, como testemunhos para os inquéritos; e os discursos de um julgamento em que o mandante de um dos assassinatos foi considerado culpado e condenado. A justaposição destas falas junto às fotografias revela níveis da linguagem produzida em relação aos eventos, que os torna menos palpáveis a cada novo estágio do discurso. A pesquisa investiga o quanto a observação destas reminiscências reserva a possibilidade de enxergar o invisível dos mortos sempre presentes.', 'bio':''}],
     'moderadores': [{'nome':'Anastasia G. Itokazu', 'bio':'- UFABC'}, {'nome':'Giovanna Moller', 'bio':'- UFABC'}, {'nome':'Henrique P. Xavier', 'bio':'- USP'}, {'nome':'Juliana de Souza', 'bio':'- UNESP'}, {'nome':'Lea Tosold', 'bio':'- USP'}, {'nome':'Luciana Furlanetto Pereira', 'bio':'- UFSCar'}, {'nome':'Mariana Ruggieri', 'bio':'- Unicamp'}, {'nome':'Marilia M. Pisani', 'bio':'- UFABC'}, {'nome':'Silvana Ramos', 'bio':'- USP'}]
    }
  ];

  public dia18manha1045:Array<object> = [
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '10:45 - 12:30',
     'instituto':'PAF 5: sala 404',
     'titulo':'Sessões de Trabalho',
     'participantes': [{'nome':'Bem viver, gestão social e emancipação', 'bio':'- Alex Luiz Barros Vargas - Universidade Federal Rural do Rio de Janeiro'}, {'nome':'Desenvolvimento sustentável: reforma ou revolução?', 'bio':'- Suenya Santos Da Cruz - Universidade Federal Fluminense'}, {'nome':'Ecologia política no reconcavo da baía da Guanabara: lutas e disputas territoriais', 'bio':'- Marcelo Stortti - Universidade Federal do Estado do Rio de Janeiro'}, {'nome':'A perspectiva ecosófica nas práticas comunitárias emergentes para transformações socioespaciais', 'bio': '- Heliana Faria Mettig Rocha - UFBA'}, {'nome':'A quimera do desenvolvimento sustentável para supressão da pobreza e da crise ecológica', 'bio': '- Raquel Mota Mascarenhas, UFOP'}            ],
     'moderadores': [{'nome':'Luis Antonio Araújo Costa', 'bio':''}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '10:45 - 12:30',
     'instituto':'PAF 5: sala 406',
     'titulo':'Sessões de Trabalho',
     'participantes': [{'nome':'Movimentos de resistência à indústria do petróleo na perspectiva da ecologia política', 'bio':'- Matheus Thomaz Da Silva - Universidade Federal Fluminense'}, {'nome':'Estrategias de gobernanza ambiental desde las zonas de reserva campesina: las experiencias del valle del río Cimitarra y Pato-Balsillas, Colombia Lizet', 'bio':'- Lizeth Paola Ortiz Guengue (Universidad Nacional de Colombia); Jhon Alexander Giraldo Vargas (Asociación Nacional de Zonas de Reserva Campesina, Colombia)'}, {'nome':'Percursos sustentáveis em busca de novas possibilidades para as hortas escolares a partir da agroecologia escolar', 'bio':'- Angelica Cosenza Rodrigues - Universidade Federal de Juiz de Fora'}, {'nome':'Discursos e práticas docentes como enfrentamento à monocultura de eucalipto no município de Lima Duarte (MG)', 'bio': '- Michele Alice Da Silva - Escola Estadual Tiago Delgado'}],
     'moderadores': [{'nome':'Jussara Rego', 'bio':'MARSOL / UFBA - Fiocruz'}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '10:45 - 12:30',
     'instituto':'PAF 5: sala 407',
     'titulo':'Sessões de Trabalho',
     'participantes': [{'nome':'Além da ciência do espaço do homem: uma interlocução com a reivindicação da coexistência de diferentes formas de vida', 'bio': '- Leonarda De La Ossa Arias - Universidade Federal de Espírito Santo'}, {'nome':'Biogeografias decoloniais', 'bio':'- Ivan de Matos e Silva Junior - Universidade Federal da Bahia'}, {'nome':'La cultura guaraní y sus aportaciones ecocéntricas a las epistemologías ambientales', 'bio':'- Daniel Alberto Oviedo Sotelo - Instituto Nacional de Educación Superior'}, {'nome':'Las audiencias públicas judiciales como mecanismo de amplificación de la existencia de seres considerados padecientes: el caso de la orangutana sandra y del niño jordi quisberth en Buenos Aires', 'bio':'- María Carman - Universidad de Buenos Aires, María Valeria Berros - Universidad Nacional del Litoral'}],
     'moderadores': [{'nome':'Diego Oliveira', 'bio':''}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '10:45 - 12:30',
     'instituto':'PAF 5: sala 408',
     'titulo':'Sessões de Trabalho',
     'participantes': [{'nome':'Amazônia: a última fronteira do capitalismo', 'bio': '- Patricia Vieira - Universidade de Coimbra'}, {'nome':'Para que o céu seja céu: o caráter de levante da obra de Davi Kopenawa Yanomami', 'bio':'- Ana Lígia Leite E Aguiar - Universidade Federal da Bahia'}, {'nome':'Pensamento ameríndio e crítica ao antropocentrismo', 'bio':'- Ana Paula Rodrigues Monteiro - Universidade da Integração Internacional da Lusofonia Afro-Brasileira'}, {'nome':'Dançar para segurar o céu', 'bio':'- Liliana Coutinho - Universidade Nova de Lisboa'}],
     'moderadores': [{'nome':'Cecília Anne Mccallum', 'bio':''}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '10:45 - 12:30',
     'instituto':'PAF 5: Auditório 1',
     'titulo':'Sessões de Trabalho',
     'participantes': [{'nome':'A necessária reabilitação do trabalho e dos trabalhadores para a pesquisa sobre os conflitos ambientais na américa latina no contexto de acumulação por espoliação', 'bio': '- Renata Belzunces Dos Santos - Universidade de São Paulo'}, {'nome':'Acumulação por despossessão: contratos de arrendamento, aquisição de terras e parques eólicos no interior semiárido brasileiro', 'bio':'- Mariana Traldi, Universidade Estadual de Campinas'}, {'nome':'Limites do capital ou limites da natureza? contradições e desigualdades no complexo industrial e portuário do Pecém, Ceará', 'bio':'- Iara Fraga - Universidade Federal de Pernambuco'}],
     'moderadores': [{'nome':'Raquel Rigotto', 'bio':''}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '10:45 - 12:30',
     'instituto':'PAF 5: Auditório 2',
     'titulo':'Sessões de Trabalho',
     'participantes': [{'nome':'Acesso à água em uma periferia da macrometrópole paulista: o caso de Novo Recreio, Guarulhos', 'bio': '- Izabela Penha De Oliveira Santos, USP; Ana Paula Fracalanza, USP'}, {'nome':'Secando la imaginacion. reflexiones antropologicas sobre la burocratizacion del agua en Chile', 'bio':'- Gabriela Rocio Cabana Alvear - London School of Economics and Political Science'}, {'nome':'Fóruns alternativo e coorporativo mundial da água: uma crítica dos contrastes narrativos pela ecologia política', 'bio':'- Marcelo Aversa - Universidade Federal do ABC'}],
     'moderadores': [{'nome':'Maria Cristina Fragkou', 'bio':''}]
    },
    {'imagem':'/assets/image/paf3.jpeg',
     'hora': '10:45 - 12:30',
     'instituto':'PAF 3: Auditório',
     'titulo':'Sessões de Trabalho',
     'participantes': [{'nome':'Conflitos socioambientais como contraconduta: a luta comum frente à governança da vida por corporações multinacionais extrativistas', 'bio':'- Isabella Alves Lamas - Pontificia Universidade Católica de São Paulo'}, {'nome':'Antropoceno e conflitos ambientais: apontamentos sobre as experiências locais em Conceição do Mato Dentro (MG)', 'bio':'- Yasmin Rodrigues Antonietti - Universidade Federal de Minas Gerais'}, {'nome':'Complexo mínero-siderúrgico de Minas Gerais (Brasil): espacialização e conflitos ambientais', 'bio':'- Eder Jurandir Carneiro - Universidade Federal de São João del Rei'}, {'nome':'Direitos da natureza: a ecologia jurídica e política do giro biocêntrico como paradigma para a recuperação do rio doce', 'bio':'- Andiara Cristine Mercini Fausto - Universidade Federal de Ouro Preto'}],
     'moderadores': [{'nome':'Daniel Aragão', 'bio':''}]
    },
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório A do IGEO  - Instituto de Geociências',
     'titulo':'Mariana, Barcarena, Brumadinho: mineração e crimes ambientais',
     'participantes': [{'nome':'Carol Moura', 'bio': '- Movimento Atingidos pela Vale, Brumadinho'}, {'nome':'Charles Trocate', 'bio':'- MAM'}, {'nome':'Tádzio Coelho', 'bio':'- UFMA e POeMAS'}, {'nome':'Magno Luiz', 'bio':'- CPT'}, {'nome':'Milton Sanchez', 'bio':'- Colectivo Guardianas y Guardianes de La Laguna, Peru'}, {'nome':'Raquel Neyra', 'bio':'- Universidad de Zaragoza e Ejatlas.org'}],
     'moderadores': [{'nome':'Camila Mudrek', 'bio':'- MAM'}, {'nome':'Magno Oliveira','bio':'- MAM'}]
    },
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório Yeda do IGEO  - Instituto de Geociências',
     'titulo':'Autonomias e movimentos pela Terra',
     'participantes': [{'nome':'Jerry Matalawe', 'bio': '- Coordenador de Políticas para Povos Indígenas da Bahia, mestrando em Antropologia / UFBA'}, {'nome':'Marcley Pataxó', 'bio': '- Coordenador Extremo Sul do MUPOIBA'}, {'nome':'Mãdí Pataxó', 'bio': '- Coordenador Extremo sul do MUPOIBA'}, {'nome':'Agnaldo Pataxó Hã Hã Hãe', 'bio':'- Coordenador Sul do MUPOIBA'}, {'nome':'Miguel Tumbalalá', 'bio':'- Ccoordenador Norte do MUPOIBA'},  {'nome':'Jorge Nahuel', 'bio':'- líder Mapuche'}, {'nome':'Edilena Krikati', 'bio':'- COIAB'}, {'nome':'Modesta Carvalho', 'bio':'- do povo Tukano - COIAB'}],
     'moderadores': [{'nome':'Kâhu Pataxó', 'bio':'- Coordenador Geral do MUPOIBA, Graduando em Direito/UFBA'},{'nome':'Danilo Paiva Ramos', 'bio':'- UFBA'}]
    }, 
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório B do IGEO  - Instituto de Geociências',
     'titulo':'A práxis está na mesa: a contribuição do veganismo para a sustentabilidade ambiental',
     'participantes': [{'nome':'Camilla Almeida', 'bio': '- Sociedade Vegetariana Brasileira'}, {'nome':'Caroline Reis', 'bio':'- Nutrição UFBA'}, {'nome':'Daiana', 'bio':'- Rosas do Dendê e movimento Afrovegan'}, {'nome':'João Pedro Carvalho', 'bio':'- Biologia/UFBA'}, {'nome':'Maria Bittencourt', 'bio':'- Gastronomia/UFBA'},{'nome':'Priscilla Karen', 'bio':'- Oceanografia/UFBA'}],
     'moderadores': [{'nome':'Luis Henrique Vieira de Souza', 'bio':'- UFBA'}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório externo do Instituto de Biologia',
     'titulo':'Resistência nas águas: pescadoras e pescadores na defesa de seus territórios',
     'participantes': [{'nome':'Josana Pinto da Costa', 'bio': '- Pará, Comunidade amador. Associação pescadores e pescadores artesanais. Coordenação Nacional do Movimento de Pescadores e Pescadoras Artesanais (MPP)'}, {'nome':'Maria Alice Borges da Silva', 'bio':'- Lagoa do Curralinho / Juazeiro e Movimento de Pescadores e Pescadoras Artesanais BA (MPP)'}, {'nome':'João Barba', 'bio':'- Reserva Extrativista Marinha Canavieiras - CONFREM'}, {'nome':'Edson Falcão', 'bio':'- Reserva Extrativista Marinha Baía do Iguape, Movimento de Pescadores e Pescadoras Artesanais (MPP)'}],
     'moderadores': [{'nome':'Ivana Muricy', 'bio':''},{'nome':'Eliete Paraguaçu Conceição', 'bio':''},{'nome':'Andrea Rocha do Espirito Santo', 'bio':''}]
    },
    {'imagem':'/assets/image/paf1.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'PAF 1: Auditório Instituto de Matemática',
     'titulo':'Construindo propostas a partir das pedagogias que emergem dos conflitos ambientais, das lutas populares e dos movimentos sociais: perspectivas desde a Educação Ambiental e a Ecologia Política',
     'participantes': [{'nome':'Grupo de Estudos em Educação Ambiental Desde el Sur: Anne Kassiadou - UNIRIO', 'bio': ''}, {'nome':'Celso Sánchez', 'bio':'- UNIRIO'}, {'nome':'Stephanie Di Chiara Salgado', 'bio':'- UNIRIO - Grupo de Estudos em Educação Ambiental Desde el Sur'}],
     'moderadores': [{'nome':'', 'bio':''}]
    },
    {'imagem':'/assets/image/danca.jpg',
     'hora': '09:00 - 12:30',
     'instituto':'Sala 5 - Escola de Dança',
     'titulo':'Dança Sensorial Háptica (ação dos Artivistas)s',
     'participantes': [{'nome':'Marta Bezerra', 'bio': ''}],
     'moderadores': [{'nome':'Marta Bezerra', 'bio':''}]
    },
    {'imagem':'/assets/image/facom.jpg',
     'hora': '11:00 - 12:30',
     'instituto':'FACOM - Auditório',
     'titulo':'Ciclo de Cinema - Ecologias Decoloniais',
     'participantes': [{'nome':'ATL', 'bio': 'Dir.: Edgar Xakriabá | Doc. | 7min. | 2017'}, {'nome':'Konãgxeka: o Dilúvio Maxakali', 'bio': 'Dir.: Charles Bicalho, Isael Maxakali | Anim. | 13 min. | 2016'}, {'nome':'A festa dos encantados', 'bio': 'Dir.: Masanori Ohashy | Anim. | 14min. | 2016'}],
     'moderadores': [{'nome':'', 'bio':''}]
    },
    {'imagem':'/assets/image/ibio.jpg',
     'hora': '08:00 - 18:00',
     'instituto':'Hall do Instituto de Biologia',
     'titulo':'Breve História do Pó',
     'participantes': [ {'nome':'Breve História do Pó é uma instalação a partir da investigação sobre a memória de locais de assassinatos por disputa de terra na região Sul e Sudeste do Pará. Ao realizar uma cartografia precisa dos locais dos assassinatos, um levantamento junto à testemunhas e parentes se fez necessário. Além do registro dessas narrativas, outros depoimentos encontrados ao longo da pesquisa foram coletados, como testemunhos para os inquéritos; e os discursos de um julgamento em que o mandante de um dos assassinatos foi considerado culpado e condenado. A justaposição destas falas junto às fotografias revela níveis da linguagem produzida em relação aos eventos, que os torna menos palpáveis a cada novo estágio do discurso. A pesquisa investiga o quanto a observação destas reminiscências reserva a possibilidade de enxergar o invisível dos mortos sempre presentes.', 'bio':''}],
     'moderadores': [{'nome':'Tomaz Klotzel', 'bio':'- Fotógrafo, vive em São Paulo'}]
    },
    {'imagem':'/assets/image/ibio.jpg',
     'hora': '08:30 - 18:00',
     'instituto':'Hall do Instituto de Biologia',
     'titulo':'Floresta em pé, mulheres vivas: Escutas de (R) Existências',
     'participantes': [ {'nome':'Breve História do Pó é uma instalação a partir da investigação sobre a memória de locais de assassinatos por disputa de terra na região Sul e Sudeste do Pará. Ao realizar uma cartografia precisa dos locais dos assassinatos, um levantamento junto à testemunhas e parentes se fez necessário. Além do registro dessas narrativas, outros depoimentos encontrados ao longo da pesquisa foram coletados, como testemunhos para os inquéritos; e os discursos de um julgamento em que o mandante de um dos assassinatos foi considerado culpado e condenado. A justaposição destas falas junto às fotografias revela níveis da linguagem produzida em relação aos eventos, que os torna menos palpáveis a cada novo estágio do discurso. A pesquisa investiga o quanto a observação destas reminiscências reserva a possibilidade de enxergar o invisível dos mortos sempre presentes.', 'bio':''}],
     'moderadores': [{'nome':'Anastasia G. Itokazu', 'bio':'- UFABC'}, {'nome':'Giovanna Moller', 'bio':'- UFABC'}, {'nome':'Henrique P. Xavier', 'bio':'- USP'}, {'nome':'Juliana de Souza', 'bio':'- UNESP'}, {'nome':'Lea Tosold', 'bio':'- USP'}, {'nome':'Luciana Furlanetto Pereira', 'bio':'- UFSCar'}, {'nome':'Mariana Ruggieri', 'bio':'- Unicamp'}, {'nome':'Marilia M. Pisani', 'bio':'- UFABC'}, {'nome':'Silvana Ramos', 'bio':'- USP'}]
    }
  ];
  
  public dia18tarde1400:Array<object> = [
    {'imagem':'/assets/image/arquitetura12.jpeg',
     'hora': '14:00 - 16:30',
     'instituto':'Faculdade de Arquitetura: Auditório 1',
     'titulo':'Teatro do Oprimido',
     'participantes': [{'nome':'Flávio José Rocha da Silva', 'bio': '- Educação Ambiental e Teatro do Oprimido'}],
     'moderadores': [{'nome':'Flávio José Rocha da Silva', 'bio':'- Educação Ambiental e Teatro do Oprimido'}]
    },
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '14:00 - 15:30',
     'instituto':'Auditório A do IGEO  - Instituto de Geociências',
     'titulo':'Trilhando para uma ecologia política (I): fronteiras, cachoeiras e caminhos na amazônia',
     'participantes': [{'nome':'Org. Grupo de Estudos em Ecologia Histórica e Política nas bacias dos rios Trombetas, Tapajós e Xingu', 'bio': ''}, {'nome':'Jeremy M. Campbell', 'bio': '- Roger Williams University'}, {'nome':'Hugo Gravina Affonso', 'bio': ''},{'nome':'Vinicius Honorato', 'bio': '- UFOPA'}, {'nome':'Eduardo Neves', 'bio': '- MAE/USP'}, {'nome':'Bruna Rocha', 'bio': '- UFOPA'}],
     'moderadores': [{'nome':'Ricardo Scoles Cano', 'bio':'- UFOPA'}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '14:00 - 15:30',
     'instituto':'Auditório externo do Instituto de Biologia',
     'titulo':'Vidas Tóxicas e narrativas de guerrilhas na era do Lixoceno - Toxic lives and guerrilla narrative in the Wasteocene',
     'participantes': [{'nome':'Larissa Mies Bombardi', 'bio': '- USP'}, {'nome':'Marco Armiero', 'bio': '- KTH, Suécia'}, {'nome':'Raquel Rigotto', 'bio': '- UFC'}],
     'moderadores': [{'nome':'Miguel Accioly', 'bio':'- Marsol/UFBA'}]
    },
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '14:00 - 15:30',
     'instituto':'Auditório B do Instituto de Geociências',
     'titulo':'Mineração, desastres e lutas populares por soberania',
     'participantes': [{'nome':'Tádzio Coelho', 'bio': '- UFMA e POeMAS'}, {'nome':'Charles Trocate', 'bio': '- MAM'},{'nome':'Guiomar Germani', 'bio': '- Geografar/UFBA'},{'nome':'Carol Moura', 'bio': '- Movimento dos Atingidos pela Vale'}, {'nome':'Edna Castro', 'bio': '- NAEA/UFPA'}, {'nome':'Magno Luiz', 'bio': '- CPT'}, {'nome':'Milton Sanchez', 'bio': '- Peru'}, {'nome':'Joan Martinez-Alier', 'bio': '- ICTA/UAB'}],
     'moderadores': [{'nome':'Tádzio Coelho', 'bio': '- UFMA e POeMAS'}]
    },
    {'imagem':'/assets/image/paf1.jpeg',
     'hora': '14:00 - 15:30',
     'instituto':'PAF 1: Instituto de Matemática: Auditório',
     'titulo':'Hacia Una Ecología Política De Los Espacios Globales De Acumulación Del Capital Trasnacional',
     'participantes': [{'nome':'Alejandro Fabián Schweitzer', 'bio': ''}, {'nome':'Alejandro Pimienta Betancour', 'bio': ''}, {'nome':'Jodival Mauricio da Costa', 'bio': ''}, {'nome':'Jorge Aponte Motta', 'bio': ''}, {'nome':'María Laura Torres', 'bio': ''}, {'nome':'Roni Mayer Lomba', 'bio': ''}],
     'moderadores': [{'nome':'Grupo de Trabajo CLACSO: “Fronteras, regionalización y globalización” ', 'bio':''}]
    },
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '14:00 - 15:30',
     'instituto':'Auditório Posgeo do Instituto de Geociências',
     'titulo':'De quando a questão da natureza e do social se torna crise civilizacional, multiespecífica e aberta para o cosmos',
     'participantes': [{'nome':'Maria Carman', 'bio': '- UBA'}, {'nome':'Stelio Marras', 'bio': '- USP'}, {'nome':'Ana Paula Perrota Franco', 'bio': '- UFRJ'}, {'nome':'Salvador Andrés Schavelzon', 'bio': '- UNIFESP, Argentina'}],
     'moderadores': [{'nome':'Salvador Andrés Schavelzon', 'bio': '- UNIFESP - Argentina'}]
    },
    {'imagem':'/assets/image/ibio.jpg',
     'hora': '08:00 - 18:00',
     'instituto':'Hall do Instituto de Biologia',
     'titulo':'Breve História do Pó',
     'participantes': [ {'nome':'Breve História do Pó é uma instalação a partir da investigação sobre a memória de locais de assassinatos por disputa de terra na região Sul e Sudeste do Pará. Ao realizar uma cartografia precisa dos locais dos assassinatos, um levantamento junto à testemunhas e parentes se fez necessário. Além do registro dessas narrativas, outros depoimentos encontrados ao longo da pesquisa foram coletados, como testemunhos para os inquéritos; e os discursos de um julgamento em que o mandante de um dos assassinatos foi considerado culpado e condenado. A justaposição destas falas junto às fotografias revela níveis da linguagem produzida em relação aos eventos, que os torna menos palpáveis a cada novo estágio do discurso. A pesquisa investiga o quanto a observação destas reminiscências reserva a possibilidade de enxergar o invisível dos mortos sempre presentes.', 'bio':''}],
     'moderadores': [{'nome':'Tomaz Klotzel', 'bio':'- Fotógrafo, vive em São Paulo'}]
    },
    {'imagem':'/assets/image/ibio.jpg',
     'hora': '08:30 - 18:00',
     'instituto':'Hall do Instituto de Biologia',
     'titulo':'Floresta em pé, mulheres vivas: Escutas de (R) Existências',
     'participantes': [ {'nome':'Breve História do Pó é uma instalação a partir da investigação sobre a memória de locais de assassinatos por disputa de terra na região Sul e Sudeste do Pará. Ao realizar uma cartografia precisa dos locais dos assassinatos, um levantamento junto à testemunhas e parentes se fez necessário. Além do registro dessas narrativas, outros depoimentos encontrados ao longo da pesquisa foram coletados, como testemunhos para os inquéritos; e os discursos de um julgamento em que o mandante de um dos assassinatos foi considerado culpado e condenado. A justaposição destas falas junto às fotografias revela níveis da linguagem produzida em relação aos eventos, que os torna menos palpáveis a cada novo estágio do discurso. A pesquisa investiga o quanto a observação destas reminiscências reserva a possibilidade de enxergar o invisível dos mortos sempre presentes.', 'bio':''}],
     'moderadores': [{'nome':'Anastasia G. Itokazu', 'bio':'- UFABC'}, {'nome':'Giovanna Moller', 'bio':'- UFABC'}, {'nome':'Henrique P. Xavier', 'bio':'- USP'}, {'nome':'Juliana de Souza', 'bio':'- UNESP'}, {'nome':'Lea Tosold', 'bio':'- USP'}, {'nome':'Luciana Furlanetto Pereira', 'bio':'- UFSCar'}, {'nome':'Mariana Ruggieri', 'bio':'- Unicamp'}, {'nome':'Marilia M. Pisani', 'bio':'- UFABC'}, {'nome':'Silvana Ramos', 'bio':'- USP'}]
    }
  ];

  public dia18tarde1545:Array<object> = [
    {'imagem':'/assets/image/vaolivre-ihac.jpeg',
     'hora': '14:00 - 16:30',
     'instituto':'Vão livre do IHAC - Instituto de Humanidades, Artes e Ciências',
     'titulo':'Teatro do Oprimido',
     'participantes': [{'nome':'Flávio José Rocha da Silva', 'bio': '- Educação Ambiental e Teatro do Oprimido'}],
     'moderadores': [{'nome':'Flávio José Rocha da Silva', 'bio':'- Educação Ambiental e Teatro do Oprimido'}]
    },
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '15:45 - 17:15',
     'instituto':'Auditório A do IGEO  - Instituto de Geociências',
     'titulo':'Trilhando para uma ecologia política (II): As ações de autodemarcação como luta por reconhecimento e autonomismo',
     'participantes': [{'nome':'Org. Grupo de Estudos em Ecologia Histórica e Política nas bacias dos rios Trombetas, Tapajós e Xingu', 'bio': ''}, {'nome':'Luiz Felipe Garcia', 'bio':'- Ufopa'}, {'nome':'Rosamaria Loures Ailen Vega', 'bio':'- Berkeley'}, {'nome':'Chico Caititu', 'bio':'- liderança comunitária'}, {'nome':'Ailen Vega', 'bio':'- Berkeley'}, {'nome':'James Angus Fraser', 'bio':'- University of Lancaster, Reino Unido'}],
     'moderadores': [{'nome':'Maurício Torres', 'bio':'- UFPA'}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '15:45 - 17:15',
     'instituto':'Auditório externo do Instituto de Biologia',
     'titulo':'Chico Mendes vive!',
     'participantes': [{'nome':'Angela Mendes', 'bio': '- Secretária de Mulheres do Conselho Nacional das Populações Extrativistas, CNS, filha de Chico Mendes'}, {'nome':'Claudelice Silva Santos', 'bio':'- Estudante de Direito na UNIFESSPA, Fundação Zé Cláudio e Maria'}, {'nome':'Sonia Guajajara', 'bio':'- liderança indígena, Coordenadora da Articulação dos Povos Indígenas do Brasil - APIB'}],
     'moderadores': [{'nome':'Edel Moraes', 'bio':'- Vice-presidenta do Conselho Nacional das Populações Extrativistas, CNS'}]
    },
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '15:45 - 17:15',
     'instituto':'Auditório Posgeo do Instituto de Geociências',
     'titulo':'El buen vivir en cuestión',
     'participantes': [{'nome':'Melissa Moreano', 'bio': ''},{'nome':'Diana Vela Almeida', 'bio': ''},{'nome':'Manuel Bayón', 'bio': ''},{'nome':'Inigo Arrazola', 'bio': ''}],
     'moderadores': [{'nome':'Org. Colectivo de Geografía Crítica del Ecuador', 'bio':''}]
    },
    {'imagem':'/assets/image/facom.jpg',
     'hora': '16:00 - 17:45',
     'instituto':'FACOM - Auditório',
     'titulo':'Ciclo de Cinema - Ecologias Decoloniais',
     'participantes': [{'nome':'De volta à terra boa', 'bio': 'Dir. Vincent Carelli e Mari Correa | Doc. | 15min. | 2008'}, {'nome':'Pirinop Meu Primeiro Contato', 'bio': 'Dir.  Mari Corrêa e Karané Ikpeng | Doc. | 83 min. | 2007'}],
     'moderadores': [{'nome':'', 'bio':''}]
    },
    {'imagem':'/assets/image/ibio.jpg',
     'hora': '08:00 - 18:00',
     'instituto':'Hall do Instituto de Biologia',
     'titulo':'Breve História do Pó',
     'participantes': [ {'nome':'Breve História do Pó é uma instalação a partir da investigação sobre a memória de locais de assassinatos por disputa de terra na região Sul e Sudeste do Pará. Ao realizar uma cartografia precisa dos locais dos assassinatos, um levantamento junto à testemunhas e parentes se fez necessário. Além do registro dessas narrativas, outros depoimentos encontrados ao longo da pesquisa foram coletados, como testemunhos para os inquéritos; e os discursos de um julgamento em que o mandante de um dos assassinatos foi considerado culpado e condenado. A justaposição destas falas junto às fotografias revela níveis da linguagem produzida em relação aos eventos, que os torna menos palpáveis a cada novo estágio do discurso. A pesquisa investiga o quanto a observação destas reminiscências reserva a possibilidade de enxergar o invisível dos mortos sempre presentes.', 'bio':''}],
     'moderadores': [{'nome':'Tomaz Klotzel', 'bio':'- Fotógrafo, vive em São Paulo'}]
    },
    {'imagem':'/assets/image/ibio.jpg',
     'hora': '08:30 - 18:00',
     'instituto':'Hall do Instituto de Biologia',
     'titulo':'Floresta em pé, mulheres vivas: Escutas de (R) Existências',
     'participantes': [ {'nome':'Breve História do Pó é uma instalação a partir da investigação sobre a memória de locais de assassinatos por disputa de terra na região Sul e Sudeste do Pará. Ao realizar uma cartografia precisa dos locais dos assassinatos, um levantamento junto à testemunhas e parentes se fez necessário. Além do registro dessas narrativas, outros depoimentos encontrados ao longo da pesquisa foram coletados, como testemunhos para os inquéritos; e os discursos de um julgamento em que o mandante de um dos assassinatos foi considerado culpado e condenado. A justaposição destas falas junto às fotografias revela níveis da linguagem produzida em relação aos eventos, que os torna menos palpáveis a cada novo estágio do discurso. A pesquisa investiga o quanto a observação destas reminiscências reserva a possibilidade de enxergar o invisível dos mortos sempre presentes.', 'bio':''}],
     'moderadores': [{'nome':'Anastasia G. Itokazu', 'bio':'- UFABC'}, {'nome':'Giovanna Moller', 'bio':'- UFABC'}, {'nome':'Henrique P. Xavier', 'bio':'- USP'}, {'nome':'Juliana de Souza', 'bio':'- UNESP'}, {'nome':'Lea Tosold', 'bio':'- USP'}, {'nome':'Luciana Furlanetto Pereira', 'bio':'- UFSCar'}, {'nome':'Mariana Ruggieri', 'bio':'- Unicamp'}, {'nome':'Marilia M. Pisani', 'bio':'- UFABC'}, {'nome':'Silvana Ramos', 'bio':'- USP'}]
    }
  ];

  public dia18tarde1630:Array<object> = [
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '15:45 - 17:15',
     'instituto':'Auditório A do IGEO  - Instituto de Geociências',
     'titulo':'Trilhando para uma ecologia política (II): As ações de autodemarcação como luta por reconhecimento e autonomismo',
     'participantes': [{'nome':'Org. Grupo de Estudos em Ecologia Histórica e Política nas bacias dos rios Trombetas, Tapajós e Xingu', 'bio': ''}, {'nome':'Luiz Felipe Garcia', 'bio':'- Ufopa'}, {'nome':'Rosamaria Loures Ailen Vega', 'bio':'- Berkeley'}, {'nome':'Chico Caititu', 'bio':'- liderança comunitária'}, {'nome':'Ailen Vega', 'bio':'- Berkeley'}, {'nome':'James Angus Fraser', 'bio':'- University of Lancaster, Reino Unido'}],
     'moderadores': [{'nome':'Maurício Torres', 'bio':'- UFPA'}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '15:45 - 17:15',
     'instituto':'Auditório externo do Instituto de Biologia',
     'titulo':'Chico Mendes vive!',
     'participantes': [{'nome':'Angela Mendes', 'bio': '- Secretária de Mulheres do Conselho Nacional das Populações Extrativistas, CNS, filha de Chico Mendes'}, {'nome':'Claudelice Silva Santos', 'bio':'- Estudante de Direito na UNIFESSPA, Fundação Zé Cláudio e Maria'}, {'nome':'Sonia Guajajara', 'bio':'- liderança indígena, Coordenadora da Articulação dos Povos Indígenas do Brasil - APIB'}],
     'moderadores': [{'nome':'Edel Moraes', 'bio':'- Vice-presidenta do Conselho Nacional das Populações Extrativistas, CNS'}]
    },
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '15:45 - 17:15',
     'instituto':'Auditório Posgeo do Instituto de Geociências',
     'titulo':'El buen vivir en cuestión',
     'participantes': [{'nome':'Melissa Moreano', 'bio': ''},{'nome':'Diana Vela Almeida', 'bio': ''},{'nome':'Manuel Bayón', 'bio': ''},{'nome':'Inigo Arrazola', 'bio': ''}],
     'moderadores': [{'nome':'Org. Colectivo de Geografía Crítica del Ecuador', 'bio':''}]
    },
    {'imagem':'/assets/image/facom.jpg',
     'hora': '16:00 - 17:45',
     'instituto':'FACOM - Auditório',
     'titulo':'Ciclo de Cinema - Ecologias Decoloniais',
     'participantes': [{'nome':'De volta à terra boa', 'bio': 'Dir. Vincent Carelli e Mari Correa | Doc. | 15min. | 2008'}, {'nome':'Pirinop Meu Primeiro Contato', 'bio': 'Dir.  Mari Corrêa e Karané Ikpeng | Doc. | 83 min. | 2007'}],
     'moderadores': [{'nome':'', 'bio':''}]
    },
    {'imagem':'/assets/image/ibio.jpg',
     'hora': '08:00 - 18:00',
     'instituto':'Hall do Instituto de Biologia',
     'titulo':'Breve História do Pó',
     'participantes': [ {'nome':'Breve História do Pó é uma instalação a partir da investigação sobre a memória de locais de assassinatos por disputa de terra na região Sul e Sudeste do Pará. Ao realizar uma cartografia precisa dos locais dos assassinatos, um levantamento junto à testemunhas e parentes se fez necessário. Além do registro dessas narrativas, outros depoimentos encontrados ao longo da pesquisa foram coletados, como testemunhos para os inquéritos; e os discursos de um julgamento em que o mandante de um dos assassinatos foi considerado culpado e condenado. A justaposição destas falas junto às fotografias revela níveis da linguagem produzida em relação aos eventos, que os torna menos palpáveis a cada novo estágio do discurso. A pesquisa investiga o quanto a observação destas reminiscências reserva a possibilidade de enxergar o invisível dos mortos sempre presentes.', 'bio':''}],
     'moderadores': [{'nome':'Tomaz Klotzel', 'bio':'- Fotógrafo, vive em São Paulo'}]
    },
    {'imagem':'/assets/image/ibio.jpg',
     'hora': '08:30 - 18:00',
     'instituto':'Hall do Instituto de Biologia',
     'titulo':'Floresta em pé, mulheres vivas: Escutas de (R) Existências',
     'participantes': [ {'nome':'Breve História do Pó é uma instalação a partir da investigação sobre a memória de locais de assassinatos por disputa de terra na região Sul e Sudeste do Pará. Ao realizar uma cartografia precisa dos locais dos assassinatos, um levantamento junto à testemunhas e parentes se fez necessário. Além do registro dessas narrativas, outros depoimentos encontrados ao longo da pesquisa foram coletados, como testemunhos para os inquéritos; e os discursos de um julgamento em que o mandante de um dos assassinatos foi considerado culpado e condenado. A justaposição destas falas junto às fotografias revela níveis da linguagem produzida em relação aos eventos, que os torna menos palpáveis a cada novo estágio do discurso. A pesquisa investiga o quanto a observação destas reminiscências reserva a possibilidade de enxergar o invisível dos mortos sempre presentes.', 'bio':''}],
     'moderadores': [{'nome':'Anastasia G. Itokazu', 'bio':'- UFABC'}, {'nome':'Giovanna Moller', 'bio':'- UFABC'}, {'nome':'Henrique P. Xavier', 'bio':'- USP'}, {'nome':'Juliana de Souza', 'bio':'- UNESP'}, {'nome':'Lea Tosold', 'bio':'- USP'}, {'nome':'Luciana Furlanetto Pereira', 'bio':'- UFSCar'}, {'nome':'Mariana Ruggieri', 'bio':'- Unicamp'}, {'nome':'Marilia M. Pisani', 'bio':'- UFABC'}, {'nome':'Silvana Ramos', 'bio':'- USP'}]
    }
  ];

  public dia18noite1800:Array<object> = [
    {'imagem':'/assets/image/reitoria.jpg',
     'hora': '18:00 - 18:30',
     'instituto':'Salão Nobre da Reitoria da UFBA (Canela)',
     'titulo':'Insurgências Decoloniais e Horizontes Emancipatórios para o enfrentamento às turbulências atuais',
     'participantes': [{'nome':'Magnífico Reitor João Carlos Salles ', 'bio': '- UFBA'}],
     'moderadores': [{'nome':'Os BusUFBAs que passam pela Reitoria são: Expresso, B2, B5, B1, B4 e o Residências.', 'bio':'- O B3 não passa na Reitoria.'}]
    }
  ];

  public dia18noite1830:Array<object> = [
    {'imagem':'/assets/image/reitoria.jpg',
     'hora': '18:30 - 20:30',
     'instituto':'Salão Nobre da Reitoria da UFBA (Canela)',
     'titulo':'Paisagens das desigualdades',
     'participantes': [{'nome':'Maristella Svampa', 'bio': '- Univ. La Plata/Argentina'},{'nome':'Alda Salomão', 'bio': '- CTV/Moçambique'}, {'nome':'Sonia Guajajara', 'bio': '- APIB/Brasil'}],
     'moderadores': [{'nome':'', 'bio': ''}]
    }
  ];

  public fim:Array<object> = [
    {'imagem':'/assets/image/reitoria.jpg',
     'hora': '--:-- - --:--',
     'instituto':'',
     'titulo':'Até amanhã!',
     'participantes': [{'nome':'Meia-noite aparecerão as atividades de amanhã', 'bio': ''}],
     'moderadores': [{'nome':'', 'bio': ''}]
    }
  ];

  // Cronograma do segundo dia
  public dia19manha0830:Array<object> = [
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: Auditório 1',
     'titulo':'Sessões de trabalho',
     'participantes': [{'nome':'De naturalezas a naturaleza: la paradoja de la conservación a través de la financiarización', 'bio': '- Constanza Casalderrey Zapata, Universidad Nacional Rio Negro'},{'nome':'Extractivismo petrolero y conservación de la biodiversidad: tensiones y complementariedades en la reserva laguna de Llancanelo (Mendoza, Argentina)', 'bio': '- Paula D´Amico, Universidad Nacional de Cuyo'}, {'nome':'Political ecology and territorialities of conservation policy in Colombia: case study', 'bio':'- Connie Lopez-Gomez, Universidad Nacional de Colombia'}, {'nome':'Conservação ambiental, green grabbing e despossessão: a reorganização do controle da terra, dos recursos naturais e do grupo social. a APA Macaé de cima na bacia do Rio Bonito, Nova Friburgo, RJ', 'bio':'- Victor N. Urzua, UFRRJ'}],
     'moderadores': [{'nome':'Melissa Moreano', 'bio':''}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: Auditório 2',
     'titulo':'Sessões de trabalho',
     'participantes': [{'nome':'Complexo Logístico Intermodal Porto Sul: conflitos territoriais em Ilhéus, Bahia (2008-2018)', 'bio': 'Lorena Andrea Torres Higuera, UFES'},{'nome':'Formas de ocupação territorial em disputas e os conflitos ambientais', 'bio': '- Jaqueline G. Santos, UFRGS'}, {'nome':'Os conflitos territoriais na Bacia Hidrográfica do Rio Paraguaçu', 'bio':'- Claudio Dourado, Comissão Pastoral da Terra'}, {'nome':'Avanço das fronteiras do capitalismo na Amazônia, região da BR-163: espoliação, conflitos sociais e subalternidade', 'bio':'- Rosane De Seixas Brito Araújo, UFPA'}, {'nome':'Opará, o rio marcado para morrer', 'bio':'- Flávio José Rocha da Silva, Universidade de São Paulo'}],
     'moderadores': [{'nome':'Iñigo Arrazola', 'bio':''}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: sala 404',
     'titulo':'Sessões de trabalho',
     'participantes': [{'nome':'A luta pela manutenção da autonomia comunitária em Juruti Velho, Juruti/PA: o diálogo entre saberes jurídicos acadêmicos e comunitários', 'bio': '- Lincon Sousa Aguiar, UFOP'},{'nome':'Desprovincializar o desenvolvimento: enunciação subalterna e resistência nas bordas da acumulação capitalista na Amazônia', 'bio': '- Wendell Ficher Teixeira Assis, UFAL'}, {'nome':'Gobernanza y disputas por el territorio indígena: el caso de los pueblos ‘aislados’ de la Amazonia', 'bio':'- Luis Felipe Torres (Museu Nacional / UFRJ)'}, {'nome':'“A gente não sabia que podia gritar”: contestando a vocação florestal do município de Imbaú, Paraná, Brasil', 'bio':'- Mailane Junkes Raizer Da Cruz, Instituto Federal Catarinense'}],
     'moderadores': [{'nome':'Manuel Bayón', 'bio':''}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: sala 406',
     'titulo':'Sessões de trabalho',
     'participantes': [{'nome':'O entendimento da sociedade civil sob a ótica gramsciana e suas potencialidades na análise de conselhos gestores de unidades de conservação', 'bio': '- Renata de Souza, UFRJ'},{'nome':'Entre preservação ambiental e justiça social: um estudo de caso sobre as comunidades nativas do Parque Nacional da Chapada Diamantina - Bahia', 'bio': '- Maria Medrado Nascimento, IFBA'},{'nome':'Transformações socioambientais e a busca pela autonomia, justiça social e ambiental de uma comunidade quilombola no Rio de Janeiro.', 'bio': '- Eduarda Rezende Caillava Gomes, UFRJ'},{'nome':'Um estudo sobre a regularização das terras das comunidades quilombolas atingidas pelo projeto de integração do rio São Francisco (PISF)', 'bio': '- Charles Evandre Vieira Ferreira, UFRS'},{'nome':'Mas onde está sua alma? Entre manobras políticas cooptações e o sentimento de comunidade no viver de pescadoras e pescadores da Baía do Iguape, Recôncavo Baiano', 'bio': '- Bruno Romão Tardio, Instituto Chico Mendes de Conservação da Biodiversidade e Carolina Silva Sapucaia, Grupo Costeiros- UFBA'}],
     'moderadores': [{'nome':'Shanti Marengo', 'bio':'- CECULT/UFRB'}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: sala 407',
     'titulo':'Sessões de trabalho',
     'participantes': [{'nome':'Mapas imagéticos e raízes móveis: Repensando a crítica ontológica a processos de auto-organização cole(a)tiva na perspectiva espacial/territorial de mulheres indígenas e negras', 'bio': '- Léa Tosold (USP)'},{'nome':'Desafios metodológicos nas considerações ontológicas de "sociedade(s)" e "natureza(s)": Diálogos entre geografia e ecologia política', 'bio': '- Marco Antonio Sampaio Malagoli (UFF)'},{'nome':'Ciência sucessora na América Latina', 'bio': '- Anastasia Guidi Itokazu, UFABC'},{'nome':'Uma proposta epistemológica para a Serra da Canastra', 'bio': '- Gabrielle Luz Campos (UFOP)'}],
     'moderadores': [{'nome':'Paulo Fonseca ', 'bio':''}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: sala 408',
     'titulo':'Sessões de trabalho',
     'participantes': [{'nome':'O legado africano: A cosmovisão africana na organização das comunidades quilombolas do vale do Ribeira', 'bio': '- Maíra Rodrigues Da Silva - Casa de Cultura Fazenda Roseira e Lucas César Rodrigues Da Silva - UNICAMP'},{'nome':'Para resistir é preciso primeiro ter a opção de se libertar: O processo de re-existência dos povos e comunidades tradicionais do Rio Ribeira de Iguape - SP', 'bio': '- Camila Gomes De Mello, UFPR'},{'nome':'Reflexões feministas e decoloniais sobre raça e racismo no Brasil e na Bolívia', 'bio': '- Caroline Cotta De Mello Freitas, FESPSP'},{'nome':'A categoria de gênero no contexto de conflitos sócio-ambientais: o caso das mulheres zapatistas', 'bio': '- Laura Marquesan Eschberger (ESPM – sul)'},{'nome':'Imaginários ecofeministas latino-americanos e a experiência da revolução em Rojava', 'bio': '- Eleonora Gea Piccardi, Universidade de Coimbra'}],
     'moderadores': [{'nome':'Rosy Oliveira', 'bio':'- UFRB'}]
    },
    {'imagem':'/assets/image/paf3.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 3: Auditório',
     'titulo':'Sessões de trabalho',
     'participantes': [{'nome':'Água e Região: Epistemologias Alternativas a partir do Enfoque Hidrossocial', 'bio': '- Hugo Kamiya Tsutsui (UFABC)'},{'nome':'Plantaciones de Monocultivos Forestales PMF y Aguas en disputa en la región del norte Caucano, Colombia', 'bio': '- Felipe Castiblanco Álvarez (Universidad Nacional de Colombia)'}],
     'moderadores': [{'nome':'Catalina Toro Perez', 'bio':''}]
    },
    {'imagem':'/assets/image/ibio.jpg',
     'hora': '08:00 - 18:00',
     'instituto':'Hall do Instituto de Biologia',
     'titulo':'Breve História do Pó',
     'participantes': [ {'nome':'Breve História do Pó é uma instalação a partir da investigação sobre a memória de locais de assassinatos por disputa de terra na região Sul e Sudeste do Pará. Ao realizar uma cartografia precisa dos locais dos assassinatos, um levantamento junto à testemunhas e parentes se fez necessário. Além do registro dessas narrativas, outros depoimentos encontrados ao longo da pesquisa foram coletados, como testemunhos para os inquéritos; e os discursos de um julgamento em que o mandante de um dos assassinatos foi considerado culpado e condenado. A justaposição destas falas junto às fotografias revela níveis da linguagem produzida em relação aos eventos, que os torna menos palpáveis a cada novo estágio do discurso. A pesquisa investiga o quanto a observação destas reminiscências reserva a possibilidade de enxergar o invisível dos mortos sempre presentes.', 'bio':''}],
     'moderadores': [{'nome':'Tomaz Klotzel', 'bio':'- Fotógrafo, vive em São Paulo'}]
    },
    {'imagem':'/assets/image/ibio.jpg',
     'hora': '08:30 - 18:00',
     'instituto':'Hall do Instituto de Biologia',
     'titulo':'Floresta em pé, mulheres vivas: Escutas de (R) Existências',
     'participantes': [ {'nome':'Breve História do Pó é uma instalação a partir da investigação sobre a memória de locais de assassinatos por disputa de terra na região Sul e Sudeste do Pará. Ao realizar uma cartografia precisa dos locais dos assassinatos, um levantamento junto à testemunhas e parentes se fez necessário. Além do registro dessas narrativas, outros depoimentos encontrados ao longo da pesquisa foram coletados, como testemunhos para os inquéritos; e os discursos de um julgamento em que o mandante de um dos assassinatos foi considerado culpado e condenado. A justaposição destas falas junto às fotografias revela níveis da linguagem produzida em relação aos eventos, que os torna menos palpáveis a cada novo estágio do discurso. A pesquisa investiga o quanto a observação destas reminiscências reserva a possibilidade de enxergar o invisível dos mortos sempre presentes.', 'bio':''}],
     'moderadores': [{'nome':'Anastasia G. Itokazu', 'bio':'- UFABC'}, {'nome':'Giovanna Moller', 'bio':'- UFABC'}, {'nome':'Henrique P. Xavier', 'bio':'- USP'}, {'nome':'Juliana de Souza', 'bio':'- UNESP'}, {'nome':'Lea Tosold', 'bio':'- USP'}, {'nome':'Luciana Furlanetto Pereira', 'bio':'- UFSCar'}, {'nome':'Mariana Ruggieri', 'bio':'- Unicamp'}, {'nome':'Marilia M. Pisani', 'bio':'- UFABC'}, {'nome':'Silvana Ramos', 'bio':'- USP'}]
    }
  ];

  public dia19manha0900:Array<object> = [
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: Auditório 1',
     'titulo':'Sessões de trabalho',
     'participantes': [{'nome':'De naturalezas a naturaleza: la paradoja de la conservación a través de la financiarización', 'bio': '- Constanza Casalderrey Zapata, Universidad Nacional Rio Negro'},{'nome':'Extractivismo petrolero y conservación de la biodiversidad: tensiones y complementariedades en la reserva laguna de Llancanelo (Mendoza, Argentina)', 'bio': '- Paula D´Amico, Universidad Nacional de Cuyo'}, {'nome':'Political ecology and territorialities of conservation policy in Colombia: case study', 'bio':'- Connie Lopez-Gomez, Universidad Nacional de Colombia'}, {'nome':'Conservação ambiental, green grabbing e despossessão: a reorganização do controle da terra, dos recursos naturais e do grupo social. a APA Macaé de cima na bacia do Rio Bonito, Nova Friburgo, RJ', 'bio':'- Victor N. Urzua, UFRRJ'}],
     'moderadores': [{'nome':'Melissa Moreano', 'bio':''}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: Auditório 2',
     'titulo':'Sessões de trabalho',
     'participantes': [{'nome':'Complexo Logístico Intermodal Porto Sul: conflitos territoriais em Ilhéus, Bahia (2008-2018)', 'bio': 'Lorena Andrea Torres Higuera, UFES'},{'nome':'Formas de ocupação territorial em disputas e os conflitos ambientais', 'bio': '- Jaqueline G. Santos, UFRGS'}, {'nome':'Os conflitos territoriais na Bacia Hidrográfica do Rio Paraguaçu', 'bio':'- Claudio Dourado, Comissão Pastoral da Terra'}, {'nome':'Avanço das fronteiras do capitalismo na Amazônia, região da BR-163: espoliação, conflitos sociais e subalternidade', 'bio':'- Rosane De Seixas Brito Araújo, UFPA'}],
     'moderadores': [{'nome':'Iñigo Arrazola', 'bio':''}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: sala 404',
     'titulo':'Sessões de trabalho',
     'participantes': [{'nome':'A luta pela manutenção da autonomia comunitária em Juruti Velho, Juruti/PA: o diálogo entre saberes jurídicos acadêmicos e comunitários', 'bio': '- Lincon Sousa Aguiar, UFOP'},{'nome':'Desprovincializar o desenvolvimento: enunciação subalterna e resistência nas bordas da acumulação capitalista na Amazônia', 'bio': '- Wendell Ficher Teixeira Assis, UFAL'}, {'nome':'Gobernanza y disputas por el territorio indígena: el caso de los pueblos ‘aislados’ de la Amazonia', 'bio':'- Luis Felipe Torres (Museu Nacional / UFRJ)'}, {'nome':'“A gente não sabia que podia gritar”: contestando a vocação florestal do município de Imbaú, Paraná, Brasil', 'bio':'- Mailane Junkes Raizer Da Cruz, Instituto Federal Catarinense'}],
     'moderadores': [{'nome':'Manuel Bayón', 'bio':''}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: sala 406',
     'titulo':'Sessões de trabalho',
     'participantes': [{'nome':'O entendimento da sociedade civil sob a ótica gramsciana e suas potencialidades na análise de conselhos gestores de unidades de conservação', 'bio': '- Renata de Souza, UFRJ'},{'nome':'Entre preservação ambiental e justiça social: um estudo de caso sobre as comunidades nativas do Parque Nacional da Chapada Diamantina - Bahia', 'bio': '- Maria Medrado Nascimento, IFBA'},{'nome':'Transformações socioambientais e a busca pela autonomia, justiça social e ambiental de uma comunidade quilombola no Rio de Janeiro.', 'bio': '- Eduarda Rezende Caillava Gomes, UFRJ'},{'nome':'Um estudo sobre a regularização das terras das comunidades quilombolas atingidas pelo projeto de integração do rio São Francisco (PISF)', 'bio': '- Charles Evandre Vieira Ferreira, UFRS'},{'nome':'Mas onde está sua alma? Entre manobras políticas cooptações e o sentimento de comunidade no viver de pescadoras e pescadores da Baía do Iguape, Recôncavo Baiano', 'bio': '- Bruno Romão Tardio, Instituto Chico Mendes de Conservação da Biodiversidade e Carolina Silva Sapucaia, Grupo Costeiros- UFBA'}],
     'moderadores': [{'nome':'Shanti Marengo', 'bio':'- CECULT/UFRB'}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: sala 407',
     'titulo':'Sessões de trabalho',
     'participantes': [{'nome':'Mapas imagéticos e raízes móveis: Repensando a crítica ontológica a processos de auto-organização cole(a)tiva na perspectiva espacial/territorial de mulheres indígenas e negras', 'bio': '- Léa Tosold (USP)'},{'nome':'Desafios metodológicos nas considerações ontológicas de "sociedade(s)" e "natureza(s)": Diálogos entre geografia e ecologia política', 'bio': '- Marco Antonio Sampaio Malagoli (UFF)'},{'nome':'Ciência sucessora na América Latina', 'bio': '- Anastasia Guidi Itokazu, UFABC'},{'nome':'Uma proposta epistemológica para a Serra da Canastra', 'bio': '- Gabrielle Luz Campos (UFOP)'}],
     'moderadores': [{'nome':'Paulo Fonseca ', 'bio':''}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: sala 408',
     'titulo':'Sessões de trabalho',
     'participantes': [{'nome':'O legado africano: A cosmovisão africana na organização das comunidades quilombolas do vale do Ribeira', 'bio': '- Maíra Rodrigues Da Silva - Casa de Cultura Fazenda Roseira e Lucas César Rodrigues Da Silva - UNICAMP'},{'nome':'Para resistir é preciso primeiro ter a opção de se libertar: O processo de re-existência dos povos e comunidades tradicionais do Rio Ribeira de Iguape - SP', 'bio': '- Camila Gomes De Mello, UFPR'},{'nome':'Reflexões feministas e decoloniais sobre raça e racismo no Brasil e na Bolívia', 'bio': '- Caroline Cotta De Mello Freitas, FESPSP'},{'nome':'A categoria de gênero no contexto de conflitos sócio-ambientais: o caso das mulheres zapatistas', 'bio': '- Laura Marquesan Eschberger (ESPM – sul)'},{'nome':'Imaginários ecofeministas latino-americanos e a experiência da revolução em Rojava', 'bio': '- Eleonora Gea Piccardi, Universidade de Coimbra'}],
     'moderadores': [{'nome':'Rosy Oliveira', 'bio':'- UFRB'}]
    },
    {'imagem':'/assets/image/paf3.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 3: Auditório',
     'titulo':'Sessões de trabalho',
     'participantes': [{'nome':'Água e Região: Epistemologias Alternativas a partir do Enfoque Hidrossocial', 'bio': '- Hugo Kamiya Tsutsui (UFABC)'},{'nome':'Plantaciones de Monocultivos Forestales PMF y Aguas en disputa en la región del norte Caucano, Colombia', 'bio': '- Felipe Castiblanco Álvarez (Universidad Nacional de Colombia)'}],
     'moderadores': [{'nome':'Catalina Toro Perez', 'bio':''}]
    },
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório A do IGEO  - Instituto de Geociências',
     'titulo':'Candomblé e ecologia: raízes, racismo e resistência',
     'participantes': [{'nome':'Iyá Jaciara Ribeiro dos Santos', 'bio':'- Ilê Axé Abassá de Ogum'},{'nome':'Ekede Sinha', 'bio':'- Casa Branca - Ilê Axé Iyá Nassô Oká'},{'nome':'Babalorixá Duda', 'bio': '- Ilê Axé Icimimó, Cachoeira'}],
     'moderadores': [{'nome':'Jussara Rêgo', 'bio': '- MARSOL/UFBA; FIOCRUZ'}, {'nome':'KOINONIA Presença Ecumênica e Serviço', 'bio': ''}]
    },
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório B do IGEO - Instituto de Geociências',
     'titulo':'Ecologia Política e epistemologia: Interculturalidade, formas de apropriação do saber acadêmico e novas experiências universitárias',
     'participantes': [{'nome':'Felipe Cruz Tuxá', 'bio':'- UNEB e UNB'},{'nome':'Edilena Krikati', 'bio':'- Coordenação das Organizações Indígenas da Amazônia Brasileira - Coiab'}],
     'moderadores': [{'nome':'Felipe Cruz Tuxá', 'bio':'- UNEB e UNB'},{'nome':'Edilena Krikati', 'bio':'- Coordenação das Organizações Indígenas da Amazônia Brasileira - Coiab'}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório externo do Instituto de Biologia',
     'titulo':'Modos de (r)existência nos territórios pesqueiros',
     'participantes': [{'nome':'Clovis Amorim', 'bio':'- Comunidade Cajueiro -MA - Coordenação Nacional MPP'},{'nome':'Josana Serrão Pinto', 'bio':'- Comunidade Amador - PA - Coordenação Nacional MPP'},{'nome':'Eliete Paraguaçu Conceição', 'bio':'- Comunidades Pesqueiras e Quilombolas de Ilha de Maré - MPP - BA'},{'nome':'Raimundo Siri', 'bio':'- Comunidade Cova da Onça - MPP-BA'}, {'nome':'Joselita Gonçalves', 'bio':'- Quilombo Dom João'},{'nome':'Pedro Teixeira Diamantino', 'bio':'- Professor UEFS e Colaborador MPP'},{'nome':'Carlos Alberto Pinto', 'bio':'– Resex Canavieiras / Coordenação Nacional da Confrem'}],
     'moderadores': [{'nome':'Maria José Pacheco', 'bio':'- CPP'},{'nome':'Rafael Palermo Buti', 'bio':'- Unilab'}]
    },
    {'imagem':'/assets/image/arquitetura12.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório 1 - Faculdade de Arquitetura e Urbanismo',
     'titulo':'Movilizar los Cuerpos-Territorio: Performances Reflexivas para la Práctica Política',
     'participantes': [{'nome':'Lucrecia Raquel Greco', 'bio':'- Universidade de Buenos Aires'},{'nome':'Armindo Pinto', 'bio':''},{'nome':'Teatro do Oprimido de Salvador', 'bio': ''}],
     'moderadores': [{'nome':'Lucrecia Raquel Greco', 'bio':'- Universidade de Buenos Aires'},{'nome':'Armindo Pinto', 'bio':''},{'nome':'Teatro do Oprimido de Salvador', 'bio': ''}]
    },
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório Posgeo - Instituto de Geociências',
     'titulo':'PROSA: Escola de Formação de Autoprodutores em Processos Socioambientais',
     'participantes': [{'nome':'Viviane Zerlotini da Silva', 'bio':'- Pontifícia Universidade Católica de Minas Gerais'}],
     'moderadores': [{'nome':'Viviane Zerlotini da Silva', 'bio':'- Pontifícia Universidade Católica de Minas Gerais'}]
    },
    {'imagem':'/assets/image/congrega.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Congregação - Faculdade de Arquitetura e Urbanismo',
     'titulo':'Oficina de grafismos',
     'participantes': [{'nome':'Denilson Baniwa', 'bio':''}],
     'moderadores': [{'nome':'Denilson Baniwa', 'bio':''}]
    },
    {'imagem':'/assets/image/ibio.jpg',
     'hora': '08:00 - 18:00',
     'instituto':'Hall do Instituto de Biologia',
     'titulo':'Breve História do Pó',
     'participantes': [ {'nome':'Breve História do Pó é uma instalação a partir da investigação sobre a memória de locais de assassinatos por disputa de terra na região Sul e Sudeste do Pará. Ao realizar uma cartografia precisa dos locais dos assassinatos, um levantamento junto à testemunhas e parentes se fez necessário. Além do registro dessas narrativas, outros depoimentos encontrados ao longo da pesquisa foram coletados, como testemunhos para os inquéritos; e os discursos de um julgamento em que o mandante de um dos assassinatos foi considerado culpado e condenado. A justaposição destas falas junto às fotografias revela níveis da linguagem produzida em relação aos eventos, que os torna menos palpáveis a cada novo estágio do discurso. A pesquisa investiga o quanto a observação destas reminiscências reserva a possibilidade de enxergar o invisível dos mortos sempre presentes.', 'bio':''}],
     'moderadores': [{'nome':'Tomaz Klotzel', 'bio':'- Fotógrafo, vive em São Paulo'}]
    },
    {'imagem':'/assets/image/ibio.jpg',
     'hora': '08:30 - 18:00',
     'instituto':'Hall do Instituto de Biologia',
     'titulo':'Floresta em pé, mulheres vivas: Escutas de (R) Existências',
     'participantes': [ {'nome':'Breve História do Pó é uma instalação a partir da investigação sobre a memória de locais de assassinatos por disputa de terra na região Sul e Sudeste do Pará. Ao realizar uma cartografia precisa dos locais dos assassinatos, um levantamento junto à testemunhas e parentes se fez necessário. Além do registro dessas narrativas, outros depoimentos encontrados ao longo da pesquisa foram coletados, como testemunhos para os inquéritos; e os discursos de um julgamento em que o mandante de um dos assassinatos foi considerado culpado e condenado. A justaposição destas falas junto às fotografias revela níveis da linguagem produzida em relação aos eventos, que os torna menos palpáveis a cada novo estágio do discurso. A pesquisa investiga o quanto a observação destas reminiscências reserva a possibilidade de enxergar o invisível dos mortos sempre presentes.', 'bio':''}],
     'moderadores': [{'nome':'Anastasia G. Itokazu', 'bio':'- UFABC'}, {'nome':'Giovanna Moller', 'bio':'- UFABC'}, {'nome':'Henrique P. Xavier', 'bio':'- USP'}, {'nome':'Juliana de Souza', 'bio':'- UNESP'}, {'nome':'Lea Tosold', 'bio':'- USP'}, {'nome':'Luciana Furlanetto Pereira', 'bio':'- UFSCar'}, {'nome':'Mariana Ruggieri', 'bio':'- Unicamp'}, {'nome':'Marilia M. Pisani', 'bio':'- UFABC'}, {'nome':'Silvana Ramos', 'bio':'- USP'}]
    }
  ];

  public dia19manha1015:Array<object> = [
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório A do IGEO  - Instituto de Geociências',
     'titulo':'Candomblé e ecologia: raízes, racismo e resistência',
     'participantes': [{'nome':'Iyá Jaciara Ribeiro dos Santos', 'bio':'- Ilê Axé Abassá de Ogum'},{'nome':'Ekede Sinha', 'bio':'- Casa Branca - Ilê Axé Iyá Nassô Oká'},{'nome':'Babalorixá Duda', 'bio': '- Ilê Axé Icimimó, Cachoeira'}],
     'moderadores': [{'nome':'Jussara Rego', 'bio': '- MARSOL/UFBA: FIOCRUZ'}, {'nome':'KOINONIA Presença Ecumênica e Serviço', 'bio': ''}]
    },
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório B do IGEO - Instituto de Geociências',
     'titulo':'Ecologia Política e epistemologia: Interculturalidade, formas de apropriação do saber acadêmico e novas experiências universitárias',
     'participantes': [{'nome':'Felipe Cruz Tuxá', 'bio':'- UNEB e UNB'},{'nome':'Edilena Krikati', 'bio':'- Coordenação das Organizações Indígenas da Amazônia Brasileira - Coiab'}],
     'moderadores': [{'nome':'Felipe Cruz Tuxá', 'bio':'- UNEB e UNB'},{'nome':'Edilena Krikati', 'bio':'- Coordenação das Organizações Indígenas da Amazônia Brasileira - Coiab'}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório externo do Instituto de Biologia',
     'titulo':'Modos de (r)existência nos territórios pesqueiros',
     'participantes': [{'nome':'Clovis Amorim', 'bio':'- Comunidade Cajueiro -MA - Coordenação Nacional MPP'},{'nome':'Josana Serrão Pinto', 'bio':'- Comunidade Amador - PA - Coordenação Nacional MPP'},{'nome':'Eliete Paraguaçu Conceição', 'bio':'- Comunidades Pesqueiras e Quilombolas de Ilha de Maré - MPP - BA'},{'nome':'Raimundo Siri', 'bio':'- Comunidade Cova da Onça - MPP-BA'}, {'nome':'Joselita Gonçalves', 'bio':'- Quilombo Dom João'},{'nome':'Pedro Teixeira Diamantino', 'bio':'- Professor UEFS e Colaborador MPP'},{'nome':'Carlos Alberto Pinto', 'bio':'– Resex Canavieiras / Coordenação Nacional da Confrem'}],
     'moderadores': [{'nome':'Maria José Pacheco', 'bio':'- CPP'},{'nome':'Rafael Palermo Buti', 'bio':'- Unilab'}]
    },
    {'imagem':'/assets/image/arquitetura12.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório 1 - Faculdade de Arquitetura e Urbanismo',
     'titulo':'Movilizar los Cuerpos-Territorio: Performances Reflexivas para la Práctica Política',
     'participantes': [{'nome':'Lucrecia Raquel Greco', 'bio':'- Universidade de Buenos Aires'},{'nome':'Armindo Pinto', 'bio':''},{'nome':'Teatro do Oprimido de Salvador', 'bio': ''}],
     'moderadores': [{'nome':'Lucrecia Raquel Greco', 'bio':'- Universidade de Buenos Aires'},{'nome':'Armindo Pinto', 'bio':''},{'nome':'Teatro do Oprimido de Salvador', 'bio': ''}]
    },
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório Posgeo - Instituto de Geociências',
     'titulo':'PROSA: Escola de Formação de Autoprodutores em Processos Socioambientais',
     'participantes': [{'nome':'Viviane Zerlotini da Silva', 'bio':'- Pontifícia Universidade Católica de Minas Gerais'}],
     'moderadores': [{'nome':'Viviane Zerlotini da Silva', 'bio':'- Pontifícia Universidade Católica de Minas Gerais'}]
    },
    {'imagem':'/assets/image/congrega.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Congregação - Faculdade de Arquitetura e Urbanismo',
     'titulo':'Oficina de grafismos',
     'participantes': [{'nome':'Denilson Baniwa', 'bio':''}],
     'moderadores': [{'nome':'Denilson Baniwa', 'bio':''}]
    },
    {'imagem':'/assets/image/ibio.jpg',
     'hora': '08:00 - 18:00',
     'instituto':'Hall do Instituto de Biologia',
     'titulo':'Breve História do Pó',
     'participantes': [ {'nome':'Breve História do Pó é uma instalação a partir da investigação sobre a memória de locais de assassinatos por disputa de terra na região Sul e Sudeste do Pará. Ao realizar uma cartografia precisa dos locais dos assassinatos, um levantamento junto à testemunhas e parentes se fez necessário. Além do registro dessas narrativas, outros depoimentos encontrados ao longo da pesquisa foram coletados, como testemunhos para os inquéritos; e os discursos de um julgamento em que o mandante de um dos assassinatos foi considerado culpado e condenado. A justaposição destas falas junto às fotografias revela níveis da linguagem produzida em relação aos eventos, que os torna menos palpáveis a cada novo estágio do discurso. A pesquisa investiga o quanto a observação destas reminiscências reserva a possibilidade de enxergar o invisível dos mortos sempre presentes.', 'bio':''}],
     'moderadores': [{'nome':'Tomaz Klotzel', 'bio':'- Fotógrafo, vive em São Paulo'}]
    },
    {'imagem':'/assets/image/ibio.jpg',
     'hora': '08:30 - 18:00',
     'instituto':'Hall do Instituto de Biologia',
     'titulo':'Floresta em pé, mulheres vivas: Escutas de (R) Existências',
     'participantes': [ {'nome':'Breve História do Pó é uma instalação a partir da investigação sobre a memória de locais de assassinatos por disputa de terra na região Sul e Sudeste do Pará. Ao realizar uma cartografia precisa dos locais dos assassinatos, um levantamento junto à testemunhas e parentes se fez necessário. Além do registro dessas narrativas, outros depoimentos encontrados ao longo da pesquisa foram coletados, como testemunhos para os inquéritos; e os discursos de um julgamento em que o mandante de um dos assassinatos foi considerado culpado e condenado. A justaposição destas falas junto às fotografias revela níveis da linguagem produzida em relação aos eventos, que os torna menos palpáveis a cada novo estágio do discurso. A pesquisa investiga o quanto a observação destas reminiscências reserva a possibilidade de enxergar o invisível dos mortos sempre presentes.', 'bio':''}],
     'moderadores': [{'nome':'Anastasia G. Itokazu', 'bio':'- UFABC'}, {'nome':'Giovanna Moller', 'bio':'- UFABC'}, {'nome':'Henrique P. Xavier', 'bio':'- USP'}, {'nome':'Juliana de Souza', 'bio':'- UNESP'}, {'nome':'Lea Tosold', 'bio':'- USP'}, {'nome':'Luciana Furlanetto Pereira', 'bio':'- UFSCar'}, {'nome':'Mariana Ruggieri', 'bio':'- Unicamp'}, {'nome':'Marilia M. Pisani', 'bio':'- UFABC'}, {'nome':'Silvana Ramos', 'bio':'- USP'}]
    }
  ];

  public dia19manha1030:Array<object> = [
    {'imagem':'/assets/image/vaolivre-ihac.jpeg',
     'hora': '10:30 - 10:45',
     'instituto':'Vão livre do IHAC - Instituto de Humanidades, Artes e Ciências',
     'titulo':'Apresentação: Teatro do Oprimido',
     'participantes': [{'nome':'Flávio José Rocha da Silva', 'bio':''}],
     'moderadores': [{'nome':'Flávio José Rocha da Silva', 'bio':''}]
    },
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório A do IGEO  - Instituto de Geociências',
     'titulo':'Candomblé e ecologia: raízes, racismo e resistência',
     'participantes': [{'nome':'Iyá Jaciara Ribeiro dos Santos', 'bio':'- Ilê Axé Abassá de Ogum'},{'nome':'Ekede Sinha', 'bio':'- Casa Branca - Ilê Axé Iyá Nassô Oká'},{'nome':'Babalorixá Duda', 'bio': '- Ilê Axé Icimimó, Cachoeira'}],
     'moderadores': [{'nome':'Jussara Rego', 'bio': '- MARSOL/UFBA: FIOCRUZ'}, {'nome':'KOINONIA Presença Ecumênica e Serviço', 'bio': ''}]
    },
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório B do IGEO - Instituto de Geociências',
     'titulo':'Ecologia Política e epistemologia: Interculturalidade, formas de apropriação do saber acadêmico e novas experiências universitárias',
     'participantes': [{'nome':'Felipe Cruz Tuxá', 'bio':'- UNEB e UNB'},{'nome':'Edilena Krikati', 'bio':'- Coordenação das Organizações Indígenas da Amazônia Brasileira - Coiab'}],
     'moderadores': [{'nome':'Felipe Cruz Tuxá', 'bio':'- UNEB e UNB'},{'nome':'Edilena Krikati', 'bio':'- Coordenação das Organizações Indígenas da Amazônia Brasileira - Coiab'}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório externo do Instituto de Biologia',
     'titulo':'Modos de (r)existência nos territórios pesqueiros',
     'participantes': [{'nome':'Clovis Amorim', 'bio':'- Comunidade Cajueiro -MA - Coordenação Nacional MPP'},{'nome':'Josana Serrão Pinto', 'bio':'- Comunidade Amador - PA - Coordenação Nacional MPP'},{'nome':'Eliete Paraguaçu Conceição', 'bio':'- Comunidades Pesqueiras e Quilombolas de Ilha de Maré - MPP - BA'},{'nome':'Raimundo Siri', 'bio':'- Comunidade Cova da Onça - MPP-BA'}, {'nome':'Joselita Gonçalves', 'bio':'- Quilombo Dom João'},{'nome':'Pedro Teixeira Diamantino', 'bio':'- Professor UEFS e Colaborador MPP'},{'nome':'Carlos Alberto Pinto', 'bio':'– Resex Canavieiras / Coordenação Nacional da Confrem'}],
     'moderadores': [{'nome':'Maria José Pacheco', 'bio':'- CPP'},{'nome':'Rafael Palermo Buti', 'bio':'- Unilab'}]
    },
    {'imagem':'/assets/image/arquitetura12.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório 1 - Faculdade de Arquitetura e Urbanismo',
     'titulo':'Movilizar los Cuerpos-Territorio: Performances Reflexivas para la Práctica Política',
     'participantes': [{'nome':'Lucrecia Raquel Greco', 'bio':'- Universidade de Buenos Aires'},{'nome':'Armindo Pinto', 'bio':''},{'nome':'Teatro do Oprimido de Salvador', 'bio': ''}],
     'moderadores': [{'nome':'Lucrecia Raquel Greco', 'bio':'- Universidade de Buenos Aires'},{'nome':'Armindo Pinto', 'bio':''},{'nome':'Teatro do Oprimido de Salvador', 'bio': ''}]
    },
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório Posgeo - Instituto de Geociências',
     'titulo':'PROSA: Escola de Formação de Autoprodutores em Processos Socioambientais',
     'participantes': [{'nome':'Viviane Zerlotini da Silva', 'bio':'- Pontifícia Universidade Católica de Minas Gerais'}],
     'moderadores': [{'nome':'Viviane Zerlotini da Silva', 'bio':'- Pontifícia Universidade Católica de Minas Gerais'}]
    },
    {'imagem':'/assets/image/congrega.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Congregação - Faculdade de Arquitetura e Urbanismo',
     'titulo':'Oficina de grafismos',
     'participantes': [{'nome':'Denilson Baniwa', 'bio':''}],
     'moderadores': [{'nome':'Denilson Baniwa', 'bio':''}]
    },
    {'imagem':'/assets/image/ibio.jpg',
     'hora': '08:00 - 18:00',
     'instituto':'Hall do Instituto de Biologia',
     'titulo':'Breve História do Pó',
     'participantes': [ {'nome':'Breve História do Pó é uma instalação a partir da investigação sobre a memória de locais de assassinatos por disputa de terra na região Sul e Sudeste do Pará. Ao realizar uma cartografia precisa dos locais dos assassinatos, um levantamento junto à testemunhas e parentes se fez necessário. Além do registro dessas narrativas, outros depoimentos encontrados ao longo da pesquisa foram coletados, como testemunhos para os inquéritos; e os discursos de um julgamento em que o mandante de um dos assassinatos foi considerado culpado e condenado. A justaposição destas falas junto às fotografias revela níveis da linguagem produzida em relação aos eventos, que os torna menos palpáveis a cada novo estágio do discurso. A pesquisa investiga o quanto a observação destas reminiscências reserva a possibilidade de enxergar o invisível dos mortos sempre presentes.', 'bio':''}],
     'moderadores': [{'nome':'Tomaz Klotzel', 'bio':'- Fotógrafo, vive em São Paulo'}]
    },
    {'imagem':'/assets/image/ibio.jpg',
     'hora': '08:30 - 18:00',
     'instituto':'Hall do Instituto de Biologia',
     'titulo':'Floresta em pé, mulheres vivas: Escutas de (R) Existências',
     'participantes': [ {'nome':'Breve História do Pó é uma instalação a partir da investigação sobre a memória de locais de assassinatos por disputa de terra na região Sul e Sudeste do Pará. Ao realizar uma cartografia precisa dos locais dos assassinatos, um levantamento junto à testemunhas e parentes se fez necessário. Além do registro dessas narrativas, outros depoimentos encontrados ao longo da pesquisa foram coletados, como testemunhos para os inquéritos; e os discursos de um julgamento em que o mandante de um dos assassinatos foi considerado culpado e condenado. A justaposição destas falas junto às fotografias revela níveis da linguagem produzida em relação aos eventos, que os torna menos palpáveis a cada novo estágio do discurso. A pesquisa investiga o quanto a observação destas reminiscências reserva a possibilidade de enxergar o invisível dos mortos sempre presentes.', 'bio':''}],
     'moderadores': [{'nome':'Anastasia G. Itokazu', 'bio':'- UFABC'}, {'nome':'Giovanna Moller', 'bio':'- UFABC'}, {'nome':'Henrique P. Xavier', 'bio':'- USP'}, {'nome':'Juliana de Souza', 'bio':'- UNESP'}, {'nome':'Lea Tosold', 'bio':'- USP'}, {'nome':'Luciana Furlanetto Pereira', 'bio':'- UFSCar'}, {'nome':'Mariana Ruggieri', 'bio':'- Unicamp'}, {'nome':'Marilia M. Pisani', 'bio':'- UFABC'}, {'nome':'Silvana Ramos', 'bio':'- USP'}]
    }
  ];
  
  public dia19manha1045:Array<object> = [
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '10:45 - 12:30',
     'instituto':'PAF 5: Auditório 1',
     'titulo':'Sessão de Trabalho',
     'participantes': [{'nome':'Ações coletivas de consumidores com foco ambiental: qual é seu potencial transformador?', 'bio':'- Giuliana Franco Leal - UFRJ'}, {'nome':'Conflictos ambientales producidos por el diseño territorial del valle del cauca, Colombia: resistencias comunitarias frente a la expansión cañera y la urbanización', 'bio':'- Hernando Uribe Castro - Universidad Autónoma de Occidente'}, {'nome':'Ecología política urbana: un foco a los residuo', 'bio':'- Eduardo Giesen Amtmann - Coletivo Viento Sur'}, {'nome':'Colonialidades na Amazônia urbana: produção de resíduos, desastre ambiental e narrativas em disputa. O caso do lixão de Marituba', 'bio':'- Rosane Maria Albino Steinbrenner - UFPA e Rosaly Seixas Brito, UFPA'}],
     'moderadores': [{'nome':'Marcelo Araujo', 'bio':''}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '10:45 - 12:30',
     'instituto':'PAF 5: Auditório 2',
     'titulo':'Sessão de Trabalho',
     'participantes': [{'nome':'Equifinality in the Smallholder Slot: Cash Crop Development in the Brazilian Amazon and Indonesian Borneo', 'bio':'- Gregory Thaler - University of Georgia'}, {'nome':'Levantamento da agricultura em transição agroecológica no município de Macaé-RJ', 'bio':'- Pedro Marinho, UFRJ'}, {'nome':'Agrotóxicos: uma perspectiva a partir da ecologia política', 'bio':'- Shaiane Carla Gaboardi - Universidade Estadual do Oeste'}, {'nome':'Aportes para una ecología política de las áreas protegidas en  Argentina: entre los imaginarios de la conservación y las  realidades del extractivismo', 'bio':'- Pablo Daniel Pereira - Universidad de Buenos Aires e Laura Borsellino'}],
     'moderadores': [{'nome':'Miguel da Costa Accioly', 'bio':'- Marsol / UFBA'}]
    },
    {'imagem':'/assets/image/paf3.jpeg',
     'hora': '10:45 - 12:30',
     'instituto':'PAF 3: Auditório',
     'titulo':'Sessão de Trabalho',
     'participantes': [{'nome':'Material and discursive dynamics at the core of social mobilization in commodity territories: the case of Chiloe', 'bio':'- Beatriz Bustos - Universidad de Chile'}, {'nome':'Tensiones territoriales y productivas de la acuicultura en Chiloé-Chile', 'bio':'- Vladia Torres Herrera - UFBA'}, {'nome':'Discursos sobre la Floración de Algas Nocivas (FAN): Controversias en Torno a la Crisis Socioambiental de la Marea Roja en Isla Grande de Chiloé', 'bio':'- Marco Andres Herrera Mansilla - Universidad de la Frontera'}],
     'moderadores': [{'nome':'Maria Cristina Fragkou', 'bio':''}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '10:45 - 12:30',
     'instituto':'PAF 5: sala 404',
     'titulo':'Sessão de Trabalho',
     'participantes': [{'nome':'Todo empieza por lo local, autogobiernos y salidas del extractivismo', 'bio':'- Raquel Neyra Soupplet - Universidad de Zaragoza'}, {'nome':'Cada uno, cada uno. Proyecto de reparación integral en el contexto de 50 años de extractivismo en la Amazonia Norte Ecuatoriana', 'bio':'- Federica Giunta - Acción Ecológica'}, {'nome':'Paisagismo comestível e espaço exterior doméstico voltados à soberania alimentar: aldeia Itamarã e ocupações Bubas', 'bio':'- Céline Veríssimo - Universidade Federal da Integração Latino-Americana'}, {'nome':'Territórios Tradicionalmente Ocupados e atingidos por rejeitos da mineração na Planície Costeira do Rio Doce (ES): por uma visibilidade descolonial', 'bio':'- Simone Raquel Batista Ferreira - UFES'}],
     'moderadores': [{'nome':'Isabella Lamas', 'bio':'- GECI-PUC-SP'}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '10:45 - 12:30',
     'instituto':'PAF 5: sala 406',
     'titulo':'Sessão de Trabalho',
     'participantes': [{'nome':'“Nós Somos Raiz do Lugar”: produção do espaço na Comunidade Quilombola São José do Barro Vermelho', 'bio':'- Renata Guimarães Vieira - UFOP'}, {'nome':'Conflitos e resistências no território do quilombo Rio dos Macacos', 'bio':'- Paula Regina De Oliveira Cordeiro - UFBA'}, {'nome':'Conflitos, educação ambiental e ecologia política: a leitura crítica do território a partir da desigualdade e injustiça ambiental', 'bio':'- Patrícia de Oliveira Plácido - Universidade Estadual do Rio de Janeiro'}, {'nome':'Granjeras del Mar: Luchas y Sueños en Coliumo. Historia del Área de manejo del Sindicato No.2', 'bio':'- Gloria L Gallardo Fernández - Södertörn University'}],
     'moderadores': [{'nome':'Catherine Prost', 'bio':''}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '10:45 - 12:30',
     'instituto':'PAF 5: sala 407',
     'titulo':'Sessão de Trabalho',
     'participantes': [{'nome':'Misrepresentations, asymmetries and imbalances of power: negative implications of “oriental institutionalism” for Concentrating Solar Power investments in MENA countries', 'bio':'- Luiz Souza - UFBA'}, {'nome':'Sumak Kawsay, Más Allá del Buen Vivir', 'bio':'- Lissette Eliana Torres Arevalo - Universidade Federal do Rio Grande'}, {'nome':'El papel de la ciencia de los suelos en las luchas por el ecosocialismo', 'bio':'- Salvatore Engel-Di Mauro Suny'}, {'nome':'O Avanço Cosmopolítico das Plantas', 'bio':'- Salvador Andrés Schavelzon - UNIFESP'}],
     'moderadores': [{'nome':'Horacio Machado Aráoz', 'bio':''}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '10:45 - 12:30',
     'instituto':'PAF 5: sala 408',
     'titulo':'Sessão de Trabalho',
     'participantes': [{'nome':'Termo de compromisso como instrumento para promover justiça ambiental em Unidades de Conservação Brasileiras', 'bio':'- Lílian Lindoso (Instituto Chico Mendes)'}, {'nome':'Terra, papel, tesoura: sobrevivendo à expropriação', 'bio':'- Mariana Peceguini Ruggieri (UNICAMP)'}, {'nome':'O Tamanduá e a Sucuri Gigante: Autodemarcação Territorial e Colaborações  Interétnicas na Amazônia Brasileira', 'bio':'- Jeremy M. Campbell (Roger Williams University)'}, {'nome':'Autonomia nos processos decisórios como elemento fundamental para a resiliência de sistemas de co-manejo de quelônios no Baixo Amazona', 'bio':'- Fernanda Carneiro Romagnoli, Universidade Federal Rural da Amazônia'}],
     'moderadores': [{'nome':'Bruna Rocha', 'bio':''}]
    },
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório A do IGEO  - Instituto de Geociências',
     'titulo':'Candomblé e ecologia: raízes, racismo e resistência',
     'participantes': [{'nome':'Iyá Jaciara Ribeiro dos Santos', 'bio':'- Ilê Axé Abassá de Ogum'},{'nome':'Ekede Sinha', 'bio':'- Casa Branca - Ilê Axé Iyá Nassô Oká'},{'nome':'Babalorixá Duda', 'bio': '- Ilê Axé Icimimó, Cachoeira'}],
     'moderadores': [{'nome':'Jussara Rego', 'bio': '- MARSOL/UFBA: FIOCRUZ'}, {'nome':'KOINONIA Presença Ecumênica e Serviço', 'bio': ''}]
    },
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório B do IGEO - Instituto de Geociências',
     'titulo':'Ecologia Política e epistemologia: Interculturalidade, formas de apropriação do saber acadêmico e novas experiências universitárias',
     'participantes': [{'nome':'Felipe Cruz Tuxá', 'bio':'- UNEB e UNB'},{'nome':'Edilena Krikati', 'bio':'- Coordenação das Organizações Indígenas da Amazônia Brasileira - Coiab'}],
     'moderadores': [{'nome':'Felipe Cruz Tuxá', 'bio':'- UNEB e UNB'},{'nome':'Edilena Krikati', 'bio':'- Coordenação das Organizações Indígenas da Amazônia Brasileira - Coiab'}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório externo do Instituto de Biologia',
     'titulo':'Modos de (r)existência nos territórios pesqueiros',
     'participantes': [{'nome':'Clovis Amorim', 'bio':'- Comunidade Cajueiro -MA - Coordenação Nacional MPP'},{'nome':'Josana Serrão Pinto', 'bio':'- Comunidade Amador - PA - Coordenação Nacional MPP'},{'nome':'Eliete Paraguaçu Conceição', 'bio':'- Comunidades Pesqueiras e Quilombolas de Ilha de Maré - MPP - BA'},{'nome':'Raimundo Siri', 'bio':'- Comunidade Cova da Onça - MPP-BA'}, {'nome':'Joselita Gonçalves', 'bio':'- Quilombo Dom João'},{'nome':'Pedro Teixeira Diamantino', 'bio':'- Professor UEFS e Colaborador MPP'},{'nome':'Carlos Alberto Pinto', 'bio':'– Resex Canavieiras / Coordenação Nacional da Confrem'}],
     'moderadores': [{'nome':'Maria José Pacheco', 'bio':'- CPP'},{'nome':'Rafael Palermo Buti', 'bio':'- Unilab'}]
    },
    {'imagem':'/assets/image/arquitetura12.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório 1 - Faculdade de Arquitetura e Urbanismo',
     'titulo':'Movilizar los Cuerpos-Territorio: Performances Reflexivas para la Práctica Política',
     'participantes': [{'nome':'Lucrecia Raquel Greco', 'bio':'- Universidade de Buenos Aires'},{'nome':'Armindo Pinto', 'bio':''},{'nome':'Teatro do Oprimido de Salvador', 'bio': ''}],
     'moderadores': [{'nome':'Lucrecia Raquel Greco', 'bio':'- Universidade de Buenos Aires'},{'nome':'Armindo Pinto', 'bio':''},{'nome':'Teatro do Oprimido de Salvador', 'bio': ''}]
    },
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório Posgeo - Instituto de Geociências',
     'titulo':'PROSA: Escola de Formação de Autoprodutores em Processos Socioambientais',
     'participantes': [{'nome':'Viviane Zerlotini da Silva', 'bio':'- Pontifícia Universidade Católica de Minas Gerais'}],
     'moderadores': [{'nome':'Viviane Zerlotini da Silva', 'bio':'- Pontifícia Universidade Católica de Minas Gerais'}]
    },
    {'imagem':'/assets/image/congrega.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Congregação - Faculdade de Arquitetura e Urbanismo',
     'titulo':'Oficina de grafismos',
     'participantes': [{'nome':'Denilson Baniwa', 'bio':''}],
     'moderadores': [{'nome':'Denilson Baniwa', 'bio':''}]
    },
    {'imagem':'/assets/image/facom.jpg',
     'hora': '11:00 - 12:30',
     'instituto':'FACOM - Auditório',
     'titulo':'Ciclo de Cinema - Ecologias Decoloniais',
     'participantes': [{'nome':'A Última Volta do Xingu', 'bio': 'Dir.: Kamikia Kisedjê e Wallace Nogueira | Doc. | 35 min. | 2015'}, {'nome':'Aquém Margens', 'bio': 'Dir.: Alexandra Duarte e Evandro Medeiros | Doc. | 48 min. | 2015'}],
     'moderadores': [{'nome':'', 'bio':''}]
    },
    {'imagem':'/assets/image/ibio.jpg',
     'hora': '08:00 - 18:00',
     'instituto':'Hall do Instituto de Biologia',
     'titulo':'Breve História do Pó',
     'participantes': [ {'nome':'Breve História do Pó é uma instalação a partir da investigação sobre a memória de locais de assassinatos por disputa de terra na região Sul e Sudeste do Pará. Ao realizar uma cartografia precisa dos locais dos assassinatos, um levantamento junto à testemunhas e parentes se fez necessário. Além do registro dessas narrativas, outros depoimentos encontrados ao longo da pesquisa foram coletados, como testemunhos para os inquéritos; e os discursos de um julgamento em que o mandante de um dos assassinatos foi considerado culpado e condenado. A justaposição destas falas junto às fotografias revela níveis da linguagem produzida em relação aos eventos, que os torna menos palpáveis a cada novo estágio do discurso. A pesquisa investiga o quanto a observação destas reminiscências reserva a possibilidade de enxergar o invisível dos mortos sempre presentes.', 'bio':''}],
     'moderadores': [{'nome':'Tomaz Klotzel', 'bio':'- Fotógrafo, vive em São Paulo'}]
    },
    {'imagem':'/assets/image/ibio.jpg',
     'hora': '08:30 - 18:00',
     'instituto':'Hall do Instituto de Biologia',
     'titulo':'Floresta em pé, mulheres vivas: Escutas de (R) Existências',
     'participantes': [ {'nome':'Breve História do Pó é uma instalação a partir da investigação sobre a memória de locais de assassinatos por disputa de terra na região Sul e Sudeste do Pará. Ao realizar uma cartografia precisa dos locais dos assassinatos, um levantamento junto à testemunhas e parentes se fez necessário. Além do registro dessas narrativas, outros depoimentos encontrados ao longo da pesquisa foram coletados, como testemunhos para os inquéritos; e os discursos de um julgamento em que o mandante de um dos assassinatos foi considerado culpado e condenado. A justaposição destas falas junto às fotografias revela níveis da linguagem produzida em relação aos eventos, que os torna menos palpáveis a cada novo estágio do discurso. A pesquisa investiga o quanto a observação destas reminiscências reserva a possibilidade de enxergar o invisível dos mortos sempre presentes.', 'bio':''}],
     'moderadores': [{'nome':'Anastasia G. Itokazu', 'bio':'- UFABC'}, {'nome':'Giovanna Moller', 'bio':'- UFABC'}, {'nome':'Henrique P. Xavier', 'bio':'- USP'}, {'nome':'Juliana de Souza', 'bio':'- UNESP'}, {'nome':'Lea Tosold', 'bio':'- USP'}, {'nome':'Luciana Furlanetto Pereira', 'bio':'- UFSCar'}, {'nome':'Mariana Ruggieri', 'bio':'- Unicamp'}, {'nome':'Marilia M. Pisani', 'bio':'- UFABC'}, {'nome':'Silvana Ramos', 'bio':'- USP'}]
    }
  ];
  
  public dia19tarde1400:Array<object> = [
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '14:00 - 15:30',
     'instituto':'Auditório externo do Instituto de Biologia',
     'titulo':'Saberes e fazeres terapêuticos quilombolas: desafios e perspectivas no Antropoceno',
     'participantes': [{'nome':'Ananias Viana', 'bio':'- Quilombo do Kaonge'},{'nome':'Carlos Caroso', 'bio':'- UFBA'},{'nome':'Fernando Morais', 'bio':'- UFRB'},{'nome':'Francesca Bassi', 'bio':'- UFRB'},{'nome':'Thais Penaforte', 'bio':'- UFBA'},{'nome':'Iacy Pissolato', 'bio':''}],
     'moderadores': [{'nome':'Fátima Regina Gomes Tavares', 'bio':'- UFBA'}]
    },
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '14:00 - 15:30',
     'instituto':'Auditório Posgeo - Instituto de Geociências',
     'titulo':'Ecologia Política na América Latina: origens e caminhos',
     'participantes': [{'nome':'José Augusto Pádua', 'bio':'- UFRJ'},{'nome':'Beatriz Bustos', 'bio':'- Universidad de Chile/ENTITLE'},{'nome':'Catalina Toro', 'bio':'- Universidad Nacional de Colombia/CLACSO'}],
     'moderadores': [{'nome':'Vanessa Empinotti', 'bio':'- UFABC'}]
    },
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '14:00 - 15:30',
     'instituto':'Auditório B do Instituto de Geociências',
     'titulo':'Pós-extrativismo e alternativas sistêmicas',
     'participantes': [{'nome':'Pablo Solon', 'bio':'- Fundación Solón'},{'nome':'Horácio Machado', 'bio':'- Conicet'},{'nome':'Maristella Svampa', 'bio':'- Universidad de La Plata, Argentina'},{'nome':'Mina Lorena Navarro', 'bio':'- Benemérita Universidad Autónoma de Puebla, México'}],
     'moderadores': [{'nome':'Tadeu Breda', 'bio':''}]
    },
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '14:00 - 15:30',
     'instituto':'Auditório A do Instituto de Geociências',
     'titulo':'Conflitos territoriais ',
     'participantes': [{'nome':'Valdivino Sousa', 'bio':'- Central de Fundo e Fecho de Pasto'},{'nome':'Danilo Sodré', 'bio':'- Quilombo Pesqueiro Conceição de Salinas'},{'nome':'Clodoaldo Silva de Oliveira', 'bio':'- Assentamento Dois Riachões/CETA'},{'nome':'Carivaldo Ferreira dos Santos', 'bio':'- CPT/Barra'},{'nome':'Joaci Cunha', 'bio':'- CEAS/ UCSal'},{'nome':'Joice Bonfim', 'bio':'- AATR'}],
     'moderadores': [{'nome':'Gilca Garcia Oliveira', 'bio':'- Economia UFBA, POSGEO UFBA'}]
    },
    {'imagem':'/assets/image/ibio.jpg',
     'hora': '08:00 - 18:00',
     'instituto':'Hall do Instituto de Biologia',
     'titulo':'Breve História do Pó',
     'participantes': [ {'nome':'Breve História do Pó é uma instalação a partir da investigação sobre a memória de locais de assassinatos por disputa de terra na região Sul e Sudeste do Pará. Ao realizar uma cartografia precisa dos locais dos assassinatos, um levantamento junto à testemunhas e parentes se fez necessário. Além do registro dessas narrativas, outros depoimentos encontrados ao longo da pesquisa foram coletados, como testemunhos para os inquéritos; e os discursos de um julgamento em que o mandante de um dos assassinatos foi considerado culpado e condenado. A justaposição destas falas junto às fotografias revela níveis da linguagem produzida em relação aos eventos, que os torna menos palpáveis a cada novo estágio do discurso. A pesquisa investiga o quanto a observação destas reminiscências reserva a possibilidade de enxergar o invisível dos mortos sempre presentes.', 'bio':''}],
     'moderadores': [{'nome':'Tomaz Klotzel', 'bio':'- Fotógrafo, vive em São Paulo'}]
    },
    {'imagem':'/assets/image/ibio.jpg',
     'hora': '08:30 - 18:00',
     'instituto':'Hall do Instituto de Biologia',
     'titulo':'Floresta em pé, mulheres vivas: Escutas de (R) Existências',
     'participantes': [ {'nome':'Breve História do Pó é uma instalação a partir da investigação sobre a memória de locais de assassinatos por disputa de terra na região Sul e Sudeste do Pará. Ao realizar uma cartografia precisa dos locais dos assassinatos, um levantamento junto à testemunhas e parentes se fez necessário. Além do registro dessas narrativas, outros depoimentos encontrados ao longo da pesquisa foram coletados, como testemunhos para os inquéritos; e os discursos de um julgamento em que o mandante de um dos assassinatos foi considerado culpado e condenado. A justaposição destas falas junto às fotografias revela níveis da linguagem produzida em relação aos eventos, que os torna menos palpáveis a cada novo estágio do discurso. A pesquisa investiga o quanto a observação destas reminiscências reserva a possibilidade de enxergar o invisível dos mortos sempre presentes.', 'bio':''}],
     'moderadores': [{'nome':'Anastasia G. Itokazu', 'bio':'- UFABC'}, {'nome':'Giovanna Moller', 'bio':'- UFABC'}, {'nome':'Henrique P. Xavier', 'bio':'- USP'}, {'nome':'Juliana de Souza', 'bio':'- UNESP'}, {'nome':'Lea Tosold', 'bio':'- USP'}, {'nome':'Luciana Furlanetto Pereira', 'bio':'- UFSCar'}, {'nome':'Mariana Ruggieri', 'bio':'- Unicamp'}, {'nome':'Marilia M. Pisani', 'bio':'- UFABC'}, {'nome':'Silvana Ramos', 'bio':'- USP'}]
    }
  ];
 
  public dia19tarde1530:Array<object> = [
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '15:45 - 17:15',
     'instituto':'Auditório A do IGEO  - Instituto de Geociências',
     'titulo':'O problema do desenvolvimento e o ambiente no contexto dos governos progressistas ou de esquerda',
     'participantes': [{'nome':'Ricardo Calla', 'bio':'- Bolivia'},{'nome':'Maristella Svampa', 'bio':'- Argentina'},{'nome':'Emiliano Teran Matonvani', 'bio': '- Venezuela'},{'nome':'Diana Vela', 'bio': '- IAEN/Equador'}],
     'moderadores': [{'nome':'Salvador Schavelzon', 'bio':'- Unifesp'}]
    },
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '15:45 - 17:15',
     'instituto':'Auditório B do IGEO  - Instituto de Geociências',
     'titulo':'Ecofeminismos e feminismos decoloniais',
     'participantes': [{'nome':'Stefania Barca', 'bio':'- Centro de Estudos Sociais, Universidade de Coimbra, Portugal'},{'nome':'Elionice Sacramento', 'bio':'- Articulação das Mulheres Pescadoras e MPP'},{'nome':'Antonia Mello', 'bio': '- Movimento Xingu Vivo'},{'nome':'Mina Lorena Navarro Trujillo', 'bio': '- Benemérita Universidad Autónoma de Puebla, México'},{'nome':'Caroline Cotta De Mello Freitas', 'bio': '- Fundação Escola de Sociologia e Política'}],
     'moderadores': [{'nome':'Luisa de Pinho Valle', 'bio':'- Centro de Estudos Sociais, Universidade de Coimbra, Portugal'}]
    },
    {'imagem':'/assets/image/paf1.jpeg',
     'hora': '15:45 - 17:15',
     'instituto':'PAF 1: Auditório Instituto de Matemática',
     'titulo':'Ecologia e Economia na Era do Antropoceno',
     'participantes': [{'nome':'Clóvis Cavalcanti', 'bio':'- UFPE'},{'nome':'Daniel Andrade', 'bio':'- UFU'},{'nome':'Maria Cristina Fragkou', 'bio': '- Universidad de Chile'},{'nome':'Pablo Solón', 'bio': '- Fundación Solón'}],
     'moderadores': [{'nome':'Daniel Jeziorny ', 'bio':'- UFBA'}]
    },
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '15:45 - 17:15',
     'instituto':'Auditório Posgeo - Instituto de Geociências',
     'titulo':'Os pobres do paraíso: paradoxo conservação vs. desenvolvimento',
     'participantes': [{'nome':'Annelise Fernandez', 'bio':'- UFRRJ'},{'nome':'Henyo Trindade Barreto Filho', 'bio': '- UNB'},{'nome':'Alba Simone', 'bio': '- UNIRIO'}],
     'moderadores': [{'nome':'Rodrigo Penna Firme', 'bio':'- PUC/RJ'}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '15:45 - 17:15',
     'instituto':'Auditório externo do Instituto de Biologia',
     'titulo':'Conhecimento científico em movimento: práxis, ecologia e emancipação',
     'participantes': [{'nome':'Lídia Maria Pires Soares Cardel', 'bio':'- UFBA'},{'nome':'José Geraldo Aquino', 'bio': '- UFBA'},{'nome':'Maria Aparecida José de Oliveira', 'bio': '- UFBA'}],
     'moderadores': [{'nome':'', 'bio':''}]
    },
    {'imagem':'/assets/image/facom.jpg',
     'hora': '16:00 - 17:15',
     'instituto':'FACOM - Auditório',
     'titulo':'Ciclo de Cinema - Ecologias Decoloniais',
     'participantes': [{'nome':'Tekoha - O som da terra', 'bio': 'Dir. Rodrigo Arajeju e Valdelice Veron | Doc. experimental | 20min. | 2014 | Kaiowá'}, {'nome':'Ava Yvy Vera – A Terra do Povo do Raio', 'bio': 'Dir.: Genito Gomes, Valmir Gonçalves Cabreira, Jhonn Nara Gomes, Jhonatan Gomes, Edina Ximenez, Dulcídio Gomes, Sarah Brites, Joilson Brites | Doc. | 52 min. | 2016 | Kaiowá'}],
     'moderadores': [{'nome':'', 'bio':''}]
    },
    {'imagem':'/assets/image/ibio.jpg',
     'hora': '08:00 - 18:00',
     'instituto':'Hall do Instituto de Biologia',
     'titulo':'Breve História do Pó',
     'participantes': [ {'nome':'Breve História do Pó é uma instalação a partir da investigação sobre a memória de locais de assassinatos por disputa de terra na região Sul e Sudeste do Pará. Ao realizar uma cartografia precisa dos locais dos assassinatos, um levantamento junto à testemunhas e parentes se fez necessário. Além do registro dessas narrativas, outros depoimentos encontrados ao longo da pesquisa foram coletados, como testemunhos para os inquéritos; e os discursos de um julgamento em que o mandante de um dos assassinatos foi considerado culpado e condenado. A justaposição destas falas junto às fotografias revela níveis da linguagem produzida em relação aos eventos, que os torna menos palpáveis a cada novo estágio do discurso. A pesquisa investiga o quanto a observação destas reminiscências reserva a possibilidade de enxergar o invisível dos mortos sempre presentes.', 'bio':''}],
     'moderadores': [{'nome':'Tomaz Klotzel', 'bio':'- Fotógrafo, vive em São Paulo'}]
    },
    {'imagem':'/assets/image/ibio.jpg',
     'hora': '08:30 - 18:00',
     'instituto':'Hall do Instituto de Biologia',
     'titulo':'Floresta em pé, mulheres vivas: Escutas de (R) Existências',
     'participantes': [ {'nome':'Breve História do Pó é uma instalação a partir da investigação sobre a memória de locais de assassinatos por disputa de terra na região Sul e Sudeste do Pará. Ao realizar uma cartografia precisa dos locais dos assassinatos, um levantamento junto à testemunhas e parentes se fez necessário. Além do registro dessas narrativas, outros depoimentos encontrados ao longo da pesquisa foram coletados, como testemunhos para os inquéritos; e os discursos de um julgamento em que o mandante de um dos assassinatos foi considerado culpado e condenado. A justaposição destas falas junto às fotografias revela níveis da linguagem produzida em relação aos eventos, que os torna menos palpáveis a cada novo estágio do discurso. A pesquisa investiga o quanto a observação destas reminiscências reserva a possibilidade de enxergar o invisível dos mortos sempre presentes.', 'bio':''}],
     'moderadores': [{'nome':'Anastasia G. Itokazu', 'bio':'- UFABC'}, {'nome':'Giovanna Moller', 'bio':'- UFABC'}, {'nome':'Henrique P. Xavier', 'bio':'- USP'}, {'nome':'Juliana de Souza', 'bio':'- UNESP'}, {'nome':'Lea Tosold', 'bio':'- USP'}, {'nome':'Luciana Furlanetto Pereira', 'bio':'- UFSCar'}, {'nome':'Mariana Ruggieri', 'bio':'- Unicamp'}, {'nome':'Marilia M. Pisani', 'bio':'- UFABC'}, {'nome':'Silvana Ramos', 'bio':'- USP'}]
    }
  ];

  public dia19noite1830:Array<object> = [
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '18:30 - 20:00',
     'instituto':'Auditório externo do Instituto de Biologia',
     'titulo':'Cartografias das existências ',
     'participantes': [{'nome':'Catalina Toro Perez', 'bio':'- UNC, Colombia'},{'nome':'Alessandra Munduruku', 'bio':'- UFOPA, Chefa das Guerreiras do Médio Tapajós e Associação Indígena Pariri'},{'nome':'Guiomar Germani', 'bio': '- Geografar/UFBA'},{'nome':'Jeovah Meirelles', 'bio': '- UFC/Nova Cartografia Social'}],
     'moderadores': [{'nome':'Jussara Rêgo', 'bio':'- Marsol - UFBA/ Fiocruz'}]
    }
  ];

  public dia19noite1900:Array<object> = [
    {'imagem':'/assets/image/instituto-biologia.jpeg',
      'hora': '18:30 - 20:00',
      'instituto':'Auditório externo do Instituto de Biologia',
      'titulo':'Cartografias das existências ',
      'participantes': [{'nome':'Catalina Toro Perez', 'bio':'- UNC, Colombia'},{'nome':'Alessandra Munduruku', 'bio':'- UFOPA, Chefa das Guerreiras do Médio Tapajós e Associação Indígena Pariri'},{'nome':'Guiomar Germani', 'bio': '- Geografar/UFBA'},{'nome':'Jeovah Meirelles', 'bio': '- UFC/Nova Cartografia Social'}],
      'moderadores': [{'nome':'Jussara Rêgo', 'bio':'- Marsol - UFBA/ Fiocruz'}]
    },
    {'imagem':'/assets/image/vilavelha.jpeg',
     'hora': '19:00 - 22:00',
     'instituto':'Teatro Vila Velha, Passeio Público, Salvador',
     'titulo':'Kilomb Artes: as 7 Flechas das Ecologias Urbana, Indígena e Panafricana',
     'participantes': [{'nome':'Naka', 'bio':'- griô Mandinga Guiné-Bissau'},{'nome':'Mo Maiê', 'bio':'- griô baiana'},{'nome':' Ícaro Sá', 'bio': '- Tamborinário'},{'nome':'Denilson Baniwa', 'bio': '- artísta gráfico indígena'}],
     'moderadores': [{'nome':'Paul Regnier', 'bio':'- UFBA'}]
    }
  ];

  public dia19noite2000:Array<object> = [
    {'imagem':'/assets/image/vilavelha.jpeg',
     'hora': '19:00 - 22:00',
     'instituto':'Teatro Vila Velha, Passeio Público, Salvador',
     'titulo':'Kilomb Artes: as 7 Flechas das Ecologias Urbana, Indígena e Panafricana',
     'participantes': [{'nome':'Naka', 'bio':'- griô Mandinga Guiné-Bissau'},{'nome':'Mo Maiê', 'bio':'- griô baiana'},{'nome':' Ícaro Sá', 'bio': '- Tamborinário'},{'nome':'Denilson Baniwa', 'bio': '- artísta gráfico indígena'}],
     'moderadores': [{'nome':'Paul Regnier', 'bio':'- UFBA'}]
    }
  ];

  //Cronograma do terceiro dia
  public dia20manha0830:Array<object> = [
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: Auditório 1',
     'titulo':'Sessões de Trabalhos',
     'participantes': [{'nome':'O ecomarxismo e a disputa pela água', 'bio':'- Carolina Silva Ribeiro, UFBA; Gilca Garcia de Oliveira, UFBA'},{'nome':'Escalas da injustiça hídrica: estudo de caso em Ilhabela – litoral norte de São Paulo', 'bio':'- Natalia Dias Tadeu, USP'},{'nome':'Escasez hídrica y respuestas estatales; construyendo territorios hidrosociales en Chile', 'bio':'- Maria Christina Fragkou - Universidad de Chile'},{'nome':'A peleja dos índios Anacé contra o roubo da água para as empresas do Pecém na defesa do Lagamar do Cauípe', 'bio':'- João Alfredo Telles Mello, Centro Universitário 7 de Setembro'}],
     'moderadores': [{'nome':'Vanessa Empinotti', 'bio':''}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: Auditório 2',
     'titulo':'Sessões de Trabalhos',
     'participantes': [{'nome':'Which catastrophe does Mariana names? The Samarcos socio-environmental crime and Brazil in the capitalocene', 'bio':'- Giuseppe Orlandini, Università L Orientale di Napoli'},{'nome':'O curso de atualização profissional “05 de novembro”', 'bio':'- Raquel Mota Mascarenhas, UFOP; Flábio Boscaglia Pinto, UFES'},{'nome':'Indícios de violações de direitos das mulheres atingidas pelo rompimento da barragem de rejeitos de Fundão, da mineradora Samarco', 'bio':'- Michelle Cristina Farias, UFOP'},{'nome':'Os conflitos socioambientais e territoriais de resistência em Barcarena: atores, relações de poder e exclusão  socioespacial', 'bio':'- Eunapio Dutra Do Carmo, UFPA'}],
     'moderadores': [{'nome':'Hingryd Freitas', 'bio':''}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: sala 404',
     'titulo':'Sessões de Trabalhos',
     'participantes': [{'nome':'Experiência das arpilleras com as mulheres impactadas pela hidrelétrica do Estreito/MA', 'bio':'- Mariane Emanuelle da Silva Lucena, UFTO'},{'nome':'Injustiça ambiental e resistência no cotidiano de mulheres catadoras de materiais recicláveis', 'bio':'- Isabella De Carvalho Vallin, USP'}],
     'moderadores': [{'nome':'Caroline Cotta De Mello Freitas', 'bio':'- FESPSP'}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: sala 406',
     'titulo':'Sessões de Trabalhos',
     'participantes': [{'nome':'Por outra concepção de tratamento de rios em ambientes urbanos', 'bio':'- Maíra Menezes De Azevedo, Movimento Jaguaribe Vivo'},{'nome':'Por uma nova concepção de macrodrenagem', 'bio':'- Lavinia Bomsucesso, Movimento Jaguaribe Vivo'},{'nome':'Remunicipalização como opção de governança hídrica', 'bio':'- Arlindo M. Esteves Rodrigues, Pontificia Universidade Católica de São Paulo'},{'nome':'El papel de los Movimientos Sociales Latinoamericanos en defensa dela agua como bien social y derecho humano', 'bio':'- Mirta Ines Malvares Míguez, Universidad Nacional de Mar del Plata'}],
     'moderadores': [{'nome':'Catalina Toro Perez', 'bio':''}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: sala 407',
     'titulo':'Sessões de Trabalhos',
     'participantes': [{'nome':'Revisando figuras sexuais da natureza', 'bio':'- Alberto Beto Canseco, UFABC'},{'nome':'Ecofeminismo E Sustentabilidade Ambiental em Comunidades Indígenas e Ecovila', 'bio':'- Bárbara Flores'},{'nome':'Encontro e Travessias de Resistências: uma ecologia (trânsito)poética na perspectiva situada, feminista e antirracista', 'bio':'- Marília Mello Pisani, UFABC'}],
     'moderadores': [{'nome':'Marcelo de Troi', 'bio':''}]
    },
    {'imagem':'/assets/image/paf3.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 3: Auditório',
     'titulo':'Sessões de Trabalhos',
     'participantes': [{'nome':'Capitaloceno, ecologia política do Sul e as narrativas do desenvolvimento de uma modernização colonial', 'bio':'- Matheus Thomaz Da Silva'},{'nome':'Territórios em disputa: retomada e conservação entre os Tupinambá de Olivença (Ihéus-BA)', 'bio':'- Laila Sandroni (UFRJ)'},{'nome':'Expressões contemporâneas da colonialidade: Os arranjos políticos de desenvolvimento e a construção do discurso ambiental em municípios do Baixo Sul da Bahia', 'bio':'- Ramon Alves Malta, Universidade Federal Rural do Rio de Janeiro'},{'nome':'O encontro entre a teoria descolonial e a ecologia política feminista: promover diálogos a partir do sul global', 'bio':'- Rayssa Saidel Cortez, UFABC'}],
     'moderadores': [{'nome':'Jurema Machado', 'bio':''}]
    }
  ];

  public dia20manha0900:Array<object> = [
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório A do Instituto de Geociências',
     'titulo':'O direito de dizer não: extrativismo e lutas territoriais',
     'participantes': [{'nome':'Milton Sanchez', 'bio':'- Colectivo Guardianas y Guardianes de la Laguna'},{'nome':'Jorge Nahuel', 'bio':'- líder Mapuche, Argentina'},{'nome':'Antônia Mello', 'bio':'- Xingu Vivo'},{'nome':'Kum Tum Gamela', 'bio':'- lider Gamela, Maranhão'},{'nome':'Alessandra Korap Munduruku', 'bio':'- Chefa das Guerreiras do Médio Tapajós e estudante de direito na UFOPA'},{'nome':'Antenor Vaz', 'bio':'- indigenista'}],
     'moderadores': [{'nome':'Felipe Milanez', 'bio':'- UFBA'}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório externo do Instituto de Biologia',
     'titulo':'Reservas extrativistas: Institucionalizando a resistência',
     'participantes': [{'nome':'Representantes de Comunidades', 'bio':''},{'nome':'Lilian de Carvalho Lindoso', 'bio':'- Analista Ambiental ICMBio, APA Serra da Ibiapaba (CE)'},{'nome':'Cláudia Cunha', 'bio':'- Analista Ambiental ICMBio, Coordenação Regional (PB)'},{'nome':'Sergio Fernandes Freitas', 'bio':'- Analista Ambiental ICMBio, Resex Baia do Iguape (BA)'},{'nome':'Josiane Lima dos Santos', 'bio':'- Associação da Resex Extremo Norte do Tocantins  - Arent, CNS'},{'nome':'Célia Regina Nunes das Neves', 'bio':'- CONFREM - Nacional'},{'nome':'Silvia Pinto dos Santos', 'bio':'- REDE de mulheres Pescadoras'},{'nome':'Luana Pinto dos Santos', 'bio':'- REDE de mulheres Pescadoras'},{'nome':'Gabriel Pinto dos Santos', 'bio':'- Grupo de juventude da RESEX Canavieiras'},{'nome':'Gabriel Souza Ramos', 'bio':'- Grupo de juventude da RESEX Canavieiras'}],
     'moderadores': [{'nome':'Sergio Fernandes Freitas', 'bio':'- Analista Ambiental ICMBio, Resex Baia do Iguape (BA)'}]
    },
    {'imagem':'/assets/image/congrega.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Congregação da Faculdade de Arquitetura',
     'titulo':'Geografiando para la resistencia: metodologías críticas para la defensa del território',
     'participantes': [{'nome':'Melissa Moreano', 'bio':'- Colectivo de Geografía Crítica del Ecuador'}],
     'moderadores': [{'nome':'', 'bio':''}]
    },
    {'imagem':'/assets/image/arquitetura12.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Faculdade de Arquitetura de Urbanismo - Auditório 1',
     'titulo':'Movilizar los cuerpos-territorio: Performances reflexivas para la prática política',
     'participantes': [{'nome':'Lucrecia Raquel Greco', 'bio':'- Universidade de Buenos Aires'},{'nome':'Armindo Pinto', 'bio':''},{'nome':'Teatro do Oprimido de Salvador', 'bio':''}],
     'moderadores': [{'nome':'', 'bio':''}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: Auditório 1',
     'titulo':'Sessões de Trabalhos',
     'participantes': [{'nome':'O ecomarxismo e a disputa pela água', 'bio':'- Carolina Silva Ribeiro, UFBA; Gilca Garcia de Oliveira, UFBA'},{'nome':'Escalas da injustiça hídrica: estudo de caso em Ilhabela – litoral norte de São Paulo', 'bio':'- Natalia Dias Tadeu, USP'},{'nome':'Escasez hídrica y respuestas estatales; construyendo territorios hidrosociales en Chile', 'bio':'- Maria Christina Fragkou - Universidad de Chile'},{'nome':'A peleja dos índios Anacé contra o roubo da água para as empresas do Pecém na defesa do Lagamar do Cauípe', 'bio':'- João Alfredo Telles Mello, Centro Universitário 7 de Setembro'}],
     'moderadores': [{'nome':'Vanessa Empinotti', 'bio':''}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: Auditório 2',
     'titulo':'Sessões de Trabalhos',
     'participantes': [{'nome':'Which catastrophe does Mariana names? The Samarcos socio-environmental crime and Brazil in the capitalocene', 'bio':'- Giuseppe Orlandini, Università L Orientale di Napoli'},{'nome':'O curso de atualização profissional “05 de novembro”', 'bio':'- Raquel Mota Mascarenhas, UFOP; Flábio Boscaglia Pinto, UFES'},{'nome':'Indícios de violações de direitos das mulheres atingidas pelo rompimento da barragem de rejeitos de Fundão, da mineradora Samarco', 'bio':'- Michelle Cristina Farias, UFOP'},{'nome':'Os conflitos socioambientais e territoriais de resistência em Barcarena: atores, relações de poder e exclusão  socioespacial', 'bio':'- Eunapio Dutra Do Carmo, UFPA'}],
     'moderadores': [{'nome':'Hingryd Freitas', 'bio':''}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: sala 404',
     'titulo':'Sessões de Trabalhos',
     'participantes': [{'nome':'Experiência das arpilleras com as mulheres impactadas pela hidrelétrica do Estreito/MA', 'bio':'- Mariane Emanuelle da Silva Lucena, UFTO'},{'nome':'Injustiça ambiental e resistência no cotidiano de mulheres catadoras de materiais recicláveis', 'bio':'- Isabella De Carvalho Vallin, USP'}],
     'moderadores': [{'nome':'Caroline Cotta De Mello Freitas', 'bio':'- FESPSP'}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: sala 406',
     'titulo':'Sessões de Trabalhos',
     'participantes': [{'nome':'Por outra concepção de tratamento de rios em ambientes urbanos', 'bio':'- Maíra Menezes De Azevedo, Movimento Jaguaribe Vivo'},{'nome':'Por uma nova concepção de macrodrenagem', 'bio':'- Lavinia Bomsucesso, Movimento Jaguaribe Vivo'},{'nome':'Remunicipalização como opção de governança hídrica', 'bio':'- Arlindo M. Esteves Rodrigues, Pontificia Universidade Católica de São Paulo'},{'nome':'El papel de los Movimientos Sociales Latinoamericanos en defensa dela agua como bien social y derecho humano', 'bio':'- Mirta Ines Malvares Míguez, Universidad Nacional de Mar del Plata'}],
     'moderadores': [{'nome':'Catalina Toro Perez', 'bio':''}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: sala 407',
     'titulo':'Sessões de Trabalhos',
     'participantes': [{'nome':'Revisando figuras sexuais da natureza', 'bio':'- Alberto Beto Canseco, UFABC'},{'nome':'Ecofeminismo E Sustentabilidade Ambiental em Comunidades Indígenas e Ecovila', 'bio':'- Bárbara Flores'},{'nome':'Encontro e Travessias de Resistências: uma ecologia (trânsito)poética na perspectiva situada, feminista e antirracista', 'bio':'- Marília Mello Pisani, UFABC'}],
     'moderadores': [{'nome':'Marcelo de Troi', 'bio':''}]
    },
    {'imagem':'/assets/image/paf3.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 3: Auditório',
     'titulo':'Sessões de Trabalhos',
     'participantes': [{'nome':'Capitaloceno, ecologia política do Sul e as narrativas do desenvolvimento de uma modernização colonial', 'bio':'- Matheus Thomaz Da Silva'},{'nome':'Territórios em disputa: retomada e conservação entre os Tupinambá de Olivença (Ihéus-BA)', 'bio':'- Laila Sandroni (UFRJ)'},{'nome':'Expressões contemporâneas da colonialidade: Os arranjos políticos de desenvolvimento e a construção do discurso ambiental em municípios do Baixo Sul da Bahia', 'bio':'- Ramon Alves Malta, Universidade Federal Rural do Rio de Janeiro'},{'nome':'O encontro entre a teoria descolonial e a ecologia política feminista: promover diálogos a partir do sul global', 'bio':'- Rayssa Saidel Cortez, UFABC'}],
     'moderadores': [{'nome':'Jurema Machado', 'bio':''}]
    }
  ];

  public dia20manha1015:Array<object> = [
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório A do Instituto de Geociências',
     'titulo':'O direito de dizer não: extrativismo e lutas territoriais',
     'participantes': [{'nome':'Milton Sanchez', 'bio':'- Colectivo Guardianas y Guardianes de la Laguna'},{'nome':'Jorge Nahuel', 'bio':'- líder Mapuche, Argentina'},{'nome':'Antônia Mello', 'bio':'- Xingu Vivo'},{'nome':'Kum Tum Gamela', 'bio':'- lider Gamela, Maranhão'},{'nome':'Alessandra Korap Munduruku', 'bio':'- Chefa das Guerreiras do Médio Tapajós e estudante de direito na UFOPA'},{'nome':'Antenor Vaz', 'bio':'- indigenista'}],
     'moderadores': [{'nome':'Felipe Milanez', 'bio':'- UFBA'}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório externo do Instituto de Biologia',
     'titulo':'Reservas extrativistas: Institucionalizando a resistência',
     'participantes': [{'nome':'Representantes de Comunidades', 'bio':''},{'nome':'Lilian de Carvalho Lindoso', 'bio':'- Analista Ambiental ICMBio, APA Serra da Ibiapaba (CE)'},{'nome':'Cláudia Cunha', 'bio':'- Analista Ambiental ICMBio, Coordenação Regional (PB)'},{'nome':'Sergio Fernandes Freitas', 'bio':'- Analista Ambiental ICMBio, Resex Baia do Iguape (BA)'},{'nome':'Josiane Lima dos Santos', 'bio':'- Associação da Resex Extremo Norte do Tocantins  - Arent, CNS'},{'nome':'Célia Regina Nunes das Neves', 'bio':'- CONFREM - Nacional'},{'nome':'Silvia Pinto dos Santos', 'bio':'- REDE de mulheres Pescadoras'},{'nome':'Luana Pinto dos Santos', 'bio':'- REDE de mulheres Pescadoras'},{'nome':'Gabriel Pinto dos Santos', 'bio':'- Grupo de juventude da RESEX Canavieiras'},{'nome':'Gabriel Souza Ramos', 'bio':'- Grupo de juventude da RESEX Canavieiras'}],
     'moderadores': [{'nome':'Sergio Fernandes Freitas', 'bio':'- Analista Ambiental ICMBio, Resex Baia do Iguape (BA)'}]
    },
    {'imagem':'/assets/image/congrega.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Congregação da Faculdade de Arquitetura',
     'titulo':'Geografiando para la resistencia: metodologías críticas para la defensa del território',
     'participantes': [{'nome':'Melissa Moreano', 'bio':'- Colectivo de Geografía Crítica del Ecuador'}],
     'moderadores': [{'nome':'', 'bio':''}]
    },
    {'imagem':'/assets/image/arquitetura12.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Faculdade de Arquitetura de Urbanismo - Auditório 1',
     'titulo':'Movilizar los cuerpos-territorio: Performances reflexivas para la prática política',
     'participantes': [{'nome':'Lucrecia Raquel Greco', 'bio':'- Universidade de Buenos Aires'},{'nome':'Armindo Pinto', 'bio':''},{'nome':'Teatro do Oprimido de Salvador', 'bio':''}],
     'moderadores': [{'nome':'', 'bio':''}]
    }
  ];

  public dia20manha1045:Array<object> = [
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '10:45 - 12:30',
     'instituto':'PAF 5: Auditório 1',
     'titulo':'Sessão de Trabalhos',
     'participantes': [{'nome':'Expansão urbana e questões ambientais em Redenção, Ceará', 'bio':'- Lailson Ferreira da Silva, Universidade da Integração Internacional da Lusofonia Afro-Brasileira'},{'nome':'Forum Permanente de Itapuã e a defesa do Parque Metropolitano do Abaeté', 'bio':'- Pedro Rodolpho Jungers Abib - UFB'},{'nome':'Fronteiras de água x fronteiras de poder: o caso dos rios urbanos no Brasil', 'bio':'- Renata Cristina Ferreira, UNESP'}],
     'moderadores': [{'nome':'Heliana Faria Mettig Rocha', 'bio':'- UFBA'}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '10:45 - 12:30',
     'instituto':'PAF 5: Auditório 2',
     'titulo':'Sessão de Trabalhos',
     'participantes': [{'nome':'Persistencia del colonialismo y neoextractivismo en el acceso a la justicia ambiental en Chile: el caso Quintero- Puchuncav', 'bio':'- María Paz Aedo Zuñiga - Universidad Academia de Humanismo Cristiano; Alejandra Donoso Cáceres - (ONG Defensoria Ambiental, Chile)'},{'nome':'Novas fronteiras do extrativismo fóssil: fracking no Brasil', 'bio':'- Bianca Dieile - UFR'},{'nome':'Defendiendo la vida en los territorios del caos: ecología política en el colapso de la Venezuela petrolera (2013-2019)', 'bio':'- Emiliano Teran Mantovani - Universidad Autónoma de Barcelona'}],
     'moderadores': [{'nome':'Luiz Enrique Souza', 'bio':''}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '10:45 - 12:30',
     'instituto':'PAF 5: sala 406',
     'titulo':'Sessão de Trabalhos',
     'participantes': [{'nome':'Territórios tradicionais valem ouro? A expansão do extrativismo do ouro à luz da ecologia política – estudos de casos dos projetos de mineração em Paracatu (MG) e Volta  Grande do Xingu (PA)', 'bio':'- Érika Castilho Brasil, Universidade Estácio de Sá; Larissa Vieira - UFF'},{'nome':'Paisajes inciertos. Ecología política del turismo en la costa de Oaxaca, Mexico', 'bio':'- Ignacio Rubio Carriquiriborde - Universidad Nacional Autónoma de Mexico'},{'nome':'El turismo como actividad neoextractivista: El caso de la isla de Holbox en APFF de Yum Balam, Quintana Roo, México', 'bio':'- Lidia Ivonne Blásquez Martínez, Universidad Autónoma Metropolitana'}],
     'moderadores': [{'nome':'Iñigo Arrazola', 'bio':''}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '10:45 - 12:30',
     'instituto':'PAF 5: sala 404',
     'titulo':'Sessão de Trabalhos',
     'participantes': [{'nome':'Por que a participação popular em matéria socioambiental é indispensável ao neoliberalismo? perspectivas a partir do desastre de Mariana/Rio Doce', 'bio':'- Henrique Ribeiro Afonso Domingos - UFOP'},{'nome':'Redes Epistêmicas em Educação do Campo e Ecologia Política da Luta por Hegemonia Territorial em Comunidades Camponesas e Ribeirinhas na Amazônia', 'bio':'- Evandro Medeiros (UNIFESSPA / Doutorando em Educação pela UFPB)'},{'nome':'Vivências subalternas latinoamericanas e as estratégias de re-existência para descolonização do poder', 'bio':'- Raíssa Félix, UFSB'},{'nome':'Subaltern ecologies in the “Indias de por acá”. Grassroots struggles and commoning practices in the urban environment of Naples, Southern Italy', 'bio':'- Roberto Sciarelli, Universidade de Coimbra'}],
     'moderadores': [{'nome':'Guiomar Inez Germani', 'bio':''}]
    },
    {'imagem':'/assets/image/paf3.jpeg',
     'hora': '10:45 - 12:30',
     'instituto':'PAF 3: Auditório',
     'titulo':'Sessão de Trabalhos',
     'participantes': [{'nome':'Refazendo a fartura: Diálogos sobre agricultura e natureza com mestres camponeses', 'bio':'- Mariana Cruz De Almeida Lima, Secretaria de Educação do Distrito Federal'},{'nome':'Cultivating Subsistence, Planting Resistance: The Subaltern Sites of Food, grobiodiversity, and Survival in Plantation Economies', 'bio':'- Judith Carney (UC)'},{'nome':'Complexidade na paisagem Afro-brasileira: Expansão emergente das dendezais tradicionais na Costa do Dendê', 'bio':'- Case Watkins (JMU)'},{'nome':'Espacialidad y cosmovision en la habitabilidad de Morelos: un estudio de la relacion entre la conservacion del  maiz y el entorno habitable', 'bio':'- Fernando Oliva Borja (UAEM) e Rafel Monroy Ortiz (UAEM)'}],
     'moderadores': [{'nome':'Stefania Barca', 'bio':'- CES, UC'}]
    },
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '10:45 - 12:30',
     'instituto':'PAF 5: sala 407',
     'titulo':'Sessão de Trabalhos',
     'participantes': [{'nome':'Disputa de hegemonia e integração regional na IIRSA pan-Amazônica', 'bio':'- Luis Araújo Acosta (IFBA)'},{'nome':'Conflito Socioambiental e resistênica: Indígenas e pequenas centrais hidreléctricas no Mato Grosso', 'bio':'- Maryanne Rizzo Galvão (UFPI)'},{'nome':'Narrativas da agência pública sobre os agentes e os conflitos nos projetos hidrelétricos do Tapajós', 'bio':'- Pedro Henryque Paes Loureiro De Bragança, UFPA'}],
     'moderadores': [{'nome':'Franklin Carvalho', 'bio':'- UFRB'}]
    },
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório A do Instituto de Geociências',
     'titulo':'O direito de dizer não: extrativismo e lutas territoriais',
     'participantes': [{'nome':'Milton Sanchez', 'bio':'- Colectivo Guardianas y Guardianes de la Laguna'},{'nome':'Jorge Nahuel', 'bio':'- líder Mapuche, Argentina'},{'nome':'Antônia Mello', 'bio':'- Xingu Vivo'},{'nome':'Kum Tum Gamela', 'bio':'- lider Gamela, Maranhão'},{'nome':'Alessandra Korap Munduruku', 'bio':'- Chefa das Guerreiras do Médio Tapajós e estudante de direito na UFOPA'},{'nome':'Antenor Vaz', 'bio':'- indigenista'}],
     'moderadores': [{'nome':'Felipe Milanez', 'bio':'- UFBA'}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório externo do Instituto de Biologia',
     'titulo':'Reservas extrativistas: Institucionalizando a resistência',
     'participantes': [{'nome':'Representantes de Comunidades', 'bio':''},{'nome':'Lilian de Carvalho Lindoso', 'bio':'- Analista Ambiental ICMBio, APA Serra da Ibiapaba (CE)'},{'nome':'Cláudia Cunha', 'bio':'- Analista Ambiental ICMBio, Coordenação Regional (PB)'},{'nome':'Sergio Fernandes Freitas', 'bio':'- Analista Ambiental ICMBio, Resex Baia do Iguape (BA)'},{'nome':'Josiane Lima dos Santos', 'bio':'- Associação da Resex Extremo Norte do Tocantins  - Arent, CNS'},{'nome':'Célia Regina Nunes das Neves', 'bio':'- CONFREM - Nacional'},{'nome':'Silvia Pinto dos Santos', 'bio':'- REDE de mulheres Pescadoras'},{'nome':'Luana Pinto dos Santos', 'bio':'- REDE de mulheres Pescadoras'},{'nome':'Gabriel Pinto dos Santos', 'bio':'- Grupo de juventude da RESEX Canavieiras'},{'nome':'Gabriel Souza Ramos', 'bio':'- Grupo de juventude da RESEX Canavieiras'}],
     'moderadores': [{'nome':'Sergio Fernandes Freitas', 'bio':'- Analista Ambiental ICMBio, Resex Baia do Iguape (BA)'}]
    },
    {'imagem':'/assets/image/congrega.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Congregação da Faculdade de Arquitetura',
     'titulo':'Geografiando para la resistencia: metodologías críticas para la defensa del território',
     'participantes': [{'nome':'Melissa Moreano', 'bio':'- Colectivo de Geografía Crítica del Ecuador'}],
     'moderadores': [{'nome':'', 'bio':''}]
    },
    {'imagem':'/assets/image/arquitetura12.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Faculdade de Arquitetura de Urbanismo - Auditório 1',
     'titulo':'Movilizar los cuerpos-territorio: Performances reflexivas para la prática política',
     'participantes': [{'nome':'Lucrecia Raquel Greco', 'bio':'- Universidade de Buenos Aires'},{'nome':'Armindo Pinto', 'bio':''},{'nome':'Teatro do Oprimido de Salvador', 'bio':''}],
     'moderadores': [{'nome':'', 'bio':''}]
    },
    {'imagem':'/assets/image/facom.jpg',
     'hora': '11:00 - 12:30',
     'instituto':'FACOM - Auditório',
     'titulo':'Ciclo de Cinema - Ecologias Decoloniais',
     'participantes': [{'nome':'Terra: Amanhã Será Tarde', 'bio': 'Dir.: Chico Carneiro | Doc. |  76min. | 1990'}],
     'moderadores': [{'nome':'', 'bio':''}]
    }
  ];
  
  public dia20tarde1400:Array<object> = [
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '14:00 - 15:30',
     'instituto':'Auditório externo do Instituto de Biologia',
     'titulo':'Ecologia política da violência e da defesa da Terra',
     'participantes': [{'nome':'Claudelice Santos', 'bio':'- UNIFESSPA e Fundação Zé Cláudio e Maria'},{'nome':'Antonia Mello', 'bio':'- Xingu Vivo'},{'nome':'Airton Pereira', 'bio':'- UEPA'},{'nome':'Philippe Le Billon', 'bio':'- Universidade de British Columbia'},{'nome':'Patrick Alley', 'bio':'- Global Witness'}],
     'moderadores': [{'nome':'Felipe Milanez', 'bio':'- UFBA'}, {'nome':'Tarcisio Feitosa ', 'bio':'- UFBA'}]
    },
    {'imagem':'/assets/image/igeo.jpeg',
      'hora': '14:00 - 15:30',
      'instituto':'Auditório A - Instituto de Geociências',
      'titulo':'Autonomias na América Latina: panorama ecopolítio',
      'participantes': [{'nome':'Salvador Schavelzon', 'bio':'- UNIFESP, Argentina'},{'nome':'Spensy Pimentel', 'bio':'- UFSB'},{'nome':'Mariana Mora', 'bio':'- Mexico'},{'nome':'Erneneck Mejia', 'bio':'- UFBA, México'}],
      'moderadores': [{'nome':'', 'bio':''}]
    },
    {'imagem':'/assets/image/igeo.jpeg',
      'hora': '14:00 - 15:30',
      'instituto':'Auditório B do Instituto de Geociências',
      'titulo':'Ecologia política e as cidades: Conflitos ambientais urbanos',
      'participantes': [{'nome':'Hortênsia Gomes Pinho', 'bio':'- Promotora de Justiça'},{'nome':'Rita Ferreira', 'bio':'- MTSB'}],
      'moderadores': [{'nome':'Marcelo Araujo', 'bio':''}]
    }
  ];
  
  public dia20tarde1545:Array<object> = [
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '15:45 - 17:00',
     'instituto':'Auditório externo do Instituto de Biologia',
     'titulo':'Assembleia Final do Congresso',
     'participantes': [{'nome':'Comunicados oficiais', 'bio':''},{'nome':'Formação da Rede Brasileira de Ecologia Política', 'bio':''},{'nome':'Anúncio do próximo congresso e encaminhamentos emancipatórios', 'bio':''}],
     'moderadores': [{'nome':'', 'bio':'- '}]
    },
    {'imagem':'/assets/image/facom.jpg',
     'hora': '16:00 - 17:15',
     'instituto':'FACOM - Auditório',
     'titulo':'Ciclo de Cinema - Ecologias Decoloniais',
     'participantes': [{'nome':'Os quilombos do vale do Iguape: uma história de vida, de terra, de direitos', 'bio': 'Dir. Lula Oliveira | Doc. | 17 min.'}, {'nome':'No Rio e No Mar', 'bio': 'Dir. Jan Willem Den Bok e Floor Koomen | Doc. | 57 min'}],
     'moderadores': [{'nome':'', 'bio':''}]
    }
  ];

  public dia20tarde1800:Array<object> = [
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '18:00 - 20:30',
     'instituto':'Auditório externo do Instituto de Biologia',
     'titulo':'Horizontes emancipatórios',
     'participantes': [{'nome':'Stefania Barca', 'bio':'- CES/Universidade de Coimbra'},{'nome':'Ivonne Yanez', 'bio':'- Acción Ecológica, Equador'},{'nome':'Ialorixá Bernadete Souza Ferreira Santos', 'bio':'- camponesa, ialorixá, educadora popular, graduada em Letras pela UNEB e especiasta em Educação no Campo e Agroecologia pela USP, militante do movimento negro, dirigente do PSOL'}],
     'moderadores': [{'nome':'', 'bio':'- '}]
    }
  ];
  
  public dia20noite2100:Array<object> = [
    {'imagem':'/assets/image/rv.jpeg',
     'hora': '21:00 - 00:00',
     'instituto':'Bairro do Rio Vermelho',
     'titulo':'Encerramento: Sarau e noite cultural no Mercadão do Rio Vermelho',
     'participantes': [{'nome':'', 'bio':''}],
     'moderadores': [{'nome':'', 'bio':''}]
    }
  ];
  
  public encerramento:Array<object> = [
    {'imagem':'/assets/image/reitoria.jpg',
     'hora': '--:-- - --:--',
     'instituto':'',
     'titulo':'Obrigado por ter participado do congresso e utilizado o app!',
     'participantes': [{'nome':'Em breve este app será atualizado, e você vai poder ver o que aconteceu no congresso!', 'bio': ''}],
     'moderadores': [{'nome':'', 'bio': ''}]
    }
  ];

}
