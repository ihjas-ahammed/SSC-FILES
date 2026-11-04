/* ═════════════════════════════════════════════════════════════════════
   emu.js — spliced into tex.js at //@@EMU@@  (it can use every helper of tex.js)
   Modules III–IV: amsmath displays and numbering, \DeclareMathOperator, \sideset, amsthm,
   natbib, boxes, colours, footnote styles, minipage, and the beamer slide emulator.
   ═════════════════════════════════════════════════════════════════════ */

/* commands the linter must accept in Modules III–IV */
`alpha beta gamma delta epsilon varepsilon zeta eta theta vartheta iota kappa lambda mu nu xi pi varpi rho varrho sigma varsigma tau upsilon phi varphi chi psi omega
Gamma Delta Theta Lambda Xi Pi Sigma Upsilon Phi Psi Omega digamma varkappa
pm mp times div ast star circ bullet cdot cap cup uplus sqcap sqcup vee wedge setminus wr diamond bigtriangleup bigtriangledown triangleleft triangleright lhd rhd unlhd unrhd
oplus ominus otimes oslash odot bigcirc dagger ddagger amalg leq geq equiv models prec succ sim perp preceq succeq simeq mid ll gg asymp parallel subset supset approx bowtie
subseteq supseteq cong Join sqsubset sqsupset neq smile sqsubseteq sqsupseteq doteq frown ni propto vdash dashv le ge ne in notin
leftarrow longleftarrow uparrow Leftarrow Longleftarrow Uparrow rightarrow longrightarrow downarrow Rightarrow Longrightarrow Downarrow leftrightarrow longleftrightarrow
updownarrow Leftrightarrow Longleftrightarrow Updownarrow mapsto longmapsto nearrow hookleftarrow hookrightarrow searrow leftharpoonup rightharpoonup swarrow leftharpoondown
rightharpoondown nwarrow rightleftharpoons leadsto gets to ldots cdots vdots ddots aleph prime forall infty hbar emptyset exists nabla surd Box Diamond triangle imath jmath ell neg
top flat natural sharp wp bot clubsuit Re diamondsuit Im backslash heartsuit angle partial spadesuit mho varnothing blacksquare square lozenge
sum prod coprod int oint bigcap bigcup bigsqcup bigvee bigwedge bigodot bigotimes bigoplus biguplus iint iiint
arccos arcsin arctan arg cosh cot coth csc deg det dim gcd hom inf ker lg liminf limsup Pr sec sinh sup tanh
lfloor rfloor lceil rceil langle rangle lbrace rbrace lvert rvert lVert rVert vert Vert middle bigl bigr Bigl Bigr biggl biggr Biggl Biggr big Big bigg Bigg
acute breve check grave widetilde widehat overleftarrow overrightarrow overline underline overbrace underbrace
binom dbinom tbinom tfrac dfrac cfrac genfrac overset underset xrightarrow xleftarrow underrightarrow underleftarrow substack sideset boldsymbol intertext hdotsfor
dotsc dotsb dotsm dotsi eqref numberwithin DeclareMathOperator DeclareMathAlphabet operatorname mathbin mathrel mathop mathord mathnormal mathfrak mathscr
scriptstyle scriptscriptstyle limits nolimits displaylimits qquad quad stackrel mathstrut vphantom hphantom phantom ensuremath bmod mod ldotp cdotp colon choose atop over
mathsfsl mathsection mathparagraph
raisebox mbox fbox makebox framebox parbox minipage width height depth totalheight fboxrule fboxsep hspace vspace hrule
graphicspath DeclareGraphicsExtensions FloatBarrier afterpage topnumber bottomnumber totalnumber textfraction topfraction bottomfraction floatpagefraction
thefootnote thempfootnote fnsymbol footnotemark footnotetext mpfootnote makeatletter makeatother tnote ding descriptionlabel
pushtabs poptabs endfirsthead endhead endfoot endlastfoot newtheorem theoremstyle newtheoremstyle swapnumbers qedsymbol qed thmname thmnumber thmnote mdseries
frame frametitle framesubtitle titlepage usetheme usecolortheme usefonttheme useinnertheme useoutertheme setbeamercolor setbeamertemplate setbeamerfont pause only onslide uncover
visible invisible alert alt temporal structure institute subtitle titlegraphic logo hyperlink hypertarget beamergotobutton beamerbutton beamerreturnbutton colorbox fcolorbox pagecolor
note againframe action
citet citep citealt citealp citeauthor citeyear citeyearpar citetext defcitealias citetalias citepalias bibpunct citestyle Citet Citep
stepcounter value nonumber footnotesize textsuperscript lq rq i j`.split(/\s+/).forEach(c=>KNOWN.add(c));
/* what each command or environment needs (any one of the packages listed is enough) */
const NEED_CMD={binom:'amsmath',dbinom:'amsmath',tbinom:'amsmath',tfrac:'amsmath',dfrac:'amsmath',cfrac:'amsmath',genfrac:'amsmath',overset:'amsmath',underset:'amsmath',
  xrightarrow:'amsmath',xleftarrow:'amsmath',underrightarrow:'amsmath',underleftarrow:'amsmath',substack:'amsmath',sideset:'amsmath',boldsymbol:'amsmath',text:'amsmath',
  intertext:'amsmath',hdotsfor:'amsmath',dotsc:'amsmath',dotsb:'amsmath',dotsm:'amsmath',dotsi:'amsmath',eqref:'amsmath',tag:'amsmath',notag:'amsmath',numberwithin:'amsmath',
  DeclareMathOperator:'amsmath',operatorname:'amsmath',
  mathbb:'amssymb amsfonts',mathfrak:'amssymb amsfonts eufrak',Box:'amssymb latexsym amsfonts',Diamond:'amssymb latexsym',square:'amssymb',lozenge:'amssymb',blacksquare:'amssymb',
  varnothing:'amssymb',mho:'amssymb latexsym',lhd:'amssymb latexsym',rhd:'amssymb latexsym',leadsto:'amssymb latexsym',
  theoremstyle:'amsthm',newtheoremstyle:'amsthm',swapnumbers:'amsthm',qedsymbol:'amsthm',thmname:'amsthm',thmnumber:'amsthm',thmnote:'amsthm',
  citet:'natbib',citep:'natbib',citealt:'natbib',citealp:'natbib',citeauthor:'natbib',citeyear:'natbib',citeyearpar:'natbib',citetext:'natbib',defcitealias:'natbib',
  citetalias:'natbib',citepalias:'natbib',bibpunct:'natbib',citestyle:'natbib',
  ding:'pifont',FloatBarrier:'placeins',afterpage:'afterpage',tnote:'threeparttable',graphicspath:'graphicx',DeclareGraphicsExtensions:'graphicx',
  colorbox:'xcolor color',fcolorbox:'xcolor color',
  frametitle:'@beamer',titlepage:'@beamer',pause:'@beamer',only:'@beamer',onslide:'@beamer',usetheme:'@beamer',setbeamercolor:'@beamer',institute:'@beamer'};
const NEED_ENV={align:'amsmath',alignat:'amsmath',flalign:'amsmath',gather:'amsmath',multline:'amsmath',split:'amsmath',aligned:'amsmath',gathered:'amsmath',alignedat:'amsmath',
  cases:'amsmath',matrix:'amsmath',pmatrix:'amsmath',bmatrix:'amsmath',Bmatrix:'amsmath',vmatrix:'amsmath',Vmatrix:'amsmath',smallmatrix:'amsmath',
  proof:'amsthm',longtable:'longtable',threeparttable:'threeparttable',tablenotes:'threeparttable',
  frame:'@beamer',block:'@beamer',alertblock:'@beamer',exampleblock:'@beamer',columns:'@beamer',column:'@beamer'};
`itemize enumerate description columns column frame block alertblock exampleblock theorem lemma corollary proposition definition definitions example examples proof fact
align alignat flalign gather multline split aligned gathered alignedat cases matrix pmatrix bmatrix Bmatrix vmatrix Vmatrix smallmatrix subequations
minipage longtable threeparttable tablenotes itshape bfseries sffamily slshape scshape ttfamily rmfamily`.split(/\s+/).forEach(e=>{ENVS.add(e);ENVS.add(e+'*');});
const BEAMER_LOADS=new Set(['amsmath','amssymb','amsthm','amsfonts','graphicx','xcolor','color','hyperref']);

/* ───────────────────────── colours ───────────────────────── */
const COLORS={red:[255,0,0],green:[0,255,0],blue:[0,0,255],cyan:[0,255,255],magenta:[255,0,255],yellow:[255,255,0],orange:[255,128,0],violet:[128,0,128],
  purple:[191,0,64],brown:[191,128,64],pink:[255,191,191],olive:[128,128,0],black:[0,0,0],darkgray:[64,64,64],gray:[128,128,128],lightgray:[191,191,191],white:[255,255,255]};
function colorRGB(spec,model){
  spec=String(spec).trim();
  if(model){
    const v=spec.split(',').map(x=>parseFloat(x));
    if(model==='rgb')return v.map(x=>Math.round(255*x));
    if(model==='gray')return [Math.round(255*v[0]),Math.round(255*v[0]),Math.round(255*v[0])];
    if(model==='cmyk'){const [c,m,y,k]=v;return [Math.round(255*(1-c)*(1-k)),Math.round(255*(1-m)*(1-k)),Math.round(255*(1-y)*(1-k))];}
    if(model==='HTML'){const h=spec.replace('#','');return [parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)];}
  }
  const p=spec.split('!');
  const named=n=>COLORS[n.trim()]||[0,0,0];
  let c=named(p[0]);
  for(let i=1;i<p.length;i+=2){const pc=parseFloat(p[i])/100;const o=p[i+1]!==undefined?named(p[i+1]):[255,255,255];
    c=c.map((v,k)=>Math.round(v*pc+o[k]*(1-pc)));}
  return c;
}
const rgbCSS=c=>`rgb(${c[0]},${c[1]},${c[2]})`;

/* ───────────────────────── amsmath ───────────────────────── */
const EQENV=/^(equation|align|alignat|flalign|gather|multline|displaymath|eqnarray)(\*?)$/;
const fmtRoman=(n,up)=>fmtCounter(n,up?'Roman':'roman');
function splitRows(body){return splitTop(body,'\\\\');}
function emuSideset(s){
  return s.replace(/\\sideset\s*\{((?:[^{}]|\{[^{}]*\})*)\}\s*\{((?:[^{}]|\{[^{}]*\})*)\}\s*(\\[A-Za-z]+)/g,(m,l,r,op)=>'{}'+l+op+r);
}
/* convert one display environment to \[ … \] (KaTeX understands what is inside) */
function convertDisplay(env,star,body,ctx){
  body=fixTextDollar(body);
  const numbered=!star&&env!=='displaymath';
  const grab=row=>{const ls=[];row=row.replace(/\\label\s*\{([^}]*)\}/g,(m,k)=>{ls.push(k.trim());return '';});return {row,ls};};
  const rowTag=(row)=>{
    if(/\\tag\*?\s*\{/.test(row))return {row,tag:null};
    if(/\\(notag|nonumber)\b/.test(row))return {row:row.replace(/\\(notag|nonumber)\b/g,''),tag:null};
    return {row,tag:numbered?ctx.nextEq():null};
  };
  if(env==='equation'||env==='displaymath'){
    const g=grab(body);const t=rowTag(g.row);
    g.ls.forEach(k=>ctx.setRef(k,t.tag||''));
    return '\\['+t.row+(t.tag?'\\tag{'+t.tag+'}':'')+'\\]';
  }
  if(env==='eqnarray'){return '\\[\\begin{array}{rcl}'+body+'\\end{array}\\]';}
  if(env==='multline'){
    const rows=splitRows(body).map(r=>r.trim()).filter(Boolean);
    const g=grab(rows.join('\\\\'));
    let tag=null;if(numbered&&!/\\(notag|nonumber)\b/.test(body)){tag=ctx.nextEq();g.ls.forEach(k=>ctx.setRef(k,tag));}
    const lines=g.row.split('\\\\').map((r,i,a)=>(i===0?'':'\\hspace{'+(i===a.length-1?'3':'1.5')+'em}')+r.replace(/\\(notag|nonumber)\b/g,''));
    return '\\[\\begin{array}{l}'+lines.join('\\\\ ')+'\\end{array}'+(tag?'\\tag{'+tag+'}':'')+'\\]';
  }
  /* align, alignat, flalign, gather: one \intertext starts a new display */
  const base=env==='gather'?'gather':'align';
  const segs=body.split(/\\intertext\s*/);
  const out=[];
  segs.forEach((seg,si)=>{
    let text='';
    if(si>0){const gg=group(seg,0);if(gg){text=gg.text;seg=seg.slice(gg.end);}}
    const rows=splitRows(seg.replace(/^\s*\{\d*\}/,'')).filter((r,i,a)=>r.trim()||i<a.length-1);
    const info=rows.map(r=>{
      const g=grab(r);
      const own=/\\tag(\*?)\s*\{((?:[^{}]|\{[^{}]*\})*)\}/.exec(g.row);
      if(own){return {text:g.row.replace(own[0],'').replace(/\s+$/,''),tag:(own[1]?own[2]:'('+own[2]+')'),ls:g.ls,own:true,star:!!own[1]};}
      if(/\\(notag|nonumber)\b/.test(g.row))return {text:g.row.replace(/\\(notag|nonumber)\b/g,'').replace(/\s+$/,''),tag:null,ls:g.ls};
      return {text:g.row.replace(/\s+$/,''),tag:numbered?'('+ctx.nextEq()+')':null,ls:g.ls};
    });
    info.forEach(r=>r.ls.forEach(k=>ctx.setRef(k,r.tag?r.tag.replace(/^\(|\)$/g,''):'')));
    const nt=info.filter(r=>r.tag).length;
    let tex;
    if(nt<=1){
      tex='\\[\\begin{'+base+'*}'+info.map(r=>r.text+(r.tag?(r.star?'\\tag*{'+r.tag+'}':'\\tag{'+r.tag.replace(/^\(|\)$/g,'')+'}'):'')).join('\\\\ ')+'\\end{'+base+'*}\\]';
    }else{                                       /* KaTeX takes one \tag per display: put each number at the end of its line */
      const inner=base==='gather'?'gathered':'aligned';
      tex='\\[\\begin{'+inner+'}'+info.map(r=>r.text+(r.tag?'\\quad\\text{'+r.tag+'}':'')).join('\\\\ ')+'\\end{'+inner+'}\\]';
    }
    out.push((text?'\n\n'+text+'\n\n':'')+tex);
  });
  return out.join('');
}
/* one pass over the document: sections, equation / theorem numbers, labels */
function numberingPass(s,ctx){
  const re=/\\(chapter|section|subsection)(\*?)(?![A-Za-z])|\\begin\{([A-Za-z]+\*?)\}|\\end\{([A-Za-z]+\*?)\}|\\item(?![A-Za-z])|\\label\s*\{([^}]*)\}/g;
  let out='',last=0,m;
  const envStack=[],itemN=[],closers=[];let anchor=null;
  const keepLines=(orig,repl)=>{const lost=nl(orig)-nl(repl);return lost>0?'\n'.repeat(lost):'';};
  while((m=re.exec(s))){
    if(m[1]){if(!m[2]){ctx.secStep(m[1]);anchor=ctx.secNum();}continue;}
    if(m[5]!==undefined){
      const k=m[5].trim();if(anchor!==null)ctx.setRef(k,anchor);
      out+=s.slice(last,m.index);last=m.index+m[0].length;continue;}
    if(m[4]){
      const env=m[4];
      const cl=closers[closers.length-1];
      if(cl&&cl.env===env){closers.pop();out+=s.slice(last,m.index)+cl.text;last=m.index+m[0].length;continue;}
      if(env==='enumerate'||env==='itemize'){envStack.pop();itemN.pop();}
      continue;}
    if(m[0]==='\\item'){
      if(envStack[envStack.length-1]==='enumerate'&&envStack.length===1){itemN[itemN.length-1]++;anchor=String(itemN[itemN.length-1]);}
      continue;}
    const env=m[3];
    if(env==='enumerate'||env==='itemize'){envStack.push(env);itemN.push(0);continue;}
    const em=EQENV.exec(env);
    if(em){
      const e=findEnd(s,env,m.index+m[0].length);if(!e)continue;
      const orig=s.slice(m.index,e.end);
      const tex=convertDisplay(em[1],em[2],s.slice(m.index+m[0].length,e.start),ctx);
      out+=s.slice(last,m.index)+tex+keepLines(orig,tex);
      last=e.end;re.lastIndex=e.end;
      if(em[2]==='')anchor=ctx.lastEqTag();
      continue;}
    const th=ctx.thm[env.replace(/\*$/,'')];
    if(th){
      const e=findEnd(s,env,m.index+m[0].length);if(!e)continue;
      let i=m.index+m[0].length;
      const o=optarg(s,i);let note='';if(o){note=o.text;i=o.end;}
      const st=ctx.thmStyleOf(th);
      const star=/\*$/.test(env)||th.star;
      let num='';
      if(!star){num=ctx.thmNext(th);anchor=num;}
      out+=s.slice(last,m.index)+'\\par\\medskip\\noindent'+ctx.thmHead(th,st,num,note)+'{'+st.body+' ';
      last=i;closers.push({env,text:'}\\par\\medskip'});
      continue;}
    if(env==='proof'){
      const e=findEnd(s,env,m.index+m[0].length);if(!e)continue;
      let i=m.index+m[0].length;const o=optarg(s,i);
      if(o)i=o.end;
      out+=s.slice(last,m.index)+'\\par\\medskip\\noindent'+(o?'{'+o.text+'}':'{\\itshape Proof.}')+' ';
      last=i;closers.push({env,text:' '+ctx.qed()+'\\par\\medskip'});
      continue;}
  }
  out+=s.slice(last);
  return out;
}
/* \text{a $b$ c} → \text{a }b\text{ c}  (KaTeX has no $ inside \text) */
function fixTextDollar(t){
  let out='',pos=0,m;const re=/\\text\s*\{/g;
  while((m=re.exec(t))){
    const g=group(t,m.index+m[0].length-1);if(!g)continue;
    if(g.text.indexOf('$')<0){continue;}
    const parts=g.text.split('$');
    const tex=parts.map((p,i)=>i%2===0?(p?'\\text{'+p+'}':''):p).join('');
    out+=t.slice(pos,m.index)+tex;pos=g.end;re.lastIndex=g.end;
  }
  return out+t.slice(pos);
}
/* longtable → tabular: first head, body and last foot are kept; the repeated heads and feet only matter on a printed page */
function emuLongtable(s,emulated){
  return replaceEnv(s,'longtable',(spec,body)=>{
    emulated.add('longtable');
    let first='',rest=body;
    const fh=rest.indexOf('\\endfirsthead');
    if(fh>=0){first=rest.slice(0,fh);rest=rest.slice(fh+13);rest=rest.replace(/^[\s\S]*?\\endhead/,'');}
    else rest=rest.replace(/^[\s\S]*?\\endhead/,'');
    rest=rest.replace(/[\s\S]*?\\endfoot/,'');
    const lf=rest.indexOf('\\endlastfoot');
    let tail='';if(lf>=0){tail=rest.slice(0,lf);rest=rest.slice(lf+12);}
    rest=rest.replace(/\\caption\s*(\[[^\]]*\])?\s*\{[^}]*\}\s*\\\\/g,'');
    return '\\begin{tabular}{'+spec+'}'+first+(lf>=0?'':'')+rest+(tail?'':'')+'\\end{tabular}';
  },true);
}
/* the enumerate package: \begin{enumerate}[label] → explicit labels on every item */
function emuEnumerate(s,o){
  const fmt=(n,ch)=>ch==='1'?String(n):ch==='a'?String.fromCharCode(96+n):ch==='A'?String.fromCharCode(64+n):ch==='i'?fmtCounter(n,'roman'):fmtCounter(n,'Roman');
  let guard=0,m;
  const re=/\\begin\{enumerate\}\s*\[/g;
  while(guard++<60&&(m=re.exec(s))){
    const oa=optarg(s,m.index+m[0].length-1);if(!oa)continue;
    const spec=oa.text;
    const e=findEnd(s,'enumerate',oa.end);if(!e)continue;
    const body=s.slice(oa.end,e.start);
    /* the counter character: first of 1 a A i I outside braces and outside command names */
    let ch=null,d=0;
    for(let i=0;i<spec.length;i++){const c=spec[i];
      if(c==='\\'){const mm=/^\\[A-Za-z]+/.exec(spec.slice(i));i+=mm?mm[0].length-1:1;continue;}
      if(c==='{')d++;else if(c==='}')d--;else if(d===0&&'1aAiI'.includes(c)){ch=c;break;}}
    /* the label: the literal spec with its counter character replaced */
    const mk=n=>{
      let outp='',dd=0,done=false;
      for(let i=0;i<spec.length;i++){const c=spec[i];
        if(c==='\\'){const mm=/^\\[A-Za-z]+/.exec(spec.slice(i));if(mm){outp+=mm[0];i+=mm[0].length-1;
            if(spec[i+1]==='{'){const g=group(spec,i+1);if(g){outp+=spec.slice(i+1,g.end);i=g.end-1;}}}else{outp+=spec.slice(i,i+2);i++;}continue;}
        if(c==='{'){const g=group(spec,i);if(g){outp+=g.text;i=g.end-1;continue;}}
        if(!done&&ch&&c===ch){outp+=fmt(n,ch);done=true;continue;}
        outp+=c;}
      return outp;};
    /* top-level \item positions */
    let depth=0,n=0,out='',last=0;const ir=/\\(begin|end)\{([A-Za-z*]+)\}|\\item(?![A-Za-z])/g;let im;
    while((im=ir.exec(body))){
      if(im[1]==='begin')depth++;else if(im[1]==='end')depth--;
      else if(depth===0){
        const after=body.slice(im.index+im[0].length);
        out+=body.slice(last,im.index);last=im.index+im[0].length;
        if(/^\s*\[/.test(after)){out+='\\item';n++;}
        else{n++;out+='\\item['+mk(n)+']';}
      }
    }
    out+=body.slice(last);
    s=s.slice(0,m.index)+'\\begin{enumerate}'+out+s.slice(e.start);
    re.lastIndex=m.index+10;
    o.emulated.add('enumerate package');
  }
  return s;
}
function emuMath(s,o){
  s=s.replace(/\\[;:](?![A-Za-z])/g,'\\,\\,').replace(/\\!/g,'');
  s=s.replace(/\\\[([\s\S]*?)\\\]/g,(mm,b)=>'\\['+fixTextDollar(b)+'\\]');
  s=emuEnumerate(s,o);
  /* o: {pkgs,macros,settings,floatLabels,emulated,isBook,thmDefsText} */
  const pk=o.pkgs;
  const hasAMS=pk.includes('amsthm')||o.beamer;
  /* theorem definitions, read in order so \theoremstyle works */
  const thm={},styles={
    plain:{above:'',below:'',body:'\\itshape',indent:'',headfont:'\\bfseries',punct:'.',space:' ',custom:''},
    definition:{above:'',below:'',body:'',indent:'',headfont:'\\bfseries',punct:'.',space:' ',custom:''},
    remark:{above:'',below:'',body:'',indent:'',headfont:'\\itshape',punct:'.',space:' ',custom:''}};
  const counters={};let curStyle='plain',swap=false;
  const defRe=/\\(newtheoremstyle|theoremstyle|swapnumbers|newtheorem)(\*?)(?![A-Za-z])/g;
  let out='',last=0,m;
  while((m=defRe.exec(s))){
    let i=m.index+m[0].length;
    const cmd=m[1];
    if(cmd==='swapnumbers'){swap=!swap;out+=s.slice(last,m.index);last=i;continue;}
    if(cmd==='theoremstyle'){const g=arg(s,i);if(!g)continue;curStyle=g.text.trim();out+=s.slice(last,m.index);last=g.end;defRe.lastIndex=g.end;continue;}
    if(cmd==='newtheoremstyle'){
      const a=[];let j=i;for(let k=0;k<9;k++){const g=group(s,(function(){while(/\s/.test(s[j]||'')||s[j]==='%')j++;return j;})());if(!g)break;a.push(g.text);j=g.end;}
      if(a.length===9){styles[a[0].trim()]={above:a[1],below:a[2],body:a[3],indent:a[4],headfont:a[5],punct:a[6],space:a[7],custom:a[8]};
        out+=s.slice(last,m.index);last=j;defRe.lastIndex=j;}
      continue;
    }
    /* \newtheorem{name}[shared]{Title}[within] */
    const g1=arg(s,i);if(!g1)continue;let j=g1.end;
    const sh=optarg(s,j);if(sh)j=sh.end;
    const g2=arg(s,j);if(!g2)continue;j=g2.end;
    const wi=optarg(s,j);if(wi)j=wi.end;
    const name=g1.text.trim();
    const star=m[2]==='*';
    thm[name]={name,title:g2.text,star,shared:sh?sh.text.trim():null,within:wi?wi.text.trim():null,style:curStyle,swap};
    if(!star&&!sh)counters[name]={n:0,within:wi?wi.text.trim():null};
    out+=s.slice(last,m.index);last=j;defRe.lastIndex=j;
  }
  out+=s.slice(last);s=out;
  Object.keys(thm).forEach(k=>{if(!thm[k].shared&&!thm[k].star)return;});
  const ctx={};
  /* sections */
  const sec={chapter:0,section:0,subsection:0};
  ctx.secStep=k=>{sec[k]++;if(k==='chapter'){sec.section=0;sec.subsection=0;if(o.nwEq==='chapter')eq.n=0;}
    if(k==='section'){sec.subsection=0;if(o.nwEq==='section')eq.n=0;}
    Object.keys(counters).forEach(n=>{const w=counters[n].within;if(w===k)counters[n].n=0;if(w==='section'&&k==='chapter')counters[n].n=0;if(w==='subsection'&&(k==='section'||k==='chapter'))counters[n].n=0;});};
  ctx.secNum=()=>o.isBook?[sec.chapter,sec.section,sec.subsection].filter((x,i,a)=>i<1||a.slice(0,i).every(Boolean)).filter(Boolean).join('.')||'0':
    [sec.section,sec.subsection].filter(Boolean).join('.')||'0';
  const prefixFor=w=>w==='section'?(o.isBook?sec.chapter+'.'+sec.section:String(sec.section)):w==='subsection'?(o.isBook?sec.chapter+'.'+sec.section+'.'+sec.subsection:sec.section+'.'+sec.subsection):w==='chapter'?String(sec.chapter):'';
  /* equations */
  const eq={n:0};ctx.refs={};let lastTag='';
  ctx.nextEq=()=>{eq.n++;const p=o.nwEq?(o.nwEq==='chapter'?String(sec.chapter):prefixFor('section')):'';lastTag=(p?p+'.':'')+eq.n;return lastTag;};
  ctx.lastEqTag=()=>lastTag;
  ctx.setRef=(k,v)=>{ctx.refs[k]=v;};
  ctx.refOf=k=>ctx.refs[k];
  /* theorems */
  ctx.thm=thm;
  ctx.thmStyleOf=t=>{const st=styles[t.style]||styles.plain;return st;};
  ctx.thmNext=t=>{const cn=t.shared&&thm[t.shared]?(thm[t.shared].shared||t.shared):t.name;
    const c=counters[cn]||(counters[cn]={n:0,within:null});c.n++;
    const p=c.within?prefixFor(c.within):'';return (p?p+'.':'')+c.n;};
  ctx.thmHead=(t,st,num,note)=>{
    const title=t.title,punct=hasAMS?(st.punct||''):'';
    const sp=st.space===' '||st.space===''?' ':st.space;
    let head;
    if(st.custom){
      const emp=x=>!String(x).trim();
      let c=st.custom.replace(/\\thm(name|number|note)\s*\{((?:[^{}]|\{[^{}]*\})*)\}/g,(mm,k,inner)=>{
        const v={name:title,number:num,note}[k];return emp(v)?'':inner;});
      c=c.replace(/#1/g,title).replace(/#2/g,num).replace(/#3/g,note);
      head=c;
    }else{
      const mid=t.swap?(num?num+' ':'')+title:title+(num?' '+num:'');
      head=mid+(note?' ('+note+')':'');
    }
    const hf=st.headfont||'';
    return '{'+hf+' '+head+punct+'}'+(sp.includes('newline')?'\\par\\noindent ':'\\ ');
  };
  ctx.qed=()=>{const sym=o.macros.qedsymbol;return '\\hfill '+(sym?sym.body:'$\\square$');};
  o.macros.qedsymbol=o.macros.qedsymbol;
  if(Object.keys(thm).length)o.emulated.add('\\newtheorem');
  if(/\\begin\{proof\}/.test(s))o.emulated.add('proof');
  if(/\\begin\{(align|gather|multline|equation|alignat|flalign)/.test(s))o.emulated.add('amsmath displays');
  s=numberingPass(s,ctx);
  /* references that point at equations, theorems, sections and list items */
  Object.assign(o.floatLabels,ctx.refs);
  s=s.replace(/\\eqref\s*\{([^}]*)\}/g,(mm,k)=>{const v=ctx.refs[k.trim()];return v!==undefined?'('+String(v).replace(/^\(|\)$/g,'')+')':'(??)';});
  return s;
}

/* ───────────────────────── natbib ───────────────────────── */
function emuNatbib(s,o){
  const opts=(o.pkgOpts.natbib||'').split(',').map(x=>x.trim());
  const numeric=opts.includes('numbers')||opts.includes('super');
  const sup=opts.includes('super');
  const [L,R]=opts.includes('square')?['[',']']:opts.includes('curly')?['{','}']:opts.includes('angle')?['⟨','⟩']:numeric?['[',']']:['(',')'];
  const info=k=>{
    k=k.trim();
    let auth='',authAll='',year='',num=o.bibLabel(k)||'?';
    const lab=o.manual[k];
    const mm=lab&&/^(.*?)\s*\(([^)]*)\)\s*$/.exec(lab);
    if(mm){auth=authAll=mm[1];year=mm[2];}
    else if(o.allEntries[k]){
      const f=o.allEntries[k].fields,ns=splitNames(f.author||f.editor||'').map(nameParts).map(p=>p.last.replace(/[{}\\]/g,''));
      authAll=ns.length<=1?ns.join(''):ns.slice(0,-1).join(', ')+' and '+ns[ns.length-1];
      auth=ns.length>=3?ns[0]+' et al.':authAll;year=f.year||'';
    }
    if(o.alias&&o.alias[k]){auth=authAll=o.alias[k];year='';}
    return {auth,authAll,year,num,alias:!!(o.alias&&o.alias[k])};
  };
  const note=t=>t?renderInline(t):'';
  s=s.replace(/\\defcitealias\s*\{([^}]*)\}\s*\{([^}]*)\}/g,(m,k,t)=>{o.alias=o.alias||{};o.alias[k.trim()]=t;return '';});
  const re=/\\(citet|citep|citealt|citealp|citeauthor|citeyearpar|citeyear|citetalias|citepalias|Citet|Citep)(\*?)\s*(\[[^\]]*\])?\s*(\[[^\]]*\])?\s*\{([^}]*)\}/g;
  s=s.replace(re,(mm,cmd,star,o1,o2,keys)=>{
    o.emulated.add('natbib');
    let pre='',post='';
    if(o1&&o2){pre=o1.slice(1,-1);post=o2.slice(1,-1);}else if(o1)post=o1.slice(1,-1);
    const ks=keys.split(',').map(info.bind(null));
    const A=x=>star?x.authAll:x.auth;
    const base=cmd.toLowerCase();
    let h;
    if(base==='citeauthor')h=ks.map(A).join('; ');
    else if(base==='citeyear')h=ks.map(x=>x.year).join(', ');
    else if(base==='citeyearpar')h=L+ks.map(x=>x.year).join(', ')+R;
    else if(base==='citetalias'||base==='citepalias'){
      const t=ks.map(x=>x.auth).join('; ');h=base==='citepalias'?L+(pre?pre+' ':'')+t+(post?', '+post:'')+R:t;
    }else if(numeric){
      const nums=ks.map(x=>x.num).join(', ');
      if(sup)h='<sup>'+nums+'</sup>';
      else if(base==='citet'){h=ks.map(x=>(x.auth?x.auth+' ':'')+L+x.num+(post?', '+note(post):'')+R).join('; ');}
      else{const inner=(pre?note(pre)+' ':'')+nums+(post?', '+note(post):'');h=(base==='citealp'||base==='citealt')?inner:L+inner+R;}
    }else{
      /* author-year: merge the years of one author */
      const groups=[];ks.forEach(x=>{const g=groups[groups.length-1];if(g&&A(g)===A(x)&&!x.alias)g.years.push(x.year);else groups.push({a:A(x),years:[x.year],alias:x.alias});});
      if(base==='citet'||base==='citealt'){
        h=groups.map(g=>g.a+(base==='citet'?' (':' ')+g.years.join(', ')+(post?', '+note(post):'')+(base==='citet'?')':'')).join('; ');
      }else{
        const inner=(pre?note(pre)+' ':'')+groups.map(g=>g.a+', '+g.years.join(', ')).join('; ')+(post?', '+note(post):'');
        h=base==='citealp'?inner:L+inner+R;
      }
    }
    return o.ph(h);
  });
  s=s.replace(/\\citetext\s*\{([^}]*)\}/g,(m,t)=>o.ph(L+note(t)+R));
  s=s.replace(/\\(citestyle|bibpunct)\s*(\[[^\]]*\])?(\s*\{[^}]*\})*/g,'');
  return s;
}

/* ───────────────────────── boxes, colour, footnotes, minipage ───────────────────────── */
function emuBoxes(s,o){
  const ph=o.ph;
  let m;
  /* \raisebox{lift}[depth][height]{text} */
  {let res='',pos=0;const rr=/\\raisebox\s*\{([^}]*)\}\s*(?:\[[^\]]*\]\s*){0,2}\{/g;
   while((m=rr.exec(s))){
     const g=group(s,m.index+m[0].length-1);if(!g)continue;
     const css=cssLen(m[1].replace(/\s/g,''))||'0';
     res+=s.slice(pos,m.index)+ph(`<span style="position:relative;top:calc(-1*${css})">${renderInline(g.text)}</span>`);
     pos=g.end;rr.lastIndex=g.end;o.emulated.add('\\raisebox');}
   s=res+s.slice(pos);}
  /* \framebox[1.5\width]{text}: the box is 1.5 times as wide as the text */
  {let res='',pos=0;const fr=/\\(frame|make)box\s*\[([\d.]*)\\width\]\s*(?:\[([lrcs])\])?\s*\{/g;
   while((m=fr.exec(s))){const g=group(s,m.index+m[0].length-1);if(!g)continue;
     const f=parseFloat(m[2]||'1'),extra=Math.max(0,(f-1)*g.text.length*0.5);
     const al=m[3]||'c';
     res+=s.slice(pos,m.index)+ph(`<span style="display:inline-block;${m[1]==='frame'?'border:'+(o.fr||'0.4pt')+' solid #111;padding:3pt;':''}padding-${al==='l'?'right':al==='r'?'left':'left'}:${(al==='c'?extra/2:extra)+0}em;${al==='c'?'padding-right:'+extra/2+'em;':''}">${renderInline(g.text)}</span>`);
     pos=g.end;fr.lastIndex=g.end;o.emulated.add('\\framebox');}
   s=res+s.slice(pos);}
  /* colours */
  const colorRep=(src,reg,fn)=>{let r='',p=0,mm;reg.lastIndex=0;
    while((mm=reg.exec(src))){const g=group(src,mm.index+mm[0].length-1);if(!g)continue;
      r+=src.slice(p,mm.index)+fn(mm,g.text);p=g.end;reg.lastIndex=g.end;}
    return r+src.slice(p);};
  s=colorRep(s,/\\textcolor\s*(?:\[(\w+)\])?\s*\{([^}]*)\}\s*\{/g,(mm,t)=>{o.emulated.add('colour');
    const m2=/\[(\w+)\]/.exec(mm),c=/\{([^}]*)\}/.exec(mm)[1];
    return ph(`<span style="color:${rgbCSS(colorRGB(c,m2?m2[1]:null))}">${renderInline(t)}</span>`);});
  s=colorRep(s,/\\colorbox\s*(?:\[(\w+)\])?\s*\{([^}]*)\}\s*\{/g,(mm,t)=>{
    const m2=/\[(\w+)\]/.exec(mm),c=/\{([^}]*)\}/.exec(mm)[1];
    return ph(`<span style="background:${rgbCSS(colorRGB(c,m2?m2[1]:null))};padding:0 .2em">${renderInline(t)}</span>`);});
  s=colorRep(s,/\\fcolorbox\s*(?:\[(\w+)\])?\s*\{([^}]*)\}\s*\{([^}]*)\}\s*\{/g,(mm,t)=>{
    const m2=/\[(\w+)\]/.exec(mm),cs=[...mm[0].matchAll(/\{([^}]*)\}/g)].map(x=>x[1]);
    return ph(`<span style="background:${rgbCSS(colorRGB(cs[1],m2?m2[1]:null))};border:1px solid ${rgbCSS(colorRGB(cs[0],m2?m2[1]:null))};padding:0 .2em">${renderInline(t)}</span>`);});
  s=s.replace(/\{\s*\\color\s*(?:\[(\w+)\])?\s*\{([^}]*)\}((?:[^{}]|\{[^{}]*\})*)\}/g,(mm,model,c,t)=>{
    o.emulated.add('colour');return ph(`<span style="color:${rgbCSS(colorRGB(c,model))}">${renderInline(t)}</span>`);});
  s=s.replace(/\\pagecolor\s*\{[^}]*\}/g,'');
  /* \parbox[pos]{width}{text} */
  {let res='',pos=0;const pbr=/\\parbox\s*(?:\[([a-z])\])?\s*\{([^}]*)\}\s*\{/g;
   while((m=pbr.exec(s))){const g=group(s,m.index+m[0].length-1);if(!g)continue;
     const w=cssLen(m[2])||'50%';
     res+=s.slice(pos,m.index)+ph(`<span class="lx-parbox" style="width:${w};vertical-align:${m[1]==='t'?'top':m[1]==='b'?'bottom':'middle'}">${renderInline(g.text)}</span>`);
     pos=g.end;pbr.lastIndex=g.end;o.emulated.add('\\parbox');}
   s=res+s.slice(pos);}
  /* minipage */
  s=replaceEnv(s,'minipage',(spec,body,whole)=>{
    o.emulated.add('minipage');
    const m3=/^\s*\\begin\{minipage\}\s*(?:\[([a-z])\])?\s*\{([^}]*)\}/.exec(whole);
    const al=m3&&m3[1]==='t'?'top':m3&&m3[1]==='b'?'bottom':'middle';
    const w=cssLen(m3?m3[2]:'')||'50%';
    return ph(`<span class="lx-mini" style="width:${w};vertical-align:${al}">${renderInline(body.replace(/^\s*(\[[a-z]\])?\s*\{[^}]*\}/,''))}</span>`)+pad(whole);},false);
  return s;
}

/* footnotes: styles, symbols, optional marks, minipage letters */
function emuFootnotes(s,o){
  const fns=o.fns;let n=0,style='arabic';
  const mark=(i,st)=>{
    if(st==='fnsymbol')return ['*','†','‡','§','¶','‖','**','††','‡‡'][(i-1)%9];
    return fmtCounter(i,st);};
  const tokens=/\\renewcommand\s*\{\\thefootnote\}\s*\{((?:[^{}]|\{[^{}]*\})*)\}|\\begin\{minipage\}|\\end\{minipage\}|\\footnotemark(?![A-Za-z])|\\footnotetext(?![A-Za-z])|\\footnote(?![A-Za-z])|\\thanks(?![A-Za-z])/g;
  let out='',last=0,m,mini=0,mn=0,miniNotes=[];
  while((m=tokens.exec(s))){
    const t=m[0];
    if(m[1]!==undefined){const b=m[1];style=/fnsymbol/.test(b)?'fnsymbol':/\\Roman/.test(b)?'Roman':/\\roman/.test(b)?'roman':/\\Alph/.test(b)?'Alph':/\\alph/.test(b)?'alph':'arabic';
      out+=s.slice(last,m.index);last=m.index+t.length;continue;}
    if(t==='\\begin{minipage}'){mini++;mn=0;miniNotes=[];continue;}
    if(t==='\\end{minipage}'){
      if(mini>0&&miniNotes.length){out+=s.slice(last,m.index)+'\\par\\footnotesize '+miniNotes.map(x=>o.ph(`<sup>${x.mark}</sup> ${renderInline(x.text)}`)).join('\\par ')+'\\par ';last=m.index;}
      mini=Math.max(0,mini-1);continue;}
    let i=m.index+t.length;
    if(t==='\\thanks'){const g=arg(s,i);if(!g)continue;fns.push({mark:'*',text:g.text});out+=s.slice(last,m.index)+o.ph('<sup>*</sup>');last=g.end;tokens.lastIndex=g.end;continue;}
    if(t==='\\footnotemark'){
      const oa=optarg(s,i);let mk;if(oa){i=oa.end;mk=/\\value\{mpfootnote\}/.test(oa.text)?mark(Math.max(1,mn),'alph'):oa.text;}else{n++;mk=mark(n,style);}
      out+=s.slice(last,m.index)+o.ph(`<sup class="lx-fnm">${esc(mk)}</sup>`);last=i;tokens.lastIndex=i;o.fnTick&&o.fnTick();continue;}
    if(t==='\\footnotetext'){
      const oa=optarg(s,i);if(oa)i=oa.end;const g=arg(s,i);if(!g)continue;
      fns.push({mark:mark(Math.max(n,1),style),text:g.text});out+=s.slice(last,m.index);last=g.end;tokens.lastIndex=g.end;continue;}
    /* \footnote */
    const oa=optarg(s,i);let mk=null;if(oa){mk=oa.text;i=oa.end;}
    const g=arg(s,i);if(!g)continue;
    o.emulated.add('\\footnote');
    if(mini>0){mn++;mk=mark(mn,'alph');miniNotes.push({mark:mk,text:g.text});}
    else{if(mk===null){n++;mk=mark(n,style);}else if(/^\d+$/.test(mk))mk=mark(+mk,style);fns.push({mark:mk,text:g.text});}
    out+=s.slice(last,m.index)+o.ph(`<sup class="lx-fnm">${esc(mk)}</sup>`);last=g.end;tokens.lastIndex=g.end;
  }
  return out+s.slice(last);
}

/* ───────────────────────── beamer ───────────────────────── */
const BM_THEMES={
  sidebar:'Berkeley Goettingen Hannover Marburg PaloAlto',
  topnav:'Warsaw Antibes Berlin Bergen JuanLesPins Montpellier Szeged Boadilla_nav',
  info:'Madrid Boadilla CambridgeUS AnnArbor Pittsburgh Rochester Singapore Copenhagen Dresden Darmstadt Frankfurt Ilmenau Luebeck Malmoe',
  plain:'default Bergen_plain'};
function bmThemeKind(name){
  name=(name||'default').trim();
  for(const k of Object.keys(BM_THEMES)){if(BM_THEMES[k].split(' ').includes(name))return k;}
  return name==='default'?'plain':'info';
}
const BM_BLOCKS={block:{cls:'blk'},alertblock:{cls:'alert'},exampleblock:{cls:'ex'},
  theorem:{t:'Theorem',cls:'blk'},lemma:{t:'Lemma',cls:'blk'},corollary:{t:'Corollary',cls:'blk'},proposition:{t:'Proposition',cls:'blk'},
  definition:{t:'Definition',cls:'blk'},definitions:{t:'Definitions',cls:'blk'},fact:{t:'Fact',cls:'blk'},example:{t:'Example',cls:'ex'},examples:{t:'Examples',cls:'ex'}};

/* an overlay specification such as <1-2,4-> or <+-> is parsed into a test function over k */
function ovSpec(spec,plus){
  spec=String(spec).trim();
  if(!spec)return ()=>true;
  spec=spec.replace(/\|.*$/,'');                                     // <1-| alert@1> keeps only the first part
  const parts=spec.split(',').map(p=>p.trim()).filter(Boolean);
  const tests=parts.map(p=>{
    let m;
    if((m=/^(\d+)$/.exec(p)))return k=>k===+m[1];
    if((m=/^(\d+)-(\d+)$/.exec(p)))return k=>k>=+m[1]&&k<=+m[2];
    if((m=/^(\d+)-$/.exec(p)))return k=>k>=+m[1];
    if((m=/^-(\d+)$/.exec(p)))return k=>k<=+m[1];
    if(p==='-')return ()=>true;
    return ()=>true;});
  return k=>tests.some(t=>t(k));
}
function specMax(spec){
  const nums=(String(spec).match(/\d+/g)||[]).map(Number);return nums.length?Math.max(...nums):1;
}
/* resolve the overlays of one frame: returns the TeX to typeset on overlay k */
function bmResolve(src,k,env){
  let t=src;
  let plusN=0;
  const HS=' LXBMHS ',HE=' LXBMHE ';
  /* [<+->] on lists: give every \item the next overlay */
  t=t.replace(/\\begin\{(itemize|enumerate)\}\s*\[\s*<\+->\s*\]((?:.|\n)*?)\\end\{\1\}/g,(mm,e,body)=>{
    let c=0;const nb=body.replace(/\\item(?![A-Za-z])(?!\s*<)/g,()=>'\\item<'+(++c)+'->');
    return '\\begin{'+e+'}'+nb+'\\end{'+e+'}';});
  /* \pause: later material is typeset invisible until its overlay */
  if(/\\pause(?![A-Za-z])/.test(t)){
    const parts=t.split(/\\pause(?![A-Za-z])(?:\s*<\d+>)?/);
    t=parts.map((p,i)=>i<k?p:(p.trim()?HS+p+HE:p)).join('\n');
  }
  /* \only \onslide \uncover \visible \invisible with the spec before or after the argument */
  const cmdRe=/\\(only|onslide|uncover|visible|invisible|textbf|textit|emph|alert|structure|alt|includegraphics)(?![A-Za-z])\s*(<[^<>]*>)?/g;
  let out='',pos=0,m;
  while((m=cmdRe.exec(t))){
    const name=m[1];let i=m.index+m[0].length;
    let spec=m[2]?m[2].slice(1,-1):null;
    if(name==='includegraphics'){
      if(!spec)continue;                                                  // plain \includegraphics stays
      const o1=optarg(t,i);let j=o1?o1.end:i;const g=group(t,(function(){let q=j;while(t[q]===' ')q++;return q;})());
      if(!g)continue;
      const keep=ovSpec(spec)(k);
      out+=t.slice(pos,m.index)+(keep?'\\includegraphics'+(o1?'['+o1.text+']':'')+'{'+g.text+'}':'');pos=g.end;cmdRe.lastIndex=g.end;continue;
    }
    if(name==='alt'){continue;}
    let g=group(t,(function(){let q=i;while(t[q]===' ')q++;return q;})());
    if(!g)continue;
    if(!spec){const a=/^\s*<([^<>]*)>/.exec(t.slice(g.end));if(a){spec=a[1];g={text:g.text,end:g.end+a[0].length};}}
    if(spec===null){
      if(name==='alert'||name==='structure'){out+=t.slice(pos,m.index)+'\\textcolor{red}{\\textbf{'+g.text+'}}';pos=g.end;cmdRe.lastIndex=g.end;}
      continue;}
    const on=ovSpec(spec)(k);
    let rep;
    if(name==='only')rep=on?g.text:'';
    else if(name==='onslide'||name==='uncover'||name==='visible')rep=on?g.text:HS+g.text+HE;
    else if(name==='invisible')rep=on?HS+g.text+HE:g.text;
    else if(name==='alert')rep=on?'\\textcolor{red}{\\textbf{'+g.text+'}}':g.text;
    else rep=on?'\\'+name+'{'+g.text+'}':g.text;                          // textbf textit emph structure
    out+=t.slice(pos,m.index)+rep;pos=g.end;cmdRe.lastIndex=g.end;
  }
  t=out+t.slice(pos);
  t=t.replace(/\\structure\s*\{/g,'\\textbf{');
  /* \item<spec>: an item that is not yet visible is covered (its room stays) */
  t=t.replace(/\\item\s*<([^<>]*)>/g,(mm,spec)=>ovSpec(spec)(k)?'\\item ':'\\item LXBMLIHIDQ ');
  t=t.replace(/\\item\s*\[[^\]]*\]\s*<([^<>]*)>/g,(mm,spec)=>mm);
  return {tex:t};
}
function bmMaxOverlay(src,sections){
  let N=1;
  const pauses=(src.match(/\\pause(?![A-Za-z])/g)||[]).length;N=Math.max(N,pauses+1);
  src.replace(/\\pause\s*<(\d+)>/g,(m,n)=>{N=Math.max(N,+n);return m;});
  src.replace(/<([0-9,\-+| ]*)>/g,(m,spec)=>{if(/\d/.test(spec))N=Math.max(N,specMax(spec));return m;});
  src.replace(/\\begin\{(itemize|enumerate)\}\s*\[\s*<\+->\s*\]((?:.|\n)*?)\\end\{\1\}/g,(m,e,b)=>{N=Math.max(N,(b.match(/\\item(?![A-Za-z])/g)||[]).length);return m;});
  if(/\\tableofcontents\s*\[[^\]]*pausesections/.test(src))N=Math.max(N,sections.length||1);
  return N;
}
/* turn the marker paragraphs back into structure */
function bmDom(root,meta){
  const isMark=(el,re)=>el&&el.nodeType===1&&el.tagName==='P'&&re.test(el.textContent.trim());
  /* hidden runs: text between LXBMHS and LXBMHE is typeset invisible */
  const walker=[];const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  while(w.nextNode())walker.push(w.currentNode);
  let hidden=false;
  const wrapHidden=(node)=>{const sp=document.createElement('span');sp.className='bm-hid';node.parentNode.insertBefore(sp,node);sp.appendChild(node);};
  walker.forEach(tn=>{
    if(!/LXBMH[SE]|LXBMLIHIDQ/.test(tn.nodeValue)&&!hidden)return;
    const parts=tn.nodeValue.split(/(LXBMHS|LXBMHE|LXBMLIHIDQ)/);
    const frag=document.createDocumentFragment();
    parts.forEach(p=>{
      if(p==='LXBMHS'){hidden=true;return;}
      if(p==='LXBMHE'){hidden=false;return;}
      if(p==='LXBMLIHIDQ'){const li=tn.parentNode.closest&&tn.parentNode.closest('li');if(li)li.classList.add('bm-hid');return;}
      if(!p)return;
      if(hidden){const sp=document.createElement('span');sp.className='bm-hid';sp.textContent=p;frag.appendChild(sp);}
      else frag.appendChild(document.createTextNode(p));
    });
    tn.replaceWith(frag);
  });
  /* elements that lie wholly between the markers (a paragraph break may fall inside the run) */
  const ps=[...root.querySelectorAll('p')];
  ps.forEach(p=>{if(p.textContent.trim()===''&&!p.querySelector('img,svg,.katex')&&p.querySelector('.bm-hid'))p.classList.add('bm-hid');});
  /* a paragraph whose every child is hidden is hidden */
  root.querySelectorAll('p,li,div.list').forEach(el=>{
    if(el.classList.contains('bm-hid'))return;
    const kids=[...el.childNodes].filter(c=>!(c.nodeType===3&&!c.nodeValue.trim()));
    if(kids.length&&kids.every(c=>c.nodeType===1&&c.classList.contains('bm-hid')))el.classList.add('bm-hid');});
  /* blocks */
  const kids=()=>[...root.children];
  let guard=0;
  while(guard++<80){
    const ch=kids();
    const si=ch.findIndex(c=>isMark(c,/^LXBMBS\d+$/));
    if(si<0)break;
    const id=+/\d+/.exec(ch[si].textContent)[0];
    const ei=ch.findIndex((c,i)=>i>si&&isMark(c,new RegExp('^LXBMBE'+id+'$')));
    if(ei<0){ch[si].remove();continue;}
    const b=meta.blocks[id]||{};
    const box=document.createElement('div');box.className='bm-block '+(b.cls||'blk')+(b.hidden?' bm-hid':'');
    const title=b.title?`<div class="bm-bt">${b.title}</div>`:'';
    box.innerHTML=title+'<div class="bm-bb"></div>';
    const inner=box.querySelector('.bm-bb');
    for(let i=si+1;i<ei;i++)inner.appendChild(ch[i]);
    ch[si].replaceWith(box);ch[ei].remove();
    if(!title)box.classList.add('notitle');
  }
  /* columns */
  guard=0;
  while(guard++<20){
    const ch=kids();
    const si=ch.findIndex(c=>isMark(c,/^LXBMCSS\d+$/));
    if(si<0)break;
    const cid=+/\d+/.exec(ch[si].textContent)[0];
    const ei=ch.findIndex((c,i)=>i>si&&isMark(c,/^LXBMCSE$/));
    if(ei<0){ch[si].remove();continue;}
    const al=(meta.colAlign[cid]||'c');
    const wrap=document.createElement('div');wrap.className='bm-cols al-'+al;
    let curCol=null;
    for(let i=si+1;i<ei;i++){
      const c=ch[i];
      if(isMark(c,/^LXBMCOL\d+$/)){curCol=document.createElement('div');curCol.className='bm-col';
        const wd=meta.colW[+/\d+/.exec(c.textContent)[0]];if(wd)curCol.style.width=wd;wrap.appendChild(curCol);c.remove();continue;}
      if(isMark(c,/^LXBMCOLE$/)){curCol=null;c.remove();continue;}
      if(curCol)curCol.appendChild(c);else c.remove();
    }
    ch[si].replaceWith(wrap);ch[ei].remove();
  }
  return root;
}
function beamerCompile(src,files,findings){
  const errors=findings.filter(f=>f.sev==='error');
  const emulated=new Set(['beamer']),notes=['The live preview draws each overlay as its own slide. For the exact PDF, use the Real PDF tab.'];
  try{
    let s=src.replace(/(^|[^\\])%[^\n]*/g,'$1');
    const bd=s.indexOf('\\begin{document}'),ed=s.lastIndexOf('\\end{document}');
    if(bd<0)throw new Error('no document');
    const pre=s.slice(0,bd),body=s.slice(bd+16,ed<0?s.length:ed);
    const one=(re,from)=>{const m=re.exec(from);return m};
    /* metadata */
    const getArg=(name)=>{const re=new RegExp('\\\\'+name+'(?![A-Za-z])\\s*(\\[[^\\]]*\\])?\\s*\\{');const m=re.exec(pre);if(!m)return null;
      const g=group(pre,m.index+m[0].length-1);return g?{short:m[1]?m[1].slice(1,-1):null,text:g.text}:null;};
    const T=getArg('title'),A=getArg('author'),I=getArg('institute'),D=getArg('date'),ST=getArg('subtitle');
    const themeM=/\\usetheme\s*(?:\[[^\]]*\])?\s*\{([^}]*)\}/.exec(pre);
    const theme=themeM?themeM[1].trim():'default';
    const kind=bmThemeKind(theme);
    if(!['Berkeley','Warsaw','Madrid','default'].includes(theme))notes.push(`The theme ${theme} is drawn in the style of its family; the Real PDF tab shows the exact one.`);
    /* the preamble that every frame needs: packages, macros, but nothing of beamer */
    const keep=pre.replace(/\\documentclass[^\n]*\n?/,'').replace(/\\(usetheme|usecolortheme|usefonttheme|useinnertheme|useoutertheme|setbeamercolor|setbeamertemplate|setbeamerfont)\s*(\[[^\]]*\])?(\s*\{(?:[^{}]|\{[^{}]*\})*\})+/g,'')
      .replace(/\\(title|author|institute|date|subtitle)\s*(\[[^\]]*\])?\s*\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\}/g,'').replace(/\\usepackage[^\n]*\n?/g,m=>/\{(amsthm)\}/.test(m)?'':m);
    const inner='\\documentclass{article}\n\\usepackage{amsmath,amssymb}\n\\usepackage{graphicx}\n'+keep+'\n\\begin{document}\n';
    /* walk the body: sections and frames, in order */
    const items=[];const re=/\\(section|subsection)(\*?)\s*(\[[^\]]*\])?\s*\{|\\begin\{frame\}|\\maketitle|\\setbeamercolor\s*\{normal text\}\s*\{([^}]*)\}|\\frame\s*\{|\\appendix/g;
    let m,sectionsAll=[];
    while((m=re.exec(body))){
      if(m[1]){const g=group(body,m.index+m[0].length-1);if(!g)continue;
        const it={type:m[1],name:g.text,short:m[3]?m[3].slice(1,-1):null,star:!!m[2]};items.push(it);if(m[1]==='section'&&!m[2])sectionsAll.push(it);re.lastIndex=g.end;continue;}
      if(m[0]==='\\maketitle'){items.push({type:'frame',kind:'title',src:'\\titlepage'});continue;}
      if(m[0]==='\\appendix'){continue;}
      if(m[4]!==undefined){const mm=/bg\s*=\s*([^,\s]+)/.exec(m[4]);items.push({type:'bg',bg:mm?rgbCSS(colorRGB(mm[1])):null});continue;}
      if(m[0]==='\\frame{'){const g=group(body,m.index+m[0].length-1);if(!g)continue;items.push({type:'frame',src:g.text,opts:''});re.lastIndex=g.end;continue;}
      /* \begin{frame}[opts]{title}{subtitle} */
      let i=m.index+m[0].length;const oa=optarg(body,i);let opts='';if(oa){opts=oa.text;i=oa.end;}
      let title='';const g1=(function(){let q=i;while(/\s/.test(body[q]||''))q++;return body[q]==='{'?group(body,q):null;})();
      if(g1){title=g1.text;i=g1.end;}
      const e=findEnd(body,'frame',i);if(!e)continue;
      items.push({type:'frame',src:body.slice(i,e.start),title,opts});
      re.lastIndex=e.end;
    }
    const sections=sectionsAll;
    /* slides */
    const slides=[];let secIdx=-1,subIdx=-1,bg=null,curSec=null;
    const mkMeta=()=>({blocks:[],colAlign:[],colW:[]});
    const titleHTML=()=>{
      let h='';
      if(T)h+=`<div class="bm-tt">${renderInline(T.text)}</div>`;
      if(ST)h+=`<div class="bm-st">${renderInline(ST.text)}</div>`;
      if(A)h+=`<div class="bm-au">${renderInline(A.text)}</div>`;
      if(I)h+=`<div class="bm-in">${renderInline(I.text)}</div>`;
      h+=`<div class="bm-dt">${D?renderInline(D.text):new Date().toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'})}</div>`;
      return h;};
    const tocHTML=(k,pause)=>{
      const ul=sections.map((sc,i)=>{
        const hid=pause&&i+1>k;
        return `<li class="${hid?'bm-hid':''}"><span class="bm-tn">${i+1}</span> ${renderInline(sc.name)}</li>`;}).join('');
      return `<ol class="bm-toc">${ul}</ol>`;};
    for(const it of items){
      if(it.type==='bg'){bg=it.bg;continue;}
      if(it.type==='section'){if(it.type==='section'&&!it.star){secIdx++;subIdx=-1;curSec=it;}continue;}
      if(it.type==='subsection'){subIdx++;continue;}
      /* frame */
      let fsrc=it.src,ftitle=it.title||'',fsub='';
      fsrc=fsrc.replace(/\\frametitle\s*\{/g,(mm,k)=>mm);
      const ft=/\\frametitle\s*(?:\[[^\]]*\])?\s*\{/.exec(fsrc);
      if(ft){const g=group(fsrc,ft.index+ft[0].length-1);if(g){ftitle=g.text;fsrc=fsrc.slice(0,ft.index)+fsrc.slice(g.end);}}
      const fs=/\\framesubtitle\s*\{/.exec(fsrc);
      if(fs){const g=group(fsrc,fs.index+fs[0].length-1);if(g){fsub=g.text;fsrc=fsrc.slice(0,fs.index)+fsrc.slice(g.end);}}
      const isTitle=/\\titlepage/.test(fsrc);
      const N=bmMaxOverlay(fsrc,sections);
      const pauseSec=/\\tableofcontents\s*\[[^\]]*pausesections/.test(fsrc);
      const secNow=secIdx,subNow=subIdx,secName=curSec?(curSec.short||curSec.name):'';
      for(let k=1;k<=N;k++){
        const meta=mkMeta();
        let t=bmResolve(fsrc,k).tex;
        /* blocks: block / alertblock / exampleblock take a title; theorem-like ones take a note */
        {let res='',pos=0,mm2;const br=/\\begin\{(block|alertblock|exampleblock)\}\s*(<[^<>]*>)?\s*\{/g;
         while((mm2=br.exec(t))){const g=group(t,mm2.index+mm2[0].length-1);if(!g)continue;
           const id=meta.blocks.length;
           meta.blocks.push({title:g.text.trim()?renderInline(g.text):'',cls:BM_BLOCKS[mm2[1]].cls,hidden:mm2[2]?!ovSpec(mm2[2].slice(1,-1))(k):false});
           res+=t.slice(pos,mm2.index)+'\\par LXBMBS'+id+' \\par ';pos=g.end;br.lastIndex=g.end;}
         t=res+t.slice(pos);}
        t=t.replace(/\\begin\{(theorem|lemma|corollary|proposition|definition|definitions|fact|example|examples)\}\s*(<[^<>]*>)?\s*(\[[^\]]*\])?/g,(mm,env,sp,note)=>{
          const def=BM_BLOCKS[env];const id=meta.blocks.length;
          meta.blocks.push({title:renderInline(def.t+(note?' ('+note.slice(1,-1)+')':'')),cls:def.cls,hidden:sp?!ovSpec(sp.slice(1,-1))(k):false});
          return '\\par LXBMBS'+id+' \\par ';});
        t=t.replace(/\\end\{(block|alertblock|exampleblock|theorem|lemma|corollary|proposition|definition|definitions|fact|example|examples)\}/g,'\\par LXBMBEX \\par ');
        {const stack=[];t=t.replace(/LXBMBS(\d+)|LXBMBEX/g,(mm,id)=>{if(id!==undefined){stack.push(id);return mm;}const top=stack.pop();return 'LXBMBE'+top;});}
        /* proof */
        t=t.replace(/\\begin\{proof\}\s*(<[^<>]*>)?/g,(mm,sp)=>{const on=sp?ovSpec(sp.slice(1,-1))(k):true;return (on?'':' LXBMHS ')+'\\par\\noindent{\\itshape \\textcolor{blue}{Proof.}} ';});
        t=t.replace(/\\end\{proof\}/g,()=>'\\hfill$\\square$ LXBMHE \\par ');
        /* columns */
        t=t.replace(/\\begin\{columns\}\s*(\[[^\]]*\])?/g,(mm,opt)=>{const id=meta.colAlign.length;meta.colAlign.push(opt?(opt.replace(/[\[\]\s]/g,'')[0]||'c'):'c');return '\\par LXBMCSS'+id+' \\par ';});
        t=t.replace(/\\end\{columns\}/g,'\\par LXBMCSE \\par ');
        t=t.replace(/\\begin\{column\}\s*(\[[^\]]*\])?\s*\{([^}]*)\}/g,(mm,o2,w)=>{const id=meta.colW.length;meta.colW.push(cssLenW(w));return '\\par LXBMCOL'+id+' \\par ';});
        t=t.replace(/\\end\{column\}/g,'\\par LXBMCOLE \\par ');
        /* title page, outline, buttons, links */
        const phx=[];
        t=t.replace(/\\titlepage/g,()=>{phx.push('<div class="bm-titlepage">'+titleHTML()+'</div>');return '\\par LXBMPH'+(phx.length-1)+'Q \\par ';});
        t=t.replace(/\\tableofcontents\s*(\[[^\]]*\])?/g,()=>{phx.push(tocHTML(k,pauseSec));return '\\par LXBMPH'+(phx.length-1)+'Q \\par ';});
        t=t.replace(/\\hyperlink\s*\{[^}]*\}\s*\{((?:[^{}]|\{[^{}]*\})*)\}/g,'$1');
        t=t.replace(/\\hypertarget\s*\{[^}]*\}\s*\{((?:[^{}]|\{[^{}]*\})*)\}/g,'$1');
        t=t.replace(/\\beamer(?:goto|return)?button\s*\{((?:[^{}]|\{[^{}]*\})*)\}/g,'\\fbox{$1}');
        t=t.replace(/\\(?:framebreak|vfill)\b/g,'');
        const mini=inner+t+'\n\\end{document}\n';
        const rr=compile(mini,files,true);
        let bodyHTML='';
        if(rr&&rr.html){
          const tmp=document.createElement('div');tmp.innerHTML=rr.html;
          const b=tmp.querySelector('.body')||tmp;
          /* the page numbers of an article: none; remove the footnote area is kept */
          b.querySelectorAll('p').forEach(p=>{const mmx=/^LXBMPH(\d+)Q$/.exec(p.textContent.trim());if(mmx){const d=document.createElement('div');d.innerHTML=phx[+mmx[1]];p.replaceWith(...d.childNodes);}});
          bmDom(b,meta);
          bodyHTML=b.innerHTML;
          (rr.emulated||[]).forEach(x=>emulated.add(x));
        }else{
          const er=(rr&&rr.findings||[]).filter(f=>f.sev==='error')[0];
          bodyHTML=`<div class="lx-wait">${esc(er?er.msg:'This frame does not compile.')}</div>`;
          if(er)errors.push({line:1,sev:'error',tex:er.tex||'',msg:'In a frame: '+er.msg,fix:er.fix||''});
        }
        slides.push({k,N,title:ftitle,sub:fsub,body:bodyHTML,isTitle,sec:secNow,subsec:subNow,secName,bg,
          plain:/\bplain\b/.test(it.opts||'')});
      }
    }
    /* assemble */
    const total=slides.length;
    const secLabel=sc=>esc((sc.short||sc.name).replace(/[{}\\]/g,''));
    const titleShort=T?(T.short||T.text.replace(/\\\\/g,' ')):'';
    const authShort=A?(A.short!==null?A.short:A.text.replace(/\\\\/g,' ')):'';
    const sideHTML=(sl)=>{
      let h=`<div class="bm-side"><div class="bm-sh">${renderInline(titleShort)}</div><div class="bm-sa">${renderInline(authShort)}</div><ul>`;
      sections.forEach((sc,i)=>{h+=`<li class="${i===sl.sec?'cur':''}">${secLabel(sc)}</li>`;});
      return h+'</ul></div>';};
    const topHTML=(sl)=>{
      let h='<div class="bm-top"><div class="bm-nav">';
      sections.forEach((sc,i)=>{h+=`<span class="${i===sl.sec?'cur':''}">${secLabel(sc)}</span>`;});
      h+='</div><div class="bm-dots">';
      sections.forEach((sc,i)=>{h+=`<span class="${i===sl.sec?'cur':''}">●</span>`;});
      return h+'</div></div>';};
    const footHTML=(sl)=>`<div class="bm-foot"><span class="a">${renderInline(authShort||'')}</span><span class="t">${renderInline(titleShort||'')}</span><span class="n">${sl.idx} / ${total}</span></div>`;
    let html=`<div class="bm-deck th-${kind}" data-theme="${esc(theme)}">`;
    slides.forEach((sl,i)=>{
      sl.idx=i+1;
      const showTitle=!sl.isTitle&&(sl.title||sl.sub);
      html+=`<section class="bm-slide${sl.isTitle?' is-title':''}" style="${sl.bg?'background:'+sl.bg:''}">`+
        (kind==='topnav'&&!sl.plain?topHTML(sl):'')+
        `<div class="bm-wrap">`+(kind==='sidebar'&&!sl.plain&&!sl.isTitle?sideHTML(sl):'')+
        `<div class="bm-main">`+
        (showTitle?`<div class="bm-ft"><b>${renderInline(sl.title||'')}</b>${sl.sub?`<small>${renderInline(sl.sub)}</small>`:''}</div>`:'')+
        `<div class="bm-body">${sl.body}</div></div></div>`+
        ((kind==='info'||kind==='topnav')&&!sl.plain?footHTML(sl):`<span class="bm-num">${sl.idx}</span>`)+
        `<span class="bm-ov">${sl.N>1?'overlay '+sl.k+' of '+sl.N:''}</span></section>`;
    });
    html+='</div>';
    return {html:`<div class="body">${html}</div>`,rootStyle:'',cls:'beamer',isBook:false,findings,errors,emulated:[...emulated],notes,ok:!errors.length,beamer:true,slides:total};
  }catch(e){
    findings.push({line:1,sev:'error',tex:'! '+String(e.message),msg:'The slide preview stopped: '+e.message,fix:''});
    return {html:null,cls:'beamer',isBook:false,findings,errors:findings.filter(f=>f.sev==='error'),emulated:[...emulated],notes,ok:false};
  }
}
function cssLenW(w){
  w=String(w).trim();
  const m=/^([\d.]+)\s*\\textwidth$/.exec(w);
  if(m)return (parseFloat(m[1])*100).toFixed(1)+'%';
  return cssLen(w)||'48%';
}
