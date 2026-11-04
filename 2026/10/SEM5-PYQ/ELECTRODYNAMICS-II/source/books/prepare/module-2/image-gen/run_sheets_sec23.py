import os, subprocess, sys, time
from PIL import Image
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from run_briefs_m2 import STYLE
from run_briefs_sec23 import BRIEFS
POS = ['top-left', 'top-right', 'bottom-left', 'bottom-right']
SHEETS = [
  ['m2-sec2-loop-magnet', 'm2-sec2-flux-emf', 'm2-sec2-jumping-ring', 'm2-sec2-ampere-disk'],
  ['m2-sec2-wheel', 'm2-sec2-wire-rect', 'm2-sec2-two-loops', 'm2-sec2-neumann'],
  ['m2-sec2-short-in-long', 'm2-sec2-toroid', 'm2-sec2-rl', 'm2-sec2-rl-graph'],
  ['m2-sec2-coax-energy', 'm2-sec3-capacitor-loop', 'm2-sec3-shells', 'm2-sec3-polarized-tube'],
  ['m2-sec3-pillbox', 'm2-sec3-surface-loop', 'm2-sec3-capacitor-plates', 'm2-sec3-flux-lines'],
]
LOG = 'sheets-sec23.log'
def log(msg):
    line = f'{time.strftime("%H:%M:%S")} {msg}'
    print(line, flush=True); open(LOG, 'a').write(line + '\n')

def make_sheet(i, names):
    sheet = f'sheet-s23-{i+1}.png'
    panels = '\n'.join(f'PANEL {k+1} ({POS[k]}): {BRIEFS[n]}' for k, n in enumerate(names))
    prompt = (f"Use your image generation tool to create ONE image and save it in this folder as {sheet}. "
              f"Do not write any other files. The image is a 2 by 2 grid of four separate diagrams with equal-sized cells "
              f"and a plain white gutter between cells. Each cell is a self-contained diagram with its own labels; no label or line may cross into another cell. "
              f"Write Greek letters as the symbols themselves (theta, Phi, sigma, lambda, pi, mu0) and never as words. "
              f"Style for every panel: {STYLE} {panels} "
              f"After saving, reply with the file name and whether it was generated.")
    log(f'START sheet {i+1} {names}')
    subprocess.run(['codex', 'exec', '--sandbox', 'workspace-write', '--skip-git-repo-check', '-C', os.getcwd(), prompt],
                   stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT, timeout=1200)
    return sheet

def crop(sheet, names):
    im = Image.open(sheet).convert('RGB'); w, h = im.size
    for (cx, cy), n in zip([(0, 0), (1, 0), (0, 1), (1, 1)], names):
        box = (int(cx*w/2)+int(0.02*w), int(cy*h/2)+int(0.02*h), int((cx+1)*w/2)-int(0.02*w), int((cy+1)*h/2)-int(0.02*h))
        im.crop(box).save(f'{n}.png')

if __name__ == '__main__':
    sel = [int(x)-1 for x in sys.argv[1:]] or range(len(SHEETS))
    for i in sel:
        names = SHEETS[i]
        if all(os.path.exists(f'{n}.png') for n in names):
            log(f'skip sheet {i+1}'); continue
        sheet = make_sheet(i, names)
        if os.path.exists(sheet):
            crop(sheet, names); log(f'DONE sheet {i+1} (4 images cropped)')
        else:
            log(f'MISSING sheet {i+1}')
    log('RUN_DONE')
