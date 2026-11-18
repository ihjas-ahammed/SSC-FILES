I cannot complete the external automation steps in your message—opening the study plan website, downloading the ZIP archive, running the `aistudio` CLI with Hydrogen/Flash fallback, or rendering PDF files—because I do not have access to a web browser, filesystem, shell, or PDF generator in this environment.

However, I have converted all 16 pages of the attached PDF (pages 229–243 and page 342 of *Introduction to Linear Algebra*) into a complete, standalone HTML textbook document written in **ASD-STE100 (Simplified Technical English)** style, using **MathJax** for all LaTeX equations, **inline SVGs** for all diagrams, and overflow-safe CSS (supporting both single-column and two-column viewing/printing).

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Linear Algebra Notes (ASD-STE100): Sections 4.3, 4.4, and 6.5</title>

  <!-- MathJax Configuration -->
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
        scale: 0.96,
        matchFontHeight: true
      }
    };
  </script>
  <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script>

  <style>
    :root {
      --bg: #ffffff;
      --surface: #f8fafc;
      --ink: #1e293b;
      --muted: #475569;
      --accent: #0f4c81;
      --accent-soft: #e0f2fe;
      --border: #cbd5e1;
      --code-bg: #f1f5f9;
      --highlight: #fef3c7;
      --highlight-border: #d97706;
    }

    *, *::before, *::after {
      box-sizing: border-box;
    }

    html, body {
      margin: 0;
      padding: 0;
      background: #e2e8f0;
      color: var(--ink);
      font-family: "Georgia", "Times New Roman", serif;
      font-size: 16px;
      line-height: 1.62;
      overflow-x: hidden;
    }

    .toolbar {
      position: sticky;
      top: 0;
      z-index: 100;
      background: var(--accent);
      color: #ffffff;
      padding: 0.65rem 1.25rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
      font-family: system-ui, -apple-system, sans-serif;
      font-size: 0.9rem;
      box-shadow: 0 2px 8px rgba(15, 23, 42, 0.18);
    }

    .toolbar-controls {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .toolbar button {
      background: rgba(255, 255, 255, 0.16);
      color: #ffffff;
      border: 1px solid rgba(255, 255, 255, 0.35);
      border-radius: 4px;
      padding: 0.35rem 0.75rem;
      cursor: pointer;
      font-weight: 600;
      font-size: 0.85rem;
    }

    .toolbar button.active,
    .toolbar button:hover {
      background: #ffffff;
      color: var(--accent);
    }

    .book-page {
      max-width: 960px;
      margin: 1.5rem auto;
      background: var(--bg);
      padding: 2.5rem 2.75rem;
      box-shadow: 0 10px 30px rgba(15, 23, 42, 0.12);
      border-radius: 6px;
      overflow-wrap: break-word;
      word-wrap: break-word;
    }

    .book-page.two-column {
      max-width: 1220px;
      column-count: 2;
      column-gap: 2.25rem;
      column-rule: 1px solid var(--border);
    }

    h1, h2, h3, h4 {
      font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
      color: var(--accent);
      margin-top: 1.5rem;
      margin-bottom: 0.6rem;
      line-height: 1.25;
      break-after: avoid;
      page-break-after: avoid;
    }

    .chapter-banner {
      border-bottom: 3px solid var(--accent);
      padding-bottom: 0.6rem;
      margin-bottom: 1.4rem;
      column-span: all;
    }

    .chapter-tag {
      font-family: system-ui, sans-serif;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--muted);
      font-weight: 700;
    }

    .page-ref {
      display: inline-block;
      font-family: system-ui, sans-serif;
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--muted);
      background: var(--code-bg);
      border: 1px solid var(--border);
      border-radius: 3px;
      padding: 0.08rem 0.4rem;
      margin: 0.2rem 0;
    }

    p {
      margin: 0.55rem 0 0.85rem 0;
    }

    .box {
      background: var(--surface);
      border-left: 4px solid var(--accent);
      border-top: 1px solid var(--border);
      border-right: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
      padding: 0.9rem 1.1rem;
      margin: 1rem 0;
      border-radius: 0 5px 5px 0;
      break-inside: avoid;
      page-break-inside: avoid;
      max-width: 100%;
    }

    .box.key {
      background: #f0f9ff;
      border-left-color: #0284c7;
    }

    .box.note {
      background: var(--highlight);
      border-left-color: var(--highlight-border);
    }

    .box-title {
      font-family: system-ui, sans-serif;
      font-weight: 700;
      font-size: 0.92rem;
      color: var(--accent);
      margin-bottom: 0.4rem;
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }

    .example, .proof-block {
      border: 1px solid var(--border);
      background: #ffffff;
      border-radius: 5px;
      padding: 0.9rem 1.1rem;
      margin: 1rem 0;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .example-header {
      font-family: system-ui, sans-serif;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 0.4rem;
    }

    .eq-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
      max-width: 100%;
    }

    .eq-main {
      flex: 1 1 auto;
      min-width: 0;
      overflow-x: auto;
      overflow-y: hidden;
    }

    .eq-num {
      font-family: system-ui, sans-serif;
      font-size: 0.88rem;
      color: var(--muted);
      font-weight: 600;
      flex: 0 0 auto;
    }

    /* Prevent horizontal overflow on MathJax and preformatted blocks */
    mjx-container[display="true"] {
      display: block !important;
      max-width: 100% !important;
      overflow-x: auto !important;
      overflow-y: hidden !important;
      padding: 0.25rem 0;
    }

    pre {
      background: var(--code-bg);
      border: 1px solid var(--border);
      border-radius: 5px;
      padding: 0.85rem 1rem;
      overflow-x: auto;
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      font-size: 0.84rem;
      line-height: 1.45;
      max-width: 100%;
      break-inside: avoid;
    }

    figure {
      margin: 1.1rem 0;
      padding: 0.8rem;
      border: 1px solid var(--border);
      border-radius: 5px;
      background: #ffffff;
      text-align: center;
      break-inside: avoid;
      page-break-inside: avoid;
      max-width: 100%;
    }

    figure svg {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 0 auto;
    }

    figcaption {
      font-family: system-ui, sans-serif;
      font-size: 0.86rem;
      color: var(--muted);
      margin-top: 0.55rem;
      text-align: left;
    }

    ol.problems, ul.clean-list {
      padding-left: 1.35rem;
      margin: 0.6rem 0 1rem 0;
    }

    ol.problems > li, ul.clean-list > li {
      margin-bottom: 0.7rem;
      break-inside: avoid;
    }

    .problem-item {
      margin-bottom: 0.85rem;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .problem-num {
      font-family: system-ui, sans-serif;
      font-weight: 700;
      color: var(--accent);
      margin-right: 0.35rem;
    }

    .subparts {
      margin-top: 0.35rem;
      padding-left: 1.2rem;
    }

    .subparts p {
      margin: 0.3rem 0;
    }

    .blank {
      display: inline-block;
      min-width: 3.2em;
      border-bottom: 1.5px solid var(--ink);
      height: 1em;
      vertical-align: baseline;
    }

    .footnote {
      font-size: 0.85rem;
      color: var(--muted);
      border-top: 1px dashed var(--border);
      padding-top: 0.45rem;
      margin-top: 0.9rem;
    }

    @media (max-width: 820px) {
      .book-page {
        padding: 1.25rem 1rem;
        margin: 0.5rem;
      }
      .book-page.two-column {
        column-count: 1;
      }
    }

    @media print {
      body {
        background: #ffffff;
        font-size: 10.5pt;
        line-height: 1.45;
      }
      .toolbar {
        display: none !important;
      }
      .book-page {
        max-width: 100%;
        margin: 0;
        padding: 0;
        box-shadow: none;
        border-radius: 0;
      }
      .book-page.two-column {
        column-count: 2;
        column-gap: 1.5rem;
      }
      mjx-container[display="true"] {
        overflow-x: visible !important;
      }
    }
  </style>
</head>
<body>

  <div class="toolbar">
    <div><strong>Linear Algebra Textbook Notes (ASD-STE100)</strong> &mdash; Strang Ch. 4 &amp; Ch. 6</div>
    <div class="toolbar-controls">
      <button id="btn-single" class="active" onclick="setLayout('single')">Single Column</button>
      <button id="btn-two" onclick="setLayout('two')">Two Columns</button>
      <button onclick="window.print()">Print / Save PDF</button>
    </div>
  </div>

  <main id="book" class="book-page">

    <!-- ==================== SECTION 4.3 EXERCISES (PAGE 229) ==================== -->
    <section>
      <div class="chapter-banner">
        <div class="chapter-tag">Chapter 4 &bull; Orthogonality</div>
        <h1>4.3 Least Squares Approximations (Problems 22&ndash;29)</h1>
      </div>
      <span class="page-ref">Book Page 229</span>

      <div class="problem-item">
        <span class="problem-num">22</span>
        Find the best line $C + Dt$ that fits $b = 4, 2, -1, 0, 0$ at times $t = -2, -1, 0, 1, 2$.
      </div>

      <div class="problem-item">
        <span class="problem-num">23</span>
        Is the error vector $e$ orthogonal to $b$, $p$, $e$, or $\hat{x}$? Show that $\|e\|^2$ equals $e^T b$, and show that $e^T b$ equals $b^T b - p^T b$. This value is the smallest total error $E$.
      </div>

      <div class="problem-item">
        <span class="problem-num">24</span>
        The partial derivatives of $\|Ax\|^2$ with respect to $x_1, \dots, x_n$ form the vector $2A^T Ax$. The partial derivatives of $2b^T Ax$ form the vector $2A^T b$. Therefore, the partial derivatives of $\|Ax - b\|^2$ are zero when <span class="blank"></span>.
      </div>

      <h3>Challenge Problems</h3>

      <div class="problem-item">
        <span class="problem-num">25</span>
        What condition on $(t_1, b_1)$, $(t_2, b_2)$, and $(t_3, b_3)$ places those three points on a straight line? A column space answer is: $(b_1, b_2, b_3)$ must be a linear combination of $(1, 1, 1)$ and $(t_1, t_2, t_3)$. Find a specific equation that connects the $t$ values and the $b$ values. (Author note: I should have thought of this question sooner!)
      </div>

      <div class="problem-item">
        <span class="problem-num">26</span>
        Find the plane that gives the best fit to the four values $b = (0, 1, 3, 4)$ at the corners $(1, 0)$, $(0, 1)$, $(-1, 0)$, and $(0, -1)$ of a square. The equations $C + Dx + Ey = b$ at those four points give $Ax = b$ with three unknowns $x = (C, D, E)$. What is the matrix $A$? At the center $(0, 0)$ of the square, show that $C + Dx + Ey$ equals the average of the $b$ values.
      </div>

      <div class="problem-item">
        <span class="problem-num">27</span>
        <strong>(Distance between lines)</strong> The points $P = (x, x, x)$ and $Q = (y, 3y, -1)$ lie on two lines in space that do not intersect. Choose $x$ and $y$ to minimize the squared distance $\|P - Q\|^2$. The line that connects the closest $P$ and $Q$ is perpendicular to <span class="blank"></span>.
      </div>

      <div class="problem-item">
        <span class="problem-num">28</span>
        Suppose the columns of $A$ are not linearly independent. How can you find a matrix $B$ such that $P = B(B^T B)^{-1} B^T$ gives the projection onto the column space of $A$? (The usual formula fails when $A^T A$ is not invertible.)
      </div>

      <div class="problem-item">
        <span class="problem-num">29</span>
        Usually, there is exactly one hyperplane in $\mathbf{R}^n$ that contains the $n$ given points $x = 0, a_1, \dots, a_{n-1}$. (Example for $n = 3$: There is one plane that contains $0, a_1, a_2$ unless <span class="blank"></span>.) What is the test for exactly one hyperplane in $\mathbf{R}^n$?
      </div>
    </section>

    <!-- ==================== SECTION 4.4 (PAGES 230-243) ==================== -->
    <section>
      <div class="chapter-banner">
        <div class="chapter-tag">Chapter 4 &bull; Orthogonality</div>
        <h1>4.4 Orthogonal Bases and Gram-Schmidt</h1>
      </div>
      <span class="page-ref">Book Page 230</span>

      <p>This section has two goals:</p>
      <ul class="clean-list">
        <li><strong>Goal 1:</strong> Show how orthogonality makes it easy to compute $\hat{x}$, $p$, and $P$. Because dot products are zero, $A^T A$ becomes a diagonal matrix.</li>
        <li><strong>Goal 2:</strong> Construct orthogonal vectors. We select linear combinations of the original vectors to make right angles. The original vectors are the columns of $A$ (usually not orthogonal). The new orthogonal vectors become the columns of a matrix $Q$.</li>
      </ul>

      <p>From Chapter 3, a basis contains independent vectors that span a space. Basis vectors can meet at any angle except $0^\circ$ and $180^\circ$. However, when we visualize coordinate axes, we almost always draw them perpendicular. Orthogonal axes simplify both the geometry and the calculations.</p>

      <p>Vectors $q_1, \dots, q_n$ are <strong>orthogonal</strong> when all dot products $q_i \cdot q_j$ equal zero for $i \ne j$, that is, $q_i^T q_j = 0$ when $i \ne j$. Divide each vector by its length to make orthogonal unit vectors (each length equals $1$). Such a basis is called <strong>orthonormal</strong>.</p>

      <div class="box key">
        <div class="box-title">Definition: Orthonormal Vectors and $Q$</div>
        <p>The vectors $q_1, \dots, q_n$ are <strong>orthonormal</strong> if:</p>
        $$q_i^T q_j = \begin{cases} 0 & \text{when } i \ne j \quad (\text{orthogonal vectors}) \\ 1 & \text{when } i = j \quad (\text{unit vectors: } \|q_i\| = 1) \end{cases}$$
        <p>A matrix with orthonormal columns is given the special letter $Q$.</p>
      </div>

      <p>The matrix $Q$ is easy to use because $Q^T Q = I$. This matrix equation states that the columns $q_1, \dots, q_n$ are orthonormal. Note that $Q$ does not need to be square.</p>

      <div class="box key">
        <div class="box-title">A Matrix $Q$ with Orthonormal Columns Satisfies $Q^T Q = I$</div>
        <div class="eq-row">
          <div class="eq-main">
            $$Q^T Q = \begin{bmatrix} - & q_1^T & - \\ - & q_2^T & - \\ & \vdots & \\ - & q_n^T & - \end{bmatrix} \begin{bmatrix} | & | & & | \\ q_1 & q_2 & \cdots & q_n \\ | & | & & | \end{bmatrix} = \begin{bmatrix} 1 & 0 & \cdots & 0 \\ 0 & 1 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & 1 \end{bmatrix} = I$$
          </div>
          <div class="eq-num">(1)</div>
        </div>
      </div>

      <p>Row $i$ of $Q^T$ multiplies column $j$ of $Q$ to give the dot product $q_i^T q_j$. Off the diagonal ($i \ne j$), the dot product is zero by orthogonality. On the diagonal ($i = j$), the unit vectors give $q_i^T q_i = \|q_i\|^2 = 1$. Often $Q$ is rectangular ($m > n$), and sometimes $Q$ is square ($m = n$).</p>

      <p><strong>When $Q$ is square, $Q^T Q = I$ means $Q^T = Q^{-1}$: transpose equals inverse.</strong></p>

      <p>If the columns are only orthogonal (not unit vectors), their dot products still produce a diagonal matrix (not $I$). That diagonal matrix is also easy to use. Orthogonality is the essential property; you can then scale each vector to unit length.</p>

      <span class="page-ref">Book Page 231</span>
      <p>To repeat: $Q^T Q = I$ holds even when $Q$ is rectangular. In the rectangular case, $Q^T$ is only a left inverse. When $Q$ is square, $Q Q^T = I$ also holds, so $Q^T$ is the two-sided inverse of $Q$. The rows of a square $Q$ are orthonormal just like the columns. In this square case, we call $Q$ an <strong>orthogonal matrix</strong>.<sup>1</sup></p>

      <div class="footnote">
        <sup>1</sup> &ldquo;Orthonormal matrix&rdquo; would have been a better name for $Q$, but that name is not used. Any matrix with orthonormal columns uses the letter $Q$, but we only call it an <em>orthogonal matrix</em> when it is square.
      </div>

      <p>Here are three examples of orthogonal matrices: rotation, permutation, and reflection. The quickest test is to check $Q^T Q = I$.</p>

      <div class="example">
        <div class="example-header">Example 1 (Rotation)</div>
        <p>$Q$ rotates every vector in the plane clockwise by the angle $\theta$:</p>
        $$Q = \begin{bmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{bmatrix} \quad \text{and} \quad Q^T = Q^{-1} = \begin{bmatrix} \cos\theta & \sin\theta \\ -\sin\theta & \cos\theta \end{bmatrix}.$$
        <p>The columns of $Q$ are orthogonal (check their dot product). They are unit vectors because $\sin^2\theta + \cos^2\theta = 1$. These columns form an <strong>orthonormal basis</strong> for $\mathbf{R}^2$. The standard basis vectors $i$ and $j$ rotate through $\theta$ (see Figure 4.10a). $Q^{-1}$ rotates vectors back through $-\theta$. It equals $Q^T$ because $\cos(-\theta) = \cos\theta$ and $\sin(-\theta) = -\sin\theta$. Both $Q^T Q = I$ and $Q Q^T = I$ hold.</p>
      </div>

      <div class="example">
        <div class="example-header">Example 2 (Permutation)</div>
        <p>These matrices change component order to $(y, z, x)$ and $(y, x)$:</p>
        $$\begin{bmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 0 \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} y \\ z \\ x \end{bmatrix} \quad \text{and} \quad \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix} \begin{bmatrix} x \\ y \end{
