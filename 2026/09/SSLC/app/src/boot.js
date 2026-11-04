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

    /* The brand is the app's, not the first course's: the pool holds four
       courses and the first one happened to be Class 8. */
    const topTitle = document.getElementById('top-title');
    if (topTitle) {
      topTitle.textContent = (typeof I18N !== 'undefined') ? I18N.t('app_title') : 'SSLC Mathematics';
    }
    const topSub = document.getElementById('top-sub');
    if (topSub && (!topSub.dataset.custom || topSub.dataset.custom === 'false')) {
      topSub.textContent = (typeof I18N !== 'undefined') ? I18N.t('app_sub') : 'Kerala SCERT · Class 8–10';
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

  function openMoreModal() {
    const isMl = (typeof I18N !== 'undefined') && I18N.lang() === 'ml';
    const old = document.getElementById('more-sheet-backdrop');
    if (old) old.remove();

    const backdrop = DOM.el('div', { class: 'more-sheet-backdrop', id: 'more-sheet-backdrop' });
    const opener = document.activeElement;
    function close() {
      backdrop.remove();
      if (opener && opener.isConnected) opener.focus({ preventScroll: true });
    }
    const full = isFull();
    const theme = Store.pref('theme', 'auto');

    const sheet = DOM.el('div', { class: 'more-sheet', role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'more-heading' }, [
      DOM.el('div', { class: 'spread', style: { alignItems: 'center' } }, [
        DOM.el('h2', { id: 'more-heading', text: isMl ? 'കൂടുതൽ ക്രമീകരണങ്ങൾ' : 'More Options' }),
        DOM.el('button', { class: 'icon-btn', type: 'button', 'aria-label': isMl ? 'അടയ്ക്കുക' : 'Close', on: { click: close } }, [
          DOM.mi('close')
        ])
      ]),

      DOM.el('button', { class: 'more-item', type: 'button', on: { click: () => { cycleTheme(); close(); } } }, [
        DOM.mi(theme === 'dark' ? 'dark_mode' : theme === 'light' ? 'light_mode' : 'contrast'),
        DOM.el('span', { text: (isMl ? 'തീം മാറ്റുക: ' : 'Theme: ') + theme.toUpperCase() })
      ]),

      DOM.el('button', { class: 'more-item', type: 'button', on: { click: () => { toggleFull(); close(); } } }, [
        DOM.mi(full ? 'fullscreen_exit' : 'fullscreen'),
        DOM.el('span', { text: full ? (isMl ? 'ഫുൾ സ്ക്രീൻ ഒഴിവാക്കുക' : 'Exit Full Screen') : (isMl ? 'ഫുൾ സ്ക്രീൻ' : 'Full Screen') })
      ]),

      DOM.el('a', { class: 'more-item', href: Router.href('progress'), on: { click: close } }, [
        DOM.mi('insights'),
        DOM.el('span', { text: isMl ? 'പഠന പുരോഗതിയും ക്രമീകരണങ്ങളും' : 'Progress, Mastery & Settings' })
      ]),

      DOM.el('a', { class: 'more-item', href: Router.href('method'), on: { click: close } }, [
        DOM.mi('school'),
        DOM.el('span', { text: isMl ? 'പഠനരീതി' : 'How to Study (Method)' })
      ])
    ]);

    backdrop.addEventListener('click', function (e) {
      if (e.target === backdrop) close();
    });

    sheet.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { e.preventDefault(); close(); return; }
      if (e.key !== 'Tab') return;
      const items = Array.from(sheet.querySelectorAll('button, a[href]'));
      const first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });

    backdrop.appendChild(sheet);
    document.body.appendChild(backdrop);
    sheet.querySelector('button').focus();
  }

  function wire() {
    const byId = id => document.getElementById(id);
    const back = byId('back-btn'), full = byId('full-btn'), theme = byId('theme-btn'), lang = byId('lang-btn'), more = byId('more-btn');
    if (back) { back.setAttribute('data-chrome', 'back'); back.addEventListener('click', () => Router.back()); }
    if (full) { full.setAttribute('data-chrome', 'full'); full.addEventListener('click', toggleFull); }
    if (theme) { theme.setAttribute('data-chrome', 'theme'); theme.addEventListener('click', cycleTheme); }
    if (lang) { lang.addEventListener('click', () => { if (typeof I18N !== 'undefined') I18N.toggle(); }); }
    if (more) { more.addEventListener('click', openMoreModal); }
    document.addEventListener('fullscreenchange', paint);
    document.addEventListener('webkitfullscreenchange', paint);
    paint();
  }

  return { isFull, toggleFull, cycleTheme, openMoreModal, paint, wire, setSubtitle };
})();

const App = (function () {

  const el = DOM.el;

  /* Four primary destinations:
     Today / ഇന്ന്: Continue, due review, small wins
     Learn / പഠനം: Syllabus, chapters, focused lesson
     Practice / പരിശീലനം: Spaced recall, drills, mixed practice
     Progress / പുരോഗതി: Mastery, analytics, timer, sync/profile */
  const TABS = [
    { name: 'home', label: 'Today', icon: 'today', also: ['method'] },
    { name: 'study', label: 'Learn', icon: 'menu_book', also: ['note', 'omr', 'write'] },
    { name: 'recall', label: 'Practice', icon: 'fitness_center', also: ['drill'] },
    { name: 'progress', label: 'Progress', icon: 'insights', also: [] }
  ];

  const VIEWS = {
    home: () => ViewHome, study: () => ViewStudy, note: () => ViewNote,
    recall: () => ViewRecall, omr: () => ViewOmr, write: () => ViewStudy,
    drill: () => ViewDrill, method: () => ViewMethod,
    progress: () => ViewProgress
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
    const appTitle = (typeof I18N !== 'undefined') ? I18N.t('app_title') : 'SSLC Mathematics';
    const appSub = (typeof I18N !== 'undefined') ? I18N.t('app_sub') : 'Kerala SCERT · Class 8–10';

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
      el('a', { class: 'btn', href: Router.href('home'), text: (typeof I18N !== 'undefined') ? I18N.t('tab_home') : 'Today' })
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
    /* a note open in the tree widens the column; every other view is narrow */
    if (r.name !== 'study' && r.name !== 'note') document.body.classList.remove('note-open');
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
        el('b', { text: (typeof I18N !== 'undefined' && I18N.lang() === 'ml') ? 'MathJax ലോഡായില്ല. ' : 'MathJax did not load. ' }),
        (typeof I18N !== 'undefined' && I18N.lang() === 'ml')
          ? 'സൂത്രവാക്യങ്ങൾ സാധാരണ അക്ഷരങ്ങളിൽ കാണും. ഇത് ലഭിക്കാൻ ഒരു തവണ നെറ്റ്‌വർക്ക് വേണം.'
          : 'Formulas will show in plain text format. The app needs the network once to fetch it.'
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
      if (Store.isOnboarded() || Store.signedIn()) run(); else gate();
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

  return { start: start, route: route, buildNav: buildNav, isGate: () => document.body.classList.contains('signed-out') };
})();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', App.start);
} else {
  App.start();
}
