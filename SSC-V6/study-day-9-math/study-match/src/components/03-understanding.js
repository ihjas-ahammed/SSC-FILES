/* Three recall prompts per card, drawn from the card and its topic's marking guide.
   Kept separate from exam marks: learners reveal a reference, then self-check. */
(function () {
  var SM = window.SM;
  function pair(q, a) { return { q: q, a: a }; }
  function questions(c) {
    var authored = c.checks || (c.d && c.d.checks);
    if (authored && authored.length === 3) return authored;
    var pool = [], sh = c.sheet, d = c.d;
    if (d) {
      pool.push(pair('What equation do you start with, and what are you trying to prove?',
        '\\(' + (d.start || d.steps[0].tex) + '\\) → \\(' + (d.goal || d.steps[d.steps.length - 1].tex) + '\\)'));
      var mid = d.steps[Math.max(1, Math.floor(d.steps.length / 2))];
      pool.push(pair('Explain the step that produces \\(' + mid.tex + '\\).',
        (mid.move ? SM.tex.label(mid.move) + '. ' : '') + (mid.note || d.legend || 'Compare this line with the preceding line in the derivation.')));
      pool.push(pair('Can you reconstruct the argument without looking at the steps?',
        d.steps.map(function (s) { return '\\(' + s.tex + '\\)' + (s.note ? ' — ' + s.note : ''); }).join('<br>')));
    } else if (c.type === 'info' || c.type === 'math') {
      pool.push(pair('Explain “' + c.title + '” from memory.',
        (c.tex ? '\\(' + c.tex + '\\)<br>' : '') + (c.body || c.title)));
    } else if (c.type === 'key') {
      (c.points || []).forEach(function (p, i) {
        var m = p.match(/\\\((.*?)\\\)/);
        pool.push(pair(m ? 'What does \\(' + m[1] + '\\) tell you, and how would you explain it?' : 'Recall key point ' + (i + 1) + ' and explain why it matters.', p));
      });
    } else if (c.type === 'order') {
      pool.push(pair('Which move comes first, and why?', c.items[0]));
      pool.push(pair('What is the complete order of the moves?', c.items.join(' → ')));
    } else if (c.type === 'number' || c.type === 'fill' || c.type === 'mcq') {
      pool.push(pair('Solve this again without looking at your first answer: ' + c.q,
        (c.type === 'mcq' ? c.options[c.answer] : String(c.answer).split('|')[0] + (c.unit ? ' ' + c.unit : '')) + '. ' + (c.why || '')));
    }
    var related = sh.cards.filter(function (x) { return x.type === 'eval'; });
    // Rotate related prompts so successive cards revisit different parts of the topic.
    var offset = sh.cards.indexOf(c) % Math.max(1, related.length);
    related.slice(offset).concat(related.slice(0, offset)).forEach(function (x) {
      var prompt = x.q.replace(/^Did your answer\s+/i, '').replace(/\?$/, '');
      if (prompt === x.q.replace(/\?$/, '')) prompt = 'explain the full-mark answer to: ' + x.q;
      prompt = prompt.charAt(0).toUpperCase() + prompt.slice(1) + '.';
      var best = x.options.reduce(function (a, b) { return b.m > a.m ? b : a; });
      pool.push(pair(prompt, best.t + '. ' + (x.why || '')));
    });
    sh.cards.forEach(function (x) {
      if (x.type === 'derive') x.d.steps.forEach(function (s) {
        if (s.ask) pool.push(pair(s.ask.q, s.ask.options[s.ask.answer] + '. ' + (s.ask.why || '')));
      });
      if (x.type === 'info' && x.body) pool.push(pair('How would you explain “' + x.title + '” to another student?', x.body));
    });
    if (pool.length < 3) {
      pool.push(pair('What is the central result of this card?', c.body || c.why || c.q || c.title));
      pool.push(pair('Which equation or definition supports your answer?', c.tex ? '\\(' + c.tex + '\\)' : c.body || c.why || c.title));
      pool.push(pair('Can you explain the reasoning without looking?', c.body || c.why || c.title));
    }
    return pool.filter(function (p, i, a) { return a.findIndex(function (x) { return x.q === p.q; }) === i; }).slice(0, 3);
  }
  SM.understandingHTML = function (c) {
    if (SM.meta.inlineChecks === false) return '';
    return '<details class="understanding tex2jax_ignore"><summary>Check your understanding <span data-review-count>0 / 3</span></summary>' +
      '<div class="understanding-body scroll-y"><p class="legend">Answer aloud or on paper, then reveal the reference and check your understanding.</p>' +
      questions(c).map(function (p, i) { return '<div class="recall-item"><p><b>' + (i + 1) + '.</b> ' + SM.mathLabel(p.q) + '</p>' +
        '<details class="recall-answer"><summary>Reveal reference answer</summary><div>' + SM.mathLabel(p.a) + '</div></details>' +
        '<label class="recall-check"><input type="checkbox" data-recall="' + i + '"> I can explain this</label></div>'; }).join('') + '</div></details>';
  };
  SM.initUnderstanding = function () {
    SM.CARDS.forEach(function (c) {
      var root = c.el.querySelector('.understanding');
      if (!root) return;
      var state = SM.cst(c);
      function count() { root.querySelector('[data-review-count]').textContent = root.querySelectorAll('input:checked').length + ' / 3'; }
      root.querySelectorAll('[data-recall]').forEach(function (input) {
        input.checked = !!(state.recall && state.recall[input.dataset.recall]);
        input.addEventListener('change', function () { state.recall = state.recall || {}; state.recall[input.dataset.recall] = input.checked; SM.save(); count(); });
      });
      root.addEventListener('click', function (e) { e.stopPropagation(); });
      root.addEventListener('toggle', function () { if (root.open) { root.classList.remove('tex2jax_ignore'); SM.typeset(root); } });
      count();
    });
  };
})();
