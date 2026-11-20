/**
 * MUNDO RH - Sistema de Experiência e Níveis (XP System)
 */

export const LEVEL_THRESHOLDS = [
  { level: 1, title: 'Iniciante em RH', minXP: 0 },
  { level: 2, title: 'Explorador de Conceitos', minXP: 200 },
  { level: 3, title: 'Aprendiz de DP', minXP: 500 },
  { level: 4, title: 'Conhecedor de RH', minXP: 1000 },
  { level: 5, title: 'Especialista em Formação', minXP: 1800 },
  { level: 6, title: 'Mestre das Rotinas Trabalhistas', minXP: 3000 }
];

export function getLevelData(xp) {
  for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    if (xp >= LEVEL_THRESHOLDS[i].minXP) {
      return LEVEL_THRESHOLDS[i];
    }
  }
  return LEVEL_THRESHOLDS[0];
}
