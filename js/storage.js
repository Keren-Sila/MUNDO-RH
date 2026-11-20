/**
 * MUNDO RH - Gerenciamento de Armazenamento Local e Persistência de Progresso (Offline-First)
 * Inspirado no Academix: suporta XP, Gemas/Diamantes, Sequência Semanal e Fases Desbloqueáveis.
 */

const STORAGE_KEY = 'mundo_rh_user_state_v2';

const DEFAULT_STATE = {
  userName: 'Hanna Dias',
  avatar: '👩‍💼',
  xp: 520,
  gems: 1257,
  level: 2,
  title: 'Explorador de Conceitos',
  streakDays: 4,
  weekStreak: [true, true, true, true, false, false, false], // Seg, Ter, Qua, Qui, Sex, Sab, Dom
  lastStudyDate: new Date().toISOString().split('T')[0],
  unlockedWorlds: ['mundo-1', 'mundo-2'],
  unlockedPhases: ['fase-1'],
  completedPhases: [],
  currentLearning: {
    worldId: 'mundo-1',
    worldTitle: 'Folha de Pagamento',
    phaseId: 'fase-1',
    phaseTitle: 'Salário mensal, diário e DSR',
    progress: 35
  },
  stats: {
    activitiesCompleted: 14,
    wordsFound: 6,
    quizCorrect: 17,
    quizTotal: 20,
    calculationsDone: 8,
    receiptExplored: true,
    receiptQuizScore: 4,
    auditCasesSolved: 1,
    trueFalseCorrect: 12,
    matchingPairs: 16,
    blitzHighScore: 5
  },
  unlockedAchievements: ['primeiro-passo', 'caca-palavras-junior'],
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
          settings: { ...DEFAULT_STATE.settings, ...(parsed.settings || {}) },
          unlockedPhases: parsed.unlockedPhases || DEFAULT_STATE.unlockedPhases,
          completedPhases: parsed.completedPhases || DEFAULT_STATE.completedPhases
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

  setUserName(name) {
    if (name && name.trim()) {
      this.state.userName = name.trim();
      this.saveState();
    }
  }

  // Atualiza sequência de dias de estudo (Streak)
  updateStreak() {
    const today = new Date().toISOString().split('T')[0];
    const lastDate = this.state.lastStudyDate;

    // Atualiza o dia da semana atual no weekStreak (0 = Segunda, ..., 6 = Domingo)
    const dayOfWeek = (new Date().getDay() + 6) % 7; // Ajusta para Seg=0
    if (!this.state.weekStreak) {
      this.state.weekStreak = [false, false, false, false, false, false, false];
    }
    this.state.weekStreak[dayOfWeek] = true;

    if (!lastDate) {
      this.state.streakDays = 1;
      this.state.lastStudyDate = today;
      this.saveState();
      return;
    }

    if (lastDate === today) {
      return;
    }

    const last = new Date(lastDate);
    const curr = new Date(today);
    const diffTime = Math.abs(curr - last);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      this.state.streakDays = (this.state.streakDays || 1) + 1;
    } else if (diffDays > 1) {
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

  // Adiciona Gemas/Diamantes
  addGems(amount) {
    if (!amount || amount <= 0) return this.state.gems;
    this.state.gems = (this.state.gems || 0) + amount;
    this.saveState();
    return this.state.gems;
  }

  // Conclui uma Fase e Desbloqueia a Próxima
  completePhase(phaseId, nextPhaseId = null, xp = 100, gems = 30) {
    if (!this.state.completedPhases.includes(phaseId)) {
      this.state.completedPhases.push(phaseId);
    }
    if (nextPhaseId && !this.state.unlockedPhases.includes(nextPhaseId)) {
      this.state.unlockedPhases.push(nextPhaseId);
    }
    this.addXP(xp);
    this.addGems(gems);
    this.incrementStat('activitiesCompleted', 1);
    this.saveState();
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

  markConceptMastered(conceptId) {
    this.state.reviewList = this.state.reviewList.filter(item => item.id !== conceptId);
    this.saveState();
  }

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
