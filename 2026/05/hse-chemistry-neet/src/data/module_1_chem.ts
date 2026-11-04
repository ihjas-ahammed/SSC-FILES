import { Module } from '../types';
import { SECTION_1_1_CHEM_CONCEPTS } from './section_1_1_chem_concepts';
import { SECTION_1_2_ATOM_STRUCTURE } from './section_1_2_atom_structure';
import { SECTION_1_3_PERIODICITY } from './section_1_3_periodicity';
import { SECTION_1_4_BONDING } from './section_1_4_bonding';

export const MODULE_1_CHEM: Module = {
  id: 'module-1-chem',
  title: 'Module I: General Chemistry',
  description: 'Foundations of Chemistry for Class 11',
  sections: [
    SECTION_1_1_CHEM_CONCEPTS,
    SECTION_1_2_ATOM_STRUCTURE,
    SECTION_1_3_PERIODICITY,
    SECTION_1_4_BONDING
  ],
  moduleSummary: [
    {
      id: "mod-sum-1",
      type: "theory",
      title: "Module Overview",
      content: "This module establishes the language of chemistry. We started with **Matter** and its classification, moved to **Measurement** (SI Units, Sig Figs), explored the fundamental **Laws of Combination**, and mastered the central quantitative tool: the **Mole Concept** and **Stoichiometry**."
    },
    {
      id: "mod-sum-2",
      type: "theory",
      title: "Key Takeaways",
      content: "1. Chemistry deals with composition and properties of matter.\n2. SI Units provide a standard for measurement.\n3. The Mole ($6.022 \\times 10^{23}$) links the microscopic and macroscopic worlds.\n4. Stoichiometry allows us to predict product yields and identify limiting reagents."
    },
    {
      id: "mod-sum-3",
      type: "theory",
      title: "Atomic Structure & Bonding",
      content: "We then dived into the atom ($e^-, p^+, n^0$), Quantum Mechanical Model ($n, l, m_l, m_s$), and how elements are arranged in the Periodic Table. Finally, we explored how atoms combine via **Chemical Bonding** (Ionic, Covalent, Metallic) to form the molecules that make up our world."
    }
  ]
};