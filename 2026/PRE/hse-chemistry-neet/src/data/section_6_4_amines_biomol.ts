import { Section } from '../types';
import { UNIT_6_4_1 } from './chem_units/unit_6_4_1_amines';
import { UNIT_6_4_2 } from './chem_units/unit_6_4_2_diazonium';
import { UNIT_6_4_3 } from './chem_units/unit_6_4_3_biomolecules';
import { UNIT_6_4_4 } from './chem_units/unit_6_4_4_practice';
import { UNIT_6_4_5 } from './chem_units/unit_6_4_5_summary';

export const SECTION_6_4_AMINES_BIOMOL: Section = {
  id: "section-6-4-amines-biomol",
  title: "Section 6.4: Amines & Biomolecules",
  description: "Nitrogen Compounds & Chemistry of Life",
  color: "duo-green",
  units: [
    UNIT_6_4_1,
    UNIT_6_4_2,
    UNIT_6_4_3,
    UNIT_6_4_4,
    UNIT_6_4_5
  ]
};