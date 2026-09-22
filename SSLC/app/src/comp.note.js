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
    const isMl = (typeof I18N !== 'undefined') && I18N.lang() === 'ml';
    const chain = Pool.chain(c.id, 3);
    if (chain.length < 2) return null;
    const missing = chain.filter(x => x.id !== c.id && !Progress.prereqOk(x.id)).length;

    const notReadText = isMl ? (missing + ' എണ്ണം വായിക്കാനുണ്ട്') : (missing + ' not read yet');
    const groundworkText = (typeof I18N !== 'undefined') ? I18N.t('groundwork_read') : 'groundwork read';

    return el('div', { class: 'card' }, [
      el('div', { class: 'spread' }, [
        el('div', { class: 'kicker', text: (typeof I18N !== 'undefined') ? I18N.t('route_to_result') : 'Route to this result' }),
        missing
          ? el('span', { class: 'badge warn', text: notReadText })
          : el('span', { class: 'badge ok', text: groundworkText })
      ]),
      el('div', { class: 'path', style: { marginTop: '10px' } }, chain.map(function (x, i) {
        const here = x.id === c.id;
        const lv = Progress.level(x.id);
        const ok = Progress.prereqOk(x.id);
        const kindLabel = (typeof I18N !== 'undefined') ? I18N.kind(x.kind) : x.kind;
        const lvlWord = (typeof I18N !== 'undefined') ? I18N.t('level') : 'level';
        const kids = [
          el('span', { class: 'dot', 'aria-hidden': 'true' },
            [ok && !here ? DOM.mi('check', 'xs') : el('span', { text: here ? '•' : String(i + 1) })]),
          el('span', { class: 'tt' }, [
            el('b', { text: x.title }),
            el('span', { text: here ? ((typeof I18N !== 'undefined') ? I18N.t('you_are_here') : 'you are here')
              : '§' + x.sec + ' · ' + kindLabel + ' · ' + lvlWord + ' ' + lv })
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
      el('div', { class: 'kicker', text: (typeof I18N !== 'undefined') ? I18N.t('used_later') : 'Used later by' }),
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
    const isMl = (typeof I18N !== 'undefined') && I18N.lang() === 'ml';
    const btn = el('button', { class: 'btn', type: 'button' });
    const note = el('p', { class: 'small muted', style: { margin: '8px 0 0' } });

    function paint() {
      const on = Store.isProofDone(id);
      btn.className = 'btn' + (on ? '' : ' primary');
      DOM.clear(btn);
      const btnText = on
        ? ((typeof I18N !== 'undefined') ? I18N.t('complete_undo') : 'Completed — undo')
        : ((typeof I18N !== 'undefined') ? I18N.t('mark_complete') : 'Mark as complete');
      DOM.add(btn, [
        DOM.mi(on ? 'task_alt' : 'radio_button_unchecked', 'sm'),
        el('span', { text: btnText })
      ]);
      btn.setAttribute('aria-pressed', String(on));
      note.textContent = on
        ? (isMl ? 'പൂർത്തിയായതായി രേഖപ്പെടുത്തി.' : 'Marked complete on this ' + noun + '.')
        : (isMl ? 'സ്വയം ശ്രമിച്ചു കണ്ടെത്തിയെങ്കിൽ മാത്രം രേഖപ്പെടുത്തുക.' : 'Claim this only if you produced the argument yourself, not if you read it.');
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
      DOM.announce(next ? (isMl ? 'പൂർത്തിയായി.' : 'Marked complete.') : (isMl ? 'ഒഴിവാക്കി.' : 'Completion removed.'));
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
    const isMl = (typeof I18N !== 'undefined') && I18N.lang() === 'ml';

    const tryHost = el('div', { class: 'stack', style: { gap: '10px', marginTop: '12px' }, hidden: true });
    const proofHost = el('div', { class: 'stack', style: { gap: '10px', marginTop: '12px' }, hidden: true });

    let tryBuilt = false;
    let proofBuilt = false;

    function buildTry() {
      const kids = [];
      if (p.idea) {
        kids.push(el('div', { class: 'card tint', style: { padding: '10px 14px' } }, [
          el('div', { class: 'kicker' }, [DOM.mi('lightbulb', 'xs'), el('span', { text: ' ' + ((typeof I18N !== 'undefined') ? I18N.t('proof_strategy') : 'Proof strategy') })]),
          el('div', { class: 'prose tight', style: { marginTop: '4px' }, html: p.idea })
        ]));
      }
      if (p.why) {
        kids.push(el('div', { class: 'card flat', style: { padding: '10px 14px', borderLeft: '3px solid var(--accent, #4f46e5)' } }, [
          el('div', { class: 'kicker', text: (typeof I18N !== 'undefined') ? I18N.t('core_rationale') : 'Core Rationale' }),
          el('div', { class: 'prose tight', style: { marginTop: '4px' }, html: p.why })
        ]));
      }
      if (p.rungs && p.rungs.length > 0 && p.rungs[0].why) {
        kids.push(el('div', { class: 'card flat', style: { padding: '8px 12px', background: 'var(--surface-2)' } }, [
          el('div', { class: 'small muted' }, [
            el('b', { text: (typeof I18N !== 'undefined') ? I18N.t('first_step_clue') : 'First step clue: ' }),
            el('span', { html: p.rungs[0].why })
          ])
        ]));
      }
      /* The scratchpad is the full writing workspace, not a bare textarea */
      const pad = el('div', { class: 'scratch' });
      WriteBox.mount(pad, {
        draftKey: 'proof:' + c.id, concept: c,
        label: (typeof I18N !== 'undefined') ? I18N.t('scratchpad_proof') : 'Scratchpad · draft the argument before you look',
        placeholder: isMl ? 'പ്രധാന ഘട്ടം…' : 'The main move is…'
      });
      kids.push(pad);
      return kids;
    }

    function buildProof() {
      const kids = [];
      if (p.idea) {
        kids.push(el('div', { class: 'card tint', style: { marginBottom: '6px', padding: '10px 14px' } }, [
          el('div', { class: 'kicker', text: (typeof I18N !== 'undefined') ? I18N.t('key_idea') : 'Key Idea' }),
          el('div', { class: 'prose tight', style: { marginTop: '4px' }, html: p.idea })
        ]));
      }
      if (p.rungs && p.rungs.length) {
        kids.push(el('div', { class: 'stack', style: { gap: '10px' } },
          p.rungs.map(function (r, idx) {
            const stepWord = (typeof I18N !== 'undefined') ? I18N.t('step') : 'Step';
            const rungItems = [
              el('div', { class: 'small muted', style: { marginBottom: '6px' } }, [
                el('b', { text: stepWord + ' ' + (idx + 1) + ': ' }),
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
                    marginTop: '8px', padding: '8px 12px',
                    background: 'var(--surface-2, rgba(0,0,0,0.03))',
                    borderRadius: '6px', borderLeft: '2px solid var(--accent, #4f46e5)',
                    fontSize: '0.88rem', lineHeight: '1.45'
                  }
                }, [
                  el('div', {
                    class: 'kicker',
                    style: { fontSize: '0.68rem', color: 'var(--accent, #4f46e5)', marginBottom: '3px', fontWeight: '600' },
                    text: (typeof I18N !== 'undefined') ? I18N.t('what_means') : 'What this really means'
                  }),
                  el('div', { class: 'prose tight', html: text })
                ]));
              } else {
                let mathHtml = rawContent;
                if (!mathHtml.includes('$')) mathHtml = '$$' + mathHtml + '$$';
                rungItems.push(el('div', { style: { marginTop: '6px', overflowX: 'auto' }, html: mathHtml }));
              }
            }

            if (r.meaning && r.m && r.m.trim() !== r.meaning.trim()) {
              let mathHtml = r.m.trim();
              if (!mathHtml.includes('$')) mathHtml = '$$' + mathHtml + '$$';
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

    const tryBtnText = (typeof I18N !== 'undefined') ? I18N.t('try_proof_hint') : 'Try proof (hint)';
    const hideHintText = (typeof I18N !== 'undefined') ? I18N.t('hide_hint') : 'Hide hint';
    const showProofText = (typeof I18N !== 'undefined') ? I18N.t('show_proof') : 'Show step-by-step proof';
    const hideProofText = (typeof I18N !== 'undefined') ? I18N.t('hide_proof') : 'Hide proof';

    const tryBtn = el('button', { class: 'chip', type: 'button', 'aria-expanded': 'false' },
      [DOM.mi('lightbulb', 'sm'), el('span', { class: 'lb', text: tryBtnText })]);

    const showBtn = el('button', { class: 'chip', type: 'button', 'aria-expanded': 'false' },
      [DOM.mi('visibility', 'sm'), el('span', { class: 'lb', text: showProofText })]);

    tryBtn.addEventListener('click', function () {
      const open = tryHost.hidden;
      if (open && !tryBuilt) { tryBuilt = true; DOM.add(tryHost, buildTry()); UI.math(tryHost); }
      tryHost.hidden = !open;
      tryBtn.setAttribute('aria-expanded', String(open));
      tryBtn.querySelector('.lb').textContent = open ? hideHintText : tryBtnText;
    });

    showBtn.addEventListener('click', function () {
      const open = proofHost.hidden;
      if (open && !proofBuilt) { proofBuilt = true; DOM.add(proofHost, buildProof()); UI.math(proofHost); }
      proofHost.hidden = !open;
      showBtn.setAttribute('aria-expanded', String(open));
      showBtn.querySelector('.lb').textContent = open ? hideProofText : showProofText;
    });

    const row = taskRow(c.id, { noun: 'proof', onTick: onTick });
    const proofTitle = (typeof I18N !== 'undefined') ? I18N.t('proof_heading') : 'Proof & rigorous argument';
    const stepsCount = (p.rungs ? p.rungs.length : 0);
    const stepsSub = isMl
      ? (stepsCount + ' ഘട്ടങ്ങൾ · പൂർത്തിയാക്കിയാൽ ലെവൽ 2')
      : (stepsCount + ' ' + DOM.plural(stepsCount, 'step') + ' · completing it is level 2');

    const view = expander({
      cls: 'exp-proof',
      open: true,
      title: proofTitle,
      sub: stepsSub,
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

  /* Level 3 is a SECTION bar, so the note has to say where the section stands */
  function sectionTasks(c) {
    if (!c.sec) return null;
    const isMl = (typeof I18N !== 'undefined') && I18N.lang() === 'ml';
    const t = Progress.secTaskState(c.sec);
    if (!t.total) return null;

    const kickerText = '§' + c.sec + ' ' + (isMl ? 'പരിശീലന ചോദ്യങ്ങൾ · ലെവൽ 3' : 'exercises · level 3');
    const statusText = t.ready
      ? (isMl ? 'ഈ ഭാഗത്തിലെ എല്ലാ പരിശീലന ചോദ്യങ്ങളും പൂർത്തിയായി — ലെവൽ 3 ആയി.' : 'Every exercise in this section is worked through — the section is at level 3.')
      : (isMl ? 'എല്ലാ പരിശീലന ചോദ്യങ്ങളും ചെയ്തതിനു ശേഷം മാത്രമേ ലെവൽ 3 ആകുകയുള്ളൂ.' : 'The whole section has to be worked through before anything in it turns green.');

    return el('div', { class: 'card tint' }, [
      el('div', { class: 'spread' }, [
        el('div', { class: 'kicker', text: kickerText }),
        el('span', { class: 'count', text: t.done + ' / ' + t.total })
      ]),
      el('div', { style: { marginTop: '10px' } }, [UI.meter(t.done, t.total, 3)]),
      el('p', { class: 'small muted', style: { margin: '10px 0 0' }, text: statusText })
    ]);
  }

  function traps(c) {
    if (!c.traps || !c.traps.length) return null;
    return el('div', { class: 'card' }, [
      el('div', { class: 'kicker', text: (typeof I18N !== 'undefined') ? I18N.t('common_traps') : 'Where marks are lost' }),
      el('ul', { class: 'prose tight', style: { marginTop: '10px', paddingLeft: '1.1em' } },
        c.traps.map(t => el('li', { html: t })))
    ]);
  }

  function selfChecks(c) {
    const isMl = (typeof I18N !== 'undefined') && I18N.lang() === 'ml';
    const cards = (c.cards || []);
    if (!cards.length) return null;
    const subText = isMl
      ? (cards.length + ' ചോദ്യങ്ങൾ · ഇത് രേഖപ്പെടുത്തില്ല')
      : (cards.length + ' ' + DOM.plural(cards.length, 'prompt') + ' · nothing here is recorded');

    return expander({
      title: (typeof I18N !== 'undefined') ? I18N.t('self_checks') : 'Self-check',
      open: true,
      sub: subText,
      build: function () {
        return [el('div', { class: 'stack', style: { gap: '14px' } }, cards.map(function (card) {
          return el('div', { class: 'stack', style: { gap: '6px' } }, [
            el('div', { class: 'prose tight', html: card.q }),
            UI.reveal(card.kind, () => el('div', { class: 'prose tight', html: card.a }),
              {
                openLabel: (typeof I18N !== 'undefined') ? I18N.t('show_answer') : 'Show answer',
                closeLabel: (typeof I18N !== 'undefined') ? I18N.t('hide') : 'Hide'
              })
          ]);
        }))];
      }
    });
  }

  /* ── objective questions, answered here ──────────────────────────────── */
  function questionsOn(c) {
    const isMl = (typeof I18N !== 'undefined') && I18N.lang() === 'ml';
    let qs = Pool.objectiveFor(c.id);
    if (!qs.length && c.sec) {
      qs = Pool.objective().filter(q => q.sec === c.sec);
    }
    if (!qs.length) return null;
    return el('div', { class: 'stack', style: { gap: '8px' } }, [
      el('div', { class: 'kicker', text: (typeof I18N !== 'undefined') ? I18N.t('objective_on_this') : 'Objective questions on this' }),
      el('div', { class: 'stack', style: { gap: '8px' } }, qs.map(function (q) {
        const mark = el('span', { class: 'ix' });
        const sub = el('span', {});

        function paintMark() {
          const rec = Store.omr(q.id);
          const v = rec && rec.first && rec.first.verdict;
          mark.className = 'ix' + (v === 'correct' ? ' ok' : v ? ' bad' : '');
          DOM.clear(mark);
          mark.appendChild(DOM.mi(v === 'correct' ? 'check' : v ? 'close' : 'radio_button_unchecked', 'xs'));
          sub.textContent = v
            ? ((isMl ? 'ആദ്യ ശ്രമം: ' : 'first attempt: ') + (v === 'correct' ? (isMl ? 'ശരി' : 'correct') : v === 'partial' ? (isMl ? 'ഭാഗികം' : 'partial') : (isMl ? 'തെറ്റ്' : 'wrong')))
            : (isMl ? 'ശ്രമിച്ചിട്ടില്ല' : 'not attempted');
        }
        paintMark();

        const marksWord = isMl ? 'മാർക്ക്' : DOM.plural(q.marks, 'mark');
        const qKindLabel = (typeof I18N !== 'undefined') ? I18N.kind(q.type) : q.type;

        const node = expander({
          cls: 'exp-q',
          open: true,
          mark: mark,
          title: qKindLabel + ' · ' + q.marks + ' ' + marksWord,
          sub: ' ',
          build: function () {
            return [QuestionCard.build(q, { inNote: true, onLocked: paintMark })];
          }
        });
        const slot = node.querySelector('.exp-h .tt span');
        if (slot) slot.parentNode.replaceChild(sub, slot);
        return node;
      }))
    ]);
  }

  /* ── the section's exercises, worked here ────────────────────────────── */
  function writtenOn(c, onTick, isOpen) {
    const isMl = (typeof I18N !== 'undefined') && I18N.lang() === 'ml';
    let qs = Pool.writtenFor(c.id);
    if (!qs.length && c.sec) {
      qs = Pool.writtenForSec(c.sec);
    }
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

    const subText = isMl
      ? (qs.length + ' ചോദ്യങ്ങൾ · പൂർത്തിയാക്കിയാൽ ലെവൽ 3')
      : (qs.length + ' ' + DOM.plural(qs.length, 'exercise') + ' · completing them is level 3');

    const exp = expander({
      cls: 'exp-exercises',
      open: !!isOpen,
      mark: mark,
      title: (typeof I18N !== 'undefined') ? I18N.t('exercises_on_this') : 'Exercises on this',
      sub: subText,
      badge: countSpan,
      build: function () {
        return [
          el('p', { class: 'small muted', style: { margin: '0 0 10px' },
            text: (typeof I18N !== 'undefined')
              ? I18N.t('exercises_desc')
              : 'Every exercise in this section has to be worked through before the section turns green. Work it on paper or in the scratchpad, then mark it complete.' }),
          el('div', { class: 'stack', style: { gap: '8px' } }, qs.map(function (q) {
            const qMark = el('span', { class: 'ix' });
            function paintQMark() {
              DOM.clear(qMark);
              const on = Progress.taskDone(q);
              qMark.className = 'ix' + (on ? ' ok' : '');
              qMark.appendChild(DOM.mi(on ? 'check' : 'radio_button_unchecked', 'xs'));
            }
            paintQMark();

            const marksWord = isMl ? 'മാർക്ക്' : DOM.plural(q.marks || 0, 'mark');

            return expander({
              cls: 'exp-q',
              open: true,
              mark: qMark,
              title: q.title || ((isMl ? 'ചോദ്യം ' : 'Exercise ') + q.id),
              sub: (q.marks || '?') + ' ' + marksWord,
              build: function () {
                const tryHost = el('div', { class: 'stack', style: { gap: '8px', marginTop: '8px' }, hidden: true });
                const answerHost = el('div', { class: 'prose tight', style: { marginTop: '8px' }, hidden: true });
                let tryBuilt = false, answerBuilt = false;

                function buildTry() {
                  const kids = [];
                  if (q.approach) {
                    kids.push(el('div', { class: 'card tint', style: { padding: '10px 14px' } }, [
                      el('div', { class: 'kicker' }, [DOM.mi('lightbulb', 'xs'), el('span', { text: ' ' + ((typeof I18N !== 'undefined') ? I18N.t('approach') : 'Approach') })]),
                      el('div', { class: 'prose tight', style: { marginTop: '4px' }, html: q.approach })
                    ]));
                  }
                  return kids;
                }

                function buildAnswer() {
                  return [
                    q.approach ? el('div', { html: q.approach }) : null,
                    q.solution ? el('div', { html: q.solution }) : null,
                    q.trap ? el('p', {}, [
                      el('b', { text: (typeof I18N !== 'undefined') ? I18N.t('trap') : 'Trap: ' }),
                      el('span', { html: q.trap })
                    ]) : null
                  ];
                }

                const tryBtnText = (typeof I18N !== 'undefined') ? I18N.t('try_hint') : 'Try it (hint)';
                const hideHintText = (typeof I18N !== 'undefined') ? I18N.t('hide_hint') : 'Hide hint';
                const showAnswerText = (typeof I18N !== 'undefined') ? I18N.t('show_answer') : 'Show answer';
                const hideAnswerText = (typeof I18N !== 'undefined') ? I18N.t('hide_answer') : 'Hide answer';

                const tryBtn = el('button', { class: 'chip', type: 'button', 'aria-expanded': 'false' },
                  [DOM.mi('lightbulb', 'sm'), el('span', { class: 'lb', text: tryBtnText })]);
                const showBtn = el('button', { class: 'chip', type: 'button', 'aria-expanded': 'false' },
                  [DOM.mi('visibility', 'sm'), el('span', { class: 'lb', text: showAnswerText })]);

                tryBtn.addEventListener('click', function () {
                  const open = tryHost.hidden;
                  if (open && !tryBuilt) { tryBuilt = true; DOM.add(tryHost, buildTry()); UI.math(tryHost); }
                  tryHost.hidden = !open;
                  tryBtn.setAttribute('aria-expanded', String(open));
                  tryBtn.querySelector('.lb').textContent = open ? hideHintText : tryBtnText;
                });

                showBtn.addEventListener('click', function () {
                  const open = answerHost.hidden;
                  if (open && !answerBuilt) { answerBuilt = true; DOM.add(answerHost, buildAnswer()); UI.math(answerHost); }
                  answerHost.hidden = !open;
                  showBtn.setAttribute('aria-expanded', String(open));
                  showBtn.querySelector('.lb').textContent = open ? hideAnswerText : showAnswerText;
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
     ══════════════════════════════════════════════════════════════════════ */
  function build(c, opts) {
    const o = opts || {};
    const isMl = (typeof I18N !== 'undefined') && I18N.lang() === 'ml';
    const root = el('div', { class: 'notebody stack' });

    const hasProof = !!c.proof;
    const isExt = Pool.isExt(c);
    const extNote = isExt ? (isMl ? ' (പാഠ്യപദ്ധതിക്ക് പുറത്ത്)' : ' (outside syllabus)') : '';
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

      doneBtn.className = 'btn';
      DOM.clear(doneBtn);
      const btnText = on
        ? (((typeof I18N !== 'undefined') ? I18N.t('read_undo') : 'Read — undo') + extNote)
        : (((typeof I18N !== 'undefined') ? I18N.t('mark_read') : 'Mark as read') + extNote);
      DOM.add(doneBtn, [
        DOM.mi(on ? 'task_alt' : 'radio_button_unchecked', 'sm'),
        el('span', { text: btnText })
      ]);
      doneBtn.setAttribute('aria-pressed', String(on));
      DOM.clear(ladderHost).appendChild(UI.ladder(c.id));
      if (o.onChange) o.onChange();
    }

    function offerCascade() {
      const pending = Progress.pendingPrereqs(c.id);
      DOM.clear(askHost);
      if (!pending.length) return;

      const list = el('div', { class: 'row', style: { marginTop: '2px' } },
        pending.slice(0, 8).map(x => el('span', { class: 'chip', text: x.title })));
      if (pending.length > 8) {
        list.appendChild(el('span', { class: 'count', text: '+' + (pending.length - 8) + (isMl ? ' കൂടുതൽ' : ' more') }));
      }

      const cascadeTitle = isMl ? 'അടിസ്ഥാന ആശയങ്ങളും വായിച്ചതായി അടയാളപ്പെടുത്തണോ?' : 'Mark its groundwork as read too?';
      const cascadeBody = isMl
        ? (pending.length + ' അടിസ്ഥാന ആശയങ്ങൾ ഇതുവരെ വായിച്ചിട്ടില്ല. അവയും വായിച്ചതായി അടയാളപ്പെടുത്തണോ?')
        : (pending.length + ' ' + DOM.plural(pending.length, 'prerequisite') + ' of this result have not been read. Mark them read?');

      askHost.appendChild(UI.ask({
        title: cascadeTitle,
        body: el('div', {}, [
          el('p', { style: { margin: '0 0 8px' }, text: cascadeBody }),
          list
        ]),
        actions: [
          { label: isMl ? ('അതെ, ' + pending.length + ' എണ്ണവും അടയാളപ്പെടുത്തുക') : ('Yes, mark all ' + pending.length), primary: true, onClick: function () {
              const n = Progress.raisePrereqs(c.id);
              DOM.clear(askHost);
              DOM.announce(isMl ? (n + ' അടിസ്ഥാന ആശയങ്ങൾ വായിച്ചതായി രേഖപ്പെടുത്തി.') : ('Marked ' + n + ' prerequisites as read.'));
              paintDone();
            } },
          { label: isMl ? 'വേണ്ട, ഇത് മാത്രം' : 'No, just this one', onClick: function () { DOM.clear(askHost); } }
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
      DOM.announce(next ? (isMl ? 'വായിച്ചതായി അടയാളപ്പെടുത്തി.' : 'Marked as read.') : (isMl ? 'ഒഴിവാക്കി.' : 'Tick removed.'));
      if (next) offerCascade(); else DOM.clear(askHost);
    });

    const pView = proofView(c, function () { paintDone(); });
    if (pView && pView._paintProofDone) syncProofTick = pView._paintProofDone;

    const next = Pool.neighbours(c.id).next;
    const nextTitle = next ? (typeof I18N !== 'undefined' ? I18N.pick(next, 'title') : next.title) : '';
    const completeBtnText = next
      ? (((typeof I18N !== 'undefined') ? I18N.t('complete_open_next') : 'Complete · open ') + nextTitle)
      : ((typeof I18N !== 'undefined') ? I18N.t('complete_note') : 'Complete this note');

    const completeBtn = el('button', { class: 'btn primary full', type: 'button' }, [
      DOM.mi('done_all', 'sm'),
      el('span', { text: completeBtnText })
    ]);
    completeBtn.addEventListener('click', function () {
      Progress.complete(c.id);
      paintDone();
      const cTitle = typeof I18N !== 'undefined' ? I18N.pick(c, 'title') : c.title;
      DOM.announce((isMl ? 'പൂർത്തിയായി: ' : 'Completed ') + cTitle + '.');
      if (o.onComplete) o.onComplete(next);
    });

    DOM.add(root, [
      el('div', {}, [
        badgesHost,
        el('p', { class: 'lede', style: { margin: '8px 0 0' }, text: c.oneLine })
      ]),

      el('div', { class: 'card' }, [
        el('div', { class: 'kicker', text: (typeof I18N !== 'undefined') ? I18N.t('statement') : 'Statement' }),
        el('div', { style: { marginTop: '10px' } }, [UI.prose(c.statement)])
      ]),

      Fig.mount(c),

      c.intuition ? el('div', { class: 'card tint' }, [
        el('div', { class: 'kicker', text: (typeof I18N !== 'undefined') ? I18N.t('what_it_says') : 'What it really says' }),
        el('div', { style: { marginTop: '10px' } }, [UI.prose(c.intuition, 'tight')])
      ]) : null,

      prereqPath(c),
      pView,
      traps(c),
      wView,
      questionsOn(c),
      selfChecks(c),
      sectionTasks(c),
      unlocks(c),

      el('div', { class: 'card glass' }, [
        el('div', { class: 'kicker', text: (typeof I18N !== 'undefined') ? I18N.t('this_note') : 'This note' }),
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
