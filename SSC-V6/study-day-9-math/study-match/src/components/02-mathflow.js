/* ==========================================================================
   MathFlow v4: derivations, animated
   --------------------------------------------------------------------------
   Data gives plain TeX lines plus the move that produced each one. Nothing else.

     { "tex": "v - u = at", "move": { "type": "subtract", "by": "u" }, "note": "...", "phase": "...", "ask": {...} }

   How it plays:
   1. Every line is typeset by MathJax itself (exact TeX layout, nothing hand placed).
   2. Each glyph and fraction bar of that typeset line becomes its own tiny sprite,
      drawn at exactly the position MathJax gave it.
   3. Between two lines, glyphs are matched automatically (longest common
      subsequence of shapes, then leftovers by shape and distance):
        matched  -> glides to its new place (arcs over "=" when it changes side)
        new      -> writes in, amber;   gone -> struck through (for cancelling
                    moves) and shrinks out, coral
   4. Moves that act on both sides (add, multiply, differentiate, ...) first show
      the move applied inline on the same line:  L + x = R + x  , then the result.
   5. "=" stays in one column; earlier lines stay above as a faded trail.
   ========================================================================== */
(function () {
  var SM = window.SM, T = SM.tex;
  var NS = 'http://www.w3.org/2000/svg';
  var PAD = 2, GHOST = 0.8;
  var SMOOTH = 'cubic-bezier(0.65, 0, 0.35, 1)', OUT = 'cubic-bezier(0.2, 0.8, 0.2, 1)';
  var REDUCE = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
  var holder = null, holderSize = 0;

  function getHolder(size) {
    if (!holder) {
      holder = document.createElement('div');
      holder.setAttribute('aria-hidden', 'true');
      holder.style.cssText = 'position:absolute;left:-12000px;top:0;visibility:hidden;pointer-events:none;white-space:nowrap;';
      document.body.appendChild(holder);
    }
    if (size !== holderSize) { holder.style.fontSize = size + 'px'; holderSize = size; }
    return holder;
  }

  /* ---------- typeset one line and pull out its glyphs ---------- */
  var mcache = {};
  function measure(tex, size) {
    var key = size + '|' + tex;
    if (mcache[key]) return mcache[key];
    var h = getHolder(size), node = null;
    try { node = MathJax.tex2svg(tex, { display: true }); } catch (e) { node = null; }
    if (!node) return (mcache[key] = { error: true, tex: tex });
    h.appendChild(node);
    var svg = node.querySelector('svg');
    if (!svg || svg.querySelector('[data-mml-node="merror"]')) {
      var msg = svg ? (svg.querySelector('[data-mml-node="merror"]').getAttribute('data-mjx-error') || '') : '';
      h.removeChild(node);
      return (mcache[key] = { error: true, tex: tex, msg: msg });
    }
    var hr = h.getBoundingClientRect(), sr = svg.getBoundingClientRect();
    var glyphs = [];
    Array.prototype.forEach.call(svg.querySelectorAll('path, rect'), function (el) {
      var r = el.getBoundingClientRect();
      if (r.width < 0.05 && r.height < 0.05) return;
      var m = el.getScreenCTM();
      if (!m) return;
      var isRect = el.tagName.toLowerCase() === 'rect';
      var clone = el.cloneNode(false);
      clone.removeAttribute('transform');
      clone.removeAttribute('stroke-width');
      glyphs.push({
        sig: isRect ? 'rect' : (el.getAttribute('data-c') || 'p'),
        node: clone,
        m: [m.a, m.b, m.c, m.d, m.e - hr.left, m.f - hr.top],
        x: r.left - hr.left, y: r.top - hr.top, w: r.width, h: r.height
      });
    });
    var eq = null;
    glyphs.forEach(function (g) { if (g.sig === '3D' && (!eq || g.h > eq.h + 0.5)) eq = g; });
    var x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    glyphs.forEach(function (g) { x0 = Math.min(x0, g.x); y0 = Math.min(y0, g.y); x1 = Math.max(x1, g.x + g.w); y1 = Math.max(y1, g.y + g.h); });
    if (!glyphs.length) { x0 = y0 = 0; x1 = y1 = 1; }
    var ax = eq ? eq.x + eq.w / 2 : (x0 + x1) / 2, ay = eq ? eq.y + eq.h / 2 : (y0 + y1) / 2;
    var res = { tex: tex, glyphs: glyphs, ax: ax, ay: ay, L: ax - x0, R: x1 - ax, U: ay - y0, D: y1 - ay,
      svgHTML: svg.outerHTML, sx: sr.left - hr.left, sy: sr.top - hr.top, hasEq: !!eq };
    h.removeChild(node);
    return (mcache[key] = res);
  }

  /* ---------- automatic glyph matching ---------- */
  function match(A, B, kA, kB) {
    var a = A.glyphs, b = B.glyphs, n = a.length, m = b.length, i, j;
    var dp = [];
    for (i = 0; i <= n; i++) dp.push(new Int16Array(m + 1));
    for (i = n - 1; i >= 0; i--) for (j = m - 1; j >= 0; j--)
      dp[i][j] = a[i].sig === b[j].sig ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    var pairs = [], usedA = {}, usedB = {};
    i = 0; j = 0;
    while (i < n && j < m) {
      if (a[i].sig === b[j].sig && dp[i][j] === dp[i + 1][j + 1] + 1) { pairs.push([i, j]); usedA[i] = 1; usedB[j] = 1; i++; j++; }
      else if (dp[i + 1][j] >= dp[i][j + 1]) i++;
      else j++;
    }
    // leftovers with the same shape: pair the nearest ones (this is what makes terms jump sides)
    var cxA = function (k) { return (a[k].x + a[k].w / 2 - A.ax) * kA; };
    var cxB = function (k) { return (b[k].x + b[k].w / 2 - B.ax) * kB; };
    b.forEach(function (g, jj) {
      if (usedB[jj]) return;
      var best = -1, bd = Infinity;
      a.forEach(function (h, ii) {
        if (usedA[ii] || h.sig !== g.sig) return;
        var dd = Math.abs(cxA(ii) - cxB(jj));
        if (dd < bd) { bd = dd; best = ii; }
      });
      if (best >= 0) { pairs.push([best, jj]); usedA[best] = 1; usedB[jj] = 1; }
    });
    return pairs;
  }

  /* interrupt-safe: freeze running Web Animations where they are (ignore CSS transitions) */
  function freeze(el) {
    if (!el.getAnimations) return false;
    var list = el.getAnimations().filter(function (x) { return !x.transitionProperty; });
    list.forEach(function (x) { try { x.commitStyles(); } catch (e) {} x.cancel(); });
    return list.length > 0;
  }
  function anim(el, frames, opt) {
    if (REDUCE || !el.animate) return null;
    return el.animate(frames, { duration: opt.duration, delay: opt.delay || 0, easing: opt.easing || SMOOTH, fill: 'backwards' });
  }
  function tr(dx, dy, sx, sy) { return 'translate(' + dx.toFixed(2) + 'px,' + dy.toFixed(2) + 'px) scale(' + sx.toFixed(4) + ',' + sy.toFixed(4) + ')'; }

  /* ======================================================================== */
  function mount(root, spec) {
    var stage = root.querySelector('.mf-stage'), board = root.querySelector('.mf-board');
    var noteEl = root.querySelector('.mf-note'), dotsEl = root.querySelector('.mf-dots');
    var phEl = root.querySelector('.mf-phases'), countEl = root.querySelector('.mf-count');
    var playBtn = root.querySelector('[data-mf="play"]');
    var panel = root.querySelector('.mf-panel'), askEl = root.querySelector('.mf-ask');
    var interval = spec.interval || 2500;
    var answered = spec.answered || {};
    var completed = !!spec.completed;

    /* steps -> frames (a both-sides move becomes two frames: applied, then result) */
    var frames = [], phase = '';
    spec.steps.forEach(function (st, si) {
      if (st.phase) phase = st.phase;
      var mv = st.move || null, prev = si > 0 ? spec.steps[si - 1].tex : null;
      var opTex = mv && prev ? T.opLine(prev, mv) : null;
      if (opTex) {
        frames.push({ tex: opTex, note: '<b>' + T.label(mv) + '.</b>', phase: phase, op: true, mv: mv, ask: st.ask || null, si: si });
        frames.push({ tex: st.tex, note: st.note || 'Simplify.', phase: phase, after: mv, si: si });
      } else {
        frames.push({ tex: st.tex, note: (mv ? '<b>' + T.label(mv) + '.</b> ' : '') + (st.note || ''), phase: phase, mv: mv, ask: st.ask || null, si: si });
      }
    });
    frames.forEach(function (f, i) { f.i = i; });
    var phases = [];
    frames.forEach(function (f) { if (phases.indexOf(f.phase) === -1) phases.push(f.phase); });

    var api = { i: -1, ready: false, frames: frames };
    var L = null, overlays = [], later = [], playing = false, loopT = null, asking = -1, builtW = 0, pairCache = {};

    phEl.innerHTML = phases.map(function (p) { return '<span class="mf-ph">' + SM.mathLabel(SM.esc(p)) + '</span>'; }).join('');
    SM.mathReady(function (ok) { if (ok) SM.typeset(phEl); });
    dotsEl.innerHTML = frames.map(function (f, j) {
      return '<button type="button" class="mf-dot' + (f.ask ? ' is-ask' : '') + '" aria-label="Step ' + (j + 1) + '" data-j="' + j + '"></button>';
    }).join('');

    function chrome(i) {
      var cur = frames[i] ? phases.indexOf(frames[i].phase) : -1;
      Array.prototype.forEach.call(phEl.children, function (c, k) { c.classList.toggle('is-now', k === cur); c.classList.toggle('is-past', k < cur); });
      var now = phEl.children[cur];
      if (now) phEl.scrollTo({ left: now.offsetLeft - 16, behavior: 'smooth' });
      Array.prototype.forEach.call(dotsEl.children, function (d, k) { d.classList.toggle('is-now', k === i); d.classList.toggle('is-done', k < i); });
      if (countEl) countEl.textContent = (Math.max(i, 0) + 1) + ' / ' + frames.length;
      if (playBtn) playBtn.innerHTML = playing ? '&#10073;&#10073;' : '&#9654;';
    }
    function setNote(html) {
      noteEl.style.opacity = '0';
      later.push(setTimeout(function () { noteEl.innerHTML = html; SM.typeset(noteEl); noteEl.style.opacity = '1'; }, 150));
    }

    /* ---------- layout: one scale, one "=" column, room for the trail ---------- */
    function build() {
      var size = parseFloat(getComputedStyle(root).getPropertyValue('--mf-size')) || 18;
      frames.forEach(function (f) { f.M = measure(f.tex, size); });
      var availW = stage.clientWidth || 260;
      builtW = availW;
      var Lm = 10, Rm = 10;
      frames.forEach(function (f) { if (!f.op && !f.M.error) { Lm = Math.max(Lm, f.M.L); Rm = Math.max(Rm, f.M.R); } });
      var kMain = Math.min(1, (availW - 16) / (Lm + Rm));
      var eqX = (availW - (Lm + Rm) * kMain) / 2 + Lm * kMain;
      var Up = 10, Dn = 10, gU = 6, gD = 6;
      frames.forEach(function (f) {
        if (f.M.error) { f.k = kMain; return; }
        f.k = Math.min(kMain, (eqX - 8) / Math.max(f.M.L, 1), (availW - eqX - 8) / Math.max(f.M.R, 1));
        Up = Math.max(Up, f.M.U * f.k); Dn = Math.max(Dn, f.M.D * f.k);
        if (!f.op) { gU = Math.max(gU, f.M.U * kMain * GHOST); gD = Math.max(gD, f.M.D * kMain * GHOST); }
      });
      var slotH = gU + gD + 8;
      var boardH = board.clientHeight || 300;
      var nG = Math.max(0, Math.min(3, Math.floor((boardH - 24 - (Up + Dn + 16)) / slotH)));
      var top = nG * slotH;
      L = { availW: availW, eqX: eqX, eqY: top + Up + 8, kMain: kMain, slotH: slotH, nG: nG, top: top, Up: Up, gD: gD };
      stage.style.height = (top + Up + Dn + 16) + 'px';
      stage.innerHTML = '';
      overlays = [];
      frames.forEach(function (f) { f.sp = null; f.pos = null; f.ghost = null; });
      pairCache = {};
      // op glyphs = what the move added to the previous line
      frames.forEach(function (f, i) {
        f.opSet = null;
        if (f.op && i > 0 && !f.M.error && !frames[i - 1].M.error) {
          var pr = pairsFor(i - 1, i), used = {};
          pr.forEach(function (p) { used[p[1]] = 1; });
          f.opSet = {};
          f.M.glyphs.forEach(function (g, j) { if (!used[j]) f.opSet[j] = 1; });
        }
      });
      api.ready = true;
    }

    function pairsFor(ia, ib) {
      var key = ia + '>' + ib;
      if (!pairCache[key]) pairCache[key] = match(frames[ia].M, frames[ib].M, frames[ia].k, frames[ib].k);
      return pairCache[key];
    }

    /* one sprite per glyph, drawn exactly where MathJax put it */
    function sprites(f) {
      if (f.sp) return f.sp;
      f.sp = []; f.pos = [];
      if (f.M.error) {
        var d = document.createElement('div');
        d.className = 'mf-err';
        d.textContent = 'TeX error: ' + f.tex + (f.M.msg ? '\n' + f.M.msg : '');
        d.style.top = Math.max(0, L.eqY - 20) + 'px';
        d.style.opacity = '0';
        stage.appendChild(d);
        f.sp.push(d); f.pos.push({ x: 6, y: L.eqY - 20, w: L.availW - 12, h: 40, cx: L.availW / 2 });
        return f.sp;
      }
      var k = f.k, M = f.M;
      M.glyphs.forEach(function (g, j) {
        var x = L.eqX + (g.x - M.ax) * k, y = L.eqY + (g.y - M.ay) * k, w = g.w * k, h = g.h * k;
        var svg = document.createElementNS(NS, 'svg');
        svg.setAttribute('class', 'mf-sp' + (f.opSet && f.opSet[j] ? ' is-op' : ''));
        svg.setAttribute('width', (w + 2 * PAD).toFixed(2));
        svg.setAttribute('height', (h + 2 * PAD).toFixed(2));
        svg.setAttribute('aria-hidden', 'true');
        svg.style.left = (x - PAD).toFixed(2) + 'px';
        svg.style.top = (y - PAD).toFixed(2) + 'px';
        svg.style.opacity = '0';
        var gg = document.createElementNS(NS, 'g'), m = g.m;
        gg.setAttribute('transform', 'matrix(' + [k * m[0], k * m[1], k * m[2], k * m[3], k * m[4] + PAD - k * g.x, k * m[5] + PAD - k * g.y].map(function (v) { return v.toFixed(4); }).join(' ') + ')');
        gg.appendChild(g.node.cloneNode(false));
        svg.appendChild(gg);
        stage.appendChild(svg);
        f.sp.push(svg);
        f.pos.push({ x: x, y: y, w: w, h: h, cx: x + w / 2 });
      });
      return f.sp;
    }

    /* faded trail of earlier lines, aligned on "=" */
    function ghost(f) {
      if (f.ghost) return f.ghost;
      var g = document.createElement('div');
      g.className = 'mf-ghost';
      g.innerHTML = f.M.svgHTML;
      g.style.fontSize = holderSize + 'px';
      g._s = L.kMain * GHOST;
      g._x = L.eqX - (f.M.ax - f.M.sx) * g._s;
      g._oy = (f.M.ay - f.M.sy) * g._s;
      g.style.opacity = '0';
      stage.insertBefore(g, stage.firstChild);
      f.ghost = g;
      return g;
    }
    function placeTrail(i, instant) {
      var list = [];
      for (var j = i - 1; j >= 0; j--) if (!frames[j].op && !frames[j].M.error) list.push(j);
      if (frames[i].op && list.length) list.shift();
      var OP = [0.55, 0.33, 0.17];
      frames.forEach(function (f, j) {
        if (f.op || f.M.error) return;
        var slot = list.indexOf(j);
        if (slot < 0 && !f.ghost) return;
        if (!L.nG) { if (f.ghost) f.ghost.style.opacity = '0'; return; }
        var g = ghost(f), y, o;
        var base = L.eqY - L.Up - 16 - L.gD;
        if (slot >= 0 && slot < L.nG) { y = base - slot * L.slotH; o = OP[slot]; }
        else if (slot >= L.nG) { y = base - L.nG * L.slotH; o = 0; }
        else { y = base + 10; o = 0; }
        g.style.transition = (instant || REDUCE) ? 'none' : '';
        g.style.transform = 'translate(' + g._x.toFixed(1) + 'px,' + (y - g._oy).toFixed(1) + 'px) scale(' + g._s.toFixed(4) + ')';
        g.style.opacity = String(o);
      });
    }

    function clearLater() { later.forEach(clearTimeout); later = []; }
    function clearOverlays(instant) {
      overlays.forEach(function (o) {
        if (instant || REDUCE || !o.animate) { o.remove(); return; }
        o.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, fill: 'forwards' }).onfinish = function () { o.remove(); };
      });
      overlays = [];
    }
    function show(el, cls) { el.setAttribute('class', cls); el.style.transform = ''; el.style.opacity = '1'; }

    /* ---------- go to frame i ---------- */
    function go(i, instant) {
      if (!api.ready) return;
      i = Math.max(0, Math.min(frames.length - 1, i));
      clearLater(); clearOverlays(instant);
      var B = frames[i], A = api.i >= 0 && api.i !== i ? frames[api.i] : null;
      var spB = sprites(B);
      frames.forEach(function (f) {
        if (!f.sp) return;
        f.sp.forEach(function (e) { freeze(e); });
        if (f !== A && f !== B) f.sp.forEach(function (e) { e.style.opacity = '0'; });
      });
      var base = function (j) { return B.M.error ? 'mf-err' : 'mf-sp' + (B.opSet && B.opSet[j] ? ' is-op' : ''); };

      if (!A || instant || REDUCE || A.M.error || B.M.error) {
        if (A && A.sp) A.sp.forEach(function (e) { e.style.opacity = '0'; });
        spB.forEach(function (e, j) { show(e, base(j)); });
      } else {
        var pairs = pairsFor(A.i, B.i), mA = {}, mB = {};
        var stR = stage.getBoundingClientRect();
        pairs.forEach(function (p) {
          var a = p[0], b = p[1], ea = A.sp[a], eb = spB[b];
          mA[a] = 1; mB[b] = 1;
          var ga = A.pos[a], gb = B.pos[b];
          // start from where the old glyph really is right now (smooth even if interrupted)
          var from = ga;
          if (ea && ea.style.opacity !== '0') {
            var r = ea.getBoundingClientRect(), s = (ga.w + 2 * PAD) > 0 ? r.width / (ga.w + 2 * PAD) : 1;
            from = { x: r.left - stR.left + PAD * s, y: r.top - stR.top + PAD * s, w: ga.w * s, h: ga.h * s, cx: r.left - stR.left + r.width / 2 };
          }
          if (ea) ea.style.opacity = '0';
          var sx = gb.w > 0.3 ? from.w / gb.w : 1, sy = gb.h > 0.3 ? from.h / gb.h : 1;
          sx = Math.max(0.15, Math.min(6, sx)); sy = Math.max(0.15, Math.min(6, sy));
          var dx = from.x - gb.x, dy = from.y - gb.y;
          var cross = (from.cx - L.eqX) * (gb.cx - L.eqX) < 0 && Math.abs(dx) > 10;
          show(eb, base(b));
          var kf = [], N = cross ? 16 : 1;
          for (var q = 0; q <= N; q++) {
            var u = q / N, lift = cross ? Math.sin(Math.PI * u) * Math.min(44, 14 + Math.abs(dx) * 0.18) : 0;
            kf.push({ transform: tr(dx * (1 - u), dy * (1 - u) - lift, sx + (1 - sx) * u, sy + (1 - sy) * u), offset: u });
          }
          anim(eb, kf, { duration: cross ? 1000 : 850, delay: 60 });
        });

        // what disappears: strike through when the move cancels things, then shrink out
        var gone = [];
        A.M.glyphs.forEach(function (g, a) { if (!mA[a]) gone.push(a); });
        var strikeDelay = 0;
        if (B.after && T.CANCELS[B.after.type] && gone.length) {
          strikeDelay = 480;
          var runs = [], run = null;
          gone.forEach(function (a) {
            var p = A.pos[a];
            if (run && a === run.last + 1 && Math.abs(p.cx - run.x1) < 60) { run.last = a; run.x0 = Math.min(run.x0, p.x); run.x1 = Math.max(run.x1, p.x + p.w); run.y0 = Math.min(run.y0, p.y); run.y1 = Math.max(run.y1, p.y + p.h); }
            else { run = { last: a, x0: p.x, x1: p.x + p.w, y0: p.y, y1: p.y + p.h }; runs.push(run); }
          });
          runs.forEach(function (r, n) {
            var w = r.x1 - r.x0, h = Math.max(r.y1 - r.y0, 6);
            var len = Math.sqrt(w * w + h * h) * 0.92, ang = -Math.atan2(h, w) * 180 / Math.PI;
            var s = document.createElement('i');
            s.className = 'mf-strike';
            s.style.width = len + 'px';
            s.style.left = (r.x0 + w * 0.04) + 'px';
            s.style.top = (r.y0 + h * 0.96) + 'px';
            s.style.transform = 'rotate(' + ang + 'deg)';
            stage.appendChild(s);
            overlays.push(s);
            anim(s, [{ transform: 'rotate(' + ang + 'deg) scaleX(0)' }, { transform: 'rotate(' + ang + 'deg) scaleX(1)' }], { duration: 260, delay: n * 90, easing: OUT });
          });
          later.push(setTimeout(function () {
            overlays = overlays.filter(function (o) {
              if (!o.classList || !o.classList.contains('mf-strike')) return true;
              if (o.animate && !REDUCE) o.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, fill: 'forwards' }).onfinish = function () { o.remove(); };
              else o.remove();
              return false;
            });
          }, strikeDelay + 420));
        }
        gone.forEach(function (a) {
          var e = A.sp[a], p = A.pos[a];
          e.setAttribute('class', 'mf-sp is-out');
          e.style.opacity = '0';
          anim(e, [{ opacity: 1, transform: 'none' }, { opacity: 0, transform: tr(p.w * 0.2, p.h * 0.2, 0.6, 0.6) }], { duration: 380, delay: strikeDelay, easing: 'ease-in' });
        });

        // what is new: op glyphs write in left to right, others rise in amber
        var fresh = [];
        spB.forEach(function (e, b) { if (!mB[b]) fresh.push(b); });
        fresh.sort(function (p, q) { return B.pos[p].x - B.pos[q].x; });
        fresh.forEach(function (b, n) {
          var e = spB[b], isOp = B.opSet && B.opSet[b];
          show(e, isOp ? 'mf-sp is-op' : 'mf-sp is-new');
          if (isOp) anim(e, [{ opacity: 0, clipPath: 'inset(-20% 100% -20% -20%)' }, { opacity: 1, clipPath: 'inset(-20% -20% -20% -20%)' }], { duration: 360, delay: 380 + n * 28, easing: 'ease-out' });
          else {
            anim(e, [{ opacity: 0, transform: tr(0, 6, 0.9, 0.9) }, { opacity: 1, transform: 'none' }], { duration: 460, delay: 520 + strikeDelay, easing: OUT });
            later.push(setTimeout(function () { e.setAttribute('class', 'mf-sp'); }, 1700 + strikeDelay));
          }
        });
      }

      // the final line gets a box drawn round it
      if (i === frames.length - 1 && !B.M.error) {
        var x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
        B.pos.forEach(function (p) { x0 = Math.min(x0, p.x); y0 = Math.min(y0, p.y); x1 = Math.max(x1, p.x + p.w); y1 = Math.max(y1, p.y + p.h); });
        var pd = 8, W = x1 - x0 + pd * 2, H = y1 - y0 + pd * 2;
        var svg = document.createElementNS(NS, 'svg');
        svg.setAttribute('class', 'mf-box');
        svg.setAttribute('width', W + 4); svg.setAttribute('height', H + 4);
        svg.style.left = (x0 - pd - 2) + 'px'; svg.style.top = (y0 - pd - 2) + 'px';
        var rc = document.createElementNS(NS, 'rect');
        rc.setAttribute('x', 2); rc.setAttribute('y', 2); rc.setAttribute('width', W); rc.setAttribute('height', H); rc.setAttribute('rx', 10);
        rc.setAttribute('pathLength', '100'); rc.style.strokeDasharray = '100';
        svg.appendChild(rc);
        stage.appendChild(svg);
        overlays.push(svg);
        if (!instant) anim(rc, [{ strokeDashoffset: 100 }, { strokeDashoffset: 0 }], { duration: 900, delay: 1100 });
      }

      api.i = i;
      placeTrail(i, instant);
      setNote(B.note);
      chrome(i);
      if (i === frames.length - 1) complete();
    }

    function complete() {
      if (completed) return;
      completed = true;
      if (spec.onComplete) spec.onComplete();
    }
    function needsAsk(j) { var f = frames[j]; return f && f.ask && answered[f.si] === undefined; }

    /* ---------- checkpoints: asked under the equation they are about ---------- */
    function showAsk(j) {
      asking = j;
      var a = frames[j].ask;
      panel.hidden = true; askEl.hidden = false;
      var q = askEl.querySelector('.mf-ask-q'), opts = askEl.querySelector('.mf-ask-opts');
      var why = askEl.querySelector('.mf-ask-why'), goBtn = askEl.querySelector('.mf-ask-go');
      q.innerHTML = a.q;
      why.hidden = true; goBtn.hidden = true;
      var order = SM.shuffle(a.options.map(function (o, k) { return k; }));
      opts.innerHTML = order.map(function (k, n) { return '<button type="button" data-k="' + k + '"><b>' + (n + 1) + '</b>&nbsp; ' + a.options[k] + '</button>'; }).join('');
      Array.prototype.forEach.call(opts.children, function (b) {
        b.addEventListener('click', function (e) { e.stopPropagation(); pick(Number(b.dataset.k)); });
      });
      SM.typeset(askEl);
      chrome(api.i);
    }
    function pick(k) {
      if (SM.isPaused && SM.isPaused()) return;
      if (asking < 0) return;
      var j = asking, f = frames[j], a = f.ask;
      if (answered[f.si] !== undefined) return;
      var ok = k === a.answer, opts = askEl.querySelector('.mf-ask-opts'), why = askEl.querySelector('.mf-ask-why');
      answered[f.si] = ok;
      Array.prototype.forEach.call(opts.children, function (x) {
        x.disabled = true;
        if (Number(x.dataset.k) === a.answer) x.classList.add('is-correct');
        if (Number(x.dataset.k) === k && !ok) x.classList.add('is-wrong');
      });
      why.innerHTML = '<b>' + (ok ? 'Right move. ' : 'Not this one. ') + '</b>' + (a.why || '');
      why.hidden = false;
      askEl.querySelector('.mf-ask-go').hidden = false;
      SM.typeset(why);
      if (spec.onAnswer) spec.onAnswer(ok, f.si);
      if (ok && playing) later.push(setTimeout(resume, 1700));
    }
    function resume() {
      if (SM.isPaused && SM.isPaused()) return;
      if (asking < 0) return;
      var j = asking;
      asking = -1;
      askEl.hidden = true; panel.hidden = false;
      go(j);
      if (playing) schedule(j);
    }
    askEl.querySelector('.mf-ask-go').addEventListener('click', function (e) { e.stopPropagation(); resume(); });

    function schedule(j) {
      clearTimeout(loopT);
      var f = frames[j];
      loopT = setTimeout(loop, interval * (f.op ? 1.15 : 1) + (f.after && T.CANCELS[f.after.type] ? 500 : 0));
    }
    function loop() {
      if (!playing) return;
      if (api.i >= frames.length - 1) { playing = false; chrome(api.i); return; }
      var j = api.i + 1;
      if (needsAsk(j)) { showAsk(j); return; }
      go(j); schedule(j);
    }
    function stopPlay() { playing = false; clearTimeout(loopT); chrome(api.i); }
    function reset() {
      clearLater(); clearOverlays(true);
      frames.forEach(function (f) {
        if (f.sp) f.sp.forEach(function (e) { freeze(e); e.style.opacity = '0'; });
        if (f.ghost) { f.ghost.style.transition = 'none'; f.ghost.style.opacity = '0'; }
      });
      api.i = -1;
    }

    api.play = function () {
      if (SM.isPaused && SM.isPaused()) return;
      if (!api.ready || asking >= 0) return;
      playing = true;
      if (api.i < 0 || api.i >= frames.length - 1) { reset(); go(0); schedule(0); } else loop();
      chrome(api.i);
    };
    api.toggle = function () { if (playing) stopPlay(); else api.play(); };
    api.next = function () {
      if (SM.isPaused && SM.isPaused()) return;
      if (asking >= 0) return;
      stopPlay();
      var j = api.i + 1;
      if (j >= frames.length) return;
      if (needsAsk(j)) { showAsk(j); return; }
      go(j);
    };
    api.prev = function () { if (asking >= 0 || (SM.isPaused && SM.isPaused())) return; stopPlay(); if (api.i > 0) go(api.i - 1); };
    api.jump = function (j) {
      if (SM.isPaused && SM.isPaused()) return;
      if (asking >= 0) return;
      stopPlay();
      for (var a = 0; a <= j; a++) if (needsAsk(a)) { if (a - 1 !== api.i) go(Math.max(0, a - 1)); showAsk(a); return; }
      go(j);
    };
    api.replay = function () { if (asking >= 0 || (SM.isPaused && SM.isPaused())) return; stopPlay(); reset(); api.play(); };
    api.pick = function (n) { // keyboard: nth visible option
      if (asking < 0) return false;
      var b = askEl.querySelectorAll('.mf-ask-opts button')[n];
      if (b && !b.disabled) { b.click(); return true; }
      var go2 = askEl.querySelector('.mf-ask-go');
      if (!go2.hidden) { resume(); return true; }
      return false;
    };
    api.isAsking = function () { return asking >= 0; };
    api.isPlaying = function () { return playing; };
    api.pause = stopPlay;

    root.querySelectorAll('[data-mf]').forEach(function (b) {
      b.addEventListener('click', function (e) {
        e.stopPropagation();
        var a = b.getAttribute('data-mf');
        if (a === 'replay') api.replay(); else if (a === 'next') api.next(); else if (a === 'prev') api.prev(); else if (a === 'play') api.toggle();
      });
    });
    dotsEl.addEventListener('click', function (e) {
      var d = e.target.closest('.mf-dot');
      if (!d) return;
      e.stopPropagation();
      api.jump(Number(d.dataset.j));
    });

    function rebuild() {
      if (!api.ready || !stage.clientWidth || Math.abs(stage.clientWidth - builtW) < 2) return;
      var i = api.i;
      clearLater();
      build();
      if (i >= 0) go(i, true);
    }
    var rz = null;
    window.addEventListener('resize', function () { clearTimeout(rz); rz = setTimeout(rebuild, 220); });

    SM.mathReady(function (ok) {
      if (!ok) { noteEl.textContent = 'MathJax did not load. Check the internet connection and reload.'; return; }
      build();
      if (completed) go(frames.length - 1, true);
      else chrome(-1);
    });
    return api;
  }

  /* ---------- the whole derivation on one page, aligned on "=" ---------- */
  function page(steps) {
    var lines = steps.map(function (st) {
      var p = T.split(st.tex), ann = st.move ? T.ann(st.move) : '';
      var a = ann ? ' && \\class{mf-ann}{\\scriptstyle ' + ann + '}' : '';
      return p ? p[0] + ' &= ' + p[1] + a : '& ' + st.tex + a;
    });
    return '\\[\\begin{aligned}' + lines.join(' \\\\[5pt] ') + '\\end{aligned}\\]';
  }

  SM.MathFlow = { mount: mount, page: page, measure: measure };
})();
