#!/usr/bin/env python3
"""Regenerate app/src/fig.diagrams.js from the contents of diagrams/.

The app needs to know which rendered diagram belongs to which concept, and the
answer is already written in the file names: diagrams/light/<conceptId>_<slug>.png
with a matching file in diagrams/dark/. Hand-maintaining that list is how a
picture ends up in the repository and never on screen, so it is generated.

    python3 tools/gen_diagrams.py

Prints a warning for any light diagram with no dark twin — the app would fall
back to the light one in dark mode, which looks like a bug rather than a choice.
"""
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
LIGHT = os.path.join(ROOT, 'diagrams', 'light')
DARK = os.path.join(ROOT, 'diagrams', 'dark')
SHEETS = os.path.join(ROOT, 'diagrams', 'sheets')
OUT = os.path.join(ROOT, 'app', 'src', 'fig.diagrams.js')

HEADER = '''/* ══════════════════════════════════════════════════════════════════════════
   The rendered diagram library.  GENERATED — do not hand-edit.

   `diagrams/` holds a light and a dark PNG for dozens of results, drawn offline
   and named after the concept they belong to. The app used to draw eleven
   figures of its own and ignore all of them, so a learner opening Heine–Borel
   got no picture even though one was sitting in the repository.

   This file is the index: concept id -> the diagram basenames filed under it.
   The way to add a picture is to drop the light/dark pair into `diagrams/` and
   run `python3 tools/gen_diagrams.py` — never to hand-edit a path into a
   concept.

   A concept may still override the index with `img: ['<basename>', …]`, which
   is how a node points at a diagram filed under a different id — the mock pool
   does exactly that, because its ids are `m.*` and the pictures are `c.*`.

   comp.figure.js swaps between the pair on `data-theme`, so changing the theme
   changes the diagram with no reload.
   ══════════════════════════════════════════════════════════════════════════ */

'''


def main():
    if not os.path.isdir(LIGHT):
        sys.exit('No diagrams/light directory at ' + LIGHT)
    dark = set(os.listdir(DARK)) if os.path.isdir(DARK) else set()

    index, orphans, lonely = {}, [], []
    for name in sorted(os.listdir(LIGHT)):
        if not name.endswith('.png'):
            continue
        base = name[:-4]
        m = re.match(r'^(c\.[0-9]+(?:\.[0-9]+)*[a-z]?)_', base)
        if not m:
            orphans.append(base)
            continue
        index.setdefault(m.group(1), []).append(base)
        if name not in dark:
            lonely.append(base)

    sheets = sorted(x[:-4] for x in os.listdir(SHEETS)
                    if x.endswith('.png') and not x.endswith('_dark.png')) \
        if os.path.isdir(SHEETS) else []

    body = ',\n'.join("  '%s': [%s]" % (cid, ', '.join("'%s'" % b for b in files))
                      for cid, files in index.items())
    out = HEADER + 'const DIAGRAM_MAP = {\n%s\n};\n\n' % body
    out += ('/* The lecture sheets: whole-topic posters rather than one-result figures.\n'
            '   They belong to no single concept and are offered as a set. */\n')
    out += 'const DIAGRAM_SHEETS = [\n%s\n];\n' % ',\n'.join("  '%s'" % s for s in sheets)

    with open(OUT, 'w', encoding='utf-8') as f:
        f.write(out)

    print('Wrote %s — %d concepts, %d diagrams, %d sheets'
          % (os.path.relpath(OUT, ROOT), len(index),
             sum(len(v) for v in index.values()), len(sheets)))
    for b in orphans:
        print('  ignored (no concept id in the name): ' + b)
    for b in lonely:
        print('  WARNING: no dark twin for ' + b)


if __name__ == '__main__':
    main()
