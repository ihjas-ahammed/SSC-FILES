import { Course } from '../types';
import { MODULE_1_SECTIONS } from './module1';
import { MODULE_2_SECTIONS } from './module2';
import { MODULE_3_SECTIONS } from './module3';
import { MODULE_4_SECTIONS } from './module4';

export const COURSES: Course[] = [
  {
    id: 'module-1',
    title: 'Module I: Central Force Motion',
    description: 'The Kepler Problem, Orbits, and Central Forces.',
    sections: MODULE_1_SECTIONS
  },
  {
    id: 'module-2',
    title: 'Module II: Harmonic Motion',
    description: 'Springs, Pendulums, and Oscillators.',
    sections: MODULE_2_SECTIONS
  },
  {
    id: 'module-3',
    title: 'Module III: Waves',
    description: 'Stretched strings, Wave equations, and Energy Flow.',
    sections: MODULE_3_SECTIONS 
  },
  {
    id: 'module-4',
    title: 'Module IV: Accelerated Frames',
    description: 'Linearly accelerating systems and rotating coordinates.',
    sections: MODULE_4_SECTIONS
  }
];