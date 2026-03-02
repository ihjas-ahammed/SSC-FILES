import { Module } from '../types';
import { SECTION_3_1_TRANSISTOR } from './section_3_1_transistor';
import { SECTION_3_2_CONNECTIONS } from './section_3_2_connections';
import { SECTION_3_3_AMPLIFIER } from './section_3_3_amplifier';
import { SECTION_3_4_BIASING } from './section_3_4_biasing';
import { SECTION_3_5_BIASING_METHODS } from './section_3_5_biasing_methods';

export const MODULE_3_TRANSISTORS: Module = {
  id: 'module-3-transistors',
  title: 'Module III: Transistors',
  description: 'Bipolar Junction Transistors (BJT)',
  sections: [
    SECTION_3_1_TRANSISTOR,
    SECTION_3_2_CONNECTIONS,
    SECTION_3_3_AMPLIFIER,
    SECTION_3_4_BIASING,
    SECTION_3_5_BIASING_METHODS
  ],
  moduleSummary: [
    {
      id: "mod-sum-3-1",
      type: "theory",
      title: "Module Overview",
      content: "This module covers the **BJT**, its three configurations (**CB, CE, CC**), and its primary application as an **Amplifier**. It also explores **Biasing** techniques to ensure faithful amplification."
    },
    {
      id: "mod-sum-3-2",
      type: "theory",
      title: "Key Formulas",
      content: "1. **Current:** $I_E = I_B + I_C$\n2. **Alpha:** $\\alpha = I_C / I_E$\n3. **Beta:** $\\beta = I_C / I_B$\n4. **Stability:** Voltage Divider is best because $I_C$ depends less on $\\beta$."
    }
  ]
};