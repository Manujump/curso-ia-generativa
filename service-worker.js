const CACHE_NAME = 'curso-ia-cache-v1';
const urlsToCache = [
  './',
  './Curso_Básico_IA.html',
  './fondo.png',
  './Inicio.wav'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});