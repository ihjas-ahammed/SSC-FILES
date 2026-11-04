import { Section } from '../types';
import { UNIT_1_1_1_HISTORICAL } from './mech_units/unit_1_1_1_historical';
import { UNIT_1_1_2_EMPIRICAL_LAWS } from './mech_units/unit_1_1_2_empirical_laws';

export const SECTION_1_1_KEPLERS_LAWS: Section = {
  id: "section-1-1-kepler",
  title: "Section 1.1: Kepler's Laws",
  description: "Historical context and Empirical statements",
  color: "duo-blue",
  units: [
    UNIT_1_1_1_HISTORICAL,
    UNIT_1_1_2_EMPIRICAL_LAWS
  ]
};