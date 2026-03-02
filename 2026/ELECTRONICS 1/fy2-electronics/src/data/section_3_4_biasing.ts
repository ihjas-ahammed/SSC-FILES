import { Section } from '../types';
import { UNIT_3_4_1 } from './elec_units/unit_3_4_1_fidelity';
import { UNIT_3_4_2 } from './elec_units/unit_3_4_2_conditions';
import { UNIT_3_4_3 } from './elec_units/unit_3_4_3_stabilization';
import { UNIT_3_4_4 } from './elec_units/unit_3_4_4_exercises';

export const SECTION_3_4_BIASING: Section = {
  id: "section-3-4-biasing",
  title: "Section 3.4: Faithful Amplification",
  description: "Concepts & Conditions",
  color: "duo-blue",
  units: [
    UNIT_3_4_1,
    UNIT_3_4_2,
    UNIT_3_4_3,
    UNIT_3_4_4
  ]
};