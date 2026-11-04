import { Module } from '../types';
import { SECTION_4_1_LINEARLY_ACCELERATING_FRAME } from './section_4_1_linearly_accelerating_frame';
import { SECTION_4_2_ROTATING_FRAME } from './section_4_2_rotating_frame';
import { SECTION_4_3_FICTITIOUS_FORCES } from './section_4_3_fictitious_forces';
import { SECTION_4_4_CENTRIFUGAL_PLUMB_BOB } from './section_4_4_centrifugal_plumb_bob';
import { SECTION_4_5_CORIOLIS_FORCE } from './section_4_5_coriolis_force';
import { SECTION_4_6_FOUCAULT_PENDULUM } from './section_4_6_foucault_pendulum';

export const MODULE_4_ACCELERATED_FRAMES: Module = {
  id: 'module-4-accelerated-frames',
  title: 'Module IV: Accelerated Reference Frames',
  description: 'Non-Inertial Frames, Fictitious Forces, and Earth\'s Rotation',
  sections:[
    SECTION_4_1_LINEARLY_ACCELERATING_FRAME,
    SECTION_4_2_ROTATING_FRAME,
    SECTION_4_3_FICTITIOUS_FORCES,
    SECTION_4_4_CENTRIFUGAL_PLUMB_BOB,
    SECTION_4_5_CORIOLIS_FORCE,
    SECTION_4_6_FOUCAULT_PENDULUM
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
      content: "By applying vector transformations between an inertial frame $O$ and an accelerating frame $O'$, we find that Newton's second law takes the form $m\\ddot{\\mathbf{r}}_{O'} = \\mathbf{F} - m\\ddot{\\mathbf{r}}$. The extra term $-m\\ddot{\\mathbf{r}}$ acts like an additional force, which we call a **fictitious force** or pseudo-force."
    },
    {
      id: "mod-sum-3",
      type: "theory",
      title: "Unit 2: Rotating Frames",
      content: "For a frame rotating at angular velocity $\\mathbf{\\Omega}$, time derivatives of vectors must account for the rotation of the axes themselves: $[d/dt]_{in} =[d/dt]_{rot} + \\mathbf{\\Omega} \\times$. This allows us to translate velocities and accelerations between observers."
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
      title: "Unit 4: Effective Gravity",
      content: "The centrifugal force on the Earth alters the perceived direction of gravity. We define **effective gravity** as $\\mathbf{g}_e = \\mathbf{g} - \\mathbf{\\Omega} \times (\\mathbf{\\Omega} \times \\mathbf{r})$. A plumb bob aligns with $\\mathbf{g}_e$, pointing slightly away from the geometric center. This tangential centrifugal force is also what causes the Earth's equatorial bulge."
    },
    {
      id: "mod-sum-6",
      type: "theory",
      title: "Unit 5: The Coriolis Force",
      content: "Because of the Coriolis force, moving objects are deflected. A falling body is deflected slightly to the East. A projectile fired in any horizontal direction in the Northern Hemisphere is deflected to its right. We solve these problems using the method of successive approximations, because the Coriolis force is velocity-dependent."
    },
    {
      id: "mod-sum-7",
      type: "theory",
      title: "Unit 6: The Foucault Pendulum",
      content: "The Foucault Pendulum is a direct visual proof of Earth's rotation. Due to the Coriolis force, the plane of oscillation of a long pendulum slowly precesses over time at a rate of $\\Omega \\cos \\lambda$. It rotates once a day at the poles and does not rotate at all at the equator."
    }
  ]
};