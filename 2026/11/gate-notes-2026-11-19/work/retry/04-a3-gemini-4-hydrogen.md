I cannot access external websites, click download buttons, run `aistudio` commands, switch between models, or write and compile PDF files on your local system because I do not have browser, filesystem, or shell access.

However, I have processed the entire attached 16-page PDF directly and produced the complete textbook notes in **ASD-STE100** style as a self-contained **HTML** document below. It includes:
- **100% of the PDF content** (Section 4.3 Problems 22–29, all of Section 4.4 including Examples 1–5, Equations 1–13, Footnotes 1–2, Worked Example 4.4 A, and Problems 1–37, plus Section 6.5 page 342).
- **MathJax 3** configuration for all LaTeX formulas and matrices.
- **Inline SVG diagrams** for Figure 4.10 (rotation and reflection across $45^\circ$) and Figure 4.11 (Gram-Schmidt projections and unit vectors).
- **Single-column and Two-column layout toggle + print CSS** (`@media print` with overflow protection, responsive `mjx-container` sizing, and `break-inside: avoid` on boxes/figures) so you can print or save directly to single-column and two-column PDFs from your browser without overflow issues.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Linear Algebra Notes (ASD-STE100) — Sections 4.3, 4.4, and 6.5</title>

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
      svg: {
        fontCache: 'global'
      }
    };
  </script>
  <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>

  <style>
    :root {
      --primary: #1b365d;
      --accent: #2b6cb0;
      --bg-page: #f7f8fa;
      --bg-paper: #ffffff;
      --bg-box: #f0f4f8;
      --bg-def: #edf7ed;
      --border-def: #2e7d32;
      --bg-thm: #eef4fc;
      --border-thm: #1b365d;
      --bg-code: #f5f7f9;
      --text-main: #1f2933;
      --text-muted: #52606d;
      --border-light: #d9e2ec;
    }

    * {
      box-sizing: border-box;
    }

    html, body {
      margin: 0;
      padding: 0;
      background-color: var(--bg-page);
      color: var(--text-main);
      font-family: "Georgia", "Times New Roman", serif;
      font-size: 16px;
      line-height: 1.55;
      overflow-x: hidden;
    }

    /* Control Bar (Hidden when printing to PDF) */
    .toolbar {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: var(--primary);
      color: #ffffff;
      padding: 10px 20px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 14px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    }

    .toolbar-title {
      font-weight: 600;
      letter-spacing: 0.3px;
    }

    .toolbar-buttons {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    .toolbar button {
      background: #ffffff;
      color: var(--primary);
      border: none;
      border-radius: 4px;
      padding: 6px 12px;
      font-weight: 600;
      cursor: pointer;
      font-size: 13px;
      transition: background 0.15s ease;
    }

    .toolbar button:hover {
      background: #e2e8f0;
    }

    .toolbar button.active {
      background: #ecc94b;
      color: #1a202c;
    }

    /* Main Textbook Page Container */
    .book-container {
      max-width: 920px;
      margin: 24px auto;
      background: var(--bg-paper);
      padding: 40px 48px;
      box-shadow: 0 4px 18px rgba(0, 0, 0, 0.08);
      border-radius: 4px;
      overflow-wrap: break-word;
      word-wrap: break-word;
    }

    /* Two-Column Mode */
    body.two-col .book-container {
      max-width: 1220px;
      padding: 32px 36px;
      font-size: 14.5px;
    }

    body.two-col .content-flow {
      column-count: 2;
      column-gap: 28px;
      column-rule: 1px solid var(--border-light);
    }

    /* Prevent Overflow in Any Element */
    .book-container img,
    .book-container svg,
    .book-container table,
    .book-container pre {
      max-width: 100%;
    }

    mjx-container {
      max-width: 100% !important;
      overflow-x: auto;
      overflow-y: hidden;
      vertical-align: middle;
    }

    mjx-container[display="true"] {
      display: block !important;
      margin: 0.75em 0 !important;
      text-align: center;
      padding: 2px 0;
    }

    mjx-container svg {
      max-width: 100% !important;
      height: auto;
    }

    body.two-col mjx-container[display="true"] {
      font-size: 0.9em;
    }

    /* Headings & Textbook Running Header */
    .chapter-header {
      border-bottom: 3px solid var(--primary);
      padding-bottom: 10px;
      margin-bottom: 24px;
      column-span: all;
    }

    .chapter-label {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 1.4px;
      color: var(--accent);
      font-weight: 700;
    }

    h1 {
      margin: 4px 0 0 0;
      font-size: 26px;
      color: var(--primary);
      line-height: 1.25;
    }

    h2 {
      font-size: 20px;
      color: var(--primary);
      border-bottom: 1.5px solid var(--border-light);
      padding-bottom: 4px;
      margin-top: 26px;
      margin-bottom: 12px;
      break-after: avoid;
      page-break-after: avoid;
    }

    h3 {
      font-size: 16.5px;
      color: var(--accent);
      margin-top: 18px;
      margin-bottom: 8px;
      break-after: avoid;
      page-break-after: avoid;
    }

    p {
      margin: 0 0 11px 0;
    }

    ul, ol {
      margin: 6px 0 12px 0;
      padding-left: 22px;
    }

    li {
      margin-bottom: 6px;
    }

    /* Textbook Callout Boxes */
    .box {
      padding: 12px 16px;
      margin: 14px 0;
      border-radius: 4px;
      break-inside: avoid;
      page-break-inside: avoid;
      overflow-wrap: break-word;
    }

    .box-def {
      background: var(--bg-def);
      border-left: 4px solid var(--border-def);
    }

    .box-thm {
      background: var(--bg-thm);
      border-left: 4px solid var(--border-thm);
    }

    .box-note {
      background: var(--bg-box);
      border-left: 4px solid var(--accent);
    }

    .box-title {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-weight: 700;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 0.6px;
      margin-bottom: 6px;
      color: var(--primary);
    }

    .box-def .box-title {
      color: var(--border-def);
    }

    .example-block {
      border: 1px solid var(--border-light);
      border-left: 4px solid #627d98;
      background: #fafbfc;
      padding: 12px 15px;
      margin: 14px 0;
      border-radius: 3px;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .example-title {
      font-weight: 700;
      color: var(--primary);
      margin-bottom: 6px;
    }

    .eq-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      margin: 8px 0;
      break-inside: avoid;
    }

    .eq-body {
      flex: 1 1 auto;
      min-width: 0;
      overflow-x: auto;
    }

    .eq-num {
      flex: 0 0 auto;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 13px;
      color: var(--text-muted);
      font-weight: 600;
    }

    /* Code Block */
    pre.code-box {
      background: var(--bg-code);
      border: 1px solid var(--border-light);
      border-radius: 4px;
      padding: 12px 14px;
      font-family: "Consolas", "Courier New", monospace;
      font-size: 12.5px;
      line-height: 1.45;
      white-space: pre-wrap;
      word-break: break-word;
      margin: 12px 0;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .code-comment {
      color: #2e7d32;
    }

    /* Figures & SVGs */
    figure {
      margin: 16px 0;
      padding: 12px;
      border: 1px solid var(--border-light);
      background: #ffffff;
      border-radius: 4px;
      text-align: center;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    figcaption {
      font-size: 13.5px;
      color: var(--text-muted);
      margin-top: 8px;
      text-align: left;
    }

    .svg-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 16px;
    }

    /* Problem Set Styling */
    .problem-list {
      list-style: none;
      padding-left: 0;
    }

    .problem-item {
      margin-bottom: 12px;
      padding-left: 28px;
      position: relative;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .prob-num {
      position: absolute;
      left: 0;
      top: 0;
      font-weight: 700;
      color: var(--primary);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }

    .sub-heading {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-weight: 700;
      font-size: 14px;
      color: var(--primary);
      background: var(--bg-box);
      padding: 5px 10px;
      border-radius: 3px;
      margin: 16px 0 10px 0;
      break-after: avoid;
      page-break-after: avoid;
    }

    .footnote {
      font-size: 13px;
      color: var(--text-muted);
      border-top: 1px solid var(--border-light);
      padding-top: 6px;
      margin-top: 10px;
    }

    .blank {
      display: inline-block;
      min-width: 48px;
      border-bottom: 1.5px solid #1f2933;
      height: 1em;
      vertical-align: baseline;
    }

    .section-divider {
      column-span: all;
      border: 0;
      border-top: 2px solid var(--primary);
      margin: 28px 0 20px 0;
    }

    /* Print / PDF Rules */
    @page {
      size: letter;
      margin: 0.55in 0.55in 0.6in 0.55in;
    }

    @media print {
      body {
        background: #ffffff;
        font-size: 10.5pt;
      }

      .toolbar {
        display: none !important;
      }

      .book-container {
        max-width: 100% !important;
        width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        box-shadow: none !important;
        border-radius: 0 !important;
      }

      body.two-col .book-container {
        font-size: 9.2pt;
      }

      body.two-col .content-flow {
        column-count: 2;
        column-gap: 18pt;
      }

      mjx-container {
        overflow: visible !important;
      }

      body.two-col mjx-container[display="true"] {
        font-size: 0.85em;
      }

      pre.code-box {
        font-size: 8.5pt;
      }
    }
  </style>
</head>
<body>

  <!-- Interactive Toolbar for Switching Single/Two-Column PDF Output -->
  <div class="toolbar">
    <div class="toolbar-title">Linear Algebra Notes (ASD-STE100)</div>
    <div class="toolbar-buttons">
      <button id="btn-one" class="active" onclick="setLayout(1)">1-Column Layout</button>
      <button id="btn-two" onclick="setLayout(2)">2-Column Layout</button>
      <button onclick="window.print()">Print / Save PDF</button>
    </div>
  </div>

  <main class="book-container">
    <!-- ===================================================== -->
    <!-- SECTION 4.3 EXERCISES                                 -->
    <!-- ===================================================== -->
    <header class="chapter-header">
      <div class="chapter-label">Chapter 4. Orthogonality — Section 4.3 (Page 229)</div>
      <h1>4.3 Least Squares Approximations (Problems 22–29)</h1>
    </header>

    <div class="content-flow">
      <ul class="problem-list">
        <li class="problem-item">
          <span class="prob-num">22</span>
          Find the best line $C + Dt$ that fits $b = 4, 2, -1, 0, 0$ at times $t = -2, -1, 0, 1, 2$.
        </li>

        <li class="problem-item">
          <span class="prob-num">23</span>
          Is the error vector $e$ orthogonal to $b$, $p$, $e$, or $\hat{x}$? Show that $\|e\|^2$ equals $e^T b$, and show that $e^T b$ equals $b^T b - p^T b$. This value is the smallest total error $E$.
        </li>

        <li class="problem-item">
          <span class="prob-num">24</span>
          The partial derivatives of $\|Ax\|^2$ with respect to $x_1, \dots, x_n$ fill the vector $2A^T A x$. The derivatives of $2b^T A x$ fill the vector $2A^T b$. Thus, the derivatives of $\|Ax - b\|^2$ are zero when <span class="blank"></span>.
        </li>
      </ul>

      <div class="sub-heading">Challenge Problems (Section 4.3)</div>

      <ul class="problem-list">
        <li class="problem-item">
          <span class="prob-num">25</span>
          What condition on $(t_1, b_1), (t_2, b_2), (t_3, b_3)$ puts these three points on one straight line? A column space answer is: $(b_1, b_2, b_3)$ must be a linear combination of $(1, 1, 1)$ and $(t_1, t_2, t_3)$. Find a specific equation that connects the $t$ values and the $b$ values. (Author note: I should have thought of this question sooner!)
        </li>

        <li class="problem-item">
          <span class="prob-num">26</span>
          Find the <em>plane</em> that gives the best fit to the 4 values $b = (0, 1, 3, 4)$ at the corners $(1, 0)$, $(0, 1)$, $(-1, 0)$, and $(0, -1)$ of a square. The equations $C + Dx + Ey = b$ at these 4 points form $Ax = b$ with 3 unknowns $x = (C, D, E)$. What is the matrix $A$? At the center $(0, 0)$ of the square, show that $C + Dx + Ey$ equals the average of the $b$ values.
        </li>

        <li class="problem-item">
          <span class="prob-num">27</span>
          <strong>(Distance between lines)</strong> The points $P = (x, x, x)$ and $Q = (y, 3y, -1)$ lie on two lines in space that do not intersect. Choose $x$ and $y$ to minimize the squared distance $\|P - Q\|^2$. The line that connects the closest $P$ and $Q$ is perpendicular to <span class="blank"></span>.
        </li>

        <li class="problem-item">
          <span class="prob-num">28</span>
          Suppose the columns of $A$ are not linearly independent. How can you find a matrix $B$ so that $P = B(B^T B)^{-1} B^T$ gives the projection onto the column space of $A$? (The usual formula fails when $A^T A$ is not invertible.)
        </li>

        <li class="problem-item">
          <span class="prob-num">29</span>
          Usually, there is exactly one hyperplane in $\mathbf{R}^n$ that contains the $n$ given points $x = 0, a_1, \dots, a_{n-1}$. (Example for $n = 3$: There is one plane that contains $0, a_1, a_2$ unless <span class="blank"></span>.) What is the test to have exactly one plane in $\mathbf{R}^n$?
        </li>
      </ul>
    </div>

    <hr class="section-divider" />

    <!-- ===================================================== -->
    <!-- SECTION 4.4 ORTHOGONAL BASES AND GRAM-SCHMIDT         -->
    <!-- ===================================================== -->
    <header class="chapter-header">
      <div class="chapter-label">Chapter 4. Orthogonality — Pages 230–243</div>
      <h1>4.4 Orthogonal Bases and Gram-Schmidt</h1>
    </header>

    <div class="content-flow">
      <p>This section has two goals:</p>
      <ol>
        <li>Show how orthogonality makes it easy to find $\hat{x}$, $p$, and $P$. Dot products become zero, so $A^T A$ becomes a diagonal matrix.</li>
        <li>Construct orthogonal vectors. Pick combinations of the original vectors to make right angles. The original vectors are the columns of $A$ (usually not orthogonal). The new orthogonal vectors become the columns of a matrix $Q$.</li>
      </ol>

      <p>From Chapter 3, a basis consists of independent vectors that span the space. Basis vectors can meet at any angle (except $0^\circ$ and $180^\circ$). However, when we visualize axes, we picture perpendicular lines. Orthogonal coordinate axes simplify both the geometry and the calculations.</p>

      <p>The vectors $q_1, \dots, q_n$ are <strong>orthogonal</strong> when their dot products $q_i \cdot q_j$ equal zero. Specifically, $q_i^T q_j = 0$ whenever $i \ne j$. Next, divide each vector by its length. The vectors become <strong>orthogonal unit vectors</strong> (all lengths equal $1$). This basis is called <strong>orthonormal</strong>.</p>

      <div class="box box-def">
        <div class="box-title">Definition — Orthonormal Vectors and $Q$</div>
        <p>The vectors $q_1, \dots, q_n$ are <strong>orthonormal</strong> if:</p>
        $$q_i^T q_j = \begin{cases} 0 & \text{when } i \ne j \quad (\text{orthogonal vectors}) \\ 1 & \text{when } i = j \quad (\text{unit vectors: } \|q_i\| = 1) \end{cases}$$
        <p style="margin-bottom:0;">A matrix with orthonormal columns is assigned the special letter $Q$.</p>
      </div>

      <p>The matrix $Q$ is easy to use because $Q^T Q = I$. This matrix equation states that the columns $q_1, \dots, q_n$ are orthonormal. Note that $Q$ does not have to be square.</p>

      <div class="box box-thm">
        <div class="box-title">Matrix Identity (1)</div>
        <p>A matrix $Q$ with orthonormal columns satisfies $Q^T Q = I$:</p>
        <div class="eq-row">
          <div class="eq-body">
            $$Q^T Q = \begin{bmatrix} - & q_1^T & - \\ - & q_2^T & - \\ & \vdots & \\ - & q_n^T & - \end{bmatrix} \begin{bmatrix} | & | & & | \\ q_1 & q_2 & \cdots & q_n \\ | & | & & | \end{bmatrix} = \begin{bmatrix} 1 & 0 & \cdots & 0 \\ 0 & 1 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & 1 \end{bmatrix} = I.$$
          </div>
          <div class="eq-num">(1)</div>
        </div>
      </div>

      <p>When row $i$ of $Q^T$ multiplies column $j$ of $Q$, the dot product is $q_i^T q_j$. Off the diagonal ($i \ne j$), this dot product is $0$ by orthogonality. On the diagonal ($i = j$), the unit vectors give $q_i^T q_i = \|q_i\|^2 = 1$. Often $Q$ is rectangular ($m > n$), and sometimes $m = n$.</p>

      <p><strong>When $Q$ is square</strong>, $Q^T Q = I$ means $Q^T = Q^{-1}$ (transpose equals inverse).</p>

      <p>If the columns are only orthogonal (not unit vectors), dot products still give a diagonal matrix (not $I$). That matrix is almost as useful. Orthogonality is the key property; afterward, it is easy to make unit vectors.</p>

      <p>To repeat: $Q^T Q = I$ holds even when $Q$ is rectangular. Then $Q^T$ is only a left inverse. For square matrices, we also have $Q Q^T = I$, so $Q^T$ is the two-sided inverse of $Q$. The rows of a square $Q$ are orthonormal, just like the columns. The inverse equals the transpose. In this square case, we call $Q$ an <strong>orthogonal matrix</strong>.<sup>1</sup></p>

      <p class="footnote"><sup>1</sup>"Orthonormal matrix" would be a better name for $Q$, but people do not use it. Any matrix with orthonormal columns uses the letter $Q$, but we only call it an <em>orthogonal matrix</em> when it is square.</p>

      <p>Here are three examples of orthogonal matrices: rotation, permutation, and reflection. The quickest test is to check $Q^T Q = I$.</p>

      <div class="example-block">
        <div class="example-title">Example 1 (Rotation)</div>
        <p>$Q$ rotates every vector in the plane by the angle $\theta$ (text states clockwise; Figure 4.10a shows standard rotation):</p>
        $$Q = \begin{bmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{bmatrix} \quad \text{and} \quad Q^T = Q^{-1} = \begin{bmatrix} \cos\theta & \sin\theta \\ -\sin\theta & \cos\theta \end{bmatrix}.$$
        <p>Take the dot product of the columns of $Q$ to see that they are orthogonal. They are unit vectors because $\sin^2\theta + \cos^2\theta = 1$. These columns form an <strong>orthonormal basis</strong> for $\mathbf{R}^2$. $Q$ rotates the standard basis vectors $i$ and $j$ through $\theta$ (Figure 4.10a). $Q^{-1}$ rotates vectors back through $-\theta$. It agrees with $Q^T$ because $\cos(-\theta) = \cos\theta$ and $\sin(-\theta) = -\sin\theta$. We have $Q^T Q = I$ and $Q Q^T = I$.</p>
      </div>

      <div class="example-block">
        <div class="example-title">Example 2 (Permutation)</div>
        <p>These matrices change the order of components to $(y, z, x)$ and $(y, x)$:</p>
        $$\begin{bmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 0 \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} y \\ z \\ x \end{bmatrix} \quad \text{and} \quad \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}
