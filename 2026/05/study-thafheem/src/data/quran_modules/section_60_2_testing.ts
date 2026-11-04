import { Section } from '../../types';
import { UNIT_60_2_1_AYAT_10_11 } from './unit_60_2_1_ayat_10_11';
import { UNIT_60_2_2_AYAT_12_13 } from './unit_60_2_2_ayat_12_13';
import { UNIT_60_2_3_SECTION_SUMMARY } from './unit_60_2_3_section_summary';
import { UNIT_60_2_4_SURAH_SUMMARY } from './unit_60_2_4_surah_summary';

export const SECTION_60_2_TESTING: Section = {
  id: "section-60-2-testing",
  title: "Section 60.2: Testing Believing Women",
  description: "Ayat 10-13: Emigration laws and the conditions of Bay'ah.",
  color: "duo-blue",
  units: [
    UNIT_60_2_1_AYAT_10_11,
    UNIT_60_2_2_AYAT_12_13,
    UNIT_60_2_3_SECTION_SUMMARY,
    UNIT_60_2_4_SURAH_SUMMARY
  ]
};