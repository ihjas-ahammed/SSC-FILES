"""Build the combined Module 3 study and structured PDFs (sections 4 cycles, 8 alternating groups, 10 cosets).
Usage: python3 build_module3.py combined   (writes two HTML files next to the bodies; render with ../../../pyq/render.py)
The CSS is copied unchanged from build_module1.py so the two modules print alike.
"""
import os, sys
HERE = os.path.dirname(os.path.abspath(__file__))
CSS = """
@page { size: A4; margin: 15mm 15mm; }
:root { --ink:#1B2631; --muted:#5D6D7E; --rule:#AEB6BF; --eq:#1F618D; --res:#117A65; --recall:#8A6D1A; --idb:#A04000; }
body { margin:0; color:var(--ink); font-family:"Times New Roman", Times, "Liberation Serif", serif; font-size:11pt; line-height:1.42; }
main { width:100%; }
h1 { font-size:17pt; margin:0 0 3px; color:var(--eq); }
.meta { color:var(--muted); font-size:9.5pt; margin-bottom:8px; border-bottom:1px solid var(--rule); padding-bottom:5px; }
.sec-body { column-count:2; column-gap:16px; column-rule:0.5px solid var(--rule); }
h2 { font-size:12.5pt; margin:12px 0 4px; color:var(--eq); border-bottom:1.5px solid var(--eq); padding-bottom:1px; break-after:avoid; column-span:none; }
h3 { font-size:10.8pt; margin:8px 0 2px; color:var(--res); break-after:avoid; }
p, li { margin:3px 0; }
ul, ol { margin:3px 0 3px 18px; padding:0; }
.eq { margin:5px 0; text-align:center; break-inside:avoid; font-size:10.5pt; }
.box-eq { background:#EAF2F8; border-left:3px solid var(--eq); padding:4px 7px; margin:5px 0; break-inside:avoid; }
.box-res { background:#E9F7EF; border-left:3px solid var(--res); padding:4px 7px; margin:5px 0; break-inside:avoid; }
.box-recall { background:#FDF6E3; border-left:3px solid var(--recall); padding:4px 7px; margin:6px 0; break-inside:avoid; font-size:10.2pt; }
.lbl { font-weight:bold; font-size:9.6pt; text-transform:uppercase; letter-spacing:.3px; }
.lbl.eq { color:var(--eq); } .lbl.res { color:var(--res); }
.box-recall .lbl { color:var(--recall); }
table.tbl { border-collapse:collapse; margin:5px auto; font-size:10pt; break-inside:avoid; }
table.tbl td, table.tbl th { border:1px solid var(--rule); padding:2px 7px; text-align:center; }
table.tbl caption { font-size:9.5pt; color:var(--muted); caption-side:top; margin-bottom:2px; }
.note { font-size:9.5pt; color:var(--muted); }
.sec-title-full { column-span:all; font-size:14pt; font-weight:bold; color:var(--eq); border-bottom:2px solid var(--eq); margin:14px 0 6px; break-after:avoid; }
.sec-sub { column-span:all; font-size:10pt; color:var(--muted); font-style:italic; margin:0 0 4px; }
"""

PARTS = {
    'study': [
        ('section4-cycles-study.body.html', 'Section 4: Permutations and Disjoint Cycles (4.8&ndash;4.15)', 'Printed pp. 43&ndash;46 (4.8&ndash;4.15; Table 4.15)'),
        ('section8-alternating-study.body.html', 'Section 8: Even and Odd Permutations, Alternating Groups (8.19&ndash;8.25)', 'Printed pp. 82&ndash;84 (8.19&ndash;8.25; Figures 8.20, 8.21)'),
        ('section10-cosets-study.body.html', 'Section 10: Cosets and the Theorem of Lagrange (10.1&ndash;10.20)', 'Printed pp. 97&ndash;104 (10.1&ndash;10.20; Tables 10.14, 10.15; Example 10.16)'),
    ],
    'structured': [
        ('section4-cycles-structured.body.html', 'Section 4: Permutations and Disjoint Cycles (4.8&ndash;4.15)', 'Printed pp. 43&ndash;46 (4.8&ndash;4.15; Table 4.15)'),
        ('section8-alternating-structured.body.html', 'Section 8: Even and Odd Permutations, Alternating Groups (8.19&ndash;8.25)', 'Printed pp. 82&ndash;84 (8.19&ndash;8.25; Figures 8.20, 8.21)'),
        ('section10-cosets-structured.body.html', 'Section 10: Cosets and the Theorem of Lagrange (10.1&ndash;10.20)', 'Printed pp. 97&ndash;104 (10.1&ndash;10.20; Tables 10.14, 10.15; Example 10.16)'),
    ],
}
META = {
    'study': ('Study notes: Abstract Algebra I, Module 3', 'abstract-algebra-1-module-3-study',
              'Student notes in my own words. Every definition, theorem, example, table and figure is kept with its book number. '
              'Exercises: the book&rsquo;s exercise sets are not in these notes; the exercises the text names (Section 4 Exercise 34; Section 8 Exercises 42 and 52; Section 10 Exercise 40) are printed directly after the item that names them. '
              'Figures are described with their labels; they are not redrawn. Items 4.1&ndash;4.7 and 4.16 onward, Section 9 and Section 11 are not in this module.'),
    'structured': ('Structured notes: Abstract Algebra I, Module 3', 'abstract-algebra-1-module-3-structured',
                   'Formal version of the same content, with numbered results and the same order of items. '
                   'Exercises: only the exercises the text names are reproduced, each directly after the item that names it. '
                   'Figures are described with their labels; not redrawn. Items 4.1&ndash;4.7 and 4.16 onward, Section 9 and Section 11 are not in this module.'),
}
BOOK = ("Fraleigh, <i>A First Course in Abstract Algebra</i> (8th ed.), Module 3 (sections 4.8&ndash;4.15, 8.19&ndash;8.25, 10.1&ndash;10.20). "
        "The syllabus names the 7th edition; items are matched by content. Numbers are the book&rsquo;s own. ")

def build(kind):
    title, out_name, note = META[kind]
    chunks = []
    for f, head, sub in PARTS[kind]:
        body = open(os.path.join(HERE, f), encoding='utf-8').read()
        chunks.append(f'<div class="sec-title-full">{head}</div><div class="sec-sub">{sub}</div>\n{body}')
    body = "\n".join(chunks)
    html = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>{title}</title>
<script>
window.MathJax = {{ tex: {{ inlineMath: [['$', '$'], ['\\\\(', '\\\\)']] }}, svg: {{ fontCache: 'global' }} }};
</script>
<script async src="https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-svg.js"></script>
<style>{CSS}
.keep {{ break-inside: avoid; }}
</style>
</head>
<body>
<main>
<h1>{title}</h1>
<div class="meta">{BOOK}{note}</div>
<div class="sec-body">
{body}
</div>
</main>
</body>
</html>
"""
    path = os.path.join(HERE, out_name + '.html')
    open(path, 'w', encoding='utf-8').write(html)
    return path

if __name__ == '__main__':
    if len(sys.argv) > 1 and sys.argv[1] == 'combined':
        print(build('study'))
        print(build('structured'))
    else:
        print('usage: python3 build_module2.py combined')
