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

/* plot frame shared by the sims: world box → pixels, isotropic when asked */
function frameXY(W,H,x0,x1,y0,y1,iso,pad){
  pad=pad||{l:30,r:12,t:12,b:24};
  let pw=W-pad.l-pad.r,ph=H-pad.t-pad.b;
  if(iso){const ap=pw/ph;let w=x1-x0,h=y1-y0;
    if(w/h<ap){const nw=h*ap,c=(x0+x1)/2;x0=c-nw/2;x1=c+nw/2;}else{const nh=w/ap,c=(y0+y1)/2;y0=c-nh/2;y1=c+nh/2;}}
  const X=x=>pad.l+(x-x0)/(x1-x0)*pw, Y=y=>pad.t+(y1-y)/(y1-y0)*ph;
  return {X,Y,x0,x1,y0,y1,pad,pw,ph};
}
function fieldHeat(c,F,f,scale,N){N=N||56;const dx=(F.x1-F.x0)/N,dy=(F.y1-F.y0)/N;
  for(let i=0;i<N;i++)for(let j=0;j<N;j++){const v=f(F.x0+(i+.5)*dx,F.y0+(j+.5)*dy);const a=Math.min(.36,Math.abs(v)/scale*.36);
    c.fillStyle=v>=0?C.yellow(a):C.violet(a);
    c.fillRect(F.X(F.x0+i*dx),F.Y(F.y0+(j+1)*dy),F.X(F.x0+(i+1)*dx)-F.X(F.x0+i*dx)+.6,F.Y(F.y0+j*dy)-F.Y(F.y0+(j+1)*dy)+.6);}}
function fieldContour(c,F,f,levels,colf,N){N=N||70;const dx=(F.x1-F.x0)/N,dy=(F.y1-F.y0)/N,G=[];
  for(let i=0;i<=N;i++){G.push([]);for(let j=0;j<=N;j++)G[i].push(f(F.x0+i*dx,F.y0+j*dy));}
  levels.forEach(L=>{c.save();c.strokeStyle=colf(L);c.lineWidth=1.2;c.beginPath();
    for(let i=0;i<N;i++)for(let j=0;j<N;j++){const v=[G[i][j]-L,G[i+1][j]-L,G[i+1][j+1]-L,G[i][j+1]-L],p=[[i,j],[i+1,j],[i+1,j+1],[i,j+1]],h=[];
      for(let e=0;e<4;e++){const a=v[e],b=v[(e+1)%4];if((a<0)!==(b<0)){const t=a/(a-b),q0=p[e],q1=p[(e+1)%4];
        h.push([F.X(F.x0+(q0[0]+t*(q1[0]-q0[0]))*dx),F.Y(F.y0+(q0[1]+t*(q1[1]-q0[1]))*dy)]);}}
      for(let k=0;k+1<h.length;k+=2){c.moveTo(h[k][0],h[k][1]);c.lineTo(h[k+1][0],h[k+1][1]);}}
    c.stroke();c.restore();});}
const f2=x=>(Math.abs(x)<5e-3?0:x).toFixed(2);

/* ═══════════════════ M1: classify a stationary point from the Hessian ═══════════════════ */
SIMS.qform=function(c,W,H,s,api){
  const a=s.a,b=s.b,d=s.d;
  const tr=a+d,det=a*d-b*b,disc=Math.sqrt(Math.max(0,(a-d)*(a-d)/4+b*b));
  const l1=tr/2-disc,l2=tr/2+disc;
  const F=frameXY(W,H,-2,2,-2,2,true,{l:10,r:10,t:10,b:10});
  const q=(x,y)=>.5*(a*x*x+2*b*x*y+d*y*y);
  fieldHeat(c,F,q,3);
  fieldContour(c,F,q,[-4,-2.5,-1.4,-.7,-.25,.25,.7,1.4,2.5,4],L=>L>0?C.yellow(.9):C.violet(.9));
  line(c,F.X(-2),F.Y(0),F.X(2),F.Y(0),C.rule(),1);line(c,F.X(0),F.Y(-2),F.X(0),F.Y(2),C.rule(),1);
  // eigenvectors
  let v1=Math.abs(b)>1e-9?[l1-d,b]:(a<=d?[1,0]:[0,1]);const n=Math.hypot(v1[0],v1[1])||1;v1=[v1[0]/n,v1[1]/n];
  line(c,F.X(-1.9*v1[0]),F.Y(-1.9*v1[1]),F.X(1.9*v1[0]),F.Y(1.9*v1[1]),C.ink(.45),1.2,[4,3]);
  line(c,F.X(1.9*v1[1]),F.Y(-1.9*v1[0]),F.X(-1.9*v1[1]),F.Y(1.9*v1[0]),C.ink(.45),1.2,[4,3]);
  c.fillStyle=C.ink();c.beginPath();c.arc(F.X(0),F.Y(0),4,0,TAU);c.fill();
  txt(c,'$\\mathbf u^1$',F.X(1.75*v1[0])+4,F.Y(1.75*v1[1]),C.dim(),10);
  let v='';
  if(Math.abs(det)<1e-3)v='$\\det f\'\'=0$: test fails';
  else if(det>0&&a>0)v='positive definite: local minimum';
  else if(det>0&&a<0)v='negative definite: local maximum';
  else v='$\\det f\'\'\\lt 0$: saddle point';
  api.out('l','$\\lambda_1 = '+f2(l1)+',\\ \\lambda_2 = '+f2(l2)+'$');
  api.out('det','$'+f2(det)+'$');api.out('f11','$'+f2(a)+'$');api.out('v',v);
};
SIMS.qform.ar=0.78; SIMS.qform.arN=1.0; SIMS.qform.drag={k:'b',min:-3,max:3};

/* ═══════════════════ M3: an LP in the plane — the optimum sits at a vertex ═══════════════════ */
SIMS.lp=function(c,W,H,s,api){
  const th=s.th*Math.PI/180,cv=[Math.cos(th),Math.sin(th)];
  const F=frameXY(W,H,-.5,6.5,-.5,5.5,true,{l:26,r:10,t:10,b:22});
  // x1 ≥ 0, x2 ≥ 0, x1 + x2 ≤ 5, x1 + 3x2 ≤ 12, 2x1 + x2 ≤ 8 ... vertices of the feasible polygon
  const V=[[0,0],[4,0],[3,2],[1.5,3.5],[0,4]];
  const lab=['(0,0)','(4,0)','(3,2)','(1.5,3.5)','(0,4)'];
  c.save();c.beginPath();V.forEach((p,i)=>{i?c.lineTo(F.X(p[0]),F.Y(p[1])):c.moveTo(F.X(p[0]),F.Y(p[1]));});c.closePath();
  c.fillStyle=C.green(.16);c.fill();c.strokeStyle=C.green();c.lineWidth=2;c.stroke();c.restore();
  line(c,F.X(-.5),F.Y(0),F.X(6.5),F.Y(0),C.rule(),1);line(c,F.X(0),F.Y(-.5),F.X(0),F.Y(5.5),C.rule(),1);
  txt(c,'$x_1$',F.X(6.4),F.Y(0)+11,C.faint(),10,'right');txt(c,'$x_2$',F.X(0)+6,F.Y(5.3),C.faint(),10);
  let k=0,best=1e9,tie=false;V.forEach((p,i)=>{const v=cv[0]*p[0]+cv[1]*p[1];if(v<best-1e-9){best=v;k=i;tie=false;}else if(Math.abs(v-best)<1e-9)tie=true;});
  // level lines c^T x = best + t
  [0,1.5,3,4.5].forEach((t,j)=>{const L=best+t;const P=[];
    if(Math.abs(cv[1])>1e-6){P.push([-.5,(L-cv[0]*-.5)/cv[1]],[6.5,(L-cv[0]*6.5)/cv[1]]);}else P.push([L/cv[0],-.5],[L/cv[0],5.5]);
    line(c,F.X(P[0][0]),F.Y(P[0][1]),F.X(P[1][0]),F.Y(P[1][1]),j?C.ink(.2):C.yellow(),j?1:2.2,j?[4,4]:null);});
  const x=V[k];c.fillStyle=C.ink();c.beginPath();c.arc(F.X(x[0]),F.Y(x[1]),5,0,TAU);c.fill();
  arrow(c,F.X(x[0]),F.Y(x[1]),F.X(x[0]-cv[0]*1.1),F.Y(x[1]-cv[1]*1.1),C.violet(),2);
  txt(c,'$-\\mathbf c$',F.X(x[0]-cv[0]*1.25),F.Y(x[1]-cv[1]*1.25),C.violet(),11,'center');
  api.out('c','$('+f2(cv[0])+','+f2(cv[1])+')$');
  api.out('x','$'+lab[k]+'$'+(tie?' (a whole edge is optimal)':''));
  api.out('p','$'+f2(best)+'$');
};
SIMS.lp.ar=0.78; SIMS.lp.arN=1.0; SIMS.lp.drag={k:'th',min:0,max:359};

/* ═══════════════════ M4: the dual bound g(λ) for exercise 5.1 ═══════════════════ */
SIMS.dual=function(c,W,H,s,api){
  const l=s.lm,NW=W<560;
  const g=t=>1+8*t-9*t*t/(1+t),xm=3*l/(1+l);
  const leftW=NW?W:W*0.6;
  const F=frameXY(leftW,NW?H*0.58:H,-1,5,-4,14,false,{l:28,r:10,t:12,b:22});
  c.fillStyle=C.green(.1);c.fillRect(F.X(2),F.Y(14),F.X(4)-F.X(2),F.Y(-4)-F.Y(14));
  line(c,F.X(-1),F.Y(0),F.X(5),F.Y(0),C.rule(),1);
  const path=(fn,col,w,dash)=>{c.save();c.beginPath();for(let i=0;i<=160;i++){const x=-1+6*i/160,y=Math.max(-4,Math.min(14,fn(x)));i?c.lineTo(F.X(x),F.Y(y)):c.moveTo(F.X(x),F.Y(y));}
    c.strokeStyle=col;c.lineWidth=w;if(dash)c.setLineDash(dash);c.stroke();c.restore();};
  path(x=>x*x+1,C.ink(),2.2);path(x=>(x-2)*(x-4),C.ink(.45),1.4,[5,4]);path(x=>x*x+1+l*(x-2)*(x-4),C.violet(),2.2);
  c.fillStyle=C.violet();c.beginPath();c.arc(F.X(xm),F.Y(g(l)),4,0,TAU);c.fill();
  line(c,F.X(-1),F.Y(g(l)),F.X(5),F.Y(g(l)),C.yellow(),1.4,[3,3]);
  c.fillStyle=C.ink();c.beginPath();c.arc(F.X(2),F.Y(5),4.5,0,TAU);c.fill();
  txt(c,'$p^\\star = 5$',F.X(2)+6,F.Y(5)-10,C.ink(),10);
  txt(c,'$f_0$',F.X(3.6),F.Y(13.5),C.ink(),10);txt(c,'$L(x,\\lambda)$',F.X(4.4),F.Y(Math.min(13,4.4*4.4+1+l*(2.4*.4)))+12,C.violet(),10,'right');
  // right (or lower) panel: g(λ)
  const G=NW?frameXY(W,H,0,5,0,6,false,{l:28,r:10,t:H*0.62,b:20}):frameXY(W,H,0,5,0,6,false,{l:W*0.64+26,r:10,t:12,b:22});
  line(c,G.X(0),G.Y(0),G.X(5),G.Y(0),C.rule(),1);line(c,G.X(0),G.Y(0),G.X(0),G.Y(6),C.rule(),1);
  line(c,G.X(0),G.Y(5),G.X(5),G.Y(5),C.ink(.4),1,[4,3]);txt(c,'$p^\\star$',G.X(5)-2,G.Y(5)-9,C.dim(),9.5,'right');
  c.save();c.beginPath();for(let i=0;i<=120;i++){const t=5*i/120;i?c.lineTo(G.X(t),G.Y(g(t))):c.moveTo(G.X(t),G.Y(g(t)));}c.strokeStyle=C.yellow();c.lineWidth=2.2;c.stroke();c.restore();
  c.fillStyle=C.yellow();c.beginPath();c.arc(G.X(l),G.Y(g(l)),4.5,0,TAU);c.fill();
  txt(c,'$g(\\lambda)$',G.X(.15),G.Y(1.4),C.yellow(),10);txt(c,'$\\lambda$',G.X(5)-2,G.Y(0)+11,C.faint(),10,'right');
  api.out('g','$'+g(l).toFixed(3)+'$');api.out('x','$'+xm.toFixed(3)+'$');api.out('gap','$'+(5-g(l)).toFixed(3)+'$');
};
SIMS.dual.ar=0.56; SIMS.dual.arN=1.25; SIMS.dual.drag={k:'lm',min:0,max:5};

/* ═══════════════════ M4: water-filling ═══════════════════ */
SIMS.water=function(c,W,H,s,api){
  const al=[.6,1.7,.9,2.5,1.2,.35],tot=s.tot;let lo=0,hi=12;
  for(let k=0;k<90;k++){const m=(lo+hi)/2,sm=al.reduce((a,b)=>a+Math.max(0,m-b),0);if(sm>tot)hi=m;else lo=m;}
  const lev=(lo+hi)/2,xs=al.map(a=>Math.max(0,lev-a));
  const F=frameXY(W,H,0,al.length,0,4,false,{l:22,r:10,t:12,b:22});
  al.forEach((a,i)=>{c.fillStyle=C.ink(.18);c.fillRect(F.X(i+.08),F.Y(a),F.X(i+.92)-F.X(i+.08),F.Y(0)-F.Y(a));
    if(xs[i]>0){c.fillStyle=C.violet(.38);c.fillRect(F.X(i+.08),F.Y(lev),F.X(i+.92)-F.X(i+.08),F.Y(a)-F.Y(lev));}
    txt(c,'$\\alpha_'+(i+1)+'$',F.X(i+.5),F.Y(0)+11,C.dim(),10,'center');});
  line(c,F.X(0),F.Y(Math.min(lev,4)),F.X(al.length),F.Y(Math.min(lev,4)),C.violet(),1.8,[5,3]);
  txt(c,'$1/\\nu^\\star$',F.X(0)+4,F.Y(Math.min(lev,4))-9,C.violet(),11);
  api.out('lev','$'+lev.toFixed(3)+'$');
  api.out('x','$('+xs.map(v=>v.toFixed(2)).join(',')+')$');
  api.out('on','$'+xs.filter(v=>v>0).length+'$ of $6$');
};
SIMS.water.ar=0.56; SIMS.water.arN=0.95; SIMS.water.drag={k:'tot',min:0.2,max:8};
window.initSims=initSims;
window.redrawSims=function(){ readPalette(); drawAll(); };
new MutationObserver(()=>window.redrawSims()).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
if(window.matchMedia){ const mq=matchMedia('(prefers-color-scheme:dark)'); if(mq.addEventListener) mq.addEventListener('change',()=>window.redrawSims()); }
})();
