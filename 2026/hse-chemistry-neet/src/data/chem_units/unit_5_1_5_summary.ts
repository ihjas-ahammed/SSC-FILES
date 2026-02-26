import { Unit } from '../../types';

export const UNIT_5_1_5: Unit = {
  id: "unit-5-1-5",
  title: "Section Summary",
  description: "Review of Solutions",
  color: "duo-maroon",
  lessons: [
    {
      id: "sum-5-1-1",
      title: "Laws & Types",
      description: "Henry, Raoult",
      icon: "BookOpen",
      slides: [
        { id: "s-1", type: "theory", title: "Laws", content: "**Henry's:** $p = K_H x$ (Gas Solubility).\n**Raoult's:** $p_1 = p_1^0 x_1$ (Liquid/Volatile).\n**Ideal:** Obeys Raoult's. $\\Delta H = 0, \\Delta V = 0$.\n**Non-Ideal:** Positive (Min Azeotrope) or Negative (Max Azeotrope) Deviation." }
      ]
    },
    {
      id: "sum-5-1-2",
      title: "Colligative Properties",
      description: "Formulas",
      icon: "BookOpen",
      slides: [
        { id: "s-1", type: "theory", title: "Formulas", content: "1. RLVP: $\\Delta p/p^0 = x_2$\n2. $\\Delta T_b = i K_b m$\n3. $\\Delta T_f = i K_f m$\n4. $\\Pi = i C R T$\n\nUse **i** for electrolytes!" }
      ]
    }
  ]
};