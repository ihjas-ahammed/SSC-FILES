import os, subprocess
from PIL import Image
import run_sheets as R
FIX = {
"s1-polarized-block": "A light blue rectangular block containing a 5 by 3 grid of short purple arrows, all pointing right. A green arrow above the block pointing right, labelled E. No other text.",
"s2-averaging-sphere": "A dashed grey circle with a faint light blue fill; a black dot at its centre labelled r; inside the circle four small purple dipole arrows around the centre; outside the circle two red plus circles and two blue minus circles. No other text, nothing below the picture.",
"s2-dipole-sum": "Geometry diagram: at lower left a short purple arrow labelled P dtau-prime (source element); at upper right a black dot labelled r (field point); a green straight vector from the source to the field point labelled R-hat near its middle; a dashed horizontal guide from the source with a small arc labelled theta between the guide and the vector. No formulas, no origin mark, no text below the picture.",
"s44-capacitor-dielectric": "Parallel-plate capacitor, side view: top metal plate with red plus signs, labelled +Q at its right end; bottom plate with blue minus signs, labelled -Q at its right end; a light blue dielectric slab filling the gap, labelled epsilon-r; green arrows pointing down between the plates labelled E. No formulas, no text below the picture.",
"s44-langevin-curve": "Graph: horizontal axis labelled pE over kT from 0 to 5; vertical axis labelled P over N p from 0 to 1, with the whole axis label fully visible and a clear margin on the left; a purple curve starting at the origin, nearly straight near the origin and saturating near 1; labels 'linear region' and 'saturation'; a dashed guide line labelled 'small argument'. Keep every label fully inside the picture.",
"s44-slab-force": "Parallel-plate capacitor, side view: top plate labelled +Q, bottom plate labelled -Q; a light blue dielectric slab partly inserted from the right side between the plates; an orange arrow labelled F pointing left into the capacitor; dimension lines labelled l (plate length), x (inserted length) and d (plate separation). No caption text.",
"s62-magnetized-sphere": "A uniformly magnetized sphere, light orange, with a purple arrow labelled M pointing up; a blue circular arrow around the equator labelled K-b; green dipole-shaped field lines outside and parallel green arrows inside labelled B = 2 mu-0 M over 3. Keep every label fully inside the picture with a clear margin. No text below the picture.",
"s63-rod-H": "A long grey cylinder (rod) with an orange current arrow I along its axis; beside it a cross-section circle with green azimuthal H arrows around the centre, arrows getting longer toward the surface inside, and shorter outside; labels 'H proportional to s' inside and 'H proportional to 1/s' outside; radius R. No formulas, nothing below the picture.",
"s64-domains": "Two panels side by side: left, an iron square with random-oriented magnetic domains (purple arrows in brown-outlined patches) labelled 'unmagnetized'; right, the same iron with most domains aligned to the right by a field B shown as a green arrow above, labelled 'magnetized'. Keep all text fully inside the picture.",
"s64-solenoid-core": "A long solenoid drawn as a row of copper loops with orange current arrows labelled I at both ends, with a light purple core inside labelled chi-m at its right end. Inside the core green arrows labelled B = mu-0 (1 + chi-m) n I. Keep every label fully inside the picture with a clear margin.",
}
PAIRS = [["s1-polarized-block", "s2-averaging-sphere"], ["s2-dipole-sum", "s44-capacitor-dielectric"],
         ["s44-langevin-curve", "s44-slab-force"], ["s62-magnetized-sphere", "s63-rod-H"], ["s64-domains", "s64-solenoid-core"]]
lines = []
for i, pair in enumerate(PAIRS, 1):
    panels = ' '.join(f'Panel {k+1} (left half)' if k == 0 else f'Panel {k+1} (right half)' for k in range(2))
    desc = ' '.join(f'Panel {k+1}: {FIX[n]}' for k, n in enumerate(pair))
    lines.append(f'Image fix-sheet-{i}.png: two separate diagrams side by side, left half and right half, equal size, white gutter between them, nothing crossing the gutter. Style: {R.STYLE} {desc}')
prompt = ('Use your image generation tool. Create these five images one after another, saving each as the named file in this folder. '
          'Do not write any other files and do not run any other commands. Reply with the file names only when all five are saved.\n\n' + '\n\n'.join(lines))
if __name__ == '__main__':
    subprocess.run(['codex', 'exec', '--sandbox', 'workspace-write', '--skip-git-repo-check', '-C', os.getcwd(), prompt],
                   stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT, timeout=3000)
    for i, pair in enumerate(PAIRS, 1):
        f = f'fix-sheet-{i}.png'
        if not os.path.exists(f): print('MISSING', f, flush=True); continue
        im = Image.open(f).convert('RGB'); w, h = im.size
        for k, name in enumerate(pair):
            box = (int(k*w/2)+int(0.02*w), int(0.02*h), int((k+1)*w/2)-int(0.02*w), int(h*0.98))
            im.crop(box).save(f'{name}.png'); print('saved', name, flush=True)
    print('RUN_DONE', flush=True)
