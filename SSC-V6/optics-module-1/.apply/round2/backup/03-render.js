/* ==========================================================================
   Render: data.json -> sections (piles) -> sheets (topics) -> cards
   A "derivation" card in the data expands into four cards:
   route (goal first), player (MathFlow), one page, rebuild the route.
   ========================================================================== */
(function () {
  var SM = window.SM, esc = SM.esc;

  var ICONS = {
    atom: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2"><ellipse cx="24" cy="24" rx="20" ry="8"/><ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(60 24 24)"/><ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(-60 24 24)"/><circle cx="24" cy="24" r="4.5" fill="#F6B72B" stroke="none"/></svg>',
    curve: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6v36h36"/><path d="M10 12c4 22 8 24 12 24s10-8 20-10"/><circle cx="22" cy="36" r="3.5" fill="#F6B72B" stroke="none"/></svg>',
    motion: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 40c8-26 28-26 36 0" stroke-dasharray="3 5"/><circle cx="24" cy="20.5" r="4.5" fill="#F6B72B" stroke="none"/><path d="M4 42h40"/></svg>',
    graph: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6v36h36"/><path d="M8 34L40 12"/><path d="M30 18.9V40" stroke-dasharray="3 4"/><circle cx="30" cy="18.9" r="3.5" fill="#F6B72B" stroke="none"/></svg>',
    wave: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M4 24c5-14 10-14 15 0s10 14 15 0 10-14 12-6"/><circle cx="19" cy="24" r="3.5" fill="#F6B72B" stroke="none"/></svg>',
    lens: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M24 4c8 10 8 30 0 40c-8-10-8-30 0-40z"/><path d="M2 16l22 8 22 8" stroke-dasharray="3 4"/><circle cx="24" cy="24" r="3.5" fill="#F6B72B" stroke="none"/></svg>',
    flask: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"><path d="M18 4h12M20 4v14L8 40a3 3 0 0 0 3 4h26a3 3 0 0 0 3-4L28 18V4"/><circle cx="22" cy="34" r="3.5" fill="#F6B72B" stroke="none"/></svg>',
    cell: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4"><ellipse cx="24" cy="24" rx="20" ry="15"/><circle cx="21" cy="22" r="6"/><circle cx="21" cy="22" r="2.5" fill="#F6B72B" stroke="none"/></svg>',
    sigma: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M36 8H12l14 16-14 16h24"/><circle cx="36" cy="40" r="3.5" fill="#F6B72B" stroke="none"/></svg>',
    book: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"><path d="M6 8h14a4 4 0 0 1 4 4v28a3 3 0 0 0-3-3H6zM42 8H28a4 4 0 0 0-4 4v28a3 3 0 0 1 3-3h15z"/><circle cx="35" cy="18" r="3.5" fill="#F6B72B" stroke="none"/></svg>',
    bolt: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"><path d="M27 4L10 27h12l-2 17 18-24H26z"/><circle cx="38" cy="38" r="3.5" fill="#F6B72B" stroke="none"/></svg>'
  };
  SM.ICONS = ICONS;
  var EYE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>';
  SM.QUIZ = { mcq: 1, fill: 1, number: 1, order: 1, derive: 1, derivation: 1, eval: 1 };

  /* ---------- index + expand ---------- */
  SM.SECTIONS = SM.data.sections || [];
  SM.SHEETS = []; SM.CARDS = [];
  SM.SECTIONS.forEach(function (sec, si) {
    sec.short = sec.short || sec.title;
    (sec.sheets || []).forEach(function (sh, hi) {
      sh.sec = sec; sh.si = si; sh.hi = hi;
      sh.id = sh.id || SM.slug(sec.short + '-' + sh.title);
      var out = [];
      (sh.cards || []).forEach(function (c) {
        if (c.type === 'derivation') {
          var d = c, ph = d.phases || [];
          if (!ph.length) { var seen = {}; d.steps.forEach(function (s) { if (s.phase && !seen[s.phase]) { seen[s.phase] = 1; ph.push({ name: s.phase }); } }); }
          c.type = 'derive'; c.d = d; c.phases = ph;
          out.push(c);
        } else out.push(c);
      });
      sh.cards = out;
      // Separate IDs for new introductions preserve the original cards' progress.
      var legacyIndex = 0;
      sh.cards.forEach(function (c) { c.id = sh.id + '-' + (c.uid ? 'extra-' + c.uid : c.type === 'intuition' ? 'intro-' + c.term : legacyIndex++); c.sheet = sh; SM.CARDS.push(c); });
      sh.outline = sh.outline || sh.cards.filter(function (c) { return c.type !== 'page' && c.type !== 'order'; }).map(function (c) {
        return c.type === 'route' ? 'Goal and route' : c.type === 'derive' ? (c.title || 'Step-by-step derivation') : c.type === 'question' ? 'The question' : c.type === 'eval' ? 'Mark your answer' : c.type === 'score' ? 'Your score' : c.type === 'key' ? 'Key points' : (SM.QUIZ[c.type] ? 'Quiz' : c.title);
      }).filter(function (t, k, a) { return t && a.indexOf(t) === k; }).slice(0, 7);
      SM.SHEETS.push(sh);
    });
  });

  /* ---------- html ---------- */
  function coverHTML(sh) {
    return '<button class="cover" type="button" aria-expanded="false">' +
      '<span class="cv-head"><span class="cv-num">' + SM.pad2(sh.hi + 1) + '</span><span class="cv-meta"><b>' + esc(sh.sec.short) + '</b><span>Topic ' + (sh.hi + 1) + ' of ' + sh.sec.sheets.length + '</span></span></span>' +
      '<span class="cv-panel"><span class="cv-icon">' + (ICONS[sh.icon] || ICONS.book) + '</span><span class="cv-pt"><b>' + esc(sh.title) + '</b><span class="cv-sub">' + sh.cards.length + ' cards</span></span></span>' +
      '<span class="cv-list">' + sh.outline.map(function (o) { return '<span>' + esc(o) + '</span>'; }).join('') + '</span>' +
      '<span class="cv-cov"><span class="cv-cov-l">Topic coverage <span class="cv-due" data-due></span></span>' +
      '<span class="cv-cov-row"><span class="cv-track"><i data-fill></i></span><b class="cv-pct" data-pct>0%</b></span></span></button>';
  }
  function qHead(c) {
    var t = c.time || 60;
    return '<span class="card-index">' + esc(c.label || 'Quiz') + '</span>' +
      (SM.meta.autoRevealQuestions ? '' : '<button class="omr-reveal" type="button">' + EYE + '<span>Tap to reveal \u00b7 ' + t + 's</span></button>') +
      '<div class="omr-progress" hidden><span class="omr-count"><span>Time</span><b data-count>' + Math.floor(t / 60) + ':' + SM.pad2(t % 60) + '</b></span><div class="omr-bar"><span class="omr-fill" data-tfill></span></div></div>';
  }
  function chips(list) { return (list || []).map(function (e) { return '<span class="chip">' + SM.mathLabel(e) + '</span>'; }).join(''); }

  function cardHTML(c) {
    var a = ' data-card="' + c.id + '"', T = SM.tex;
    switch (c.type) {
      case 'intuition':
        return '<article class="card intuition-card"' + a + '><span class="card-index">In plain words</span>' +
          '<div class="intuition-content scroll-y"><h2 class="card-title">' + esc(c.title) + '</h2>' +
          '<p class="intuition-meaning">' + esc(c.meaning) + '</p>' +
          '<h3>Picture it</h3><p class="card-body">' + esc(c.picture) + '</p>' +
          '<div class="intuition-example"><h3>For example</h3><p class="card-body">' + esc(c.example) + '</p></div>' +
          '<h3>Connect it to the definition</h3><p class="card-body">' + esc(c.bridge) + '</p></div></article>';
      case 'info':
        return '<article class="card"' + a + '><span class="card-index">' + esc(c.label || 'Concept') + '</span>' +
          (c.art ? '<div class="art">' + c.art + '</div>' : c.tex ? '<div class="art"><div class="math">\\[' + c.tex + '\\]</div></div>' : '') +
          '<div class="scroll-y"><h2 class="card-title">' + c.title + '</h2><p class="card-body" style="margin-top:6px">' + (c.body || '') + '</p>' +
          (c.examples && c.examples.length ? '<div class="examples" style="margin-top:9px">' + chips(c.examples) + '</div>' : '') + '</div></article>';
      case 'math':
        return '<article class="card"' + a + '><span class="card-index">' + esc(c.label || 'Example') + '</span><div class="art"><div class="math">\\[' + c.tex + '\\]</div></div>' +
          '<div><h2 class="card-title">' + c.title + '</h2><p class="card-body" style="margin-top:6px">' + (c.body || '') + '</p></div></article>';
      case 'scale':
        var max = c.max || (c.zones && c.zones.length ? c.zones[c.zones.length - 1].upTo : 1), min = c.min || 0, prev = min;
        var segs = (c.zones || []).map(function (z) { var w = (z.upTo - prev) / (max - min) * 100; prev = z.upTo; return { w: w, name: z.name }; });
        return '<article class="card"' + a + '><span class="card-index">' + esc(c.label || 'Try it') + '</span><div class="art"><div class="meter-wrap"><div class="spectrum">' +
          '<div class="spec-bar">' + segs.map(function (s) { return '<span style="flex:' + s.w.toFixed(2) + '"></span>'; }).join('') + '</div><i class="pin" data-pin></i>' +
          '<div class="spec-names">' + segs.map(function (s) { return '<span style="flex:' + s.w.toFixed(2) + '">' + esc(s.name) + '</span>'; }).join('') + '</div></div>' +
          '<div class="meter-read" data-read>Tap one below</div></div></div><div><h2 class="card-title">' + c.title + '</h2><p class="card-body" style="margin-top:6px">' + (c.body || '') + '</p>' +
          '<div class="examples" style="margin-top:9px">' + (c.chips || []).map(function (ch) { return '<button type="button" class="chip" data-chip data-v="' + ch.value + '">' + ch.label + '</button>'; }).join('') + '</div></div></article>';
      case 'fall':
        return '<article class="card"' + a + '><span class="card-index">' + esc(c.label || 'Try it') + '</span><div class="art"><div class="drop-wrap"><div class="drop-track"><span class="drop-ball" data-ball></span></div><div class="meter-read" data-read>Pick one below</div></div></div>' +
          '<div><h2 class="card-title">' + c.title + '</h2><p class="card-body" style="margin-top:6px">' + (c.body || '') + '</p>' +
          '<div class="examples" style="margin-top:9px">' + (c.chips || []).map(function (ch) { return '<button type="button" class="chip" data-chip data-v="' + ch.value + '">' + ch.label + '</button>'; }).join('') + '</div></div></article>';
      case 'mcq':
        var order = SM.shuffle(c.options.map(function (o, k) { return k; }));
        var prompt = c.practice === 'remember-word' ? c.q.replace('____', '<span class="word-blank" aria-label="missing word">____</span>') : c.q;
        return '<article class="card omr"' + a + ' data-time="' + (c.time || 60) + '">' + qHead(c) +
          '<div class="omr-content" inert>' + (c.practice === 'remember-word' ? '<p class="legend">Choose the missing word.</p>' : '') + '<h2 class="card-title">' + prompt + '</h2><ul class="omr-options">' +
          order.map(function (k, n) { return '<li><button class="omr-option" type="button" data-k="' + k + '"><span class="bubble"></span><span>' + 'ABCDEF'[n] + '. ' + c.options[k] + '</span></button></li>'; }).join('') +
          '</ul><p class="omr-feedback" hidden></p></div></article>';
      case 'fill':
      case 'number':
        return '<article class="card omr"' + a + ' data-time="' + (c.time || 60) + '">' + qHead(c) +
          '<div class="omr-content" inert><h2 class="card-title">' + c.q + '</h2><div class="omr-input-row">' +
          '<input class="omr-input" aria-label="Your answer" type="text" autocomplete="off" autocapitalize="none" spellcheck="false" ' + (c.type === 'number' ? 'placeholder="number or = to calculate" data-numerical' : 'placeholder="type here"') + '>' +
          (c.unit ? '<span class="omr-unit">' + c.unit + '</span>' : '') +
          '<button class="btn" type="button" data-check>Check</button></div>' + (c.type === 'number' ? '<button type="button" class="chip" data-calculator>Calculator =</button>' : '') + '<p class="omr-feedback" hidden></p></div></article>';
      case 'question':
        return '<article class="card qcard' + (c.textAnswer ? ' has-text-answer' : '') + '"' + a + '><span class="card-index">' + esc(c.label || 'Question') + '</span>' +
          (c.art ? '<div class="art">' + c.art + '</div>' : '') +
          '<div class="scroll-y"><h2 class="card-title">' + c.title + '</h2><p class="q-text">' + c.q + '</p></div>' +
          (c.textAnswer ? '<div class="written-answer"><div class="answer-label"><label for="answer-' + c.id + '">Your answer</label><span data-draft-status id="draft-' + c.id + '" role="status">Saves automatically on this device.</span></div>' +
            '<textarea class="answer-input" id="answer-' + c.id + '" data-written-answer rows="6" placeholder="Write your answer in your own words…" aria-describedby="draft-' + c.id + '"></textarea></div>' : '') +
          '<p class="q-hint">' + (c.hint || (c.textAnswer ? 'Type your answer here. Then swipe to mark yourself.' : 'Write your answer on paper first. Then swipe to mark yourself.')) + '</p></article>';
      case 'eval':
        var eo = SM.shuffle(c.options.map(function (o, k) { return k; }));
        return '<article class="card omr eval"' + a + '><span class="card-index">' + esc(c.label || 'Mark your answer') + '</span>' +
          '<div class="eval-content"><h2 class="card-title">' + c.q + '</h2><ul class="omr-options">' +
          eo.map(function (k, n) { return '<li><button class="omr-option" type="button" data-k="' + k + '"><span class="bubble"></span><span>' + 'ABCDEF'[n] + '. ' + c.options[k].t + '</span><em class="omr-m"></em></button></li>'; }).join('') +
          '</ul><p class="omr-feedback" hidden></p></div></article>';
      case 'score':
        return '<article class="card score"' + a + '><span class="card-index">' + esc(c.label || 'Your score') + '</span><h2 class="card-title">' + c.title + '</h2>' +
          '<div class="score-big"><b data-got>0</b><span data-of>/ 0</span></div><div class="score-bar"><i data-sbar></i></div>' +
          '<p class="card-body" data-smsg>Mark your answer on the cards before this one.</p><p class="legend">Green: 70% or more. Yellow: 40 to 69%. Red: below 40%.</p></article>';
      case 'key':
        return '<article class="card"' + a + '><span class="card-index">' + esc(c.label || 'Key points') + '</span><h2 class="card-title">' + c.title + '</h2>' +
          '<ul class="key-list scroll-y">' + (c.points || []).map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ul></article>';
      case 'route':
        var st = c.d.steps;
        return '<article class="card"' + a + '><span class="card-index">Goal first</span><h2 class="card-title">' + (c.title || 'Where we are going') + '</h2>' +
          '<div class="scroll-y" style="display:flex;flex-direction:column;gap:9px">' +
          '<div class="route-eq"><small>Start</small><div class="math">\\(' + (c.d.start || st[0].tex) + '\\)</div></div>' +
          '<div class="route-eq goal"><small>Goal</small><div class="math">\\(' + (c.d.goal || st[st.length - 1].tex) + '\\)</div></div>' +
          '<ol class="route-list">' + c.phases.map(function (p) { return '<li><span><b>' + esc(p.name) + '</b>' + (p.why ? ' \u2014 ' + p.why : '') + '</span></li>'; }).join('') + '</ol>' +
          (c.d.legend ? '<p class="legend">' + c.d.legend + '</p>' : '') + '</div></article>';
      case 'derive':
        var dst = c.d.steps || [], dph = c.phases || c.d.phases || [], setupSVG = c.d.setup || c.d.art || '';
        return '<article class="card mf-card mf-flip-card"' + a + '><div class="mf-card-inner">' +
          '<div class="mf-face mf-front">' +
          '<div class="mf-top"><span class="card-index">' + esc(c.label || 'Derivation') + '</span><button type="button" class="chip mf-flip-btn" data-mf="flip-open">Derive &#9654;</button></div>' +
          '<h2 class="card-title">' + (c.title || 'Step-by-step derivation') + '</h2>' +
          (setupSVG ? '<div class="art mf-front-art">' + setupSVG + '</div>' : '') +
          '<div class="scroll-y mf-front-route">' +
          '<div class="route-eq"><small>Start</small><div class="math">\\(' + (c.d.start || dst[0].tex) + '\\)</div></div>' +
          '<div class="route-eq goal"><small>Goal</small><div class="math">\\(' + (c.d.goal || dst[dst.length - 1].tex) + '\\)</div></div>' +
          (dph.length ? '<ol class="route-list">' + dph.map(function (p) { return '<li><span><b>' + esc(p.name) + '</b>' + (p.why ? ' \u2014 ' + p.why : '') + '</span></li>'; }).join('') + '</ol>' : '') +
          (c.d.legend ? '<p class="legend">' + c.d.legend + '</p>' : '') +
          '</div></div>' +
          '<div class="mf-face mf-back" inert>' +
          '<div class="mf-top"><span class="card-index">' + esc(c.label || 'Derivation') + '</span>' +
          '<div class="mf-top-actions"><span class="mf-count"></span><button type="button" class="chip" data-mf="flip-back">Concept</button></div></div>' +
          '<h2 class="card-title mf-back-title">' + (c.title || 'Step-by-step derivation') + '</h2>' +
          '<div class="mf-phases"></div>' +
          '<div class="mf-board' + (setupSVG ? ' has-setup' : '') + '">' +
          (setupSVG ? '<div class="mf-setup art">' + setupSVG + '</div>' : '') +
          '<div class="mf-stage"></div></div>' +
          '<div class="mf-panel"><p class="mf-note">Press play. It stops at each decision so you can call the next move.</p><div class="mf-dots"></div>' +
          '<div class="mf-ctrl"><button type="button" class="chip" data-mf="prev" aria-label="Previous step">&#9664;</button>' +
          '<button type="button" class="chip mf-play" data-mf="play" aria-label="Play or pause">&#9654;</button>' +
          '<button type="button" class="chip" data-mf="next" aria-label="Next step">&#9654;&#9654;</button>' +
          '<button type="button" class="chip" data-mf="replay" aria-label="Replay from start">&#8634;</button>' +
          '<button type="button" class="chip mf-practise" data-mf="practise">Practise again</button></div></div>' +
          '<div class="mf-ask" hidden><span class="mf-ask-tag">Your move</span><p class="mf-ask-q"></p><div class="mf-ask-opts"></div>' +
          '<p class="mf-ask-why" hidden></p><button type="button" class="btn amber mf-ask-go" hidden>Continue &#9654;</button></div></div></div></article>';
      case 'page':
        return '<article class="card"' + a + '><span class="card-index">One page</span><h2 class="card-title">' + c.title + '</h2>' +
          '<p class="card-body">Every line, aligned on the equals sign. The amber note is the move that produced it.</p>' +
          '<div class="art scroll-y" style="align-items:flex-start"><div class="math page-math">' + SM.MathFlow.page(c.d.steps) + '</div></div></article>';
      case 'order':
        var items = SM.shuffle(c.items.map(function (t, k) { return k; }));
        return '<article class="card order"' + a + '><span class="card-index">Recall</span><h2 class="card-title">' + c.title + '</h2><p class="card-body">Tap the moves in the order they happen.</p>' +
          '<div class="order-list">' + items.map(function (k) { return '<button type="button" class="order-item" data-k="' + k + '"><span class="n"></span><span>' + c.items[k] + '</span></button>'; }).join('') + '</div>' +
          '<p class="omr-feedback" hidden></p></article>';
    }
    return '<article class="card"' + a + '><span class="card-index">Unknown card</span><p class="card-body">Card type "' + esc(c.type) + '" is not supported.</p></article>';
  }

  SM.render = function () {
    var shelf = SM.$('shelf'), html = '';
    SM.SECTIONS.forEach(function (sec, si) {
      html += '<div class="group is-stacked" data-si="' + si + '">';
      sec.sheets.forEach(function (sh, hi) {
        html += '<section class="sheet" data-sheet="' + sh.id + '" style="--n:' + sh.cards.length + ';z-index:' + (sec.sheets.length - hi) + '">' + coverHTML(sh) +
          '<div class="pages">' + sh.cards.map(function (c) { return cardHTML(c).replace(/<\/article>$/, SM.understandingHTML(c) + '</article>'); }).join('') + '</div></section>';
      });
      html += '</div>';
    });
    shelf.innerHTML = html;
    SM.groups = Array.prototype.slice.call(shelf.querySelectorAll('.group'));
    SM.sheetEls = Array.prototype.slice.call(shelf.querySelectorAll('.sheet'));
    SM.SHEETS.forEach(function (sh) { sh.el = shelf.querySelector('[data-sheet="' + sh.id + '"]'); });
    SM.CARDS.forEach(function (c) { c.el = shelf.querySelector('[data-card="' + c.id + '"]'); c.el._c = c; });
    shelf.querySelectorAll('.card-index, .chip').forEach(function (tag) { tag.innerHTML = SM.mathLabel(tag.innerHTML); });
  };

  /* ---------- widgets ---------- */
  SM.widgets = {
    scale: function (c) {
      var card = c.el, pin = card.querySelector('[data-pin]'), read = card.querySelector('[data-read]');
      var bs = card.querySelectorAll('[data-chip]');
      var max = c.max || c.zones[c.zones.length - 1].upTo, min = c.min || 0;
      bs.forEach(function (b, n) {
        b.addEventListener('click', function (e) {
          e.stopPropagation();
          bs.forEach(function (x) { x.classList.remove('is-on'); });
          b.classList.add('is-on');
          var v = parseFloat(b.dataset.v), zone = '';
          for (var z = 0; z < c.zones.length; z++) if (v < c.zones[z].upTo || z === c.zones.length - 1) { zone = c.zones[z].name; break; }
          pin.style.left = Math.max(0, Math.min(100, (v - min) / (max - min) * 100)) + '%';
          read.innerHTML = (c.readout || '{label} \u2192 {zone}').replace('{label}', c.chips[n].label).replace('{value}', v).replace('{zone}', zone);
          SM.typeset(read);
        });
      });
      if (bs[0]) bs[0].click();
    },
    fall: function (c) {
      var card = c.el, ball = card.querySelector('[data-ball]'), read = card.querySelector('[data-read]');
      var bs = card.querySelectorAll('[data-chip]'), h = c.height || 20;
      bs.forEach(function (b, n) {
        b.addEventListener('click', function (e) {
          e.stopPropagation();
          bs.forEach(function (x) { x.classList.remove('is-on'); });
          b.classList.add('is-on');
          var g = parseFloat(b.dataset.v), t = Math.sqrt(2 * h / g);
          ball.style.transition = 'none'; ball.style.top = '0px'; void ball.offsetWidth;
          ball.style.transition = 'top ' + t.toFixed(2) + 's cubic-bezier(0.11, 0, 0.5, 0)';
          ball.style.top = 'calc(100% - 20px)';
          read.innerHTML = (c.readout || '{label} \u00b7 t = {t} s').replace('{label}', c.chips[n].label).replace('{value}', g).replace('{t}', t.toFixed(2));
          SM.typeset(read);
        });
      });
    }
  };
})();
