### Module I — `data-abs-m1.json`

```json
{
  "meta": {
    "title": "Study Match: Abstract Algebra I (MAT5CJ302)",
    "subject": "Abstract Algebra I · Modules I to IV",
    "home": "Focus",
    "opponent": "Time",
    "version": 1,
    "inlineChecks": false,
    "autoRevealQuestions": true,
    "definitionChecks": true,
    "date": "",
    "sessions": []
  },
  "glossary": [
    {
      "id": "abs-m1-cartesian-product",
      "term": "Cartesian product",
      "aliases": ["ordered pair", "ordered pairs"],
      "definition": "The Cartesian product \\(S \\times S\\) of a set \\(S\\) with itself is the set of all ordered pairs \\((a, b)\\) where both \\(a\\) and \\(b\\) are elements of \\(S\\)."
    },
    {
      "id": "abs-m1-binary-operation",
      "term": "binary operation",
      "aliases": ["operation"],
      "definition": "A binary operation \\(*\\) on a set \\(S\\) is a function from \\(S \\times S\\) into \\(S\\) that assigns to each ordered pair \\((a, b)\\) of elements in \\(S\\) a single element \\(a * b\\) in \\(S\\)."
    },
    {
      "id": "abs-m1-closed",
      "term": "closed under an operation",
      "aliases": ["closed", "induced operation"],
      "definition": "A subset \\(H\\) of \\(S\\) is closed under an operation \\(*\\) if \\(a * b \\in H\\) for all \\(a, b \\in H\\). The operation on \\(H\\) formed by restricting \\(*\\) to \\(H\\) is called the induced operation."
    },
    {
      "id": "abs-m1-commutative",
      "term": "commutative operation",
      "aliases": ["commutative"],
      "definition": "A binary operation \\(*\\) on a set \\(S\\) is commutative if \\(a * b = b * a\\) for all \\(a, b \\in S\\)."
    },
    {
      "id": "abs-m1-associative",
      "term": "associative operation",
      "aliases": ["associative"],
      "definition": "A binary operation \\(*\\) on a set \\(S\\) is associative if \\((a * b) * c = a * (b * c)\\) for all \\(a, b, c \\in S\\)."
    },
    {
      "id": "abs-m1-identity-element",
      "term": "identity element",
      "aliases": ["identity"],
      "definition": "An element \\(e\\) in a set \\(S\\) with binary operation \\(*\\) is an identity element for \\(*\\) if \\(a * e = e * a = a\\) for all \\(a \\in S\\)."
    },
    {
      "id": "abs-m1-inverse-element",
      "term": "inverse element",
      "aliases": ["inverse"],
      "definition": "In a set \\(S\\) with operation \\(*\\) and identity \\(e\\), the inverse of \\(x \\in S\\) is an element \\(x' \\in S\\) such that \\(x * x' = x' * x = e\\)."
    },
    {
      "id": "abs-m1-well-defined",
      "term": "well-defined operation",
      "aliases": ["well defined", "everywhere defined"],
      "definition": "An attempted operation \\(*\\) on a set \\(S\\) is everywhere defined and well defined if it assigns exactly one unambiguous element to every ordered pair in \\(S \\times S\\)."
    },
    {
      "id": "abs-m1-group",
      "term": "group",
      "aliases": ["groups"],
      "definition": "A group \\(\\langle G, * \\rangle\\) is a set \\(G\\), closed under a binary operation \\(*\\), such that \\(*\\) is associative, \\(G\\) has an identity element \\(e\\), and every \\(a \\in G\\) has an inverse \\(a' \\in G\\)."
    },
    {
      "id": "abs-m1-abelian-group",
      "term": "abelian group",
      "aliases": ["abelian"],
      "definition": "A group \\(G\\) is abelian if its binary operation is commutative, meaning \\(a * b = b * a\\) for all \\(a, b \\in G\\)."
    },
    {
      "id": "abs-m1-isometry",
      "term": "isometry of the plane",
      "aliases": ["isometries of the plane", "isometry"],
      "definition": "An isometry of the plane is a function from the plane onto itself that preserves the distance between any two points, such as a rotation, translation, or reflection."
    },
    {
      "id": "abs-m1-general-linear-group",
      "term": "general linear group",
      "aliases": ["GL(n, R)"],
      "definition": "The general linear group of degree \\(n\\), written \\(GL(n, \\mathbb{R})\\), is the nonabelian group of all invertible \\(n \\times n\\) real matrices under matrix multiplication."
    },
    {
      "id": "abs-m1-semigroup-monoid",
      "term": "semigroup and monoid",
      "aliases": ["semigroup", "monoid"],
      "definition": "A semigroup is a set with an associative binary operation, and a monoid is a semigroup that also has an identity element."
    },
    {
      "id": "abs-m1-idempotent",
      "term": "idempotent element",
      "aliases": ["idempotent", "idempotents"],
      "definition": "An element \\(x\\) of a set \\(S\\) with binary operation \\(*\\) is an idempotent for \\(*\\) if \\(x * x = x\\)."
    },
    {
      "id": "abs-m1-group-isomorphism",
      "term": "group isomorphism",
      "aliases": ["isomorphism", "isomorphic", "homomorphism property"],
      "definition": "A group isomorphism from \\(\\langle G_1, *_1 \\rangle\\) to \\(\\langle G_2, *_2 \\rangle\\) is a one-to-one and onto function \\(f: G_1 \\to G_2\\) satisfying the homomorphism property \\(f(a *_1 b) = f(a) *_2 f(b)\\) for all \\(a, b \\in G_1\\)."
    }
  ],
  "match": {
    "periodEnds": [25, 45, 70, 90],
    "breaks": [5, 10, 5]
  },
  "sections": [
    {
      "short": "Module I",
      "title": "Module I · Binary Operations, Isomorphic Structures, and Groups",
      "sheets": [
        {
          "id": "abs-m1-binary-operations",
          "title": "Binary Operations and Properties",
          "icon": "sigma",
          "source": "Fraleigh 8th ed. §1, 1.1–1.18 (7th ed. §2: Binary Operations, 2.1–2.10)",
          "cards": [
            {
              "type": "info",
              "label": "Definition 1.1",
              "title": "Definition 1.1: Binary Operation",
              "defines": ["abs-m1-binary-operation", "abs-m1-cartesian-product"],
              "body": "A binary operation \\(*\\) on a set \\(S\\) is a function mapping \\(S \\times S\\) into \\(S\\). For each ordered pair \\((a, b) \\in S \\times S\\), we write the image \\(*((a, b)) \\in S\\) as \\(a * b\\).",
              "examples": [
                "\\(* : S \\times S \\to S\\)",
                "\\((a, b) \\mapsto a * b\\)"
              ],
              "art": {
                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
                "steps": [
                  {
                    "step": 0,
                    "name": "map",
                    "objects": [
                      { "type": "ellipse", "center": [65, 90], "rx": 48, "ry": 52, "role": "s ok", "name": "SxS" },
                      { "type": "ellipse", "center": [195, 90], "rx": 48, "ry": 52, "role": "s ok", "name": "S" },
                      { "type": "point", "coords": [65, 90], "size": 3.5, "role": "f", "name": "pair" },
                      { "type": "point", "coords": [195, 90], "size": 3.5, "role": "f", "name": "out" },
                      { "type": "arrow", "p1": [75, 90], "p2": [185, 90], "role": "lk", "width": 2.2, "name": "op" },
                      { "type": "label", "coords": [65, 154], "text": "S x S", "size": 11, "align": "center", "role": "t", "name": "SxS" },
                      { "type": "label", "coords": [195, 154], "text": "S", "size": 11, "align": "center", "role": "t", "name": "S" },
                      { "type": "label", "coords": [65, 70], "text": "(a, b)", "size": 11, "align": "center", "role": "t", "name": "pair" },
                      { "type": "label", "coords": [195, 70], "text": "a * b", "size": 11, "align": "center", "role": "t", "name": "out" },
                      { "type": "label", "coords": [130, 104], "text": "*", "size": 12, "align": "center", "role": "t", "name": "op" }
                    ]
                  }
                ]
              }
            },
            {
              "type": "math",
              "label": "Examples 1.2 & 1.3",
              "title": "Standard Operations and Matrices",
              "tex": "+, \\cdot : \\mathbb{R} \\times \\mathbb{R} \\to \\mathbb{R}, \\quad A_{2\\times 2} + B_{2\\times 3}\\text{ is undefined in }M(\\mathbb{R})",
              "body": "Example 1.2: Usual addition \\(+\\) and multiplication \\(\\cdot\\) are binary operations on \\(\\mathbb{R}, \\mathbb{C}, \\mathbb{Z}, \\mathbb{R}^+\\), and \\(\\mathbb{Z}^+\\). Example 1.3: On the set \\(M(\\mathbb{R})\\) of all real matrices of all sizes, matrix addition \\(+\\) is not a binary operation because \\(A + B\\) is not defined when \\(A\\) and \\(B\\) have different sizes."
            },
            {
              "type": "info",
              "label": "Definition 1.4",
              "title": "Definition 1.4: Closed Subset and Induced Operation",
              "defines": ["abs-m1-closed"],
              "body": "Let \\(*\\) be an operation on \\(S\\) and \\(H \\subseteq S\\). The subset \\(H\\) is closed under \\(*\\) if \\(a * b \\in H\\) for all \\(a, b \\in H\\). Restricting \\(*\\) to \\(H\\) then gives the induced operation of \\(*\\) on \\(H\\).",
              "examples": [
                "\\(a, b \\in H \\Rightarrow a * b \\in H\\)"
              ],
              "art": {
                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
                "steps": [
                  {
                    "step": 0,
                    "name": "closure",
                    "objects": [
                      { "type": "ellipse", "center": [130, 90], "rx": 100, "ry": 65, "role": "lk", "name": "S" },
                      { "type": "ellipse", "center": [130, 90], "rx": 62, "ry": 40, "role": "s ok", "name": "H" },
                      { "type": "point", "coords": [100, 95], "size": 3.5, "role": "f", "name": "a" },
                      { "type": "point", "coords": [125, 105], "size": 3.5, "role": "f", "name": "b" },
                      { "type": "point", "coords": [160, 82], "size": 3.5, "role": "f", "name": "ab" },
                      { "type": "label", "coords": [210, 145], "text": "S", "size": 11, "align": "center", "role": "t", "name": "S" },
                      { "type": "label", "coords": [130, 140], "text": "H (closed)", "size": 11, "align": "center", "role": "t", "name": "H" },
                      { "type": "label", "coords": [95, 78], "text": "a", "size": 11, "align": "center", "role": "t", "name": "a" },
                      { "type": "label", "coords": [125, 88], "text": "b", "size": 11, "align": "center", "role": "t", "name": "b" },
                      { "type": "label", "coords": [160, 66], "text": "a * b", "size": 11, "align": "center", "role": "t", "name": "ab" }
                    ]
                  }
                ]
              }
            },
            {
              "type": "math",
              "label": "Examples 1.5–1.7",
              "title": "Testing Closure on Numbers and Functions",
              "tex": "H = \\{n^2 \\mid n \\in \\mathbb{Z}^+\\}: \\quad 1^2 + 2^2 = 5 \\notin H, \\quad n^2 m^2 = (nm)^2 \\in H",
              "body": "Example 1.5: \\(\\mathbb{R}^* = \\mathbb{R} \\setminus \\{0\\}\\) is not closed under \\(+\\) since \\(2 + (-2) = 0 \\notin \\mathbb{R}^*\\). Example 1.6: The set \\(H\\) of positive integer squares is not closed under \\(+\\), but is closed under multiplication. Example 1.7: The set \\(F\\) of functions \\(f: \\mathbb{R} \\to \\mathbb{R}\\) is closed under \\(+, -, \\cdot\\), and composition \\((f \\circ g)(x) = f(g(x))\\)."
            },
            {
              "type": "info",
              "label": "Definitions 1.11 & 1.12",
              "title": "Definitions 1.11 & 1.12: Commutative and Associative",
              "defines": ["abs-m1-commutative", "abs-m1-associative"],
              "body": "An operation \\(*\\) on \\(S\\) is commutative if \\(a * b = b * a\\) for all \\(a, b \\in S\\). It is associative if \\((a * b) * c = a * (b * c)\\) for all \\(a, b, c \\in S\\).",
              "examples": [
                "Commutative: \\(a * b = b * a\\)",
                "Associative: \\((a * b) * c = a * (b * c)\\)"
              ],
              "art": {
                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
                "steps": [
                  {
                    "step": 0,
                    "name": "laws",
                    "objects": [
                      { "type": "polygon", "points": [[20, 150], [240, 150], [240, 100], [20, 100]], "role": "s ok", "name": "comm" },
                      { "type": "polygon", "points": [[20, 80], [240, 80], [240, 30], [20, 30]], "role": "s ok", "name": "assoc" },
                      { "type": "label", "coords": [130, 125], "text": "Commutative: a * b = b * a", "size": 11, "align": "center", "role": "t", "name": "comm" },
                      { "type": "label", "coords": [130, 55], "text": "Associative: (a * b) * c = a * (b * c)", "size": 11, "align": "center", "role": "t", "name": "assoc" }
                    ]
                  }
                ]
              }
            },
            {
              "type": "math",
              "label": "Examples 1.8–1.10",
              "title": "Minimum and Custom Operations on Positive Integers",
              "tex": "a * b = \\min(a,b), \\quad a *' b = a, \\quad a *'' b = \\min(a,b) + 2",
              "body": "On \\(\\mathbb{Z}^+\\), \\(a * b = \\min(a, b)\\) (Example 1.8, used in GPS route timing) is both commutative and associative. In Example 1.9, \\(a *' b = a\\) is associative but not commutative (\\(5 *' 7 = 5 \\neq 7 = 7 *' 5\\)). In Example 1.10, \\(a *'' b = (a * b) + 2\\) is commutative, but not associative because \\((2 *'' 5) *'' 9 = 4 *'' 9 = 6\\) while \\(2 *'' (5 *'' 9) = 2 *'' 7 = 4\\)."
            },
            {
              "type": "info",
              "label": "Theorem 1.13",
              "title": "Theorem 1.13: Associativity of Composition",
              "body": "Let \\(S\\) be a set and let \\(f, g\\), and \\(h\\) be functions mapping \\(S\\) into \\(S\\). Then \\(f \\circ (g \\circ h) = (f \\circ g) \\circ h\\). Why it matters: function composition is always associative, which immediately proves that matrix multiplication is associative.",
              "examples": [
                "\\((f \\circ g)(x) = f(g(x))\\)"
              ]
            },
            {
              "type": "derivation",
              "title": "Proof of Theorem 1.13: Associativity of Composition",
              "legend": "For any \\(x \\in S\\), compare \\((f \\circ (g \\circ h))(x)\\) and \\(((f \\circ g) \\circ h)(x)\\).",
              "phases": [
                { "name": "Left side", "why": "expand f composed with (g o h)" },
                { "name": "Inner map", "why": "evaluate (g o h)(x)" },
                { "name": "Right side", "why": "regroup as (f o g) applied to h(x)" }
              ],
              "steps": [
                {
                  "phase": "Left side",
                  "tex": "(f \\circ (g \\circ h))(x) = f((g \\circ h)(x))",
                  "note": "Apply the definition of function composition to \\(f\\) and \\(g \\circ h\\)."
                },
                {
                  "phase": "Inner map",
                  "move": { "type": "apply" },
                  "tex": "(f \\circ (g \\circ h))(x) = f(g(h(x)))",
                  "note": "Apply the definition of composition to \\((g \\circ h)(x) = g(h(x))\\).",
                  "ask": {
                    "q": "Why does \\(f((g \\circ h)(x))\\) equal \\(f(g(h(x)))\\)?",
                    "options": [
                      "Definition of composition \\(g \\circ h\\)",
                      "Commutativity of \\(g\\) and \\(h\\)",
                      "Existence of inverse functions",
                      "Closure of real numbers"
                    ],
                    "answer": 0,
                    "why": "By definition of function composition, \\((g \\circ h)(x) = g(h(x))\\)."
                  }
                },
                {
                  "phase": "Right side",
                  "move": { "type": "apply" },
                  "tex": "(f \\circ (g \\circ h))(x) = (f \\circ g)(h(x))",
                  "note": "Apply the definition of composition \\((f \\circ g)(y) = f(g(y))\\) at \\(y = h(x)\\)."
                },
                {
                  "move": { "type": "apply" },
                  "tex": "(f \\circ (g \\circ h))(x) = ((f \\circ g) \\circ h)(x)",
                  "note": "Apply the definition of composition to \\(f \\circ g\\) and \\(h\\). Both sides agree for all \\(x \\in S\\)."
                }
              ]
            },
            {
              "type": "mcq",
              "label": "Quiz · OMR",
              "time": 60,
              "q": "Let \\(H = \\{n^2 \\mid n \\in \\mathbb{Z}^+\\}\\). Which statement is true?",
              "options": [
                "\\(H\\) is closed under multiplication",
                "\\(H\\) is closed under addition",
                "\\(H\\) is closed under subtraction",
                "\\(H\\) is closed under division"
              ],
              "answer": 0,
              "why": "If \\(r = n^2\\) and \\(s = m^2\\) are in \\(H\\), then \\(rs = (nm)^2 \\in H\\), while \\(1 + 4 = 5 \\notin H\\)."
            },
            {
              "type": "mcq",
              "label": "Quiz · OMR",
              "time": 60,
              "q": "On \\(\\mathbb{Z}^+\\), let \\(a *'' b = \\min(a, b) + 2\\). Which properties hold?",
              "options": [
                "Commutative but not associative",
                "Associative but not commutative",
                "Both commutative and associative",
                "Neither commutative nor associative"
              ],
              "answer": 0,
              "why": "Since \\(\\min(a,b) = \\min(b,a)\\), \\(*''\\) is commutative, but \\((2 *'' 5) *'' 9 = 6 \\neq 4 = 2 *'' (5 *'' 9)\\)."
            },
            {
              "type": "fill",
              "label": "Quiz · Fill in",
              "time": 60,
              "q": "A subset \\(H \\subseteq S\\) is ______ under \\(*\\) if \\(a * b \\in H\\) for all \\(a, b \\in H\\).",
              "answer": "closed",
              "why": "By Definition 1.4, \\(H\\) is closed under \\(*\\) when combining any two elements of \\(H\\) stays inside \\(H\\)."
            },
            {
              "type": "number",
              "label": "Quiz · Number",
              "time": 60,
              "q": "On \\(\\mathbb{Z}^+\\), if \\(a *'' b = \\min(a, b) + 2\\), compute \\((2 *'' 5) *'' 9\\).",
              "answer": 6,
              "why": "First \\(2 *'' 5 = \\min(2, 5) + 2 = 4\\), and then \\(4 *'' 9 = \\min(4, 9) + 2 = 6\\)."
            }
          ]
        },
        {
          "id": "abs-m1-tables-and-structures",
          "title": "Identities, Inverses, and Tables",
          "icon": "graph",
          "source": "Fraleigh 8th ed. §1, 1.14–1.30 (7th ed. §2: Binary Operations, 2.11–2.25; §3: Isomorphic Binary Structures, 3.1–3.17)",
          "cards": [
            {
              "type": "info",
              "label": "Definition 1.14",
              "title": "Definition 1.14: Identity Element",
              "defines": ["abs-m1-identity-element"],
              "body": "Let \\(S\\) be a set with binary operation \\(*\\). If \\(e \\in S\\) satisfies \\(a * e = e * a = a\\) for all \\(a \\in S\\), then \\(e\\) is called an identity element for \\(*\\).",
              "examples": [
                "\\(0\\) for \\(+\\) on \\(\\mathbb{R}\\)",
                "\\(1\\) for \\(\\cdot\\) on \\(\\mathbb{R}\\)"
              ],
              "art": {
                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
                "steps": [
                  {
                    "step": 0,
                    "name": "identity",
                    "objects": [
                      { "type": "circle", "center": [70, 90], "r": 26, "role": "s ok", "name": "e" },
                      { "type": "circle", "center": [190, 90], "r": 26, "role": "s ok", "name": "a" },
                      { "type": "arrow", "p1": [98, 98], "p2": [162, 98], "role": "lk", "width": 2, "name": "ea" },
                      { "type": "arrow", "p1": [162, 82], "p2": [98, 82], "role": "ik", "width": 2, "name": "ae" },
                      { "type": "label", "coords": [70, 90], "text": "e", "size": 12, "align": "center", "role": "t", "name": "e" },
                      { "type": "label", "coords": [190, 90], "text": "a", "size": 12, "align": "center", "role": "t", "name": "a" },
                      { "type": "label", "coords": [130, 114], "text": "e * a = a", "size": 11, "align": "center", "role": "t", "name": "ea" },
                      { "type": "label", "coords": [130, 62], "text": "a * e = a", "size": 11, "align": "center", "role": "t", "name": "ae" }
                    ]
                  }
                ]
              }
            },
            {
              "type": "info",
              "label": "Theorem 1.15",
              "title": "Theorem 1.15: Uniqueness of Identity",
              "body": "A set \\(S\\) with binary operation \\(*\\) has at most one identity element. Why it matters: whenever an identity element exists for a binary operation, it is completely unique.",
              "examples": [
                "At most one \\(e \\in S\\)"
              ]
            },
            {
              "type": "derivation",
              "title": "Proof of Theorem 1.15: Uniqueness of Identity",
              "legend": "Suppose both \\(e\\) and \\(e'\\) are identity elements in \\(S\\), and evaluate \\(e * e'\\).",
              "phases": [
                { "name": "Right identity", "why": "use that e' is an identity" },
                { "name": "Left identity", "why": "use that e is an identity" }
              ],
              "steps": [
                {
                  "phase": "Right identity",
                  "tex": "e = e * e'",
                  "note": "Since \\(e'\\) is an identity element, \\(a * e' = a\\) for \\(a = e\\)."
                },
                {
                  "phase": "Left identity",
                  "move": { "type": "apply" },
                  "tex": "e = e'",
                  "note": "Since \\(e\\) is an identity element, \\(e * b = b\\) for \\(b = e'\\). Thus \\(e = e'\\).",
                  "ask": {
                    "q": "Why does \\(e * e'\\) simplify to \\(e'\\)?",
                    "options": [
                      "Because \\(e\\) is an identity element",
                      "Because \\(*\\) is associative",
                      "Because \\(e'\\) has an inverse",
                      "Because \\(S\\) is finite"
                    ],
                    "answer": 0,
                    "why": "Since \\(e\\) is an identity element, \\(e * x = x\\) for every \\(x \\in S\\), including \\(x = e'\\)."
                  }
                }
              ]
            },
            {
              "type": "info",
              "label": "Definition 1.17",
              "title": "Definition 1.17: Inverse Element",
              "defines": ["abs-m1-inverse-element"],
              "body": "If \\(*\\) is an operation on \\(S\\) with identity \\(e\\), then for any \\(x \\in S\\), the inverse of \\(x\\) is an element \\(x' \\in S\\) such that \\(x * x' = x' * x = e\\).",
              "examples": [
                "\\(-a\\) for \\(+\\) on \\(\\mathbb{R}\\)",
                "\\(1/a\\) for \\(\\cdot\\) on \\(\\mathbb{R}^*\\)"
              ],
              "art": {
                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
                "steps": [
                  {
                    "step": 0,
                    "name": "inverse",
                    "objects": [
                      { "type": "circle", "center": [60, 90], "r": 24, "role": "s ok", "name": "x" },
                      { "type": "circle", "center": [130, 90], "r": 24, "role": "s ok", "name": "xp" },
                      { "type": "circle", "center": [205, 90], "r": 24, "role": "f", "name": "e" },
                      { "type": "arrow", "p1": [156, 90], "p2": [179, 90], "role": "lk", "width": 2, "name": "toE" },
                      { "type": "label", "coords": [60, 90], "text": "x", "size": 12, "align": "center", "role": "t", "name": "x" },
                      { "type": "label", "coords": [130, 90], "text": "x'", "size": 12, "align": "center", "role": "t", "name": "xp" },
                      { "type": "label", "coords": [205, 90], "text": "e", "size": 12, "align": "center", "role": "i", "name": "e" },
                      { "type": "label", "coords": [130, 140], "text": "x * x' = x' * x = e", "size": 11, "align": "center", "role": "t", "name": "eq" }
                    ]
                  }
                ]
              }
            },
            {
              "type": "math",
              "label": "Examples 1.16–1.24",
              "title": "Function Identities and Operation Tables",
              "tex": "\\begin{array}{c|ccc} * & a & b & c \\\\ \\hline a & b & c & b \\\\ b & a & c & b \\\\ c & c & b & a \\end{array} \\quad (a * b = c \\neq a = b * a)",
              "body": "Examples 1.16 & 1.18: On real functions \\(F\\), \\(\\iota(x) = x\\) is the identity for \\(\\circ\\), and \\(f \\in F\\) has an inverse under \\(\\circ\\) if and only if \\(f\\) is one-to-one and onto. Examples 1.19–1.24: In a table (Table 1.20 above), \\(a * b\\) is in row \\(a\\) and column \\(b\\). An operation is commutative if and only if its table is symmetric across the main diagonal (Tables 1.22–1.23). Placing \\(e\\) first makes the first row and column match the headers (Table 1.25)."
            },
            {
              "type": "info",
              "label": "Conditions 1 & 2",
              "title": "What is a Well-Defined Binary Operation?",
              "defines": ["abs-m1-well-defined"],
              "body": "To define a binary operation \\(*\\) on \\(S\\): (Condition 1) exactly one element must be assigned to every ordered pair \\((a, b)\\) in \\(S \\times S\\), and (Condition 2) that assigned element must belong to \\(S\\).",
              "examples": [
                "No missing pairs",
                "No ambiguity, closed in \\(S\\)"
              ],
              "art": {
                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
                "steps": [
                  {
                    "step": 0,
                    "name": "welldef",
                    "objects": [
                      { "type": "polygon", "points": [[20, 150], [240, 150], [240, 100], [20, 100]], "role": "s ok", "name": "c1" },
                      { "type": "polygon", "points": [[20, 80], [240, 80], [240, 30], [20, 30]], "role": "s ok", "name": "c2" },
                      { "type": "label", "coords": [130, 125], "text": "1. Exactly one output per pair", "size": 11, "align": "center", "role": "t", "name": "c1" },
                      { "type": "label", "coords": [130, 55], "text": "2. Output must stay inside S", "size": 11, "align": "center", "role": "t", "name": "c2" }
                    ]
                  }
                ]
              }
            },
            {
              "type": "math",
              "label": "Examples 1.26–1.30",
              "title": "Where Attempted Operations Fail",
              "tex": "a * b = \\frac{a}{b}: \\quad 2 * 0 = \\frac{2}{0}\\text{ (fails Cond. 1 on }\\mathbb{Q}\\text{)}, \\quad 1 * 2 = \\frac{1}{2} \\notin \\mathbb{Z}^+\\text{ (fails Cond. 2)}",
              "body": "Example 1.26: \\(a * b = a/b\\) is a valid binary operation on \\(\\mathbb{Q}^*\\), but not on \\(\\mathbb{Q}\\) (not everywhere defined at \\(b=0\\)) and not on \\(\\mathbb{Z}^+\\) (not closed). Example 1.27: \\(f(x)/g(x)\\) fails Condition 2 on \\(F\\) when \\(g(x)=0\\). Example 1.28: choosing a function 'greater than \\(f\\) and \\(g\\)' is ambiguous (not well defined, fails Condition 1). Example 1.30: choosing the shortest person taller than both \\(a\\) and \\(b\\) fails Condition 1 when \\(a\\) or \\(b\\) is the tallest person."
            },
            {
              "type": "math",
              "label": "Exercises 1.12, 1.13 & 1.43",
              "title": "Counting Binary Operations and Idempotents",
              "tex": "|S| = n \\implies |S \\times S| = n^2 \\implies n^{(n^2)}\\text{ binary operations on }S",
              "body": "Exercise 1.12: On a finite set \\(S\\) of \\(n\\) elements, each of the \\(n^2\\) entries in the table can be filled in \\(n\\) ways, giving \\(n^{(n^2)}\\) operations: \\(1^1 = 1\\) for \\(n=1\\), \\(2^4 = 16\\) for \\(n=2\\), and \\(3^9 = 19{,}683\\) for \\(n=3\\). Exercise 1.13: For a commutative operation, the \\(n(n+1)/2\\) entries on and above the diagonal determine the table, giving \\(n^{n(n+1)/2}\\) commutative operations. Exercise 1.43: An element \\(a \\in S\\) with \\(a * a = a\\) is called an idempotent."
            },
            {
              "type": "mcq",
              "label": "Quiz · OMR",
              "time": 60,
              "q": "Why does \\(a * b = a/b\\) fail to be an operation on \\(\\mathbb{Z}^+\\)?",
              "options": [
                "Condition 2 fails (not closed)",
                "Condition 1 fails (division by zero)",
                "It is not associative",
                "It has no identity element"
              ],
              "answer": 0,
              "why": "For \\(1, 2 \\in \\mathbb{Z}^+\\), \\(1 * 2 = 1/2 \\notin \\mathbb{Z}^+\\), so \\(\\mathbb{Z}^+\\) is not closed under \\(*\\) (Condition 2)."
            },
            {
              "type": "mcq",
              "label": "Quiz · OMR",
              "time": 60,
              "q": "When is a binary operation defined by a table commutative?",
              "options": [
                "Symmetric across the main diagonal",
                "Every row has distinct entries",
                "First row matches the header",
                "Main diagonal entries are equal"
              ],
              "answer": 0,
              "why": "Having \\(a * b = b * a\\) for all pairs means the entry in row \\(i\\), column \\(j\\) equals the entry in row \\(j\\), column \\(i\\)."
            },
            {
              "type": "fill",
              "label": "Quiz · Fill in",
              "time": 60,
              "q": "An element \\(a \\in S\\) satisfying \\(a * a = a\\) is called an ______.",
              "answer": "idempotent|idempotent element",
              "why": "By Exercise 1.43 (and Exercise 2.31), an element satisfying \\(a * a = a\\) is an idempotent of \\(*\\)."
            },
            {
              "type": "number",
              "label": "Quiz · Number",
              "time": 60,
              "q": "How many different binary operations can be defined on a set of \\(2\\) elements?",
              "answer": 16,
              "why": "A \\(2 \\times 2\\) table has \\(4\\) cells and \\(2\\) choices per cell, giving \\(2^4 = 16\\) binary operations (Exercise 1.12)."
            }
          ]
        },
        {
          "id": "abs-m1-groups-and-properties",
          "title": "Groups, Properties, and Group Tables",
          "icon": "book",
          "source": "Fraleigh 8th ed. §2, 2.1–2.25 (7th ed. §4: Groups, Elementary Properties of Groups, Finite Groups and Group Tables, 4.1–4.25)",
          "cards": [
            {
              "type": "info",
              "label": "Definition 2.1",
              "title": "Definition 2.1: Group",
              "defines": ["abs-m1-group"],
              "body": "A group \\(\\langle G, * \\rangle\\) is a set \\(G\\), closed under a binary operation \\(*\\), satisfying: \\(\\mathscr{G}_1\\) associativity \\((a*b)*c = a*(b*c)\\); \\(\\mathscr{G}_2\\) identity \\(e \\in G\\) with \\(e*x = x*e = x\\); \\(\\mathscr{G}_3\\) inverse \\(a' \\in G\\) with \\(a*a' = a'*a = e\\).",
              "examples": [
                "\\(\\mathscr{G}_1\\): associativity",
                "\\(\\mathscr{G}_2\\): identity \\(e\\)",
                "\\(\\mathscr{G}_3\\): inverse \\(a'\\)"
              ],
              "art": {
                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
                "steps": [
                  {
                    "step": 0,
                    "name": "axioms",
                    "objects": [
                      { "type": "polygon", "points": [[20, 160], [240, 160], [240, 124], [20, 124]], "role": "s ok", "name": "g1" },
                      { "type": "polygon", "points": [[20, 108], [240, 108], [240, 72], [20, 72]], "role": "s ok", "name": "g2" },
                      { "type": "polygon", "points": [[20, 56], [240, 56], [240, 20], [20, 20]], "role": "s ok", "name": "g3" },
                      { "type": "label", "coords": [130, 142], "text": "G1: (a * b) * c = a * (b * c)", "size": 11, "align": "center", "role": "t", "name": "g1" },
                      { "type": "label", "coords": [130, 90], "text": "G2: Identity e * x = x * e = x", "size": 11, "align": "center", "role": "t", "name": "g2" },
                      { "type": "label", "coords": [130, 38], "text": "G3: Inverse a * a' = a' * a = e", "size": 11, "align": "center", "role": "t", "name": "g3" }
                    ]
                  }
                ]
              }
            },
            {
              "type": "info",
              "label": "Definition 2.3",
              "title": "Definition 2.3: Abelian Group",
              "defines": ["abs-m1-abelian-group"],
              "body": "A group \\(G\\) is abelian if its binary operation is commutative, meaning \\(a * b = b * a\\) for all \\(a, b \\in G\\).",
              "examples": [
                "\\(\\langle \\mathbb{Z}, + \\rangle, \\langle \\mathbb{R}, + \\rangle\\)",
                "\\(\\langle \\mathbb{Q}^*, \\cdot \\rangle, \\langle M_{m\\times n}(\\mathbb{R}), + \\rangle\\)"
              ],
              "art": {
                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
                "steps": [
                  {
                    "step": 0,
                    "name": "abelian",
                    "objects": [
                      { "type": "ellipse", "center": [130, 90], "rx": 95, "ry": 55, "role": "s ok", "name": "G" },
                      { "type": "label", "coords": [130, 110], "text": "Abelian Group G", "size": 12, "align": "center", "role": "t", "name": "G" },
                      { "type": "label", "coords": [130, 72], "text": "a * b = b * a for all a, b", "size": 11, "align": "center", "role": "t", "name": "comm" }
                    ]
                  }
                ]
              }
            },
            {
              "type": "math",
              "label": "Examples 2.2–2.15",
              "title": "Abelian, Nonabelian, and Custom Group Examples",
              "tex": "GL(n, \\mathbb{R}): (AB)(B^{-1}A^{-1}) = I_n, \\qquad \\langle \\mathbb{Q}^+, * \\rangle: a * b = \\frac{ab}{2},\\; e = 2,\\; a' = \\frac{4}{a}",
              "body": "Examples 2.2–2.12: \\(\\mathbb{Z}, \\mathbb{Q}, \\mathbb{R}, \\mathbb{C}\\) under \\(+\\) and \\(\\mathbb{Q}^+, \\mathbb{R}^+, \\mathbb{Q}^*, \\mathbb{R}^*, \\mathbb{C}^*\\) under \\(\\cdot\\) are abelian groups; \\(\\langle \\mathbb{Z}^+, + \\rangle\\) (no identity), \\(\\langle \\mathbb{Z}^+, \\cdot \\rangle\\) (no inverse for \\(3\\)), and \\(\\langle M_n(\\mathbb{R}), \\cdot \\rangle\\) (zero matrix has no inverse) are not groups. Example 2.13: Plane isometries \\(T\\) under \\(\\circ\\) form a nonabelian group (reflection \\(\\phi\\) and rotation \\(\\theta\\) satisfy \\(\\phi \\circ \\theta \\neq \\theta \\circ \\phi\\)). Example 2.14: Invertible \\(n \\times n\\) matrices form the nonabelian general linear group \\(GL(n, \\mathbb{R})\\). Example 2.15: \\(\\mathbb{Q}^+\\) with \\(a * b = ab/2\\) is a group with identity \\(2\\) and inverse \\(4/a\\)."
            },
            {
              "type": "info",
              "label": "Theorems 2.16–2.18",
              "title": "Theorems 2.16–2.18: Cancellation, Linear Equations, Uniqueness",
              "body": "In any group \\(G\\): (Thm 2.16) Left and right cancellation hold: \\(a*b = a*c \\Rightarrow b = c\\) and \\(b*a = c*a \\Rightarrow b = c\\). (Thm 2.17) Equations \\(a*x = b\\) and \\(y*a = b\\) have unique solutions \\(x = a'*b\\) and \\(y = b*a'\\). (Thm 2.18) The identity \\(e\\) and each inverse \\(a'\\) are unique. Why it matters: cancellation proves \\(e\\) is the only idempotent in a group (Exercise 2.31).",
              "examples": [
                "\\(a * x = b \\iff x = a' * b\\)",
                "\\(x * x = x \\Rightarrow x = e\\)"
              ]
            },
            {
              "type": "derivation",
              "title": "Proof of Theorem 2.16: Left Cancellation Law",
              "legend": "Given \\(a * b = a * c\\) in a group \\(G\\), prove that \\(b = c\\).",
              "phases": [
                { "name": "Left multiply", "why": "multiply on the left by inverse a'" },
                { "name": "Associate", "why": "regroup factors using G1" },
                { "name": "Cancel", "why": "apply inverse law G3 and identity law G2" }
              ],
              "steps": [
                {
                  "phase": "Left multiply",
                  "tex": "a' * (a * b) = a' * (a * c)",
                  "note": "Start from \\(a * b = a * c\\) and multiply on the left by \\(a'\\), which exists by axiom \\(\\mathscr{G}_3\\)."
                },
                {
                  "phase": "Associate",
                  "move": { "type": "apply" },
                  "tex": "(a' * a) * b = (a' * a) * c",
                  "note": "Apply the associative law (axiom \\(\\mathscr{G}_1\\)) to both sides.",
                  "ask": {
                    "q": "Which group axiom justifies \\(a' * (a * b) = (a' * a) * b\\)?",
                    "options": [
                      "Associativity \\(\\mathscr{G}_1\\)",
                      "Identity axiom \\(\\mathscr{G}_2\\)",
                      "Inverse axiom \\(\\mathscr{G}_3\\)",
                      "Commutativity"
                    ],
                    "answer": 0,
                    "why": "Regrouping parentheses without changing element order uses associativity \\(\\mathscr{G}_1\\)."
                  }
                },
                {
                  "phase": "Cancel",
                  "move": { "type": "apply" },
                  "tex": "e * b = e * c",
                  "note": "By definition of the inverse \\(a'\\) in axiom \\(\\mathscr{G}_3\\), \\(a' * a = e\\)."
                },
                {
                  "move": { "type": "apply" },
                  "tex": "b = c",
                  "note": "By definition of the identity \\(e\\) in axiom \\(\\mathscr{G}_2\\), \\(e * b = b\\) and \\(e * c = c\\)."
                }
              ]
            },
            {
              "type": "info",
              "label": "Corollary 2.19",
              "title": "Corollary 2.19: Inverse of a Product, Semigroups, Monoids",
              "defines": ["abs-m1-semigroup-monoid", "abs-m1-idempotent"],
              "body": "In any group \\(G\\), \\((a * b)' = b' * a'\\) for all \\(a, b \\in G\\), and \\((a')' = a\\) (Exercise 2.42). A semigroup is a set with an associative operation; a monoid is a semigroup with an identity. One-sided left axioms (associativity, left identity, left inverse) also define a group (Exercise 2.40).",
              "examples": [
                "\\((a * b)' = b' * a'\\)",
                "Group \\(\\subset\\) Monoid \\(\\subset\\) Semigroup"
              ],
              "art": {
                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
                "steps": [
                  {
                    "step": 0,
                    "name": "shoesock",
                    "objects": [
                      { "type": "ellipse", "center": [130, 90], "rx": 110, "ry": 68, "role": "lk", "name": "semi" },
                      { "type": "ellipse", "center": [130, 82], "rx": 82, "ry": 48, "role": "lk", "name": "mon" },
                      { "type": "ellipse", "center": [130, 74], "rx": 54, "ry": 28, "role": "s ok", "name": "grp" },
                      { "type": "label", "coords": [130, 144], "text": "Semigroup (associative)", "size": 11, "align": "center", "role": "t", "name": "semi" },
                      { "type": "label", "coords": [130, 116], "text": "Monoid (+ identity)", "size": 11, "align": "center", "role": "t", "name": "mon" },
                      { "type": "label", "coords": [130, 74], "text": "Group: (a*b)' = b'*a'", "size": 11, "align": "center", "role": "t", "name": "grp" }
                    ]
                  }
                ]
              }
            },
            {
              "type": "derivation",
              "title": "Proof of Corollary 2.19: Inverse of a Product",
              "legend": "Show that \\(b' * a'\\) is the unique inverse of \\(a * b\\) by computing \\((a * b) * (b' * a')\\).",
              "phases": [
                { "name": "Associate", "why": "pair b and b' inside the product" },
                { "name": "Inner cancel", "why": "replace b * b' with e and simplify" },
                { "name": "Outer cancel", "why": "replace a * a' with e" }
              ],
              "steps": [
                {
                  "phase": "Associate",
                  "tex": "(a * b) * (b' * a') = a * (b * b') * a'",
                  "note": "Use associativity (axiom \\(\\mathscr{G}_1\\)) to group \\(b\\) with \\(b'\\)."
                },
                {
                  "phase": "Inner cancel",
                  "move": { "type": "apply" },
                  "tex": "(a * b) * (b' * a') = (a * e) * a'",
                  "note": "Apply axiom \\(\\mathscr{G}_3\\): \\(b * b' = e\\).",
                  "ask": {
                    "q": "What simplifies \\((a * e) * a'\\) in the next step?",
                    "options": [
                      "Identity axiom \\(a * e = a\\)",
                      "Commutativity of \\(*\\)",
                      "Left cancellation law",
                      "Definition of isomorphism"
                    ],
                    "answer": 0,
                    "why": "By axiom \\(\\mathscr{G}_2\\), \\(a * e = a\\), reducing \\((a * e) * a'\\) to \\(a * a'\\)."
                  }
                },
                {
                  "move": { "type": "apply" },
                  "tex": "(a * b) * (b' * a') = a * a'",
                  "note": "Apply axiom \\(\\mathscr{G}_2\\): \\(a * e = a\\)."
                },
                {
                  "phase": "Outer cancel",
                  "move": { "type": "apply" },
                  "tex": "(a * b) * (b' * a') = e",
                  "note": "Apply axiom \\(\\mathscr{G}_3\\): \\(a * a' = e\\). By Theorem 2.18, \\((a * b)' = b' * a'\\)."
                }
              ]
            },
            {
              "type": "info",
              "label": "Definition 2.22",
              "title": "Definition 2.22: Group Isomorphism",
              "defines": ["abs-m1-group-isomorphism"],
              "body": "Let \\(\\langle G_1, *_1 \\rangle\\) and \\(\\langle G_2, *_2 \\rangle\\) be groups. A map \\(f: G_1 \\to G_2\\) is a group isomorphism if: (1) \\(f\\) is one-to-one and onto \\(G_2\\), and (2) \\(f(a *_1 b) = f(a) *_2 f(b)\\) for all \\(a, b \\in G_1\\) (the homomorphism property).",
              "examples": [
                "Notation: \\(G_1 \\simeq G_2\\)",
                "\\(f(a *_1 b) = f(a) *_2 f(b)\\)"
              ],
              "art": {
                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
                "steps": [
                  {
                    "step": 0,
                    "name": "iso",
                    "objects": [
                      { "type": "ellipse", "center": [60, 90], "rx": 44, "ry": 56, "role": "s ok", "name": "G1" },
                      { "type": "ellipse", "center": [200, 90], "rx": 44, "ry": 56, "role": "s ok", "name": "G2" },
                      { "type": "arrow", "p1": [85, 110], "p2": [175, 110], "role": "lk", "width": 2, "name": "f1" },
                      { "type": "arrow", "p1": [85, 65], "p2": [175, 65], "role": "ik", "width": 2, "name": "f2" },
                      { "type": "label", "coords": [60, 158], "text": "G1", "size": 11, "align": "center", "role": "t", "name": "G1" },
                      { "type": "label", "coords": [200, 158], "text": "G2", "size": 11, "align": "center", "role": "t", "name": "G2" },
                      { "type": "label", "coords": [60, 110], "text": "a, b", "size": 11, "align": "center", "role": "t", "name": "ab" },
                      { "type": "label", "coords": [200, 110], "text": "f(a), f(b)", "size": 11, "align": "center", "role": "t", "name": "fab" },
                      { "type": "label", "coords": [60, 65], "text": "a *1 b", "size": 11, "align": "center", "role": "t", "name": "prod1" },
                      { "type": "label", "coords": [200, 65], "text": "f(a) *2 f(b)", "size": 11, "align": "center", "role": "t", "name": "prod2" }
                    ]
                  }
                ]
              }
            },
            {
              "type": "math",
              "label": "Example 2.23 & Ex 2.10, 2.44",
              "title": "Isomorphism of Integers and Even Integers",
              "tex": "f: \\mathbb{Z} \\to 2\\mathbb{Z}, \\quad f(m) = 2m, \\quad f(a+b) = 2(a+b) = 2a + 2b = f(a) + f(b)",
              "body": "Example 2.23: \\(f(m) = 2m\\) is one-to-one (\\(2a = 2b \\Rightarrow a = b\\)), onto \\(2\\mathbb{Z}\\) (any even \\(y = 2c = f(c)\\)), and satisfies the homomorphism property, so \\(\\langle \\mathbb{Z}, + \\rangle \\simeq \\langle 2\\mathbb{Z}, + \\rangle\\). Exercise 2.10: More generally, for any \\(n \\in \\mathbb{Z}^+\\), \\(\\langle n\\mathbb{Z}, + \\rangle \\simeq \\langle \\mathbb{Z}, + \\rangle\\) via \\(f(m) = nm\\). Exercise 2.44: The inverse map \\(f^{-1}: G_2 \\to G_1\\) of an isomorphism is also an isomorphism (here \\(f^{-1}(x) = x/2\\))."
            },
            {
              "type": "math",
              "label": "Tables 2.20–2.25 & Ex 18, 20",
              "title": "Finite Group Tables of Orders 1, 2, 3, and 4",
              "tex": "\\begin{array}{c|cc} * & e & a \\\\ \\hline e & e & a \\\\ a & a & e \\end{array} \\qquad \\begin{array}{c|ccc} * & e & a & b \\\\ \\hline e & e & a & b \\\\ a & a & b & e \\\\ b & b & e & a \\end{array}",
              "body": "By Theorem 2.17, every element of a finite group must appear once and only once in each row and column of its group table. Up to isomorphism, there is only one group of order \\(1\\) (\\(\\{e\\}\\)), one of order \\(2\\) (Table 2.21, isomorphic to \\(\\langle \\{1,-1\\}, \\times \\rangle\\)), and one of order \\(3\\) (Table 2.25, realized by the three \\(2\\times 2\\) rotation matrices in Exercise 2.18). Exercise 2.20 shows there are exactly two nonisomorphic groups of order \\(4\\), and both are abelian."
            },
            {
              "type": "mcq",
              "label": "Quiz · OMR",
              "time": 60,
              "q": "In Exercise 2.22, why is the axiom order \\(\\mathscr{G}_1 \\mathscr{G}_3 \\mathscr{G}_2\\) unacceptable?",
              "options": [
                "\\(\\mathscr{G}_3\\) uses \\(e\\) before \\(\\mathscr{G}_2\\) defines \\(e\\)",
                "\\(\\mathscr{G}_1\\) must always be stated last",
                "Associativity depends on inverses",
                "Identity depends on commutativity"
              ],
              "answer": 0,
              "why": "Axiom \\(\\mathscr{G}_3\\) defines \\(a'\\) using the equation \\(a * a' = a' * a = e\\), so the identity element \\(e\\) in \\(\\mathscr{G}_2\\) must be introduced before \\(\\mathscr{G}_3\\)."
            },
            {
              "type": "mcq",
              "label": "Quiz · OMR",
              "time": 60,
              "q": "State whether true or false: Any two groups of three elements are isomorphic.",
              "options": [
                "True",
                "False: there are two",
                "False: some are nonabelian",
                "False: tables can differ"
              ],
              "answer": 0,
              "why": "True (Exercise 2.25b): a group table on \\(\\{e, a, b\\}\\) can be completed in only one way (Table 2.25), so all groups of order \\(3\\) are isomorphic and abelian."
            },
            {
              "type": "fill",
              "label": "Quiz · Fill in",
              "time": 60,
              "q": "In a group \\(G\\), the inverse of \\(a * b\\) is written ______.",
              "answer": "b' * a'|b'*a'|(b')*(a')",
              "why": "By Corollary 2.19, \\((a * b)' = b' * a'\\), reversing the order of the factors."
            },
            {
              "type": "number",
              "label": "Quiz · Number",
              "time": 60,
              "q": "In the group \\(\\langle \\mathbb{Q}^+, * \\rangle\\) with \\(a * b = ab/2\\), what is the identity element?",
              "answer": 2,
              "why": "By Example 2.15, \\(2 * a = (2a)/2 = a = a * 2\\) for all \\(a \\in \\mathbb{Q}^+\\), so \\(e = 2\\)."
            }
          ]
        }
      ]
    }
  ]
}
```

#### Plain-English Note for Module I
- **Sheets (3 sheets, 38 cards total):**
  1. `abs-m1-binary-operations` (*Binary Operations and Properties*, 12 cards): covers Cartesian products, binary operations (Def 1.1, Examples 1.2–1.3), closed subsets and induced operations (Def 1.4, Examples 1.5–1.7), commutative and associative operations (Defs 1.11–1.12, Examples 1.8–1.10), and associativity of function composition (Theorem 1.13 and step-by-step derivation proof), plus 4 quiz cards.
  2. `abs-m1-tables-and-structures` (*Identities, Inverses, and Tables*, 12 cards): covers identity elements (Def 1.14), uniqueness of the identity (Theorem 1.15 and derivation proof), inverse elements (Def 1.17, Examples 1.16 & 1.18), operation tables (Examples 1.19–1.24, Tables 1.20–1.25), well-defined operations (Conditions 1 & 2, Examples 1.26–1.30), and counting operations and idempotents (Exercises 1.12, 1.13, 1.43), plus 4 quiz cards.
  3. `abs-m1-groups-and-properties` (*Groups, Properties, and Group Tables*, 14 cards): covers groups and axioms \(\mathscr{G}_1, \mathscr{G}_2, \mathscr{G}_3\) (Def 2.1, Exercise 2.22), abelian and nonabelian groups including plane isometries and \(GL(n, \mathbb{R})\) (Def 2.3, Examples 2.2–2.15), cancellation, linear equations, and uniqueness (Theorems 2.16–2.18, Exercise 2.31, derivation proof of Theorem 2.16), inverse of a product \((a*b)' = b'*a'\), semigroups, monoids, and left axioms (Corollary 2.19, Exercises 2.40 & 2.42, derivation proof), group isomorphisms (Def 2.22, Example 2.23, Exercises 2.10 & 2.44), and finite group tables of orders 1 to 4 (Tables 2.20–2.25, Exercises 2.18, 2.20, 2.25), plus 4 quiz cards.
- **Anything omitted:** Nothing was omitted; all definitions, theorems, corollaries, proofs, examples, and referred exercises from Module I (Units 1–6) are included.

---

### Module II — `data-abs-m2.json`

```json
{
  "meta": {
    "title": "Study Match: Abstract Algebra I (MAT5CJ302)",
    "subject": "Abstract Algebra I · Modules I to IV",
    "home": "Focus",
    "opponent": "Time",
    "version": 1,
    "inlineChecks": false,
    "autoRevealQuestions": true,
    "definitionChecks": true,
    "date": "",
    "sessions": []
  },
  "glossary": [
    {
      "id": "abs-m2-subgroup",
      "term": "subgroup",
      "aliases": ["subgroups"],
      "definition": "A subset \\(H\\) of a group \\(G\\) is a subgroup of \\(G\\), written \\(H \\le G\\), if \\(H\\) is closed under the operation of \\(G\\) and \\(H\\) with the induced operation from \\(G\\) is itself a group."
    },
    {
      "id": "abs-m2-proper-trivial-subgroup",
      "term": "proper and trivial subgroups",
      "aliases": ["improper subgroup", "proper subgroup", "trivial subgroup", "nontrivial subgroup"],
      "definition": "For a group \\(G\\), the group \\(G\\) itself is the improper subgroup (all others are proper subgroups \\(H < G\\)), and \\(\\{e\\}\\) is the trivial subgroup (all others are nontrivial)."
    },
    {
      "id": "abs-m2-klein-4-group",
      "term": "Klein 4-group",
      "aliases": ["Klein four-group"],
      "definition": "The Klein 4-group \\(V = \\{e, a, b, c\\}\\) is the noncyclic abelian group of order \\(4\\) in which every element is its own inverse (\\(a^2 = b^2 = c^2 = e\\)) and the product of any two of \\(a, b, c\\) is the third."
    },
    {
      "id": "abs-m2-cyclic-subgroup",
      "term": "cyclic subgroup",
      "aliases": ["cyclic subgroup generated by a"],
      "definition": "For an element \\(a\\) in a group \\(G\\), the cyclic subgroup generated by \\(a\\) is \\(\\langle a \\rangle = \\{a^n \\mid n \\in \\mathbb{Z}\\}\\), which is the smallest subgroup of \\(G\\) containing \\(a\\)."
    },
    {
      "id": "abs-m2-cyclic-group",
      "term": "cyclic group",
      "aliases": ["generator", "generates"],
      "definition": "An element \\(a \\in G\\) generates \\(G\\) and is a generator for \\(G\\) if \\(\\langle a \\rangle = G\\). A group \\(G\\) is cyclic if there is some element \\(a \\in G\\) that generates \\(G\\)."
    },
    {
      "id": "abs-m2-order-of-element",
      "term": "order of an element",
      "aliases": ["infinite order", "finite order"],
      "definition": "The order of an element \\(a \\in G\\) is the order \\(|\\langle a \\rangle|\\) of the cyclic subgroup it generates (the smallest positive integer \\(m\\) with \\(a^m = e\\) if finite, or infinite order otherwise)."
    },
    {
      "id": "abs-m2-gcd",
      "term": "greatest common divisor",
      "aliases": ["gcd", "relatively prime", "Bezout's identity"],
      "definition": "For positive integer \\(r\\) and nonnegative integer \\(s\\), \\(\\gcd(r, s)\\) is the positive generator \\(d\\) of the cyclic subgroup \\(H = \\{nr + ms \\mid n, m \\in \\mathbb{Z}\\}\\) of \\(\\langle \\mathbb{Z}, + \\rangle\\). Two integers are relatively prime if \\(\\gcd(r, s) = 1\\)."
    },
    {
      "id": "abs-m2-homomorphism",
      "term": "group homomorphism",
      "aliases": ["homomorphism"],
      "definition": "Let \\(G\\) and \\(G'\\) be groups. A map \\(\\phi: G \\to G'\\) is a homomorphism if \\(\\phi(ab) = \\phi(a)\\phi(b)\\) holds for all \\(a, b \\in G\\)."
    },
    {
      "id": "abs-m2-image-inverse-image",
      "term": "image and inverse image",
      "aliases": ["image", "inverse image"],
      "definition": "For a mapping \\(\\phi: X \\to Y\\) with \\(A \\subseteq X\\) and \\(B \\subseteq Y\\), the image of \\(A\\) is \\(\\phi[A] = \\{\\phi(a) \\mid a \\in A\\}\\) and the inverse image of \\(B\\) is \\(\\phi^{-1}[B] = \\{a \\in X \\mid \\phi(a) \\in B\\}\\)."
    },
    {
      "id": "abs-m2-kernel",
      "term": "kernel of a homomorphism",
      "aliases": ["kernel", "Ker"],
      "definition": "For a group homomorphism \\(\\phi: G \\to G'\\) with identity \\(e' \\in G'\\), the kernel of \\(\\phi\\) is the subgroup \\(\\operatorname{Ker}(\\phi) = \\phi^{-1}[\\{e'\\}] = \\{x \\in G \\mid \\phi(x) = e'\\}\\)."
    },
    {
      "id": "abs-m2-regular-representation",
      "term": "left and right regular representations",
      "aliases": ["left regular representation", "right regular representation", "group of permutations"],
      "definition": "A subgroup of a permutation group is a group of permutations. For a group \\(G\\), the left regular representation \\(\\phi: G \\to S_G\\) maps \\(x \\mapsto \\lambda_x\\) where \\(\\lambda_x(g) = xg\\), and the right regular representation \\(\\tau: G \\to S_G\\) maps \\(x \\mapsto \\sigma_{x^{-1}}\\) where \\(\\sigma_x(g) = gx\\)."
    },
    {
      "id": "abs-m2-transposition",
      "term": "transposition",
      "aliases": ["transpositions"],
      "definition": "A transposition is a cycle of length \\(2\\), which interchanges two elements and leaves all other elements fixed."
    }
  ],
  "match": {
    "periodEnds": [25, 45, 70, 90],
    "breaks": [5, 10, 5]
  },
  "sections": [
    {
      "short": "Module II",
      "title": "Module II · Subgroups, Cyclic Groups, and Permutations",
      "sheets": [
        {
          "id": "abs-m2-subgroups-cyclic",
          "title": "Subgroups and Cyclic Subgroups",
          "icon": "graph",
          "source": "Fraleigh 8th ed. §5, 5.1–5.26 (7th ed. §5: Subgroups and Cyclic Subgroups, 5.1–5.23)",
          "cards": [
            {
              "type": "info",
              "label": "Definition 5.1",
              "title": "Definition 5.1: Subgroup",
              "defines": ["abs-m2-subgroup"],
              "body": "If a subset \\(H\\) of a group \\(G\\) is closed under the binary operation of \\(G\\) and if \\(H\\) with the induced operation from \\(G\\) is itself a group, then \\(H\\) is a subgroup of \\(G\\), denoted \\(H \\le G\\).",
              "examples": [
                "\\(\\langle \\mathbb{Z}, + \\rangle < \\langle \\mathbb{R}, + \\rangle\\)",
                "\\(\\langle \\mathbb{Q}^+, \\cdot \\rangle < \\langle \\mathbb{R}^+, \\cdot \\rangle\\)"
              ],
              "art": {
                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
                "steps": [
                  {
                    "step": 0,
                    "name": "subgrp",
                    "objects": [
                      { "type": "ellipse", "center": [130, 90], "rx": 100, "ry": 65, "role": "lk", "name": "G" },
                      { "type": "ellipse", "center": [130, 82], "rx": 60, "ry": 38, "role": "s ok", "name": "H" },
                      { "type": "point", "coords": [130, 82], "size": 3.5, "role": "f", "name": "e" },
                      { "type": "label", "coords": [130, 142], "text": "Group G", "size": 11, "align": "center", "role": "t", "name": "G" },
                      { "type": "label", "coords": [130, 104], "text": "Subgroup H <= G", "size": 11, "align": "center", "role": "t", "name": "H" },
                      { "type": "label", "coords": [130, 64], "text": "same e and a^-1", "size": 11, "align": "center", "role": "t", "name": "e" }
                    ]
                  }
                ]
              }
            },
            {
              "type": "info",
              "label": "Definition 5.2",
              "title": "Definition 5.2: Proper and Trivial Subgroups",
              "defines": ["abs-m2-proper-trivial-subgroup"],
              "body": "If \\(G\\) is a group, the subgroup \\(G\\) itself is the improper subgroup of \\(G\\); all others are proper subgroups (\\(H < G\\)). The subgroup \\(\\{e\\}\\) is the trivial subgroup of \\(G\\); all others are nontrivial.",
              "examples": [
                "Improper: \\(G\\)",
                "Trivial: \\(\\{e\\}\\)"
              ],
              "art": {
                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
                "steps": [
                  {
                    "step": 0,
                    "name": "lattice",
                    "objects": [
                      { "type": "point", "coords": [130, 150], "size": 4, "role": "f", "name": "G" },
                      { "type": "point", "coords": [130, 90], "size": 4, "role": "f", "name": "H" },
                      { "type": "point", "coords": [130, 30], "size": 4, "role": "f", "name": "e" },
                      { "type": "segment", "p1": [130, 150], "p2": [130, 90], "role": "lk", "width": 2, "name": "top" },
                      { "type": "segment", "p1": [130, 90], "p2": [130, 30], "role": "lk", "width": 2, "name": "bot" },
                      { "type": "label", "coords": [185, 150], "text": "G (improper)", "size": 11, "align": "center", "role": "t", "name": "G" },
                      { "type": "label", "coords": [190, 90], "text": "H (proper, nontrivial)", "size": 11, "align": "center", "role": "t", "name": "H" },
                      { "type": "label", "coords": [185, 30], "text": "{e} (trivial)", "size": 11, "align": "center", "role": "t", "name": "e" }
                    ]
                  }
                ]
              }
            },
            {
              "type": "math",
              "label": "Examples 5.3–5.7 & Tables 5.8–5.9",
              "title": "Subgroup Diagrams of Z4 and the Klein 4-Group V",
              "tex": "\\mathbb{Z}_4: \\{0\\} < \\{0, 2\\} < \\mathbb{Z}_4, \\qquad V = \\{e, a, b, c\\}: \\{e, a\\}, \\{e, b\\}, \\{e, c\\} < V",
              "body": "Examples 5.3–5.6: Subgroups include vectors in \\(\\mathbb{R}^n\\) with first component \\(0\\), \\(U_n \\le U \\le \\mathbb{C}^*\\), and \\(D_n \\le S_{\\mathbb{Z}_n}\\). Note that \\(\\langle \\mathbb{Q}^+, \\cdot \\rangle\\) is not a subgroup of \\(\\langle \\mathbb{R}, + \\rangle\\) because the operations differ. Example 5.7 (Tables 5.8, 5.9 & Fig. 5.10): \\(\\mathbb{Z}_4\\) has only one nontrivial proper subgroup \\(\\{0, 2\\}\\), whereas the Klein 4-group \\(V\\) (where \\(a^2=b^2=c^2=e\\) and \\(ab=c\\)) has three: \\(\\{e,a\\}, \\{e,b\\}, \\{e,c\\}\\)."
            },
            {
              "type": "info",
              "label": "Theorems 5.12, 5.15 & 5.16",
              "title": "Theorems 5.12, 5.15 & 5.16: Subgroup Tests",
              "body": "(Thm 5.12) \\(H \\subseteq G\\) is a subgroup iff: (1) \\(H\\) is closed under the operation of \\(G\\), (2) \\(e \\in H\\), and (3) \\(a^{-1} \\in H\\) for all \\(a \\in H\\). (Thm 5.15) Nonempty \\(H \\subseteq G\\) is a subgroup iff \\(ab^{-1} \\in H\\) for all \\(a, b \\in H\\). (Thm 5.16) A finite nonempty subset \\(H \\subseteq G\\) is a subgroup iff \\(H\\) is closed under the operation of \\(G\\).",
              "examples": [
                "3-step: closed, \\(e \\in H\\), \\(a^{-1} \\in H\\)",
                "1-step: \\(ab^{-1} \\in H\\)",
                "Finite: closed only"
              ]
            },
            {
              "type": "math",
              "label": "Examples 5.11, 5.13, 5.14, 5.17, 5.18",
              "title": "Applying the Subgroup Tests",
              "tex": "T = \\{A \\in GL(n, \\mathbb{C}) \\mid \\det(A) = 1\\}: \\quad \\det(AB) = 1,\\; \\det(I_n) = 1,\\; \\det(A^{-1}) = 1",
              "body": "Examples 5.11 & 5.13: Continuous functions and differentiable functions form subgroups of \\(\\langle F, + \\rangle\\) by Theorem 5.12. Example 5.14: \\(n \\times n\\) matrices with determinant \\(1\\) form a subgroup of \\(GL(n, \\mathbb{C})\\). Examples 5.17 & 5.18: Since \\(U_n = \\{z \\in \\mathbb{C} \\mid z^n = 1\\}\\) and the rotation set \\(H = \\{\\iota, \\rho, \\dots, \\rho^{n-1}\\} \\subseteq D_n\\) are finite and nonempty, closure alone (\\((z_1 z_2)^n = 1\\) and \\(\\rho^k \\rho^r = \\rho^{k +_n r}\\)) proves they are subgroups by Theorem 5.16."
            },
            {
              "type": "info",
              "label": "Theorem 5.19 & Definition 5.20",
              "title": "Theorem 5.19 & Definition 5.20: Cyclic Subgroup",
              "defines": ["abs-m2-cyclic-subgroup"],
              "body": "Let \\(G\\) be a group and \\(a \\in G\\). Then \\(H = \\{a^n \\mid n \\in \\mathbb{Z}\\}\\) is a subgroup of \\(G\\) and is the smallest subgroup of \\(G\\) that contains \\(a\\). It is called the cyclic subgroup of \\(G\\) generated by \\(a\\), denoted \\(\\langle a \\rangle\\).",
              "examples": [
                "Multiplicative: \\(\\langle a \\rangle = \\{a^n \\mid n \\in \\mathbb{Z}\\}\\)",
                "Additive: \\(\\langle a \\rangle = \\{na \\mid n \\in \\mathbb{Z}\\}\\)"
              ],
              "art": {
                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
                "steps": [
                  {
                    "step": 0,
                    "name": "powers",
                    "objects": [
                      { "type": "line", "p1": [20, 90], "p2": [240, 90], "role": "lk", "width": 2, "name": "line" },
                      { "type": "point", "coords": [50, 90], "size": 3.5, "role": "f", "name": "am1" },
                      { "type": "point", "coords": [100, 90], "size": 3.5, "role": "f", "name": "a0" },
                      { "type": "point", "coords": [150, 90], "size": 3.5, "role": "f", "name": "a1" },
                      { "type": "point", "coords": [200, 90], "size": 3.5, "role": "f", "name": "a2" },
                      { "type": "label", "coords": [50, 68], "text": "a^-1", "size": 11, "align": "center", "role": "t", "name": "am1" },
                      { "type": "label", "coords": [100, 68], "text": "a^0 = e", "size": 11, "align": "center", "role": "t", "name": "a0" },
                      { "type": "label", "coords": [150, 68], "text": "a^1", "size": 11, "align": "center", "role": "t", "name": "a1" },
                      { "type": "label", "coords": [200, 68], "text": "a^2", "size": 11, "align": "center", "role": "t", "name": "a2" },
                      { "type": "label", "coords": [130, 130], "text": "<a> = {a^n | n in Z}", "size": 11, "align": "center", "role": "t", "name": "line" }
                    ]
                  }
                ]
              }
            },
            {
              "type": "info",
              "label": "Proof of Theorem 5.19",
              "title": "Proof of Theorem 5.19: Cyclic Subgroup Generated by a",
              "body": "Step 1 (Closure): For \\(a^r, a^s \\in H\\), \\(a^r a^s = a^{r+s} \\in H\\). Step 2 (Identity): \\(a^0 = e \\in H\\). Step 3 (Inverses): For \\(a^r \\in H\\), \\(a^{-r} \\in H\\) and \\(a^{-r} a^r = e\\). Thus \\(H \\le G\\) by Theorem 5.12. Step 4 (Smallest): Any subgroup containing \\(a\\) is closed and has \\(e\\) and \\(a^{-1}\\), so it must contain \\(a^n\\) for all \\(n \\in \\mathbb{Z}\\), hence contains \\(H\\).",
              "examples": [
                "\\(a^r a^s = a^{r+s}\\)",
                "\\((a^r)^{-1} = a^{-r}\\)"
              ]
            },
            {
              "type": "info",
              "label": "Definition 5.22",
              "title": "Definition 5.22: Generator and Cyclic Group",
              "defines": ["abs-m2-cyclic-group", "abs-m2-klein-4-group"],
              "body": "An element \\(a\\) of a group \\(G\\) generates \\(G\\) and is a generator for \\(G\\) if \\(\\langle a \\rangle = G\\). A group \\(G\\) is cyclic if there is some element \\(a \\in G\\) that generates \\(G\\).",
              "examples": [
                "\\(\\mathbb{Z}_4 = \\langle 1 \\rangle = \\langle 3 \\rangle\\)",
                "\\(\\mathbb{Z} = \\langle 1 \\rangle = \\langle -1 \\rangle\\)"
              ],
              "art": {
                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
                "steps": [
                  {
                    "step": 0,
                    "name": "cyc",
                    "objects": [
                      { "type": "circle", "center": [130, 90], "r": 50, "role": "s ok", "name": "ring" },
                      { "type": "point", "coords": [180, 90], "size": 4, "role": "f", "name": "p0" },
                      { "type": "point", "coords": [130, 140], "size": 4, "role": "f", "name": "p1" },
                      { "type": "point", "coords": [80, 90], "size": 4, "role": "f", "name": "p2" },
                      { "type": "point", "coords": [130, 40], "size": 4, "role": "f", "name": "p3" },
                      { "type": "label", "coords": [202, 90], "text": "e", "size": 11, "align": "center", "role": "t", "name": "p0" },
                      { "type": "label", "coords": [130, 155], "text": "a", "size": 11, "align": "center", "role": "t", "name": "p1" },
                      { "type": "label", "coords": [58, 90], "text": "a^2", "size": 11, "align": "center", "role": "t", "name": "p2" },
                      { "type": "label", "coords": [130, 22], "text": "a^3", "size": 11, "align": "center", "role": "t", "name": "p3" }
                    ]
                  }
                ]
              }
            },
            {
              "type": "math",
              "label": "Examples 5.21, 5.23–5.26",
              "title": "Examples of Cyclic Subgroups and Generators",
              "tex": "\\langle 3 \\rangle = 3\\mathbb{Z} = \\{\\dots,-6,-3,0,3,6,\\dots\\}, \\qquad \\zeta = \\cos\\frac{2\\pi}{n} + i\\sin\\frac{2\\pi}{n},\\; U_n = \\langle \\zeta \\rangle",
              "body": "Example 5.21: In \\(D_{10}\\), \\(\\langle \\mu\\rho^k \\rangle = \\{\\iota, \\mu\\rho^k\\}\\) has \\(2\\) elements, while \\(\\langle \\rho \\rangle = \\{\\iota, \\rho, \\dots, \\rho^9\\}\\) has \\(10\\) elements. Example 5.23: \\(\\mathbb{Z}_4 = \\langle 1 \\rangle = \\langle 3 \\rangle\\) is cyclic, but the Klein 4-group \\(V\\) is not cyclic since \\(\\langle a \\rangle, \\langle b \\rangle, \\langle c \\rangle\\) each have only \\(2\\) elements. Examples 5.24–5.25: \\(\\mathbb{Z}\\) is cyclic with generators \\(1\\) and \\(-1\\), and \\(\\langle n \\rangle = n\\mathbb{Z}\\) with \\(6\\mathbb{Z} < 3\\mathbb{Z}\\). Example 5.26: The \\(n\\)th roots of unity \\(U_n\\) form a cyclic group generated by \\(\\zeta\\)."
            },
            {
              "type": "mcq",
              "label": "Quiz · OMR",
              "time": 60,
              "q": "Which of the following is a nontrivial proper subgroup of \\(\\mathbb{Z}_4\\)?",
              "options": [
                "\\(\\{0, 2\\}\\)",
                "\\(\\{0, 3\\}\\)",
                "\\(\\{0\\}\\)",
                "\\(\\mathbb{Z}_4\\)"
              ],
              "answer": 0,
              "why": "By Example 5.7, \\(\\{0, 2\\}\\) is the only nontrivial proper subgroup of \\(\\mathbb{Z}_4\\); \\(\\{0, 3\\}\\) is not closed since \\(3 +_4 3 = 2\\)."
            },
            {
              "type": "mcq",
              "label": "Quiz · OMR",
              "time": 60,
              "q": "By Theorem 5.16, a finite nonempty subset \\(H \\subseteq G\\) is a subgroup if:",
              "options": [
                "\\(H\\) is closed under the operation",
                "\\(G\\) is an abelian group",
                "\\(H\\) has prime order",
                "Every element has order \\(2\\)"
              ],
              "answer": 0,
              "why": "For a finite nonempty subset \\(H\\) of a group \\(G\\), closure alone guarantees that \\(e \\in H\\) and inverses lie in \\(H\\)."
            },
            {
              "type": "fill",
              "label": "Quiz · Fill in",
              "time": 60,
              "q": "For any group \\(G\\), the subgroup \\(\\{e\\}\\) is called the ______ subgroup.",
              "answer": "trivial",
              "why": "By Definition 5.2, \\(\\{e\\}\\) is the trivial subgroup of \\(G\\), while \\(G\\) itself is the improper subgroup."
            },
            {
              "type": "number",
              "label": "Quiz · Number",
              "time": 60,
              "q": "How many nontrivial proper subgroups does the Klein 4-group \\(V\\) have?",
              "answer": 3,
              "why": "By Example 5.7 and Figure 5.10b, \\(V\\) has \\(3\\) nontrivial proper subgroups: \\(\\{e, a\\}\\), \\(\\{e, b\\}\\), and \\(\\{e, c\\}\\)."
            }
          ]
        },
        {
          "id": "abs-m2-cyclic-groups",
          "title": "Cyclic Groups and Their Subgroups",
          "icon": "sigma",
          "source": "Fraleigh 8th ed. §6, 6.1–6.21 (7th ed. §6: Cyclic Groups, 6.1–6.17)",
          "cards": [
            {
              "type": "info",
              "label": "Order & Theorem 6.1",
              "title": "Order of an Element and Theorem 6.1: Cyclic Implies Abelian",
              "defines": ["abs-m2-order-of-element"],
              "body": "The order of \\(a \\in G\\) is the order \\(|\\langle a \\rangle|\\) of the cyclic subgroup generated by \\(a\\) (the smallest \\(m \\in \\mathbb{Z}^+\\) with \\(a^m = e\\), or infinite order). Theorem 6.1: Every cyclic group is abelian.",
              "examples": [
                "Order of \\(a\\) is \\(|\\langle a \\rangle|\\)",
                "\\(a^r a^s = a^{r+s} = a^s a^r\\)"
              ],
              "art": {
                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
                "steps": [
                  {
                    "step": 0,
                    "name": "order",
                    "objects": [
                      { "type": "circle", "center": [130, 90], "r": 52, "role": "s ok", "name": "cyc" },
                      { "type": "point", "coords": [182, 90], "size": 4, "role": "f", "name": "e" },
                      { "type": "label", "coords": [205, 90], "text": "a^m = e", "size": 11, "align": "center", "role": "t", "name": "e" },
                      { "type": "label", "coords": [130, 90], "text": "|<a>| = m", "size": 12, "align": "center", "role": "t", "name": "cyc" }
                    ]
                  }
                ]
              }
            },
            {
              "type": "derivation",
              "title": "Proof of Theorem 6.1: Every Cyclic Group is Abelian",
              "legend": "Let \\(G = \\langle a \\rangle\\) and take any two elements \\(g_1 = a^r\\) and \\(g_2 = a^s\\) in \\(G\\).",
              "phases": [
                { "name": "Write as powers", "why": "express g1 and g2 as powers of generator a" },
                { "name": "Add exponents", "why": "use law of exponents and integer commutativity" },
                { "name": "Reverse order", "why": "split exponents back into g2 g1" }
              ],
              "steps": [
                {
                  "phase": "Write as powers",
                  "tex": "g_1 g_2 = a^r a^s",
                  "note": "Since \\(G = \\langle a \\rangle\\), choose \\(r, s \\in \\mathbb{Z}\\) with \\(g_1 = a^r\\) and \\(g_2 = a^s\\)."
                },
                {
                  "phase": "Add exponents",
                  "move": { "type": "apply" },
                  "tex": "g_1 g_2 = a^{r+s}",
                  "note": "Combine powers of \\(a\\) using the law of exponents."
                },
                {
                  "move": { "type": "apply" },
                  "tex": "g_1 g_2 = a^{s+r}",
                  "note": "Use commutativity of integer addition: \\(r + s = s + r\\).",
                  "ask": {
                    "q": "Why does \\(a^{r+s}\\) equal \\(a^{s+r}\\)?",
                    "options": [
                      "Addition in \\(\\mathbb{Z}\\) is commutative",
                      "Every group is abelian",
                      "The group \\(G\\) is finite",
                      "Division algorithm in \\(\\mathbb{Z}\\)"
                    ],
                    "answer": 0,
                    "why": "The exponents \\(r\\) and \\(s\\) are integers, and integer addition is commutative."
                  }
                },
                {
                  "phase": "Reverse order",
                  "move": { "type": "apply" },
                  "tex": "g_1 g_2 = a^s a^r",
                  "note": "Split the exponent \\(s + r\\) back into \\(a^s a^r\\)."
                },
                {
                  "move": { "type": "apply" },
                  "tex": "g_1 g_2 = g_2 g_1",
                  "note": "Substitute \\(a^s = g_2\\) and \\(a^r = g_1\\). Thus \\(G\\) is abelian."
                }
              ]
            },
            {
              "type": "math",
              "label": "Division Algorithm 6.2 & Ex 6.4–6.5",
              "title": "Division Algorithm for Z",
              "tex": "n = mq + r \\quad (0 \\le r < m): \\qquad 38 = 7(5) + 3, \\qquad -38 = 7(-6) + 4",
              "body": "Division Algorithm (6.2): If \\(m\\) is a positive integer and \\(n \\in \\mathbb{Z}\\), there exist unique integers \\(q\\) (quotient) and \\(r\\) (nonnegative remainder) such that \\(n = mq + r\\) and \\(0 \\le r < m\\). Example 6.4: Dividing \\(38\\) by \\(7\\) gives \\(q = 5, r = 3\\). Example 6.5: Dividing \\(-38\\) by \\(7\\) requires a nonnegative remainder \\(0 \\le r < 7\\), giving \\(q = -6\\) and \\(r = 4\\)."
            },
            {
              "type": "info",
              "label": "Theorem 6.6 & Corollary 6.7",
              "title": "Theorem 6.6 & Corollary 6.7: Subgroups of Cyclic Groups",
              "body": "Theorem 6.6: A subgroup of a cyclic group is cyclic. Proof: If \\(H \\le \\langle a \\rangle\\) and \\(H \\neq \\{e\\}\\), let \\(m\\) be the least positive integer with \\(a^m \\in H\\). For any \\(a^n \\in H\\), writing \\(n = mq + r\\) (\\(0 \\le r < m\\)) gives \\(a^r = (a^m)^{-q} a^n \\in H\\), forcing \\(r = 0\\) and \\(H = \\langle a^m \\rangle\\). Corollary 6.7: The subgroups of \\(\\langle \\mathbb{Z}, + \\rangle\\) are precisely \\(n\\mathbb{Z}\\) for \\(n \\in \\mathbb{Z}\\).",
              "examples": [
                "\\(H = \\langle a^m \\rangle\\) (minimal \\(m > 0\\))",
                "Subgroups of \\(\\mathbb{Z}\\) are \\(n\\mathbb{Z}\\)"
              ]
            },
            {
              "type": "info",
              "label": "Definition 6.8 & Example 6.9",
              "title": "Definition 6.8: Greatest Common Divisor",
              "defines": ["abs-m2-gcd"],
              "body": "For \\(r \\in \\mathbb{Z}^+\\) and \\(s \\ge 0\\), the positive generator \\(d\\) of the cyclic subgroup \\(H = \\{nr + ms \\mid n, m \\in \\mathbb{Z}\\}\\) under addition is the greatest common divisor \\(d = \\gcd(r, s)\\). Thus \\(d = nr + ms\\) for some \\(n, m \\in \\mathbb{Z}\\) (Bézout's identity).",
              "examples": [
                "\\(\\gcd(42, 72) = 6\\)",
                "\\(6 = 3(72) + (-5)(42)\\)"
              ],
              "art": {
                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
                "steps": [
                  {
                    "step": 0,
                    "name": "gcd",
                    "objects": [
                      { "type": "polygon", "points": [[20, 130], [240, 130], [240, 50], [20, 50]], "role": "s ok", "name": "box" },
                      { "type": "label", "coords": [130, 105], "text": "H = {nr + ms | n, m in Z} = dZ", "size": 11, "align": "center", "role": "t", "name": "box" },
                      { "type": "label", "coords": [130, 72], "text": "d = gcd(r, s) = nr + ms", "size": 11, "align": "center", "role": "t", "name": "bezout" }
                    ]
                  }
                ]
              }
            },
            {
              "type": "info",
              "label": "Theorem 6.10 & Ex 6.13–6.14",
              "title": "Theorem 6.10: Structure of Cyclic Groups",
              "body": "Let \\(G = \\langle a \\rangle\\) be a cyclic group. If \\(|G|\\) is infinite, then \\(G \\simeq \\langle \\mathbb{Z}, + \\rangle\\) via \\(\\phi(a^i) = i\\). If \\(|G| = n\\) is finite, then \\(G \\simeq \\langle \\mathbb{Z}_n, +_n \\rangle\\) via \\(\\psi(a^i) = i\\) for \\(0 \\le i < n\\). Why it matters: up to isomorphism, \\(\\mathbb{Z}\\) and \\(\\mathbb{Z}_n\\) are the only cyclic groups. In \\(S_n\\), a \\(k\\)-cycle has order \\(k\\) (Example 6.14).",
              "examples": [
                "Infinite cyclic \\(\\simeq \\mathbb{Z}\\)",
                "Order \\(n\\) cyclic \\(\\simeq \\mathbb{Z}_n\\)"
              ]
            },
            {
              "type": "info",
              "label": "Theorem 6.15 & Corollaries 6.17, 6.20",
              "title": "Theorem 6.15 & Corollaries 6.17, 6.20: Subgroups of Finite Cyclic Groups",
              "body": "Let \\(G = \\langle a \\rangle\\) have order \\(n\\), and let \\(b = a^s\\). Then \\(b\\) generates a cyclic subgroup \\(H\\) of order \\(n/d\\), where \\(d = \\gcd(n, s)\\), and \\(\\langle a^s \\rangle = \\langle a^t \\rangle \\iff \\gcd(s, n) = \\gcd(t, n)\\). (Cor 6.17) The generators of \\(G\\) are \\(a^r\\) with \\(\\gcd(r, n) = 1\\). (Cor 6.20) If \\(H \\le G\\), then \\(|H|\\) divides \\(|G|\\).",
              "examples": [
                "\\(|\\langle a^s \\rangle| = n / \\gcd(n, s)\\)",
                "\\(\\langle a^r \\rangle = G \\iff \\gcd(r, n) = 1\\)"
              ]
            },
            {
              "type": "math",
              "label": "Example 6.16",
              "title": "Subgroups and Orders in Z12",
              "tex": "\\text{In }\\mathbb{Z}_{12}: \\quad |\\langle 3 \\rangle| = \\frac{12}{\\gcd(3,12)} = 4, \\quad |\\langle 8 \\rangle| = \\frac{12}{\\gcd(8,12)} = 3, \\quad |\\langle 5 \\rangle| = \\frac{12}{1} = 12",
              "body": "Example 6.16: In \\(\\mathbb{Z}_{12}\\) with generator \\(1\\), \\(\\gcd(3, 12) = 3\\) so \\(\\langle 3 \\rangle = \\{0, 3, 6, 9\\}\\) has \\(12/3 = 4\\) elements. Since \\(\\gcd(8, 12) = 4\\), \\(\\langle 8 \\rangle = \\{0, 4, 8\\}\\) has \\(12/4 = 3\\) elements. Since \\(\\gcd(5, 12) = 1\\), \\(5\\) generates all \\(12\\) elements of \\(\\mathbb{Z}_{12}\\)."
            },
            {
              "type": "math",
              "label": "Examples 6.18 & 6.21",
              "title": "Subgroup Lattice of Z18 and Subgroup Orders in Z28",
              "tex": "\\mathbb{Z}_{18}: \\; \\langle 1 \\rangle = \\mathbb{Z}_{18},\\; \\langle 2 \\rangle\\text{ (ord 9)},\\; \\langle 3 \\rangle\\text{ (ord 6)},\\; \\langle 6 \\rangle\\text{ (ord 3)},\\; \\langle 9 \\rangle\\text{ (ord 2)},\\; \\langle 0 \\rangle\\text{ (ord 1)}",
              "body": "Example 6.18 (Fig. 6.19): The generators of \\(\\mathbb{Z}_{18}\\) are \\(1, 5, 7, 11, 13, 17\\). Its distinct subgroups correspond to the divisors of \\(18\\): \\(\\langle 1 \\rangle, \\langle 2 \\rangle, \\langle 3 \\rangle = \\langle 15 \\rangle, \\langle 6 \\rangle = \\langle 12 \\rangle, \\langle 9 \\rangle, \\langle 0 \\rangle\\). Example 6.21: Since \\(28 = 2^2 \\cdot 7\\), the subgroup orders of \\(\\mathbb{Z}_{28}\\) are \\(1, 2, 4, 7, 14, 28\\), generated by \\(0, 14, 7, 4, 2, 1\\)."
            },
            {
              "type": "mcq",
              "label": "Quiz · OMR",
              "time": 60,
              "q": "When \\(-38\\) is divided by \\(7\\) in the division algorithm, what are \\(q\\) and \\(r\\)?",
              "options": [
                "\\(q = -6,\\; r = 4\\)",
                "\\(q = -5,\\; r = -3\\)",
                "\\(q = -5,\\; r = 3\\)",
                "\\(q = -6,\\; r = -4\\)"
              ],
              "answer": 0,
              "why": "By Example 6.5, the remainder \\(r\\) must satisfy \\(0 \\le r < 7\\), so \\(-38 = 7(-6) + 4\\)."
            },
            {
              "type": "mcq",
              "label": "Quiz · OMR",
              "time": 60,
              "q": "Which elements generate the cyclic group \\(\\mathbb{Z}_{18}\\)?",
              "options": [
                "\\(1, 5, 7, 11, 13, 17\\)",
                "\\(1, 2, 3, 6, 9, 18\\)",
                "\\(2, 4, 8, 10, 14, 16\\)",
                "\\(1, 3, 5, 7, 9, 11\\)"
              ],
              "answer": 0,
              "why": "By Corollary 6.17 and Example 6.18, \\(r\\) generates \\(\\mathbb{Z}_{18}\\) if and only if \\(\\gcd(r, 18) = 1\\)."
            },
            {
              "type": "fill",
              "label": "Quiz · Fill in",
              "time": 60,
              "q": "Every infinite cyclic group is isomorphic to the additive group ______.",
              "answer": "Z|<Z, +>|integers",
              "why": "By Theorem 6.10, any infinite cyclic group \\(\\langle a \\rangle\\) is isomorphic to \\(\\langle \\mathbb{Z}, + \\rangle\\)."
            },
            {
              "type": "number",
              "label": "Quiz · Number",
              "time": 60,
              "q": "In the additive group \\(\\mathbb{Z}_{12}\\), what is the order of the subgroup \\(\\langle 8 \\rangle\\)?",
              "answer": 3,
              "why": "By Theorem 6.15 and Example 6.16, \\(|\\langle 8 \\rangle| = 12 / \\gcd(8, 12) = 12 / 4 = 3\\)."
            },
            {
              "type": "number",
              "label": "Quiz · Number",
              "time": 60,
              "q": "How many distinct subgroups does the cyclic group \\(\\mathbb{Z}_{28}\\) have?",
              "answer": 6,
              "why": "By Example 6.21, \\(28 = 2^2 \\cdot 7\\) has \\(6\\) positive divisors (\\(1, 2, 4, 7, 14, 28\\)), giving \\(6\\) subgroups."
            }
          ]
        },
        {
          "id": "abs-m2-groups-of-permutations",
          "title": "Homomorphisms, Cayley's Theorem, and Transpositions",
          "icon": "motion",
          "source": "Fraleigh 8th ed. §8, 8.1–8.18 (7th ed. §8: Groups of Permutations, 8.1–8.18)",
          "cards": [
            {
              "type": "info",
              "label": "Definition 8.1",
              "title": "Definition 8.1: Group Homomorphism",
              "defines": ["abs-m2-homomorphism"],
              "body": "Let \\(G\\) and \\(G'\\) be groups with \\(\\phi: G \\to G'\\). The map \\(\\phi\\) is a homomorphism if the homomorphism property \\(\\phi(ab) = \\phi(a)\\phi(b)\\) holds for all \\(a, b \\in G\\).",
              "examples": [
                "\\(\\phi(ab) = \\phi(a)\\phi(b)\\)",
                "Need not be 1-1 or onto"
              ],
              "art": {
                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
                "steps": [
                  {
                    "step": 0,
                    "name": "hom",
                    "objects": [
                      { "type": "ellipse", "center": [65, 90], "rx": 46, "ry": 54, "role": "s ok", "name": "G" },
                      { "type": "ellipse", "center": [195, 90], "rx": 46, "ry": 54, "role": "s ok", "name": "Gp" },
                      { "type": "arrow", "p1": [90, 90], "p2": [170, 90], "role": "lk", "width": 2, "name": "phi" },
                      { "type": "label", "coords": [65, 156], "text": "G", "size": 11, "align": "center", "role": "t", "name": "G" },
                      { "type": "label", "coords": [195, 156], "text": "G'", "size": 11, "align": "center", "role": "t", "name": "Gp" },
                      { "type": "label", "coords": [65, 90], "text": "ab", "size": 11, "align": "center", "role": "t", "name": "ab" },
                      { "type": "label", "coords": [195, 90], "text": "phi(a)phi(b)", "size": 11, "align": "center", "role": "t", "name": "pab" }
                    ]
                  }
                ]
              }
            },
            {
              "type": "info",
              "label": "Definitions 8.4 & 8.6",
              "title": "Definitions 8.4 & 8.6: Image, Inverse Image, and Kernel",
              "defines": ["abs-m2-image-inverse-image", "abs-m2-kernel"],
              "body": "For \\(\\phi: X \\to Y\\), \\(A \\subseteq X\\), \\(B \\subseteq Y\\), the image is \\(\\phi[A] = \\{\\phi(a) \\mid a \\in A\\}\\) and the inverse image is \\(\\phi^{-1}[B] = \\{a \\in A \\mid \\phi(a) \\in B\\}\\). For a group homomorphism \\(\\phi: G \\to G'\\), the subgroup \\(\\operatorname{Ker}(\\phi) = \\phi^{-1}[\\{e'\\}] = \\{x \\in G \\mid \\phi(x) = e'\\}\\) is the kernel of \\(\\phi\\).",
              "examples": [
                "\\(\\operatorname{Ker}(\\phi) = \\{x \\in G \\mid \\phi(x) = e'\\}\\)"
              ],
              "art": {
                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
                "steps": [
                  {
                    "step": 0,
                    "name": "ker",
                    "objects": [
                      { "type": "ellipse", "center": [65, 90], "rx": 46, "ry": 54, "role": "lk", "name": "G" },
                      { "type": "ellipse", "center": [65, 90], "rx": 28, "ry": 26, "role": "s ok", "name": "K" },
                      { "type": "ellipse", "center": [195, 90], "rx": 46, "ry": 54, "role": "lk", "name": "Gp" },
                      { "type": "point", "coords": [195, 90], "size": 4, "role": "f", "name": "ep" },
                      { "type": "arrow", "p1": [95, 90], "p2": [188, 90], "role": "lk", "width": 2, "name": "toE" },
                      { "type": "label", "coords": [65, 90], "text": "Ker(phi)", "size": 11, "align": "center", "role": "t", "name": "K" },
                      { "type": "label", "coords": [195, 70], "text": "e'", "size": 11, "align": "center", "role": "t", "name": "ep" }
                    ]
                  }
                ]
              }
            },
            {
              "type": "info",
              "label": "Theorem 8.5",
              "title": "Theorem 8.5: Properties of a Group Homomorphism",
              "body": "Let \\(\\phi: G \\to G'\\) be a group homomorphism. Then: (1) \\(\\phi(e) = e'\\) (preserves identity); (2) \\(\\phi(a^{-1}) = \\phi(a)^{-1}\\) for all \\(a \\in G\\) (preserves inverses); (3) if \\(H \\le G\\), then \\(\\phi[H] \\le G'\\); (4) if \\(K' \\le G'\\), then \\(\\phi^{-1}[K'] \\le G\\). In particular, \\(\\operatorname{Ker}(\\phi) = \\phi^{-1}[\\{e'\\}] \\le G\\).",
              "examples": [
                "\\(\\phi(e) = e'\\)",
                "\\(\\phi(a^{-1}) = \\phi(a)^{-1}\\)"
              ]
            },
            {
              "type": "math",
              "label": "Examples 8.2, 8.3, 8.7 & 8.8",
              "title": "Exponential, Root-of-Unity, and Dihedral Homomorphisms",
              "tex": "\\phi: \\mathbb{R} \\to U,\\; \\phi(x) = e^{2\\pi i x},\\; \\operatorname{Ker}(\\phi) = \\mathbb{Z},\\; \\phi[\\langle 1/n \\rangle] = U_n",
              "body": "Examples 8.2 & 8.7: \\(\\phi(x) = \\cos(2\\pi x) + i\\sin(2\\pi x) = e^{2\\pi i x}\\) satisfies \\(\\phi(a+b) = \\phi(a)\\phi(b)\\), maps \\(\\mathbb{R}\\) onto the circle group \\(U\\) with \\(\\operatorname{Ker}(\\phi) = \\mathbb{Z}\\), and maps \\(\\langle 1/n \\rangle\\) onto \\(U_n\\). Example 8.3: \\(\\phi: U_{28} \\to U_4\\) given by \\(\\phi(z) = z^7\\) is a homomorphism since \\((z_1 z_2)^7 = z_1^7 z_2^7\\). Example 8.8: \\(\\phi: \\mathbb{Z}_n \\to D_n\\) given by \\(\\phi(k) = \\rho^k\\) has image \\(\\phi[\\mathbb{Z}_n] = \\langle \\rho \\rangle\\)."
            },
            {
              "type": "info",
              "label": "Definitions 8.10 & 8.13",
              "title": "Definitions 8.10 & 8.13: Left and Right Regular Representations",
              "defines": ["abs-m2-regular-representation"],
              "body": "A subgroup of a permutation group is a group of permutations. For a group \\(G\\), the map \\(\\phi: G \\to S_G\\) given by \\(\\phi(x) = \\lambda_x\\) where \\(\\lambda_x(g) = xg\\) is the left regular representation of \\(G\\). The map \\(\\tau: G \\to S_G\\) given by \\(\\tau(x) = \\sigma_{x^{-1}}\\) where \\(\\sigma_x(g) = gx\\) is the right regular representation of \\(G\\).",
              "examples": [
                "\\(\\lambda_x(g) = xg\\) (row \\(x\\) of table)",
                "\\(\\sigma_x(g) = gx\\) (column \\(x\\))"
              ],
              "art": {
                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
                "steps": [
                  {
                    "step": 0,
                    "name": "reg",
                    "objects": [
                      { "type": "polygon", "points": [[25, 145], [235, 145], [235, 95], [25, 95]], "role": "s ok", "name": "left" },
                      { "type": "polygon", "points": [[25, 80], [235, 80], [235, 30], [25, 30]], "role": "s ok", "name": "right" },
                      { "type": "label", "coords": [130, 120], "text": "Left: phi(x) = lambda_x, lambda_x(g) = xg", "size": 11, "align": "center", "role": "t", "name": "left" },
                      { "type": "label", "coords": [130, 55], "text": "Right: tau(x) = sigma_{x^-1}, sigma_x(g) = gx", "size": 11, "align": "center", "role": "t", "name": "right" }
                    ]
                  }
                ]
              }
            },
            {
              "type": "info",
              "label": "Theorem 8.11 & Example 8.12",
              "title": "Theorem 8.11 (Cayley's Theorem)",
              "body": "Every group is isomorphic to a group of permutations. Proof: The left regular representation \\(\\phi: G \\to S_G\\) defined by \\(\\phi(x) = \\lambda_x\\) is one-to-one (since \\(\\lambda_a = \\lambda_b \\Rightarrow a = \\lambda_a(e) = \\lambda_b(e) = b\\)) and a homomorphism (since \\(\\lambda_{ab}(g) = (ab)g = a(bg) = (\\lambda_a \\lambda_b)(g)\\)), so \\(G \\simeq \\phi[G] \\le S_G\\). Example 8.12: \\(\\mathbb{Z}_6\\) embeds into \\(S_5\\) via \\(\\langle (1,2,3)(4,5) \\rangle\\).",
              "examples": [
                "\\(G \\simeq \\phi[G] \\le S_G\\)",
                "\\(\\lambda_{ab} = \\lambda_a \\lambda_b\\)"
              ]
            },
            {
              "type": "derivation",
              "title": "Proof of Cayley's Theorem: Homomorphism Property",
              "legend": "Show that \\(\\lambda_{ab}(g) = (\\lambda_a \\lambda_b)(g)\\) for all \\(a, b, g \\in G\\).",
              "phases": [
                { "name": "Definition", "why": "apply definition of lambda_{ab}" },
                { "name": "Associativity", "why": "regroup (ab)g as a(bg)" },
                { "name": "Composition", "why": "rewrite as lambda_a composed with lambda_b" }
              ],
              "steps": [
                {
                  "phase": "Definition",
                  "tex": "\\lambda_{ab}(g) = (ab)g",
                  "note": "By Definition 8.10, \\(\\lambda_x(g) = xg\\) for \\(x = ab\\)."
                },
                {
                  "phase": "Associativity",
                  "move": { "type": "apply" },
                  "tex": "\\lambda_{ab}(g) = a(bg)",
                  "note": "Apply associativity of the group operation in \\(G\\).",
                  "ask": {
                    "q": "Why does \\((ab)g\\) equal \\(a(bg)\\)?",
                    "options": [
                      "Associativity in the group \\(G\\)",
                      "Commutativity in \\(G\\)",
                      "Definition of inverse in \\(G\\)",
                      "Cancellation law in \\(G\\)"
                    ],
                    "answer": 0,
                    "why": "The group operation in \\(G\\) is associative by axiom \\(\\mathscr{G}_1\\)."
                  }
                },
                {
                  "phase": "Composition",
                  "move": { "type": "apply" },
                  "tex": "\\lambda_{ab}(g) = \\lambda_a(bg)",
                  "note": "Apply Definition 8.10 to rewrite \\(a(bg)\\) as \\(\\lambda_a(bg)\\)."
                },
                {
                  "move": { "type": "apply" },
                  "tex": "\\lambda_{ab}(g) = \\lambda_a(\\lambda_b(g))",
                  "note": "Apply Definition 8.10 to rewrite \\(bg\\) as \\(\\lambda_b(g)\\)."
                },
                {
                  "move": { "type": "apply" },
                  "tex": "\\lambda_{ab}(g) = (\\lambda_a \\lambda_b)(g)",
                  "note": "By definition of permutation multiplication (composition), \\(\\lambda_{ab} = \\lambda_a \\lambda_b\\)."
                }
              ]
            },
            {
              "type": "info",
              "label": "Definition 8.14 & Theorem 8.15",
              "title": "Definition 8.14: Transposition and Theorem 8.15",
              "defines": ["abs-m2-transposition"],
              "body": "Definition 8.14: A cycle of length \\(2\\) is a transposition. Every \\(n\\)-cycle factors into \\(n-1\\) transpositions: \\((a_1, a_2, \\dots, a_n) = (a_1, a_n)(a_1, a_{n-1})\\cdots(a_1, a_2)\\). Theorem 8.15: Any permutation of a finite set containing at least two elements is a product of transpositions.",
              "examples": [
                "2-cycle: \\((a_1, a_2)\\)",
                "\\((1,6)(2,5,3) = (1,6)(2,3)(2,5)\\)"
              ],
              "art": {
                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
                "steps": [
                  {
                    "step": 0,
                    "name": "trans",
                    "objects": [
                      { "type": "circle", "center": [75, 90], "r": 25, "role": "s ok", "name": "a1" },
                      { "type": "circle", "center": [185, 90], "r": 25, "role": "s ok", "name": "a2" },
                      { "type": "arrow", "p1": [102, 98], "p2": [158, 98], "role": "lk", "width": 2, "name": "to" },
                      { "type": "arrow", "p1": [158, 82], "p2": [102, 82], "role": "ik", "width": 2, "name": "back" },
                      { "type": "label", "coords": [75, 90], "text": "a1", "size": 12, "align": "center", "role": "t", "name": "a1" },
                      { "type": "label", "coords": [185, 90], "text": "a2", "size": 12, "align": "center", "role": "t", "name": "a2" },
                      { "type": "label", "coords": [130, 138], "text": "Transposition (a1, a2)", "size": 11, "align": "center", "role": "t", "name": "to" }
                    ]
                  }
                ]
              }
            },
            {
              "type": "math",
              "label": "Examples 8.16–8.18",
              "title": "Transposition Products and Orbits of a Permutation",
              "tex": "(1,6)(2,5,3) = (1,6)(2,3)(2,5), \\qquad \\iota = (1,2)(1,2), \\qquad \\sigma = (1,2,6)(3,5) \\in S_6",
              "body": "Examples 8.16 & 8.17: \\((1, 6)(2, 5, 3) = (1, 6)(2, 3)(2, 5)\\), and in \\(S_n\\) (\\(n \\ge 2\\)) the identity is \\(\\iota = (1, 2)(1, 2)\\). Orbit of an element (Example 8.18): For \\(\\sigma \\in S_A\\) and \\(a \\in A\\), the orbit of \\(a\\) is \\(\\{\\sigma^k(a) \\mid k \\in \\mathbb{Z}\\}\\), which consists of the elements in the disjoint cycle containing \\(a\\). For \\(\\sigma = (1, 2, 6)(3, 5) \\in S_6\\), the orbits are \\(\\{1, 2, 6\\}\\), \\(\\{3, 5\\}\\), and \\(\\{4\\}\\)."
            },
            {
              "type": "mcq",
              "label": "Quiz · OMR",
              "time": 60,
              "q": "Let \\(\\phi: G \\to G'\\) be a group homomorphism. Which statement is always true?",
              "options": [
                "\\(\\phi(a^{-1}) = \\phi(a)^{-1}\\)",
                "\\(\\phi\\) is one-to-one",
                "\\(\\phi\\) maps onto \\(G'\\)",
                "\\(\\operatorname{Ker}(\\phi) = G'\\)"
              ],
              "answer": 0,
              "why": "By Theorem 8.5, every group homomorphism preserves identity, inverses, and subgroups, even when it is neither one-to-one nor onto."
            },
            {
              "type": "mcq",
              "label": "Quiz · OMR",
              "time": 60,
              "q": "What is the kernel of \\(\\phi: \\mathbb{R} \\to U\\) defined by \\(\\phi(x) = e^{2\\pi i x}\\)?",
              "options": [
                "\\(\\mathbb{Z}\\)",
                "\\(\\{0\\}\\)",
                "\\(\\mathbb{Q}\\)",
                "\\(U_n\\)"
              ],
              "answer": 0,
              "why": "By Example 8.7, \\(\\cos(2\\pi x) + i\\sin(2\\pi x) = 1\\) if and only if \\(x\\) is an integer, so \\(\\operatorname{Ker}(\\phi) = \\mathbb{Z}\\)."
            },
            {
              "type": "fill",
              "label": "Quiz · Fill in",
              "time": 60,
              "q": "A cycle of length \\(2\\) in a permutation group is called a ______.",
              "answer": "transposition",
              "why": "By Definition 8.14, any 2-cycle \\((a_1, a_2)\\) is called a transposition."
            },
            {
              "type": "number",
              "label": "Quiz · Number",
              "time": 60,
              "q": "In \\(S_6\\), how many distinct orbits does \\(\\sigma = (1, 2, 6)(3, 5)\\) have?",
              "answer": 3,
              "why": "By Example 8.18, writing \\(\\sigma = (1, 2, 6)(3, 5)(4)\\) in \\(S_6\\) shows \\(3\\) orbits: \\(\\{1, 2, 6\\}\\), \\(\\{3, 5\\}\\), and \\(\\{4\\}\\)."
            }
          ]
        }
      ]
    }
  ]
}
```

#### Plain-English Note for Module II
- **Sheets (3 sheets, 40 cards total):**
  1. `abs-m2-subgroups-cyclic` (*Subgroups and Cyclic Subgroups*, 13 cards): covers subgroups (Def 5.1), improper, proper, trivial, and nontrivial subgroups (Def 5.2), subgroup examples and Hasse diagrams for \(\mathbb{Z}_4\) and the Klein 4-group \(V\) (Examples 5.3–5.7, Tables 5.8–5.9, Fig. 5.10), the three subgroup tests (Theorems 5.12, 5.15, 5.16 and Examples 5.11, 5.13, 5.14, 5.17, 5.18), cyclic subgroups \(\langle a \rangle\) (Theorem 5.19 with proof, Def 5.20), and generators and cyclic groups (Def 5.22, Examples 5.21, 5.23–5.26), plus 4 quiz cards.
  2. `abs-m2-cyclic-groups` (*Cyclic Groups and Their Subgroups*, 14 cards): covers order of an element and Theorem 6.1 (every cyclic group is abelian, with derivation proof), the division algorithm for \(\mathbb{Z}\) (6.2, Examples 6.4–6.5), subgroups of cyclic groups (Theorem 6.6 and Corollary 6.7), greatest common divisor and Bézout's identity (Def 6.8, Example 6.9), structure of cyclic groups (Theorem 6.10, Examples 6.13–6.14), and subgroups and generators of finite cyclic groups (Theorem 6.15, Corollaries 6.17 & 6.20, Examples 6.16, 6.18 with Fig. 6.19, and 6.21), plus 5 quiz cards.
  3. `abs-m2-groups-of-permutations` (*Homomorphisms, Cayley's Theorem, and Transpositions*, 13 cards): covers group homomorphisms (Def 8.1, Examples 8.2, 8.3, 8.7, 8.8), image, inverse image, and kernel (Defs 8.4 & 8.6, Theorem 8.5), left and right regular representations (Defs 8.10 & 8.13, Table 8.9), Cayley's Theorem (Theorem 8.11, Example 8.12, derivation proof), transpositions (Def 8.14, Theorem 8.15, Examples 8.16–8.17), and orbits (Example 8.18), plus 4 quiz cards.
- **Anything omitted:** Nothing was omitted; all definitions, theorems, corollaries, proofs, examples, and referred exercises from Module II (Units 7–12) are included.

---

### Module III — `data-abs-m3.json`

```json
{
  "meta": {
    "title": "Study Match: Abstract Algebra I (MAT5CJ302)",
    "subject": "Abstract Algebra I · Modules I to IV",
    "home": "Focus",
    "opponent": "Time",
    "version": 1,
    "inlineChecks": false,
    "autoRevealQuestions": true,
    "definitionChecks": true,
    "date": "",
    "sessions": []
  },
  "glossary": [
    {
      "id": "abs-m3-symmetric-group",
      "term": "symmetric group on n letters",
      "aliases": ["symmetric group", "Sn"],
      "definition": "The symmetric group on \\(n\\) letters, denoted \\(S_n\\), is the group of all \\(n!\\) permutations of the finite set \\(\\{1, 2, \\dots, n\\}\\) under permutation multiplication (function composition)."
    },
    {
      "id": "abs-m3-disjoint-cycles",
      "term": "cycle and disjoint cycles",
      "aliases": ["cycle", "k-cycle", "disjoint cycles", "disjoint"],
      "definition": "A \\(k\\)-cycle \\((a_1, a_2, \\dots, a_k)\\) maps \\(a_1 \\mapsto a_2 \\mapsto \\dots \\mapsto a_k \\mapsto a_1\\) and fixes all other elements. A collection of cycles is disjoint if no element appears in more than one cycle."
    },
    {
      "id": "abs-m3-even-odd-permutation",
      "term": "even and odd permutations",
      "aliases": ["even permutation", "odd permutation", "sign of a permutation", "sgn"],
      "definition": "A permutation of a finite set is even if it can be written as a product of an even number of transpositions, and odd if it can be written as a product of an odd number of transpositions."
    },
    {
      "id": "abs-m3-alternating-group",
      "term": "alternating group",
      "aliases": ["An", "alternating group on n letters"],
      "definition": "The alternating group \\(A_n\\) on \\(n\\) letters is the subgroup of \\(S_n\\) consisting of all even permutations of \\(\\{1, 2, \\dots, n\\}\\); for \\(n \\ge 2\\), \\(|A_n| = n!/2\\)."
    },
    {
      "id": "abs-m3-coset",
      "term": "left and right cosets",
      "aliases": ["left coset", "right coset", "coset", "cosets"],
      "definition": "For a subgroup \\(H\\) of a group \\(G\\) and \\(a \\in G\\), the left coset of \\(H\\) containing \\(a\\) is \\(aH = \\{ah \\mid h \\in H\\}\\), and the right coset of \\(H\\) containing \\(a\\) is \\(Ha = \\{ha \\mid h \\in H\\}\\)."
    },
    {
      "id": "abs-m3-index",
      "term": "index of a subgroup",
      "aliases": ["index", "(G : H)"],
      "definition": "The index \\((G : H)\\) of a subgroup \\(H\\) in a group \\(G\\) is the number of distinct left cosets of \\(H\\) in \\(G\\). When \\(G\\) is finite, \\((G : H) = |G|/|H|\\)."
    }
  ],
  "match": {
    "periodEnds": [25, 45, 70, 90],
    "breaks": [5, 10, 5]
  },
  "sections": [
    {
      "short": "Module III",
      "title": "Module III · Orbits, Cycles, Cosets, and Lagrange's Theorem",
      "sheets": [
        {
          "id": "abs-m3-orbits-cycles-alternating",
          "title": "Orbits, Cycles, and the Alternating Groups",
          "icon": "curve",
          "source": "Fraleigh 8th ed. §4, 4.8–4.15 & §8, 8.19–8.25 (7th ed. §9: Orbits, Cycles, and the Alternating Groups, 9.1–9.21)",
          "cards": [
            {
              "type": "info",
              "label": "Theorem 4.8 & Definition 4.9",
              "title": "Theorem 4.8 & Definition 4.9: Symmetric Group Sn",
              "defines": ["abs-m3-symmetric-group"],
              "body": "Theorem 4.8: For any nonempty set \\(A\\), the collection \\(S_A\\) of all permutations of \\(A\\) is a group under permutation multiplication (composition). Definition 4.9: For \\(A = \\{1, 2, \\dots, n\\}\\), \\(S_A\\) is the symmetric group on \\(n\\) letters, denoted \\(S_n\\), of order \\(n!\\).",
              "examples": [
                "\\(|S_n| = n!\\)",
                "\\(S_3\\) is smallest nonabelian group"
              ],
              "art": {
                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
                "steps": [
                  {
                    "step": 0,
                    "name": "sym",
                    "objects": [
                      { "type": "polygon", "points": [[25, 145], [235, 145], [235, 45], [25, 45]], "role": "s ok", "name": "box" },
                      { "type": "label", "coords": [130, 120], "text": "Symmetric Group Sn on {1, 2, ..., n}", "size": 11, "align": "center", "role": "t", "name": "box" },
                      { "type": "label", "coords": [130, 90], "text": "Order |Sn| = n! = n(n-1)...(2)(1)", "size": 11, "align": "center", "role": "t", "name": "ord" },
                      { "type": "label", "coords": [130, 62], "text": "|S3| = 6 (nonabelian)", "size": 11, "align": "center", "role": "t", "name": "s3" }
                    ]
                  }
                ]
              }
            },
            {
              "type": "math",
              "label": "Example 4.10 & Nonabelian S3",
              "title": "Two-Row Inverses and Noncommutativity in S3",
              "tex": "\\sigma = \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 1 & 3 \\end{pmatrix},\\; \\tau = \\begin{pmatrix} 1 & 2 & 3 \\\\ 1 & 3 & 2 \\end{pmatrix} \\implies \\sigma\\tau(1) = 2 \\neq 3 = \\tau\\sigma(1)",
              "body": "In \\(S_3\\), multiplying right-to-left gives \\(\\sigma\\tau(1) = \\sigma(1) = 2\\) while \\(\\tau\\sigma(1) = \\tau(2) = 3\\), so \\(\\sigma\\tau \\neq \\tau\\sigma\\) and \\(S_3\\) (order \\(6\\)) is the smallest nonabelian group. Example 4.10: To invert \\(\\sigma = \\binom{1\\;2\\;3\\;4\\;5\\;6}{3\\;2\\;6\\;1\\;4\\;5}\\), switch the rows and sort the top row in order to obtain \\(\\sigma^{-1} = \\binom{1\\;2\\;3\\;4\\;5\\;6}{4\\;2\\;1\\;5\\;6\\;3}\\)."
            },
            {
              "type": "info",
              "label": "Disjoint Cycles",
              "title": "What are Cycles and Disjoint Cycles?",
              "defines": ["abs-m3-disjoint-cycles"],
              "body": "A \\(k\\)-cycle \\((a_1, a_2, \\dots, a_k)\\) sends each entry to the next in cyclic order and fixes all other numbers. Cycles are disjoint if they share no common entries. Disjoint cycles commute, and every permutation in \\(S_n\\) has a unique disjoint cycle representation.",
              "examples": [
                "3-cycle: \\((1, 3, 6)\\)",
                "Disjoint: \\((1, 3, 6)(2, 4)\\)"
              ],
              "art": {
                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
                "steps": [
                  {
                    "step": 0,
                    "name": "cycles",
                    "objects": [
                      { "type": "circle", "center": [75, 90], "r": 42, "role": "s ok", "name": "c3" },
                      { "type": "circle", "center": [190, 90], "r": 32, "role": "s ok", "name": "c2" },
                      { "type": "label", "coords": [75, 90], "text": "(1, 3, 6)", "size": 12, "align": "center", "role": "t", "name": "c3" },
                      { "type": "label", "coords": [190, 90], "text": "(2, 4)", "size": 12, "align": "center", "role": "t", "name": "c2" }
                    ]
                  }
                ]
              }
            },
            {
              "type": "math",
              "label": "Examples 4.11–4.14 & Table 4.15",
              "title": "Multiplying and Inverting Cycles and the S3 Table",
              "tex": "(1,5,3,2,6)(1,2,4,3,6) = (1,6,5,3)(2,4), \\qquad [(1,5,7)(3,8,2,4,6)]^{-1} = (1,7,5)(2,8,3,6,4)",
              "body": "Example 4.12: Multiply cycles right-to-left: \\(1 \\mapsto 2 \\mapsto 6\\), \\(6 \\mapsto 1 \\mapsto 5\\), \\(5 \\mapsto 5 \\mapsto 3\\), \\(3 \\mapsto 6 \\mapsto 1\\), and \\(2 \\mapsto 4 \\mapsto 4\\), \\(4 \\mapsto 3 \\mapsto 2\\). Example 4.13: \\((1,5)(2,4)(1,4,3)(2,5)(4,2,1) = (1,3,5,4)\\). Example 4.14: Reverse each disjoint cycle to invert. Table 4.15: In \\(S_3 = \\{\\iota, (1,2,3), (1,3,2), (1,2), (1,3), (2,3)\\}\\), non-disjoint cycles need not commute: \\((1,2)(2,3) = (1,2,3) \\neq (1,3,2) = (2,3)(1,2)\\)."
            },
            {
              "type": "info",
              "label": "Theorem 8.19",
              "title": "Theorem 8.19: Parity of Transposition Factorizations",
              "body": "No permutation in \\(S_n\\) can be expressed both as a product of an even number of transpositions and as a product of an odd number of transpositions. Proof (David M. Bloom): Multiplying \\(\\sigma \\in S_n\\) on the left by a transposition \\(\\tau = (i, j)\\) either joins two orbits (if \\(i, j\\) are in different orbits of \\(\\sigma\\), Case I) or splits one orbit into two (if \\(i, j\\) are in the same orbit of \\(\\sigma\\), Case II). Thus the number of orbits of \\(\\tau\\sigma\\) and \\(\\sigma\\) always differs by \\(1\\), fixing the parity of the number of transpositions.",
              "examples": [
                "# orbits of \\(\\tau\\sigma\\) = # orbits of \\(\\sigma \\pm 1\\)"
              ]
            },
            {
              "type": "info",
              "label": "Definition 8.22 & Example 8.23",
              "title": "Definition 8.22: Even and Odd Permutations",
              "defines": ["abs-m3-even-odd-permutation"],
              "body": "A permutation of a finite set is even or odd according to whether it can be expressed as a product of an even number of transpositions or the product of an odd number of transpositions, respectively.",
              "examples": [
                "\\(\\iota = (1,2)(1,2)\\) is even",
                "\\(k\\)-cycle has \\(k-1\\) transpositions"
              ],
              "art": {
                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
                "steps": [
                  {
                    "step": 0,
                    "name": "parity",
                    "objects": [
                      { "type": "polygon", "points": [[20, 145], [125, 145], [125, 45], [20, 45]], "role": "s ok", "name": "even" },
                      { "type": "polygon", "points": [[135, 145], [240, 145], [240, 45], [135, 45]], "role": "s ok", "name": "odd" },
                      { "type": "label", "coords": [72, 110], "text": "Even (An)", "size": 11, "align": "center", "role": "t", "name": "even" },
                      { "type": "label", "coords": [72, 75], "text": "sgn = +1", "size": 11, "align": "center", "role": "t", "name": "ev2" },
                      { "type": "label", "coords": [187, 110], "text": "Odd (Bn)", "size": 11, "align": "center", "role": "t", "name": "odd" },
                      { "type": "label", "coords": [187, 75], "text": "sgn = -1", "size": 11, "align": "center", "role": "t", "name": "od2" }
                    ]
                  }
                ]
              }
            },
            {
              "type": "math",
              "label": "Example 8.23",
              "title": "Testing Parity of a Permutation",
              "tex": "(1, 4, 5, 6)(2, 1, 5) = (1, 6)(1, 5)(1, 4)(2, 5)(2, 1) \\quad (5\\text{ transpositions} \\implies \\text{odd})",
              "body": "Example 8.23: The identity \\(\\iota = (1,2)(1,2)\\) is always an even permutation. In \\(S_6\\), the 4-cycle \\((1,4,5,6) = (1,6)(1,5)(1,4)\\) uses \\(3\\) transpositions and the 3-cycle \\((2,1,5) = (2,5)(2,1)\\) uses \\(2\\) transpositions, giving \\(3 + 2 = 5\\) transpositions in total, so \\((1,4,5,6)(2,1,5)\\) is an odd permutation."
            },
            {
              "type": "info",
              "label": "Theorem 8.24 & Definition 8.25",
              "title": "Theorem 8.24 & Definition 8.25: Alternating Group An",
              "defines": ["abs-m3-alternating-group"],
              "body": "Theorem 8.24: If \\(n \\ge 2\\), the collection of all even permutations of \\(\\{1, 2, \\dots, n\\}\\) forms a subgroup of order \\(n!/2\\) of \\(S_n\\). Definition 8.25: This subgroup of \\(S_n\\) consisting of the even permutations of \\(n\\) letters is the alternating group \\(A_n\\) on \\(n\\) letters.",
              "examples": [
                "\\(|A_n| = n!/2\\) for \\(n \\ge 2\\)",
                "\\(A_n = \\operatorname{Ker}(\\operatorname{sgn})\\)"
              ],
              "art": {
                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
                "steps": [
                  {
                    "step": 0,
                    "name": "alt",
                    "objects": [
                      { "type": "ellipse", "center": [65, 90], "rx": 46, "ry": 56, "role": "s ok", "name": "An" },
                      { "type": "ellipse", "center": [195, 90], "rx": 46, "ry": 56, "role": "lk", "name": "Bn" },
                      { "type": "arrow", "p1": [95, 90], "p2": [165, 90], "role": "lk", "width": 2, "name": "bij" },
                      { "type": "label", "coords": [65, 90], "text": "An (n!/2)", "size": 11, "align": "center", "role": "t", "name": "An" },
                      { "type": "label", "coords": [195, 90], "text": "Bn (n!/2)", "size": 11, "align": "center", "role": "t", "name": "Bn" },
                      { "type": "label", "coords": [130, 112], "text": "lambda_(1,2)", "size": 11, "align": "center", "role": "t", "name": "bij" }
                    ]
                  }
                ]
              }
            },
            {
              "type": "info",
              "label": "Proof of Theorem 8.24",
              "title": "Proof of Theorem 8.24: Bijection and Sign Map",
              "body": "Step 1: Let \\(A_n\\) be the even permutations and \\(B_n\\) the odd permutations in \\(S_n\\) (\\(n \\ge 2\\)). Fix \\(\\tau = (1, 2)\\) and define \\(\\lambda_\\tau: A_n \\to B_n\\) by \\(\\lambda_\\tau(\\sigma) = \\tau\\sigma\\). Step 2: By cancellation in \\(S_n\\), \\(\\lambda_\\tau\\) is one-to-one; for any \\(\\rho \\in B_n\\), \\(\\tau^{-1}\\rho \\in A_n\\) and \\(\\lambda_\\tau(\\tau^{-1}\\rho) = \\rho\\), so \\(\\lambda_\\tau\\) is onto and \\(|A_n| = |B_n| = n!/2\\). Step 3: The sign map \\(\\operatorname{sgn}: S_n \\to \\{1, -1\\}\\) (\\(1\\) if even, \\(-1\\) if odd) is a homomorphism with kernel \\(\\operatorname{Ker}(\\operatorname{sgn}) = A_n \\le S_n\\).",
              "examples": [
                "\\(\\lambda_\\tau(\\sigma) = (1, 2)\\sigma\\)",
                "\\(\\operatorname{sgn}(\\sigma\\mu) = \\operatorname{sgn}(\\sigma)\\operatorname{sgn}(\\mu)\\)"
              ]
            },
            {
              "type": "mcq",
              "label": "Quiz · OMR",
              "time": 60,
              "q": "In \\(S_6\\), what is the product \\((1, 5, 3, 2, 6)(1, 2, 4, 3, 6)\\) in disjoint cycles?",
              "options": [
                "\\((1, 6, 5, 3)(2, 4)\\)",
                "\\((1, 3, 5, 6)(2, 4)\\)",
                "\\((1, 2, 6, 5, 3, 4)\\)",
                "\\((1, 6)(2, 4)(3, 5)\\)"
              ],
              "answer": 0,
              "why": "By Example 4.12, tracking each number from right to left gives \\((1, 6, 5, 3)(2, 4)\\)."
            },
            {
              "type": "mcq",
              "label": "Quiz · OMR",
              "time": 60,
              "q": "Which statement about a \\(k\\)-cycle in \\(S_n\\) is true?",
              "options": [
                "Even if \\(k\\) is odd, odd if \\(k\\) is even",
                "Even if \\(k\\) is even, odd if \\(k\\) is odd",
                "Every \\(k\\)-cycle is an even permutation",
                "Every \\(k\\)-cycle is an odd permutation"
              ],
              "answer": 0,
              "why": "A \\(k\\)-cycle factors into \\(k - 1\\) transpositions, so its parity is the parity of \\(k - 1\\)."
            },
            {
              "type": "fill",
              "label": "Quiz · Fill in",
              "time": 60,
              "q": "The subgroup of \\(S_n\\) consisting of all even permutations is the ______ group \\(A_n\\).",
              "answer": "alternating|alternating group",
              "why": "By Definition 8.25, \\(A_n\\) is called the alternating group on \\(n\\) letters."
            },
            {
              "type": "number",
              "label": "Quiz · Number",
              "time": 60,
              "q": "What is the order of the alternating group \\(A_4\\)?",
              "answer": 12,
              "why": "By Theorem 8.24, \\(|A_4| = 4! / 2 = 24 / 2 = 12\\)."
            }
          ]
        },
        {
          "id": "abs-m3-cosets-lagrange",
          "title": "Cosets and the Theorem of Lagrange",
          "icon": "book",
          "source": "Fraleigh 8th ed. §10, 10.1–10.20 (7th ed. §10: Cosets and the Theorem of Lagrange, 10.1–10.14)",
          "cards": [
            {
              "type": "info",
              "label": "Theorem 10.1 & Definition 10.2",
              "title": "Theorem 10.1 & Definition 10.2: Left and Right Cosets",
              "defines": ["abs-m3-coset"],
              "body": "Theorem 10.1: For \\(H \\le G\\), the relation \\(a \\sim_L b \\iff a^{-1}b \\in H\\) (and \\(a \\sim_R b \\iff ab^{-1} \\in H\\)) is an equivalence relation on \\(G\\). Definition 10.2: The equivalence class containing \\(a\\) under \\(\\sim_L\\) is the left coset \\(aH = \\{ah \\mid h \\in H\\}\\), and under \\(\\sim_R\\) is the right coset \\(Ha = \\{ha \\mid h \\in H\\}\\).",
              "examples": [
                "Left: \\(aH = \\{ah \\mid h \\in H\\}\\)",
                "Right: \\(Ha = \\{ha \\mid h \\in H\\}\\)"
              ],
              "art": {
                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
                "steps": [
                  {
                    "step": 0,
                    "name": "partition",
                    "objects": [
                      { "type": "polygon", "points": [[20, 145], [85, 145], [85, 35], [20, 35]], "role": "s ok", "name": "c1" },
                      { "type": "polygon", "points": [[95, 145], [160, 145], [160, 35], [95, 35]], "role": "s ok", "name": "c2" },
                      { "type": "polygon", "points": [[170, 145], [235, 145], [235, 35], [170, 35]], "role": "s ok", "name": "c3" },
                      { "type": "label", "coords": [52, 90], "text": "H = eH", "size": 11, "align": "center", "role": "t", "name": "c1" },
                      { "type": "label", "coords": [127, 90], "text": "aH", "size": 11, "align": "center", "role": "t", "name": "c2" },
                      { "type": "label", "coords": [202, 90], "text": "bH", "size": 11, "align": "center", "role": "t", "name": "c3" }
                    ]
                  }
                ]
              }
            },
            {
              "type": "info",
              "label": "Proof of Theorem 10.1",
              "title": "Proof of Theorem 10.1: Equivalence Relation ~L",
              "body": "Step 1 (Reflexive): For any \\(a \\in G\\), \\(a^{-1}a = e \\in H\\) since \\(H \\le G\\), so \\(a \\sim_L a\\). Step 2 (Symmetric): If \\(a \\sim_L b\\), then \\(a^{-1}b \\in H\\), so its inverse \\((a^{-1}b)^{-1} = b^{-1}a \\in H\\) and \\(b \\sim_L a\\). Step 3 (Transitive): If \\(a \\sim_L b\\) and \\(b \\sim_L c\\), then \\(a^{-1}b, b^{-1}c \\in H\\), so \\((a^{-1}b)(b^{-1}c) = a^{-1}c \\in H\\) and \\(a \\sim_L c\\).",
              "examples": [
                "Uses \\(e \\in H\\), inverses, closure"
              ]
            },
            {
              "type": "math",
              "label": "Examples 10.3–10.5 & 10.12",
              "title": "Computing Left and Right Cosets in Z, Z12, and D4",
              "tex": "D_4,\\; H = \\{\\iota, \\mu\\}: \\quad \\rho H = \\{\\rho, \\mu\\rho^3\\} \\neq \\{\\rho, \\mu\\rho\\} = H\\rho",
              "body": "Example 10.3: The cosets of \\(3\\mathbb{Z}\\) in \\(\\mathbb{Z}\\) are \\(3\\mathbb{Z}, 1+3\\mathbb{Z}, 2+3\\mathbb{Z}\\). Example 10.4: In \\(\\mathbb{Z}_{12}\\), the cosets of \\(H = \\langle 3 \\rangle = \\{0,3,6,9\\}\\) are \\(0+H, 1+H = \\{1,4,7,10\\}, 2+H = \\{2,5,8,11\\}\\). Examples 10.5 & 10.12: In the nonabelian group \\(D_4\\), for \\(H = \\{\\iota, \\mu\\}\\), the left coset \\(\\rho H = \\{\\rho, \\mu\\rho^3\\}\\) differs from the right coset \\(H\\rho = \\{\\rho, \\mu\\rho\\}\\)."
            },
            {
              "type": "info",
              "label": "Theorems 10.6 & 10.7",
              "title": "Theorem 10.6 & Theorem 10.7 (Theorem of Lagrange)",
              "body": "Theorem 10.6: For \\(H \\le G\\) and \\(a \\in G\\), \\(aH\\) has the same cardinality as \\(H\\) (via the one-to-one onto map \\(f: H \\to aH\\), \\(f(h) = ah\\)). Theorem 10.7 (Theorem of Lagrange): Let \\(H\\) be a subgroup of a finite group \\(G\\). Then the order of \\(H\\) is a divisor of the order of \\(G\\). Proof: If \\(|G| = n\\), \\(|H| = m\\), and there are \\(r\\) left cosets of \\(H\\), then \\(n = rm\\).",
              "examples": [
                "\\(|aH| = |H|\\)",
                "\\(|G| = r |H| \\Rightarrow |H| \\text{ divides } |G|\\)"
              ]
            },
            {
              "type": "info",
              "label": "Corollary 10.8 & Theorem 10.9",
              "title": "Corollary 10.8: Groups of Prime Order & Theorem 10.9",
              "body": "Corollary 10.8: Every group of prime order \\(p\\) is cyclic (and hence isomorphic to \\(\\mathbb{Z}_p\\)). Proof: For \\(a \\neq e\\) in \\(G\\), \\(|\\langle a \\rangle| \\ge 2\\) divides \\(p\\), so \\(|\\langle a \\rangle| = p\\) and \\(G = \\langle a \\rangle\\). Theorem 10.9: The order of an element of a finite group divides the order of the group (since \\(|a| = |\\langle a \\rangle|\\) divides \\(|G|\\)).",
              "examples": [
                "\\(|G| = p \\text{ (prime)} \\Rightarrow G \\simeq \\mathbb{Z}_p\\)",
                "\\(|a| \\text{ divides } |G| \\Rightarrow a^{|G|} = e\\)"
              ]
            },
            {
              "type": "info",
              "label": "Definition 10.10 & Theorem 10.11",
              "title": "Definition 10.10: Index of a Subgroup & Theorem 10.11",
              "defines": ["abs-m3-index"],
              "body": "Definition 10.10: Let \\(H\\) be a subgroup of a group \\(G\\). The number of left cosets of \\(H\\) in \\(G\\) is the index \\((G : H)\\) of \\(H\\) in \\(G\\). For finite \\(G\\), \\((G : H) = |G|/|H|\\). Theorem 10.11: If \\(K \\le H \\le G\\) and \\((H : K), (G : H)\\) are finite, then \\((G : K) = (G : H)(H : K)\\).",
              "examples": [
                "\\((G : H) = |G| / |H|\\)",
                "\\((G : K) = (G : H)(H : K)\\)"
              ],
              "art": {
                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
                "steps": [
                  {
                    "step": 0,
                    "name": "tower",
                    "objects": [
                      { "type": "point", "coords": [130, 152], "size": 4, "role": "f", "name": "G" },
                      { "type": "point", "coords": [130, 90], "size": 4, "role": "f", "name": "H" },
                      { "type": "point", "coords": [130, 28], "size": 4, "role": "f", "name": "K" },
                      { "type": "segment", "p1": [130, 152], "p2": [130, 90], "role": "lk", "width": 2, "name": "gh" },
                      { "type": "segment", "p1": [130, 90], "p2": [130, 28], "role": "lk", "width": 2, "name": "hk" },
                      { "type": "label", "coords": [110, 152], "text": "G", "size": 11, "align": "center", "role": "t", "name": "G" },
                      { "type": "label", "coords": [110, 90], "text": "H", "size": 11, "align": "center", "role": "t", "name": "H" },
                      { "type": "label", "coords": [110, 28], "text": "K", "size": 11, "align": "center", "role": "t", "name": "K" },
                      { "type": "label", "coords": [180, 121], "text": "(G : H)", "size": 11, "align": "center", "role": "t", "name": "gh" },
                      { "type": "label", "coords": [180, 59], "text": "(H : K)", "size": 11, "align": "center", "role": "t", "name": "hk" }
                    ]
                  }
                ]
              }
            },
            {
              "type": "math",
              "label": "Examples 10.13 & 10.16",
              "title": "When Cosets Form a Group: Z6 vs D3",
              "tex": "\\mathbb{Z}_6,\\; H = \\{0, 3\\}: \\; \\{0,3\\}, \\{1,4\\}, \\{2,5\\} \\text{ form } \\mathbb{Z}_3; \\qquad D_3,\\; H = \\{\\iota, \\mu\\}: \\; \\rho H \\neq H\\rho",
              "body": "Examples 10.13–10.15: In the abelian group \\(\\mathbb{Z}_6\\), the cosets \\(\\{0,3\\}, \\{1,4\\}, \\{2,5\\}\\) of \\(H = \\{0,3\\}\\) satisfy \\(aH = Ha\\), and their \\(2 \\times 2\\) table blocks form a group isomorphic to \\(\\mathbb{Z}_3\\). Example 10.16: In \\(D_3\\), for \\(H = \\{\\iota, \\mu\\}\\), left and right cosets differ and the \\(2 \\times 2\\) table blocks do not form a group."
            },
            {
              "type": "info",
              "label": "Theorem 10.17 & Corollary 10.19",
              "title": "Theorem 10.17 & Corollary 10.19: Cosets of the Kernel",
              "body": "Theorem 10.17: Let \\(\\phi: G \\to G'\\) be a group homomorphism. Then the left and right cosets of \\(\\operatorname{Ker}(\\phi)\\) are identical, and \\(a, b \\in G\\) are in the same coset of \\(\\operatorname{Ker}(\\phi)\\) iff \\(\\phi(a) = \\phi(b)\\). Corollary 10.19: A homomorphism \\(\\phi: G \\to G'\\) is one-to-one iff \\(\\operatorname{Ker}(\\phi) = \\{e\\}\\).",
              "examples": [
                "\\(a\\operatorname{Ker}(\\phi) = \\operatorname{Ker}(\\phi)a\\)",
                "\\(\\phi\\) is 1-1 \\(\\iff \\operatorname{Ker}(\\phi) = \\{e\\}\\)"
              ]
            },
            {
              "type": "math",
              "label": "Examples 10.18 & 10.20",
              "title": "Determinant Cosets and Checking Injectivity via Kernel",
              "tex": "\\det: GL(2,\\mathbb{R}) \\to \\mathbb{R}^*,\\; \\det\\begin{bmatrix}2&0\\\\0&1\\end{bmatrix} = \\det\\begin{bmatrix}3&2\\\\2&2\\end{bmatrix} = 2; \\qquad \\phi(x) = 2^x,\\; \\operatorname{Ker}(\\phi) = \\{0\\}",
              "body": "Example 10.18: For \\(\\det: GL(2, \\mathbb{R}) \\to \\mathbb{R}^*\\), \\(\\operatorname{Ker}(\\det)\\) is the subgroup of matrices with determinant \\(1\\), and two matrices lie in the same coset iff they have the same determinant. Example 10.20: For \\(\\phi: \\mathbb{R} \\to \\mathbb{R}^+\\) defined by \\(\\phi(x) = 2^x\\), \\(\\phi(x) = 1 \\iff x = 0\\), so \\(\\operatorname{Ker}(\\phi) = \\{0\\}\\) and \\(\\phi\\) is one-to-one by Corollary 10.19."
            },
            {
              "type": "mcq",
              "label": "Quiz · OMR",
              "time": 60,
              "q": "State whether true or false: Every group of prime order is abelian.",
              "options": [
                "True",
                "False: some are nonabelian",
                "False: only for order 2",
                "False: only for order 3"
              ],
              "answer": 0,
              "why": "True (Exercise 10.20c): by Corollary 10.8 every group of prime order is cyclic, and by Theorem 6.1 every cyclic group is abelian."
            },
            {
              "type": "mcq",
              "label": "Quiz · OMR",
              "time": 60,
              "q": "By Corollary 10.19, a homomorphism \\(\\phi: G \\to G'\\) is one-to-one if and only if:",
              "options": [
                "\\(\\operatorname{Ker}(\\phi) = \\{e\\}\\)",
                "\\(\\operatorname{Ker}(\\phi) = G\\)",
                "\\(\\phi[G] = G'\\)",
                "\\(G\\) is a cyclic group"
              ],
              "answer": 0,
              "why": "By Corollary 10.19, \\(\\phi\\) is one-to-one if and only if its kernel is the trivial subgroup \\(\\{e\\}\\)."
            },
            {
              "type": "fill",
              "label": "Quiz · Fill in",
              "time": 60,
              "q": "The number of left cosets of \\(H\\) in \\(G\\) is called the ______ of \\(H\\) in \\(G\\).",
              "answer": "index",
              "why": "By Definition 10.10, the number of left cosets of \\(H\\) in \\(G\\) is the index \\((G : H)\\)."
            },
            {
              "type": "number",
              "label": "Quiz · Number",
              "time": 60,
              "q": "Find the index \\((\\mathbb{Z}_{24} : \\langle 3 \\rangle)\\) of \\(\\langle 3 \\rangle\\) in \\(\\mathbb{Z}_{24}\\).",
              "answer": 3,
              "why": "In \\(\\mathbb{Z}_{24}\\), \\(|\\langle 3 \\rangle| = 24 / \\gcd(3, 24) = 8\\), so the index is \\((\\mathbb{Z}_{24} : \\langle 3 \\rangle) = 24 / 8 = 3\\) (Exercise 10.12)."
            },
            {
              "type": "number",
              "label": "Quiz · Number",
              "time": 60,
              "q": "If \\(K \\le H \\le G\\) with \\((G : H) = 4\\) and \\((H : K) = 3\\), find \\((G : K)\\).",
              "answer": 12,
              "why": "By Theorem 10.11, \\((G : K) = (G : H)(H : K) = 4 \\times 3 = 12\\)."
            }
          ]
        }
      ]
    }
  ]
}
```

#### Plain-English Note for Module III
- **Sheets (2 sheets, 27 cards total):**
  1. `abs-m3-orbits-cycles-alternating` (*Orbits, Cycles, and the Alternating Groups*, 13 cards): covers Theorem 4.8 and the symmetric group \(S_n\) (Def 4.9, Example 4.10, nonabelian \(S_3\) and Table 4.15), cycles and disjoint cycle multiplication and inverses (Examples 4.11–4.14), parity of transposition factorizations and David M. Bloom's orbit proof (Theorem 8.19, Figs. 8.20–8.21), even and odd permutations (Def 8.22, Example 8.23), and the alternating group \(A_n\) of order \(n!/2\) and the sign homomorphism \(\operatorname{sgn}\) (Theorem 8.24 with proof, Def 8.25), plus 4 quiz cards.
  2. `abs-m3-cosets-lagrange` (*Cosets and the Theorem of Lagrange*, 14 cards): covers equivalence relations \(\sim_L, \sim_R\) and left and right cosets (Theorem 10.1 with proof, Def 10.2, Examples 10.3–10.5 & 10.12), equal cardinality of cosets and the Theorem of Lagrange (Theorems 10.6 & 10.7), groups of prime order and element orders (Corollary 10.8, Theorem 10.9), index \((G : H)\) and the tower formula (Def 10.10, Theorem 10.11, Exercise 10.12), coset blocks in \(\mathbb{Z}_6\) vs \(D_3\) (Examples 10.13–10.16, Tables 10.14–10.15), and cosets of the kernel and the injectivity test (Theorem 10.17, Corollary 10.19, Examples 10.18 & 10.20), plus 5 quiz cards.
- **Anything omitted:** Nothing was omitted; all definitions, theorems, corollaries, proofs, examples, and referred exercises from Module III (Units 13–16) are included.

---

### Module IV — `data-abs-m4.json`

```json
{
  "meta": {
    "title": "Study Match: Abstract Algebra I (MAT5CJ302)",
    "subject": "Abstract Algebra I · Modules I to IV",
    "home": "Focus",
    "opponent": "Time",
    "version": 1,
    "inlineChecks": false,
    "autoRevealQuestions": true,
    "definitionChecks": true,
    "date": "",
    "sessions": []
  },
  "glossary": [
    {
      "id": "abs-m4-canonical-homomorphism",
      "term": "canonical homomorphism",
      "aliases": ["factor group", "normal subgroup"],
      "definition": "For a normal subgroup \\(N\\) of a group \\(G\\) (where \\(gN = Ng\\) for all \\(g \\in G\\)), the cosets form the factor group \\(G/N\\), and \\(\\gamma: G \\to G/N\\) defined by \\(\\gamma(x) = xN\\) is the canonical homomorphism."
    },
    {
      "id": "abs-m4-join-of-subgroups",
      "term": "join of subgroups",
      "aliases": ["join", "HN"],
      "definition": "For subgroups \\(H\\) and \\(N\\) of \\(G\\), the join \\(H \\vee N\\) is the intersection of all subgroups of \\(G\\) containing \\(HN = \\{hn \\mid h \\in H, n \\in N\\}\\), which is the smallest subgroup containing both \\(H\\) and \\(N\\)."
    },
    {
      "id": "abs-m4-ring",
      "term": "ring",
      "aliases": ["rings", "additive group of a ring"],
      "definition": "A ring \\(\\langle R, +, \\cdot \\rangle\\) is a set \\(R\\) with addition \\(+\\) and multiplication \\(\\cdot\\) such that \\(\\langle R, + \\rangle\\) is an abelian group, multiplication is associative, and the left and right distributive laws hold."
    },
    {
      "id": "abs-m4-ring-homomorphism",
      "term": "ring homomorphism and isomorphism",
      "aliases": ["ring homomorphism", "ring isomorphism", "evaluation homomorphism"],
      "definition": "A map \\(\\phi: R \\to R'\\) between rings is a ring homomorphism if \\(\\phi(a+b) = \\phi(a)+\\phi(b)\\) and \\(\\phi(ab) = \\phi(a)\\phi(b)\\) for all \\(a, b \\in R\\). If \\(\\phi\\) is also one-to-one and onto \\(R'\\), it is a ring isomorphism."
    },
    {
      "id": "abs-m4-commutative-ring-unity",
      "term": "commutative ring and unity",
      "aliases": ["commutative ring", "ring with unity", "unity", "zero ring"],
      "definition": "A ring in which multiplication is commutative is a commutative ring. A ring with a multiplicative identity element \\(1\\) is a ring with unity; the multiplicative identity \\(1\\) is called unity."
    },
    {
      "id": "abs-m4-unit-division-ring-field",
      "term": "unit, division ring, and field",
      "aliases": ["unit", "units", "division ring", "skew field", "field", "subring", "subfield"],
      "definition": "In a ring \\(R\\) with unity \\(1 \\neq 0\\), a unit is an element \\(u \\in R\\) with a multiplicative inverse \\(u^{-1} \\in R\\). If every nonzero element is a unit, \\(R\\) is a division ring (skew field); a commutative division ring is a field."
    },
    {
      "id": "abs-m4-zero-divisor",
      "term": "divisor of 0",
      "aliases": ["divisors of 0", "0 divisor", "0 divisors", "zero divisor", "zero divisors"],
      "definition": "If \\(a\\) and \\(b\\) are two nonzero elements of a ring \\(R\\) such that \\(ab = 0\\), then \\(a\\) and \\(b\\) are divisors of \\(0\\) (or \\(0\\) divisors)."
    },
    {
      "id": "abs-m4-integral-domain",
      "term": "integral domain",
      "aliases": ["integral domains"],
      "definition": "An integral domain \\(D\\) is a commutative ring with unity \\(1 \\neq 0\\) that contains no divisors of \\(0\\)."
    },
    {
      "id": "abs-m4-characteristic",
      "term": "characteristic of a ring",
      "aliases": ["characteristic"],
      "definition": "The characteristic of a ring \\(R\\) is the least positive integer \\(n\\) such that \\(n \\cdot a = 0\\) for all \\(a \\in R\\); if no such positive integer exists, \\(R\\) has characteristic \\(0\\)."
    }
  ],
  "match": {
    "periodEnds": [25, 45, 70, 90],
    "breaks": [5, 10, 5]
  },
  "sections": [
    {
      "short": "Module IV",
      "title": "Module IV · Homomorphisms, Rings, Fields, and Integral Domains",
      "sheets": [
        {
          "id": "abs-m4-isomorphism-theorems",
          "title": "Homomorphisms and Isomorphism Theorems",
          "icon": "curve",
          "source": "Fraleigh 8th ed. §16, 16.1–16.10 (7th ed. §13: Homomorphisms and Isomorphism Theorems, 13.1–13.20)",
          "cards": [
            {
              "type": "info",
              "label": "Theorem 16.2",
              "title": "Theorem 16.2 (First Isomorphism Theorem)",
              "body": "Let \\(\\phi: G \\to G'\\) be a homomorphism with kernel \\(K\\), and let \\(\\gamma_K: G \\to G/K\\) be the canonical homomorphism \\(\\gamma_K(x) = xK\\). There is a unique isomorphism \\(\\mu: G/K \\to \\phi[G]\\) such that \\(\\phi(x) = \\mu(\\gamma_K(x))\\) for each \\(x \\in G\\). Why it matters: every homomorphic image \\(\\phi[G]\\) is isomorphic to the factor group \\(G/\\operatorname{Ker}(\\phi)\\).",
              "examples": [
                "\\(G / \\operatorname{Ker}(\\phi) \\simeq \\phi[G]\\)",
                "\\(\\mu(xK) = \\phi(x)\\)"
              ]
            },
            {
              "type": "info",
              "label": "Lemma 16.3",
              "title": "Lemma 16.3: Correspondence of Normal Subgroups",
              "body": "Let \\(N\\) be a normal subgroup of \\(G\\) and \\(\\gamma: G \\to G/N\\) be the canonical homomorphism. Then the map \\(\\phi\\) from the set of normal subgroups of \\(G\\) containing \\(N\\) to the set of normal subgroups of \\(G/N\\) given by \\(\\phi(L) = \\gamma[L] = L/N\\) is one-to-one and onto (with inverse \\(\\gamma^{-1}[H]\\)).",
              "examples": [
                "\\(N \\le L \\trianglelefteq G \\longleftrightarrow L/N \\trianglelefteq G/N\\)"
              ]
            },
            {
              "type": "info",
              "label": "Join & Lemma 16.4",
              "title": "What is the Join of Subgroups? (Lemma 16.4)",
              "defines": ["abs-m4-join-of-subgroups", "abs-m4-canonical-homomorphism"],
              "body": "For \\(H, N \\le G\\), let \\(HN = \\{hn \\mid h \\in H, n \\in N\\}\\). The join \\(H \\vee N\\) is the intersection of all subgroups containing \\(HN\\) (the smallest subgroup containing \\(H\\) and \\(N\\)). Lemma 16.4: If \\(N\\) is normal in \\(G\\) and \\(H \\le G\\), then \\(H \\vee N = HN = NH \\le G\\); if \\(H\\) is also normal in \\(G\\), then \\(HN\\) is normal in \\(G\\).",
              "examples": [
                "\\(N \\trianglelefteq G \\Rightarrow H \\vee N = HN = NH\\)"
              ],
              "art": {
                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
                "steps": [
                  {
                    "step": 0,
                    "name": "diamond",
                    "objects": [
                      { "type": "point", "coords": [130, 152], "size": 4, "role": "f", "name": "HN" },
                      { "type": "point", "coords": [70, 90], "size": 4, "role": "f", "name": "H" },
                      { "type": "point", "coords": [190, 90], "size": 4, "role": "f", "name": "N" },
                      { "type": "point", "coords": [130, 28], "size": 4, "role": "f", "name": "cap" },
                      { "type": "segment", "p1": [130, 152], "p2": [70, 90], "role": "lk", "width": 2, "name": "s1" },
                      { "type": "segment", "p1": [130, 152], "p2": [190, 90], "role": "lk", "width": 2, "name": "s2" },
                      { "type": "segment", "p1": [70, 90], "p2": [130, 28], "role": "lk", "width": 2, "name": "s3" },
                      { "type": "segment", "p1": [190, 90], "p2": [130, 28], "role": "lk", "width": 2, "name": "s4" },
                      { "type": "label", "coords": [130, 166], "text": "H v N = HN", "size": 11, "align": "center", "role": "t", "name": "HN" },
                      { "type": "label", "coords": [48, 90], "text": "H", "size": 11, "align": "center", "role": "t", "name": "H" },
                      { "type": "label", "coords": [212, 90], "text": "N", "size": 11, "align": "center", "role": "t", "name": "N" },
                      { "type": "label", "coords": [130, 12], "text": "H cap N", "size": 11, "align": "center", "role": "t", "name": "cap" }
                    ]
                  }
                ]
              }
            },
            {
              "type": "info",
              "label": "Theorem 16.5",
              "title": "Theorem 16.5 (Second Isomorphism Theorem)",
              "body": "Let \\(H\\) be a subgroup of \\(G\\) and let \\(N\\) be a normal subgroup of \\(G\\). Then \\((HN)/N \\simeq H/(H \\cap N)\\). Proof: Define \\(\\phi: H \\to (HN)/N\\) by \\(\\phi(h) = hN\\). Then \\(\\phi\\) is an onto homomorphism (since \\(hnN = hN = \\phi(h)\\)) with kernel \\(\\operatorname{Ker}(\\phi) = \\{h \\in H \\mid hN = N\\} = H \\cap N\\). Apply Theorem 16.2.",
              "examples": [
                "\\((HN)/N \\simeq H / (H \\cap N)\\)",
                "\\(\\mu(h(H \\cap N)) = hN\\)"
              ]
            },
            {
              "type": "math",
              "label": "Examples 16.6, 16.7 & Ex 16.10",
              "title": "Applications of the Second Isomorphism Theorem",
              "tex": "\\langle n \\rangle + \\langle h \\rangle = \\langle \\gcd(n, h) \\rangle,\\; \\langle n \\rangle \\cap \\langle h \\rangle = \\langle \\operatorname{lcm}(n, h) \\rangle \\implies nh = \\gcd(n, h)\\operatorname{lcm}(n, h)",
              "body": "Example 16.6: In \\(G = \\mathbb{Z} \\times \\mathbb{Z} \\times \\mathbb{Z}\\) with \\(H = \\mathbb{Z} \\times \\mathbb{Z} \\times \\{0\\}\\) and \\(N = \\{0\\} \\times \\mathbb{Z} \\times \\mathbb{Z}\\), \\(HN = G\\) and \\(H \\cap N = \\{0\\} \\times \\mathbb{Z} \\times \\{0\\}\\), so \\((HN)/N \\simeq \\mathbb{Z} \\simeq H/(H \\cap N)\\). Example 16.7 & Exercise 16.10: Since \\(|\\langle a \\rangle / \\langle b \\rangle| = b/a\\) when \\(a \\mid b\\), the isomorphism \\(\\langle \\gcd(n,h) \\rangle / \\langle n \\rangle \\simeq \\langle h \\rangle / \\langle \\operatorname{lcm}(n,h) \\rangle\\) gives \\(n/\\gcd(n,h) = \\operatorname{lcm}(n,h)/h\\)."
            },
            {
              "type": "info",
              "label": "Theorem 16.8",
              "title": "Theorem 16.8 (Third Isomorphism Theorem)",
              "body": "Let \\(H\\) and \\(K\\) be normal subgroups of a group \\(G\\) with \\(K \\le H\\). Then \\(G/H \\simeq (G/K)/(H/K)\\). Proof: Define \\(\\phi: G/K \\to G/H\\) by \\(\\phi(gK) = gH\\). Since \\(K \\le H\\), \\(\\phi\\) is a well-defined onto homomorphism with \\(\\operatorname{Ker}(\\phi) = \\{gK \\in G/K \\mid gH = H\\} = H/K\\). Apply Theorem 16.2.",
              "examples": [
                "\\((G/K) / (H/K) \\simeq G/H\\)",
                "\\(\\mu((gK)(H/K)) = gH\\)"
              ]
            },
            {
              "type": "math",
              "label": "Example 16.10",
              "title": "Explicit Cosets in the Third Isomorphism Theorem",
              "tex": "G = \\mathbb{Z}_8,\\; H = \\langle 2 \\rangle = \\{0,2,4,6\\},\\; K = \\langle 4 \\rangle = \\{0,4\\}: \\quad (G/K)/(H/K) \\simeq G/H",
              "body": "Example 16.10: Here \\(G/K = \\{\\{0,4\\}, \\{1,5\\}, \\{2,6\\}, \\{3,7\\}\\}\\), \\(H/K = \\{\\{0,4\\}, \\{2,6\\}\\}\\), and \\((G/K)/(H/K) = \\{\\{\\{0,4\\}, \\{2,6\\}\\}, \\{\\{1,5\\}, \\{3,7\\}\\}\\}\\). Collapsing \\(K\\) then \\(H/K\\) matches \\(G/H = \\{\\{0,2,4,6\\}, \\{1,3,5,7\\}\\}\\)."
            },
            {
              "type": "mcq",
              "label": "Quiz · OMR",
              "time": 60,
              "q": "In the First Isomorphism Theorem, if \\(\\phi: G \\to G'\\) has kernel \\(K\\), then \\(\\phi[G]\\) is isomorphic to:",
              "options": [
                "\\(G/K\\)",
                "\\(G'/K\\)",
                "\\(K\\)",
                "\\(G \\times K\\)"
              ],
              "answer": 0,
              "why": "By Theorem 16.2, \\(\\mu: G/K \\to \\phi[G]\\) given by \\(\\mu(xK) = \\phi(x)\\) is an isomorphism."
            },
            {
              "type": "mcq",
              "label": "Quiz · OMR",
              "time": 60,
              "q": "If \\(H \\le G\\) and \\(N\\) is normal in \\(G\\), what does the Second Isomorphism Theorem state?",
              "options": [
                "\\((HN)/N \\simeq H/(H \\cap N)\\)",
                "\\((HN)/H \\simeq N/(H \\cap N)\\)",
                "\\(G/H \\simeq (G/N)/(H/N)\\)",
                "\\(HN \\simeq H \\times N\\)"
              ],
              "answer": 0,
              "why": "By Theorem 16.5, \\((HN)/N\\) is isomorphic to \\(H/(H \\cap N)\\) (while \\(H\\) need not be normal in \\(HN\\))."
            },
            {
              "type": "fill",
              "label": "Quiz · Fill in",
              "time": 60,
              "q": "For normal subgroups \\(K \\le H\\) of \\(G\\), \\((G/K)/(H/K)\\) is isomorphic to ______.",
              "answer": "G/H|G / H",
              "why": "By the Third Isomorphism Theorem (Theorem 16.8), \\((G/K)/(H/K) \\simeq G/H\\)."
            },
            {
              "type": "number",
              "label": "Quiz · Number",
              "time": 60,
              "q": "By Exercise 16.10, what is the order of the factor group \\(3\\mathbb{Z} / 15\\mathbb{Z}\\)?",
              "answer": 5,
              "why": "Since \\(3\\) divides \\(15\\), Exercise 16.10 gives \\(|3\\mathbb{Z} / 15\\mathbb{Z}| = 15 / 3 = 5\\)."
            }
          ]
        },
        {
          "id": "abs-m4-rings-and-fields",
          "title": "Rings and Fields",
          "icon": "sigma",
          "source": "Fraleigh 8th ed. §22, 22.1–22.18 (7th ed. §18: Rings and Fields, 18.1–18.18)",
          "cards": [
            {
              "type": "info",
              "label": "Definition 22.1",
              "title": "Definition 22.1: Ring",
              "defines": ["abs-m4-ring"],
              "body": "A ring \\(\\langle R, +, \\cdot \\rangle\\) is a set \\(R\\) with two binary operations \\(+\\) (addition) and \\(\\cdot\\) (multiplication) satisfying: \\(\\mathscr{R}_1\\) \\(\\langle R, + \\rangle\\) is an abelian group; \\(\\mathscr{R}_2\\) multiplication is associative; \\(\\mathscr{R}_3\\) left and right distributive laws \\(a(b+c) = ab+ac\\) and \\((a+b)c = ac+bc\\) hold.",
              "examples": [
                "\\(\\mathbb{Z}, \\mathbb{Q}, \\mathbb{R}, \\mathbb{C}, n\\mathbb{Z}, \\mathbb{Z}_n\\)",
                "\\(M_n(R),\\; R_1 \\times R_2\\)"
              ],
              "art": {
                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
                "steps": [
                  {
                    "step": 0,
                    "name": "ringax",
                    "objects": [
                      { "type": "polygon", "points": [[20, 160], [240, 160], [240, 124], [20, 124]], "role": "s ok", "name": "r1" },
                      { "type": "polygon", "points": [[20, 108], [240, 108], [240, 72], [20, 72]], "role": "s ok", "name": "r2" },
                      { "type": "polygon", "points": [[20, 56], [240, 56], [240, 20], [20, 20]], "role": "s ok", "name": "r3" },
                      { "type": "label", "coords": [130, 142], "text": "R1: <R, +> is an abelian group", "size": 11, "align": "center", "role": "t", "name": "r1" },
                      { "type": "label", "coords": [130, 90], "text": "R2: Multiplication (ab)c = a(bc)", "size": 11, "align": "center", "role": "t", "name": "r2" },
                      { "type": "label", "coords": [130, 38], "text": "R3: Left & right distributive laws", "size": 11, "align": "center", "role": "t", "name": "r3" }
                    ]
                  }
                ]
              }
            },
            {
              "type": "math",
              "label": "Examples 22.2–22.7",
              "title": "Number Rings, Matrix Rings, Functions, and Direct Products",
              "tex": "M_n(R),\\quad (f+g)(x) = f(x)+g(x),\\; (fg)(x) = f(x)g(x),\\quad \\mathbb{Z}_{10}: (3)(7) = 1",
              "body": "Examples 22.2–22.7: \\(\\mathbb{Z}, \\mathbb{Q}, \\mathbb{R}, \\mathbb{C}\\), \\(n\\mathbb{Z}\\), and \\(\\mathbb{Z}_n\\) (under addition and multiplication modulo \\(n\\)) are commutative rings. The \\(n \\times n\\) matrix ring \\(M_n(R)\\) is a noncommutative ring for \\(n \\ge 2\\). Pointwise operations make \\(F = \\{f: \\mathbb{R} \\to \\mathbb{R}\\}\\) a ring, and componentwise operations make \\(R_1 \\times \\dots \\times R_n\\) the direct product ring."
            },
            {
              "type": "info",
              "label": "Theorem 22.8",
              "title": "Theorem 22.8: Multiplication by 0 and Sign Rules in a Ring",
              "body": "If \\(R\\) is a ring with additive identity \\(0\\), then for any \\(a, b \\in R\\): (1) \\(0a = a0 = 0\\); (2) \\(a(-b) = (-a)b = -(ab)\\); (3) \\((-a)(-b) = ab\\). Why it matters: these rules connect addition and multiplication using the distributive laws \\(\\mathscr{R}_3\\), without assuming a unity \\(1\\) exists (Exercise 22.30).",
              "examples": [
                "\\(0a = a0 = 0\\)",
                "\\(a(-b) = -(ab),\\; (-a)(-b) = ab\\)"
              ]
            },
            {
              "type": "derivation",
              "title": "Proof of Theorem 22.8: Zero and Negative Products",
              "legend": "Prove \\(a0 = 0\\) and \\(a(-b) + ab = 0\\) in any ring \\(R\\) using \\(\\mathscr{R}_1, \\mathscr{R}_3\\).",
              "phases": [
                { "name": "Zero law", "why": "expand a(0 + 0) by left distributivity" },
                { "name": "Cancel a0", "why": "use additive cancellation in <R, +>" },
                { "name": "Sign law", "why": "show a(-b) is the additive inverse of ab" }
              ],
              "steps": [
                {
                  "phase": "Zero law",
                  "tex": "a0 + a0 = a(0 + 0)",
                  "note": "Apply the left distributive law \\(\\mathscr{R}_3\\) in reverse to \\(a0 + a0\\)."
                },
                {
                  "move": { "type": "apply" },
                  "tex": "a0 + a0 = 0 + a0",
                  "note": "Since \\(0 + 0 = 0\\) and \\(a0 = 0 + a0\\) in the additive group \\(\\langle R, + \\rangle\\).",
                  "ask": {
                    "q": "How do we deduce \\(a0 = 0\\) from \\(a0 + a0 = 0 + a0\\)?",
                    "options": [
                      "Cancellation in the group \\(\\langle R, + \\rangle\\)",
                      "Divide both sides by \\(a\\)",
                      "Multiply by \\(a^{-1}\\)",
                      "Use commutativity of multiplication"
                    ],
                    "answer": 0,
                    "why": "Since \\(\\langle R, + \\rangle\\) is a group, right additive cancellation of \\(a0\\) gives \\(a0 = 0\\)."
                  }
                },
                {
                  "phase": "Cancel a0",
                  "move": { "type": "apply" },
                  "tex": "a0 = 0",
                  "note": "Cancel \\(+ a0\\) on the right in the additive group \\(\\langle R, + \\rangle\\)."
                },
                {
                  "phase": "Sign law",
                  "move": { "type": "apply" },
                  "tex": "a(-b) + ab = a(-b + b)",
                  "note": "To prove \\(a(-b) = -(ab)\\), factor \\(a(-b) + ab\\) by the left distributive law \\(\\mathscr{R}_3\\)."
                },
                {
                  "move": { "type": "apply" },
                  "tex": "a(-b) + ab = 0",
                  "note": "Since \\(-b + b = 0\\) and \\(a0 = 0\\), uniqueness of the additive inverse gives \\(a(-b) = -(ab)\\)."
                }
              ]
            },
            {
              "type": "info",
              "label": "Definitions 22.9 & 22.12",
              "title": "Definitions 22.9 & 22.12: Ring Homomorphism and Isomorphism",
              "defines": ["abs-m4-ring-homomorphism"],
              "body": "For rings \\(R\\) and \\(R'\\), a map \\(\\phi: R \\to R'\\) is a homomorphism if for all \\(a, b \\in R\\): (1) \\(\\phi(a+b) = \\phi(a) + \\phi(b)\\) and (2) \\(\\phi(ab) = \\phi(a)\\phi(b)\\). An isomorphism \\(\\phi: R \\to R'\\) is a homomorphism that is one-to-one and onto \\(R'\\).",
              "examples": [
                "Evaluation \\(\\phi_a(f) = f(a)\\)",
                "Mod \\(n\\): \\(\\phi: \\mathbb{Z} \\to \\mathbb{Z}_n\\)"
              ],
              "art": {
                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
                "steps": [
                  {
                    "step": 0,
                    "name": "ringhom",
                    "objects": [
                      { "type": "polygon", "points": [[20, 145], [240, 145], [240, 95], [20, 95]], "role": "s ok", "name": "add" },
                      { "type": "polygon", "points": [[20, 80], [240, 80], [240, 30], [20, 30]], "role": "s ok", "name": "mul" },
                      { "type": "label", "coords": [130, 120], "text": "1. phi(a + b) = phi(a) + phi(b)", "size": 11, "align": "center", "role": "t", "name": "add" },
                      { "type": "label", "coords": [130, 55], "text": "2. phi(ab) = phi(a)phi(b)", "size": 11, "align": "center", "role": "t", "name": "mul" }
                    ]
                  }
                ]
              }
            },
            {
              "type": "math",
              "label": "Examples 22.10, 22.11, 22.13, 22.15",
              "title": "Evaluation, Modulo n, 2Z, and Chinese Remainder Isomorphism",
              "tex": "\\phi: \\mathbb{Z} \\to 2\\mathbb{Z},\\; \\phi(x)=2x: \\; \\phi(xy)=2xy \\neq 4xy = \\phi(x)\\phi(y); \\qquad \\gcd(r,s)=1 \\implies \\mathbb{Z}_{rs} \\simeq \\mathbb{Z}_r \\times \\mathbb{Z}_s",
              "body": "Example 22.10: Evaluation \\(\\phi_a: F \\to \\mathbb{R}\\) given by \\(\\phi_a(f) = f(a)\\) is a ring homomorphism. Example 22.11: \\(\\phi: \\mathbb{Z} \\to \\mathbb{Z}_n\\) (remainder mod \\(n\\)) is a ring homomorphism. Example 22.13: \\(\\phi(x) = 2x\\) is a group isomorphism \\(\\langle \\mathbb{Z}, + \\rangle \\simeq \\langle 2\\mathbb{Z}, + \\rangle\\), but not a ring isomorphism. Example 22.15: When \\(\\gcd(r, s) = 1\\), \\(\\phi(n \\cdot 1) = n \\cdot (1, 1)\\) gives a ring isomorphism \\(\\mathbb{Z}_{rs} \\simeq \\mathbb{Z}_r \\times \\mathbb{Z}_s\\)."
            },
            {
              "type": "info",
              "label": "Definition 22.14",
              "title": "Definition 22.14: Commutative Ring and Unity",
              "defines": ["abs-m4-commutative-ring-unity"],
              "body": "A ring in which multiplication is commutative is a commutative ring. A ring with a multiplicative identity element \\(1\\) is a ring with unity; the multiplicative identity element \\(1\\) is called unity. (In the zero ring \\(\\{0\\}\\), \\(0\\) is both additive and multiplicative identity.)",
              "examples": [
                "\\(\\mathbb{Z}\\) has unity \\(1\\)",
                "\\(2\\mathbb{Z}\\) has no unity"
              ],
              "art": {
                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
                "steps": [
                  {
                    "step": 0,
                    "name": "unity",
                    "objects": [
                      { "type": "ellipse", "center": [95, 90], "rx": 65, "ry": 50, "role": "s ok", "name": "comm" },
                      { "type": "ellipse", "center": [165, 90], "rx": 65, "ry": 50, "role": "lk", "name": "uni" },
                      { "type": "label", "coords": [62, 90], "text": "ab = ba", "size": 11, "align": "center", "role": "t", "name": "comm" },
                      { "type": "label", "coords": [198, 90], "text": "1a = a1 = a", "size": 11, "align": "center", "role": "t", "name": "uni" },
                      { "type": "label", "coords": [130, 90], "text": "Z, Q, R", "size": 11, "align": "center", "role": "t", "name": "both" }
                    ]
                  }
                ]
              }
            },
            {
              "type": "info",
              "label": "Definition 22.16",
              "title": "Definition 22.16: Unit, Division Ring, and Field",
              "defines": ["abs-m4-unit-division-ring-field"],
              "body": "Let \\(R\\) be a ring with unity \\(1 \\neq 0\\). An element \\(u \\in R\\) is a unit of \\(R\\) if it has a multiplicative inverse in \\(R\\). If every nonzero element of \\(R\\) is a unit, \\(R\\) is a division ring (or skew field). A field is a commutative division ring.",
              "examples": [
                "Unit \\(u\\): \\(uu^{-1} = u^{-1}u = 1\\)",
                "Fields: \\(\\mathbb{Q}, \\mathbb{R}, \\mathbb{C}\\)"
              ],
              "art": {
                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
                "steps": [
                  {
                    "step": 0,
                    "name": "fieldbox",
                    "objects": [
                      { "type": "ellipse", "center": [130, 90], "rx": 105, "ry": 64, "role": "lk", "name": "div" },
                      { "type": "ellipse", "center": [130, 82], "rx": 68, "ry": 38, "role": "s ok", "name": "fld" },
                      { "type": "label", "coords": [130, 138], "text": "Division Ring (every a != 0 is a unit)", "size": 11, "align": "center", "role": "t", "name": "div" },
                      { "type": "label", "coords": [130, 82], "text": "Field (+ commutative)", "size": 11, "align": "center", "role": "t", "name": "fld" }
                    ]
                  }
                ]
              }
            },
            {
              "type": "math",
              "label": "Examples 22.17, 22.18 & Ex 39, 50",
              "title": "Units in Z14 and Z, Group of Units, and Subrings",
              "tex": "\\text{Units in }\\mathbb{Z}_{14}: \\{1, 3, 5, 9, 11, 13\\} \\quad (3 \\cdot 5 = 1,\\; 9 \\cdot 11 = 1,\\; 13 \\cdot 13 = 1)",
              "body": "Example 22.17: The units in \\(\\mathbb{Z}_{14}\\) are \\(1, 3, 5, 9, 11, 13\\) (precisely those \\(m \\in \\mathbb{Z}_{14}\\) with \\(\\gcd(m, 14) = 1\\)). Example 22.18: The only units in \\(\\mathbb{Z}\\) are \\(1\\) and \\(-1\\), so \\(\\mathbb{Z}\\) is not a field, while \\(\\mathbb{Q}\\) and \\(\\mathbb{R}\\) are fields. Do not confuse unity (the single element \\(1\\)) with a unit (any invertible element). Exercise 22.39: All units \\(U\\) of a ring with unity form a multiplicative group \\(\\langle U, \\cdot \\rangle\\). Exercise 22.50: \\(S \\subseteq R\\) is a subring iff \\(0 \\in S\\), \\(a-b \\in S\\), and \\(ab \\in S\\) for all \\(a, b \\in S\\)."
            },
            {
              "type": "mcq",
              "label": "Quiz · OMR",
              "time": 60,
              "q": "Which of the following is a commutative ring without unity?",
              "options": [
                "\\(2\\mathbb{Z}\\)",
                "\\(\\mathbb{Z}\\)",
                "\\(M_2(\\mathbb{R})\\)",
                "\\(\\mathbb{Z}_6\\)"
              ],
              "answer": 0,
              "why": "Even integers \\(2\\mathbb{Z}\\) form a commutative ring, but \\(1 \\notin 2\\mathbb{Z}\\), so \\(2\\mathbb{Z}\\) has no multiplicative identity."
            },
            {
              "type": "mcq",
              "label": "Quiz · OMR",
              "time": 60,
              "q": "What are all the units in the ring \\(\\mathbb{Z}\\) of integers?",
              "options": [
                "\\(1\\) and \\(-1\\)",
                "Only \\(1\\)",
                "All nonzero integers",
                "All prime numbers"
              ],
              "answer": 0,
              "why": "By Example 22.18, only \\(1\\) and \\(-1\\) have multiplicative inverses in \\(\\mathbb{Z}\\)."
            },
            {
              "type": "fill",
              "label": "Quiz · Fill in",
              "time": 60,
              "q": "A commutative division ring is called a ______.",
              "answer": "field",
              "why": "By Definition 22.16, a field is a commutative division ring."
            },
            {
              "type": "number",
              "label": "Quiz · Number",
              "time": 60,
              "q": "How many units does the ring \\(\\mathbb{Z}_{14}\\) have?",
              "answer": 6,
              "why": "By Example 22.17, the units in \\(\\mathbb{Z}_{14}\\) are \\(1, 3, 5, 9, 11, 13\\), so there are \\(6\\) units."
            }
          ]
        },
        {
          "id": "abs-m4-integral-domains",
          "title": "Integral Domains and Characteristic",
          "icon": "book",
          "source": "Fraleigh 8th ed. §23, 23.1–23.14 (7th ed. §19: Integral Domains, 19.1–19.15)",
          "cards": [
            {
              "type": "info",
              "label": "Definition 23.2 & Example 23.1",
              "title": "Definition 23.2: Divisors of 0",
              "defines": ["abs-m4-zero-divisor"],
              "body": "If \\(a\\) and \\(b\\) are two nonzero elements of a ring \\(R\\) such that \\(ab = 0\\), then \\(a\\) and \\(b\\) are divisors of \\(0\\) (or \\(0\\) divisors). In Example 23.1, \\(x^2 - 5x + 6 = (x-2)(x-3) = 0\\) in \\(\\mathbb{Z}_{12}\\) has four solutions (\\(2, 3, 6, 11\\)) because \\(4 \\cdot 3 = 0\\) and \\(9 \\cdot 8 = 0\\) in \\(\\mathbb{Z}_{12}\\).",
              "examples": [
                "\\(a \\neq 0,\\; b \\neq 0,\\; ab = 0\\)",
                "In \\(\\mathbb{Z}_{12}\\): \\(2, 3, 4, 6, 8, 9, 10\\)"
              ],
              "art": {
                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
                "steps": [
                  {
                    "step": 0,
                    "name": "zdiv",
                    "objects": [
                      { "type": "circle", "center": [60, 90], "r": 26, "role": "s ok", "name": "a" },
                      { "type": "circle", "center": [130, 90], "r": 26, "role": "s ok", "name": "b" },
                      { "type": "circle", "center": [205, 90], "r": 26, "role": "f", "name": "z" },
                      { "type": "arrow", "p1": [158, 90], "p2": [177, 90], "role": "lk", "width": 2, "name": "to0" },
                      { "type": "label", "coords": [60, 90], "text": "a != 0", "size": 11, "align": "center", "role": "t", "name": "a" },
                      { "type": "label", "coords": [130, 90], "text": "b != 0", "size": 11, "align": "center", "role": "t", "name": "b" },
                      { "type": "label", "coords": [205, 90], "text": "ab = 0", "size": 11, "align": "center", "role": "i", "name": "z" }
                    ]
                  }
                ]
              }
            },
            {
              "type": "info",
              "label": "Theorem 23.3 & Corollary 23.5",
              "title": "Theorem 23.3 & Corollary 23.5: Units and 0 Divisors in Zn",
              "body": "Theorem 23.3: Let \\(m \\in \\mathbb{Z}_n\\). Either \\(m = 0\\), \\(\\gcd(m, n) = 1\\) (in which case \\(m\\) is a unit in \\(\\mathbb{Z}_n\\)), or \\(\\gcd(m, n) = d > 1\\) (in which case \\(m\\) is a \\(0\\) divisor in \\(\\mathbb{Z}_n\\), since \\(m(n/d) = (m/d)n = 0\\)). Corollary 23.5: If \\(p\\) is prime, every nonzero element of \\(\\mathbb{Z}_p\\) is a unit, so \\(\\mathbb{Z}_p\\) is a field and has no divisors of \\(0\\).",
              "examples": [
                "\\(\\gcd(m, n) = 1 \\iff m\\) is a unit",
                "\\(p\\) prime \\(\\implies \\mathbb{Z}_p\\) is a field"
              ]
            },
            {
              "type": "math",
              "label": "Example 23.4",
              "title": "Classifying Nonzero Elements of Z20",
              "tex": "\\text{Units of }\\mathbb{Z}_{20}: \\{1,3,7,9,11,13,17,19\\}; \\quad 0\\text{ divisors}: \\{2,4,5,6,8,10,12,14,15,16,18\\}",
              "body": "Example 23.4: In \\(\\mathbb{Z}_{20}\\), the \\(8\\) elements with \\(\\gcd(m, 20) = 1\\) are units (for instance, \\(3 \\cdot 7 = 1\\) and \\(13 \\cdot 17 = 1\\)), while the \\(11\\) nonzero elements with \\(\\gcd(m, 20) > 1\\) are divisors of \\(0\\) (for instance, \\(4 \\cdot 5 = 0\\) and \\(8 \\cdot 15 = 0\\)). Note that a unit in a ring with unity can never be a \\(0\\) divisor."
            },
            {
              "type": "info",
              "label": "Theorem 23.6",
              "title": "Theorem 23.6: Cancellation Laws and Divisors of 0",
              "body": "The multiplicative cancellation laws (\\(ab = ac\\) or \\(ba = ca\\) with \\(a \\neq 0 \\implies b = c\\)) hold in a ring \\(R\\) if and only if \\(R\\) has no divisors of \\(0\\). Proof: (1) If cancellation holds and \\(ab = 0\\) with \\(a \\neq 0\\), then \\(ab = a0 \\implies b = 0\\). (2) Conversely, if \\(R\\) has no \\(0\\) divisors and \\(ab = ac\\) with \\(a \\neq 0\\), then \\(a(b - c) = ab - ac = 0 \\implies b - c = 0 \\implies b = c\\).",
              "examples": [
                "\\(ab = ac \\iff a(b - c) = 0\\)"
              ]
            },
            {
              "type": "info",
              "label": "Definition 23.7",
              "title": "Definition 23.7: Integral Domain",
              "defines": ["abs-m4-integral-domain"],
              "body": "An integral domain \\(D\\) is a commutative ring with unity \\(1 \\neq 0\\) that contains no divisors of \\(0\\).",
              "examples": [
                "\\(\\mathbb{Z}\\), \\(\\mathbb{Z}_p\\) (\\(p\\) prime)",
                "Every field is an integral domain"
              ],
              "art": {
                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
                "steps": [
                  {
                    "step": 0,
                    "name": "venn",
                    "objects": [
                      { "type": "ellipse", "center": [130, 90], "rx": 110, "ry": 68, "role": "lk", "name": "cring" },
                      { "type": "ellipse", "center": [130, 82], "rx": 80, "ry": 46, "role": "lk", "name": "dom" },
                      { "type": "ellipse", "center": [130, 74], "rx": 48, "ry": 26, "role": "s ok", "name": "fld" },
                      { "type": "label", "coords": [130, 144], "text": "Commutative Rings with Unity", "size": 11, "align": "center", "role": "t", "name": "cring" },
                      { "type": "label", "coords": [130, 114], "text": "Integral Domains (no 0 divisors)", "size": 11, "align": "center", "role": "t", "name": "dom" },
                      { "type": "label", "coords": [130, 74], "text": "Fields", "size": 11, "align": "center", "role": "t", "name": "fld" }
                    ]
                  }
                ]
              }
            },
            {
              "type": "math",
              "label": "Examples 23.8 & 23.9",
              "title": "Examples and Non-Examples of Integral Domains",
              "tex": "R \\times S: (r, 0)(0, s) = (0, 0); \\qquad M_2(\\mathbb{Z}_2): \\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}\\begin{pmatrix}0&0\\\\1&0\\end{pmatrix} = \\begin{pmatrix}0&0\\\\0&0\\end{pmatrix}",
              "body": "Example 23.8: \\(\\mathbb{Z}\\) and \\(\\mathbb{Z}_p\\) (\\(p\\) prime) are integral domains, but \\(\\mathbb{Z}_n\\) (\\(n\\) composite) and the direct product \\(R \\times S\\) of two nonzero rings are not integral domains since \\((r,0)(0,s) = (0,0)\\). Example 23.9: Even though \\(\\mathbb{Z}_2\\) is an integral domain, the matrix ring \\(M_2(\\mathbb{Z}_2)\\) has divisors of \\(0\\) (and is noncommutative)."
            },
            {
              "type": "info",
              "label": "Theorem 23.11",
              "title": "Theorem 23.11: Every Finite Integral Domain is a Field",
              "body": "Every finite integral domain is a field. Proof: Let \\(R\\) be a finite integral domain and let \\(0 \\neq a \\in R\\). Define \\(f: R \\to R\\) by \\(f(x) = ax\\). Step 1: If \\(f(x_1) = f(x_2)\\), then \\(ax_1 = ax_2 \\implies x_1 = x_2\\) by cancellation (Theorem 23.6), so \\(f\\) is one-to-one. Step 2: Since \\(R\\) is finite, any one-to-one map \\(f: R \\to R\\) is also onto \\(R\\), so \\(f(b) = ab = 1\\) for some \\(b \\in R\\), proving \\(a\\) is a unit. (Finiteness is essential since \\(\\mathbb{Z}\\) is an infinite integral domain that is not a field.)",
              "examples": [
                "Finite + integral domain \\(\\implies\\) field"
              ]
            },
            {
              "type": "info",
              "label": "Definition 23.12 & Theorem 23.14",
              "title": "Definition 23.12 & Theorem 23.14: Characteristic of a Ring",
              "defines": ["abs-m4-characteristic"],
              "body": "Definition 23.12: If for a ring \\(R\\) a positive integer \\(n\\) exists such that \\(n \\cdot a = 0\\) for all \\(a \\in R\\), the least such positive integer is the characteristic of \\(R\\); otherwise \\(R\\) has characteristic \\(0\\). Theorem 23.14: In a ring \\(R\\) with unity \\(1\\), the characteristic is the smallest \\(n \\in \\mathbb{Z}^+\\) with \\(n \\cdot 1 = 0\\), or \\(0\\) if \\(n \\cdot 1 \\neq 0\\) for all \\(n \\in \\mathbb{Z}^+\\).",
              "examples": [
                "\\(\\operatorname{char}(\\mathbb{Z}_n) = n\\)",
                "\\(\\operatorname{char}(\\mathbb{Z}) = \\operatorname{char}(\\mathbb{Q}) = 0\\)"
              ],
              "art": {
                "view": { "bbox": [0, 180, 260, 0], "axis": false, "grid": false },
                "steps": [
                  {
                    "step": 0,
                    "name": "charbox",
                    "objects": [
                      { "type": "polygon", "points": [[20, 140], [240, 140], [240, 40], [20, 40]], "role": "s ok", "name": "box" },
                      { "type": "label", "coords": [130, 112], "text": "n . a = a(1 + 1 + ... + 1) = a(n . 1)", "size": 11, "align": "center", "role": "t", "name": "box" },
                      { "type": "label", "coords": [130, 82], "text": "Test only a = 1 in a ring with unity", "size": 11, "align": "center", "role": "t", "name": "test" },
                      { "type": "label", "coords": [130, 56], "text": "Integral domain char is 0 or prime p", "size": 11, "align": "center", "role": "t", "name": "ex35" }
                    ]
                  }
                ]
              }
            },
            {
              "type": "mcq",
              "label": "Quiz · OMR",
              "time": 60,
              "q": "In \\(\\mathbb{Z}_{12}\\), what are all the solutions of \\(x^2 - 5x + 6 = 0\\)?",
              "options": [
                "\\(2, 3, 6, 11\\)",
                "\\(2\\) and \\(3\\) only",
                "\\(2, 3, 4, 6\\)",
                "\\(0, 2, 3, 6\\)"
              ],
              "answer": 0,
              "why": "By Example 23.1, \\((x-2)(x-3) = 0\\) in \\(\\mathbb{Z}_{12}\\) holds for \\(x = 2, 3\\) and also \\(x = 6\\) (\\(4 \\cdot 3 = 0\\)) and \\(x = 11\\) (\\(9 \\cdot 8 = 0\\))."
            },
            {
              "type": "mcq",
              "label": "Quiz · OMR",
              "time": 60,
              "q": "State whether true or false: Every finite integral domain is a field.",
              "options": [
                "True",
                "False: \\(\\mathbb{Z}\\) is a counterexample",
                "False: \\(\\mathbb{Z}_6\\) is a counterexample",
                "False: \\(M_2(\\mathbb{Z}_2)\\) is a counterexample"
              ],
              "answer": 0,
              "why": "True by Theorem 23.11 (\\(\\mathbb{Z}\\) is infinite, while \\(\\mathbb{Z}_6\\) and \\(M_2(\\mathbb{Z}_2)\\) have zero divisors)."
            },
            {
              "type": "fill",
              "label": "Quiz · Fill in",
              "time": 60,
              "q": "A commutative ring with unity \\(1 \\neq 0\\) and no zero divisors is an ______.",
              "answer": "integral domain",
              "why": "By Definition 23.7, an integral domain is a commutative ring with unity \\(1 \\neq 0\\) and no divisors of \\(0\\)."
            },
            {
              "type": "number",
              "label": "Quiz · Number",
              "time": 60,
              "q": "What is the characteristic of the ring \\(\\mathbb{Z}_3 \\times \\mathbb{Z}_4\\)?",
              "answer": 12,
              "why": "In \\(\\mathbb{Z}_3 \\times \\mathbb{Z}_4\\), the unity is \\((1, 1)\\), and the least positive \\(n\\) with \\(n \\cdot (1, 1) = (0, 0)\\) is \\(\\operatorname{lcm}(3, 4) = 12\\) (Exercise 23.9)."
            },
            {
              "type": "number",
              "label": "Quiz · Number",
              "time": 60,
              "q": "How many divisors of \\(0\\) does the ring \\(\\mathbb{Z}_{20}\\) have?",
              "answer": 11,
              "why": "By Example 23.4, \\(\\mathbb{Z}_{20}\\) has \\(19\\) nonzero elements: \\(8\\) are units and \\(19 - 8 = 11\\) are divisors of \\(0\\)."
            }
          ]
        }
      ]
    }
  ]
}
```

#### Plain-English Note for Module IV
- **Sheets (3 sheets, 36 cards total):**
  1. `abs-m4-isomorphism-theorems` (*Homomorphisms and Isomorphism Theorems*, 11 cards): covers the First Isomorphism Theorem (Theorem 16.2, Fig. 16.1), correspondence of normal subgroups (Lemma 16.3), the join \(H \vee N\) and product \(HN\) (Lemma 16.4), the Second Isomorphism Theorem (Theorem 16.5, Examples 16.6 & 16.7, Exercise 16.10 proving \(nh = \gcd(n,h)\operatorname{lcm}(n,h)\)), and the Third Isomorphism Theorem (Theorem 16.8, Fig. 16.9, Example 16.10 in \(\mathbb{Z}_8\)), plus 4 quiz cards.
  2. `abs-m4-rings-and-fields` (*Rings and Fields*, 13 cards): covers rings and axioms \(\mathscr{R}_1, \mathscr{R}_2, \mathscr{R}_3\) (Def 22.1, Examples 22.2–22.7 including matrix rings, function rings, \(n\mathbb{Z}\), \(\mathbb{Z}_n\), and direct products), zero and sign rules in a ring (Theorem 22.8 with derivation proof, Exercise 22.30), ring homomorphisms and isomorphisms (Defs 22.9 & 22.12, Examples 22.10, 22.11, 22.13, 22.15), commutative rings and unity (Def 22.14), and units, division rings, fields, subrings, and subfields (Def 22.16, Examples 22.17–22.18, Exercises 22.39 & 22.50), plus 4 quiz cards.
  3. `abs-m4-integral-domains` (*Integral Domains and Characteristic*, 12 cards): covers divisors of \(0\) (Example 23.1, Def 23.2), units and \(0\) divisors in \(\mathbb{Z}_n\) and the field \(\mathbb{Z}_p\) (Theorem 23.3, Example 23.4, Corollary 23.5), cancellation laws and \(0\) divisors (Theorem 23.6 with proof), integral domains and the ring hierarchy (Def 23.7, Examples 23.8–23.9, Fig. 23.10), Theorem 23.11 (every finite integral domain is a field, with counting proof), and the characteristic of a ring (Def 23.12, Example 23.13, Theorem 23.14, Exercises 23.9 & 23.35), plus 5 quiz cards.
- **Anything omitted:** Nothing was omitted; all definitions, theorems, corollaries, lemmas, proofs, examples, and referred exercises from Module IV (Units 17–22) are included.
