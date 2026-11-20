/**
 * MUNDO RH - Sistema de Conquistas e Medalhas (Gamificação)
 */

export const ACHIEVEMENTS_DATA = [
  {
    id: 'primeiro-passo',
    title: 'Primeiro Passo em RH',
    description: 'Conclua sua primeira atividade em qualquer modalidade do jogo.',
    icon: 'fa-shoe-prints',
    color: '#3b82f6',
    xpReward: 50,
    checkCondition: (stats) => (stats.activitiesCompleted || 0) >= 1
  },
  {
    id: 'caca-palavras-junior',
    title: 'Caçador de Termos',
    description: 'Encontre 5 termos técnicos no modo Caça-palavras.',
    icon: 'fa-magnifying-glass',
    color: '#10b981',
    xpReward: 100,
    checkCondition: (stats) => (stats.wordsFound || 0) >= 5
  },
  {
    id: 'mestre-folha',
    title: 'Mestre da Folha',
    description: 'Complete com sucesso 5 perguntas ou desafios no Mundo 01 (Folha de Pagamento).',
    icon: 'fa-receipt',
    color: '#6366f1',
    xpReward: 150,
    checkCondition: (stats) => (stats.world1Completed || 0) >= 5
  },
  {
    id: 'perito-holerite',
    title: 'Olho Clínico de Holerite',
    description: 'Inspecione todas as rubricas e responda ao quiz do Simulador de Recibo.',
    icon: 'fa-file-invoice-dollar',
    color: '#06b6d4',
    xpReward: 150,
    checkCondition: (stats) => (stats.receiptExplored || false) && (stats.receiptQuizScore || 0) >= 3
  },
  {
    id: 'guardiao-clt',
    title: 'Guardião da Legislação',
    description: 'Acerte 8 afirmações no modo Verdadeiro ou Falso.',
    icon: 'fa-scale-balanced',
    color: '#ec4899',
    xpReward: 150,
    checkCondition: (stats) => (stats.trueFalseCorrect || 0) >= 8
  },
  {
    id: 'associador-mestre',
    title: 'Conector de Ideias',
    description: 'Relacione corretamente 10 pares de conceitos no modo Ligue os Conceitos.',
    icon: 'fa-link',
    color: '#8b5cf6',
    xpReward: 150,
    checkCondition: (stats) => (stats.matchingPairs || 0) >= 10
  },
  {
    id: 'desafio-relampago-expert',
    title: 'Recuperação Relâmpago',
    description: 'Vença o Desafio Relâmpago com pelo menos 80% de precisão.',
    icon: 'fa-bolt',
    color: '#f59e0b',
    xpReward: 200,
    checkCondition: (stats) => (stats.blitzHighScore || 0) >= 4
  },
  {
    id: 'sequencia-firme',
    title: 'Hábito de Ouro',
    description: 'Mantenha uma sequência de 3 dias de estudo no aplicativo.',
    icon: 'fa-fire',
    color: '#ef4444',
    xpReward: 250,
    checkCondition: (stats) => (stats.streakDays || 1) >= 3
  },
  {
    id: 'especialista-formacao',
    title: 'Especialista em Formação',
    description: 'Alcance o Nível 5 de progressão geral no Mundo RH.',
    icon: 'fa-crown',
    color: '#eab308',
    xpReward: 500,
    checkCondition: (stats) => (stats.level || 1) >= 5
  }
];

export function getAchievementById(id) {
  return ACHIEVEMENTS_DATA.find(a => a.id === id);
}
