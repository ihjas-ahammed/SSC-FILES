const { chromium } = require('/home/ihjas/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const url = 'http://127.0.0.1:8769/study-physics-day-9.html';
(async function () {
  const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' });
  const errors = [];
  page.on('pageerror', e => errors.push(String(e)));
  const report = {};
  async function load(p) {
    await p.goto(url, { waitUntil: 'networkidle' });
    await p.waitForFunction(() => window.__sm && MathJax.tex2svg);
  }
  async function showCard(p, sheetId, type, term) {
    const id = await p.evaluate(({ sheetId, type, term }) => {
      const sh = __sm.SHEETS.find(s => s.id === sheetId);
      // These timer/glossary checks start after the requested card's prerequisites.
      // The separate definition-check suite exercises actual sequential unlocking.
      const target = sh.cards.find(c => c.type === type && (!term || c.term === term));
      if (__sm.definitionMatch()) sh.cards.slice(0, sh.cards.indexOf(target)).forEach(c => {
        const s = __sm.cst(c); s.seen = 1;
        if (__sm.QUIZ[c.type]) s.done = 1;
        if (__sm.isDefinition(c)) s.definition = { complete: true, method: 'confirmed' };
      });
      // The source design clamps at the first lock of any open sheet. Isolate
      // the topic under test instead of navigating through another topic's lock.
      if (__sm.definitionMatch()) __sm.SHEETS.forEach(other => {
        if (other === sh) return;
        other.el.classList.remove('is-open');
        other.el.querySelector('.cover').setAttribute('aria-expanded', 'false');
      });
      __sm.renderProgress();
      sh.el.closest('.group').classList.remove('is-stacked');
      if (!sh.el.classList.contains('is-open')) sh.el.querySelector('.cover').click();
      const c = sh.cards.find(c => c.type === type && (!term || c.term === term));
      // Let the sheet's 600ms width animation finish during navigation.
      __sm.glideTo(c.el, 700);
      return c.id;
    }, { sheetId, type, term });
    try {
      await p.waitForFunction(id => __sm.centred()?.dataset.card === id, id);
    } catch (error) {
      console.log(await p.evaluate(id => ({
        requested: id, centred: __sm.centred()?.dataset.card,
        bounds: { min: __sm.shelfBounds().min, max: __sm.shelfBounds().max },
        scroll: __sm.$('shelf').scrollLeft,
        target: __sm.CARDS.find(c => c.id === id)?.el.getBoundingClientRect().toJSON(),
        open: __sm.SHEETS.filter(sh => sh.el.classList.contains('is-open')).map(sh => ({
          id: sh.id, firstLocked: sh.cards.find(__sm.cardLocked)?.id,
          firstPending: sh.cards.find(c => !__sm.isDone(c))?.id
        }))
      }), id));
      throw error;
    }
    await p.waitForTimeout(750);
    return p.locator('[data-card="' + id + '"]');
  }
  async function range(p, id, value) {
    await p.locator('#' + id).evaluate((el, value) => { el.value = value; el.dispatchEvent(new Event('input', { bubbles: true })); }, value);
  }
  await load(page);
  assert.equal(await page.locator('.tb-full').isVisible(), false);
  assert.equal(await page.locator('#notch').isVisible(), true);
  assert.equal(await page.locator('#notchMatch').isVisible(), true);
  report.defaultFocused = true;
  report.intuitionCards = await page.locator('.intuition-card').count();
  assert.equal(report.intuitionCards, 19);
  report.glossaryTerms = await page.evaluate(() => __sm.data.glossary.length);
  assert(report.glossaryTerms >= 100);
  assert.equal(await page.evaluate(() => __sm.SHEETS[0].cards.find(c => c.type === 'info').id), 'day9-qm-hilbert-0');
  report.legacyCardIdsPreserved = true;

  const ket = await showCard(page, 'day9-qm-dirac', 'intuition', 'ket');
  assert.equal(await ket.locator('[data-term="ket"], [data-term="bra"]').count(), 0);
  const stateLink = ket.locator('[data-term="quantum-state"]').first();
  await stateLink.click();
  assert.equal(await page.locator('#termTitle').innerText(), 'State');
  assert.match(await page.locator('#termMeaning').innerText(), /description of how a quantum system is prepared/);
  await page.keyboard.press('Escape');
  const dual = ket.locator('[data-term="dual-space"]').first();
  await dual.hover();
  await page.waitForTimeout(350);
  assert.equal(await page.locator('#termDefinition').isVisible(), false);
  await dual.focus();
  assert.equal(await page.locator('#termDefinition').isVisible(), false);
  await dual.click();
  await page.waitForFunction(() => !document.getElementById('termDefinition').hidden);
  assert.equal(await page.locator('#termTitle').innerText(), 'Dual space');
  assert.match(await page.locator('#termMeaning').innerText(), /linear scalar-valued rules/);
  await page.mouse.move(1400, 950);
  assert.equal(await page.locator('#termDefinition').isVisible(), true);
  await page.keyboard.press('Escape');
  await dual.click();
  await page.mouse.move(1400, 950);
  await page.waitForTimeout(300);
  assert.equal(await page.locator('#termDefinition').isVisible(), true);
  const nested = page.locator('#termMeaning .term-link').first();
  await nested.click();
  assert.equal(await page.locator('#termBack').isVisible(), true);
  await page.locator('#termBack').click();
  assert.equal(await page.locator('#termTitle').innerText(), 'Dual space');
  await page.keyboard.press('Escape');
  assert.equal(await page.locator('#termDefinition').isVisible(), false);
  await dual.focus();
  await page.keyboard.press('Enter');
  assert.equal(await page.locator('#termDefinition').isVisible(), true);
  await page.keyboard.press('Escape');
  report.glossaryClickOnlyNestedKeyboard = true;
  report.definedTermsStayUnlinkedAndStateIsDefined = true;
  report.matrixExamples = await page.evaluate(() => __sm.CARDS.filter(c => c.uid && c.uid.startsWith('matrix-')).length);
  assert.equal(report.matrixExamples, 8);
  const electron = await showCard(page, 'day9-solids-drude', 'intuition', 'electron-gas');
  assert.equal(await electron.locator('[data-term="electron-gas"]').count(), 0);
  assert((await electron.locator('[data-term="conduction-electron"]').count()) > 0);

  await page.locator('#notchMatch').click();
  await page.locator('#customTiming').check();
  for (const half of [20, 40, 45, 60, 90]) {
    await range(page, 'halfMinutes', half);
    const schedule = await page.evaluate(() => __sm.__match.schedule());
    assert.deepEqual(schedule.ends, half >= 45 ? [25, 45, 70, 90] : [45, 90]);
    assert.equal(await page.locator('#hydrationSettings').isVisible(), half >= 45);
    assert.equal(schedule.rate, 45 / half);
  }
  await range(page, 'halfMinutes', 60);
  await range(page, 'hydrationMinutes', 7);
  await range(page, 'halfTimeMinutes', 3);
  assert.deepEqual(await page.evaluate(() => __sm.__match.schedule().breaks.map(b => b.min)), [7, 3, 7]);
  await page.locator('[data-act="kick"]').click();
  await page.locator('button[data-close]').click();
  const quiz = await showCard(page, 'day9-qm-hilbert', 'mcq');
  await page.waitForFunction(() => __sm.SHEETS[0].cards.find(c => c.type === 'mcq').el.classList.contains('is-revealed'));
  await page.waitForTimeout(400);
  await page.locator('#pauseMatch').click();
  const frozen = await page.evaluate(() => ({
    clock: __sm.__match.minuteNow(),
    timer: __sm.SHEETS[0].cards.find(c => c.type === 'mcq').el._left
  }));
  await page.waitForTimeout(650);
  const later = await page.evaluate(() => ({
    clock: __sm.__match.minuteNow(),
    timer: __sm.SHEETS[0].cards.find(c => c.type === 'mcq').el._left
  }));
  assert.equal(later.clock, frozen.clock);
  assert(Math.abs(later.timer - frozen.timer) < 5);
  await quiz.locator('.omr-option').first().click();
  assert.equal(await page.evaluate(() => !!__sm.S.cards[__sm.SHEETS[0].cards.find(c => c.type === 'mcq').id]?.done), false);
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForFunction(() => window.__sm);
  assert.equal(await page.evaluate(() => __sm.isPaused()), true);
  assert.equal(await page.evaluate(() => __sm.__match.minuteNow()), frozen.clock);
  await page.locator('#pauseMatch').click();
  await page.waitForTimeout(350);
  assert((await page.evaluate(() => __sm.__match.minuteNow())) > frozen.clock);
  report.pauseFreezesClockAndQuizAndSurvivesReload = true;

  async function endStretch(period) {
    await page.evaluate(period => {
      const m = __sm.__match.M(), s = __sm.__match.schedule();
      const from = period ? s.ends[period - 1] : 0;
      m.period = period; m.status = 'play';
      m.pStart = Date.now() - (s.ends[period] - from) / s.rate * 60000 - 100;
      __sm.SHEETS.forEach(sh => { m.topics[sh.id] = 'pre'; });
    }, period);
    await page.waitForFunction(() => __sm.__match.M().status === 'break');
  }
  async function finishBreak() {
    await page.evaluate(() => { __sm.__match.M().breakEnd = Date.now() - 10; });
    await page.waitForFunction(() => __sm.__match.M().status === 'ready');
    await page.locator('#breakResume').click();
  }
  await endStretch(0);
  assert.equal(await page.locator('#breakTitle').innerText(), 'Hydration break');
  assert.match(await page.locator('#nClock').innerText(), /💧/);
  assert.equal(await page.evaluate(() => Math.round(__sm.__match.minuteNow())), 25);
  assert.equal(await page.locator('#breakResume').isDisabled(), true);
  assert.equal(await page.locator('#breakSkip').isVisible(), true);
  await page.screenshot({ path: 'verification/hydration-break.png' });
  await page.locator('#breakSkip').click();
  assert.equal(await page.evaluate(() => __sm.__match.M().period), 1);
  assert.equal(await page.locator('#breakAlert').isVisible(), false);
  assert.equal(await page.evaluate(() => __sm.__match.M().status), 'play');
  assert.equal(await page.evaluate(() => __sm.__match.M().breakEnd), 0);
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForFunction(() => window.__sm);
  assert.equal(await page.evaluate(() => __sm.__match.M().period), 1);
  assert.equal(await page.evaluate(() => __sm.__match.M().status), 'play');
  assert.equal(await page.evaluate(() => __sm.__match.M().events.filter(e => e.reason === 'Hydration break skipped').length), 1);
  await endStretch(1);
  assert.equal(await page.locator('#breakTitle').innerText(), 'Half-time');
  await page.locator('#breakSkip').click();
  assert.equal(await page.evaluate(() => __sm.__match.M().period), 2);
  assert.equal(await page.locator('#breakAlert').isVisible(), false);
  assert.equal(await page.evaluate(() => __sm.__match.M().events.filter(e => e.reason === 'Half-time skipped').length), 1);
  await endStretch(2);
  assert.equal(await page.locator('#breakTitle').innerText(), 'Hydration break');
  assert.equal(await page.evaluate(() => Math.round(__sm.__match.minuteNow())), 70);
  await finishBreak();
  assert.equal(await page.evaluate(() => __sm.__match.M().period), 3);
  report.skipHydrationAndHalfTimeAndPersistedResume = true;
  report.hydrationAtDisplayed25And70 = true;
  report.hydrationAndHalfTimeDurations = [7, 3, 7];

  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  mobile.on('pageerror', e => errors.push(String(e)));
  await load(mobile);
  const hilbert = await showCard(mobile, 'day9-qm-hilbert', 'intuition', 'hilbert-space');
  assert.match(await hilbert.innerText(), /collection of all square-integrable wave functions/);
  await mobile.screenshot({ path: 'verification/plain-words-hilbert-mobile.png' });
  await hilbert.locator('[data-term="inner-product"]').first().tap();
  assert.equal(await mobile.locator('#termDefinition').isVisible(), true);
  const popup = await mobile.locator('#termDefinition').boundingBox();
  assert(popup.x >= 0 && popup.x + popup.width <= 390 && popup.y >= 0 && popup.y + popup.height <= 844);
  await mobile.screenshot({ path: 'verification/linked-definition-mobile.png' });
  await mobile.locator('#termClose').tap();
  await mobile.locator('#notchMatch').tap();
  await mobile.locator('#customTiming').check();
  await range(mobile, 'halfMinutes', 20);
  await mobile.locator('[data-act="kick"]').tap();
  await mobile.locator('button[data-close]').tap();
  await mobile.evaluate(() => { const m = __sm.__match.M(); m.pStart = Date.now() - 25 / __sm.__match.schedule().rate * 60000; });
  await mobile.waitForTimeout(450);
  assert.equal(await mobile.evaluate(() => __sm.__match.M().status), 'play');
  assert.equal(await mobile.locator('#breakAlert').isVisible(), false);
  report.mobileTapAndShortHalfNoHydration = true;
  report.pageErrors = errors;
  assert.deepEqual(errors, []);
  fs.writeFileSync('verification/features-check.json', JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
