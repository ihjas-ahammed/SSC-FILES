import os, subprocess, sys
import run_sheets as R
POS = R.POS
todo = list(range(1, len(R.SHEETS)))  # sheets 2..5 (index 1..4); sheet 1 already done
lines = []
for i in todo:
    names = R.SHEETS[i]
    panels = ' '.join(f'Panel {k+1} ({POS[k]}): {R.BRIEFS[n]}' for k, n in enumerate(names))
    lines.append(f'Image sheet-{i+1}.png: 2 by 2 grid of four equal cells, white gutter between cells, no label crossing cells. Style: {R.STYLE} {panels}')
prompt = ('Use your image generation tool. Create these four images one after another, saving each as the named file in this folder. '
          'Do not write any other files and do not run any other commands. Reply with the file names only when all four are saved.\n\n'
          + '\n\n'.join(lines))
subprocess.run(['codex', 'exec', '--sandbox', 'workspace-write', '--skip-git-repo-check', '-C', os.getcwd(), prompt],
               stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT, timeout=3000)
for i in todo:
    sheet = f'sheet-{i+1}.png'
    if os.path.exists(sheet):
        w, h = R.crop(sheet, R.SHEETS[i]); print('OK', sheet, w, h, flush=True)
    else:
        print('MISSING', sheet, flush=True)
print('RUN_DONE', flush=True)
