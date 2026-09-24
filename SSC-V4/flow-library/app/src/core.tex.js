/* ══════════════════════════════════════════════════════════════════════════
   MathJax plumbing.

   Two jobs: typeset authored content after a view is mounted, and render the
   learner's own LaTeX fragment safely. "Safely" means a malformed fragment
   never throws into the view, never wipes the last good render, and reports a
   human-readable reason. MathJax's formatError hook (set in index.html) parks
   the message on window.__texError; we read and clear it around each run.
   ══════════════════════════════════════════════════════════════════════════ */

const Tex = (function () {

  let chain = Promise.resolve();

  const available = () => !!(window.MathJax && window.MathJax.typesetPromise);

  /* Serialise every typeset call: MathJax is single-threaded and we need the
     error hook to belong to a known run. */
  function run(job) {
    chain = chain.then(job).catch(err => {
      console.warn('[tex]', err && err.message);
    });
    return chain;
  }

  /* Typeset authored HTML already in the DOM. */
  function typeset(nodes) {
    if (!available()) return Promise.resolve();
    const list = Array.isArray(nodes) ? nodes : [nodes];
    return run(() => window.MathJax.typesetPromise(list));
  }

  /* Render one learner fragment into `target`.
     Resolves {ok, error}. On failure `target` keeps whatever it had. */
  function renderFragment(target, latex, opts) {
    const display = !opts || opts.display !== false;
    const src = String(latex == null ? '' : latex);

    if (!src.trim()) {
      DOM.clear(target);
      target.appendChild(DOM.el('div', { class: 'ph', text: opts && opts.placeholder
        ? opts.placeholder : 'Your rendered mathematics will appear here.' }));
      return Promise.resolve({ ok: true, empty: true });
    }
    if (!available()) {
      DOM.clear(target);
      target.appendChild(DOM.el('div', { class: 'mono small', text: src }));
      return Promise.resolve({ ok: false, error: 'MathJax is not loaded — showing LaTeX source.' });
    }

    return run(function () {
      const stage = document.createElement('div');
      stage.style.cssText = 'position:absolute;left:-9999px;top:0;visibility:hidden';
      stage.textContent = display ? '\\[' + src + '\\]' : '\\(' + src + '\\)';
      document.body.appendChild(stage);
      window.__texError = null;

      return window.MathJax.typesetPromise([stage]).then(function () {
        const err = window.__texError;
        window.__texError = null;

        /* Three ways a fragment can be bad, and all three must be caught:
           a TeX error raised through formatError; an error node rendered in
           place; or no maths at all, which is what an unclosed group does —
           MathJax swallows the closing delimiter and finds nothing to typeset. */
        const errNode = stage.querySelector('mjx-merror, [data-mjx-error]');
        const produced = stage.querySelector('mjx-container');
        const why = err
          || (errNode && (errNode.getAttribute('data-mjx-error') || errNode.textContent))
          || (!produced && 'nothing came out — check for an unmatched { or }, and that every command is complete.');

        if (why) { stage.remove(); return { ok: false, error: String(why) }; }

        /* MathJax's noundefined package prints an unknown macro in red rather
           than failing. That is the right behaviour — the rest of the line
           still renders — but the learner deserves to be told. */
        const unknown = stage.querySelector('[style*="color: red"]');
        const hint = unknown
          ? 'It renders, but the part shown in red is not a command MathJax knows — check that spelling.'
          : null;

        DOM.clear(target);
        while (stage.firstChild) target.appendChild(stage.firstChild);
        stage.remove();
        return { ok: true, hint: hint };
      }, function (e) {
        stage.remove();
        window.__texError = null;
        return { ok: false, error: (e && e.message) || 'LaTeX could not be rendered.' };
      });
    });
  }

  /* Wait once for MathJax, so the first view is not typeset into the void. */
  function ready() {
    if (window.MathJax && window.MathJax.startup && window.MathJax.startup.promise) {
      return window.MathJax.startup.promise.catch(() => {});
    }
    return Promise.resolve();
  }

  return { typeset, renderFragment, ready, available };
})();
