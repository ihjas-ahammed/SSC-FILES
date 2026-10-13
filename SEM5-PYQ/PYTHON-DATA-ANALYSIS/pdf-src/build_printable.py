#!/usr/bin/env python3
"""Printable A4 version: each module = two A4 pages, two columns, one PDF.

    python3 build_printable.py
    -> ../python-for-data-analysis-pyq+model-printable.pdf
"""
import re, subprocess, sys, glob, os
from pathlib import Path

HERE = Path(__file__).resolve().parent
OUT = HERE.parent
NODE = sorted(glob.glob(os.path.expanduser('~/.nvm/versions/node/*/bin/node')))[-1]
CHROME = 'google-chrome'
COURSE = 'python-for-data-analysis'

PRINT_CSS = """
@page { size: A4; margin: 12mm 12mm 14mm 12mm;
  @bottom-center { content: counter(page); font: 8pt sans-serif; color: #8a8f98; } }
body { font-size: 9pt; line-height: 1.4; }
h1 { font-size: 14pt; }
.mod { break-before: page; column-count: 2; column-gap: 7mm; column-rule: 0.3pt solid #d5d9e0;
  column-fill: auto; height: 538mm; }
.mod:first-child { break-before: auto; }
.mod .qp-head, .mod .box, .mod .section-head { break-inside: avoid; }
.mod .qq { font-size: 1em; }
/* short modules (4, 5) would fill only one page: set larger text so both pages are used */
.mod:nth-child(n+4) { font-size: 10.8pt; line-height: 1.5; }
.mod:nth-child(n+4) pre { font-size: 9pt; }
.mod .coverage { break-inside: avoid; }
.mod .qp-head { column-span: all; }
.mod .box.exam { column-span: all; }
.mod .section-head { column-span: all; }
pre { background: #f4f6f8; border-left: 2pt solid #2b6cb0; padding: 1mm 1.5mm; margin: 1mm 0;
      font-size: 7.6pt; line-height: 1.25; white-space: pre-wrap; }
code { font-family: 'DejaVu Sans Mono', monospace; font-size: 0.92em; }
pre code { font-size: 1em; }
.keep { break-inside: avoid; }
"""


def main():
    css = (HERE / 'style.css').read_text() + PRINT_CSS
    katex_css = (HERE / 'katex' / 'katex.min.css').read_text().replace(
        'url(fonts/', f'url(file://{HERE}/katex/fonts/')
    mods = []
    for mod in sorted(p.name[1:] for p in (HERE / 'src').glob('m*')):
        body = (HERE / 'src' / f'm{mod}' / 'paper.html').read_text()
        mods.append(f'<div class="mod">{body}</div>')
    html = (f'<!doctype html><html><head><meta charset="utf-8"><style>{katex_css}</style>'
            f'<style>{css}</style></head><body>{"".join(mods)}</body></html>')
    tmp = HERE / 'build'
    tmp.mkdir(exist_ok=True)
    raw, done = tmp / 'printable.raw.html', tmp / 'printable.html'
    raw.write_text(html)
    subprocess.run([NODE, str(HERE / 'render.js'), str(raw), str(done)], check=True)
    pdf = OUT / f'{COURSE}-pyq+model-printable.pdf'
    subprocess.run([CHROME, '--headless=new', '--disable-gpu', '--no-pdf-header-footer',
                    '--allow-file-access-from-files', '--virtual-time-budget=4000',
                    f'--print-to-pdf={pdf}', f'file://{done}'],
                   check=True, capture_output=True)
    pages = subprocess.run(['pdfinfo', str(pdf)], capture_output=True, text=True).stdout
    print(f'{pdf.name}: {re.search(r"Pages:\s+(\d+)", pages).group(1)} pages')


if __name__ == '__main__':
    main()
