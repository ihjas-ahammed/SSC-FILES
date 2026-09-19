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
   first grade is the one that counts.
   ══════════════════════════════════════════════════════════════════════════ */

const ViewRecall = (function () {

  const el = DOM.el;
  const GRADES = [
    { k: 'got', label: 'Stated it', cls: 'primary' },
    { k: 'partly', label: 'Partly', cls: '' },
    { k: 'missed', label: 'Missed it', cls: '' }
  ];
  const BATCH = 6;          /* how many cards to add at a time */
  const LOOKAHEAD = 3;      /* how close to the end before the next batch */

  let onlyNew = false;
  let startAt = null;          /* concept id to open on, from ?from= */

  /* ── intro card ──────────────────────────────────────────────────────────
     The only place the reel is configured, and it says nothing about how much
     is left — that is the point. */
  function introCard(rebuild) {
    const chip = (label, on, fn) => el('button', { class: 'chip', type: 'button', text: label,
      'aria-pressed': String(on), on: { click: fn } });

    const anything = Progress.reel().length;

    return el('div', { class: 'inner' }, [
      el('div', {}, [
        el('div', { class: 'kicker', text: 'Reel · one swipe, one card' }),
        UI.title('Recall')
      ]),
      el('p', { class: 'lede' },
        ['Only what you have already met. Each card asks first; nothing is revealed ' +
         'until you have attempted it. What comes next is a surprise.']),

      anything
        ? el('div', { class: 'row' }, [
            chip('Everything', !onlyNew, function () { onlyNew = false; rebuild(); }),
            chip('Not yet attempted', onlyNew, function () { onlyNew = true; rebuild(); })
          ])
        : UI.empty(
            'The reel draws on notes you have read, proofs you have worked and questions you '
              + 'have answered — and there are none of those yet.',
            el('a', { class: 'btn primary', href: Router.href('study'), text: 'Open the syllabus' })),

      anything ? el('p', { class: 'small muted', style: { margin: 0 },
        text: 'Cards you get right come back days later, cards you miss come back soon. '
          + 'Tick something new in the syllabus and it joins the reel behind you.' }) : null
    ]);
  }

  /* ── shared card chrome ──────────────────────────────────────────────── */
  function head(item, badge) {
    const rec = Store.card(item.id);
    return el('div', { class: 'stack', style: { gap: '10px' } }, [
      el('div', { class: 'spread' }, [
        el('span', { class: 'badge accent', text: badge }),
        item.sec ? el('a', { class: 'small', href: Router.href('note/' + item.cid),
          text: '§' + item.sec }) : null
      ]),
      el('div', { class: 'kicker', text: item.conceptKind + ' · ' + item.title }),
      (rec && rec.first)
        ? el('div', { class: 'row' }, [
            el('span', {
              class: 'badge ' + (rec.first === 'got' ? 'ok' : rec.first === 'missed' ? 'bad' : 'warn'),
              text: 'first attempt: ' + rec.first
            }),
            el('span', { class: 'small muted', text: 'this pass will not change it' })
          ])
        : null
    ]);
  }

  function gradeRow(item, goNext, preGrade) {
    const rec = Store.card(item.id);
    const attemptedBefore = !!(rec && rec.first);
    const wrap = el('div', {});

    function commit(grade) {
      const r = Store.gradeCard(item.id, grade);
      DOM.clear(wrap);
      DOM.add(wrap, [
        el('div', { class: 'verdict ' +
          (grade === 'got' ? 'ok' : grade === 'missed' ? 'bad' : 'warn') }, [
          el('span', { class: 'g', 'aria-hidden': 'true' },
            [DOM.mi(grade === 'got' ? 'check_circle' : grade === 'missed' ? 'cancel' : 'remove_circle')]),
          el('span', {}, [
            el('b', { text: r.tries === 1 ? 'First attempt recorded: ' + grade
              : 'This pass: ' + grade }),
            el('span', { text: r.tries > 1
              ? 'First attempt (' + r.first + ') is unchanged.'
              : 'Completion and recall stay separate numbers.' })
          ])
        ]),
        el('div', { class: 'btn-row', style: { marginTop: '12px' } }, [
          el('button', { class: 'btn primary', type: 'button', text: 'Next card',
            on: { click: goNext } }),
          item.cid ? el('a', { class: 'btn', href: Router.href('note/' + item.cid),
            text: 'Open the note' }) : null
        ])
      ]);
      DOM.announce('Recorded ' + grade + '.');
    }

    DOM.add(wrap, [
      el('p', { class: 'small muted', style: { margin: '0 0 8px' },
        text: attemptedBefore
          ? 'How did this pass go? Your first attempt stays on record.'
          : 'How did your attempt compare with the answer above?' }),
      el('div', { class: 'btn-row' }, GRADES.map(g =>
        el('button', { class: 'btn ' + g.cls, type: 'button', text: g.label,
          on: { click: function () { commit(g.k); } } })))
    ]);

    if (preGrade) window.setTimeout(() => commit(preGrade), 0);
    return wrap;
  }

  /* ── a statement card ────────────────────────────────────────────────── */
  function statementCard(item, goNext) {
    const concept = Pool.concept(item.cid);
    let revealed = false;
    const gateHost = el('div', {});
    const writeHost = el('div', {});
    const answerHost = el('div', {});

    function unlock(msg) {
      DOM.clear(gateHost);
      gateHost.appendChild(el('div', { class: 'btn-row' }, [
        el('button', { class: 'btn primary', type: 'button', text: 'Show the canonical statement',
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
        el('div', { class: 'h' }, [el('span', { text: 'Canonical statement' })]),
        el('div', { class: 'b' }, [
          el('div', { class: 'prose tight', html: item.a }),
          el('div', { class: 'row', style: { marginTop: '12px' } }, [
            el('a', { class: 'chip', href: Router.href('note/' + item.cid),
              text: 'Full note · ' + concept.title })
          ])
        ])
      ]));
      answerHost.appendChild(gradeRow(item, goNext, preGrade));
      UI.math(answerHost);
    }

    gateHost.appendChild(UI.gate({
      hint: 'State it from memory first — write it out, or say it aloud and declare the attempt.',
      actions: [
        { label: 'Write it out', primary: true, onClick: function () {
            DOM.clear(writeHost);
            const wb = WriteBox.mount(writeHost, {
              concept: concept, label: 'Your statement',
              onFirstInput: function () { unlock('Attempt registered — you can reveal now.'); }
            });
            wb.focus();
          } },
        { label: 'I stated it aloud', onClick: function () { unlock('Attempt registered.'); } },
        { label: "I can't state it", onClick: function () { reveal('missed'); } }
      ]
    }));

    return el('div', { class: 'inner' }, [
      head(item, 'statement'),
      el('div', { class: 'prose', style: { fontSize: '1.12rem' }, html: item.q }),
      gateHost, writeHost, answerHost
    ]);
  }

  /* ── a proof card ────────────────────────────────────────────────────────
     The ask is the strategy, not the write-up: if you can say why the proof
     goes the way it does, the steps follow. */
  function proofCard(item, goNext) {
    const concept = Pool.concept(item.cid);
    const p = item.proof;
    let revealed = false;
    const gateHost = el('div', {});
    const writeHost = el('div', {});
    const answerHost = el('div', {});

    function unlock(msg) {
      DOM.clear(gateHost);
      gateHost.appendChild(el('div', { class: 'btn-row' }, [
        el('button', { class: 'btn primary', type: 'button', text: 'Show the argument',
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
        el('div', { class: 'h' }, [el('span', { text: 'The argument' })]),
        el('div', { class: 'b', style: { display: 'grid', gap: '10px' } }, [
          p.idea ? el('div', { class: 'card tint', style: { padding: '10px 14px' } }, [
            el('div', { class: 'kicker', text: 'Key idea' }),
            el('div', { class: 'prose tight', style: { marginTop: '4px' }, html: p.idea })
          ]) : null,
          p.why ? el('div', { class: 'prose tight', html: p.why }) : null,
          (p.rungs && p.rungs.length)
            ? el('div', { class: 'stack', style: { gap: '8px' } }, p.rungs.map(function (r, i) {
                return el('div', { class: 'card flat', style: { padding: '10px 14px' } }, [
                  el('div', { class: 'small muted', style: { marginBottom: '6px' } }, [
                    el('b', { text: 'Step ' + (i + 1) + ': ' }), el('span', { html: r.why })
                  ]),
                  r.m ? el('div', { html: r.m }) : null
                ]);
              }))
            : null,
          p.ends ? el('div', { class: 'prose tight', html: p.ends }) : null,
          el('div', { class: 'row' }, [
            el('a', { class: 'chip', href: Router.href('note/' + item.cid),
              text: 'Full note · ' + concept.title })
          ])
        ])
      ]));
      answerHost.appendChild(gradeRow(item, goNext, preGrade));
      UI.math(answerHost);
    }

    gateHost.appendChild(UI.gate({
      hint: 'Say how the proof goes before you look — the main move, and why it works.',
      actions: [
        { label: 'Sketch it', primary: true, onClick: function () {
            DOM.clear(writeHost);
            const wb = WriteBox.mount(writeHost, {
              draftKey: 'proof:' + concept.id, concept: concept,
              label: 'Your sketch of the argument',
              placeholder: 'The main move is…',
              onFirstInput: function () { unlock('Attempt registered — you can reveal now.'); }
            });
            wb.focus();
          } },
        { label: 'I said it aloud', onClick: function () { unlock('Attempt registered.'); } },
        { label: "I can't reconstruct it", onClick: function () { reveal('missed'); } }
      ]
    }));

    return el('div', { class: 'inner' }, [
      head(item, 'proof'),
      el('div', { class: 'prose', style: { fontSize: '1.12rem' } }, [
        el('b', { text: 'Reconstruct the proof of ' }),
        el('span', { text: concept.title + '.' }),
        el('p', { class: 'small muted', style: { margin: '8px 0 0' },
          text: 'The strategy and why it works, not the full write-up.' })
      ]),
      gateHost, writeHost, answerHost
    ]);
  }

  /* ── an objective question, on a card ────────────────────────────────────
     The attempt IS the answer, so there is no separate grade row: the verdict
     the sheet returns is what schedules the card. */
  function questionCard(item, goNext) {
    const q = item.question;
    const tail = el('div', { class: 'btn-row' }, [
      el('button', { class: 'btn primary', type: 'button', text: 'Next card',
        on: { click: goNext } }),
      item.cid ? el('a', { class: 'btn', href: Router.href('note/' + item.cid),
        text: 'Open the note' }) : null
    ]);
    return el('div', { class: 'inner' }, [
      head(item, 'question'),
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
    const q = item.question;
    let revealed = false;
    const gateHost = el('div', {});
    const writeHost = el('div', {});
    const answerHost = el('div', {});

    function unlock(msg) {
      DOM.clear(gateHost);
      gateHost.appendChild(el('div', { class: 'btn-row' }, [
        el('button', { class: 'btn primary', type: 'button', text: 'Show the worked answer',
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
        el('div', { class: 'h' }, [el('span', { text: 'Worked answer' })]),
        el('div', { class: 'b', style: { display: 'grid', gap: '10px' } }, [
          q.approach ? el('div', { class: 'prose tight', html: q.approach }) : null,
          q.solution ? el('div', { class: 'prose tight', html: q.solution }) : null,
          q.trap ? el('p', { class: 'small muted' },
            [el('b', { text: 'Trap: ' }), el('span', { html: q.trap })]) : null
        ])
      ]));
      answerHost.appendChild(gradeRow(item, goNext, preGrade));
      UI.math(answerHost);
    }

    gateHost.appendChild(UI.gate({
      hint: 'You have worked this one before. Do the main move again before you look.',
      actions: [
        { label: 'Work it', primary: true, onClick: function () {
            DOM.clear(writeHost);
            const wb = WriteBox.mount(writeHost, {
              draftKey: 'written:' + q.id,
              concept: Pool.concept(item.cid) || { id: q.id, title: item.title },
              label: 'Your working',
              onFirstInput: function () { unlock('Attempt registered — you can reveal now.'); }
            });
            wb.focus();
          } },
        { label: 'I did it in my head', onClick: function () { unlock('Attempt registered.'); } },
        { label: "I can't do it now", onClick: function () { reveal('missed'); } }
      ]
    }));

    return el('div', { class: 'inner' }, [
      head(item, 'exercise'),
      el('div', { class: 'prose', style: { fontSize: '1.05rem' }, html: q.prompt }),
      gateHost, writeHost, answerHost
    ]);
  }

  const BUILDERS = {
    state: statementCard, proof: proofCard, question: questionCard, exercise: exerciseCard
  };

  /* ── the reel ────────────────────────────────────────────────────────── */
  function render(args, query) {
    if (query && query.from) { startAt = query.from; onlyNew = false; }

    const reel = el('div', { class: 'reel', tabindex: '-1', 'aria-label': 'Recall reel' });
    const root = el('div', {}, [
      el('h1', { id: 'pagetitle', tabindex: '-1', class: 'sr-only', text: 'Recall' }),
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
      queue = Progress.reel({ onlyNew: onlyNew });

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
        if (!queue.length) queue = Progress.reel({ onlyNew: onlyNew, exclude: placed });
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
            UI.empty(onlyNew
              ? 'Everything in your material has had a first attempt.'
              : 'That is everything you have met, for now. Read something new and it '
                + 'will be here waiting.',
              el('a', { class: 'btn primary', href: Router.href('study'),
                text: 'Open the syllabus' }))
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
