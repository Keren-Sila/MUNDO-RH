/**
 * MUNDO RH - Barra de Navegação Inferior Flutuante (Mobile Floating Bottom Nav)
 * Inspirada diretamente no layout moderno do Academix.
 */

export function renderBottomNav() {
  return `
    <nav class="bottom-floating-nav" id="bottom-nav" aria-label="Navegação Rápida">
      <div class="bottom-nav-pill">
        <button class="bnav-btn active" data-nav="home" title="Início" aria-label="Tela Inicial">
          <span class="bnav-icon">🏠</span>
        </button>
        <button class="bnav-btn" data-nav="phases-world-1" title="Fases da Folha" aria-label="Fases do Mundo 1">
          <span class="bnav-icon">🗺️</span>
        </button>
        <button class="bnav-btn" data-nav="receipt-simulator" title="Simulador de Holerite" aria-label="Simulador de Holerite">
          <span class="bnav-icon">🧾</span>
        </button>
        <button class="bnav-btn" data-nav="worlds" title="Todos os Mundos" aria-label="Mundos de Aprendizagem">
          <span class="bnav-icon">🌍</span>
        </button>
        <button class="bnav-btn" data-nav="achievements" title="Perfil & Conquistas" aria-label="Conquistas">
          <span class="bnav-icon">🏆</span>
        </button>
      </div>
    </nav>
  `;
}

export function initBottomNavListeners() {
  const btns = document.querySelectorAll('.bnav-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-nav');
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      window.dispatchEvent(new CustomEvent('navigate-to', { detail: target }));
    });
  });
}

export function updateBottomNavActive(navKey) {
  const btns = document.querySelectorAll('.bnav-btn');
  btns.forEach(btn => {
    if (btn.getAttribute('data-nav') === navKey) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}
