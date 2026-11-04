/* ══════════════════════════════════════════════════════════════════
   Stacked derivation player (SSP)
   One line per step, written underneath the one before. Each new line is
   animated out of the line above it (glyphs matched and moved by the SSC-V6
   MathFlow matcher; a move that acts on both sides is first shown applied,
   then simplified). Earlier lines stay on the page, dimmed, so the finished
   derivation can be read top to bottom.
   A figure, if the derivation has one, floats (sticky, semi-transparent) above
   the lines while the derivation runs. When it is complete the figure stops
   floating and every step that changed the figure gets its own copy of it.
     der(id)            markup, used inside station bodies
     mountDerivs(root)  start players as they scroll into view
   Data: window.DERIVS[id] = {title, marks, src, legend, figure, steps:[...]}
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var SM = window.SM, T = SM.tex, MF = SM.MathFlow;
  var NS = 'http://www.w3.org/2000/svg', PAD = 2;
  var REDUCE = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
  var EASE = 'cubic-bezier(0.65, 0, 0.35, 1)', OUT = 'cubic-bezier(0.2, 0.8, 0.2, 1)';
  var DONE_KEY = 'ss12_derivs_done_v2';
  var done = {};
  try { done = JSON.parse(localStorage.getItem(DONE_KEY)) || {}; } catch (e) { done = {}; }
  function saveDone() { try { localStorage.setItem(DONE_KEY, JSON.stringify(done)); } catch (e) {} }
  function esc(s) { return SM.esc(s); }
  function figEngine(spec) { return spec && spec.kind === '3d' ? SM.Fig3 : SM.Figure; }

  /* ---------------- markup ---------------- */
  window.der = function (id) {
    var d = (window.DERIVS || {})[id];
    if (!d) return '<div class="note pitfall"><div class="nh">missing derivation</div><p>' + id + '</p></div>';
    var fig = !!(d.figure && d.figure.parts);
    var last = d.steps[d.steps.length - 1].tex;
    var nAsk = d.steps.filter(function (s) { return s.ask; }).length;
    return '<div class="dv' + (fig ? ' has-fig' : '') + '" data-dv="' + id + '">' +
      '<div class="dv-h"><span class="li">derivation</span><b class="dv-t">' + d.title + '</b>' +
        (d.marks ? '<span class="dv-pill">' + d.marks + '</span>' : '') + '</div>' +
      '<div class="dv-route"><div class="dv-end"><small>start</small><div>\\(' + (d.start || d.steps[0].tex) + '\\)</div></div>' +
        '<span class="dv-arrow">→</span>' +
        '<div class="dv-end"><small>result</small><div>\\(' + (d.result || last) + '\\)</div></div></div>' +
      (d.legend ? '<p class="dv-leg">' + d.legend + '</p>' : '') +
      (d.uses && d.uses.length ? '<div class="dv-uses"><span class="du-h">Before you start: what this uses</span>' +
        d.uses.map(function (u) { return '<span class="du-r"><span class="du-s">\\(' + u[0] + '\\)</span><span class="du-d">' + u[1] + '</span></span>'; }).join('') + '</div>' : '') +
      '<div class="sx">' +
        (fig ? '<div class="sx-fig"><div class="sx-figbox fg-host"></div>' +
          (d.figure.kind === '3d' ? '<span class="sx-hint">drag to turn</span>' : '') + '</div>' : '') +
        '<ol class="sx-rows"></ol>' +
        '<div class="sx-ask" hidden><span class="sx-ask-tag">your move</span><p class="sx-ask-q"></p><div class="sx-ask-opts"></div>' +
          '<p class="sx-ask-why" hidden></p><button type="button" class="btn primary sx-ask-go" hidden>Continue ▸</button></div>' +
        '<div class="sx-ctrl">' +
          '<button type="button" class="sx-b" data-sx="prev" aria-label="Take back the last step" title="Back one step">◀</button>' +
          '<button type="button" class="sx-b sx-next" data-sx="next"><span class="sx-nl">Start ▸</span><span class="sx-count"></span></button>' +
          '<button type="button" class="sx-b" data-sx="play" title="Play by itself (for watching or screen recording)" aria-label="Play by itself">▶▶</button>' +
          '<button type="button" class="sx-b" data-sx="all" title="Show every step at once">All</button>' +
          '<button type="button" class="sx-b" data-sx="reset" title="Start again" aria-label="Start again">↺</button>' +
        '</div>' +
      '</div>' +
      (nAsk ? '<p class="dv-foot">' + nAsk + ' checkpoint' + (nAsk > 1 ? 's' : '') + ' on the way: choose the next move before it is shown.</p>' : '') +
      '' +
      '</div>';
  };

  /* ---------------- glyph sprites ---------------- */
  function sprite(g, k, x, y) {
    var w = g.w * k, h = g.h * k;
    var svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('class', 'sx-sp');
    svg.setAttribute('width', (w + 2 * PAD).toFixed(2));
    svg.setAttribute('height', (h + 2 * PAD).toFixed(2));
    svg.style.left = (x - PAD).toFixed(2) + 'px';
    svg.style.top = (y - PAD).toFixed(2) + 'px';
    var gg = document.createElementNS(NS, 'g'), m = g.m;
    gg.setAttribute('transform', 'matrix(' + [k * m[0], k * m[1], k * m[2], k * m[3], k * m[4] + PAD - k * g.x, k * m[5] + PAD - k * g.y].map(function (v) { return v.toFixed(4); }).join(' ') + ')');
    gg.appendChild(g.node.cloneNode(false));
    svg.appendChild(gg);
    return svg;
  }
  function tr(dx, dy, sx, sy) { return 'translate(' + dx.toFixed(1) + 'px,' + dy.toFixed(1) + 'px) scale(' + sx.toFixed(3) + ',' + sy.toFixed(3) + ')'; }
  function anim(el, frames, o) {
    if (REDUCE || !el.animate) return null;
    return el.animate(frames, { duration: o.duration, delay: o.delay || 0, easing: o.easing || EASE, fill: 'backwards' });
  }

  /* ---------------- one player ---------------- */
  function Player(host, id, d) {
    var self = this;
    this.host = host; this.id = id; this.d = d;
    var sx = host.querySelector('.sx');
    this.rowsEl = sx.querySelector('.sx-rows');
    this.askEl = sx.querySelector('.sx-ask');
    this.ctrl = sx.querySelector('.sx-ctrl');
    this.figWrap = sx.querySelector('.sx-fig');
    this.nextBtn = sx.querySelector('[data-sx="next"]');
    this.countEl = sx.querySelector('.sx-count');
    this.n = 0;               // steps shown
    this.busy = null;         // running animation {finish()}
    this.answered = {};
    this.timers = [];
    this.presenting = false;
    sx.querySelectorAll('[data-sx]').forEach(function (b) {
      b.addEventListener('click', function (e) {
        e.stopPropagation();
        var a = b.getAttribute('data-sx');
        if (a !== 'play') self.stopPresent();
        if (a === 'next') self.next();
        else if (a === 'prev') self.prev();
        else if (a === 'all') self.all();
        else if (a === 'reset') self.reset(true);
        else if (a === 'play') self.present();
      });
    });
    this.askEl.querySelector('.sx-ask-go').addEventListener('click', function (e) { e.stopPropagation(); self.resume(); });
  }
  var P = Player.prototype;

  P.size = function () {
    return parseFloat(getComputedStyle(this.host).getPropertyValue('--sx-size')) || 18;
  };
  /* measure every line once and fix one "=" column for the whole derivation */
  P.layout = function () {
    var d = this.d, size = this.size(), self = this;
    var W = this.rowsEl.clientWidth - 20;
    if (W < 120) W = 280;
    this.W = W; this.fs = size;
    this.lines = d.steps.map(function (st, i) {
      var prev = i > 0 ? d.steps[i - 1].tex : null;
      var op = st.move && prev ? T.opLine(prev, st.move) : null;
      return { res: MF.measure(st.tex, size), op: op ? MF.measure(op, size) : null };
    });
    var Ms = [];
    this.lines.forEach(function (ln) { [ln.res, ln.op].forEach(function (M) { if (M && !M.error) Ms.push(M); }); });
    Ms.forEach(function (M) { M.k0 = Math.max(0.5, Math.min(1, (W - 4) / Math.max(1, M.L + M.R))); });
    // one "=" column for the lines that can share it
    var eqX = 40;
    Ms.forEach(function (M) { eqX = Math.max(eqX, Math.min(M.L * M.k0, W * 0.56)); });
    eqX += 4;
    this.eqX = eqX;
    Ms.forEach(function (M) {
      var k = M.k0;
      if (M.hasEq) k = Math.min(k, M.R > 0 ? (W - 2 - eqX) / M.R : k, M.L > 0 ? (eqX - 2) / M.L : k);
      if (M.hasEq && k >= Math.max(0.62, M.k0 * 0.8)) { M.k = k; M.left = eqX - M.L * k; }
      else { M.k = M.k0; M.left = Math.max(4, (W - (M.L + M.R) * M.k) / 2); }   // too wide to align: centre it
      M.right = M.left + (M.L + M.R) * M.k;
    });
    this.lines.forEach(function (ln) {
      var hs = [ln.res, ln.op].filter(function (M) { return M && !M.error; });
      ln.U = Math.max.apply(null, hs.map(function (M) { return M.U * M.k; }).concat([10]));
      ln.D = Math.max.apply(null, hs.map(function (M) { return M.D * M.k; }).concat([8]));
      ln.width = Math.max.apply(null, hs.map(function (M) { return M.right; }).concat([0])) + 8;
    });
  };
  /* glyph positions of a measured line inside its row's equation box */
  P.pos = function (M, ln) {
    var base = 6 + ln.U, out = [];
    M.glyphs.forEach(function (g) {
      out.push({ x: M.left + (g.x - M.ax) * M.k + M.L * M.k, y: base + (g.y - M.ay) * M.k, w: g.w * M.k, h: g.h * M.k });
    });
    return out;
  };
  P.placeSvg = function (box, M, ln) {
    box.innerHTML = '';
    if (M.error) { box.innerHTML = '<div class="sx-err">TeX error: ' + esc(M.tex) + '</div>'; return; }
    var w = document.createElement('div');
    w.className = 'sx-svg';
    w.style.fontSize = (this.fs * M.k) + 'px';
    w.innerHTML = M.svgHTML;
    // the svg's own top-left is (sx, sy) in measure coordinates
    w.style.left = (M.left + (M.sx - M.ax) * M.k + M.L * M.k).toFixed(2) + 'px';
    w.style.top = (6 + ln.U + (M.sy - M.ay) * M.k).toFixed(2) + 'px';
    box.appendChild(w);
  };

  P.rowHTML = function (i) {
    var st = this.d.steps[i];
    var lbl = st.move ? T.label(st.move) : (i === 0 ? 'Start' : '');
    return '<div class="sx-head"><span class="sx-num">' + SM.pad2(i + 1) + '</span><span class="sx-mv">' + SM.mathLabel(lbl) + '</span></div>' +
      '<div class="sx-eq"></div>' +
      (st.note ? '<div class="sx-note">' + st.note + '</div>' : '') +
      '<div class="sx-snap" hidden></div>';
  };
  P.makeRow = function (i) {
    var st = this.d.steps[i], ln = this.lines[i];
    if (st.phase && (i === 0 || st.phase !== (this.d.steps[i - 1].phase || ''))) {
      var ph = document.createElement('li');
      ph.className = 'sx-phase';
      ph.setAttribute('data-for', i);
      ph.innerHTML = '<span>' + SM.mathLabel(esc(st.phase)) + '</span>';
      this.rowsEl.appendChild(ph);
      SM.typeset(ph);
    }
    var li = document.createElement('li');
    li.className = 'sx-row';
    li.setAttribute('data-i', i);
    li.innerHTML = this.rowHTML(i);
    var box = li.querySelector('.sx-eq');
    box.style.height = (ln.U + ln.D + 12).toFixed(1) + 'px';
    this.placeSvg(box, ln.res, ln);
    if (ln.width > this.W + 20) { var sp = document.createElement('div'); sp.className = 'sx-spacer'; sp.style.width = ln.width.toFixed(0) + 'px'; box.appendChild(sp); }
    this.rowsEl.appendChild(li);
    SM.typeset(li.querySelector('.sx-head'));
    var nt = li.querySelector('.sx-note');
    if (nt) SM.typeset(nt);
    return li;
  };
  P.rowEl = function (i) { return this.rowsEl.querySelector('.sx-row[data-i="' + i + '"]'); };

  /* fly glyphs from line A (in row ra) to line B (in row rb); returns ms until done */
  P.fly = function (A, lnA, ra, B, lnB, rb, cancels, delay, gone) {
    var layer = this.layer, lr = layer.getBoundingClientRect();
    var ba = ra.querySelector('.sx-eq').getBoundingClientRect(), bb = rb.querySelector('.sx-eq').getBoundingClientRect();
    var oxA = ba.left - lr.left - ra.querySelector('.sx-eq').scrollLeft, oyA = ba.top - lr.top;
    var oxB = bb.left - lr.left - rb.querySelector('.sx-eq').scrollLeft, oyB = bb.top - lr.top;
    var pa = this.pos(A, lnA), pb = this.pos(B, lnB);
    var pairs = MF.match(A, B, A.k, B.k), mA = {}, mB = {}, sprites = [];
    delay = delay || 0;
    pairs.forEach(function (p) {
      var a = p[0], b = p[1], ga = pa[a], gb = pb[b];
      mA[a] = 1; mB[b] = 1;
      var sp = sprite(B.glyphs[b], B.k, oxB + gb.x, oyB + gb.y);
      layer.appendChild(sp); sprites.push(sp);
      var dx = (oxA + ga.x) - (oxB + gb.x), dy = (oyA + ga.y) - (oyB + gb.y);
      var sxx = gb.w > 0.3 ? ga.w / gb.w : 1, syy = gb.h > 0.3 ? ga.h / gb.h : 1;
      sxx = Math.max(0.2, Math.min(5, sxx)); syy = Math.max(0.2, Math.min(5, syy));
      var cross = Math.abs(dx) > 14 && ((ga.x + ga.w / 2) - A.left - A.L * A.k) * ((gb.x + gb.w / 2) - B.left - B.L * B.k) < 0;
      var kf = [], N = cross ? 14 : 1;
      for (var q = 0; q <= N; q++) {
        var u = q / N, lift = cross ? Math.sin(Math.PI * u) * Math.min(36, 10 + Math.abs(dx) * 0.15) : 0;
        kf.push({ transform: tr(dx * (1 - u), dy * (1 - u) - lift, sxx + (1 - sxx) * u, syy + (1 - syy) * u), offset: u });
      }
      anim(sp, kf, { duration: cross ? 1000 : 820, delay: delay + 40 });
    });
    var strikes = [];
    if (gone) {   // second phase inside one row: what the simplification removes fades out where it was
      A.glyphs.forEach(function (g, a) {
        if (mA[a]) return;
        var p = pa[a], sp = sprite(g, A.k, oxA + p.x, oyA + p.y);
        sp.classList.add('is-out'); sp.style.opacity = '0';
        layer.appendChild(sp); sprites.push(sp);
        anim(sp, [{ opacity: 1, transform: 'none' }, { opacity: 0, transform: tr(p.w * 0.15, p.h * 0.2, 0.6, 0.6) }], { duration: 420, delay: delay + (cancels ? 380 : 120), easing: 'ease-in' });
      });
    }
    if (cancels) {
      A.glyphs.forEach(function (g, a) {
        if (mA[a]) return;
        var p = pa[a], s = document.createElement('i');
        s.className = 'sx-strike';
        s.style.left = (oxA + p.x - 1) + 'px'; s.style.top = (oyA + p.y + p.h / 2) + 'px'; s.style.width = (p.w + 2) + 'px';
        layer.appendChild(s); strikes.push(s);
        anim(s, [{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], { duration: 260, delay: delay, easing: OUT });
      });
    }
    var fresh = [];
    B.glyphs.forEach(function (g, b) { if (!mB[b]) fresh.push(b); });
    fresh.sort(function (p, q) { return pb[p].x - pb[q].x; });
    fresh.forEach(function (b, n) {
      var gb = pb[b], sp = sprite(B.glyphs[b], B.k, oxB + gb.x, oyB + gb.y);
      sp.classList.add('is-new');
      layer.appendChild(sp); sprites.push(sp);
      anim(sp, [{ opacity: 0, transform: tr(0, 7, 0.85, 0.85) }, { opacity: 1, transform: 'none' }], { duration: 480, delay: delay + 480 + n * 22, easing: OUT });
    });
    return { sprites: sprites, strikes: strikes, ms: delay + 1100 + fresh.length * 22 };
  };

  P.clearFly = function () {
    if (this.layer) this.layer.innerHTML = '';
  };

  /* show step i (append its row), animated unless instant */
  P.show = function (i, instant) {
    var self = this, d = this.d, ln = this.lines[i];
    var li = this.makeRow(i);
    this.rowsEl.querySelectorAll('.sx-row.is-now').forEach(function (r) { r.classList.remove('is-now'); });
    li.classList.add('is-now');
    this.n = i + 1;
    if (this.fig) this.fig.step(i, !!instant);
    this.chrome();
    if (instant || REDUCE || i === 0 || ln.res.error || this.lines[i - 1].res.error) {
      if (i === 0 && !instant && !REDUCE) li.animate && li.animate([{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'none' }], { duration: 420, easing: OUT });
      if (i === d.steps.length - 1) this.finishLast(instant);
      if (!instant) this.follow(li);
      return;
    }
    var prevRow = this.rowEl(i - 1), A = this.lines[i - 1].res, lnA = this.lines[i - 1];
    var box = li.querySelector('.sx-eq');
    var real = box.querySelector('.sx-svg');
    if (real) real.style.visibility = 'hidden';
    var nt = li.querySelector('.sx-note');
    if (nt && nt.animate) nt.animate([{ opacity: 0, transform: 'translateY(-4px)' }, { opacity: 1, transform: 'none' }], { duration: 500, delay: 650, easing: OUT, fill: 'backwards' });
    this.follow(li);
    var mv = d.steps[i].move, cancels = mv && T.CANCELS[mv.type];
    var t1;
    if (ln.op && !ln.op.error) {
      // the move applied inline first, then the simplified line
      var f1 = this.fly(A, lnA, prevRow, ln.op, ln, li, false, 0);
      t1 = setTimeout(function () {
        self.clearFly();
        var f2 = self.fly(ln.op, ln, li, ln.res, ln, li, cancels, 0, true);
        self.busyT = setTimeout(function () { self.settle(li); }, f2.ms);
      }, f1.ms + 900);
    } else {
      var f = this.fly(A, lnA, prevRow, ln.res, ln, li, cancels, 0);
      t1 = setTimeout(function () { self.settle(li); }, f.ms);
    }
    this.busy = { t: t1, li: li };
    if (i === d.steps.length - 1) this.pendingFinish = true;
  };
  P.settle = function (li) {
    clearTimeout(this.busyT); if (this.busy) clearTimeout(this.busy.t);
    this.busy = null;
    this.clearFly();
    var real = li && li.querySelector('.sx-svg');
    if (real) { real.style.visibility = ''; real.classList.add('is-fresh'); setTimeout(function () { real.classList.remove('is-fresh'); }, 900); }
    if (this.pendingFinish) { this.pendingFinish = false; this.finishLast(false); }
  };
  P.fastForward = function () { if (this.busy) this.settle(this.busy.li); };

  /* page scroll on the page clock (so it stays smooth when a recording slows the clock down) */
  var scr = null;
  function scrollByEased(dy) {
    if (REDUCE) { window.scrollBy(0, dy); return; }
    var y0 = window.scrollY, t0 = performance.now(), ms = 650, to = y0 + dy;
    if (scr) { to = scr.to + dy; y0 = window.scrollY; }
    scr = { to: to };
    (function f() {
      var t = Math.min(1, (performance.now() - t0) / ms), k = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      window.scrollTo(0, y0 + (to - y0) * k);
      if (t < 1) requestAnimationFrame(f); else scr = null;
    })();
  }
  window.__sspScroll = scrollByEased;
  /* keep the newest line and the controls in view (below the floating figure) */
  P.follow = function (li) {
    var self = this;
    requestAnimationFrame(function () {
      var r = self.ctrl.getBoundingClientRect(), vh = window.innerHeight;
      if (r.bottom > vh - 12) scrollByEased(r.bottom - vh + 24);
    });
  };

  P.chrome = function () {
    var N = this.d.steps.length;
    this.countEl.textContent = this.n + ' / ' + N;
    var complete = this.n >= N;
    this.nextBtn.querySelector('.sx-nl').textContent = this.n === 0 ? 'Start ▸' : (complete ? 'Done ✓' : 'Next ▸');
    this.nextBtn.disabled = complete;
    this.host.classList.toggle('is-running', this.n > 0 && !complete);
    this.ctrl.querySelector('[data-sx="prev"]').disabled = this.n <= 1;
  };

  P.needsAsk = function (j) { var s = this.d.steps[j]; return s && s.ask && this.answered[j] === undefined; };

  P.next = function () {
    if (this.busy) { this.fastForward(); return; }
    if (this.asking != null) return;
    var j = this.n;
    if (j >= this.d.steps.length) return;
    if (j === 0 && this.fig && !this.introDone) { this.introDone = true; this.fig.intro(); }
    if (this.needsAsk(j)) { this.ask(j); return; }
    this.show(j, false);
  };
  P.prev = function () {
    if (this.n <= 1 || this.asking != null) return;
    this.fastForward();
    var i = this.n - 1, r = this.rowEl(i);
    if (r) r.remove();
    var ph = this.rowsEl.querySelector('.sx-phase[data-for="' + i + '"]');
    if (ph) ph.remove();
    this.n = i;
    this.unfinish();
    var last = this.rowEl(i - 1);
    if (last) last.classList.add('is-now');
    if (this.fig) this.fig.step(i - 1, false);
    this.chrome();
  };
  P.all = function () {
    this.fastForward();
    this.hideAsk();
    for (var j = this.n; j < this.d.steps.length; j++) this.show(j, true);
    if (this.fig && !this.introDone) { this.introDone = true; }
  };
  P.reset = function (andStart) {
    this.stopPresent();
    this.fastForward();
    this.hideAsk();
    this.rowsEl.innerHTML = '';
    this.n = 0; this.answered = {};
    this.unfinish();
    this.introDone = false;
    if (this.fig) this.fig.step(0, true);
    this.chrome();
    if (andStart) this.next();
  };

  /* ---------- checkpoints ---------- */
  P.ask = function (j) {
    var self = this, a = this.d.steps[j].ask;
    this.asking = j;
    if (this.fig) this.fig.step(j, false);   // the figure shows what the question is about
    var q = this.askEl.querySelector('.sx-ask-q'), opts = this.askEl.querySelector('.sx-ask-opts');
    var why = this.askEl.querySelector('.sx-ask-why'), go = this.askEl.querySelector('.sx-ask-go');
    q.innerHTML = a.q; why.hidden = true; go.hidden = true;
    var order = SM.shuffle(a.options.map(function (o, k) { return k; }));
    opts.innerHTML = order.map(function (k, n) { return '<button type="button" data-k="' + k + '"><b>' + (n + 1) + '</b> ' + a.options[k] + '</button>'; }).join('');
    opts.querySelectorAll('button').forEach(function (b) {
      b.addEventListener('click', function (e) { e.stopPropagation(); if (!self.presenting) self.pick(Number(b.dataset.k)); });
    });
    this.askEl.hidden = false; this.ctrl.classList.add('is-asking');
    SM.typeset(this.askEl);
    this.follow();
  };
  P.pick = function (k, auto) {
    var j = this.asking; if (j == null) return;
    var a = this.d.steps[j].ask, ok = k === a.answer;
    if (this.answered[j] !== undefined) return;
    this.answered[j] = ok;
    var opts = this.askEl.querySelector('.sx-ask-opts'), why = this.askEl.querySelector('.sx-ask-why');
    opts.querySelectorAll('button').forEach(function (x) {
      x.disabled = true;
      if (Number(x.dataset.k) === a.answer) x.classList.add('is-correct');
      if (Number(x.dataset.k) === k && !ok) x.classList.add('is-wrong');
    });
    why.innerHTML = '<b>' + (auto ? 'Answer. ' : ok ? 'Right move. ' : 'Not this one. ') + '</b>' + (a.why || '');
    why.hidden = false;
    this.askEl.querySelector('.sx-ask-go').hidden = !!auto;
    SM.typeset(why);
    this.follow();
  };
  P.hideAsk = function () { this.askEl.hidden = true; this.asking = null; this.ctrl.classList.remove('is-asking'); };
  P.resume = function () {
    var j = this.asking; if (j == null) return;
    this.hideAsk();
    this.show(j, false);
  };

  /* ---------- the finished derivation ---------- */
  P.finishLast = function (instant) {
    var self = this;
    if (this.complete) return;
    this.complete = true;
    this.host.classList.add('is-complete');
    this.host.classList.remove('is-running');
    var lastRow = this.rowEl(this.d.steps.length - 1);
    if (lastRow) lastRow.classList.add('is-result');
    if (!this.presenting) { done[this.id] = 1; saveDone(); this.host.classList.add('is-done'); }
    this.rowsEl.querySelectorAll('.sx-row.is-now').forEach(function (r) { r.classList.remove('is-now'); });
    if (this.d.figure) setTimeout(function () { self.snapshots(); }, instant ? 0 : 900);
    this.chrome();
  };
  P.unfinish = function () {
    this.complete = false;
    this.host.classList.remove('is-complete');
    this.rowsEl.querySelectorAll('.sx-snap').forEach(function (s) { s.hidden = true; s.innerHTML = ''; s._fig = null; });
    this.rowsEl.querySelectorAll('.is-result').forEach(function (s) { s.classList.remove('is-result'); });
  };
  /* every step that changed the figure keeps its own picture of it */
  P.snapshots = function () {
    var d = this.d, eng = figEngine(d.figure);
    if (!eng) return;
    d.steps.forEach(function (st, i) {
      if (!st.figNew) return;
      var li = this.rowEl(i);
      if (!li) return;
      var s = li.querySelector('.sx-snap');
      if (!s || s._fig) return;
      s.hidden = false;
      var box = document.createElement('div');
      box.className = 'sx-snapbox fg-host';
      s.appendChild(box);
      s._fig = eng.mount(box, d.figure, d.steps, { player: true, still: true });
      s._fig.step(i, true);
      if (ro) ro.observe(box);
      box._fig = s._fig;
    }, this);
  };

  /* ---------- plays by itself (presentation / screen recording) ---------- */
  P.present = function () {
    var self = this;
    if (this.presenting) { this.stopPresent(); return; }
    this.reset(false);
    this.presenting = true;
    this.host.classList.add('is-presenting');
    var plain = function (h) { var t = document.createElement('div'); t.innerHTML = h || ''; return (t.textContent || '').length; };
    var later = function (fn, ms) { self.timers.push(setTimeout(fn, ms)); };
    var step = function () {
      if (!self.presenting) return;
      var j = self.n;
      if (j >= self.d.steps.length) { later(function () { self.stopPresent(); if (self.onPresented) self.onPresented(); }, 3500); return; }
      if (j === 0 && self.fig && !self.introDone) { self.introDone = true; self.fig.intro(); }
      var st = self.d.steps[j];
      var hold = Math.max(2600, Math.min(7000, 1500 + plain(st.note) * 38)) + (self.lines[j].op ? 2000 : 0);
      if (st.ask) {
        self.answered[j] = undefined;
        self.ask(j);
        later(function () { self.pick(st.ask.answer, true); }, 3400);
        later(function () { self.hideAsk(); self.show(j, false); later(step, hold); }, 3400 + Math.max(2800, Math.min(5600, 1400 + plain(st.ask.why) * 32)));
        return;
      }
      self.show(j, false);
      later(step, hold);
    };
    var first = (this.fig && this.fig.introLeft) ? 400 : 0;
    later(step, first);
  };
  P.stopPresent = function () {
    this.timers.forEach(clearTimeout); this.timers = [];
    if (!this.presenting) return;
    this.presenting = false;
    this.host.classList.remove('is-presenting');
  };

  /* ---------- mounting ---------- */
  var ro = ('ResizeObserver' in window) ? new ResizeObserver(function (en) {
    en.forEach(function (x) {
      var t = x.target;
      if (t._fig) t._fig.layout();
      if (t._player) t._player.relayout();
    });
  }) : null;

  P.relayout = function () {
    var w = this.rowsEl.clientWidth;
    if (!this.lines || Math.abs(w - 20 - this.W) < 4) return;
    var n = this.n, answered = this.answered, wasComplete = this.complete;
    this.fastForward();
    this.layout();
    this.rowsEl.innerHTML = '';
    this.n = 0; this.complete = false;
    for (var j = 0; j < n; j++) this.show(j, true);
    this.answered = answered;
    if (!wasComplete) this.unfinish();
  };

  function mount(host) {
    if (host._player) return;
    var id = host.getAttribute('data-dv'), d = window.DERIVS[id];
    if (!d) return;
    var p = new Player(host, id, d);
    host._player = p;
    p.layer = document.createElement('div');
    p.layer.className = 'sx-layer';
    host.querySelector('.sx').appendChild(p.layer);
    var figBox = host.querySelector('.sx-figbox');
    if (figBox && d.figure) {
      p.fig = figEngine(d.figure).mount(figBox, d.figure, d.steps, { player: true });
      figBox._fig = p.fig;
      if (ro) ro.observe(figBox);
    }
    SM.mathReady(function (ok) {
      if (!ok) { p.rowsEl.innerHTML = '<li class="sx-err">MathJax did not load. Check the connection and reload.</li>'; return; }
      p.layout();
      p.rowsEl._player = p;
      if (ro) ro.observe(p.rowsEl);
      if (done[id]) { p.introDone = true; for (var j = 0; j < d.steps.length; j++) p.show(j, true); }
      else { p.chrome(); if (p.fig) p.fig.step(0, true); }
    });
  }

  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function (en) {
    en.forEach(function (x) {
      if (x.isIntersecting && x.target.offsetWidth > 0) { io.unobserve(x.target); mount(x.target); }
    });
  }, { rootMargin: '200px 0px' }) : null;

  window.mountDerivs = function (root) {
    (root || document).querySelectorAll('.dv').forEach(function (h) {
      if (h._player || h._watched) return;
      h._watched = true;
      if (io) io.observe(h); else mount(h);
    });
  };
  window.SSPDeriv = { mount: mount };
})();
