/**
 * MUNDO RH - Service Worker para Funcionamento Offline Completo (PWA)
 */

const CACHE_NAME = 'mundo-rh-v1.0.0';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './css/base.css',
  './css/layout.css',
  './css/components.css',
  './css/pages.css',
  './css/responsive.css',
  './js/app.js',
  './js/navigation.js',
  './js/storage.js',
  './js/components/header.js',
  './js/components/sidebar.js',
  './js/components/modal.js',
  './js/components/progress-bar.js',
  './js/games/word-search.js',
  './js/games/quiz.js',
  './js/games/word-completion.js',
  './js/games/true-false.js',
  './js/games/matching.js',
  './js/games/challenge.js',
  './js/features/achievements.js',
  './js/features/experience.js',
  './js/features/review.js',
  './js/features/daily-challenge.js',
  './js/features/receipt-simulator.js',
  './js/utils/helpers.js',
  './js/utils/validation.js',
  './data/worlds.js',
  './data/questions.js',
  './data/glossary.js',
  './data/achievements.js',
  './data/receipt-examples.js',
  './assets/icons/icon.svg',
  './assets/icons/icon-192.svg',
  './assets/icons/icon-512.svg'
];

// Instalação do Service Worker e pré-cache de todos os arquivos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('📦 Pré-carregando arquivos para uso offline...');
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Ativação e limpeza de caches antigos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            console.log('🧹 Removendo cache obsoleto:', name);
            return caches.delete(name);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Interceptação de requisições: Cache First com Fallback para Rede
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      }).catch(() => {
        // Se estiver offline e requisitar uma página html, retorna o index do cache
        if (event.request.headers.get('accept')?.includes('text/html')) {
          return caches.match('./index.html');
        }
      });
    })
  );
});
