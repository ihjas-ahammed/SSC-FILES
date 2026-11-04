"""Codex sheets for Module 4: four figures per sheet (2x2), one codex exec per sheet, START/DONE log lines.
Run from the image-gen folder: python3 run_sheets_m4.py [sheet numbers]"""
import os, subprocess, sys, time
from PIL import Image
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from run_briefs_m4 import STYLE, BRIEFS
POS = ['top-left', 'top-right', 'bottom-left', 'bottom-right']
SHEETS = [
  ['m4-s1-circuit', 'm4-s1-growth', 'm4-s1-decay', 'm4-s1-gd'],
  ['m4-s2-cr-circuit', 'm4-s2-cr-growth', 'm4-s2-leak-circuit', 'm4-s2-leak-graph'],
  ['m4-s2-lc-charge', 'm4-s2-lc-discharge', 'm4-s2-lc-osc', 'm4-s2-lc-energy'],
  ['m4-s3-coil', 'm4-s3-sine', 'm4-s3-cycle', 'm4-s3-mean'],
  ['m4-s4-resistor', 'm4-s4-inductor', 'm4-s4-capacitor', 'm4-s4-rl-series'],
  ['m4-s4-rc-series', 'm4-s4-rc-graph', 'm4-s4-j-plane', 'm4-s4-rl-graph'],
  ['m4-s5-lcr-circuit', 'm4-s5-res-curve', 'm4-s5-vector', 'm4-s5-par-circuit'],
  ['m4-s5-par-curve', 'm4-s5-impedance-tri', 'm4-s5-vm', 'm4-s5-q-bandwidth'],
  ['m4-s6-inst-power', 'm4-s6-pf-triangle', 'm4-s6-wattless', 'm4-s6-rl-circuit'],
]
def ts(): return time.strftime('%H:%M:%S')
def make_sheet(i, names):
    sheet = f'sheet-m4-{i+1}.png'
    panels = '\n'.join(f'PANEL {k+1} ({POS[k]}): {BRIEFS[n]}' for k, n in enumerate(names))
    prompt = (f"Use your image generation tool to create ONE image and save it in this folder as {sheet}. "
              f"Do not write any other files. The image is a 2 by 2 grid of separate diagrams with equal-sized cells "
              f"and a plain white gutter between cells. Each cell is a self-contained diagram with its own labels; no label or line may cross into another cell. "
              f"Style for every panel: {STYLE} {panels} "
              f"After saving, reply with the file name and whether it was generated.")
    print('START', f'sheet-m4-{i+1}', ts(), flush=True)
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
