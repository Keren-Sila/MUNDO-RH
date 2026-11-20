/**
 * MUNDO RH - Componente de Cabeçalho Superior (Header Estilo Academix)
 */

import { storage } from '../storage.js';
import { sound } from '../utils/helpers.js';

export function renderHeader() {
  const state = storage.getState();
  const xpInfo = storage.getXPToNextLevel(state.xp);
  const soundIcon = state.settings.soundEnabled ? '🔊' : '🔇';

  return `
    <header class="app-header">
      <div class="header-left">
        <button id="btn-toggle-sidebar" class="btn-icon mobile-menu-btn" aria-label="Abrir Menu Lateral">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        <div class="user-greeting-pill" data-nav="achievements">
          <div class="user-avatar-circle">${state.avatar || '👩‍💼'}</div>
          <div class="user-greeting-text">
            <span class="greeting-subtitle">Olá, bom estudo</span>
            <span class="greeting-name" id="header-user-name">${state.userName || 'Hanna Dias'}</span>
          </div>
        </div>
      </div>

      <div class="header-center">
        <!-- Badge de Gemas/Diamantes (Estilo Academix) -->
        <div class="academix-gem-pill" title="Suas Gemas acumuladas por atividades concluídas">
          <span class="gem-icon">💎</span>
          <span class="gem-count" id="header-gems">${state.gems || 1257}</span>
        </div>

        <!-- Sequência de Dias (Streak) -->
        <div class="header-streak-badge" title="Sequência de dias estudados consecutivamente!">
          <span class="streak-icon">🔥</span>
          <span class="streak-count" id="header-streak">${state.streakDays || 1}</span>
        </div>
      </div>

      <div class="header-right">
        <!-- Nível Compacto -->
        <div class="header-level-pill" data-nav="achievements" title="${state.title}">
          <span class="level-badge" id="header-level">Nv ${state.level}</span>
          <span class="xp-text" id="header-xp-text">${state.xp} XP</span>
        </div>

        <button id="btn-toggle-sound" class="btn-icon sound-btn" title="Alternar som" aria-label="Alternar som">
          <span id="sound-indicator">${soundIcon}</span>
        </button>
      </div>
    </header>
  `;
}

export function initHeaderListeners() {
  const soundBtn = document.getElementById('btn-toggle-sound');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      const state = storage.getState();
      const newSoundState = !state.settings.soundEnabled;
      storage.updateSetting('soundEnabled', newSoundState);
      sound.toggle(newSoundState);
      const indicator = document.getElementById('sound-indicator');
      if (indicator) {
        indicator.textContent = newSoundState ? '🔊' : '🔇';
      }
      if (newSoundState) sound.playClick();
    });
  }

  const userGreeting = document.querySelector('.user-greeting-pill');
  if (userGreeting) {
    userGreeting.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('navigate-to', { detail: 'achievements' }));
    });
  }

  const levelPill = document.querySelector('.header-level-pill');
  if (levelPill) {
    levelPill.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('navigate-to', { detail: 'achievements' }));
    });
  }
}

export function updateHeaderUI() {
  const state = storage.getState();

  const nameEl = document.getElementById('header-user-name');
  if (nameEl) nameEl.textContent = state.userName || 'Hanna Dias';

  const gemsEl = document.getElementById('header-gems');
  if (gemsEl) gemsEl.textContent = state.gems || 1257;

  const streakEl = document.getElementById('header-streak');
  if (streakEl) streakEl.textContent = state.streakDays || 1;

  const levelEl = document.getElementById('header-level');
  if (levelEl) levelEl.textContent = `Nv ${state.level}`;

  const xpTextEl = document.getElementById('header-xp-text');
  if (xpTextEl) xpTextEl.textContent = `${state.xp} XP`;
}
