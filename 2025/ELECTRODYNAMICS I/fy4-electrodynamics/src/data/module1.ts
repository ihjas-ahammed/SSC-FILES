import { Course } from '../types';
import { SECTION_1_1 } from './chapter1_1';
import { SECTION_1_2 } from './chapter1_2';
import { SECTION_1_3 } from './chapter1_3';

export const MODULE_1: Course = {
  id: 'module-1',
  title: 'Module I: Vector Analysis',
  description: 'Vector algebra, differential and integral calculus, and curvilinear coordinates.',
  sections: [
    SECTION_1_1,
    SECTION_1_2,
    SECTION_1_3
  ],
  chapterSummary: [
    {
      id: "chap-sum-1",
      type: "theory",
      title: "Vector Algebra",
      content: "Vectors possess magnitude and direction. We use the **dot product** (yielding a scalar) to measure projection or parallelism, and the **cross product** (yielding a vector) to measure perpendicularity or area.\n\nThe **separation vector** ($\\cal{r} = \\mathbf{r} - \\mathbf{r}'$) is a crucial concept in electrodynamics; it points from the source location ($\\mathbf{r}'$) to the field point where we are taking measurements ($\\mathbf{r}$)."
    },
    {
      id: "chap-sum-2",
      type: "theory",
      title: "Differential Calculus",
      content: "The Del operator ($\\nabla$) acts on fields in three distinct ways:\n\n1. **Gradient ($\\nabla T$)**: Points in the direction of steepest ascent of a scalar field.\n2. **Divergence ($\\nabla \\cdot \\mathbf{v}$)**: A scalar measuring the outward flow (identifying sources and sinks).\n3. **Curl ($\\nabla \\times \\mathbf{v}$)**: A vector measuring the local swirl or rotation of a field.\n\n**Golden Rules:** The curl of a gradient is *always zero* (gradients are irrotational), and the divergence of a curl is *always zero* (curls are solenoidal)."
    },
    {
      id: "chap-sum-3",
      type: "theory",
      title: "Integral Calculus",
      content: "We explored integrals over paths (lines), surfaces (flux), and volumes. The three **Fundamental Theorems of Vector Calculus** link the integral of a derivative over a region to the function's value at the boundary:\n\n- **Gradient Theorem**: Integrates a gradient along a path to evaluate at the endpoints.\n- **Divergence (Gauss's) Theorem**: Integrates a divergence over a volume to evaluate the flux on the closed bounding surface.\n- **Curl (Stokes') Theorem**: Integrates a curl over an open surface to evaluate the circulation around the bounding closed loop."
    },
    {
      id: "chap-sum-4",
      type: "theory",
      title: "Curvilinear Coordinates",
      content: "To simplify problems with inherent symmetry, we use **Spherical** $(r, \\theta, \\phi)$ and **Cylindrical** $(s, \\phi, z)$ coordinates.\n\nCrucially, their unit basis vectors (like $\\mathbf{\\hat{r}}$ and $\\mathbf{\\hat{\\theta}}$) change direction depending on your position in space. Therefore, they **cannot be casually pulled outside of integrals** or derivatives. You must account for their geometric variations using the chain rule or refer to the standard tabulated derivative formulas."
    },
    {
      id: "chap-sum-5",
      type: "theory",
      title: "Problem Solving & Dirac Delta",
      content: "Applying the principles to specific problems reveals important nuances. Specifically, the divergence of $\\frac{1}{r^2}\\mathbf{\\hat{r}}$ evaluates to zero everywhere except at the origin, where it goes to infinity, yet its volume integral must equal $4\\pi$. \n\nThis necessitates the introduction of the **Dirac Delta function** $\\delta^3(\\mathbf{r})$, an infinitely sharp, infinitely dense mathematical spike that beautifully encapsulates the concept of a point charge at the origin."
    }
  ]
};