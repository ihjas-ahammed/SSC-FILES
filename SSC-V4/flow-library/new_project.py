#!/usr/bin/env python3
"""Scaffold a new study system on flow-library.

    python3 flow-library/new_project.py <slug> "<Display Name>" [--short <id>]

    e.g. python3 flow-library/new_project.py linear-algebra "Linear Algebra" --short la

Creates SSC-V4/<slug>/ holding ONLY what is unique to the new app:

    app/index.html            page head (title, icon, manifest, fonts) + script list
    app/sources.js            data seam: `mock` = the shared pool, `live` = empty
    app/project/project.js    PROJECT: name, storage + sync keys, hooks
    app/project/theme.css     this app's look (starts as the house style)
    app/project/fig.diagrams.js   empty diagram index (tools/gen_diagrams.py fills it)
    build.py, tools/check_tex.js, tools/gen_diagrams.py   shims onto flow-library
    data/  diagrams/light/  diagrams/dark/
    HOOK.md

The shell is copied from real-analysis/app/index.html, the house-style reference, with
the identity swapped out. Storage and sync keys are derived from --short (default: the
slug's initials), and the script refuses to reuse a key another project already owns.
Nothing outside the new folder is touched. See flow-library/HOOK.md for the next steps.
"""
import glob
import json
import os
import re
import sys
import urllib.parse

LIB = os.path.dirname(os.path.realpath(__file__))
V4 = os.path.dirname(LIB)
REFERENCE = os.path.join(V4, 'real-analysis', 'app', 'index.html')


def write(path, text, mode=0o644):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(text)
    os.chmod(path, mode)


def svg_icon(letter):
    svg = ("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>"
           "<rect width='64' height='64' rx='14' fill='#0f1422'/>"
           "<text x='32' y='45' font-family='Georgia,serif' font-size='38' font-weight='bold' "
           "fill='#93a8ff' text-anchor='middle'>%s</text></svg>" % letter)
    return 'data:image/svg+xml,' + urllib.parse.quote(svg, safe="/:='")


def used_keys():
    """Every storage/sync key already claimed by an existing project."""
    keys = set()
    for p in glob.glob(os.path.join(V4, '*', 'app', 'project', 'project.js')):
        keys.update(re.findall(r"'(ssc4[._][^']+)'", open(p, encoding='utf-8').read()))
    return keys


def main(argv):
    args = [a for a in argv if not a.startswith('--')]
    short = None
    if '--short' in argv:
        i = argv.index('--short')
        short = argv[i + 1] if i + 1 < len(argv) else None
        args = [a for a in args if a != short]
    if len(args) != 2:
        sys.exit(__doc__)
    slug, name = args
    if not re.fullmatch(r'[a-z0-9]+(-[a-z0-9]+)*', slug):
        sys.exit('Error: slug must be lower-case words joined by hyphens, e.g. linear-algebra')
    short = short or ''.join(w[0] for w in slug.split('-'))
    if not re.fullmatch(r'[a-z0-9]+', short):
        sys.exit('Error: --short must be lower-case letters/digits')

    root = os.path.join(V4, slug)
    if os.path.exists(root):
        sys.exit('Error: %s already exists' % root)

    keys = {
        'storageKey': 'ssc4.%s.v1' % short,
        'live': 'ssc4_%s_v1' % short, 'mock': 'ssc4_%s_mock_v1' % short,
        'users': 'ssc4_%s_users_v1' % short, 'usersMock': 'ssc4_%s_users_mock_v1' % short,
    }
    clash = sorted(set(keys.values()) & used_keys())
    if clash:
        sys.exit('Error: keys already used by another project: %s — pick another --short' % ', '.join(clash))

    # ── the shell: the reference page with the identity swapped out ──────────
    html = open(REFERENCE, encoding='utf-8').read()
    icon = svg_icon(name.strip()[0].upper())
    manifest = 'data:application/manifest+json,' + urllib.parse.quote(json.dumps({
        'name': name, 'short_name': name.split()[0], 'display': 'standalone',
        'start_url': '.', 'theme_color': '#101216', 'background_color': '#101216'},
        separators=(',', ':')), safe='')
    html = re.sub(r'<meta name="description" content="[^"]*">',
                  '<meta name="description" content="%s study system.">' % name, html)
    html = re.sub(r'<title>.*?</title>', '<title>%s · Study System</title>' % name, html)
    html = re.sub(r'(<link rel="(?:icon|apple-touch-icon)"[^>]*href=")[^"]*(")',
                  lambda m: m.group(1) + icon + m.group(2), html)
    html = re.sub(r'(<link rel="manifest" href=")[^"]*(")',
                  lambda m: m.group(1) + manifest + m.group(2), html)
    html = re.sub(r'(<meta name="apple-mobile-web-app-title" content=")[^"]*(")',
                  lambda m: m.group(1) + name + m.group(2), html)
    html = re.sub(r'<b>Real Analysis</b>', '<b>%s</b>' % name, html)
    if 'Real Analysis' in html:
        sys.exit('Error: the reference shell still names Real Analysis somewhere; update this script')
    write(os.path.join(root, 'app', 'index.html'), html)

    write(os.path.join(root, 'app', 'sources.js'), """/* ══════════════════════════════════════════════════════════════════════════
   THE DATA SEAM for %(name)s.

   Flip `use` to 'live' once `live` lists validated files in ../data/. The
   contract (SYLLABI, SECTITLE, CONCEPTS, OBJECTIVE, QUESTIONS, PYQ) is the
   same for every project; real-analysis/HOOK_agy.md → "Runtime data
   contract" documents it field by field.

   Keep these arrays plain lists of quoted paths, with no paths in comments:
   build.py and tools/check_tex.js read them by pulling every quoted string
   out of the brackets.
   ══════════════════════════════════════════════════════════════════════════ */

const DIAGRAM_BASE = '../diagrams/';

const DATA_SOURCES = {

  use: 'mock',

  mock: [
    '../../flow-library/app/mock/mock.courses.js',
    '../../flow-library/app/mock/mock.concepts.js',
    '../../flow-library/app/mock/mock.objective.js',
    '../../flow-library/app/mock/mock.written.js',
    '../../flow-library/app/mock/mock.pyq.js'
  ],

  live: [
  ]
};
""" % {'name': name})

    write(os.path.join(root, 'app', 'project', 'project.js'), """/* ══════════════════════════════════════════════════════════════════════════
   %(name)s — what makes this app itself. Read by flow-library through
   core.project.js, which documents every field and hook.

   The storage and sync names are this project's alone. Once anyone has
   studied here, never change them: they are where the records live.
   ══════════════════════════════════════════════════════════════════════════ */

const PROJECT = {
  id: '%(slug)s',
  name: '%(name)s',
  storageKey: '%(storageKey)s',
  sync: {
    live: '%(live)s',       users: '%(users)s',
    mock: '%(mock)s',  usersMock: '%(usersMock)s'
  },
  themeColor: { light: '#faf8f4', dark: '#101216' },
  hooks: {}
};
""" % dict(keys, name=name.replace("'", "\\'"), slug=slug))

    write(os.path.join(root, 'app', 'project', 'theme.css'), """/* ══════════════════════════════════════════════════════════════════════════
   %s — theme.

   Loaded after flow-library/app/src/ui.css, in this project's page only.
   Empty = the shared house style. To make the app its own, override the
   tokens in :root and :root[data-theme=dark] (palette, --font-*, --r-*),
   then restyle any shared class. quantum-mechanics/app/project/theme.css is
   the worked example of a fully distinct look.
   ══════════════════════════════════════════════════════════════════════════ */
""" % name)

    write(os.path.join(root, 'app', 'project', 'fig.diagrams.js'), """/* The rendered diagram library. GENERATED by tools/gen_diagrams.py — do not hand-edit. */

const DIAGRAM_MAP = {};

const DIAGRAM_SHEETS = [];
""")

    for d in ('data', os.path.join('diagrams', 'light'), os.path.join('diagrams', 'dark')):
        write(os.path.join(root, d, '.gitkeep'), '')

    # shims: the same two lines every project carries
    for rel in ('build.py', os.path.join('tools', 'check_tex.js'), os.path.join('tools', 'gen_diagrams.py')):
        src = os.path.join(V4, 'real-analysis', rel)
        write(os.path.join(root, rel), open(src, encoding='utf-8').read(), 0o755)

    write(os.path.join(root, 'HOOK.md'), """# %(name)s Study System (`%(slug)s`)

Built on the shared engine. **Read [`../flow-library/HOOK.md`](../flow-library/HOOK.md)
first**: it says what belongs here and what belongs in flow-library.

## What is unique to this project (and only here)

- `app/index.html`: page head (title, icon, manifest, fonts) and the script list
- `app/project/project.js`: `PROJECT` (storage `%(storageKey)s`, sync `%(live)s`)
- `app/project/theme.css`: this app's look
- `app/project/*.js`: any extra behaviour, registered as `PROJECT.hooks`
- `app/sources.js`, `data/`, `diagrams/`: the content

Never copy a flow-library file in here to change it. Add a hook or a theme rule.

## Build, check, publish

    python3 build.py --mock        # build/test/index.html (shared mock pool)
    python3 build.py               # build/index.html (the `live` pool)
    node tools/check_tex.js        # TeX gate, 0 errors before any publish
    python3 tools/gen_diagrams.py  # re-index diagrams/ into app/project/fig.diagrams.js

To publish, add a block to `SSC-V2/SEM5/PHY/apps/tools/deploy.sh` (copy the Quantum
Mechanics one).
""" % dict(keys, name=name, slug=slug))

    print('Created %s' % root)
    print('  open  %s/app/index.html   (dev page, no build needed)' % slug)
    print('  next  style app/project/theme.css, then see flow-library/HOOK.md → "Adding a new project"')


if __name__ == '__main__':
    main(sys.argv[1:])
