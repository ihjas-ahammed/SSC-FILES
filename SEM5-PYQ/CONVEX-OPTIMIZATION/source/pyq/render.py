"""Render a notes HTML to PDF with headless Chrome, then apply the checks in process.md section 14.
Usage: python3 render.py <file.html> [--no-check]
"""
import os, re, subprocess, sys, tempfile
import pypdf
CHROME = '/opt/google/chrome/chrome'
src = os.path.abspath(sys.argv[1]); pdf = os.path.splitext(src)[0] + '.pdf'
subprocess.run([CHROME, '--headless', '--no-sandbox', '--disable-gpu', '--no-pdf-header-footer',
                '--virtual-time-budget=25000', f'--print-to-pdf={pdf}', f'file://{src}'],
               stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, timeout=300)
# 1. drop pages with no text and no image
r = pypdf.PdfReader(pdf); w = pypdf.PdfWriter(); dropped = []
for i, p in enumerate(r.pages, 1):
    txt = (p.extract_text() or '').strip()
    res = p.get('/Resources') or {}
    xo = res.get('/XObject') if res else None
    if txt or (xo and len(xo.get_object()) > 0): w.add_page(p)
    else: dropped.append(i)
w.add_metadata({'/Title': os.path.basename(pdf)[:-4]})
w.compress_identical_objects() if hasattr(w, 'compress_identical_objects') else None
with open(pdf, 'wb') as fh: w.write(fh)
print(f'{os.path.basename(pdf)}: pages {len(w.pages)}, blank pages dropped {dropped}, size {os.path.getsize(pdf)//1024} KB')
if '--no-check' in sys.argv: sys.exit(0)
# 2. gutter check (words that cross the column gutter, except full-width headings)
with tempfile.NamedTemporaryFile(suffix='.html', delete=False) as tf: tmp = tf.name
subprocess.run(['pdftotext', '-bbox', pdf, tmp], check=True)
t = open(tmp, encoding='utf-8').read()
for i, p in enumerate(t.split('<page ')[1:], 1):
    W = float(re.search(r'width="([\d.]+)"', p).group(1))
    words = re.findall(r'xMin="([\d.]+)" yMin="([\d.]+)" xMax="([\d.]+)" yMax="([\d.]+)">([^<]*)<', p)
    cross = [x[4] for x in words if float(x[0]) < W/2 - 3 and float(x[2]) > W/2 + 3 and float(x[1]) > 60]
    if cross: print('  CHECK page', i, 'words crossing the gutter:', cross[:6])
os.unlink(tmp)
# 3. MathJax error boxes
out = subprocess.run([CHROME, '--headless', '--no-sandbox', '--disable-gpu', '--virtual-time-budget=20000',
                      '--dump-dom', f'file://{src}'], stdout=subprocess.PIPE, stderr=subprocess.DEVNULL, timeout=300).stdout.decode('utf-8', 'replace')
print('  MathJax error boxes:', len(re.findall(r'data-mjx-error|class="mjx-merror"', out)))
