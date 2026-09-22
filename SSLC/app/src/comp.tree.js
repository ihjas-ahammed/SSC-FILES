/* ══════════════════════════════════════════════════════════════════════════
   The syllabus tree — and, since Level 4, the reader as well.

   Course → module → section → concept, each row carrying a tick you can press
   and a ring showing how much of what is underneath is done. Opening a concept
   no longer leaves for a page of its own: the note unfolds in place, and its
   proof, its exercises and its questions unfold inside that. One scroll, from
   the course title to the last exercise.

   EXACTLY ONE THING IS OPEN AT EACH DEPTH. Opening a section closes the
   section that was open; opening a note closes the note that was open. The
   tree is a place you are, not a pile you have accumulated — which is the only
   way a three-deep tree of two hundred concepts stays navigable on a phone.
   That single open path is stored, so closing the app and coming back lands
   you where you left off (see `scrollToOpen`).

   Colour is the whole vocabulary. A row is RED once everything under it has
   been read, AMBER once every proof under it has been worked, GREEN once every
   section exercise under it is done. A course can go one further: VIOLET, level
   4, once its past exam papers are worked through too.
   ══════════════════════════════════════════════════════════════════════════ */

const Tree = (function () {

  const el = DOM.el;
  const KEY = 'open4';
  const LEGACY = 'open';
  const DEPTH = ['course', 'mod', 'sec', 'concept'];

  /* ── the one open path ────────────────────────────────────────────────── */
  function readPath() {
    const p = Store.pref(KEY, null);
    if (p && typeof p === 'object') return p;

    /* Levels 1–3 stored a map of every open id. Keep the first of each kind
       so an upgrade lands somewhere familiar rather than fully collapsed. */
    const old = Store.pref(LEGACY, null);
    if (!old || typeof old !== 'object') return null;
    const out = {};
    Object.keys(old).forEach(function (k) {
      if (k.indexOf('course-') === 0 && !out.course) out.course = k.slice(7);
      else if (k.indexOf('mod-') === 0 && !out.mod) out.mod = k.slice(4);
      else if (k.indexOf('sec-') === 0 && !out.sec) out.sec = k.slice(4);
    });
    Store.setPref(KEY, out);
    return out;
  }

  let openPath = null;
  const path = () => (openPath || (openPath = readPath() || {}));
  function savePath(p) {
    openPath = p;
    Store.setPref(KEY, p);
  }

  /* Setting a slot clears everything deeper than it: opening a different
     section cannot leave the previous section's note hanging open. */
  function setSlot(kind, id, on) {
    const p = Object.assign({}, path());
    const i = DEPTH.indexOf(kind);
    p[kind] = on ? id : null;
    if (kind === 'pyq') { if (on) { p.mod = null; p.sec = null; p.concept = null; } }
    else {
      p.pyq = null;
      DEPTH.slice(i + 1).forEach(function (k) { p[k] = null; });
    }
    savePath(p);
  }

  const isOpen = (kind, id) => path()[kind] === id;

  /* ── in-place mark repainting ────────────────────────────────────────────
     A tick pressed inside an open note must not rebuild the tree — that would
     tear the note out from under the person using it. So every row registers
     how to repaint its own tick and ring, and a change just runs the list. */
  let marks = [];
  const registerMark = fn => { marks.push(fn); fn(); };
  function refresh() {
    Progress.dropCache();
    marks.forEach(function (fn) { try { fn(); } catch (e) { /* never break a repaint */ } });
  }

  /* ── pieces ───────────────────────────────────────────────────────────── */

  function tickButton(getState, onPress) {
    const btn = el('button', { class: 'tick', type: 'button', role: 'checkbox' },
      [el('i', { 'aria-hidden': 'true' })]);
    registerMark(function () {
      const s = getState();
      btn.setAttribute('aria-checked', s.state);
      btn.setAttribute('data-lv', String(s.lv || 0));
      btn.setAttribute('aria-label', s.label);
      const i = btn.firstChild;
      DOM.clear(i);
      i.appendChild(DOM.mi(
        s.state === 'mixed' ? 'remove' : s.lv >= 4 ? 'military_tech' : s.lv >= 3 ? 'workspace_premium' : 'check',
        'xs'));
    });
    btn.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); onPress(); });
    return btn;
  }

  const staticTick = glyph => el('span', { class: 'tick', 'aria-hidden': 'true' },
    [el('i', { style: { borderStyle: 'dashed' } }, [DOM.mi(glyph, 'xs')])]);

  /* A ring that repaints itself in place. */
  function ring(getCount, label) {
    const host = el('span', { class: 'ringhost' });
    registerMark(function () {
      DOM.clear(host);
      host.appendChild(UI.levelRing(getCount(), label));
    });
    return host;
  }

  let ctxOpenAccs = new Set();
  let isInitialPaint = true;

  function accordion(nid, open, kids, ctx) {
    const inner = el('div', { class: 'acc-in' }, [el('div', { class: 'acc-pad' }, kids)]);
    const acc = el('div', { class: 'acc', id: 'acc-' + nid }, [inner]);
    if (open) {
      const wasOpen = ctx && ctx.wasOpen ? ctx.wasOpen('acc-' + nid) : ctxOpenAccs.has('acc-' + nid);
      const isInit = ctx && typeof ctx.isInitial === 'boolean' ? ctx.isInitial : isInitialPaint;
      if (wasOpen || isInit || DOM.reduced()) {
        acc.classList.add('open');
      } else {
        window.requestAnimationFrame(() => acc.classList.add('open'));
      }
    }
    return acc;
  }

  function toggler(nid, open, kids, onToggle) {
    const btn = el('button', {
      class: 'tlabel', type: 'button',
      'aria-expanded': String(open), 'aria-controls': 'acc-' + nid
    }, kids);
    btn.addEventListener('click', function () { onToggle(!open); });
    return btn;
  }

  /* ── the cascade offer ────────────────────────────────────────────────── */
  function offerCascade(c) {
    const pending = Progress.pendingPrereqs(c.id);
    if (!pending.length) return;
    const names = pending.slice(0, 5).map(x => '· ' + x.title).join('\n') +
      (pending.length > 5 ? '\n· and ' + (pending.length - 5) + ' more' : '');
    const ask = pending.length + ' ' + DOM.plural(pending.length, 'prerequisite') +
      ' of "' + c.title + '" ' + DOM.plural(pending.length, 'has', 'have') +
      ' not been read yet:\n\n' + names + '\n\nMark them as read too?';
    if (!window.confirm(ask)) return;
    const n = Progress.raisePrereqs(c.id);
    DOM.announce('Marked ' + n + ' ' + DOM.plural(n, 'prerequisite') + ' as read.');
  }

  /* ── a concept: one row, and the whole note under it ─────────────────── */
  function conceptRow(c, ctx) {
    const isMl = (typeof I18N !== 'undefined') && I18N.lang() === 'ml';
    const nid = 'c-' + c.id;
    const open = isOpen('concept', c.id);
    const isExt = Pool.isExt(c);
    const extNote = isExt ? (isMl ? ' (പാഠ്യപദ്ധതിക്ക് പുറത്ത്)' : ' (outside syllabus)') : '';

    /* The row exists before anything that repaints it: a mark closure runs
       the moment it is registered, and a half-built row is a crash. */
    const row = el('div', { class: 'crow' });

    const tick = tickButton(function () {
      const lv = Progress.level(c.id);
      return {
        state: lv >= 1 ? 'true' : 'false', lv: lv,
        label: lv === 0
          ? (isMl ? ('"' + c.title + '" വായിച്ചതായി അടയാളപ്പെടുത്തുക' + extNote) : ('Mark "' + c.title + '" as read' + extNote))
          : lv === 1
            ? (isMl ? ('"' + c.title + '"-ന്റെ തെളിവ് പൂർത്തിയായതായി അടയാളപ്പെടുത്തുക' + extNote) : ('Mark the proof of "' + c.title + '" as complete' + extNote))
            : (isMl ? ('"' + c.title + '" ഒഴിവാക്കുക') : ('Clear "' + c.title + '"'))
      };
    }, function () {
      const was = Progress.level(c.id);
      Progress.advance(c.id);
      if (was === 0) offerCascade(c);
      refresh();
    });

    const tag = el('span', { class: 'lvtags' });
    registerMark(function () {
      const lv = Progress.level(c.id);
      DOM.clear(tag);
      if (lv === 1 && Progress.hasProof(c.id)) {
        tag.appendChild(el('span', { class: 'lvtag', 'data-lv': '1', text: isMl ? 'തെളിവ് ചെയ്യാനുണ്ട്' : 'proof owed' }));
      } else if (lv >= 2) {
        tag.appendChild(el('span', { class: 'lvtag', 'data-lv': String(lv), text: 'L' + lv }));
      }
      row.setAttribute('data-lv', String(lv));
    });

    const body = open ? NoteBody.build(c, {
      onChange: refresh,
      onComplete: function (next) {
        if (next) revealPath(next.id);
        else setSlot('concept', c.id, false);
        ctx.repaint({ scroll: !!next, isNote: !!next });
      }
    }) : null;

    const acc = accordion(nid, open, body ? [body] : [], ctx);

    const kindLabel = (typeof I18N !== 'undefined') ? I18N.kind(c.kind) : c.kind;

    const label = toggler(nid, open, [
      el('span', { class: 'tt' }, [
        el('b', {}, [
          el('span', { text: c.title }),
          isExt ? el('span', { class: 'badge warn', text: isMl ? 'പാഠ്യപദ്ധതിക്ക് പുറത്ത്' : 'outside syllabus' }) : null
        ]),
        el('span', { text: kindLabel + ' · ' + c.oneLine })
      ]),
      tag,
      DOM.icon('chev', 18, 'chev')
    ], function (on) {
      setSlot('concept', c.id, on);
      ctx.repaint({ scroll: on, isNote: true });
    });

    DOM.add(row, [tick, label]);
    const node = el('div', { class: 'cnode' + (open ? ' open' : ''), 'data-cid': c.id }, [row, acc]);
    if (open) ctx.target = node;
    return node;
  }

  /* ── a section ────────────────────────────────────────────────────────── */
  function sectionNode(s, ctx) {
    const isMl = (typeof I18N !== 'undefined') && I18N.lang() === 'ml';
    const ids = s.concepts.map(c => c.id);
    const nid = 'sec-' + s.sec;
    const open = isOpen('sec', s.sec);
    const isExt = Pool.isExtSec(s.sec);
    const tasks = Progress.secTaskState(s.sec);

    const acc = accordion(nid, open, open
      ? (s.concepts.length
        ? [el('div', { class: 'stack', style: { gap: '6px' } }, s.concepts.map(c => conceptRow(c, ctx)))]
        : [el('p', { class: 'small muted', style: { margin: '4px 2px' },
            text: isMl ? 'ഈ ഭാഗത്തിൽ ആശയങ്ങൾ ഉൾപ്പെടുത്തിയിട്ടില്ല.' : 'No concepts loaded for this section yet.' })])
      : [], ctx);

    const conceptsWord = isMl ? 'ആശയങ്ങൾ' : DOM.plural(s.concepts.length, 'concept');
    const exercisesWord = isMl ? 'പരിശീലനം' : 'exercises';

    const node = el('div', { class: 'tnode sub sec' + (open ? ' open' : '') }, [
      el('div', { class: 'trow' }, [
        tickButton(function () {
          const cnt = Progress.count(ids);
          return { state: Progress.tickState(ids), lv: cnt.min,
            label: isMl
              ? ('§' + s.sec + ' മുഴുവൻ മുന്നോട്ട് കൊണ്ടുപോകുക' + (isExt ? ' (പാഠ്യപദ്ധതിക്ക് പുറത്ത്)' : ''))
              : ('Advance all of §' + s.sec + (isExt ? ' (outside syllabus)' : '')) };
        }, function () {
          const to = Progress.advanceMany(ids);
          DOM.announce(to ? (isMl ? ('ഭാഗം ലെവൽ ' + to + ' ആയി.') : ('Section at level ' + to + '.')) : (isMl ? 'ഭാഗം ഒഴിവാക്കി.' : 'Section cleared.'));
          refresh();
        }),
        toggler(nid, open, [
          el('span', { class: 'tt' }, [
            el('b', {}, [
              el('span', { text: '§' + s.sec + '  ' + s.title }),
              isExt ? el('span', { class: 'badge warn', text: isMl ? 'പാഠ്യപദ്ധതിക്ക് പുറത്ത്' : 'outside syllabus' }) : null
            ]),
            el('span', { text: s.concepts.length + ' ' + conceptsWord +
              (tasks.total ? ' · ' + tasks.done + '/' + tasks.total + ' ' + exercisesWord : '') +
              (isExt ? (isMl ? ' · പാഠ്യപദ്ധതിക്ക് പുറത്ത്' : ' · outside syllabus') : '') })
          ]),
          ring(() => Progress.count(ids), '§' + s.sec),
          DOM.icon('chev', 20, 'chev')
        ], function (on) {
          setSlot('sec', s.sec, on);
          ctx.repaint({ scroll: false });
        })
      ]),
      acc
    ]);
    if (open && !ctx.target) ctx.target = node;
    return node;
  }

  /* ── a module ─────────────────────────────────────────────────────────── */
  function moduleNode(course, mod, ctx) {
    if (mod.pending) return pendingNode(mod, ctx);

    const isMl = (typeof I18N !== 'undefined') && I18N.lang() === 'ml';
    const secs = Pool.sections(course.id).filter(s => (mod.secs || []).indexOf(s.sec) >= 0);
    const isExtMod = !!mod.ext;
    const countSecs = isExtMod ? secs : secs.filter(s => !Pool.isExtSec(s.sec));
    const ids = countSecs.reduce((acc, s) => acc.concat(s.concepts.map(c => c.id)), []);
    const nid = 'mod-' + mod.id;
    const open = isOpen('mod', mod.id);

    const extCount = secs.filter(s => Pool.isExtSec(s.sec)).length;
    const secsWord = isMl ? 'ഭാഗങ്ങൾ' : DOM.plural(countSecs.length, 'section');
    const marksWord = isMl ? 'മാർക്ക്' : 'marks';

    const subtitleText = isExtMod
      ? (secs.length + ' ' + secsWord + (isMl ? ' · പാഠ്യപദ്ധതിക്ക് പുറത്ത്' : ' · outside syllabus'))
      : ((mod.marks ? mod.marks + ' ' + marksWord + ' · ' : '') +
         countSecs.length + ' ' + secsWord +
         (extCount ? (isMl ? ' (+' + extCount + ' പുറത്ത്)' : ' (+' + extCount + ' outside syllabus)') : ''));

    const modPrefix = isExtMod || mod.n === '+' || mod.n === 'Ext'
      ? (isMl ? 'അധികഭാഗം' : 'Extension')
      : (mod.n && mod.n.indexOf('E') === 0 ? ((isMl ? 'വിഷയം ' : 'Topic ') + mod.n) : ((isMl ? 'അദ്ധ്യായം ' : 'Module ') + mod.n));
    const modHeading = modPrefix + ' · ' + mod.title;

    const acc = accordion(nid, open, open
      ? [el('div', {}, secs.map(s => sectionNode(s, ctx)))] : [], ctx);

    const node = el('div', { class: 'tnode' + (open ? ' open' : '') }, [
      el('div', { class: 'trow' }, [
        tickButton(function () {
          const cnt = Progress.count(ids);
          return { state: Progress.tickState(ids), lv: cnt.min,
            label: isMl
              ? (mod.title + '-ലെ എല്ലാ ആശയങ്ങളും മുന്നോട്ട് കൊണ്ടുപോകുക')
              : ('Advance every syllabus note of ' + (isExtMod ? mod.title : 'module ' + mod.n)) };
        }, function () {
          const to = Progress.advanceMany(ids);
          DOM.announce(to ? ((isExtMod ? mod.title : (isMl ? 'അദ്ധ്യായം ' : 'Module ') + mod.n) + (isMl ? (' ലെവൽ ' + to + ' ആയി.') : (' at level ' + to + '.'))) : (isMl ? 'ഒഴിവാക്കി.' : 'Cleared.'));
          refresh();
        }),
        toggler(nid, open, [
          el('span', { class: 'tt' }, [
            el('b', {}, [
              el('span', { text: modHeading }),
              isExtMod ? el('span', { class: 'badge warn', text: isMl ? 'പാഠ്യപദ്ധതിക്ക് പുറത്ത്' : 'outside syllabus' }) : null
            ]),
            el('span', { text: subtitleText })
          ]),
          ring(() => Progress.count(ids), isExtMod ? mod.title : (isMl ? 'അദ്ധ്യായം ' : 'Module ') + mod.n),
          DOM.icon('chev', 20, 'chev')
        ], function (on) {
          setSlot('mod', mod.id, on);
          ctx.repaint({ scroll: false });
        })
      ]),
      acc
    ]);
    if (open && !ctx.target) ctx.target = node;
    return node;
  }

  function pendingNode(mod, ctx) {
    const nid = 'pend-' + mod.id;
    const open = isOpen('mod', mod.id);
    const builds = (mod.builds || []).map(function (id) {
      const c = Pool.concept(id);
      return c ? el('a', { class: 'chip', href: Router.href('note/' + id), text: c.title })
        : el('span', { class: 'chip ghost', text: id });
    });
    const acc = accordion(nid, open, [el('div', { style: { padding: '0 2px' } }, [
      mod.why ? el('p', { class: 'small muted', style: { margin: '2px 0 8px' }, text: mod.why }) : null,
      builds.length ? el('div', {}, [
        el('div', { class: 'kicker', style: { marginBottom: '6px' }, text: 'Will build on' }),
        el('div', { class: 'row' }, builds)
      ]) : null
    ])], ctx);
    const modHeading = (mod.n && mod.n.indexOf('E') === 0 ? 'Topic ' + mod.n : mod.n) + ' · ' + mod.title;
    return el('div', { class: 'tnode sub sec' }, [
      el('div', { class: 'trow' }, [
        staticTick('hourglass_empty'),
        toggler(nid, open, [
          el('span', { class: 'tt' }, [
            el('b', {}, [
              el('span', { text: modHeading }),
              el('span', { class: 'badge warn', text: 'pending' })
            ]),
            el('span', { text: 'not delivered yet' })
          ]),
          DOM.icon('chev', 20, 'chev')
        ], function (on) { setSlot('mod', mod.id, on); ctx.repaint({ scroll: false }); })
      ]),
      acc
    ]);
  }

  /* ── level 4: the course's past papers ───────────────────────────────────
     A JAM question is set on the subject, not on a Bartle section, so it
     cannot hang off a note. It hangs off the COURSE — a sibling of the
     modules, and the last thing between a green course and a finished one. */
  function pyqNode(course, ctx) {
    const qs = Pool.pyq(course.id);
    const nid = 'pyq-' + course.id;
    const open = isOpen('pyq', course.id);

    if (!qs.length) {
      return el('div', { class: 'tnode sub sec' }, [
        el('div', { class: 'trow' }, [
          staticTick('hourglass_empty'),
          el('span', { class: 'tlabel', style: { cursor: 'default' } }, [
            el('span', { class: 'tt' }, [
              el('b', { text: (typeof I18N !== 'undefined' && I18N.lang() === 'ml') ? 'മുൻവർഷ പരീക്ഷാ ചോദ്യങ്ങൾ' : 'Past exam papers' }),
              el('span', { text: (typeof I18N !== 'undefined' && I18N.lang() === 'ml') ? ('ലഭ്യമായിട്ടില്ല · ലെവൽ 3: ' + course.title) : ('not delivered yet · level 3 of ' + course.title) })
            ]),
            el('span', { class: 'badge warn', text: (typeof I18N !== 'undefined' && I18N.lang() === 'ml') ? 'ബാക്കിയുണ്ട്' : 'pending' })
          ])
        ])
      ]);
    }

    /* grouped by paper, newest first — Pool already sorted them that way */
    function years() {
      const seen = [], by = {};
      qs.forEach(function (q) {
        const k = (q.year || '—') + (q.paper ? ' ' + q.paper : '');
        if (!by[k]) { by[k] = []; seen.push(k); }
        by[k].push(q);
      });
      return seen.map(k => ({ label: k, list: by[k] }));
    }

    function questionCard(q) {
      const mark = el('span', { class: 'ix' });
      function paintMark() {
        const on = Progress.pyqDone(q);
        mark.className = 'ix' + (on ? ' ok' : '');
        DOM.clear(mark);
        mark.appendChild(DOM.mi(on ? 'check' : 'radio_button_unchecked', 'xs'));
      }
      paintMark();

      return NoteBody.expander({
        cls: 'exp-q',
        mark: mark,
        title: (q.exam || 'PYQ') + ' ' + (q.year || '') + (q.qno ? ' · Q' + q.qno : ''),
        sub: (q.marks ? q.marks + ' ' + DOM.plural(q.marks, 'mark') : '')
          + (q.title ? ' · ' + q.title : ''),
        build: function () {
          /* quick OMR past question: once locked, marks p:id done and reveals full answer */
          if (q.options || q.type === 'MCQ' || q.type === 'MSQ' || q.type === 'NAT') {
            return [
              QuestionCard.build(q, {
                inNote: true,
                onLocked: function () {
                  Store.setProofDone('p:' + q.id, true);
                  paintMark();
                  refresh();
                }
              }),
              NoteBody.taskRow('p:' + q.id, { noun: 'question', onTick: function () {
                paintMark(); refresh();
              } })
            ];
          }

          const answerHost = el('div', { class: 'prose tight', style: { marginTop: '8px' }, hidden: true });
          let built = false;
          const showBtn = el('button', { class: 'chip', type: 'button', 'aria-expanded': 'false' },
            [DOM.mi('visibility', 'sm'), el('span', { class: 'lb', text: 'Show answer' })]);
          showBtn.addEventListener('click', function () {
            const on = answerHost.hidden;
            if (on && !built) {
              built = true;
              DOM.add(answerHost, [
                q.approach ? el('div', { html: q.approach }) : null,
                q.solution ? el('div', { html: q.solution }) : null,
                q.trap ? el('p', {}, [el('b', { text: 'Trap: ' }), el('span', { html: q.trap })]) : null
              ]);
              UI.math(answerHost);
            }
            answerHost.hidden = !on;
            showBtn.setAttribute('aria-expanded', String(on));
            showBtn.querySelector('.lb').textContent = on ? 'Hide answer' : 'Show answer';
          });

          return [
            el('div', { class: 'prose tight', html: q.prompt }),
            el('div', { class: 'row', style: { gap: '8px', marginTop: '10px' } }, [showBtn]),
            answerHost,
            NoteBody.taskRow('p:' + q.id, { noun: 'question', onTick: function () {
              paintMark(); refresh();
            } })
          ];
        }
      });
    }

    const acc = accordion(nid, open, open ? [el('div', { class: 'stack', style: { gap: '10px' } },
      years().map(function (grp) {
        return el('div', { class: 'stack', style: { gap: '6px' } }, [
          el('div', { class: 'kicker', text: grp.label }),
          el('div', { class: 'stack', style: { gap: '6px' } }, grp.list.map(questionCard))
        ]);
      }))] : [], ctx);

    const count = el('span', { class: 'count' });
    registerMark(function () {
      const st = Progress.pyqState(course.id);
      count.textContent = st.done + ' / ' + st.total;
    });

    const node = el('div', { class: 'tnode sub sec pyq' + (open ? ' open' : '') }, [
      el('div', { class: 'trow' }, [
        tickButton(function () {
          const st = Progress.pyqState(course.id);
          return {
            state: st.ready ? 'true' : (st.done ? 'mixed' : 'false'),
            lv: st.ready ? 4 : 0,
            label: st.ready ? 'Every past paper of ' + course.title + ' is complete'
              : 'Mark every past paper of ' + course.title + ' complete'
          };
        }, function () {
          const st = Progress.pyqState(course.id);
          const want = !st.ready;
          st.list.forEach(q => Store.setProofDone('p:' + q.id, want));
          Progress.dropCache();
          DOM.announce(want ? 'Every past paper marked complete.' : 'Past papers cleared.');
          ctx.repaint({});
        }),
        toggler(nid, open, [
          el('span', { class: 'tt' }, [
            el('b', { text: (typeof I18N !== 'undefined' && I18N.lang() === 'ml') ? 'മുൻവർഷ പരീക്ഷാ ചോദ്യങ്ങൾ' : 'Past exam papers' }),
            el('span', { text: (typeof I18N !== 'undefined' && I18N.lang() === 'ml') ? (qs.length + ' ചോദ്യങ്ങൾ · ഇവ പൂർത്തിയാക്കിയാൽ ലെവൽ 3') : (qs.length + ' ' + DOM.plural(qs.length, 'question') + ' · finishing them is level 3') })
          ]),
          count,
          DOM.icon('chev', 20, 'chev')
        ], function (on) { setSlot('pyq', course.id, on); ctx.repaint({ scroll: false }); })
      ]),
      acc
    ]);
    if (open && !ctx.target) ctx.target = node;
    return node;
  }

  /* ── a whole course ──────────────────────────────────────────────────── */
  function courseNode(course, ctx) {
    const ids = Pool.ids.concepts(course.id);
    const nid = 'course-' + course.id;
    const open = isOpen('course', course.id);

    const acc = accordion(nid, open, open ? [el('div', { class: 'rail' },
      (course.modules || []).map(mod => moduleNode(course, mod, ctx))
        .concat(course.pending || course.id === 'foundation' ? [] : [pyqNode(course, ctx)]))] : [], ctx);

    const node = el('div', { class: 'tnode' + (open ? ' open' : '') }, [
      el('div', { class: 'trow' }, [
        course.pending
          ? staticTick('hourglass_empty')
          : tickButton(function () {
              const lv = Progress.courseLevel(course.id);
              return { state: Progress.tickState(ids), lv: lv,
                label: 'Advance every note of ' + course.title };
            }, function () {
              const to = Progress.advanceMany(ids);
              DOM.announce(to ? course.title + ' at level ' + to + '.' : 'Course cleared.');
              refresh();
            }),
        toggler(nid, open, [
          el('span', { class: 'tt' }, [
            el('b', {}, [
              el('span', { text: course.title }),
              course.pending ? el('span', { class: 'badge warn', text: 'pending' }) : null
            ]),
            el('span', { text: course.pending ? course.blurb : course.code + ' · ' + course.blurb })
          ]),
          course.pending ? null : ring(() => Progress.count(ids), course.title),
          DOM.icon('chev', 20, 'chev')
        ], function (on) {
          setSlot('course', course.id, on);
          ctx.repaint({ scroll: false });
        })
      ]),
      acc
    ]);
    if (open && !ctx.target) ctx.target = node;
    return node;
  }

  /* ── mounting ─────────────────────────────────────────────────────────── */
  function painter(host, build) {
    let isInitial = true;

    function repaint(opts) {
      const o = opts || {};
      const keepY = window.scrollY;

      const currentlyOpenAccs = new Set();
      host.querySelectorAll('.acc.open').forEach(function (node) {
        if (node.id) currentlyOpenAccs.add(node.id);
      });
      ctxOpenAccs = currentlyOpenAccs;

      const prevH = host.offsetHeight;
      if (prevH > 0) host.style.minHeight = prevH + 'px';

      marks = [];
      const ctx = {
        repaint: repaint,
        target: null,
        isInitial: isInitial,
        wasOpen: function (accId) { return currentlyOpenAccs.has(accId); }
      };

      DOM.clear(host);
      host.appendChild(el('div', { class: 'tree' }, build(ctx)));

      window.requestAnimationFrame(function () {
        host.style.minHeight = '';
      });

      const openCid = path().concept;
      document.body.classList.toggle('note-open', !!openCid);
      const openC = openCid ? Pool.concept(openCid) : null;
      if (typeof Shell !== 'undefined' && Shell.setSubtitle) {
        Shell.setSubtitle(openC ? openC.title : '');
      }
      lastTarget = ctx.target;

      if (o.scroll && o.isNote && ctx.target) {
        scrollToNote(ctx.target);
      } else if (o.scroll && ctx.target) {
        scrollTo(ctx.target);
      } else if (o.restore !== false) {
        window.scrollTo(0, keepY);
      }

      isInitial = false;
      isInitialPaint = false;
    }

    /* The first paint leaves the scroll alone — the Study view decides where
       to land, via scrollToOpen(). */
    repaint({ restore: false });
    return repaint;
  }

  let lastTarget = null;

  function scrollToNote(node) {
    if (!node) return;
    const scrollTarget = function () {
      const head = parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue('--head-h'), 10) || 54;
      const rect = node.getBoundingClientRect();
      const targetY = Math.max(0, rect.top + window.scrollY - head - 8);
      window.scrollTo({ top: targetY, behavior: DOM.reduced() ? 'auto' : 'smooth' });
    };
    window.requestAnimationFrame(scrollTarget);
    setTimeout(scrollTarget, 100);
    setTimeout(scrollTarget, 240);
  }

  function scrollTo(node) {
    if (!node) return;
    window.requestAnimationFrame(function () {
      const head = parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue('--head-h'), 10) || 0;
      const y = node.getBoundingClientRect().top + window.scrollY - head - 12;
      window.scrollTo({ top: Math.max(0, y), behavior: DOM.reduced() ? 'auto' : 'smooth' });
    });
  }

  /* Called by the Study view once it is on screen: return to whatever was
     last left open. */
  function scrollToOpen() {
    if (lastTarget) {
      if (path().concept) scrollToNote(lastTarget);
      else scrollTo(lastTarget);
    }
  }

  function mountAll(host, courses) {
    return painter(host, ctx => courses.map(course => courseNode(course, ctx)));
  }

  function mount(host, course) {
    return painter(host, ctx => (course.modules || []).map(mod => moduleNode(course, mod, ctx))
      .concat(course.pending ? [] : [pyqNode(course, ctx)]));
  }

  /* First visit: open the first course, module and section that still have
     work left, so the tree opens somewhere useful rather than flat. */
  function seedOpen(course) {
    if (Store.pref(KEY, null) || Store.pref(LEGACY, null)) { path(); return; }
    const p = {};
    if (course) {
      p.course = course.id;
      const mod = (course.modules || []).filter(x => !x.pending)[0];
      if (mod) {
        p.mod = mod.id;
        const sec = Pool.sections(course.id)
          .filter(s => (mod.secs || []).indexOf(s.sec) >= 0)
          .filter(s => s.concepts.some(c => Progress.level(c.id) < 1))[0];
        if (sec) p.sec = sec.sec;
      }
    }
    savePath(p);
  }

  /* Open the path down to one concept — what `#/note/<id>` now means. */
  function revealPath(conceptId, opts) {
    const c = Pool.concept(conceptId);
    if (!c) return false;
    const course = Pool.courseOfSec(c.sec), mod = Pool.moduleOfSec(c.sec);
    savePath({
      course: course ? course.id : null,
      mod: mod ? mod.id : null,
      sec: c.sec || null,
      concept: c.id,
      pyq: null
    });
    void opts;
    return true;
  }

  return { mount, mountAll, seedOpen, revealPath, refresh, scrollToOpen, path };
})();
