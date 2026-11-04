// Study Plan app shell: the page and its icons work offline after the first visit.
// The page itself is fetched from the network first, so plan changes show up at once.
// Study match pages and resource files are not cached here; they load as normal.
var VERSION = 'study-plan-shell-v1';
var SHELL = ['./', './index.html', './manifest.webmanifest', './icon.svg', './icon-192.png', './icon-512.png'];
var PAGE = ['./', './index.html'];

self.addEventListener('install', function (event) {
  event.waitUntil(caches.open(VERSION).then(function (cache) { return cache.addAll(SHELL); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys()
      .then(function (keys) { return Promise.all(keys.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); })); })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (event) {
  var req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  var path = new URL(req.url).pathname;
  var scope = new URL(self.registration.scope).pathname;
  var rel = path.indexOf(scope) === 0 ? path.slice(scope.length) : null;
  if (rel === null) return;
  var isPage = rel === '' || rel === 'index.html';
  var isShell = SHELL.some(function (s) { return s.replace('./', '') === rel || (s === './' && rel === ''); });
  if (isPage) {
    event.respondWith(
      fetch(req).then(function (res) {
        var copy = res.clone();
        caches.open(VERSION).then(function (c) { c.put(req, copy); });
        return res;
      }).catch(function () { return caches.match(req); })
    );
  } else if (isShell) {
    event.respondWith(caches.match(req).then(function (hit) { return hit || fetch(req); }));
  }
});
