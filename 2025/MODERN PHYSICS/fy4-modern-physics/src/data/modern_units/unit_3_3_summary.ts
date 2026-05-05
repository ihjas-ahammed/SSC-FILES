import { Unit } from '../../types';

export const UNIT_3_3_SUMMARY: Unit = {
  id: "unit-3-3-summary",
  title: "Section 3.3 Summary",
  description: "Wave Packets & Probability Recap",
  color: "duo-orange",
  lessons: [
    {
      id: "les-sum-3-3-1",
      title: "Summary: Wave Packets",
      description: "Key ideas from Unit 3.3.1",
      icon: "BookCheck",
      slides: [
        {
          id: "sum-331",
          type: "theory",
          title: "Unit 3.3.1 — Wave Packets",
          content: "**Wave Packets:** A localized particle is represented by adding together continuous waves of varying wavelengths to create a confined 'envelope'.\n\n**Velocities:**\n- *Phase Velocity* ($v_{\\text{phase}} = \\omega/k$): Speed of internal ripples.\n- *Group Velocity* ($v_{\\text{group}} = d\\omega/dk$): Speed of the wave packet envelope.\n\n**Key Proof:** For matter waves, the group velocity exactly equals the particle's classical velocity ($v_{\\text{group}} = v_{\\text{particle}}$). A particle cannot outrun its wave!\n\n**Spreading:** Due to momentum uncertainty, a localized wave packet will naturally spread out over time."
        }
      ]
    },
    {
      id: "les-sum-3-3-2",
      title: "Summary: Quantum Probability",
      description: "Key ideas from Unit 3.3.2",
      icon: "BookCheck",
      slides: [
        {
          id: "sum-332",
          type: "theory",
          title: "Unit 3.3.2 — Probability & Randomness",
          content: "**Fundamental Randomness:** Quantum mechanics Abandons classical determinism. Identical setups yield statistically distributed random outcomes.\n\n**Born Interpretation:** The wave function $\\psi(x)$ is a *probability amplitude*. Its absolute square is the *probability density*:\n$$P(x) = |\\psi(x)|^2$$\n\n**Normalization:** The total probability of finding the particle anywhere must be 100%:\n$$\\int_{-\\infty}^{+\\infty} |\\psi(x)|^2 \\, dx = 1$$\n\n**Expectation Values:** While single measurements are random, the average of many measurements is predictable using integrals over the probability density."
        }
      ]
    }
  ]
};