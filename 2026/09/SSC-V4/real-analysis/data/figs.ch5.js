/* ══════════════════════════════════════════════════════════════════════════
   Figures for Chapter 5. Each one exists because the picture carries an idea
   the prose struggles with — not for decoration.
   ══════════════════════════════════════════════════════════════════════════ */

/* ε-δ made mechanical: choose ε, watch the δ that answers it. */
FIGS['fig.eps-delta']={
  xr:[0,2], yr:[0,4], ratio:.66,
  ctl:{label:'ε', min:.1, max:1.5, step:.05, value:.6, fmt:v=>'ε = '+v.toFixed(2)},
  legend:[{c:'var(--accent)',t:'f(x) = x²'},{c:'var(--warm)',t:'the ε-band you must land in'},
          {c:'var(--good)',t:'the δ-window that gets you there'}],
  cap:'Continuity at $c=1$. Drag ε: the target band narrows, and a narrower δ-window answers it. '+
      'Continuity is the promise that <em>some</em> δ always exists — never that it stays the same size.',
  draw(P,eps){
    const f=x=>x*x, c=1, fc=1;
    /* for f(x)=x² near c=1: |x²−1| = |x−1||x+1| < 3|x−1| when |x−1|<1 */
    const d=Math.min(1, eps/3);
    P.grid(4,4); P.axes();
    P.ticks([{v:0,l:'0'},{v:1,l:'c=1'},{v:2,l:'2'}],[{v:1,l:'f(c)'},{v:2,l:'2'},{v:4,l:'4'}]);
    /* the ε band, and the δ window */
    P.band(0,2, fc-eps, fc+eps, PAL.warmA(.14));
    P.band(c-d,c+d, 0,4, 'rgba(31,122,61,.13)');
    P.hline(fc-eps, PAL.warm,1.2,[4,3]); P.hline(fc+eps, PAL.warm,1.2,[4,3]);
    P.vline(c-d, PAL.good,1.2,[4,3]);   P.vline(c+d, PAL.good,1.2,[4,3]);
    P.clipPlot(()=>P.curve(f, PAL.acc, 2.4));
    P.dot(c,fc,PAL.acc,4);
    P.label(c+d, fc+eps, `δ = ${d.toFixed(2)}`, PAL.good, {dx:4,dy:-6,b:1});
    P.label(0, fc+eps, `f(c)+ε`, PAL.warm, {dx:P.m.l-28,dy:-4,s:10});
    P.text(P.m.l+6, P.m.t+2,
      `|x−1| < δ  ⟹  |x²−1| < ε`, PAL.dim, {al:'left',s:11,b:1});
  }
};

/* the whole difference between continuity and uniform continuity, in one picture */
FIGS['fig.unif']={
  xr:[0,1.05], yr:[0,9], ratio:.66,
  ctl:{label:'c', min:.12, max:.95, step:.01, value:.7, fmt:v=>'c = '+v.toFixed(2)},
  legend:[{c:'var(--accent)',t:'f(x) = 1/x on (0,1]'},{c:'var(--warm)',t:'fixed ε'},
          {c:'var(--bad)',t:'the δ this c forces'}],
  cap:'Slide $c$ towards $0$ with ε held fixed. The δ you are forced to use collapses. '+
      'There is no single δ that works everywhere at once — so $1/x$ is continuous at every point '+
      'of $(0,1]$ yet <em>not</em> uniformly continuous on it.',
  draw(P,c){
    const f=x=>1/x, eps=1.0, fc=f(c);
    /* solve 1/(c−δ) − 1/c = ε  ⟹  δ = εc²/(1+εc) */
    const d=Math.min(c*0.92, eps*c*c/(1+eps*c));
    P.grid(4,4); P.axes();
    P.ticks([{v:0,l:'0'},{v:.5,l:'0.5'},{v:1,l:'1'}],[{v:2,l:'2'},{v:5,l:'5'},{v:8,l:'8'}]);
    P.band(0,1.05, Math.max(0,fc-eps), fc+eps, PAL.warmA(.13));
    P.band(Math.max(0,c-d), c+d, 0,9, 'rgba(165,42,42,.14)');
    P.clipPlot(()=>P.curve(f, PAL.acc, 2.4));
    P.dot(c,fc,PAL.acc,4);
    P.vline(c-d, PAL.bad,1.1,[3,3]); P.vline(c+d, PAL.bad,1.1,[3,3]);
    /* annotations live in the bottom-right, where 1/x never goes */
    P.text(P.W-P.m.r-6, P.H-P.m.b-46, `ε fixed at ${eps.toFixed(1)}`, PAL.warm, {al:'right',s:11,b:1});
    P.text(P.W-P.m.r-6, P.H-P.m.b-30, `δ = ${d.toFixed(3)}`, PAL.bad, {al:'right',s:11,b:1});
    P.text(P.W-P.m.r-6, P.H-P.m.b-14, `δ → 0 as c → 0`, PAL.dim, {al:'right',s:10});
  }
};

/* IVT: the hypothesis that does the work is *connectedness of the interval* */
FIGS['fig.ivt']={
  xr:[0,4], yr:[-2.2,2.6], ratio:.6,
  legend:[{c:'var(--accent)',t:'f continuous on [a,b]'},{c:'var(--good)',t:'a root must exist'}],
  cap:'$f(a)<0 < f(b)$ and $f$ is continuous on the whole of $[a,b]$, so the graph cannot get from '+
      'below the axis to above it without touching it. Continuity is what forbids a jump; the '+
      '<em>closed</em> interval is what stops the crossing escaping out of the domain.',
  draw(P){
    const f=x=>Math.sin(x*1.25)*1.7 + x*0.22 - 0.85;
    P.grid(4,4); P.axes();
    P.ticks([{v:0.4,l:'a'},{v:3.6,l:'b'}],[{v:-2,l:'−2'},{v:0,l:'0'},{v:2,l:'2'}]);
    P.band(0.4,3.6,-2.2,2.6, PAL.accA(.05));
    P.clipPlot(()=>P.curve(f, PAL.acc, 2.4));
    P.dot(0.4,f(0.4),PAL.bad,4.2); P.dot(3.6,f(3.6),PAL.good,4.2);
    P.label(0.4,f(0.4),'f(a) < 0',PAL.bad,{dx:6,dy:16,b:1});
    P.label(3.6,f(3.6),'f(b) > 0',PAL.good,{dx:-8,dy:-6,al:'right',b:1});
    /* find the crossings by bisection so the marks are honest */
    for(let k=0;k<400;k++){
      const x0=0.4+(3.2)*k/400, x1=0.4+(3.2)*(k+1)/400;
      if(f(x0)*f(x1)<0){
        let a=x0,b=x1; for(let i=0;i<40;i++){const mid=(a+b)/2; (f(a)*f(mid)<=0?b=mid:a=mid);}
        const r=(a+b)/2;
        P.dot(r,0,PAL.good,4.6); P.seg(r,0,r,-0.55,PAL.good,1.1,[3,3]);
        P.label(r,-0.6,'f(c)=0',PAL.good,{al:'center',dy:14,s:10,b:1});
      }
    }
  }
};

/* why the Max-Min Theorem needs BOTH closed and bounded */
FIGS['fig.maxmin']={
  xr:[0,1.08], yr:[0,1.25], ratio:.5,
  legend:[{c:'var(--good)',t:'[0,1] closed — max attained'},{c:'var(--bad)',t:'(0,1) open — supremum never reached'}],
  cap:'The same function on two different domains. On the closed bounded interval the supremum is '+
      '<em>attained</em>. On the open one it is approached and never reached — the hypothesis '+
      '“closed and bounded” is not decoration.',
  draw(P){
    const f=x=>x;
    P.grid(4,3); P.axes();
    P.ticks([{v:0,l:'0'},{v:1,l:'1'}],[{v:1,l:'1'}]);
    P.hline(1,PAL.faint,1,[3,3]);
    P.clipPlot(()=>P.curve(f,PAL.good,2.6));
    P.dot(1,1,PAL.good,5);                 /* filled: attained  */
    P.dot(0,0,PAL.good,5);
    P.label(1,1,'max = 1, attained at x = 1',PAL.good,{al:'right',dx:-8,dy:-8,b:1});
    /* the open-interval story, drawn just below */
    P.seg(0,0.12,1,0.12,PAL.rule,1);
    P.dot(1,0.12,PAL.bad,5,true);          /* hollow: excluded */
    P.dot(0,0.12,PAL.bad,5,true);
    P.label(0.5,0.12,'on (0,1): sup = 1, but 1 ∉ range',PAL.bad,{al:'center',dy:-8,s:10,b:1});
  }
};

/* Lipschitz: a slope bound is a uniform δ, handed to you for free */
FIGS['fig.lipschitz']={
  xr:[0,3], yr:[0,3], ratio:.58,
  legend:[{c:'var(--accent)',t:'f'},{c:'var(--warm)',t:'cone of slope ±K'}],
  cap:'If $|f(x)-f(u)|\\le K|x-u|$ then the graph never leaves the cone of slope $\\pm K$ through any '+
      'of its points. Taking $\\delta=\\varepsilon/K$ works at <em>every</em> point at once, which is '+
      'exactly uniform continuity.',
  draw(P){
    const f=x=>0.55*x + 0.5*Math.sin(x*1.6)*0.45 + 0.4, K=1.2;
    P.grid(3,3); P.axes();
    P.ticks([{v:1.5,l:'u'}],[]);
    const u=1.5, fu=f(u);
    P.clipPlot(()=>{
      /* the cone */
      P.seg(u,fu,3,fu+K*(3-u),PAL.warm,1.3,[4,3]);
      P.seg(u,fu,3,fu-K*(3-u),PAL.warm,1.3,[4,3]);
      P.seg(u,fu,0,fu+K*(u-0),PAL.warm,1.3,[4,3]);
      P.seg(u,fu,0,fu-K*(u-0),PAL.warm,1.3,[4,3]);
      P.curve(f,PAL.acc,2.4);
    });
    P.dot(u,fu,PAL.acc,4.2);
    P.text(P.W-P.m.r-4,P.m.t+2,`K = ${K}`,PAL.warm,{al:'right',s:11,b:1});
    P.text(P.W-P.m.r-4,P.m.t+18,`δ = ε/K, the same everywhere`,PAL.dim,{al:'right',s:10});
  }
};

/* Which concept each figure belongs to. Kept here rather than inside the
   concept files so that authors of content and authors of figures never have
   to edit the same file. Applied in buildGraph(). */
const FIGMAP={
  'c.5.1.1':['fig.eps-delta'],
  'c.5.3.4':['fig.maxmin'],
  'c.5.3.7':['fig.ivt'],
  'c.5.4.1':['fig.unif'],
  'c.5.4.4':['fig.lipschitz']
};
