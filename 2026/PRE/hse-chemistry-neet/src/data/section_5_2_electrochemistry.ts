import { Section } from '../types';
import { UNIT_5_2_1 } from './chem_units/unit_5_2_1_cells';
import { UNIT_5_2_2 } from './chem_units/unit_5_2_2_conductance';
import { UNIT_5_2_3 } from './chem_units/unit_5_2_3_applications';
import { UNIT_5_2_4 } from './chem_units/unit_5_2_4_practice';
import { UNIT_5_2_5 } from './chem_units/unit_5_2_5_summary';

export const SECTION_5_2_ELECTROCHEMISTRY: Section = {
  id: "section-5-2-electrochemistry",
  title: "Section 5.2: Electrochemistry",
  description: "Cells, Conductance & Nernst Equation",
  color: "duo-blue",
  units: [
    UNIT_5_2_1,
    UNIT_5_2_2,
    UNIT_5_2_3,
    UNIT_5_2_4,
    UNIT_5_2_5
  ]
};