/**
 * MUNDO RH - Banco de Perguntas e Desafios Didáticos
 * Desenhado para reforçar memorização, recuperação de memória e compreensão prática.
 */

// ==========================================
// 1. CAÇA-PALAVRAS (WORD SEARCH)
// ==========================================
export const WORD_SEARCH_DATA = [
  {
    id: 'ws-1',
    worldId: 'mundo-1',
    word: 'FGTS',
    clue: 'Fundo de Garantia do Tempo de Serviço, depositado mensalmente pela empresa (8%) em conta vinculada na Caixa.',
    explanation: 'O FGTS é um depósito patronal obrigatório que NÃO pode ser descontado do salário do empregado.'
  },
  {
    id: 'ws-2',
    worldId: 'mundo-1',
    word: 'INSS',
    clue: 'Contribuição previdenciária descontada em faixas progressivas que garante aposentadoria e auxílios.',
    explanation: 'O INSS é retido na folha e repassado pela empresa para a Previdência Social via DCTFWeb.'
  },
  {
    id: 'ws-3',
    worldId: 'mundo-1',
    word: 'SALARIO',
    clue: 'Contraprestação monetária mensal paga pelo empregador como retribuição ao trabalho prestado.',
    explanation: 'Conforme o art. 457 da CLT, compreende o valor fixo contratual acrescido de adicionais e comissões.'
  },
  {
    id: 'ws-4',
    worldId: 'mundo-1',
    word: 'HOLERITE',
    clue: 'Documento impresso ou digital que comprova os proventos, descontos e o valor líquido pago ao colaborador.',
    explanation: 'Também chamado de recibo ou contracheque, deve discriminar com clareza cada lançamento da competência.'
  },
  {
    id: 'ws-5',
    worldId: 'mundo-1',
    word: 'DSR',
    clue: 'Descanso Semanal Remunerado de 24 horas consecutivas garantido ao trabalhador sem prejuízo salarial.',
    explanation: 'Quem faz horas extras ou ganha comissões tem direito ao reflexo proporcional do DSR em seu pagamento.'
  },
  {
    id: 'ws-6',
    worldId: 'mundo-2',
    word: 'INSALUBRIDADE',
    clue: 'Adicional de 10%, 20% ou 40% sobre o salário mínimo devido a quem atua exposto a agentes prejudiciais à saúde.',
    explanation: 'Regulamentado pela NR-15, requer laudo pericial (LTCAT) comprovando a nocividade do ambiente.'
  },
  {
    id: 'ws-7',
    worldId: 'mundo-2',
    word: 'PERICULOSIDADE',
    clue: 'Adicional de 30% sobre o salário-base pago a quem enfrenta risco iminente de morte no dia a dia.',
    explanation: 'Previsto na NR-16 para atividades com inflamáveis, eletricidade de alta potência, vigilância armada e motocicletas.'
  },
  {
    id: 'ws-8',
    worldId: 'mundo-3',
    word: 'ENTREVISTA',
    clue: 'Etapa presencial ou online onde recrutadores investigam a trajetória, competências e fit cultural do candidato.',
    explanation: 'A entrevista por competências busca evidências do passado para projetar desempenhos no cargo.'
  },
  {
    id: 'ws-9',
    worldId: 'mundo-3',
    word: 'TRIAGEM',
    clue: 'Filtro inicial de currículos para avaliar a compatibilidade do perfil com os requisitos da vaga.',
    explanation: 'Garante que os candidatos alinhados avancem para testes práticos e conversas aprofundadas.'
  },
  {
    id: 'ws-10',
    worldId: 'mundo-4',
    word: 'CLIMA',
    clue: 'Percepção coletiva que os empregados têm sobre o ambiente, liderança e rotina de trabalho na organização.',
    explanation: 'Medido por pesquisas periódicas (eNPS), reflete a motivação temporária da equipe.'
  },
  {
    id: 'ws-11',
    worldId: 'mundo-5',
    word: 'FERIAS',
    clue: 'Descanso anual remunerado de 30 dias que deve ser pago com um terço constitucional a mais.',
    explanation: 'Adquiridas a cada 12 meses de trabalho (período aquisitivo), devem ser usufruídas nos 12 meses subsequentes.'
  },
  {
    id: 'ws-12',
    worldId: 'mundo-6',
    word: 'RESCISAO',
    clue: 'Término formal do contrato de trabalho com a liquidação de todas as verbas rescisórias no TRCT.',
    explanation: 'A empresa tem o prazo legal de 10 dias corridos para pagar as verbas rescisórias após o desligamento.'
  }
];

// ==========================================
// 2. QUIZ DE MÚLTIPLA ESCOLHA
// ==========================================
export const QUIZ_DATA = [
  {
    id: 'q-1',
    worldId: 'mundo-1',
    question: 'O que significa a sigla DSR na folha de pagamento e qual sua função?',
    options: [
      'Desconto Salarial Remunerado, aplicado a funcionários com faltas injustificadas.',
      'Descanso Semanal Remunerado, direito a 24 horas consecutivas de repouso sem prejuízo do salário.',
      'Documento de Serviço Registrado, utilizado para fins de comprovação no eSocial.',
      'Direito Salarial de Rescisão, pago apenas no momento do desligamento da empresa.'
    ],
    correctIndex: 1,
    explanation: 'DSR é o Descanso Semanal Remunerado (Lei nº 605/49). Além de garantir um dia de folga paga por semana, ele também recebe reflexos proporcionais quando o empregado faz horas extras ou comissões.',
    practicalContext: 'No holerite de quem fez horas extras, o DSR aparecerá como um provento a mais somando ao salário bruto.'
  },
  {
    id: 'q-2',
    worldId: 'mundo-1',
    question: 'Qual é o percentual máximo que a empresa pode descontar do salário-base a título de Vale-transporte?',
    options: [
      'Até 10% do salário bruto total.',
      'Até 6% do salário-base do empregado.',
      'O valor integral que a empresa gastou com as passagens.',
      'Até 20%, nos mesmos moldes do Programa de Alimentação do Trabalhador.'
    ],
    correctIndex: 1,
    explanation: 'A Lei nº 7.418/85 limita o desconto de VT a no máximo 6% do salário-base. Se o custo real for menor do que 6%, desconta-se apenas o custo real. O excedente é subsidiado pela empresa.',
    practicalContext: 'Para um funcionário com salário de R$ 2.000, 6% é R$ 120. Se ele gastar R$ 250 de ônibus, a empresa desconta R$ 120 e arca com R$ 130.'
  },
  {
    id: 'q-3',
    worldId: 'mundo-1',
    question: 'Sobre o FGTS, qual das alternativas está plenamente CORRETA segundo a legislação?',
    options: [
      'É descontado do salário líquido do empregado na alíquota fixa de 8%.',
      'É um encargo patronal obrigatório de 8% depositado pela empresa na Caixa Econômica, sem qualquer desconto do trabalhador.',
      'É retido pela Receita Federal para pagamento do Imposto de Renda anual.',
      'Pode ser substituído por vale-alimentação mediante acordo individual.'
    ],
    correctIndex: 1,
    explanation: 'O FGTS é um depósito mensal de responsabilidade exclusiva do empregador (Lei 8.036/90). Ele nunca pode ser descontado do salário do empregado!',
    practicalContext: 'Aparece no rodapé do holerite apenas para comprovação fiscal de que a base e o recolhimento foram calculados.'
  },
  {
    id: 'q-4',
    worldId: 'mundo-2',
    question: 'Qual a principal diferença entre os adicionais de Insalubridade e Periculosidade?',
    options: [
      'Insalubridade é 30% do salário-base; Periculosidade é calculada sobre o salário mínimo.',
      'Insalubridade compensa danos contínuos à saúde (10%, 20% ou 40% s/ SM); Periculosidade compensa risco iminente de morte (30% s/ salário-base).',
      'Ambos são idênticos e o funcionário pode acumular os dois simultaneamente sem restrição.',
      'Insalubridade é paga apenas a vigilantes armados e periculosidade a médicos.'
    ],
    correctIndex: 1,
    explanation: 'A insalubridade decorre de exposição a agentes nocivos (ruído, frio, químicos) e varia em 10%, 20% ou 40% sobre o salário mínimo. A periculosidade lida com risco letal imediato (inflamáveis, explosivos, eletricidade, motos) e paga 30% sobre o salário-base.',
    practicalContext: 'O art. 193, §2º da CLT veda a cumulação: havendo os dois agentes, o trabalhador deve optar pelo adicional mais vantajoso.'
  },
  {
    id: 'q-5',
    worldId: 'mundo-2',
    question: 'Quais são os percentuais legais para os graus mínimo, médio e máximo de insalubridade segundo a NR-15?',
    options: [
      '5%, 15% e 25%',
      '10%, 20% e 30%',
      '10%, 20% e 40%',
      '15%, 30% e 50%'
    ],
    correctIndex: 2,
    explanation: 'Os graus legais fixados no art. 192 da CLT são: 10% (grau mínimo), 20% (grau médio) e 40% (grau máximo), calculados como regra sobre o Salário Mínimo nacional.',
    practicalContext: 'Exemplo: profissional de enfermagem em enfermaria geral costuma receber grau médio (20%); em setor de isolamento infeccioso, grau máximo (40%).'
  },
  {
    id: 'q-6',
    worldId: 'mundo-3',
    question: 'Em um processo seletivo, qual a diferença entre Hard Skills e Soft Skills?',
    options: [
      'Hard skills são traços de personalidade; Soft skills são cursos universitários.',
      'Hard skills são habilidades técnicas e conhecimentos ensináveis; Soft skills são competências comportamentais e interpessoais.',
      'Hard skills são exigidas apenas de estagiários; Soft skills são exclusivas de diretores.',
      'Não há diferença técnica, são sinônimos de atestado de saúde ocupacional.'
    ],
    correctIndex: 1,
    explanation: 'Hard skills compreendem proficiência em softwares, idiomas, cálculos e legislação. Soft skills envolvem empatia, inteligência emocional, trabalho em equipe e comunicação clara.',
    practicalContext: 'Diz o ditado clássico em RH: "Profissionais são contratados pelas hard skills e demitidos pelas soft skills".'
  },
  {
    id: 'q-7',
    worldId: 'mundo-4',
    question: 'Qual é o principal objetivo do LNT (Levantamento de Necessidades de Treinamento)?',
    options: [
      'Calcular o desconto de faltas na folha de pagamento.',
      'Diagnosticar as lacunas de competências reais da equipe antes de criar cursos sem foco.',
      'Avaliar se um colaborador deve ser demitido imediatamente.',
      'Definir a escala de férias do departamento contábil.'
    ],
    correctIndex: 1,
    explanation: 'O LNT é o mapa diagnóstico de RH: identifica onde estão os gargalos de conhecimento e erros para que o investimento em capacitação traga resultados mensuráveis.',
    practicalContext: 'Sem LNT, a empresa gasta verba em palestras genéricas que não resolvem os problemas diários da operação.'
  },
  {
    id: 'q-8',
    worldId: 'mundo-5',
    question: 'Pela CLT, a partir de quantos empregados no estabelecimento o controle de ponto passa a ser obrigatório?',
    options: [
      'A partir de 5 empregados.',
      'A partir de 10 empregados.',
      'Mais de 20 empregados.',
      'É obrigatório apenas para indústrias com mais de 100 funcionários.'
    ],
    correctIndex: 2,
    explanation: 'Com a Lei da Liberdade Econômica (Lei 13.874/2019), o art. 74, §2º da CLT passou a exigir registro obrigatório de ponto para estabelecimentos com mais de 20 trabalhadores.',
    practicalContext: 'Mesmo abaixo de 20, muitas empresas adotam ponto eletrônico por segurança jurídica para atestar a jornada real.'
  },
  {
    id: 'q-9',
    worldId: 'mundo-5',
    question: 'O 13º Salário deve ser pago obrigatoriamente em duas parcelas. Quais são os prazos máximos legais?',
    options: [
      '1ª parcela até 31 de outubro; 2ª parcela até 15 de dezembro.',
      '1ª parcela até 30 de novembro; 2ª parcela até 20 de dezembro.',
      '1ª parcela até 20 de dezembro; 2ª parcela até 31 de janeiro.',
      'Ambas devem ser pagas juntas no dia do aniversário do funcionário.'
    ],
    correctIndex: 1,
    explanation: 'A 1ª parcela (sem descontos de INSS/IRRF) deve ser paga entre 1º de fevereiro e 30 de novembro. A 2ª parcela (com as deduções tributárias) tem prazo fatal até 20 de dezembro.',
    practicalContext: 'O atraso no pagamento do 13º sujeita o empregador a autuações e multas administrativas pelo Ministério do Trabalho.'
  },
  {
    id: 'q-10',
    worldId: 'mundo-6',
    question: 'Qual é o prazo legal concedido pela CLT para a empresa pagar as verbas rescisórias ao trabalhador desligado?',
    options: [
      'Até o primeiro dia útil após o desligamento.',
      'Até 10 dias corridos a contar do término do contrato de trabalho.',
      'Até 30 dias após a homologação no sindicato.',
      'No 5º dia útil do mês subsequente.'
    ],
    correctIndex: 1,
    explanation: 'Com a Reforma Trabalhista (art. 477, § 6º da CLT), o prazo de pagamento de todas as rescisões foi unificado em até 10 dias corridos após o término do contrato, sob pena de multa de 1 salário em favor do empregado.',
    practicalContext: 'O cumprimento do prazo de 10 dias corridos evita o litígio da multa do art. 477 da CLT na Justiça do Trabalho.'
  }
];

// ==========================================
// 3. COMPLETE A PALAVRA (WORD COMPLETION)
// ==========================================
export const WORD_COMPLETION_DATA = [
  {
    id: 'wc-1',
    worldId: 'mundo-1',
    displayPattern: 'F _ N D O   D E   G _ R A N T I A',
    answer: 'FUNDO DE GARANTIA',
    clue: 'Poupança compulsória mantida pela CEF em benefício do trabalhador contratado sob regime CLT.',
    explanation: 'O Fundo de Garantia (FGTS) é alimentado mensalmente pelo empregador e pode ser sacado na demissão imotivada.'
  },
  {
    id: 'wc-2',
    worldId: 'mundo-1',
    displayPattern: 'H _ R A S   E _ T R A S',
    answer: 'HORAS EXTRAS',
    clue: 'Período trabalhado que excede o limite da jornada diária ou semanal contratada.',
    explanation: 'Em dias comuns, o acréscimo mínimo legal é de 50% sobre o valor da hora normal.'
  },
  {
    id: 'wc-3',
    worldId: 'mundo-2',
    displayPattern: 'P _ R I C U L _ S I D A D E',
    answer: 'PERICULOSIDADE',
    clue: 'Adicional de 30% concedido a eletricistas de alta tensão, frentistas e motoboys.',
    explanation: 'Compensa o perigo iminente de fatalidade decorrente das condições operacionais do trabalho.'
  },
  {
    id: 'wc-4',
    worldId: 'mundo-3',
    displayPattern: 'E N T R _ V I S T A',
    answer: 'ENTREVISTA',
    clue: 'Diálogo estruturado entre recrutador e candidato para avaliar competências e potencial.',
    explanation: 'Pode ser técnica, comportamental ou situacional (investigando vivências reais do profissional).'
  },
  {
    id: 'wc-5',
    worldId: 'mundo-5',
    displayPattern: 'C _ N T R O L E   D E   P _ N T O',
    answer: 'CONTROLE DE PONTO',
    clue: 'Registro fidedigno dos horários de entrada, refeição e saída dos empregados.',
    explanation: 'Obrigatório para empresas com mais de 20 trabalhadores por estabelecimento (Portaria 671/2021).'
  },
  {
    id: 'wc-6',
    worldId: 'mundo-6',
    displayPattern: 'A V I S O   P R _ V I O',
    answer: 'AVISO PREVIO',
    clue: 'Notificação prévia de rescisão contratual com duração de 30 a 90 dias conforme tempo de casa.',
    explanation: 'Pela Lei 12.506/2011, somam-se 3 dias por ano completo trabalhado na mesma organização.'
  }
];

// ==========================================
// 4. VERDADEIRO OU FALSO (TRUE / FALSE)
// ==========================================
export const TRUE_FALSE_DATA = [
  {
    id: 'tf-1',
    worldId: 'mundo-1',
    statement: 'O FGTS é descontado diretamente do salário líquido do empregado todo mês.',
    isTrue: false,
    explanation: 'FALSO! O FGTS (8%) é um encargo 100% patronal pago pela empresa à Caixa Econômica Federal. Ele NUNCA deve ser descontado do salário do trabalhador.'
  },
  {
    id: 'tf-2',
    worldId: 'mundo-1',
    statement: 'A empresa pode descontar até 6% do salário-base do funcionário para o custeio do Vale-transporte.',
    isTrue: true,
    explanation: 'VERDADEIRO! A Lei nº 7.418/85 estipula a coparticipação máxima de 6% sobre o salário-base. Caso a despesa real de passagens seja inferior a 6%, desconta-se somente o gasto real.'
  },
  {
    id: 'tf-3',
    worldId: 'mundo-2',
    statement: 'O trabalhador exposto simultaneamente a produtos químicos corrosivos e inflamáveis pode somar integralmente a insalubridade e a periculosidade no mesmo mês.',
    isTrue: false,
    explanation: 'FALSO! O art. 193, § 2º da CLT e a jurisprudência dominante não permitem a cumulação desses adicionais. O colaborador deve optar pelo que for financeiramente mais vantajoso.'
  },
  {
    id: 'tf-4',
    worldId: 'mundo-2',
    statement: 'O adicional de periculosidade corresponde a 30% calculado sobre o salário-base do empregado.',
    isTrue: true,
    explanation: 'VERDADEIRO! Diferente da insalubridade (que via de regra incide no salário mínimo), a periculosidade incide sempre em 30% sobre o salário-base do trabalhador (art. 193, § 1º da CLT).'
  },
  {
    id: 'tf-5',
    worldId: 'mundo-5',
    statement: 'O 13º salário pode ser pago em até três parcelas caso o empregador deseje dividir o custo.',
    isTrue: false,
    explanation: 'FALSO! A Lei 4.090/62 e a Lei 4.749/65 determinam o pagamento em exatamente duas parcelas (1ª até 30 de novembro e 2ª até 20 de dezembro).'
  },
  {
    id: 'tf-6',
    worldId: 'mundo-6',
    statement: 'Na demissão sem justa causa, o empregado tem direito a sacar o saldo do FGTS e receber 40% de multa rescisória sobre todos os depósitos daquele contrato.',
    isTrue: true,
    explanation: 'VERDADEIRO! A demissão imotivada por iniciativa da empresa confere direito pleno ao saque do FGTS acrescido da multa indenizatória de 40% calculada sobre o saldo total depositado.'
  },
  {
    id: 'tf-7',
    worldId: 'mundo-6',
    statement: 'Em caso de pedido de demissão voluntário, o trabalhador pode sacar o FGTS e habilitar-se no seguro-desemprego.',
    isTrue: false,
    explanation: 'FALSO! Ao pedir demissão espontaneamente, o colaborador abre mão do saque do FGTS, da multa de 40% e do benefício do seguro-desemprego.'
  },
  {
    id: 'tf-8',
    worldId: 'mundo-4',
    statement: 'Clima Organizacional e Cultura Organizacional são termos exatamente iguais na gestão de RH.',
    isTrue: false,
    explanation: 'FALSO! O Clima é a percepção temporária e volátil do ambiente (a "temperatura" da empresa). A Cultura é profunda, composta por valores e crenças enraizadas (o "DNA" da organização).'
  }
];

// ==========================================
// 5. LIGUE OS CONCEITOS (MATCHING PAIRS)
// ==========================================
export const MATCHING_DATA = [
  {
    id: 'm-set-1',
    worldId: 'mundo-1',
    title: 'Conceitos de Folha de Pagamento',
    pairs: [
      { id: 'p1', left: 'DSR', right: 'Descanso Semanal Remunerado com reflexo em horas extras' },
      { id: 'p2', left: 'INSS', right: 'Contribuição previdenciária descontada em alíquotas progressivas' },
      { id: 'p3', left: 'FGTS', right: 'Depósito patronal de 8% em conta vinculada na Caixa Econômica' },
      { id: 'p4', left: 'Salário Líquido', right: 'Valor final creditado em conta após proventos menos descontos' }
    ]
  },
  {
    id: 'm-set-2',
    worldId: 'mundo-2',
    title: 'Adicionais e Condições de Risco',
    pairs: [
      { id: 'p5', left: 'Insalubridade Mínima', right: 'Adicional de 10% sobre o salário mínimo' },
      { id: 'p6', left: 'Insalubridade Média', right: 'Adicional de 20% sobre o salário mínimo' },
      { id: 'p7', left: 'Insalubridade Máxima', right: 'Adicional de 40% sobre o salário mínimo' },
      { id: 'p8', left: 'Periculosidade', right: 'Adicional de 30% sobre o salário-base por risco de morte' }
    ]
  },
  {
    id: 'm-set-3',
    worldId: 'mundo-5',
    title: 'Rotinas e Direitos do Departamento Pessoal',
    pairs: [
      { id: 'p9', left: '13º Salário - 1ª Parcela', right: 'Pago até 30 de novembro sem descontos' },
      { id: 'p10', left: '13º Salário - 2ª Parcela', right: 'Pago até 20 de dezembro com INSS e IRRF' },
      { id: 'p11', left: 'Terço Constitucional', right: 'Acréscimo de 1/3 pago obrigatoriamente sobre as férias' },
      { id: 'p12', left: 'Ponto Obrigatório', right: 'Estabelecimentos com mais de 20 funcionários' }
    ]
  },
  {
    id: 'm-set-4',
    worldId: 'mundo-6',
    title: 'Rescisões e Prazos',
    pairs: [
      { id: 'p13', left: 'Prazo de Quitação Rescisória', right: 'Até 10 dias corridos após o término do contrato' },
      { id: 'p14', left: 'Multa Rescisória de 40%', right: 'Devida exclusivamente na demissão sem justa causa' },
      { id: 'p15', left: 'Aviso Prévio Proporcional', right: '30 dias + 3 dias por ano trabalhado (até 90 dias)' },
      { id: 'p16', left: 'Justa Causa (Art. 482 CLT)', right: 'Perda do aviso prévio, 13º proporcional e FGTS' }
    ]
  }
];

// ==========================================
// 6. DESAFIO RELÂMPAGO (BLITZ QUESTIONS)
// ==========================================
export const BLITZ_DATA = [
  {
    id: 'b-1',
    question: 'O FGTS é descontado do salário do trabalhador?',
    options: ['Sim, 8%', 'Não, é 100% patronal'],
    correctIndex: 1,
    timeLimit: 10
  },
  {
    id: 'b-2',
    question: 'Qual percentual do salário-base a empresa pode descontar de Vale-transporte?',
    options: ['Até 6%', 'Até 12%'],
    correctIndex: 0,
    timeLimit: 10
  },
  {
    id: 'b-3',
    question: 'A periculosidade é calculada sobre qual base?',
    options: ['Salário Mínimo', 'Salário-base do contrato'],
    correctIndex: 1,
    timeLimit: 10
  },
  {
    id: 'b-4',
    question: 'Qual o prazo legal para a empresa pagar as verbas rescisórias?',
    options: ['10 dias corridos', '30 dias úteis'],
    correctIndex: 0,
    timeLimit: 10
  },
  {
    id: 'b-5',
    question: 'A partir de quantos funcionários o ponto é obrigatório pela CLT?',
    options: ['Mais de 20 funcionários', 'A partir de 50'],
    correctIndex: 0,
    timeLimit: 10
  },
  {
    id: 'b-6',
    question: 'Qual a multa rescisória do FGTS na demissão sem justa causa?',
    options: ['20%', '40%'],
    correctIndex: 0, // wait! 40% is index 1! Let's make options ['20%', '40%'] with correctIndex: 1
    options: ['20%', '40%'],
    correctIndex: 1,
    timeLimit: 10
  }
];
