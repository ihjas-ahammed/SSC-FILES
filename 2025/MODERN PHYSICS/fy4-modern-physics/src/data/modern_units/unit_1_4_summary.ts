import { Unit } from '../../types';

export const UNIT_1_4_SUMMARY: Unit = {
  id: "unit-1-4-summary",
  title: "Section 1.4 Summary",
  description: "Relativistic Dynamics Recap",
  color: "duo-orange",
  lessons: [
    {
      id: "les-sum-1-4",
      title: "Summary: Relativistic Dynamics",
      description: "Key ideas from Section 1.4",
      icon: "BookCheck",
      slides: [
        {
          id: "sum-14",
          type: "theory",
          title: "Section 1.4 Summary",
          content: "**Relativistic Momentum:**\n$p = \\gamma m v$. Required to preserve momentum conservation in all frames.\n\n**Relativistic Energy:**\n- Kinetic Energy: $K = \\gamma mc^2 - mc^2$\n- Rest Energy: $E_0 = mc^2$\n- Total Energy: $E = K + E_0 = \\gamma mc^2$\n\n**Energy-Momentum Relation:**\n$E^2 = (pc)^2 + (mc^2)^2$. Useful triangle representation.\nMassless particles (photons): $m=0 \\implies E = pc$.\nExtreme relativistic approximation: $v \\to c \\implies E \\approx pc$.\n\n**Conservation Laws:**\nTotal Relativistic Energy ($E$) and Momentum ($p$) are conserved in isolated collisions. Inelastic collisions can convert kinetic energy into new rest mass ($M > \\sum m_i$)."
        }
      ]
    }
  ]
};