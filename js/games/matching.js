/**
 * MUNDO RH - Modalidade 5: Ligue os Conceitos (Matching Terms & Definitions)
 */

import { MATCHING_DATA } from '../../data/questions.js';
import { storage } from '../storage.js';
import { sound, launchConfetti, shuffleArray } from '../utils/helpers.js';
import { updateHeaderUI } from '../components/header.js';
import { modal } from '../components/modal.js';

export class MatchingGame {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.currentIndex = 0;
    this.items = [];
    this.selectedLeft = null;
    this.selectedRight = null;
    this.matchedPairs = new Set();
  }

  init(worldId = null) {
    this.items = worldId 
      ? MATCHING_DATA.filter(m => m.worldId === worldId) 
      : MATCHING_DATA;

    if (this.items.length === 0) this.items = MATCHING_DATA;
    this.currentIndex = 0;
    this.loadSet();
  }

  loadSet() {
    this.selectedLeft = null;
    this.selectedRight = null;
    this.matchedPairs.clear();

    const currentSet = this.items[this.currentIndex];
    this.leftItems = shuffleArray(currentSet.pairs.map(p => ({ id: p.id, text: p.left })));
    this.rightItems = shuffleArray(currentSet.pairs.map(p => ({ id: p.id, text: p.right })));

    this.render();
  }

  render() {
    if (!this.container) return;
    const currentSet = this.items[this.currentIndex];

    this.container.innerHTML = `
      <div class="game-wrapper matching-wrapper">
        <div class="game-top-bar">
          <button class="btn btn-secondary btn-sm" id="btn-back-worlds">⬅ Voltar</button>
          <div class="game-counter">Conjunto ${this.currentIndex + 1} de ${this.items.length}</div>
          <button class="btn btn-outline btn-sm" id="btn-next-set">Próximo ➡</button>
        </div>

        <div class="game-card">
          <div class="game-card-header">
            <span class="game-type-badge">🔗 Ligue os Conceitos</span>
            <h2 class="game-card-title">${currentSet.title}</h2>
            <p class="game-instruction">Toque em um termo da coluna da esquerda e depois na sua definição correspondente à direita:</p>
          </div>

          <div class="matching-columns-container">
            <div class="matching-column" id="left-column">
              <h3 class="col-title">📌 Termos de RH</h3>
              ${this.leftItems.map(item => `
                <button class="match-item-btn left-item" data-id="${item.id}">
                  ${item.text}
                </button>
              `).join('')}
            </div>

            <div class="matching-column" id="right-column">
              <h3 class="col-title">📖 Definições & Aplicações</h3>
              ${this.rightItems.map(item => `
                <button class="match-item-btn right-item" data-id="${item.id}">
                  ${item.text}
                </button>
              `).join('')}
            </div>
          </div>

          <div class="matching-progress-info">
            Pares conectados: <span id="matched-count">0</span> de ${currentSet.pairs.length}
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

    const nextBtn = document.getElementById('btn-next-set');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        this.nextSet();
      });
    }

    const leftBtns = document.querySelectorAll('.left-item');
    leftBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        if (this.matchedPairs.has(id)) return;

        leftBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.selectedLeft = id;
        sound.playClick();
        this.checkMatch();
      });
    });

    const rightBtns = document.querySelectorAll('.right-item');
    rightBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        if (this.matchedPairs.has(id)) return;

        rightBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.selectedRight = id;
        sound.playClick();
        this.checkMatch();
      });
    });
  }

  checkMatch() {
    if (!this.selectedLeft || !this.selectedRight) return;

    const leftBtn = document.querySelector(`.left-item[data-id="${this.selectedLeft}"]`);
    const rightBtn = document.querySelector(`.right-item[data-id="${this.selectedRight}"]`);

    if (this.selectedLeft === this.selectedRight) {
      // Casamento perfeito!
      sound.playSuccess();
      leftBtn.classList.remove('selected');
      rightBtn.classList.remove('selected');
      leftBtn.classList.add('matched');
      rightBtn.classList.add('matched');

      this.matchedPairs.add(this.selectedLeft);
      this.selectedLeft = null;
      this.selectedRight = null;

      const countEl = document.getElementById('matched-count');
      if (countEl) countEl.textContent = this.matchedPairs.size;

      storage.incrementStat('matchingPairs');

      // Verifica se todos foram conectados
      const currentSet = this.items[this.currentIndex];
      if (this.matchedPairs.size === currentSet.pairs.length) {
        launchConfetti();
        storage.addXP(40);
        updateHeaderUI();

        modal.show({
          title: '🎉 Incrível! Você conectou todos os conceitos!',
          body: `
            <div class="matching-finish">
              <div class="success-banner"><span>✨ +40 XP Adquiridos!</span></div>
              <p>Você compreende perfeitamente a relação prática entre estes conceitos de RH.</p>
            </div>
          `,
          footerText: 'Próximo Desafio',
          type: 'success',
          onAction: () => this.nextSet()
        });
      }
    } else {
      // Erro
      sound.playError();
      leftBtn.classList.add('shake-error');
      rightBtn.classList.add('shake-error');

      setTimeout(() => {
        leftBtn.classList.remove('selected', 'shake-error');
        rightBtn.classList.remove('selected', 'shake-error');
        this.selectedLeft = null;
        this.selectedRight = null;
      }, 700);
    }
  }

  nextSet() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.loadSet();
  }
}
