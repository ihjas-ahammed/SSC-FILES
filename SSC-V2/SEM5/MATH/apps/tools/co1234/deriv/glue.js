/* ══════════════════════════════════════════════════════════════════
   Derivation players for the SSP page
   The engine (core.js, figure.js, mathflow.js) comes from SSC-V6 study-match.
   This file gives the page:
     der(id)   the markup for one derivation, used inside station bodies
     mounting  each player starts when it scrolls into view (sections can be
               folded, so nothing is measured while hidden)
   Data: window.DERIVS[id] = {title, marks, src, legend, figure, steps:[...]}
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var SM = window.SM;
  var DONE_KEY = 'ss12_derivs_done_v1';
  var done = {};
  try { done = JSON.parse(localStorage.getItem(DONE_KEY)) || {}; } catch (e) { done = {}; }
  function saveDone() { try { localStorage.setItem(DONE_KEY, JSON.stringify(done)); } catch (e) {} }

  function lastTex(d) { return d.steps[d.steps.length - 1].tex; }

  window.der = function (id) {
    var d = (window.DERIVS || {})[id];
    if (!d) return '<div class="note pitfall"><div class="nh">missing derivation</div><p>' + id + '</p></div>';
    var fig = !!(d.figure && d.figure.parts);
    var ask = d.steps.filter(function (s) { return s.ask; }).length;
    return '<div class="dv" data-dv="' + id + '">' +
      '<div class="dv-h"><span class="li">derivation</span><b class="dv-t">' + d.title + '</b>' +
        (d.marks ? '<span class="dv-pill">' + d.marks + '</span>' : '') + '</div>' +
      '<div class="dv-route"><div class="dv-end"><small>start</small><div>\\(' + (d.start || d.steps[0].tex) + '\\)</div></div>' +
        '<span class="dv-arrow">→</span>' +
        '<div class="dv-end"><small>result</small><div>\\(' + (d.result || lastTex(d)) + '\\)</div></div></div>' +
      (d.legend ? '<p class="dv-leg">' + d.legend + '</p>' : '') +
      '<div class="mf-card mf-v2 dv-p' + (fig ? '' : ' no-fig') + '">' +
        '<div class="mf-back">' +
          '<div class="mf-top"><div class="mf-phases"></div>' +
            '<div class="mf-top-actions"><span class="mf-count"></span>' +
            '<button type="button" class="chip mf-icon mf-rec" data-mf="record" aria-label="Play by itself and record as a video" title="Play by itself (and record on desktop Chrome)"><i></i></button></div></div>' +
          '<div class="mf-work' + (fig ? ' has-setup' : '') + '">' +
            (fig ? '<div class="mf-setup art" role="img" aria-label="' + SM.esc(d.title.replace(/<[^>]+>/g, '')) + '"></div>' : '') +
            '<div class="mf-right">' +
              '<div class="mf-board"><div class="mf-stage"></div><div class="mf-summary" hidden></div></div>' +
              '<div class="mf-panel"><p class="mf-note">Scroll here and the derivation starts. Press <b>Next</b> for each move.</p>' +
                '<div class="mf-ctrl">' +
                  '<button type="button" class="chip" data-mf="prev" aria-label="Previous step">&#9664;</button>' +
                  '<div class="mf-dots"></div>' +
                  '<button type="button" class="chip mf-next" data-mf="next" aria-label="Next step">Next &#9654;</button>' +
                  '<button type="button" class="chip" data-mf="replay" aria-label="Start again" title="Start again">&#8634;</button>' +
                  '<button type="button" class="chip dv-all" data-mf="summary" aria-label="Show every step" title="Show every step">All steps</button>' +
                '</div></div>' +
              '<div class="mf-ask" hidden><span class="mf-ask-tag">Your move</span><p class="mf-ask-q"></p><div class="mf-ask-opts"></div>' +
                '<p class="mf-ask-why" hidden></p><button type="button" class="btn mf-ask-go" hidden>Continue &#9654;</button></div>' +
            '</div></div></div></div>' +
      (ask ? '<p class="dv-foot mini dim">' + ask + ' checkpoint' + (ask > 1 ? 's' : '') + ' on the way: pick the next move before it is shown.</p>' : '') +
      (d.src ? '<p class="dv-src">' + d.src + '</p>' : '') +
      '</div>';
  };

  /* ---------- mounting ---------- */
  var ro = ('ResizeObserver' in window) ? new ResizeObserver(function (en) {
    en.forEach(function (x) {
      var t = x.target;
      if (t._fig) t._fig.layout();
      if (t._mf && t._mf.rebuild) t._mf.rebuild();
    });
  }) : null;

  function mount(p) {
    if (p._mounted) return;
    var host = p.closest('.dv'), id = host && host.getAttribute('data-dv'), d = id && window.DERIVS[id];
    if (!d) return;
    p._mounted = true;
    var setup = p.querySelector('.mf-setup');
    if (setup && d.figure) {
      setup._fig = SM.Figure.mount(setup, d.figure, d.steps, { player: true });
      if (ro) ro.observe(setup);
    }
    var api = SM.MathFlow.mount(p, {
      steps: d.steps, interval: 2600, completed: !!done[id],
      onComplete: function () { done[id] = 1; saveDone(); host.classList.add('is-done'); }
    });
    p._c = { title: (d.title || id).replace(/<[^>]+>/g, '') };
    var board = p.querySelector('.mf-board');
    board._mf = api;
    if (ro) ro.observe(board);
    if (done[id]) host.classList.add('is-done');
    // start: draw the figure and show the first line; every later move waits for Next
    (function start(n) {
      if (api.ready) { if (!done[id]) api.replay(); return; }
      if (n < 200) setTimeout(function () { start(n + 1); }, 60);
    })(0);
  }

  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function (en) {
    en.forEach(function (x) {
      if (x.isIntersecting && x.target.offsetWidth > 0) { io.unobserve(x.target); mount(x.target); }
    });
  }, { rootMargin: '120px 0px', threshold: 0.15 }) : null;

  window.mountDerivs = function (root) {
    (root || document).querySelectorAll('.dv-p').forEach(function (p) {
      if (p._mounted || p._watched) return;
      p._watched = true;
      if (io) io.observe(p); else mount(p);
    });
  };
})();
