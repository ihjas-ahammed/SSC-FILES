import { Section } from '../types';
import { UNIT_2_2_1 } from './unit_2_2_1_absolute_value';
import { UNIT_2_2_2 } from './unit_2_2_2_neighborhoods';
import { UNIT_2_2_3 } from './unit_2_2_3_absolute_value_exercises';
import { UNIT_2_2_4 } from './unit_2_2_4_line_exercises';
import { UNIT_2_2_5 } from './unit_2_2_5_section_summary';

export const SECTION_2_2_ABSOLUTE_VALUE: Section = {
  id: "section-2-2",
  title: "Section 2.2: Absolute Value & The Real Line",
  description: "The Triangle Inequality, bounds, and Epsilon-Neighborhoods.",
  color: "duo-red",
  units: [
    UNIT_2_2_1,
    UNIT_2_2_2,
    UNIT_2_2_3,
    UNIT_2_2_4,
    UNIT_2_2_5
  ]
};