import { Section } from '../types';
import { UNIT_4_3_1_FRANCK_HERTZ } from './modern_units/unit_4_3_1_franck_hertz';
import { UNIT_4_3_2_CORRESPONDENCE_FAILURE } from './modern_units/unit_4_3_2_correspondence_failure';
import { UNIT_4_3_SUMMARY } from './modern_units/unit_4_3_summary';

export const SECTION_4_3_FRANCK_HERTZ: Section = {
  id: "section-4-3-franck-hertz",
  title: "Section 4.3: Franck-Hertz & The Limits of Bohr",
  description: "Direct proof of energy levels and the eventual breakdown of planetary orbits",
  color: "duo-blue",
  units: [
    UNIT_4_3_1_FRANCK_HERTZ,
    UNIT_4_3_2_CORRESPONDENCE_FAILURE,
    UNIT_4_3_SUMMARY
  ]
};