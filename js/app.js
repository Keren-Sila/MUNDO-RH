/**
 * MUNDO RH - Ponto de Entrada Principal da Aplicação (App Entry Point)
 */

import { renderHeader, initHeaderListeners, updateHeaderUI } from './components/header.js';
import { renderSidebar, initSidebarListeners } from './components/sidebar.js';
import { renderBottomNav, initBottomNavListeners } from './components/bottom-nav.js';
import { NavigationRouter } from './navigation.js';
import { storage } from './storage.js';

class MundoRHApp {
  constructor() {
    this.router = null;
  }

  init() {
    console.log('🚀 Inicializando Mundo RH (Academix UI)...');

    // Renderiza Cabeçalho Superior
    const headerContainer = document.getElementById('header-mount');
    if (headerContainer) {
      headerContainer.innerHTML = renderHeader();
      initHeaderListeners();
    }

    // Renderiza Barra Lateral
    const sidebarContainer = document.getElementById('sidebar-mount');
    if (sidebarContainer) {
      sidebarContainer.innerHTML = renderSidebar();
      initSidebarListeners();
    }

    // Renderiza Barra Flutuante Inferior (Mobile Nav)
    const bottomNavContainer = document.getElementById('bottom-nav-mount');
    if (bottomNavContainer) {
      bottomNavContainer.innerHTML = renderBottomNav();
      initBottomNavListeners();
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

document.addEventListener('DOMContentLoaded', () => {
  const app = new MundoRHApp();
  app.init();
});
