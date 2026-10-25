/* Short, trusted definition recall. No keyword grading or network lookup. */
(function () {
  var SM = window.SM, MIN_WORDS = 8;
  SM.definitionMatch = function () {
    var status = (SM.S.match || {}).status;
    return !!SM.meta.definitionChecks && !!status && status !== 'pre' && status !== 'ft';
  };
  SM.isDefinition = function (c) {
    return !!SM.meta.definitionChecks && c.type === 'info' &&
      ((c.defines && c.defines.length) || /^What (?:is|are)\b/i.test(c.title || ''));
  };
  SM.cardLocked = function (c) { return !!(c && c.el && c.el.classList.contains('is-sequence-locked')); };
  function state(c) { var s = SM.cst(c); return s.definition || (s.definition = {}); }
  function editable(c) {
    var s = state(c);
    return SM.isDefinition(c) && !SM.cardLocked(c) && !SM.isPaused() && !SM.isBreak() &&
      (!s.complete || s.method === 'existing' || s.reviewing);
  }
  function words(text) { return (text.match(/\S+/g) || []).length; }
  function clearReference(c) {
    var s = state(c);
    s.revealed = false;
    c.el.querySelector('.def-reveal').hidden = true;
    c.el.querySelector('.verify-text').textContent = '';
  }
  function showReference(c) {
    var s = state(c);
    s.revealed = true;
    // The reference always belongs to this card, never the preceding one.
    var text = c.el.querySelector('.verify-text');
    text.innerHTML = c.body || '';
    c.el.querySelector('.def-reveal').hidden = false;
    c.el.querySelector('.def-status').textContent = 'Compare your answer with the correct statement.';
    SM.typeset(text);
  }
  function unlockCard(c, method) {
    if (!editable(c)) return;
    var s = state(c);
    if (method === 'confirmed' && !s.revealed) return;
    if (method === 'skipped') showReference(c);
    s.complete = true; s.method = method; s.reviewing = false;
    SM.cst(c).seen = 1;
    SM.save(); SM.renderProgress();
    if (SM.sheetDone(c.sheet)) SM.topicFinished(c.sheet);
  }
  function checkDefinition(c) {
    if (!editable(c)) return;
    var s = state(c), count = words(s.draft || '');
    var status = c.el.querySelector('.def-status');
    if (count < MIN_WORDS) {
      clearReference(c);
      status.textContent = 'Not yet. Write at least ' + MIN_WORDS + ' words (' + count + ' so far).';
    } else {
      showReference(c);
      status.textContent = 'Compare your answer with the correct statement.';
    }
    SM.save();
  }
  function skipCard(c) { unlockCard(c, 'skipped'); }
  function retryDefinition(c) {
    if (!editable(c)) return;
    var s = state(c); s.draft = '';
    c.el.querySelector('.def-answer').value = '';
    clearReference(c);
    c.el.querySelector('.def-status').textContent = 'Write a short definition in your own words.';
    SM.save();
    c.el.querySelector('.def-answer').focus({ preventScroll: true });
  }
  function flipCard(c, back) {
    if (SM.cardLocked(c) && back !== false) return;
    if (SM.closeDefinition) SM.closeDefinition();
    var flipped = back === undefined ? !c.el.classList.contains('is-flipped') : !!back;
    c.el.classList.toggle('is-flipped', flipped);
    var front = c.el.querySelector('.definition-front'), rear = c.el.querySelector('.definition-back');
    front.inert = flipped; rear.inert = !flipped;
    front.setAttribute('aria-hidden', String(flipped)); rear.setAttribute('aria-hidden', String(!flipped));
    if (SM.Canvas && SM.Canvas.redraw) SM.Canvas.redraw(c.el);
    if (c.el.contains(document.activeElement)) document.activeElement.blur();
  }
  SM.flipDefinition = flipCard;
  SM.definitionCheck = { MIN_WORDS: MIN_WORDS, unlockCard: unlockCard, checkDefinition: checkDefinition,
    showReference: showReference, clearReference: clearReference, skipCard: skipCard, retryDefinition: retryDefinition };

  SM.refreshDefinitionLocks = function () {
    if (!SM.definitionChecksReady) return;
    var match = SM.definitionMatch();
    SM.SHEETS.forEach(function (sh) {
      var open = true, boundary = false;
      sh.cards.forEach(function (c) {
        var locked = match && !open;
        c.el.classList.toggle('is-sequence-locked', locked);
        c.el.classList.toggle('is-locked', locked);
        c.el.classList.toggle('is-lock-boundary', locked && !boundary);
        if (locked) boundary = true;
        c.el.toggleAttribute('inert', locked);
        c.el.setAttribute('aria-disabled', String(locked));
        if (locked && c.player && c.player.isPlaying()) c.player.pause();
        if (match && !SM.isDone(c)) open = false;
        if (!SM.isDefinition(c)) return;
        if (locked && c.el.classList.contains('is-flipped')) flipCard(c, false);
        var s = state(c), panel = c.el.querySelector('.definition-check');
        var finished = !!s.complete && s.method !== 'existing' && !s.reviewing;
        panel.querySelector('.def-actions').hidden = finished;
        panel.querySelector('.def-answer').readOnly = finished;
        panel.querySelector('.def-reveal-actions').hidden = finished;
        panel.querySelector('[data-def="again"]').hidden = !finished;
        panel.querySelectorAll('button, textarea').forEach(function (el) {
          el.disabled = locked || SM.isPaused() || SM.isBreak();
        });
        if (finished) panel.querySelector('.def-status').textContent = s.method === 'skipped' ?
          'Skipped with “I know this”. Next card unlocked.' : 'Definition reviewed. Next card unlocked.';
      });
      // Locked cards stay in the row, retaining their full size and position.
      sh.el.style.setProperty('--n', sh.cards.length);
    });
  };

  SM.initDefinitionChecks = function () {
    if (!SM.meta.definitionChecks) return;
    var migrate = !SM.S.definitionChecksVersion;
    SM.CARDS.forEach(function (c) {
      if (!SM.isDefinition(c)) return;
      var s = state(c);
      // Retain progress earned before this feature was introduced.
      if (migrate && SM.cst(c).seen) { s.complete = true; s.method = 'existing'; }
      c.el.classList.add('definition-card');
      var inner = document.createElement('div'), front = document.createElement('div'), back = document.createElement('div');
      inner.className = 'definition-inner card-inner';
      front.className = 'definition-face definition-front face front';
      back.className = 'definition-face definition-back face back';
      back.inert = true; back.setAttribute('aria-hidden', 'true');
      while (c.el.firstChild) front.appendChild(c.el.firstChild);
      var turn = document.createElement('button');
      turn.type = 'button'; turn.className = 'chip def-flip'; turn.dataset.def = 'flip';
      turn.textContent = 'Recall · flip card'; front.appendChild(turn);
      back.innerHTML = '<div class="def-back-head"><span class="card-index">Your definition</span>' +
        '<button type="button" class="chip" data-def="front">Read · flip back</button></div>' +
        '<h2 class="card-title">' + SM.esc(c.title) + '</h2>' +
        ((c.art && c.art.length) ? '<div class="art def-art" data-canvas="art" role="img" aria-label="' + SM.esc(c.title) + '"></div>' : '');
      var panel = document.createElement('div');
      panel.className = 'definition-check scroll-y';
      panel.innerHTML = '<label class="def-label" for="def-' + c.id + '">Define it in your own words</label>' +
        '<textarea class="def-answer" id="def-' + c.id + '" rows="3" placeholder="Write at least 8 words…" aria-describedby="def-status-' + c.id + '"></textarea>' +
        '<p class="must-include" hidden></p>' +
        '<div class="def-actions"><button type="button" class="btn" data-def="skip">I know this</button><button type="button" class="btn amber" data-def="check">Check</button></div>' +
        '<p class="def-status legend" id="def-status-' + c.id + '" role="status">Write a short definition in your own words.</p>' +
        '<div class="def-reveal" hidden><p class="verify-label">Correct statement</p><div class="verify-text card-body"></div>' +
        '<div class="def-reveal-actions"><button type="button" class="btn amber def-confirm" data-def="confirm">I’m correct</button><button type="button" class="btn def-retry" data-def="retry">Retry</button></div></div>' +
        '<button type="button" class="chip def-again" data-def="again" hidden>Practise again</button>';
      back.appendChild(panel); inner.appendChild(front); inner.appendChild(back); c.el.appendChild(inner);
      var input = panel.querySelector('.def-answer');
      input.value = s.draft || '';
      if (s.revealed || s.complete) showReference(c);
      input.addEventListener('input', function () {
        if (!editable(c)) return;
        s.draft = input.value; clearReference(c);
        panel.querySelector('.def-status').textContent = words(input.value) + ' words · saves on this device.';
        SM.save();
      });
      c.el.addEventListener('click', function (e) {
        var b = e.target.closest('[data-def]');
        if (!b) {
          if (!e.target.closest('a, button, input, textarea, select, label, summary, [contenteditable="true"]') &&
              !String(window.getSelection())) flipCard(c);
          return;
        }
        e.stopPropagation();
        if (b.dataset.def === 'flip') flipCard(c, true);
        if (b.dataset.def === 'front') flipCard(c, false);
        if (b.dataset.def === 'again' && !SM.cardLocked(c) && !SM.isPaused() && !SM.isBreak()) {
          s.reviewing = true; SM.refreshDefinitionLocks(); retryDefinition(c);
        }
        if (b.dataset.def === 'check') checkDefinition(c);
        if (b.dataset.def === 'skip') skipCard(c);
        if (b.dataset.def === 'retry') retryDefinition(c);
        if (b.dataset.def === 'confirm') unlockCard(c, 'confirmed');
      });
    });
    SM.S.definitionChecksVersion = 1; SM.save();
    if (SM.Canvas && SM.Canvas.mountAll) SM.Canvas.mountAll();
    SM.definitionChecksReady = true; SM.refreshDefinitionLocks();
  };
})();
