import { Module } from '../types';
import { SECTION_3_1_WAVE_LIKE_PARTICLES } from './section_3_1_wave_like_particles';
import { SECTION_3_2_UNCERTAINTY } from './section_3_2_uncertainty';
import { SECTION_3_3_WAVE_PACKETS } from './section_3_3_wave_packets';

export const MODULE_3_WAVE_LIKE_PARTICLES: Module = {
  id: 'module-3-wave-like-particles',
  title: 'Module III: Wave-Like Properties of Particles',
  description: 'The discovery of matter waves and the dawn of quantum mechanics (Krane Ch. 4, §4.1 - 4.7)',
  sections: [
    SECTION_3_1_WAVE_LIKE_PARTICLES,
    SECTION_3_2_UNCERTAINTY,
    SECTION_3_3_WAVE_PACKETS
  ],
  moduleSummary: [
    {
      id: "mod-sum-wp-1",
      type: "theory",
      title: "Module III Overview",
      content: "This module flips the script of Module II. Instead of light acting as a particle, we discover that solid matter (electrons, neutrons, atoms) behaves as a wave. This wave-particle duality is the bedrock of Quantum Mechanics."
    },
    {
      id: "mod-sum-wp-2",
      type: "theory",
      title: "de Broglie Hypothesis",
      content: "**The Core Equation:**\n$\\lambda = \\frac{h}{p}$\n\nEvery moving object has a wavelength. For everyday objects, this wavelength is so infinitesimally small ($\\sim 10^{-34}$ m) that wave effects like diffraction are impossible to observe. But for electrons, $\\lambda$ is on the scale of atoms."
    },
    {
      id: "mod-sum-wp-3",
      type: "theory",
      title: "Experimental Proof",
      content: "**Davisson-Germer:** Reflected electrons off a nickel crystal, producing an interference peak exactly matching the predicted de Broglie wavelength.\n\n**Double-Slit:** Firing particles one-by-one creates a statistical build-up of an interference pattern. The wave determines the *probability* of where the particle will strike."
    },
    {
      id: "mod-sum-wp-4",
      type: "theory",
      title: "Complementarity",
      content: "Nature strictly enforces Bohr's Principle of Complementarity: an object can exhibit wave behavior (interference) or particle behavior (localized path), but **never both simultaneously** in the same measurement. Finding out 'which slit' an electron went through instantly destroys the wave pattern."
    },
    {
      id: "mod-sum-wp-5",
      type: "theory",
      title: "The Uncertainty Principle",
      content: "Because matter exists as spread-out wave packets, it is physically impossible to possess a perfectly defined position and momentum simultaneously.\n\n**Heisenberg Limits:**\n$\\Delta x \\Delta p_x \\ge \\frac{\\hbar}{2}$\n$\\Delta E \\Delta t \\ge \\frac{\\hbar}{2}$\n\nThis indeterminacy is a fundamental fabric of reality, not a flaw in measurement tools."
    },
    {
      id: "mod-sum-wp-6",
      type: "theory",
      title: "Wave Packets & Probability",
      content: "A localized particle is a wave packet moving at the group velocity ($v_g = v_{particle}$).\n\nThe wave function $\\psi$ is a probability amplitude. Its absolute square $|\\psi|^2$ gives the probability density of finding the particle at that location. This requires abandoning classical determinism for fundamental randomness."
    }
  ]
};