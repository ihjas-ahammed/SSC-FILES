const { chromium } = require('/home/ihjas/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert = require('node:assert/strict'), fs = require('node:fs');
const url = 'http://127.0.0.1:8770/study-math-day-9.html';
(async () => {
  const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', headless: true, args: ['--no-sandbox'] });
  try {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, reducedMotion: 'reduce' });
    const page = await context.newPage(), errors = [], report = {};
    page.on('pageerror', e => errors.push(String(e)));
    async function load() {
      await page.goto(url, { waitUntil: 'networkidle' });
      await page.waitForFunction(() => window.__sm && window.MathJax?.tex2svg);
    }
    async function show(id, prepare = false) {
      await page.evaluate(({ id, prepare }) => {
        const c = __sm.CARDS.find(c => c.id === id), sh = c.sheet;
        if (prepare) {
          sh.cards.slice(0, sh.cards.indexOf(c)).forEach(p => {
            const s = __sm.cst(p); s.seen = 1;
            if (__sm.QUIZ[p.type]) s.done = 1;
            if (__sm.isDefinition(p)) s.definition = { complete: true, method: 'confirmed' };
          });
          __sm.SHEETS.filter(other => other !== sh).forEach(other => {
            other.el.classList.remove('is-open');
            other.el.querySelector('.cover').setAttribute('aria-expanded', 'false');
          });
        }
        __sm.renderProgress();
        sh.el.closest('.group').classList.remove('is-stacked');
        if (!sh.el.classList.contains('is-open')) sh.el.querySelector('.cover').click();
        __sm.glideTo(c.el, 700);
      }, { id, prepare });
      await page.waitForFunction(id => __sm.centred()?.dataset.card === id, id);
      await page.waitForTimeout(750);
      return page.locator('[data-card="' + id + '"]');
    }
    async function flip(card) {
      if (!await card.evaluate(el => el.classList.contains('is-flipped'))) await card.locator('[data-def="flip"]').tap();
      assert.equal(await card.locator('.definition-back').evaluate(el => el.inert), false);
    }
    await load();
    report.course = await page.evaluate(() => ({
      title: __sm.meta.title, sheets: __sm.SHEETS.length, expandedCards: __sm.CARDS.length,
      glossary: __sm.data.glossary.length, intuition: __sm.CARDS.filter(c => c.type === 'intuition').length,
      derivations: __sm.CARDS.filter(c => c.type === 'derive').length,
      flipCards: __sm.CARDS.filter(__sm.isDefinition).length,
      subjectMinutes: __sm.meta.sessions.map(s => s.minutes)
    }));
    assert.match(report.course.title, /Day 9 Maths/);
    assert.equal(report.course.sheets, 14); assert.equal(report.course.expandedCards, 217);
    assert.equal(report.course.glossary, 122); assert.equal(report.course.intuition, 16);
    assert.equal(report.course.derivations, 6); assert(report.course.flipCards >= 20);
    assert.deepEqual(report.course.subjectMinutes, [174,174]);
    assert.equal(await page.locator('.tb-full').isVisible(), false);
    assert.equal(await page.locator('#notch').isVisible(), true);
    assert.equal(await page.locator('#covPct').innerText(), '0%');
    report.rendering = await page.evaluate(() => {
      const raw = JSON.parse(document.getElementById('course-data').textContent), tex = [];
      function scan(value, key = '') {
        if (typeof value === 'string') {
          if (['tex','by','start','goal'].includes(key)) tex.push(value);
          else if (key !== 'art') for (const m of value.matchAll(/\\\((.*?)\\\)/gs)) tex.push(m[1]);
        } else if (value && typeof value === 'object') Object.entries(value).forEach(([k,v]) => scan(v,k));
      }
      scan(raw);
      const bad = [];
      tex.forEach((t,i) => { try { if (MathJax.tex2svg(t).querySelector('[data-mjx-error],merror')) bad.push({ i, tex: t }); } catch (e) { bad.push({i,tex:t,error:String(e)}); } });
      return { expressions: tex.length, errors: bad };
    });
    assert.deepEqual(report.rendering.errors, []);
    const first = await page.evaluate(() => __sm.CARDS.find(__sm.isDefinition).id);
    let card = await show(first);
    assert.equal(await card.locator('[data-term="complex-limit"]').count(), 0);
    const domain = card.locator('.definition-front [data-term="domain"]').first();
    await domain.hover(); await page.waitForTimeout(350);
    assert.equal(await page.locator('#termDefinition').isVisible(), false);
    await domain.tap(); assert.equal(await page.locator('#termTitle').innerText(), 'Domain');
    await page.keyboard.press('Escape');
    await flip(card); await card.locator('.def-label').tap();
    assert.equal(await card.locator('.def-answer').evaluate(el => document.activeElement === el), true);
    await page.keyboard.type('I can type a definition before the match begins.');
    assert.match(await card.locator('.def-answer').inputValue(), /^I can type/);
    assert.equal(await card.evaluate(el => el.classList.contains('is-flipped')), true);
    report.clickOnlyGlossaryAndEditableFlip = true;
    await page.evaluate(() => { localStorage.removeItem(__sm.KEY); }); await load();
    await page.locator('#notchMatch').tap();
    await page.locator('#customTiming').check();
    async function range(id, value) {
      await page.locator('#' + id).evaluate((el,v) => { el.value = v; el.dispatchEvent(new Event('input', { bubbles: true })); }, value);
    }
    await range('halfMinutes', 40);
    assert.deepEqual(await page.evaluate(() => __sm.__match.schedule().ends), [45,90]);
    await range('halfMinutes', 60); await range('hydrationMinutes', 7); await range('halfTimeMinutes', 3);
    assert.deepEqual(await page.evaluate(() => __sm.__match.schedule().ends), [25,45,70,90]);
    assert.deepEqual(await page.evaluate(() => __sm.__match.schedule().breaks.map(b => b.min)), [7,3,7]);
    await page.locator('[data-act="kick"]').tap(); await page.locator('button[data-close]').tap();
    assert.equal(await page.evaluate(() => __sm.SHEETS.every(sh => !__sm.cardLocked(sh.cards[0]) && sh.cards.slice(1).every(__sm.cardLocked))), true);
    await show(await page.evaluate(() => __sm.SHEETS[0].cards[0].id));
    card = await show(first); await flip(card);
    const next = await page.evaluate(id => { const c = __sm.CARDS.find(c => c.id === id); return c.sheet.cards[c.sheet.cards.indexOf(c)+1].id; }, first);
    const locked = page.locator('[data-card="' + next + '"]');
    assert.equal(await locked.evaluate(el => el.getBoundingClientRect().width > 250 && el.inert && parseFloat(getComputedStyle(el).opacity) < 1), true);
    const pos = await page.evaluate(() => __sm.$('shelf').scrollLeft);
    await page.evaluate(() => __sm.step(-1)); await page.waitForTimeout(450);
    assert(Math.abs((await page.evaluate(() => __sm.$('shelf').scrollLeft)) - pos) < 4);
    await card.locator('.def-answer').fill('one two three four five six seven');
    await card.locator('[data-def="check"]').tap();
    assert.match(await card.locator('.def-status').innerText(), /8 words \(7 so far\)/);
    const answer = 'A complex limit is one output approached on every allowed route.';
    await card.locator('.def-answer').fill(answer); await card.locator('[data-def="check"]').tap();
    assert.equal(await card.locator('.verify-text').innerText(), await page.evaluate(id => __sm.CARDS.find(c => c.id === id).body, first));
    assert.equal(await locked.evaluate(el => el.classList.contains('is-locked')), true);
    await card.locator('[data-def="retry"]').tap();
    assert.equal(await card.locator('.def-answer').inputValue(), '');
    assert.equal(await card.locator('.def-reveal').isVisible(), false);
    await card.locator('.def-answer').fill(answer); await card.locator('[data-def="check"]').tap();
    await page.locator('#pauseMatch').tap();
    assert.equal(await card.locator('.def-answer').isDisabled(), true);
    await page.reload({ waitUntil: 'networkidle' }); await page.waitForFunction(() => window.__sm);
    assert.equal(await page.evaluate(() => __sm.isPaused()), true);
    await page.locator('#pauseMatch').tap(); card = await show(first); await flip(card);
    assert.equal(await card.locator('.def-answer').inputValue(), answer);
    assert.equal(await card.locator('.def-reveal').isVisible(), true);
    await page.screenshot({ path: 'verification/maths-definition-mobile.png' });
    await card.locator('.def-confirm').tap();
    assert.equal(await locked.evaluate(el => el.classList.contains('is-locked')), false);
    await page.evaluate(() => __sm.step(-1)); await page.waitForTimeout(650);
    assert.notEqual(await page.evaluate(() => __sm.centred()?.dataset.card), first);
    card = await show(next); await flip(card); await card.locator('[data-def="skip"]').tap();
    await card.locator('[data-def="again"]').tap();
    assert.equal(await card.locator('.def-answer').isEditable(), true);
    assert.equal(await page.evaluate(() => __sm.__match.M().shots), 0);
    report.visibleLocksRecallRetrySkipAndPersistence = true;
    const quiz = await page.evaluate(() => __sm.SHEETS[0].cards.find(c => c.type === 'mcq').id);
    card = await show(quiz, true);
    await page.waitForFunction(id => __sm.CARDS.find(c => c.id === id).el.classList.contains('is-revealed'), quiz);
    await page.locator('#pauseMatch').tap();
    const frozen = await page.evaluate(id => ({ timer: __sm.CARDS.find(c => c.id === id).el._left, clock: __sm.__match.minuteNow() }), quiz);
    await page.waitForTimeout(600);
    const still = await page.evaluate(id => ({ timer: __sm.CARDS.find(c => c.id === id).el._left, clock: __sm.__match.minuteNow() }), quiz);
    assert.deepEqual(still, frozen);
    await page.locator('#pauseMatch').tap();
    const correct = await page.evaluate(id => __sm.CARDS.find(c => c.id === id).answer, quiz);
    await card.locator('[data-k="' + correct + '"]').tap();
    assert.equal(await page.evaluate(id => __sm.cst(__sm.CARDS.find(c => c.id === id)).right, quiz), 1);
    assert.equal(await page.evaluate(() => __sm.__match.M().shots), 1);
    const derive = await page.evaluate(() => __sm.CARDS.find(c => c.type === 'derive').id);
    card = await show(derive, true);
    await page.evaluate(id => __sm.CARDS.find(c => c.id === id).player.play(), derive);
    await page.waitForFunction(id => !__sm.CARDS.find(c => c.id === id).el.querySelector('.mf-ask').hidden, derive);
    const ask = await page.evaluate(id => __sm.CARDS.find(c => c.id === id).d.steps.find(s => s.ask).ask.answer, derive);
    await card.locator('.mf-ask-opts [data-k="' + ask + '"]').tap();
    assert.match(await card.locator('.mf-ask-why').innerText(), /distance|definition|restricts/i);
    await page.screenshot({ path: 'verification/maths-derivation-mobile.png' });
    report.quizClockPauseScoringAndDerivationCheckpoint = true;
    async function endStretch(period) {
      await page.evaluate(period => {
        const m = __sm.__match.M(), s = __sm.__match.schedule(), from = period ? s.ends[period-1] : 0;
        m.status = 'play'; m.period = period;
        m.pStart = Date.now() - (s.ends[period]-from)/s.rate*60000 - 100;
        __sm.SHEETS.forEach(sh => { m.topics[sh.id] = 'pre'; });
      }, period);
      await page.waitForFunction(() => __sm.__match.M().status === 'break');
    }
    await endStretch(0); assert.equal(await page.locator('#breakTitle').innerText(), 'Hydration break');
    await page.locator('#breakSkip').tap(); assert.equal(await page.evaluate(() => __sm.__match.M().period), 1);
    await endStretch(1); assert.equal(await page.locator('#breakTitle').innerText(), 'Half-time');
    await page.locator('#breakSkip').tap(); assert.equal(await page.evaluate(() => __sm.__match.M().period), 2);
    report.hydrationThresholdAndIndependentDurationsAndSkip = true;
    const preview = await context.newPage(); await preview.goto(url, { waitUntil: 'networkidle' });
    await preview.waitForFunction(() => window.__sm);
    // End this test match so reading previews do not encounter intentional locks.
    await preview.evaluate(() => { __sm.__match.M().status = 'ft'; __sm.renderMatch(); });
    async function previewCard(title) {
      const id = await preview.evaluate(title => {
        const c = __sm.CARDS.find(c => c.title === title), sh = c.sheet;
        __sm.SHEETS.filter(other => other !== sh).forEach(other => {
          other.el.classList.remove('is-open');
          other.el.querySelector('.cover').setAttribute('aria-expanded','false');
        });
        sh.el.closest('.group').classList.remove('is-stacked');
        if (!sh.el.classList.contains('is-open')) sh.el.querySelector('.cover').click();
        return c.id;
      }, title);
      // Allow opening/resizing to settle before selecting a later card.
      await preview.waitForTimeout(800);
      await preview.evaluate(id => __sm.glideTo(__sm.CARDS.find(c => c.id === id).el,350), id);
      await preview.waitForFunction(id => __sm.centred()?.dataset.card === id,id);
      await preview.waitForTimeout(750);
    }
    await previewCard('Semidefinite permits a flat direction');
    assert.equal(await preview.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    await preview.screenshot({ path: 'verification/maths-hessian-mobile.png' });
    await preview.evaluate(() => __sm.toggleTheme());
    await previewCard('Incomparability versus one common minimum');
    await preview.screenshot({ path: 'verification/maths-order-dark-mobile.png' });
    await preview.setViewportSize({ width: 1440, height: 1000 });
    await previewCard('A filled disk versus its outline');
    await preview.screenshot({ path: 'verification/maths-convex-desktop.png' });
    const hosted = await context.newPage();
    await hosted.goto('http://127.0.0.1:8770/app/', { waitUntil: 'networkidle' });
    await hosted.waitForFunction(() => window.__sm);
    assert.equal(await hosted.evaluate(() => __sm.SHEETS.length), 14);
    assert.match(await hosted.title(), /Maths/);
    report.mobileNoPageOverflowAndHostedCourse = true;
    assert.deepEqual(errors, []); report.pageErrors = errors;
    fs.writeFileSync('verification/course-check.json',JSON.stringify(report,null,2)+'\n');
    console.log(JSON.stringify(report,null,2));
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; });
