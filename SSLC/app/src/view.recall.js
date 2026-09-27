/* ══════════════════════════════════════════════════════════════════════════
   Recall, as a reel.

   One card per screen, swiped vertically, exactly one card per swipe. Getting
   that last part right is the whole job: a flick carries momentum, and a
   proximity-snapped scroller happily sails past two or three cards before it
   settles. `scroll-snap-stop: always` is the rule that forbids it. Every card
   is therefore exactly one viewport tall, and a card whose content overflows
   scrolls INSIDE itself and chains out at its ends.

   NOTHING COUNTS THE CARDS. There is no rail of dots, no "3 / 47", no "end of
   the reel" — you scroll and the next thing arrives, the way a reel is
   supposed to feel. Cards are appended a handful at a time as you approach the
   bottom, and the queue re-queries itself when it runs dry, so ticking a
   concept in Study while the reel is open makes new cards appear behind you
   rather than requiring a reload.

   What is in it, and in what order, is core.progress.js's business
   (`Progress.reel`): only material you have met, scheduled by Leitner box, due
   cards shuffled so no two passes are alike, and cards you know well a long
   way back. Nothing repeats within a pass.

   The rules are unchanged: nothing is revealed before an attempt, and the
   first grade is the one that counts. Two additions from the research: you
   say how sure you are BEFORE the reveal (calibration), and after a miss you
   say why (the mistake log). Both are one tap.
   ══════════════════════════════════════════════════════════════════════════ */

const ViewRecall = (function () {

  const el = DOM.el;
  const getGrades = () => [
    { k: 'got', label: (typeof I18N !== 'undefined' ? I18N.t('stated_it') : 'Stated it'), cls: 'primary' },
    { k: 'partly', label: (typeof I18N !== 'undefined' ? I18N.t('partly') : 'Partly'), cls: '' },
    { k: 'missed', label: (typeof I18N !== 'undefined' ? I18N.t('missed_it') : 'Missed it'), cls: '' }
  ];
  const BATCH = 6;          /* how many cards to add at a time */
  const LOOKAHEAD = 3;      /* how close to the end before the next batch */

  /* What the reel draws from. 'all' is everything due, mixed across chapters
     (the default, because interleaving is the point); 'new' is cards never
     attempted; 'weak' is cards on the concepts you keep missing; 'chapter'
     is one chapter only, for the first days after reading it. */
  let mode = 'all';
  let chapter = null;          /* module id when mode is 'chapter' */
  let startAt = null;          /* concept id to open on, from ?from= */
  const t = k => I18N.t(k);

  function draw(exclude) {
    let list = Progress.reel({ onlyNew: mode === 'new', exclude: exclude });
    if (mode === 'weak') {
      const weak = Study.weakIds();
      list = list.filter(x => x.cid && weak[x.cid]);
    } else if (mode === 'chapter' && chapter) {
      list = list.filter(function (x) {
        const m = Pool.moduleOfSec(x.sec);
        return m && m.id === chapter;
      });
    }
    return list;
  }

  /* the chapters that have anything in the reel at all */
  function chaptersInReel() {
    const seen = {}, out = [];
    Progress.reel().forEach(function (x) {
      const m = Pool.moduleOfSec(x.sec);
      if (m && !seen[m.id]) { seen[m.id] = true; out.push(m); }
    });
    return out;
  }

  /* ── intro card ──────────────────────────────────────────────────────────
     The only place the reel is configured, and it says nothing about how much
     is left — that is the point. */
  function introCard(rebuild) {
    const chip = (label, on, fn) => el('button', { class: 'chip', type: 'button', text: label,
      'aria-pressed': String(on), on: { click: fn } });

    const anything = Progress.reel().length;
    const d = Study.due();
    const weakN = Object.keys(Study.weakIds()).length;
    const chapters = chaptersInReel();

    const select = el('select', { class: 'tin', id: 'reel-chapter', 'aria-label': t('one_chapter') },
      chapters.map(m => el('option', { value: m.id, text: m.title, selected: chapter === m.id ? true : null })));
    if (!chapter && chapters[0]) chapter = chapters[0].id;
    select.addEventListener('change', function () { chapter = select.value; mode = 'chapter'; rebuild(); });

    return el('div', { class: 'inner' }, [
      el('div', {}, [
        el('div', { class: 'kicker', text: t('reel_kicker') }),
        UI.title(t('reel'))
      ]),
      el('p', { class: 'lede' }, [t('reel_lede')]),

      anything ? el('div', { class: 'row', style: { gap: '10px' } }, [
        el('span', { class: 'badge' + (d.due ? ' accent' : ''), text: d.due + ' ' + t('reel_due') }),
        el('span', { class: 'small muted', text: d.later + ' ' + t('reel_later') })
      ]) : null,

      anything
        ? el('div', { class: 'stack', style: { gap: '10px' } }, [
            el('div', { class: 'kicker', text: t('reel_mode') }),
            el('div', { class: 'row' }, [
              chip(t('everything'), mode === 'all', function () { mode = 'all'; rebuild(); }),
              chip(t('not_yet_attempted'), mode === 'new', function () { mode = 'new'; rebuild(); }),
              weakN ? chip(t('weak_only') + ' · ' + weakN, mode === 'weak', function () { mode = 'weak'; rebuild(); }) : null,
              chapters.length > 1 ? chip(t('one_chapter'), mode === 'chapter', function () { mode = 'chapter'; rebuild(); }) : null
            ]),
            mode === 'chapter' && chapters.length > 1 ? el('div', {}, [select]) : null,
            el('p', { class: 'small muted', style: { margin: 0 },
              text: mode === 'chapter' ? t('chapter_note') : t('mixed_note') })
          ])
        : UI.empty(t('reel_empty'),
            el('a', { class: 'btn primary', href: Router.href('study'), text: t('open_syllabus') }))
    ]);
  }

  /* ── shared card chrome ──────────────────────────────────────────────── */
  function head(item, badge) {
    const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
    const rec = Store.card(item.id);
    const concept = item.cid ? Pool.concept(item.cid) : null;
    const kindLabel = concept ? I18N.kind(concept.kind) : I18N.kind(item.conceptKind);
    const itemTitle = typeof I18N !== 'undefined' ? I18N.pick(item, 'title') : item.title;
    const gradeWord = rec && rec.first ? (isMl ? (rec.first === 'got' ? 'ശരിയായി' : rec.first === 'missed' ? 'ഓർമ്മവന്നില്ല' : 'ഭാഗികം') : rec.first) : '';

    return el('div', { class: 'stack', style: { gap: '10px' } }, [
      el('div', { class: 'spread' }, [
        el('span', { class: 'badge accent', text: badge }),
        item.sec ? el('a', { class: 'small', href: Router.href('note/' + item.cid),
          text: '§' + item.sec }) : null
      ]),
      el('div', { class: 'kicker', text: kindLabel + ' · ' + itemTitle }),
      (rec && rec.first)
        ? el('div', { class: 'row' }, [
            el('span', {
              class: 'badge ' + (rec.first === 'got' ? 'ok' : rec.first === 'missed' ? 'bad' : 'warn'),
              text: isMl ? ('ആദ്യ ശ്രമം: ' + gradeWord) : ('first attempt: ' + rec.first)
            }),
            el('span', { class: 'small muted', text: isMl ? 'ഈ തവണ ഇത് മാറില്ല' : 'this pass will not change it' })
          ])
        : null
    ]);
  }

  function gradeRow(item, goNext, preGrade) {
    const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
    const rec = Store.card(item.id);
    const attemptedBefore = !!(rec && rec.first);
    const wrap = el('div', {});

    function commit(grade) {
      const r = Store.gradeCard(item.id, grade);
      if (item._conf) Store.recordConfidence(item.id, item._conf, grade === 'got', item.cid);
      const gradeWord = isMl ? (grade === 'got' ? 'ശരിയായി' : grade === 'missed' ? 'ഓർമ്മവന്നില്ല' : 'ഭാഗികം') : grade;
      const firstWord = isMl && r.first ? (r.first === 'got' ? 'ശരിയായി' : r.first === 'missed' ? 'ഓർമ്മവന്നില്ല' : 'ഭാഗികം') : r.first;

      DOM.clear(wrap);
      DOM.add(wrap, [
        el('div', { class: 'verdict ' +
          (grade === 'got' ? 'ok' : grade === 'missed' ? 'bad' : 'warn') }, [
          el('span', { class: 'g', 'aria-hidden': 'true' },
            [DOM.mi(grade === 'got' ? 'check_circle' : grade === 'missed' ? 'cancel' : 'remove_circle')]),
          el('span', {}, [
            el('b', { text: isMl
              ? (r.tries === 1 ? 'ആദ്യ ശ്രമം രേഖപ്പെടുത്തി: ' + gradeWord : 'ഈ ശ്രമം: ' + gradeWord)
              : (r.tries === 1 ? 'First attempt recorded: ' + grade : 'This pass: ' + grade) }),
            el('span', { text: isMl
              ? (r.tries > 1 ? 'ആദ്യ ശ്രമം (' + firstWord + ') മാറ്റമില്ലാതെ തുടരുന്നു.' : 'പഠന പുരോഗതി രേഖപ്പെടുത്തി.')
              : (r.tries > 1 ? 'First attempt (' + r.first + ') is unchanged.' : 'Completion and recall stay separate numbers.') })
          ])
        ]),
        grade !== 'got' ? el('div', { style: { marginTop: '12px' } }, [UI.whyRow(item.id, item.cid)]) : null,
        el('div', { class: 'btn-row', style: { marginTop: '12px' } }, [
          el('button', { class: 'btn primary', type: 'button', text: t('next_card'),
            on: { click: goNext } }),
          item.cid ? el('a', { class: 'btn', href: Router.href('note/' + item.cid),
            text: t('open_note') }) : null
        ])
      ]);
      DOM.announce(isMl ? 'രേഖപ്പെടുത്തി.' : ('Recorded ' + grade + '.'));
    }

    DOM.add(wrap, [
      el('p', { class: 'small muted', style: { margin: '0 0 8px' },
        text: attemptedBefore
          ? (isMl ? 'ഈ തവണ എങ്ങനെ ഉണ്ടായിരുന്നു? ആദ്യ ശ്രമത്തിന്റെ ഫലം മാറില്ല.' : 'How did this pass go? Your first attempt stays on record.')
          : (isMl ? 'നിങ്ങളുടെ ശ്രമം മുകളിലെ ഉത്തരവുമായി എത്രത്തോളം യോജിക്കുന്നു?' : 'How did your attempt compare with the answer above?') }),
      el('div', { class: 'btn-row' }, getGrades().map(g =>
        el('button', { class: 'btn ' + g.cls, type: 'button', text: g.label,
          on: { click: function () { commit(g.k); } } })))
    ]);

    if (preGrade) window.setTimeout(() => commit(preGrade), 0);
    return wrap;
  }

  /* ── options builder for statement cards ──────────────────────────────── */
  function buildStatementOptions(item) {
    const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
    const correct = typeof I18N !== 'undefined' ? I18N.pick(item, 'a') : item.a;
    if (item.options && Array.isArray(item.options) && item.options.length) {
      return item.options;
    }
    const deck = (typeof Pool !== 'undefined' && Pool.deck) ? Pool.deck() : [];
    const otherCards = deck.filter(c => c.id !== item.id);
    const sameSec = otherCards.filter(c => c.sec === item.sec);
    const poolList = (sameSec.length >= 3 ? sameSec : otherCards)
      .map(c => typeof I18N !== 'undefined' ? I18N.pick(c, 'a') : c.a)
      .filter(a => a && a !== correct);

    const uniquePool = Array.from(new Set(poolList));
    let distractors = [];
    if (uniquePool.length >= 3) {
      let hash = 0;
      for (let i = 0; i < item.id.length; i++) hash = ((hash << 5) - hash) + item.id.charCodeAt(i);
      hash = Math.abs(hash);
      const shuffled = uniquePool.slice();
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = (hash + i) % (i + 1);
        const tmp = shuffled[i]; shuffled[i] = shuffled[j]; shuffled[j] = tmp;
      }
      distractors = shuffled.slice(0, 3);
    } else {
      distractors = isMl
        ? ['ഇവയിലൊന്നുമല്ല', 'വ്യവസ്ഥകൾ ബാധകമല്ല', 'വിപരീതം ശരിയല്ല']
        : ['None of these', 'Conditions do not apply', 'The converse is false'];
    }

    const all = [
      { text: correct, correct: true },
      { text: distractors[0] || (isMl ? 'ബാധകമല്ല' : 'Not applicable'), correct: false },
      { text: distractors[1] || (isMl ? 'തീർച്ചപ്പെടുത്താനാവില്ല' : 'Cannot be determined'), correct: false },
      { text: distractors[2] || (isMl ? 'ഇവയിലൊന്നുമല്ല' : 'None of the above'), correct: false }
    ];

    let seed = 0;
    for (let i = 0; i < item.id.length; i++) seed += item.id.charCodeAt(i);
    const keys = ['A', 'B', 'C', 'D'];
    const rot = seed % 4;
    const rotated = all.slice(rot).concat(all.slice(0, rot));
    return rotated.map((opt, idx) => ({ k: keys[idx], text: opt.text, correct: opt.correct }));
  }

  /* ── a statement card ────────────────────────────────────────────────── */
  function statementCard(item, goNext) {
    const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
    const concept = Pool.concept(item.cid);
    let revealed = false;
    let answered = false;
    const gateHost = el('div', {});
    const answerHost = el('div', {});

    let conf = 0;
    function reveal(grade) {
      if (revealed) return;
      revealed = true;
      const rec = Store.gradeCard(item.id, grade);
      if (conf) Store.recordConfidence(item.id, conf, grade === 'got', item.cid);
      DOM.clear(gateHost);
      DOM.clear(answerHost);

      const isCorrect = grade === 'got';
      const verdictWrap = el('div', { class: 'stack', style: { gap: '10px', marginTop: '12px' } }, [
        el('div', { class: 'verdict ' + (isCorrect ? 'ok' : 'bad') }, [
          el('span', { class: 'g', 'aria-hidden': 'true' }, [DOM.mi(isCorrect ? 'check_circle' : 'cancel')]),
          el('span', {}, [
            el('b', { text: isCorrect ? (isMl ? 'ശരിയുത്തരം!' : 'Correct!') : (isMl ? 'തെറ്റായ ഉത്തരം.' : 'Incorrect.') }),
            el('span', { text: isMl ? 'പഠന പുരോഗതി രേഖപ്പെടുത്തി.' : 'Recall attempt recorded.' })
          ])
        ]),
        el('div', { class: 'reveal' }, [
          el('div', { class: 'h' }, [el('span', { text: t('canonical') })]),
          el('div', { class: 'b' }, [
            el('div', { class: 'prose tight', html: typeof I18N !== 'undefined' ? I18N.pick(item, 'a') : item.a }),
            el('div', { class: 'row', style: { marginTop: '12px' } }, [
              el('a', { class: 'chip', href: Router.href('note/' + item.cid),
                text: t('full_note') + (typeof I18N !== 'undefined' ? I18N.pick(concept, 'title') : (concept ? concept.title : '')) })
            ])
          ])
        ]),
        conf === 3 && !isCorrect ? el('p', { class: 'small', style: { margin: 0 }, text: t('calib_over') }) : null,
        !isCorrect ? UI.whyRow(item.id, item.cid) : null,
        el('div', { class: 'btn-row', style: { marginTop: '12px' } }, [
          el('button', { class: 'btn primary', type: 'button', text: t('next_card'),
            on: { click: goNext } }),
          item.cid ? el('a', { class: 'btn', href: Router.href('note/' + item.cid),
            text: t('open_note') }) : null
        ])
      ]);

      answerHost.appendChild(verdictWrap);
      UI.math(answerHost);
      DOM.announce(isCorrect ? (isMl ? 'ശരിയുത്തരം.' : 'Correct.') : (isMl ? 'തെറ്റായ ഉത്തരം.' : 'Incorrect.'));
    }

    function showOptions() {
      DOM.clear(gateHost);
      const opts = buildStatementOptions(item);
      const omrGroup = el('div', { class: 'omr', role: 'radiogroup', 'aria-label': 'Select the correct statement' });

      opts.forEach(function (opt) {
        const row = el('button', {
          class: 'omr-opt',
          type: 'button',
          role: 'radio',
          'aria-checked': 'false'
        }, [
          el('span', { class: 'bub', 'aria-hidden': 'true', text: opt.k }),
          el('span', { class: 't', html: opt.text })
        ]);

        row.addEventListener('click', function () {
          if (answered) return;
          answered = true;
          const rows = omrGroup.querySelectorAll('.omr-opt');
          rows.forEach((r, idx) => {
            r.setAttribute('aria-disabled', 'true');
            if (opts[idx].correct) {
              r.classList.add('key');
              r.appendChild(el('span', { class: 'omr-mark ok', text: 'key' }));
            }
          });
          if (!opt.correct) {
            row.classList.add('chosen-bad');
            row.appendChild(el('span', { class: 'omr-mark bad', text: 'yours' }));
          }
          window.setTimeout(() => reveal(opt.correct ? 'got' : 'missed'), 400);
        });

        omrGroup.appendChild(row);
      });

      UI.math(omrGroup);

      const skipBtn = el('button', { class: 'btn', type: 'button', text: isMl ? 'ഉത്തരം കാണിക്കുക' : 'Show answer',
        on: { click: function () { reveal('missed'); } } });

      DOM.add(gateHost, [
        el('p', { class: 'small muted', style: { margin: '8px 0 10px' },
          text: isMl ? 'ശരിയായ പ്രസ്താവന തിരഞ്ഞെടുക്കുക:' : 'Select the correct statement from the options below:' }),
        omrGroup,
        el('div', { class: 'btn-row', style: { marginTop: '12px' } }, [skipBtn])
      ]);
    }

    /* Say how sure you are first. "No idea" is an honest miss and is
       recorded as one; the other two unlock the options. */
    gateHost.appendChild(UI.confidenceGate({
      onPick: function (c) {
        conf = c;
        if (c === 1) { reveal('missed'); return; }
        showOptions();
      }
    }));

    return el('div', { class: 'inner' }, [
      head(item, I18N.kind(item.conceptKind || 'state')),
      el('div', { class: 'prose', style: { fontSize: '1.12rem' }, html: typeof I18N !== 'undefined' ? I18N.pick(item, 'q') : item.q }),
      gateHost, answerHost
    ]);
  }

  /* ── a proof card ────────────────────────────────────────────────────────
     The ask is the strategy, not the write-up: if you can say why the proof
     goes the way it does, the steps follow. */
  function proofCard(item, goNext) {
    const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
    const concept = Pool.concept(item.cid);
    const p = item.proof;
    let revealed = false;
    const gateHost = el('div', {});
    const writeHost = el('div', {});
    const answerHost = el('div', {});

    function unlock(msg) {
      DOM.clear(gateHost);
      gateHost.appendChild(el('div', { class: 'btn-row' }, [
        el('button', { class: 'btn primary', type: 'button', text: isMl ? 'തെളിവ് കാണുക' : 'Show the argument',
          on: { click: function () { reveal(); } } })
      ]));
      if (msg) DOM.announce(msg);
    }

    function reveal(preGrade) {
      if (revealed) return;
      revealed = true;
      DOM.clear(gateHost);
      DOM.clear(answerHost);
      const ideaText = typeof I18N !== 'undefined' ? I18N.pick(p, 'idea') : p.idea;
      const whyText = typeof I18N !== 'undefined' ? I18N.pick(p, 'why') : p.why;
      const endsText = typeof I18N !== 'undefined' ? I18N.pick(p, 'ends') : p.ends;
      const rungsList = (typeof I18N !== 'undefined' && isMl && p.rungs_ml) ? p.rungs_ml : (p.rungs || []);

      answerHost.appendChild(el('div', { class: 'reveal' }, [
        el('div', { class: 'h' }, [el('span', { text: isMl ? 'ഗണിത തെളിവ്' : 'The argument' })]),
        el('div', { class: 'b', style: { display: 'grid', gap: '10px' } }, [
          ideaText ? el('div', { class: 'card tint', style: { padding: '10px 14px' } }, [
            el('div', { class: 'kicker', text: isMl ? 'പ്രധാന ആശയം' : 'Key idea' }),
            el('div', { class: 'prose tight', style: { marginTop: '4px' }, html: ideaText })
          ]) : null,
          whyText ? el('div', { class: 'prose tight', html: whyText }) : null,
          (rungsList && rungsList.length)
            ? el('div', { class: 'stack', style: { gap: '8px' } }, rungsList.map(function (r, i) {
                const rungWhy = typeof I18N !== 'undefined' ? I18N.pick(r, 'why') : r.why;
                return el('div', { class: 'card flat', style: { padding: '10px 14px' } }, [
                  el('div', { class: 'small muted', style: { marginBottom: '6px' } }, [
                    el('b', { text: (isMl ? 'ഘട്ടം ' : 'Step ') + (i + 1) + ': ' }), el('span', { html: rungWhy })
                  ]),
                  r.m ? el('div', { html: r.m }) : null
                ]);
              }))
            : null,
          endsText ? el('div', { class: 'prose tight', html: endsText }) : null,
          el('div', { class: 'row' }, [
            el('a', { class: 'chip', href: Router.href('note/' + item.cid),
              text: (isMl ? 'പൂർണ്ണ കുറിപ്പ് · ' : 'Full note · ') + (typeof I18N !== 'undefined' ? I18N.pick(concept, 'title') : concept.title) })
          ])
        ])
      ]));
      answerHost.appendChild(gradeRow(item, goNext, preGrade));
      UI.math(answerHost);
    }

    gateHost.appendChild(UI.confidenceGate({
      hint: isMl ? 'നോക്കും മുൻപ് തെളിവിന്റെ പ്രധാന ആശയവും അത് എന്തുകൊണ്ട് പ്രവർത്തിക്കുന്നു എന്നും പറയുക.' : 'Say how the derivation goes before you look — the main move, and why it works. Then say how sure you are.',
      onPick: function (c) {
        item._conf = c;
        if (c === 1) { reveal('missed'); return; }
        unlock(isMl ? 'ശ്രമം രേഖപ്പെടുത്തി — ഇനി തെളിവ് കാണാം.' : 'Attempt registered — you can reveal now.');
      }
    }));

    const cTitle = typeof I18N !== 'undefined' ? I18N.pick(concept, 'title') : concept.title;
    return el('div', { class: 'inner' }, [
      head(item, isMl ? 'തെളിവ്' : 'proof'),
      el('div', { class: 'prose', style: { fontSize: '1.12rem' }, html: isMl ? ('<b>ഇതിന്റെ തെളിവ് ഓർത്തെടുക്കുക: ' + cTitle + '.</b><p class="small muted" style="margin: 8px 0 0">പ്രധാന ആശയവും തെളിയിക്കുന്ന രീതിയും.</p>') : ('<b>Reconstruct the proof of ' + cTitle + '.</b><p class="small muted" style="margin: 8px 0 0">The strategy and why it works, not the full write-up.</p>') }),
      gateHost, writeHost, answerHost
    ]);
  }

  /* ── an objective question, on a card ────────────────────────────────────
     The attempt IS the answer, so there is no separate grade row: the verdict
     the sheet returns is what schedules the card. */
  function questionCard(item, goNext) {
    const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
    const q = item.question;
    const tail = el('div', { class: 'btn-row' }, [
      el('button', { class: 'btn primary', type: 'button', text: t('next_card'),
        on: { click: goNext } }),
      item.cid ? el('a', { class: 'btn', href: Router.href('note/' + item.cid),
        text: t('open_note') }) : null
    ]);
    return el('div', { class: 'inner' }, [
      head(item, isMl ? 'ചോദ്യം' : 'question'),
      QuestionCard.build(q, {
        inNote: true, tail: tail,
        onLocked: function (verdict) {
          Store.gradeCard(item.id,
            verdict === 'correct' ? 'got' : verdict === 'partial' ? 'partly' : 'missed');
        }
      })
    ]);
  }

  /* ── an exercise you have already worked, back for another look ──────── */
  function exerciseCard(item, goNext) {
    const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
    const q = item.question;
    let revealed = false;
    const gateHost = el('div', {});
    const writeHost = el('div', {});
    const answerHost = el('div', {});

    const approachText = typeof I18N !== 'undefined' ? I18N.pick(q, 'approach') : q.approach;
    const solutionText = typeof I18N !== 'undefined' ? I18N.pick(q, 'solution') : q.solution;
    const trapText = typeof I18N !== 'undefined' ? I18N.pick(q, 'trap') : q.trap;
    const promptText = typeof I18N !== 'undefined' ? I18N.pick(q, 'prompt') : q.prompt;

    function unlock(msg) {
      DOM.clear(gateHost);
      gateHost.appendChild(el('div', { class: 'btn-row' }, [
        el('button', { class: 'btn primary', type: 'button', text: isMl ? 'വിശദമായ ഉത്തരം കാണുക' : 'Show the worked answer',
          on: { click: function () { reveal(); } } })
      ]));
      if (msg) DOM.announce(msg);
    }

    function reveal(preGrade) {
      if (revealed) return;
      revealed = true;
      DOM.clear(gateHost);
      DOM.clear(answerHost);
      answerHost.appendChild(el('div', { class: 'reveal' }, [
        el('div', { class: 'h' }, [el('span', { text: isMl ? 'വിശദമായ ഉത്തരം' : 'Worked answer' })]),
        el('div', { class: 'b', style: { display: 'grid', gap: '10px' } }, [
          approachText ? el('div', { class: 'prose tight', html: approachText }) : null,
          solutionText ? el('div', { class: 'prose tight', html: solutionText }) : null,
          trapText ? el('p', { class: 'small muted' },
            [el('b', { text: isMl ? 'ശ്രദ്ധിക്കുക: ' : 'Trap: ' }), el('span', { html: trapText })]) : null
        ])
      ]));
      answerHost.appendChild(gradeRow(item, goNext, preGrade));
      UI.math(answerHost);
    }

    gateHost.appendChild(UI.confidenceGate({
      hint: isMl ? 'മുൻപ് ചെയ്ത ചോദ്യമാണിത്. ഉത്തരം നോക്കും മുൻപ് പ്രധാന ഘട്ടം ഒരിക്കൽക്കൂടി സ്വയം ചെയ്യുക; പിന്നെ എത്ര ഉറപ്പുണ്ടെന്ന് പറയുക.' : 'You have worked this one before. Do the main move again before you look, then say how sure you are.',
      onPick: function (c) {
        item._conf = c;
        if (c === 1) { reveal('missed'); return; }
        unlock(isMl ? 'ശ്രമം രേഖപ്പെടുത്തി — ഇനി ഉത്തരം കാണാം.' : 'Attempt registered — you can reveal now.');
      }
    }));

    return el('div', { class: 'inner' }, [
      head(item, isMl ? 'പരിശീലന ചോദ്യം' : 'exercise'),
      el('div', { class: 'prose', style: { fontSize: '1.05rem' }, html: promptText }),
      gateHost, writeHost, answerHost
    ]);
  }

  const BUILDERS = {
    state: statementCard, proof: proofCard, question: questionCard, exercise: exerciseCard
  };

  /* ── the reel ────────────────────────────────────────────────────────── */
  function render(args, query) {
    if (query && query.from) { startAt = query.from; mode = 'all'; }
    if (query && query.mode) { mode = query.mode === 'weak' ? 'weak' : query.mode === 'new' ? 'new' : 'all'; }
    const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';

    const reel = el('div', { class: 'reel', tabindex: '-1', 'aria-label': isMl ? 'ഓർത്തെടുക്കൽ കാർഡുകൾ' : 'Recall reel' });
    const root = el('div', {}, [
      el('h1', { id: 'pagetitle', tabindex: '-1', class: 'sr-only', text: t('reel') }),
      reel
    ]);

    let cards = [];        /* the <section>s on screen, index 0 is the intro */
    let queue = [];        /* cards drawn but not yet placed */
    let placed = {};       /* every id already on screen — nothing repeats */
    let ended = false;

    function build() {
      if (io) { io.disconnect(); io = null; }
      DOM.clear(reel);
      cards = [];
      placed = {};
      ended = false;
      queue = draw();

      push(el('section', { class: 'reel-card' }, [introCard(function () {
        build();
        reel.scrollTo({ top: 0, behavior: 'auto' });
      })]));

      extend(BATCH);
      observe();
      UI.math(reel);
      jumpToStart();
    }

    function push(section) {
      cards.push(section);
      reel.appendChild(section);
      if (io) io.observe(section);
    }

    const glide = i => {
      const to = cards[i];
      if (!to) return;
      reel.scrollTo({ top: to.offsetTop, behavior: DOM.reduced() ? 'auto' : 'smooth' });
    };

    /* Draw `n` more cards. When the queue runs dry it is re-drawn, which is
       how material ticked while the reel is open finds its way in. */
    function extend(n) {
      let added = 0;
      while (added < n) {
        if (!queue.length) queue = draw(placed);
        const item = queue.shift();
        if (!item) break;
        if (placed[item.id]) continue;
        placed[item.id] = true;
        const at = cards.length;
        const make = BUILDERS[item.kind];
        if (!make) continue;
        push(el('section', { class: 'reel-card', 'data-cid': item.cid || '' },
          [make(item, function () { glide(at + 1); })]));
        added += 1;
      }
      if (!added && !ended) {
        ended = true;
        push(el('section', { class: 'reel-card' }, [
          el('div', { class: 'inner' }, [
            UI.empty(mode === 'new' ? t('reel_end_new') : mode === 'weak' ? t('reel_end_weak') : t('reel_end'),
              el('a', { class: 'btn primary', href: Router.href('study'), text: t('open_syllabus') }))
          ])
        ]));
      }
      UI.math(reel);
    }

    /* Mark the card in view, and top the reel up before you reach the end.
       Cards are one viewport tall, so a majority-of-the-viewport test is both
       correct and cheap. */
    let io = null;
    function observe() {
      if (!window.IntersectionObserver) { cards.forEach(c => c.classList.add('live')); return; }
      if (io) return;
      io = new window.IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          const seen = e.intersectionRect ? e.intersectionRect.height : 0;
          const port = (e.rootBounds && e.rootBounds.height) || reel.clientHeight || 1;
          const live = e.isIntersecting && seen / port > 0.55;
          e.target.classList.toggle('live', live);
          if (live && cards.indexOf(e.target) >= cards.length - LOOKAHEAD) extend(BATCH);
        });
      }, { root: reel, threshold: [0, 0.25, 0.56, 0.9, 1] });
      cards.forEach(c => io.observe(c));
    }

    function jumpToStart() {
      if (!startAt) return;
      const at = cards.map(c => c.getAttribute('data-cid')).indexOf(startAt);
      startAt = null;
      if (at > 0) window.requestAnimationFrame(function () {
        reel.scrollTo({ top: cards[at].offsetTop, behavior: 'auto' });
      });
    }

    /* Ticking a concept in Study while the reel is open should put its cards
       in the reel, not wait for a reload. The end card is the only thing in
       the way, so it is taken back off and the queue asked again. */
    Store.onChange(function () {
      if (!document.body.contains(reel) || !ended) return;
      const last = cards.pop();
      if (last && last.parentNode) last.parentNode.removeChild(last);
      ended = false;
      extend(BATCH);
    });

    /* Keyboard moves exactly one card, like the swipe. */
    reel.addEventListener('keydown', function (e) {
      const keys = { ArrowDown: 1, PageDown: 1, ArrowUp: -1, PageUp: -1 };
      const dir = keys[e.key];
      if (!dir) return;
      if (/^(TEXTAREA|INPUT|SELECT)$/.test((e.target.tagName || '').toUpperCase())) return;
      e.preventDefault();
      const h = reel.clientHeight || 1;
      const last = reel.children.length - 1;
      const at = Math.round(reel.scrollTop / h);
      const to = Math.max(0, Math.min(last, at + dir));
      reel.scrollTo({ top: to * h, behavior: DOM.reduced() ? 'auto' : 'smooth' });
    });

    build();
    return root;
  }

  return { render, wrapClass: 'wrap bleed' };
})();
