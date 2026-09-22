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

/* ── shell chrome ─────────────────────────────────────────────────────────
   The controls that belong to the frame rather than to any view: back, full
   screen, theme. Each exists twice — once in the mobile header, once in the
   desktop rail — so they repaint from one place and can never disagree about
   what is on. */
const Shell = (function () {

  const isFull = () => !!(document.fullscreenElement || document.webkitFullscreenElement);

  function toggleFull() {
    const root = document.documentElement;
    if (isFull()) {
      const exit = document.exitFullscreen || document.webkitExitFullscreen;
      if (exit) exit.call(document);
      return;
    }
    const req = root.requestFullscreen || root.webkitRequestFullscreen;
    if (req) {
      const r = req.call(root);
      if (r && r.catch) r.catch(function () { DOM.announce('This browser refused full screen.'); });
    } else {
      DOM.announce('This browser has no full-screen mode.');
    }
  }

  function cycleTheme() {
    const order = ['auto', 'light', 'dark'];
    const next = order[(order.indexOf(Store.pref('theme', 'auto')) + 1) % 3];
    Store.setPref('theme', next);
    Theme.apply();
    DOM.announce('Theme set to ' + next + '.');
    paint();
  }

  const each = (sel, fn) => Array.prototype.forEach.call(document.querySelectorAll(sel), fn);
  function setGlyph(btn, name, label) {
    const g = btn.querySelector('.mi');
    if (g) g.textContent = name;
    const l = btn.querySelector('.lb');
    if (l) l.textContent = label;
  }

  function paint() {
    const full = isFull();
    const theme = Store.pref('theme', 'auto');
    const isMl = (typeof I18N !== 'undefined') && I18N.lang() === 'ml';
    document.body.classList.toggle('is-full', full);
    each('[data-chrome=full]', function (b) {
      b.setAttribute('aria-pressed', String(full));
      b.setAttribute('aria-label', full ? ((typeof I18N !== 'undefined') ? I18N.t('exit_fullscreen') : 'Exit full screen') : ((typeof I18N !== 'undefined') ? I18N.t('fullscreen') : 'Full screen'));
      setGlyph(b, full ? 'fullscreen_exit' : 'fullscreen', full ? ((typeof I18N !== 'undefined') ? I18N.t('exit_fullscreen') : 'Exit full screen') : ((typeof I18N !== 'undefined') ? I18N.t('fullscreen') : 'Full screen'));
    });
    each('[data-chrome=theme]', function (b) {
      const themeWord = (typeof I18N !== 'undefined') ? I18N.t('theme') : 'Theme';
      b.setAttribute('aria-label', themeWord + ': ' + theme + ' — change it');
      setGlyph(b, theme === 'dark' ? 'dark_mode' : theme === 'light' ? 'light_mode' : 'contrast',
        themeWord + ': ' + theme);
    });
    each('[data-chrome=lang]', function (b) {
      const nextLangName = isMl ? 'English' : 'മലയാളം';
      b.setAttribute('aria-label', (typeof I18N !== 'undefined') ? I18N.t('lang_switch_aria') : 'Switch language');
      setGlyph(b, 'translate', nextLangName);
    });
    each('[data-chrome=back]', function (b) {
      b.disabled = !Router.canBack();
      b.setAttribute('aria-label', (typeof I18N !== 'undefined') ? I18N.t('back') : 'Back');
    });

    const langBtn = document.getElementById('lang-btn');
    if (langBtn) {
      langBtn.setAttribute('aria-label', (typeof I18N !== 'undefined') ? I18N.t('lang_switch_aria') : 'Switch language');
      const langText = document.getElementById('lang-btn-text');
      if (langText) langText.textContent = isMl ? 'English' : 'മലയാളം';
    }

    const topTitle = document.getElementById('top-title');
    if (topTitle) {
      topTitle.textContent = (Pool.courses && Pool.courses()[0] && Pool.courses()[0].title) || ((typeof I18N !== 'undefined') ? I18N.t('app_title') : 'Class 8 Mathematics');
    }
    const topSub = document.getElementById('top-sub');
    if (topSub && (!topSub.dataset.custom || topSub.dataset.custom === 'false')) {
      topSub.textContent = (typeof I18N !== 'undefined') ? I18N.t('app_sub') : 'Math Base';
    }
  }

  function setSubtitle(text) {
    const topSub = document.getElementById('top-sub');
    const railSub = document.getElementById('rail-sub');
    if (topSub) {
      topSub.textContent = text || ((typeof I18N !== 'undefined') ? I18N.t('app_sub') : '');
      topSub.dataset.custom = text ? 'true' : 'false';
    }
    if (railSub) railSub.textContent = text || ((typeof I18N !== 'undefined') ? I18N.t('app_sub') : '');
  }

  function wire() {
    const byId = id => document.getElementById(id);
    const back = byId('back-btn'), full = byId('full-btn'), theme = byId('theme-btn'), lang = byId('lang-btn');
    if (back) { back.setAttribute('data-chrome', 'back'); back.addEventListener('click', () => Router.back()); }
    if (full) { full.setAttribute('data-chrome', 'full'); full.addEventListener('click', toggleFull); }
    if (theme) { theme.setAttribute('data-chrome', 'theme'); theme.addEventListener('click', cycleTheme); }
    if (lang) { lang.addEventListener('click', () => { if (typeof I18N !== 'undefined') I18N.toggle(); }); }
    document.addEventListener('fullscreenchange', paint);
    document.addEventListener('webkitfullscreenchange', paint);
    paint();
  }

  return { isFull, toggleFull, cycleTheme, paint, wire, setSubtitle };
})();

const App = (function () {

  const el = DOM.el;

  /* Three tabs, not five. Questions and Write lost their tabs when the note
     learned to hold them: answering a question about a theorem belongs under
     that theorem, not behind a tab that makes you find it again. Both routes
     still resolve — see view.omr.js and view.write.js — they are simply not
     places you navigate TO any more. */
  const TABS = [
    { name: 'home', label: 'Today', icon: 'today', also: [] },
    { name: 'study', label: 'Study', icon: 'menu_book', also: ['note', 'omr'] },
    { name: 'recall', label: 'Recall', icon: 'style', also: [] }
  ];

  const VIEWS = {
    home: () => ViewHome, study: () => ViewStudy, note: () => ViewNote,
    recall: () => ViewRecall, omr: () => ViewOmr, write: () => ViewStudy
  };

  /* ONE nav element, laid out two ways.

     On a phone it is the bottom tab bar it has always been. On a desktop the
     same element becomes a left rail — because the horizontal strip was
     costing a band of vertical space on every screen, and vertical space is
     the whole of reading. The rail carries its own brand, back button and
     shell controls, so at that width the top header can go away entirely and
     the page gets the full height of the window.

     `.rail-top` and `.rail-foot` are simply not displayed on a phone, where
     the header already carries them. */
  function railBtn(chrome, glyph, label, onClick) {
    const b = el('button', { class: 'rail-btn', type: 'button', 'data-chrome': chrome,
      'aria-label': label }, [DOM.mi(glyph), el('span', { class: 'lb', text: label })]);
    b.addEventListener('click', onClick);
    return b;
  }

  function buildNav() {
    const nav = document.getElementById('tabs');
    DOM.clear(nav);

    const backLabel = (typeof I18N !== 'undefined') ? I18N.t('back') : 'Back';
    const appTitle = (Pool.courses && Pool.courses()[0] && Pool.courses()[0].title) || ((typeof I18N !== 'undefined') ? I18N.t('app_title') : 'Class 8 Mathematics');
    const appSub = (typeof I18N !== 'undefined') ? I18N.t('app_sub') : 'Math Base';

    nav.appendChild(el('div', { class: 'rail-top' }, [
      railBtn('back', 'arrow_back', backLabel, function () { Router.back(); }),
      el('a', { class: 'rail-brand', href: Router.href('home') }, [
        el('span', { class: 'brand-titles' }, [
          el('b', { text: appTitle }),
          el('span', { class: 'brand-sub', id: 'rail-sub', text: appSub })
        ])
      ])
    ]));

    const list = el('div', { class: 'rail-nav' });
    TABS.forEach(function (t) {
      const tabLabel = (typeof I18N !== 'undefined') ? I18N.t('tab_' + t.name, t.label) : t.label;
      list.appendChild(el('a', { href: Router.href(t.name), id: 'tab-' + t.name }, [
        DOM.mi(t.icon), el('span', { class: 'lb', text: tabLabel })
      ]));
    });
    nav.appendChild(list);

    const langLabel = (typeof I18N !== 'undefined') ? I18N.t('lang_btn') : 'മലയാളം';
    const fullLabel = (typeof I18N !== 'undefined') ? I18N.t('fullscreen') : 'Full screen';
    const themeLabel = (typeof I18N !== 'undefined') ? I18N.t('theme') : 'Theme';

    nav.appendChild(el('div', { class: 'rail-foot' }, [
      railBtn('lang', 'translate', langLabel, function () { if (typeof I18N !== 'undefined') I18N.toggle(); }),
      railBtn('full', 'fullscreen', fullLabel, Shell.toggleFull),
      railBtn('theme', 'contrast', themeLabel, Shell.cycleTheme)
    ]));

    Shell.paint();
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
        DOM.mi('warning'),
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
    Shell.paint();
    if (r.name !== 'study' && r.name !== 'note') Shell.setSubtitle('');
    const h = main.querySelector('#pagetitle');
    if (h) h.focus({ preventScroll: true });
    /* Most views start at the top. Study does not: it restores the row you
       were last reading, and jumping to the top first would undo that. */
    if (view.keepScroll) { if (view.afterPaint) view.afterPaint(); }
    else window.scrollTo(0, 0);
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
        DOM.mi('warning'),
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
      DOM.mi('warning'),
      el('span', {}, [
        el('b', { text: 'MathJax did not load. ' }),
        'Formulas will show in plain text format. The app needs the network once to fetch it.'
      ])
    ]), wrap.firstChild);
  }

  /* The app proper. Only ever reached with someone signed in. */
  function run() {
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
    if (typeof I18N !== 'undefined') I18N.init();
    Theme.apply();
    Shell.wire();

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
