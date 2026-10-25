const {chromium}=require('/home/ihjas/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert=require('node:assert/strict'),fs=require('node:fs');
(async()=>{
 const b=await chromium.launch({executablePath:'/usr/bin/google-chrome',headless:true,args:['--no-sandbox']});
 const report={};
 try{
  for(const subject of ['electrodynamics-ii','optics']){
   const c=await b.newContext({viewport:{width:360,height:800},isMobile:true,hasTouch:true,userAgent:'Mozilla/5.0 (Linux; Android 13) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36'});
   const p=await c.newPage(),errors=[];p.on('pageerror',e=>errors.push(String(e)));
   await p.goto('http://127.0.0.1:8771/'+subject+'-model-paper-4-practice.html',{waitUntil:'networkidle'});
   await p.waitForFunction(()=>window.__sm && window.MathJax?.tex2svg);
   await p.evaluate(()=>__sm.typeset(__sm.$('shelf')));
   const r=await p.evaluate(()=>{
    const opts=[...document.querySelectorAll('.eval .option-text')];
    return {mathOptions:opts.filter(x=>x.querySelector('mjx-container')).length,parseErrors:document.querySelectorAll('mjx-container [data-mjx-error]').length,
      focused:document.body.classList.contains('is-focused'),fullHidden:getComputedStyle(document.querySelector('.tb-full')).display==='none',
      pips:getComputedStyle(document.querySelector('.n-pips')).display,overflow:document.documentElement.scrollWidth>innerWidth,
      scoreFont:getComputedStyle(document.querySelector('.n-score')).fontSize};
   });
   assert(r.mathOptions>15);assert.equal(r.parseErrors,0);assert(r.focused&&r.fullHidden&&!r.overflow);assert.notEqual(r.pips,'none');assert.equal(r.scoreFont,'15px');
   if(subject==='optics'){
    const id=await p.evaluate(()=>{
     const sh=__sm.SHEETS[11];sh.el.closest('.group').classList.remove('is-stacked');sh.el.querySelector('.cover').click();
     return sh.cards.find(c=>c.type==='eval').id;
    });
    await p.waitForTimeout(800);await p.evaluate(id=>__sm.glideTo(__sm.CARDS.find(c=>c.id===id).el,400),id);
    await p.waitForFunction(id=>__sm.centred()?.dataset.card===id,id);await p.waitForTimeout(800);
    assert.equal(await p.locator('[data-card="'+id+'"] .option-text mjx-container').count(),3);
    await p.screenshot({path:'verification/optics-options-android.png'});
   }
   await p.evaluate(()=>__sm.__match.kickoff());
   for(const width of [320,360,390,1440]){
    await p.setViewportSize({width,height:width===1440?1000:800});await p.waitForTimeout(100);
    const fits=await p.evaluate(()=>{
     const h=document.querySelector('.notch-bar').getBoundingClientRect();
     return h.left>=0&&h.right<=innerWidth&&getComputedStyle(document.querySelector('.n-pips')).display!=='none'&&document.documentElement.scrollWidth<=innerWidth;
    });assert(fits,'Notch overflow at '+width);
   }
   assert.deepEqual(errors,[]);report[subject]=r;await c.close();
  }
  fs.writeFileSync('verification/options-android-check.json',JSON.stringify(report,null,2)+'\n');console.log(report);
 }finally{await b.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
