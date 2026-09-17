/* ══════════════════════════════════════════════════════════════════════════
   Boot: theme, data loading, navigation, routing, failure surfaces.
   ══════════════════════════════════════════════════════════════════════════ */

const Theme = (function () {
  const media = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function apply() {
    const pref = Store.pref('theme', 'auto');
    const dark = pref === 'dark' || (pref === 'auto' && media && media.matches);
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', dark ? '#101216' : '#faf8f4');
  }

  if (media && media.addEventListener) {
    media.addEventListener('change', function () {
      if (Store.pref('theme', 'auto') === 'auto') apply();
    });
  }
  return { apply };
})();

const App = (function () {

  const el = DOM.el;

  const TABS = [
    { name: 'home', label: 'Today', icon: 'today', also: [] },
    { name: 'study', label: 'Study', icon: 'study', also: ['note'] },
    { name: 'recall', label: 'Recall', icon: 'recall', also: [] },
    { name: 'omr', label: 'Questions', icon: 'omr', also: [] },
    { name: 'write', label: 'Write', icon: 'write', also: [] }
  ];

  const VIEWS = {
    home: () => ViewHome, study: () => ViewStudy, note: () => ViewNote,
    recall: () => ViewRecall, omr: () => ViewOmr, write: () => ViewWrite
  };

  function buildNav() {
    const nav = document.getElementById('tabs');
    DOM.clear(nav);
    TABS.forEach(function (t) {
      nav.appendChild(el('a', { href: Router.href(t.name), id: 'tab-' + t.name }, [
        DOM.icon(t.icon), el('span', { text: t.label })
      ]));
    });
  }

  function markNav(routeName) {
    TABS.forEach(function (t) {
      const a = document.getElementById('tab-' + t.name);
      if (!a) return;
      const on = t.name === routeName || t.also.indexOf(routeName) >= 0;
      if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
  }

  function failureCard(err) {
    console.error(err);
    document.body.setAttribute('data-error', (err && err.message) || 'error');
    return el('div', { class: 'stack' }, [
      el('h1', { tabindex: '-1', id: 'pagetitle', text: 'Something broke' }),
      el('div', { class: 'banner' }, [
        el('span', { 'aria-hidden': 'true', text: '⚠' }),
        el('span', {}, [
          el('b', { text: 'This view failed to render. ' }),
          el('span', { class: 'mono', text: (err && err.message) || String(err) })
        ])
      ]),
      el('a', { class: 'btn', href: Router.href('home'), text: 'Back to Today' })
    ]);
  }

  function paint(r) {
    const main = document.getElementById('main');
    const view = (VIEWS[r.name] || VIEWS.home)();
    DOM.clear(main);
    let node;
    try { node = view.render(r.args, r.query); }
    catch (err) { node = failureCard(err); }
    const wrap = el('div', { class: (view.wrapClass || 'wrap') + ' view-in' }, [node]);
    main.appendChild(wrap);
    markNav(r.name);
    const h = main.querySelector('#pagetitle');
    if (h) h.focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }

  /* Views are painted synchronously and animate in with CSS (.view-in).
     The native View Transition API was tried here and dropped: its DOM-update
     callback is frame-scheduled, so a route could land on an empty <main> if
     that frame never arrives. A blank screen is not worth a cross-fade. */
  const route = paint;

  /* ── data loading ──────────────────────────────────────────────────────── */
  function loadOne(src) {
    return new Promise(function (resolve, reject) {
      const s = document.createElement('script');
      s.src = src;
      s.async = false;
      s.onload = () => resolve(src);
      s.onerror = () => reject(new Error('could not load ' + src));
      document.head.appendChild(s);
    });
  }

  function loadData() {
    const cfg = (typeof DATA_SOURCES !== 'undefined') ? DATA_SOURCES : null;
    if (!cfg) return Promise.reject(new Error('app/sources.js is missing'));
    const list = cfg[cfg.use] || [];
    if (!list.length) return Promise.reject(new Error('no data files listed for source "' + cfg.use + '"'));
    return list.reduce((p, src) => p.then(() => loadOne(src)), Promise.resolve());
  }

  function fatal(err) {
    document.body.setAttribute('data-error', (err && err.message) || 'fatal');
    const main = document.getElementById('main');
    DOM.clear(main);
    main.appendChild(el('div', { class: 'wrap stack' }, [
      el('h1', { text: 'Content did not load' }),
      el('div', { class: 'banner' }, [
        el('span', { 'aria-hidden': 'true', text: '⚠' }),
        el('span', {}, [
          el('b', { text: 'The data files could not be read. ' }),
          el('span', { class: 'mono', text: (err && err.message) || String(err) })
        ])
      ]),
      el('p', { class: 'small muted', text: 'Check the paths listed in app/sources.js.' })
    ]));
  }

  function mathjaxWarning() {
    if (Tex.available()) return;
    const main = document.getElementById('main');
    const wrap = main.querySelector('.wrap');
    if (!wrap) return;
    wrap.insertBefore(el('div', { class: 'banner' }, [
      el('span', { 'aria-hidden': 'true', text: '⚠' }),
      el('span', {}, [
        el('b', { text: 'MathJax did not load. ' }),
        'Formulas will show as LaTeX source. The app needs the network once to fetch it.'
      ])
    ]), wrap.firstChild);
  }

  /* Finishing a course at Level 1 earns the Level 2 switch ON THAT COURSE.
     Checked in one place, once, on the way in — so "earned" cannot mean
     something slightly different on each screen. It unlocks the switch; it
     does NOT move anyone to Level 2, because a promotion nobody asked for is
     exactly what the mastery rules exist to prevent. */
  function earnedUnlocks() {
    Pool.courses().forEach(function (course) {
      if (course.pending || Store.unlocked(course.id)) return;
      const ids = Pool.ids.concepts(course.id);
      if (ids.length > 0 && ids.every(Store.isDone)) Store.unlock(course.id, true);
    });
  }

  /* The app proper. Only ever reached with someone signed in. */
  function run() {
    earnedUnlocks();
    document.body.classList.remove('signed-out');
    buildNav();
    /* Sync starts after the pool: a merge can change what is on screen, and
       it reloads the current route when it does. */
    Sync.start();
    Router.start(route);

    /* MathJax arrives on its own schedule; typeset whatever is on screen
       once it is ready, and say so plainly if it never arrives. */
    Tex.ready().then(function () {
      Tex.typeset(document.getElementById('main'));
      mathjaxWarning();
    });
  }

  /* The record is keyed on a name and a roll number, so there is no sensible
     "anonymous" state to start in: progress made before signing in could not
     be merged with the record it later turns out to belong to. The gate is
     therefore first, and it is the only screen shown until it is passed. */
  function gate() {
    const main = document.getElementById('main');
    DOM.clear(main);
    document.body.classList.add('signed-out');
    Login.mount(main, function () {
      DOM.clear(main);
      run();
    });
    Tex.ready().then(() => Tex.typeset(main));
  }

  function start() {
    Theme.apply();

    loadData().then(function () {
      Pool.build();
      if (Store.signedIn()) run(); else gate();
    }, fatal);
  }

  window.addEventListener('error', function (e) {
    document.body.setAttribute('data-error', (e && e.message) || 'error');
  });

  /* Progress is written through a debounce, so a tab closed or backgrounded
     within a quarter-second of the last tick would lose it. `pagehide` is the
     one event that fires reliably on mobile, where tabs are killed rather
     than closed. */
  window.addEventListener('pagehide', function () { Store.flushNow(); });
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) Store.flushNow();
  });

  return { start: start, route: route };
})();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', App.start);
} else {
  App.start();
}
