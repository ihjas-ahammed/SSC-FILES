import os, subprocess, sys
from PIL import Image
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from run_briefs_m2 import STYLE, BRIEFS
POS = ['top-left', 'top-right', 'bottom-left', 'bottom-right']
SHEETS = [
  ['m2-s1-resistor', 'm2-s1-coax', 'm2-s1-bend', 'm2-s1-generator'],
  ['m2-s1-forces', 'm2-s1-paths', 'm2-s1-paradox', 'm2-s1-disk'],
]

def make_sheet(i, names):
    sheet = f'sheet-{i+1}.png'
    panels = '\n'.join(f'PANEL {k+1} ({POS[k]}): {BRIEFS[n]}' for k, n in enumerate(names))
    prompt = (f"Use your image generation tool to create ONE image and save it in this folder as {sheet}. "
              f"Do not write any other files. The image is a 2 by 2 grid of four separate diagrams with equal-sized cells "
              f"and a plain white gutter between cells. Each cell is a self-contained diagram with its own labels; no label or line may cross into another cell. "
              f"Style for every panel: {STYLE} {panels} "
              f"After saving, reply with the file name and whether it was generated.")
    subprocess.run(["codex", "exec", "--sandbox", "workspace-write", "--skip-git-repo-check", "-C", os.getcwd(), prompt],
                   stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT, timeout=1200)
    return sheet

def crop(sheet, names):
    im = Image.open(sheet).convert('RGB')
    w, h = im.size
    for (cx, cy), n in zip([(0, 0), (1, 0), (0, 1), (1, 1)], names):
        box = (int(cx * w / 2) + int(0.02 * w), int(cy * h / 2) + int(0.02 * h),
               int((cx + 1) * w / 2) - int(0.02 * w), int((cy + 1) * h / 2) - int(0.02 * h))
        im.crop(box).save(f'{n}.png')
    return w, h

if __name__ == '__main__':
    sel = [int(x) - 1 for x in sys.argv[1:]] or range(len(SHEETS))
    for i in sel:
        names = SHEETS[i]
        if all(os.path.exists(f'{n}.png') for n in names):
            print('skip sheet', i + 1, flush=True); continue
        sheet = make_sheet(i, names)
        if not os.path.exists(sheet):
            print('MISSING sheet', i + 1, flush=True); continue
        w, h = crop(sheet, names)
        print('OK sheet', i + 1, f'{w}x{h}', names, flush=True)
    print('RUN_DONE', flush=True)
