#!/usr/bin/env python3
"""Build the Python-for-Data-Analysis model papers.

    python3 build.py        # every module in src/
    python3 build.py 2      # one module

src/m<N>/paper.html -> build/m<N>.raw.html -> render.js (KaTeX) -> headless Chrome -> ../python-data-analysis-module-N-pyq+model.pdf
"""
import glob, os, re, subprocess, sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
OUT = HERE.parent
NODE = sorted(glob.glob(os.path.expanduser('~/.nvm/versions/node/*/bin/node')))[-1]
CHROME = 'google-chrome'

EXTRA_CSS = """
pre { background: #f4f6f8; border-left: 2.5px solid #2b6cb0; padding: 1.5mm 2mm; margin: 1.5mm 0;
      font-size: 8.6pt; line-height: 1.35; white-space: pre-wrap; border-radius: 1mm; }
code { font-family: 'DejaVu Sans Mono', monospace; font-size: 0.92em; }
pre code { font-size: 1em; }
.coverage { margin-top: 3mm; }
"""


def build(mod):
    src = (HERE / 'src' / f'm{mod}' / 'paper.html').read_text()
    css = (HERE / 'style.css').read_text() + EXTRA_CSS
    katex_css = (HERE / 'katex' / 'katex.min.css').read_text().replace(
        'url(fonts/', f'url(file://{HERE}/katex/fonts/')
    html = (f'<!doctype html><html><head><meta charset="utf-8"><style>{katex_css}</style>'
            f'<style>{css}</style></head><body>{src}</body></html>')
    tmp = HERE / 'build'
    tmp.mkdir(exist_ok=True)
    raw, done = tmp / f'm{mod}.raw.html', tmp / f'm{mod}.html'
    raw.write_text(html)
    subprocess.run([NODE, str(HERE / 'render.js'), str(raw), str(done)], check=True)
    pdf = OUT / f'python-data-analysis-module-{mod}-pyq+model.pdf'
    subprocess.run([CHROME, '--headless=new', '--disable-gpu', '--no-pdf-header-footer',
                    '--allow-file-access-from-files', '--virtual-time-budget=4000',
                    f'--print-to-pdf={pdf}', f'file://{done}'],
                   check=True, capture_output=True)
    pages = subprocess.run(['pdfinfo', str(pdf)], capture_output=True, text=True).stdout
    print(f'{pdf.name}: {re.search(r"Pages:\s+(\d+)", pages).group(1)} pages')


if __name__ == '__main__':
    mods = sys.argv[1:] or sorted(p.name[1:] for p in (HERE / 'src').glob('m*'))
    for mod in mods:
        build(mod)
