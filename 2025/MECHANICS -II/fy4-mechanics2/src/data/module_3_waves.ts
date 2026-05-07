import { Module } from '../types';
import { SECTION_3_1_WAVES_IN_STRING } from './section_3_1_waves_in_string';
import { SECTION_3_2_DIRECT_SOLUTION } from './section_3_2_direct_solution';
import { SECTION_3_3_FOURIER_SERIES } from './section_3_3_fourier_series';
import { SECTION_3_4_STANDING_TRAVELING } from './section_3_4_standing_traveling';
import { SECTION_3_5_SPECIAL_CASE } from './section_3_5_special_case';
import { SECTION_3_6_ENERGY } from './section_3_6_energy';

export const MODULE_3_WAVES: Module = {
  id: 'module-3-waves',
  title: 'Module III: Waves',
  description: 'Traveling Waves, Wave Equation, and Energy Transport',
  sections:[
    SECTION_3_1_WAVES_IN_STRING,
    SECTION_3_2_DIRECT_SOLUTION,
    SECTION_3_3_FOURIER_SERIES,
    SECTION_3_4_STANDING_TRAVELING,
    SECTION_3_5_SPECIAL_CASE,
    SECTION_3_6_ENERGY
  ],
  moduleSummary:[
    {
      id: "mod-sum-1",
      type: "theory",
      title: "Module Overview",
      content: "This module introduces the physics of **Waves**. We begin by analyzing traveling waves on a stretched string, establishing the fundamental parameters that describe wave motion."
    },
    {
      id: "mod-sum-2",
      type: "theory",
      title: "Unit 1: Wave Parameters",
      content: "We defined a wave as an oscillation that transports energy and momentum without transporting mass. Key parameters include Amplitude $A$, Wavelength $\\lambda$, Period $\\tau$, and Frequency $f$. The phase velocity links them: $v = \\lambda f = \\omega/k$."
    },
    {
      id: "mod-sum-3",
      type: "theory",
      title: "Unit 2: The Wave Equation",
      content: "By applying Newton's Second Law to an infinitesimal segment of a string, and utilizing the small angle approximation, we derived the 1D Linear Wave Equation: $\\frac{\\partial^2 y}{\\partial x^2} = \\frac{1}{v^2} \\frac{\\partial^2 y}{\\partial t^2}$, where $v = \\sqrt{F/\\rho}$."
    },
    {
      id: "mod-sum-4",
      type: "theory",
      title: "Unit 3: Separation of Variables",
      content: "To solve the wave equation, we use the ansatz $y(x,t) = X(x)T(t)$. This separates the PDE into two coupled ordinary differential equations (simple harmonic oscillators). The general solution is a linear combination of spatial and temporal sines and cosines: $y(x,t) = (A \\cos kx + B \\sin kx)(C \\cos \\omega t + D \\sin \\omega t)$."
    },
    {
      id: "mod-sum-5",
      type: "theory",
      title: "Unit 4: Fourier Series",
      content: "Any periodic function can be represented as an infinite sum of sines and cosines. We use Fourier analysis to match the general solution of the wave equation to complex initial conditions, such as the shape of a plucked string. Coefficients are found using orthogonality relations."
    },
    {
      id: "mod-sum-6",
      type: "theory",
      title: "Unit 5: Boundary Conditions",
      content: "When a string is fixed at both ends, the boundary conditions $y(0,t)=y(L,t)=0$ quantize the allowed wave numbers to $k_n = n\\pi/L$. This leads to discrete normal modes or harmonics with frequencies $f_n = n f_1$."
    },
    {
      id: "mod-sum-7",
      type: "theory",
      title: "Unit 6: Traveling Waves",
      content: "A wave traveling without changing its shape can be described by a function of the form $f(x \\pm vt)$. We verified that any twice-differentiable function of this argument automatically satisfies the linear wave equation."
    },
    {
      id: "mod-sum-8",
      type: "theory",
      title: "Unit 7: Wave Superposition",
      content: "We demonstrated that a standing wave can be mathematically understood as the superposition (sum) of two identical waves traveling in opposite directions. Applying boundary conditions to this sum yields the familiar standing wave equations and quantized wave numbers."
    },
    {
      id: "mod-sum-9",
      type: "theory",
      title: "Unit 8: Wave Energetics",
      content: "A mechanical wave contains both kinetic energy (from transverse motion) and potential energy (from string stretching). We derived that the total energy is proportional to the square of the amplitude: $E \propto A^2$."
    },
    {
      id: "mod-sum-10",
      type: "theory",
      title: "Unit 9: Interface Reflection",
      content: "When a wave hits a boundary where its speed changes, it splits into reflected and transmitted components. By enforcing continuity of displacement and slope, we derived the reflection coefficient $(v_2-v_1)/(v_1+v_2)$ and transmission coefficient $2v_2/(v_1+v_2)$."
    }
  ]
};