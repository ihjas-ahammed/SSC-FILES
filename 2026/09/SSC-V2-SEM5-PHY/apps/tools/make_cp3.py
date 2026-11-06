import json, re, os

def find_source(filename):
    candidates = [
        filename,
        os.path.join(os.path.dirname(__file__), '..', filename),
        os.path.join(os.path.dirname(__file__), filename),
        os.path.join('/home/ihjas/mnt/ssc-files/2026/09/SSC-V2-SEM5-PHY/apps', filename),
        os.path.join(os.path.dirname(__file__), '..', '..', '..', '09', 'SSC-V2-SEM5-PHY', 'apps', filename)
    ]
    for c in candidates:
        if os.path.isfile(c):
            return c
    raise FileNotFoundError(f"Cannot find source {filename}")

# Read PYTHON_1234.html as base
with open(find_source('PYTHON_1234.html'), 'r', encoding='utf-8') as f:
    py_lines = f.readlines()

# Read SOLID_STATE_1234.html for animated derivation tool
with open(find_source('SOLID_STATE_1234.html'), 'r', encoding='utf-8') as f:
    ss_text = f.read()

# ----------------- SECTION 1: Head & CSS -----------------
head_part = ''.join(py_lines[:763])

# Update title, brand, masthead
head_part = head_part.replace('<title>Python · Units 1–19</title>', '<title>Interactive Study & Derivations Skeleton</title>')
head_part = head_part.replace('<span class="brand"><span class="tex">Python</span><small>Units 1–19</small></span>',
                              '<span class="brand"><span class="tex">CP3</span><small>Interactive Skeleton</small></span>')
old_masthead = """  <header class="masthead">
    <h1>Data analysis with <em>Python</em></h1>
    <p>Module I — Python core. Module II — pandas DataFrames. Module III — plotting. Module IV — data files and Jupyter. Every example runs in your browser, and you can change it and run it again.</p>
  </header>"""

new_masthead = """  <header class="masthead">
    <h1>Interactive <em>Skeleton Template</em></h1>
    <p>Complete skeleton featuring all interactive tools: live Python execution in browser, animated mathematical derivations with synchronized figures, OMR quiz sheets, 3D Leitner flashcards, matching pairs, and code challenges.</p>
  </header>"""
head_part = head_part.replace(old_masthead, new_masthead)

# Extract Figure CSS and Derivation CSS from SOLID_STATE_1234.html
p_css_fig_start = ss_text.find('/* ---------- Figure ---------- */')
p_css_fig_end = ss_text.find('/* ----------', p_css_fig_start + 40)
css_fig = ss_text[p_css_fig_start:p_css_fig_end]
css_fig = css_fig.replace(".fg-cap {", ".fg-cap { display: none !important;\n")

p_css_dv_start = ss_text.find('.dv{\n  --hl-rgb:var(--pos-rgb);')
p_css_dv_end = ss_text.find('/* ══════════════', p_css_dv_start)
css_dv = ss_text[p_css_dv_start:p_css_dv_end]

# Remove redundant green-left-rounded border caption box (.sx .fg-cap)
old_sx_fg_cap = """.sx .fg-cap{left:8px;right:8px;top:8px;max-width:none;white-space:normal;overflow:visible;
  font-family:var(--f-b);font-size:.86rem;font-weight:600;line-height:1.3;color:var(--ink);
  padding:.32rem .7rem .32rem .65rem;border-radius:10px;
  background:color-mix(in srgb,var(--bench) 88%,transparent);box-shadow:inset 3px 0 0 var(--accent),0 1px 4px rgba(0,0,0,.08)}"""
css_dv = css_dv.replace(old_sx_fg_cap, ".sx .fg-cap{display:none!important}")
css_dv = css_dv.replace("--fg-pad-top:46px;", "--fg-pad-top:10px;")

# Color variables for :root
root_colors = """  --pos-rgb:43,76,145; --neg-rgb:35,122,74; --wall-rgb:196,57,29; --prob-rgb:176,112,20;
  --pos:rgb(var(--pos-rgb)); --neg:rgb(var(--neg-rgb)); --wall:rgb(var(--wall-rgb)); --prob:rgb(var(--prob-rgb));
  --violet:var(--accent); --on-violet:var(--on-accent);
"""
head_part = head_part.replace("--on-accent:#FFFFFF;\n  color-scheme:light;\n}", "--on-accent:#FFFFFF;\n" + root_colors + "  color-scheme:light;\n}")

# Dark mode colors
dark_colors = """    --pos-rgb:140,168,240; --neg-rgb:104,200,138; --wall-rgb:240,112,79; --prob-rgb:227,180,92;
"""
head_part = head_part.replace("--on-accent:#111013;\n    color-scheme:dark;\n  }\n}", "--on-accent:#111013;\n" + dark_colors + "    color-scheme:dark;\n  }\n}")

# Append Figure & Derivation CSS before </style>
css_bundle = "\n/* ══════════════ ANIMATED DERIVATION & FIGURE STYLES ══════════════ */\n" + css_fig + "\n" + css_dv + "\n"
head_part = head_part.replace("</style>", css_bundle + "</style>")

# ----------------- SECTION 2: MathJax Loader in <head> -----------------
# We put MathJax in <head> so it is loaded and ready before scripts run
mj_head = """<script>
window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
    displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']],
    tags: 'none',
    macros: { hbar: '\\\\hslash', boldsymbol: ['\\\\mathbf{#1}', 1] }
  },
  svg: { fontCache: 'none' },
  options: {
    enableMenu: false,
    enableAssistiveMml: false,
    menuOptions: { settings: { assistiveMml: false } }
  },
  startup: {
    typeset: false,
    ready: function () {
      MathJax.startup.defaultReady();
      window.__mjReady = true;
      (window.__mjQueue || []).forEach(function (f) { try { f(); } catch(e){} });
      window.__mjQueue = [];
    }
  }
};
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-svg.js" id="MathJax-script"></script>
<script>
if (!window.MathJax || !window.MathJax.tex2svg) {
  var s = document.createElement('script');
  s.src = "https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-svg.js";
  document.head.appendChild(s);
}
</script>
</head>"""

head_part = head_part.replace("</head>", mj_head)

# ----------------- SECTION 3: Python Files & Worker -----------------
py_files_part = '<script>window.PY_FILES={"sample.csv": "name,score\\nAlice,95\\nBob,88\\nCharlie,92\\n"};</script>\n'
worker_part = py_lines[764] # PY_WORKER_SRC
bridge_part = ''.join(py_lines[765:873]) # Python bridge

# ----------------- SECTION 4: Derivation Tool (copied from SOLID_STATE_1234.html) -----------------
# 1. MJT
p_mjt_start = ss_text.find('/* ══════════════ MJT — MathJax for every label')
p_mjt_end = ss_text.find('})();', p_mjt_start) + 5
mjt_code = ss_text[p_mjt_start:p_mjt_end]

# 2. SM and SM.tex
p_sm_start = ss_text.find('/* Derivation engine core: helpers and the TeX move library')
p_sm_end = ss_text.find('/* ==========================================================================\n   Figure: animated SVG diagram', p_sm_start)
sm_code = ss_text[p_sm_start:p_sm_end]

# Update SM.typeset & SM.mathReady in sm_code for instant check & fallback
old_typeset = """  SM.typeset = function (el) {
    if (window.MathJax && MathJax.typesetPromise) return MathJax.typesetPromise([el]).catch(function () {});
    return Promise.resolve();
  };"""

new_typeset = """  SM.typeset = function (el) {
    if (!el) return Promise.resolve();
    if (window.__mjReady && window.MathJax && MathJax.typesetPromise) return MathJax.typesetPromise([el]).catch(function () {});
    (window.__mjQueue = window.__mjQueue || []).push(function () {
      if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([el]).catch(function () {});
    });
    return Promise.resolve();
  };"""

sm_code = sm_code.replace(old_typeset, new_typeset)

old_mathready = """  SM.mathReady = function (cb) {
    var tries = 0;
    (function poll() {
      var MJ = window.MathJax;
      if (MJ && MJ.tex2svg && MJ.startup && MJ.startup.promise) { MJ.startup.promise.then(function () { cb(true); }); return; }
      if (++tries > 150) { cb(false); return; }
      setTimeout(poll, 100);
    })();
  };"""

new_mathready = """  SM.mathReady = function (cb) {
    if (window.__mjReady && window.MathJax && window.MathJax.tex2svg) { cb(true); return; }
    var done = false;
    var timer = setTimeout(function () {
      if (!done) { done = true; cb(!!(window.MathJax && window.MathJax.tex2svg)); }
    }, 8000);
    (window.__mjQueue = window.__mjQueue || []).push(function () {
      if (!done) { done = true; clearTimeout(timer); cb(true); }
    });
    // Also poll as safeguard
    var tries = 0;
    (function poll() {
      if (done) return;
      if (window.__mjReady && window.MathJax && window.MathJax.tex2svg) { done = true; clearTimeout(timer); cb(true); return; }
      if (++tries > 80) return;
      setTimeout(poll, 100);
    })();
  };"""

sm_code = sm_code.replace(old_mathready, new_mathready)

# 3. SM.Figure (2D animated vector diagram engine)
p_fig_start = ss_text.find('/* ==========================================================================\n   Figure: animated SVG diagram')
p_fig_end = ss_text.find('/* ==========================================================================\n   MathFlow v4: derivations, animated', p_fig_start)
fig_code = ss_text[p_fig_start:p_fig_end]
fig_code = fig_code.replace("cap.className = 'fg-cap';", "cap.className = 'fg-cap'; cap.style.display = 'none';")

# 4. SM.MathFlow (measure & match)
p_mf_func = ss_text.find('(function () {\n  var SM = window.SM, T = SM.tex;\n  var NS = \'http://www.w3.org/2000/svg\';', p_fig_end)
p_match_end = ss_text.find('return pairs;\n  }', p_mf_func) + len('return pairs;\n  }')
mf_code = ss_text[p_mf_func:p_match_end] + "\n  SM.MathFlow = { measure: measure, match: match };\n})();\n"

# In mf_code, make sure measure doesn't cache error if not ready
old_measure_check = """    try { node = MathJax.tex2svg(tex, { display: true }); } catch (e) { node = null; }
    if (!node) return (mcache[key] = { error: true, tex: tex });"""

new_measure_check = """    if (!window.MathJax || !window.MathJax.tex2svg) return { error: true, tex: tex, notReady: true };
    try { node = MathJax.tex2svg(tex, { display: true }); } catch (e) { node = null; }
    if (!node) return (mcache[key] = { error: true, tex: tex });"""

mf_code = mf_code.replace(old_measure_check, new_measure_check)

# 5. SM.Fig3 (3D figure engine)
p_fig3_start = ss_text.find('/* ══════════════════════════════════════════════════════════════════\n   Fig3: a 3-D derivation figure')
p_derivs_marker = ss_text.find('window.DERIVS=', p_fig3_start)
fig3_code = ss_text[p_fig3_start:p_derivs_marker]
fig3_code = fig3_code.replace("cap.className = 'fg-cap';", "cap.className = 'fg-cap'; cap.style.display = 'none';")

# 6. DERIVS (rot with graphics, and catastrophe as lonely one)
pos_derivs_end = ss_text.find(';\n', p_derivs_marker)
all_derivs = json.loads(ss_text[p_derivs_marker + len('window.DERIVS='):pos_derivs_end])
sample_derivs = {
    'rot': all_derivs['rot'],
    'catastrophe': all_derivs['catastrophe']
}
derivs_code = "window.DERIVS=" + json.dumps(sample_derivs, ensure_ascii=False) + ";\n"

# 7. SSPDeriv player
p_ssp_start = ss_text.find('Stacked derivation player (SSP)')
p_ssp_start = ss_text.rfind('/*', 0, p_ssp_start)
p_ssp_end = ss_text.find('window.SSPDeriv = { mount: mount };\n})();', p_ssp_start) + len('window.SSPDeriv = { mount: mount };\n})();')
ssp_code = ss_text[p_ssp_start:p_ssp_end]
ssp_code = ssp_code.replace("var DONE_KEY = 'ss12_derivs_done_v2';", "var DONE_KEY = 'cp3_derivs_done_v1';")

# USER REQUIREMENT 1 & 2:
# Remove extra instructions at the top (dv-route, dv-leg, dv-uses, dv-foot)
old_window_der = """  window.der = function (id) {
    var d = (window.DERIVS || {})[id];
    if (!d) return '<div class="note pitfall"><div class="nh">missing derivation</div><p>' + id + '</p></div>';
    var fig = !!(d.figure && d.figure.parts);
    var last = d.steps[d.steps.length - 1].tex;
    var nAsk = d.steps.filter(function (s) { return s.ask; }).length;
    return '<div class="dv' + (fig ? ' has-fig' : '') + '" data-dv="' + id + '">' +
      '<div class="dv-h"><span class="li">derivation</span><b class="dv-t">' + d.title + '</b>' +
        (d.marks ? '<span class="dv-pill">' + d.marks + '</span>' : '') + '</div>' +
      '<div class="dv-route"><div class="dv-end"><small>start</small><div>\\\\(' + (d.start || d.steps[0].tex) + '\\\\)</div></div>' +
        '<span class="dv-arrow">→</span>' +
        '<div class="dv-end"><small>result</small><div>\\\\(' + (d.result || last) + '\\\\)</div></div></div>' +
      (d.legend ? '<p class="dv-leg">' + d.legend + '</p>' : '') +
      (d.uses && d.uses.length ? '<div class="dv-uses"><span class="du-h">Before you start: what this uses</span>' +
        d.uses.map(function (u) { return '<span class="du-r"><span class="du-s">\\\\(' + u[0] + '\\\\)</span><span class="du-d">' + u[1] + '</span></span>'; }).join('') + '</div>' : '') +
      '<div class="sx">' +
        (fig ? '<div class="sx-fig"><div class="sx-figbox fg-host"></div>' +
          (d.figure.kind === '3d' ? '<span class="sx-hint">drag to turn</span>' : '') + '</div>' : '') +
        '<ol class="sx-rows"></ol>' +
        '<div class="sx-ask" hidden><span class="sx-ask-tag">your move</span><p class="sx-ask-q"></p><div class="sx-ask-opts"></div>' +
          '<p class="sx-ask-why" hidden></p><button type="button" class="btn primary sx-ask-go" hidden>Continue ▸</button></div>' +
        '<div class="sx-ctrl">' +
          '<button type="button" class="sx-b" data-sx="prev" aria-label="Take back the last step" title="Back one step">◀</button>' +
          '<button type="button" class="sx-b sx-next" data-sx="next"><span class="sx-nl">Start ▸</span><span class="sx-count"></span></button>' +
          '<button type="button" class="sx-b" data-sx="play" title="Play by itself (for watching or screen recording)" aria-label="Play by itself">▶▶</button>' +
          '<button type="button" class="sx-b" data-sx="all" title="Show every step at once">All</button>' +
          '<button type="button" class="sx-b" data-sx="reset" title="Start again" aria-label="Start again">↺</button>' +
        '</div>' +
      '</div>' +
      (nAsk ? '<p class="dv-foot">' + nAsk + ' checkpoint' + (nAsk > 1 ? 's' : '') + ' on the way: choose the next move before it is shown.</p>' : '') +
      '' +
      '</div>';
  };"""

# Check exact string in ssp_code
p_der_func_start = ssp_code.find('window.der = function (id) {')
p_der_func_end = ssp_code.find('  /* ---------------- glyph sprites ---------------- */', p_der_func_start)
clean_window_der = """  window.der = function (id) {
    var d = (window.DERIVS || {})[id];
    if (!d) return '<div class="note pitfall"><div class="nh">missing derivation</div><p>' + id + '</p></div>';
    var fig = !!(d.figure && d.figure.parts);
    return '<div class="dv' + (fig ? ' has-fig' : '') + '" data-dv="' + id + '">' +
      '<div class="dv-h"><span class="li">derivation</span><b class="dv-t">' + d.title + '</b>' +
        (d.marks ? '<span class="dv-pill">' + d.marks + '</span>' : '') + '</div>' +
      '<div class="sx">' +
        (fig ? '<div class="sx-fig"><div class="sx-figbox fg-host"></div>' +
          (d.figure.kind === '3d' ? '<span class="sx-hint">drag to turn</span>' : '') + '</div>' : '') +
        '<ol class="sx-rows"></ol>' +
        '<div class="sx-ask" hidden><span class="sx-ask-tag">your move</span><p class="sx-ask-q"></p><div class="sx-ask-opts"></div>' +
          '<p class="sx-ask-why" hidden></p><button type="button" class="btn primary sx-ask-go" hidden>Continue ▸</button></div>' +
        '<div class="sx-ctrl">' +
          '<button type="button" class="sx-b" data-sx="prev" aria-label="Take back the last step" title="Back one step">◀</button>' +
          '<button type="button" class="sx-b sx-next" data-sx="next"><span class="sx-nl">Start ▸</span><span class="sx-count"></span></button>' +
          '<button type="button" class="sx-b" data-sx="play" title="Play by itself (for watching or screen recording)" aria-label="Play by itself">▶▶</button>' +
          '<button type="button" class="sx-b" data-sx="all" title="Show every step at once">All</button>' +
          '<button type="button" class="sx-b" data-sx="reset" title="Start again" aria-label="Start again">↺</button>' +
        '</div>' +
      '</div>' +
      '</div>';
  };\n\n"""

ssp_code = ssp_code[:p_der_func_start] + clean_window_der + ssp_code[p_der_func_end:]

# USER REQUIREMENT 2:
# Remove paragraph-like instruction below eqn, keeping only the equation and brief step note (the smallheading)
old_row_html = """  P.rowHTML = function (i) {
    var st = this.d.steps[i];
    var lbl = st.move ? T.label(st.move) : (i === 0 ? 'Start' : '');
    return '<div class="sx-head"><span class="sx-num">' + SM.pad2(i + 1) + '</span><span class="sx-mv">' + SM.mathLabel(lbl) + '</span></div>' +
      '<div class="sx-eq"></div>' +
      (st.note ? '<div class="sx-note">' + st.note + '</div>' : '') +
      '<div class="sx-snap" hidden></div>';
  };"""

new_row_html = """  P.rowHTML = function (i) {
    var st = this.d.steps[i];
    var lbl = st.move ? T.label(st.move) : (i === 0 ? 'Start' : '');
    return '<div class="sx-head"><span class="sx-num">' + SM.pad2(i + 1) + '</span><span class="sx-mv">' + SM.mathLabel(lbl) + '</span></div>' +
      '<div class="sx-eq"></div>' +
      '<div class="sx-snap" hidden></div>';
  };"""

ssp_code = ssp_code.replace(old_row_html, new_row_html)

# Update mount and mountDerivs in ssp_code for reliable mounting
old_mount_func = """  function mount(host) {
    if (host._player) return;
    var id = host.getAttribute('data-dv'), d = window.DERIVS[id];
    if (!d) return;
    var p = new Player(host, id, d);
    host._player = p;
    p.layer = document.createElement('div');
    p.layer.className = 'sx-layer';
    host.querySelector('.sx').appendChild(p.layer);
    var figBox = host.querySelector('.sx-figbox');
    if (figBox && d.figure) {
      p.fig = figEngine(d.figure).mount(figBox, d.figure, d.steps, { player: true });
      figBox._fig = p.fig;
      if (ro) ro.observe(figBox);
    }
    SM.mathReady(function (ok) {
      if (!ok) { p.rowsEl.innerHTML = '<li class="sx-err">MathJax did not load. Check the connection and reload.</li>'; return; }
      p.layout();
      p.rowsEl._player = p;
      if (ro) ro.observe(p.rowsEl);
      if (done[id]) { p.introDone = true; for (var j = 0; j < d.steps.length; j++) p.show(j, true); }
      else { p.chrome(); if (p.fig) p.fig.step(0, true); }
    });
  }

  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function (en) {
    en.forEach(function (x) {
      if (x.isIntersecting && x.target.offsetWidth > 0) { io.unobserve(x.target); mount(x.target); }
    });
  }, { rootMargin: '200px 0px' }) : null;

  window.mountDerivs = function (root) {
    (root || document).querySelectorAll('.dv').forEach(function (h) {
      if (h._player || h._watched) return;
      h._watched = true;
      if (io) io.observe(h); else mount(h);
    });
  };"""

new_mount_func = """  function mount(host) {
    if (host._player) {
      if (host.offsetWidth > 0) host._player.relayout();
      return;
    }
    var id = host.getAttribute('data-dv'), d = window.DERIVS[id];
    if (!d) return;
    var p = new Player(host, id, d);
    host._player = p;
    p.layer = document.createElement('div');
    p.layer.className = 'sx-layer';
    host.querySelector('.sx').appendChild(p.layer);
    var figBox = host.querySelector('.sx-figbox');
    if (figBox && d.figure) {
      p.fig = figEngine(d.figure).mount(figBox, d.figure, d.steps, { player: true });
      figBox._fig = p.fig;
      if (ro) ro.observe(figBox);
    }
    SM.mathReady(function (ok) {
      if (!ok) { p.rowsEl.innerHTML = '<li class="sx-err">MathJax did not load. Check your internet connection and reload.</li>'; return; }
      var hEl = host.querySelector('.dv-h');
      if (hEl) SM.typeset(hEl);
      p.layout();
      p.rowsEl._player = p;
      if (ro) ro.observe(p.rowsEl);
      if (done[id]) { p.introDone = true; for (var j = 0; j < d.steps.length; j++) p.show(j, true); }
      else { p.chrome(); if (p.fig) p.fig.step(0, true); }
    });
  }

  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function (en) {
    en.forEach(function (x) {
      if (x.isIntersecting && x.target.offsetWidth > 0) { io.unobserve(x.target); mount(x.target); }
    });
  }, { rootMargin: '300px 0px' }) : null;

  window.mountDerivs = function (root) {
    var list = (root || document).querySelectorAll('.dv');
    list.forEach(function (h) {
      var hEl = h.querySelector('.dv-h');
      if (hEl && !hEl._typeset) {
        hEl._typeset = true;
        SM.typeset(hEl);
      }
      if (h._player) {
        if (h.offsetWidth > 0) h._player.relayout();
        return;
      }
      if (root || !io) {
        mount(h);
      } else {
        if (!h._watched) {
          h._watched = true;
          io.observe(h);
        }
      }
    });
  };"""

ssp_code = ssp_code.replace(old_mount_func, new_mount_func)

deriv_tool_script = f"""<script>
{mjt_code}

{sm_code}

{fig_code}

{mf_code}

{fig3_code}

{derivs_code}

{ssp_code}
</script>
"""

# ----------------- SECTION 5: Content Helpers & der() helper -----------------
helpers_part = ''.join(py_lines[873:933])
helpers_part = helpers_part.replace("const reftable=(rows,o)=>{", "const der=id=>window.der(id);\nconst reftable=(rows,o)=>{")

# ----------------- SECTION 6: Skeleton Content (STATIONS, MODULES, QUIZ) -----------------
skeleton_content = r"""

/* ═══════════════════ SKELETON DATA & STATIONS ═══════════════════ */
const STATIONS=[];

/* Unit 1: Basic Syntax, Prose, Callouts & Runnable Snippets */
STATIONS.push({id:"u1",title:"Unit 1 · Basic Syntax & Prose Components",short:"Prose, Notes & Code",est:"~10 min",body:[
  gist("Python is dynamically typed: variables are tags bound to objects in memory."),
  tp("Text Formatting & Callouts"),
  "<p>Standard paragraph text with <code>inline code</code> formatting. Use callout boxes to emphasize important learning points.</p>",
  must("Core rule: Use <code>snake_case</code> for functions and variables, and <code>PascalCase</code> for classes (PEP 8)."),
  trap("Zero-based indexing: <code>lst[len(lst)]</code> raises <code>IndexError</code> because valid indices run from <code>0</code> to <code>len - 1</code>."),
  why("Explicit is better than implicit. Writing small, focused snippets and running them immediately reinforces understanding."),
  tp("Runnable Code & Virtual Files"),
  "<p>Every code block with <code>ex()</code> runs in the browser via Pyodide in a background Web Worker.</p>",
  ex("name = 'World'\nprint(f'Hello, {name}!')", {title: "Simple Greeting"}),
  "<p>Virtual data files from <code>window.PY_FILES</code> are placed in the virtual <code>examples/</code> directory:</p>",
  ex("import pandas as pd\ndf = pd.read_csv('examples/sample.csv')\nprint(df)", {title: "Reading sample.csv"}),
  tp("Reference Tables & Model Answers"),
  reftable([
    ["print(*objects)", "Outputs string representation of objects", "print('Value:', 42)"],
    ["type(object)", "Returns the type of an object", "print(type(3.14))"],
    ["len(sequence)", "Returns the length of a sequence", "print(len([1, 2, 3]))"]
  ], {h1: "Function", h2: "Description"}),
  paper("Mid-Term Examination", "15 mins", 10),
  secband("A", "Core Concepts"),
  qa("2 Marks", "What is the difference between a mutable and an immutable object in Python?",
     "<p>A <b>mutable</b> object (e.g. list, dictionary, set) can be modified in-place after creation. An <b>immutable</b> object (e.g. int, float, str, tuple) cannot be altered once instantiated.</p>"),
  qa("3 Marks", "Explain Python's list slicing syntax with step.",
     "<p>Slice syntax is <code>sequence[start:stop:step]</code> where <code>start</code> is inclusive, <code>stop</code> is exclusive, and <code>step</code> specifies the stride between elements.</p>")
].join('')});

/* Unit 2: Interactive Retrieval, Flashcards & Practice Widgets */
STATIONS.push({id:"u2",title:"Unit 2 · Quizzes, Flashcards & Practice Widgets",short:"Quizzes & Flashcards",est:"~15 min",body:[
  gist("Active recall and spaced repetition tools: multiple-choice OMR sheets, 3D Leitner flashcards, and matching pairs."),
  tp("OMR Sheets & Conceptual Think Checks"),
  omr("Multiple Choice Checkpoint", [
    {q: "What does the expression <code>7 // 2</code> evaluate to?", o: ["3.5", "3", "4", "2"], a: 1, why: "// performs integer floor division, yielding 3."},
    {q: "Which Python data type is immutable?", o: ["list", "tuple", "dict", "set"], a: 1, why: "Tuples cannot be altered once created."}
  ]),
  think("Think: List Length", "data = [10, 20, 30]\ndata.append(40)", ["3", "4", "Error", "None"], 1, "append(40) adds a fourth element to the list, making len(data) equal to 4."),
  tp("3D Leitner Flashcards & Matching Pairs"),
  cards("Python Core Flashcards", [
    {f: "Keyword to define a function", b: "def"},
    {f: "Syntax for an empty set", b: {code: "s = set()"}},
    {f: "What is bool('')?", b: "False (an empty string is falsy)"},
    {f: "How do you swap two variables in Python?", b: {code: "a, b = b, a"}}
  ]),
  match("Match Operators with Roles", [
    ["==", "Equality comparison"],
    ["//", "Floor division"],
    ["**", "Exponentiation / Power"],
    ["in", "Membership test"]
  ], {left: "Operator", right: "Role"}),
  tp("Fill in the Blanks"),
  fill("Complete the Function", "def add(x, y):\n    [[return]] x [[+]] y\n\nprint(add(5, 7))", {code: true})
].join('')});

/* Unit 3: Code Puzzles, Predictions & Live Challenges */
STATIONS.push({id:"u3",title:"Unit 3 · Puzzles, Predictions & Code Challenges",short:"Puzzles & Challenges",est:"~15 min",body:[
  gist("Hands-on problem solving using Parsons line assembly, PRIMM prediction, bug fixing, and solution building."),
  tp("Parsons Puzzles & PRIMM Prediction"),
  parsons("Assemble a While Loop", [
    "i = 0",
    "while i < 3:",
    "    print('Step:', i)",
    "    i += 1"
  ], {extra: ["i -= 1"]}),
  predict("Predict the Output", "nums = [1, 2, 3]\nnums.reverse()\nprint(nums)", ["[1, 2, 3]", "[3, 2, 1]", "None", "Error"], 1, "reverse() reverses the list in-place and modifies it directly."),
  tp("Code Challenges & Interactive Editor"),
  fix("Fix the Loop Bug", "for i in range(3)\n    print(i)", {
    brief: "Add the missing colon at the end of the for statement.",
    checks: [{re: "for i in range\\(3\\):", msg: "Colon added to for statement"}]
  }),
  build("Write a Doubler Function", "# Write a function double(n) returning n * 2\n", {
    brief: "Define double(n) that returns n multiplied by 2.",
    checks: [
      {re: "def double\\([a-zA-Z0-9_]+\\):", msg: "Function double defined"},
      {re: "\\*\\s*2|2\\s*\\*", msg: "Multiplies parameter by 2"}
    ]
  }),
  editor("total = sum([10, 20, 30])\nprint('Total is:', total)", {title: "Interactive Scratch Cell"})
].join('')});

/* Unit 4: Animated Mathematical Derivations */
STATIONS.push({id:"u4",title:"Unit 4 · Mathematical Derivations (Animated Tool)",short:"Animated Derivations",est:"~20 min",body:[
  gist("Mathematical derivations animated step-by-step with synchronized vector figures, dynamic glyph flight, and active recall checkpoints."),
  tp("Derivation with Synchronized Vector Figure"),
  der("rot"),
  tp("Standalone / Lonely Derivation (Pure Math)"),
  der("catastrophe")
].join('')});

/* ═══════════════════ MODULE MAP ═══════════════════ */
const MODULES=[
  {id:'mod-1',name:'Module I',sub:'Foundations & Core Elements',stations:['u1']},
  {id:'mod-2',name:'Module II',sub:'Interactive Practice Widgets',stations:['u2']},
  {id:'mod-3',name:'Module III',sub:'Code Puzzles & Challenges',stations:['u3']},
  {id:'mod-4',name:'Module IV',sub:'Animated Derivations',stations:['u4']}
];
window.MODULES=MODULES;window.STATIONS=STATIONS;

/* Practice quizzes attached to the end of each unit */
(function () {
  const Q = {
    u1: [
      {q: "What does type(42) return?", o: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "number"], a: 0, why: "42 is an integer."},
      {q: "Which symbol denotes single-line comments in Python?", o: ["//", "/*", "#", "--"], a: 2, why: "Python uses # for single line comments."}
    ],
    u2: [
      {q: "Which collection type does not allow duplicate elements?", o: ["list", "tuple", "set", "dict"], a: 2, why: "Sets hold unique elements only."},
      {q: "What is the return value of dict.get('missing', 0)?", o: ["None", "KeyError", "0", "False"], a: 2, why: "get() returns the default value if the key does not exist."}
    ],
    u3: [
      {q: "What does break do inside a loop?", o: ["Skips to next iteration", "Exits the loop immediately", "Restarts the loop", "Raises an exception"], a: 1, why: "break terminates loop execution immediately."},
      {q: "Which function converts a string to an integer?", o: ["str()", "float()", "int()", "parse()"], a: 2, why: "int() casts valid string numbers to integers."}
    ],
    u4: [
      {q: "Why are only 1, 2, 3, 4, and 6-fold rotation axes allowed in crystal lattices?", o: ["Lattice translations require cos θ = (m-1)/2 where -1 ≤ (m-1)/2 ≤ 1", "Higher symmetries are energetically unstable", "Parity conservation forbids 5-fold turns", "Relativistic invariance"], a: 0, why: "The spacing between lattice points requires cos θ = (m-1)/2. For whole numbers m, this yields only θ = 180°, 120°, 90°, 60°, and 0°."},
      {q: "In the polarization catastrophe, what triggers spontaneous polarization?", o: ["The denominator 1 - ∑(N_j α_j)/(3ε_0) approaches zero", "Temperature drops below absolute zero", "The electronic polarizability turns negative", "External voltage exceeds dielectric breakdown"], a: 0, why: "When the local field feedback matches the restoring force, the Clausius-Mossotti denominator vanishes, giving spontaneous polarization."}
    ]
  };
  window.PY_QUIZ = Q;
  (window.STATIONS || []).forEach(function (st) {
    const qs = Q[st.id];
    if (!qs || !qs.length) return;
    st.body += omr('Practice · ' + st.short, qs);
  });
})();
</script>
"""

# ----------------- SECTION 7: Runtime Engine -----------------
runtime_part = ''.join(py_lines[2227:])

# Update storage keys in runtime so they don't collide
runtime_part = runtime_part.replace("const APP='ssc_python_units';", "const APP='ssc_cp3_skeleton';")
runtime_part = runtime_part.replace("const LS='py_progress_v1',LSID='py_syncid_v1';", "const LS='cp3_progress_v1',LSID='cp3_syncid_v1';")
runtime_part = runtime_part.replace("const LSIDE='py_ide_v1';", "const LSIDE='cp3_ide_v1';")
runtime_part = runtime_part.replace("KEY='py_theme'", "KEY='cp3_theme'")
runtime_part = runtime_part.replace("localStorage.setItem('py_view',v)", "localStorage.setItem('cp3_view',v)")
runtime_part = runtime_part.replace("localStorage.getItem('py_view')", "localStorage.getItem('cp3_view')")
runtime_part = runtime_part.replace("'PYTHON_1234_OFFLINE.html'", "'cp3_OFFLINE.html'")

# Hook mountDerivs into hydrateIn, render, and boot
old_hydrate = """function hydrateIn(card){
  $$('[data-ex]',card).forEach(b=>{const t=b.closest('.tunit');if(t&&t!==card&&!t.classList.contains('open'))return;
    if(b.closest('details.qa:not([open])'))return;hydrateEx(b);});
  $$('[data-w]',card).forEach(b=>{const t=b.closest('.tunit');if(t&&!t.classList.contains('open'))return;hydrateW(b);});
}"""

new_hydrate = """function hydrateIn(card){
  $$('[data-ex]',card).forEach(b=>{const t=b.closest('.tunit');if(t&&t!==card&&!t.classList.contains('open'))return;
    if(b.closest('details.qa:not([open])'))return;hydrateEx(b);});
  $$('[data-w]',card).forEach(b=>{const t=b.closest('.tunit');if(t&&!t.classList.contains('open'))return;hydrateW(b);});
  if(window.mountDerivs) window.mountDerivs(card);
}"""

runtime_part = runtime_part.replace(old_hydrate, new_hydrate)

runtime_part = runtime_part.replace("restoreFolds();paintAll();bmDirty=true;",
                                    "restoreFolds();paintAll();bmDirty=true;\n  if(window.mountDerivs) window.mountDerivs();")

runtime_part = runtime_part.replace("showView(v);\n  window.LXAPP",
                                    "showView(v);\n  if(window.mountDerivs) window.mountDerivs();\n  window.LXAPP")

# Assemble final HTML
full_html = head_part + py_files_part + worker_part + bridge_part + deriv_tool_script + helpers_part + skeleton_content + runtime_part

# Write to cp3 and cp3.html
this_dir = os.path.dirname(os.path.abspath(__file__))
parent_dir = os.path.dirname(this_dir)

target_dirs = [os.getcwd()]
if os.path.basename(this_dir) == 'tools':
    target_dirs.append(parent_dir)

for d in set(target_dirs):
    for fname in ['cp3.html', 'cp3']:
        p = os.path.join(d, fname)
        with open(p, 'w', encoding='utf-8') as f:
            f.write(full_html)

print("Generated clean cp3.html and cp3 successfully!")
print("Length:", len(full_html), "bytes")
