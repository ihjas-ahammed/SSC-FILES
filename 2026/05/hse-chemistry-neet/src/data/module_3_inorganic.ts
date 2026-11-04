import { Module } from '../types';
import { SECTION_3_1_D_AND_F_BLOCK } from './section_3_1_d_and_f_block';
import { SECTION_3_4_COORDINATION } from './section_3_4_coordination';

export const MODULE_3_INORGANIC: Module = {
  id: 'module-3-inorganic',
  title: 'Module III: Inorganic Chemistry',
  description: 'Class 11 & 12 Inorganic Chemistry Concepts',
  sections: [
    SECTION_3_1_D_AND_F_BLOCK,
    SECTION_3_4_COORDINATION
  ],
  moduleSummary: [
    {
      id: "mod-sum-3-1",
      type: "theory",
      title: "Module Overview",
      content: "This module covers the **d- and f-Block Elements** and **Coordination Compounds**. We explore transition metals, inner transition elements, and the complex chemistry of metal-ligand bonding."
    },
    {
      id: "mod-sum-3-2",
      type: "theory",
      title: "Key Concepts",
      content: "1. **d-Block:** Trends in properties, K2Cr2O7, KMnO4.\n2. **f-Block:** Lanthanoid/Actinoid contraction.\n3. **Coordination:** Werner's Theory, VBT, CFT, Isomerism, and Stability."
    }
  ]
};