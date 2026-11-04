import { Module } from '../types';
import { MODULE_1_HUMAN_RIGHTS } from './english_modules/module_1_human_rights';
import { MODULE_2_ETHICS } from './english_modules/module_2_ethics';
import { MODULE_3_GENDER } from './english_modules/module_3_gender';
import { MODULE_4_MINDFULNESS } from './english_modules/module_4_mindfulness';

export const MODULES: Module[] = [
  MODULE_1_HUMAN_RIGHTS,
  MODULE_2_ETHICS,
  MODULE_3_GENDER,
  MODULE_4_MINDFULNESS
];