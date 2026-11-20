/**
 * MUNDO RH - Executor Interativo de Fases (Phase Runner)
 * Executa as 5 etapas pedagógicas de cada fase:
 * 1. Aprenda -> 2. Memorize -> 3. Pratique -> 4. Calcule -> 5. Desafio Final
 */

import { getPhaseById, WORLD1_PHASES } from '../../data/world1-phases.js';
import { storage } from '../storage.js';
import { sound, launchConfetti } from '../utils/helpers.js';
import { updateHeaderUI } from '../components/header.js';
import { modal } from '../components/modal.js';

export class PhaseRunner {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.phase = null;
    this.currentStep = 'aprenda'; // 'aprenda' | 'memorize' | 'pratique' | 'calcule' | 'desafio'
    this.practiceIndex = 0;
    this.practiceAnswers = {};
    this.matchingSelectedLeft = null;
    this.matchingSelectedRight = null;
    this.matchedPairs = new Set();
  }

  init(phaseId = 'fase-1') {
    this.phase = getPhaseById(phaseId) || WORLD1_PHASES[0];
    this.currentStep = 'aprenda';
    this.practiceIndex = 0;
    this.practiceAnswers = {};
    this.matchedPairs.clear();
    this.render();
  }

  setStep(stepName) {
    this.currentStep = stepName;
    sound.playClick();
    this.render();
  }

  render() {
    if (!this.container || !this.phase) return;
    const p = this.phase;

    this.container.innerHTML = `
      <div class="phase-runner-wrapper">
        <!-- Topo da Fase -->
        <div class="phase-top-bar">
          <button class="btn btn-secondary btn-sm" id="btn-back-to-phases">
            ⬅ Fases da Folha
          </button>
          <div class="phase-info-badge">
            <span class="phase-badge-num">Fase ${p.number}</span>
            <span class="phase-badge-title">${p.title}</span>
          </div>
          <div class="phase-gem-badge">
            <span>💎 +${p.finalChallenge.gemsReward}</span>
          </div>
        </div>

        <!-- Stepper de 5 Etapas Pedagógicas (Estilo Academix) -->
        <div class="phase-stepper-container">
          <button class="stepper-tab ${this.currentStep === 'aprenda' ? 'active' : ''}" data-step="aprenda">
            <span class="step-num">1</span>
            <span class="step-text">Aprenda</span>
          </button>
          <button class="stepper-tab ${this.currentStep === 'memorize' ? 'active' : ''}" data-step="memorize">
            <span class="step-num">2</span>
            <span class="step-text">Memorize</span>
          </button>
          <button class="stepper-tab ${this.currentStep === 'pratique' ? 'active' : ''}" data-step="pratique">
            <span class="step-num">3</span>
            <span class="step-text">Pratique</span>
          </button>
          <button class="stepper-tab ${this.currentStep === 'calcule' ? 'active' : ''}" data-step="calcule">
            <span class="step-num">4</span>
            <span class="step-text">Calcule</span>
          </button>
          <button class="stepper-tab ${this.currentStep === 'desafio' ? 'active' : ''}" data-step="desafio">
            <span class="step-num">5</span>
            <span class="step-text">Desafio</span>
          </button>
        </div>

        <!-- Conteúdo da Etapa Ativa -->
        <div class="phase-step-body">
          ${this.renderStepContent()}
        </div>
      </div>
    `;

    this.attachEvents();
  }

  renderStepContent() {
    switch (this.currentStep) {
      case 'aprenda':
        return this.renderLearnStep();
      case 'memorize':
        return this.renderMemorizeStep();
      case 'pratique':
        return this.renderPracticeStep();
      case 'calcule':
        return this.renderCalculateStep();
      case 'desafio':
        return this.renderFinalChallengeStep();
      default:
        return this.renderLearnStep();
    }
  }

  // ==========================================
  // ETAPA 1: APRENDA
  // ==========================================
  renderLearnStep() {
    const l = this.phase.learn;
    return `
      <div class="step-card step-learn-card">
        <div class="step-header">
          <span class="step-badge">Etapa 1 de 5 • Teoria e Fórmulas</span>
          <h2 class="step-title">📖 Fundamentos & Aplicação Prática</h2>
          <p class="step-intro">${l.intro}</p>
        </div>

        <div class="keypoints-list">
          ${l.keyPoints.map(kp => `
            <div class="keypoint-card">
              <h3 class="keypoint-title">📌 ${kp.title}</h3>
              <p class="keypoint-desc">${kp.desc}</p>
              ${kp.formula ? `
                <div class="formula-box">
                  <span class="formula-tag">Fórmula Legal:</span>
                  <code>${kp.formula}</code>
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>

        <div class="practical-box">
          <span class="practical-icon">💡</span>
          <div class="practical-content">
            <strong>Exemplo Prático na Rotina da Empresa:</strong>
            <p>${l.practicalExample}</p>
          </div>
        </div>

        <div class="step-footer">
          <button class="btn btn-primary btn-lg" id="btn-next-to-memorize">
            Avançar para Memorização ➡
          </button>
        </div>
      </div>
    `;
  }

  // ==========================================
  // ETAPA 2: MEMORIZE
  // ==========================================
  renderMemorizeStep() {
    const m = this.phase.memorize;
    return `
      <div class="step-card step-memorize-card">
        <div class="step-header">
          <span class="step-badge">Etapa 2 de 5 • Fixação na Memória</span>
          <h2 class="step-title">🧠 Conecte e Fixe os Conceitos-Chave</h2>
          <p class="step-intro">Relacione cada termo à sua regra legal para fortalecer suas sinapses:</p>
        </div>

        <div class="matching-columns-container">
          <div class="matching-column" id="phase-left-col">
            <h4 class="col-title">Termos da Fase ${this.phase.number}</h4>
            ${m.matchingPairs.map((p, idx) => `
              <button class="match-item-btn left-item ${this.matchedPairs.has(idx.toString()) ? 'matched' : ''}" data-idx="${idx}">
                ${p.left}
              </button>
            `).join('')}
          </div>

          <div class="matching-column" id="phase-right-col">
            <h4 class="col-title">Regras e Divisores</h4>
            ${m.matchingPairs.map((p, idx) => `
              <button class="match-item-btn right-item ${this.matchedPairs.has(idx.toString()) ? 'matched' : ''}" data-idx="${idx}">
                ${p.right}
              </button>
            `).join('')}
          </div>
        </div>

        <div class="term-highlight-box">
          <span class="clue-tag">Termo-Chave da Fase:</span>
          <strong>${m.word}</strong>
          <p>${m.explanation}</p>
        </div>

        <div class="step-footer">
          <button class="btn btn-primary btn-lg" id="btn-next-to-practice">
            Avançar para Prática ➡
          </button>
        </div>
      </div>
    `;
  }

  // ==========================================
  // ETAPA 3: PRATIQUE
  // ==========================================
  renderPracticeStep() {
    const questions = this.phase.practice;
    const currentQ = questions[this.practiceIndex] || questions[0];
    const isMultiple = Array.isArray(currentQ.options);

    return `
      <div class="step-card step-practice-card">
        <div class="step-header">
          <div class="step-counter-row">
            <span class="step-badge">Etapa 3 de 5 • Situações do Cotidiano</span>
            <span class="step-count">Questão ${this.practiceIndex + 1} de ${questions.length}</span>
          </div>
          <h2 class="step-title">${isMultiple ? currentQ.question : currentQ.statement}</h2>
        </div>

        ${isMultiple ? `
          <div class="quiz-options-list" id="phase-practice-options">
            ${currentQ.options.map((opt, idx) => `
              <button class="quiz-option-btn practice-opt-btn" data-index="${idx}">
                <span class="opt-letter">${String.fromCharCode(65 + idx)}</span>
                <span class="opt-text">${opt}</span>
              </button>
            `).join('')}
          </div>
        ` : `
          <div class="tf-actions-row" id="phase-practice-tf">
            <button class="btn btn-success tf-btn practice-tf-btn" data-choice="true">
              ✔️ VERDADEIRO
            </button>
            <button class="btn btn-danger tf-btn practice-tf-btn" data-choice="false">
              ❌ FALSO
            </button>
          </div>
        `}

        <div class="quiz-feedback-box hidden" id="practice-feedback">
          <div class="feedback-status" id="practice-feedback-status"></div>
          <div class="feedback-explanation">
            <strong>Por que esta é a resposta correta?</strong>
            <p id="practice-feedback-text"></p>
          </div>
          <div class="feedback-actions">
            ${this.practiceIndex < questions.length - 1 ? `
              <button class="btn btn-primary" id="btn-next-practice-q">Próxima Situação ➡</button>
            ` : `
              <button class="btn btn-primary" id="btn-next-to-calculate">Avançar para Cálculos ➡</button>
            `}
          </div>
        </div>
      </div>
    `;
  }

  // ==========================================
  // ETAPA 4: CALCULE
  // ==========================================
  renderCalculateStep() {
    const c = this.phase.calculate;

    return `
      <div class="step-card step-calc-card">
        <div class="step-header">
          <span class="step-badge">Etapa 4 de 5 • Cálculos na Folha de Pagamento</span>
          <h2 class="step-title">🧮 Exercício Prático com Fórmulas</h2>
        </div>

        <div class="calc-problem-box">
          <span class="problem-icon">📋</span>
          <div class="problem-text">
            <strong>Cenário de Folha:</strong>
            <p>${c.problem.replace(/\n/g, '<br>')}</p>
          </div>
        </div>

        <div class="calc-question-area">
          <h3 class="calc-q-title">${c.question}</h3>
          <div class="quiz-options-list" id="calc-options">
            ${c.options.map((opt, idx) => `
              <button class="quiz-option-btn calc-opt-btn" data-index="${idx}">
                <span class="opt-letter">${String.fromCharCode(65 + idx)}</span>
                <span class="opt-text">${opt}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <div class="calc-resolution-box hidden" id="calc-resolution">
          <div class="resolution-header">
            <span class="status-badge success">✅ Resolução Passo a Passo:</span>
          </div>
          <ul class="steps-list">
            ${c.steps.map(s => `<li>${s}</li>`).join('')}
          </ul>
          <div class="feedback-actions">
            <button class="btn btn-primary" id="btn-next-to-final">
              Avançar para Desafio Final ➡
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // ==========================================
  // ETAPA 5: DESAFIO FINAL (INTEGRADOR)
  // ==========================================
  renderFinalChallengeStep() {
    const f = this.phase.finalChallenge;

    return `
      <div class="step-card step-final-card">
        <div class="step-header text-center">
          <span class="step-badge badge-warning">Etapa 5 de 5 • Desafio Integrador</span>
          <h2 class="step-title">🏆 ${f.title}</h2>
          <p class="step-intro">Acerte o desafio final para concluir a Fase ${this.phase.number} e desbloquear a próxima fase!</p>
        </div>

        <div class="final-question-card">
          <p class="final-q-text">${f.question}</p>
          
          <div class="quiz-options-list" id="final-options">
            ${f.options.map((opt, idx) => `
              <button class="quiz-option-btn final-opt-btn" data-index="${idx}">
                <span class="opt-letter">${String.fromCharCode(65 + idx)}</span>
                <span class="opt-text">${opt}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <div class="final-feedback-box hidden" id="final-feedback">
          <div class="feedback-status" id="final-status"></div>
          <p id="final-expl-text"></p>
          <div class="final-celebration-reward" id="final-reward"></div>
        </div>
      </div>
    `;
  }

  attachEvents() {
    // Voltar para lista de fases
    document.getElementById('btn-back-to-phases')?.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('navigate-to', { detail: 'phases-world-1' }));
    });

    // Abas do stepper
    const stepperTabs = document.querySelectorAll('.stepper-tab');
    stepperTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const step = tab.getAttribute('data-step');
        this.setStep(step);
      });
    });

    // Transição da Etapa 1 para 2
    document.getElementById('btn-next-to-memorize')?.addEventListener('click', () => {
      this.setStep('memorize');
    });

    // Eventos da Etapa 2 (Matching de Fixação)
    this.attachMemorizeEvents();

    // Transição da Etapa 2 para 3
    document.getElementById('btn-next-to-practice')?.addEventListener('click', () => {
      this.setStep('pratique');
    });

    // Eventos da Etapa 3 (Prática)
    this.attachPracticeEvents();

    // Transição da Etapa 3 para 4
    document.getElementById('btn-next-to-calculate')?.addEventListener('click', () => {
      this.setStep('calcule');
    });

    // Eventos da Etapa 4 (Cálculo)
    this.attachCalculateEvents();

    // Transição da Etapa 4 para 5
    document.getElementById('btn-next-to-final')?.addEventListener('click', () => {
      this.setStep('desafio');
    });

    // Eventos da Etapa 5 (Desafio Final)
    this.attachFinalChallengeEvents();
  }

  attachMemorizeEvents() {
    const leftBtns = document.querySelectorAll('#phase-left-col .left-item');
    const rightBtns = document.querySelectorAll('#phase-right-col .right-item');

    leftBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = btn.getAttribute('data-idx');
        if (this.matchedPairs.has(idx)) return;
        leftBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.matchingSelectedLeft = idx;
        sound.playClick();
        this.checkPhaseMatch();
      });
    });

    rightBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = btn.getAttribute('data-idx');
        if (this.matchedPairs.has(idx)) return;
        rightBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.matchingSelectedRight = idx;
        sound.playClick();
        this.checkPhaseMatch();
      });
    });
  }

  checkPhaseMatch() {
    if (!this.matchingSelectedLeft || !this.matchingSelectedRight) return;

    const leftBtn = document.querySelector(`#phase-left-col .left-item[data-idx="${this.matchingSelectedLeft}"]`);
    const rightBtn = document.querySelector(`#phase-right-col .right-item[data-idx="${this.matchingSelectedRight}"]`);

    if (this.matchingSelectedLeft === this.matchingSelectedRight) {
      sound.playSuccess();
      leftBtn?.classList.remove('selected');
      rightBtn?.classList.remove('selected');
      leftBtn?.classList.add('matched');
      rightBtn?.classList.add('matched');
      this.matchedPairs.add(this.matchingSelectedLeft);

      storage.addXP(15);
      updateHeaderUI();

      if (this.matchedPairs.size === this.phase.memorize.matchingPairs.length) {
        launchConfetti();
      }
    } else {
      sound.playError();
      leftBtn?.classList.add('shake-error');
      rightBtn?.classList.add('shake-error');
      setTimeout(() => {
        leftBtn?.classList.remove('selected', 'shake-error');
        rightBtn?.classList.remove('selected', 'shake-error');
      }, 600);
    }
    this.matchingSelectedLeft = null;
    this.matchingSelectedRight = null;
  }

  attachPracticeEvents() {
    const questions = this.phase.practice;
    const currentQ = questions[this.practiceIndex];
    if (!currentQ) return;

    const isMultiple = Array.isArray(currentQ.options);
    const feedbackBox = document.getElementById('practice-feedback');
    const statusEl = document.getElementById('practice-feedback-status');
    const textEl = document.getElementById('practice-feedback-text');

    if (isMultiple) {
      const optBtns = document.querySelectorAll('.practice-opt-btn');
      optBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-index'));
          const isCorrect = idx === currentQ.correctIndex;

          optBtns.forEach((b, i) => {
            b.disabled = true;
            if (i === currentQ.correctIndex) b.classList.add('correct');
          });

          if (isCorrect) {
            btn.classList.add('correct');
            sound.playSuccess();
            launchConfetti();
            statusEl.innerHTML = '<span class="status-badge success">✅ Resposta Correta! (+25 XP)</span>';
            storage.addXP(25);
            updateHeaderUI();
          } else {
            btn.classList.add('wrong');
            sound.playError();
            statusEl.innerHTML = '<span class="status-badge error">❌ Incorreto! Entenda o motivo:</span>';
            storage.addToReview(currentQ.id, currentQ.question, currentQ.explanation);
          }

          textEl.textContent = currentQ.explanation;
          feedbackBox?.classList.remove('hidden');
        });
      });
    } else {
      const tfBtns = document.querySelectorAll('.practice-tf-btn');
      tfBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const choice = btn.getAttribute('data-choice') === 'true';
          const isCorrect = choice === currentQ.isTrue;

          tfBtns.forEach(b => b.disabled = true);

          if (isCorrect) {
            btn.classList.add('selected-correct');
            sound.playSuccess();
            launchConfetti();
            statusEl.innerHTML = '<span class="status-badge success">✅ Correto! (+25 XP)</span>';
            storage.addXP(25);
            updateHeaderUI();
          } else {
            btn.classList.add('selected-wrong');
            sound.playError();
            statusEl.innerHTML = `<span class="status-badge error">❌ Incorreto! A afirmação é ${currentQ.isTrue ? 'VERDADEIRA' : 'FALSA'}:</span>`;
            storage.addToReview(currentQ.id, currentQ.statement, currentQ.explanation);
          }

          textEl.textContent = currentQ.explanation;
          feedbackBox?.classList.remove('hidden');
        });
      });
    }

    document.getElementById('btn-next-practice-q')?.addEventListener('click', () => {
      this.practiceIndex++;
      this.render();
    });
  }

  attachCalculateEvents() {
    const c = this.phase.calculate;
    const calcBtns = document.querySelectorAll('.calc-opt-btn');
    const resBox = document.getElementById('calc-resolution');

    calcBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'));
        const isCorrect = idx === c.correctIndex;

        calcBtns.forEach((b, i) => {
          b.disabled = true;
          if (i === c.correctIndex) b.classList.add('correct');
        });

        if (isCorrect) {
          btn.classList.add('correct');
          sound.playSuccess();
          launchConfetti();
          storage.addXP(40);
          storage.addGems(15);
          storage.incrementStat('calculationsDone', 1);
          updateHeaderUI();
        } else {
          btn.classList.add('wrong');
          sound.playError();
        }

        resBox?.classList.remove('hidden');
      });
    });
  }

  attachFinalChallengeEvents() {
    const f = this.phase.finalChallenge;
    const finalBtns = document.querySelectorAll('.final-opt-btn');
    const feedbackBox = document.getElementById('final-feedback');
    const statusEl = document.getElementById('final-status');
    const explEl = document.getElementById('final-expl-text');
    const rewardEl = document.getElementById('final-reward');

    finalBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'));
        const isCorrect = idx === f.correctIndex;

        finalBtns.forEach((b, i) => {
          b.disabled = true;
          if (i === f.correctIndex) b.classList.add('correct');
        });

        if (isCorrect) {
          btn.classList.add('correct');
          sound.playSuccess();
          sound.playLevelUp();
          launchConfetti();

          // Desbloqueia próxima fase (ex: de fase-1 para fase-2)
          const nextPhaseNumber = this.phase.number + 1;
          const nextPhaseId = nextPhaseNumber <= 6 ? `fase-${nextPhaseNumber}` : null;
          storage.completePhase(this.phase.id, nextPhaseId, f.xpReward, f.gemsReward);
          updateHeaderUI();

          statusEl.innerHTML = '<span class="status-badge success">🌟 FASE CONCLUÍDA COM SUCESSO! 🌟</span>';
          explEl.innerHTML = `<strong>Explicação:</strong> ${f.explanation}`;
          rewardEl.innerHTML = `
            <div class="congrats-card">
              <h3>🎉 Recompensas Conquistadas:</h3>
              <div class="reward-row">
                <span class="reward-pill xp">+${f.xpReward} XP</span>
                <span class="reward-pill gems">💎 +${f.gemsReward} Gemas</span>
              </div>
              ${nextPhaseId ? `
                <button class="btn btn-primary btn-lg" id="btn-goto-next-phase">
                  Avançar para a Fase ${nextPhaseNumber} ➡
                </button>
              ` : `
                <div class="all-phases-done">
                  🏆 Você completou com êxito todas as 6 Fases da Folha de Pagamento!
                </div>
                <button class="btn btn-secondary btn-lg" id="btn-goto-phases-list">
                  Voltar ao Painel das Fases
                </button>
              `}
            </div>
          `;

          document.getElementById('btn-goto-next-phase')?.addEventListener('click', () => {
            this.init(nextPhaseId);
          });
          document.getElementById('btn-goto-phases-list')?.addEventListener('click', () => {
            window.dispatchEvent(new CustomEvent('navigate-to', { detail: 'phases-world-1' }));
          });
        } else {
          btn.classList.add('wrong');
          sound.playError();
          statusEl.innerHTML = '<span class="status-badge error">❌ Resposta Incorreta! Vamos analisar:</span>';
          explEl.innerHTML = `<strong>Explicação Técnica:</strong> ${f.explanation}`;
          rewardEl.innerHTML = `
            <button class="btn btn-outline" id="btn-retry-phase-challenge">
              🔄 Tentar Novamente
            </button>
          `;
          document.getElementById('btn-retry-phase-challenge')?.addEventListener('click', () => {
            this.setStep('desafio');
          });
        }

        feedbackBox?.classList.remove('hidden');
      });
    });
  }
}
