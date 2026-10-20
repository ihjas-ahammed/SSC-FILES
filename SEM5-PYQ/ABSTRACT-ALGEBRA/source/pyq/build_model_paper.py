import html
OUT = "/home/ihjas/Documents/GitHub/SSC-FILES/SEM5-PYQ/ABSTRACT-ALGEBRA/source/pyq/model-abstract-algebra-I.html"

A = [  # 3 marks each, ceiling 24
 "Let $\\ast$ be defined on $\\mathbb{Z}^+$ by $a \\ast b = \\min\\{a, b\\}$. Is $\\ast$ a binary operation on $\\mathbb{Z}^+$? Is it commutative? Justify your answer.",
 "Let $\\ast$ be defined on $\\mathbb{Z}$ by $a \\ast b = a - b$. Check whether $\\ast$ is associative.",
 "Show that the identity element of a set with a binary operation, if it exists, is unique.",
 "Give an example of a set with a binary operation which is commutative but not associative.",
 "Show that $\\langle \\mathbb{Q}^+, \\ast \\rangle$ with $a \\ast b = \\dfrac{ab}{3}$ is a group.",
 "Show that $\\langle \\mathbb{Z}, + \\rangle$ is an abelian group. Is $\\langle \\mathbb{Z}^+, + \\rangle$ a group? Justify.",
 "In a group $G$, show that $(a^{-1})^{-1} = a$ for every $a \\in G$.",
 "Write the group table of $\\{1, i, -1, -i\\}$ under multiplication.",
 "Using only the group axioms, show that if $a \\ast b = a \\ast c$ in a group then $b = c$.",
 "Show that $f : \\mathbb{Z} \\to 3\\mathbb{Z}$ given by $f(m) = 3m$ is an isomorphism from $\\langle \\mathbb{Z}, + \\rangle$ onto $\\langle 3\\mathbb{Z}, + \\rangle$.",
]
B = [  # 6 marks each, ceiling 36
 "Let $S = \\mathbb{R} \\setminus \\{-1\\}$ and define $\\ast$ on $S$ by $a \\ast b = a + b + ab$. Show that $\\langle S, \\ast \\rangle$ is a group.",
 "Let $G$ be a group and $a, b \\in G$. Show that $(ab)^{-1} = b^{-1}a^{-1}$.",
 "Show that $\\{1, 2, 3, 4, 5, 6\\}$ under multiplication modulo 7 is a group.",
 "Construct the group table of $\\mathbb{Z}_4$ and verify that each element appears exactly once in each row and each column.",
 "Let $G$ be a group. Prove that $G$ is abelian if and only if $(ab)^2 = a^2 b^2$ for all $a, b \\in G$.",
 "Let $f : G_1 \\to G_2$ be an isomorphism of groups. Prove that $f(e_1) = e_2$, where $e_1$ and $e_2$ are the identities of $G_1$ and $G_2$.",
]
C = [  # 10 marks, answer any ONE
 "Let $\\ast$ be defined on $\\mathbb{R}$ by $a \\ast b = \\sqrt[3]{a^3 + b^3}$. Show that $\\langle \\mathbb{R}, \\ast \\rangle$ is an abelian group.",
 "Let $G$ be a group. Prove that the identity element of $G$ is unique and that every element of $G$ has a unique inverse, using only the group axioms.",
]

def sec(title, lead, qs, start, marks):
    rows = "\n".join(
        f'<tr><td class="qn">{i}</td><td class="qt">{q}</td><td class="qm">{marks}</td></tr>'
        for i, q in enumerate(qs, start))
    return f'''<table class="sec-tbl">
<tr><td colspan="3" class="sec-head"><div class="sec-title">{title}</div></td></tr>
<tr><td colspan="3" class="sec-lead">{lead}</td></tr>
{rows}
</table>'''

body = f'''<div class="page">
<table class="hdr-tbl">
<tr><td class="hdr-cell c-title" colspan="2">FYUGP B.Sc. MATHEMATICS HONOURS</td></tr>
<tr><td class="hdr-cell c-title" colspan="2">FIFTH SEMESTER (CUFYUGP) DEGREE EXAMINATION</td></tr>
<tr><td class="hdr-cell c-sub" colspan="2">MATHEMATICS</td></tr>
<tr><td class="hdr-cell c-course" colspan="2">MAT5CJ302 Abstract Algebra I</td></tr>
<tr><td class="hdr-cell c-sub" colspan="2">Model Question Paper</td></tr>
<tr><td class="hdr-cell c-left">Maximum Time : 2 Hours</td><td class="hdr-cell c-right">Maximum Marks : 70</td></tr>
</table>

{sec("Section A", "All Questions can be answered. Each Question carries 3 marks (Ceiling : 24 Marks)", A, 1, "3")}

<div class="pb"></div>
{sec("Section B", "All Questions can be answered. Each Question carries 6 marks (Ceiling : 36 Marks)", B, 11, "6")}

{sec("Section C", "Answer any ONE. Each Question carries 10 marks (1 &times; 10 = 10 Marks)", C, 17, "10")}
</div>'''

css = '''
@page { size: A4; margin: 14mm 16mm; }
body { margin: 0; font-family: "Times New Roman", Times, "Liberation Serif", serif; font-size: 13px; color: #111; background: #fff; }
.page { width: 100%; }
table { border-collapse: collapse; width: 100%; }
.hdr-tbl { margin-bottom: 14px; }
.hdr-cell { border: 1px solid #222; padding: 8px 10px; text-align: center; font-family: Arial, Helvetica, sans-serif; }
.c-title { font-size: 14px; font-weight: normal; }
.c-sub { font-size: 14px; }
.c-course { font-size: 16px; font-weight: bold; font-family: "Times New Roman", Times, serif; }
.c-left { text-align: left; font-family: Arial, Helvetica, sans-serif; font-size: 13px; width: 50%; }
.c-right { text-align: right; font-family: Arial, Helvetica, sans-serif; font-size: 13px; width: 50%; }
.sec-tbl { margin-bottom: 14px; }
.sec-tbl td { border: 1px solid #222; vertical-align: middle; }
.sec-head { text-align: center; padding: 10px 6px 4px; }
.sec-title { font-size: 16px; font-weight: bold; font-family: "Times New Roman", Times, serif; }
.sec-lead { text-align: center; padding: 4px 6px 12px; font-weight: bold; font-size: 12.5px; }
.qn { width: 6%; text-align: center; padding: 8px 4px; font-family: Arial, Helvetica, sans-serif; font-size: 13px; }
.qt { padding: 8px 10px; line-height: 1.5; font-size: 13.5px; }
.qm { width: 10%; text-align: center; padding: 8px 4px; font-size: 12px; color: #333; }
.pb { page-break-before: always; height: 0; }
@media print { .sec-tbl { page-break-inside: auto; } tr { page-break-inside: avoid; } }
'''

head = f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>MAT5CJ302 Abstract Algebra I, Model Question Paper</title>
<script>
window.MathJax = {{
  tex: {{ inlineMath: [['$', '$'], ['\\\\(', '\\\\)']] }},
  svg: {{ fontCache: 'global' }}
}};
</script>
<script async src="https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-svg.js"></script>
<style>
{css}
</style>
</head>
<body>
{body}
</body>
</html>
'''
open(OUT, "w", encoding="utf-8").write(head)
print("written", OUT, "| A", len(A), "B", len(B), "C", len(C), "| marks", 3*len(A), "(ceiling 24)", 6*len(B), "(ceiling 36)", 10*1, "(one of", len(C), ")")
