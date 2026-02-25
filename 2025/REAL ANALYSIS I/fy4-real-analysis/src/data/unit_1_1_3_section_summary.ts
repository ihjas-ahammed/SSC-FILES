import { Unit } from '../types';

export const UNIT_1_1_3: Unit = {
  id: "unit-1-1-3",
  title: "Section 1.1 Summary",
  description: "Review of Sets, Functions, and Mappings",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-1-3-sum1", title: "Summary: Set Fundamentals", description: "Recap of Unit 111", icon: "BookOpen",
      slides: [
        { id: "s0", type: "theory", title: "Recap: Set Fundamentals", content: "In the first unit, we established the mathematical foundations for working with collections of objects:\n\n- **Set Equality:** $A = B$ is proven by showing $A \\subseteq B$ and $B \\subseteq A$.\n- **Operations:** Union $\\cup$, Intersection $\\cap$, and Complement $\\setminus$.\n- **De Morgan's Laws:** Revealed how taking a complement flips unions into intersections and vice versa." },
        { id: "s1", type: "fill_in_blank", title: "Knowledge Retrieval", content: "The mathematical symbol $\\cap$ denotes the ___ of two sets.", blankAnswer: "intersection" }
      ]
    },
    {
      id: "les-1-1-3-sum2", title: "Summary: Mapping & Composition", description: "Recap of Unit 112", icon: "BookOpen",
      slides: [
        { id: "s0", type: "theory", title: "Recap: Mapping & Composition", content: "In the second unit, we connected sets together using pairs and rules:\n\n- **Cartesian Product:** $A \\times B$ creates a grid or rectangular space of ordered pairs.\n- **Functions:** Are specific relations where every input from the domain has exactly one unique output in the range.\n- **Bijections & Inverses:** Only functions that are both injective and surjective possess a valid inverse $f^{-1}$.\n- **Composition:** $g \\circ f$ chains operations, and importantly, order matters!" },
        { id: "s1", type: "numerical", title: "Knowledge Retrieval", content: "If $f$ maps $A \\to B$ and $g$ maps $B \\to C$, and $A$ has 4 elements, $B$ has 4, and both functions are bijections, how many elements are in the domain of $g \\circ f$?", numericAnswer: 4, numericTolerance: 0 }
      ]
    }
  ]
};