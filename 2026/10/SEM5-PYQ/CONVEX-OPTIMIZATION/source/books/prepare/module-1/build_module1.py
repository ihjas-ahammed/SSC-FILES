"""Build the two-column study and structured PDFs for Module 1 (Convex Optimization), copied from the Abstract Algebra module 1 builder.
Source: Binmore, Mathematical Analysis (2nd ed.), Chapter 19, printed pp. 190-231. Sections are added to SECTIONS as they are written.
Usage: python3 build_module1.py [section]   (writes HTML next to the bodies; render with ../../../pyq/render.py)
"""
import os
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
SECTIONS = {
    1: ("section-1", "Section 1: Directional and partial derivatives", "Binmore 2nd ed., printed pp. 190&ndash;195 (19.1&ndash;19.5)"),
}
META = ("Binmore, <i>Mathematical Analysis: A Straightforward Approach</i> (2nd ed., 1982), Chapter 19, Vector derivatives. "
        "Numbers are the book&rsquo;s own. Figures are described in words, not drawn yet. Exercises are not included in the notes. ")

def page(title, meta, body):
    return f"""<!doctype html>
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

def build(kind, sections):
    """kind: 'study' or 'structured'; sections: list of section numbers, in order."""
    parts = []
    for n in sections:
        name, head, sub = SECTIONS[n]
        body = open(os.path.join(HERE, f"{name}-{kind}.body.html"), encoding="utf-8").read()
        parts.append(f'<div class="sec-title-full">{head}</div><div class="sec-sub">{sub}</div>\n{body}')
    title = ("Study notes" if kind == "study" else "Structured notes") + ": Convex Optimization, Module I"
    out_name = f"convex-optimization-module-1-{kind}"
    kind_txt = ("Student notes in my own words; every numbered item is kept with its book number." if kind == "study"
                else "Formal version of the same content, with numbered results.")
    path = os.path.join(HERE, out_name + ".html")
    open(path, "w", encoding="utf-8").write(page(title, META + kind_txt, "\n".join(parts)))
    return path

if __name__ == "__main__":
    import sys
    secs = [int(s) for s in sys.argv[1:]] or sorted(SECTIONS)
    for kind in ("study", "structured"):
        if all(os.path.exists(os.path.join(HERE, f"{SECTIONS[n][0]}-{kind}.body.html")) for n in secs):
            print(build(kind, secs))
        else:
            print("skipped", kind, "(body missing for a section)")
