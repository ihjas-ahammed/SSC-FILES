import { Module } from '../types';
import { MODULE_1_SEMI } from './module_1_semiconductors';
import { MODULE_2_DIODES } from './module_2_diodes';
import { MODULE_3_TRANSISTORS } from './module_3_transistors';
import { MODULE_4_DIGITAL } from './module_4_digital';

export const MODULES: Module[] = [
  MODULE_1_SEMI,
  MODULE_2_DIODES,
  MODULE_3_TRANSISTORS,
  MODULE_4_DIGITAL
];