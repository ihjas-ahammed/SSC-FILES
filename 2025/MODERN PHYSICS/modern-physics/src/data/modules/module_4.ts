import { Course, Section } from '../../types';

const SECTIONS: Section[] = [
  {
    id: 'sect-4-1-atomic-models',
    title: 'Early Atomic Models',
    description: 'Thomson and Rutherford Models.',
    color: 'duo-gray',
    units: [
      {
        id: 'unit-4-1-basics',
        title: 'Basic Properties',
        description: 'Atoms and Scattering.',
        color: 'duo-gray',
        lessons: [
          {
            id: 'lesson-4-1-scattering',
            title: 'Scattering Experiments',
            description: 'Probing the atom.',
            icon: 'Disc',
            slides: []
          }
        ]
      },
      {
        id: 'unit-4-2-rutherford',
        title: 'Rutherford Model',
        description: 'The Nuclear Atom.',
        color: 'duo-gray',
        lessons: [
          {
            id: 'lesson-4-2-nucleus',
            title: 'The Nucleus',
            description: 'Discovery of the nucleus.',
            icon: 'Circle',
            slides: []
          },
          {
            id: 'lesson-4-2-scattering-formula',
            title: 'Rutherford Formula',
            description: 'Scattering formula and closest approach.',
            icon: 'CornerDownRight',
            slides: []
          }
        ]
      }
    ]
  },
  {
    id: 'sect-4-2-bohr-model',
    title: 'The Bohr Model',
    description: 'Quantization of the Atom.',
    color: 'duo-gray',
    units: [
      {
        id: 'unit-4-3-spectra',
        title: 'Line Spectra',
        description: 'Atomic emission spectra.',
        color: 'duo-gray',
        lessons: [
          {
            id: 'lesson-4-3-spectra',
            title: 'Line Spectra',
            description: 'Balmer series and others.',
            icon: 'BarChart',
            slides: []
          }
        ]
      },
      {
        id: 'unit-4-4-bohr',
        title: 'Bohr\'s Theory',
        description: 'Postulates and Hydrogen Atom.',
        color: 'duo-gray',
        lessons: [
          {
            id: 'lesson-4-4-postulates',
            title: 'Bohr\'s Postulates',
            description: 'Stationary states and transitions.',
            icon: 'List',
            slides: []
          },
          {
            id: 'lesson-4-4-hydrogen',
            title: 'The Hydrogen Atom',
            description: 'Radii and Energy levels.',
            icon: 'Atom',
            slides: []
          }
        ]
      },
      {
        id: 'unit-4-5-validation',
        title: 'Validation & Failure',
        description: 'Franck-Hertz and Correspondence.',
        color: 'duo-gray',
        lessons: [
          {
            id: 'lesson-4-5-franck',
            title: 'Franck-Hertz',
            description: 'Confirming energy levels.',
            icon: 'Activity',
            slides: []
          },
          {
            id: 'lesson-4-5-failure',
            title: 'Failure of Bohr Model',
            description: 'Limitations of the theory.',
            icon: 'XCircle',
            slides: []
          }
        ]
      }
    ]
  }
];

export const MODULE_4_COURSE: Course = {
  id: 'mod-4-atom',
  title: 'Module IV: Atomic Models',
  description: 'Rutherford-Bohr Model of the Atom.',
  sections: SECTIONS
};