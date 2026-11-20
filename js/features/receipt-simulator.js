/**
 * MUNDO RH - Simulador de Recibo de Pagamento (Holerite / Contracheque Interativo)
 * Inclui:
 * 1. Inspeção Didática de Rubricas
 * 2. Auditoria de Erros ("Descubra o Erro no Holerite")
 * 3. Desafios de Interpretação e Cálculo Líquido
 */

import { RECEIPT_EXAMPLE_1, RECEIPT_AUDIT_CASES } from '../../data/receipt-examples.js';
import { storage } from '../storage.js';
import { sound, formatCurrency, launchConfetti } from '../utils/helpers.js';
import { modal } from '../components/modal.js';
import { updateHeaderUI } from '../components/header.js';

export class ReceiptSimulator {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.receiptData = RECEIPT_EXAMPLE_1;
    this.auditCases = RECEIPT_AUDIT_CASES;
    this.currentTab = 'inspector'; // 'inspector' | 'audit' | 'challenges'
    this.quizIndex = 0;
    this.quizScore = 0;
    this.auditIndex = 0;
  }

  init() {
    this.currentTab = 'inspector';
    this.render();
  }

  render() {
    if (!this.container) return;

    this.container.innerHTML = `
      <div class="receipt-simulator-wrapper">
        <div class="receipt-header-banner">
          <div class="banner-info">
            <span class="badge badge-accent">Simulador de DP</span>
            <h2 class="simulator-title">🧾 Simulador de Recibo de Pagamento (Holerite)</h2>
            <p>Explore as rubricas, calcule o salário líquido e descubra erros cometidos na folha de pagamento.</p>
          </div>
          <div class="receipt-tab-switcher">
            <button class="tab-btn ${this.currentTab === 'inspector' ? 'active' : ''}" id="tab-btn-inspector">
              🔍 Explorar Rubricas
            </button>
            <button class="tab-btn ${this.currentTab === 'audit' ? 'active' : ''}" id="tab-btn-audit">
              🕵️ Descubra o Erro
            </button>
            <button class="tab-btn ${this.currentTab === 'challenges' ? 'active' : ''}" id="tab-btn-challenges">
              🎯 Desafios
            </button>
          </div>
        </div>

        ${this.renderCurrentView()}
      </div>
    `;

    this.attachEvents();
  }

  renderCurrentView() {
    switch (this.currentTab) {
      case 'inspector':
        return this.renderInspectorView();
      case 'audit':
        return this.renderAuditView();
      case 'challenges':
        return this.renderChallengesView();
      default:
        return this.renderInspectorView();
    }
  }

  // ==========================================
  // ABA 1: EXPLORAR RUBRICAS
  // ==========================================
  renderInspectorView() {
    const data = this.receiptData;

    return `
      <div class="holerite-paper">
        <!-- Cabeçalho da Empresa -->
        <div class="holerite-header-grid">
          <div class="holerite-company-info">
            <h3 class="company-name">${data.company.name}</h3>
            <p class="company-sub">CNPJ: ${data.company.cnpj} | ${data.company.address}</p>
          </div>
          <div class="holerite-doc-title">
            <span>RECIBO DE PAGAMENTO DE SALÁRIO</span>
            <span class="competency-badge">Competência: ${data.employee.competency}</span>
          </div>
        </div>

        <!-- Dados do Empregado -->
        <div class="holerite-employee-bar">
          <div class="emp-col"><span class="col-lbl">Código:</span> <strong>${data.employee.code}</strong></div>
          <div class="emp-col emp-name"><span class="col-lbl">Empregado:</span> <strong>${data.employee.name}</strong></div>
          <div class="emp-col"><span class="col-lbl">CBO:</span> <strong>${data.employee.cbo}</strong></div>
          <div class="emp-col"><span class="col-lbl">Função:</span> <strong>${data.employee.role}</strong></div>
          <div class="emp-col"><span class="col-lbl">Admissão:</span> <strong>${data.employee.admissionDate}</strong></div>
        </div>

        <!-- Tabela de Rubricas / Lançamentos -->
        <div class="holerite-table-container">
          <table class="holerite-table">
            <thead>
              <tr>
                <th class="th-code">Cód.</th>
                <th class="th-desc">Descrição do Lançamento</th>
                <th class="th-ref">Referência</th>
                <th class="th-val">Vencimentos</th>
                <th class="th-val">Descontos</th>
                <th class="th-act">Ação</th>
              </tr>
            </thead>
            <tbody>
              ${data.items.map(item => `
                <tr class="holerite-row ${item.type}" data-code="${item.code}">
                  <td class="td-code">${item.code}</td>
                  <td class="td-desc">
                    <span class="desc-text">${item.description}</span>
                    ${item.type === 'informativo' ? '<span class="tag-info">Informativo</span>' : ''}
                  </td>
                  <td class="td-ref">${item.reference}</td>
                  <td class="td-val text-green">${item.provento ? formatCurrency(item.provento) : '-'}</td>
                  <td class="td-val text-red">${item.desconto ? formatCurrency(item.desconto) : '-'}</td>
                  <td class="td-act">
                    <button class="btn-inspect-row" title="Clique para entender este lançamento">
                      💡 Explicar
                    </button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <!-- Totais e Salário Líquido -->
        <div class="holerite-totals-container">
          <div class="totals-row">
            <div class="total-block">
              <span class="total-lbl">Total de Vencimentos:</span>
              <strong class="total-val text-green">${formatCurrency(data.totals.totalVencimentos)}</strong>
            </div>
            <div class="total-block">
              <span class="total-lbl">Total de Descontos:</span>
              <strong class="total-val text-red">${formatCurrency(data.totals.totalDescontos)}</strong>
            </div>
            <div class="total-block liquid-highlight">
              <span class="total-lbl">VALOR LÍQUIDO A RECEBER:</span>
              <strong class="total-val text-blue">${formatCurrency(data.totals.salarioLiquido)}</strong>
            </div>
          </div>
        </div>

        <!-- Bases de Cálculo e Rodapé -->
        <div class="holerite-bases-grid">
          <div class="base-item">
            <span class="base-lbl">Salário Base</span>
            <span class="base-val">${formatCurrency(data.employee.baseSalary)}</span>
          </div>
          <div class="base-item">
            <span class="base-lbl">Sal. Contr. INSS</span>
            <span class="base-val">${formatCurrency(data.totals.baseCalculoInss)}</span>
          </div>
          <div class="base-item">
            <span class="base-lbl">Base Cálc. FGTS</span>
            <span class="base-val">${formatCurrency(data.totals.baseCalculoFgts)}</span>
          </div>
          <div class="base-item">
            <span class="base-lbl">FGTS do Mês</span>
            <span class="base-val">${formatCurrency(data.totals.fgtsDoMes)}</span>
          </div>
          <div class="base-item">
            <span class="base-lbl">Base Cálc. IRRF</span>
            <span class="base-val">${formatCurrency(data.totals.baseCalculoIrrf)}</span>
          </div>
          <div class="base-item">
            <span class="base-lbl">Faixa IRRF</span>
            <span class="base-val">${data.totals.faixaIrrf}</span>
          </div>
        </div>
      </div>
    `;
  }

  // ==========================================
  // ABA 2: AUDITORIA DE ERROS NO HOLERITE
  // ==========================================
  renderAuditView() {
    const auditCase = this.auditCases[this.auditIndex];
    if (!auditCase) {
      return `
        <div class="game-card text-center">
          <div class="finish-icon">🕵️‍♂️🏆</div>
          <h2>Parabéns, Auditor de RH!</h2>
          <p>Você resolveu com sucesso todos os casos de auditoria de folha de pagamento!</p>
          <button class="btn btn-primary" id="btn-restart-audit">Refazer Casos de Auditoria</button>
        </div>
      `;
    }

    return `
      <div class="audit-view-container">
        <div class="audit-intro-bar">
          <span class="badge badge-danger">🕵️ Modo Auditoria</span>
          <span class="audit-counter">Caso ${this.auditIndex + 1} de ${this.auditCases.length}</span>
        </div>

        <div class="holerite-paper audit-paper">
          <div class="audit-alert-strip">
            ⚠️ <strong>ATENÇÃO:</strong> Este holerite contém erros graves de cálculo e legislação cometidos pelo DP. Analise as linhas abaixo:
          </div>

          <div class="holerite-employee-bar">
            <div class="emp-col"><span class="col-lbl">Empregado:</span> <strong>${auditCase.employeeName}</strong></div>
            <div class="emp-col"><span class="col-lbl">Função:</span> <strong>${auditCase.role}</strong></div>
            <div class="emp-col"><span class="col-lbl">Salário Base:</span> <strong>${formatCurrency(auditCase.baseSalary)}</strong></div>
          </div>

          <table class="holerite-table">
            <thead>
              <tr>
                <th>Cód.</th>
                <th>Descrição</th>
                <th>Ref.</th>
                <th>Vencimentos</th>
                <th>Descontos</th>
              </tr>
            </thead>
            <tbody>
              ${auditCase.items.map(item => `
                <tr class="audit-item-row ${item.isError ? 'suspect-error' : ''}">
                  <td>${item.code}</td>
                  <td><strong>${item.desc}</strong></td>
                  <td>${item.ref}</td>
                  <td class="td-val text-green">${item.provento ? formatCurrency(item.provento) : '-'}</td>
                  <td class="td-val text-red">${item.desconto ? formatCurrency(item.desconto) : '-'}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <div class="game-card audit-question-card">
          <h3 class="audit-q-title">🔎 Pergunta de Auditoria:</h3>
          <p class="audit-q-text">${auditCase.question}</p>

          <div class="quiz-options-list" id="audit-options">
            ${auditCase.options.map((opt, idx) => `
              <button class="quiz-option-btn audit-opt-btn" data-index="${idx}">
                <span class="opt-letter">${String.fromCharCode(65 + idx)}</span>
                <span class="opt-text">${opt}</span>
              </button>
            `).join('')}
          </div>

          <div class="quiz-feedback-box hidden" id="audit-feedback">
            <div class="feedback-status" id="audit-feedback-status"></div>
            <div class="feedback-explanation">
              <strong>Relatório de Auditoria:</strong>
              <p id="audit-feedback-text"></p>
            </div>
            <div class="feedback-actions">
              <button class="btn btn-primary" id="btn-next-audit-case">Próximo Caso de Auditoria ➡</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // ==========================================
  // ABA 3: DESAFIOS DO HOLERITE
  // ==========================================
  renderChallengesView() {
    const challenges = this.receiptData.challenges;
    const currentQ = challenges[this.quizIndex];

    if (!currentQ) {
      return `
        <div class="game-card text-center">
          <div class="finish-icon">🎓</div>
          <h2>Parabéns! Você completou os desafios do holerite!</h2>
          <p>Pontuação: ${this.quizScore} de ${challenges.length} acertos.</p>
          <button class="btn btn-primary" id="btn-restart-receipt-quiz">Refazer Desafios</button>
        </div>
      `;
    }

    return `
      <div class="game-card receipt-quiz-card">
        <div class="game-top-bar">
          <span class="game-type-badge">🎯 Interpretação de Holerite</span>
          <span class="game-counter">Desafio ${this.quizIndex + 1} de ${challenges.length}</span>
        </div>

        <h3 class="receipt-quiz-question">${currentQ.question}</h3>

        <div class="quiz-options-list" id="receipt-quiz-options">
          ${currentQ.options.map((opt, idx) => `
            <button class="quiz-option-btn receipt-opt" data-index="${idx}">
              <span class="opt-letter">${String.fromCharCode(65 + idx)}</span>
              <span class="opt-text">${opt}</span>
            </button>
          `).join('')}
        </div>

        <div class="quiz-feedback-box hidden" id="receipt-feedback">
          <div class="feedback-status" id="receipt-feedback-status"></div>
          <div class="feedback-explanation">
            <strong>Entendimento Prático:</strong>
            <p id="receipt-feedback-expl"></p>
          </div>
          <div class="feedback-actions">
            <button class="btn btn-primary" id="btn-next-receipt-q">Próximo Desafio ➡</button>
          </div>
        </div>
      </div>
    `;
  }

  attachEvents() {
    // Alternar abas
    document.getElementById('tab-btn-inspector')?.addEventListener('click', () => {
      this.currentTab = 'inspector';
      sound.playClick();
      this.render();
    });

    document.getElementById('tab-btn-audit')?.addEventListener('click', () => {
      this.currentTab = 'audit';
      sound.playClick();
      this.render();
    });

    document.getElementById('tab-btn-challenges')?.addEventListener('click', () => {
      this.currentTab = 'challenges';
      sound.playClick();
      this.render();
    });

    // Cliques nas linhas do holerite para inspecionar
    const rows = document.querySelectorAll('.holerite-row');
    rows.forEach(row => {
      row.addEventListener('click', () => {
        const code = row.getAttribute('data-code');
        const item = this.receiptData.items.find(i => i.code === code);
        if (item) {
          this.showItemModal(item);
        }
      });
    });

    // Quiz do holerite
    const optBtns = document.querySelectorAll('.receipt-opt');
    optBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'));
        this.handleQuizAnswer(idx, btn);
      });
    });

    document.getElementById('btn-next-receipt-q')?.addEventListener('click', () => {
      this.quizIndex++;
      this.render();
    });

    document.getElementById('btn-restart-receipt-quiz')?.addEventListener('click', () => {
      this.quizIndex = 0;
      this.quizScore = 0;
      this.render();
    });

    // Auditoria de Erros
    const auditBtns = document.querySelectorAll('.audit-opt-btn');
    auditBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'));
        this.handleAuditAnswer(idx, btn);
      });
    });

    document.getElementById('btn-next-audit-case')?.addEventListener('click', () => {
      this.auditIndex++;
      this.render();
    });

    document.getElementById('btn-restart-audit')?.addEventListener('click', () => {
      this.auditIndex = 0;
      this.render();
    });
  }

  showItemModal(item) {
    sound.playClick();
    const d = item.details;
    storage.incrementStat('receiptExplored', 1);

    modal.show({
      title: `Rubrica: ${d.title}`,
      body: `
        <div class="receipt-item-modal-content">
          <div class="receipt-modal-badge ${item.type}">
            ${d.isProventoOrDesconto}
          </div>

          <div class="modal-section">
            <h4>📌 O que é?</h4>
            <p>${d.whatIs}</p>
          </div>

          <div class="modal-section">
            <h4>🎯 Para que serve?</h4>
            <p>${d.purpose}</p>
          </div>

          <div class="modal-section">
            <h4>🧮 Como é calculado?</h4>
            <p class="calc-box"><code>${d.howCalculated}</code></p>
          </div>

          <div class="modal-section highlight-box">
            <h4>💡 Exemplo Prático de Rotina:</h4>
            <p>${d.practicalTip}</p>
          </div>
        </div>
      `,
      footerText: 'Voltar ao Holerite',
      type: 'info'
    });
  }

  handleQuizAnswer(selectedIdx, clickedBtn) {
    const currentQ = this.receiptData.challenges[this.quizIndex];
    const isCorrect = selectedIdx === currentQ.correctIndex;

    const allBtns = document.querySelectorAll('.receipt-opt');
    allBtns.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === currentQ.correctIndex) btn.classList.add('correct');
    });

    const feedbackBox = document.getElementById('receipt-feedback');
    const statusEl = document.getElementById('receipt-feedback-status');
    const explEl = document.getElementById('receipt-feedback-expl');

    if (isCorrect) {
      clickedBtn.classList.add('correct');
      sound.playSuccess();
      launchConfetti();
      this.quizScore++;
      statusEl.innerHTML = '<span class="status-badge success">✅ Correto! (+25 XP e 💎 +10)</span>';
      storage.addXP(25);
      storage.addGems(10);
      storage.incrementStat('receiptQuizScore', 1);
      updateHeaderUI();
    } else {
      clickedBtn.classList.add('wrong');
      sound.playError();
      statusEl.innerHTML = '<span class="status-badge error">❌ Incorreto! Vamos analisar:</span>';
    }

    explEl.textContent = currentQ.explanation;
    feedbackBox?.classList.remove('hidden');
  }

  handleAuditAnswer(selectedIdx, clickedBtn) {
    const auditCase = this.auditCases[this.auditIndex];
    const isCorrect = selectedIdx === auditCase.correctIndex;

    const allBtns = document.querySelectorAll('.audit-opt-btn');
    allBtns.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === auditCase.correctIndex) btn.classList.add('correct');
    });

    const feedbackBox = document.getElementById('audit-feedback');
    const statusEl = document.getElementById('audit-feedback-status');
    const textEl = document.getElementById('audit-feedback-text');

    if (isCorrect) {
      clickedBtn.classList.add('correct');
      sound.playSuccess();
      launchConfetti();
      statusEl.innerHTML = `<span class="status-badge success">🎉 Excelente Auditoria! (+${auditCase.xpReward} XP e 💎 +${auditCase.gemsReward})</span>`;
      storage.addXP(auditCase.xpReward);
      storage.addGems(auditCase.gemsReward);
      storage.incrementStat('auditCasesSolved', 1);
      updateHeaderUI();
    } else {
      clickedBtn.classList.add('wrong');
      sound.playError();
      statusEl.innerHTML = '<span class="status-badge error">❌ Falha na Auditoria! Veja os erros reais:</span>';
    }

    textEl.textContent = auditCase.explanation;
    feedbackBox?.classList.remove('hidden');
  }
}
