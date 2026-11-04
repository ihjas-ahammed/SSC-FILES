import { Unit } from '../types';

export const UNIT_3_5_4: Unit = {
  id: "unit-3-5-4",
  title: "Section 3.5 Summary",
  description: "Review of the Cauchy Criterion and Contractive Sequences",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-5-4-sum1", title: "Summary: The Cauchy Criterion", description: "Recap of Unit 3.5.1 and 3.5.2", icon: "BookOpen",
      slides: [
        { id: "s0", type: "theory", title: "Recap: Cauchy Sequences", content: "In this section, we explored sequences that converge 'in on themselves':\n\n- **Cauchy Sequence:** A sequence $(x_n)$ is Cauchy if for every $\\epsilon > 0$, there exists an $H$ such that the distance $|x_n - x_m| < \\epsilon$ for all $n, m \\ge H$.\n- **Cauchy Convergence Criterion:** A sequence of real numbers converges if and only if it is a Cauchy sequence. This is a profound consequence of the Completeness Property of $\\mathbb{R}$.\n- **Pseudo-Cauchy Trap:** A sequence where consecutive terms get arbitrarily close ($\\lim |x_{n+1} - x_n| = 0$) is NOT necessarily Cauchy (e.g., $x_n = \\sqrt{n}$ or $x_n = \\ln n$). The distance between *any* two terms in the tail must be bounded." },
        { id: "s1", type: "fill_in_blank", title: "Knowledge Retrieval", content: "The Cauchy Convergence Criterion allows us to prove a sequence converges without knowing the specific ___ it converges to.", blankAnswer: "limit" }
      ]
    },
    {
      id: "les-3-5-4-sum2", title: "Summary: Contractive Sequences", description: "Recap of Unit 3.5.1 and 3.5.3", icon: "BookOpen",
      slides: [
        { id: "s0", type: "theory", title: "Recap: Contractive Sequences", content: "We established a highly practical test for proving sequences converge, especially those generated iteratively:\n\n- **Definition:** A sequence is contractive if there is a constant $C$ ($0 < C < 1$) such that $|x_{n+2} - x_{n+1}| \\le C|x_{n+1} - x_n|$ for all $n$.\n- **Convergence:** Every contractive sequence is a Cauchy sequence, and therefore converges.\n- **Error Estimation:** Contractive sequences provide formulas to determine exactly how far a term $x_n$ is from the limit $x^*$, such as $|x^* - x_n| \\le \\frac{C^{n-1}}{1-C}|x_2 - x_1|$. This is invaluable for computational approximations." },
        { id: "s1", type: "numerical", title: "Knowledge Retrieval", content: "If a sequence is contractive, the constant $C$ must be strictly less than what number?", numericAnswer: 1, numericTolerance: 0 }
      ]
    }
  ]
};