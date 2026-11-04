import { ExamPaper } from '../types';

export const EXAM_MODULE_1: ExamPaper = {
  moduleId: 'module-1',
  sections:[
    {
      id: 'sec-a',
      title: 'Section A',
      instruction: 'Answer all. Each question carries 3 Marks. (Ceiling 12)',
      questions:[
        {
          id: 'q1',
          number: '1',
          marks: 3,
          question: 'Prove that if A and B are sets, then $A \\subseteq B$ if and only if $A \\cap B = A$.',
          solution: '**Proof:**\n\n**Forward ($\\implies$):** Assume $A \\subseteq B$. We know $A \\cap B \\subseteq A$ is always true by definition of intersection. We must prove $A \\subseteq A \\cap B$. Let $x \\in A$. Since $A \\subseteq B$, it follows that $x \\in B$. Thus $x \\in A$ and $x \\in B$, so $x \\in A \\cap B$. Hence $A \\subseteq A \\cap B$. Since both inclusions hold, $A \\cap B = A$.\n\n**Backward ($\\impliedby$):** Assume $A \\cap B = A$. Let $x \\in A$. Then $x \\in A \\cap B$. By definition of intersection, $x \\in A$ and $x \\in B$. Since we established $x \\in B$ for any arbitrary $x \\in A$, we conclude $A \\subseteq B$. $\\blacksquare$'
        },
        {
          id: 'q2',
          number: '2',
          marks: 3,
          question: 'What does the Well-Ordering Property of $\\mathbb{N}$ state?',
          solution: '**Statement:**\n\nThe Well-Ordering Property states that every nonempty subset of $\\mathbb{N}$ has a least element.\n\nMore formally: If $S$ is a subset of $\\mathbb{N}$ and if $S \\neq \\emptyset$, then there exists $m \\in S$ such that $m \\le k$ for all $k \\in S$. This serves as the foundation for the Principle of Mathematical Induction. $\\blacksquare$'
        },
        {
          id: 'q3',
          number: '3',
          marks: 3,
          question: 'Show that the set of even natural numbers is denumerable.',
          solution: '**Proof:**\n\nLet $E := \\{2n : n \\in \\mathbb{N}\\}$ be the set of even natural numbers.\n\nA set is denumerable if there exists a bijection from $\\mathbb{N}$ onto it. Define a mapping $f: \\mathbb{N} \\to E$ by $f(n) := 2n$ for $n \\in \\mathbb{N}$.\n\n**Injective:** If $f(n_1) = f(n_2)$, then $2n_1 = 2n_2$, which implies $n_1 = n_2$.\n\n**Surjective:** For any even number $e \\in E$, by definition there exists some $k \\in \\mathbb{N}$ such that $e = 2k$. Then $f(k) = 2k = e$.\n\nSince $f$ is a bijection, $E$ is denumerable. $\\blacksquare$'
        },
        {
          id: 'q4',
          number: '4',
          marks: 3,
          question: 'Determine the sets $A \\cap B \\cap C$ where $A=\\{k : k \\in \\mathbb{N}, k \\le 20\\}$, $B=\\{3k-1 : k \\in \\mathbb{N}\\}$, $C=\\{2k+1 : k \\in \\mathbb{N}\\}$.',
          solution: '**Solution:**\n\nThe universal set here is $A = \\{1, 2, 3, \\dots, 20\\}$.\n\n$B \\cap A$ (elements in $A$ of form $3k-1$): $\\{2, 5, 8, 11, 14, 17, 20\\}$\n\n$C \\cap A$ (elements in $A$ of form $2k+1$, i.e., odd numbers): $\\{3, 5, 7, 9, 11, 13, 15, 17, 19\\}$\n\nNow, $A \\cap B \\cap C$ is the intersection of these two sets. Looking at the two lists, the common elements are:\n\n$A \\cap B \\cap C = \\{5, 11, 17\\}$ $\\blacksquare$'
        },
        {
          id: 'q5',
          number: '5',
          marks: 3,
          question: 'Define the Cartesian Product of two sets.',
          solution: '**Definition:**\n\nIf $A$ and $B$ are nonempty sets, then the Cartesian product $A \\times B$ of $A$ and $B$ is the set of all ordered pairs $(a, b)$ with $a \\in A$ and $b \\in B$.\n\nMathematically: $A \\times B := \\{(a, b) : a \\in A, b \\in B\\}$. $\\blacksquare$'
        }
      ]
    },
    {
      id: 'sec-b',
      title: 'Section B',
      instruction: 'Answer all. Each question carries 6 Marks. (Ceiling 18)',
      questions:[
        {
          id: 'q6',
          number: '6',
          marks: 6,
          question: 'Prove that $A \\setminus (B \\cup C) = (A \\setminus B) \\cap (A \\setminus C)$.',
          solution: '**Proof:**\n\nLet $x$ be an arbitrary element. We will show that $x$ belongs to the left side if and only if it belongs to the right side.\n\n$x \\in A \\setminus (B \\cup C)$\n$\\iff x \\in A$ and $x \\notin (B \\cup C)$\n$\\iff x \\in A$ and it is false that ($x \\in B$ or $x \\in C$)\n$\\iff x \\in A$ and ($x \\notin B$ and $x \\notin C$) \n$\\iff (x \\in A \\text{ and } x \\notin B)$ and $(x \\in A \\text{ and } x \\notin C)$\n$\\iff x \\in (A \\setminus B)$ and $x \\in (A \\setminus C)$\n$\\iff x \\in (A \\setminus B) \\cap (A \\setminus C)$.\n\nSince both sets contain exactly the same elements, they are equal. $\\blacksquare$'
        },
        {
          id: 'q7',
          number: '7',
          marks: 6,
          question: 'If $f: A \\to B$ and $g: B \\to C$ be functions and let $H$ be a subset of $C$. Then prove $(g \\circ f)^{-1}(H) = f^{-1}(g^{-1}(H))$.',
          solution: '**Proof:**\n\nWe must show that any element $x$ in the left side is in the right side, and vice versa.\n\nLet $x \\in (g \\circ f)^{-1}(H)$.\nBy the definition of the inverse image, this means that the function evaluated at $x$ lands in $H$. So, $(g \\circ f)(x) \\in H$.\n\nBy definition of composition, $(g \\circ f)(x) = g(f(x))$. Thus, $g(f(x)) \\in H$.\n\nIf the function $g$ maps the element $f(x)$ into $H$, then by definition of inverse image, $f(x) \\in g^{-1}(H)$.\n\nIf the function $f$ maps the element $x$ into the set $g^{-1}(H)$, then by definition of inverse image, $x \\in f^{-1}(g^{-1}(H))$.\n\nSince all these steps are strictly reversible definitions, we conclude the sets are identical. $\\blacksquare$'
        },
        {
          id: 'q8',
          number: '8',
          marks: 6,
          question: 'Prove the set $\\mathbb{N} \\times \\mathbb{N}$ is denumerable.',
          solution: '**Proof:**\n\nTo show a set is denumerable, we must find a bijection between it and $\\mathbb{N}$. We use Cantor\'s diagonal procedure.\n\nThe set $\\mathbb{N} \\times \\mathbb{N}$ consists of all ordered pairs $(m, n)$ for $m, n \\in \\mathbb{N}$. We enumerate these pairs according to increasing sum $k = m + n$, and within each sum, increasing $m$.\n\nDiagonals:\n$k=2: (1,1)$\n$k=3: (1,2), (2,1)$\n$k=4: (1,3), (2,2), (3,1)$\n\nThe number of elements in the first $k-1$ diagonals is $\\frac{1}{2}(k-1)k$. \nFor a pair $(m, n)$, it sits on the $k$-th diagonal where $k = m + n - 1$. The number of points in preceding diagonals is $\\frac{1}{2}(m+n-2)(m+n-1)$.\n\nSince $(m,n)$ is the $m$-th point on this diagonal, its position in the overall enumeration is:\n$h(m, n) = \\frac{1}{2}(m+n-2)(m+n-1) + m$\n\nThis explicit counting function $h: \\mathbb{N} \\times \\mathbb{N} \\to \\mathbb{N}$ is a bijection, thus $\\mathbb{N} \\times \\mathbb{N}$ is denumerable. $\\blacksquare$'
        }
      ]
    },
    {
      id: 'sec-c',
      title: 'Section C',
      instruction: 'Answer any ONE question. Each question carries 10 marks.',
      questions:[
        {
          id: 'q9',
          number: '9',
          marks: 10,
          question: '(a) Prove that $\\mathbb{Q}$ is denumerable.\n(b) State and prove Cantor\'s Theorem.',
          solution: '**(a) Proof that $\\mathbb{Q}$ is denumerable:**\nThe positive rational numbers $\\mathbb{Q}^+$ can be formed by pairs of natural numbers $(m,n)$ representing $m/n$. Thus, we can create a surjection from $\\mathbb{N} \\times \\mathbb{N}$ to $\\mathbb{Q}^+$. Since $\\mathbb{N} \\times \\mathbb{N}$ is countable, $\\mathbb{Q}^+$ is countable (we just skip non-simplified fractions in our diagonal counting). Similarly, $\\mathbb{Q}^-$ is countable. Since $\\mathbb{Q} = \\mathbb{Q}^- \\cup \\{0\\} \\cup \\mathbb{Q}^+$ and the union of countable sets is countable, $\\mathbb{Q}$ is denumerable.\n\n**(b) Cantor\'s Theorem:** If $A$ is any set, there is no surjection from $A$ onto the set $\\mathcal{P}(A)$ of all subsets of $A$.\n\n*Proof:* Suppose $\\varphi : A \\to \\mathcal{P}(A)$ is a surjection. We define a subset $D = \\{a \\in A : a \\notin \\varphi(a)\\}$. Since $\\varphi$ is surjective and $D \\in \\mathcal{P}(A)$, there must exist $a_0 \\in A$ such that $\\varphi(a_0) = D$.\n\nDoes $a_0$ belong to $D$? \n- If $a_0 \\in D$, then by definition of $D$, $a_0 \\notin \\varphi(a_0) = D$, a contradiction.\n- If $a_0 \\notin D$, then $a_0 \\notin \\varphi(a_0)$. But the definition of $D$ says that any such element belongs to $D$, so $a_0 \\in D$, a contradiction.\nSince both cases lead to a paradox, no such surjection $\\varphi$ can exist. $\\blacksquare$'
        },
        {
          id: 'q10',
          number: '10',
          marks: 10,
          question: '(a) Prove by induction: $1^2 + 2^2 + \\dots + n^2 = \\frac{1}{6}n(n+1)(2n+1)$.\n(b) Prove that $2^n \\le (n+1)!$ for all $n \\in \\mathbb{N}$.',
          solution: '**(a) Proof:**\n*Base Case ($n=1$):* LHS $= 1^2 = 1$. RHS $= \\frac{1}{6}(1)(2)(3) = 1$. True.\n*Inductive Step:* Assume true for $k$: $1^2 + \\dots + k^2 = \\frac{1}{6}k(k+1)(2k+1)$.\nAdd $(k+1)^2$ to both sides:\n$= \\frac{1}{6}k(k+1)(2k+1) + (k+1)^2$\n$= \\frac{1}{6}(k+1) [k(2k+1) + 6(k+1)]$\n$= \\frac{1}{6}(k+1) [2k^2 + 7k + 6]$\n$= \\frac{1}{6}(k+1)(k+2)(2k+3)$\nThis is exactly the formula for $n = k+1$. By induction, it holds for all $n$.\n\n**(b) Proof:**\n*Base Case ($n=1$):* $2^1 = 2$. $(1+1)! = 2! = 2$. $2 \\le 2$ is true.\n*Inductive Step:* Assume $2^k \\le (k+1)!$.\nMultiply both sides by 2: $2^{k+1} \\le 2 \\cdot (k+1)!$\nSince $k \\ge 1$, we know $2 \\le k+2$. \nThus, $2 \\cdot (k+1)! \\le (k+2) \\cdot (k+1)! = (k+2)!$.\nTherefore, $2^{k+1} \\le (k+2)!$, establishing the $k+1$ case. By induction, it holds for all $n$. $\\blacksquare$'
        }
      ]
    }
  ]
};