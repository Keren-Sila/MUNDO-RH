/**
 * MUNDO RH - Gerenciamento de Roteamento e Navegação SPA (Estilo Academix)
 */

import { WORLDS_DATA } from '../data/worlds.js';
import { WORLD1_PHASES } from '../data/world1-phases.js';
import { GLOSSARY_DATA } from '../data/glossary.js';
import { storage } from './storage.js';
import { renderDailyChallengeCard } from './features/daily-challenge.js';
import { setActiveNavLink } from './components/sidebar.js';
import { updateBottomNavActive } from './components/bottom-nav.js';
import { PhaseRunner } from './games/phase-runner.js';
import { WordSearchGame } from './games/word-search.js';
import { QuizGame } from './games/quiz.js';
import { WordCompletionGame } from './games/word-completion.js';
import { TrueFalseGame } from './games/true-false.js';
import { MatchingGame } from './games/matching.js';
import { ChallengeGame } from './games/challenge.js';
import { ReceiptSimulator } from './features/receipt-simulator.js';
import { ReviewSystem } from './features/review.js';
import { AchievementsPanel } from './features/achievements.js';

export class NavigationRouter {
  constructor(mainContainerId) {
    this.container = document.getElementById(mainContainerId);
    this.currentView = 'home';
    this.activeWorldId = null;

    // Instância das classes de jogos e features
    this.games = {
      phaseRunner: new PhaseRunner('main-content'),
      wordSearch: new WordSearchGame('main-content'),
      quiz: new QuizGame('main-content'),
      wordCompletion: new WordCompletionGame('main-content'),
      trueFalse: new TrueFalseGame('main-content'),
      matching: new MatchingGame('main-content'),
      challenge: new ChallengeGame('main-content'),
      receiptSimulator: new ReceiptSimulator('main-content'),
      review: new ReviewSystem('main-content'),
      achievements: new AchievementsPanel('main-content')
    };
  }

  init() {
    window.addEventListener('navigate-to', (e) => {
      const target = typeof e.detail === 'string' ? e.detail : e.detail.view;
      const param = typeof e.detail === 'object' ? e.detail.param : null;
      this.navigate(target, param);
    });

    this.navigate('home');
  }

  navigate(viewName, param = null) {
    this.currentView = viewName;
    setActiveNavLink(viewName);
    updateBottomNavActive(viewName);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    switch (viewName) {
      case 'home':
        this.renderHome();
        break;
      case 'phases-world-1':
        this.renderWorld1Phases();
        break;
      case 'phase-runner':
        this.games.phaseRunner.init(param || 'fase-1');
        break;
      case 'worlds':
        this.renderWorlds();
        break;
      case 'receipt-simulator':
        this.games.receiptSimulator.init();
        break;
      case 'word-search':
        this.games.wordSearch.init(param);
        break;
      case 'quiz':
        this.games.quiz.init(param);
        break;
      case 'word-completion':
        this.games.wordCompletion.init(param);
        break;
      case 'true-false':
        this.games.trueFalse.init(param);
        break;
      case 'matching':
        this.games.matching.init(param);
        break;
      case 'challenge':
        this.games.challenge.init();
        break;
      case 'review':
        this.games.review.init();
        break;
      case 'achievements':
        this.games.achievements.init();
        break;
      case 'glossary':
        this.renderGlossary();
        break;
      default:
        this.renderHome();
    }
  }

  // ==========================================
  // TELA INICIAL (PAINEL ACADEMIX)
  // ==========================================
  renderHome() {
    const state = storage.getState();
    const xpInfo = storage.getXPToNextLevel(state.xp);
    const daysLabels = ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'];
    const weekStreak = state.weekStreak || [true, true, true, true, false, false, false];

    // Calcula total de fases concluídas
    const completedPhasesCount = state.completedPhases.length;

    this.container.innerHTML = `
      <div class="academix-dashboard-container">
        <!-- 1. Perfil do Jogador em Cartão Elevado -->
        <section class="academix-profile-hero">
          <div class="hero-avatar-box">
            <span class="hero-avatar">${state.avatar || '👩‍💼'}</span>
          </div>
          <div class="hero-details">
            <div class="hero-level-tag">Nível ${state.level}</div>
            <div class="hero-xp-gems">
              <span class="xp-val">⚡ ${state.xp} XP</span>
              <span class="gems-val">💎 ${state.gems || 1257} Gemas</span>
            </div>
            <div class="hero-progress-wrapper">
              <div class="progress-track">
                <div class="progress-fill" style="width: ${xpInfo.percent}%"></div>
              </div>
              <span class="progress-label">${xpInfo.percent}% para o Nível ${state.level + 1}</span>
            </div>
          </div>
        </section>

        <!-- 2. Grid de Resumo de Estatísticas (Estilo Academix: Total Courses / Completed) -->
        <section class="academix-stats-grid">
          <div class="academix-stat-card" data-nav="worlds">
            <div class="stat-top">
              <span class="stat-icon">📚</span>
              <span class="stat-title">Total Mundos</span>
            </div>
            <div class="stat-big-number">6</div>
          </div>

          <div class="academix-stat-card" data-nav="phases-world-1">
            <div class="stat-top">
              <span class="stat-icon">🏆</span>
              <span class="stat-title">Fases Concluídas</span>
            </div>
            <div class="stat-big-number">${completedPhasesCount} <span class="stat-sub">/ 6</span></div>
          </div>
        </section>

        <!-- 3. Sequência de Dias (Daily Streaks com checks semanais) -->
        <section class="academix-streak-card">
          <div class="streak-header-row">
            <div class="streak-title-col">
              <h3>Daily Streaks 🔥</h3>
              <p>${state.streakDays || 1} dias consecutivos estudando</p>
            </div>
            <button class="btn-arrow-link" data-nav="achievements" title="Ver Conquistas">↗</button>
          </div>

          <div class="streak-days-row">
            ${daysLabels.map((day, idx) => `
              <div class="streak-day-item ${weekStreak[idx] ? 'completed' : ''}">
                <span class="day-label">${day}</span>
                <div class="day-check-circle">
                  ${weekStreak[idx] ? '✓' : '•'}
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- 4. Card "Continue Learning" (Continuar de onde parou) -->
        <section class="academix-continue-card" id="card-continue-learning">
          <div class="continue-header-row">
            <h3>Continue Learning</h3>
            <button class="link-view-all" data-nav="phases-world-1">Ver Fases ↗</button>
          </div>

          <div class="continue-body-box">
            <div class="continue-title-row">
              <span class="continue-icon">🧾</span>
              <div class="continue-info">
                <h4>Folha de Pagamento</h4>
                <p>Fase 1: Salário mensal, diário e DSR</p>
              </div>
              <button class="btn-play-mini" title="Retomar Fase">▶</button>
            </div>
            <div class="continue-progress-row">
              <span class="continue-chapter">Ciclo: 5 Etapas</span>
              <span class="continue-pct">60%</span>
            </div>
            <div class="progress-track continue-track">
              <div class="progress-fill" style="width: 60%"></div>
            </div>
          </div>
        </section>

        <!-- 5. Destaque: Simulador de Holerite com Auditoria -->
        <section class="academix-feature-card" data-nav="receipt-simulator">
          <div class="feature-card-glow"></div>
          <div class="feature-icon">🧾</div>
          <div class="feature-content">
            <span class="badge badge-accent">Prática Real</span>
            <h3>Simulador de Holerite & Auditoria de Erros</h3>
            <p>Inspecione rubricas de proventos e descontos ou atue como auditor de DP descobrindo erros na folha.</p>
          </div>
          <button class="btn btn-primary btn-sm">Abrir Holerite ➡</button>
        </section>

        <!-- 6. Desafio Diário -->
        <section class="home-daily-section">
          ${renderDailyChallengeCard()}
        </section>

        <!-- 7. Acesso Rápido às Modalidades -->
        <section class="home-section">
          <h2 class="section-title">🎲 Modos de Prática Rápida</h2>
          <div class="games-menu-grid">
            <div class="game-menu-item" data-nav="word-search">
              <span class="menu-item-icon">🔍</span>
              <h4>Caça-palavras</h4>
              <p>Termos de RH escondidos na grade.</p>
            </div>
            <div class="game-menu-item" data-nav="quiz">
              <span class="menu-item-icon">❓</span>
              <h4>Quiz de RH</h4>
              <p>Múltipla escolha com explicação.</p>
            </div>
            <div class="game-menu-item" data-nav="true-false">
              <span class="menu-item-icon">⚖️</span>
              <h4>Verdadeiro ou Falso</h4>
              <p>Afirmações sobre CLT e DP.</p>
            </div>
            <div class="game-menu-item" data-nav="challenge">
              <span class="menu-item-icon">⚡</span>
              <h4>Desafio Relâmpago</h4>
              <p>Memória rápida cronometrada.</p>
            </div>
          </div>
        </section>
      </div>
    `;

    this.attachHomeEvents();
  }

  // ==========================================
  // MAPA DE FASES DO MUNDO 1 (FOLHA DE PAGAMENTO)
  // ==========================================
  renderWorld1Phases() {
    const state = storage.getState();
    const unlocked = state.unlockedPhases || ['fase-1'];
    const completed = state.completedPhases || [];

    this.container.innerHTML = `
      <div class="phases-page-container">
        <div class="phases-header-card">
          <span class="badge badge-accent">Mundo 01 • Prioritário</span>
          <h1 class="page-title">🧾 Folha de Pagamento</h1>
          <p class="page-subtitle">Complete as 6 fases baseadas nas aulas completas. Cada fase possui 5 etapas: <strong>Aprenda, Memorize, Pratique, Calcule e Desafio Final</strong>.</p>
        </div>

        <div class="phases-timeline-list">
          ${WORLD1_PHASES.map((p, idx) => {
            const isUnlocked = unlocked.includes(p.id);
            const isDone = completed.includes(p.id);

            return `
              <div class="phase-timeline-card ${isUnlocked ? 'unlocked' : 'locked'} ${isDone ? 'completed' : ''}" data-phase-id="${p.id}">
                <div class="phase-card-left">
                  <div class="phase-number-badge">
                    ${isDone ? '✓' : `0${p.number}`}
                  </div>
                  <div class="phase-v-line"></div>
                </div>

                <div class="phase-card-main">
                  <div class="phase-main-top">
                    <span class="phase-tag">Fase ${p.number} • 5 Etapas</span>
                    <span class="phase-reward-gems">💎 +${p.finalChallenge.gemsReward}</span>
                  </div>
                  <h3 class="phase-title">${p.title}</h3>
                  <p class="phase-sub">${p.subtitle}</p>
                  <p class="phase-summary-text">${p.summary}</p>

                  <div class="phase-action-row">
                    ${isUnlocked ? `
                      <button class="btn btn-primary btn-sm btn-start-phase" data-phase-id="${p.id}">
                        ${isDone ? '🔄 Praticar Novamente' : '🚀 Iniciar Fase'}
                      </button>
                    ` : `
                      <span class="locked-badge">🔒 Conclua a Fase ${idx} para desbloquear</span>
                    `}
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    const startBtns = document.querySelectorAll('.btn-start-phase');
    startBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const phaseId = btn.getAttribute('data-phase-id');
        this.navigate('phase-runner', phaseId);
      });
    });
  }

  // ==========================================
  // MAPA DOS 6 MUNDOS
  // ==========================================
  renderWorlds() {
    const state = storage.getState();

    this.container.innerHTML = `
      <div class="worlds-page-container">
        <div class="page-header">
          <h1 class="page-title">🌍 Mundos de Aprendizagem de RH</h1>
          <p class="page-subtitle">Explore as 6 grandes áreas de Recursos Humanos e Departamento Pessoal:</p>
        </div>

        <div class="worlds-full-grid">
          ${WORLDS_DATA.map(w => {
            const isUnlocked = state.unlockedWorlds.includes(w.id) || state.level >= w.requiredLevel;

            return `
              <div class="world-card ${isUnlocked ? 'unlocked' : 'locked'}" data-world-id="${w.id}">
                <div class="world-card-top" style="background: ${w.gradient};">
                  <div class="world-badge">${w.badge}</div>
                  <span class="world-number">Mundo 0${w.number}</span>
                  <h3 class="world-card-title">${w.title}</h3>
                  <p class="world-card-sub">${w.subtitle}</p>
                </div>
                <div class="world-card-body">
                  <p class="world-desc">${w.description}</p>
                  <div class="world-topics-summary">
                    <strong>Estrutura de Conteúdo:</strong>
                    <ul>
                      ${w.topics.slice(0, 3).map(t => `<li>• ${t}</li>`).join('')}
                      ${w.topics.length > 3 ? `<li>• +${w.topics.length - 3} outros tópicos</li>` : ''}
                    </ul>
                  </div>
                </div>
                <div class="world-card-footer">
                  ${w.id === 'mundo-1' ? `
                    <button class="btn btn-primary btn-sm btn-goto-world1">
                      Abrir as 6 Fases ➡
                    </button>
                  ` : isUnlocked ? `
                    <button class="btn btn-outline btn-sm btn-play-quiz" data-world-id="${w.id}">
                      Jogar Quiz do Mundo ➡
                    </button>
                  ` : `
                    <span class="lock-label">🔒 Requer Nível ${w.requiredLevel}</span>
                  `}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    document.querySelector('.btn-goto-world1')?.addEventListener('click', () => {
      this.navigate('phases-world-1');
    });

    const quizBtns = document.querySelectorAll('.btn-play-quiz');
    quizBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const wid = btn.getAttribute('data-world-id');
        this.navigate('quiz', wid);
      });
    });
  }

  // ==========================================
  // GLOSSÁRIO DE RH
  // ==========================================
  renderGlossary() {
    this.container.innerHTML = `
      <div class="glossary-page-container">
        <div class="page-header">
          <h1 class="page-title">📚 Glossário Completo de RH & Legislação</h1>
          <p class="page-subtitle">Consulte o significado, aplicação prática e exemplos de todos os conceitos do jogo:</p>
        </div>

        <div class="glossary-filter-bar">
          <input type="text" id="glossary-search-input" class="search-input" placeholder="🔍 Buscar por termo (ex: FGTS, DSR, Insalubridade, Ponto)...">
          <div class="filter-pills" id="glossary-pills">
            <button class="filter-pill active" data-filter="all">Todos</button>
            <button class="filter-pill" data-filter="mundo-1">Folha de Pagamento</button>
            <button class="filter-pill" data-filter="mundo-2">Recrutamento</button>
            <button class="filter-pill" data-filter="mundo-3">T&D</button>
            <button class="filter-pill" data-filter="mundo-4">Dep. Pessoal</button>
            <button class="filter-pill" data-filter="mundo-5">Segurança (SST)</button>
            <button class="filter-pill" data-filter="mundo-6">Rescisão</button>
          </div>
        </div>

        <div class="glossary-cards-grid" id="glossary-grid">
          ${this.renderGlossaryCards(GLOSSARY_DATA)}
        </div>
      </div>
    `;

    this.attachGlossaryEvents();
  }

  renderGlossaryCards(items) {
    if (items.length === 0) {
      return '<div class="no-results-msg">Nenhum termo encontrado com estes filtros.</div>';
    }

    return items.map(item => `
      <div class="glossary-card" data-world="${item.worldId}">
        <div class="glossary-card-header">
          <h3 class="glossary-term">${item.term}</h3>
          ${item.type ? `<span class="glossary-tag ${item.type}">${item.type}</span>` : ''}
        </div>
        <p class="glossary-short">${item.shortDef}</p>
        <div class="glossary-details">
          <div class="glossary-block">
            <strong>📖 Definição Completa:</strong>
            <p>${item.fullDef}</p>
          </div>
          <div class="glossary-block">
            <strong>📍 Onde é utilizado:</strong>
            <p>${item.whereUsed}</p>
          </div>
          <div class="glossary-block highlight">
            <strong>💡 Exemplo Prático:</strong>
            <p>${item.practicalExample}</p>
          </div>
        </div>
      </div>
    `).join('');
  }

  attachHomeEvents() {
    document.getElementById('card-continue-learning')?.addEventListener('click', () => {
      this.navigate('phase-runner', 'fase-1');
    });

    const statCards = document.querySelectorAll('.academix-stat-card[data-nav]');
    statCards.forEach(c => {
      c.addEventListener('click', () => {
        this.navigate(c.getAttribute('data-nav'));
      });
    });

    const linkViewAll = document.querySelectorAll('.link-view-all[data-nav]');
    linkViewAll.forEach(l => {
      l.addEventListener('click', (e) => {
        e.stopPropagation();
        this.navigate(l.getAttribute('data-nav'));
      });
    });

    const arrowLinks = document.querySelectorAll('.btn-arrow-link[data-nav]');
    arrowLinks.forEach(a => {
      a.addEventListener('click', () => {
        this.navigate(a.getAttribute('data-nav'));
      });
    });

    const featureCards = document.querySelectorAll('.academix-feature-card[data-nav]');
    featureCards.forEach(fc => {
      fc.addEventListener('click', () => {
        this.navigate(fc.getAttribute('data-nav'));
      });
    });

    const gameMenuItems = document.querySelectorAll('.game-menu-item[data-nav]');
    gameMenuItems.forEach(item => {
      item.addEventListener('click', () => {
        this.navigate(item.getAttribute('data-nav'));
      });
    });
  }

  attachGlossaryEvents() {
    const searchInput = document.getElementById('glossary-search-input');
    const pills = document.querySelectorAll('.filter-pill');
    let currentFilter = 'all';

    const filterCards = () => {
      const query = (searchInput?.value || '').toLowerCase().trim();
      const filtered = GLOSSARY_DATA.filter(item => {
        const matchesWorld = currentFilter === 'all' || item.worldId === currentFilter;
        const matchesQuery = !query || 
          item.term.toLowerCase().includes(query) || 
          item.shortDef.toLowerCase().includes(query) || 
          item.fullDef.toLowerCase().includes(query);
        return matchesWorld && matchesQuery;
      });

      const grid = document.getElementById('glossary-grid');
      if (grid) grid.innerHTML = this.renderGlossaryCards(filtered);
    };

    searchInput?.addEventListener('input', filterCards);

    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        currentFilter = pill.getAttribute('data-filter');
        filterCards();
      });
    });
  }
}
