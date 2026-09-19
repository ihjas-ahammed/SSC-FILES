/* ══════════════════════════════════════════════════════════════════════════
   Quantum Mechanics syllabus views over the shared content pool.
   Content nodes are keyed to Griffiths 3e and Zettili 2e numbers;
   a syllabus is only a MAPPING. Adding an entrance (JAM) view
   is a mapping over the same concepts.
   ══════════════════════════════════════════════════════════════════════════ */
const DATA_KIND = 'live';

const SYLLABI = [
  {
    id: 'qm1', title: 'Quantum Mechanics I', code: 'PHY5CJ301', sem: 'V', book: 'Griffiths 3e & Zettili 2e',
    blurb: 'The wave function, time-independent Schrödinger equation, Hilbert space formalism, and quantum harmonic oscillator.',
    modules: [
      {
        id: 'qm1.m1', n: 'I', title: 'The Wave Function', marks: 10,
        secs: ['1.1', '1.2', '1.3', '1.4', '1.5', '1.6']
      },
      {
        id: 'qm1.m2', n: 'II', title: 'Time-Independent Schrödinger Equation', marks: 20,
        secs: ['2.1', '2.2', '2.3', '2.4', '2.5', '2.6']
      },
      {
        id: 'qm1.m3', n: 'III', title: 'Mathematical Tools of Quantum Mechanics', marks: 25,
        secs: ['3.1', '3.2', '3.3', '3.4', '3.5', '3.6', '3.7']
      },
      {
        id: 'qm1.m4', n: 'IV', title: 'The Quantum Harmonic Oscillator & 3D Potentials', marks: 15,
        secs: ['4.1', '4.2', '4.3', '4.4']
      }
    ]
  },
  {
    id: 'qm2', title: 'Quantum Mechanics II', code: 'PHY7CJ401', sem: 'VII', book: 'Griffiths 3e & Zettili 2e',
    blurb: 'Central potentials, hydrogen atom, angular momentum & spin, approximation methods (perturbation, variational, WKB), and scattering theory.',
    needs: 'qm1',
    modules: [
      {
        id: 'qm2.m1', n: 'I', title: 'The Central Potential & Hydrogen Atom', marks: 14,
        secs: ['5.1', '5.2', '5.3', '5.4']
      },
      {
        id: 'qm2.m2', n: 'II', title: 'Angular Momentum & Spin', marks: 20,
        secs: ['6.1', '6.2', '6.3', '6.4', '6.5']
      },
      {
        id: 'qm2.m3', n: 'III', title: 'Approximation Methods', marks: 24,
        secs: ['7.1', '7.2', '7.3', '7.4']
      },
      {
        id: 'qm2.m4', n: 'IV', title: 'Scattering Theory', marks: 12,
        secs: ['8.1', '8.2', '8.3', '8.4']
      }
    ]
  },
  {
    id: 'qme', title: 'Quantum Mechanics for Entrance', code: 'IIT JAM PH', sem: '—',
    blurb: 'Complete IIT JAM Physics Quantum Mechanics syllabus — matter waves, uncertainty relations, box potentials, barriers & tunneling, harmonic oscillators, and past paper problem solving.',
    needs: 'qm1',
    modules: [
      {
        id: 'qme.t1', n: 'E1', title: 'Wave-Particle Duality & Matter Waves', secs: ['E1'],
        builds: ['c.1.1.1', 'c.1.2.1'],
        why: 'The wave character of material particles and de Broglie wavelengths.'
      },
      {
        id: 'qme.t2', n: 'E2', title: 'Uncertainty Principle & Energy Estimates', secs: ['E2'],
        builds: ['c.1.6.1'],
        why: 'Estimating ground state energies and sizes of bound systems using delta x * delta p >= hbar/2.'
      },
      {
        id: 'qme.t3', n: 'E3', title: 'Operators, Commutators & Expectation Values', secs: ['E3'],
        builds: ['c.1.5.2', 'c.1.5.3'],
        why: 'Quantum observables, commutation relations, and time evolution of averages.'
      },
      {
        id: 'qme.t4', n: 'E4', title: 'Schrödinger Equation in 1D, 2D, 3D Boxes', secs: ['E4'],
        builds: ['c.1.1.2', 'c.1.4.1'],
        why: 'Boundary value problems, quantization, energy levels, and spatial degeneracies.'
      },
      {
        id: 'qme.t5', n: 'E5', title: '1D Quantum Harmonic Oscillator', secs: ['E5'],
        builds: ['c.1.5.3'],
        why: 'Parabolic potential, zero-point energy, and algebraic ladder operators.'
      },
      {
        id: 'qme.t6', n: 'E6', title: 'Step Potential, Barrier & Quantum Tunneling', secs: ['E6'],
        builds: ['c.1.5.4'],
        why: 'Wave reflection, transmission coefficients, and tunneling through classical turning points.'
      }
    ]
  },
  {
    id: 'qm_ext', title: 'Advanced Quantum Mechanics (Supplementary)', code: 'BOOK EXTENSIONS', sem: '—',
    blurb: 'Complete chapters from Griffiths 3e & Zettili 2e outside the university examination syllabus — identical particles, symmetries, time-dependent perturbation theory & Fermi\'s Golden Rule, quantum foundations & Bell\'s theorem, and relativistic quantum mechanics.',
    ext: true,
    modules: [
      {
        id: 'qm_ext.m1', n: 'Ext 1', title: 'Identical Particles & Permutation Symmetry', ext: true,
        secs: ['X1.1', 'X1.2']
      },
      {
        id: 'qm_ext.m2', n: 'Ext 2', title: 'Symmetries & Conservation Laws', ext: true,
        secs: ['X2.1', 'X2.2']
      },
      {
        id: 'qm_ext.m3', n: 'Ext 3', title: 'Time-Dependent Perturbation Theory & Dynamics', ext: true,
        secs: ['X3.1', 'X3.2']
      },
      {
        id: 'qm_ext.m4', n: 'Ext 4', title: 'Quantum Foundations & Information', ext: true,
        secs: ['X4.1', 'X4.2']
      },
      {
        id: 'qm_ext.m5', n: 'Ext 5', title: 'Relativistic Quantum Mechanics', ext: true,
        secs: ['X5.1', 'X5.2']
      }
    ]
  }
];

/* Section titles straight from Griffiths 3e and Zettili 2e */
const SECTITLE = {
  '1.1': 'The Schrödinger Equation',
  '1.2': 'The Statistical Interpretation',
  '1.3': 'Probability Theory',
  '1.4': 'Normalization',
  '1.5': 'Momentum and Operators',
  '1.6': 'The Uncertainty Principle',

  '2.1': 'Stationary States',
  '2.2': 'The Infinite Square Well',
  '2.3': 'The Free Particle',
  '2.4': 'Conservation of Probability & Probability Current',
  '2.5': 'The Potential Step',
  '2.6': 'The Potential Barrier & Tunneling',

  '3.1': 'Hilbert Space & Dirac Notation',
  '3.2': 'Hermitian Operators & Observables',
  '3.3': 'Commutator Algebra',
  '3.4': 'Generalized Uncertainty Relations',
  '3.5': 'Functions of Operators & Unitary Transformations',
  '3.6': 'Discrete & Continuous Representations',
  '3.7': 'Matrix & Wave Mechanics',

  '4.1': 'The Quantum Harmonic Oscillator',
  '4.2': '3D Problems in Cartesian Coordinates',
  '4.3': 'The Box Potential & Degeneracy',
  '4.4': 'The 3D Harmonic Oscillator',

  '5.1': 'Schrödinger Equation in Spherical Coordinates',
  '5.2': 'The Angular Equation & Spherical Harmonics',
  '5.3': 'The Radial Equation & Infinite Spherical Well',
  '5.4': 'The Hydrogen Atom',

  '6.1': 'Orbital Angular Momentum & General Formalism',
  '6.2': 'Matrix & Geometrical Representation of Angular Momentum',
  '6.3': 'Eigenfunctions of Angular Momentum ($L_z$ & $L^2$)',
  '6.4': 'Spin 1/2 & Pauli Matrices',
  '6.5': 'Addition of Angular Momenta & Clebsch–Gordan Coefficients',

  '7.1': 'Time-Independent Perturbation Theory',
  '7.2': 'Degenerate Perturbation Theory',
  '7.3': 'The Variational Method',
  '7.4': 'The WKB Approximation',

  '8.1': 'Classical Scattering Theory',
  '8.2': 'Quantum Scattering & Phase Shifts',
  '8.3': 'Partial Wave Analysis',
  '8.4': 'The Born Approximation',

  'E1': 'Wave-Particle Duality & Matter Waves',
  'E2': 'Uncertainty Principle & Energy Estimates',
  'E3': 'Operators, Commutators & Expectation Values',
  'E4': 'Schrödinger Equation in 1D, 2D, 3D Boxes',
  'E5': '1D Quantum Harmonic Oscillator',
  'E6': 'Step Potential, Barrier & Quantum Tunneling',

  'X1.1': 'Identical Particles & Permutation Symmetry',
  'X1.2': 'Two-Electron Systems, Exchange Force & Helium',
  'X2.1': 'Continuous Symmetries & Noether\'s Theorem',
  'X2.2': 'Discrete Symmetries: Parity & Time Reversal',
  'X3.1': 'Time-Dependent Perturbation Theory & Rabi Oscillations',
  'X3.2': 'Fermi\'s Golden Rule & Adiabatic Approximation',
  'X4.1': 'The EPR Paradox & Bell\'s Theorem',
  'X4.2': 'Quantum Entanglement & The Density Matrix',
  'X5.1': 'The Klein-Gordon Equation for Spin-0 Bosons',
  'X5.2': 'The Dirac Equation for Spin-1/2 Fermions'
};

/* Sections outside the core exam syllabus (supplementary topics).
   They are loaded and available for study, but do not count towards the exam progress meter. */
const EXT_SECS = {
  'X1.1': true,
  'X1.2': true,
  'X2.1': true,
  'X2.2': true,
  'X3.1': true,
  'X3.2': true,
  'X4.1': true,
  'X4.2': true,
  'X5.1': true,
  'X5.2': true
};
