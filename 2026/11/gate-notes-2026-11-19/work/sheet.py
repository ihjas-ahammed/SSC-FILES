import sys,subprocess,glob,os
from PIL import Image
pdf,out,cols=sys.argv[1],sys.argv[2],int(sys.argv[3]); first=int(sys.argv[4]) if len(sys.argv)>4 else 1; last=int(sys.argv[5]) if len(sys.argv)>5 else first+cols-1
d='/tmp/claude-1000/sheet'; os.makedirs(d,exist_ok=True)
for f in glob.glob(d+'/p-*'): os.remove(f)
subprocess.run(['pdftoppm','-r','70','-f',str(first),'-l',str(last),'-png',pdf,d+'/p'],check=True)
ims=[Image.open(f) for f in sorted(glob.glob(d+'/p-*.png'))]
w=sum(i.width for i in ims); h=max(i.height for i in ims); m=Image.new('RGB',(w,h),'white'); x=0
for i in ims: m.paste(i,(x,0)); x+=i.width
m.save(out)
