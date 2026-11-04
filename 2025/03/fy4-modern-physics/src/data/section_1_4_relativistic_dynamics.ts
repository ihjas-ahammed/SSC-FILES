import { Section } from '../types';
import { UNIT_1_4_1_RELATIVISTIC_MOMENTUM } from './modern_units/unit_1_4_1_relativistic_momentum';
import { UNIT_1_4_2_RELATIVISTIC_ENERGY } from './modern_units/unit_1_4_2_relativistic_energy';
import { UNIT_1_4_3_CONSERVATION_LAWS } from './modern_units/unit_1_4_3_conservation_laws';
import { UNIT_1_4_SUMMARY } from './modern_units/unit_1_4_summary';

export const SECTION_1_4_RELATIVISTIC_DYNAMICS: Section = {
  id: "section-1-4-relativistic-dynamics",
  title: "Section 1.4: Relativistic Dynamics",
  description: "Momentum, Energy, and Conservation Laws at relativistic speeds",
  color: "duo-red",
  units: [
    UNIT_1_4_1_RELATIVISTIC_MOMENTUM,
    UNIT_1_4_2_RELATIVISTIC_ENERGY,
    UNIT_1_4_3_CONSERVATION_LAWS,
    UNIT_1_4_SUMMARY
  ]
};