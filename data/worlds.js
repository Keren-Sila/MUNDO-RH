/**
 * MUNDO RH - Estrutura dos 6 Mundos de Aprendizagem
 * Destaque para o Mundo 1 (Folha de Pagamento) com 6 fases práticas completas.
 */

export const WORLDS_DATA = [
  {
    id: 'mundo-1',
    number: 1,
    title: 'Folha de Pagamento',
    subtitle: 'Salários, DSR, Horas Extras, Adicionais, Descontos e Ponto',
    description: 'Nosso primeiro mundo prioritário com 6 fases completas: aprenda a calcular salários, horas extras, adicionais noturno, insalubridade, periculosidade, descontos legais e controle de ponto.',
    icon: '🧾',
    color: '#8b5cf6', // Violeta Academix
    gradient: 'linear-gradient(135deg, #4c1d95 0%, #7c3aed 50%, #8b5cf6 100%)',
    badge: 'Mundo Prioritário',
    phasesCount: 6,
    requiredLevel: 1,
    hasPhases: true,
    topics: [
      'Fase 1: Salário mensal, diário e DSR',
      'Fase 2: Horas extras e DSR das horas extras',
      'Fase 3: Adicional noturno e comissões',
      'Fase 4: Insalubridade e periculosidade',
      'Fase 5: Descontos na folha (INSS, IRRF, VT, Faltas)',
      'Fase 6: Relatório de ponto, quadro e escalas'
    ]
  },
  {
    id: 'mundo-2',
    number: 2,
    title: 'Recrutamento e Seleção',
    subtitle: 'Requisição de Vagas, Divulgação, Triagem, Entrevistas e Seleção',
    description: 'Estratégias para atração de talentos, triagem de currículos, entrevistas por competências (STAR), fit cultural e admissão de novos colaboradores.',
    icon: '👥',
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, #0e7490 0%, #0891b2 50%, #06b6d4 100%)',
    badge: 'Atração de Talentos',
    phasesCount: 4,
    requiredLevel: 2,
    hasPhases: false,
    topics: [
      'Requisição e Alinhamento de Perfil',
      'Divulgação em Canais e ATS',
      'Triagem Assertiva de Currículos',
      'Entrevista por Competências (STAR)',
      'Hard Skills vs Soft Skills',
      'Seleção e Carta Proposta'
    ]
  },
  {
    id: 'mundo-3',
    number: 3,
    title: 'Treinamento e Desenvolvimento',
    subtitle: 'Levantamento de Necessidades, Capacitação e Avaliação',
    description: 'Desenvolvimento humano organizacional: diagnóstico de lacunas (LNT), planos de capacitação, avaliação de desempenho (90º/180º/360º), clima e cultura.',
    icon: '🎓',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #b45309 0%, #d97706 50%, #f59e0b 100%)',
    badge: 'Desenvolvimento Humano',
    phasesCount: 4,
    requiredLevel: 2,
    hasPhases: false,
    topics: [
      'Levantamento de Necessidades (LNT)',
      'Plano e Execução de Capacitação',
      'PDI e Formação de Lideranças',
      'Avaliação de Desempenho e Metas',
      'Pesquisa de Clima Organizacional (eNPS)',
      'Cultura Organizacional e Valores'
    ]
  },
  {
    id: 'mundo-4',
    number: 4,
    title: 'Departamento Pessoal',
    subtitle: 'Admissão, Documentação, Benefícios, Registros e Rotinas',
    description: 'A rotina burocrática e documental do DP: registro de empregados (art. 41 CLT), eSocial, concessão e cálculo de férias com 1/3, 13º salário e benefícios.',
    icon: '📁',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #047857 0%, #059669 50%, #10b981 100%)',
    badge: 'Rotinas Operacionais',
    phasesCount: 4,
    requiredLevel: 3,
    hasPhases: false,
    topics: [
      'Processo Admissional e Documentos',
      'Registro Legal e CTPS Digital',
      'Gestão de Benefícios (VT, VR, VA)',
      'Férias: Período Aquisitivo e Concessivo',
      '13º Salário e Prazos de Pagamento',
      'Obrigações Trabalhistas e Fiscais'
    ]
  },
  {
    id: 'mundo-5',
    number: 5,
    title: 'Saúde e Segurança do Trabalho',
    subtitle: 'Prevenção, Segurança, Riscos Ocupacionais e Proteção',
    description: 'Normas Regulamentadoras (NRs), ergonomia, exames ocupacionais (PCMSO/ASO), programas de prevenção (PGR/LTCAT) e segurança ocupacional.',
    icon: '🦺',
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, #be185d 0%, #db2777 50%, #ec4899 100%)',
    badge: 'SST & Prevenção',
    phasesCount: 4,
    requiredLevel: 3,
    hasPhases: false,
    topics: [
      'Normas Regulamentadoras Básicas',
      'Exames Ocupacionais (ASO, PCMSO)',
      'Equipamentos de Proteção (EPI e EPC)',
      'Programa de Gerenciamento de Riscos (PGR)',
      'Prevenção de Acidentes e CIPA',
      'Perfil Profissiográfico Previdenciário (PPP)'
    ]
  },
  {
    id: 'mundo-6',
    number: 6,
    title: 'Rescisão Contratual',
    subtitle: 'Tipos de Desligamento, Verbas Rescisórias, Prazos e Cálculos',
    description: 'Encerramento de contratos: demissão sem justa causa, pedido de demissão, justa causa (art. 482 CLT), aviso-prévio proporcional, multa do FGTS e TRCT.',
    icon: '📝',
    color: '#ef4444',
    gradient: 'linear-gradient(135deg, #b91c1c 0%, #dc2626 50%, #ef4444 100%)',
    badge: 'Desligamento & TRCT',
    phasesCount: 4,
    requiredLevel: 4,
    hasPhases: false,
    topics: [
      'Demissão sem Justa Causa',
      'Pedido de Demissão pelo Empregado',
      'Demissão com Justa Causa (Faltas Graves)',
      'Aviso-prévio Proporcional (Lei 12.506)',
      'Saldo de Salário, Férias e 13º Proporcionais',
      'Multa do FGTS e Prazo de 10 Dias'
    ]
  }
];

export function getWorldById(worldId) {
  return WORLDS_DATA.find(w => w.id === worldId);
}
