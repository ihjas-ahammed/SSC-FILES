import { Module } from '../types';
import { SECTION_5_1_SOLUTIONS } from './section_5_1_solutions';
import { SECTION_5_2_ELECTROCHEMISTRY } from './section_5_2_electrochemistry';

export const MODULE_5_PHYSICAL: Module = {
  id: 'module-5-physical',
  title: 'Module V: Advanced Physical Chemistry',
  description: 'Class 12 Physical Chemistry: Solutions & Electrochemistry',
  sections: [
    SECTION_5_1_SOLUTIONS,
    SECTION_5_2_ELECTROCHEMISTRY
  ],
  moduleSummary: [
    {
      id: "mod-sum-5-1",
      type: "theory",
      title: "Module Overview",
      content: "This module covers **Solutions** and **Electrochemistry**. We explore how mixtures behave, and the interplay between chemical and electrical energy."
    },
    {
      id: "mod-sum-5-2",
      type: "theory",
      title: "Key Concepts: Solutions",
      content: "1. **Concentration:** Molarity vs Molality.\n2. **Laws:** Henry's & Raoult's Laws.\n3. **Colligative Properties:** $\\Delta T_b, \\Delta T_f, \\Pi$ depend on particle count ($i$)."
    },
    {
      id: "mod-sum-5-3",
      type: "theory",
      title: "Key Concepts: Electrochemistry",
      content: "1. **Galvanic Cells:** $E^0_{cell}$, Nernst Equation, Gibbs Energy.\n2. **Conductance:** $\\Lambda_m$, Kohlrausch Law.\n3. **Electrolysis:** Faraday's Laws, Products.\n4. **Batteries:** Primary, Secondary, Fuel Cells."
    }
  ]
};