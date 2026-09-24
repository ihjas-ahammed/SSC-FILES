#!/usr/bin/env python3
"""Build a flow-library study system into one self-contained page.

    python3 flow-library/build.py <project-dir>          -> <project>/build/index.html
    python3 flow-library/build.py <project-dir> --mock   -> <project>/build/test/index.html
    python3 flow-library/build.py <project-dir> --beta   -> <project>/build/beta/index.html

--beta is the validated `live` pool on the CURRENT code, for trying a code
change on the real content without touching the public build/index.html. It
badges itself BETA in the tab and the header, and is never committed.

Every project also has a two-line build.py of its own that calls this one, so
`python3 real-analysis/build.py --mock` keeps working exactly as before.

What gets inlined is READ OUT OF the project's app/index.html, in page order:

  <link rel="stylesheet" href="…">   every local stylesheet (the shared
                                     ui.css, then the project's theme.css)
  <script src="sources.js">          replaced by the data seam plus the data
                                     files the chosen pool lists
  <script src="…/flow.js">           replaced by the shared modules, in the
                                     order flow.js lists them
  <script src="…">                   anything else local (app/project/*.js)

So a file added to the dev page is in the deployed page too, and nothing here
has to know what a particular project contains. MathJax and the fonts stay on
their CDNs.
"""
import os
import re
import sys

LIB_DIR = os.path.dirname(os.path.realpath(__file__))
FLOW_JS = os.path.join(LIB_DIR, 'app', 'flow.js')

LOCAL = r'(?!https?:|//|data:)[^"]+'
LINK_RE = re.compile(r'<link rel="stylesheet" href="(%s)">' % LOCAL)
SCRIPT_RE = re.compile(r'[ \t]*<script src="(%s)"></script>\n?' % LOCAL)


def read_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()


def fail(msg):
    sys.exit('Error: ' + msg)


def quoted_list(src, name, where):
    """Every quoted string inside `name: [ … ]` / `name = [ … ]` of `src`."""
    m = re.search(name + r'\s*[:=]\s*\[(.*?)\]', src, re.DOTALL)
    if not m:
        fail('no "%s" list found in %s' % (name, where))
    items = re.findall(r"['\"]([^'\"]+)['\"]", m.group(1))
    if not items:
        fail('the "%s" list in %s is empty' % (name, where))
    return items


def chunk(label, path):
    if not os.path.isfile(path):
        fail('%s is listed but missing (%s)' % (label, path))
    return '/* ── %s ── */\n' % label + read_file(path)


def build(project_dir, mock, beta=False):
    project_dir = os.path.realpath(project_dir)
    app_dir = os.path.join(project_dir, 'app')
    which = 'mock' if mock else 'live'
    out_dir = os.path.join(project_dir, 'build', 'test' if mock else 'beta' if beta else '')
    os.makedirs(out_dir, exist_ok=True)

    html = read_file(os.path.join(app_dir, 'index.html'))
    rel = lambda p: os.path.realpath(os.path.join(app_dir, p))

    html = LINK_RE.sub(lambda m: '<style>\n%s\n</style>'
                       % chunk(m.group(1), rel(m.group(1))), html)

    chunks, seen = [], {'sources': False, 'flow': False}
    for src in SCRIPT_RE.findall(html):
        if os.path.basename(src) == 'sources.js':
            # The seam still has to exist for boot.js, but the data is already
            # inlined, so it points at one no-op module rather than at any
            # file. The built page is deployed as <dir>/index.html with
            # `diagrams/` beside it, one level shallower than the dev page.
            seen['sources'] = True
            chunks.append("const DIAGRAM_BASE = 'diagrams/';\n"
                          "const DATA_SOURCES = { use: '%s', %s: "
                          "['data:text/javascript;charset=utf-8,//bundled'] };" % (which, which))
            files = quoted_list(read_file(rel(src)), which, 'app/sources.js')
            chunks += [chunk(f, rel(f)) for f in files]
        elif rel(src) == FLOW_JS:
            seen['flow'] = True
            for name in quoted_list(read_file(FLOW_JS), 'FLOW_MODULES', 'flow-library/app/flow.js'):
                chunks.append(chunk('flow-library/app/src/' + name,
                                    os.path.join(LIB_DIR, 'app', 'src', name)))
        else:
            chunks.append(chunk(src, rel(src)))

    if not seen['sources']:
        fail('app/index.html does not load sources.js')
    if not seen['flow']:
        fail('app/index.html does not load flow-library/app/flow.js')

    bundle = '<script>\n%s\n</script>\n' % '\n\n'.join(chunks).replace('</script', '<\\/script')

    # every local script tag goes; the bundle takes the place of the last one
    tags = list(SCRIPT_RE.finditer(html))
    last = tags[-1]
    html = (html[:last.start()] + '\x00' + html[last.end():])
    html = SCRIPT_RE.sub('', html).replace('\x00', bundle)

    if beta:
        m = re.search(r'<title>(.*?) · Study System</title>', html)
        if not m:
            fail('app/index.html needs a "<Name> · Study System" <title>')
        name = m.group(1)
        html = html.replace(m.group(0), '<title>%s · BETA (real data, new code)</title>' % name)
        html = html.replace('<b>%s</b>' % name, '<b>%s</b><span>beta · real data</span>' % name, 1)

    if mock:
        # A test build must announce itself in the tab as well as on the page,
        # so a stray bookmark can never be mistaken for the real thing.
        m = re.search(r'<title>(.*?) · Study System</title>', html)
        if not m:
            fail('app/index.html needs a "<Name> · Study System" <title>')
        name = m.group(1)
        html = html.replace(m.group(0), '<title>%s · TEST (mock data)</title>' % name)
        html = html.replace('<b>%s</b>' % name, '<b>%s</b><span>test · mock</span>' % name, 1)

    out_path = os.path.join(out_dir, 'index.html')
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(html)
    print('Built %s from the %s pool (%d bytes)' % (out_path, which, len(html)))


def main(argv):
    args = [a for a in argv if not a.startswith('--')]
    if len(args) != 1:
        sys.exit(__doc__)
    if '--mock' in argv and '--beta' in argv:
        sys.exit('Error: --mock and --beta are different builds; pick one')
    build(args[0], '--mock' in argv, '--beta' in argv)


if __name__ == '__main__':
    main(sys.argv[1:])
