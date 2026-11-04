import { Module } from '../types';
import { SECTION_4_1_SIGNALS } from './section_4_1_signals';
import { SECTION_4_2_BINARY } from './section_4_2_binary';
import { SECTION_4_3_CONVERSION } from './section_4_3_conversion';
import { SECTION_4_4_HEXADECIMAL } from './section_4_4_hexadecimal';
import { SECTION_4_5_BCD } from './section_4_5_bcd';

export const MODULE_4_DIGITAL: Module = {
  id: 'module-4-digital',
  title: 'Module IV: Digital Fundamentals',
  description: 'Signals, Logic States, and Number Systems',
  sections: [
    SECTION_4_1_SIGNALS,
    SECTION_4_2_BINARY,
    SECTION_4_3_CONVERSION,
    SECTION_4_4_HEXADECIMAL,
    SECTION_4_5_BCD
  ],
  moduleSummary: [
    {
      id: "mod-sum-4-1",
      type: "theory",
      title: "Module Overview",
      content: "This module introduces **Digital Electronics**, distinguishing between analog and digital domains, and defining the fundamental binary nature of modern circuitry."
    },
    {
      id: "mod-sum-4-2",
      type: "theory",
      title: "Key Concepts",
      content: "1. **Analog:** Continuous values (e.g., Sine wave).\n2. **Digital:** Discrete values (e.g., Square wave).\n3. **Logic:** High (+5V) = 1, Low (0V) = 0."
    },
    {
      id: "mod-sum-4-3",
      type: "theory",
      title: "Number Systems",
      content: "**Hexadecimal** (Base 16) is used for compact representation. **BCD** (Binary Coded Decimal) maps decimal digits individually to 4-bit binary codes for interfacing."
    }
  ]
};