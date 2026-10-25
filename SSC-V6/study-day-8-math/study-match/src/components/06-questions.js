/* ==========================================================================
   Questions: reveal + timer (pauses when off-screen), answer, restore, keys
   ========================================================================== */
(function () {
  var SM = window.SM, active = [];

  function feedback(card, html) {
    var fb = card.querySelector('.omr-feedback');
    fb.innerHTML = html; fb.hidden = false;
    SM.typeset(fb);
  }
  function lock(card) { card.querySelectorAll('.omr-option, .omr-input, [data-check]').forEach(function (el) { el.disabled = true; }); }
  function stopTimer(card) { active = active.filter(function (x) { return x !== card; }); card.classList.remove('is-low'); }
  function correctText(c) { return c.type === 'mcq' ? c.options[c.answer] : String(c.answer).split('|')[0] + (c.unit ? ' ' + c.unit : ''); }

  function reveal(card, restoring) {
    if (card.classList.contains('is-revealed')) return;
    card.classList.add('is-revealed');
    card.querySelector('.omr-reveal').hidden = true;
    card.querySelector('.omr-content').removeAttribute('inert');
    if (restoring) return;
    card.querySelector('.omr-progress').hidden = false;
    card._left = card._total = Number(card.dataset.time) * 1000;
    active.push(card);
    var inp = card.querySelector('.omr-input');
    if (inp) setTimeout(function () { inp.focus({ preventScroll: true }); }, 350);
  }
  function result(c, ok, picked) {
    var card = c.el;
    stopTimer(card); lock(card);
    var pr = card.querySelector('.omr-progress'); if (pr) pr.hidden = true;
    if (picked !== undefined) SM.cst(c).pick = picked;
    SM.markDone(c, ok);
    SM.answer(ok, c.sheet.title);
  }
  function paintMcq(c, k, ok, timedOut) {
    c.el.querySelectorAll('.omr-option').forEach(function (o) {
      var kk = Number(o.dataset.k);
      if (kk === c.answer) o.classList.add('is-correct');
      if (kk === k) o.classList.add('is-picked');
      if (kk === k && !ok) o.classList.add('is-wrong');
    });
    feedback(c.el, (timedOut ? '<b>Time’s up.</b> Answer: ' + correctText(c) + '. ' : ok ? '<b>Correct.</b> ' : '<b>Not quite.</b> Answer: ' + correctText(c) + '. ') + (c.why || ''));
  }
  function checkText(c, given) {
    if (c.type === 'number') {
      var x = parseFloat(String(given).replace(',', '.')), want = parseFloat(c.answer);
      return !isNaN(x) && Math.abs(x - want) <= (c.tolerance || 0) + 1e-9 * Math.max(1, Math.abs(want));
    }
    var norm = function (s) { return String(s).toLowerCase().trim().replace(/\s+/g, ' ').replace(/[.!?]+$/, ''); };
    return String(c.answer).split('|').map(norm).indexOf(norm(given)) !== -1;
  }

  SM.initQuestions = function () {
    SM.CARDS.forEach(function (c) {
      var card = c.el;
      if (c.type === 'mcq' || c.type === 'fill' || c.type === 'number') {
        card.querySelector('.omr-reveal').addEventListener('click', function (e) { e.stopPropagation(); reveal(card); });
        card.addEventListener('click', function () { if (!card.classList.contains('is-revealed')) reveal(card); });
      }
      if (c.type === 'mcq') {
        card.querySelectorAll('.omr-option').forEach(function (btn) {
          btn.addEventListener('click', function (e) {
            e.stopPropagation();
            if (SM.cst(c).done) return;
            var k = Number(btn.dataset.k), ok = k === c.answer;
            paintMcq(c, k, ok, false);
            result(c, ok, k);
          });
        });
      }
      if (c.type === 'fill' || c.type === 'number') {
        var input = card.querySelector('.omr-input');
        var check = function () {
          if (SM.cst(c).done) return;
          var given = input.value.trim();
          if (!given) { input.focus(); return; }
          var ok = checkText(c, given);
          input.classList.add(ok ? 'is-correct' : 'is-wrong');
          feedback(card, (ok ? '<b>Correct.</b> ' : '<b>Not quite.</b> Answer: ' + correctText(c) + '. ') + (c.why || ''));
          result(c, ok, given);
        };
        card.querySelector('[data-check]').addEventListener('click', function (e) { e.stopPropagation(); check(); });
        input.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); check(); } });
        input.addEventListener('click', function (e) { e.stopPropagation(); });
        input.addEventListener('input', function () { input.classList.remove('is-correct', 'is-wrong'); });
      }
      if (SM.widgets[c.type]) SM.widgets[c.type](c);
      if (c.type === 'order') initOrder(c);
      if (c.type === 'derive') initDerive(c);
    });
    restore();
    var lastT = performance.now();
    setInterval(function () {
      var now = performance.now(), dt = now - lastT;
      lastT = now;
      active.slice().forEach(function (card) {
        var c = card._c;
        if (card._visible && !document.hidden && SM.$('mc').hidden) card._left -= dt;
        var left = Math.max(0, card._left), s = Math.ceil(left / 1000);
        card.querySelector('[data-count]').textContent = Math.floor(s / 60) + ':' + SM.pad2(s % 60) + (card._visible ? '' : ' · paused');
        card.querySelector('[data-tfill]').style.width = (left / card._total * 100) + '%';
        card.classList.toggle('is-low', s <= 10);
        if (left <= 0) {
          if (c.type === 'mcq') paintMcq(c, undefined, false, true);
          else { card.querySelector('.omr-input').classList.add('is-wrong'); feedback(card, '<b>Time’s up.</b> Answer: ' + correctText(c) + '. ' + (c.why || '')); }
          result(c, false);
        }
      });
    }, 200);
    document.addEventListener('visibilitychange', function () { lastT = performance.now(); });
  };

  function initOrder(c) {
    var card = c.el, next = 0, mistakes = 0, fb = card.querySelector('.omr-feedback');
    card.querySelectorAll('.order-item').forEach(function (b) {
      b.addEventListener('click', function (e) {
        e.stopPropagation();
        if (SM.cst(c).done || b.classList.contains('is-placed')) return;
        if (Number(b.dataset.k) === next) {
          b.classList.add('is-placed');
          b.querySelector('.n').textContent = ++next;
          if (next === c.items.length) {
            fb.innerHTML = mistakes ? '<b>Rebuilt, with ' + mistakes + ' slip' + (mistakes > 1 ? 's' : '') + '.</b> Counts as a miss, but the chain is in your head now.' : '<b>Perfect chain.</b> You can see the whole route.';
            fb.hidden = false;
            SM.markDone(c, mistakes === 0);
            SM.answer(mistakes === 0, c.sheet.title);
          }
        } else {
          mistakes++;
          b.classList.remove('shake'); void b.offsetWidth; b.classList.add('shake', 'is-wrong');
          setTimeout(function () { b.classList.remove('is-wrong'); }, 500);
        }
      });
    });
  }

  function initDerive(c) {
    var s = SM.S.cards[c.id] || {};
    c.player = SM.MathFlow.mount(c.el, {
      steps: c.d.steps,
      answered: Object.assign({}, s.asks || {}),
      completed: !!s.done,
      onAnswer: function (ok, si) {
        var st = SM.cst(c);
        st.asks = st.asks || {};
        st.asks[si] = ok ? 1 : 0;
        SM.save();
        SM.answer(ok, c.sheet.title + ' checkpoint');
        SM.renderProgress();
      },
      onComplete: function () { SM.markDone(c, true); }
    });
    if ('IntersectionObserver' in window) {
      var started = false;
      new IntersectionObserver(function (en) {
        en.forEach(function (x) {
          var vis = x.isIntersecting && x.intersectionRatio >= 0.7 && c.sheet.el.classList.contains('is-open');
          if (vis && !started && !SM.cst(c).done) { started = true; setTimeout(function () { c.player.play(); }, 450); }
          if (!x.isIntersecting && c.player.isPlaying()) c.player.pause();
        });
      }, { root: SM.$('shelf'), threshold: [0, 0.7] }).observe(c.el);
    }
  }

  function restore() {
    SM.CARDS.forEach(function (c) {
      var s = SM.S.cards[c.id];
      if (!s || !s.done) return;
      var card = c.el;
      if (c.type === 'mcq') { reveal(card, true); lock(card); paintMcq(c, s.pick, !!s.right, s.pick === undefined); }
      else if (c.type === 'fill' || c.type === 'number') {
        reveal(card, true); lock(card);
        var inp = card.querySelector('.omr-input');
        inp.value = s.pick || '';
        inp.classList.add(s.right ? 'is-correct' : 'is-wrong');
        feedback(card, (s.right ? '<b>Correct.</b> ' : '<b>Missed.</b> Answer: ' + correctText(c) + '. ') + (c.why || ''));
      } else if (c.type === 'order') {
        var list = card.querySelector('.order-list');
        Array.prototype.slice.call(list.children).sort(function (a, b) { return a.dataset.k - b.dataset.k; }).forEach(function (b) {
          b.classList.add('is-placed'); b.querySelector('.n').textContent = Number(b.dataset.k) + 1; list.appendChild(b);
        });
      }
    });
  }

  /* desktop keys on a question card: Enter/Space reveal, 1-6 pick */
  SM.keyQuestion = function (c, k, num, e) {
    if (c.type !== 'mcq' && c.type !== 'fill' && c.type !== 'number') return false;
    var card = c.el;
    if (!card.classList.contains('is-revealed')) {
      if (k === 'Enter' || k === ' ') { e.preventDefault(); reveal(card); return true; }
      return false;
    }
    if (c.type === 'mcq' && num >= 0) {
      var b = card.querySelectorAll('.omr-option')[num];
      if (b && !b.disabled) { b.click(); return true; }
    }
    if (c.type !== 'mcq' && k === 'Enter') { var inp = card.querySelector('.omr-input'); if (inp && !inp.disabled) inp.focus(); return true; }
    return false;
  };
})();
