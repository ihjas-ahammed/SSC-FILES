import { Unit } from '../../types';

export const UNIT_1_3_SUMMARY: Unit = {
  id: "unit-1-3-summary",
  title: "Section 1.3 Summary",
  description: "Lorentz Transformation & Simultaneity Recap",
  color: "duo-orange",
  lessons: [
    {
      id: "les-sum-1-3",
      title: "Summary: Lorentz & Twins",
      description: "Key ideas from Section 1.3",
      icon: "BookCheck",
      slides: [
        {
          id: "sum-13",
          type: "theory",
          title: "Section 1.3 Summary",
          content: "**Lorentz Transformation:**\nCorrect transformation for all speeds.\n$x' = \\gamma(x-vt)$\n$t' = \\gamma(t - vx/c^2)$\n\n**Simultaneity:**\nEvents simultaneous in one frame are not in another. $\\Delta t = -vL_0/c^2$ (Leading clock lags).\n\n**Invariant Interval:**\n$(\\Delta s)^2 = (c\Delta t)^2 - (\Delta x)^2$ is constant for all frames.\n\n**Twin Paradox:**\nTraveling twin ages less. Asymmetry due to acceleration/frame switching."
        }
      ]
    }
  ]
};