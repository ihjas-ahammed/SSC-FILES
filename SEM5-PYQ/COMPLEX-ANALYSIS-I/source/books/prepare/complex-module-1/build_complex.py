"""Build the two-column study PDF source for Complex Analysis I, Module 1, section 1.1.
Usage: python3 build_complex.py   (writes complex-numbers-study.html; render with ../../../pyq/render.py)
Layout follows the Abstract Algebra Module 1 build (same CSS, same two-column body).
"""
import os
HERE = os.path.dirname(os.path.abspath(__file__))
CSS = open(os.path.join(HERE, 'layout.css'), encoding='utf-8').read()
TITLE = 'Study notes: Complex Analysis I, Module 1, section 1.1'
META = ('Zill and Shanahan, <i>Complex Analysis: A First Course with Applications</i> (3rd ed.), Section 1.1, printed pp. 3&ndash;9. '
        'Numbers are the book&rsquo;s own. No figures in this section. '
        'Exercises 1.1 are not included, except Problem 55, which Remark (i) names. '
        'Student notes in my own words; every definition, example and displayed equation is kept with its book number.')

def build():
    body = open(os.path.join(HERE, 'complex-numbers-study.body.html'), encoding='utf-8').read()
    html = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>{TITLE}</title>
<script>
window.MathJax = {{ tex: {{ inlineMath: [['$', '$'], ['\\\\(', '\\\\)']] }}, svg: {{ fontCache: 'global' }} }};
</script>
<script async src="https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-svg.js"></script>
<style>{CSS}</style>
</head>
<body>
<main>
<h1>{TITLE}</h1>
<div class="meta">{META}</div>
<div class="sec-body">
{body}
</div>
</main>
</body>
</html>
"""
    path = os.path.join(HERE, 'complex-numbers-study.html')
    open(path, 'w', encoding='utf-8').write(html)
    return path

if __name__ == '__main__':
    print(build())
