"""Codex sheets for Module 1: four figures per sheet (2x2), one codex exec per sheet, START/DONE log lines.
Run from the image-gen folder: python3 run_sheets_m1.py [sheet numbers]"""
import os, subprocess, sys, time
from PIL import Image
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from run_briefs_m1 import STYLE, BRIEFS
POS = ['top-left', 'top-right', 'bottom-left', 'bottom-right']
SHEETS = [
  ['m1-s1-lattice', 'm1-s1-cells', 'm1-s1-ws', 'm1-s1-basis'],
  ['m1-s2-rot6', 'm1-s2-row', 'm1-s2-pent', 'm1-s2-notched'],
  ['m1-s3-b2-oblique', 'm1-s3-b2-rect', 'm1-s3-b2-rectc', 'm1-s3-b2-square'],
  ['m1-s3-cubic-sc', 'm1-s3-cubic-bcc', 'm1-s3-cubic-fcc', 'm1-s3-b2-hex'],
  ['m1-s3-dir', 'm1-s3-miller', 'm1-s3-dspace', 'm1-s4-layers'],
  ['m1-s4-hcp', 'm1-s4-fcc', 'm1-s4-bcc', 'm1-s4-sc'],
  ['m1-s4-dc', 'm1-s4-zns', 'm1-s4-nacl', 'm1-s5-bragg'],
  ['m1-s5-laue', 'm1-s5-recip-mono', 'm1-s5-ewald', 'm1-s5-bz-square'],
  ['m1-s5-bz-bcc', 'm1-s5-bz-fcc', 'm1-s5-recip-bcc-fcc', 'm1-s3-fam100'],
]
def ts(): return time.strftime('%H:%M:%S')
def make_sheet(i, names):
    sheet = f'sheet-m1-{i+1}.png'
    panels = '\n'.join(f'PANEL {k+1} ({POS[k]}): {BRIEFS[n]}' for k, n in enumerate(names))
    prompt = (f"Use your image generation tool to create ONE image and save it in this folder as {sheet}. "
              f"Do not write any other files. The image is a 2 by 2 grid of separate diagrams with equal-sized cells "
              f"and a plain white gutter between cells. Each cell is a self-contained diagram with its own labels; no label or line may cross into another cell. "
              f"Style for every panel: {STYLE} {panels} "
              f"After saving, reply with the file name and whether it was generated.")
    print('START', f'sheet-m1-{i+1}', ts(), flush=True)
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
