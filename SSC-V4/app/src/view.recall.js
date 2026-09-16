/* ══════════════════════════════════════════════════════════════════════════
   Statement recall, as a reel.

   One statement per screen, swiped vertically. There is no list to survey and
   no pile to dread — just the card in front of you, and the rail on the right
   telling you where you are.

   The rules from HOOK_claude.md are unchanged: the deck is `state` cards only,
   nothing is revealed before an attempt, and the first grade is the one that
   counts.
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

  const isNew = c => !(Store.card(c.id) || {}).first;
  const visible = () => onlyNew ? Pool.deck().filter(isNew) : Pool.deck();

  /* ── intro card: the only place the deck is configured ────────────────── */
  function introCard(deck, rebuild) {
    const chip = (label, on, fn) => el('button', { class: 'chip', type: 'button', text: label,
      'aria-pressed': String(on), on: { click: fn } });
    const s = Store.summary([], Pool.ids.cards(), []);

    return el('div', { class: 'inner' }, [
      el('div', {}, [
        el('div', { class: 'kicker', text: 'Reel · swipe up' }),
        UI.title('Statement recall')
      ]),
      el('p', { class: 'lede' },
        ['Theorem statements only — the one thing a flashcard measures honestly. ' +
         'Each card asks first; nothing is revealed until you have attempted it.']),
      el('div', { class: 'card glass' }, [
        el('div', { class: 'spread' }, [
          el('span', { class: 'kicker', text: 'First attempts' }),
          el('span', { class: 'count', text: s.cards.tried + ' of ' + s.cards.total })
        ]),
        el('div', { style: { margin: '10px 0 14px' } },
          [UI.meter(s.cards.tried, s.cards.total)]),
        el('div', { class: 'row' }, [
          chip('All statements', !onlyNew, function () { onlyNew = false; rebuild(); }),
          chip('Not yet attempted', onlyNew, function () { onlyNew = true; rebuild(); })
        ])
      ]),
      el('p', { class: 'small muted', style: { margin: 0 },
        text: deck.length + ' ' + DOM.plural(deck.length, 'card') + ' in this reel · ' +
          'use the arrow keys if you prefer them to swiping.' })
    ]);
  }

  /* ── one statement card ──────────────────────────────────────────────── */
  function statementCard(card, index, total, goNext, onGraded) {
    const concept = Pool.concept(card.cid);
    const rec = Store.card(card.id);
    const attemptedBefore = !!(rec && rec.first);

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
          el('div', { class: 'prose tight', html: card.a }),
          el('div', { class: 'row', style: { marginTop: '12px' } }, [
            el('a', { class: 'chip', href: Router.href('note/' + card.cid),
              text: 'Full note · ' + concept.title })
          ])
        ])
      ]));
      answerHost.appendChild(gradeRow(preGrade));
      UI.math(answerHost);
    }

    function gradeRow(preGrade) {
      const wrap = el('div', {});
      DOM.add(wrap, [
        el('p', { class: 'small muted', style: { margin: '0 0 8px' },
          text: attemptedBefore
            ? 'How did this pass go? Your first attempt stays on record.'
            : 'How did your attempt compare with the statement above?' }),
        el('div', { class: 'btn-row' }, GRADES.map(g =>
          el('button', { class: 'btn ' + g.cls, type: 'button', text: g.label,
            on: { click: function () { commit(g.k); } } })))
      ]);

      function commit(grade) {
        const r = Store.gradeCard(card.id, grade);
        if (onGraded) onGraded(grade);
        DOM.clear(wrap);
        DOM.add(wrap, [
          el('div', { class: 'verdict ' +
            (grade === 'got' ? 'ok' : grade === 'missed' ? 'bad' : 'warn') }, [
            el('span', { class: 'g', 'aria-hidden': 'true',
              text: grade === 'got' ? '✓' : grade === 'missed' ? '✗' : '~' }),
            el('span', {}, [
              el('b', { text: r.tries === 1 ? 'First attempt recorded: ' + grade
                : 'This pass: ' + grade }),
              el('span', { text: r.tries > 1
                ? 'First attempt (' + r.first + ') is unchanged.'
                : 'Completion and recall stay separate numbers.' })
            ])
          ]),
          el('div', { class: 'btn-row', style: { marginTop: '12px' } }, [
            el('button', { class: 'btn primary', type: 'button', text: 'Next statement ↓',
              on: { click: goNext } }),
            el('a', { class: 'btn', href: Router.href('note/' + card.cid), text: 'Open the note' })
          ])
        ]);
        DOM.announce('Recorded ' + grade + '.');
      }

      if (preGrade) window.setTimeout(() => commit(preGrade), 0);
      return wrap;
    }

    gateHost.appendChild(UI.gate({
      hint: 'State it from memory first — write it out, or say it aloud and declare the attempt.',
      actions: [
        { label: 'Write it in LaTeX', primary: true, onClick: function () {
            DOM.clear(writeHost);
            const wb = WriteBox.mount(writeHost, {
              concept: concept, compact: true, label: 'Your statement, in LaTeX',
              onFirstInput: function () { unlock('Attempt registered — you can reveal now.'); }
            });
            wb.focus();
          } },
        { label: 'I stated it aloud', onClick: function () { unlock('Attempt registered.'); } },
        { label: "I can't state it", onClick: function () { reveal('missed'); } }
      ]
    }));

    const inner = el('div', { class: 'inner' }, [
      el('div', { class: 'spread' }, [
        el('div', { class: 'row' }, [
          el('span', { class: 'badge accent', text: 'state' }),
          el('span', { class: 'pos', text: index + ' / ' + total })
        ]),
        el('a', { class: 'small', href: Router.href('note/' + card.cid), text: '§' + card.sec })
      ]),
      el('div', { class: 'kicker', text: concept.kind + ' · ' + concept.title }),
      el('div', { class: 'prose', style: { fontSize: '1.12rem' }, html: card.q }),
      attemptedBefore
        ? el('div', { class: 'row' }, [
            el('span', {
              class: 'badge ' + (rec.first === 'got' ? 'ok' : rec.first === 'missed' ? 'bad' : 'warn'),
              text: 'first attempt: ' + rec.first
            }),
            el('span', { class: 'small muted', text: 'this pass will not change it' })
          ])
        : null,
      gateHost, writeHost, answerHost
    ]);

    return inner;
  }

  /* ── the reel ────────────────────────────────────────────────────────── */
  function render(args, query) {
    if (query && query.from) { startAt = query.from; onlyNew = false; }

    const reel = el('div', { class: 'reel', tabindex: '-1',
      'aria-label': 'Statement recall reel' });
    const rail = el('div', { class: 'reel-rail', 'aria-hidden': 'true' });
    const root = el('div', {}, [
      el('h1', { id: 'pagetitle', tabindex: '-1', class: 'sr-only', text: 'Statement recall' }),
      rail, reel
    ]);

    function build() {
      const deck = visible();
      DOM.clear(reel);
      DOM.clear(rail);

      const cards = [];
      const dots = [];
      const glide = to => reel.scrollTo({ top: to,
        behavior: DOM.reduced() ? 'auto' : 'smooth' });

      cards.push(el('section', { class: 'reel-card' }, [introCard(deck, function () {
        build();
        reel.scrollTo({ top: 0, behavior: 'auto' });
      })]));

      deck.forEach(function (card, i) {
        const section = el('section', { class: 'reel-card' }, [
          statementCard(card, i + 1, deck.length,
            function () { glide((i + 2) * reel.clientHeight); },
            function (grade) {
              const dot = dots[i + 1];
              if (dot) dot.classList.toggle('got', grade === 'got');
            })
        ]);
        section.appendChild(el('div', { class: 'reel-hint' },
          [el('span', { text: i + 1 < deck.length ? '↑ swipe for the next' : '↑ end of the reel' })]));
        cards.push(section);
      });

      if (!deck.length) {
        cards.push(el('section', { class: 'reel-card' }, [
          el('div', { class: 'inner' }, [
            UI.empty('Every statement in this slice has had a first attempt.',
              el('button', { class: 'btn', type: 'button', text: 'Show all statements',
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
        }
        dots.push(dot);
        rail.appendChild(dot);
      });

      /* mark the card in view, keep the rail in step */
      if (window.IntersectionObserver) {
        const io = new window.IntersectionObserver(function (entries) {
          entries.forEach(function (e) {
            const i = cards.indexOf(e.target);
            e.target.classList.toggle('live', e.isIntersecting && e.intersectionRatio > 0.55);
            if (e.isIntersecting && e.intersectionRatio > 0.55) {
              Array.prototype.forEach.call(rail.children, (d, j) => d.classList.toggle('on', j === i));
            }
          });
        }, { root: reel, threshold: [0.2, 0.56, 0.9] });
        cards.forEach(c => io.observe(c));
      } else {
        cards.forEach(c => c.classList.add('live'));
        if (rail.firstChild) rail.firstChild.classList.add('on');
      }

      UI.math(reel);

      /* land on the card the note sent us to */
      if (startAt) {
        const at = deck.map(c => c.cid).indexOf(startAt);
        startAt = null;
        if (at >= 0) window.requestAnimationFrame(function () {
          cards[at + 1].scrollIntoView({ behavior: 'auto' });
        });
      }
    }

    /* keyboard: arrows and page keys move one card at a time */
    reel.addEventListener('keydown', function (e) {
      const keys = { ArrowDown: 1, PageDown: 1, ArrowUp: -1, PageUp: -1 };
      const dir = keys[e.key];
      if (!dir) return;
      if (/^(TEXTAREA|INPUT)$/.test((e.target.tagName || '').toUpperCase())) return;
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
