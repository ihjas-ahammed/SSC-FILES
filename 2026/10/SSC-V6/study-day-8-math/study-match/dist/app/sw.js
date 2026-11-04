/* Offline shell for the hosted app build. Version changes on every build. */
var CACHE = 'study-match-60560527';
var CORE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(CORE); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
/* pages: network first (fresh build wins), everything else (MathJax, fonts): cache first */
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  var isPage = e.request.mode === 'navigate';
  e.respondWith(isPage
    ? fetch(e.request).then(function (r) { var cp = r.clone(); caches.open(CACHE).then(function (c) { c.put(e.request, cp); }); return r; })
        .catch(function () { return caches.match(e.request).then(function (r) { return r || caches.match('./index.html'); }); })
    : caches.match(e.request).then(function (hit) {
        return hit || fetch(e.request).then(function (r) {
          if (r && (r.ok || r.type === 'opaque')) { var cp = r.clone(); caches.open(CACHE).then(function (c) { c.put(e.request, cp); }); }
          return r;
        });
      }));
});
