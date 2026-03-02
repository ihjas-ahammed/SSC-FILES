import { Section } from '../types';
import { UNIT_4_5_1 } from './digital_units/unit_4_5_1_bcd_theory';
import { UNIT_4_5_2 } from './digital_units/unit_4_5_2_bcd_analysis';
import { UNIT_4_5_3 } from './digital_units/unit_4_5_3_applications';
import { UNIT_4_5_4 } from './digital_units/unit_4_5_4_exercises';

export const SECTION_4_5_BCD: Section = {
  id: "section-4-5-bcd",
  title: "Section 4.5: BCD Code",
  description: "Binary Coded Decimal",
  color: "duo-indigo",
  units: [
    UNIT_4_5_1,
    UNIT_4_5_2,
    UNIT_4_5_3,
    UNIT_4_5_4
  ]
};