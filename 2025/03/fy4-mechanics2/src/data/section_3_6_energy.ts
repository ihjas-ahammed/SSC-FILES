import { Section } from '../types';
import { UNIT_3_6_1_WAVE_ENERGETICS } from './wave_units/unit_3_6_1_wave_energetics';
import { UNIT_3_6_2_TRANSMISSION_REFLECTION } from './wave_units/unit_3_6_2_transmission_reflection';
import { UNIT_3_6_3_SECTION_SUMMARY } from './wave_units/unit_3_6_3_section_summary';

export const SECTION_3_6_ENERGY: Section = {
  id: "section-3-6-energy",
  title: "Section 3.6: Energy and Energy Flow",
  description: "Wave Energetics and Boundaries",
  color: "duo-blue",
  units:[
    UNIT_3_6_1_WAVE_ENERGETICS,
    UNIT_3_6_2_TRANSMISSION_REFLECTION,
    UNIT_3_6_3_SECTION_SUMMARY
  ]
};