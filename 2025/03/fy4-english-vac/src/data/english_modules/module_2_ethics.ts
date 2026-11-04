import { Module } from '../../types';
import { SEC_U5_SELF_UNSEEING } from './sec_u5_self_unseeing';
import { SEC_U6_KARMA } from './sec_u6_karma';
import { SEC_U7_IN_THE_NAME_OF_SCIENCE } from './sec_u7_in_the_name_of_science';
import { SEC_U8_BOY_WHO_HARNESSED_WIND } from './sec_u8_boy_who_harnessed_wind';

export const MODULE_2_ETHICS: Module = {
  id: 'module-2-ethics',
  title: 'Module II: Professional Ethics and Scientific Temper',
  description: 'Navigating moral responsibility and scientific innovation.',
  sections: [
    SEC_U5_SELF_UNSEEING,
    SEC_U6_KARMA,
    SEC_U7_IN_THE_NAME_OF_SCIENCE,
    SEC_U8_BOY_WHO_HARNESSED_WIND
  ],
  moduleSummary: []
};