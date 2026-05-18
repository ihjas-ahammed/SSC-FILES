import { Module } from '../../types';
import { SEC_U9_YELLOW_WALLPAPER } from './sec_u9_yellow_wallpaper';
import { SEC_U10_DONT_BE_BEAUTIFUL } from './sec_u10_dont_be_beautiful';
import { SEC_U11_BIOLOGY_OF_GENDER } from './sec_u11_biology_of_gender';
import { SEC_U12_EMPOWERMENT_UN } from './sec_u12_empowerment_un';

export const MODULE_3_GENDER: Module = {
  id: 'module-3-gender',
  title: 'Module III: Understanding Gender',
  description: 'Intersecting biology, society, and empowerment.',
  sections: [
    SEC_U9_YELLOW_WALLPAPER,
    SEC_U10_DONT_BE_BEAUTIFUL,
    SEC_U11_BIOLOGY_OF_GENDER,
    SEC_U12_EMPOWERMENT_UN
  ],
  moduleSummary: []
};