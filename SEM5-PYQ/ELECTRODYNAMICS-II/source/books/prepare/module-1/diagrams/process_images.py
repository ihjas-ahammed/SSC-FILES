import glob, os
from PIL import Image, ImageDraw, ImageChops
SRC = 'image-gen'; DST = 'final'
# bottom fraction to trim where a caption or formula was baked into the picture
TRIM = {'s2-pillbox-divergence': 0.25, 's43-bc-pillbox': 0.14, 's43-wire-insulation': 0.14}
MAXW = 620
def knock_background(im, tol=38):
    """Make the background that touches the image corners transparent.
    Uses PIL's C flood fill (ImageDraw.floodfill) from each corner; the earlier pure-Python
    per-pixel loop was the cause of the slow processing run."""
    from PIL import ImageDraw
    im = im.convert('RGBA')
    w, h = im.size
    for c in [(0,0),(w-1,0),(0,h-1),(w-1,h-1)]:
        ImageDraw.floodfill(im, c, (255,255,255,0), thresh=tol)
    return im
for path in sorted(glob.glob(f'{SRC}/*.png')):
    name = os.path.basename(path)[:-4]
    if name.startswith('sheet-'): continue
    im = Image.open(path).convert('RGBA')
    if name in TRIM:
        w, h = im.size; im = im.crop((0, 0, w, int(h*(1-TRIM[name]))))
    im = knock_background(im)
    bbox = im.getchannel('A').point(lambda a: 255 if a > 8 else 0).getbbox()
    if bbox: im = im.crop(bbox)
    if im.width > MAXW: im = im.resize((MAXW, round(im.height*MAXW/im.width)), Image.LANCZOS)
    im.save(f'{DST}/{name}.webp', 'WEBP', quality=86, method=6)
    print(name, im.size, os.path.getsize(f'{DST}/{name}.webp')//1024, 'KB', flush=True)
