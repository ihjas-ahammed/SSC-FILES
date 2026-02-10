import { Section } from '../types';

export const SECTION_1_1: Section = {
  "id": "section-1-1",
  "title": "Section 1.1: Sets and Functions",
  "description": "The language of mathematics: Sets, Operations, Functions, and Mappings.",
  "color": "duo-blue",
  "units": [
    {
      "id": "unit-1-1-1",
      "title": "Sets and Operations",
      "description": "The vocabulary of Real Analysis: Sets, Subsets, and Algebra.",
      "color": "duo-blue",
      "lessons": [
        {
          "id": "lesson-1-1-sets-intro",
          "title": "Introduction to Sets",
          "description": "Definitions, Membership, and Containment.",
          "icon": "Box",
          "slides": [
            {
              "id": "s1-def",
              "type": "theory",
              "title": "What is a Set?",
              "content": "A **set** is a collection of objects. We usually denote sets with capital letters ($A, B, S$) and elements with lowercase letters ($a, b, x$).\n\n*   **Membership:** If $x$ is in set $A$, we write $x \\in A$.\n*   **Non-membership:** If $x$ is not in $A$, we write $x \\notin A$."
            },
            {
              "id": "s2-subset",
              "type": "theory",
              "title": "Subsets and Equality",
              "content": "**Subset ($A \\subseteq B$):** $A$ is a subset of $B$ if every element of $A$ is also an element of $B$.\n\n**Equality ($A = B$):** Two sets are equal if they contain exactly the same elements. To prove $A=B$, we must show:\n1. $A \\subseteq B$\n2. $B \\subseteq A$"
            },
            {
              "id": "s3-proper-subset",
              "type": "theory",
              "title": "Proper Subsets",
              "content": "If $A \\subseteq B$ but there is at least one element in $B$ that is *not* in $A$, we say $A$ is a **proper subset** of $B$, written $A \\subset B$ (or sometimes $A \\subsetneq B$)."
            },
            {
              "id": "q-subset-logic",
              "type": "quiz",
              "title": "Check Your Logic",
              "content": "If $A \\subseteq B$ and $B \\subseteq C$, what can we say about $A$ and $C$?",
              "options": [
                { "id": "1", "text": "$A = C$", "isCorrect": false, "explanation": "Not necessarily. A could be smaller than C." },
                { "id": "2", "text": "$A \\subseteq C$", "isCorrect": true, "explanation": "If x is in A, it's in B. Since it's in B, it must be in C." }
              ]
            }
          ]
        },
        {
          "id": "lesson-1-1-special-sets",
          "title": "Defining Sets",
          "description": "Set-builder notation and standard number sets.",
          "icon": "Hash",
          "slides": [
            {
              "id": "s1-builder",
              "type": "theory",
              "title": "Set-Builder Notation",
              "content": "We often define sets by a property $P(x)$.\n\n$$S = \\{x : P(x)\\}$$\n\nThis is read as \"The set of all $x$ such that $P(x)$ is true.\" \n\nExample: $\\{n \\in \\mathbb{N} : n^2 = 4\\} = \\{2\\}$."
            },
            {
              "id": "s2-standard-sets",
              "type": "theory",
              "title": "Standard Sets",
              "content": "We use special bold letters for common number sets:\n\n*   $\\mathbb{N} = \\{1, 2, 3, ...\\}$ (Natural Numbers)\n*   $\\mathbb{Z} = \\{..., -1, 0, 1, ...\\}$ (Integers)\n*   $\\mathbb{Q} = \\{m/n : m, n \\in \\mathbb{Z}, n \\neq 0\\}$ (Rationals)\n*   $\\mathbb{R}$ (Real Numbers)"
            },
            {
              "id": "q-set-builder",
              "type": "quiz",
              "title": "Reading Notation",
              "content": "What are the elements of $\\{x \\in \\mathbb{Z} : x^2 < 5\\}$?",
              "options": [
                { "id": "1", "text": "$\\{1, 2\\}$", "isCorrect": false, "explanation": "Don't forget zero and negative integers!" },
                { "id": "2", "text": "$\\{-2, -1, 0, 1, 2\\}$", "isCorrect": true, "explanation": "Integers whose squares are 0, 1, or 4." }
              ]
            }
          ]
        },
        {
          "id": "lesson-1-1-operations",
          "title": "Set Operations",
          "description": "Union, Intersection, Difference, and Complement.",
          "icon": "Layers",
          "slides": [
            {
              "id": "s1-union",
              "type": "theory",
              "title": "Union and Intersection",
              "content": "**Union ($A \\cup B$):** The set of elements in $A$ **OR** $B$.\n$$A \\cup B := \\{x : x \\in A \\lor x \\in B\\}$$\n\n**Intersection ($A \\cap B$):** The set of elements in $A$ **AND** $B$.\n$$A \\cap B := \\{x : x \\in A \\land x \\in B\\}$$"
            },
            {
              "id": "s2-disjoint",
              "type": "theory",
              "title": "Disjoint Sets",
              "content": "Two sets $A$ and $B$ are **disjoint** if they have no elements in common.\n\n$$A \\cap B = \\emptyset$$\n\nwhere $\\emptyset$ is the **Empty Set** (the set with no elements)."
            },
            {
              "id": "s3-diff",
              "type": "theory",
              "title": "Relative Complement (Difference)",
              "content": "The complement of $B$ relative to $A$ (denoted $A \\setminus B$) is the set of elements in $A$ that are **NOT** in $B$.\n\n$$A \\setminus B := \\{x : x \\in A \\land x \\notin B\\}$$"
            },
            {
              "id": "q-diff",
              "type": "quiz",
              "title": "Calculate Difference",
              "content": "If $A = \\{1, 2, 3\\}$ and $B = \\{2, 3, 4\\}$, what is $A \\setminus B$?",
              "options": [
                { "id": "1", "text": "$\\{1\\}$", "isCorrect": true, "explanation": "We take A and remove 2 and 3 because they are in B." },
                { "id": "2", "text": "$\\{4\\}$", "isCorrect": false, "explanation": "That is $B \\setminus A$." },
                { "id": "3", "text": "$\\emptyset$", "isCorrect": false, "explanation": "" }
              ]
            }
          ]
        },
        {
          "id": "lesson-1-1-theorems",
          "title": "Algebra of Sets",
          "description": "Theorem 1.1.4: De Morgan's Laws and Distributivity.",
          "icon": "GitBranch",
          "slides": [
            {
              "id": "s1-demorgan-thm",
              "type": "theory",
              "title": "Theorem 1.1.4: De Morgan's Laws",
              "content": "For any sets $A, B, C$:\n\n1. $A \\setminus (B \\cup C) = (A \\setminus B) \\cap (A \\setminus C)$\n2. $A \\setminus (B \\cap C) = (A \\setminus B) \\cup (A \\setminus C)$\n\nIdeally, removing a combined set is like removing the individual parts."
            },
            {
              "id": "s2-proof-demorgan",
              "type": "proof",
              "title": "Proof of Part (a)",
              "content": "Show $A \\setminus (B \\cup C) = (A \\setminus B) \\cap (A \\setminus C)$.",
              "proofSteps": [
                "Let $x \\in A \\setminus (B \\cup C)$.",
                "This means $x \\in A$ AND $x \\notin (B \\cup C)$.",
                "If $x$ is not in the union, it is not in $B$ AND not in $C$.",
                "So ($x \\in A$ and $x \\notin B$) AND ($x \\in A$ and $x \\notin C$).",
                "This translates to $x \\in (A \\setminus B) \\cap (A \\setminus C)$."
              ]
            },
            {
              "id": "q-demorgan",
              "type": "quiz",
              "title": "Visualization",
              "content": "If you exclude people who are (Tall OR Fast), who is left?",
              "options": [
                { "id": "1", "text": "People who are Not Tall OR Not Fast.", "isCorrect": false, "explanation": "This would include short fast people." },
                { "id": "2", "text": "People who are Not Tall AND Not Fast.", "isCorrect": true, "explanation": "De Morgan's Law: Not (A or B) = (Not A) and (Not B)." }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "unit-1-1-2",
      "title": "Functions & Images",
      "description": "Mappings, Cartesian Products, and Image Sets.",
      "color": "duo-blue",
      "lessons": [
        {
          "id": "lesson-1-1-cartesian",
          "title": "Cartesian Products",
          "description": "Ordered pairs and the plane.",
          "icon": "Grid",
          "slides": [
            {
              "id": "s1-cart-def",
              "type": "theory",
              "title": "Cartesian Product",
              "content": "If $A$ and $B$ are sets, the **Cartesian Product** $A \\times B$ is the set of all ordered pairs $(a, b)$.\n\n$$A \\times B := \\{(a,b) : a \\in A, b \\in B\\}$$"
            },
            {
              "id": "s2-ex-cart",
              "type": "theory",
              "title": "Example",
              "content": "If $A = \\{1, 2\\}$ and $B = \\{3, 4\\}$, then:\n\n$A \\times B = \\{(1,3), (1,4), (2,3), (2,4)\\}$\n\nIt forms a grid (or rectangle) of points."
            }
          ]
        },
        {
          "id": "lesson-1-1-func",
          "title": "Definition of Function",
          "description": "Formal definition via graphs.",
          "icon": "ArrowRight",
          "slides": [
            {
              "id": "s1-func-formal",
              "type": "theory",
              "title": "What is a Function?",
              "content": "Formally, a **function** $f$ from $A$ to $B$ is a subset of $A \\times B$ such that for every $a \\in A$, there is a **unique** $b \\in B$ with $(a,b) \\in f$.\n\nWe usually write $f: A \\to B$ and $f(a) = b$."
            },
            {
              "id": "s2-domain-range",
              "type": "theory",
              "title": "Domain and Range",
              "content": "*   **Domain $D(f)$:** The set $A$ (inputs).\n*   **Codomain:** The set $B$ (possible outputs).\n*   **Range $R(f)$:** The set of actual outputs $\\{f(x) : x \\in A\\}$."
            },
            {
              "id": "q-func-test",
              "type": "quiz",
              "title": "Vertical Line Test",
              "content": "Why is a circle $x^2 + y^2 = 1$ not a function $y=f(x)$?",
              "options": [
                { "id": "1", "text": "It is not a straight line.", "isCorrect": false, "explanation": "" },
                { "id": "2", "text": "One x value (like x=0) maps to two y values (1, -1).", "isCorrect": true, "explanation": "Functions require a UNIQUE output for every input." }
              ]
            }
          ]
        },
        {
          "id": "lesson-1-1-img",
          "title": "Direct & Inverse Images",
          "description": "Mapping sets forward and backward.",
          "icon": "Repeat",
          "slides": [
            {
              "id": "s1-direct",
              "type": "theory",
              "title": "Direct Image $f(E)$",
              "content": "If we take a subset $E \\subseteq A$, the **Direct Image** is the set of all outputs generated by $E$.\n\n$$f(E) := \\{f(x) : x \\in E\\}$$"
            },
            {
              "id": "s2-inverse",
              "type": "theory",
              "title": "Inverse Image $f^{-1}(H)$",
              "content": "If we take a subset $H \\subseteq B$, the **Inverse Image** is the set of all inputs that land in $H$.\n\n$$f^{-1}(H) := \\{x \\in A : f(x) \\in H\\}$$\n\n*Note: $f^{-1}$ here is a set operation, not necessarily an inverse function.*"
            },
            {
              "id": "s3-example",
              "type": "theory",
              "title": "Example: $f(x) = x^2$",
              "content": "Let $f: \\mathbb{R} \\to \\mathbb{R}$ where $f(x)=x^2$.\n\n*   Let $E = [0, 2]$. Then $f(E) = [0, 4]$.\n*   Let $H = [0, 4]$. Then $f^{-1}(H) = [-2, 2]$."
            },
            {
              "id": "q-inverse-img",
              "type": "quiz",
              "title": "Concept Check",
              "content": "For $f(x)=x^2$, what is $f^{-1}(\\{-1\\})$?",
              "options": [
                { "id": "1", "text": "$\\{1, -1\\}$", "isCorrect": false, "explanation": "Square of these is 1, not -1." },
                { "id": "2", "text": "$\\emptyset$ (Empty Set)", "isCorrect": true, "explanation": "No real number squares to -1." }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "unit-1-1-3",
      "title": "Types of Functions",
      "description": "Injectivity, Surjectivity, Bijectivity, and Composition.",
      "color": "duo-blue",
      "lessons": [
        {
          "id": "lesson-1-1-inj-surj",
          "title": "Injective & Surjective",
          "description": "One-to-one and Onto properties.",
          "icon": "GitMerge",
          "slides": [
            {
              "id": "s1-inj",
              "type": "theory",
              "title": "Injective (One-to-One)",
              "content": "A function $f$ is **injective** if distinct inputs yield distinct outputs.\n\n$$x_1 \\neq x_2 \\implies f(x_1) \\neq f(x_2)$$\n\n(No two arrows hit the same target)."
            },
            {
              "id": "s2-surj",
              "type": "theory",
              "title": "Surjective (Onto)",
              "content": "A function $f: A \\to B$ is **surjective** if the range is the entire set $B$.\n\n$$f(A) = B$$\n\n(Every target gets hit by at least one arrow)."
            },
            {
              "id": "q-class",
              "type": "quiz",
              "title": "Classify $f(x)=x+1$ on $\\mathbb{R}$",
              "content": "Is $f: \\mathbb{R} \\to \\mathbb{R}$ defined by $f(x)=x+1$ surjective?",
              "options": [
                { "id": "1", "text": "Yes", "isCorrect": true, "explanation": "For any $y$, $x=y-1$ maps to it." },
                { "id": "2", "text": "No", "isCorrect": false, "explanation": "" }
              ]
            }
          ]
        },
        {
          "id": "lesson-1-1-bijection",
          "title": "Bijective & Inverse",
          "description": "Perfect pairing and inverse functions.",
          "icon": "RefreshCcw",
          "slides": [
            {
              "id": "s1-bij",
              "type": "theory",
              "title": "Bijective",
              "content": "A function is **bijective** if it is BOTH injective and surjective.\n\nThis establishes a \"perfect correspondence\" between set $A$ and set $B$."
            },
            {
              "id": "s2-inverse-func",
              "type": "theory",
              "title": "Inverse Function",
              "content": "If $f: A \\to B$ is bijective, we can define an **inverse function** $f^{-1}: B \\to A$.\n\n$$f^{-1}(y) = x \\iff f(x) = y$$\n\nIf $f$ is not bijective, the inverse function does not exist (it wouldn't be a valid function)."
            },
            {
              "id": "q-inv-exist",
              "type": "quiz",
              "title": "Existence",
              "content": "Does $f(x) = x^2$ have an inverse function on $\\mathbb{R}$?",
              "options": [
                { "id": "1", "text": "Yes", "isCorrect": false, "explanation": "" },
                { "id": "2", "text": "No", "isCorrect": true, "explanation": "It is not injective ($2$ and $-2$ go to $4$). We'd need to restrict the domain to $x \\ge 0$." }
              ]
            }
          ]
        },
        {
          "id": "lesson-1-1-composition",
          "title": "Composition",
          "description": "Combining functions $g \\circ f$.",
          "icon": "Link",
          "slides": [
            {
              "id": "s1-comp-def",
              "type": "theory",
              "title": "Composition",
              "content": "If $f: A \\to B$ and $g: B \\to C$, the composition $g \\circ f$ is a function from $A$ to $C$:\n\n$$(g \\circ f)(x) := g(f(x))$$\n\nNote the order: $f$ is applied first, then $g$."
            },
            {
              "id": "s2-thm-comp",
              "type": "theory",
              "title": "Theorem 1.1.14: Inverses & Composition",
              "content": "An interesting property relates inverse images and composition:\n\n$$(g \\circ f)^{-1}(H) = f^{-1}(g^{-1}(H))$$\n\nTo pull a set back through two functions, you pull it back through the outer one ($g$), then the inner one ($f$)."
            },
            {
              "id": "q-comp",
              "type": "quiz",
              "title": "Order Matters",
              "content": "If $f(x) = 2x$ and $g(x) = x+1$, what is $(g \\circ f)(x)$?",
              "options": [
                { "id": "1", "text": "$2(x+1) = 2x+2$", "isCorrect": false, "explanation": "That is $(f \\circ g)(x)$." },
                { "id": "2", "text": "$(2x)+1 = 2x+1$", "isCorrect": true, "explanation": "Apply f first (2x), then g (add 1)." }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "unit-1-1-ex",
      "title": "Exercises 1.1",
      "description": "Selected problems from the text.",
      "color": "duo-blue",
      "lessons": [
        {
          "id": "ex-1-1-sets",
          "title": "Set Problems",
          "description": "Symmetric Difference and De Morgan.",
          "icon": "Edit3",
          "slides": [
            {
              "id": "q6",
              "type": "theory",
              "title": "Exercise 6: Symmetric Difference",
              "content": "The **symmetric difference** $D$ of $A$ and $B$ is the set of elements in exactly one of the sets.\n\n$$D = (A \\setminus B) \\cup (B \\setminus A)$$\n\nShow that $D = (A \\cup B) \\setminus (A \\cap B)$."
            },
            {
              "id": "q6-sol",
              "type": "proof",
              "title": "Solution Sketch",
              "content": "Proof:",
              "proofSteps": [
                "Take $x \\in (A \\cup B) \\setminus (A \\cap B)$.",
                "So $x$ is in $A$ or $B$, BUT not in both.",
                "Case 1: $x \\in A$. Since $x$ is not in intersection, $x \\notin B$. So $x \\in A \\setminus B$.",
                "Case 2: $x \\in B$. Since $x$ is not in intersection, $x \\notin A$. So $x \\in B \\setminus A$.",
                "Thus $x$ is in the symmetric difference."
              ]
            }
          ]
        },
        {
          "id": "ex-1-1-funcs",
          "title": "Function Problems",
          "description": "Bijectivity and Composition proofs.",
          "icon": "Cpu",
          "slides": [
            {
              "id": "q16",
              "type": "theory",
              "title": "Exercise 16: Inverse Function",
              "content": "Let $f(x) = x / \\sqrt{x^2+1}$. Show $f$ is a bijection from $\\mathbb{R}$ to $(-1, 1)$.\n\n**Hint:** To find the inverse, set $y = x / \\sqrt{x^2+1}$ and solve for $x$ in terms of $y$."
            },
            {
              "id": "q21",
              "type": "proof",
              "title": "Exercise 21: Composition of Bijections",
              "content": "Prove: If $f$ and $g$ are bijective, then $g \\circ f$ is bijective.",
              "proofSteps": [
                "**Injectivity:** Assume $(g \\circ f)(x_1) = (g \\circ f)(x_2)$.",
                "$g(f(x_1)) = g(f(x_2))$. Since $g$ is injective, $f(x_1) = f(x_2)$.",
                "Since $f$ is injective, $x_1 = x_2$. So composition is injective.",
                "**Surjectivity:** Pick $z \\in C$. Since $g$ is surjective, $\\exists y \\in B, g(y)=z$.",
                "Since $f$ is surjective, $\\exists x \\in A, f(x)=y$.",
                "Thus $(g \\circ f)(x) = g(f(x)) = g(y) = z$. So composition is surjective."
              ]
            }
          ]
        }
      ]
    }
  ]
};