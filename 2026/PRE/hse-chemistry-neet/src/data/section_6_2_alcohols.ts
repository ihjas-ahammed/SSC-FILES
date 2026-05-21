import { Section } from '../types';
import { UNIT_6_2_1 } from './chem_units/unit_6_2_1_alcohols_phenols';
import { UNIT_6_2_2 } from './chem_units/unit_6_2_2_ethers';
import { UNIT_6_2_3 } from './chem_units/unit_6_2_3_practice';
import { UNIT_6_2_4 } from './chem_units/unit_6_2_4_summary';

export const SECTION_6_2_ALCOHOLS: Section = {
  id: "section-6-2-alcohols",
  title: "Section 6.2: Alcohols, Phenols and Ethers",
  description: "Functional Groups with Oxygen",
  color: "duo-pink",
  units: [
    UNIT_6_2_1,
    UNIT_6_2_2,
    UNIT_6_2_3,
    UNIT_6_2_4
  ]
};