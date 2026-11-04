import { Section } from '../types';
import { UNIT_4_2_1_LINE_SPECTRA } from './modern_units/unit_4_2_1_line_spectra';
import { UNIT_4_2_2_BOHR_MODEL } from './modern_units/unit_4_2_2_bohr_model';
import { UNIT_4_2_3_HYDROGEN_LIKE_IONS } from './modern_units/unit_4_2_3_hydrogen_like_ions';
import { UNIT_4_2_SUMMARY } from './modern_units/unit_4_2_summary';

export const SECTION_4_2_LINE_SPECTRA_BOHR: Section = {
  id: "section-4-2-line-spectra-bohr",
  title: "Section 4.2: Line Spectra & The Bohr Model",
  description: "Solving the mystery of atomic emission and absorption",
  color: "duo-violet",
  units: [
    UNIT_4_2_1_LINE_SPECTRA,
    UNIT_4_2_2_BOHR_MODEL,
    UNIT_4_2_3_HYDROGEN_LIKE_IONS,
    UNIT_4_2_SUMMARY
  ]
};
