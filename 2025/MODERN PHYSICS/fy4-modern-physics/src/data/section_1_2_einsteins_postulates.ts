import { Section } from '../types';
import { UNIT_1_2_1_EINSTEINS_POSTULATES } from './modern_units/unit_1_2_1_einsteins_postulates';
import { UNIT_1_2_2_TIME_DILATION_LENGTH_CONTRACTION } from './modern_units/unit_1_2_2_time_dilation_length_contraction';
import { UNIT_1_2_3_VELOCITY_ADDITION_DOPPLER } from './modern_units/unit_1_2_3_velocity_addition_doppler';
import { UNIT_1_2_SUMMARY } from './modern_units/unit_1_2_summary';

export const SECTION_1_2_EINSTEINS_POSTULATES: Section = {
  id: "section-1-2-einsteins-postulates",
  title: "Section 1.2: Einstein's Postulates & Space-Time Consequences",
  description: "From Einstein's two postulates to time dilation, length contraction, velocity addition, and the Doppler effect",
  color: "duo-violet",
  units: [
    UNIT_1_2_1_EINSTEINS_POSTULATES,
    UNIT_1_2_2_TIME_DILATION_LENGTH_CONTRACTION,
    UNIT_1_2_3_VELOCITY_ADDITION_DOPPLER,
    UNIT_1_2_SUMMARY
  ]
};