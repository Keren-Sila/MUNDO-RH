/**
 * MUNDO RH - Modalidade 1: Caça-palavras Interativo
 * Responsivo, suporta toque e clique/arraste, com explicações didáticas imediatas.
 */

import { WORD_SEARCH_DATA } from '../../data/questions.js';
import { storage } from '../storage.js';
import { sound, launchConfetti } from '../utils/helpers.js';
import { modal } from '../components/modal.js';
import { updateHeaderUI } from '../components/header.js';

export class WordSearchGame {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.currentIndex = 0;
    this.gridSize = 10;
    this.grid = [];
    this.selectedCells = [];
    this.isSelecting = false;
    this.wordData = null;
    this.wordPlacement = null; // { word, coords: [] }
    this.found = false;
  }

  init(worldId = null) {
    this.items = worldId 
      ? WORD_SEARCH_DATA.filter(i => i.worldId === worldId) 
      : WORD_SEARCH_DATA;

    if (this.items.length === 0) this.items = WORD_SEARCH_DATA;
    this.currentIndex = 0;
    this.loadCurrentWord();
  }

  loadCurrentWord() {
    this.found = false;
    this.selectedCells = [];
    this.wordData = this.items[this.currentIndex];
    this.generateGrid();
    this.render();
  }

  generateGrid() {
    const size = this.gridSize;
    this.grid = Array.from({ length: size }, () => Array(size).fill(''));
    const word = this.wordData.word.replace(/\s+/g, '').toUpperCase();

    // Tenta posicionar a palavra horizontal, vertical ou diagonal
    const directions = [
      { r: 0, c: 1 },  // Horizontal direita
      { r: 1, c: 0 },  // Vertical baixo
      { r: 1, c: 1 }   // Diagonal baixo-direita
    ];
    
    let placed = false;
    let attempts = 0;

    while (!placed && attempts < 100) {
      attempts++;
      const dir = directions[Math.floor(Math.random() * directions.length)];
      const maxR = size - dir.r * word.length;
      const maxC = size - dir.c * word.length;

      if (maxR < 0 || maxC < 0) continue;

      const startR = Math.floor(Math.random() * (maxR + 1));
      const startC = Math.floor(Math.random() * (maxC + 1));

      const coords = [];
      for (let i = 0; i < word.length; i++) {
        const r = startR + dir.r * i;
        const c = startC + dir.c * i;
        this.grid[r][c] = word[i];
        coords.push({ r, c });
      }

      this.wordPlacement = { word, coords };
      placed = true;
    }

    // Preenche espaços restantes com letras aleatórias
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (!this.grid[r][c]) {
          this.grid[r][c] = alphabet[Math.floor(Math.random() * alphabet.length)];
        }
      }
    }
  }

  render() {
    if (!this.container) return;

    this.container.innerHTML = `
      <div class="game-wrapper word-search-wrapper">
        <div class="game-top-bar">
          <button class="btn btn-secondary btn-sm" id="btn-back-worlds">⬅ Voltar aos Mundos</button>
          <div class="game-counter">Palavra ${this.currentIndex + 1} de ${this.items.length}</div>
          <button class="btn btn-outline btn-sm" id="btn-next-word">Próxima ➡</button>
        </div>

        <div class="game-card">
          <div class="game-card-header">
            <span class="game-type-badge">🔍 Caça-palavras de RH</span>
            <h2 class="game-card-title">Encontre o Termo Oculto</h2>
          </div>

          <div class="clue-box">
            <span class="clue-icon">💡</span>
            <div class="clue-content">
              <strong>Pista Didática:</strong>
              <p>${this.wordData.clue}</p>
            </div>
          </div>

          <div class="target-word-display">
            <span class="target-label">Palavra a procurar:</span>
            <span class="target-badge">${this.wordData.word}</span>
            <span class="target-length">(${this.wordData.word.length} letras)</span>
          </div>

          <div class="word-search-grid-container">
            <div class="word-search-grid" id="ws-grid" style="--grid-size: ${this.gridSize}">
              ${this.renderGridCells()}
            </div>
          </div>

          <div class="selection-preview" id="selection-preview">
            Selecionado: <span id="current-word-selected">-</span>
          </div>
        </div>
      </div>
    `;

    this.attachEvents();
  }

  renderGridCells() {
    let html = '';
    for (let r = 0; r < this.gridSize; r++) {
      for (let c = 0; c < this.gridSize; c++) {
        const letter = this.grid[r][c];
        html += `<div class="ws-cell" data-r="${r}" data-c="${c}">${letter}</div>`;
      }
    }
    return html;
  }

  attachEvents() {
    const grid = document.getElementById('ws-grid');
    if (!grid) return;

    const backBtn = document.getElementById('btn-back-worlds');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('navigate-to', { detail: 'worlds' }));
      });
    }

    const nextBtn = document.getElementById('btn-next-word');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        this.nextWord();
      });
    }

    // Suporte para mouse e toque
    const cells = grid.querySelectorAll('.ws-cell');
    
    // Tratamento de toque / clique individual ou arraste
    cells.forEach(cell => {
      cell.addEventListener('mousedown', (e) => this.handleCellStart(cell));
      cell.addEventListener('mouseenter', (e) => {
        if (this.isSelecting) this.handleCellMove(cell);
      });
      cell.addEventListener('click', (e) => this.handleCellClick(cell));
    });

    document.addEventListener('mouseup', () => this.handleEndSelection());

    // Eventos de toque para celulares e tablets
    grid.addEventListener('touchstart', (e) => {
      const touch = e.touches[0];
      const target = document.elementFromPoint(touch.clientX, touch.clientY);
      if (target && target.classList.contains('ws-cell')) {
        this.handleCellStart(target);
      }
    }, { passive: true });

    grid.addEventListener('touchmove', (e) => {
      const touch = e.touches[0];
      const target = document.elementFromPoint(touch.clientX, touch.clientY);
      if (target && target.classList.contains('ws-cell') && this.isSelecting) {
        this.handleCellMove(target);
      }
    }, { passive: true });

    grid.addEventListener('touchend', () => this.handleEndSelection());
  }

  handleCellClick(cell) {
    if (this.found) return;
    const r = parseInt(cell.getAttribute('data-r'));
    const c = parseInt(cell.getAttribute('data-c'));
    const idx = this.selectedCells.findIndex(cellCoord => cellCoord.r === r && cellCoord.c === c);

    if (idx >= 0) {
      this.selectedCells.splice(idx, 1);
      cell.classList.remove('selected');
    } else {
      this.selectedCells.push({ r, c, letter: cell.textContent });
      cell.classList.add('selected');
      sound.playClick();
    }
    this.updatePreview();
    this.checkSelection();
  }

  handleCellStart(cell) {
    if (this.found) return;
    this.isSelecting = true;
    this.clearSelection();
    const r = parseInt(cell.getAttribute('data-r'));
    const c = parseInt(cell.getAttribute('data-c'));
    this.selectedCells.push({ r, c, letter: cell.textContent });
    cell.classList.add('selected');
    sound.playClick();
    this.updatePreview();
  }

  handleCellMove(cell) {
    if (!this.isSelecting || this.found) return;
    const r = parseInt(cell.getAttribute('data-r'));
    const c = parseInt(cell.getAttribute('data-c'));

    if (!this.selectedCells.some(item => item.r === r && item.c === c)) {
      this.selectedCells.push({ r, c, letter: cell.textContent });
      cell.classList.add('selected');
      sound.playClick();
      this.updatePreview();
    }
  }

  handleEndSelection() {
    if (!this.isSelecting) return;
    this.isSelecting = false;
    this.checkSelection();
  }

  clearSelection() {
    this.selectedCells = [];
    const cells = document.querySelectorAll('.ws-cell.selected');
    cells.forEach(c => c.classList.remove('selected'));
    this.updatePreview();
  }

  updatePreview() {
    const previewEl = document.getElementById('current-word-selected');
    if (previewEl) {
      const text = this.selectedCells.map(c => c.letter).join('');
      previewEl.textContent = text || '-';
    }
  }

  checkSelection() {
    if (this.found) return;
    const selectedText = this.selectedCells.map(c => c.letter).join('');
    const targetWord = this.wordData.word.replace(/\s+/g, '').toUpperCase();

    if (selectedText === targetWord) {
      this.handleWordFound();
    }
  }

  handleWordFound() {
    this.found = true;
    sound.playSuccess();
    launchConfetti();

    // Marca células como encontradas permanentemente
    this.selectedCells.forEach(coord => {
      const cellEl = document.querySelector(`.ws-cell[data-r="${coord.r}"][data-c="${coord.c}"]`);
      if (cellEl) {
        cellEl.classList.remove('selected');
        cellEl.classList.add('found');
      }
    });

    // Salva XP e estatísticas
    storage.incrementStat('wordsFound');
    const xpResult = storage.addXP(30);
    updateHeaderUI();

    // Modal didático com explicação aprofundada
    modal.show({
      title: `🎉 Parabéns! Você encontrou: ${this.wordData.word}`,
      body: `
        <div class="found-explanation">
          <div class="success-banner">
            <span>✨ +30 XP Adquiridos!</span>
          </div>
          <div class="explanation-box">
            <h4>📖 O que significa na prática?</h4>
            <p>${this.wordData.explanation}</p>
          </div>
          <div class="concept-clue">
            <strong>Contexto no dia a dia:</strong>
            <p>${this.wordData.clue}</p>
          </div>
        </div>
      `,
      footerText: 'Continuar Estudando',
      type: 'success',
      onAction: () => {
        if (xpResult.leveledUp) {
          sound.playLevelUp();
        }
        this.nextWord();
      }
    });
  }

  nextWord() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.loadCurrentWord();
  }
}
