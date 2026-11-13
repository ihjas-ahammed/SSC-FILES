/* GATE DA V3: adaptive planner. The plan is recomputed from today, the exam date and
   the minutes available on each day, every time something changes. Nothing is owed:
   missed work just moves forward and, if time runs short, the lowest-value units drop. */
(function () {
  'use strict';
  const D = window.DATA, RAW = new URLSearchParams(location.search).get('raw') || D.raw;
  const KEY = 'gate_v3';
  const C = {}; D.courses.forEach((c) => (C[c.id] = c));
  const SEQ = ['LA', 'PS', 'CO', 'DB', 'PDSA', 'ML', 'AI'];
  const Q = {}; D.questions.forEach((q) => (Q[q.id] = q));
  const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const TOPIC_PAPERS = ['DA2024', 'DA2025'];           // DA2026 stays unseen for Mock 1
  const MOCKS = [['DA2026', 'Mock 1 · GATE DA 2026 (unseen)'], ['DA2025', 'Mock 2 · GATE DA 2025 re-timed'], ['DA2024', 'Mock 3 · GATE DA 2024 re-timed']];

  // ---------- state ----------
  const DEF = { v: 1, done: {}, parts: {}, notes: {}, cards: {}, att: {}, tests: {}, dayMin: {},
    set: { exam: '2027-02-06', week: [60, 90, 90, 90, 90, 90, 120], includeB: true, includeC: false, sem6: true, gaShare: 25 }, theme: '' };
  let S = load();
  function load() {
    try { const s = JSON.parse(localStorage.getItem(KEY)); if (s) return Object.assign(structuredClone(DEF), s, { set: Object.assign(structuredClone(DEF.set), s.set || {}) }); } catch (e) {}
    return structuredClone(DEF);
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { toast('Could not save (storage blocked)'); } }

  // ---------- dates ----------
  const pad = (n) => String(n).padStart(2, '0');
  const iso = (d) => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  const parse = (s) => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
  const addDays = (s, n) => { const d = parse(s); d.setDate(d.getDate() + n); return iso(d); };
  const diff = (a, b) => Math.round((parse(b) - parse(a)) / 864e5);
  let TODAY = new URLSearchParams(location.search).get('today') || iso(new Date());
  const nice = (s, long) => { const d = parse(s); return (long ? DOW[d.getDay()] + ' ' : '') + d.getDate() + ' ' + MON[d.getMonth()]; };
  const hm = (m) => (m >= 60 ? Math.floor(m / 60) + 'h' + (m % 60 ? ' ' + (m % 60) + 'm' : '') : m + 'm');
  const r5 = (x) => Math.round(x / 5) * 5;
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const $ = (s, r) => (r || document).querySelector(s);
  const raw = (p) => RAW + p.split('/').map(encodeURIComponent).join('/');
  const ICK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';

  // ---------- capacity ----------
  function capOf(d) {
    if (S.dayMin[d] != null) return { min: S.dayMin[d], why: 'set by you' };
    let m = S.set.week[parse(d).getDay()], why = '';
    if (S.set.sem6) {
      if (D.sem6.exams.includes(d)) return { min: 0, why: 'Sem 6 exam' };
      if (d >= D.sem6.prep[0] && d <= D.sem6.prep[1]) { m = Math.min(m, 30); why = 'Sem 6 exam weeks'; }
    }
    return { min: m, why };
  }

  // ---------- work items ----------
  function moduleQs(cid, m, papers) {
    return D.questions.filter((q) => q.c === cid && q.m === m && q.key && (papers || TOPIC_PAPERS).includes(q.p)).map((q) => q.id);
  }
  function unitQs(u, cid) {
    const own = D.questions.filter((q) => q.c === cid && q.key && q.u && q.u.includes(u.n) && TOPIC_PAPERS.includes(q.p)).map((q) => q.id);
    return own.length ? own : moduleQs(cid, u.m);
  }
  function tierOk(t) { return t === 'A' || (t === 'B' && S.set.includeB) || (t === 'C' && S.set.includeC); }
  let ITEMS = null;
  function items() {
    if (ITEMS) return ITEMS;
    const main = [], ga = [], fin = [];
    for (const cid of SEQ) {
      const c = C[cid];
      for (const m of c.mods) {
        for (const u of c.units) {
          if (u.m !== m || !tierOk(u.tier)) continue;
          main.push({ id: 'u:' + u.id, kind: 'learn', c: cid, m, u, min: u.min + 5, val: c.marks * (1 + (u.sc || 0)) });
        }
        const qs = moduleQs(cid, m);
        if (qs.length) {
          const mk = qs.reduce((s, id) => s + Q[id].mk, 0);
          main.push({ id: 't:' + cid + ':' + m, kind: 'test', c: cid, m, qs, min: Math.max(15, Math.min(60, r5(mk * 3 + 5))), val: 1e6 + mk });
        }
      }
    }
    for (const u of C.GA.units) if (tierOk(u.tier)) ga.push({ id: 'u:' + u.id, kind: 'learn', c: 'GA', m: u.m, u, min: u.min + 5, val: C.GA.marks * (1 + (u.sc || 0)) });
    for (const p of TOPIC_PAPERS) {
      const qs = D.questions.filter((q) => q.p === p && q.c === 'GA' && q.key).map((q) => q.id);
      if (qs.length) ga.push({ id: 'g:' + p, kind: 'test', c: 'GA', qs, min: 25, val: 1e6, title: 'Aptitude set · ' + p.replace('DA', 'GATE ') });
    }
    const revs = [['LA', 'PS'], ['CO', 'DB'], ['PDSA', 'ML', 'AI', 'GA']];
    MOCKS.forEach(([p, t], i) => {
      const all = D.questions.filter((q) => q.p === p).map((q) => q.id);
      fin.push({ id: 'k:' + p + ':1', kind: 'mock', c: 'MOCK', paper: p, qs: all.slice(0, 33), min: 90, val: 2e6 - i, title: t + ' · sitting 1 (Q1–33)' });
      fin.push({ id: 'k:' + p + ':2', kind: 'mock', c: 'MOCK', paper: p, qs: all.slice(33), min: 90, val: 2e6 - i, title: t + ' · sitting 2 (Q34–65)' });
      for (const cid of revs[i]) fin.push({ id: 'r:' + cid, kind: 'rev', c: cid, min: 30, val: 1e5, title: 'Revise ' + C[cid].short });
    });
    const all = main.concat(ga, fin);
    const byId = {}; all.forEach((x) => (byId[x.id] = x));
    ITEMS = { main, ga, fin, byId, all };
    return ITEMS;
  }
  function invalidate() { ITEMS = null; PLAN = null; }

  const partsBefore = (id, d) => (S.parts[id] || []).filter((p) => p.d < d).reduce((s, p) => s + p.min, 0);
  const partsOn = (id, d) => (S.parts[id] || []).filter((p) => p.d === d).reduce((s, p) => s + p.min, 0);

  // ---------- scheduler ----------
  let PLAN = null;
  function plan() {
    if (PLAN) return PLAN;
    const I = items(), t = TODAY, exam = S.set.exam;
    const days = [];
    for (let d = t; d < exam; d = addDays(d, 1)) days.push(d);
    const cap = {}; days.forEach((d) => (cap[d] = capOf(d).min));

    // what is left as of the start of today
    const left = {};
    const alive = (x) => !(S.done[x.id] && S.done[x.id] < t);
    for (const x of I.all) if (alive(x)) left[x.id] = Math.max(5, x.min - partsBefore(x.id, t));
    // items finished (or advanced) today sit in today's list first
    const forced = [];
    for (const x of I.all) {
      if (!(x.id in left)) continue;
      if (S.done[x.id] === t) { forced.push({ x, min: left[x.id], done: true }); delete left[x.id]; }
      else { const p = partsOn(x.id, t); if (p) { forced.push({ x, min: p, done: true, part: true }); left[x.id] = Math.max(5, left[x.id] - p); } }
    }
    const forcedMin = forced.reduce((s, f) => s + f.min, 0);
    const capLeft = {}; days.forEach((d) => (capLeft[d] = cap[d]));
    if (days.length) capLeft[t] = Math.max(0, cap[t] - forcedMin);

    // final phase (mocks + revision) is reserved at the end; drop revision then later mocks if it cannot fit
    let fin = I.fin.filter((x) => x.id in left);
    const totalCap = days.reduce((s, d) => s + capLeft[d], 0);
    const need = () => fin.reduce((s, x) => s + left[x.id], 0);
    while (fin.length && need() > totalCap * 0.6) {
      const r = fin.filter((x) => x.kind === 'rev'); const victim = r.length ? r[r.length - 1] : fin[fin.length - 1];
      fin = fin.filter((x) => x !== victim);
    }
    let finalStart = exam, acc = 0;
    for (let i = days.length - 1; i >= 0 && acc < need(); i--) { acc += capLeft[days[i]]; finalStart = days[i]; }
    const learnDays = days.filter((d) => d < finalStart);
    const learnCap = learnDays.reduce((s, d) => s + capLeft[d], 0);

    // choose what fits: drop the lowest value per minute first (tests are kept)
    let main = I.main.filter((x) => x.id in left), ga = I.ga.filter((x) => x.id in left);
    const sum = (a) => a.reduce((s, x) => s + left[x.id], 0);
    const dropped = [];
    let over = sum(main) + sum(ga) - learnCap;
    if (over > 0) {
      const pool = main.concat(ga).filter((x) => x.kind === 'learn').sort((a, b) => a.val / a.min - b.val / b.min);
      for (const x of pool) { if (over <= 0) break; dropped.push(x); over -= left[x.id]; }
      const gone = new Set(dropped.map((x) => x.id));
      main = main.filter((x) => !gone.has(x.id)); ga = ga.filter((x) => !gone.has(x.id));
      if (over > 0) { // still too much: drop tests of the lowest-mark courses
        const tp = main.concat(ga).sort((a, b) => C[a.c].marks - C[b.c].marks);
        for (const x of tp) { if (over <= 0) break; dropped.push(x); over -= left[x.id]; gone.add(x.id); }
        main = main.filter((x) => !gone.has(x.id)); ga = ga.filter((x) => !gone.has(x.id));
      }
    }

    // pack day by day
    const out = days.map((d) => ({ d, cap: cap[d], why: capOf(d).why, list: [] }));
    const byDay = {}; out.forEach((o) => (byDay[o.d] = o));
    if (days.length) forced.forEach((f) => byDay[t].list.push({ x: f.x, min: f.min, done: true, part: f.part }));
    const rem = {}; Object.keys(left).forEach((k) => (rem[k] = left[k]));
    const maxCap = Math.max(0, ...days.map((d) => capLeft[d]));
    const take = (q, o, budget) => {
      while (q.length && budget > 0) {
        let k = 0;
        // a mock sitting is never split when the day could hold it whole: do the next fitting item instead
        while (k < q.length && q[k].kind === 'mock' && rem[q[k].id] > budget + 10 && maxCap >= rem[q[k].id]) k++;
        if (k === q.length) break;
        if (k) q.unshift(q.splice(k, 1)[0]);
        const x = q[0], r = rem[x.id];
        if (r <= budget + 10) { o.list.push({ x, min: r, part: r < x.min - 4 }); budget -= r; q.shift(); }
        else if (budget >= 15) { o.list.push({ x, min: budget, part: true }); rem[x.id] = r - budget; budget = 0; }
        else break;
      }
      return budget;
    };
    const mq = main.slice(), gq = ga.slice(), fq = fin.slice();
    for (const o of out) {
      let b = capLeft[o.d];
      if (!b) continue;
      if (o.d >= finalStart && fq.length) { b = take(fq, o, b); b = take(mq, o, b); b = take(gq, o, b); }
      else {
        let gb = gq.length && mq.length ? r5(b * S.set.gaShare / 100) : 0;
        if (gb && gb < 15) gb = 0;
        let mb = take(mq, o, b - gb);
        b = take(gq, o, gb + mb);
        if (b > 0 && mq.length) b = take(mq, o, b);
        if (b > 0 && !mq.length && !gq.length && fq.length && o.d >= addDays(finalStart, -3)) b = take(fq, o, b);
      }
      if (b >= 10 && o.d < finalStart) o.list.push({ x: { id: 'free:' + o.d, kind: 'free', c: 'FREE', min: b }, min: b });
    }
    const unplaced = mq.concat(gq, fq).filter((x) => rem[x.id] > 0);
    const needMin = sum(I.main.filter((x) => x.id in left)) + sum(I.ga.filter((x) => x.id in left)) + need();
    PLAN = { days: out, byDay, dropped, unplaced, finalStart, needMin, haveMin: totalCap + forcedMin, learnDays: learnDays.length, left };
    return PLAN;
  }

  // ---------- completion ----------
  function toggle(entry) {
    const x = entry.x, id = x.id;
    if (x.kind === 'free') return;
    if (entry.done) {
      if (S.done[id] === TODAY) delete S.done[id];
      else if (S.parts[id]) S.parts[id] = S.parts[id].filter((p) => p.d !== TODAY);
    } else if (entry.part) {
      (S.parts[id] = S.parts[id] || []).push({ d: TODAY, min: entry.min });
      const doneMin = S.parts[id].reduce((s, p) => s + p.min, 0);
      if (doneMin >= x.min - 4) S.done[id] = TODAY;
    } else S.done[id] = TODAY;
    save(); PLAN = null; render();
  }

  // ---------- rendering helpers ----------
  const color = (cid) => (cid === 'MOCK' ? 'var(--accent)' : cid === 'FREE' ? 'var(--ink3)' : 'var(--' + cid + ')');
  function label(x) {
    if (x.kind === 'learn') return x.u.t;
    if (x.kind === 'test' && x.c !== 'GA') return 'Module ' + x.m + ' GATE PYQ test';
    if (x.kind === 'free') return 'Free slot: drill, flashcards or mistakes';
    return x.title || x.id;
  }
  function kindLine(x, min, part) {
    const k = { learn: 'Learn', test: 'PYQ test', mock: 'Mock', rev: 'Revision', free: 'Spare' }[x.kind];
    const cn = C[x.c] ? C[x.c].short : x.kind === 'mock' ? 'Full paper' : '';
    return '<span class="kind" style="--c:' + color(x.c) + '">' + k + (cn ? ' · ' + esc(cn) : '') + (x.m ? ' · M' + x.m : '') + '</span>';
  }
  function meta(x, min, part) {
    const bits = [hm(min) + (part ? ' (part)' : '')];
    if (x.kind === 'learn' && x.u.pg) bits.push('pp ' + x.u.pg[0] + '–' + x.u.pg[1]);
    if (x.qs) bits.push(x.qs.length + ' questions');
    if (x.kind === 'learn' && x.u.tier) bits.push('tier ' + x.u.tier);
    const best = S.tests[x.id];
    if (best) bits.push('best ' + best.score + '/' + best.max);
    return bits.join(' · ');
  }
  function taskHTML(e, i, opts) {
    const x = e.x;
    let acts = '';
    if (x.kind === 'learn') {
      acts += x.u.cut ? '<button class="btn sm primary" data-act="read" data-i="' + i + '">Read</button>' : (x.u.src ? '<button class="btn sm primary" data-act="readsrc" data-i="' + i + '">Read module PDF</button>' : '');
      acts += '<button class="btn sm" data-act="notes" data-i="' + i + '">Notes</button>';
      acts += '<button class="btn sm" data-act="check" data-i="' + i + '">Quick check</button>';
      acts += '<button class="btn sm ghost" data-act="explain" data-i="' + i + '">Explain</button>';
    } else if (x.kind === 'test' || x.kind === 'mock') acts += '<button class="btn sm primary" data-act="test" data-i="' + i + '">' + (S.tests[x.id] ? 'Retake' : 'Start') + '</button>';
    else if (x.kind === 'rev') acts += '<button class="btn sm primary" data-act="rev" data-i="' + i + '">Open</button>';
    else if (x.kind === 'free') acts += '<button class="btn sm" data-act="drill">Quick drill</button><button class="btn sm" data-act="cards">Flashcards</button>';
    const why = x.kind === 'learn' && x.u.why && /asked/.test(x.u.why) ? '<div class="tiny">' + esc(x.u.why.replace(/\[.*?\]/, '')) + '</div>' : '';
    return '<div class="task' + (e.done ? ' done' : '') + '" style="--c:' + color(x.c) + '">' +
      (x.kind === 'free' ? '<span class="check" style="border-style:dashed"></span>' : '<button class="check" data-act="tick" data-i="' + i + '" aria-label="Mark done">' + ICK + '</button>') +
      '<div class="grow">' + kindLine(x) + '<div class="ttl">' + esc(label(x)) + '</div><div class="small muted">' + meta(x, e.min, e.part) + '</div>' + why +
      (opts && opts.noacts ? '' : '<div class="actions">' + acts + '</div>') + '</div></div>';
  }
  let CUR = [];      // entries addressable by data-i in the current view
  function bindTasks(root) {
    root.querySelectorAll('[data-act]').forEach((b) => {
      b.onclick = (ev) => {
        ev.stopPropagation();
        const e = CUR[+b.dataset.i], x = e && e.x;
        switch (b.dataset.act) {
          case 'tick': toggle(e); break;
          case 'read': PDFV.open(raw(x.u.cut), x.u.t); break;
          case 'readsrc': PDFV.open(raw(x.u.src), x.u.t); break;
          case 'notes': openNotes(x.c, x.u); break;
          case 'check': quiz({ title: 'Quick check · ' + x.u.t, qids: shuffle(unitQs(x.u, x.c)).slice(0, 6), mode: 'practice' }); break;
          case 'explain': openExplain(x.c, x.u); break;
          case 'test': quiz({ title: label(x), qids: x.qs, mode: 'test', minutes: x.min, testId: x.id, onDone: (r) => { if (r.ans && !S.done[x.id]) { S.done[x.id] = TODAY; save(); } } }); break;
          case 'rev': openRevision(x.c); break;
          case 'drill': drill(); break;
          case 'cards': reviewCards(); break;
        }
      };
    });
  }

  // ---------- views ----------
  let TAB = 'today';
  function render() {
    const v = $('#view');
    document.querySelectorAll('nav.tabs button').forEach((b) => b.classList.toggle('on', b.dataset.tab === TAB));
    ({ today: vToday, plan: vPlan, practice: vPractice, files: vFiles, me: vMe })[TAB](v);
  }

  function vToday(v) {
    const P = plan(), left = diff(TODAY, S.set.exam);
    const day = P.byDay[TODAY];
    CUR = day ? day.list.slice() : [];
    const capT = capOf(TODAY);
    const doneMin = CUR.filter((e) => e.done).reduce((s, e) => s + e.min, 0);
    const planned = CUR.filter((e) => e.x.kind !== 'free').reduce((s, e) => s + e.min, 0);
    let h = '<div class="top"><div><div class="tiny">' + nice(TODAY, true) + '</div><h1>Today</h1></div>' +
      '<div class="countdown"><b>' + Math.max(0, left) + '</b>days to GATE · ' + nice(S.set.exam) + '</div></div>';
    if (left <= 0) h += '<div class="card notice ok">The exam date has passed. Change it in Progress → Settings if needed.</div>';
    // time control
    h += '<div class="card"><div class="row"><div class="grow"><b>Time for GATE today</b><div class="tiny">' + (capT.why ? esc(capT.why) : 'from your week settings') + '</div></div>' +
      '<button class="iconbtn" data-min="-15" aria-label="Less time">−</button><b style="min-width:52px;text-align:center" data-testid="today-min">' + hm(capT.min) + '</b><button class="iconbtn" data-min="15" aria-label="More time">+</button></div>' +
      '<div class="bar" style="margin-top:10px"><i style="width:' + (planned ? Math.min(100, (doneMin / planned) * 100) : 0) + '%"></i></div>' +
      '<div class="tiny" style="margin-top:4px">' + hm(doneMin) + ' done of ' + hm(planned) + ' planned</div></div>';
    h += fitCard(P);
    const due = dueCards().length;
    if (due) h += '<div class="card row"><div class="grow"><b>' + due + ' flashcard' + (due > 1 ? 's' : '') + ' due</b><div class="tiny">From your own notes · about ' + Math.max(1, Math.round(due / 3)) + ' min</div></div><button class="btn primary sm" id="go-cards">Review</button></div>';
    h += '<div class="card" data-testid="today-list">';
    if (!CUR.length) h += '<div class="muted">' + (capT.min ? 'Nothing left to plan. Use Practice for drills and mocks.' : 'No GATE time today' + (capT.why ? ' (' + esc(capT.why) + ')' : '') + '. Tap + above if you find time.') + '</div>';
    CUR.forEach((e, i) => (h += taskHTML(e, i)));
    h += '</div>';
    // next up
    const next = nextFuture(P);
    if (next) {
      CUR.push(next.e);
      h += '<h2>Finished early?</h2><div class="card"><div class="tiny">Next in the plan (' + nice(next.d, true) + '). Do it now and the plan moves up.</div>' + taskHTML(next.e, CUR.length - 1) + '</div>';
    }
    const tm = P.byDay[addDays(TODAY, 1)];
    if (tm && tm.list.length) h += '<h2>Tomorrow · ' + hm(tm.cap) + '</h2><div class="card">' + tm.list.map((e) => pill(e)).join('') + '</div>';
    v.innerHTML = h;
    v.querySelectorAll('[data-min]').forEach((b) => (b.onclick = () => { S.dayMin[TODAY] = Math.max(0, Math.min(600, capT.min + +b.dataset.min)); save(); PLAN = null; render(); }));
    const gc = $('#go-cards'); if (gc) gc.onclick = reviewCards;
    bindTasks(v); bindFit(v);
  }
  function nextFuture(P) {
    for (const o of P.days) {
      if (o.d <= TODAY) continue;
      const e = o.list.find((e) => e.x.kind !== 'free');
      if (e) return { d: o.d, e: { x: e.x, min: e.min, part: e.part } };
    }
    return null;
  }
  function pill(e) {
    const t = e.x.kind === 'learn' ? e.x.u.t : label(e.x);
    return '<span class="pill' + (e.done ? ' done' : '') + '" style="--c:' + color(e.x.c) + '">' + esc(t.length > 38 ? t.slice(0, 36) + '…' : t) + ' · ' + hm(e.min) + '</span>';
  }
  function fitCard(P) {
    const dropMin = P.dropped.reduce((s, x) => s + (P.left[x.id] || x.min), 0);
    if (!P.dropped.length && !P.unplaced.length) return '<div class="card notice ok fit" data-testid="fit"><b>Everything fits</b><span class="small">' + hm(P.needMin) + ' of work · ' + hm(P.haveMin) + ' available</span></div>';
    const per = P.learnDays ? r5(Math.ceil(dropMin / P.learnDays / 5) * 5) || 5 : 0;
    return '<div class="card notice fit" data-testid="fit"><b>' + P.dropped.length + ' units (' + hm(dropMin) + ') do not fit</b><span></span>' +
      '<div class="small muted" style="grid-column:1/-1">The plan keeps the highest-marks units and every PYQ test. ' + (per ? 'About +' + per + ' min a day would fit them all.' : '') + '</div>' +
      '<div style="grid-column:1/-1"><button class="btn sm" id="show-drop">See what was left out</button></div></div>';
  }
  function bindFit(v) {
    const b = $('#show-drop', v); if (!b) return;
    b.onclick = () => {
      const P = plan();
      openSheet('Left out (time is short)', '<div class="q"><p class="small muted">Lowest value per minute goes first. Add minutes on any day (Plan tab) or in Settings and these come back automatically.</p>' +
        P.dropped.map((x) => '<div class="task" style="--c:' + color(x.c) + '"><span class="dot"></span><div class="grow">' + kindLine(x) + '<div>' + esc(label(x)) + '</div><div class="tiny">' + hm(x.min) + (x.u ? ' · tier ' + x.u.tier : '') + '</div></div></div>').join('') + '</div>');
    };
  }

  function vPlan(v) {
    const P = plan();
    const mode = vPlan.mode || 'days';
    let h = '<h1>Plan</h1><p class="small muted">Rebuilt every time you tick something or change your time. Tap a day to change its minutes.</p>' +
      '<div class="seg" style="margin:10px 0"><button data-m="days" class="' + (mode === 'days' ? 'on' : '') + '">Days</button><button data-m="courses" class="' + (mode === 'courses' ? 'on' : '') + '">Courses</button><button data-m="week" class="' + (mode === 'week' ? 'on' : '') + '">My week</button></div>';
    if (mode === 'days') {
      h += fitCard(P) + '<div class="card">';
      let lastWeek = '';
      // past days with ticks
      const pastDone = {};
      Object.entries(S.done).forEach(([id, d]) => { if (d < TODAY) (pastDone[d] = pastDone[d] || []).push(id); });
      const pd = Object.keys(pastDone).sort().slice(-5);
      if (pd.length) h += '<div class="tiny" style="margin-bottom:4px">Recent</div>' + pd.map((d) => '<div class="day"><div class="date">' + nice(d, true) + '</div>' + pastDone[d].map((id) => { const x = items().byId[id]; return x ? pill({ x, min: x.min, done: true }) : ''; }).join('') + '</div>').join('');
      P.days.forEach((o) => {
        const wk = 'Week of ' + nice(addDays(o.d, -((parse(o.d).getDay() + 6) % 7)));
        if (wk !== lastWeek) { h += '<div class="tiny" style="margin-top:12px">' + wk + (o.d >= P.finalStart ? ' · mocks and revision' : '') + '</div>'; lastWeek = wk; }
        h += '<div class="day' + (o.d === TODAY ? ' today' : '') + '" data-day="' + o.d + '" data-testid="day-' + o.d + '"><div class="row"><span class="date grow">' + nice(o.d, true) + (o.d === TODAY ? ' · today' : '') + '</span><span class="tiny">' + (o.cap ? hm(o.cap) : 'off') + (o.why ? ' · ' + esc(o.why) : '') + '</span></div>' +
          (o.list.length ? o.list.map(pill).join('') : '<span class="tiny">No GATE work</span>') + '</div>';
      });
      h += '<div class="day"><div class="date" style="color:var(--bad)">' + nice(S.set.exam, true) + ' · GATE DA</div></div></div>';
    } else if (mode === 'courses') {
      h += '<div class="tiles">' + D.courses.map((c) => {
        const us = c.units.filter((u) => tierOk(u.tier)); const dn = us.filter((u) => S.done['u:' + u.id]).length;
        return '<button class="tile" data-c="' + c.id + '" style="--c:var(--' + c.id + ')"><div class="row"><span class="dot"></span><span class="n grow">' + esc(c.short) + '</span></div><div class="tiny">' + c.marks + ' of 300 marks · ' + dn + '/' + us.length + ' units</div><div class="bar"><i style="width:' + (us.length ? (dn / us.length) * 100 : 0) + '%"></i></div></button>';
      }).join('') + '</div>';
    } else h += weekEditor();
    v.innerHTML = h;
    v.querySelectorAll('[data-m]').forEach((b) => (b.onclick = () => { vPlan.mode = b.dataset.m; render(); }));
    v.querySelectorAll('[data-day]').forEach((el) => (el.onclick = () => dayEditor(el.dataset.day)));
    v.querySelectorAll('[data-c]').forEach((el) => (el.onclick = () => openCourse(el.dataset.c)));
    bindFit(v); bindWeek(v);
  }
  function weekEditor() {
    return '<div class="card"><b>Minutes for GATE on each weekday</b><p class="tiny">Change these whenever your timetable changes. The whole plan refits.</p><div class="wk">' +
      [1, 2, 3, 4, 5, 6, 0].map((i) => '<div><label>' + DOW[i] + '</label><input type="number" inputmode="numeric" min="0" max="600" step="15" data-wd="' + i + '" value="' + S.set.week[i] + '"></div>').join('') + '</div>' +
      '<label class="row" style="margin-top:14px"><input type="checkbox" id="sem6" ' + (S.set.sem6 ? 'checked' : '') + '><span class="grow small">Sem 6 exams: 30 min a day from ' + nice(D.sem6.prep[0]) + ' and no GATE work on exam days (' + D.sem6.exams.map((d) => parse(d).getDate()).join(', ') + ' Jan)</span></label>' +
      '<label class="field"><span>Share of each day for General Aptitude (%)</span><input type="number" id="gashare" min="0" max="60" step="5" value="' + S.set.gaShare + '"></label></div>';
  }
  function bindWeek(v) {
    v.querySelectorAll('[data-wd]').forEach((inp) => (inp.onchange = () => { S.set.week[+inp.dataset.wd] = Math.max(0, +inp.value || 0); save(); PLAN = null; toast('Plan refitted'); }));
    const s6 = $('#sem6', v); if (s6) s6.onchange = () => { S.set.sem6 = s6.checked; save(); PLAN = null; toast('Plan refitted'); };
    const gs = $('#gashare', v); if (gs) gs.onchange = () => { S.set.gaShare = Math.max(0, Math.min(60, +gs.value || 0)); save(); PLAN = null; toast('Plan refitted'); };
  }
  function dayEditor(d) {
    const c = capOf(d), P = plan(), o = P.byDay[d];
    CUR = o ? o.list.slice() : [];
    openSheet(nice(d, true), '<div class="q"><label class="field"><span>Minutes for GATE on this day</span><input type="number" id="dm" min="0" max="600" step="15" value="' + c.min + '"></label>' +
      '<div class="row wrap">' + [0, 30, 60, 90, 120, 180].map((m) => '<button class="btn sm" data-set="' + m + '">' + (m ? hm(m) : 'Day off') + '</button>').join('') + (S.dayMin[d] != null ? '<button class="btn sm ghost" data-set="reset">Use default</button>' : '') + '</div>' +
      '<h2>Planned</h2>' + (CUR.length ? CUR.map((e, i) => taskHTML(e, i, { noacts: d !== TODAY })).join('') : '<p class="muted">Nothing planned.</p>') + '</div>');
    const body = $('#sh-body');
    const apply = (val) => { if (val === 'reset') delete S.dayMin[d]; else S.dayMin[d] = Math.max(0, +val || 0); save(); PLAN = null; closeSheet(); render(); toast('Plan refitted'); };
    body.querySelectorAll('[data-set]').forEach((b) => (b.onclick = () => apply(b.dataset.set)));
    $('#dm').onchange = (e) => apply(e.target.value);
    bindTasks(body);
  }
  function openCourse(cid) {
    const c = C[cid], P = plan();
    const dropped = new Set(P.dropped.map((x) => x.id));
    CUR = [];
    let h = '<div class="q"><p class="small muted">' + c.marks + ' of 300 marks in GATE DA 2024–2026. Tier A = asked recently or a focus topic; B = some evidence; C = none.</p>';
    for (const m of c.mods) {
      h += '<h2>Module ' + m + '</h2>';
      for (const u of c.units.filter((u) => u.m === m)) {
        const x = items().byId['u:' + u.id] || { id: 'u:' + u.id, kind: 'learn', c: cid, m, u, min: u.min + 5 };
        const e = { x, min: x.min, done: !!S.done[x.id] };
        CUR.push(e);
        let flag = !tierOk(u.tier) ? ' · not planned' : dropped.has(x.id) ? ' · left out (time)' : '';
        h += taskHTML(e, CUR.length - 1).replace('</div><div class="actions">', '<div class="tiny">' + flag + '</div></div><div class="actions">');
      }
      const t = items().byId['t:' + cid + ':' + m];
      if (t) { CUR.push({ x: t, min: t.min, done: !!S.done[t.id] }); h += taskHTML(CUR[CUR.length - 1], CUR.length - 1); }
    }
    if (c.rev && c.rev.length) h += '<h2>Revision bullets</h2><ul>' + c.rev.map((r) => '<li>' + esc(r) + '</li>').join('') + '</ul>';
    openSheet(c.name, h + '</div>');
    const body = $('#sh-body');
    bindTasks(body);
    // ticking here marks the unit itself, whatever day it was planned for
    body.querySelectorAll('[data-act="tick"]').forEach((b) => (b.onclick = (ev) => {
      ev.stopPropagation(); const e = CUR[+b.dataset.i];
      if (S.done[e.x.id]) delete S.done[e.x.id]; else S.done[e.x.id] = TODAY;
      save(); PLAN = null; e.done = !!S.done[e.x.id]; b.closest('.task').classList.toggle('done', e.done);
    }));
  }

  // ---------- practice ----------
  function vPractice(v) {
    const wrong = mistakes();
    let h = '<h1>Practice</h1><p class="small muted">Every question is a real GATE DA question with the official key: answer and see right or wrong at once.</p>' +
      '<div class="tiles" style="margin-top:10px">' +
      '<button class="tile" id="p-drill"><div class="n">Quick drill</div><div class="tiny">10 questions from what you have studied</div></button>' +
      '<button class="tile" id="p-wrong"><div class="n">Mistakes (' + wrong.length + ')</div><div class="tiny">Redo the ones you got wrong</div></button>' +
      '<button class="tile" id="p-cards"><div class="n">Flashcards (' + dueCards().length + ' due)</div><div class="tiny">' + allCards().length + ' cards from your notes</div></button>' +
      '</div><h2>Module-wise GATE PYQ tests</h2><div class="card">';
    CUR = [];
    for (const cid of SEQ.concat(['GA'])) {
      const c = C[cid];
      const ts = items().all.filter((x) => x.kind === 'test' && x.c === cid);
      if (!ts.length) continue;
      h += '<div class="row" style="margin:12px 0 4px;--c:var(--' + cid + ')"><span class="dot"></span><b class="grow">' + esc(c.short) + '</b><span class="tiny">' + c.marks + '/300</span></div><div class="row wrap">';
      ts.forEach((x) => { CUR.push({ x, min: x.min }); const b = S.tests[x.id]; h += '<button class="btn sm" data-act="test" data-i="' + (CUR.length - 1) + '">' + (x.m ? 'M' + x.m : x.title.split('·')[1]) + ' · ' + x.qs.length + 'Q' + (b ? ' · ' + b.score + '/' + b.max : '') + '</button>'; });
      h += '</div>';
    }
    h += '</div><h2>Full mock papers (3 hours, two sittings)</h2><div class="card">';
    for (const [p, t] of MOCKS) {
      const qs = D.questions.filter((q) => q.p === p).map((q) => q.id);
      CUR.push({ x: { id: 'full:' + p, kind: 'mock', c: 'MOCK', qs, min: 180, title: t } , min: 180 });
      const b = S.tests['full:' + p];
      h += '<div class="row" style="padding:6px 0"><div class="grow">' + esc(t) + '<div class="tiny">65 questions · 100 marks' + (b ? ' · last ' + b.score + '/' + b.max : '') + '</div></div><button class="btn sm primary" data-act="test" data-i="' + (CUR.length - 1) + '">Start</button></div>';
    }
    h += '<div class="tiny" style="margin-top:6px">Answer keys: official GATE keys (' + Object.keys(D.keysrc).join(', ') + '). The 2024 sample paper has no key: self-check only.</div></div>';
    h += '<h2>Browse by paper</h2><div class="row wrap">' + ['DA2026', 'DA2025', 'DA2024', 'DA2024_SAMPLE'].map((p) => '<button class="btn sm" data-paper="' + p + '">' + p.replace('_', ' ') + '</button>').join('') + '</div>';
    h += '<h2>Better study loop</h2><div class="card small"><ol class="steps">' +
      '<li><b>Read the cut</b>: only the unit’s pages (Read button), not the whole chapter.</li>' +
      '<li><b>Smart notes</b>: one-line idea, key results as <code>question :: answer</code> lines, one worked example, one trap. Every <code>::</code> line becomes a flashcard.</li>' +
      '<li><b>Quick check</b>: the GATE questions asked on that unit, instant right/wrong.</li>' +
      '<li><b>Explain on demand</b>: stuck? The Explain button opens Claude with a ready prompt for a video, a mini-game or a walkthrough.</li>' +
      '<li><b>Module test</b>: when a module ends, a timed PYQ test with GATE marking. Wrong answers go to Mistakes.</li>' +
      '<li><b>At college</b>: open Practice → Quick drill or Flashcards in any 10-minute gap.</li></ol></div>';
    v.innerHTML = h;
    $('#p-drill').onclick = drill; $('#p-wrong').onclick = () => (wrong.length ? quiz({ title: 'Mistakes', qids: wrong, mode: 'practice' }) : toast('No mistakes yet'));
    $('#p-cards').onclick = reviewCards;
    v.querySelectorAll('[data-paper]').forEach((b) => (b.onclick = () => quiz({ title: b.dataset.paper.replace('_', ' '), qids: D.questions.filter((q) => q.p === b.dataset.paper).map((q) => q.id), mode: 'practice' })));
    bindTasks(v);
  }
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function studiedModules() {
    const s = new Set();
    for (const [id, d] of Object.entries(S.done)) { const x = items().byId[id]; if (x && x.kind === 'learn') s.add(x.c + ':' + x.m); }
    return s;
  }
  function drill() {
    const mods = studiedModules();
    let pool = D.questions.filter((q) => q.key && TOPIC_PAPERS.includes(q.p) && (mods.has(q.c + ':' + q.m) || q.c === 'GA'));
    const notSeen = pool.filter((q) => !S.att[q.id]);
    if (notSeen.length >= 10) pool = notSeen;
    if (!pool.length) return toast('Study a unit first');
    quiz({ title: 'Quick drill', qids: shuffle(pool.map((q) => q.id)).slice(0, 10), mode: 'practice' });
  }
  function mistakes() { return Object.entries(S.att).filter(([id, a]) => a.last === 0 && Q[id]).map(([id]) => id); }

  // ---------- quiz engine ----------
  function check(q, ans) {
    if (!q.key) return null;
    if (q.key === 'MTA') return true;
    if (q.ty === 'NAT') {
      const v = parseFloat(String(ans).replace(',', '.')); if (isNaN(v)) return false;
      const m = q.key.match(/(-?[\d.]+)\s*to\s*(-?[\d.]+)/); if (m) return v >= +m[1] - 1e-9 && v <= +m[2] + 1e-9;
      return Math.abs(v - parseFloat(q.key)) < 1e-6;
    }
    const want = q.key.split(/[;,]/).map((s) => s.trim()).sort().join(';');
    return (Array.isArray(ans) ? ans.slice().sort().join(';') : ans) === want;
  }
  function marksFor(q, ok, answered) {
    if (!answered) return 0;
    if (ok) return q.mk;
    return q.ty === 'MCQ' ? -q.mk / 3 : 0;
  }
  function quiz(o) {
    const qs = o.qids.map((id) => Q[id]).filter(Boolean);
    if (!qs.length) return toast('No questions with a key here yet');
    const st = { i: 0, ans: {}, res: {}, start: Date.now(), done: false };
    const test = o.mode === 'test';
    let timer = null;
    openSheet(o.title, '', test ? '<span class="timer" id="qz-t"></span>' : '');
    const body = $('#sh-body'), foot = $('#sh-foot');
    foot.hidden = false;
    function tick() {
      const el = $('#qz-t'); if (!el || st.done) return;
      const left = o.minutes * 60 - Math.floor((Date.now() - st.start) / 1000);
      el.textContent = (left < 0 ? '-' : '') + Math.floor(Math.abs(left) / 60) + ':' + pad(Math.abs(left) % 60);
      el.style.color = left < 0 ? 'var(--bad)' : left < 300 ? 'var(--warn)' : '';
    }
    if (test) { tick(); timer = setInterval(tick, 1000); onSheetClose = () => clearInterval(timer); }
    function draw() {
      const q = qs[st.i], a = st.ans[q.id], r = st.res[q.id];
      const shown = !test ? r !== undefined : st.done;
      let h = '<div class="q"><div class="qnav">' + qs.map((x, k) => {
        const rr = st.res[x.id]; const cls = (k === st.i ? 'cur ' : '') + (st.done || !test ? (rr === true ? 'r' : rr === false ? 'w' : st.ans[x.id] != null ? 'ans' : '') : st.ans[x.id] != null ? 'ans' : '');
        return '<button class="' + cls + '" data-go="' + k + '">' + (k + 1) + '</button>';
      }).join('') + '</div>';
      const cc = C[q.c];
      h += '<div class="tiny">' + q.p.replace('_', ' ') + ' · Q.' + q.n + ' · ' + q.mk + ' mark' + (q.mk > 1 ? 's' : '') + ' · ' + (q.ty || 'no key') + (cc ? ' · ' + esc(cc.short) + (q.m ? ' M' + q.m : '') : '') + '</div>';
      h += '<img class="qimg" src="' + q.img + '" width="' + q.w + '" height="' + q.h + '" style="height:auto;margin-top:6px" alt="Question ' + q.n + '">';
      if (q.ty === 'NAT') {
        h += '<div class="row" style="margin-top:12px"><input type="text" inputmode="decimal" id="nat" placeholder="Your answer" value="' + esc(a == null ? '' : a) + '"' + (shown ? ' disabled' : '') + '>' + (!shown ? '<button class="btn primary" id="nat-go">' + (test ? 'Save' : 'Check') + '</button>' : '') + '</div>';
      } else if (q.ty || !q.key) {
        const multi = q.ty === 'MSQ';
        const keyset = q.key && q.key !== 'MTA' ? q.key.split(/[;,]/).map((s) => s.trim()) : [];
        h += '<div class="opts">' + ['A', 'B', 'C', 'D'].map((L) => {
          const sel = multi ? (a || []).includes(L) : a === L;
          let cls = sel ? 'sel' : '';
          if (shown && q.key) { if (keyset.includes(L) || q.key === 'MTA') cls = 'right'; else if (sel) cls = 'wrong'; }
          return '<button class="opt ' + cls + '" data-opt="' + L + '"' + (shown ? ' disabled' : '') + '><b>' + L + '</b><span>' + (multi ? (sel ? 'Selected' : 'Tap to select') : 'Option ' + L) + '</span></button>';
        }).join('') + '</div>';
        if (multi && !shown) h += '<button class="btn primary" id="msq-go" style="margin-top:10px">' + (test ? 'Save' : 'Check') + '</button>';
      }
      if (shown) {
        if (!q.key) h += '<div class="feedback no">No official key for this paper. Check it yourself.</div>';
        else if (r === true) h += '<div class="feedback ok">Correct' + (q.key === 'MTA' ? ' (marks to all)' : '') + '</div>';
        else h += '<div class="feedback no">' + (a == null ? 'Not answered' : 'Not right') + ' · key: ' + esc(q.key.replace(/;/g, ', ')) + '</div>';
        if (q.c && q.m && C[q.c]) {
          const u = C[q.c].units.find((u) => q.u && q.u.includes(u.n));
          if (u && u.cut) h += '<button class="btn sm" id="q-read" style="margin-top:8px">Read: ' + esc(u.t) + '</button>';
        }
      }
      h += '</div>';
      if (st.done && st.i === 0) h = summary() + h;
      body.innerHTML = h;
      foot.innerHTML = '<button class="btn" id="q-prev"' + (st.i ? '' : ' disabled') + '>Back</button><span class="grow"></span>' +
        (test && !st.done ? '<button class="btn" id="q-sub">Submit</button>' : '') +
        '<button class="btn primary" id="q-next">' + (st.i < qs.length - 1 ? 'Next' : st.done || !test ? 'Finish' : 'Review') + '</button>';
      body.querySelectorAll('[data-go]').forEach((b) => (b.onclick = () => { st.i = +b.dataset.go; draw(); }));
      body.querySelectorAll('[data-opt]').forEach((b) => (b.onclick = () => {
        const L = b.dataset.opt;
        if (q.ty === 'MSQ') { const s = new Set(st.ans[q.id] || []); s.has(L) ? s.delete(L) : s.add(L); st.ans[q.id] = Array.from(s).sort(); draw(); return; }
        st.ans[q.id] = L; if (!test) grade(q); draw();
      }));
      const ng = $('#nat-go'); if (ng) ng.onclick = () => { const v = $('#nat').value.trim(); if (!v) return; st.ans[q.id] = v; if (!test) grade(q); draw(); };
      const mg = $('#msq-go'); if (mg) mg.onclick = () => { if (!(st.ans[q.id] || []).length) return; if (!test) grade(q); draw(); };
      const qr = $('#q-read'); if (qr) qr.onclick = () => { const u = C[q.c].units.find((u) => q.u.includes(u.n)); PDFV.open(raw(u.cut), u.t); };
      $('#q-prev').onclick = () => { st.i--; draw(); };
      $('#q-next').onclick = () => { if (st.i < qs.length - 1) { st.i++; draw(); } else if (test && !st.done) submit(); else { finish(); closeSheet(); } };
      const sb = $('#q-sub'); if (sb) sb.onclick = () => { const un = qs.filter((x) => st.ans[x.id] == null).length; if (!un || confirm(un + ' unanswered. Submit anyway?')) submit(); };
      body.scrollTop = 0;
    }
    function grade(q) {
      const ok = check(q, st.ans[q.id]);
      st.res[q.id] = ok;
      if (ok !== null) { const prev = S.att[q.id] || { n: 0, ok: 0 }; S.att[q.id] = { n: prev.n + 1, ok: prev.ok + (ok ? 1 : 0), last: ok ? 1 : 0, d: TODAY }; save(); }
    }
    function submit() { qs.forEach((q) => { if (st.ans[q.id] != null) grade(q); else st.res[q.id] = q.key ? false : null; }); st.done = true; clearInterval(timer); finish(); st.i = 0; draw(); }
    let finished = false;
    function finish() {
      if (finished) return; finished = true;
      const r = score();
      if (o.testId || test) { const id = o.testId || ('free:' + o.title); S.tests[id] = { score: +r.marks.toFixed(2), max: r.max, d: TODAY, right: r.right, n: qs.length }; save(); }
      if (o.onDone) o.onDone({ ans: Object.keys(st.ans).length, ...r });
      PLAN = null;
    }
    function score() {
      let marks = 0, max = 0, right = 0, wrongN = 0, byC = {};
      qs.forEach((q) => { if (!q.key) return; max += q.mk; const ok = st.res[q.id]; const m = marksFor(q, ok, st.ans[q.id] != null); marks += m; if (ok) right++; else if (st.ans[q.id] != null) wrongN++; if (q.c) { byC[q.c] = byC[q.c] || [0, 0]; byC[q.c][0] += Math.max(0, m); byC[q.c][1] += q.mk; } });
      return { marks, max, right, wrong: wrongN, byC };
    }
    function summary() {
      const r = score(), mins = Math.round((Date.now() - st.start) / 60000);
      return '<div class="q"><div class="card"><div class="stat"><div><b>' + r.marks.toFixed(1) + '</b><span class="tiny">of ' + r.max + ' marks</span></div><div><b>' + r.right + '</b><span class="tiny">right</span></div><div><b>' + mins + 'm</b><span class="tiny">taken</span></div></div>' +
        '<p class="tiny">GATE marking: wrong MCQ −1/3 (1-mark) or −2/3 (2-mark); no negative for MSQ and NAT. Wrong answers are in Practice → Mistakes.</p>' +
        Object.entries(r.byC).map(([c, [g, m]]) => '<div class="row small"><span class="dot" style="--c:' + color(c) + '"></span><span class="grow">' + esc(C[c] ? C[c].short : c) + '</span>' + g.toFixed(1) + '/' + m + '</div>').join('') + '</div></div>';
    }
    if (!test) onSheetClose = () => finish();
    draw();
  }

  // ---------- notes and flashcards ----------
  function openNotes(cid, u) {
    const id = cid + '-' + u.n, n = S.notes[id] || {};
    const qs = unitQs(u, cid);
    const field = (k, lab, ph, big) => '<label class="field"><span>' + lab + '</span><textarea data-k="' + k + '" rows="' + (big ? 5 : 2) + '" placeholder="' + esc(ph) + '">' + esc(n[k] || '') + '</textarea></label>';
    openSheet('Notes · ' + u.t, '<div class="q">' +
      '<div class="row wrap" style="margin:6px 0">' + (u.cut ? '<button class="btn sm primary" id="n-read">Read pp ' + u.pg[0] + '–' + u.pg[1] + '</button>' : '') + '<button class="btn sm" id="n-check">Quick check (' + qs.length + ')</button><button class="btn sm ghost" id="n-exp">Explain</button></div>' +
      (u.why && /asked|focus/.test(u.why) ? '<div class="card small"><b>Why it matters:</b> ' + esc(u.why) + '</div>' : '') +
      field('idea', '1 · The idea in one line', 'e.g. Rank = number of pivots = dim of column space') +
      field('keys', '2 · Key results as flashcards (one per line, question :: answer)', 'rank(A) + nullity(A) = ? :: number of columns n\nWhen is Ax=b solvable? :: b in C(A)', true) +
      field('ex', '3 · One worked example, in your own steps', 'Write the steps, not the book text', true) +
      field('trap', '4 · Trap (the mistake to avoid)', 'e.g. confusing rows and columns of the nullspace') +
      '<p class="tiny">Saved as you type. Each <code>::</code> line and the trap become flashcards, shown again after 1, 3, 7, 16 and 35 days.</p></div>');
    const body = $('#sh-body');
    body.querySelectorAll('textarea').forEach((t) => (t.oninput = () => { (S.notes[id] = S.notes[id] || {})[t.dataset.k] = t.value; S.notes[id].t = u.t; S.notes[id].c = cid; save(); }));
    const r = $('#n-read'); if (r) r.onclick = () => PDFV.open(raw(u.cut), u.t);
    $('#n-check').onclick = () => quiz({ title: 'Quick check · ' + u.t, qids: shuffle(qs).slice(0, 6), mode: 'practice' });
    $('#n-exp').onclick = () => openExplain(cid, u);
  }
  function allCards() {
    const out = [];
    for (const [id, n] of Object.entries(S.notes)) {
      (n.keys || '').split('\n').forEach((l) => { const m = l.split('::'); if (m.length >= 2 && m[0].trim() && m[1].trim()) out.push({ id: id + '|' + m[0].trim().slice(0, 60), f: m[0].trim(), b: m.slice(1).join('::').trim(), t: n.t, c: n.c }); });
      if (n.trap && n.trap.trim()) out.push({ id: id + '|trap', f: 'Trap in “' + n.t + '”?', b: n.trap.trim(), t: n.t, c: n.c });
    }
    return out;
  }
  function dueCards() { return allCards().filter((c) => !S.cards[c.id] || S.cards[c.id].due <= TODAY); }
  const STEPS = [1, 3, 7, 16, 35, 70];
  function reviewCards() {
    const due = shuffle(dueCards());
    if (!due.length) return toast(allCards().length ? 'No cards due today' : 'Write notes with “question :: answer” lines to make cards');
    let i = 0, flipped = false;
    openSheet('Flashcards', '');
    const body = $('#sh-body'), foot = $('#sh-foot'); foot.hidden = false;
    function draw() {
      if (i >= due.length) { body.innerHTML = '<div class="pdfmsg"><b>Done for today.</b><br>' + due.length + ' cards reviewed.</div>'; foot.innerHTML = '<span class="grow"></span><button class="btn primary" id="fc-x">Close</button>'; $('#fc-x').onclick = closeSheet; render(); return; }
      const c = due[i];
      body.innerHTML = '<div class="q"><div class="tiny">' + (i + 1) + ' / ' + due.length + ' · ' + esc(C[c.c] ? C[c.c].short : '') + ' · ' + esc(c.t) + '</div><div class="card" style="min-height:160px;font-size:18px" id="fc"><div>' + esc(c.f) + '</div>' + (flipped ? '<hr style="border:0;border-top:1px solid var(--line);margin:14px 0"><div style="color:var(--accent)">' + esc(c.b) + '</div>' : '<div class="tiny" style="margin-top:30px">Say the answer, then tap to see it</div>') + '</div></div>';
      $('#fc').onclick = () => { flipped = true; draw(); };
      foot.innerHTML = flipped ? '<button class="btn grow" id="fc-no">Missed it</button><button class="btn primary grow" id="fc-ok">Knew it</button>' : '<span class="grow"></span><button class="btn primary" id="fc-show">Show answer</button>';
      if (flipped) {
        $('#fc-no').onclick = () => grade(false); $('#fc-ok').onclick = () => grade(true);
      } else $('#fc-show').onclick = () => { flipped = true; draw(); };
    }
    function grade(ok) {
      const c = due[i], s = S.cards[c.id] || { k: -1 };
      const k = ok ? Math.min(STEPS.length - 1, s.k + 1) : 0;
      S.cards[c.id] = { k, due: addDays(TODAY, ok ? STEPS[k] : 1) };
      save(); i++; flipped = false; draw();
    }
    draw();
  }

  // ---------- explain on demand ----------
  function openExplain(cid, u) {
    const c = C[cid], url = u.cut ? raw(u.cut) : u.src ? raw(u.src) : '';
    const src = url ? ' Source pages: ' + url + (u.pg ? ' (book pages ' + u.pg[0] + '–' + u.pg[1] + ' of the module PDF)' : '') + '.' : '';
    const ctx = 'GATE DA (Data Science & AI) topic "' + u.t + '" from ' + c.name + ', module ' + u.m + '.' + src + (u.why && /asked/.test(u.why) ? ' It was ' + u.why.replace(/\[.*?\]/, '') + '.' : '');
    const P = [
      ['Explainer video', '/explain-html-video-math Make a 60–90 second vertical explainer for ' + ctx + ' Build the intuition first, then the one formula or algorithm GATE tests, then one worked GATE-style example.'],
      ['Mini game / simulation', 'Build one self-contained mobile HTML mini-game that teaches ' + ctx + ' The player must use the idea to win; 5 short rounds with instant feedback and a one-line explanation after each round.'],
      ['Walkthrough + practice', 'Teach me ' + ctx + ' in 5 short steps, checking my understanding after each step. Then give me 5 GATE-level questions (MCQ, MSQ and NAT), one at a time; wait for my answer and give instant feedback with the shortest correct method.'],
      ['Smart notes draft', 'Write exam notes for ' + ctx + ' in this format: 1) the idea in one line; 2) 6–10 flashcard lines as "question :: answer"; 3) one fully worked example; 4) the most common trap. Keep it short.'],
    ];
    openSheet('Explain · ' + u.t, '<div class="q"><p class="small muted">Pick a format. “Open in Claude” starts a chat with the prompt filled in; “Copy” lets you paste it anywhere (or into Claude Code for the video skill).</p>' +
      P.map(([t, p], i) => '<div class="card"><b>' + t + '</b><p class="small muted" style="max-height:4.5em;overflow:hidden">' + esc(p) + '</p><div class="row"><a class="btn sm primary" target="_blank" rel="noopener" href="https://claude.ai/new?q=' + encodeURIComponent(p) + '">Open in Claude</a><button class="btn sm" data-cp="' + i + '">Copy</button></div></div>').join('') + '</div>');
    $('#sh-body').querySelectorAll('[data-cp]').forEach((b) => (b.onclick = async () => { try { await navigator.clipboard.writeText(P[+b.dataset.cp][1]); toast('Copied'); } catch (e) { prompt('Copy this', P[+b.dataset.cp][1]); } }));
  }
  function openRevision(cid) {
    const c = C[cid];
    const wrong = mistakes().filter((id) => Q[id].c === cid);
    const notes = Object.entries(S.notes).filter(([, n]) => n.c === cid);
    openSheet('Revise · ' + c.short, '<div class="q"><ol class="steps"><li>Read the revision bullets and your notes below.</li><li>Redo your wrong questions (' + wrong.length + ').</li><li>Review this course’s flashcards.</li></ol>' +
      '<div class="row wrap" style="margin:10px 0"><button class="btn sm primary" id="rv-w">Redo mistakes</button><button class="btn sm" id="rv-c">Flashcards</button></div>' +
      (c.rev.length ? '<h2>Revision bullets</h2><ul class="small">' + c.rev.map((r) => '<li>' + esc(r) + '</li>').join('') + '</ul>' : '') +
      '<h2>Your notes</h2>' + (notes.length ? notes.map(([, n]) => '<div class="card small"><b>' + esc(n.t) + '</b><div>' + esc(n.idea || '') + '</div><pre style="white-space:pre-wrap;font:inherit">' + esc(n.keys || '') + '</pre>' + (n.trap ? '<div style="color:var(--bad)">Trap: ' + esc(n.trap) + '</div>' : '') + '</div>').join('') : '<p class="muted small">No notes written for this course.</p>') + '</div>');
    $('#rv-w').onclick = () => (wrong.length ? quiz({ title: 'Mistakes · ' + c.short, qids: wrong, mode: 'practice' }) : toast('No mistakes in this course'));
    $('#rv-c').onclick = reviewCards;
  }

  // ---------- resources explorer ----------
  let PATH = [];
  function vFiles(v) {
    let node = D.tree; for (const i of PATH) node = node.k[i];
    const term = (vFiles.q || '').trim().toLowerCase();
    let h = '<h1>Resources</h1><p class="small muted">Every PDF in the plan: view in the app, or download to keep. Opened files are kept for offline use.</p>' +
      '<input type="search" id="fsearch" placeholder="Search files (e.g. eigen, joins, 2025)" value="' + esc(vFiles.q || '') + '" style="margin:8px 0">';
    let list = [];
    if (term) {
      const walk = (n, trail) => n.k.forEach((k) => (k.k ? walk(k, trail.concat(k.n)) : (k.n + ' ' + trail.join(' ')).toLowerCase().includes(term) && list.push({ f: k, trail })));
      walk(D.tree, []);
      list = list.slice(0, 80);
      h += '<div class="tiny">' + list.length + ' result' + (list.length === 1 ? '' : 's') + (list.length === 80 ? ' (first 80)' : '') + '</div><div class="card">' + list.map((r, i) => fileRow(r.f, i, r.trail.join(' › '))).join('') + '</div>';
    } else {
      h += '<div class="crumbs"><button data-crumb="-1">All</button>' + PATH.map((p, i) => { let n = D.tree; for (const j of PATH.slice(0, i + 1)) n = n.k[j]; return '<span>›</span><button data-crumb="' + i + '">' + esc(n.n) + '</button>'; }).join('') + '</div>';
      h += '<div class="card">' + node.k.map((k, i) => (k.k ? dirRow(k, i) : fileRow(k, i))).join('') + '</div>';
      list = node.k.map((k) => ({ f: k }));
    }
    v.innerHTML = h;
    const fs = $('#fsearch');
    fs.oninput = () => { vFiles.q = fs.value; const pos = fs.selectionStart; render(); const n = $('#fsearch'); n.focus(); n.setSelectionRange(pos, pos); };
    v.querySelectorAll('[data-crumb]').forEach((b) => (b.onclick = () => { PATH = PATH.slice(0, +b.dataset.crumb + 1); render(); }));
    v.querySelectorAll('[data-dir]').forEach((b) => (b.onclick = () => { PATH.push(+b.dataset.dir); render(); window.scrollTo(0, 0); }));
    v.querySelectorAll('[data-file]').forEach((b) => (b.onclick = () => { const f = list[+b.dataset.file].f; PDFV.open(raw(f.p), f.n.replace(/\.pdf$/, '')); }));
    v.querySelectorAll('[data-dl]').forEach((b) => (b.onclick = async (ev) => { ev.stopPropagation(); const f = list[+b.dataset.dl].f; toast('Downloading…'); await PDFV.saveFile(raw(f.p), f.n.endsWith('.pdf') ? f.n : f.n + '.pdf'); }));
    v.querySelectorAll('[data-off]').forEach(async (el) => { const f = list[+el.dataset.off].f; if (await PDFV.isCached(raw(f.p))) el.textContent = ' · offline ✓'; });
  }
  const count = (n) => (n.k ? n.k.reduce((s, k) => s + count(k), 0) : 1);
  const size = (b) => (b > 1048576 ? (b / 1048576).toFixed(1) + ' MB' : Math.max(1, Math.round(b / 1024)) + ' KB');
  function dirRow(k, i) { return '<div class="ent" data-dir="' + i + '"><span class="ic dir">▸</span><div class="grow"><div class="nm">' + esc(k.n) + '</div><div class="tiny">' + count(k) + ' files</div></div></div>'; }
  function fileRow(f, i, trail) {
    return '<div class="ent" data-file="' + i + '"><span class="ic pdf">PDF</span><div class="grow"><div class="nm">' + esc(f.n.replace(/\.pdf$/, '')) + '</div><div class="tiny">' + (trail ? esc(trail) + ' · ' : '') + size(f.s) + (f.pg ? ' · ' + f.pg + ' pp' : '') + '<span data-off="' + i + '"></span></div></div>' +
      '<button class="iconbtn" data-dl="' + i + '" aria-label="Download"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg></button></div>';
  }

  // ---------- progress & settings ----------
  function vMe(v) {
    const I = items();
    const doneItems = Object.keys(S.done).map((id) => I.byId[id]).filter(Boolean);
    const mins = doneItems.reduce((s, x) => s + x.min, 0) + Object.values(S.parts).flat().filter((p) => p).reduce((s, p) => s + p.min, 0);
    const days = new Set(Object.values(S.done)); Object.values(S.parts).flat().forEach((p) => days.add(p.d));
    let streak = 0; for (let d = days.has(TODAY) ? TODAY : addDays(TODAY, -1); days.has(d); d = addDays(d, -1)) streak++;
    const att = Object.values(S.att), acc = att.length ? Math.round((att.filter((a) => a.last).length / att.length) * 100) : 0;
    let h = '<h1>Progress</h1><div class="stat" style="margin:10px 0"><div><b>' + hm(mins) + '</b><span class="tiny">studied</span></div><div><b>' + streak + '</b><span class="tiny">day streak</span></div><div><b>' + (att.length ? acc + '%' : '–') + '</b><span class="tiny">' + att.length + ' questions</span></div></div>';
    h += '<div class="card">' + D.courses.map((c) => {
      const us = c.units.filter((u) => tierOk(u.tier)); const dn = us.filter((u) => S.done['u:' + u.id]).length;
      const qa = Object.entries(S.att).filter(([id]) => Q[id] && Q[id].c === c.id); const ok = qa.filter(([, a]) => a.last).length;
      return '<div style="margin:8px 0;--c:var(--' + c.id + ')"><div class="row small"><span class="dot"></span><span class="grow">' + esc(c.short) + '</span><span class="tiny">' + dn + '/' + us.length + ' units' + (qa.length ? ' · ' + ok + '/' + qa.length + ' right' : '') + '</span></div><div class="bar" style="margin-top:4px"><i style="width:' + (us.length ? (dn / us.length) * 100 : 0) + '%"></i></div></div>';
    }).join('') + '</div>';
    const tests = Object.entries(S.tests).sort((a, b) => (a[1].d < b[1].d ? 1 : -1)).slice(0, 12);
    if (tests.length) h += '<h2>Recent tests</h2><div class="card small">' + tests.map(([id, t]) => { const x = I.byId[id]; return '<div class="row" style="padding:4px 0"><span class="grow">' + esc(x ? (C[x.c] ? C[x.c].short + ' · ' : '') + label(x) : id.replace(/^(full|free):/, '')) + '</span><b>' + t.score + '/' + t.max + '</b><span class="tiny">&nbsp;' + nice(t.d) + '</span></div>'; }).join('') + '</div>';
    h += '<h2>Settings</h2><div class="card"><label class="field"><span>GATE DA exam date (the DA paper day is not out yet; GATE 2027 days are 6, 7, 13, 14, 20, 21 Feb)</span><input type="date" id="exam" data-testid="exam-date" value="' + S.set.exam + '"></label>' +
      '<label class="row"><input type="checkbox" id="incB" ' + (S.set.includeB ? 'checked' : '') + '><span class="small">Plan tier B units (some exam evidence)</span></label>' +
      '<label class="row" style="margin-top:8px"><input type="checkbox" id="incC" ' + (S.set.includeC ? 'checked' : '') + '><span class="small">Plan tier C units too (no evidence; only if time allows)</span></label>' +
      '<label class="field"><span>Theme</span><select id="theme"><option value="">Match the phone</option><option value="light">Light</option><option value="dark">Dark</option></select></label></div>' +
      weekEditor() +
      '<div class="card"><b>Backup</b><p class="tiny">Progress is stored on this device. Export to keep a copy or move to another phone.</p><div class="row wrap"><button class="btn sm" id="exp" data-testid="export-btn">Export progress</button><label class="btn sm">Import<input type="file" id="imp" accept="application/json" hidden data-testid="import-input"></label><button class="btn sm" id="expn">Export notes (.md)</button><button class="btn sm ghost" id="rst" style="color:var(--bad)">Reset</button></div></div>' +
      '<p class="tiny">Built ' + D.built + ' · ' + D.questions.length + ' questions · topic PDFs from GitHub (SSC-FILES).</p>';
    v.innerHTML = h;
    $('#exam').onchange = (e) => { if (e.target.value) { S.set.exam = e.target.value; save(); invalidate(); toast('Plan refitted to ' + nice(S.set.exam)); } };
    $('#incB').onchange = (e) => { S.set.includeB = e.target.checked; save(); invalidate(); toast('Plan refitted'); };
    $('#incC').onchange = (e) => { S.set.includeC = e.target.checked; save(); invalidate(); toast('Plan refitted'); };
    $('#theme').value = S.theme || ''; $('#theme').onchange = (e) => { S.theme = e.target.value; save(); applyTheme(); };
    $('#exp').onclick = () => dl('gate-v3-progress-' + TODAY + '.json', JSON.stringify(S, null, 1), 'application/json');
    $('#imp').onchange = async (e) => { try { const s = JSON.parse(await e.target.files[0].text()); if (!s.set) throw 0; S = Object.assign(structuredClone(DEF), s); save(); invalidate(); render(); toast('Imported'); } catch (er) { toast('Not a progress file'); } };
    $('#expn').onclick = () => dl('gate-notes-' + TODAY + '.md', Object.values(S.notes).map((n) => '## ' + (n.t || '') + '\n\n' + (n.idea ? '**Idea:** ' + n.idea + '\n\n' : '') + (n.keys ? n.keys.split('\n').map((l) => '- ' + l).join('\n') + '\n\n' : '') + (n.ex ? '**Example:**\n' + n.ex + '\n\n' : '') + (n.trap ? '**Trap:** ' + n.trap + '\n' : '')).join('\n'), 'text/markdown');
    $('#rst').onclick = () => { if (confirm('Erase all progress, notes and cards on this device?')) { S = structuredClone(DEF); save(); invalidate(); render(); } };
    bindWeek(v);
  }
  function dl(name, text, type) { const u = URL.createObjectURL(new Blob([text], { type })); const a = document.createElement('a'); a.href = u; a.download = name; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(u), 3000); }

  // ---------- sheet + misc ----------
  let onSheetClose = null;
  function openSheet(title, html, extra) {
    if (onSheetClose) { const f = onSheetClose; onSheetClose = null; f(); }
    const sh = $('#sheet');
    $('#sh-title').textContent = title; $('#sh-body').innerHTML = html; $('#sh-extra').innerHTML = extra || '';
    $('#sh-foot').hidden = true; $('#sh-foot').innerHTML = '';
    if (sh.hidden) { history.pushState({ sheet: 1 }, ''); }
    sh.hidden = false; document.body.style.overflow = 'hidden'; $('#sh-body').scrollTop = 0;
  }
  function closeSheet() { if (!$('#sheet').hidden) history.back(); }
  function realClose() {
    const sh = $('#sheet'); if (sh.hidden) return;
    sh.hidden = true; document.body.style.overflow = '';
    if (onSheetClose) { const f = onSheetClose; onSheetClose = null; f(); }
    render();
  }
  window.addEventListener('popstate', () => { if (!$('#pdf-sheet').hidden) PDFV.close(); else realClose(); });
  let tt = null;
  function toast(m) { const t = $('#toast'); t.textContent = m; t.classList.add('on'); clearTimeout(tt); tt = setTimeout(() => t.classList.remove('on'), 1800); }
  function applyTheme() { if (S.theme) document.documentElement.dataset.theme = S.theme; else delete document.documentElement.dataset.theme; }

  // ---------- boot ----------
  applyTheme();
  PDFV.init();
  $('#sh-close').onclick = closeSheet;
  document.querySelectorAll('nav.tabs button').forEach((b) => (b.onclick = () => { TAB = b.dataset.tab; render(); window.scrollTo(0, 0); }));
  try { const t = sessionStorage.getItem('gv3-tab'); if (t) TAB = t; } catch (e) {}
  window.addEventListener('pagehide', () => { try { sessionStorage.setItem('gv3-tab', TAB); } catch (e) {} });
  document.addEventListener('visibilitychange', () => { if (!document.hidden && !new URLSearchParams(location.search).get('today')) { const t = iso(new Date()); if (t !== TODAY) { TODAY = t; PLAN = null; render(); } } });
  window.__setToday = (d) => { TODAY = d; PLAN = null; render(); };
  window.__plan = () => plan();
  window.__state = () => S;
  render();
})();
