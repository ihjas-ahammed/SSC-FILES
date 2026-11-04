"""Codex sheets for Module III: up to four figures per sheet (2x2), one codex exec per sheet, START/DONE log lines."""
import os, subprocess, sys, time
from PIL import Image
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from run_briefs_m3 import STYLE, BRIEFS
POS = ['top-left', 'top-right', 'bottom-left', 'bottom-right']
SHEETS = [
  ['m3-f71', 'm3-f72', 'm3-f73', 'm3-f74'],
  ['m3-f75', 'm3-f76', 'm3-f77', 'm3-f78'],
  ['m3-f79', 'm3-f710', 'm3-f711'],
]
def ts(): return time.strftime('%H:%M:%S')
def make_sheet(i, names):
    sheet = f'sheet-m3-{i+1}.png'
    panels = '\n'.join(f'PANEL {k+1} ({POS[k]}): {BRIEFS[n]}' for k, n in enumerate(names))
    grid = '2 by 2 grid' if len(names) == 4 else 'grid of three panels: two on top and one at bottom-left, the bottom-right cell left empty white'
    prompt = (f"Use your image generation tool to create ONE image and save it in this folder as {sheet}. "
              f"Do not write any other files. The image is a {grid} of separate diagrams with equal-sized cells "
              f"and a plain white gutter between cells. Each cell is a self-contained diagram with its own labels; no label or line may cross into another cell. "
              f"Style for every panel: {STYLE} {panels} "
              f"After saving, reply with the file name and whether it was generated.")
    print('START', f'sheet-m3-{i+1}', ts(), flush=True)
    subprocess.run(["codex", "exec", "--sandbox", "workspace-write", "--skip-git-repo-check", "-C", os.getcwd(), prompt],
                   stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT, timeout=1200)
    return sheet
def crop(sheet, names):
    im = Image.open(sheet).convert('RGB'); w, h = im.size
    for (cx, cy), n in zip([(0, 0), (1, 0), (0, 1), (1, 1)], names):
        box = (int(cx*w/2)+int(0.02*w), int(cy*h/2)+int(0.02*h), int((cx+1)*w/2)-int(0.02*w), int((cy+1)*h/2)-int(0.02*h))
        im.crop(box).save(f'{n}.png')
    return w, h
if __name__ == '__main__':
    sel = [int(x)-1 for x in sys.argv[1:]] or range(len(SHEETS))
    for i in sel:
        names = SHEETS[i]
        if all(os.path.exists(f'{n}.png') for n in names):
            print('skip sheet', i+1, flush=True); continue
        sheet = make_sheet(i, names)
        if not os.path.exists(sheet):
            print('MISSING sheet', i+1, ts(), flush=True); continue
        w, h = crop(sheet, names)
        print('DONE sheet', i+1, ts(), f'{w}x{h}', names, flush=True)
    print('RUN_DONE', ts(), flush=True)
