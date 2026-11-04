import { Unit } from '../types';

export const UNIT_2_3_5: Unit = {
  id: "unit-2-3-5",
  title: "Section 2.3 Summary",
  description: "Review of Completeness Property",
  color: "duo-orange",
  lessons: [
    {
      id: "les-2-3-5-sum1", title: "Summary: Suprema & Infima", description: "Recap of Unit 2.3.1", icon: "BookOpen",
      slides: [
        { id: "s0", type: "theory", title: "Recap: Bounds", content: "In this unit, we rigorously defined boundaries of sets:\n\n- **Upper & Lower Bounds:** Numbers that exceed/fall below all elements in a set.\n- **Supremum (Least Upper Bound):** The smallest possible upper bound. $u = \\sup S$.\n- **Infimum (Greatest Lower Bound):** The largest possible lower bound. $w = \\inf S$.\n- **Epsilon Form:** $u = \\sup S$ iff for any $\\varepsilon > 0$, there is some $s \\in S$ such that $u - \\varepsilon < s$." },
        { id: "s1", type: "fill_in_blank", title: "Knowledge Retrieval", content: "If a set is not bounded above, it does not have a ___.", blankAnswer: "supremum" }
      ]
    },
    {
      id: "les-2-3-5-sum2", title: "Summary: Completeness Axiom", description: "Recap of Unit 2.3.2", icon: "BookOpen",
      slides: [
        { id: "s0", type: "theory", title: "Recap: The Completeness Property", content: "We introduced the final axiom of the real numbers:\n\n- **Completeness Axiom:** Every nonempty subset of $\\mathbb{R}$ that is bounded above has a supremum in $\\mathbb{R}$.\n- **Infimum Property:** By symmetry, every nonempty subset of $\\mathbb{R}$ that is bounded below has an infimum in $\\mathbb{R}$.\n\nThis axiom ensures the real number line has no \"holes\" and separates $\\mathbb{R}$ from $\\mathbb{Q}$." },
        { id: "s1", type: "numerical", title: "Knowledge Retrieval", content: "What is $\\sup \\{x \\in \\mathbb{R} : x < 10\\}$?", numericAnswer: 10, numericTolerance: 0 }
      ]
    },
    {
      id: "les-2-3-5-sum3", title: "Summary: Exercises on Bounds", description: "Recap of Unit 2.3.3 & 2.3.4", icon: "BookOpen",
      slides: [
        { id: "s0", type: "theory", title: "Recap: Exercises", content: "Through rigorous proofs, we discovered important interactions regarding suprema and infima:\n\n- $\\inf S = -\\sup\\{-s : s \\in S\\}$.\n- If a supremum belongs to the set itself, it is the maximum element (e.g., in a closed interval or finite set).\n- For sets $A$ and $B$, $\\sup(A \\cup B) = \\max\\{\\sup A, \\sup B\\}$.\n- If $S_0 \\subseteq S$, its bounds tighten: $\\inf S \\le \\inf S_0 \\le \\sup S_0 \\le \\sup S$." }
      ]
    }
  ]
};