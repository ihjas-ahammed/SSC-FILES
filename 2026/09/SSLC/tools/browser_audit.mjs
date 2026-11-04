#!/usr/bin/env node
/* Requires Node 22+, a local HTTP server, and isolated Chrome with
   --headless=new --remote-debugging-port=9223 --user-data-dir=/tmp/sslc-browser-test
   node tools/browser_audit.mjs [http://127.0.0.1:8765/app/index.html] [--all-lessons]
   Each run creates/disposes its own incognito context and blocks Firebase. */
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';

const endpoint = process.env.SSLC_CDP_URL || 'http://127.0.0.1:9223';
const url = process.argv.find(a => /^https?:/.test(a)) || 'http://127.0.0.1:8765/app/index.html';
const allLessons = process.argv.includes('--all-lessons');
async function socket(url) {
  const ws = new WebSocket(url);
  await new Promise((resolve, reject) => { ws.onopen = resolve; ws.onerror = reject; });
  let id = 0;
  const pending = new Map(), errors = [], requests = [];
  ws.onmessage = ({data}) => {
    const msg = JSON.parse(data);
    if (pending.has(msg.id)) {
      const [resolve, reject, timer] = pending.get(msg.id);
      clearTimeout(timer); pending.delete(msg.id);
      msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result);
    } else if (msg.method === 'Runtime.exceptionThrown') errors.push(msg.params.exceptionDetails);
    else if (msg.method === 'Network.requestWillBeSent') requests.push(msg.params.request.url);
  };
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const n = ++id;
    const timer = setTimeout(() => { pending.delete(n); reject(new Error('CDP timeout: ' + method)); }, 30000);
    pending.set(n, [resolve, reject, timer]); ws.send(JSON.stringify({id:n, method, params}));
  });
  return {send, errors, requests, close: () => ws.close()};
}
const version = await (await fetch(endpoint + '/json/version')).json();
const browser = await socket(version.webSocketDebuggerUrl);
const {browserContextId} = await browser.send('Target.createBrowserContext');
let page;
try {
  const {targetId} = await browser.send('Target.createTarget', {url: 'about:blank', browserContextId});
  const targets = await (await fetch(endpoint + '/json/list')).json();
  page = await socket(targets.find(t => t.id === targetId).webSocketDebuggerUrl);
  const evaluate = async expression => {
    const r = await page.send('Runtime.evaluate', {expression, returnByValue:true, awaitPromise:true});
    if (r.exceptionDetails) throw new Error(JSON.stringify(r.exceptionDetails));
    return r.result.value;
  };
  const waitFor = async expression => {
    for (let n=0; n<200; n++) {
      if (await evaluate(expression)) return;
      await new Promise(r => setTimeout(r, 100));
    }
    const state = await evaluate('({url:location.href,ready:document.readyState,error:document.body?.dataset.error,text:document.querySelector("main")?.innerText.slice(0,600)})');
    throw new Error('Timed out: ' + expression + '\n' + JSON.stringify({state, errors:page.errors}));
  };
  const click = text => evaluate(`(()=>{const b=[...document.querySelectorAll('main button')].find(b=>b.textContent.includes(${JSON.stringify(text)}));if(!b)throw Error('Missing button: '+${JSON.stringify(text)});b.click()})()`);
  const route = async name => {
    await evaluate(`Router.go(${JSON.stringify(name)})`);
    await waitFor(`Router.current().raw === ${JSON.stringify(name)} && !!document.querySelector('#pagetitle')`);
    await evaluate('Tex.typeset(document.querySelector("main"))');
    assert.equal(await evaluate('document.body.dataset.error || null'), null, name);
  };
  const viewport = (width, height = 800) => page.send('Emulation.setDeviceMetricsOverride', {width, height, deviceScaleFactor:1, mobile:false});
  await page.send('Runtime.enable'); await page.send('Page.enable'); await page.send('Network.enable');
  await page.send('Network.setBlockedURLs', {urls:['*firebasedatabase.app*']});
  await page.send('Emulation.setEmulatedMedia', {features:[{name:'prefers-reduced-motion', value:'reduce'}]});
  await viewport(320, 720);
  await page.send('Page.navigate', {url});
  await waitFor('document.readyState === "complete" && !!document.querySelector("#pagetitle")');
  await waitFor('Tex.available()');
  assert.equal(await evaluate('Store.isOnboarded()'), false, 'fresh guest onboarding');
  await evaluate(`(()=>{const n=document.querySelector('#login-name');n.value='അനു';n.dispatchEvent(new Event('input'));n.focus();I18N.setLang('ml')})()`);
  assert.equal(await evaluate('document.querySelector("#login-name").value'), 'അനു');
  assert.equal(await evaluate('document.activeElement.id'), 'login-name', 'language switch retains form focus');
  await evaluate('I18N.setLang("en");document.querySelector(".btn.primary.lg").click()');
  await waitFor('!!document.querySelector(".today-primary-cta")');
  assert.equal(await evaluate('Store.syncEnabled()'), false, 'guest learning stays local');
  const mock = await evaluate('DATA_SOURCES.use === "mock"');
  const selectedCourse = await evaluate('Store.selectedCourse()');
  const first = await evaluate('Pool.concepts(Store.selectedCourse())[0].id');
  assert.ok(await evaluate('document.querySelector(".today-primary-cta a").href.includes("/note/")'), 'home offers actual mock/live content');
  const colors = await evaluate(`(()=>{const b=document.querySelector('.today-primary-cta .btn');return {label:getComputedStyle(b.querySelector('span:last-child')).color, button:getComputedStyle(b).color}})()`);
  assert.equal(colors.label, colors.button, 'lesson button label has its intended contrast');
  await route('note/' + first);
  assert.ok(await evaluate('!!document.querySelector(".notebody")'), 'ordinary lesson renders without recursive routing');
  await route('home');
  assert.equal(await evaluate('[...MathJax.startup.document.math].filter(item=>!item.typesetRoot?.isConnected).length'), 0, 'navigation releases detached math expressions');
  assert.ok(await evaluate('document.querySelector(".today-primary-cta").textContent.includes("CONTINUE")'), 'home resumes a focused lesson');
  await route('study');
  assert.equal(await evaluate('Tree.path().course'), selectedCourse, 'Learn follows selected course');
  assert.ok(await evaluate(`[...document.querySelectorAll('.cnode button.tlabel')].length > 0`), 'syllabus has interactive concept rows');

  if (!mock) {
    const id = 'm10.1.2.arithmetic-sequence-definition';
    await route('note/' + id);
    assert.ok(await evaluate('!!document.querySelector(".notebody")'), 'lesson unfolds inside tree');
    assert.equal(await evaluate(`Store.isDone('${id}')`), false, 'unopened lesson is not done');
    await click('Mark as read');
    assert.equal(await evaluate(`Store.isDone('${id}')`), true, 'explicit read action records completion');
    await evaluate('Store.setSelectedCourse("foundation");Pool.ids.concepts("foundation").forEach(id=>Store.setDone(id,true))');
    assert.equal(await evaluate('Progress.level(Pool.ids.concepts("foundation")[0])'), 1, 'missing exercises cannot award exercise mastery');
    await route('home');
    assert.ok(await evaluate('document.querySelector(".today-primary-cta").textContent.includes("All lessons read")'), 'completed curriculum does not restart its first lesson');
    await evaluate('Store.setSelectedCourse("m10")');
  }

  await route('drill');
  await click('5 questions'); await click('Whole syllabus'); await click('Start the clock');
  await evaluate(`(()=>{const b=document.querySelector('.omr-opt');if(b)b.click();else{const n=document.querySelector('.nat-in input');n.value='1';n.dispatchEvent(new Event('input'));}})()`);
  await evaluate('I18N.setLang("ml");I18N.setLang("en")');
  assert.ok(await evaluate('!!document.querySelector("[aria-checked=true]") || !!document.querySelector(".nat-in input").value'), 'unlocked answer survives language switch');
  await click('Lock ');
  assert.ok(await evaluate('!!document.querySelector(".verdict")'));
  await evaluate('I18N.setLang("ml");I18N.setLang("en")');
  assert.ok(await evaluate('!!document.querySelector(".verdict")'), 'locked result survives language switch');
  assert.equal(await evaluate('Object.values(Store.snapshot().omr).reduce((n,r)=>n+r.tries,0)'), 1, 'no duplicate attempt after translation');
  await click('Finish early');
  assert.ok(await evaluate('document.querySelector("main").textContent.includes("4 unanswered")'), 'drill counts each question once');

  await route('progress');
  assert.equal(await evaluate('document.querySelector("#exam-date-pref").value'), '', 'fresh profile has no invented exam date');
  await evaluate('document.querySelector("#more-btn").focus();document.querySelector("#more-btn").click()');
  assert.ok(await evaluate('!!document.activeElement.closest("[role=dialog]")'), 'dialog receives focus');
  await page.send('Input.dispatchKeyEvent', {type:'keyDown', key:'Escape', code:'Escape'});
  assert.equal(await evaluate('!!document.querySelector("[role=dialog]")'), false, 'Escape closes dialog');
  assert.equal(await evaluate('document.activeElement.id'), 'more-btn', 'dialog returns focus');
  console.log('Interaction regressions passed (' + (mock ? 'mock' : 'live') + ').');

  const routes = ['home', 'study', 'note/' + first, 'recall', 'drill', 'progress', 'method', 'omr'];
  if (!mock) routes.push('note/m10.1.2.arithmetic-sequence-definition', 'note/m10.1.3.algebraic-form-and-remainders');
  let screens = 0;
  for (const lang of ['en', 'ml']) {
    await evaluate(`I18N.setLang('${lang}')`);
    for (const width of [280, 320, 768, 1280]) {
      await viewport(width);
      for (const name of routes) {
        await route(name);
        const problems = await evaluate(`(()=>{
          const width=document.documentElement.clientWidth;
          const outside=[...document.querySelectorAll('main *')].filter(el=>{
            if(!el.getClientRects().length || el.closest('mjx-container,.math-overflow,.omr-opt .t,.step-track,.sr-only,.acc:not(.open)'))return false;
            for(let a=el.parentElement;a&&a!==document.body;a=a.parentElement){if(['auto','scroll','hidden','clip'].includes(getComputedStyle(a).overflowX))return false;}
            const r=el.getBoundingClientRect();return r.width>0&&(r.right>width+1||r.left < -1);
          }).map(el=>el.tagName+'.'+el.className+': '+el.textContent.slice(0,60));
          return {outside,mathErrors:[...document.querySelectorAll('mjx-merror,[data-mjx-error]')].map(el=>el.textContent)};
        })()`);
        assert.deepEqual(problems, {outside:[], mathErrors:[]}, `${lang} ${width}px ${name}`);
        screens++;
      }
    }
  }
  console.log(screens + ' responsive/language screens passed, including MathJax rendering.');
  if (allLessons) {
    const ids = await evaluate('Pool.ids.allConcepts()');
    for (const lang of ['en','ml']) {
      await evaluate(`I18N.setLang('${lang}')`);
      for (let i=0; i<ids.length; i++) {
        await route('note/' + ids[i]);
        assert.equal(await evaluate('document.querySelectorAll("mjx-merror,[data-mjx-error]").length'), 0, `${lang} ${ids[i]} maths`);
        if ((i+1)%40 === 0) console.log(`Rendered ${i+1}/${ids.length} ${lang} lessons.`);
      }
    }
    console.log('All ' + ids.length + ' lessons rendered in both languages.');
  }
  await viewport(320,720); await evaluate('I18N.setLang("en")'); await route('home');
  const screenshot = await page.send('Page.captureScreenshot', {format:'png'});
  const out = '/tmp/sslc-browser-audit-' + (mock ? 'mock' : 'live') + '.png';
  await fs.writeFile(out, Buffer.from(screenshot.data, 'base64'));
  assert.deepEqual(page.errors, [], 'no uncaught browser errors');
  assert.equal(page.requests.filter(u=>u.includes('firebasedatabase.app')).length, 0, 'guest profile never contacts Firebase');
  console.log('PASS: ' + url + ' (screenshot ' + out + ')');
} finally {
  if (page) page.close();
  await browser.send('Target.disposeBrowserContext', {browserContextId});
  browser.close();
}
