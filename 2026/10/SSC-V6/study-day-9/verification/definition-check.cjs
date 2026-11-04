const { chromium } = require('/home/ihjas/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert = require('node:assert/strict'), fs = require('node:fs');
const url = 'http://127.0.0.1:8769/study-physics-day-9.html';
(async () => {
  const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', headless: true, args: ['--no-sandbox'] });
  try {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, reducedMotion: 'reduce' });
    const page = await context.newPage(), errors = [];
    page.on('pageerror', e => errors.push(String(e)));
    async function load() { await page.goto(url, { waitUntil: 'networkidle' }); await page.waitForFunction(() => window.__sm); }
    async function show(id) {
      await page.evaluate(id => {
        const c = __sm.CARDS.find(c => c.id === id), sh = c.sheet;
        sh.el.closest('.group').classList.remove('is-stacked');
        if (!sh.el.classList.contains('is-open')) sh.el.querySelector('.cover').click();
        __sm.glideTo(c.el, 100);
      }, id);
      await page.waitForFunction(id => __sm.centred()?.dataset.card === id, id);
      await page.waitForTimeout(300);
      return page.locator('[data-card="' + id + '"]');
    }
    async function flip(card) {
      if (!await card.evaluate(el => el.classList.contains('is-flipped'))) await card.locator('[data-def="flip"]').tap();
      assert.equal(await card.locator('.definition-back').evaluate(el => el.inert), false);
    }
    await load();
    const id = 'day9-qm-hilbert-0', next = 'day9-qm-hilbert-intro-hilbert-space';
    let card = await show(id);
    assert.equal(await page.locator('.definition-front').count(), 22);
    assert.equal(await page.locator('.is-locked').count(), 0);
    assert.equal(await card.locator('.definition-back').evaluate(el => el.inert), true);
    await flip(card);
    await card.locator('.def-answer').tap();
    await page.keyboard.type('I can type my definition before starting a match.');
    assert.match(await card.locator('.def-answer').inputValue(), /^I can type/);
    assert.equal(await card.evaluate(el => el.classList.contains('is-flipped')), true);
    await card.locator('[data-def="front"]').tap();
    await card.locator('.definition-front .card-title').tap();
    assert.equal(await card.evaluate(el => el.classList.contains('is-flipped')), true);
    await page.evaluate(() => { localStorage.removeItem(__sm.KEY); });
    await load(); await page.evaluate(() => __sm.__match.kickoff());
    assert.equal(await page.evaluate(() => __sm.SHEETS.every(sh => !__sm.cardLocked(sh.cards[0]) && sh.cards.slice(1).every(__sm.cardLocked))), true);
    await show('day9-qm-hilbert-intro-quantum-state');
    await show('day9-qm-hilbert-intro-vector-space');
    card = await show(id);
    const locked = page.locator('[data-card="' + next + '"]');
    assert.equal(await locked.isVisible(), true);
    assert.equal(await locked.evaluate(el => el.getBoundingClientRect().width > 250 && el.inert && parseFloat(getComputedStyle(el).opacity) < 1), true);
    const left = await page.evaluate(() => __sm.$('shelf').scrollLeft);
    await page.evaluate(() => __sm.step(-1)); await page.waitForTimeout(400);
    assert(Math.abs((await page.evaluate(() => __sm.$('shelf').scrollLeft)) - left) < 4);
    await page.evaluate(() => { __sm.$('shelf').scrollLeft = 0; }); await page.waitForTimeout(1000);
    assert(Math.abs((await page.evaluate(() => __sm.$('shelf').scrollLeft)) - left) < 4);
    await page.evaluate(() => __sm.step(1));
    await page.waitForFunction(id => __sm.centred()?.dataset.card === id, next);
    await page.evaluate(() => __sm.step(1)); await page.waitForTimeout(450);
    assert.equal(await page.evaluate(() => __sm.centred()?.dataset.card), next);
    await page.evaluate(() => { __sm.$('shelf').scrollLeft += 1500; }); await page.waitForTimeout(1000);
    assert((await page.evaluate(() => __sm.$('shelf').scrollLeft - __sm.shelfBounds().max)) < 4);
    await page.screenshot({ path: 'verification/locked-boundary-mobile.png' });
    await page.evaluate(id => __sm.flipDefinition(__sm.CARDS.find(c => c.id === id)), 'day9-qm-hilbert-1');
    assert.equal(await page.locator('[data-card="day9-qm-hilbert-1"]').evaluate(el => el.classList.contains('is-flipped')), false);
    await show(id); await flip(card);
    assert.equal(await card.locator('.def-answer').isEditable(), true);
    await card.locator('.def-answer').fill('one two three four five six seven');
    await card.locator('[data-def="check"]').tap();
    assert.match(await card.locator('.def-status').innerText(), /at least 8 words \(7 so far\)/);
    await card.locator('.def-answer').fill('one two three four five six seven eight');
    await card.locator('[data-def="check"]').tap();
    const expected = await page.evaluate(id => __sm.CARDS.find(c => c.id === id).body, id);
    assert.equal(await card.locator('.verify-text').innerText(), expected);
    assert.equal(await locked.evaluate(el => el.classList.contains('is-locked')), true);
    await card.locator('[data-def="retry"]').tap();
    assert.equal(await card.locator('.def-answer').inputValue(), '');
    assert.equal(await card.locator('.def-reveal').isVisible(), false);
    const draft = 'A vector space is a collection of vectors with addition and scaling.';
    await card.locator('.def-answer').fill(draft); await card.locator('[data-def="check"]').tap();
    await page.reload({ waitUntil: 'networkidle' }); await page.waitForFunction(() => window.__sm);
    card = await show(id); await flip(card);
    assert.equal(await card.locator('.def-answer').inputValue(), draft);
    assert.equal(await card.locator('.verify-text').innerText(), expected);
    await page.locator('#pauseMatch').tap();
    assert.equal(await card.locator('.def-answer').isDisabled(), true);
    await page.locator('#pauseMatch').tap();
    assert.equal(await card.locator('.def-answer').isEditable(), true);
    await page.screenshot({ path: 'verification/definition-flip-mobile.png' });
    const shots = await page.evaluate(() => __sm.__match.M().shots);
    await card.locator('.def-confirm').tap();
    assert.equal(await locked.evaluate(el => el.classList.contains('is-locked')), false);
    assert.equal(await page.evaluate(() => __sm.__match.M().shots), shots);
    await page.evaluate(() => __sm.step(-1)); await page.waitForTimeout(650);
    assert.notEqual(await page.evaluate(() => __sm.centred()?.dataset.card), id);
    assert.equal(await card.evaluate(el => el.classList.contains('is-flipped')), false);
    await show(next);
    card = await show('day9-qm-hilbert-1'); await flip(card);
    await card.locator('[data-def="skip"]').tap();
    await card.locator('[data-def="again"]').tap();
    assert.equal(await card.locator('.def-answer').isEditable(), true);
    await card.locator('.def-answer').fill('I can practise typing again while keeping my earlier progress.');
    assert.equal(await page.evaluate(() => __sm.isDone(__sm.CARDS.find(c => c.id === 'day9-qm-hilbert-1'))), true);
    await page.screenshot({ path: 'verification/definition-touch-typing.png' });
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    await page.evaluate(() => { __sm.__match.M().status = 'ft'; __sm.renderMatch(); });
    assert.equal(await page.locator('.is-locked').count(), 0);
    assert.equal(await page.evaluate(() => __sm.shelfBounds().min), 0);
    assert.equal(await page.evaluate(() => __sm.shelfBounds().max), Infinity);
    await page.evaluate(() => { localStorage.setItem(__sm.KEY, JSON.stringify({ cards: { 'day9-qm-hilbert-0': { seen: 1 } } })); });
    await load(); card = await show(id); await flip(card);
    assert.equal(await card.locator('.def-answer').isEditable(), true);
    await card.locator('.def-answer').fill('My old reading progress no longer prevents typing an answer.');
    assert.equal(await page.evaluate(id => __sm.cst(__sm.CARDS.find(c => c.id === id)).definition.method, id), 'existing');
    assert.deepEqual(errors, []);
    const report = { definitionCards: 22, frontConceptBackRecall: true, surfaceTapAndButtonsFlip: true,
      touchTypingBeforeAndDuringMatch: true, lockedCardsVisibleAndDimmed: true,
      scrollCannotPassFirstLockedCard: true, lockedCardsCannotFlip: true,
      leftBlockedUntilUnlock: true, leftAllowedAfterUnlock: true, offCentreCardsFlipFront: true,
      eightWordThresholdSameCardReferenceRetrySkip: true, practiseAgainKeepsProgress: true,
      oldProgressDoesNotBlockTyping: true, draftsAndReferenceSurviveReload: true,
      pauseBlocksActions: true, outsideMatchUnrestricted: true,
      noQuizShotsForRecall: true, mobileDocumentOverflow: false, pageErrors: errors };
    fs.writeFileSync('verification/definition-check.json', JSON.stringify(report, null, 2) + '\n');
    console.log(JSON.stringify(report, null, 2));
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; });
