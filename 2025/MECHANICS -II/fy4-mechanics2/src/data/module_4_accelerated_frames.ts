import { Module } from '../types';
import { SECTION_4_1_LINEARLY_ACCELERATING_FRAME } from './section_4_1_linearly_accelerating_frame';
import { SECTION_4_2_ROTATING_FRAME } from './section_4_2_rotating_frame';
import { SECTION_4_3_FICTITIOUS_FORCES } from './section_4_3_fictitious_forces';

export const MODULE_4_ACCELERATED_FRAMES: Module = {
  id: 'module-4-accelerated-frames',
  title: 'Module IV: Accelerated Reference Frames',
  description: 'Non-Inertial Frames, Fictitious Forces, and Earth\'s Rotation',
  sections:[
    SECTION_4_1_LINEARLY_ACCELERATING_FRAME,
    SECTION_4_2_ROTATING_FRAME,
    SECTION_4_3_FICTITIOUS_FORCES
  ],
  moduleSummary:[
    {
      id: "mod-sum-1",
      type: "theory",
      title: "Module Overview",
      content: "This module introduces physics in **Accelerated (Non-Inertial) Reference Frames**. We explore how to adapt Newton's laws when the observer's frame is accelerating or rotating."
    },
    {
      id: "mod-sum-2",
      type: "theory",
      title: "Unit 1: Fictitious Forces",
      content: "By applying vector transformations between an inertial frame $O$ and an accelerating frame $O'$, we find that Newton's second law takes the form $m\\ddot{\\mathbf{r}}_{O'} = \\mathbf{F} - m\\ddot{\\mathbf{r}}$. The extra term $-m\\ddot{\\mathbf{r}}$ acts like an additional force, which we call a **fictitious force** or pseudo-force [1.1]."
    },
    {
      id: "mod-sum-3",
      type: "theory",
      title: "Unit 2: Rotating Frames",
      content: "For a frame rotating at angular velocity $\\mathbf{\\Omega}$, time derivatives of vectors must account for the rotation of the axes themselves: $[d/dt]_{in} = [d/dt]_{rot} + \\mathbf{\\Omega} \\times$. This allows us to translate velocities and accelerations between observers."
    },
    {
      id: "mod-sum-4",
      type: "theory",
      title: "Unit 3: Centrifugal and Coriolis Forces",
      content: "Expanding the acceleration gives two key fictitious forces in a rotating frame:\n\n*   **Centrifugal Force**: $-m\\mathbf{\\Omega} \\times (\\mathbf{\\Omega} \\times \\mathbf{r})$. Pushes outwards, depends only on position.\n*   **Coriolis Force**: $-2m\\mathbf{\\Omega} \\times \\mathbf{v}_{rot}$. Deflects sideways, depends on velocity."
    },
    {
      id: "mod-sum-5",
      type: "theory",
      title: "Unit 4: The Foucault Pendulum (Preview)",
      content: "The Foucault Pendulum, invented in 1851, is a direct visual proof of Earth's rotation. Due to the Coriolis force, the plane of oscillation of a long pendulum slowly precesses over time, taking 24 hours to rotate at the poles and not rotating at all at the equator."
    }
  ]
};