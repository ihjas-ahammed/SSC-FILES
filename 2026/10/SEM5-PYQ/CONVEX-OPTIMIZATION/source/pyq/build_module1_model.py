"""Model paper (missed topics from PYQ) for Convex Optimization, Module I (syllabus units 1 to 8).
Gaps: the Module I PYQ (build_module1_pyq.py) reaches units 1, 2 (gradient and Jacobian), 3, 4 and part of 8 (relative extrema).
It does not reach: unit 2 (total derivative as a matrix), unit 5 (Hessian), unit 6 (mean value theorem and second order Taylor),
unit 7 (eigenvalues of the Hessian) and classification by the Hessian (unit 8).
Model questions are drafted for these gaps only, in the bands 1, 2, 4 and 10 marks. Questions on page 1; key and mapping on page 2.
Run: python3 build_module1_model.py   (writes convex-optimization-module-1-model-missed-topics-from-pyq.html; then python3 render.py <file>)
"""
import os
HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "convex-optimization-module-1-model-missed-topics-from-pyq.html")
TOPICS = ["Hessian matrix", "Eigenvalues of the Hessian", "Total derivative and Jacobian matrix", "Second order Taylor theorem", "Mean value theorem", "Hessian matrix and symmetry", "Eigenvalues of the Hessian", "Classification of stationary points"]
SEC_TITLES = {1: "Section A: 1 mark each, answer all", 2: "Section B: 2 marks each, answer all", 4: "Section C: 4 marks each, answer all", 10: "Section D: 10 marks, answer the question"}

SECTIONS = [
 (1, "Section A (1 mark each)", "Answer all questions.", [
   ("Write the Hessian matrix of $f(x, y) = x^2 y + 3y^2$.", "$H = \\begin{pmatrix} 2y & 2x \\\\ 2x & 6 \\end{pmatrix}$"
    , "Unit 5"),
   ("State the condition on the eigenvalues of the Hessian at a stationary point which ensures that the point is a local minimum.",
    "Both eigenvalues are positive (the Hessian is positive definite).", "Units 7, 8"),
   ("Write the matrix that represents the total derivative $f'(\\mathbf{a})$ of a differentiable map $f : \\mathbb{R}^n \\to \\mathbb{R}^m$, and give its entries.",
    "The Jacobian matrix $f'(\\mathbf{a}) = \\left(\\dfrac{\\partial f_i}{\\partial x_j}(\\mathbf{a})\\right)$, with $m$ rows and $n$ columns.", "Unit 2"),
 ]),
 (2, "Section B (2 marks each)", "Answer all questions.", [
   ("State the second order Taylor theorem for a real-valued function $f$ of $n$ variables.",
    "If $f$ is twice differentiable near $\\boldsymbol{\\xi}$, then for $\\mathbf{x}$ near $\\boldsymbol{\\xi}$, "
    "$f(\\mathbf{x}) = f(\\boldsymbol{\\xi}) + f'(\\boldsymbol{\\xi})(\\mathbf{x} - \\boldsymbol{\\xi}) + \\tfrac{1}{2}(\\mathbf{x} - \\boldsymbol{\\xi})^{T} f''(\\boldsymbol{\\eta})(\\mathbf{x} - \\boldsymbol{\\xi})$ "
    "for some $\\boldsymbol{\\eta}$ on the line segment joining $\\mathbf{x}$ and $\\boldsymbol{\\xi}$.", "Unit 6"),
   ("State the mean value theorem for a differentiable real-valued function $f$ on $\\mathbb{R}^n$.",
    "For $\\mathbf{a}, \\mathbf{b}$ with the segment between them in the domain, there is $\\boldsymbol{\\xi}$ on the segment with "
    "$f(\\mathbf{b}) - f(\\mathbf{a}) = f'(\\boldsymbol{\\xi})(\\mathbf{b} - \\mathbf{a})$.", "Unit 6"),
 ]),
 (4, "Section C (4 marks each)", "Answer all questions.", [
   ("Let $f(x, y) = x^3 - 3xy + y^2$. Find all second order partial derivatives of $f$, and write the Hessian matrix at $(1, 1)$. "
    "State whether the Hessian is symmetric and give the reason.",
    "$f_x = 3x^2 - 3y$, $f_y = -3x + 2y$; $f_{xx} = 6x$, $f_{xy} = f_{yx} = -3$, $f_{yy} = 2$. At $(1, 1)$: "
    "$H = \\begin{pmatrix} 6 & -3 \\\\ -3 & 2 \\end{pmatrix}$. It is symmetric because $f_{xy} = f_{yx}$ (equality of mixed partials, since $f$ has continuous second order partials).", "Unit 5"),
   ("Let $f(x, y) = x^2 + xy + y^2 - 3x$. Find the stationary point of $f$, the eigenvalues of the Hessian there, and classify the stationary point.",
    "$f_x = 2x + y - 3 = 0$ and $f_y = x + 2y = 0$ give $(x, y) = (2, -1)$. The Hessian is $\\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$, "
    "with characteristic equation $(2 - \\lambda)^2 - 1 = 0$, so $\\lambda = 1$ and $\\lambda = 3$. Both are positive, so $(2, -1)$ is a local minimum with value $f(2, -1) = -3$.", "Units 7, 8"),
 ]),
 (10, "Section D (10 marks)", "Answer the question.", [
   ("Find all stationary points of $f(x, y) = x^3 - 3x + 3y^2$, and classify each one using the Hessian matrix and its eigenvalues.",
    "$f_x = 3x^2 - 3 = 0$ gives $x = \\pm 1$; $f_y = 6y = 0$ gives $y = 0$. The stationary points are $(1, 0)$ and $(-1, 0)$. "
    "The Hessian is $\\begin{pmatrix} 6x & 0 \\\\ 0 & 6 \\end{pmatrix}$. "
    "At $(1, 0)$: $H = \\operatorname{diag}(6, 6)$, eigenvalues $6, 6$, both positive; a local minimum with value $f(1, 0) = -2$. "
    "At $(-1, 0)$: $H = \\operatorname{diag}(-6, 6)$, eigenvalues $-6$ and $6$ of opposite sign; a saddle point with value $f(-1, 0) = 2$.", "Units 4, 8"),
 ]),
]

MAPPING = [
 ("1", "Unit 5 (Hessian matrix)", "19.31 (second derivatives), printed p. 219"),
 ("2", "Units 7, 8 (eigenvalue test)", "19.37–19.40, printed pp. 223–227"),
 ("3", "Unit 2 (total derivative, Jacobian matrix)", "19.12–19.19, printed pp. 199–210"),
 ("4", "Unit 6 (second order Taylor)", "19.36, printed p. 222"),
 ("5", "Unit 6 (mean value theorem)", "19.35, printed p. 221"),
 ("6", "Unit 5 (Hessian matrix); Schwarz's theorem", "19.31, printed p. 219; symmetry of mixed partials"),
 ("7", "Units 7, 8 (eigenvalues and classification)", "19.37–19.40, printed pp. 223–227"),
 ("8", "Units 4, 8 (stationary points, classification)", "19.27–19.30, printed pp. 217–218; 19.40, printed p. 227"),
]

def build():
    head = open(os.path.join(HERE, "pyq-head-aa.html"), encoding="utf-8").read()
    out = [head, "<body>", '<div class="sheet">',
           '<div class="title">',
           '<div class="tl exam">FYUGP B.Sc. MATHEMATICS HONOURS</div>',
           '<div class="tl sch">CONVEX OPTIMIZATION (MAT5EJ303 (2))</div>',
           '<div class="tl course">Semester V &middot; Elective (Specialisation: Data Science)</div>',
           '<div class="tl subject">MODULE 1: REVIEW OF MULTIVARIABLE CALCULUS</div>',
           '<div class="tl course">Model questions on topics the past papers miss</div>',
           '</div>']
    n = 0
    for mk, title, _lead, qs in SECTIONS:
        out.append(f'<div class="sec"><div class="sec-title">{SEC_TITLES[mk]}</div>')
        for q, _, _ in qs:
            n += 1
            out.append(f'<div class="topic">{TOPICS[n-1]}</div>')
            out.append(f'<div class="q"><span class="n">{n}</span><div><p>{q} <span class="mk">({mk} mark{"s" if mk > 1 else ""})</span></p></div></div>')
        out.append('</div>')
    out.append('</div>')
    # key and mapping on the last sheet
    out.append('<div class="sheet key">')
    out.append('<div class="title"><div class="tl exam">Key and mapping: Module I model paper</div></div>')
    n = 0
    for mk, title, _lead, qs in SECTIONS:
        out.append(f'<div class="sec"><div class="sec-title">{SEC_TITLES[mk]}</div>')
        for q, ans, unit in qs:
            n += 1
            out.append(f'<p class="key"><b>{n}. ({unit}).</b> {ans}</p>')
        out.append('</div>')
    out.append('<div class="sec"><div class="sec-title">Mapping to the syllabus and Binmore (2nd ed.)</div>')
    out.append('<table class="tbl" style="width:100%;border-collapse:collapse" border="1" cellpadding="4">'
               '<tr><th>Question</th><th>Syllabus unit</th><th>Binmore section, printed pages</th></tr>')
    for r in MAPPING:
        out.append(f'<tr><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td></tr>')
    out.append('</table>')
    out.append('<p class="key">Coverage: the Module I PYQ does not reach units 2 (total derivative), 5, 6, 7 and the classification part of 8. Questions 1 to 8 are drafted for those gaps; they are not taken from past papers.</p>')
    out.append('</div></div>\n</body>\n</html>\n')
    open(OUT, "w", encoding="utf-8").write("\n".join(out))
    print(OUT, "| questions:", n, "| marks:", 1*3 + 2*2 + 4*2 + 10*1)

if __name__ == "__main__":
    build()
