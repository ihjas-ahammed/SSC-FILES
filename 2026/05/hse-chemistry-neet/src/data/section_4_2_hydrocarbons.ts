import { Section } from '../types';
import { UNIT_4_2_1 } from './chem_units/unit_4_2_1_aliphatic';
import { UNIT_4_2_2 } from './chem_units/unit_4_2_2_aromatic';
import { UNIT_4_2_3 } from './chem_units/unit_4_2_3_practice';
import { UNIT_4_2_4 } from './chem_units/unit_4_2_4_summary';

export const SECTION_4_2_HYDROCARBONS: Section = {
  id: "section-4-2-hydrocarbons",
  title: "Section 4.2: Hydrocarbons",
  description: "Aliphatic & Aromatic Compounds",
  color: "duo-orange",
  units: [
    UNIT_4_2_1,
    UNIT_4_2_2,
    UNIT_4_2_3,
    UNIT_4_2_4
  ]
};