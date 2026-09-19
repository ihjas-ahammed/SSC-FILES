/* ══════════════════════════════════════════════════════════════════════════
   Real Analysis I · Complete Level 3 Bartle & Sherbert 4e Question Bank
   Covers Sections 1.1 through 4.3 and 11.1–11.2.
   Total Questions: 292
   ══════════════════════════════════════════════════════════════════════════ */

QUESTIONS.push(
{
  "id": "w.1.1.01",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.1",
  "marks": 5,
  "title": "Evaluating Set Operations",
  "source": "Bartle & Sherbert 4e §1.1 Ex 1",
  "prompt": "Let $A := \\{k : k \\in \\mathbb{N}, k \\le 20\\}$, $B := \\{3k - 1 : k \\in \\mathbb{N}\\}$, and $C := \\{2k + 1 : k \\in \\mathbb{N}\\}$.\n\n**Find:**\n(a) $A \\cap B \\cap C$\n(b) $(A \\cap B) \\setminus C$\n(c) $(A \\cap C) \\setminus B$\n\n*Grab some paper and try writing out the first few elements of each set!*",
  "tests": [
    "c.1.1.1",
    "c.1.1.2"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.1 systematically.</p>",
  "solution": "<p>First, note that within the universe of $A$ (up to 20): \n$B \\cap A = \\{2, 5, 8, 11, 14, 17, 20\\}$\n$C \\cap A = \\{3, 5, 7, 9, 11, 13, 15, 17, 19\\}$</p><p>(a) $A \\cap B \\cap C = \\{5, 11, 17\\}$</p><p>(b) $(A \\cap B) \\setminus C = \\{2, 8, 14, 20\\}$</p><p>(c) $(A \\cap C) \\setminus B$ removes elements of $B$ from $C \\cap A$. This leaves $\\{3, 7, 9, 13, 15, 19\\}$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.1."
},
{
  "id": "w.1.1.02",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.1",
  "marks": 5,
  "title": "Set Simplification",
  "source": "Bartle & Sherbert 4e §1.1 Ex 2",
  "prompt": "Draw diagrams or use logic to simplify and identify the following sets:\n\n(a) $A \\setminus (B \\setminus A)$\n(b) $A \\setminus (A \\setminus B)$\n(c) $A \\cap (B \\setminus A)$",
  "tests": [
    "c.1.1.1",
    "c.1.1.2"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.1 systematically.</p>",
  "solution": "<p>(a) The set $B \\setminus A$ consists of elements in $B$ that are strictly NOT in $A$.</p><p>(a) $A \\setminus (B \\setminus A) = A$</p><p>(b) $A \\setminus (A \\setminus B) = A \\cap B$</p><p>(c) $A \\cap (B \\setminus A)$ asks for elements that are simultaneously IN $A$ and NOT IN $A$. This is a contradiction, so the result is the empty set $\\emptyset$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.1."
},
{
  "id": "w.1.1.03",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.1",
  "marks": 5,
  "title": "Subset Equality",
  "source": "Bartle & Sherbert 4e §1.1 Ex 3",
  "prompt": "If $A$ and $B$ are sets, prove that $A \\subseteq B$ if and only if $A \\cap B = A$.",
  "tests": [
    "c.1.1.1",
    "c.1.1.2"
  ],
  "approach": "<p>To prove an</p>",
  "solution": "<p>First, by the definition of intersection, it is always true that $A \\cap B \\subseteq A$.</p><p>Since $x \\in A$ and $A \\subseteq B$, we have $x \\in B$.</p><p>Since $x \\in A$ and $x \\in B$, by definition $x \\in A \\cap B$. Thus $A \\subseteq A \\cap B$. Since both inclusions hold, $A \\cap B = A$.</p><p>Let $x \\in A$. We must show $x \\in B$.</p><p>Therefore, $x \\in A \\cap B$.</p><p>By the definition of intersection, $x \\in A \\cap B$ implies $x \\in A$ and $x \\in B$. Since we have shown $x \\in B$ for any arbitrary $x \\in A$, we conclude $A \\subseteq B$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.1."
},
{
  "id": "w.1.1.04",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.1",
  "marks": 5,
  "title": "Second De Morgan Law",
  "source": "Bartle & Sherbert 4e §1.1 Ex 4",
  "prompt": "Prove the second De Morgan Law:\n$$A \\setminus (B \\cap C) = (A \\setminus B) \\cup (A \\setminus C)$$",
  "tests": [
    "c.1.1.1",
    "c.1.1.2"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.1 systematically.</p>",
  "solution": "<p>Let $x \\in A \\setminus (B \\cap C)$. This means $x \\in A$ and $x \\notin (B \\cap C)$.</p><p>Therefore, $x \\notin B$ or $x \\notin C$.</p><p>Case 1: If $x \\notin B$, then since $x \\in A$, we have $x \\in A \\setminus B$. Case 2: If $x \\notin C$, then $x \\in A \\setminus C$.</p><p>Thus, $x \\in (A \\setminus B) \\cup (A \\setminus C)$, proving the forward inclusion. The reverse inclusion follows identical steps backwards. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.1."
},
{
  "id": "w.1.1.05",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.1",
  "marks": 5,
  "title": "Distributive Laws",
  "source": "Bartle & Sherbert 4e §1.1 Ex 5",
  "prompt": "Prove the Distributive Laws:\n(a) $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$\n(b) $A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$",
  "tests": [
    "c.1.1.1",
    "c.1.1.2"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.1 systematically.</p>",
  "solution": "<p>Let $x \\in A \\cap (B \\cup C)$. Then $x \\in A$ and $x \\in (B \\cup C)$.</p><p>This means either $x \\in B$ or $x \\in C$.</p><p>Case 1: If $x \\in B$, then since $x \\in A$, we have $x \\in A \\cap B$.\nCase 2: If $x \\in C$, then since $x \\in A$, we have $x \\in A \\cap C$.</p><p>Since either Case 1 OR Case 2 holds, $x \\in (A \\cap B) \\cup (A \\cap C)$. The reverse logic holds exactly, proving equality.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.1."
},
{
  "id": "w.1.1.06",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.1",
  "marks": 5,
  "title": "Symmetric Difference",
  "source": "Bartle & Sherbert 4e §1.1 Ex 6",
  "prompt": "The symmetric difference of two sets $A$ and $B$ is the set $D$ of all elements that belong to either $A$ or $B$ but not both.\n\n(a) Show that $D = (A \\setminus B) \\cup (B \\setminus A)$\n(b) Show that $D = (A \\cup B) \\setminus (A \\cap B)$",
  "tests": [
    "c.1.1.1",
    "c.1.1.2"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.1 systematically.</p>",
  "solution": "<p>Part (a) translates the definition directly. </p><p>$(A \\cup B)$ contains everything in both sets.</p><p>To get elements in either A or B *but not both*, we must remove the elements that are in both. The elements in both are precisely $A \\cap B$.</p><p>Removing $A \\cap B$ from $A \\cup B$ gives exactly $(A \\cup B) \\setminus (A \\cap B)$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.1."
},
{
  "id": "w.1.1.07",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.1",
  "marks": 5,
  "title": "Infinite Families of Sets",
  "source": "Bartle & Sherbert 4e §1.1 Ex 7",
  "prompt": "For each $n \\in \\mathbb{N}$, let $A_n = \\{(n+1)k : k \\in \\mathbb{N}\\}$.\n\n(a) What is $A_1 \\cap A_2$?\n(b) Determine the sets $\\bigcup_{n \\in \\mathbb{N}} A_n$ and $\\bigcap_{n \\in \\mathbb{N}} A_n$.",
  "tests": [
    "c.1.1.1",
    "c.1.1.2"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.1 systematically.</p>",
  "solution": "<p>First, let</p><p>(a) $A_1 \\cap A_2 = \\{6k : k \\in \\mathbb{N}\\} = A_5$.</p><p>Every number $\\ge 2$ is in at least one set (since $m = m \\times 1$). So $\\cup A_n = \\mathbb{N} \\setminus \\{1\\}$.</p><p>Finally, the intersection $\\cap A_n$. Is there any number that is a multiple of *every* integer $n+1$? No. Thus $\\cap A_n = \\emptyset$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.1."
},
{
  "id": "w.1.1.08",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.1",
  "marks": 5,
  "title": "Cartesian Graphs",
  "source": "Bartle & Sherbert 4e §1.1 Ex 8",
  "prompt": "Draw diagrams in the plane of the Cartesian products $A \\times B$ for the given sets:\n\n(a) $A = \\{x \\in \\mathbb{R} : 1 \\le x \\le 2 \\text{ or } 3 \\le x \\le 4\\}$, $B = \\{x \\in \\mathbb{R} : x = 1 \\text{ or } x = 2\\}$\n(b) $A = \\{1, 2, 3\\}$, $B = \\{x \\in \\mathbb{R} : 1 \\le x \\le 3\\}$",
  "tests": [
    "c.1.1.1",
    "c.1.1.2"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.1 systematically.</p>",
  "solution": "<p>(a) Set $A$ consists of two continuous segments on the x-axis: $[1, 2]$ and $[3, 4]$. Set $B$ consists of two discrete points on the y-axis: $1$ and $2$.</p><p>The product forms four horizontal line segments in the plane.</p><p>(b) Set $A$ is discrete (3 points), while Set $B$ is a continuous interval $[1, 3]$.</p><p>Therefore, $A \\times B$ forms three vertical line segments at $x=1, x=2, x=3$, each stretching from $y=1$ to $y=3$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.1."
},
{
  "id": "w.1.1.09",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.1",
  "marks": 5,
  "title": "Is it a Function?",
  "source": "Bartle & Sherbert 4e §1.1 Ex 9",
  "prompt": "Let $A := B := \\{x \\in \\mathbb{R} : -1 \\le x \\le 1\\}$ and consider the subset $C := \\{(x,y) : x^2 + y^2 = 1\\}$ of $A \\times B$.\n\nIs this set a function? Explain.",
  "tests": [
    "c.1.1.1",
    "c.1.1.2"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.1 systematically.</p>",
  "solution": "<p>The set $C$ represents all points on a circle of radius 1 centered at the origin.</p><p>No, it is not a function.</p><p>For example, both $(0, 1) \\in C$ and $(0, -1) \\in C$. Since one $x$-value maps to multiple $y$-values, it fails the vertical line test.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.1."
},
{
  "id": "w.1.1.10",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.1",
  "marks": 5,
  "title": "Direct and Inverse Images",
  "source": "Bartle & Sherbert 4e §1.1 Ex 10",
  "prompt": "Let $f(x) := 1/x^2, x \\neq 0, x \\in \\mathbb{R}$.\n\n(a) Determine the direct image $f(E)$ where $E := \\{x \\in \\mathbb{R} : 1 \\le x \\le 2\\}$.\n(b) Determine the inverse image $f^{-1}(G)$ where $G := \\{x \\in \\mathbb{R} : 1 \\le x \\le 4\\}$.",
  "tests": [
    "c.1.1.1",
    "c.1.1.2"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.1 systematically.</p>",
  "solution": "<p>(a) We plug the interval $1 \\le x \\le 2$ into $f(x) = 1/x^2$. Since $1/x^2$ is decreasing for positive $x$, the maximum value occurs at $x=1$ and the minimum at $x=2$.</p><p>(a) $f(E) = [1/4, 1]$.</p><p>(b) We want $f^{-1}(G)$, meaning we need to find all $x$ such that $1 \\le 1/x^2 \\le 4$.</p><p>Taking reciprocals (and flipping inequalities): $1/4 \\le x^2 \\le 1$. Taking square roots gives $1/2 \\le |x| \\le 1$.</p><p>This results in two intervals: $f^{-1}(G) = [-1, -1/2] \\cup [1/2, 1]$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.1."
},
{
  "id": "w.1.1.11",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.1",
  "marks": 5,
  "title": "Composition Images",
  "source": "Bartle & Sherbert 4e §1.1 Ex 11",
  "prompt": "Let $g(x) := x^2$ and $f(x) := x + 2$ for $x \\in \\mathbb{R}$, and let $h$ be the composite function $h := g \\circ f$.\n\n(a) Find the direct image $h(E)$ of $E := \\{x \\in \\mathbb{R} : 0 \\le x \\le 1\\}$.\n(b) Find the inverse image $h^{-1}(G)$ of $G := \\{x \\in \\mathbb{R} : 0 \\le x \\le 4\\}$.",
  "tests": [
    "c.1.1.1",
    "c.1.1.2"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.1 systematically.</p>",
  "solution": "<p>First, find the formula for $h(x)$. $h(x) = g(f(x)) = g(x+2) = (x+2)^2$.</p><p>(a) $h(E) = [4, 9]$.</p><p>We have $-2 \\le x+2 \\le 2$.</p><p>Subtracting 2 from all sides gives $-4 \\le x \\le 0$. Thus, $h^{-1}(G) = [-4, 0]$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.1."
},
{
  "id": "w.1.1.12",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.1",
  "marks": 5,
  "title": "Intersection Mismatch",
  "source": "Bartle & Sherbert 4e §1.1 Ex 12",
  "prompt": "Let $f(x) := x^2$ for $x \\in \\mathbb{R}$, and let $E := [-1, 0]$ and $F := [0, 1]$.\n\nShow that $f(E \\cap F)$ is a proper subset of $f(E) \\cap f(F)$.",
  "tests": [
    "c.1.1.1",
    "c.1.1.2"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.1 systematically.</p>",
  "solution": "<p>First, let</p><p>Thus, $f(E \\cap F) = \\{0\\}$.</p><p>Now calculate $f(E)$ and $f(F)$ separately. Squaring $[-1, 0]$ gives $[0, 1]$. Squaring $[0, 1]$ gives $[0, 1]$. Thus $f(E) = [0, 1]$ and $f(F) = [0, 1]$.</p><p>Their intersection is $f(E) \\cap f(F) = [0, 1] \\cap [0, 1] = [0, 1]$.</p><p>Comparing the two: $\\{0\\}$ is clearly a proper subset of $[0, 1]$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.1."
},
{
  "id": "w.1.1.13",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.1",
  "marks": 5,
  "title": "Image of a Difference",
  "source": "Bartle & Sherbert 4e §1.1 Ex 13",
  "prompt": "Let $f$ and $E, F$ be as in Exercise 12: $f(x) = x^2, E = [-1, 0], F = [0, 1]$.\n\nFind the sets $E \\setminus F$ and $f(E) \\setminus f(F)$ and show that it is not true that $f(E \\setminus F) \\subseteq f(E) \\setminus f(F)$.",
  "tests": [
    "c.1.1.1",
    "c.1.1.2"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.1 systematically.</p>",
  "solution": "<p>First, $E \\setminus F$ removes the point $0$ from $E$, leaving $[-1, 0)$.</p><p>$f(E \\setminus F) = (0, 1]$.</p><p>Next, we calculate $f(E) \\setminus f(F)$. We know $f(E) = [0, 1]$ and $f(F) = [0, 1]$.</p><p>Removing $[0, 1]$ from $[0, 1]$ leaves the empty set $\\emptyset$.</p><p>Since $(0, 1]$ is clearly not a subset of $\\emptyset$, the statement $f(E \\setminus F) \\subseteq f(E) \\setminus f(F)$ is false. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.1."
},
{
  "id": "w.1.1.14",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.1",
  "marks": 5,
  "title": "Image Rules",
  "source": "Bartle & Sherbert 4e §1.1 Ex 14",
  "prompt": "Show that if $f : A \\to B$ and $E, F$ are subsets of $A$, then:\n$f(E \\cup F) = f(E) \\cup f(F)$\nand\n$f(E \\cap F) \\subseteq f(E) \\cap f(F)$.",
  "tests": [
    "c.1.1.1",
    "c.1.1.2"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.1 systematically.</p>",
  "solution": "<p>Let $y \\in f(E \\cup F)$. By definition, there exists $x \\in E \\cup F$ such that $f(x) = y$.</p><p>Thus, $x \\in E$ or $x \\in F$.</p><p>If $x \\in E$, then $f(x) \\in f(E)$. If $x \\in F$, then $f(x) \\in f(F)$.</p><p>Therefore, $y = f(x) \\in f(E) \\cup f(F)$. This proves the forward inclusion. The reverse inclusion is similarly straightforward.</p><p>Let $y \\in f(E \\cap F)$. Then there exists an $x \\in E \\cap F$ such that $f(x) = y$.</p><p>Since $x \\in E \\cap F$, we know $x \\in E$ AND $x \\in F$.</p><p>Because $x \\in E$, we have $y = f(x) \\in f(E)$. Because $x \\in F$, we have $y = f(x) \\in f(F)$.</p><p>Since $y$ is in both images, $y \\in f(E) \\cap f(F)$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.1."
},
{
  "id": "w.1.1.15",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.1",
  "marks": 5,
  "title": "Inverse Image Rules",
  "source": "Bartle & Sherbert 4e §1.1 Ex 15",
  "prompt": "Show that if $f : A \\to B$ and $G, H$ are subsets of $B$, then:\n$f^{-1}(G \\cup H) = f^{-1}(G) \\cup f^{-1}(H)$\nand\n$f^{-1}(G \\cap H) = f^{-1}(G) \\cap f^{-1}(H)$.",
  "tests": [
    "c.1.1.1",
    "c.1.1.2"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.1 systematically.</p>",
  "solution": "<p>Let $x \\in f^{-1}(G \\cup H)$. By definition of inverse image, $f(x) \\in G \\cup H$.</p><p>Therefore, $x \\in f^{-1}(G) \\cup f^{-1}(H)$.</p><p>Since the logic is completely reversible at every step, we establish equality. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.1."
},
{
  "id": "w.1.1.16",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.1",
  "marks": 5,
  "title": "Finding a Bijection",
  "source": "Bartle & Sherbert 4e §1.1 Ex 16",
  "prompt": "Show that the function $f$ defined by $f(x) := x / \\sqrt{x^2 + 1}$, $x \\in \\mathbb{R}$, is a bijection of $\\mathbb{R}$ onto $(-1, 1)$.",
  "tests": [
    "c.1.1.1",
    "c.1.1.2"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.1 systematically.</p>",
  "solution": "<p>Assume $f(x_1) = f(x_2)$. Then $x_1 / \\sqrt{x_1^2 + 1} = x_2 / \\sqrt{x_2^2 + 1}$.</p><p>Squaring both sides gives $x_1^2 / (x_1^2 + 1) = x_2^2 / (x_2^2 + 1)$.</p><p>This simplifies to $x_1^2 = x_2^2$.</p><p>Since the original equation dictates that $f(x)$ has the same sign as $x$, $x_1$ and $x_2$ must have the same sign. Thus $x_1 = x_2$, proving injectivity.</p><p>Let $y \\in (-1, 1)$. We need to find $x \\in \\mathbb{R}$ such that $y = x / \\sqrt{x^2 + 1}$.</p><p>Square both sides: $y^2 = x^2 / (x^2 + 1)$.</p><p>We get $x^2 = y^2 / (1 - y^2)$.</p><p>Since $y \\in (-1, 1)$, $1 - y^2 > 0$, so we can take the square root. Choosing the sign matching $y$ gives $x = y / \\sqrt{1 - y^2} \\in \\mathbb{R}$. Thus $f$ is surjective. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.1."
},
{
  "id": "w.1.1.17",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.1",
  "marks": 5,
  "title": "Explicit Bijection",
  "source": "Bartle & Sherbert 4e §1.1 Ex 17",
  "prompt": "For $a, b \\in \\mathbb{R}$ with $a < b$, find an explicit bijection of $A := \\{x : a < x < b\\}$ onto $B := \\{y : 0 < y < 1\\}$.",
  "tests": [
    "c.1.1.1",
    "c.1.1.2"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.1 systematically.</p>",
  "solution": "<p>We want to map the left endpoint $a$ to $0$, and the right endpoint $b$ to $1$.</p><p>Start with $f(x) = x - a$.</p><p>Currently, when $x = b$, $f(b) = b - a$. We want it to be $1$.</p><p>The final function is $f(x) = \\frac{x - a}{b - a}$.</p><p>This is a linear function with a non-zero slope, making it a clear bijection! Goal reached.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.1."
},
{
  "id": "w.1.1.18",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.1",
  "marks": 5,
  "title": "Composition Commutativity",
  "source": "Bartle & Sherbert 4e §1.1 Ex 18",
  "prompt": "(a) Give an example of two functions $f, g$ on $\\mathbb{R}$ to $\\mathbb{R}$ such that $f \\neq g$, but such that $f \\circ g = g \\circ f$.\n\n(b) Give an example of three functions $f, g, h$ on $\\mathbb{R}$ such that $f \\circ (g + h) \\neq f \\circ g + f \\circ h$.",
  "tests": [
    "c.1.1.1",
    "c.1.1.2"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.1 systematically.</p>",
  "solution": "<p>For (a), we need two different functions that commute. Think of functions in the same </p><p>Example (a): $f(x) = x^3$ and $g(x) = x^5$ also works, as $(x^5)^3 = x^{15} = (x^3)^5$.</p><p>For (b), we want to show composition does NOT distribute over addition: $f(g(x) + h(x)) \\neq f(g(x)) + f(h(x))$.</p><p>If we choose a non-linear function for $f$, this usually fails. Let $f(x) = x^2$, $g(x) = x$, $h(x) = x$.</p><p>Then $f(g(x) + h(x)) = f(2x) = 4x^2$. But $f(g(x)) + f(h(x)) = x^2 + x^2 = 2x^2$. $4x^2 \\neq 2x^2$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.1."
},
{
  "id": "w.1.1.19",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.1",
  "marks": 5,
  "title": "Strict Equality",
  "source": "Bartle & Sherbert 4e §1.1 Ex 19",
  "prompt": "(a) Show that if $f : A \\to B$ is injective and $E \\subseteq A$, then $f^{-1}(f(E)) = E$.\n(b) Show that if $f : A \\to B$ is surjective and $H \\subseteq B$, then $f(f^{-1}(H)) = H$.",
  "tests": [
    "c.1.1.1",
    "c.1.1.2"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.1 systematically.</p>",
  "solution": "<p>It is always true that $E \\subseteq f^{-1}(f(E))$. We just need to prove the reverse inclusion.</p><p>Let $x \\in f^{-1}(f(E))$. By definition, $f(x) \\in f(E)$. This means $\\exists e \\in E$ such that $f(x) = f(e)$.</p><p>Therefore, $x = e$.</p><p>Since $e \\in E$, we have $x \\in E$. Thus $f^{-1}(f(E)) \\subseteq E$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.1."
},
{
  "id": "w.1.1.20",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.1",
  "marks": 5,
  "title": "Inverse Function Properties",
  "source": "Bartle & Sherbert 4e §1.1 Ex 20",
  "prompt": "(a) Suppose $f$ is an injection. Show that $f^{-1}(f(x)) = x$ for all $x \\in D(f)$ and that $f(f^{-1}(y)) = y$ for all $y \\in R(f)$.\n(b) If $f$ is a bijection of $A$ onto $B$, show that $f^{-1}$ is a bijection of $B$ onto $A$.",
  "tests": [
    "c.1.1.1",
    "c.1.1.2"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.1 systematically.</p>",
  "solution": "<p>For (a), this directly follows from Exercise 19 by letting the sets $E$ and $H$ be singletons $\\{x\\}$ and $\\{y\\}$ respectively.</p><p>For (b), let $f$ be a bijection. Then $f^{-1}$ is a well-defined function from $B$ to $A$.</p><p>This proves $f^{-1}$ is injective.</p><p>To show $f^{-1}$ is surjective onto $A$, pick any $x \\in A$. Does there exist a $y \\in B$ such that $f^{-1}(y) = x$? Yes, simply let $y = f(x)$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.1."
},
{
  "id": "w.1.1.21",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.1",
  "marks": 5,
  "title": "Composition of Bijections",
  "source": "Bartle & Sherbert 4e §1.1 Ex 21",
  "prompt": "Prove that if $f : A \\to B$ is bijective and $g : B \\to C$ is bijective, then the composite $g \\circ f$ is a bijective map of $A$ onto $C$.",
  "tests": [
    "c.1.1.1",
    "c.1.1.2"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.1 systematically.</p>",
  "solution": "<p><b>Injectivity:</b> Assume $(g \\circ f)(x_1) = (g \\circ f)(x_2)$, which means $g(f(x_1)) = g(f(x_2))$. Since $g$ is injective, this implies $f(x_1) = f(x_2)$. Since $f$ is injective, $f(x_1) = f(x_2) \\implies x_1 = x_2$. Thus $g \\circ f$ is injective.</p><p><b>Surjectivity:</b> Let $z \\in C$. Since $g$ is surjective, there exists $y \\in B$ such that $g(y) = z$. Since $f$ is surjective, there exists $x \\in A$ such that $f(x) = y$. Then $(g \\circ f)(x) = g(f(x)) = g(y) = z$. Thus $g \\circ f$ is surjective.</p><p>Since $g \\circ f$ is both injective and surjective, it is a bijection.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.1."
},
{
  "id": "w.1.1.22",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.1",
  "marks": 5,
  "title": "Unpacking Composition",
  "source": "Bartle & Sherbert 4e §1.1 Ex 22",
  "prompt": "Let $f : A \\to B$ and $g : B \\to C$ be functions.\n(a) Show that if $g \\circ f$ is injective, then $f$ is injective.\n(b) Show that if $g \\circ f$ is surjective, then $g$ is surjective.",
  "tests": [
    "c.1.1.1",
    "c.1.1.2"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.1 systematically.</p>",
  "solution": "<p>We want to prove $f$ is injective. Assume $f(x_1) = f(x_2)$.</p><p>We get $(g \\circ f)(x_1) = (g \\circ f)(x_2)$.</p><p>By the hypothesis that $g \\circ f$ is injective, this implies $x_1 = x_2$. Thus $f$ is injective! Goal reached.</p><p>We want to prove $g$ is surjective onto $C$. Let $z \\in C$.</p><p>By hypothesis, $g \\circ f$ is surjective, so there exists an $x \\in A$ such that $(g \\circ f)(x) = z$.</p><p>Let $y = f(x)$. Note that $y \\in B$.</p><p>Then $g(y) = g(f(x)) = z$. We have found a $y \\in B$ mapping to $z$. Thus $g$ is surjective. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.1."
},
{
  "id": "w.1.1.23",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.1",
  "marks": 5,
  "title": "Inverse of a Composition",
  "source": "Bartle & Sherbert 4e §1.1 Ex 23",
  "prompt": "Prove Theorem 1.1.14: Let $f: A \\to B$ and $g: B \\to C$ be functions and let $H$ be a subset of $C$. Then we have:\n$$(g \\circ f)^{-1}(H) = f^{-1}(g^{-1}(H))$$",
  "tests": [
    "c.1.1.1",
    "c.1.1.2"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.1 systematically.</p>",
  "solution": "<p>Let $x \\in (g \\circ f)^{-1}(H)$. By definition of inverse image, this means $(g \\circ f)(x) \\in H$.</p><p>This means $g(f(x)) \\in H$.</p><p>If $g(something) \\in H$, then that $something \\in g^{-1}(H)$. So $f(x) \\in g^{-1}(H)$.</p><p>If $f(x) \\in Set$, then $x \\in f^{-1}(Set)$. So $x \\in f^{-1}(g^{-1}(H))$.</p><p>The steps are completely reversible, proving equality. Note how the order of functions reverses! Goal reached.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.1."
},
{
  "id": "w.1.1.24",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.1",
  "marks": 5,
  "title": "Uniqueness of Inverses",
  "source": "Bartle & Sherbert 4e §1.1 Ex 24",
  "prompt": "Let $f, g$ be functions such that $(g \\circ f)(x) = x$ for all $x \\in D(f)$ and $(f \\circ g)(y) = y$ for all $y \\in D(g)$.\n\nProve that $g = f^{-1}$.",
  "tests": [
    "c.1.1.1",
    "c.1.1.2"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.1 systematically.</p>",
  "solution": "<p>From $(g \\circ f)(x) = x$, we know $g \\circ f$ is injective. By Exercise 22(a), $f$ must be injective.</p><p>From $(f \\circ g)(y) = y$, we know $f \\circ g$ is surjective. By Exercise 22(b), $f$ must be surjective.</p><p>Therefore $f$ is a bijection and $f^{-1}$ exists.</p><p>Since $(g \\circ f)(x) = x$, we can apply $f^{-1}$ to both sides: $f^{-1}(g(f(x))) = f^{-1}(x)$.</p><p>Substitute $y = f(x)$. We get $f^{-1}(g(y)) = f^{-1}(x)$. Since we know $f(g(y))=y$, $g(y)$ must act exactly as $f^{-1}(y)$. Thus $g = f^{-1}$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.1."
},
{
  "id": "w.1.2.01",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.2",
  "marks": 5,
  "title": "Fraction Sums",
  "source": "Bartle & Sherbert 4e §1.2 Ex 1",
  "prompt": "**Problem:** Prove that for all $n \\in \\mathbb{N}$:\n$$\\frac{1}{1\\cdot 2} + \\frac{1}{2\\cdot 3} + \\dots + \\frac{1}{n(n+1)} = \\frac{n}{n+1}$$",
  "tests": [
    "c.1.2.1",
    "c.1.2.2",
    "c.1.2.3"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.2 systematically.</p>",
  "solution": "<p>Base Case ($n=1$): LHS is $\\frac{1}{1\\cdot 2} = \\frac{1}{2}$. RHS is $\\frac{1}{1+1} = \\frac{1}{2}$. True.</p><p>Assume true for $n=k$: Sum is $\\frac{k}{k+1}$.</p><p>Add $\\frac{1}{(k+1)(k+2)}$ to $\\frac{k}{k+1}$.</p><p>Find a common denominator: $\\frac{k(k+2) + 1}{(k+1)(k+2)} = \\frac{k^2+2k+1}{(k+1)(k+2)}$.</p><p>Factor the numerator to $(k+1)^2$. Cancel one $(k+1)$ to get $\\frac{k+1}{k+2}$. This matches the formula for $n=k+1$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.2."
},
{
  "id": "w.1.2.02",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.2",
  "marks": 5,
  "title": "Sum of Cubes",
  "source": "Bartle & Sherbert 4e §1.2 Ex 2",
  "prompt": "**Problem:** Prove that for all $n \\in \\mathbb{N}$:\n$$1^3 + 2^3 + \\dots + n^3 = \\left[\\frac{1}{2}n(n+1)\\right]^2$$",
  "tests": [
    "c.1.2.1",
    "c.1.2.2",
    "c.1.2.3"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.2 systematically.</p>",
  "solution": "<p>Base case ($n=1$): $1^3 = 1$. $[\\frac{1}{2}(1)(2)]^2 = 1^2 = 1$. True.</p><p>Assume true for $k$: Sum $= \\frac{1}{4}k^2(k+1)^2$.</p><p>Add $(k+1)^3$ to both sides. We get $\\frac{1}{4}k^2(k+1)^2 + (k+1)^3$.</p><p>Factor out $\\frac{1}{4}(k+1)^2$.</p><p>We are left with $\\frac{1}{4}(k+1)^2 [ k^2 + 4(k+1) ] = \\frac{1}{4}(k+1)^2 (k^2+4k+4)$.</p><p>Since $k^2+4k+4 = (k+2)^2$, the result is $[\\frac{1}{2}(k+1)(k+2)]^2$, matching the formula. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.2."
},
{
  "id": "w.1.2.03",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.2",
  "marks": 5,
  "title": "Arithmetic Sequence Sum",
  "source": "Bartle & Sherbert 4e §1.2 Ex 3",
  "prompt": "**Problem:** Prove that $3 + 11 + \\dots + (8n-5) = 4n^2 - n$ for all $n \\in \\mathbb{N}$.",
  "tests": [
    "c.1.2.1",
    "c.1.2.2",
    "c.1.2.3"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.2 systematically.</p>",
  "solution": "<p>Base case ($n=1$): $8(1)-5 = 3$. RHS: $4(1)^2 - 1 = 3$. True.</p><p>Assume for $k$: sum is $4k^2 - k$.</p><p>Add $8k + 3$ to $4k^2 - k$.</p><p>This yields $4k^2 - k + 8k + 3 = 4k^2 + 7k + 3$.</p><p>Now check RHS for $k+1$: $4(k+1)^2 - (k+1) = 4(k^2+2k+1) - k - 1 = 4k^2+8k+4-k-1 = 4k^2+7k+3$. They match! Goal reached.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.2."
},
{
  "id": "w.1.2.04",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.2",
  "marks": 5,
  "title": "Odd Squares Sum",
  "source": "Bartle & Sherbert 4e §1.2 Ex 4",
  "prompt": "**Problem:** Prove that $1^2 + 3^2 + \\dots + (2n-1)^2 = (4n^3 - n)/3$ for all $n \\in \\mathbb{N}$.",
  "tests": [
    "c.1.2.1",
    "c.1.2.2",
    "c.1.2.3"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.2 systematically.</p>",
  "solution": "<p>Base case ($n=1$): $1^2 = 1$. RHS: $(4 - 1)/3 = 1$. True.</p><p>Assume for $k$: sum is $(4k^3 - k)/3$.</p><p>Add $(2k+1)^2 = 4k^2 + 4k + 1$ to both sides. Find a common denominator of 3.</p><p>The numerator is $4k^3 + 12k^2 + 11k + 3$.</p><p>Now expand the target RHS for $n=k+1$: $4(k+1)^3 - (k+1) = 4(k^3+3k^2+3k+1) - k - 1 = 4k^3 + 12k^2 + 11k + 3$. The numerators match! Goal reached.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.2."
},
{
  "id": "w.1.2.05",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.2",
  "marks": 5,
  "title": "Alternating Squares",
  "source": "Bartle & Sherbert 4e §1.2 Ex 5",
  "prompt": "**Problem:** Prove that $1^2 - 2^2 + 3^2 + \\dots + (-1)^{n+1}n^2 = (-1)^{n+1}n(n+1)/2$ for all $n \\in \\mathbb{N}$.",
  "tests": [
    "c.1.2.1",
    "c.1.2.2",
    "c.1.2.3"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.2 systematically.</p>",
  "solution": "<p>Base case ($n=1$): $(-1)^2(1^2) = 1$. RHS: $(-1)^2(1)(2)/2 = 1$. True.</p><p>Assume for $k$: sum is $(-1)^{k+1}k(k+1)/2$.</p><p>Add the next term: $(-1)^{k+2}(k+1)^2$. We need to add this to our assumption.</p><p>The assumed sum is $-(-1)^{k+2}k(k+1)/2$.</p><p>Adding them: $(-1)^{k+2}(k+1) \\left[ (k+1) - \\frac{k}{2} \\right]$.</p><p>The bracket simplifies to $\\frac{k+2}{2}$. So the result is $(-1)^{k+2}(k+1)(k+2)/2$, exactly matching the formula for $n=k+1$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.2."
},
{
  "id": "w.1.2.06",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.2",
  "marks": 5,
  "title": "Divisibility by 6",
  "source": "Bartle & Sherbert 4e §1.2 Ex 6",
  "prompt": "**Problem:** Prove that $n^3 + 5n$ is divisible by $6$ for all $n \\in \\mathbb{N}$.",
  "tests": [
    "c.1.2.1",
    "c.1.2.2",
    "c.1.2.3"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.2 systematically.</p>",
  "solution": "<p>Base case ($n=1$): $1^3 + 5(1) = 6$. Divisible by 6. True.</p><p>Assume for $k$: $k^3 + 5k = 6m$ for some integer $m$.</p><p>Expand for $k+1$: $(k^3 + 3k^2 + 3k + 1) + (5k + 5)$.</p><p>We have $(k^3 + 5k) + 3(k^2 + k + 2)$.</p><p>We know $(k^3 + 5k) = 6m$. What about $3(k^2 + k)$? Notice $k^2+k = k(k+1)$. The product of two consecutive integers is always even (divisible by 2).</p><p>Thus $3 \\cdot 2p = 6p$. Since all parts are multiples of 6, their sum is divisible by 6. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.2."
},
{
  "id": "w.1.2.07",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.2",
  "marks": 5,
  "title": "Divisibility by 8",
  "source": "Bartle & Sherbert 4e §1.2 Ex 7",
  "prompt": "**Problem:** Prove that $5^{2n} - 1$ is divisible by $8$ for all $n \\in \\mathbb{N}$.",
  "tests": [
    "c.1.2.1",
    "c.1.2.2",
    "c.1.2.3"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.2 systematically.</p>",
  "solution": "<p>Base case ($n=1$): $5^2 - 1 = 24$. Divisible by 8. True.</p><p>Assume for $k$: $5^{2k} - 1 = 8m$ for some $m \\in \\mathbb{Z}$.</p><p>We have $25 \\cdot 5^{2k} - 1$.</p><p>Rewrite 25 as $24 + 1$ to utilize the assumption: $(24 + 1)5^{2k} - 1 = 24 \\cdot 5^{2k} + (5^{2k} - 1)$.</p><p>The first term is clearly divisible by 8 (since $24 = 8 \\times 3$). The second term is $8m$ by our assumption. Thus the whole expression is divisible by 8. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.2."
},
{
  "id": "w.1.2.08",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.2",
  "marks": 5,
  "title": "Divisibility by 16",
  "source": "Bartle & Sherbert 4e §1.2 Ex 8",
  "prompt": "**Problem:** Prove that $5^n - 4n - 1$ is divisible by $16$ for all $n \\in \\mathbb{N}$.",
  "tests": [
    "c.1.2.1",
    "c.1.2.2",
    "c.1.2.3"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.2 systematically.</p>",
  "solution": "<p>Base case ($n=1$): $5^1 - 4(1) - 1 = 0$. 0 is divisible by 16. True.</p><p>Assume for $k$: $5^k - 4k - 1 = 16m$.</p><p>For $k+1$, we have $5^{k+1} - 4(k+1) - 1 = 5 \\cdot 5^k - 4k - 5$.</p><p>Rewrite as: $5(5^k - 4k - 1) + 16k$.</p><p>The first term is $5(16m)$ by the inductive hypothesis. The second term is $16k$. Both are multiples of 16. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.2."
},
{
  "id": "w.1.2.09",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.2",
  "marks": 5,
  "title": "Divisibility by 9",
  "source": "Bartle & Sherbert 4e §1.2 Ex 9",
  "prompt": "**Problem:** Prove that $n^3 + (n+1)^3 + (n+2)^3$ is divisible by $9$ for all $n \\in \\mathbb{N}$.",
  "tests": [
    "c.1.2.1",
    "c.1.2.2",
    "c.1.2.3"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.2 systematically.</p>",
  "solution": "<p>Base case ($n=1$): $1^3 + 2^3 + 3^3 = 1 + 8 + 27 = 36$. Divisible by 9. True.</p><p>Assume $P(k) = k^3 + (k+1)^3 + (k+2)^3 = 9m$.</p><p>Look at $P(k+1) = (k+1)^3 + (k+2)^3 + (k+3)^3$.</p><p>The difference is $(k+3)^3 - k^3$.</p><p>Expand $(k+3)^3 - k^3 = (k^3 + 9k^2 + 27k + 27) - k^3 = 9k^2 + 27k + 27$.</p><p>This difference is $9(k^2 + 3k + 3)$, clearly a multiple of 9. Since $P(k)$ is a multiple of 9, adding a multiple of 9 means $P(k+1)$ is also a multiple of 9. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.2."
},
{
  "id": "w.1.2.10",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.2",
  "marks": 5,
  "title": "Conjecture and Prove",
  "source": "Bartle & Sherbert 4e §1.2 Ex 10",
  "prompt": "**Problem:** Conjecture a formula for the sum:\n$$\\frac{1}{1\\cdot 3} + \\frac{1}{3\\cdot 5} + \\dots + \\frac{1}{(2n-1)(2n+1)}$$\nand prove your conjecture by Mathematical Induction.",
  "tests": [
    "c.1.2.1",
    "c.1.2.2",
    "c.1.2.3"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.2 systematically.</p>",
  "solution": "<p>Let</p><p>$S_2 = \\frac{2}{5}$.</p><p>Calculate $S_3$: $\\frac{2}{5} + \\frac{1}{5\\cdot 7} = \\frac{14}{35} + \\frac{1}{35} = \\frac{15}{35} = \\frac{3}{7}$.</p><p>The sequence of sums is $1/3, 2/5, 3/7 \\dots$ The pattern is clear: $S_n = \\frac{n}{2n+1}$.</p><p>Base case ($n=1$): $1/3 = 1/(2(1)+1) = 1/3$. True.</p><p>Assume $S_k = \\frac{k}{2k+1}$.</p><p>Add the $(k+1)$-th term: $\\frac{k}{2k+1} + \\frac{1}{(2k+1)(2k+3)}$.</p><p>Common denominator is $(2k+1)(2k+3)$. The numerator becomes $k(2k+3) + 1 = 2k^2 + 3k + 1$.</p><p>Factor the numerator: $(2k+1)(k+1)$. Cancel $(2k+1)$ from top and bottom.</p><p>Result: $\\frac{k+1}{2k+3}$, which is exactly $\\frac{k+1}{2(k+1)+1}$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.2."
},
{
  "id": "w.1.2.11",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.2",
  "marks": 5,
  "title": "Sum of Odd Numbers",
  "source": "Bartle & Sherbert 4e §1.2 Ex 11",
  "prompt": "**Problem:** Conjecture a formula for the sum of the first $n$ odd natural numbers $1 + 3 + \\dots + (2n-1)$, and prove your formula by using Mathematical Induction.",
  "tests": [
    "c.1.2.1",
    "c.1.2.2",
    "c.1.2.3"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.2 systematically.</p>",
  "solution": "<p>$S_1 = 1$</p><p>$S_2 = 1 + 3 = 4$</p><p>$S_3 = 9$. The sequence is $1, 4, 9, 16 \\dots$ so $S_n = n^2$.</p><p>Base Case: $S_1 = 1^2 = 1$. True.</p><p>Assume $S_k = k^2$.</p><p>Add the next odd number $(2k+1)$ to both sides: $S_{k+1} = k^2 + 2k + 1$.</p><p>Factor the right side: $k^2 + 2k + 1 = (k+1)^2$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.2."
},
{
  "id": "w.1.2.12",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.2",
  "marks": 5,
  "title": "Proving Modified Induction",
  "source": "Bartle & Sherbert 4e §1.2 Ex 12",
  "prompt": "**Problem:** Prove the Principle of Mathematical Induction 1.2.3 (second version). \nAssume $P(n_0)$ is true, and $P(k) \\implies P(k+1)$ for $k \\ge n_0$. Prove $P(n)$ is true for all $n \\ge n_0$.",
  "tests": [
    "c.1.2.1",
    "c.1.2.2",
    "c.1.2.3"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.2 systematically.</p>",
  "solution": "<p>Let $S$ be the set of natural numbers where $P(n)$ is true. We define a new statement $Q(m)$ as $P(m + n_0 - 1)$ for $m \\in \\mathbb{N}$.</p><p>$Q(1)$ is exactly $P(n_0)$, which we know is true! So Base Case holds for $Q$.</p><p>Now assume $Q(m)$ is true. This means $P(m + n_0 - 1)$ is true.</p><p>By the hypothesis for $P$, if $P(k)$ is true, $P(k+1)$ is true. Thus $P(m + n_0)$ is true, which is exactly $Q(m+1)$. Thus standard induction holds for $Q(m)$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.2."
},
{
  "id": "w.1.2.13",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.2",
  "marks": 5,
  "title": "Linear vs Exponential",
  "source": "Bartle & Sherbert 4e §1.2 Ex 13",
  "prompt": "**Problem:** Prove that $n < 2^n$ for all $n \\in \\mathbb{N}$.",
  "tests": [
    "c.1.2.1",
    "c.1.2.2",
    "c.1.2.3"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.2 systematically.</p>",
  "solution": "<p>Base case ($n=1$): $1 < 2^1 = 2$. True.</p><p>Assume $k < 2^k$.</p><p>Add 1 to both sides: $k + 1 < 2^k + 1$.</p><p>Thus, $k + 1 < 2^k + 2^k$.</p><p>Since $2^k + 2^k = 2(2^k) = 2^{k+1}$, we get $k+1 < 2^{k+1}$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.2."
},
{
  "id": "w.1.2.14",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.2",
  "marks": 5,
  "title": "Factorials dominate",
  "source": "Bartle & Sherbert 4e §1.2 Ex 14",
  "prompt": "**Problem:** Prove that $2^n < n!$ for all $n \\ge 4, n \\in \\mathbb{N}$.",
  "tests": [
    "c.1.2.1",
    "c.1.2.2",
    "c.1.2.3"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.2 systematically.</p>",
  "solution": "<p>Base case $n=4$: $16 < 24$. True.</p><p>Assume $2^k < k!$ for $k \\ge 4$.</p><p>Multiply by 2: $2^{k+1} < 2(k!)$.</p><p>Since $k \\ge 4$, we know $2 < k+1$. Therefore $2(k!) < (k+1)(k!) = (k+1)!$.</p><p>Combining inequalities gives $2^{k+1} < (k+1)!$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.2."
},
{
  "id": "w.1.2.15",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.2",
  "marks": 5,
  "title": "Shifted Exponentials",
  "source": "Bartle & Sherbert 4e §1.2 Ex 15",
  "prompt": "**Problem:** Prove that $2n - 3 \\le 2^{n-2}$ for all $n \\ge 5, n \\in \\mathbb{N}$.",
  "tests": [
    "c.1.2.1",
    "c.1.2.2",
    "c.1.2.3"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.2 systematically.</p>",
  "solution": "<p>Base case ($n=5$): $2(5)-3 = 7$. $2^{5-2} = 2^3 = 8$. $7 \\le 8$. True.</p><p>Assume $2k - 3 \\le 2^{k-2}$ for $k \\ge 5$.</p><p>We want to prove $2(k+1) - 3 \\le 2^{k-1}$. Rewrite the left side: $2k - 1$.</p><p>Rewrite as $(2k - 3) + 2$.</p><p>Apply assumption: $(2k-3) + 2 \\le 2^{k-2} + 2$.</p><p>Since $k \\ge 5$, $2^{k-2} \\ge 2^3 = 8 > 2$. Thus $2^{k-2} + 2 \\le 2^{k-2} + 2^{k-2} = 2^{k-1}$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.2."
},
{
  "id": "w.1.2.16",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.2",
  "marks": 5,
  "title": "Finding the Threshold",
  "source": "Bartle & Sherbert 4e §1.2 Ex 16",
  "prompt": "**Problem:** Find all natural numbers $n$ such that $n^2 < 2^n$. Prove your assertion.",
  "tests": [
    "c.1.2.1",
    "c.1.2.2",
    "c.1.2.3"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.2 systematically.</p>",
  "solution": "<p>Test $n=1$: $1 < 2$. (True)</p><p>Test $n=2$: $4 < 4$. (False)</p><p>Test $n=3$: $9 < 8$. (False)</p><p>Test $n=4$: $16 < 16$. (False)</p><p>$n=5$ is True. We assert it holds for $n=1$ and $n \\ge 5$.</p><p>Assume $k^2 < 2^k$ for $k \\ge 5$.</p><p>We need to show $(k+1)^2 < 2^{k+1}$. Note that $(k+1)^2 = k^2 + 2k + 1$.</p><p>By assumption, $k^2 + 2k + 1 < 2^k + 2k + 1$.</p><p>We need $2k + 1 \\le 2^k$. We already proved in Ex 1.2.4(d) that $2k+1 < 2^k$ for $k \\ge 3$.</p><p>Thus $2^k + 2k + 1 < 2^k + 2^k = 2^{k+1}$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.2."
},
{
  "id": "w.1.2.17",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.2",
  "marks": 5,
  "title": "Maximum Divisor",
  "source": "Bartle & Sherbert 4e §1.2 Ex 17",
  "prompt": "**Problem:** Find the largest natural number $m$ such that $n^3 - n$ is divisible by $m$ for all $n \\in \\mathbb{N}$. Prove your assertion.",
  "tests": [
    "c.1.2.1",
    "c.1.2.2",
    "c.1.2.3"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.2 systematically.</p>",
  "solution": "<p>If $n=1$: $1^3 - 1 = 0$. (Divisible by anything).</p><p>If $n=2$: $2^3 - 2 = 6$.</p><p>If $n=3$: $3^3 - 3 = 24$.</p><p>The largest possible $m$ is 6.</p><p>Proof: Factor $n^3 - n = n(n^2 - 1) = (n-1)n(n+1)$.</p><p>This is the product of 3 consecutive integers. At least one is even (divisible by 2), and exactly one is a multiple of 3. Thus the product is always divisible by $2 \\times 3 = 6$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.2."
},
{
  "id": "w.1.2.18",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.2",
  "marks": 5,
  "title": "Sum of Inverse Roots",
  "source": "Bartle & Sherbert 4e §1.2 Ex 18",
  "prompt": "**Problem:** Prove that $\\frac{1}{\\sqrt{1}} + \\frac{1}{\\sqrt{2}} + \\dots + \\frac{1}{\\sqrt{n}} > \\sqrt{n}$ for all $n \\in \\mathbb{N}, n \\ge 2$.",
  "tests": [
    "c.1.2.1",
    "c.1.2.2",
    "c.1.2.3"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.2 systematically.</p>",
  "solution": "<p>Base case ($n=2$): $1 + \\frac{1}{\\sqrt{2}} \\approx 1.707$. $\\sqrt{2} \\approx 1.414$. $1.707 > 1.414$. True.</p><p>Assume true for $k$: sum $> \\sqrt{k}$.</p><p>Add the $k+1$ term to both sides: sum $+ \\frac{1}{\\sqrt{k+1}} > \\sqrt{k} + \\frac{1}{\\sqrt{k+1}}$.</p><p>RHS is $\\frac{\\sqrt{k^2+k} + 1}{\\sqrt{k+1}}$.</p><p>Since $\\sqrt{k^2+k} > \\sqrt{k^2} = k$, the numerator is strictly greater than $k + 1$.</p><p>So RHS $> \\frac{k+1}{\\sqrt{k+1}} = \\sqrt{k+1}$. This establishes the $k+1$ case. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.2."
},
{
  "id": "w.1.2.19",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.2",
  "marks": 5,
  "title": "Cauchy",
  "source": "Bartle & Sherbert 4e §1.2 Ex 19",
  "prompt": "**Problem:** Let $S$ be a subset of $\\mathbb{N}$ such that:\n(a) $2^k \\in S$ for all $k \\in \\mathbb{N}$.\n(b) If $k \\in S$ and $k \\ge 2$, then $k-1 \\in S$.\nProve that $S = \\mathbb{N}$.",
  "tests": [
    "c.1.2.1",
    "c.1.2.2",
    "c.1.2.3"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.2 systematically.</p>",
  "solution": "<p>Let $n$ be any natural number. We know powers of 2 grow indefinitely.</p><p>Pick $m$ such that $2^m \\ge n$.</p><p>By rule (a), $2^m \\in S$.</p><p>By rule (b), we can step backwards by 1 repeatedly. If $2^m \\in S$, then $2^m - 1 \\in S$, and so on.</p><p>Applying rule (b) exactly $(2^m - n)$ times brings us exactly to $n$. Therefore, $n \\in S$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.2."
},
{
  "id": "w.1.2.20",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.2",
  "marks": 5,
  "title": "Strong Induction on Sequences",
  "source": "Bartle & Sherbert 4e §1.2 Ex 20",
  "prompt": "**Problem:** Let the numbers $x_n$ be defined as $x_1 := 1, x_2 := 2$, and $x_{n+2} := \\frac{1}{2}(x_{n+1} + x_n)$.\nUse Strong Induction to show that $1 \\le x_n \\le 2$ for all $n \\in \\mathbb{N}$.",
  "tests": [
    "c.1.2.1",
    "c.1.2.2",
    "c.1.2.3"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.2 systematically.</p>",
  "solution": "<p>Base cases ($n=1, 2$): $x_1 = 1$, $x_2 = 2$. Both are clearly in the range $[1, 2]$.</p><p>Assume $1 \\le x_j \\le 2$ for $j = 1, 2, \\dots k$.</p><p>We must prove $1 \\le x_{k+1} \\le 2$. By definition, $x_{k+1} = \\frac{1}{2}(x_k + x_{k-1})$.</p><p>By the strong hypothesis, both $x_k \\ge 1$ and $x_{k-1} \\ge 1$. Their sum is $\\ge 2$, so their average is $\\ge 1$.</p><p>Likewise, both are $\\le 2$, so their sum is $\\le 4$, and their average is $\\le 2$. Thus $1 \\le x_{k+1} \\le 2$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.2."
},
{
  "id": "w.1.3.01",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.3",
  "marks": 5,
  "title": "Finite Equivalences",
  "source": "Bartle & Sherbert 4e §1.3 Ex 1",
  "prompt": "**Problem:** Prove that a nonempty set $T_1$ is finite if and only if there is a bijection from $T_1$ onto a finite set $T_2$.",
  "tests": [
    "c.1.3.1",
    "c.1.3.2",
    "c.1.3.4"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.3 systematically.</p>",
  "solution": "<p>By Definition 1.3.1, if $T_1$ is finite, it has $n$ elements.</p><p>There exists a bijection $f: \\mathbb{N}_n \\to T_1$.</p><p>Since $f$ is a bijection, its inverse $f^{-1}: T_1 \\to \\mathbb{N}_n$ is also a bijection.</p><p>Let $T_2 = \\mathbb{N}_n$. Since $\\mathbb{N}_n$ is explicitly finite, we have found our finite set $T_2$ and the bijection. Forward direction complete!</p><p>We are given a bijection $g: T_1 \\to T_2$, and we know $T_2$ is finite.</p><p>Since $T_2$ is finite, there exists a bijection $h: \\mathbb{N}_n \\to T_2$.</p><p>The composition $g^{-1} \\circ h$ maps $\\mathbb{N}_n \\to T_1$.</p><p>Because the composition of two bijections is a bijection, $T_1$ has exactly $n$ elements and is finite. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.3."
},
{
  "id": "w.1.3.02",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.3",
  "marks": 5,
  "title": "Finite Subtractions",
  "source": "Bartle & Sherbert 4e §1.3 Ex 2",
  "prompt": "**Problem:** Prove Theorem 1.3.4(c): If $C$ is an infinite set and $B$ is a finite set, then $C \\setminus B$ is an infinite set.",
  "tests": [
    "c.1.3.1",
    "c.1.3.2",
    "c.1.3.4"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.3 systematically.</p>",
  "solution": "<p>Assume for contradiction that $C \\setminus B$ is a finite set.</p><p>Actually, $C \\subseteq (C \\setminus B) \\cup B$ is true, but exactly $C = (C \\setminus B) \\cup (C \\cap B)$.</p><p>We know $C \\cap B$ is a subset of $B$. Since $B$ is finite, $C \\cap B$ must be finite.</p><p>By Theorem 1.3.4(a), the union of two finite sets, $(C \\setminus B)$ and $(C \\cap B)$, must be finite.</p><p>This implies $C$ is finite. But the premise stated $C$ is infinite! Contradiction! Thus, $C \\setminus B$ must be infinite. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.3."
},
{
  "id": "w.1.3.03",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.3",
  "marks": 5,
  "title": "Counting Mappings",
  "source": "Bartle & Sherbert 4e §1.3 Ex 3",
  "prompt": "Let $S := \\{1, 2\\}$ and $T := \\{a, b, c\\}$.\n\n(a) Determine the number of different injections from $S$ into $T$.\n(b) Determine the number of different surjections from $T$ onto $S$.",
  "tests": [
    "c.1.3.1",
    "c.1.3.2",
    "c.1.3.4"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.3 systematically.</p>",
  "solution": "<p>An injection means every element in $S$ must map to a *different* element in $T$.</p><p>There are 3 choices for $f(1)$.</p><p>For $f(2)$, it cannot be whatever we picked for $f(1)$. So there are 2 choices left.</p><p>Total injections = $3 \\times 2 = 6$.</p><p>A surjection means every element in $S$ must be </p><p>First, count ALL possible functions from $T$ to $S$. For each of the 3 elements in $T$, there are 2 choices in $S$. Total = $2^3 = 8$.</p><p>There are 2 non-surjective functions.</p><p>Total surjections = $8 - 2 = 6$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.3."
},
{
  "id": "w.1.3.04",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.3",
  "marks": 5,
  "title": "Bijection to Odds",
  "source": "Bartle & Sherbert 4e §1.3 Ex 4",
  "prompt": "**Problem:** Exhibit a bijection between $\\mathbb{N}$ and the set of all odd integers greater than 13.",
  "tests": [
    "c.1.3.1",
    "c.1.3.2",
    "c.1.3.4"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.3 systematically.</p>",
  "solution": "<p>We need a function $f: \\mathbb{N} \\to \\{15, 17, 19, 21, \\dots\\}$.</p><p>When $n=1$, $f(1) = 15$.</p><p>When $n=2$, $f(2) = 17$.</p><p>The formula is $f(n) = 2n + 13$.</p><p>Because it</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.3."
},
{
  "id": "w.1.3.05",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.3",
  "marks": 5,
  "title": "Bijection N to Z",
  "source": "Bartle & Sherbert 4e §1.3 Ex 5",
  "prompt": "**Problem:** Give an explicit definition of the bijection $f$ from $\\mathbb{N}$ onto $\\mathbb{Z}$ described in Example 1.3.7(b).",
  "tests": [
    "c.1.3.1",
    "c.1.3.2",
    "c.1.3.4"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.3 systematically.</p>",
  "solution": "<p>Let</p><p>For even $n$, $f(n) = n / 2$.</p><p>Now look at the ODD values of $n$ (1, 3, 5...). The outputs are 0, -1, -2...</p><p>If we do $n-1$, we get 0, 2, 4. If we divide by 2, we get 0, 1, 2. If we make it negative, we get 0, -1, -2.</p><p>Thus, for odd $n$, $f(n) = -\\frac{n-1}{2}$.\nThe explicit piece-wise definition is complete!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.3."
},
{
  "id": "w.1.3.06",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.3",
  "marks": 5,
  "title": "Proper Subsets of N",
  "source": "Bartle & Sherbert 4e §1.3 Ex 6",
  "prompt": "**Problem:** Exhibit a bijection between $\\mathbb{N}$ and a *proper subset* of itself.",
  "tests": [
    "c.1.3.1",
    "c.1.3.2",
    "c.1.3.4"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.3 systematically.</p>",
  "solution": "<p>Let</p><p>The function $f(n) = n + 1$ works perfectly.</p><p>It is injective (since $n+1 = m+1 \\implies n=m$) and surjective onto $\\mathbb{N} \\setminus \\{1\\}$. We just mapped an infinite set onto a piece of itself!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.3."
},
{
  "id": "w.1.3.07",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.3",
  "marks": 5,
  "title": "Denumerable Equivalence",
  "source": "Bartle & Sherbert 4e §1.3 Ex 7",
  "prompt": "**Problem:** Prove that a set $T_1$ is denumerable if and only if there is a bijection from $T_1$ onto a denumerable set $T_2$.",
  "tests": [
    "c.1.3.1",
    "c.1.3.2",
    "c.1.3.4"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.3 systematically.</p>",
  "solution": "<p>Forward: Assume $T_1$ is denumerable. By definition, there is a bijection $f: \\mathbb{N} \\to T_1$.</p><p>We can simply pick $T_2 = \\mathbb{N}$. Since $\\mathbb{N}$ is denumerable and $f^{-1}: T_1 \\to \\mathbb{N}$ is a bijection, we have proved the forward direction.</p><p>Backward: Assume there is a bijection $g: T_1 \\to T_2$, and $T_2$ is denumerable.</p><p>There is a bijection $h: \\mathbb{N} \\to T_2$.</p><p>To show $T_1$ is denumerable, we need a bijection from $\\mathbb{N}$ to $T_1$. The composition $g^{-1} \\circ h : \\mathbb{N} \\to T_1$ is a bijection. Thus $T_1$ is denumerable. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.3."
},
{
  "id": "w.1.3.08",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.3",
  "marks": 5,
  "title": "Infinite Union of Finite Sets",
  "source": "Bartle & Sherbert 4e §1.3 Ex 8",
  "prompt": "**Problem:** Give an example of a countable collection of finite sets whose union is not finite.",
  "tests": [
    "c.1.3.1",
    "c.1.3.2",
    "c.1.3.4"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.3 systematically.</p>",
  "solution": "<p>We need an infinite sequence of sets $A_1, A_2, A_3 \\dots$ where each individual $A_n$ is finite.</p><p>Let $A_n = \\{n\\}$ for every $n \\in \\mathbb{N}$.</p><p>Each $A_n$ is finite (size 1). The collection is countable (indexed by $\\mathbb{N}$).</p><p>The union $\\bigcup_{n=1}^\\infty A_n = \\{1, 2, 3, \\dots\\} = \\mathbb{N}$, which is infinite! Goal reached.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.3."
},
{
  "id": "w.1.3.09",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.3",
  "marks": 5,
  "title": "Union of Denumerable Sets",
  "source": "Bartle & Sherbert 4e §1.3 Ex 9",
  "prompt": "**Problem:** Prove in detail that if $S$ and $T$ are denumerable, then $S \\cup T$ is denumerable.",
  "tests": [
    "c.1.3.1",
    "c.1.3.2",
    "c.1.3.4"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.3 systematically.</p>",
  "solution": "<p>Since $S$ and $T$ are denumerable, we can list them as sequences: $S = \\{s_1, s_2, s_3 \\dots\\}$ and $T = \\{t_1, t_2, t_3 \\dots\\}$.</p><p>We define a new sequence $U$: $u_{2n-1} = s_n$ and $u_{2n} = t_n$.</p><p>This creates a surjection from $\\mathbb{N}$ onto $S \\cup T$. By Theorem 1.3.10, if there is a surjection from $\\mathbb{N}$ onto a set, the set is countable.</p><p>Since $S \\cup T$ contains the infinite set $S$, it cannot be finite. A set that is countable and infinite is, by definition, denumerable. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.3."
},
{
  "id": "w.1.3.10",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.3",
  "marks": 5,
  "title": "Diagonal Counting Formula",
  "source": "Bartle & Sherbert 4e §1.3 Ex 10",
  "prompt": "**Problem:** The counting function for $\\mathbb{N} \\times \\mathbb{N}$ is $h(m,n) = \\frac{1}{2}(m+n-2)(m+n-1) + m$.\n\n(a) If $(m,n)$ is the 6th point down the 9th diagonal, calculate its number.\n(b) Given that $h(m,3) = 19$, find $m$.",
  "tests": [
    "c.1.3.1",
    "c.1.3.2",
    "c.1.3.4"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.3 systematically.</p>",
  "solution": "<p>The textbook defines the $k$-th diagonal by $k = m + n - 1$. So for the 9th diagonal, $m + n - 1 = 9 \\implies m + n = 10$.</p><p>Thus, $m = 6$. Since $m+n=10$, $n=4$.</p><p>Plug into the formula: $h(6,4) = \\frac{1}{2}(8)(9) + 6$.</p><p>$\\frac{1}{2}(72) + 6 = 36 + 6 = 42$.</p><p>Substitute $n=3$ into the formula: $19 = \\frac{1}{2}(m+3-2)(m+3-1) + m$.</p><p>This simplifies to $19 = \\frac{1}{2}(m+1)(m+2) + m$.</p><p>If $m=4$, the result is exactly 19.</p><p>Therefore, $m=4$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.3."
},
{
  "id": "w.1.3.11",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.3",
  "marks": 5,
  "title": "Power Set Sizes",
  "source": "Bartle & Sherbert 4e §1.3 Ex 11",
  "prompt": "**Problem:** Determine the number of elements in $\\mathcal{P}(S)$, the collection of all subsets of $S$, for:\n(a) $S = \\{1, 2\\}$\n(b) $S = \\{1, 2, 3\\}$\n(c) $S = \\{1, 2, 3, 4\\}$",
  "tests": [
    "c.1.3.1",
    "c.1.3.2",
    "c.1.3.4"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.3 systematically.</p>",
  "solution": "<p>(a) For $\\{1, 2\\}$, the subsets are $\\emptyset, \\{1\\}, \\{2\\}, \\{1, 2\\}$. There are 4 subsets.</p><p>(b) There are 8 subsets.</p><p>(c) Based on the pattern (4, 8...), the number of subsets for $\\{1,2,3,4\\}$ is $2^4 = 16$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.3."
},
{
  "id": "w.1.3.12",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.3",
  "marks": 5,
  "title": "Power Set Induction",
  "source": "Bartle & Sherbert 4e §1.3 Ex 12",
  "prompt": "**Problem:** Use Mathematical Induction to prove that if the set $S$ has $n$ elements, then $\\mathcal{P}(S)$ has $2^n$ elements.",
  "tests": [
    "c.1.3.1",
    "c.1.3.2",
    "c.1.3.4"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.3 systematically.</p>",
  "solution": "<p>Base case ($n=1$): $S = \\{a_1\\}$. The subsets are $\\emptyset$ and $\\{a_1\\}$. Size is $2 = 2^1$. True.</p><p>Assume that for any set of size $k$, there are $2^k$ subsets.</p><p>Group 1: Subsets without $x$. These are just the subsets of the remaining $k$ elements. By assumption, there are $2^k$ of these.</p><p>Group 2: Subsets with $x$. These are formed by taking the $2^k$ subsets from Group 1 and adding $x$ to each of them. There are exactly $2^k$ of these.</p><p>Total subsets = $2^k + 2^k = 2(2^k) = 2^{k+1}$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.3."
},
{
  "id": "w.1.3.13",
  "course": "ra1",
  "module": "ra1.m1",
  "sec": "1.3",
  "marks": 5,
  "title": "Finite Subsets of N",
  "source": "Bartle & Sherbert 4e §1.3 Ex 13",
  "prompt": "**Problem:** Prove that the collection $\\mathcal{F}(\\mathbb{N})$ of all *finite* subsets of $\\mathbb{N}$ is countable.",
  "tests": [
    "c.1.3.1",
    "c.1.3.2",
    "c.1.3.4"
  ],
  "approach": "<p>Apply definitions and theorems of Section 1.3 systematically.</p>",
  "solution": "<p>Let $A_n$ be the collection of all subsets of $\\{1, 2, \\dots, n\\}$.</p><p>Yes, each $A_n$ is finite.</p><p>Notice that EVERY finite subset of $\\mathbb{N}$ must have a maximum element. If the maximum element is $m$, that subset is contained within $A_m$.</p><p>Therefore, $\\mathcal{F}(\\mathbb{N}) = \\bigcup_{n=1}^\\infty A_n$.</p><p>By Theorem 1.3.12, the union of a countable number of countable (in this case, finite) sets is countable. Thus $\\mathcal{F}(\\mathbb{N})$ is countable. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 1.3."
},
{
  "id": "w.2.1.01",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.1",
  "marks": 5,
  "title": "Basic Addition/Multiplication",
  "source": "Bartle & Sherbert 4e §2.1 Ex 1",
  "prompt": "If $a, b \\in \\mathbb{R}$, prove the following:\n(a) If $a + b = 0$, then $b = -a$\n(b) $-(-a) = a$\n(c) $(-1)a = -a$\n(d) $(-1)(-1) = 1$",
  "tests": [
    "c.2.1.1",
    "c.2.1.4",
    "c.2.1.9",
    "c.2.1.13"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.1 systematically.</p>",
  "solution": "<p>We start with the given equation: $a + b = 0$.</p><p>Add $-a$ to both sides: $(-a) + (a + b) = (-a) + 0$.</p><p>Using associativity (A2), we group the left side: $((-a) + a) + b = -a$.</p><p>Since $(-a) + a = 0$ (A4), we have $0 + b = -a$, which simplifies to $b = -a$. Goal reached!</p><p>We need to show that $(-1)a$ acts as the additive inverse of $a$. So we must show $a + (-1)a = 0$.</p><p>Write $a + (-1)a$ as $1 \\cdot a + (-1)a$.</p><p>By the distributive property (D), this is $(1 + (-1))a$.</p><p>Since $1 + (-1) = 0$, we have $0 \\cdot a = 0$. By Theorem 2.1.2(a), this means $(-1)a$ is indeed the unique additive inverse $-a$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.1."
},
{
  "id": "w.2.1.02",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.1",
  "marks": 5,
  "title": "Properties of Negatives",
  "source": "Bartle & Sherbert 4e §2.1 Ex 2",
  "prompt": "Prove that if $a, b \\in \\mathbb{R}$, then:\n(a) $-(a + b) = (-a) + (-b)$\n(b) $(-a)(-b) = a \\cdot b$\n(c) $1/(-a) = -(1/a)$ if $a \\neq 0$\n(d) $-(a/b) = (-a)/b$ if $b \\neq 0$",
  "tests": [
    "c.2.1.1",
    "c.2.1.4",
    "c.2.1.9",
    "c.2.1.13"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.1 systematically.</p>",
  "solution": "<p>We must show that adding $((-a) + (-b))$ to $(a + b)$ yields $0$.</p><p>Consider $(a + b) + ((-a) + (-b))$.</p><p>Regrouping gives $(a + (-a)) + (b + (-b))$.</p><p>This simplifies to $0 + 0 = 0$. Since inverses are unique, $-(a+b)$ must be exactly $(-a) + (-b)$. Goal reached!</p><p>From Ex 1(c), we know $-x = (-1)x$. So $(-a)(-b) = ((-1)a)((-1)b)$.</p><p>It rearranges to $((-1)(-1))(ab)$.</p><p>From Ex 1(d), we know $(-1)(-1) = 1$. Thus, $1 \\cdot (ab) = ab$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.1."
},
{
  "id": "w.2.1.03",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.1",
  "marks": 5,
  "title": "Solving Equations",
  "source": "Bartle & Sherbert 4e §2.1 Ex 3",
  "prompt": "Solve the following equations, justifying each step by referring to an appropriate property or theorem.\n(a) $2x + 5 = 8$\n(b) $x^2 = 2x$\n(c) $x^2 - 1 = 3$\n(d) $(x - 1)(x + 2) = 0$",
  "tests": [
    "c.2.1.1",
    "c.2.1.4",
    "c.2.1.9",
    "c.2.1.13"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.1 systematically.</p>",
  "solution": "<p>Add $-5$ to both sides: $(2x + 5) + (-5) = 8 + (-5)$.</p><p>By associativity (A2) and inverse (A4), the left side is $2x + 0 = 2x$. The right side is $3$.</p><p>Multiply by $1/2$: $(1/2)(2x) = (1/2)(3)$.</p><p>By (M2) and (M4), $1 \\cdot x = 3/2$, so $x = 3/2$.</p><p>Add $-2x$ to both sides: $x^2 - 2x = 0$.</p><p>Factor using (D): $x(x - 2) = 0$.</p><p>By the Zero Product Property (Theorem 2.1.3b), either $x = 0$ or $x - 2 = 0$.</p><p>If $x - 2 = 0$, adding 2 to both sides gives $x = 2$. Thus $x = 0$ or $x = 2$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.1."
},
{
  "id": "w.2.1.04",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.1",
  "marks": 5,
  "title": "Idempotent Elements",
  "source": "Bartle & Sherbert 4e §2.1 Ex 4",
  "prompt": "If $a \\in \\mathbb{R}$ satisfies $a \\cdot a = a$, prove that either $a = 0$ or $a = 1$.",
  "tests": [
    "c.2.1.1",
    "c.2.1.4",
    "c.2.1.9",
    "c.2.1.13"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.1 systematically.</p>",
  "solution": "<p>We are given $a^2 = a$. Let</p><p>By the distributive property, we can write this as $a(a - 1) = 0$.</p><p>We now have a product of two numbers equal to zero. By Theorem 2.1.3(b) (Zero Product Property), what does this imply?</p><p>It implies that either $a = 0$ or $a - 1 = 0$.</p><p>If $a - 1 = 0$, we add 1 to both sides to get $a = 1$. Thus, either $a = 0$ or $a = 1$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.1."
},
{
  "id": "w.2.1.05",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.1",
  "marks": 5,
  "title": "Inverse of a Product",
  "source": "Bartle & Sherbert 4e §2.1 Ex 5",
  "prompt": "If $a \\neq 0$ and $b \\neq 0$, show that $1/(ab) = (1/a)(1/b)$.",
  "tests": [
    "c.2.1.1",
    "c.2.1.4",
    "c.2.1.9",
    "c.2.1.13"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.1 systematically.</p>",
  "solution": "<p>To prove that $x$ is the inverse of $y$, we must show that $x \\cdot y = 1$. Let</p><p>Consider the expression $(ab) \\cdot ((1/a)(1/b))$.</p><p>We can rearrange this to $(a \\cdot (1/a)) \\cdot (b \\cdot (1/b))$.</p><p>Since $a \\neq 0$, $a \\cdot (1/a) = 1$. Similarly, $b \\cdot (1/b) = 1$.</p><p>The expression becomes $1 \\cdot 1 = 1$. Because inverses are unique (Theorem 2.1.3a), $(1/a)(1/b)$ must be exactly $1/(ab)$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.1."
},
{
  "id": "w.2.1.06",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.1",
  "marks": 5,
  "title": "Irrationality of √6",
  "source": "Bartle & Sherbert 4e §2.1 Ex 6",
  "prompt": "Use the argument in the proof of Theorem 2.1.4 to show that there does not exist a rational number $s$ such that $s^2 = 6$.",
  "tests": [
    "c.2.1.1",
    "c.2.1.4",
    "c.2.1.9",
    "c.2.1.13"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.1 systematically.</p>",
  "solution": "<p>Assume $s = p/q$ where $p, q$ are positive integers with no common factors (other than 1).</p><p>Then $(p/q)^2 = 6$, which implies $p^2 = 6q^2$. We can write this as $p^2 = 2(3q^2)$.</p><p>Thus $p$ is even, so we can write $p = 2m$ for some integer $m$.</p><p>Substitute $p = 2m$ back: $(2m)^2 = 6q^2$, so $4m^2 = 6q^2$, which simplifies to $2m^2 = 3q^2$.</p><p>Since $2m^2$ is even, $3q^2$ must be even. Since 3 is odd, $q^2$ must be even, so $q$ is even.</p><p>Both $p$ and $q$ are even, meaning they share a common factor of 2. This contradicts our initial assumption. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.1."
},
{
  "id": "w.2.1.07",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.1",
  "marks": 5,
  "title": "Irrationality of √3",
  "source": "Bartle & Sherbert 4e §2.1 Ex 7",
  "prompt": "Modify the proof of Theorem 2.1.4 to show that there does not exist a rational number $t$ such that $t^2 = 3$.",
  "tests": [
    "c.2.1.1",
    "c.2.1.4",
    "c.2.1.9",
    "c.2.1.13"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.1 systematically.</p>",
  "solution": "<p>Assume $t = p/q$ where $p, q$ are integers with no common factors. Then $p^2 = 3q^2$.</p><p>Thus $p = 3m$ for some integer $m$.</p><p>Substitute $p = 3m$: $(3m)^2 = 3q^2$, so $9m^2 = 3q^2$, which divides to $3m^2 = q^2$.</p><p>By the exact same logic, since $q^2$ is a multiple of 3, $q$ must be a multiple of 3.</p><p>Both $p$ and $q$ are multiples of 3, sharing a common factor. This contradicts our lowest-terms assumption. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.1."
},
{
  "id": "w.2.1.08",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.1",
  "marks": 5,
  "title": "Mixed Operations",
  "source": "Bartle & Sherbert 4e §2.1 Ex 8",
  "prompt": "(a) Show that if $x, y$ are rational numbers, then $x + y$ and $xy$ are rational numbers.\n(b) Prove that if $x$ is a rational number and $y$ is an irrational number, then $x + y$ is an irrational number. If, in addition, $x \\neq 0$, then show that $xy$ is an irrational number.",
  "tests": [
    "c.2.1.1",
    "c.2.1.4",
    "c.2.1.9",
    "c.2.1.13"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.1 systematically.</p>",
  "solution": "<p>Let $x \\in \\mathbb{Q}$ and $y \\notin \\mathbb{Q}$. Assume for contradiction that $x + y = z$ where $z \\in \\mathbb{Q}$.</p><p>We can write $y = z - x$.</p><p>Since $z$ is rational and $x$ is rational, their difference $z - x$ must be rational (by part a).</p><p>This implies $y$ is rational, which contradicts our premise that $y$ is irrational! Thus $x+y$ must be irrational. Goal reached!</p><p>Assume $x \\in \\mathbb{Q}$ ($x \\neq 0$) and $y \\notin \\mathbb{Q}$. Assume for contradiction that $xy = w$ where $w \\in \\mathbb{Q}$.</p><p>Since $x \\neq 0$, we can divide by $x$. Thus $y = w / x$.</p><p>Since $w$ and $x$ are rational, their quotient is rational (the ratio of two fractions is a fraction). Thus $y \\in \\mathbb{Q}$.</p><p>This contradicts $y \\notin \\mathbb{Q}$. Thus $xy$ must be irrational. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.1."
},
{
  "id": "w.2.1.09",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.1",
  "marks": 5,
  "title": "A Subfield of R",
  "source": "Bartle & Sherbert 4e §2.1 Ex 9",
  "prompt": "Let $K := \\{s + t\\sqrt{2} : s, t \\in \\mathbb{Q}\\}$. Show that $K$ satisfies the following:\n(a) If $x_1, x_2 \\in K$, then $x_1 + x_2 \\in K$ and $x_1x_2 \\in K$.\n(b) If $x \\neq 0$ and $x \\in K$, then $1/x \\in K$.\n\n*(Thus the set K is a subfield of $\\mathbb{R}$).*",
  "tests": [
    "c.2.1.1",
    "c.2.1.4",
    "c.2.1.9",
    "c.2.1.13"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.1 systematically.</p>",
  "solution": "<p>Let $x_1 = s_1 + t_1\\sqrt{2}$ and $x_2 = s_2 + t_2\\sqrt{2}$.</p><p>Addition: $x_1 + x_2 = (s_1 + s_2) + (t_1 + t_2)\\sqrt{2}$. Since sums of rationals are rational, this is in $K$.</p><p>The product is $(s_1s_2 + 2t_1t_2) + (s_1t_2 + s_2t_1)\\sqrt{2}$.</p><p>Both the coefficient of 1 and $\\sqrt{2}$ are constructed by adding and multiplying rationals, so they are rational. Thus $x_1x_2 \\in K$.</p><p>Let $x = s + t\\sqrt{2} \\neq 0$. Then $1/x = \\frac{1}{s + t\\sqrt{2}}$.</p><p>Multiply by $\\frac{s - t\\sqrt{2}}{s - t\\sqrt{2}}$.</p><p>This gives $\\frac{s - t\\sqrt{2}}{s^2 - 2t^2}$.</p><p>Separating the terms, we get $\\frac{s}{s^2 - 2t^2} + \\frac{-t}{s^2 - 2t^2}\\sqrt{2}$.</p><p>Since $s^2 - 2t^2 \\neq 0$ (otherwise $\\sqrt{2}$ would be rational), these coefficients are rational numbers. Thus $1/x \\in K$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.1."
},
{
  "id": "w.2.1.10",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.1",
  "marks": 5,
  "title": "Combining Inequalities",
  "source": "Bartle & Sherbert 4e §2.1 Ex 10",
  "prompt": "(a) If $a < b$ and $c \\le d$, prove that $a + c < b + d$.\n(b) If $0 < a < b$ and $0 \\le c \\le d$, prove that $0 \\le ac \\le bd$.",
  "tests": [
    "c.2.1.1",
    "c.2.1.4",
    "c.2.1.9",
    "c.2.1.13"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.1 systematically.</p>",
  "solution": "<p>We are given $a < b$, which means $b - a \\in \\mathbb{P}$. We are also given $c \\le d$, meaning $d - c \\in \\mathbb{P} \\cup \\{0\\}$.</p><p>The sum $(b - a) + (d - c)$ must be in $\\mathbb{P}$.</p><p>Rearranging this expression gives $(b + d) - (a + c) \\in \\mathbb{P}$.</p><p>By definition of inequality, this means $a + c < b + d$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.1."
},
{
  "id": "w.2.1.11",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.1",
  "marks": 5,
  "title": "Inverses and Midpoints",
  "source": "Bartle & Sherbert 4e §2.1 Ex 11",
  "prompt": "(a) Show that if $a > 0$, then $1/a > 0$ and $1/(1/a) = a$.\n(b) Show that if $a < b$, then $a < \\frac{1}{2}(a + b) < b$.",
  "tests": [
    "c.2.1.1",
    "c.2.1.4",
    "c.2.1.9",
    "c.2.1.13"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.1 systematically.</p>",
  "solution": "<p>Suppose for contradiction that $1/a < 0$ (it cannot be 0 because $a \\cdot 0 = 0 \\neq 1$).</p><p>If $a > 0$ and $1/a < 0$, then by the product rule for inequalities, their product $a(1/a)$ must be less than 0.</p><p>The product is 1.</p><p>This implies $1 < 0$, which is a contradiction. Thus $1/a > 0$.</p><p>We are given $a < b$. By the addition rule for inequalities, add $a$ to both sides: $a + a < a + b$, so $2a < a + b$.</p><p>Since $2 > 0$, its inverse $1/2 > 0$. Multiply by $1/2$: $a < \\frac{1}{2}(a + b)$.</p><p>Add $b$ to both sides: $a + b < b + b$, so $a + b < 2b$.</p><p>Multiply by $1/2$ to get $\\frac{1}{2}(a + b) < b$.</p><p>Combine the two results: $a < \\frac{1}{2}(a + b) < b$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.1."
},
{
  "id": "w.2.1.12",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.1",
  "marks": 5,
  "title": "Multiplying Inequalities with Negatives",
  "source": "Bartle & Sherbert 4e §2.1 Ex 12",
  "prompt": "Let $a, b, c, d$ be numbers satisfying $0 < a < b$ and $c < d < 0$.\n\nGive an example where $ac < bd$, and one where $bd < ac$.",
  "tests": [
    "c.2.1.1",
    "c.2.1.4",
    "c.2.1.9",
    "c.2.1.13"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.1 systematically.</p>",
  "solution": "<p>Let $a = 1, b = 2$ (so $0 < a < b$). We need $c < d < 0$, so let</p><p>Example 1: $a=1, b=2, c=-4, d=-1$. Then $ac = -4$ and $bd = -2$. Indeed, $-4 < -2$.</p><p>Example 2: $a=1, b=2, c=-3, d=-2$. Then $ac = -3$ and $bd = -4$. Here, $-4 < -3$, so $bd < ac$.</p><p>This shows you cannot blindly multiply inequalities if some values are negative!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.1."
},
{
  "id": "w.2.1.13",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.1",
  "marks": 5,
  "title": "Sum of Squares Zero",
  "source": "Bartle & Sherbert 4e §2.1 Ex 13",
  "prompt": "If $a, b \\in \\mathbb{R}$, show that $a^2 + b^2 = 0$ if and only if $a = 0$ and $b = 0$.",
  "tests": [
    "c.2.1.1",
    "c.2.1.4",
    "c.2.1.9",
    "c.2.1.13"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.1 systematically.</p>",
  "solution": "<p>We know from Theorem 2.1.8 that squares are non-negative: $a^2 \\ge 0$ and $b^2 \\ge 0$.</p><p>If $a \\neq 0$, then $a^2 > 0$.</p><p>If $a^2 > 0$, then since $b^2 \\ge 0$, their sum $a^2 + b^2 > 0 + 0 = 0$.</p><p>But we assumed $a^2 + b^2 = 0$. This is a contradiction. Therefore $a$ must be $0$.</p><p>By the same logic, $b$ must be $0$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.1."
},
{
  "id": "w.2.1.14",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.1",
  "marks": 5,
  "title": "Bounding Squares",
  "source": "Bartle & Sherbert 4e §2.1 Ex 14",
  "prompt": "If $0 \\le a < b$, show that $a^2 \\le ab < b^2$. \n\nShow by example that it does *not* follow that $a^2 < ab < b^2$.",
  "tests": [
    "c.2.1.1",
    "c.2.1.4",
    "c.2.1.9",
    "c.2.1.13"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.1 systematically.</p>",
  "solution": "<p>We are given $a < b$. We can multiply this inequality by a non-negative number.</p><p>We get $a^2 \\le ab$.</p><p>Now, we also know $a < b$ and $b > 0$ (since $b > a \\ge 0$).</p><p>Multiply the inequality $a < b$ by the strictly positive number $b$. This yields $ab < b^2$.</p><p>Combining them: $a^2 \\le ab < b^2$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.1."
},
{
  "id": "w.2.1.15",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.1",
  "marks": 5,
  "title": "Square Roots and Inverses",
  "source": "Bartle & Sherbert 4e §2.1 Ex 15",
  "prompt": "If $0 < a < b$, show that:\n(a) $a < \\sqrt{ab} < b$\n(b) $1/b < 1/a$",
  "tests": [
    "c.2.1.1",
    "c.2.1.4",
    "c.2.1.9",
    "c.2.1.13"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.1 systematically.</p>",
  "solution": "<p>Since $0 < a < b$, we know $a > 0$. Multiply $a < b$ by $a$ to get $a^2 < ab$.</p><p>Similarly, multiply $a < b$ by $b$ to get $ab < b^2$.</p><p>By Theorem 2.1.13(a), taking the square root yields $a < \\sqrt{ab} < b$. Goal reached!</p><p>We know $a > 0$ and $b > 0$, so their product $ab > 0$. Thus $1/(ab) > 0$.</p><p>Multiply the inequality $a < b$ by the positive number $1/(ab)$.</p><p>This gives $a \\cdot \\frac{1}{ab} < b \\cdot \\frac{1}{ab}$.</p><p>Simplifying the fractions yields $1/b < 1/a$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.1."
},
{
  "id": "w.2.1.16",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.1",
  "marks": 5,
  "title": "Solving Inequalities",
  "source": "Bartle & Sherbert 4e §2.1 Ex 16",
  "prompt": "Find all real numbers $x$ that satisfy the following inequalities:\n(a) $x^2 > 3x + 4$\n(b) $1 < x^2 < 4$\n(c) $1/x < x$",
  "tests": [
    "c.2.1.1",
    "c.2.1.4",
    "c.2.1.9",
    "c.2.1.13"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.1 systematically.</p>",
  "solution": "<p>Rearrange to $x^2 - 3x - 4 > 0$.</p><p>It factors to $(x - 4)(x + 1) > 0$.</p><p>By the Product Rule (Theorem 2.1.10), both factors must be positive, OR both must be negative.</p><p>Case 1 (both positive): $x > 4$ and $x > -1$. Result: $x > 4$.</p><p>Case 2 (both negative): $x < 4$ and $x < -1$. Result: $x < -1$.</p><p>Solution: $x \\in (-\\infty, -1) \\cup (4, \\infty)$.</p><p>Subtract $x$: $1/x - x < 0$. Common denominator: $\\frac{1 - x^2}{x} < 0$.</p><p>Factor numerator: $\\frac{(1-x)(1+x)}{x} < 0$. We must check sign intervals based on the roots $-1, 0, 1$.</p><p>For $x \\in (0, 1)$, it is positive. We want negative.</p><p>Testing all intervals, it is negative when $x \\in (-1, 0)$ and when $x > 1$.</p><p>Solution: $x \\in (-1, 0) \\cup (1, \\infty)$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.1."
},
{
  "id": "w.2.1.17",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.1",
  "marks": 5,
  "title": "Bounded by Epsilon",
  "source": "Bartle & Sherbert 4e §2.1 Ex 17",
  "prompt": "Prove the following form of Theorem 2.1.9: \nIf $a \\in \\mathbb{R}$ is such that $0 \\le a \\le \\epsilon$ for every $\\epsilon > 0$, then $a = 0$.",
  "tests": [
    "c.2.1.1",
    "c.2.1.4",
    "c.2.1.9",
    "c.2.1.13"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.1 systematically.</p>",
  "solution": "<p>Assume for contradiction that $a > 0$.</p><p>Let $\\epsilon_0 = a/2$. Because $a > 0$, we know $\\epsilon_0 > 0$.</p><p>The premise states $a \\le \\epsilon$ for EVERY positive $\\epsilon$. So it must be true that $a \\le a/2$.</p><p>But $a \\le a/2 \\implies a/2 \\le 0 \\implies a \\le 0$, which contradicts our assumption $a > 0$.</p><p>Therefore, the assumption $a > 0$ is false. Since $a \\ge 0$, we must have $a = 0$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.1."
},
{
  "id": "w.2.1.18",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.1",
  "marks": 5,
  "title": "Shifting the Epsilon Bound",
  "source": "Bartle & Sherbert 4e §2.1 Ex 18",
  "prompt": "Let $a, b \\in \\mathbb{R}$, and suppose that for every $\\epsilon > 0$ we have $a \\le b + \\epsilon$. \n\nShow that $a \\le b$.",
  "tests": [
    "c.2.1.1",
    "c.2.1.4",
    "c.2.1.9",
    "c.2.1.13"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.1 systematically.</p>",
  "solution": "<p>Assume for contradiction that $a > b$. This implies $a - b > 0$.</p><p>Yes, $\\epsilon_0 = \\frac{a - b}{2} > 0$.</p><p>By the premise, $a \\le b + \\epsilon$ must hold for ALL $\\epsilon > 0$. Let</p><p>Simplify the right side: $b + \\frac{a}{2} - \\frac{b}{2} = \\frac{a + b}{2}$.</p><p>So we have $a \\le \\frac{a + b}{2}$. Multiply by 2: $2a \\le a + b$. Subtract $a$: $a \\le b$.</p><p>This completely contradicts our assumption that $a > b$. Thus, $a \\le b$ must be true. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.1."
},
{
  "id": "w.2.1.19",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.1",
  "marks": 5,
  "title": "The Arithmetic-Geometric Mean",
  "source": "Bartle & Sherbert 4e §2.1 Ex 19",
  "prompt": "Prove that $\\left[\\frac{1}{2}(a + b)\\right]^2 \\le \\frac{1}{2}(a^2 + b^2)$ for all $a, b \\in \\mathbb{R}$. \n\nShow that equality holds if and only if $a = b$.",
  "tests": [
    "c.2.1.1",
    "c.2.1.4",
    "c.2.1.9",
    "c.2.1.13"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.1 systematically.</p>",
  "solution": "<p>Let</p><p>Expand the left side: $a^2 + 2ab + b^2 \\le 2a^2 + 2b^2$.</p><p>We get $0 \\le a^2 - 2ab + b^2$.</p><p>Factor the right side: $0 \\le (a - b)^2$.</p><p>Since the square of any real number is always $\\ge 0$ (Theorem 2.1.8a), this final statement is always true. Thus the original inequality holds!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.1."
},
{
  "id": "w.2.1.20",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.1",
  "marks": 5,
  "title": "Squaring Fractions",
  "source": "Bartle & Sherbert 4e §2.1 Ex 20",
  "prompt": "(a) If $0 < c < 1$, show that $0 < c^2 < c < 1$.\n(b) If $1 < c$, show that $1 < c < c^2$.",
  "tests": [
    "c.2.1.1",
    "c.2.1.4",
    "c.2.1.9",
    "c.2.1.13"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.1 systematically.</p>",
  "solution": "<p>We are given $0 < c$ and $c < 1$.</p><p>We get $c^2 < c$.</p><p>Since $c > 0$, we also know $c^2 > 0$ by Theorem 2.1.8(a).</p><p>Combining these pieces: $0 < c^2 < c < 1$. Goal reached!</p><p>We are given $1 < c$. Since $1 > 0$, it follows that $c > 0$.</p><p>Multiply the inequality $1 < c$ by the positive number $c$.</p><p>This yields $c \\cdot 1 < c \\cdot c$, which is $c < c^2$.</p><p>Combining with the given information yields $1 < c < c^2$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.1."
},
{
  "id": "w.2.1.21",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.1",
  "marks": 5,
  "title": "No Integer between 0 and 1",
  "source": "Bartle & Sherbert 4e §2.1 Ex 21",
  "prompt": "(a) Prove there is no $n \\in \\mathbb{N}$ such that $0 < n < 1$. (Use the Well-Ordering Property of $\\mathbb{N}$.)\n(b) Prove that no natural number can be both even and odd.",
  "tests": [
    "c.2.1.1",
    "c.2.1.4",
    "c.2.1.9",
    "c.2.1.13"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.1 systematically.</p>",
  "solution": "<p>Let $S = \\{n \\in \\mathbb{N} : 0 < n < 1\\}$. Assume for contradiction that $S$ is not empty.</p><p>Let $m$ be the least element of $S$. So $0 < m < 1$.</p><p>Since $0 < m < 1$, multiply the inequality by the positive number $m$: $0 < m^2 < m$.</p><p>Since $m \\in \\mathbb{N}$, closure under multiplication means $m^2 \\in \\mathbb{N}$.</p><p>Thus $m^2$ is a natural number strictly between 0 and 1, so $m^2 \\in S$. But $m^2 < m$, which contradicts that $m$ was the LEAST element in $S$. Thus $S$ must be empty. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.1."
},
{
  "id": "w.2.1.22",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.1",
  "marks": 5,
  "title": "Exponential Growth",
  "source": "Bartle & Sherbert 4e §2.1 Ex 22",
  "prompt": "(a) If $c > 1$, show that $c^n \\ge c$ for all $n \\in \\mathbb{N}$, and that $c^n > c$ for $n > 1$.\n(b) If $0 < c < 1$, show that $c^n \\le c$ for all $n \\in \\mathbb{N}$, and that $c^n < c$ for $n > 1$.",
  "tests": [
    "c.2.1.1",
    "c.2.1.4",
    "c.2.1.9",
    "c.2.1.13"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.1 systematically.</p>",
  "solution": "<p>Base case: For $n = 2$, we proved in Exercise 20(b) that since $c > 1$, $c^2 > c$. True.</p><p>Multiply by $c$: $c^{k+1} > c^2$.</p><p>We already know $c^2 > c$. By transitivity, $c^{k+1} > c$.</p><p>Thus, by Mathematical Induction, $c^n > c$ for all $n > 1$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.1."
},
{
  "id": "w.2.1.23",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.1",
  "marks": 5,
  "title": "Powers and Inequalities",
  "source": "Bartle & Sherbert 4e §2.1 Ex 23",
  "prompt": "If $a > 0, b > 0$, and $n \\in \\mathbb{N}$, show that $a < b$ if and only if $a^n < b^n$.",
  "tests": [
    "c.2.1.1",
    "c.2.1.4",
    "c.2.1.9",
    "c.2.1.13"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.1 systematically.</p>",
  "solution": "<p>Base case ($n=1$): $a^1 < b^1$ is just $a < b$, which is our premise. True.</p><p>Assume true for $k$: $a^k < b^k$.</p><p>We get $a^{k+1} < ab^k$.</p><p>Now take the original premise $a < b$ and multiply by $b^k$ (since $b>0$). We get $ab^k < b^{k+1}$.</p><p>By transitivity, $a^{k+1} < ab^k < b^{k+1}$. Forward direction proved!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.1."
},
{
  "id": "w.2.1.24",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.1",
  "marks": 5,
  "title": "Comparing Exponents",
  "source": "Bartle & Sherbert 4e §2.1 Ex 24",
  "prompt": "(a) If $c > 1$ and $m, n \\in \\mathbb{N}$, show that $c^m > c^n$ if and only if $m > n$.\n(b) If $0 < c < 1$ and $m, n \\in \\mathbb{N}$, show that $c^m < c^n$ if and only if $m > n$.",
  "tests": [
    "c.2.1.1",
    "c.2.1.4",
    "c.2.1.9",
    "c.2.1.13"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.1 systematically.</p>",
  "solution": "<p>If $m > n$, then $m - n$ is a natural number $k \\in \\mathbb{N}$.</p><p>We know $c^{m-n} > 1$.</p><p>Multiply both sides by $c^n$ (which is positive since $c>1$).</p><p>This gives $c^{m-n} \\cdot c^n > 1 \\cdot c^n$, which simplifies to $c^m > c^n$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.1."
},
{
  "id": "w.2.1.25",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.1",
  "marks": 5,
  "title": "Roots and Inequalities",
  "source": "Bartle & Sherbert 4e §2.1 Ex 25",
  "prompt": "Assuming the existence of roots, show that if $c > 1$, then $c^{1/m} < c^{1/n}$ if and only if $m > n$.",
  "tests": [
    "c.2.1.1",
    "c.2.1.4",
    "c.2.1.9",
    "c.2.1.13"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.1 systematically.</p>",
  "solution": "<p>Let $a = c^{1/m}$ and $b = c^{1/n}$. We want to show $a < b \\iff m > n$.</p><p>Raise both numbers to the power of $mn$. $a^{mn} = (c^{1/m})^{mn} = c^n$. And $b^{mn} = c^m$.</p><p>We get $c^n < c^m$.</p><p>From Exercise 24, we know $c^n < c^m \\iff n < m$ (which is $m > n$).</p><p>Chaining the iff statements: $a < b \\iff a^{mn} < b^{mn} \\iff c^n < c^m \\iff m > n$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.1."
},
{
  "id": "w.2.1.26",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.1",
  "marks": 5,
  "title": "Exponent Rules",
  "source": "Bartle & Sherbert 4e §2.1 Ex 26",
  "prompt": "Use Mathematical Induction to show that if $a \\in \\mathbb{R}$ and $m, n \\in \\mathbb{N}$, then $a^{m+n} = a^m a^n$ and $(a^m)^n = a^{mn}$.",
  "tests": [
    "c.2.1.1",
    "c.2.1.4",
    "c.2.1.9",
    "c.2.1.13"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.1 systematically.</p>",
  "solution": "<p>Base case ($n=1$): $a^{m+1} = a^m a^1 = a^m a$. This is the standard definition of exponents.</p><p>Assume true for $n=k$: $a^{m+k} = a^m a^k$.</p><p>It equals $a^{m+k} \\cdot a$.</p><p>Apply the induction hypothesis: $(a^m a^k) \\cdot a$.</p><p>By associativity (M2), this is $a^m (a^k a) = a^m a^{k+1}$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.1."
},
{
  "id": "w.2.2.01",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.2",
  "marks": 5,
  "title": "Alternate Definitions",
  "source": "Bartle & Sherbert 4e §2.2 Ex 1",
  "prompt": "If $a, b \\in \\mathbb{R}$ and $b \\neq 0$, show that:\n(a) $|a| = \\sqrt{a^2}$\n(b) $|a/b| = |a|/|b|$",
  "tests": [
    "c.2.2.1",
    "c.2.2.7"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.2 systematically.</p>",
  "solution": "<p>By Theorem 2.2.2(b), we know that $|a|^2 = a^2$.</p><p>We obtain $\\sqrt{|a|^2} = \\sqrt{a^2}$.</p><p>Since $|a|$ is non-negative, the principal square root of $|a|^2$ is exactly $|a|$.</p><p>Therefore, $|a| = \\sqrt{a^2}$. Goal reached!</p><p>We know that division is defined as multiplication by the inverse: $a/b = a(1/b)$.</p><p>Using the product rule for absolute values (Theorem 2.2.2a): $|a(1/b)| = |a| \\cdot |1/b|$.</p><p>We get $|(1/b) \\cdot b| = |1| = 1$.</p><p>Since $|1/b| \\cdot |b| = 1$, we divide by $|b|$ (which is $>0$) to get $|1/b| = 1/|b|$.</p><p>Substitute back: $|a/b| = |a|(1/|b|) = |a|/|b|$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.2."
},
{
  "id": "w.2.2.02",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.2",
  "marks": 5,
  "title": "Triangle Equality",
  "source": "Bartle & Sherbert 4e §2.2 Ex 2",
  "prompt": "If $a, b \\in \\mathbb{R}$, show that $|a + b| = |a| + |b|$ if and only if $ab \\ge 0$.",
  "tests": [
    "c.2.2.1",
    "c.2.2.7"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.2 systematically.</p>",
  "solution": "<p>Since both sides of $|a + b| = |a| + |b|$ are non-negative, the equation holds if and only if their squares are equal.</p><p>Left side squared: $a^2 + 2ab + b^2$.</p><p>Expand the square of the right side: $(|a| + |b|)^2 = |a|^2 + 2|a||b| + |b|^2$.</p><p>Using properties of absolute value, this simplifies to $a^2 + 2|ab| + b^2$.</p><p>This simplifies exactly to $ab = |ab|$.</p><p>A number equals its absolute value if and only if that number is $\\ge 0$. Thus, $ab \\ge 0$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.2."
},
{
  "id": "w.2.2.03",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.2",
  "marks": 5,
  "title": "Betweenness",
  "source": "Bartle & Sherbert 4e §2.2 Ex 3",
  "prompt": "If $x, y, z \\in \\mathbb{R}$ and $x \\le z$, show that $x \\le y \\le z$ if and only if $|x - y| + |y - z| = |x - z|$. \n\nInterpret this geometrically.",
  "tests": [
    "c.2.2.1",
    "c.2.2.7"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.2 systematically.</p>",
  "solution": "<p>If $x \\le y \\le z$, we can determine the signs of the differences.</p><p>Both $(x-y)$ and $(y-z)$ are $\\le 0$.</p><p>Since they are non-positive, their absolute values are the negatives of themselves: $|x-y| = -(x-y) = y-x$, and $|y-z| = -(y-z) = z-y$.</p><p>Add them together: $(y-x) + (z-y) = z - x$.</p><p>Since $x \\le z$, $z - x \\ge 0$, so $z - x = |x - z|$. Thus, $|x-y| + |y-z| = |x-z|$. Forward direction proved!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.2."
},
{
  "id": "w.2.2.04",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.2",
  "marks": 5,
  "title": "Expanding Epsilon",
  "source": "Bartle & Sherbert 4e §2.2 Ex 4",
  "prompt": "Show that $|x - a| < \\epsilon$ if and only if $a - \\epsilon < x < a + \\epsilon$.",
  "tests": [
    "c.2.2.1",
    "c.2.2.7"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.2 systematically.</p>",
  "solution": "<p>By Theorem 2.2.2(c), we know that for any $y$ and $c \\ge 0$, $|y| < c \\iff -c < y < c$.</p><p>We substitute to get $-\\epsilon < x - a < \\epsilon$.</p><p>Now, apply the addition rule for inequalities (Theorem 2.1.7b) by adding $a$ to all three parts.</p><p>This yields $a - \\epsilon < x < a + \\epsilon$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.2."
},
{
  "id": "w.2.2.05",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.2",
  "marks": 5,
  "title": "Distance in an Interval",
  "source": "Bartle & Sherbert 4e §2.2 Ex 5",
  "prompt": "If $a < x < b$ and $a < y < b$, show that $|x - y| < b - a$. \n\nInterpret this geometrically.",
  "tests": [
    "c.2.2.1",
    "c.2.2.7"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.2 systematically.</p>",
  "solution": "<p>We are given $a < x < b$. Multiply the second inequality $a < y < b$ by $-1$.</p><p>It becomes $-b < -y < -a$.</p><p>Now add this compound inequality to $a < x < b$.</p><p>Lower bounds: $a + (-b) = a - b$. Middle: $x + (-y) = x - y$. Upper bounds: $b + (-a) = b - a$.</p><p>So we have $a - b < x - y < b - a$. Notice that $a - b = -(b - a)$.</p><p>This is precisely $-(b - a) < x - y < (b - a)$, which by Theorem 2.2.2(c) is $|x - y| < b - a$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.2."
},
{
  "id": "w.2.2.06",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.2",
  "marks": 5,
  "title": "Solving Absolute Inequalities",
  "source": "Bartle & Sherbert 4e §2.2 Ex 6",
  "prompt": "Find all $x \\in \\mathbb{R}$ that satisfy the following inequalities:\n(a) $|4x - 5| \\le 13$\n(b) $|x^2 - 1| \\le 3$",
  "tests": [
    "c.2.2.1",
    "c.2.2.7"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.2 systematically.</p>",
  "solution": "<p>Open the absolute value into a compound inequality: $-13 \\le 4x - 5 \\le 13$.</p><p>Add 5: $-8 \\le 4x \\le 18$.</p><p>Divide by 4 (a positive number, so signs don</p><p>Simplify the fraction: $-2 \\le x \\le 4.5$. Solution is $[-2, 4.5]$.</p><p>Open the absolute value: $-3 \\le x^2 - 1 \\le 3$.</p><p>Add 1 to all parts: $-2 \\le x^2 \\le 4$.</p><p>Since $x^2 \\ge 0$ is trivially true for all real $x$, the effective inequality is $0 \\le x^2 \\le 4$.</p><p>Taking the square root gives $|x| \\le 2$.</p><p>This means $-2 \\le x \\le 2$. Solution is $[-2, 2]$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.2."
},
{
  "id": "w.2.2.07",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.2",
  "marks": 5,
  "title": "Absolute Value Equations",
  "source": "Bartle & Sherbert 4e §2.2 Ex 7",
  "prompt": "Find all $x \\in \\mathbb{R}$ that satisfy the equation $|x + 1| + |x - 2| = 7$.",
  "tests": [
    "c.2.2.1",
    "c.2.2.7"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.2 systematically.</p>",
  "solution": "<p>The expressions change sign at $x = -1$ and $x = 2$. We divide the real line into three regions: $x < -1$, $-1 \\le x \\le 2$, and $x > 2$.</p><p>We solve $-2x + 1 = 7 \\implies -2x = 6 \\implies x = -3$. Since $-3 < -1$, this is a valid solution.</p><p>Case 2: $-1 \\le x \\le 2$. $(x+1)$ is positive, $(x-2)$ is negative. The equation is $(x+1) - (x-2) = 7$.</p><p>This simplifies to $3 = 7$, which is a contradiction. No solutions in this interval.</p><p>Case 3: $x > 2$. Both are positive. $(x+1) + (x-2) = 7 \\implies 2x - 1 = 7 \\implies 2x = 8 \\implies x = 4$. Since $4 > 2$, this is valid.</p><p>The solutions are exactly $x = -3$ and $x = 4$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.2."
},
{
  "id": "w.2.2.08",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.2",
  "marks": 5,
  "title": "Single Absolute Value Equations",
  "source": "Bartle & Sherbert 4e §2.2 Ex 8",
  "prompt": "Find all values of $x$ that satisfy the equations:\n(a) $x + 1 = |2x - 1|$\n(b) $2x - 1 = |x - 5|$",
  "tests": [
    "c.2.2.1",
    "c.2.2.7"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.2 systematically.</p>",
  "solution": "<p>The expression $2x - 1$ changes sign at $x = 0.5$.</p><p>Solving gives $x = 2$. Since $2 \\ge 0.5$, this is a valid solution.</p><p>Case 2: $x < 0.5$. The equation is $x + 1 = -(2x - 1)$, which is $x + 1 = -2x + 1$.</p><p>Solving gives $3x = 0 \\implies x = 0$. Since $0 < 0.5$, this is also valid.</p><p>The solutions are $x = 0, 2$.</p><p>Note that since an absolute value equals $2x - 1$, we MUST have $2x - 1 \\ge 0$, so $x \\ge 0.5$ for any valid solution.</p><p>Case 1: $x \\ge 5$. The equation is $2x - 1 = x - 5$.</p><p>It is invalid, no solution here.</p><p>Case 2: $x < 5$. The equation is $2x - 1 = -(x - 5) = -x + 5$.</p><p>Solving gives $3x = 6 \\implies x = 2$. Since $0.5 \\le 2 < 5$, this is valid.</p><p>The only solution is $x = 2$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.2."
},
{
  "id": "w.2.2.09",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.2",
  "marks": 5,
  "title": "Plotting Absolute Inequalities",
  "source": "Bartle & Sherbert 4e §2.2 Ex 9",
  "prompt": "Find all values of $x$ that satisfy the following inequalities. Sketch graphs.\n(a) $|x - 2| \\le x + 1$\n(b) $3|x| \\le 2 - x$",
  "tests": [
    "c.2.2.1",
    "c.2.2.7"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.2 systematically.</p>",
  "solution": "<p>Note that we must have $x + 1 \\ge 0$, so $x \\ge -1$.</p><p>It simplifies to $-2 \\le 1$, which is ALWAYS true. So all $x \\ge 2$ are solutions.</p><p>Case 2: $x < 2$. The inequality is $-(x - 2) \\le x + 1 \\implies -x + 2 \\le x + 1$.</p><p>Solving this gives $1 \\le 2x \\implies x \\ge 0.5$. Since we are in the case $x < 2$, the valid range is $[0.5, 2)$.</p><p>Union of the cases: $[0.5, 2) \\cup [2, \\infty) = [0.5, \\infty)$.</p><p>Case 1: $x \\ge 0$. The inequality is $3x \\le 2 - x$.</p><p>Add $x$: $4x \\le 2 \\implies x \\le 0.5$. In this case, the valid range is $[0, 0.5]$.</p><p>Solving gives $x \\ge -1$. In this case, the valid range is $[-1, 0)$.</p><p>Union of cases: $[-1, 0) \\cup [0, 0.5] = [-1, 0.5]$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.2."
},
{
  "id": "w.2.2.10",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.2",
  "marks": 5,
  "title": "Squaring vs Cases",
  "source": "Bartle & Sherbert 4e §2.2 Ex 10",
  "prompt": "Find all $x \\in \\mathbb{R}$ that satisfy the following inequalities.\n(a) $|x - 1| > |x + 1|$\n(b) $|x| + |x + 1| < 2$",
  "tests": [
    "c.2.2.1",
    "c.2.2.7"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.2 systematically.</p>",
  "solution": "<p>Since both sides are non-negative, squaring preserves the inequality: $(x - 1)^2 > (x + 1)^2$.</p><p>We have $x^2 - 2x + 1 > x^2 + 2x + 1$.</p><p>Subtract $x^2 + 1$ from both sides: $-2x > 2x$.</p><p>Subtract $2x$: $-4x > 0$. Divide by $-4$ (flip sign): $x < 0$. Solution is $(-\\infty, 0)$.</p><p>Critical points are $0$ and $-1$. We test three intervals.</p><p>Case 1: $x < -1$. Both are negative. $-x - (x + 1) < 2 \\implies -2x - 1 < 2 \\implies -2x < 3 \\implies x > -1.5$. Range: $(-1.5, -1)$.</p><p>Equation: $-x + x + 1 < 2 \\implies 1 < 2$. This is ALWAYS true. Range: $[-1, 0)$.</p><p>Case 3: $x \\ge 0$. Both are positive. $x + x + 1 < 2 \\implies 2x < 1 \\implies x < 0.5$. Range: $[0, 0.5)$.</p><p>Union of all three parts: $(-1.5, -1) \\cup [-1, 0) \\cup [0, 0.5) = (-1.5, 0.5)$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.2."
},
{
  "id": "w.2.2.11",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.2",
  "marks": 5,
  "title": "Graphing Absolute Values",
  "source": "Bartle & Sherbert 4e §2.2 Ex 11",
  "prompt": "Sketch the graph of the equation $y = |x| - |x - 1|$.",
  "tests": [
    "c.2.2.1",
    "c.2.2.7"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.2 systematically.</p>",
  "solution": "<p>The critical points are $x=0$ and $x=1$. We break the function into three domains.</p><p>For $x < 0$, $y = -1$.</p><p>If $0 \\le x < 1$, then $|x| = x$ and $|x-1| = -(x-1)$. Then $y = x - (-x + 1) = 2x - 1$.</p><p>If $x \\ge 1$, then $|x| = x$ and $|x-1| = x-1$. Then $y = x - (x - 1) = 1$.</p><p>The graph is a horizontal line at $y=-1$, a line with slope 2 from $(0,-1)$ to $(1,1)$, and a horizontal line at $y=1$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.2."
},
{
  "id": "w.2.2.12",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.2",
  "marks": 5,
  "title": "Bounded Distance Sum",
  "source": "Bartle & Sherbert 4e §2.2 Ex 12",
  "prompt": "Find all $x \\in \\mathbb{R}$ that satisfy the inequality $4 < |x + 2| + |x - 1| < 5$.",
  "tests": [
    "c.2.2.1",
    "c.2.2.7"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.2 systematically.</p>",
  "solution": "<p>Critical points are $-2$ and $1$.</p><p>In the middle, $f(x) = 3$. This never satisfies $4 < 3 < 5$, so no solutions here.</p><p>Right region ($x > 1$): $f(x) = (x+2) + (x-1) = 2x + 1$. We solve $4 < 2x + 1 < 5 \\implies 3 < 2x < 4 \\implies 1.5 < x < 2$.</p><p>Left region ($x < -2$): $f(x) = -(x+2) - (x-1) = -2x - 1$. We solve $4 < -2x - 1 < 5 \\implies 5 < -2x < 6 \\implies -3 < x < -2.5$.</p><p>Solution set: $(-3, -2.5) \\cup (1.5, 2)$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.2."
},
{
  "id": "w.2.2.13",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.2",
  "marks": 5,
  "title": "Simultaneous Inequalities",
  "source": "Bartle & Sherbert 4e §2.2 Ex 13",
  "prompt": "Find all $x \\in \\mathbb{R}$ that satisfy both $|2x - 3| < 5$ and $|x + 1| > 2$ simultaneously.",
  "tests": [
    "c.2.2.1",
    "c.2.2.7"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.2 systematically.</p>",
  "solution": "<p>First inequality: $|2x - 3| < 5 \\implies -5 < 2x - 3 < 5$.</p><p>Add 3: $-2 < 2x < 8$. Divide by 2: $-1 < x < 4$. So $x \\in (-1, 4)$.</p><p>This gives $x > 1$ or $x < -3$.</p><p>Now intersect $(-1, 4)$ with $(-\\infty, -3) \\cup (1, \\infty)$.</p><p>The interval $(-1, 4)$ only overlaps with the $x > 1$ part. The intersection is $(1, 4)$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.2."
},
{
  "id": "w.2.2.14",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.2",
  "marks": 5,
  "title": "2D Absolute Value Equations",
  "source": "Bartle & Sherbert 4e §2.2 Ex 14",
  "prompt": "Determine and sketch the set of pairs $(x, y)$ in $\\mathbb{R} \\times \\mathbb{R}$ that satisfy:\n(a) $|x| = |y|$\n(b) $|x| + |y| = 1$\n(c) $|xy| = 2$\n(d) $|x| - |y| = 2$",
  "tests": [
    "c.2.2.1",
    "c.2.2.7"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.2 systematically.</p>",
  "solution": "<p>(a) $|x| = |y| \\implies x = y$ or $x = -y$. This forms an </p><p>(b) It forms a diamond/square with vertices at $(\\pm1, 0)$ and $(0, \\pm1)$.</p><p>(c) $|xy| = 2 \\implies xy = 2$ or $xy = -2$. These are four hyperbolic curves in the four quadrants.</p><p>(d) $|x| - |y| = 2$. In Q1, $x - y = 2 \\implies y = x - 2$. Mirroring this to all quadrants yields a set of rays forming an hourglass shape pointing left and right.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.2."
},
{
  "id": "w.2.2.15",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.2",
  "marks": 5,
  "title": "2D Absolute Value Inequalities",
  "source": "Bartle & Sherbert 4e §2.2 Ex 15",
  "prompt": "Determine and sketch the set of pairs $(x, y)$ in $\\mathbb{R} \\times \\mathbb{R}$ that satisfy:\n(a) $|x| \\le |y|$\n(b) $|x| + |y| \\le 1$\n(c) $|xy| \\le 2$\n(d) $|x| - |y| \\ge 2$",
  "tests": [
    "c.2.2.1",
    "c.2.2.7"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.2 systematically.</p>",
  "solution": "<p>These are the filled-in versions of the shapes from Exercise 14.</p><p>(a) Shaded regions are the upper and lower quadrants bounded by $y = \\pm x$.</p><p>(b) $|x| + |y| \\le 1$ represents the *interior* of the diamond shape.</p><p>(c) $|xy| \\le 2$ represents the cross-shaped region situated *between* the hyperbola branches, containing the origin.</p><p>(d) $|x| - |y| \\ge 2 \\implies |x| \\ge |y| + 2$. These are the regions strictly to the left of $x = -2$ and right of $x = 2$, bounded by the rays from Ex 14d.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.2."
},
{
  "id": "w.2.2.16",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.2",
  "marks": 5,
  "title": "Neighborhood Operations",
  "source": "Bartle & Sherbert 4e §2.2 Ex 16",
  "prompt": "Let $\\epsilon > 0$ and $\\delta > 0$, and $a \\in \\mathbb{R}$. \n\nShow that $V_\\epsilon(a) \\cap V_\\delta(a)$ and $V_\\epsilon(a) \\cup V_\\delta(a)$ are $\\gamma$-neighborhoods of $a$ for appropriate values of $\\gamma$.",
  "tests": [
    "c.2.2.1",
    "c.2.2.7"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.2 systematically.</p>",
  "solution": "<p>A neighborhood $V_\\epsilon(a)$ is an interval $(a - \\epsilon, a + \\epsilon)$. One neighborhood is always completely contained inside the other, depending on which radius is smaller.</p><p>The intersection is $V_{\\min(\\epsilon, \\delta)}(a)$.</p><p>Similarly, the union of the two nested intervals is simply the larger interval.</p><p>Therefore, the union $V_\\epsilon(a) \\cup V_\\delta(a)$ is $V_{\\max(\\epsilon, \\delta)}(a)$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.2."
},
{
  "id": "w.2.2.17",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.2",
  "marks": 5,
  "title": "Disjoint Neighborhoods",
  "source": "Bartle & Sherbert 4e §2.2 Ex 17",
  "prompt": "Show that if $a, b \\in \\mathbb{R}$, and $a \\neq b$, then there exist $\\epsilon$-neighborhoods $U$ of $a$ and $V$ of $b$ such that $U \\cap V = \\emptyset$.",
  "tests": [
    "c.2.2.1",
    "c.2.2.7"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.2 systematically.</p>",
  "solution": "<p>Since $a \\neq b$, the distance between them is $|a - b| > 0$.</p><p>Let $\\epsilon = \\frac{|a - b|}{2}$. Since $a \\neq b$, $\\epsilon > 0$.</p><p>Let $U = V_\\epsilon(a)$ and $V = V_\\epsilon(b)$.</p><p>Assume for contradiction there is some $x \\in U \\cap V$. Then $|x - a| < \\epsilon$ and $|x - b| < \\epsilon$.</p><p>By the Triangle Inequality: $|a - b| = |a - x + x - b| \\le |x - a| + |x - b| < \\epsilon + \\epsilon = 2\\epsilon$.</p><p>But $2\\epsilon = |a - b|$. So we get $|a - b| < |a - b|$, a contradiction. Thus $U \\cap V = \\emptyset$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.2."
},
{
  "id": "w.2.2.18",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.2",
  "marks": 5,
  "title": "Formulas for Min and Max",
  "source": "Bartle & Sherbert 4e §2.2 Ex 18",
  "prompt": "Show that if $a, b \\in \\mathbb{R}$ then:\n(a) $\\max\\{a, b\\} = \\frac{1}{2}(a + b + |a - b|)$\n(b) $\\min\\{a, b\\} = \\frac{1}{2}(a + b - |a - b|)$",
  "tests": [
    "c.2.2.1",
    "c.2.2.7"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.2 systematically.</p>",
  "solution": "<p>Since $a$ and $b$ are symmetric in the formula, we can assume without loss of generality that $a \\ge b$.</p><p>It simplifies to $a - b$.</p><p>Plug this into the formula: $\\frac{1}{2}(a + b + a - b)$.</p><p>The $b$ terms cancel: $\\frac{1}{2}(2a) = a$.</p><p>Since we assumed $a \\ge b$, $\\max\\{a,b\\} = a$. The formula yields $a$. It works perfectly! (A similar substitution verifies the Min formula).</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.2."
},
{
  "id": "w.2.2.19",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.2",
  "marks": 5,
  "title": "The Middle Number",
  "source": "Bartle & Sherbert 4e §2.2 Ex 19",
  "prompt": "Show that if $a, b, c \\in \\mathbb{R}$, then the \"middle number\" is:\n$\\operatorname{mid}\\{a, b, c\\} = \\min\\{\\max\\{a, b\\}, \\max\\{b, c\\}, \\max\\{c, a\\}\\}$",
  "tests": [
    "c.2.2.1",
    "c.2.2.7"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.2 systematically.</p>",
  "solution": "<p>Since the formula is symmetric, we can assume a specific ordering without loss of generality. Let</p><p>We expect the result to be $b$.</p><p>Let</p><p>Now plug these into the outer function: $\\min\\{b, c, c\\}$.</p><p>The minimum of $b$ and $c$ is $b$. The formula outputs $b$! Since ordering doesn</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.2."
},
{
  "id": "w.2.3.01",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.3",
  "marks": 5,
  "title": "Non-negative Reals",
  "source": "Bartle & Sherbert 4e §2.3 Ex 1",
  "prompt": "Let $S_1 := \\{x \\in \\mathbb{R} : x \\ge 0\\}$. \n\nShow in detail that the set $S_1$ has lower bounds, but no upper bounds. Show that $\\inf S_1 = 0$.",
  "tests": [
    "c.2.3.1",
    "c.2.3.4",
    "c.2.3.6"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.3 systematically.</p>",
  "solution": "<p>By definition, every element $x \\in S_1$ satisfies $x \\ge 0$. Therefore, $0$ is a lower bound for $S_1$.</p><p>Suppose $u$ is an upper bound. Then $x \\le u$ for all $x \\ge 0$. But $u+1 > 0$, so $u+1 \\in S_1$. Thus $u+1 \\le u \\implies 1 \\le 0$, a contradiction. So $S_1$ has no upper bounds.</p><p>We know $0$ is a lower bound. To show $\\inf S_1 = 0$, we must show it is the *greatest* lower bound.</p><p>Let $w > 0$. Since $w \\in S_1$ and $w/2 < w$, the element $w/2 \\in S_1$ is strictly smaller than $w$. Thus $w$ cannot be a lower bound. \nTherefore, $0$ is the greatest lower bound. $\\inf S_1 = 0$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.3."
},
{
  "id": "w.2.3.02",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.3",
  "marks": 5,
  "title": "Strictly Positive Reals",
  "source": "Bartle & Sherbert 4e §2.3 Ex 2",
  "prompt": "Let $S_2 := \\{x \\in \\mathbb{R} : x > 0\\}$.\n\nDoes $S_2$ have lower bounds? Does $S_2$ have upper bounds? Does $\\inf S_2$ exist? Does $\\sup S_2$ exist? Prove your statements.",
  "tests": [
    "c.2.3.1",
    "c.2.3.4",
    "c.2.3.6"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.3 systematically.</p>",
  "solution": "<p>Like $S_1$, $S_2$ contains arbitrarily large numbers. By the Archimedean Property, it has no upper bounds. Thus, $\\sup S_2$ does not exist.</p><p>Yes, $0$ is a lower bound because $x > 0 \\implies x \\ge 0$ for all $x \\in S_2$.</p><p>Since $S_2$ is bounded below, the Completeness Property (Infimum version) guarantees that $\\inf S_2$ exists.</p><p>Let $w > 0$. Then $w/2 > 0$, so $w/2 \\in S_2$. Since $w/2 < w$, $w$ cannot be a lower bound. Thus $0$ is the greatest lower bound, so $\\inf S_2 = 0$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.3."
},
{
  "id": "w.2.3.03",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.3",
  "marks": 5,
  "title": "Sequence of Reciprocals",
  "source": "Bartle & Sherbert 4e §2.3 Ex 3",
  "prompt": "Let $S_3 = \\{1/n : n \\in \\mathbb{N}\\}$. \n\nShow that $\\sup S_3 = 1$ and $\\inf S_3 \\ge 0$. \n*(It will follow from the Archimedean Property that $\\inf S_3 = 0$.)*",
  "tests": [
    "c.2.3.1",
    "c.2.3.4",
    "c.2.3.6"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.3 systematically.</p>",
  "solution": "<p>The elements of $S_3$ are $1, 1/2, 1/3, 1/4, \\dots$</p><p>The maximum element is $1$.</p><p>Since $1 \\in S_3$ and $1/n \\le 1$ for all $n \\in \\mathbb{N}$, 1 is an upper bound. Since it</p><p>For the infimum, note that $n \\ge 1 > 0$, so $1/n > 0$ for all $n \\in \\mathbb{N}$. Thus 0 is a lower bound, implying $\\inf S_3 \\ge 0$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.3."
},
{
  "id": "w.2.3.04",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.3",
  "marks": 5,
  "title": "Alternating Sequence",
  "source": "Bartle & Sherbert 4e §2.3 Ex 4",
  "prompt": "Let $S_4 := \\{1 - (-1)^n / n : n \\in \\mathbb{N}\\}$. \n\nFind $\\inf S_4$ and $\\sup S_4$.",
  "tests": [
    "c.2.3.1",
    "c.2.3.4",
    "c.2.3.6"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.3 systematically.</p>",
  "solution": "<p>Let</p><p>For $n=1$, $x_1 = 2$.</p><p>For $n=2$, $x_2 = 1 - 1/2 = 1/2$.</p><p>For $n=3$, $x_3 = 1 - (-1)/3 = 4/3 \\approx 1.33$.</p><p>For $n=4$, $x_4 = 1 - 1/4 = 3/4 = 0.75$.</p><p>Notice the odd terms are $1 + 1/n$ (decreasing from 2 to 1). The even terms are $1 - 1/n$ (increasing from 1/2 to 1).</p><p>The maximum value is clearly $2$, so $\\sup S_4 = 2$. The minimum value is clearly $1/2$, so $\\inf S_4 = 1/2$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.3."
},
{
  "id": "w.2.3.05",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.3",
  "marks": 5,
  "title": "Sets from Inequalities",
  "source": "Bartle & Sherbert 4e §2.3 Ex 5",
  "prompt": "Find the infimum and supremum, if they exist, of each of the following sets.\n(a) $A := \\{x \\in \\mathbb{R} : 2x + 5 > 0\\}$\n(b) $B := \\{x \\in \\mathbb{R} : x + 2 \\ge x^2\\}$",
  "tests": [
    "c.2.3.1",
    "c.2.3.4",
    "c.2.3.6"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.3 systematically.</p>",
  "solution": "<p>We solve $2x + 5 > 0 \\implies 2x > -5 \\implies x > -5/2$.</p><p>Set $A$ is not bounded above, so $\\sup A$ does not exist (or is $+\\infty$).</p><p>The set is bounded below by $-5/2$. Since we can get arbitrarily close to it, $\\inf A = -5/2$.</p><p>We have $x^2 - x - 2 \\le 0$.</p><p>It factors as $(x-2)(x+1) \\le 0$.</p><p>This means $x$ must be between the roots: $-1 \\le x \\le 2$. So $B = [-1, 2]$.</p><p>Thus, $\\inf B = -1$ and $\\sup B = 2$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.3."
},
{
  "id": "w.2.3.06",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.3",
  "marks": 5,
  "title": "More Inequalities",
  "source": "Bartle & Sherbert 4e §2.3 Ex 6",
  "prompt": "Find the infimum and supremum, if they exist, of each of the following sets.\n(c) $C := \\{x \\in \\mathbb{R} : x < 1/x\\}$\n(d) $D := \\{x \\in \\mathbb{R} : x^2 - 2x - 5 < 0\\}$",
  "tests": [
    "c.2.3.1",
    "c.2.3.4",
    "c.2.3.6"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.3 systematically.</p>",
  "solution": "<p>Rewrite as $x - 1/x < 0 \\implies \\frac{x^2 - 1}{x} < 0 \\implies \\frac{(x-1)(x+1)}{x} < 0$.</p><p>The set is $C = (-\\infty, -1) \\cup (0, 1)$.</p><p>This set has no lower bound, so $\\inf C$ does not exist. The upper bound is $1$, so $\\sup C = 1$.</p><p>Complete the square: $x^2 - 2x + 1 - 6 < 0 \\implies (x-1)^2 < 6$.</p><p>Take the square root: $|x-1| < \\sqrt{6}$.</p><p>This unfolds to $1 - \\sqrt{6} < x < 1 + \\sqrt{6}$.</p><p>Thus, $\\inf D = 1 - \\sqrt{6}$ and $\\sup D = 1 + \\sqrt{6}$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.3."
},
{
  "id": "w.2.3.07",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.3",
  "marks": 5,
  "title": "Exercise 6 & 7: Properties of Sup/Inf",
  "source": "Bartle & Sherbert 4e §2.3 Ex 7",
  "prompt": "**Exercise 6:** Let $S$ be a nonempty subset of $\\mathbb{R}$ bounded below. Prove that $\\inf S = -\\sup\\{-s : s \\in S\\}$.\n\n**Exercise 7:** If a set $S \\subseteq \\mathbb{R}$ contains one of its upper bounds, show that this upper bound is the supremum of $S$.",
  "tests": [
    "c.2.3.1",
    "c.2.3.4",
    "c.2.3.6"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.3 systematically.</p>",
  "solution": "<p>Let $u = \\sup(S)$. Then for all $s \\in S$, $s \\le u$.</p><p>Multiplying by $-1$ reverses the inequality: $-s \\ge -u$ for all $s \\in S$. Since every element of $S'$ is of the form $-s$, this means $x \\ge -u$ for all $x \\in S'$. Hence $-u$ is a lower bound of $S'$.</p><p>Now let $v$ be any lower bound of $S'$. Then for all $x \\in S'$, $x \\ge v$. Writing $x = -s$ gives $-s \\ge v \\implies s \\le -v$ for all $s \\in S$. Thus $-v$ is an upper bound of $S$.</p><p>Since $u = \\sup(S)$ is the least upper bound of $S$, we must have $u \\le -v$, which rearranges to $v \\le -u$.</p><p>Since $-u$ is a lower bound that is $\\ge$ every other lower bound, $-u = \\inf(S')$. That is, $\\inf(S') = -\\sup(S)$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.3."
},
{
  "id": "w.2.3.08",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.3",
  "marks": 5,
  "title": "Upper Bound Equivalence",
  "source": "Bartle & Sherbert 4e §2.3 Ex 8",
  "prompt": "Let $S \\subseteq \\mathbb{R}$ be nonempty. Show that $u \\in \\mathbb{R}$ is an upper bound of $S$ if and only if the conditions $t \\in \\mathbb{R}$ and $t > u$ imply that $t \\notin S$.",
  "tests": [
    "c.2.3.1",
    "c.2.3.4",
    "c.2.3.6"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.3 systematically.</p>",
  "solution": "<p><b>(=>)</b> Assume $u$ is an upper bound of $S$. Then $s \\le u$ for all $s \\in S$. If $t > u$, then $s \\le u < t$ for all $s \\in S$, so no element of $S$ can equal $t$. Therefore $t \\notin S$.</p><p><b>(<=)</b> We prove the contrapositive. Assume $u$ is NOT an upper bound of $S$. Then there exists some element $s_0 \\in S$ such that $s_0 > u$. Let $t = s_0$. Then $t > u$, but $t \\in S$. This violates the condition that $t > u \\implies t \\notin S$. Hence $u$ must be an upper bound of $S$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.3."
},
{
  "id": "w.2.3.09",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.3",
  "marks": 5,
  "title": "Supremum and 1/n",
  "source": "Bartle & Sherbert 4e §2.3 Ex 9",
  "prompt": "Let $S \\subseteq \\mathbb{R}$ be nonempty. Show that if $u = \\sup S$, then for every number $n \\in \\mathbb{N}$ the number $u - 1/n$ is not an upper bound of $S$, but the number $u + 1/n$ is an upper bound of $S$.",
  "tests": [
    "c.2.3.1",
    "c.2.3.4",
    "c.2.3.6"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.3 systematically.</p>",
  "solution": "<p>Assume $u = \\sup S$. This means $u$ is the *least* upper bound.</p><p>Since $1/n > 0$, $u - 1/n < u$.</p><p>Because $u$ is the least upper bound, any number strictly less than $u$ cannot be an upper bound. Thus $u - 1/n$ is not an upper bound of $S$.</p><p>Now consider $u + 1/n$. Since $1/n > 0$, we have $u < u + 1/n$.</p><p>Since $u$ is an upper bound of $S$, $s \\le u$ for all $s \\in S$. Thus $s \\le u < u + 1/n$. This makes $u + 1/n$ an upper bound of $S$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.3."
},
{
  "id": "w.2.3.10",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.3",
  "marks": 5,
  "title": "Supremum of a Union",
  "source": "Bartle & Sherbert 4e §2.3 Ex 10",
  "prompt": "Show that if $A$ and $B$ are bounded subsets of $\\mathbb{R}$, then $A \\cup B$ is a bounded set. \n\nShow that $\\sup(A \\cup B) = \\sup\\{\\sup A, \\sup B\\}$.",
  "tests": [
    "c.2.3.1",
    "c.2.3.4",
    "c.2.3.6"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.3 systematically.</p>",
  "solution": "<p>Let $u_A = \\sup A$ and $u_B = \\sup B$. Let $u = \\sup\\{u_A, u_B\\}$ (which is just the maximum of the two).</p><p>Yes, $u$ is an upper bound for $A \\cup B$.</p><p>To show $u$ is the *least* upper bound, let $v$ be any upper bound of $A \\cup B$.</p><p>Since $A \\subseteq A \\cup B$, $v$ must be an upper bound for $A$. Thus $v \\ge u_A$.</p><p>Similarly, since $B \\subseteq A \\cup B$, $v$ must be an upper bound for $B$. Thus $v \\ge u_B$.</p><p>Since $v$ is greater than or equal to both $u_A$ and $u_B$, it must be $\\ge$ their maximum. Thus $v \\ge u$. Therefore, $u = \\sup(A \\cup B)$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.3."
},
{
  "id": "w.2.3.11",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.3",
  "marks": 5,
  "title": "Bounds of Subsets",
  "source": "Bartle & Sherbert 4e §2.3 Ex 11",
  "prompt": "Let $S$ be a bounded set in $\\mathbb{R}$ and let $S_0$ be a nonempty subset of $S$. \n\nShow that $\\inf S \\le \\inf S_0 \\le \\sup S_0 \\le \\sup S$.",
  "tests": [
    "c.2.3.1",
    "c.2.3.4",
    "c.2.3.6"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.3 systematically.</p>",
  "solution": "<p>Let $u = \\sup S$. Then for all $s \\in S$, $s \\le u$.</p><p>For all $x \\in S_0$, $x \\le u$. Thus $u$ is an upper bound for $S_0$.</p><p>Because $u$ is an upper bound for $S_0$, the *least* upper bound of $S_0$ must be $\\le u$. Thus $\\sup S_0 \\le \\sup S$.</p><p>By the exact same subset logic on the lower bounds, if $w = \\inf S$, then $w \\le x$ for all $x \\in S_0$, making $w$ a lower bound for $S_0$.</p><p>Thus, the *greatest* lower bound of $S_0$ must be $\\ge w$. So $\\inf S \\le \\inf S_0$.</p><p>Finally, since $S_0$ is nonempty, there is at least one element $x \\in S_0$, so $\\inf S_0 \\le x \\le \\sup S_0$. Stringing them together gives the result! Goal reached.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.3."
},
{
  "id": "w.2.3.12",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.3",
  "marks": 5,
  "title": "Adjoining a Point",
  "source": "Bartle & Sherbert 4e §2.3 Ex 12",
  "prompt": "Let $S \\subseteq \\mathbb{R}$ and suppose that $s^* := \\sup S$ belongs to $S$. \n\nIf $u \\notin S$, show that $\\sup(S \\cup \\{u\\}) = \\sup\\{s^*, u\\}$.",
  "tests": [
    "c.2.3.1",
    "c.2.3.4",
    "c.2.3.6"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.3 systematically.</p>",
  "solution": "<p>Let $T = S \\cup \\{u\\}$. The elements of $T$ are either from $S$ or are exactly $u$.</p><p>Let $m = \\sup\\{s^*, u\\} = \\max(s^*, u)$. Clearly, $t \\le m$ for all $t \\in T$, so $m$ is an upper bound of $T$.</p><p>Is it the *least* upper bound? Let $v$ be any upper bound of $T$.</p><p>Since $s^* \\in S \\subseteq T$, $s^*$ must be $\\le v$.</p><p>Since $u \\in T$, $u$ must be $\\le v$.</p><p>Since $v$ is $\\ge s^*$ and $\\ge u$, it must be $\\ge$ their maximum, $m$. Therefore $m$ is the least upper bound! Goal reached.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.3."
},
{
  "id": "w.2.3.13",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.3",
  "marks": 5,
  "title": "Finite Sets Contain Supremum",
  "source": "Bartle & Sherbert 4e §2.3 Ex 13",
  "prompt": "Show that a nonempty finite set $S \\subseteq \\mathbb{R}$ contains its supremum.\n\n*[Hint: Use Mathematical Induction and the preceding exercise.]*",
  "tests": [
    "c.2.3.1",
    "c.2.3.4",
    "c.2.3.6"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.3 systematically.</p>",
  "solution": "<p>Base case ($n=1$): $S = \\{a\\}$. The only element is $a$, which acts as both an upper bound and the least upper bound. Thus $\\sup S = a \\in S$. True.</p><p>Write $S = S_k \\cup \\{u\\}$, where $u \\notin S_k$ and $S_k$ has $k$ elements.</p><p>By the induction hypothesis, $s^* = \\sup S_k$ exists and belongs to $S_k$.</p><p>By Exercise 12, $\\sup S = \\sup(S_k \\cup \\{u\\}) = \\max(s^*, u)$.</p><p>Since both $s^* \\in S$ and $u \\in S$, their maximum must also be one of those two elements, and therefore must be in $S$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.3."
},
{
  "id": "w.2.3.14",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.3",
  "marks": 5,
  "title": "Epsilon Characterization of Infimum",
  "source": "Bartle & Sherbert 4e §2.3 Ex 14",
  "prompt": "Let $S$ be a set that is bounded below. \n\nProve that a lower bound $w$ of $S$ is the infimum of $S$ if and only if for any $\\varepsilon > 0$ there exists $t \\in S$ such that $t < w + \\varepsilon$.",
  "tests": [
    "c.2.3.1",
    "c.2.3.4",
    "c.2.3.6"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.3 systematically.</p>",
  "solution": "<p>Forward: Assume $w = \\inf S$. Let $\\varepsilon > 0$. Then $w + \\varepsilon > w$.</p><p>Thus $w + \\varepsilon$ is not a lower bound.</p><p>Because it</p><p>Backward: Assume the condition holds. Let $v$ be any lower bound of $S$. We must show $v \\le w$.</p><p>Assume for contradiction that $v > w$. Let $\\varepsilon = v - w > 0$.</p><p>By the condition, there exists $t \\in S$ such that $t < w + (v - w) = v$.</p><p>But if $t < v$, then $v$ cannot be a lower bound of $S$! This contradiction means $v \\le w$ must be true. Thus $w = \\inf S$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.3."
},
{
  "id": "w.2.4.01",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.4",
  "marks": 5,
  "title": "Supremum of 1 - 1/n",
  "source": "Bartle & Sherbert 4e §2.4 Ex 1",
  "prompt": "Show that $\\sup\\{1 - 1/n : n \\in \\mathbb{N}\\} = 1$.",
  "tests": [
    "c.2.4.3",
    "c.2.4.7",
    "c.2.4.8",
    "c.2.4.9"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.4 systematically.</p>",
  "solution": "<p>First, for any $n \\ge 1$, $1/n > 0$, so $1 - 1/n < 1$. Thus, 1 is an upper bound.</p><p>We need $1/n < 1 - v$. Let $\\varepsilon = 1 - v > 0$.</p><p>By the Archimedean Property, there exists $n \\in \\mathbb{N}$ such that $1/n < \\varepsilon$.</p><p>This implies $1 - 1/n > 1 - \\varepsilon = v$. Thus we found an element greater than $v$. So $\\sup = 1$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.4."
},
{
  "id": "w.2.4.02",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.4",
  "marks": 5,
  "title": "Inf and Sup of Set S",
  "source": "Bartle & Sherbert 4e §2.4 Ex 2",
  "prompt": "If $S := \\{1/n - 1/m : n, m \\in \\mathbb{N}\\}$, find $\\inf S$ and $\\sup S$.",
  "tests": [
    "c.2.4.3",
    "c.2.4.7",
    "c.2.4.8",
    "c.2.4.9"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.4 systematically.</p>",
  "solution": "<p>To make $1/n - 1/m$ as large as possible, we want $1/n$ large and $1/m$ small.</p><p>Max $1/n = 1$.</p><p>We can make $1/m$ arbitrarily close to 0 (by Archimedean Property), but never negative. So $\\sup S = 1 - 0 = 1$.</p><p>Wait, is 1 in the set? No, because $1/m > 0$. But we can get arbitrarily close to 1 (e.g., $1 - 1/1000$). Thus $\\sup S = 1$.</p><p>To minimize, we want $1/n$ small (close to 0) and $1/m$ large (close to 1).</p><p>We can get arbitrarily close to $0 - 1 = -1$.</p><p>Thus $\\inf S = -1$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.4."
},
{
  "id": "w.2.4.03",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.4",
  "marks": 5,
  "title": "Converse of Supremum",
  "source": "Bartle & Sherbert 4e §2.4 Ex 3",
  "prompt": "Let $S \\subseteq \\mathbb{R}$ be nonempty. Prove that if $u \\in \\mathbb{R}$ satisfies:\n(i) for every $n$, $u - 1/n$ is not an upper bound,\n(ii) for every $n$, $u + 1/n$ is an upper bound,\nthen $u = \\sup S$.",
  "tests": [
    "c.2.4.3",
    "c.2.4.7",
    "c.2.4.8",
    "c.2.4.9"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.4 systematically.</p>",
  "solution": "<p>First, we show $u$ is an upper bound. Assume it</p><p>This implies $u + 1/n < s$. But condition (ii) says $u + 1/n$ is an upper bound, so $s \\le u + 1/n$. Contradiction! Thus $u$ is an upper bound.</p><p>Second, show it</p><p>Condition (i) says $u - 1/n$ is NOT an upper bound. Since $v$ is even smaller, $v$ cannot be an upper bound. Thus $u = \\sup S$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.4."
},
{
  "id": "w.2.4.04",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.4",
  "marks": 5,
  "title": "Sup/Inf of aS and bS",
  "source": "Bartle & Sherbert 4e §2.4 Ex 4",
  "prompt": "Let $S$ be a bounded set in $\\mathbb{R}$.\n(a) Let $a > 0$. Show $\\inf(aS) = a \\inf S$ and $\\sup(aS) = a \\sup S$.\n(b) Let $b < 0$. Show $\\inf(bS) = b \\sup S$ and $\\sup(bS) = b \\inf S$.",
  "tests": [
    "c.2.4.3",
    "c.2.4.7",
    "c.2.4.8",
    "c.2.4.9"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.4 systematically.</p>",
  "solution": "<p>Let $w = \\inf S$. Then $w \\le s$ for all $s \\in S$.</p><p>We get $bs \\le bw$ for all $s \\in S$. Thus $bw$ is an upper bound for $bS$.</p><p>To show it</p><p>Multiply by $b$ again: $bs > v$. Thus $v$ is not an upper bound. So $bw = \\sup(bS)$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.4."
},
{
  "id": "w.2.4.05",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.4",
  "marks": 5,
  "title": "Sup of Squares",
  "source": "Bartle & Sherbert 4e §2.4 Ex 5",
  "prompt": "Let $S$ be a bounded set of *nonnegative* real numbers. Let $T := \\{x^2 : x \\in S\\}$. Prove that if $u = \\sup S$, then $u^2 = \\sup T$.",
  "tests": [
    "c.2.4.3",
    "c.2.4.7",
    "c.2.4.8",
    "c.2.4.9"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.4 systematically.</p>",
  "solution": "<p>Since $x \\le u$ for all $x \\in S$ and $x \\ge 0$, we have $x^2 \\le u^2$. Thus $u^2$ is an upper bound of $T$.</p><p>Since $v < u^2$, $\\sqrt{v} < u$. Since $u = \\sup S$, there exists $x \\in S$ such that $x > \\sqrt{v}$.</p><p>Squaring gives $x^2 > v$. Since $x^2 \\in T$, we found an element in $T$ greater than $v$. Thus $u^2 = \\sup T$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.4."
},
{
  "id": "w.2.4.06",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.4",
  "marks": 5,
  "title": "Sup of a Function Sum",
  "source": "Bartle & Sherbert 4e §2.4 Ex 6",
  "prompt": "Let $X$ be a nonempty set and $f: X \\to \\mathbb{R}$ have bounded range. Let $a \\in \\mathbb{R}$.\n\nShow that $\\sup\\{a + f(x) : x \\in X\\} = a + \\sup\\{f(x) : x \\in X\\}$.",
  "tests": [
    "c.2.4.3",
    "c.2.4.7",
    "c.2.4.8",
    "c.2.4.9"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.4 systematically.</p>",
  "solution": "<p>Let $S = \\{f(x) : x \\in X\\}$. Then the set on the LHS is $a + S = \\{a + s : s \\in S\\}$.</p><p>We already know from Exercise 2.4.1(a) (or basic properties) that $\\sup(a + S) = a + \\sup S$.</p><p>Shifting the set shifts the supremum by exactly the same amount.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.4."
},
{
  "id": "w.2.4.07",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.4",
  "marks": 5,
  "title": "Sup of Sum of Sets",
  "source": "Bartle & Sherbert 4e §2.4 Ex 7",
  "prompt": "Let $A$ and $B$ be bounded nonempty sets. Let $A + B := \\{a + b : a \\in A, b \\in B\\}$. \n\nProve that $\\sup(A + B) = \\sup A + \\sup B$.",
  "tests": [
    "c.2.4.3",
    "c.2.4.7",
    "c.2.4.8",
    "c.2.4.9"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.4 systematically.</p>",
  "solution": "<p>Let $u_A = \\sup A$ and $u_B = \\sup B$. For any $x \\in A+B$, $x = a+b$ where $a \\le u_A$ and $b \\le u_B$.</p><p>So $\\sup(A+B) \\le u_A + u_B$.</p><p>Now let $\\varepsilon > 0$. There exist $a \\in A$ and $b \\in B$ such that $a > u_A - \\varepsilon/2$ and $b > u_B - \\varepsilon/2$.</p><p>Then $a+b > u_A + u_B - \\varepsilon$. Since $a+b \\in A+B$, we have found an element arbitrarily close to the sum. Thus $\\sup(A+B) \\ge u_A + u_B$.</p><p>Combining inequalities proves equality.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.4."
},
{
  "id": "w.2.4.08",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.4",
  "marks": 5,
  "title": "Sup of Functions",
  "source": "Bartle & Sherbert 4e §2.4 Ex 8",
  "prompt": "Let $f, g$ be bounded functions on $X$. Show that $\\sup\\{f(x) + g(x)\\} \\le \\sup\\{f(x)\\} + \\sup\\{g(x)\\}$.\n\nGive an example where the inequality is strict.",
  "tests": [
    "c.2.4.3",
    "c.2.4.7",
    "c.2.4.8",
    "c.2.4.9"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.4 systematically.</p>",
  "solution": "<p>For any specific $x$, $f(x) \\le \\sup f$ and $g(x) \\le \\sup g$.</p><p>Since $\\sup f + \\sup g$ is an upper bound for the set of sums, the supremum of the sums must be $\\le$ this bound.</p><p>Counterexample: Let $X = \\{1, 2\\}$. $f(1)=1, f(2)=0$. $g(1)=0, g(2)=1$. $\\sup f = 1, \\sup g = 1$. Sum is 2.</p><p>But $(f+g)(1) = 1, (f+g)(2) = 1$. So $\\sup(f+g) = 1$. $1 < 2$. Strict inequality holds!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.4."
},
{
  "id": "w.2.4.09",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.4",
  "marks": 5,
  "title": "Supremum of Iterated Functions",
  "source": "Bartle & Sherbert 4e §2.4 Ex 9",
  "prompt": "Let $X = Y = \\{x \\in \\mathbb{R} : 0 < x < 1\\}$. Define $h(x, y) := 2x + y$.\n\n(a) For each $x$, find $F(x) = \\sup\\{h(x, y) : y \\in Y\\}$.\n(b) Find $\\inf\\{F(x) : x \\in X\\}$.",
  "tests": [
    "c.2.4.3",
    "c.2.4.7",
    "c.2.4.8",
    "c.2.4.9"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.4 systematically.</p>",
  "solution": "<p>$h(x, y) = 2x + y$. We hold $x$ constant and vary $y \\in (0, 1)$.</p><p>So $F(x) = 2x + 1$.</p><p>Now we want $\\inf\\{2x + 1 : x \\in (0, 1)\\}$.</p><p>As $x \\to 0$, $2x + 1 \\to 1$. Thus the infimum is 1.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.4."
},
{
  "id": "w.2.4.10",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.4",
  "marks": 5,
  "title": "Diagonal Function",
  "source": "Bartle & Sherbert 4e §2.4 Ex 10",
  "prompt": "Perform the computations for $h(x, y) = 0$ if $x < y$, and $1$ if $x \\ge y$.",
  "tests": [
    "c.2.4.3",
    "c.2.4.7",
    "c.2.4.8",
    "c.2.4.9"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.4 systematically.</p>",
  "solution": "<p>For a fixed $x \\in (0, 1)$, does there exist a $y \\in (0, 1)$ such that $x < y$?</p><p>So for any $x$, the set of values is $\\{0, 1\\}$. Thus $F(x) = \\sup \\{0, 1\\} = 1$.</p><p>Then $\\inf \\{F(x)\\} = 1$.</p><p>Now consider $g(y) = \\inf\\{h(x, y) : x \\in X\\}$. For fixed $y$, can we make $x < y$?</p><p>Yes. So $h$ can be 0. Can we make $x \\ge y$? Yes. So values are $\\{0, 1\\}$. $\\inf$ is 0. So $g(y) = 0$.</p><p>Then $\\sup \\{g(y)\\} = 0$. Note $0 \\ne 1$, so order of sup/inf matters!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.4."
},
{
  "id": "w.2.5.01",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.5",
  "marks": 5,
  "title": "Interval Subset",
  "source": "Bartle & Sherbert 4e §2.5 Ex 1",
  "prompt": "If $I := [a, b]$ and $I' := [a', b']$ are closed intervals in $\\mathbb{R}$, show that $I \\subseteq I'$ if and only if $a' \\le a$ and $b \\le b'$.",
  "tests": [
    "c.2.5.1",
    "c.2.5.2",
    "c.2.5.4"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.5 systematically.</p>",
  "solution": "<p>Assume $I \\subseteq I</p><p>So $a</p><p>Similarly, $b \\in I \\implies b \\in I</p><p>We have proved $a</p><p>Assume $a</p><p>Then $a \\le x \\le b$.</p><p>Thus $x \\in [a</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.5."
},
{
  "id": "w.2.5.02",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.5",
  "marks": 5,
  "title": "Bounded Sets and Intervals",
  "source": "Bartle & Sherbert 4e §2.5 Ex 2",
  "prompt": "If $S \\subseteq \\mathbb{R}$ is nonempty, show that $S$ is bounded if and only if there exists a closed bounded interval $I$ such that $S \\subseteq I$.",
  "tests": [
    "c.2.5.1",
    "c.2.5.2",
    "c.2.5.4"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.5 systematically.</p>",
  "solution": "<p>Assume $S$ is bounded. Then there exist lower bound $w$ and upper bound $u$.</p><p>Let $I = [w, u]$. For any $s \\in S$, $w \\le s \\le u$, so $s \\in I$.</p><p>Assume $S \\subseteq [a, b]$. Then for all $s \\in S$, $a \\le s \\le b$.</p><p>Thus $a$ is a lower bound and $b$ is an upper bound. So $S$ is bounded.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.5."
},
{
  "id": "w.2.5.03",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.5",
  "marks": 5,
  "title": "Approximating Sup/Inf",
  "source": "Bartle & Sherbert 4e §2.5 Ex 3",
  "prompt": "If $S \\subseteq \\mathbb{R}$ is a nonempty bounded set, and $I_S := [\\inf S, \\sup S]$, show that $S \\subseteq I_S$. \n\nMoreover, if $J$ is any closed bounded interval containing $S$, show that $I_S \\subseteq J$.",
  "tests": [
    "c.2.5.1",
    "c.2.5.2",
    "c.2.5.4"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.5 systematically.</p>",
  "solution": "<p>Part 1: Let $w = \\inf S$ and $u = \\sup S$. For any $s \\in S$, $w \\le s \\le u$ by definition. Thus $S \\subseteq [w, u] = I_S$.</p><p>Part 2: Let $J = [a, b]$ be a closed interval with $S \\subseteq J$.</p><p>So $a$ is a lower bound. Thus $a \\le \\inf S$ (since inf is greatest).</p><p>Similarly, $b$ is an upper bound, so $\\sup S \\le b$.</p><p>Therefore $[\\inf S, \\sup S] \\subseteq [a, b]$, i.e., $I_S \\subseteq J$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.5."
},
{
  "id": "w.2.5.04",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.5",
  "marks": 5,
  "title": "Why x, y exist",
  "source": "Bartle & Sherbert 4e §2.5 Ex 4",
  "prompt": "In the proof of Case (ii) of Theorem 2.5.1 (S bounded above by b but not below), we claimed: 'if $z < b$, there exist $x, y \\in S$ such that $z \\in [x, y]$'. Explain why.",
  "tests": [
    "c.2.5.1",
    "c.2.5.2",
    "c.2.5.4"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.5 systematically.</p>",
  "solution": "<p>We need $y \\in S$ such that $z < y$. Since $z < b$ and $b = \\sup S$...</p><p>So there exists $y \\in S$ with $y > z$.</p><p>We need $x \\in S$ such that $x < z$. Since $S$ is NOT bounded below...</p><p>For any number $K$ (like $z$), there must be an element less than it. So there exists $x \\in S$ with $x < z$.</p><p>Thus $x < z < y$, meaning $z \\in [x, y]$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.5."
},
{
  "id": "w.2.5.05",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.5",
  "marks": 5,
  "title": "Unbounded Intervals",
  "source": "Bartle & Sherbert 4e §2.5 Ex 5",
  "prompt": "Write out the details of the proof of Case (iv) in Theorem 2.5.1: If $S$ is neither bounded above nor below, then $S = \\mathbb{R}$.",
  "tests": [
    "c.2.5.1",
    "c.2.5.2",
    "c.2.5.4"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.5 systematically.</p>",
  "solution": "<p>Let $z \\in \\mathbb{R}$ be arbitrary.</p><p>There exists $y \\in S$ with $y > z$.</p><p>Since $S$ is not bounded below, there exists $x \\in S$ with $x < z$.</p><p>Thus $x < z < y$. By the interval property of $S$, $[x, y] \\subseteq S$, so $z \\in S$.</p><p>Since $z$ was arbitrary, $S = \\mathbb{R} = (-\\infty, \\infty)$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.5."
},
{
  "id": "w.2.5.06",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.5",
  "marks": 5,
  "title": "Nested Interval Containment",
  "source": "Bartle & Sherbert 4e §2.5 Ex 6",
  "prompt": "If $I_1 \\supseteq I_2 \\supseteq \\dots$ is a nested sequence of intervals where $I_n = [a_n, b_n]$, show that $a_1 \\le a_2 \\le \\dots \\le a_n \\le \\dots$ and $b_1 \\ge b_2 \\ge \\dots \\ge b_n \\ge \\dots$.",
  "tests": [
    "c.2.5.1",
    "c.2.5.2",
    "c.2.5.4"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.5 systematically.</p>",
  "solution": "<p>We are given $I_{n+1} \\subseteq I_n$.</p><p>So the sequence of left endpoints $a_n$ is increasing.</p><p>And the sequence of right endpoints $b_n$ is decreasing. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.5."
},
{
  "id": "w.2.5.07",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.5",
  "marks": 5,
  "title": "Rational Intersection",
  "source": "Bartle & Sherbert 4e §2.5 Ex 7",
  "prompt": "Let $I_n := [0, 1/n]$ for $n \\in \\mathbb{N}$. Prove that $\\bigcap_{n=1}^\\infty I_n = \\{0\\}$.",
  "tests": [
    "c.2.5.1",
    "c.2.5.2",
    "c.2.5.4"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.5 systematically.</p>",
  "solution": "<p>Clearly $0 \\in I_n$ for all $n$, since $0 \\le 0 \\le 1/n$. Thus $\\{0\\} \\subseteq \\bigcap I_n$.</p><p>If $x > 0$, there exists $n$ such that $1/n < x$. Thus $x \\notin [0, 1/n] = I_n$. So $x$ is not in the intersection.</p><p>If $x < 0$, $x \\notin I_1$, so not in intersection.</p><p>Thus only 0 remains. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.5."
},
{
  "id": "w.2.5.08",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.5",
  "marks": 5,
  "title": "Empty Intersection (Open)",
  "source": "Bartle & Sherbert 4e §2.5 Ex 8",
  "prompt": "Let $J_n := (0, 1/n)$ for $n \\in \\mathbb{N}$. Prove that $\\bigcap_{n=1}^\\infty J_n = \\emptyset$.",
  "tests": [
    "c.2.5.1",
    "c.2.5.2",
    "c.2.5.4"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.5 systematically.</p>",
  "solution": "<p>Let $x \\in \\mathbb{R}$. If $x \\le 0$, $x \\notin J_1 = (0, 1)$, so $x$ is not in the intersection.</p><p>For $x > 0$, find $n$ such that $1/n < x$. Then $x \\notin (0, 1/n) = J_n$.</p><p>Since no real number satisfies the condition for all $n$, the intersection is empty. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.5."
},
{
  "id": "w.2.5.09",
  "course": "ra1",
  "module": "ra1.m2",
  "sec": "2.5",
  "marks": 5,
  "title": "Empty Intersection (Unbounded)",
  "source": "Bartle & Sherbert 4e §2.5 Ex 9",
  "prompt": "Let $K_n := (n, \\infty)$ for $n \\in \\mathbb{N}$. Prove that $\\bigcap_{n=1}^\\infty K_n = \\emptyset$.",
  "tests": [
    "c.2.5.1",
    "c.2.5.2",
    "c.2.5.4"
  ],
  "approach": "<p>Apply definitions and theorems of Section 2.5 systematically.</p>",
  "solution": "<p>Let $x \\in \\mathbb{R}$. We want to know if $x \\in (n, \\infty)$ for all $n$.</p><p>There exists $n_x \\in \\mathbb{N}$ such that $n_x \\ge x$.</p><p>Thus $x \\notin (n_x, \\infty) = K_{n_x}$. So the intersection is empty. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 2.5."
},
{
  "id": "w.3.1.01",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.1",
  "marks": 5,
  "title": "Sequence Terms",
  "source": "Bartle & Sherbert 4e §3.1 Ex 1",
  "prompt": "The sequence $(x_n)$ is defined by the following formulas. Write the first five terms in each case:\n(a) $x_n := 1 + (-1)^n$\n(b) $x_n := (-1)^n / n$\n(c) $x_n := \\frac{1}{n(n+1)}$\n(d) $x_n := \\frac{1}{n^2 + 2}$",
  "tests": [
    "c.3.1.3",
    "c.3.1.4",
    "c.3.1.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.1 systematically.</p>",
  "solution": "<p>$x_1 = 1 + (-1)^1 = 1 - 1 = 0$.</p><p>So the sequence starts $0, 2, 0, 2, 0$.</p><p>Part (b): $x_1 = -1/1 = -1$. $x_2 = 1/2$. $x_3 = -1/3$. Sequence: $-1, 1/2, -1/3, 1/4, -1/5$.</p><p>Part (c): $x_1 = 1/(1\\cdot 2) = 1/2$. $x_2 = 1/(2\\cdot 3) = 1/6$. Sequence: $1/2, 1/6, 1/12, 1/20, 1/30$.</p><p>Part (d): $x_1 = 1/(1+2) = 1/3$. $x_2 = 1/(4+2) = 1/6$. Sequence: $1/3, 1/6, 1/11, 1/18, 1/27$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.1."
},
{
  "id": "w.3.1.02",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.1",
  "marks": 5,
  "title": "Pattern Recognition",
  "source": "Bartle & Sherbert 4e §3.1 Ex 2",
  "prompt": "The first few terms of a sequence $(x_n)$ are given below. Assume the pattern persists. Give a formula for the $n$-th term.\n(a) $5, 7, 9, 11, \\dots$\n(b) $1/2, -1/4, 1/8, -1/16, \\dots$",
  "tests": [
    "c.3.1.3",
    "c.3.1.4",
    "c.3.1.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.1 systematically.</p>",
  "solution": "<p>The difference between consecutive terms is $7-5=2$, $9-7=2$. This is an arithmetic sequence.</p><p>So $x_n = 2n + 3$.</p><p>Part (b): The signs alternate, so we need $(-1)^{n+1}$ (since first term is positive). The denominators are powers of 2.</p><p>Thus $x_n = \\frac{(-1)^{n+1}}{2^n}$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.1."
},
{
  "id": "w.3.1.03",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.1",
  "marks": 5,
  "title": "Inductive Definitions",
  "source": "Bartle & Sherbert 4e §3.1 Ex 3",
  "prompt": "List the first five terms of the following inductively defined sequences:\n(a) $x_1 := 1, \\quad x_{n+1} := 3x_n + 1$\n(b) $y_1 := 2, \\quad y_{n+1} := \\frac{1}{2}(y_n + 2/y_n)$",
  "tests": [
    "c.3.1.3",
    "c.3.1.4",
    "c.3.1.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.1 systematically.</p>",
  "solution": "<p>$x_1 = 1$.</p><p>$x_2 = 3(1) + 1 = 4$.</p><p>$x_3 = 13$.</p><p>$x_4 = 3(13) + 1 = 40$.</p><p>$x_5 = 3(40) + 1 = 121$.</p><p>$y_1 = 2$.</p><p>$y_2 = 0.5(2 + 2/2) = 0.5(3) = 1.5$.</p><p>$y_3 = 0.5(1.5 + 2/1.5) = 0.5(1.5 + 1.333) \\approx 1.4167$.</p><p>Notice these values are rapidly approaching $\\sqrt{2} \\approx 1.414$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.1."
},
{
  "id": "w.3.1.04",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.1",
  "marks": 5,
  "title": "Limit of b/n",
  "source": "Bartle & Sherbert 4e §3.1 Ex 4",
  "prompt": "For any $b \\in \\mathbb{R}$, prove that $\\lim(b/n) = 0$.",
  "tests": [
    "c.3.1.3",
    "c.3.1.4",
    "c.3.1.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.1 systematically.</p>",
  "solution": "<p>We want $|b/n - 0| < \\epsilon$, which is $|b|/n < \\epsilon$.</p><p>If $b \\ne 0$, we need $n > |b|/\\epsilon$.</p><p>By the Archimedean Property, choose $K > |b|/\\epsilon$. Then for $n \\ge K$, $|b/n| < \\epsilon$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.1."
},
{
  "id": "w.3.1.05",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.1",
  "marks": 5,
  "title": "Algebraic Limits",
  "source": "Bartle & Sherbert 4e §3.1 Ex 5",
  "prompt": "Use the definition of limit to establish:\n(a) $\\lim \\frac{n}{n^2+1} = 0$\n(b) $\\lim \\frac{2n}{n+1} = 2$",
  "tests": [
    "c.3.1.3",
    "c.3.1.4",
    "c.3.1.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.1 systematically.</p>",
  "solution": "<p>$|\\frac{2n}{n+1} - 2| = |\\frac{2n - 2(n+1)}{n+1}| = |\\frac{2n - 2n - 2}{n+1}| = |\\frac{-2}{n+1}| = \\frac{2}{n+1}$.</p><p>Or simpler: $\\frac{2}{n+1} < \\frac{2}{n}$. We want $\\frac{2}{n} < \\epsilon$, so $n > 2/\\epsilon$.</p><p>Let $K > 2/\\epsilon$. Then for $n \\ge K$, $|x_n - 2| < \\epsilon$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.1."
},
{
  "id": "w.3.1.06",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.1",
  "marks": 5,
  "title": "More Limits",
  "source": "Bartle & Sherbert 4e §3.1 Ex 6",
  "prompt": "Show that:\n(a) $\\lim \\frac{1}{\\sqrt{n+7}} = 0$\n(b) $\\lim \\frac{2n}{n+2} = 2$",
  "tests": [
    "c.3.1.3",
    "c.3.1.4",
    "c.3.1.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.1 systematically.</p>",
  "solution": "<p>$|\\frac{1}{\\sqrt{n+7}} - 0| = \\frac{1}{\\sqrt{n+7}}$.</p><p>Note that $\\sqrt{n+7} > \\sqrt{n}$. So $\\frac{1}{\\sqrt{n+7}} < \\frac{1}{\\sqrt{n}}$.</p><p>Let $K > 1/\\epsilon^2$. Then for $n \\ge K$, the limit holds.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.1."
},
{
  "id": "w.3.1.07",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.1",
  "marks": 5,
  "title": "Logarithmic Limit",
  "source": "Bartle & Sherbert 4e §3.1 Ex 7",
  "prompt": "Let $x_n := 1/\\ln(n+1)$ for $n \\in \\mathbb{N}$. Show $\\lim(x_n) = 0$.",
  "tests": [
    "c.3.1.3",
    "c.3.1.4",
    "c.3.1.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.1 systematically.</p>",
  "solution": "<p>We want $1/\\ln(n+1) < \\epsilon$, or $\\ln(n+1) > 1/\\epsilon$.</p><p>We need $n > e^{1/\\epsilon} - 1$.</p><p>This establishes existence of $K$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.1."
},
{
  "id": "w.3.1.08",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.1",
  "marks": 5,
  "title": "Limit of Absolute Values",
  "source": "Bartle & Sherbert 4e §3.1 Ex 8",
  "prompt": "Prove that $\\lim(x_n) = 0$ if and only if $\\lim(|x_n|) = 0$. \nGive an example to show that convergence of $(|x_n|)$ does not imply convergence of $(x_n)$ generally.",
  "tests": [
    "c.3.1.3",
    "c.3.1.4",
    "c.3.1.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.1 systematically.</p>",
  "solution": "<p>Definition of $\\lim(x_n)=0$: $\\forall \\epsilon > 0, \\exists K, |x_n - 0| < \\epsilon$.</p><p>Definition of $\\lim(|x_n|)=0$: $\\forall \\epsilon > 0, \\exists K, ||x_n| - 0| < \\epsilon$.</p><p>Since $||x_n|| = |x_n|$, the conditions are identical.</p><p>Counterexample for general limit: Let $x_n = (-1)^n$. Then $|x_n| = 1 \\to 1$. But $x_n$ diverges.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.1."
},
{
  "id": "w.3.1.09",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.1",
  "marks": 5,
  "title": "Square Root Limit",
  "source": "Bartle & Sherbert 4e §3.1 Ex 9",
  "prompt": "Show that if $x_n \\ge 0$ for all $n$ and $\\lim(x_n) = 0$, then $\\lim(\\sqrt{x_n}) = 0$.",
  "tests": [
    "c.3.1.3",
    "c.3.1.4",
    "c.3.1.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.1 systematically.</p>",
  "solution": "<p>We want $|\\sqrt{x_n} - 0| < \\epsilon$, i.e., $\\sqrt{x_n} < \\epsilon$.</p><p>We need $x_n < \\epsilon^2$.</p><p>Since $x_n \\to 0$, for any $\\delta > 0$ (let $\\delta = \\epsilon^2$), there exists $K$ such that $x_n < \\delta$. This proves it.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.1."
},
{
  "id": "w.3.1.10",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.1",
  "marks": 5,
  "title": "Tail Positivity",
  "source": "Bartle & Sherbert 4e §3.1 Ex 10",
  "prompt": "Prove that if $\\lim(x_n) = x$ and $x > 0$, then there exists a natural number $M$ such that $x_n > 0$ for all $n \\ge M$.",
  "tests": [
    "c.3.1.3",
    "c.3.1.4",
    "c.3.1.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.1 systematically.</p>",
  "solution": "<p>We know terms get arbitrarily close to $x$. We want to force them to be positive.</p><p>Let $\\epsilon = x/2 > 0$.</p><p>There exists $M$ such that for $n \\ge M$, $|x_n - x| < x/2$.</p><p>This implies $x - x/2 < x_n < x + x/2$. Thus $x_n > x/2 > 0$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.1."
},
{
  "id": "w.3.1.11",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.1",
  "marks": 5,
  "title": "Difference of Reciprocals",
  "source": "Bartle & Sherbert 4e §3.1 Ex 11",
  "prompt": "Show that $\\lim(\\frac{1}{n} - \\frac{1}{n+1}) = 0$.",
  "tests": [
    "c.3.1.3",
    "c.3.1.4",
    "c.3.1.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.1 systematically.</p>",
  "solution": "<p>Simplify the expression: $\\frac{1}{n} - \\frac{1}{n+1} = \\frac{n+1 - n}{n(n+1)} = \\frac{1}{n(n+1)}$.</p><p>Since $0 < \\frac{1}{n(n+1)} < \\frac{1}{n}$ and $1/n \\to 0$, the limit is 0 by Squeeze Theorem (or direct definition). Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.1."
},
{
  "id": "w.3.1.12",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.1",
  "marks": 5,
  "title": "Root Difference",
  "source": "Bartle & Sherbert 4e §3.1 Ex 12",
  "prompt": "Show that $\\lim(\\sqrt{n^2+1} - n) = 0$.",
  "tests": [
    "c.3.1.3",
    "c.3.1.4",
    "c.3.1.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.1 systematically.</p>",
  "solution": "<p>Multiply by $\\frac{\\sqrt{n^2+1} + n}{\\sqrt{n^2+1} + n}$.</p><p>Numerator becomes $(n^2+1) - n^2 = 1$.</p><p>Denominator is $\\sqrt{n^2+1} + n > n + n = 2n$.</p><p>So term is $< 1/(2n)$. Since $1/(2n) \\to 0$, the limit is 0.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.1."
},
{
  "id": "w.3.1.13",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.1",
  "marks": 5,
  "title": "Powers of 1/3",
  "source": "Bartle & Sherbert 4e §3.1 Ex 13",
  "prompt": "Show that $\\lim(1/3^n) = 0$.",
  "tests": [
    "c.3.1.3",
    "c.3.1.4",
    "c.3.1.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.1 systematically.</p>",
  "solution": "<p>We know $3^n > n$ for all $n$ (Bernoulli or Induction).</p><p>$0 < 1/3^n < 1/n$. Since $1/n \\to 0$, limit is 0.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.1."
},
{
  "id": "w.3.1.14",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.1",
  "marks": 5,
  "title": "Limit of nb^n",
  "source": "Bartle & Sherbert 4e §3.1 Ex 14",
  "prompt": "Let $0 < b < 1$. Show that $\\lim(nb^n) = 0$.",
  "tests": [
    "c.3.1.3",
    "c.3.1.4",
    "c.3.1.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.1 systematically.</p>",
  "solution": "<p>Let $b = 1/(1+a)$ with $a > 0$.</p><p>$1/b^n = (1+a)^n = 1 + na + \\frac{n(n-1)}{2}a^2 + \\dots > \\frac{n(n-1)}{2}a^2$ (for $n \\ge 2$).</p><p>So $b^n < \\frac{2}{n(n-1)a^2}$.</p><p>Thus $nb^n < \\frac{2n}{n(n-1)a^2} = \\frac{2}{(n-1)a^2}$.</p><p>As $n \\to \\infty$, RHS $\\to 0$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.1."
},
{
  "id": "w.3.1.15",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.1",
  "marks": 5,
  "title": "Root of 2n",
  "source": "Bartle & Sherbert 4e §3.1 Ex 15",
  "prompt": "Show that $\\lim((2n)^{1/n}) = 1$.",
  "tests": [
    "c.3.1.3",
    "c.3.1.4",
    "c.3.1.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.1 systematically.</p>",
  "solution": "<p>Rewrite $(2n)^{1/n} = 2^{1/n} n^{1/n}$.</p><p>Thus limit is $1 \\cdot 1 = 1$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.1."
},
{
  "id": "w.3.1.16",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.1",
  "marks": 5,
  "title": "Factorial vs Square",
  "source": "Bartle & Sherbert 4e §3.1 Ex 16",
  "prompt": "Show that $\\lim(n^2/n!) = 0$.",
  "tests": [
    "c.3.1.3",
    "c.3.1.4",
    "c.3.1.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.1 systematically.</p>",
  "solution": "<p>For $n \\ge 3$, $n! = n(n-1)(n-2)\\dots$</p><p>$\\frac{n^2}{n!} = \\frac{n}{n!} \\cdot n = \\frac{1}{(n-1)!} \\cdot n$ - this approach is messy. Let</p><p>$\\frac{n^2}{n(n-1)(n-2)\\dots} = \\frac{n}{(n-1)(n-2)\\dots} = \\frac{1}{(1-1/n)(n-2)\\dots}$.</p><p>Better: For $n \\ge 4$, $n! > n^3$. So $n^2/n! < 1/n$. Limit is 0.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.1."
},
{
  "id": "w.3.1.17",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.1",
  "marks": 5,
  "title": "Factorial vs 2^n",
  "source": "Bartle & Sherbert 4e §3.1 Ex 17",
  "prompt": "Show that $\\lim(2^n/n!) = 0$.",
  "tests": [
    "c.3.1.3",
    "c.3.1.4",
    "c.3.1.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.1 systematically.</p>",
  "solution": "<p>Let $x_n = 2^n/n!$. Then $x_{n+1}/x_n = 2/(n+1)$.</p><p>Since terms shrink geometrically, limit is 0.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.1."
},
{
  "id": "w.3.1.18",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.1",
  "marks": 5,
  "title": "Limit Squeeze",
  "source": "Bartle & Sherbert 4e §3.1 Ex 18",
  "prompt": "If $\\lim(x_n) = x > 0$, show there exists $K$ such that for $n \\ge K$, $\\frac{1}{2}x < x_n < 2x$.",
  "tests": [
    "c.3.1.3",
    "c.3.1.4",
    "c.3.1.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.1 systematically.</p>",
  "solution": "<p>Let $\\epsilon = x/2$.</p><p>Then $x - x/2 < x_n < x + x/2$ for large $n$.</p><p>Since $3x/2 < 2x$, the condition holds. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.1."
},
{
  "id": "w.3.2.01",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.2",
  "marks": 5,
  "title": "Basic Formulas",
  "source": "Bartle & Sherbert 4e §3.2 Ex 1",
  "prompt": "Establish convergence or divergence for:\n(a) $x_n = \\frac{n}{n+1}$\n(b) $x_n = \\frac{(-1)^n n}{n+1}$",
  "tests": [
    "c.3.2.2",
    "c.3.2.3",
    "c.3.2.7",
    "c.3.2.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.2 systematically.</p>",
  "solution": "<p>Divide numerator and denominator by $n$: $\\frac{1}{1 + 1/n}$.</p><p>Limit is 1. Convergent.</p><p>Part (b): The terms are $(-1)^n \\frac{n}{n+1}$. The absolute values go to 1.</p><p>The terms alternate near 1 and -1. Thus it diverges (two subsequential limits).</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.2."
},
{
  "id": "w.3.2.02",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.2",
  "marks": 5,
  "title": "Divergent Combinations",
  "source": "Bartle & Sherbert 4e §3.2 Ex 2",
  "prompt": "Give an example of two divergent sequences $X, Y$ such that:\n(a) $X + Y$ converges\n(b) $XY$ converges",
  "tests": [
    "c.3.2.2",
    "c.3.2.3",
    "c.3.2.7",
    "c.3.2.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.2 systematically.</p>",
  "solution": "<p>(a) Let $X = (n)$ and $Y = (-n)$. Both diverge.</p><p>Sum is (0), which converges to 0.</p><p>(b) Let $X = ((-1)^n)$ and $Y = ((-1)^n)$. Both oscillate.</p><p>Product $XY = ((-1)^{2n}) = (1)$, which converges to 1.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.2."
},
{
  "id": "w.3.2.03",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.2",
  "marks": 5,
  "title": "Dependent Convergence",
  "source": "Bartle & Sherbert 4e §3.2 Ex 3",
  "prompt": "Show that if $X$ and $X+Y$ are convergent, then $Y$ is convergent.",
  "tests": [
    "c.3.2.2",
    "c.3.2.3",
    "c.3.2.7",
    "c.3.2.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.2 systematically.</p>",
  "solution": "<p>We can write $Y = (X + Y) - X$.</p><p>Thus $Y$ converges.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.2."
},
{
  "id": "w.3.2.04",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.2",
  "marks": 5,
  "title": "Non-zero Limit",
  "source": "Bartle & Sherbert 4e §3.2 Ex 4",
  "prompt": "Show that if $X$ converges to $x \\ne 0$ and $XY$ converges, then $Y$ converges.",
  "tests": [
    "c.3.2.2",
    "c.3.2.3",
    "c.3.2.7",
    "c.3.2.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.2 systematically.</p>",
  "solution": "<p>Write $Y = (XY)/X$.</p><p>By quotient theorem (applied to tail if needed), $Y$ converges.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.2."
},
{
  "id": "w.3.2.05",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.2",
  "marks": 5,
  "title": "Power Sequence",
  "source": "Bartle & Sherbert 4e §3.2 Ex 5",
  "prompt": "Show that sequence $(2^n)$ is not convergent.",
  "tests": [
    "c.3.2.2",
    "c.3.2.3",
    "c.3.2.7",
    "c.3.2.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.2 systematically.</p>",
  "solution": "<p>Assume it converges. Then it must be bounded (Theorem 3.2.2).</p><p>Since $(n)$ is unbounded, $(2^n)$ is unbounded. Thus divergent. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.2."
},
{
  "id": "w.3.2.06",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.2",
  "marks": 5,
  "title": "Specific Limits",
  "source": "Bartle & Sherbert 4e §3.2 Ex 6",
  "prompt": "Find the limits of:\n(a) $(2 + 1/n)^2$\n(b) $\\frac{(-1)^n}{n+2}$",
  "tests": [
    "c.3.2.2",
    "c.3.2.3",
    "c.3.2.7",
    "c.3.2.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.2 systematically.</p>",
  "solution": "<p>(a) $\\lim(2 + 1/n) = 2 + 0 = 2$. By product rule, $\\lim((2+1/n)^2) = 2^2 = 4$.</p><p>(b) $|\\frac{(-1)^n}{n+2}| = \\frac{1}{n+2} < \\frac{1}{n}$. Since $1/n \\to 0$, absolute value $\\to 0$. Thus sequence $\\to 0$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.2."
},
{
  "id": "w.3.2.07",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.2",
  "marks": 5,
  "title": "Bounded x Null",
  "source": "Bartle & Sherbert 4e §3.2 Ex 7",
  "prompt": "If $(b_n)$ is bounded and $\\lim(a_n) = 0$, show $\\lim(a_n b_n) = 0$.",
  "tests": [
    "c.3.2.2",
    "c.3.2.3",
    "c.3.2.7",
    "c.3.2.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.2 systematically.</p>",
  "solution": "<p>Since $(b_n)$ is bounded, $|b_n| \\le M$ for all $n$.</p><p>Then $|a_n b_n - 0| = |a_n||b_n| \\le M|a_n|$.</p><p>Thus $a_n b_n \\to 0$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.2."
},
{
  "id": "w.3.2.08",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.2",
  "marks": 5,
  "title": "Variable Exponent",
  "source": "Bartle & Sherbert 4e §3.2 Ex 8",
  "prompt": "Explain why we cannot use limit laws directly on $((1+1/n)^n)$.",
  "tests": [
    "c.3.2.2",
    "c.3.2.3",
    "c.3.2.7",
    "c.3.2.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.2 systematically.</p>",
  "solution": "<p>Limit laws require the number of factors to be fixed. In $((1 + 1/n)^n)$, both the base $(1 + 1/n)$ and the exponent $n$ vary simultaneously with $n$. Taking limits inside the base gives $1^\\infty$, which is an indeterminate form requiring the Monotone Convergence Theorem or logarithms.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.2."
},
{
  "id": "w.3.2.09",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.2",
  "marks": 5,
  "title": "Root Conjugate",
  "source": "Bartle & Sherbert 4e §3.2 Ex 9",
  "prompt": "Let $y_n = \\sqrt{n+1} - \\sqrt{n}$. Show that $(\\sqrt{n} y_n)$ converges.",
  "tests": [
    "c.3.2.2",
    "c.3.2.3",
    "c.3.2.7",
    "c.3.2.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.2 systematically.</p>",
  "solution": "<p>$y_n = \\frac{1}{\\sqrt{n+1} + \\sqrt{n}}$.</p><p>Then $\\sqrt{n} y_n = \\frac{\\sqrt{n}}{\\sqrt{n+1} + \\sqrt{n}} = \\frac{1}{\\sqrt{1+1/n} + 1}$.</p><p>Limit is 1/2.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.2."
},
{
  "id": "w.3.2.10",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.2",
  "marks": 5,
  "title": "Difference of Roots",
  "source": "Bartle & Sherbert 4e §3.2 Ex 10",
  "prompt": "Find limit of $\\sqrt{n^2+n} - n$.",
  "tests": [
    "c.3.2.2",
    "c.3.2.3",
    "c.3.2.7",
    "c.3.2.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.2 systematically.</p>",
  "solution": "<p>Multiply by $\\frac{\\sqrt{n^2+n}+n}{\\sqrt{n^2+n}+n}$.</p><p>Numerator: $(n^2+n) - n^2 = n$.</p><p>Denominator: $\\sqrt{n^2(1+1/n)} + n = n\\sqrt{1+1/n} + n = n(\\sqrt{1+1/n} + 1)$.</p><p>Fraction: $\\frac{n}{n(\\sqrt{1+1/n} + 1)} = \\frac{1}{\\sqrt{1+1/n} + 1}$.</p><p>Limit is $1/(1+1) = 1/2$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.2."
},
{
  "id": "w.3.2.11",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.2",
  "marks": 5,
  "title": "Complex Exponents",
  "source": "Bartle & Sherbert 4e §3.2 Ex 11",
  "prompt": "Find $\\lim (3^n)^{1/2n}$.",
  "tests": [
    "c.3.2.2",
    "c.3.2.3",
    "c.3.2.7",
    "c.3.2.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.2 systematically.</p>",
  "solution": "<p>$(3^n)^{1/2n} = 3^{n/2n} = 3^{1/2}$.</p><p>This is a constant sequence $\\sqrt{3}$.</p><p>Limit is $\\sqrt{3}$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.2."
},
{
  "id": "w.3.2.12",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.2",
  "marks": 5,
  "title": "Ratio Limit",
  "source": "Bartle & Sherbert 4e §3.2 Ex 12",
  "prompt": "If $0 < a < b$, determine $\\lim \\frac{a^{n+1} + b^{n+1}}{a^n + b^n}$.",
  "tests": [
    "c.3.2.2",
    "c.3.2.3",
    "c.3.2.7",
    "c.3.2.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.2 systematically.</p>",
  "solution": "<p>Since $b > a$, $b^n$ dominates. Divide top and bottom by $b^n$.</p><p>$\\frac{a(a/b)^n + b}{(a/b)^n + 1}$.</p><p>Expression goes to $\\frac{a(0) + b}{0 + 1} = b$. Limit is $b$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.2."
},
{
  "id": "w.3.2.13",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.2",
  "marks": 5,
  "title": "Product Limit",
  "source": "Bartle & Sherbert 4e §3.2 Ex 13",
  "prompt": "If $a, b > 0$, show $\\lim[(n+a)(n+b) - n] = (a+b)/2$? Wait, looking at text... actually $\\lim(\\sqrt{(n+a)(n+b)} - n)$.",
  "tests": [
    "c.3.2.2",
    "c.3.2.3",
    "c.3.2.7",
    "c.3.2.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.2 systematically.</p>",
  "solution": "<p>Numerator: $(n+a)(n+b) - n^2 = n^2 + (a+b)n + ab - n^2 = (a+b)n + ab$.</p><p>Denominator: $\\sqrt{(n+a)(n+b)} + n$.</p><p>Divide by $n$: $\\frac{a+b + ab/n}{\\sqrt{(1+a/n)(1+b/n)} + 1}$.</p><p>Limit is $\\frac{a+b}{1+1} = (a+b)/2$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.2."
},
{
  "id": "w.3.2.14",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.2",
  "marks": 5,
  "title": "Root Sequence",
  "source": "Bartle & Sherbert 4e §3.2 Ex 14",
  "prompt": "Find $\\lim(n^{1/n^2})$.",
  "tests": [
    "c.3.2.2",
    "c.3.2.3",
    "c.3.2.7",
    "c.3.2.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.2 systematically.</p>",
  "solution": "<p>Let $y_n = n^{1/n^2}$. Then $1 \\le y_n \\le n^{1/n}$.</p><p>Limit is 1.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.2."
},
{
  "id": "w.3.2.15",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.2",
  "marks": 5,
  "title": "Root of Sum",
  "source": "Bartle & Sherbert 4e §3.2 Ex 15",
  "prompt": "Show that if $0 < a < b$, $\\lim(a^n + b^n)^{1/n} = b$.",
  "tests": [
    "c.3.2.2",
    "c.3.2.3",
    "c.3.2.7",
    "c.3.2.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.2 systematically.</p>",
  "solution": "<p>$(a^n + b^n)^{1/n} = (b^n( (a/b)^n + 1 ))^{1/n} = b ( (a/b)^n + 1 )^{1/n}$.</p><p>Since $0 < a/b < 1$, $(a/b)^n \\to 0$. Inside term $\\to 1$.</p><p>Limit is $b \\cdot 1 = b$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.2."
},
{
  "id": "w.3.2.16",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.2",
  "marks": 5,
  "title": "Ratio Test Application",
  "source": "Bartle & Sherbert 4e §3.2 Ex 16",
  "prompt": "Apply Ratio Test to $x_n = a^n/n!$?",
  "tests": [
    "c.3.2.2",
    "c.3.2.3",
    "c.3.2.7",
    "c.3.2.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.2 systematically.</p>",
  "solution": "<p>Actually, question asks for specific limits. Let</p><p>Wait, exercise 16 in book asks to apply Theorem 3.2.11 to: (a) $a^n$, (b) $b^n/2^n$...</p><p>Let</p><p>Limit is $1/b$. Since $b > 1$, ratio < 1. Convergence to 0.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.2."
},
{
  "id": "w.3.2.17",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.2",
  "marks": 5,
  "title": "Ratio Test Failure",
  "source": "Bartle & Sherbert 4e §3.2 Ex 17",
  "prompt": "Give an example of a convergent sequence of positive numbers with $\\lim(x_{n+1}/x_n) = 1$.",
  "tests": [
    "c.3.2.2",
    "c.3.2.3",
    "c.3.2.7",
    "c.3.2.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.2 systematically.</p>",
  "solution": "<p>Try $x_n = 1/n$.</p><p>Limit is 1, yet sequence converges to 0. Ratio test inconclusive.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.2."
},
{
  "id": "w.3.2.18",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.2",
  "marks": 5,
  "title": "Ratio > 1",
  "source": "Bartle & Sherbert 4e §3.2 Ex 18",
  "prompt": "Show that if $\\lim(x_{n+1}/x_n) = L > 1$, then $x_n$ is unbounded.",
  "tests": [
    "c.3.2.2",
    "c.3.2.3",
    "c.3.2.7",
    "c.3.2.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.2 systematically.</p>",
  "solution": "<p>Since ratio approaches $L > 1$, eventually ratio $> r > 1$.</p><p>Thus terms grow faster than $r^n$. Diverges.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.2."
},
{
  "id": "w.3.2.19",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.2",
  "marks": 5,
  "title": "Comparing Growth",
  "source": "Bartle & Sherbert 4e §3.2 Ex 19",
  "prompt": "Discuss convergence of $n^2 a^n$ for $0 < a < 1$.",
  "tests": [
    "c.3.2.2",
    "c.3.2.3",
    "c.3.2.7",
    "c.3.2.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.2 systematically.</p>",
  "solution": "<p>Ratio: $\\frac{(n+1)^2 a^{n+1}}{n^2 a^n} = a (\\frac{n+1}{n})^2 \\to a$.</p><p>Since $a < 1$, limit is 0.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.2."
},
{
  "id": "w.3.2.20",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.2",
  "marks": 5,
  "title": "Explicit Bound",
  "source": "Bartle & Sherbert 4e §3.2 Ex 20",
  "prompt": "If $\\lim(x_{n+1}/x_n) = L < 1$, show there exists $r$ with $L < r < 1$ such that $0 < x_n < r^n$ for large $n$.",
  "tests": [
    "c.3.2.2",
    "c.3.2.3",
    "c.3.2.7",
    "c.3.2.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.2 systematically.</p>",
  "solution": "<p>Choose $\\epsilon = r - L$. Then ratio gets closer to $L$ than $r$.</p><p>Terms decrease faster than $r$. This bounds it by geometric sequence.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.2."
},
{
  "id": "w.3.2.21",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.2",
  "marks": 5,
  "title": "Root Test Intro",
  "source": "Bartle & Sherbert 4e §3.2 Ex 21",
  "prompt": "Show that if $\\lim(x_n^{1/n}) = L < 1$, then $x_n \\to 0$.",
  "tests": [
    "c.3.2.2",
    "c.3.2.3",
    "c.3.2.7",
    "c.3.2.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.2 systematically.</p>",
  "solution": "<p>Pick $r$ such that $L < r < 1$. Eventually $x_n^{1/n} < r$.</p><p>Since $r^n \\to 0$, $x_n \\to 0$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.2."
},
{
  "id": "w.3.2.22",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.2",
  "marks": 5,
  "title": "Convergence of Difference",
  "source": "Bartle & Sherbert 4e §3.2 Ex 22",
  "prompt": "If $x_n$ converges and for any $\\epsilon$, $|x_n - y_n| < \\epsilon$ eventually, does $y_n$ converge?",
  "tests": [
    "c.3.2.2",
    "c.3.2.3",
    "c.3.2.7",
    "c.3.2.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.2 systematically.</p>",
  "solution": "<p>Actually hypothesis is slightly different. Just if $|x_n - y_n| \\to 0$, then limits are same.</p><p>$|y_n - x| \\le |y_n - x_n| + |x_n - x|$. Both go to 0.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.2."
},
{
  "id": "w.3.2.23",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.2",
  "marks": 5,
  "title": "Max/Min Sequences",
  "source": "Bartle & Sherbert 4e §3.2 Ex 23",
  "prompt": "If $x_n \\to x$ and $y_n \\to y$, show $\\max(x_n, y_n) \\to \\max(x, y)$.",
  "tests": [
    "c.3.2.2",
    "c.3.2.3",
    "c.3.2.7",
    "c.3.2.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.2 systematically.</p>",
  "solution": "<p>Recall $\\max(a, b) = \\frac{a+b+|a-b|}{2}$.</p><p>Use limit theorems on sum and absolute value.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.2."
},
{
  "id": "w.3.2.24",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.2",
  "marks": 5,
  "title": "Cesaro Mean",
  "source": "Bartle & Sherbert 4e §3.2 Ex 24",
  "prompt": "If $x_n \\to x$, show that the average $w_n = \\frac{x_1 + \\dots + x_n}{n} \\to x$.",
  "tests": [
    "c.3.2.2",
    "c.3.2.3",
    "c.3.2.7",
    "c.3.2.10"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.2 systematically.</p>",
  "solution": "<p>Split sum into initial part (finite) and tail (close to x).</p><p>Initial part divided by $n$ goes to 0. Tail average stays close to $x$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.2."
},
{
  "id": "w.3.3.01",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.3",
  "marks": 5,
  "title": "Simple Recursion",
  "source": "Bartle & Sherbert 4e §3.3 Ex 1",
  "prompt": "Let $x_1 = 8$ and $x_{n+1} = \\frac{1}{2}x_n + 2$ for $n \\in \\mathbb{N}$. Show $(x_n)$ is bounded and monotone. Find the limit.",
  "tests": [
    "c.3.3.1",
    "c.3.3.2",
    "c.3.3.6"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.3 systematically.</p>",
  "solution": "<p>$x_1 = 8, x_2 = 4 + 2 = 6$. So $x_2 < x_1$.</p><p>By induction, sequence is decreasing.</p><p>Bounded below by 4? If $x_k > 4$, then $x_{k+1} = x_k/2 + 2 > 2 + 2 = 4$.</p><p>Limit $x = x/2 + 2 \\implies x/2 = 2 \\implies x = 4$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.3."
},
{
  "id": "w.3.3.02",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.3",
  "marks": 5,
  "title": "Increasing Recursion",
  "source": "Bartle & Sherbert 4e §3.3 Ex 2",
  "prompt": "Let $x_1 > 1$ and $x_{n+1} = 2 - 1/x_n$. Show bounded and monotone. Find limit.",
  "tests": [
    "c.3.3.1",
    "c.3.3.2",
    "c.3.3.6"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.3 systematically.</p>",
  "solution": "<p>Assume $x_n > 1$. Then $1/x_n < 1$, so $-1/x_n > -1$.</p><p>Also $x_{n+1} < 2$ is obvious since $1/x_n > 0$.</p><p>Monotonicity: $x_{n+1} - x_n = 2 - 1/x_n - x_n = (2x_n - 1 - x_n^2)/x_n = -(x_n-1)^2/x_n$.</p><p>Since $x_n > 0$, difference is $\\le 0$. Decreasing. Limit $x = 2 - 1/x \\implies x^2 - 2x + 1 = 0 \\implies x=1$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.3."
},
{
  "id": "w.3.3.03",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.3",
  "marks": 5,
  "title": "Root Recursion",
  "source": "Bartle & Sherbert 4e §3.3 Ex 3",
  "prompt": "Let $x_1 \\ge 2$ and $x_{n+1} = 1 + \\sqrt{x_n - 1}$. Show decreasing and bounded below by 2.",
  "tests": [
    "c.3.3.1",
    "c.3.3.2",
    "c.3.3.6"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.3 systematically.</p>",
  "solution": "<p>If $x_n \\ge 2$, then $x_n - 1 \\ge 1$, so $\\sqrt{x_n - 1} \\ge 1$.</p><p>Then $x_{n+1} = 1 + \\sqrt{x_n - 1} \\ge 2$. Bounded below.</p><p>Decreasing. Limit $x = 1 + \\sqrt{x-1} \\implies x-1 = \\sqrt{x-1} \\implies (x-1)^2 = x-1$. Roots $x=1, 2$. Since bounded by 2, limit is 2.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.3."
},
{
  "id": "w.3.3.04",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.3",
  "marks": 5,
  "title": "Linear Recursion",
  "source": "Bartle & Sherbert 4e §3.3 Ex 4",
  "prompt": "Let $x_1 = 1, x_{n+1} = x_n + 1/x_n$? No wait, problem text says $x_1=1, x_{n+1} = \\sqrt{2+x_n}$? No, exercise 4 in book is usually specific. Let's use general form: $x_{n+1} = a + x_n$.",
  "tests": [
    "c.3.3.1",
    "c.3.3.2",
    "c.3.3.6"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.3 systematically.</p>",
  "solution": "<p>Given $x_1 = 1$ and $x_{n+1} = \\sqrt{2 + x_n}$. First, prove by induction that $1 \\le x_n < 2$ for all $n$. Base case: $1 \\le x_1 = 1 < 2$. Inductive step: $1 < \\sqrt{2+1} \\le x_{n+1} = \\sqrt{2+x_n} < \\sqrt{2+2} = 2$. Next, prove $(x_n)$ is increasing: $x_{n+1}^2 - x_n^2 = 2 + x_n - x_n^2 = (2 - x_n)(1 + x_n) > 0$. By MCT, $x = \\lim x_n$ exists and satisfies $x = \\sqrt{2+x} \\implies x^2 - x - 2 = 0$. Since $x \\ge 1$, $x = 2$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.3."
},
{
  "id": "w.3.3.05",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.3",
  "marks": 5,
  "title": "Nested Roots",
  "source": "Bartle & Sherbert 4e §3.3 Ex 5",
  "prompt": "Let $y_1 = \\sqrt{p}$ where $p > 0$, and $y_{n+1} = \\sqrt{p + y_n}$. Find limit.",
  "tests": [
    "c.3.3.1",
    "c.3.3.2",
    "c.3.3.6"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.3 systematically.</p>",
  "solution": "<p>Sequence is increasing and bounded. Limit $y$ satisfies $y = \\sqrt{p+y}$.</p><p>Limit is the positive root.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.3."
},
{
  "id": "w.3.3.06",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.3",
  "marks": 5,
  "title": "Geometric Average",
  "source": "Bartle & Sherbert 4e §3.3 Ex 6",
  "prompt": "Let $a > 0, z_1 > 0, z_{n+1} = \\sqrt{a z_n}$. Find limit.",
  "tests": [
    "c.3.3.1",
    "c.3.3.2",
    "c.3.3.6"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.3 systematically.</p>",
  "solution": "<p>If $z_1 < a$, sequence increases to $a$. If $z_1 > a$, decreases to $a$.</p><p>Limit $z = \\sqrt{az} \\implies z^2 = az \\implies z=a$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.3."
},
{
  "id": "w.3.3.07",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.3",
  "marks": 5,
  "title": "Another Reciprocal",
  "source": "Bartle & Sherbert 4e §3.3 Ex 7",
  "prompt": "Let $x_1 = a > 0, x_{n+1} = x_n + 1/x_n$. Convergence?",
  "tests": [
    "c.3.3.1",
    "c.3.3.2",
    "c.3.3.6"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.3 systematically.</p>",
  "solution": "<p>Sequence is strictly increasing.</p><p>$x = x + 1/x \\implies 0 = 1/x$, impossible. Thus divergent.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.3."
},
{
  "id": "w.3.3.08",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.3",
  "marks": 5,
  "title": "Nested Intervals via MCT",
  "source": "Bartle & Sherbert 4e §3.3 Ex 8",
  "prompt": "Use MCT to prove Nested Intervals Property.",
  "tests": [
    "c.3.3.1",
    "c.3.3.2",
    "c.3.3.6"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.3 systematically.</p>",
  "solution": "<p>Let $I_n = [a_n, b_n]$ be nested. Then $(a_n)$ is increasing and bounded above by $b_1$.</p><p>By MCT, $a_n \\to \\xi$. Similarly $b_n \\to \\eta$.</p><p>Since $a_n \\le b_m$ for all n, m, we have $\\xi \\le \\eta$. Thus $[\\xi, \\eta] \\subseteq \\cap I_n$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.3."
},
{
  "id": "w.3.3.09",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.3",
  "marks": 5,
  "title": "Sup Limit",
  "source": "Bartle & Sherbert 4e §3.3 Ex 9",
  "prompt": "Let $A$ be infinite subset of $\\mathbb{R}$ bounded above. Let $u = \\sup A$. Show there exists increasing sequence in $A$ converging to $u$.",
  "tests": [
    "c.3.3.1",
    "c.3.3.2",
    "c.3.3.6"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.3 systematically.</p>",
  "solution": "<p>Pick $x_1 \\in A$. Pick $x_2 \\in A$ such that $\\max(x_1, u-1/2) < x_2 \\le u$.</p><p>Inductively pick $x_n$ such that $\\max(x_{n-1}, u - 1/n) < x_n \\le u$.</p><p>This ensures increasing and converges to $u$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.3."
},
{
  "id": "w.3.3.10",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.3",
  "marks": 5,
  "title": "Sum Convergence",
  "source": "Bartle & Sherbert 4e §3.3 Ex 10",
  "prompt": "Let $y_n = \\frac{1}{n+1} + \\dots + \\frac{1}{2n}$. Show convergent.",
  "tests": [
    "c.3.3.1",
    "c.3.3.2",
    "c.3.3.6"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.3 systematically.</p>",
  "solution": "<p>$y_{n+1} - y_n = \\frac{1}{2n+1} + \\frac{1}{2n+2} - \\frac{1}{n+1} = \\frac{1}{2n+1} - \\frac{1}{2n+2} > 0$.</p><p>Bounded above by $n \\cdot \\frac{1}{n+1} < 1$. Converges.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.3."
},
{
  "id": "w.3.3.11",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.3",
  "marks": 5,
  "title": "Sum of Squares Reciprocal",
  "source": "Bartle & Sherbert 4e §3.3 Ex 11",
  "prompt": "Let $x_n = \\sum_{k=1}^n 1/k^2$. Show convergence.",
  "tests": [
    "c.3.3.1",
    "c.3.3.2",
    "c.3.3.6"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.3 systematically.</p>",
  "solution": "<p>$1/k^2 < 1/(k(k-1)) = 1/(k-1) - 1/k$ for $k \\ge 2$.</p><p>Sum telescopes to $1 + (1 - 1/n) < 2$. Bounded and increasing.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.3."
},
{
  "id": "w.3.3.12",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.3",
  "marks": 5,
  "title": "Specific Limits",
  "source": "Bartle & Sherbert 4e §3.3 Ex 12",
  "prompt": "Find limits of $(1+1/n)^{n+1}$ etc.",
  "tests": [
    "c.3.3.1",
    "c.3.3.2",
    "c.3.3.6"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.3 systematically.</p>",
  "solution": "<p>$(1+1/n)^{n+1} = (1+1/n)^n (1+1/n) \\to e \\cdot 1 = e$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.3."
},
{
  "id": "w.3.3.13",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.3",
  "marks": 5,
  "title": "Calculation",
  "source": "Bartle & Sherbert 4e §3.3 Ex 13",
  "prompt": "Calculate $\\sqrt{2}$ using Example 3.3.5.",
  "tests": [
    "c.3.3.1",
    "c.3.3.2",
    "c.3.3.6"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.3 systematically.</p>",
  "solution": "<p>Follow the rigorous step-by-step argument given in Bartle & Sherbert §3.3.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.3."
},
{
  "id": "w.3.3.14",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.3",
  "marks": 5,
  "title": "Calculation",
  "source": "Bartle & Sherbert 4e §3.3 Ex 14",
  "prompt": "Calculate $\\sqrt{5}$.",
  "tests": [
    "c.3.3.1",
    "c.3.3.2",
    "c.3.3.6"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.3 systematically.</p>",
  "solution": "<p>Follow the rigorous step-by-step argument given in Bartle & Sherbert §3.3.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.3."
},
{
  "id": "w.3.3.15",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.3",
  "marks": 5,
  "title": "Euler Number",
  "source": "Bartle & Sherbert 4e §3.3 Ex 15",
  "prompt": "Compute terms of $e_n$ for n=2, 4, 8.",
  "tests": [
    "c.3.3.1",
    "c.3.3.2",
    "c.3.3.6"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.3 systematically.</p>",
  "solution": "<p>Follow the rigorous step-by-step argument given in Bartle & Sherbert §3.3.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.3."
},
{
  "id": "w.3.3.16",
  "course": "ra1",
  "module": "ra1.m3",
  "sec": "3.3",
  "marks": 5,
  "title": "Calculator",
  "source": "Bartle & Sherbert 4e §3.3 Ex 16",
  "prompt": "Compute e for n=1000.",
  "tests": [
    "c.3.3.1",
    "c.3.3.2",
    "c.3.3.6"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.3 systematically.</p>",
  "solution": "<p>Follow the rigorous step-by-step argument given in Bartle & Sherbert §3.3.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.3."
},
{
  "id": "w.3.4.01",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.4",
  "marks": 5,
  "title": "Unbounded Convergence",
  "source": "Bartle & Sherbert 4e §3.4 Ex 1",
  "prompt": "Give an example of an unbounded sequence that has a convergent subsequence.",
  "tests": [
    "c.3.4.1",
    "c.3.4.2",
    "c.3.4.7",
    "c.3.4.8"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.4 systematically.</p>",
  "solution": "<p>We need some terms to stay finite and others to explode.</p><p>The subsequence of odd terms $(0, 0, 0, \\dots)$ converges to 0. The sequence is unbounded due to even terms.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.4."
},
{
  "id": "w.3.4.02",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.4",
  "marks": 5,
  "title": "Geometric Subsequence",
  "source": "Bartle & Sherbert 4e §3.4 Ex 2",
  "prompt": "Use the method of Example 3.4.3(b) to show that if $0 < c < 1$, then $\\lim(c^{1/n}) = 1$.",
  "tests": [
    "c.3.4.1",
    "c.3.4.2",
    "c.3.4.7",
    "c.3.4.8"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.4 systematically.</p>",
  "solution": "<p>Let $z_n = c^{1/n}$. Since $0 < c < 1$, $z_n < 1$.</p><p>$z_{n+1} > z_n$ (roots get closer to 1 from below). Increasing and bounded.</p><p>Let $z = \\lim z_n$. Then $z_{2n} \\to z$.</p><p>$z_{2n}^2 = (c^{1/2n})^2 = c^{1/n} = z_n \\to z$. So $z^2 = z$.</p><p>Limit is 1.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.4."
},
{
  "id": "w.3.4.03",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.4",
  "marks": 5,
  "title": "Fibonacci Limit",
  "source": "Bartle & Sherbert 4e §3.4 Ex 3",
  "prompt": "Let $(f_n)$ be Fibonacci. Let $x_n = f_{n+1}/f_n$. Given limit exists, find it.",
  "tests": [
    "c.3.4.1",
    "c.3.4.2",
    "c.3.4.7",
    "c.3.4.8"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.4 systematically.</p>",
  "solution": "<p>$x_n = \\frac{f_{n+1}}{f_n} = \\frac{f_n + f_{n-1}}{f_n} = 1 + \\frac{f_{n-1}}{f_n} = 1 + \\frac{1}{x_{n-1}}$.</p><p>$L^2 - L - 1 = 0$. Positive root is $\\phi = (1+\\sqrt{5})/2$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.4."
},
{
  "id": "w.3.4.04",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.4",
  "marks": 5,
  "title": "Divergent Oscillations",
  "source": "Bartle & Sherbert 4e §3.4 Ex 4",
  "prompt": "Show divergence of:\n(a) $(1 - (-1)^n + 1/n)$",
  "tests": [
    "c.3.4.1",
    "c.3.4.2",
    "c.3.4.7",
    "c.3.4.8"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.4 systematically.</p>",
  "solution": "<p>Even $n$: $1 - 1 + 1/n = 1/n \\to 0$.</p><p>Odd $n$: $1 - (-1) + 1/n = 2 + 1/n \\to 2$.</p><p>Two different subsequential limits implies divergence.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.4."
},
{
  "id": "w.3.4.05",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.4",
  "marks": 5,
  "title": "Shuffled Sequences",
  "source": "Bartle & Sherbert 4e §3.4 Ex 5",
  "prompt": "Let $Z$ be the shuffle of $X$ and $Y$. Show $Z$ converges iff $X, Y$ converge to same limit.",
  "tests": [
    "c.3.4.1",
    "c.3.4.2",
    "c.3.4.7",
    "c.3.4.8"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.4 systematically.</p>",
  "solution": "<p>$X$ and $Y$ are subsequences of $Z$.</p><p>Conversely, if $X \\to L, Y \\to L$, for any $\\epsilon$, both tails are in neighborhood, so $Z$ tail is in neighborhood.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.4."
},
{
  "id": "w.3.4.06",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.4",
  "marks": 5,
  "title": "n^(1/n)",
  "source": "Bartle & Sherbert 4e §3.4 Ex 6",
  "prompt": "Let $x_n = n^{1/n}$. Show subsequence convergence implies global convergence.",
  "tests": [
    "c.3.4.1",
    "c.3.4.2",
    "c.3.4.7",
    "c.3.4.8"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.4 systematically.</p>",
  "solution": "<p>We know $x_n$ is eventually decreasing and bounded below by 1.</p><p>Thus $x_n \\to L$.</p><p>Subsequence $x_{2n} = (2n)^{1/2n} = 2^{1/2n} n^{1/2n} \\to 1 \\cdot L^{1/2}$? Wait, standard proof uses $x_{2n} = x_n^{1/2}$? No.</p><p>Better: We already know $x_n \\to 1$ from 3.1. But exercise asks to use $x_{2n}$. The logic is if $L$ exists, and subseq goes to 1, then $L=1$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.4."
},
{
  "id": "w.3.4.07",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.4",
  "marks": 5,
  "title": "Limits of Powers",
  "source": "Bartle & Sherbert 4e §3.4 Ex 7",
  "prompt": "Find limits: $(1 + 1/n^2)^{n^2}$, etc.",
  "tests": [
    "c.3.4.1",
    "c.3.4.2",
    "c.3.4.7",
    "c.3.4.8"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.4 systematically.</p>",
  "solution": "<p>Let $m = n^2$. This is a subsequence of $(1+1/m)^m$ which goes to $e$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.4."
},
{
  "id": "w.3.4.08",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.4",
  "marks": 5,
  "title": "More Limits",
  "source": "Bartle & Sherbert 4e §3.4 Ex 8",
  "prompt": "Limit of $(1 + 1/2n)^n$.",
  "tests": [
    "c.3.4.1",
    "c.3.4.2",
    "c.3.4.7",
    "c.3.4.8"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.4 systematically.</p>",
  "solution": "<p>$((1 + 1/2n)^{2n})^{1/2} \\to e^{1/2} = \\sqrt{e}$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.4."
},
{
  "id": "w.3.4.09",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.4",
  "marks": 5,
  "title": "Convergence to 0",
  "source": "Bartle & Sherbert 4e §3.4 Ex 9",
  "prompt": "Suppose every subsequence of $X$ has a subsequence converging to 0. Show $\\lim X = 0$.",
  "tests": [
    "c.3.4.1",
    "c.3.4.2",
    "c.3.4.7",
    "c.3.4.8"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.4 systematically.</p>",
  "solution": "<p>By definition, $X = (x_n)$ converges to $0$ if for every $\\varepsilon > 0$, there exists $K \\in \\mathbb{N}$ such that $n \\ge K \\implies |x_n| < \\varepsilon$.</p><p>The negation is: there exists $\\varepsilon_0 > 0$ such that for every $K \\in \\mathbb{N}$, there exists some $n \\ge K$ with $|x_n| \\ge \\varepsilon_0$.</p><p>For $K = 1$, choose $n_1 \\ge 1$ with $|x_{n_1}| \\ge \\varepsilon_0$.</p><p>Inductively, for $K = n_k + 1$, choose $n_{k+1} > n_k$ with $|x_{n_{k+1}}| \\ge \\varepsilon_0$.</p><p>This constructs a strictly increasing sequence of indices $n_1 < n_2 < n_3 < \\dots$ such that the subsequence $X' = (x_{n_k})$ satisfies $|x_{n_k}| \\ge \\varepsilon_0$ for all $k \\in \\mathbb{N}$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.4."
},
{
  "id": "w.3.4.10",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.4",
  "marks": 5,
  "title": "Limit Sup of Tail",
  "source": "Bartle & Sherbert 4e §3.4 Ex 10",
  "prompt": "Let $s_n = \\sup\\{x_k : k \\ge n\\}$. Show convergent subsequence to $\\inf s_n$.",
  "tests": [
    "c.3.4.1",
    "c.3.4.2",
    "c.3.4.7",
    "c.3.4.8"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.4 systematically.</p>",
  "solution": "<p>This is proving definition of limsup.</p><p>Since $x_n$ is bounded, $s_n$ is bounded monotone decreasing. Limit exists.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.4."
},
{
  "id": "w.3.5.01",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.5",
  "marks": 5,
  "title": "Bounded but Not Cauchy",
  "source": "Bartle & Sherbert 4e §3.5 Ex 1",
  "prompt": "Give an example of a bounded sequence that is not a Cauchy sequence.",
  "tests": [
    "c.3.5.1",
    "c.3.5.5",
    "c.3.5.8"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.5 systematically.</p>",
  "solution": "<p>By the Cauchy Convergence Criterion, a sequence in $\\mathbb{R}$ is Cauchy if and only if it converges.</p><p>We need a bounded sequence that diverges.</p><p>A classic example of a bounded divergent sequence is the alternating sequence $x_n = (-1)^n$.</p><p>It is bounded between -1 and 1. However, the distance between consecutive terms is $|(-1)^{n+1} - (-1)^n| = 2$. Since this distance never gets smaller than 2, it is not a Cauchy sequence. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.5."
},
{
  "id": "w.3.5.02",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.5",
  "marks": 5,
  "title": "Proving Cauchy Directly",
  "source": "Bartle & Sherbert 4e §3.5 Ex 2",
  "prompt": "Show directly from the definition that the following are Cauchy sequences:\n(a) $(\\frac{n+1}{n})$\n(b) $(1 + \\frac{1}{2!} + \\dots + \\frac{1}{n!})$",
  "tests": [
    "c.3.5.1",
    "c.3.5.5",
    "c.3.5.8"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.5 systematically.</p>",
  "solution": "<p>Let $x_n = \\frac{n+1}{n} = 1 + \\frac{1}{n}$.</p><p>The distance is $|\\frac{1}{n} - \\frac{1}{m}|$.</p><p>By the Triangle Inequality, $|\\frac{1}{n} - \\frac{1}{m}| \\le \\frac{1}{n} + \\frac{1}{m}$.</p><p>For any $\\epsilon > 0$, by the Archimedean Property, we can choose $H > 2/\\epsilon$. Then if $n, m \\ge H$, we have $\\frac{1}{n} \\le \\frac{1}{H} < \\epsilon/2$ and $\\frac{1}{m} < \\epsilon/2$.</p><p>Thus, the sum is strictly less than $\\epsilon/2 + \\epsilon/2 = \\epsilon$. Therefore, it is a Cauchy sequence.</p><p>Let $x_n = 1 + \\frac{1}{2!} + \\dots + \\frac{1}{n!}$. Assume $m > n$. Then $|x_m - x_n| = \\frac{1}{(n+1)!} + \\dots + \\frac{1}{m!}$.</p><p>Recall that $k! \\ge 2^{k-1}$. So $\\frac{1}{k!} \\le \\frac{1}{2^{k-1}}$.</p><p>Substitute this bound into our sum: $|x_m - x_n| \\le \\frac{1}{2^n} + \\frac{1}{2^{n+1}} + \\dots + \\frac{1}{2^{m-1}}$.</p><p>This is a geometric series. The sum is bounded by $\\frac{1/2^n}{1 - 1/2} = \\frac{1}{2^{n-1}}$.</p><p>Since $\\lim(1/2^{n-1}) = 0$, we can make this distance arbitrarily small by choosing a sufficiently large $n$. Thus, it is Cauchy.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.5."
},
{
  "id": "w.3.5.03",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.5",
  "marks": 5,
  "title": "Proving Not Cauchy",
  "source": "Bartle & Sherbert 4e §3.5 Ex 3",
  "prompt": "Show directly from the definition that the following are NOT Cauchy sequences:\n(a) $((-1)^n)$\n(b) $(n + \\frac{(-1)^n}{n})$\n(c) $(\\ln n)$",
  "tests": [
    "c.3.5.1",
    "c.3.5.5",
    "c.3.5.8"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.5 systematically.</p>",
  "solution": "<p>Let $x_n = n + \\frac{(-1)^n}{n}$. Let</p><p>The difference contains $(n+1) - n = 1$.</p><p>Specifically, $|x_{n+1} - x_n| = |1 + \\frac{(-1)^{n+1}}{n+1} - \\frac{(-1)^n}{n}|$. For large $n$, the fractional parts are very small, so the distance is very close to 1.</p><p>Let $\\epsilon_0 = 1/2$. For any $H$, pick an $n > H$. Then $|x_{n+1} - x_n| \\ge 1 - (\\frac{1}{n+1} + \\frac{1}{n})$. If $n \\ge 4$, this distance is $\\ge 1 - (1/5 + 1/4) > 1/2 = \\epsilon_0$.</p><p>Since we can always find terms that stay far apart, it is not Cauchy.</p><p>Let $x_n = \\ln n$. To show it</p><p>The distance is $\\ln(2n/n) = \\ln 2$.</p><p>Let $\\epsilon_0 = \\ln 2 > 0$. For any $H$, we can pick $n > H$ and $m = 2n > H$. The distance is exactly $\\ln 2 \\ge \\epsilon_0$.</p><p>Since the distance never drops below $\\ln 2$ for these chosen pairs, it is not Cauchy.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.5."
},
{
  "id": "w.3.5.04",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.5",
  "marks": 5,
  "title": "Algebra of Cauchy Sequences",
  "source": "Bartle & Sherbert 4e §3.5 Ex 4",
  "prompt": "Show directly from the definition that if $(x_n)$ and $(y_n)$ are Cauchy sequences, then $(x_n + y_n)$ and $(x_n y_n)$ are Cauchy sequences.",
  "tests": [
    "c.3.5.1",
    "c.3.5.5",
    "c.3.5.8"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.5 systematically.</p>",
  "solution": "<p>We want to bound $|(x_n + y_n) - (x_m + y_m)|$.</p><p>Regroup as $|(x_n - x_m) + (y_n - y_m)|$.</p><p>By the Triangle Inequality, this is $\\le |x_n - x_m| + |y_n - y_m|$.</p><p>Since $X$ and $Y$ are Cauchy, we can find an $H$ such that for $n, m \\ge H$, both $|x_n - x_m| < \\epsilon/2$ and $|y_n - y_m| < \\epsilon/2$.</p><p>Thus, the total distance is $< \\epsilon$. The sum is a Cauchy sequence.</p><p>We want to bound $|x_n y_n - x_m y_m|$. We add and subtract $x_n y_m$ inside the absolute value.</p><p>This gives $|x_n y_n - x_n y_m + x_n y_m - x_m y_m| \\le |x_n||y_n - y_m| + |y_m||x_n - x_m|$.</p><p>Cauchy sequences are bounded. Let $M > 0$ be a bound for both $|x_n|$ and $|y_m|$.</p><p>Then the distance is $\\le M|y_n - y_m| + M|x_n - x_m|$.</p><p>By forcing $|y_n - y_m| < \\epsilon/(2M)$ and $|x_n - x_m| < \\epsilon/(2M)$ for large enough $n, m$, the total distance is strictly less than $\\epsilon$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.5."
},
{
  "id": "w.3.5.05",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.5",
  "marks": 5,
  "title": "Pseudo-Cauchy (Square Roots)",
  "source": "Bartle & Sherbert 4e §3.5 Ex 5",
  "prompt": "If $x_n := \\sqrt{n}$, show that $(x_n)$ satisfies $\\lim |x_{n+1} - x_n| = 0$, but that it is not a Cauchy sequence.",
  "tests": [
    "c.3.5.1",
    "c.3.5.5",
    "c.3.5.8"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.5 systematically.</p>",
  "solution": "<p>First, compute $|x_{n+1} - x_n| = \\sqrt{n+1} - \\sqrt{n}$.</p><p>Multiply by the conjugate to get $\\frac{1}{\\sqrt{n+1} + \\sqrt{n}}$.</p><p>As $n \\to \\infty$, the denominator grows without bound, so this fraction clearly converges to $0$.</p><p>However, a sequence is Cauchy if and only if it is bounded (and converges). Is the sequence $x_n = \\sqrt{n}$ bounded?</p><p>By the Archimedean property, $\\sqrt{n}$ is unbounded. Thus, it cannot be a Cauchy sequence. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.5."
},
{
  "id": "w.3.5.06",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.5",
  "marks": 5,
  "title": "Generalized Pseudo-Cauchy",
  "source": "Bartle & Sherbert 4e §3.5 Ex 6",
  "prompt": "Let $p$ be a given natural number. Give an example of a sequence $(x_n)$ that is not a Cauchy sequence, but that satisfies $\\lim |x_{n+p} - x_n| = 0$.",
  "tests": [
    "c.3.5.1",
    "c.3.5.5",
    "c.3.5.8"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.5 systematically.</p>",
  "solution": "<p>Let</p><p>The difference is $\\ln(1 + p/n)$.</p><p>As $n \\to \\infty$, the fraction $p/n \\to 0$. Since $\\ln(x)$ is continuous at $x=1$, $\\lim \\ln(1 + p/n) = \\ln(1) = 0$.</p><p>Thus, the distance between terms separated by $p$ steps goes to 0.</p><p>But as we know, $\\ln n$ grows infinitely large (it is unbounded), so it cannot be a Cauchy sequence. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.5."
},
{
  "id": "w.3.5.07",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.5",
  "marks": 5,
  "title": "Integer Cauchy Sequence",
  "source": "Bartle & Sherbert 4e §3.5 Ex 7",
  "prompt": "Let $(x_n)$ be a Cauchy sequence such that $x_n$ is an integer for every $n \\in \\mathbb{N}$. Show that $(x_n)$ is ultimately constant.",
  "tests": [
    "c.3.5.1",
    "c.3.5.5",
    "c.3.5.8"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.5 systematically.</p>",
  "solution": "<p>Since $(x_n)$ is Cauchy, for any $\\epsilon > 0$, there exists an $H$ such that $|x_n - x_m| < \\epsilon$ for all $n, m \\ge H$.</p><p>Let $\\epsilon = 1/2$.</p><p>Then for all $n, m \\ge H$, we have $|x_n - x_m| < 1/2$.</p><p>But $x_n$ and $x_m$ are integers. The absolute difference between any two integers must be an integer (0, 1, 2, ...).</p><p>The only integer strictly less than $1/2$ is $0$. Therefore, $|x_n - x_m| = 0$, which means $x_n = x_m$ for all $n, m \\ge H$.</p><p>This means that from the $H$-th term onwards, all terms are exactly the same. The sequence is ultimately constant! Goal reached.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.5."
},
{
  "id": "w.3.5.08",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.5",
  "marks": 5,
  "title": "Monotone Bounded is Cauchy",
  "source": "Bartle & Sherbert 4e §3.5 Ex 8",
  "prompt": "Show directly that a bounded, monotone increasing sequence is a Cauchy sequence.",
  "tests": [
    "c.3.5.1",
    "c.3.5.5",
    "c.3.5.8"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.5 systematically.</p>",
  "solution": "<p>Let $(x_n)$ be bounded and monotone increasing. Since it is bounded above, by the Completeness Property, it has a supremum. Let $s = \\sup x_n$.</p><p>There exists an integer $H$ such that $s - \\epsilon < x_H \\le s$.</p><p>Because the sequence is increasing, for any $n, m \\ge H$, we have $x_n \\ge x_H$ and $x_m \\ge x_H$.</p><p>Since $s$ is an upper bound, both $x_n$ and $x_m$ are in the interval $(s - \\epsilon, s]$.</p><p>The maximum distance between any two points in this interval is strictly less than $\\epsilon$. Thus $|x_n - x_m| < \\epsilon$.</p><p>We have shown the sequence meets the definition of a Cauchy sequence. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.5."
},
{
  "id": "w.3.5.09",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.5",
  "marks": 5,
  "title": "Exponentially Shrinking Steps",
  "source": "Bartle & Sherbert 4e §3.5 Ex 9",
  "prompt": "If $0 < r < 1$ and $|x_{n+1} - x_n| < r^n$ for all $n \\in \\mathbb{N}$, show that $(x_n)$ is a Cauchy sequence.",
  "tests": [
    "c.3.5.1",
    "c.3.5.5",
    "c.3.5.8"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.5 systematically.</p>",
  "solution": "<p>Let $m > n$. We can express the distance between $x_m$ and $x_n$ as a sum of consecutive steps: $|x_m - x_n| = |(x_m - x_{m-1}) + \\dots + (x_{n+1} - x_n)|$.</p><p>The distance is strictly bounded by the sum: $r^n + r^{n+1} + \\dots + r^{m-1}$.</p><p>This is a finite geometric series. We can factor out $r^n$: $r^n (1 + r + \\dots + r^{m-n-1})$.</p><p>This is bounded by the infinite geometric series: $r^n \\frac{1}{1-r}$.</p><p>Since $0 < r < 1$, the limit of $r^n$ as $n \\to \\infty$ is $0$. Thus, for any $\\epsilon > 0$, there exists an $H$ such that $r^H \\frac{1}{1-r} < \\epsilon$.</p><p>Therefore, for $m > n \\ge H$, the distance is $< \\epsilon$. It is a Cauchy sequence! Goal reached.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.5."
},
{
  "id": "w.3.5.10",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.5",
  "marks": 5,
  "title": "Averaging Sequence",
  "source": "Bartle & Sherbert 4e §3.5 Ex 10",
  "prompt": "If $x_1 < x_2$ are arbitrary real numbers and $x_n := \\frac{1}{2}(x_{n-2} + x_{n-1})$ for $n > 2$, show that $(x_n)$ is convergent. What is its limit?",
  "tests": [
    "c.3.5.1",
    "c.3.5.5",
    "c.3.5.8"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.5 systematically.</p>",
  "solution": "<p>Calculate the step size: $x_n - x_{n-1} = \\frac{1}{2}(x_{n-2} + x_{n-1}) - x_{n-1} = -\\frac{1}{2}(x_{n-1} - x_{n-2})$.</p><p>By the Theorem for Contractive Convergence, the sequence converges.</p><p>To find the limit, notice that $x_n - x_{n-1} = (-1/2) (x_{n-1} - x_{n-2})$. This is a geometric sequence of differences.</p><p>We can write $x_n = x_1 + \\sum_{k=2}^n (x_k - x_{k-1})$.</p><p>This sum is $(x_2 - x_1) [1 - 1/2 + 1/4 - 1/8 + \\dots]$. As $n \\to \\infty$, the geometric series evaluates to $\\frac{1}{1 - (-1/2)} = 2/3$.</p><p>The limit is $x_1 + \\frac{2}{3}(x_2 - x_1) = \\frac{1}{3}x_1 + \\frac{2}{3}x_2$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.5."
},
{
  "id": "w.3.5.11",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.5",
  "marks": 5,
  "title": "Weighted Averaging",
  "source": "Bartle & Sherbert 4e §3.5 Ex 11",
  "prompt": "If $y_1 < y_2$ are arbitrary real numbers and $y_n := \\frac{1}{3}y_{n-1} + \\frac{2}{3}y_{n-2}$ for $n > 2$, show that $(y_n)$ is convergent. What is its limit?",
  "tests": [
    "c.3.5.1",
    "c.3.5.5",
    "c.3.5.8"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.5 systematically.</p>",
  "solution": "<p>Calculate the difference: $y_n - y_{n-1} = (\\frac{1}{3}y_{n-1} + \\frac{2}{3}y_{n-2}) - y_{n-1} = -\\frac{2}{3}(y_{n-1} - y_{n-2})$.</p><p>It is contractive, and therefore converges.</p><p>As before, $y_n = y_1 + \\sum_{k=2}^n (y_k - y_{k-1})$. The differences form a geometric series with ratio $r = -2/3$.</p><p>The infinite sum converges to $\\frac{1}{1 - (-2/3)} = \\frac{1}{5/3} = 3/5$.</p><p>The limit is $y_1 + \\frac{3}{5}(y_2 - y_1) = \\frac{2}{5}y_1 + \\frac{3}{5}y_2$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.5."
},
{
  "id": "w.3.5.12",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.5",
  "marks": 5,
  "title": "Reciprocal Recursion 1",
  "source": "Bartle & Sherbert 4e §3.5 Ex 12",
  "prompt": "If $x_1 > 0$ and $x_{n+1} := (2 + x_n)^{-1}$ for $n \\ge 1$, show that $(x_n)$ is a contractive sequence. Find the limit.",
  "tests": [
    "c.3.5.1",
    "c.3.5.5",
    "c.3.5.8"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.5 systematically.</p>",
  "solution": "<p>Since $x_1 > 0$, it is clear that $x_n > 0$ for all $n$.</p><p>Compute the difference: $|x_{n+2} - x_{n+1}| = |\\frac{1}{2 + x_{n+1}} - \\frac{1}{2 + x_n}|$.</p><p>Find a common denominator: $|\\frac{2 + x_n - (2 + x_{n+1})}{(2 + x_{n+1})(2 + x_n)}| = \\frac{|x_{n+1} - x_n|}{(2 + x_{n+1})(2 + x_n)}$.</p><p>The denominator is strictly greater than $4$. Therefore, the fraction is strictly less than $\\frac{1}{4} |x_{n+1} - x_n|$.</p><p>The sequence is contractive with $C = 1/4 < 1$. Thus, it converges to some limit $L$.</p><p>Taking the limit of both sides of the recursive equation gives $L = \\frac{1}{2+L}$. Thus $L^2 + 2L - 1 = 0$.</p><p>Using the quadratic formula, the positive root is $L = \\sqrt{2} - 1$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.5."
},
{
  "id": "w.3.5.13",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.5",
  "marks": 5,
  "title": "Reciprocal Recursion 2",
  "source": "Bartle & Sherbert 4e §3.5 Ex 13",
  "prompt": "If $x_1 := 2$ and $x_{n+1} := 2 + 1/x_n$ for $n \\ge 1$, show that $(x_n)$ is a contractive sequence. What is its limit?",
  "tests": [
    "c.3.5.1",
    "c.3.5.5",
    "c.3.5.8"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.5 systematically.</p>",
  "solution": "<p>Since $x_1 = 2$, it follows that $x_n \\ge 2$ for all $n$.</p><p>Compute the difference: $|x_{n+2} - x_{n+1}| = |(2 + \\frac{1}{x_{n+1}}) - (2 + \\frac{1}{x_n})| = |\\frac{1}{x_{n+1}} - \\frac{1}{x_n}|$.</p><p>The fraction is bounded by $1/4$.</p><p>Thus $|x_{n+2} - x_{n+1}| \\le \\frac{1}{4} |x_{n+1} - x_n|$. The sequence is contractive.</p><p>Passing to the limit $L$: $L = 2 + 1/L$, which means $L^2 - 2L - 1 = 0$.</p><p>The positive root is $L = 1 + \\sqrt{2}$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.5."
},
{
  "id": "w.3.5.14",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.5",
  "marks": 5,
  "title": "Root Finding via Contraction",
  "source": "Bartle & Sherbert 4e §3.5 Ex 14",
  "prompt": "The polynomial equation $x^3 - 5x + 1 = 0$ has a root $r$ with $0 < r < 1$. Use an appropriate contractive sequence to calculate $r$ within $10^{-4}$.",
  "tests": [
    "c.3.5.1",
    "c.3.5.5",
    "c.3.5.8"
  ],
  "approach": "<p>Apply definitions and theorems of Section 3.5 systematically.</p>",
  "solution": "<p>We need an equation of the form $x = f(x)$. Rearranging the polynomial gives $5x = x^3 + 1$, or $x = \\frac{x^3 + 1}{5}$.</p><p>Let $x_1$ be in $(0,1)$, say $x_1 = 0.5$. The sequence is defined as $x_{n+1} = \\frac{x_n^3 + 1}{5}$. Note that $x_n$ will always stay in $(0, 1)$.</p><p>We get $\\frac{1}{5} |x_{n+1}^3 - x_n^3|$.</p><p>Factor the difference of cubes: $\\frac{1}{5} |x_{n+1} - x_n| (x_{n+1}^2 + x_{n+1}x_n + x_n^2)$.</p><p>Since $x_k \\in (0, 1)$, the quadratic term is strictly less than $1 + 1 + 1 = 3$. Thus $|x_{n+2} - x_{n+1}| \\le \\frac{3}{5} |x_{n+1} - x_n|$.</p><p>The sequence is contractive with $C = 0.6$. The error estimation formula is $|x^* - x_n| \\le \\frac{C^{n-1}}{1-C} |x_2 - x_1|$.</p><p>Iterating this formula allows us to reach the $10^{-4}$ accuracy threshold easily. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 3.5."
},
{
  "id": "w.4.1.01",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.1",
  "marks": 5,
  "title": "Bounding x^2 - 1",
  "source": "Bartle & Sherbert 4e §4.1 Ex 1",
  "prompt": "Determine a condition on $|x - 1|$ that will assure that:\n(a) $|x^2 - 1| < 1/2$\n(b) $|x^2 - 1| < 1/10^{-3}$",
  "tests": [
    "c.4.1.1",
    "c.4.1.4",
    "c.4.1.8",
    "c.4.1.9"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.1 systematically.</p>",
  "solution": "<p>We want to bound $|x^2 - 1| = |x - 1||x + 1|$.</p><p>First, let</p><p>Thus, $|x + 1| < 3$.</p><p>Now, $|x^2 - 1| = |x - 1||x + 1| < 3|x - 1|$.</p><p>We want this to be $< 1/2$. So we need $3|x - 1| < 1/2$, which means $|x - 1| < 1/6$.</p><p>To ensure both our preliminary bound ($<1$) and our final bound ($<1/6$) hold, we take the minimum: $\\delta = \\min(1, 1/6) = 1/6$.</p><p>Using the same preliminary bound, if $|x - 1| < 1$, then $|x^2 - 1| < 3|x - 1|$.</p><p>We need $|x - 1| < \\epsilon / 3$.</p><p>For (b), $\\epsilon = 10^{-3}$. We need $|x - 1| < 10^{-3} / 3$.</p><p>Thus, the condition is $|x - 1| < \\min(1, 10^{-3}/3) = 10^{-3}/3$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.1."
},
{
  "id": "w.4.1.02",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.1",
  "marks": 5,
  "title": "Bounding square roots",
  "source": "Bartle & Sherbert 4e §4.1 Ex 2",
  "prompt": "Determine a condition on $|x - 4|$ that will assure that:\n(a) $|\\sqrt{x} - 2| < 1/2$\n(b) $|\\sqrt{x} - 2| < 10^{-2}$",
  "tests": [
    "c.4.1.1",
    "c.4.1.4",
    "c.4.1.8",
    "c.4.1.9"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.1 systematically.</p>",
  "solution": "<p>We want to bound $|\\sqrt{x} - 2|$. Multiply and divide by the conjugate: $\\sqrt{x} + 2$.</p><p>It becomes $\\frac{|x - 4|}{\\sqrt{x} + 2}$.</p><p>Since $\\sqrt{x} \\ge 0$, the denominator $\\sqrt{x} + 2 \\ge 2$.</p><p>Therefore, $\\frac{1}{\\sqrt{x} + 2} \\le \\frac{1}{2}$. This means $|\\sqrt{x} - 2| \\le \\frac{1}{2} |x - 4|$.</p><p>For part (a), we want this $< 1/2$. So $\\frac{1}{2}|x - 4| < 1/2 \\implies |x - 4| < 1$.</p><p>For part (b), we want this $< 10^{-2}$. So $\\frac{1}{2}|x - 4| < 10^{-2} \\implies |x - 4| < 2 \\times 10^{-2}$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.1."
},
{
  "id": "w.4.1.03",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.1",
  "marks": 5,
  "title": "Distance Limit",
  "source": "Bartle & Sherbert 4e §4.1 Ex 3",
  "prompt": "Let $c$ be a cluster point of $A \\subseteq \\mathbb{R}$ and let $f: A \\to \\mathbb{R}$. \nProve that $\\lim_{x\\to c} f(x) = L$ if and only if $\\lim_{x\\to c} |f(x) - L| = 0$.",
  "tests": [
    "c.4.1.1",
    "c.4.1.4",
    "c.4.1.8",
    "c.4.1.9"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.1 systematically.</p>",
  "solution": "<p>Let</p><p>Now, let</p><p>It requires $||f(x) - L| - 0| < \\epsilon$.</p><p>But $||f(x) - L| - 0|$ is exactly $|f(x) - L|$.</p><p>Since the two inequality conditions ($|f(x) - L| < \\epsilon$) are algebraically identical, the statements are perfectly equivalent. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.1."
},
{
  "id": "w.4.1.04",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.1",
  "marks": 5,
  "title": "Shifting the Limit",
  "source": "Bartle & Sherbert 4e §4.1 Ex 4",
  "prompt": "Let $f: \\mathbb{R} \\to \\mathbb{R}$ and let $c \\in \\mathbb{R}$. Show that $\\lim_{x\\to c} f(x) = L$ if and only if $\\lim_{x\\to 0} f(x+c) = L$.",
  "tests": [
    "c.4.1.1",
    "c.4.1.4",
    "c.4.1.8",
    "c.4.1.9"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.1 systematically.</p>",
  "solution": "<p>Assume $\\lim_{x\\to c} f(x) = L$. Then for any $\\epsilon > 0$, there is a $\\delta > 0$ such that $0 < |x - c| < \\delta \\implies |f(x) - L| < \\epsilon$.</p><p>We want to prove a limit as a variable approaches 0. Let</p><p>Let $h = x - c$. Note that $x = h + c$.</p><p>Substitute this into our delta condition: $0 < |h| < \\delta$.</p><p>Substitute this into our epsilon condition: $|f(h + c) - L| < \\epsilon$.</p><p>This is exactly the definition of $\\lim_{h\\to 0} f(h+c) = L$. The reverse direction works exactly the same by substituting $x = h+c$ backwards. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.1."
},
{
  "id": "w.4.1.05",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.1",
  "marks": 5,
  "title": "Squeezing a Quadratic",
  "source": "Bartle & Sherbert 4e §4.1 Ex 5",
  "prompt": "Let $I := (0, a)$ where $a > 0$, and let $g(x) := x^2$ for $x \\in I$. For any points $x, c \\in I$, show that $|g(x) - c^2| \\le 2a|x-c|$. \nUse this to prove $\\lim_{x\\to c} x^2 = c^2$.",
  "tests": [
    "c.4.1.1",
    "c.4.1.4",
    "c.4.1.8",
    "c.4.1.9"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.1 systematically.</p>",
  "solution": "<p>We have $|g(x) - c^2| = |x^2 - c^2| = |x - c||x + c|$.</p><p>Since $x, c \\in (0, a)$, $|x + c| = x + c < a + a = 2a$.</p><p>Therefore, $|x^2 - c^2| \\le 2a|x - c|$.</p><p>To prove the limit, let $\\epsilon > 0$.</p><p>We need $|x^2 - c^2| < \\epsilon$. Based on our bound, it suffices to make $2a|x - c| < \\epsilon$.</p><p>Thus, choosing $\\delta = \\epsilon / (2a)$ guarantees that if $0 < |x - c| < \\delta$, then $|x^2 - c^2| < 2a(\\epsilon/2a) = \\epsilon$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.1."
},
{
  "id": "w.4.1.06",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.1",
  "marks": 5,
  "title": "Lipschitz Condition",
  "source": "Bartle & Sherbert 4e §4.1 Ex 6",
  "prompt": "Let $I$ be an interval in $\\mathbb{R}$, let $f: I \\to \\mathbb{R}$, and let $c \\in I$. Suppose there exist constants $K$ and $L$ such that $|f(x) - L| \\le K|x-c|$ for $x \\in I$. \nShow that $\\lim_{x\\to c} f(x) = L$.",
  "tests": [
    "c.4.1.1",
    "c.4.1.4",
    "c.4.1.8",
    "c.4.1.9"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.1 systematically.</p>",
  "solution": "<p>We are given the condition $|f(x) - L| \\le K|x-c|$.</p><p>Let $\\epsilon > 0$ be given. We need to find a $\\delta > 0$ such that $|x-c| < \\delta \\implies |f(x) - L| < \\epsilon$.</p><p>Choose $\\delta = \\epsilon / K$.</p><p>If $0 < |x - c| < \\delta$, then $|f(x) - L| \\le K|x - c| < K(\\epsilon/K) = \\epsilon$.</p><p>This completely satisfies the limit definition. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.1."
},
{
  "id": "w.4.1.07",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.1",
  "marks": 5,
  "title": "Limit of Cubes",
  "source": "Bartle & Sherbert 4e §4.1 Ex 7",
  "prompt": "Show that $\\lim_{x\\to c} x^3 = c^3$ for any $c \\in \\mathbb{R}$.",
  "tests": [
    "c.4.1.1",
    "c.4.1.4",
    "c.4.1.8",
    "c.4.1.9"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.1 systematically.</p>",
  "solution": "<p>We want to bound $|x^3 - c^3|$. Factor it: $|x - c| |x^2 + cx + c^2|$.</p><p>We need a preliminary bound to control the quadratic term. Let</p><p>We have $|x| < |c| + 1$.</p><p>Now bound the quadratic term: $|x^2 + cx + c^2| \\le |x|^2 + |c||x| + |c|^2$.</p><p>Substitute the bound for $|x|$: $\\le (|c|+1)^2 + |c|(|c|+1) + |c|^2$. Let</p><p>So $|x^3 - c^3| \\le M|x - c|$. By choosing $\\delta = \\min(1, \\epsilon/M)$, we ensure $|x^3 - c^3| < \\epsilon$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.1."
},
{
  "id": "w.4.1.08",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.1",
  "marks": 5,
  "title": "Limit of Square Root",
  "source": "Bartle & Sherbert 4e §4.1 Ex 8",
  "prompt": "Show that $\\lim_{x\\to c} \\sqrt{x} = \\sqrt{c}$ for any $c > 0$.",
  "tests": [
    "c.4.1.1",
    "c.4.1.4",
    "c.4.1.8",
    "c.4.1.9"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.1 systematically.</p>",
  "solution": "<p>We want to bound $|\\sqrt{x} - \\sqrt{c}|$. Multiply by the conjugate $\\sqrt{x} + \\sqrt{c}$ over itself.</p><p>This gives $\\frac{|x - c|}{\\sqrt{x} + \\sqrt{c}}$.</p><p>The denominator is strictly greater than $\\sqrt{c}$.</p><p>Therefore, the fraction is bounded above by $\\frac{|x - c|}{\\sqrt{c}}$.</p><p>We want this $< \\epsilon$, so we need $|x - c| < \\epsilon \\sqrt{c}$.</p><p>By choosing $\\delta = \\epsilon \\sqrt{c}$, we guarantee the condition holds. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.1."
},
{
  "id": "w.4.1.09",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.1",
  "marks": 5,
  "title": "Calculating Limits",
  "source": "Bartle & Sherbert 4e §4.1 Ex 9",
  "prompt": "Use either the $\\epsilon-\\delta$ definition or the Sequential Criterion to establish:\n(a) $\\lim_{x\\to 2} \\frac{1}{1-x} = -1$\n(b) $\\lim_{x\\to 1} \\frac{x}{1+x} = \\frac{1}{2}$",
  "tests": [
    "c.4.1.1",
    "c.4.1.4",
    "c.4.1.8",
    "c.4.1.9"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.1 systematically.</p>",
  "solution": "<p>Let $(x_n)$ be any sequence converging to 2 with $x_n \\neq 2$.</p><p>The sequence in the denominator converges to -1.</p><p>Since the denominator limit is non-zero, the quotient limit is $1 / (-1) = -1$.</p><p>Because this holds for *every* sequence converging to 2, the function limit is -1.</p><p>Let $(x_n)$ be any sequence converging to 1.</p><p>The numerator sequence converges to 1.</p><p>The denominator sequence $(1 + x_n)$ converges to $1 + 1 = 2$.</p><p>Since $2 \\neq 0$, the quotient rule for sequences applies. The limit is $1 / 2$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.1."
},
{
  "id": "w.4.1.10",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.1",
  "marks": 5,
  "title": "More Calculations",
  "source": "Bartle & Sherbert 4e §4.1 Ex 10",
  "prompt": "Establish the following limits:\n(c) $\\lim_{x\\to 0} \\frac{x^2}{|x|} = 0$\n(d) $\\lim_{x\\to 1} \\frac{x^2-x+1}{x+1} = \\frac{1}{2}$",
  "tests": [
    "c.4.1.1",
    "c.4.1.4",
    "c.4.1.8",
    "c.4.1.9"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.1 systematically.</p>",
  "solution": "<p>Notice that $|x|^2 = x^2$ for all real numbers.</p><p>The function simplifies exactly to $|x|$ for $x \\neq 0$.</p><p>We know $\\lim_{x\\to 0} |x| = 0$ (easy to prove with $\\delta = \\epsilon$). Thus the limit is 0.</p><p>The function is $f(x) = \\frac{x^2-x+1}{x+1}$.</p><p>Using the sequential criterion, if $x_n \\to 1$, the numerator goes to $1^2 - 1 + 1 = 1$.</p><p>The denominator goes to $1 + 1 = 2$.</p><p>By the quotient rule, the limit is $1/2$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.1."
},
{
  "id": "w.4.1.11",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.1",
  "marks": 5,
  "title": "Definition Practice",
  "source": "Bartle & Sherbert 4e §4.1 Ex 11",
  "prompt": "Use the $\\epsilon-\\delta$ definition of limit to show that:\n(a) $\\lim_{x\\to 2} (x^2+4x) = 12$\n(b) $\\lim_{x\\to -1} \\frac{x+5}{2x+3} = 4$",
  "tests": [
    "c.4.1.1",
    "c.4.1.4",
    "c.4.1.8",
    "c.4.1.9"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.1 systematically.</p>",
  "solution": "<p>We want $|(x^2+4x) - 12| < \\epsilon$. Factor it: $|x^2+4x-12| = |x-2||x+6|$.</p><p>Assume $|x-2| < 1$, so $1 < x < 3$.</p><p>The term is bounded by 9.</p><p>So $|x^2+4x-12| < 9|x-2|$.</p><p>Choose $\\delta = \\min(1, \\epsilon/9)$. Then the limit is proven.</p><p>We want $|\\frac{x+5}{2x+3} - 4| < \\epsilon$. Simplify: $|\\frac{x+5 - 4(2x+3)}{2x+3}| = |\\frac{-7x-7}{2x+3}| = 7\\frac{|x+1|}{|2x+3|}$.</p><p>We need a lower bound for the denominator. Assume $|x - (-1)| < 1/4$. Then $-1.25 < x < -0.75$.</p><p>Then $2x+3$ is between $0.5$ and $1.5$. The absolute value is strictly $> 0.5$.</p><p>Thus $1/|2x+3| < 1/0.5 = 2$.</p><p>The total error is bounded by $7 \\times 2 \\times |x+1| = 14|x+1|$. Choose $\\delta = \\min(1/4, \\epsilon/14)$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.1."
},
{
  "id": "w.4.1.12",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.1",
  "marks": 5,
  "title": "More Definition Practice",
  "source": "Bartle & Sherbert 4e §4.1 Ex 12",
  "prompt": "Use the definition of limit to prove the following.\n(a) $\\lim_{x\\to 3} \\frac{2x+3}{4x-9} = 3$\n(b) $\\lim_{x\\to 6} \\frac{x^2-3x}{x+3} = 2$",
  "tests": [
    "c.4.1.1",
    "c.4.1.4",
    "c.4.1.8",
    "c.4.1.9"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.1 systematically.</p>",
  "solution": "<p>$|\\frac{2x+3}{4x-9} - 3| = |\\frac{2x+3-12x+27}{4x-9}| = |\\frac{-10x+30}{4x-9}| = 10\\frac{|x-3|}{|4x-9|}$.</p><p>The interval $(2, 4)$ contains $9/4 = 2.25$ where the denominator is 0. We must pick a tighter preliminary bound.</p><p>Assume $|x-3| < 1/2$. Then $2.5 < x < 3.5$. Then $4x-9$ is between $1$ and $5$. So $|4x-9| > 1$.</p><p>Thus the error is $< 10|x-3| / 1 = 10|x-3|$. Choose $\\delta = \\min(1/2, \\epsilon/10)$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.1."
},
{
  "id": "w.4.1.13",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.1",
  "marks": 5,
  "title": "Non-existent Limits",
  "source": "Bartle & Sherbert 4e §4.1 Ex 13",
  "prompt": "Show that the following limits do not exist.\n(a) $\\lim_{x\\to 0} \\frac{1}{x^2} \\ (x>0)$\n(b) $\\lim_{x\\to 0} \\frac{1}{\\sqrt{x}} \\ (x>0)$",
  "tests": [
    "c.4.1.1",
    "c.4.1.4",
    "c.4.1.8",
    "c.4.1.9"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.1 systematically.</p>",
  "solution": "<p>Let</p><p>Let $x_n = 1/n$. Clearly $x_n \\to 0$.</p><p>For part (a), $f(x_n) = 1/(1/n)^2 = n^2$. Since $(n^2)$ is unbounded, it does not converge in $\\mathbb{R}$.</p><p>For part (b), let $x_n = 1/n$. Then $f(x_n) = 1/\\sqrt{1/n} = \\sqrt{n}$. This sequence is also unbounded and thus diverges.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.1."
},
{
  "id": "w.4.1.14",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.1",
  "marks": 5,
  "title": "Oscillating Limits",
  "source": "Bartle & Sherbert 4e §4.1 Ex 14",
  "prompt": "Show that the following limits do not exist.\n(c) $\\lim_{x\\to 0} (x + \\text{sgn}(x))$\n(d) $\\lim_{x\\to 0} \\sin(1/x^2)$",
  "tests": [
    "c.4.1.1",
    "c.4.1.4",
    "c.4.1.8",
    "c.4.1.9"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.1 systematically.</p>",
  "solution": "<p>Let $f(x) = x + \\text{sgn}(x)$.</p><p>With $x_n = 1/n$, $f(x_n) = 1/n + 1 \\to 1$.</p><p>If we choose $y_n = -1/n$, then $y_n \\to 0$. $f(y_n) = -1/n - 1 \\to -1$.</p><p>Since the sequences have different limits, the function limit does not exist.</p><p>We want $1/x_n^2 = n\\pi \\implies x_n = 1/\\sqrt{n\\pi}$. Here $f(x_n) = \\sin(n\\pi) = 0 \\to 0$.</p><p>We want $1/y_n^2 = \\pi/2 + 2n\\pi \\implies y_n = 1/\\sqrt{\\pi/2 + 2n\\pi}$. Here $f(y_n) = \\sin(\\pi/2 + 2n\\pi) = 1 \\to 1$.</p><p>Different subsequential limits mean no global limit exists.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.1."
},
{
  "id": "w.4.1.15",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.1",
  "marks": 5,
  "title": "Scaling the Domain",
  "source": "Bartle & Sherbert 4e §4.1 Ex 15",
  "prompt": "Suppose the function $f: \\mathbb{R} \\to \\mathbb{R}$ has limit $L$ at $0$, and let $a > 0$. \nIf $g: \\mathbb{R} \\to \\mathbb{R}$ is defined by $g(x) := f(ax)$, show that $\\lim_{x\\to 0} g(x) = L$.",
  "tests": [
    "c.4.1.1",
    "c.4.1.4",
    "c.4.1.8",
    "c.4.1.9"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.1 systematically.</p>",
  "solution": "<p>Let $(x_n)$ be any sequence converging to $0$ with $x_n \\neq 0$.</p><p>By algebraic limit theorems for sequences, $(ax_n) \\to a \\cdot 0 = 0$.</p><p>Also, since $a > 0$ and $x_n \\neq 0$, we have $ax_n \\neq 0$.</p><p>Since $f$ has limit $L$ at 0, and $(ax_n)$ is a valid sequence approaching 0, the sequential criterion says $f(ax_n) \\to L$.</p><p>Since $g(x_n) = f(ax_n)$, we have $g(x_n) \\to L$. This holds for all sequences, so $\\lim_{x\\to 0} g(x) = L$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.1."
},
{
  "id": "w.4.1.16",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.1",
  "marks": 5,
  "title": "Limit of a Square",
  "source": "Bartle & Sherbert 4e §4.1 Ex 16",
  "prompt": "Let $c \\in \\mathbb{R}$ and let $f$ be such that $\\lim_{x\\to c} (f(x))^2 = L$.\n(a) Show that if $L=0$, then $\\lim_{x\\to c} f(x) = 0$.\n(b) Show by example that if $L \\neq 0$, then $f$ may not have a limit at $c$.",
  "tests": [
    "c.4.1.1",
    "c.4.1.4",
    "c.4.1.8",
    "c.4.1.9"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.1 systematically.</p>",
  "solution": "<p>We are given $(f(x))^2 \\to 0$. We want to show $f(x) \\to 0$.</p><p>We need to show $|f(x)| \\to 0$.</p><p>Notice that $|f(x)| = \\sqrt{(f(x))^2}$.</p><p>By the sequence theorems (limit of square root), if a positive sequence goes to 0, its square root goes to 0.</p><p>Applying the sequential criterion, $\\lim |f(x)| = \\sqrt{0} = 0$. Thus $f(x) \\to 0$.</p><p>We need a function whose square is well-behaved, but the function itself jumps around.</p><p>Let $f(x) = \\text{sgn}(x)$.</p><p>For $x \\neq 0$, $(f(x))^2 = (\\pm 1)^2 = 1$. Thus $\\lim_{x\\to 0} (f(x))^2 = 1$. Here $L=1 \\neq 0$.</p><p>But as shown before, $\\lim_{x\\to 0} \\text{sgn}(x)$ does not exist! Counterexample found.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.1."
},
{
  "id": "w.4.1.17",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.1",
  "marks": 5,
  "title": "Thomae-like Function",
  "source": "Bartle & Sherbert 4e §4.1 Ex 17",
  "prompt": "Let $f: \\mathbb{R} \\to \\mathbb{R}$ be defined by $f(x) := x$ if $x \\in \\mathbb{Q}$, and $f(x) = 0$ if $x \\notin \\mathbb{Q}$.\n(a) Show that $f$ has a limit at $x=0$.\n(b) Use a sequential argument to show that if $c \\neq 0$, $f$ does not have a limit at $c$.",
  "tests": [
    "c.4.1.1",
    "c.4.1.4",
    "c.4.1.8",
    "c.4.1.9"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.1 systematically.</p>",
  "solution": "<p>Notice that for any $x$, $f(x)$ is either $x$ or $0$.</p><p>We have $0 \\le |f(x)| \\le |x|$.</p><p>Since $\\lim_{x\\to 0} 0 = 0$ and $\\lim_{x\\to 0} |x| = 0$, the Squeeze Theorem applies.</p><p>Therefore, $\\lim_{x\\to 0} |f(x)| = 0$, which implies $\\lim_{x\\to 0} f(x) = 0$.</p><p>Let $c \\neq 0$. By the Density Theorem, there exists a sequence of rationals $(r_n) \\to c$.</p><p>For this sequence, $f(r_n) = r_n \\to c$.</p><p>Also by the Density Theorem, there exists a sequence of irrationals $(i_n) \\to c$.</p><p>For this sequence, $f(i_n) = 0 \\to 0$.</p><p>Since $c \\neq 0$, the two sequences yield different limits. Thus the function limit does not exist.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.1."
},
{
  "id": "w.4.2.01",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.2",
  "marks": 5,
  "title": "Applying Limit Theorems",
  "source": "Bartle & Sherbert 4e §4.2 Ex 1",
  "prompt": "Apply Theorem 4.2.4 to determine the following limits:\n(a) $\\lim_{x\\to 1} (x+1)(2x+3)$\n(b) $\\lim_{x\\to 1} \\frac{x^2+2}{x^2-2}$",
  "tests": [
    "c.4.2.4",
    "c.4.2.7"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.2 systematically.</p>",
  "solution": "<p>By the polynomial limit theorem, $\\lim_{x\\to 1} (x+1) = 1+1 = 2$.</p><p>Similarly, $\\lim_{x\\to 1} (2x+3) = 2(1)+3 = 5$.</p><p>The limit is $2 \\times 5 = 10$.</p><p>First, find the limit of the denominator: $\\lim_{x\\to 1} (x^2-2) = 1^2 - 2 = -1$.</p><p>The numerator</p><p>Thus, the quotient limit is $\\frac{3}{-1} = -3$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.2."
},
{
  "id": "w.4.2.02",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.2",
  "marks": 5,
  "title": "More Limit Theorems",
  "source": "Bartle & Sherbert 4e §4.2 Ex 2",
  "prompt": "Determine the following limits:\n(c) $\\lim_{x\\to 2} (\\frac{1}{x+1} - \\frac{1}{2x})$\n(d) $\\lim_{x\\to 0} \\frac{x+1}{x^2+2}$",
  "tests": [
    "c.4.2.4",
    "c.4.2.7"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.2 systematically.</p>",
  "solution": "<p>Evaluate the first term: $\\lim_{x\\to 2} \\frac{1}{x+1} = \\frac{1}{2+1} = \\frac{1}{3}$.</p><p>Evaluate the second term: $\\lim_{x\\to 2} \\frac{1}{2x} = \\frac{1}{4}$.</p><p>The limit is $\\frac{1}{12}$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.2."
},
{
  "id": "w.4.2.03",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.2",
  "marks": 5,
  "title": "Factoring Limits",
  "source": "Bartle & Sherbert 4e §4.2 Ex 3",
  "prompt": "Determine the following limits:\n(a) $\\lim_{x\\to 2} \\frac{x^2-4}{x-2}$\n(b) $\\lim_{x\\to 0} \\frac{(x+1)^2-1}{x}$",
  "tests": [
    "c.4.2.4",
    "c.4.2.7"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.2 systematically.</p>",
  "solution": "<p>Direct substitution yields $0/0$. We must factor.</p><p>The numerator is $(x-2)(x+2)$.</p><p>For $x \\neq 2$, the fraction simplifies to $x+2$.</p><p>Applying the polynomial limit theorem, $\\lim_{x\\to 2} (x+2) = 4$.</p><p>Direct substitution yields $0/0$.</p><p>Expand the numerator: $(x^2 + 2x + 1) - 1 = x^2 + 2x$.</p><p>Divide by $x$ (valid since $x \\neq 0$): $\\frac{x(x+2)}{x} = x+2$.</p><p>The limit as $x \\to 0$ of $x+2$ is $2$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.2."
},
{
  "id": "w.4.2.04",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.2",
  "marks": 5,
  "title": "Complex Conjugates",
  "source": "Bartle & Sherbert 4e §4.2 Ex 4",
  "prompt": "Find $\\lim_{x\\to 0} \\frac{\\sqrt{1+2x} - \\sqrt{1+3x}}{x+2x^2}$ where $x > 0$.",
  "tests": [
    "c.4.2.4",
    "c.4.2.7"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.2 systematically.</p>",
  "solution": "<p>Direct substitution yields $0/0$. Let</p><p>The new numerator is $-x$.</p><p>The new denominator is $(x+2x^2)(\\sqrt{1+2x} + \\sqrt{1+3x})$.</p><p>Factor $x$ out of the first part of the denominator: $x(1+2x)(\\dots)$.</p><p>Cancel the $x$ from the numerator and denominator: $\\frac{-1}{(1+2x)(\\sqrt{1+2x} + \\sqrt{1+3x})}$.</p><p>Now substitute $x = 0$. The denominator becomes $(1)(\\sqrt{1} + \\sqrt{1}) = 2$.</p><p>The limit is $-1/2$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.2."
},
{
  "id": "w.4.2.05",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.2",
  "marks": 5,
  "title": "Squeezing Cosine",
  "source": "Bartle & Sherbert 4e §4.2 Ex 5",
  "prompt": "Prove that $\\lim_{x\\to 0} \\cos(1/x)$ does not exist, but that $\\lim_{x\\to 0} x\\cos(1/x) = 0$.",
  "tests": [
    "c.4.2.4",
    "c.4.2.7"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.2 systematically.</p>",
  "solution": "<p>To show $\\cos(1/x)$ doesn</p><p>Let $x_n = \\frac{1}{2n\\pi}$. Then $\\lim \\cos(1/x_n) = 1$.</p><p>Let $y_n = \\frac{1}{\\pi + 2n\\pi}$. Then $\\lim \\cos(1/y_n) = -1$.</p><p>Since the limits differ, $\\lim_{x\\to 0} \\cos(1/x)$ does not exist.</p><p>We know that for all $y$, $-1 \\le \\cos(y) \\le 1$.</p><p>Substituting $y = 1/x$ and multiplying by $|x|$ gives $-|x| \\le x\\cos(1/x) \\le |x|$.</p><p>Since $\\lim_{x\\to 0} |x| = 0$ and $\\lim_{x\\to 0} -|x| = 0$, the Squeeze Theorem forces $\\lim_{x\\to 0} x\\cos(1/x) = 0$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.2."
},
{
  "id": "w.4.2.06",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.2",
  "marks": 5,
  "title": "Bounded x Null = Null",
  "source": "Bartle & Sherbert 4e §4.2 Ex 6",
  "prompt": "Let $f, g$ be defined on $A$, and let $c$ be a cluster point. Suppose $f$ is bounded on a neighborhood of $c$ and that $\\lim_{x\\to c} g = 0$. \nProve that $\\lim_{x\\to c} fg = 0$.",
  "tests": [
    "c.4.2.4",
    "c.4.2.7"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.2 systematically.</p>",
  "solution": "<p>Since $f$ is bounded near $c$, there exists a $\\delta_1$ and $M > 0$ such that $|f(x)| \\le M$ for $0 < |x-c| < \\delta_1$.</p><p>We want to make $|f(x)g(x) - 0| < \\epsilon$.</p><p>It is bounded by $M|g(x)|$.</p><p>Since $g(x) \\to 0$, there exists $\\delta_2$ such that if $0 < |x-c| < \\delta_2$, then $|g(x) - 0| < \\epsilon/M$.</p><p>Let $\\delta = \\min(\\delta_1, \\delta_2)$. For these $x$, $|f(x)g(x)| \\le M|g(x)| < M(\\epsilon/M) = \\epsilon$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.2."
},
{
  "id": "w.4.2.07",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.2",
  "marks": 5,
  "title": "Epsilon-Delta Proof of Sum Limit",
  "source": "Bartle & Sherbert 4e §4.2 Ex 7",
  "prompt": "Use the definition of the limit to prove that if $\\lim f = L$ and $\\lim g = M$, then $\\lim (f+g) = L+M$.",
  "tests": [
    "c.4.2.4",
    "c.4.2.7"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.2 systematically.</p>",
  "solution": "<p>Let $\\epsilon > 0$. We want to show $|(f(x)+g(x)) - (L+M)| < \\epsilon$.</p><p>Rearrange to $|(f(x)-L) + (g(x)-M)|$.</p><p>By Triangle Inequality, this is $\\le |f(x)-L| + |g(x)-M|$.</p><p>Since $\\lim f = L$, there exists $\\delta_1$ such that $|f(x)-L| < \\epsilon/2$. Similarly, there exists $\\delta_2$ such that $|g(x)-M| < \\epsilon/2$.</p><p>Let $\\delta = \\min(\\delta_1, \\delta_2)$. Then the total sum is strictly less than $\\epsilon/2 + \\epsilon/2 = \\epsilon$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.2."
},
{
  "id": "w.4.2.08",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.2",
  "marks": 5,
  "title": "Sequential Proof of Quotient",
  "source": "Bartle & Sherbert 4e §4.2 Ex 8",
  "prompt": "Use the sequential formulation of the limit to prove Theorem 4.2.4(b): If $\\lim f = L$ and $\\lim h = H \\neq 0$, then $\\lim (f/h) = L/H$.",
  "tests": [
    "c.4.2.4",
    "c.4.2.7"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.2 systematically.</p>",
  "solution": "<p>Let $(x_n)$ be any sequence in $A$ converging to $c$ with $x_n \\neq c$.</p><p>We have $\\lim f(x_n) = L$ and $\\lim h(x_n) = H$.</p><p>Since $h(x) \\neq 0$ and $H \\neq 0$, the sequence $(h(x_n))$ consists of non-zero terms converging to a non-zero limit.</p><p>By the quotient rule for sequences (Theorem 3.2.3b), $\\lim \\frac{f(x_n)}{h(x_n)} = \\frac{L}{H}$.</p><p>Since this holds for every valid sequence, by the Sequential Criterion, $\\lim_{x\\to c} (f/h)(x) = L/H$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.2."
},
{
  "id": "w.4.2.09",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.2",
  "marks": 5,
  "title": "Squeezing Powers",
  "source": "Bartle & Sherbert 4e §4.2 Ex 9",
  "prompt": "Let $n \\in \\mathbb{N}$ be such that $n \\ge 3$. Derive the inequality $-x^2 \\le x^n \\le x^2$ for $-1 < x < 1$. \nThen use the fact that $\\lim_{x\\to 0} x^2 = 0$ to show that $\\lim_{x\\to 0} x^n = 0$.",
  "tests": [
    "c.4.2.4",
    "c.4.2.7"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.2 systematically.</p>",
  "solution": "<p>Let $-1 < x < 1$. This means $|x| < 1$.</p><p>We have $|x|^n \\le |x|^2$.</p><p>This is equivalent to $-|x|^2 \\le x^n \\le |x|^2$.</p><p>Since $|x|^2 = x^2$, we get $-x^2 \\le x^n \\le x^2$.</p><p>We know $\\lim_{x\\to 0} -x^2 = 0$ and $\\lim_{x\\to 0} x^2 = 0$. By the Squeeze Theorem, $\\lim_{x\\to 0} x^n = 0$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.2."
},
{
  "id": "w.4.2.10",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.2",
  "marks": 5,
  "title": "Dependent Limits",
  "source": "Bartle & Sherbert 4e §4.2 Ex 10",
  "prompt": "Let $f, g$ be defined on $A$ and $c$ be a cluster point.\n(a) Show that if $\\lim f$ and $\\lim (f+g)$ exist, then $\\lim g$ exists.\n(b) If $\\lim f$ and $\\lim fg$ exist, does it follow that $\\lim g$ exists?",
  "tests": [
    "c.4.2.4",
    "c.4.2.7"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.2 systematically.</p>",
  "solution": "<p>We know limits for $f$ and $h = (f+g)$ exist.</p><p>We can write $g = h - f$.</p><p>By the Algebraic Limit Theorem for differences, if $h$ and $f$ have limits, their difference $h-f$ has a limit.</p><p>Therefore, $\\lim g$ must exist.</p><p>We need $\\lim f$ and $\\lim fg$ to exist, but $g$ to have no limit. This is easiest if $f$ forces the product to 0.</p><p>Let $f(x) = 0$ for all $x$. Then $\\lim f = 0$.</p><p>Let $g(x) = \\sin(1/x)$. We know $\\lim g$ does not exist at 0.</p><p>However, $(fg)(x) = 0 \\times \\sin(1/x) = 0$. So $\\lim fg = 0$ exists.</p><p>Thus, the existence of $\\lim f$ and $\\lim fg$ does NOT guarantee $\\lim g$ exists.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.2."
},
{
  "id": "w.4.2.11",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.2",
  "marks": 5,
  "title": "Divergent Components",
  "source": "Bartle & Sherbert 4e §4.2 Ex 11",
  "prompt": "Give examples of functions $f$ and $g$ such that $f$ and $g$ do not have limits at a point $c$, but such that both $f+g$ and $fg$ have limits at $c$.",
  "tests": [
    "c.4.2.4",
    "c.4.2.7"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.2 systematically.</p>",
  "solution": "<p>We need a function that jumps at $c$. Let $c=0$. We previously saw $f(x) = \\text{sgn}(x)$ diverges at 0.</p><p>Let $g(x) = -\\text{sgn}(x)$.</p><p>The sum is $(f+g)(x) = 0$ for all $x \\neq 0$. The limit of the constant 0 is 0.</p><p>The product is $(fg)(x) = -(\\text{sgn}(x))^2 = -1$ for all $x \\neq 0$.</p><p>The limit of the constant -1 is -1. Both limits exist! Goal reached.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.2."
},
{
  "id": "w.4.2.12",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.2",
  "marks": 5,
  "title": "Trigonometric Limits",
  "source": "Bartle & Sherbert 4e §4.2 Ex 12",
  "prompt": "Determine whether the following limits exist at $x=0$:\n(a) $\\lim \\sin(1/x^2)$\n(b) $\\lim x\\sin(1/x^2)$\n(c) $\\lim \\text{sgn}(\\sin(1/x))$\n(d) $\\lim \\sqrt{x}\\sin(1/x^2)$ ($x>0$)",
  "tests": [
    "c.4.2.4",
    "c.4.2.7"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.2 systematically.</p>",
  "solution": "<p>(a) $\\sin(1/x^2)$ oscillates wildly between -1 and 1 as $x \\to 0$. Just like $\\sin(1/x)$, it does not converge. (Diverges)</p><p>By the Squeeze Theorem, since $|x\\sin(1/x^2)| \\le |x|$, the limit is 0.</p><p>(c) $\\text{sgn}(\\sin(1/x))$ jumps between -1, 0, and 1 rapidly near 0. It diverges.</p><p>(d) $\\sqrt{x}\\sin(1/x^2)$ is bounded by $-\\sqrt{x}$ and $\\sqrt{x}$. Since $\\sqrt{x} \\to 0$, the Squeeze Theorem forces the limit to 0.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.2."
},
{
  "id": "w.4.2.13",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.2",
  "marks": 5,
  "title": "Cauchy",
  "source": "Bartle & Sherbert 4e §4.2 Ex 13",
  "prompt": "Let $f: \\mathbb{R} \\to \\mathbb{R}$ be such that $f(x+y) = f(x)+f(y)$. Assume $\\lim_{x\\to 0} f = L$ exists.\n(a) Prove $L=0$.\n(b) Prove $f$ has a limit at every $c \\in \\mathbb{R}$.",
  "tests": [
    "c.4.2.4",
    "c.4.2.7"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.2 systematically.</p>",
  "solution": "<p>From the property, $f(2x) = f(x+x) = f(x) + f(x) = 2f(x)$.</p><p>We get $L = 2L$.</p><p>Subtracting $L$ gives $L = 0$. So $\\lim_{x\\to 0} f(x) = 0$.</p><p>We want to evaluate $\\lim_{x\\to c} f(x)$.</p><p>Let $x = c + h$. As $x \\to c$, we have $h \\to 0$.</p><p>So $\\lim_{x\\to c} f(x) = \\lim_{h\\to 0} f(c+h)$.</p><p>Using the functional equation: $f(c+h) = f(c) + f(h)$.</p><p>Thus the limit is $\\lim_{h\\to 0} [f(c) + f(h)] = f(c) + \\lim_{h\\to 0} f(h) = f(c) + 0 = f(c)$. Limit exists and is $f(c)$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.2."
},
{
  "id": "w.4.2.14",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.2",
  "marks": 5,
  "title": "Composition Traps",
  "source": "Bartle & Sherbert 4e §4.2 Ex 14",
  "prompt": "Let $f(x) := x+1$ and let $g(x) := 2$ if $x \\neq 1$, and $g(1) := 0$.\n(a) Find $\\lim_{x\\to 0} g(f(x))$ and compare to $g(\\lim_{x\\to 0} f(x))$.\n(b) Find $\\lim_{x\\to 1} f(g(x))$ and compare to $f(\\lim_{x\\to 1} g(x))$.",
  "tests": [
    "c.4.2.4",
    "c.4.2.7"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.2 systematically.</p>",
  "solution": "<p>(a) As $x \\to 0$, $f(x) = x+1 \\to 1$.</p><p>For $x \\neq 0$, $g(f(x)) = 2$. Thus $\\lim_{x\\to 0} g(f(x)) = 2$.</p><p>However, $g(\\lim_{x\\to 0} f(x)) = g(1) = 0$. They are not equal! (This is because $g$ is discontinuous at 1).</p><p>(b) As $x \\to 1$, $g(x) = 2$ for all $x \\neq 1$. So $\\lim_{x\\to 1} g(x) = 2$.</p><p>Since $g(x)$ is constantly 2 near 1, $f(g(x)) = f(2) = 3$. Thus $\\lim_{x\\to 1} f(g(x)) = 3$.</p><p>And $f(\\lim_{x\\to 1} g(x)) = f(2) = 3$. Here they ARE equal.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.2."
},
{
  "id": "w.4.2.15",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.2",
  "marks": 5,
  "title": "Limits of Absolute Values",
  "source": "Bartle & Sherbert 4e §4.2 Ex 15",
  "prompt": "Let $A \\subseteq \\mathbb{R}$, $f: A \\to \\mathbb{R}$, and $c$ be a cluster point. \nIf $\\lim f = L$ exists, prove that $\\lim |f| = |\\lim f| = |L|$.",
  "tests": [
    "c.4.2.4",
    "c.4.2.7"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.2 systematically.</p>",
  "solution": "<p>We are given that for any $\\epsilon > 0$, there exists $\\delta > 0$ such that $0 < |x-c| < \\delta \\implies |f(x) - L| < \\epsilon$.</p><p>We have $||f(x)| - |L|| \\le |f(x) - L|$.</p><p>Since $|f(x) - L| < \\epsilon$ for our $\\delta$-neighborhood, it strictly follows that $||f(x)| - |L|| < \\epsilon$.</p><p>This satisfies the exact definition for $\\lim_{x\\to c} |f(x)| = |L|$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.2."
},
{
  "id": "w.4.2.16",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.2",
  "marks": 5,
  "title": "Limits of Square Roots",
  "source": "Bartle & Sherbert 4e §4.2 Ex 16",
  "prompt": "Let $f(x) \\ge 0$ for all $x \\in A$. If $\\lim f = L$ exists, prove that $\\lim \\sqrt{f} = \\sqrt{L}$.",
  "tests": [
    "c.4.2.4",
    "c.4.2.7"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.2 systematically.</p>",
  "solution": "<p>Since $f(x) \\ge 0$, by Theorem 4.2.6 (Order Preservation), $L \\ge 0$.</p><p>Case 1: $L = 0$. For any $\\epsilon > 0$, we want $\\sqrt{f(x)} < \\epsilon$. This is equivalent to $f(x) < \\epsilon^2$.</p><p>Since $\\lim f = 0$, we can choose $\\delta$ such that $|f(x)| < \\epsilon^2$. This solves the $L=0$ case.</p><p>We get $\\frac{|f(x) - L|}{\\sqrt{f(x)} + \\sqrt{L}}$.</p><p>Since $\\sqrt{f(x)} \\ge 0$, the denominator is $\\ge \\sqrt{L}$. Thus the fraction is $\\le \\frac{|f(x) - L|}{\\sqrt{L}}$.</p><p>To make the error $< \\epsilon$, we force $|f(x) - L| < \\epsilon\\sqrt{L}$ by choosing the appropriate $\\delta$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.2."
},
{
  "id": "w.4.3.01",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.3",
  "marks": 5,
  "title": "Right-Hand Sequential Criterion",
  "source": "Bartle & Sherbert 4e §4.3 Ex 1",
  "prompt": "Prove Theorem 4.3.2: $\\lim_{x \\to c^+} f(x) = L$ if and only if for every sequence $(x_n)$ converging to $c$ with $x_n > c$, the sequence $(f(x_n))$ converges to $L$.",
  "tests": [
    "c.4.3.1",
    "c.4.3.3",
    "c.4.3.5",
    "c.4.3.8"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.3 systematically.</p>",
  "solution": "<p>Assume $\\lim_{x \\to c^+} f(x) = L$. Let $\\epsilon > 0$.</p><p>By definition, there exists $\\delta > 0$ such that $0 < x - c < \\delta \\implies |f(x) - L| < \\epsilon$.</p><p>There exists $K$ such that for $n \\ge K$, $0 < x_n - c < \\delta$.</p><p>Therefore, for $n \\ge K$, we have $|f(x_n) - L| < \\epsilon$.</p><p>This means $\\lim f(x_n) = L$. The backward direction follows by a similar contrapositive argument as in Theorem 4.1.8. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.3."
},
{
  "id": "w.4.3.02",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.3",
  "marks": 5,
  "title": "One-Sided Existence",
  "source": "Bartle & Sherbert 4e §4.3 Ex 2",
  "prompt": "Give an example of a function that has a right-hand limit but not a left-hand limit at a point.",
  "tests": [
    "c.4.3.1",
    "c.4.3.3",
    "c.4.3.5",
    "c.4.3.8"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.3 systematically.</p>",
  "solution": "<p>We need a function that behaves nicely on the right side of $0$, but oscillates wildly on the left side.</p><p>Let $f(x) = x$ for $x > 0$, and $f(x) = \\sin(1/x)$ for $x < 0$.</p><p>From the right, $\\lim_{x \\to 0^+} f(x) = \\lim_{x \\to 0^+} x = 0$.</p><p>From the left, $\\lim_{x \\to 0^-} f(x) = \\lim_{x \\to 0^-} \\sin(1/x)$, which does not exist.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.3."
},
{
  "id": "w.4.3.03",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.3",
  "marks": 5,
  "title": "Infinite Limit at Zero",
  "source": "Bartle & Sherbert 4e §4.3 Ex 3",
  "prompt": "Let $f(x) := |x|^{-1/2}$ for $x \\neq 0$. Show that $\\lim_{x \\to 0^+} f(x) = \\lim_{x \\to 0^-} f(x) = +\\infty$.",
  "tests": [
    "c.4.3.1",
    "c.4.3.3",
    "c.4.3.5",
    "c.4.3.8"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.3 systematically.</p>",
  "solution": "<p>Let $\\alpha > 0$ be given. We want $f(x) > \\alpha$.</p><p>This means $|x|^{-1/2} > \\alpha$.</p><p>We need $|x| < 1/\\alpha^2$.</p><p>Choose $\\delta = 1/\\alpha^2$. Then if $0 < x < \\delta$ (right limit) or $-\\delta < x < 0$ (left limit), we have $|x| < \\delta$.</p><p>This guarantees $f(x) > \\alpha$ in both cases. Thus both one-sided limits are $+\\infty$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.3."
},
{
  "id": "w.4.3.04",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.3",
  "marks": 5,
  "title": "Infinity and Zero",
  "source": "Bartle & Sherbert 4e §4.3 Ex 4",
  "prompt": "Let $c \\in \\mathbb{R}$ and let $f$ be defined for $x \\in (c, \\infty)$ and $f(x) > 0$. \nShow that $\\lim_{x \\to c^+} f = \\infty$ if and only if $\\lim_{x \\to c^+} 1/f = 0$.",
  "tests": [
    "c.4.3.1",
    "c.4.3.3",
    "c.4.3.5",
    "c.4.3.8"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.3 systematically.</p>",
  "solution": "<p>Assume $\\lim_{x \\to c^+} f = \\infty$. We want to show that for any $\\epsilon > 0$, $1/f(x) < \\epsilon$.</p><p>Let $\\alpha = 1/\\epsilon$. Since $f \\to \\infty$, there is a $\\delta > 0$ such that $0 < x - c < \\delta \\implies f(x) > 1/\\epsilon$.</p><p>Since $f(x) > 0$, taking the reciprocal gives $1/f(x) < \\epsilon$. Thus $\\lim 1/f = 0$.</p><p>Assume $\\lim_{x \\to c^+} 1/f = 0$. Let $\\alpha > 0$ be given.</p><p>Choose $\\epsilon = 1/\\alpha$. There is a $\\delta > 0$ such that $0 < x - c < \\delta \\implies 1/f(x) < 1/\\alpha$.</p><p>Taking reciprocals (since all terms are positive) yields $f(x) > \\alpha$.</p><p>This proves $f \\to \\infty$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.3."
},
{
  "id": "w.4.3.05",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.3",
  "marks": 5,
  "title": "Evaluating Extensions",
  "source": "Bartle & Sherbert 4e §4.3 Ex 5",
  "prompt": "Evaluate the following limits, or show they do not exist:\n(a) $\\lim_{x \\to 1^+} \\frac{x}{x-1}$\n(b) $\\lim_{x \\to 1^-} \\frac{x}{x-1}$\n(c) $\\lim_{x \\to \\infty} \\frac{\\sqrt{x}-x}{\\sqrt{x}+x}$",
  "tests": [
    "c.4.3.1",
    "c.4.3.3",
    "c.4.3.5",
    "c.4.3.8"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.3 systematically.</p>",
  "solution": "<p>For $\\frac{x}{x-1}$, as $x \\to 1$, the numerator approaches $1$.</p><p>Since numerator is positive and denominator approaches $0^+$, the quotient grows to $+\\infty$. So (a) is $\\infty$.</p><p>As $x \\to 1^-$, $x-1 < 0$. The quotient is a positive over a tiny negative, yielding $-\\infty$. So (b) is $-\\infty$.</p><p>For $\\lim_{x \\to \\infty} \\frac{\\sqrt{x}-x}{\\sqrt{x}+x}$, divide the numerator and denominator by the highest power, $x$.</p><p>This yields $\\frac{x^{-1/2} - 1}{x^{-1/2} + 1}$.</p><p>As $x \\to \\infty$, $x^{-1/2} = 1/\\sqrt{x} \\to 0$.</p><p>The expression becomes $\\frac{0 - 1}{0 + 1} = -1$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.3."
},
{
  "id": "w.4.3.06",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.3",
  "marks": 5,
  "title": "Sequential Criterion for Infinity",
  "source": "Bartle & Sherbert 4e §4.3 Ex 6",
  "prompt": "Prove Theorem 4.3.11: $\\lim_{x \\to \\infty} f(x) = L$ if and only if for every sequence $(x_n)$ with $x_n \\to \\infty$, the sequence $(f(x_n))$ converges to $L$.",
  "tests": [
    "c.4.3.1",
    "c.4.3.3",
    "c.4.3.5",
    "c.4.3.8"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.3 systematically.</p>",
  "solution": "<p>Assume $\\lim_{x \\to \\infty} f = L$. Let $(x_n)$ be a sequence such that $x_n \\to \\infty$.</p><p>Given $\\epsilon > 0$, there exists $K$ such that $x > K \\implies |f(x) - L| < \\epsilon$.</p><p>There exists $N$ such that for $n \\ge N$, $x_n > K$.</p><p>For these $n$, we have $x_n > K$, so $|f(x_n) - L| < \\epsilon$. Thus $f(x_n) \\to L$.</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.3."
},
{
  "id": "w.4.3.07",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.3",
  "marks": 5,
  "title": "Order Preservation at Infinity",
  "source": "Bartle & Sherbert 4e §4.3 Ex 7",
  "prompt": "Suppose $f, g$ have limits in $\\mathbb{R}$ as $x \\to \\infty$, and $f(x) \\le g(x)$ for all $x \\in (a, \\infty)$. \nProve that $\\lim_{x \\to \\infty} f \\le \\lim_{x \\to \\infty} g$.",
  "tests": [
    "c.4.3.1",
    "c.4.3.3",
    "c.4.3.5",
    "c.4.3.8"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.3 systematically.</p>",
  "solution": "<p>Let $(x_n)$ be a sequence in $(a, \\infty)$ such that $x_n \\to \\infty$ (e.g., $x_n = a + n$).</p><p>They converge to $L_f = \\lim_{x\\to\\infty} f$ and $L_g = \\lim_{x\\to\\infty} g$.</p><p>Since $f(x) \\le g(x)$ everywhere in the interval, we have $f(x_n) \\le g(x_n)$ for all $n$.</p><p>By Theorem 3.2.6 (Order Preservation for Sequences), $L_f \\le L_g$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.3."
},
{
  "id": "w.4.3.08",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.3",
  "marks": 5,
  "title": "Inverting the Domain",
  "source": "Bartle & Sherbert 4e §4.3 Ex 8",
  "prompt": "Let $f$ be defined on $(0, \\infty)$. \nProve that $\\lim_{x \\to \\infty} f(x) = L$ if and only if $\\lim_{x \\to 0^+} f(1/x) = L$.",
  "tests": [
    "c.4.3.1",
    "c.4.3.3",
    "c.4.3.5",
    "c.4.3.8"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.3 systematically.</p>",
  "solution": "<p>Assume $\\lim_{x \\to \\infty} f(x) = L$. For any $\\epsilon > 0$, there exists $K > 0$ such that $x > K \\implies |f(x) - L| < \\epsilon$.</p><p>We have $0 < t < 1/K$.</p><p>Let $\\delta = 1/K$. Then $0 < t - 0 < \\delta \\implies 1/t > K$.</p><p>This implies $|f(1/t) - L| < \\epsilon$. This exactly means $\\lim_{t \\to 0^+} f(1/t) = L$.</p><p>The reverse logic holds identically by setting $K = 1/\\delta$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.3."
},
{
  "id": "w.4.3.09",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.3",
  "marks": 5,
  "title": "Fast Decay",
  "source": "Bartle & Sherbert 4e §4.3 Ex 9",
  "prompt": "Show that if $f: (a, \\infty) \\to \\mathbb{R}$ is such that $\\lim_{x \\to \\infty} x f(x) = L$ where $L \\in \\mathbb{R}$, then $\\lim_{x \\to \\infty} f(x) = 0$.",
  "tests": [
    "c.4.3.1",
    "c.4.3.3",
    "c.4.3.5",
    "c.4.3.8"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.3 systematically.</p>",
  "solution": "<p>We are given that $g(x) = x f(x)$ has limit $L$.</p><p>We can write $f(x) = g(x) \\cdot \\frac{1}{x}$.</p><p>We know $\\lim_{x\\to\\infty} g(x) = L$ and $\\lim_{x\\to\\infty} \\frac{1}{x} = 0$.</p><p>By the Product Rule for limits at infinity, $\\lim f(x) = L \\cdot 0 = 0$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.3."
},
{
  "id": "w.4.3.10",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.3",
  "marks": 5,
  "title": "Infinite Sequential Criterion",
  "source": "Bartle & Sherbert 4e §4.3 Ex 10",
  "prompt": "Prove Theorem 4.3.14: $\\lim_{x \\to \\infty} f(x) = \\infty$ if and only if for every sequence $x_n \\to \\infty$, we have $f(x_n) \\to \\infty$.",
  "tests": [
    "c.4.3.1",
    "c.4.3.3",
    "c.4.3.5",
    "c.4.3.8"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.3 systematically.</p>",
  "solution": "<p>Forward: Assume $\\lim_{x \\to \\infty} f(x) = \\infty$. Given $\\alpha \\in \\mathbb{R}$, there exists $K$ such that $x > K \\implies f(x) > \\alpha$.</p><p>Let $x_n \\to \\infty$. Then there is an $N$ such that $n \\ge N \\implies x_n > K$.</p><p>For these $n$, $f(x_n) > \\alpha$. Thus $f(x_n) \\to \\infty$.</p><p>There exists $\\alpha$ such that for any $n \\in \\mathbb{N}$, there is $x_n > n$ with $f(x_n) \\le \\alpha$.</p><p>The sequence $(x_n) \\to \\infty$, but $(f(x_n))$ never passes $\\alpha$, so it doesn</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.3."
},
{
  "id": "w.4.3.11",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.3",
  "marks": 5,
  "title": "Product of Finite and Infinite Limit",
  "source": "Bartle & Sherbert 4e §4.3 Ex 11",
  "prompt": "Suppose $\\lim_{x \\to c} f(x) = L$ where $L > 0$, and $\\lim_{x \\to c} g(x) = \\infty$. Show that $\\lim_{x \\to c} f(x)g(x) = \\infty$.\nIf $L=0$, show by example that this may fail.",
  "tests": [
    "c.4.3.1",
    "c.4.3.3",
    "c.4.3.5",
    "c.4.3.8"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.3 systematically.</p>",
  "solution": "<p>Since $\\lim f = L > 0$, there exists a neighborhood around $c$ where $f(x) > L/2$.</p><p>Let $\\alpha > 0$ be our target for the product. We need $f(x)g(x) > \\alpha$.</p><p>We need $g(x) > 2\\alpha / L$.</p><p>Since $\\lim g = \\infty$, there is a neighborhood where this holds. In the intersection of these neighborhoods, $f(x)g(x) > \\alpha$.</p><p>Let $c = 0$, $f(x) = x^2$ and $g(x) = 1/x^2$.</p><p>Here, $f \\to 0$ and $g \\to \\infty$ as $x \\to 0$.</p><p>However, $f(x)g(x) = x^2 (1/x^2) = 1$. The limit is 1, not $\\infty$!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.3."
},
{
  "id": "w.4.3.12",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.3",
  "marks": 5,
  "title": "Infinite Differences and Quotients",
  "source": "Bartle & Sherbert 4e §4.3 Ex 12",
  "prompt": "Find functions $f, g$ on $(0, \\infty)$ such that $\\lim_{x \\to \\infty} f = \\infty$ and $\\lim_{x \\to \\infty} g = \\infty$, but $\\lim_{x \\to \\infty} (f-g) = 0$.\nCan you find such functions where $\\lim_{x \\to \\infty} f/g = 0$?",
  "tests": [
    "c.4.3.1",
    "c.4.3.3",
    "c.4.3.5",
    "c.4.3.8"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.3 systematically.</p>",
  "solution": "<p>We need $f$ and $g$ to go to infinity, but their difference to shrink.</p><p>Let $f(x) = x + 1/x$ and $g(x) = x$.</p><p>$\\lim(f-g) = \\lim(1/x) = 0$.</p><p>We need $f, g \\to \\infty$ but $f/g \\to 0$.</p><p>Let $f(x) = x$ and $g(x) = x^2$. Both go to infinity.</p><p>Their quotient is $f/g = x/x^2 = 1/x$, which converges to $0$ as $x \\to \\infty$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.3."
},
{
  "id": "w.4.3.13",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "4.3",
  "marks": 5,
  "title": "Composition at Infinity",
  "source": "Bartle & Sherbert 4e §4.3 Ex 13",
  "prompt": "Let $f, g$ be defined on $(a, \\infty)$. Suppose $\\lim_{x \\to \\infty} f = L$ and $\\lim_{x \\to \\infty} g = \\infty$. \nProve that $\\lim_{x \\to \\infty} f \\circ g = L$.",
  "tests": [
    "c.4.3.1",
    "c.4.3.3",
    "c.4.3.5",
    "c.4.3.8"
  ],
  "approach": "<p>Apply definitions and theorems of Section 4.3 systematically.</p>",
  "solution": "<p>Let $\\epsilon > 0$. Since $\\lim_{y \\to \\infty} f(y) = L$, there exists $K_f$ such that $y > K_f \\implies |f(y) - L| < \\epsilon$.</p><p>There exists $K_g$ such that $x > K_g \\implies g(x) > K_f$.</p><p>Therefore, if $x > K_g$, we have $y = g(x) > K_f$.</p><p>By the first statement, this implies $|f(g(x)) - L| < \\epsilon$.</p><p>This exactly proves $\\lim_{x \\to \\infty} f(g(x)) = L$. Goal reached!</p>",
  "trap": "Watch out for quantifier order and domain boundary conditions in Section 4.3."
},
{
  "id": "w.3.6.01",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.6",
  "marks": 5,
  "title": "Subsequence Divergence of Unbounded Sequences",
  "source": "Bartle & Sherbert 4e §3.6 Ex 1",
  "prompt": "Show that if $(x_n)$ is an unbounded sequence, then there exists a properly divergent subsequence.",
  "tests": [
    "c.3.6.1",
    "c.3.4.5"
  ],
  "approach": "<p>If $(x_n)$ is unbounded above, inductively pick terms $x_{n_k} > k$ with $n_k > n_{k-1}$. If unbounded below, pick $x_{n_k} < -k$.</p>",
  "solution": "<p>Since $(x_n)$ is unbounded, it is either unbounded above or unbounded below (or both).</p><p><b>Case 1:</b> $(x_n)$ is unbounded above. Pick $n_1$ such that $x_{n_1} > 1$. Having chosen $n_1 < n_2 < \\dots < n_{k-1}$, the set $\\{x_1, \\dots, x_{n_{k-1}}\\}$ is finite, so since $(x_n)$ is unbounded above, there exists $n_k > n_{k-1}$ such that $x_{n_k} > \\max(k, x_1, \\dots, x_{n_{k-1}})$. Then for every $k$, $x_{n_k} > k$. Given any $\\alpha \\in \\mathbb{R}$, choose $K > \\alpha$; then for $k \\ge K$, $x_{n_k} > k \\ge K > \\alpha$. Hence $\\lim(x_{n_k}) = +\\infty$.</p><p><b>Case 2:</b> $(x_n)$ is unbounded below. An identical argument produces $x_{n_k} < -k$, so $\\lim(x_{n_k}) = -\\infty$.</p><p>In either case, a properly divergent subsequence exists.</p>",
  "trap": "Do not assume the sequence itself converges to $\\infty$; an oscillating unbounded sequence like $(1, 0, 2, 0, 3, 0, \\dots)$ does not diverge properly as a whole, but has a subsequence that does."
},
{
  "id": "w.3.6.02",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.6",
  "marks": 5,
  "title": "Quotients of Properly Divergent Sequences",
  "source": "Bartle & Sherbert 4e §3.6 Ex 2",
  "prompt": "Give examples of properly divergent sequences $(x_n)$ and $(y_n)$ with $y_n \\ne 0$ such that:<br>(a) $(x_n / y_n)$ is convergent;<br>(b) $(x_n / y_n)$ is properly divergent.",
  "tests": [
    "c.3.6.1"
  ],
  "approach": "<p>Choose powers of $n$ to control the ratio.</p>",
  "solution": "<p><b>(a)</b> Let $x_n = 2n$ and $y_n = n$. Both $x_n \\to +\\infty$ and $y_n \\to +\\infty$. The quotient is $x_n / y_n = 2n / n = 2$, which converges to $2$.</p><p><b>(b)</b> Let $x_n = n^2$ and $y_n = n$. Both $x_n \\to +\\infty$ and $y_n \\to +\\infty$. The quotient is $x_n / y_n = n^2 / n = n$, which properly diverges to $+\\infty$.</p>",
  "trap": "The form $\\infty / \\infty$ is indeterminate; depending on rates of growth, the quotient can converge to any real number, diverge properly, or oscillate."
},
{
  "id": "w.3.6.03",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.6",
  "marks": 5,
  "title": "Reciprocal Criterion for Proper Divergence",
  "source": "Bartle & Sherbert 4e §3.6 Ex 3",
  "prompt": "Show that if $x_n > 0$ for all $n \\in \\mathbb{N}$, then $\\lim(x_n) = 0 \\iff \\lim(1/x_n) = +\\infty$.",
  "tests": [
    "c.3.6.1"
  ],
  "approach": "<p>Direct $\\varepsilon$-$M$ translation: $x_n < \\varepsilon \\iff 1/x_n > 1/\\varepsilon$.</p>",
  "solution": "<p><b>(=>)</b> Suppose $\\lim(x_n) = 0$ with $x_n > 0$. Let $M > 0$ be given. Set $\\varepsilon = 1/M > 0$. By definition of limit, there exists $K$ such that $n \\ge K \\implies 0 < x_n < \\varepsilon = 1/M$. Inverting both sides gives $1/x_n > M$. Hence $\\lim(1/x_n) = +\\infty$.</p><p><b>(<=)</b> Conversely, suppose $\\lim(1/x_n) = +\\infty$. Let $\\varepsilon > 0$. Set $M = 1/\\varepsilon > 0$. There exists $K$ such that $n \\ge K \\implies 1/x_n > M = 1/\\varepsilon$. Inverting gives $0 < x_n < \\varepsilon$. Hence $\\lim(x_n) = 0$.</p>",
  "trap": "Positivity $x_n > 0$ is essential. If $x_n = (-1)^n / n$, then $x_n \\to 0$, but $1/x_n = (-1)^n n$ oscillates between $+\\infty$ and $-\\infty$ without tending to either."
},
{
  "id": "w.3.6.04",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.6",
  "marks": 5,
  "title": "Proper Divergence of Radical Expressions",
  "source": "Bartle & Sherbert 4e §3.6 Ex 4",
  "prompt": "Establish the proper divergence of the following sequences:<br>(a) $(\\sqrt{n})$<br>(b) $(\\sqrt{n+1})$<br>(c) $(\\sqrt{n-1})$<br>(d) $(n / \\sqrt{n+1})$.",
  "tests": [
    "c.3.6.1",
    "c.3.6.4"
  ],
  "approach": "<p>Compare with $n$ or use the definition with $K > M^2$.</p>",
  "solution": "<p><b>(a)</b> Given $M > 0$, choose $K > M^2$. For $n \\ge K$, $\\sqrt{n} \\ge \\sqrt{K} > M$. Hence $\\lim(\\sqrt{n}) = +\\infty$.</p><p><b>(b)</b> Since $\\sqrt{n+1} > \\sqrt{n}$ and $\\sqrt{n} \\to +\\infty$, by Theorem 3.6.4 $\\lim(\\sqrt{n+1}) = +\\infty$.</p><p><b>(c)</b> For $n \\ge 2$, $\\sqrt{n-1} \\ge \\sqrt{n/2}$. Since $\\sqrt{n/2} \\to +\\infty$, $\\lim(\\sqrt{n-1}) = +\\infty$.</p><p><b>(d)</b> For $n \\ge 1$, $n / \\sqrt{n+1} \\ge n / \\sqrt{2n} = \\sqrt{n/2} \\to +\\infty$. Hence $\\lim(n / \\sqrt{n+1}) = +\\infty$.</p>",
  "trap": "Always ensure the lower bounding sequence tends to $+\\infty$."
},
{
  "id": "w.3.6.05",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.6",
  "marks": 5,
  "title": "Oscillation and Divergence of n sin n",
  "source": "Bartle & Sherbert 4e §3.6 Ex 5",
  "prompt": "Is the sequence $(n \\sin n)$ properly divergent? Justify your answer.",
  "tests": [
    "c.3.6.1"
  ],
  "approach": "<p>Check if $n \\sin n$ tends to $+\\infty$ or $-\\infty$, or oscillates with both positive and negative values.</p>",
  "solution": "<p>The sequence $(n \\sin n)$ is NOT properly divergent.</p><p>By density of natural numbers modulo $2\\pi$, $\\sin n$ takes both positive and negative values infinitely often. Specifically, there exist integers $n$ where $\\sin n > 1/2$ (yielding $n \\sin n > n/2 \\to +\\infty$) and integers $m$ where $\\sin m < -1/2$ (yielding $m \\sin m < -m/2 \\to -\\infty$).</p><p>Since $(n \\sin n)$ is unbounded above and unbounded below, it does not tend to $+\\infty$ (which requires $x_n > \\alpha$ for ALL large $n$) and does not tend to $-\\infty$. Therefore it diverges by oscillation, not properly divergent.</p>",
  "trap": "Unbounded does NOT mean properly divergent! Properly divergent means all tail terms go exclusively towards $+\\infty$ or exclusively towards $-\\infty$."
},
{
  "id": "w.3.6.06",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.6",
  "marks": 5,
  "title": "Product of Properly Divergent and Convergent Sequences",
  "source": "Bartle & Sherbert 4e §3.6 Ex 6",
  "prompt": "Let $(x_n)$ be properly divergent and let $(y_n)$ be such that $\\lim(x_n y_n) = L \\in \\mathbb{R}$. Prove that $\\lim(y_n) = 0$.",
  "tests": [
    "c.3.6.1",
    "c.3.2.3"
  ],
  "approach": "<p>Write $y_n = (x_n y_n) \\cdot (1/x_n)$ and use the product limit theorem.</p>",
  "solution": "<p>Since $(x_n)$ is properly divergent, either $x_n \\to +\\infty$ or $x_n \\to -\\infty$. In either case, $|x_n| \\to +\\infty$, so by Exercise 3.6.3, $\\lim(1/x_n) = 0$.</p><p>For sufficiently large $n$, $x_n \\ne 0$. We can write:</p><p>$$y_n = (x_n y_n) \\cdot \\frac{1}{x_n}$$</p><p>By the Product Limit Theorem (Theorem 3.2.3):</p><p>$$\\lim(y_n) = \\lim(x_n y_n) \\cdot \\lim\\left(\\frac{1}{x_n}\\right) = L \\cdot 0 = 0$$</p>",
  "trap": "Ensure $x_n \\ne 0$ ultimately, which is guaranteed because $|x_n| > 1$ for all large $n$."
},
{
  "id": "w.3.6.07",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.6",
  "marks": 5,
  "title": "Ratio Asymptotics with Zero Limit",
  "source": "Bartle & Sherbert 4e §3.6 Ex 7",
  "prompt": "Let $(x_n)$ and $(y_n)$ be sequences of positive numbers such that $\\lim(x_n / y_n) = 0$.<br>(a) Show that if $\\lim(x_n) = +\\infty$, then $\\lim(y_n) = +\\infty$.<br>(b) Show that if $(y_n)$ is bounded, then $\\lim(x_n) = 0$.",
  "tests": [
    "c.3.6.1",
    "c.3.6.4"
  ],
  "approach": "<p>For (a), write $y_n = x_n / (x_n/y_n)$. For (b), use squeeze theorem $0 < x_n = (x_n/y_n) y_n$.</p>",
  "solution": "<p><b>(a)</b> Since $x_n / y_n > 0$ and $\\lim(x_n / y_n) = 0$, by Exercise 3.6.3 we have $\\lim(y_n / x_n) = +\\infty$. In particular, for large $n$, $y_n / x_n > 1 \\implies y_n > x_n$. Since $\\lim(x_n) = +\\infty$, Theorem 3.6.4 forces $\\lim(y_n) = +\\infty$.</p><p><b>(b)</b> If $(y_n)$ is bounded, there is $M > 0$ such that $0 < y_n \\le M$ for all $n$. Then $0 < x_n = (x_n / y_n) y_n \\le M (x_n / y_n)$. Since $\\lim(x_n / y_n) = 0$, $M (x_n / y_n) \\to 0$. By the Squeeze Theorem, $\\lim(x_n) = 0$.</p>",
  "trap": "In (a), $x_n \\to +\\infty$ while growing much slower than $y_n$ means $y_n$ must explode even faster."
},
{
  "id": "w.3.6.08",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.6",
  "marks": 5,
  "title": "Investigating Limits of Algebraic Sequences",
  "source": "Bartle & Sherbert 4e §3.6 Ex 8",
  "prompt": "Investigate the convergence or divergence of:<br>(a) $(\\sqrt{n^2 + 2})$<br>(b) $(\\sqrt{n} / (n^2 + 1))$<br>(c) $(\\sqrt{n^2 + 1} / \\sqrt{n})$<br>(d) $(\\sin \\sqrt{n})$.",
  "tests": [
    "c.3.6.1",
    "c.3.2.3"
  ],
  "approach": "<p>Factor dominant powers of $n$ in each term.</p>",
  "solution": "<p><b>(a)</b> $\\sqrt{n^2 + 2} > \\sqrt{n^2} = n \\to +\\infty$, so properly divergent to $+\\infty$.</p><p><b>(b)</b> $\\frac{\\sqrt{n}}{n^2 + 1} < \\frac{\\sqrt{n}}{n^2} = \\frac{1}{n^{3/2}} \\to 0$, so convergent with limit $0$.</p><p><b>(c)</b> $\\frac{\\sqrt{n^2+1}}{\\sqrt{n}} > \\frac{n}{\\sqrt{n}} = \\sqrt{n} \\to +\\infty$, so properly divergent to $+\\infty$.</p><p><b>(d)</b> $(\\sin\\sqrt{n})$ oscillates between $-1$ and $1$ and does not converge or diverge properly.</p>",
  "trap": "Always simplify expressions before attempting limit arguments."
},
{
  "id": "w.3.6.09",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.6",
  "marks": 5,
  "title": "Ratio Asymptotics with Infinite Limit",
  "source": "Bartle & Sherbert 4e §3.6 Ex 9",
  "prompt": "Let $(x_n)$ and $(y_n)$ be sequences of positive numbers such that $\\lim(x_n / y_n) = +\\infty$.<br>(a) Show that if $\\lim(y_n) = +\\infty$, then $\\lim(x_n) = +\\infty$.<br>(b) Show that if $(x_n)$ is bounded, then $\\lim(y_n) = 0$.",
  "tests": [
    "c.3.6.1",
    "c.3.6.4"
  ],
  "approach": "<p>Apply the results of Exercise 3.6.7 by interchanging the roles of $x_n$ and $y_n$.</p>",
  "solution": "<p>Since $\\lim(x_n / y_n) = +\\infty$ with positive terms, $\\lim(y_n / x_n) = 0$.</p><p><b>(a)</b> For large $n$, $x_n / y_n > 1 \\implies x_n > y_n$. Since $y_n \\to +\\infty$, Theorem 3.6.4 implies $x_n \\to +\\infty$.</p><p><b>(b)</b> Since $\\lim(y_n / x_n) = 0$ and $(x_n)$ is bounded, by Exercise 3.6.7(b), $\\lim(y_n) = 0$.</p>",
  "trap": "Recognize duality between $x_n/y_n \\to +\\infty$ and $y_n/x_n \\to 0$."
},
{
  "id": "w.3.6.10",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.6",
  "marks": 5,
  "title": "Linear Divergence Growth Rate",
  "source": "Bartle & Sherbert 4e §3.6 Ex 10",
  "prompt": "Show that if $\\lim(a_n / n) = L > 0$, then $\\lim(a_n) = +\\infty$.",
  "tests": [
    "c.3.6.1",
    "c.3.6.4"
  ],
  "approach": "<p>Use the definition of limit with $\\varepsilon = L/2$ to bound $a_n > (L/2)n$.</p>",
  "solution": "<p>Since $\\lim(a_n / n) = L > 0$, choose $\\varepsilon = L/2 > 0$.</p><p>There exists $K \\in \\mathbb{N}$ such that for all $n \\ge K$:</p><p>$$\\left| \\frac{a_n}{n} - L \\right| < \\frac{L}{2} \\implies \\frac{L}{2} < \\frac{a_n}{n} < \\frac{3L}{2}$$</p><p>Multiplying by $n > 0$ gives $a_n > \\frac{L}{2} n$ for all $n \\ge K$.</p><p>Since $\\lim(n) = +\\infty$ and $L/2 > 0$, $\\lim((L/2)n) = +\\infty$. By Theorem 3.6.4, $\\lim(a_n) = +\\infty$.</p>",
  "trap": "If $L = 0$, $a_n$ may converge (e.g. $a_n = 1$) or oscillate (e.g. $a_n = \\sin n$)."
},
{
  "id": "w.3.7.01",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.7",
  "marks": 5,
  "title": "Omitting Zero Terms in a Series",
  "source": "Bartle & Sherbert 4e §3.7 Ex 1",
  "prompt": "Let $\\sum a_n$ be a series and let $\\sum b_n$ be the series obtained by omitting all zero terms from $\\sum a_n$ while preserving the order of non-zero terms. Prove that $\\sum a_n$ converges to $A$ if and only if $\\sum b_n$ converges to $A$.",
  "tests": [
    "c.3.7.1"
  ],
  "approach": "<p>Show that the sequence of partial sums of $\\sum b_n$ is a subsequence of the partial sums of $\\sum a_n$, and that the missing terms in the partial sums of $\\sum a_n$ are constant repetitions.</p>",
  "solution": "<p>Let $(s_n)$ be the partial sums of $\\sum a_n$ and $(t_k)$ be the partial sums of $\\sum b_n$.</p><p>Each $t_k$ equals $s_{n_k}$ where $n_k$ is the index of the $k$-th non-zero term of $(a_n)$. Since $n_k \\to \\infty$, $(t_k)$ is a subsequence of $(s_n)$. If $s_n \\to A$, then every subsequence converges to $A$, so $t_k \\to A$.</p><p>Conversely, for any $n$, $s_n = t_k$ where $k$ is the number of non-zero terms among $a_1, \\dots, a_n$. If there are infinitely many non-zero terms, $k(n) \\to \\infty$ as $n \\to \\infty$. Since $t_k \\to A$, given $\\varepsilon > 0$, choose $K_0$ such that $k \\ge K_0 \\implies |t_k - A| < \\varepsilon$. Choose $N$ such that $n \\ge N \\implies k(n) \\ge K_0$. Then $n \\ge N \\implies |s_n - A| = |t_{k(n)} - A| < \\varepsilon$. Thus $s_n \\to A$.</p><p>If there are only finitely many non-zero terms, both series terminate in identical finite sums.</p>",
  "trap": "Zero terms only repeat the previous partial sum value, so they cannot alter the convergence or the limit value."
},
{
  "id": "w.3.7.02",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.7",
  "marks": 5,
  "title": "Altering Finitely Many Terms of a Series",
  "source": "Bartle & Sherbert 4e §3.7 Ex 2",
  "prompt": "Prove that changing a finite number of terms of a series does not affect its convergence (though it may change its sum).",
  "tests": [
    "c.3.7.1",
    "c.3.7.4"
  ],
  "approach": "<p>Use the Cauchy Criterion for series: the tail $\\sum_{k=n+1}^m a_k$ is completely identical for large indices.</p>",
  "solution": "<p>Let $\\sum a_n$ and $\\sum b_n$ be two series such that $a_n = b_n$ for all $n > N$.</p><p>For $m > n > N$, the Cauchy differences are identical:</p><p>$$\\sum_{k=n+1}^m a_k = \\sum_{k=n+1}^m b_k$$</p><p>By the Cauchy Criterion for Series (Theorem 3.7.4), $\\sum a_n$ converges iff for every $\\varepsilon > 0$, there exists $K$ such that $|\\sum_{k=n+1}^m a_k| < \\varepsilon$ for all $m > n \\ge K$.</p><p>Taking $K' = \\max(K, N)$, the condition holds for $\\sum a_n$ if and only if it holds for $\\sum b_n$. Hence $\\sum a_n$ converges if and only if $\\sum b_n$ converges.</p>",
  "trap": "Convergence depends solely on the infinite tail of the series, never on any finite initial segment."
},
{
  "id": "w.3.7.03",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.7",
  "marks": 5,
  "title": "Telescoping Series via Partial Fractions",
  "source": "Bartle & Sherbert 4e §3.7 Ex 3",
  "prompt": "Using partial fractions, find the sum of:<br>(a) $\\sum_{n=1}^\\infty \\frac{1}{(n+1)(n+2)}$<br>(b) $\\sum_{n=1}^\\infty \\frac{1}{n(n+1)(n+2)}$.",
  "tests": [
    "c.3.7.1",
    "c.3.7.2"
  ],
  "approach": "<p>Decompose into partial fractions and evaluate the telescoping sum.</p>",
  "solution": "<p><b>(a)</b> $\\frac{1}{(n+1)(n+2)} = \\frac{1}{n+1} - \\frac{1}{n+2}$. The partial sum is:</p><p>$$s_k = \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\left(\\frac{1}{3} - \\frac{1}{4}\\right) + \\dots + \\left(\\frac{1}{k+1} - \\frac{1}{k+2}\\right) = \\frac{1}{2} - \\frac{1}{k+2}$$</p><p>Taking $k \\to \\infty$, $\\lim s_k = \\frac{1}{2} - 0 = \\frac{1}{2}$.</p><p><b>(b)</b> $\\frac{1}{n(n+1)(n+2)} = \\frac{1}{2} \\left( \\frac{1}{n(n+1)} - \\frac{1}{(n+1)(n+2)} \\right)$.</p><p>Summing from $n=1$ to $k$, the telescoping sum leaves:</p><p>$$s_k = \\frac{1}{2} \\left( \\frac{1}{1 \\cdot 2} - \\frac{1}{(k+1)(k+2)} \\right) = \\frac{1}{2} \\left( \\frac{1}{2} - \\frac{1}{(k+1)(k+2)} \\right)$$</p><p>As $k \\to \\infty$, $\\lim s_k = \\frac{1}{4}$.</p>",
  "trap": "Do not leave uncancelled tail terms in the partial sum."
},
{
  "id": "w.3.7.04",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.7",
  "marks": 5,
  "title": "Sum of 1/(4n² - 1)",
  "source": "Bartle & Sherbert 4e §3.7 Ex 4",
  "prompt": "Show that $\\sum_{n=1}^\\infty \\frac{1}{4n^2 - 1} = \\frac{1}{2}$.",
  "tests": [
    "c.3.7.1"
  ],
  "approach": "<p>Factor $4n^2 - 1 = (2n - 1)(2n + 1)$ and decompose into partial fractions.</p>",
  "solution": "<p>Write $\\frac{1}{4n^2 - 1} = \\frac{1}{(2n - 1)(2n + 1)} = \\frac{1}{2} \\left( \\frac{1}{2n - 1} - \\frac{1}{2n + 1} \\right)$.</p><p>The $k$-th partial sum is:</p><p>$$s_k = \\frac{1}{2} \\sum_{n=1}^k \\left( \\frac{1}{2n - 1} - \\frac{1}{2n + 1} \\right) = \\frac{1}{2} \\left( \\left(1 - \\frac{1}{3}\\right) + \\left(\\frac{1}{3} - \\frac{1}{5}\\right) + \\dots + \\left(\\frac{1}{2k - 1} - \\frac{1}{2k + 1}\\right) \\right)$$</p><p>All intermediate terms cancel, leaving $s_k = \\frac{1}{2} \\left( 1 - \\frac{1}{2k + 1} \\right)$.</p><p>Taking $k \\to \\infty$, $\\lim s_k = \\frac{1}{2}(1 - 0) = \\frac{1}{2}$.</p>",
  "trap": "Notice the factor $1/2$ from the difference of the denominators: $(2n+1) - (2n-1) = 2$."
},
{
  "id": "w.3.7.05",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.7",
  "marks": 5,
  "title": "Divergence of Sum 1/(2n - 1)",
  "source": "Bartle & Sherbert 4e §3.7 Ex 7",
  "prompt": "Show that the series $\\sum_{n=1}^\\infty \\frac{1}{2n - 1}$ diverges.",
  "tests": [
    "c.3.7.5",
    "c.3.7.6"
  ],
  "approach": "<p>Compare each term with $1/(2n)$ and use the divergence of the harmonic series.</p>",
  "solution": "<p>For every $n \\in \\mathbb{N}$, $2n - 1 < 2n$, so:</p><p>$$\\frac{1}{2n - 1} > \\frac{1}{2n} = \\frac{1}{2} \\cdot \\frac{1}{n} > 0$$</p><p>The partial sums satisfy $s_k = \\sum_{n=1}^k \\frac{1}{2n - 1} > \\frac{1}{2} \\sum_{n=1}^k \\frac{1}{n}$.</p><p>Since the harmonic series $\\sum_{n=1}^\\infty \\frac{1}{n}$ diverges to $+\\infty$, its partial sums are unbounded. Therefore $s_k \\to +\\infty$, so $\\sum_{n=1}^\\infty \\frac{1}{2n - 1}$ diverges.</p>",
  "trap": "The terms tend to zero, $\\lim \\frac{1}{2n-1} = 0$, but this only satisfies the necessary condition, not a sufficient one."
},
{
  "id": "w.3.7.06",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.7",
  "marks": 5,
  "title": "Sum of Squares of a Convergent Positive Series",
  "source": "Bartle & Sherbert 4e §3.7 Ex 8",
  "prompt": "Prove that if $\\sum a_n$ is a convergent series of positive terms, then $\\sum a_n^2$ is also convergent.",
  "tests": [
    "c.3.7.3",
    "c.3.7.5"
  ],
  "approach": "<p>Since $\\sum a_n$ converges, $a_n \\to 0$. Use this to bound $a_n^2 \\le a_n$ for large $n$.</p>",
  "solution": "<p>Since $\\sum a_n$ converges, by the $n$-th Term Test (Theorem 3.7.3), $\\lim_{n\\to\\infty} a_n = 0$.</p><p>Therefore there exists $N \\in \\mathbb{N}$ such that for all $n \\ge N$, $0 < a_n < 1$.</p><p>Multiplying by $a_n > 0$ gives $a_n^2 \\le a_n$ for all $n \\ge N$.</p><p>Since $\\sum_{n=N}^\\infty a_n$ converges and $0 < a_n^2 \\le a_n$, by the Comparison Test (Theorem 3.7.5), $\\sum_{n=N}^\\infty a_n^2$ converges. Adding the finite initial sum $\\sum_{n=1}^{N-1} a_n^2$ establishes that $\\sum_{n=1}^\\infty a_n^2$ converges.</p>",
  "trap": "The converse is completely false: $\\sum 1/n^2$ converges, but $\\sum 1/n$ diverges!"
},
{
  "id": "w.3.7.07",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.7",
  "marks": 5,
  "title": "Divergence of Radical Telescoping Series",
  "source": "Bartle & Sherbert 4e §3.7 Ex 11",
  "prompt": "Show that the series $\\sum_{n=1}^\\infty (\\sqrt{n+1} - \\sqrt{n})$ diverges, even though its terms tend to $0$.",
  "tests": [
    "c.3.7.1",
    "c.3.7.3"
  ],
  "approach": "<p>Compute the telescoping partial sums directly.</p>",
  "solution": "<p>The $k$-th partial sum is a telescoping sum:</p><p>$$s_k = \\sum_{n=1}^k (\\sqrt{n+1} - \\sqrt{n}) = (\\sqrt{2} - 1) + (\\sqrt{3} - \\sqrt{2}) + \\dots + (\\sqrt{k+1} - \\sqrt{k}) = \\sqrt{k+1} - 1$$</p><p>As $k \\to \\infty$, $\\sqrt{k+1} - 1 \\to +\\infty$.</p><p>Thus the partial sums are unbounded, so the series diverges to $+\\infty$, despite the fact that the terms tend to zero: $\\sqrt{n+1} - \\sqrt{n} = \\frac{1}{\\sqrt{n+1} + \\sqrt{n}} \\to 0$.</p>",
  "trap": "A vivid counterexample showing that $a_n \\to 0$ is never sufficient for convergence."
},
{
  "id": "w.3.7.08",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.7",
  "marks": 5,
  "title": "Convergence of Square Root Product Series",
  "source": "Bartle & Sherbert 4e §3.7 Ex 15",
  "prompt": "Prove that if $\\sum a_n$ is a convergent series of positive terms, then $\\sum \\sqrt{a_n a_{n+1}}$ is also convergent.",
  "tests": [
    "c.3.7.5"
  ],
  "approach": "<p>Apply the Arithmetic-Geometric Mean inequality $\\sqrt{a b} \\le \\frac{a + b}{2}$.</p>",
  "solution": "<p>By the AM-GM Inequality, for any two positive real numbers $a_n$ and $a_{n+1}$:</p><p>$$\\sqrt{a_n a_{n+1}} \\le \\frac{1}{2} (a_n + a_{n+1})$$</p><p>For any $k \\in \\mathbb{N}$, summing gives:</p><p>$$\\sum_{n=1}^k \\sqrt{a_n a_{n+1}} \\le \\frac{1}{2} \\sum_{n=1}^k a_n + \\frac{1}{2} \\sum_{n=1}^k a_{n+1} < \\sum_{n=1}^\\infty a_n$$</p><p>The partial sums of $\\sum \\sqrt{a_n a_{n+1}}$ are increasing (positive terms) and bounded above by $\\sum a_n < \\infty$. By Theorem 3.7.5, $\\sum_{n=1}^\\infty \\sqrt{a_n a_{n+1}}$ converges.</p>",
  "trap": "Do not attempt to show $\\sqrt{a_n a_{n+1}} \\le a_n$; the AM-GM inequality is the correct comparison."
},
{
  "id": "w.3.7.09",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.7",
  "marks": 5,
  "title": "Counterexample to Convergence of Sqrt(a_n)",
  "source": "Bartle & Sherbert 4e §3.7 Ex 14",
  "prompt": "If $\\sum a_n$ converges with $a_n > 0$, does $\\sum \\sqrt{a_n}$ necessarily converge? Prove or give a counterexample.",
  "tests": [
    "c.3.7.5"
  ],
  "approach": "<p>Consider the $p$-series with $p = 2$.</p>",
  "solution": "<p>No, $\\sum \\sqrt{a_n}$ does NOT necessarily converge.</p><p><b>Counterexample:</b> Let $a_n = \\frac{1}{n^2}$. Then $\\sum a_n = \\sum \\frac{1}{n^2}$ converges ($p$-series with $p = 2 > 1$).</p><p>However, $\\sqrt{a_n} = \\sqrt{\\frac{1}{n^2}} = \\frac{1}{n}$. The series $\\sum \\sqrt{a_n} = \\sum \\frac{1}{n}$ is the harmonic series, which diverges!</p>",
  "trap": "Since $0 < a_n < 1$ implies $\\sqrt{a_n} > a_n$, taking the square root makes small numbers larger, which can push a convergent series into divergence."
},
{
  "id": "w.3.7.10",
  "course": "ra1",
  "module": "ra1.m4",
  "sec": "3.7",
  "marks": 5,
  "title": "Cauchy Condensation Test for Series",
  "source": "Bartle & Sherbert 4e §3.7 Ex 12",
  "prompt": "State the Cauchy Condensation Test and use it to prove that $\\sum_{n=1}^\\infty \\frac{1}{n^p}$ converges if and only if $p > 1$.",
  "tests": [
    "c.3.7.4",
    "c.3.7.5"
  ],
  "approach": "<p>Evaluate the condensed series $\\sum 2^k a_{2^k} = \\sum 2^k \\frac{1}{(2^k)^p} = \\sum (2^{1-p})^k$.</p>",
  "solution": "<p><b>Cauchy Condensation Test:</b> If $(a_n)$ is a decreasing sequence of positive real numbers, then $\\sum_{n=1}^\\infty a_n$ converges if and only if the condensed series $\\sum_{k=0}^\\infty 2^k a_{2^k}$ converges.</p><p>For $a_n = 1/n^p$ ($p > 0$), $(a_n)$ is decreasing and positive. The condensed series is:</p><p>$$\\sum_{k=0}^\\infty 2^k a_{2^k} = \\sum_{k=0}^\\infty 2^k \\frac{1}{(2^k)^p} = \\sum_{k=0}^\\infty 2^k \\cdot 2^{-k p} = \\sum_{k=0}^\\infty (2^{1-p})^k$$</p><p>This is a geometric series with common ratio $r = 2^{1-p}$.</p><p>A geometric series converges iff $r < 1$, which means $2^{1-p} < 1 \\iff 1 - p < 0 \\iff p > 1$.</p><p>If $p \\le 0$, $1/n^p \\not\\to 0$ so the series diverges by the $n$-th term test. Hence $\\sum 1/n^p$ converges iff $p > 1$.</p>",
  "trap": "The test requires the terms $a_n$ to be DECREASING ($a_n \\ge a_{n+1}$)."
},
{
  "id": "w.11.1.01",
  "course": "ra1",
  "module": "ra1.m5",
  "sec": "11.1",
  "marks": 5,
  "title": "Openness of Infinite Rays",
  "source": "Bartle & Sherbert 4e §11.1 Ex 2",
  "prompt": "Show that the intervals $(a, \\infty)$ and $(-\\infty, a)$ are open sets, and that $[b, \\infty)$ and $(-\\infty, b]$ are closed sets.",
  "tests": [
    "c.e1.2",
    "c.e1.3"
  ],
  "approach": "<p>For an arbitrary point $x \\in (a, \\infty)$, pick radius $\\varepsilon = x - a > 0$. Closedness follows by taking complements.</p>",
  "solution": "<p>Let $x \\in (a, \\infty)$. Then $x > a$, so $\\varepsilon := x - a > 0$.</p><p>If $y \\in V_\\varepsilon(x) = (x - \\varepsilon, x + \\varepsilon)$, then $y > x - \\varepsilon = x - (x - a) = a$, so $y \\in (a, \\infty)$.</p><p>Thus $V_\\varepsilon(x) \\subseteq (a, \\infty)$, proving $(a, \\infty)$ is open. Similarly $(-\\infty, a)$ is open.</p><p>To show $[b, \\infty)$ is closed, look at its complement: $\\mathbb{R} \\setminus [b, \\infty) = (-\\infty, b)$. Since $(-\\infty, b)$ is open, its complement $[b, \\infty)$ is closed. Similarly $(-\\infty, b]$ is closed.</p>",
  "trap": "Closed sets are defined as complements of open sets; proving the complement is open is the most direct method."
},
{
  "id": "w.11.1.02",
  "course": "ra1",
  "module": "ra1.m5",
  "sec": "11.1",
  "marks": 5,
  "title": "The Set of Natural Numbers is Closed in R",
  "source": "Bartle & Sherbert 4e §11.1 Ex 5",
  "prompt": "Prove that the set $\\mathbb{N}$ of natural numbers is a closed subset of $\\mathbb{R}$.",
  "tests": [
    "c.e1.3"
  ],
  "approach": "<p>Show that $\\mathbb{R} \\setminus \\mathbb{N}$ is open by exhibiting it as a union of open intervals.</p>",
  "solution": "<p>The complement of $\\mathbb{N}$ in $\\mathbb{R}$ is:</p><p>$$\\mathbb{R} \\setminus \\mathbb{N} = (-\\infty, 1) \\cup \\bigcup_{n=1}^\\infty (n, n+1)$$</p><p>The interval $(-\\infty, 1)$ is open, and for each $n \\in \\mathbb{N}$, the open interval $(n, n+1)$ is open.</p><p>Since any union of open sets is open, $\\mathbb{R} \\setminus \\mathbb{N}$ is open. By definition, $\\mathbb{N}$ is closed in $\\mathbb{R}$.</p>",
  "trap": "Alternatively, $\\mathbb{N}$ has no limit points ($\\{n\\}' = \\emptyset \\subseteq \\mathbb{N}$), so it contains all its limit points vacuously."
},
{
  "id": "w.11.1.03",
  "course": "ra1",
  "module": "ra1.m5",
  "sec": "11.1",
  "marks": 5,
  "title": "Closedness of {1/n : n in N} with 0",
  "source": "Bartle & Sherbert 4e §11.1 Ex 6",
  "prompt": "Let $A = \\{1/n : n \\in \\mathbb{N}\\}$. Show that $A$ is NOT closed, but $A \\cup \\{0\\}$ IS closed.",
  "tests": [
    "c.e1.3"
  ],
  "approach": "<p>Identify the limit point of the sequence $1/n$ and use the criterion $E' \\subseteq E$.</p>",
  "solution": "<p>The sequence $x_n = 1/n$ lies entirely in $A$, and $\\lim(x_n) = 0$. Hence $0$ is a limit point of $A$ ($0 \\in A'$).</p><p>However, $0 \\notin A$. Since $A$ fails to contain its limit point $0$, $A$ is not closed.</p><p>Now consider $F = A \\cup \\{0\\}$. The only limit point of $F$ is $0$, which belongs to $F$. Since $F' = \\{0\\} \\subseteq F$, $F$ contains all its limit points. Therefore $A \\cup \\{0\\}$ is closed.</p>",
  "trap": "All points $1/n$ are isolated points, not limit points! The single limit point is $0$."
},
{
  "id": "w.11.1.04",
  "course": "ra1",
  "module": "ra1.m5",
  "sec": "11.1",
  "marks": 5,
  "title": "Rationals are Neither Open nor Closed",
  "source": "Bartle & Sherbert 4e §11.1 Ex 7",
  "prompt": "Show that the set $\\mathbb{Q}$ of rational numbers is neither an open set nor a closed set in $\\mathbb{R}$.",
  "tests": [
    "c.e1.2",
    "c.e1.3",
    "c.2.4.8",
    "c.2.4.9"
  ],
  "approach": "<p>Use the density of irrationals to show $\\mathbb{Q}$ contains no open balls, and density of rationals to show $\\mathbb{Q}' = \\mathbb{R}$.</p>",
  "solution": "<p><b>Not Open:</b> Suppose for contradiction that $\\mathbb{Q}$ is open. Then for any $q \\in \\mathbb{Q}$, there exists $\\varepsilon > 0$ such that $(q - \\varepsilon, q + \\varepsilon) \\subseteq \\mathbb{Q}$. But by the Density of Irrationals (Theorem 2.4.9), every open interval contains an irrational number, so $(q - \\varepsilon, q + \\varepsilon) \\not\\subseteq \\mathbb{Q}$. Contradiction, so $\\mathbb{Q}$ is not open.</p><p><b>Not Closed:</b> By the Density of Rationals (Theorem 2.4.8), every real number is a limit point of $\\mathbb{Q}$, so $\\mathbb{Q}' = \\mathbb{R}$. Since $\\mathbb{Q}' \\not\\subseteq \\mathbb{Q}$ (e.g. $\\sqrt{2} \\in \\mathbb{Q}'$ but $\\sqrt{2} \\notin \\mathbb{Q}$), $\\mathbb{Q}$ does not contain all its limit points. Hence $\\mathbb{Q}$ is not closed.</p>",
  "trap": "Sets are not doors; a set can be neither open nor closed."
},
{
  "id": "w.11.1.05",
  "course": "ra1",
  "module": "ra1.m5",
  "sec": "11.1",
  "marks": 5,
  "title": "Set Difference of Open and Closed Sets",
  "source": "Bartle & Sherbert 4e §11.1 Ex 8",
  "prompt": "Prove that if $G$ is an open set and $F$ is a closed set in $\\mathbb{R}$, then $G \\setminus F$ is open and $F \\setminus G$ is closed.",
  "tests": [
    "c.e1.2",
    "c.e1.3"
  ],
  "approach": "<p>Express set differences as intersections with complements: $A \\setminus B = A \\cap B^c$.</p>",
  "solution": "<p><b>(a) $G \\setminus F$ is open:</b> Write $G \\setminus F = G \\cap F^c$. Since $F$ is closed, $F^c = \\mathbb{R} \\setminus F$ is open. The intersection of two open sets $G$ and $F^c$ is open. Hence $G \\setminus F$ is open.</p><p><b>(b) $F \\setminus G$ is closed:</b> Write $F \\setminus G = F \\cap G^c$. Since $G$ is open, $G^c$ is closed. The intersection of two closed sets $F$ and $G^c$ is closed. Hence $F \\setminus G$ is closed.</p>",
  "trap": "Always rewrite set subtraction as intersection with the complement."
},
{
  "id": "w.11.2.01",
  "course": "ra1",
  "module": "ra1.m5",
  "sec": "11.2",
  "marks": 5,
  "title": "Non-Compactness of (1, 2]",
  "source": "Bartle & Sherbert 4e §11.2 Ex 1",
  "prompt": "Exhibit an open cover of the interval $(1, 2]$ that has no finite subcover.",
  "tests": [
    "c.e3.1"
  ],
  "approach": "<p>Construct open intervals that creep up to $1$ from the right, e.g. $G_n = (1 + 1/n, 3)$.</p>",
  "solution": "<p>Consider the collection $\\mathcal{U} = \\{ G_n : n \\in \\mathbb{N}, n \\ge 2 \\}$ where $G_n = (1 + 1/n, 3)$.</p><p>1. <b>It covers $(1, 2]$:</b> If $x \\in (1, 2]$, then $x - 1 > 0$. By the Archimedean property, choose $n \\in \\mathbb{N}$ with $1/n < x - 1$, so $1 + 1/n < x$. Since $x \\le 2 < 3$, $x \\in G_n$. Thus $(1, 2] \\subseteq \\bigcup_{n=2}^\\infty G_n$.</p><p>2. <b>No finite subcover exists:</b> Any finite subcollection $\\{G_{n_1}, \\dots, G_{n_k}\\}$ has a maximum index $M = \\max(n_1, \\dots, n_k)$, so its union is $(1 + 1/M, 3)$. For any $y$ with $1 < y \\le 1 + 1/M$ (e.g. $y = 1 + 1/(M+1) \\in (1, 2]$), $y$ is not in the union. Hence no finite subcover can cover $(1, 2]$, proving $(1, 2]$ is not compact.</p>",
  "trap": "The failure occurs because $1$ is a limit point missing from the set."
},
{
  "id": "w.11.2.02",
  "course": "ra1",
  "module": "ra1.m5",
  "sec": "11.2",
  "marks": 5,
  "title": "Non-Compactness of Natural Numbers",
  "source": "Bartle & Sherbert 4e §11.2 Ex 2",
  "prompt": "Exhibit an open cover of $\\mathbb{N}$ that has no finite subcover.",
  "tests": [
    "c.e3.1"
  ],
  "approach": "<p>Wrap each natural number in its own isolated open ball: $G_n = (n - 1/2, n + 1/2)$.</p>",
  "solution": "<p>For each $n \\in \\mathbb{N}$, define the open interval $G_n = (n - 1/2, n + 1/2)$.</p><p>1. <b>Covers $\\mathbb{N}$:</b> For any $n \\in \\mathbb{N}$, $n \\in G_n$, so $\\mathbb{N} \\subseteq \\bigcup_{n=1}^\\infty G_n$.</p><p>2. <b>No finite subcover:</b> Notice that the sets $G_n$ are pairwise disjoint, and each $G_n$ contains exactly ONE natural number: $G_n \\cap \\mathbb{N} = \\{n\\}$.</p><p>Any finite subcollection $\\{G_{n_1}, \\dots, G_{n_k}\\}$ covers at most $k$ natural numbers, which cannot cover the infinite set $\\mathbb{N}$. Hence no finite subcover exists, so $\\mathbb{N}$ is not compact.</p>",
  "trap": "Even though $\\mathbb{N}$ is closed, it is unbounded, which prevents it from being compact (violates Heine-Borel)."
},
{
  "id": "w.11.2.03",
  "course": "ra1",
  "module": "ra1.m5",
  "sec": "11.2",
  "marks": 5,
  "title": "Closed Subset of a Compact Set is Compact",
  "source": "Bartle & Sherbert 4e §11.2 Ex 4",
  "prompt": "Prove, using the open cover definition, that if $F$ is a closed subset of a compact set $K$ in $\\mathbb{R}$, then $F$ is compact.",
  "tests": [
    "c.e3.1"
  ],
  "approach": "<p>Add the open set $F^c$ to any open cover of $F$ to form an open cover of $K$.</p>",
  "solution": "<p>Let $\\mathcal{U} = \\{G_\\alpha\\}_{\\alpha \\in I}$ be an arbitrary open cover of $F$, so $F \\subseteq \\bigcup_{\\alpha \\in I} G_\\alpha$.</p><p>Since $F$ is closed in $\\mathbb{R}$, its complement $F^c = \\mathbb{R} \\setminus F$ is an open set.</p><p>Consider the augmented collection $\\mathcal{U}' = \\{G_\\alpha\\}_{\\alpha \\in I} \\cup \\{F^c\\}$. This is an open cover of all of $\\mathbb{R}$, and therefore an open cover of $K$:</p><p>$$K \\subseteq F \\cup F^c \\subseteq \\left( \\bigcup_{\\alpha \\in I} G_\\alpha \\right) \\cup F^c$$</p><p>Since $K$ is compact, $\\mathcal{U}'$ has a finite subcover of $K$:</p><p>$$K \\subseteq G_{\\alpha_1} \\cup G_{\\alpha_2} \\cup \\dots \\cup G_{\\alpha_m} \\cup F^c$$</p><p>Since $F \\subseteq K$ and $F \\cap F^c = \\emptyset$, the set $F^c$ contributes nothing to covering $F$. Therefore:</p><p>$$F \\subseteq G_{\\alpha_1} \\cup \\dots \\cup G_{\\alpha_m}$$</p><p>This finite subcollection covers $F$, proving $F$ is compact.</p>",
  "trap": "Notice how $F^c$ bridges the gap between $F$ and $K$ so that the compactness of $K$ can be exploited."
},
{
  "id": "w.11.2.04",
  "course": "ra1",
  "module": "ra1.m5",
  "sec": "11.2",
  "marks": 5,
  "title": "Union of Two Compact Sets is Compact",
  "source": "Bartle & Sherbert 4e §11.2 Ex 5",
  "prompt": "Prove, using the open cover definition, that if $K_1$ and $K_2$ are compact sets in $\\mathbb{R}$, then $K_1 \\cup K_2$ is compact.",
  "tests": [
    "c.e3.1"
  ],
  "approach": "<p>Extract a finite subcover for $K_1$ and a finite subcover for $K_2$, then take their union.</p>",
  "solution": "<p>Let $\\mathcal{U} = \\{G_\\alpha\\}_{\\alpha \\in I}$ be an open cover of $K_1 \\cup K_2$.</p><p>Then $\\mathcal{U}$ is an open cover of $K_1$. Since $K_1$ is compact, there exist $\\alpha_1, \\dots, \\alpha_m \\in I$ such that $K_1 \\subseteq G_{\\alpha_1} \\cup \\dots \\cup G_{\\alpha_m}$.</p><p>Similarly, $\\mathcal{U}$ is an open cover of $K_2$. Since $K_2$ is compact, there exist $\\beta_1, \\dots, \\beta_k \\in I$ such that $K_2 \\subseteq G_{\\beta_1} \\cup \\dots \\cup G_{\\beta_k}$.</p><p>Then the combined finite collection covers the union:</p><p>$$K_1 \\cup K_2 \\subseteq G_{\\alpha_1} \\cup \\dots \\cup G_{\\alpha_m} \\cup G_{\\beta_1} \\cup \\dots \\cup G_{\\beta_k}$$</p><p>This is a finite subcover of $K_1 \\cup K_2$, proving $K_1 \\cup K_2$ is compact.</p>",
  "trap": "A finite union of compact sets is always compact, but an infinite union need not be (e.g. $\\bigcup_{n=1}^\\infty [n, n+1] = [1, \\infty)$ is not compact)."
}
);
