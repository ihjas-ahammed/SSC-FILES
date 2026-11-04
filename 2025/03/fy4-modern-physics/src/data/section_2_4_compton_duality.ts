import { Section } from '../types';
import { UNIT_2_4_1_COMPTON_EFFECT } from './modern_units/unit_2_4_1_compton_effect';
import { UNIT_2_4_2_OTHER_PROCESSES } from './modern_units/unit_2_4_2_other_processes';
import { UNIT_2_4_3_WAVE_PARTICLE } from './modern_units/unit_2_4_3_wave_particle';
import { UNIT_2_4_SUMMARY } from './modern_units/unit_2_4_summary';

export const SECTION_2_4_COMPTON_DUALITY: Section = {
  id: "section-2-4-compton-duality",
  title: "Section 2.4: The Compton Effect & Waves/Particles Paradox",
  description: "Scattering interactions proving photons act exactly as billiard balls.",
  color: "duo-blue",
  units: [
    UNIT_2_4_1_COMPTON_EFFECT,
    UNIT_2_4_2_OTHER_PROCESSES,
    UNIT_2_4_3_WAVE_PARTICLE,
    UNIT_2_4_SUMMARY
  ]
};