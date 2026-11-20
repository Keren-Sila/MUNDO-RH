/**
 * MUNDO RH - Sistema de Revisão Inteligente e Repetição Espaçada
 * Fortalece a memória de longo prazo reapresentando conceitos que o jogador errou.
 */

import { storage } from '../storage.js';
import { sound, launchConfetti } from '../utils/helpers.js';
import { updateHeaderUI } from '../components/header.js';

export class ReviewSystem {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.reviewList = [];
    this.currentIndex = 0;
    this.isFlipped = false;
  }

  init() {
    const state = storage.getState();
    this.reviewList = state.reviewList || [];
    this.currentIndex = 0;
    this.isFlipped = false;
    this.render();
  }

  render() {
    if (!this.container) return;

    if (this.reviewList.length === 0) {
      this.renderEmptyState();
      return;
    }

    const current = this.reviewList[this.currentIndex];

    this.container.innerHTML = `
      <div class="review-wrapper">
        <div class="game-top-bar">
          <div class="game-counter">Revisão ${this.currentIndex + 1} de ${this.reviewList.length}</div>
          <span class="badge badge-accent">Repetição Espaçada</span>
        </div>

        <div class="review-card-container">
          <div class="flashcard ${this.isFlipped ? 'flipped' : ''}" id="review-flashcard">
            <!-- Frente do Cartão -->
            <div class="flashcard-face flashcard-front">
              <span class="flashcard-badge">❓ Pergunta / Conceito para Revisar</span>
              <h3 class="flashcard-title">${current.term}</h3>
              <p class="flashcard-hint">Tente se lembrar mentalmente da resposta ou explique em voz alta...</p>
              <button class="btn btn-outline" id="btn-flip-card">🔄 Revelar Explicação</button>
            </div>

            <!-- Verso do Cartão -->
            <div class="flashcard-face flashcard-back">
              <span class="flashcard-badge success">📖 Resposta & Contexto Prático</span>
              <div class="flashcard-explanation">
                <p>${current.context}</p>
              </div>
              <div class="flashcard-actions">
                <button class="btn btn-danger" id="btn-review-again">Preciso Rever Novamente</button>
                <button class="btn btn-success" id="btn-review-mastered">Já Dominei! (+20 XP)</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    this.attachEvents();
  }

  renderEmptyState() {
    this.container.innerHTML = `
      <div class="game-card text-center review-empty-card">
        <div class="finish-icon">🧠✨</div>
        <h2 class="game-card-title">Sua Memória está em Dia!</h2>
        <p>Você não tem nenhum conceito pendente para revisão no momento. Todos os tópicos estudados foram dominados com sucesso!</p>
        <button class="btn btn-primary" id="btn-go-games">Explorar Novos Jogos</button>
      </div>
    `;

    document.getElementById('btn-go-games')?.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('navigate-to', { detail: 'worlds' }));
    });
  }

  attachEvents() {
    const card = document.getElementById('review-flashcard');
    const flipBtn = document.getElementById('btn-flip-card');

    flipBtn?.addEventListener('click', () => {
      sound.playClick();
      this.isFlipped = true;
      card?.classList.add('flipped');
    });

    document.getElementById('btn-review-again')?.addEventListener('click', () => {
      sound.playClick();
      this.currentIndex = (this.currentIndex + 1) % this.reviewList.length;
      this.isFlipped = false;
      this.render();
    });

    document.getElementById('btn-review-mastered')?.addEventListener('click', () => {
      sound.playSuccess();
      launchConfetti();
      const current = this.reviewList[this.currentIndex];
      storage.markConceptMastered(current.id);
      storage.addXP(20);
      updateHeaderUI();

      this.reviewList.splice(this.currentIndex, 1);
      if (this.currentIndex >= this.reviewList.length) {
        this.currentIndex = 0;
      }
      this.isFlipped = false;
      this.render();
    });
  }
}
