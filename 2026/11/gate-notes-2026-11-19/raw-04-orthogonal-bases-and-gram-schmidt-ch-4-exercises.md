*Note: I do not have access to external websites, local CLI tools (`aistudio`), or PDF export utilities, so I cannot run the automated workflow or export PDFs directly. Below is the complete, self-contained HTML textbook note generated from all 16 pages of the attached PDF, written in clear **ASD-STE100** style (short, direct, active sentences), using **MathJax** for LaTeX, **inline SVGs** for all diagrams, and **overflow-safe print CSS** ready for single-column or two-column PDF conversion.*

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Linear Algebra Notes — Sections 4.3, 4.4, and 6.5 (ASD-STE100)</title>

  <!-- MathJax v3 Configuration -->
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
  <script id="MathJax-script" async
    src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

  <style>
    :root {
      --bg: #ffffff;
      --fg: #1b1f23;
      --muted: #57606a;
      --accent: #0f4c81;
      --accent-soft: #eef5fb;
      --border: #d0d7de;
      --code-bg: #f6f8fa;
      --warn-bg: #fff8e6;
      --warn-border: #d4a72c;
      --theorem-bg: #f3f7fa;
    }

    *, *::before, *::after {
      box-sizing: border-box;
    }

    html {
      font-size: 16px;
      -webkit-text-size-adjust: 100%;
    }

    body {
      margin: 0;
      padding: 2rem 1.25rem;
      background: #f4f6f8;
      color: var(--fg);
      font-family: "Georgia", "Liberation Serif", "Times New Roman", serif;
      line-height: 1.62;
      overflow-wrap: break-word;
      word-wrap: break-word;
    }

    .book-container {
      max-width: 900px;
      margin: 0 auto;
      background: var(--bg);
      padding: 2.5rem 2.75rem;
      border: 1px solid var(--border);
      border-radius: 6px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
    }

    header.doc-header {
      border-bottom: 3px solid var(--accent);
      padding-bottom: 1rem;
      margin-bottom: 2rem;
    }

    .doc-kicker {
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--accent);
      margin-bottom: 0.35rem;
    }

    h1 {
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 1.85rem;
      line-height: 1.25;
      margin: 0 0 0.4rem 0;
      color: #0d2b45;
    }

    .doc-subtitle {
      font-size: 0.95rem;
      color: var(--muted);
      margin: 0;
    }

    h2 {
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 1.38rem;
      color: var(--accent);
      border-bottom: 1.5px solid var(--border);
      padding-bottom: 0.3rem;
      margin: 2.2rem 0 1rem 0;
      break-after: avoid;
      page-break-after: avoid;
    }

    h3 {
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 1.12rem;
      color: #0d2b45;
      margin: 1.6rem 0 0.65rem 0;
      break-after: avoid;
      page-break-after: avoid;
    }

    h4 {
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 1rem;
      color: var(--fg);
      margin: 1.2rem 0 0.4rem 0;
      break-after: avoid;
    }

    p {
      margin: 0.65rem 0;
    }

    ul, ol {
      margin: 0.6rem 0 0.9rem 0;
      padding-left: 1.5rem;
    }

    li {
      margin-bottom: 0.4rem;
    }

    /* Boxes */
    .box {
      border-left: 4px solid var(--accent);
      background: var(--theorem-bg);
      padding: 0.9rem 1.15rem;
      margin: 1.1rem 0;
      border-radius: 0 4px 4px 0;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .box-title {
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 0.85rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--accent);
      margin-bottom: 0.35rem;
    }

    .highlight-box {
      border: 1.5px solid var(--accent);
      background: var(--accent-soft);
      padding: 0.9rem 1.15rem;
      margin: 1.1rem 0;
      border-radius: 4px;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .example-block {
      border: 1px solid var(--border);
      background: #fafbfc;
      padding: 0.95rem 1.15rem;
      margin: 1.1rem 0;
      border-radius: 4px;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .example-label {
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-weight: 700;
      color: #0d2b45;
    }

    .note-box {
      border-left: 4px solid var(--warn-border);
      background: var(--warn-bg);
      padding: 0.85rem 1.1rem;
      margin: 1rem 0;
      border-radius: 0 4px 4px 0;
      break-inside: avoid;
    }

    .footnote {
      font-size: 0.88rem;
      color: var(--muted);
      border-top: 1px dashed var(--border);
      padding-top: 0.45rem;
      margin-top: 0.85rem;
    }

    /* Equation row */
    .eq-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
      margin: 0.8rem 0;
      max-width: 100%;
    }

    .eq-content {
      flex: 1 1 auto;
      min-width: 0;
      overflow-x: auto;
      text-align: center;
    }

    .eq-num {
      flex: 0 0 auto;
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 0.9rem;
      color: var(--muted);
    }

    /* MathJax overflow protection */
    mjx-container {
      max-width: 100% !important;
      overflow-x: auto;
      overflow-y: hidden;
    }

    mjx-container[display="true"] {
      display: block !important;
      margin: 0.75rem 0 !important;
      padding: 0.15rem 0;
    }

    /* Code blocks */
    pre {
      background: var(--code-bg);
      border: 1px solid var(--border);
      border-radius: 4px;
      padding: 0.9rem 1rem;
      font-family: "Consolas", "Liberation Mono", Menlo, monospace;
      font-size: 0.86rem;
      line-height: 1.48;
      white-space: pre-wrap;
      word-break: break-word;
      overflow-x: auto;
      max-width: 100%;
      break-inside: avoid;
    }

    code {
      font-family: "Consolas", "Liberation Mono", Menlo, monospace;
      font-size: 0.88em;
      background: var(--code-bg);
      padding: 0.1em 0.3em;
      border-radius: 3px;
    }

    /* SVG Figures */
    figure {
      margin: 1.4rem 0;
      padding: 1rem;
      border: 1px solid var(--border);
      border-radius: 4px;
      background: #ffffff;
      text-align: center;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    figure svg {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 0 auto;
    }

    figcaption {
      margin-top: 0.65rem;
      font-size: 0.9rem;
      color: var(--muted);
      text-align: left;
    }

    /* Problem sets */
    .problem-list {
      list-style: none;
      padding-left: 0;
      margin: 0.8rem 0;
    }

    .problem-item {
      padding: 0.65rem 0.75rem;
      border-bottom: 1px solid #eaeef2;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .problem-item:last-child {
      border-bottom: none;
    }

    .prob-num {
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-weight: 700;
      color: var(--accent);
      margin-right: 0.45rem;
    }

    .sub-list {
      margin: 0.35rem 0 0.2rem 1.2rem;
      padding-left: 0.6rem;
    }

    .page-tag {
      display: inline-block;
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 0.72rem;
      font-weight: 600;
      color: var(--muted);
      background: #eef1f4;
      padding: 0.1rem 0.45rem;
      border-radius: 3px;
      margin-bottom: 0.4rem;
    }

    /* Print & multi-column PDF safety */
    @media print {
      body {
        background: #ffffff;
        padding: 0;
        font-size: 10.5pt;
      }
      .book-container {
        max-width: 100%;
        border: none;
        box-shadow: none;
        padding: 0;
      }
      .box, .highlight-box, .example-block, .note-box, figure, pre, .problem-item {
        break-inside: avoid;
        page-break-inside: avoid;
      }
      mjx-container {
        overflow-x: visible !important;
      }
    }

    @media (max-width: 640px) {
      body {
        padding: 0.75rem 0.5rem;
      }
      .book-container {
        padding: 1.25rem 1rem;
      }
    }
  </style>
</head>
<body>
  <main class="book-container">
    <header class="doc-header">
      <div class="doc-kicker">Linear Algebra — Complete Study Notes (ASD-STE100 Style)</div>
      <h1>Orthogonality, Gram-Schmidt, and Positive Definite Matrices</h1>
      <p class="doc-subtitle">
        Covers Textbook Pages 229–243 (Sections 4.3 Exercises and 4.4) and Page 342 (Section 6.5).
        All definitions, proofs, examples, figures, and problems are included.
      </p>
    </header>

    <!-- ========================================================= -->
    <!-- SECTION 4.3 EXERCISES (PAGE 229)                          -->
    <!-- ========================================================= -->
    <section id="sec-4-3">
      <span class="page-tag">Page 229</span>
      <h2>4.3 Least Squares Approximations (Exercises 22–29)</h2>

      <ul class="problem-list">
        <li class="problem-item">
          <span class="prob-num">22</span>
          Find the best line $C + Dt$ to fit the values $b = 4, 2, -1, 0, 0$ at times $t = -2, -1, 0, 1, 2$.
        </li>
        <li class="problem-item">
          <span class="prob-num">23</span>
          Is the error vector $\boldsymbol{e}$ orthogonal to $\boldsymbol{b}$, $\boldsymbol{p}$, $\boldsymbol{e}$, or $\widehat{\boldsymbol{x}}$?
          Show that $\|\boldsymbol{e}\|^2$ equals $\boldsymbol{e}^{\mathsf{T}}\boldsymbol{b}$, which equals $\boldsymbol{b}^{\mathsf{T}}\boldsymbol{b} - \boldsymbol{p}^{\mathsf{T}}\boldsymbol{b}$.
          This value is the smallest total error $E$.
        </li>
        <li class="problem-item">
          <span class="prob-num">24</span>
          The partial derivatives of $\|A\boldsymbol{x}\|^2$ with respect to $x_1, \dots, x_n$ form the vector $2A^{\mathsf{T}}A\boldsymbol{x}$.
          The derivatives of $2\boldsymbol{b}^{\mathsf{T}}A\boldsymbol{x}$ form the vector $2A^{\mathsf{T}}\boldsymbol{b}$.
          Therefore, the derivatives of $\|A\boldsymbol{x} - \boldsymbol{b}\|^2$ are zero when <u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>.
        </li>
      </ul>

      <h3>Challenge Problems</h3>
      <ul class="problem-list">
        <li class="problem-item">
          <span class="prob-num">25</span>
          What condition on $(t_1, b_1), (t_2, b_2), (t_3, b_3)$ puts these three points on a straight line?
          A column space answer is: $(b_1, b_2, b_3)$ must be a linear combination of $(1, 1, 1)$ and $(t_1, t_2, t_3)$.
          Find a specific equation that connects the $t$ values and the $b$ values.
        </li>
        <li class="problem-item">
          <span class="prob-num">26</span>
          Find the plane that gives the best fit to the four values $\boldsymbol{b} = (0, 1, 3, 4)$ at the corners $(1,0)$, $(0,1)$, $(-1,0)$, and $(0,-1)$ of a square.
          The equations $C + Dx + Ey = b$ at these four points form $A\boldsymbol{x} = \boldsymbol{b}$ with three unknowns $\boldsymbol{x} = (C, D, E)$.
          What is the matrix $A$?
          At the center $(0, 0)$ of the square, show that $C + Dx + Ey$ equals the average of the $b$ values.
        </li>
        <li class="problem-item">
          <span class="prob-num">27</span>
          <strong>(Distance between lines)</strong> The points $P = (x, x, x)$ and $Q = (y, 3y, -1)$ lie on two lines in space that do not intersect.
          Select $x$ and $y$ to minimize the squared distance $\|P - Q\|^2$.
          The line that connects the closest $P$ and $Q$ is perpendicular to <u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>.
        </li>
        <li class="problem-item">
          <span class="prob-num">28</span>
          Suppose that the columns of $A$ are not linearly independent.
          How do you find a matrix $B$ such that $P = B(B^{\mathsf{T}}B)^{-1}B^{\mathsf{T}}$ gives the projection onto the column space of $A$?
          (The standard formula fails when $A^{\mathsf{T}}A$ is not invertible.)
        </li>
        <li class="problem-item">
          <span class="prob-num">29</span>
          Usually, there is only one hyperplane in $\mathbf{R}^n$ that contains the $n$ given points $\boldsymbol{x} = \boldsymbol{0}, \boldsymbol{a}_1, \dots, \boldsymbol{a}_{n-1}$.
          (Example for $n = 3$: There is one plane that contains $\boldsymbol{0}, \boldsymbol{a}_1, \boldsymbol{a}_2$ unless <u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>.)
          What is the test to ensure that there is only one plane in $\mathbf{R}^n$?
        </li>
      </ul>
    </section>

    <!-- ========================================================= -->
    <!-- SECTION 4.4 (PAGES 230–243)                               -->
    <!-- ========================================================= -->
    <section id="sec-4-4">
      <span class="page-tag">Page 230</span>
      <h2>4.4 Orthogonal Bases and Gram-Schmidt</h2>

      <p>This section has two goals:</p>
      <ol>
        <li>Show how orthogonality makes it easy to find $\widehat{\boldsymbol{x}}$, $\boldsymbol{p}$, and $P$. When dot products are zero, $A^{\mathsf{T}}A$ becomes a diagonal matrix.</li>
        <li>Construct orthogonal vectors. We select linear combinations of the initial vectors to make right angles. The initial vectors are the columns of $A$, which are usually not orthogonal. The new orthogonal vectors form the columns of a matrix $Q$.</li>
      </ol>

      <p>
        From Chapter 3, a basis contains independent vectors that span the space.
        Basis vectors can meet at any angle except $0^\circ$ and $180^\circ$.
        However, we usually imagine coordinate axes as perpendicular. Orthogonal axes simplify both the geometry and the calculations.
      </p>

      <p>
        The vectors $\boldsymbol{q}_1, \dots, \boldsymbol{q}_n$ are <strong>orthogonal</strong> when their dot products $\boldsymbol{q}_i \cdot \boldsymbol{q}_j$ equal zero for $i \neq j$.
        Next, divide each vector by its length to make <strong>orthogonal unit vectors</strong> (length $1$).
        The basis is then called <strong>orthonormal</strong>.
      </p>

      <div class="box">
        <div class="box-title">Definition — Orthonormal Vectors</div>
        <p>The vectors $\boldsymbol{q}_1, \dots, \boldsymbol{q}_n$ are <strong>orthonormal</strong> if:</p>
        $$\boldsymbol{q}_i^{\mathsf{T}}\boldsymbol{q}_j = \begin{cases} 0 & \text{when } i \neq j \quad (\text{orthogonal vectors}) \\ 1 & \text{when } i = j \quad (\text{unit vectors: } \|\boldsymbol{q}_i\| = 1) \end{cases}$$
        <p>A matrix with orthonormal columns is written with the special letter $Q$.</p>
      </div>

      <p>
        The matrix $Q$ is easy to use because $Q^{\mathsf{T}}Q = I$. This matrix equation states that the columns $\boldsymbol{q}_1, \dots, \boldsymbol{q}_n$ are orthonormal. $Q$ does not have to be square.
      </p>

      <div class="highlight-box">
        <div class="box-title">A matrix $Q$ with orthonormal columns satisfies $Q^{\mathsf{T}}Q = I$</div>
        <div class="eq-row">
          <div class="eq-content">
            $$Q^{\mathsf{T}}Q = \begin{bmatrix}
            — & \boldsymbol{q}_1^{\mathsf{T}} & — \\
            — & \boldsymbol{q}_2^{\mathsf{T}} & — \\
            & \vdots & \\
            — & \boldsymbol{q}_n^{\mathsf{T}} & —
            \end{bmatrix}
            \begin{bmatrix}
            \mid & \mid & & \mid \\
            \boldsymbol{q}_1 & \boldsymbol{q}_2 & \cdots & \boldsymbol{q}_n \\
            \mid & \mid & & \mid
            \end{bmatrix}
            = \begin{bmatrix}
            1 & 0 & \cdots & 0 \\
            0 & 1 & \cdots & 0 \\
            \vdots & \vdots & \ddots & \vdots \\
            0 & 0 & \cdots & 1
            \end{bmatrix} = I.$$
          </div>
          <div class="eq-num">(1)</div>
        </div>
      </div>

      <p>
        When row $i$ of $Q^{\mathsf{T}}$ multiplies column $j$ of $Q$, the result is the dot product $\boldsymbol{q}_i^{\mathsf{T}}\boldsymbol{q}_j$.
        Off the diagonal ($i \neq j$), the dot product is $0$ by orthogonality.
        On the diagonal ($i = j$), unit length gives $\boldsymbol{q}_i^{\mathsf{T}}\boldsymbol{q}_i = \|\boldsymbol{q}_i\|^2 = 1$.
        Often $Q$ is rectangular ($m > n$), and sometimes $Q$ is square ($m = n$).
      </p>

      <p><strong>When $Q$ is square, $Q^{\mathsf{T}}Q = I$ means that $Q^{\mathsf{T}} = Q^{-1}$ (transpose equals inverse).</strong></p>

      <p>
        If the columns are only orthogonal (not unit vectors), the dot products produce a diagonal matrix instead of $I$.
        This diagonal matrix is still easy to invert. Orthogonality is the main requirement; dividing by lengths to get unit vectors is simple afterward.
      </p>

      <!-- Page 231 -->
      <span class="page-tag">Page 231</span>
      <p>
        To repeat: $Q^{\mathsf{T}}Q = I$ holds even when $Q$ is rectangular. In that case, $Q^{\mathsf{T}}$ is only a left inverse.
        When $Q$ is square, we also have $QQ^{\mathsf{T}} = I$, so $Q^{\mathsf{T}}$ is the two-sided inverse of $Q$.
        The rows of a square $Q$ are orthonormal, just like its columns. The inverse is the transpose.
        In this square case, $Q$ is called an <strong>orthogonal matrix</strong>.<sup>1</sup>
      </p>

      <p>
        Below are three examples of orthogonal matrices: rotation, permutation, and reflection.
        The fastest check is to verify $Q^{\mathsf{T}}Q = I$.
      </p>

      <div class="example-block">
        <p><span class="example-label">Example 1 (Rotation)</span> $Q$ rotates every vector in the plane clockwise by the angle $\theta$:</p>
        $$Q = \begin{bmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{bmatrix}
        \quad \text{and} \quad
        Q^{\mathsf{T}} = Q^{-1} = \begin{bmatrix} \cos\theta & \sin\theta \\ -\sin\theta & \cos\theta \end{bmatrix}.$$
        <p>
          The columns of $Q$ are orthogonal (their dot product is $0$). They are unit vectors because $\sin^2\theta + \cos^2\theta = 1$.
          These columns form an <strong>orthonormal basis</strong> for $\mathbf{R}^2$.
          The standard basis vectors $\boldsymbol{i}$ and $\boldsymbol{j}$ rotate through $\theta$ (see Figure 4.10a).
          $Q^{-1}$ rotates vectors back through $-\theta$. It matches $Q^{\mathsf{T}}$ because $\cos(-\theta) = \cos\theta$ and $\sin(-\theta) = -\sin\theta$.
          Both $Q^{\mathsf{T}}Q = I$ and $QQ^{\mathsf{T}} = I$ hold.
        </p>
      </div>

      <div class="example-block">
        <p><span class="example-label">Example 2 (Permutation)</span> These matrices reorder components to $(y, z, x)$ and $(y, x)$:</p>
        $$\begin{bmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 0 \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} y \\ z \\ x \end{bmatrix}
        \quad \text{and} \quad
        \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \
