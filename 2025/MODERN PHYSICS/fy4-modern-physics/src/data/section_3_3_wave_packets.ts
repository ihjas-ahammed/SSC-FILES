import { Section } from '../types';
import { UNIT_3_3_1_WAVE_PACKETS } from './modern_units/unit_3_3_1_wave_packets';
import { UNIT_3_3_2_PROBABILITY } from './modern_units/unit_3_3_2_probability';
import { UNIT_3_3_SUMMARY } from './modern_units/unit_3_3_summary';

export const SECTION_3_3_WAVE_PACKETS: Section = {
  id: "section-3-3-wave-packets",
  title: "Section 3.3: Wave Packets & Probability",
  description: "Group velocity, the Born interpretation, and the statistical nature of reality",
  color: "duo-blue",
  units: [
    UNIT_3_3_1_WAVE_PACKETS,
    UNIT_3_3_2_PROBABILITY,
    UNIT_3_3_SUMMARY
  ]
};