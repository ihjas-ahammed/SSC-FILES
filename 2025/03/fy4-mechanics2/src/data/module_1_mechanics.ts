import { Module } from '../types';
import { SECTION_1_1_KEPLERS_LAWS } from './section_1_1_keplers_laws';
import { SECTION_1_2_CENTRAL_FORCES } from './section_1_2_central_forces';
import { SECTION_1_3_EQUATION_OF_MOTION } from './section_1_3_equation_of_motion';
import { SECTION_1_4_ENERGY_POTENTIAL } from './section_1_4_energy_potential';
import { SECTION_1_5_RADIAL_EQUATION } from './section_1_5_radial_equation';
import { SECTION_1_6_ORBIT_EQUATION } from './section_1_6_orbit_equation';
import { SECTION_1_7_EQUATION_ELLIPSE } from './section_1_7_equation_ellipse';
import { SECTION_1_8_KEPLER_REVISITED } from './section_1_8_kepler_revisited';

export const MODULE_1_MECHANICS: Module = {
  id: 'module-1-mechanics',
  title: 'Module I: Central Force Motion',
  description: 'The Kepler Problem & Planetary Orbits',
  sections: [
    SECTION_1_1_KEPLERS_LAWS,
    SECTION_1_2_CENTRAL_FORCES,
    SECTION_1_3_EQUATION_OF_MOTION,
    SECTION_1_4_ENERGY_POTENTIAL,
    SECTION_1_5_RADIAL_EQUATION,
    SECTION_1_6_ORBIT_EQUATION,
    SECTION_1_7_EQUATION_ELLIPSE,
    SECTION_1_8_KEPLER_REVISITED
  ],
  moduleSummary: [
    {
      id: "mod-sum-1",
      type: "theory",
      title: "Module Overview",
      content: "This module covers the historical foundation and mathematical derivation of **Kepler's Laws of Planetary Motion**. It demonstrates how a central force dictates the behavior of celestial bodies."
    },
    {
      id: "mod-sum-2",
      type: "theory",
      title: "Key Laws",
      content: "1. **Orbits:** Planets move in ellipses with the Sun at one focus.\n2. **Areas:** The radius vector sweeps out equal areas in equal times ($dA/dt = constant$).\n3. **Periods:** The square of the period is proportional to the cube of the semimajor axis ($T^2 \\propto a^3$)."
    }
  ]
};