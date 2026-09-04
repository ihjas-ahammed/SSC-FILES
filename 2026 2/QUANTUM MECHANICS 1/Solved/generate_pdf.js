const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

async function buildPDF() {
  const workspaceDir = '/home/ihjas/Documents/GitHub/SSC-FILES/2026 2/QUANTUM MECHANICS 1/Solved';
  const htmlPath = path.join(workspaceDir, 'QM_Module2_Questions.html');
  const pdfPath = path.join(workspaceDir, 'QM_Module2_Questions.pdf');

  console.log('Launching headless Chrome via puppeteer-core...');
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--disable-background-networking',
      '--disable-default-apps',
      '--disable-extensions',
      '--disable-sync',
      '--no-first-run'
    ]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 1600, deviceScaleFactor: 2 });

  console.log(`Navigating to file://${htmlPath}...`);
  await page.goto(`file://${htmlPath}`, {
    waitUntil: ['load', 'networkidle0'],
    timeout: 60000
  });

  console.log('Waiting for KaTeX math equations to completely render...');
  await page.waitForFunction(() => {
    const mathCount = document.querySelectorAll('.katex').length;
    return mathCount > 100;
  }, { timeout: 30000 });

  // Additional buffer for all SVG layouts and web fonts
  await new Promise(r => setTimeout(r, 1000));

  const totalKatex = await page.evaluate(() => document.querySelectorAll('.katex').length);
  const totalCards = await page.evaluate(() => document.querySelectorAll('.item-card').length);
  const totalSVGs = await page.evaluate(() => document.querySelectorAll('svg.diagram-svg').length);

  console.log(`Rendered elements confirmed: ${totalCards} Question Cards, ${totalKatex} KaTeX Math Elements, ${totalSVGs} Vector SVGs.`);

  console.log(`Printing to high-resolution A4 PDF: ${pdfPath}...`);
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: false,
    margin: {
      top: '18mm',
      bottom: '18mm',
      left: '14mm',
      right: '14mm'
    },
    displayHeaderFooter: true,
    headerTemplate: `
      <div style="font-size: 8.5px; font-family: system-ui, -apple-system, sans-serif; color: #64748b; width: 100%; padding-left: 14mm; padding-right: 14mm; display: flex; justify-content: space-between; border-bottom: 0.5px solid #e2e8f0; padding-bottom: 2px;">
        <span><strong>Quantum Mechanics Compendium</strong> — Chapter 2: The TISE</span>
        <span>D. J. Griffiths Problems & Solutions</span>
      </div>
    `,
    footerTemplate: `
      <div style="font-size: 8.5px; font-family: system-ui, -apple-system, sans-serif; color: #64748b; width: 100%; padding-left: 14mm; padding-right: 14mm; display: flex; justify-content: space-between; border-top: 0.5px solid #e2e8f0; padding-top: 2px;">
        <span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span>
        <span>Complete Solved Compendium</span>
      </div>
    `
  });

  await browser.close();

  const stats = fs.statSync(pdfPath);
  console.log(`PDF build completed successfully! Size: ${(stats.size / 1024 / 1024).toFixed(2)} MB (${stats.size} bytes).`);
}

buildPDF().catch(err => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});
