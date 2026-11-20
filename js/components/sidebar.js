/**
 * MUNDO RH - Barra Lateral de Navegação (Sidebar Drawer)
 */

export function renderSidebar() {
  return `
    <aside class="app-sidebar" id="app-sidebar" aria-label="Menu Principal">
      <div class="sidebar-header">
        <span class="sidebar-brand">🧭 Navegação</span>
        <button id="btn-close-sidebar" class="btn-icon sidebar-close-btn" aria-label="Fechar menu">&times;</button>
      </div>

      <nav class="sidebar-nav">
        <div class="nav-section-title">Principal</div>
        <button class="nav-link active" data-nav="home">
          <span class="nav-icon">🏠</span>
          <span class="nav-text">Início</span>
        </button>
        <button class="nav-link" data-nav="worlds">
          <span class="nav-icon">🌍</span>
          <span class="nav-text">Mundos de Estudo</span>
        </button>

        <div class="nav-section-title">Simulador Prático</div>
        <button class="nav-link highlight" data-nav="receipt-simulator">
          <span class="nav-icon">🧾</span>
          <span class="nav-text">Simulador de Holerite</span>
          <span class="nav-tag">Top!</span>
        </button>

        <div class="nav-section-title">Modalidades de Jogos</div>
        <button class="nav-link" data-nav="word-search">
          <span class="nav-icon">🔍</span>
          <span class="nav-text">Caça-palavras</span>
        </button>
        <button class="nav-link" data-nav="quiz">
          <span class="nav-icon">❓</span>
          <span class="nav-text">Quiz Interativo</span>
        </button>
        <button class="nav-link" data-nav="word-completion">
          <span class="nav-icon">✏️</span>
          <span class="nav-text">Complete a Palavra</span>
        </button>
        <button class="nav-link" data-nav="true-false">
          <span class="nav-icon">⚖️</span>
          <span class="nav-text">Verdadeiro ou Falso</span>
        </button>
        <button class="nav-link" data-nav="matching">
          <span class="nav-icon">🔗</span>
          <span class="nav-text">Ligue os Conceitos</span>
        </button>
        <button class="nav-link" data-nav="challenge">
          <span class="nav-icon">⚡</span>
          <span class="nav-text">Desafio Relâmpago</span>
        </button>

        <div class="nav-section-title">Evolução & Consulta</div>
        <button class="nav-link" data-nav="review">
          <span class="nav-icon">🧠</span>
          <span class="nav-text">Revisão Inteligente</span>
        </button>
        <button class="nav-link" data-nav="achievements">
          <span class="nav-icon">🏆</span>
          <span class="nav-text">Conquistas & Níveis</span>
        </button>
        <button class="nav-link" data-nav="glossary">
          <span class="nav-icon">📚</span>
          <span class="nav-text">Glossário de RH</span>
        </button>
      </nav>

      <div class="sidebar-footer">
        <span class="version-badge">Mundo RH v1.0.0 (PWA Offline)</span>
      </div>
    </aside>
    <div class="sidebar-backdrop" id="sidebar-backdrop"></div>
  `;
}

export function initSidebarListeners() {
  const sidebar = document.getElementById('app-sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  const toggleBtn = document.getElementById('btn-toggle-sidebar');
  const closeBtn = document.getElementById('btn-close-sidebar');

  function openSidebar() {
    sidebar.classList.add('open');
    backdrop.classList.add('open');
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    backdrop.classList.remove('open');
  }

  if (toggleBtn) toggleBtn.addEventListener('click', openSidebar);
  if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
  if (backdrop) backdrop.addEventListener('click', closeSidebar);

  // Navegação
  const links = document.querySelectorAll('.nav-link[data-nav]');
  links.forEach(link => {
    link.addEventListener('click', () => {
      const target = link.getAttribute('data-nav');
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      closeSidebar();
      window.dispatchEvent(new CustomEvent('navigate-to', { detail: target }));
    });
  });
}

export function setActiveNavLink(navKey) {
  const links = document.querySelectorAll('.nav-link[data-nav]');
  links.forEach(l => {
    if (l.getAttribute('data-nav') === navKey) {
      l.classList.add('active');
    } else {
      l.classList.remove('active');
    }
  });
}
