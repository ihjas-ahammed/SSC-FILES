import { Module } from '../types';
import { SECTION_4_1_GOC } from './section_4_1_goc';
import { SECTION_4_2_HYDROCARBONS } from './section_4_2_hydrocarbons';

export const MODULE_4_ORGANIC: Module = {
  id: 'module-4-organic',
  title: 'Module IV: Organic & Environmental',
  description: 'Class 11 Organic Chemistry Foundations',
  sections: [
    SECTION_4_1_GOC,
    SECTION_4_2_HYDROCARBONS
  ],
  moduleSummary: [
    {
      id: "mod-sum-4-1",
      type: "theory",
      title: "Module Overview",
      content: "This module lays the foundation for Organic Chemistry. We cover **Nomenclature**, **Isomerism**, **Reaction Mechanisms**, and **Practical Organic Chemistry**."
    },
    {
      id: "mod-sum-4-2",
      type: "theory",
      title: "Key Concepts",
      content: "1. **GOC:** Inductive, Resonance, Hyperconjugation effects determine stability and acidity/basicity.\n2. **Isomerism:** Structural and Stereoisomerism are crucial for identifying distinct molecules.\n3. **Analysis:** Lassaigne's test and purification methods are essential for lab work."
    },
    {
      id: "mod-sum-4-3",
      type: "theory",
      title: "Hydrocarbons",
      content: "1. **Aliphatic:** Alkanes (Saturated), Alkenes/Alkynes (Unsaturated). Electrophilic addition (Markovnikov).\n2. **Aromatic:** Benzene, Huckel's Rule, Electrophilic Substitution (o/p vs m directing)."
    }
  ]
};