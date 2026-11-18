import sys,json,re,pathlib
p=pathlib.Path(sys.argv[1]); fixes=json.loads(sys.argv[2]); h=p.read_text()
tags=list(re.finditer(r'<svg\b[^>]*>',h,re.I))
# index i counts every svg in DOM order (including nested); patch top-level only: map by order of all svg tags
for f in sorted(fixes,key=lambda f:-f['i']):
    if f['i']>=len(tags): continue
    m=tags[f['i']]; tag=m.group(0)
    new=re.sub(r'viewBox="[^"]*"','viewBox="%s"'%' '.join(str(n) for n in f['nw']),tag,count=1)
    h=h[:m.start()]+new+h[m.end():]
p.write_text(h); print(p.name,len(fixes),'svg fixed')
