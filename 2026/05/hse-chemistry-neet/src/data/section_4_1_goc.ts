import { Section } from '../types';
import { UNIT_4_1_1 } from './chem_units/unit_4_1_1_naming';
import { UNIT_4_1_2 } from './chem_units/unit_4_1_2_isomerism';
import { UNIT_4_1_3 } from './chem_units/unit_4_1_3_practical';
import { UNIT_4_1_4 } from './chem_units/unit_4_1_4_goc_practice';
import { UNIT_4_1_5 } from './chem_units/unit_4_1_5_summary';

export const SECTION_4_1_GOC: Section = {
  id: "section-4-1-goc",
  title: "Section 4.1: Basic Organic Principles (GOC)",
  description: "Naming, Isomerism, Mechanisms & Analysis",
  color: "duo-green",
  units: [
    UNIT_4_1_1,
    UNIT_4_1_2,
    UNIT_4_1_3,
    UNIT_4_1_4,
    UNIT_4_1_5
  ]
};