/* ══════════════════════════════════════════════════════════════════════════
   Today — an invitation to one short, focused learning session.

   Prioritizes action over passive stats:
   1. Active class selector
   2. Single primary Start / Continue action in the first viewport
   3. Spaced recall due card (or encouraging caught-up state)
   4. Targeted weak-spot practice (if any)
   5. Calm habit streak and link to full Progress & Diagnostics
   ══════════════════════════════════════════════════════════════════════════ */

const ViewHome = (function () {

  const el = DOM.el;
  const t = k => (typeof I18N !== 'undefined' ? I18N.t(k) : k);
  const isMl = () => (typeof I18N !== 'undefined' && I18N.lang() === 'ml');

  /* ── greeting & class switcher ─────────────────────────────────────────── */
  function greeting(rerender) {
    const ml = isMl();
    const h = new Date().getHours();
    const word = h < 12 ? t('greeting_morning') : h < 17 ? t('greeting_day') : t('greeting_evening');
    const name = Store.displayName() || (Store.identity().name || '').split(' ')[0];
    const st = Study.streak();
    const courseId = Store.selectedCourse() || 'm10';

    const pill = (cId, label) => el('button', {
      class: 'chip' + (courseId === cId ? ' on' : ''),
      type: 'button',
      text: label,
      on: { click: () => { Store.setSelectedCourse(cId); rerender(); } }
    });

    return el('div', { class: 'stack', style: { gap: '8px' } }, [
      el('div', { class: 'spread', style: { alignItems: 'center' } }, [
        el('div', {}, [
          el('div', { class: 'kicker', text: word + (name ? ', ' + name : '') }),
          el('h1', { tabindex: '-1', id: 'pagetitle', text: t('today_title') })
        ]),
        el('span', { class: 'chip stat-chip' + (st.today ? ' on' : ''), title: t('streak_hint') }, [
          DOM.mi(st.current ? 'local_fire_department' : 'mode_heat', 'sm'),
          el('span', { text: st.current ? st.current + ' ' + t('streak') : t('streak_none') })
        ])
      ]),

      /* Class selector */
      el('div', { class: 'row', style: { gap: '6px', marginTop: '2px' } }, [
        ...Pool.courses().filter(c => !c.pending).map(c => pill(c.id,
          c.id === 'm10' ? (ml ? 'ക്ലാസ് 10 (SSLC)' : 'Class 10 (SSLC)') :
          c.id === 'm9' ? (ml ? 'ക്ലാസ് 9' : 'Class 9') :
          c.id === 'm8' ? (ml ? 'ക്ലാസ് 8' : 'Class 8') : c.title))
      ])
    ]);
  }

  /* ── primary action card (Continue / Start) ────────────────────────────── */
  function primaryCard() {
    const ml = isMl();
    const courseId = Store.selectedCourse() || 'm10';
    const concepts = Pool.concepts(courseId);

    /* Look for saved path or concept in progress */
    const openPref = Store.pref('open4', {});
    const lastId = Store.pref('lastLesson:' + courseId, openPref.concept);
    let activeConcept = lastId ? Pool.concept(lastId) : null;
    let isResume = false;

    if (activeConcept && (Pool.courseOfSec(activeConcept.sec) || {}).id === courseId && !Store.isDone(activeConcept.id)) {
      isResume = true;
    } else {
      /* Find first unread or partially read concept */
      activeConcept = concepts.find(c => !Store.isDone(c.id)) || null;
    }

    if (!activeConcept) {
      return el('div', { class: 'card today-primary-cta' }, [
        el('div', { class: 'kicker', style: { color: 'rgba(255,255,255,.85)' }, text: ml ? 'പാഠങ്ങൾ പൂർത്തിയായി' : 'Curriculum Complete' }),
        el('h2', { style: { color: '#fff', margin: '4px 0' }, text: ml ? 'എല്ലാ പാഠങ്ങളും വായിച്ചു കഴിഞ്ഞു!' : 'All lessons read!' }),
        el('a', { class: 'btn', style: { alignSelf: 'flex-start', marginTop: '8px' }, href: Router.href('study/' + courseId), text: t('open_syllabus') })
      ]);
    }

    const titleText = I18N.pick(activeConcept, 'title') || activeConcept.title;
    const secTitle = Pool.sectionTitle(activeConcept.sec);
    const oneLine = I18N.pick(activeConcept, 'oneLine') || activeConcept.oneLine;

    return el('div', { class: 'card today-primary-cta' }, [
      el('div', { class: 'kicker', style: { color: 'rgba(255,255,255,.85)' },
        text: isResume ? (ml ? 'തുടരാം' : 'CONTINUE LEARNING') : (ml ? 'ഇന്ന് പഠിക്കാം' : 'START TODAY’S LESSON') }),
      el('div', { style: { margin: '6px 0 10px' } }, [
        el('h2', { style: { color: '#fff', fontSize: '1.25rem', lineHeight: '1.3' }, text: titleText }),
        el('p', { style: { color: 'rgba(255,255,255,.85)', margin: '4px 0 0', fontSize: '.88rem' },
          text: secTitle + (oneLine ? ' · ' + oneLine : '') })
      ]),
      el('a', {
        class: 'btn',
        style: { background: '#fff', color: '#1e3a8a', fontWeight: '700', alignSelf: 'flex-start', border: 0, padding: '10px 18px' },
        href: Router.href('note/' + activeConcept.id)
      }, [
        DOM.mi(isResume ? 'resume' : 'play_arrow', 'sm'),
        el('span', { text: isResume ? (ml ? 'തുടരുക' : 'Continue Lesson') : (ml ? 'തുടങ്ങാം' : 'Start Lesson') })
      ])
    ]);
  }

  /* ── spaced recall card ────────────────────────────────────────────────── */
  function recallCard() {
    const ml = isMl();
    const d = Study.due();

    if (d.due > 0) {
      return el('div', { class: 'card' }, [
        el('div', { class: 'spread' }, [
          el('div', { class: 'kicker', text: ml ? 'ഇന്ന് ഓർത്തെടുക്കാം' : 'SPACED RECALL' }),
          el('span', { class: 'badge warn', text: d.due + (ml ? ' ചോദ്യങ്ങൾ' : ' due') })
        ]),
        el('p', { class: 'small muted', style: { margin: '6px 0 12px' },
          text: ml
            ? 'പഠിച്ച ആശയങ്ങൾ ദീർഘകാലം ഓർമ്മയിൽ നിൽക്കാൻ ഹ്രസ്വമായ റിവ്യൂ.'
            : 'Strengthen memory with spaced retrieval practice before ideas fade.'
        }),
        el('a', { class: 'btn primary', href: Router.href('recall'), style: { alignSelf: 'flex-start' } }, [
          DOM.mi('replay', 'sm'),
          el('span', { text: ml ? 'ഓർത്തെടുക്കൽ തുടങ്ങാം' : 'Start Recall Practice' })
        ])
      ]);
    }

    return el('div', { class: 'card tint' }, [
      el('div', { class: 'row', style: { gap: '10px', alignItems: 'center' } }, [
        DOM.mi('task_alt', 'md'),
        el('div', {}, [
          el('b', { text: ml ? 'ഇന്നത്തെ ഓർത്തെടുക്കൽ പൂർത്തിയായി!' : 'Caught up on recall!' }),
          el('p', { class: 'small muted', style: { margin: '2px 0 0' },
            text: ml ? 'ഇന്ന് റിവ്യൂ ചെയ്യേണ്ട കാർഡുകൾ ഒന്നുമില്ല. മികച്ച മുന്നേറ്റം!' : 'No flashcards are overdue right now. Great consistency!' })
        ])
      ])
    ]);
  }

  /* ── weak spots quick card ─────────────────────────────────────────────── */
  function weakCard() {
    const ml = isMl();
    const weak = Study.weakSpots(3);
    if (!weak.length) return null;

    return el('div', { class: 'card' }, [
      el('div', { class: 'spread' }, [
        el('div', { class: 'kicker', text: t('weak_title') }),
        el('a', { class: 'chip on', href: Router.href('recall?mode=weak'), text: t('weak_drill') })
      ]),
      el('p', { class: 'small muted', style: { margin: '4px 0 8px' }, text: t('weak_desc') }),
      el('div', { class: 'row', style: { gap: '6px' } }, weak.map(w =>
        el('a', { class: 'chip', href: Router.href('note/' + w.cid), text: w.c.title })
      ))
    ]);
  }

  /* ── small wins & habit tracker ────────────────────────────────────────── */
  function habitCard() {
    const ml = isMl();
    const g = Study.goalState();

    return el('div', { class: 'card tint' }, [
      el('div', { class: 'spread' }, [
        el('div', { class: 'kicker', text: ml ? 'ഇന്നത്തെ ലക്ഷ്യം' : 'DAILY GOAL' }),
        el('span', { class: 'badge' + (g.met ? ' ok' : ''), text: g.met ? t('goal_met') : g.pct + '%' })
      ]),
      el('div', { class: 'goal-grid', style: { marginTop: '8px' } }, g.rows.slice(0, 2).map(function (r) {
        return el('div', { class: 'goal-row' }, [
          el('div', { class: 'spread' }, [
            el('span', { class: 'small', text: t('goal_' + r.key) }),
            el('span', { class: 'count', text: r.raw + '/' + r.want })
          ]),
          UI.meter(r.done, r.want, r.done >= r.want ? true : undefined)
        ]);
      })),
      el('div', { style: { marginTop: '12px', borderTop: '1px solid var(--rule)', paddingTop: '10px' } }, [
        el('a', { class: 'row', href: Router.href('progress'), style: { textDecoration: 'none', justifyContent: 'space-between' } }, [
          el('span', { class: 'small', style: { fontWeight: '600', color: 'var(--accent)' },
            text: ml ? 'പൂർണ്ണ പുരോഗതിയും പിഴവ് വിശകലനവും കാണുക' : 'View full progress, mastery & mistake notebook' }),
          DOM.mi('arrow_forward', 'sm')
        ])
      ])
    ]);
  }

  /* ── render page ──────────────────────────────────────────────────────── */
  function render() {
    const root = el('div', { class: 'stack', style: { gap: '14px' } });
    const rerender = () => Router.reload();

    DOM.add(root, [
      greeting(rerender),
      primaryCard(),
      recallCard(),
      weakCard(),
      habitCard()
    ]);

    return root;
  }

  return { render };
})();
