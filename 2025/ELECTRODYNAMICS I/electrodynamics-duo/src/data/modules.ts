import { ElectronicsModule } from '../types';
import { MODULE_1_CONTENT } from './module_1';
import { MODULE_2_CONTENT } from './module_2';
import { MODULE_3_CONTENT } from './module_3';
import { MODULE_4_CONTENT } from './module_4';

export const MODULES: ElectronicsModule[] = [
  {
    id: 'module-1',
    title: 'Module I: Vector Analysis',
    description: 'Vector Algebra, Differential & Integral Calculus, Coordinates.',
    sections: MODULE_1_CONTENT
  },
  {
    id: 'module-2',
    title: 'Module II: Electrostatics',
    description: 'Electric Fields, Potentials, Gauss Law, Conductors.',
    sections: MODULE_2_CONTENT
  },
  {
    id: 'module-3',
    title: 'Module III: Magnetostatics',
    description: 'Lorentz Force, Biot-Savart, Ampere’s Law.',
    sections: MODULE_3_CONTENT
  },
  {
    id: 'module-4',
    title: 'Module IV: Electrical Measurements',
    description: 'Kirchhoff’s Laws, Bridges, Potentiometers, Network Theorems.',
    sections: MODULE_4_CONTENT
  }
];