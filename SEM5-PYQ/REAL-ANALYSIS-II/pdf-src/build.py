#!/usr/bin/env python3
"""Build the Real Analysis II study PDFs.

    python3 build.py                 # every module found in src/
    python3 build.py 2               # all three PDFs of module 2
    python3 build.py 2 prepare       # one part: prepare, paper or answers

src/m<N>/<part>*.html  ->  {{fig:NAME}} replaced by SVG (figs_m<N>.py, then figs.py)
                       ->  TeX pre-rendered by render.js (KaTeX)
                       ->  printed by headless Chrome to ../real-analysis-2-module-<N>-<file>.pdf
"""
import re, subprocess, sys, glob, os, shutil
from pathlib import Path

HERE = Path(__file__).resolve().parent
OUT = HERE.parent
NODE = (sorted(glob.glob(os.path.expanduser('~/.nvm/versions/node/*/bin/node'))) or [shutil.which('node')])[-1]
CHROME = shutil.which('google-chrome') or shutil.which('google-chrome-stable') or 'google-chrome'
TARGETS = {'prepare': 'prepare', 'paper': 'pyq+model', 'answers': 'answerkey'}

sys.path.insert(0, str(HERE))
import importlib  # noqa: E402
import figs  # noqa: E402
TEST = {'9': 'm1'}
ALLFIGS = [importlib.import_module(p.stem) for p in sorted(HERE.glob('figs_m[1-4].py'))]


def topic_titles(mod):
    """code -> title, read from the prepare files: <span class="tid ...">T3</span><h2>Title</h2>"""
    text = '\n'.join(f.read_text() for f in sorted((HERE / 'src' / f'm{mod}').glob('prepare*.html')))
    return dict(re.findall(r'<span class="tid[^"]*">([A-Z]\d+)</span><h2>(.*?)</h2>', text))


def titled_needs(body, mod):
    """In each "Know first" box, show every topic code with its title, one per line."""
    titles = topic_titles(mod)

    def chip(m):
        code = m.group(2)
        if code not in titles:
            print(f'  warning: module {mod} "Know first" code {code} has no topic in prepare')
            return m.group(0)
        return f'<span class="dep">{m.group(0)} {titles[code]}</span>'

    def need(m):
        return re.sub(r'<span class="chip( [a-z]+)?">([A-Z]\d+)</span>', chip, m.group(0))
    return re.sub(r'<div class="need">.*?</div>', need, body, flags=re.S)


def render(body, css, katex_css, stem, pdf):
    html = (f'<!doctype html><html><head><meta charset="utf-8"><style>{katex_css}</style>'
            f'<style>{css}</style></head><body>{body}</body></html>')
    tmp = HERE / 'build'
    tmp.mkdir(exist_ok=True)
    raw, done = tmp / f'{stem}.raw.html', tmp / f'{stem}.html'
    raw.write_text(html)
    print(f'  [render] KaTeX pre-render -> {done.name}', flush=True)
    subprocess.run([NODE, str(HERE / 'render.js'), str(raw), str(done)], check=True)
    print(f'  [render] Chrome print -> {pdf.name}', flush=True)
    res = subprocess.run([CHROME, '--headless=new', '--disable-gpu', '--no-pdf-header-footer',
                          '--allow-file-access-from-files', '--virtual-time-budget=4000',
                          f'--print-to-pdf={pdf}', f'file://{done}'],
                         capture_output=True, text=True)
    if res.returncode:
        print(f'  [render] Chrome failed (exit {res.returncode}):\n{res.stderr}', flush=True)
        raise SystemExit(res.returncode)


def plain(html):
    """Heading HTML -> outline text (tags dropped, entities and simple TeX made readable)."""
    t = re.sub(r'<[^>]+>', '', html)
    t = t.replace('&amp;', '&').replace('&lt;', '<').replace('&gt;', '>').replace('&nbsp;', ' ')
    t = re.sub(r'\\(?:varepsilon|epsilon)', 'ε', t)
    t = re.sub(r'\\delta', 'δ', t)
    t = re.sub(r'\\[a-zA-Z]+', '', t).replace('$', '').replace('{', '').replace('}', '')
    return ' '.join(t.split())


def add_index(body):
    """Linked index for the prepare file.

    Every unit start (<div class="kicker"> + <h1>), every topic head (<span class="tid">T3</span><h2>)
    and every other <h2> gets an id; {{toc}} is replaced by an index whose rows are links.
    Topic heads also get a small "Index" back-link, and topic chips in the text link to their topic."""
    toc, n = [], [0]

    def nid():
        n[0] += 1
        return f'sec{n[0]}'

    pat = re.compile(r'<div class="topic-head">(\s*)<span class="tid( [\w-]+)?">([A-Z]\d+)</span>\s*<h2>(.*?)</h2>\s*</div>'
                     r'|<(h1|h2)>(.*?)</\5>', re.S)
    out, pos = [], 0
    for m in pat.finditer(body):
        out.append(body[pos:m.start()])
        if m.group(3):
            code, title, klass = m.group(3), m.group(4), m.group(2) or ''
            toc.append({'level': 2, 'code': code, 'title': title, 'id': code, 'klass': klass})
            out.append(f'<div class="topic-head" id="{code}">{m.group(1)}<span class="tid{klass}">{code}</span>'
                       f'<h2>{title}</h2><a class="up" href="#toc">index ↑</a></div>')
        else:
            tag, title = m.group(5), m.group(6)
            sec = body.rfind('<section', 0, m.start())
            if body.startswith('<section class="cover', sec):
                out.append(m.group(0))      # cover title: not an index row
            else:
                i = nid()
                toc.append({'level': 1 if tag == 'h1' else 2, 'code': '', 'title': title, 'id': i})
                out.append(f'<{tag} id="{i}">{title}</{tag}>')
        pos = m.end()
    out.append(body[pos:])
    body = ''.join(out)
    # chips in the text -> links to their topic (only codes that exist)
    codes = {e['code'] for e in toc if e['code']}
    body = re.sub(r'<span class="chip( pre| math)?">([A-Z]\d+)</span>',
                  lambda m: (f'<a class="chip{m.group(1) or ""}" href="#{m.group(2)}">{m.group(2)}</a>'
                             if m.group(2) in codes else m.group(0)), body)
    rows = []
    for k, e in enumerate(toc):
        chip = f'<span class="tid{e.get("klass", "")}">{e["code"]}</span> ' if e['code'] else ''
        rows.append(f'<a class="l{e["level"]}" href="#{e["id"]}"><span class="tt">{chip}{e["title"]}</span>'
                    f'<span class="pg" data-k="{k}">000</span></a>')
    index = ('<section class="index" id="toc"><h2 class="ix">Index</h2>'
             '<p class="small">Tap a line to jump there. Every topic heading has an <b>index ↑</b> link back here, '
             'and every topic chip such as <span class="chip">T5</span> in the text is a link too.</p>'
             f'<nav class="toc">{"".join(rows)}</nav></section>')
    if '{{toc}}' in body:
        body = body.replace('{{toc}}', index)
    else:
        toc = []
    return body, toc


def toc_pages(pdf, toc):
    """Page number (1-based) of each index row: the anchor id's named destination in the printed PDF."""
    import fitz
    doc = fitz.open(str(pdf))
    dest = doc.resolve_names()
    doc.close()
    pages = []
    for e in toc:
        d = dest.get(e['id'])
        if d is None:
            print(f"  warning: no destination for index row {e['id']}")
            pages.append('?')
        else:
            pages.append(d['page'] + 1)
    return pages


def add_outline(pdf, toc):
    """PDF bookmarks (the reader's sidebar) mirroring the index."""
    import fitz
    doc = fitz.open(str(pdf))
    items, last = [], 0
    for e in toc:
        lvl = e['level'] if items else 1
        lvl = min(lvl, last + 1)
        t = (e['code'] + ' ' if e['code'] else '') + plain(e['title'])
        items.append([lvl, t, e['page'] if isinstance(e['page'], int) else 1])
        last = lvl
    doc.set_toc(items)
    doc.saveIncr() if doc.can_save_incrementally() else None
    doc.close()


def build(mod, name):
    try:
        modfigs = importlib.import_module(f'figs_{TEST.get(mod, "m" + mod)}')
    except ModuleNotFoundError:
        modfigs = None
    print(f'== module {mod} / {name} ==', flush=True)
    parts = sorted((HERE / 'src' / f'm{mod}').glob(f'{name}*.html'))
    print('  source files: ' + (', '.join(p.name for p in parts) or 'NONE'), flush=True)
    src = '\n'.join(f.read_text() for f in parts)
    src = re.sub(r'\{\{include:([\w.]+)\}\}', lambda m: (HERE / 'src' / m.group(1)).read_text(), src)
    css = (HERE / 'style.css').read_text()
    katex_css = (HERE / 'katex' / 'katex.min.css').read_text().replace(
        'url(fonts/', f'url(file://{HERE}/katex/fonts/')

    def fig(m):
        for src in [modfigs] + ALLFIGS + [figs]:
            fn = getattr(src, m.group(1), None) if src else None
            if fn:
                print(f'  figure {m.group(1)} -> {src.__name__}', flush=True)
                return fn()
        print(f'  ERROR: figure {m.group(1)} is not defined in figs_m{mod}.py, figs_m*.py or figs.py', flush=True)
        raise SystemExit(1)
    body = re.sub(r'\{\{fig:(\w+)\}\}', fig, src)
    toc = []
    if name == 'prepare':
        # Continuous flow: no forced page breaks after the cover/index, so no half-empty pages.
        body = body.replace('<section class="page">', '<section class="flow">')
        body, toc = add_index(body)
        print(f'  index: {len(toc)} rows', flush=True)
    if name == 'paper':
        # Each Section A/B/C starts on a fresh page.
        body = body.replace('<div class="section-head">', '<div class="section-head newpage">')
    if name == 'answers':
        body = titled_needs(body, mod)
        # Answer keys flow continuously (no forced page per group, so no stranded tails);
        # each Section A/B/C still starts a new page.
        body = re.sub(r'<section class="page">(\s*<div class="section-head">)', r'<section class="newpage">\1', body)
        body = body.replace('<section class="page">', '<section>')
        # keep number + question + Know first together
        body = re.sub(r'(<div class="ans-head">.*?</div>\s*<p class="q">.*?</p>\s*<div class="need">.*?</div>)',
                      r'<div class="keep">\1</div>', body, flags=re.S)
    pdf = OUT / f'real-analysis-2-module-{mod}-{TARGETS[name]}.pdf'
    render(body, css, katex_css, f'm{mod}-{name}', pdf)
    if toc:
        # second pass: read where each index link lands, write the page numbers in, print again
        print('  index pass 2: writing page numbers', flush=True)
        for e, pg in zip(toc, toc_pages(pdf, toc)):
            e['page'] = pg
        body = re.sub(r'<span class="pg" data-k="(\d+)">000</span>',
                      lambda m: f'<span class="pg">{toc[int(m.group(1))]["page"]}</span>', body)
        render(body, css, katex_css, f'm{mod}-{name}', pdf)
        add_outline(pdf, toc)
    pages = subprocess.run(['pdfinfo', str(pdf)], capture_output=True, text=True).stdout
    n = re.search(r'Pages:\s+(\d+)', pages).group(1)
    print(f'{pdf.name}: {n} pages')


if __name__ == '__main__':
    mods = [sys.argv[1]] if len(sys.argv) > 1 else sorted(p.name[1:] for p in (HERE / 'src').glob('m*'))
    for mod in mods:
        for name in (sys.argv[2:] or TARGETS):
            build(mod, name)
