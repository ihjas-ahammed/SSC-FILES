import { Section } from '../types';
import { UNIT_2_3_1_BLACKBODY_LAWS } from './modern_units/unit_2_3_1_blackbody_laws';
import { UNIT_2_3_2_PLANCK_FORMULA } from './modern_units/unit_2_3_2_planck_formula';
import { UNIT_2_3_SUMMARY } from './modern_units/unit_2_3_summary';

export const SECTION_2_3_THERMAL_RADIATION: Section = {
  id: "section-2-3-thermal-radiation",
  title: "Section 2.3: Thermal Radiation",
  description: "Stefan-Boltzmann, Wien's Law, and how Planck resolved the Ultraviolet Catastrophe",
  color: "duo-pink",
  units: [
    UNIT_2_3_1_BLACKBODY_LAWS,
    UNIT_2_3_2_PLANCK_FORMULA,
    UNIT_2_3_SUMMARY
  ]
};
