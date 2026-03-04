import { Module } from '../types';
import { SECTION_2_1_SPRINGS_PENDULUMS } from './section_2_1_springs_pendulums';
import { SECTION_2_2_SOLVING_ODE } from './section_2_2_solving_ode';
import { SECTION_2_3_OSCILLATORS } from './section_2_3_oscillators';
import { SECTION_2_4_FORCED_OSCILLATOR } from './section_2_4_forced_oscillator';
import { SECTION_2_5_Q_FACTOR } from './section_2_5_q_factor';
import { SECTION_2_6_ELECTRICAL_RESONANCE } from './section_2_6_electrical_resonance';

export const MODULE_2_HARMONIC_MOTION: Module = {
  id: 'module-2-harmonic',
  title: 'Module II: Harmonic Motion',
  description: 'Oscillations, Damping, and Resonance',
  sections: [
    SECTION_2_1_SPRINGS_PENDULUMS,
    SECTION_2_2_SOLVING_ODE,
    SECTION_2_3_OSCILLATORS,
    SECTION_2_4_FORCED_OSCILLATOR,
    SECTION_2_5_Q_FACTOR,
    SECTION_2_6_ELECTRICAL_RESONANCE
  ],
  moduleSummary: [
    {
      id: "mod-sum-1",
      type: "theory",
      title: "Module Overview",
      content: "This module explores the physics of **Oscillations**. From simple springs to complex damped systems, harmonic motion is one of the most fundamental models in physics."
    },
    {
      id: "mod-sum-2",
      type: "theory",
      title: "Key Concepts",
      content: "1. **SHM:** Restoring force proportional to displacement ($F = -kx$).\n2. **Damping:** Friction forces proportional to velocity ($F = -bv$) cause decay.\n3. **Resonance:** Driving a system at its natural frequency causes amplitude spikes."
    }
  ]
};