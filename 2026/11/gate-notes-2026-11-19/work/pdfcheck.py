import sys,subprocess,glob,os,shutil
from PIL import Image
bad=0
for pdf in sys.argv[1:]:
    d='/tmp/claude-1000/pc'; shutil.rmtree(d,ignore_errors=True); os.makedirs(d)
    subprocess.run(['pdftoppm','-r','72','-png',pdf,d+'/p'],check=True)
    fs=sorted(glob.glob(d+'/p-*.png')); issues=[]
    for k,f in enumerate(fs,1):
        im=Image.open(f).convert('L'); W,H=im.size; m=int(W*11/210); dark=lambda box:sum(1 for p in im.crop(box).getdata() if p<200)  # 9mm strip (content starts at 12mm)
        th=int(H*10/297); L=dark((0,0,m,H)); R=dark((W-m,0,W,H)); T=dark((0,0,W,th)); B=dark((0,H-th,W,H))
        if L+R+T+B>0: issues.append((k,int(L),int(R),int(T),int(B)))
    print(os.path.basename(pdf),len(fs),'pages', 'OK' if not issues else 'MARGIN INK '+str(issues[:6])); bad+=bool(issues)
print('files with issues:',bad)
