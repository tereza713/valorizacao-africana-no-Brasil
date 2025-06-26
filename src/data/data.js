import { v4 as uuidv4 } from 'uuid';
// Banco de dados mockado em forma de objeto
export const data = {
  
  personality: [
    {
      id: uuidv4(),
      nome: "Zumbi dos Palmares",
      biografia: "Líder quilombola e símbolo da luta contra a escravidão no Brasil. Zumbi foi fundamental na resistência ao sistema escravocrata e na preservação da liberdade dos negros, principalmente no Quilombo dos Palmares.",
      importancia: "Zumbi é um símbolo da resistência negra e da luta pela liberdade, sendo um ícone na construção da identidade afro-brasileira."
    },
    {
      id: uuidv4(),
      nome: "Machado de Assis",
      biografia: "Fundador da Academia Brasileira de Letras e um dos maiores escritores da literatura brasileira, Machado de Assis nasceu em uma família de ex-escravizados. Sua obra reflete sobre as desigualdades sociais e raciais.",
      importancia: "Machado de Assis desafiou as convenções sociais de sua época e se tornou uma das figuras literárias mais importantes do Brasil, demonstrando a contribuição do negro à cultura brasileira."
    },
    {
      id: uuidv4(),
      nome: "Maria Firmina dos Reis",
      biografia: "Primeira mulher negra escritora do Brasil, autora do livro 'Úrsula', uma obra que retrata a realidade da mulher negra e a resistência contra o sistema escravocrata.",
      importancia: "Maria Firmina dos Reis é uma das pioneiras na literatura brasileira, desafiando as barreiras impostas à mulher negra em um período de forte desigualdade racial."
    }
  ],

  knowledge: [
    {
      id: uuidv4(),
      civilizacao: "Reino do Congo",
      descricao: "Uma das civilizações mais avançadas da África Central, o Reino do Congo teve um sistema político estruturado e uma rica cultura artística e religiosa. Seus líderes eram conhecidos pela diplomacia e pelo respeito às tradições.",
      contribuições: [
        "Avanços na agricultura e no comércio",
        "Riqueza cultural na música, dança e arte",
        "Desenvolvimento de um sistema jurídico e político sofisticado"
      ]
    },
    {
      id: uuidv4(),
      civilizacao: "Império de Mali",
      descricao: "Um dos maiores e mais ricos impérios da história da África, o Império de Mali foi um centro de comércio, educação e cultura. Sua capital, Timbuktu, era famosa por suas universidades e bibliotecas.",
      contribuições: [
        "Contribuições significativas para a educação e a ciência",
        "Desenvolvimento do comércio de ouro e sal",
        "Influência cultural e religiosa no Ocidente africano"
      ]
    },
    {
      id: uuidv4(),
      civilizacao: "Império Zulu",
      descricao: "O Império Zulu, localizado na região sul da África, é conhecido pela sua estrutura militar e resistência contra invasões. Sua cultura rica inclui danças, músicas e um sistema de governo baseado em clãs.",
      contribuições: [
        "Inovações militares e táticas de defesa",
        "Riqueza cultural nas artes e tradições orais",
        "A importância da liderança comunitária e tribal"
      ]
    }
  ],

  religion: [
    {
      id: uuidv4(),
      nome: "Candomblé",
      origem: "Brasil (afro-brasileiro)",
      descricao: "Religião de matriz africana com raízes nas tradições religiosas iorubás, fon e bantus. O Candomblé reverencia os orixás, entidades espirituais que representam forças da natureza e do universo.",
      importancia: "O Candomblé é uma religião que representa a resistência e a preservação da cultura africana no Brasil. Sua prática é uma forma de afirmar identidade e resistência contra o racismo e a intolerância religiosa.",
      preconceitosComuns: [
          "Candomblé é relacionado à feitiçaria ou bruxaria.",
          "Candomblé faz 'trabalhos' para prejudicar pessoas.",
          "Candomblé é uma religião do mal."
        ],
      esclarecimento: [
          "Candomblé é uma religião tradicional que celebra a natureza, a ancestralidade e os orixás — não está ligada à prática de magia para o mal.",
          "Os rituais do Candomblé são voltados ao equilíbrio espiritual e ao bem-estar da comunidade.",
          "A demonização do Candomblé é fruto do racismo e da intolerância religiosa, não de suas práticas reais."
        ]
    },
    {
      id: uuidv4(),
      nome: "Umbanda",
      origem: "Brasil (afro-brasileiro)",
      descricao: "A Umbanda mistura elementos do Candomblé, do espiritismo e do catolicismo, com ênfase na comunicação com os espíritos de ancestrais e orixás. Ela promove a caridade e o respeito entre os seres humanos.",
      importancia: "A Umbanda é uma expressão religiosa que traz à tona a contribuição africana para o espiritismo brasileiro, além de promover uma visão inclusiva de espiritualidade e solidariedade.",
      preconceitosComuns: [
          "Umbanda invoca espíritos malignos.",
          "É uma religião confusa que mistura tudo.",
          "Quem pratica Umbanda está fazendo algo errado espiritualmente."
        ],
      esclarecimento: [
          "Umbanda invoca entidades espirituais que trabalham para o bem, como Pretos Velhos, Caboclos e Crianças.",
          "A diversidade na Umbanda representa inclusão e sincretismo cultural, não desordem.",
          "Umbanda é uma religião reconhecida e baseada em princípios de caridade, amor e equilíbrio espiritual."
        ]
    },
    {
      id: uuidv4(),
      nome: "Quimbanda",
      origem: "Brasil (afro-brasileiro)",
      descricao: "Religião de matriz africana com raízes nos cultos aos antepassados e orixás. A Quimbanda tem sido historicamente marginalizada, mas representa uma forma de resistência contra a opressão e discriminação.",
      importancia: "A Quimbanda é uma tradição religiosa afro-brasileira que serve como uma forma de expressão de poder espiritual e resistência contra a perseguição religiosa.",
      preconceitosComuns: [
          "Quimbanda cultua o diabo.",
          "Quem pratica Quimbanda é perigoso ou faz o mal.",
          "A Quimbanda é 'magia negra'."
        ],
        esclarecimento: [
          "A figura do 'diabo' é uma construção cristã e não existe na teologia tradicional da Quimbanda.",
          "Quimbanda trabalha com entidades como Exus e Pombagiras, que são mal compreendidos, mas têm papéis importantes de justiça, comunicação e equilíbrio.",
          "Associar Quimbanda à 'magia negra' é fruto do preconceito racial e religioso — seus rituais têm significados espirituais profundos e legítimos."
        ]
    }
  ]
};