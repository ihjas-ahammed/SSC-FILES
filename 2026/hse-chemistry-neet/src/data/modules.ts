import { Module } from '../types';
import { MODULE_1_CHEM } from './module_1_chem';
import { MODULE_2_CHEM } from './module_2_chem';
import { MODULE_3_INORGANIC } from './module_3_inorganic';
import { MODULE_4_ORGANIC } from './module_4_organic';
import { MODULE_5_PHYSICAL } from './module_5_physical';

export const MODULES: Module[] = [
  MODULE_1_CHEM,
  MODULE_2_CHEM,
  MODULE_3_INORGANIC,
  MODULE_4_ORGANIC,
  MODULE_5_PHYSICAL
];