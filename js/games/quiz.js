/**
 * MUNDO RH - Modalidade 2: Quiz Didático Interativo
 */

import { QUIZ_DATA } from '../../data/questions.js';
import { storage } from '../storage.js';
import { sound, launchConfetti } from '../utils/helpers.js';
import { updateHeaderUI } from '../components/header.js';

export class QuizGame {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.currentIndex = 0;
    this.items = [];
    this.answered = false;
  }

  init(worldId = null) {
    this.items = worldId 
      ? QUIZ_DATA.filter(q => q.worldId === worldId) 
      : QUIZ_DATA;

    if (this.items.length === 0) this.items = QUIZ_DATA;
    this.currentIndex = 0;
    this.loadQuestion();
  }

  loadQuestion() {
    this.answered = false;
    this.render();
  }

  render() {
    if (!this.container) return;
    const currentQ = this.items[this.currentIndex];

    this.container.innerHTML = `
      <div class="game-wrapper quiz-wrapper">
        <div class="game-top-bar">
          <button class="btn btn-secondary btn-sm" id="btn-back-worlds">⬅ Voltar</button>
          <div class="game-counter">Pergunta ${this.currentIndex + 1} de ${this.items.length}</div>
          <button class="btn btn-outline btn-sm" id="btn-skip-q">Pular ➡</button>
        </div>

        <div class="game-card">
          <div class="game-card-header">
            <span class="game-type-badge">❓ Quiz de Recursos Humanos</span>
            <h2 class="game-card-title">${currentQ.question}</h2>
          </div>

          <div class="quiz-options-list" id="quiz-options">
            ${currentQ.options.map((opt, idx) => `
              <button class="quiz-option-btn" data-index="${idx}">
                <span class="opt-letter">${String.fromCharCode(65 + idx)}</span>
                <span class="opt-text">${opt}</span>
              </button>
            `).join('')}
          </div>

          <div class="quiz-feedback-box hidden" id="quiz-feedback">
            <div class="feedback-status" id="feedback-status"></div>
            <div class="feedback-explanation">
              <strong>Entendimento Prático:</strong>
              <p id="feedback-explanation-text"></p>
            </div>
            <div class="feedback-context">
              <strong>Aplicação na Rotina:</strong>
              <p id="feedback-context-text"></p>
            </div>
            <div class="feedback-actions">
              <button class="btn btn-primary" id="btn-next-question">Próxima Pergunta ➡</button>
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

    const skipBtn = document.getElementById('btn-skip-q');
    if (skipBtn) {
      skipBtn.addEventListener('click', () => {
        this.nextQuestion();
      });
    }

    const optionBtns = document.querySelectorAll('.quiz-option-btn');
    optionBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.answered) return;
        const selectedIdx = parseInt(btn.getAttribute('data-index'));
        this.handleAnswer(selectedIdx, btn);
      });
    });

    const nextBtn = document.getElementById('btn-next-question');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        this.nextQuestion();
      });
    }
  }

  handleAnswer(selectedIndex, clickedBtn) {
    this.answered = true;
    const currentQ = this.items[this.currentIndex];
    const isCorrect = selectedIndex === currentQ.correctIndex;

    const feedbackBox = document.getElementById('quiz-feedback');
    const statusEl = document.getElementById('feedback-status');
    const explEl = document.getElementById('feedback-explanation-text');
    const ctxEl = document.getElementById('feedback-context-text');

    const allButtons = document.querySelectorAll('.quiz-option-btn');
    allButtons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === currentQ.correctIndex) {
        btn.classList.add('correct');
      }
    });

    if (isCorrect) {
      clickedBtn.classList.add('correct');
      sound.playSuccess();
      launchConfetti();
      statusEl.innerHTML = '<span class="status-badge success">✅ Resposta Correta! (+25 XP)</span>';
      
      storage.incrementStat('quizCorrect');
      storage.incrementStat('quizTotal');
      storage.addXP(25);
      updateHeaderUI();
    } else {
      clickedBtn.classList.add('wrong');
      sound.playError();
      statusEl.innerHTML = '<span class="status-badge error">❌ Não foi dessa vez! Vamos aprender:</span>';
      
      storage.incrementStat('quizTotal');
      // Adiciona à revisão inteligente para fortalecimento de memória
      storage.addToReview(currentQ.id, currentQ.question, currentQ.explanation);
    }

    explEl.textContent = currentQ.explanation;
    ctxEl.textContent = currentQ.practicalContext || 'Essencial para a conformidade legal e comunicação assertiva no ambiente de trabalho.';
    feedbackBox.classList.remove('hidden');
  }

  nextQuestion() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.loadQuestion();
  }
}
