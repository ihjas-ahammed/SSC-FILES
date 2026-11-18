import sys,re,pathlib
raw=pathlib.Path(sys.argv[1]).read_text()
m=re.search(r'```html\s*\n(.*)\n```\s*$',raw.strip(),re.S) or re.search(r'```html\s*\n(.*?)\n```',raw,re.S)
h=m.group(1) if m else raw
i=h.lower().find('<!doctype'); h=h[i:] if i>=0 else h
pathlib.Path(sys.argv[2]).write_text(h.strip()+"\n")
