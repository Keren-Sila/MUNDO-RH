/**
 * MUNDO RH - Modal Component Reutilizável e Acessível
 */

class ModalComponent {
  constructor() {
    this.modalOverlay = null;
    this.init();
  }

  init() {
    // Cria elemento base do modal se não existir no DOM
    if (!document.getElementById('app-modal-overlay')) {
      const overlay = document.createElement('div');
      overlay.id = 'app-modal-overlay';
      overlay.className = 'modal-overlay';
      overlay.setAttribute('aria-hidden', 'true');
      overlay.innerHTML = `
        <div class="modal-dialog" role="dialog" aria-modal="true">
          <button class="modal-close-btn" aria-label="Fechar janela">&times;</button>
          <div class="modal-header">
            <h3 class="modal-title" id="modal-title">Título do Modal</h3>
          </div>
          <div class="modal-body" id="modal-body">
            Conteúdo do modal
          </div>
          <div class="modal-footer" id="modal-footer">
            <button class="btn btn-primary modal-action-btn">Continuar</button>
          </div>
        </div>
      `;
      document.body.appendChild(overlay);

      // Event listeners para fechamento
      overlay.querySelector('.modal-close-btn').addEventListener('click', () => this.close());
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) this.close();
      });

      // Fechamento com tecla ESC
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
          this.close();
        }
      });
    }
    this.modalOverlay = document.getElementById('app-modal-overlay');
  }

  show({ title, body, footerText = 'Entendi', onAction = null, type = 'info' }) {
    if (!this.modalOverlay) this.init();

    const titleEl = document.getElementById('modal-title');
    const bodyEl = document.getElementById('modal-body');
    const footerEl = document.getElementById('modal-footer');

    titleEl.textContent = title;
    
    if (typeof body === 'string') {
      bodyEl.innerHTML = body;
    } else {
      bodyEl.innerHTML = '';
      bodyEl.appendChild(body);
    }

    const dialog = this.modalOverlay.querySelector('.modal-dialog');
    dialog.className = `modal-dialog modal-${type}`;

    footerEl.innerHTML = '';
    const btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.textContent = footerText;
    btn.addEventListener('click', () => {
      this.close();
      if (typeof onAction === 'function') onAction();
    });
    footerEl.appendChild(btn);

    this.modalOverlay.classList.add('active');
    this.modalOverlay.setAttribute('aria-hidden', 'false');
    btn.focus();
  }

  close() {
    if (this.modalOverlay) {
      this.modalOverlay.classList.remove('active');
      this.modalOverlay.setAttribute('aria-hidden', 'true');
    }
  }
}

export const modal = new ModalComponent();
