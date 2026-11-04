import { Section } from '../types';
import { UNIT_3_3_1 } from './elec_units/unit_3_3_1_amp_principles';
import { UNIT_3_3_2 } from './elec_units/unit_3_3_2_phase';
import { UNIT_3_3_3 } from './elec_units/unit_3_3_3_gain';
import { UNIT_3_3_4 } from './elec_units/unit_3_3_4_exercises';

export const SECTION_3_3_AMPLIFIER: Section = {
  id: "section-3-3-amplifier",
  title: "Section 3.3: Transistor as Amplifier",
  description: "Principles, Phase & Gain",
  color: "duo-orange",
  units: [
    UNIT_3_3_1,
    UNIT_3_3_2,
    UNIT_3_3_3,
    UNIT_3_3_4
  ]
};