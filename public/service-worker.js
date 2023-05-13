self.addEventListener("install", e => {
  e.waitUntil(
      caches.open("pwa-assets").then(cache => {
          return cache.addAll([
              "./",
              "./assets/",
              "script.js"
          ]);
      })
  ); 
});

self.addEventListener("fetch", e => {
  e.respondWith(
      caches.match(e.request).then(response => {
          return response || fetch(e.request);
      })
  );
});