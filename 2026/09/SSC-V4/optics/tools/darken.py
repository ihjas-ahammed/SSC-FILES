#!/usr/bin/env python3
"""Make the dark twin of a light diagram: invert lightness, keep hue.

    python3 tools/darken.py in.png out.png

Invert every channel (white paper -> black, dark ink -> light ink), rotate the hue
180 degrees so a teal ray stays teal and a magenta ray stays magenta, then lift the
floor to the app's dark surface (#14121b) so the picture sits on the card, not in a hole.
"""
import sys
from PIL import Image, ImageOps


def darken(src, dst):
    im = Image.open(src).convert('RGB')
    inv = ImageOps.invert(im)
    h, s, v = inv.convert('HSV').split()
    h = h.point(lambda x: (x + 128) % 256)
    out = Image.merge('HSV', (h, s, v)).convert('RGB')
    floor = (20, 18, 27)
    chans = [c.point(lambda x, f=f: int(f + x * (255 - f) / 255)) for c, f in zip(out.split(), floor)]
    Image.merge('RGB', chans).save(dst, optimize=True)


if __name__ == '__main__':
    darken(sys.argv[1], sys.argv[2])
