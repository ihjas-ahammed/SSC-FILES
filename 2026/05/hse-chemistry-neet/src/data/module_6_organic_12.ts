import { Module } from '../types';
import { SECTION_6_1_HALOALKANES } from './section_6_1_haloalkanes';
import { SECTION_6_2_ALCOHOLS } from './section_6_2_alcohols';
import { SECTION_6_3_CARBONYLS } from './section_6_3_carbonyls';
import { SECTION_6_4_AMINES_BIOMOL } from './section_6_4_amines_biomol';

export const MODULE_6_ORGANIC_12: Module = {
  id: 'module-6-organic-12',
  title: 'Module VI: Advanced Organic',
  description: 'Class 12 Organic Chemistry & Biochemistry',
  sections: [
    SECTION_6_1_HALOALKANES,
    SECTION_6_2_ALCOHOLS,
    SECTION_6_3_CARBONYLS,
    SECTION_6_4_AMINES_BIOMOL
  ],
  moduleSummary: [
    {
      id: "mod-sum-6-1",
      type: "theory",
      title: "Module Overview",
      content: "This module covers the advanced concepts of Organic Chemistry introduced in Class 12. We started with **Haloalkanes**, explored **Alcohols and Ethers**, mastered the chemistry of the **Carbonyl Group** and **Carboxylic Acids**, and finally covered **Amines and Biomolecules**."
    },
    {
      id: "mod-sum-6-2",
      type: "theory",
      title: "Key Concepts: Halides & Alcohols",
      content: "1. **Haloalkanes:** Nucleophilic substitution ($S_N1$ via Carbocation, $S_N2$ via Inversion) and Elimination (Zaitsev).\n2. **Alcohols & Phenols:** Acidity (Phenol > Alcohol due to resonance). Lucas Test. Reimer-Tiemann and Kolbe reactions for Phenol."
    },
    {
      id: "mod-sum-6-3",
      type: "theory",
      title: "Key Concepts: Carbonyls & Acids",
      content: "1. **Carbonyls:** Nucleophilic Addition is the hallmark. Aldehydes > Ketones in reactivity. Important reactions include Aldol Condensation (requires $\\alpha$-H) and Cannizzaro (no $\\alpha$-H).\n2. **Carboxylic Acids:** Strongest organic acids (stabilized carboxylate). Decarboxylation and HVZ reactions are synthetically critical."
    },
    {
      id: "mod-sum-6-4",
      type: "theory",
      title: "Key Concepts: Amines & Biomolecules",
      content: "1. **Amines:** Basic nature depends on +I, Steric, and Solvation effects. Carbylamine & Hinsberg tests.\n2. **Diazonium:** Synthetic bridge for Ar-F, Ar-I, Ar-CN. Coupling yields dyes.\n3. **Biomolecules:** Carbohydrates (reducing vs non-reducing), Proteins (amino acids, peptide bonds, denaturation), and Nucleic Acids (DNA double helix, A=T/G≡C)."
    }
  ]
};