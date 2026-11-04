# usage: sheet.py pdf outprefix dpi per
import sys, glob, subprocess, os
from PIL import Image, ImageDraw
pdf, pre, dpi, per = sys.argv[1], sys.argv[2], int(sys.argv[3]), int(sys.argv[4])
d = os.path.dirname(pre); [os.remove(f) for f in glob.glob(pre + '*')]
subprocess.run(['pdftoppm', '-r', str(dpi), '-png', pdf, pre + 'p'], check=True)
fs = sorted(glob.glob(pre + 'p-*.png')); ims = [Image.open(f) for f in fs]
w, h = ims[0].size
for k in range(0, len(ims), per):
    g = ims[k:k + per]; c = Image.new('RGB', (w * per + 6 * per, h), '#555')
    for j, im in enumerate(g):
        c.paste(im, (j * (w + 6), 0)); ImageDraw.Draw(c).text((j * (w + 6) + 4, 4), str(k + j + 1), fill='red')
    c.save(f'{pre}S{k // per:02d}.png')
for f in fs: os.remove(f)
print(len(ims), 'pages', w, h)
