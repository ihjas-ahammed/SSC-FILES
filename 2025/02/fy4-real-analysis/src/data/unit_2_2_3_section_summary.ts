import { Unit } from '../types';

export const UNIT_2_2_3: Unit = {
  id: "unit-2-2-3",
  title: "Section 2.2 Summary",
  description: "Review of Absolute Value and Neighborhoods",
  color: "duo-red",
  lessons: [
    {
      id: "les-2-2-3-sum1", title: "Summary: Absolute Value", description: "Recap of Unit 2.2.1", icon: "BookOpen",
      slides: [
        { id: "s0", type: "theory", title: "Recap: Absolute Value", content: "In this unit, we explored absolute value as distance:\n\n- **Definition:** $|a|$ equals $a$ (if $>0$), $0$ (if $0$), or $-a$ (if $<0$).\n- **Properties:** $|ab| = |a||b|$, and $|a| \\le c \\iff -c \\le a \\le c$.\n- **Triangle Inequality:** $|a + b| \\le |a| + |b|$. A vital tool for bounding errors and sums in analysis.\n- **Reverse Triangle Inequality:** $||a| - |b|| \\le |a - b|$, showing how distances relate to individual magnitudes." },
        { id: "s1", type: "fill_in_blank", title: "Knowledge Retrieval", content: "The generalized triangle inequality states that $|a + b + c| \\le |a| + |b| +$ ___.", blankAnswer: "|c|" }
      ]
    },
    {
      id: "les-2-2-3-sum2", title: "Summary: Neighborhoods", description: "Recap of Unit 2.2.2", icon: "BookOpen",
      slides: [
        { id: "s0", type: "theory", title: "Recap: Neighborhoods", content: "We connected absolute values to the geometry of the real line:\n\n- **Inequalities:** We solved conditions like $|2x+3| < 7$ and $|x-1| < |x|$ by expanding them into algebraic intervals or squaring both sides.\n- **Epsilon Neighborhoods:** Defined as $V_\\varepsilon(a) = \\{x : |x - a| < \\varepsilon\\}$, this represents an open interval $(a - \\varepsilon, a + \\varepsilon)$ centered at $a$.\n- **Uniqueness via Neighborhoods:** If a point $x$ is trapped in $V_\\varepsilon(a)$ for *every* $\\varepsilon > 0$, then $x$ must be exactly equal to $a$." },
        { id: "s1", type: "numerical", title: "Knowledge Retrieval", content: "If $V_\\varepsilon(5) = (4.5, 5.5)$, what is the value of $\\varepsilon$?", numericAnswer: 0.5, numericTolerance: 0 }
      ]
    }
  ]
};