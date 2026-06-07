self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('love-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './love-song.mp3'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
      .then(() => console.log('Service Worker Registered'))
      .catch(err => console.error('Service Worker failed:', err));
  }
</script>
