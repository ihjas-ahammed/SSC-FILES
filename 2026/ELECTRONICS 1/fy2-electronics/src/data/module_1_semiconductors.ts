import { Module } from '../types';
import { SECTION_1_1_SEMICONDUCTOR } from './section_1_1_semiconductor';
import { SECTION_1_2_PN_JUNCTION } from './section_1_2_pn_junction';
import { SECTION_1_3_VI_CHARACTERISTICS } from './section_1_3_vi_characteristics';
import { SECTION_1_4_SPECIAL_DIODES } from './section_1_4_special_diodes';

export const MODULE_1_SEMI: Module = {
  id: 'module-1-semi',
  title: 'Module I: Semiconductor Physics',
  description: 'Fundamentals of solid state electronics',
  sections: [
    SECTION_1_1_SEMICONDUCTOR,
    SECTION_1_2_PN_JUNCTION,
    SECTION_1_3_VI_CHARACTERISTICS,
    SECTION_1_4_SPECIAL_DIODES
  ],
  moduleSummary: [
    {
      id: "mod-sum-1",
      type: "theory",
      title: "Module Overview",
      content: "This module covered the physics of **Semiconductors**, the formation of **PN Junctions**, their **V-I Characteristics**, and **Special Diodes** like LEDs and Photodiodes."
    },
    {
      id: "mod-sum-2",
      type: "theory",
      title: "Key Formulas",
      content: "1. **Conductivity:** $\\sigma = e(n_e \\mu_e + n_h \\mu_h)$\n2. **LED Resistor:** $R_S = \\frac{V_S - V_D}{I_F}$\n3. **Mass Action:** $np = n_i^2$"
    }
  ]
};