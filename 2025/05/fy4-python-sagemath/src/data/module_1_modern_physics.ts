import { Module } from '../types';
import { SECTION_1_1_CLASSICAL_FOUNDATIONS } from './section_1_1_classical_foundations';

export const MODULE_1_MODERN_PHYSICS: Module = {
  id: 'module-1-modern-physics',
  title: 'Module I: The Special Theory of Relativity',
  description: 'From classical frames to Einstein\'s revolution (Krane Ch. 2, §2.1–2.9)',
  sections: [
    SECTION_1_1_CLASSICAL_FOUNDATIONS
  ],
  moduleSummary: [
    {
      id: "mod-sum-mp-1",
      type: "theory",
      title: "Module I Overview",
      content: "This module traces the path from **classical (Galilean) relativity** to Einstein's **Special Theory of Relativity**."
    },
    {
      id: "mod-sum-mp-2",
      type: "theory",
      title: "Section 1.1 Summary",
      content: "**Classical Foundations:**\n- Galilean transformation: $x' = x - vt$.\n- Michelson-Morley null result proved ether doesn't exist."
    },
    {
      id: "mod-sum-mp-3",
      type: "theory",
      title: "Section 1.2 Summary",
      content: "**Einstein's Postulates:**\n- Postulate 1: Relativity Principle.\n- Postulate 2: Constant c.\n- Time Dilation & Length Contraction."
    },
    {
      id: "mod-sum-mp-4",
      type: "theory",
      title: "Section 1.3 Summary",
      content: "**Lorentz & Simultaneity:**\n- Lorentz Transformation integrates space and time.\n- Simultaneity is relative.\n- Twin Paradox is resolved by acceleration/frame jumping."
    },
    {
      id: "mod-sum-mp-5",
      type: "theory",
      title: "Section 1.4 Summary",
      content: "**Relativistic Dynamics:**\n- Momentum: $p = \\gamma m v$.\n- Energy: $E = \\gamma mc^2 = K + mc^2$.\n- Invariant: $E^2 - (pc)^2 = (mc^2)^2$.\n- Conservation laws apply to total relativistic energy and momentum."
    },
    {
      id: "mod-sum-mp-6",
      type: "theory",
      title: "Section 1.5 Summary",
      content: "**Experimental Tests:**\n- Pion decay confirms c is constant.\n- Muon decay confirms time dilation.\n- Electron momentum confirms relativistic mass-energy scaling.\n- Ives-Stilwell confirms relativistic Doppler."
    }
  ]
};