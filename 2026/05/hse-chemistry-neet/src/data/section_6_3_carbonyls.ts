import { Section } from '../types';
import { UNIT_6_3_1 } from './chem_units/unit_6_3_1_carbonyls';
import { UNIT_6_3_2 } from './chem_units/unit_6_3_2_carboxylic_acids';
import { UNIT_6_3_3 } from './chem_units/unit_6_3_3_practice';

export const SECTION_6_3_CARBONYLS: Section = {
  id: "section-6-3-carbonyls",
  title: "Section 6.3: Aldehydes, Ketones & Acids",
  description: "Carbonyl Compounds & Carboxylic Acids",
  color: "duo-orange",
  units: [
    UNIT_6_3_1,
    UNIT_6_3_2,
    UNIT_6_3_3
  ]
};