import { Module } from '../types';
import { SECTION_5_1_SOLUTIONS } from './section_5_1_solutions';
import { SECTION_5_2_ELECTROCHEMISTRY } from './section_5_2_electrochemistry';
import { SECTION_5_3_KINETICS } from './section_5_3_kinetics';

export const MODULE_5_PHYSICAL: Module = {
  id: 'module-5-physical',
  title: 'Module V: Advanced Physical Chemistry',
  description: 'Class 12 Physical Chemistry: Solutions, Electrochemistry & Kinetics',
  sections: [
    SECTION_5_1_SOLUTIONS,
    SECTION_5_2_ELECTROCHEMISTRY,
    SECTION_5_3_KINETICS
  ],
  moduleSummary: [
    {
      id: "mod-sum-5-1",
      type: "theory",
      title: "Module Overview",
      content: "This module covers **Solutions**, **Electrochemistry**, and **Chemical Kinetics**. We explore mixtures, electron transfer, and reaction speeds."
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
    },
    {
      id: "mod-sum-5-4",
      type: "theory",
      title: "Key Concepts: Kinetics",
      content: "1. **Rate Law:** Rate = $k[A]^x[B]^y$. Order vs Molecularity.\n2. **Integrated Laws:** Zero ($[R]=-kt+[R]_0$) and First ($ln[R]=-kt+ln[R]_0$) order.\n3. **Arrhenius:** $k=Ae^{-E_a/RT}$. Rate doubles every 10K."
    }
  ]
};