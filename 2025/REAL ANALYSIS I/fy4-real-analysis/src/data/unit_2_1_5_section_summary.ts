import { Unit } from '../types';

export const UNIT_2_1_5: Unit = {
  id: "unit-2-1-5",
  title: "Section 2.1 Summary",
  description: "Review of Algebraic and Order Properties",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-1-5-sum1", title: "Summary: Field Axioms & Algebra", description: "Recap of Unit 211 & 213", icon: "BookOpen",
      slides: [
        { id: "s0", type: "theory", title: "Recap: Field Axioms", content: "We established the core algebraic properties of the real numbers:\n\n- **Field Axioms:** The fundamental rules for addition and multiplication (commutativity, associativity, identities, inverses, and distributivity).\n- **Uniqueness:** The elements $0$ and $1$ are unique, and inverses (like $-a$ and $1/a$) are unique.\n- **Zero Product:** Multiplying by zero always yields zero ($a \\cdot 0 = 0$). Also, if $ab = 0$, then $a = 0$ or $b = 0$.\n- **Irrationality:** The field of rational numbers $\\mathbb{Q}$ is incomplete. For example, there is no rational number $r$ satisfying $r^2 = 2$ or $r^2 = 6$." },
        { id: "s1", type: "fill_in_blank", title: "Knowledge Retrieval", content: "The property $a(b+c) = ab + ac$ is known as the ___ property.", blankAnswer: "distributive" }
      ]
    },
    {
      id: "les-2-1-5-sum2", title: "Summary: Order & Inequalities", description: "Recap of Unit 212 & 214", icon: "BookOpen",
      slides: [
        { id: "s0", type: "theory", title: "Recap: Order & Inequalities", content: "We explored the set of positive real numbers and rules for inequalities:\n\n- **Positivity ($\\mathbb{P}$):** A specific subset of $\\mathbb{R}$ closed under addition and multiplication.\n- **Trichotomy:** Every real number is either positive, zero, or negative.\n- **Inequalities:** Defined via subtraction: $a > b$ means $a - b \\in \\mathbb{P}$. Multiplying an inequality by a negative number flips the direction.\n- **Squares:** The square of any non-zero real number is strictly positive.\n- **Epsilon Bound:** If a non-negative number $a$ is smaller than *every* $\\epsilon > 0$, then $a$ must be $0$.\n- **Advanced Rules:** $0 < a < b \\implies a^2 < ab < b^2$ and $1/b < 1/a$." },
        { id: "s1", type: "numerical", title: "Knowledge Retrieval", content: "If $ab < 0$ and $a = 5$, must $b$ be strictly less than what number?", numericAnswer: 0, numericTolerance: 0 }
      ]
    }
  ]
};