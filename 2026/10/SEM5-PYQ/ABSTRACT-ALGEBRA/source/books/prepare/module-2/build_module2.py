"""Build the combined Module 2 study and structured PDFs (sections 5, 6 and 8).
Usage: python3 build_module2.py combined   (writes two HTML files next to the bodies; render with ../../../pyq/render.py)
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
        ('section5-subgroups-study.body.html', 'Section 5: Subgroups', 'Printed pp. 52&ndash;56 (5.1&ndash;5.26; Tables 5.8, 5.9; Figures 5.10, 5.27)'),
        ('section6-cyclic-groups-study.body.html', 'Section 6: Cyclic Groups', 'Printed pp. 61&ndash;67 (6.1&ndash;6.21; Figures 6.3, 6.11, 6.12, 6.19)'),
        ('section8-permutations-study.body.html', 'Section 8: Groups of Permutations (8.1&ndash;8.18)', 'Printed pp. 77&ndash;82 (8.1&ndash;8.18; Table 8.9; Historical note)'),
    ],
    'structured': [
        ('section5-subgroups-structured.body.html', 'Section 5: Subgroups', 'Printed pp. 52&ndash;56 (5.1&ndash;5.26; Tables 5.8, 5.9; Figures 5.10, 5.27)'),
        ('section6-cyclic-groups-structured.body.html', 'Section 6: Cyclic Groups', 'Printed pp. 61&ndash;67 (6.1&ndash;6.21; Figures 6.3, 6.11, 6.12, 6.19)'),
        ('section8-permutations-structured.body.html', 'Section 8: Groups of Permutations (8.1&ndash;8.18)', 'Printed pp. 77&ndash;82 (8.1&ndash;8.18; Table 8.9; Historical note)'),
    ],
}
META = {
    'study': ('Study notes: Abstract Algebra I, Module 2', 'abstract-algebra-1-module-2-study',
              'Student notes in my own words. Every definition, theorem, example, table and figure is kept with its book number. '
              'Exercises: the book&rsquo;s exercise sets are not in these notes, except the exercises the text names '
              '(Section 2 Exercise 20; Section 5 Exercises 51 and 57; Section 6 Exercise 54; Section 8 Exercise 54), each printed directly after the item that names it. '
              'Figures are described with their labels; they are not redrawn. Item 8.19 onward (alternating groups) is Module III and is not in these notes.'),
    'structured': ('Structured notes: Abstract Algebra I, Module 2', 'abstract-algebra-1-module-2-structured',
                   'Formal version of the same content, with numbered results and the same order of items. '
                   'Exercises: only the exercises the text names are reproduced, each directly after the item that names it. '
                   'Figures are described with their labels; not redrawn. Item 8.19 onward is Module III and is not in these notes.'),
}
BOOK = ("Fraleigh, <i>A First Course in Abstract Algebra</i> (8th ed.), Module 2 (sections 5, 6 and 8 to 8.18). "
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
