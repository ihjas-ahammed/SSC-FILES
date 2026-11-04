"""Build the two-column study and structured PDFs for Module 1, section 1 (binary operations).
Usage: python3 build_module1.py  (writes HTML next to the bodies; render with ../../../pyq/render.py)
"""
import os, re
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
def build(body_file, out_name, title, kind):
    body = open(os.path.join(HERE, body_file), encoding='utf-8').read()
    meta = ("Fraleigh, <i>A First Course in Abstract Algebra</i> (8th ed.), Section 1, printed pp. 11&ndash;16. "
            "Numbers are the book&rsquo;s own. Tables only, no figures in this section. "
            "Exercises (printed pp. 17&ndash;19) are not included in the notes. " + kind)
    html = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>{title}</title>
<script>
window.MathJax = {{ tex: {{ inlineMath: [['$', '$'], ['\\\\(', '\\\\)']] }}, svg: {{ fontCache: 'global' }} }};
</script>
<script async src="https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-svg.js"></script>
<style>{CSS}</style>
</head>
<body>
<main>
<h1>{title}</h1>
<div class="meta">{meta}</div>
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

def build_combined(kind):
    """Module 1 combined file: section 1 and section 2 bodies, in order, one PDF per version."""
    if kind == 'study':
        parts = [('binary-operations-study.body.html', 'Section 1: Binary operations', 'Fraleigh 8th ed., printed pp. 11&ndash;16 (1.1&ndash;1.30)'),
                 ('groups-study.body.html', 'Section 2: Groups', 'Fraleigh 8th ed., printed pp. 19&ndash;28 (2.1&ndash;2.25)')]
        title = 'Study notes: Abstract Algebra I, Module 1'
        out_name = 'abstract-algebra-1-module-1-study'
        kind_txt = 'Student notes in my own words; every definition, theorem, example and table is kept with its book number.'
    else:
        parts = [('binary-operations-structured.body.html', 'Section 1: Binary operations', 'Fraleigh 8th ed., printed pp. 11&ndash;16 (1.1&ndash;1.30)'),
                 ('groups-structured.body.html', 'Section 2: Groups', 'Fraleigh 8th ed., printed pp. 19&ndash;28 (2.1&ndash;2.25)')]
        title = 'Structured notes: Abstract Algebra I, Module 1'
        out_name = 'abstract-algebra-1-module-1-structured'
        kind_txt = 'Formal version of the same content, with numbered results.'
    chunks = []
    for f, head, sub in parts:
        body = open(os.path.join(HERE, f), encoding='utf-8').read()
        chunks.append(f'<div class="sec-title-full">{head}</div><div class="sec-sub">{sub}</div>\n{body}')
    body = "\n".join(chunks)
    # reuse the single-section template
    global_body = body
    html_path = _write(global_body, out_name, title, "Fraleigh, <i>A First Course in Abstract Algebra</i> (8th ed.), Module 1 (sections 1 and 2). Numbers are the book&rsquo;s own. Tables only, no figures. Exercises (printed pp. 17&ndash;19 and 28&ndash;31) are not included. " + kind_txt)
    return html_path

def _write(body, out_name, title, meta):
    html = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>{title}</title>
<script>
window.MathJax = {{ tex: {{ inlineMath: [['$', '$'], ['\\\\(', '\\\\)']] }}, svg: {{ fontCache: 'global' }} }};
</script>
<script async src="https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-svg.js"></script>
<style>{CSS}</style>
</head>
<body>
<main>
<h1>{title}</h1>
<div class="meta">{meta}</div>
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
    import sys
    if len(sys.argv) > 1 and sys.argv[1] == 'combined':
        print(build_combined('study'))
        print(build_combined('structured'))
    else:
        print(build('binary-operations-study.body.html', 'binary-operations-study',
                    'Study notes: binary operations (Module 1, section 1)',
                    'Student notes in my own words; every definition, theorem and example is kept with its book number.'))
        print(build('binary-operations-structured.body.html', 'binary-operations-structured',
                    'Structured notes: binary operations (Module 1, section 1)',
                    'Formal version of the same content.'))
