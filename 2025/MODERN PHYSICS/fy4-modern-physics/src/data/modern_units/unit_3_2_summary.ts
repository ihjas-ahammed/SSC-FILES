import { Unit } from '../../types';

export const UNIT_3_2_SUMMARY: Unit = {
  id: "unit-3-2-summary",
  title: "Section 3.2 Summary",
  description: "Uncertainty Relationships Recap",
  color: "duo-orange",
  lessons: [
    {
      id: "les-sum-3-2-1",
      title: "Summary: Classical Uncertainty",
      description: "Key ideas from Unit 3.2.1",
      icon: "BookCheck",
      slides: [
        {
          id: "sum-321",
          type: "theory",
          title: "Unit 3.2.1 — Classical Wave Uncertainty",
          content: "All waves share fundamental limits based on the math of wave packets:\n\n**Position-Wavenumber:** $\\Delta x \\Delta k \\sim 1$\nTo construct a spatially narrow wave pulse (small $\\Delta x$), you must superimpose waves with a broad range of wavelengths (large $\\Delta k$).\n\n**Time-Frequency:** $\\Delta t \\Delta \\omega \\sim 1$\nA wave pulse of short time duration (small $\\Delta t$) inherently contains a wide spread of frequencies (large $\\Delta \\omega$ or bandwidth)."
        }
      ]
    },
    {
      id: "les-sum-3-2-2",
      title: "Summary: Heisenberg Uncertainty",
      description: "Key ideas from Unit 3.2.2",
      icon: "BookCheck",
      slides: [
        {
          id: "sum-322",
          type: "theory",
          title: "Unit 3.2.2 — Heisenberg Uncertainty Principle",
          content: "Applying classical wave limits to quantum matter waves ($p = \\hbar k$ and $E = \\hbar \\omega$) yields the absolute limits of nature:\n\n**Position and Momentum:**\n$$\\Delta x \\Delta p_x \\ge \\frac{\\hbar}{2}$$\nConstraining a particle's position forces its momentum to become wildly uncertain (e.g., electrons diffracting through slits, or proving electrons cannot be permanently trapped in a nucleus).\n\n**Energy and Time:**\n$$\\Delta E \\Delta t \\ge \\frac{\\hbar}{2}$$\nParticles with extremely short lifetimes (small $\\Delta t$) possess a 'broad' or highly uncertain rest mass (large $\\Delta E$).\n\nThese limits are inherent indeterminacies of reality, not mere flaws in our measuring tools."
        }
      ]
    }
  ]
};