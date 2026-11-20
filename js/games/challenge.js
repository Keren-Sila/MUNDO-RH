/**
 * MUNDO RH - Modalidade 6: Desafio Relâmpago (Blitz / Rapid Recall)
 * Estimula a recuperação rápida de memória, com opção acessível sem limite de tempo.
 */

import { BLITZ_DATA } from '../../data/questions.js';
import { storage } from '../storage.js';
import { sound, launchConfetti } from '../utils/helpers.js';
import { updateHeaderUI } from '../components/header.js';

export class ChallengeGame {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.questions = [];
    this.currentIndex = 0;
    this.score = 0;
    this.timerInterval = null;
    this.timeLeft = 10;
    this.isPlaying = false;
  }

  init() {
    this.questions = [...BLITZ_DATA];
    this.currentIndex = 0;
    this.score = 0;
    this.isPlaying = false;
    this.renderIntro();
  }

  renderIntro() {
    if (!this.container) return;
    const state = storage.getState();

    this.container.innerHTML = `
      <div class="game-wrapper challenge-wrapper">
        <div class="game-card text-center">
          <div class="game-card-header">
            <span class="game-type-badge">⚡ Desafio Relâmpago</span>
            <h2 class="game-card-title">Recuperação Rápida de Memória</h2>
          </div>

          <div class="challenge-intro-content">
            <p>Responda às perguntas o mais rápido possível para treinar sua agilidade mental e memorização dos conceitos de RH.</p>
            
            <div class="accessibility-toggle-box">
              <label class="toggle-switch">
                <input type="checkbox" id="toggle-timer" ${state.settings.timerDisabled ? 'checked' : ''}>
                <span class="slider round"></span>
              </label>
              <span class="toggle-label">Modo Acessível (Sem limite de tempo)</span>
            </div>

            <div class="challenge-stats-preview">
              <div class="stat-pill">
                <span>Recorde Pessoal:</span>
                <strong>${state.stats.blitzHighScore || 0} acertos</strong>
              </div>
            </div>

            <button class="btn btn-primary btn-lg" id="btn-start-blitz">
              🚀 Começar Desafio Agora!
            </button>
          </div>
        </div>
      </div>
    `;

    const startBtn = document.getElementById('btn-start-blitz');
    if (startBtn) {
      startBtn.addEventListener('click', () => this.startGame());
    }

    const timerToggle = document.getElementById('toggle-timer');
    if (timerToggle) {
      timerToggle.addEventListener('change', (e) => {
        storage.updateSetting('timerDisabled', e.target.checked);
      });
    }
  }

  startGame() {
    this.isPlaying = true;
    this.currentIndex = 0;
    this.score = 0;
    this.loadQuestion();
  }

  loadQuestion() {
    if (this.currentIndex >= this.questions.length) {
      this.finishGame();
      return;
    }

    const current = this.questions[this.currentIndex];
    const state = storage.getState();
    const isTimerDisabled = state.settings.timerDisabled;

    this.container.innerHTML = `
      <div class="game-wrapper challenge-wrapper">
        <div class="game-top-bar">
          <div class="game-counter">Pergunta ${this.currentIndex + 1} de ${this.questions.length}</div>
          ${!isTimerDisabled ? `
            <div class="blitz-timer-pill" id="blitz-timer">
              ⏱️ <span id="timer-number">10</span>s
            </div>
          ` : '<span class="badge">Acessível (Sem Tempo)</span>'}
        </div>

        <div class="game-card">
          <h2 class="blitz-question-text">${current.question}</h2>

          <div class="blitz-options-grid" id="blitz-options">
            ${current.options.map((opt, idx) => `
              <button class="btn btn-outline blitz-opt-btn" data-index="${idx}">
                ${opt}
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    this.attachQuestionEvents();

    if (!isTimerDisabled) {
      this.startTimer(current.timeLimit || 10);
    }
  }

  startTimer(seconds) {
    clearInterval(this.timerInterval);
    this.timeLeft = seconds;
    const timerNumber = document.getElementById('timer-number');
    const timerPill = document.getElementById('blitz-timer');

    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      if (timerNumber) timerNumber.textContent = this.timeLeft;

      if (this.timeLeft <= 3 && timerPill) {
        timerPill.classList.add('urgent');
      }

      if (this.timeLeft <= 0) {
        clearInterval(this.timerInterval);
        sound.playError();
        this.nextQuestion(false);
      }
    }, 1000);
  }

  attachQuestionEvents() {
    const btns = document.querySelectorAll('.blitz-opt-btn');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        clearInterval(this.timerInterval);
        const idx = parseInt(btn.getAttribute('data-index'));
        const current = this.questions[this.currentIndex];
        const isCorrect = idx === current.correctIndex;

        if (isCorrect) {
          sound.playSuccess();
          btn.classList.add('correct');
          this.score++;
        } else {
          sound.playError();
          btn.classList.add('wrong');
        }

        setTimeout(() => this.nextQuestion(isCorrect), 600);
      });
    });
  }

  nextQuestion(lastWasCorrect) {
    this.currentIndex++;
    this.loadQuestion();
  }

  finishGame() {
    clearInterval(this.timerInterval);
    this.isPlaying = false;

    const state = storage.getState();
    const isNewHigh = this.score > (state.stats.blitzHighScore || 0);
    if (isNewHigh) {
      storage.incrementStat('blitzHighScore', this.score - (state.stats.blitzHighScore || 0));
    }

    const xpEarned = this.score * 15;
    storage.addXP(xpEarned);
    updateHeaderUI();

    if (this.score >= 4) {
      launchConfetti();
    }

    this.container.innerHTML = `
      <div class="game-wrapper challenge-wrapper">
        <div class="game-card text-center">
          <div class="finish-icon">🏆</div>
          <h2 class="game-card-title">Fim do Desafio Relâmpago!</h2>
          
          <div class="finish-score-display">
            Você acertou <strong>${this.score}</strong> de <strong>${this.questions.length}</strong> perguntas
          </div>

          <div class="success-banner">
            <span>✨ +${xpEarned} XP Conquistados!</span>
          </div>

          ${isNewHigh ? '<div class="new-record-badge">🌟 NOVO RECORDE PESSOAL! 🌟</div>' : ''}

          <div class="finish-actions">
            <button class="btn btn-primary" id="btn-replay-blitz">🔄 Jogar Novamente</button>
            <button class="btn btn-secondary" id="btn-home-blitz">🏠 Voltar ao Início</button>
          </div>
        </div>
      </div>
    `;

    document.getElementById('btn-replay-blitz')?.addEventListener('click', () => this.startGame());
    document.getElementById('btn-home-blitz')?.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('navigate-to', { detail: 'home' }));
    });
  }
}
