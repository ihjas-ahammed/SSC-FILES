#!/usr/bin/env python3
"""Generate the Optics schematic diagrams with Codex's image tool.

    python3 tools/gen_codex_diagrams.py            # every spec not yet done
    python3 tools/gen_codex_diagrams.py c.1.1.3    # just these concept ids
    python3 tools/gen_codex_diagrams.py --jobs 4

Each spec is one `codex exec` run in its own scratch folder. The PNG Codex saves is
resized to 1200 px wide into diagrams/light/, and tools/darken.py makes the dark twin.
Re-running skips finished ones, so a killed run just resumes.
"""
import glob
import os
import shutil
import subprocess
import sys
import tempfile
from concurrent.futures import ThreadPoolExecutor

from PIL import Image

HERE = os.path.dirname(os.path.realpath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, HERE)
from diagram_specs import SPECS, STYLE  # noqa: E402
from darken import darken  # noqa: E402

LIGHT = os.path.join(ROOT, 'diagrams', 'light')
DARK = os.path.join(ROOT, 'diagrams', 'dark')
LOGS = os.path.join(ROOT, 'diagrams', '.codex-logs')


def one(spec):
    cid, slug, what = spec
    name = '%s_%s' % (cid, slug)
    out = os.path.join(LIGHT, name + '.png')
    if os.path.exists(out):
        return name, 'skip'
    work = tempfile.mkdtemp(prefix='opt-')
    prompt = ("Use your image generation tool to draw this figure, then save the PNG in the current directory "
              "as fig.png and print its path. You MUST use the image generation tool; do not draw it with code "
              "(matplotlib, SVG, PIL). " + STYLE + what)
    log = os.path.join(LOGS, name + '.log')
    for attempt in (1, 2):
        try:
            r = subprocess.run(['codex', 'exec', '--skip-git-repo-check', '--sandbox', 'workspace-write', prompt],
                               cwd=work, capture_output=True, text=True, timeout=600)
            open(log, 'w').write((r.stdout or '') + (r.stderr or ''))
        except subprocess.TimeoutExpired:
            continue
        pngs = glob.glob(os.path.join(work, '*.png'))
        if pngs:
            im = Image.open(pngs[0]).convert('RGB')
            w = 1200
            im = im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
            im.save(out, optimize=True)
            darken(out, os.path.join(DARK, name + '.png'))
            for f in (out, os.path.join(DARK, name + '.png')):
                Image.open(f).convert('RGB').quantize(colors=96, dither=Image.Dither.NONE).save(f, optimize=True)
            shutil.rmtree(work, ignore_errors=True)
            return name, 'ok'
    shutil.rmtree(work, ignore_errors=True)
    return name, 'FAILED'


def main():
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    jobs = 3
    if '--jobs' in sys.argv:
        jobs = int(sys.argv[sys.argv.index('--jobs') + 1])
        args = [a for a in args if a != str(jobs)]
    for d in (LIGHT, DARK, LOGS):
        os.makedirs(d, exist_ok=True)
    todo = [s for s in SPECS if not args or s[0] in args]
    if '--reverse' in sys.argv:
        todo.reverse()
    with ThreadPoolExecutor(jobs) as ex:
        for name, state in ex.map(one, todo):
            print('%-8s %s' % (state, name), flush=True)


if __name__ == '__main__':
    main()
