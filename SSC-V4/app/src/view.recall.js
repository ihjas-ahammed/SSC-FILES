/* ══════════════════════════════════════════════════════════════════════════
   Recall, as a reel.

   One card per screen, swiped vertically, exactly one card per swipe. Getting
   that last part right is the whole job: a flick carries momentum, and a
   proximity-snapped scroller happily sails past two or three cards before it
   settles. `scroll-snap-stop: always` is the rule that forbids it — the
   scroller must come to rest on the very next snap point no matter how hard
   the flick was. Every card is therefore exactly one viewport tall, and a card
   whose content overflows scrolls INSIDE itself and chains out at its ends.

   What is in the reel is decided by Progress.reel():

     · only material you have ticked — a statement you have never read is not
       recall practice, it is reading with extra steps;
     · proof cards for every ticked concept that carries a proof;
     · ordered by how badly each card needs the attempt, never randomly.

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

  let onlyNew = false;
  let startAt = null;          /* concept id to open on, from ?from= */

  /* ── intro card: the only place the reel is configured ────────────────── */
  function introCard(deck, rebuild) {
    const chip = (label, on, fn) => el('button', { class: 'chip', type: 'button', text: label,
      'aria-pressed': String(on), on: { click: fn } });

    const all = Progress.reel();
    const tried = all.filter(x => x.rank > 0).length;
    const proofs = all.filter(x => x.kind === 'proof').length;
    const ticked = Pool.concepts().filter(c => Store.isDone(c.id)).length;

    return el('div', { class: 'inner' }, [
      el('div', {}, [
        el('div', { class: 'kicker', text: 'Reel · one swipe, one card' }),
        UI.title('Recall')
      ]),
      el('p', { class: 'lede' },
        ['Only what you have already ticked. Each card asks first; nothing is revealed ' +
         'until you have attempted it.']),

      all.length ? el('div', { class: 'card glass' }, [
        el('div', { class: 'spread' }, [
          el('span', { class: 'kicker', text: 'First attempts' }),
          el('span', { class: 'count', text: tried + ' of ' + all.length })
        ]),
        el('div', { style: { margin: '10px 0 14px' } }, [UI.meter(tried, all.length)]),
        el('div', { class: 'row' }, [
          chip('Everything ticked', !onlyNew, function () { onlyNew = false; rebuild(); }),
          chip('Not yet attempted', onlyNew, function () { onlyNew = true; rebuild(); })
        ])
      ]) : null,

      all.length
        ? el('p', { class: 'small muted', style: { margin: 0 },
            text: deck.length + ' ' + DOM.plural(deck.length, 'card') + ' in this reel'
              + (proofs ? ' · ' + proofs + ' of them ' + DOM.plural(proofs, 'is', 'are')
                  + ' proof work' : '')
              + ' · hardest first, then reading order.' })
        : UI.empty(
            ticked
              ? 'Nothing in your ticked material has a statement card yet.'
              : 'The reel draws only on notes you have ticked as completed, and you have not ticked any yet.',
            el('a', { class: 'btn primary', href: Router.href('study'), text: 'Open the syllabus' })),

      (!proofs && all.length)
        ? el('p', { class: 'small muted', style: { margin: 0 },
            text: 'Tick a theorem and its proof joins this reel as a second card.' })
        : null
    ]);
  }

  /* ── shared card chrome ──────────────────────────────────────────────── */
  function head(item, index, total, badge) {
    const rec = Store.card(item.id);
    return el('div', { class: 'stack', style: { gap: '10px' } }, [
      el('div', { class: 'spread' }, [
        el('div', { class: 'row' }, [
          el('span', { class: 'badge accent', text: badge }),
          el('span', { class: 'pos', text: index + ' / ' + total })
        ]),
        el('a', { class: 'small', href: Router.href('note/' + item.cid), text: '§' + item.sec })
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

  function gradeRow(item, goNext, onGraded, preGrade) {
    const rec = Store.card(item.id);
    const attemptedBefore = !!(rec && rec.first);
    const wrap = el('div', {});

    function commit(grade) {
      const r = Store.gradeCard(item.id, grade);
      if (onGraded) onGraded(grade);
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
          el('a', { class: 'btn', href: Router.href('note/' + item.cid), text: 'Open the note' })
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
  function statementCard(item, index, total, goNext, onGraded) {
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
      answerHost.appendChild(gradeRow(item, goNext, onGraded, preGrade));
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
      head(item, index, total, 'statement'),
      el('div', { class: 'prose', style: { fontSize: '1.12rem' }, html: item.q }),
      gateHost, writeHost, answerHost
    ]);
  }

  /* ── a proof card (Level 2 only) ─────────────────────────────────────────
     The ask is the strategy, not the write-up: if you can say why the proof
     goes the way it does, the steps follow. So the reveal leads with `idea`
     and `why`, and the rungs are there to check yourself against. */
  function proofCard(item, index, total, goNext, onGraded) {
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
      answerHost.appendChild(gradeRow(item, goNext, onGraded, preGrade));
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
      head(item, index, total, 'proof · level 2'),
      el('div', { class: 'prose', style: { fontSize: '1.12rem' } }, [
        el('b', { text: 'Reconstruct the proof of ' }),
        el('span', { text: concept.title + '.' }),
        el('p', { class: 'small muted', style: { margin: '8px 0 0' },
          text: 'The strategy and why it works, not the full write-up.' })
      ]),
      gateHost, writeHost, answerHost
    ]);
  }

  /* ── the reel ────────────────────────────────────────────────────────── */
  function render(args, query) {
    if (query && query.from) { startAt = query.from; onlyNew = false; }

    const reel = el('div', { class: 'reel', tabindex: '-1', 'aria-label': 'Recall reel' });
    const rail = el('div', { class: 'reel-rail', 'aria-hidden': 'true' });
    const root = el('div', {}, [
      el('h1', { id: 'pagetitle', tabindex: '-1', class: 'sr-only', text: 'Recall' }),
      rail, reel
    ]);

    function build() {
      const deck = Progress.reel({ onlyNew: onlyNew });
      DOM.clear(reel);
      DOM.clear(rail);

      const cards = [];
      const dots = [];

      /* Every card is exactly one viewport tall, so a card's position is
         index × clientHeight and nothing can drift. Overflowing content
         scrolls inside the card (.inner) and chains out at its ends. */
      const glide = i => {
        const to = cards[i];
        if (!to) return;
        reel.scrollTo({ top: to.offsetTop, behavior: DOM.reduced() ? 'auto' : 'smooth' });
      };

      cards.push(el('section', { class: 'reel-card' }, [introCard(deck, function () {
        build();
        reel.scrollTo({ top: 0, behavior: 'auto' });
      })]));

      deck.forEach(function (item, i) {
        const make = item.kind === 'proof' ? proofCard : statementCard;
        const section = el('section', { class: 'reel-card' }, [
          make(item, i + 1, deck.length,
            function () { glide(i + 2); },
            function (grade) {
              const dot = dots[i + 1];
              if (dot) dot.classList.toggle('got', grade === 'got');
            })
        ]);
        section.appendChild(el('div', { class: 'reel-hint' },
          [el('span', { text: i + 1 < deck.length ? 'swipe up for the next' : 'end of the reel' })]));
        cards.push(section);
      });

      if (!deck.length && onlyNew) {
        cards.push(el('section', { class: 'reel-card' }, [
          el('div', { class: 'inner' }, [
            UI.empty('Every card in your ticked material has had a first attempt.',
              el('button', { class: 'btn', type: 'button', text: 'Show everything again',
                on: { click: function () { onlyNew = false; build(); } } }))
          ])
        ]));
      }

      cards.forEach(function (c, i) {
        reel.appendChild(c);
        const dot = el('i');
        if (i && deck[i - 1]) {
          const r = Store.card(deck[i - 1].id);
          if (r && r.first === 'got') dot.classList.add('got');
          if (deck[i - 1].kind === 'proof') dot.classList.add('pf');
        }
        dots.push(dot);
        rail.appendChild(dot);
      });

      /* Mark the card in view. Cards are one viewport tall, so a simple
         majority-of-the-viewport test is both correct and cheap. */
      if (window.IntersectionObserver) {
        const io = new window.IntersectionObserver(function (entries) {
          entries.forEach(function (e) {
            const seen = e.intersectionRect ? e.intersectionRect.height : 0;
            const port = (e.rootBounds && e.rootBounds.height) || reel.clientHeight || 1;
            const live = e.isIntersecting && seen / port > 0.55;
            e.target.classList.toggle('live', live);
            if (live) {
              const i = cards.indexOf(e.target);
              Array.prototype.forEach.call(rail.children, (d, j) => d.classList.toggle('on', j === i));
            }
          });
        }, { root: reel, threshold: [0, 0.25, 0.56, 0.9, 1] });
        cards.forEach(c => io.observe(c));
      } else {
        cards.forEach(c => c.classList.add('live'));
        if (rail.firstChild) rail.firstChild.classList.add('on');
      }

      UI.math(reel);

      if (startAt) {
        const at = deck.map(c => c.cid).indexOf(startAt);
        startAt = null;
        if (at >= 0) window.requestAnimationFrame(function () {
          reel.scrollTo({ top: cards[at + 1].offsetTop, behavior: 'auto' });
        });
      }
    }

    /* Keyboard moves exactly one card, like the swipe. Content that overflows
       is reached by scrolling inside the card, which the browser does for us
       when the focus is in there. */
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
