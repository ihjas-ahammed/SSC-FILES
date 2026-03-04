import { Section } from '../types';
import { UNIT_2_3_1_UNDAMPED } from './mech_units/unit_2_3_1_undamped';
import { UNIT_2_3_2_DAMPED } from './mech_units/unit_2_3_2_damped';

export const SECTION_2_3_OSCILLATORS: Section = {
  id: "section-2-3-oscillators",
  title: "Section 2.3: Undamped & Damped Oscillators",
  description: "Real-world Vibrations",
  color: "duo-green",
  units: [
    UNIT_2_3_1_UNDAMPED,
    UNIT_2_3_2_DAMPED
  ]
};