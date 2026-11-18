Below is the complete, self-contained HTML textbook document covering **all 10 pages** of your PDF, rewritten in clear **ASD-STE100** style without omitting any formula, question, option, answer key, or solution.

It includes:
- **MathJax v3** for all LaTeX expressions
- **Inline SVG diagrams** (Exponential–Logarithmic mapping, $\log_a x$ sign behavior curves, and Quadratic Discriminant parabola cases)
- **Single-Column & Two-Column layout toggle** (plus print-optimized CSS) with strict `overflow` protection so content never clips or overflows horizontally in either view or when exported to PDF.

Save the code below as `notes.html` and open it in any browser.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Study Notes — Chapters 17, 19 &amp; 28 (ASD-STE100 Textbook Edition)</title>

  <!-- MathJax Configuration & Loader -->
  <script>
    window.MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        processEscapes: true
      },
      options: {
        skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
      }
    };
  </script>
  <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

  <style>
    :root {
      --primary: #1a365d;
      --primary-light: #2b548f;
      --accent: #0f766e;
      --accent-soft: #ecfdf5;
      --amber: #b45309;
      --amber-soft: #fffbeb;
      --bg: #f4f6f9;
      --paper: #ffffff;
      --text: #1e293b;
      --muted: #475569;
      --border: #cbd5e1;
      --border-light: #e2e8f0;
      --radius: 8px;
    }

    *, *::before, *::after {
      box-sizing: border-box;
    }

    html, body {
      margin: 0;
      padding: 0;
      background: var(--bg);
      color: var(--text);
      font-family: "Segoe UI", system-ui, -apple-system, Roboto, "Helvetica Neue", Arial, sans-serif;
      font-size: 14.5px;
      line-height: 1.55;
      overflow-x: hidden;
    }

    /* Top Control Toolbar (hidden in print) */
    .toolbar {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: var(--primary);
      color: #fff;
      padding: 0.65rem 1.25rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }

    .toolbar-title {
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.02em;
    }

    .toolbar-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .btn {
      appearance: none;
      border: 1px solid rgba(255, 255, 255, 0.35);
      background: rgba(255, 255, 255, 0.12);
      color: #fff;
      padding: 0.38rem 0.85rem;
      border-radius: 5px;
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.15s ease;
    }

    .btn:hover {
      background: rgba(255, 255, 255, 0.25);
    }

    .btn.active {
      background: #ffffff;
      color: var(--primary);
      border-color: #ffffff;
    }

    /* Main Textbook Container */
    .book-wrapper {
      max-width: 1120px;
      margin: 1.5rem auto;
      background: var(--paper);
      padding: 2rem 2.25rem;
      border-radius: 10px;
      box-shadow: 0 4px 20px rgba(15, 23, 42, 0.08);
      overflow-wrap: break-word;
      word-wrap: break-word;
    }

    /* Two-column layout mode */
    body.two-col .chapter-flow {
      column-count: 2;
      column-gap: 2rem;
      column-rule: 1px solid var(--border-light);
    }

    body.two-col .span-all {
      column-span: all;
    }

    @media (max-width: 820px) {
      .book-wrapper {
        margin: 0.5rem;
        padding: 1.15rem;
      }
      body.two-col .chapter-flow {
        column-count: 1;
      }
    }

    /* Chapter Banner */
    .chapter-banner {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
      color: #ffffff;
      padding: 1.2rem 1.5rem;
      border-radius: var(--radius);
      margin: 2rem 0 1.25rem 0;
      border-left: 8px solid #f59e0b;
      break-inside: avoid;
      column-span: all;
    }

    .chapter-banner:first-child {
      margin-top: 0;
    }

    .chapter-num {
      background: rgba(255, 255, 255, 0.16);
      border: 2px solid rgba(255, 255, 255, 0.45);
      border-radius: 8px;
      padding: 0.4rem 0.85rem;
      text-align: center;
      min-width: 82px;
      flex-shrink: 0;
    }

    .chapter-num small {
      display: block;
      font-size: 0.68rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      opacity: 0.9;
    }

    .chapter-num strong {
      font-size: 1.65rem;
      line-height: 1.1;
    }

    .chapter-title h1 {
      margin: 0;
      font-size: 1.55rem;
      font-weight: 700;
      letter-spacing: 0.01em;
    }

    .chapter-title p {
      margin: 0.25rem 0 0 0;
      font-size: 0.85rem;
      opacity: 0.9;
    }

    /* Section Headings */
    h2.section-head {
      background: var(--primary);
      color: #fff;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      padding: 0.45rem 0.9rem;
      border-radius: 5px;
      margin: 1.35rem 0 0.85rem 0;
      break-after: avoid;
      column-span: all;
    }

    h3.sub-head {
      color: var(--primary);
      font-size: 1.05rem;
      border-bottom: 2px solid var(--border-light);
      padding-bottom: 0.25rem;
      margin: 1.1rem 0 0.6rem 0;
      break-after: avoid;
    }

    p {
      margin: 0 0 0.65rem 0;
    }

    /* Textbook Cards & Callouts */
    .card {
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 0.85rem 1rem;
      margin-bottom: 0.85rem;
      background: #fff;
      break-inside: avoid;
      max-width: 100%;
    }

    .card-def {
      background: #f8fafc;
      border-left: 4px solid var(--primary);
    }

    .card-shortcut {
      background: var(--accent-soft);
      border-color: #99f6e4;
      border-left: 4px solid var(--accent);
    }

    .card-illustration {
      background: var(--amber-soft);
      border-color: #fde68a;
      border-left: 4px solid var(--amber);
    }

    .badge {
      display: inline-block;
      background: var(--primary);
      color: #fff;
      font-size: 0.72rem;
      font-weight: 700;
      padding: 0.12rem 0.45rem;
      border-radius: 4px;
      text-transform: uppercase;
      margin-right: 0.35rem;
      vertical-align: middle;
    }

    .badge-teal { background: var(--accent); }
    .badge-amber { background: var(--amber); }

    /* Tables */
    .table-wrap {
      width: 100%;
      overflow-x: auto;
      margin: 0.75rem 0;
      break-inside: avoid;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.92rem;
    }

    th, td {
      border: 1px solid var(--border);
      padding: 0.45rem 0.65rem;
      text-align: center;
    }

    th {
      background: #eef2f7;
      color: var(--primary);
      font-weight: 700;
    }

    /* Answer Key Grid */
    .key-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(84px, 1fr));
      gap: 0.4rem;
      margin: 0.65rem 0 1rem 0;
      break-inside: avoid;
    }

    .key-cell {
      border: 1px solid var(--border);
      background: #f8fafc;
      border-radius: 4px;
      padding: 0.3rem 0.4rem;
      font-size: 0.85rem;
      text-align: center;
      font-weight: 600;
    }

    .key-cell span {
      color: var(--primary);
      font-weight: 700;
    }

    /* Exercise & Solution Items */
    .q-item, .sol-item {
      border: 1px solid var(--border-light);
      border-radius: 6px;
      padding: 0.65rem 0.85rem;
      margin-bottom: 0.65rem;
      background: #ffffff;
      break-inside: avoid;
      max-width: 100%;
    }

    .q-stem {
      font-weight: 500;
      margin-bottom: 0.4rem;
    }

    .q-num, .sol-num {
      font-weight: 700;
      color: var(--primary);
      margin-right: 0.25rem;
    }

    .options-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(135px, 1fr));
      gap: 0.3rem 0.75rem;
      font-size: 0.92rem;
      padding-left: 0.5rem;
    }

    .sol-ans {
      display: inline-block;
      background: #e0f2fe;
      color: #0369a1;
      font-weight: 700;
      font-size: 0.82rem;
      padding: 0.08rem 0.4rem;
      border-radius: 4px;
      margin-right: 0.35rem;
    }

    .note-box {
      font-size: 0.84rem;
      color: var(--muted);
      background: #f1f5f9;
      border-left: 3px solid #64748b;
      padding: 0.35rem 0.65rem;
      margin-top: 0.35rem;
      border-radius: 0 4px 4px 0;
    }

    /* SVG Figures */
    .svg-figure {
      border: 1px solid var(--border);
      border-radius: var(--radius);
      background: #fafcff;
      padding: 0.75rem;
      margin: 0.9rem 0;
      text-align: center;
      break-inside: avoid;
      max-width: 100%;
    }

    .svg-figure svg {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 0 auto;
    }

    .svg-caption {
      font-size: 0.82rem;
      color: var(--muted);
      margin-top: 0.45rem;
      font-weight: 600;
    }

    /* MathJax Overflow Protection */
    mjx-container {
      max-width: 100% !important;
      overflow-x: auto;
      overflow-y: hidden;
      vertical-align: middle;
    }

    mjx-container[display="true"] {
      display: block !important;
      margin: 0.5rem 0 !important;
      padding: 0.2rem 0;
    }

    .page-break {
      page-break-before: always;
      break-before: page;
    }

    .source-ref {
      font-size: 0.78rem;
      color: #64748b;
      font-style: italic;
      text-align: right;
      margin: 0.5rem 0;
    }

    /* Print Styling */
    @media print {
      @page {
        size: A4;
        margin: 12mm;
      }
      html, body {
        background: #ffffff;
        font-size: 10.5pt;
      }
      .toolbar {
        display: none !important;
      }
      .book-wrapper {
        margin: 0;
        padding: 0;
        box-shadow: none;
        max-width: 100%;
        border-radius: 0;
      }
      body.two-col .chapter-flow {
        column-count: 2;
        column-gap: 14pt;
      }
      .chapter-banner {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      h2.section-head, .card-shortcut, .card-illustration, .card-def, .sol-ans {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
    }
  </style>
</head>
<body class="single-col">

  <!-- Interactive Toolbar (hidden when printing to PDF) -->
  <div class="toolbar">
    <div class="toolbar-title">Textbook Notes (ASD-STE100) &bull; Chapters 17, 19 &amp; 28</div>
    <div class="toolbar-actions">
      <button id="btn-single" class="btn active" onclick="setLayout('single')">Single Column</button>
      <button id="btn-two" class="btn" onclick="setLayout('two')">Two Column</button>
      <button class="btn" onclick="window.print()">Print / Save PDF</button>
    </div>
  </div>

  <main class="book-wrapper">

    <!-- ===================================================================== -->
    <!-- CHAPTER 17 (Page 1: Answer Keys & Explanatory Answers)                -->
    <!-- ===================================================================== -->
    <div class="chapter-banner">
      <div class="chapter-num">
        <small>Chapter</small>
        <strong>17</strong>
      </div>
      <div class="chapter-title">
        <h1>Simple Interest &mdash; Answer Keys &amp; Explanatory Answers</h1>
        <p>Source Page 17.14 &bull; Exercise-1 &amp; Exercise-2 Keys + Solutions 1&ndash;7</p>
      </div>
    </div>

    <h2 class="section-head">Answer Keys &mdash; Exercise-1</h2>
    <div class="key-grid span-all">
      <div class="key-cell"><span>1.</span> (b)</div>
      <div class="key-cell"><span>2.</span> (a)</div>
      <div class="key-cell"><span>3.</span> (c)</div>
      <div class="key-cell"><span>4.</span> (a)</div>
      <div class="key-cell"><span>5.</span> (b)</div>
      <div class="key-cell"><span>6.</span> (a)</div>
      <div class="key-cell"><span>7.</span> (a)</div>
      <div class="key-cell"><span>8.</span> (c)</div>
      <div class="key-cell"><span>9.</span> (b)</div>
      <div class="key-cell"><span>10.</span> (c)</div>
      <div class="key-cell"><span>11.</span> (a)</div>
      <div class="key-cell"><span>12.</span> (c)</div>
      <div class="key-cell"><span>13.</span> (b)</div>
      <div class="key-cell"><span>14.</span> (a)</div>
      <div class="key-cell"><span>15.</span> (b)</div>
      <div class="key-cell"><span>16.</span> (c)</div>
      <div class="key-cell"><span>17.</span> (a)</div>
      <div class="key-cell"><span>18.</span> (c)</div>
      <div class="key-cell"><span>19.</span> (a)</div>
      <div class="key-cell"><span>20.</span> (a)</div>
      <div class="key-cell"><span>21.</span> (a)</div>
      <div class="key-cell"><span>22.</span> (b)</div>
      <div class="key-cell"><span>23.</span> (c)</div>
      <div class="key-cell"><span>24.</span> (a)</div>
      <div class="key-cell"><span>25.</span> (b)</div>
      <div class="key-cell"><span>26.</span> (a)</div>
      <div class="key-cell"><span>27.</span> (a)</div>
      <div class="key-cell"><span>28.</span> (b)</div>
      <div class="key-cell"><span>29.</span> (c)</div>
      <div class="key-cell"><span>30.</span> (b)</div>
      <div class="key-cell"><span>31.</span> (c)</div>
      <div class="key-cell"><span>32.</span> (a)</div>
      <div class="key-cell"><span>33.</span> (a)</div>
      <div class="key-cell"><span>34.</span> (b)</div>
      <div class="key-cell"><span>35.</span> (a)</div>
      <div class="key-cell"><span>36.</span> (b)</div>
      <div class="key-cell"><span>37.</span> (c)</div>
      <div class="key-cell"><span>38.</span> (a)</div>
      <div class="key-cell"><span>39.</span> (a)</div>
      <div class="key-cell"><span>40.</span> (b)</div>
      <div class="key-cell"><span>41.</span> (a)</div>
      <div class="key-cell"><span>42.</span> (c)</div>
    </div>

    <h2 class="section-head">Answer Keys &mdash; Exercise-2</h2>
    <div class="key-grid span-all">
      <div class="key-cell"><span>1.</span> (a)</div>
      <div class="key-cell"><span>2.</span> (a)</div>
      <div class="key-cell"><span>3.</span> (c)</div>
      <div class="key-cell"><span>4.</span> (c)</div>
      <div class="key-cell"><span>5.</span> (c)</div>
      <div class="key-cell"><span>6.</span> (d)</div>
      <div class="key-cell"><span>7.</span> (b)</div>
      <div class="key-cell"><span>8.</span> (d)</div>
      <div class="key-cell"><span>9.</span> (d)</div>
      <div class="key-cell"><span>10.</span> (c)</div>
      <div class="key-cell"><span>11.</span> (a)</div>
      <div class="key-cell"><span>12.</span> (b)</div>
      <div class="key-cell"><span>13.</span> (c)</div>
      <div class="key-cell"><span>14.</span> (d)</div>
      <div class="key-cell"><span>15.</span> (a)</div>
      <div class="key-cell"><span>16.</span> (b)</div>
      <div class="key-cell"><span>17.</span> (c)</div>
      <div class="key-cell"><span>18.</span> (b)</div>
      <div class="key-cell"><span>19.</span> (b)</div>
      <div class="key-cell"><span>20.</span> (c)</div>
      <div class="key-cell"><span>21.</span> (c)</div>
      <div class="key-cell"><span>22.</span> (b)</div>
      <div class="key-cell"><span>23.</span> (c)</div>
      <div class="key-cell"><span>24.</span> (d)</div>
      <div class="key-cell"><span>25.</span> (b)</div>
      <div class="key-cell"><span>26.</span> (c)</div>
      <div class="key-cell"><span>27.</span> (a)</div>
      <div class="key-cell"><span>28.</span> (d)</div>
      <div class="key-cell"><span>29.</span> (b)</div>
      <div class="key-cell"><span>30.</span> (a)</div>
      <div class="key-cell"><span>31.</span> (d)</div>
      <div class="key-cell"><span>32.</span> (a)</div>
      <div class="key-cell"><span>33.</span> (a)</div>
      <div class="key-cell"><span>34.</span> (a)</div>
      <div class="key-cell"><span>35.</span> (c)</div>
      <div class="key-cell"><span>36.</span> (a)</div>
      <div class="key-cell"><span>37.</span> (d)</div>
      <div class="key-cell"><span>38.</span> (d)</div>
      <div class="key-cell"><span>39.</span> (d)</div>
      <div class="key-cell"><span>40.</span> (b)</div>
      <div class="key-cell"><span>41.</span> (c)</div>
      <div class="key-cell"><span>42.</span> (b)</div>
      <div class="key-cell"><span>43.</span> (b)</div>
      <div class="key-cell"><span>44.</span> (d)</div>
      <div class="key-cell"><span>45.</span> (b)</div>
      <div class="key-cell"><span>46.</span> (b)</div>
      <div class="key-cell"><span>47.</span> (a)</div>
      <div class="key-cell"><span>48.</span> (c)</div>
      <div class="key-cell"><span>49.</span> (e)</div>
    </div>

    <h2 class="section-head">Explanatory Answers &mdash; Exercise-1</h2>
    <div class="chapter-flow">
      <div class="sol-item">
        <span class="sol-num">1.</span><span class="sol-ans">(b)</span>
        Calculate the time from May 3rd to July 15th:
        $$28\text{ days (May)} + 30\text{ days (June)} + 15\text{ days (July)} = 73\text{ days} = \frac{73}{365}\text{ years} = \frac{1}{5}\text{ years}.$$
        $$\therefore I = \frac{P \times R \times T}{100} = \frac{500 \times 6 \times \frac{1}{5}}{100} = ₹6.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">2.</span><span class="sol-ans">(a)</span>
        Given: $P = ₹10000$, $R = 8\%$ per annum, $T = 6\text{ years}$.
        $$\therefore I = \frac{P \times R \times T}{100} = \frac{10000 \times 8 \times 6}{100} = ₹4800.$$
        $$\therefore A = P + I = 10000 + 4800 = ₹14800.$$
        Mr Irani returned $₹14800$ to the finance company.
      </div>

      <div class="sol-item">
        <span class="sol-num">3.</span><span class="sol-ans">(c)</span>
        Given: $I = ₹60$, $R = 6\%$ per annum, $T = 5\text{ years}$.
        $$\therefore \text{Principal } (P) = \frac{100 \times I}{R \times T} = \frac{100 \times 60}{6 \times 5} = ₹200.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">4.</span><span class="sol-ans">(a)</span>
        Given: $I = ₹1770$, $R = 8\%$ per annum, $T = \frac{15}{2}\text{ years}$.
        $$\therefore \text{Principal } (P) = \frac{100 \times I}{R \times T} = \frac{100 \times 1770}{8 \times \frac{15}{2}} = ₹2950.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">5.</span><span class="sol-ans">(b)</span>
        Let the sum of money be $₹x$. Then, simple interest $= \frac{3}{8}x$.
        Also, time $= 6\frac{1}{4}\text{ years} = \frac{25}{4}\text{ years}$.
        $$\therefore \text{Rate } (R) = \frac{100 \times I}{P \times T} = \frac{100 \times \frac{3x}{8}}{x \times \frac{25}{4}} = \frac{100 \times 3}{2 \times 25} = 6\%.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">6.</span><span class="sol-ans">(a)</span>
        Given: $P = ₹5000$, $I = ₹500$, $T = 5\text{ years}$.
        Use the formula $R = \frac{100 \times I}{P \times T}$:
        $$\text{Rate of interest } (R) = \frac{100 \times 500}{5000 \times 5} = 2\%\text{ p.a.}$$
      </div>

      <div class="sol-item">
        <span class="sol-num">7.</span><span class="sol-ans">(a)</span>
        Given: $P = ₹1200$, $T = 4\text{ years}$, $I = 1440 - 1200 = ₹240$.
        $$\therefore \text{Rate } (R) = \frac{100 \times I}{P \times T} = \frac{100 \times 240}{1200 \times 4} = 5\%\text{ per annum}.$$
      </div>
    </div>

    <!-- ===================================================================== -->
    <!-- CHAPTER 19: LOGARITHMS (Pages 2 to 8)                                 -->
    <!-- ===================================================================== -->
    <div class="chapter-banner page-break">
      <div class="chapter-num">
        <small>Chapter</small>
        <strong>19</strong>
      </div>
      <div class="chapter-title">
        <h1>Logarithms</h1>
        <p>Theory, Laws of Logarithms, Short-Cut Methods, Common Logarithms, Exercise-1 &amp; Full Solutions</p>
      </div>
    </div>

    <div class="chapter-flow">
      <h2 class="section-head">Introduction &amp; Core Definition</h2>

      <div class="card card-def">
        <p><span class="badge">Definition</span> A <strong>logarithm</strong> is the exponent (or power) to which a base number is raised to produce a target number.</p>
        <p>For example, in $10^2 = 100$, the logarithm of $100$ to the base $10$ is $2$. Write this as $\log_{10} 100 = 2$.</p>
        <p>Logarithms simplify arithmetic tasks such as multiplication, division, powers, and root extraction. Today, mathematicians also use logarithms in pure and applied mathematics.</p>
      </div>

      <div class="card card-def">
        <p><span class="badge">Logarithm</span> Let $a$ be a positive real number ($a \neq 1$). If $a^m = b$, then the index $m$ is the logarithm of $b$ to the base $a$. Write this as:</p>
        $$\log_a b = m$$
        <p>Here, "log" is the short form of "logarithm". Thus:</p>
        $$a^m = b \iff \log_a b = m$$
        <p>The equation $a^m = b$ is the <em>exponential form</em>. The equation $\log_a b = m$ is the <em>logarithmic form</em>.</p>
      </div>

      <!-- SVG Diagram 1: Exponential vs Logarithmic Form -->
      <div class="svg-figure">
        <svg viewBox="0 0 540 165" width="540" height="165" role="img" aria-label="Exponential form vs Logarithmic form diagram">
          <defs>
            <marker id="arrowBlue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#1a365d"/>
            </marker>
            <marker id="arrowTeal" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#0f766e"/>
            </marker>
          </defs>
          <!-- Left box: Exponential -->
          <rect x="14" y="20" width="205" height="110" rx="8" fill="#f8fafc" stroke="#1a365d" stroke-width="1.8"/>
          <text x="116" y="42" text-anchor="middle" font-size="12" font-weight="700" fill="#1a365d">EXPONENTIAL FORM</text>
          <text x="86" y="92" font-size="30" font-weight="700" fill="#1a365d">a</text>
          <text x="104" y="75" font-size="19" font-weight="700" fill="#b45309">m</text>
          <text x="126" y="92" font-size="26" font-weight="600" fill="#334155">=</text>
          <text x="148" y="92" font-size="30" font-weight="700" fill="#0f766e">b</text>
          <text x="116" y="118" text-anchor="middle" font-size="11" fill="#475569">Base (a &gt; 0, a ≠ 1)</text>

          <!-- Equivalence arrows -->
          <line x1="228" y1="68" x2="310" y2="68" stroke="#1a365d" stroke-width="2" marker-end="url(#arrowBlue)"/>
          <line x1="310" y1="84" x2="228" y2="84" stroke="#0f766e" stroke-width="2" marker-end="url(#arrowTeal)"/>
          <text x="269" y="59" text-anchor="middle" font-size="11" font-weight="700" fill="#1a365d">iff</text>

          <!-- Right box: Logarithmic -->
          <rect x="320" y="20" width="206" height="110" rx="8" fill="#ecfdf5" stroke="#0f766e" stroke-width="1.8"/>
          <text x="423" y="42" text-anchor="middle" font-size="12" font-weight="700" fill="#0f766e">LOGARITHMIC FORM</text>
          <text x="355" y="90" font-size="26" font-weight="700" fill="#1e293b">log</text>
          <text x="394" y="98" font-size="17" font-weight="700" fill="#1a365d">a</text>
          <text x="410" y="90" font-size="28" font-weight="700" fill="#0f766e">b</text>
          <text x="435" y="90" font-size="26" font-weight="600" fill="#334155">=</text>
          <text x="462" y="90" font-size="28" font-weight="700" fill="#b45309">m</text>
          <text x="423" y="118" text-anchor="middle" font-size="11" fill="#475569">m = Exponent / Logarithm</text>

          <!-- Bottom Legend -->
          <text x="270" y="152" text-anchor="middle" font-size="11.5" fill="#334155">
            <tspan fill="#1a365d" font-weight="700">a</tspan> = Base  |  <tspan fill="#0f766e" font-weight="700">b</tspan> = Argument (b &gt; 0)  |  <tspan fill="#b45309" font-weight="700">m</tspan> = Logarithm
          </text>
        </svg>
        <div class="svg-caption">Figure 19.1: Relationship between exponential form and logarithmic form.</div>
      </div>

      <div class="card card-illustration">
        <p><span class="badge badge-amber">Illustration 1</span> Refer to the table below:</p>
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

      <h2 class="section-head">Laws of Logarithms</h2>

      <div class="card">
        <p><strong>1. Product formula:</strong> The logarithm of the product of two numbers equals the sum of their logarithms.</p>
        $$\log_a(mn) = \log_a m + \log_a n$$
        <p><em>Generalisation:</em> $\log_a(mnpq\dots) = \log_a m + \log_a n + \log_a p + \log_a q + \dots$</p>
      </div>

      <div class="card">
        <p><strong>2. Quotient formula:</strong> The logarithm of the quotient of two numbers equals the difference of their logarithms.</p>
        $$\log_a\left(\frac{m}{n}\right) = \log_a m - \log_a n$$
        <p>where $a, m, n$ are positive and $a \neq 1$.</p>
      </div>

      <div class="card">
        <p><strong>3. Power formula:</strong> The logarithm of a number raised to a power equals the power multiplied by the logarithm of the number.</p>
        $$\log_a(m^n) = n \log_a m$$
        <p>where $a, m$ are positive and $a \neq 1$.</p>
      </div>

      <div class="card">
        <p><strong>3. Base changing formula</strong> <em>(printed as item 3 in source)</em>:</p>
        $$\log_n m = \frac{\log_a m}{\log_a n}. \quad \text{So, } \log_n m = \frac{\log m}{\log n}.$$
        <p>where $m, n, a$ are positive, $n \neq 1$, and $a \neq 1$.</p>
      </div>

      <div class="card">
        <p><strong>4. Reciprocal relation:</strong></p>
        $$\log_b a \times \log_a b = 1$$
        <p>where $a, b$ are positive and not equal to $1$.</p>
      </div>

      <div class="card">
        <p><strong>5.</strong> $\displaystyle \log_b a = \frac{1}{\log_a b}$</p>
        <p><strong>6.</strong> $a^{\log_a x} = x$, where $a$ and $x$ are positive, $a \neq 1$.</p>
      </div>

      <div class="card">
        <p><strong>Sign Rules (Laws 7&ndash;10):</strong></p>
        <p><strong>7.</strong> If $a &gt; 1$ and $x &gt; 1$, then $\log_a x &gt; 0$.</p>
        <p><strong>8.</strong> If $0 &lt; a &lt; 1$ and $0 &lt; x &lt; 1$, then $\log_a x &gt; 0$.</p>
        <p><strong>9.</strong> If $0 &lt; a &lt; 1$ and $x &gt; 1$, then $\log_a x &gt; 0$.</p>
        <div class="note-box">Note: Source text prints $\log_a x &gt; 0$ for Law 9. Mathematically, when $0 &lt; a &lt; 1$ and $x &gt; 1$, $\log_a x &lt; 0$.</div>
        <p style="margin-top:0.45rem;"><strong>10.</strong> If $a &gt; 1$ and $0 &lt; x &lt; 1$, then $\log_a x &lt; 0$.</p>
      </div>

      <!-- SVG Diagram 2: Logarithm Curves for a > 1 and 0 < a < 1 -->
      <div class="svg-figure">
        <svg viewBox="0 0 540 210" width="540" height="210" role="img" aria-label="Graphs of y = log_a x for a > 1 and 0 < a < 1">
          <!-- Left Graph: a > 1 -->
          <g transform="translate(15,10)">
            <rect x="0" y="0" width="245" height="188" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
            <text x="122" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1a365d">Case 1: a &gt; 1 (Increasing)</text>
            <!-- Axes -->
            <line x1="40" y1="30" x2="40" y2="168" stroke="#64748b" stroke-width="1.3"/>
            <line x1="25" y1="100" x2="225" y2="100" stroke="#64748b" stroke-width="1.3"/>
            <text x="228" y="104" font-size="11" fill="#475569">x</text>
            <text x="45" y="38" font-size="11" fill="#475569">y</text>
            <!-- Curve y = log_a x (a > 1) -->
            <path d="M 48 164 C 54 132, 70 112, 95 100 C 130 82, 175 68, 218 56" fill="none" stroke="#0f766e" stroke-width="2.5"/>
            <circle cx="95" cy="100" r="3.5" fill="#b45309"/>
            <text x="95" y="116" text-anchor="middle" font-size="10.5" font-weight="700" fill="#b45309">(1, 0)</text>
            <text x="165" y="55" font-size="10.5" fill="#0f766e" font-weight="700">x &gt; 1: log &gt; 0</text>
            <text x="115" y="152" font-size="10.5" fill="#dc2626" font-weight="700">0 &lt; x &lt; 1: log &lt; 0</text>
          </g>

          <!-- Right Graph: 0 < a < 1 -->
          <g transform="translate(280,10)">
            <rect x="0" y="0" width="245" height="188" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
            <text x="122" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1a365d">Case 2: 0 &lt; a &lt; 1 (Decreasing)</text>
            <!-- Axes -->
            <line x1="40" y1="30" x2="40" y2="168" stroke="#64748b" stroke-width="1.3"/>
            <line x1="25" y1="100" x2="225" y2="100" stroke="#64748b" stroke-width="1.3"/>
            <text x="228" y="104" font-size="11" fill="#475569">x</text>
            <text x="45" y="38" font-size="11" fill="#475569">y</text>
            <!-- Curve y = log_a x (0 < a < 1) -->
            <path d="M 48 36 C 54 68, 70 88, 95 100 C 130 118, 175 132, 218 144" fill="none" stroke="#1a365d" stroke-width="2.5"/>
            <circle cx="95" cy="100" r="3.5" fill="#b45309"/>
            <text x="95" y="88" text-anchor="middle" font-size="10.5" font-weight="700" fill="#b45309">(1, 0)</text>
            <text x="115" y="55" font-size="10.5" fill="#0f766e" font-weight="700">0 &lt; x &lt; 1: log &gt; 0</text>
            <text x="160" y="160" font-size="10.5" fill="#dc2626" font-weight="700">x &gt; 1: log &lt; 0</text>
          </g>
        </svg>
        <div class="svg-caption">Figure 19.2: Behavior of $y = \log_a x$ across $x \in (0,1)$ and $x &gt; 1$.</div>
      </div>

      <h2 class="section-head">Short-Cut Methods &amp; Common Logarithms</h2>

      <div class="card card-shortcut">
        <p><span class="badge badge-teal">01</span> The logarithm of $1$ to any valid base equals zero:</p>
        $$\log_a 1 = 0, \quad \text{where } a &gt; 0, \; a \neq 1.$$
        <p><span class="badge badge-teal">02</span> The logarithm of any number to the same base equals $1$:</p>
        $$\log_a a = 1, \quad \text{where } a &gt; 0, \; a \neq 1.$$
      </div>

      <div class="card card-def">
        <p><span class="badge">Common Logarithms</span> Two bases are widely used today:</p>
        <p>&bull; <strong>Base $e$</strong> ($e \approx 2.71828$): called <em>natural logarithms</em>.</p>
        <p>&bull; <strong>Base $10$</strong>: called <em>common logarithms</em>.</p>
        <p><strong>Standard values:</strong></p>
        <p>$\log_{10} 10 = 1$, because $10^1 = 10$.</p>
        <p>$\log_{10} 100 = 2$, because $10^2 = 100$.</p>
        <p>$\log_{10} 10000 = 4$, because $10^4 = 10000$.</p>
        <p>$\log_{10} 0.01 = -2$, because $10^{-2} = 0.01$.</p>
        <p>$\log_{10} 0.001 = -3$, because $10^{-3} = 0.001$.</p>
        <p>$\log_{10} 1 = 0$, because $10^0 = 1$.</p>
      </div>

      <!-- ===================================================================== -->
      <!-- CHAPTER 19: EXERCISE-1 (Questions 1 to 50)                            -->
      <!-- ===================================================================== -->
      <h2 class="section-head">Exercise-1 (Questions 1&ndash;50)</h2>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">1.</span> Find $\log_{3/2} 3.375$.</div>
        <div class="options-grid">
          <div>(a) $2$</div><div>(b) $3$</div><div>(c) $5/2$</div><div>(d) $17/2$</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">2.</span> If $x = \log_{2a} a$, $y = \log_{3a} 2a$ and $z = \log_{4a} 3a$, find $yz(2 - x)$.</div>
        <div class="options-grid">
          <div>(a) $1$</div><div>(b) $-1$</div><div>(c) $2$</div><div>(d) $-2$</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">3.</span> $\dfrac{\log x}{l + m - 2n} = \dfrac{\log y}{m + n - 2l} = \dfrac{\log z}{n + l - 2m}$, find $x^2 y^2 z^2$. <span style="font-size:0.8em;color:#64748b;">(Source prints $l+m-2m$ in denominator 1)</span></div>
        <div class="options-grid">
          <div>(a) $2$</div><div>(b) $-1$</div><div>(c) $4$</div><div>(d) $1$</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">4.</span> If $\log \dfrac{x+y}{5} = \dfrac{1}{2}(\log x + \log y)$, then $\dfrac{x}{y} + \dfrac{y}{x} =$</div>
        <div class="options-grid">
          <div>(a) $20$</div><div>(b) $23$</div><div>(c) $22$</div><div>(d) $21$</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">5.</span> If $\log(x + y) = \log\left(\dfrac{3x - 3y}{2}\right)$, then $\log x - \log y =$</div>
        <div class="options-grid">
          <div>(a) $\log 2$</div><div>(b) $\log 3$</div><div>(c) $\log 5$</div><div>(d) $\log 6$</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">6.</span> If $\log_2 x + \log_4 x + \log_{16} x = 21/4$, then $x =$</div>
        <div class="options-grid">
          <div>(a) $8$</div><div>(b) $4$</div><div>(c) $2$</div><div>(d) $16$</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">7.</span> $7\log\dfrac{16}{15} + 5\log\dfrac{25}{24} + 3\log\dfrac{81}{80} =$</div>
        <div class="options-grid">
          <div>(a) $\log 2$</div><div>(b) $\log 3$</div><div>(c) $\log 5$</div><div>(d) None of these</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">8.</span> If $0 &lt; a \le x$, the minimum value of $\log_a x + \log_x a$ is:</div>
        <div class="options-grid">
          <div>(a) $1$</div><div>(b) $2$</div><div>(c) $3$</div><div>(d) $5$</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">9.</span> If $\dfrac{\log x}{b - c} = \dfrac{\log y}{c - a} = \dfrac{\log z}{a - b}$, then $xyz = x^a \cdot y^b \cdot z^c = x^{b+c} \cdot y^{c+a} \cdot z^{a+b} =$</div>
        <div class="options-grid">
          <div>(a) $1$</div><div>(b) $0$</div><div>(c) $2$</div><div>(d) None of these</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">10.</span> $x^{\log y - \log z} \cdot y^{\log z - \log x} \cdot z^{\log x - \log y} =$</div>
        <div class="options-grid">
          <div>(a) $0$</div><div>(b) $2$</div><div>(c) $1$</div><div>(d) None of these</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">11.</span> If $\log_{10}\left[98 + \sqrt{x^2 - 12x + 36}\right] = 2$, then $x =$</div>
        <div class="options-grid">
          <div>(a) $4$</div><div>(b) $8$</div><div>(c) $12$</div><div>(d) $4, 8$</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">12.</span> If $x = \log_a bc$, $y = \log_b ca$, $z = \log_c ab$, then</div>
        <div class="options-grid">
          <div>(a) $xyz = x + y + z + 2$</div><div>(b) $xyz = x + y + z + 1$</div><div>(c) $x + y + z = 1$</div><div>(d) $xyz = 1$</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">13.</span> If $a^x = b^y = c^z = d^w$, then $\log_a(bcd) =$</div>
        <div class="options-grid">
          <div>(a) $\dfrac{1}{x}\left(\dfrac{1}{y} + \dfrac{1}{z} + \dfrac{1}{w}\right)$</div>
          <div>(b) $x\left(\dfrac{1}{y} + \dfrac{1}{z} + \dfrac{1}{w}\right)$</div>
          <div>(c) $\dfrac{y + z + w}{x}$</div>
          <div>(d) None of these</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">14.</span> If $\log_{10} 2 = 0.3010$, then $\log_{10}(1/2) =$</div>
        <div class="options-grid">
          <div>(a) $-0.3010$</div><div>(b) $0.6990$</div><div>(c) $\bar{1}.6990$ <span style="font-size:0.78em;">(printed 1.6990)</span></div><div>(d) $-0.3010$</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">15.</span> If $\log_2(3^{2x-2} + 7) = 2 + \log_2(3^{x-1} + 1)$, then $x =$</div>
        <div class="options-grid">
          <div>(a) $0$</div><div>(b) $1$</div><div>(c) $2$</div><div>(d) $1$ or $2$</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">16.</span> If $\log_a b = \log_b c = \log_c a$, then</div>
        <div class="options-grid">
          <div>(a) $a &gt; b \ge c$</div><div>(b) $a &lt; b &lt; c$</div><div>(c) $a = b = c$</div><div>(d) $a &lt; b \le c$</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">17.</span> If $\dfrac{1}{\log_x 10} = \dfrac{2}{\log_a 10} - 2$, then $x =$</div>
        <div class="options-grid">
          <div>(a) $a/2$</div><div>(b) $a/100$</div><div>(c) $a^2/10$</div><div>(d) $a^2/100$</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">18.</span> If $a^2 + b^2 = c^2$, then $\dfrac{1}{\log_{c+a} b} + \dfrac{1}{\log_{c-a} b} =$</div>
        <div class="options-grid">
          <div>(a) $1$</div><div>(b) $2$</div><div>(c) $-1$</div><div>(d) $-2$</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">19.</span> If $\log_{10} 87.5 = 1.9421$, then the number of digits in $(875)^{10}$ is:</div>
        <div class="options-grid">
          <div>(a) $30$</div><div>(b) $29$</div><div>(c) $20$</div><div>(d) $19$</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">20.</span> If $\log_{10} 2 = 0.3010$, $\log_{10} 3 = 0.4771$, then the number of zeros between the decimal point and the first significant figure in $(0.0432)^{10}$ is:</div>
        <div class="options-grid">
          <div>(a) $10$</div><div>(b) $13$</div><div>(c) $14$</div><div>(d) $15$</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">21.</span> If $(4.2)^x = (0.42)^y = 100$, then $\dfrac{1}{x} - \dfrac{1}{y} =$</div>
        <div class="options-grid">
          <div>(a) $1$</div><div>(b) $2$</div><div>(c) $1/2$</div><div>(d) $-1$</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">22.</span> $\dfrac{\log_9 11}{\log_5 13} - \dfrac{\log_3 11}{\log_{\sqrt{5}} 13} =$</div>
        <div class="options-grid">
          <div>(a) $1$</div><div>(b) $-1$</div><div>(c) $0$</div><div>(d) None of these</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">23.</span> If $\dfrac{\log x}{2} = \dfrac{\log y}{3} = \dfrac{\log z}{5}$, then $yz$ in terms of $x$ is:</div>
        <div class="options-grid">
          <div>(a) $x$</div><div>(b) $x^2$</div><div>(c) $x^3$</div><div>(d) $x^4$</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">24.</span> If $4^x + 2^{2x-1} = 3^{x+\frac{1}{2}} + 3^{x-\frac{1}{2}}$, then $x =$</div>
        <div class="options-grid">
          <div>(a) $1/2$</div><div>(b) $3/2$</div><div>(c) $5/2$</div><div>(d) $1$</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">25.</span> $\dfrac{\log 49\sqrt{7} + \log 25\sqrt{5} - \log 4\sqrt{2}}{\log 17.5} =$</div>
        <div class="options-grid">
          <div>(a) $5$</div><div>(b) $2$</div><div>(c) $5/2$</div><div>(d) $3/2$</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">26.</span> $\log_{10} \tan 40^\circ \cdot \log_{10} \tan 41^\circ \dots \log_{10} \tan 50^\circ =$ <span style="font-size:0.8em;color:#64748b;">(Source omits $\tan$ on $41^\circ$)</span></div>
        <div class="options-grid">
          <div>(a) $1$</div><div>(b) $0$</div><div>(c) $-1$</div><div>(d) None of these</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">27.</span> If $\log_8 p = 2.5$, $\log_2 q = 5$, then $p$ in terms of $q$ is</div>
        <div class="options-grid">
          <div>(a) $q\sqrt{q}$</div><div>(b) $2q$</div><div>(c) $q$</div><div>(d) $q/2$</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">28.</span> If $y = \dfrac{1}{a^{1 - \log_a x}}$, $z = \dfrac{1}{a^{1 - \log_a y}}$ and $x = a^k$, then $k =$</div>
        <div class="options-grid">
          <div>(a) $\dfrac{1}{a^{1 - \log_a z}}$</div>
          <div>(b) $\dfrac{1}{1 - \log_a z}$</div>
          <div>(c) $\dfrac{1}{1 + \log_z a}$</div>
          <div>(d) $\dfrac{1}{1 - \log_z a}$</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">29.</span> If $\log_e 2 \cdot \log_b 625 = \log_{10} 16 \cdot \log_e 10$, then $b =$</div>
        <div class="options-grid">
          <div>(a) $4$</div><div>(b) $5$</div><div>(c) $1$</div><div>(d) $e$</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">30.</span> $5^{\sqrt{\log_5 7}} - 7^{\sqrt{\log_7 5}}$</div>
        <div class="options-grid">
          <div>(a) $\log 2$</div><div>(b) $1$</div><div>(c) $0$</div><div>(d) None of these</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">31.</span> $2^{\log_3 7} - 7^{\log_3 2}$</div>
        <div class="options-grid">
          <div>(a) $\log_2 7$</div><div>(b) $\log 7$</div><div>(c) $\log 2$</div><div>(d) $0$</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">32.</span> If $\log_{30} 3 = a$, $\log_{30} 5 = b$, then $\log_{30} 8 =$</div>
        <div class="options-grid">
          <div>(a) $3(1 - a - b)$</div><div>(b) $a - b + 1$</div><div>(c) $1 - a - b$</div><div>(d) $3(a - b + 1)$</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">33.</span> If $0 &lt; a &lt; 1$, $0 &lt; x &lt; 1$ and $x &lt; a$, then $\log_a x$:</div>
        <div class="options-grid">
          <div>(a) $&lt; 1$</div><div>(b) $&gt; 1$</div><div>(c) $&lt; 0$</div><div>(d) $\le 1$</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">34.</span> $\log_5 2$ is</div>
        <div class="options-grid">
          <div>(a) an integer</div><div>(b) a rational number</div><div>(c) an irrational number</div><div>(d) a prime number</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">35.</span> $\log_5\left(1 + \dfrac{1}{5}\right) + \log_5\left(1 + \dfrac{1}{6}\right) + \log_5\left(1 + \dfrac{1}{7}\right) + \dots + \log_5\left(1 + \dfrac{1}{624}\right)$</div>
        <div class="options-grid">
          <div>(a) $5$</div><div>(b) $4$</div><div>(c) $3$</div><div>(d) $2$</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">36.</span> If $\log_{10} 2986 = 3.4751$, then $\log_{10} 0.02986 =$</div>
        <div class="options-grid">
          <div>(a) $\bar{1}.2986$</div><div>(b) $\bar{2}.4751$</div><div>(c) $0.34751$</div><div>(d) None of these</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">37.</span> If $\log(2a - 3b) = \log a - \log b$, then $a =$</div>
        <div class="options-grid">
          <div>(a) $\dfrac{3b^2}{2b-1}$</div><div>(b) $\dfrac{3b}{2b-1}$</div><div>(c) $\dfrac{b^2}{2b+1}$</div><div>(d) $\dfrac{3b^2}{2b+1}$</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">38.</span> If $\log(x - y) - \log 5 - \dfrac{1}{2}\log x - \dfrac{1}{2}\log y = 0$, then $\dfrac{x}{y} + \dfrac{y}{x} =$</div>
        <div class="options-grid">
          <div>(a) $25$</div><div>(b) $26$</div><div>(c) $27$</div><div>(d) $28$</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">39.</span> If $\log x : 3 = \log y : 4 = \log z : 5$, then $zx =$</div>
        <div class="options-grid">
          <div>(a) $2y$</div><div>(b) $y^2$</div><div>(c) $8y$</div><div>(d) $4y$</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">40.</span> If $3 + \log_5 x = 2\log_{25} y$, then $x =$</div>
        <div class="options-grid">
          <div>(a) $y/125$</div><div>(b) $y/25$</div><div>(c) $y^2/625$</div><div>(d) $3 - y^2/25$</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">41.</span> If $\dfrac{\log_2 a}{2} = \dfrac{\log_3 b}{3} = \dfrac{\log_4 c}{4}$ and $a^{1/2} \cdot b^{1/3} \cdot c^{1/4} = 24$, then</div>
        <div class="options-grid">
          <div>(a) $a = 24$</div><div>(b) $b = 81$</div><div>(c) $c = 64$</div><div>(d) $c = 256$</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">42.</span> If $\dfrac{\log_2 x}{3} = \dfrac{\log_2 y}{4} = \dfrac{\log_2 z}{5k}$ and $\dfrac{z}{x^3 y^4} = 1$, then $k =$</div>
        <div class="options-grid">
          <div>(a) $3$</div><div>(b) $4$</div><div>(c) $5$</div><div>(d) $-5$</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">43.</span> $\dfrac{3 + \log_{10} 343}{2 + \dfrac{1}{2}\log\left(\dfrac{49}{4}\right) + \dfrac{1}{3}\log\left(\dfrac{1}{125}\right)} =$</div>
        <div class="options-grid">
          <div>(a) $3$</div><div>(b) $3/2$</div><div>(c) $2$</div><div>(d) $1$</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">44.</span> If $\dfrac{\log x}{a^2 + ab + b^2} = \dfrac{\log y}{b^2 + bc + c^2} = \dfrac{\log z}{c^2 + ca + a^2}$, then $x^{a-b} \cdot y^{b-c} \cdot z^{c-a} =$</div>
        <div class="options-grid">
          <div>(a) $0$</div><div>(b) $-1$</div><div>(c) $1$</div><div>(d) $2$</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">45.</span> If $3^{x-2} = 5$ and $\log_{10} 2 = 0.20103$ <span style="font-size:0.78em;color:#64748b;">(standard: $0.30103$)</span>, $\log_{10} 3 = 0.4771$, then $x =$</div>
        <div class="options-grid">
          <div>(a) $1\dfrac{22187}{47710}$</div><div>(b) $2\dfrac{22187}{47710}$</div><div>(c) $3\dfrac{22187}{47710}$</div><div>(d) None of these</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">46.</span> If $\log 2 = 0.30103$ and $\log 3 = 0.4771$, then number of digits in $(648)^5$ is:</div>
        <div class="options-grid">
          <div>(a) $12$</div><div>(b) $13$</div><div>(c) $14$</div><div>(d) $15$</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">47.</span> If $\log x = \dfrac{\log y}{2} = \dfrac{\log z}{5}$, then $x^4 \cdot y^3 \cdot z^{-2} =$</div>
        <div class="options-grid">
          <div>(a) $2$</div><div>(b) $10$</div><div>(c) $1$</div><div>(d) $0$</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">48.</span> $\dfrac{\log\sqrt{27} + \log\sqrt{1000} + \log 8}{\log 120}$</div>
        <div class="options-grid">
          <div>(a) $1/2$</div><div>(b) $1$</div><div>(c) $3/2$</div><div>(d) $2$</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">49.</span> For $x &gt; 0$, if $y = \dfrac{10^{\log_{10} x}}{x^2}$ and $x = y^a$, then $a =$</div>
        <div class="options-grid">
          <div>(a) $1$</div><div>(b) $-1$</div><div>(c) $0$</div><div>(d) $2$</div>
        </div>
      </div>

      <div class="q-item">
        <div class="q-stem"><span class="q-num">50.</span> If $x = \log_{4/3}(1/2)$ <span style="font-size:0.78em;color:#64748b;">(printed $100_{4/3}(1/2)$)</span>, $y = \log_{1/2}(1/3)$, then</div>
        <div class="options-grid">
          <div>(a) $x &gt; y$</div><div>(b) $x &lt; y$</div><div>(c) $x = y$</div><div>(d) $x \ge y$</div>
        </div>
      </div>
    </div><!-- end chapter-flow -->

    <!-- ANSWER KEYS FOR CHAPTER 19 -->
    <h2 class="section-head">Answer Keys &mdash; Chapter 19 Exercise-1</h2>
    <div class="key-grid span-all">
      <div class="key-cell"><span>1.</span> (b)</div>
      <div class="key-cell"><span>2.</span> (a)</div>
      <div class="key-cell"><span>3.</span> (d)</div>
      <div class="key-cell"><span>4.</span> (b)</div>
      <div class="key-cell"><span>5.</span> (c)</div>
      <div class="key-cell"><span>6.</span> (a)</div>
      <div class="key-cell"><span>7.</span> (a)</div>
      <div class="key-cell"><span>8.</span> (b)</div>
      <div class="key-cell"><span>9.</span> (a)</div>
      <div class="key-cell"><span>10.</span> (c)</div>
      <div class="key-cell"><span>11.</span> (d)</div>
      <div class="key-cell"><span>12.</span> (a)</div>
      <div class="key-cell"><span>13.</span> (b)</div>
      <div class="key-cell"><span>14.</span> (c)</div>
      <div class="key-cell"><span>15.</span> (d)</div>
      <div class="key-cell"><span>16.</span> (c)</div>
      <div class="key-cell"><span>17.</span> (d)</div>
      <div class="key-cell"><span>18.</span> (b)</div>
      <div class="key-cell"><span>19.</span> (a)</div>
      <div class="key-cell"><span>20.</span> (b)</div>
      <div class="key-cell"><span>21.</span> (c)</div>
      <div class="key-cell"><span>22.</span> (c)</div>
      <div class="key-cell"><span>23.</span> (d)</div>
      <div class="key-cell"><span>24.</span> (b)</div>
      <div class="key-cell"><span>25.</span> (c)</div>
      <div class="key-cell"><span>26.</span> (b)</div>
      <div class="key-cell"><span>27.</span> (a)</div>
      <div class="key-cell"><span>28.</span> (b)</div>
      <div class="key-cell"><span>29.</span> (b)</div>
      <div class="key-cell"><span>30.</span> (c)</div>
      <div class="key-cell"><span>31.</span> (d)</div>
      <div class="key-cell"><span>32.</span> (a)</div>
      <div class="key-cell"><span>33.</span> (b)</div>
      <div class="key-cell"><span>34.</span> (c)</div>
      <div class="key-cell"><span>35.</span> (b)</div>
      <div class="key-cell"><span>36.</span> (b)</div>
      <div class="key-cell"><span>37.</span> (a)</div>
      <div class="key-cell"><span>38.</span> (c)</div>
      <div class="key-cell"><span>39.</span> (b)</div>
      <div class="key-cell"><span>40.</span> (a)</div>
      <div class="key-cell"><span>41.</span> (d)</div>
      <div class="key-cell"><span>42.</span> (c)</div>
      <div class="key-cell"><span>43.</span> (a)</div>
      <div class="key-cell"><span>44.</span> (c)</div>
      <div class="key-cell"><span>45.</span> (c)</div>
      <div class="key-cell"><span>46.</span> (d)</div>
      <div class="key-cell"><span>47.</span> (c)</div>
      <div class="key-cell"><span>48.</span> (c)</div>
      <div class="key-cell"><span>49.</span> (b)</div>
      <div class="key-cell"><span>50.</span> (b)</div>
    </div>

    <!-- EXPLANATORY ANSWERS FOR CHAPTER 19 (1 to 50) -->
    <h2 class="section-head">Explanatory Answers &mdash; Chapter 19 Exercise-1</h2>
    <div class="chapter-flow">
      <div class="sol-item">
        <span class="sol-num">1.</span><span class="sol-ans">(b)</span>
        Let $\log_{3/2} 3.375 = x \implies \left(\dfrac{3}{2}\right)^x = 3.375 \implies (1.5)^x = (1.5)^3 \implies x = 3$.
      </div>

      <div class="sol-item">
        <span class="sol-num">2.</span><span class="sol-ans">(a)</span>
        $$yz(2 - x) = 2yz - xyz = 2\log_{4a} 2a - \log_{4a} a = \log_{4a}\left(\frac{4a^2}{a}\right) = \log_{4a}(4a) = 1.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">3.</span><span class="sol-ans">(d)</span>
        Set each ratio equal to $k$:
        $$\log x = k(l + m - 2n), \quad \log y = k(m + n - 2l), \quad \log z = k(n + l - 2m).$$
        Add all three: $\log(xyz) = k(0) = 0 \implies xyz = e^0 = 1 \implies x^2 y^2 z^2 = 1$.
      </div>

      <div class="sol-item">
        <span class="sol-num">4.</span><span class="sol-ans">(b)</span>
        $$\log\left(\frac{x+y}{5}\right) = \frac{1}{2}[\log x + \log y] \implies x + y = 5\sqrt{xy} \implies x^2 + y^2 = 23xy \implies \frac{x}{y} + \frac{y}{x} = 23.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">5.</span><span class="sol-ans">(c)</span>
        $$x + y = \frac{3x - 3y}{2} \implies 2x + 2y = 3x - 3y \implies x = 5y \implies \frac{x}{y} = 5 \implies \log x - \log y = \log 5.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">6.</span><span class="sol-ans">(a)</span>
        $$\log_2 x + \frac{1}{2}\log_2 x + \frac{1}{4}\log_2 x = \frac{21}{4} \implies \log_2 x \left(1 + \frac{1}{2} + \frac{1}{4}\right) = \frac{21}{4} \implies \log_2 x = 3 \implies x = 8.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">7.</span><span class="sol-ans">(a)</span>
        $$7\log\left(\frac{2^4}{5 \times 3}\right) + 5\log\left(\frac{5^2}{2^3 \times 3}\right) + 3\log\left(\frac{3^4}{2^4 \times 5}\right)$$
        $$= 28\log 2 - 7\log 5 - 7\log 3 + 10\log 5 - 15\log 2 - 5\log 3 + 12\log 3 - 12\log 2 - 3\log 5 = \log 2.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">8.</span><span class="sol-ans">(b)</span>
        For $0 &lt; a \le x$, the minimum value of $\log_a x + \log_x a$ is $2$. This occurs when $x = a$.
      </div>

      <div class="sol-item">
        <span class="sol-num">9.</span><span class="sol-ans">(a)</span>
        Let $\dfrac{\log x}{b - c} = \dfrac{\log y}{c - a} = \dfrac{\log z}{a - b} = k$.
        Then $\log x = k(b - c)$, $\log y = k(c - a)$, $\log z = k(a - b)$.
        $$\log x + \log y + \log z = 0 \implies xyz = 1.$$
        Also, $a\log x + b\log y + c\log z = 0 \implies x^a \cdot y^b \cdot z^c = 1$.
        Again, $(b + c)\log x + (c + a)\log y + (a + b)\log z = 0 \implies x^{b+c} \cdot y^{c+a} \cdot z^{a+b} = 1$.
        $$\therefore xyz = x^a \cdot y^b \cdot z^c = x^{b+c} \cdot y^{c+a} \cdot z^{a+b} = 1.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">10.</span><span class="sol-ans">(c)</span>
        Let $x^{\log y - \log z} \cdot y^{\log z - \log x} \cdot z^{\log x - \log y} = k$. Take logarithms:
        $$(\log y - \log z)\log x + (\log z - \log x)\log y + (\log x - \log y)\log z = \log k = 0 \implies k = 1.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">11.</span><span class="sol-ans">(d)</span>
        $$98 + \sqrt{x^2 - 12x + 36} = 100 \implies \sqrt{x^2 - 12x + 36} = 2 \implies x^2 - 12x + 32 = 0 \implies x = 8, 4.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">12.</span><span class="sol-ans">(a)</span>
        $x = \log_a bc \implies a^x = bc \implies a^{x+1} = abc \implies a = (abc)^{1/(x+1)}$.
        Similarly, $b = (abc)^{1/(y+1)}$ and $c = (abc)^{1/(z+1)}$.
        $$\therefore abc = (abc)^{\frac{1}{x+1} + \frac{1}{y+1} + \frac{1}{z+1}} \implies 1 = \frac{1}{x+1} + \frac{1}{y+1} + \frac{1}{z+1}$$
        $$\implies (x+1)(y+1)(z+1) = (y+1)(z+1) + (x+1)(z+1) + (x+1)(y+1) \implies xyz = x + y + z + 2.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">13.</span><span class="sol-ans">(b)</span>
        $b^y = a^x \implies b = a^{x/y}$, $c = a^{x/z}$, $d = a^{x/w}$.
        $$\log_a(bcd) = \log_a\left(a^{\frac{x}{y}} \cdot a^{\frac{x}{z}} \cdot a^{\frac{x}{w}}\right) = \frac{x}{y} + \frac{x}{z} + \frac{x}{w} = x\left(\frac{1}{y} + \frac{1}{z} + \frac{1}{w}\right).$$
      </div>

      <div class="sol-item">
        <span class="sol-num">14.</span><span class="sol-ans">(c)</span>
        $$\log_{10}\left(\frac{1}{2}\right) = -\log_{10} 2 = -0.3010 = 1 - 0.3010 - 1 = \bar{1}.6990.$$
        <div class="note-box">Source prints $1.6990$ for $\bar{1}.6990$ (negative characteristic $-1$, positive mantissa $+0.6990$).</div>
      </div>

      <div class="sol-item">
        <span class="sol-num">15.</span><span class="sol-ans">(d)</span>
        $\log_2(3^{2x-2} + 7) = \log_2 4 + \log_2(3^{x-1} + 1) \quad [\because 2 = 2\log_2 2 = \log_2 2^2]$.
        $$\implies 3^{2x-2} + 7 = 4(3^{x-1} + 1).$$
        Let $3^{x-1} = t$: $t^2 + 7 = 4(t + 1) \implies t^2 - 4t + 3 = 0 \implies t = 1, 3$.
        When $t = 1 \implies 3^{x-1} = 1 \implies x = 1$. When $t = 3 \implies 3^{x-1} = 3^1 \implies x = 2$.
      </div>

      <div class="sol-item">
        <span class="sol-num">16.</span><span class="sol-ans">(c)</span>
        Let $\log_a b = \log_b c = \log_c a = k$. Then $b = a^k$, $c = b^k$, $a = c^k$.
        $$\implies c = (a^k)^k = a^{k^2} = (c^k)^{k^2} = c^{k^3} \implies k^3 = 1 \implies k = 1. \quad \therefore a = b = c.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">17.</span><span class="sol-ans">(d)</span>
        $$\log_{10} x = 2\log_{10} a - 2 \implies \log_{10} x = 2(\log_{10} a - 1) \implies \log_{10} x = 2\log_{10}\left(\frac{a}{10}\right) \implies x = \frac{a^2}{100}.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">18.</span><span class="sol-ans">(b)</span>
        $$\log_b(c + a) + \log_b(c - a) = \log_b(c^2 - a^2) = \log_b b^2 = 2.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">19.</span><span class="sol-ans">(a)</span>
        Let $x = (875)^{10} = (87.5 \times 10)^{10}$.
        $$\therefore \log_{10} x = 10(\log_{10} 87.5 + 1) = 10(1.9421 + 1) = 10(2.9421) = 29.421.$$
        $\therefore x = \text{Antilog}(29.421)$. Number of digits in $x = 29 + 1 = 30$.
      </div>

      <div class="sol-item">
        <span class="sol-num">20.</span><span class="sol-ans">(b)</span>
        <div class="note-box">Explanatory text for Q20 was omitted in the source PDF. Derivation for completeness:
        $\log_{10}(0.0432)^{10} = 10\log_{10}(432 \times 10^{-4}) = 10(4\log_{10}2 + 3\log_{10}3 - 4) = 10(1.2040 + 1.4313 - 4) = -13.647 = \bar{14}.353$. Number of zeros after decimal $= 14 - 1 = 13$.</div>
      </div>

      <div class="sol-item">
        <span class="sol-num">21.</span><span class="sol-ans">(c)</span>
        $(4.2)^x = 100 \implies (42)^x = 10^{2+x} \implies 42 = 10^{\frac{2}{x} + 1} \quad \dots(1)$
        <br>And $(0.42)^y = 100 \implies (42)^y = 10^{2+2y} \implies 42 = 10^{\frac{2}{y} + 2} \quad \dots(2)$
        <div class="note-box">Note: Source print has minor OCR/typographical glitches in Q21 intermediate lines, e.g., $42 = (42/100)^y$ and $\frac{2}{x} - \frac{2}{y} = 100$. Using equations (1) and (2): $\frac{2}{x} + 1 = \frac{2}{y} + 2 \implies \frac{2}{x} - \frac{2}{y} = 1 \implies \frac{1}{x} - \frac{1}{y} = \frac{1}{2}$.</div>
      </div>

      <div class="sol-item">
        <span class="sol-num">22.</span><span class="sol-ans">(c)</span>
        $$\frac{\log_9 11}{\log_5 13} - \frac{\log_3 11}{\log_{\sqrt{5}} 13} = \frac{\log_3 11}{2\log_5 13} - \frac{\log_3 11}{2\log_5 13} = 0.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">23.</span><span class="sol-ans">(d)</span>
        Let $\dfrac{\log x}{2} = \dfrac{\log y}{3} = \dfrac{\log z}{5} = k$. Then $\log x = 2k$, $\log y = 3k$, $\log z = 5k$.
        $$\implies \log(yz) = 3k + 5k = 8k; \quad \log(x^4) = 8k. \quad \therefore \log(yz) = \log(x^4) \implies yz = x^4.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">24.</span><span class="sol-ans">(b)</span>
        $$4^x + \frac{4^x}{2} = \frac{3^x}{\sqrt{3}} + 3^x \cdot \sqrt{3} \implies 4^x \cdot \frac{3}{2} = 3^x \cdot \frac{4}{\sqrt{3}} \implies \left(\frac{4}{3}\right)^x = \frac{8}{3\sqrt{3}}$$
        $$\implies \left(\frac{4}{3}\right)^x = \left(\frac{4}{3}\right)^{3/2} \implies x = \frac{3}{2}.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">25.</span><span class="sol-ans">(c)</span>
        $$\frac{\log 7^{5/2} + \log 5^{5/2} - \log 2^{5/2}}{\log 17.5} = \frac{\frac{5}{2}(\log 7 + \log 5 - \log 2)}{\log\left(\frac{35}{2}\right)} = \frac{\frac{5}{2}\log\left(\frac{35}{2}\right)}{\log\left(\frac{35}{2}\right)} = \frac{5}{2}.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">26.</span><span class="sol-ans">(b)</span>
        $$\log_{10}\tan 40^\circ \cdot \log_{10}\tan 41^\circ \dots \log_{10}\tan 50^\circ = 0, \quad \text{because } \log_{10}\tan 45^\circ = \log_{10} 1 = 0.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">27.</span><span class="sol-ans">(a)</span>
        $\log_8 p = \dfrac{5}{2} \implies p = 8^{5/2} = 2^{15/2} = (2^5)^{3/2}$. Also $\log_2 q = 5 \implies q = 2^5$.
        $$\therefore p = q^{3/2} = q\sqrt{q}.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">28.</span><span class="sol-ans">(b)</span>
        $\log_a y = \dfrac{1}{1 - \log_a x}$, $\log_a z = \dfrac{1}{1 - \log_a y}$.
        $$\therefore \log_a z = \frac{1}{1 - \left(\frac{1}{1 - \log_a x}\right)} = \frac{1 - \log_a x}{-\log_a x} \implies -\log_a z = -1 + \frac{1}{\log_a x}$$
        $$\implies \frac{1}{\log_a x} = 1 - \log_a z \implies \log_a x = \frac{1}{1 - \log_a z} \implies x = a^{\frac{1}{1 - \log_a z}} = a^k \text{ (given)}.$$
        $$\therefore k = \frac{1}{1 - \log_a z}.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">29.</span><span class="sol-ans">(b)</span>
        $$\log_e 2 \cdot 4\log_b 5 = 4 \cdot \log_{10} 2 \cdot \log_e 10 = 4\log_e 2 \implies \log_b 5 = 1 \implies b = 5.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">30.</span><span class="sol-ans">(c)</span>
        $$5^{\sqrt{\log_5 7}} - \left(7^{\log_7 5}\right)^{\frac{1}{\sqrt{\log_7 5}}} = 5^{\sqrt{\log_5 7}} - \frac{1}{5^{-\sqrt{\log_5 7}}} \implies 5^{\sqrt{\log_5 7}} - 5^{\sqrt{\log_5 7}} = 0.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">31.</span><span class="sol-ans">(d)</span>
        $$2^{\log_3 7} - 7^{\log_3 2} = 2^{\log_2 7 \cdot \log_3 2} - 7^{\log_3 2} = 7^{\log_3 2} - 7^{\log_3 2} = 0.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">32.</span><span class="sol-ans">(a)</span>
        $$a + b = \log_{30} 15 = \log_{30}\left(\frac{30}{2}\right) = 1 - \log_{30} 2 \implies \log_{30} 2 = 1 - a - b.$$
        $$\therefore \log_{30} 8 = 3\log_{30} 2 = 3(1 - a - b).$$
      </div>

      <div class="sol-item">
        <span class="sol-num">33.</span><span class="sol-ans">(b)</span>
        For $0 &lt; a &lt; 1$, $0 &lt; x &lt; 1$ and $x &lt; a$:
        $$\log_a x &gt; \log_a a \implies \log_a x &gt; 1.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">34.</span><span class="sol-ans">(c)</span>
        Suppose $\log_5 2 = \dfrac{p}{q} \implies 2 = 5^{p/q} \implies 2^q = 5^p$, which gives an even number equal to an odd number (a contradiction for positive integers $p,q$). Therefore, $\log_5 2$ is an irrational number.
      </div>

      <div class="sol-item">
        <span class="sol-num">35.</span><span class="sol-ans">(b)</span>
        $$\log_5\frac{6}{5} + \log_5\frac{7}{6} + \log_5\frac{8}{7} + \dots + \log_5\frac{625}{624} = \log_5\left(\frac{6}{5}\cdot\frac{7}{6}\cdot\frac{8}{7}\cdots\frac{625}{624}\right) = \log_5\left(\frac{625}{5}\right) = \log_5(125) = 3.$$
        <div class="note-box">Note: Source solution evaluates $\log_5(625/5) = 4$ (selecting option (b)). Mathematically $625/5 = 125 = 5^3$, so $\log_5 125 = 3$.</div>
      </div>

      <div class="sol-item">
        <span class="sol-num">36.</span><span class="sol-ans">(b)</span>
        $$\log_{10}(0.02986) = \log_{10}\left(\frac{2986}{100000}\right) = 3.4751 - 5 = -1.5249 = \bar{2}.4751.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">37.</span><span class="sol-ans">(a)</span>
        $$2a - 3b = \frac{a}{b} \implies 2ab - 3b^2 = a \implies 3b^2 = a(2b - 1) \implies a = \frac{3b^2}{2b - 1}.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">38.</span><span class="sol-ans">(c)</span>
        $$\frac{x - y}{5\sqrt{xy}} = 1 \implies (x - y)^2 = 25xy \implies x^2 + y^2 = 27xy \implies \frac{x}{y} + \frac{y}{x} = 27.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">39.</span><span class="sol-ans">(b)</span>
        Let $\dfrac{\log x}{3} = \dfrac{\log y}{4} = \dfrac{\log z}{5} = k \implies \log x = 3k, \; \log y = 4k, \; \log z = 5k$.
        $$\implies \log(zx) = \log z + \log x = 8k = 2\log y \quad \therefore zx = y^2.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">40.</span><span class="sol-ans">(a)</span>
        $$3 + \log_5 x = \log_5 y \implies \log_5(125x) = \log_5 y \implies 125x = y \implies x = \frac{y}{125}.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">41.</span><span class="sol-ans">(d)</span>
        Let $\dfrac{\log_2 a}{2} = \dfrac{\log_3 b}{3} = \dfrac{\log_4 c}{4} = k \implies a = 2^{2k}, \; b = 3^{3k}, \; c = 4^{4k}$.
        $$a^{1/2} \cdot b^{1/3} \cdot c^{1/4} = 2^k \cdot 3^k \cdot 4^k = 24 \implies 24^k = 24^1 \implies k = 1.$$
        $$\therefore a = 4, \; b = 27, \; c = 256.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">42.</span><span class="sol-ans">(c)</span>
        $$\frac{z}{x^3 y^4} = 1 \implies \log_2 z - 3\log_2 x - 4\log_2 y = 0 \implies \log_2 z - 3\cdot\frac{3}{5k}\log_2 z - 4\cdot\frac{4}{5k}\log_2 z = 0$$
        $$\implies 1 - \frac{9}{5k} - \frac{16}{5k} = 0 \implies 5k - 25 = 0 \implies k = 5.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">43.</span><span class="sol-ans">(a)</span>
        $$\frac{3(1 + \log_{10} 7)}{2 + \log\frac{7}{2} + \log\frac{1}{5}} = \frac{3(1 + \log_{10} 7)}{2 + \log\left(\frac{7}{10}\right)} = \frac{3(1 + \log_{10} 7)}{1 + \log_{10} 7} = 3.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">44.</span><span class="sol-ans">(c)</span>
        Each ratio $= k \implies \log x = k(a^2 + ab + b^2) \implies (a - b)\log x = k(a^3 - b^3) \implies x^{a-b} = e^{k(a^3 - b^3)}$.
        Similarly, $y^{b-c} = e^{k(b^3 - c^3)}$ and $z^{c-a} = e^{k(c^3 - a^3)}$.
        $$\therefore x^{a-b} \cdot y^{b-c} \cdot z^{c-a} = e^0 = 1.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">45.</span><span class="sol-ans">(c)</span>
        $$3^{x-2} = 5 \implies 3^x = 45 = \left(\frac{90}{2}\right) \implies x\log_{10} 3 = \log_{10} 90 - \log_{10} 2 = 2\log_{10} 3 + 1 - \log_{10} 2$$
        $$\implies x(0.4771) = 1.65317 \implies x = \frac{165317}{47710} = 3\frac{22187}{47710}.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">46.</span><span class="sol-ans">(d)</span>
        $$\log(648)^5 = 5\log(81 \times 8) = 20\log 3 + 15\log 2 = 20(0.4771) + 15(0.30103) = 14.05745.$$
        $\therefore$ Number of digits in $(648)^5$ is $15$.
      </div>

      <div class="sol-item">
        <span class="sol-num">47.</span><span class="sol-ans">(c)</span>
        Let $\dfrac{\log x}{1} = \dfrac{\log y}{2} = \dfrac{\log z}{5} = k \implies \log x = k, \; \log y = 2k, \; \log z = 5k$.
        $$\therefore \log(x^4 \cdot y^3 \cdot z^{-2}) = 4\log x + 3\log y - 2\log z = 0 \implies x^4 \cdot y^3 \cdot z^{-2} = 1.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">48.</span><span class="sol-ans">(c)</span>
        $$\frac{\log\sqrt{27} + \log\sqrt{1000} + \log 8}{\log 120} = \frac{\frac{3}{2}(\log 3 + \log 10 + \log 4)}{\log 3 + \log 10 + \log 4} = \frac{3}{2}.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">49.</span><span class="sol-ans">(b)</span>
        $$y = \frac{10^{\log_{10} x}}{x^2} = \frac{x}{x^2} = \frac{1}{x} = \frac{1}{y^a} = y^{-a} \implies a = -1.$$
      </div>

      <div class="sol-item">
        <span class="sol-num">50.</span><span class="sol-ans">(b)</span>
        $x = \log_{4/3}(1/2) = -\log_{4/3} 2 &lt; 0$ and $y = \log_{1/2}(1/3) = \log_2 3 &gt; 0 \implies y &gt; x$ (i.e., $x &lt; y$).
      </div>
    </div>

    <div class="source-ref">Note: Source Page 9 is intentionally left blank.</div>

    <!-- ===================================================================== -->
    <!-- CHAPTER 28: QUADRATIC EQUATIONS (Page 10)                             -->
    <!-- ===================================================================== -->
    <div class="chapter-banner page-break">
      <div class="chapter-num">
        <small>Chapter</small>
        <strong>28</strong>
      </div>
      <div class="chapter-title">
        <h1>Quadratic Equations</h1>
        <p>Introduction, Roots, Quadratic Formula, Factorization, Illustration 1 &amp; Nature of Roots</p>
      </div>
    </div>

    <div class="chapter-flow">
      <h2 class="section-head">Introduction &amp; Roots</h2>

      <div class="card card-def">
        <p><span class="badge">Definition</span> An equation of degree two is a <strong>quadratic equation</strong>. Its general form is:</p>
        $$ax^2 + bx + c = 0$$
        <p>where $a, b, c$ are real numbers, $a \neq 0$, and $x$ is a real variable.</p>
        <p><strong>Examples:</strong> $x^2 + 4x + 3 = 0$, $3x^2 - 4x + 5 = 0$, and $3x^2 + 2x - 3 = 0$.</p>
      </div>

      <div class="card card-def">
        <p><span class="badge">Roots</span> A <strong>root</strong> of $f(x) = 0$ is a value of $x$ that makes $f(x) = 0$. Replace $x$ with $a$ in $f(x)$ to calculate $f(a)$. If $f(a) = 0$, then $x = a$ is a root of $f(x) = 0$.</p>
        <p><strong>Example:</strong> $-1$ is a root of $x^2 + 6x + 5 = 0$, because $(-1)^2 + 6(-1) + 5 = 0$.</p>
      </div>

      <h2 class="section-head">Solution of a Quadratic Equation</h2>

      <div class="card card-shortcut">
        <p><span class="badge badge-teal">Quadratic Formula</span> For $ax^2 + bx + c = 0$ ($a \neq 0$), the two roots are:</p>
        $$x = \frac{-b + \sqrt{b^2 - 4ac}}{2a} \quad \text{and} \quad x = \frac{-b - \sqrt{b^2 - 4ac}}{2a}.$$
      </div>

      <div class="card card-illustration">
        <p><span class="badge badge-amber">Illustration 1</span> Solve these quadratic equations:</p>
        <p><strong>(i)</strong> $6x^2 + x - 2 = 0$ &qquad; <strong>(ii)</strong> $2x^2 + x - 1 = 0$</p>

        <h3 class="sub-head">Solution (i): $6x^2 + x - 2 = 0$</h3>
        <p><strong>Method 1 &mdash; Using formula:</strong></p>
        $$x = \frac{-1 \pm \sqrt{(1)^2 - 4(6)(-2)}}{2 \times 6} = \frac{-1 \pm \sqrt{49}}{12} = \frac{6}{12}, \frac{-8}{12}$$
        $$\text{i.e., } \frac{1}{2}, -\frac{2}{3}.$$
        <p><strong>Method 2 &mdash; Using factorization:</strong></p>
        $$6x^2 + x - 2 = 0 \iff 6x^2 + 4x - 3x - 2 = 0$$
        $$\iff 2x(3x + 2) - 1(3x + 2) = 0 \iff (2x - 1)(3x + 2) = 0$$
        <div class="note-box">Note: Source text prints $(2x+1)(3x+2)=0$ before correctly concluding $x = \frac{1}{2}$ or $x = -\frac{2}{3}$.</div>
        $$\iff x = \frac{1}{2} \text{ or } x = -\frac{2}{3}.$$

        <h3 class="sub-head">Solution (ii): $2x^2 + x - 1 = 0$</h3>
        <p><strong>Method 1 &mdash; Using formula:</strong></p>
        $$x = \frac{-1 \pm \sqrt{(1)^2 - 4(2)(-1)}}{2 \times 2} = \frac{-1 \pm \sqrt{9}}{4} = \frac{-1 \pm 3}{4} = \frac{2}{4}, \frac{-4}{4}, \quad \text{i.e., } \frac{1}{2}, -1.$$
        <p><strong>Method 2 &mdash; Using factorization:</strong></p>
        $$2x^2 + x - 1 = 0 \iff 2x^2 + 2x - x - 1 = 0$$
        $$\iff 2x(x + 1) - 1(x + 1) = 0 \iff (2x - 1)(x + 1) = 0$$
        <div class="note-box">Note: Source text prints $(2x-1)(x-1)=0$ as a minor typo before correctly concluding $x = \frac{1}{2}$ or $x = -1$.</div>
        $$\iff x = \frac{1}{2} \text{ or } x = -1.$$
      </div>

      <h2 class="section-head">Nature of Roots</h2>

      <div class="card card-def">
        <p>A quadratic equation has exactly two roots. These roots can be real, imaginary, or coincident.</p>
        <p>For $ax^2 + bx + c = 0$ ($a \neq 0$), the quantity $D = b^2 - 4ac$ is the <strong>discriminant</strong>.</p>
        <p><strong>1. If $D &gt; 0$:</strong> There are two distinct real roots:</p>
        $$\alpha = \frac{-b + \sqrt{b^2 - 4ac}}{2a}, \qquad \beta = \frac{-b - \sqrt{b^2 - 4ac}}{2a}.$$
        <p><strong>2. If $D = 0$:</strong> There is one repeated real root (roots are real and equal):</p>
        $$\alpha = -\frac{b}{2a}.$$
        <p><strong>3. If $D &lt; 0$:</strong> There are no real roots.</p>
      </div>

      <!-- SVG Diagram 3: Discriminant & Nature of Roots -->
      <div class="svg-figure">
        <svg viewBox="0 0 540 185" width="540" height="185" role="img" aria-label="Parabola graphs showing nature of roots for D > 0, D = 0, and D < 0">
          <!-- Panel 1: D > 0 -->
          <g transform="translate(10,10)">
            <rect x="0" y="0" width="166" height="162" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
            <text x="83" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#0f766e">D &gt; 0</text>
            <line x1="15" y1="95" x2="151" y2="95" stroke="#64748b" stroke-width="1.3"/>
            <text x="148" y="89" font-size="10" fill="#64748b">x</text>
            <!-- Parabola crossing x-axis twice -->
            <path d="M 30 40 Q 83 160 136 40" fill="none" stroke="#0f766e" stroke-width="2.5"/>
            <circle cx="52" cy="95" r="3.8" fill="#b45309"/>
            <circle cx="114" cy="95" r="3.8" fill="#b45309"/>
            <text x="48" y="111" text-anchor="middle" font-size="10.5" font-weight="700" fill="#b45309">α</text>
            <text x="118" y="111" text-anchor="middle" font-size="10.5" font-weight="700" fill="#b45309">β</text>
            <text x="83" y="146" text-anchor="middle" font-size="10.5" font-weight="600" fill="#334155">2 Distinct Real Roots</text>
          </g>

          <!-- Panel 2: D = 0 -->
          <g transform="translate(187,10)">
            <rect x="0" y="0" width="166" height="162" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
            <text x="83" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#1a365d">D = 0</text>
            <line x1="15" y1="105" x2="151" y2="105" stroke="#64748b" stroke-width="1.3"/>
            <text x="148" y="99" font-size="10" fill="#64748b">x</text>
            <!-- Parabola tangent to x-axis -->
            <path d="M 32 36 Q 83 174 134 36" fill="none" stroke="#1a365d" stroke-width="2.5"/>
            <circle cx="83" cy="105" r="3.8" fill="#b45309"/>
            <text x="83" y="121" text-anchor="middle" font-size="10.5" font-weight="700" fill="#b45309">α = β = -b/2a</text>
            <text x="83" y="146" text-anchor="middle" font-size="10.5" font-weight="600" fill="#334155">Repeated Real Root</text>
          </g>

          <!-- Panel 3: D < 0 -->
          <g transform="translate(364,10)">
            <rect x="0" y="0" width="166" height="162" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
            <text x="83" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#dc2626">D &lt; 0</text>
            <line x1="15" y1="115" x2="151" y2="115" stroke="#64748b" stroke-width="1.3"/>
            <text x="148" y="109" font-size="10" fill="#64748b">x</text>
            <!-- Parabola above x-axis -->
            <path d="M 32 34 Q 83 136 134 34" fill="none" stroke="#dc2626" stroke-width="2.5"/>
            <text x="83" y="146" text-anchor="middle" font-size="10.5" font-weight="600" fill="#334155">No Real Roots</text>
          </g>
        </svg>
        <div class="svg-caption">Figure 28.1: Geometric meaning of the discriminant $D = b^2 - 4ac$ (shown for $a &gt; 0$).</div>
      </div>
    </div>

  </main>

  <script>
    function setLayout(mode) {
      const body = document.body;
      const btnSingle = document.getElementById('btn-single');
      const btnTwo = document.getElementById('btn-two');
      if (mode === 'two') {
        body.classList.remove('single-col');
        body.classList.add('two-col');
        btnTwo.classList.add('active');
        btnSingle.classList.remove('active');
      } else {
        body.classList.remove('two-col');
        body.classList.add('single-col');
        btnSingle.classList.add('active');
        btnTwo.classList.remove('active');
      }
    }
  </script>
</body>
</html>
```

### How to Export Clean Single-Column & Two-Column PDFs (Zero Overflow)
1. Open `notes.html` in Chrome, Edge, or Brave.
2. Click **Single Column** in the top bar $\rightarrow$ click **Print / Save PDF** $\rightarrow$ select *Save as PDF*.
3. Click **Two Column** in the top bar $\rightarrow$ click **Print / Save PDF** $\rightarrow$ select *Save as PDF*.
   - All cards (`break-inside: avoid`), SVGs (`viewBox` + `max-width: 100%`), tables (`.table-wrap`), and MathJax formulas (`mjx-container` overflow rules) stay cleanly contained inside their columns without clipping.
