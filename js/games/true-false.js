/**
 * MUNDO RH - Modalidade 4: Verdadeiro ou Falso (Legislação e Rotinas)
 */

import { TRUE_FALSE_DATA } from '../../data/questions.js';
import { storage } from '../storage.js';
import { sound, launchConfetti } from '../utils/helpers.js';
import { updateHeaderUI } from '../components/header.js';

export class TrueFalseGame {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.currentIndex = 0;
    this.items = [];
    this.answered = false;
  }

  init(worldId = null) {
    this.items = worldId 
      ? TRUE_FALSE_DATA.filter(tf => tf.worldId === worldId) 
      : TRUE_FALSE_DATA;

    if (this.items.length === 0) this.items = TRUE_FALSE_DATA;
    this.currentIndex = 0;
    this.loadQuestion();
  }

  loadQuestion() {
    this.answered = false;
    this.render();
  }

  render() {
    if (!this.container) return;
    const current = this.items[this.currentIndex];

    this.container.innerHTML = `
      <div class="game-wrapper tf-wrapper">
        <div class="game-top-bar">
          <button class="btn btn-secondary btn-sm" id="btn-back-worlds">⬅ Voltar</button>
          <div class="game-counter">Afirmação ${this.currentIndex + 1} de ${this.items.length}</div>
          <button class="btn btn-outline btn-sm" id="btn-skip-tf">Pular ➡</button>
        </div>

        <div class="game-card">
          <div class="game-card-header">
            <span class="game-type-badge">⚖️ Verdadeiro ou Falso</span>
            <p class="game-instruction">Classifique a afirmação abaixo de acordo com a CLT e as rotinas de RH:</p>
          </div>

          <div class="statement-card">
            <span class="statement-icon">📜</span>
            <p class="statement-text">"${current.statement}"</p>
          </div>

          <div class="tf-actions-row" id="tf-actions">
            <button class="btn btn-success tf-btn" data-choice="true">
              <span class="tf-icon">✔️</span>
              <span class="tf-label">VERDADEIRO</span>
            </button>
            <button class="btn btn-danger tf-btn" data-choice="false">
              <span class="tf-icon">❌</span>
              <span class="tf-label">FALSO</span>
            </button>
          </div>

          <div class="tf-feedback-box hidden" id="tf-feedback">
            <div class="tf-feedback-header" id="tf-feedback-header"></div>
            <div class="tf-feedback-body">
              <strong>Justificativa Legal e Operacional:</strong>
              <p id="tf-feedback-explanation"></p>
            </div>
            <div class="feedback-actions">
              <button class="btn btn-primary" id="btn-next-tf">Próxima Afirmação ➡</button>
            </div>
          </div>
        </div>
      </div>
    `;

    this.attachEvents();
  }

  attachEvents() {
    const backBtn = document.getElementById('btn-back-worlds');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('navigate-to', { detail: 'worlds' }));
      });
    }

    const skipBtn = document.getElementById('btn-skip-tf');
    if (skipBtn) {
      skipBtn.addEventListener('click', () => {
        this.nextQuestion();
      });
    }

    const tfBtns = document.querySelectorAll('.tf-btn');
    tfBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.answered) return;
        const choice = btn.getAttribute('data-choice') === 'true';
        this.handleChoice(choice, btn);
      });
    });

    const nextBtn = document.getElementById('btn-next-tf');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        this.nextQuestion();
      });
    }
  }

  handleChoice(choice, clickedBtn) {
    this.answered = true;
    const current = this.items[this.currentIndex];
    const isCorrect = choice === current.isTrue;

    const feedbackBox = document.getElementById('tf-feedback');
    const headerEl = document.getElementById('tf-feedback-header');
    const explEl = document.getElementById('tf-feedback-explanation');

    const allBtns = document.querySelectorAll('.tf-btn');
    allBtns.forEach(btn => btn.disabled = true);

    if (isCorrect) {
      clickedBtn.classList.add('selected-correct');
      sound.playSuccess();
      launchConfetti();
      headerEl.innerHTML = '<span class="status-badge success">🎉 Parabéns, você acertou! (+20 XP)</span>';
      storage.incrementStat('trueFalseCorrect');
      storage.addXP(20);
      updateHeaderUI();
    } else {
      clickedBtn.classList.add('selected-wrong');
      sound.playError();
      headerEl.innerHTML = `<span class="status-badge error">⚠️ Incorreto! A afirmação é ${current.isTrue ? 'VERDADEIRA' : 'FALSA'}.</span>`;
      storage.addToReview(current.id, current.statement, current.explanation);
    }

    explEl.textContent = current.explanation;
    feedbackBox.classList.remove('hidden');
  }

  nextQuestion() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.loadQuestion();
  }
}
