/* ══════════════════════════════════════════════════════════════════════════
   flow-library loader.

   A project's app/index.html loads its own files (sources.js and everything
   in app/project/) and then this one, which pulls in the shared modules in
   the order below. build.py reads THIS LIST to inline the same modules in
   the same order, so a module added here reaches every project's dev page
   and every deployed bundle at once — and there is no second copy of the
   order to forget.

   Keep one quoted file name per entry and no other quoted strings inside the
   brackets: build.py pulls every quoted string out of them.
   ══════════════════════════════════════════════════════════════════════════ */

const FLOW_MODULES = [
  /* core */
  'core.project.js',
  'core.dom.js',
  'core.tex.js',
  'core.md.js',
  'core.store.js',
  'core.sync.js',
  'core.pool.js',
  'core.progress.js',
  'core.latex.js',

  /* shared parts and components */
  'ui.parts.js',
  'fig.library.js',
  'comp.figure.js',
  'comp.tree.js',
  'comp.question.js',
  'comp.note.js',
  'comp.write.js',

  /* views */
  'view.login.js',
  'view.home.js',
  'view.study.js',
  'view.note.js',
  'view.recall.js',
  'view.omr.js',
  'view.write.js',

  /* boot last: loads the data files listed in sources.js, then routes */
  'boot.js'
];

(function () {
  /* Dynamically inserted scripts with async=false run in insertion order,
     after everything the page itself has already run — which is why the
     project's own scripts come BEFORE this file in index.html. */
  const here = document.currentScript && document.currentScript.src;
  const base = here ? here.replace(/[^/]*$/, '') + 'src/' : '../../flow-library/app/src/';
  FLOW_MODULES.forEach(function (name) {
    const s = document.createElement('script');
    s.src = base + name;
    s.async = false;
    document.head.appendChild(s);
  });
})();
