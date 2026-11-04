#!/usr/bin/env python3
"""Build revision cards: SSC-V6/revision/optics/<module>/index.html
Two cards per unit: (1) point-wise theory, written in content_mN.py; (2) the unit's key derivation,
taken step by step from the live Optics data (optics-module-1/study-match/data/data.json).
Usage: python3 build.py 1 [2 3 4]
"""
import json, os, sys, html, importlib, copy
HERE = os.path.dirname(os.path.abspath(__file__))
V6 = os.path.join(HERE, '..', '..')
DATA = os.path.join(V6, 'optics-module-1', 'study-match', 'data')
live = json.load(open(os.path.join(DATA, 'data.json')))
sheets = {sh['id']: sh for s in live['sections'] for sh in s['sheets']}
sys.path.insert(0, HERE)

def deriv(sheet, title, preview=None):
    if preview:
        d = json.load(open(os.path.join(DATA, preview + '-preview.json')))
        cards = [c for s in d['sections'] for sh in s['sheets'] for c in sh['cards']]
    else:
        cards = sheets[sheet]['cards']
    from fig_extra import EXTRA
    for c in cards:
        if c['type'] == 'derivation' and c['title'].startswith(title):
            ex = next((v for k, v in EXTRA.items() if c['title'].startswith(k)), None)
            if ex and not c.get('setup', {}).get('figure'):
                c = copy.deepcopy(c); c['setup']['figure'] = ex['figure']
                for st, f in zip(c['steps'], ex['steps']): st['figure'] = f
            return c
    raise SystemExit('no derivation %r in %s' % (title, sheet))

def esc_note(s):
    return s  # notes already hold safe HTML-free text with \( \) math

FIGS = []

def render_deriv(c):
    out = ['<div class="legend">%s</div>' % c.get('legend', '')]
    fig = c.get('setup', {}).get('figure')
    if fig:
        b = fig['box']; FIGS.append({'figure': fig, 'steps': [{'figure': st.get('figure')} if st.get('figure') else {} for st in c['steps']]})
        out.append('<div class="figwrap"><div class="fgbox" data-fig="%d" style="aspect-ratio:%s/%s"></div>'
                   '<div class="figctl"><button class="play">▶ Play</button><button class="prev">◀</button><button class="next">▶|</button>'
                   '<span class="fighint">tap any step to show it on the figure</span></div></div>' % (len(FIGS) - 1, b[2] - b[0], b[3] - b[1] + 30))
    phase = None
    for i, st in enumerate(c['steps']):
        ph = st.get('phase')
        if ph and ph != phase:
            phase = ph
            why = next((p.get('why', '') for p in c.get('phases', []) if p['name'] == ph), '')
            out.append('<div class="phase"><b>%s</b>%s</div>' % (html.escape(ph), (' — ' + html.escape(why)) if why else ''))
        mv = st.get('move') or {}
        tag = mv.get('label') or (mv.get('type', '') + ((' by \\(' + mv['by'] + '\\)') if mv.get('by') else ''))
        last = i == len(c['steps']) - 1
        out.append('<div class="st%s" data-i="%d"><div class="tex">\\[%s\\]</div>%s<div class="nt">%s</div></div>' % (
            ' final' if last else '', i, st['tex'], ('<div class="mv">%s</div>' % tag) if tag.strip() else '', st.get('note', '')))
    return '\n'.join(out)

CSS = r"""
*{box-sizing:border-box}body{margin:0;font:15px/1.45 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;background:#0f1220;color:#e8eaf3}
header{position:sticky;top:0;z-index:5;background:#151a2e;border-bottom:1px solid #2a3150;padding:10px 14px}
header h1{font-size:17px;margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}header .sub{font-size:12px;color:#9aa3c7;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
nav{display:flex;gap:6px;overflow-x:auto;padding:8px 14px;background:#121628;border-bottom:1px solid #222944;position:sticky;top:52px;z-index:4}
nav a{flex:none;color:#c9cff0;text-decoration:none;font-size:12px;padding:4px 9px;border:1px solid #2f3760;border-radius:14px}
main{max-width:760px;margin:0 auto;padding:12px}
.unit{margin:18px 0 26px}.unit>h2{font-size:15px;color:#ffd37a;margin:0 0 8px;letter-spacing:.2px}
.card{background:#181d33;border:1px solid #2b3358;border-radius:14px;padding:14px 14px 10px;margin:0 0 12px;box-shadow:0 2px 10px #0006}
.card h3{margin:0 0 8px;font-size:14px;text-transform:uppercase;letter-spacing:.8px}
.th h3{color:#7fd3ff}.dv h3{color:#b7a2ff}
.card .t{font-size:16px;font-weight:600;margin-bottom:8px;color:#fff}
ul{margin:0;padding-left:18px}li{margin:0 0 6px}li b{color:#ffe7a8}
.key{margin-top:10px;padding:8px 10px;border-radius:10px;background:#20284a;border-left:3px solid #ffd37a}
.key .k{font-size:11px;color:#ffd37a;text-transform:uppercase;letter-spacing:.8px}
.legend{font-size:13px;color:#b9c0e0;margin-bottom:8px}
.phase{margin:10px 0 4px;font-size:12.5px;color:#cbbcff}.phase b{color:#e2d8ff}
.st{border-left:2px solid #3b4478;padding:2px 0 4px 10px;margin:0 0 4px}
.st.final{border-left-color:#ffd37a;background:#252b4f;border-radius:0 8px 8px 0}
.tex{overflow-x:auto;overflow-y:hidden}.tex mjx-container{margin:4px 0!important}
.mv{font-size:11.5px;color:#9ad6a6}.nt{font-size:12px;color:#99a0c4}
details.dv summary{cursor:pointer;list-style:none}details.dv summary::-webkit-details-marker{display:none}
details.dv summary h3:after{content:" ▸ tap to open";font-size:11px;color:#8088b8;text-transform:none;letter-spacing:0}
details.dv[open] summary h3:after{content:" ▾"}
.figwrap{position:sticky;top:var(--stick,92px);z-index:3;background:#181d33;padding:4px 0 6px;margin:0 -4px 8px}
.fgbox{width:100%;max-height:300px;border-radius:12px}
.figctl{display:flex;gap:6px;align-items:center;margin-top:6px}.figctl button{background:#2b3360;color:#fff;border:0;border-radius:8px;padding:5px 10px;font-size:13px}
.figctl .play{background:#6a55d8}.fighint{font-size:11px;color:#8088b8}
.st{cursor:pointer}.st.on{background:#2c2a55;border-left-color:#f7c04f;border-radius:0 8px 8px 0}
footer{text-align:center;font-size:11px;color:#6d75a0;padding:20px}
"""

def page(mod, units):
    nav = ''.join('<a href="#u%d">U%d</a>' % (u['unit'], u['unit']) for u in units)
    body = []
    for u in units:
        c = deriv(*u['deriv'])
        key = ''.join('<div>\\(%s\\)</div>' % k for k in u.get('key', []))
        body.append('''<section class="unit" id="u%d"><h2>Unit %d · %s</h2>
<div class="card th"><h3>① Theory — points</h3><ul>%s</ul>%s</div>
<details class="card dv" open><summary><h3>② Key derivation</h3></summary><div class="t">%s</div>%s</details></section>''' % (
            u['unit'], u['unit'], html.escape(u['title']), ''.join('<li>%s</li>' % p for p in u['points']),
            ('<div class="key"><div class="k">Must remember</div>%s</div>' % key) if key else '', html.escape(c['title']), render_deriv(c)))
    return '''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Optics revision · Module %d</title><style>%s</style>
<script>window.MathJax={tex:{inlineMath:[['\\\\(','\\\\)']],displayMath:[['\\\\[','\\\\]']]},chtml:{scale:0.95}};</script>
<script async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script><style>%s\n%s</style></head><body>
<header><h1>Optics · Module %d revision cards</h1><div class="sub">%s · two cards per unit: theory points + key derivation</div></header>
<nav>%s%s</nav><main>%s</main><footer>PHY5B08 Optics · revision · built from the study-match deck</footer>
<script>%s</script><script>var FIGS = %s;%s</script></body></html>''' % (
        mod, CSS, TOKENS, FIGCSS, mod, MODTITLE.get(mod, ''), nav, ''.join('<a href="../%d/">M%d</a>' % (m, m) for m in (1, 2, 3, 4) if m != mod), '\n'.join(body),
        FIGJS, json.dumps(FIGS, ensure_ascii=False).replace('</', '<\\/'), DRIVER)

ENG = os.path.join(V6, 'study-match', 'src')
TOKENS = """:root{--paper:#111326;--card:#181d33;--ink:#ECEAFB;--ink-2:#B7B9D8;--muted:#7D82A6;--line:rgba(255,255,255,.09);--lav:#232748;--lav-2:#343A6E;--violet:#A898FF;--on-violet:#15172C;--amber:#F7C04F;--orange:#F59A55;--hl:#F7C04F;--sage:#5BC48E;--coral:#FF7B68}"""
FIGCSS = open(os.path.join(ENG, 'styles', '18-derivation-focus.css')).read()
FIGJS = open(os.path.join(ENG, 'components', '02-figure.js')).read()
DRIVER = r"""
(function(){var h=document.querySelector('header').offsetHeight+document.querySelector('nav').offsetHeight;document.documentElement.style.setProperty('--stick',h+'px');})();
document.querySelectorAll('.fgbox').forEach(function (host) {
  var d = FIGS[+host.dataset.fig], card = host.closest('.card'), rows = [].slice.call(card.querySelectorAll('.st'));
  var api = SM.Figure.mount(host, d.figure, d.steps, { autoIntro: true }), cur = -1, timer = null;
  function show(i, scroll) {
    cur = Math.max(-1, Math.min(rows.length - 1, i));
    rows.forEach(function (r, k) { r.classList.toggle('on', k === cur); });
    if (cur >= 0) { api.step(cur); if (scroll) rows[cur].scrollIntoView({ block: 'center', behavior: 'smooth' }); }
  }
  function stop() { clearInterval(timer); timer = null; btn.textContent = '\u25B6 Play'; }
  var btn = card.querySelector('.play');
  btn.onclick = function () {
    if (timer) return stop();
    btn.textContent = '\u275A\u275A Pause';
    if (cur >= rows.length - 1 || cur < 0) { api.intro(); cur = -1; setTimeout(function () { show(0, true); }, (api.introLeft ? api.introLeft() : 0) + 300); }
    timer = setInterval(function () { if (cur >= rows.length - 1) return stop(); show(cur + 1, true); }, 3200);
  };
  card.querySelector('.next').onclick = function () { stop(); show(cur + 1, true); };
  card.querySelector('.prev').onclick = function () { stop(); show(cur - 1, true); };
  rows.forEach(function (r, k) { r.onclick = function () { stop(); show(k, false); }; });
  window.addEventListener('resize', function () { api.layout(); });
});
"""
MODTITLE = {1: 'Geometrical optics: Fermat, spherical surfaces, thin lenses', 2: 'Interference: division of wavefront and amplitude',
            3: 'Fraunhofer and Fresnel diffraction', 4: 'Polarisation'}
for m in [int(x) for x in sys.argv[1:]]:
    FIGS.clear()
    units = importlib.import_module('content_m%d' % m).UNITS
    od = os.path.join(V6, 'revision', 'optics', str(m)); os.makedirs(od, exist_ok=True)
    open(os.path.join(od, 'index.html'), 'w').write(page(m, units))
    print('built revision/optics/%d/index.html (%d units)' % (m, len(units)))
