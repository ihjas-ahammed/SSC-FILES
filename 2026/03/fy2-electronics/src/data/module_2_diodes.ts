import { Module } from '../types';
import { SECTION_2_1_RECTIFIER } from './section_2_1_rectifier';
import { SECTION_2_2_HW_FW } from './section_2_2_hw_fw';
import { SECTION_2_3_ZENER } from './section_2_3_zener';
import { SECTION_2_4_MULTIPLIERS } from './section_2_4_multipliers';

export const MODULE_2_DIODES: Module = {
  id: 'module-2-diodes',
  title: 'Module II: Semiconductor Diodes',
  description: 'Rectifiers and Regulators',
  sections: [
    SECTION_2_1_RECTIFIER,
    SECTION_2_2_HW_FW,
    SECTION_2_3_ZENER,
    SECTION_2_4_MULTIPLIERS
  ],
  moduleSummary: [
    {
      id: "mod-sum-2-1",
      type: "theory",
      title: "Module Overview",
      content: "This module focused on the primary applications of PN junctions: **Rectification** (AC to DC) and **Voltage Regulation**."
    },
    {
      id: "mod-sum-2-2",
      type: "theory",
      title: "Key Formulas",
      content: "1. **Half-Wave $V_{dc}$:** $V_m / \\pi$\n2. **Full-Wave $V_{dc}$:** $2V_m / \\pi$\n3. **Zener Current:** $I_Z = I_S - I_L$\n4. **Series Resistor:** $R = \\frac{V_{in} - V_Z}{I_S}$"
    }
  ]
};