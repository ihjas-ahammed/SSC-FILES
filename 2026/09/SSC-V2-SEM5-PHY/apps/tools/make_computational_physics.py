#!/usr/bin/env python3
"""
Master Builder for COMPUTATIONAL_PHYSICS_1234.html
Calicut University FYUGP Semester III BSc Physics Honours
Complete ASD-STE100 curriculum with all textbook examples, derivations,
OMR syntax highlighting, mobile overflow fixes, and full MathJax typesetting.
"""

import sys, os, json, re

# Add cp_modules to path
sys.path.insert(0, os.path.abspath(os.path.dirname(__file__)))
from cp_modules.derivs import DERIVS
from cp_modules.mod1 import get_mod1_stations
from cp_modules.mod2 import get_mod2_stations
from cp_modules.mod3 import get_mod3_stations
from cp_modules.mod4 import get_mod4_stations
from cp_modules.quizzes import get_quizzes

print("Loaded all curriculum modules successfully.")

# Read base templates
with open('PYTHON_1234.html', 'r', encoding='utf-8') as f:
    py_lines = f.readlines()

with open('SOLID_STATE_1234.html', 'r', encoding='utf-8') as f:
    ss_text = f.read()

# ----------------- SECTION 1: Head & CSS -----------------
head_part = ''.join(py_lines[:763])

# Update Title and Masthead
head_part = head_part.replace(
    '<title>Python · Units 1–19</title>',
    '<title>Computational Physics · BSc Physics Honours (FYUGP Semester III)</title>'
)
head_part = head_part.replace(
    '<span class="brand"><span class="tex">Python</span><small>Units 1–19</small></span>',
    '<span class="brand"><span class="tex">COMPUTATIONAL PHYSICS</span><small>FYUGP Semester III</small></span>'
)

old_masthead = """  <header class="masthead">
    <h1>Data analysis with <em>Python</em></h1>
    <p>Module I — Python core. Module II — pandas DataFrames. Module III — plotting. Module IV — data files and Jupyter. Every example runs in your browser, and you can change it and run it again.</p>
  </header>"""

new_masthead = """  <header class="masthead">
    <h1>Computational <em>Physics</em></h1>
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

# OMR Mobile Overflow & Code Highlighting CSS
omr_custom_css = """
/* ══════════════ OMR MOBILE OVERFLOW & SYNTAX HIGHLIGHTING FIX ══════════════ */
.omr .q {
  display: grid !important;
  grid-template-columns: 1.8rem minmax(0, 1fr) !important;
  gap: .25rem .5rem !important;
  min-width: 0 !important;
}
.omr .qt, .omr .opts, .omr .why, .omr .opt, .omr .opt-txt {
  min-width: 0 !important;
  max-width: 100% !important;
  overflow-wrap: break-word !important;
}
.omr-codebox, .omr pre, .omr .shiki {
  max-width: 100% !important;
  overflow-x: auto !important;
  -webkit-overflow-scrolling: touch !important;
  margin: .35rem 0 !important;
  border-radius: .45rem !important;
  font-size: .82rem !important;
  line-height: 1.42 !important;
}
.omr-codebox pre.shiki {
  padding: .5rem .75rem !important;
  margin: 0 !important;
  border: 1px solid var(--rule-soft) !important;
  background: var(--panel) !important;
}
.omr code {
  font-family: var(--f-m) !important;
  font-size: .86em !important;
}
.omr pre code {
  white-space: pre !important;
  word-break: normal !important;
}

/* ══════════════ TEXTBOOK CLEAN DATA TABLES ══════════════ */
.tb-wrap {
  width: 100% !important;
  overflow-x: auto !important;
  -webkit-overflow-scrolling: touch !important;
  margin: .9rem 0 1.2rem 0 !important;
  border-radius: .6rem !important;
  border: 1px solid var(--rule) !important;
  background: var(--bench) !important;
}
table.tb-std {
  width: 100% !important;
  border-collapse: collapse !important;
  font-size: .87rem !important;
  line-height: 1.45 !important;
}
table.tb-std th,
table.tb-std td {
  padding: .6rem .85rem !important;
  border: 1px solid var(--rule-soft) !important;
  text-align: center !important;
  white-space: nowrap !important;
}
table.tb-std td.al-left,
table.tb-std th.al-left {
  text-align: left !important;
}
table.tb-std th {
  background: var(--panel) !important;
  font-family: var(--f-m) !important;
  font-size: .8rem !important;
  color: var(--faint) !important;
  font-weight: 600 !important;
  border-bottom: 2px solid var(--rule) !important;
}
table.tb-std tbody tr:nth-child(even) {
  background: rgba(255, 255, 255, .015) !important;
}
table.tb-std tbody tr:hover td {
  background: rgba(var(--accent-rgb), .06) !important;
}

@media (max-width: 600px) {
  .omr { padding: .5rem .35rem !important; }
  .omr .q { grid-template-columns: 1.45rem minmax(0, 1fr) !important; gap: .2rem .35rem !important; }
  .omr .opt { padding: .2rem .25rem !important; gap: .35rem !important; }
  .omr .bub { width: 1.3rem !important; height: 1.3rem !important; font-size: .62rem !important; }
  .omr-codebox pre.shiki { font-size: .75rem !important; padding: .35rem .5rem !important; }
}
"""

css_bundle = "\n/* ══════════════ ANIMATED DERIVATION & FIGURE STYLES ══════════════ */\n" + css_fig + "\n" + css_dv + "\n" + omr_custom_css + "\n"
head_part = head_part.replace("</style>", css_bundle + "</style>")

# MathJax Synchronous loader in <head>
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
      if (window.SM && SM.typeset) SM.typeset(document.body);
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

# ----------------- SECTION 2: Virtual Data Files -----------------
py_files_data = {
    "rc_decay.csv": "time,voltage\n0.0,5.00\n0.5,3.03\n1.0,1.84\n1.5,1.12\n2.0,0.68\n2.5,0.41\n3.0,0.25\n3.5,0.15\n4.0,0.09\n",
    "rc_charge.csv": "time,voltage\n0.0,0.00\n0.5,1.97\n1.0,3.16\n1.5,3.88\n2.0,4.32\n2.5,4.59\n3.0,4.75\n3.5,4.85\n4.0,4.91\n",
    "cooling_data.csv": "time,temperature\n0,80.0\n5,68.2\n10,59.1\n15,52.0\n20,46.5\n25,42.2\n30,38.9\n35,36.3\n40,34.2\n",
    "radioactive_decay.csv": "time_hours,counts_per_sec\n0,1000\n1,794\n2,631\n3,501\n4,398\n5,316\n6,251\n7,200\n8,158\n",
    "experimental_points.csv": "x,y\n1.0,0.6\n2.0,2.4\n3.0,3.5\n4.0,4.8\n5.0,5.7\n"
}
py_files_part = f'<script>window.PY_FILES={json.dumps(py_files_data)};</script>\n'
worker_part = py_lines[764] # PY_WORKER_SRC
bridge_part = ''.join(py_lines[765:873]) # Python bridge

# ----------------- SECTION 3: Derivation Engine -----------------
p_mjt_start = ss_text.find('/* ══════════════ MJT — MathJax for every label')
p_mjt_end = ss_text.find('})();', p_mjt_start) + 5
mjt_code = ss_text[p_mjt_start:p_mjt_end]

p_sm_start = ss_text.find('/* Derivation engine core: helpers and the TeX move library')
p_sm_end = ss_text.find('/* ==========================================================================\n   Figure: animated SVG diagram', p_sm_start)
sm_code = ss_text[p_sm_start:p_sm_end]

# Robust Queue-aware SM.typeset
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

# Robust SM.mathReady
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
    var tries = 0;
    (function poll() {
      if (done) return;
      if (window.__mjReady && window.MathJax && window.MathJax.tex2svg) { done = true; clearTimeout(timer); cb(true); return; }
      if (++tries > 80) return;
      setTimeout(poll, 100);
    })();
  };"""
sm_code = sm_code.replace(old_mathready, new_mathready)

# 2D Figure
p_fig_start = ss_text.find('/* ==========================================================================\n   Figure: animated SVG diagram')
p_fig_end = ss_text.find('/* ==========================================================================\n   MathFlow v4: derivations, animated', p_fig_start)
fig_code = ss_text[p_fig_start:p_fig_end]
fig_code = fig_code.replace("cap.className = 'fg-cap';", "cap.className = 'fg-cap'; cap.style.display = 'none';")

# MathFlow
p_mf_func = ss_text.find('(function () {\n  var SM = window.SM, T = SM.tex;\n  var NS = \'http://www.w3.org/2000/svg\';', p_fig_end)
p_match_end = ss_text.find('return pairs;\n  }', p_mf_func) + len('return pairs;\n  }')
mf_code = ss_text[p_mf_func:p_match_end] + "\n  SM.MathFlow = { measure: measure, match: match };\n})();\n"

old_measure_check = """    try { node = MathJax.tex2svg(tex, { display: true }); } catch (e) { node = null; }
    if (!node) return (mcache[key] = { error: true, tex: tex });"""
new_measure_check = """    if (!window.MathJax || !window.MathJax.tex2svg) return { error: true, tex: tex, notReady: true };
    try { node = MathJax.tex2svg(tex, { display: true }); } catch (e) { node = null; }
    if (!node) return (mcache[key] = { error: true, tex: tex });"""
mf_code = mf_code.replace(old_measure_check, new_measure_check)

# 3D Figure
p_fig3_start = ss_text.find('/* ══════════════════════════════════════════════════════════════════\n   Fig3: a 3-D derivation figure')
p_derivs_marker = ss_text.find('window.DERIVS=', p_fig3_start)
fig3_code = ss_text[p_fig3_start:p_derivs_marker]
fig3_code = fig3_code.replace("cap.className = 'fg-cap';", "cap.className = 'fg-cap'; cap.style.display = 'none';")

# Animated DERIVS dictionary
derivs_code = "window.DERIVS=" + json.dumps(DERIVS, ensure_ascii=False) + ";\n"

# SSPDeriv Player
p_ssp_start = ss_text.find('Stacked derivation player (SSP)')
p_ssp_start = ss_text.rfind('/*', 0, p_ssp_start)
p_ssp_end = ss_text.find('window.SSPDeriv = { mount: mount };\n})();', p_ssp_start) + len('window.SSPDeriv = { mount: mount };\n})();')
ssp_code = ss_text[p_ssp_start:p_ssp_end]
ssp_code = ssp_code.replace("var DONE_KEY = 'ss12_derivs_done_v2';", "var DONE_KEY = 'cp1234_derivs_done_v1';")

# Clean window.der (No top banners)
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

# Clean row HTML (No row notes)
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

# Robust mount and mountDerivs with Title typesetting
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

old_mount_func_orig = """  function mount(host) {
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
ssp_code = ssp_code.replace(old_mount_func_orig, new_mount_func)

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

# ----------------- SECTION 4: Content Helpers & der() helper -----------------
helpers_part = ''.join(py_lines[873:933])
helpers_part = helpers_part.replace("const reftable=(rows,o)=>{", "const der=id=>window.der(id);\nconst reftable=(rows,o)=>{")

# ----------------- SECTION 5: Assemble Full Curriculum -----------------
all_stations = []
all_stations.extend(get_mod1_stations())
all_stations.extend(get_mod2_stations())
all_stations.extend(get_mod3_stations())
all_stations.extend(get_mod4_stations())

modules_def = [
    {"id": "mod-1", "name": "Module I", "sub": "The Computational Thinking (Units 1–2)", "stations": ["u1", "u2"]},
    {"id": "mod-2", "name": "Module II", "sub": "The Programming Language : Python (Units 3–6)", "stations": ["u3", "u4", "u5", "u6"]},
    {"id": "mod-3", "name": "Module III", "sub": "Computational Techniques for Experimental Physics (Units 7–10)", "stations": ["u7", "u8", "u9", "u10"]},
    {"id": "mod-4", "name": "Module IV", "sub": "Computational Techniques for Theoretical Physics (Units 11–13)", "stations": ["u11", "u12", "u13"]}
]

FUNCS = {'gist', 'tp', 'must', 'why', 'trap', 'paper', 'secband', 'qa', 'reftable', 'der', 'ex', 'std_table'}

def hsh_py(s):
    h = 5381
    for c in s:
        h = ((h << 5) + h + ord(c)) & 0xffffffff
        if h >= 0x80000000:
            h -= 0x100000000
    val = abs(h)
    chars = '0123456789abcdefghijklmnopqrstuvwxyz'
    if val == 0: return '0'
    res = []
    while val > 0:
        res.append(chars[val % 36])
        val //= 36
    return ''.join(reversed(res))

EX_REGISTRY = {}

def py_gist(t): return f'<div class="gist"><span class="k">in one line</span>{t}</div>'
def py_tp(t): return f'<div class="topic"><h3>{t}</h3></div>'
def py_must(h): return f'<div class="note"><div class="nh">textbook core principle</div>{h}</div>'
def py_why(h): return f'<div class="note why"><div class="nh">physics significance</div>{h}</div>'
def py_trap(h): return f'<div class="note"><div class="nh">textbook note</div>{h}</div>'
def py_paper(name, time, marks): return ''
def py_secband(l, r): return ''
def py_qa(m, q, a): return ''
def py_std_table(headers, rows):
    th_html = ''.join(f'<th>{h}</th>' for h in headers)
    tr_html = ''
    for r in rows:
        td_html = ''.join(f'<td class="al-left">{c}</td>' if any(str(c).startswith(p) for p in ['Exponential', 'Power', 'Hyperbolic', 'Saturated', 'Negation', 'Conjunction', 'Disjunction', 'Implication', 'Biconditional', '1 (Highest)']) else f'<td>{c}</td>' for c in r)
        tr_html += f'<tr>{td_html}</tr>'
    return f'<div class="tb-wrap"><table class="tb-std"><thead><tr>{th_html}</tr></thead><tbody>{tr_html}</tbody></table></div>'
def py_der(id):
    d = DERIVS.get(id)
    if not d: return f'<div class="note pitfall"><div class="nh">missing derivation</div><p>{id}</p></div>'
    fig = bool(d.get('figure') and d['figure'].get('parts'))
    has_fig = ' has-fig' if fig else ''
    marks_html = f'<span class="dv-pill">{d["marks"]}</span>' if d.get('marks') else ''
    fig_html = f'<div class="sx-fig"><div class="sx-figbox fg-host"></div>' + ('<span class="sx-hint">drag to turn</span>' if d.get('figure', {}).get('kind') == '3d' else '') + '</div>' if fig else ''
    return f'<div class="dv{has_fig}" data-dv="{id}">' + \
      f'<div class="dv-h"><span class="li">derivation</span><b class="dv-t">{d["title"]}</b>{marks_html}</div>' + \
      f'<div class="sx">{fig_html}<ol class="sx-rows"></ol>' + \
        '<div class="sx-ask" hidden><span class="sx-ask-tag">your move</span><p class="sx-ask-q"></p><div class="sx-ask-opts"></div>' + \
          '<p class="sx-ask-why" hidden></p><button type="button" class="btn primary sx-ask-go" hidden>Continue ▸</button></div>' + \
        '<div class="sx-ctrl">' + \
          '<button type="button" class="sx-b" data-sx="prev" aria-label="Take back the last step" title="Back one step">◀</button>' + \
          '<button type="button" class="sx-b sx-next" data-sx="next"><span class="sx-nl">Start ▸</span><span class="sx-count"></span></button>' + \
          '<button type="button" class="sx-b" data-sx="play" title="Play by itself (for watching or screen recording)" aria-label="Play by itself">▶▶</button>' + \
          '<button type="button" class="sx-b" data-sx="all" title="Show every step at once">All</button>' + \
          '<button type="button" class="sx-b" data-sx="reset" title="Start again" aria-label="Start again">↺</button>' + \
        '</div>' + \
      '</div></div>'
def py_reftable(rows, o=None):
    o = o or {}
    h1 = o.get('h1', 'Command'); h2 = o.get('h2', 'Effect')
    header = f'<span>{h1}</span><span>{h2}</span>' if len(rows[0]) == 2 else ''.join(f'<span>{c}</span>' for c in rows[0])
    start = 1 if ('h1' in o or len(rows[0]) > 2) else 0
    body = ''
    for r in rows[start:]:
        if len(r) == 2:
            body += f'<div class="reflist-row"><code>{r[0]}</code><span>{r[1]}</span></div>'
        else:
            cells = ''.join(f'<span>{c}</span>' if not str(c).startswith('<') else str(c) for c in r)
            body += f'<div class="reflist-row">{cells}</div>'
    return f'<div class="reflist"><div class="reflist-head">{header}</div><div class="reflist-body">{body}</div></div>'
def py_ex(snip, o=None):
    o = o or {}
    title = o.get('title', '')
    xid = 'x' + hsh_py(snip + title)
    EX_REGISTRY[xid] = {
        'snippet': snip.strip(),
        'full': o.get('full', snip.strip() + '\n'),
        'title': title,
        'note': o.get('note'),
        'lang': o.get('lang', 'python'),
        'run': o.get('run'),
        'file': o.get('file')
    }
    if o.get('bib'):
        EX_REGISTRY[xid]['bib'] = o['bib']
    return f'<div class="ex" data-ex="{xid}"></div>'

py_scope = {
    'gist': py_gist, 'tp': py_tp, 'must': py_must, 'why': py_why, 'trap': py_trap,
    'paper': py_paper, 'secband': py_secband, 'qa': py_qa, 'der': py_der,
    'reftable': py_reftable, 'ex': py_ex, 'std_table': py_std_table, 'title': 'title', 'h1': 'h1', 'h2': 'h2'
}

def split_body_chunks(body):
    chunks = []
    lines = body.split('\n')
    i = 0
    while i < len(lines):
        line = lines[i]
        s = line.strip()
        if not s:
            i += 1
            continue
        matched_fn = None
        for fn in FUNCS:
            if s.startswith(fn + '('):
                matched_fn = fn
                break
        if matched_fn:
            expr_lines = [line]
            open_parens = line.count('(') - line.count(')')
            while open_parens > 0 and i + 1 < len(lines):
                i += 1
                expr_lines.append(lines[i])
                open_parens += lines[i].count('(') - lines[i].count(')')
            chunks.append(('expr', '\n'.join(expr_lines)))
            i += 1
        else:
            html_lines = [line]
            while i + 1 < len(lines):
                nxt = lines[i+1].strip()
                if any(nxt.startswith(fn + '(') for fn in FUNCS):
                    break
                i += 1
                html_lines.append(lines[i])
            chunks.append(('html', '\n'.join(html_lines)))
            i += 1
    return chunks

curriculum_js = "\n/* ═══════════════════ COMPUTATIONAL PHYSICS CURRICULUM ═══════════════════ */\nconst STATIONS=[];\n"
for st in all_stations:
    chunks = split_body_chunks(st['body'])
    html_parts = []
    for typ, c in chunks:
        if typ == 'html':
            html_parts.append(c)
        else:
            out = eval(c, py_scope)
            html_parts.append(out)
    final_body_html = '\n'.join(html_parts)
    curriculum_js += f"STATIONS.push({{id:{json.dumps(st['id'])},title:{json.dumps(st['title'])},short:{json.dumps(st['short'])},est:{json.dumps(st['est'])},body:{json.dumps(final_body_html)}}});\n\n"

curriculum_js += f"window.LXREG = window.LXREG || {{}};\nwindow.LXREG.ex = Object.assign(window.LXREG.ex || {{}}, {json.dumps(EX_REGISTRY)});\n\n"
curriculum_js += f"const MODULES={json.dumps(modules_def, indent=2)};\nwindow.MODULES=MODULES;window.STATIONS=STATIONS;\n\n"

# Quizzes
quizzes_dict = get_quizzes()
curriculum_js += f"""(function () {{
  const Q = {json.dumps(quizzes_dict, ensure_ascii=False, indent=2)};
  window.PY_QUIZ = Q;
  (window.STATIONS || []).forEach(function (st) {{
    const qs = Q[st.id];
    if (!qs || !qs.length) return;
    st.body += omr('Practice · ' + st.short, qs);
  }});
}})();
</script>
"""

# ----------------- SECTION 6: Study Runtime Engine & All Fixes -----------------
runtime_part = ''.join(py_lines[2227:])

# Update Storage keys
runtime_part = runtime_part.replace("const APP='ssc_python_units';", "const APP='ssc_computational_physics';")
runtime_part = runtime_part.replace("const LS='py_progress_v1',LSID='py_syncid_v1';", "const LS='cp1234_progress_v1',LSID='cp1234_syncid_v1';")
runtime_part = runtime_part.replace("const LSIDE='py_ide_v1';", "const LSIDE='cp1234_ide_v1';")
runtime_part = runtime_part.replace("KEY='py_theme'", "KEY='cp1234_theme'")
runtime_part = runtime_part.replace("localStorage.setItem('py_view',v)", "localStorage.setItem('cp1234_view',v)")
runtime_part = runtime_part.replace("localStorage.getItem('py_view')", "localStorage.getItem('cp1234_view')")
runtime_part = runtime_part.replace("'PYTHON_1234_OFFLINE.html'", "'COMPUTATIONAL_PHYSICS_1234_OFFLINE.html'")

# USER REQUIREMENT 1: Enable Syntax Highlighting in OMR & Format code in OMR
omr_highlighter_func = """
function formatOMRText(str) {
  if (!str) return '';
  str = String(str);
  str = str.replace(/```(?:python|py)?\\n?([\\s\\S]*?)```/g, function (m, code) {
    var highlighted = (typeof hl === 'function') ? hl(code.trim(), 'python') : '<pre class="shiki"><code>' + esc(code.trim()) + '</code></pre>';
    return '<div class="omr-codebox">' + highlighted + '</div>';
  });
  str = str.replace(/`([^`\\n]+)`/g, function (m, code) {
    return '<code>' + esc(code) + '</code>';
  });
  return str;
}
"""

old_omr_code = """function omr(box,d,key){
  const letters='ABCD',N=d.qs.length,long=N>12;
  const body=`<div class="omr"><div class="rollrow">Answer sheet <i></i><i></i><i></i><i></i> fill one bubble per question</div>`+
    d.qs.map((q,i)=>`<div class="q" data-q="${i}"><span class="qn">${String(i+1).padStart(2,'0')}</span><span class="qt">${q.q}</span>
      <div class="opts">${q.o.map((o,j)=>`<div class="opt" data-j="${j}"><span class="bub">${letters[j]}</span><span>${content(o)}</span></div>`).join('')}</div>
      ${q.why?`<div class="why">${q.why}</div>`:''}</div>`).join('')+'</div>';"""

new_omr_code = omr_highlighter_func + """function omr(box,d,key){
  const letters='ABCD',N=d.qs.length,long=N>12;
  const body=`<div class="omr"><div class="rollrow">Answer sheet <i></i><i></i><i></i><i></i> fill one bubble per question</div>`+
    d.qs.map((q,i)=>`<div class="q" data-q="${i}"><span class="qn">${String(i+1).padStart(2,'0')}</span><div class="qt">${formatOMRText(q.q)}</div>
      <div class="opts">${q.o.map((o,j)=>`<div class="opt" data-j="${j}"><span class="bub">${letters[j]}</span><div class="opt-txt">${formatOMRText(content(o))}</div></div>`).join('')}</div>
      ${q.why?`<div class="why">${formatOMRText(q.why)}</div>`:''}</div>`).join('')+'</div>';"""

runtime_part = runtime_part.replace(old_omr_code, new_omr_code)

# USER REQUIREMENT 2: Fix LaTeX not loading in OMR on submit
runtime_part = runtime_part.replace(
    "sheet.classList.add('marked');",
    "sheet.classList.add('marked'); if(window.SM && SM.typeset) SM.typeset(box);"
)

# USER REQUIREMENT 3: Fix LaTeX loading in all practice widgets (hydrateW)
old_hydrateW = """function hydrateW(box){
  if(box.dataset.h)return;box.dataset.h='1';
  const d=REG.w[box.dataset.w];if(!d||!WIDGETS[d.type])return;
  WIDGETS[d.type](box,d,box.dataset.w);
}"""

new_hydrateW = """function hydrateW(box){
  if(box.dataset.h)return;box.dataset.h='1';
  const d=REG.w[box.dataset.w];if(!d||!WIDGETS[d.type])return;
  WIDGETS[d.type](box,d,box.dataset.w);
  if(window.SM && SM.typeset) SM.typeset(box);
}"""
runtime_part = runtime_part.replace(old_hydrateW, new_hydrateW)

# USER REQUIREMENT 4: Fix content(x) to render LaTeX properly
old_content_func = """const content=x=>{if(x&&typeof x==='object'){if(x.code)return hlInline(x.code,x.lang);if(x.tex)return `<span class="texr">${LXTeX.renderInline(x.tex)}</span>`;}
  return String(x);};"""

new_content_func = """const content=x=>{
  if(x&&typeof x==='object'){
    if(x.code)return hlInline(x.code,x.lang);
    if(x.tex)return '\\\\(' + x.tex + '\\\\)';
  }
  return String(x);
};"""
runtime_part = runtime_part.replace(old_content_func, new_content_func)

# Hook mountDerivs & SM.typeset into hydrateIn
old_hydrateIn = """function hydrateIn(card){
  $$('[data-ex]',card).forEach(b=>{const t=b.closest('.tunit');if(t&&t!==card&&!t.classList.contains('open'))return;
    if(b.closest('details.qa:not([open])'))return;hydrateEx(b);});
  $$('[data-w]',card).forEach(b=>{const t=b.closest('.tunit');if(t&&!t.classList.contains('open'))return;hydrateW(b);});
}"""

new_hydrateIn = """function hydrateIn(card){
  $$('[data-ex]',card).forEach(b=>{const t=b.closest('.tunit');if(t&&t!==card&&!t.classList.contains('open'))return;
    if(b.closest('details.qa:not([open])'))return;hydrateEx(b);});
  $$('[data-w]',card).forEach(b=>{const t=b.closest('.tunit');if(t&&!t.classList.contains('open'))return;hydrateW(b);});
  if(window.mountDerivs) window.mountDerivs(card);
  if(window.SM && SM.typeset) SM.typeset(card);
}"""
runtime_part = runtime_part.replace(old_hydrateIn, new_hydrateIn)

# Typeset on initial folds and view switches
runtime_part = runtime_part.replace(
    "restoreFolds();paintAll();bmDirty=true;",
    "restoreFolds();paintAll();bmDirty=true;\n  if(window.mountDerivs) window.mountDerivs();\n  if(window.SM && SM.typeset) SM.typeset(document.body);"
)

runtime_part = runtime_part.replace(
    "showView(v);\n  window.LXAPP",
    "showView(v);\n  if(window.mountDerivs) window.mountDerivs();\n  if(window.SM && SM.typeset) SM.typeset(document.body);\n  window.LXAPP"
)

# Only show bib tab if example actually defines bib
runtime_part = runtime_part.replace("const hasBib=d.bib!==undefined;", "const hasBib=Boolean(d.bib);")

# ----------------- SECTION 7: Assemble & Output -----------------
full_html = head_part + py_files_part + worker_part + bridge_part + deriv_tool_script + helpers_part + curriculum_js + runtime_part

output_path = 'COMPUTATIONAL_PHYSICS_1234.html'
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(full_html)

print(f"Successfully generated {output_path} ({len(full_html)} bytes)!")
