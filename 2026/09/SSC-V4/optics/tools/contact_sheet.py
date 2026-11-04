#!/usr/bin/env python3
"""Contact sheet of diagrams for review: python3 tools/contact_sheet.py light out.png [prefix...]"""
import glob, os, sys
from PIL import Image, ImageDraw
theme, out = sys.argv[1], sys.argv[2]
pref = sys.argv[3:]
root = os.path.dirname(os.path.dirname(os.path.realpath(__file__)))
files = sorted(glob.glob(os.path.join(root, 'diagrams', theme, '*.png')))
if pref:
    files = [f for f in files if any(os.path.basename(f).startswith(p) for p in pref)]
cols, tw = 2, 640
rows = (len(files) + cols - 1) // cols
th = 440
sheet = Image.new('RGB', (cols * tw, rows * (th + 22)), (128, 128, 128))
d = ImageDraw.Draw(sheet)
for i, f in enumerate(files):
    im = Image.open(f).convert('RGB'); im.thumbnail((tw - 8, th))
    x, y = (i % cols) * tw + 4, (i // cols) * (th + 22)
    sheet.paste(im, (x, y + 20)); d.text((x, y + 4), os.path.basename(f), fill=(255, 255, 255))
sheet.save(out)
print(len(files), sheet.size)
