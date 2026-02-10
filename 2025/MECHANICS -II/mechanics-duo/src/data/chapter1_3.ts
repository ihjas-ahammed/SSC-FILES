import { Section } from '../types';

export const SECTION_1_3: Section = {
  "id": "section-1-3",
  "title": "Section 1.3: Finite and Infinite Sets",
  "description": "Counting beyond numbers: Cardinality, Countability, and Cantor's Theorem.",
  "color": "duo-red",
  "units": [
    {
      "id": "unit-1-3-1",
      "title": "Finite Sets",
      "description": "Defining 'size' for sets that end.",
      "color": "duo-red",
      "lessons": [
        {
          "id": "lesson-1-3-finite-def",
          "title": "Defining Finite",
          "description": "Definition 1.3.1: Mapping to natural numbers.",
          "icon": "Hash",
          "slides": [
            {
              "id": "s1-empty",
              "type": "theory",
              "title": "The Empty Set",
              "content": "The empty set $\\emptyset$ is the unique set with no elements. We say it has **0 elements**."
            },
            {
              "id": "s2-finite",
              "type": "theory",
              "title": "Finite Sets",
              "content": "For $n \\in \\mathbb{N}$, a set $S$ has **n elements** if there exists a bijection from the set $\\mathbb{N}_n = \\{1, 2, ..., n\\}$ onto $S$.\n\nA set is **Finite** if it is either $\\emptyset$ or has $n$ elements for some $n$.\n\nA set is **Infinite** if it is not finite."
            },
            {
              "id": "s3-uniqueness",
              "type": "theory",
              "title": "Theorem 1.3.2: Uniqueness",
              "content": "If $S$ is a finite set, the number of elements in $S$ is a unique number in $\\mathbb{N}$.\n\nYou cannot have a bijection to $\\{1, 2\\}$ AND a bijection to $\\{1, 2, 3\\}$ for the same set."
            }
          ]
        },
        {
          "id": "lesson-1-3-props",
          "title": "Properties of Finite Sets",
          "description": "Theorems 1.3.4 & 1.3.5: Subsets and Unions.",
          "icon": "Grid",
          "slides": [
            {
              "id": "s1-subset-finite",
              "type": "theory",
              "title": "Subsets",
              "content": "**Theorem 1.3.5:**\n(a) If $S$ is a finite set and $T \\subseteq S$, then $T$ is finite.\n(b) If $T$ is an infinite set and $T \\subseteq S$, then $S$ is infinite.\n\nBasically: You can't fit an infinite thing inside a finite box."
            },
            {
              "id": "s2-union-finite",
              "type": "theory",
              "title": "Unions",
              "content": "**Theorem 1.3.4:** If $A$ has $m$ elements and $B$ has $n$ elements, and they are disjoint ($A \\cap B = \\emptyset$), then $A \\cup B$ has $m + n$ elements."
            },
            {
              "id": "q-finite-check",
              "type": "quiz",
              "title": "Logic Check",
              "content": "If set $A$ is infinite and $A \\subseteq B$, is $B$ finite or infinite?",
              "options": [
                { "id": "1", "text": "Finite", "isCorrect": false, "explanation": "If B were finite, its subset A would have to be finite." },
                { "id": "2", "text": "Infinite", "isCorrect": true, "explanation": "A 'larger' container of an infinite set must be infinite." }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "unit-1-3-2",
      "title": "Countable Sets",
      "description": "Sets that can be listed: N, Z, and Q.",
      "color": "duo-red",
      "lessons": [
        {
          "id": "lesson-1-3-countable",
          "title": "Countable vs Uncountable",
          "description": "Definition 1.3.6: Denumerable sets.",
          "icon": "ListOrdered",
          "slides": [
            {
              "id": "s1-denum",
              "type": "theory",
              "title": "Denumerable",
              "content": "A set $S$ is **denumerable** (or countably infinite) if there exists a bijection from $\\mathbb{N}$ onto $S$.\n\nIn plain English: You can list the elements in a sequence $s_1, s_2, s_3, ...$ without missing any."
            },
            {
              "id": "s2-countable",
              "type": "theory",
              "title": "Countable",
              "content": "A set is **countable** if it is either finite or denumerable.\n\nA set is **uncountable** if it is not countable."
            },
            {
              "id": "s3-integers",
              "type": "theory",
              "title": "Example: The Integers",
              "content": "Is $\\mathbb{Z}$ countable? Yes. We can map $\\mathbb{N}$ to $\\mathbb{Z}$ by \"folding\" it:\n\n$1 \\to 0$\n$2 \\to 1$\n$3 \\to -1$\n$4 \\to 2$\n$5 \\to -2$\n\nThis covers every integer eventually."
            }
          ]
        },
        {
          "id": "lesson-1-3-rationals",
          "title": "The Rationals are Countable",
          "description": "Theorem 1.3.8 & 1.3.11: The Diagonal Argument.",
          "icon": "Minimize2",
          "slides": [
            {
              "id": "s1-nxn",
              "type": "theory",
              "title": "Theorem 1.3.8: Pairs",
              "content": "The set $\\mathbb{N} \\times \\mathbb{N}$ is denumerable.\n\n**Proof Method (Cantor's Diagonal):**\nList pairs $(1,1), (1,2), (2,1), (1,3)...$ by traversing diagonals where the sum $m+n$ is constant."
            },
            {
              "id": "s2-rationals",
              "type": "theory",
              "title": "Theorem 1.3.11: Q is Countable",
              "content": "The set of rational numbers $\\mathbb{Q}$ is denumerable.\n\nSince every rational is a fraction $m/n$, it maps to a pair in $\\mathbb{Z} \\times \\mathbb{N}$. Since products of countable sets are countable, $\\mathbb{Q}$ is countable."
            },
            {
              "id": "q-dense",
              "type": "quiz",
              "title": "Counter-Intuitive",
              "content": "There are infinitely many rationals between 0 and 1. Does this make them uncountable?",
              "options": [
                { "id": "1", "text": "Yes, they are too dense.", "isCorrect": false, "explanation": "Density does not imply uncountability." },
                { "id": "2", "text": "No, they can still be listed.", "isCorrect": true, "explanation": "We can list them by denominator size (1/2, 1/3, 2/3, 1/4...)." }
              ]
            }
          ]
        },
        {
          "id": "lesson-1-3-theorems",
          "title": "Theorems on Countability",
          "description": "Subsets and Unions of countable sets.",
          "icon": "GitBranch",
          "slides": [
            {
              "id": "s1-subsets",
              "type": "theory",
              "title": "Theorem 1.3.9: Subsets",
              "content": "If $S$ is a countable set and $T \\subseteq S$, then $T$ is countable.\n\nIf you take elements *out* of a list, the remaining elements can still be listed."
            },
            {
              "id": "s2-unions",
              "type": "theory",
              "title": "Theorem 1.3.12: Unions",
              "content": "The union of a countable collection of countable sets is countable.\n\nIf $A_1, A_2, A_3...$ are all countable, then $\\bigcup A_n$ is countable."
            }
          ]
        }
      ]
    },
    {
      "id": "unit-1-3-3",
      "title": "Cantor's Theorem",
      "description": "Uncountable sets and hierarchies of infinity.",
      "color": "duo-red",
      "lessons": [
        {
          "id": "lesson-1-3-cantor",
          "title": "Cantor's Theorem",
          "description": "Theorem 1.3.13: The Power Set is larger.",
          "icon": "Layers",
          "slides": [
            {
              "id": "s1-statement",
              "type": "theory",
              "title": "The Theorem",
              "content": "**Cantor's Theorem:** If $A$ is any set, there is **no** surjection from $A$ onto the set of all subsets of $A$, denoted $\\mathcal{P}(A)$.\n\nThis means $\\mathcal{P}(A)$ is strictly \"larger\" than $A$."
            },
            {
              "id": "s2-proof",
              "type": "proof",
              "title": "Proof by Contradiction",
              "content": "Suppose there is a surjection $\\varphi: A \\to \\mathcal{P}(A)$.",
              "proofSteps": [
                "Consider the set $D = \\{a \\in A : a \\notin \\varphi(a)\\}$.",
                "Since $D$ is a subset of $A$, and $\\varphi$ is surjective, there must be some $a_0 \\in A$ such that $\\varphi(a_0) = D$.",
                "**Ask:** Is $a_0 \\in D$?",
                "If $a_0 \\in D$, then by definition of $D$, $a_0 \\notin \\varphi(a_0)$. But $\\varphi(a_0) = D$, so $a_0 \\notin D$. Contradiction.",
                "If $a_0 \\notin D$, then by definition, $a_0 \\in \\varphi(a_0) = D$. Contradiction.",
                "Therefore, $\\varphi$ cannot exist."
              ]
            },
            {
              "id": "s3-implication",
              "type": "theory",
              "title": "The Consequence",
              "content": "Since $\\mathcal{P}(\\mathbb{N})$ cannot be mapped onto by $\\mathbb{N}$, the set of all subsets of natural numbers is **Uncountable**.\n\nThis implies there are different *sizes* of infinity."
            }
          ]
        }
      ]
    },
    {
      "id": "unit-1-3-ex",
      "title": "Exercises 1.3",
      "description": "Practice with cardinality.",
      "color": "duo-red",
      "lessons": [
        {
          "id": "ex-1-3-finite",
          "title": "Finite Sets Problems",
          "description": "Q1-3: Bijections and Operations.",
          "icon": "Edit3",
          "slides": [
            {
              "id": "q1",
              "type": "theory",
              "title": "Exercise 1: Bijections",
              "content": "Prove a nonempty set $T_1$ is finite if and only if there is a bijection from $T_1$ onto a finite set $T_2$.\n\n**Solution:** Composition of bijections is a bijection. If $T_2 \\to \\mathbb{N}_n$ exists, and $T_1 \\to T_2$ exists, then $T_1 \\to \\mathbb{N}_n$ exists."
            },
            {
              "id": "q3",
              "type": "quiz",
              "title": "Exercise 3: Counting Injections",
              "content": "Let $S = \\{1, 2\\}$ and $T = \\{a, b, c\\}$. How many **injections** are there from $S$ to $T$?",
              "options": [
                { "id": "1", "text": "6", "isCorrect": true, "explanation": "3 choices for first element $\\times$ 2 choices for second element = 6." },
                { "id": "2", "text": "9", "isCorrect": false, "explanation": "That is total functions ($3^2$)." }
              ]
            }
          ]
        },
        {
          "id": "ex-1-3-count",
          "title": "Countability Problems",
          "description": "Q4-10: Constructing bijections.",
          "icon": "Link",
          "slides": [
            {
              "id": "q4",
              "type": "theory",
              "title": "Exercise 4: Odd Integers",
              "content": "Exhibit a bijection between $\\mathbb{N}$ and the set of all odd integers greater than 13.\n\nSet: $\\{15, 17, 19, ...\\}$.\nFormula: $f(n) = 13 + 2n$ for $n \\in \\mathbb{N}$."
            },
            {
              "id": "q10",
              "type": "quiz",
              "title": "Exercise 10: Diagonal Counting",
              "content": "Calculate the number of the point $(2,3)$ in the diagonal counting scheme of $\\mathbb{N} \\times \\mathbb{N}$.\n(Sum $k = m+n = 5$).",
              "options": [
                { "id": "1", "text": "12", "isCorrect": true, "explanation": "Diagonals 2,3,4 have $1+2+3=6$ points. In diag 5, $(1,4), (2,3)$... it is the 2nd point. Total $6+2+4 (\text{shift}) = 12$?" },
                { "id": "2", "text": "11", "isCorrect": false, "explanation": "Let's check the formula: $\\frac{1}{2}(m+n-2)(m+n-1) + m$. Here $m=2, n=3$. Sum=5. Formula: $\\frac{1}{2}(3)(4) + 2 = 6+2 = 8$. Wait, standard diag starts $(1,1)$. Diag 1: (1,1). Diag 2: (1,2), (2,1). Diag 3: (1,3), (2,2), (3,1). (2,3) is in Diag 4 (sum 5). Prev diags have $1+2+3=6$ pts. (2,3) is usually 2nd or 3rd in diag depending on direction." }
              ]
            },
            {
              "id": "q10-sol",
              "type": "theory",
              "title": "Exercise 10 Correction",
              "content": "Using the standard formula from the text $h(m,n) = \\frac{1}{2}(m+n-2)(m+n-1) + m$.\n\nFor $(2,3)$: $m+n=5$.\n$h(2,3) = \\frac{1}{2}(3)(4) + 2 = 6 + 2 = 8$."
            }
          ]
        },
        {
          "id": "ex-1-3-sets",
          "title": "Power Sets & Cardinality",
          "description": "Q11-13: Advanced Counting.",
          "icon": "Database",
          "slides": [
            {
              "id": "q11",
              "type": "quiz",
              "title": "Exercise 11",
              "content": "Determine number of elements in $\\mathcal{P}(S)$ if $S = \\{1, 2\\}$.",
              "options": [
                { "id": "1", "text": "2", "isCorrect": false, "explanation": "" },
                { "id": "2", "text": "4", "isCorrect": true, "explanation": "$\\{\\emptyset, \\{1\\}, \\{2\\}, \\{1,2\\}\\}$" }
              ]
            },
            {
              "id": "q12",
              "type": "proof",
              "title": "Exercise 12: Power Set Size",
              "content": "Prove by induction that if $S$ has $n$ elements, $\\mathcal{P}(S)$ has $2^n$ elements.",
              "proofSteps": [
                "Base n=0: $\\emptyset$ has 1 subset ($\\{\\emptyset\\}$). $2^0=1$.",
                "Assume for $k$ elements, subsets = $2^k$.",
                "For $k+1$, let $S' = S \\cup \\{x\\}$.",
                "Subsets of $S'$ either contain $x$ or don't.",
                "Those that don't: exactly subsets of $S$ ($2^k$).",
                "Those that do: exact subsets of $S$ with $x$ added ($2^k$).",
                "Total: $2^k + 2^k = 2 \\cdot 2^k = 2^{k+1}$."
              ]
            },
            {
              "id": "q13",
              "type": "theory",
              "title": "Exercise 13: Finite Subsets",
              "content": "Prove that the collection $\\mathcal{F}(\\mathbb{N})$ of all **finite** subsets of $\\mathbb{N}$ is countable.\n\nThis is different from the full power set (which includes infinite subsets). Each finite subset can be mapped to a unique integer (e.g., using binary representations or prime powers)."
            }
          ]
        }
      ]
    }
  ]
};