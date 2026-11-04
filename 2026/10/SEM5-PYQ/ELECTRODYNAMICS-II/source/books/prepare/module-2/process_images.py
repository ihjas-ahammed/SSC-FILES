import glob, os
from PIL import Image
HERE = os.path.dirname(os.path.abspath(__file__))
SRC = f'{HERE}/image-gen'; DST = f'{HERE}/final'
MAXW = 480
for path in sorted(glob.glob(f'{SRC}/m2-*.png')):
    name = os.path.basename(path)[:-4]
    im = Image.open(path).convert('RGB')          # flatten onto white
    bg = Image.new('RGB', im.size, 'white'); bg.paste(im)
    if im.width > MAXW:
        bg = bg.resize((MAXW, round(bg.height * MAXW / bg.width)), Image.LANCZOS)
    bg.save(f'{DST}/{name}.jpg', 'JPEG', quality=75)
    print(name, bg.size, os.path.getsize(f'{DST}/{name}.jpg') // 1024, 'KB')
