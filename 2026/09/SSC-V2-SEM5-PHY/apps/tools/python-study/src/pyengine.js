/* Python bridge for the study engine. The UI was written for a LaTeX compiler; this file gives it the same
   names, backed by Pyodide in a Web Worker. Nothing here is loaded until a cell is run (except a background warm-up). */
(function () {
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  // Compatibility stub: the UI asks the engine to lint TeX. Python is checked by running it, so nothing to lint here.
  window.LXTeX = {
    esc,
    renderInline: x => esc(x),
    parseBib: () => ({ errors: [] }),
    compile: () => ({ findings: [], html: null, ok: true, emulated: [], notes: [] })
  };
  // Python syntax highlighting (no network). The UI asks for highlighted HTML and for per-line tokens (editor).
  const KW = new Set('False None True and as assert async await break class continue def del elif else except finally for from global if import in is lambda nonlocal not or pass raise return try while with yield match case'.split(' '));
  const BI = new Set('abs all any bin bool bytes callable chr complex dict dir divmod enumerate eval exec filter float format frozenset getattr hasattr hash hex id input int isinstance issubclass iter len list map max min next object oct open ord pow print property range repr reversed round set setattr slice sorted str sum super tuple type vars zip'.split(' '));
  const COL = {
    light: { kw: '#a626a4', str: '#50a14f', com: '#a0a1a7', num: '#986801', bi: '#0184bc', fn: '#4078f2', op: '#383a42', id: '#383a42' },
    dark: { kw: '#c678dd', str: '#98c379', com: '#7f848e', num: '#d19a66', bi: '#61afef', fn: '#61afef', op: '#abb2bf', id: '#abb2bf' }
  };
  const TOKEN_RE = /"""[\s\S]*?"""|'''[\s\S]*?'''|"(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*'|#[^\n]*|\b0[xXoObB][\da-fA-F_]+|\b\d[\d_]*(?:\.\d*)?(?:[eE][+-]?\d+)?[jJ]?|[A-Za-z_]\w*|\s+|[\s\S]/g;
  // one flat list of {t, s} across the whole source, so triple-quoted strings can span lines
  function pyTokens(code) {
    const out = []; let m, afterDef = false;
    TOKEN_RE.lastIndex = 0;
    while ((m = TOKEN_RE.exec(code))) {
      const s = m[0]; let t;
      if (/^\s+$/.test(s)) { out.push({ t: 'ws', s }); continue; }
      if (s[0] === '#') t = 'com';
      else if (s[0] === '"' || s[0] === "'") t = 'str';
      else if (/^\d/.test(s) || /^0[xXoObB]/.test(s)) t = 'num';
      else if (/^[A-Za-z_]/.test(s)) t = KW.has(s) ? 'kw' : BI.has(s) ? 'bi' : afterDef ? 'fn' : 'id';
      else t = 'op';
      afterDef = (t === 'kw' && s === 'def');
      out.push({ t, s });
    }
    return out;
  }
  const escHtml = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  window.LXShiki = {
    highlight(code) {
      const parts = pyTokens(code).map(x => x.t === 'ws' ? escHtml(x.s) :
        `<span class="py-${x.t}" style="--shiki-light:${COL.light[x.t] || COL.light.id};--shiki-dark:${COL.dark[x.t] || COL.dark.id}${x.t === 'com' ? ';font-style:italic' : ''}">${escHtml(x.s)}</span>`);
      return `<pre class="shiki py-code"><code>${parts.join('')}</code></pre>`;
    },
    tokens(code) {
      const lines = [[]];
      pyTokens(code).forEach(tk => {
        tk.s.split('\n').forEach((piece, i) => {
          if (i > 0) lines.push([]);
          if (piece) lines[lines.length - 1].push({
            content: piece, variants: {
              light: { color: COL.light[tk.t] || COL.light.id, fontStyle: tk.t === 'com' ? 1 : 0 },
              dark: { color: COL.dark[tk.t] || COL.dark.id, fontStyle: tk.t === 'com' ? 1 : 0 }
            }
          });
        });
      });
      return lines;
    }
  };

  let worker = null, seq = 0, ready = false;
  const waiting = {}, readyWaiters = [];
  function getWorker() {
    if (worker) return worker;
    worker = new Worker(URL.createObjectURL(new Blob([window.PY_WORKER_SRC], { type: 'text/javascript' })));
    // the example data files travel once, before the first run
    worker.postMessage({ files: window.PY_FILES || {} });
    worker.onmessage = ev => {
      const m = ev.data;
      if (m.type === 'ready') { ready = true; readyWaiters.splice(0).forEach(f => f()); document.dispatchEvent(new Event('py:ready')); return; }
      const cb = waiting[m.id]; if (cb) { delete waiting[m.id]; cb(m); }
    };
    return worker;
  }
  // Run one piece of Python code in the shared runtime. Resolves to {ok, out, err, img, ms}.
  // A run that takes longer than RUN_LIMIT_MS is stopped: the worker is replaced, and the next run starts Python again.
  // The first run also loads Python (about 40 s on a slow connection), so it gets a longer limit.
  const RUN_LIMIT_MS = 60000, FIRST_RUN_LIMIT_MS = 240000;
  window.PYRUN = code => new Promise(resolve => {
    const id = ++seq;
    const limit = ready ? RUN_LIMIT_MS : FIRST_RUN_LIMIT_MS;
    const timer = setTimeout(() => {
      if (!waiting[id]) return;
      delete waiting[id];
      worker.terminate(); worker = null; ready = false;
      resolve({ ok: false, out: '', err: `Stopped after ${limit / 1000} seconds. The program may loop forever. Check the loop condition.`, ms: limit });
    }, limit);
    waiting[id] = r => { clearTimeout(timer); ready = true; resolve(r); };
    getWorker().postMessage({ id, code });
  });
  window.PYISREADY = () => ready;

  // HTML for a run result, shown inside a preview frame.
  window.PYHTML = r => {
    let h = `<div class="body"><pre class="py${r.ok ? '' : ' err'}">${esc((r.out || '') + (r.err ? ((r.out ? '\n' : '') + r.err) : '')) || (r.img ? '' : '(no output)')}</pre>`;
    if (r.img) h += `<img class="pyimg" alt="plot" src="data:image/png;base64,${r.img}">`;
    return h + '</div>';
  };
  // A complete page for the IDE's output frame.
  window.PYDOC = r => '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width"><style>body{margin:12px;font:14px/1.5 ui-monospace,monospace;background:#fff;color:#111}pre.py{white-space:pre-wrap;word-break:break-word;margin:0}pre.py.err{color:#b3412e}img.pyimg{max-width:100%;display:block;margin-top:8px}</style>' + PYHTML(r);
  // Warm the runtime when the page is idle, so the first Run is fast.
  document.addEventListener('DOMContentLoaded', () => {
    const warm = () => getWorker().postMessage({ warm: true });
    if ('requestIdleCallback' in window) requestIdleCallback(warm, { timeout: 3000 }); else setTimeout(warm, 1500);
  });
})();
