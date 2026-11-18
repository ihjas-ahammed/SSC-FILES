### Important Gaps & Limitations

Before providing the output, please note what cannot be performed in this environment:
1. **External Automation & CLI Steps ("Night Duty")**: I do not have browser access, internet access, or shell/filesystem tools. Therefore, I cannot open the GATE study plan site, download the notes ZIP, execute the `aistudio` command (with Hydrogen/Flash fallback), or run a converter to generate PDF files.
2. **Scope of the Attached 29-Page PDF**: The uploaded PDF contains 29 dense pages:
   - **Page 1**: Chapter 5 solutions (Q34–42)
   - **Pages 2–9 (top)**: Chapter 9 (Profit and Loss) theory, 5 basic formulae, 13 shortcut methods, and 25 illustrations
   - **Pages 9–26**: Exercise-1 (42 questions) and Exercise-2 (192 questions)
   - **Pages 27–28**: Answer keys for Exercises 1 & 2, plus explanatory answers for Exercise-1 (Q1–11)
   - **Page 29**: Chapter 17 (Simple Interest) introduction, 2 basic formulae, and 2 illustrations

Outputting all 234+ exercise problems, answer keys, theory, and illustrations in one message with full HTML/LaTeX/SVG would exceed single-response length limits. Below is the complete, overflow-safe HTML textbook document containing **Part 1**:
- **Page 1** (Chapter 5: Q34–42)
- **Pages 2–9** (Chapter 9: Full Theory, Basic Formulae 01–05, Shortcut Methods 01–13, and Illustrations 1–25)
- **Page 29** (Chapter 17: Simple Interest Intro, Formulae 01–02, and Illustrations 1–2)

All text is rewritten in **ASD-STE100 (Simplified Technical English)** style (short, direct sentences; active voice; consistent terms) while keeping every mathematical value, formula, and condition intact. It includes a **Single-Column / Two-Column layout toggle** and print CSS designed to prevent overflow when exporting to PDF.

*(If you want the remaining pages—Exercise-1 Q1–42 with solutions, and Exercise-2 Q1–192 with answer keys—ask for Part 2, Part 3, etc., and I will append them in the same format.)*

---

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Quantitative Aptitude Notes (ASD-STE100) — Part 1</title>

  <!-- MathJax v3 Configuration -->
  <script>
    window.MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']]
      },
      options: {
        skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre']
      },
      chtml: {
        scale: 0.95,
        matchFontHeight: true
      }
    };
  </script>
  <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script>

  <style>
    :root {
      --primary: #1e293b;
      --accent: #0f766e;
      --accent-light: #f0fdfa;
      --border: #cbd5e1;
      --bg-muted: #f8fafc;
      --note-bg: #fffbeb;
      --note-border: #d97706;
      --text: #0f172a;
    }

    *, *::before, *::after {
      box-sizing: border-box;
    }

    html, body {
      margin: 0;
      padding: 0;
      font-family: "Georgia", "Times New Roman", serif;
      font-size: 10.5pt;
      line-height: 1.5;
      color: var(--text);
      background: #ffffff;
      overflow-wrap: break-word;
      word-wrap: break-word;
    }

    /* Toolbar for switching Single / Two Column before PDF export */
    .toolbar {
      position: sticky;
      top: 0;
      z-index: 100;
      background: var(--primary);
      color: #fff;
      padding: 10px 18px;
      display: flex;
      gap: 12px;
      align-items: center;
      justify-content: space-between;
      font-family: system-ui, -apple-system, sans-serif;
      font-size: 13px;
    }

    .toolbar-buttons {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    .toolbar button {
      background: #334155;
      color: #fff;
      border: 1px solid #64748b;
      padding: 6px 12px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 12px;
    }

    .toolbar button.active {
      background: var(--accent);
      border-color: #14b8a6;
      font-weight: 600;
    }

    .page-container {
      max-width: 960px;
      margin: 0 auto;
      padding: 24px 28px;
    }

    /* Layout Modes */
    .layout-two-col .chapter-body {
      column-count: 2;
      column-gap: 24px;
      column-rule: 1px solid #e2e8f0;
    }

    .layout-single-col .chapter-body {
      column-count: 1;
    }

    /* Textbook Chapter Banner */
    .chapter-header {
      display: flex;
      align-items: center;
      gap: 16px;
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
      color: #ffffff;
      padding: 16px 20px;
      border-left: 8px solid var(--accent);
      margin: 24px 0 18px 0;
      border-radius: 4px;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .chapter-num {
      font-family: system-ui, sans-serif;
      font-size: 26pt;
      font-weight: 800;
      line-height: 1;
      padding-right: 16px;
      border-right: 2px solid rgba(255, 255, 255, 0.3);
    }

    .chapter-title {
      font-family: system-ui, sans-serif;
      font-size: 17pt;
      font-weight: 700;
      margin: 0;
    }

    .chapter-subtitle {
      font-family: system-ui, sans-serif;
      font-size: 9pt;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #99f6e4;
      margin-bottom: 2px;
    }

    .section-bar {
      background: #e2e8f0;
      color: var(--primary);
      font-family: system-ui, sans-serif;
      font-weight: 700;
      font-size: 11pt;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      padding: 6px 12px;
      border-left: 4px solid var(--primary);
      margin: 18px 0 12px 0;
      column-span: all;
      break-after: avoid;
    }

    h3 {
      font-family: system-ui, sans-serif;
      font-size: 11pt;
      color: var(--accent);
      margin: 12px 0 6px 0;
      border-bottom: 1px solid var(--border);
      padding-bottom: 2px;
      break-after: avoid;
    }

    p {
      margin: 0 0 8px 0;
    }

    /* Prevent Overflow in Cards, Math, and SVGs */
    .card, .formula-box, .illustration, .note-box, .problem-block {
      break-inside: avoid;
      page-break-inside: avoid;
      margin-bottom: 12px;
      max-width: 100%;
      overflow: hidden;
    }

    .formula-box {
      background: var(--accent-light);
      border: 1px solid #99f6e4;
      border-left: 4px solid var(--accent);
      padding: 10px 12px;
      border-radius: 4px;
    }

    .formula-badge {
      display: inline-block;
      background: var(--primary);
      color: #fff;
      font-family: system-ui, sans-serif;
      font-size: 9pt;
      font-weight: 700;
      padding: 2px 7px;
      border-radius: 3px;
      margin-right: 6px;
    }

    .illustration {
      background: var(--bg-muted);
      border: 1px solid var(--border);
      padding: 10px 12px;
      border-radius: 4px;
    }

    .illustration-title {
      font-family: system-ui, sans-serif;
      font-weight: 700;
      color: var(--primary);
    }

    .note-box {
      background: var(--note-bg);
      border: 1px solid #fde68a;
      border-left: 4px solid var(--note-border);
      padding: 9px 12px;
      border-radius: 4px;
      font-size: 9.8pt;
    }

    .problem-block {
      border-bottom: 1px dashed var(--border);
      padding-bottom: 8px;
    }

    /* Responsive MathJax & SVG */
    mjx-container {
      max-width: 100% !important;
      overflow-x: auto;
      overflow-y: hidden;
      padding: 2px 0;
    }

    svg {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 8px auto;
    }

    .diagram-caption {
      text-align: center;
      font-family: system-ui, sans-serif;
      font-size: 8.5pt;
      color: #475569;
      margin-top: 2px;
    }

    @media print {
      .toolbar {
        display: none !important;
      }
      .page-container {
        max-width: 100%;
        padding: 0;
        margin: 0;
      }
      @page {
        size: A4;
        margin: 14mm 12mm;
      }
      mjx-container {
        overflow-x: visible !important;
      }
    }
  </style>
</head>
<body class="layout-single-col">

  <div class="toolbar">
    <span><strong>Textbook Notes (ASD-STE100)</strong> — Overflow-Safe PDF Layout</span>
    <div class="toolbar-buttons">
      <button id="btn-single" class="active" onclick="setLayout('single')">Single Column</button>
      <button id="btn-two" onclick="setLayout('two')">Two Column</button>
      <button onclick="window.print()">Print / Save PDF</button>
    </div>
  </div>

  <main class="page-container">

    <!-- ========================================================= -->
    <!-- CHAPTER 5 SOLUTIONS (PDF PAGE 1)                          -->
    <!-- ========================================================= -->
    <header class="chapter-header">
      <div class="chapter-num">05</div>
      <div>
        <div class="chapter-subtitle">Chapter 5 — Solutions (Page 5.24)</div>
        <h1 class="chapter-title">Percentage &amp; Net Change Solutions (Q34–Q42)</h1>
      </div>
    </header>

    <section class="chapter-body">
      <div class="problem-block">
        <p><strong>34. (a)</strong> Here, $x = 20$ and $y = 10$.</p>
        <p>The first number as a percentage of the second number is:</p>
        <p>$$\left(\frac{100 + x}{100 + y} \times 100\right)\% = \left(\frac{100 + 20}{100 + 10} \times 100\right)\% = 109\frac{1}{11}\%$$</p>
        <p>Therefore, the first number is $9\frac{1}{11}\%$ more than the second number.</p>
      </div>

      <div class="problem-block">
        <p><strong>35. (b)</strong> The reduction in consumption is:</p>
        <p>$$\left(\frac{P}{100 + P} \times 100\right)\% = \left(\frac{15}{100 + 15} \times 100\right)\% = 13\frac{1}{23}\%$$</p>
        <div class="note-box">
          <strong>Alternative Solution (b):</strong><br/>
          Price increases by $15\% \Rightarrow \frac{15}{100} = \frac{3}{20}$, so $\frac{a}{b} = \frac{3}{20}$.<br/>
          Consumption decreases by:
          $$\left(\frac{a}{a + b} \times 100\right)\% = \left(\frac{3}{23} \times 100\right)\% = 13\frac{1}{23}\%$$
        </div>
      </div>

      <div class="problem-block">
        <p><strong>36. (c)</strong> The increase in consumption is:</p>
        <p>$$\left(\frac{P}{100 - P} \times 100\right)\% = \left(\frac{10}{100 - 10} \times 100\right)\% = 11\frac{1}{9}\%$$</p>
        <div class="note-box">
          <strong>Alternative Solution (c):</strong><br/>
          Price decreases by $10\% = \frac{1}{10}$, so $\frac{a}{b} = \frac{1}{10}$.<br/>
          Consumption increases by (using $|a - b|$ in the PDF as $b - a = 9$):
          $$\left(\frac{a}{|a - b|} \times 100\right)\% = \left(\frac{1}{9} \times 100\right)\% = 11\frac{1}{9}\%$$
        </div>
      </div>

      <div class="problem-block">
        <p><strong>37. (d)</strong> Here, $x = 20$ and $y = -20$.</p>
        <p>The net percentage change in value is:</p>
        <p>$$\left(x + y + \frac{xy}{100}\right)\% = \left(20 - 20 - \frac{20 \times 20}{100}\right)\% = -4\%$$</p>
        <p>Because the sign is negative, the value decreases by $4\%$.</p>
      </div>

      <div class="problem-block">
        <p><strong>38. (b)</strong> Here, $x = -50$ and $y = 50$.</p>
        <p>The net percentage change in wages is:</p>
        <p>$$\left(x + y + \frac{xy}{100}\right)\% = \left(-50 + 50 - \frac{50 \times 50}{100}\right)\% = -25\%$$</p>
        <p>Because the sign is negative, there is a loss of $25\%$.</p>
        <div class="note-box">
          <strong>Alternative Solution (b):</strong><br/>
          If a value increases by $x\%$ and then decreases by $x\%$, a loss always occurs:
          $$\text{Loss} = \left(\frac{x}{10}\right)^2\% = \left(\frac{50}{10}\right)^2\% = 25\% \downarrow$$
        </div>
      </div>

      <div class="problem-block">
        <p><strong>39. (b)</strong> Here, $x = -20$ and $y = -25$.</p>
        <p>The net percentage change in population is:</p>
        <p>$$\left(x + y + \frac{xy}{100}\right)\% = \left(-20 - 25 + \frac{20 \times 25}{100}\right)\% = -40\%$$</p>
        <p>Because the sign is negative, the population decreases by $40\%$ after two years.</p>
      </div>

      <div class="problem-block">
        <p><strong>40. (b)</strong> The equivalent single discount for two successive discounts of $20\%$ and $20\%$ is:</p>
        <p>$$\left(x + y + \frac{xy}{100}\right)\% = \left(-20 - 20 + \frac{20 \times 20}{100}\right)\% = -36\%$$</p>
        <p>Given: $36\% - 35\% = ₹22$. Therefore, bill amount $= 22 \times 100 = ₹2200$.</p>
      </div>

      <div class="problem-block">
        <p><strong>41. (a)</strong> Here, $x = 25$ and $y = -12$.</p>
        <p>The net percentage change in original price is:</p>
        <p>$$\left(x + y + \frac{xy}{100}\right)\% = \left(25 - 12 - \frac{25 \times 12}{100}\right)\% = 10\%$$</p>
        <p>Because the sign is positive, there is a profit of $10\%$.</p>
      </div>

      <div class="problem-block">
        <p><strong>42. (c)</strong> The equivalent single discount for two successive discounts of $20\%$ and $10\%$ is:</p>
        <p>$$\left(x + y + \frac{xy}{100}\right)\% = \left(-20 - 10 + \frac{20 \times 10}{100}\right)\% = -28\% \text{ (or } 28\% \text{ discount)}$$</p>
      </div>
    </section>

    <!-- ========================================================= -->
    <!-- CHAPTER 9: PROFIT AND LOSS (PDF PAGES 2-9)                -->
    <!-- ========================================================= -->
    <header class="chapter-header">
      <div class="chapter-num">09</div>
      <div>
        <div class="chapter-subtitle">Chapter 9 — Theory &amp; Illustrations (Pages 9.1–9.8)</div>
        <h1 class="chapter-title">Profit and Loss</h1>
      </div>
    </header>

    <section class="chapter-body">
      <div class="section-bar">Introduction</div>

      <p>Transactions occur in daily life. When a person buys and sells an item, the person usually makes a gain or a loss. The goal of a business is to earn a profit.</p>

      <!-- Overview SVG Diagram -->
      <div class="card">
        <svg viewBox="0 0 540 135" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cost Price, Selling Price, Profit and Loss relationship">
          <rect x="10" y="40" width="120" height="44" rx="6" fill="#f0fdfa" stroke="#0f766e" stroke-width="2"/>
          <text x="70" y="60" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a">Cost Price (C.P.)</text>
          <text x="70" y="75" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#475569">Purchase Price</text>

          <line x1="130" y1="52" x2="210" y2="25" stroke="#16a34a" stroke-width="2"/>
          <polygon points="210,25 201,24 204,32" fill="#16a34a"/>
          <text x="165" y="28" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#15803d">S.P. &gt; C.P.</text>

          <rect x="215" y="6" width="140" height="40" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.8"/>
          <text x="285" y="23" text-anchor="middle" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#14532d">Profit (Gain)</text>
          <text x="285" y="38" text-anchor="middle" font-family="sans-serif" font-size="9.5" fill="#166534">Profit = S.P. − C.P.</text>

          <line x1="130" y1="72" x2="210" y2="100" stroke="#dc2626" stroke-width="2"/>
          <polygon points="210,100 204,93 201,101" fill="#dc2626"/>
          <text x="165" y="103" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#b91c1c">C.P. &gt; S.P.</text>

          <rect x="215" y="82" width="140" height="40" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="1.8"/>
          <text x="285" y="99" text-anchor="middle" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#7f1d1d">Loss</text>
          <text x="285" y="114" text-anchor="middle" font-family="sans-serif" font-size="9.5" fill="#991b1b">Loss = C.P. − S.P.</text>

          <line x1="355" y1="26" x2="405" y2="52" stroke="#64748b" stroke-width="1.5"/>
          <line x1="355" y1="102" x2="405" y2="72" stroke="#64748b" stroke-width="1.5"/>

          <rect x="405" y="40" width="125" height="44" rx="6" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
          <text x="467" y="60" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a">Selling Price (S.P.)</text>
          <text x="467" y="75" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#475569">Sale Price</text>
        </svg>
        <div class="diagram-caption">Figure 9.1: Relationship between Cost Price, Selling Price, Profit, and Loss</div>
      </div>

      <ul>
        <li><strong>Cost Price (C.P.):</strong> The price at which a person buys an article.</li>
        <li><strong>Selling Price (S.P.):</strong> The price at which a person sells an article.</li>
        <li><strong>Profit or Gain:</strong> If S.P. is more than C.P., a gain or profit occurs: $\text{Profit} = \text{S.P.} - \text{C.P.}$</li>
        <li><strong>Loss:</strong> If C.P. is more than S.P., a loss occurs: $\text{Loss} = \text{C.P.} - \text{S.P.}$</li>
      </ul>

      <div class="note-box">
        <strong>Note:</strong> Always calculate profit and loss with respect to the cost price (C.P.) of the item.
      </div>

      <div class="illustration">
        <p><span class="illustration-title">Illustration 1:</span> (i) If $\text{C.P.} = ₹235$ and $\text{S.P.} = ₹240$, find the profit. (ii) If $\text{C.P.} = ₹116$ and $\text{S.P.} = ₹107$, find the loss.</p>
        <p><strong>Solution:</strong><br/>
        (i) $\text{Profit} = \text{S.P.} - \text{C.P.} = 240 - 235 = ₹5$.<br/>
        (ii) $\text{Loss} = \text{C.P.} - \text{S.P.} = 116 - 107 = ₹9$.</p>
      </div>

      <div class="section-bar">Basic Formulae</div>

      <div class="formula-box">
        <span class="formula-badge">01</span> <strong>Gain per cent and Loss per cent</strong> (Gain or Loss on ₹100)
        $$\text{Gain}\% = \frac{\text{Gain} \times 100}{\text{C.P.}}, \qquad \text{Loss}\% = \frac{\text{Loss} \times 100}{\text{C.P.}}$$
      </div>

      <div class="illustration">
        <p><span class="illustration-title">Illustration 2:</span> The cost price of a shirt is ₹200 and the selling price is ₹250. Calculate the profit percentage.</p>
        <p><strong>Solution:</strong> $\text{C.P.} = ₹200$, $\text{S.P.} = ₹250$.<br/>
        $\text{Profit} = \text{S.P.} - \text{C.P.} = 250 - 200 = ₹50$.<br/>
        $\text{Profit}\% = \frac{50 \times 100}{200} = 25\%$.</p>
      </div>

      <div class="illustration">
        <p><span class="illustration-title">Illustration 3:</span> Anu bought a necklace for ₹750 and sold it for ₹675. Find her loss percentage.</p>
        <p><strong>Solution:</strong> $\text{C.P.} = ₹750$, $\text{S.P.} = ₹675$.<br/>
        $\text{Loss} = \text{C.P.} - \text{S.P.} = 750 - 675 = ₹75$.<br/>
        $\text{Loss}\% = \frac{75 \times 100}{750} = 10\%$.</p>
      </div>

      <div class="formula-box">
        <span class="formula-badge">02</span> <strong>When Selling Price and Gain% are given:</strong>
        $$\text{C.P.} = \left(\frac{100}{100 + \text{Gain}\%}\right) \times \text{S.P.}$$
      </div>

      <div class="formula-box">
        <span class="formula-badge">03</span> <strong>When Cost Price and Gain% are given:</strong>
        $$\text{S.P.} = \left(\frac{100 + \text{Gain}\%}{100}\right) \times \text{C.P.}$$
        <small><strong>Derivation:</strong> $\text{Profit}\% = \frac{(\text{S.P.} - \text{C.P.}) \times 100}{\text{C.P.}} \Rightarrow \frac{\text{Profit}\%}{100} = \frac{\text{S.P.}}{\text{C.P.}} - 1 \Rightarrow \frac{\text{S.P.}}{\text{C.P.}} = \frac{100 + \text{Profit}\%}{100}$.</small>
      </div>

      <div class="formula-box">
        <span class="formula-badge">04</span> <strong>When Cost Price and Loss% are given:</strong>
        $$\text{S.P.} = \left(\frac{100 - \text{Loss}\%}{100}\right) \times \text{C.P.}$$
      </div>

      <div class="formula-box">
        <span class="formula-badge">05</span> <strong>When Selling Price and Loss% are given:</strong>
        $$\text{C.P.} = \left(\frac{100}{100 - \text{Loss}\%}\right) \times \text{S.P.}$$
        <small><strong>Derivation:</strong> $\text{Loss}\% = \frac{(\text{C.P.} - \text{S.P.}) \times 100}{\text{C.P.}} \Rightarrow \frac{\text{Loss}\%}{100} = 1 - \frac{\text{S.P.}}{\text{C.P.}} \Rightarrow \frac{\text{S.P.}}{\text{C.P.}} = \frac{100 - \text{Loss}\%}{100}$.</small>
      </div>

      <div class="illustration">
        <p><span class="illustration-title">Illustration 4:</span> Mr Sharma buys a cooler for ₹4500. For how much should he sell it to gain $8\%$?</p>
        <p><strong>Solution:</strong> $\text{C.P.} = ₹4500$, $\text{Gain}\% = 8\%$.<br/>
        $\text{S.P.} = \left(\frac{100 + 8}{100}\right) \times 4500 = \frac{108}{100} \times 4500 = ₹4860$.</p>
      </div>

      <div class="illustration">
        <p><span class="illustration-title">Illustration 5:</span> Pankaj sells a fridge for ₹7200 and loses $10\%$. Find the cost price of the fridge.</p>
        <p><strong>Solution:</strong> $\text{S.P.} = ₹7200$, $\text{Loss}\% = 10\%$.<br/>
        $\text{C.P.} = \left(\frac{100}{100 - 10}\right) \times 7200 = \frac{100}{90} \times 7200 = ₹8000$.</p>
      </div>

      <div class="illustration">
        <p><span class="illustration-title">Illustration 6:</span> Mohan sells a pen for ₹99 and gains $12\frac{1}{2}\%$. Find the cost price of the pen.</p>
        <p><strong>Solution:</strong> $\text{S.P.} = ₹99$, $\text{Gain}\% = 12\frac{1}{2}\% = \frac{25}{2}\%$.<br/>
        $\text{C.P.} = \left(\frac{100}{100 + \frac{25}{2}}\right) \times 99 = \left(\frac{100 \times 2}{225}\right) \times 99 = ₹88$.</p>
      </div>

      <div class="section-bar">Some Useful Shortcut Methods</div>

      <!-- SHORTCUT 01 -->
      <div class="formula-box">
        <span class="formula-badge">01</span> If a man buys $x$ items for $₹y$ and sells $z$ items for $₹w$, the gain or loss per cent is:
        $$\left(\frac{xw}{zy} - 1\right) \times 100\%$$
        <p><small><strong>Explanation:</strong> S.P. of $z$ items $= ₹w \Rightarrow$ S.P. of $x$ items $= ₹\frac{w}{z}x$. Net profit $= \frac{w}{z}x - y$. Percentage profit $= \frac{\frac{w}{z}x - y}{y} \times 100\% = \left(\frac{xw}{zy} - 1\right) \times 100\%$.</small></p>
      </div>

      <div class="note-box">
        <strong>How to Remember Cross-Multiplication:</strong> A positive result indicates a gain%. A negative result indicates a loss%.
        <svg viewBox="0 0 280 115" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross multiplication diagram">
          <defs>
            <marker id="arrowDown" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#0f766e"/>
            </marker>
            <marker id="arrowUp" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#b45309"/>
            </marker>
          </defs>
          <text x="65" y="18" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a">Quantity</text>
          <text x="205" y="18" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a">Price (C.P. or S.P.)</text>
          <text x="65" y="42" text-anchor="middle" font-family="serif" font-size="13" font-style="italic" fill="#0f172a">x</text>
          <text x="205" y="42" text-anchor="middle" font-family="serif" font-size="13" font-style="italic" fill="#0f172a">y</text>
          <text x="65" y="98" text-anchor="middle" font-family="serif" font-size="13" font-style="italic" fill="#0f172a">z</text>
          <text x="205" y="98" text-anchor="middle" font-family="serif" font-size="13" font-style="italic" fill="#0f172a">w</text>
          <line x1="80" y1="42" x2="188" y2="92" stroke="#0f766e" stroke-width="2" marker-end="url(#arrowDown)"/>
          <line x1="80" y1="92" x2="188" y2="42" stroke="#b45309" stroke-width="2" marker-end="url(#arrowUp)"/>
        </svg>
        <p>1. Multiply the connected numbers: $xw$ and $zy$.<br/>
        2. The downward arrow ($xw$) forms the numerator. The upward arrow ($zy$) forms the denominator: $\left(\frac{xw}{zy}\right)$.</p>
      </div>

      <div class="illustration">
        <p><span class="illustration-title">Illustration 7:</span> A person buys $11$ oranges for $₹10$ and sells $10$ oranges for $₹11$. Find the gain or loss%.</p>
        <svg viewBox="0 0 260 95" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration 7 cross multiplication">
          <text x="60" y="16" text-anchor="middle" font-family="sans-serif" font-size="10.5" font-weight="bold">Quantity</text>
          <text x="195" y="16" text-anchor="middle" font-family="sans-serif" font-size="10.5" font-weight="bold">Price</text>
          <text x="60" y="38" text-anchor="middle" font-family="sans-serif" font-size="12">11</text>
          <text x="195" y="38" text-anchor="middle" font-family="sans-serif" font-size="12">10</text>
          <text x="60" y="84" text-anchor="middle" font-family="sans-serif" font-size="12">10</text>
          <text x="195" y="84" text-anchor="middle" font-family="sans-serif" font-size="12">11</text>
          <line x1="76" y1="38" x2="178" y2="78" stroke="#0f766e" stroke-width="1.8"/>
          <line x1="76" y1="78" x2="178" y2="38" stroke="#b45309" stroke-width="1.8"/>
        </svg>
        <p><strong>Solution:</strong> $\% \text{ profit} = \left(\frac{11 \times 11}{10 \times 10} - 1\right) \times 100\% = \frac{21}{100} \times 100\% = 21\%$.<br/>
        <small>*(Note: The source PDF diagram misprints bottom-right as 10, but the formula correctly uses 11.)*</small></p>
      </div>

      <div class="illustration">
        <p><span class="illustration-title">Illustration 8:</span> A fruit seller buys apples at $₹12$ per dozen ($12$ apples) and sells them at $15$ for $₹12$. Find the percentage gain or loss.</p>
        <svg viewBox="0 0 260 95" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration 8 cross multiplication">
          <text x="60" y="16" text-anchor="middle" font-family="sans-serif" font-size="10.5" font-weight="bold">Quantity</text>
          <text x="195" y="16" text-anchor="middle" font-family="sans-serif" font-size="10.5" font-weight="bold">Price</text>
          <text x="60" y="38" text-anchor="middle" font-family="sans-serif" font-size="12">12</text>
          <text x="195" y="38" text-anchor="middle" font-family="sans-serif" font-size="12">12</text>
          <text x="60" y="84" text-anchor="middle" font-family="sans-serif" font-size="12">15</text>
          <text x="195" y="84" text-anchor="middle" font-family="sans-serif" font-size="12">12</text>
          <line x1="76" y1="38" x2="178" y2="78" stroke="#0f766e" stroke-width="1.8"/>
          <line x1="76" y1="78" x2="178" y2="38" stroke="#b45309" stroke-width="1.8"/>
        </svg>
        <p><strong>Solution:</strong> $\% \text{ gain or loss} = \left(\frac{12 \times 12}{15 \times 12} - 1\right) \times 100\% = \left(\frac{144}{180} - 1\right) \times 100\% = \frac{-36}{180} \times 100\% = -20\%$.<br/>
        Because the sign is negative, there is a loss. <small>*(Note: The source PDF prints "loss of 25%" as a typographical error for $\frac{-36}{180} \times 100\% = -20\%$.)*</small></p>
      </div>

      <!-- SHORTCUT 02 -->
      <div class="formula-box">
        <span class="formula-badge">02</span> If the cost price of $m$ articles equals the selling price of $n$ articles:
        $$\% \text{ gain or loss} = \left(\frac{m - n}{n}\right) \times 100$$
        <p>If $m &gt; n$, it is a $\%$ gain. If $m &lt; n$, it is a $\%$ loss.</p>
        <p><small><strong>Explanation:</strong> Let C.P. of $1$ article $= ₹1$. Then C.P. of $m$ articles $= ₹m =$ S.P. of $n$ articles. S.P. of $1$ article $= ₹\frac{m}{n}$. Profit on $1$ article $= ₹\left(\frac{m-n}{n}\right)$. Thus $\% \text{ profit} = \left(\frac{m-n}{n}\right) \times 100$.</small></p>
      </div>

      <div class="illustration">
        <p><span class="illustration-title">Illustration 9:</span> A shopkeeper claims to sell goods at cost price, but uses $800\text{ g}$ instead of $1\text{ kg}$ ($1000\text{ g}$). Find the gain%.</p>
        <p><strong>Solution:</strong> Cost price of $1000\text{ g}$ equals selling price of $800\text{ g}$.<br/>
        $\% \text{ gain} = \left(\frac{1000 - 800}{800}\right) \times 100 = \frac{200}{800} \times 100 = 25\%$.</p>
      </div>

      <div class="illustration">
        <p><span class="illustration-title">Illustration 10:</span> If the selling price of $12$ articles equals the cost price of $18$ articles, find the profit%.</p>
        <p><strong>Solution:</strong> Here, $m = 18$ and $n = 12$.<br/>
        $\text{Profit}\% = \left(\frac{18 - 12}{12}\right) \times 100 = \frac{6}{12} \times 100 = 50\%$.</p>
      </div>

      <!-- SHORTCUT 03 -->
      <div class="formula-box">
        <span class="formula-badge">03</span> If an article sold at $\text{S.P.}_1$ gives gain/loss $x\%$, and sold at $\text{S.P.}_2$ gives gain/loss $y\%$:
        $$\frac{\text{S.P.}_1}{100 + x} = \frac{\text{S.P.}_2}{100 + y} = \frac{\text{C.P.}}{100} = \frac{\text{S.P.}_1 - \text{S.P.}_2}{x - y}$$
        <p>Use negative values for $x$ or $y$ to show a loss, and positive values for a gain.</p>
      </div>

      <div class="illustration">
        <p><span class="illustration-title">Illustration 11:</span> Suresh sells a radio for $₹1536$ and loses $20\%$. What per cent will he gain or lose by selling it for $₹2000$?</p>
        <p><strong>Solution:</strong> $\text{S.P.}_1 = 1536$, $x = -20$, $\text{S.P.}_2 = 2000$.<br/>
        $\frac{1536}{100 - 20} = \frac{2000}{100 + y} \Rightarrow 100 + y = \frac{2000 \times 80}{1536} = 104\frac{1}{6} \Rightarrow y = 4\frac{1}{6}\%$.<br/>
        Suresh gains $4\frac{1}{6}\%$ by selling it for $₹2000$.</p>
      </div>

      <!-- SHORTCUT 04 -->
      <div class="formula-box">
        <span class="formula-badge">04</span> A sells an article to B at a gain/loss of $m\%$. B sells it to C at a gain/loss of $n\%$. If C pays $₹z$ to B, the cost price for A is:
        $$\text{C.P.}_A = \left[\frac{100^2 z}{(100 + m)(100 + n)}\right]$$
        <p>Use negative values for $m$ or $n$ when there is a loss, and positive values for a gain.</p>
      </div>

      <div class="illustration">
        <p><span class="illustration-title">Illustration 12:</span> Mohit sells a bicycle to Rohit at a $10\%$ gain. Rohit sells it to Jyoti at a $5\%$ profit. Jyoti pays $₹462$ to Rohit. Find the cost price for Mohit.</p>
        <p><strong>Solution:</strong> $m = 10$, $n = 5$, $z = ₹462$.<br/>
        $\text{C.P.} = \frac{100^2 \times 462}{(100 + 10)(100 + 5)} = \frac{462 \times 10000}{110 \times 105} = ₹400$.</p>
      </div>

      <div class="illustration">
        <p><span class="illustration-title">Illustration 13:</span> A sells a DVD to B at a $17\%$ gain. B sells it to C at a $25\%$ loss. C pays $₹1053$ to B. Find the cost price of the DVD to A.</p>
        <p><strong>Solution:</strong> $m = 17$, $n = -25$, $z = ₹1053$.<br/>
        $\text{C.P.} = \frac{100 \times 100 \times 1053}{(100 + 17)(100 - 25)} = \frac{100 \times 100 \times 1053}{117 \times 75} = ₹1200$.</p>
      </div>

      <!-- SHORTCUT 05 -->
      <div class="formula-box">
        <span class="formula-badge">05</span> If A sells to B at $m\%$ gain/loss and B sells to C at $n\%$ gain/loss, the resultant profit/loss per cent is:
        $$\left(m + n + \frac{mn}{100}\right)\% \quad \dots(1)$$
        <p>Use negative values for loss and positive values for gain. A positive result shows profit; a negative result shows loss.</p>
      </div>

      <div class="illustration">
        <p><span class="illustration-title">Illustration 14:</span> A sells a horse to B at a $5\%$ profit. B sells it to C at a $10\%$ profit. Find the resultant profit per cent.</p>
        <p><strong>Solution:</strong> $m = 5$, $n = 10$.<br/>
        $\text{Resultant profit}\% = \left(5 + 10 + \frac{5 \times 10}{100}\right)\% = \frac{31}{2}\% = 15\frac{1}{2}\%$.</p>
      </div>

      <div class="illustration">
        <p><span class="illustration-title">Illustration 15:</span> Manoj sells a shirt to Yogesh at a $15\%$ profit. Yogesh sells it to Suresh at a $10\%$ loss. Find the resultant profit or loss.</p>
        <p><strong>Solution:</strong> $m = 15$, $n = -10$.<br/>
        $\text{Resultant}\% = \left(15 - 10 + \frac{15 \times (-10)}{100}\right)\% = \left(5 - \frac{150}{100}\right)\% = \frac{7}{2}\% = 3\frac{1}{2}\%$ (Profit).</p>
      </div>

      <!-- SHORTCUT 06 & 07 -->
      <div class="formula-box">
        <span class="formula-badge">06</span> Two different articles are sold at the <strong>same selling price</strong>, with gain/loss $x\%$ on the first and gain/loss $y\%$ on the second. The overall $\%$ gain or loss is:
        $$\left[\frac{100(x + y) + 2xy}{(100 + x) + (100 + y)}\right]\%$$
        <p>Positive indicates overall gain; negative indicates overall loss.</p>
      </div>

      <div class="formula-box">
        <span class="formula-badge">07</span> Two different articles are sold at the <strong>same selling price</strong>, with a gain of $x\%$ on the first and a loss of $x\%$ on the second. A loss always occurs:
        $$\text{Overall Loss}\% = \left(\frac{x}{10}\right)^2\%$$
        <p><small><strong>Explanation:</strong> Let each S.P. be $₹z$. Then $\text{C.P.}_1 = z\left(\frac{100}{100+x}\right)$ and $\text{C.P.}_2 = z\left(\frac{100}{100+y}\right)$. Total $\text{S.P.} = 2z$, Total $\text{C.P.} = z\frac{100(200+x+y)}{(100+x)(100+y)}$. Simplifying $\frac{\text{S.P.} - \text{C.P.}}{\text{C.P.}} \times 100$ gives Formula 06. Setting $y = -x$ gives $-\frac{x^2}{100}\%$.</small></p>
      </div>

      <div class="illustration">
        <p><span class="illustration-title">Illustration 16:</span> Mahesh sold two scooters for $₹24000$ each. He makes $20\%$ profit on the first and $15\%$ loss on the second. Find his overall gain or loss per cent.</p>
        <p><strong>Solution:</strong> $x = 20$, $y = -15$.<br/>
        $\text{Overall}\% = \left[\frac{100(20 - 15) + 2(20)(-15)}{(100 + 20) + (100 - 15)}\right]\% = -\frac{100}{205}\% = -\frac{20}{41}\%$ (Loss).</p>
      </div>

      <div class="illustration">
        <p><span class="illustration-title">Illustration 17:</span> Rajesh sold two horses for $₹990$ each, gaining $10\%$ on one and losing $10\%$ on the other. Find his total gain or loss per cent.</p>
        <p><strong>Solution:</strong> $x = 10$. $\text{Overall loss}\% = \left(\frac{10}{10}\right)^2\% = 1\%$.</p>
      </div>

      <!-- SHORTCUT 08 & 09 -->
      <div class="formula-box">
        <span class="formula-badge">08</span> A merchant uses a faulty measure and sells goods at a gain/loss of $x\%$. The overall $\%$ gain/loss ($g$) is given by:
        $$\frac{100 + g}{100 + x} = \frac{\text{True measure}}{\text{Faulty measure}}$$
        <p><small>If the merchant sells goods at cost price, set $x = 0$.</small></p>
      </div>

      <div class="formula-box">
        <span class="formula-badge">09</span> A merchant uses $y\%$ less weight/length and sells goods at a gain/loss of $x\%$. The overall $\%$ gain/loss is:
        $$\left[\left(\frac{y + x}{100 - y}\right) \times 100\right]\%$$
      </div>

      <div class="illustration">
        <p><span class="illustration-title">Illustration 18:</span> A dishonest shopkeeper sells cloth at cost price, but uses a $95\text{ cm}$ meter rod. Find his gain per cent.</p>
        <p><strong>Solution:</strong> True measure $= 100\text{ cm}$, False measure $= 95\text{ cm}$, $x = 0$.<br/>
        $\frac{100 + g}{100} = \frac{100}{95} \Rightarrow 100 + g = \frac{10000}{95} \Rightarrow g = \frac{10000}{95} - 100 = 5\frac{5}{19}\%$.</p>
      </div>

      <div class="illustration">
        <p><span class="illustration-title">Illustration 19:</span> A dishonest shopkeeper sells goods at cost price, but uses an $800\text{ g}$ weight for $1\text{ kg}$. Find his gain per cent.</p>
        <p><strong>Solution:</strong> True measure $= 1000\text{ g}$, False measure $= 800\text{ g}$, $x = 0$.<br/>
        $\frac{100 + g}{100} = \frac{1000}{800} \Rightarrow g = \frac{1000}{8} - 100 = 25\%$.</p>
      </div>

      <div class="illustration">
        <p><span class="illustration-title">Illustration 20:</span> A shopkeeper sells goods at $44\%$ loss on cost price, but uses $30\%$ less weight. Find his percentage profit or loss.</p>
        <p><strong>Solution:</strong> $x = -44$, $y = 30$.<br/>
        $\text{Overall}\% = \left(\frac{30 - 44}{100 - 30}\right) \times 100\% = \frac{-14}{70} \times 100\% = -20\%$ (Loss).</p>
      </div>

      <!-- SHORTCUT 10 -->
      <div class="formula-box">
        <span class="formula-badge">10</span> A person buys two items for $₹A$, and sells one at a loss of $l\%$ and the other at a gain of $g\%$. If both sell at the <strong>same price</strong>:
        <p>(a) $\text{C.P. of item sold at loss} = \dfrac{A(100 + g)}{(100 - l) + (100 + g)}$</p>
        <p>(b) $\text{C.P. of item sold at gain} = \dfrac{A(100 - l)}{(100 - l) + (100 + g)}$</p>
      </div>

      <div class="illustration">
        <p><span class="illustration-title">Illustration 21:</span> Ramesh buys two books for $₹410$. He sells one at a $20\%$ loss and the other at a $25\%$ gain. Both sell at the same price. Find the cost price of each book.</p>
        <p><strong>Solution:</strong><br/>
        C.P. of book at $20\%$ loss $= \frac{410(100 + 25)}{(100 - 20) + (100 + 25)} = \frac{410 \times 125}{80 + 125} = ₹250$.<br/>
        C.P. of book at $25\%$ gain $= \frac{410(100 - 20)}{80 + 125} = \frac{410 \times 80}{205} = ₹160$.</p>
      </div>

      <!-- SHORTCUT 11 -->
      <div class="formula-box">
        <span class="formula-badge">11</span> Two successive discounts of $m\%$ and $n\%$ equal a single equivalent discount of:
        $$\left(m + n - \frac{mn}{100}\right)\%$$
        <p><small><strong>Explanation:</strong> Let M.P. $= ₹100$. After $m\%$ discount, price $= (100-m)$. After $n\%$ discount, total discount $= m + \frac{(100-m)n}{100} = m + n - \frac{mn}{100}$.</small></p>
      </div>

      <!-- SHORTCUT 12 -->
      <div class="formula-box">
        <span class="formula-badge">12</span> Three successive discounts of $l\%$, $m\%$, and $n\%$ equal a single equivalent discount of:
        $$\left[l + m + n - \frac{(lm + ln + mn)}{100} + \frac{lmn}{100^2}\right]\%$$
        <p><small><strong>Explanation:</strong> Final S.P. on M.P. $₹100$ is $\frac{(100-l)(100-m)(100-n)}{100 \times 100}$. Subtracting from $100$ gives the single equivalent discount formula.</small></p>
      </div>

      <div class="illustration">
        <p><span class="illustration-title">Illustration 22:</span> Find a single discount equivalent to two successive discounts of $10\%$ and $20\%$.</p>
        <p><strong>Solution:</strong> $\left(10 + 20 - \frac{10 \times 20}{100}\right)\% = 28\%$.</p>
      </div>

      <div class="illustration">
        <p><span class="illustration-title">Illustration 23:</span> Find a single discount equivalent to three successive discounts of $10\%$, $20\%$, and $30\%$.</p>
        <p><strong>Solution:</strong> $\left(10 + 20 + 30 - \frac{200 + 300 + 600}{100} + \frac{10 \times 20 \times 30}{100^2}\right)\% = \left(60 - 11 + \frac{6}{10}\right)\% = 49.6\%$.</p>
      </div>

      <div class="illustration">
        <p><span class="illustration-title">Illustration 24:</span> Two shopkeepers sell machines at the same list price. The first offers $30\%$ and $16\%$. The second offers $20\%$ and $26\%$. Which offer is better for buyers?</p>
        <p><strong>Solution:</strong><br/>
        First offer: $\left(30 + 16 - \frac{30 \times 16}{100}\right)\% = \left(46 - \frac{24}{5}\right)\% = 41\frac{1}{5}\%$.<br/>
        Second offer: $\left(20 + 26 - \frac{20 \times 26}{100}\right)\% = \left(46 - \frac{26}{5}\right)\% = 40\frac{4}{5}\%$.<br/>
        The first shopkeeper's discount series is better for buyers.</p>
      </div>

      <!-- SHORTCUT 13 -->
      <div class="formula-box">
        <span class="formula-badge">13</span> A shopkeeper sells an item at $₹z$ after giving a $d\%$ discount on the labelled price. Without the discount, the profit would be $p\%$ on cost price. The cost price is:
        $$\text{C.P.} = \left[\frac{100^2 z}{(100 - d)(100 + p)}\right]$$
      </div>

      <div class="illustration">
        <p><span class="illustration-title">Illustration 25:</span> A shopkeeper sells sarees at $₹266$ each after a $5\%$ discount on labelled price. Without the discount, he would earn a $12\%$ profit on cost price. Find the cost price of each saree.</p>
        <p><strong>Solution:</strong> $z = ₹266$, $d = 5\%$, $p = 12\%$.<br/>
        $\text{C.P.} = \frac{100 \times 100 \times 266}{(100 - 5)(100 + 12)} = \frac{100 \times 100 \times 266}{95 \times 112} = ₹250$.<br/>
        <small>*(Note: The PDF refers to $z = ₹266$ as "labelled price" in the solution line, though the formula uses $z$ as the selling price after discount, which matches the problem statement.)*</small></p>
      </div>
    </section>

    <!-- ========================================================= -->
    <!-- CHAPTER 17: SIMPLE INTEREST (PDF PAGE 29)                 -->
    <!-- ========================================================= -->
    <header class="chapter-header">
      <div class="chapter-num">17</div>
      <div>
        <div class="chapter-subtitle">Chapter 17 — Introduction &amp; Formulae (Page 29)</div>
        <h1 class="chapter-title">Simple Interest</h1>
      </div>
    </header>

    <section class="chapter-body">
      <div class="section-bar">Introduction</div>

      <p>When person A borrows money from person B, A pays an extra amount to B to use that money. This extra payment is <strong>Interest</strong>. The total money borrowed is the <strong>Principal</strong> ($P$). The total money paid back is the <strong>Amount</strong> ($A$).</p>

      <div class="formula-box">
        $$\text{Amount} = \text{Principal} + \text{Interest}$$
      </div>

      <p>Interest is calculated as a percentage of the principal for a fixed period. This percentage is the <strong>Rate of Interest</strong> ($R$). The time period can be a year, six months, three months, or a month. Thus, interest is charged annually, semi-annually, quarterly, or monthly.</p>
      <p>For example, a rate of $5\%$ per annum means the interest on $₹100$ for one year is $₹5$.</p>

      <p>There are two types of interest: <strong>1. Simple Interest</strong> and <strong>2. Compound Interest</strong>.</p>

      <h3>Simple Interest</h3>
      <p>When interest is calculated only on the original principal for the full loan period, it is <strong>Simple Interest</strong>. For example, at $5\%$ per annum on $₹100$, interest is $₹5$ each year. After Year 1, total amount is $₹105$. After Year 2, total amount is $₹110$.</p>

      <!-- Simple Interest Visual Timeline SVG -->
      <div class="card">
        <svg viewBox="0 0 480 85" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Simple interest growth timeline">
          <line x1="40" y1="40" x2="430" y2="40" stroke="#1e293b" stroke-width="2"/>
          <circle cx="50" cy="40" r="6" fill="#0f766e"/>
          <text x="50" y="24" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold">Start (T=0)</text>
          <text x="50" y="64" text-anchor="middle" font-family="sans-serif" font-size="10">Principal = ₹100</text>

          <circle cx="235" cy="40" r="6" fill="#0f766e"/>
          <text x="235" y="24" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold">Year 1 (+₹5)</text>
          <text x="235" y="64" text-anchor="middle" font-family="sans-serif" font-size="10">Amount = ₹105</text>

          <circle cx="420" cy="40" r="6" fill="#0f766e"/>
          <text x="420" y="24" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold">Year 2 (+₹5)</text>
          <text x="420" y="64" text-anchor="middle" font-family="sans-serif" font-size="10">Amount = ₹110</text>
        </svg>
        <div class="diagram-caption">Figure 17.1: Simple Interest on ₹100 at 5% per annum</div>
      </div>

      <div class="section-bar">Basic Formulae</div>

      <p>Let $P =$ Principal, $R =$ Rate per cent per annum, $T =$ Number of years, $I =$ Simple Interest, and $A =$ Amount.</p>

      <div class="formula-box">
        <span class="formula-badge">01</span> <strong>Simple Interest ($I$):</strong>
        $$I = \frac{\text{Principal} \times \text{Rate} \times \text{Time}}{100} = \frac{P \times R \times T}{100}$$
      </div>

      <div class="illustration">
        <p><span class="illustration-title">Illustration 1:</span> Find the simple interest on $₹5200$ for $2$ years at $6\%$ per annum.</p>
        <p><strong>Solution:</strong> $P = ₹5200$, $T = 2$ years, $R = 6\%$.<br/>
        $I = \frac{P \times R \times T}{100} = \frac{5200 \times 6 \times 2}{100} = ₹624$.</p>
      </div>

      <div class="formula-box">
        <span class="formula-badge">02</span> <strong>Principal ($P$):</strong>
        $$P = \frac{100 \times \text{Simple Interest}}{\text{Rate} \times \text{Time}} = \frac{100 \times I}{R \times T}$$
      </div>

      <div class="illustration">
        <p><span class="illustration-title">Illustration 2:</span> A man earns $₹450$ as interest in $2$ years at $12\%$ per annum. Find the sum invested.</p>
        <p><strong>Solution:</strong> $I = ₹450$, $T = 2$ years, $R = 12\%$.<br/>
        $P = \frac{100 \times I}{R \times T} = \frac{450 \times 100}{12 \times 2} = ₹1875$.<br/>
        The man invested $₹1875$.</p>
      </div>
    </section>

  </main>

  <script>
    function setLayout(mode) {
      const body = document.body;
      const btnSingle = document.getElementById('btn-single');
      const btnTwo = document.getElementById('btn-two');
      if (mode === 'two') {
        body.classList.remove('layout-single-col');
        body.classList.add('layout-two-col');
        btnTwo.classList.add('active');
        btnSingle.classList.remove('active');
      } else {
        body.classList.remove('layout-two-col');
        body.classList.add('layout-single-col');
        btnSingle.classList.add('active');
        btnTwo.classList.remove('active');
      }
    }
  </script>
</body>
</html>
```

### How to Export to Single-Column & Two-Column PDFs Locally
1. Save the HTML above as `notes_part1.html` and open it in Chrome/Edge.
2. Click **Single Column** $\rightarrow$ **Print / Save PDF** $\rightarrow$ save as `notes_part1_single.pdf`.
3. Click **Two Column** $\rightarrow$ **Print / Save PDF** $\rightarrow$ save as `notes_part1_two_col.pdf`.

If you would like the remaining pages (**Exercise-1 Q1–42 + Explanatory Answers** and **Exercise-2 Q1–192 + Answer Keys**), let me know and I will generate them in the next parts so nothing is lost.
