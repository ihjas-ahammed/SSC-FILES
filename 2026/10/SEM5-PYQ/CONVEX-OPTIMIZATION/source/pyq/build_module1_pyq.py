"""Module I PYQ for Convex Optimization (syllabus units 1 to 8, Review of Multivariable Calculus), in the Electrodynamics II module layout.
Selection: 11 UG questions from the calculus papers in this folder's pool (MTS 6B 12 / MAT3CJ201, Sem 6 and Sem 3, 2022 to 2026).
Excluded: the PG Sem 3 paper (2022, 2023); the SDE multiple-choice variant C 40605-A (marks not printed); the March 2023 paper's other questions outside Module I.
Bands: Section A 1 to 3 marks; Section B 4 to 6 marks (the 6-mark question is kept in B; the band rule for 6 marks is an open decision).
Inside a section: topic order (syllabus order), then year, then month.
Head: pyq-head-aa.html (Abstract Algebra house head). Run: python3 build_module1_pyq.py   (then python3 render.py <file>)
"""
import os
HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "convex-optimization-module-1-pyq.html")

TOPIC = {1: "Directional derivatives", 2: "Gradient", 3: "Jacobian",
         4: "Chain rule", 5: "Stationary points and relative extrema"}

# (band, topic, year, month order, label, marks, html)
ROWS = [
 ("A", 1, 2022, 3, "March 2022", 3,
  "Find the directional derivative of $f(x, y) = x^2 \\sin 2y$ at $\\left(1, \\frac{\\pi}{2}\\right)$ in the direction of $\\vec{v} = 3\\hat{i} - 4\\hat{j}$."),
 ("A", 2, 2023, 3, "March 2023", 2,
  "Find the gradient of $f(x, y) = y \\ln x + xy^2$ at the point $(1, 2)$."),
 ("A", 2, 2024, 3, "March 2024", 2,
  "Find the gradient of $f(x, y) = x^2 + y^2 + 1$ at the point $(1, 2)$. Use the resutl to find the directional derivative of $f$ at $(1, 2)$ in the direction from $(1, 2)$ to $(2, 3)$. <span class=\"cut\">[as printed]</span>"),
 ("A", 3, 2022, 3, "March 2022", 3,
  "Find the Jacobian for the change of variables defined by $x = r\\cos\\theta$, $y = r\\sin\\theta$."),
 ("A", 5, 2022, 3, "March 2022", 3,
  "Find the relative extrema of the function $f(x, y) = x^2 + y^2 - 2x + 4y$."),
 ("A", 5, 2023, 3, "March 2023", 2,
  "Find the relative extrema of $f(x, y) = 1 - \\left(x^2 + y^2\\right)^{1/3}$."),
 ("A", 5, 2024, 3, "March 2024", 2,
  "Find the critical points of $f(x, y) = -x^3 + 4xy - 2y^2 + 1$."),
 ("B", 4, 2025, 3, "March 2025", 5,
  "Use the chain rule to find $\\dfrac{dw}{dt}$, where $w = 2x^3y^2z$, $x = t$, $y = \\cos t$, $z = t\\sin t$."),
 ("B", 5, 2022, 3, "March 2022", 6,
  "Find the relative extrema of $f(x, y) = -x^3 + 4xy - 2y^2 + 1$."),
 ("B", 5, 2023, 3, "March 2023", 5,
  "Find the relative extrema of $f(x, y) = 2x^2 + y^2 + 8x - 6y + 20$."),
 ("B", 5, 2026, 4, "April 2026", 5,
  "Find the relative extrema of $f(x, y) = x^3 + y^2 - 2xy + 7x - 8y + 2$."),
]

SECTIONS = [
 ("A", "Section A: 1 to 3 marks", ""),
 ("B", "Section B: 4 to 6 marks", ""),
]

def build():
    head = open(os.path.join(HERE, "pyq-head-aa.html"), encoding="utf-8").read()
    out = [head, "<body>", '<div class="sheet">',
           '<div class="title">',
           '<div class="tl exam">FYUGP B.Sc. MATHEMATICS HONOURS</div>',
           '<div class="tl sch">CONVEX OPTIMIZATION (MAT5EJ303 (2))</div>',
           '<div class="tl course">Semester V &middot; Elective (Specialisation: Data Science)</div>',
           '<div class="tl subject">MODULE 1: REVIEW OF MULTIVARIABLE CALCULUS</div>',
           '<div class="tl course">Past questions</div>',
           '</div>']
    n = 0
    for band, title, _lead in SECTIONS:
        rows = [r for r in ROWS if r[0] == band]
        rows.sort(key=lambda r: (r[1], r[2], r[3]))
        out.append(f'<div class="sec"><div class="sec-title">{title}</div>')
        cur = None
        for _, topic, year, mo, label, marks, html_ in rows:
            if topic != cur:
                out.append(f'<div class="topic">{TOPIC[topic]}</div>')
                cur = topic
            n += 1
            mk = f"{marks} marks"
            out.append(f'<div class="q"><span class="n">{n}</span><div><span class="q-src">{label}</span>'
                       f'<p>{html_} <span class="mk">({mk})</span></p></div></div>')
        out.append('</div>')
    out.append('</div>\n</body>\n</html>\n')
    open(OUT, "w", encoding="utf-8").write("\n".join(out))
    print(OUT, "| questions:", n, "| marks:", sum(r[5] for r in ROWS))

if __name__ == "__main__":
    build()
