import { ExamPaper } from '../types';

export const EXAM_PAPERS: ExamPaper[] =[
  {
    moduleId: 'module-1',
    title: 'Module 1: Vector Spaces',
    sections:[
      {
        id: 'mod1-sec-a',
        title: 'Section A',
        description: 'Answer any number of questions. Each question carries 3 Marks. Maximum marks: 12.',
        questions:[
          {
            id: 'm1-q1', qNumber: 'Q1', marks: 3,
            question: 'Define a subspace of a vector space.',
            solution: 'A **subspace** of a vector space $V$ is a subset $H$ of $V$ that has three properties:\n\n1. The zero vector of $V$ is in $H$.\n2. $H$ is closed under vector addition (if $\\mathbf{u}, \\mathbf{v} \\in H$, then $\\mathbf{u} + \\mathbf{v} \\in H$).\n3. $H$ is closed under multiplication by scalars (if $\\mathbf{u} \\in H$ and $c$ is a scalar, then $c\\mathbf{u} \\in H$).'
          },
          {
            id: 'm1-q2', qNumber: 'Q2', marks: 3,
            question: 'Let $A = \\begin{bmatrix} 1 & -3 & -2 \\\\ -5 & 9 & 1 \\end{bmatrix}$ and let $\\mathbf{u} = \\begin{bmatrix} 5 \\\\ 3 \\\\ -2 \\end{bmatrix}$. Determine if $\\mathbf{u}$ belongs to the null space of $A$.',
            solution: 'The null space of $A$ ($\\text{Nul } A$) is the set of all solutions to the homogeneous equation $A\\mathbf{x} = \\mathbf{0}$. We compute $A\\mathbf{u}$:\n\n$$ A\\mathbf{u} = \\begin{bmatrix} 1 & -3 & -2 \\\\ -5 & 9 & 1 \\end{bmatrix} \\begin{bmatrix} 5 \\\\ 3 \\\\ -2 \\end{bmatrix} = \\begin{bmatrix} 1(5) -3(3) -2(-2) \\\\ -5(5) + 9(3) + 1(-2) \\end{bmatrix} $$\n\n$$ = \\begin{bmatrix} 5 - 9 + 4 \\\\ -25 + 27 - 2 \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix} $$\n\nSince $A\\mathbf{u} = \\mathbf{0}$, the vector $\\mathbf{u}$ **belongs** to the null space of $A$.'
          },
          {
            id: 'm1-q3', qNumber: 'Q3', marks: 3,
            question: 'State the formal definition of a linearly independent set.',
            solution: 'An indexed set of vectors $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_p\\}$ in a vector space $V$ is said to be **linearly independent** if the vector equation:\n$$ c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\dots + c_p\\mathbf{v}_p = \\mathbf{0} $$\nhas *only* the trivial solution $c_1 = 0, \\dots, c_p = 0$.'
          },
          {
            id: 'm1-q4', qNumber: 'Q4', marks: 3,
            question: 'Let $H = \\left\\{ \\begin{bmatrix} a \\\\ b \\\\ c \\end{bmatrix} : a - 3b - c = 0 \\right\\}$. Show that $H$ is a subspace of $\\mathbb{R}^3$.',
            solution: 'The condition $a - 3b - c = 0$ is a homogeneous linear equation. It can be written as the matrix equation $A\\mathbf{x} = 0$, where $A = \\begin{bmatrix} 1 & -3 & -1 \\end{bmatrix}$ and $\\mathbf{x} = \\begin{bmatrix} a \\\\ b \\\\ c \\end{bmatrix}$.\n\nThus, $H$ is the **Null Space** of $A$ ($H = \\text{Nul } A$). By Theorem 2, the null space of an $m \\times n$ matrix is always a subspace of $\\mathbb{R}^n$. Therefore, $H$ is a subspace of $\\mathbb{R}^3$.'
          },
          {
            id: 'm1-q5', qNumber: 'Q5', marks: 3,
            question: 'Is the first quadrant in $\\mathbb{R}^2$ a vector space? Justify your answer.',
            solution: 'Let $V = \\left\\{ \\begin{bmatrix} x \\\\ y \\end{bmatrix} : x \\ge 0, y \\ge 0 \\right\\}$.\n\nTake a vector $\\mathbf{u} = \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix} \\in V$, and let scalar $c = -1$.\n\nThen $c\\mathbf{u} = \\begin{bmatrix} -1 \\\\ -1 \\end{bmatrix}$. \n\nSince $x < 0$ and $y < 0$, $c\\mathbf{u}$ is **not** in $V$. The set fails the closure under scalar multiplication axiom, so it is **not** a vector space.'
          }
        ]
      },
      {
        id: 'mod1-sec-b',
        title: 'Section B',
        description: 'Answer any number of questions. Each question carries 6 Marks. Maximum marks: 18.',
        questions:[
          {
            id: 'm1-q6', qNumber: 'Q6', marks: 6,
            question: 'Find a spanning set for the null space of the matrix:\n$$ A = \\begin{bmatrix} -3 & 6 & -1 & 1 & -7 \\\\ 1 & -2 & 2 & 3 & -1 \\\\ 2 & -4 & 5 & 8 & -4 \\end{bmatrix} $$',
            solution: 'We find the general solution of $A\\mathbf{x} = \\mathbf{0}$ by row reducing the augmented matrix $[A \\ | \\ \\mathbf{0}]$:\n\n$$ \\begin{bmatrix} 1 & -2 & 0 & -1 & 3 & 0 \\\\ 0 & 0 & 1 & 2 & -2 & 0 \\\\ 0 & 0 & 0 & 0 & 0 & 0 \\end{bmatrix} $$\n\nThe free variables are $x_2, x_4, x_5$. Expressing basic variables in terms of free ones:\n$x_1 = 2x_2 + x_4 - 3x_5$\n$x_3 = -2x_4 + 2x_5$\n\nWriting $\\mathbf{x}$ as a vector:\n$$ \\mathbf{x} = x_2 \\begin{bmatrix} 2 \\\\ 1 \\\\ 0 \\\\ 0 \\\\ 0 \\end{bmatrix} + x_4 \\begin{bmatrix} 1 \\\\ 0 \\\\ -2 \\\\ 1 \\\\ 0 \\end{bmatrix} + x_5 \\begin{bmatrix} -3 \\\\ 0 \\\\ 2 \\\\ 0 \\\\ 1 \\end{bmatrix} $$\n\nThe spanning set for $\\text{Nul } A$ is these three vectors.'
          },
          {
            id: 'm1-q7', qNumber: 'Q7', marks: 6,
            question: 'Find a basis for the space spanned by the given vectors:\n$\\mathbf{v}_1 = \\begin{bmatrix} 1 \\\\ 0 \\\\ -3 \\\\ 2 \\end{bmatrix}, \\mathbf{v}_2 = \\begin{bmatrix} 0 \\\\ 1 \\\\ 2 \\\\ -3 \\end{bmatrix}, \\mathbf{v}_3 = \\begin{bmatrix} -3 \\\\ -4 \\\\ 1 \\\\ 6 \\end{bmatrix}$',
            solution: 'Let $A = [\\mathbf{v}_1 \\ \\mathbf{v}_2 \\ \\mathbf{v}_3]$. To find the basis for $\\text{Col } A$ (which is the space spanned by these vectors), we row reduce $A$:\n\n$$ A = \\begin{bmatrix} 1 & 0 & -3 \\\\ 0 & 1 & -4 \\\\ -3 & 2 & 1 \\\\ 2 & -3 & 6 \\end{bmatrix} \\sim \\dots \\sim \\begin{bmatrix} 1 & 0 & -3 \\\\ 0 & 1 & -4 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix} $$\n\nThe pivot positions are in columns 1 and 2. \nAccording to the Basis Theorem for column spaces, the **original** pivot columns form the basis.\n\nBasis = $\\left\\{ \\begin{bmatrix} 1 \\\\ 0 \\\\ -3 \\\\ 2 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 1 \\\\ 2 \\\\ -3 \\end{bmatrix} \\right\\}$.'
          },
          {
            id: 'm1-q8', qNumber: 'Q8', marks: 6,
            question: 'Prove that the null space of an $m \\times n$ matrix $A$ is a subspace of $\\mathbb{R}^n$.',
            solution: 'We must verify the 3 subspace properties for $\\text{Nul } A = \\{\\mathbf{x} \\in \\mathbb{R}^n : A\\mathbf{x} = \\mathbf{0}\\}$:\n\n1. **Zero Vector:** Since $A\\mathbf{0} = \\mathbf{0}$ (any matrix multiplied by the zero vector gives the zero vector), $\\mathbf{0} \\in \\text{Nul } A$.\n\n2. **Closure under addition:** Let $\\mathbf{u}, \\mathbf{v} \\in \\text{Nul } A$. Then $A\\mathbf{u} = \\mathbf{0}$ and $A\\mathbf{v} = \\mathbf{0}$. \nCompute $A(\\mathbf{u} + \\mathbf{v}) = A\\mathbf{u} + A\\mathbf{v} = \\mathbf{0} + \\mathbf{0} = \\mathbf{0}$. \nThus $\\mathbf{u} + \\mathbf{v} \\in \\text{Nul } A$.\n\n3. **Closure under scalar multiplication:** Let $\\mathbf{u} \\in \\text{Nul } A$ and $c$ be a scalar. \nCompute $A(c\\mathbf{u}) = c(A\\mathbf{u}) = c(\\mathbf{0}) = \\mathbf{0}$. \nThus $c\\mathbf{u} \\in \\text{Nul } A$.\n\nSince all three conditions hold, $\\text{Nul } A$ is a subspace of $\\mathbb{R}^n$.'
          },
          {
            id: 'm1-q9', qNumber: 'Q9', marks: 6,
            question: 'Let $H$ and $K$ be subspaces of a vector space $V$. Show that their intersection $H \\cap K$ is also a subspace of $V$.',
            solution: 'Let $W = H \\cap K$. We check the 3 subspace properties:\n\n1. **Zero Vector:** Since $H$ and $K$ are subspaces, they both contain the zero vector $\\mathbf{0}$. Since $\\mathbf{0} \\in H$ and $\\mathbf{0} \\in K$, it follows that $\\mathbf{0} \\in H \\cap K$.\n\n2. **Addition:** Let $\\mathbf{u}, \\mathbf{v} \\in H \\cap K$. This means $\\mathbf{u}, \\mathbf{v} \\in H$ AND $\\mathbf{u}, \\mathbf{v} \\in K$. Since $H$ is a subspace, $\\mathbf{u} + \\mathbf{v} \\in H$. Since $K$ is a subspace, $\\mathbf{u} + \\mathbf{v} \\in K$. Therefore, $\\mathbf{u} + \\mathbf{v} \\in H \\cap K$.\n\n3. **Scalar Mult:** Let $\\mathbf{u} \\in H \\cap K$ and $c$ be a scalar. Since $H$ is a subspace, $c\\mathbf{u} \\in H$. Since $K$ is a subspace, $c\\mathbf{u} \\in K$. Therefore, $c\\mathbf{u} \\in H \\cap K$.\n\nThus, $H \\cap K$ is a subspace of $V$.'
          }
        ]
      },
      {
        id: 'mod1-sec-c',
        title: 'Section C',
        description: 'Answer any one question. Each question carries 10 Marks.',
        questions:[
          {
            id: 'm1-q10', qNumber: 'Q10', marks: 10,
            question: '(a) Define a linear transformation $T: V \\to W$. \n(b) Let $T: \\mathbb{P}_2 \\to \\mathbb{R}^2$ be defined by $T(\\mathbf{p}) = \\begin{bmatrix} \\mathbf{p}(0) \\\\ \\mathbf{p}(1) \\end{bmatrix}$. Show that $T$ is a linear transformation and find a polynomial that spans the kernel of $T$.',
            solution: '**(a) Definition:**\nA linear transformation $T$ from a vector space $V$ into a vector space $W$ is a rule that assigns to each vector $\\mathbf{x}$ in $V$ a unique vector $T(\\mathbf{x})$ in $W$, such that:\n1. $T(\\mathbf{u} + \\mathbf{v}) = T(\\mathbf{u}) + T(\\mathbf{v})$ for all $\\mathbf{u}, \\mathbf{v}$ in $V$.\n2. $T(c\\mathbf{u}) = cT(\\mathbf{u})$ for all $\\mathbf{u}$ in $V$ and all scalars $c$.\n\n**(b) Linearity Check:**\nLet $\\mathbf{p}, \\mathbf{q} \\in \\mathbb{P}_2$.\n$T(\\mathbf{p} + \\mathbf{q}) = \\begin{bmatrix} (\\mathbf{p}+\\mathbf{q})(0) \\\\ (\\mathbf{p}+\\mathbf{q})(1) \\end{bmatrix} = \\begin{bmatrix} \\mathbf{p}(0) + \\mathbf{q}(0) \\\\ \\mathbf{p}(1) + \\mathbf{q}(1) \\end{bmatrix} = \\begin{bmatrix} \\mathbf{p}(0) \\\\ \\mathbf{p}(1) \\end{bmatrix} + \\begin{bmatrix} \\mathbf{q}(0) \\\\ \\mathbf{q}(1) \\end{bmatrix} = T(\\mathbf{p}) + T(\\mathbf{q})$.\n\n$T(c\\mathbf{p}) = \\begin{bmatrix} c\\mathbf{p}(0) \\\\ c\\mathbf{p}(1) \\end{bmatrix} = c \\begin{bmatrix} \\mathbf{p}(0) \\\\ \\mathbf{p}(1) \\end{bmatrix} = cT(\\mathbf{p})$.\n$T$ is a linear transformation.\n\n**Finding the Kernel:**\nThe kernel is the set of all $\\mathbf{p}$ such that $T(\\mathbf{p}) = \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix}$.\nThis means $\\mathbf{p}(0) = 0$ and $\\mathbf{p}(1) = 0$.\nA polynomial of degree $\\le 2$ with roots at 0 and 1 has the form $\\mathbf{p}(t) = at(t-1) = a(t^2 - t)$.\nThe polynomial that spans the kernel is $\\mathbf{p}(t) = t^2 - t$.'
          }
        ]
      }
    ]
  },
  {
    moduleId: 'module-2',
    title: 'Module 2: Dimension and Rank',
    sections:[
      {
        id: 'mod2-sec-a',
        title: 'Section A',
        description: 'Answer any number of questions. Each question carries 3 Marks. Maximum marks: 12.',
        questions:[
          {
            id: 'm2-q1', qNumber: 'Q1', marks: 3,
            question: 'Define the dimension of a vector space.',
            solution: 'If a vector space $V$ is spanned by a finite set, then $V$ is said to be **finite-dimensional**, and the **dimension** of $V$, written as $\\dim V$, is the number of vectors in a basis for $V$. The dimension of the zero vector space $\\{\\mathbf{0}\\}$ is defined to be zero.'
          },
          {
            id: 'm2-q2', qNumber: 'Q2', marks: 3,
            question: 'State the Rank Theorem.',
            solution: 'The **Rank Theorem** states that for an $m \\times n$ matrix $A$, the dimensions of the column space and the row space are equal. This common dimension is the rank of $A$. Furthermore, the rank of $A$ plus the dimension of the null space of $A$ equals the number of columns $n$:\n$$ \\text{rank } A + \\dim \\text{Nul } A = n $$'
          },
          {
            id: 'm2-q3', qNumber: 'Q3', marks: 3,
            question: 'What is the coordinate vector $[\\mathbf{x}]_\\mathcal{B}$?',
            solution: 'Suppose $\\mathcal{B} = \\{\\mathbf{b}_1, \\dots, \\mathbf{b}_n\\}$ is a basis for a vector space $V$ and $\\mathbf{x}$ is in $V$. The **coordinate vector** of $\\mathbf{x}$ relative to $\\mathcal{B}$, denoted $[\\mathbf{x}]_\\mathcal{B}$, is the column vector in $\\mathbb{R}^n$ containing the unique weights $c_1, \\dots, c_n$ such that:\n$$ \\mathbf{x} = c_1\\mathbf{b}_1 + \\dots + c_n\\mathbf{b}_n $$'
          },
          {
            id: 'm2-q4', qNumber: 'Q4', marks: 3,
            question: 'If $A$ is a $4 \\times 7$ matrix and $\\text{rank } A = 3$, what is the dimension of the null space of $A$?',
            solution: 'By the Rank Theorem, $\\text{rank } A + \\dim \\text{Nul } A = n$, where $n$ is the number of columns.\nHere $n = 7$ and $\\text{rank } A = 3$.\nThus, $\\dim \\text{Nul } A = 7 - 3 = 4$.'
          },
          {
            id: 'm2-q5', qNumber: 'Q5', marks: 3,
            question: 'Explain what it means for two vector spaces to be isomorphic.',
            solution: 'A one-to-one linear transformation from a vector space $V$ onto a vector space $W$ is called an **isomorphism**. Two spaces are isomorphic if such a mapping exists between them, meaning they are structurally and algebraically identical, even if their elements "look" different (e.g., polynomials vs. column vectors).'
          }
        ]
      },
      {
        id: 'mod2-sec-b',
        title: 'Section B',
        description: 'Answer any number of questions. Each question carries 6 Marks. Maximum marks: 18.',
        questions:[
          {
            id: 'm2-q6', qNumber: 'Q6', marks: 6,
            question: 'Find the change-of-coordinates matrix from basis $\\mathcal{B} = \\left\\{ \\begin{bmatrix} 1 \\\\ -3 \\end{bmatrix}, \\begin{bmatrix} 2 \\\\ -5 \\end{bmatrix} \\right\\}$ to the standard basis, and use it to find the standard coordinates of $\\mathbf{x}$ if $[\\mathbf{x}]_\\mathcal{B} = \\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix}$.',
            solution: 'The change-of-coordinates matrix $P_\\mathcal{B}$ is formed by using the basis vectors as its columns:\n$$ P_\\mathcal{B} = \\begin{bmatrix} 1 & 2 \\\\ -3 & -5 \\end{bmatrix} $$\n\nTo find the vector $\\mathbf{x}$ in the standard basis, we use the equation $\\mathbf{x} = P_\\mathcal{B}[\\mathbf{x}]_\\mathcal{B}$:\n\n$$ \\mathbf{x} = \\begin{bmatrix} 1 & 2 \\\\ -3 & -5 \\end{bmatrix} \\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix} = \\begin{bmatrix} 1(2) + 2(3) \\\\ -3(2) + (-5)(3) \\end{bmatrix} = \\begin{bmatrix} 2 + 6 \\\\ -6 - 15 \\end{bmatrix} = \\begin{bmatrix} 8 \\\\ -21 \\end{bmatrix} $$'
          },
          {
            id: 'm2-q7', qNumber: 'Q7', marks: 6,
            question: 'Find a basis and the dimension for the subspace spanned by:\n$$ \\mathbf{v}_1 = \\begin{bmatrix} 1 \\\\ -2 \\\\ 0 \\\\ 3 \\end{bmatrix}, \\mathbf{v}_2 = \\begin{bmatrix} 2 \\\\ -5 \\\\ -3 \\\\ 6 \\end{bmatrix}, \\mathbf{v}_3 = \\begin{bmatrix} 0 \\\\ 1 \\\\ 3 \\\\ 0 \\end{bmatrix}, \\mathbf{v}_4 = \\begin{bmatrix} 2 \\\\ -1 \\\\ 4 \\\\ -7 \\end{bmatrix} $$',
            solution: 'Form the matrix $A =[\\mathbf{v}_1 \\ \\mathbf{v}_2 \\ \\mathbf{v}_3 \\ \\mathbf{v}_4]$ and row reduce to echelon form:\n$$ \\begin{bmatrix} 1 & 2 & 0 & 2 \\\\ -2 & -5 & 1 & -1 \\\\ 0 & -3 & 3 & 4 \\\\ 3 & 6 & 0 & -7 \\end{bmatrix} \\sim \\dots \\sim \\begin{bmatrix} 1 & 2 & 0 & 2 \\\\ 0 & -1 & 1 & 3 \\\\ 0 & 0 & 0 & -5 \\\\ 0 & 0 & 0 & 0 \\end{bmatrix} $$\n\nThe pivot positions are in columns 1, 2, and 4.\n\nThus, the basis is the original vectors $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_4\\}$.\n\nThe dimension of the subspace is the number of basis vectors, which is **3**.'
          },
          {
            id: 'm2-q8', qNumber: 'Q8', marks: 6,
            question: 'Let $A$ be a $6 \\times 9$ matrix. If $\\dim \\text{Nul } A = 4$, find $\\text{rank } A$ and $\\dim \\text{Row } A$.',
            solution: '1. Using the Rank Theorem: $\\text{rank } A + \\dim \\text{Nul } A = n$, where $n$ is the number of columns.\nHere $n = 9$ and $\\dim \\text{Nul } A = 4$.\nThus, $\\text{rank } A = 9 - 4 = 5$.\n\n2. By definition (or the Rank Theorem), the dimension of the row space is always equal to the rank of the matrix.\nThus, $\\dim \\text{Row } A = 5$.'
          },
          {
            id: 'm2-q9', qNumber: 'Q9', marks: 6,
            question: 'Let $H$ be a subspace of a finite-dimensional vector space $V$. Show that if $\\dim H = \\dim V$, then $H = V$.',
            solution: 'Let $n = \\dim V = \\dim H$. \nSince $\\dim H = n$, there exists a basis $\\mathcal{B}$ for $H$ consisting of exactly $n$ linearly independent vectors.\n\nBecause $H$ is a subspace of $V$, these $n$ vectors also belong to $V$. \nWe have a set of $n$ linearly independent vectors in an $n$-dimensional space $V$.\n\nBy the **Basis Theorem** (Theorem 12), any linearly independent set of exactly $n$ elements in an $n$-dimensional space automatically forms a basis for that space.\nThus, $\\mathcal{B}$ is a basis for $V$, meaning $\\text{Span}\\{\\mathcal{B}\\} = V$.\n\nSince $\\mathcal{B}$ is also a basis for $H$, $\\text{Span}\\{\\mathcal{B}\\} = H$. Therefore, $H = V$.'
          }
        ]
      },
      {
        id: 'mod2-sec-c',
        title: 'Section C',
        description: 'Answer any one question. Each question carries 10 Marks.',
        questions:[
          {
            id: 'm2-q10', qNumber: 'Q10', marks: 10,
            question: 'Let $A = \\begin{bmatrix} 1 & -3 & 2 & 0 & -5 \\\\ 0 & 0 & 1 & 4 & 2 \\\\ 0 & 0 & 0 & 0 & 0 \\end{bmatrix}$. \n\nFind bases for $\\text{Col } A$, $\\text{Row } A$, and $\\text{Nul } A$. What are their dimensions, and how do they verify the Rank Theorem?',
            solution: 'The matrix $A$ is already in echelon form.\n\n1. **Basis for Row A:** The nonzero rows of the echelon form constitute a basis for the row space.\nBasis = $\\left\\{ (1, -3, 2, 0, -5), (0, 0, 1, 4, 2) \\right\\}$.\nDimension = 2.\n\n2. **Basis for Col A:** The pivot columns are columns 1 and 3. The corresponding columns of the original matrix form a basis.\nBasis = $\\left\\{ \\begin{bmatrix} 1 \\\\ 0 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 2 \\\\ 1 \\\\ 0 \\end{bmatrix} \\right\\}$.\nDimension = 2.\n\n3. **Basis for Nul A:** Solve $A\\mathbf{x} = \\mathbf{0}$. The free variables are $x_2, x_4, x_5$.\n$x_3 = -4x_4 - 2x_5$\n$x_1 = 3x_2 - 2x_3 + 5x_5 = 3x_2 - 2(-4x_4 - 2x_5) + 5x_5 = 3x_2 + 8x_4 + 9x_5$\nVector form:\n$\\mathbf{x} = x_2 \\begin{bmatrix} 3 \\\\ 1 \\\\ 0 \\\\ 0 \\\\ 0 \\end{bmatrix} + x_4 \\begin{bmatrix} 8 \\\\ 0 \\\\ -4 \\\\ 1 \\\\ 0 \\end{bmatrix} + x_5 \\begin{bmatrix} 9 \\\\ 0 \\\\ -2 \\\\ 0 \\\\ 1 \\end{bmatrix}$\nBasis = The three vectors above. Dimension = 3.\n\n**Rank Theorem Verification:**\n$\\text{Rank } A = \\dim \\text{Col } A = 2$.\n$\\dim \\text{Nul } A = 3$.\nTotal columns $n = 5$.\nRank + Nullity = 2 + 3 = 5 = $n$. The theorem holds.'
          }
        ]
      }
    ]
  },
  {
    moduleId: 'module-3',
    title: 'Module 3: Orthogonality and Least Squares',
    sections:[
      {
        id: 'mod3-sec-a',
        title: 'Section A',
        description: 'Answer any number of questions. Each question carries 3 Marks. Maximum marks: 12.',
        questions:[
          {
            id: 'm3-q1', qNumber: 'Q1', marks: 3,
            question: 'Find the distance between $\\mathbf{u} = (0, -5, 2)$ and $\\mathbf{z} = (-4, -1, 8)$.',
            solution: 'The distance is the norm of the difference vector $\\|\\mathbf{u} - \\mathbf{z}\\|$.\n$\\mathbf{u} - \\mathbf{z} = (0 - (-4), -5 - (-1), 2 - 8) = (4, -4, -6)$.\n\nDistance = $\\sqrt{4^2 + (-4)^2 + (-6)^2} = \\sqrt{16 + 16 + 36} = \\sqrt{68} = 2\\sqrt{17}$.'
          },
          {
            id: 'm3-q2', qNumber: 'Q2', marks: 3,
            question: 'Define an orthogonal set.',
            solution: 'A set of vectors $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_p\\}$ in $\\mathbb{R}^n$ is said to be an **orthogonal set** if each pair of distinct vectors from the set is orthogonal. That is, if $\\mathbf{u}_i \\cdot \\mathbf{u}_j = 0$ whenever $i \\neq j$.'
          },
          {
            id: 'm3-q3', qNumber: 'Q3', marks: 3,
            question: 'Compute the orthogonal projection of $\\mathbf{y} = \\begin{bmatrix} 1 \\\\ 7 \\end{bmatrix}$ onto the line through $\\mathbf{u} = \\begin{bmatrix} -4 \\\\ 2 \\end{bmatrix}$ and the origin.',
            solution: 'The projection is given by $\\hat{\\mathbf{y}} = \\frac{\\mathbf{y} \\cdot \\mathbf{u}}{\\mathbf{u} \\cdot \\mathbf{u}} \\mathbf{u}$.\n\n$\\mathbf{y} \\cdot \\mathbf{u} = 1(-4) + 7(2) = -4 + 14 = 10$.\n$\\mathbf{u} \\cdot \\mathbf{u} = (-4)^2 + 2^2 = 16 + 4 = 20$.\n\n$\\hat{\\mathbf{y}} = \\frac{10}{20} \\begin{bmatrix} -4 \\\\ 2 \\end{bmatrix} = \\frac{1}{2} \\begin{bmatrix} -4 \\\\ 2 \\end{bmatrix} = \\begin{bmatrix} -2 \\\\ 1 \\end{bmatrix}$.'
          },
          {
            id: 'm3-q4', qNumber: 'Q4', marks: 3,
            question: 'State the Pythagorean Theorem for vectors.',
            solution: 'Two vectors $\\mathbf{u}$ and $\\mathbf{v}$ are orthogonal if and only if:\n$$ \\|\\mathbf{u} + \\mathbf{v}\\|^2 = \\|\\mathbf{u}\\|^2 + \\|\\mathbf{v}\\|^2 $$'
          },
          {
            id: 'm3-q5', qNumber: 'Q5', marks: 3,
            question: 'What is an orthogonal matrix?',
            solution: 'An **orthogonal matrix** is a square invertible matrix $U$ such that $U^{-1} = U^T$. Equivalently, it is a square matrix whose columns form an orthonormal basis for $\\mathbb{R}^n$.'
          }
        ]
      },
      {
        id: 'mod3-sec-b',
        title: 'Section B',
        description: 'Answer any number of questions. Each question carries 6 Marks. Maximum marks: 18.',
        questions:[
          {
            id: 'm3-q6', qNumber: 'Q6', marks: 6,
            question: 'Verify that $\\{\\mathbf{u}_1, \\mathbf{u}_2\\}$ is an orthogonal basis for $\\mathbb{R}^2$, and express $\\mathbf{x}$ as a linear combination of the $\\mathbf{u}$\'s.\n$\\mathbf{u}_1 = \\begin{bmatrix} 2 \\\\ -3 \\end{bmatrix}, \\mathbf{u}_2 = \\begin{bmatrix} 6 \\\\ 4 \\end{bmatrix}, \\mathbf{x} = \\begin{bmatrix} 9 \\\\ -7 \\end{bmatrix}$',
            solution: '1. **Orthogonality Check:** $\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = 2(6) + (-3)(4) = 12 - 12 = 0$. \nSince they are orthogonal and nonzero, they are linearly independent and thus form a basis for $\\mathbb{R}^2$.\n\n2. **Linear Combination:** Using Theorem 5, $c_j = \\frac{\\mathbf{x} \\cdot \\mathbf{u}_j}{\\mathbf{u}_j \\cdot \\mathbf{u}_j}$.\n$c_1 = \\frac{18 + 21}{4 + 9} = \\frac{39}{13} = 3$.\n$c_2 = \\frac{54 - 28}{36 + 16} = \\frac{26}{52} = \\frac{1}{2}$.\n\nThus, $\\mathbf{x} = 3\\mathbf{u}_1 + \\frac{1}{2}\\mathbf{u}_2$.'
          },
          {
            id: 'm3-q7', qNumber: 'Q7', marks: 6,
            question: 'Let $\\mathbf{y} = \\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix}$ and $\\mathbf{u} = \\begin{bmatrix} 4 \\\\ -7 \\end{bmatrix}$. Write $\\mathbf{y}$ as the sum of two orthogonal vectors, one in $\\text{Span}\\{\\mathbf{u}\\}$ and one orthogonal to $\\mathbf{u}$.',
            solution: 'We compute $\\hat{\\mathbf{y}} = \\text{proj}_u \\mathbf{y}$ and $\\mathbf{z} = \\mathbf{y} - \\hat{\\mathbf{y}}$.\n\n$\\mathbf{y} \\cdot \\mathbf{u} = 2(4) + 3(-7) = 8 - 21 = -13$.\n$\\mathbf{u} \\cdot \\mathbf{u} = 4^2 + (-7)^2 = 16 + 49 = 65$.\n\n$\\hat{\\mathbf{y}} = \\frac{-13}{65}\\mathbf{u} = -\\frac{1}{5}\\begin{bmatrix} 4 \\\\ -7 \\end{bmatrix} = \\begin{bmatrix} -4/5 \\\\ 7/5 \\end{bmatrix}$.\n\n$\\mathbf{z} = \\mathbf{y} - \\hat{\\mathbf{y}} = \\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix} - \\begin{bmatrix} -4/5 \\\\ 7/5 \\end{bmatrix} = \\begin{bmatrix} 10/5 + 4/5 \\\\ 15/5 - 7/5 \\end{bmatrix} = \\begin{bmatrix} 14/5 \\\\ 8/5 \\end{bmatrix}$.\n\nThe decomposition is $\\mathbf{y} = \\begin{bmatrix} -4/5 \\\\ 7/5 \\end{bmatrix} + \\begin{bmatrix} 14/5 \\\\ 8/5 \\end{bmatrix}$.'
          },
          {
            id: 'm3-q8', qNumber: 'Q8', marks: 6,
            question: 'Show that if an $m \\times n$ matrix $U$ has orthonormal columns, then $\\|U\\mathbf{x}\\| = \\|\\mathbf{x}\\|$ for all $\\mathbf{x}$ in $\\mathbb{R}^n$.',
            solution: 'By definition, $\\|U\\mathbf{x}\\|^2 = (U\\mathbf{x}) \\cdot (U\\mathbf{x})$.\n\nUsing the transpose definition of the dot product, this is $(U\\mathbf{x})^T (U\\mathbf{x})$.\n\nExpanding the transpose gives $\\mathbf{x}^T U^T U \\mathbf{x}$.\n\nSince $U$ has orthonormal columns, Theorem 6 states that $U^T U = I$.\n\nSubstituting $I$ yields $\\mathbf{x}^T I \\mathbf{x} = \\mathbf{x}^T \\mathbf{x}$, which is exactly $\\|\\mathbf{x}\\|^2$.\n\nTaking the square root of both sides gives $\\|U\\mathbf{x}\\| = \\|\\mathbf{x}\\|$, proving the transformation preserves length.'
          },
          {
            id: 'm3-q9', qNumber: 'Q9', marks: 6,
            question: 'Apply the Gram-Schmidt process to produce an orthogonal basis for $W = \\text{Span}\\{\\mathbf{x}_1, \\mathbf{x}_2\\}$.\n$\\mathbf{x}_1 = \\begin{bmatrix} 3 \\\\ 0 \\\\ -1 \\end{bmatrix}, \\mathbf{x}_2 = \\begin{bmatrix} 8 \\\\ 5 \\\\ -6 \\end{bmatrix}$',
            solution: 'Step 1: Set $\\mathbf{v}_1 = \\mathbf{x}_1 = \\begin{bmatrix} 3 \\\\ 0 \\\\ -1 \\end{bmatrix}$.\n\nStep 2: $\\mathbf{v}_2 = \\mathbf{x}_2 - \\frac{\\mathbf{x}_2 \\cdot \\mathbf{v}_1}{\\mathbf{v}_1 \\cdot \\mathbf{v}_1}\\mathbf{v}_1$.\n$\\mathbf{x}_2 \\cdot \\mathbf{v}_1 = 24 + 0 + 6 = 30$.\n$\\mathbf{v}_1 \\cdot \\mathbf{v}_1 = 9 + 0 + 1 = 10$.\n\n$\\mathbf{v}_2 = \\begin{bmatrix} 8 \\\\ 5 \\\\ -6 \\end{bmatrix} - \\frac{30}{10} \\begin{bmatrix} 3 \\\\ 0 \\\\ -1 \\end{bmatrix} = \\begin{bmatrix} 8 \\\\ 5 \\\\ -6 \\end{bmatrix} - \\begin{bmatrix} 9 \\\\ 0 \\\\ -3 \\end{bmatrix} = \\begin{bmatrix} -1 \\\\ 5 \\\\ -3 \\end{bmatrix}$.\n\nOrthogonal basis: $\\left\\{ \\begin{bmatrix} 3 \\\\ 0 \\\\ -1 \\end{bmatrix}, \\begin{bmatrix} -1 \\\\ 5 \\\\ -3 \\end{bmatrix} \\right\\}$.'
          }
        ]
      },
      {
        id: 'mod3-sec-c',
        title: 'Section C',
        description: 'Answer any one question. Each question carries 10 Marks.',
        questions:[
          {
            id: 'm3-q10', qNumber: 'Q10', marks: 10,
            question: 'Let $A = \\begin{bmatrix} 1 & 0 & 0 \\\\ 1 & 1 & 0 \\\\ 1 & 1 & 1 \\\\ 1 & 1 & 1 \\end{bmatrix}$. \n\nConstruct a QR factorization of $A$.',
            solution: 'The columns of $A$ are linearly independent. We first apply Gram-Schmidt to find an orthogonal basis.\n$\\mathbf{v}_1 = \\mathbf{x}_1 = [1, 1, 1, 1]^T$.\n\n$\\mathbf{v}_2 = \\mathbf{x}_2 - \\frac{\\mathbf{x}_2 \\cdot \\mathbf{v}_1}{\\mathbf{v}_1 \\cdot \\mathbf{v}_1}\\mathbf{v}_1 = [0, 1, 1, 1]^T - \\frac{3}{4}[1, 1, 1, 1]^T =[-3/4, 1/4, 1/4, 1/4]^T$. \nScale by 4 to avoid fractions: $\\mathbf{v}_2\' = [-3, 1, 1, 1]^T$.\n\n$\\mathbf{v}_3 = \\mathbf{x}_3 - \\text{proj}_{v1}\\mathbf{x}_3 - \\text{proj}_{v2\'}\\mathbf{x}_3 =[0, 0, 1, 1]^T - \\frac{2}{4}[1, 1, 1, 1]^T - \\frac{2}{12}[-3, 1, 1, 1]^T =[0, -2/3, 1/3, 1/3]^T$.\n\nNow, normalize the vectors to form $Q$:\n$\\mathbf{u}_1 = \\frac{1}{2}[1, 1, 1, 1]^T$, $\\mathbf{u}_2 = \\frac{1}{\\sqrt{12}}[-3, 1, 1, 1]^T$, $\\mathbf{u}_3 = \\frac{1}{\\sqrt{6}}[0, -2, 1, 1]^T$.\n$Q = \\begin{bmatrix} 1/2 & -3/\\sqrt{12} & 0 \\\\ 1/2 & 1/\\sqrt{12} & -2/\\sqrt{6} \\\\ 1/2 & 1/\\sqrt{12} & 1/\\sqrt{6} \\\\ 1/2 & 1/\\sqrt{12} & 1/\\sqrt{6} \\end{bmatrix}$.\n\nCompute $R = Q^T A$:\n$R = \\begin{bmatrix} 2 & 3/2 & 1 \\\\ 0 & 3/\\sqrt{12} & 2/\\sqrt{12} \\\\ 0 & 0 & 2/\\sqrt{6} \\end{bmatrix}$.'
          }
        ]
      }
    ]
  },
  {
    moduleId: 'module-4',
    title: 'Module 4: Symmetric Matrices and Quadratic Forms',
    sections:[
      {
        id: 'mod4-sec-a',
        title: 'Section A',
        description: 'Answer any number of questions. Each question carries 3 Marks. Maximum marks: 12.',
        questions:[
          {
            id: 'm4-q1', qNumber: 'Q1', marks: 3,
            question: 'Determine if the matrix $A = \\begin{bmatrix} 3 & 5 \\\\ 5 & -7 \\end{bmatrix}$ is symmetric.',
            solution: 'A symmetric matrix satisfies $A^T = A$. The off-diagonal entries are $A_{12} = 5$ and $A_{21} = 5$. Since they are equal, $A^T = A$. Yes, the matrix is symmetric.'
          },
          {
            id: 'm4-q2', qNumber: 'Q2', marks: 3,
            question: 'Define a quadratic form.',
            solution: 'A **quadratic form** on $\\mathbb{R}^n$ is a function $Q$ whose value at a vector $\\mathbf{x}$ can be computed by an expression of the form $Q(\\mathbf{x}) = \\mathbf{x}^T A \\mathbf{x}$, where $A$ is an $n \\times n$ symmetric matrix.'
          },
          {
            id: 'm4-q3', qNumber: 'Q3', marks: 3,
            question: 'Classify the quadratic form $Q(\\mathbf{x}) = 3x_1^2 + 5x_2^2$.',
            solution: 'The matrix of this form is $A = \\begin{bmatrix} 3 & 0 \\\\ 0 & 5 \\end{bmatrix}$. The eigenvalues are 3 and 5. Since both eigenvalues are strictly positive, the quadratic form is **positive definite**.'
          },
          {
            id: 'm4-q4', qNumber: 'Q4', marks: 3,
            question: 'State the Principal Axes Theorem.',
            solution: 'Let $A$ be an $n \\times n$ symmetric matrix. Then there is an orthogonal change of variable, $\\mathbf{x} = P\\mathbf{y}$, that transforms the quadratic form $\\mathbf{x}^T A \\mathbf{x}$ into a quadratic form $\\mathbf{y}^T D \\mathbf{y}$ with no cross-product terms. The columns of $P$ are called the principal axes.'
          },
          {
            id: 'm4-q5', qNumber: 'Q5', marks: 3,
            question: 'What are the singular values of a matrix $A$?',
            solution: 'The **singular values** of an $m \\times n$ matrix $A$ are the square roots of the eigenvalues of the symmetric matrix $A^T A$. They are denoted by $\\sigma_i = \\sqrt{\\lambda_i}$ and represent the lengths of the principal axes of the image of the unit sphere under the transformation $\\mathbf{x} \\mapsto A\\mathbf{x}$.'
          }
        ]
      },
      {
        id: 'mod4-sec-b',
        title: 'Section B',
        description: 'Answer any number of questions. Each question carries 6 Marks. Maximum marks: 18.',
        questions:[
          {
            id: 'm4-q6', qNumber: 'Q6', marks: 6,
            question: 'Orthogonally diagonalize the matrix $A = \\begin{bmatrix} 3 & 1 \\\\ 1 & 3 \\end{bmatrix}$.',
            solution: 'Characteristic equation: $(3-\\lambda)^2 - 1 = 0 \\implies \lambda^2 - 6\\lambda + 8 = 0 \\implies (\\lambda-4)(\\lambda-2) = 0$.\nEigenvalues: 4, 2.\n\nFor $\\lambda=4$: $A-4I = \\begin{bmatrix} -1 & 1 \\\\ 1 & -1 \\end{bmatrix}$. Eigenvector $\\mathbf{v}_1 = \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}$. Normalized: $\\mathbf{u}_1 = \\begin{bmatrix} 1/\\sqrt{2} \\\\ 1/\\sqrt{2} \\end{bmatrix}$.\n\nFor $\\lambda=2$: $A-2I = \\begin{bmatrix} 1 & 1 \\\\ 1 & 1 \\end{bmatrix}$. Eigenvector $\\mathbf{v}_2 = \\begin{bmatrix} -1 \\\\ 1 \\end{bmatrix}$. Normalized: $\\mathbf{u}_2 = \\begin{bmatrix} -1/\\sqrt{2} \\\\ 1/\\sqrt{2} \\end{bmatrix}$.\n\n$P = \\begin{bmatrix} 1/\\sqrt{2} & -1/\\sqrt{2} \\\\ 1/\\sqrt{2} & 1/\\sqrt{2} \\end{bmatrix}$, $D = \\begin{bmatrix} 4 & 0 \\\\ 0 & 2 \\end{bmatrix}$.'
          },
          {
            id: 'm4-q7', qNumber: 'Q7', marks: 6,
            question: 'Find the symmetric matrix $A$ for the quadratic form: $Q(\\mathbf{x}) = 5x_1^2 - x_2^2 + 7x_3^2 + 5x_1 x_2 - 3x_1 x_3$.',
            solution: 'The coefficients of the squared terms form the main diagonal of $A$:\n$A_{11} = 5, A_{22} = -1, A_{33} = 7$.\n\nThe coefficients of the cross terms are divided by 2 to populate the symmetric off-diagonal entries:\nFor $x_1 x_2$: coeff is $5$, so $A_{12} = A_{21} = 2.5$.\nFor $x_1 x_3$: coeff is $-3$, so $A_{13} = A_{31} = -1.5$.\nFor $x_2 x_3$: coeff is $0$, so $A_{23} = A_{32} = 0$.\n\nThus, $A = \\begin{bmatrix} 5 & 2.5 & -1.5 \\\\ 2.5 & -1 & 0 \\\\ -1.5 & 0 & 7 \\end{bmatrix}$.'
          },
          {
            id: 'm4-q8', qNumber: 'Q8', marks: 6,
            question: 'Find the maximum value of $Q(\\mathbf{x}) = 9x_1^2 + 4x_2^2 + 3x_3^2$ subject to the constraint $\\mathbf{x}^T\\mathbf{x} = 1$.',
            solution: 'By Theorem 6, the maximum value of a quadratic form $\\mathbf{x}^T A \\mathbf{x}$ on the unit sphere $\\|\\mathbf{x}\\| = 1$ is the greatest eigenvalue of the symmetric matrix $A$.\n\nThe matrix for this form is diagonal: $A = \\begin{bmatrix} 9 & 0 & 0 \\\\ 0 & 4 & 0 \\\\ 0 & 0 & 3 \\end{bmatrix}$.\n\nThe eigenvalues are simply the diagonal entries: 9, 4, and 3.\nThe largest eigenvalue is 9. Thus, the maximum value is **9**.'
          },
          {
            id: 'm4-q9', qNumber: 'Q9', marks: 6,
            question: 'Find the singular values of $A = \\begin{bmatrix} 2 & 3 \\\\ 0 & 2 \\end{bmatrix}$.',
            solution: 'First, compute $A^T A$:\n$A^T A = \\begin{bmatrix} 2 & 0 \\\\ 3 & 2 \\end{bmatrix} \\begin{bmatrix} 2 & 3 \\\\ 0 & 2 \\end{bmatrix} = \\begin{bmatrix} 4 & 6 \\\\ 6 & 13 \\end{bmatrix}$.\n\nFind eigenvalues of $A^T A$:\n$(4-\\lambda)(13-\\lambda) - 36 = 0 \\implies \lambda^2 - 17\\lambda + 52 - 36 = 0 \\implies \lambda^2 - 17\\lambda + 16 = 0$.\n$(\\lambda-16)(\\lambda-1) = 0 \\implies \lambda = 16, 1$.\n\nThe singular values are the square roots of these eigenvalues:\n$\\sigma_1 = \\sqrt{16} = 4$.\n$\\sigma_2 = \\sqrt{1} = 1$.'
          }
        ]
      },
      {
        id: 'mod4-sec-c',
        title: 'Section C',
        description: 'Answer any one question. Each question carries 10 Marks.',
        questions:[
          {
            id: 'm4-q10', qNumber: 'Q10', marks: 10,
            question: 'Find the Singular Value Decomposition (SVD) of $A = \\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\\\ -1 & 1 \\end{bmatrix}$.',
            solution: '1. Compute $A^T A = \\begin{bmatrix} 1 & 0 & -1 \\\\ 1 & 1 & 1 \\end{bmatrix} \\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\\\ -1 & 1 \\end{bmatrix} = \\begin{bmatrix} 2 & 0 \\\\ 0 & 3 \\end{bmatrix}$.\n\n2. Eigenvalues of $A^T A$ are 3 and 2. \nSingular values are $\\sigma_1 = \\sqrt{3}, \\sigma_2 = \\sqrt{2}$.\n$\\Sigma = \\begin{bmatrix} \\sqrt{3} & 0 \\\\ 0 & \\sqrt{2} \\\\ 0 & 0 \\end{bmatrix}$.\n\n3. Eigenvectors of $A^T A$ (for V):\nFor $\\lambda=3$, $\\mathbf{v}_1 = [0, 1]^T$.\nFor $\\lambda=2$, $\\mathbf{v}_2 = [1, 0]^T$.\n$V = \\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$.\n\n4. Construct U:\n$\\mathbf{u}_1 = \\frac{1}{\\sqrt{3}} A \\mathbf{v}_1 = \\frac{1}{\\sqrt{3}} \\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix}$.\n$\\mathbf{u}_2 = \\frac{1}{\\sqrt{2}} A \\mathbf{v}_2 = \\frac{1}{\\sqrt{2}} \\begin{bmatrix} 1 \\\\ 0 \\\\ -1 \\end{bmatrix}$.\nTo complete U as a $3 \\times 3$ orthogonal matrix, find $\\mathbf{u}_3$ orthogonal to $\\mathbf{u}_1$ and $\\mathbf{u}_2$. Using cross product of $[1,1,1]^T$ and $[1,0,-1]^T$ gives $[-1, 2, -1]^T$. Normalize to get $\\mathbf{u}_3 = \\frac{1}{\\sqrt{6}} \\begin{bmatrix} -1 \\\\ 2 \\\\ -1 \\end{bmatrix}$.\n\n$U = \\begin{bmatrix} 1/\\sqrt{3} & 1/\\sqrt{2} & -1/\\sqrt{6} \\\\ 1/\\sqrt{3} & 0 & 2/\\sqrt{6} \\\\ 1/\\sqrt{3} & -1/\\sqrt{2} & -1/\\sqrt{6} \\end{bmatrix}$.\n\nThe SVD is $A = U \\Sigma V^T$.'
          }
        ]
      }
    ]
  }
];