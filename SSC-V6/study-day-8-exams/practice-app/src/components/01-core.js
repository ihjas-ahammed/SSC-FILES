/* ==========================================================================
   Core: namespace, course data, storage, helpers, TeX + move library
   ========================================================================== */
(function () {
  var SM = window.SM = {};
  SM.$ = function (id) { return document.getElementById(id); };
  SM.esc = function (s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); };
  // Protect mathematical comparisons before HTML parsing, while retaining authored
  // markup outside TeX. Otherwise a<b can be mistaken for an HTML opening tag.
  SM.mathHTML = function (s) {
    return String(s == null ? '' : s).replace(/\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/g, SM.esc);
  };
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
  SM.meta = Object.assign({ title: 'Study Match', home: 'Focus', opponent: 'Time' }, SM.data.meta || {});
  SM.KEY = 'studyMatch.v4.' + SM.slug(SM.meta.title);
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
