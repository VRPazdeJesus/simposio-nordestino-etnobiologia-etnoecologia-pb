import { Component } from '@angular/core';
import { log } from 'util';

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
    let limit : string = hora+':'+minuto;
    console.log(limit);
    if(dia < 18) {
      this.agora = this.dia18manha;
      console.log('executando o agora');
    } else if(dia == 18) {
      if((hora < 13) && (limit != '12:30')) {
        this.agora = this.dia18manha;
      } else if((hora > 12) && (hora <= 15) && (limit != '15:45')){
        this.agora = this.dia18tarde1416;
      } else if ((hora >= 15) && (hora < 16)) {
        this.agora = this.dia18tarde141545;
      } else if ((hora >= 16) && (hora)) {

      }
    }
  }

  // Cronograma do primeiro dia
  public dia18manha:Array<object> = [
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório A do IGEO  - Instituto de Geociências',
     'titulo':'Mariana, Barcarena, Brumadinho: mineração e crimes ambientais',
     'participantes': [{'nome':'Carol Moura', 'bio': '- Movimento Atingidos pela Vale, Brumadinho'}, {'nome':'Charles Trocate', 'bio':'- MAM'}, {'nome':'Tádzio Coelho', 'bio':'- UFMA e POeMAS'}, {'nome':'Magno Luiz', 'bio':'- CPT'}, {'nome':'Milton Sanchez', 'bio':'- Colectivo Guardianas y Guardianes de La Laguna, Peru'}],
     'moderadores': [{'nome':'Camila Mudrek', 'bio':'- MAM'}, {'nome':'Magno Oliveira','bio':'- MAM'}]
    }, 
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório B (vídeo conferência) do IGEO  - Instituto de Geociências',
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
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório Posgeo do IGEO  - Instituto de Geociências',
     'titulo':'Construindo propostas a partir das pedagogias que emergem dos conflitos ambientais, das lutas populares e dos movimentos sociais: perspectivas desde a Educação Ambiental e a Ecologia Política',
     'participantes': [{'nome':'Anne Kassiadou', 'bio': '- UNIRIO'}, {'nome':'Celso Sánchez', 'bio':'- UNIRIO'}, {'nome':'Stephanie Di Chiara Salgado', 'bio':'- UNIRIO - Grupo de Estudos em Educação Ambiental Desde el Sur'}],
     'moderadores': [{'nome':'Anne Kassiadou', 'bio':'- Grupo de Estudos em Educação Ambiental Desde el Sur'}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório Yeda do IGEO  - Instituto de Geociências',
     'titulo':'Autonomias e movimentos pela Terra',
     'participantes': [{'nome':'Jerry Matalawe', 'bio': ''}, {'nome':'Pet Comunidades Indígenas UFBA', 'bio':''}, {'nome':'Jorge Nahuel', 'bio':'- líder Mapuche'}],
     'moderadores': [{'nome':'Rutian Pataxó', 'bio':''},{'nome':'Danilo Paiva Ramos', 'bio':'- UFBA'}]
    },
    {'imagem':'/assets/image/vaolivre-ihac.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Vão livre do IHAC - Instituto de Humanidades, Artes e Ciências',
     'titulo':'Artivismo',
     'participantes': [{'nome':'Marta Bezerra', 'bio': ''}],
     'moderadores': [{'nome':'Marta Bezerra', 'bio':''}]
    }
  ];

  public dia18tarde1416:Array<object> = [
    {'imagem':'/assets/image/vaolivre-ihac.jpeg',
     'hora': '14:00 - 16:30',
     'instituto':'Vão livre do IHAC - Instituto de Humanidades, Artes e Ciências',
     'titulo':'Teatro do Oprimido',
     'participantes': [{'nome':'Flávio José Rocha da Silva', 'bio': '- Educação Ambiental e Teatro do Oprimido'}],
     'moderadores': [{'nome':'Flávio José Rocha da Silva', 'bio':'- Educação Ambiental e Teatro do Oprimido'}]
    }
  ];

  public dia18tarde141545:Array<object> = [
    {'imagem':'/assets/image/vaolivre-ihac.jpeg',
     'hora': '14:00 - 16:30',
     'instituto':'Vão livre do IHAC - Instituto de Humanidades, Artes e Ciências',
     'titulo':'Teatro do Oprimido',
     'participantes': [{'nome':'Flávio José Rocha da Silva', 'bio': '- Educação Ambiental e Teatro do Oprimido'}],
     'moderadores': [{'nome':'Flávio José Rocha da Silva', 'bio':'- Educação Ambiental e Teatro do Oprimido'}]
    },
    {'imagem':'/assets/image/vaolivre-ihac.jpeg',
     'hora': '15:45 - 17:15',
     'instituto':'Auditório A do IGEO  - Instituto de Geociências',
     'titulo':'Trilhando para uma ecologia política (II): As ações de autodemarcação como luta por reconhecimento e autonomismo',
     'participantes': [{'nome':'James Angus Fraser', 'bio': '- University of Lancaster, Reino Unido'}, {'nome':'Luiz Felipe Garcia', 'bio':'- Ufopa'}, {'nome':'Rosamaria Loures Ailen Vega', 'bio':'- Berkeley'}, {'nome':'Chico Caititu', 'bio':'- liderança comunitária'}],
     'moderadores': [{'nome':'Maurício Torres', 'bio':'- UFPA'}, {'nome':'Org. Grupo de Estudos em Ecologia Histórica e Política nas bacias dos rios Trombetas, Tapajós e Xingu', 'bio':''}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '15:45 - 17:15',
     'instituto':'Auditório externo do Instituto de Biologia',
     'titulo':'Chico Mendes vive!',
     'participantes': [{'nome':'Angela Mendes', 'bio': '- Secretária de Mulheres do Conselho Nacional das Populações Extrativistas, CNS, filha de Chico Mendes'}, {'nome':'Edel Moraes', 'bio':'- Vice-presidenta do Conselho Nacional das Populações Extrativistas, CNS'}, {'nome':'Claudelice Silva Santos', 'bio':'- Estudante de Direito na UNIFESSPA'}, {'nome':'Sonia Guajajara', 'bio':'- Coordenadora da APIB'}],
     'moderadores': [{'nome':'Org. Edel Moraes', 'bio':''}]
    },
    {'imagem':'/assets/image/vaolivre-ihac.jpeg',
     'hora': '15:45 - 17:15',
     'instituto':'Auditório Yeda do IGEO  - Instituto de Geociências',
     'titulo':'El buen vivir en cuestión',
     'participantes': [{'nome':'Melissa Moreano', 'bio': ''},{'nome':'Nataly Torres', 'bio': ''},{'nome':'Diana Vela Almeida', 'bio': ''},{'nome':'Manuel Bayón', 'bio': ''},{'nome':'Inigo Arrazola', 'bio': ''}],
     'moderadores': [{'nome':'Org. Colectivo de Geografía Crítica del Ecuador', 'bio':''}]
    }
  ];

  public dia18tarde1630:Array<object> = [
    {'imagem':'/assets/image/vaolivre-ihac.jpeg',
     'hora': '15:45 - 17:15',
     'instituto':'Auditório A do IGEO  - Instituto de Geociências',
     'titulo':'Trilhando para uma ecologia política (II): As ações de autodemarcação como luta por reconhecimento e autonomismo',
     'participantes': [{'nome':'James Angus Fraser', 'bio': '- University of Lancaster, Reino Unido'}, {'nome':'Luiz Felipe Garcia', 'bio':'- Ufopa'}, {'nome':'Rosamaria Loures Ailen Vega', 'bio':'- Berkeley'}, {'nome':'Chico Caititu', 'bio':'- liderança comunitária'}],
     'moderadores': [{'nome':'Maurício Torres', 'bio':'- UFPA'}, {'nome':'Org. Grupo de Estudos em Ecologia Histórica e Política nas bacias dos rios Trombetas, Tapajós e Xingu', 'bio':''}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '15:45 - 17:15',
     'instituto':'Auditório externo do Instituto de Biologia',
     'titulo':'Chico Mendes vive!',
     'participantes': [{'nome':'Angela Mendes', 'bio': '- Secretária de Mulheres do Conselho Nacional das Populações Extrativistas, CNS, filha de Chico Mendes'}, {'nome':'Edel Moraes', 'bio':'- Vice-presidenta do Conselho Nacional das Populações Extrativistas, CNS'}, {'nome':'Claudelice Silva Santos', 'bio':'- Estudante de Direito na UNIFESSPA'}, {'nome':'Sonia Guajajara', 'bio':'- Coordenadora da APIB'}],
     'moderadores': [{'nome':'Org. Edel Moraes', 'bio':''}]
    },
    {'imagem':'/assets/image/vaolivre-ihac.jpeg',
     'hora': '15:45 - 17:15',
     'instituto':'Auditório Yeda do IGEO  - Instituto de Geociências',
     'titulo':'El buen vivir en cuestión',
     'participantes': [{'nome':'Melissa Moreano', 'bio': ''},{'nome':'Nataly Torres', 'bio': ''},{'nome':'Diana Vela Almeida', 'bio': ''},{'nome':'Manuel Bayón', 'bio': ''},{'nome':'Inigo Arrazola', 'bio': ''}],
     'moderadores': [{'nome':'Org. Colectivo de Geografía Crítica del Ecuador', 'bio':''}]
    }
  ];

  public dia18noite18:Array<object> = [
    {'imagem':'/assets/image/vaolivre-ihac.jpeg',
     'hora': '18:00 - 18:30',
     'instituto':'Salão Nobre da Reitoria da UFBA (Canela)',
     'titulo':'Insurgências Decoloniais e Horizontes Emancipatórios para o enfrentamento às turbulências atuais',
     'participantes': [{'nome':'Magnífico Reitor João Carlos Salles ', 'bio': '- UFBA'}],
     'moderadores': [{'nome':'Magnífico Reitor João Carlos Salles ', 'bio':'- UFBA'}]
    }
  ];

  // Cronograma do segundo dia
  public dia19manha830:Array<object> = [
    {'imagem':'/assets/image/vaolivre-ihac.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: sala 404',
     'titulo':'Sessões de trabalho',
     'participantes': [{'nome':'A luta pela manutenção da autonomia comunitária em Juruti Velho, Juruti/PA: o diálogo entre saberes jurídicos acadêmicos e comunitários', 'bio': ''},{'nome':'Desprovincializar o desenvolvimento: enunciação subalterna e resistência nas bordas da acumulação capitalista na Amazônia', 'bio': ''}, {'nome':'Desenvolvimento sustentável: reforma ou revolução?', 'bio':''}, {'nome':'“A gente não sabia que podia gritar”: contestando a vocação florestal do município de Imbaú, Paraná, Brasil', 'bio':''}],
     'moderadores': [{'nome':'Luiz Enrique Souza', 'bio':''}]
    },
    {'imagem':'/assets/image/vaolivre-ihac.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: sala 406',
     'titulo':'Sessões de trabalho',
     'participantes': [{'nome':'O entendimento da sociedade civil sob a ótica gramsciana e suas potencialidades na análise de conselhos gestores de unidades de conservação', 'bio': ''},{'nome':'Entre preservação ambiental e justiça social: um estudo de caso sobre as comunidades nativas do Parque Nacional da Chapada Diamantina - Bahia', 'bio': ''},{'nome':'Transformações socioambientais e a busca pela autonomia, justiça social e ambiental de uma comunidade quilombola no Rio de Janeiro.', 'bio': ''},{'nome':'Um estudo sobre a regularização das terras das comunidades quilombolas atingidas pelo projeto de integração do rio São Francisco (PISF)', 'bio': ''}],
     'moderadores': [{'nome':'', 'bio':''}]
    }
  ];

  public dia19manha9:Array<object> = [
    {'imagem':'/assets/image/vaolivre-ihac.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: sala 404',
     'titulo':'Sessões de trabalho',
     'participantes': [{'nome':'A luta pela manutenção da autonomia comunitária em Juruti Velho, Juruti/PA: o diálogo entre saberes jurídicos acadêmicos e comunitários', 'bio': ''},{'nome':'Desprovincializar o desenvolvimento: enunciação subalterna e resistência nas bordas da acumulação capitalista na Amazônia', 'bio': ''}, {'nome':'Desenvolvimento sustentável: reforma ou revolução?', 'bio':''}, {'nome':'“A gente não sabia que podia gritar”: contestando a vocação florestal do município de Imbaú, Paraná, Brasil', 'bio':''}],
     'moderadores': [{'nome':'Luiz Enrique Souza', 'bio':''}]
    },
    {'imagem':'/assets/image/vaolivre-ihac.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: sala 406',
     'titulo':'Sessões de trabalho',
     'participantes': [{'nome':'O entendimento da sociedade civil sob a ótica gramsciana e suas potencialidades na análise de conselhos gestores de unidades de conservação', 'bio': ''},{'nome':'Entre preservação ambiental e justiça social: um estudo de caso sobre as comunidades nativas do Parque Nacional da Chapada Diamantina - Bahia', 'bio': ''},{'nome':'Transformações socioambientais e a busca pela autonomia, justiça social e ambiental de uma comunidade quilombola no Rio de Janeiro.', 'bio': ''},{'nome':'Um estudo sobre a regularização das terras das comunidades quilombolas atingidas pelo projeto de integração do rio São Francisco (PISF)', 'bio': ''}],
     'moderadores': [{'nome':'', 'bio':''}]
    },
    {'imagem':'/assets/image/vaolivre-ihac.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório A do IGEO  - Instituto de Geociências',
     'titulo':'Candomblé e ecologia',
     'participantes': [{'nome':'Iyá Jaciara Ribeiro dos Santos', 'bio':'Ilê Axé Abassá de Ogum'},{'nome':'Ekede Sinha', 'bio':'Casa Branca - Ilê Axé Iyá Nassô Oká'},{'nome':'Makota Valdina Pinto', 'bio': 'Tanury Junçara - pendente'},{'nome':'Jussara Rego', 'bio': 'UFBA'}],
     'moderadores': [{'nome':'', 'bio':''}]
    },
    {'imagem':'/assets/image/vaolivre-ihac.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório 1 - Faculdade de Arquitetura e Urbanismo',
     'titulo':'MOVILIZAR LOS CUERPOS-TERRITORIO : PERFORMANCES REFLEXIVAS PARA LA PRÁCTICA POLÍTICA',
     'participantes': [{'nome':'Lucrecia Raquel Greco', 'bio':'Universidade de Buenos Aires'},{'nome':'Armindo Pinto', 'bio':''},{'nome':'Teatro do Oprimido de Salvador', 'bio': ''}],
     'moderadores': [{'nome':'', 'bio':''}]
    },
    {'imagem':'/assets/image/vaolivre-ihac.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório B do IGEO  - Instituto de Geociências',
     'titulo':'Ecologia Política e epistemologia: Interculturalidade, formas de apropriação do saber acadêmico e novas experiências universitárias ',
     'participantes': [{'nome':'Felipe Cruz Tuxá', 'bio':'UNEB e UNB'},{'nome':'Franklim Baniwa', 'bio':'UNB'}],
     'moderadores': [{'nome':'', 'bio':''}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório externo do Instituto de Biologia',
     'titulo':'Modos de (r)existência nos territórios pesqueiros',
     'participantes': [{'nome':'Clovis Amorim', 'bio':'- Comunidade Cajueiro -MA - Coordenação Nacional MPP'},{'nome':'Josana Serrão Pinto', 'bio':'- Comunidade Amador - PA - Coordenação Nacional MPP'},{'nome':'Eliete Paraguaçu Conceição', 'bio':'- Comunidades Pesqueiras e Quilombolas de Ilha de Maré - MPP - BA'},{'nome':'Raimundo Siri', 'bio':'- Comunidade Cova da Onça - MPP-BA'}],
     'moderadores': [{'nome':'Maria José Pacheco', 'bio':'CPP'},{'nome':'Rafael Palermo Buti', 'bio':'Unilab'}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório 2 - Faculdade de Arquitetura e Urbanismo',
     'titulo':'PROSA: Escola de Formação de Autoprodutores em Processos Socioambientais',
     'participantes': [{'nome':'VIVIANE ZERLOTINI DA SILVA', 'bio':'- Pontifícia Universidade Católica de Minas Gerais'}],
     'moderadores': [{'nome':'VIVIANE ZERLOTINI DA SILVA', 'bio':'- Pontifícia Universidade Católica de Minas Gerais'}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Congregação - Faculdade de Arquitetura e Urbanismo',
     'titulo':'Oficina de grafismos',
     'participantes': [{'nome':'Denilson Baniwa', 'bio':''}],
     'moderadores': [{'nome':'Denilson Baniwa', 'bio':''}]
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
    {'imagem':'/assets/image/vaolivre-ihac.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório A do IGEO  - Instituto de Geociências',
     'titulo':'Candomblé e ecologia',
     'participantes': [{'nome':'Iyá Jaciara Ribeiro dos Santos', 'bio':'Ilê Axé Abassá de Ogum'},{'nome':'Ekede Sinha', 'bio':'Casa Branca - Ilê Axé Iyá Nassô Oká'},{'nome':'Makota Valdina Pinto', 'bio': 'Tanury Junçara - pendente'},{'nome':'Jussara Rego', 'bio': 'UFBA'}],
     'moderadores': [{'nome':'', 'bio':''}]
    },
    {'imagem':'/assets/image/vaolivre-ihac.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório 1 - Faculdade de Arquitetura e Urbanismo',
     'titulo':'MOVILIZAR LOS CUERPOS-TERRITORIO : PERFORMANCES REFLEXIVAS PARA LA PRÁCTICA POLÍTICA',
     'participantes': [{'nome':'Lucrecia Raquel Greco', 'bio':'Universidade de Buenos Aires'},{'nome':'Armindo Pinto', 'bio':''},{'nome':'Teatro do Oprimido de Salvador', 'bio': ''}],
     'moderadores': [{'nome':'', 'bio':''}]
    },
    {'imagem':'/assets/image/vaolivre-ihac.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório B do IGEO  - Instituto de Geociências',
     'titulo':'Ecologia Política e epistemologia: Interculturalidade, formas de apropriação do saber acadêmico e novas experiências universitárias ',
     'participantes': [{'nome':'Felipe Cruz Tuxá', 'bio':'UNEB e UNB'},{'nome':'Franklim Baniwa', 'bio':'UNB'}],
     'moderadores': [{'nome':'', 'bio':''}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório externo do Instituto de Biologia',
     'titulo':'Modos de (r)existência nos territórios pesqueiros',
     'participantes': [{'nome':'Clovis Amorim', 'bio':'- Comunidade Cajueiro -MA - Coordenação Nacional MPP'},{'nome':'Josana Serrão Pinto', 'bio':'- Comunidade Amador - PA - Coordenação Nacional MPP'},{'nome':'Eliete Paraguaçu Conceição', 'bio':'- Comunidades Pesqueiras e Quilombolas de Ilha de Maré - MPP - BA'},{'nome':'Raimundo Siri', 'bio':'- Comunidade Cova da Onça - MPP-BA'}],
     'moderadores': [{'nome':'Maria José Pacheco', 'bio':'CPP'},{'nome':'Rafael Palermo Buti', 'bio':'Unilab'}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório 2 - Faculdade de Arquitetura e Urbanismo',
     'titulo':'PROSA: Escola de Formação de Autoprodutores em Processos Socioambientais',
     'participantes': [{'nome':'VIVIANE ZERLOTINI DA SILVA', 'bio':'- Pontifícia Universidade Católica de Minas Gerais'}],
     'moderadores': [{'nome':'VIVIANE ZERLOTINI DA SILVA', 'bio':'- Pontifícia Universidade Católica de Minas Gerais'}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Congregação - Faculdade de Arquitetura e Urbanismo',
     'titulo':'Oficina de grafismos',
     'participantes': [{'nome':'Denilson Baniwa', 'bio':''}],
     'moderadores': [{'nome':'Denilson Baniwa', 'bio':''}]
    }
  ];

  public dia19manha1045:Array<object> = [
    {'imagem':'/assets/image/vaolivre-ihac.jpeg',
     'hora': '10:45 - 12:30',
     'instituto':'PAF 5: sala 404',
     'titulo':'Sessões de trabalho',
     'participantes': [{'nome':'Todo empieza por lo local, autogobiernos y salidas del extractivismo', 'bio': 'Raquel Neyra Soupplet, Universidad de Zaragoza'},{'nome':'Cada uno, cada uno. Proyecto de reparación integral en el contexto de 50 años de extractivismo en la Amazonia Norte Ecuatoriana.', 'bio': 'Federica Giunta, Acción Ecológica'}, {'nome':'Paisagismo comestível e espaço exterior doméstico voltados à soberania alimentar: aldeia Itamarã e ocupações Bubas', 'bio':'Céline Veríssimo, Universidade Federal da Integração Latino-Americana'}, {'nome':'Territórios Tradicionalmente Ocupados e atingidos por rejeitos da mineração na Planície Costeira do Rio Doce (ES): por uma visibilidade descolonial', 'bio':'Simone Raquel Batista Ferreira, UFES'}],
     'moderadores': [{'nome':'Isabella Lamas', 'bio':''},{'nome':'GECI-PUC-SP', 'bio':''}]
    },
    {'imagem':'/assets/image/vaolivre-ihac.jpeg',
     'hora': '10:45 - 12:30',
     'instituto':'PAF 5: sala 406',
     'titulo':'Sessões de trabalho',
     'participantes': [{'nome':'“NÓS SOMOS RAIZ DO LUGAR”: produção do espaço na Comunidade Quilombola São José do Barro Vermelho', 'bio': 'Renata Guimarães Vieira, UFOP'},{'nome':'Conflitos e resistências no território do quilombo Rio dos Macacos', 'bio': 'Paula Regina De Oliveira Cordeiro, UFBA'}, {'nome':'Granjeras del Mar: Luchas y Sueños en Coliumo. Historia del Àrea de manejo del Sindicato No.2', 'bio':'Gloria L Gallardo Fernández: Södertörn University'}, {'nome':'Conflitos, educação ambiental e ecologia política: a leitura crítica do território a partir da desigualdade e injustiça ambiental', 'bio':'Patrícia de Oliveira Plácido, Universidade Estadual do Rio de Janeiro'}],
     'moderadores': [{'nome':'Catherine Prost', 'bio':''},{'nome':'GECI-PUC-SP', 'bio':''}]
    },
    {'imagem':'/assets/image/vaolivre-ihac.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório A do IGEO  - Instituto de Geociências',
     'titulo':'Candomblé e ecologia',
     'participantes': [{'nome':'Iyá Jaciara Ribeiro dos Santos', 'bio':'Ilê Axé Abassá de Ogum'},{'nome':'Ekede Sinha', 'bio':'Casa Branca - Ilê Axé Iyá Nassô Oká'},{'nome':'Makota Valdina Pinto', 'bio': 'Tanury Junçara - pendente'},{'nome':'Jussara Rego', 'bio': 'UFBA'}],
     'moderadores': [{'nome':'', 'bio':''}]
    },
    {'imagem':'/assets/image/vaolivre-ihac.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório 1 - Faculdade de Arquitetura e Urbanismo',
     'titulo':'MOVILIZAR LOS CUERPOS-TERRITORIO : PERFORMANCES REFLEXIVAS PARA LA PRÁCTICA POLÍTICA',
     'participantes': [{'nome':'Lucrecia Raquel Greco', 'bio':'Universidade de Buenos Aires'},{'nome':'Armindo Pinto', 'bio':''},{'nome':'Teatro do Oprimido de Salvador', 'bio': ''}],
     'moderadores': [{'nome':'', 'bio':''}]
    },
    {'imagem':'/assets/image/vaolivre-ihac.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório B do IGEO  - Instituto de Geociências',
     'titulo':'Ecologia Política e epistemologia: Interculturalidade, formas de apropriação do saber acadêmico e novas experiências universitárias ',
     'participantes': [{'nome':'Felipe Cruz Tuxá', 'bio':'UNEB e UNB'},{'nome':'Franklim Baniwa', 'bio':'UNB'}],
     'moderadores': [{'nome':'', 'bio':''}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório externo do Instituto de Biologia',
     'titulo':'Modos de (r)existência nos territórios pesqueiros',
     'participantes': [{'nome':'Clovis Amorim', 'bio':'- Comunidade Cajueiro -MA - Coordenação Nacional MPP'},{'nome':'Josana Serrão Pinto', 'bio':'- Comunidade Amador - PA - Coordenação Nacional MPP'},{'nome':'Eliete Paraguaçu Conceição', 'bio':'- Comunidades Pesqueiras e Quilombolas de Ilha de Maré - MPP - BA'},{'nome':'Raimundo Siri', 'bio':'- Comunidade Cova da Onça - MPP-BA'}],
     'moderadores': [{'nome':'Maria José Pacheco', 'bio':'CPP'},{'nome':'Rafael Palermo Buti', 'bio':'Unilab'}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório 2 - Faculdade de Arquitetura e Urbanismo',
     'titulo':'PROSA: Escola de Formação de Autoprodutores em Processos Socioambientais',
     'participantes': [{'nome':'VIVIANE ZERLOTINI DA SILVA', 'bio':'- Pontifícia Universidade Católica de Minas Gerais'}],
     'moderadores': [{'nome':'VIVIANE ZERLOTINI DA SILVA', 'bio':'- Pontifícia Universidade Católica de Minas Gerais'}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Congregação - Faculdade de Arquitetura e Urbanismo',
     'titulo':'Oficina de grafismos',
     'participantes': [{'nome':'Denilson Baniwa', 'bio':''}],
     'moderadores': [{'nome':'Denilson Baniwa', 'bio':''}]
    }
  ];

  public dia19tarde1545:Array<object> = [
    {'imagem':'/assets/image/vaolivre-ihac.jpeg',
     'hora': '15:45 - 17:15',
     'instituto':'Auditório A do IGEO  - Instituto de Geociências',
     'titulo':'O problema do desenvolvimento e o ambiente no contexto dos governos progressistas ou de esquerda',
     'participantes': [{'nome':'Ricardo Calla', 'bio':'Bolivia'},{'nome':'Maristella Svampa', 'bio':'Argentina'},{'nome':'Emiliano Teran Matonvani', 'bio': 'Venezuela'},{'nome':'Diana Vela', 'bio': 'IAEN/Equador'},{'nome':'Org. Salvador Schavelzon', 'bio': 'Unifesp'}],
     'moderadores': [{'nome':'', 'bio':''}]
    },
    {'imagem':'/assets/image/vaolivre-ihac.jpeg',
     'hora': '15:45 - 17:15',
     'instituto':'Auditório B do IGEO  - Instituto de Geociências',
     'titulo':'Ecofeminismos e feminismos decoloniais',
     'participantes': [{'nome':'Stefania Barca', 'bio':'Centro de Estudos Sociais, Universidade de Coimbra, Portugal'},{'nome':'Elionice Sacramento', 'bio':'Articulação das Mulheres Pescadoras e MPP'},{'nome':'Antonia Mello', 'bio': 'Movimento Xingu Vivo'},{'nome':'Mina Lorena Navarro Trujillo', 'bio': 'Benemérita Universidad Autónoma de Puebla, México'},{'nome':'Caroline Cotta De Mello Freitas', 'bio': 'Fundação Escola de Sociologia e Política'}],
     'moderadores': [{'nome':'Luisa de Pinho Valle', 'bio':'Centro de Estudos Sociais, Universidade de Coimbra, Portugal'}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '15:45 - 17:15',
     'instituto':'Auditório externo do Instituto de Biologia',
     'titulo':'Conhecimento científico em movimento: práxis, ecologia e emancipação.',
     'participantes': [{'nome':'Lídia Maria Pires Soares Cardel', 'bio':''},{'nome':'José Geraldo Aquino', 'bio':''},{'nome':'Maria Aparecida José de Oliveira', 'bio': 'UFBA'}],
     'moderadores': [{'nome':'', 'bio':''}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '15:45 - 17:15',
     'instituto':'Auditório Instituto de Matemática',
     'titulo':'Ecologia e Economia na Era do Antropoceno',
     'participantes': [{'nome':'Clóvis Cavalcanti', 'bio':'UFPE'},{'nome':'Daniel Andrade', 'bio':'UFU'},{'nome':'Silvia Molina', 'bio': 'CEDLA, Bolívia'}],
     'moderadores': [{'nome':'Reinaldo Sampaio', 'bio':'Corecon'}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '15:45 - 17:15',
     'instituto':'Auditório Yeda do IGEO  - Instituto de Geociências',
     'titulo':'Os pobres do paraíso: paradoxo conservação vs. desenvolvimento',
     'participantes': [{'nome':'Rodrigo Penna Firme', 'bio':'PUC/RJ'},{'nome':'Annelise Fernandez', 'bio':'UFRRJ'},{'nome':'Henyo Trindade Barreto Filho', 'bio': 'UNB'},{'nome':'Alba Simone', 'bio': 'UNIRIO'}],
     'moderadores': [{'nome':'Rodrigo Penna Firme', 'bio':'PUC/RJ'}]
    }
  ];

  public dia19noite1830:Array<object> = [
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '18:30 - 20:00',
     'instituto':'Auditório externo do Instituto de Biologia',
     'titulo':'Cartografias das existências ',
     'participantes': [{'nome':'Catalina Toro Perez', 'bio':'UNC, Colombia'},{'nome':'Alessandra Munduruku', 'bio':'UFPA, Associação Indígena Pariri'},{'nome':'Guiomar Germani', 'bio': 'Geografar/UFBA'},{'nome':'Jeovah Meirelles', 'bio': 'UFC/Nova Cartografia Social'},{'nome':'Jussara Rêgo', 'bio': 'Marsol'}],
     'moderadores': [{'nome':'Jussara Rêgo', 'bio':'Marsol'}]
    }
  ];

  public dia19noite19:Array<object> = [
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '18:30 - 20:00',
     'instituto':'Auditório externo do Instituto de Biologia',
     'titulo':'Cartografias das existências ',
     'participantes': [{'nome':'Catalina Toro Perez', 'bio':'UNC, Colombia'},{'nome':'Alessandra Munduruku', 'bio':'UFPA, Associação Indígena Pariri'},{'nome':'Guiomar Germani', 'bio': 'Geografar/UFBA'},{'nome':'Jeovah Meirelles', 'bio': 'UFC/Nova Cartografia Social'},{'nome':'Jussara Rêgo', 'bio': 'Marsol'}],
     'moderadores': [{'nome':'Jussara Rêgo', 'bio':'Marsol'}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '19:00 - 22:00',
     'instituto':'Teatro Vila Velha, Passeio Público, Salvador',
     'titulo':'Kilomb Artes: as 7 Flechas das Ecologias Urbana, Indígena e Panafricana',
     'participantes': [{'nome':'Naka', 'bio':'griô Mandinga Guiné-Bissau'},{'nome':'Mo Maiê', 'bio':'griô baiana'},{'nome':' Ícaro Sá', 'bio': 'Tamborinário'},{'nome':'Denilson Baniwa', 'bio': 'artísta gráfico indígena'}],
     'moderadores': [{'nome':'Paul Regnier', 'bio':'UFBA'}]
    }
  ];

  public dia19noite20:Array<object> = [
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '19:00 - 22:00',
     'instituto':'Teatro Vila Velha, Passeio Público, Salvador',
     'titulo':'Kilomb Artes: as 7 Flechas das Ecologias Urbana, Indígena e Panafricana',
     'participantes': [{'nome':'Naka', 'bio':'griô Mandinga Guiné-Bissau'},{'nome':'Mo Maiê', 'bio':'griô baiana'},{'nome':' Ícaro Sá', 'bio': 'Tamborinário'},{'nome':'Denilson Baniwa', 'bio': 'artísta gráfico indígena'}],
     'moderadores': [{'nome':'Paul Regnier', 'bio':'UFBA'}]
    }
  ];

  //Cronograma do terceiro dia
  public dia20manha8301015:Array<object> = [
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: sala 404',
     'titulo':'Sessões de Trabalhos',
     'participantes': [{'nome':'Experiência das arpilleras com as mulheres impactadas pela hidrelétrica do Estreito/MA', 'bio':'- Mariane Emanuelle da Silva Lucena, UFTO'},{'nome':'Injustiça ambiental e resistência no cotidiano de mulheres catadoras de materiais recicláveis', 'bio':'- Isabella De Carvalho Vallin, USP'},{'nome':'Pobreza energética y Género. Reflexiones sobre el caso chileno', 'bio':'- Jorgelina Sannazzaro, Universidad Alberto Hurtado'},{'nome':'Imaginários ecofeministas latino-americanos e a experiência da revolução em Rojava', 'bio':'- Eleonora Gea Piccardi, Univerisdade de Coimbra'}],
     'moderadores': [{'nome':'Caroline Cotta De Mello Freitas', 'bio':''},{'nome':'FESPSP', 'bio':''}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: sala 406',
     'titulo':'Sessões de Trabalhos',
     'participantes': [{'nome':'Por outra concepção de tratamento de rios em ambientes urbanos', 'bio':'- Maíra Menezes De Azevedo, Movimento Jaguaribe Vivo'},{'nome':'Por uma nova concepção de macrodrenagem', 'bio':'- Lavinia Bomsucesso, Movimento Jaguaribe Vivo'},{'nome':'Remunicipalização como opção de governança hídrica', 'bio':'- Arlindo M. Esteves Rodrigues, Pontificia Universidade Católica de São Paulo'},{'nome':'El papel de los Movimientos Sociales Latinoamericanos en defensa dela agua como bien social y derecho humano', 'bio':'- Mirta Ines Malvares Míguez, Universidad Nacional de Mar del Plata'}],
     'moderadores': [{'nome':'Catalina Toro Perez', 'bio':''}]
    }
  ];

  public dia20manha91015:Array<object> = [
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: sala 404',
     'titulo':'Sessões de Trabalhos',
     'participantes': [{'nome':'Experiência das arpilleras com as mulheres impactadas pela hidrelétrica do Estreito/MA', 'bio':'- Mariane Emanuelle da Silva Lucena, UFTO'},{'nome':'Injustiça ambiental e resistência no cotidiano de mulheres catadoras de materiais recicláveis', 'bio':'- Isabella De Carvalho Vallin, USP'},{'nome':'Pobreza energética y Género. Reflexiones sobre el caso chileno', 'bio':'- Jorgelina Sannazzaro, Universidad Alberto Hurtado'},{'nome':'Imaginários ecofeministas latino-americanos e a experiência da revolução em Rojava', 'bio':'- Eleonora Gea Piccardi, Univerisdade de Coimbra'}],
     'moderadores': [{'nome':'Caroline Cotta De Mello Freitas', 'bio':''},{'nome':'FESPSP', 'bio':''}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: sala 406',
     'titulo':'Sessões de Trabalhos',
     'participantes': [{'nome':'Por outra concepção de tratamento de rios em ambientes urbanos', 'bio':'- Maíra Menezes De Azevedo, Movimento Jaguaribe Vivo'},{'nome':'Por uma nova concepção de macrodrenagem', 'bio':'- Lavinia Bomsucesso, Movimento Jaguaribe Vivo'},{'nome':'Remunicipalização como opção de governança hídrica', 'bio':'- Arlindo M. Esteves Rodrigues, Pontificia Universidade Católica de São Paulo'},{'nome':'El papel de los Movimientos Sociales Latinoamericanos en defensa dela agua como bien social y derecho humano', 'bio':'- Mirta Ines Malvares Míguez, Universidad Nacional de Mar del Plata'}],
     'moderadores': [{'nome':'Catalina Toro Perez', 'bio':''}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório 1 - Faculdade de Arquitetura e Urbanismo',
     'titulo':'MOVILIZAR LOS CUERPOS-TERRITORIO : PERFORMANCES REFLEXIVAS PARA LA PRÁCTICA POLÍTICA ',
     'participantes': [{'nome':'Lucrecia Raquel Greco', 'bio':'- Universidade de Buenos Aires'},{'nome':'Armindo Pinto', 'bio':''},{'nome':'Teatro do Oprimido de Salvador', 'bio': ''}],
     'moderadores': [{'nome':'Lucrecia Raquel Greco', 'bio':'Universidade de Buenos Aires'}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório A do IGEO  - Instituto de Geociências',
     'titulo':'O direito de dizer não: extrativismo e lutas territoriais',
     'participantes': [{'nome':'Milton Sanchez', 'bio':'- Colectivo Guardianas y Guardianes de la Laguna'},{'nome':'Jorge Nahuel', 'bio':'- líder Mapuche, Argentina'},{'nome':'Antônia Mello', 'bio': '- Xingu Vivo'},{'nome':'Kum Tum Gamela', 'bio': '- líder Gamela, Maranhão'},{'nome':'Antenor Vaz', 'bio': '- indigenista'}],
     'moderadores': [{'nome':'', 'bio':''}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório B do IGEO  - Instituto de Geociências',
     'titulo':'Restauração agroecológica e emancipação: a proposta da teia dos povos para o Sul da Bahia',
     'participantes': [{'nome':'Paulo Dimas Rocha De Menezes', 'bio':'- Universidade Federal do Sul da Bahia'},{'nome':'Joelson Ferreira De Oliveira', 'bio':'- Teia dos Povos'},{'nome':'Lanns Alves De Almeida Filho', 'bio': '- Instituto Biofábrica de Cacau'},{'nome':'Pedro Marinho', 'bio': '- Universidade Federal do Rio de Janeiro'}],
     'moderadores': [{'nome':'', 'bio':''}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório externo do Instituto de Biologia',
     'titulo':'Reservas extrativistas: Institucionalizando a resistência ',
     'participantes': [{'nome':'Representantes de Comunidades', 'bio':''},{'nome':'Lilian de Carvalho Lindoso', 'bio':'- Analista Ambiental ICMBio, APA Serra da Ibiapaba (CE)'},{'nome':'Cláudia Cunha', 'bio': '- Analista Ambiental ICMBio'},{'nome':'Coordenação Regional (PB)', 'bio': ''},{'nome':'Coord. Sergio Fernandes Freitas', 'bio': 'Analista Ambiental ICMBio, Resex Baia do Iguape (BA)'}],
     'moderadores': [{'nome':'Coord. Sergio Fernandes Freitas', 'bio':'- Analista Ambiental ICMBio, Resex Baia do Iguape (BA)'}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório Instituto de Matemática',
     'titulo':'Geografiando para la resistencia: metodologías críticas para la defensa del território',
     'participantes': [{'nome':'Melissa Moreano', 'bio':'- Colectivo de Geografía Crítica del Ecuador'}],
     'moderadores': [{'nome':'Melissa Moreano', 'bio':'- Colectivo de Geografía Crítica del Ecuador'}]
    }
  ];

  public dia20manha10301230:Array<object> = [
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório 1 - Faculdade de Arquitetura e Urbanismo',
     'titulo':'MOVILIZAR LOS CUERPOS-TERRITORIO : PERFORMANCES REFLEXIVAS PARA LA PRÁCTICA POLÍTICA ',
     'participantes': [{'nome':'Lucrecia Raquel Greco', 'bio':'- Universidade de Buenos Aires'},{'nome':'Armindo Pinto', 'bio':''},{'nome':'Teatro do Oprimido de Salvador', 'bio': ''}],
     'moderadores': [{'nome':'Lucrecia Raquel Greco', 'bio':'Universidade de Buenos Aires'}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório A do IGEO  - Instituto de Geociências',
     'titulo':'O direito de dizer não: extrativismo e lutas territoriais',
     'participantes': [{'nome':'Milton Sanchez', 'bio':'- Colectivo Guardianas y Guardianes de la Laguna'},{'nome':'Jorge Nahuel', 'bio':'- líder Mapuche, Argentina'},{'nome':'Antônia Mello', 'bio': '- Xingu Vivo'},{'nome':'Kum Tum Gamela', 'bio': '- líder Gamela, Maranhão'},{'nome':'Antenor Vaz', 'bio': '- indigenista'}],
     'moderadores': [{'nome':'', 'bio':''}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório B do IGEO  - Instituto de Geociências',
     'titulo':'Restauração agroecológica e emancipação: a proposta da teia dos povos para o Sul da Bahia',
     'participantes': [{'nome':'Paulo Dimas Rocha De Menezes', 'bio':'- Universidade Federal do Sul da Bahia'},{'nome':'Joelson Ferreira De Oliveira', 'bio':'- Teia dos Povos'},{'nome':'Lanns Alves De Almeida Filho', 'bio': '- Instituto Biofábrica de Cacau'},{'nome':'Pedro Marinho', 'bio': '- Universidade Federal do Rio de Janeiro'}],
     'moderadores': [{'nome':'', 'bio':''}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório externo do Instituto de Biologia',
     'titulo':'Reservas extrativistas: Institucionalizando a resistência ',
     'participantes': [{'nome':'Representantes de Comunidades', 'bio':''},{'nome':'Lilian de Carvalho Lindoso', 'bio':'- Analista Ambiental ICMBio, APA Serra da Ibiapaba (CE)'},{'nome':'Cláudia Cunha', 'bio': '- Analista Ambiental ICMBio'},{'nome':'Coordenação Regional (PB)', 'bio': ''},{'nome':'Coord. Sergio Fernandes Freitas', 'bio': 'Analista Ambiental ICMBio, Resex Baia do Iguape (BA)'}],
     'moderadores': [{'nome':'Coord. Sergio Fernandes Freitas', 'bio':'- Analista Ambiental ICMBio, Resex Baia do Iguape (BA)'}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório Instituto de Matemática',
     'titulo':'Geografiando para la resistencia: metodologías críticas para la defensa del território',
     'participantes': [{'nome':'Melissa Moreano', 'bio':'- Colectivo de Geografía Crítica del Ecuador'}],
     'moderadores': [{'nome':'Melissa Moreano', 'bio':'- Colectivo de Geografía Crítica del Ecuador'}]
    }
  ];
  
  public dia20manha10451230:Array<object> = [
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '10:45 - 12:30',
     'instituto':'PAF 5: sala 404',
     'titulo':'Sessão de Trabalhos',
     'participantes': [{'nome':'Por que a participação popular em matéria socioambiental é indispensável ao neoliberalismo? perspectivas a partir do desastre de Mariana/Rio Doce', 'bio':'- Henrique Ribeiro Afonso Domingos, UFOP'},{'nome':'Redes Epistêmicas em Educação do Campo e Ecologia Política da Luta por Hegemonia Territorial em Comunidades Camponesas e Ribeirinhas na Amazônia', 'bio':'- Evandro Medeiros (UNIFESSPA / Doutorando em Educação pela UFPB)'},{'nome':'Vivências subalternas latinoamericanas e as estratégias de re-existência para descolonização do poder', 'bio': '- Raíssa Félix, UFSB'},{'nome':'Subaltern ecologies in the “Indias de por acá”. Grassroots struggles and commoning practices in the urban environment of Naples, Southern Italy', 'bio': '- Roberto Sciarelli, Universidade de Coimbra'}],
     'moderadores': [{'nome':'Guiomar Inez Germani', 'bio':'UFBA'}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '10:45 - 12:30',
     'instituto':'PAF 5: sala 408',
     'titulo':'Sessão de Trabalhos',
     'participantes': [{'nome':'Territórios tradicionais valem ouro? A expansão do extrativismo do ouro à luz da ecologia política – estudos de casos dos projetos de mineração em Paracatu (MG) e Volta  Grande do Xingu (PA)', 'bio':'- Érika Castilho Brasil, Universidade Estácio de Sá'},{'nome':'Paisajes inciertos. Ecología política del turismo en la costa de Oaxaca, Mexico', 'bio':'- Ignacio Rubio Carriquiriborde, Universidad Nacional Autónoma de Mexico'},{'nome':'El turismo como actividad neoextractivista:El caso de la isla de Holbox en APFF de Yum Balam, Quintana Roo, México', 'bio': '- Lidia Ivonne Blásquez Martínez, Universidad Autónoma Metropolitana'},{'nome':'Opará, o rio marcado para morrer', 'bio': '- Flávio José Rocha da Silva, Universidade de São Paulo'}],
     'moderadores': [{'nome':'Iñigo arrazola', 'bio':'- UFBA'}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório 1 - Faculdade de Arquitetura e Urbanismo',
     'titulo':'MOVILIZAR LOS CUERPOS-TERRITORIO : PERFORMANCES REFLEXIVAS PARA LA PRÁCTICA POLÍTICA ',
     'participantes': [{'nome':'Lucrecia Raquel Greco', 'bio':'- Universidade de Buenos Aires'},{'nome':'Armindo Pinto', 'bio':''},{'nome':'Teatro do Oprimido de Salvador', 'bio': ''}],
     'moderadores': [{'nome':'Lucrecia Raquel Greco', 'bio':'- Universidade de Buenos Aires'}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório A do IGEO  - Instituto de Geociências',
     'titulo':'O direito de dizer não: extrativismo e lutas territoriais',
     'participantes': [{'nome':'Milton Sanchez', 'bio':'- Colectivo Guardianas y Guardianes de la Laguna'},{'nome':'Jorge Nahuel', 'bio':'- líder Mapuche, Argentina'},{'nome':'Antônia Mello', 'bio': '- Xingu Vivo'},{'nome':'Kum Tum Gamela', 'bio': '- líder Gamela, Maranhão'},{'nome':'Antenor Vaz', 'bio': '- indigenista'}],
     'moderadores': [{'nome':'', 'bio':''}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório B do IGEO  - Instituto de Geociências',
     'titulo':'Restauração agroecológica e emancipação: a proposta da teia dos povos para o Sul da Bahia',
     'participantes': [{'nome':'Paulo Dimas Rocha De Menezes', 'bio':'- Universidade Federal do Sul da Bahia'},{'nome':'Joelson Ferreira De Oliveira', 'bio':'- Teia dos Povos'},{'nome':'Lanns Alves De Almeida Filho', 'bio': '- Instituto Biofábrica de Cacau'},{'nome':'Pedro Marinho', 'bio': '- Universidade Federal do Rio de Janeiro'}],
     'moderadores': [{'nome':'', 'bio':''}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório externo do Instituto de Biologia',
     'titulo':'Reservas extrativistas: Institucionalizando a resistência ',
     'participantes': [{'nome':'Representantes de Comunidades', 'bio':''},{'nome':'Lilian de Carvalho Lindoso', 'bio':'- Analista Ambiental ICMBio, APA Serra da Ibiapaba (CE)'},{'nome':'Cláudia Cunha', 'bio': '- Analista Ambiental ICMBio'},{'nome':'Coordenação Regional (PB)', 'bio': ''},{'nome':'Coord. Sergio Fernandes Freitas', 'bio': 'Analista Ambiental ICMBio, Resex Baia do Iguape (BA)'}],
     'moderadores': [{'nome':'Coord. Sergio Fernandes Freitas', 'bio':'- Analista Ambiental ICMBio, Resex Baia do Iguape (BA)'}]
    },
    {'imagem':'/assets/image/instituto-biologia.jpeg',
     'hora': '09:00 - 12:30',
     'instituto':'Auditório Instituto de Matemática',
     'titulo':'Geografiando para la resistencia: metodologías críticas para la defensa del território',
     'participantes': [{'nome':'Melissa Moreano', 'bio':'- Colectivo de Geografía Crítica del Ecuador'}],
     'moderadores': [{'nome':'Melissa Moreano', 'bio':'- Colectivo de Geografía Crítica del Ecuador'}]
    }
  ];
  
}
