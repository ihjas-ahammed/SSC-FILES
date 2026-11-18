```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Quantitative Aptitude Notes — ASD-STE100 Edition</title>

  <!-- MathJax 3 Configuration -->
  <script>
    window.MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        processEscapes: true
      },
      options: {
        skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
      },
      chtml: {
        scale: 1,
        matchFontHeight: true
      }
    };
  </script>
  <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

  <style>
    :root {
      --primary: #1e3a5f;
      --primary-light: #2b548a;
      --accent: #0f766e;
      --accent-bg: #f0fdfa;
      --warn-bg: #fffbeb;
      --warn-border: #d97706;
      --formula-bg: #eff6ff;
      --formula-border: #2563eb;
      --example-bg: #f8fafc;
      --border: #cbd5e1;
      --text: #1e293b;
      --muted: #475569;
      --bg: #f1f5f9;
      --paper: #ffffff;
    }

    *, *::before, *::after {
      box-sizing: border-box;
    }

    html, body {
      margin: 0;
      padding: 0;
      background: var(--bg);
      color: var(--text);
      font-family: "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      font-size: 15px;
      line-height: 1.6;
      overflow-x: hidden;
    }

    /* Top Control Bar (hidden on print) */
    .toolbar {
      position: sticky;
      top: 0;
      z-index: 100;
      background: var(--primary);
      color: #fff;
      padding: 10px 20px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    }

    .toolbar-title {
      font-weight: 700;
      font-size: 1rem;
      letter-spacing: 0.3px;
    }

    .toolbar-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .btn {
      background: rgba(255,255,255,0.14);
      color: #fff;
      border: 1px solid rgba(255,255,255,0.3);
      padding: 6px 12px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 0.85rem;
      font-weight: 600;
      transition: background 0.2s;
    }

    .btn:hover, .btn.active {
      background: #fff;
      color: var(--primary);
    }

    /* Main Textbook Container */
    .book-wrapper {
      max-width: 1120px;
      margin: 24px auto;
      background: var(--paper);
      padding: 32px 36px;
      border-radius: 10px;
      box-shadow: 0 4px 20px rgba(15, 23, 42, 0.08);
    }

    /* Two-column toggle mode */
    .book-wrapper.two-col .chapter-body {
      column-count: 2;
      column-gap: 32px;
      column-rule: 1px solid #e2e8f0;
    }

    .book-wrapper.two-col .full-span {
      column-span: all;
    }

    /* Prevent overflow across everything */
    .book-wrapper, .chapter-body, .card, .formula-box, .illustration, .question-item, table, svg, mjx-container {
      max-width: 100%;
    }

    mjx-container {
      overflow-x: auto;
      overflow-y: hidden;
      max-width: 100%;
      vertical-align: middle;
    }

    mjx-container[display="true"] {
      display: block !important;
      margin: 10px 0 !important;
      padding: 4px 2px;
    }

    .avoid-break {
      break-inside: avoid;
      page-break-inside: avoid;
    }

    /* Chapter Banner */
    .chapter-header {
      background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
      color: #fff;
      padding: 20px 26px;
      border-radius: 8px;
      margin: 28px 0 20px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 12px;
      column-span: all;
    }

    .chapter-header:first-child {
      margin-top: 0;
    }

    .chapter-badge {
      background: rgba(255,255,255,0.18);
      border: 1px solid rgba(255,255,255,0.35);
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.82rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.8px;
    }

    .chapter-header h1 {
      margin: 4px 0 0 0;
      font-size: 1.7rem;
      font-weight: 800;
      letter-spacing: -0.2px;
    }

    .ste-note {
      font-size: 0.82rem;
      background: var(--accent-bg);
      border-left: 4px solid var(--accent);
      padding: 8px 14px;
      border-radius: 4px;
      margin-bottom: 18px;
      color: #134e4a;
      column-span: all;
    }

    h2.section-title {
      background: #e2e8f0;
      color: var(--primary);
      padding: 8px 14px;
      border-left: 5px solid var(--primary);
      border-radius: 4px;
      font-size: 1.15rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin: 22px 0 14px 0;
      column-span: all;
    }

    h3.sub-title {
      color: var(--primary);
      font-size: 1.05rem;
      margin: 14px 0 6px 0;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 3px;
    }

    p {
      margin: 6px 0 10px 0;
    }

    /* Callout Boxes */
    .card {
      background: #fff;
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 14px 16px;
      margin-bottom: 14px;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .formula-box {
      background: var(--formula-bg);
      border: 1px solid #bfdbfe;
      border-left: 5px solid var(--formula-border);
      border-radius: 6px;
      padding: 12px 15px;
      margin-bottom: 14px;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .formula-num {
      display: inline-block;
      background: var(--formula-border);
      color: #fff;
      font-weight: 700;
      font-size: 0.8rem;
      padding: 2px 8px;
      border-radius: 4px;
      margin-right: 8px;
    }

    .shortcut-box {
      background: #faf5ff;
      border: 1px solid #e9d5ff;
      border-left: 5px solid #7e22ce;
      border-radius: 6px;
      padding: 13px 15px;
      margin-bottom: 14px;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .shortcut-num {
      display: inline-block;
      background: #7e22ce;
      color: #fff;
      font-weight: 700;
      font-size: 0.8rem;
      padding: 2px 8px;
      border-radius: 12px;
      margin-right: 8px;
    }

    .illustration {
      background: var(--example-bg);
      border: 1px solid #cbd5e1;
      border-left: 4px solid var(--accent);
      border-radius: 6px;
      padding: 11px 14px;
      margin: 10px 0 14px 0;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .illustration-title {
      font-weight: 700;
      color: var(--accent);
    }

    .explanation-box {
      background: var(--warn-bg);
      border: 1px solid #fde68a;
      border-left: 4px solid var(--warn-border);
      border-radius: 6px;
      padding: 10px 14px;
      margin: 8px 0 12px 0;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    /* SVG Container */
    .svg-box {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 12px 0;
      padding: 10px;
      background: #ffffff;
      border: 1px dashed #cbd5e1;
      border-radius: 8px;
      overflow-x: auto;
      break-inside: avoid;
    }

    svg {
      height: auto;
      max-width: 100%;
    }

    /* Questions and Options */
    .question-item {
      border-bottom: 1px dashed #cbd5e1;
      padding: 10px 0 12px 0;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .q-text {
      font-weight: 500;
      margin-bottom: 6px;
    }

    .q-num {
      font-weight: 700;
      color: var(--primary);
      margin-right: 4px;
    }

    .options-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 4px 12px;
      margin-left: 16px;
      font-size: 0.95rem;
    }

    .exam-tag {
      display: inline-block;
      margin-top: 5px;
      font-size: 0.78rem;
      font-weight: 700;
      color: #475569;
      background: #f1f5f9;
      padding: 2px 8px;
      border-radius: 4px;
      border: 1px solid #cbd5e1;
    }

    /* Tables */
    .table-wrap {
      width: 100%;
      overflow-x: auto;
      margin: 12px 0;
      break-inside: avoid;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.92rem;
    }

    th, td {
      border: 1px solid var(--border);
      padding: 7px 10px;
      text-align: center;
    }

    th {
      background: var(--primary);
      color: #fff;
      font-weight: 700;
    }

    tr:nth-child(even) td {
      background: #f8fafc;
    }

    .ans-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(95px, 1fr));
      gap: 6px;
      margin: 10px 0;
    }

    .ans-cell {
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      border-radius: 4px;
      padding: 4px 8px;
      text-align: center;
      font-size: 0.88rem;
    }

    .typo-note {
      font-size: 0.82rem;
      color: #92400e;
      background: #fef3c7;
      padding: 2px 6px;
      border-radius: 4px;
      display: inline-block;
      margin-top: 3px;
    }

    /* Print Styles */
    @media print {
      body {
        background: #fff;
        font-size: 11pt;
      }
      .toolbar {
        display: none !important;
      }
      .book-wrapper {
        box-shadow: none;
        margin: 0;
        padding: 0;
        max-width: 100%;
      }
      .chapter-header {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
    }

    @media (max-width: 768px) {
      .book-wrapper {
        padding: 16px;
        margin: 10px;
      }
      .book-wrapper.two-col .chapter-body {
        column-count: 1;
      }
    }
  </style>
</head>
<body>

  <div class="toolbar">
    <div class="toolbar-title">Quantitative Aptitude Textbook Notes (ASD-STE100 Style)</div>
    <div class="toolbar-actions">
      <button class="btn active" id="btn-single" onclick="setLayout('single')">Single Column</button>
      <button class="btn" id="btn-two" onclick="setLayout('two')">Two Column</button>
      <button class="btn" onclick="window.print()">Print / Save PDF</button>
    </div>
  </div>

  <main class="book-wrapper" id="book-root">

    <div class="ste-note">
      <strong>ASD-STE100 Style Notice:</strong> These study notes use clear, direct sentences and standard mathematical terms. Every formula, solution, illustration, exercise question, option, answer key, and explanation from the source pages (Pages 1–16) is included without omission.
    </div>

    <!-- ========================================================= -->
    <!-- SECTION A: PROFIT AND LOSS (PAGE 9.27 / PDF PAGE 1)       -->
    <!-- ========================================================= -->
    <section class="chapter">
      <div class="chapter-header">
        <div>
          <div class="chapter-badge">Page 9.27 • Worked Solutions</div>
          <h1>Profit and Loss (Questions 3–11)</h1>
        </div>
      </div>

      <div class="chapter-body">
        <div class="card">
          <p><strong>3. (b)</strong> The cost price ($\text{C.P.}$) of 10 articles is $₹8$.</p>
          <p>The selling price ($\text{S.P.}$) of 10 articles is:
            $$1.25 \times 10 = ₹12.50$$
            $$\text{Profit} = \text{S.P.} - \text{C.P.} = 12.50 - 8 = ₹4.50$$
            $$\therefore \text{Gain \%} = \frac{\text{Gain} \times 100}{\text{C.P.}} = \frac{4.50 \times 100}{8} = 56\frac{1}{4}\%$$
          </p>
        </div>

        <div class="card">
          <p><strong>4. (c)</strong> Marked price ($\text{M.P.}$) $= ₹80$. Selling price ($\text{S.P.}$) $= ₹68$.</p>
          <p>$$\text{Discount} = \text{M.P.} - \text{S.P.} = 80 - 68 = ₹12$$
            $$\therefore \text{Rate of discount} = \frac{\text{Discount} \times 100}{\text{Marked Price}} = \frac{12 \times 100}{80} = 15\%$$
          </p>
        </div>

        <div class="card">
          <p><strong>5. (a)</strong> Cost price of 200 dozen oranges $= 200 \times 10 = ₹2000$. Transportation cost $= ₹500$.</p>
          <p>$$\therefore \text{Cost Price (C.P.)} = 2000 + 500 = ₹2500$$
            $$\text{Selling Price (S.P.)} = 200 \times 12 \times 1 = ₹2400$$
            $$\text{Loss} = \text{C.P.} - \text{S.P.} = 2500 - 2400 = ₹100$$
            $$\therefore \text{Loss \%} = \frac{\text{Loss} \times 100}{\text{C.P.}} = \frac{100 \times 100}{2500} = 4\%$$
          </p>
        </div>

        <div class="card">
          <p><strong>6. (c)</strong> Given: $\text{S.P.} = ₹10500$, $\text{gain \%} = 5\%$.</p>
          <p>$$\therefore \text{C.P.} = \left(\frac{100}{100 + \text{Gain\%}}\right) \times \text{S.P.} = \left(\frac{100}{100 + 5}\right) \times 10500 = \frac{100}{105} \times 10500 = ₹10000$$
          </p>
        </div>

        <div class="card">
          <p><strong>7. (a)</strong> Given: $\text{C.P.} = ₹1800$, $\text{loss \%} = 10\%$.</p>
          <p>$$\therefore \text{S.P.} = \left(\frac{100 - \text{Loss\%}}{100}\right) \times \text{C.P.} = \left(\frac{100 - 10}{100}\right) \times 1800 = \frac{90}{100} \times 1800 = ₹1620$$
          </p>
        </div>

        <div class="card">
          <p><strong>8. (b)</strong> Cost price ($\text{C.P.}$) $= (120 \times 80 + 280 + 72 + 120 \times 40) = ₹10000$.</p>
          <p>Gain $\% = 8\%$. Thus, the selling price ($\text{S.P.}$) of 120 rims is:</p>
          <p>$$\text{S.P.} = \left(\frac{100 + \text{Gain\%}}{100}\right) \times \text{C.P.} = \left(\frac{100 + 8}{100}\right) \times 10000 = \frac{108}{100} \times 10000 = ₹10800$$
            $$\text{Selling price per rim} = \frac{10800}{120} = ₹90$$
          </p>
        </div>

        <div class="card">
          <p><strong>9. (c)</strong> In the first case, $\text{S.P.} = ₹31$ and $\text{loss \%} = 7\%$.</p>
          <p>$$\therefore \text{C.P.} = \left(\frac{100}{100 - \text{Loss\%}}\right) \times \text{S.P.} = \left(\frac{100}{100 - 7}\right) \times 31 = \frac{100}{93} \times 31 = ₹33\frac{1}{3}$$
            In the second case, $\text{C.P.} = ₹33\frac{1}{3}$ and $\text{gain \%} = 5\%$.
            $$\therefore \text{S.P.} = \left(\frac{100 + \text{Gain\%}}{100}\right) \times \text{C.P.} = \left(\frac{100 + 5}{100}\right) \times \frac{100}{3} = \frac{105}{100} \times \frac{100}{3} = ₹35$$
          </p>
          <div class="explanation-box">
            <strong>Alternative Solution:</strong><br/>
            $93\%$ of $\text{C.P.}$ of cricket ball $= ₹31$. To gain $5\%$:<br/>
            $\therefore 105\%$ of $\text{C.P.}$ of cricket ball $= \dfrac{31}{93} \times 105 = ₹35$.
          </div>
        </div>

        <div class="card">
          <p><strong>10. (a)</strong> In the first case, $\text{S.P.} = ₹35$ and $\text{gain \%} = 40\%$.</p>
          <p>$$\therefore \text{C.P.} = \left(\frac{100}{100 + \text{Gain\%}}\right) \times \text{S.P.} = \left(\frac{100}{100 + 40}\right) \times 35 = \frac{100}{140} \times 35 = ₹25$$
            In the second case, $\text{C.P.} = ₹25$ and $\text{gain \%} = 60\%$.
            $$\therefore \text{S.P.} = \left(\frac{100 + \text{Gain\%}}{100}\right) \times \text{C.P.} = \left(\frac{100 + 60}{100}\right) \times 25 = \frac{160}{100} \times 25 = ₹40$$
          </p>
        </div>

        <div class="card">
          <p><strong>11. (c)</strong> Cross-Multiplication Method (Quantity vs. Price):</p>
          <div class="svg-box">
            <svg viewBox="0 0 280 120" width="260" aria-label="Quantity and Price Cross Diagram">
              <text x="60" y="22" font-family="sans-serif" font-size="13" font-weight="700" fill="#1e3a5f" text-anchor="middle">Quantity</text>
              <text x="210" y="22" font-family="sans-serif" font-size="13" font-weight="700" fill="#1e3a5f" text-anchor="middle">Price</text>

              <!-- Nodes -->
              <text x="60" y="50" font-family="sans-serif" font-size="14" font-weight="700" fill="#0f172a" text-anchor="middle">6</text>
              <text x="60" y="102" font-family="sans-serif" font-size="14" font-weight="700" fill="#0f172a" text-anchor="middle">6</text>
              <text x="210" y="50" font-family="sans-serif" font-size="14" font-weight="700" fill="#0f172a" text-anchor="middle">20</text>
              <text x="210" y="102" font-family="sans-serif" font-size="14" font-weight="700" fill="#0f172a" text-anchor="middle">16</text>

              <!-- Cross Lines -->
              <line x1="78" y1="47" x2="190" y2="96" stroke="#2563eb" stroke-width="2" />
              <line x1="78" y1="96" x2="190" y2="47" stroke="#0f766e" stroke-width="2" />
            </svg>
          </div>
          <p>$$\%\text{ profit} = \left(\frac{xw}{zy} - 1\right) \times 100\% = \left(\frac{6 \times 16}{4 \times 20} - 1\right) \times 100\% = \frac{16}{80} \times 100\% = 20\%$$
          </p>
          <span class="typo-note">Source Note: The diagram labels both left entries as 6 while the calculation uses $4 \times 20$ in the denominator.</span>
        </div>
      </div>
    </section>

    <!-- ========================================================= -->
    <!-- CHAPTER 17: SIMPLE INTEREST (PDF PAGES 2–15)              -->
    <!-- ========================================================= -->
    <section class="chapter">
      <div class="chapter-header">
        <div>
          <div class="chapter-badge">Chapter 17</div>
          <h1>Simple Interest</h1>
        </div>
      </div>

      <h2 class="section-title">Introduction &amp; Concept</h2>
      <div class="chapter-body">
        <div class="card">
          <p>When person A borrows money from person B, A pays an extra amount to B for the use of that money. This extra amount is the <strong>Interest</strong>.</p>
          <p>The borrowed sum of money is the <strong>Principal</strong> ($P$). The total money paid back to B (Principal plus Interest) is the <strong>Amount</strong> ($A$).</p>
          <p>$$\text{Amount} = \text{Principal} + \text{Interest}$$</p>
          <p>Interest is charged for a specified term as a percentage of the principal. This percentage is the <strong>rate of interest</strong> for a fixed time period (one year, six months, three months, or one month). Thus, interest is charged annually, semi-annually, quarterly, or monthly.</p>
          <p><strong>Example:</strong> A rate of interest of $5\%$ per annum means the interest payable on $₹100$ for one year is $₹5$.</p>
          <p>Interest is of two types: <strong>1. Simple Interest</strong> and <strong>2. Compound Interest</strong>.</p>
        </div>

        <div class="card">
          <h3 class="sub-title">Simple Interest</h3>
          <p>When interest is calculated on the principal amount only, it is called <strong>Simple Interest (SI)</strong>.</p>
          <p><strong>Example:</strong> Simple interest on $₹100$ at $5\%$ per annum is $₹5$ each year. At the end of Year 1, the total amount is $₹105$. At the end of Year 2, the total amount is $₹110$, and so on.</p>
          <p>Thus, simple interest is computed on the principal amount for the full borrowing period. This chapter covers simple interest only. Compound interest is covered in the next chapter.</p>

          <!-- Conceptual SVG Diagram for Simple Interest Growth -->
          <div class="svg-box">
            <svg viewBox="0 0 540 125" width="520" aria-label="Simple Interest Linear Growth Timeline">
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#1e3a5f"/>
                </marker>
              </defs>
              <line x1="35" y1="62" x2="505" y2="62" stroke="#1e3a5f" stroke-width="2.5" marker-end="url(#arrow)" />

              <!-- Year 0 -->
              <circle cx="70" cy="62" r="6" fill="#2563eb" />
              <text x="70" y="38" font-family="sans-serif" font-size="12" font-weight="700" fill="#1e3a5f" text-anchor="middle">Start (t = 0)</text>
              <text x="70" y="88" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle">P = ₹100</text>

              <!-- +5 -->
              <path d="M 80 52 Q 140 20 200 52" fill="none" stroke="#0f766e" stroke-width="1.8" stroke-dasharray="4,3" />
              <text x="140" y="28" font-family="sans-serif" font-size="11" font-weight="700" fill="#0f766e" text-anchor="middle">+ ₹5 (5% of P)</text>

              <!-- Year 1 -->
              <circle cx="210" cy="62" r="6" fill="#2563eb" />
              <text x="210" y="88" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle">Year 1: ₹105</text>

              <!-- +5 -->
              <path d="M 220 52 Q 280 20 340 52" fill="none" stroke="#0f766e" stroke-width="1.8" stroke-dasharray="4,3" />
              <text x="280" y="28" font-family="sans-serif" font-size="11" font-weight="700" fill="#0f766e" text-anchor="middle">+ ₹5 (5% of P)</text>

              <!-- Year 2 -->
              <circle cx="350" cy="62" r="6" fill="#2563eb" />
              <text x="350" y="88" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle">Year 2: ₹110</text>

              <!-- +5 -->
              <path d="M 360 52 Q 415 20 470 52" fill="none" stroke="#0f766e" stroke-width="1.8" stroke-dasharray="4,3" />
              <text x="415" y="28" font-family="sans-serif" font-size="11" font-weight="700" fill="#0f766e" text-anchor="middle">+ ₹5</text>

              <!-- Year 3 -->
              <circle cx="480" cy="62" r="6" fill="#2563eb" />
              <text x="480" y="88" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle">Year 3: ₹115</text>
              <text x="270" y="114" font-family="sans-serif" font-size="11" fill="#475569" text-anchor="middle">Simple Interest adds the same fixed amount each year on the original Principal (P).</text>
            </svg>
          </div>
        </div>
      </div>

      <h2 class="section-title">Basic Formulae</h2>
      <div class="chapter-body">
        <p class="full-span">Let $P =$ Principal, $R =$ Rate per cent per annum, $T =$ Number of years, $I =$ Simple Interest, and $A =$ Amount.</p>

        <div class="formula-box">
          <span class="formula-num">01</span> <strong>Simple Interest</strong>
          $$\text{Simple Interest} = \frac{\text{Principal} \times \text{Rate} \times \text{Time}}{100} \quad \text{or} \quad I = \frac{P \times R \times T}{100}$$
          <div class="illustration">
            <span class="illustration-title">Illustration 1:</span> Find the simple interest on $₹5200$ for $2$ years at $6\%$ per annum.<br/>
            <strong>Solution:</strong> Here, $P = ₹5200$, $T = 2$ years, and $R = 6\%$.
            $$\therefore \text{Simple interest} = \frac{P \times R \times T}{100} = \frac{5200 \times 6 \times 2}{100} = ₹624$$
          </div>
        </div>

        <div class="formula-box">
          <span class="formula-num">02</span> <strong>Principal</strong>
          $$\text{Principal} = \frac{100 \times \text{Simple Interest}}{\text{Rate} \times \text{Time}} \quad \text{or} \quad P = \frac{100 \times I}{R \times T}$$
          <div class="illustration">
            <span class="illustration-title">Illustration 2:</span> A man earns $₹450$ as interest in $2$ years on a certain sum of money invested in a company at the rate of $12$ per cent per annum. Find the sum invested by the man in the company.<br/>
            <strong>Solution:</strong> Here, $I = ₹450$, $T = 2$ years, $R = 12\%$ per annum.
            $$\therefore P = \frac{I \times 100}{R \times T} = \frac{450 \times 100}{12 \times 2} = ₹1875$$
            Thus, the money invested by the man was $₹1875$.
          </div>
        </div>

        <div class="formula-box">
          <span class="formula-num">03</span> <strong>Rate</strong>
          $$\text{Rate} = \frac{100 \times \text{Simple Interest}}{\text{Principal} \times \text{Time}} \quad \text{or} \quad R = \frac{100 \times I}{P \times T}$$
          <div class="illustration">
            <span class="illustration-title">Illustration 3:</span> At what interest rate per annum, in $4$ years, a sum of $₹5000$ will become $₹6000$?<br/>
            <strong>Solution:</strong> Here, $P = ₹5000$, $A = ₹6000$, $T = 4$ years.<br/>
            So, $I = A - P = ₹(6000 - 5000) = ₹1000$.
            $$\therefore R = \frac{100 \times I}{P \times T} = \frac{100 \times 1000}{5000 \times 4} = 5\%$$
          </div>
        </div>

        <div class="formula-box">
          <span class="formula-num">04</span> <strong>Time</strong>
          $$\text{Time} = \frac{100 \times \text{Simple Interest}}{\text{Rate} \times \text{Principal}} \quad \text{or} \quad T = \frac{100 \times I}{R \times P}$$
          <div class="illustration">
            <span class="illustration-title">Illustration 4:</span> In what time $₹1200$ will earn an interest of $₹240$ at $5\%$ per annum?<br/>
            <strong>Solution:</strong> Here, $P = ₹1200$, $I = ₹240$, $R = 5\%$.
            $$\therefore T = \frac{100 \times I}{R \times P} = \frac{100 \times 240}{1200 \times 5} = 4\text{ years}$$
          </div>
        </div>

        <div class="formula-box">
          <span class="formula-num">05</span> <strong>Amount</strong>
          $$\text{Amount} = \text{Principal} + \text{Simple Interest} = \text{Principal} + \frac{\text{Principal} \times \text{Rate} \times \text{Time}}{100}$$
          $$= \text{Principal}\left(1 + \frac{\text{Rate} \times \text{Time}}{100}\right) \quad \text{or} \quad A = P\left(1 + \frac{R \times T}{100}\right)$$
          <div class="illustration">
            <span class="illustration-title">Illustration 5:</span> Mahesh borrowed $₹3000$ from his friend Suresh at $15$ per cent per annum for $3$ years. Find the interest and money returned by Mahesh to Suresh.<br/>
            <strong>Solution:</strong> Here, $P = ₹3000$, $R = 15\%$ per annum, $T = 3$ years.
            $$\therefore I = \frac{P \times R \times T}{100} = \frac{3000 \times 15 \times 3}{100} = ₹1350$$
            $$\therefore A = P + I = ₹3000 + ₹1350 = ₹4350$$
            Thus, Mahesh paid $₹1350$ as interest to Suresh, and the total amount Mahesh returned to Suresh $= ₹4350$.
          </div>
        </div>
      </div>

      <h2 class="section-title">Short-Cut Methods</h2>
      <div class="chapter-body">

        <!-- Shortcut 01 -->
        <div class="shortcut-box">
          <span class="shortcut-num">01</span> If a certain sum in $T$ years at $R\%$ per annum amounts to $₹A$, then the sum is:
          $$P = \frac{100 \times A}{100 + R \times T}$$
          <div class="explanation-box">
            <strong>Explanation:</strong> Let the principal be $₹x$. Then, Simple Interest $= ₹(A - x)$.
            $$A - x = \frac{x \times R \times T}{100} \Rightarrow 100A - 100x = xRT \Rightarrow (100 + RT)x = 100A \therefore x = \frac{100 \times A}{100 + R \times T}$$
          </div>
          <div class="illustration">
            <span class="illustration-title">Illustration 6:</span> What principal will amount to $₹570$ at $4\%$ per annum in $3\frac{1}{2}$ years?<br/>
            <strong>Solution:</strong> We have, $A = ₹570$, $R = 4\%$ per annum, $T = \frac{7}{2}$ years.
            $$\therefore P = \frac{100 \times A}{100 + R \times T} = \frac{100 \times 570}{100 + 4 \times 7/2} = \frac{100 \times 570}{114} = ₹500$$
            Thus, $₹500$ will become $₹570$ at $4\%$ per annum in $3\frac{1}{2}$ years.
          </div>
        </div>

        <!-- Shortcut 02 -->
        <div class="shortcut-box">
          <span class="shortcut-num">02</span> The annual payment that discharges a debt of $₹A$ due in $T$ years at $R\%$ per annum is:
          $$\text{Annual payment} = ₹\left(\frac{100A}{100T + \dfrac{RT(T-1)}{2}}\right)$$
          <div class="svg-box">
            <svg viewBox="0 0 480 95" width="460" aria-label="Annual Instalment Timeline">
              <line x1="25" y1="45" x2="455" y2="45" stroke="#7e22ce" stroke-width="2" />
              <circle cx="45" cy="45" r="5" fill="#7e22ce" />
              <text x="45" y="70" font-family="sans-serif" font-size="11" text-anchor="middle">t = 0</text>
              <circle cx="145" cy="45" r="5" fill="#7e22ce" />
              <text x="145" y="25" font-family="sans-serif" font-size="11" font-weight="700" fill="#7e22ce" text-anchor="middle">1st Pay (x)</text>
              <text x="145" y="70" font-family="sans-serif" font-size="10" fill="#475569" text-anchor="middle">Earns SI for (T-1) yrs</text>
              <circle cx="265" cy="45" r="5" fill="#7e22ce" />
              <text x="265" y="25" font-family="sans-serif" font-size="11" font-weight="700" fill="#7e22ce" text-anchor="middle">2nd Pay (x)</text>
              <text x="265" y="70" font-family="sans-serif" font-size="10" fill="#475569" text-anchor="middle">Earns SI for (T-2) yrs</text>
              <circle cx="425" cy="45" r="5" fill="#7e22ce" />
              <text x="425" y="25" font-family="sans-serif" font-size="11" font-weight="700" fill="#7e22ce" text-anchor="middle">T-th Pay (x)</text>
              <text x="425" y="70" font-family="sans-serif" font-size="10" fill="#475569" text-anchor="middle">0 yrs SI</text>
            </svg>
          </div>
          <div class="explanation-box">
            <strong>Explanation:</strong> Let the annual payment be $₹x$. Because the first instalment is paid at the end of the first year:<br/>
            Amount of the first instalment at the end of $T$ years $= x + \dfrac{(T-1) \times R \times x}{100}$.<br/>
            Similarly, amount of the second instalment at the end of $T$ years $= x + \dfrac{(T-2) \times R \times x}{100}$, and so on.<br/>
            Total amount of $T$ instalments:
            $$A = \left[x + \frac{(T-1)\times R \times x}{100}\right] + \left[x + \frac{(T-2)\times R \times x}{100}\right] + \dots + x$$
            $$= Tx + \frac{Rx}{100}\left[(T-1) + (T-2) + \dots + 1\right] = Tx + \frac{Rx}{100}\left[\frac{(T-1)\times T}{2}\right]$$
            $$\Rightarrow 100Tx + Rx\left[\frac{T(T-1)}{2}\right] = 100A \Rightarrow x\left[100T + \frac{RT(T-1)}{2}\right] = 100A \therefore x = \frac{100A}{100T + \dfrac{RT(T-1)}{2}}$$
          </div>
          <div class="illustration">
            <span class="illustration-title">Illustration 7:</span> Find out the annual instalment that will discharge a debt of $₹12,900$ due in $4$ years at $5\%$ per annum simple interest.<br/>
            <strong>Solution:</strong> Here, $A = ₹12900$, $T = 4$ years, $R = 5\%$ per annum.
            $$\therefore \text{Annual instalment} = \frac{100 \times A}{100 \times T + \dfrac{RT(T-1)}{2}} = \frac{100 \times 12900}{(100 \times 4) + \dfrac{5(4-1)\times 4}{2}} = \frac{100 \times 12900}{400 + 30} = \frac{100 \times 12900}{430} = ₹3000$$
          </div>
        </div>

        <!-- Shortcut 03 -->
        <div class="shortcut-box">
          <span class="shortcut-num">03</span> If a sum is invested in $n$ types of investments such that an equal amount is obtained on each investment, where interest rates are $R_1, R_2, R_3, \dots, R_n$ and time periods are $T_1, T_2, T_3, \dots, T_n$, then the ratio of the invested amounts is:
          $$\frac{1}{100 + R_1 T_1} : \frac{1}{100 + R_2 T_2} : \frac{1}{100 + R_3 T_3} : \dots : \frac{1}{100 + R_n T_n}$$
          <div class="explanation-box">
            <strong>Explanation:</strong> Let $P_1, P_2, \dots, P_n$ be invested in $n$ types of investments. Then:
            $$P_1 = \frac{100 \times A}{100 + R_1 T_1},\quad P_2 = \frac{100 \times A}{100 + R_2 T_2},\quad \dots,\quad P_n = \frac{100 \times A}{100 + R_n T_n}$$
            $$\therefore P_1 : P_2 : \dots : P_n = \frac{100 \times A}{100 + R_1 T_1} : \frac{100 \times A}{100 + R_2 T_2} : \dots : \frac{100 \times A}{100 + R_n T_n} = \frac{1}{100 + R_1 T_1} : \frac{1}{100 + R_2 T_2} : \dots : \frac{1}{100 + R_n T_n}$$
            [$\because$ the amount $A$ remains the same for all]
          </div>
          <div class="illustration">
            <span class="illustration-title">Illustration 8:</span> A sum of $₹1586$ is divided among three such parts that amount obtained on these three parts of money after $2$, $3$ and $4$ years, respectively, at the rate of $5\%$ per annum remains equal. Find out such three parts of the sum.<br/>
            <strong>Solution:</strong> The three parts will be in the ratio:
            $$\frac{1}{100 + R_1 T_1} : \frac{1}{100 + R_2 T_2} : \frac{1}{100 + R_3 T_3} = \frac{1}{100 + 5\times 2} : \frac{1}{100 + 5\times 3} : \frac{1}{100 + 5\times 4} = \frac{1}{110} : \frac{1}{115} : \frac{1}{120}$$
            Multiply by $\text{L.C.M.}(110, 115, 120) = 30360$:
            $$\frac{1 \times 30360}{110} : \frac{1 \times 30360}{115} : \frac{1 \times 30360}{120} \implies \text{Ratio} = 276 : 264 : 253$$
            Sum of proportionals $= 276 + 264 + 253 = 793$.
            $$\therefore \text{1st part} = \frac{276}{793} \times 1586 = ₹552, \quad \text{2nd part} = \frac{264}{793} \times 1586 = ₹528, \quad \text{3rd part} = \frac{253}{793} \times 1586 = ₹506$$
          </div>
        </div>

        <!-- Shortcut 04 -->
        <div class="shortcut-box">
          <span class="shortcut-num">04</span> If a certain sum of money becomes $n$ times itself in $T$ years at simple interest, then the rate of interest per annum is:
          $$R = \frac{100(n - 1)}{T}\%$$
          <div class="explanation-box">
            <strong>Explanation:</strong> Let $₹P$ become $₹nP$ in $T$ years. Simple interest $I = nP - P = (n - 1)P$.
            $$\therefore R = \frac{100 \times I}{P \times T} = \frac{100 \times (n - 1)P}{P \times T} = \frac{100(n - 1)}{T}$$
          </div>
          <div class="illustration">
            <span class="illustration-title">Illustration 9:</span> A certain sum of money trebles itself in $5$ years simple interest. Find the rate per cent per annum.<br/>
            <strong>Solution:</strong> Here, $n = 3$, $T = 5$ years.
            $$\therefore R = \frac{100(n - 1)}{T}\% = \frac{100(3 - 1)}{5}\% = 40\%$$
          </div>
        </div>

        <!-- Shortcut 05 -->
        <div class="shortcut-box">
          <span class="shortcut-num">05</span> If a certain sum of money becomes $n$ times itself at $R\%$ per annum simple interest in $T$ years, then:
          $$T = \left(\frac{n - 1}{R}\right) \times 100 \text{ years}$$
          <div class="illustration">
            <span class="illustration-title">Illustration 10:</span> In what time a sum of money will double itself at a rate of simple interest of $8\%$ p.a.?<br/>
            <strong>Solution:</strong>
            $$\text{Required time } (T) = \frac{(n - 1) \times 100}{R}\text{ years} = \frac{(2 - 1) \times 100}{8}\text{ years} = 12\frac{1}{2}\text{ years}$$
          </div>
        </div>

        <!-- Shortcut 06 -->
        <div class="shortcut-box">
          <span class="shortcut-num">06</span> If a certain sum of money becomes $n$ times itself in $T$ years at simple interest, then the time $T'$ in which it will become $m$ times itself is:
          $$T' = \left(\frac{m - 1}{n - 1}\right) \times T \text{ years}$$
          <div class="explanation-box">
            <strong>Explanation:</strong> Let the principal be $₹P$ and let it become $m$ times in $T'$ years. Amount in $T$ years $= ₹nP$, and in $T'$ years $= ₹mP$.
            $$\therefore (n - 1)P = \frac{P \times R \times T}{100} \;\dots(1) \qquad (m - 1)P = \frac{P \times R \times T'}{100} \;\dots(2)$$
            Dividing (2) by (1): $\dfrac{(m - 1)P}{(n - 1)P} = \dfrac{P \times R \times T'}{100} \times \dfrac{100}{P \times R \times T} \implies \dfrac{m - 1}{n - 1} = \dfrac{T'}{T} \therefore T' = \left(\dfrac{m - 1}{n - 1}\right)T\text{ years}$.
          </div>
          <div class="illustration">
            <span class="illustration-title">Illustration 11:</span> A sum of money put out on simple interest doubles itself in $12\frac{1}{2}$ years. In how many years would it treble itself?<br/>
            <strong>Solution:</strong> Here, $n = 2$, $m = 3$, $T = \frac{25}{2}$ years.
            $$\therefore \text{Required time } (T') = \left(\frac{m - 1}{n - 1}\right) \times T\text{ years} = \left(\frac{3 - 1}{2 - 1}\right) \times \frac{25}{2}\text{ years} = 25\text{ years}$$
          </div>
        </div>

        <!-- Shortcut 07 -->
        <div class="shortcut-box">
          <span class="shortcut-num">07</span> Effect of change of $P$, $R$, and $T$ on simple interest:
          $$\text{Change in Simple Interest} = \frac{\text{Product of fixed parameter}}{100} \times [\text{difference of product of variable parameters}]$$
          <ul>
            <li>If rate ($R$) changes from $R_1$ to $R_2$ and $P, T$ are fixed: $\text{Change in SI} = \dfrac{PT}{100} \times (R_1 - R_2)$</li>
            <li>If principal ($P$) changes from $P_1$ to $P_2$ and $R, T$ are fixed: $\text{Change in SI} = \dfrac{RT}{100} \times (P_1 - P_2)$</li>
            <li>If rate ($R$) changes from $R_1$ to $R_2$ and time ($T$) changes from $T_1$ to $T_2$ ($P$ fixed): $\text{Change in SI} = \dfrac{P}{100} \times (R_1 T_1 - R_2 T_2)$</li>
          </ul>
          <div class="illustration">
            <span class="illustration-title">Illustration 12:</span> If simple interest on $₹600$ increases by $₹30$, when the rate $\%$ increases by $4\%$ per annum, find out the time.<br/>
            <strong>Solution:</strong> Here, $P = 600$, change in $\text{SI} = 30$, $R_1 - R_2 = 4$, $T = ?$
            $$30 = \frac{600T}{100} \times 4 \implies T = \frac{5}{4}\text{ years, i.e., } 1\frac{1}{4}\text{ years}$$
          </div>
          <div class="illustration">
            <span class="illustration-title">Illustration 13:</span> If the simple interest on $₹1400$ be more than the interest on $₹1000$ by $₹60$ in $5$ years, find out the rate per cent per annum.<br/>
            <strong>Solution:</strong> Here, change in $\text{SI} = 60$, $P_1 - P_2 = 400$, $T = 5$, $R = ?$
            $$60 = \frac{5R}{100} \times 400 \implies R = 3\%$$
          </div>
          <div class="illustration">
            <span class="illustration-title">Illustration 14:</span> If the simple interest on a certain sum at $4\%$ per annum for $4$ years is $₹80$ more than the interest on the same sum for $3$ years at $5\%$ per annum, find out the sum.<br/>
            <strong>Solution:</strong> Here, change in $\text{SI} = 80$, $R_1 = 4$, $R_2 = 5$, $T_1 = 4$, $T_2 = 3$, $P = ?$
            $$80 = \frac{P}{100} \times (4 \times 4 - 5 \times 3) \implies P = ₹8000$$
          </div>
        </div>

        <!-- Shortcut 08 -->
        <div class="shortcut-box">
          <span class="shortcut-num">08</span> If a debt of $₹Z$ is paid in '$n$' number of instalments and the value of each instalment is $₹a$, then the borrowed (debt) amount is:
          $$Z = na + \frac{Ra}{100 \times b} \times \frac{n(n - 1)}{2}$$
          where $R =$ rate of interest per annum, and $b =$ number of instalments/year:
          <ul>
            <li>$b = 1$, when each instalment is paid yearly</li>
            <li>$b = 2$, when each instalment is paid half-yearly</li>
            <li>$b = 4$, when each instalment is paid quarterly</li>
            <li>$b = 12$, when each instalment is paid monthly</li>
          </ul>
          <div class="illustration">
            <span class="illustration-title">Illustration 15:</span> A sum of $₹2$ is lent to be paid back in $3$ equal monthly instalments of $₹1$ each. Find the rate per cent.<br/>
            <strong>Solution:</strong> Here, $Z = ₹2$, $a = ₹1$, $n = 3$, $b = 12$, $R = ?$
            $$2 = 3 \times 1 + \frac{R \times 1}{100 \times 12} \times \frac{3 \times 2}{2} \implies R = 400\%$$
            $\therefore$ The rate $\%$ p.a. is $400\%$.
          </div>
        </div>

        <!-- Shortcut 09 -->
        <div class="shortcut-box">
          <span class="shortcut-num">09</span> If a certain sum of money $P$ lent out at SI amounts to $A_1$ in $T_1$ years and to $A_2$ in $T_2$ years, then:
          $$P = \frac{A_1 T_2 - A_2 T_1}{T_2 - T_1} \qquad \text{and} \qquad R = \frac{A_2 - A_1}{T_1 A_2 - T_2 A_1} \times 100\%$$
          <div class="illustration">
            <span class="illustration-title">Illustration 16:</span> If a certain sum of money at simple interest amounts to $₹5184$ in $2$ years and to $₹5832$ in $3$ years, what is the sum and the rate of interest?<br/>
            <strong>Solution:</strong> Here, $A_1 = 5184$, $A_2 = 5832$, $T_1 = 2$, $T_2 = 3$.
            $$\text{Principal} = \frac{A_1 T_2 - A_2 T_1}{T_2 - T_1} = \frac{5184 \times 3 - 5832 \times 2}{3 - 2} = ₹3888$$
            $$\text{Rate} = \frac{(A_2 - A_1) \times 100}{T_1 A_2 - T_2 A_1} = \frac{(5832 - 5184) \times 100}{2 \times 5832 - 3 \times 5184} = \frac{64800}{3888} = 16\frac{2}{3}\%$$
          </div>
        </div>

        <!-- Shortcut 10 -->
        <div class="shortcut-box">
          <span class="shortcut-num">10</span> If a certain sum of money $P$ lent out for a certain time $T$ amounts to $A_1$ at $R_1\%$ per annum and to $A_2$ at $R_2\%$ per annum, then:
          $$P = \frac{A_2 R_1 - A_1 R_2}{R_1 - R_2} \qquad \text{and} \qquad T = \frac{A_1 - A_2}{A_2 R_1 - A_1 R_2} \times 100 \text{ years}$$
          <div class="illustration">
            <span class="illustration-title">Illustration 17:</span> A certain sum is invested for certain time. It amounts to $₹450$ at $7\%$ per annum. But, when invested at $5\%$ per annum, it amounts to $₹350$. Find out the sum and time.<br/>
            <strong>Solution:</strong> Here, $A_1 = 450$, $R_1 = 7$, $A_2 = 350$, $R_2 = 5$.
            $$P = \frac{A_2 R_1 - A_1 R_2}{R_1 - R_2} = \frac{350 \times 7 - 450 \times 5}{7 - 5} = ₹100$$
            $$T = \left(\frac{A_1 - A_2}{A_2 R_1 - A_1 R_2}\right) \times 100 = \left(\frac{450 - 350}{350 \times 7 - 450 \times 5}\right) \times 100 = 5\text{ years}$$
          </div>
        </div>

        <!-- Shortcut 11 -->
        <div class="shortcut-box">
          <span class="shortcut-num">11</span> If an amount $P_1$ is lent at simple interest rate $R_1\%$ per annum, and another amount $P_2$ at simple interest rate $R_2\%$ per annum, then the rate of interest for the whole sum is:
          $$R = \left(\frac{P_1 R_1 + P_2 R_2}{P_1 + P_2}\right)$$
          <div class="illustration">
            <span class="illustration-title">Illustration 18:</span> Mohan deposits $₹5000$ in NSC at $2\%$ per annum and $₹2000$ in mutual funds at $4\%$ per annum. Find out the rate of interest for the whole sum.<br/>
            <strong>Solution:</strong> Here, $P_1 = 5000$, $R_1 = 2$, $P_2 = 2000$, $R_2 = 4$.
            $$R = \frac{5000 \times 2 + 2000 \times 4}{5000 + 2000} = 2\frac{4}{7}\%$$
          </div>
        </div>

        <!-- Shortcut 12 -->
        <div class="shortcut-box">
          <span class="shortcut-num">12</span> If a sum of money is lent out in $n$ parts such that equal simple interest is obtained on each part, where rates are $R_1, R_2, \dots, R_n$ and time periods are $T_1, T_2, \dots, T_n$, then the ratio of the $n$ parts is:
          $$\frac{1}{R_1 T_1} : \frac{1}{R_2 T_2} : \dots : \frac{1}{R_n T_n}$$
          <div class="explanation-box">
            <strong>Explanation:</strong> Let the $n$ parts be $P_1, P_2, \dots, P_n$, and let $I$ be the equal interest earned on each part.
            $$P_1 = \frac{I \times 100}{R_1 T_1},\quad P_2 = \frac{I \times 100}{R_2 T_2},\quad \dots,\quad P_n = \frac{I \times 100}{R_n T_n}$$
            $$\therefore P_1 : P_2 : \dots : P_n = \frac{I \times 100}{R_1 T_1} : \frac{I \times 100}{R_2 T_2} : \dots : \frac{I \times 100}{R_n T_n} = \frac{1}{R_1 T_1} : \frac{1}{R_2 T_2} : \dots : \frac{1}{R_n T_n}$$
          </div>
          <div class="illustration">
            <span class="illustration-title">Illustration 19:</span> If a sum of $₹1600$ is divided into two such parts that the simple interest on the first part for $2\frac{1}{2}$ years at the rate of $4\%$ p.a. equals the simple interest on the second part for $5$ years at the rate of $3\%$ p.a., then find two such divisions of the sum.<br/>
            <strong>Solution:</strong> Here, $R_1 = 4\%$ p.a., $T_1 = \frac{5}{2}$ years, $R_2 = 3\%$ p.a., $T_2 = 5$ years.
            $$\text{1st part} : \text{2nd part} = \frac{1}{4 \times \frac{5}{2}} : \frac{1}{3 \times 5} = \frac{1}{10} : \frac{1}{15} = 3 : 2$$
            Sum of proportionals $= 3 + 2 = 5$.
            $$\therefore \text{1st part} = \frac{3}{5} \times 1600 = ₹96 \text{ [Source print typo; exact value: } ₹960\text{]}, \quad \text{2nd part} = \frac{2}{5} \times 1600 = ₹640$$
          </div>
        </div>

        <!-- Shortcut 13 -->
        <div class="shortcut-box">
          <span class="shortcut-num">13</span> When Principal ($P$), Rate ($R$), and Time ($T$) change, the simple interest $I$ changes as:
          $$\frac{I_1}{I_2} = \frac{P_1 \times R_1 \times T_1}{P_2 \times R_2 \times T_2} \implies \frac{A_1 - P_1}{A_2 - P_2} = \frac{P_1 \times R_1 \times T_1}{P_2 \times R_2 \times T_2}$$
          as $I_1 = A_1 - P_1$ and $I_2 = A_2 - P_2$.
          <div class="illustration">
            <span class="illustration-title">Illustration 20:</span> If $₹85$ amounts to $₹95$ in $3$ years, what $₹102$ will amount to in $5$ years at the same rate per cent?<br/>
            <strong>Solution:</strong> Here, $P_1 = ₹85$, $A_1 = ₹95$, $T_1 = 3$ years, $P_2 = ₹102$, $T_2 = 5$ years, $R_1 = R_2 = R$ (say).
            $$\frac{95 - 85}{A_2 - 102} = \frac{85 \times R \times 3}{102 \times R \times 5} \implies A_2 - 102 = 20 \implies A_2 = 122$$
            $\therefore$ The amount is $₹122$.
          </div>
        </div>

        <!-- Shortcut 14 -->
        <div class="shortcut-box">
          <span class="shortcut-num">14</span> Out of a certain sum $P$, $\dfrac{1}{a}$ part is invested at $R_1\%$, $\dfrac{1}{b}$ part at $R_2\%$, and the remainder $\left(1 - \dfrac{1}{a} - \dfrac{1}{b}\right)$ say $\dfrac{1}{c}$ part at $R_3\%$. If the annual income from all these investments is $₹A$, then the original sum is:
          $$P = \left(\frac{A \times 100}{\dfrac{R_1}{a} + \dfrac{R_2}{b} + \dfrac{R_3}{c}}\right)$$
          <div class="illustration">
            <span class="illustration-title">Illustration 21:</span> Out of a certain sum, $\frac{1}{3}$ is invested at $3\%$, $\frac{1}{6}$ at $6\%$ and the rest at $8\%$. If the annual income is $₹300$, then the original sum is:<br/>
            <strong>Solution:</strong> Here, $\frac{1}{a} = \frac{1}{3}$, $\frac{1}{b} = \frac{1}{6}$, $\frac{1}{c} = 1 - \left(\frac{1}{3} + \frac{1}{6}\right) = \frac{1}{2}$, $R_1 = 3\%$, $R_2 = 6\%$, $R_3 = 8\%$, $A = ₹300$.
            $$\therefore \text{The original sum} = \frac{A \times 100}{\dfrac{R_1}{a} + \dfrac{R_2}{b} + \dfrac{R_3}{c}} = \frac{300 \times 100}{\dfrac{3}{3} + \dfrac{6}{6} + \dfrac{8}{2}} = \frac{30000}{6} = ₹5000$$
          </div>
        </div>

      </div>

      <!-- ======================================================= -->
      <!-- EXERCISE 1                                              -->
      <!-- ======================================================= -->
      <h2 class="section-title">Exercise-1</h2>
      <div class="chapter-body">

        <div class="question-item">
          <div class="q-text"><span class="q-num">1.</span> The simple interest on $₹500$ at $6\%$ per annum from May 3rd to July 15th in the same year is:</div>
          <div class="options-grid"><div>(a) $₹9$</div><div>(b) $₹6$</div><div>(c) $₹4$</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">2.</span> Mr Irani borrowed a sum of $₹10000$ from a finance company for $6$ years at $8\%$ per annum. The amount returned by Mr Irani to the finance company is:</div>
          <div class="options-grid"><div>(a) $₹14800$</div><div>(b) $₹12600$</div><div>(c) $₹13300$</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">3.</span> The principal that will yield $₹60$ as simple interest at $6\%$ per annum in $5$ years is:</div>
          <div class="options-grid"><div>(a) $₹175$</div><div>(b) $₹350$</div><div>(c) $₹200$</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">4.</span> The sum of money that will produce $₹1770$ interest in $7\frac{1}{2}$ years at $8\%$ simple interest per annum is:</div>
          <div class="options-grid"><div>(a) $₹2950$</div><div>(b) $₹3120$</div><div>(c) $₹2800$</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">5.</span> If the simple interest on a certain sum of money after $6\frac{1}{4}$ years is $3/8$ of the principal, then the rate of interest per annum is:</div>
          <div class="options-grid"><div>(a) $5\%$</div><div>(b) $6\%$</div><div>(c) $4\%$</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">6.</span> Rakesh borrowed $₹5000$ from Ganesh at simple interest. If Ganesh received $₹500$ more than his capital after $5$ years, then the rate of interest per annum is:</div>
          <div class="options-grid"><div>(a) $2\%$</div><div>(b) $3\%$</div><div>(c) $4\%$</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">7.</span> The rate per cent per annum at which $₹1200$ amount to $₹1440$ in $4$ years, is:</div>
          <div class="options-grid"><div>(a) $5\%$</div><div>(b) $4\%$</div><div>(c) $6\%$</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">8.</span> If simple interest on a certain sum of money is $₹256$ and the rate of interest per annum equals the number of years, then the rate of interest is:</div>
          <div class="options-grid"><div>(a) $13\%$</div><div>(b) $14\%$</div><div>(c) $16\%$</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">9.</span> If the simple interest on a certain sum of money for $2$ years is one-fifth of the sum, then the rate of interest per annum is:</div>
          <div class="options-grid"><div>(a) $9\%$</div><div>(b) $10\%$</div><div>(c) $8\%$</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">10.</span> If the simple interest on a certain sum of money is $\dfrac{4}{25}$ of the sum and the rate per cent equals the number of years, then the rate of interest per annum is:</div>
          <div class="options-grid"><div>(a) $2\%$</div><div>(b) $3\%$</div><div>(c) $4\%$</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">11.</span> If a certain sum of money borrowed at $5\%$ per annum simple interest amounts to $₹1020$ in $4$ years, then the sum of money borrowed is:</div>
          <div class="options-grid"><div>(a) $₹850$</div><div>(b) $₹925$</div><div>(c) $₹750$</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">12.</span> In what time $₹1200$ will become $₹1344$ at $6\%$ per annum?</div>
          <div class="options-grid"><div>(a) $2\frac{1}{2}$ years</div><div>(b) $3$ years</div><div>(c) $2$ years</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">13.</span> In what time $₹8100$ will produce the same income at $3\%$ as $₹225$ in $4$ years at $3\%$.</div>
          <div class="options-grid"><div>(a) $\frac{1}{7}$ years</div><div>(b) $\frac{1}{9}$ years</div><div>(c) $\frac{1}{6}$ years</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">14.</span> If $₹1000$ be invested at interest rate of $5\%$ and the interest be added to the principal every $10$ years, then the number of years in which it will amount to $₹2000$ is:</div>
          <div class="options-grid"><div>(a) $16\frac{2}{3}$ years</div><div>(b) $16\frac{1}{4}$ years</div><div>(c) $16$ years</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">15.</span> If $₹500$ amounts to $₹725$ at $9\%$ simple interest in some time, what will $₹600$ amount to at $11\%$ in the same time?</div>
          <div class="options-grid"><div>(a) $₹870$</div><div>(b) $₹930$</div><div>(c) $₹910$</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">16.</span> Sumit lends $₹10000$ for $2$ years at $20\%$ per annum simple interest. After $1$ year, he receives $₹6000$. How much will he receive next year?</div>
          <div class="options-grid"><div>(a) $₹5900$</div><div>(b) $₹6400$</div><div>(c) $₹7200$</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">17.</span> What principal will amount to $₹15000$ at $10\%$ per annum in $5$ years?</div>
          <div class="options-grid"><div>(a) $₹10000$</div><div>(b) $₹8700$</div><div>(c) $₹10500$</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">18.</span> The annual payment that will discharge a debt of $₹47250$ due $3$ years, hence at the rate of $5\%$ simple interest is:</div>
          <div class="options-grid"><div>(a) $₹8000$</div><div>(b) $₹10000$</div><div>(c) $₹15000$</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">19.</span> The annual instalment that will discharge a debt of $₹4200$ due in $5$ years at $10\%$ simple interest is:</div>
          <div class="options-grid"><div>(a) $₹700$</div><div>(b) $₹750$</div><div>(c) $₹800$</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">20.</span> If the amount obtained by Mahesh by investing $₹1500$ for $2\frac{1}{2}$ years at the rate of $8\%$ p.a. is equal to the amount obtained by Suresh by investing a certain sum for $2$ years at $5\%$ p.a. simple interest, then the sum invested by Suresh is:</div>
          <div class="options-grid"><div>(a) $₹1636\frac{4}{11}$</div><div>(b) $₹1636$</div><div>(c) $₹1636\frac{1}{2}$</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">21.</span> A man invests $₹3965$ in the names of his three daughters, Neeta, Sita and Gita in such a way that they would receive the same amount after $2$, $3$ and $4$ years. If the rate of interest is $5\%$ p.a., then the amount invested for Neeta, Sita and Gita is:</div>
          <div class="options-grid">
            <div>(a) $₹1380$, $₹1320$, $₹1265$</div>
            <div>(b) $₹1330$, $₹1360$, $₹1380$</div>
            <div>(c) $₹1265$, $₹1320$, $₹1340$</div>
            <div>(d) None of these</div>
          </div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">22.</span> A sum of money at simple interest becomes four times in $24$ years. The rate per cent of interest per annum is:</div>
          <div class="options-grid"><div>(a) $13\frac{3}{4}\%$</div><div>(b) $12\frac{1}{2}\%$</div><div>(c) $11\frac{3}{4}\%$</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">23.</span> In how many years will a sum of money treble itself at $10\%$ per annum simple interest?</div>
          <div class="options-grid"><div>(a) $15$ years</div><div>(b) $19$ years</div><div>(c) $20$ years</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">24.</span> A sum of money doubles itself in $8$ years. In how many years will it treble?</div>
          <div class="options-grid"><div>(a) $16$ years</div><div>(b) $15$ years</div><div>(c) $14$ years</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">25.</span> A sum was put at simple interest at a certain rate for $4$ years. Had it been put at $2\%$ higher rate, it would have fetched $₹56$ more. Find the sum.</div>
          <div class="options-grid"><div>(a) $₹680$</div><div>(b) $₹700$</div><div>(c) $₹720$</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">26.</span> If the interest on $₹800$ be more than the interest on $₹400$ by $₹40$ in $2$ years, then the rate of interest per annum is:</div>
          <div class="options-grid"><div>(a) $5\%$</div><div>(b) $5\frac{1}{2}\%$</div><div>(c) $6\%$</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">27.</span> If the difference between the simple interest on a certain sum for $4$ years at $2\frac{1}{2}\%$ per annum and the simple interest on the same sum for the same period at $3\%$ per annum is $₹60$, then the sum is:</div>
          <div class="options-grid"><div>(a) $₹3000$</div><div>(b) $₹2900$</div><div>(c) $₹3100$</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">28.</span> If a certain sum of money at simple interest amounts to $₹2800$ in $2$ years and $₹3250$ in $5$ years, then the rate of interest per annum is:</div>
          <div class="options-grid"><div>(a) $4\%$</div><div>(b) $6\%$</div><div>(c) $5\%$</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">29.</span> If a certain sum of money amounts to $₹1760$ in two years and $₹2000$ in $5$ years at simple interest, then the sum is:</div>
          <div class="options-grid"><div>(a) $₹1960$</div><div>(b) $₹1590$</div><div>(c) $₹1600$</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">30.</span> A certain sum is invested for certain time. It amounts to $₹450$ at $7\%$ per annum. But when invested at $5\%$ per annum, it amounts to $₹350$. Find the sum.</div>
          <div class="options-grid"><div>(a) $₹60$</div><div>(b) $₹100$</div><div>(c) $₹120$</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">31.</span> A certain sum is invested for $T$ years. It amounts to $₹400$ at $10\%$ per annum. But, when invested at $4\%$ per annum, it amounts to $₹200$. Find the time ($T$).</div>
          <div class="options-grid"><div>(a) $41$ years</div><div>(b) $39$ years</div><div>(c) $50$ years</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">32.</span> If a sum of $₹9$ is lent to be paid back in $10$ equal monthly instalments of $₹1$ each, then the rate of interest is:</div>
          <div class="options-grid"><div>(a) $266\frac{2}{3}\%$</div><div>(b) $265\frac{3}{4}\%$</div><div>(c) $266\%$</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">33.</span> A sum of $₹7700$ is to be divided among three brothers Vikas, Vijay and Viraj in such a way that simple interest on each part at $5\%$ per annum after $1$, $2$ and $3$ years, remains equal. The share of Vikas is more than that of Viraj by:</div>
          <div class="options-grid"><div>(a) $₹2800$</div><div>(b) $₹2500$</div><div>(c) $₹3000$</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">34.</span> If simple interest on a certain sum of money for $4$ years at $5\%$ p.a. is same as the simple interest on $₹560$ for $10$ years at the rate of $4\%$ p.a., then the sum of money is:</div>
          <div class="options-grid"><div>(a) $₹1190$</div><div>(b) $₹1120$</div><div>(c) $₹1210$</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">35.</span> Mr Mani invested an amount of $₹12000$ at a simple interest rate of $10\%$ per annum and another amount at a simple interest rate of $20\%$ per annum. The total interest earned at the end of one year on the total amount invested became $14\%$ per annum. Find the total amount invested.</div>
          <div class="options-grid"><div>(a) $₹20000$</div><div>(b) $₹20800$</div><div>(c) $₹21000$</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">36.</span> Mr Gupta deposits $₹3000$ in a bank at $10\%$ per annum and $₹5000$ in another bank at $8\%$ per annum. The rate of interest for the whole sum is:</div>
          <div class="options-grid"><div>(a) $8\frac{1}{2}\%$</div><div>(b) $8\frac{3}{4}\%$</div><div>(c) $8\%$</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">37.</span> A person invested $\frac{2}{3}$ of his capital at $3\%$, $\frac{1}{6}$ at $6\%$ and the remainder at $12\%$. If his annual income is $₹25$, then the capital is:</div>
          <div class="options-grid"><div>(a) $₹490$</div><div>(b) $₹510$</div><div>(c) $₹500$</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">38.</span> The simple interest on a sum of money will be $₹600$ after $10$ years. If the principal is trebled after $5$ years, then what will be the total interest at the end of the tenth year?</div>
          <div class="options-grid"><div>(a) $₹1200$</div><div>(b) $₹1190$</div><div>(c) $₹1210$</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">39.</span> $₹1500$ is invested at a rate of $10\%$ simple interest and interest is added to the principal after every $5$ years. In how many years will it amount to $₹2500$.</div>
          <div class="options-grid"><div>(a) $6\frac{1}{9}$ years</div><div>(b) $6\frac{1}{4}$ years</div><div>(c) $7$ years</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">40.</span> Sumit lent some money to Mohit at $5\%$ per annum simple interest. Mohit lent the entire amount to Birju on the same day at $8\frac{1}{2}\%$ per annum. In this transaction, after a year Mohit earned a profit of $₹350$. Find out the sum of money lent by Sumit to Mohit.</div>
          <div class="options-grid"><div>(a) $₹9000$</div><div>(b) $₹10000$</div><div>(c) $₹10200$</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">41.</span> Brinda borrowed $₹1000$ to build a hut. She pays $5\%$ simple interest. She lets the hut to Ramu and receives a rent of $₹12\frac{1}{2}$ per month from Ramu. In how many years Brinda would clear off the debt?</div>
          <div class="options-grid"><div>(a) $10$ years</div><div>(b) $10\frac{1}{4}$ years</div><div>(c) $10\frac{1}{2}$ years</div><div>(d) None of these</div></div>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">42.</span> The rate of interest on a sum of money is $4\%$ per annum for the first $2$ years, $6\%$ per annum for the next $4$ years, and $8\%$ per annum for the period beyond $6$ years. If the simple interest accrued by the sum for a total period of $9$ years is $₹1120$, then the sum is:</div>
          <div class="options-grid"><div>(a) $₹2400$</div><div>(b) $₹2200$</div><div>(c) $₹2000$</div><div>(d) None of these</div></div>
        </div>

      </div>

      <!-- ======================================================= -->
      <!-- EXERCISE 2 (BASED ON MEMORY)                            -->
      <!-- ======================================================= -->
      <h2 class="section-title">Exercise-2 (Based on Memory)</h2>
      <div class="chapter-body">

        <div class="question-item">
          <div class="q-text"><span class="q-num">1.</span> The simple interest on a sum for $8$ years is $₹47500$. The rate of $10\%$ per annum and for the next $3$ years is $15\%$ per annum. What is the value (in $₹$) of sum?</div>
          <div class="options-grid"><div>(a) $50000$</div><div>(b) $60000$</div><div>(c) $45000$</div><div>(d) $62500$</div></div>
          <span class="exam-tag">[SSC CHSL (10+2) Tier-I CBE, 2018]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">2.</span> A sum of $₹8000$ is divided into two parts. The simple interest on first part at the rate of $21\%$ per annum is equal to the simple interest on second part at the rate of $35\%$ per annum. What is the interest (in $₹$) of each part?</div>
          <div class="options-grid"><div>(a) $1050$</div><div>(b) $840$</div><div>(c) $1400$</div><div>(d) $1220$</div></div>
          <span class="exam-tag">[SSC CHSL (10+2) Tier-I CBE, 2018]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">3.</span> An investor invested his saving in the stock market. The value of his investments increased by $12\%$ and $9\%$ in the first year and the second year respectively. If the value of his investments after two years became $₹97,664$ then how much had he invested (in $₹$)?</div>
          <div class="options-grid"><div>(a) $81000$</div><div>(b) $75000$</div><div>(c) $80000$</div><div>(d) $72000$</div></div>
          <span class="exam-tag">[SSC CGL Tier-II CBE, 2018]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">4.</span> In how much time (in years) will a sum of $₹9500$ amounts to $₹17622.5$ at the rate of $4.5\%$ per annum at simple interest?</div>
          <div class="options-grid"><div>(a) $21$</div><div>(b) $23$</div><div>(c) $19$</div><div>(d) $20$</div></div>
          <span class="exam-tag">[SSC Delhi Police Constable, 2017]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">5.</span> Dalajit lent $₹10800$ to Jaabir for $3$ years and $₹7500$ to kabir for $2$ years on simple interest and received $₹1422$ in all from both of them as interest. The rate of interest per annum is</div>
          <div class="options-grid"><div>(a) $3.5$ per cent</div><div>(b) $4$ per cent</div><div>(c) $3$ per cent</div><div>(d) $4.5$ per cent</div></div>
          <span class="exam-tag">[SSC CGL Tier-I CBE, 2017]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">6.</span> Deepak lent $₹8800$ to Jaichand for $13$ years on simple interest at the same rate of interest and received $₹14432$ in all from both of them as interest. The rate of interest per annum is</div>
          <div class="options-grid"><div>(a) $8.5$ per cent</div><div>(b) $9$ per cent</div><div>(c) $9.5$ per cent</div><div>(d) $8$ per cent</div></div>
          <span class="exam-tag">[SSC CGL Tier-I CBE, 2017]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">7.</span> A sum was doubled with $12\frac{1}{2}\%$ rate of simple interest, per annum. Then taken for that sum is:</div>
          <div class="options-grid"><div>(a) $8\frac{1}{2}$ years</div><div>(b) $8$ years</div><div>(c) $10$ years</div><div>(d) $12\frac{1}{2}$ years</div></div>
          <span class="exam-tag">[SSC Matric Level MTS, 2017]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">8.</span> What is the simple interest on $₹5400$ in $5$ years at the rate of $12\%$ per annum?</div>
          <div class="options-grid"><div>(a) $₹2700$</div><div>(b) $₹2950$</div><div>(c) $₹3120$</div><div>(d) $₹3240$</div></div>
          <span class="exam-tag">[SSC CAPFs ASI and Delhi Police SI, 2017]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">9.</span> A certain sum becomes $₹1020$ in $5$ years and $₹1200$ in B years [8 years] at simple interest. What is the value of Principal?</div>
          <div class="options-grid"><div>(a) $₹820$</div><div>(b) $₹780$</div><div>(c) $₹700$</div><div>(d) $₹720$</div></div>
          <span class="exam-tag">[SSC CAPFs ASI and Delhi Police SI, 2017]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">10.</span> A certain sum becomes $5$ times in $3$ years, at simple interest, then in how many years it will become $13$ times?</div>
          <div class="options-grid"><div>(a) $6$</div><div>(b) $15$</div><div>(c) $9$</div><div>(d) $12$</div></div>
          <span class="exam-tag">[SSC CAPFs ASI and Delhi Police SI, 2017]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">11.</span> A certain sum of money amounts to $₹918$ in $2$ years and $₹969$ in $3.5$ years at simple interest, What is the rate of interest (in $\%$ per annum)?</div>
          <div class="options-grid"><div>(a) $4$</div><div>(b) $5$</div><div>(c) $6$</div><div>(d) $8$</div></div>
          <span class="exam-tag">[SSC CGL Tier-I CBE, 2017]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">12.</span> Simple interest received by a person in $10$ years on a principal of $₹9500$ is $130\%$ of the principal. What is the rate of interest (in $\%$) per annum?</div>
          <div class="options-grid"><div>(a) $12$</div><div>(b) $13$</div><div>(c) $15$</div><div>(d) $19$</div></div>
          <span class="exam-tag">[SSC CGL Tier-I CBE, 2017]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">13.</span> An amount fetched a total simple interest of $₹3200$ at the rate of $6.25\%$ per year in $4$ years. What is the amount (in $₹$)?</div>
          <div class="options-grid"><div>(a) $13800$</div><div>(b) $11800$</div><div>(c) $12800$</div><div>(d) $14800$</div></div>
          <span class="exam-tag">[SSC CGL Tier-I CBE, 2017]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">14.</span> The effective annual rate of interest corresponding to a nominal rate of $13\%$ per annum payable half-yearly is</div>
          <div class="options-grid"><div>(a) $26\%$</div><div>(b) $26.85\%$</div><div>(c) $13\%$</div><div>(d) $13.42\%$</div></div>
          <span class="exam-tag">[SSC CHSL (10+2) Tier-I CBE, 2017]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">15.</span> A person lent $₹10000$ to B for $3$ years and $₹6000$ to C for $4$ years on simple interest at same rate of interest and received $₹5400$ in all from both of them as interest. What is the rate of the interest (in $\%$)?</div>
          <div class="options-grid"><div>(a) $10$</div><div>(b) $12.5$</div><div>(c) $15$</div><div>(d) $20$</div></div>
          <span class="exam-tag">[SSC CHSL (10+2) Tier-I CBE, 2017]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">16.</span> Albert invested an amount of $x$ rupees in a fixed deposit scheme offering $10\%$ per annum for $1^{\text{st}}$ Year and $15\%$ per annum for $2^{\text{nd}}$ year and received an amount of $₹20,240$ after two years. What is $x$ (in $₹$)?</div>
          <div class="options-grid"><div>(a) $15000$</div><div>(b) $16000$</div><div>(c) $14000$</div><div>(d) $18000$</div></div>
          <span class="exam-tag">[SSC CGL Tier-I CBE, 2017]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">17.</span> Alipta got some amount of money from her father. In how many years will the ratio of the money and the interest obtained from it be $10:3$ at the rate of $6\%$ simple interest per annum?</div>
          <div class="options-grid"><div>(a) $7$ years</div><div>(b) $3$ years</div><div>(c) $5$ years</div><div>(d) $4$ years</div></div>
          <span class="exam-tag">[SSC CGL Tier-I (CBE), 2016]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">18.</span> The simple interest on a certain sum of money at the rate of $5\%$ per annum for $8$ years is $₹840$. Rate of interest for which the same amount of interest can be received on the same sum, after $5$ years is:</div>
          <div class="options-grid"><div>(a) $7\%$ per annum</div><div>(b) $8\%$ per annum</div><div>(c) $9\%$ per annum</div><div>(d) $10\%$ per annum</div></div>
          <span class="exam-tag">[SSC CHSL (10+2) Tier-I (CBE), 2016]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">19.</span> A sum of $₹2800$ is divided into two parts in such a way that the interest on both the parts is equal. If the first part is lent at $9\%$ p.a. for $5$ years and second part is for $6$ years at $10\%$ p.a. [printed as 9.a.], find the two sums.</div>
          <div class="options-grid"><div>(a) $₹1800$, $₹1000$</div><div>(b) $₹1600$, $₹1200$</div><div>(c) $₹1400$, $₹1400$</div><div>(d) $₹1300$, $₹1500$</div></div>
          <span class="exam-tag">[SSC CAPFs (CPO) SI and ASI, Delhi Police, 2016]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">20.</span> If the simple interest of $₹1$ for month is paisa [1 month is 1 paisa], then the rate per cent per annum will be</div>
          <div class="options-grid"><div>(a) $10\%$</div><div>(b) $8\%$</div><div>(c) $12\%$</div><div>(d) $6\%$</div></div>
          <span class="exam-tag">[SSC CGL Tier-I (CBE), 2016]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">21.</span> In simple interest rate per annum a certain sum amounts to $₹5,182$ in $2$ years and $₹5,832$ in $3$ years. The principal rupees is</div>
          <div class="options-grid"><div>(a) $₹2882$</div><div>(b) $₹5000$</div><div>(c) $₹3882$</div><div>(d) $₹4000$</div></div>
          <span class="exam-tag">[SSC CGL Tier-I (CBE), 2016]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">22.</span> For what sum will the simple interest at $R\%$ per annum for $2$ years will be $R$?</div>
          <div class="options-grid"><div>(a) $₹\dfrac{100}{2R}$</div><div>(b) $₹50$</div><div>(c) $₹\dfrac{100}{R}$</div><div>(d) $₹\dfrac{200}{R}$</div></div>
          <span class="exam-tag">[SSC CGL Tier-I (CBE), 2016]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">23.</span> A certain sum doubles in $7$ years at simple interest. The same sum under the same interest rate will become $4$ times in how many years.</div>
          <div class="options-grid"><div>(a) $14$</div><div>(b) $28$</div><div>(c) $21$</div><div>(d) $10$</div></div>
          <span class="exam-tag">[SSC CPO SI, ASI, 2016]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">24.</span> A certain sum of money amounts to $₹2200$ at $5\%$ p.a. rate of interest, $₹2320$ at $8\%$ interest in the same period of time, The period of time is:</div>
          <div class="options-grid"><div>(a) $3$ years</div><div>(b) $4$ years</div><div>(c) $5$ years</div><div>(d) $2$ years</div></div>
          <span class="exam-tag">[SSC CAPFs (CPO) SI and ASI, Delhi Police, 2016]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">25.</span> At what per cent of simple interest will a sum of money double itself in $15$ years?</div>
          <div class="options-grid"><div>(1) $6\frac{1}{3}\%$</div><div>(2) $6\frac{2}{3}\%$</div><div>(3) $6\frac{1}{2}\%$</div><div>(4) $6\%$</div></div>
          <span class="exam-tag">[SSC CGL Tier-I (CBE), 2016]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">26.</span> The rate of simple interest for which a sum money becomes $5$ times of itself in $8$ years is:</div>
          <div class="options-grid"><div>(a) $30\%$</div><div>(b) $40\%$</div><div>(c) $50\%$</div><div>(d) $55\%$</div></div>
          <span class="exam-tag">[SSC CGL Tier-I (CBE), 2016]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">27.</span> If a borrowed $₹P$ at $x\%$ and B borrowed $₹Q$ ($&gt; P$) at $y\%$ per annum at simple interest at the same time, then the amount of their debts will be equal after</div>
          <div class="options-grid">
            <div>(a) $100\left(\dfrac{Q - P}{Px - Qy}\right)$ years</div>
            <div>(b) $100\left(\dfrac{Px - Qy}{Q - P}\right)$ years</div>
            <div>(c) $100\left(\dfrac{Px - Qy}{P - Q}\right)$ years</div>
            <div>(d) $100\left(\dfrac{P - Q}{Px - Qy}\right)$ years</div>
          </div>
          <span class="exam-tag">[SSC CGL Tier-II, 2016]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">28.</span> A money lender claims to lend money at the rate of $10\%$ per annum simple interest, However, he takes the interest in advance when he lends a sum for one year. At what interest rate does he lend the money actually?</div>
          <div class="options-grid"><div>(a) $10\%$</div><div>(b) $10\frac{1}{9}\%$</div><div>(c) $11\%$</div><div>(d) $11\frac{1}{9}\%$</div></div>
          <span class="exam-tag">[SSC CPO SI, ASI, 2016]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">29.</span> A man buys a watch for $₹1950$ in cash and sells it for $₹2200$ at a credit of $1$ year. If the rate of interest be $10\%$ per annum, then how much profit or loss will he have?</div>
          <div class="options-grid"><div>(a) $₹55$ gain</div><div>(b) $₹50$ Profit</div><div>(b) [c] $₹30$ gain</div><div>(d) $₹30$ Profit</div></div>
          <span class="exam-tag">[SSC CGL Tier-I (CBE), 2016]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">30.</span> A money lender lends $₹400$ for $3$ years to a person and lends $₹500$ for $4$ years to the other person at the same rate of simple interest. If altogether he receives $₹160$ as interest per annum?</div>
          <div class="options-grid"><div>(a) $5\%$</div><div>(b) $7\%$</div><div>(c) $9\%$</div><div>(d) $10\%$</div></div>
          <span class="exam-tag">[SSC CGL Tier-I (CBE), 2016]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">31.</span> The simple interest on a sum of money is $\dfrac{8}{25}$ of the sum. If the number of years is numerically half the rate percent per annum, then the rate percent per annum is</div>
          <div class="options-grid"><div>(a) $4$</div><div>(b) $6\frac{1}{4}$</div><div>(c) $5$</div><div>(d) $8$</div></div>
          <span class="exam-tag">[SSC, 2015]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">32.</span> A sum of money lent out at simple interest amounts to $₹720$ after $2$ years and $₹1020$ after a further period of $5$ years. Find the principal.</div>
          <div class="options-grid"><div>(a) $₹600$</div><div>(b) $₹1740$</div><div>(c) $₹120$</div><div>(d) $₹6000$</div></div>
          <span class="exam-tag">[SSC, 2015]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">33.</span> Ram deposited a certain sum of money in a company at $12\%$ per annum simple interest for $4$ years and deposited equal amount in fixed deposit in a bank for $5$ years at $15\%$ per annum simple interest. If the difference in the interest from two sources is $₹1350$ then the sum deposited in each case is:-</div>
          <div class="options-grid"><div>(a) $₹5000$</div><div>(b) $₹4000$</div><div>(c) $₹6500$</div><div>(d) $₹3000$</div></div>
          <span class="exam-tag">[SSC, 2015]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">34.</span> Prakash lends a part of $₹20,000$ at $8\%$ simple interest and remaining at $\frac{4}{3}\%$ simple interest. His total income after a year was $₹800$. Find the sum lent at $8\%$.</div>
          <div class="options-grid"><div>(a) $₹8,000$</div><div>(b) $₹12,000$</div><div>(c) $₹6,000$</div><div>(d) $₹10,000$</div></div>
          <span class="exam-tag">[SSC, 2014]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">35.</span> Nitin borrowed some money at the rate of $6\%$ p.a. for the first three years, $9\%$ p.a. for the next five years and $13\%$ p.a. for the period beyond eight years. If the total interest paid by him at the end of eleven years is $₹8,160$, the money borrowed by him was:</div>
          <div class="options-grid"><div>(a) $12,000$</div><div>(b) $6,000$</div><div>(c) $8,000$</div><div>(d) $10,000$</div></div>
          <span class="exam-tag">[SSC Assistant Grade III, 2013]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">36.</span> A sum of $₹16800$ is divided into two parts. One part is lent at a simple rate of interest $6\%$ per annum and the other at $8\%$ per annum. After $2$ years the total sum received is $₹19000$. The sum lent at the rate of $6\%$ simple interest is:</div>
          <div class="options-grid"><div>(a) $₹12200$</div><div>(b) $₹12000$</div><div>(c) $₹11000$</div><div>(d) $₹10000$</div><div>(e) None of these</div></div>
          <span class="exam-tag">[IBPS PO/MT, 2013]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">37.</span> Arun invested a sum of money at a certain rate of simple interest for a period of four years. Had he invested the same sum for a period of six years, the total interest earned by him would have been fifty per cent more than the earlier interest amount? What was the rate of interest per cent per annum?</div>
          <div class="options-grid"><div>(a) $4$</div><div>(b) $8$</div><div>(c) $5$</div><div>(d) Cannot be determined</div></div>
          <span class="exam-tag">[Gramin Bank U.P. (SO) Examination, 2012]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">38.</span> The simple interest on a sum of money is $\frac{1}{9}$th of the principal and the number of years is equal to the rate per cent per annum. The rate per cent per annum is equal to:</div>
          <div class="options-grid"><div>(a) $3\%$</div><div>(b) $\frac{1}{3}\%$</div><div>(c) $\frac{1}{10}\%$</div><div>(d) $3\frac{1}{3}\%$</div></div>
          <span class="exam-tag">[SSC Assistant Grade III, 2012]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">39.</span> Arun lends $₹20,000$ to two of his friends. He gives $₹12,000$ to the first at $8\%$ p.a. simple interest. Arun wants to makes a profit of $10\%$ on the whole. The simple interest rate at which he should lend the remaining sum of money to the second friend is:</div>
          <div class="options-grid"><div>(a) $8\%$</div><div>(b) $16\%$</div><div>(c) $12\%$</div><div>(d) $13\%$</div></div>
          <span class="exam-tag">[SSC, 2012]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">40.</span> In what time will a sum of money double itself at the rate of $20\%$ per annum simple interest</div>
          <div class="options-grid"><div>(a) $10$ years</div><div>(b) $5$ years</div><div>(c) $2$ years</div><div>(d) $14$ years</div></div>
          <span class="exam-tag">[SSC (GL), 2011]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">41.</span> $800$ becomes $₹956$ in $3$ years at a certain rate of simple interest. If the rate of interest is increased by $4\%$, what amount will $₹800$ become in $3$ years?</div>
          <div class="options-grid"><div>(a) $₹1020.80$</div><div>(b) $₹1025$</div><div>(c) $₹1052$</div><div>(d) $₹1050$</div></div>
          <span class="exam-tag">[SSC (GL), 2011]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">42.</span> Simple interest on a certain sum is $\frac{16}{25}$ of the sum. The rate per cent if the rate per cent and time (in years) are equal, is:</div>
          <div class="options-grid"><div>(a) $6\%$</div><div>(b) $8\%$</div><div>(c) $10\%$</div><div>(d) $12\%$</div></div>
          <span class="exam-tag">[SSC (GL), 2011]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">43.</span> If the simple interest on $₹x$ at a rate of $a\%$ for $m$ years is same as that on $₹y$ at a rate of $a^2\%$ for $m^2$ years, then $x:y$ is equal to:</div>
          <div class="options-grid"><div>(a) $m:a$</div><div>(b) $am:1$</div><div>(c) $\frac{1}{m}:\frac{1}{a}$</div><div>(d) $\frac{1}{am}:1$</div></div>
          <span class="exam-tag">[SSC, 2011]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">44.</span> A took two loans altogether of $₹1200$ from B and C. B claimed $14\%$ simple interest per annum, while C claimed $15\%$ per annum. The total interest paid by A in one year was $₹172$. Then A borrowed:</div>
          <div class="options-grid"><div>(a) $₹800$ from C</div><div>(b) $₹625$ from C</div><div>(c) $₹400$ from B</div><div>(d) $₹800$ from B</div></div>
          <span class="exam-tag">[SSC, 2011]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">45.</span> A person has left an amount of $₹1,20,000$ to be divided between his two sons aged $14$ years and $12$ years such that they get equal amounts when each attains $18$ years of age. If the amount gets a simple interest of $5\%$ per annum, the younger son’s share at present is:</div>
          <div class="options-grid"><div>(a) $₹48,800$</div><div>(b) $₹57,600$</div><div>(c) $₹62,400$</div><div>(d) $₹84,400$</div></div>
          <span class="exam-tag">[SSC, 2011]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">46.</span> The simple interest accrued on an amount of $₹22,500$ at the end of four years is $₹10,800$. What would be the compound interest accrued on the same amount at the same rate of interest at the end of two years?</div>
          <div class="options-grid"><div>(a) $₹16,908$</div><div>(b) $₹5,724$</div><div>(c) $₹28,224$</div><div>(d) $₹8,586$</div><div>(e) None of these</div></div>
          <span class="exam-tag">[IBPS PO/MT, 2011]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">47.</span> The simple interest accrued on a sum of certain principal is $₹1200$ in $4$ years at the rate of $8\%$ per annum. What would be the simple interest accrued on thrice of that principal at the rate of $6\%$ per annum in $3$ years?</div>
          <div class="options-grid"><div>(a) $₹2025$</div><div>(b) $₹3025$</div><div>(c) $₹2250$</div><div>(d) $₹2150$</div></div>
          <span class="exam-tag">[OBC PO, 2010]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">48.</span> A man invested $\frac{1}{3}$ of his capital at $7\%$, $\frac{1}{4}$ at $8\%$ and the remaining at $10\%$ rate of simple interest. If his annual income from interests is $₹561$, then the capital invested was:</div>
          <div class="options-grid"><div>(a) $₹6000$</div><div>(b) $₹5600$</div><div>(c) $₹6600$</div><div>(d) $₹7200$</div></div>
          <span class="exam-tag">[SSC, 2010]</span>
        </div>

        <div class="question-item">
          <div class="q-text"><span class="q-num">49.</span> A person receives [printed: rece] a simple interest of $₹1,000$ on a certain principal at the rate of $5\%$ p.a. in $4$ years. What compound interest will would that person receive on twice the principal in two years at the same rate?</div>
          <div class="options-grid"><div>(a) $₹1,000$</div><div>(b) $₹1,005$</div><div>(c) $₹11,025$</div><div>(d) $₹10,125$</div><div>(e) None of these</div></div>
          <span class="exam-tag">[Punjab and Sind Bank PO, 2010]</span>
        </div>

      </div>

      <!-- ======================================================= -->
      <!-- ANSWER KEYS                                             -->
      <!-- ======================================================= -->
      <h2 class="section-title">Answer Keys</h2>
      <div class="chapter-body">
        <div class="card full-span">
          <h3 class="sub-title">Exercise-1</h3>
          <div class="ans-grid">
            <div class="ans-cell"><strong>1.</strong> (b)</div>
            <div class="ans-cell"><strong>2.</strong> (a)</div>
            <div class="ans-cell"><strong>3.</strong> (c)</div>
            <div class="ans-cell"><strong>4.</strong> (a)</div>
            <div class="ans-cell"><strong>5.</strong> (b)</div>
            <div class="ans-cell"><strong>6.</strong> (a)</div>
            <div class="ans-cell"><strong>7.</strong> (a)</div>
            <div class="ans-cell"><strong>8.</strong> (c)</div>
            <div class="ans-cell"><strong>9.</strong> (b)</div>
            <div class="ans-cell"><strong>10.</strong> (c)</div>
            <div class="ans-cell"><strong>11.</strong> (a)</div>
            <div class="ans-cell"><strong>12.</strong> (c)</div>
            <div class="ans-cell"><strong>13.</strong> (b)</div>
            <div class="ans-cell"><strong>14.</strong> (a)</div>
            <div class="ans-cell"><strong>15.</strong> (b)</div>
            <div class="ans-cell"><strong>16.</strong> (c)</div>
            <div class="ans-cell"><strong>17.</strong> (a)</div>
            <div class="ans-cell"><strong>18.</strong> (c)</div>
            <div class="ans-cell"><strong>19.</strong> (a)</div>
            <div class="ans-cell"><strong>20.</strong> (a)</div>
            <div class="ans-cell"><strong>21.</strong> (a)</div>
            <div class="ans-cell"><strong>22.</strong> (b)</div>
            <div class="ans-cell"><strong>23.</strong> (c)</div>
            <div class="ans-cell"><strong>24.</strong> (a)</div>
            <div class="ans-cell"><strong>25.</strong> (b)</div>
            <div class="ans-cell"><strong>26.</strong> (a)</div>
            <div class="ans-cell"><strong>27.</strong> (a)</div>
            <div class="ans-cell"><strong>28.</strong> (b)</div>
            <div class="ans-cell"><strong>29.</strong> (c)</div>
            <div class="ans-cell"><strong>30.</strong> (b)</div>
            <div class="ans-cell"><strong>31.</strong> (c)</div>
            <div class="ans-cell"><strong>32.</strong> (a)</div>
            <div class="ans-cell"><strong>33.</strong> (a)</div>
            <div class="ans-cell"><strong>34.</strong> (b)</div>
            <div class="ans-cell"><strong>35.</strong> (a)</div>
            <div class="ans-cell"><strong>36.</strong> (b)</div>
            <div class="ans-cell"><strong>37.</strong> (c)</div>
            <div class="ans-cell"><strong>38.</strong> (a)</div>
            <div class="ans-cell"><strong>39.</strong> (a)</div>
            <div class="ans-cell"><strong>40.</strong> (b)</div>
            <div class="ans-cell"><strong>41.</strong> (a)</div>
            <div class="ans-cell"><strong>42.</strong> (c)</div>
          </div>
        </div>

        <div class="card full-span">
          <h3 class="sub-title">Exercise-2</h3>
          <div class="ans-grid">
            <div class="ans-cell"><strong>1.</strong> (a)</div>
            <div class="ans-cell"><strong>2.</strong> (a)</div>
            <div class="ans-cell"><strong>3.</strong> (c)</div>
            <div class="ans-cell"><strong>4.</strong> (c)</div>
            <div class="ans-cell"><strong>5.</strong> (c)</div>
            <div class="ans-cell"><strong>6.</strong> (d)</div>
            <div class="ans-cell"><strong>7.</strong> (b)</div>
            <div class="ans-cell"><strong>8.</strong> (d)</div>
            <div class="ans-cell"><strong>9.</strong> (d)</div>
            <div class="ans-cell"><strong>10.</strong> (c)</div>
            <div class="ans-cell"><strong>11.</strong> (a)</div>
            <div class="ans-cell"><strong>12.</strong> (b)</div>
            <div class="ans-cell"><strong>13.</strong> (c)</div>
            <div class="ans-cell"><strong>14.</strong> (d)</div>
            <div class="ans-cell"><strong>15.</strong> (a)</div>
            <div class="ans-cell"><strong>16.</strong> (b)</div>
            <div class="ans-cell"><strong>17.</strong> (c)</div>
            <div class="ans-cell"><strong>18.</strong> (b)</div>
            <div class="ans-cell"><strong>19.</strong> (b)</div>
            <div class="ans-cell"><strong>20.</strong> (c)</div>
            <div class="ans-cell"><strong>21.</strong> (c)</div>
            <div class="ans-cell"><strong>22.</strong> (b)</div>
            <div class="ans-cell"><strong>23.</strong> (c)</div>
            <div class="ans-cell"><strong>24.</strong> (d)</div>
            <div class="ans-cell"><strong>25.</strong> (b)</div>
            <div class="ans-cell"><strong>26.</strong> (c)</div>
            <div class="ans-cell"><strong>27.</strong> (a)</div>
            <div class="ans-cell"><strong>28.</strong> (d)</div>
            <div class="ans-cell"><strong>29.</strong> (b)</div>
            <div class="ans-cell"><strong>30.</strong> (a)</div>
            <div class="ans-cell"><strong>31.</strong> (d)</div>
            <div class="ans-cell"><strong>32.</strong> (a)</div>
            <div class="ans-cell"><strong>33.</strong> (a)</div>
            <div class="ans-cell"><strong>34.</strong> (a)</div>
            <div class="ans-cell"><strong>35.</strong> (c)</div>
            <div class="ans-cell"><strong>36.</strong> (a)</div>
            <div class="ans-cell"><strong>37.</strong> (d)</div>
            <div class="ans-cell"><strong>38.</strong> (d)</div>
            <div class="ans-cell"><strong>39.</strong> (d)</div>
            <div class="ans-cell"><strong>40.</strong> (b)</div>
            <div class="ans-cell"><strong>41.</strong> (c)</div>
            <div class="ans-cell"><strong>42.</strong> (b)</div>
            <div class="ans-cell"><strong>43.</strong> (b)</div>
            <div class="ans-cell"><strong>44.</strong> (d)</div>
            <div class="ans-cell"><strong>45.</strong> (b)</div>
            <div class="ans-cell"><strong>46.</strong> (b)</div>
            <div class="ans-cell"><strong>47.</strong> (a)</div>
            <div class="ans-cell"><strong>48.</strong> (c)</div>
            <div class="ans-cell"><strong>49.</strong> (e)</div>
          </div>
        </div>
      </div>

      <!-- ======================================================= -->
      <!-- EXPLANATORY ANSWERS (EXERCISE-1: Q1–Q7)                 -->
      <!-- ======================================================= -->
      <h2 class="section-title">Explanatory Answers (Exercise-1: Q1–Q7)</h2>
      <div class="chapter-body">

        <div class="card">
          <p><strong>1. (b)</strong> Time from May 3rd to July 15th:</p>
          <p>$$= 28\text{ days of May} + 30\text{ days of June} + 15\text{ days of July} = 73\text{ days} = \frac{73}{365}\text{ years, i.e., } \frac{1}{5}\text{ years}$$
            $$\therefore I = \frac{P \times R \times T}{100} = \frac{500 \times 6 \times \frac{1}{5}}{100} = ₹6$$
          </p>
        </div>

        <div class="card">
          <p><strong>2. (a)</strong> We have, $P = ₹10000$, $R = 8\%$ per annum, $T = 6$ years.</p>
          <p>$$\therefore I = \frac{P \times R \times T}{100} = \frac{10000 \times 8 \times 6}{100} = ₹4800$$
            $$\therefore A = P + I = 10000 + 4800 = ₹14800$$
            Thus, Mr Irani returned $₹14800$ to the finance company.
          </p>
        </div>

        <div class="card">
          <p><strong>3. (c)</strong> Here, $I = ₹60$, $R = 6\%$ per annum, $T = 5$ years.</p>
          <p>$$\therefore \text{Principal } (P) = \frac{100 \times I}{R \times T} = \frac{100 \times 60}{6 \times 5} = ₹200$$
          </p>
        </div>

        <div class="card">
          <p><strong>4. (a)</strong> Here, $I = ₹1770$, $R = 8\%$ per annum, $T = \frac{15}{2}$ years.</p>
          <p>$$\therefore \text{Principal } (P) = \frac{100 \times I}{R \times T} = \frac{100 \times 1770}{8 \times \frac{15}{2}} = ₹2950$$
          </p>
        </div>

        <div class="card">
          <p><strong>5. (b)</strong> Let the sum of money be $₹x$. Then, simple interest $= \dfrac{3}{8}x$.</p>
          <p>Also, time $= 6\frac{1}{4}$ years, i.e., $\dfrac{25}{4}$ years.</p>
          <p>$$\therefore \text{Rate } (R) = \frac{100 \times I}{P \times T} = \frac{100 \times \frac{3x}{8}}{x \times \frac{25}{4}} = \frac{100 \times 3}{2 \times 25} = 6\%$$
          </p>
        </div>

        <div class="card">
          <p><strong>6. (a)</strong> Here, $P = ₹5000$, $I = ₹500$, $T = 5$ years.</p>
          <p>Using the formula $R = \dfrac{100 \times I}{P \times T}$:</p>
          <p>$$\text{Rate of interest } (R) = \frac{100 \times 500}{5000 \times 5} = 2\%\text{ p.a.}$$
          </p>
        </div>

        <div class="card">
          <p><strong>7. (a)</strong> We have, $P = ₹1200$, $T = 4$ years, $I = 1440 - 1200 = ₹240$.</p>
          <p>$$\therefore \text{Rate } (R) = \frac{100 \times I}{P \times T} = \frac{100 \times 240}{1200 \times 4} = 5\%\text{ per annum}$$
          </p>
        </div>

      </div>
    </section>

    <!-- ========================================================= -->
    <!-- CHAPTER 19: LOGARITHMS (PDF PAGE 16)                      -->
    <!-- ========================================================= -->
    <section class="chapter">
      <div class="chapter-header">
        <div>
          <div class="chapter-badge">Chapter 19</div>
          <h1>Logarithms</h1>
        </div>
      </div>

      <h2 class="section-title">Introduction &amp; Definition</h2>
      <div class="chapter-body">
        <div class="card">
          <p>A <strong>Logarithm</strong> is the <em>exponent</em> or <em>power</em> to which a stated number (the <strong>base</strong>) is raised to produce a specific number.</p>
          <p><strong>Example:</strong> In $10^2 = 100$, the logarithm of $100$ to the base $10$ is $2$. This is written as $\log_{10} 100 = 2$.</p>
          <p>Logarithms were originally invented to simplify arithmetic calculations of multiplication, division, raising to a power, and extracting a root. Today, they are used across pure and applied mathematics.</p>
        </div>

        <div class="formula-box">
          <span class="formula-num">DEF</span> <strong>Logarithm</strong>
          <p>If for a positive real number ($a \neq 1$), $a^m = b$, then the index $m$ is called the logarithm of $b$ to the base $a$. We write this as:</p>
          $$\log_a b = m$$
          <p>'$\log$' is the abbreviation of the word 'logarithm'. Thus:</p>
          $$a^m = b \iff \log_a b = m$$
          <p>Here, $a^m = b$ is the <strong>exponential form</strong>, and $\log_a b = m$ is the <strong>logarithmic form</strong>.</p>

          <!-- Conceptual SVG Diagram showing Exponential <-> Logarithmic conversion -->
          <div class="svg-box">
            <svg viewBox="0 0 460 115" width="440" aria-label="Exponential Form to Logarithmic Form Mapping">
              <defs>
                <marker id="arr2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/>
                </marker>
              </defs>
              <!-- Left box -->
              <rect x="20" y="20" width="150" height="65" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="1.8" />
              <text x="95" y="42" font-family="sans-serif" font-size="11" font-weight="700" fill="#1e3a5f" text-anchor="middle">Exponential Form</text>
              <text x="95" y="68" font-family="serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">aᵐ = b</text>

              <!-- Bi-directional arrow -->
              <line x1="182" y1="52" x2="278" y2="52" stroke="#2563eb" stroke-width="2" marker-start="url(#arr2)" marker-end="url(#arr2)" />
              <text x="230" y="42" font-family="sans-serif" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">a &gt; 0, a ≠ 1</text>

              <!-- Right box -->
              <rect x="290" y="20" width="150" height="65" rx="8" fill="#f0fdfa" stroke="#0f766e" stroke-width="1.8" />
              <text x="365" y="42" font-family="sans-serif" font-size="11" font-weight="700" fill="#134e4a" text-anchor="middle">Logarithmic Form</text>
              <text x="365" y="68" font-family="serif" font-size="19" font-weight="700" fill="#0f172a" text-anchor="middle">logₐ b = m</text>

              <text x="230" y="104" font-family="sans-serif" font-size="11" fill="#475569" text-anchor="middle">Base (a) stays the base; Output (b) and Exponent (m) swap roles.</text>
            </svg>
          </div>
        </div>

        <div class="illustration">
          <span class="illustration-title">Illustration 1:</span> Refer to the following Table:
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Exponential form</th>
                  <th>Logarithmic form</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>$3^5 = 243$</td>
                  <td>$\log_3 243 = 5$</td>
                </tr>
                <tr>
                  <td>$2^4 = 16$</td>
                  <td>$\log_2 16 = 4$</td>
                </tr>
                <tr>
                  <td>$3^0 = 1$</td>
                  <td>$\log_3 1 = 0$</td>
                </tr>
                <tr>
                  <td>$8^{1/3} = 2$</td>
                  <td>$\log_8 2 = \dfrac{1}{3}$</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <h2 class="section-title">Laws of Logarithms</h2>
      <div class="chapter-body">

        <div class="formula-box">
          <span class="formula-num">1</span> <strong>Product formula</strong>
          <p>The logarithm of the product of two numbers equals the sum of their logarithms:</p>
          $$\log_a (mn) = \log_a m + \log_a n$$
          <p><strong>Generalisation:</strong> In general, we have:</p>
          $$\log_a (mnpq\dots) = \log_a m + \log_a n + \log_a p + \log_a q + \dots$$
        </div>

        <div class="formula-box">
          <span class="formula-num">2</span> <strong>Quotient formula</strong>
          <p>The logarithm of the quotient of two numbers equals the difference of their logarithms:</p>
          $$\log_a \left(\frac{m}{n}\right) = \log_a m - \log_a n$$
          <p>where $a, m, n$ are positive and $a \neq 1$.</p>
        </div>

        <div class="formula-box">
          <span class="formula-num">3</span> <strong>Power formula</strong>
          <p>The logarithm of a number raised to a power equals the power multiplied by the logarithm of the number:</p>
          $$\log_a (m^n) = n \log_a m$$
          <p>where $a, m$ are positive and $a \neq 1$.</p>
        </div>

        <div class="formula-box">
          <span class="formula-num">3</span> <strong>Base changing formula</strong> <span class="typo-note">(Printed as Law 3 in source)</span>
          $$\log_n m = \frac{\log_a m}{\log_a n} \qquad \text{So, } \log_n m = \frac{\log m}{\log n}$$
          <p>where $m, n, a$ are positive and $n \neq 1$, $a \neq 1$.</p>
        </div>

        <div class="formula-box">
          <span class="formula-num">4</span> <strong>Reciprocal relation</strong>
          $$\log_b a \times \log_a b = 1$$
          <p>where $a, b$ are positive and not equal to $1$.</p>
        </div>

        <div class="formula-box">
          <span class="formula-num">5</span> <strong>Reciprocal identity</strong>
          $$\log_b a = \frac{1}{\log_a b}$$
        </div>

        <div class="formula-box">
          <span class="formula-num">6</span> <strong>Exponential-Logarithmic inverse identity</strong>
          $$a^{\log_a x} = x$$
          <p>where $a$ and $x$ are positive, $a \neq 1$.</p>
        </div>

      </div>
    </section>

  </main>

  <script>
    function setLayout(mode) {
      const root = document.getElementById('book-root');
      const btnSingle = document.getElementById('btn-single');
      const btnTwo = document.getElementById('btn-two');
      if (mode === 'two') {
        root.classList.add('two-col');
        btnTwo.classList.add('active');
        btnSingle.classList.remove('active');
      } else {
        root.classList.remove('two-col');
        btnSingle.classList.add('active');
        btnTwo.classList.remove('active');
      }
      if (window.MathJax && MathJax.typesetPromise) {
        MathJax.typesetPromise();
      }
    }
  </script>
</body>
</html>
```
