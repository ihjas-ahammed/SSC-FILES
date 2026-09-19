# AGY handoff — accurate Quantum Mechanics data

This file governs source collection, syllabus accuracy, question extraction, data repair,
and handoff to Claude. AGY prepares reliable structured drafts. Claude integrates only
validated data and owns the application design and programs.

## Scope

The project has three displayed courses:

1. **Quantum Mechanics I (`qm1`)**: CU-FYUGP BSc Physics Semester V (PHY5CJ301)
   - Module I: The Wave Function (Griffiths 3e Ch. 1, §§1.1–1.6)
   - Module II: Time-Independent Schrödinger Equation (Griffiths §§2.1, 2.2, 2.4; Zettili §3.6.4, 4.4, 4.5.1–2)
   - Module III: Mathematical Tools of Quantum Mechanics (Zettili Ch. 2)
   - Module IV: Quantum Harmonic Oscillator & 3D Potentials (Zettili Ch. 4, 6)
2. **Quantum Mechanics II (`qm2`)**: CU-FYUGP BSc Physics Semester VII (PHY7CJ401)
   - Module I: The Central Potential & Hydrogen Atom (Griffiths Ch. 4)
   - Module II: Angular Momentum & Spin (Zettili Ch. 5, 7)
   - Module III: Approximation Methods (Griffiths Ch. 6, 7, 8)
   - Module IV: Scattering Theory (Griffiths Ch. 11)
3. **Quantum Mechanics for Entrance (`qme`)**: IIT JAM Physics (JAM PH)
   - Matter waves, de Broglie relation, uncertainty principle
   - 1D, 2D, 3D box potentials & degeneracies
   - 1D Harmonic oscillator & step/barrier tunneling
   - IIT JAM Physics past papers (2005–2026)

## Source rules

- Primary textbooks:
  - *Introduction to Quantum Mechanics (Third Edition)* by David J. Griffiths & Darrell F. Schroeter (`Book 1`).
  - *Quantum Mechanics: Concepts and Applications (Second Edition)* by Nouredine Zettili (`Book 2`).
- Entrance exam papers:
  - IIT JAM Physics (PH) question papers and official answer keys (2005–2026).
- Mathematical integrity:
  - Enforce exact LaTeX mathematical formatting via `tools/check_tex.js`.
  - Always verify operators ($\hat{p} = -i\hbar \partial/\partial x$, $\hat{x} = x$), commutation relations ($[\hat{x}, \hat{p}] = i\hbar$), and probability currents ($J = \frac{\hbar}{m}\text{Im}(\Psi^* \partial\Psi/\partial x)$).
  - Normalization integrals must be strictly evaluated with proper integration limits and volume elements.

## Mastery Levels

- **Level 1 (Read)**: Concepts, definitions, and physical interpretations.
- **Level 2 (Proof Worked)**: Mathematical derivations (`idea`, `why`, `rungs`, `ends`).
- **Level 3 (Exercises Done)**: Textbook problems from Griffiths and Zettili with full solutions, approaches, and traps.
- **Level 4 (JAM Past Papers)**: IIT JAM Physics past year examination questions.

## Build and Deployment

- Bundled via `python3 build.py` into `build/index.html`.
- Test fixture built via `python3 build.py --mock` into `build/test/index.html`.
- Published to Firebase Hosting via `deploy.sh --live` at `https://ssc-data-science-qm.web.app/phy/quantum-mechanics`.
