import { Section } from '../types';
import { UNIT_1_8_1_PROOFS } from './mech_units/unit_1_8_1_proofs';
import { UNIT_1_8_2_ADVANCED_LAWS } from './mech_units/unit_1_8_2_advanced_laws';
import { UNIT_1_8_3_MODULE_PRACTICE } from './mech_units/unit_1_8_3_module_practice';

export const SECTION_1_8_KEPLER_REVISITED: Section = {
  id: "section-1-8-kepler-revisited",
  title: "Section 1.8: Kepler's Laws Revisited",
  description: "Deriving the Laws from Newton",
  color: "duo-pink",
  units: [
    UNIT_1_8_1_PROOFS,
    UNIT_1_8_2_ADVANCED_LAWS,
    UNIT_1_8_3_MODULE_PRACTICE
  ]
};