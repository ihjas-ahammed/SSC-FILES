import re, pathlib, subprocess
pdfs = ['stage-1.pdf','stage-2.pdf','stage-3.pdf','stage-4.pdf','stage-5.pdf','stage-6-final.pdf']
blocks = {}
for p in pdfs:
    t = subprocess.run(['pdftotext', p, '-'], capture_output=True, text=True).stdout
    ms = list(re.finditer(r'^=== (.+?) ===', t, flags=re.M))
    for i, m in enumerate(ms):
        name = m.group(1)
        if name.startswith('NOTES') or name.startswith('CLOSING'):
            continue
        end = ms[i+1].start() if i+1 < len(ms) else len(t)
        body = t[m.end():end]
        blocks[name] = (p, body)
for name, (p, body) in blocks.items():
    print(f'{name:36s} {p:18s} {len(body):7d}')
import json
json.dump({k: v[1] for k, v in blocks.items()}, open('/tmp/claude-1000/-home-ihjas-Documents-GitHub-SSC-FILES/9503aa27-0d75-493a-87e1-a2ecbdfd3449/scratchpad/m3_blocks.json','w'))
