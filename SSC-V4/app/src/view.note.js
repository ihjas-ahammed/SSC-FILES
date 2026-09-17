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
        const done = Progress.isDone(x.id);
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
          Progress.isDone(x.id) ? el('span', { 'aria-hidden': 'true', text: '✓' }) : null,
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

    const tryHost = el('div', { class: 'stack', style: { gap: '10px', marginTop: '12px' }, hidden: true });
    const proofHost = el('div', { class: 'stack', style: { gap: '10px', marginTop: '12px' }, hidden: true });

    let tryBuilt = false;
    let proofBuilt = false;

    function buildTry() {
      const kids = [];
      if (p.idea) {
        kids.push(el('div', { class: 'card tint', style: { padding: '10px 14px' } }, [
          el('div', { class: 'kicker', text: '💡 Proof Strategy / Hint' }),
          el('div', { class: 'prose tight', style: { marginTop: '4px' }, html: p.idea })
        ]));
      }
      if (p.why) {
        kids.push(el('div', { class: 'card flat', style: { padding: '10px 14px', borderLeft: '3px solid var(--accent, #4f46e5)' } }, [
          el('div', { class: 'kicker', text: 'Core Rationale' }),
          el('div', { class: 'prose tight', style: { marginTop: '4px' }, html: p.why })
        ]));
      }
      if (p.rungs && p.rungs.length > 0 && p.rungs[0].why) {
        kids.push(el('div', { class: 'card flat', style: { padding: '8px 12px', background: 'var(--surface-2)' } }, [
          el('div', { class: 'small muted' }, [
            el('b', { text: 'First step clue: ' }),
            el('span', { html: p.rungs[0].why })
          ])
        ]));
      }
      /* The scratchpad is the full writing workspace, not a bare textarea:
         a proof sketch is prose with maths in it, and it is worth keeping.
         Filed under 'proof:<id>' so it never collides with the statement
         draft for the same concept, and it syncs like any other draft. */
      const pad = el('div', { class: 'scratch' });
      WriteBox.mount(pad, {
        draftKey: 'proof:' + c.id, concept: c,
        label: 'Scratchpad · draft the argument before you look',
        placeholder: 'The main move is…'
      });
      kids.push(pad);
      return kids;
    }

    function buildProof() {
      const kids = [];
      if (p.idea) {
        kids.push(el('div', { class: 'card tint', style: { marginBottom: '6px', padding: '10px 14px' } }, [
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
      return kids;
    }

    const tryBtn = el('button', {
      class: 'chip',
      type: 'button',
      'aria-expanded': 'false',
      text: '💡 Try proof (hint)'
    });

    const showBtn = el('button', {
      class: 'chip',
      type: 'button',
      'aria-expanded': 'false',
      text: '👁 Show step-by-step proof'
    });

    tryBtn.addEventListener('click', function () {
      const open = tryHost.hidden;
      if (open && !tryBuilt) {
        tryBuilt = true;
        DOM.add(tryHost, buildTry());
        UI.math(tryHost);
      }
      tryHost.hidden = !open;
      tryBtn.setAttribute('aria-expanded', String(open));
      tryBtn.textContent = open ? 'Hide hint' : '💡 Try proof (hint)';
    });

    showBtn.addEventListener('click', function () {
      const open = proofHost.hidden;
      if (open && !proofBuilt) {
        proofBuilt = true;
        DOM.add(proofHost, buildProof());
        UI.math(proofHost);
      }
      proofHost.hidden = !open;
      showBtn.setAttribute('aria-expanded', String(open));
      showBtn.textContent = open ? 'Hide proof' : '👁 Show step-by-step proof';
    });

    return el('div', { class: 'card' }, [
      el('div', { class: 'spread' }, [
        el('div', { class: 'kicker', text: 'Proof & Rigorous Argument' }),
        el('span', { class: 'count', text: (p.rungs ? p.rungs.length : 0) + ' steps' })
      ]),
      el('div', { class: 'row', style: { gap: '8px', marginTop: '10px', flexWrap: 'wrap' } }, [
        tryBtn,
        showBtn
      ]),
      tryHost,
      proofHost,
      proofDoneRow(c.id, 'proof', Progress.courseIdOf(c))
    ]);
  }

  /* ── Level 2: proof work, marked per task ─────────────────────────────────
     This is the only thing that earns level 2, and it is earned per proof
     rather than per note — a chapter is not "recognised" because one theorem
     in it was worked through. Like the level 1 tick it is self-reported, but
     it reports a much harder act, and the label says exactly what is being
     claimed so it cannot be ticked absent-mindedly. */
  function proofDoneRow(id, what, courseId) {
    if (Store.level(courseId) !== 2) return null;

    const btn = el('button', { class: 'btn', type: 'button' });
    const note = el('span', { class: 'small muted' });
    function paint() {
      const on = Store.isProofDone(id);
      btn.className = 'btn' + (on ? '' : ' primary');
      btn.textContent = on ? '✓ Proof worked through — undo' : 'I worked this ' + what + ' through';
      btn.setAttribute('aria-pressed', String(on));
      note.textContent = on
        ? 'Level 2 on this ' + what + '.'
        : 'Claim this only if you produced the argument yourself, not if you read it.';
    }
    btn.addEventListener('click', function () {
      const on = Store.setProofDone(id, !Store.isProofDone(id));
      paint();
      DOM.announce(on ? 'Marked as worked through.' : 'Level 2 mark removed.');
    });
    paint();

    return el('div', { class: 'proof-done', style: { marginTop: '14px' } }, [
      el('div', { class: 'btn-row' }, [btn]),
      el('p', { class: 'small muted', style: { margin: '8px 0 0' } }, [note])
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
        const tryHost = el('div', { class: 'stack', style: { gap: '8px', marginTop: '8px' }, hidden: true });
        const answerHost = el('div', { class: 'prose tight', style: { marginTop: '8px' }, hidden: true });

        let tryBuilt = false;
        let answerBuilt = false;

        function buildTry() {
          const kids = [];
          if (q.approach) {
            kids.push(el('div', { class: 'card tint', style: { padding: '10px 14px' } }, [
              el('div', { class: 'kicker', text: '💡 Strategic Hint / Approach' }),
              el('div', { class: 'prose tight', style: { marginTop: '4px' }, html: q.approach })
            ]));
          }
          const pad = el('div', { class: 'scratch' });
          WriteBox.mount(pad, {
            draftKey: 'written:' + q.id, concept: c,
            label: 'Scratchpad · draft your answer before you look',
            placeholder: 'Start with what the question is really testing…'
          });
          kids.push(pad);
          return kids;
        }

        function buildAnswer() {
          return [
            q.approach ? el('div', { html: q.approach }) : null,
            q.solution ? el('div', { html: q.solution }) : null,
            q.trap ? el('p', {}, [el('b', { text: 'Trap: ' }), el('span', { html: q.trap })]) : null
          ];
        }

        const tryBtn = el('button', {
          class: 'chip',
          type: 'button',
          'aria-expanded': 'false',
          text: '💡 Try proof (hint)'
        });

        const showBtn = el('button', {
          class: 'chip',
          type: 'button',
          'aria-expanded': 'false',
          text: '👁 Show answer'
        });

        tryBtn.addEventListener('click', function () {
          const open = tryHost.hidden;
          if (open && !tryBuilt) {
            tryBuilt = true;
            DOM.add(tryHost, buildTry());
            UI.math(tryHost);
          }
          tryHost.hidden = !open;
          tryBtn.setAttribute('aria-expanded', String(open));
          tryBtn.textContent = open ? 'Hide hint' : '💡 Try proof (hint)';
        });

        showBtn.addEventListener('click', function () {
          const open = answerHost.hidden;
          if (open && !answerBuilt) {
            answerBuilt = true;
            DOM.add(answerHost, buildAnswer());
            UI.math(answerHost);
          }
          answerHost.hidden = !open;
          showBtn.setAttribute('aria-expanded', String(open));
          showBtn.textContent = open ? 'Hide answer' : '👁 Show answer';
        });

        return el('div', { class: 'card flat', style: { padding: '12px', border: '1px solid var(--rule)' } }, [
          el('div', { class: 'spread', style: { marginBottom: '8px' } }, [
            el('span', { class: 'badge', text: (q.marks || '?') + ' marks' }),
            q.title ? el('span', { class: 'kicker', text: q.title }) : null
          ]),
          el('div', { class: 'prose tight', html: q.prompt }),
          el('div', { class: 'row', style: { gap: '8px', marginTop: '10px', flexWrap: 'wrap' } }, [
            tryBtn,
            showBtn
          ]),
          tryHost,
          answerHost,
          proofDoneRow('w:' + q.id, 'answer', Progress.courseIdOf(c))
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
    const askHost = el('div', {});

    function paintDone() {
      const on = Store.isDone(c.id);
      doneBtn.className = 'btn' + (on ? '' : ' primary');
      doneBtn.textContent = on ? '✓ Ticked — undo' : 'Tick as completed';
      doneBtn.setAttribute('aria-pressed', String(on));
      DOM.clear(ladderHost).appendChild(
        UI.ladder(on, Store.isProofDone(c.id), !!c.proof, Progress.courseIdOf(c)));
    }

    /* Ticking a result you have just read usually means you already have the
       groundwork under it — but "usually" is not "always", so it is offered as
       a question rather than done silently. Everything the chain reaches is
       listed, because a cascade the learner cannot see is a cascade they
       cannot trust. */
    function offerCascade() {
      const pending = UI.pendingPrereqs(c.id);
      DOM.clear(askHost);
      if (!pending.length) return;

      const list = el('div', { class: 'row', style: { marginTop: '2px' } },
        pending.slice(0, 8).map(x => el('span', { class: 'chip', text: x.title })));
      if (pending.length > 8) {
        list.appendChild(el('span', { class: 'count',
          text: '+' + (pending.length - 8) + ' more' }));
      }

      askHost.appendChild(UI.ask({
        title: 'Tick its groundwork too?',
        body: el('div', {}, [
          el('p', { style: { margin: '0 0 8px' },
            text: pending.length + ' ' + DOM.plural(pending.length, 'prerequisite') +
              ' of this result ' + DOM.plural(pending.length, 'is', 'are') +
              ' not ticked yet. Tick them as completed as well?' }),
          list
        ]),
        actions: [
          { label: 'Yes, tick all ' + pending.length, primary: true, onClick: function () {
              const hit = Store.setDoneMany(pending.map(x => x.id), true);
              DOM.clear(askHost);
              DOM.announce('Ticked ' + hit.length + ' ' + DOM.plural(hit.length, 'prerequisite') + '.');
              Router.reload();
            } },
          { label: 'No, just this one', onClick: function () { DOM.clear(askHost); } }
        ]
      }));
    }

    doneBtn.addEventListener('click', function () {
      const on = Store.setDone(c.id, !Store.isDone(c.id));
      paintDone();
      DOM.announce(on ? 'Ticked as completed.' : 'Tick removed.');
      if (on) offerCascade(); else DOM.clear(askHost);
    });
    paintDone();

    DOM.add(root, [
      UI.crumb([
        { text: 'Study', href: 'study' },
        course ? { text: course.title, href: 'study/' + course.id } : null,
        mod ? { text: 'Module ' + mod.n } : null,
        c.sec ? { text: '§' + c.sec } : { text: 'Prerequisite' }
      ].filter(Boolean)),

      el('div', {}, [
        el('div', { class: 'row', style: { marginBottom: '8px' } }, [
          UI.kindBadge(c), UI.tierBadge(c), UI.doneBadge(c.id),
          (Store.level(Progress.courseIdOf(c)) === 2 && Store.isProofDone(c.id))
            ? el('span', { class: 'badge accent', text: '✓ proof worked' }) : null
        ]),
        UI.title(c.title, c.sec ? Pool.sectionTitle(c.sec) : 'Prerequisite'),
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
        ]),
        askHost
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
