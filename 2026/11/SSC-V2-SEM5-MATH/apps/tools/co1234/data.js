/* ══════════════════════════════════════════════════════════════════
   Convex Optimization · Modules I–IV (MAT5EJ303 (2))
   Binmore ch. 19 (Module I); Boyd & Vandenberghe ch. 2–5 (Modules II–IV).
   Plain words first, symbol second. Every station is a file in stations/.
   ══════════════════════════════════════════════════════════════════ */


/* ---- builders ---- */
function gist(text){
  return `<div class="gist"><span class="gl">in one line</span>${text}</div>`;
}
function lad(title,rungs){
  const body=rungs.map((r,i)=>`<div class="rung${i? ' hidden':''}">
    <span class="peek">tap to reveal ▸</span>
    ${r.why?`<div class="why">${r.why}</div>`:''}
    <div class="math">${r.m}</div></div>`).join('');
  return `<div class="ladder"><div class="lh">${title}<span class="li">derivation</span></div>
    ${body}
    <div class="lfoot"><button class="btn primary reveal-next">Reveal next step</button>
      <button class="btn reveal-all">Show all</button>
      <span class="mini dim">Guess the next line before you tap — that guess is what makes it stick.</span></div></div>`;
}
function fig(name,cap,leg){
  return `<figure class="fig"><div class="cvwrap"><canvas data-fig="${name}"></canvas></div>
    ${leg?`<div class="leg">${leg}</div>`:''}
    <figcaption>${cap}</figcaption></figure>`;
}
function fig3d(name,cap,leg){
  return `<figure class="fig is3d"><div class="cvwrap"><canvas data-v3d="${name}"></canvas></div>
    ${leg?`<div class="leg">${leg}</div>`:''}
    <figcaption><b>Spin it.</b> ${cap}</figcaption></figure>`;
}
let _ck=0;
function chk(q,a){_ck++;const id='ck'+_ck;
  return `<div class="check" id="${id}"><div class="ch">◈ can you answer this?</div>
    <div class="qz">${q}</div>
    <div class="conf"><button data-c="0">No idea</button><button data-c="1">Shaky</button>
      <button data-c="2">Fairly sure</button><button data-c="3">Solid</button></div>
    <button class="reveal">Answer honestly, then check ▸</button>
    <div class="ans">${a}</div></div>`;
}
function prob(n,title,parts){
  return `<details class="prob"><summary><span class="pn">${n}</span><span class="pt">${title}</span><span class="chev">›</span></summary>
    <div class="pbody">${parts}</div></details>`;
}
function pq(html){return `<h4 class="qn">the question</h4>${html}`;}
function pth(html){return `<h4 class="theory">what you need first</h4>${html}`;}
function psol(html){return `<h4 class="sol">how to do it</h4>${html}`;}
function prac(html){return `<div class="practice"><div class="pl">now you try — same method</div>${html}</div>`;}
function tp(title){return `<div class="topic" data-tp><h3>${title}</h3></div>`;}
function paper(name,time,marks){
  return `<div class="paperhead"><b>${name}</b>
    <div class="meta"><span>Time: ${time}</span><span>Max marks: ${marks}</span></div></div>`;}
function secband(letter,rubric){
  return `<div class="secband"><b>Section ${letter}</b><span>${rubric}</span></div>`;}
function qa(marks,q,ans){
  return `<details class="prob qa"><summary><span class="pn">${marks}</span>
    <span class="pt">${q}</span><span class="chev">›</span></summary>
    <div class="pbody"><div class="qmeta">model answer</div>${ans}</div></details>`;}
function must(html){return `<div class="note key"><div class="nh">learn this by heart</div>${html}</div>`;}
function trap(html){return `<div class="note pitfall"><div class="nh">where marks get lost</div>${html}</div>`;}


const STATIONS=[
/*@@M34@@*/
];
window.STATIONS=STATIONS;

/* ── module grouping: Module ▸ Section ▸ Topic ── */
const ids=p=>STATIONS.filter(s=>s.id.startsWith(p)).map(s=>s.id);
const MODULES=[
 {id:'mod-0',name:'Start',sub:'Read this first',cls:'m0',stations:['start']},
 {id:'mod-1',name:'Module I',sub:'Multivariable calculus (Binmore ch. 19) · min 15 marks',cls:'m1',stations:ids('m1-')},
 {id:'mod-2',name:'Module II',sub:'Convex sets and functions (Boyd ch. 2–3) · min 15 marks',cls:'m2',stations:ids('m2-')},
 {id:'mod-3s',name:'Module III',sub:'Convex optimization problems (Boyd ch. 4) · min 15 marks',cls:'m3',stations:ids('m3-')},
 {id:'mod-4s',name:'Module IV',sub:'Duality (Boyd ch. 5) · min 15 marks',cls:'m4',stations:ids('m4-')},
 {id:'mod-3',name:'Model tests',sub:'Sit the paper, then check',cls:'m5',stations:ids('test-')},
 {id:'mod-4',name:'Final checklist',sub:'Last pass before the exam',cls:'m0',stations:['close']}
];
window.MODULES=MODULES;
