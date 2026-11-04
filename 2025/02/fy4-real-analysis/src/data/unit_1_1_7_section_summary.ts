import { Unit } from '../types';

export const UNIT_1_1_7: Unit = {
  id: "unit-1-1-7",
  title: "Section 1.1 Summary",
  description: "Review of Sets, Functions, and Mappings",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-1-7-sum1", title: "Summary: Set Fundamentals", description: "Recap of Unit 111 & 113", icon: "BookOpen",
      slides: [
        { id: "s0", type: "theory", title: "Recap: Set Fundamentals", content: "In this section, we established the mathematical foundations for working with sets:\n\n- **Set Equality:** $A = B$ is proven by showing $A \\subseteq B$ and $B \\subseteq A$.\n- **Operations:** Union $\\cup$, Intersection $\\cap$, and Complement $\\setminus$.\n- **Symmetric Difference:** $(A \\setminus B) \\cup (B \\setminus A)$, the elements in exactly one of the sets.\n- **De Morgan's Laws:** Revealed how taking a complement flips unions into intersections and vice versa." },
        { id: "s1", type: "fill_in_blank", title: "Knowledge Retrieval", content: "The mathematical symbol $\\cap$ denotes the ___ of two sets.", blankAnswer: "intersection" }
      ]
    },
    {
      id: "les-1-1-7-sum2", title: "Summary: Mapping & Composition", description: "Recap of Units 112, 114-116", icon: "BookOpen",
      slides: [
        { id: "s0", type: "theory", title: "Recap: Mapping & Composition", content: "We then connected sets together using pairs and functional rules:\n\n- **Cartesian Product:** $A \\times B$ creates a grid of ordered pairs.\n- **Functions:** Are specific relations where every input has exactly one unique output.\n- **Bijections & Inverses:** Functions that are injective and surjective possess a valid inverse $f^{-1}$.\n- **Composition:** $g \\circ f$ chains operations. Order matters! If $g \\circ f$ is injective, $f$ must be injective. If it is surjective, $g$ must be surjective." },
        { id: "s1", type: "numerical", title: "Knowledge Retrieval", content: "If $f$ maps $A \\to B$ and $g$ maps $B \\to C$, and $A$ has 4 elements, $B$ has 4, and both functions are bijections, how many elements are in the domain of $g \\circ f$?", numericAnswer: 4, numericTolerance: 0 }
      ]
    }
  ]
};