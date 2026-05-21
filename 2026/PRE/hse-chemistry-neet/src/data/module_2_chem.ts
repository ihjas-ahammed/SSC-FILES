import { Module } from '../types';
import { SECTION_2_1_THERMODYNAMICS } from './section_2_1_thermodynamics';
import { SECTION_2_2_EQUILIBRIUM } from './section_2_2_equilibrium';
import { SECTION_2_3_REDOX } from './section_2_3_redox';

export const MODULE_2_CHEM: Module = {
  id: 'module-2-chem',
  title: 'Module II: Physical Chemistry',
  description: 'Class 11 Physical Chemistry Concepts',
  sections: [
    SECTION_2_1_THERMODYNAMICS,
    SECTION_2_2_EQUILIBRIUM,
    SECTION_2_3_REDOX
  ],
  moduleSummary: [
    {
      id: "mod-sum-2-1",
      type: "theory",
      title: "Module Overview",
      content: "This module covers the core principles of **Chemical Thermodynamics**, **Equilibrium**, and **Redox Reactions**. We explore how energy is managed, how reactions reach balance, and how electron transfer drives chemical change."
    },
    {
      id: "mod-sum-2-2",
      type: "theory",
      title: "Key Concepts",
      content: "1. **Thermodynamics:** Energy conservation ($\Delta U$), Enthalpy ($H$), Entropy ($S$), and Spontaneity ($G$).\n2. **Equilibrium:** Dynamic balance ($Rate_f = Rate_r$), $K_c$ and $K_p$, Le Chatelier's Principle, Ionic Eq (pH, Buffers, Solubility).\n3. **Redox:** Oxidation states, balancing reactions, and electrochemical cells."
    }
  ]
};