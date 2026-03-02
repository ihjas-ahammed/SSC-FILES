import { Section } from '../types';
import { UNIT_3_5_1 } from './elec_units/unit_3_5_1_base_resistor';
import { UNIT_3_5_2 } from './elec_units/unit_3_5_2_voltage_divider';
import { UNIT_3_5_3 } from './elec_units/unit_3_5_3_design';
import { UNIT_3_5_4 } from './elec_units/unit_3_5_4_exercises';

export const SECTION_3_5_BIASING_METHODS: Section = {
  id: "section-3-5-biasing-methods",
  title: "Section 3.5: Methods of Biasing",
  description: "Circuit Techniques",
  color: "duo-violet",
  units: [
    UNIT_3_5_1,
    UNIT_3_5_2,
    UNIT_3_5_3,
    UNIT_3_5_4
  ]
};