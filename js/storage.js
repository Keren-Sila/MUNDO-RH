/**
 * MUNDO RH - Gerenciamento de Armazenamento Local e Persistência de Progresso (Offline-First)
 */

const STORAGE_KEY = 'mundo_rh_user_state_v1';

const DEFAULT_STATE = {
  xp: 0,
  level: 1,
  title: 'Iniciante em RH',
  streakDays: 1,
  lastStudyDate: new Date().toISOString().split('T')[0],
  unlockedWorlds: ['mundo-1', 'mundo-2'], // Começa com os 2 primeiros desbloqueados
  stats: {
    activitiesCompleted: 0,
    wordsFound: 0,
    quizCorrect: 0,
    quizTotal: 0,
    world1Completed: 0,
    world2Completed: 0,
    world3Completed: 0,
    world4Completed: 0,
    world5Completed: 0,
    world6Completed: 0,
    receiptExplored: false,
    receiptQuizScore: 0,
    trueFalseCorrect: 0,
    matchingPairs: 0,
    blitzHighScore: 0
  },
  unlockedAchievements: [],
  reviewList: [], // Conceitos com erro para repetição espaçada
  settings: {
    soundEnabled: true,
    timerDisabled: false,
    contrastHigh: false
  }
};

class StorageService {
  constructor() {
    this.state = this.loadState();
    this.updateStreak();
  }

  loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...DEFAULT_STATE,
          ...parsed,
          stats: { ...DEFAULT_STATE.stats, ...(parsed.stats || {}) },
          settings: { ...DEFAULT_STATE.settings, ...(parsed.settings || {}) }
        };
      }
    } catch (e) {
      console.warn('Erro ao ler localStorage:', e);
    }
    return { ...DEFAULT_STATE };
  }

  saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.error('Erro ao salvar no localStorage:', e);
    }
  }

  getState() {
    return this.state;
  }

  // Atualiza sequência de dias de estudo (Streak)
  updateStreak() {
    const today = new Date().toISOString().split('T')[0];
    const lastDate = this.state.lastStudyDate;

    if (!lastDate) {
      this.state.streakDays = 1;
      this.state.lastStudyDate = today;
      this.saveState();
      return;
    }

    if (lastDate === today) {
      // Mesmo dia, mantém streak
      return;
    }

    const last = new Date(lastDate);
    const curr = new Date(today);
    const diffTime = Math.abs(curr - last);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      // Dia consecutivo: soma +1 dia à sequência!
      this.state.streakDays = (this.state.streakDays || 1) + 1;
    } else if (diffDays > 1) {
      // Pulou mais de 1 dia: reseta para 1
      this.state.streakDays = 1;
    }

    this.state.lastStudyDate = today;
    this.saveState();
  }

  // Adiciona XP e recalcula nível
  addXP(amount) {
    if (!amount || amount <= 0) return { newXP: this.state.xp, leveledUp: false };

    const oldLevel = this.state.level;
    this.state.xp += amount;
    this.state.level = this.calculateLevel(this.state.xp);
    this.state.title = this.getLevelTitle(this.state.level);

    // Desbloqueia novos mundos com base no nível
    if (this.state.level >= 2 && !this.state.unlockedWorlds.includes('mundo-3')) {
      this.state.unlockedWorlds.push('mundo-3', 'mundo-4');
    }
    if (this.state.level >= 3 && !this.state.unlockedWorlds.includes('mundo-5')) {
      this.state.unlockedWorlds.push('mundo-5', 'mundo-6');
    }

    const leveledUp = this.state.level > oldLevel;
    this.saveState();

    return {
      newXP: this.state.xp,
      level: this.state.level,
      title: this.state.title,
      leveledUp
    };
  }

  calculateLevel(xp) {
    if (xp >= 3000) return 6; // Mestre das Rotinas Trabalhistas
    if (xp >= 1800) return 5; // Especialista em Formação
    if (xp >= 1000) return 4; // Conhecedor de RH
    if (xp >= 500) return 3;  // Aprendiz de Departamento Pessoal
    if (xp >= 200) return 2;  // Explorador de Conceitos
    return 1;                 // Iniciante em RH
  }

  getLevelTitle(level) {
    switch (level) {
      case 1: return 'Iniciante em RH';
      case 2: return 'Explorador de Conceitos';
      case 3: return 'Aprendiz de DP';
      case 4: return 'Conhecedor de RH';
      case 5: return 'Especialista em Formação';
      case 6: return 'Mestre das Rotinas Trabalhistas';
      default: return 'Praticante de RH';
    }
  }

  getXPToNextLevel(xp) {
    const thresholds = [0, 200, 500, 1000, 1800, 3000];
    const currentLevel = this.calculateLevel(xp);
    if (currentLevel >= 6) {
      return { current: xp, next: 3000, percent: 100 };
    }
    const prevThreshold = thresholds[currentLevel - 1];
    const nextThreshold = thresholds[currentLevel];
    const progress = xp - prevThreshold;
    const needed = nextThreshold - prevThreshold;
    const percent = Math.min(100, Math.round((progress / needed) * 100));
    return { current: xp, next: nextThreshold, percent };
  }

  // Atualização de estatísticas
  incrementStat(statKey, increment = 1) {
    if (this.state.stats[statKey] !== undefined) {
      this.state.stats[statKey] += increment;
    } else {
      this.state.stats[statKey] = increment;
    }
    this.state.stats.activitiesCompleted += 1;
    this.saveState();
  }

  // Adiciona conceito para revisão inteligente (repetição espaçada)
  addToReview(conceptId, term, context = '') {
    const existing = this.state.reviewList.find(item => item.id === conceptId);
    if (existing) {
      existing.wrongCount = (existing.wrongCount || 1) + 1;
      existing.lastFailed = new Date().toISOString();
    } else {
      this.state.reviewList.push({
        id: conceptId,
        term,
        context,
        wrongCount: 1,
        lastFailed: new Date().toISOString()
      });
    }
    this.saveState();
  }

  // Remove ou diminui o peso de um conceito na revisão após acerto
  markConceptMastered(conceptId) {
    this.state.reviewList = this.state.reviewList.filter(item => item.id !== conceptId);
    this.saveState();
  }

  // Desbloqueia conquista
  unlockAchievement(achievementId) {
    if (!this.state.unlockedAchievements.includes(achievementId)) {
      this.state.unlockedAchievements.push(achievementId);
      this.saveState();
      return true;
    }
    return false;
  }

  updateSetting(key, value) {
    this.state.settings[key] = value;
    this.saveState();
  }

  resetAllProgress() {
    this.state = { ...DEFAULT_STATE, lastStudyDate: new Date().toISOString().split('T')[0] };
    this.saveState();
  }
}

export const storage = new StorageService();
