# Shared Study Match engine

All active apps linked from `study-plan-v5.html` use this engine:

- Optics study deck and Optics PYQ practice
- Quantum Mechanics I, Modules I–IV
- Complex Analysis I, Module I
- Abstract Algebra I, Modules I–IV

Edit UI, behavior, and styling only in `study-match/src/`. Edit validation and
HTML generation in `study-match/build.py`. Subject folders keep their own JSON,
generated images, and built `dist/` pages. Their `build.py` files only invoke this
shared builder; they contain no subject-specific rendering overrides.

From `SSC-V6`, validate all active data without rebuilding:

```bash
python3 study-match/build_all.py --check
```

Rebuild every active app after an engine edit:

```bash
python3 study-match/build_all.py
```

This command does not publish. `./deploy.sh` runs the same rebuild before the
existing publication script. Existing data warnings are printed; Complex
Analysis's build is strict. `src.before-engine/`, `build.py.before-engine`, old
study-day projects, and model bundles are historical snapshots, not active
engines for the study-plan apps.
