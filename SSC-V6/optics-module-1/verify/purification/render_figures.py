"""Render authored scientific geometry for visual QA without browser access.

This is an audit renderer, not a substitute for checking the interactive player.
It follows the declarative primitive coordinate system used by 02-diagram.js.
"""
import html,json,math,subprocess
from pathlib import Path
from PIL import Image,ImageDraw
ROOT=Path(__file__).resolve().parents[2]
OUT=ROOT/'verify/purification/rendered';OUT.mkdir(exist_ok=True)
d=json.loads((ROOT/'study-match/data/data.json').read_text())
def render(diag,path,dark=False):
 ink='#e9e4ff' if dark else '#242151';violet='#b7a1ff' if dark else '#6652c5';soft='#393057' if dark else '#e1d8f5';bg='#191629' if dark else '#ffffff'
 def attrs(o):
  role=o.get('role','lk');fill=soft if 's' in role.split() else violet if 'f' in role.split() else 'none'
  color=ink if 'ik' in role.split() or 'gk' in role.split() else violet
  return f'fill="{fill}" stroke="{color}" stroke-width="{o.get("width",1.8)}"'+(' stroke-dasharray="4 3"' if o.get('dash') or 'gk' in role.split() else '')
 parts=[f'<svg xmlns="http://www.w3.org/2000/svg" width="520" height="360" viewBox="0 0 260 180"><rect width="260" height="180" fill="{bg}"/><defs><marker id="arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0L8 4L0 8Z" fill="{violet}"/></marker></defs>']
 objects=[o for st in diag['steps'] for o in st.get('objects',st.get('add',[]))]
 # JSXGraph puts filled regions behind construction strokes and text; preserve
 # that layer order instead of allowing a late triangle to cover its labels.
 objects.sort(key=lambda o: 0 if o['type']=='polygon' or (o['type']=='curve' and o.get('closed')) else 3 if o['type'] in ['label','text'] else 2 if o['type']=='point' else 1)
 points={o.get('id'):o.get('coords') for o in objects if o.get('type')=='point'}
 def xy(p):
  if isinstance(p,str):p=points[p]
  return p[0],180-p[1]
 def fmt(p):a,b=xy(p);return f'{a},{b}'
 for o in objects:
  typ=o['type'];a=attrs(o)
  if typ in ['label','text']:
   x,y=xy(o.get('coords',[o.get('x',0),o.get('y',0)]));anchor={'center':'middle','right':'end'}.get(o.get('align'),'start')
   parts.append(f'<text x="{x}" y="{y}" dominant-baseline="middle" text-anchor="{anchor}" fill="{ink}" font-family="DejaVu Sans" font-size="{o.get("size",11)}">{html.escape(o.get("text",""))}</text>')
  elif typ=='point':
   x,y=xy(o['coords']);parts.append(f'<circle cx="{x}" cy="{y}" r="2.2" fill="{violet}"/>')
  elif typ in ['line','segment','arrow']:
   x,y=xy(o['p1']);u,v=xy(o['p2']);parts.append(f'<path d="M{x},{y}L{u},{v}" {a}'+(' marker-end="url(#arrow)"' if typ=='arrow' else '')+'/>')
  elif typ in ['polyline','polygon']:
   tag='polygon' if typ=='polygon' or o.get('closed') else 'polyline';parts.append(f'<{tag} points="'+ ' '.join(fmt(p) for p in o['points'])+f'" {a}/>')
  elif typ=='curve':
   pts=o['points'];p='M'+fmt(pts[0])
   if o.get('smooth') is False:p+='L'+' '.join(fmt(q) for q in pts[1:])
   elif len(pts)==3:p+='Q'+fmt(pts[1])+' '+fmt(pts[2])
   elif len(pts)==4:p+='C'+' '.join(fmt(q) for q in pts[1:])
   elif len(pts)==5:p+='Q'+fmt(pts[1])+' '+fmt(pts[2])+'Q'+fmt(pts[3])+' '+fmt(pts[4])
   else:p+='L'+' '.join(fmt(q) for q in pts[1:])
   if o.get('closed'):p+='Z'
   parts.append(f'<path d="{p}" {a}/>')
  elif typ in ['circle','ellipse']:
   x,y=xy(o['center']);rx=o.get('rx',o.get('r',10));ry=o.get('ry',o.get('r',10));parts.append(f'<ellipse cx="{x}" cy="{y}" rx="{rx}" ry="{ry}" {a}/>')
  elif typ in ['arc','angle']:
   if typ=='angle':
    cen=o['vertex'];p=o['p1'];q=o['p2'];start=math.degrees(math.atan2(p[1]-cen[1],p[0]-cen[0]));end=math.degrees(math.atan2(q[1]-cen[1],q[0]-cen[0]));
    while end<start:end+=360
   else:cen=o['center'];start=o.get('start',0);end=o.get('end',90)
   r=o.get('r',20);pts=[[cen[0]+r*math.cos(math.radians(start+(end-start)*j/50)),cen[1]+r*math.sin(math.radians(start+(end-start)*j/50))] for j in range(51)]
   parts.append(f'<polyline points="'+ ' '.join(fmt(p) for p in pts)+f'" {a}/>')
  else:raise ValueError(typ)
 parts.append('</svg>');path.write_text(''.join(parts))
 subprocess.run(['rsvg-convert','-o',str(path.with_suffix('.png')),str(path)],check=True)

rows=[];seen=set()
for sec in d['sections'][:8]:
 for sh in sec['sheets']:
  for i,c in enumerate(sh['cards']):
   diag=c.get('setup') if c['type']=='derivation' else c.get('art') if c.get('verifiedDiagram') else None
   if not isinstance(diag,dict):continue
   signature=json.dumps(diag,sort_keys=True)
   if signature in seen:continue
   seen.add(signature);ident=len(rows)+1
   path=OUT/f'{ident:02}.svg';render(diag,path);render(diag,OUT/f'{ident:02}-dark.svg',True)
   rows.append({'figure':ident,'sheet':sh['id'],'card_index':i,'title':c['title']})
for start in range(0,len(rows),12):
 canvas=Image.new('RGB',(1440,1050),'#eeeeee');draw=ImageDraw.Draw(canvas)
 for j,row in enumerate(rows[start:start+12]):
  im=Image.open(OUT/f'{row["figure"]:02}.png');im.thumbnail((350,265));x=(j%4)*360;y=(j//4)*350
  canvas.paste(im,(x+(360-im.width)//2,y+46));draw.text((x+6,y+5),f'{row["figure"]:02}: '+row['title'][:44],fill='black');draw.text((x+6,y+22),row['sheet'][:47],fill='black')
 canvas.save(OUT/f'gallery-{start//12+1}.png')
(OUT/'index.json').write_text(json.dumps(rows,indent=2)+'\n')
print(f'Rendered {len(rows)} unique scientific diagrams in both themes.')
