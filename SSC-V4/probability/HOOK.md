# Probability Study System (`probability`)

Built on the shared engine. **Read [`../flow-library/HOOK.md`](../flow-library/HOOK.md)
first**: it says what belongs here and what belongs in flow-library.

## What is unique to this project (and only here)

- `app/index.html`: page head (title, icon, manifest, fonts) and the script list
- `app/project/project.js`: `PROJECT` (storage `ssc4.prob.v1`, sync `ssc4_prob_v1`)
- `app/project/theme.css`: this app's look
- `app/project/*.js`: any extra behaviour, registered as `PROJECT.hooks`
- `app/sources.js`, `data/`, `diagrams/`: the content

Never copy a flow-library file in here to change it. Add a hook or a theme rule.

## Build, check, publish

    python3 build.py --mock        # build/test/index.html (shared mock pool)
    python3 build.py               # build/index.html (the `live` pool)
    node tools/check_tex.js        # TeX gate, 0 errors before any publish
    python3 tools/gen_diagrams.py  # re-index diagrams/ into app/project/fig.diagrams.js

To publish, add a block to `SSC-V2/SEM5/PHY/apps/tools/deploy.sh` (copy the Quantum
Mechanics one).
