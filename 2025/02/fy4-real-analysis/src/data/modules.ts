import { Module } from '../types';
import { MODULE_1 } from './module_1';
import { MODULE_2 } from './module_2';
import { MODULE_3 } from './module_3';
import { MODULE_4 } from './module_4';
import { EXAM_MODULE_1 } from './exam_module_1';
import { EXAM_MODULE_2 } from './exam_module_2';
import { EXAM_MODULE_3 } from './exam_module_3';
import { EXAM_MODULE_4 } from './exam_module_4';

export const MODULES: Module[] =[
  { ...MODULE_1, examPaper: EXAM_MODULE_1 },
  { ...MODULE_2, examPaper: EXAM_MODULE_2 },
  { ...MODULE_3, examPaper: EXAM_MODULE_3 },
  { ...MODULE_4, examPaper: EXAM_MODULE_4 }
];