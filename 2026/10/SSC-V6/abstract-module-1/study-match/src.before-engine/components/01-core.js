/* ==========================================================================
   Core: namespace, course data, storage, helpers, TeX + move library
   ========================================================================== */
(function () {
  var SM = window.SM = {};
  SM.$ = function (id) { return document.getElementById(id); };
  SM.esc = function (s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); };
  SM.pad2 = function (n) { return String(n).padStart(2, '0'); };
  SM.shuffle = function (a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; };
  SM.slug = function (s) { return String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'x'; };
  // Small labels accept delimited TeX and common bare tokens such as z^2 or E_0.
  SM.mathLabel = function (s) {
    return String(s == null ? '' : s).split(/(\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]|\$[^$]+\$|<[^>]*>)/g).map(function (part) {
      if (/^(?:\\\(|\\\[|<)/.test(part)) return part;
      if (part.charAt(0) === '$') return '\\(' + part.slice(1, -1) + '\\)';
      return part.replace(/(?:\\[A-Za-z]+(?:\{[^{}]*\})*|[A-Za-z0-9]+(?:[_^](?:\{[^{}]*\}|[A-Za-z0-9]+))+)(?:[=+*/-][A-Za-z0-9]+)*/g, function (tex) { return '\\(' + tex + '\\)'; });
    }).join('');
  };
  SM.typeset = function (el) {
    if (window.MathJax && MathJax.typesetPromise) return MathJax.typesetPromise([el]).catch(function () {});
    return Promise.resolve();
  };
  SM.mathReady = function (cb) {
    var tries = 0;
    (function poll() {
      var MJ = window.MathJax;
      if (MJ && MJ.tex2svg && MJ.startup && MJ.startup.promise) { MJ.startup.promise.then(function () { cb(true); }); return; }
      if (++tries > 150) { cb(false); return; }
      setTimeout(poll, 100);
    })();
  };

  /* ---------- data ---------- */
  SM.data = JSON.parse(SM.$('course-data').textContent);
  /* topic filter from the start page: study-match.html?sheets=id1,id2 keeps only those topics */
  try {
    var wantedSheets = new URLSearchParams(location.search).get('sheets');
    if (wantedSheets) {
      var keepSheet = {};
      wantedSheets.split(',').forEach(function (k) { if (k) keepSheet[k] = 1; });
      SM.data.sections = (SM.data.sections || []).map(function (sec) {
        return Object.assign({}, sec, { sheets: (sec.sheets || []).filter(function (sh) { return keepSheet[sh.id]; }) });
      }).filter(function (sec) { return sec.sheets.length; });
    }
  } catch (e) { /* no filter if the URL cannot be read */ }
  /* study-plan hand-off: study-match.html?focus=25&break=5&units=1,2&stages=0,1&subject=OPT&start=10:00&end=13:00
     focus and break set the halves and the half-time break; only the listed units are kept;
     stage 0 (Revision) sheets run without sequence locks, stage 1 (Read) and 2 (Deep Dive) stay locked.
     Deep Dive (stage 2) also adds the PYQ sheets whose units list that unit. */
  SM.handoff = null;
  SM.freeSheets = {};
  try {
    var qp = new URLSearchParams(location.search);
    if (qp.get('focus') || qp.get('units')) {
      var unitList = (qp.get('units') || '').split(',').filter(Boolean).map(Number);
      var stageList = (qp.get('stages') || '').split(',').map(Number);
      var stageOf = {};
      unitList.forEach(function (u, i) { stageOf[u] = stageList[i] || 0; });
      SM.handoff = { focus: Number(qp.get('focus')) || null, brk: Number(qp.get('break')) || null,
        start: qp.get('start') || '', end: qp.get('end') || '', session: qp.get('session') || '' };
      SM.data.sections = (SM.data.sections || []).map(function (sec) {
        return Object.assign({}, sec, { sheets: (sec.sheets || []).filter(function (sh) {
          var m = /Unit (\d+)\b/.exec(sh.source || '');
          var us = sh.units && sh.units.length ? sh.units.map(Number) : (m ? [Number(m[1])] : []);
          // PYQ sheets carry year and month and a units list; they join a session only through a Deep Dive unit
          if (sh.year !== undefined && unitList.length) {
            var pyqUnits = (sh.units || []).filter(function (x) { return stageOf[x] === 2; });
            return pyqUnits.length > 0;
          }
          var hit = us.filter(function (x) { return stageOf[x] !== undefined; });
          if (unitList.length && !hit.length) return false;
          if (hit.length && hit.every(function (x) { return stageOf[x] === 0; })) SM.freeSheets[sh.id] = true;
          return true;
        }).map(function (sh) {
          // Revision sheets skip the "In plain words" cards
          if (!SM.freeSheets[sh.id]) return sh;
          return Object.assign({}, sh, { cards: (sh.cards || []).filter(function (c) { return c.type !== 'intuition'; }) });
        }) });
      }).filter(function (sec) { return sec.sheets.length; });
    }
  } catch (e) { /* no hand-off if the URL cannot be read */ }
  /* several matches for one session: match k of n gets the k-th part of the content (split by card count,
     each sheet stays whole) and keeps its own saved scoreboard. Every match plays the full time. */
  SM.matchCount = 1;
  SM.matchIndex = 1;
  try {
    var qmMatch = new URLSearchParams(location.search);
    var wantN = Math.max(1, parseInt(qmMatch.get('matches'), 10) || 1);
    var wantK = Math.max(1, parseInt(qmMatch.get('match'), 10) || 1);
    var flatSheets = [];
    (SM.data.sections || []).forEach(function (sec) {
      (sec.sheets || []).forEach(function (sh) { flatSheets.push({ id: sh.id, w: Math.max(1, (sh.cards || []).length) }); });
    });
    var nMatches = Math.min(wantN, flatSheets.length || 1);
    if (nMatches > 1) {
      var totalW = flatSheets.reduce(function (t, x) { return t + x.w; }, 0), runW = 0, mine = {};
      flatSheets.forEach(function (x) {
        var mid = runW + x.w / 2;
        runW += x.w;
        var group = Math.min(nMatches, Math.floor(mid / totalW * nMatches) + 1);
        if (group === Math.min(wantK, nMatches)) mine[x.id] = 1;
      });
      SM.data.sections = SM.data.sections.map(function (sec) {
        return Object.assign({}, sec, { sheets: (sec.sheets || []).filter(function (sh) { return mine[sh.id]; }) });
      }).filter(function (sec) { return sec.sheets.length; });
    }
    SM.matchCount = nMatches;
    SM.matchIndex = Math.min(wantK, nMatches);
  } catch (e) { /* one match if the URL cannot be read */ }
  SM.meta = Object.assign({ title: 'Study Match', home: 'Focus', opponent: 'Time' }, SM.data.meta || {});
  SM.KEY = 'studyMatch.v4.' + SM.slug(SM.meta.title) + (SM.matchCount > 1 ? '.match' + SM.matchIndex : '');
  if (SM.matchCount > 1) document.title = 'Match ' + SM.matchIndex + ' of ' + SM.matchCount + ' · ' + SM.meta.title;
  SM.save = function () { try { localStorage.setItem(SM.KEY, JSON.stringify(SM.S)); return true; } catch (e) { return false; } };
  var S;
  try { S = JSON.parse(localStorage.getItem(SM.KEY) || 'null'); } catch (e) { S = null; }
  S = S || {};
  S.cards = S.cards || {};
  S.deadlines = S.deadlines || {};
  if (S.sound === undefined) S.sound = true;
  SM.S = S;

  /* ---------- TeX utilities ----------
     scan() walks the top level of a TeX string, skipping commands and tracking
     depth through {} () [] and \left \right. */
  var T = SM.tex = {};
  function scan(s, cb) {
    var d = 0, i = 0, n = s.length;
    while (i < n) {
      var c = s[i];
      if (c === '\\') {
        var m = /^\\([A-Za-z]+|.)/.exec(s.slice(i));
        if (!m) { i++; continue; }
        i += m[0].length;
        if (m[1] === 'left' || m[1] === 'right') {
          while (i < n && s[i] === ' ') i++;
          var dm = /^(\\[A-Za-z]+|\\.|.)/.exec(s.slice(i));
          if (dm) i += dm[0].length;
          d += m[1] === 'left' ? 1 : -1;
        }
        continue;
      }
      if ('{(['.indexOf(c) >= 0) d++;
      else if ('})]'.indexOf(c) >= 0) d--;
      else cb(c, i, d);
      i++;
    }
  }
  T.split = function (s) {
    var at = -1;
    scan(s, function (c, i, d) { if (at < 0 && d === 0 && c === '=') at = i; });
    return at < 0 ? null : [s.slice(0, at).trim(), s.slice(at + 1).trim()];
  };
  T.hasTopSum = function (s) {
    var f = false;
    scan(s, function (c, i, d) { if (d === 0 && (c === '+' || c === '-') && s.slice(0, i).trim()) f = true; });
    return f;
  };
  T.isSingle = function (s) { return /^(?:\d+(?:\.\d+)?|[A-Za-z]|\\[A-Za-z]+)(?:_(?:[A-Za-z0-9]|\{[^{}]*\}))?$/.test(s.trim()); };
  T.isCall = function (s) { return /^(?:[A-Za-z]|\\[A-Za-z]+)(?:_(?:[A-Za-z0-9]|\{[^{}]*\}))?\([^()]*\)$/.test(s.trim()); };
  T.wrapSum = function (s) { return (T.hasTopSum(s) || /^\s*-/.test(s)) ? '\\left(' + s + '\\right)' : s; };
  T.wrapAll = function (s) { return (T.isSingle(s) || T.isCall(s)) ? s : '\\left(' + s + '\\right)'; };

  /* ---------- the move library ----------
     A data step says which move produced it. Moves in BOTH are applied to both
     sides on screen (inline, same line) before the result appears. */
  T.BOTH = { add: 1, subtract: 1, multiply: 1, divide: 1, power: 1, root: 1, reciprocal: 1, negate: 1,
    differentiate: 1, integrate: 1, ln: 1, exp: 1, apply: 1 };
  T.CANCELS = { add: 1, subtract: 1, multiply: 1, divide: 1, negate: 1, reciprocal: 1 };
  T.MOVES = ['add', 'subtract', 'multiply', 'divide', 'power', 'root', 'reciprocal', 'negate', 'differentiate', 'integrate',
    'ln', 'exp', 'apply', 'substitute', 'expand', 'factor', 'simplify', 'cancel', 'combine', 'rearrange', 'swap', 'evaluate', 'define', 'identity'];
  T.LABEL = {
    add: 'Add {b} to both sides', subtract: 'Subtract {b} from both sides', multiply: 'Multiply both sides by {b}',
    divide: 'Divide both sides by {b}', power: 'Raise both sides to the power {b}', root: 'Take the root of both sides',
    reciprocal: 'Flip both sides', negate: 'Multiply both sides by \\(-1\\)',
    differentiate: 'Differentiate both sides with respect to {w}', integrate: 'Integrate both sides with respect to {w}',
    ln: 'Take \\(\\ln\\) of both sides', exp: 'Exponentiate both sides', apply: 'Apply {fn} to both sides',
    substitute: 'Substitute {b}', expand: 'Expand', factor: 'Factor', simplify: 'Simplify', cancel: 'Cancel common factors',
    combine: 'Combine like terms', rearrange: 'Rearrange', swap: 'Swap the two sides', evaluate: 'Evaluate at {b}',
    define: 'Define {b}', identity: 'Use {b}'
  };
  T.ANN = {
    add: '+\\,{b}', subtract: '-\\,{b}', multiply: '\\times\\,{b}', divide: '\\div\\,{b}', power: '(\\;)^{{b}}',
    root: '\\sqrt{\\;}', reciprocal: '1/(\\;)', negate: '\\times(-1)', differentiate: '\\tfrac{d}{d{w}}',
    integrate: '\\textstyle\\int d{w}', ln: '\\ln', exp: 'e^{(\\;)}', apply: '{fn}(\\;)',
    substitute: '\\text{sub } {b}', expand: '\\text{expand}', factor: '\\text{factor}', simplify: '\\text{simplify}',
    cancel: '\\text{cancel}', combine: '\\text{combine}', rearrange: '\\text{rearrange}', swap: '\\text{swap sides}',
    evaluate: '\\text{at } {b}', define: '\\text{define } {b}', identity: '\\text{use } {b}'
  };
  function fill(tpl, mv, math) {
    var b = mv.by || '', w = mv.wrt || 'x', fn = mv.fn || 'f';
    var m = function (x) { return math ? x : '\\(' + x + '\\)'; };
    return tpl.replace('{b}', m(b)).replace('{w}', m(w)).replace('{fn}', m(fn));
  }
  T.label = function (mv) { return mv.label || fill(T.LABEL[mv.type] || 'Next', mv, false); };
  T.ann = function (mv) { return fill(T.ANN[mv.type] || '', mv, true); };
  T.opLine = function (prev, mv) {
    if (!mv || !T.BOTH[mv.type]) return null;
    var p = T.split(prev || '');
    if (!p) return null;
    var b = mv.by || '', w = mv.wrt || 'x';
    var f = {
      add: function (x) { return x + ' + ' + T.wrapSum(b); },
      subtract: function (x) { return x + ' - ' + T.wrapSum(b); },
      multiply: function (x) { return T.wrapSum(b) + ' \\cdot ' + T.wrapSum(x); },
      divide: function (x) { return '\\frac{' + x + '}{' + b + '}'; },
      power: function (x) { return (T.isSingle(x) ? x : '\\left(' + x + '\\right)') + '^{' + b + '}'; },
      root: function (x) { return (b && b !== '2') ? '\\sqrt[' + b + ']{' + x + '}' : '\\sqrt{' + x + '}'; },
      reciprocal: function (x) { return '\\frac{1}{' + x + '}'; },
      negate: function (x) { return '-' + T.wrapSum(x); },
      differentiate: function (x) { return '\\frac{d}{d' + w + '}' + T.wrapAll(x); },
      integrate: function (x) { return '\\int ' + T.wrapSum(x) + '\\,d' + w; },
      ln: function (x) { return '\\ln ' + T.wrapAll(x); },
      exp: function (x) { return 'e^{' + x + '}'; },
      apply: function (x) { return (mv.fn || 'f') + '\\left(' + x + '\\right)'; }
    }[mv.type];
    return f(p[0]) + ' = ' + f(p[1]);
  };
})();
