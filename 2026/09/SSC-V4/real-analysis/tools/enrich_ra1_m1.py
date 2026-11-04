#!/usr/bin/env python3
import re

content = open("data/ra1-m1.js").read()

replacements = {
  "c.1.2.1": [
    {
      "why": "Suppose for contradiction that $S \\ne \\mathbb{N}$, and let $E$ be the set of elements not in $S$.",
      "m": "$$E := \\mathbb{N} \\setminus S \\ne \\emptyset$$",
      "meaning": "What this really means: We imagine that some natural numbers fail the statement, and gather all these failing numbers into a basket $E$ to find the very first failure."
    },
    {
      "why": "By the Well-Ordering Property, $E$ has a least element $m = \\min E$.",
      "m": "$$m = \\min E \\implies m \\in E \\text{ and } \\forall k < m,\\, k \\notin E$$",
      "meaning": "What this really means: Well-ordering guarantees this failure basket has a clear, unambiguous first member $m$ where the domino chain broke."
    },
    {
      "why": "Since $1 \\in S$ (base step), $1 \\notin E$, so $m > 1$. Therefore $m - 1 \\ge 1$ is a natural number.",
      "m": "$$1 \\in S \\implies m > 1 \\implies m - 1 \\in \\mathbb{N}$$",
      "meaning": "What this really means: Since the base step worked at 1, the very first failure cannot be 1; it must occur later down the line, meaning $m-1$ is a valid natural number."
    },
    {
      "why": "Since $m - 1 < m$ and $m$ is the least element of $E$, $m - 1 \\notin E$, which means $m - 1 \\in S$.",
      "m": "$$m - 1 < m \\implies m - 1 \\in S$$",
      "meaning": "What this really means: Because $m$ was the very FIRST failure, the number right before it, $m-1$, must have been successful."
    },
    {
      "why": "By the induction step with $k = m - 1$, since $m - 1 \\in S$, it follows that $(m - 1) + 1 = m \\in S$, contradicting $m \\in E$.",
      "m": "$$m - 1 \\in S \\implies m \\in S \\implies m \\notin E \\implies\\Leftarrow$$",
      "meaning": "What this really means: But the induction rule says any successful number knocks over the next one! So $m-1$ knocks over $m$, proving $m$ was actually successful after all—an impossible contradiction."
    }
  ],

  "c.1.2.2": [
    {
      "why": "Let $S \\subseteq \\mathbb{N}$ be a subset that has no least element. We will prove $S = \\emptyset$.",
      "m": "$$S \\subseteq \\mathbb{N}, \\quad S \\text{ has no least element}$$",
      "meaning": "What this really means: We test what happens if a set of natural numbers claims to have no smallest member; we show such a set cannot even contain a single element."
    },
    {
      "why": "Let $T = \\mathbb{N} \\setminus S$. If $1 \\in S$, then 1 would be the least element of $S$, a contradiction. So $1 \\notin S$, meaning $1 \\in T$.",
      "m": "$$T = \\mathbb{N} \\setminus S \\implies 1 \\in T \\quad (\\text{if } 1 \\in S, 1 = \\min S)$$",
      "meaning": "What this really means: Look at the numbers NOT in $S$. The number $1$ must be outside $S$, because if $1$ were in $S$, it would immediately be the smallest member!"
    },
    {
      "why": "Induction hypothesis: assume $\{1, 2, \\ldots, k\} \\subseteq T$, so none of $1, 2, \\ldots, k$ are in $S$.",
      "m": "$$\\{1, 2, \\dots, k\\} \\subseteq T \\implies \\{1, 2, \\dots, k\\} \\cap S = \\emptyset$$",
      "meaning": "What this really means: Induction hypothesis: assume every number from $1$ up to $k$ stays safely outside $S$."
    },
    {
      "why": "If $k + 1 \\in S$, then since no smaller natural number is in $S$, $k + 1$ would be the least element of $S$, contradicting the hypothesis. Hence $k + 1 \\notin S$, so $k + 1 \\in T$.",
      "m": "$$k + 1 \\in S \\implies k + 1 = \\min S \\implies\\Leftarrow \\implies k + 1 \\in T$$",
      "meaning": "What this really means: If $k+1$ were in $S$, it would be smaller than anything remaining in $S$, making it the least element! Contradiction, so $k+1$ is also outside $S$."
    },
    {
      "why": "By the Principle of Strong Induction, $T = \\mathbb{N}$. Therefore $S = \\mathbb{N} \\setminus T = \\emptyset$.",
      "m": "$$T = \\mathbb{N} \\implies S = \\emptyset$$",
      "meaning": "What this really means: By strong induction, all natural numbers are outside $S$, leaving $S$ completely empty."
    }
  ],

  "c.1.2.3": [
    {
      "why": "Define $T = \\{k \\in \\mathbb{N} : \\{1, 2, \\ldots, k\\} \\subseteq S\\}$.",
      "m": "$$T = \\{k \\in \\mathbb{N} : \\{1, 2, \\ldots, k\\} \\subseteq S\\}$$",
      "meaning": "What this really means: Instead of tracking single dominoes, we redefine success as having the entire block of dominoes from $1$ up to $k$ knocked down."
    },
    {
      "why": "Since $1 \\in S$ by hypothesis (1), $\{1\} \\subseteq S$, so $1 \\in T$. This establishes the base step for $T$.",
      "m": "$$1 \\in S \\implies \\{1\\} \\subseteq S \\implies 1 \\in T$$",
      "meaning": "What this really means: Since domino 1 falls, the starting block of length 1 is solidly knocked down."
    },
    {
      "why": "Induction hypothesis: assume $k \\in T$. Then $\{1, 2, \\ldots, k\} \\subseteq S$.",
      "m": "$$k \\in T \\implies \\{1, 2, \\dots, k\\} \\subseteq S$$",
      "meaning": "What this really means: Assume the entire run of dominoes from 1 to $k$ is knocked down."
    },
    {
      "why": "By hypothesis (2), since $\{1, 2, \\ldots, k\} \\subseteq S$, it follows that $k + 1 \\in S$. Therefore $\{1, 2, \\ldots, k, k + 1\} \\subseteq S$, which means $k + 1 \\in T$.",
      "m": "$$\\{1, \\dots, k\\} \\subseteq S \\implies k + 1 \\in S \\implies \\{1, \\dots, k+1\\} \\subseteq S \\implies k + 1 \\in T$$",
      "meaning": "What this really means: The strong induction rule uses all previously fallen dominoes together to knock over domino $k+1$, expanding the fallen block."
    },
    {
      "why": "By the Principle of Induction, $T = \\mathbb{N}$. Since $k \\in T \\implies k \\in S$, we have $S = \\mathbb{N}$.",
      "m": "$$T = \\mathbb{N} \\implies S = \\mathbb{N}$$",
      "meaning": "What this really means: Standard induction applied to the block ensures every domino in $\\mathbb{N}$ falls."
    }
  ],

  "c.1.3.2": [
    {
      "why": "Arrange positive rationals $p/q$ in an array with row $p$ and column $q$, and traverse finite diagonals $p + q = k$.",
      "m": "$$\\psi(p, q) = (p, q), \\quad p + q = k \\quad (k = 2, 3, 4, \\dots)$$",
      "meaning": "What this really means: Lay every fraction out on a 2D grid and walk across it in diagonal zig-zags so no fraction is stranded infinitely far away."
    },
    {
      "why": "Omit duplicate fractions (those not in lowest terms) to obtain an explicit list $\\mathbb{Q}^+ = \\{r_1, r_2, r_3, \\ldots\\}$.",
      "m": "$$\\mathbb{Q}^+ = \\{r_1, r_2, r_3, \\dots\\}$$",
      "meaning": "What this really means: Cross out duplicates like $2/2$ or $2/4$. Every remaining fraction gets a finite queue number, proving fractions can be counted in line."
    },
    {
      "why": "Since $\\mathbb{Q} = \\mathbb{Q}^+ \\cup \\{0\\} \\cup (-\\mathbb{Q}^+)$ is a union of three countable sets, $\\mathbb{Q}$ is countable.",
      "m": "$$\\mathbb{Q} = \\mathbb{Q}^+ \\cup \\{0\\} \\cup (-\\mathbb{Q}^+) \\implies |\\mathbb{Q}| = |\\mathbb{N}|$$",
      "meaning": "What this really means: Adding negative fractions and zero is just combining three countable lines together, which remains countable."
    },
    {
      "why": "For $[0, 1]$, assume for contradiction that an enumeration $x_1, x_2, \\ldots$ exists. Write each in decimal expansion: $x_n = 0.d_{n1}d_{n2}d_{n3}\\ldots$",
      "m": "$$[0, 1] = \\{x_1, x_2, x_3, \\dots\\}, \\quad x_n = 0.d_{n1} d_{n2} d_{n3} \\dots$$",
      "meaning": "What this really means: To test if real numbers can also be listed, we pretend an infinite master table contains every single decimal between $0$ and $1$."
    },
    {
      "why": "Construct $y = 0.y_1 y_2 y_3 \\ldots \\in [0, 1]$ by choosing $y_n = 2$ if $d_{nn} = 1$, and $y_n = 1$ if $d_{nn} \\ne 1$.",
      "m": "$$y = 0.y_1 y_2 y_3 \\dots \\in [0, 1], \\quad y_n = \\begin{cases} 2 & \\text{if } d_{nn} = 1 \\\\ 1 & \\text{if } d_{nn} \\ne 1 \\end{cases}$$",
      "meaning": "What this really means: Cantor looks down the diagonal of the list and flips each digit: the new number intentionally disagrees with the 1st number at digit 1, the 2nd at digit 2, and so on."
    },
    {
      "why": "Then $y \\ne x_n$ for every $n \\in \\mathbb{N}$ because their decimal expansions differ at the $n$-th digit, contradicting the enumeration.",
      "m": "$$y \\ne x_n \\quad \\forall n \\in \\mathbb{N} \\implies y \\notin \\{x_n\\} \\implies\\Leftarrow$$",
      "meaning": "What this really means: This new number cannot match ANY number on the entire infinite list because it differs from each by at least one digit! The master list was incomplete."
    }
  ],

  "c.1.3.3": [
    {
      "why": "Let $S$ be countable and $E \\subseteq S$. If $E$ is finite, it is countable. If $E$ is infinite, let $S = \\{s_1, s_2, \\ldots\\}$. Define $n_1$ as the smallest index with $s_{n_1} \\in E$.",
      "m": "$$n_1 = \\min\\{k \\in \\mathbb{N} : s_k \\in E\\}$$",
      "meaning": "What this really means: Take your numbered list of items in $S$ and walk down it, picking out the very first item that belongs to your sub-group $E$."
    },
    {
      "why": "Inductively define $n_k = \\min\\{j > n_{k-1} : s_j \\in E\\}$. Then $k \\mapsto s_{n_k}$ is a bijection from $\\mathbb{N}$ to $E$, proving $E$ is countably infinite.",
      "m": "$$n_k = \\min\\{j > n_{k-1} : s_j \\in E\\} \\implies f(k) = s_{n_k} \\text{ is a bijection}$$",
      "meaning": "What this really means: Keep walking forward to pick the next member of $E$, renumbering them 1st, 2nd, 3rd. A sub-list of a countable list is always countable."
    },
    {
      "why": "For the union $A = \\bigcup_{n=1}^\\infty A_n$, list each set: $A_n = \\{a_{n1}, a_{n2}, a_{n3}, \\ldots\\}$. Arrange into a 2D array.",
      "m": "$$A = \\bigcup_{n=1}^\\infty A_n, \\quad A_n = \\{a_{n1}, a_{n2}, \\dots\\}$$",
      "meaning": "What this really means: When combining countably many lists, write List 1 on Row 1, List 2 on Row 2, forming an infinite table."
    },
    {
      "why": "Traverse the diagonals $D_k = \\{a_{ij} : i + j = k\\}$ for $k = 2, 3, 4, \\ldots$. Each diagonal $D_k$ has at most $k - 1$ elements (finite).",
      "m": "$$D_k = \\{a_{ij} : i + j = k\\}, \\quad |D_k| \\le k - 1$$",
      "meaning": "What this really means: Snake through the table along finite diagonal ribbons, ensuring you visit every row and every column in finite time."
    },
    {
      "why": "Skipping duplicate elements defines a surjection from $\\mathbb{N}$ onto $A$, proving $A$ is countable.",
      "m": "$$g: \\mathbb{N} \\twoheadrightarrow A \\implies A \\text{ is countable}$$",
      "meaning": "What this really means: Skip duplicates along the way. Since every single item across all lists gets a finite ticket number, the combined super-list is countable."
    }
  ],

  "c.1.3.4": [
    {
      "why": "Suppose for contradiction that $f: A \\to \\mathcal{P}(A)$ is surjective.",
      "m": "$$f: A \\twoheadrightarrow \\mathcal{P}(A)$$",
      "meaning": "What this really means: We assume every possible subset of $A$ can be paired with an element from $A$ with none left out, setting up a trap that will contradict itself."
    },
    {
      "why": "Define the diagonal subset $D = \\{x \\in A : x \\notin f(x)\\}$. Since $D \\subseteq A$, $D \\in \\mathcal{P}(A)$.",
      "m": "$$D := \\{x \\in A : x \\notin f(x)\\} \\in \\mathcal{P}(A)$$",
      "meaning": "What this really means: We build a \"rebel club\" $D$ of all elements that do NOT belong to their assigned partner set (like the barber who shaves only those who do not shave themselves)."
    },
    {
      "why": "Since $f$ is surjective, there must exist some element $d \\in A$ such that $f(d) = D$.",
      "m": "$$\\exists d \\in A : f(d) = D$$",
      "meaning": "What this really means: If our pairing truly reached every subset, some element $d$ in our set must have been assigned this rebel club $D$ as its partner."
    },
    {
      "why": "Now ask: does $d$ belong to $D$? By definition of $D$, $d \\in D \\iff d \\notin f(d)$.",
      "m": "$$d \\in D \\iff d \\notin f(d)$$",
      "meaning": "What this really means: We test if $d$ is in $D$. But the rule of the rebel club says an element is in $D$ only if it is NOT in its assigned partner set."
    },
    {
      "why": "Substitute $f(d) = D$ into the equivalence: $d \\in D \\iff d \\notin D$, an outright logical contradiction.",
      "m": "$$d \\in D \\iff d \\notin D \\implies\\Leftarrow$$",
      "meaning": "What this really means: Since $d$'s assigned set is $D$, this means $d$ is in $D$ if and only if $d$ is NOT in $D$! An impossible paradox proving no set can ever be paired with all its subsets."
    }
  ]
}

import json

for cid, rungs in replacements.items():
    # Find the concept in content
    # Replace the rungs array
    rungs_js = json.dumps(rungs, indent=8)
    # Match proof: { ... rungs: [ ... ] ... }
    # Regex to find rungs: \[.*?\] for this concept
    pattern = re.compile(rf'(id:\s*[\'\"]{cid}[\'\"].*?proof:\s*\{{.*?rungs:\s*)\[(.*?)\](\s*,\s*ends:)', re.DOTALL)
    m = pattern.search(content)
    if m:
        content = content[:m.start(2)] + rungs_js + content[m.end(2):]
        print(f"Replaced rungs for {cid}")
    else:
        print(f"FAILED to find rungs for {cid}")

open("data/ra1-m1.js", "w").write(content)
print("Updated data/ra1-m1.js!")
