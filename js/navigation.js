/**
 * MUNDO RH - Gerenciamento de Roteamento e Navegação Entre Telas (SPA)
 */

import { WORLDS_DATA } from '../data/worlds.js';
import { GLOSSARY_DATA } from '../data/glossary.js';
import { storage } from './storage.js';
import { renderDailyChallengeCard } from './features/daily-challenge.js';
import { setActiveNavLink } from './components/sidebar.js';
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

    // Inicialização dos módulos de jogos e recursos
    this.games = {
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
      const worldId = typeof e.detail === 'object' ? e.detail.worldId : null;
      this.navigate(target, worldId);
    });

    // Renderiza a tela inicial
    this.navigate('home');
  }

  navigate(viewName, worldId = null) {
    this.currentView = viewName;
    if (worldId) this.activeWorldId = worldId;
    setActiveNavLink(viewName);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    switch (viewName) {
      case 'home':
        this.renderHome();
        break;
      case 'worlds':
        this.renderWorlds();
        break;
      case 'receipt-simulator':
        this.games.receiptSimulator.init();
        break;
      case 'word-search':
        this.games.wordSearch.init(this.activeWorldId);
        break;
      case 'quiz':
        this.games.quiz.init(this.activeWorldId);
        break;
      case 'word-completion':
        this.games.wordCompletion.init(this.activeWorldId);
        break;
      case 'true-false':
        this.games.trueFalse.init(this.activeWorldId);
        break;
      case 'matching':
        this.games.matching.init(this.activeWorldId);
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

  renderHome() {
    const state = storage.getState();
    const xpInfo = storage.getXPToNextLevel(state.xp);

    this.container.innerHTML = `
      <div class="home-page-container">
        <!-- Hero Banner Principal -->
        <section class="home-hero-banner">
          <div class="hero-text-content">
            <span class="hero-pill">🎮 Jogo Educativo de Recursos Humanos & DP</span>
            <h1 class="hero-title">Aprenda RH na Prática de Forma Divertida e Eficiente</h1>
            <p class="hero-description">
              Domine folha de pagamento, legislação trabalhista, recrutamento, rotinas de departamento pessoal e cálculos reais através de jogos interativos e simuladores.
            </p>
            <div class="hero-actions">
              <button class="btn btn-primary btn-lg" id="btn-hero-play">
                🚀 Continuar Aprendendo
              </button>
              <button class="btn btn-outline btn-lg" id="btn-hero-receipt">
                🧾 Explorar Holerite
              </button>
            </div>
          </div>
          <div class="hero-card-preview">
            <div class="mini-status-card">
              <div class="mini-header">
                <span>🔥 Sequência Ativa</span>
                <strong>${state.streakDays || 1} dias seguidos</strong>
              </div>
              <div class="mini-level">
                <span>Nível ${state.level} — ${state.title}</span>
                <div class="progress-track">
                  <div class="progress-fill" style="width: ${xpInfo.percent}%"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Missões Diárias -->
        <section class="home-daily-section">
          ${renderDailyChallengeCard()}
        </section>

        <!-- Destaque: Simulador de Holerite -->
        <section class="home-highlight-card" id="card-goto-receipt">
          <div class="highlight-icon">🧾</div>
          <div class="highlight-body">
            <span class="highlight-tag">Funcionalidade Estrela</span>
            <h3>Simulador Interativo de Recibo de Pagamento</h3>
            <p>Toque em cada provento e desconto de um holerite real: entenda para que serve, como se calcula e como explicar para o colaborador na prática.</p>
          </div>
          <button class="btn btn-primary highlight-btn">Abrir Simulador ➡</button>
        </section>

        <!-- Grade de Mundos de Estudo -->
        <section class="home-section">
          <div class="section-header-row">
            <div>
              <h2 class="section-title">🌍 Mundos de Aprendizagem</h2>
              <p class="section-subtitle">Escolha uma área para explorar e resolver desafios</p>
            </div>
            <button class="btn btn-secondary btn-sm" id="btn-view-all-worlds">Ver Todos</button>
          </div>

          <div class="worlds-compact-grid">
            ${WORLDS_DATA.slice(0, 3).map(w => this.renderWorldCard(w, state)).join('')}
          </div>
        </section>

        <!-- Atalhos Rápidos para Modalidades de Jogos -->
        <section class="home-section">
          <h2 class="section-title">🎲 Modalidades de Jogos</h2>
          <p class="section-subtitle">Diversifique seu treino com mecânicas diferentes</p>

          <div class="games-menu-grid">
            <div class="game-menu-item" data-nav="word-search">
              <span class="menu-item-icon">🔍</span>
              <h4>Caça-palavras</h4>
              <p>Encontre termos-chave de RH escondidos na grade de letras.</p>
            </div>
            <div class="game-menu-item" data-nav="quiz">
              <span class="menu-item-icon">❓</span>
              <h4>Quiz Prático</h4>
              <p>Perguntas situacionais de múltipla escolha com explicações.</p>
            </div>
            <div class="game-menu-item" data-nav="word-completion">
              <span class="menu-item-icon">✏️</span>
              <h4>Complete a Palavra</h4>
              <p>Descubra os conceitos completando as letras que faltam.</p>
            </div>
            <div class="game-menu-item" data-nav="true-false">
              <span class="menu-item-icon">⚖️</span>
              <h4>Verdadeiro ou Falso</h4>
              <p>Analise afirmações de legislação e rotinas da CLT.</p>
            </div>
            <div class="game-menu-item" data-nav="matching">
              <span class="menu-item-icon">🔗</span>
              <h4>Ligue os Conceitos</h4>
              <p>Conecte termos técnicos às suas respectivas definições.</p>
            </div>
            <div class="game-menu-item" data-nav="challenge">
              <span class="menu-item-icon">⚡</span>
              <h4>Desafio Relâmpago</h4>
              <p>Responda rápido para treinar recuperação ágil da memória.</p>
            </div>
          </div>
        </section>
      </div>
    `;

    this.attachHomeEvents();
  }

  renderWorldCard(w, state) {
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
            <strong>Tópicos principais:</strong>
            <ul>
              ${w.topics.slice(0, 3).map(t => `<li>• ${t}</li>`).join('')}
              ${w.topics.length > 3 ? `<li>• +${w.topics.length - 3} outros tópicos</li>` : ''}
            </ul>
          </div>
        </div>
        <div class="world-card-footer">
          ${isUnlocked ? `
            <button class="btn btn-primary btn-sm btn-play-world" data-world-id="${w.id}">
              Jogar Este Mundo ➡
            </button>
          ` : `
            <span class="lock-label">🔒 Desbloqueia no Nível ${w.requiredLevel}</span>
          `}
        </div>
      </div>
    `;
  }

  renderWorlds() {
    const state = storage.getState();

    this.container.innerHTML = `
      <div class="worlds-page-container">
        <div class="page-header">
          <h1 class="page-title">🌍 Mundos de Aprendizagem</h1>
          <p class="page-subtitle">Navegue pelas 6 grandes áreas do conhecimento em RH e Departamento Pessoal:</p>
        </div>

        <div class="worlds-full-grid">
          ${WORLDS_DATA.map(w => this.renderWorldCard(w, state)).join('')}
        </div>
      </div>
    `;

    this.attachWorldCardsEvents();
  }

  renderGlossary() {
    this.container.innerHTML = `
      <div class="glossary-page-container">
        <div class="page-header">
          <h1 class="page-title">📚 Glossário Completo de RH & Legislação</h1>
          <p class="page-subtitle">Consulte o significado, aplicação prática e exemplos de todos os conceitos do jogo:</p>
        </div>

        <div class="glossary-filter-bar">
          <input type="text" id="glossary-search-input" class="search-input" placeholder="🔍 Buscar por termo (ex: FGTS, DSR, Insalubridade, Rescisão)...">
          <div class="filter-pills" id="glossary-pills">
            <button class="filter-pill active" data-filter="all">Todos</button>
            <button class="filter-pill" data-filter="mundo-1">Folha de Pagamento</button>
            <button class="filter-pill" data-filter="mundo-2">Segurança & Risco</button>
            <button class="filter-pill" data-filter="mundo-3">Recrutamento</button>
            <button class="filter-pill" data-filter="mundo-4">T&D</button>
            <button class="filter-pill" data-filter="mundo-5">Dep. Pessoal</button>
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
    document.getElementById('btn-hero-play')?.addEventListener('click', () => {
      this.navigate('worlds');
    });

    document.getElementById('btn-hero-receipt')?.addEventListener('click', () => {
      this.navigate('receipt-simulator');
    });

    document.getElementById('card-goto-receipt')?.addEventListener('click', () => {
      this.navigate('receipt-simulator');
    });

    document.getElementById('btn-view-all-worlds')?.addEventListener('click', () => {
      this.navigate('worlds');
    });

    this.attachWorldCardsEvents();

    const gameMenuItems = document.querySelectorAll('.game-menu-item[data-nav]');
    gameMenuItems.forEach(item => {
      item.addEventListener('click', () => {
        const nav = item.getAttribute('data-nav');
        this.navigate(nav);
      });
    });
  }

  attachWorldCardsEvents() {
    const playBtns = document.querySelectorAll('.btn-play-world');
    playBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const worldId = btn.getAttribute('data-world-id');
        this.activeWorldId = worldId;
        // Abre o Quiz ou Caça-palavras daquele mundo
        this.navigate('quiz', worldId);
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
