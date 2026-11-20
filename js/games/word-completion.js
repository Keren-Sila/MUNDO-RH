/**
 * MUNDO RH - Modalidade 3: Complete a Palavra (Word Completion)
 */

import { WORD_COMPLETION_DATA } from '../../data/questions.js';
import { storage } from '../storage.js';
import { sound, launchConfetti, normalizeText } from '../utils/helpers.js';
import { updateHeaderUI } from '../components/header.js';
import { modal } from '../components/modal.js';

export class WordCompletionGame {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.currentIndex = 0;
    this.items = [];
    this.targetAnswer = '';
    this.guessedLetters = new Set();
    this.maxErrors = 6;
    this.errorsCount = 0;
    this.completed = false;
  }

  init(worldId = null) {
    this.items = worldId 
      ? WORD_COMPLETION_DATA.filter(w => w.worldId === worldId) 
      : WORD_COMPLETION_DATA;

    if (this.items.length === 0) this.items = WORD_COMPLETION_DATA;
    this.currentIndex = 0;
    this.loadItem();
  }

  loadItem() {
    this.completed = false;
    this.errorsCount = 0;
    this.guessedLetters = new Set([' ']); // Espaços já vêm liberados
    const current = this.items[this.currentIndex];
    this.targetAnswer = normalizeText(current.answer);

    // Se o displayPattern já der algumas letras fixas, adicionamos elas
    // Revela algumas vogais/consoantes automaticamente como ajuda didática
    const lettersInAnswer = Array.from(new Set(this.targetAnswer.replace(/\s+/g, '')));
    if (lettersInAnswer.length > 3) {
      // Revela 1 ou 2 letras iniciais
      this.guessedLetters.add(lettersInAnswer[0]);
    }

    this.render();
  }

  render() {
    if (!this.container) return;
    const current = this.items[this.currentIndex];

    this.container.innerHTML = `
      <div class="game-wrapper completion-wrapper">
        <div class="game-top-bar">
          <button class="btn btn-secondary btn-sm" id="btn-back-worlds">⬅ Voltar</button>
          <div class="game-counter">Palavra ${this.currentIndex + 1} de ${this.items.length}</div>
          <button class="btn btn-outline btn-sm" id="btn-skip-wc">Pular ➡</button>
        </div>

        <div class="game-card">
          <div class="game-card-header">
            <span class="game-type-badge">✏️ Complete o Termo de RH</span>
            <h2 class="game-card-title">Descubra as letras que faltam</h2>
          </div>

          <div class="clue-box">
            <span class="clue-icon">💡</span>
            <div class="clue-content">
              <strong>Pista:</strong>
              <p>${current.clue}</p>
            </div>
          </div>

          <div class="word-slots-container" id="word-slots">
            ${this.renderSlots()}
          </div>

          <div class="errors-indicator">
            Tentativas restantes: <span class="error-badge" id="attempts-left">${this.maxErrors - this.errorsCount}</span>
          </div>

          <div class="virtual-keyboard" id="virtual-keyboard">
            ${this.renderKeyboard()}
          </div>
        </div>
      </div>
    `;

    this.attachEvents();
  }

  renderSlots() {
    const words = this.targetAnswer.split(' ');
    return words.map(word => `
      <div class="word-group">
        ${Array.from(word).map(char => {
          const isGuessed = this.guessedLetters.has(char);
          return `
            <div class="letter-slot ${isGuessed ? 'revealed' : ''}">
              ${isGuessed ? char : ''}
            </div>
          `;
        }).join('')}
      </div>
    `).join('<div class="slot-space"></div>');
  }

  renderKeyboard() {
    const rows = [
      'QWERTYUIOP',
      'ASDFGHJKL',
      'ZXCVBNM'
    ];

    return rows.map(row => `
      <div class="keyboard-row">
        ${Array.from(row).map(letter => {
          const used = this.guessedLetters.has(letter);
          return `
            <button class="key-btn ${used ? 'used' : ''}" data-letter="${letter}" ${used ? 'disabled' : ''}>
              ${letter}
            </button>
          `;
        }).join('')}
      </div>
    `).join('');
  }

  attachEvents() {
    const backBtn = document.getElementById('btn-back-worlds');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('navigate-to', { detail: 'worlds' }));
      });
    }

    const skipBtn = document.getElementById('btn-skip-wc');
    if (skipBtn) {
      skipBtn.addEventListener('click', () => {
        this.nextItem();
      });
    }

    const keyBtns = document.querySelectorAll('.key-btn');
    keyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const letter = btn.getAttribute('data-letter');
        this.handleLetterGuess(letter);
      });
    });

    // Suporte para teclado físico
    this.keyHandler = (e) => {
      if (this.completed) return;
      const key = e.key.toUpperCase();
      if (/^[A-Z]$/.test(key) && !this.guessedLetters.has(key)) {
        this.handleLetterGuess(key);
      }
    };
    window.addEventListener('keydown', this.keyHandler);
  }

  handleLetterGuess(letter) {
    if (this.completed || this.guessedLetters.has(letter)) return;

    this.guessedLetters.add(letter);

    if (this.targetAnswer.includes(letter)) {
      sound.playClick();
    } else {
      this.errorsCount++;
      sound.playError();
    }

    // Atualiza slots e teclado
    const slotsEl = document.getElementById('word-slots');
    if (slotsEl) slotsEl.innerHTML = this.renderSlots();

    const attemptsEl = document.getElementById('attempts-left');
    if (attemptsEl) attemptsEl.textContent = Math.max(0, this.maxErrors - this.errorsCount);

    const btn = document.querySelector(`.key-btn[data-letter="${letter}"]`);
    if (btn) {
      btn.classList.add('used');
      btn.disabled = true;
    }

    this.checkGameStatus();
  }

  checkGameStatus() {
    // Verifica se todas as letras foram adivinhadas
    const allRevealed = Array.from(this.targetAnswer.replace(/\s+/g, '')).every(char => this.guessedLetters.has(char));

    if (allRevealed) {
      this.completed = true;
      sound.playSuccess();
      launchConfetti();
      storage.addXP(30);
      updateHeaderUI();

      const current = this.items[this.currentIndex];
      modal.show({
        title: `🏆 Excelente! Palavra: ${current.answer}`,
        body: `
          <div class="completion-explanation">
            <div class="success-banner"><span>✨ +30 XP Adquiridos!</span></div>
            <p><strong>Definição Prática:</strong> ${current.explanation}</p>
          </div>
        `,
        footerText: 'Próxima Palavra',
        type: 'success',
        onAction: () => this.nextItem()
      });
    } else if (this.errorsCount >= this.maxErrors) {
      this.completed = true;
      sound.playError();
      const current = this.items[this.currentIndex];
      modal.show({
        title: `Tentativas esgotadas!`,
        body: `
          <div class="completion-explanation">
            <p>A palavra correta era: <strong>${current.answer}</strong></p>
            <p>${current.explanation}</p>
          </div>
        `,
        footerText: 'Tentar a Próxima',
        type: 'info',
        onAction: () => this.nextItem()
      });
    }
  }

  nextItem() {
    if (this.keyHandler) {
      window.removeEventListener('keydown', this.keyHandler);
    }
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.loadItem();
  }
}
