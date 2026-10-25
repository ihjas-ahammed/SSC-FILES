import re,sys
src,dst=sys.argv[1],sys.argv[2]
lines=open(src,encoding='utf-8').read().split('\n')
out=[];i=0
hdr=re.compile(r'^@@ -(\d+)(?:,\d+)? \+(\d+)(?:,\d+)? @@(.*)$')
while i<len(lines):
    m=hdr.match(lines[i])
    if not m: out.append(lines[i]); i+=1; continue
    so,sn,tail=m.group(1),m.group(2),m.group(3)
    i+=1; body=[]
    while i<len(lines) and not lines[i].startswith('@@') and not lines[i].startswith('--- ') :
        body.append(lines[i]); i+=1
    while body and body[-1]=='': body.pop()
    o=sum(1 for l in body if l[:1] in (' ','-') or l=='')
    n=sum(1 for l in body if l[:1] in (' ','+') or l=='')
    out.append(f'@@ -{so},{o} +{sn},{n} @@{tail}'); out.extend(body)
open(dst,'w',encoding='utf-8').write('\n'.join(out)+'\n')
print('hunks', sum(1 for l in out if l.startswith('@@')))
