/**
 * MUNDO RH - Estrutura dos 6 Mundos de Aprendizagem
 */

export const WORLDS_DATA = [
  {
    id: 'mundo-1',
    number: 1,
    title: 'Folha de Pagamento',
    subtitle: 'Vencimentos, Descontos e Cálculos Essenciais',
    description: 'Compreenda a fundo como é estruturada a folha de pagamento: salários, adicionais, INSS, FGTS, IRRF, vales e o fechamento do holerite.',
    icon: 'fa-receipt',
    color: '#2563eb', // Royal Blue
    gradient: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
    badge: 'Fundamental',
    topicsCount: 18,
    requiredLevel: 1,
    topics: [
      'Salário e Salário-base',
      'Salário Bruto vs Líquido',
      'Proventos e Descontos',
      'INSS e Alíquotas Progressivas',
      'FGTS (Recolhimento Patronal)',
      'IRRF e Dependentes',
      'Pensão Alimentícia',
      'DSR e Reflexos',
      'Horas Extras (50% e 100%)',
      'Adicional Noturno e Hora Reduzida',
      'Faltas e Atrasos',
      'Vale-transporte (Regra dos 6%)',
      'Vale-refeição e Coparticipação',
      'Convênio Médico',
      'Ajuda de Custo e Verbas Indenizatórias'
    ]
  },
  {
    id: 'mundo-2',
    number: 2,
    title: 'Segurança e Adicionais',
    subtitle: 'Insalubridade, Periculosidade e Normas Regulamentadoras',
    description: 'Aprenda a diferenciar riscos à saúde e integridade física, os percentuais legais (10%, 20%, 40% e 30%) e as regras das NRs 15 e 16.',
    icon: 'fa-shield-halved',
    color: '#059669', // Emerald
    gradient: 'linear-gradient(135deg, #047857 0%, #10b981 100%)',
    badge: 'Segurança & Saúde',
    topicsCount: 6,
    requiredLevel: 1,
    topics: [
      'Insalubridade e NR-15',
      'Graus: Mínimo (10%), Médio (20%) e Máximo (40%)',
      'Periculosidade (30%) e NR-16',
      'Atividades Perigosas e Risco Iminente',
      'Diferenças Cruciais e Não-Cumulatividade',
      'Adicionais Trabalhistas e Reflexos'
    ]
  },
  {
    id: 'mundo-3',
    number: 3,
    title: 'Recrutamento e Seleção',
    subtitle: 'Atração, Triagem, Entrevistas e Contratação',
    description: 'Domine as estratégias para atrair os melhores talentos, conduzir entrevistas assertivas, avaliar hard e soft skills e formalizar a admissão.',
    icon: 'fa-user-plus',
    color: '#7c3aed', // Purple
    gradient: 'linear-gradient(135deg, #6d28d9 0%, #8b5cf6 100%)',
    badge: 'Atração de Talentos',
    topicsCount: 8,
    requiredLevel: 2,
    topics: [
      'Recrutamento Interno vs Externo',
      'Triagem Assertiva de Currículos',
      'Entrevistas por Competências (STAR)',
      'Processo de Seleção e Fit Cultural',
      'Competências Técnicas (Hard Skills)',
      'Competências Comportamentais (Soft Skills)',
      'Processo de Admissão e eSocial'
    ]
  },
  {
    id: 'mundo-4',
    number: 4,
    title: 'Treinamento e Desenvolvimento',
    subtitle: 'LNT, Capacitação, Clima e Cultura',
    description: 'Transforme potenciais em alta performance: diagnóstico de necessidades (LNT), avaliação de desempenho, planos de capacitação e gestão do clima.',
    icon: 'fa-graduation-cap',
    color: '#d97706', // Amber
    gradient: 'linear-gradient(135deg, #b45309 0%, #f59e0b 100%)',
    badge: 'Desenvolvimento Humano',
    topicsCount: 7,
    requiredLevel: 2,
    topics: [
      'Levantamento de Necessidades (LNT)',
      'Capacitação Prática no Cargo',
      'Desenvolvimento Profissional e PDI',
      'Modelos de Avaliação de Desempenho',
      'Plano Estratégico de Treinamento',
      'Pesquisa de Clima Organizacional',
      'Cultura Organizacional e Valores'
    ]
  },
  {
    id: 'mundo-5',
    number: 5,
    title: 'Departamento Pessoal',
    subtitle: 'Rotinas Contratuais, Ponto, Férias e Obrigações',
    description: 'As rotinas operacionais e regulatórias do DP: registro de empregados, controle fidedigno de ponto, cálculo de férias, 13º salário e eSocial.',
    icon: 'fa-briefcase',
    color: '#0891b2', // Cyan / Teal
    gradient: 'linear-gradient(135deg, #0e7490 0%, #06b6d4 100%)',
    badge: 'Rotinas Operacionais',
    topicsCount: 8,
    requiredLevel: 3,
    topics: [
      'Registro Legal do Funcionário (art. 41 CLT)',
      'Jornada de Trabalho e Escalas',
      'Controle de Ponto (Portaria 671)',
      'Férias: Período Aquisitivo e Concessivo',
      '13º Salário e Prazos de Pagamento',
      'Gestão de Benefícios Corporativos',
      'Obrigações Trabalhistas e DCTFWeb'
    ]
  },
  {
    id: 'mundo-6',
    number: 6,
    title: 'Rescisão Contratual',
    subtitle: 'Modalidades de Desligamento e Verbas Rescisórias',
    description: 'Entenda os direitos em cada tipo de rescisão (sem justa causa, pedido, justa causa), aviso-prévio proporcional, multa do FGTS e prazos legais.',
    icon: 'fa-file-signature',
    color: '#e11d48', // Rose / Red
    gradient: 'linear-gradient(135deg, #be123c 0%, #f43f5e 100%)',
    badge: 'Término de Contrato',
    topicsCount: 10,
    requiredLevel: 3,
    topics: [
      'Demissão sem Justa Causa e Direitos Plenos',
      'Pedido de Demissão e Limitações',
      'Justa Causa (Art. 482 da CLT)',
      'Aviso-prévio Proporcional (Lei 12.506)',
      'Saldo de Salário na Rescisão',
      'Férias Vencidas e Proporcionais (+ 1/3)',
      '13º Proporcional',
      'Multa Rescisória de 40% do FGTS',
      'Termo de Rescisão (TRCT) e Prazo de 10 Dias'
    ]
  }
];

export function getWorldById(worldId) {
  return WORLDS_DATA.find(w => w.id === worldId);
}
