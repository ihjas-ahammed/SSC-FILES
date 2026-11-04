/* ==========================================================================
   Progress: cards seen / answered, per topic, per section, overall
   ========================================================================== */
(function () {
  var SM = window.SM;

  SM.cst = function (c) { return SM.S.cards[c.id] || (SM.S.cards[c.id] = {}); };
  SM.isDone = function (c) {
    var s = SM.S.cards[c.id];
    if (SM.definitionMatch() && SM.isDefinition(c)) return !!(s && s.definition && s.definition.complete);
    return !!(s && (SM.QUIZ[c.type] ? s.done : s.seen));
  };
  SM.sheetDone = function (sh) { return sh.cards.every(SM.isDone); };

  SM.markSeen = function (c) {
    if (!c || SM.QUIZ[c.type] || SM.cardLocked(c) || (SM.definitionMatch() && SM.isDefinition(c))) return;
    var s = SM.cst(c);
    if (s.seen) return;
    s.seen = 1; SM.save(); afterChange(c.sheet);
  };
  SM.markDone = function (c, right) {
    var s = SM.cst(c);
    if (s.done) return;
    s.done = 1; s.right = right ? 1 : 0; SM.save(); afterChange(c.sheet);
  };
  function afterChange(sh) {
    if (SM.sheetDone(sh) && SM.topicFinished) SM.topicFinished(sh);
    SM.renderProgress();
  }

  var navChips = [], segs = [];
  SM.initProgress = function () {
    var nav = SM.$('nav'), segBar = SM.$('segBar');
    SM.SECTIONS.forEach(function (sec, i) {
      var chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'nav-chip';
      chip.innerHTML = '<span>' + (i + 1) + ' · ' + SM.esc(sec.short) + '</span><i></i>';
      chip.addEventListener('click', function () { SM.goSection(i); });
      nav.appendChild(chip);
      navChips.push(chip);
      var seg = document.createElement('span');
      seg.className = 'seg';
      seg.style.flex = String(sec.sheets.reduce(function (n, sh) { return n + sh.cards.length; }, 0) || 1);
      seg.innerHTML = '<i></i>';
      segBar.appendChild(seg);
      segs.push(seg);
    });
    SM.setActiveSection(0);
  };
  SM.setActiveSection = function (i) {
    navChips.forEach(function (c, k) { c.classList.toggle('is-active', k === i); });
    segs.forEach(function (s, k) { s.classList.toggle('is-current', k === i); });
    if (navChips[i]) SM.$('nav').scrollTo({ left: navChips[i].offsetLeft - 24, behavior: 'smooth' });
  };

  SM.questionCounts = function () {
    var total = 0, right = 0;
    SM.CARDS.forEach(function (c) {
      var s = SM.S.cards[c.id] || {};
      if (c.type === 'derive') c.d.steps.forEach(function (st, j) { if (st.ask) { total++; if (s.asks && s.asks[j]) right++; } });
      else if (SM.QUIZ[c.type]) { total++; if (s.done && s.right) right++; }
    });
    return { total: total, right: right };
  };

  SM.renderProgress = function () {
    var all = 0, dn = 0, M = SM.S.match || {}, topics = M.topics || {};
    SM.SECTIONS.forEach(function (sec, i) {
      var t = 0, d = 0;
      sec.sheets.forEach(function (sh) {
        var st = sh.cards.filter(SM.isDone).length;
        t += sh.cards.length; d += st;
        var pct = Math.round(st / sh.cards.length * 100);
        sh.el.querySelector('[data-fill]').style.width = pct + '%';
        sh.el.querySelector('[data-pct]').textContent = pct + '%';
        var due = sh.el.querySelector('[data-due]'), res = topics[sh.id], dl = SM.S.deadlines[sh.id];
        due.className = 'cv-due' + (res === 'scored' || (pct === 100 && !res) ? ' is-ok' : res === 'conceded' ? ' is-bad' : '');
        due.textContent = res === 'scored' ? '⚽ on time' : res === 'conceded' ? 'missed ' + dl + '′' : pct === 100 ? '✓ done' : 'due ' + dl + '′';
      });
      all += t; dn += d;
      var p = t ? d / t * 100 : 0;
      segs[i].firstChild.style.width = p + '%';
      navChips[i].lastChild.style.width = p + '%';
    });
    var pct = all ? Math.round(dn / all * 100) : 0;
    SM.$('covPct').textContent = pct + '%';
    SM.$('segBar').setAttribute('aria-valuenow', String(pct));
    SM.$('nCov').style.width = pct + '%';
    var q = SM.questionCounts();
    SM.$('qstat').textContent = 'questions ' + q.right + '/' + q.total + ' right';
    SM.refreshDefinitionLocks();
  };
})();
