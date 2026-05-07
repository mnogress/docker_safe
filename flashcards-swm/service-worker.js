self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('flashcards-v1').then(cache => {
      return cache.addAll([
        '/',
        '/flashcards-swm/',
        '/flashcards-swm/index.html',
        '/flashcards-swm/app.js',
        '/flashcards-swm/cards.json',
        '/flashcards-swm/manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
