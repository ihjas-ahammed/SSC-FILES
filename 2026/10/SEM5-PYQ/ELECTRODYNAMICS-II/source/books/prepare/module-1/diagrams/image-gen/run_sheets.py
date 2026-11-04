import ast, subprocess, os, sys
from PIL import Image

def load(path):
    tree = ast.parse(open(path, encoding='utf-8').read())
    out = {}
    for node in tree.body:
        if isinstance(node, ast.Assign) and isinstance(node.targets[0], ast.Name):
            name = node.targets[0].id
            if name in ('STYLE', 'BRIEFS'):
                out[name] = ast.literal_eval(node.value)
    return out

A = load('run_briefs.py'); B = load('run_briefs2.py')
STYLE = A['STYLE']
BRIEFS = {**A['BRIEFS'], **B['BRIEFS']}

# Four diagrams per sheet; each sheet is one Codex image, cropped into four PNGs.
SHEETS = [
  ['s2-sphere-field', 's2-averaging-sphere', 's43-bc-pillbox', 's44-metal-sphere-dielectric'],
  ['s44-point-charge-shielding', 's44-capacitor-dielectric', 's44-dielectric-sphere-field', 's44-slab-force'],
  ['s44-langevin-curve', 's61-loop-torque', 's61-nonuniform-ring', 's61-orbit-diamagnet'],
  ['s61-para-dia-sample', 's62-magnetized-sphere', 's62-bound-surface-current', 's62-nonuniform-bound'],
  ['s63-rod-H', 's64-solenoid-core', 's64-hysteresis', 's64-domains'],
]
POS = ['top-left', 'top-right', 'bottom-left', 'bottom-right']

def make_sheet(i, names):
    sheet = f'sheet-{i+1}.png'
    panels = '\n'.join(f'PANEL {k+1} ({POS[k]}): {BRIEFS[n]}' for k, n in enumerate(names))
    prompt = (f"Use your image generation tool to create ONE image and save it in this folder as {sheet}. "
              f"Do not write any other files. The image is a 2 by 2 grid of four separate diagrams with equal-sized cells "
              f"and a plain white gutter between cells. Each cell is a self-contained diagram with its own labels; no label or line may cross into another cell. "
              f"Style for every panel: {STYLE} "
              f"{panels} "
              f"After saving, reply with the file name and whether it was generated.")
    subprocess.run(["codex", "exec", "--sandbox", "workspace-write", "--skip-git-repo-check", "-C", os.getcwd(), prompt],
                   stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT, timeout=1200)
    return sheet

def crop(sheet, names):
    im = Image.open(sheet).convert('RGB')
    w, h = im.size
    cells = [(0, 0), (1, 0), (0, 1), (1, 1)]
    for (cx, cy), n in zip(cells, names):
        box = (int(cx * w / 2) + int(0.02 * w), int(cy * h / 2) + int(0.02 * h),
               int((cx + 1) * w / 2) - int(0.02 * w), int((cy + 1) * h / 2) - int(0.02 * h))
        im.crop(box).save(f'{n}.png')
    return w, h

if __name__ == '__main__':
    sel = [int(x) - 1 for x in sys.argv[1:]] or range(len(SHEETS))
    for i in sel:
        names = SHEETS[i]
        todo = [n for n in names if not os.path.exists(f'{n}.png')]
        if not todo:
            print('skip sheet', i + 1, flush=True); continue
        sheet = make_sheet(i, names)
        if not os.path.exists(sheet):
            print('MISSING sheet', i + 1, flush=True); continue
        w, h = crop(sheet, names)
        print('OK sheet', i + 1, f'{w}x{h}', names, flush=True)
    print('RUN_DONE', flush=True)
