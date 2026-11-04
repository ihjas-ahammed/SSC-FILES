import { Section } from '../types';
import { UNIT_4_1_1 } from './digital_units/unit_4_1_1_signal_theory';
import { UNIT_4_1_2 } from './digital_units/unit_4_1_2_digital_systems';
import { UNIT_4_1_3 } from './digital_units/unit_4_1_3_logic_states';
import { UNIT_4_1_4 } from './digital_units/unit_4_1_4_exercises';

export const SECTION_4_1_SIGNALS: Section = {
  id: "section-4-1-signals",
  title: "Section 4.1: Analog and Digital Signals",
  description: "The two worlds of electronics",
  color: "duo-indigo",
  units: [
    UNIT_4_1_1,
    UNIT_4_1_2,
    UNIT_4_1_3,
    UNIT_4_1_4
  ]
};