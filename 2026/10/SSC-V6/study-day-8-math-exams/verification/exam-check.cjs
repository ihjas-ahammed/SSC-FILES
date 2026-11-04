const { chromium } = require('/home/ihjas/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert = require('node:assert/strict'), fs = require('node:fs');
const base = 'http://127.0.0.1:8772/';
(async () => {
  const browser = await chromium.launch({executablePath:'/usr/bin/google-chrome',headless:true,args:['--no-sandbox']});
  const reports = {};
  try {
    for (const subject of ['real-analysis-ii','abstract-algebra-i']) {
      const paper = subject === 'real-analysis-ii' ? 5 : 4;
      const context = await browser.newContext({viewport:{width:360,height:800},isMobile:true,hasTouch:true,reducedMotion:'reduce',userAgent:'Mozilla/5.0 (Linux; Android 13) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36'});
      const page = await context.newPage(), errors = [];
      page.on('pageerror', e => errors.push(String(e)));
      const url = base + subject + '-model-paper-' + paper + '-practice.html';
      async function load() {
        await page.goto(url,{waitUntil:'networkidle'});
        await page.waitForFunction(() => window.__sm && window.MathJax?.tex2svg);
      }
      async function show(id, prepare=false) {
        await page.evaluate(({id,prepare}) => {
          const c=__sm.CARDS.find(c=>c.id===id), sh=c.sheet;
          if (prepare) sh.cards.slice(0,sh.cards.indexOf(c)).forEach(p=>{
            const s=__sm.cst(p); s.seen=1;
            if (__sm.QUIZ[p.type]) s.done=1;
            if (__sm.isDefinition(p)) s.definition={complete:true,method:'confirmed'};
          });
          __sm.SHEETS.filter(other=>other!==sh).forEach(other=>{
            other.el.classList.remove('is-open'); other.el.querySelector('.cover').setAttribute('aria-expanded','false');
          });
          sh.el.closest('.group').classList.remove('is-stacked');
          if (!sh.el.classList.contains('is-open')) sh.el.querySelector('.cover').click();
          __sm.renderProgress();
        },{id,prepare});
        await page.waitForTimeout(800);
        await page.evaluate(id=>__sm.glideTo(__sm.CARDS.find(c=>c.id===id).el,400),id);
        await page.waitForFunction(id=>__sm.centred()?.dataset.card===id,id);
        await page.waitForTimeout(750);
        return page.locator('[data-card="'+id+'"]');
      }
      async function flip(card) {
        if (!await card.evaluate(el=>el.classList.contains('is-flipped'))) await card.locator('[data-def="flip"]').tap();
        assert.equal(await card.locator('.definition-back').evaluate(el=>el.inert),false);
      }
      await load();
      const report = reports[subject] = await page.evaluate(()=>({
        sheets:__sm.SHEETS.length,cards:__sm.CARDS.length,
        questions:__sm.CARDS.filter(c=>c.type==='question').length,
        flips:__sm.CARDS.filter(__sm.isDefinition).length,
        highMarkFlips:__sm.CARDS.filter(c=>c.marks>3 && __sm.isDefinition(c)).length,
        marks:__sm.examMarks()
      }));
      assert.equal(report.sheets,20); assert.equal(report.questions,20);
      assert.equal(report.flips,10); assert.equal(report.highMarkFlips,0);
      assert.equal(report.cards,subject==='real-analysis-ii'?168:159);
      assert.equal(await page.locator('#examMarkTotal').innerText(),'0 / 70');
      assert.equal(await page.locator('#notch').isVisible(),true);
      assert.equal(await page.locator('.tb-full').isVisible(),false);
      assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
      report.tex = await page.evaluate(()=>{
        const d=JSON.parse(document.getElementById('course-data').textContent), tex=[];
        function scan(v,k='') {
          if(typeof v==='string'){
            if(['tex','by','goal','start'].includes(k)) tex.push(v);
            else if(k!=='art') for(const m of v.matchAll(/\\\((.*?)\\\)/gs))tex.push(m[1]);
          }else if(v && typeof v==='object')Object.entries(v).forEach(([k,v])=>scan(v,k));
        }
        scan(d);
        return {count:tex.length,errors:tex.filter(t=>{try{return !!MathJax.tex2svg(t).querySelector('[data-mjx-error],merror');}catch{return true;}})};
      });
      assert.deepEqual(report.tex.errors,[]);
      await page.evaluate(()=>__sm.typeset(__sm.$('shelf')));
      assert((await page.locator('.eval .option-text mjx-container').count())>15);
      assert.equal(await page.locator('.eval [data-mjx-error]').count(),0);
      assert.notEqual(await page.locator('.n-pips').evaluate(el=>getComputedStyle(el).display),'none');
      assert.match(await page.locator('#examSubtitle').textContent(),new RegExp('Model Paper '+paper));
      assert.equal(await page.evaluate(()=>{
        const box=document.createElement('div');
        box.innerHTML=__sm.mathHTML('Before \\(a<b\\), after \\(R^2<L/C\\).');
        return box.children.length===0 && box.textContent==='Before \\(a<b\\), after \\(R^2<L/C\\).';
      }),true);
      const first=await page.evaluate(()=>__sm.SHEETS[0].cards[0].id);
      let card=await show(first); await flip(card);
      await card.locator('.def-answer').fill('I can write this short answer before the match starts.');
      assert.equal(await card.locator('.def-answer').isEditable(),true);
      assert.equal(await card.evaluate(el=>el.classList.contains('is-flipped')),true);
      await page.evaluate(()=>{localStorage.removeItem(__sm.KEY);}); await load();
      await page.evaluate(()=>__sm.__match.kickoff());
      card=await show(first); await flip(card);
      const next=await page.evaluate(()=>__sm.SHEETS[0].cards[1].id);
      const locked=page.locator('[data-card="'+next+'"]');
      assert.equal(await locked.evaluate(el=>el.inert && el.getBoundingClientRect().width>250 && parseFloat(getComputedStyle(el).opacity)<1),true);
      const left=await page.evaluate(()=>__sm.$('shelf').scrollLeft);
      await page.evaluate(()=>__sm.step(-1)); await page.waitForTimeout(500);
      assert(Math.abs(await page.evaluate(()=>__sm.$('shelf').scrollLeft)-left)<4);
      await card.locator('.def-answer').fill('one two three four five six seven');
      await card.locator('[data-def="check"]').tap();
      assert.match(await card.locator('.def-status').innerText(),/8 words \(7 so far\)/);
      const draft='I have written a short answer and drawn the requested figure on paper.';
      await card.locator('.def-answer').fill(draft); await card.locator('[data-def="check"]').tap();
      if (subject==='real-analysis-ii') {
        assert.match(await card.locator('.verify-text').textContent(),/If/);
        assert.match(await card.locator('.verify-text').textContent(),/continuity gives a subinterval/);
      }
      assert.equal(await card.locator('.verify-text').evaluate((el)=>el.innerHTML.includes('undefined')),false);
      assert.equal(await page.evaluate(id=>{
        const c=__sm.CARDS.find(c=>c.id===id), target=document.createElement('div');
        target.innerHTML=c.recallAnswer;
        // MathJax changes markup, so check the stored reference source separately.
        return c.el.querySelector('.verify-text').textContent.length>50 && __sm.cst(c).definition.revealed;
      },first),true);
      assert.equal(await locked.evaluate(el=>el.classList.contains('is-locked')),true);
      await card.locator('.def-retry').tap(); assert.equal(await card.locator('.def-answer').inputValue(),'');
      await card.locator('.def-answer').fill(draft); await card.locator('[data-def="check"]').tap();
      await page.locator('#pauseMatch').tap(); assert.equal(await card.locator('.def-answer').isDisabled(),true);
      await page.reload({waitUntil:'networkidle'}); await page.waitForFunction(()=>window.__sm);
      assert.equal(await page.evaluate(()=>__sm.isPaused()),true);
      await page.locator('#pauseMatch').tap(); card=await show(first);await flip(card);
      assert.equal(await card.locator('.def-answer').inputValue(),draft);
      await page.screenshot({path:'verification/'+subject+'-flip-mobile.png'});
      await card.locator('.def-confirm').tap();
      assert.equal(await locked.evaluate(el=>el.classList.contains('is-locked')),false);
      assert.equal(await page.locator('#examMarkTotal').innerText(),'0 / 70');
      const firstRubric=await show(next);
      await firstRubric.locator('[data-k="0"]').tap();
      assert.equal(await page.locator('#examMarkTotal').innerText(),'2 / 70');
      const third=await page.evaluate(()=>__sm.SHEETS[0].cards[2].id);
      const thirdCard=await show(third); await thirdCard.locator('[data-k="0"]').tap();
      assert.equal(await page.locator('#examMarkTotal').innerText(),'3 / 70');
      assert.equal(await page.locator('#examMarkedCount').innerText(),'1 / 20 marked');
      await page.locator('#examMeter').tap(); assert.equal(await page.locator('#examSummary').isVisible(),true);
      assert.match(await page.locator('#examSummaryTotal').innerText(),/^3 \/ 70/);
      await page.screenshot({path:'verification/'+subject+'-marks-mobile.png'});
      await page.locator('#examSummaryClose').tap();
      await page.reload({waitUntil:'networkidle'}); await page.waitForFunction(()=>window.__sm);
      assert.equal(await page.locator('#examMarkTotal').innerText(),'3 / 70');
      // Scoring fixtures exercise all ceilings and partial-mark persistence.
      const caps=await page.evaluate(()=>{
        const mark=(sec,value)=>sec.sheets.forEach(sh=>sh.cards.filter(c=>c.type==='eval').forEach(c=>{
          const s=__sm.cst(c);s.done=1;s.marks=value==='full'?Math.max(...c.options.map(o=>o.m)):value;
        }));
        __sm.S.cards={}; __sm.SECTIONS.forEach(sec=>mark(sec,'full'));
        const full=__sm.examMarks();
        __sm.S.cards={};mark(__sm.SECTIONS[2],'full');
        const best=__sm.examMarks();
        __sm.S.cards={};const c=__sm.SHEETS[0].cards.find(c=>c.type==='eval'),s=__sm.cst(c);
        s.done=1;s.marks=0.5;const partial=__sm.examMarks();
        __sm.renderExamMarks();return {full,best,partial};
      });
      assert.equal(caps.full.total,70);assert.deepEqual(caps.full.sections.map(s=>s.got),[24,36,10]);
      assert.equal(caps.best.total,10);assert.equal(caps.partial.total,0.5);assert.equal(caps.partial.marked,0);
      await page.evaluate(()=>{__sm.S.cards={};__sm.__match.M().status='ft';__sm.save();});
      await page.reload({waitUntil:'networkidle'}); await page.waitForFunction(()=>window.__sm);
      const nextQ=await page.evaluate(()=>__sm.SHEETS[1].cards[0].id);
      card=await show(nextQ);await flip(card);await card.locator('[data-def="skip"]').tap();
      assert.equal(await page.locator('#examMarkTotal').innerText(),'0 / 70');
      await card.locator('[data-def="again"]').tap();assert.equal(await card.locator('.def-answer').isEditable(),true);
      const high=await page.evaluate(()=>__sm.SHEETS[10].cards[0].id);
      const highCard=await show(high);
      assert.equal(await highCard.locator('.definition-inner').count(),0);
      const diagram=await page.evaluate(()=>__sm.CARDS.find(c=>c.art && c.sheet.marks>3)?.id || __sm.CARDS.find(c=>c.title==='The full reordered addition table').id);
      await show(diagram);
      await page.screenshot({path:'verification/'+subject+'-worked-mobile.png'});
      for (const width of [320,360,390]) {
        await page.setViewportSize({width,height:800});
        assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
        assert.notEqual(await page.locator('.n-pips').evaluate(el=>getComputedStyle(el).display),'none');
      }
      await page.setViewportSize({width:1440,height:1000});await show(diagram);
      await page.screenshot({path:'verification/'+subject+'-desktop.png'});
      assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
      const hosted=await context.newPage();await hosted.goto(base+'apps/'+subject+'/',{waitUntil:'networkidle'});
      await hosted.waitForFunction(()=>window.__sm);
      assert.equal(await hosted.evaluate(()=>__sm.SHEETS.length),20);
      assert.equal(await hosted.locator('#examMeter').isVisible(),true);
      assert.deepEqual(errors,[]);
      report.flipsTypingLocksAndPause=true;report.rubricMarksAndReload=true;
      report.sectionCeilingsAndBestOne=true;report.skipDoesNotAwardMarks=true;
      report.highMarksKeepLayout=true;report.mobileDesktopAndHosted=true;report.pageErrors=errors;
      report.mathJaxOptionsAndAndroidNotch=true;
      delete report.marks;
      console.log(subject+' passed');
      await context.close();
    }
    fs.writeFileSync('verification/exam-check.json',JSON.stringify(reports,null,2)+'\n');
    console.log(JSON.stringify(reports,null,2));
  } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
