import { Section } from '../types';
import { UNIT_1_1_1 } from './chem_units/unit_1_1_1_matter';
import { UNIT_1_1_2 } from './chem_units/unit_1_1_2_measurement';
import { UNIT_1_1_3 } from './chem_units/unit_1_1_3_laws';
import { UNIT_1_1_4 } from './chem_units/unit_1_1_4_summary';
import { UNIT_1_1_5 } from './chem_units/unit_1_1_5_atomic_mole';
import { UNIT_1_1_6 } from './chem_units/unit_1_1_6_stoichiometry';
import { UNIT_1_1_7 } from './chem_units/unit_1_1_7_exercises_foundational';
import { UNIT_1_1_8 } from './chem_units/unit_1_1_8_exercises_numerical';
import { UNIT_1_1_9 } from './chem_units/unit_1_1_9_summary';

export const SECTION_1_1_CHEM_CONCEPTS: Section = {
  id: "section-1-1-chem",
  title: "Section 1.1: Some Basic Concepts of Chemistry",
  description: "Matter, Measurement, Laws, Moles & Stoichiometry",
  color: "duo-blue",
  units: [
    UNIT_1_1_1,
    UNIT_1_1_2,
    UNIT_1_1_3,
    UNIT_1_1_4,
    UNIT_1_1_5,
    UNIT_1_1_6,
    UNIT_1_1_7,
    UNIT_1_1_8,
    UNIT_1_1_9
  ]
};