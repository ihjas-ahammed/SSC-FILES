/* QM-only, direct matrix previews. Scalars and unknown notation are never
   enhanced. Lesson examples are labelled; physical operators keep their basis. */
const QMMatrix = (() => {
  const M = rows => '\\begin{pmatrix}'+rows.map(r=>r.join('&')).join('\\\\')+'\\end{pmatrix}';
  const column = (...values) => M(values.map(v=>[v]));
  // Symbolic entries are deliberately scoped to the lesson that defines them.
  // Numeric fixtures remain only where the lesson itself gives that example.
  const fixtures = {
    'c.3.0.2': {psi: ['1/\\sqrt2','i/\\sqrt2']},
    'c.3.0.3': {A:[[0,1],[1,0]],B:[[2,0],[0,1]]},
    'c.3.1.2': {psi:['c_1 p_{11}+c_2 p_{12}','c_1 p_{21}+c_2 p_{22}'],phi:['d_1','d_2'],indexedStates:{psi:{'1':['p_{11}','p_{21}'],'2':['p_{12}','p_{22}']}},stateVectors:{u:['u_1','u_2'],v:['v_1','v_2']}},
    'c.3.1.3': {psi:['c_1','c_2'],phi:['d_1','d_2'],chi:['c_1-\\lambda d_1','c_2-\\lambda d_2'],indexedStates:{psi:{'1':['p_{11}','p_{21}'],'2':['p_{12}','p_{22}']}}},
    'c.3.1.4': {psi:['c_1','c_2'],I:[[1,0],[0,1]],basisStates:{phi:''}},
    'c.3.2.1': {psi:['c_1','c_2'],A:[['a_{11}','a_{12}'],['a_{21}','a_{22}']],P:[['|c_1|^2','c_1 c_2^*'],['c_2 c_1^*','|c_2|^2']],indexedStates:{psi:{'1':['p_{11}','p_{21}'],'2':['p_{12}','p_{22}']}}},
    'c.3.2.2': {psi:['c_1','c_2'],phi:['d_1','d_2'],A:[['a_{11}','a_{12}'],['a_{21}','a_{22}']],B:[['b_{11}','b_{12}'],['b_{21}','b_{22}']]},
    'c.3.2.3': {A:[['a_{11}','a_{12}'],['a_{12}^*','a_{22}']],B:[['b_{11}','b_{12}'],['b_{12}^*','b_{22}']]},
    'c.3.2.4': {psi:['c_1','c_2'],A:[['a_{11}','a_{12}'],['a_{12}^*','a_{22}']]},
    'c.3.3.1': {A:[['a_{11}','a_{12}'],['a_{21}','a_{22}']],B:[['b_{11}','b_{12}'],['b_{21}','b_{22}']]},
    'c.3.3.2': {A:[['a_{11}','a_{12}'],['a_{21}','a_{22}']],B:[['b_{11}','b_{12}'],['b_{21}','b_{22}']],C:[['c_{11}','c_{12}'],['c_{21}','c_{22}']]},
    'c.3.4.1': {psi:['c_1','c_2'],A:[['a_{11}','a_{12}'],['a_{12}^*','a_{22}']],B:[['b_{11}','b_{12}'],['b_{12}^*','b_{22}']]},
    'c.3.4.2': {A:[['a_1',0],[0,'a_2']],B:[['b_1',0],[0,'b_2']]},
    'c.3.5.1': {A:[['a_{11}','a_{12}'],['a_{21}','a_{22}']],B:[['b_{11}','b_{12}'],['b_{21}','b_{22}']]},
    'c.3.5.2': {U:[['u_{11}','u_{12}'],['u_{21}','u_{22}']],psi:['c_1','c_2'],phi:['d_1','d_2']},
    'c.3.6.1': {A:[['A_{11}','A_{12}','\\cdots'],['A_{21}','A_{22}','\\cdots'],['\\vdots','\\vdots','\\ddots']],psi:['c_1','c_2','\\vdots'],phi:['d_1','d_2','\\vdots'],basisStates:{phi:''}},
    'c.3.6.2': {A:[['a_{11}','a_{12}'],['a_{12}^*','a_{22}']],psi:['c_1','c_2'],phi:['d_1','d_2'],indexedStates:{a:{n:['v_{1n}^{(a)}','v_{2n}^{(a)}'],m:['v_{1m}^{(a)}','v_{2m}^{(a)}']}}},
    'c.3.6.3': {A:[['a_1',0],[0,'a_2']],B:[['b_1',0],[0,'b_2']],psi:['c_1','c_2']},
    'c.3.6.4': {A:[['i\\alpha','z'],['-z^*','i\\beta']],U:[['u_{11}','u_{12}'],['u_{21}','u_{22}']],indexedStates:{a:{n:['v_{1n}^{(a)}','v_{2n}^{(a)}']},u:{n:['v_{1n}^{(u)}','v_{2n}^{(u)}']}},stateVectors:{U:['U_1','U_2']}},
    'c.3.7.4': {A:[['A_{11}','A_{12}'],['A_{21}','A_{22}']],psi:['c_1','c_2']},
    'c.7.1.1': {H:[['E_1^{(0)}+\\lambda H_{11}^{\\prime}','\\lambda H_{12}^{\\prime}'],['\\lambda H_{21}^{\\prime}','E_2^{(0)}+\\lambda H_{22}^{\\prime}']],H0:[['E_1^{(0)}',0],[0,'E_2^{(0)}']],Hprime:[['H_{11}^{\\prime}','H_{12}^{\\prime}'],['H_{21}^{\\prime}','H_{22}^{\\prime}']],basisStates:{n:'(0)',m:'(0)'}},
    'c.7.1.2': {H:[['E_1^{(0)}+\\lambda H_{11}^{\\prime}','\\lambda H_{12}^{\\prime}'],['\\lambda H_{21}^{\\prime}','E_2^{(0)}+\\lambda H_{22}^{\\prime}']],H0:[['E_1^{(0)}',0],[0,'E_2^{(0)}']],Hprime:[['H_{11}^{\\prime}','H_{12}^{\\prime}'],['H_{21}^{\\prime}','H_{22}^{\\prime}']],basisStates:{m:'(0)',n:'(0)'}},
    'c.7.1.3': {H:[['E_1^{(0)}+\\lambda H_{11}^{\\prime}','\\lambda H_{12}^{\\prime}'],['\\lambda H_{21}^{\\prime}','E_2^{(0)}+\\lambda H_{22}^{\\prime}']],H0:[['E_1^{(0)}',0],[0,'E_2^{(0)}']],Hprime:[['H_{11}^{\\prime}','H_{12}^{\\prime}'],['H_{21}^{\\prime}','H_{22}^{\\prime}']],basisStates:{n:'(0)',m:'(0)'}},
    'c.7.2.1': {W:[['W_{11}','W_{12}'],['W_{21}','W_{22}']],basisStates:{psi:'(0)'}}
  };
  const greek = {ψ:'psi',ϕ:'phi',φ:'phi',χ:'chi'};
  const normalize = s => String(s).normalize('NFKC').replace(/\s/g,'');
  const conjugate = v => {
    if (typeof v === 'number' || /^(?:[0-9]+|\\cdots|\\vdots|\\ddots)$/.test(String(v))) return v;
    const value=String(v);
    if (/^\|[^|]+\|\^2$/.test(value) || value.startsWith('\\delta_{')) return value;
    const product=value.match(/^([a-z]_[0-9]+) ([a-z]_[0-9]+)\^\*$/);
    if (product) return product[2]+' '+product[1]+'^*';
    if (/^[+-]?(?:[A-Za-z](?:_\{[^}]+\}|_[A-Za-z0-9]+)?|\\[A-Za-z]+)\^\{?\*\}?$/.test(value)) return value.replace(/\^\{?\*\}?$/,'');
    if (/^-?i(?:\\[A-Za-z]+)?(?:\/\\sqrt[0-9]+)?$/.test(value)) return value.startsWith('-')?value.slice(1):'-'+value;
    if (/^-?[0-9]+\\?\/(?:[0-9]+|\\sqrt[0-9]+)$/.test(value)) return value;
    return '\\overline{'+value+'}';
  };
  const transpose = rows => rows[0].map((_,j)=>rows.map(r=>conjugate(r[j])));
  const numberBasis = '|0⟩, |1⟩, |2⟩, …';
  const ladder = up => up
    ? [[0,0,0,'\\cdots'],[1,0,0,'\\cdots'],[0,'\\sqrt2',0,'\\cdots'],['\\vdots','\\vdots','\\sqrt3','\\ddots']]
    : [[0,1,0,'\\cdots'],[0,0,'\\sqrt2','\\cdots'],[0,0,0,'\\sqrt3'],['\\vdots','\\vdots','\\vdots','\\ddots']];
  const preview = (formula,basis,example=false,note='') => ({formula,basis,example,note});
  function resolve(c, symbol, options={}) {
    if (!c) return null;
    const f = fixtures[c.id] || {};
    const osc = /^4\.1(?:\.|$)/.test(c.sec);
    const {sub='',sup='',state='',hat=false,tex=''} = options;
    const name = normalize(symbol);
    const label = greek[name];
    const matrix = options.matrix || c.id==='c.3.0.3' && ['A','B'].includes(name) && !sub;
    if (['χ'].includes(name) && /^6\.4\.[34]$/.test(c.id.replace('c.',''))) {
      return preview(c.id==='c.6.4.4' ? column('a e^{i\\omega_L t/2}','b e^{-i\\omega_L t/2}') : /theta/.test(tex) ? column('\\cos(\\theta/2)','e^{i\\phi}\\sin(\\theta/2)') : column('a','b'),'|↑z⟩, |↓z⟩');
    }
    if (state) {
      // Only named, lesson-scoped vectors enter this branch; operator tables do not.
      if (hat || ['x','p'].includes(name)) return null;
      const stateLabel=label||name;
      const vector=(values,basis,note='',example=false) => {
        if (!Array.isArray(values) || values.some(Array.isArray)) return null;
        return preview(state==='bra'?M([values.map(v=>v==='\\vdots'?'\\cdots':conjugate(v))]):column(...values),basis,example,note);
      };
      const basisVector=(index,basis,dimension='') => {
        const entry=k=>/^[12]$/.test(index)&&/^[12]$/.test(k)?Number(k===index):`\\delta_{${k}${index}}`;
        return vector([entry('1'),entry('2'),'\\vdots',...(dimension?[entry(dimension)]:[])],basis,
          'δ = 1 for matching indices, 0 otherwise');
      };
      if (/^c\.7\.1\./.test(c.id) && ['n','m'].includes(name) && !sub && sup==='(0)')
        return basisVector(name,'|1⁽⁰⁾⟩, |2⁽⁰⁾⟩, … · unperturbed energy basis');
      if (c.id==='c.7.2.1' && label==='psi' && /^[12ijd]$/.test(sub) && sup==='(0)')
        return basisVector(sub,'|ψ₁⁽⁰⁾⟩, |ψ₂⁽⁰⁾⟩, …, |ψ_d⁽⁰⁾⟩ · d-dimensional subspace','d');
      if (['c.3.1.4','c.3.6.1'].includes(c.id) && label==='phi' && /^[12ijmn]$/.test(sub) && !sup)
        return basisVector(sub,'|φ₁⟩, |φ₂⟩, …');
      if (osc) {
        if (sub || sup) return null;
        if (/^[012]$/.test(name)) return vector([0,0,0,'\\vdots'].map((v,i)=>i===Number(name)?1:v),numberBasis);
        if (name==='n') return vector(['\\delta_{0n}','\\delta_{1n}','\\delta_{2n}','\\vdots'],numberBasis,'δ = 1 for matching indices, 0 otherwise');
        if (label) return vector(['c_0','c_1','c_2','\\vdots'],numberBasis);
        return null;
      }
      if (/^6\.4/.test(c.sec) && ['↑','↓'].includes(name) && !sup)
        return vector(name==='↑'?[1,0]:[0,1],'|↑z⟩, |↓z⟩');
      if (sup) {
        if (c.id==='c.3.6.1' && label==='psi' && !sub && ['′',"'"].includes(sup))
          return vector(['\\sum_j A_{1j}c_j','\\sum_j A_{2j}c_j','\\vdots'],'|φ₁⟩, |φ₂⟩, …');
        return null;
      }
      const values=sub?f.indexedStates?.[stateLabel]?.[sub]:f.stateVectors?.[stateLabel]||f[stateLabel];
      let basis='|e₁⟩, |e₂⟩ · two-coordinate view';
      if (c.id==='c.3.6.1' && label) basis='|φ₁⟩, |φ₂⟩, …';
      if (c.id==='c.3.1.4' && label==='psi')
        return vector(['c_1','c_2','\\vdots'],'|φ₁⟩, |φ₂⟩, …');
      return vector(values,basis,'',['c.3.0.2','c.3.0.3'].includes(c.id));
    }
    // A matrix element (A_ij), an eigenvalue and a coefficient are numbers.
    if (/^(?:ij|mn|nm|ii|jj|nn|mm|[0-9]+)$/.test(sub) && !(name==='H' && hat && sub==='0' && f.H0)) return null;
    if (hat && /^3\./.test(c.sec) && ['x','p'].includes(name) && !sub) {
      const rows = name==='x' ? [[0,1,0,'\\cdots'],[1,0,'\\sqrt2','\\cdots'],[0,'\\sqrt2',0,'\\sqrt3'],['\\vdots','\\vdots','\\vdots','\\ddots']] : [[0,'-i',0,'\\cdots'],['i',0,'-i\\sqrt2','\\cdots'],[0,'i\\sqrt2',0,'-i\\sqrt3'],['\\vdots','\\vdots','\\vdots','\\ddots']];
      return preview((name==='x'?'\\frac{\\ell}{\\sqrt2}':'\\frac{\\hbar}{\\sqrt2\\ell}')+M(rows),'Hermite basis |0⟩, |1⟩, … · ℓ > 0');
    }
    if (name==='I' && hat && c.id==='c.3.3.3') return preview(M([[1,0,0,'\\cdots'],[0,1,0,'\\cdots'],[0,0,1,'\\cdots'],['\\vdots','\\vdots','\\vdots','\\ddots']]),'Hermite basis |0⟩, |1⟩, …');
    if (name==='I' && !sub && !osc && (hat || /^6\.4/.test(c.sec))) return preview(M([[1,0],[0,1]]),'|e₁⟩, |e₂⟩',!/^6\.4/.test(c.sec));
    if (name==='H' && hat && c.id==='c.6.4.4') return preview('-\\frac{\\hbar\\omega_L}{2}'+M([[1,0],[0,-1]]),'|↑z⟩, |↓z⟩');
    if (osc && ['a','N','H','x','p','I'].includes(name) && hat) {
      if (name==='a') return preview(M(ladder(sup.includes('†'))),numberBasis);
      if (name==='N') return preview(M([[0,0,0,'\\cdots'],[0,1,0,'\\cdots'],[0,0,2,'\\cdots'],['\\vdots','\\vdots','\\vdots','\\ddots']]),numberBasis);
      if (name==='H') return preview('\\hbar\\omega'+M([['1/2',0,0,'\\cdots'],[0,'3/2',0,'\\cdots'],[0,0,'5/2','\\cdots'],['\\vdots','\\vdots','\\vdots','\\ddots']]),numberBasis);
      if (name==='I') return preview(M([[1,0,0,'\\cdots'],[0,1,0,'\\cdots'],[0,0,1,'\\cdots'],['\\vdots','\\vdots','\\vdots','\\ddots']]),numberBasis);
      if (name==='x') return preview('\\sqrt{\\frac{\\hbar}{2m\\omega}}'+M([[0,1,0,'\\cdots'],[1,0,'\\sqrt2','\\cdots'],[0,'\\sqrt2',0,'\\sqrt3'],['\\vdots','\\vdots','\\vdots','\\ddots']]),numberBasis);
      if (name==='p') return preview('\\sqrt{\\frac{m\\hbar\\omega}{2}}'+M([[0,'-i',0,'\\cdots'],['i',0,'-i\\sqrt2','\\cdots'],[0,'i\\sqrt2',0,'-i\\sqrt3'],['\\vdots','\\vdots','\\vdots','\\ddots']]),numberBasis);
    }
    if (hat && name==='S' && sup==='2' && /^6\.4/.test(c.sec)) return preview('\\frac{3\\hbar^2}{4}'+M([[1,0],[0,1]]),'|↑z⟩, |↓z⟩');
    if (hat && ['J','L'].includes(name) && sup==='2' && /^6\.[123]/.test(c.sec)) {
      const q=name==='L'?'l':'j';
      return preview('\\hbar^2 '+q+'('+q+'+1)'+M([[1,0,0,'\\cdots'],[0,1,0,'\\cdots'],[0,0,1,'\\ddots'],['\\vdots','\\vdots','\\vdots','\\ddots']]),`|${q},${q}⟩, |${q},${q}−1⟩, …, |${q},−${q}⟩`,false,'Angular-momentum multiplet identity');
    }
    if (['S','σ'].includes(name) && /^[xyz]$/.test(sub) && /^6\.4/.test(c.sec)) {
      const rows = sub==='x'?[[0,1],[1,0]]:sub==='y'?[[0,'-i'],['i',0]]:[[1,0],[0,-1]];
      return preview((name==='S'?'\\frac{\\hbar}{2}':'')+M(rows),'|↑z⟩, |↓z⟩');
    }
    if (['J','L'].includes(name) && hat && /^[xyz+−-]$/.test(sub) && /^6\.[123]/.test(c.sec)) {
      const q=name==='L'?'l':'j';
      const basis=`|${q},${q}⟩, |${q},${q}−1⟩, …, |${q},−${q}⟩`;
      const k=['\\kappa_0','\\kappa_1','\\kappa_2'];
      const ladderUp=[[0,k[0],0,'\\cdots'],[0,0,k[1],'\\cdots'],[0,0,0,k[2]],['\\vdots','\\vdots','\\vdots','\\ddots']];
      const ladderDown=[[0,0,0,'\\cdots'],[k[0],0,0,'\\cdots'],[0,k[1],0,'\\cdots'],['\\vdots','\\vdots','\\vdots','\\ddots']];
      const rows=sub==='z'
        ? [[q,0,0,'\\cdots'],[0,`${q}-1`,0,'\\cdots'],[0,0,`${q}-2`,'\\cdots'],['\\vdots','\\vdots','\\vdots','\\ddots']]
        : sub==='+' ? ladderUp
        : ['−','-'].includes(sub) ? ladderDown
        : sub==='x'
          ? [[0,k[0],0,'\\cdots'],[k[0],0,k[1],'\\cdots'],[0,k[1],0,k[2]],['\\vdots','\\vdots','\\vdots','\\ddots']]
          : [[0,k[0],0,'\\cdots'],[`-${k[0]}`,0,k[1],'\\cdots'],[0,`-${k[1]}`,0,k[2]],['\\vdots','\\vdots','\\vdots','\\ddots']];
      const scale=sub==='z'?'\\hbar':sub==='+'||['−','-'].includes(sub)?'\\hbar':'\\frac{\\hbar}{2}';
      const formula=sub==='y'?'\\frac{\\hbar}{2i}'+M(rows):scale+M(rows);
      return preview(formula,basis,false,`κ_r = √[(r+1)(2${q}−r)]`);
    }
    const rows=name==='H' && /[′']/.test(sup) ? f.Hprime : name==='H' && sub==='0' ? f.H0 : f[name];
    if (!Array.isArray(rows?.[0])) return null;
    if (sub && !(name==='P' && ['ψ','ϕ','φ'].includes(sub)) && !(name==='H' && sub==='0' && f.H0)) return null;
    // No fixture is applied to ordinary scalar occurrences of the same letter.
    if (!hat && !matrix) return null;
    const actual = c.id==='c.3.0.3' && name==='A' && /2x|diag/.test(tex) ? [[2,0],[0,-1]] : rows;
    const caption = {
      'c.3.2.1': name==='P' ? 'Normalized state: |c₁|² + |c₂|² = 1' : '',
      'c.3.2.3': name==='A' ? 'Hermitian: a₁₁, a₂₂ ∈ ℝ' : 'Hermitian: b₁₁, b₂₂ ∈ ℝ',
      'c.3.2.4': 'Hermitian observable: a₁₁, a₂₂ ∈ ℝ',
      'c.3.4.1': name==='A' ? 'Hermitian: a₁₁, a₂₂ ∈ ℝ' : 'Hermitian: b₁₁, b₂₂ ∈ ℝ',
      'c.3.4.2': 'Common eigenbasis when [A,B] = 0',
      'c.3.5.2': 'Unitary condition: U†U = UU† = I',
      'c.3.6.2': 'Hermitian: a₁₁, a₂₂ ∈ ℝ',
      'c.3.6.3': 'Shared eigenbasis for commuting Hermitian operators',
      'c.3.6.4': name==='A' ? 'Anti-Hermitian: α, β ∈ ℝ' : 'Unitary condition: U†U = UU† = I'
    }[c.id] || '';
    const basis = c.id==='c.3.6.1'?'|φ₁⟩, |φ₂⟩, …':name==='H' && /^7\.1/.test(c.sec) ? '|1⁽⁰⁾⟩, |2⁽⁰⁾⟩' : name==='W' && c.id==='c.7.2.1' ? '|ψ₁⁽⁰⁾⟩, |ψ₂⁽⁰⁾⟩' : actual.length===3?'|e₁⟩, |e₂⟩, |e₃⟩':'|e₁⟩, |e₂⟩';
    const energy = name==='H' && /^7\.1/.test(c.sec)?' · unperturbed energy basis':name==='W'?' · two-fold degenerate subspace':'';
    const example = c.id==='c.3.0.3';
    return preview(M(sup.includes('†')?transpose(actual):actual),basis+energy,example,caption);
  }
  let panel, anchor;
  function close() {
    if (!panel) return; panel.remove(); panel=null;
    if (anchor?.isConnected) { anchor.setAttribute('aria-expanded','false'); anchor.removeAttribute('aria-controls'); }
    if (anchor?.isConnected) anchor.focus({preventScroll:true});
  }
  function open(value,trigger) {
    close(); anchor=trigger;
    panel=document.createElement('div'); panel.className='qm-matrix-popover';
    panel.id='qm-matrix-preview'; trigger.setAttribute('aria-expanded','true'); trigger.setAttribute('aria-controls',panel.id);
    panel.setAttribute('role','dialog');panel.setAttribute('aria-label','Matrix representation');
    const math=document.createElement('div');math.className='qm-matrix-formula'; math.textContent='$$'+value.formula+'$$';
    const caption=document.createElement('small');caption.textContent=(value.example?'Example · ':'')+value.basis+(value.note?' · '+value.note:'');
    const dismiss=document.createElement('button');dismiss.type='button';dismiss.className='qm-matrix-close';dismiss.textContent='×';dismiss.setAttribute('aria-label','Close matrix');dismiss.onclick=close;
    panel.append(dismiss,math,caption);document.body.append(panel);
    const box=trigger.getBoundingClientRect();
    panel.style.left=Math.max(8,Math.min(box.left,innerWidth-panel.offsetWidth-8))+'px';
    panel.style.top=Math.max(8,Math.min(box.bottom+8,innerHeight-panel.offsetHeight-8))+'px';
    Tex.typeset(panel).then(()=>{
      if (!panel) return;
      panel.style.left=Math.max(8,Math.min(box.left,innerWidth-panel.offsetWidth-8))+'px';
      panel.style.top=Math.max(8,Math.min(box.bottom+8,innerHeight-panel.offsetHeight-8))+'px';
    });
  }
  function text(node) {
    if (!node) return '';
    if (node.getText) return normalize(node.getText());
    return normalize((node.childNodes||[]).map(text).join(''));
  }
  function tokens(node,out=[]) {
    if (node.kind==='mi' || node.kind==='mn' || node.kind==='mo' && ['↑','↓'].includes(text(node))) out.push(node);
    else (node.childNodes||[]).forEach(child=>tokens(child,out));
    return out;
  }
  function attributes(node) {
    let base=node, parent=node.parent,hat=false,sub='',sup='';
    while(parent && (['mover','munder','msub','msup','msubsup','TeXAtom'].includes(parent.kind) || parent.kind==='inferredMrow' && parent.childNodes.length===1) && parent.childNodes[0]===base) {
      if (parent.kind==='mover' && /[ˆ^\u0302]/.test(text(parent.childNodes[1]))) hat=true;
      if (parent.kind==='msub' || parent.kind==='msubsup') sub=text(parent.childNodes[1]);
      if (parent.kind==='msup') sup=text(parent.childNodes[1]);
      if (parent.kind==='msubsup') sup=text(parent.childNodes[2]);
      base=parent;parent=parent.parent;
    }
    const siblings=parent?.childNodes||[];const index=siblings.indexOf(base);
    const before=text(siblings[index-1]),after=text(siblings[index+1]);
    const state=(before==='|' && after.startsWith('⟩'))?'ket':(before==='⟨' && after==='|')?'bra':'';
    return {hat,sub,sup,state};
  }
  function decorate() {
    const main=document.getElementById('main');const doc=window.MathJax?.startup?.document;
    if (!main || !doc) return;
    for(const item of doc.getMathItemsWithin(main)) {
      const root=item.typesetRoot;
      if(!root?.isConnected || root.dataset.qmMatrix) continue;
      root.dataset.qmMatrix='1';
      const marker=root.closest('.notebody')?.querySelector('[data-qm-concept]');
      const c=marker && Pool.concept(marker.dataset.qmConcept);if(!c) continue;
      const source=tokens(item.root);const painted=[...root.querySelectorAll('mjx-math mjx-mi, mjx-math mjx-mn, mjx-math mjx-mo')].filter(n=>n.tagName.toLowerCase()!=='mjx-mo' || /mjx-c(?:2191|2193)(?:\s|$)/.test(n.querySelector('mjx-c')?.className||''));
      // Fail closed when MathJax's source and painted tokens cannot be paired.
      if(source.length!==painted.length) continue;
      source.forEach((node,i)=>{
        const symbol=text(node);const opts=attributes(node);opts.tex=item.math;
        const value=resolve(c,symbol,opts);if(!value) return;
        const target=painted[i];
        const stateSuffix=opts.state?(opts.sub?'_'+opts.sub:'')+(opts.sup?'^'+opts.sup:''):'';
        target.classList.add('qm-tappable-symbol');target.tabIndex=0;target.setAttribute('aria-haspopup','dialog');target.setAttribute('aria-expanded','false');target.setAttribute('role','button');target.setAttribute('aria-label',symbol+stateSuffix+': matrix representation');
        target.onclick=event=>{event.stopPropagation();open(value,target);};
        target.onkeydown=event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();open(value,target);}};
      });
    }
  }
  const oldNote=PROJECT.hooks.noteSim;
  PROJECT.hooks.noteSim=c=>{
    const marker=DOM.el('span',{'data-qm-concept':c.id,hidden:true});
    const prior=oldNote?.(c);if(prior) marker.append(prior);return marker;
  };
  const oldReady=PROJECT.hooks.ready;
  PROJECT.hooks.ready=()=>{
    oldReady?.();let pending=false;
    new MutationObserver(()=>{if(pending)return;pending=true;requestAnimationFrame(()=>{pending=false;decorate();});}).observe(document.getElementById('main'),{childList:true,subtree:true});
    document.addEventListener('pointerdown',event=>{if(panel && !panel.contains(event.target) && !event.target.closest('.qm-tappable-symbol'))close();});
    document.addEventListener('keydown',event=>{if(event.key==='Escape'&&panel){event.preventDefault();close();}});
    window.addEventListener('resize',close);decorate();
  };
  return {resolve,fixtures,decorate,open,close,attributes,tokens};
})();
