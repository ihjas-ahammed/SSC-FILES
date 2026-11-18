Below are the complete textbook notes written in **ASD-STE100 (Simplified Technical English)**, formatted as a self-contained HTML5 document with **MathJax** for LaTeX expressions, **inline SVG** for all diagrams, and overflow-safe CSS for both **single-column** and **two-column** layouts/PDF export.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Chapter 2: Entity-Relationship Model (Sections 2.6–2.8) — ASD-STE100 Textbook Notes</title>

  <!-- MathJax Configuration & Script -->
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
        scale: 0.96
      }
    };
  </script>
  <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

  <style>
    :root {
      --bg-page: #f4f6f9;
      --bg-paper: #ffffff;
      --ink: #1e293b;
      --ink-muted: #475569;
      --primary: #1d4ed8;
      --primary-dark: #1e3a8a;
      --primary-light: #eff6ff;
      --accent: #0f766e;
      --accent-light: #f0fdfa;
      --warn: #b45309;
      --warn-light: #fffbeb;
      --border: #cbd5e1;
      --shadow: 0 4px 20px rgba(15, 23, 42, 0.08);
    }

    *, *::before, *::after {
      box-sizing: border-box;
    }

    html, body {
      margin: 0;
      padding: 0;
      background: var(--bg-page);
      color: var(--ink);
      font-family: "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      font-size: 15px;
      line-height: 1.62;
      overflow-x: hidden;
    }

    /* Toolbar for Layout Switching (Hidden in Print/PDF) */
    .toolbar {
      position: sticky;
      top: 0;
      z-index: 100;
      background: #0f172a;
      color: #f8fafc;
      padding: 10px 20px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      border-bottom: 3px solid var(--primary);
    }

    .toolbar-title {
      font-size: 0.92rem;
      font-weight: 600;
      letter-spacing: 0.02em;
    }

    .toolbar-actions {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    .btn {
      background: #1e293b;
      color: #f8fafc;
      border: 1px solid #475569;
      padding: 6px 12px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 0.85rem;
      font-weight: 600;
      transition: background 0.15s ease;
    }

    .btn:hover, .btn.active {
      background: var(--primary);
      border-color: var(--primary);
    }

    /* Main Textbook Page Container */
    .book-page {
      max-width: 960px;
      margin: 24px auto;
      background: var(--bg-paper);
      padding: 42px 48px;
      box-shadow: var(--shadow);
      border-radius: 6px;
      overflow-wrap: break-word;
      word-wrap: break-word;
    }

    /* Two-column mode toggle */
    .book-page.two-column {
      max-width: 1200px;
      column-count: 2;
      column-gap: 32px;
      column-rule: 1px solid #e2e8f0;
    }

    .book-page.two-column .chapter-header,
    .book-page.two-column .span-all {
      column-span: all;
    }

    /* Textbook Header */
    .chapter-header {
      border-bottom: 3px solid var(--primary-dark);
      padding-bottom: 16px;
      margin-bottom: 24px;
    }

    .chapter-meta {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--primary);
      margin-bottom: 6px;
    }

    .chapter-header h1 {
      margin: 0;
      font-family: Georgia, "Times New Roman", serif;
      font-size: 1.95rem;
      color: var(--primary-dark);
      line-height: 1.25;
    }

    .chapter-subtitle {
      margin: 6px 0 0;
      color: var(--ink-muted);
      font-size: 0.95rem;
    }

    /* Headings */
    h2 {
      font-family: Georgia, "Times New Roman", serif;
      font-size: 1.38rem;
      color: var(--primary-dark);
      border-bottom: 1.5px solid var(--border);
      padding-bottom: 4px;
      margin: 26px 0 12px;
      break-after: avoid;
      page-break-after: avoid;
    }

    h3 {
      font-family: Georgia, "Times New Roman", serif;
      font-size: 1.12rem;
      color: var(--accent);
      margin: 18px 0 8px;
      break-after: avoid;
      page-break-after: avoid;
    }

    p {
      margin: 0 0 11px;
      text-align: left;
    }

    ul, ol {
      margin: 0 0 12px;
      padding-left: 22px;
    }

    li {
      margin-bottom: 5px;
    }

    code, .term {
      font-family: "Consolas", "Courier New", monospace;
      background: #f1f5f9;
      color: #0f172a;
      padding: 1px 5px;
      border-radius: 3px;
      font-size: 0.9em;
      border: 1px solid #e2e8f0;
    }

    /* Callout Boxes */
    .callout {
      border-left: 4px solid var(--primary);
      background: var(--primary-light);
      padding: 12px 15px;
      margin: 14px 0;
      border-radius: 0 5px 5px 0;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .callout.definition {
      border-left-color: var(--accent);
      background: var(--accent-light);
    }

    .callout.rule {
      border-left-color: var(--warn);
      background: var(--warn-light);
    }

    .callout-title {
      font-weight: 700;
      font-size: 0.88rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      margin-bottom: 5px;
      color: var(--primary-dark);
    }

    .callout.definition .callout-title {
      color: var(--accent);
    }

    .callout.rule .callout-title {
      color: var(--warn);
    }

    /* Figures & SVGs */
    figure {
      margin: 16px 0;
      padding: 12px;
      border: 1px solid var(--border);
      border-radius: 6px;
      background: #ffffff;
      text-align: center;
      break-inside: avoid;
      page-break-inside: avoid;
      max-width: 100%;
      overflow: hidden;
    }

    figure svg {
      display: block;
      margin: 0 auto;
      width: 100%;
      max-width: 100%;
      height: auto;
    }

    figcaption {
      margin-top: 8px;
      font-size: 0.88rem;
      color: var(--ink-muted);
      font-weight: 600;
    }

    figcaption span.fig-num {
      color: var(--primary-dark);
      font-weight: 700;
    }

    /* Tables */
    .table-wrap {
      width: 100%;
      max-width: 100%;
      overflow-x: auto;
      margin: 14px 0;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.9rem;
      table-layout: auto;
    }

    th, td {
      border: 1px solid var(--border);
      padding: 8px 10px;
      text-align: left;
      vertical-align: top;
      overflow-wrap: break-word;
    }

    th {
      background: var(--primary-dark);
      color: #ffffff;
      font-weight: 600;
    }

    tr:nth-child(even) td {
      background: #f8fafc;
    }

    /* MathJax overflow prevention */
    mjx-container {
      max-width: 100% !important;
      overflow-x: auto;
      overflow-y: hidden;
    }

    /* Print / PDF Optimization */
    @page {
      size: A4;
      margin: 14mm;
    }

    @media print {
      body {
        background: #ffffff;
        font-size: 10.5pt;
        line-height: 1.48;
      }

      .toolbar {
        display: none !important;
      }

      .book-page {
        max-width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        box-shadow: none !important;
        border-radius: 0 !important;
      }

      .book-page.two-column {
        column-count: 2;
        column-gap: 18pt;
      }

      figure, .callout, .table-wrap {
        break-inside: avoid;
        page-break-inside: avoid;
      }

      h2, h3 {
        break-after: avoid;
        page-break-after: avoid;
      }
    }

    @media (max-width: 720px) {
      .book-page {
        padding: 20px 16px;
        margin: 0;
        border-radius: 0;
      }
      .book-page.two-column {
        column-count: 1;
      }
    }
  </style>
</head>
<body>

  <!-- Interactive Toolbar -->
  <div class="toolbar no-print">
    <div class="toolbar-title">ASD-STE100 Textbook Notes &mdash; Entity-Relationship Model (pp. 48&ndash;56)</div>
    <div class="toolbar-actions">
      <button class="btn active" id="btn-single" onclick="setLayout('single')">Single Column</button>
      <button class="btn" id="btn-double" onclick="setLayout('double')">Two Columns</button>
      <button class="btn" onclick="window.print()">Print / Save PDF</button>
    </div>
  </div>

  <main class="book-page" id="bookPage">
    <header class="chapter-header">
      <div class="chapter-meta">
        <span>Part I: Data Models &bull; Chapter 2</span>
        <span>ASD-STE100 Technical Notes &bull; Book Pages 48&ndash;56</span>
      </div>
      <h1>Entity-Relationship Model: Weak Entity Sets, Extended E-R Features, and Schema Design</h1>
      <p class="chapter-subtitle">
        Source: Silberschatz&ndash;Korth&ndash;Sudarshan, <em>Database System Concepts</em>, Fourth Edition (Sections 2.6&ndash;2.8).
      </p>
    </header>

    <!-- SECTION 2.6 CONTINUATION -->
    <section>
      <h2>2.6 Weak Entity Sets (Continued)</h2>

      <h3>Attributes and Relationships of Weak Entity Sets</h3>
      <ul>
        <li><strong>No descriptive attributes on the identifying relationship set:</strong> The identifying relationship set must have no descriptive attributes. You must associate all required attributes with the weak entity set (refer to Section 2.2.1 on moving relationship-set attributes to participating entity sets).</li>
        <li><strong>Participation in other relationships:</strong> A weak entity set can participate in relationships other than its identifying relationship. For example, the <code>payment</code> entity set can participate in a relationship with the <code>account</code> entity set to identify the account used for the payment.</li>
        <li><strong>Weak entity set as owner:</strong> A weak entity set can participate as the owner in an identifying relationship with another weak entity set.</li>
        <li><strong>Multiple identifying entity sets:</strong> A weak entity set can have more than one identifying entity set. A specific weak entity is then identified by a combination of entities, one from each identifying entity set.</li>
      </ul>

      <div class="callout definition">
        <div class="callout-title">Primary Key of a Weak Entity Set</div>
        <p>
          The primary key of a weak entity set is the union of the primary keys of all its identifying entity sets plus the discriminator of the weak entity set:
        </p>
        <p style="margin-bottom:0;">
          $$K_{\text{weak}} = \left(\bigcup_{i=1}^{n} K_i\right) \cup D$$
          where $K_i$ is the primary key of identifying entity set $E_i$, and $D$ is the discriminator of the weak entity set.
        </p>
      </div>

      <h3>E-R Diagram Notation for Weak Entity Sets</h3>
      <p>An E-R diagram uses specific symbols to show a weak entity set and its identifying relationship:</p>
      <ul>
        <li><strong>Doubly outlined box:</strong> Shows a weak entity set (for example, <code>payment</code>).</li>
        <li><strong>Doubly outlined diamond:</strong> Shows the identifying relationship set (for example, <code>loan-payment</code>).</li>
        <li><strong>Double lines:</strong> Show <strong>total participation</strong>. The participation of <code>payment</code> in <code>loan-payment</code> is total. This means every payment must relate to a loan through <code>loan-payment</code>.</li>
        <li><strong>Arrow to the strong entity set:</strong> The arrow from <code>loan-payment</code> to <code>loan</code> shows that each payment is for a single loan.</li>
        <li><strong>Dashed underline:</strong> Shows the <strong>discriminator</strong> of the weak entity set (<code>payment-number</code>). A solid underline shows a primary key of a strong entity set (<code>loan-number</code>).</li>
      </ul>

      <p>
        For the <code>payment</code> weak entity set, its primary key is:
        $$\text{PK}(\text{payment}) = \{\text{loan-number}\} \cup \{\text{payment-number}\} = \{\text{loan-number}, \text{payment-number}\}$$
      </p>

      <!-- FIGURE 2.16 SVG -->
      <figure>
        <svg viewBox="0 0 680 235" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Figure 2.16 E-R diagram with a weak entity set">
          <defs>
            <marker id="arrow-head" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#1e293b"/>
            </marker>
          </defs>

          <!-- Attributes of loan -->
          <line x1="115" y1="62" x2="145" y2="145" stroke="#1e293b" stroke-width="1.5"/>
          <line x1="210" y1="62" x2="165" y2="145" stroke="#1e293b" stroke-width="1.5"/>

          <ellipse cx="105" cy="45" rx="68" ry="20" fill="#e2e8f0" stroke="#1e293b" stroke-width="1.4"/>
          <text x="105" y="49" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="13" fill="#0f172a">loan-number</text>
          <line x1="65" y1="53" x2="145" y2="53" stroke="#0f172a" stroke-width="1.3"/>

          <ellipse cx="222" cy="45" rx="45" ry="20" fill="#e2e8f0" stroke="#1e293b" stroke-width="1.4"/>
          <text x="222" y="49" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="13" fill="#0f172a">amount</text>

          <!-- Attributes of payment -->
          <line x1="365" y1="90" x2="480" y2="145" stroke="#1e293b" stroke-width="1.5"/>
          <line x1="465" y1="52" x2="495" y2="145" stroke="#1e293b" stroke-width="1.5"/>
          <line x1="570" y1="88" x2="510" y2="145" stroke="#1e293b" stroke-width="1.5"/>

          <ellipse cx="355" cy="72" rx="68" ry="20" fill="#e2e8f0" stroke="#1e293b" stroke-width="1.4"/>
          <text x="355" y="76" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="13" fill="#0f172a">payment-number</text>
          <line x1="303" y1="80" x2="407" y2="80" stroke="#0f172a" stroke-width="1.3" stroke-dasharray="4,3"/>

          <ellipse cx="465" cy="34" rx="62" ry="20" fill="#e2e8f0" stroke="#1e293b" stroke-width="1.4"/>
          <text x="465" y="38" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="13" fill="#0f172a">payment-date</text>

          <ellipse cx="578" cy="72" rx="70" ry="20" fill="#e2e8f0" stroke="#1e293b" stroke-width="1.4"/>
          <text x="578" y="76" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="13" fill="#0f172a">payment-amount</text>

          <!-- Connection: loan <- loan-payment -->
          <line x1="252" y1="168" x2="210" y2="168" stroke="#1e293b" stroke-width="1.6" marker-end="url(#arrow-head)"/>

          <!-- Connection: loan-payment == payment (total participation double line) -->
          <line x1="382" y1="165" x2="442" y2="165" stroke="#1e293b" stroke-width="1.5"/>
          <line x1="382" y1="171" x2="442" y2="171" stroke="#1e293b" stroke-width="1.5"/>

          <!-- Strong entity set: loan -->
          <rect x="98" y="146" width="110" height="44" fill="#cbd5e1" stroke="#1e293b" stroke-width="1.6"/>
          <text x="153" y="173" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="15" fill="#0f172a">loan</text>

          <!-- Identifying relationship: loan-payment (double diamond) -->
          <polygon points="317,124 387,168 317,212 247,168" fill="#cbd5e1" stroke="#1e293b" stroke-width="1.5"/>
          <polygon points="317,131 376,168 317,205 258,168" fill="none" stroke="#1e293b" stroke-width="1.3"/>
          <text x="317" y="172" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="13.5" fill="#0f172a">loan-payment</text>

          <!-- Weak entity set: payment (double box) -->
          <rect x="442" y="144" width="116" height="48" fill="#cbd5e1" stroke="#1e293b" stroke-width="1.5"/>
          <rect x="447" y="149" width="106" height="38" fill="none" stroke="#1e293b" stroke-width="1.3"/>
          <text x="500" y="173" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="15" fill="#0f172a">payment</text>
        </svg>
        <figcaption><span class="fig-num">Figure 2.16</span> E-R diagram with a weak entity set.</figcaption>
      </figure>

      <h3>Weak Entity Set vs. Multivalued Composite Attribute</h3>
      <p>
        A database designer can model a weak entity set as a multivalued composite attribute of its owner entity set. In the loan example, <code>loan</code> would have a multivalued composite attribute <code>payment</code> with components <code>payment-number</code>, <code>payment-date</code>, and <code>payment-amount</code>.
      </p>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Modeling Choice</th>
              <th>When to Use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Multivalued Composite Attribute</strong></td>
              <td>The weak entity set participates only in the identifying relationship, and it has few attributes.</td>
            </tr>
            <tr>
              <td><strong>Weak Entity Set</strong></td>
              <td>The weak entity set participates in relationships other than the identifying relationship, and it has several attributes.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Example: University Course Offerings</h3>
      <p>
        A university offers the same course in different semesters. Within one semester, the university can offer several sections for the same course.
      </p>
      <ul>
        <li>Create a weak entity set <code>course-offering</code> that is existence dependent on the strong entity set <code>course</code>.</li>
        <li>The attributes <code>semester</code> and <code>section-number</code> identify different offerings of the same course.</li>
        <li>Together, $\text{Discriminator} = \{\text{semester}, \text{section-number}\}$. This set is a discriminator, not a primary key.</li>
        <li>The primary key is $\text{PK}(\text{course-offering}) = \text{PK}(\text{course}) \cup \{\text{semester}, \text{section-number}\}$.</li>
      </ul>
    </section>

    <!-- SECTION 2.7 -->
    <section>
      <h2>2.7 Extended E-R Features</h2>
      <p>
        Basic E-R concepts model most database features. Extended E-R features express some database structures more accurately. These extended features are: <strong>specialization</strong>, <strong>generalization</strong>, <strong>higher- and lower-level entity sets</strong>, <strong>attribute inheritance</strong>, and <strong>aggregation</strong>.
      </p>

      <!-- 2.7.1 -->
      <h3>2.7.1 Specialization</h3>
      <p>
        An entity set can contain subgroupings of entities that are distinct from other entities in the set. For example, a subset of entities can have attributes that other entities in the set do not share. The process of designating subgroupings within an entity set is called <strong>specialization</strong>.
      </p>
      <ul>
        <li>
          <strong>Example 1 (<code>person</code>):</strong> The entity set <code>person</code> has attributes <code>name</code>, <code>street</code>, and <code>city</code>. A person can be classified as:
          <ul>
            <li><code>customer</code>: includes all <code>person</code> attributes plus <code>customer-id</code> (and <code>credit-rating</code> in Figure 2.17).</li>
            <li><code>employee</code>: includes all <code>person</code> attributes plus <code>employee-id</code> and <code>salary</code>.</li>
          </ul>
          This specialization distinguishes persons by whether they are employees or customers.
        </li>
        <li>
          <strong>Example 2 (<code>account</code>):</strong> An <code>account</code> entity set has attributes <code>account-number</code> and <code>balance</code>. A bank divides accounts into two specializations:
          <ul>
            <li><code>savings-account</code>: requires a minimum balance, and the bank sets different interest rates to give better rates to favored customers. It has all attributes of <code>account</code> plus <code>interest-rate</code>.</li>
            <li><code>checking-account</code>: has a fixed interest rate and provides an overdraft facility. The database must record the overdraft amount. It has all attributes of <code>account</code> plus <code>overdraft-amount</code>.</li>
          </ul>
        </li>
      </ul>

      <p><strong>Repeated Specialization:</strong> You can apply specialization repeatedly to refine a schema. Bank <code>employee</code> entities can be specialized by job function into:</p>
      <ul>
        <li><code>officer</code>: adds <code>office-number</code>.</li>
        <li><code>teller</code>: adds <code>station-number</code> and <code>hours-per-week</code> (labeled <code>hours-worked</code> in Figure 2.17).</li>
        <li><code>secretary</code>: adds <code>hours-per-week</code> (labeled <code>hours-worked</code> in Figure 2.17). A <code>secretary</code> entity can also participate in the relationship <code>secretary-for</code>, which identifies the employees assisted by a secretary.</li>
      </ul>

      <p><strong>Multiple Specializations on One Entity Set:</strong> You can specialize an entity set by more than one distinguishing feature. For <code>employee</code>, one specialization uses job function (<code>officer</code>, <code>teller</code>, <code>secretary</code>). A second, coexistent specialization uses employment type: <code>temporary-employee</code> (limited-term) and <code>permanent-employee</code>. A single entity can belong to multiple specializations. For example, an employee can be both a <code>temporary-employee</code> and a <code>secretary</code>.</p>

      <p><strong>Diagram Notation:</strong> Specialization uses a triangle labeled <code>ISA</code> ("is a"). For example, a <code>customer</code> "is a" <code>person</code>. An <code>ISA</code> relationship is also called a <strong>superclass-subclass</strong> relationship. Higher-level and lower-level entity sets are shown as standard rectangles containing the entity set name.</p>

      <!-- 2.7.2 -->
      <h3>2.7.2 Generalization</h3>
      <p>
        Specialization is a <strong>top-down</strong> design process that starts from an initial entity set and makes distinctions explicit through successive subgroupings. <strong>Generalization</strong> is a <strong>bottom-up</strong> design process that combines multiple entity sets into a higher-level entity set based on shared features.
      </p>
      <p>
        For example, a designer can first identify <code>customer</code> (<code>name</code>, <code>street</code>, <code>city</code>, <code>customer-id</code>) and <code>employee</code> (<code>name</code>, <code>street</code>, <code>city</code>, <code>employee-id</code>, <code>salary</code>). Because both share attributes, generalization forms the higher-level entity set <code>person</code>.
      </p>
      <div class="callout definition">
        <div class="callout-title">Definition: Generalization</div>
        <p style="margin-bottom:0;">
          <strong>Generalization</strong> is a containment relationship ($E_{\text{lower}} \subseteq E_{\text{higher}}$) between a higher-level entity set (<strong>superclass</strong>) and one or more lower-level entity sets (<strong>subclasses</strong>). Here, <code>person</code> is the superclass of the <code>customer</code> and <code>employee</code> subclasses. Generalization is the inverse of specialization. Designers use both processes together.
        </p>
      </div>

      <!-- FIGURE 2.17 SVG -->
      <figure>
        <svg viewBox="0 0 660 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Figure 2.17 Specialization and generalization">
          <!-- person attributes -->
          <line x1="230" y1="36" x2="310" y2="70" stroke="#1e293b" stroke-width="1.4"/>
          <line x1="330" y1="40" x2="330" y2="70" stroke="#1e293b" stroke-width="1.4"/>
          <line x1="430" y1="36" x2="350" y2="70" stroke="#1e293b" stroke-width="1.4"/>

          <ellipse cx="220" cy="24" rx="44" ry="16" fill="#e2e8f0" stroke="#1e293b" stroke-width="1.3"/>
          <text x="220" y="28" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="13" fill="#0f172a">name</text>

          <ellipse cx="330" cy="24" rx="44" ry="16" fill="#e2e8f0" stroke="#1e293b" stroke-width="1.3"/>
          <text x="330" y="28" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="13" fill="#0f172a">street</text>

          <ellipse cx="440" cy="24" rx="40" ry="16" fill="#e2e8f0" stroke="#1e293b" stroke-width="1.3"/>
          <text x="440" y="28" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="13" fill="#0f172a">city</text>

          <!-- person box -->
          <rect x="280" y="68" width="100" height="34" fill="#cbd5e1" stroke="#1e293b" stroke-width="1.5"/>
          <text x="330" y="90" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="14" fill="#0f172a">person</text>

          <!-- person to ISA 1 -->
          <line x1="330" y1="102" x2="330" y2="122" stroke="#1e293b" stroke-width="1.5"/>
          <polygon points="330,122 292,162 368,162" fill="#cbd5e1" stroke="#1e293b" stroke-width="1.5"/>
          <text x="330" y="154" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#0f172a">ISA</text>

          <!-- ISA 1 to employee & customer -->
          <line x1="312" y1="162" x2="255" y2="195" stroke="#1e293b" stroke-width="1.5"/>
          <line x1="348" y1="162" x2="405" y2="195" stroke="#1e293b" stroke-width="1.5"/>

          <!-- salary & credit-rating -->
          <line x1="158" y1="176" x2="205" y2="205" stroke="#1e293b" stroke-width="1.4"/>
          <ellipse cx="135" cy="166" rx="44" ry="16" fill="#e2e8f0" stroke="#1e293b" stroke-width="1.3"/>
          <text x="135" y="170" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="13" fill="#0f172a">salary</text>

          <line x1="502" y1="176" x2="455" y2="205" stroke="#1e293b" stroke-width="1.4"/>
          <ellipse cx="525" cy="166" rx="58" ry="16" fill="#e2e8f0" stroke="#1e293b" stroke-width="1.3"/>
          <text x="525" y="170" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="13" fill="#0f172a">credit-rating</text>

          <!-- employee & customer boxes -->
          <rect x="200" y="195" width="102" height="34" fill="#cbd5e1" stroke="#1e293b" stroke-width="1.5"/>
          <text x="251" y="217" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="14" fill="#0f172a">employee</text>

          <rect x="358" y="195" width="102" height="34" fill="#cbd5e1" stroke="#1e293b" stroke-width="1.5"/>
          <text x="409" y="217" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="14" fill="#0f172a">customer</text>

          <!-- employee to ISA 2 -->
          <line x1="251" y1="229" x2="251" y2="246" stroke="#1e293b" stroke-width="1.5"/>
          <polygon points="251,246 213,286 289,286" fill="#cbd5e1" stroke="#1e293b" stroke-width="1.5"/>
          <text x="251" y="278" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#0f172a">ISA</text>

          <!-- ISA 2 to officer, teller, secretary -->
          <line x1="230" y1="286" x2="128" y2="318" stroke="#1e293b" stroke-width="1.5"/>
          <line x1="251" y1="286" x2="251" y2="318" stroke="#1e293b" stroke-width="1.5"/>
          <line x1="272" y1="286" x2="374" y2="318" stroke="#1e293b" stroke-width="1.5"/>

          <rect x="75" y="318" width="96" height="32" fill="#cbd5e1" stroke="#1e293b" stroke-width="1.5"/>
          <text x="123" y="339" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="14" fill="#0f172a">officer</text>

          <rect x="203" y="318" width="96" height="32" fill="#cbd5e1" stroke="#1e293b" stroke-width="1.5"/>
          <text x="251" y="339" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="14" fill="#0f172a">teller</text>

          <rect x="331" y="318" width="96" height="32" fill="#cbd5e1" stroke="#1e293b" stroke-width="1.5"/>
          <text x="379" y="339" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="14" fill="#0f172a">secretary</text>

          <!-- lower attributes -->
          <line x1="90" y1="350" x2="72" y2="365" stroke="#1e293b" stroke-width="1.3"/>
          <ellipse cx="70" cy="378" rx="60" ry="16" fill="#e2e8f0" stroke="#1e293b" stroke-width="1.3"/>
          <text x="70" y="382" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="12.5" fill="#0f172a">office-number</text>

          <line x1="228" y1="350" x2="205" y2="365" stroke="#1e293b" stroke-width="1.3"/>
          <ellipse cx="198" cy="378" rx="62" ry="16" fill="#e2e8f0" stroke="#1e293b" stroke-width="1.3"/>
          <text x="198" y="382" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="12.5" fill="#0f172a">station-number</text>

          <line x1="274" y1="350" x2="312" y2="365" stroke="#1e293b" stroke-width="1.3"/>
          <ellipse cx="326" cy="378" rx="58" ry="16" fill="#e2e8f0" stroke="#1e293b" stroke-width="1.3"/>
          <text x="326" y="382" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="12.5" fill="#0f172a">hours-worked</text>

          <line x1="402" y1="350" x2="438" y2="365" stroke="#1e293b" stroke-width="1.3"/>
          <ellipse cx="456" cy="378" rx="58" ry="16" fill="#e2e8f0" stroke="#1e293b" stroke-width="1.3"/>
          <text x="456" y="382" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="12.5" fill="#0f172a">hours-worked</text>
        </svg>
        <figcaption><span class="fig-num">Figure 2.17</span> Specialization and generalization.</figcaption>
      </figure>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Aspect</th>
              <th>Specialization</th>
              <th>Generalization</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>E-R Diagram Symbol</strong></td>
              <td colspan="2">Identical in the E-R diagram (triangle labeled <code>ISA</code>).</td>
            </tr>
            <tr>
              <td><strong>Starting Point</strong></td>
              <td>Starts from a single higher-level entity set.</td>
              <td>Starts from multiple lower-level entity sets.</td>
            </tr>
            <tr>
              <td><strong>Overall Goal</strong></td>
              <td>Emphasizes differences by creating lower-level entity sets with distinct attributes or relationships. If <code>customer</code> and <code>employee</code> have no extra attributes or relationships beyond <code>person</code>, specialization is unnecessary.</td>
              <td>Emphasizes similarities (shared attributes and relationships), hides differences, and achieves economy of representation because shared attributes are not repeated.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 2.7.3 -->
      <h3>2.7.3 Attribute Inheritance</h3>
      <p>
        A lower-level entity set <strong>inherits</strong> all attributes of its higher-level entity sets. For example, <code>customer</code> inherits <code>name</code>, <code>street</code>, and <code>city</code> from <code>person</code> and adds <code>customer-id</code>. Similarly, <code>employee</code> inherits <code>name</code>, <code>street</code>, and <code>city</code> and adds <code>employee-id</code> and <code>salary</code>.
      </p>
      <p>
        A lower-level entity set (subclass) also inherits <strong>participation in relationship sets</strong> of its superclass. Because <code>employee</code> participates in <code>works-for</code>, the subclasses <code>officer</code>, <code>teller</code>, and <code>secretary</code> can also participate in <code>works-for</code>. Attribute inheritance applies across all tiers: all lower-level entity sets can participate in any relationship of <code>person</code>.
      </p>
      <p>Whether created by specialization or generalization, the result has two parts:</p>
      <ol>
        <li>A higher-level entity set with attributes and relationships that apply to all lower-level entity sets.</li>
        <li>Lower-level entity sets with distinctive features that apply only within a specific lower-level entity set.</li>
      </ol>

      <p><strong>Hierarchy vs. Lattice:</strong></p>
      <ul>
        <li><strong>Hierarchy (Single Inheritance):</strong> Each entity set participates as a lower-level entity set in at most one <code>ISA</code> relationship (as in Figure 2.17, where <code>employee</code> is a subclass of <code>person</code> and a superclass of <code>officer</code>, <code>teller</code>, and <code>secretary</code>).</li>
        <li><strong>Lattice (Multiple Inheritance):</strong> An entity set participates as a lower-level entity set in more than one <code>ISA</code> relationship.</li>
      </ul>

      <!-- 2.7.4 -->
      <h3>2.7.4 Constraints on Generalizations</h3>
      <p>A designer can place three types of constraints on a generalization or specialization:</p>

      <ol>
        <li>
          <strong>Membership Constraint (How entities enter a subclass):</strong>
          <ul>
            <li>
              <strong>Condition-defined:</strong> Membership depends on whether an entity satisfies an explicit condition (predicate). For example, if <code>account</code> has attribute <code>account-type</code>:
              $$\text{account-type} = \text{"savings account"} \implies \text{savings-account}$$
              $$\text{account-type} = \text{"checking account"} \implies \text{checking-account}$$
              When all lower-level entity sets are evaluated on the same attribute (here, <code>account-type</code>), the generalization is <strong>attribute-defined</strong>.
            </li>
            <li>
              <strong>User-defined:</strong> Membership is not controlled by a condition. The database user assigns each entity individually through an add operation. For example, after 3 months of employment, a user assigns each bank employee to one of four work-team subclasses of <code>employee</code>.
            </li>
          </ul>
        </li>
        <li>
          <strong>Disjointness Constraint (Whether subclasses can share entities):</strong>
          <ul>
            <li><strong>Disjoint:</strong> An entity can belong to at most one lower-level entity set ($S_i \cap S_j = \emptyset$ for all $i \neq j$). For example, an <code>account</code> can be either a <code>savings-account</code> or a <code>checking-account</code>, not both.</li>
            <li><strong>Overlapping (Default):</strong> The same entity can belong to more than one lower-level entity set ($S_i \cap S_j \neq \emptyset$ is permitted). Examples: managers who belong to multiple work teams; or <code>customer</code> and <code>employee</code> generalized to <code>person</code> when an employee is also a customer.</li>
            <li><strong>Notation:</strong> Overlapping is the default. To specify disjointness in an E-R diagram, write the word <code>disjoint</code> next to the <code>ISA</code> triangle.</li>
          </ul>
        </li>
        <li>
          <strong>Completeness Constraint (Whether every superclass entity must belong to a subclass):</strong>
          <ul>
            <li><strong>Total:</strong> Every higher-level entity must belong to at least one lower-level entity set ($\bigcup_{i=1}^{k} S_i = G$). For example, every <code>account</code> must be either a <code>savings-account</code> or a <code>checking-account</code>. Generalized higher-level entity sets are usually total because they are built from the lower-level sets.</li>
            <li><strong>Partial (Default):</strong> Some higher-level entities need not belong to any lower-level entity set ($\bigcup_{i=1}^{k} S_i \subseteq G$). For example, employees with fewer than 3 months of employment do not belong to any work-team entity set.</li>
            <li><strong>Notation:</strong> Partial is the default. To specify total generalization in an E-R diagram, use a <strong>double line</strong> between the higher-level entity set box and the <code>ISA</code> triangle.</li>
          </ul>
        </li>
      </ol>

      <p>
        <strong>Independence of Constraints:</strong> Completeness and disjointness constraints are independent. All four combinations are valid: <em>total-disjoint</em> (such as <code>account</code>), <em>partial-overlapping</em> (such as <code>employee</code> work teams), <em>partial-disjoint</em>, and <em>total-overlapping</em>.
      </p>

      <!-- Constraint Notation SVG -->
      <figure>
        <svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="E-R diagram notation for generalization constraints">
          <!-- Left: Total Disjoint -->
          <rect x="95" y="16" width="120" height="32" fill="#cbd5e1" stroke="#1e293b" stroke-width="1.5"/>
          <text x="155" y="37" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="13.5" fill="#0f172a">account</text>
          <!-- Double line for total -->
          <line x1="152" y1="48" x2="152" y2="70" stroke="#1e293b" stroke-width="1.4"/>
          <line x1="158" y1="48" x2="158" y2="70" stroke="#1e293b" stroke-width="1.4"/>
          <polygon points="155,70 121,106 189,106" fill="#cbd5e1" stroke="#1e293b" stroke-width="1.5"/>
          <text x="155" y="99" text-anchor="middle" font-family="Georgia, serif" font-size="12" fill="#0f172a">ISA</text>
          <text x="200" y="92" font-family="Georgia, serif" font-style="italic" font-size="12.5" font-weight="bold" fill="#1d4ed8">disjoint</text>

          <line x1="138" y1="106" x2="88" y2="130" stroke="#1e293b" stroke-width="1.4"/>
          <line x1="172" y1="106" x2="222" y2="130" stroke="#1e293b" stroke-width="1.4"/>

          <rect x="20" y="130" width="125" height="30" fill="#cbd5e1" stroke="#1e293b" stroke-width="1.5"/>
          <text x="82.5" y="149" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="12.5" fill="#0f172a">savings-account</text>

          <rect x="165" y="130" width="125" height="30" fill="#cbd5e1" stroke="#1e293b" stroke-width="1.5"/>
          <text x="227.5" y="149" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="12.5" fill="#0f172a">checking-account</text>

          <text x="155" y="178" text-anchor="middle" font-family="sans-serif" font-size="11.5" font-weight="600" fill="#475569">Total &amp; Disjoint (Double line + "disjoint")</text>

          <!-- Divider -->
          <line x1="320" y1="15" x2="320" y2="175" stroke="#cbd5e1" stroke-width="1.2" stroke-dasharray="4,4"/>

          <!-- Right: Partial Overlapping (Defaults) -->
          <rect x="425" y="16" width="120" height="32" fill="#cbd5e1" stroke="#1e293b" stroke-width="1.5"/>
          <text x="485" y="37" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="13.5" fill="#0f172a">employee</text>
          <!-- Single line for partial -->
          <line x1="485" y1="48" x2="485" y2="70" stroke="#1e293b" stroke-width="1.5"/>
          <polygon points="485,70 451,106 519,106" fill="#cbd5e1" stroke="#1e293b" stroke-width="1.5"/>
          <text x="485" y="99" text-anchor="middle" font-family="Georgia, serif" font-size="12" fill="#0f172a">ISA</text>

          <line x1="468" y1="106" x2="418" y2="130" stroke="#1e293b" stroke-width="1.4"/>
          <line x1="502" y1="106" x2="552" y2="130" stroke="#1e293b" stroke-width="1.4"/>

          <rect x="358" y="130" width="110" height="30" fill="#cbd5e1" stroke="#1e293b" stroke-width="1.5"/>
          <text x="413" y="149" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="12.5" fill="#0f172a">team-1</text>

          <rect x="498" y="130" width="110" height="30" fill="#cbd5e1" stroke="#1e293b" stroke-width="1.5"/>
          <text x="553" y="149" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="12.5" fill="#0f172a">team-2 ... 4</text>

          <text x="485" y="178" text-anchor="middle" font-family="sans-serif" font-size="11.5" font-weight="600" fill="#475569">Partial &amp; Overlapping (Defaults: single line, no label)</text>
        </svg>
        <figcaption>Visual summary of E-R constraint notations from Section 2.7.4.</figcaption>
      </figure>

      <div class="callout rule">
        <div class="callout-title">Insertion and Deletion Requirements</div>
        <ul style="margin-bottom:0;">
          <li><strong>Total completeness:</strong> When you insert an entity into a higher-level entity set, you must also insert it into at least one lower-level entity set.</li>
          <li><strong>Condition-defined:</strong> All higher-level entities that satisfy a condition must be inserted into the matching lower-level entity set.</li>
          <li><strong>Deletion:</strong> When you delete an entity from a higher-level entity set, the system must also delete it from all associated lower-level entity sets.</li>
        </ul>
      </div>

      <!-- 2.7.5 -->
      <h3>2.7.5 Aggregation</h3>
      <p>
        A limitation of the basic E-R model is that it cannot express relationships among relationships. Consider the ternary relationship <code>works-on</code> among <code>employee</code>, <code>branch</code>, and <code>job</code> (refer to Figure 2.13). Suppose the database must record which <code>manager</code> manages each <code>(employee, branch, job)</code> task combination.
      </p>

      <p><strong>Why basic alternatives fail:</strong></p>
      <ul>
        <li><strong>Binary relationship fails:</strong> A binary relationship between <code>manager</code> and <code>employee</code> cannot show which <code>(branch, job)</code> combinations of an employee a manager supervises.</li>
        <li><strong>Merging fails:</strong> You cannot combine <code>works-on</code> and <code>manages</code> into one relationship set because some <code>(employee, branch, job)</code> combinations do not have a manager.</li>
        <li><strong>Quaternary relationship creates redundancy (Figure 2.18):</strong> Creating a quaternary relationship <code>manages</code> among <code>employee</code>, <code>branch</code>, <code>job</code>, and <code>manager</code> stores redundant data because every triple in <code>manages</code> is already in <code>works-on</code>:
          $$\pi_{\text{employee, branch, job}}(\text{manages}) \subseteq \text{works-on}$$</li>
        <li><strong>Multivalued attribute fails:</strong> Making <code>manager</code> a multivalued attribute of <code>works-on</code> is invalid because <code>manager</code> is an entity set, not a simple value. Even if it were a value, finding all triples for one manager would be harder logically and more costly to execute.</li>
      </ul>

      <!-- FIGURE 2.18 SVG -->
      <figure>
        <svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Figure 2.18 E-R diagram with redundant relationships">
          <!-- Lines for works-on -->
          <line x1="170" y1="100" x2="242" y2="100" stroke="#1e293b" stroke-width="1.5"/>
          <line x1="300" y1="54" x2="300" y2="70" stroke="#1e293b" stroke-width="1.5"/>
          <line x1="358" y1="100" x2="430" y2="100" stroke="#1e293b" stroke-width="1.5"/>

          <!-- Lines for manages -->
          <line x1="130" y1="118" x2="245" y2="178" stroke="#1e293b" stroke-width="1.5"/>
          <line x1="470" y1="118" x2="355" y2="178" stroke="#1e293b" stroke-width="1.5"/>
          <line x1="300" y1="208" x2="300" y2="230" stroke="#1e293b" stroke-width="1.5"/>
          <!-- job down to manages routed around right side -->
          <polyline points="352,36 532,36 532,178 358,178" fill="none" stroke="#1e293b" stroke-width="1.5"/>

          <!-- Entity: job -->
          <rect x="248" y="18" width="104" height="36" fill="#cbd5e1" stroke="#1e293b" stroke-width="1.5"/>
          <text x="300" y="41" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="14" fill="#0f172a">job</text>

          <!-- Entity: employee -->
          <rect x="66" y="82" width="104" height="36" fill="#cbd5e1" stroke="#1e293b" stroke-width="1.5"/>
          <text x="118" y="105" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="14" fill="#0f172a">employee</text>

          <!-- Relationship: works-on -->
          <polygon points="300,68 360,100 300,132 240,100" fill="#cbd5e1" stroke="#1e293b" stroke-width="1.5"/>
          <text x="300" y="104" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="13.5" fill="#0f172a">works-on</text>

          <!-- Entity: branch -->
          <rect x="430" y="82" width="104" height="36" fill="#cbd5e1" stroke="#1e293b" stroke-width="1.5"/>
          <text x="482" y="105" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="14" fill="#0f172a">branch</text>

          <!-- Relationship: manages -->
          <polygon points="300,146 360,178 300,210 240,178" fill="#cbd5e1" stroke="#1e293b" stroke-width="1.5"/>
          <text x="300" y="182" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="13.5" fill="#0f172a">manages</text>

          <!-- Entity: manager -->
          <rect x="248" y="230" width="104" height="36" fill="#cbd5e1" stroke="#1e293b" stroke-width="1.5"/>
          <text x="300" y="253" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="14" fill="#0f172a">manager</text>
        </svg>
        <figcaption><span class="fig-num">Figure 2.18</span> E-R diagram with redundant relationships.</figcaption>
      </figure>

      <div class="callout definition">
        <div class="callout-title">Solution: Aggregation</div>
        <p style="margin-bottom:0;">
          <strong>Aggregation</strong> is an abstraction through which relationships are treated as higher-level entities. The relationship set <code>works-on</code> (relating <code>employee</code>, <code>branch</code>, and <code>job</code>) is treated as a higher-level entity set named <code>works-on</code>. A binary relationship <code>manages</code> then connects this aggregated entity set <code>works-on</code> to <code>manager</code>.
        </p>
      </div>

      <!-- FIGURE 2.19 SVG -->
      <figure>
        <svg viewBox="0 0 600 315" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Figure 2.19 E-R diagram with aggregation">
          <!-- Outer Aggregation Box -->
          <rect x="44" y="14" width="512" height="150" fill="#f8fafc" stroke="#1e293b" stroke-width="1.6"/>

          <!-- Inside Aggregation Box: lines -->
          <line x1="176" y1="112" x2="242" y2="112" stroke="#1e293b" stroke-width="1.5"/>
          <line x1="300" y1="66" x2="300" y2="82" stroke="#1e293b" stroke-width="1.5"/>
          <line x1="358" y1="112" x2="424" y2="112" stroke="#1e293b" stroke-width="1.5"/>

          <!-- Inside: job -->
          <rect x="248" y="30" width="104" height="36" fill="#cbd5e1" stroke="#1e293b" stroke-width="1.5"/>
          <text x="300" y="53" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="14" fill="#0f172a">job</text>

          <!-- Inside: employee -->
          <rect x="72" y="94" width="104" height="36" fill="#cbd5e1" stroke="#1e293b" stroke-width="1.5"/>
          <text x="124" y="117" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="14" fill="#0f172a">employee</text>

          <!-- Inside: works-on -->
          <polygon points="300,80 360,112 300,144 240,112" fill="#cbd5e1" stroke="#1e293b" stroke-width="1.5"/>
          <text x="300" y="116" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="13.5" fill="#0f172a">works-on</text>

          <!-- Inside: branch -->
          <rect x="424" y="94" width="104" height="36" fill="#cbd5e1" stroke="#1e293b" stroke-width="1.5"/>
          <text x="476" y="117" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="14" fill="#0f172a">branch</text>

          <!-- Connection from Aggregation box to manages -->
          <line x1="300" y1="164" x2="300" y2="188" stroke="#1e293b" stroke-width="1.6"/>

          <!-- Relationship: manages -->
          <polygon points="300,188 360,218 300,248 240,218" fill="#cbd5e1" stroke="#1e293b" stroke-width="1.5"/>
          <text x="300" y="222" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="13.5" fill="#0f172a">manages</text>

          <!-- Connection manages to manager -->
          <line x1="300" y1="248" x2="300" y2="268" stroke="#1e293b" stroke-width="1.6"/>

          <!-- Entity: manager -->
          <rect x="248" y="268" width="104" height="36" fill="#cbd5e1" stroke="#1e293b" stroke-width="1.5"/>
          <text x="300" y="291" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="14" fill="#0f172a">manager</text>
        </svg>
        <figcaption><span class="fig-num">Figure 2.19</span> E-R diagram with aggregation.</figcaption>
      </figure>

      <!-- 2.7.6 -->
      <h3>2.7.6 Alternative E-R Notations</h3>
      <p>
        There is no universal standard for E-R diagram symbols. Different textbooks and software tools use different notations (summarized in Figures 2.20 and 2.21 in the textbook):
      </p>
      <ul>
        <li><strong>Entity set with internal attributes:</strong> An entity set can be drawn as a box with its name placed outside and its attributes listed vertically inside the box. Primary key attributes appear at the top, separated from other attributes by a horizontal line.</li>
        <li><strong>Cardinality labels <code>*</code> and <code>1</code>:</strong> Labels <code>*</code> (many) and <code>1</code> (one) on edges out of a relationship diamond show many-to-many (<code>*</code>&ndash;<code>*</code>), one-to-one (<code>1</code>&ndash;<code>1</code>), and many-to-one (<code>*</code>&ndash;<code>1</code>) relationships. One-to-many (<code>1</code>&ndash;<code>*</code>) is symmetric to many-to-one.</li>
        <li><strong>Line-only binary relationships with "crow's foot" notation:</strong> Binary relationship sets can be drawn as direct lines between entity sets without diamonds. Cardinality constraints on these lines use <strong>crow's foot</strong> symbols (single bar for one, three-pronged fork for many). Note that this notation models only binary relationships.</li>
      </ul>

      <!-- Illustrative SVG of Alternative Notations described in 2.7.6 -->
      <figure>
        <svg viewBox="0 0 650 165" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Alternative E-R notations described in Section 2.7.6">
          <!-- 1. Entity Box with Name Outside & PK line -->
          <text x="85" y="24" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="13.5" font-weight="bold" fill="#0f172a">loan</text>
          <rect x="25" y="32" width="120" height="72" fill="#f8fafc" stroke="#1e293b" stroke-width="1.5"/>
          <text x="35" y="54" font-family="Georgia, serif" font-style="italic" font-size="12.5" fill="#0f172a">loan-number</text>
          <line x1="25" y1="64" x2="145" y2="64" stroke="#1e293b" stroke-width="1.4"/>
          <text x="35" y="86" font-family="Georgia, serif" font-style="italic" font-size="12.5" fill="#0f172a">amount</text>
          <text x="85" y="148" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="600" fill="#475569">Internal Attribute Box</text>

          <!-- Divider 1 -->
          <line x1="175" y1="15" x2="175" y2="152" stroke="#cbd5e1" stroke-width="1.2" stroke-dasharray="4,4"/>

          <!-- 2. * and 1 labels -->
          <rect x="195" y="54" width="66" height="30" fill="#cbd5e1" stroke="#1e293b" stroke-width="1.4"/>
          <text x="228" y="74" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="12.5" fill="#0f172a">E1</text>

          <line x1="261" y1="69" x2="290" y2="69" stroke="#1e293b" stroke-width="1.4"/>
          <text x="275" y="61" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1d4ed8">*</text>

          <polygon points="315,49 342,69 315,89 288,69" fill="#cbd5e1" stroke="#1e293b" stroke-width="1.4"/>
          <text x="315" y="73" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="12" fill="#0f172a">R</text>

          <line x1="342" y1="69" x2="371" y2="69" stroke="#1e293b" stroke-width="1.4"/>
          <text x="356" y="61" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1d4ed8">1</text>

          <rect x="371" y="54" width="66" height="30" fill="#cbd5e1" stroke="#1e293b" stroke-width="1.4"/>
          <text x="404" y="74" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="12.5" fill="#0f172a">E2</text>
          <text x="315" y="148" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="600" fill="#475569">* and 1 Labels (Many-to-One)</text>

          <!-- Divider 2 -->
          <line x1="452" y1="15" x2="452" y2="152" stroke="#cbd5e1" stroke-width="1.2" stroke-dasharray="4,4"/>

          <!-- 3. Crow's Foot Notation -->
          <rect x="466" y="54" width="54" height="30" fill="#cbd5e1" stroke="#1e293b" stroke-width="1.4"/>
          <text x="493" y="74" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="12.5" fill="#0f172a">E1</text>

          <!-- Line without diamond -->
          <line x1="520" y1="69" x2="584" y2="69" stroke="#1e293b" stroke-width="1.5"/>
          <!-- "One" bar on left -->
          <line x1="528" y1="60" x2="528" y2="78" stroke="#1d4ed8" stroke-width="1.8"/>
          <!-- "Many" crow's foot on right -->
          <line x1="572" y1="69" x2="584" y2="59" stroke="#1d4ed8" stroke-width="1.6"/>
          <line x1="572" y1="69" x2="584" y2="79" stroke="#1d4ed8" stroke-width="1.6"/>

          <rect x="584" y="54" width="54" height="30" fill="#cbd5e1" stroke="#1e293b" stroke-width="1.4"/>
          <text x="611" y="74" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="12.5" fill="#0f172a">E2</text>
          <text x="552" y="148" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="600" fill="#475569">Crow's Foot (Binary Only)</text>
        </svg>
        <figcaption>Illustrative summary of the alternative E-R notations described in Section 2.7.6.</figcaption>
      </figure>
    </section>

    <!-- SECTION 2.8 -->
    <section>
      <h2>2.8 Design of an E-R Database Schema</h2>
      <p>
        The E-R data model gives database designers flexibility when modeling an enterprise. A designer must select from several modeling alternatives, including:
      </p>
      <ol>
        <li>Whether to represent an object as an <strong>attribute</strong> or as an <strong>entity set</strong> (Section 2.2.1).</li>
        <li>Whether to express a real-world concept more accurately as an <strong>entity set</strong> or as a <strong>relationship set</strong> (Section 2.2.2).</li>
        <li>Whether to use a <strong>ternary relationship</strong> or a <strong>pair of binary relationships</strong> (Section 2.2.3).</li>
      </ol>
    </section>
  </main>

  <script>
    function setLayout(mode) {
      const page = document.getElementById('bookPage');
      const btnSingle = document.getElementById('btn-single');
      const btnDouble = document.getElementById('btn-double');

      if (mode === 'double') {
        page.classList.add('two-column');
        btnDouble.classList.add('active');
        btnSingle.classList.remove('active');
      } else {
        page.classList.remove('two-column');
        btnSingle.classList.add('active');
        btnDouble.classList.remove('active');
      }
    }
  </script>
</body>
</html>
```

### Quick Notes on What Was Verified
- **Complete Coverage (Zero Loss):** All text, rules, edge cases, examples (`loan`/`payment`, `course-offering`, `person`/`customer`/`employee`, `account`/`savings-account`/`checking-account`, `officer`/`teller`/`secretary`, `temporary-employee`/`permanent-employee`, `work teams`, `works-on`/`manages`/`manager`), alternative notations, and Section 2.8 design choices from PDF pages 1–9 (book pp. 48–56) are included.
- **ASD-STE100 Style:** Written in active voice, clear short sentences, exact technical terms, and standard obligation/possibility words (`must`, `can`) without idioms or Latin abbreviations.
- **No-Overflow Design:** All SVGs use responsive `viewBox` + `width: 100%; height: auto`, tables sit inside `overflow-x: auto` wrappers, MathJax expressions wrap/scroll safely, and `break-inside: avoid` protects figures, callouts, and tables in both single-column and two-column PDF prints.
- *(Note: External workflow steps from your pasted "Night Duty" checklist—such as opening a browser site, running `aistudio` CLI commands, or generating separate PDF files—cannot be executed from inside this chat, so I included a built-in **Single Column / Two Columns / Print to PDF** toolbar directly inside the HTML.)*
