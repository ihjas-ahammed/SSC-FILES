#!/usr/bin/env python3
"""Shrink diagram PNGs in place: flat-colour line art quantises to a 96-colour palette with no visible loss.

    python3 tools/shrink.py            # every diagram in diagrams/light and diagrams/dark
"""
import glob, os
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.realpath(__file__)))
before = after = 0
for f in sorted(glob.glob(os.path.join(ROOT, 'diagrams', '*', '*.png'))):
    im = Image.open(f)
    if im.mode == 'P':
        continue                                   # already shrunk
    before += os.path.getsize(f)
    q = im.convert('RGB').quantize(colors=96, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE)
    q.save(f, optimize=True)
    after += os.path.getsize(f)
print('%.1f MB -> %.1f MB' % (before / 1e6, after / 1e6))
