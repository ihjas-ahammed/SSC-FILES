import { Module } from '../types';
import { SECTION_4_1_ATOMIC_STRUCTURE } from './section_4_1_atomic_structure';
import { SECTION_4_2_LINE_SPECTRA_BOHR } from './section_4_2_line_spectra_bohr';
import { SECTION_4_3_FRANCK_HERTZ } from './section_4_3_franck_hertz';

export const MODULE_4_RUTHERFORD_BOHR: Module = {
  id: 'module-4-rutherford-bohr',
  title: 'Module IV: The Rutherford-Bohr Model of the Atom',
  description: 'Uncovering the structure of the atom (Krane Ch. 6, §6.1 – 6.8)',
  sections: [
    SECTION_4_1_ATOMIC_STRUCTURE,
    SECTION_4_2_LINE_SPECTRA_BOHR,
    SECTION_4_3_FRANCK_HERTZ
  ],
  moduleSummary: [
    {
      id: "mod-sum-rb-1",
      type: "theory",
      title: "Module IV Overview",
      content: "This module covers the early development of atomic models, culminating in the Rutherford Nuclear Atom, the Bohr Model of Hydrogen, and the experiments that both validated and ultimately broke the planetary model."
    },
    {
      id: "mod-sum-rb-2",
      type: "theory",
      title: "Section 4.1 Summary",
      content: "**The Nuclear Atom:** Rutherford's scattering of alpha particles disproved the Thomson model and showed that atoms have a tiny, massively dense, positively charged nucleus."
    },
    {
      id: "mod-sum-rb-3",
      type: "theory",
      title: "Section 4.2 Summary",
      content: "**The Bohr Model:** Bohr proposed that electrons occupy quantized circular orbits without radiating, and emit or absorb photons only when jumping between these stationary states. This successfully predicted the discrete line spectra of hydrogen and hydrogen-like ions."
    },
    {
      id: "mod-sum-rb-4",
      type: "theory",
      title: "Section 4.3 Summary",
      content: "**Franck-Hertz & Limits:** The Franck-Hertz experiment provided independent, mechanical proof of discrete energy levels. However, Bohr's model ultimately failed to explain multi-electron atoms, fine structure, and violated the Uncertainty Principle, demanding a fully probabilistic wave-mechanical replacement."
    }
  ]
};