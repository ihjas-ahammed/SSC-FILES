import { Unit } from '../../types';

export const UNIT_2_1_SUMMARY: Unit = {
  id: "unit-2-1-summary",
  title: "Section 2.1 Summary",
  description: "EM Waves & X-Ray Diffraction Recap",
  color: "duo-orange",
  lessons: [
    {
      id: "les-sum-2-1",
      title: "Summary: Waves & Bragg's Law",
      description: "Key ideas from Section 2.1",
      icon: "BookCheck",
      slides: [
        {
          id: "sum-21",
          type: "theory",
          title: "Section 2.1 Summary",
          content: "**EM Waves:** Intensity is proportional to the square of the Electric Field amplitude ($E_0^2$).\n\n**Interference:** Waves passing through double slits create interference patterns due to path length differences.\n\n**X-Ray Diffraction:** Because atomic spacing is $\\sim 0.1$ nm, X-rays are required to diffract off crystals.\n\n**Bragg's Law:** $2d \\sin\\theta = n\\lambda$. Predicts the angles at which constructive interference occurs when X-rays reflect off crystal planes."
        }
      ]
    }
  ]
};