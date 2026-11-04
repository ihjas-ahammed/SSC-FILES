import { Section } from '../types';
import { UNIT_3_2_1 } from './elec_units/unit_3_2_1_common_base';
import { UNIT_3_2_2 } from './elec_units/unit_3_2_2_common_emitter';
import { UNIT_3_2_3 } from './elec_units/unit_3_2_3_characteristics';
import { UNIT_3_2_4 } from './elec_units/unit_3_2_4_exercises';

export const SECTION_3_2_CONNECTIONS: Section = {
  id: "section-3-2-connections",
  title: "Section 3.2: Transistor Connections",
  description: "CB, CE, and Characteristics",
  color: "duo-violet",
  units: [
    UNIT_3_2_1,
    UNIT_3_2_2,
    UNIT_3_2_3,
    UNIT_3_2_4
  ]
};