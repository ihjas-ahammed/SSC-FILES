/* ══════════════ DIAGRAMS FOR MODULES III–IV ══════════════
   Spliced into engine.js by build.py, just before setupFig, so Plot, C and capBlock are in scope.
   Same conventions as the M1/M2 registry: ar = height/width, draw(ctx,W,H,st),
   st.step for guided steps, st.opt for chips, st.t for animation.                      */

/* pixel-space helpers */
function arw(ctx,x1,y1,x2,y2,col,w,head){
  head=head||7;ctx.save();ctx.strokeStyle=col;ctx.fillStyle=col;ctx.lineWidth=w||1.8;ctx.lineCap='round';
  ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke();
  const a=Math.atan2(y2-y1,x2-x1);
  ctx.beginPath();ctx.moveTo(x2,y2);
  ctx.lineTo(x2-head*Math.cos(a-.42),y2-head*Math.sin(a-.42));
  ctx.lineTo(x2-head*Math.cos(a+.42),y2-head*Math.sin(a+.42));ctx.closePath();ctx.fill();ctx.restore();
}
function disc(ctx,x,y,r,fill,stroke,lw){
  ctx.save();ctx.beginPath();ctx.arc(x,y,r,0,7);
  if(fill){ctx.fillStyle=fill;ctx.fill();}
  if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=lw||1.4;ctx.stroke();}ctx.restore();
}
function txt(ctx,x,y,s,col,sz,opt){   // $…$ parts are typeset by MathJax (mjtext.js)
  opt=opt||{};MJT.draw(ctx,s,x,y,{color:col||C.inkA(.75),size:sz||10.5,bold:opt.b,align:opt.align||'center',base:opt.base||'middle'});
}
/* capBlock that shrinks each line to fit narrow canvases (phones) */
function capFit(ctx,lines){
  const W=ctx.canvas.clientWidth||ctx.canvas.width;ctx.save();ctx.textBaseline='top';ctx.textAlign='left';let y=7;
  lines.forEach((L,i)=>{if(!L)return;let sz=i===0?11.5:10.5;
    const o=sz=>i===0?{size:sz,bold:1,font:"'Sora',Georgia,serif",color:L[1]||C.ink,base:'top'}:{size:sz,color:L[1]||C.ink,base:'top'};
    const w=MJT.width(ctx,L[0],o(sz)),room=W-20;
    if(w>room)sz=Math.max(7.5,sz*room/w);
    MJT.draw(ctx,L[0],10,y,o(sz));y+=(i===0?17:14)*Math.min(1,sz/(i===0?11.5:10.5))+1;});
  ctx.restore();
}
function rngSeed(seed){let s=seed>>>0||1;return()=>{s=(s*1664525+1013904223)>>>0;return s/4294967296;};}
/* solve x = g(x) monotone by bisection on [a,b] for f(x)=0 */
function bisect(f,a,b,n){let fa=f(a);for(let i=0;i<(n||80);i++){const m=(a+b)/2,fm=f(m);
  if((fm>0)===(fa>0)){a=m;fa=fm;}else b=m;}return (a+b)/2;}
/* spin-½ mean-field order parameter: m = tanh(m/t) */
function mfm(t){if(t>=1)return 0;return bisect(m=>m-Math.tanh(m/t),1e-9,1);}
/* carrier statistics shared by efT and sigmaregions (energies in eV, densities in m^-3) */
const KB_EV=8.617e-5;
function semiFermi(T,P){
  const kT=KB_EV*T,s=Math.pow(T/300,1.5),Nc=P.Nc*s,Nv=P.Nv*s,Ec=P.Eg,Ev=0;
  const ex=x=>Math.exp(Math.max(-700,Math.min(700,x)));
  const g=EF=>{const n=Nc*ex(-(Ec-EF)/kT),p=Nv*ex(-(EF-Ev)/kT);
    const Ndp=P.Nd?P.Nd/(1+2*ex((EF-(Ec-P.Ed))/kT)):0;
    const Nam=P.Na?P.Na/(1+4*ex(((Ev+P.Ea)-EF)/kT)):0;
    return (n+Nam)-(p+Ndp);};
  const EF=bisect(g,Ev-.4,Ec+.4,120);
  const n=Nc*ex(-(Ec-EF)/kT),p=Nv*ex(-(EF-Ev)/kT);
  const Ei=Ev+P.Eg/2+(kT/2)*Math.log(Nv/Nc);
  return {EF,Ei,n,p,ni:Math.sqrt(Nc*Nv)*ex(-P.Eg/(2*kT)),Ec,Ev};
}

Object.assign(FIGS,{

  /* ── M3: the bond picture — pure Si, a broken bond, a moving hole, then P and B dopants ── */
  sibonds:{ar:.66,arN:0.95,
    steps:[
      'Pure silicon at $0$ K. Every atom shares its four valence electrons in four covalent bonds (two dots per bond). No electron is free, so <b>pure Si is an insulator at $0$ K</b>.',
      'Warm it. A bond breaks: one electron gets enough thermal energy ($\\ge E_g\\approx 1.1$ eV) to wander off as a <b>free electron</b>. The empty place it left in the bond is a <b>hole</b>. One broken bond = one electron–hole pair, so $n = p = n_i$.',
      'The hole moves. An electron from a neighbouring bond hops into it, so the vacancy jumps the other way. A field makes these hops drift: the hole moves <em>with</em> the field, as a charge $+e$ would.',
      '<b>n-type.</b> Replace one Si by a Group V atom (P, As, Sb). Four of its five electrons fill the bonds; the fifth is held only weakly (about $0.01$ eV in Ge, $0.03$ eV in Si) and is freed at room temperature. The donor left behind is a <em>fixed</em> $\\mathrm{P^+}$ ion, not a hole.',
      '<b>p-type.</b> A Group III atom (B, Al, Ga, In) has only three valence electrons, so one bond is one electron short: that gap is a hole, which an electron from a neighbouring bond can fill. The acceptor becomes a fixed $\\mathrm{B^-}$ ion and the hole roams.'],
    draw(ctx,W,H,st){
      const s=st.step|0;const P=Plot(ctx,W,H,{l:14,r:14,t:40,b:14});P.clear();
      P.dom(-.6,4.6).ran(-.55,2.55);
      const at=[];for(let i=0;i<5;i++)for(let j=0;j<3;j++)at.push([i,j]);
      const cen=[2,1];
      const hole=s===1?['h',2,1]:s===2?['h',1,1]:s===4?['h',2,1]:null;   // horizontal bond starting at (i,j)
      const bonds=[];at.forEach(([i,j])=>{if(i<4)bonds.push(['h',i,j]);if(j<2)bonds.push(['v',i,j]);});
      bonds.forEach(b=>{
        const [o,i,j]=b,x1=P.X(i),y1=P.Y(j),x2=P.X(o==='h'?i+1:i),y2=P.Y(o==='h'?j:j+1);
        ctx.save();ctx.strokeStyle=C.inkA(.22);ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke();ctx.restore();
        const mx=(x1+x2)/2,my=(y1+y2)/2,px=o==='h'?0:5,py=o==='h'?5:0;
        const isH=hole&&hole[0]===o&&hole[1]===i&&hole[2]===j;
        disc(ctx,mx-px,my-py,3,C.neg);
        if(isH)disc(ctx,mx+px,my+py,4.2,null,C.wall,2);else disc(ctx,mx+px,my+py,3,C.neg);
      });
      at.forEach(([i,j])=>{
        const c=i===cen[0]&&j===cen[1];
        const lab=c&&s===3?'P':c&&s===4?'B':'Si';
        const col=lab==='P'?C.pos:lab==='B'?C.prob:C.inkA(.55);
        disc(ctx,P.X(i),P.Y(j),13,C.bg||'#fff',col,lab==='Si'?1.4:2.4);
        txt(ctx,P.X(i),P.Y(j),lab,col,10.5,{b:1});
        if(c&&s>=3)txt(ctx,P.X(i)+16,P.Y(j)-15,s===3?'+':'−',col,13,{b:1});
      });
      if(s===1||s===2){           /* the escaped electron */
        const fx=P.X(3.45),fy=P.Y(1.62);disc(ctx,fx,fy,4.2,C.neg);txt(ctx,fx+18,fy,'$e^-$',C.neg,10.5,{b:1});
        if(s===1)arw(ctx,P.X(2.55),P.Y(1.06),fx-6,fy+4,C.negA(.6),1.4,6);
      }
      if(s===2){                  /* electron hops from left bond into the old hole: the hole moves left */
        arw(ctx,P.X(1.5),P.Y(1)+5,P.X(2.45),P.Y(1)+5,C.negA(.9),1.6,6);
        arw(ctx,P.X(2.45),P.Y(1)+19,P.X(1.55),P.Y(1)+19,C.wall,1.8,7);
        txt(ctx,P.X(2),P.Y(1)+29,'hole moves ←',C.wall,9.5,{b:1});
      }
      if(s===3){                  /* the loosely bound fifth electron */
        ctx.save();ctx.strokeStyle=C.posA(.7);ctx.setLineDash([3,3]);ctx.lineWidth=1.4;ctx.beginPath();
        ctx.ellipse(P.X(2),P.Y(1),P.X(2.62)-P.X(2),P.Y(.55)-P.Y(1),0,0,7);ctx.stroke();ctx.restore();
        disc(ctx,P.X(2.62),P.Y(1),4.2,C.pos);txt(ctx,P.X(2.5),P.Y(.55)+12,'5th $e^-$',C.pos,9.5,{b:1});
      }
      if(s===4)txt(ctx,P.X(2.5),P.Y(1)+20,'hole',C.wall,9.5,{b:1});
      capFit(ctx,[[s===0?'Pure Si at $0$ K: every electron in a bond':s===1?'Heat breaks a bond: an electron–hole pair'
        :s===2?'A neighbour fills the hole, so the hole moves':s===3?'n-type: a Group V donor (P)':'p-type: a Group III acceptor (B)'],
        [s<3?'dots = bond electrons · ring = hole':s===3?'extra $e^-$ freed at room $T$ → $\\mathrm{P^+}$ fixed, $e^-$ mobile':'missing bond electron = hole → $\\mathrm{B^-}$ fixed, hole mobile',C.inkA(.6)]]);
    }},

  /* ── M3: band diagrams of intrinsic, n- and p-type material with the Fermi level ── */
  semibands:{ar:.62,arN:1.1,opt:{k:'i'},
    chips:[{label:'intrinsic',set:{k:'i'},on:true},{label:'n-type',set:{k:'n'}},{label:'p-type',set:{k:'p'}}],
    draw(ctx,W,H,st){
      const k=st.opt.k;const P=Plot(ctx,W,H,{l:16,r:92,t:44,b:16});P.clear();
      P.dom(0,10).ran(-.8,1.9);
      const Ev=0,Ec=1.1;
      ctx.save();ctx.fillStyle=C.negA(.30);ctx.fillRect(P.X(0),P.Y(Ev),P.X(10)-P.X(0),P.Y(-.78)-P.Y(Ev));
      ctx.fillStyle=C.inkA(.06);ctx.fillRect(P.X(0),P.Y(1.88),P.X(10)-P.X(0),P.Y(Ec)-P.Y(1.88));ctx.restore();
      P.hline(Ev,C.neg,2);P.hline(Ec,C.inkA(.6),2);
      const rl=[];   // right-hand level labels, spread apart below
      rl.push([P.Y(Ec),'$E_c$',C.ink]);rl.push([P.Y(Ev),'$E_v$',C.neg]);
      txt(ctx,P.X(5),P.Y(1.72),'conduction band (empty at $0$ K)',C.inkA(.5),9.5);
      txt(ctx,P.X(5),P.Y(-.6),'valence band (full at $0$ K)',C.inkA(.55),9.5);
      const r=rngSeed(7);
      let EF=.55,nE=2,nH=2;
      if(k==='n'){const Ed=Ec-.32;EF=(Ed+Ec)/2;nE=7;nH=1;
        for(let i=0;i<9;i++){const x=.6+i*1.08;P.seg(x-.28,Ed,x+.28,Ed,C.pos,2.2);
          if(i<7)txt(ctx,P.X(x),P.Y(Ed)-8,'+',C.pos,11,{b:1});else disc(ctx,P.X(x),P.Y(Ed)-4,3.4,C.neg);}
        txt(ctx,P.X(0)+4,P.Y(Ed)+11,'$E_d$ (donor level)',C.pos,9.5,{align:'left',b:1});}
      if(k==='p'){const Ea=Ev+.32;EF=(Ea+Ev)/2;nE=1;nH=7;
        for(let i=0;i<9;i++){const x=.6+i*1.08;P.seg(x-.28,Ea,x+.28,Ea,C.prob,2.2);
          if(i<7){disc(ctx,P.X(x),P.Y(Ea)-4,3.4,C.neg);txt(ctx,P.X(x)+8,P.Y(Ea)-12,'−',C.prob,11,{b:1});}}
        txt(ctx,P.X(0)+4,P.Y(Ea)+11,'$E_a$ (acceptor level)',C.prob,9.5,{align:'left',b:1});}
      for(let i=0;i<nE;i++)disc(ctx,P.X(.5+r()*9),P.Y(Ec+.08+r()*.22),3.6,C.neg);
      for(let i=0;i<nH;i++)disc(ctx,P.X(.5+r()*9),P.Y(Ev-.08-r()*.22),3.8,C.bg||'#fff',C.wall,1.8);
      P.hline(EF,C.wallA(.85),1.6,[6,4]);
      rl.push([P.Y(EF),'$E_F$',C.wall]);rl.sort((a,b)=>a[0]-b[0]);
      for(let i=1;i<rl.length;i++)if(rl[i][0]-rl[i-1][0]<13)rl[i][0]=rl[i-1][0]+13;
      rl.forEach(([y,l,c])=>txt(ctx,P.X(10)+8,y,l,c,10.5,{align:'left',b:1}));
      if(k==='i'){P.hline(.55,C.wallA(0),1);txt(ctx,P.X(5),P.Y(.55)-10,'$E_F$ at mid-gap: $n = p = n_i$',C.wall,9.5,{b:1});}
      capFit(ctx,[[k==='i'?'Intrinsic: thermally made pairs only':k==='n'?'n-type: donor level just below $E_c$':'p-type: acceptor level just above $E_v$'],
        [k==='i'?'● electron in CB   ○ hole in VB   ($n = p$)':k==='n'?'donors ionised ($+$) → electrons majority, holes minority':'acceptors ionised ($-$) → holes majority, electrons minority',C.inkA(.6)]]);
    }},

  /* ── M3: random thermal motion with and without a field — the drift is a tiny bias ── */
  drift:{ar:.56,arN:0.9,anim:true,
    draw(ctx,W,H,st){
      const P=Plot(ctx,W,H,{l:12,r:12,t:44,b:26});P.clear();P.dom(-1,1).ran(-.62,.62);
      const NF=170,lam=.045,acc=.0034;
      if(!st.pts){const r=rngSeed(11),A=[[.62,0]],B=[[.62,0]];
        let a=[.62,0],b=[.62,0];
        for(let i=0;i<NF;i++){const th=r()*6.283,dt=-Math.log(1-r()*.999)+.05,vx=Math.cos(th)*lam,vy=Math.sin(th)*lam;
          a=[a[0]+vx*dt,a[1]+vy*dt];A.push(a);
          for(let k=1;k<=5;k++){const tt=dt*k/5;B.push([b[0]+vx*tt-acc*tt*tt/2*8,b[1]+vy*tt]);}   // field pushes electrons left
          b=B[B.length-1];}
        st.pts={A,B};st.t=Math.max(st.t,3);}
      const n=Math.min(NF,Math.floor(st.t*22));
      if(st.t*22>NF+40){st.t=0;}
      ctx.save();ctx.beginPath();ctx.rect(P.X(-1),P.Y(.62),P.X(1)-P.X(-1),P.Y(-.62)-P.Y(.62));ctx.clip();
      const path=(pts,m,col,w)=>{ctx.save();ctx.strokeStyle=col;ctx.lineWidth=w;ctx.lineJoin='round';ctx.beginPath();
        pts.slice(0,m+1).forEach((p,i)=>i?ctx.lineTo(P.X(p[0]),P.Y(p[1])):ctx.moveTo(P.X(p[0]),P.Y(p[1])));ctx.stroke();ctx.restore();};
      path(st.pts.A,n,C.inkA(.28),1.3);path(st.pts.B,n*5,C.negA(.9),1.6);
      const a=st.pts.A[n],b=st.pts.B[n*5];
      disc(ctx,P.X(.62),P.Y(0),3.5,C.inkA(.5));
      disc(ctx,P.X(a[0]),P.Y(a[1]),4,C.inkA(.55));disc(ctx,P.X(b[0]),P.Y(b[1]),4.4,C.neg);
      if(n>20)arw(ctx,P.X(a[0]),P.Y(a[1]),P.X(b[0]),P.Y(b[1]),C.wallA(.9),1.6,7);
      ctx.restore();
      arw(ctx,P.X(-.9),H-12,P.X(-.45),H-12,C.prob,2,8);txt(ctx,P.X(-.36),H-12,'$E$',C.prob,11,{b:1,align:'left'});
      txt(ctx,P.X(.55),H-12,W<520?'grey: $E = 0$ · teal: $E$ on':'grey: no field · teal: same collisions, field on',C.inkA(.55),9.5);
      capFit(ctx,[['Drift: a small bias on a random walk'],
        ['$v_{\\text{th}}\\sim 10^5$ m/s $\\gg v_d = μE$',C.inkA(.6)],
        ['red arrow = what the field adds',C.wallA(.85)]]);
    }},

  /* ── M3: D(E) × f(E) = carriers per energy, for intrinsic, n- and p-type ── */
  carriers:{ar:.66,arN:1.2,opt:{k:'i'},
    chips:[{label:'intrinsic',set:{k:'i'},on:true},{label:'n-type',set:{k:'n'}},{label:'p-type',set:{k:'p'}}],
    draw(ctx,W,H,st){
      ctx.clearRect(0,0,W,H);
      const k=st.opt.k,EF=k==='i'?.5:k==='n'?.86:.14,kT=.09,Ec=1,Ev=0;
      const D=E=>E>Ec?Math.sqrt(E-Ec):E<Ev?Math.sqrt(Ev-E):0;
      const f=E=>1/(1+Math.exp((E-EF)/kT));
      let big=0;for(let E=-1;E<=2;E+=.002){big=Math.max(big,D(E)*f(E)*(E>Ec),D(E)*(1-f(E))*(E<Ev));}
      const nar=W<520,cols=[[nar?'$D(E)$':'$D(E)$: states',0],[nar?'$f(E)$':'$f(E)$: chance filled',1],[nar?'$Df,\\ D(1-f)$':'$n(E) = Df,\\quad p(E) = D(1-f)$',2]];
      const w=W/3;
      cols.forEach(([title,i])=>{ctx.save();ctx.translate(i*w,0);
        const P=Plot(ctx,w,H,{l:i?10:30,r:10,t:66,b:20});P.dom(0,1.05).ran(-.9,1.9);P.axes();
        P.hline(Ec,C.inkA(.35),1,[3,3]);P.hline(Ev,C.inkA(.35),1,[3,3]);
        if(i===0){P.curve(()=>null);ctx.save();ctx.strokeStyle=C.ink;ctx.lineWidth=2;
            [[Ec,1.9],[-.9,Ev]].forEach(([a,b])=>{ctx.beginPath();for(let E=a;E<=b;E+=.01){const x=Math.min(1,D(E)/1.0);
              const px=P.X(x),py=P.Y(E);E===a?ctx.moveTo(px,py):ctx.lineTo(px,py);}ctx.stroke();});ctx.restore();
          txt(ctx,P.X(0)-14,P.Y(Ec),'$E_c$',C.ink,9.5,{b:1});txt(ctx,P.X(0)-14,P.Y(Ev),'$E_v$',C.ink,9.5,{b:1});
          txt(ctx,P.X(.5),P.Y(EF>.5?.25:.75),'gap: no states',C.inkA(.45),9);}
        if(i===1){ctx.save();ctx.strokeStyle=C.prob;ctx.lineWidth=2.2;ctx.beginPath();
          for(let E=-.9;E<=1.9;E+=.005){const px=P.X(f(E)),py=P.Y(E);E===-.9?ctx.moveTo(px,py):ctx.lineTo(px,py);}ctx.stroke();ctx.restore();
          txt(ctx,P.X(.5)+10,P.Y(EF)-9,'$f = \\tfrac12$',C.prob,9,{align:'left'});}
        if(i===2){const lobe=(sel,col)=>{ctx.save();ctx.fillStyle=col;ctx.beginPath();const a=sel?Ec:-.9,b=sel?1.9:Ev;ctx.moveTo(P.X(0),P.Y(a));for(let E=a;E<=b;E+=.004){const v=(sel?D(E)*f(E):D(E)*(1-f(E)))/big*.95;ctx.lineTo(P.X(v),P.Y(E));}
            ctx.lineTo(P.X(0),P.Y(b));ctx.closePath();ctx.fill();ctx.restore();};
          lobe(1,C.negA(.7));lobe(0,C.wallA(.6));
          const n=Math.exp(-(Ec-EF)/kT),p=Math.exp(-(EF-Ev)/kT);
          txt(ctx,P.X(.55),P.Y(1.55),'n',C.neg,11,{b:1});txt(ctx,P.X(.55),P.Y(-.55),'p',C.wall,11,{b:1});
          txt(ctx,P.X(.5),P.Y(EF>.5?.25:.75),'$n/p = '+(n/p>=10||n/p<.1?(n/p).toExponential(0).replace(/e\+?(-?)(\d+)/,'\\times 10^{$1$2}'):(n/p).toFixed(1))+'$',C.inkA(.7),9.5,{b:1});}
        P.hline(EF,C.wallA(.8),1.5,[5,3]);
        if(i===0)txt(ctx,P.X(0)-14,P.Y(EF),'$E_F$',C.wall,9.5,{b:1});
        txt(ctx,w/2,54,title,C.inkA(.75),9.5,{b:1});
        ctx.restore();});
      capFit(ctx,[[k==='i'?'Intrinsic: $E_F$ mid-gap, equal lobes':k==='n'?'n-type: $E_F$ near $E_c$, the electron lobe swells':'p-type: $E_F$ near $E_v$, the hole lobe swells'],
        ['kT exaggerated; both lobes to one scale',C.inkA(.55)]]);
    }},

  /* ── M3: Fermi level against temperature for doped Si (exact charge neutrality) ── */
  efT:{ar:.66,arN:1.0,
    draw(ctx,W,H){
      const P=Plot(ctx,W,H,{l:44,r:66,t:46,b:30});P.clear();
      P.dom(0,700).ran(-.62,.62).grid(7,6);P.axes();
      const Si={Eg:1.12,Nc:2.8e25,Nv:1.04e25,Ed:.045,Ea:.045};
            const mk=(par,col,w)=>P.curve(T=>{if(T<15)return null;const r=semiFermi(T,par);return r.EF-r.Ei;},col,w);
      const cs=[[1e20,.45],[1e22,.75],[1e24,1]];
      cs.forEach(([N,a])=>{mk(Object.assign({},Si,{Nd:N}),C.negA(a),2);mk(Object.assign({},Si,{Na:N}),C.posA(a),2);});
      P.hline(.56,C.inkA(.55),1.4,[5,3]);P.hline(-.56,C.inkA(.55),1.4,[5,3]);P.hline(0,C.wallA(.7),1.4,[2,3]);
      txt(ctx,P.X(700)+6,P.Y(.56),'$E_c$',C.ink,10,{align:'left',b:1});txt(ctx,P.X(700)+6,P.Y(-.56),'$E_v$',C.ink,10,{align:'left',b:1});
      txt(ctx,P.X(700)+6,P.Y(0),'$E_i$',C.wall,10,{align:'left',b:1});
      txt(ctx,P.X(120),P.Y(.36),'n-type',C.neg,10,{b:1});txt(ctx,P.X(120),P.Y(-.36),'p-type',C.pos,10,{b:1});
      [[1e20,'$10^{20}\\,\\mathrm{m^{-3}}$'],[1e22,'$10^{22}$'],[1e24,'$10^{24}$']].forEach(([N,l])=>{const r=semiFermi(330,Object.assign({},Si,{Nd:N}));
        txt(ctx,P.X(330),P.Y(r.EF-r.Ei)-9,l,C.neg,9,{b:1});});
      [-.4,-.2,.2,.4].forEach(v=>txt(ctx,P.X(0)-5,P.Y(v),'$'+(v>0?'+':'')+v.toFixed(1)+'$',C.inkA(.55),9,{align:'right'}));
      ['0','100','200','300','400','500','600','700'].forEach((s,i)=>txt(ctx,P.X(i*100),P.Y(-.62)+11,'$'+s+'$',C.inkA(.55),9));
      txt(ctx,P.X(350),H-6,'$T$ (K)',C.inkA(.6),9.5);
      ctx.save();ctx.translate(12,P.Y(0));ctx.rotate(-Math.PI/2);txt(ctx,0,0,'$E_F - E_i$ (eV)',C.inkA(.6),9.5);ctx.restore();
      capFit(ctx,[['Silicon: where $E_F$ sits as $T$ and doping change'],
        ['heavier doping → nearer the band edge; heating → back to $E_i$',C.inkA(.6)]]);
    }},

  /* ── M3: conductivity of n-type Ge against temperature, the book's A-B-C-D regions ── */
  sigmaregions:{ar:.62,arN:0.95,
    draw(ctx,W,H){
      const P=Plot(ctx,W,H,{l:40,r:16,t:46,b:30});P.clear();
      const Ge={Eg:.66,Nc:1.04e25,Nv:6e24,Ed:.01,Nd:1e21};
      const mu=(T,m3)=>{const L=m3*Math.pow(T/300,-1.5),I=3*Math.pow(T/40,1.5);return 1/(1/L+1/I);};
      const sig=T=>{const r=semiFermi(T,Ge);return Math.log10(1.602e-19*(r.n*mu(T,.39)+r.p*mu(T,.19)));};
      const lx=x=>Math.log10(x);
      P.dom(lx(5),lx(800)).ran(-3,4.4).grid(6,5);
      P.seg(lx(5),-3,lx(5),4.4,C.axis,1.4);P.seg(lx(5),-3,lx(800),-3,C.axis,1.4);
      P.curve(x=>sig(Math.pow(10,x)),C.neg,2.6);
      [10,30,100,300,800].forEach(T=>txt(ctx,P.X(lx(T)),P.Y(-3)+11,'$'+T+'$',C.inkA(.55),9));
      [-2,0,2,4].forEach(v=>txt(ctx,P.X(lx(5))-5,P.Y(v),'$'+v+'$',C.inkA(.55),9,{align:'right'}));
      txt(ctx,(P.X(lx(4))+P.X(lx(800)))/2,H-6,'$T$ (K, log scale)',C.inkA(.6),9.5);
      ctx.save();ctx.translate(12,P.Y(1.8));ctx.rotate(-Math.PI/2);txt(ctx,0,0,'$\\log_{10}σ$ (S/m)',C.inkA(.6),9.5);ctx.restore();
      const mark=(T,l,dy)=>{const y=sig(T);P.dot(lx(T),y,C.wall,4);txt(ctx,P.X(lx(T)),P.Y(y)+dy,l,C.wall,11,{b:1});};
      mark(6.5,'A',-12);mark(45,'B',-12);mark(330,'C',14);mark(700,'D',14);
      txt(ctx,P.X(lx(14)),P.Y(-.6),'donors ionising',C.inkA(.6),9,{align:'left'});
      txt(ctx,P.X(lx(120)),P.Y(3.2),'$n\\approx N_d$ fixed, $μ$ falls',C.inkA(.6),9);
      txt(ctx,P.X(lx(480)),P.Y(1.05),'intrinsic',C.inkA(.6),9);
      capFit(ctx,[['n-type Ge ($N_d = 10^{21}\\,\\mathrm{m^{-3}}$): $σ$ against $T$'],
        ['A→B ionisation · B→C plateau (working range) · C→D intrinsic',C.inkA(.6)]]);
    }},

  /* ── M4: how the moments are arranged in each kind of magnetism ── */
  magorder:{ar:.6,arN:0.95,opt:{k:'para',B:0},
    chips:[{label:'dia',set:{k:'dia'}},{label:'para',set:{k:'para'},on:true},{label:'ferro',set:{k:'ferro'}},
      {label:'antiferro',set:{k:'anti'}},{label:'ferri',set:{k:'ferri'}},{sep:'field'},{label:'$B = 0$',set:{B:0},on:true},{label:'$B$ on',set:{B:1}}],
    draw(ctx,W,H,st){
      ctx.clearRect(0,0,W,H);const k=st.opt.k,B=st.opt.B;
      const r=rngSeed(5),nx=7,ny=3,x0=W*.08,x1=W*.80,y0=86,y1=H-36,dx=(x1-x0)/(nx-1),dy=(y1-y0)/(ny-1);
      for(let j=0;j<ny;j++)for(let i=0;i<nx;i++){
        const x=x0+i*dx,y=y0+j*dy,alt=(i+j)%2;disc(ctx,x,y,4,C.inkA(.25));
        let ang=null,len=Math.min(dx,dy)*.36,col=C.prob;
        const rnd=r()*6.283;
        if(k==='para'){ang=B?-Math.PI/2+(rnd-3.14)*.55:rnd;col=C.pos;}
        if(k==='ferro'){ang=-Math.PI/2;col=C.neg;}
        if(k==='anti'){ang=alt?Math.PI/2:-Math.PI/2;col=alt?C.wall:C.neg;}
        if(k==='ferri'){ang=alt?Math.PI/2:-Math.PI/2;col=alt?C.wall:C.neg;if(alt)len*=.55;}
        if(k==='dia'){if(B){ang=Math.PI/2;len*=.32;col=C.prob;}}
        if(ang!=null)arw(ctx,x-Math.cos(ang)*len,y-Math.sin(ang)*len,x+Math.cos(ang)*len,y+Math.sin(ang)*len,col,2,6);
      }
      if(B){arw(ctx,W*.91,H-26,W*.91,64,C.prob,2.4,9);txt(ctx,W*.91+2,52,'$B$',C.prob,12,{b:1});}
      const info={dia:['Diamagnetic: no permanent moments','$B$ induces tiny moments opposing it (Lenz) · $χ\\approx -10^{-5}$, $T$-independent'],
        para:['Paramagnetic: moments at random','$B$ tilts them a little against thermal disorder · $χ = C/T$'],
        ferro:['Ferromagnetic: neighbours parallel ($J_e > 0$)','spontaneous $M$ below $T_c$ · $χ = C/(T - T_c)$ above'],
        anti:['Antiferromagnetic: equal and antiparallel','two sublattices cancel · cusp in $χ$ at $T_N$'],
        ferri:['Ferrimagnetic: antiparallel but unequal','net moment survives ($\\mathrm{Fe_3O_4}$: $4μ_B$ per formula unit)']}[k];
      capFit(ctx,[[info[0]],[info[1],C.inkA(.6)]]);
    }},

  /* ── M4: Langevin and spin-½ Brillouin magnetisation curves ── */
  langevin:{ar:.6,arN:0.9,
    draw(ctx,W,H){
      const P=Plot(ctx,W,H,{l:38,r:16,t:46,b:30});P.clear();P.dom(0,8).ran(0,1.12).grid(8,4);P.axes();
      const L=a=>a<1e-4?a/3:1/Math.tanh(a)-1/a;
      P.hline(1,C.inkA(.4),1.4,[5,3]);
      P.curve(a=>a/3,C.inkA(.5),1.5,[4,3]);
      P.curve(L,C.pos,2.6);P.curve(Math.tanh,C.prob,2.2);
      txt(ctx,P.X(4.4),P.Y(.66),W<520?'$L(a)$ classical':'$L(a) = \\coth a - 1/a$  (classical)',C.pos,9.5,{b:1,align:'left'});
      txt(ctx,P.X(3.3),P.Y(.9),W<520?'$\\tanh a$ (spin $\\tfrac12$)':'$\\tanh a$  (spin $\\tfrac12$, $J = \\tfrac12$)',C.prob,9.5,{b:1,align:'left'});
      txt(ctx,P.X(1.2),P.Y(.25),'slope $a/3$ → Curie law',C.inkA(.6),9.5,{align:'left'});
      txt(ctx,P.X(7.8),P.Y(1)-9,'$M = Nμ$ (saturation)',C.inkA(.6),9.5,{align:'right'});
      [0,2,4,6,8].forEach(v=>txt(ctx,P.X(v),P.Y(0)+11,'$'+v+'$',C.inkA(.55),9));
      txt(ctx,P.X(4),H-6,'$a = μB/kT$',C.inkA(.6),9.5);
      ctx.save();ctx.translate(12,P.Y(.55));ctx.rotate(-Math.PI/2);txt(ctx,0,0,'$M/Nμ$',C.inkA(.6),9.5);ctx.restore();
      capFit(ctx,[['Alignment against thermal disorder'],
        ['$1$ T at $300$ K: $μ_BB/kT\\approx 0.002$ — deep in the linear (Curie) part',C.inkA(.6)]]);
    }},

  /* ── M4: Weiss — graphical solution for the spontaneous magnetisation ── */
  weiss:{ar:.6,arN:1.35,opt:{t:.7},
    chips:[{label:'$T < T_c$',set:{t:.7},on:true},{label:'$T = T_c$',set:{t:1}},{label:'$T > T_c$',set:{t:1.4}}],
    draw(ctx,W,H,st){
      ctx.clearRect(0,0,W,H);const t=st.opt.t,m=mfm(t),nar=W<520,Ha=nar?H*.6:H;   // phones: the two panels stack
      ctx.save();const Pa=Plot(ctx,nar?W:W*.64,Ha,{l:34,r:10,t:50,b:26});
      Pa.dom(0,3).ran(0,1.12).grid(6,4);Pa.axes();
      Pa.curve(Math.tanh,C.neg,2.6);
      Pa.curve(x=>t*x,C.wall,2,[6,3]);
      if(m>0){Pa.dot(m/t,m,C.wall,5);txt(ctx,Pa.X(m/t)+8,Pa.Y(m)+12,'$M_s(T)$',C.wall,10,{b:1,align:'left'});}
      Pa.dot(0,0,C.inkA(.6),4);
      txt(ctx,Pa.X(2.15),Pa.Y(Math.tanh(2.15))-10,'$M = M_s(0)\\tanh x$',C.neg,9.5,{b:1});
      txt(ctx,Pa.X(Math.min(2.7,.62/t))+6,Pa.Y(Math.min(.62,t*2.7)),'$M\\propto (T/λ)\\,x$',C.wall,9.5,{b:1,align:'left'});
      txt(ctx,Pa.X(1.5),Ha-6,'$x = μλM/kT$',C.inkA(.6),9.5);
      ctx.restore();
      ctx.save();if(nar)ctx.translate(0,Ha);else ctx.translate(W*.64,0);const Hb=nar?H-Ha:H;
      const Pb=Plot(ctx,nar?W:W*.36,Hb,{l:nar?34:28,r:12,t:nar?18:50,b:26});
      Pb.dom(0,1.5).ran(0,1.12).grid(3,4);Pb.axes();
      Pb.curve(tt=>tt<1?mfm(tt):0,C.neg,2.4);Pb.vline(1,C.inkA(.35),1,[3,3]);Pb.dot(t,m,C.wall,5);
      txt(ctx,Pb.X(1)+4,Pb.Y(.12),'$T_c$',C.inkA(.7),9.5,{b:1,align:'left'});txt(ctx,Pb.X(.75),Hb-6,'$T/T_c$',C.inkA(.6),9.5);
      txt(ctx,Pb.X(.08),Pb.Y(1.06),'$M_s(T)/M_s(0)$',C.inkA(.6),9,{align:'left'});
      ctx.restore();
      capFit(ctx,[[t<1?'$T < T_c$: the line cuts the curve again → spontaneous $M$':t===1?'$T = T_c$: the line is tangent at the origin':'$T > T_c$: only $M = 0$ — paramagnetic (Curie–Weiss)'],
        ['the line’s slope $\\propto T$: steeper as it warms',C.inkA(.6)]]);
    }},

  /* ── M4: why iron is unmagnetised — domains, closure, wall motion, rotation ── */
  domains:{ar:.62,arN:1.0,
    steps:[
      'One single domain. Fully magnetised — but its poles drive a big stray field through the space outside, and that field stores a lot of energy.',
      'Split into two antiparallel domains. The stray field now closes over short loops at the ends: roughly half the field energy, paid for with one domain wall.',
      'Add triangular <b>closure domains</b> (Landau pattern). The magnetisation runs round in a loop, so no poles appear at the surface and the stray field vanishes. Net moment: zero. This is an "unmagnetised" piece of iron.',
      'Apply a modest field $H\\to$. The domain already pointing along $H$ grows by <b>wall movement</b>: the walls slide, the others shrink. At small fields this is reversible; larger jumps are not, which is where hysteresis comes from.',
      'A strong field. The last domains <b>rotate</b> their magnetisation out of the easy direction into the field: one domain, $M = M_s$. Take the field away and the walls do not all slide back: remanence.'],
    draw(ctx,W,H,st){
      ctx.clearRect(0,0,W,H);const s=st.step|0;
      const S=Math.min(W*.42,H*.62),cx=W*.42,cy=H*.56,L=cx-S/2,R=cx+S/2,T=cy-S/2,Bt=cy+S/2;
      const poly=(pts,col)=>{ctx.save();ctx.beginPath();pts.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.closePath();
        ctx.fillStyle=col;ctx.fill();ctx.strokeStyle=C.inkA(.55);ctx.lineWidth=1.4;ctx.stroke();ctx.restore();};
      const ar=(x,y,dx,dy,col)=>arw(ctx,x-dx,y-dy,x+dx,y+dy,col||C.neg,2.4,8);
      const stray=(x1,y1,x2,y2,bulge)=>{ctx.save();ctx.strokeStyle=C.probA(.55);ctx.lineWidth=1.3;ctx.setLineDash([4,3]);
        ctx.beginPath();ctx.moveTo(x1,y1);ctx.bezierCurveTo(x1+bulge,y1-Math.abs(bulge)*.5*Math.sign(y1-cy||-1),x2+bulge,y2+Math.abs(bulge)*.5,x2,y2);ctx.stroke();ctx.restore();};
      if(s===0){[-1,1].forEach(sg=>{[.55,.9].forEach(b=>{ctx.save();ctx.strokeStyle=C.probA(.55);ctx.lineWidth=1.3;ctx.setLineDash([4,3]);
          ctx.beginPath();ctx.moveTo(cx+sg*S*.2,T);ctx.bezierCurveTo(cx+sg*S*(.2+b),T-S*.45*b,cx+sg*S*(.2+b),Bt+S*.45*b,cx+sg*S*.2,Bt);ctx.stroke();ctx.restore();});});
        poly([[L,T],[R,T],[R,Bt],[L,Bt]],C.bg||'#fff');poly([[L,T],[R,T],[R,Bt],[L,Bt]],C.negA(.14));ar(cx,cy,0,-S*.3);
        txt(ctx,cx,T-9,'$N$',C.wall,11,{b:1});txt(ctx,cx,Bt+10,'$S$',C.prob,11,{b:1});}
      if(s===1){poly([[L,T],[cx,T],[cx,Bt],[L,Bt]],C.negA(.14));poly([[cx,T],[R,T],[R,Bt],[cx,Bt]],C.wallA(.12));
        ar(cx-S/4,cy,0,-S*.3);ar(cx+S/4,cy,0,S*.3,C.wall);
        [T,Bt].forEach(y=>{ctx.save();ctx.strokeStyle=C.probA(.55);ctx.lineWidth=1.3;ctx.setLineDash([4,3]);ctx.beginPath();
          ctx.ellipse(cx,y,S*.25,S*.13,0,y===T?Math.PI:0,y===T?2*Math.PI:Math.PI);ctx.stroke();ctx.restore();});}
      if(s>=2&&s<=3){const py=s===2?cy:cy+S*.24,P0=[cx,py];
        poly([[L,T],[R,T],P0],C.negA(.18));poly([[R,T],[R,Bt],P0],C.wallA(.10));poly([[R,Bt],[L,Bt],P0],C.posA(.12));poly([[L,Bt],[L,T],P0],C.probA(.10));
        ar(cx,(T*2+py)/3,S*.13,0);ar((R*2+cx)/3,cy+(s===3?S*.08:0),0,S*.09,C.wall);ar(cx,(Bt*2+py)/3,-S*.09,0,C.pos);ar((L*2+cx)/3,cy+(s===3?S*.08:0),0,-S*.09,C.prob);}
      if(s===4){poly([[L,T],[R,T],[R,Bt],[L,Bt]],C.negA(.18));[-.25,0,.25].forEach(f=>ar(cx,cy+f*S,S*.3,0));}
      if(s>=3){arw(ctx,W*.78,H*.5,W*.95,H*.5,C.prob,2.6,9);txt(ctx,W*.865,H*.5-14,'$\\mathbf H$',C.prob,12,{b:1});}
      capFit(ctx,[[['One domain: big stray field','Two domains: stray field halved','Closure domains: no stray field, $M = 0$','Field on: favourable domain grows (walls move)','Strong field: rotation → saturation $M_s$'][s]],
        ['domain energy = exchange + field + anisotropy + wall + magnetostriction',C.inkA(.6)]]);
    }},

  /* ── M4: antiferromagnet χ∥, χ⊥ and the cusp; ferrimagnet sublattices ── */
  sublat:{ar:.6,arN:0.95,opt:{k:'af'},
    chips:[{label:'antiferromagnet',set:{k:'af'},on:true},{label:'ferrimagnet ($\\mathrm{Fe_3O_4}$)',set:{k:'fi'}}],
    draw(ctx,W,H,st){
      const P=Plot(ctx,W,H,{l:38,r:16,t:46,b:36});P.clear();const k=st.opt.k;
      if(k==='af'){P.dom(0,2.5).ran(0,1.15).grid(5,4);P.axes();
        const par=t=>{if(t>=1)return 2/(t+1);const m=mfm(t),q=1-m*m;return 2*q/(t+q);};
        P.curve(t=>t<1?1:null,C.prob,2.2);P.curve(par,C.neg,2.6);
        P.curve(t=>t<1?(par(t)+2)/3:null,C.inkA(.45),1.5,[4,3]);
        P.vline(1,C.wallA(.5),1.2,[3,3]);P.dot(1,1,C.wall,4.5);
        txt(ctx,P.X(1),P.Y(0)+11,'$T_N$',C.wall,10,{b:1});
        txt(ctx,P.X(.5),P.Y(1)-9,'$χ_\\perp\\approx$ constant',C.prob,9.5,{b:1});txt(ctx,P.X(.42),P.Y(.25),'$χ_\\parallel\\to 0$ at $0$ K',C.neg,9.5,{b:1});
        txt(ctx,P.X(.55),P.Y(.72),'powder',C.inkA(.55),9);
        txt(ctx,P.X(1.85),P.Y(.85),'$χ = 2C/(T + θ)$',C.neg,9.5,{b:1});
        txt(ctx,P.X(1.25),H-6,'$T/T_N$',C.inkA(.6),9.5);
        capFit(ctx,[['Antiferromagnet: $χ$ peaks (a cusp, not a divergence) at $T_N$'],['below $T_N$ it depends on the field direction',C.inkA(.6)]]);}
      else{P.dom(0,1.3).ran(-6,10).grid(4,4);P.axes();
        P.curve(t=>9*mfm(t),C.neg,2.4);P.curve(t=>-5*mfm(t),C.wall,2.4);P.curve(t=>4*mfm(t),C.prob,2.8);
        txt(ctx,P.X(.03),P.Y(9)-9,'B sites: $\\mathrm{Fe^{3+}} + \\mathrm{Fe^{2+}} = 9μ_B$',C.neg,9.5,{b:1,align:'left'});
        txt(ctx,P.X(.03),P.Y(-5)+11,'A site: $\\mathrm{Fe^{3+}} = -5μ_B$',C.wall,9.5,{b:1,align:'left'});
        txt(ctx,P.X(.03),P.Y(4)-10,'net $= 4μ_B$',C.prob,9.5,{b:1,align:'left'});
        P.vline(1,C.inkA(.35),1,[3,3]);txt(ctx,P.X(1),P.Y(-6)+11,'$T_c$',C.inkA(.7),9.5,{b:1});
        txt(ctx,P.X(.65),H-6,'$T/T_c$',C.inkA(.6),9.5);
        ctx.save();ctx.translate(12,P.Y(2));ctx.rotate(-Math.PI/2);txt(ctx,0,0,'$μ_B$ per formula unit',C.inkA(.6),9.5);ctx.restore();
        capFit(ctx,[['Ferrimagnet: opposed sublattices that do not cancel'],['outwardly a ferromagnet: spontaneous $M$, Curie point, hysteresis',C.inkA(.6)]]);}
    }},

  /* ── M4: the Lorentz local field built up piece by piece ── */
  lorentz:{ar:.66,arN:1.3,
    steps:[
      'A slab of dielectric between capacitor plates. The free charges on the plates make the external field $E_0$.',
      'The slab polarises. Its bound surface charges face the plates with the opposite sign and make a depolarising field $E_1 = -P/ε_0$ that opposes $E_0$. The macroscopic field is $E = E_0 + E_1$.',
      'Now look at one atom. Cut an imaginary sphere around it, big compared with an atom. The material outside is a continuum; its bound charges on the sphere’s wall ($+$ on top, $-$ below) give the <b>Lorentz cavity field</b> $E_2 = +P/3ε_0$, <em>along</em> $E$.',
      'The dipoles inside the sphere: for a cubic site their fields cancel, $E_3 = 0$. So the atom feels <b>$E_{\\text{loc}} = E + P/3ε_0$</b>, more than the average field $E$.'],
    draw(ctx,W,H,st){
      ctx.clearRect(0,0,W,H);const s=st.step|0;
      const nar=W<520,L=W*.08,R=nar?W*.92:W*.70,T=60,B=nar?H*.58:H-30,cx=(L+R)/2,cy=(T+B)/2,rad=Math.min(R-L,B-T)*.24;
      ctx.save();ctx.fillStyle=C.inkA(.75);ctx.fillRect(L,T-10,R-L,6);ctx.fillRect(L,B+4,R-L,6);ctx.restore();
      for(let i=0;i<9;i++){const x=L+(i+.5)*(R-L)/9;txt(ctx,x,T-16,'+',C.wall,11,{b:1});txt(ctx,x,B+18,'−',C.prob,12,{b:1});}
      if(s>=1){ctx.save();ctx.fillStyle=C.posA(.10);ctx.fillRect(L+8,T+8,R-L-16,B-T-16);ctx.restore();
        for(let i=0;i<9;i++){const x=L+(i+.5)*(R-L)/9;txt(ctx,x,T+15,'−',C.prob,11,{b:1});txt(ctx,x,B-14,'+',C.wall,11,{b:1});}
        for(let j=0;j<3;j++)for(let i=0;i<6;i++){const x=L+(i+.5)*(R-L)/6,y=T+40+j*(B-T-80)/2;
          if(s>=2&&Math.hypot(x-cx,y-cy)<rad+10)continue;arw(ctx,x,y-9,x,y+9,C.posA(.55),1.4,5);}}
      if(s>=2){ctx.save();ctx.fillStyle=C.bg||'#fff';ctx.beginPath();ctx.arc(cx,cy,rad,0,7);ctx.fill();
        ctx.strokeStyle=C.inkA(.6);ctx.setLineDash([5,3]);ctx.lineWidth=1.4;ctx.stroke();ctx.restore();
        for(let i=0;i<10;i++){const a=Math.PI*(i+.5)/10;const xs=cx+Math.cos(a+Math.PI)*rad*1.0,ys=cy-Math.sin(a)*rad*.98;
          txt(ctx,cx-Math.cos(a)*rad*.86,cy-Math.sin(a)*rad*.86,'+',C.wall,9.5,{b:1});
          txt(ctx,cx-Math.cos(a)*rad*.86,cy+Math.sin(a)*rad*.86,'−',C.prob,10,{b:1});}
        disc(ctx,cx,cy,5,C.neg);}
      const col=nar?W*.1:W*.76;let y=nar?B+26:T+4;const step=nar?32:40,len=nar?20:26;
      const row=(lab,c,on)=>{if(!on)return;arw(ctx,col,y,col,y+len,c,2.2,7);txt(ctx,col+10,y+len/2,lab,c,10,{b:1,align:'left'});y+=step;};
      row('$E_0$ (plates)',C.inkA(.75),true);
      if(s>=1){arw(ctx,col,y+len,col,y+4,C.prob,2.2,7);txt(ctx,col+10,y+len/2,'$E_1 = -P/ε_0$',C.prob,10,{b:1,align:'left'});y+=step;}
      row('$E_2 = +P/3ε_0$',C.wall,s>=2);
      if(s>=3){txt(ctx,col+10,y+6,'$E_3 = 0$ (cubic)',C.inkA(.6),10,{b:1,align:'left'});y+=26;
        txt(ctx,col,y+8,'$E_{\\text{loc}} = E + P/3ε_0$',C.neg,10.5,{b:1,align:'left'});}
      capFit(ctx,[[['External field from the plates','Polarised slab: $E = E_0 + E_1$','Lorentz cavity around one atom','The field the atom really feels'][s]]]);
    }},

  /* ── M4: Clausius–Mossotti — ε_r against Nα/3ε₀, and the catastrophe ── */
  cm:{ar:.56,arN:0.9,
    draw(ctx,W,H){
      const P=Plot(ctx,W,H,{l:38,r:16,t:46,b:30});P.clear();P.dom(0,1).ran(1,16).grid(5,5);P.axes();
      P.curve(x=>x<.995?(1+2*x)/(1-x):null,C.neg,2.6);P.curve(x=>1+3*x,C.inkA(.5),1.6,[5,3]);
      P.vline(1,C.wallA(.6),1.4,[3,3]);
      txt(ctx,P.X(.62),P.Y(9),'$ε_r = (1 + 2x)/(1 - x)$',C.neg,10,{b:1});
      txt(ctx,P.X(W<520?.32:.5),P.Y(4.2),W<520?'no local field: $1 + 3x$':'without local-field correction: $1 + 3x$',C.inkA(.6),9.5,{align:'left'});
      txt(ctx,P.X(1)-6,P.Y(14),'$x\\to 1$: $ε_r\\to\\infty$',C.wall,9.5,{b:1,align:'right'});
      txt(ctx,P.X(1)-6,P.Y(12.6),'polarisation catastrophe',C.wall,9.5,{align:'right'});
      [0,.2,.4,.6,.8,1].forEach(v=>txt(ctx,P.X(v),P.Y(1)+11,'$'+v+'$',C.inkA(.55),9));
      txt(ctx,P.X(.5),H-6,'$x = Nα/3ε_0$',C.inkA(.6),9.5);
      capFit(ctx,[['Clausius–Mossotti: $(ε_r - 1)/(ε_r + 2) = Nα/3ε_0$'],['local field: $ε_r$ grows faster than $Nα$, diverges at $x = 1$',C.inkA(.6)]]);
    }},

  /* ── M4: three ways to polarise — electronic, ionic, dipolar ── */
  polmech:{ar:.56,arN:0.9,opt:{k:'e',E:0},
    chips:[{label:'electronic',set:{k:'e'},on:true},{label:'ionic',set:{k:'i'}},{label:'dipolar',set:{k:'d'}},
      {sep:'field'},{label:'$E = 0$',set:{E:0},on:true},{label:'$E$ on',set:{E:1}}],
    draw(ctx,W,H,st){
      ctx.clearRect(0,0,W,H);const k=st.opt.k,E=st.opt.E,cy=H*.58;
      if(k==='e'){[W*.25,W*.55].forEach((x,i)=>{const sh=E?-14:0;
          ctx.save();ctx.fillStyle=C.negA(.18);ctx.strokeStyle=C.negA(.6);ctx.beginPath();ctx.arc(x+sh,cy,38,0,7);ctx.fill();ctx.stroke();ctx.restore();
          disc(ctx,x,cy,5,C.wall);txt(ctx,x,cy-13,'+',C.wall,10,{b:1});
          if(E)arw(ctx,x+sh+2,cy+48,x+4,cy+48,C.prob,1.8,6);});
        if(E)txt(ctx,W*.4,cy+62,'cloud shifts against $E$ → dipole $p = α_eE$',C.prob,9.5,{b:1});}
      if(k==='i'){const sc=Math.min(1,W/600);for(let i=0;i<7;i++){const x=W*.1+i*W*.1,pl=i%2===0,d=E?(pl?7:-7)*sc:0;
          disc(ctx,x+d,cy,(pl?9:12)*sc,pl?C.wallA(.8):C.probA(.75));txt(ctx,x+d,cy,pl?'+':'−','#fff',11*sc+2,{b:1});}
        if(E)txt(ctx,W*.4,cy+30,'$+$ ions shift along $E$, $-$ ions against it',C.prob,9.5,{b:1});}
      if(k==='d'){const r=rngSeed(3);for(let i=0;i<10;i++){const x=W*.1+(i%5)*W*.14,y=cy-22+Math.floor(i/5)*46;
          let a=r()*6.283;if(E)a=(a-3.14)*.35;arw(ctx,x-Math.cos(a)*16,y-Math.sin(a)*16,x+Math.cos(a)*16,y+Math.sin(a)*16,C.pos,2.2,6);}
        if(E)txt(ctx,W*.4,cy+50,'permanent dipoles turn partly towards $E$',C.prob,9.5,{b:1});}
      if(E){arw(ctx,W*.8,cy,W*.96,cy,C.prob,2.6,9);txt(ctx,W*.88,cy-14,'$E$',C.prob,12,{b:1});}
      const info={e:['Electronic $α_e = 4πε_0R^3$','every atom · follows the field up to $\\sim 10^{15}$ Hz (UV)'],
        i:['Ionic $α_i$','ionic solids (NaCl) · drops out in the infrared, $\\sim 10^{13}$ Hz'],
        d:['Dipolar $α_d = p^2/3kT$','polar molecules ($\\mathrm{H_2O}$) · slowest: gone by $\\sim 10^{10}$–$10^{11}$ Hz']}[k];
      capFit(ctx,[[info[0]],[info[1],C.inkA(.6)]]);
    }},

  /* ── M4: BaTiO₃ — cubic above T_c, tetragonal and polarised below ── */
  batio3:{ar:.66,arN:1.0,opt:{k:'t'},
    chips:[{label:'$T > T_c$: cubic',set:{k:'c'}},{label:'$T < T_c$: tetragonal',set:{k:'t'},on:true}],
    draw(ctx,W,H,st){
      ctx.clearRect(0,0,W,H);const tet=st.opt.k==='t';
      const s=Math.min(W*.42,H*.62),cx=W*.38,cy=H*.57,a=s/2,c=tet?a*1.08:a,d=tet?a*.12:0;
      ctx.save();ctx.strokeStyle=C.inkA(.45);ctx.lineWidth=1.4;ctx.strokeRect(cx-a,cy-c,2*a,2*c);ctx.restore();
      [[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([i,j])=>{disc(ctx,cx+i*a,cy+j*c,14,C.posA(.8));txt(ctx,cx+i*a,cy+j*c,'Ba','#fff',9.5,{b:1});});
      [[0,-c,1.33*d],[0,c,1.33*d],[-a,0,d],[a,0,d]].forEach(([x,y,dy])=>{disc(ctx,cx+x,cy+y+dy,10,C.wallA(.8));txt(ctx,cx+x,cy+y+dy,'O','#fff',9.5,{b:1});});   // O shifts down, Ti up
      disc(ctx,cx,cy-d,8,C.neg);txt(ctx,cx,cy-d,'Ti','#fff',8.5,{b:1});
      if(tet){ctx.save();ctx.setLineDash([3,3]);ctx.strokeStyle=C.inkA(.35);ctx.beginPath();ctx.arc(cx,cy,8,0,7);ctx.stroke();ctx.restore();
        arw(ctx,W*.8,cy+c*.6,W*.8,cy-c*.6,C.neg,3,10);txt(ctx,W*.8+12,cy,'$\\mathbf P$',C.neg,13,{b:1,align:'left'});
        txt(ctx,W*.8,cy+c*.6+16,'Ti ↑ $0.06$ Å',C.neg,9.5,{b:1});txt(ctx,W*.8,cy+c*.6+30,'O ↓ $0.06$–$0.08$ Å',C.wall,9.5,{b:1});}
      else txt(ctx,W*.8,cy,'charge centres coincide: $P = 0$',C.inkA(.6),9.5,{b:1});
      capFit(ctx,[[tet?'Below $T_c\\approx 393$ K: tetragonal ($c/a = 4.03/3.98$), polarised':'Above $T_c$: cubic perovskite, paraelectric'],
        ['Ba corners · O face centres · Ti body centre (shifts exaggerated)',C.inkA(.6)]]);
    }},

  /* ── M4: ε_r of BaTiO₃ against temperature — the Curie–Weiss peak ── */
  epsT:{ar:.52,arN:0.85,
    draw(ctx,W,H){
      const P=Plot(ctx,W,H,{l:44,r:16,t:46,b:30});P.clear();P.dom(250,550).ran(0,12000).grid(6,4);P.axes();
      const Tc=393,Cc=1.7e5;
      P.curve(T=>T>Tc?Math.min(11800,Cc/(T-Tc+12)):Math.min(11800,1500+Cc/(2*(Tc-T)+40)),C.neg,2.6);
      P.vline(Tc,C.wallA(.6),1.3,[3,3]);txt(ctx,P.X(Tc),P.Y(0)+11,'$T_c$',C.wall,10,{b:1});
      [250,300,350,450,500,550].forEach(T=>txt(ctx,P.X(T),P.Y(0)+11,'$'+T+'$',C.inkA(.55),9));
      [4000,8000,12000].forEach(v=>txt(ctx,P.X(250)-6,P.Y(v),'$'+v+'$',C.inkA(.55),9,{align:'right'}));
      txt(ctx,P.X(470),P.Y(5200),'$ε_r = C/(T - T_c)$',C.neg,10,{b:1});
      txt(ctx,P.X(300),P.Y(5200),'ferroelectric',C.inkA(.6),9.5);txt(ctx,P.X(470),P.Y(3600),'paraelectric',C.inkA(.6),9.5);
      txt(ctx,P.X(500),H-6,'$T$ (K)',C.inkA(.6),9.5);
      capFit(ctx,[['$\\mathrm{BaTiO_3}$: the dielectric constant peaks at the Curie point'],['$C\\approx 1.7\\times 10^5$ K — why it makes compact high-value capacitors',C.inkA(.6)]]);
    }},

  /* ── M4: piezoelectricity needs no centre of inversion ── */
  piezo:{ar:.6,arN:0.95,
    steps:[
      'A quartz-like ring: three $+$ ions and three $-$ ions alternating round a hexagon. The centre of the $+$ charges (●) and the centre of the $-$ charges (○) both sit in the middle: no dipole.',
      'Squeeze it along the vertical. The ions on the line of the force move most: the top $+$ ion is pushed down and the bottom $-$ ion up. Now the $+$ centre sits below the $-$ centre: a dipole, so surface charges appear. That is the <b>direct piezoelectric effect</b>.',
      'Compare a crystal <b>with</b> a centre of inversion (here alternating charges on a square). Every ion has an identical partner opposite it, and a uniform squeeze moves partners equally and oppositely. The centres stay together: no polarisation, however hard you press.'],
    draw(ctx,W,H,st){
      ctx.clearRect(0,0,W,H);const s=st.step|0,cx=W*.4,cy=H*.6,R=Math.min(W,H)*.25;
      let ions=[];
      if(s<2){for(let k=0;k<6;k++){const a=Math.PI/2+k*Math.PI/3;ions.push([cx+R*Math.cos(a),cy-R*Math.sin(a),k%2?-1:1]);}
        if(s===1){ions[0][1]+=R*.32;ions[3][1]-=R*.32;}}
      else{[[-1,-1,1],[1,-1,-1],[1,1,1],[-1,1,-1]].forEach(([i,j,q])=>ions.push([cx+i*R*.75,cy+j*R*.62,q]));}
      ctx.save();ctx.strokeStyle=C.inkA(.3);ctx.lineWidth=1.4;ctx.beginPath();ions.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.closePath();ctx.stroke();ctx.restore();
      ions.forEach(([x,y,q])=>{disc(ctx,x,y,11,q>0?C.wallA(.85):C.probA(.8));txt(ctx,x,y,q>0?'+':'−','#fff',12,{b:1});});
      const cen=q=>{const a=ions.filter(p=>p[2]===q);return [a.reduce((t,p)=>t+p[0],0)/a.length,a.reduce((t,p)=>t+p[1],0)/a.length];};
      const cp=cen(1),cn=cen(-1);disc(ctx,cp[0],cp[1],4.5,C.wall);disc(ctx,cn[0],cn[1],5.5,null,C.prob,2);
      if(s>=1){arw(ctx,cx,cy-R*1.55,cx,cy-R*1.12,C.inkA(.7),2.4,8);arw(ctx,cx,cy+R*1.5,cx,cy+R*1.08,C.inkA(.7),2.4,8);
        txt(ctx,cx+14,cy-R*1.4,'stress',C.inkA(.65),9.5,{align:'left'});}
      if(s===1){arw(ctx,W*.8,cy-20,W*.8,cy+20,C.neg,2.6,8);txt(ctx,W*.8+10,cy,'$P\\neq 0$',C.neg,11,{b:1,align:'left'});}
      if(s===2)txt(ctx,W*.8,cy,'$P = 0$',C.inkA(.6),11,{b:1});
      capFit(ctx,[[['No centre of symmetry, no stress: $P = 0$','Squeezed: $+$ and $-$ centres separate → $P$','With a centre of inversion: never any $P$'][s]],
        ['● centre of $+$ charge   ○ centre of $-$ charge',C.inkA(.6)]]);
    }},
});
