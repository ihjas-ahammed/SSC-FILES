#!/usr/bin/env python3
"""
Generates data/questions.ra1.js
Provides comprehensive Level 3 written questions for every section in Real Analysis I:
  Module 1: 1.1, 1.2, 1.3
  Module 2: 2.1, 2.2, 2.3, 2.4, 2.5
  Module 3: 3.1, 3.2, 3.3
  Module 4: 3.4, 3.5, 3.6, 3.7, 4.1, 4.2, 4.3
  Module +: 11.1, 11.2
"""

import json, re

with open("tools/scratch/parsed_2025.json") as f:
    parsed = json.load(f)

# Group by section
by_sec = {}
for p in parsed:
    s = p["sec"]
    if not s: continue
    by_sec.setdefault(s, []).append(p)

sec_to_mod = {
    "1.1": "ra1.m1", "1.2": "ra1.m1", "1.3": "ra1.m1",
    "2.1": "ra1.m2", "2.2": "ra1.m2", "2.3": "ra1.m2", "2.4": "ra1.m2", "2.5": "ra1.m2",
    "3.1": "ra1.m3", "3.2": "ra1.m3", "3.3": "ra1.m3",
    "3.4": "ra1.m4", "3.5": "ra1.m4", "3.6": "ra1.m4", "3.7": "ra1.m4",
    "4.1": "ra1.m4", "4.2": "ra1.m4", "4.3": "ra1.m4",
    "11.1": "ra1.m5", "11.2": "ra1.m5"
}

sec_to_tests = {
    "1.1": ["c.1.1.1", "c.1.1.2"],
    "1.2": ["c.1.2.1", "c.1.2.2"],
    "1.3": ["c.1.3.1", "c.1.3.2", "c.1.3.4"],
    "2.1": ["c.2.1.1", "c.2.1.4", "c.2.1.9"],
    "2.2": ["c.2.2.1", "c.2.2.7"],
    "2.3": ["c.2.3.1", "c.2.3.4", "c.2.3.6"],
    "2.4": ["c.2.4.3", "c.2.4.7", "c.2.4.8"],
    "2.5": ["c.2.5.1", "c.2.5.2", "c.2.5.4"],
    "3.1": ["c.3.1.3", "c.3.1.4", "c.3.1.10"],
    "3.2": ["c.3.2.2", "c.3.2.3", "c.3.2.7"],
    "3.3": ["c.3.3.1", "c.3.3.2", "c.3.3.6"],
    "3.4": ["c.3.4.1", "c.3.4.2", "c.3.4.8"],
    "3.5": ["c.3.5.1", "c.3.5.5", "c.3.5.8"],
    "3.6": ["c.3.6.1", "c.3.6.3", "c.3.6.4"],
    "3.7": ["c.3.7.1", "c.3.7.3", "c.3.7.6"],
    "4.1": ["c.4.1.1", "c.4.1.4", "c.4.1.8"],
    "4.2": ["c.4.2.4", "c.4.2.7"],
    "4.3": ["c.4.3.1", "c.4.3.3", "c.4.3.5"],
    "11.1": ["c.e1.2", "c.e1.3"],
    "11.2": ["c.e3.1", "c.e3.2"]
}

questions = []

# Select 3-4 best exercises per section from parsed
for sec in ["1.1", "1.2", "1.3", "2.1", "2.2", "2.3", "2.4", "2.5", "3.1", "3.2", "3.3", "3.4", "3.5", "4.1", "4.2", "4.3"]:
    exs = by_sec.get(sec, [])
    # Pick up to 4 representative exercises
    selected = exs[:4]
    for idx, ex in enumerate(selected):
        qid = f"q.ra1.{sec.replace('.', '')}.{idx+1:02d}"
        mod = sec_to_mod[sec]
        tests = sec_to_tests.get(sec, [])
        
        # Build solution HTML from steps
        steps = ex.get("steps", [])
        if steps:
            sol_html = "<p>" + "</p><p>".join(steps) + "</p>"
        else:
            sol_html = f"<p>Follow the algebraic steps given in Bartle & Sherbert §{sec}.</p>"
        
        # Format title
        clean_title = re.sub(r'^Exercise\s*\d+:\s*', '', ex['title']).strip()
        
        # Format prompt
        clean_prompt = ex['prompt'].strip()
        if not clean_prompt:
            clean_prompt = f"Solve the following exercise from Bartle & Sherbert 4e §{sec}: {clean_title}."
        
        questions.append({
            "id": qid,
            "course": "ra1",
            "module": mod,
            "sec": sec,
            "marks": 5,
            "title": clean_title,
            "source": f"Bartle & Sherbert 4e §{sec}",
            "prompt": clean_prompt,
            "tests": tests,
            "approach": f"<p>{ex.get('approach', 'Apply definitions and order properties directly.')}</p>",
            "solution": sol_html,
            "trap": f"Be careful with quantifier order and edge cases in Section {sec}."
        })

# Hand-author high-yield exercises for 3.6, 3.7, 11.1, 11.2
extra_sections = [
  # 3.6 Properly Divergent Sequences
  {
    "id": "q.ra1.36.01", "course": "ra1", "module": "ra1.m4", "sec": "3.6", "marks": 5,
    "title": "Proper Divergence of Monotone Sequences",
    "source": "Bartle & Sherbert 4e §3.6 Ex 1",
    "prompt": "Show that if $(x_n)$ is an unbounded increasing sequence of real numbers, then $\\lim(x_n) = +\\infty$.",
    "tests": ["c.3.6.1", "c.3.6.3"],
    "approach": "<p>Recall that an unbounded increasing sequence has no upper bound; use the definition of $\\lim x_n = +\\infty$.</p>",
    "solution": "<p>Let $\\alpha \\in \\mathbb{R}$ be arbitrary. Since $(x_n)$ is unbounded above, the set $\\{x_n : n \\in \\mathbb{N}\\}$ is not bounded above, so there exists $K \\in \\mathbb{N}$ such that $x_K > \\alpha$.</p><p>Since $(x_n)$ is increasing, for all $n \\ge K$ we have $x_n \\ge x_K > \\alpha$. Since $\\alpha$ was arbitrary, $\\lim(x_n) = +\\infty$.</p>",
    "trap": "Do not assume the sequence is strictly increasing; weak inequality $x_n \\le x_{n+1}$ suffices."
  },
  {
    "id": "q.ra1.36.02", "course": "ra1", "module": "ra1.m4", "sec": "3.6", "marks": 5,
    "title": "Reciprocal of Sequences Tending to Infinity",
    "source": "Bartle & Sherbert 4e §3.6 Ex 3",
    "prompt": "Show that if $x_n > 0$ for all $n \\in \\mathbb{N}$, then $\\lim(x_n) = 0 \\iff \\lim(1/x_n) = +\\infty$.",
    "tests": ["c.3.6.1"],
    "approach": "<p>Direct verification from the definition: $x_n < \\varepsilon \\iff 1/x_n > 1/\\varepsilon$.</p>",
    "solution": "<p><b>(=>)</b> Suppose $\\lim(x_n) = 0$ with $x_n > 0$. Let $M > 0$ be arbitrary. Choose $\\varepsilon = 1/M > 0$. There exists $K$ such that for all $n \\ge K$, $0 < x_n < \\varepsilon = 1/M$. Taking reciprocals gives $1/x_n > M$. Hence $\\lim(1/x_n) = +\\infty$.</p><p><b>(<=)</b> Conversely, assume $\\lim(1/x_n) = +\\infty$. Let $\\varepsilon > 0$. Choose $M = 1/\\varepsilon > 0$. There exists $K$ such that $n \\ge K \\implies 1/x_n > M = 1/\\varepsilon$, which rearranges to $0 < x_n < \\varepsilon$. Thus $\\lim(x_n) = 0$.</p>",
    "trap": "The equivalence strictly requires $x_n > 0$. If $x_n$ can change signs, $1/x_n$ can oscillate between $+\\infty$ and $-\\infty$."
  },
  {
    "id": "q.ra1.36.03", "course": "ra1", "module": "ra1.m4", "sec": "3.6", "marks": 5,
    "title": "Comparison Theorem for Proper Divergence",
    "source": "Bartle & Sherbert 4e §3.6 Ex 4",
    "prompt": "Prove that $\\lim(\\sqrt{n}) = +\\infty$ and $\\lim(\\sqrt{n+1} - \\sqrt{n}) = 0$.",
    "tests": ["c.3.6.4", "c.3.2.10"],
    "approach": "<p>For $\\sqrt{n}$, note $\\sqrt{n} > M \\iff n > M^2$. For the difference, rationalize using the conjugate.</p>",
    "solution": "<p>(a) Given $M > 0$, choose $K \\in \\mathbb{N}$ with $K > M^2$. For all $n \\ge K$, $\\sqrt{n} \\ge \\sqrt{K} > M$, proving $\\lim(\\sqrt{n}) = +\\infty$.</p><p>(b) Multiply and divide by the conjugate: $\\sqrt{n+1} - \\sqrt{n} = \\frac{(n+1) - n}{\\sqrt{n+1} + \\sqrt{n}} = \\frac{1}{\\sqrt{n+1} + \\sqrt{n}} < \\frac{1}{2\\sqrt{n}}$. Since $1/(2\\sqrt{n}) \\to 0$, the Squeeze Theorem forces $\\lim(\\sqrt{n+1} - \\sqrt{n}) = 0$.</p>",
    "trap": "Do not write $\\infty - \\infty = 0$; indeterminate forms must be rewritten algebraically."
  },

  # 3.7 Introduction to Infinite Series
  {
    "id": "q.ra1.37.01", "course": "ra1", "module": "ra1.m4", "sec": "3.7", "marks": 5,
    "title": "Convergence of the Geometric Series",
    "source": "Bartle & Sherbert 4e §3.7 Ex 1",
    "prompt": "Prove that the geometric series $\\sum_{n=0}^\\infty r^n$ converges if and only if $|r| < 1$, and find its sum.",
    "tests": ["c.3.7.1", "c.3.7.4"],
    "approach": "<p>Compute the $n$-th partial sum $s_n = 1 + r + \\dots + r^n = \\frac{1 - r^{n+1}}{1 - r}$ and take the limit as $n \\to \\infty$.</p>",
    "solution": "<p>For $r \\ne 1$, the partial sum is $s_n = \\sum_{k=0}^n r^k = \\frac{1 - r^{n+1}}{1 - r}$.</p><p>If $|r| < 1$, then $\\lim_{n\\to\\infty} r^{n+1} = 0$, so $\\lim s_n = \\frac{1 - 0}{1 - r} = \\frac{1}{1 - r}$.</p><p>If $|r| \\ge 1$, the term $r^n$ does not converge to $0$, so by the $n$-th Term Divergence Test, the series diverges.</p>",
    "trap": "Forgetting the divergence test for $|r| \\ge 1$; the formula $\\frac{1}{1-r}$ is valid ONLY when $|r| < 1$."
  },
  {
    "id": "q.ra1.37.02", "course": "ra1", "module": "ra1.m4", "sec": "3.7", "marks": 5,
    "title": "Telescoping Series",
    "source": "Bartle & Sherbert 4e §3.7 Ex 2",
    "prompt": "Find the sum of the series $\\sum_{n=1}^\\infty \\frac{1}{n(n+1)}$.",
    "tests": ["c.3.7.1", "c.3.7.2"],
    "approach": "<p>Use partial fractions to write $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$, and examine the collapsing sum.</p>",
    "solution": "<p>Write $\\frac{1}{k(k+1)} = \\frac{1}{k} - \\frac{1}{k+1}$. The partial sum is:</p><p>$$s_n = \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\dots + \\left(\\frac{1}{n} - \\frac{1}{n+1}\\right) = 1 - \\frac{1}{n+1}$$</p><p>Taking the limit as $n \\to \\infty$, we have $\\lim s_n = 1 - 0 = 1$. Hence $\\sum_{n=1}^\\infty \\frac{1}{n(n+1)} = 1$.</p>",
    "trap": "Ensure the boundary terms are carefully tracked; do not forget the trailing term $-1/(n+1)$."
  },
  {
    "id": "q.ra1.37.03", "course": "ra1", "module": "ra1.m4", "sec": "3.7", "marks": 5,
    "title": "Divergence of the Harmonic Series via Cauchy Criterion",
    "source": "Bartle & Sherbert 4e §3.7 Ex 6",
    "prompt": "Use the Cauchy Criterion for series to prove that the harmonic series $\\sum_{n=1}^\\infty \\frac{1}{n}$ diverges.",
    "tests": ["c.3.7.4", "c.3.7.6"],
    "approach": "<p>Evaluate the block of terms $s_{2n} - s_n$ and show it is bounded below by $1/2$ for every $n$.</p>",
    "solution": "<p>Consider the Cauchy difference between $2n$ and $n$:</p><p>$$s_{2n} - s_n = \\frac{1}{n+1} + \\frac{1}{n+2} + \\dots + \\frac{1}{2n}$$</p><p>Each of the $n$ terms satisfies $\\frac{1}{n+k} \\ge \\frac{1}{2n}$. Therefore:</p><p>$$s_{2n} - s_n \\ge n \\cdot \\frac{1}{2n} = \\frac{1}{2}$$</p><p>If the series converged, for $\\varepsilon = 1/2$ there would exist $N$ such that $m > n \\ge N \\implies |s_m - s_n| < 1/2$. Taking $m = 2n$ gives $s_{2n} - s_n \\ge 1/2$, a contradiction. Hence the series diverges.</p>",
    "trap": "The individual terms $1/n \\to 0$, but the series still diverges! The $n$-th term test can ONLY prove divergence, never convergence."
  },

  # 11.1 Topology of the Line: Open and Closed Sets
  {
    "id": "q.ra1.111.01", "course": "ra1", "module": "ra1.m5", "sec": "11.1", "marks": 5,
    "title": "Arbitrary Unions and Finite Intersections of Open Sets",
    "source": "Bartle & Sherbert 4e §11.1 Ex 1",
    "prompt": "Prove that: (a) Any arbitrary union of open subsets of $\\mathbb{R}$ is open; (b) The intersection of any finite collection of open subsets of $\\mathbb{R}$ is open.",
    "tests": ["c.e1.2"],
    "approach": "<p>For unions, any point belongs to at least one open set. For finite intersections, take the minimum of finitely many radii.</p>",
    "solution": "<p><b>(a)</b> Let $\\{G_\\alpha\\}_{\\alpha \\in I}$ be open sets and $G = \\bigcup_\\alpha G_\\alpha$. If $x \\in G$, then $x \\in G_{\\alpha_0}$ for some $\\alpha_0$. Since $G_{\\alpha_0}$ is open, there is $\\varepsilon > 0$ such that $V_\\varepsilon(x) \\subseteq G_{\\alpha_0} \\subseteq G$. Hence $G$ is open.</p><p><b>(b)</b> Let $G_1, \\dots, G_m$ be open and $H = \\bigcap_{i=1}^m G_i$. If $x \\in H$, then $x \\in G_i$ for all $i$. Choose $\\varepsilon_i > 0$ with $V_{\\varepsilon_i}(x) \\subseteq G_i$. Let $\\varepsilon = \\min(\\varepsilon_1, \\dots, \\varepsilon_m) > 0$. Then $V_\\varepsilon(x) \\subseteq V_{\\varepsilon_i}(x) \\subseteq G_i$ for all $i$, so $V_\\varepsilon(x) \\subseteq H$. Thus $H$ is open.</p>",
    "trap": "Why does (b) fail for infinite intersections? Because the infimum of infinitely many positive numbers can be zero: $\\bigcap_{n=1}^\\infty (-1/n, 1/n) = \\{0\\}$ is not open."
  },

  # 11.2 Compact Sets
  {
    "id": "q.ra1.112.01", "course": "ra1", "module": "ra1.m5", "sec": "11.2", "marks": 5,
    "title": "Heine–Borel Theorem on the Line",
    "source": "Bartle & Sherbert 4e §11.2 Ex 1",
    "prompt": "Show that the open interval $(0, 1)$ is bounded but NOT compact by exhibiting an open cover with no finite subcover.",
    "tests": ["c.e3.1"],
    "approach": "<p>Consider the open cover $\\mathcal{U} = \\{(1/n, 1) : n \\ge 2\\}$.</p>",
    "solution": "<p>Consider the collection of open intervals $G_n = (1/n, 1)$ for $n \\in \\mathbb{N}, n \\ge 2$.</p><p>1. <b>It covers $(0, 1)$:</b> If $x \\in (0, 1)$, by the Archimedean property there is $n \\in \\mathbb{N}$ with $1/n < x$, so $x \\in G_n$. Thus $(0, 1) \\subseteq \\bigcup_{n=2}^\\infty G_n$.</p><p>2. <b>No finite subcover exists:</b> Any finite subcollection $\\{G_{n_1}, \\dots, G_{n_k}\\}$ has a maximum index $M = \\max(n_1, \\dots, n_k)$. Its union is $(1/M, 1)$. But for any $y \\le 1/M$ (e.g. $y = 1/(M+1) \\in (0, 1)$), $y$ is not in the union. Hence no finite subcover can cover $(0, 1)$, proving $(0, 1)$ is not compact.</p>",
    "trap": "Boundedness is not enough: a set on $\\mathbb{R}$ must be BOTH closed and bounded to be compact."
  }
]

questions.extend(extra_sections)

print(f"Total RA1 questions generated: {len(questions)}")

# Write to data/questions.ra1.js
with open("data/questions.ra1.js", "w") as out:
    out.write("""/* ══════════════════════════════════════════════════════════════════════════
   Real Analysis I · Level 3 Written Exercises (Bartle & Sherbert 4e)
   Covers Sections 1.1 through 4.3 and 11.1–11.2.
   ══════════════════════════════════════════════════════════════════════════ */

QUESTIONS.push(
""")
    for i, q in enumerate(questions):
        sep = "," if i < len(questions) - 1 else ""
        out.write(json.dumps(q, indent=2))
        out.write(sep + "\n")
    out.write(");\n")

print("Successfully wrote data/questions.ra1.js!")
