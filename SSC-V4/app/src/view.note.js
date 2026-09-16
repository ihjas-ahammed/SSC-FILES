/* ══════════════════════════════════════════════════════════════════════════
   One concept note.

   Navigation is the point of this screen as much as the content is: the
   prerequisite chain above it, what it unlocks below it, the previous and next
   concept in reading order, the questions that examine it. Nothing about this
   concept should be more than one tap away.

   Completion is a deliberate act with a deliberate label — "encountered the
   material", level 1 — so it can never read as evidence of recall.
   ══════════════════════════════════════════════════════════════════════════ */

const ViewNote = (function () {

  const el = DOM.el;

  /* ── the prerequisite chain, walked and rendered as a path ────────────── */
  function prereqPath(c) {
    const chain = Pool.chain(c.id, 3);
    if (chain.length < 2) return null;
    const missing = chain.filter(x => x.id !== c.id && !Store.isDone(x.id)).length;

    return el('div', { class: 'card' }, [
      el('div', { class: 'spread' }, [
        el('div', { class: 'kicker', text: 'Route to this result' }),
        missing
          ? el('span', { class: 'badge warn', text: missing + ' not ticked' })
          : el('span', { class: 'badge ok', text: 'groundwork done' })
      ]),
      el('div', { class: 'path', style: { marginTop: '10px' } }, chain.map(function (x, i) {
        const here = x.id === c.id;
        const done = Store.isDone(x.id);
        const kids = [
          el('span', { class: 'dot', 'aria-hidden': 'true',
            text: here ? '●' : done ? '✓' : String(i + 1) }),
          el('span', { class: 'tt' }, [
            el('b', { text: x.title }),
            el('span', { text: here ? 'you are here' : '§' + x.sec + ' · ' + x.kind })
          ])
        ];
        return here
          ? el('div', { class: 'pstep here' }, kids)
          : el('a', { class: 'pstep' + (done ? ' done' : ''),
              href: Router.href('note/' + x.id) }, kids);
      }))
    ]);
  }

  /* ── reverse edges: what this result is used for ──────────────────────── */
  function unlocks(c) {
    const next = Pool.unlocks(c.id);
    if (!next.length) return null;
    return el('div', { class: 'card tint' }, [
      el('div', { class: 'kicker', text: 'Used later by' }),
      el('div', { class: 'row', style: { marginTop: '10px' } }, next.map(function (x) {
        return el('a', { class: 'chip', href: Router.href('note/' + x.id) }, [
          Store.isDone(x.id) ? el('span', { 'aria-hidden': 'true', text: '✓' }) : null,
          el('span', { text: x.title })
        ]);
      }))
    ]);
  }

  function prevNext(c) {
    const n = Pool.neighbours(c.id);
    if (!n.prev && !n.next) return null;
    return el('div', { class: 'nav-pair' }, [
      n.prev ? el('a', { href: Router.href('note/' + n.prev.id) }, [
        el('span', { class: 'k', text: '‹ previous' }),
        el('span', { class: 'v', text: n.prev.title })
      ]) : el('span', {}),
      n.next ? el('a', { class: 'next', href: Router.href('note/' + n.next.id) }, [
        el('span', { class: 'k', text: 'next ›' }),
        el('span', { class: 'v', text: n.next.title })
      ]) : el('span', {})
    ]);
  }

  function proofView(c) {
    if (!c.proof) return null;
    const p = c.proof;
    return el('div', { class: 'card' }, [
      el('div', { class: 'spread' }, [
        el('div', { class: 'kicker', text: 'Proof & Rigorous Argument' }),
        el('span', { class: 'count', text: (p.rungs ? p.rungs.length : 0) + ' steps' })
      ]),
      el('div', { style: { marginTop: '10px' } }, [
        UI.reveal('Proof breakdown', function () {
          const kids = [];
          if (p.idea) {
            kids.push(el('div', { class: 'card tint', style: { marginBottom: '12px', padding: '10px 14px' } }, [
              el('div', { class: 'kicker', text: 'Key Idea' }),
              el('div', { class: 'prose tight', style: { marginTop: '4px' }, html: p.idea })
            ]));
          }
          if (p.rungs && p.rungs.length) {
            kids.push(el('div', { class: 'stack', style: { gap: '10px' } },
              p.rungs.map(function (r, idx) {
                return el('div', { class: 'card flat', style: { padding: '10px 14px', borderLeft: '3px solid var(--accent, #4f46e5)' } }, [
                  el('div', { class: 'small muted', style: { marginBottom: '6px' } }, [
                    el('b', { text: 'Step ' + (idx + 1) + ': ' }),
                    el('span', { html: r.why })
                  ]),
                  r.m ? el('div', { html: r.m }) : null
                ]);
              })
            ));
          }
          if (p.ends) {
            kids.push(el('div', { class: 'prose tight', style: { marginTop: '12px', fontStyle: 'italic', borderTop: '1px solid var(--line, rgba(0,0,0,0.1))', paddingTop: '8px' }, html: p.ends }));
          }
          return el('div', { class: 'stack' }, kids);
        }, { openLabel: 'Show step-by-step proof', closeLabel: 'Hide proof' })
      ])
    ]);
  }

  function traps(c) {
    if (!c.traps || !c.traps.length) return null;
    return el('div', { class: 'card' }, [
      el('div', { class: 'kicker', text: 'Where marks are lost' }),
      el('ul', { class: 'prose tight', style: { marginTop: '10px', paddingLeft: '1.1em' } },
        c.traps.map(t => el('li', { html: t })))
    ]);
  }

  function selfChecks(c) {
    const cards = (c.cards || []);
    if (!cards.length) return null;
    return el('div', { class: 'card' }, [
      el('div', { class: 'kicker', text: 'Self-check' }),
      el('p', { class: 'small muted', style: { margin: '4px 0 12px' },
        text: 'Practice prompts. Answer in your head first — nothing here is recorded.' }),
      el('div', { class: 'stack', style: { gap: '14px' } }, cards.map(function (card) {
        return el('div', { class: 'stack', style: { gap: '6px' } }, [
          el('div', { class: 'prose tight', html: card.q }),
          UI.reveal(card.kind, () => el('div', { class: 'prose tight', html: card.a }),
            { openLabel: 'Show answer', closeLabel: 'Hide' })
        ]);
      }))
    ]);
  }

  function questionsOn(c) {
    const qs = Pool.objectiveFor(c.id);
    if (!qs.length) return null;
    return el('div', { class: 'card' }, [
      el('div', { class: 'spread' }, [
        el('div', { class: 'kicker', text: 'Objective questions on this' }),
        el('span', { class: 'count', text: String(qs.length) })
      ]),
      DOM.stagger(el('div', { class: 'list', style: { marginTop: '12px' } }, qs.map(function (q) {
        const rec = Store.omr(q.id);
        const v = rec && rec.first && rec.first.verdict;
        return el('a', { class: 'item', href: Router.href('omr/' + q.id) }, [
          el('span', { class: 'ix' + (v === 'correct' ? ' ok' : v ? ' bad' : ''),
            text: v === 'correct' ? '✓' : v ? '✗' : '·' }),
          el('span', { class: 'tt' }, [
            el('b', { text: q.type + ' · ' + q.marks + ' ' + DOM.plural(q.marks, 'mark') }),
            el('span', { text: v ? 'first attempt: ' + v : 'not attempted' })
          ]),
          el('span', { class: 'go', 'aria-hidden': 'true', text: '›' })
        ]);
      })))
    ]);
  }

  function writtenOn(c) {
    const qs = Pool.writtenFor(c.id);
    if (!qs.length) return null;
    return el('div', { class: 'card' }, [
      el('div', { class: 'kicker', text: 'Written exam questions on this' }),
      el('div', { class: 'stack', style: { gap: '14px', marginTop: '12px' } }, qs.map(function (q) {
        return el('div', { class: 'stack', style: { gap: '8px' } }, [
          el('div', { class: 'row' }, [
            el('span', { class: 'badge', text: (q.marks || '?') + ' marks' }),
            q.title ? el('span', { class: 'kicker', text: q.title }) : null
          ]),
          el('div', { class: 'prose tight', html: q.prompt }),
          UI.reveal('Worked answer', function () {
            return el('div', { class: 'prose tight' }, [
              q.approach ? el('div', { html: q.approach }) : null,
              q.solution ? el('div', { html: q.solution }) : null,
              q.trap ? el('p', {}, [el('b', { text: 'Trap: ' }), el('span', { html: q.trap })]) : null
            ]);
          }, { openLabel: 'I have attempted it — show the answer', closeLabel: 'Hide the answer' })
        ]);
      }))
    ]);
  }

  function render(args) {
    const c = Pool.concept(args && args[0]);
    if (!c) return el('div', { class: 'stack' }, [
      UI.title('Not found'),
      UI.empty('That concept is not in the loaded pool.',
        el('a', { class: 'btn', href: Router.href('study'), text: 'Back to the syllabus' }))
    ]);

    Tree.revealPath(c.id);      /* so the syllabus is unfolded when you go back */

    const course = Pool.courseOfSec(c.sec);
    const mod = Pool.moduleOfSec(c.sec);
    const root = el('div', { class: 'stack' });

    /* completion toggle */
    const doneBtn = el('button', { class: 'btn', type: 'button' });
    const ladderHost = el('div', {});
    function paintDone() {
      const on = Store.isDone(c.id);
      doneBtn.className = 'btn' + (on ? '' : ' primary');
      doneBtn.textContent = on ? '✓ Ticked — undo' : 'Tick as completed';
      doneBtn.setAttribute('aria-pressed', String(on));
      DOM.clear(ladderHost).appendChild(UI.ladder(on));
    }
    doneBtn.addEventListener('click', function () {
      const on = Store.setDone(c.id, !Store.isDone(c.id));
      paintDone();
      DOM.announce(on ? 'Ticked as completed.' : 'Tick removed.');
    });
    paintDone();

    DOM.add(root, [
      UI.crumb([
        { text: 'Study', href: 'study' },
        course ? { text: course.title, href: 'study/' + course.id } : null,
        mod ? { text: 'Module ' + mod.n } : null,
        { text: '§' + c.sec }
      ].filter(Boolean)),

      el('div', {}, [
        el('div', { class: 'row', style: { marginBottom: '8px' } }, [
          UI.kindBadge(c), UI.tierBadge(c), UI.doneBadge(c.id)
        ]),
        UI.title(c.title, Pool.sectionTitle(c.sec)),
        el('p', { class: 'lede', style: { marginTop: '8px' }, text: c.oneLine })
      ]),

      prereqPath(c),

      el('div', { class: 'card' }, [
        el('div', { class: 'kicker', text: 'Statement' }),
        el('div', { style: { marginTop: '10px' } }, [UI.prose(c.statement)])
      ]),

      Fig.mount(c),

      c.intuition ? el('div', { class: 'card tint' }, [
        el('div', { class: 'kicker', text: 'What it really says' }),
        el('div', { style: { marginTop: '10px' } }, [UI.prose(c.intuition, 'tight')])
      ]) : null,

      proofView(c),

      traps(c),

      el('div', { class: 'card glass' }, [
        el('div', { class: 'kicker', text: 'This note' }),
        el('div', { style: { margin: '10px 0 14px' } }, [ladderHost]),
        el('div', { class: 'btn-row' }, [
          doneBtn,
          el('a', { class: 'btn', href: Router.href('write/' + c.id), text: 'Write the statement' })
        ]),
        el('div', { class: 'btn-row', style: { marginTop: '10px' } }, [
          el('a', { class: 'btn', href: Router.href('recall?from=' + encodeURIComponent(c.id)),
            text: 'Recall from memory' }),
          Pool.objectiveFor(c.id).length
            ? el('a', { class: 'btn', href: Router.href('omr?sec=' + c.sec), text: 'Questions' })
            : null
        ])
      ]),

      unlocks(c),
      questionsOn(c),
      writtenOn(c),
      selfChecks(c),
      prevNext(c)
    ]);

    UI.math(root);
    return root;
  }

  return { render };
})();
