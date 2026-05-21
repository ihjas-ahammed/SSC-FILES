import { Section } from '../types';
import { UNIT_5_1_1 } from './chem_units/unit_5_1_1_concentration';
import { UNIT_5_1_2 } from './chem_units/unit_5_1_2_vapour';
import { UNIT_5_1_3 } from './chem_units/unit_5_1_3_colligative';
import { UNIT_5_1_4 } from './chem_units/unit_5_1_4_practice';
import { UNIT_5_1_5 } from './chem_units/unit_5_1_5_summary';

export const SECTION_5_1_SOLUTIONS: Section = {
  id: "section-5-1-solutions",
  title: "Section 5.1: Solutions",
  description: "Liquid Solutions & Colligative Properties",
  color: "duo-maroon",
  units: [
    UNIT_5_1_1,
    UNIT_5_1_2,
    UNIT_5_1_3,
    UNIT_5_1_4,
    UNIT_5_1_5
  ]
};