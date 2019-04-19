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
      if((hora < 8) || ((hora == 8) && (minuto <= 30))){
        this.agora = this.dia23manha800;
      } else if(((hora == 8) && (minuto > 30)) || (hora == 9) || ((hora == 10) && (minuto < 15))) {
        this.agora = this.dia23manha800;
      } else if((hora == 10) && (minuto >= 15) && (minuto < 30)) {
        this.agora = this.dia23manha800;
      } else if((hora == 10) && (minuto >= 30) && (minuto < 45)) {
        this.agora = this.dia23manha800;
      } else if(((hora == 10) && (minuto >= 45)) || (hora == 11) || ((hora == 12) && (minuto <= 30))) {
        this.agora = this.dia23manha800;
      } else if(((hora == 12) && (minuto >= 30)) || ((hora > 12) && (hora <= 14)) || ((hora == 15) && (minuto < 30))){
        this.agora = this.dia23manha800;
      } else if(((hora == 15) && (minuto >= 30)) || (hora == 16) || ((hora == 17) && (minuto <= 15))) {
        this.agora = this.dia23manha800;
      } else if(((hora == 17) && (minuto > 15)) || (hora == 18)) {
        this.agora = this.dia23manha800;
      } else if(hora == 19){
        this.agora = this.dia23manha800;
      } else if((hora == 20) || (hora == 21)){
        this.agora = this.dia23manha800;
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

  getinfo(){
    let date =  new Date(); 
    this.dia = 22;
    this.hora = 8;
    // this.dia = date.getDate();
    // this.hora = date.getHours();
    this.minuto = date.getMinutes();

    this.atribuirGrade(this.dia, this.hora, this.minuto);
  }

  ionViewWillEnter() {
    this.getinfo();
  }

  // Cronograma do primeiro dia
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

  // Cronograma do segundo dia
  public dia23manha800:Array<object> = [
    {'imagem':'/assets/image/geociencias.jpeg',
     'hora': '08:00 - 12:00',
     'instituto':'Praça da Geociências',
     'titulo':'Oficina | Vasos de Pet: horta de plantas medicinais',
     'titulolista': 'Ministrante:',
     'participantes': [{'nome':'Esp. Neide Martins','bio':'- Bióloga, Especialista em Gestão Ambiental – PMJP' }],
     'titulomoderador':'Inscrição:',
     'moderadores': [{'nome':'decimosnee@gmail.com', 'bio':''}]
    },
    {'imagem':'/assets/image/geociencias.jpeg',
     'hora': '08:00 - 12:00',
     'instituto':'Geografia - Sala A3',
     'titulo':'Mini curso | Abordagem da ancestralidade como método na etnobiologia',
     'titulolista': 'Ministrante:',
     'participantes': [{'nome':'Dra. Rebeca Mascarenhas Fonseca Barreto','bio':'- UNIVASF' }],
     'titulomoderador':'Monitor:',
     'moderadores': [{'nome':'Wysllayne', 'bio':''}]
    },
    {'imagem':'/assets/image/prodema.jpeg',
     'hora': '08:00 - 12:00',
     'instituto':'Sala de aula do Prodema',
     'titulo':'Mini curso | Introdução a etnobiologia evolutiva',
     'titulolista': 'Ministrantes:',
     'participantes': [{'nome':'Dr. André Luiz Borba do Nascimento','bio':'- UFPE'}, {'nome':'Doutorando Joelson Brito Mouras','bio':'- UFPE'}],
     'titulomoderador':'Monitora:',
     'moderadores': [{'nome':'Jéssica Maria Vanessa', 'bio':''}]
    },
    {'imagem':'/assets/image/prodema.jpeg',
     'hora': '08:00 - 12:00',
     'instituto':'Auditório do PRODEMA',
     'titulo':'Mini curso | Métodos etnobiológicos e de modelagem aplicados às mudanças climáticas',
     'titulolista': 'Ministrantes:',
     'participantes': [{'nome':'Dr. José Ribamar de Farias Lima','bio':'- UFPB'}, {'nome':'Doutoranda Thamires Kelly Nunes Carvalho','bio':'- UFPB'}],
     'titulomoderador':'Monitor:',
     'moderadores': [{'nome':'Lucas Gomes', 'bio':''}]
    },
    {'imagem':'/assets/image/prodema.jpeg',
     'hora': '08:00 - 12:00',
     'instituto':'Auditório do PRODEMA',
     'titulo':'Mini curso | Plantas medicinais e evolução humana',
     'titulolista': 'Ministrantes:',
     'participantes': [{'nome':'Dr. Washington Soares Ferreira Júnior','bio':'- UPE'}],
     'titulomoderador':'Monitora:',
     'moderadores': [{'nome':'Sara Juliane', 'bio':''}]
    },
    {'imagem':'/assets/image/prodema.jpeg',
     'hora': '08:00 - 12:00',
     'instituto':'Mini Museu- Geografia',
     'titulo':'Mini curso | Introdução a Etnobotânica',
     'titulolista': 'Ministrantes:',
     'participantes': [{'nome':'Dr. Carlos Antônio Belarmino Alves','bio':'- UEPB'}, {'nome':'Doutorando Ezequiel da Costa Ferreira','bio':'- UFPB'}],
     'titulomoderador':'Monitora:',
     'moderadores': [{'nome':'Maria Beatriz Regina', 'bio':''}]
    },
    {'imagem':'/assets/image/prodema.jpeg',
     'hora': '08:00 - 12:00',
     'instituto':'Mini Museu- Geografia',
     'titulo':'Mini curso | Análise de redes para compreensão de sistemas etnobotânicos',
     'titulolista': 'Ministrantes:',
     'participantes': [{'nome':'Dr. Carlos Antônio Belarmino Alves','bio':'- UEPB'}, {'nome':'Doutorando Ezequiel da Costa Ferreira','bio':'- UFPB'}],
     'titulomoderador':'Monitora:',
     'moderadores': [{'nome':'Maria Beatriz Regina', 'bio':''}]
    }
  ];

  //Cronograma do terceiro dia
  public dia20manha0830:Array<object> = [
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: Auditório 1',
     'titulo':'Sessões de Trabalhos',
     'participantes': [{'nome':'O ecomarxismo e a disputa pela água', 'bio':'- Carolina Silva Ribeiro, UFBA; Gilca Garcia de Oliveira, UFBA'},{'nome':'Escalas da injustiça hídrica: estudo de caso em Ilhabela – litoral norte de São Paulo', 'bio':'- Natalia Dias Tadeu, USP'},{'nome':'Escasez hídrica y respuestas estatales; construyendo territorios hidrosociales en Chile', 'bio':'- Maria Christina Fragkou - Universidad de Chile'},{'nome':'A peleja dos índios Anacé contra o roubo da água para as empresas do Pecém na defesa do Lagamar do Cauípe', 'bio':'- João Alfredo Telles Mello, Centro Universitário 7 de Setembro'},{'nome':'Água e Região: Epistemologias Alternativas a partir do Enfoque Hidrossocial', 'bio': '- Hugo Kamiya Tsutsui (UFABC)'}],
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
    },
    {'imagem':'/assets/image/ibio.jpg',
     'hora': '09:00 - 12:30',
     'instituto':'Corredor da feira agroecológica da UFBA',
     'titulo':'Oficina: Artes, Pneus e Soluções Socioambientais',
     'participantes': [ {'nome':'A oficina irá abordar técnicas e conceitos destinados à reutilização de pneus inservíveis para a produção criativa de cadeiras, brinquedos, vasos e outros. O objetivo, além do compartilhamento das técnicas envolvidas, é promover a conscientização sobre os impactos sociais e ambientais gerados pelo descarte irregular de pneus usados e inservíveis.  O que é um problema ambiental e de saúde  pública poderá ser uma solução alternativa de renda. Serão também discutidas noções sobre a politica nacional de residuos sólidos e especialmente sobre a resolucao sobre pneus', 'bio':'- As inscrições deverão ser efetuadas presencialmente.'}],
     'moderadores': [{'nome':'Arnaldo Ramos', 'bio':''}]
    },
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Intituto de Geociências: Auditório B',
     'titulo':'Restauração Agroecológica e Emancipação: A proposta da teia dos povos para o sul da Bahia.',
     'participantes': [ {'nome':'Joelson Ferreira', 'bio':'- Teia dos Povos'}, {'nome':'Spency Pimentel', 'bio':'- Teia dos Povos'}],
     'moderadores': [{'nome':'', 'bio':''}]
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
    },
    {'imagem':'/assets/image/ibio.jpg',
     'hora': '09:00 - 12:30',
     'instituto':'Corredor da feira agroecológica da UFBA',
     'titulo':'Oficina: Artes, Pneus e Soluções Socioambientais',
     'participantes': [ {'nome':'A oficina irá abordar técnicas e conceitos destinados à reutilização de pneus inservíveis para a produção criativa de cadeiras, brinquedos, vasos e outros. O objetivo, além do compartilhamento das técnicas envolvidas, é promover a conscientização sobre os impactos sociais e ambientais gerados pelo descarte irregular de pneus usados e inservíveis.  O que é um problema ambiental e de saúde  pública poderá ser uma solução alternativa de renda. Serão também discutidas noções sobre a politica nacional de residuos sólidos e especialmente sobre a resolucao sobre pneus', 'bio':'- As inscrições deverão ser efetuadas presencialmente.'}],
     'moderadores': [{'nome':'Arnaldo Ramos', 'bio':''}]
    },
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Intituto de Geociências: Auditório B',
     'titulo':'Restauração Agroecológica e Emancipação: A proposta da teia dos povos para o sul da Bahia.',
     'participantes': [ {'nome':'Joelson Ferreira', 'bio':'- Teia dos Povos'}, {'nome':'Spency Pimentel', 'bio':'- Teia dos Povos'}],
     'moderadores': [{'nome':'', 'bio':''}]
    }
  ];

  public dia20manha1045:Array<object> = [
    {'imagem':'/assets/image/paf5.jpeg',
     'hora': '10:45 - 12:30',
     'instituto':'PAF 5: Auditório 1',
     'titulo':'Sessão de Trabalhos',
     'participantes': [{'nome':'Expansão urbana e questões ambientais em Redenção, Ceará', 'bio':'- Lailson Ferreira da Silva, Universidade da Integração Internacional da Lusofonia Afro-Brasileira'},{'nome':'Forum Permanente de Itapuã e a defesa do Parque Metropolitano do Abaeté', 'bio':'- Pedro Rodolpho Jungers Abib - UFB'},{'nome':'Fronteiras de água x fronteiras de poder: o caso dos rios urbanos no Brasil', 'bio':'- Renata Cristina Ferreira, UNESP'},{'nome':'A perspectiva ecosófica nas práticas comunitárias emergentes para transformações socioespaciais', 'bio': '- Heliana Faria Mettig Rocha - UFBA'}],
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
    },
    {'imagem':'/assets/image/ibio.jpg',
     'hora': '09:00 - 12:30',
     'instituto':'Corredor da feira agroecológica da UFBA',
     'titulo':'Oficina: Artes, Pneus e Soluções Socioambientais',
     'participantes': [ {'nome':'A oficina irá abordar técnicas e conceitos destinados à reutilização de pneus inservíveis para a produção criativa de cadeiras, brinquedos, vasos e outros. O objetivo, além do compartilhamento das técnicas envolvidas, é promover a conscientização sobre os impactos sociais e ambientais gerados pelo descarte irregular de pneus usados e inservíveis.  O que é um problema ambiental e de saúde  pública poderá ser uma solução alternativa de renda. Serão também discutidas noções sobre a politica nacional de residuos sólidos e especialmente sobre a resolucao sobre pneus', 'bio':'- As inscrições deverão ser efetuadas presencialmente.'}],
     'moderadores': [{'nome':'Arnaldo Ramos', 'bio':''}]
    },
    {'imagem':'/assets/image/igeo.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Intituto de Geociências: Auditório B',
     'titulo':'Restauração Agroecológica e Emancipação: A proposta da teia dos povos para o sul da Bahia.',
     'participantes': [ {'nome':'Joelson Ferreira', 'bio':'- Teia dos Povos'}, {'nome':'Spency Pimentel', 'bio':'- Teia dos Povos'}],
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
    },
    {'imagem':'/assets/image/ibio.jpg',
     'hora': '13:00 - 18:00',
     'instituto':'Corredor da feira agroecológica da UFBA',
     'titulo':'Artes, Pneus e Soluções Socioambientais',
     'participantes': [ {'nome':'A oficina irá abordar técnicas e conceitos destinados à reutilização de pneus inservíveis para a produção criativa de cadeiras, brinquedos, vasos e outros. O objetivo, além do compartilhamento das técnicas envolvidas, é promover a conscientização sobre os impactos sociais e ambientais gerados pelo descarte irregular de pneus usados e inservíveis.  O que é um problema ambiental e de saúde  pública poderá ser uma solução alternativa de renda. Serão também discutidas noções sobre a politica nacional de residuos sólidos e especialmente sobre a resolucao sobre pneus', 'bio':'- As inscrições deverão ser efetuadas presencialmente.'}],
     'moderadores': [{'nome':'Arnaldo Ramos', 'bio':''}]
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
    },
    {'imagem':'/assets/image/ibio.jpg',
    'hora': '13:00 - 18:00',
    'instituto':'Corredor da feira agroecológica da UFBA',
    'titulo':'Artes, Pneus e Soluções Socioambientais',
    'participantes': [ {'nome':'A oficina irá abordar técnicas e conceitos destinados à reutilização de pneus inservíveis para a produção criativa de cadeiras, brinquedos, vasos e outros. O objetivo, além do compartilhamento das técnicas envolvidas, é promover a conscientização sobre os impactos sociais e ambientais gerados pelo descarte irregular de pneus usados e inservíveis.  O que é um problema ambiental e de saúde  pública poderá ser uma solução alternativa de renda. Serão também discutidas noções sobre a politica nacional de residuos sólidos e especialmente sobre a resolucao sobre pneus', 'bio':'- As inscrições deverão ser efetuadas presencialmente.'}],
    'moderadores': [{'nome':'Arnaldo Ramos', 'bio':''}]
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
