/**
 * MUNDO RH - Componente de Cabeçalho Superior (Header)
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
        <button id="btn-toggle-sidebar" class="btn-icon mobile-menu-btn" aria-label="Abrir Menu de Navegação">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <div class="header-logo" data-nav="home">
          <span class="logo-icon">🏢</span>
          <div class="logo-text">
            <span class="logo-title">MUNDO RH</span>
            <span class="logo-subtitle">Aprenda na Prática</span>
          </div>
        </div>
      </div>

      <div class="header-center">
        <div class="header-streak-badge" title="Sequência de dias estudados consecutivamente!">
          <span class="streak-icon">🔥</span>
          <span class="streak-count" id="header-streak">${state.streakDays || 1}</span>
          <span class="streak-label">dias</span>
        </div>

        <div class="header-level-container" title="Progresso para o próximo nível">
          <div class="level-info">
            <span class="level-badge" id="header-level">Nível ${state.level}</span>
            <span class="level-title" id="header-title">${state.title}</span>
          </div>
          <div class="level-bar-track">
            <div class="level-bar-fill" id="header-xp-bar" style="width: ${xpInfo.percent}%"></div>
          </div>
          <span class="xp-text" id="header-xp-text">${state.xp} XP</span>
        </div>
      </div>

      <div class="header-right">
        <button id="btn-toggle-sound" class="btn-icon sound-btn" title="Alternar som do jogo" aria-label="Alternar som">
          <span id="sound-indicator">${soundIcon}</span>
        </button>
        <button id="btn-profile-stats" class="btn-icon badge-btn" data-nav="achievements" title="Conquistas e Estatísticas" aria-label="Ver conquistas">
          🏆
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

  const logo = document.querySelector('.header-logo');
  if (logo) {
    logo.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('navigate-to', { detail: 'home' }));
    });
  }

  const badgeBtn = document.getElementById('btn-profile-stats');
  if (badgeBtn) {
    badgeBtn.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('navigate-to', { detail: 'achievements' }));
    });
  }
}

export function updateHeaderUI() {
  const state = storage.getState();
  const xpInfo = storage.getXPToNextLevel(state.xp);

  const streakEl = document.getElementById('header-streak');
  if (streakEl) streakEl.textContent = state.streakDays || 1;

  const levelEl = document.getElementById('header-level');
  if (levelEl) levelEl.textContent = `Nível ${state.level}`;

  const titleEl = document.getElementById('header-title');
  if (titleEl) titleEl.textContent = state.title;

  const xpBarEl = document.getElementById('header-xp-bar');
  if (xpBarEl) xpBarEl.style.width = `${xpInfo.percent}%`;

  const xpTextEl = document.getElementById('header-xp-text');
  if (xpTextEl) xpTextEl.textContent = `${state.xp} XP`;
}
