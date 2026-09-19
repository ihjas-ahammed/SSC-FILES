/* ══════════════════════════════════════════════════════════════════════════
   One concept note, as a component that opens INSIDE the syllabus.

   The note used to be a page of its own, which meant that reading a section
   was a loop of leaving the tree and coming back to it — four screens for one
   act of studying. It is now a body with no chrome: the tree expands a row and
   drops this in, and everything the note used to link out to (its proof, its
   exercises, its objective questions, the writing workspace) opens inside it,
   in the same scroll.

   Nothing here is built until the note is opened, and the questions inside it
   are not built until each one is opened in turn. A section of forty concepts
   costs one row each until you ask for more.

   The vocabulary of the buttons changed with rule 13: a claim is now "Mark as
   complete", not "Tick level 3". The level still moves — it is just no longer
   what the button talks about. Reading is level 1, the proof is level 2, the
   section's exercises are level 3, and a stage that does not exist is skipped
   rather than held against you.
   ══════════════════════════════════════════════════════════════════════════ */

const NoteBody = (function () {

  const el = DOM.el;

  /* ── a lazy, titled expander ─────────────────────────────────────────────
     The one pattern the whole note is built from: a header you press and a
     body that does not exist until you do. */
  function expander(opts) {
    const o = opts || {};
    const isOpen = !!o.open;
    const body = el('div', { class: 'exp-b', hidden: !isOpen });
    const chev = DOM.icon('chev', 18, 'chev');
    const head = el('button', { class: 'exp-h', type: 'button', 'aria-expanded': String(isOpen) }, [
      o.mark || null,
      el('span', { class: 'tt' }, [
        el('b', { text: o.title }),
        o.sub ? el('span', { text: o.sub }) : null
      ]),
      o.badge || null,
      chev
    ]);
    let built = false;
    function openBody() {
      if (!built) {
        built = true;
        DOM.add(body, o.build());
        UI.math(body);
      }
      body.hidden = false;
      head.setAttribute('aria-expanded', 'true');
      if (o.onOpen) o.onOpen(body);
    }
    function closeBody() {
      body.hidden = true;
      head.setAttribute('aria-expanded', 'false');
    }
    head.addEventListener('click', function () {
      if (body.hidden) openBody(); else closeBody();
    });
    if (isOpen) {
      built = true;
      DOM.add(body, o.build());
    }
    const host = el('div', { class: 'exp' + (o.cls ? ' ' + o.cls : '') }, [head, body]);
    host._head = head;
    host._open = openBody;
    host._close = closeBody;
    host._isOpen = function () { return !body.hidden; };
    return host;
  }

  /* ── the prerequisite chain, walked and rendered as a path ──────────────
     A prerequisite is satisfied once it has been READ, and nothing more is
     asked of it. Judging the chain at the highest level anything in it had
     reached was the bug that made groundwork look permanently outstanding. */
  function prereqPath(c) {
    const chain = Pool.chain(c.id, 3);
    if (chain.length < 2) return null;
    const missing = chain.filter(x => x.id !== c.id && !Progress.prereqOk(x.id)).length;

    return el('div', { class: 'card' }, [
      el('div', { class: 'spread' }, [
        el('div', { class: 'kicker', text: 'Route to this result' }),
        missing
          ? el('span', { class: 'badge warn', text: missing + ' not read yet' })
          : el('span', { class: 'badge ok', text: 'groundwork read' })
      ]),
      el('div', { class: 'path', style: { marginTop: '10px' } }, chain.map(function (x, i) {
        const here = x.id === c.id;
        const lv = Progress.level(x.id);
        const ok = Progress.prereqOk(x.id);
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

  /* ── the claim that earns a level ────────────────────────────────────────
     One control, because it is one kind of claim — "I produced this myself".
     It is deliberately not a checkbox you can tick on the way past. */
  function taskRow(id, opts) {
    const o = opts || {};
    const noun = o.noun || 'proof';
    const btn = el('button', { class: 'btn', type: 'button' });
    const note = el('p', { class: 'small muted', style: { margin: '8px 0 0' } });

    function paint() {
      const on = Store.isProofDone(id);
      btn.className = 'btn' + (on ? '' : ' primary');
      DOM.clear(btn);
      DOM.add(btn, [
        DOM.mi(on ? 'task_alt' : 'radio_button_unchecked', 'sm'),
        el('span', { text: on ? 'Completed — undo' : 'Mark as complete' })
      ]);
      btn.setAttribute('aria-pressed', String(on));
      note.textContent = on
        ? 'Marked complete on this ' + noun + '.'
        : 'Claim this only if you produced the argument yourself, not if you read it.';
    }

    btn.addEventListener('click', function () {
      const next = !Store.isProofDone(id);
      Store.setProofDone(id, next);
      /* A proof cannot be worked through on a note you have not read, so
         claiming it carries the reading tick with it. An exercise key ('w:')
         is a section-wide claim and owns no single concept, so it carries
         nothing. */
      if (next && id.indexOf('w:') !== 0 && id.indexOf('p:') !== 0 && !Store.isDone(id)) {
        Store.setDone(id, true);
      }
      Progress.dropCache();
      paint();
      if (o.onTick) o.onTick();
      DOM.announce(next ? 'Marked complete.' : 'Completion removed.');
    });
    paint();

    const host = el('div', { class: 'proof-done', style: { marginTop: '16px' } }, [
      el('div', { class: 'btn-row' }, [btn]),
      note
    ]);
    host._paint = paint;
    return host;
  }

  /* ── the proof ───────────────────────────────────────────────────────── */
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
            const whyText = r.why || r.label || '';
            const rungItems = [
              el('div', { class: 'small muted', style: { marginBottom: '6px' } }, [
                el('b', { text: 'Step ' + (idx + 1) + ': ' }),
                el('span', { html: whyText })
              ])
            ];

            const mathText = (r.m || r.math || '').trim();
            if (mathText) {
              let mathHtml = mathText;
              if (!mathHtml.includes('$')) mathHtml = '$$' + mathHtml + '$$';
              rungItems.push(el('div', { style: { marginTop: '6px', overflowX: 'auto' }, html: mathHtml }));
            }

            const meaningText = (r.meaning || r.note || '').trim();
            if (meaningText) {
              const text = meaningText.replace(/^(what this (really )?means:?|meaning:?)\s*/i, '');
              rungItems.push(el('div', {
                class: 'rung-meaning',
                style: {
                  marginTop: '8px', padding: '8px 12px',
                  background: 'var(--surface-2, rgba(0,0,0,0.03))',
                  borderRadius: '6px', borderLeft: '2px solid var(--accent, #4f46e5)',
                  fontSize: '0.88rem', lineHeight: '1.45'
                }
              }, [
                el('div', {
                  class: 'kicker',
                  style: { fontSize: '0.68rem', color: 'var(--accent, #4f46e5)', marginBottom: '3px', fontWeight: '600' },
                  text: 'What this really means'
                }),
                el('div', { class: 'prose tight', html: text })
              ]));
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
      if (open && !tryBuilt) { tryBuilt = true; DOM.add(tryHost, buildTry()); UI.math(tryHost); }
      tryHost.hidden = !open;
      tryBtn.setAttribute('aria-expanded', String(open));
      tryBtn.querySelector('.lb').textContent = open ? 'Hide hint' : 'Try proof (hint)';
    });

    showBtn.addEventListener('click', function () {
      const open = proofHost.hidden;
      if (open && !proofBuilt) { proofBuilt = true; DOM.add(proofHost, buildProof()); UI.math(proofHost); }
      proofHost.hidden = !open;
      showBtn.setAttribute('aria-expanded', String(open));
      showBtn.querySelector('.lb').textContent = open ? 'Hide proof' : 'Show step-by-step proof';
    });

    const row = taskRow(c.id, { noun: 'proof', onTick: onTick });
    const view = expander({
      cls: 'exp-proof',
      open: true,
      title: 'Proof & rigorous argument',
      sub: (p.rungs ? p.rungs.length : 0) + ' ' + DOM.plural(p.rungs ? p.rungs.length : 0, 'step')
        + ' · completing it is level 2',
      build: function () {
        return [
          el('div', { class: 'row', style: { gap: '8px', flexWrap: 'wrap' } }, [tryBtn, showBtn]),
          tryHost, proofHost, row
        ];
      }
    });
    view._paintProofDone = row._paint;
    return view;
  }

  /* Level 3 is a SECTION bar, so the note has to say where the section stands
     — otherwise a learner works the two exercises filed under this theorem,
     sees no green, and reads it as a bug. A section with NO exercises is not
     held back: it is already as done as it can be. */
  function sectionTasks(c) {
    if (!c.sec) return null;
    const t = Progress.secTaskState(c.sec);
    if (!t.total) return null;

    return el('div', { class: 'card tint' }, [
      el('div', { class: 'spread' }, [
        el('div', { class: 'kicker', text: '§' + c.sec + ' exercises · level 3' }),
        el('span', { class: 'count', text: t.done + ' / ' + t.total })
      ]),
      el('div', { style: { marginTop: '10px' } }, [UI.meter(t.done, t.total, 3)]),
      el('p', { class: 'small muted', style: { margin: '10px 0 0' },
        text: t.ready
          ? 'Every exercise in this section is worked through — the section is at level 3.'
          : 'The whole section has to be worked through before anything in it turns green.' })
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
    return expander({
      title: 'Self-check',
      open: true,
      sub: cards.length + ' ' + DOM.plural(cards.length, 'prompt') + ' · nothing here is recorded',
      build: function () {
        return [el('div', { class: 'stack', style: { gap: '14px' } }, cards.map(function (card) {
          return el('div', { class: 'stack', style: { gap: '6px' } }, [
            el('div', { class: 'prose tight', html: card.q }),
            UI.reveal(card.kind, () => el('div', { class: 'prose tight', html: card.a }),
              { openLabel: 'Show answer', closeLabel: 'Hide' })
          ]);
        }))];
      }
    });
  }

  /* ── the writing workspace, in the note ─────────────────────────────────
     The statement is withheld until you have written yours: reading a
     statement is not writing one. */
  function writeWorkspace(c) {
    return expander({
      title: 'Write the statement from memory',
      sub: 'LaTeX, with the palette beside you',
      build: function () {
        const boxHost = el('div', { class: 'card' });
        const compareHost = el('div', {});
        const wb = WriteBox.mount(boxHost, { concept: c, label: 'Your statement, in LaTeX' });

        function compare() {
          DOM.clear(compareHost);
          compareHost.appendChild(el('div', { class: 'reveal' }, [
            el('div', { class: 'h' }, [el('span', { text: 'Canonical statement' })]),
            el('div', { class: 'b' }, [
              UI.prose(c.statement, 'tight'),
              el('p', { class: 'small muted', style: { margin: '12px 0 0' },
                text: 'Compare the quantifiers and the hypotheses first — that is where written '
                  + 'answers lose marks, not in the algebra.' })
            ])
          ]));
          UI.math(compareHost);
          DOM.announce('Canonical statement revealed.');
        }

        return [boxHost, UI.gate({
          hint: 'Write your version above first. The canonical statement stays hidden until you ask for it.',
          actions: [
            { label: 'Compare with the canonical statement', primary: true, onClick: function () {
                if (!wb.hasContent() &&
                  !window.confirm('Nothing is written yet. Reveal the statement anyway?')) return;
                compare();
              } }
          ]
        }), compareHost];
      }
    });
  }

  /* ── objective questions, answered here ──────────────────────────────── */
  function questionsOn(c) {
    const qs = Pool.objectiveFor(c.id);
    if (!qs.length) return null;
    return el('div', { class: 'stack', style: { gap: '8px' } }, [
      el('div', { class: 'kicker', text: 'Objective questions on this' }),
      el('div', { class: 'stack', style: { gap: '8px' } }, qs.map(function (q) {
        const mark = el('span', { class: 'ix' });
        const sub = el('span', {});
        /* Repainted on the lock as well as on build: the header still says
           "not attempted" while the worked answer is open underneath it
           otherwise, which reads as the tick having failed. */
        function paintMark() {
          const rec = Store.omr(q.id);
          const v = rec && rec.first && rec.first.verdict;
          mark.className = 'ix' + (v === 'correct' ? ' ok' : v ? ' bad' : '');
          DOM.clear(mark);
          mark.appendChild(DOM.mi(v === 'correct' ? 'check' : v ? 'close' : 'radio_button_unchecked', 'xs'));
          sub.textContent = v ? 'first attempt: ' + v : 'not attempted';
        }
        paintMark();

        const node = expander({
          cls: 'exp-q',
          open: true,
          mark: mark,
          title: q.type + ' · ' + q.marks + ' ' + DOM.plural(q.marks, 'mark'),
          sub: ' ',
          build: function () {
            return [QuestionCard.build(q, { inNote: true, onLocked: paintMark })];
          }
        });
        /* swap the static subtitle for the live one */
        const slot = node.querySelector('.exp-h .tt span');
        if (slot) slot.parentNode.replaceChild(sub, slot);
        return node;
      }))
    ]);
  }

  /* ── the section's exercises, worked here ────────────────────────────── */
  function writtenOn(c, onTick, isOpen) {
    const qs = Pool.writtenFor(c.id);
    if (!qs.length) return null;

    const countSpan = el('span', { class: 'count' });
    const mark = el('span', { class: 'ix' });

    function updateHeader() {
      const done = qs.filter(q => Progress.taskDone(q)).length;
      const allDone = done === qs.length;
      DOM.clear(mark);
      mark.className = 'ix' + (allDone ? ' ok' : '');
      mark.appendChild(DOM.mi(allDone ? 'check' : 'radio_button_unchecked', 'xs'));
      countSpan.textContent = done + ' / ' + qs.length;
    }
    updateHeader();

    const exp = expander({
      cls: 'exp-exercises',
      open: !!isOpen,
      mark: mark,
      title: 'Exercises on this',
      sub: qs.length + ' ' + DOM.plural(qs.length, 'exercise') + ' · completing them is level 3',
      badge: countSpan,
      build: function () {
        return [
          el('p', { class: 'small muted', style: { margin: '0 0 10px' },
            text: 'Every exercise in this section has to be worked through before the section '
              + 'turns green. Work it on paper or in the scratchpad, then mark it complete.' }),
          el('div', { class: 'stack', style: { gap: '8px' } }, qs.map(function (q) {
            const qMark = el('span', { class: 'ix' });
            function paintQMark() {
              DOM.clear(qMark);
              const on = Progress.taskDone(q);
              qMark.className = 'ix' + (on ? ' ok' : '');
              qMark.appendChild(DOM.mi(on ? 'check' : 'radio_button_unchecked', 'xs'));
            }
            paintQMark();

            return expander({
              cls: 'exp-q',
              open: true,
              mark: qMark,
              title: q.title || ('Exercise ' + q.id),
              sub: (q.marks || '?') + ' ' + DOM.plural(q.marks || 0, 'mark'),
              build: function () {
                const tryHost = el('div', { class: 'stack', style: { gap: '8px', marginTop: '8px' }, hidden: true });
                const answerHost = el('div', { class: 'prose tight', style: { marginTop: '8px' }, hidden: true });
                let tryBuilt = false, answerBuilt = false;

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
                  if (open && !tryBuilt) { tryBuilt = true; DOM.add(tryHost, buildTry()); UI.math(tryHost); }
                  tryHost.hidden = !open;
                  tryBtn.setAttribute('aria-expanded', String(open));
                  tryBtn.querySelector('.lb').textContent = open ? 'Hide hint' : 'Try it (hint)';
                });

                showBtn.addEventListener('click', function () {
                  const open = answerHost.hidden;
                  if (open && !answerBuilt) { answerBuilt = true; DOM.add(answerHost, buildAnswer()); UI.math(answerHost); }
                  answerHost.hidden = !open;
                  showBtn.setAttribute('aria-expanded', String(open));
                  showBtn.querySelector('.lb').textContent = open ? 'Hide answer' : 'Show answer';
                });

                return [
                  el('div', { class: 'prose tight', html: q.prompt }),
                  el('div', { class: 'row', style: { gap: '8px', marginTop: '10px', flexWrap: 'wrap' } },
                    [tryBtn, showBtn]),
                  tryHost, answerHost,
                  taskRow('w:' + q.id, { noun: 'exercise', onTick: function () {
                    paintQMark();
                    updateHeader();
                    if (onTick) onTick();
                  } })
                ];
              }
            });
          }))
        ];
      }
    });

    exp._updateHeader = updateHeader;
    return exp;
  }

  /* ══════════════════════════════════════════════════════════════════════
     The note itself.

       opts.onChange    something in here moved a level — repaint the tree
       opts.onComplete  the Complete button was pressed; the tree closes this
                        note and opens the next one
     ══════════════════════════════════════════════════════════════════════ */
  function build(c, opts) {
    const o = opts || {};
    const root = el('div', { class: 'notebody stack' });

    const hasProof = !!c.proof;
    const isExt = Pool.isExt(c);
    const extNote = isExt ? ' (outside syllabus)' : '';
    const badgesHost = el('div', { class: 'row', style: { marginBottom: '2px' } });
    const ladderHost = el('div', {});
    const askHost = el('div', {});
    const doneBtn = el('button', { class: 'btn', type: 'button' });
    let syncProofTick = null;

    const isL2Complete = Progress.level(c.id) >= 2;
    const wView = writtenOn(c, function () { paintDone(); }, isL2Complete);

    function paintDone() {
      Progress.dropCache();
      const on = Store.isDone(c.id);
      const isL2 = Progress.level(c.id) >= 2;

      if (wView) {
        if (wView._updateHeader) wView._updateHeader();
        if (isL2 && wView._open && !wView._isOpen()) {
          wView._open();
        }
      }

      DOM.clear(badgesHost);
      DOM.add(badgesHost, [UI.kindBadge(c), UI.tierBadge(c), UI.levelBadge(c.id)].filter(Boolean));

      /* Never primary: the Complete button at the foot is the primary action on
         an open note, and two competing blue buttons is one too many. */
      doneBtn.className = 'btn';
      DOM.clear(doneBtn);
      DOM.add(doneBtn, [
        DOM.mi(on ? 'task_alt' : 'radio_button_unchecked', 'sm'),
        el('span', { text: on ? 'Read' + extNote + ' — undo' : 'Mark as read' + extNote })
      ]);
      doneBtn.setAttribute('aria-pressed', String(on));
      DOM.clear(ladderHost).appendChild(UI.ladder(c.id));
      if (o.onChange) o.onChange();
    }

    /* Ticking a result you have just read usually means you already have the
       groundwork under it — but "usually" is not "always", so it is offered as
       a question rather than done silently. */
    function offerCascade() {
      const pending = Progress.pendingPrereqs(c.id);
      DOM.clear(askHost);
      if (!pending.length) return;

      const list = el('div', { class: 'row', style: { marginTop: '2px' } },
        pending.slice(0, 8).map(x => el('span', { class: 'chip', text: x.title })));
      if (pending.length > 8) {
        list.appendChild(el('span', { class: 'count', text: '+' + (pending.length - 8) + ' more' }));
      }

      askHost.appendChild(UI.ask({
        title: 'Mark its groundwork as read too?',
        body: el('div', {}, [
          el('p', { style: { margin: '0 0 8px' },
            text: pending.length + ' ' + DOM.plural(pending.length, 'prerequisite') +
              ' of this result ' + DOM.plural(pending.length, 'has', 'have') +
              ' not been read. Mark them read — and nothing more?' }),
          list
        ]),
        actions: [
          { label: 'Yes, mark all ' + pending.length, primary: true, onClick: function () {
              const n = Progress.raisePrereqs(c.id);
              DOM.clear(askHost);
              DOM.announce('Marked ' + n + ' ' + DOM.plural(n, 'prerequisite') + ' as read.');
              paintDone();
            } },
          { label: 'No, just this one', onClick: function () { DOM.clear(askHost); } }
        ]
      }));
    }

    doneBtn.addEventListener('click', function () {
      const next = !Store.isDone(c.id);
      Store.setDone(c.id, next);
      if (!hasProof) Store.setProofDone(c.id, next);
      else if (!next) Store.setProofDone(c.id, false);
      Progress.dropCache();
      paintDone();
      if (syncProofTick) syncProofTick();
      DOM.announce(next ? 'Marked as read.' : 'Tick removed.');
      if (next) offerCascade(); else DOM.clear(askHost);
    });

    const pView = proofView(c, function () { paintDone(); });
    if (pView && pView._paintProofDone) syncProofTick = pView._paintProofDone;

    /* ── the button that carries you on ──────────────────────────────────
       Complete is not a synonym for the tick: it is the end of the note. It
       marks it read, closes it, and opens the next one — which is the whole
       reason the note lives in the tree now. */
    const next = Pool.neighbours(c.id).next;
    const completeBtn = el('button', { class: 'btn primary full', type: 'button' }, [
      DOM.mi('done_all', 'sm'),
      el('span', { text: next ? 'Complete · open ' + next.title : 'Complete this note' })
    ]);
    completeBtn.addEventListener('click', function () {
      Progress.complete(c.id);
      paintDone();
      DOM.announce('Completed ' + c.title + '.');
      if (o.onComplete) o.onComplete(next);
    });

    DOM.add(root, [
      el('div', {}, [
        badgesHost,
        el('p', { class: 'lede', style: { margin: '8px 0 0' }, text: c.oneLine })
      ]),

      el('div', { class: 'card' }, [
        el('div', { class: 'kicker', text: 'Statement' }),
        el('div', { style: { marginTop: '10px' } }, [UI.prose(c.statement)])
      ]),

      Fig.mount(c),

      c.intuition ? el('div', { class: 'card tint' }, [
        el('div', { class: 'kicker', text: 'What it really says' }),
        el('div', { style: { marginTop: '10px' } }, [UI.prose(c.intuition, 'tight')])
      ]) : null,

      prereqPath(c),
      pView,
      traps(c),
      wView,
      questionsOn(c),
      writeWorkspace(c),
      selfChecks(c),
      sectionTasks(c),
      unlocks(c),

      el('div', { class: 'card glass' }, [
        el('div', { class: 'kicker', text: 'This note' }),
        el('div', { style: { margin: '10px 0 14px' } }, [ladderHost]),
        el('div', { class: 'btn-row' }, [doneBtn]),
        askHost
      ]),

      el('div', { class: 'note-foot' }, [completeBtn])
    ]);

    paintDone();
    UI.math(root);
    return root;
  }

  return { build, expander, taskRow };
})();
