import { Unit } from '../../types';

export const UNIT_4_3_SUMMARY: Unit = {
  id: "unit-4-3-summary",
  title: "Section 4.3 Summary",
  description: "Franck-Hertz & The Limits of Bohr Recap",
  color: "duo-orange",
  lessons: [
    {
      id: "les-sum-4-3-1",
      title: "Summary: The Franck-Hertz Experiment",
      description: "Key ideas from Unit 4.3.1",
      icon: "BookCheck",
      slides: [
        {
          id: "sum-431",
          type: "theory",
          title: "Unit 4.3.1 — Franck-Hertz Experiment",
          content: "**The Setup:** Electrons are accelerated through a low-pressure gas (e.g., Mercury).\n\n**The Observation:** The current drops sharply at specific accelerating voltages (multiples of 4.9 V for Hg).\n\n**The Meaning:** Electrons undergo perfectly elastic collisions until they have exactly enough kinetic energy to excite the atom to its next discrete energy level. At that exact threshold, the collision becomes inelastic, the electron loses its energy, and the current drops.\n\n**Significance:** Provided independent, non-optical proof of the existence of discrete, quantized atomic energy levels, perfectly corroborating the energy gaps seen in emission spectra."
        }
      ]
    },
    {
      id: "les-sum-4-3-2",
      title: "Summary: Limits of the Bohr Model",
      description: "Key ideas from Unit 4.3.2",
      icon: "BookCheck",
      slides: [
        {
          id: "sum-432",
          type: "theory",
          title: "Unit 4.3.2 — Correspondence & Deficiencies",
          content: "**Correspondence Principle:** Quantum mechanics must yield classical results at macroscopic scales ($n \\to \\infty$). Bohr showed that for massive orbits, the emitted photon frequency matches the classical orbital frequency.\n\n**Failures of the Bohr Model:**\n1. **Multi-electron atoms:** Fails to account for electron-electron repulsion.\n2. **Angular momentum:** Incorrectly predicts $L = \hbar$ for the ground state (should be 0).\n3. **Uncertainty Principle:** Postulates exact orbits ($r$ and $p$ known perfectly), violating $\\Delta x \\Delta p \\ge \\hbar/2$.\n4. **Intensities & Fine Structure:** Cannot predict line brightness or doublet splitting.\n\n**The Solution:** The planetary model had to be replaced by full quantum mechanics (Schrödinger), treating electrons as 3D probability clouds."
        }
      ]
    }
  ]
};