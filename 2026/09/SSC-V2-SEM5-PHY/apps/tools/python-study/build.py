#!/usr/bin/env python3
"""Build PYTHON_1234.html and PYTHON_1234_OFFLINE.html. Same shell and study engine as the LaTeX app;
the LaTeX compiler is replaced by the Pyodide bridge in src/pyengine.js and src/worker.js."""
import io, os, json

HERE = os.path.dirname(os.path.abspath(__file__))
SRC, VEN = os.path.join(HERE, 'src'), os.path.join(HERE, 'vendor')
OUT = os.path.abspath(os.path.join(HERE, '..', '..'))
rd = lambda p: io.open(p, encoding='utf-8').read()
js = lambda s: s.replace('</script', '<\\/script')
GF = ('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600'
      '&family=Newsreader:ital,opsz,wght@0,6..72,400..600;1,6..72,400..600'
      '&family=Source+Sans+3:ital,wght@0,400..700;1,400..700&display=swap')

CONTENT = ['data.head.js', 'data.start.js', 'data.m1.js', 'data.m2.js', 'data.m3.js', 'data.m4.js', 'data.mv.js', 'data.tail.js', 'data.quiz.js']

def build(offline):
    html = rd(os.path.join(SRC, 'shell.html'))
    fonts = (f'<style>{rd(os.path.join(VEN, "uifonts.css"))}</style>' if offline else
             f'<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="stylesheet" href="{GF}">')
    files = {}
    edir = os.path.join(VEN, 'examples')
    if os.path.isdir(edir):
        for n in sorted(os.listdir(edir)):
            files[n] = io.open(os.path.join(edir, n), encoding='utf-8').read()
    scripts = [
        f'<script>window.PY_FILES={json.dumps(files)};</script>',
        f'<script>window.PY_WORKER_SRC={json.dumps(rd(os.path.join(SRC, "worker.js")))};'
        f'window.LX_PREVIEW={{fonts:"",base:"",article:"",book:""}};</script>',
        '<script>' + js(rd(os.path.join(SRC, 'pyengine.js'))) + '</script>',
    ]
    scripts.append('<script>' + '\n'.join(js(rd(os.path.join(SRC, f))) for f in CONTENT) + '</script>')
    scripts.append('<script>' + js(rd(os.path.join(SRC, 'ui.js'))) + '</script>')
    foot = 'Python runs in your browser (Pyodide). Built with the study engine.'
    html = (html.replace('<!--LX:FONTS-->', fonts)
                .replace('<!--LX:SCRIPTS-->', '\n'.join(scripts))
                .replace('<!--LX:FOOT-->', foot))
    name = 'PYTHON_1234_OFFLINE.html' if offline else 'PYTHON_1234.html'
    io.open(os.path.join(OUT, name), 'w', encoding='utf-8').write(html)
    print(f'built {name}: {len(html.encode()):,} bytes')

if __name__ == '__main__':
    build(False)
    build(True)
