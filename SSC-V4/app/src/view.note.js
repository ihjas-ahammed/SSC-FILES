/* ══════════════════════════════════════════════════════════════════════════
   One concept note.

   Navigation is the point of this screen as much as the content is: the
   prerequisite chain above it, what it unlocks below it, the previous and next
   concept in reading order, the questions that examine it. Nothing about this
   concept should be more than one tap away.

   Completion is a deliberate act with a deliberate label — "encountered the
   material", level 1 — so it can never read as evidence of recall. Level 2 is
   claimed under the proof, level 3 under the section's exercises, and each is
   a different act rather than a different setting.
   ══════════════════════════════════════════════════════════════════════════ */

const ViewNote = (function () {

  const el = DOM.el;

  /* ── the prerequisite chain, walked and rendered as a path ────────────── */
  /* The chain is judged AT THE LEVEL OF THIS NOTE, not at the highest level
     anything in it happens to have reached. Reading a result you have only
     read is level-1 work, and demanding level-2 groundwork for it was the bug
     that made every prerequisite look outstanding the moment one of them was
     pushed further. */
  function prereqPath(c) {
    const chain = Pool.chain(c.id, 3);
    if (chain.length < 2) return null;
    const target = Progress.prereqTarget(c.id);
    const missing = chain.filter(x => x.id !== c.id && !Progress.prereqOk(x.id, target)).length;

    return el('div', { class: 'card' }, [
      el('div', { class: 'spread' }, [
        el('div', { class: 'kicker', text: 'Route to this result' }),
        missing
          ? el('span', { class: 'badge warn', text: missing + ' below level ' + target })
          : el('span', { class: 'badge ok', text: 'groundwork at level ' + target })
      ]),
      el('div', { class: 'path', style: { marginTop: '10px' } }, chain.map(function (x, i) {
        const here = x.id === c.id;
        const lv = Progress.level(x.id);
        const ok = Progress.prereqOk(x.id, target);
        const kids = [
          el('span', { class: 'dot', 'aria-hidden': 'true' },
            [ok && !here ? DOM.mi('check', 'xs') : el('span', { text: here ? '•' : String(i + 1) })]),
          el('span', { class: 'tt' }, [
            el('b', { text: x.title }),
            el('span', { text: here ? 'you are here'
              : '§' + x.sec + ' · ' + x.kind + ' · level ' + lv })
          ])
        ];
        return here
          ? el('div', { class: 'pstep here' }, kids)
          : el('a', { class: 'pstep' + (ok ? ' done' : ''), 'data-lv': String(lv),
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
          Progress.level(x.id) >= 1 ? DOM.mi('check', 'xs') : null,
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
        el('span', { class: 'k', text: 'previous' }),
        el('span', { class: 'v', text: n.prev.title })
      ]) : el('span', {}),
      n.next ? el('a', { class: 'next', href: Router.href('note/' + n.next.id) }, [
        el('span', { class: 'k', text: 'next' }),
        el('span', { class: 'v', text: n.next.title })
      ]) : el('span', {})
    ]);
  }

  function proofView(c, onTick) {
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
          el('div', { class: 'kicker' }, [DOM.mi('lightbulb', 'xs'), el('span', { text: ' Proof strategy' })]),
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
            const rungItems = [
              el('div', { class: 'small muted', style: { marginBottom: '6px' } }, [
                el('b', { text: 'Step ' + (idx + 1) + ': ' }),
                el('span', { html: r.why })
              ])
            ];

            const rawContent = (r.meaning || r.m || '').trim();
            if (rawContent) {
              const isExplanation = !!r.meaning ||
                /^what this (really )?means/i.test(rawContent) ||
                /^meaning:/i.test(rawContent) ||
                (!rawContent.startsWith('$$') && !/^\s*\\[a-zA-Z]+/.test(rawContent) && rawContent.split(/\s+/).length > 6 && !rawContent.includes('\\begin'));

              if (isExplanation) {
                const text = rawContent.replace(/^(what this (really )?means:?|meaning:?)\s*/i, '');
                rungItems.push(el('div', {
                  class: 'rung-meaning',
                  style: {
                    marginTop: '8px',
                    padding: '8px 12px',
                    background: 'var(--surface-2, rgba(0,0,0,0.03))',
                    borderRadius: '6px',
                    borderLeft: '2px solid var(--accent, #4f46e5)',
                    fontSize: '0.88rem',
                    lineHeight: '1.45'
                  }
                }, [
                  el('div', {
                    class: 'kicker',
                    style: { fontSize: '0.68rem', color: 'var(--accent, #4f46e5)', marginBottom: '3px', fontWeight: '600' },
                    text: 'What this really means'
                  }),
                  el('div', { class: 'prose tight', html: text })
                ]));
              } else {
                let mathHtml = rawContent;
                if (!mathHtml.includes('$')) {
                  mathHtml = '$$' + mathHtml + '$$';
                }
                rungItems.push(el('div', { style: { marginTop: '6px', overflowX: 'auto' }, html: mathHtml }));
              }
            }

            if (r.meaning && r.m && r.m.trim() !== r.meaning.trim()) {
              let mathHtml = r.m.trim();
              if (!mathHtml.includes('$')) {
                mathHtml = '$$' + mathHtml + '$$';
              }
              rungItems.splice(1, 0, el('div', { style: { marginTop: '6px', overflowX: 'auto' }, html: mathHtml }));
            }

            return el('div', { class: 'card flat', style: { padding: '10px 14px', borderLeft: '3px solid var(--accent, #4f46e5)' } }, rungItems);
          })
        ));
      }
      if (p.ends) {
        kids.push(el('div', { class: 'prose tight', style: { marginTop: '12px', fontStyle: 'italic', borderTop: '1px solid var(--line, rgba(0,0,0,0.1))', paddingTop: '8px' }, html: p.ends }));
      }
      return kids;
    }

    const tryBtn = el('button', { class: 'chip', type: 'button', 'aria-expanded': 'false' },
      [DOM.mi('lightbulb', 'sm'), el('span', { class: 'lb', text: 'Try proof (hint)' })]);

    const showBtn = el('button', { class: 'chip', type: 'button', 'aria-expanded': 'false' },
      [DOM.mi('visibility', 'sm'), el('span', { class: 'lb', text: 'Show step-by-step proof' })]);

    tryBtn.addEventListener('click', function () {
      const open = tryHost.hidden;
      if (open && !tryBuilt) {
        tryBuilt = true;
        DOM.add(tryHost, buildTry());
        UI.math(tryHost);
      }
      tryHost.hidden = !open;
      tryBtn.setAttribute('aria-expanded', String(open));
      tryBtn.querySelector('.lb').textContent = open ? 'Hide hint' : 'Try proof (hint)';
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
      showBtn.querySelector('.lb').textContent = open ? 'Hide proof' : 'Show step-by-step proof';
    });

    const row = taskRow(c.id, { level: 2, noun: 'proof', onTick: onTick });
    const view = el('div', { class: 'card' }, [
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
      row
    ]);
    view._paintProofDone = row._paint;
    return view;
  }

  /* ── the claim that earns a level ────────────────────────────────────────
     Level 2 is claimed under a proof; level 3 under a written exercise. It is
     one control because it is one kind of claim — "I produced this myself" —
     and it is deliberately not a checkbox you can tick on the way past. */
  function taskRow(id, opts) {
    const o = opts || {};
    const lv = o.level || 2;
    const noun = o.noun || 'proof';
    const btn = el('button', { class: 'btn', type: 'button' });
    const note = el('p', { class: 'small muted', style: { margin: '8px 0 0' } });

    function paint() {
      const on = Store.isProofDone(id);
      btn.className = 'btn' + (on ? '' : ' primary');
      DOM.clear(btn);
      DOM.add(btn, [
        DOM.mi(on ? 'task_alt' : 'radio_button_unchecked', 'sm'),
        el('span', { text: on
          ? 'Level ' + lv + ' claimed — undo'
          : 'Tick level ' + lv + ' (I worked this ' + noun + ' through)' })
      ]);
      btn.setAttribute('aria-pressed', String(on));
      note.textContent = on
        ? 'Level ' + lv + ' earned on this ' + noun + '.'
        : 'Claim this only if you produced the argument yourself, not if you read it.';
    }

    btn.addEventListener('click', function () {
      const next = !Store.isProofDone(id);
      Store.setProofDone(id, next);
      /* A proof cannot be worked through on a note you have not read, so
         claiming level 2 carries level 1 with it. An exercise key ('w:') is a
         section-wide claim and owns no single concept, so it carries nothing. */
      if (next && id.indexOf('w:') !== 0 && !Store.isDone(id)) Store.setDone(id, true);
      Progress.dropCache();
      paint();
      if (o.onTick) o.onTick();
      DOM.announce(next ? 'Level ' + lv + ' claimed.' : 'Level ' + lv + ' claim removed.');
    });
    paint();

    const host = el('div', { class: 'proof-done', style: { marginTop: '16px' } }, [
      el('div', { class: 'kicker', style: { marginBottom: '8px' }, text: 'Level ' + lv }),
      el('div', { class: 'btn-row' }, [btn]),
      note
    ]);
    host._paint = paint;
    return host;
  }

  /* Level 3 is a SECTION bar, so the note has to say where the section stands
     — otherwise a learner works the two exercises filed under this theorem,
     sees no green, and reads it as a bug. */
  function sectionTasks(c) {
    if (!c.sec) return null;
    const t = Progress.secTaskState(c.sec);
    if (!t.total) {
      return el('div', { class: 'card tint' }, [
        el('div', { class: 'kicker', text: 'Level 3 · §' + c.sec }),
        el('p', { class: 'small muted', style: { margin: '6px 0 0' },
          text: 'No Bartle exercises have been delivered for this section yet, so level 3 '
            + 'is not reachable here. This note tops out at level 2 until they arrive.' })
      ]);
    }
    const others = t.list.filter(q => (q.tests || []).indexOf(c.id) < 0);
    return el('div', { class: 'card tint' }, [
      el('div', { class: 'spread' }, [
        el('div', { class: 'kicker', text: 'Level 3 · §' + c.sec + ' exercises' }),
        el('span', { class: 'count', text: t.done + ' / ' + t.total })
      ]),
      el('div', { style: { marginTop: '10px' } }, [UI.meter(t.done, t.total, 3)]),
      el('p', { class: 'small muted', style: { margin: '10px 0 0' },
        text: t.ready
          ? 'Every exercise in this section is worked through — the section is at level 3.'
          : 'The whole section has to be worked through before anything in it turns green.' }),
      others.length ? el('div', { class: 'row', style: { marginTop: '10px' } },
        others.slice(0, 6).map(function (q) {
          const c2 = Pool.concept((q.tests || [])[0]);
          return el('a', { class: 'chip', href: Router.href('note/' + (c2 ? c2.id : c.id)) }, [
            DOM.mi(Progress.taskDone(q) ? 'check' : 'radio_button_unchecked', 'xs'),
            el('span', { text: q.title || ('Exercise ' + q.id) })
          ]);
        })) : null
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
          el('span', { class: 'ix' + (v === 'correct' ? ' ok' : v ? ' bad' : '') },
            [DOM.mi(v === 'correct' ? 'check' : v ? 'close' : 'radio_button_unchecked', 'xs')]),
          el('span', { class: 'tt' }, [
            el('b', { text: q.type + ' · ' + q.marks + ' ' + DOM.plural(q.marks, 'mark') }),
            el('span', { text: v ? 'first attempt: ' + v : 'not attempted' })
          ]),
          el('span', { class: 'go', 'aria-hidden': 'true', text: '›' })
        ]);
      })))
    ]);
  }

  function writtenOn(c, onTick) {
    const qs = Pool.writtenFor(c.id);
    if (!qs.length) return null;
    return el('div', { class: 'card' }, [
      el('div', { class: 'kicker', text: 'Level 3 · Bartle exercises on this' }),
      el('p', { class: 'small muted', style: { margin: '4px 0 0' },
        text: 'Every exercise in this section has to be worked through before the section '
          + 'turns green. Work it on paper or in the scratchpad, then claim it.' }),
      el('div', { class: 'stack', style: { gap: '14px', marginTop: '12px' } }, qs.map(function (q) {
        const tryHost = el('div', { class: 'stack', style: { gap: '8px', marginTop: '8px' }, hidden: true });
        const answerHost = el('div', { class: 'prose tight', style: { marginTop: '8px' }, hidden: true });

        let tryBuilt = false;
        let answerBuilt = false;

        function buildTry() {
          const kids = [];
          if (q.approach) {
            kids.push(el('div', { class: 'card tint', style: { padding: '10px 14px' } }, [
              el('div', { class: 'kicker' }, [DOM.mi('lightbulb', 'xs'), el('span', { text: ' Approach' })]),
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

        const tryBtn = el('button', { class: 'chip', type: 'button', 'aria-expanded': 'false' },
          [DOM.mi('lightbulb', 'sm'), el('span', { class: 'lb', text: 'Try it (hint)' })]);

        const showBtn = el('button', { class: 'chip', type: 'button', 'aria-expanded': 'false' },
          [DOM.mi('visibility', 'sm'), el('span', { class: 'lb', text: 'Show answer' })]);

        tryBtn.addEventListener('click', function () {
          const open = tryHost.hidden;
          if (open && !tryBuilt) {
            tryBuilt = true;
            DOM.add(tryHost, buildTry());
            UI.math(tryHost);
          }
          tryHost.hidden = !open;
          tryBtn.setAttribute('aria-expanded', String(open));
          tryBtn.querySelector('.lb').textContent = open ? 'Hide hint' : 'Try it (hint)';
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
          showBtn.querySelector('.lb').textContent = open ? 'Hide answer' : 'Show answer';
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
          taskRow('w:' + q.id, { level: 3, noun: 'exercise', onTick: onTick })
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

    const hasProof = !!(c && c.proof);
    const isExt = Pool.isExt(c);
    const extNote = isExt ? ' (outside syllabus)' : '';
    const badgesHost = el('div', { class: 'row', style: { marginBottom: '8px' } });
    let syncProofTick = null;

    /* completion toggle */
    const doneBtn = el('button', { class: 'btn', type: 'button' });
    const ladderHost = el('div', {});
    const askHost = el('div', {});

    function paintDone() {
      Progress.dropCache();
      const on = Store.isDone(c.id);
      const lv = Progress.level(c.id);

      DOM.clear(badgesHost);
      DOM.add(badgesHost, [
        UI.kindBadge(c), UI.tierBadge(c), UI.levelBadge(c.id)
      ].filter(Boolean));

      doneBtn.className = 'btn' + (on ? '' : ' primary');
      DOM.clear(doneBtn);
      DOM.add(doneBtn, [
        DOM.mi(on ? 'task_alt' : 'radio_button_unchecked', 'sm'),
        el('span', { text: on
          ? 'Level 1 ticked' + extNote + ' — undo'
          : (hasProof ? 'Tick level 1 (I have read this)' + extNote
                      : 'Tick level 1' + (isExt ? extNote : ' — counts for level 2 too')) })
      ]);
      doneBtn.setAttribute('aria-pressed', String(on));
      DOM.clear(ladderHost).appendChild(UI.ladder(c.id));
      void lv;
    }

    /* Ticking a result you have just read usually means you already have the
       groundwork under it — but "usually" is not "always", so it is offered as
       a question rather than done silently. Everything the chain reaches is
       listed, because a cascade the learner cannot see is a cascade they
       cannot trust. */
    function offerCascade() {
      const pending = Progress.pendingPrereqs(c.id);
      const target = Progress.prereqTarget(c.id);
      DOM.clear(askHost);
      if (!pending.length) return;

      const list = el('div', { class: 'row', style: { marginTop: '2px' } },
        pending.slice(0, 8).map(x => el('span', { class: 'chip', text: x.title })));
      if (pending.length > 8) {
        list.appendChild(el('span', { class: 'count',
          text: '+' + (pending.length - 8) + ' more' }));
      }

      askHost.appendChild(UI.ask({
        title: 'Bring its groundwork up to level ' + target + '?',
        body: el('div', {}, [
          el('p', { style: { margin: '0 0 8px' },
            text: pending.length + ' ' + DOM.plural(pending.length, 'prerequisite') +
              ' of this result ' + DOM.plural(pending.length, 'has', 'have') +
              ' not reached level ' + target + '. Raise them to level ' + target +
              ' — and no further?' }),
          list
        ]),
        actions: [
          { label: 'Yes, raise all ' + pending.length, primary: true, onClick: function () {
              const n = Progress.raisePrereqs(c.id);
              DOM.clear(askHost);
              DOM.announce('Raised ' + n + ' ' + DOM.plural(n, 'prerequisite') + ' to level ' + target + '.');
              Router.reload();
            } },
          { label: 'No, just this one', onClick: function () { DOM.clear(askHost); } }
        ]
      }));
    }

    doneBtn.addEventListener('click', function () {
      const was = Store.isDone(c.id);
      const next = !was;
      Store.setDone(c.id, next);
      if (!hasProof) {
        Store.setProofDone(c.id, next);
      } else if (!next) {
        Store.setProofDone(c.id, false);
      }
      Progress.dropCache();
      paintDone();
      if (syncProofTick) syncProofTick();
      DOM.announce(next
        ? (hasProof ? 'Level 1 ticked.' : 'Ticked — levels 1 and 2.')
        : 'Tick removed.');
      if (next) offerCascade(); else DOM.clear(askHost);
    });
    paintDone();

    const pView = proofView(c, function () { paintDone(); });
    if (pView && pView._paintProofDone) {
      syncProofTick = pView._paintProofDone;
    }

    DOM.add(root, [
      UI.crumb([
        { text: 'Study', href: 'study' },
        course ? { text: course.title, href: 'study/' + course.id } : null,
        mod ? { text: 'Module ' + mod.n } : null,
        c.sec ? { text: '§' + c.sec } : { text: 'Prerequisite' }
      ].filter(Boolean)),

      el('div', {}, [
        badgesHost,
        UI.title(c.title, (c.sec ? Pool.sectionTitle(c.sec) : 'Prerequisite') + (isExt ? ' · Outside Syllabus' : '')),
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

      pView,

      traps(c),

      sectionTasks(c),

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
      writtenOn(c, function () { paintDone(); }),
      selfChecks(c),
      prevNext(c)
    ]);

    UI.math(root);
    return root;
  }

  return { render };
})();
