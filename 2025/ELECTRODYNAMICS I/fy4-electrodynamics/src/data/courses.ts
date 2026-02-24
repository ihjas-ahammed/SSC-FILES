import { Course } from '../types';
import { MODULE_1 } from './module1';
import { SECTION_2_1 } from './chapter2_1';
import { SECTION_2_2 } from './chapter2_2';
import { SECTION_2_3 } from './chapter2_3';
import { SECTION_2_4 } from './chapter2_4';
import { SECTION_2_5 } from './chapter2_5';
import { SECTION_3_1 } from './chapter3_1';
import { SECTION_3_2 } from './chapter3_2';

export const COURSES: Course[] = [
  MODULE_1,
  {
    id: 'module-2',
    title: 'Module II: Electrostatics',
    description: 'Electric fields, potentials, and work & energy.',
    sections: [
        SECTION_2_1,
        SECTION_2_2,
        SECTION_2_3,
        SECTION_2_4,
        SECTION_2_5
    ],
    chapterSummary: [
        {
          id: "chap-sum-2-1",
          type: "theory",
          title: "Chapter Summary: Electrostatics Intro",
          content: "In this beginning section on electrostatics, we established the fundamental building blocks: the **Principle of Superposition** and **Coulomb's Law**. We defined the **Electric Field** as the force per unit charge, shifting our focus from action-at-a-distance forces to local fields. We also learned how to transition from discrete point charges to continuous integrations over line, surface, and volume charge distributions."
        },
        {
          id: "chap-sum-2-2",
          type: "theory",
          title: "Chapter Summary: Divergence and Curl of E",
          content: "We explored the topological properties of the electric field using vector calculus.\n\n**Gauss's Law** ($\\nabla \\cdot \\mathbf{E} = \\rho/\\epsilon_0$) shows that charge acts as the source/sink of the field. It provides an incredibly fast way to compute fields for symmetric objects (spheres, infinite cylinders, and planes).\n\nWe also proved that the **Curl of E is zero** ($\\nabla \\times \\mathbf{E} = 0$). This guarantees that electrostatic fields are path-independent and conserve energy on closed loops, laying the groundwork for the concept of Electric Potential."
        },
        {
          id: "chap-sum-2-3",
          type: "theory",
          title: "Chapter Summary: Potential & Boundary Conditions",
          content: "Because the electrostatic field is irrotational ($\\nabla \\times \\mathbf{E} = 0$), the line integral is path-independent. This allows us to define a scalar **Electric Potential** $V$, where $\\mathbf{E} = -\\nabla V$. Replacing a vector field with a scalar potential drastically simplifies calculations.\n\nCombining this with Gauss's Law yields **Poisson's Equation** ($\\nabla^2 V = -\\rho/\\epsilon_0$), which reduces to **Laplace's Equation** in charge-free regions. Finally, we established the **Boundary Conditions**: the normal component of $\\mathbf{E}$ is discontinuous by $\\sigma/\\epsilon_0$ across a surface charge, while the tangential component and the potential $V$ remain continuous."
        },
        {
          id: "chap-sum-2-4",
          type: "theory",
          title: "Chapter Summary: Work, Energy & Conductors",
          content: "We quantified the **Work** required to assemble charge configurations, showing that energy is stored in the electric field itself with a density of $\\frac{\\epsilon_0}{2}E^2$. Because energy depends on the square of the field, it does *not* obey superposition.\n\nWe also explored **Ideal Conductors**. Inside a conductor, free charges rearrange instantly to ensure $\\mathbf{E}=0$ and $\\rho=0$, forcing all net charge to the surface and making the entire object an equipotential. This mechanism causes conductors to perfectly shield their interiors (Faraday cages). Finally, we defined **Capacitance** as the geometric ability of conductors to store charge ($C = Q/V$)."
        },
        {
          id: "chap-sum-2-5",
          type: "theory",
          title: "Chapter Summary: Problem Solving",
          content: "By applying these theories to rigorous problems, we discovered that electric pressure attempts to tear capacitors apart, that conductors perfectly shield internal cavities from external storms (but not vice versa), and that energy can be computed interchangeably from the charges or the field.\n\nWe also handled the nuances of boundary value discontinuities and evaluated complex integrals to find fields of finite wires, rings, and disks."
        }
    ]
  },
  {
    id: 'module-3',
    title: 'Module III: Magnetostatics',
    description: 'Lorentz force, Biot-Savart, and Ampère’s law.',
    sections: [
        SECTION_3_1,
        SECTION_3_2
    ],
    chapterSummary: [
        {
          id: "chap-sum-3-1",
          type: "theory",
          title: "Chapter Summary: Lorentz & Biot-Savart",
          content: "We transitioned from stationary charges to moving charges, entering the realm of **Magnetostatics**. The **Lorentz Force Law** ($\\mathbf{F} = Q(\\mathbf{v} \\times \\mathbf{B})$) reveals that magnetic forces are strictly perpendicular to velocity, causing cyclical motion (cyclotrons) and doing absolutely no work.\n\nWe then learned that steady currents ($\\nabla \\cdot \\mathbf{J} = 0$) generate these magnetic fields according to the **Biot-Savart Law**. Like Coulomb's law, it relies on superposition and $1/\\cal{r}^2$ distance fall-off, but its cross-product nature dictates that magnetic fields circle around their current sources via the right-hand rule."
        },
        {
          id: "chap-sum-3-2",
          type: "theory",
          title: "Chapter Summary: Ampère's Law & Vector Potential",
          content: "**Ampère's Law:** The fundamental equations of magnetostatics are $\\nabla \\cdot \\mathbf{B} = 0$ (no monopoles) and $\\nabla \\times \\mathbf{B} = \\mu_0 \\mathbf{J}$ (Ampère's law). The integral form $\\oint \\mathbf{B} \\cdot d\\mathbf{l} = \\mu_0 I_{enc}$ is extremely powerful for calculating fields in highly symmetric systems (infinite wires, planes, solenoids, toroids).\n\n**Vector Potential:** Because $\\nabla \\cdot \\mathbf{B} = 0$, we can express $\\mathbf{B}$ as the curl of a vector potential: $\\mathbf{B} = \\nabla \\times \\mathbf{A}$. Choosing the Coulomb gauge ($\\nabla \\cdot \\mathbf{A} = 0$) allows us to solve for $\\mathbf{A}$ using a Poisson-like integral. Finally, at a surface current $\\mathbf{K}$, the tangential component of $\\mathbf{B}$ is discontinuous, while the normal component of $\\mathbf{B}$ and the entire vector potential $\\mathbf{A}$ remain continuous."
        }
    ]
  }
];