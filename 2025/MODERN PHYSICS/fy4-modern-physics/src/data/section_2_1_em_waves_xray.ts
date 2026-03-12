import { Section } from '../types';
import { UNIT_2_1_1_EM_WAVES } from './modern_units/unit_2_1_1_em_waves';
import { UNIT_2_1_2_XRAY_DIFFRACTION } from './modern_units/unit_2_1_2_xray_diffraction';
import { UNIT_2_1_SUMMARY } from './modern_units/unit_2_1_summary';

export const SECTION_2_1_EM_WAVES_XRAY: Section = {
  id: "section-2-1-em-waves-xray",
  title: "Section 2.1: EM Waves & X-Ray Diffraction",
  description: "Classical wave behavior of light and its application to crystal structures",
  color: "duo-blue",
  units: [
    UNIT_2_1_1_EM_WAVES,
    UNIT_2_1_2_XRAY_DIFFRACTION,
    UNIT_2_1_SUMMARY
  ]
};