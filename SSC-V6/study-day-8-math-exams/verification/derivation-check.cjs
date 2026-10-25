const {chromium}=require('/home/ihjas/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert=require('node:assert/strict'),fs=require('node:fs');
(async()=>{
 const browser=await chromium.launch({executablePath:'/usr/bin/google-chrome',headless:true,args:['--no-sandbox']});
 const report={};
 try{
  for(const [subject,paper] of [['real-analysis-ii',5],['abstract-algebra-i',4]]){
   const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,reducedMotion:'reduce'});
   const page=await context.newPage();
   await page.goto('http://127.0.0.1:8772/'+subject+'-model-paper-'+paper+'-practice.html',{waitUntil:'networkidle'});
   await page.waitForFunction(()=>window.__sm && window.MathJax?.tex2svg);
   const id=await page.evaluate(()=>{
    const c=__sm.CARDS.find(c=>c.type==='derive'),sh=c.sheet;
    sh.el.closest('.group').classList.remove('is-stacked');sh.el.querySelector('.cover').click();return c.id;
   });
   await page.waitForTimeout(800);
   await page.evaluate(id=>__sm.glideTo(__sm.CARDS.find(c=>c.id===id).el,400),id);
   await page.waitForFunction(id=>__sm.centred()?.dataset.card===id,id);
   await page.evaluate(id=>__sm.CARDS.find(c=>c.id===id).player.play(),id);
   await page.waitForFunction(id=>!__sm.CARDS.find(c=>c.id===id).el.querySelector('.mf-ask').hidden,id);
   const card=page.locator('[data-card="'+id+'"]');
   const answer=await page.evaluate(id=>__sm.CARDS.find(c=>c.id===id).d.steps.find(s=>s.ask).ask.answer,id);
   await card.locator('.mf-ask-opts [data-k="'+answer+'"]').tap();
   assert.match(await card.locator('.mf-ask-why').innerText(),/^Right move/);
   assert.equal(await card.locator('.mf-ask-go').isVisible(),true);
   assert.equal(await page.locator('#examMarkTotal').innerText(),'0 / 70');
   await page.screenshot({path:'verification/'+subject+'-derivation-mobile.png'});
   await card.locator('.mf-ask-go').tap();
   assert.equal(await card.locator('.mf-ask').isVisible(),false);
   report[subject]={checkpointAnswered:true,playbackResumed:true,noExamMarksFromCheckpoint:true};
   await context.close();
  }
  fs.writeFileSync('verification/derivation-check.json',JSON.stringify(report,null,2)+'\n');console.log(report);
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
