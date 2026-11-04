#!/bin/bash
# usage: sheet.sh <name> <steps> <prefix>
n=$1; k=$2; p=$3; cd "$(dirname "$0")"; rm -f ${p}_*.png
python3 - "$k" "$p" <<'PY'
import json,sys
k=int(sys.argv[1]); p=sys.argv[2]
acts=[{"wait":3500},{"eval":"document.querySelector('.group').click(); 'g'"},{"wait":900},
 {"eval":"document.querySelector('.sheet .cover').click(); 'ok'"},{"wait":1500},
 {"eval":"document.querySelector('.mf-flip-btn').click();'f'"},{"wait":5000,"shot":p+"_mid.png","clip":".mf-back .mf-setup"},{"wait":8000}]
acts+= [{"eval":"document.querySelector('.mf-back .mf-setup')._fig.step(99,true); 'b'"},{"wait":250,"shot":p+"_base.png","clip":".mf-back .mf-setup"}]
for si in range(k):
    acts+=[{"eval":"document.querySelector('.mf-back .mf-setup')._fig.step(%d,true); 's'"%si},{"wait":250,"shot":"%s_%02d.png"%(p,si),"clip":".mf-back .mf-setup"}]
json.dump(acts,open('act-'+p+'.json','w'))
PY
node cdp.mjs "file://$PWD/prev/v3/$n.html" 412 870 act-$p.json 2>&1 | grep -i "error\|exception"
magick montage ${p}_mid.png ${p}_base.png ${p}_[0-9]*.png -tile 6x -geometry +4+4 -background '#888' $p-sheet.png
