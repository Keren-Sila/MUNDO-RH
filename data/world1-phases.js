/**
 * MUNDO RH - Fases Detalhadas do Mundo 01: Folha de Pagamento
 * Baseado rigorosamente nos 6 materiais das aulas:
 * Aula 1: Salário mensal, diário e DSR
 * Aula 2: Horas extras e DSR das horas extras
 * Aula 3: Adicional noturno e comissões
 * Aula 4: Adicional de insalubridade e periculosidade
 * Aula 5: Descontos na folha (INSS, IRRF, VT, Faltas)
 * Aula 6: Relatório de ponto, quadro de horários e escala de revezamento
 *
 * Cada fase segue o ciclo pedagógico de 5 etapas:
 * 1. Aprenda (Conceitos, fórmulas e situações práticas)
 * 2. Memorize (Fixação com palavras-chave e associações)
 * 3. Pratique (Casos reais com explicação completa pós-resposta)
 * 4. Calcule (Resolução matemática passo a passo)
 * 5. Desafio Final (Integração e desbloqueio da fase seguinte)
 */

export const WORLD1_PHASES = [
  // ==========================================
  // FASE 1: SALÁRIO MENSAL, DIÁRIO E DSR
  // ==========================================
  {
    id: 'fase-1',
    number: 1,
    title: 'Salário Mensal, Diário e DSR',
    subtitle: 'Base da Remuneração, Divisores e o Repouso Semanal',
    icon: '💵',
    color: '#8b5cf6',
    requiredLevel: 1,
    summary: 'Aprenda a calcular o salário diário e horário do mensalista (divisor de 30 dias e 220h) e o funcionamento do Descanso Semanal Remunerado.',
    
    // 1. APRENDA
    learn: {
      intro: 'O salário é a contraprestação devida pelo empregador ao empregado pelo tempo à disposição e serviço prestado (art. 457 da CLT). Para o empregado mensalista, o cálculo adota convenções universais fundamentais.',
      keyPoints: [
        {
          title: 'Divisor Mensal Padrão (30 Dias)',
          desc: 'Para o empregado mensalista, todo mês é considerado comercialmente como tendo 30 dias para fins de salário diário, seja fevereiro (28/29 dias) ou meses de 31 dias.',
          formula: 'Salário Diário = Salário Mensal ÷ 30'
        },
        {
          title: 'Divisor de Horas (220 Horas)',
          desc: 'Para uma jornada padrão de 44 horas semanais, utiliza-se o divisor 220 para encontrar o valor da hora de trabalho (44h ÷ 6 dias úteis x 30 dias = 220h).',
          formula: 'Valor da Hora = Salário Mensal ÷ 220'
        },
        {
          title: 'Descanso Semanal Remunerado (DSR)',
          desc: 'Direito constitucional a 24 horas consecutivas de repouso por semana (preferencialmente aos domingos) sem prejuízo do salário. No salário do mensalista, o DSR já está incluso nos 30 dias de remuneração!',
          formula: 'Mensalista: DSR já embutido no salário fixo mensal.'
        }
      ],
      practicalExample: 'Uma colaboradora com salário de R$ 2.400,00 recebe R$ 80,00 por dia trabalhado (R$ 2.400 ÷ 30) e R$ 10,91 por hora contratual (R$ 2.400 ÷ 220).'
    },

    // 2. MEMORIZE
    memorize: {
      word: 'DSR',
      clue: 'Sigla do repouso semanal remunerado garantido por lei federal ao trabalhador.',
      explanation: 'Descanso Semanal Remunerado (Lei 605/49). Para mensalistas já está incluso no salário; para comissionistas e horas extras, gera reflexo a receber.',
      matchingPairs: [
        { left: 'Divisor Salário Diário', right: '30 dias (padrão mensalista)' },
        { left: 'Divisor Valor da Hora', right: '220 horas (jornada de 44h semanais)' },
        { left: 'DSR do Mensalista', right: 'Já está embutido nos 30 dias de salário' }
      ]
    },

    // 3. PRATIQUE
    practice: [
      {
        id: 'f1-p1',
        question: 'Por que o empregado mensalista que ganha salário fixo recebe o mesmo valor em fevereiro (28 dias) e em março (31 dias)?',
        options: [
          'Porque a empresa faz um desconto especial em fevereiro para compensar março.',
          'Porque a legislação adota o mês comercial padrão de 30 dias para o mensalista, independentemente do número de dias no calendário civil.',
          'Porque fevereiro é considerado feriado nacional prolongado.',
          'Porque o funcionário trabalha horas extras obrigatórias em fevereiro.'
        ],
        correctIndex: 1,
        explanation: 'Pela CLT (art. 64), o salário do mensalista corresponde a 30 dias de remuneração, independentemente de o mês ter 28, 29, 30 ou 31 dias.',
        context: 'Isso simplifica a folha e garante estabilidade orçamentária ao trabalhador.'
      },
      {
        id: 'f1-p2',
        statement: 'O valor do DSR precisa ser pago como uma linha a mais separada no holerite para todo trabalhador mensalista que recebe apenas o salário fixo.',
        isTrue: false,
        explanation: 'FALSO! No caso do empregado mensalista que recebe salário fixo, o DSR já está integralmente remunerado dentro dos 30 dias contratuais. Ele só aparece separado quando há horas extras ou comissões!'
      }
    ],

    // 4. CALCULE
    calculate: {
      problem: 'Uma colaboradora foi contratada como Analista de DP com salário mensal de R$ 2.400,00 para cumprir a jornada legal padrão de 44 horas semanais. Calcule o seu salário diário e o valor da sua hora normal de trabalho.',
      steps: [
        'Passo 1: Para calcular o salário diário, dividimos o salário mensal por 30 dias: R$ 2.400,00 ÷ 30 = R$ 80,00.',
        'Passo 2: Para calcular o valor da hora normal na jornada padrão de 44h semanais, usamos o divisor 220: R$ 2.400,00 ÷ 220 = R$ 10,91.',
        'Resultado: Salário diário = R$ 80,00 | Valor da hora normal = R$ 10,91.'
      ],
      question: 'Considerando a colaboradora acima, se ela for admitida no dia 16 de um mês comercial e trabalhar 15 dias, quanto receberá de saldo de salário?',
      options: [
        'R$ 800,00',
        'R$ 1.200,00 (15 dias x R$ 80,00)',
        'R$ 1.500,00',
        'R$ 1.000,00'
      ],
      correctIndex: 1,
      explanation: 'Multiplica-se o salário diário (R$ 80,00) pelo número de dias trabalhados (15 dias): R$ 80,00 x 15 = R$ 1.200,00.'
    },

    // 5. DESAFIO FINAL
    finalChallenge: {
      title: 'Desafio Integrador — Fechamento da Fase 1',
      question: 'Um funcionário com salário de R$ 3.300,00 mensais (divisor 220) realizou uma consulta médica de rotina que atrasou 3 horas de sua jornada, sem atestado justificativo. Qual o valor correspondente a essas 3 horas não trabalhadas?',
      options: [
        'R$ 45,00 (R$ 15,00/h x 3 horas)',
        'R$ 30,00',
        'R$ 60,00',
        'R$ 90,00'
      ],
      correctIndex: 0,
      explanation: 'Valor da hora: R$ 3.300 ÷ 220 = R$ 15,00. Três horas atrasadas equivalem a 3 x R$ 15,00 = R$ 45,00 de desconto.',
      xpReward: 100,
      gemsReward: 30
    }
  },

  // ==========================================
  // FASE 2: HORAS EXTRAS E DSR DAS HORAS EXTRAS
  // ==========================================
  {
    id: 'fase-2',
    number: 2,
    title: 'Horas Extras e Reflexo no DSR',
    subtitle: 'Adicionais de 50%, 100% e a Fórmula da Lei 605/49',
    icon: '⏱️',
    color: '#06b6d4',
    requiredLevel: 1,
    summary: 'Domine o cálculo do acréscimo legal de horas extras (50% e 100%) e aprenda a aplicar a fórmula exata do reflexo no DSR.',
    
    // 1. APRENDA
    learn: {
      intro: 'A jornada normal de trabalho pode ser acrescida de horas suplementares em número não excedente de 2 horas diárias (art. 59 da CLT).',
      keyPoints: [
        {
          title: 'Adicional de Horas Extras em Dias Úteis (50%)',
          desc: 'A hora extra trabalhada em dias úteis (segunda a sábado) deve ser remunerada com acréscimo mínimo de 50% sobre o valor da hora normal (CF art. 7º, XVI).',
          formula: 'Hora Extra 50% = Valor da Hora Normal x 1,5'
        },
        {
          title: 'Horas Extras em Domingos e Feriados (100%)',
          desc: 'Quando o colaborador é convocado para trabalhar em domingos ou feriados civis/religiosos sem folga compensatória, a hora é remunerada em dobro (adicional de 100%).',
          formula: 'Hora Extra 100% = Valor da Hora Normal x 2,0'
        },
        {
          title: 'Reflexo Obrigatório no DSR (Súmula 172 do TST)',
          desc: 'As horas extras habituais integram a remuneração para todos os efeitos e geram reflexo financeiro proporcional sobre os dias de descanso semanal e feriados.',
          formula: 'DSR s/ HE = (Total em R$ de Horas Extras ÷ Dias Úteis) x Domingos e Feriados'
        }
      ],
      practicalExample: 'Com salário-base de R$ 2.200 (hora normal R$ 10,00), a hora extra 50% vale R$ 15,00. Se fizer 10 horas extras no mês com 25 dias úteis e 5 domingos/feriados: Horas extras = R$ 150,00; DSR = (R$ 150 ÷ 25) x 5 = R$ 30,00.'
    },

    // 2. MEMORIZE
    memorize: {
      word: 'EXTRAS',
      clue: 'Horas trabalhadas além do expediente habitual que recebem adicional de no mínimo 50%.',
      explanation: 'As horas extras compensam o esforço além do contrato e incidem no FGTS, INSS, 13º e férias.',
      matchingPairs: [
        { left: 'Hora Extra em Dia Útil', right: 'Acréscimo mínimo de 50% (Hora x 1,5)' },
        { left: 'Hora em Domingo/Feriado', right: 'Acréscimo de 100% (Hora x 2,0)' },
        { left: 'Fórmula do DSR s/ Horas Extras', right: '(Valor das Horas Extras ÷ Dias Úteis) x DSRs' }
      ]
    },

    // 3. PRATIQUE
    practice: [
      {
        id: 'f2-p1',
        question: 'Por que o empregador não pode simplesmente pagar as horas extras sem calcular o DSR sobre elas?',
        options: [
          'Porque a lei federal nº 605/49 e a Súmula 172 do TST obrigam o reflexo das horas extras habituais no descanso semanal.',
          'Porque o DSR substitui o pagamento do vale-transporte.',
          'Porque o funcionário pode ser multado pela Receita Federal se não receber o DSR.',
          'Porque o sindicato exige o cancelamento das férias de quem não recebe o DSR.'
        ],
        correctIndex: 0,
        explanation: 'A Lei 605/49 assegura o repouso remunerado e determina que remunerações variáveis como horas extras também valorizem o dia de descanso da semana.',
        context: 'A ausência do DSR sobre horas extras é um dos passivos trabalhistas mais frequentes na Justiça do Trabalho.'
      },
      {
        id: 'f2-p2',
        statement: 'O adicional constitucional mínimo para horas extras prestadas de segunda a sábado é de 20%.',
        isTrue: false,
        explanation: 'FALSO! O adicional mínimo constitucional é de 50% (art. 7º, XVI da CF/88). Adicional de 20% é o mínimo para o trabalho noturno urbano!'
      }
    ],

    // 4. CALCULE
    calculate: {
      problem: 'O funcionário Marcos tem salário-base de R$ 3.300,00 para 220 horas mensais. No mês de outubro, realizou 12 horas extras com adicional de 50%. O mês teve 26 dias úteis e 5 dias de repouso (domingos e feriados). Calcule o valor das horas extras e o DSR correspondente.',
      steps: [
        'Passo 1: Calcular a hora normal: R$ 3.300 ÷ 220 = R$ 15,00/hora.',
        'Passo 2: Calcular a hora extra 50%: R$ 15,00 x 1,5 = R$ 22,50/hora extra.',
        'Passo 3: Multiplicar por 12 horas: 12 x R$ 22,50 = R$ 270,00 de Horas Extras.',
        'Passo 4: Calcular o DSR: (R$ 270,00 ÷ 26 dias úteis) x 5 domingos/feriados = R$ 10,38 x 5 = R$ 51,92.',
        'Resultado total a receber a mais: R$ 270,00 (HE) + R$ 51,92 (DSR) = R$ 321,92.'
      ],
      question: 'Qual foi o valor total das 12 horas extras 50% antes de somar o DSR?',
      options: [
        'R$ 180,00',
        'R$ 270,00 (12h x R$ 22,50)',
        'R$ 300,00',
        'R$ 225,00'
      ],
      correctIndex: 1,
      explanation: 'A hora normal é R$ 15,00. Com 50%, custa R$ 22,50. Multiplicada por 12 horas, totaliza R$ 270,00.'
    },

    // 5. DESAFIO FINAL
    finalChallenge: {
      title: 'Desafio Integrador — Fechamento da Fase 2',
      question: 'Se um colaborador precisou trabalhar durante todo o expediente de um domingo de feriado nacional (8 horas completas) sem folga compensatória em outro dia da semana, com salário-base de R$ 2.200 (hora R$ 10,00), quanto ele deve receber apenas por esse dia trabalhado?',
      options: [
        'R$ 80,00 (adicional de 0%)',
        'R$ 120,00 (adicional de 50%)',
        'R$ 160,00 (adicional de 100%: 8h x R$ 20,00)',
        'R$ 200,00'
      ],
      correctIndex: 2,
      explanation: 'Trabalho em domingo/feriado sem folga compensatória é pago a 100% (o dobro da hora normal): R$ 10,00 x 2 = R$ 20,00/hora. Multiplicado por 8 horas = R$ 160,00.',
      xpReward: 120,
      gemsReward: 35
    }
  },

  // ==========================================
  // FASE 3: ADICIONAL NOTURNO E COMISSÕES
  // ==========================================
  {
    id: 'fase-3',
    number: 3,
    title: 'Adicional Noturno e Comissões',
    subtitle: 'Horário das 22h às 5h, Hora Ficta e a Remuneração Variável',
    icon: '🌙',
    color: '#3b82f6',
    requiredLevel: 2,
    summary: 'Compreenda a hora noturna reduzida (52 minutos e 30 segundos), o adicional mínimo de 20% e os reflexos das comissões no holerite.',
    
    // 1. APRENDA
    learn: {
      intro: 'O trabalho noturno causa desgaste biológico e social maior, por isso a CLT estabelece duas proteções essenciais para trabalhadores urbanos (art. 73 da CLT).',
      keyPoints: [
        {
          title: 'Adicional Noturno Urbano (20%)',
          desc: 'Para trabalhadores urbanos, o trabalho prestado entre 22h de um dia e 5h do dia seguinte tem acréscimo mínimo obrigatório de 20% sobre a hora diurna.',
          formula: 'Valor da Hora Noturna = Valor da Hora Normal x 1,20'
        },
        {
          title: 'Hora Noturna Reduzida (Hora Ficta de 52m30s)',
          desc: 'A cada 52 minutos e 30 segundos trabalhados no relógio durante a noite, a CLT computa como se fosse 1 hora inteira de trabalho (fator 60 ÷ 52,5 = 1,142857). 7 horas no relógio equivalem a 8 horas trabalhadas!',
          formula: 'Horas Noturnas Computadas = Horas de Relógio x (60 ÷ 52,5)'
        },
        {
          title: 'Comissões e DSR',
          desc: 'Comissões são parcelas variáveis sobre vendas ou metas. Por serem de natureza salarial, também geram reflexo obrigatório no DSR e incidem no INSS e FGTS.',
          formula: 'DSR s/ Comissões = (Total de Comissões ÷ Dias Úteis) x Domingos/Feriados'
        }
      ],
      practicalExample: 'Um porteiro que cumpre jornada das 22h às 5h trabalha 7 horas cronometradas, mas recebe o equivalente a 8 horas noturnas remuneradas com 20% a mais.'
    },

    // 2. MEMORIZE
    memorize: {
      word: 'NOTURNO',
      clue: 'Adicional pago ao trabalho realizado no período compreendido entre 22h e 5h.',
      explanation: 'O adicional noturno de 20% compensa o desgaste biológico do trabalho em período de sono natural.',
      matchingPairs: [
        { left: 'Horário Noturno Urbano', right: 'Das 22:00 de um dia até as 05:00 do dia seguinte' },
        { left: 'Adicional Noturno Urbano', right: 'No mínimo 20% sobre a hora diurna normal' },
        { left: 'Duração da Hora Noturna', right: '52 minutos e 30 segundos (hora ficta reduzida)' }
      ]
    },

    // 3. PRATIQUE
    practice: [
      {
        id: 'f3-p1',
        question: 'Se um trabalhador urbano cumpre jornada exatamente das 22h00 de uma noite até as 05h00 da manhã seguinte, quantas horas ele trabalhou no relógio e quantas horas devem ser computadas no holerite?',
        options: [
          '7 horas no relógio e exatamente 7 horas no holerite.',
          '7 horas no relógio, mas 8 horas computadas no holerite devido à hora noturna reduzida de 52m30s.',
          '8 horas no relógio e 10 horas no holerite.',
          '6 horas no relógio com 1 hora de desconto obrigatório.'
        ],
        correctIndex: 1,
        explanation: 'De 22h às 5h são 7 horas físicas. Dividindo 7h por 52,5 minutos (ou multiplicando por 60/52,5), obtém-se exatamente 8 horas noturnas computadas.',
        context: 'Esta redução está expressa no art. 73, § 1º da CLT.'
      },
      {
        id: 'f3-p2',
        statement: 'As comissões pagas habitualmente pela empresa a um vendedor não geram nenhum tipo de reflexo no Descanso Semanal Remunerado (DSR).',
        isTrue: false,
        explanation: 'FALSO! Conforme a Súmula 27 do TST, o comissionista tem direito ao reflexo do DSR sobre as comissões auferidas no mês.'
      }
    ],

    // 4. CALCULE
    calculate: {
      problem: 'Uma recepcionista de hotel tem salário-base de R$ 2.200,00 mensais (hora normal = R$ 10,00). No mês, ela trabalhou 40 horas noturnas já computadas. Calcule o valor total que ela deve receber a título de Adicional Noturno.',
      steps: [
        'Passo 1: Identificar a hora normal: R$ 10,00.',
        'Passo 2: Calcular o valor do adicional de 20%: R$ 10,00 x 0,20 = R$ 2,00 por hora noturna.',
        'Passo 3: Multiplicar pelo número de horas noturnas computadas: 40 horas x R$ 2,00 = R$ 80,00.',
        'Resultado: Adicional noturno a receber no holerite = R$ 80,00.'
      ],
      question: 'Qual o valor que a recepcionista receberá de adicional noturno pelas 40 horas?',
      options: [
        'R$ 40,00',
        'R$ 80,00 (40h x R$ 2,00)',
        'R$ 120,00',
        'R$ 200,00'
      ],
      correctIndex: 1,
      explanation: 'O adicional de 20% sobre a hora de R$ 10,00 é R$ 2,00. Para 40 horas noturnas: 40 x R$ 2,00 = R$ 80,00.'
    },

    // 5. DESAFIO FINAL
    finalChallenge: {
      title: 'Desafio Integrador — Fechamento da Fase 3',
      question: 'Se um funcionário que trabalha à noite faz horas extras após as 22h, como devem ser calculados os adicionais?',
      options: [
        'Ele recebe apenas a hora extra de 50%, perdendo o adicional noturno.',
        'Ele recebe a hora normal acumulada com o adicional noturno (20%) e sobre esse valor aplica-se o adicional de hora extra (50%).',
        'Ele deve escolher qual dos dois adicionais deseja receber.',
        'O adicional noturno é reduzido para 5% se houver horas extras.'
      ],
      correctIndex: 1,
      explanation: 'Conforme a OJ 97 da SDI-1 do TST, o adicional noturno integra a base de cálculo da hora extra noturna!',
      xpReward: 130,
      gemsReward: 40
    }
  },

  // ==========================================
  // FASE 4: INSALUBRIDADE E PERICULOSIDADE
  // ==========================================
  {
    id: 'fase-4',
    number: 4,
    title: 'Insalubridade e Periculosidade',
    subtitle: 'Riscos à Saúde vs Risco Letal, Bases de Cálculo e NRs',
    icon: '🛡️',
    color: '#10b981',
    requiredLevel: 2,
    summary: 'Aprenda a diferenciar claramente danos contínuos à saúde de perigo letal imediato, aplicando os percentuais de 10%, 20%, 40% e 30%.',
    
    // 1. APRENDA
    learn: {
      intro: 'A legislação trabalhista protege o trabalhador exposto a riscos ambientais garantindo adicionais de compensação (arts. 189 a 197 da CLT).',
      keyPoints: [
        {
          title: 'Adicional de Insalubridade (NR-15)',
          desc: 'Devido ao trabalho com agentes físicos (ruído contínuo, calor excessivo), químicos (solventes, ácidos) ou biológicos (vírus, bactérias, esgoto) acima do limite de tolerância. Incide sobre o Salário Mínimo nacional!',
          formula: 'Mínimo = 10% s/ SM | Médio = 20% s/ SM | Máximo = 40% s/ SM'
        },
        {
          title: 'Adicional de Periculosidade (NR-16)',
          desc: 'Devido ao trabalho que coloca em risco iminente a vida do colaborador: inflamáveis, explosivos, alta tensão elétrica, segurança patrimonial armada e atividades com moto. Incide SEMPRE sobre o Salário-base!',
          formula: 'Periculosidade = 30% s/ Salário-base contratual'
        },
        {
          title: 'Regra de Não-Cumulatividade (Art. 193, §2º da CLT)',
          desc: 'Mesmo que o trabalhador atue exposto simultaneamente a produtos químicos e risco de explosão, ele NÃO pode acumular os dois adicionais. Deve optar pelo financeiramente mais vantajoso.',
          formula: 'Trabalhador opta pelo mais vantajoso (ou regra específica de CCT).'
        }
      ],
      practicalExample: 'Com Salário Mínimo de R$ 1.412,00: Insalubridade Média (20%) = R$ 282,40. Um eletricista de alta tensão com salário de R$ 3.000,00 recebe 30% de periculosidade = R$ 900,00.'
    },

    // 2. MEMORIZE
    memorize: {
      word: 'INSALUBRE',
      clue: 'Ambiente ou atividade que expõe o trabalhador a agentes nocivos à saúde acima dos limites legais.',
      explanation: 'Classificado em graus mínimo (10%), médio (20%) e máximo (40%) pela NR-15.',
      matchingPairs: [
        { left: 'Insalubridade Grau Médio', right: '20% calculado sobre o Salário Mínimo' },
        { left: 'Adicional de Periculosidade', right: '30% calculado sobre o Salário-base' },
        { left: 'Não-Cumulatividade', right: 'Trabalhador deve optar entre insalubridade ou periculosidade' }
      ]
    },

    // 3. PRATIQUE
    practice: [
      {
        id: 'f4-p1',
        question: 'Sobre qual base de cálculo recai o Adicional de Periculosidade de 30% segundo o art. 193, § 1º da CLT?',
        options: [
          'Sobre o Salário Mínimo nacional vigente.',
          'Sobre o Salário-base contratual do empregado (sem acréscimo de outros adicionais).',
          'Sobre o salário líquido após desconto de INSS e IRRF.',
          'Sobre o total de vendas do mês da empresa.'
        ],
        correctIndex: 1,
        explanation: 'O adicional de periculosidade incide exclusivamente em 30% sobre o salário-base estipulado no contrato de trabalho, não sobre o salário mínimo.',
        context: 'Isso valoriza significativamente os profissionais de maior qualificação expostos ao risco letal.'
      },
      {
        id: 'f4-p2',
        statement: 'A exposição ao ruído contínuo gerado por maquinário de fábrica em nível acima do limite de tolerância caracteriza periculosidade.',
        isTrue: false,
        explanation: 'FALSO! Ruído contínuo agride a audição gradativamente ao longo do tempo, caracterizando INSALUBRIDADE física pela NR-15, e não periculosidade!'
      }
    ],

    // 4. CALCULE
    calculate: {
      problem: 'Um técnico de segurança do trabalho analisa o holerite de um motoboy que faz entregas na cidade com salário-base de R$ 2.500,00. Pela Lei 12.997/14 (NR-16), o uso de motocicleta em vias públicas confere adicional de periculosidade. Quanto ele deve receber a título deste adicional?',
      steps: [
        'Passo 1: Identificar a base de cálculo: Salário-base = R$ 2.500,00.',
        'Passo 2: Identificar a alíquota da periculosidade: 30%.',
        'Passo 3: Multiplicar a base pela alíquota: R$ 2.500,00 x 0,30 = R$ 750,00.',
        'Resultado: Adicional de periculosidade = R$ 750,00.'
      ],
      question: 'Qual o valor do adicional de periculosidade do motoboy?',
      options: [
        'R$ 423,60 (calculado sobre o salário mínimo)',
        'R$ 750,00 (30% sobre R$ 2.500,00)',
        'R$ 500,00',
        'R$ 1.000,00'
      ],
      correctIndex: 1,
      explanation: '30% sobre o salário-base de R$ 2.500,00 resulta em exatos R$ 750,00 mensais a título de periculosidade.'
    },

    // 5. DESAFIO FINAL
    finalChallenge: {
      title: 'Desafio Integrador — Fechamento da Fase 4',
      question: 'Um funcionário tem salário-base de R$ 1.800,00. Ele trabalha em setor que confere insalubridade média (20% sobre SM de R$ 1.412 = R$ 282,40) e também manipula botijões de gás inflamável (periculosidade 30% sobre R$ 1.800 = R$ 540,00). Por lei, quanto ele receberá de adicional?',
      options: [
        'R$ 822,40 (a soma dos dois adicionais)',
        'R$ 540,00 (pois deve optar pelo mais vantajoso, no caso a periculosidade)',
        'R$ 282,40 (pois a insalubridade é prioritária)',
        'Nenhum dos dois, pois um anula o outro'
      ],
      correctIndex: 1,
      explanation: 'Pela regra de não-cumulatividade (CLT art. 193, §2º), o trabalhador opta pelo mais vantajoso: R$ 540,00 de periculosidade.',
      xpReward: 140,
      gemsReward: 45
    }
  },

  // ==========================================
  // FASE 5: DESCONTOS NA FOLHA
  // ==========================================
  {
    id: 'fase-5',
    number: 5,
    title: 'Descontos na Folha de Pagamento',
    subtitle: 'INSS Progressivo, IRRF, Vale-transporte e Faltas/DSR',
    icon: '📉',
    color: '#ef4444',
    requiredLevel: 3,
    summary: 'Aprenda as regras de retenção obrigatória de INSS por faixas, apuração de IRRF com deduções, limite de 6% no Vale-transporte e o impacto das faltas.',
    
    // 1. APRENDA
    learn: {
      intro: 'Descontos são deduções efetuadas na remuneração bruta do colaborador, autorizadas por lei, ordem judicial ou convenção coletiva.',
      keyPoints: [
        {
          title: 'INSS Progressivo (Reforma da Previdência)',
          desc: 'Desde a Emenda Constitucional 103/2019, o desconto do INSS não é mais sobre o valor total com alíquota única: ele é fatiado progressivamente por faixas salariais (7,5%, 9%, 12% e 14%) até o teto do INSS.',
          formula: 'Calculado faixa a faixa ou com tabela oficial da Previdência Social.'
        },
        {
          title: 'Vale-transporte (Regra dos 6%)',
          desc: 'A empresa pode descontar até 6% do salário-base do colaborador (Lei 7.418/85). Se o gasto real de passagens for inferior a 6%, desconta-se somente o custo real!',
          formula: 'Desconto VT = Menor valor entre (Salário-base x 6%) e (Gasto Real em passagens)'
        },
        {
          title: 'Faltas Injustificadas e Perda do DSR',
          desc: 'Uma única falta injustificada durante a semana acarreta dois descontos: o valor do dia da falta (1/30) e a perda do DSR remunerado daquela semana!',
          formula: 'Desconto = 1 dia de falta + 1 dia de DSR'
        }
      ],
      practicalExample: 'Para um salário-base de R$ 2.000,00, 6% de VT é R$ 120,00. Se o colaborador gasta R$ 90,00 em condução, o desconto máximo será de R$ 90,00.'
    },

    // 2. MEMORIZE
    memorize: {
      word: 'INSS',
      clue: 'Tributo previdenciário descontado mensalmente em faixas progressivas.',
      explanation: 'O INSS financia aposentadorias, pensões e auxílios-doença da Previdência Social.',
      matchingPairs: [
        { left: 'Desconto Máximo de VT', right: 'Até 6% sobre o Salário-base do empregado' },
        { left: 'Consequência de Falta Injustificada', right: 'Desconto do dia não trabalhado + perda do DSR semanal' },
        { left: 'FGTS na Folha de Pagamento', right: 'Depósito patronal de 8% (NÃO é desconto do trabalhador)' }
      ]
    },

    // 3. PRATIQUE
    practice: [
      {
        id: 'f5-p1',
        question: 'Um colaborador ganha R$ 3.000,00 de salário-base. Seu gasto real mensal com passagens de ônibus totaliza R$ 140,00. Quanto a empresa poderá descontar em folha a título de Vale-transporte?',
        options: [
          'R$ 180,00 (que é 6% de R$ 3.000,00).',
          'R$ 140,00 (pois a empresa nunca pode descontar mais do que o custo real do benefício).',
          'R$ 0,00 (o vale-transporte é gratuito se custar menos de 6%).',
          'R$ 200,00.'
        ],
        correctIndex: 1,
        explanation: 'A lei estabelece que o limite de 6% é o teto máximo. Se o gasto real for menor, desconta-se apenas o custo real (R$ 140,00). Descontar mais do que o gasto real é enriquecimento ilícito do empregador.',
        context: 'Regulamentado pelo Decreto nº 95.247/87.'
      },
      {
        id: 'f5-p2',
        statement: 'O FGTS é descontado diretamente do salário do funcionário todo mês na alíquota de 8%.',
        isTrue: false,
        explanation: 'FALSO! O FGTS é uma obrigação exclusivamente da empresa (custo patronal). Ele JAMAIS pode ser deduzido do salário do empregado!'
      }
    ],

    // 4. CALCULE
    calculate: {
      problem: 'Um funcionário com salário de R$ 2.700,00 (salário diário = R$ 90,00) faltou um dia na quarta-feira sem apresentar atestado médico e sem autorização da liderança. O mês tem 30 dias comerciais e 4 semanas de trabalho. Quanto será o desconto total em seu contracheque (falta + reflexo no DSR)?',
      steps: [
        'Passo 1: Calcular o desconto do dia trabalhado: 1 dia x R$ 90,00 = R$ 90,00.',
        'Passo 2: Calcular o desconto do DSR perdido da semana: 1 dia de DSR x R$ 90,00 = R$ 90,00.',
        'Passo 3: Somar os descontos: R$ 90,00 (falta) + R$ 90,00 (DSR) = R$ 180,00.',
        'Resultado: Total descontado pela falta injustificada = R$ 180,00.'
      ],
      question: 'Qual o valor total a ser descontado na folha pela falta não justificada?',
      options: [
        'Apenas R$ 90,00 (somente o dia da falta)',
        'R$ 180,00 (dia da falta + DSR da semana)',
        'R$ 270,00',
        'R$ 45,00'
      ],
      correctIndex: 1,
      explanation: 'A falta injustificada na semana retira o direito ao descanso remunerado daquela semana (Lei 605/49, art. 6º). Perde-se o dia de trabalho e o DSR: R$ 90 + R$ 90 = R$ 180,00.'
    },

    // 5. DESAFIO FINAL
    finalChallenge: {
      title: 'Desafio Integrador — Fechamento da Fase 5',
      question: 'Em um mês com total de vencimentos de R$ 3.500,00, os descontos somaram R$ 332,00 de INSS, R$ 60,00 de IRRF e R$ 150,00 de vale-transporte. Qual é o salário líquido que será depositado na conta bancária do funcionário?',
      options: [
        'R$ 2.958,00 (R$ 3.500 - R$ 542)',
        'R$ 3.000,00',
        'R$ 2.850,00',
        'R$ 3.120,00'
      ],
      correctIndex: 0,
      explanation: 'Total de descontos: R$ 332 + R$ 60 + R$ 150 = R$ 542,00. Salário líquido: R$ 3.500,00 - R$ 542,00 = R$ 2.958,00.',
      xpReward: 150,
      gemsReward: 50
    }
  },

  // ==========================================
  // FASE 6: RELATÓRIO DE PONTO, QUADRO E ESCALAS
  // ==========================================
  {
    id: 'fase-6',
    number: 6,
    title: 'Controle de Ponto e Escalas',
    subtitle: 'Relatório de Ponto, Tolerâncias, Escala 12x36 e Revezamento',
    icon: '📊',
    color: '#f59e0b',
    requiredLevel: 3,
    summary: 'Aprenda a interpretar o espelho de ponto eletrônico, as regras de tolerância de marcação (art. 58 da CLT), escala 12x36, 6x1 e o quadro de horários.',
    
    // 1. APRENDA
    learn: {
      intro: 'O controle de jornada é a espinha dorsal de conformidade do Departamento Pessoal, regulamentado pelo art. 74 da CLT e pela Portaria MTP 671/2021.',
      keyPoints: [
        {
          title: 'Obrigatoriedade de Registro de Ponto',
          desc: 'Obrigatório para estabelecimentos com mais de 20 trabalhadores. Pode ser eletrônico (REP-C, REP-A, REP-P), mecânico ou manual em folha de livro.',
          formula: 'Obrigatório para mais de 20 empregados por filial.'
        },
        {
          title: 'Regra de Tolerância Legal (Art. 58, §1º da CLT)',
          desc: 'Não serão descontadas nem computadas como hora extra as variações de horário no registro de ponto não excedentes de 5 minutos em cada marcação, observado o limite máximo de 10 minutos diários.',
          formula: 'Tolerância: Até 5 min por batida, máximo 10 min por dia.'
        },
        {
          title: 'Escala 12x36 e Escalas de Revezamento',
          desc: 'Na escala 12x36 (12 horas de trabalho por 36 horas ininterruptas de descanso), a remuneração mensal já compensa as folgas e o DSR (art. 59-A da CLT). Em escalas como 6x1, deve haver escala de revezamento mensal garantindo ao menos uma folga no domingo a cada 7 semanas para homens e quinzenal para mulheres.',
          formula: 'Escala 12x36 legalizada por acordo individual escrito ou CCT.'
        }
      ],
      practicalExample: 'Um empregado que bate o ponto 4 minutos antes do início do turno e sai 4 minutos após o término totalizou 8 minutos de variação no dia: nada é descontado e nenhuma hora extra é devida.'
    },

    // 2. MEMORIZE
    memorize: {
      word: 'PONTO',
      clue: 'Registro obrigatório dos horários de entrada, refeição e saída do trabalhador.',
      explanation: 'O espelho de ponto eletrônico serve de base incontestável para a apuração da folha de pagamento.',
      matchingPairs: [
        { left: 'Tolerância Diária de Marcação', right: 'Até 5 minutos por batida, máximo de 10 minutos no dia' },
        { left: 'Ponto Obrigatório pela CLT', right: 'Estabelecimentos com mais de 20 empregados' },
        { left: 'Jornada 12x36', right: '12 horas de trabalho seguidas de 36 horas de repouso contínuo' }
      ]
    },

    // 3. PRATIQUE
    practice: [
      {
        id: 'f6-p1',
        question: 'Um colaborador registrou atraso de 15 minutos na entrada da manhã. A empresa pode descontar esse tempo? Qual é o valor do desconto?',
        options: [
          'A empresa só pode descontar 5 minutos, pois os outros 10 são tolerância.',
          'Como o atraso ultrapassou o limite legal de 10 minutos diários, a tolerância perde a validade e a empresa pode descontar os 15 minutos integrais.',
          'A empresa não pode descontar nada se ele justificar verbalmente.',
          'O desconto de atrasos é proibido por lei federal.'
        ],
        correctIndex: 1,
        explanation: 'Pela Súmula 366 do TST e art. 58, §1º da CLT, ultrapassado o limite de 10 minutos diários, são consideradas horas extras ou atrasos a totalidade do tempo que exceder a jornada normal!',
        context: 'Logo, desconta-se a totalidade dos 15 minutos.'
      },
      {
        id: 'f6-p2',
        statement: 'A jornada 12x36 foi revogada pela Reforma Trabalhista e é considerada ilícita atualmente.',
        isTrue: false,
        explanation: 'FALSO! O art. 59-A incluído pela Reforma Trabalhista (Lei 13.467/2017) autorizou expressamente a escala 12x36 inclusive por acordo individual escrito!'
      }
    ],

    // 4. CALCULE
    calculate: {
      problem: 'O cartão de ponto de um colaborador revelou os seguintes minutos de atraso em dias distintos de uma mesma semana:\n- Terça: 7 minutos de atraso total no dia.\n- Quarta: 18 minutos de atraso total no dia.\n- Sexta: 4 minutos de atraso total no dia.\nConsiderando a tolerância legal (art. 58, § 1º CLT), quantos minutos totais devem ser descontados na folha?',
      steps: [
        'Passo 1: Analisar Terça: 7 minutos está dentro do limite máximo de 10 minutos diários -> ZERO desconto.',
        'Passo 2: Analisar Quarta: 18 minutos ultrapassou o teto de 10 minutos -> desconta-se TUDO: 18 minutos.',
        'Passo 3: Analisar Sexta: 4 minutos está dentro do limite máximo de 10 minutos -> ZERO desconto.',
        'Resultado: Apenas a quarta-feira (18 minutos) será computada como desconto na folha.'
      ],
      question: 'Quantos minutos de atraso serão descontados do colaborador?',
      options: [
        '29 minutos (soma de todos os dias)',
        '18 minutos (apenas o dia que ultrapassou a tolerância)',
        '8 minutos (18 menos 10 de tolerância)',
        'Nenhum minuto'
      ],
      correctIndex: 1,
      explanation: 'Terça (7 min) e Sexta (4 min) estavam protegidas pela tolerância de 10 min. A Quarta ultrapassou o limite, sendo descontada integralmente (18 min).'
    },

    // 5. DESAFIO FINAL
    finalChallenge: {
      title: 'Desafio Integrador — Fechamento da Fase 6 e Conclusão do Mundo 1',
      question: 'Ao auditar o relatório de ponto mensal de um assistente de RH, você verifica que ele trabalhou 18 horas extras 50% e faltou 1 dia sem justificativa (salário-base R$ 2.200, hora R$ 10,00, dia R$ 73,33). Sabendo que o DSR da falta é R$ 73,33 e o DSR das horas extras foi apurado em R$ 48,00, qual o saldo líquido dessa apuração no holerite?',
      options: [
        'Horas Extras + DSR = R$ 318,00 | Desconto Falta + DSR = R$ 146,66 | Saldo positivo de R$ 171,34',
        'Saldo negativo de R$ 50,00',
        'Saldo positivo de R$ 300,00',
        'Empate exato de R$ 0,00'
      ],
      correctIndex: 0,
      explanation: 'Horas extras: 18 x R$ 15,00 = R$ 270,00 + DSR R$ 48,00 = R$ 318,00 a favor do funcionário. Descontos: R$ 73,33 (falta) + R$ 73,33 (DSR) = R$ 146,66. Saldo favorável de R$ 171,34 no holerite!',
      xpReward: 200,
      gemsReward: 60
    }
  }
];

export function getPhaseById(phaseId) {
  return WORLD1_PHASES.find(p => p.id === phaseId);
}
