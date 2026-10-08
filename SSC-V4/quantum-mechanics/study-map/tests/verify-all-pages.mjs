import "./workspace-test-env.mjs";
import { chromium } from "@playwright/test";
import assert from "node:assert/strict";

const base = process.env.TEST_BASE_URL || "http://127.0.0.1:5185";

const pages = [
  "/checklist_ldc.html",
  "/gate-books.html",
  "/gate_checklist_DA.html",
  "/gate_checklist_MA.html",
  "/index.html",
  "/jam_checklist_MA.html",
  "/jam_checklist_PH.html",
  "/LATEX_12_OFFLINE.html",
  "/LATEX_1.html",
  "/MATERIAL_SCIENCE_12.html",
  "/MATERIAL_SCIENCE_12_OFFLINE.html",
  "/math/index.html",
  "/math/probability/index.html",
  "/math/probability/source-guide.html",
  "/math/probability/study-map/module-1/index.html",
  "/math/probability/study-map/module-2/index.html",
  "/math/probability-test/index.html",
  "/math/probability-test/source-guide.html",
  "/math/real-analysis-bete/index.html",
  "/math/real-analysis/index.html",
  "/math/real-analysis/pyq.html",
  "/math/real-analysis-test/index.html",
  "/pathway.html",
  "/phy/optics/index.html",
  "/phy/optics-test/index.html",
  "/phy/quantum-mechanics/index.html",
  "/phy/quantum-mechanics/pyq.html",
  "/phy/quantum-mechanics/study-map/module-3/index.html",
  "/phy/quantum-mechanics/study-map/module-4/index.html",
  "/phy/quantum-mechanics-test/index.html",
  "/pre/biology/index.html",
  "/pre/biology-test/index.html",
  "/pre/chemistry/index.html",
  "/pre/chemistry-test/index.html",
  "/pre/math-base/index.html",
  "/pre/math-base-test/index.html",
  "/pre/math/index.html",
  "/pre/maths/index.html",
  "/pre/maths-test/index.html",
  "/pre/math-test/index.html",
  "/pre/physics/index.html",
  "/pre/physics-test/index.html",
  "/progress-cusat-ma.html",
  "/progress-cusat-py.html",
  "/progress-jam-ma.html",
  "/progress-jam-phy.html",
  "/progress-ldc.html",
  "/PYTHON_12.html",
  "/PYTHON_12_OFFLINE.html",
  "/QM_1.html",
  "/SOLID_STATE_1.html",
  "/tracker.html",
];

const browser = await chromium.launch({
  executablePath: process.env.STUDY_MAP_CHROME,
  args: ["--enable-unsafe-swiftshader"],
});

try {
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
  });

  let passCount = 0;
  for (const pPath of pages) {
    const page = await context.newPage();
    const pageErrors = [];
    page.on("pageerror", (e) => pageErrors.push(e.message));

    const response = await page.goto(base + pPath, { waitUntil: "domcontentloaded", timeout: 15000 });
    assert.equal(response.status(), 200, `Expected 200 for ${pPath}, got ${response.status()}`);

    const title = await page.title();
    const bodyLength = await page.evaluate(() => document.body.innerHTML.length);
    assert(bodyLength > 100, `Body should not be empty for ${pPath}`);

    // Allow known deprecation / benign warnings but no fatal uncaught exceptions
    const fatalErrors = pageErrors.filter(
      (msg) => !msg.includes("favicon") && !msg.includes("ResizeObserver")
    );
    assert.deepEqual(fatalErrors, [], `Fatal JS errors on ${pPath}: ${fatalErrors.join("; ")}`);

    console.log(`[PASS] ${pPath} (title: "${title}", body: ${bodyLength} bytes)`);
    passCount++;
    await page.close();
  }

  console.log(`\nAll ${passCount}/${pages.length} pages verified successfully!`);
} finally {
  await browser.close();
}
