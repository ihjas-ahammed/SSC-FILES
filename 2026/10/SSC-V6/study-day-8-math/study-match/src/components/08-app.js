/* ==========================================================================
   App: boot, header notch, theme, fullscreen, install as app
   ========================================================================== */
(function () {
  var SM = window.SM, $ = SM.$;

  /* header height drives the layout (the dropped-down header is an overlay) */
  SM.setTop = function () {
    var tb = $('topbar');
    if (tb.classList.contains('is-open')) return;
    document.documentElement.style.setProperty('--top', tb.offsetHeight + 'px');
  };
  var hdrT = null;
  SM.closeHeader = function () { $('topbar').classList.remove('is-open'); clearTimeout(hdrT); };
  function openHeader() {
    $('topbar').classList.add('is-open');
    clearTimeout(hdrT);
    hdrT = setTimeout(SM.closeHeader, 9000);
  }

  /* theme */
  function applyTheme() {
    if (SM.S.theme) document.documentElement.setAttribute('data-theme', SM.S.theme);
    else document.documentElement.removeAttribute('data-theme');
    var dark = SM.S.theme ? SM.S.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', dark ? '#111326' : '#FAF8F3');
  }
  SM.toggleTheme = function () {
    var dark = SM.S.theme ? SM.S.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    SM.S.theme = dark ? 'light' : 'dark';
    applyTheme(); SM.save();
  };

  /* fullscreen */
  SM.toggleFullscreen = function () {
    var d = document, el = d.documentElement;
    var on = d.fullscreenElement || d.webkitFullscreenElement;
    try {
      if (on) (d.exitFullscreen || d.webkitExitFullscreen).call(d);
      else (el.requestFullscreen || el.webkitRequestFullscreen).call(el, { navigationUI: 'hide' });
    } catch (e) { SM.toast('', 'Fullscreen not available', 'Try the browser menu instead'); }
  };

  /* install: real prompt when the browser offers one, otherwise clear steps */
  var deferred = null;
  window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); deferred = e; });
  SM.install = function () {
    if (deferred) { deferred.prompt(); deferred.userChoice.finally(function () { deferred = null; }); return; }
    var help = $('mcHelp');
    SM.openMC();
    help.hidden = false;
    help.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  function boot() {
    applyTheme();
    SM.render();
    SM.initProgress();
    SM.initShelf();
    SM.initQuestions();
    SM.initMatch();
    SM.renderProgress();
    SM.setTop();
    window.addEventListener('resize', SM.setTop);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(SM.setTop);

    $('stackBtn').addEventListener('click', SM.stackAll);
    $('themeBtn').addEventListener('click', SM.toggleTheme);
    $('fsBtn').addEventListener('click', SM.toggleFullscreen);
    $('installBtn').addEventListener('click', SM.install);
    $('notch').addEventListener('click', function () {
      if ($('topbar').classList.contains('is-open')) SM.closeHeader(); else openHeader();
    });
    $('topbar').addEventListener('pointerdown', function () { if ($('topbar').classList.contains('is-open')) { clearTimeout(hdrT); hdrT = setTimeout(SM.closeHeader, 9000); } });
    $('shelf').addEventListener('scroll', function () { if ($('topbar').classList.contains('is-open')) SM.closeHeader(); }, { passive: true });
    $('mcFs').addEventListener('click', SM.toggleFullscreen);
    $('mcInstall').addEventListener('click', function () { if (deferred) SM.install(); else { $('mcHelp').hidden = !$('mcHelp').hidden; } });

    // offline app shell when served from the hostable build
    if (window.SM_PWA && 'serviceWorker' in navigator && /^https?:/.test(location.protocol)) {
      navigator.serviceWorker.register('sw.js').catch(function () {});
    }
    window.__sm = SM;
  }

  // the script sits at the end of <body>, so the DOM above it is ready: boot now, before MathJax's first pass
  boot();
  // and typeset again once MathJax is up, in case its first pass ran before the cards existed
  SM.mathReady(function (ok) { if (ok) SM.typeset($('shelf')); });
})();
