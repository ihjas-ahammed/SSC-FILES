"""Check every rendered formula and SVG against a phone-width content box via Chrome CDP."""
import json,time,urllib.request,websocket
from pathlib import Path
ROOT=Path(__file__).resolve().parent
pages=json.load(urllib.request.urlopen('http://localhost:9337/json'))
ws=websocket.create_connection(pages[0]['webSocketDebuggerUrl'],origin='http://localhost:9337')
n=0
def call(method,params={}):
 global n
 n+=1;ws.send(json.dumps({'id':n,'method':method,'params':params}))
 while True:
  v=json.loads(ws.recv())
  if v.get('id')==n:return v
call('Page.enable');call('Runtime.enable')
call('Emulation.setDeviceMetricsOverride',{'width':333,'height':1000,'deviceScaleFactor':1,'mobile':False})
report=[]
for p in sorted((ROOT/'build').glob('*.html')):
 if '.raw.' in p.name:continue
 call('Page.navigate',{'url':p.as_uri()})
 for attempt in range(100):
  state=call('Runtime.evaluate',{'expression':'JSON.stringify({url:location.href,ready:document.readyState,count:document.querySelectorAll(".katex").length})','returnByValue':True})
  status=json.loads(state['result']['result'].get('value','{}'))
  if status.get('url')==p.as_uri() and status.get('ready')=='complete' and status.get('count',0)>0:break
  time.sleep(.1)
 else:raise RuntimeError(f'Page not ready: {p}')
 call('Runtime.evaluate',{'expression':'document.fonts.ready','awaitPromise':True})
 script="""JSON.stringify(Array.from(document.querySelectorAll('.katex-html,figure svg')).map(el=>{let r=el.getBoundingClientRect();return {kind:el.tagName, width:r.width,left:r.left,right:r.right,text:el.closest('.katex')?.querySelector('annotation')?.textContent||el.textContent.slice(0,80)}}).filter(x=>x.right>334||x.left<-.5))"""
 r=call('Runtime.evaluate',{'expression':script,'returnByValue':True})
 data=json.loads(r['result']['result']['value']);report.append({'file':p.name,'formula_count':status['count'],'overflow':data})
print(json.dumps(report,indent=2));(ROOT/'research'/'layout_audit.json').write_text(json.dumps(report,indent=2))
ws.close()
