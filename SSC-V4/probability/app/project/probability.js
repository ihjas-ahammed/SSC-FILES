/* Only concept-specific teaching belongs here; progress stays in flow-library. */
PROJECT.hooks.home = function () {
  const e = DOM.el;
  return e('div', {class:'card prob-hero'}, [
    e('div',{class:'kicker',text:'Probability · Ross 10e · GATE DA'}),
    e('h2',{text:'Start with the experiment.'}),
    e('p',{class:'prob-hero-copy',text:'First picture what can happen. Then work out how likely it is. Try the reasoning yourself before checking the answer.'}),
    e('div',{class:'prob-steps','aria-label':'A way to approach each problem'}, ['Picture it','Set it up','Use the clues','Work it out','Check it'].map((t,i)=>e('span',{},[e('b',{text:String(i+1)}),t]))),
    e('div',{class:'prob-hero-actions'},[
      e('a',{class:'btn primary',href:'#/study/prob',text:'Open the syllabus'}),
      e('a',{class:'prob-guide-link',href:'source-guide.html',text:'Coverage and reading guide'})
    ]),
    e('p',{class:'prob-hero-foot',text:'DA core + inference bridge · clearly marked extensions · selected textbook practice'})
  ]);
};
function probDisclosure(title, content, className) {
  const e=DOM.el;
  return e('details',{class:'prob-disclosure '+(className||'')},[
    e('summary',{text:title}),e('div',{class:'prob-disclosure-body'},content)
  ]);
}
PROJECT.hooks.noteSim = function (c) {
  const e=DOM.el, nodes=[];
  if(c.provenance) nodes.push(probDisclosure('Source and reading reference',[
    e('p',{class:'small muted',text:c.provenance})
  ],'prob-source'));
  if (c.sec === '3.3' && /\.1$/.test(c.id)) nodes.push(probDisclosure('Try it: Bayes with a group of people',[
    e('p',{class:'small muted',text:'See how the chance changes when a test is used in different populations.'}),bayesLab()
  ]));
  if (c.sec === '4.6' && /\.1$/.test(c.id)) nodes.push(probDisclosure('Try it: build a binomial distribution',[
    e('p',{class:'small muted',text:'Change the number of trials and the chance of success. Compare your prediction with the bars.'}),binomialLab()
  ]));
  return nodes.length ? e('div',{class:'prob-note-extras'},nodes) : null;
};
function probSlider(host, label, value, min, max, step, onChange) {
  const e=DOM.el, num=e('b',{text:String(value)});
  const input=e('input',{type:'range',min:String(min),max:String(max),step:String(step),value:String(value),
    'aria-label':label,on:{input:()=>{num.textContent=input.value;onChange(Number(input.value));}}});
  host.appendChild(e('label',{},[label+' ',num,input]));
}
function bayesLab() {
  const e=DOM.el, host=e('div',{class:'card prob-lab'}), table=e('div',{}), result=e('output',{'aria-live':'polite'});
  let prior=1,sensitivity=90,falsePositive=5;
  DOM.add(host,[e('h3',{text:'Bayes through expected counts'}),e('p',{class:'small muted',text:'Predict the fraction of positive tests that come from the condition. Then change prevalence while keeping the test fixed. These are expected counts in 10,000 people.'})]);
  function paint(){
    const yes=10000*prior/100,no=10000-yes,tp=yes*sensitivity/100,fp=no*falsePositive/100;
    DOM.clear(table);table.appendChild(e('table',{},[
      e('thead',{},[e('tr',{},['Group','Positive','Negative','Total'].map(t=>e('th',{scope:'col',text:t})))]),
      e('tbody',{},[[ 'Condition',tp,yes-tp,yes ],['No condition',fp,no-fp,no]].map(r=>e('tr',{},r.map((v,i)=>e(i?'td':'th',i?{text:Number(v).toFixed(1)}:{scope:'row',text:v})))))]));
    result.textContent='P(condition | positive) = '+(100*tp/(tp+fp)).toFixed(2)+'%';
  }
  probSlider(host,'Prevalence (%)',prior,.1,50,.1,v=>{prior=v;paint();});
  probSlider(host,'Sensitivity (%)',sensitivity,1,100,1,v=>{sensitivity=v;paint();});
  probSlider(host,'False-positive rate (%)',falsePositive,.1,50,.1,v=>{falsePositive=v;paint();});
  DOM.add(host,[table,result,e('p',{class:'small muted',text:'Denominator: all positives, including false positives. Sensitivity is P(positive | condition); it is not the displayed posterior.'})]);paint();return host;
}
function binomialLab(){
  const e=DOM.el,S=DOM.svg,host=e('div',{class:'card prob-lab'}),plot=e('div',{}),result=e('output',{'aria-live':'polite'});let n=10,p=.5;
  DOM.add(host,[e('h3',{text:'Binomial: model, then distribution'}),e('p',{class:'small muted',text:'Assume n independent trials with the same success probability p. Predict the peak and spread before moving either slider.'})]);
  function paint(){
    const probs=[];let choose=1;
    for(let k=0;k<=n;k++){if(k)choose=choose*(n-k+1)/k;probs.push(choose*Math.pow(p,k)*Math.pow(1-p,n-k));}
    const svg=S('svg',{viewBox:'0 0 480 180',role:'img','aria-label':'Binomial probability mass function'}),max=Math.max(...probs),w=440/(n+1);
    probs.forEach((v,k)=>{const h=130*v/max;svg.appendChild(S('rect',{x:20+k*w,y:150-h,width:w*.75,height:h,fill:'var(--accent)'},[S('title',{text:'P(X='+k+') = '+v.toFixed(5)})]));if(n<=15||k%5===0)svg.appendChild(S('text',{x:20+k*w+w*.35,y:170,fill:'currentColor','font-size':11,'text-anchor':'middle',text:String(k)}));});
    DOM.clear(plot);plot.appendChild(svg);result.textContent='Total mass = '+probs.reduce((a,b)=>a+b,0).toFixed(6)+' · Mean = '+(n*p).toFixed(2)+' · Variance = '+(n*p*(1-p)).toFixed(2);
  }
  probSlider(host,'Trials n',n,1,30,1,v=>{n=v;paint();});probSlider(host,'Success probability p',p,0,1,.01,v=>{p=v;paint();});DOM.add(host,[plot,result,e('p',{class:'small muted',text:'Now remove independence or let p change between trials. The binomial model no longer applies. Bar heights represent mass, not a continuous density.'})]);paint();return host;
}
