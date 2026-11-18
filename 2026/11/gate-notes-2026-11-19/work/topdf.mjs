// node topdf.mjs in.html out.pdf ncol(1|2)  -> prints JSON {pages, residualOverflow, fixed}
import fs from 'fs'; import {spawn} from 'child_process'; import path from 'path';
const [,, inp, out, ncol='1'] = process.argv; const N=+ncol;
const port = 9600 + Math.floor(Math.random()*300);
const prof = fs.mkdtempSync('/tmp/claude-1000/pdfprof-');
const ch = spawn('google-chrome-stable',['--headless=new','--no-sandbox','--disable-gpu',`--remote-debugging-port=${port}`,`--user-data-dir=${prof}`,'about:blank'],{stdio:'ignore'});
let v; for(let i=0;i<50;i++){ try{ v=await (await fetch(`http://localhost:${port}/json/version`)).json(); break;}catch{ await new Promise(r=>setTimeout(r,200)); } }
const ws=new WebSocket(v.webSocketDebuggerUrl); await new Promise(r=>ws.onopen=r);
let id=0; const pend={};
ws.onmessage=e=>{const m=JSON.parse(e.data); if(m.id&&pend[m.id]) pend[m.id](m)};
const send=(method,params={},sessionId)=>new Promise(r=>{const i=++id;pend[i]=r;ws.send(JSON.stringify({id:i,method,params,sessionId}))});
const {result:{targetId}}=await send('Target.createTarget',{url:'about:blank'});
const {result:{sessionId:s}}=await send('Target.attachToTarget',{targetId,flatten:true});
const ev=async(expr)=>{const r=await send('Runtime.evaluate',{expression:expr,awaitPromise:true,returnByValue:true},s); if(r.result.exceptionDetails) throw new Error(JSON.stringify(r.result.exceptionDetails).slice(0,300)); return r.result.result.value;};
await send('Page.enable',{},s);
// A4 content width: 210mm - 2*12mm = 186mm = 703px
const W=703;
await send('Emulation.setDeviceMetricsOverride',{width:W,height:1000,deviceScaleFactor:1,mobile:false},s);
await send('Emulation.setEmulatedMedia',{media:'print'},s);
// render copy: MathJax 4 with automatic line breaking so long equations wrap instead of shrinking
let srcHtml=fs.readFileSync(inp,'utf8');
srcHtml=srcHtml.replace(/<script\b[^>]*MathJax-script[^>]*><\/script>|<script\b[^>]*mathjax[^>]*><\/script>/ig,'');
srcHtml=srcHtml.replace(/window\.MathJax\s*=\s*\{/,'window.MathJax = { chtml:{displayOverflow:"linebreak", linebreaks:{inline:true}}, ');
srcHtml=srcHtml.replace('</head>','<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@4.0.0/tex-mml-chtml.js"></script></head>');
const tmpHtml=path.join(path.dirname(path.resolve(inp)),'.render-'+process.pid+'.html'); fs.writeFileSync(tmpHtml,srcHtml);
process.on('exit',()=>{try{fs.unlinkSync(tmpHtml)}catch{}});
await send('Page.navigate',{url:'file://'+tmpHtml},s);
await new Promise(r=>setTimeout(r,1500));
for(let i=0;i<60;i++){ if(await ev('document.readyState')==='complete') break; await new Promise(r=>setTimeout(r,500)); }
await ev(`(async()=>{ for(let i=0;i<80;i++){ if(window.MathJax&&MathJax.startup&&MathJax.startup.promise){ await MathJax.startup.promise; if(MathJax.typesetPromise) await MathJax.typesetPromise(); return 1;} await new Promise(r=>setTimeout(r,500)); } return 0; })()`);
if(process.argv[5]==='dbg'){
  const r=await ev(`(()=>{const o=[];const W=document.documentElement.clientWidth;document.querySelectorAll('body *').forEach(e=>{const r=e.getBoundingClientRect(); if(r.right>W+2&&!e.closest('mjx-container')&&!e.closest('svg')){const c=getComputedStyle(e);o.push(e.tagName+'.'+e.className+' w'+Math.round(r.width)+' r'+Math.round(r.right)+' disp:'+c.display+' minw:'+c.minWidth+' ws:'+c.whiteSpace+' ov:'+c.overflowX)}});return o.slice(0,12)})()`);
  console.log(JSON.stringify(r,null,1)); try{fs.rmSync(prof,{recursive:true,force:true})}catch{} ch.kill(); process.exit(0);
}
if(process.argv[5]==='mjtex'){
  const r=await ev(`(()=>{const o=[];for(const m of MathJax.startup.document.math){ if(m.typesetRoot&&m.typesetRoot.querySelector('[data-mjx-error]')) o.push(m.math)}; return [...new Set(o)].slice(0,25)})()`);
  console.log(JSON.stringify(r)); ws.close(); ch.kill(); try{fs.rmSync(prof,{recursive:true,force:true,maxRetries:3})}catch{}; process.exit(0);
}
if(process.argv[5]==='mjerr'){
  const r=await ev(`(()=>{const o=[];document.querySelectorAll('mjx-container').forEach(c=>{const e=c.querySelector('[data-mjx-error]'); if(e) o.push(e.getAttribute('data-mjx-error')+' ⟸ '+(c.getAttribute('aria-label')||'')+' @'+(c.parentElement.innerText||'').slice(0,60).replace(/\\n/g,' '))}); return {n:o.length,total:document.querySelectorAll('mjx-container').length,s:o.slice(0,12)}})()`);
  console.log(JSON.stringify(r)); ws.close(); ch.kill(); try{fs.rmSync(prof,{recursive:true,force:true,maxRetries:3})}catch{}; process.exit(0);
}
if(process.argv[5]==='svgonly'){
  const r=await ev(`(()=>{const out=[];document.querySelectorAll('svg').forEach((s,i)=>{ if(s.closest('svg')!==s||s.parentElement.closest('svg')) return; const vb=s.viewBox&&s.viewBox.baseVal; if(!vb||!vb.width) return; let b; try{b=s.getBBox()}catch(e){return}
    // text bboxes are approximate; include padding
    const pad=6; let x0=Math.min(vb.x,b.x-pad), y0=Math.min(vb.y,b.y-pad), x1=Math.max(vb.x+vb.width,b.x+b.width+pad), y1=Math.max(vb.y+vb.height,b.y+b.height+pad);
    if(x0<vb.x-0.5||y0<vb.y-0.5||x1>vb.x+vb.width+0.5||y1>vb.y+vb.height+0.5){ out.push({i, old:[vb.x,vb.y,vb.width,vb.height].map(n=>+n.toFixed(1)), nw:[x0,y0,x1-x0,y1-y0].map(n=>+n.toFixed(1))}); }
  }); return out})()`);
  console.log(JSON.stringify(r)); ws.close(); ch.kill(); try{fs.rmSync(prof,{recursive:true,force:true,maxRetries:3})}catch{}; process.exit(0);
}
const fs0 = N===1 ? '10.5pt' : '8.6pt';
const css = `
@page{size:A4;margin:12mm}
html,body{background:#fff!important;margin:0!important;padding:0!important;width:auto!important;max-width:none!important}
body{font-size:${fs0}!important;line-height:1.5!important;-webkit-print-color-adjust:exact;print-color-adjust:exact;overflow:visible!important}
body *{max-width:100%;box-sizing:border-box;overflow-wrap:anywhere;word-break:normal}
body *:not(svg):not(svg *):not(mjx-container *){position:static}
header,.hero,.cover,.title-block{column-span:all}
${N===2?'body{column-count:2;column-gap:7mm;column-rule:1px solid #d5dbe3}':''}
img,svg,video,canvas{max-width:100%!important;height:auto}
svg{break-inside:avoid}
table{width:100%!important;table-layout:auto;border-collapse:collapse;font-size:.92em}
td,th{overflow-wrap:anywhere}
div,section,article,main,aside,p,li,ul,ol,td,th,figure,header,blockquote,h1,h2,h3,h4,h5{min-width:0!important}
mjx-container[display=true]{display:block!important;max-width:100%!important;overflow:visible!important;margin:.5em 0!important}

pre{white-space:pre-wrap!important;overflow:visible!important}
figure,table,pre,blockquote,tr{break-inside:avoid}
h1,h2,h3,h4{break-after:avoid}
nav,.toc-sticky,.no-print{position:static!important}
*{animation:none!important;transition:none!important}
`;
await ev(`(()=>{const st=document.createElement('style');st.id='pdfcss';st.textContent=${JSON.stringify(css)};document.head.appendChild(st);return 1})()`);
await new Promise(r=>setTimeout(r,800));
// fit pass: shrink anything wider than its column
const fit = `(()=>{
 const colW = ${N===1?W:Math.floor((W-26)/2)};
 let fixed=0;
 // display math: shrink once to the width of its own block
 document.querySelectorAll('mjx-container[display=true]').forEach(e=>{
   const pe=e.parentElement, ps=getComputedStyle(pe); const cw=Math.min(e.clientWidth||1e9, pe.clientWidth-parseFloat(ps.paddingLeft)-parseFloat(ps.paddingRight)), sw=e.scrollWidth; const m=e.querySelector('mjx-math')||e.firstElementChild; if(!m) return;
   let mw=m.getBoundingClientRect().width; let mx=0; m.querySelectorAll('*').forEach(c=>{const r=c.getBoundingClientRect(); mx=Math.max(mx,r.right)}); mw=Math.max(mw, mx-m.getBoundingClientRect().left, m.scrollWidth);
   if(mw>cw+1){ m.style.zoom=((cw-2)/mw).toFixed(3); fixed++; }
 });
 // inline math wider than a column
 document.querySelectorAll('mjx-container:not([display=true])').forEach(e=>{
   const b=e.closest('p,li,td,th,div,h1,h2,h3,h4,h5,figcaption,span')||e.parentElement; const bs=getComputedStyle(b); const cwid=b.clientWidth-parseFloat(bs.paddingLeft)-parseFloat(bs.paddingRight);
   let w=e.getBoundingClientRect().width; e.querySelectorAll('*').forEach(c=>{w=Math.max(w,c.getBoundingClientRect().right-e.getBoundingClientRect().left)});
   if(cwid>20 && w>cwid-2){ e.style.zoom=((cwid-4)/w).toFixed(3); fixed++; }
 });
 // figures, tables, code, images: shrink once
 document.querySelectorAll('svg,table,pre,img').forEach(e=>{
   if(e.closest('mjx-container')||e.parentElement.closest('svg')) return;
   const p=e.parentElement; const avail=p.clientWidth||colW; const w=Math.max(e.scrollWidth,e.getBoundingClientRect().width);
   if(w>avail+1){ e.style.zoom=((avail-2)/w).toFixed(3); fixed++; }
 });
 // scroll containers become plain blocks in print
 document.querySelectorAll('body *').forEach(e=>{ if(e.closest('mjx-container,svg')) return; const c=getComputedStyle(e); if(/(auto|scroll)/.test(c.overflowX+c.overflowY)){ e.style.overflow='visible'; e.style.maxHeight='none'; e.style.maxWidth='100%'; } });
 // second pass: any math still past its column edge gets zoomed to fit
 for(let k=0;k<3;k++) document.querySelectorAll('mjx-container').forEach(e=>{
   const r=e.getBoundingClientRect(); const root0=document.documentElement.getBoundingClientRect().left; const left=r.left-root0;
   let mr=r.right; e.querySelectorAll('*').forEach(c=>{mr=Math.max(mr,c.getBoundingClientRect().right)});
   const limit=${N===1?'colW':'(left<colW+13?colW:colW*2+26)'};
   if(mr-root0>limit+1){ const w=mr-r.left; const z=(limit-left-1)/w; e.style.zoom=((parseFloat(e.style.zoom)||1)*z).toFixed(3); fixed++; }
 });
 // measure: anything past the right edge of its column
 const gap=26, colRight=(x)=>${N===1?'colW':'(x<colW+gap/2?colW:colW*2+gap)'};
 const resid=[]; const root=document.documentElement.getBoundingClientRect().left;
 document.querySelectorAll('body *').forEach(e=>{
   if(e.closest('header,.hero,.cover,.title-block')||getComputedStyle(e).columnSpan==='all'||(e.parentElement&&getComputedStyle(e.parentElement).columnSpan==='all')||e.children.length&&!e.tagName.startsWith('MJX')&&e.tagName!=='SVG'&&e.tagName!=='TABLE')return; if(e.closest('mjx-assistive-mml')||e.tagName==='MJX-EXT'||e.closest('mjx-stretchy-v,mjx-stretchy-h')||e.closest('script,style')) return;
   const r=e.getBoundingClientRect(); if(!r.width||!r.height) return; const cs=getComputedStyle(e); if(cs.display==='none'||cs.visibility==='hidden') return;
   const left=r.left-root, right=r.right-root;
   if(right>colRight(left)+3 && !(e.tagName.startsWith('MJX')&&e.closest('mjx-container[display=true]')&&false)) resid.push(e.tagName+'.'+String(e.className).slice(0,24)+' r'+Math.round(right)+'>'+Math.round(colRight(left)));
 });
 return {fixed, nres:resid.length, resid:resid.slice(0,8)};
})()`;
const rep = await ev(fit);
if(process.env.DBGCHAIN){ console.log(JSON.stringify(await ev(`(()=>{const W=document.documentElement.clientWidth;const bad=[...document.querySelectorAll('mjx-container')].find(e=>e.getBoundingClientRect().right>${W}+2); if(!bad) return 'none'; const o=[];let e=bad;while(e&&e!==document.documentElement){const c=getComputedStyle(e);o.push(e.tagName+'.'+String(e.className).slice(0,20)+' w'+Math.round(e.getBoundingClientRect().width)+' '+c.display+' pos:'+c.position+' ml:'+c.marginLeft+' flex:'+c.flex+' tx:'+c.transform.slice(0,20)+' wd:'+c.width);e=e.parentElement}return o})()`),null,1)); }
const pdf = await send('Page.printToPDF',{printBackground:true,preferCSSPageSize:true,displayHeaderFooter:false},s);
fs.writeFileSync(out, Buffer.from(pdf.result.data,'base64'));
console.log(JSON.stringify(rep));
ws.close(); ch.kill(); try{fs.rmSync(prof,{recursive:true,force:true,maxRetries:3})}catch{}; process.exit(0);
