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
    this.getinfo();
  } 
  
  atribuirGrade(dia:any, hora:any, minuto:any){
    if(dia < 22) {
      this.agora = this.dia22manha800;
    } else if(dia == 22) {
      if((hora < 14) || ((hora == 14) && (minuto <= 30))){
        this.agora = this.dia22manha800;
      } else if(((hora == 14) && (minuto > 30)) || ((hora == 15) && (minuto < 45)))  {
        this.agora = this.dia22manha1500;
      } else if((hora == 15) && (minuto >= 45) && (minuto < 55)) {
        this.agora = this.dia22manha1600;
      } else if(((hora == 15) && (minuto >= 55)) || (hora == 16) || ((hora == 17) && (minuto < 15))) {
        this.agora = this.dia22manha1600;
      } else if(((hora == 17) && (minuto >= 15)) || (hora == 18) || (hora == 19) || (hora == 20) || (hora == 21)){
        this.agora = this.dia22manha1730;
      } else if ((hora == 22) && (minuto > 0)){
        this.agora = this.fim;
      }
    } else if(dia == 23) {
      if(hora < 12) {
        this.agora = this.dia23manha800;
      } else if((hora == 12) && (minuto < 30)) {
        this.agora = this.dia23manha1200;
      } else if(((hora == 12) && (minuto >= 30)) || (hora == 13) || (hora == 14) || ((hora == 15) && (minuto < 55))) {
        this.agora = this.dia23tarde1400;
      } else if(((hora == 15) && (minuto >= 55)) || ((hora == 16) && (minuto < 55))) {
        this.agora = this.dia23tarde1600;
      } else if(((hora == 16) && (minuto >= 55)) || (hora == 17)) {
        this.agora = this.dia23tarde1700;
      } else if((hora == 18) || (hora == 19) || (hora == 20) || (hora == 21) || (hora == 22)){
        this.agora = this.dia23tarde2000;
      } else if(hora == 23) {
        this.agora = this.fim;
      }
    } else if(dia == 24) {
      if(hora < 9){
        this.agora = this.dia24manha800;
      } else if(hora == 9)  {
        this.agora = this.dia24manha900;
      } else if((hora == 10) || ((hora == 11) && (minuto < 15))) {
        this.agora = this.dia24manha1000;
      } else if(((hora == 11) && (minuto >= 15)) || ((hora == 12) && (minuto < 30))) {
        this.agora = this.dia24manha1130;
      } else if(((hora == 12) && (minuto >= 30)) || (hora == 13) || (hora == 14)) {
        this.agora = this.dia24tarde1400;
      } else if(hora == 15) {
        this.agora = this.dia24tarde1500;
      } else if(((hora == 16) && (minuto < 50))) {
        this.agora = this.dia24tarde1600;
      } else if(((hora == 16) && (minuto >= 50)) || ((hora == 17) && (minuto < 50))) {
        this.agora = this.dia24tarde1700;
      } else if(((hora == 17) && (minuto >= 50)) || (hora == 18)){
        this.agora = this.dia24tarde1800;
      } else if((hora == 19) || (hora == 20) || (hora == 21) || (hora == 22)) {
        this.agora = this.dia24tarde2000;
      } else if(hora == 23) {
        this.agora = this.fim;
      }
    } else if(dia == 25) {
      if((hora < 8) || ((hora == 8) && (minuto < 50))){
        this.agora = this.dia25hora800;
      } else if(((hora == 8) && (minuto > 50)) || (hora == 9) || (hora == 10) || (hora == 11) || (hora == 12) || ((hora == 13) && (minuto <= 30)))  {
        this.agora = this.dia25hora900;
      } else if(((hora == 13) && (minuto > 30)) || (hora == 14) || (hora == 15)) {
        this.agora = this.dia25hora1400;
      } else if((hora == 16) || ((hora == 17) && (minuto < 20))) {
        this.agora = this.dia25hora1620;
      } else if(((hora == 17) && (minuto > 20)) || (hora == 18) || (hora == 19) || (hora == 20) || (hora == 21) || (hora == 22)) {
        this.agora = this.dia25tarde2000;
      }
    } else if(dia == 26) {
      if((hora < 8) || ((hora == 8) && (minuto < 50))){
        this.agora = this.dia26hora800;
      } else if(((hora == 8) && (minuto >= 50)) || (hora == 9))  {
        this.agora = this.dia26hora900;
      } else if((hora == 10) || ((hora == 11) && (minuto < 50))) {
        this.agora = this.dia26hora1010;
      } else if(((hora == 11) && (minuto >= 50)) || ((hora == 12) && (minuto < 30))) {
        this.agora = this.dia26hora1200;
      } else if(((hora == 12) && (minuto >= 30)) || (hora == 13) || (hora == 14) || ((hora == 15) && (minuto < 40))  ) {
        this.agora = this.dia26hora1400;
      } else if(((hora == 15) && (minuto >= 40)) || (hora == 16) || (hora == 17)) {
        this.agora = this.dia26hora1600;
      } else if ((hora == 18) || (hora == 19) || (hora == 20) || (hora == 21) || (hora == 22) || (hora == 23)) {
        this.agora = this.encerramento;
      }
    } else if(dia > 26) {
      this.agora = this.encerramento;
    }
  }

  getinfo(){
    let date =  new Date(); 
    this.dia = 24;
    this.hora = 8;

    // this.dia = date.getDate();
    // this.hora = date.getHours();
    this.minuto = date.getMinutes();

    this.atribuirGrade(this.dia, this.hora, this.minuto);
  }

  ionViewWillEnter() {
    this.getinfo();
  }

  // Cronograma do primeiro dia 22
  public dia22manha800:Array<object> = [
    {'imagem':'/assets/image/prodema.jpeg',
     'hora': '08:00 - 16:00',
     'instituto':'Auditório do PRODEMA/UFPB',
     'titulo':'Credenciamento',
     'titulolista': 'Observação:',
     'participantes': [{'nome':'Após esse horário, o credenciamento deverá ser realizado no dia 23 pela manhã.','bio':'' }],
     'titulomoderador':'Recepção:',
     'moderadores': [{'nome':'Organização', 'bio':''}]
    }    
  ];

  public dia22manha1500:Array<object> = [
    {'imagem':'/assets/image/prodema.jpeg',
     'hora': '08:00 - 16:00',
     'instituto':'Auditório do PRODEMA/UFPB',
     'titulo':'Credenciamento',
     'titulolista': 'Observação:',
     'participantes': [{'nome':'Após esse horário, o credenciamento deverá ser realizado no dia 23 pela manhã.','bio':'' }],
     'titulomoderador':'Recepção:',
     'moderadores': [{'nome':'Organização', 'bio':''}]
    }, 
    {'imagem':'/assets/image/prodema.jpeg',
     'hora': '15:00 - 17:00',
     'instituto':'Sala de Aula do PRODEMA',
     'titulo':'Vivência Xamânica: Jornada Animal no Poder',
     'titulolista': 'Observação:',
     'participantes': [{'nome':'Atividade gratuita', 'bio': ''}, {'nome':'Inscrição: decimosnee@gmail.com', 'bio':''}],
     'titulomoderador':'Ministrante:',
     'moderadores': [{'nome':'Eraldo Medeiros Costa Neto', 'bio':''}]
    }
  ];

  public dia22manha1600:Array<object> = [
    {'imagem':'/assets/image/prodema.jpeg',
     'hora': '15:00 - 17:00',
     'instituto':'Sala de Aula do PRODEMA',
     'titulo':'Vivência Xamânica: Jornada Animal no Poder',
     'titulolista': 'Observação:',
     'participantes': [{'nome':'Atividade gratuita', 'bio': ''}, {'nome':'Inscrição: decimosnee@gmail.com', 'bio':''}],
     'titulomoderador':'Ministrante:',
     'moderadores': [{'nome':'Eraldo Medeiros Costa Neto', 'bio':''}]
    }
  ];

  public dia22manha1730:Array<object> = [
    {'imagem':'/assets/image/radigundesfeitosa.jpeg',
     'hora': '17:30 - 22:00',
     'instituto':'Sala de Concertos Radigundes Feitosa (UFPB)',
     'titulo':'Cerimônia de abertura',
     'titulolista': 'Cronograma:',
     'participantes': [{'nome':'Composição da Mesa', 'bio': ''}, {'nome':'Palestra | Etnobiologia: Visões do passado, olhar para o futuro ', 'bio':'- Prof. Dr. Ulysses Paulino de Albuquerque – UFPE'}, {'nome':'Orquestra de Violões da Paraíba', 'bio': ''}, {'nome':'Apresentação Musical: Rubacão Jazz', 'bio': ''}],
     'titulomoderador':'Apresentação:',
     'moderadores': [{'nome':'Organização', 'bio':''}]
    },
    {'imagem':'/assets/image/radigundesfeitosa.jpeg',
     'hora': '17:30 - 22:00',
     'instituto':'Sala de Concertos Radigundes Feitosa (UFPB)',
     'titulo':'Rubacão Jazz',
     'titulolista': 'Repertório:',
     'participantes': [{'nome':'1 – FLY ME TO THE MOON', 'bio': ' - Abertura'}, {'nome':'2 - THREE FOR THE SHOW', 'bio':' - Harry James; Arr: Adail Fernandes; Editoração: Clailton França'}, {'nome':'3 – CANTALOUPE ISLAND', 'bio': ' - Herbie Hancock; Arr: Adail Fernandes; Editoração: Clailton França'}, {'nome':'4 - COTOVIA', 'bio': ' - Marcelo Vilor'}, {'nome':'5 – Intervalo', 'bio': ' - Adil Silva'}, {'nome':'6 – JACKSOLÂNDIA', 'bio': ' - Vários autores'}, {'nome':'7 – GILBERT NO FREVO (BIG BAND)', 'bio': ' - Clailton Frnça'}, {'nome':'8 – RELEMBRANDO O NORTE (FREVO)', 'bio': ' - Severino Araújo; Arr: DUDA'}],
     'titulomoderador':'Ficha Técnica:',
     'moderadores': [{'nome':'Alexandre Magno Ferreira e Silva', 'bio':' - Maestro'},{'nome':'Isaac Santos', 'bio':' - Sax Alto/Flauta Transversal'},{'nome':'Adailton Simplício', 'bio':' - Sax Alto'},{'nome':'Gilbert Monteiro', 'bio':' - Sax Tenor'},{'nome':'Junior Farias', 'bio':' - Sax Tenor'},{'nome':'Moises Rodrigues', 'bio':' - Sax Barítono'},{'nome':'Clailton França', 'bio':' - Trombone'},{'nome':'Robson Franklin', 'bio':' - Trombone'},{'nome':'Jadson Oliveira', 'bio':' - Trombone'},{'nome':'Flávio José', 'bio':' - Trombone'},{'nome':'Erivaldo Silva', 'bio':' - Trombone Baixo'},{'nome':'Eudes Nascimento', 'bio':' - Trompetes'},{'nome':'Adriano Alves', 'bio':' - Trompetes'},{'nome':'Emanuel Mattos', 'bio':' - Trompetes'},{'nome':'José Vasconcelos Junior', 'bio':' - Trompetes'},{'nome':'Geilson Nascimento de Souza', 'bio':' - Trompetes'},{'nome':'Joelson Montes', 'bio':' - Guitarra'},{'nome':'Ana Luiza Miranda', 'bio':' - Piano'},{'nome':'David Martins (Fera Gorda)', 'bio':' - Contra Baixo'},{'nome':'Bennett Oliveira', 'bio':' - Bateria'},{'nome':'Deilde Santos', 'bio':' - Percussão'},{'nome':'Geimisson Bronzeado', 'bio':' - Percussão'}]
    }
  ];

  public fim:Array<object> = [
    {'imagem':'/assets/image/prodema.jpeg',
     'hora': '--:-- - --:--',
     'instituto':'Universidade Federal da Paraíba – UFPB',
     'titulo':'Até amanhã!',
     'titulolista': 'Informe:',
     'participantes': [{'nome':'Meia-noite aparecerão as atividades de amanhã', 'bio': ''}],
     'titulomoderador':'Atenciosamente:',
     'moderadores': [{'nome':'Organização', 'bio': ''}]
    }
  ];

  // Cronograma do segundo dia 23
  public dia23manha800:Array<object> = [
    {'imagem':'/assets/image/ccen.jpeg',
     'hora': '08:00 - 12:00',
     'instituto':'CCEN - Centro de Ciências Exatas e da Natureza',
     'titulo':'Oficina | Vasos de Pet: horta de plantas medicinais',
     'titulolista': 'Ministrante:',
     'participantes': [{'nome':'Esp. Neide Martins','bio':'- Bióloga, Especialista em Gestão Ambiental – PMJP' }],
     'titulomoderador':'Inscrição:',
     'moderadores': [{'nome':'decimosnee@gmail.com', 'bio':''}]
    },
    {'imagem':'/assets/image/ccen.jpeg',
     'hora': '08:00 - 12:00',
     'instituto':'CCEN - Centro de Ciências Exatas e da Natureza',
     'titulo':'Mini curso | Abordagem da ancestralidade como método na etnobiologia',
     'titulolista': 'Ministrante:',
     'participantes': [{'nome':'Dra. Rebeca Mascarenhas Fonseca Barreto','bio':' - UNIVASF' }],
     'titulomoderador':'Monitor:',
     'moderadores': [{'nome':'Wysllayne', 'bio':''}]
    },
    {'imagem':'/assets/image/ccen.jpeg',
     'hora': '08:00 - 12:00',
     'instituto':'CCEN - Centro de Ciências Exatas e da Natureza',
     'titulo':'Mini curso | Introdução a etnobiologia evolutiva',
     'titulolista': 'Ministrantes:',
     'participantes': [{'nome':'Dr. André Luiz Borba do Nascimento','bio':' - UFPE'}, {'nome':'Doutorando Joelson Brito Mouras','bio':' - UFPE'}],
     'titulomoderador':'Monitoras:',
     'moderadores': [{'nome':'Jéssica', 'bio':''},{'nome':'Maria Vanessa', 'bio':''}]
    },
    {'imagem':'/assets/image/ccen.jpeg',
     'hora': '08:00 - 12:00',
     'instituto':'CCEN - Centro de Ciências Exatas e da Natureza',
     'titulo':'Mini curso | Métodos etnobiológicos e de modelagem aplicados às mudanças climáticas',
     'titulolista': 'Ministrantes:',
     'participantes': [{'nome':'Dr. José Ribamar de Farias Lima','bio':' - UFPB'}, {'nome':'Doutoranda Thamires Kelly Nunes Carvalho','bio':' - UFPB'}],
     'titulomoderador':'Monitor:',
     'moderadores': [{'nome':'Lucas Gomes', 'bio':''}]
    },
    {'imagem':'/assets/image/ccen.jpeg',
     'hora': '08:00 - 12:00',
     'instituto':'CCEN - Centro de Ciências Exatas e da Natureza',
     'titulo':'Mini curso | Plantas medicinais e evolução humana',
     'titulolista': 'Ministrante:',
     'participantes': [{'nome':'Dr. Washington Soares Ferreira Júnior','bio':' - UPE'}],
     'titulomoderador':'Monitoras:',
     'moderadores': [{'nome':'Sara', 'bio':''},{'nome':'Juliane', 'bio':''}]
    },
    {'imagem':'/assets/image/ccen.jpeg',
     'hora': '08:00 - 12:00',
     'instituto':'CCEN - Centro de Ciências Exatas e da Natureza',
     'titulo':'Mini curso | Introdução a Etnobotânica',
     'titulolista': 'Ministrantes:',
     'participantes': [{'nome':'Dr. Carlos Antônio Belarmino Alves','bio':' - UEPB'}, {'nome':'Doutorando Ezequiel da Costa Ferreira','bio':' - UFPB'}],
     'titulomoderador':'Monitoras:',
     'moderadores': [{'nome':'Maria Beatriz', 'bio':''},{'nome':'Regina', 'bio':''}]
    },
    {'imagem':'/assets/image/ccen.jpeg',
     'hora': '08:00 - 12:00',
     'instituto':'CCEN - Centro de Ciências Exatas e da Natureza',
     'titulo':'Mini curso | Análise de redes para compreensão de sistemas etnobotânicos',
     'titulolista': 'Ministrantes:',
     'participantes': [{'nome':'Dra. Elena Castiñeira Latorre','bio':' - Universidad de la República Uruguay'}, {'nome':'Dr. Andrés Canavero Rodríguez','bio':' - Universidad de la República Uruguay'}],
     'titulomoderador':'Monitoras:',
     'moderadores': [{'nome':'Lidiane', 'bio':''},{'nome':'Vitória', 'bio':''}]
    },
    {'imagem':'/assets/image/ccen.jpeg',
     'hora': '08:00 - 12:00',
     'instituto':'CCEN - Centro de Ciências Exatas e da Natureza',
     'titulo':'Mini curso | Etnozoologia nas sombras: Estratégias de coleta, implicações e potencialidades dos mercados negros da fauna',
     'titulolista': 'Ministrantes:',
     'participantes': [{'nome':'Dr. Wedson de Medeiros Silva Souto','bio':' - UFPI'}, {'nome':'Dr. Felipe Silva Ferreira','bio':' - UNIVASF'}],
     'titulomoderador':'Monitores:',
     'moderadores': [{'nome':'Mateus', 'bio':''},{'nome':'Érika', 'bio':''}]
    },
    {'imagem':'/assets/image/ccen.jpeg',
     'hora': '08:00 - 12:00',
     'instituto':'CCEN - Centro de Ciências Exatas e da Natureza',
     'titulo':'Mini curso | Dos diários de campo para as publicações: forma acessória de registro de dados e de incremento da produção',
     'titulolista': 'Ministrante:',
     'participantes': [{'nome':'Dra. Edna Maria Ferreira Chaves','bio':' - IFPI'}],
     'titulomoderador':'Monitoras:',
     'moderadores': [{'nome':'Rosangela', 'bio':''},{'nome':'Iara', 'bio':''}]
    },
    {'imagem':'/assets/image/ccen.jpeg',
     'hora': '08:00 - 12:00',
     'instituto':'CCEN - Centro de Ciências Exatas e da Natureza',
     'titulo':'Mini curso | Etnoecologia com pescadores artesanais',
     'titulolista': 'Ministrantes:',
     'participantes': [{'nome':'Dra. Glória Cristina Cornélio do Nascimento','bio':' - IFPB'},{'nome':'Dr. Eduardo Beltrão de Lucena Córdula','bio':' - Ong MAR'}],
     'titulomoderador':'Monitores:',
     'moderadores': [{'nome':'Flavio', 'bio':''},{'nome':'Maria Julia', 'bio':''}]
    },
    {'imagem':'/assets/image/ccen.jpeg',
     'hora': '08:00 - 12:00',
     'instituto':'CCEN - Centro de Ciências Exatas e da Natureza',
     'titulo':'Mini curso | Introdução à Etnozoologia',
     'titulolista': 'Ministrantes:',
     'participantes': [{'nome':'Dra. Kallyne Machado Bonifácio','bio':' - UFPB'},{'nome':'Doutoranda Suellen da Silva Santos','bio':' - UFPB'}],
     'titulomoderador':'Monitores:',
     'moderadores': [{'nome':'Willian', 'bio':''},{'nome':'José Wilker', 'bio':''}]
    },
    {'imagem':'/assets/image/ccen.jpeg',
     'hora': '08:00 - 12:00',
     'instituto':'CCEN - Centro de Ciências Exatas e da Natureza',
     'titulo':'Mini curso | Introdução a Etnofarmacologia',
     'titulolista': 'Ministrante:',
     'participantes': [{'nome':'Dr. Thiago Antônio de Sousa Araújo','bio':' - UNINASSAU'}],
     'titulomoderador':'Monitora:',
     'moderadores': [{'nome':'Thuany', 'bio':''}]
    },
    {'imagem':'/assets/image/ccen.jpeg',
     'hora': '08:00 - 12:00',
     'instituto':'CCEN - Centro de Ciências Exatas e da Natureza',
     'titulo':'Mini curso | Etnobiologia e o Ensino de Ciências e Biologia',
     'titulolista': 'Ministrante:',
     'participantes': [{'nome':'Dra. Márcia Freire Pinto','bio':''}],
     'titulomoderador':'Monitores:',
     'moderadores': [{'nome':'Edson', 'bio':''},{'nome':'Mayara', 'bio':''}]
    },
    {'imagem':'/assets/image/ccen.jpeg',
     'hora': '08:00 - 12:00',
     'instituto':'CCEN - Centro de Ciências Exatas e da Natureza',
     'titulo':'Mini curso | Bases metodológicas e éticas na pesquisa etnobiológica',
     'titulolista': 'Ministrante:',
     'participantes': [{'nome':'Dr. Henrique Costa Hermenegildo da Silva','bio':' - UFAL'}],
     'titulomoderador':'Monitores:',
     'moderadores': [{'nome':'Barbara', 'bio':''},{'nome':'Iranilda', 'bio':''}]
    },
    {'imagem':'/assets/image/ccen.jpeg',
     'hora': '08:00 - 12:00',
     'instituto':'CCEN - Centro de Ciências Exatas e da Natureza',
     'titulo':'Mini curso | Etnoecologia política e da ação ',
     'titulolista': 'Ministrantes:',
     'participantes': [{'nome':'Dr. Flávio Bezerra Barros','bio':' - UFPA'},{'nome':'Dr. Dídac Santos Fita','bio':' - UFPA'}],
     'titulomoderador':'Monitores:',
     'moderadores': [{'nome':'Andreia', 'bio':''},{'nome':'Tiago', 'bio':''}]
    },
    {'imagem':'/assets/image/ccen.jpeg',
     'hora': '08:00 - 12:00',
     'instituto':'CCEN - Centro de Ciências Exatas e da Natureza',
     'titulo':'Mini curso | Saúde ambiental; Etnobiologia e Etnoecologia em sistemas de produção rural',
     'titulolista': 'Ministrante:',
     'participantes': [{'nome':'Dr. José Rodrigues de Almeida Neto','bio':' - UFPI'}],
     'titulomoderador':'Monitores:',
     'moderadores': [{'nome':'Rafael', 'bio':''},{'nome':'Rozeane', 'bio':''}]
    },
    {'imagem':'/assets/image/reitoria.jpeg',
     'hora': '08:20 - 12:30',
     'instituto':'Auditório da Reitoria da Universidade Federal da Paraíba, Campus I',
     'titulo':'Roda da Tradição Oral',
     'titulolista': 'Mestres tradicionais:',
     'participantes': [{'nome':'Cacique Natan','bio':' - Tribo Indígena Potiguara'},{'nome':'João Macedo (João Caatinga)','bio':' - agricultura e pecuária'},{'nome':'Joseane Izidro da Silva','bio':' - Associação de Artesãos das Sereias da Penhas'},{'nome':'Maria dos Anjos Mendes Gomes (Mestre D’oci)','bio':' - Escola Viva Olho do Tempo'}],
     'titulomoderador':'Mediadora:',
     'moderadores': [{'nome':'Dr. Eraldo Medeiros Costa Neto', 'bio':''}, {'nome':'Dr. José da Silva Mourão', 'bio':''}]
    }
  ];

  public dia23manha1200:Array<object> = [
    {'imagem':'/assets/image/reitoria.jpeg',
     'hora': '08:20 - 12:30',
     'instituto':'Auditório da Reitoria da Universidade Federal da Paraíba, Campus I',
     'titulo':'Roda da Tradição Oral',
     'titulolista': 'Mestres tradicionais:',
     'participantes': [{'nome':'Cacique Natan','bio':' - Tribo Indígena Potiguara'},{'nome':'João Macedo (João Caatinga)','bio':' - agricultura e pecuária'},{'nome':'Joseane Izidro da Silva','bio':' - Associação de Artesãos das Sereias da Penhas'},{'nome':'Maria dos Anjos Mendes Gomes (Mestre D’oci)','bio':' - Escola Viva Olho do Tempo'}],
     'titulomoderador':'Mediadora:',
     'moderadores': [{'nome':'Dra. Márcia Freire Pinto', 'bio':' - UECE / FAFIDAM'}]
    }
  ];

  public dia23tarde1400:Array<object> = [
    {'imagem':'/assets/image/reitoria.jpeg',
     'hora': '14:00 - 16:00',
     'instituto':'Auditório da Reitoria da Universidade Federal da Paraíba, Campus I',
     'titulo':'Diálogos com Populações Tradicionais e Indígenas',
     'titulolista': 'Participantes da mesa:',
     'participantes': [{'nome':'Ana Nascimento','bio':' - Quilombo Ipiranga'},{'nome':'Cacique Ednaldo/ Tabajara','bio':' - Indígena'},{'nome':'Luzia Bezerra da Silva','bio':' - Comunidade Serra Velha Itatuba, PB – rede Sementes ASA/PB'},{'nome':'Daniel Virgílio Basílio Crispim da Silva','bio':' - Associação de Pescadores de Tambaú – Colônia Z3 e Associação Náutica Extremo Oriental/ PB'}],
     'titulomoderador':'Mediador:',
     'moderadores': [{'nome':'Dr. Flávio Bezerra Barros', 'bio':' - UFPA – Presidente da SBEE'}]
    }
  ];

  public dia23tarde1600:Array<object> = [
    {'imagem':'/assets/image/ead.jpeg',
     'hora': '16:15 - 17:10',
     'instituto':'Auditório da EaD (Ensino a Distância)',
     'titulo':'Palestra | Dimensões espirituais da natureza: valores ancestrais e novas perspectivas para a etnobiologia e etnoecologia',
     'titulolista': 'Ministrante:',
     'participantes': [{'nome':'Érika Fernandes-Pinto','bio':' - ICMBio – Brasília'}],
     'titulomoderador':'',
     'moderadores': []
    },
    {'imagem':'/assets/image/reitoria.jpeg',
     'hora': '16:15 - 17:10',
     'instituto':'Auditório da Reitoria da Universidade Federal da Paraíba, Campus I',
     'titulo':'Palestra | Processo de desertificação do semiárido e suas consequências para as pop. tradicionais',
     'titulolista': 'Ministrante:',
     'participantes': [{'nome':'Dr. Bartolomeu Israel de Souza','bio':' - UFPB'}],
     'titulomoderador':'',
     'moderadores': []
    }
  ];
  
  public dia23tarde1700:Array<object> = [
    {'imagem':'/assets/image/prodema.jpeg',
     'hora': '17:00 - 18:00',
     'instituto':'PRODEMA',
     'titulo':'Apresentação de trabalhos',
     'titulolista': 'Apresentação Oral:',
     'participantes': [{'nome':'PRODEMA','bio':''}],
     'titulomoderador':'Banner:',
     'moderadores': [{'nome':'Hall da Reitoria', 'bio':''}]
    }
  ];

  public dia23tarde2000:Array<object> = [
    {'imagem':'/assets/image/rock.PNG',
     'hora': '20:00 - 23:00',
     'instituto':'Boteco Pub - orla da praia de Cabo Branco',
     'titulo':'Festival do Rock',
     'titulolista': 'Banda:',
     'participantes': [{'nome':'Banda Viral','bio':' - @viral_banda'}],
     'titulomoderador':'Local:',
     'moderadores': [{'nome':'Boteco Pub - orla da praia de Cabo Branco', 'bio':' - (83)98876-3078'}]
    }
  ];


  //Cronograma do terceiro dia 24
  public dia24manha800:Array<object> = [
    {'imagem':'/assets/image/ead.jpeg',
     'hora': '08:00 - 09:00',
     'instituto':'Auditório da EaD (Ensino a Distância)',
     'titulo':'Palestra | Avanços da pesquisa etnobiológica no Nordeste do Brasil',
     'titulolista': 'Ministrante:',
     'participantes': [{'nome':'Dra. Roseli Farias Melo de Barros','bio':' - UFPI'}],
     'titulomoderador':'',
     'moderadores': []
    },
    {'imagem':'/assets/image/reitoria.jpeg',
     'hora': '08:00 - 09:00',
     'instituto':'Auditório da Reitoria da Universidade Federal da Paraíba, Campus I',
     'titulo':'Palestra | Avanços da Etnozoologia no Nordeste do Brasil',
     'titulolista': 'Ministrante:',
     'participantes': [{'nome':'Dr. Rômulo Romeu da Nóbrega Alves','bio':' - UEPB'}],
     'titulomoderador':'',
     'moderadores': []
    },
    {'imagem':'/assets/image/posedufisica.jpeg',
     'hora': '08:00 - 09:00',
     'instituto':'Auditório da Educação Física, Campus I',
     'titulo':'Palestra | Banco de Extratos vegetais do SAB: O INSA em busca do potencial da caatinga',
     'titulolista': 'Ministrantes:',
     'participantes': [{'nome':'Daniel Rodrigo Cavalcante de Araujo','bio':' - INSA – Instituto Nacional do Semiárido'}, {'nome':'Juliana Gomes Freitas','bio':' - INSA – Instituto Nacional do Semiárido'}],
     'titulomoderador':'',
     'moderadores': []
    }
  ];

  public dia24manha900:Array<object> = [
    {'imagem':'/assets/image/ead.jpeg',
     'hora': '09:10 - 10:10',
     'instituto':'Auditório da EaD (Ensino a Distância)',
     'titulo':'Palestra | Bioxamanismo e as práticas etnoecológicas',
     'titulolista': 'Ministrante:',
     'participantes': [{'nome':'Dr. Eraldo Medeiros Costa Neto','bio':' - UEFS'}],
     'titulomoderador':'',
     'moderadores': []
    },
    {'imagem':'/assets/image/reitoria.jpeg',
     'hora': '09:10 - 10:10',
     'instituto':'Auditório da Reitoria da Universidade Federal da Paraíba, Campus I',
     'titulo':'Palestra | Recursos genéticos e conservação no Brasil',
     'titulolista': 'Ministrante:',
     'participantes': [{'nome':'Dra. Patrícia Goulart Bustamante','bio':' - Embrapa - Centro Nacional de Pesquisa de Recursos Genéticos e Biotecnologia – Brasília'}],
     'titulomoderador':'',
     'moderadores': []
    },
    {'imagem':'/assets/image/posedufisica.jpeg',
     'hora': '09:10 - 10:10',
     'instituto':'Auditório da Educação Física, Campus I',
     'titulo':'Palestra | Plantas alimentícias do Brasil do século XVI e XVII',
     'titulolista': 'Ministrante:',
     'participantes': [{'nome':'Dr. Bernardo Tomchinsky','bio':' - Unifesspa – Universidade Federal do Sul e Sudeste do Pará'}],
     'titulomoderador':'',
     'moderadores': []
    }
  ];

  public dia24manha1000:Array<object> = [
    {'imagem':'/assets/image/posedufisica.jpeg',
     'hora': '10:30 - 11:30',
     'instituto':'Auditório da Educação Física, Campus I',
     'titulo':'Palestra | Mulheres agricultoras guardiãs das galinhas de capoeira',
     'titulolista': 'Ministrante:',
     'participantes': [{'nome':'Marilene Nascimento Melo','bio':' - INSA – Instituto Nacional do Semiárido'}],
     'titulomoderador':'',
     'moderadores': []
    },
    {'imagem':'/assets/image/posedufisica.jpeg',
     'hora': '10:30 - 11:30',
     'instituto':'Auditório da Educação Física, Campus I',
     'titulo':'Palestra | Inovações socioambientais do Semiárido',
     'titulolista': 'Ministrante:',
     'participantes': [{'nome':'João Macêdo Moreira','bio':' - INSA – Instituto Nacional do Semiárido'}],
     'titulomoderador':'',
     'moderadores': []
    },
    {'imagem':'/assets/image/ead.jpeg',
     'hora': '10:30 - 12:30',
     'instituto':'Auditório da EaD (Ensino a Distância)',
     'titulo':'Mesa Redonda | Etnobiologia, ensino, aprendizagem e formação de professores de biologia',
     'titulolista': 'Ministrantes:',
     'participantes': [{'nome':'Dra. Geilsa Costa Santos Baptista','bio':' - UEFS'}, {'nome':'Dr. Francisco José Pegado Abílio','bio':' - UFPB'},{'nome':'Dra. Marcia Freire Pinto','bio':' - UECE'}],
     'titulomoderador':'Mediadora:',
     'moderadores': [{'nome':'Msc. Anita Leocádia Pereira dos Santos', 'bio':' - UFPB'}]
    },
    {'imagem':'/assets/image/reitoria.jpeg',
     'hora': '10:30 - 12:30',
     'instituto':'Auditório da Reitoria da Universidade Federal da Paraíba, Campus I',
     'titulo':'Mesa Redonda | Estudos etnobiológicos em Unidades de Conservação',
     'titulolista': 'Ministrantes:',
     'participantes': [{'nome':'Dr. Alexandre Schiavetti','bio':' - UESC'}, {'nome':'Dra. Kallyne Machado Bonifácio','bio':' - UFPB'},{'nome':'Dr. George Emmanuel Cavalcanti de Miranda','bio':' - UFPB'}],
     'titulomoderador':'Mediador:',
     'moderadores': [{'nome':'Dr. George Emmanuel Cavalcanti de Miranda', 'bio':' - UFPB'}]
    }
  ];

  public dia24manha1130:Array<object> = [
    {'imagem':'/assets/image/ead.jpeg',
     'hora': '10:30 - 12:30',
     'instituto':'Auditório da EaD (Ensino a Distância)',
     'titulo':'Mesa Redonda | Etnobiologia, ensino, aprendizagem e formação de professores de biologia',
     'titulolista': 'Ministrantes:',
     'participantes': [{'nome':'Dra. Geilsa Costa Santos Baptista','bio':' - UEFS'}, {'nome':'Dr. Francisco José Pegado Abílio','bio':' - UFPB'},{'nome':'Dra. Marcia Freire Pinto','bio':' - UECE'}],
     'titulomoderador':'Mediadora:',
     'moderadores': [{'nome':'Msc. Anita Leocádia Pereira dos Santos', 'bio':' - UFPB'}]
    },
    {'imagem':'/assets/image/reitoria.jpeg',
     'hora': '10:30 - 12:30',
     'instituto':'Auditório da Reitoria da Universidade Federal da Paraíba, Campus I',
     'titulo':'Mesa Redonda | Estudos etnobiológicos em Unidades de Conservação',
     'titulolista': 'Ministrantes:',
     'participantes': [{'nome':'Dr. Alexandre Schiavetti','bio':' - UESC'}, {'nome':'Dra. Kallyne Machado Bonifácio','bio':' - UFPB'},{'nome':'Dr. George Emmanuel Cavalcanti de Miranda','bio':' - UFPB'}],
     'titulomoderador':'Mediador:',
     'moderadores': [{'nome':'Dr. George Emmanuel Cavalcanti de Miranda', 'bio':' - UFPB'}]
    }
  ];

  public dia24tarde1400:Array<object> = [
    {'imagem':'/assets/image/ead.jpeg',
     'hora': '14:00 - 15:00',
     'instituto':'Auditório da EaD (Ensino a Distância)',
     'titulo':'Palestra | Como grupos humanos constroem relações complexas com as plantas?',
     'titulolista': 'Ministrante:',
     'participantes': [{'nome':'Washington Soares Ferreira Junior','bio':' - UPE – PE'}],
     'titulomoderador':'',
     'moderadores': []
    },
    {'imagem':'/assets/image/reitoria.jpeg',
     'hora': '14:00 - 16:00',
     'instituto':'Auditório da Reitoria da Universidade Federal da Paraíba, Campus I',
     'titulo':'Mesa Redonda | Desafios e perspectivas de ser etnobiologa em diferentes países da América Latina',
     'titulolista': 'Ministrantes:',
     'participantes': [{'nome':'Dra. Taline Cristina da Silva','bio':' - UNEAL - Brasil'}, {'nome':'Dra. Ana Haydeé Ladio','bio':' - Universidad Nacional del Comahue – Argentina'},{'nome':'Dra. Elena Castiñeira Latorre ','bio':' - UFPB'}],
     'titulomoderador':'Mediadora:',
     'moderadores': [{'nome':'Dra. Kallyne Bonifácio', 'bio':' - UFPB'}]
    }
  ];

  public dia24tarde1500:Array<object> = [
    {'imagem':'/assets/image/reitoria.jpeg',
     'hora': '14:00 - 16:00',
     'instituto':'Auditório da Reitoria da Universidade Federal da Paraíba, Campus I',
     'titulo':'Mesa Redonda | Desafios e perspectivas de ser etnobiologa em diferentes países da América Latina',
     'titulolista': 'Ministrantes:',
     'participantes': [{'nome':'Dra. Taline Cristina da Silva','bio':' - UNEAL - Brasil'}, {'nome':'Dra. Ana Haydeé Ladio','bio':' - Universidad Nacional del Comahue – Argentina'},{'nome':'Dra. Elena Castiñeira Latorre ','bio':' - UFPB'}],
     'titulomoderador':'Mediadora:',
     'moderadores': [{'nome':'Dra. Kallyne Bonifácio', 'bio':' - UFPB'}]
    }
  ];

  public dia24tarde1600:Array<object> = [
    {'imagem':'/assets/image/ead.jpeg',
     'hora': '16:20 - 17:20',
     'instituto':'Auditório da EaD (Ensino a Distância)',
     'titulo':'Palestra | Os desafios e oportunidades para formar e manter ativos os Etnobiólogos e Etnoecólogos no Brasil',
     'titulolista': 'Ministrante:',
     'participantes': [{'nome':'Dra. Carolina Joana Silva','bio':' - UNEMAT – MT'}],
     'titulomoderador':'',
     'moderadores': []
    },
    {'imagem':'/assets/image/reitoria.jpeg',
     'hora': '16:20 - 17:20',
     'instituto':'Auditório da Reitoria da Universidade Federal da Paraíba, Campus I',
     'titulo':'Palestra | Quintais Agroflorestais do Nordeste: uma abordagem etnobotânica',
     'titulolista': 'Ministrante:',
     'participantes': [{'nome':'Dra. Alissandra Trajano Nunes','bio':' - UFP - Garanhuns'}],
     'titulomoderador':'',
     'moderadores': []
    },
    {'imagem':'/assets/image/posedufisica.jpeg',
     'hora': '16:20 - 17:20',
     'instituto':'Auditório da Educação Física, Campus I',
     'titulo':'Palestra | Análise de redes para compreensão de sistemas etnobiológicos',
     'titulolista': 'Ministrante:',
     'participantes': [{'nome':'Andrés Canavero Rodríguez','bio':' - Universidad de la República Uruguay'}],
     'titulomoderador':'',
     'moderadores': []
    }
  ];

  public dia24tarde1700:Array<object> = [
    {'imagem':'/assets/image/prodema.jpeg',
     'hora': '17:00 - 18:00',
     'instituto':'PRODEMA',
     'titulo':'Apresentação de trabalhos',
     'titulolista': 'Apresentação oral:',
     'participantes': [{'nome':'PRODEMA','bio':''}],
     'titulomoderador':'Banners:',
     'moderadores': [{'nome':'Hall da Reitoria', 'bio':''}]
    },
    {'imagem':'/assets/image/prediodce.jpeg',
     'hora': '17:00 - 19:00',
     'instituto':'Auditório do DCE',
     'titulo':'Reunião da Diretoria da Sociedade Brasileira de Etnobiologia e Etnoecologia',
     'titulolista': '',
     'participantes': [],
     'titulomoderador':'',
     'moderadores': []
    }
  ];

  public dia24tarde1800:Array<object> = [
    {'imagem':'/assets/image/prediodce.jpeg',
     'hora': '17:00 - 19:00',
     'instituto':'Auditório do DCE',
     'titulo':'Reunião da Diretoria da Sociedade Brasileira de Etnobiologia e Etnoecologia',
     'titulolista': '',
     'participantes': [],
     'titulomoderador':'',
     'moderadores': []
    }
  ];

  public dia24tarde2000:Array<object> = [
    {'imagem':'/assets/image/boteco.png',
     'hora': '20:00 - 23:00',
     'instituto':'Boteco Pub - orla da praia de Cabo Branco',
     'titulo':'Samba de Origem',
     'titulolista': 'Banda:',
     'participantes': [{'nome':'Projeto Samba na Praça','bio':''}],
     'titulomoderador':'Local:',
     'moderadores': [{'nome':'Boteco Pub - orla da praia de Cabo Branco', 'bio':' - (83)98876-3078'}]
    }
  ];


  //Cronograma do quarto dia 25
  public dia25hora800:Array<object> = [
    {'imagem':'/assets/image/multimidia.jpeg',
     'hora': '08:00 - 09:00',
     'instituto':'Auditório Multimídia – CT (Centro de Tecnologia)',
     'titulo':'O semiárido: Tem futuro?',
     'titulolista': 'Ministrante:',
     'participantes': [{'nome':'Dr. Daniel Duarte Pereira','bio':' - UFPB'}],
     'titulomoderador':'',
     'moderadores': []
    },
    {'imagem':'/assets/image/administrativo.jpeg',
     'hora': '08:00 - 09:00',
     'instituto':'Auditório do Bloco Administrativo – CT (Centro de Tecnologia)',
     'titulo':'Populações indígenas e políticas públicas relacionadas com o uso da água',
     'titulolista': 'Ministrante:',
     'participantes': [{'nome':'Dr. Marcos José Salgado Vital','bio':' - UFRR'}],
     'titulomoderador':'',
     'moderadores': []
    }
  ];

  public dia25hora900:Array<object> = [
    {'imagem':'/assets/image/multimidia.jpeg',
     'hora': '09:00 - 13:30',
     'instituto':'Centro de Vivência - CT (Centro de Tecnologia)',
     'titulo':'Festival de Culinária Tradicional e Indígena',
     'titulolista': 'Comissão de júri:',
     'participantes': [{'nome':'Dra. Flávia de Oliveira Paulino','bio':' - UFPB'},{'nome':'Dra. Ana Haydeé Ladio','bio':' - Universidad Nacional del Comahue – Argentina'},{'nome':'Dr. Valdely Ferreira Knupp','bio':' - IFAM – CMZL'}],
     'titulomoderador':'',
     'moderadores': []
    }
  ];

  public dia25hora1400:Array<object> = [
    {'imagem':'/assets/image/administrativo.jpeg',
     'hora': '14:00 - 16:30',
     'instituto':'Auditório do Bloco Administrativo – CT (Centro de Tecnologia)',
     'titulo':'Mesa Redonda | Manejo e domesticação de recursos genéticos na América Latina',
     'titulolista': 'Ministrantes:',
     'participantes': [{'nome':'Dra. Camilla Marques de Lucena','bio':' - IESP'},{'nome':'Dr. Mailson Monteiro do Rego','bio':' - UFPB'},{'nome':'Dr. Ernani Machado de Freitas Lins Neto','bio':' - UNIVASF'},{'nome':'Dra. Elizanilda Ramalho do Rego','bio':' - UFPB'}],
     'titulomoderador':'Mediador:',
     'moderadores': [{'nome':'Dr. Mailson Monteiro do Rego','bio':' - UFPB'}]
    },
    {'imagem':'/assets/image/multimidia.jpeg',
     'hora': '14:00 - 16:00',
     'instituto':'Auditório Multimídia – CT (Centro de Tecnologia)',
     'titulo':'20 e poucos anos de Etnoecologia: “Tamo aí mandando brasa!”',
     'titulolista': 'Ministrantes:',
     'participantes': [{'nome':'Dr. José da Silva Mourão','bio':' - UEPB'},{'nome':'Dr. Francisco José Bezerra Souto','bio':' - UEFS'},{'nome':'Dr. Ângelo Giuseppe Chaves Alves','bio':' - UFRPE'},{'nome':'Dr. Rafael Ricardo Vasconcelos da Silva','bio':' - UFAL'}],
     'titulomoderador':'Mediador:',
     'moderadores': [{'nome':'Dr. Ângelo Giuseppe Chaves Alves','bio':' - UFRPE'}]
    }
  ];

  public dia25hora1620:Array<object> = [
    {'imagem':'/assets/image/multimidia.jpeg',
     'hora': '16:20 - 17:20',
     'instituto':'Auditório Multimídia – CT (Centro de Tecnologia)',
     'titulo':'Quando a ciência atinge milhões: um panorama da divulgação científica',
     'titulolista': 'Ministrante:',
     'participantes': [{'nome':'Dr. Hugo Fernandes-Ferreira','bio':' - UECE'}],
     'titulomoderador':'',
     'moderadores': []
    },
    {'imagem':'/assets/image/administrativo.jpeg',
     'hora': '16:20 - 17:20',
     'instituto':'Auditório Multimídia – CT (Centro de Tecnologia)',
     'titulo':'Agroecologia cultivando saberes e valorizando a agrobiodiversidade',
     'titulolista': 'Ministrante:',
     'participantes': [{'nome':'Dr. Fillipe Silveira Marini','bio':' - UFPB'}],
     'titulomoderador':'',
     'moderadores': []
    }
  ];

  public dia25tarde2000:Array<object> = [
    {'imagem':'/assets/image/boteco.png',
     'hora': '20:00 - 23:00',
     'instituto':'Boteco Pub - orla da praia de Cabo Branco',
     'titulo':'Forró pé de serra',
     'titulolista': 'Banda:',
     'participantes': [{'nome':'3 do Norte','bio':''}],
     'titulomoderador':'Local:',
     'moderadores': [{'nome':'Boteco Pub - orla da praia de Cabo Branco', 'bio':' - (83)98876-3078'}]
    }
  ];
  
  //Cronograma do quarto dia 26
  public dia26hora800:Array<object> = [
    {'imagem':'/assets/image/multimidia.jpeg',
     'hora': '08:00 - 09:00',
     'instituto':'Auditório Multimídia – CT (Centro de Tecnologia)',
     'titulo':'Palestra | Caça, comida e cultura na Amazônia',
     'titulolista': 'Ministrante:',
     'participantes': [{'nome':'Dr. Flávio Bezerra Barros','bio':' - UFPA'}],
     'titulomoderador':'',
     'moderadores': []
    },
    {'imagem':'/assets/image/administrativo.jpeg',
     'hora': '08:00 - 09:00',
     'instituto':'Auditório do Bloco Administrativo – CT (Centro de Tecnologia)',
     'titulo':'Palestra | Importância e cuidados no uso de plantas medicinais',
     'titulolista': 'Ministrante:',
     'participantes': [{'nome':'Dra. Valdeline Atanazio da Silva','bio':' - UFRPE'}],
     'titulomoderador':'',
     'moderadores': []
    }
  ];

  public dia26hora900:Array<object> = [
    {'imagem':'/assets/image/ccen.jpeg',
     'hora': '09:00 - 12:00',
     'instituto':'Auditório do CCEN (CCEN - Centro de Ciências Exatas e da Natureza)',
     'titulo':'Discussão sobre a criação do Mestrado Profissional ASSOCIAÇÃO NACIONAL SUSTENTABILIDADE: COMUNIDADES TRADICIONAIS E POVOS INDÍGENAS',
     'titulolista': '',
     'participantes': [],
     'titulomoderador':'',
     'moderadores': []
    },
    {'imagem':'/assets/image/multimidia.jpeg',
     'hora': '09:10 - 10:10',
     'instituto':'Auditório Multimídia – CT (Centro de Tecnologia)',
     'titulo':'Palestra | Etnobiologia e educação escolar: Um olhar intercultural para o ensino de ciência e biologia',
     'titulolista': 'Ministrante:',
     'participantes': [{'nome':'Dr. Marcelo Alves Ramos','bio':' - UPE'}],
     'titulomoderador':'',
     'moderadores': []
    },
    {'imagem':'/assets/image/administrativo.jpeg',
     'hora': '09:10 - 10:10',
     'instituto':'Auditório do Bloco Administrativo – CT (Centro de Tecnologia)',
     'titulo':'Palestra | Etnobotânica aplicada a conservação no bioma Pampa: “Quebradas del Norte, Uruguay”',
     'titulolista': 'Ministrante:',
     'participantes': [{'nome':'Dra. Elena Castiñeira Latorre','bio':' - Universidad de la República Uruguay'}],
     'titulomoderador':'',
     'moderadores': []
    }
  ];
  
  public dia26hora1010:Array<object> = [
    {'imagem':'/assets/image/ccen.jpeg',
     'hora': '09:00 - 12:00',
     'instituto':'Auditório do CCEN (Centro de Ciências Exatas e da Natureza)',
     'titulo':'Discussão sobre a criação do Mestrado Profissional ASSOCIAÇÃO NACIONAL SUSTENTABILIDADE: COMUNIDADES TRADICIONAIS E POVOS INDÍGENAS',
     'titulolista': '',
     'participantes': [],
     'titulomoderador':'',
     'moderadores': []
    },
    {'imagem':'/assets/image/administrativo.jpeg',
     'hora': '10:10 - 12:00',
     'instituto':'Auditório do Bloco Administrativo – CT (Centro de Tecnologia)',
     'titulo':'Plantas alimentícias na América Latina: Estudos de caso',
     'titulolista': 'Ministrantes:',
     'participantes': [{'nome':'Dra. Ana Haydeé Ladio','bio':' - Universidad Nacional del Comahue – Argentina'},{'nome':'Dr. Ernane Nogueira Nunes','bio':' - LECA/UFPB'},{'nome':'Dr. Valdely Ferreira Knupp','bio':' - IFAM – CMZL'}],
     'titulomoderador':'Mediador:',
     'moderadores': [{'nome':'Dr. Ernane Nogueira Nunes','bio':' - LECA/UFPB'}]
    },
    {'imagem':'/assets/image/multimidia.jpeg',
     'hora': '10:10 - 12:00',
     'instituto':'Auditório Multimídia – CT (Centro de Tecnologia)',
     'titulo':'Mesa Redonda | O jovem etnobiólogo: Desafios e perspectivas',
     'titulolista': 'Ministrantes:',
     'participantes': [{'nome':'Dr. André Luiz Borba do Nascimento','bio':' - UFPE'},{'nome':'Dr. José Rodrigues de Almeida Neto','bio':' - UFPI'},{'nome':'Dra. Dandara Monalisa Mariz da S. Quirino Bezerra','bio':' - IFPB'}],
     'titulomoderador':'Mediador:',
     'moderadores': [{'nome':'Prof. Dr. Alexandre Schiavetti','bio':' - UESC'}]
    }
  ];

  public dia26hora1200:Array<object> = [
    {'imagem':'/assets/image/administrativo.jpeg',
     'hora': '10:10 - 12:30',
     'instituto':'Auditório do Bloco Administrativo – CT (Centro de Tecnologia)',
     'titulo':'Mesa Redonda | Manejo e domesticação de recursos genéticos na América Latina',
     'titulolista': 'Ministrantes:',
     'participantes': [{'nome':'Dra. Camilla Marques de Lucena','bio':' - IESP'},{'nome':'Dr. Mailson Monteiro do Rego','bio':' - UFPB'},{'nome':'Dr. Ernani Machado de Freitas Lins Neto','bio':' - UNIVASF'},{'nome':'Dra. Elizanilda Ramalho do Rego','bio':' - UFPB'}],
     'titulomoderador':'Mediador:',
     'moderadores': [{'nome':'Dr. Mailson Monteiro do Rego','bio':' - UFPB'}]
    }
  ];

  public dia26hora1400:Array<object> = [
    {'imagem':'/assets/image/multimidia.jpeg',
     'hora': '14:00 - 16:00',
     'instituto':'Auditório Multimídia – CT (Centro de Tecnologia)',
     'titulo':'Mesa Redonda | Quando tudo começou: lições do passado e perspectivas para o futuro',
     'titulolista': 'Ministrantes:',
     'participantes': [{'nome':'Dr. José Geraldo Wanderley Marques','bio':' - UEFS'},{'nome':'Dra. Laise de Holanda Cavalcanti Andrade','bio':' - UFPE'},{'nome':'Dr. Nivaldo Nordi','bio':' - UFSCar'}],
     'titulomoderador':'Mediador:',
     'moderadores': [{'nome':'Prof. Dr. Reinaldo Farias Paiva de Lucena','bio':' - UFPB'}]
    }
  ];

  public dia26hora1600:Array<object> = [
    {'imagem':'/assets/image/multimidia.jpeg',
     'hora': '16:00 - 18:00',
     'instituto':'Auditório Multimídia – CT (Centro de Tecnologia)',
     'titulo':'Plenária de homenagens, premiações e encerramento',
     'titulolista': '',
     'participantes': [],
     'titulomoderador':'',
     'moderadores': []
    }
  ];


  public encerramento:Array<object> = [
    {'imagem':'/assets/image/multimidia.jpeg',
     'hora': '',
     'instituto':'Centro de Tecnologia',
     'titulo':'Obrigado por ter participado do congresso e utilizado o app!',
     'titulolista': '',
     'participantes': [{'nome':'Em breve este app será atualizado, e você vai poder ver o que aconteceu no congresso!', 'bio': ''}],
     'titulomoderador':'',
     'moderadores': []
    }
  ];

}
