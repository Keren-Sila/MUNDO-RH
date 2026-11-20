/**
 * MUNDO RH - Modelos Didáticos de Recibo de Pagamento (Holerite / Contracheque)
 * Inclui dados realistas, cálculos demonstrativos e explicações detalhadas por rubrica.
 */

export const RECEIPT_EXAMPLE_1 = {
  id: 'recibo-padrao-1',
  title: 'Holerite Padrão Mensal - Assistente de RH',
  description: 'Contracheque completo com salário-base, horas extras, DSR, insalubridade média, descontos de VT, VR, INSS e IRRF.',
  company: {
    name: 'InovaTech Soluções Digitais Ltda',
    cnpj: '12.345.678/0001-90',
    address: 'Av. Paulista, 1000 - São Paulo/SP'
  },
  employee: {
    code: '00142',
    name: 'Juliana Mendes Silva',
    role: 'Assistente de Recursos Humanos',
    cbo: '4110-10',
    admissionDate: '10/02/2023',
    department: 'Gente & Gestão',
    baseSalary: 3000.00,
    competency: '10/2026'
  },
  items: [
    {
      code: '001',
      description: 'Salário Base Mensal',
      reference: '30 dias',
      provento: 3000.00,
      desconto: null,
      type: 'provento',
      details: {
        category: 'Provento Principal',
        title: '001 - Salário Base Mensal',
        whatIs: 'É a contraprestação principal fixada no contrato de trabalho do colaborador para uma jornada de 30 dias (ou 220 horas mensais).',
        purpose: 'Remunerar o tempo contratual à disposição da empresa. Serve como base de cálculo primordial para todas as demais rubricas e adicionais.',
        isProventoOrDesconto: 'PROVENTO (Soma ao rendimento bruto do trabalhador).',
        howCalculated: 'Valor estipulado em carteira: R$ 3.000,00 para mês integral.',
        practicalTip: 'Mesmo que o mês tenha 28, 30 ou 31 dias, o empregado mensalista recebe sempre a cota correspondente aos 30 dias contratuais.'
      }
    },
    {
      code: '015',
      description: 'Horas Extras 50%',
      reference: '10:00 h',
      provento: 204.55,
      desconto: null,
      type: 'provento',
      details: {
        category: 'Horas Extraordinárias',
        title: '015 - Horas Extras 50%',
        whatIs: 'Remuneração referente a 10 horas trabalhadas além da jornada padrão em dias úteis.',
        purpose: 'Compensar o esforço extra executado pelo funcionário fora do expediente normal acordado.',
        isProventoOrDesconto: 'PROVENTO (Aumenta o salário bruto do mês).',
        howCalculated: 'Salário-base (R$ 3.000) ÷ 220h = R$ 13,64 (hora normal). Hora com 50% = R$ 13,64 x 1,5 = R$ 20,455. Multiplicado por 10 horas = R$ 204,55.',
        practicalTip: 'Toda hora extra paga gera reflexo obrigatório no DSR (Descanso Semanal Remunerado).'
      }
    },
    {
      code: '020',
      description: 'DSR s/ Horas Extras',
      reference: '4 dom/fer / 26 úteis',
      provento: 31.47,
      desconto: null,
      type: 'provento',
      details: {
        category: 'Reflexo Legal',
        title: '020 - DSR sobre Horas Extras',
        whatIs: 'Reflexo financeiro das horas extras realizadas sobre os dias de descanso semanal remunerado e feriados do mês (Lei 605/49).',
        purpose: 'Garantir que a remuneração variável de horas extraordinárias também valorize o dia de descanso remunerado do trabalhador.',
        isProventoOrDesconto: 'PROVENTO (Aumenta a remuneração do mês).',
        howCalculated: '(Total de Horas Extras R$ 204,55 ÷ 26 dias úteis) x 4 dias de DSR/feriados = R$ 31,47.',
        practicalTip: 'Muitos trabalhadores desconhecem o DSR e acham que é um bônus da empresa, mas é um direito garantido por lei federal!'
      }
    },
    {
      code: '052',
      description: 'Adic. de Insalubridade Médio (20%)',
      reference: '20% s/ SM',
      provento: 282.40,
      desconto: null,
      type: 'provento',
      details: {
        category: 'Adicional de Saúde',
        title: '052 - Adicional de Insalubridade Médio',
        whatIs: 'Compensação financeira pelo trabalho desempenhado em condições que degradam a saúde acima dos limites de tolerância (NR-15).',
        purpose: 'Compensar monetariamente a exposição contínua a agentes físicos, químicos ou biológicos insalubres.',
        isProventoOrDesconto: 'PROVENTO (Soma ao salário do colaborador).',
        howCalculated: 'Grau médio = 20% calculado sobre o Salário Mínimo nacional vigente (R$ 1.412,00 x 20% = R$ 282,40).',
        practicalTip: 'Atenção: A base legal padrão é o Salário Mínimo, salvo quando convenção coletiva ou decisão judicial estipular o salário-base da categoria!'
      }
    },
    {
      code: '101',
      description: 'Vale-transporte',
      reference: '6,00%',
      provento: null,
      desconto: 180.00,
      type: 'desconto',
      details: {
        category: 'Desconto Legal de Benefício',
        title: '101 - Vale-transporte (Lei 7.418/85)',
        whatIs: 'Desconto referente à coparticipação legal do funcionário para o custeio de seu deslocamento residência-trabalho.',
        purpose: 'Cobrir parte do custo das passagens de transporte público fornecidas pela empresa ao colaborador.',
        isProventoOrDesconto: 'DESCONTO (Subtrai do total de vencimentos).',
        howCalculated: '6% sobre o Salário-base do colaborador (R$ 3.000,00 x 6% = R$ 180,00).',
        practicalTip: 'Se o gasto real mensal em transporte público fosse, por exemplo, R$ 120,00, a empresa só poderia descontar R$ 120,00, nunca os R$ 180,00.'
      }
    },
    {
      code: '108',
      description: 'Vale-refeição (Coparticipação)',
      reference: 'Coparticipação PAT',
      provento: null,
      desconto: 60.00,
      type: 'desconto',
      details: {
        category: 'Desconto de Benefício Autorizado',
        title: '108 - Coparticipação Vale-refeição',
        whatIs: 'Pequena fração simbólica retida na folha pela concessão dos créditos de alimentação (PAT - Programa de Alimentação do Trabalhador).',
        purpose: 'Descaracterizar o vale-refeição como salário "in natura", evitando encargos previdenciários e trabalhistas sobre o benefício.',
        isProventoOrDesconto: 'DESCONTO (Subtrai do valor líquido).',
        howCalculated: 'Valor fixo acordado em convenção ou política interna (neste caso, R$ 60,00 para um crédito de VR de R$ 650,00).',
        practicalTip: 'Pelo PAT, o desconto máximo permitido em lei é de 20% sobre o valor concedido do benefício.'
      }
    },
    {
      code: '201',
      description: 'Previdência Social - INSS',
      reference: 'Faixas Progressivas',
      provento: null,
      desconto: 334.12,
      type: 'desconto',
      details: {
        category: 'Tributo Previdenciário Obrigatório',
        title: '201 - Contribuição Previdenciária ao INSS',
        whatIs: 'Recolhimento obrigatório à Previdência Social para garantir direitos como auxílio por incapacidade, salário-maternidade e aposentadoria.',
        purpose: 'Contribuir para o fundo público de seguridade social brasileiro.',
        isProventoOrDesconto: 'DESCONTO (Retenção obrigatória por lei na fonte).',
        howCalculated: 'Incide sobre a remuneração bruta total (R$ 3.518,42) de forma progressiva por faixas (7,5%, 9%, 12% e 14%) conforme a tabela oficial da Previdência Social.',
        practicalTip: 'O valor descontado é repassado pela empresa integralmente ao governo via DCTFWeb/eSocial.'
      }
    },
    {
      code: '205',
      description: 'Imposto de Renda Retido - IRRF',
      reference: '7,50%',
      provento: null,
      desconto: 62.85,
      type: 'desconto',
      details: {
        category: 'Tributo Federal Obrigatório',
        title: '205 - IRRF (Imposto de Renda Retido na Fonte)',
        whatIs: 'Imposto federal arrecadado mensalmente pela Receita Federal sobre os ganhos de pessoas físicas.',
        purpose: 'Arrecadação de tributos federais para o Tesouro Nacional.',
        isProventoOrDesconto: 'DESCONTO (Subtrai do salário líquido a receber).',
        howCalculated: 'Base IRRF = Bruto (R$ 3.518,42) - INSS (R$ 334,12) = R$ 3.184,30. Aplicada alíquota da faixa (7,5%) e subtraída a parcela a deduzir da tabela da Receita Federal.',
        practicalTip: 'Colaboradores com dependentes legais ou que pagam pensão judicial têm abatimentos diretos que reduzem a base do IRRF.'
      }
    },
    {
      code: '998',
      description: 'FGTS do Mês (Depósito CEF)',
      reference: '8,00%',
      provento: null,
      desconto: null,
      informativo: 281.47,
      type: 'informativo',
      details: {
        category: 'Depósito Patronal Obrigatório (Informativo)',
        title: '998 - FGTS do Mês (Recolhimento Patronal)',
        whatIs: 'Depósito de 8% efetuado obrigatoriamente pela empresa em conta vinculada na Caixa Econômica Federal em nome do trabalhador.',
        purpose: 'Formar uma poupança de proteção contra o desemprego involuntário e permitir financiamento imobiliário.',
        isProventoOrDesconto: 'NÃO É DESCONTO! É um item puramente informativo que a empresa paga do próprio caixa.',
        howCalculated: '8% sobre a remuneração com incidência de FGTS: R$ 3.518,42 x 8% = R$ 281,47.',
        practicalTip: 'Muitas pessoas olham o valor do FGTS no holerite e pensam que foram lesadas com um desconto. É dever do profissional de RH esclarecer que o dinheiro sai 100% do bolso do patrão!'
      }
    }
  ],
  totals: {
    totalVencimentos: 3518.42,
    totalDescontos: 636.97,
    salarioLiquido: 2881.45,
    baseCalculoInss: 3518.42,
    baseCalculoFgts: 3518.42,
    fgtsDoMes: 281.47,
    baseCalculoIrrf: 3184.30,
    faixaIrrf: '7,5%'
  },
  challenges: [
    {
      id: 'holerite-q1',
      question: 'Ao analisar o holerite da Juliana, qual é o valor real que cairá na conta bancária dela no dia do pagamento?',
      options: [
        'R$ 3.518,42 (Total de Vencimentos)',
        'R$ 3.000,00 (Salário Base)',
        'R$ 2.881,45 (Salário Líquido)',
        'R$ 2.599,98 (Salário após INSS e IRRF)'
      ],
      correctIndex: 2,
      explanation: 'O valor creditado na conta é sempre o Salário Líquido (R$ 2.881,45), obtido após subtrair todos os descontos (R$ 636,97) do total de vencimentos brutos (R$ 3.518,42).'
    },
    {
      id: 'holerite-q2',
      question: 'O valor de R$ 281,47 referente ao FGTS do mês causou alguma diminuição no salário da Juliana?',
      options: [
        'Sim, foi descontado integralmente do salário dela.',
        'Não, o FGTS é um depósito patronal obrigatório feito pela empresa e não pode ser descontado do trabalhador.',
        'Sim, mas é devolvido no mês seguinte como bônus.',
        'Apenas metade (4%) foi descontada do salário.'
      ],
      correctIndex: 1,
      explanation: 'Exato! O FGTS de 8% é obrigação exclusiva do empregador. Ele aparece no holerite para transparência e fiscalização do empregado, nunca como desconto.'
    },
    {
      id: 'holerite-q3',
      question: 'Por que o holerite contém a rubrica "020 - DSR s/ Horas Extras" no valor de R$ 31,47?',
      options: [
        'Porque todo empregado que faz horas extras tem direito legal ao reflexo correspondente nos dias de repouso remunerado e feriados.',
        'Porque ela faltou em um dia de domingo e a empresa concedeu um abono especial.',
        'É um desconto referente ao almoço de domingo.',
        'É o pagamento de um dia de férias adiantado.'
      ],
      correctIndex: 0,
      explanation: 'Pela Lei nº 605/49 e Súmula 172 do TST, a realização habitual de horas extras gera obrigatoriamente reflexo no Descanso Semanal Remunerado (DSR).'
    },
    {
      id: 'holerite-q4',
      question: 'Se a empresa concedeu o Vale-transporte, por que descontou R$ 180,00 e não o valor total gasto pela Juliana?',
      options: [
        'A empresa cobrou uma taxa arbitrária.',
        'A lei permite descontar no máximo até 6% do salário-base do empregado, cabendo à empresa custear toda a diferença excedente.',
        'O desconto de VT é sempre 10% do salário líquido.',
        'O vale-transporte é gratuito e o desconto foi um erro do DP.'
      ],
      correctIndex: 1,
      explanation: 'A Lei do Vale-transporte (Lei 7.418/85) estipula que a participação do empregado é limitada ao teto de 6% sobre o salário-base. O que passar disso é 100% subsidiado pela empresa!'
    }
  ]
};
