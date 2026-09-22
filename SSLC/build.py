#!/usr/bin/env python3
"""Build the Real Analysis study system into one self-contained page.

    python3 build.py            -> build/index.html       from the `live` pool
    python3 build.py --mock     -> build/test/index.html   from the `mock` pool

Styles, every app script and the chosen data files are inlined, so the result
is a single HTML file that can be hosted anywhere or opened from disk. MathJax
and the fonts stay on their CDNs.

The script order is READ OUT OF app/index.html rather than repeated here. It
used to be a hand-maintained copy, which meant a newly added module loaded in
the dev page and was silently missing from the deployed one.
"""
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
APP_DIR = os.path.join(HERE, 'app')
BUILD_DIR = os.path.join(HERE, 'build')


def read_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()


def data_files(which):
    """The file list `which` ('live' or 'mock') names in app/sources.js."""
    src = read_file(os.path.join(APP_DIR, 'sources.js'))
    m = re.search(which + r':\s*\[(.*?)\]', src, re.DOTALL)
    if not m:
        sys.exit('Error: no "%s" list found in app/sources.js' % which)
    paths = re.findall(r"['\"]([^'\"]+)['\"]", m.group(1))
    if not paths:
        sys.exit('Error: the "%s" list in app/sources.js is empty' % which)
    return paths


def app_scripts(html):
    """Every src/*.js the shell loads, in the order the shell loads it."""
    names = re.findall(r'<script src="src/([^"]+\.js)"></script>', html)
    if not names:
        sys.exit('Error: no src/*.js script tags found in app/index.html')
    missing = [n for n in names if not os.path.isfile(os.path.join(APP_DIR, 'src', n))]
    if missing:
        sys.exit('Error: app/index.html loads missing files: ' + ', '.join(missing))
    return names


def main():
    mock = '--mock' in sys.argv
    which = 'mock' if mock else 'live'

    subject = None
    if '--subject' in sys.argv:
        idx = sys.argv.index('--subject')
        if idx + 1 < len(sys.argv):
            subject = sys.argv[idx + 1]

    out_dirs = []
    base_out = os.path.join(BUILD_DIR, 'test') if mock else BUILD_DIR
    out_dirs.append(base_out)
    out_dirs.append(os.path.join(base_out, 'math-base'))
    out_dirs.append(os.path.join(base_out, 'math'))
    if subject:
        out_dirs.append(os.path.join(base_out, subject))

    for d in out_dirs:
        os.makedirs(d, exist_ok=True)

    html = read_file(os.path.join(APP_DIR, 'index.html'))
    css = read_file(os.path.join(APP_DIR, 'src', 'ui.css'))
    html = re.sub(r'<link rel="stylesheet" href="src/ui\.css">',
                  lambda m: '<style>\n/* app/src/ui.css */\n%s\n</style>' % css, html)

    chunks = []
    for rel in data_files(which):
        path = os.path.normpath(os.path.join(APP_DIR, rel))
        chunks.append('/* ── %s ── */\n' % rel + read_file(path))
    for name in app_scripts(html):
        chunks.append('/* ── src/%s ── */\n' % name
                      + read_file(os.path.join(APP_DIR, 'src', name)))

    # The seam still has to exist for boot.js, but the data is already inlined,
    # so it points at one no-op module rather than at any file.
    # The built page is deployed as <dir>/index.html with `diagrams/` beside
    # it, one level shallower than the dev page — so the seam re-points the
    # diagram base as well as the (now inert) data list.
    seam = ("const DIAGRAM_BASE = 'diagrams/';\n"
            "const DATA_SOURCES = { use: '%s', %s: "
            "['data:text/javascript;charset=utf-8,//bundled'] };" % (which, which))

    bundle = '<script>\n%s\n</script>' % (
        (seam + '\n\n' + '\n\n'.join(chunks)).replace('</script', '<\\/script'))

    html, n = re.subn(
        r'<!-- data seam: which content set to load -->.*?<script src="src/boot\.js"></script>',
        lambda m: bundle, html, flags=re.DOTALL)
    if n != 1:
        sys.exit('Error: could not find the script block to replace in app/index.html')

    if mock:
        # A test build must announce itself in the tab as well as on the page,
        # so a stray bookmark can never be mistaken for the real thing.
        html = html.replace('<title>Class 8 Mathematics · Math Base</title>',
                            '<title>Class 8 Mathematics · TEST (mock data)</title>')
        html = html.replace('<b>Class 8 Mathematics</b>',
                            '<b>Class 8 Mathematics</b><span>test · mock</span>', 1)

    for d in out_dirs:
        out_path = os.path.join(d, 'index.html')
        with open(out_path, 'w', encoding='utf-8') as f:
            f.write(html)
        print('Built %s from the %s pool (%d bytes)' % (out_path, which, len(html)))


if __name__ == '__main__':
    main()
