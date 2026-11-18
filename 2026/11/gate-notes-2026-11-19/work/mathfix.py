import sys,re,pathlib
p=pathlib.Path(sys.argv[1]); h=p.read_text()
# bare U+20B9 in math mode crashes MathJax: use \unicode{x20B9} there; keep it raw inside \text{...}
def fix(m):
    s=m.group(0); out=[]; i=0; stack=[]  # stack of brace kinds: True=text group
    while i<len(s):
        c=s[i]
        mt=re.match(r'\\(text|mbox|textbf|textit|mathrm|hbox)\s*\{',s[i:])
        if mt: out.append(mt.group(0)); i+=len(mt.group(0)); stack.append(True); continue
        if c=='\\' and i+1<len(s): out.append(s[i:i+2]); i+=2; continue
        if c=='{': stack.append(False)
        elif c=='}' and stack: stack.pop()
        if c=='₹': out.append('₹' if any(stack) else '\\unicode{x20B9}{}')
        else: out.append(c)
        i+=1
    return ''.join(out)
body_i=h.lower().find('<body'); head,body=h[:body_i],h[body_i:]
parts=re.split(r'(<script\b.*?</script>|<style\b.*?</style>)',body,flags=re.S|re.I)
for i in range(0,len(parts),2):
    t=parts[i]
    for pat in (r'\$\$.+?\$\$', r'\\\[.+?\\\]', r'\\\(.+?\\\)', r'(?<![\\$])\$(?!\s)[^$\n]+?(?<!\s)\$'):
        t=re.sub(pat,fix,t,flags=re.S)
    parts[i]=t
p.write_text(head+''.join(parts)); print(p.name,'done')
