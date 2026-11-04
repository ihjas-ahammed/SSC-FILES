const { chromium } = require('/home/ihjas/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert = require('node:assert/strict'), fs = require('node:fs');
(async () => {
  const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', headless: true, args: ['--no-sandbox'] });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    await page.goto('http://127.0.0.1:8769/study-physics-day-9.html', { waitUntil: 'networkidle' });
    await page.waitForFunction(() => window.__sm);
    await page.evaluate(() => {
      const sh = __sm.SHEETS[0];
      sh.cards.slice(0, 2).forEach(c => { __sm.cst(c).seen = 1; });
      __sm.__match.kickoff();
      sh.el.closest('.group').classList.remove('is-stacked');
      sh.el.querySelector('.cover').click();
      __sm.glideTo(sh.cards[2].el, 100);
    });
    await page.waitForFunction(() => __sm.centred()?.dataset.card === 'day9-qm-hilbert-0');
    const card = page.locator('[data-card="day9-qm-hilbert-0"]');
    await card.locator('[data-def="flip"]').click();
    await page.waitForTimeout(800);
    assert(await card.locator('.definition-inner').evaluate(el => getComputedStyle(el).transform.startsWith('matrix3d(-1')));
    await card.locator('.def-answer').fill('A collection of vectors with rules for adding and scaling.');
    await page.keyboard.press('ArrowLeft');
    assert.equal(await page.evaluate(() => __sm.centred()?.dataset.card), 'day9-qm-hilbert-0');
    await page.screenshot({ path: 'verification/definition-flip-desktop.png' });
    await page.mouse.move(1250, 500);
    const start = await page.evaluate(() => __sm.$('shelf').scrollLeft);
    await page.mouse.wheel(-500, 0); await page.waitForTimeout(550);
    assert(Math.abs((await page.evaluate(() => __sm.$('shelf').scrollLeft)) - start) < 4);
    await page.mouse.wheel(500, 0);
    await page.waitForFunction(() => __sm.centred()?.dataset.card === 'day9-qm-hilbert-intro-hilbert-space');
    await page.waitForTimeout(550);
    await page.mouse.wheel(800, 0); await page.waitForTimeout(700);
    assert((await page.evaluate(() => __sm.$('shelf').scrollLeft - __sm.shelfBounds().max)) < 4);
    // Return to the unfinished definition, confirm, then previous-card navigation works.
    await page.mouse.wheel(-500, 0);
    await page.waitForFunction(() => __sm.centred()?.dataset.card === 'day9-qm-hilbert-0');
    await page.waitForTimeout(550);
    if (!await card.evaluate(el => el.classList.contains('is-flipped'))) await card.locator('[data-def="flip"]').click();
    await page.waitForTimeout(800);
    await card.locator('[data-def="check"]').click();
    await card.locator('[data-def="confirm"]').click();
    await page.mouse.wheel(-500, 0);
    await page.waitForFunction(() => __sm.centred()?.dataset.card === 'day9-qm-hilbert-intro-vector-space');
    const report = { animated3DFlip: true, editableTextWithCursorArrows: true,
      wheelCannotMoveLeftUntilUnlock: true, wheelStopsAtVisibleLock: true,
      wheelReleasesAfterIdle: true, wheelMovesLeftAfterUnlock: true };
    fs.writeFileSync('verification/desktop-navigation-check.json', JSON.stringify(report, null, 2) + '\n');
    console.log(JSON.stringify(report, null, 2));
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; });
