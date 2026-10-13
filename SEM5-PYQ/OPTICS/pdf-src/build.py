#!/usr/bin/env python3
"""Build the Optics study PDFs.

    python3 build.py                 # every module found in src/
    python3 build.py 2               # all three PDFs of module 2
    python3 build.py 2 prepare       # one part: prepare, paper or answers

src/m<N>/<part>*.html  ->  {{fig:NAME}} replaced by SVG (figs_m<N>.py, then figs.py)
                       ->  TeX pre-rendered by render.js (KaTeX)
                       ->  printed by headless Chrome to ../optics-module-<N>-<file>.pdf
"""
import re, subprocess, sys, glob, os
from pathlib import Path

HERE = Path(__file__).resolve().parent
OUT = HERE.parent
NODE = sorted(glob.glob(os.path.expanduser('~/.nvm/versions/node/*/bin/node')))[-1]
CHROME = 'google-chrome'
TARGETS = {'prepare': 'prepare', 'paper': 'pyq+model', 'answers': 'answerkey'}

sys.path.insert(0, str(HERE))
import importlib  # noqa: E402
import figs  # noqa: E402
TEST = {'9': 'm2'}
ALLFIGS = [importlib.import_module(f'figs_m{k}') for k in (2, 3, 4)]


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


def build(mod, name):
    try:
        modfigs = importlib.import_module(f'figs_{TEST.get(mod, "m" + mod)}')
    except ModuleNotFoundError:
        modfigs = None
    parts = sorted((HERE / 'src' / f'm{mod}').glob(f'{name}*.html'))
    src = '\n'.join(f.read_text() for f in parts)
    css = (HERE / 'style.css').read_text()
    katex_css = (HERE / 'katex' / 'katex.min.css').read_text().replace(
        'url(fonts/', f'url(file://{HERE}/katex/fonts/')

    def fig(m):
        for src in [modfigs] + ALLFIGS + [figs]:
            fn = getattr(src, m.group(1), None) if src else None
            if fn:
                break
        return fn()
    body = re.sub(r'\{\{fig:(\w+)\}\}', fig, src)
    if name == 'answers':
        body = titled_needs(body, mod)
        # Answer keys flow continuously (no forced page per group, so no stranded tails);
        # each Section A/B/C still starts a new page.
        body = re.sub(r'<section class="page">(\s*<div class="section-head">)', r'<section class="newpage">\1', body)
        body = body.replace('<section class="page">', '<section>')
        # keep number + question + Know first together
        body = re.sub(r'(<div class="ans-head">.*?</div>\s*<p class="q">.*?</p>\s*<div class="need">.*?</div>)',
                      r'<div class="keep">\1</div>', body, flags=re.S)
    html = (f'<!doctype html><html><head><meta charset="utf-8"><style>{katex_css}</style>'
            f'<style>{css}</style></head><body>{body}</body></html>')
    tmp = HERE / 'build'
    tmp.mkdir(exist_ok=True)
    raw, done = tmp / f'm{mod}-{name}.raw.html', tmp / f'm{mod}-{name}.html'
    raw.write_text(html)
    subprocess.run([NODE, str(HERE / 'render.js'), str(raw), str(done)], check=True)
    pdf = OUT / f'optics-module-{mod}-{TARGETS[name]}.pdf'
    subprocess.run([CHROME, '--headless=new', '--disable-gpu', '--no-pdf-header-footer',
                    '--allow-file-access-from-files', '--virtual-time-budget=4000',
                    f'--print-to-pdf={pdf}', f'file://{done}'],
                   check=True, capture_output=True)
    pages = subprocess.run(['pdfinfo', str(pdf)], capture_output=True, text=True).stdout
    n = re.search(r'Pages:\s+(\d+)', pages).group(1)
    print(f'{pdf.name}: {n} pages')


if __name__ == '__main__':
    mods = [sys.argv[1]] if len(sys.argv) > 1 else sorted(p.name[1:] for p in (HERE / 'src').glob('m*'))
    for mod in mods:
        for name in (sys.argv[2:] or TARGETS):
            build(mod, name)
