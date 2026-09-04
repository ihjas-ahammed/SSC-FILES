html_content = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quantum Mechanics — Chapter 2: The Time-Independent Schrödinger Equation (Complete Solutions)</title>
  
  <!-- KaTeX CSS & High-Speed Rendering Library -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"
    onload="renderMathInElement(document.body, {
      delimiters: [
        {left: '$$', right: '$$', display: true},
        {left: '$', right: '$', display: false},
        {left: '\\\\[', right: '\\\\]', display: true},
        {left: '\\\\(', right: '\\\\)', display: false}
      ],
      macros: {
        '\\\\bra': '\\\\langle #1 \\\\vert',
        '\\\\ket': '\\\\vert #1 \\\\rangle',
        '\\\\braket': '\\\\langle #1 \\\\vert #2 \\\\rangle',
        '\\\\sech': '\\\\operatorname{sech}',
        '\\\\Ai': '\\\\operatorname{Ai}',
        '\\\\Bi': '\\\\operatorname{Bi}'
      },
      throwOnError: false
    });"></script>

  <style>
    :root {
      --bg-page: #f8fafc;
      --bg-card: #ffffff;
      --text-main: #1e293b;
      --text-muted: #64748b;
      --text-light: #475569;
      --primary: #0f172a;
      --accent: #2563eb;
      --accent-subtle: #eff6ff;
      --border-subtle: #e2e8f0;
      --border-strong: #cbd5e1;
      --example-bg: #f8fafc;
      --example-border: #94a3b8;
      --problem-bg: #ffffff;
      --problem-border: #e2e8f0;
      --star-color: #f59e0b;
      --solution-bg: #fcfdfe;
      --solution-border: #3b82f6;
      --identities-bg: #f0fdf4;
      --identities-border: #86efac;
      --answer-bg: #f8fafc;
      --answer-border: #0ea5e9;
      --code-bg: #f1f5f9;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background-color: var(--bg-page);
      color: var(--text-main);
      font-family: 'Cambria', 'Georgia', 'Times New Roman', serif;
      font-size: 17px;
      line-height: 1.75;
      padding: 40px 20px;
    }

    .document-container {
      max-width: 920px;
      margin: 0 auto;
      background: var(--bg-card);
      padding: 60px 75px;
      border: 1px solid var(--border-subtle);
      border-radius: 4px;
      box-shadow: 0 4px 25px rgba(0, 0, 0, 0.05);
    }

    @media (max-width: 768px) {
      .document-container {
        padding: 30px 20px;
      }
      body {
        padding: 10px 5px;
      }
    }

    /* Header styling */
    .doc-header {
      border-bottom: 2px solid var(--primary);
      padding-bottom: 25px;
      margin-bottom: 40px;
      text-align: center;
    }

    .doc-supertitle {
      font-family: system-ui, -apple-system, sans-serif;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 13px;
      font-weight: 700;
      color: var(--accent);
      margin-bottom: 8px;
    }

    .doc-title {
      font-size: 32px;
      font-weight: 700;
      color: var(--primary);
      line-height: 1.25;
      margin-bottom: 12px;
    }

    .doc-subtitle {
      font-size: 18px;
      color: var(--text-muted);
      font-style: italic;
    }

    .doc-metadata {
      font-family: system-ui, -apple-system, sans-serif;
      font-size: 13px;
      color: var(--text-light);
      margin-top: 15px;
      display: flex;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
    }

    .doc-metadata span {
      display: inline-flex;
      align-items: center;
    }

    /* Section navigation overview */
    .toc-box {
      background: #f8fafc;
      border: 1px solid var(--border-subtle);
      border-radius: 6px;
      padding: 24px 30px;
      margin-bottom: 50px;
      font-family: system-ui, -apple-system, sans-serif;
    }

    .toc-title {
      font-size: 15px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--primary);
      margin-bottom: 15px;
      border-bottom: 1px solid var(--border-subtle);
      padding-bottom: 8px;
    }

    .toc-list {
      list-style-type: none;
      display: grid;
      grid-template-columns: 1fr;
      gap: 8px;
      font-size: 14px;
    }

    @media (min-width: 600px) {
      .toc-list {
        grid-template-columns: 1fr 1fr;
      }
    }

    .toc-list li {
      color: var(--text-light);
    }

    .toc-list a {
      color: var(--primary);
      text-decoration: none;
      font-weight: 500;
    }

    .toc-list a:hover {
      text-decoration: underline;
      color: var(--accent);
    }

    .toc-count {
      color: var(--text-muted);
      font-size: 12px;
      margin-left: 6px;
    }

    /* Section Styling */
    .section-block {
      margin-top: 60px;
      margin-bottom: 50px;
    }

    .section-header {
      border-bottom: 1.5px solid var(--border-strong);
      padding-bottom: 10px;
      margin-bottom: 30px;
    }

    .section-number {
      font-family: system-ui, -apple-system, sans-serif;
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: var(--accent);
    }

    .section-title {
      font-size: 26px;
      font-weight: 700;
      color: var(--primary);
      margin-top: 4px;
    }

    .section-desc {
      font-size: 15px;
      color: var(--text-muted);
      margin-top: 6px;
      font-style: italic;
    }

    /* Question Cards */
    .item-card {
      margin-bottom: 45px;
      padding: 26px 30px;
      border-radius: 6px;
      page-break-inside: avoid;
    }

    .example-card {
      background: var(--example-bg);
      border: 1px solid var(--example-border);
      border-left: 4px solid var(--accent);
    }

    .problem-card {
      background: var(--problem-bg);
      border: 1px solid var(--problem-border);
      border-left: 4px solid var(--primary);
    }

    .item-head {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      margin-bottom: 14px;
      border-bottom: 1px solid var(--border-subtle);
      padding-bottom: 8px;
    }

    .item-title-group {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
    }

    .item-badge {
      font-family: system-ui, -apple-system, sans-serif;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      padding: 2px 8px;
      border-radius: 3px;
    }

    .badge-example {
      background: #dbeafe;
      color: #1e40af;
    }

    .badge-problem {
      background: #f1f5f9;
      color: #334155;
    }

    .item-title {
      font-family: system-ui, -apple-system, sans-serif;
      font-size: 17px;
      font-weight: 700;
      color: var(--primary);
    }

    .item-stars {
      color: var(--star-color);
      font-size: 15px;
      letter-spacing: 2px;
    }

    .item-body {
      font-size: 16.5px;
      line-height: 1.75;
      color: var(--text-main);
    }

    .item-body p {
      margin-bottom: 12px;
    }

    .item-body p:last-child {
      margin-bottom: 0;
    }

    .item-parts {
      list-style-type: none;
      margin-top: 14px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .part-item {
      display: flex;
      align-items: flex-start;
      gap: 10px;
    }

    .part-label {
      font-weight: 700;
      color: var(--primary);
      min-width: 24px;
      flex-shrink: 0;
    }

    .part-content {
      flex: 1;
    }

    .hint-block {
      background: #f8fafc;
      border-left: 3px solid #94a3b8;
      padding: 10px 14px;
      margin-top: 14px;
      font-size: 15px;
      color: var(--text-light);
      border-radius: 0 4px 4px 0;
    }

    .hint-title {
      font-weight: 700;
      font-family: system-ui, -apple-system, sans-serif;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #475569;
      margin-bottom: 2px;
    }

    /* Cross References */
    .cross-ref {
      color: var(--accent);
      font-weight: 600;
      text-decoration: none;
      border-bottom: 1px dotted var(--accent);
    }

    .cross-ref:hover {
      text-decoration: none;
      border-bottom: 1px solid var(--accent);
      background-color: var(--accent-subtle);
    }

    /* Solution Box Styling */
    .solution-card {
      margin-top: 24px;
      padding: 22px 24px;
      background: var(--solution-bg);
      border: 1px solid #dbeafe;
      border-top: 3px solid var(--solution-border);
      border-radius: 4px;
    }

    .solution-header {
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .solution-badge {
      font-family: system-ui, -apple-system, sans-serif;
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #1e40af;
      background: #eff6ff;
      padding: 3px 10px;
      border-radius: 3px;
      border: 1px solid #bfdbfe;
    }

    .identities-box {
      background: var(--identities-bg);
      border: 1px solid var(--identities-border);
      border-radius: 4px;
      padding: 14px 18px;
      margin-bottom: 18px;
      font-size: 15px;
      color: #166534;
    }

    .identities-title {
      font-family: system-ui, -apple-system, sans-serif;
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #15803d;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .identities-list {
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .solution-steps {
      font-size: 16px;
      line-height: 1.8;
      color: var(--text-main);
    }

    .solution-steps p {
      margin-bottom: 12px;
    }

    .solution-steps p:last-child {
      margin-bottom: 0;
    }

    .solution-subpart {
      margin-top: 14px;
      margin-bottom: 14px;
      padding-left: 12px;
      border-left: 2px solid #cbd5e1;
    }

    .solution-subpart-label {
      font-weight: 700;
      color: var(--primary);
      font-family: system-ui, -apple-system, sans-serif;
      margin-bottom: 4px;
    }

    .final-answer-box {
      margin-top: 18px;
      padding: 14px 18px;
      background: var(--answer-bg);
      border: 1.5px solid var(--answer-border);
      border-radius: 4px;
      font-size: 15.5px;
    }

    .final-answer-title {
      font-family: system-ui, -apple-system, sans-serif;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #0369a1;
      margin-bottom: 4px;
    }

    .final-answer-content {
      color: var(--primary);
      font-weight: 500;
    }

    /* Diagram containers */
    .diagram-container {
      margin: 20px auto;
      padding: 15px;
      background: #ffffff;
      border: 1px solid var(--border-subtle);
      border-radius: 6px;
      text-align: center;
      max-width: 580px;
    }

    .diagram-svg {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 0 auto;
    }

    .diagram-caption {
      font-family: system-ui, -apple-system, sans-serif;
      font-size: 13px;
      color: var(--text-muted);
      margin-top: 10px;
      line-height: 1.4;
    }

    .diagram-caption strong {
      color: var(--text-main);
    }

    /* KaTeX specific fine-tuning */
    .katex {
      font-size: 1.05em;
    }
    .katex-display {
      margin: 0.8em 0;
      overflow-x: auto;
      overflow-y: hidden;
      padding: 4px 0;
    }

    /* Print styles */
    @media print {
      body {
        background: #ffffff;
        color: #000000;
        padding: 0;
        font-size: 13pt;
      }
      .document-container {
        border: none;
        box-shadow: none;
        padding: 0;
        max-width: 100%;
      }
      .item-card {
        border: 1px solid #ccc !important;
        page-break-inside: avoid;
        margin-bottom: 25px;
      }
      .toc-box {
        display: none;
      }
    }
  </style>
</head>
<body>

<div class="document-container">
  
  <header class="doc-header">
    <div class="doc-supertitle">Quantum Mechanics — Comprehensive Study Compendium</div>
    <h1 class="doc-title">Chapter 2: The Time-Independent Schrödinger Equation</h1>
    <p class="doc-subtitle">Complete Examples & Problems with In-Depth Step-by-Step Solutions & Mathematical Foundations</p>
    <div class="doc-metadata">
      <span><strong>Textbook:</strong> D. J. Griffiths, <em>Introduction to Quantum Mechanics</em></span>
      <span><strong>Coverage:</strong> Sections 2.1 – 2.6 & Further Problems</span>
      <span><strong>Contents:</strong> 6 Examples & 64 Problems with Complete Derivations</span>
    </div>
  </header>

  <nav class="toc-box">
    <div class="toc-title">Table of Contents / Section Index</div>
    <ul class="toc-list">
      <li><a href="#sec-2-1">§ 2.1 Stationary States</a> <span class="toc-count">(Ex 2.1 | Probs 2.1–2.2)</span></li>
      <li><a href="#sec-2-2">§ 2.2 The Infinite Square Well</a> <span class="toc-count">(Ex 2.2–2.3 | Probs 2.3–2.9)</span></li>
      <li><a href="#sec-2-3">§ 2.3 The Harmonic Oscillator</a> <span class="toc-count">(Ex 2.4–2.5 | Probs 2.10–2.16)</span></li>
      <li><a href="#sec-2-4">§ 2.4 The Free Particle</a> <span class="toc-count">(Ex 2.6 | Probs 2.17–2.21)</span></li>
      <li><a href="#sec-2-5">§ 2.5 The Delta-Function Potential</a> <span class="toc-count">(Probs 2.22–2.28)</span></li>
      <li><a href="#sec-2-6">§ 2.6 The Finite Square Well</a> <span class="toc-count">(Probs 2.29–2.35)</span></li>
      <li style="grid-column: 1 / -1;"><a href="#sec-further">Further Problems on Chapter 2</a> <span class="toc-count">(Problems 2.36 – 2.64)</span></li>
    </ul>
  </nav>
"""
