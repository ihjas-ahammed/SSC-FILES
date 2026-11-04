/* ══════════════════════════════════════════════════════════════════
   Convex Optimization · Modules I–IV — study-journey engine
   Framework · accurate canvas diagrams · retrieval · Firebase sync
   ══════════════════════════════════════════════════════════════════ */
(function(){
'use strict';
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const clamp=(v,a,b)=>v<a?a:v>b?b:v;
/* typeset that waits for MathJax to be ready */
function mj(el,then){
  let tries=0;
  const run=()=>{
    // a detached element has no font size, so MathJax would size it NaN: wait until it is in the page
    if(el&&!el.isConnected&&tries++<90){requestAnimationFrame(run);return;}
    try{window.MathJax.typesetPromise(el?[el]:null).then(()=>then&&then());}
    catch(e){then&&then();}};
  if(window.__mjReady&&window.MathJax&&window.MathJax.typesetPromise)run();
  else (window.__mjQueue=window.__mjQueue||[]).push(run);
}

/* ─────────── palette read from CSS (theme-aware) ─────────── */
let C={};
function capBlock(ctx,lines){
  ctx.save();ctx.textBaseline='top';ctx.textAlign='left';let y=7;
  lines.forEach((L,i)=>{if(!L)return;
    MJT.draw(ctx,L[0],10,y,i===0?{size:11.5,bold:1,font:"'Sora',Georgia,serif",color:L[1]||C.ink,base:'top'}
      :{size:10.5,color:L[1]||C.ink,base:'top'});y+=i===0?17:14;});
  ctx.restore();
}
function readPalette(){
  const cs=getComputedStyle(document.documentElement);
  const g=n=>cs.getPropertyValue(n).trim();
  const rgb=n=>`rgb(${g(n)})`, rgba=(n,a)=>`rgba(${g(n)},${a})`;
  C={
    pos:rgb('--pos-rgb'), neg:rgb('--neg-rgb'), prob:rgb('--prob-rgb'), wall:rgb('--wall-rgb'),
    posA:a=>rgba('--pos-rgb',a), negA:a=>rgba('--neg-rgb',a),
    probA:a=>rgba('--prob-rgb',a), wallA:a=>rgba('--wall-rgb',a),
    ink:rgb('--ink-rgb'), inkA:a=>rgba('--ink-rgb',a),
    bg:g('--plot-bg'), grid:g('--plot-grid'), axis:g('--plot-axis'),
    dark:g('--is-dark')==='1'
  };
}

/* ─────────── plotting helper ─────────── */
function Plot(ctx,W,H,pad){
  pad=Object.assign({l:34,r:16,t:16,b:26},pad||{});
  const x0=pad.l,x1=W-pad.r,y0=H-pad.b,y1=pad.t;
  let dom=[-1,1],ran=[-1,1];
  const P={
    ctx,W,H,pad,
    dom(a,b){dom=[a,b];return P},
    ran(a,b){ran=[a,b];return P},
    X(x){return x0+(x-dom[0])/(dom[1]-dom[0])*(x1-x0)},
    Y(y){return y0+(y-ran[0])/(ran[1]-ran[0])*(y1-y0)},
    clear(){ctx.clearRect(0,0,W,H)},
    grid(nx,ny){ctx.save();ctx.strokeStyle=C.grid;ctx.lineWidth=1;ctx.beginPath();
      for(let i=0;i<=nx;i++){const x=x0+(x1-x0)*i/nx;ctx.moveTo(x,y1);ctx.lineTo(x,y0);}
      for(let j=0;j<=ny;j++){const y=y1+(y0-y1)*j/ny;ctx.moveTo(x0,y);ctx.lineTo(x1,y);}
      ctx.stroke();ctx.restore();return P},
    axes(opts){opts=opts||{};ctx.save();ctx.strokeStyle=C.axis;ctx.lineWidth=1.4;
      const yz=(ran[0]<0&&ran[1]>0)?P.Y(0):y0;
      ctx.beginPath();ctx.moveTo(x0,y1);ctx.lineTo(x0,y0);ctx.stroke();      // y axis
      ctx.beginPath();ctx.moveTo(x0,yz);ctx.lineTo(x1,yz);ctx.stroke();      // x axis (at y=0)
      ctx.restore();return P},
    curve(fn,color,w,dash){ctx.save();ctx.strokeStyle=color;ctx.lineWidth=w||2;
      if(dash)ctx.setLineDash(dash);ctx.lineJoin='round';ctx.beginPath();
      const N=280;let started=false;
      for(let i=0;i<=N;i++){const x=dom[0]+(dom[1]-dom[0])*i/N;let y=fn(x);
        if(y==null||!isFinite(y)){started=false;continue;}
        y=clamp(y,ran[0]-99,ran[1]+99);const px=P.X(x),py=P.Y(y);
        if(!started){ctx.moveTo(px,py);started=true;}else ctx.lineTo(px,py);}
      ctx.stroke();ctx.restore();return P},
    fill(fn,color,x_a,x_b){ctx.save();ctx.fillStyle=color;ctx.beginPath();
      const a=x_a==null?dom[0]:x_a,b=x_b==null?dom[1]:x_b,N=160;
      ctx.moveTo(P.X(a),P.Y(0));
      for(let i=0;i<=N;i++){const x=a+(b-a)*i/N;let y=fn(x);if(!isFinite(y))y=0;
        ctx.lineTo(P.X(x),P.Y(clamp(y,ran[0],ran[1])));}
      ctx.lineTo(P.X(b),P.Y(0));ctx.closePath();ctx.fill();ctx.restore();return P},
    vline(x,color,w,dash){ctx.save();ctx.strokeStyle=color;ctx.lineWidth=w||1.5;
      if(dash)ctx.setLineDash(dash);ctx.beginPath();ctx.moveTo(P.X(x),y1);ctx.lineTo(P.X(x),y0);
      ctx.stroke();ctx.restore();return P},
    hline(y,color,w,dash){ctx.save();ctx.strokeStyle=color;ctx.lineWidth=w||1.5;
      if(dash)ctx.setLineDash(dash);ctx.beginPath();ctx.moveTo(x0,P.Y(y));ctx.lineTo(x1,P.Y(y));
      ctx.stroke();ctx.restore();return P},
    seg(ax,ay,bx,by,color,w,dash){ctx.save();ctx.strokeStyle=color;ctx.lineWidth=w||1.5;
      if(dash)ctx.setLineDash(dash);ctx.beginPath();ctx.moveTo(P.X(ax),P.Y(ay));ctx.lineTo(P.X(bx),P.Y(by));
      ctx.stroke();ctx.restore();return P},
    dot(x,y,color,r){ctx.save();ctx.fillStyle=color;ctx.beginPath();
      ctx.arc(P.X(x),P.Y(y),r||3,0,7);ctx.fill();ctx.restore();return P},
    /* every label goes through MathJax for its $…$ parts (see mjtext.js) */
    label(x,y,txt,color,opts){opts=opts||{};
      MJT.draw(ctx,txt,opts.px?x:P.X(x),opts.py?y:P.Y(y),{color:color||C.inkA(.75),size:opts.sz||11,bold:opts.b,
        align:opts.align,base:opts.base||'alphabetic',font:"'JetBrains Mono',monospace"});return P},
    text(px,py,txt,color,opts){opts=opts||{};
      MJT.draw(ctx,txt,px,py,{color:color||C.inkA(.75),size:opts.sz||11,bold:opts.b,
        align:opts.align,base:opts.base||'top',font:"'JetBrains Mono',monospace"});return P}
  };
  return P;
}


/* ─────── helpers for the step-by-step construction figures ───────
   clipHalf : cut a convex polygon with the half-plane  n·x <= d
   ws2d     : 2-D Wigner–Seitz cell as the intersection of bisector half-planes
   ISO/ipr  : one fixed axonometric view — c up, b right, a toward the reader
   planeBox : the polygon where  hx+ky+lz = 1  crosses an axis-aligned box
   fitFrame : isotropic world window that fits a set of points in the plot box   */
function clipHalf(poly,nx,ny,d){
  const out=[];
  for(let i=0;i<poly.length;i++){
    const A=poly[i],B=poly[(i+1)%poly.length];
    const da=nx*A[0]+ny*A[1]-d, db=nx*B[0]+ny*B[1]-d;
    if(da<=1e-12)out.push(A);
    if((da<-1e-12&&db>1e-12)||(da>1e-12&&db<-1e-12)){
      const t=da/(da-db);out.push([A[0]+t*(B[0]-A[0]),A[1]+t*(B[1]-A[1])]);}
  }
  return out;
}
function ws2d(neigh,R){
  let poly=[[-R,-R],[R,-R],[R,R],[-R,R]];
  neigh.forEach(g=>{poly=clipHalf(poly,g[0],g[1],(g[0]*g[0]+g[1]*g[1])/2);});
  return poly;
}
const ISO={a:[-.60,-.40],b:[1,0],c:[0,1]};
const ipr=(i,j,k)=>[i*ISO.a[0]+j*ISO.b[0]+k*ISO.c[0], i*ISO.a[1]+j*ISO.b[1]+k*ISO.c[1]];
function boxCorners(lo,hi){const o=[];
  for(let i=0;i<2;i++)for(let j=0;j<2;j++)for(let k=0;k<2;k++)
    o.push([i?hi[0]:lo[0], j?hi[1]:lo[1], k?hi[2]:lo[2]]);
  return o;}
function boxEdges(lo,hi){const c=boxCorners(lo,hi),e=[];
  for(let x=0;x<8;x++)for(let y=x+1;y<8;y++){
    let n=0;for(let d=0;d<3;d++)if(Math.abs(c[x][d]-c[y][d])>1e-9)n++;
    if(n===1)e.push([c[x],c[y]]);}
  return e;}
function planeBox(h,k,l,lo,hi,rhs){
  const R=rhs==null?1:rhs;
  const f=q=>h*q[0]+k*q[1]+l*q[2]-R, pts=[];
  boxEdges(lo,hi).forEach(([A,B])=>{
    const fa=f(A),fb=f(B);
    if(Math.abs(fa)<1e-9){pts.push(A);return;}
    if(Math.abs(fb)<1e-9){pts.push(B);return;}
    if(fa*fb<0){const t=fa/(fa-fb);
      pts.push([A[0]+t*(B[0]-A[0]),A[1]+t*(B[1]-A[1]),A[2]+t*(B[2]-A[2])]);}});
  const u=[];pts.forEach(q=>{if(!u.some(v=>Math.hypot(v[0]-q[0],v[1]-q[1],v[2]-q[2])<1e-7))u.push(q);});
  if(u.length<3)return [];
  const P2=u.map(q=>ipr(q[0],q[1],q[2]));            // order the ring in the picture
  const cx=P2.reduce((a,q)=>a+q[0],0)/P2.length, cy=P2.reduce((a,q)=>a+q[1],0)/P2.length;
  return u.map((q,i)=>({q,th:Math.atan2(P2[i][1]-cy,P2[i][0]-cx)}))
          .sort((a,b)=>a.th-b.th).map(o=>o.q);
}
function fitFrame(P,pw,ph,pts,pad){
  let x0=1e9,x1=-1e9,y0=1e9,y1=-1e9;
  pts.forEach(q=>{x0=Math.min(x0,q[0]);x1=Math.max(x1,q[0]);
                  y0=Math.min(y0,q[1]);y1=Math.max(y1,q[1]);});
  const m=pad==null?.22:pad;x0-=m;x1+=m;y0-=m;y1+=m;
  let w=x1-x0,h=y1-y0;const ap=pw/ph;
  if(w/h<ap){const nw=h*ap,c=(x0+x1)/2;x0=c-nw/2;x1=c+nw/2;}
  else{const nh=w/ap,c=(y0+y1)/2;y0=c-nh/2;y1=c+nh/2;}
  return P.dom(x0,x1).ran(y0,y1);
}
/* the index as it is spoken: 2 → "a/2", 1 → "a", −1 → "−a", 0 → "∞ (parallel)" */
function interceptTxt(ax,n){     // TeX (no $): callers wrap it
  if(!n)return '\\infty';
  const sgn=n<0?'-':'', m=Math.abs(n);
  return sgn+ax+(m===1?'':'/'+m);
}
function barTxt(n){return (n<0?'\\bar{'+Math.abs(n)+'}':''+n);}

/* ══════════════ DIAGRAM REGISTRY — all drawn from real formulas ══════════════ */
const FIGS={};
function setup3D(){}  /* no 3-D models on this page */
const live3D=[];

/* ══════════════ canvas lifecycle ══════════════ */
const liveFigs=[];
function setupFig(cv){
  const name=cv.dataset.fig;const F=FIGS[name];if(!F)return;
  const wrap=cv.parentElement;
  const st={t:0,playing:F.anim?true:false,pts:null,k:0,lastReset:0,
            step:0,opt:Object.assign({},F.opt||{})};
  const rec={cv,name,F,st,visible:false};
  function size(){const cssW=cv.clientWidth||wrap.clientWidth||0;
    if(!cssW)return;                       // collapsed card: size it when revealed
    const dpr=Math.min(2,window.devicePixelRatio||1);
    const cssH=Math.round(cssW*((F.arN&&cssW<520)?F.arN:F.ar));   // arN: taller shape on phones
    cv.width=cssW*dpr;cv.height=cssH*dpr;cv.style.height=cssH+'px';
    const ctx=cv.getContext('2d');ctx.setTransform(dpr,0,0,dpr,0,0);
    rec.W=cssW;rec.H=cssH;render();}
  function render(){readPalette();const ctx=cv.getContext('2d');
    try{F.draw(ctx,rec.W,rec.H,st);}catch(e){/*noop*/}}
  rec.size=size;rec.render=render;
  /* variant chips and, for a guided construction, the step bar */
  if(F.chips||F.steps){
    const bar=document.createElement('div');bar.className='figbar below';
    const same=(x,y)=>JSON.stringify(x)===JSON.stringify(y);
    const chipEls=[];
    (F.chips||[]).forEach(ch=>{
      if(ch.sep!==undefined){const t=document.createElement('span');
        t.className='figsep';t.innerHTML=ch.sep;mj(t);bar.appendChild(t);return;}
      const key=Object.keys(ch.set)[0];
      const b=document.createElement('button');b.className='chipbtn';b.innerHTML=ch.label;mj(b);
      b.onclick=e=>{e.stopPropagation();Object.assign(st.opt,ch.set);
        chipEls.forEach(x=>x.classList.toggle('on',same(st.opt[Object.keys(x._s)[0]],
          x._s[Object.keys(x._s)[0]])));
        render();};
      b._s=ch.set;if(ch.on)b.classList.add('on');
      chipEls.push(b);bar.appendChild(b);});
    if(F.steps){
      if(F.chips){const br=document.createElement('span');br.className='brk';bar.appendChild(br);}
      const cap=document.createElement('span');cap.className='stepcap';
      const nums=[];
      const go=i=>{st.step=Math.max(0,Math.min(F.steps.length-1,i));
        nums.forEach((b,k)=>b.classList.toggle('on',k===st.step));
        cap.innerHTML='<b>step '+(st.step+1)+'/'+F.steps.length+'</b>'+F.steps[st.step];mj(cap);
        render();};
      const mk=(t,title,fn)=>{const b=document.createElement('button');
        b.textContent=t;b.title=title;b.onclick=e=>{e.stopPropagation();fn();};
        bar.appendChild(b);return b;};
      mk('\u25c0','Previous step',()=>go(st.step-1));
      F.steps.forEach((_,i)=>{const b=document.createElement('button');
        b.className='step';b.textContent=i+1;b.title='Step '+(i+1);
        b.onclick=e=>{e.stopPropagation();go(i);};nums.push(b);bar.appendChild(b);});
      mk('\u25b6','Next step',()=>go(st.step+1));
      mk('\u21ba','Back to step 1',()=>go(0));
      bar.appendChild(cap);
      rec.goStep=go;
      setTimeout(()=>go(0),0);
    }
    wrap.appendChild(bar);
  }
  // controls for animated figs
  if(F.anim){
    const bar=document.createElement('div');bar.className='figbar';
    const play=document.createElement('button');play.textContent='❚❚';play.title='Pause';
    play.onclick=()=>{st.playing=!st.playing;play.textContent=st.playing?'❚❚':'▶';};
    const rep=document.createElement('button');rep.textContent='↺';rep.title='Restart';
    rep.onclick=()=>{st.t=0;st.pts=null;st.k=0;render();};
    bar.appendChild(play);bar.appendChild(rep);wrap.appendChild(bar);
  }
  liveFigs.push(rec);
  const io=new IntersectionObserver(es=>{es.forEach(e=>{rec.visible=e.isIntersecting;});},{threshold:.12});
  io.observe(cv);
  size();
  window.addEventListener('resize',debounce(size,180));
}
MJT.onRedraw(()=>{liveFigs.forEach(r=>{if(r.W)r.render();});live3D.forEach(r=>{try{r.render();}catch(e){}});});
let lastT=performance.now();
function loop(now){const dt=Math.min(.05,(now-lastT)/1000);lastT=now;
  for(const r of liveFigs){if(r.F.anim&&r.st.playing&&r.visible){r.st.t+=dt;r.render();}}
  for(const r of live3D){if(r.st.auto&&r.visible){r.st.yaw+=dt*0.30;r.render();}}
  requestAnimationFrame(loop);}
requestAnimationFrame(loop);
function debounce(f,ms){let h;return(...a)=>{clearTimeout(h);h=setTimeout(()=>f(...a),ms);};}

/* ══════════════ progress state + Firebase sync ══════════════ */
const DB='https://task-dominion-default-rtdb.asia-southeast1.firebasedatabase.app';
const APP='ssc_co_mod1234';
const LS='co1234_progress_v1', LSID='co1234_syncid_v1';
let state={done:{},plan:{},conf:{},open:{},updated:0};
let syncId=localStorage.getItem(LSID)||'';
function loadLocal(){try{const j=JSON.parse(localStorage.getItem(LS));if(j)state=Object.assign(state,j);}catch(e){}}
function saveLocal(){state.updated=Date.now();localStorage.setItem(LS,JSON.stringify(state));}
let pushT;
function persist(){saveLocal();paintProgress();if(syncId){clearTimeout(pushT);pushT=setTimeout(push,700);}}
function push(){fetch(`${DB}/${APP}/${encodeURIComponent(syncId)}.json`,{method:'PUT',
  body:JSON.stringify(state)}).then(()=>toast('Synced ✓')).catch(()=>toast('Offline — saved locally'));}
function pull(cb){fetch(`${DB}/${APP}/${encodeURIComponent(syncId)}.json`).then(r=>r.json())
  .then(d=>{if(d&&(!state.updated||d.updated>state.updated)){state=Object.assign(state,d);saveLocal();}cb&&cb();})
  .catch(()=>cb&&cb());}
function toast(m){const s=$('#sync');$('#synctxt').textContent=m;s.classList.add('show');
  clearTimeout(toast._h);toast._h=setTimeout(()=>s.classList.remove('show'),2200);}

/* ══════════════ render: nested collapsible Module ▸ Section ▸ Topic ══════════════ */
let TREE=[];                       // [{id,secs:[{id,title,topics:[{id,title}]}]}]
const SEC=Object.create(null);

const el=h=>{const d=document.createElement('div');d.innerHTML=h.trim();return d.firstElementChild;};

function render(){
  const host=$('#stations');host.innerHTML='';TREE=[];
  MODULES.forEach((m,mi)=>{
    const modEl=el(`<section class="mod ${m.cls||('m'+mi)}" id="${m.id}">
      <div class="mh"><span class="caret">▶</span>
        <button class="tick" data-tick="${m.id}" title="Mark whole module done">✓</button>
        <div class="mt"><b>${m.name}</b><small>${m.sub||''}</small></div>
        <span class="cnt" data-cnt="${m.id}"></span></div>
      <div class="mbody"></div></section>`);
    const mbody=$('.mbody',modEl);
    const node={id:m.id,secs:[]};

    m.stations.forEach(sid=>{
      const st=STATIONS.find(x=>x.id===sid);if(!st)return;
      const title=(st.short||st.title).replace(/<[^>]+>/g,'');
      const secEl=el(`<div class="unit" id="${sid}">
        <div class="uh"><span class="caret">▶</span>
          <button class="tick" data-tick="${sid}" title="Mark section done">✓</button>
          <h3>${title}</h3>
          <span class="cnt" data-cnt="${sid}"></span>
          <span class="est">${st.est||''}</span></div>
        <div class="ubody"></div></div>`);
      const ubody=$('.ubody',secEl);
      const sec={id:sid,title,topics:[]};

      /* split the authored body at each topic marker into its own collapsible card */
      const tmp=document.createElement('div');tmp.innerHTML=st.body;
      let sink=ubody;
      [...tmp.childNodes].forEach(n=>{
        if(n.nodeType===1&&n.classList&&n.classList.contains('topic')&&n.hasAttribute('data-tp')){
          const i=sec.topics.length,tid=sid+'__t'+i;
          const h=n.querySelector('h3');
          const tHTML=h?h.innerHTML:'Topic', tTxt=(h?h.textContent:'Topic').trim();
          const tEl=el(`<div class="tunit" id="${tid}">
            <div class="th"><span class="caret">▶</span>
              <button class="tick" data-tick="${tid}" title="Mark topic done">✓</button>
              <h4>${tHTML}</h4></div>
            <div class="tbody"></div></div>`);
          ubody.appendChild(tEl);
          sink=$('.tbody',tEl);
          sec.topics.push({id:tid,title:tTxt});
        }else{
          sink.appendChild(n);            // moves the node out of tmp
        }
      });
      mbody.appendChild(secEl);node.secs.push(sec);SEC[sid]=sec;
    });
    host.appendChild(modEl);TREE.push(node);
  });

  migrateOldProgress();
  wireLadders();wireChecks();wirePlan();wireTicks();wireFolds();
  $$('canvas[data-fig]').forEach(setupFig);
  $$('canvas[data-v3d]').forEach(setup3D);
  if(window.initSims)initSims(host);            // Modules III–IV benches (sims/sims.js)
  restoreFolds();
  mj(host,()=>{resizeVisibleFigs();if(window.mountDerivs)mountDerivs(host);});
  paintAll();
}

/* ---- leaves: a section's topics, or the section itself when it has none ---- */
function leavesOfSec(sec){return sec.topics.length?sec.topics.map(t=>t.id):[sec.id];}
function leavesOfMod(mod){return mod.secs.flatMap(leavesOfSec);}
function allLeaves(){return TREE.flatMap(leavesOfMod);}
function stateOf(ids){const n=ids.filter(i=>state.done[i]).length;
  return {n,total:ids.length,all:ids.length>0&&n===ids.length,some:n>0};}

function migrateOldProgress(){
  let changed=false;
  TREE.forEach(m=>m.secs.forEach(sec=>{
    if(sec.topics.length&&state.done[sec.id]&&!sec.topics.some(t=>state.done[t.id])){
      sec.topics.forEach(t=>state.done[t.id]=true);changed=true;}
  }));
  if(changed)saveLocal();
}

/* ---- ticking: parent cascades down, parent state derives from children ---- */
function setLeaves(ids,on){ids.forEach(i=>{if(on)state.done[i]=true;else delete state.done[i];});}
function toggleNode(id){
  const mod=TREE.find(m=>m.id===id);
  if(mod){const L=leavesOfMod(mod);setLeaves(L,!stateOf(L).all);}
  else{const sec=SEC[id];
    if(sec){const L=leavesOfSec(sec);setLeaves(L,!stateOf(L).all);}
    else setLeaves([id],!state.done[id]);}
  persist();paintAll();
}
let _ticksWired=false;
function wireTicks(){
  if(_ticksWired)return;_ticksWired=true;
  document.addEventListener('click',e=>{
    const t=e.target.closest('[data-tick]');
    if(t){e.preventDefault();e.stopPropagation();toggleNode(t.dataset.tick);}
  },true);
}

/* ══════════════ folding ══════════════ */
function cardOf(head){return head.parentElement;}
function bodyOf(card){return $(':scope>.mbody,:scope>.ubody,:scope>.tbody,:scope>.pbody,:scope>.ans',card);}
/* slide: animate a panel's height, vertical padding and opacity between 0 and its natural size.
   The panel must already be displayed (class/attribute set) before an opening slide; a closing
   slide calls done() at the end, where the caller hides it. A click mid-slide reverses from the
   current height, and reduced-motion users get the instant change. */
const reducedMotion=()=>window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
function slide(el,open,done){
  if(!el||!el.animate||reducedMotion()){if(done)done();return;}
  const cs=getComputedStyle(el);
  const from=el._sl?{height:cs.height,paddingTop:cs.paddingTop,paddingBottom:cs.paddingBottom,opacity:cs.opacity}:null;
  if(el._sl){el._sl.onfinish=null;el._sl.cancel();}
  const full=()=>{const c=getComputedStyle(el);
    return {height:el.offsetHeight+'px',paddingTop:c.paddingTop,paddingBottom:c.paddingBottom,opacity:1};};
  const zero={height:'0px',paddingTop:'0px',paddingBottom:'0px',opacity:0};
  const end=full();
  const h=el.offsetHeight;
  const ms=Math.round(Math.min(460,Math.max(220,180+Math.sqrt(h)*6)));
  el.style.overflow='clip';el.style.boxSizing='border-box';
  const a=el.animate(open?[from||zero,end]:[from||end,zero],
    {duration:ms,easing:open?'cubic-bezier(.22,.9,.3,1)':'cubic-bezier(.4,0,.6,1)'});
  el._sl=a;
  a.onfinish=()=>{el._sl=null;el.style.overflow='';el.style.boxSizing='';if(done)done();};
}
function setOpen(card,open,instant){
  state.open=state.open||{};
  if(open)state.open[card.id]=1;else delete state.open[card.id];
  const body=bodyOf(card);
  if(open){
    card.classList.remove('closing');card.classList.add('open');
    markDepth();resizeFigsIn(card);           // settle widths first, so the slide measures the final height
    if(!instant)slide(body,true);
    setTimeout(()=>resizeFigsIn(card),30);
  }else if(instant){
    card.classList.remove('open','closing');markDepth();
  }else{
    card.classList.add('closing');           // caret turns back straight away
    slide(body,false,()=>{if(card.classList.contains('closing')){card.classList.remove('open','closing');markDepth();}});
  }
}
/* <details> problems and model answers slide open and shut like the section cards */
function wireDetails(){
  document.addEventListener('click',e=>{
    const sm=e.target.closest('details.prob>summary');if(!sm)return;
    const d=sm.parentElement,body=$(':scope>.pbody',d);
    if(!body||reducedMotion())return;
    e.preventDefault();
    if(d.open&&!d.classList.contains('closing')){
      d.classList.add('closing');
      slide(body,false,()=>{if(d.classList.contains('closing')){d.open=false;d.classList.remove('closing');}});
    }else{
      d.classList.remove('closing');d.open=true;slide(body,true);mj(d);
    }
  });
}
/* depth-aware width (same system as LATEX_1): a card with an open child gives its padding and side
   borders back, so on a phone the open topic gets nearly the whole screen; and the column widens
   to --wide while an open section holds a figure, derivation player or simulation. */
function markDepth(){
  $$('.mod,.unit').forEach(c=>c.classList.toggle('has-open',c.classList.contains('open')&&
    !!$(':scope>.mbody>.unit.open, :scope>.ubody>.tunit.open',c)));
  const wide=!!$('.mod.open .unit.open figure.fig, .mod.open .unit.open .dv, .mod.open .unit.open .simwrap');
  if(document.body.classList.contains('wide')!==wide){
    document.body.classList.toggle('wide',wide);
    setTimeout(resizeVisibleFigs,380);           // canvases re-measure after the width transition
  }
}
function wireFolds(){
  $$('.mh,.uh,.th').forEach(h=>h.addEventListener('click',e=>{
    if(e.target.closest('[data-tick]'))return;
    const c=cardOf(h);setOpen(c,!c.classList.contains('open')||c.classList.contains('closing'));saveLocal();
  }));
  wireDetails();
}
function restoreFolds(){
  const o=state.open;
  if(o&&Object.keys(o).length){
    Object.keys(o).forEach(id=>{const c=document.getElementById(id);if(c)c.classList.add('open');});
  }else{
    $$('.mod').forEach(m=>m.classList.add('open'));   // first visit: modules open, rest closed
  }
  markDepth();
}
/* canvases inside a collapsed card have zero width — size them when revealed */
function resizeFigsIn(root){
  liveFigs.concat(live3D).forEach(r=>{if(root.contains(r.cv)&&r.cv.clientWidth>0)r.size();});
}
function resizeVisibleFigs(){liveFigs.concat(live3D).forEach(r=>{if(r.cv.clientWidth>0)r.size();});}

function expandAll(on){
  $$('.mod,.unit,.tunit').forEach(c=>{c.classList.remove('closing');c.classList.toggle('open',on);});
  state.open={};
  if(on)$$('.mod,.unit,.tunit').forEach(c=>state.open[c.id]=1);
  markDepth();
  saveLocal();
  setTimeout(resizeVisibleFigs,40);
}

/* ══════════════ painting ══════════════ */
function paintTick(el2,st){el2.classList.toggle('on',st.all);
  el2.classList.toggle('part',!st.all&&st.some);}
function paintAll(){
  TREE.forEach(m=>{
    m.secs.forEach(sec=>{
      sec.topics.forEach(t=>{
        const on=!!state.done[t.id];
        $$(`.tick[data-tick="${t.id}"]`).forEach(b=>{b.classList.toggle('on',on);b.classList.remove('part');});
        const card=document.getElementById(t.id);if(card)card.classList.toggle('done',on);
      });
      const ss=stateOf(leavesOfSec(sec));
      $$(`.tick[data-tick="${sec.id}"]`).forEach(b=>paintTick(b,ss));
      const c=$(`[data-cnt="${sec.id}"]`);
      if(c)c.textContent=sec.topics.length?`${ss.n}/${ss.total}`:'';
      const card=document.getElementById(sec.id);if(card)card.classList.toggle('done',ss.all);
    });
    const ms=stateOf(leavesOfMod(m));
    $$(`.tick[data-tick="${m.id}"]`).forEach(b=>paintTick(b,ms));
    const c=$(`[data-cnt="${m.id}"]`);if(c)c.textContent=`${ms.n}/${ms.total}`;
  });
  const ov=stateOf(allLeaves());
  const pct=ov.total?Math.round(ov.n/ov.total*100):0;
  $('#ringpct').textContent=pct+'%';
  $('#ringp').style.strokeDashoffset=88*(1-pct/100);
  $('#pbar').style.width=pct+'%';
}
const paintProgress=paintAll;

function wireLadders(){
  $$('.ladder').forEach(l=>{
    const rungs=$$('.rung',l);
    $$('.peek',l).forEach(p=>p.onclick=e=>{e.target.closest('.rung').classList.remove('hidden');
      mj(e.target.closest('.rung'));});
    const rev=$('.reveal-next',l),all=$('.reveal-all',l);
    if(rev)rev.onclick=()=>{const h=rungs.find(r=>r.classList.contains('hidden'));
      if(h){h.classList.remove('hidden');mj(h);}
      if(!rungs.some(r=>r.classList.contains('hidden')))rev.style.display='none';};
    if(all)all.onclick=()=>{rungs.forEach(r=>r.classList.remove('hidden'));
      if(rev)rev.style.display='none';mj(l);};
  });
}
function wireChecks(){
  $$('.check').forEach(c=>{
    $$('.conf button',c).forEach(b=>b.onclick=()=>{$$('.conf button',c).forEach(x=>x.classList.remove('sel'));
      b.classList.add('sel');state.conf[c.id]=b.dataset.c;persist();
      const r=$('.reveal',c);if(r)r.style.display='inline-block';});
    const rev=$('.reveal',c);if(rev)rev.onclick=()=>{c.classList.add('open');rev.style.display='none';slide($('.ans',c),true);mj(c);};
    if(state.conf[c.id]){const b=$(`.conf button[data-c="${state.conf[c.id]}"]`,c);if(b)b.classList.add('sel');}
  });
}
function wirePlan(){
  $$('.chip[data-plan]').forEach(ch=>{ch.onclick=()=>{const k=ch.dataset.plan;
    state.plan[k]=!state.plan[k];ch.classList.toggle('done',state.plan[k]);persist();};
    if(state.plan[ch.dataset.plan])ch.classList.add('done');});
}

/* ══════════════ chrome: expand-all, sticky header, download ══════════════ */
function initNav(){
  let allOpen=false;
  const btn=$('#expandall');
  btn.onclick=()=>{allOpen=!allOpen;expandAll(allOpen);
    btn.textContent=allOpen?'⇡':'⇕';btn.title=allOpen?'Collapse everything':'Expand everything';};
  addEventListener('scroll',()=>{$('#top').classList.toggle('scrolled',scrollY>10);},{passive:true});
  initDownload();
}

/* Download a pristine copy. Hidden when already opened as a local file. */
function initDownload(){
  const btn=$('#dl');
  if(location.protocol==='file:'){btn.hidden=true;return;}
  btn.hidden=false;
  btn.onclick=async()=>{
    btn.textContent='…';
    try{
      const res=await fetch(location.href,{cache:'no-store'});
      const txt=await res.text();
      const url=URL.createObjectURL(new Blob([txt],{type:'text/html'}));
      const a=document.createElement('a');
      a.href=url;a.download='CONVEX_OPTIMIZATION_1234.html';document.body.appendChild(a);a.click();
      a.remove();setTimeout(()=>URL.revokeObjectURL(url),4000);
      toast('Downloaded CONVEX_OPTIMIZATION_1234.html');
    }catch(err){toast('Download blocked — use your browser’s Save Page');}
    btn.textContent='⤓';
  };
}

/* ══════════════ theme ══════════════ */
function initTheme(){
  const KEY='co1234_theme';const btn=$('#theme');
  const apply=m=>{if(m==='auto')document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme',m);
    btn.textContent=m==='dark'?'☾':m==='light'?'☀':'◐';
    setTimeout(()=>liveFigs.forEach(r=>r.render&&r.render()),40);};
  let m=localStorage.getItem(KEY)||'auto';apply(m);
  btn.onclick=()=>{m=m==='auto'?'light':m==='light'?'dark':'auto';localStorage.setItem(KEY,m);apply(m);};
  matchMedia('(prefers-color-scheme:dark)').addEventListener('change',()=>{if(m==='auto')apply('auto');});
}

/* ══════════════ sync modal ══════════════ */
function initSync(){
  const modal=$('#idmodal'),inp=$('#idinput'),status=$('#idstatus');
  const open=()=>{inp.value=syncId||'';status.textContent=syncId?('Connected as “'+syncId+'”'):'';modal.classList.add('show');inp.focus();};
  $('#cloud').onclick=open;
  $('#idclose').onclick=()=>modal.classList.remove('show');
  modal.onclick=e=>{if(e.target===modal)modal.classList.remove('show');};
  $('#idsave').onclick=()=>{const v=inp.value.trim().toLowerCase().replace(/[^a-z0-9_\-]/g,'-').slice(0,40);
    if(!v){status.textContent='Enter a code first.';return;}
    syncId=v;localStorage.setItem(LSID,v);status.textContent='Connecting…';
    pull(()=>{migrateOldProgress();paintAll();status.textContent='Synced as “'+v+'” ✓';toast('Synced ✓');
      setTimeout(()=>modal.classList.remove('show'),800);push();});};
  if(syncId)$('#cloud').style.color='var(--pos)';
}

/* ══════════════ boot ══════════════ */
function boot(){
  loadLocal();readPalette();render();initNav();initTheme();initSync();
  if(syncId)pull(()=>{migrateOldProgress();paintAll();});
  // deep link (the study plan's Start sends #<station>): open its module and section first
  if(location.hash){const el=$(location.hash);if(el){
    [el.closest('.mod'),el.classList.contains('unit')?el:null].forEach(c=>{if(c&&!c.classList.contains('open'))setOpen(c,true);});
    setTimeout(()=>el.scrollIntoView(),300);}}
}
if(document.readyState!=='loading')boot();else document.addEventListener('DOMContentLoaded',boot);
})();
