/* ══════════════════════════════════════════════════════════════════
   Interactive benches for Modules III and IV, ported from The Lattice Bench
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
const CUBE=[[0,0,0],[1,0,0],[1,1,0],[0,1,0],[0,0,1],[1,0,1],[1,1,1],[0,1,1]];
const EDGES=[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]];


/* ═══════════════════ 08 FERMI LEVEL IN A SEMICONDUCTOR ═══════════════════ */
SIMS.fermilevel=function(c,W,H,s,api){
  const f=s.f, T=s.T, Eg=s.Eg, kT=8.617e-5*T;
  const NC=2.5e25*Math.pow(T/300,1.5), NV=NC;
  const n=NC*Math.exp(-(1-f)*Eg/kT), p=NV*Math.exp(-f*Eg/kT);
  const ni=Math.sqrt(NC*NV)*Math.exp(-Eg/(2*kT));
  const bx=W*0.08, bw=NARROW?W*0.84:W*0.40, by=H*0.08, bh=NARROW?H*0.58:H*0.74;
  const cbH=bh*0.20, vbH=bh*0.20, gapH=bh-cbH-vbH;
  c.fillStyle=C.green(.30); c.fillRect(bx,by,bw,cbH); frame(c,bx,by,bw,cbH);
  txt(c,'conduction band',bx+6,by+cbH/2,C.green(),10);
  c.fillStyle=C.violet(.30); c.fillRect(bx,by+cbH+gapH,bw,vbH); frame(c,bx,by+cbH+gapH,bw,vbH);
  txt(c,'valence band',bx+6,by+cbH+gapH+vbH/2,C.violet(),10);
  txt(c,'$E_g = '+Eg.toFixed(2)+'$ eV',bx+bw-6,by+cbH+gapH/2,C.faint(),10,'right');
  line(c,bx,by+cbH,bx+bw,by+cbH,C.green(),1.4);
  line(c,bx,by+cbH+gapH,bx+bw,by+cbH+gapH,C.violet(),1.4);
  const yF=by+cbH+gapH*(1-f);
  line(c,bx-6,yF,bx+bw+(NARROW?6:6),yF,C.red(),2.2,[6,4]);
  if(NARROW) txt(c,'$E_F$',bx+6,yF-11,C.red(),11);
  else txt(c,'$E_F$',bx+bw+10,yF,C.red(),11);
  if(Math.abs(f-0.5)>0.07){
    line(c,bx,by+cbH+gapH/2,bx+bw*0.10,by+cbH+gapH/2,C.ink(.35),1,[3,3]);
    txt(c,'mid-gap',bx+bw*0.11,by+cbH+gapH/2,C.faint(),9); }
  const px=NARROW?W*0.10:W*0.56, pw=NARROW?W*0.80:W*0.36;
  const py=NARROW?H*0.74:H*0.16, ph=NARROW?H*0.16:H*0.60;
  const L=x=>Math.log10(Math.max(1,x));
  const top=26, bar=(v,i,col,lab)=>{
    const hgt=ph*clamp(L(v)/top,0,1);
    const X=px+pw*(0.16+0.42*i);
    c.fillStyle=col(.55); c.fillRect(X,py+ph-hgt,pw*0.26,hgt);
    c.strokeStyle=col(); c.strokeRect(X,py+ph-hgt,pw*0.26,hgt);
    txt(c,lab,X+pw*0.13,py+ph+12,col(),10,'center');
    txt(c,'$'+v.toExponential(1).replace(/e\+?(-?)(\d+)/,'\\times 10^{$1$2}')+'$',X+pw*0.13,py+ph-hgt-9,col(),9,'center');
  };
  axis(c,px,px+pw,py+ph);
  bar(n,0,C.green,'$n$'); bar(p,1,C.violet,'$p$');
  txt(c,'$\\log_{10}$ scale',px,py-8,C.dim(),10);
  api.out('EF','$'+(f*Eg).toFixed(3)+'$ eV above $E_V$');
  api.out('n',sci(n)+' $\\mathrm{m^{-3}}$');
  api.out('p',sci(p)+' $\\mathrm{m^{-3}}$');
  api.out('np',sci(n*p));
  api.out('ni2',sci(ni*ni)+'  ✓ equal');
};
SIMS.fermilevel.ar=0.56; SIMS.fermilevel.arN=1.20; SIMS.fermilevel.drag={k:'f',min:0.08,max:0.92};

/* ═══════════════════ 09 ln σ vs 1/T ═══════════════════ */
SIMS.sigmaT=function(c,W,H,s,api){
  const Eg=s.Eg, ND=(s.ND<=0.01)?0:Math.pow(10,s.ND);
  const mue=0.135, muh=0.048, e=1.602e-19;
  const niOf=T=>2.5e25*Math.pow(T/300,1.5)*Math.exp(-Eg/(2*8.617e-5*T));
  const sig=T=>{ const ni=niOf(T);
    const n=(ND+Math.sqrt(ND*ND+4*ni*ni))/2, p=ni*ni/Math.max(n,1);
    return e*(n*mue+p*muh); };
  const gx=W*0.12, gw=W*0.82, gy=H*0.12, gh=H*(NARROW?0.58:0.66);
  axis(c,gx,gx+gw,gy+gh); line(c,gx,gy,gx,gy+gh,C.rule(),1);
  const T0=150,T1=900;
  const xs=T=>gx+gw*(1000/T-1000/T1)/(1000/T0-1000/T1);
  let lo=1e9,hi=-1e9;
  for(let T=T0;T<=T1;T+=5){ const v=Math.log(sig(T)); lo=Math.min(lo,v); hi=Math.max(hi,v); }
  const ys=v=>gy+gh-gh*(v-lo)/(hi-lo+1e-9)*0.94;
  c.beginPath();
  for(let i=0;i<=240;i++){ const T=T0+(T1-T0)*i/240, X=xs(T), Y=ys(Math.log(sig(T)));
    i?c.lineTo(X,Y):c.moveTo(X,Y); }
  c.strokeStyle=C.green(); c.lineWidth=2.2; c.stroke();
  if(ND>0){ c.beginPath();
    for(let i=0;i<=240;i++){ const T=T0+(T1-T0)*i/240;
      const ni=niOf(T), v=Math.log(e*(ni*mue+ni*muh));
      const X=xs(T), Y=ys(v); i?c.lineTo(X,Y):c.moveTo(X,Y); }
    c.strokeStyle=C.ink(.35); c.lineWidth=1.4; c.setLineDash([5,4]); c.stroke(); c.setLineDash([]);
    txt(c,'intrinsic line',gx+gw*0.62,ys(Math.log(e*niOf(500)*(mue+muh)))-10,C.ink(.5),9);
  }
  (NARROW?[300,500,800]:[300,400,600,900]).forEach(T=>{ const X=xs(T);
    line(c,X,gy+gh,X,gy+gh+5,C.faint(),1);
    txt(c,'$'+T+'$ K',X,gy+gh+16,C.faint(),9,'center'); });
  txt(c,'$1000/T$  →',gx+gw,gy+gh+30,C.faint(),9,'right');
  txt(c,'$\\ln σ$',gx+4,gy+10,C.green(),11);
  const slope=-Eg/(2*8.617e-5)/1000;
  txt(c,'slope $= -E_g/2k_B$',gx+gw*0.30,gy+gh*0.22,C.green(),10);
  api.out('Eg','$'+Eg.toFixed(2)+'$ eV');
  api.out('slope','$'+slope.toFixed(0)+'$ K  (per $1000/T$)');
  api.out('ni',sci(niOf(300))+' $\\mathrm{m^{-3}}$');
  api.out('sig',sci(sig(300))+' S/m');
};
SIMS.sigmaT.ar=0.52; SIMS.sigmaT.arN=0.85; SIMS.sigmaT.drag={k:'Eg',min:0.3,max:2};

/* ═══════════════════ 10 χ vs T ═══════════════════ */
SIMS.chiT=function(c,W,H,s,api){
  const cls=s.cls, T=s.T, th=s.th, CC=120;
  const chi=Tx=>{
    if(cls==='dia') return -0.01;
    if(cls==='para') return CC/Tx;
    if(cls==='ferro') return Tx>th+8?CC/(Tx-th):null;
    return Tx>th?CC/(Tx+th):CC/(2*th)*(0.55+0.45*Tx/th);
  };
  const pw=NARROW?W*0.86:W*0.40, ph=NARROW?H*0.36:H*0.68;
  const ax=NARROW?W*0.09:W*0.07, ay=NARROW?H*0.08:H*0.16;
  const bx=NARROW?W*0.09:W*0.55, by=NARROW?H*0.56:H*0.16;
  const T0=10,T1=900;
  const draw=(x,y,w,h,f,lab,col,zero)=>{
    axis(c,x,x+w,zero?y+h/2:y+h); line(c,x,y,x,y+h,C.rule(),1);
    txt(c,lab,x+3,y-9,C.dim(),10);
    let mx=0; for(let i=0;i<=200;i++){ const Tx=T0+(T1-T0)*i/200, v=f(Tx);
      if(v!==null) mx=Math.max(mx,Math.abs(v)); }
    const base=zero?y+h/2:y+h;
    c.beginPath(); let st=false;
    for(let i=0;i<=300;i++){ const Tx=T0+(T1-T0)*i/300, v=f(Tx), X=x+w*(Tx-T0)/(T1-T0);
      if(v===null){ st=false; continue; }
      const Y=base-(v/mx)*(zero?h/2:h)*0.88;
      if(!st){ c.moveTo(X,Y); st=true; } else c.lineTo(X,Y); }
    c.strokeStyle=col; c.lineWidth=2.2; c.stroke();
    [200,400,600,800].forEach(Tt=>{ const X=x+w*(Tt-T0)/(T1-T0);
      line(c,X,y+h,X,y+h+4,C.faint(),1);
      txt(c,'$'+Tt+'$',X,y+h+14,C.faint(),8.5,'center'); });
    txt(c,'$T$ (K)',x+w,y+h+26,C.faint(),9,'right');
    const cX=x+w*(T-T0)/(T1-T0);
    line(c,cX,y,cX,y+h,C.red(.55),1.2);
    const v=f(T);
    if(v!==null){ c.fillStyle=C.red(); c.beginPath();
      c.arc(cX,base-(v/mx)*(zero?h/2:h)*0.88,4,0,TAU); c.fill(); }
    return mx;
  };
  const mx=draw(ax,ay,pw,ph,chi,'$χ$  vs  $T$',C.yellow(),cls==='dia');
  const inv=Tx=>{ const v=chi(Tx); return (v===null||v<=0)?null:1/v; };
  draw(bx,by,pw,ph,cls==='dia'?()=>null:inv,'$1/χ$  vs  $T$   — always a straight line',C.violet(),false);
  if(cls==='ferro'||cls==='anti'){
    const X=bx+pw*((cls==='ferro'?th:-th)-T0)/(T1-T0);
    if(X>bx-pw&&X<bx+pw){ line(c,clamp(X,bx,bx+pw),by,clamp(X,bx,bx+pw),by+ph,C.green(.7),1.4,[4,3]);
      txt(c,(cls==='ferro'?'$+θ$':'$-θ$')+' intercept',clamp(X,bx,bx+pw)+5,by+14,C.green(),9); }
  }
  const laws={dia:'$χ < 0$, independent of $T$',para:'$χ = C/T$',ferro:'$χ = C/(T-θ)$',anti:'$χ = C/(T+θ)$, peak at $T_N$'};
  const names={dia:'diamagnetic',para:'paramagnetic',ferro:'ferromagnetic',anti:'antiferromagnetic'};
  api.out('cls',names[cls]); api.out('law',laws[cls]);
  const v=chi(T);
  api.out('chi',v===null?'below $T_c$ — spontaneously magnetised':sci(v*1e-3));
  api.out('th',cls==='dia'||cls==='para'?'—':(cls==='ferro'?'$θ = '+th+'$':'$T_N = '+th+'$')+' K');
};
SIMS.chiT.ar=0.56; SIMS.chiT.arN=1.25; SIMS.chiT.drag={k:'T',min:10,max:900};

/* ═══════════════════ 11 HYSTERESIS LOOP ═══════════════════ */
SIMS.hyst=function(c,W,H,s,api){
  const Hc=s.hc, A=s.amp, w=0.22;
  const Bs=1;
  const up=Hx=>Bs*Math.tanh((Hx-Hc)/w), dn=Hx=>Bs*Math.tanh((Hx+Hc)/w);
  const gx=W*0.12, gw=W*0.80, gy=H*0.10, gh=H*0.76;
  const cx=gx+gw/2, cy=gy+gh/2, SX=gw/(2*1.7), SY=gh/2*0.88;
  axis(c,gx,gx+gw,cy); line(c,cx,gy,cx,gy+gh,C.rule(),1);
  txt(c,'$B$',cx+6,gy+8,C.dim(),10); txt(c,'$H$',gx+gw-4,cy-10,C.dim(),10,'right');
  const path=(f,col,lw)=>{ c.beginPath();
    for(let i=0;i<=200;i++){ const Hx=-A+2*A*i/200, X=cx+Hx*SX, Y=cy-f(Hx)*SY;
      i?c.lineTo(X,Y):c.moveTo(X,Y); }
    c.strokeStyle=col; c.lineWidth=lw; c.stroke(); };
  path(up,C.red(),2.4); path(dn,C.red(),2.4);
  c.beginPath();
  for(let i=0;i<=120;i++){ const Hx=A*i/120, X=cx+Hx*SX, Y=cy-Bs*Math.tanh(Hx/(w*1.9))*SY;
    i?c.lineTo(X,Y):c.moveTo(X,Y); }
  c.strokeStyle=C.green(); c.lineWidth=1.6; c.setLineDash([5,4]); c.stroke(); c.setLineDash([]);
  txt(c,'initial curve',cx+A*SX*0.32,cy-Bs*0.85*SY-8,C.green(),10);
  const Br=Bs*Math.tanh(Hc/w);
  c.fillStyle=C.yellow(); c.beginPath(); c.arc(cx,cy-Br*SY,4.5,0,TAU); c.fill();
  txt(c,'$B_r$',cx+8,cy-Br*SY-8,C.yellow(),10);
  c.beginPath(); c.arc(cx-Hc*SX,cy,4.5,0,TAU); c.fill();
  txt(c,'$-H_c$',cx-Hc*SX-8,cy+14,C.yellow(),10,'right');
  line(c,gx,cy-Bs*SY,gx+gw,cy-Bs*SY,C.ink(.25),1,[3,3]);
  txt(c,'saturation',gx+4,cy-Bs*SY-8,C.faint(),9);
  let area=0; for(let i=0;i<200;i++){ const Hx=-A+2*A*i/200, dH=2*A/200;
    area+=Math.abs(dn(Hx)-up(Hx))*dH; }
  api.out('Br','$'+Br.toFixed(3)+'\\,B_s$');
  api.out('Hc','$'+Hc.toFixed(2)+'$');
  api.out('area','$'+area.toFixed(3)+'$');
  api.out('use',Hc<0.3?'soft — transformer cores, low loss':(Hc>0.6?'hard — permanent magnets':'intermediate'));
};
SIMS.hyst.ar=0.6; SIMS.hyst.arN=0.95; SIMS.hyst.drag={k:'hc',min:0.05,max:1};

/* ═══════════════════ 12 ε_r vs FREQUENCY ═══════════════════ */
SIMS.eps=function(c,W,H,s,api){
  const lf=s.f, Ao=s.o, As=10, Ai=4, Ae=1.8;
  const cut=[[3,As,'space charge',C.red],[11,Ao,'orientational',C.yellow],
             [13,Ai,'ionic',C.green],[15,Ae,'electronic',C.violet]];
  const er=x=>1+cut.reduce((t,m)=>t+m[1]/(1+Math.pow(10,2*(x-m[0]))),0);
  const gx=W*0.11, gw=W*0.84, gy=H*0.12, gh=H*(NARROW?0.56:0.64);
  axis(c,gx,gx+gw,gy+gh); line(c,gx,gy,gx,gy+gh,C.rule(),1);
  const X0=1,X1=16, PX=x=>gx+gw*(x-X0)/(X1-X0);
  const emax=er(X0)*1.08;
  const PY=v=>gy+gh-gh*v/emax*0.94;
  c.beginPath(); c.moveTo(PX(X0),gy+gh);
  for(let i=0;i<=300;i++){ const x=X0+(X1-X0)*i/300; c.lineTo(PX(x),PY(er(x))); }
  c.lineTo(PX(X1),gy+gh); c.closePath();
  c.fillStyle=C.red(.16); c.fill();
  c.beginPath();
  for(let i=0;i<=300;i++){ const x=X0+(X1-X0)*i/300; const Y=PY(er(x));
    i?c.lineTo(PX(x),Y):c.moveTo(PX(x),Y); }
  c.strokeStyle=C.red(); c.lineWidth=2.4; c.stroke();
  cut.forEach(m=>{ if(m[1]<=0.2) return;
    const X=PX(m[0]); line(c,X,gy,X,gy+gh,m[3](.45),1.2,[4,3]);
    txt(c,m[2],X-5,gy+14,m[3](),9,'right'); });
  [['radio',4],['micro',10],['IR',13.6],['optical',15.2]].forEach(b=>{
    txt(c,b[0],PX(b[1]),gy+gh+16,C.faint(),9,'center'); });
  txt(c,'$\\log_{10}f$ (Hz) →',gx+gw,gy+gh+30,C.faint(),9,'right');
  txt(c,'$ε_r$',gx-6,gy+10,C.red(),11,'right');
  const cX=PX(lf);
  line(c,cX,gy,cX,gy+gh,C.green(),1.6);
  c.fillStyle=C.green(); c.beginPath(); c.arc(cX,PY(er(lf)),4.5,0,TAU); c.fill();
  const live=cut.filter(m=>m[1]>0.2&&lf<m[0]-0.4).map(m=>m[2]);
  api.out('f','$10^{'+lf.toFixed(1)+'}$ Hz');
  api.out('er','$'+er(lf).toFixed(2)+'$');
  api.out('mech',live.length?live.join(' + '):'none — $ε_r\\to 1$');
};
SIMS.eps.ar=0.52; SIMS.eps.arN=0.85; SIMS.eps.drag={k:'f',min:1,max:16};


window.initSims=initSims;
window.redrawSims=function(){ readPalette(); drawAll(); };
new MutationObserver(()=>window.redrawSims()).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
if(window.matchMedia){ const mq=matchMedia('(prefers-color-scheme:dark)'); if(mq.addEventListener) mq.addEventListener('change',()=>window.redrawSims()); }
})();
