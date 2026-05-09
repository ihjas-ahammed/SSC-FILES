import { ExamPaper } from '../types';

export const EXAM_PAPERS: ExamPaper[] =[
  {
    courseId: 'module-1',
    title: 'INTERNAL EXAMINATION, MARCH 2026',
    moduleName: 'Vector Analysis',
    sections:[
      {
        id: 'sec-a',
        title: 'Section A',
        instructions: '(Answer all. Each question carries 3 marks. Ceiling: 12 Marks)',
        questions:[
          {
            id: 'q1', number: 1, marks: 3,
            question: 'State the fundamental theorem for gradients.',
            solution: 'The fundamental theorem for gradients states that the line integral of the gradient of a scalar function $T$ along any path from point $\\mathbf{a}$ to point $\\mathbf{b}$ is equal to the difference in the value of the function at those two points:\n\n$$ \\int_{\\mathbf{a}}^{\\mathbf{b}} (\\nabla T) \\cdot d\\mathbf{l} = T(\\mathbf{b}) - T(\\mathbf{a}) $$\n\nThis implies that the line integral of a gradient is completely path-independent.'
          },
          {
            id: 'q2', number: 2, marks: 3,
            question: 'Evaluate $\\mathbf{A} \\cdot (\\mathbf{B} \\times \\mathbf{C})$ if the three vectors are coplanar.',
            solution: 'If the vectors $\\mathbf{A}$, $\\mathbf{B}$, and $\\mathbf{C}$ are coplanar (lie in the same plane), the volume of the parallelepiped formed by them is exactly zero.\n\nSince the scalar triple product $\\mathbf{A} \\cdot (\\mathbf{B} \\times \\mathbf{C})$ geometrically represents the volume of this parallelepiped, its value is **zero**.'
          },
          {
            id: 'q3', number: 3, marks: 3,
            question: 'Define the Dirac Delta function in 3D.',
            solution: 'The three-dimensional Dirac Delta function $\\delta^3(\\mathbf{r})$ is defined such that:\n\n1. $\\delta^3(\\mathbf{r}) = 0$ for all $\\mathbf{r} \\neq 0$.\n2. $\\delta^3(\\mathbf{r}) = \\infty$ at $\\mathbf{r} = 0$.\n3. $\\int_{\\text{all space}} \\delta^3(\\mathbf{r}) d\\tau = 1$.\n\nIt is used to represent point sources mathematically, satisfying $\\int f(\\mathbf{r}) \\delta^3(\\mathbf{r} - \\mathbf{a}) d\\tau = f(\\mathbf{a})$.'
          },
          {
            id: 'q4', number: 4, marks: 3,
            question: 'Write down the expression for the gradient in spherical polar coordinates.',
            solution: 'The gradient of a scalar function $T(r, \\theta, \\phi)$ in spherical polar coordinates is given by:\n\n$$ \\nabla T = \\frac{\\partial T}{\\partial r}\\mathbf{\\hat{r}} + \\frac{1}{r}\\frac{\\partial T}{\\partial \\theta}\\mathbf{\\hat{\\theta}} + \\frac{1}{r\\sin\\theta}\\frac{\\partial T}{\\partial \\phi}\\mathbf{\\hat{\\phi}} $$'
          },
          {
            id: 'q5', number: 5, marks: 3,
            question: 'What is the physical significance of the divergence of a vector field?',
            solution: 'The divergence of a vector field $\\nabla \\cdot \\mathbf{v}$ measures how much the vector field "spreads out" or diverges from a given point.\n\n- A **positive divergence** indicates a "source" (like a faucet where field lines originate).\n- A **negative divergence** indicates a "sink" (like a drain where field lines converge).\n- A **zero divergence** indicates an incompressible flow (field lines merely pass through).'
          }
        ]
      },
      {
        id: 'sec-b',
        title: 'Section B',
        instructions: '(Answer all. Each question carries 6 marks. Ceiling: 18 Marks)',
        questions:[
          {
            id: 'q6', number: 6, marks: 6,
            question: 'Prove the vector identity $\\nabla \\cdot (\\mathbf{A} \\times \\mathbf{B}) = \\mathbf{B} \\cdot (\\nabla \\times \\mathbf{A}) - \\mathbf{A} \\cdot (\\nabla \\times \\mathbf{B})$.',
            solution: 'Using the product rule for divergence and the cyclic nature of the scalar triple product:\nWe examine the derivative acting on the product. Let $\\nabla$ act on $\\mathbf{A}$ first, then on $\\mathbf{B}$:\n\n$$ \\nabla \\cdot (\\mathbf{A} \\times \\mathbf{B}) = (\\nabla_A \\cdot (\\mathbf{A} \\times \\mathbf{B})) + (\\nabla_B \\cdot (\\mathbf{A} \\times \\mathbf{B})) $$\n\nUsing the scalar triple product cyclic permutation property $\\mathbf{U} \\cdot (\\mathbf{V} \\times \\mathbf{W}) = \\mathbf{W} \\cdot (\\mathbf{U} \\times \\mathbf{V})$:\n\nTerm 1: $\\nabla_A \\cdot (\\mathbf{A} \\times \\mathbf{B}) = \\mathbf{B} \\cdot (\\nabla \\times \\mathbf{A})$\nTerm 2: $\\nabla_B \\cdot (\\mathbf{A} \\times \\mathbf{B}) = - \\nabla_B \\cdot (\\mathbf{B} \\times \\mathbf{A}) = - \\mathbf{A} \\cdot (\\nabla \\times \\mathbf{B})$\n\nAdding them together gives:\n$$ \\nabla \\cdot (\\mathbf{A} \\times \\mathbf{B}) = \\mathbf{B} \\cdot (\\nabla \\times \\mathbf{A}) - \\mathbf{A} \\cdot (\\nabla \\times \\mathbf{B}) $$'
          },
          {
            id: 'q7', number: 7, marks: 6,
            question: 'Check the divergence theorem for the function $\\mathbf{v} = r^2 \\mathbf{\\hat{r}}$ over a sphere of radius R.',
            solution: '**Divergence Theorem:** $\\int_V (\\nabla \\cdot \\mathbf{v}) d\\tau = \\oint_S \\mathbf{v} \\cdot d\\mathbf{a}$\n\n**1. Evaluate Volume Integral:**\nDivergence of $\\mathbf{v} = r^2 \\mathbf{\\hat{r}}$ in spherical coords:\n$$ \\nabla \\cdot \\mathbf{v} = \\frac{1}{r^2} \\frac{\\partial}{\\partial r}(r^2 v_r) = \\frac{1}{r^2} \\frac{\\partial}{\\partial r}(r^4) = \\frac{4r^3}{r^2} = 4r $$\nVolume integral: $\\int_V 4r (r^2 \\sin\\theta dr d\\theta d\\phi) = 4 \\int_0^R r^3 dr \\int_0^\\pi \\sin\\theta d\\theta \\int_0^{2\\pi} d\\phi$\n$$ = 4 \\left[ \\frac{R^4}{4} \\right] (2) (2\\pi) = 4\\pi R^4 $$\n\n**2. Evaluate Surface Integral:**\nOn the surface of the sphere, $r = R$, so $\\mathbf{v} = R^2 \\mathbf{\\hat{r}}$.\nArea element $d\\mathbf{a} = R^2 \\sin\\theta d\\theta d\\phi \\mathbf{\\hat{r}}$.\n$\\oint_S \\mathbf{v} \\cdot d\\mathbf{a} = \\oint_S (R^2)(R^2) \\sin\\theta d\\theta d\\phi = R^4 (2)(2\\pi) = 4\\pi R^4$.\n\nBoth sides equal $4\\pi R^4$, so the theorem is verified.'
          },
          {
            id: 'q8', number: 8, marks: 6,
            question: 'Find the volume of a sphere of radius R using the spherical polar volume element.',
            solution: 'In spherical polar coordinates, the infinitesimal volume element is given by:\n$$ d\\tau = r^2 \\sin\\theta dr d\\theta d\\phi $$\n\nTo find the volume of a sphere of radius R, we integrate this element over the full ranges of the coordinates:\n- $r$ goes from $0$ to $R$\n- $\\theta$ (polar angle) goes from $0$ to $\\pi$\n- $\\phi$ (azimuthal angle) goes from $0$ to $2\\pi$\n\n$$ V = \\int_0^R \\int_0^\\pi \\int_0^{2\\pi} r^2 \\sin\\theta \\, dr \\, d\\theta \\, d\\phi $$\n$$ V = \\left( \\int_0^R r^2 dr \\right) \\left( \\int_0^\\pi \\sin\\theta d\\theta \\right) \\left( \\int_0^{2\\pi} d\\phi \\right) $$\n$$ V = \\left[ \\frac{R^3}{3} \\right] \\times \\left[ -\\cos\\pi - (-\\cos 0) \\right] \\times [2\\pi - 0] $$\n$$ V = \\left( \\frac{R^3}{3} \\right) \\times (1 + 1) \\times (2\\pi) = \\left( \\frac{R^3}{3} \\right) (2) (2\\pi) = \\frac{4}{3}\\pi R^3 $$'
          },
          {
            id: 'q9', number: 9, marks: 6,
            question: 'Compute the curl of $\\mathbf{v} = -y \\mathbf{\\hat{x}} + x \\mathbf{\\hat{y}}$.',
            solution: 'The curl of a vector field in Cartesian coordinates is given by the determinant:\n$$ \\nabla \\times \\mathbf{v} = \\begin{vmatrix} \\mathbf{\\hat{x}} & \\mathbf{\\hat{y}} & \\mathbf{\\hat{z}} \\\\ \\frac{\\partial}{\\partial x} & \\frac{\\partial}{\\partial y} & \\frac{\\partial}{\\partial z} \\\\ v_x & v_y & v_z \\end{vmatrix} $$\n\nFor $\\mathbf{v} = -y \\mathbf{\\hat{x}} + x \\mathbf{\\hat{y}} + 0 \\mathbf{\\hat{z}}$:\n\n**x-component:** $\\frac{\\partial(0)}{\\partial y} - \\frac{\\partial(x)}{\\partial z} = 0 - 0 = 0$\n**y-component:** $\\frac{\\partial(-y)}{\\partial z} - \\frac{\\partial(0)}{\\partial x} = 0 - 0 = 0$\n**z-component:** $\\frac{\\partial(x)}{\\partial x} - \\frac{\\partial(-y)}{\\partial y} = 1 - (-1) = 2$\n\nThus, $\\nabla \\times \\mathbf{v} = 2\\mathbf{\\hat{z}}$.'
          }
        ]
      },
      {
        id: 'sec-c',
        title: 'Section C',
        instructions: '(Answer any one. Each question carries 10 marks)',
        questions:[
          {
            id: 'q10', number: 10, marks: 10,
            question: 'State and prove Gauss\'s Divergence Theorem.',
            solution: '**Statement:**\nGauss\'s Divergence Theorem states that the volume integral of the divergence of a vector field $\\mathbf{v}$ over a volume $V$ is equal to the surface integral of the vector field (the flux) over the closed boundary surface $S$ enclosing that volume.\n\n$$ \\int_V (\\nabla \\cdot \\mathbf{v}) d\\tau = \\oint_S \\mathbf{v} \\cdot d\\mathbf{a} $$\n\n**Proof Outline:**\n1. Let the volume $V$ be divided into an infinite number of infinitesimal cubical volume elements $d\\tau = dx dy dz$.\n2. For a single infinitesimal cube, the net outward flux $d\\Phi$ across its 6 faces can be calculated. \n3. Along the x-axis, flux through right face is $v_x(x+dx) dy dz$ and left face is $-v_x(x) dy dz$. The net x-flux is $\\frac{\\partial v_x}{\\partial x} dx dy dz$.\n4. Summing the net flux for all three dimensions gives $d\\Phi = \\left( \\frac{\\partial v_x}{\\partial x} + \\frac{\\partial v_y}{\\partial y} + \\frac{\\partial v_z}{\\partial z} \\right) dx dy dz = (\\nabla \\cdot \\mathbf{v}) d\\tau$.\n5. To find the total flux out of the entire macroscopic volume $V$, we sum (integrate) the fluxes of all the infinitesimal cubes: $\\int_V (\\nabla \\cdot \\mathbf{v}) d\\tau$.\n6. When we sum the fluxes of adjacent cubes, the flux leaving one face perfectly cancels the flux entering the adjacent face. The only fluxes that do not cancel are those on the extreme outer boundary surface $S$.\n7. Therefore, the sum of all microscopic fluxes equals the macroscopic flux through the outer boundary: $\\oint_S \\mathbf{v} \\cdot d\\mathbf{a}$.\n8. Equating the two yields $\\int_V (\\nabla \\cdot \\mathbf{v}) d\\tau = \\oint_S \\mathbf{v} \\cdot d\\mathbf{a}$.'
          },
          {
            id: 'q11', number: 11, marks: 10,
            question: 'State and prove Stokes\' Theorem.',
            solution: '**Statement:**\nStokes\' Theorem states that the surface integral of the curl of a vector field $\\mathbf{v}$ over an open surface $S$ is equal to the line integral of the vector field around the closed boundary loop $P$ bounding that surface.\n\n$$ \\int_S (\\nabla \\times \\mathbf{v}) \\cdot d\\mathbf{a} = \\oint_P \\mathbf{v} \\cdot d\\mathbf{l} $$\n\n**Proof Outline:**\n1. Subdivide the open surface $S$ into an infinite number of infinitesimal rectangular loops of area $d\\mathbf{a}$.\n2. For a single infinitesimal loop in the xy-plane, calculate the circulation $\\oint \\mathbf{v} \\cdot d\\mathbf{l}$ around its 4 edges.\n3. The bottom and top edges give a net contribution of $-\\frac{\\partial v_x}{\\partial y} dx dy$, while the right and left edges give $\\frac{\\partial v_y}{\\partial x} dx dy$.\n4. The total circulation for the infinitesimal loop is $\\left( \\frac{\\partial v_y}{\\partial x} - \\frac{\\partial v_x}{\\partial y} \\right) dx dy$, which is exactly the z-component of the curl times the area: $(\\nabla \\times \\mathbf{v})_z da_z = (\\nabla \\times \\mathbf{v}) \\cdot d\\mathbf{a}$.\n5. Summing the circulations of all infinitesimal loops over the entire surface gives $\\int_S (\\nabla \\times \\mathbf{v}) \\cdot d\\mathbf{a}$.\n6. Where two infinitesimal loops share an internal boundary, the line integrals run in opposite directions and perfectly cancel each other out.\n7. The only line integrals that do not cancel are those lying on the extreme outer boundary curve $P$.\n8. Therefore, the sum of all microscopic circulations equals the macroscopic circulation around the perimeter: $\\oint_P \\mathbf{v} \\cdot d\\mathbf{l}$.\n9. Equating the two yields the theorem: $\\int_S (\\nabla \\times \\mathbf{v}) \\cdot d\\mathbf{a} = \\oint_P \\mathbf{v} \\cdot d\\mathbf{l}$.'
          }
        ]
      }
    ]
  },
  {
    courseId: 'module-2',
    title: 'INTERNAL EXAMINATION, MARCH 2026',
    moduleName: 'Electrostatics',
    sections:[
      {
        id: 'sec-a',
        title: 'Section A',
        instructions: '(Answer all. Each question carries 3 marks. Ceiling: 12 Marks)',
        questions:[
          {
            id: 'q1', number: 1, marks: 3,
            question: 'Express the elemental displacements and volume in spherical polar coordinates and prove that volume of a sphere of radius R is $\\frac{4}{3}\\pi R^3$.',
            solution: 'In spherical polar coordinates, the elemental displacement vector is:\n$$ d\\mathbf{l} = dr \\mathbf{\\hat{r}} + r d\\theta \\mathbf{\\hat{\\theta}} + r \\sin\\theta d\\phi \\mathbf{\\hat{\\phi}} $$\n\nThe differential volume element $d\\tau$ is the product of the three orthogonal components:\n$$ d\\tau = (dr)(r d\\theta)(r \\sin\\theta d\\phi) = r^2 \\sin\\theta dr d\\theta d\\phi $$\n\nTo find the volume of a sphere of radius R:\n$$ V = \\int d\\tau = \\int_0^R \\int_0^\\pi \\int_0^{2\\pi} r^2 \\sin\\theta \\, dr \\, d\\theta \\, d\\phi $$\n$$ V = \\left( \\int_0^R r^2 dr \\right) \\left( \\int_0^\\pi \\sin\\theta d\\theta \\right) \\left( \\int_0^{2\\pi} d\\phi \\right) $$\n$$ V = \\left[ \\frac{R^3}{3} \\right] \\times [-\\cos\\pi - (-\\cos 0)] \\times [2\\pi] $$\n$$ V = \\frac{R^3}{3} \\times (1+1) \\times 2\\pi = \\frac{4}{3}\\pi R^3 $$'
          },
          {
            id: 'q2', number: 2, marks: 3,
            question: 'Write down Gauss\'s Divergence theorem and explain it.',
            solution: '**Gauss\'s Divergence Theorem:**\n$$ \\int_V (\\nabla \\cdot \\mathbf{E}) d\\tau = \\oint_S \\mathbf{E} \\cdot d\\mathbf{a} $$\n\n**Explanation:**\nThe theorem relates a volume integral to a surface integral. It states that the integral of the divergence of a vector field ($\\nabla \\cdot \\mathbf{E}$) over a volume $V$ is exactly equal to the total outward flux of that field ($\\mathbf{E} \\cdot d\\mathbf{a}$) passing through the closed surface $S$ that bounds the volume.\nPhysically, it means that the net flow out of a region is equal to the sum of all internal sources (divergence) inside that region.'
          },
          {
            id: 'q3', number: 3, marks: 3,
            question: 'Write down the differential form of Gauss\'s law and obtain Poisson\'s equation and Laplace\'s equation from it.',
            solution: '**Differential form of Gauss\'s Law:**\n$$ \\nabla \\cdot \\mathbf{E} = \\frac{\\rho}{\\epsilon_0} $$\n\n**Poisson\'s Equation:**\nThe electric field $\\mathbf{E}$ can be expressed as the negative gradient of a scalar potential $V$: $\\mathbf{E} = -\\nabla V$.\nSubstituting this into Gauss\'s law:\n$$ \\nabla \\cdot (-\\nabla V) = \\frac{\\rho}{\\epsilon_0} $$\n$$ \\nabla^2 V = -\\frac{\\rho}{\\epsilon_0} $$\nThis is Poisson\'s Equation.\n\n**Laplace\'s Equation:**\nIn regions of space where there is no charge ($\\rho = 0$), Poisson\'s equation reduces to:\n$$ \\nabla^2 V = 0 $$\nThis is Laplace\'s Equation.'
          },
          {
            id: 'q4', number: 4, marks: 3,
            question: 'Using Gauss\'s law obtain an expression for the electric field due to an infinite plane sheet of charge density $\\sigma$.',
            solution: '1. **Gaussian Surface:** Draw a "Gaussian pillbox" (cylinder) straddling the plane, extending equally on both sides with end-cap area $A$.\n2. **Flux:** By symmetry, $\\mathbf{E}$ points directly away from the plane. The flux through the sides is zero. The flux through the two flat end-caps is $EA + EA = 2EA$.\n3. **Enclosed Charge:** The charge enclosed by the pillbox is $Q_{enc} = \\sigma A$.\n4. **Gauss\'s Law:**\n$$ \\oint \\mathbf{E} \\cdot d\\mathbf{a} = \\frac{Q_{enc}}{\\epsilon_0} $$\n$$ 2EA = \\frac{\\sigma A}{\\epsilon_0} $$\n$$ E = \\frac{\\sigma}{2\\epsilon_0} $$\nIn vector form, $\\mathbf{E} = \\frac{\\sigma}{2\\epsilon_0} \\mathbf{\\hat{n}}$, where $\\mathbf{\\hat{n}}$ points away from the surface. Notice the field magnitude is constant everywhere.'
          },
          {
            id: 'q5', number: 5, marks: 3,
            question: 'Explain any two electrostatic properties of conductors.',
            solution: '1. **$\\mathbf{E} = 0$ inside a conductor:** In an ideal conductor, charges are free to move. If there were a non-zero electric field inside, free charges would experience a force ($F=qE$) and accelerate. They will quickly redistribute themselves until their own induced field perfectly cancels the external field, resulting in a net field of zero inside.\n\n2. **Any net charge resides on the surface:** Since $\\mathbf{E} = 0$ everywhere inside the conductor, Gauss\'s law ($\\nabla \\cdot \\mathbf{E} = \\rho/\\epsilon_0$) demands that the charge density $\\rho = 0$ everywhere in the interior. Therefore, any excess charge placed on the conductor must distribute itself entirely on the outer surface.'
          }
        ]
      },
      {
        id: 'sec-b',
        title: 'Section B',
        instructions: '(Answer all. Each question carries 6 marks. Ceiling: 18 Marks)',
        questions:[
          {
            id: 'q6', number: 6, marks: 6,
            question: 'Compute gradient of the T=r (cos$\\theta$ + sin$\\theta$ cos$\\phi$ ) in spherical polar coordinates.',
            solution: 'The formula for the gradient in spherical polar coordinates is:\n$$ \\nabla T = \\frac{\\partial T}{\\partial r}\\mathbf{\\hat{r}} + \\frac{1}{r}\\frac{\\partial T}{\\partial \\theta}\\mathbf{\\hat{\\theta}} + \\frac{1}{r\\sin\\theta}\\frac{\\partial T}{\\partial \\phi}\\mathbf{\\hat{\\phi}} $$\n\nGiven $T = r(\\cos\\theta + \\sin\\theta\\cos\\phi)$:\n\n1. **Radial Component ($\\mathbf{\\hat{r}}$):**\n$$ \\frac{\\partial T}{\\partial r} = \\cos\\theta + \\sin\\theta\\cos\\phi $$\n\n2. **Polar Component ($\\mathbf{\\hat{\\theta}}$):**\n$$ \\frac{\\partial T}{\\partial \\theta} = r(-\\sin\\theta + \\cos\\theta\\cos\\phi) $$\nDividing by $r$ gives: $-\\sin\\theta + \\cos\\theta\\cos\\phi$\n\n3. **Azimuthal Component ($\\mathbf{\\hat{\\phi}}$):**\n$$ \\frac{\\partial T}{\\partial \\phi} = r\\sin\\theta(-\\sin\\phi) $$\nDividing by $r\\sin\\theta$ gives: $-\\sin\\phi$\n\n**Final Result:**\n$$ \\nabla T = (\\cos\\theta + \\sin\\theta\\cos\\phi)\\mathbf{\\hat{r}} + (\\cos\\theta\\cos\\phi - \\sin\\theta)\\mathbf{\\hat{\\theta}} - (\\sin\\phi)\\mathbf{\\hat{\\phi}} $$'
          },
          {
            id: 'q7', number: 7, marks: 6,
            question: 'Obtain the electrostatic boundary conditions at the interface of two regions separated by a charged sheet of charge density $\\sigma$.',
            solution: '**1. Normal Component:**\nApply Gauss\'s law to a wafer-thin "pillbox" straddling the surface. As the thickness shrinks to zero, the side flux vanishes.\n$$ \\oint \\mathbf{E} \\cdot d\\mathbf{a} = E^{\\perp}_{above} A - E^{\\perp}_{below} A $$\nThe enclosed charge is $Q_{enc} = \\sigma A$.\n$$ (E^{\\perp}_{above} - E^{\\perp}_{below}) A = \\frac{\\sigma A}{\\epsilon_0} \\implies E^{\\perp}_{above} - E^{\\perp}_{below} = \\frac{\\sigma}{\\epsilon_0} $$\nThe normal component is discontinuous by $\\sigma/\\epsilon_0$.\n\n**2. Tangential Component:**\nApply the fact that $\\oint \\mathbf{E} \\cdot d\\mathbf{l} = 0$ (electrostatic field is conservative) to a thin rectangular loop crossing the boundary. As the height shrinks to zero, the vertical sides contribute nothing.\n$$ \\oint \\mathbf{E} \\cdot d\\mathbf{l} = E^{\\parallel}_{above} L - E^{\\parallel}_{below} L = 0 $$\n$$ E^{\\parallel}_{above} = E^{\\parallel}_{below} $$\nThe tangential component is continuous across the boundary.\n\n**Vector Form Summary:**\n$$ \\mathbf{E}_{above} - \\mathbf{E}_{below} = \\frac{\\sigma}{\\epsilon_0} \\mathbf{\\hat{n}} $$'
          },
          {
            id: 'q8', number: 8, marks: 6,
            question: 'Starting from the electric field due to a point charge placed at the origin find the total flux through a spherical surface of radius r and hence obtain integral form of Gauss\'s law.',
            solution: 'The electric field of a point charge $q$ at the origin is given by Coulomb\'s law:\n$$ \\mathbf{E} = \\frac{1}{4\\pi\\epsilon_0} \\frac{q}{r^2} \\mathbf{\\hat{r}} $$\n\nTo find the flux through a spherical surface of radius $r$ centered at the origin, we compute the surface integral $\\oint_S \\mathbf{E} \\cdot d\\mathbf{a}$.\nThe area element vector $d\\mathbf{a}$ for a sphere points radially outward: $d\\mathbf{a} = r^2 \\sin\\theta d\\theta d\\phi \\mathbf{\\hat{r}}$.\n\nTaking the dot product $\\mathbf{\\hat{r}} \\cdot \\mathbf{\\hat{r}} = 1$:\n$$ \\mathbf{E} \\cdot d\\mathbf{a} = \\left( \\frac{1}{4\\pi\\epsilon_0} \\frac{q}{r^2} \\right) (r^2 \\sin\\theta d\\theta d\\phi) = \\frac{q}{4\\pi\\epsilon_0} \\sin\\theta d\\theta d\\phi $$\n\nIntegrate over the entire sphere ($\\theta$ from $0$ to $\\pi$, $\\phi$ from $0$ to $2\\pi$):\n$$ \\Phi_E = \\frac{q}{4\\pi\\epsilon_0} \\int_0^{2\\pi} d\\phi \\int_0^\\pi \\sin\\theta d\\theta $$\n$$ \\Phi_E = \\frac{q}{4\\pi\\epsilon_0} (2\\pi) [-\\cos\\pi - (-\\cos 0)] = \\frac{q}{4\\pi\\epsilon_0} (2\\pi)(2) = \\frac{q}{\\epsilon_0} $$\n\nNotice the radius $r^2$ perfectly canceled out. By the principle of superposition, if we have a collection of charges, the total flux is the sum of fluxes from each charge. Charges inside contribute $q/\\epsilon_0$, charges outside contribute 0.\nHence, for any closed surface enclosing a total charge $Q_{enc}$:\n$$ \\oint_S \\mathbf{E} \\cdot d\\mathbf{a} = \\frac{Q_{enc}}{\\epsilon_0} $$\nThis is the integral form of Gauss\'s Law.'
          },
          {
            id: 'q9', number: 9, marks: 6,
            question: 'What is electrostatic potential. How it is related to electric field at that point.',
            solution: 'Because the electrostatic field is irrotational ($\\nabla \\times \\mathbf{E} = 0$), its line integral between two points is path-independent. This allows us to define a scalar function called the **Electrostatic Potential**, $V(\\mathbf{r})$.\n\nIt is defined as the negative of the work done by the electric field per unit charge in moving a test charge from a standard reference point $\\mathcal{O}$ (usually infinity) to the point $\\mathbf{r}$:\n$$ V(\\mathbf{r}) \\equiv - \\int_{\\mathcal{O}}^{\\mathbf{r}} \\mathbf{E} \\cdot d\\mathbf{l} $$\n\n**Relation to Electric Field:**\nBy the fundamental theorem for gradients, the difference in potential is $V(\\mathbf{b}) - V(\\mathbf{a}) = \\int_{\\mathbf{a}}^{\\mathbf{b}} (\\nabla V) \\cdot d\\mathbf{l}$.\nComparing this with the definition $V(\\mathbf{b}) - V(\\mathbf{a}) = -\\int_{\\mathbf{a}}^{\\mathbf{b}} \\mathbf{E} \\cdot d\\mathbf{l}$, it implies that the integrands must be equal:\n$$ \\mathbf{E} = -\\nabla V $$\nThus, the electric field at any point is the negative gradient of the electrostatic potential at that point. It points in the direction of the steepest descent of the potential.'
          }
        ]
      },
      {
        id: 'sec-c',
        title: 'Section C',
        instructions: '(Answer any one. Each question carries 10 marks)',
        questions:[
          {
            id: 'q10', number: 10, marks: 10,
            question: 'Find the electric field due to a uniformly charged spherical shell (both inside and outside the shell), using Gauss\'s law. Plot the variation of electric field with distance from the center.',
            solution: 'Consider a uniformly charged spherical shell of radius $R$ and total charge $Q$. By symmetry, the electric field must be purely radial and depend only on the distance $r$ from the center: $\\mathbf{E} = E(r)\\mathbf{\\hat{r}}$. We apply Gauss\'s Law: $\\oint \\mathbf{E} \\cdot d\\mathbf{a} = Q_{enc}/\\epsilon_0$.\n\n**1. Outside the shell ($r > R$):**\nConstruct a spherical Gaussian surface of radius $r > R$ concentric with the shell.\n- The flux is $\\oint \\mathbf{E} \\cdot d\\mathbf{a} = E(r) \\oint da = E(r) (4\\pi r^2)$.\n- The enclosed charge is the total charge of the shell: $Q_{enc} = Q$.\n- Applying Gauss\'s law: $E(r)(4\\pi r^2) = \\frac{Q}{\\epsilon_0}$.\n- Result: $\\mathbf{E}_{out} = \\frac{1}{4\\pi\\epsilon_0} \\frac{Q}{r^2} \\mathbf{\\hat{r}}$.\n*(Notice that outside the shell, the field is exactly the same as if all charge were concentrated at the center.)*\n\n**2. Inside the shell ($r < R$):**\nConstruct a spherical Gaussian surface of radius $r < R$ concentric with the shell.\n- The flux is again $E(r) (4\\pi r^2)$.\n- The enclosed charge is $Q_{enc} = 0$, because all the charge resides on the surface at $R$.\n- Applying Gauss\'s law: $E(r)(4\\pi r^2) = 0$.\n- Result: $\\mathbf{E}_{in} = 0$.\n\n**Variation Plot:**\n- For $0 < r < R$, $E = 0$ (a flat line on the axis).\n- At $r = R$, $E$ jumps discontinuously to $E_{max} = \\frac{1}{4\\pi\\epsilon_0}\\frac{Q}{R^2}$.\n- For $r > R$, $E$ falls off rapidly following an inverse-square curve ($1/r^2$).'
          },
          {
            id: 'q11', number: 11, marks: 10,
            question: 'Obtain an expression for the electrostatic energy of a distribution of n point charges. Also obtain energy of a continuous charge distribution. Hence deduce the expression for electrostatic energy density, $u_E = \\frac{\\epsilon_0}{2}E^2$.',
            solution: '**1. Energy of n point charges:**\nThe work required to assemble a collection of point charges is the sum of the work to bring in each charge from infinity against the potential of the charges already present.\n- $W_1 = 0$\n- $W_2 = q_2 V_1(\\mathbf{r}_2) = \\frac{1}{4\\pi\\epsilon_0} \\frac{q_1 q_2}{\\cal{r}_{12}}$\n- $W_3 = q_3 (V_1(\\mathbf{r}_3) + V_2(\\mathbf{r}_3)) = \\frac{1}{4\\pi\\epsilon_0} q_3 \\left( \\frac{q_1}{\\cal{r}_{13}} + \\frac{q_2}{\\cal{r}_{23}} \\right)$\nSumming for all pairs yields $W = \\frac{1}{4\\pi\\epsilon_0} \\sum_{i=1}^n \\sum_{j>i} \\frac{q_i q_j}{\\cal{r}_{ij}}$.\nTo write this more elegantly, we sum over all $i$ and $j$ ($i \\neq j$) and divide by 2 to prevent double-counting:\n$$ W = \\frac{1}{2} \\sum_{i=1}^n q_i \\left( \\sum_{j \\neq i} \\frac{1}{4\\pi\\epsilon_0} \\frac{q_j}{\\cal{r}_{ij}} \\right) = \\frac{1}{2} \\sum_{i=1}^n q_i V(\\mathbf{r}_i) $$\nwhere $V(\\mathbf{r}_i)$ is the potential at $\\mathbf{r}_i$ due to all other charges.\n\n**2. Energy of a continuous charge distribution:**\nFor a continuous volume charge density $\\rho$, the sum translates to an integral over the volume:\n$$ W = \\frac{1}{2} \\int_V \\rho(\\mathbf{r}) V(\\mathbf{r}) d\\tau $$\n\n**3. Energy Density ($u_E$):**\nWe can express this purely in terms of the electric field by substituting Gauss\'s law, $\\rho = \\epsilon_0 (\\nabla \\cdot \\mathbf{E})$:\n$$ W = \\frac{\\epsilon_0}{2} \\int (\\nabla \\cdot \\mathbf{E}) V d\\tau $$\nUsing the product rule $\\nabla \\cdot (V\\mathbf{E}) = V(\\nabla \\cdot \\mathbf{E}) + \\mathbf{E} \\cdot (\\nabla V)$ and substituting:\n$$ W = \\frac{\\epsilon_0}{2} \\left[ \\int \\nabla \\cdot (V\\mathbf{E}) d\\tau - \\int \\mathbf{E} \\cdot (\\nabla V) d\\tau \\right] $$\nApply the divergence theorem to the first integral to get a surface integral $\\oint_S V\\mathbf{E} \\cdot d\\mathbf{a}$. If we integrate over all space, $V$ and $\\mathbf{E}$ go to zero at infinity fast enough that this surface term vanishes.\nSubstitute $\\nabla V = -\\mathbf{E}$ in the second term:\n$$ W = \\frac{\\epsilon_0}{2} \\int_{\\text{all space}} \\mathbf{E} \\cdot \\mathbf{E} d\\tau = \\frac{\\epsilon_0}{2} \\int E^2 d\\tau $$\nThis shows that the total electrostatic energy can be viewed as stored entirely within the electric field itself, with an energy density of:\n$$ u_E = \\frac{\\epsilon_0}{2} E^2 $$'
          }
        ]
      }
    ]
  },
  {
    courseId: 'module-3',
    title: 'INTERNAL EXAMINATION, MARCH 2026',
    moduleName: 'Magnetostatics',
    sections:[
      {
        id: 'sec-a',
        title: 'Section A',
        instructions: '(Answer all. Each question carries 3 marks. Ceiling: 12 Marks)',
        questions:[
          {
            id: 'q1', number: 1, marks: 3,
            question: 'Write down the Lorentz force law and explain its terms.',
            solution: 'The Lorentz force law gives the total force $\\mathbf{F}$ acting on a point charge $Q$ moving with velocity $\\mathbf{v}$ in the presence of both an electric field $\\mathbf{E}$ and a magnetic field $\\mathbf{B}$:\n\n$$ \\mathbf{F} = Q[\\mathbf{E} + (\\mathbf{v} \\times \\mathbf{B})] $$\n\n- $Q\\mathbf{E}$ is the electric force, which acts in the direction of $\\mathbf{E}$.\n- $Q(\\mathbf{v} \\times \\mathbf{B})$ is the magnetic force, which always acts perpendicular to both the velocity $\\mathbf{v}$ and the magnetic field $\\mathbf{B}$.'
          },
          {
            id: 'q2', number: 2, marks: 3,
            question: 'State the Biot-Savart law.',
            solution: 'The Biot-Savart law determines the magnetic field $\\mathbf{B}$ generated by a steady line current $I$. It states that the magnetic field at a position $\\mathbf{r}$ is:\n\n$$ \\mathbf{B}(\\mathbf{r}) = \\frac{\\mu_0}{4\\pi} \\int \\frac{I \\, d\\mathbf{l}\' \\times \\mathbf{\\hat{\\mathcal{r}}}}{\\mathcal{r}^2} $$\n\nWhere:\n- $\\mu_0$ is the permeability of free space.\n- $d\\mathbf{l}\'$ is an infinitesimal element of the wire pointing in the direction of the current.\n- $\\mathcal{r}$ is the separation vector from the source element to the field point, and $\\mathbf{\\hat{\\mathcal{r}}}$ is its unit direction vector.'
          },
          {
            id: 'q3', number: 3, marks: 3,
            question: 'Explain why the divergence of the magnetic field is always zero.',
            solution: 'The divergence of the magnetic field is mathematically always zero: $\\nabla \\cdot \\mathbf{B} = 0$.\n\nPhysically, this represents the fact that there are no **magnetic monopoles** (isolated "North" or "South" poles) in nature. Magnetic field lines do not begin or end at a point source like electric field lines do; instead, they always form closed, continuous loops.'
          },
          {
            id: 'q4', number: 4, marks: 3,
            question: 'What is the magnetic vector potential?',
            solution: 'Because the divergence of the magnetic field is identically zero ($\\nabla \\cdot \\mathbf{B} = 0$), vector calculus guarantees that $\\mathbf{B}$ can be expressed as the curl of another vector field. \n\nWe define the **Magnetic Vector Potential**, $\\mathbf{A}$, such that:\n$$ \\mathbf{B} = \\nabla \\times \\mathbf{A} $$\nIt is particularly useful for finding magnetic fields of localized current distributions by evaluating $\\mathbf{A} = \\frac{\\mu_0}{4\\pi} \\int \\frac{\\mathbf{J}}{\\mathcal{r}} d\\tau$.'
          },
          {
            id: 'q5', number: 5, marks: 3,
            question: 'State Ampere\'s law in integral and differential forms.',
            solution: '**Integral Form:**\n$$ \\oint_P \\mathbf{B} \\cdot d\\mathbf{l} = \\mu_0 I_{enc} $$\nThe line integral of the magnetic field around any closed loop is equal to $\\mu_0$ times the total steady current passing through the surface bounded by the loop.\n\n**Differential Form:**\n$$ \\nabla \\times \\mathbf{B} = \\mu_0 \\mathbf{J} $$\nThe curl of the magnetic field at any point is equal to $\\mu_0$ times the volume current density $\\mathbf{J}$ at that point.'
          }
        ]
      },
      {
        id: 'sec-b',
        title: 'Section B',
        instructions: '(Answer all. Each question carries 6 marks. Ceiling: 18 Marks)',
        questions:[
          {
            id: 'q6', number: 6, marks: 6,
            question: 'Obtain the magnetic field at a distance s from an infinitely long straight wire carrying a steady current I.',
            solution: 'We apply Ampère\'s Law: $\\oint \\mathbf{B} \\cdot d\\mathbf{l} = \\mu_0 I_{enc}$.\n\n1. By symmetry (and the right-hand rule), the magnetic field $\\mathbf{B}$ forms concentric circles around the wire and points in the azimuthal ($\\mathbf{\\hat{\\phi}}$) direction.\n2. We choose a circular Ampèrian loop of radius $s$ centered on the wire.\n3. The magnetic field magnitude $B$ is constant everywhere on this loop, and $\\mathbf{B}$ is parallel to the path element $d\\mathbf{l}$.\n4. Thus, the line integral evaluates to: $\\oint \\mathbf{B} \\cdot d\\mathbf{l} = B \\oint dl = B(2\\pi s)$.\n5. The current enclosed by this loop is simply the total current of the wire: $I_{enc} = I$.\n6. Equating the two sides: $B(2\\pi s) = \\mu_0 I$.\n\n**Result:** $\\mathbf{B} = \\frac{\\mu_0 I}{2\\pi s} \\mathbf{\\hat{\\phi}}$.'
          },
          {
            id: 'q7', number: 7, marks: 6,
            question: 'Derive the cyclotron formula for the radius of the orbit of a charged particle in a uniform magnetic field.',
            solution: 'A particle of mass $m$ and charge $Q$ moving with velocity $\\mathbf{v}$ perpendicular to a uniform magnetic field $\\mathbf{B}$ experiences a Lorentz force: $\\mathbf{F} = Q(\\mathbf{v} \\times \\mathbf{B})$.\n\nSince $\\mathbf{v}$ and $\\mathbf{B}$ are perpendicular, the magnitude of the force is $F = QvB$, and it points perpendicular to the velocity, acting as a pure centripetal force that bends the path into a circle of radius $R$.\n\nEquating the magnetic force to the required centripetal force ($F_c = m\\frac{v^2}{R}$):\n$$ QvB = m\\frac{v^2}{R} $$\nCanceling one factor of $v$ yields the momentum $p = mv$:\n$$ p = QBR $$\nOr, solving for the radius $R$:\n$$ R = \\frac{mv}{QB} $$\nThis is the cyclotron formula.'
          },
          {
            id: 'q8', number: 8, marks: 6,
            question: 'Derive the boundary conditions for the magnetic field across a surface current $\\mathbf{K}$.',
            solution: '**1. Normal Component:**\nApply $\\nabla \\cdot \\mathbf{B} = 0$ (or $\\oint \\mathbf{B} \\cdot d\\mathbf{a} = 0$) to a thin Gaussian pillbox straddling the surface.\nAs the thickness shrinks to zero, the flux through the sides vanishes. The flux through the top and bottom faces must sum to zero: $B^{\\perp}_{above} A - B^{\\perp}_{below} A = 0$.\nResult: $B^{\\perp}_{above} = B^{\\perp}_{below}$. The normal component is continuous.\n\n**2. Tangential Component:**\nApply Ampère\'s Law ($\\oint \\mathbf{B} \\cdot d\\mathbf{l} = \\mu_0 I_{enc}$) to a thin rectangular loop parallel to the surface and perpendicular to the current flow $\\mathbf{K}$.\nAs the loop height shrinks to zero, the vertical sides contribute nothing. The horizontal sides give: $(B^{\\parallel}_{above} - B^{\\parallel}_{below})L$.\nThe enclosed current is $I_{enc} = K L$.\nEquating: $(B^{\\parallel}_{above} - B^{\\parallel}_{below})L = \\mu_0 K L \\implies B^{\\parallel}_{above} - B^{\\parallel}_{below} = \\mu_0 K$.\nThe tangential component is discontinuous by $\\mu_0 K$.\n\n**Vector Form:** $\\mathbf{B}_{above} - \\mathbf{B}_{below} = \\mu_0 (\\mathbf{K} \\times \\mathbf{\\hat{n}})$.'
          },
          {
            id: 'q9', number: 9, marks: 6,
            question: 'Show that the magnetic forces do no work.',
            solution: 'The magnetic force on a charge $Q$ moving with velocity $\\mathbf{v}$ is given by the Lorentz force law: $\\mathbf{F}_{mag} = Q(\\mathbf{v} \\times \\mathbf{B})$.\n\nWork done by a force over an infinitesimal displacement $d\\mathbf{l}$ is $dW = \\mathbf{F} \\cdot d\\mathbf{l}$.\nSince velocity is the rate of displacement, $d\\mathbf{l} = \\mathbf{v} dt$.\n\nSubstitute this into the work equation:\n$$ dW_{mag} = \\mathbf{F}_{mag} \\cdot d\\mathbf{l} = Q(\\mathbf{v} \\times \\mathbf{B}) \\cdot (\\mathbf{v} dt) $$\n\nBy the properties of the cross product, the vector $(\\mathbf{v} \\times \\mathbf{B})$ is strictly perpendicular to both $\\mathbf{v}$ and $\\mathbf{B}$.\nThe dot product of any two perpendicular vectors is zero, therefore:\n$$ (\\mathbf{v} \\times \\mathbf{B}) \\cdot \\mathbf{v} = 0 $$\n\nThus, $dW_{mag} = 0$. Magnetic forces may alter the direction of a particle, but they cannot speed it up or slow it down, hence they do no work.'
          }
        ]
      },
      {
        id: 'sec-c',
        title: 'Section C',
        instructions: '(Answer any one. Each question carries 10 marks)',
        questions:[
          {
            id: 'q10', number: 10, marks: 10,
            question: 'Find the magnetic field inside and outside an infinite solenoid using Ampere\'s law.',
            solution: 'Consider an infinite solenoid of radius $R$ with $n$ closely wound turns per unit length, carrying a steady current $I$.\n\n**1. Field Direction:**\nBy symmetry and the right-hand rule, the magnetic field $\\mathbf{B}$ runs parallel to the axis of the solenoid (let\'s call this the z-axis). There is no radial component, and no azimuthal component. Thus, $\\mathbf{B} = B(s) \\mathbf{\\hat{z}}$.\n\n**2. Field Outside:**\nDraw a rectangular Ampèrian loop of length $L$ lying completely outside the solenoid, with one side at distance $a$ and the other at distance $b$ from the axis.\nThe line integral is $\\oint \\mathbf{B} \\cdot d\\mathbf{l} = B(a)L - B(b)L$. \nSince the loop encloses no current ($I_{enc} = 0$), $B(a)L - B(b)L = 0 \\implies B(a) = B(b)$.\nThe field is constant everywhere outside. However, we know the field must go to zero infinitely far away ($B(\\infty) = 0$). Since it\'s constant, it must be exactly zero everywhere outside: $\\mathbf{B}_{out} = 0$.\n\n**3. Field Inside:**\nDraw a rectangular Ampèrian loop of length $L$ that is half inside (distance $s < R$) and half outside.\nThe line integral is $\\oint \\mathbf{B} \\cdot d\\mathbf{l} = B_{in} L$ (since the outside edge contributes 0, and the radial edges are perpendicular to B).\nThe number of turns enclosed by this loop is $n L$. The total enclosed current is $I_{enc} = n L I$.\nApply Ampère\'s Law: $\\oint \\mathbf{B} \\cdot d\\mathbf{l} = \\mu_0 I_{enc}$.\n$$ B_{in} L = \\mu_0 (n L I) $$\n$$ B_{in} = \\mu_0 n I $$\n\n**Conclusion:** The field is uniform and constant inside ($\\mathbf{B} = \\mu_0 n I \\mathbf{\\hat{z}}$) and zero outside.'
          },
          {
            id: 'q11', number: 11, marks: 10,
            question: 'Find the magnetic field at a distance z above the center of a circular loop of radius R, which carries a steady current I, using the Biot-Savart law.',
            solution: 'We apply the Biot-Savart Law: $\\mathbf{B} = \\frac{\\mu_0 I}{4\\pi} \\oint \\frac{d\\mathbf{l}\' \\times \\mathbf{\\hat{\\mathcal{r}}}}{\\mathcal{r}^2}$.\n\n1. Set the circular loop in the xy-plane centered at the origin. We evaluate the field at a point P on the z-axis $(0, 0, z)$.\n2. For any line element $d\\mathbf{l}\'$ on the ring, the vector $d\\mathbf{l}\'$ is azimuthal, and the separation vector $\\mathcal{r}$ points from the ring to P. The distance is $\\mathcal{r} = \\sqrt{R^2 + z^2}$.\n3. Since $d\\mathbf{l}\'$ is tangent to the circle and $\\mathcal{r}$ is in the radial-z plane, they are perpendicular. Thus, $|d\\mathbf{l}\' \\times \\mathbf{\\hat{\\mathcal{r}}}| = dl\'$.\n4. The vector $d\\mathbf{B}$ generated by this segment points inward and upward, perpendicular to $\\mathcal{r}$. It sweeps out a cone as we integrate around the loop.\n5. By symmetry, all the horizontal components of $d\\mathbf{B}$ cancel out when integrated around the full circle.\n6. Only the vertical z-component survives: $dB_z = dB \\cos\\theta$, where $\\theta$ is the angle between $\\mathbf{B}$ and the z-axis (which by geometry matches the angle between $\\mathcal{r}$ and the xy-plane).\n7. From the geometry, $\\cos\\theta = \\frac{R}{\\mathcal{r}} = \\frac{R}{\\sqrt{R^2+z^2}}$.\n8. Substitute this into the integral:\n$$ B_z = \\oint dB \\cos\\theta = \\oint \\left( \\frac{\\mu_0 I}{4\\pi \\mathcal{r}^2} dl\' \\right) \\frac{R}{\\mathcal{r}} $$\n$$ B_z = \\frac{\\mu_0 I R}{4\\pi (R^2+z^2)^{3/2}} \\oint dl\' $$\n9. The integral of $dl\'$ around the entire loop is simply the circumference, $2\\pi R$.\n$$ B_z = \\frac{\\mu_0 I R}{4\\pi (R^2+z^2)^{3/2}} (2\\pi R) = \\frac{\\mu_0 I R^2}{2 (R^2+z^2)^{3/2}} $$\n\n**Result:** $\\mathbf{B} = \\frac{\\mu_0 I R^2}{2 (R^2+z^2)^{3/2}} \\mathbf{\\hat{z}}$.'
          }
        ]
      }
    ]
  },
  {
    courseId: 'module-4',
    title: 'INTERNAL EXAMINATION, MARCH 2026',
    moduleName: 'Electrical Measurements',
    sections:[
      {
        id: 'sec-a',
        title: 'Section A',
        instructions: '(Answer all. Each question carries 3 marks. Ceiling: 12 Marks)',
        questions:[
          {
            id: 'q1', number: 1, marks: 3,
            question: 'State Kirchhoff\'s Current and Voltage laws.',
            solution: '**Kirchhoff\'s First Law (KCL):** In any network of conductors, the algebraic sum of the currents meeting at any junction is zero ($\\sum I = 0$). This represents the conservation of charge.\n\n**Kirchhoff\'s Second Law (KVL):** The algebraic sum of the products of current and resistance in any closed loop of a circuit is equal to the algebraic sum of the electromotive forces acting in that loop ($\\sum IR = \\sum E$). This represents the conservation of energy.'
          },
          {
            id: 'q2', number: 2, marks: 3,
            question: 'State the principle of a Potentiometer.',
            solution: 'A potentiometer works on the principle that when a steady current flows through a wire of uniform cross-section and uniform composition, the potential drop across any segment of the wire is directly proportional to the length of that segment ($V \\propto l$). \n\nBy finding a null balance point with a galvanometer, it can measure an unknown EMF without drawing any current from the test cell, making it act as an ideal infinite-impedance voltmeter.'
          },
          {
            id: 'q3', number: 3, marks: 3,
            question: 'What is the condition for balance in a Wheatstone Bridge?',
            solution: 'A Wheatstone bridge consisting of four resistance arms $P, Q, R,$ and $S$ is said to be balanced when the galvanometer connecting the middle junctions shows zero deflection ($I_g = 0$). \n\nThe mathematical condition for this balance is that the ratio of the resistances in the opposite arms are equal:\n$$ \\frac{P}{Q} = \\frac{R}{S} $$'
          },
          {
            id: 'q4', number: 4, marks: 3,
            question: 'State the Maximum Power Transfer theorem.',
            solution: 'The Maximum Power Transfer theorem states that the maximum power will be delivered to a load from a DC voltage generator when the load resistance $R_L$ is exactly equal to the internal (Thevenin) resistance $R_{th}$ of the source.\n\nAt this matched condition ($R_L = R_{th}$), the efficiency of power transfer is exactly 50%.'
          },
          {
            id: 'q5', number: 5, marks: 3,
            question: 'What distinguishes a ballistic galvanometer from a dead-beat galvanometer?',
            solution: '- **Dead-beat Galvanometer:** Designed to measure steady continuous current. The coil is wound on a metallic frame to maximize electromagnetic damping (eddy currents), making the needle settle quickly to a final reading without oscillating.\n- **Ballistic Galvanometer:** Designed to measure brief impulses of electric charge ($q$). The coil is wound on a non-metallic frame to minimize damping, and has a high moment of inertia so it waits for the entire charge to pass before slowly swinging to its maximum "throw".'
          }
        ]
      },
      {
        id: 'sec-b',
        title: 'Section B',
        instructions: '(Answer all. Each question carries 6 marks. Ceiling: 18 Marks)',
        questions:[
          {
            id: 'q6', number: 6, marks: 6,
            question: 'Explain how Carey Foster\'s bridge is used to compare two nearly equal resistances.',
            solution: 'Carey Foster\'s bridge is a highly sensitive modification of the Wheatstone bridge designed to eliminate errors caused by end-resistances in the circuit.\n\n1. It places equal standard resistances $P$ and $Q$ in the upper gaps.\n2. The unknown resistance $R$ and standard resistance $S$ are placed in the outer gaps. A 1-meter slide wire runs between them.\n3. The bridge is balanced by finding a null point at length $l_1$ on the wire.\n4. The key trick is to physically swap the positions of $R$ and $S$ and find a new balance point at length $l_2$.\n5. By taking the difference of the bridge equations before and after the swap, the unknown contact (end) resistances $\\alpha$ and $\\beta$ perfectly cancel out.\n6. The difference in resistance is given purely by the shift in the balance point: $R - S = \\rho(l_2 - l_1)$, where $\\rho$ is the resistance per unit length of the slide wire.'
          },
          {
            id: 'q7', number: 7, marks: 6,
            question: 'Use Thevenin\'s theorem to explain how a complex network can be replaced by a simple equivalent circuit.',
            solution: 'Thevenin\'s Theorem states that any linear, two-terminal active network consisting of voltage/current sources and impedances can be perfectly replaced by a simple equivalent circuit consisting of just one voltage source ($E_{th}$) in series with one impedance ($Z_{th}$).\n\n**How to determine the equivalent:**\n1. **Find $E_{th}$:** Remove the load resistor to create an open circuit at the output terminals. Calculate or measure the voltage across these open terminals. This is the Thevenin equivalent voltage.\n2. **Find $Z_{th}$:** Turn off all independent active sources in the network (replace voltage sources with short circuits, current sources with open circuits). Calculate or measure the total equivalent resistance looking back into the output terminals. This is the Thevenin equivalent impedance.\n\nThe complex circuit is thus fully reduced to a single battery $E_{th}$ and a single resistor $Z_{th}$.'
          },
          {
            id: 'q8', number: 8, marks: 6,
            question: 'Explain how the internal resistance of a cell is determined using a potentiometer.',
            solution: '1. Connect the test cell of EMF $E$ to the potentiometer. With the cell in an open circuit (no current drawn), find the balance length $l_1$. The EMF is proportional to this length: $E \\propto l_1$.\n2. Next, connect a known external resistance $R$ in parallel across the cell using a switch. When the switch is closed, the cell supplies current, and its voltage drops to the terminal voltage $V$.\n3. Find the new balance point $l_2$ for this terminal voltage: $V \\propto l_2$.\n4. By Ohm\'s law, the terminal voltage is $V = E \\frac{R}{R+r}$, where $r$ is the internal resistance.\n5. Taking the ratio gives $\\frac{E}{V} = \\frac{l_1}{l_2} = \\frac{R+r}{R} = 1 + \\frac{r}{R}$.\n6. Solving for internal resistance gives: $r = R \\left( \\frac{l_1 - l_2}{l_2} \\right)$.'
          },
          {
            id: 'q9', number: 9, marks: 6,
            question: 'Explain the significance of the logarithmic decrement in a ballistic galvanometer.',
            solution: 'A Ballistic Galvanometer is designed to measure the total charge passed in a quick pulse by measuring the maximum first "throw" (deflection $\\theta_1$) of the coil.\n\nHowever, in reality, as the coil swings outward, air resistance and tiny induced eddy currents sap some of its kinetic energy (damping). Therefore, the observed first throw $\\theta_1$ is slightly smaller than the true theoretical throw $\\theta$ it would have achieved in a perfect vacuum.\n\nTo correct for this, we observe successive swings. The ratio of successive maximum deflections is a constant decay factor $d = \\theta_1/\\theta_2 = e^\\lambda$, where $\\lambda$ is the **logarithmic decrement**.\n\nSince the first throw occurs after only a quarter of a full vibration, the correction factor applied to the first throw is $e^{\\lambda/2}$. The true throw is calculated as $\\theta = \\theta_1 (1 + \\lambda/2)$. The logarithmic decrement allows us to recover the true theoretical charge.'
          }
        ]
      },
      {
        id: 'sec-c',
        title: 'Section C',
        instructions: '(Answer any one. Each question carries 10 marks)',
        questions:[
          {
            id: 'q10', number: 10, marks: 10,
            question: 'Explain the theory and procedure for the calibration of a low-range voltmeter using a potentiometer.',
            solution: '**Theory:**\nA potentiometer provides a highly precise linear voltage scale that draws no current. By measuring the potential drop across a known standard resistance using the potentiometer, we can find the true exact voltage and compare it against the voltmeter\'s reading to create a calibration curve (Error vs Reading).\n\n**Procedure:**\n1. The primary circuit is established with a steady driver battery connected across the potentiometer wire $AB$, providing a constant voltage gradient.\n2. A standard cell of exactly known EMF $E$ is balanced against the wire to find length $l$. The potential drop per cm is calculated as $k = E/l$.\n3. In a secondary circuit, the voltmeter to be calibrated is connected in parallel with a standard known resistance $R$. A rheostat varies the current to set the voltmeter to a specific reading $V_1$.\n4. The actual potential drop across $R$ is balanced on the potentiometer wire at length $l_1$.\n5. The true voltage across the resistor is $V_{true} = k l_1 = \\frac{E l_1}{l}$.\n6. The error in the voltmeter is calculated as $Correction = V_{true} - V_1 = \\left(\\frac{E l_1}{l}\\right) - V_1$.\n7. This process is repeated for various readings across the voltmeter\'s scale. A calibration graph is then plotted with Voltmeter Reading on the X-axis and Correction on the Y-axis.'
          },
          {
            id: 'q11', number: 11, marks: 10,
            question: 'Derive the expression for the charge measured by a moving coil ballistic galvanometer ($q = K\\theta$).',
            solution: 'When a quick pulse of charge $q$ passes through the galvanometer, it imparts a sudden angular impulse to the coil before it has time to move.\n\n**1. Angular Impulse:**\nThe magnetic torque is $\\tau = NiBA$. Integrating over the short duration of the pulse gives the total angular impulse:\n$$ \\int \\tau dt = NBA \\int i \\, dt = NBAq $$\nBy mechanics, this impulse imparts an initial angular momentum to the coil: $I\\omega = NBAq$, where $I$ is the moment of inertia and $\\omega$ is the initial angular velocity.\n\n**2. Energy Conversion:**\nThe coil gains kinetic energy $K.E. = \\frac{1}{2}I\\omega^2$. It swings outward until this is entirely converted into the elastic potential energy of the twisted suspension wire, $\\frac{1}{2}c\\theta^2$, where $c$ is the torsional constant and $\\theta$ is the maximum throw.\nEquating energies: $\\frac{1}{2}I\\omega^2 = \\frac{1}{2}c\\theta^2 \\implies I\\omega^2 = c\\theta^2$.\n\n**3. Substitution:**\nMultiply both sides by $I$: $I^2\\omega^2 = c I \\theta^2$.\nSubstitute the impulse equation $(I\\omega = NBAq)$:\n$$ (NBAq)^2 = c I \\theta^2 $$\nThe period of the galvanometer is $T = 2\\pi\\sqrt{I/c}$, which gives $I = \\frac{c T^2}{4\\pi^2}$.\nSubstitute $I$ into the equation:\n$$ (NBAq)^2 = c \\left(\\frac{c T^2}{4\\pi^2}\\right) \\theta^2 = \\left( \\frac{c T}{2\\pi} \\theta \\right)^2 $$\nTake the square root:\n$$ NBAq = \\frac{c T}{2\\pi} \\theta $$\nSolve for $q$:\n$$ q = \\left( \\frac{T}{2\\pi} \\right) \\left( \\frac{c}{NBA} \\right) \\theta $$\n\nLetting $K = \\left(\\frac{T}{2\\pi}\\right) \\left(\\frac{c}{NBA}\\right)$ (the ballistic reduction factor), we get:\n$$ q = K\\theta $$'
          }
        ]
      }
    ]
  }
];