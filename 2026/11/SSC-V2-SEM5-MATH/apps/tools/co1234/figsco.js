/* ══════════════ DIAGRAMS — Convex Optimization, Modules I–IV ══════════════
   Spliced into engine.js by build.py just before setupFig, so Plot, C, capBlock and MJT are in scope.
   ar = height/width (arN on phones), draw(ctx,W,H,st), st.step for guided steps, st.opt for chips.
   Every label goes through MJT (maths inside $…$). Everything is computed from the formulas.        */

/* pixel helpers */
function arw(ctx,x1,y1,x2,y2,col,w,head){
  head=head||7;ctx.save();ctx.strokeStyle=col;ctx.fillStyle=col;ctx.lineWidth=w||1.8;ctx.lineCap='round';
  ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke();
  const a=Math.atan2(y2-y1,x2-x1);
  ctx.beginPath();ctx.moveTo(x2,y2);
  ctx.lineTo(x2-head*Math.cos(a-.42),y2-head*Math.sin(a-.42));
  ctx.lineTo(x2-head*Math.cos(a+.42),y2-head*Math.sin(a+.42));ctx.closePath();ctx.fill();ctx.restore();
}
function capFit(ctx,lines){
  const W=ctx.canvas.clientWidth||ctx.canvas.width;ctx.save();ctx.textBaseline='top';ctx.textAlign='left';let y=7;
  lines.forEach((L,i)=>{if(!L)return;let sz=i===0?11.5:10.5;
    const o=sz=>i===0?{size:sz,bold:1,font:"'Sora',Georgia,serif",color:L[1]||C.ink,base:'top'}:{size:sz,color:L[1]||C.ink,base:'top'};
    const w=MJT.width(ctx,L[0],o(sz)),room=W-20;
    if(w>room)sz=Math.max(7.5,sz*room/w);
    MJT.draw(ctx,L[0],10,y,o(sz));y+=(i===0?17:14)*Math.min(1,sz/(i===0?11.5:10.5))+1;});
  ctx.restore();
}
/* an isotropic world window [x0,x1]×[y0,y1] inside the plot box (keeps circles round) */
function isoBox(P,W,H,pad,x0,x1,y0,y1){
  const pw=W-pad.l-pad.r,ph=H-pad.t-pad.b,ap=pw/ph;let w=x1-x0,h=y1-y0;
  if(w/h<ap){const nw=h*ap,c=(x0+x1)/2;x0=c-nw/2;x1=c+nw/2;}else{const nh=w/ap,c=(y0+y1)/2;y0=c-nh/2;y1=c+nh/2;}
  P.dom(x0,x1).ran(y0,y1);return {x0,x1,y0,y1};
}
function polyP(P,pts,fill,stroke,w,dash){const ctx=P.ctx;ctx.save();ctx.beginPath();
  pts.forEach((q,i)=>{const X=P.X(q[0]),Y=P.Y(q[1]);i?ctx.lineTo(X,Y):ctx.moveTo(X,Y);});ctx.closePath();
  if(fill){ctx.fillStyle=fill;ctx.fill();}
  if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=w||1.6;if(dash)ctx.setLineDash(dash);ctx.lineJoin='round';ctx.stroke();}
  ctx.restore();}
function pathP(P,pts,stroke,w,dash){const ctx=P.ctx;ctx.save();ctx.beginPath();
  pts.forEach((q,i)=>{const X=P.X(q[0]),Y=P.Y(q[1]);i?ctx.lineTo(X,Y):ctx.moveTo(X,Y);});
  ctx.strokeStyle=stroke;ctx.lineWidth=w||1.8;if(dash)ctx.setLineDash(dash);ctx.lineJoin='round';ctx.stroke();ctx.restore();}
function arP(P,x1,y1,x2,y2,col,w){arw(P.ctx,P.X(x1),P.Y(y1),P.X(x2),P.Y(y2),col,w||1.9);}
function lineInf(P,B,a,b,c,col,w,dash){   // the line a·x + b·y = c across the box B
  const pts=[];
  if(Math.abs(b)>1e-9){pts.push([B.x0,(c-a*B.x0)/b],[B.x1,(c-a*B.x1)/b]);}
  else{pts.push([c/a,B.y0],[c/a,B.y1]);}
  P.seg(pts[0][0],pts[0][1],pts[1][0],pts[1][1],col,w||1.8,dash);}
function clipHalfP(poly,a,b,c){   // keep a·x + b·y <= c
  const out=[];
  for(let i=0;i<poly.length;i++){const A=poly[i],Bq=poly[(i+1)%poly.length];
    const da=a*A[0]+b*A[1]-c,db=a*Bq[0]+b*Bq[1]-c;
    if(da<=1e-12)out.push(A);
    if((da<-1e-12&&db>1e-12)||(da>1e-12&&db<-1e-12)){const t=da/(da-db);out.push([A[0]+t*(Bq[0]-A[0]),A[1]+t*(Bq[1]-A[1])]);}}
  return out;}
function halfRegion(B,a,b,c){return clipHalfP([[B.x0,B.y0],[B.x1,B.y0],[B.x1,B.y1],[B.x0,B.y1]],a,b,c);}
/* sampled field: heat map (sign colours) and contour lines (marching squares) */
function heatP(P,B,f,scale,N){N=N||70;const ctx=P.ctx;
  const dx=(B.x1-B.x0)/N,dy=(B.y1-B.y0)/N;
  for(let i=0;i<N;i++)for(let j=0;j<N;j++){const x=B.x0+(i+.5)*dx,y=B.y0+(j+.5)*dy,v=f(x,y);
    if(!isFinite(v))continue;const a=Math.min(.34,Math.abs(v)/scale*.34);
    ctx.fillStyle=v>=0?C.posA(a):C.probA(a);
    const X0=P.X(B.x0+i*dx),X1=P.X(B.x0+(i+1)*dx),Y0=P.Y(B.y0+j*dy),Y1=P.Y(B.y0+(j+1)*dy);
    ctx.fillRect(Math.min(X0,X1),Math.min(Y0,Y1),Math.abs(X1-X0)+.6,Math.abs(Y1-Y0)+.6);}}
function contourP(P,B,f,levels,col,w,N){N=N||90;const ctx=P.ctx;
  const dx=(B.x1-B.x0)/N,dy=(B.y1-B.y0)/N,G=[];
  for(let i=0;i<=N;i++){G.push([]);for(let j=0;j<=N;j++)G[i].push(f(B.x0+i*dx,B.y0+j*dy));}
  ctx.save();ctx.lineWidth=w||1.2;ctx.lineCap='round';
  levels.forEach((L,k)=>{ctx.strokeStyle=typeof col==='function'?col(L,k):col;ctx.beginPath();
    for(let i=0;i<N;i++)for(let j=0;j<N;j++){
      const v=[G[i][j]-L,G[i+1][j]-L,G[i+1][j+1]-L,G[i][j+1]-L];
      const p=[[i,j],[i+1,j],[i+1,j+1],[i,j+1]],hits=[];
      for(let e=0;e<4;e++){const a=v[e],b=v[(e+1)%4];
        if(!isFinite(a)||!isFinite(b))continue;
        if((a<0)!==(b<0)){const t=a/(a-b),q0=p[e],q1=p[(e+1)%4];
          hits.push([B.x0+(q0[0]+t*(q1[0]-q0[0]))*dx,B.y0+(q0[1]+t*(q1[1]-q0[1]))*dy]);}}
      for(let h=0;h+1<hits.length;h+=2){ctx.moveTo(P.X(hits[h][0]),P.Y(hits[h][1]));ctx.lineTo(P.X(hits[h+1][0]),P.Y(hits[h+1][1]));}}
    ctx.stroke();});
  ctx.restore();}
function boxAxes(P,B,lx,ly){
  if(B.y0<0&&B.y1>0)P.seg(B.x0,0,B.x1,0,C.axis,1.2);
  if(B.x0<0&&B.x1>0)P.seg(0,B.y0,0,B.y1,C.axis,1.2);
  if(lx)P.label(B.x1,0,lx,C.inkA(.6),{align:'right',base:'top',sz:10});
  if(ly)P.label(0,B.y1,ly,C.inkA(.6),{align:'left',base:'top',sz:10});
}
const PADF={l:12,r:12,t:44,b:14};

Object.assign(FIGS,{

/* ════════════════════════ MODULE I ════════════════════════ */

  /* 19.2: contours of x1x2, the direction (3,4), the tangent (1,-2), the gradient (2,1) */
  dirderiv:{ar:.78,arN:1.05,
    steps:['Contours $x_1x_2 = c$ of $f(x_1,x_2) = x_1x_2$. The point $\\boldsymbol\\xi = (1,2)$ sits on the contour $x_1x_2 = 2$.',
      'Walk from $\\boldsymbol\\xi$ along the unit vector $\\mathbf u = (3/5,4/5)$. The slope met is $D_{\\mathbf u}f(\\boldsymbol\\xi) = 2$.',
      'Along the dashed direction $(1,-2)$ you stay on the contour to first order: the slope is $0$. That is why it is tangent.',
      'The gradient $\\nabla f(1,2) = (2,1)$ is normal to the contour and gives the steepest slope, $\\|\\nabla f\\| = \\sqrt5\\approx 2.24$.'],
    draw(ctx,W,H,st){const s=st.step|0,P=Plot(ctx,W,H,PADF);P.clear();
      const B=isoBox(P,W,H,PADF,-.1,3.4,-.1,3.6);
      heatP(P,B,(x,y)=>x*y,8,60);
      contourP(P,B,(x,y)=>x*y,[1,2,3,4,6],(L)=>L===2?C.neg:C.inkA(.28),1.3);
      boxAxes(P,B,'$x_1$','$x_2$');
      P.label(2.95,2/2.95+.05,'$x_1x_2 = 2$',C.neg,{sz:10,base:'bottom',align:'right'});
      P.dot(1,2,C.ink,4);P.label(1.06,2.08,'$\\boldsymbol\\xi$',C.ink,{sz:11,base:'bottom'});
      if(s>=1){arP(P,1,2,1+.9*.6,2+.9*.8,C.pos,2.4);P.label(1.6,2.78,'$\\mathbf u$',C.pos,{sz:11,base:'bottom'});}
      if(s>=2){P.seg(1-.45,2+.9,1+.45,2-.9,C.wall,1.8,[5,4]);P.label(1.5,1.05,'$(1,-2)$',C.wall,{sz:10});}
      if(s>=3){arP(P,1,2,1+2*.45,2+1*.45,C.prob,2.4);P.label(1.95,2.5,'$\\nabla f = (2,1)$',C.prob,{sz:10,base:'bottom'});}
      capFit(ctx,[[['Contours of $f = x_1x_2$','$D_{\\mathbf u}f(1,2) = 2$ along $(3,4)$','slope $0$ along the contour','steepest: along $\\nabla f$, slope $\\sqrt5$'][s]],
        ['heat: height of the surface $y = x_1x_2$',C.inkA(.6)]]);
    }},

  /* 19.12: tangency means f − g = o(x − ξ) */
  tangent:{ar:.62,arN:.92,
    steps:['A curve $y = f(x)$ and a point $\\xi$ on it.',
      'An affine function $g(x) = l(x-\\xi)+f(\\xi)$ through the same point. Any slope $l$ passes through the point; only one is tangent.',
      'The gap $f(x)-g(x)$. For the tangent slope it shrinks faster than $x-\\xi$: the ratio $\\dfrac{f(x)-g(x)}{x-\\xi}\\to 0$.',
      'A wrong slope leaves a gap of the same size as $x-\\xi$: the ratio tends to $f\'(\\xi)-l\\ne 0$. Tangent ⇔ $f-g = o(x-\\xi)$.'],
    draw(ctx,W,H,st){const s=st.step|0,P=Plot(ctx,W,H,{l:16,r:14,t:44,b:20});P.clear();
      const f=x=>.25*x*x*x-.9*x+1.6,fp=x=>.75*x*x-.9,xi=1.3;
      P.dom(-.4,2.6).ran(0,3.2);
      P.curve(f,C.ink,2.4);
      P.dot(xi,f(xi),C.ink,4);P.label(xi,f(xi)-.12,'$\\xi$',C.ink,{sz:11,base:'top',align:'center'});
      const l=fp(xi);
      if(s>=1){P.curve(x=>l*(x-xi)+f(xi),C.pos,2);P.label(2.45,l*(2.45-xi)+f(xi)+.05,'$g$',C.pos,{sz:11,base:'bottom'});}
      if(s>=2){const x=2.15;P.seg(x,f(x),x,l*(x-xi)+f(xi),C.prob,2.6);P.label(x+.05,(f(x)+l*(x-xi)+f(xi))/2,'$f-g$',C.prob,{sz:10});}
      if(s>=3){P.curve(x=>(l+.9)*(x-xi)+f(xi),C.wall,1.8,[5,4]);P.label(1.95,(l+.9)*(1.95-xi)+f(xi),'wrong slope',C.wall,{sz:9.5,align:'right',base:'bottom'});}
      capFit(ctx,[[['a curve and a point','a candidate tangent line','the gap is $o(x-\\xi)$','the gap of a wrong slope is not'][s]],
        ['$m = n = 1$: the tangent flat is a line',C.inkA(.6)]]);
    }},

  /* 19.30: least squares — b, the column space, the residual at right angles */
  lsq:{ar:.66,arN:.95,
    steps:['$A\\mathbf x$ can only reach the column space of $A$ (the line). The data $\\mathbf b$ is off it: the system $A\\mathbf x = \\mathbf b$ is inconsistent.',
      'Every choice of $\\mathbf x$ gives a residual $A\\mathbf x-\\mathbf b$. We want the shortest one.',
      'The shortest residual is at right angles to the column space: $A^T(A\\mathbf x-\\mathbf b) = \\mathbf 0$, the normal equations.'],
    draw(ctx,W,H,st){const s=st.step|0,pad={l:12,r:12,t:44,b:12},P=Plot(ctx,W,H,pad);P.clear();
      const B=isoBox(P,W,H,pad,-.4,4.2,-.4,3.2),a=[2,1],na=Math.hypot(2,1),b=[1.3,2.6];
      P.seg(-.4*a[0]/na*2,-.4*a[1]/na*2,4.2,4.2*a[1]/a[0],C.neg,2.4);
      P.label(3.9,3.9/2+.08,'range of $A$',C.neg,{sz:10,align:'right',base:'bottom'});
      P.dot(0,0,C.ink,3);P.label(-.08,-.06,'$\\mathbf 0$',C.inkA(.7),{sz:10,align:'right',base:'top'});
      arP(P,0,0,b[0],b[1],C.ink,2);P.label(b[0]+.06,b[1],'$\\mathbf b$',C.ink,{sz:11});
      const t=(a[0]*b[0]+a[1]*b[1])/(na*na),p=[t*a[0],t*a[1]];
      if(s>=1){[0.6,3.2].forEach(u=>{const q=[u,u/2];P.seg(q[0],q[1],b[0],b[1],C.wallA(.7),1.4,[4,3]);P.dot(q[0],q[1],C.wall,3);});
        P.label(3.2,1.6-.1,'$A\\mathbf x$',C.wall,{sz:10,base:'top'});}
      if(s>=2){P.seg(p[0],p[1],b[0],b[1],C.prob,2.6);P.dot(p[0],p[1],C.prob,4);
        P.label(p[0]+.1,p[1]-.08,'$A\\mathbf x^\\star$',C.prob,{sz:10,base:'top'});
        const u=[a[0]/na*.18,a[1]/na*.18],v=[(b[0]-p[0]),(b[1]-p[1])],nv=Math.hypot(v[0],v[1]),w=[v[0]/nv*.18,v[1]/nv*.18];
        pathP(P,[[p[0]+u[0],p[1]+u[1]],[p[0]+u[0]+w[0],p[1]+u[1]+w[1]],[p[0]+w[0],p[1]+w[1]]],C.prob,1.3);}
      capFit(ctx,[[['$A\\mathbf x = \\mathbf b$ has no solution','residuals $A\\mathbf x-\\mathbf b$','residual $\\perp$ range: $A^TA\\mathbf x = A^T\\mathbf b$'][s]]]);
    }},

  /* 19.36: Taylor of order 2 along the slice F(t) = f(ξ + t(x−ξ)) */
  taylor:{ar:.6,arN:.9,
    steps:['Slice the surface along the segment from $\\boldsymbol\\xi$ to $\\mathbf x$: $F(t) = f((1-t)\\boldsymbol\\xi+t\\mathbf x)$, $0\\le t\\le 1$.',
      'First order: the tangent $F(0)+F\'(0)t$, with $F\'(0) = f\'(\\boldsymbol\\xi)(\\mathbf x-\\boldsymbol\\xi)$.',
      'Second order: add $\\tfrac12F\'\'(\\tau)t^2$ with $F\'\'(\\tau) = (\\mathbf x-\\boldsymbol\\xi)^Tf\'\'(\\boldsymbol\\eta)(\\mathbf x-\\boldsymbol\\xi)$. At $t = 1$ it hits $f(\\mathbf x)$ exactly for some $\\tau\\in(0,1)$.'],
    draw(ctx,W,H,st){const s=st.step|0,P=Plot(ctx,W,H,{l:16,r:14,t:44,b:22});P.clear();
      const F=t=>1+.6*t+1.2*t*t-.5*t*t*t;P.dom(-.08,1.12).ran(.6,2.6);
      P.curve(F,C.ink,2.4);P.vline(0,C.inkA(.3),1,[3,3]);P.vline(1,C.inkA(.3),1,[3,3]);
      P.label(0,.62,'$t = 0$ ($\\boldsymbol\\xi$)',C.inkA(.6),{sz:9.5,base:'bottom'});P.label(1,.62,'$t = 1$ ($\\mathbf x$)',C.inkA(.6),{sz:9.5,base:'bottom',align:'right'});
      P.dot(0,F(0),C.ink,4);P.dot(1,F(1),C.ink,4);
      if(s>=1)P.curve(t=>1+.6*t,C.pos,2);
      if(s>=2){const c2=F(1)-1-.6;P.curve(t=>1+.6*t+c2*t*t,C.prob,2,[6,4]);}
      capFit(ctx,[[['the slice $F(t)$','first order: the tangent','second order: exact at $t = 1$ with $\\boldsymbol\\eta$ on the segment'][s]]]);
    }},

  /* 19.37: quadratic forms by eigenvalue signs */
  quadform:{ar:.74,arN:1.0,opt:{k:'min'},
    chips:[{sep:'eigenvalues'},{label:'$+,+$',set:{k:'min'},on:true},{label:'$-,-$',set:{k:'max'}},{label:'$-,+$',set:{k:'sad'}},{label:'$0,+$',set:{k:'deg'}}],
    draw(ctx,W,H,st){const k=st.opt.k,P=Plot(ctx,W,H,PADF);P.clear();
      const B=isoBox(P,W,H,PADF,-2,2,-2,2),th=.5,c=Math.cos(th),s=Math.sin(th);
      const L={min:[1,2.4],max:[-1,-2.4],sad:[-1.4,1.8],deg:[0,1.8]}[k];
      const q=(x,y)=>{const u=c*x+s*y,v=-s*x+c*y;return L[0]*u*u+L[1]*v*v;};
      heatP(P,B,q,4,64);
      const lev=[-6,-4,-2.5,-1.2,-.4,.4,1.2,2.5,4,6];
      contourP(P,B,q,lev,(l)=>l>0?C.posA(.85):C.probA(.85),1.3);
      P.seg(-2.2*c,-2.2*s,2.2*c,2.2*s,C.inkA(.35),1,[4,3]);P.seg(2.2*s,-2.2*c,-2.2*s,2.2*c,C.inkA(.35),1,[4,3]);
      P.label(1.9*c,1.9*s,'$\\mathbf u^1$',C.inkA(.6),{sz:10});P.label(-1.9*s,1.9*c,'$\\mathbf u^2$',C.inkA(.6),{sz:10});
      P.dot(0,0,C.ink,4);
      const T={min:['$\\lambda_1,\\lambda_2 \\gt 0$: positive definite — minimum','every line through $\\mathbf 0$ goes up'],
        max:['$\\lambda_1,\\lambda_2 \\lt 0$: negative definite — maximum','every line through $\\mathbf 0$ goes down'],
        sad:['$\\lambda_1 \\lt 0 \\lt \\lambda_2$: saddle point','down along $\\mathbf u^1$, up along $\\mathbf u^2$'],
        deg:['$\\lambda_1 = 0$: a whole line where $\\mathbf x^TM\\mathbf x = 0$','the test says nothing (note 19.44)']}[k];
      capFit(ctx,[[T[0]],[T[1]+'   (copper $+$, indigo $-$)',C.inkA(.6)]]);
    }},

  /* 19.45: f = x1^3 − 3x1x2^2 + x2^4 */
  ex1945:{ar:.78,arN:1.05,
    draw(ctx,W,H){const P=Plot(ctx,W,H,PADF);P.clear();
      const f=(x,y)=>x*x*x-3*x*y*y+y*y*y*y,B=isoBox(P,W,H,PADF,-1.2,2.6,-2.4,2.4);
      heatP(P,B,f,4,64);
      contourP(P,B,f,[-3,-2,-1,-.5,-.15,0,.15,.5,1,2,3],(l)=>l>0?C.posA(.8):l<0?C.probA(.8):C.ink,1.2);
      boxAxes(P,B,'$x_1$','$x_2$');
      [[1.5,1.5,'min'],[1.5,-1.5,'min']].forEach(q=>{P.dot(q[0],q[1],C.neg,4.5);P.label(q[0]+.1,q[1],'$(\\tfrac32,'+(q[1]>0?'':'-')+'\\tfrac32)$ min',C.neg,{sz:10});});
      P.dot(0,0,C.wall,4.5);P.label(.08,.1,'$(0,0)$: $\\det f\'\'=0$',C.wall,{sz:10,base:'bottom'});
      capFit(ctx,[['$f = x_1^3-3x_1x_2^2+x_2^4$'],['two local minima ($f = -\\tfrac{27}{16}$), and $(0,0)$ which is neither',C.inkA(.6)]]);
    }},

/* ════════════════════════ MODULE II ════════════════════════ */

  /* 2.1: convex and non-convex sets with the segment test */
  convsets:{ar:.52,arN:.9,
    steps:['A set is convex when the segment between <em>any</em> two of its points stays inside. The hexagon passes.',
      'The kidney fails: a segment between two of its points leaves the set.',
      'The square that contains only part of its boundary fails too: a segment along the missing edge is not in the set.'],
    draw(ctx,W,H,st){const s=st.step|0,pad={l:8,r:8,t:44,b:8},P=Plot(ctx,W,H,pad);P.clear();
      const B=isoBox(P,W,H,pad,0,9.4,-1.6,1.9);
      const hex=[];for(let i=0;i<6;i++){const a=i*Math.PI/3+.3;hex.push([1.5+1.3*Math.cos(a),1.3*Math.sin(a)*.95]);}
      polyP(P,hex,C.negA(.16),C.neg,2);
      P.seg(.6,-.6,2.2,.9,C.ink,1.8);P.dot(.6,-.6,C.ink,3);P.dot(2.2,.9,C.ink,3);
      const kid=[];for(let i=0;i<=80;i++){const a=i/80*2*Math.PI,r=1.25+.5*Math.cos(2*a)-.25*Math.sin(a);kid.push([4.7+r*Math.cos(a)*.9,r*Math.sin(a)*.75]);}
      if(s>=1){polyP(P,kid,C.wallA(.12),C.wall,2);P.seg(4.7,1.0,4.7,-1.0,C.wall,1.8);P.dot(4.7,1.0,C.ink,3);P.dot(4.7,-1.0,C.ink,3);}
      if(s>=2){const q=[[7.1,-1.1],[9.1,-1.1],[9.1,1.1],[7.1,1.1]];polyP(P,q,C.wallA(.12),null);
        P.seg(7.1,-1.1,9.1,-1.1,C.wall,2);P.seg(9.1,-1.1,9.1,1.1,C.wall,2);P.seg(7.1,1.1,7.1,-1.1,C.wall,2);P.seg(7.1,1.1,9.1,1.1,C.wall,1.6,[4,4]);
        P.label(8.1,1.2,'edge partly missing',C.wall,{sz:9,align:'center',base:'bottom'});}
      capFit(ctx,[[['convex: every segment stays inside','not convex: a segment leaves','not convex: part of the boundary missing'][s]],['Boyd fig. 2.2',C.inkA(.55)]]);
    }},

  /* 2.1.4–2.1.5: convex hull and conic hull */
  hulls:{ar:.55,arN:.95,
    steps:['Fifteen points. Their convex hull $\\conv S$ is the set of all convex combinations $\\theta_1x_1+\\dots+\\theta_kx_k$ ($\\theta_i\\ge0$, $\\sum\\theta_i = 1$): the smallest convex set containing them.',
      'The convex hull of the kidney fills in the dent.',
      'A conic combination $\\theta_1x_1+\\theta_2x_2$ with $\\theta_i\\ge0$ (no sum condition) sweeps out a cone with apex at $\\mathbf 0$. The conic hull of the kidney is the smallest convex cone containing it.'],
    draw(ctx,W,H,st){const s=st.step|0,pad={l:8,r:8,t:44,b:8},P=Plot(ctx,W,H,pad);P.clear();
      const B=isoBox(P,W,H,pad,-.3,9.6,-2.2,2.2);
      const pts=[[.4,-.8],[1.2,1.3],[2.4,.9],[.9,.2],[1.6,-1.2],[2.6,-.4],[.2,.6],[1.9,.1],[1.3,-.3],[2.2,1.4],[.6,1.1],[2.8,.3],[1.0,-1.5],[2.0,-1.0],[1.6,.7]];
      if(s===0){polyP(P,hullPts(pts),C.negA(.16),C.neg,2);pts.forEach(q=>P.dot(q[0],q[1],C.ink,2.8));}
      const kid=[];for(let i=0;i<=90;i++){const a=i/90*2*Math.PI,r=1.2+.5*Math.cos(2*a)-.25*Math.sin(a);kid.push([4.8+r*Math.cos(a)*.9,r*Math.sin(a)*.75]);}
      if(s===1){polyP(P,hullPts(kid),C.negA(.16),C.neg,2,[5,4]);polyP(P,kid,C.wallA(.18),C.wall,1.8);}
      if(s===2){const K=kid.map(q=>[q[0]+2.6,q[1]+.4]),o=[7.2,-2.0];
        let amin=9,amax=-9;K.forEach(q=>{const a=Math.atan2(q[1]-o[1],q[0]-o[0]);amin=Math.min(amin,a);amax=Math.max(amax,a);});
        const R=5;polyP(P,[o,[o[0]+R*Math.cos(amin),o[1]+R*Math.sin(amin)],[o[0]+R*Math.cos(amax),o[1]+R*Math.sin(amax)]],C.probA(.13),null);
        P.seg(o[0],o[1],o[0]+R*Math.cos(amin),o[1]+R*Math.sin(amin),C.prob,2);P.seg(o[0],o[1],o[0]+R*Math.cos(amax),o[1]+R*Math.sin(amax),C.prob,2);
        polyP(P,K,C.wallA(.2),C.wall,1.8);P.dot(o[0],o[1],C.ink,3.5);P.label(o[0]+.15,o[1]-.05,'$\\mathbf 0$',C.ink,{sz:10,base:'top'});}
      capFit(ctx,[[['$\\conv S$ of a finite set: a polygon','$\\conv$ of the kidney','the conic hull: a wedge from $\\mathbf 0$'][s]],['Boyd figs. 2.3–2.5',C.inkA(.55)]]);
    }},

  /* 2.2.1: hyperplane and halfspace */
  hyperplane:{ar:.62,arN:.95,
    steps:['The hyperplane $\\{\\mathbf x\\mid \\mathbf a^T\\mathbf x = b\\}$ through $\\mathbf x_0$ is everything at right angles to $\\mathbf a$ from $\\mathbf x_0$: $\\mathbf a^T(\\mathbf x-\\mathbf x_0) = 0$.',
      'The halfspace $\\mathbf a^T\\mathbf x\\le b$ is the side the normal points <em>away</em> from: $\\mathbf a^T(\\mathbf x-\\mathbf x_0)\\le0$ means an obtuse (or right) angle with $\\mathbf a$.'],
    draw(ctx,W,H,st){const s=st.step|0,P=Plot(ctx,W,H,PADF);P.clear();
      const B=isoBox(P,W,H,PADF,-2.4,2.4,-2,2),a=[1,.7],x0=[.25,.2],b=a[0]*x0[0]+a[1]*x0[1];
      if(s>=1){polyP(P,halfRegion(B,a[0],a[1],b),C.negA(.14),null);P.label(-1.6,-1.4,'$\\mathbf a^T\\mathbf x\\le b$',C.neg,{sz:11});P.label(1.1,1.2,'$\\mathbf a^T\\mathbf x\\ge b$',C.inkA(.6),{sz:11});}
      lineInf(P,B,a[0],a[1],b,C.ink,2.2);
      P.dot(x0[0],x0[1],C.ink,4);P.label(x0[0]-.1,x0[1]-.08,'$\\mathbf x_0$',C.ink,{sz:11,align:'right',base:'top'});
      arP(P,x0[0],x0[1],x0[0]+a[0]*.9,x0[1]+a[1]*.9,C.pos,2.4);P.label(x0[0]+a[0]*.95,x0[1]+a[1]*.95,'$\\mathbf a$',C.pos,{sz:11});
      if(s>=1){const x=[-1.1,.9];P.dot(x[0],x[1],C.prob,3.5);arP(P,x0[0],x0[1],x[0],x[1],C.prob,1.6);P.label(x[0]-.05,x[1]+.05,'$\\mathbf x$',C.prob,{sz:11,align:'right',base:'bottom'});}
      capFit(ctx,[[['hyperplane: $\\mathbf a^T(\\mathbf x-\\mathbf x_0) = 0$','halfspace: $\\mathbf a^T(\\mathbf x-\\mathbf x_0)\\le 0$'][s]],['Boyd figs. 2.6–2.7',C.inkA(.55)]]);
    }},

  /* 2.2.2–2.2.3: ellipsoid and norm balls */
  balls:{ar:.66,arN:.95,opt:{k:'ell'},
    chips:[{label:'ellipsoid',set:{k:'ell'},on:true},{label:'$\\ell_1$',set:{k:'l1'}},{label:'$\\ell_2$',set:{k:'l2'}},{label:'$\\ell_\\infty$',set:{k:'linf'}}],
    draw(ctx,W,H,st){const k=st.opt.k,P=Plot(ctx,W,H,PADF);P.clear();
      const B=isoBox(P,W,H,PADF,-2.2,2.2,-1.8,1.8);boxAxes(P,B);
      if(k==='ell'){const l1=2.6,l2=.6,th=.45,c=Math.cos(th),s=Math.sin(th),pts=[];
        for(let i=0;i<=120;i++){const t=i/120*2*Math.PI,u=Math.sqrt(l1)*Math.cos(t),v=Math.sqrt(l2)*Math.sin(t);pts.push([c*u-s*v,s*u+c*v]);}
        polyP(P,pts,C.negA(.16),C.neg,2);
        arP(P,0,0,c*Math.sqrt(l1),s*Math.sqrt(l1),C.pos,2);arP(P,0,0,-s*Math.sqrt(l2),c*Math.sqrt(l2),C.pos,2);
        P.label(c*Math.sqrt(l1)*.55,s*Math.sqrt(l1)*.55+.06,'$\\sqrt{\\lambda_1}$',C.pos,{sz:10,base:'bottom'});
        P.label(-s*Math.sqrt(l2)-.06,c*Math.sqrt(l2)*.6,'$\\sqrt{\\lambda_2}$',C.pos,{sz:10,align:'right'});
        P.dot(0,0,C.ink,3.5);P.label(.06,-.06,'$\\mathbf x_c$',C.ink,{sz:10,base:'top'});
        capFit(ctx,[['$\\mathcal E = \\{\\mathbf x\\mid(\\mathbf x-\\mathbf x_c)^TP^{-1}(\\mathbf x-\\mathbf x_c)\\le1\\}$'],['semi-axes $\\sqrt{\\lambda_i}$ along the eigenvectors of $P\\succ0$',C.inkA(.6)]]);}
      else{const r=1.4,pts=[];
        for(let i=0;i<=200;i++){const t=i/200*2*Math.PI,cx=Math.cos(t),sy=Math.sin(t);
          const n=k==='l1'?Math.abs(cx)+Math.abs(sy):k==='l2'?1:Math.max(Math.abs(cx),Math.abs(sy));pts.push([r*cx/n,r*sy/n]);}
        polyP(P,pts,C.negA(.16),C.neg,2);
        capFit(ctx,[[{l1:'$\\|\\mathbf x\\|_1 = |x_1|+|x_2|\\le r$: a diamond',l2:'$\\|\\mathbf x\\|_2\\le r$: a disc',linf:'$\\|\\mathbf x\\|_\\infty = \\max|x_i|\\le r$: a square'}[k]],['every norm ball is convex (triangle inequality)',C.inkA(.6)]]);}
    }},

  /* 2.2.4: polyhedron as an intersection of halfspaces */
  polyhedron:{ar:.66,arN:.95,
    steps:['One halfspace $\\mathbf a_1^T\\mathbf x\\le b_1$.','Add $\\mathbf a_2^T\\mathbf x\\le b_2$ and $\\mathbf a_3^T\\mathbf x\\le b_3$.','Five halfspaces: $\\mathcal P = \\{\\mathbf x\\mid A\\mathbf x\\preceq \\mathbf b\\}$, with each $\\mathbf a_i$ an outward normal.'],
    draw(ctx,W,H,st){const s=st.step|0,P=Plot(ctx,W,H,PADF);P.clear();
      const B=isoBox(P,W,H,PADF,-2.4,2.4,-2,2);
      const cons=[];for(let i=0;i<5;i++){const a=i*2*Math.PI/5+.5;cons.push([Math.cos(a),Math.sin(a),1.0+.12*i]);}
      const n=s===0?1:s===1?3:5;let poly=[[B.x0,B.y0],[B.x1,B.y0],[B.x1,B.y1],[B.x0,B.y1]];
      for(let i=0;i<n;i++)poly=clipHalfP(poly,cons[i][0],cons[i][1],cons[i][2]);
      polyP(P,poly,C.negA(.16),C.neg,2);
      for(let i=0;i<n;i++){const c=cons[i];lineInf(P,B,c[0],c[1],c[2],C.inkA(.25),1,[4,4]);
        const m=[c[0]*c[2],c[1]*c[2]];arP(P,m[0],m[1],m[0]+c[0]*.55,m[1]+c[1]*.55,C.pos,1.8);
        P.label(m[0]+c[0]*.7,m[1]+c[1]*.7,'$\\mathbf a_'+(i+1)+'$',C.pos,{sz:10,align:'center',base:'middle'});}
      capFit(ctx,[[['one halfspace','three halfspaces','$\\mathcal P$: intersection of five halfspaces'][s]],['Boyd fig. 2.11',C.inkA(.55)]]);
    }},

  /* 2.6.1: a cone and its dual */
  dualcone:{ar:.66,arN:.98,opt:{a:40},
    chips:[{sep:'half-angle of $K$'},{label:'$20^\\circ$',set:{a:20}},{label:'$40^\\circ$',set:{a:40},on:true},{label:'$45^\\circ$',set:{a:45}},{label:'$65^\\circ$',set:{a:65}}],
    draw(ctx,W,H,st){const al=st.opt.a*Math.PI/180,P=Plot(ctx,W,H,PADF);P.clear();
      const B=isoBox(P,W,H,PADF,-2.1,2.1,-1.0,2.3),R=3,c0=Math.PI/2;
      const wedge=(h,fill,stroke)=>{polyP(P,[[0,0],[R*Math.cos(c0-h),R*Math.sin(c0-h)],[R*Math.cos(c0+h),R*Math.sin(c0+h)]],fill,null);
        P.seg(0,0,R*Math.cos(c0-h),R*Math.sin(c0-h),stroke,2);P.seg(0,0,R*Math.cos(c0+h),R*Math.sin(c0+h),stroke,2);};
      const be=Math.max(0,Math.PI/2-al);
      wedge(be,C.probA(.12),C.prob);wedge(al,C.negA(.16),C.neg);
      boxAxes(P,B);
      P.label(R*.55*Math.cos(c0-al)+.08,R*.55*Math.sin(c0-al),'$K$',C.neg,{sz:12,b:1});
      P.label(.08,1.9,'$K^*$',C.prob,{sz:12,b:1});
      capFit(ctx,[['$K^* = \\{\\mathbf y\\mid \\mathbf x^T\\mathbf y\\ge0\\ \\forall \\mathbf x\\in K\\}$'],[st.opt.a===45?'half-angle $45^\\circ$: self-dual, $K^* = K$':'half-angle $'+st.opt.a+'^\\circ$ gives a dual of half-angle $'+(90-st.opt.a)+'^\\circ$',C.inkA(.6)]]);
    }},

  /* 2.5.1: separating hyperplane via the closest pair (the proof) */
  separate:{ar:.62,arN:.98,
    steps:['Two disjoint convex sets $C$ and $D$.',
      'Take the closest pair $\\mathbf c\\in C$, $\\mathbf d\\in D$ (the proof assumes $\\mathbf{dist}(C,D)\\gt0$ is attained).',
      'Set $\\mathbf a = \\mathbf d-\\mathbf c$ and $b = \\tfrac12(\\|\\mathbf d\\|^2-\\|\\mathbf c\\|^2)$: the perpendicular bisector of $\\mathbf c\\mathbf d$, $\\mathbf a^T\\mathbf x = b$.',
      'Then $\\mathbf a^T\\mathbf x\\ge b$ on $D$ and $\\mathbf a^T\\mathbf x\\le b$ on $C$: the hyperplane separates.'],
    draw(ctx,W,H,st){const s=st.step|0,P=Plot(ctx,W,H,PADF);P.clear();
      const B=isoBox(P,W,H,PADF,-2.8,2.8,-1.9,1.9);
      const ell=(cx,cy,a,b,th)=>{const o=[];for(let i=0;i<=90;i++){const t=i/90*2*Math.PI;const u=a*Math.cos(t),v=b*Math.sin(t);o.push([cx+u*Math.cos(th)-v*Math.sin(th),cy+u*Math.sin(th)+v*Math.cos(th)]);}return o;};
      const Cs=ell(-1.45,-.25,1.0,.6,.5),Ds=ell(1.35,.35,.9,.55,-.4);
      let best=[9,null,null];Cs.forEach(p=>Ds.forEach(q=>{const d=Math.hypot(p[0]-q[0],p[1]-q[1]);if(d<best[0])best=[d,p,q];}));
      const c=best[1],d=best[2],a=[d[0]-c[0],d[1]-c[1]],b=.5*(d[0]*d[0]+d[1]*d[1]-c[0]*c[0]-c[1]*c[1]);
      if(s>=3){polyP(P,halfRegion(B,a[0],a[1],b),C.negA(.06),null);}
      polyP(P,Cs,C.negA(.18),C.neg,2);polyP(P,Ds,C.probA(.18),C.prob,2);
      P.label(-1.9,-.3,'$C$',C.neg,{sz:12,b:1});P.label(1.6,.4,'$D$',C.prob,{sz:12,b:1});
      if(s>=1){P.seg(c[0],c[1],d[0],d[1],C.ink,1.6,[4,3]);P.dot(c[0],c[1],C.ink,3.5);P.dot(d[0],d[1],C.ink,3.5);
        P.label(c[0]-.05,c[1]+.08,'$\\mathbf c$',C.ink,{sz:11,align:'right',base:'bottom'});P.label(d[0]+.05,d[1]-.08,'$\\mathbf d$',C.ink,{sz:11,base:'top'});}
      if(s>=2){lineInf(P,B,a[0],a[1],b,C.pos,2.4);const m=[(c[0]+d[0])/2,(c[1]+d[1])/2];P.dot(m[0],m[1],C.pos,3);
        const na=Math.hypot(a[0],a[1]);arP(P,m[0],m[1],m[0]+a[0]/na*.8,m[1]+a[1]/na*.8,C.pos,2);P.label(m[0]+a[0]/na*.9,m[1]+a[1]/na*.9,'$\\mathbf a$',C.pos,{sz:11});}
      capFit(ctx,[[['disjoint convex $C$, $D$','closest points $\\mathbf c$, $\\mathbf d$','bisector $\\mathbf a^T\\mathbf x = b$, $\\mathbf a = \\mathbf d-\\mathbf c$','$\\mathbf a^T\\mathbf x\\le b$ on $C$, $\\ge b$ on $D$'][s]],['Boyd fig. 2.19 and §2.5.1',C.inkA(.55)]]);
    }},

  /* 2.5.2: supporting hyperplane */
  support:{ar:.6,arN:.95,
    draw(ctx,W,H){const P=Plot(ctx,W,H,PADF);P.clear();
      const B=isoBox(P,W,H,PADF,-2.4,2.4,-1.7,1.7),pts=[];
      for(let i=0;i<=120;i++){const t=i/120*2*Math.PI,r=1.15+.18*Math.cos(3*t+.3);pts.push([r*Math.cos(t),.85*r*Math.sin(t)]);}
      const h=hullPts(pts);polyP(P,h,C.negA(.16),C.neg,2);P.label(-.3,-.1,'$C$',C.neg,{sz:12,b:1});
      // boundary point at angle ~0.6 and its supporting line (max of a^T x over C)
      const a=[Math.cos(.7),Math.sin(.7)];let bmax=-9,x0=null;h.forEach(q=>{const v=a[0]*q[0]+a[1]*q[1];if(v>bmax){bmax=v;x0=q;}});
      lineInf(P,B,a[0],a[1],bmax,C.pos,2.4);P.dot(x0[0],x0[1],C.ink,4);
      P.label(x0[0]+.08,x0[1]+.05,'$\\mathbf x_0$',C.ink,{sz:11,base:'bottom'});
      arP(P,x0[0],x0[1],x0[0]+a[0]*.7,x0[1]+a[1]*.7,C.pos,2);P.label(x0[0]+a[0]*.8,x0[1]+a[1]*.8,'$\\mathbf a$',C.pos,{sz:11});
      capFit(ctx,[['supporting hyperplane at $\\mathbf x_0\\in\\mathbf{bd}\\,C$'],['$\\mathbf a^T\\mathbf x\\le\\mathbf a^T\\mathbf x_0$ for all $\\mathbf x\\in C$ (Boyd fig. 2.21)',C.inkA(.6)]]);
    }},

  /* 2.4.2 / 2.6.3: minimum and minimal elements w.r.t. R^2_+ */
  minimal:{ar:.56,arN:.98,
    steps:['Left: $\\mathbf x_1$ is the <b>minimum</b> of $S_1$: every point of $S_1$ lies in $\\mathbf x_1+\\mathbf R^2_+$.',
      'Right: $\\mathbf x_2$ is <b>minimal</b> in $S_2$: the only point of $S_2$ in $\\mathbf x_2-\\mathbf R^2_+$ is $\\mathbf x_2$ itself. The whole lower-left boundary is made of minimal points.',
      'Dual view: $\\mathbf x$ minimises $\\boldsymbol\\lambda^T\\mathbf z$ over $S_2$ for some $\\boldsymbol\\lambda\\succ_{K^*}0$ ⇒ $\\mathbf x$ is minimal. The line of slope set by $\\boldsymbol\\lambda$ touches $S_2$ there.'],
    draw(ctx,W,H,st){const s=st.step|0,pad={l:10,r:10,t:44,b:10},P=Plot(ctx,W,H,pad);P.clear();
      const B=isoBox(P,W,H,pad,-.2,9.2,-.4,3.6);
      const blob=(cx,cy,a,b,th)=>{const o=[];for(let i=0;i<=100;i++){const t=i/100*2*Math.PI;const u=a*Math.cos(t),v=b*Math.sin(t);o.push([cx+u*Math.cos(th)-v*Math.sin(th),cy+u*Math.sin(th)+v*Math.cos(th)]);}return o;};
      const S1=[[.8,.6],[3.4,.6],[3.6,1.6],[2.6,3.1],[1.2,2.6],[.8,1.4]];
      polyP(P,S1,C.negA(.16),C.neg,2);P.dot(.8,.6,C.ink,4);P.label(.75,.5,'$\\mathbf x_1$',C.ink,{sz:11,align:'right',base:'top'});
      polyP(P,[[.8,.6],[4.2,.6],[4.2,3.5],[.8,3.5]],null,C.inkA(.35),1,[4,3]);
      P.label(2.2,1.6,'$S_1$',C.neg,{sz:12,b:1});
      if(s>=1){const S2=blob(6.7,1.7,1.6,1.0,-.6);polyP(P,S2,C.probA(.16),C.prob,2);P.label(6.9,1.9,'$S_2$',C.prob,{sz:12,b:1});
        let xb=null,best=9;const lam=s>=2?[1,1.6]:[1,1];S2.forEach(q=>{const v=lam[0]*q[0]+lam[1]*q[1];if(v<best){best=v;xb=q;}});
        P.dot(xb[0],xb[1],C.ink,4);P.label(xb[0]-.08,xb[1]-.05,'$\\mathbf x_2$',C.ink,{sz:11,align:'right',base:'top'});
        polyP(P,[[xb[0],xb[1]],[xb[0]-2,xb[1]],[xb[0]-2,xb[1]-2],[xb[0],xb[1]-2]],C.inkA(.06),null);
        P.seg(xb[0],xb[1],xb[0]-1.6,xb[1],C.inkA(.4),1,[4,3]);P.seg(xb[0],xb[1],xb[0],xb[1]-1.6,C.inkA(.4),1,[4,3]);
        if(s>=2){lineInf(P,B,lam[0],lam[1],best,C.pos,2);arP(P,xb[0],xb[1],xb[0]+lam[0]*.45,xb[1]+lam[1]*.45,C.pos,2);
          P.label(xb[0]+lam[0]*.5+.05,xb[1]+lam[1]*.5,'$\\boldsymbol\\lambda$',C.pos,{sz:11});}}
      capFit(ctx,[[['minimum element','minimal element','minimal via $\\min\\boldsymbol\\lambda^T\\mathbf z$, $\\boldsymbol\\lambda\\succ0$'][s]],['Boyd figs. 2.17, 2.23',C.inkA(.55)]]);
    }},

  /* 3.1: convex function — chord, tangent, epigraph */
  cvxfn:{ar:.64,arN:.95,
    steps:['Definition: the chord between $(x,f(x))$ and $(y,f(y))$ lies on or above the graph: $f(\\theta x+(1-\\theta)y)\\le\\theta f(x)+(1-\\theta)f(y)$.',
      'First-order condition: the tangent at $x$ is a global under-estimator, $f(y)\\ge f(x)+f\'(x)(y-x)$ for all $y$.',
      'The epigraph $\\{(x,t)\\mid f(x)\\le t\\}$ is a convex set exactly when $f$ is a convex function.',
      'A sublevel set $\\{x\\mid f(x)\\le\\alpha\\}$ of a convex function is convex (an interval here). The converse fails: see quasiconvex functions.'],
    draw(ctx,W,H,st){const s=st.step|0,P=Plot(ctx,W,H,{l:16,r:14,t:44,b:20});P.clear();
      const f=x=>.35*(x-1.2)*(x-1.2)+.25*Math.exp(.6*(x-1))+.4,fp=x=>.7*(x-1.2)+.15*Math.exp(.6*(x-1));
      P.dom(-1.6,3.6).ran(0,3.4);
      if(s===2){P.fill(x=>3.4,C.negA(.0));const ctx2=ctx;ctx2.save();ctx2.beginPath();ctx2.moveTo(P.X(-1.6),P.Y(3.4));
        for(let i=0;i<=200;i++){const x=-1.6+5.2*i/200;ctx2.lineTo(P.X(x),P.Y(Math.min(3.4,f(x))));}
        ctx2.lineTo(P.X(3.6),P.Y(3.4));ctx2.closePath();ctx2.fillStyle=C.negA(.18);ctx2.fill();ctx2.restore();
        P.label(1.2,2.7,'$\\epi f$',C.neg,{sz:12,b:1,align:'center'});}
      P.curve(f,C.ink,2.4);
      if(s===0){const x=-1,y=3;P.seg(x,f(x),y,f(y),C.pos,2);P.dot(x,f(x),C.ink,3.5);P.dot(y,f(y),C.ink,3.5);
        P.label(x,f(x)+.12,'$(x,f(x))$',C.inkA(.75),{sz:10,base:'bottom',align:'center'});P.label(y,f(y)+.12,'$(y,f(y))$',C.inkA(.75),{sz:10,base:'bottom',align:'right'});}
      if(s===1){const x=.2;P.curve(y=>f(x)+fp(x)*(y-x),C.pos,2);P.dot(x,f(x),C.ink,4);
        P.label(x,f(x)-.14,'$(x,f(x))$',C.inkA(.75),{sz:10,base:'top'});P.label(3.4,f(x)+fp(x)*(3.4-x)+.1,'$f(x)+\\nabla f(x)^T(y-x)$',C.pos,{sz:10,align:'right',base:'bottom'});}
      if(s===3){const al=1.6;P.hline(al,C.wall,1.4,[4,3]);let a=null,b=null;for(let i=0;i<=400;i++){const x=-1.6+5.2*i/400;if(f(x)<=al){if(a===null)a=x;b=x;}}
        P.seg(a,.05,b,.05,C.wall,4);P.label(3.5,al+.05,'$\\alpha$',C.wall,{sz:11,align:'right',base:'bottom'});}
      capFit(ctx,[[['chord above the graph','tangent below the graph','convex function ⇔ convex epigraph','sublevel sets are convex'][s]],['Boyd figs. 3.1, 3.2, 3.5',C.inkA(.55)]]);
    }},

  /* 3.3: conjugate as the largest gap between yx and f(x) */
  conj:{ar:.64,arN:.98,opt:{y:1},
    chips:[{sep:'slope $y$'},{label:'$y = 0.4$',set:{y:.4}},{label:'$y = 1$',set:{y:1},on:true},{label:'$y = 1.8$',set:{y:1.8}}],
    draw(ctx,W,H,st){const y=st.opt.y,P=Plot(ctx,W,H,{l:16,r:14,t:44,b:20});P.clear();
      const f=x=>.5*x*x-.2*x+.3;P.dom(-1.2,3.2).ran(-1.6,4);
      P.hline(0,C.axis,1.1);P.vline(0,C.axis,1.1);
      P.curve(f,C.ink,2.4);P.curve(x=>y*x,C.prob,2);
      const xs=(y+.2),gap=y*xs-f(xs);
      P.seg(xs,f(xs),xs,y*xs,C.pos,3);P.dot(xs,f(xs),C.ink,3.5);
      P.curve(x=>y*x-gap,C.prob,1.4,[5,4]);P.dot(0,-gap,C.pos,4);
      P.label(.06,-gap,'$(0,-f^*(y))$',C.pos,{sz:10,base:'middle'});
      P.label(xs+.06,(f(xs)+y*xs)/2,'gap $= f^*(y)$',C.pos,{sz:10});
      P.label(3.1,y*3.1,'$xy$',C.prob,{sz:11,align:'right',base:'bottom'});P.label(2.9,f(2.9),'$f(x)$',C.ink,{sz:11,align:'right',base:'top'});
      capFit(ctx,[['$f^*(y) = \\sup_x\\,(yx-f(x))$'],['the supporting line of slope $y$ cuts the vertical axis at $-f^*(y)$ (Boyd fig. 3.8)',C.inkA(.6)]]);
    }},

  /* 3.4: quasiconvex function on R */
  quasi:{ar:.6,arN:.92,
    steps:['A quasiconvex function on $\\mathbf R$: down, then up (unimodal). It is not convex: it has concave stretches.',
      'Every sublevel set $S_\\alpha = \\{x\\mid f(x)\\le\\alpha\\}$ is an interval, so convex. Same for $S_\\beta$.',
      'Equivalent test: $f(\\theta x+(1-\\theta)y)\\le\\max\\{f(x),f(y)\\}$ — the graph between two points never rises above the higher end.'],
    draw(ctx,W,H,st){const s=st.step|0,P=Plot(ctx,W,H,{l:16,r:14,t:44,b:20});P.clear();
      const f=x=>Math.log(1+Math.abs(x-1)*2.2)*1.1+(x>1?.25*(x-1):0);P.dom(-2.2,4.2).ran(-.3,2.6);
      P.curve(f,C.ink,2.4);
      const lev=(al,col,yb)=>{let a=null,b=null;for(let i=0;i<=600;i++){const x=-2.2+6.4*i/600;if(f(x)<=al){if(a===null)a=x;b=x;}}
        P.hline(al,col,1.3,[4,3]);P.seg(a,yb,b,yb,col,4);};
      if(s>=1){lev(1.4,C.neg,-.12);lev(2.1,C.wall,-.24);P.label(4.1,1.45,'$\\alpha$',C.neg,{sz:11,align:'right',base:'bottom'});P.label(4.1,2.15,'$\\beta$',C.wall,{sz:11,align:'right',base:'bottom'});}
      if(s>=2){const x=-1.4,y=3.6;P.dot(x,f(x),C.pos,4);P.dot(y,f(y),C.pos,4);P.hline(Math.max(f(x),f(y)),C.pos,1.4,[2,3]);
        P.label(-2.1,Math.max(f(x),f(y))+.05,'$\\max\\{f(x),f(y)\\}$',C.pos,{sz:10,base:'bottom'});}
      capFit(ctx,[[['quasiconvex, not convex','sublevel sets are intervals','below the max of the two ends'][s]],['Boyd fig. 3.9',C.inkA(.55)]]);
    }},

/* ════════════════════════ MODULE III ════════════════════════ */

  /* 4.2.3: optimality criterion — −∇f0(x*) supports the feasible set */
  optcrit:{ar:.66,arN:.98,
    draw(ctx,W,H){const P=Plot(ctx,W,H,PADF);P.clear();
      const B=isoBox(P,W,H,PADF,-2.5,2.5,-1.9,1.9),X=[];
      for(let i=0;i<=120;i++){const t=i/120*2*Math.PI;X.push([-.7+1.25*Math.cos(t),-.2+.9*Math.sin(t)]);}
      const f=(x,y)=>(x-1.5)*(x-1.5)+2*(y-.9)*(y-.9);
      contourP(P,B,f,[.5,1.5,3,5,7.5,10.5],C.inkA(.3),1.1);
      polyP(P,X,C.negA(.18),C.neg,2);P.label(-1.2,-.4,'$X$',C.neg,{sz:12,b:1});
      let xs=null,v=1e9;X.forEach(q=>{const w=f(q[0],q[1]);if(w<v){v=w;xs=q;}});
      const g=[2*(xs[0]-1.5),4*(xs[1]-.9)],ng=Math.hypot(g[0],g[1]);
      lineInf(P,B,-g[0],-g[1],-g[0]*xs[0]-g[1]*xs[1],C.pos,2);
      arP(P,xs[0],xs[1],xs[0]-g[0]/ng*.9,xs[1]-g[1]/ng*.9,C.prob,2.2);
      P.label(xs[0]-g[0]/ng*.95+.05,xs[1]-g[1]/ng*.95,'$-\\nabla f_0(\\mathbf x)$',C.prob,{sz:10});
      P.dot(xs[0],xs[1],C.ink,4.5);P.label(xs[0]-.1,xs[1]+.1,'$\\mathbf x$',C.ink,{sz:11,align:'right',base:'bottom'});
      capFit(ctx,[['$\\nabla f_0(\\mathbf x)^T(\\mathbf y-\\mathbf x)\\ge0$ for all feasible $\\mathbf y$'],['$-\\nabla f_0(\\mathbf x)$ is an outward normal of a supporting hyperplane to $X$ at $\\mathbf x$ (Boyd fig. 4.2)',C.inkA(.6)]]);
    }},

  /* 4.3: LP geometry */
  lpgeo:{ar:.7,arN:1.0,
    draw(ctx,W,H){const P=Plot(ctx,W,H,PADF);P.clear();
      const B=isoBox(P,W,H,PADF,-2.4,2.4,-2.0,2.0);
      const cons=[[1,.3,1.2],[.3,1,1.1],[-1,.6,1.3],[-.5,-1,1.2],[.8,-.8,1.3]];let poly=[[B.x0,B.y0],[B.x1,B.y0],[B.x1,B.y1],[B.x0,B.y1]];
      cons.forEach(c=>{poly=clipHalfP(poly,c[0],c[1],c[2]);});
      const c=[-.6,-1];let xs=null,v=1e9;poly.forEach(q=>{const w=c[0]*q[0]+c[1]*q[1];if(w<v){v=w;xs=q;}});
      [-1.4,-.6,.2,1.0].forEach(t=>lineInf(P,B,c[0],c[1],v+t*0+t+1.2,C.inkA(.2),1,[4,4]));
      polyP(P,poly,C.negA(.16),C.neg,2);P.label(0,0,'$\\mathcal P$',C.neg,{sz:12,b:1,align:'center'});
      lineInf(P,B,c[0],c[1],v,C.pos,2.2);
      arP(P,xs[0],xs[1],xs[0]-c[0]*.7,xs[1]-c[1]*.7,C.prob,2.2);P.label(xs[0]-c[0]*.75+.05,xs[1]-c[1]*.75,'$-\\mathbf c$',C.prob,{sz:11});
      P.dot(xs[0],xs[1],C.ink,4.5);P.label(xs[0]+.1,xs[1]+.05,'$\\mathbf x^\\star$',C.ink,{sz:11,base:'bottom'});
      capFit(ctx,[['minimise $\\mathbf c^T\\mathbf x$ over the polyhedron $\\mathcal P$'],['level lines $\\mathbf c^T\\mathbf x = $ const; the optimum is a vertex (Boyd fig. 4.4)',C.inkA(.6)]]);
    }},

  /* 4.3.1: Chebyshev centre */
  cheb:{ar:.66,arN:.98,
    draw(ctx,W,H){const P=Plot(ctx,W,H,PADF);P.clear();
      const B=isoBox(P,W,H,PADF,-2.4,2.4,-1.9,1.9);
      const cons=[[1,.2,1.5],[.2,1,1.2],[-1,.5,1.4],[-.3,-1,1.1],[.7,-.7,1.3]].map(c=>{const n=Math.hypot(c[0],c[1]);return [c[0]/n,c[1]/n,c[2]/n];});
      let poly=[[B.x0,B.y0],[B.x1,B.y0],[B.x1,B.y1],[B.x0,B.y1]];cons.forEach(c=>{poly=clipHalfP(poly,c[0],c[1],c[2]);});
      polyP(P,poly,C.negA(.16),C.neg,2);
      // largest r: brute-force grid search of max_x min_i (b_i − a_i^T x)
      let best=[-1,0,0];for(let i=0;i<=120;i++)for(let j=0;j<=120;j++){const x=-2+4*i/120,y=-2+4*j/120;
        let r=9;cons.forEach(c=>{r=Math.min(r,c[2]-c[0]*x-c[1]*y);});if(r>best[0])best=[r,x,y];}
      const pts=[];for(let i=0;i<=80;i++){const t=i/80*2*Math.PI;pts.push([best[1]+best[0]*Math.cos(t),best[2]+best[0]*Math.sin(t)]);}
      polyP(P,pts,C.posA(.16),C.pos,2);P.dot(best[1],best[2],C.ink,4);
      P.seg(best[1],best[2],best[1]+best[0],best[2],C.ink,1.4,[3,3]);P.label(best[1]+best[0]/2,best[2]+.05,'$r$',C.ink,{sz:11,align:'center',base:'bottom'});
      P.label(best[1]-.06,best[2]-.06,'$\\mathbf x_c$',C.ink,{sz:11,align:'right',base:'top'});
      capFit(ctx,[['Chebyshev centre: the largest ball inside $\\mathcal P$'],['maximise $r$ s.t. $\\mathbf a_i^T\\mathbf x_c+r\\|\\mathbf a_i\\|_2\\le b_i$: an LP',C.inkA(.6)]]);
    }},

  /* 4.7: achievable objective values, Pareto points, scalarisation */
  pareto:{ar:.66,arN:1.0,opt:{l:1},
    chips:[{sep:'weights $\\boldsymbol\\lambda = (1,\\lambda_2)$'},{label:'$\\lambda_2 = 0.4$',set:{l:.4}},{label:'$\\lambda_2 = 1$',set:{l:1},on:true},{label:'$\\lambda_2 = 2.5$',set:{l:2.5}}],
    draw(ctx,W,H,st){const l2=st.opt.l,pad={l:24,r:12,t:44,b:22},P=Plot(ctx,W,H,pad);P.clear();
      const B=isoBox(P,W,H,pad,0,5,0,4),O=[];
      for(let i=0;i<=120;i++){const t=i/120*2*Math.PI;O.push([2.6+1.6*Math.cos(t)*.95,2.1+1.25*Math.sin(t)]);}
      polyP(P,O,C.negA(.16),C.neg,2);P.label(3.0,2.4,'$\\mathcal O$',C.neg,{sz:12,b:1});
      P.seg(0,0,5,0,C.axis,1.2);P.seg(0,0,0,4,C.axis,1.2);P.label(5,0,'$F_1$',C.inkA(.6),{sz:10,align:'right',base:'top'});P.label(0,4,'$F_2$',C.inkA(.6),{sz:10,base:'top'});
      // Pareto boundary: lower-left arc
      const par=O.filter(q=>{return !O.some(r=>r[0]<q[0]-1e-6&&r[1]<q[1]-1e-6);});
      pathP(P,par.sort((a,b)=>a[0]-b[0]),C.wall,3.4);
      let xb=null,v=1e9;O.forEach(q=>{const w=q[0]+l2*q[1];if(w<v){v=w;xb=q;}});
      lineInf(P,B,1,l2,v,C.pos,2);P.dot(xb[0],xb[1],C.ink,4.5);
      arP(P,xb[0],xb[1],xb[0]+.45,xb[1]+.45*l2,C.pos,2);P.label(xb[0]+.5,xb[1]+.5*l2,'$\\boldsymbol\\lambda$',C.pos,{sz:11});
      capFit(ctx,[['Pareto optimal values (crimson) and scalarisation'],['minimising $\\boldsymbol\\lambda^TF$ with $\\boldsymbol\\lambda\\succ0$ gives a Pareto point (Boyd figs. 4.9–4.10)',C.inkA(.6)]]);
    }},

/* ════════════════════════ MODULE IV ════════════════════════ */

  /* exercise 5.1: L(x,λ) for several λ and the dual function */
  dualfn:{ar:.68,arN:1.05,opt:{l:1},
    chips:[{sep:'$\\lambda$'},{label:'$0$',set:{l:0}},{label:'$1$',set:{l:1},on:true},{label:'$2$',set:{l:2}},{label:'$3$',set:{l:3}}],
    draw(ctx,W,H,st){const l=st.opt.l,P=Plot(ctx,W,H,{l:20,r:12,t:44,b:22});P.clear();
      const f0=x=>x*x+1,f1=x=>(x-2)*(x-4),L=x=>f0(x)+l*f1(x),xm=3*l/(1+l),g=L(xm);
      P.dom(-1,5).ran(-4,14);
      ctx.save();ctx.fillStyle=C.negA(.1);ctx.fillRect(P.X(2),P.Y(14),P.X(4)-P.X(2),P.Y(-4)-P.Y(14));ctx.restore();
      P.hline(0,C.axis,1.1);
      P.curve(f0,C.ink,2.4);P.curve(f1,C.inkA(.45),1.6,[5,4]);P.curve(L,C.prob,2.2);
      P.dot(2,5,C.ink,4.5);P.label(2.05,5.3,'$(x^\\star,p^\\star) = (2,5)$',C.ink,{sz:10,base:'bottom'});
      P.dot(xm,g,C.prob,4);P.hline(g,C.pos,1.4,[3,3]);P.label(-.95,g+.2,'$g('+l+') = '+(Math.round(g*100)/100)+'$',C.pos,{sz:10,base:'bottom'});
      P.label(4.9,f0(4.9)>14?13.5:f0(4.9),'$f_0$',C.ink,{sz:11,align:'right'});P.label(4.9,f1(4.9),'$f_1$',C.inkA(.6),{sz:11,align:'right',base:'bottom'});
      P.label(3,-3.6,'feasible $[2,4]$',C.neg,{sz:9.5,align:'center',base:'bottom'});
      capFit(ctx,[['$L(x,\\lambda) = x^2+1+\\lambda(x-2)(x-4)$'],['$\\min_xL$ is a lower bound on $p^\\star = 5$; at $\\lambda = 2$ it equals it',C.inkA(.6)]]);
    }},

  /* 5.3: the set G of (f1, f0) values and supporting lines */
  geomG:{ar:.68,arN:1.05,opt:{l:2},
    chips:[{sep:'$\\lambda$'},{label:'$0.5$',set:{l:.5}},{label:'$2$',set:{l:2},on:true},{label:'$4$',set:{l:4}}],
    steps:['$\\mathcal G = \\{(f_1(x),f_0(x))\\mid x\\in\\mathbf R\\}$ for exercise 5.1, a curve in the $(u,t)$-plane. $p^\\star$ is the lowest $t$ over the part with $u\\le0$.',
      'For fixed $\\lambda\\ge0$, $g(\\lambda) = \\min\\{t+\\lambda u\\mid(u,t)\\in\\mathcal G\\}$: slide the line $\\lambda u+t = $ const up until it touches $\\mathcal G$. It meets the $t$-axis at $g(\\lambda)$.',
      'The set $\\mathcal A$ (everything above and to the right of $\\mathcal G$) is convex here, and the best supporting line passes through $(0,p^\\star)$: strong duality.'],
    draw(ctx,W,H,st){const s=st.step|0,l=st.opt.l,pad={l:26,r:12,t:44,b:22},P=Plot(ctx,W,H,pad);P.clear();
      P.dom(-2,8).ran(-2,22);
      const G=[];for(let i=0;i<=200;i++){const x=-1+6*i/200;G.push([(x-2)*(x-4),x*x+1]);}
      if(s>=2){const ctx2=ctx;ctx2.save();ctx2.beginPath();
        const lower=[];for(let i=0;i<=200;i++){const u=-1+9*i/200;let t=1e9;for(let j=0;j<=400;j++){const x=-1+7*j/400,uu=(x-2)*(x-4);if(uu<=u)t=Math.min(t,x*x+1);}lower.push([u,Math.min(t,22)]);}
        lower.forEach((q,i)=>{const X=P.X(q[0]),Y=P.Y(q[1]);i?ctx2.lineTo(X,Y):ctx2.moveTo(X,Y);});
        ctx2.lineTo(P.X(8),P.Y(22));ctx2.lineTo(P.X(-1),P.Y(22));ctx2.closePath();ctx2.fillStyle=C.negA(.13);ctx2.fill();ctx2.restore();
        P.label(5,16,'$\\mathcal A$',C.neg,{sz:12,b:1});}
      P.hline(0,C.axis,1.1);P.vline(0,C.axis,1.1);
      pathP(P,G,C.ink,2.4);P.label(6.5,17.5,'$\\mathcal G$',C.ink,{sz:12,b:1});
      P.dot(0,5,C.ink,4.5);P.label(.15,5,'$p^\\star = 5$',C.ink,{sz:10,base:'top'});
      if(s>=1){const g=-9*l*l/(1+l)+1+8*l;P.curve(u=>g-l*u,C.pos,2);P.dot(0,g,C.pos,4);
        P.label(-.15,g+.4,'$g(\\lambda) = '+(Math.round(g*100)/100)+'$',C.pos,{sz:10,align:'right',base:'bottom'});
        P.label(7.8,0,'$u$',C.inkA(.6),{sz:10,align:'right',base:'top'});}
      capFit(ctx,[[['the set $\\mathcal G$ of values','a supporting line of slope $-\\lambda$','$\\mathcal A$ convex: strong duality'][s]],['Boyd figs. 5.3–5.5',C.inkA(.55)]]);
    }},

  /* 5.5.3: water-filling */
  waterfill:{ar:.58,arN:.9,
    draw(ctx,W,H){const P=Plot(ctx,W,H,{l:18,r:12,t:44,b:20});P.clear();
      const al=[.6,1.7,.9,2.5,1.2,.35],tot=3.2;let lo=1e-3,hi=10;
      for(let k=0;k<80;k++){const m=(lo+hi)/2;const s=al.reduce((a,b)=>a+Math.max(0,m-b),0);if(s>tot)hi=m;else lo=m;}
      const lev=(lo+hi)/2;P.dom(0,al.length).ran(0,3.4);
      al.forEach((a,i)=>{ctx.save();ctx.fillStyle=C.inkA(.18);ctx.fillRect(P.X(i+.08),P.Y(a),P.X(i+.92)-P.X(i+.08),P.Y(0)-P.Y(a));
        if(lev>a){ctx.fillStyle=C.probA(.35);ctx.fillRect(P.X(i+.08),P.Y(lev),P.X(i+.92)-P.X(i+.08),P.Y(a)-P.Y(lev));}
        ctx.restore();P.label(i+.5,a,'$\\alpha_'+(i+1)+'$',C.inkA(.7),{sz:10,align:'center',base:'bottom'});});
      P.hline(lev,C.prob,1.8,[5,3]);P.label(.05,lev+.05,'$1/\\nu^\\star$',C.prob,{sz:11,base:'bottom'});
      capFit(ctx,[['water-filling: $x_i^\\star = \\max\\{0,\\,1/\\nu^\\star-\\alpha_i\\}$'],['pour total $\\mathbf 1^T\\mathbf x = 1$ (here scaled) of water over patches at heights $\\alpha_i$',C.inkA(.6)]]);
    }},

  /* 5.5.3 geometric KKT for one inequality */
  kktfig:{ar:.66,arN:1.0,
    draw(ctx,W,H){const P=Plot(ctx,W,H,PADF);P.clear();
      const B=isoBox(P,W,H,PADF,-2.4,2.4,-1.9,1.9),f0=(x,y)=>(x-1.6)*(x-1.6)+(y-1.2)*(y-1.2),f1=(x,y)=>x*x+y*y-1.44;
      contourP(P,B,f0,[.3,.9,1.8,3,4.5],C.inkA(.3),1.1);
      const disc=[];for(let i=0;i<=100;i++){const t=i/100*2*Math.PI;disc.push([1.2*Math.cos(t),1.2*Math.sin(t)]);}
      polyP(P,disc,C.negA(.16),C.neg,2);P.label(-.4,-.3,'$f_1\\le0$',C.neg,{sz:11});
      const n=Math.hypot(1.6,1.2),xs=[1.2*1.6/n,1.2*1.2/n];
      P.dot(xs[0],xs[1],C.ink,4.5);P.label(xs[0]-.1,xs[1]-.05,'$\\mathbf x^\\star$',C.ink,{sz:11,align:'right',base:'top'});
      const g0=[2*(xs[0]-1.6),2*(xs[1]-1.2)],g1=[2*xs[0],2*xs[1]];
      arP(P,xs[0],xs[1],xs[0]-g0[0]*1.1,xs[1]-g0[1]*1.1,C.prob,2.2);P.label(xs[0]-g0[0]*1.15+.05,xs[1]-g0[1]*1.15,'$-\\nabla f_0$',C.prob,{sz:10});
      arP(P,xs[0],xs[1],xs[0]+g1[0]*.32,xs[1]+g1[1]*.32,C.pos,2.2);P.label(xs[0]+g1[0]*.34-.05,xs[1]+g1[1]*.34+.1,'$\\nabla f_1$',C.pos,{sz:10,align:'right',base:'bottom'});
      capFit(ctx,[['KKT: $\\nabla f_0(\\mathbf x^\\star)+\\lambda^\\star\\nabla f_1(\\mathbf x^\\star) = \\mathbf 0$, $\\lambda^\\star\\ge0$'],['at an active constraint $-\\nabla f_0$ points along the outward normal $\\nabla f_1$',C.inkA(.6)]]);
    }},

  /* 5.8: Farkas — b in the cone of the columns of A, or a separating y */
  farkas:{ar:.64,arN:1.0,opt:{k:'out'},
    chips:[{label:'$\\mathbf b$ inside',set:{k:'in'}},{label:'$\\mathbf b$ outside',set:{k:'out'},on:true}],
    draw(ctx,W,H,st){const k=st.opt.k,P=Plot(ctx,W,H,PADF);P.clear();
      const B=isoBox(P,W,H,PADF,-2.2,2.6,-1.4,2.4),a1=[2,.5],a2=[.6,2];
      polyP(P,[[0,0],[a1[0]*1.6,a1[1]*1.6],[3,3],[a2[0]*1.6,a2[1]*1.6]],C.negA(.15),null);
      arP(P,0,0,a1[0],a1[1],C.neg,2.2);arP(P,0,0,a2[0],a2[1],C.neg,2.2);
      P.label(a1[0]+.05,a1[1],'$\\mathbf a_1$',C.neg,{sz:11});P.label(a2[0],a2[1]+.08,'$\\mathbf a_2$',C.neg,{sz:11,base:'bottom'});
      const b=k==='in'?[1.4,1.2]:[-1.3,1.4];arP(P,0,0,b[0],b[1],C.ink,2.2);P.label(b[0]-.05,b[1]+.06,'$\\mathbf b$',C.ink,{sz:11,align:'right',base:'bottom'});
      if(k==='out'){const y=[a2[1],-a2[0]],ny=Math.hypot(y[0],y[1]);   // y ⟂ a2, y^T a1 > 0, y^T b < 0
        lineInf(P,B,y[0],y[1],0,C.pos,2);arP(P,0,0,y[0]/ny*.9,y[1]/ny*.9,C.pos,2.2);P.label(y[0]/ny*.95+.05,y[1]/ny*.95,'$\\mathbf y$',C.pos,{sz:11});}
      P.dot(0,0,C.ink,3);
      capFit(ctx,[[k==='in'?'$A\\mathbf x = \\mathbf b$, $\\mathbf x\\succeq0$ is solvable: $\\mathbf b$ is in the cone':'no $\\mathbf x\\succeq0$: a $\\mathbf y$ with $A^T\\mathbf y\\succeq0$, $\\mathbf b^T\\mathbf y\\lt 0$ separates'],['Farkas lemma: exactly one of the two systems is solvable',C.inkA(.6)]]);
    }},

  /* 5.4: saddle point of L for exercise 5.1 */
  saddlefig:{ar:.72,arN:1.0,
    draw(ctx,W,H){const pad={l:24,r:12,t:44,b:22},P=Plot(ctx,W,H,pad);P.clear();
      const L=(x,l)=>x*x+1+l*(x-2)*(x-4),B={x0:-.5,x1:4.5,y0:0,y1:4.5};P.dom(B.x0,B.x1).ran(B.y0,B.y1);
      heatP(P,B,(x,l)=>L(x,l)-5,6,60);
      contourP(P,B,(x,l)=>L(x,l),[1,2,3,4,4.6,5,5.4,6,7,9,12],(v)=>Math.abs(v-5)<1e-9?C.ink:C.inkA(.35),1.1);
      P.seg(B.x0,0,B.x1,0,C.axis,1.2);P.seg(0,0,0,B.y1,C.axis,1.2);
      P.label(B.x1,0,'$x$',C.inkA(.6),{sz:10,align:'right',base:'bottom'});P.label(0,B.y1,'$\\lambda$',C.inkA(.6),{sz:10,base:'top'});
      P.dot(2,2,C.ink,5);P.label(2.1,2.1,'$(x^\\star,\\lambda^\\star) = (2,2)$',C.ink,{sz:10,base:'bottom'});
      capFit(ctx,[['$L(x,\\lambda)$ near its saddle point'],['minimum in $x$ and maximum in $\\lambda$ at $(2,2)$, value $p^\\star = d^\\star = 5$',C.inkA(.6)]]);
    }},
});

/* convex hull of points (monotone chain) */
function hullPts(pts){
  const p=pts.slice().sort((a,b)=>a[0]-b[0]||a[1]-b[1]);
  const cr=(o,a,b)=>(a[0]-o[0])*(b[1]-o[1])-(a[1]-o[1])*(b[0]-o[0]);
  const lo=[],up=[];
  for(const q of p){while(lo.length>1&&cr(lo[lo.length-2],lo[lo.length-1],q)<=0)lo.pop();lo.push(q);}
  for(let i=p.length-1;i>=0;i--){const q=p[i];while(up.length>1&&cr(up[up.length-2],up[up.length-1],q)<=0)up.pop();up.push(q);}
  lo.pop();up.pop();return lo.concat(up);
}
