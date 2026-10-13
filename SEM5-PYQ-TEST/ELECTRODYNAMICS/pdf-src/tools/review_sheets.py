"""Render every PDF page into numbered contact sheets using PyMuPDF."""
from pathlib import Path
import fitz
from PIL import Image,ImageDraw
OUT=Path(__file__).resolve().parents[2];dest=OUT/'review';dest.mkdir(exist_ok=True)
for f in sorted(OUT.glob('electrodynamics*.pdf')):
 d=fitz.open(f);short=f.stem.replace('electrodynamics-module-','m')
 for start in range(0,len(d),24):
  ims=Image.new('RGB',(6*174,4*358),'#777');draw=ImageDraw.Draw(ims)
  for j in range(min(24,len(d)-start)):
   page=d[start+j]; pix=page.get_pixmap(matrix=fitz.Matrix(.6,.6),alpha=False)
   im=Image.frombytes('RGB',[pix.width,pix.height],pix.samples)
   x=(j%6)*174;y=(j//6)*358;ims.paste(im,(x,y+15));draw.text((x+3,y),str(start+j+1),fill='white')
  ims.save(dest/f'{short}-{start//24:02d}.png')
print('Contact sheets complete')
