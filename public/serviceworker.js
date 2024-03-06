const CACHE_NAME = 'WEATHER_APP';
const URLS_TO_CACHE = ['index.html', 'offline.html'];

const self = this;
// install service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(URLS_TO_CACHE);
    }),
  );
});

// listen for requests
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => caches.match('offline.html'));
    }),
  );
});

// Activate sevice worker
self.addEventListener('activate', (event) => {
  const CACHE_WHITELIST = [];
  CACHE_WHITELIST.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!CACHE_WHITELIST.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        }),
      ),
    ),
  );
});
