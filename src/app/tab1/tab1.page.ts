import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

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
     'titulo':'A luta pela manutenção da autonomia comunitária em Juruti Velho, Juruti/PA: o diálogo entre saberes jurídicos acadêmicos e comunitários',
     'participantes': [{'nome':'Lincon Sousa Aguiar', 'bio': ''},{'nome':'UFOP', 'bio': ''}],
     'moderadores': [{'nome':'Luiz Enrique Souza', 'bio':''}]
    },
    {'imagem':'/assets/image/vaolivre-ihac.jpeg',
     'hora': '08:30 - 10:15',
     'instituto':'PAF 5: sala 404',
     'titulo':'A luta pela manutenção da autonomia comunitária em Juruti Velho, Juruti/PA: o diálogo entre saberes jurídicos acadêmicos e comunitários',
     'participantes': [{'nome':'Lincon Sousa Aguiar', 'bio': ''},{'nome':'UFOP', 'bio': ''}],
     'moderadores': [{'nome':'Luiz Enrique Souza', 'bio':''}]
    }
  ];


}
