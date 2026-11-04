/* ══════════════════════════════════════════════════════════════════
   Interactive benches for Convex Optimization (framework from The Lattice Bench)
   (SOLID_STATE.html). Framework and the five sims are unchanged apart from the
   palette, which now reads the SSP colour tokens.
   ══════════════════════════════════════════════════════════════════ */
(function(){
"use strict";
const $=(s,r)=>(r||document).querySelector(s), $$=(s,r)=>Array.from((r||document).querySelectorAll(s));
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const RM = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
/* ═══════════════════ SIM FRAMEWORK ═══════════════════ */
const SIMS={}, RIGS=[];
let looping=false;
let NARROW=false, FS=1;
const P={screenRGB:[10,12,18]};
function hex2rgb(h){ h=(h||'').trim().replace('#',''); if(h.length===3) h=h.split('').map(x=>x+x).join('');
  const n=parseInt(h,16); return isNaN(n)?[10,12,18]:[(n>>16)&255,(n>>8)&255,n&255]; }
function readPalette(){
  /* SSP palette: copper (pos) for the old yellow, teal (neg) for green, indigo (prob) for violet and blue, crimson (wall) for red */
  const cs=getComputedStyle(document.documentElement), g=k=>cs.getPropertyValue(k).trim();
  P.ink=g('--ink'); P.dim=g('--dim'); P.faint=g('--faint');
  P.rule=g('--rule'); P.stage=g('--plot-bg')||g('--bench'); P.panel=g('--panel');
  P.screen=P.stage;
  P.inkRGB=g('--ink-rgb'); P.redRGB=g('--wall-rgb');
  P.yellowRGB=g('--pos-rgb'); P.greenRGB=g('--neg-rgb');
  P.violetRGB=g('--prob-rgb'); P.blueRGB=g('--prob-rgb');
  P.dark=g('--is-dark')==='1';
  P.screenRGB=hex2rgb(P.screen); P.stageRGB=hex2rgb(P.stage);
}
const _rgba=(t,a)=>(a===undefined||a==='')?'rgb('+t+')':'rgba('+t+','+a+')';
const C={
  ink:a=>_rgba(P.inkRGB,a), red:a=>_rgba(P.redRGB,a), yellow:a=>_rgba(P.yellowRGB,a),
  green:a=>_rgba(P.greenRGB,a), violet:a=>_rgba(P.violetRGB,a), blue:a=>_rgba(P.blueRGB,a),
  rule:a=>a===undefined?P.rule:_rgba(P.inkRGB,a),
  dim:()=>P.dim, faint:()=>P.faint, stage:()=>P.stage, panel:()=>P.panel, screen:()=>P.screen
};
function syncInput(inp){
  const o=inp.parentElement.querySelector('output');
  if(o){ const v=fmtCtl(inp.dataset.k,inp.value); if(o._v!==v){ o._v=v; o.innerHTML=v; if(window.__mjReady&&window.MathJax&&MathJax.typesetPromise) MathJax.typesetPromise([o]).catch(()=>{}); } }
  const mn=parseFloat(inp.min), mx=parseFloat(inp.max);
  const f=(mx>mn)?(parseFloat(inp.value)-mn)/(mx-mn):0;
  inp.style.setProperty('--p', (isFinite(f)?f:0).toFixed(4));
}
function initSims(root){
  readPalette();
  $$('.simwrap',root).forEach(fig=>{
    if(fig._rig) return;
    const name=fig.dataset.sim, fn=SIMS[name]; if(!fn) return;
    const cv=$('canvas',fig), ctx=cv.getContext('2d');
    const s={}, inputs={};
    const rig={fig,cv,ctx,s,fn,name,W:0,H:0};
    const out=(k,v)=>{ const el=fig.querySelector('[data-out="'+k+'"]'); if(!el||el._v===v) return;   // maths typeset by MathJax
      el._v=v; el.innerHTML=v; if(window.__mjReady&&window.MathJax&&MathJax.typesetPromise) MathJax.typesetPromise([el]).catch(()=>{}); };
    const setV=(k,v)=>{
      const inp=inputs[k];
      if(!inp){ s[k]=v; draw(rig); return; }
      const mn=parseFloat(inp.min), mx=parseFloat(inp.max), st=parseFloat(inp.step)||0.01;
      v=clamp(v,mn,mx); v=parseFloat((Math.round(v/st)*st).toFixed(6));
      inp.value=v; s[k]=parseFloat(inp.value); syncInput(inp); draw(rig);
    };
    const api={out, set:setV, redraw:()=>draw(rig), fig};
    rig.api=api;
    $$('input[data-k]',fig).forEach(inp=>{
      inputs[inp.dataset.k]=inp;
      s[inp.dataset.k]=parseFloat(inp.value);
      syncInput(inp);
      inp.addEventListener('input',()=>{ s[inp.dataset.k]=parseFloat(inp.value); syncInput(inp); draw(rig); });
    });
    $$('[data-seg]',fig).forEach(seg=>{
      const key=seg.dataset.seg;
      const on=$('[aria-pressed="true"]',seg);
      s[key]= on? on.dataset.v : ($('button',seg)||{dataset:{}}).dataset.v;
      seg.addEventListener('click',e=>{
        const b=e.target.closest('button'); if(!b)return;
        $$('button',seg).forEach(x=>x.setAttribute('aria-pressed',String(x===b)));
        s[key]=b.dataset.v;
        if(fn.onseg) fn.onseg(s,key,b.dataset.v,api);
        draw(rig);
      });
    });
    const drag=fn.drag;
    if(drag){
      cv.classList.add('grab');
      const hd=$('header',fig);
      if(hd){ const h=document.createElement('span'); h.className='draghint'; h.textContent='drag ⇄'; hd.appendChild(h); }
    }
    const apply=(ev,dragging)=>{
      const r=cv.getBoundingClientRect();
      s._px=ev.clientX-r.left; s._py=ev.clientY-r.top;
      if(drag&&dragging){ const u=clamp(s._px/r.width,0,1); setV(drag.k, drag.min+(drag.max-drag.min)*u); }
      else draw(rig);
    };
    cv.addEventListener('pointerdown',ev=>{ s._down=true;
      try{cv.setPointerCapture(ev.pointerId);}catch(e){} apply(ev,true); });
    cv.addEventListener('pointermove',ev=>{
      if(s._down) apply(ev,true); else if(ev.pointerType==='mouse') apply(ev,false); });
    cv.addEventListener('pointerup',()=>{ s._down=false; });
    cv.addEventListener('pointercancel',()=>{ s._down=false; });
    cv.addEventListener('pointerleave',()=>{ if(!s._down){ s._px=undefined; draw(rig); } });
    if(fn.init) fn.init(s,api);
    RIGS.push(rig); fig._rig=rig;
    new ResizeObserver(()=>size(rig)).observe(fig);
    size(rig);
  });
  if(!looping&&RIGS.some(r=>r.fn.anim)&&!RM){ looping=true; requestAnimationFrame(loop); }
}
/* a number in scientific form, typeset: 1.50 × 10¹⁶ */
function sci(x){ const [m,e]=x.toExponential(2).split('e'); return '$'+m+'\\times 10^{'+(+e)+'}$'; }
function fmtCtl(k,v){
  const n=parseFloat(v);
  if(k==='lam') return '$'+n+'$ nm';
  if(k==='th') return '$'+n+'^\\circ$';
  return '$'+((Math.abs(n)>=100||Number.isInteger(n))?String(n):n.toFixed(2))+'$';
}
function size(rig){
  const w=rig.fig.clientWidth||320;
  const nw=w<560;
  const arv=(nw&&rig.fn.arN)?rig.fn.arN:(rig.fn.ar||0.58);
  const h=Math.round(clamp(w*arv, nw?250:220, nw?620:430));
  const dpr=Math.min(window.devicePixelRatio||1,2);
  rig.cv.width=Math.round(w*dpr); rig.cv.height=Math.round(h*dpr);
  rig.cv.style.height=h+'px';
  rig.ctx.setTransform(dpr,0,0,dpr,0,0);
  rig.W=w; rig.H=h; draw(rig);
}
function draw(rig,t){
  const {ctx,W,H}=rig; if(!W)return;
  NARROW=W<560; FS=NARROW?1.16:1;
  ctx.save(); ctx.clearRect(0,0,W,H);
  ctx.fillStyle=C.stage(); ctx.fillRect(0,0,W,H);
  try{ rig.fn(ctx,W,H,rig.s,rig.api,t||0); }catch(e){ ctx.fillStyle=C.red(); ctx.font='12px monospace'; ctx.fillText('sim error: '+e.message,10,20); }
  ctx.restore();
}
function drawAll(){ RIGS.forEach(r=>{ if(r.fig.offsetParent!==null) draw(r); }); }
if(window.MJT)MJT.onRedraw(drawAll);
function loop(ts){
  RIGS.forEach(r=>{ if(r.fn.anim && r.fig.offsetParent!==null) draw(r,ts/1000); });
  requestAnimationFrame(loop);
}
/* small drawing helpers */
function line(c,x1,y1,x2,y2,col,w,dash){ c.save(); c.beginPath(); if(dash)c.setLineDash(dash); c.strokeStyle=col||C.rule(); c.lineWidth=w||1; c.moveTo(x1,y1); c.lineTo(x2,y2); c.stroke(); c.restore(); }
function txt(c,s,x,y,col,size,align,font){   // $…$ parts are typeset by MathJax (mjtext.js)
  MJT.draw(c,s,x,y,{color:col||C.dim(),size:(size||11)*FS,align:align||'left',base:'middle',font:font||'"Fira Mono",ui-monospace,monospace'}); }
function arrow(c,x1,y1,x2,y2,col,w){
  line(c,x1,y1,x2,y2,col,w||1.4);
  const a=Math.atan2(y2-y1,x2-x1), L=6;
  c.save(); c.fillStyle=col; c.beginPath(); c.moveTo(x2,y2);
  c.lineTo(x2-L*Math.cos(a-0.4),y2-L*Math.sin(a-0.4));
  c.lineTo(x2-L*Math.cos(a+0.4),y2-L*Math.sin(a+0.4)); c.closePath(); c.fill(); c.restore();
}

/* ── shared helpers ── */
const TAU=Math.PI*2;
function axis(c,x0,x1,y,lab){ line(c,x0,y,x1,y,C.rule(),1); if(lab) txt(c,lab,x1-2,y-9,C.faint(),9,'right'); }
function frame(c,x,y,w,h){ c.strokeStyle=C.rule(); c.strokeRect(x+.5,y+.5,w-1,h-1); }
/* 3-D projection: rotate about the vertical axis, then tilt */
function proj(x,y,z,rot,S,ox,oy){
  const t=rot*Math.PI/180, f=26*Math.PI/180;
  const X=(x-.5)*Math.cos(t)+(z-.5)*Math.sin(t);
  const Z=-(x-.5)*Math.sin(t)+(z-.5)*Math.cos(t);
  const Y=(y-.5)*Math.cos(f)-Z*Math.sin(f);
  const D=(y-.5)*Math.sin(f)+Z*Math.cos(f);
  return [ox+X*S, oy-Y*S, D];
}
function hull(pts){
  const p=pts.slice().sort((a,b)=>a[0]-b[0]||a[1]-b[1]);
  const cross=(o,a,b)=>(a[0]-o[0])*(b[1]-o[1])-(a[1]-o[1])*(b[0]-o[0]);
  const lo=[],up=[];
  for(const q of p){ while(lo.length>1&&cross(lo[lo.length-2],lo[lo.length-1],q)<=0)lo.pop(); lo.push(q); }
  for(let i=p.length-1;i>=0;i--){ const q=p[i];
    while(up.length>1&&cross(up[up.length-2],up[up.length-1],q)<=0)up.pop(); up.push(q); }
  lo.pop(); up.pop(); return lo.concat(up);
}
