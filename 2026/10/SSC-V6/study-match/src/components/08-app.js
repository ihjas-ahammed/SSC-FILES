/* ==========================================================================
   App: boot, header notch, theme, fullscreen
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
    document.documentElement.setAttribute('data-theme', SM.S.theme === 'dark' ? 'dark' : 'light');
    var dark = SM.S.theme === 'dark';   // light by default
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', dark ? '#111326' : '#FAF8F3');
  }
  SM.toggleTheme = function () {
    var dark = SM.S.theme === 'dark';
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

  // match switcher: one chip per match of this session; each chip opens that match in this tab
  function renderMatchSwitch() {
    var el = $('matchSwitch');
    if (!el || SM.matchCount < 2) return;
    var q = new URLSearchParams(location.search), chips = '';
    for (var k = 1; k <= SM.matchCount; k++) {
      q.set('match', String(k));
      q.set('matches', String(SM.matchCount));
      var on = k === SM.matchIndex;
      chips += '<a href="?' + SM.esc(q.toString()) + '"' + (on ? ' class="is-on" aria-current="page"' : '') + '>Match ' + k + '</a>';
    }
    el.innerHTML = '<span class="ms-label">Matches</span>' + chips;
    el.hidden = false;
  }

  function boot() {
    applyTheme();
    renderMatchSwitch();
    SM.render();
    SM.initProgress();
    SM.initDefinitionChecks();
    SM.initShelf();
    SM.initQuestions();
    SM.initUnderstanding();
    SM.initCalculator();
    SM.initMatch();
    SM.initGlossary();
    SM.renderProgress();
    SM.setTop();
    window.addEventListener('resize', SM.setTop);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(SM.setTop);

    $('stackBtn').addEventListener('click', SM.stackAll);
    $('themeBtn').addEventListener('click', SM.toggleTheme);
    $('fsBtn').addEventListener('click', SM.toggleFullscreen);
    $('notch').addEventListener('click', function () {
      if ($('topbar').classList.contains('is-open')) SM.closeHeader(); else openHeader();
    });
    $('topbar').addEventListener('pointerdown', function () { if ($('topbar').classList.contains('is-open')) { clearTimeout(hdrT); hdrT = setTimeout(SM.closeHeader, 9000); } });
    $('shelf').addEventListener('scroll', function () { if ($('topbar').classList.contains('is-open')) SM.closeHeader(); }, { passive: true });
    $('mcFs').addEventListener('click', SM.toggleFullscreen);

    window.__sm = SM;
  }

  // the script sits at the end of <body>, so the DOM above it is ready: boot now, before MathJax's first pass
  boot();
  // and typeset again once MathJax is up, in case its first pass ran before the cards existed
  SM.mathReady(function (ok) { if (ok) SM.typeset($('shelf')); });
})();
