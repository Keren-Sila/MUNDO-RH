/**
 * MUNDO RH - Painel de Conquistas, Níveis e Estatísticas (Gamificação)
 */

import { ACHIEVEMENTS_DATA } from '../../data/achievements.js';
import { storage } from '../storage.js';

export class AchievementsPanel {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  init() {
    this.render();
  }

  render() {
    if (!this.container) return;
    const state = storage.getState();
    const xpInfo = storage.getXPToNextLevel(state.xp);

    this.container.innerHTML = `
      <div class="achievements-dashboard">
        <!-- Card de Perfil do Jogador -->
        <div class="profile-hero-card">
          <div class="profile-avatar">👔</div>
          <div class="profile-info">
            <span class="profile-level-badge">Nível ${state.level}</span>
            <h2 class="profile-title">${state.title}</h2>
            <div class="profile-streak">🔥 <strong>${state.streakDays || 1} dias</strong> de sequência de estudos</div>
          </div>
          <div class="profile-xp-box">
            <div class="xp-big-number">${state.xp} <span class="xp-unit">XP</span></div>
            <div class="progress-track">
              <div class="progress-fill" style="width: ${xpInfo.percent}%"></div>
            </div>
            <span class="xp-next-label">${xpInfo.percent}% para o próximo nível</span>
          </div>
        </div>

        <!-- Estatísticas Gerais de Aprendizagem -->
        <div class="stats-cards-grid">
          <div class="stat-card">
            <span class="stat-icon">✅</span>
            <div class="stat-number">${state.stats.activitiesCompleted || 0}</div>
            <div class="stat-label">Atividades Realizadas</div>
          </div>
          <div class="stat-card">
            <span class="stat-icon">🔍</span>
            <div class="stat-number">${state.stats.wordsFound || 0}</div>
            <div class="stat-label">Palavras Encontradas</div>
          </div>
          <div class="stat-card">
            <span class="stat-icon">❓</span>
            <div class="stat-number">${state.stats.quizCorrect || 0}</div>
            <div class="stat-label">Acertos no Quiz</div>
          </div>
          <div class="stat-card">
            <span class="stat-icon">⚡</span>
            <div class="stat-number">${state.stats.blitzHighScore || 0}</div>
            <div class="stat-label">Recorde no Relâmpago</div>
          </div>
        </div>

        <!-- Grade de Medalhas e Conquistas -->
        <div class="achievements-section">
          <h3 class="section-title">🏅 Medalhas e Conquistas</h3>
          <div class="achievements-grid">
            ${ACHIEVEMENTS_DATA.map(badge => {
              const isUnlocked = state.unlockedAchievements.includes(badge.id) || (badge.checkCondition && badge.checkCondition(state.stats));
              return `
                <div class="badge-card ${isUnlocked ? 'unlocked' : 'locked'}">
                  <div class="badge-icon-box" style="border-color: ${badge.color};">
                    <span class="badge-emoji">${isUnlocked ? '🏆' : '🔒'}</span>
                  </div>
                  <div class="badge-body">
                    <h4 class="badge-title">${badge.title}</h4>
                    <p class="badge-desc">${badge.description}</p>
                    <span class="badge-reward">+${badge.xpReward} XP</span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  }
}
