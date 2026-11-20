/**
 * MUNDO RH - Ponto de Entrada Principal da Aplicação (App Entry Point)
 */

import { renderHeader, initHeaderListeners, updateHeaderUI } from './components/header.js';
import { renderSidebar, initSidebarListeners } from './components/sidebar.js';
import { NavigationRouter } from './navigation.js';
import { storage } from './storage.js';

class MundoRHApp {
  constructor() {
    this.router = null;
  }

  init() {
    console.log('🚀 Inicializando Mundo RH...');

    // Renderiza a estrutura fixa (Header e Sidebar)
    const headerContainer = document.getElementById('header-mount');
    if (headerContainer) {
      headerContainer.innerHTML = renderHeader();
      initHeaderListeners();
    }

    const sidebarContainer = document.getElementById('sidebar-mount');
    if (sidebarContainer) {
      sidebarContainer.innerHTML = renderSidebar();
      initSidebarListeners();
    }

    // Inicializa o roteador principal no container de conteúdo
    this.router = new NavigationRouter('main-content');
    this.router.init();

    // Registra Service Worker se suportado pelo navegador
    this.registerServiceWorker();

    // Sincroniza UI do cabeçalho
    updateHeaderUI();
  }

  registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
          .then((registration) => {
            console.log('✅ ServiceWorker registrado com sucesso:', registration.scope);
          })
          .catch((error) => {
            console.warn('⚠️ Falha ao registrar ServiceWorker (modo offline restrito):', error);
          });
      });
    }
  }
}

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  const app = new MundoRHApp();
  app.init();
});
