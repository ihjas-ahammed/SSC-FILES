/* ==========================================================================
   Match: Focus vs Time
   Clock 0-25 | 5' break | 25-45 | 10' half-time | 45-70 | 5' break | 70-90
   Focus scores: topic finished before its deadline, or 3 right in a row.
   Time scores:  a topic deadline passes unfinished, or every 3rd wrong answer
                 (in total, not in a row). Timeouts count as wrong.
   ========================================================================== */
(function () {
  var SM = window.SM, $ = SM.$, esc = SM.esc, pad2 = SM.pad2;
  var HOME = SM.meta.home, AWAY = SM.meta.opponent;
  var cfg = SM.data.match || {};
  var ENDS, PERIODS, BREAKS, LAST, RATE;
  function normalTiming(value) {
    value = value || {};
    function snap(v, fallback, min, max, step) {
      v = Number(v); if (!Number.isFinite(v)) v = fallback;
      return Math.max(min, Math.min(max, Math.round(v / step) * step));
    }
    return { mode: value.mode === 'custom' ? 'custom' : 'standard',
      halfMinutes: snap(value.halfMinutes, 30, 20, 90, 5), halfTimeMinutes: snap(value.halfTimeMinutes, 10, 1, 30, 1),
      hydrationMinutes: snap(value.hydrationMinutes, 5, 1, 30, 1) };
  }
  // A saved match owns its timing, so reloading never changes its clock rate.
  var timing = normalTiming(SM.S.match ? SM.S.match.timing : SM.S.matchTiming || cfg.timing);
  function schedule() {
    var custom = timing.mode === 'custom';
    var hydration = !custom || timing.halfMinutes >= 45;
    ENDS = custom && !hydration ? [45, 90] : [25, 45, 70, 90];
    var breaks = custom ? (hydration ? [timing.hydrationMinutes, timing.halfTimeMinutes, timing.hydrationMinutes] : [timing.halfTimeMinutes]) : cfg.breaks || [5, 10, 5];
    RATE = custom ? 45 / timing.halfMinutes : 1;
    PERIODS = ENDS.map(function (to, i) { return { from: i ? ENDS[i - 1] : 0, to: to, label: i < ENDS.length / 2 ? '1st half' : '2nd half' }; });
    BREAKS = breaks.map(function (m, i) { return { min: m, label: ENDS[i] === 45 ? 'Half-time' : 'Hydration break' }; });
    LAST = PERIODS.length - 1;
  }
  schedule();

  function fresh() {
    return { status: 'pre', period: 0, pStart: 0, added: PERIODS.map(function () { return 0; }), breakEnd: 0, you: 0, opp: 0,
      streak: 0, wrong: 0, shots: 0, onTarget: 0, best: 0, events: [], topics: {}, pausedAt: 0, scheduleVersion: 2, timing: Object.assign({}, timing) };
  }
  var M = SM.S.match = SM.S.match || fresh();
  // Old long custom matches had two periods. Map their current half and added
  // time to the new hydration schedule without resetting the user's match.
  if (!M.scheduleVersion) {
    if (timing.mode === 'custom' && timing.halfMinutes >= 45) {
      M.period = (M.period || 0) * 2 + (M.status === 'break' || M.status === 'ready' ? 1 : 0);
      var oldAdded = M.added || [0, 0]; M.added = [0, oldAdded[0] || 0, 0, oldAdded[1] || 0];
      if (M.status === 'ft') M.period = LAST;
      (M.events || []).forEach(function (ev) { ev.period = ev.min < 25 ? 0 : ev.min < 45 ? 1 : ev.min < 70 ? 2 : 3; });
    }
    M.scheduleVersion = 2; SM.save();
  }
  SM.isBreak = function () { return M.status === 'break' || M.status === 'ready'; };
  SM.isPaused = function () { return M.status === 'paused'; };
  function newMatch() {
    timing = normalTiming(SM.S.matchTiming || cfg.timing); schedule();
    SM.S.match = M = fresh();
  }
  function setTiming() {
    if (M.status !== 'pre') return;
    timing = normalTiming({ mode: $('customTiming').checked ? 'custom' : 'standard', halfMinutes: $('halfMinutes').value, halfTimeMinutes: $('halfTimeMinutes').value, hydrationMinutes: $('hydrationMinutes').value });
    schedule(); M.timing = Object.assign({}, timing); M.added = PERIODS.map(function () { return 0; });
    SM.S.matchTiming = Object.assign({}, timing);
    SM.save(); renderTiming(); ctrlKey = ''; renderCtrl();
  }
  function renderTiming() {
    var custom = timing.mode === 'custom', locked = M.status !== 'pre';
    $('customTiming').checked = custom;
    $('customTiming').disabled = locked;
    $('customTimingFields').hidden = !custom;
    $('halfMinutes').value = timing.halfMinutes; $('halfTimeMinutes').value = timing.halfTimeMinutes;
    $('halfMinutes').disabled = locked; $('halfTimeMinutes').disabled = locked;
    $('hydrationMinutes').value = timing.hydrationMinutes; $('hydrationMinutes').disabled = locked;
    $('hydrationSettings').hidden = timing.halfMinutes < 45;
    $('hydrationMinutesValue').textContent = timing.hydrationMinutes + ' min';
    $('halfMinutesValue').textContent = timing.halfMinutes + ' min'; $('halfTimeMinutesValue').textContent = timing.halfTimeMinutes + ' min';
    $('halfMinutes').setAttribute('aria-valuetext', timing.halfMinutes + ' real minutes per half');
    $('halfTimeMinutes').setAttribute('aria-valuetext', timing.halfTimeMinutes + ' real minutes of half-time break');
    var water = timing.halfMinutes >= 45 ? ' · ' + timing.hydrationMinutes + '-minute hydration breaks at displayed 25′ and 70′' : ' · hydration breaks begin at 45 real minutes per half';
    $('timingSummary').textContent = custom ? 'Two ' + timing.halfMinutes + '-minute halves · ' + timing.halfTimeMinutes + '-minute half-time break' + water + '. Each half shows 45 match minutes.' : 'Standard: two 45-minute halves. Hydration breaks at 25′ and 70′; half-time at 45′.';
    $('timingLock').hidden = !locked;
  }

  // default deadlines: spread over the match in proportion to topic size
  (function () {
    var total = SM.CARDS.length || 1, acc = 0, end = ENDS[LAST];
    SM.SHEETS.forEach(function (sh) {
      acc += sh.cards.length;
      if (!SM.S.deadlines[sh.id]) SM.S.deadlines[sh.id] = sh.due || Math.max(5, Math.min(end, Math.round(acc / total * end / 5) * 5));
    });
  })();

  function live() { return M.status === 'play' || M.status === 'paused' || M.status === 'break' || M.status === 'ready'; }
  function minuteNow() {
    if (M.status === 'play') return PERIODS[M.period].from + (Date.now() - M.pStart) / 60000 * RATE;
    if (M.status === 'paused') return PERIODS[M.period].from + (M.pausedAt - M.pStart) / 60000 * RATE;
    if (M.status === 'break' || M.status === 'ready') return PERIODS[M.period].to + M.added[M.period];
    if (M.status === 'ft') return ENDS[LAST] + M.added[LAST];
    return 0;
  }
  function clock(min) { var s = Math.max(0, Math.floor(min * 60)); return pad2(Math.floor(s / 60)) + ':' + pad2(s % 60); }
  function evMin(ev) {
    var p = PERIODS[ev.period || 0], m = ev.min;
    if (m > p.to + 0.001) return p.to + '+' + Math.ceil(m - p.to) + '′';
    return Math.min(p.to, Math.floor(m) + 1) + '′';
  }

  /* sound */
  var actx = null;
  function audio() {
    if (!SM.S.sound) return null;
    try { actx = actx || new (window.AudioContext || window.webkitAudioContext)(); if (actx.state === 'suspended') actx.resume(); } catch (e) { return null; }
    return actx;
  }
  function tone(freq, start, dur, type, vol, slide) {
    var a = audio(); if (!a) return;
    var o = a.createOscillator(), g = a.createGain(), t0 = a.currentTime + start;
    o.type = type || 'sine'; o.frequency.setValueAtTime(freq, t0);
    if (slide) o.frequency.linearRampToValueAtTime(slide, t0 + dur);
    g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(vol || 0.15, t0 + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g); g.connect(a.destination); o.start(t0); o.stop(t0 + dur + 0.05);
  }
  function whistle(n) { for (var i = 0; i < (n || 1); i++) tone(2900, i * 0.38, 0.28, 'square', 0.05, 3100); }
  function horn(good) {
    if (good) { tone(523, 0, 0.18, 'triangle', 0.18); tone(659, 0.15, 0.18, 'triangle', 0.18); tone(784, 0.3, 0.35, 'triangle', 0.2); }
    else { tone(392, 0, 0.3, 'sawtooth', 0.08, 300); tone(262, 0.25, 0.45, 'sawtooth', 0.08, 200); }
  }

  var toastT = null;
  SM.toast = function (kind, title, sub) {
    var t = $('toast');
    t.className = 'toast ' + (kind || '');
    t.querySelector('b').textContent = title;
    t.querySelector('span').textContent = sub || '';
    void t.offsetWidth;
    t.classList.add('is-on');
    clearTimeout(toastT);
    toastT = setTimeout(function () { t.classList.remove('is-on'); }, 2800);
  };

  function event(side, reason, detail, minute) {
    M.events.push({ side: side, reason: reason, detail: detail || '', min: minute !== undefined ? minute : minuteNow(), period: M.period });
  }
  function goal(side, reason, detail, minute) {
    if (side === 'you') M.you++; else M.opp++;
    event(side, reason, detail, minute);
    SM.save();
    SM.toast(side === 'you' ? 'goal' : 'conceded', side === 'you' ? 'GOAL · ' + HOME : AWAY + ' scores', reason + (detail ? ' · ' + detail : ''));
    horn(side === 'you');
    render();
  }

  SM.answer = function (ok, label) {
    if (!live() || SM.isPaused() || SM.isBreak()) { render(); return; }
    M.shots++;
    if (ok) {
      M.onTarget++; M.streak++; M.best = Math.max(M.best, M.streak);
      if (M.streak === 3) { M.streak = 0; goal('you', 'Three right in a row', label); }
    } else {
      M.streak = 0; M.wrong++;
      if (M.wrong % 3 === 0) goal('opp', 'Third wrong answer', label);
    }
    SM.save(); render();
  };
  SM.topicFinished = function (sh) {
    if (!live() || SM.isPaused() || SM.isBreak() || M.topics[sh.id]) return;
    if (minuteNow() < SM.S.deadlines[sh.id]) { M.topics[sh.id] = 'scored'; goal('you', 'Topic finished on time', sh.title); }
    else { M.topics[sh.id] = 'late'; SM.save(); }
  };
  function checkDeadlines(mm) {
    SM.SHEETS.forEach(function (sh) {
      if (M.topics[sh.id]) return;
      var d = SM.S.deadlines[sh.id];
      if (mm >= d && !SM.sheetDone(sh)) { M.topics[sh.id] = 'conceded'; goal('opp', 'Deadline missed', sh.title, d); }
    });
  }

  function kickoff() {
    audio();
    if (M.status === 'pre') {
      M.status = 'play'; M.period = 0; M.pStart = Date.now();
      SM.SHEETS.forEach(function (sh) { if (SM.sheetDone(sh)) M.topics[sh.id] = 'pre'; });
      event('info', 'Kick-off', '', 0);
    } else if (M.status === 'ready') {
      M.period++; M.status = 'play'; M.pStart = Date.now();
      event('info', PERIODS[M.period].label + ' resumes', '', PERIODS[M.period].from);
    } else return;
    whistle(1);
    SM.toast('', 'Kick-off', PERIODS[M.period].label + ' · until ' + PERIODS[M.period].to + '′');
    SM.save(); render();
  }
  SM.togglePause = function () {
    if (M.status === 'play') {
      M.pausedAt = Date.now(); M.status = 'paused';
      SM.CARDS.forEach(function (c) { if (c.player && c.player.isPlaying()) c.player.pause(); });
      if (SM.closeDefinition) SM.closeDefinition();
      SM.toast('', 'Match paused', 'Match clock and answer timers are on hold.');
    } else if (M.status === 'paused') {
      M.pStart += Date.now() - M.pausedAt; M.pausedAt = 0; M.status = 'play';
      SM.toast('', 'Match resumed', 'Continue from the same clock time.');
    } else return;
    SM.save(); render();
  };
  function renderBreak() {
    var dialog = $('breakAlert');
    if (!SM.isBreak()) { if (dialog.open) dialog.close(); return; }
    if (!dialog.open) {
      if ($('calculator').open) $('calculator').close();
      SM.CARDS.forEach(function (c) { if (c.player && c.player.isPlaying()) c.player.pause(); });
      dialog.showModal();
    }
    $('breakTitle').textContent = BREAKS[M.period].label + (M.status === 'ready' ? ' · complete' : '');
    $('breakCountdown').textContent = M.status === 'ready' ? '00:00' : clock((M.breakEnd - Date.now()) / 60000);
    $('breakStatus').textContent = M.status === 'ready' ? 'Break complete. Start the next stretch when you feel refreshed.' : 'Stand up, stretch, and look away from the screen.';
    $('breakResume').disabled = M.status !== 'ready';
    $('breakResume').textContent = M.status === 'ready' ? 'I’m refreshed · resume study' : 'Enjoy your break';
    $('breakSkip').hidden = M.status !== 'break';
  }
  function skipBreak() {
    if (!SM.isBreak() || M.period >= LAST) return;
    if (M.status === 'break') event('info', BREAKS[M.period].label + ' skipped', 'Resumed early', minuteNow());
    M.breakEnd = 0; M.status = 'ready';
    kickoff(); SM.closeMC();
  }
  function endPeriod() {
    whistle(M.period === LAST ? 3 : 2);
    var endMin = PERIODS[M.period].to + M.added[M.period];
    if (M.period === LAST) { M.status = 'ft'; event('info', 'Full time', '', endMin); SM.save(); render(); SM.openMC(); return; }
    M.status = 'break';
    M.breakEnd = Date.now() + BREAKS[M.period].min * 60000;
    event('info', BREAKS[M.period].label, BREAKS[M.period].min + ' min', endMin);
    SM.toast('', BREAKS[M.period].label, BREAKS[M.period].min + ' minutes. Stand up, drink water, look away from the screen.');
    SM.save(); render();
  }
  function addTime(n) {
    if (M.status !== 'play' || n <= M.added[M.period]) return;
    M.added[M.period] = Math.min(5, n);
    SM.toast('', '+' + M.added[M.period] + ' added', 'Stoppage time for this stretch');
    SM.save(); render();
  }
  function tick() {
    if (M.status === 'play') {
      var p = PERIODS[M.period], end = p.to + M.added[M.period], mm = minuteNow();
      checkDeadlines(Math.min(mm, end));
      if (mm >= end) endPeriod();
    } else if (M.status === 'break' && Date.now() >= M.breakEnd) {
      M.status = 'ready'; whistle(1);
      SM.toast('', BREAKS[M.period].label + ' complete', 'Resume study when ready.');
      SM.save(); render();
    }
    renderClock();
  }

  /* ---------- header: full before kick-off, notch while live ---------- */
  function clockText() {
    if (M.status === 'pre') return ['Pre-match', 'Kick off'];
    if (M.status === 'paused') return ['Paused', clock(minuteNow())];
    if (M.status === 'play') {
      var p = PERIODS[M.period], mm = minuteNow();
      return [p.label + (M.added[M.period] ? ' · +' + M.added[M.period] : ''), mm < p.to ? clock(mm) : p.to + '+' + clock(mm - p.to)];
    }
    if (M.status === 'break') return [BREAKS[M.period].label, clock((M.breakEnd - Date.now()) / 60000)];
    if (M.status === 'ready') return [BREAKS[M.period].label + ' complete', 'Resume'];
    return ['Full time', M.you + ' – ' + M.opp];
  }
  function renderClock() {
    renderBreak();
    var t = clockText();
    $('sbPhase').textContent = t[0]; $('sbTime').textContent = t[1];
    $('nClock').textContent = M.status === 'paused' ? 'Ⅱ ' + t[1] : M.status === 'play' ? t[1] : t[0] === 'Full time' ? 'FT' : M.status === 'break' ? (BREAKS[M.period].label === 'Hydration break' ? '💧 ' : 'HT ') + t[1] : t[1];
    $('notch').setAttribute('aria-label', t[0] + ' · ' + t[1] + '. Show study controls');
    var pause = $('pauseMatch'); pause.hidden = M.status !== 'play' && M.status !== 'paused';
    pause.textContent = M.status === 'paused' ? '▶' : 'Ⅱ';
    pause.setAttribute('aria-label', M.status === 'paused' ? 'Resume match' : 'Pause match');
    pause.setAttribute('aria-pressed', String(M.status === 'paused'));
    document.body.classList.toggle('match-paused', SM.isPaused());
    if (!$('mc').hidden) renderCtrl();
  }
  function render() {
    $('sbYou').textContent = M.you; $('sbOpp').textContent = M.opp;
    $('nYou').textContent = M.you; $('nOpp').textContent = M.opp;
    document.querySelectorAll('[data-s]').forEach(function (p, k) { p.classList.toggle('on-s', k < M.streak); });
    document.querySelectorAll('[data-w]').forEach(function (p, k) { p.classList.toggle('on-c', k < M.wrong % 3); });
    var wasLive = document.body.classList.contains('is-live');
    document.body.classList.toggle('is-live', live());
    if (wasLive !== live()) SM.setTop();
    renderClock();
    SM.renderProgress();
    if (!$('mc').hidden) renderMC();
  }
  SM.renderMatch = render;

  /* ---------- match centre ---------- */
  var ctrlKey = '';
  function renderCtrl() {
    var el = $('mcCtrl'), now = Date.now();
    var key = M.status + M.period + M.added.join() + JSON.stringify(timing) + (M.status === 'break' ? Math.ceil((M.breakEnd - now) / 1000) : M.status === 'play' ? Math.floor(minuteNow() * 60) : '');
    if (key === ctrlKey) return;
    ctrlKey = key;
    var plan = [];
    PERIODS.forEach(function (p, i) {
      plan.push('<span class="' + (M.status === 'play' && i === M.period ? 'is-now' : '') + '">' + p.from + '–' + p.to + '</span>');
      if (BREAKS[i]) plan.push('<span class="b' + ((M.status === 'break' || M.status === 'ready') && i === M.period ? ' is-now' : '') + '">' + BREAKS[i].min + '′</span>');
    });
    var h = '<div class="mc-plan">' + plan.join('') + '</div>';
    if (M.status === 'pre') {
      h += '<p>Each topic has a deadline in match minutes. Finish it in time or get 3 right in a row: ' + esc(HOME) + ' scores. Miss a deadline, or every 3rd wrong answer (not in a row): ' + esc(AWAY) + ' scores.</p>' +
        '<button type="button" class="btn amber pulse" data-act="kick">Kick off</button>';
    } else if (M.status === 'play') {
      var p = PERIODS[M.period], mm = minuteNow();
      h += '<p>' + p.label + ' · ' + (mm < p.to ? clock(mm) + ' of ' + p.to + '′' : 'stoppage time ' + clock(mm - p.to)) + '. Need more time for this stretch? Ask the fourth official (max +5).</p>' +
        '<div class="board">' + [1, 2, 3, 4, 5].map(function (n) { var on = n <= M.added[M.period]; return '<button type="button" data-add="' + n + '"' + (on ? ' class="is-on" disabled' : '') + '>+' + n + '</button>'; }).join('') + '</div>' +
        '<button type="button" class="btn" data-act="pause">Pause match</button>';
    } else if (M.status === 'paused') {
      h += '<p>Match paused at ' + clock(minuteNow()) + '. The match clock, quiz countdowns and derivations are on hold.</p><button type="button" class="btn amber" data-act="pause">Resume match</button>';
    } else if (M.status === 'break') {
      h += '<p>' + BREAKS[M.period].label + ' · ' + clock((M.breakEnd - now) / 60000) + ' left. Stand up, drink water, and rest your eyes.</p>';
    } else if (M.status === 'ready') {
      h += '<p>' + BREAKS[M.period].label + ' is over.</p><button type="button" class="btn amber pulse" data-act="kick">Resume study</button>';
    } else {
      var res = M.you > M.opp ? HOME + ' wins' : M.you < M.opp ? AWAY + ' wins' : 'Draw';
      h += '<p class="mc-ft">Full time · ' + esc(res) + ' ' + M.you + '–' + M.opp + '</p><button type="button" class="btn amber" data-act="new">New match</button>';
    }
    el.innerHTML = h;
  }
  function renderMC() {
    renderTiming();
    $('mcYou').textContent = M.you; $('mcOpp').textContent = M.opp;
    $('mcStatus').textContent = M.status === 'pre' ? 'Pre-match' : M.status === 'ft' ? 'Full time' : M.status === 'paused' ? 'Paused · ' + clock(minuteNow()) : M.status === 'play' ? PERIODS[M.period].label + ' · ' + Math.floor(minuteNow() + 1) + '′' : M.status === 'break' ? BREAKS[M.period].label : BREAKS[M.period].label + ' complete';
    ctrlKey = ''; renderCtrl();
    var evs = M.events.slice().reverse();
    $('mcEvents').innerHTML = evs.length ? evs.map(function (ev) {
      if (ev.side === 'info') return '<li class="ev info">' + esc(ev.reason) + (ev.detail ? ' · ' + esc(ev.detail) : '') + '</li>';
      var body = '<span>⚽ ' + esc(ev.reason) + '</span><small>' + esc(ev.detail) + '</small>';
      return '<li class="ev ' + ev.side + '"><span class="ev-l">' + (ev.side === 'you' ? body : '') + '</span><span class="ev-min">' + evMin(ev) + '</span><span class="ev-r">' + (ev.side === 'opp' ? body : '') + '</span></li>';
    }).join('') : '<li class="mc-empty">No events yet.</li>';
    var acc = M.shots ? Math.round(M.onTarget / M.shots * 100) : 0;
    var onTime = SM.SHEETS.filter(function (sh) { return M.topics[sh.id] === 'scored'; }).length;
    var stat = function (label, val, max, cls) {
      return '<div class="stat ' + (cls || '') + '"><span>' + label + '</span><b>' + val + '</b><span class="bar"><i style="width:' + (max ? Math.min(100, val / max * 100) : 0) + '%"></i></span></div>';
    };
    $('mcStats').innerHTML = stat('Shots (questions answered)', M.shots, Math.max(M.shots, 1)) +
      stat('On target (right)', M.onTarget, Math.max(M.shots, 1), 'good') +
      stat('Fouls (wrong or timed out)', M.wrong, Math.max(M.shots, 1), 'bad') +
      '<div class="stat"><span>Accuracy</span><b>' + acc + '%</b><span class="bar"><i style="width:' + acc + '%"></i></span></div>' +
      stat('Best streak', M.best, 3, 'good') + stat('Topics on time', onTime, SM.SHEETS.length, 'good');
    var editable = M.status !== 'ft', end = ENDS[LAST];
    $('mcTopics').innerHTML = SM.SHEETS.map(function (sh) {
      var r = M.topics[sh.id], d = SM.S.deadlines[sh.id], pct = Math.round(sh.cards.filter(SM.isDone).length / sh.cards.length * 100);
      var st = r === 'scored' ? '<small class="ok">⚽ Finished on time</small>' : r === 'conceded' ? '<small class="bad">Deadline missed</small>' : r === 'late' ? '<small>Finished late</small>' : r === 'pre' ? '<small class="ok">Done before kick-off</small>' : '<small>' + pct + '% covered</small>';
      var lockd = !!r || !editable;
      return '<div class="topic"><span class="topic-t">' + esc(sh.sec.short) + ' · ' + esc(sh.title) + st + '</span><span class="stepper">' +
        '<button type="button" data-dl="' + sh.id + '" data-d="-5"' + (lockd || d <= 5 ? ' disabled' : '') + ' aria-label="Earlier">−</button><b>' + d + '′</b>' +
        '<button type="button" data-dl="' + sh.id + '" data-d="5"' + (lockd || d >= end ? ' disabled' : '') + ' aria-label="Later">+</button></span></div>';
    }).join('');
    $('mcSound').textContent = 'Sound: ' + (SM.S.sound ? 'on' : 'off');
  }

  SM.openMC = function () { SM.closeHeader(); if (SM.closeDefinition) SM.closeDefinition(); $('mc').hidden = false; renderMC(); };
  SM.closeMC = function () { $('mc').hidden = true; armedBtn = null; };

  var armedBtn = null;
  function armed(btn, label, fn) {
    if (armedBtn === btn) { armedBtn = null; fn(); return; }
    armedBtn = btn;
    var old = btn.textContent;
    btn.textContent = 'Tap again: ' + label;
    setTimeout(function () { if (armedBtn === btn) { armedBtn = null; btn.textContent = old; } }, 2500);
  }

  SM.initMatch = function () {
    $('customTiming').addEventListener('change', setTiming);
    $('halfMinutes').addEventListener('input', setTiming);
    $('halfTimeMinutes').addEventListener('input', setTiming);
    $('hydrationMinutes').addEventListener('input', setTiming);
    $('pauseMatch').addEventListener('click', SM.togglePause);
    $('notchMatch').addEventListener('click', SM.openMC);
    $('breakAlert').addEventListener('cancel', function (e) { e.preventDefault(); });
    $('breakResume').addEventListener('click', function () { if (M.status === 'ready') { kickoff(); SM.closeMC(); } });
    $('breakSkip').addEventListener('click', skipBreak);
    $('sb').addEventListener('click', SM.openMC);
    document.querySelectorAll('[data-home]').forEach(function (e) { e.textContent = HOME; });
    document.querySelectorAll('[data-away]').forEach(function (e) { e.textContent = AWAY; });
    $('crestYou').textContent = HOME.charAt(0).toUpperCase();
    $('crestOpp').textContent = AWAY.charAt(0).toUpperCase();
    $('mc').addEventListener('click', function (e) {
      var t = e.target.closest('button, [data-close]');
      if (!t) return;
      if (t.hasAttribute('data-close')) { SM.closeMC(); return; }
      if (t.dataset.act === 'kick') { kickoff(); renderMC(); }
      if (t.dataset.act === 'pause') { SM.togglePause(); renderMC(); }
      if (t.dataset.act === 'new') { newMatch(); SM.save(); render(); renderMC(); }
      if (t.dataset.add) { addTime(Number(t.dataset.add)); renderMC(); }
      if (t.dataset.dl) {
        var id = t.dataset.dl;
        SM.S.deadlines[id] = Math.max(5, Math.min(ENDS[LAST], SM.S.deadlines[id] + Number(t.dataset.d)));
        SM.save(); renderMC(); SM.renderProgress();
      }
    });
    $('mcReset').addEventListener('click', function () {
      var b = this;
      armed(b, 'reset match', function () { newMatch(); SM.save(); b.textContent = 'Reset match'; render(); renderMC(); });
    });
    $('mcResetAll').addEventListener('click', function () {
      armed(this, 'wipe all progress', function () { try { localStorage.removeItem(SM.KEY); } catch (e) {} location.reload(); });
    });
    $('mcSound').addEventListener('click', function () { SM.S.sound = !SM.S.sound; SM.save(); renderMC(); });
    setInterval(tick, 250);
    render();
    if (M.status === 'play' || M.status === 'break') tick();
    SM.__match = { kickoff: kickoff, addTime: addTime, minuteNow: minuteNow, M: function () { return M; }, schedule: function () { return { ends: ENDS.slice(), breaks: BREAKS.slice(), rate: RATE }; } };
  };
})();
