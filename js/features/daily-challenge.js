/**
 * MUNDO RH - Desafio Diário (Daily Missions)
 */

import { storage } from '../storage.js';

export function getDailyMissions() {
  const state = storage.getState();
  const stats = state.stats;

  return [
    {
      id: 'm1',
      title: 'Caçador de Conceitos',
      description: 'Encontre pelo menos 1 palavra no Caça-palavras',
      done: (stats.wordsFound || 0) >= 1,
      xp: 40
    },
    {
      id: 'm2',
      title: 'Mente Afiada',
      description: 'Acerte 2 perguntas no Quiz de RH',
      done: (stats.quizCorrect || 0) >= 2,
      xp: 40
    },
    {
      id: 'm3',
      title: 'Analista de Holerite',
      description: 'Inspecione qualquer rubrica no Simulador de Recibo',
      done: (stats.receiptExplored || 0) >= 1,
      xp: 40
    }
  ];
}

export function renderDailyChallengeCard() {
  const missions = getDailyMissions();
  const allCompleted = missions.every(m => m.done);

  return `
    <div class="daily-card">
      <div class="daily-header">
        <div class="daily-title-row">
          <span class="daily-icon">📅</span>
          <h3>Missões Diárias de Estudo</h3>
        </div>
        <span class="daily-tag">${allCompleted ? 'Concluído hoje! 🌟' : 'Bônus diário'}</span>
      </div>

      <div class="missions-list">
        ${missions.map(m => `
          <div class="mission-item ${m.done ? 'done' : ''}">
            <div class="mission-check">${m.done ? '✅' : '⚪'}</div>
            <div class="mission-text">
              <strong>${m.title}</strong>
              <p>${m.description}</p>
            </div>
            <div class="mission-xp">+${m.xp} XP</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
