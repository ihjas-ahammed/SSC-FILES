import { Section } from '../types';

export const SECTION_1_3: Section = {
  id: "section-1-3",
  title: "Section 1.3: Integral Calculus & Curvilinear Systems",
  description: "Line, surface, and volume integrals, the fundamental theorems of vector calculus, and curvilinear coordinate systems.",
  color: "duo-green",
  units: [
    {
      id: "unit-131",
      title: "1.3.1 Basic Integrals",
      description: "Line, Surface, and Volume Integrals.",
      color: "duo-green",
      lessons: [
        {
          id: "les-131-1",
          title: "Line Integrals",
          description: "Integration along a path.",
          icon: "ArrowRight",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "A line integral sums up the dot product of a vector field with:", options: [{ id: "A", text: "Area element", isCorrect: false, explanation: "That's surface integral." }, { id: "B", text: "Path displacement element", isCorrect: true, explanation: "dl vector." }] },
            { id: "s1", type: "quiz", title: "Concept Check", content: "Is the work done by a force a line integral?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "W = integral F dot dl." }, { id: "B", text: "No", isCorrect: false, explanation: "" }] },
            { id: "s2", type: "theory", title: "Line Integrals", content: "A **line integral** is an expression of the form:\n\n$$ \\int_a^b \\mathbf{v} \\cdot d\\mathbf{l} $$\n\nIt represents the sum of the component of vector $\\mathbf{v}$ along the path $d\\mathbf{l}$. The value generally depends on the path taken from $a$ to $b$. If the path is a closed loop, we denote it $\\oint \\mathbf{v} \\cdot d\\mathbf{l}$." },
            { id: "s3", type: "interactive_canvas", title: "Path Integration", content: "Visualizing the dot product accumulation along a path.", interactiveCanvasId: "line-integral-interactive" },
            { id: "s5", type: "numerical", title: "Calculation", content: "Integrate $\\mathbf{v} = x \\hat{x}$ from x=0 to x=2 along the x-axis.", numericAnswer: 2, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Closed Loop", content: "If the line integral around a closed loop is zero, the field is:", options: [{ id: "A", text: "Conservative", isCorrect: true, explanation: "Path independent." }, { id: "B", text: "Solenoidal", isCorrect: false, explanation: "That means divergence is zero." }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The infinitesimal displacement vector is denoted by ___.", blankAnswer: "dl" }
          ]
        },
        {
          id: "les-131-2",
          title: "Example 1.6",
          description: "Evaluating a line integral.",
          icon: "Target",
          slides: [
            { id: "s0", type: "example_q", title: "Example 1.6", content: "**Problem:** Calculate the line integral of $\\mathbf{v} = y^2 \\hat{x} + 2x(y+1)\\hat{y}$ from $(1,1,0)$ to $(2,2,0)$ along the path $y=x$." },
            { id: "s1", type: "solution", title: "Solution", content: "**Result:** 10\n\n1. Path $y=x \\implies dy=dx$.\n2. $d\\mathbf{l} = dx\\hat{x} + dx\\hat{y}$.\n3. $\\mathbf{v}\\cdot d\\mathbf{l} = y^2 dx + 2x(y+1)dy = x^2 dx + 2x(x+1)dx$.\n4. $\\int_1^2 (3x^2 + 2x) dx = [x^3 + x^2]_1^2 = (8+4) - (1+1) = 10$." },
            { id: "s2", type: "quiz", title: "Path check", content: "If we took a different path, would we get the same result?", options: [{ id: "A", text: "Maybe", isCorrect: true, explanation: "Depends if the field is conservative." }, { id: "B", text: "Never", isCorrect: false, explanation: "" }] },
            { id: "s3", type: "quiz", title: "Conservative check", content: "Is this specific field conservative? (Check curl)", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "Curl is zero." }, { id: "B", text: "No", isCorrect: false, explanation: "" }] }
          ]
        },
        {
          id: "les-131-3",
          title: "Surface Integrals",
          description: "Flux through a surface.",
          icon: "Grid",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "A surface integral measures:", options: [{ id: "A", text: "Length", isCorrect: false, explanation: "" }, { id: "B", text: "Flux", isCorrect: true, explanation: "Flow through the surface." }] },
            { id: "s1", type: "quiz", title: "Concept Check", content: "The area vector $d\\mathbf{a}$ points:", options: [{ id: "A", text: "Tangent to surface", isCorrect: false, explanation: "" }, { id: "B", text: "Perpendicular (Normal) to surface", isCorrect: true, explanation: "" }] },
            { id: "s2", type: "theory", title: "Surface Integrals", content: "A **surface integral** (or flux) is:\n\n$$ \\int_S \\mathbf{v} \\cdot d\\mathbf{a} $$\n\nWhere $d\\mathbf{a}$ is an infinitesimal area element pointing perpendicular to the surface. For a closed surface, the convention is that $d\\mathbf{a}$ points **outward**." },
            { id: "s3", type: "interactive_canvas", title: "Flux Visualization", content: "Vector field passing through a surface.", interactiveCanvasId: "divergence-interactive" },
            { id: "s5", type: "numerical", title: "Calculation", content: "Flux of $\\mathbf{v} = z \\hat{z}$ through a square of side 2 in the xy plane (z=0)?", numericAnswer: 0, numericTolerance: 0.1, notes: "z=0 so v=0." },
            { id: "s6", type: "quiz", title: "Closed Surface", content: "The flux through a closed surface is related to:", options: [{ id: "A", text: "Curl", isCorrect: false, explanation: "" }, { id: "B", text: "Divergence (Gauss's Law)", isCorrect: true, explanation: "" }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "For a closed surface, the area vector always points ___.", blankAnswer: "outward" }
          ]
        },
        {
          id: "les-131-4",
          title: "Example 1.7",
          description: "Evaluating flux.",
          icon: "Target",
          slides: [
            { id: "s0", type: "example_q", title: "Example 1.7", content: "**Problem:** Calculate the flux of $\\mathbf{v} = 2xz \\hat{x} + (x+2)\\hat{y} + y(z^2-3)\\hat{z}$ through the five sides of a unit cube (open bottom)." },
            { id: "s1", type: "solution", title: "Solution", content: "**Result:** 20 (Total for similar example in text)\n\nWe integrate $\\mathbf{v} \\cdot d\\mathbf{a}$ for each face. \nFor example, Top face ($z=1$): $d\\mathbf{a} = dy dx \\hat{z}$. $\\mathbf{v}\\cdot d\\mathbf{a} = y(1-3) = -2y$.\nIntegral $\\int -2y dy dx = -1$." },
            { id: "s2", type: "quiz", title: "Method", content: "Why do we treat faces separately?", options: [{ id: "A", text: "The normal vector changes direction", isCorrect: true, explanation: "da points different ways for each face." }, { id: "B", text: "We don't have to", isCorrect: false, explanation: "" }] }
          ]
        },
        {
          id: "les-131-5",
          title: "Volume Integrals",
          description: "Integration over 3D space.",
          icon: "Box",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "A volume integral sums:", options: [{ id: "A", text: "Vectors", isCorrect: false, explanation: "Usually scalars." }, { id: "B", text: "Scalar density", isCorrect: true, explanation: "Like mass or charge density." }] },
            { id: "s1", type: "quiz", title: "Concept Check", content: "The volume element in Cartesian is:", options: [{ id: "A", text: "dx dy", isCorrect: false, explanation: "" }, { id: "B", text: "dx dy dz", isCorrect: true, explanation: "" }] },
            { id: "s2", type: "theory", title: "Volume Integrals", content: "A volume integral takes the form:\n\n$$ \\int_V T d\\tau $$\n\nWhere $d\\tau$ is the volume element. If $T$ is a density (charge, mass), the integral gives the total amount. We can also integrate vector functions component-wise: $\\int \\mathbf{v} d\\tau$." },
            { id: "s5", type: "numerical", title: "Calculation", content: "Integral of $T=1$ over a cube of side 3.", numericAnswer: 27, numericTolerance: 0.1 },
            { id: "s6", type: "quiz", title: "Vector Volume Integral", content: "If you integrate a vector field over a volume, the result is a:", options: [{ id: "A", text: "Scalar", isCorrect: false, explanation: "" }, { id: "B", text: "Vector", isCorrect: true, explanation: "Sum of vectors is a vector." }] },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The infinitesimal volume element is denoted by the Greek letter ___.", blankAnswer: "tau" }
          ]
        },
        {
          id: "les-131-6",
          title: "Example 1.8",
          description: "Prism volume integral.",
          icon: "Target",
          slides: [
            { id: "s0", type: "example_q", title: "Example 1.8", content: "**Problem:** Calculate $\\int T d\\tau$ for $T = xyz^2$ over the prism $0<x<1, 0<y<1-x, 0<z<3$." },
            { id: "s1", type: "solution", title: "Solution", content: "**Result:** 3/8 (similar setup)\n\nSet limits carefully. \n1. $\\int_0^3 z^2 dz = 9$.\n2. $\\int_0^{1-x} y dy = (1-x)^2/2$.\n3. $\\int_0^1 x(1-x)^2/2 dx$. \nResult depends on specific prism geometry." },
            { id: "s2", type: "quiz", title: "Limits", content: "Do the order of integration matter?", options: [{ id: "A", text: "Yes, limits depend on variables", isCorrect: true, explanation: "If limits are functions, order matters." }, { id: "B", text: "No, never", isCorrect: false, explanation: "" }] }
          ]
        },
        {
          id: "les-131-7",
          title: "Integration by Parts",
          description: "Vector calculus version.",
          icon: "RefreshCw",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "Integration by parts transfers a derivative from one function to another at the cost of:", options: [{ id: "A", text: "A boundary term", isCorrect: true, explanation: "And a minus sign." }, { id: "B", text: "Nothing", isCorrect: false, explanation: "" }] },
            { id: "s2", type: "theory", title: "Integration by Parts", content: "The rule $\\int_a^b f (dg/dx) dx = [fg]_a^b - \\int_a^b g (df/dx) dx$ extends to vector calculus.\n\nExample with divergence:\n$$ \\int_V f (\\nabla \\cdot \\mathbf{A}) d\\tau = \\oint_S f\\mathbf{A} \\cdot d\\mathbf{a} - \\int_V \\mathbf{A} \\cdot (\\nabla f) d\\tau $$" },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "Integration by parts relates a volume integral to a ___ integral.", blankAnswer: "surface" }
          ]
        }
      ]
    },
    {
      id: "unit-132",
      title: "1.3.2 Fundamental Theorems",
      description: "Gradient, Divergence, and Stokes' Theorems.",
      color: "duo-green",
      lessons: [
        {
          id: "les-132-1",
          title: "Gradient Theorem",
          description: "Fundamental Theorem for Gradients.",
          icon: "Mountain",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "The integral of a derivative is determined by:", options: [{ id: "A", text: "Values at boundaries", isCorrect: true, explanation: "Fundamental theorem of calculus." }, { id: "B", text: "The path taken", isCorrect: false, explanation: "" }] },
            { id: "s2", type: "theory", title: "Gradient Theorem", content: "The **Fundamental Theorem for Gradients** states:\n\n$$ \\int_a^b (\\nabla T) \\cdot d\\mathbf{l} = T(b) - T(a) $$\n\nThis means the line integral of a gradient is path independent." },
            { id: "s3", type: "interactive_canvas", title: "Path Independence", content: "Moving on a scalar field.", interactiveCanvasId: "gradient-interactive" },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "Line integrals of gradients are path ___.", blankAnswer: "independent" }
          ]
        },
        {
          id: "les-132-2",
          title: "Example 1.9",
          description: "Checking Gradient Theorem.",
          icon: "Target",
          slides: [
            { id: "s0", type: "example_q", title: "Example 1.9", content: "**Problem:** Let $T = xy^2$. Check the gradient theorem from (0,0,0) to (2,1,0)." },
            { id: "s1", type: "solution", title: "Solution", content: "**Result:** 2\n\n1. Direct: $T(2,1,0) - T(0,0,0) = 2(1)^2 - 0 = 2$.\n2. Integral: $\\nabla T = y^2\\hat{x} + 2xy\\hat{y}$.\n3. Path along x then y: $\\int y^2 dx$ (y=0) + $\\int 2xy dy$ (x=2).\n4. $0 + \\int_0^1 4y dy = 2$. Matches!" }
          ]
        },
        {
          id: "les-132-3",
          title: "Corollaries",
          description: "Consequences of Gradient Theorem.",
          icon: "List",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "If $\\int_a^b \\mathbf{v} \\cdot d\\mathbf{l}$ is path independent, then $\\oint \\mathbf{v} \\cdot d\\mathbf{l}$ is:", options: [{ id: "A", text: "Zero", isCorrect: true, explanation: "" }, { id: "B", text: "Infinite", isCorrect: false, explanation: "" }] },
            { id: "s2", type: "theory", title: "Corollaries", content: "1. $\\int_a^b (\\nabla T) \\cdot d\\mathbf{l}$ is independent of path.\n2. $\\oint (\\nabla T) \\cdot d\\mathbf{l} = 0$ for any closed loop.\n\nThese properties define a **conservative** field." },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "A field with zero closed loop integral is called ___.", blankAnswer: "conservative" }
          ]
        },
        {
          id: "les-132-4",
          title: "Divergence Theorem",
          description: "Gauss's Theorem.",
          icon: "Maximize",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "The Divergence Theorem relates a volume integral to:", options: [{ id: "A", text: "Line integral", isCorrect: false, explanation: "" }, { id: "B", text: "Surface integral (Flux)", isCorrect: true, explanation: "Across the boundary." }] },
            { id: "s2", type: "theory", title: "Divergence Theorem", content: "Also known as Gauss's Theorem:\n\n$$ \\int_V (\\nabla \\cdot \\mathbf{v}) d\\tau = \\oint_S \\mathbf{v} \\cdot d\\mathbf{a} $$\n\nTotal divergence (sources) inside equals net flux out." },
            { id: "s3", type: "interactive_canvas", title: "Flux & Sources", content: "Visualizing flow out of a box.", interactiveCanvasId: "divergence-interactive" },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The Divergence Theorem converts a volume integral into a ___ integral.", blankAnswer: "surface" }
          ]
        },
        {
          id: "les-132-5",
          title: "Example 1.10",
          description: "Checking Divergence Theorem.",
          icon: "Target",
          slides: [
            { id: "s0", type: "example_q", title: "Example 1.10", content: "**Problem:** Check Divergence Theorem for $\\mathbf{v} = y^2\\hat{x} + (2xy+z^2)\\hat{y} + 2yz\\hat{z}$ on a unit cube." },
            { id: "s1", type: "solution", title: "Solution", content: "**Result:** 2\n\n1. Div: $\\nabla \\cdot \\mathbf{v} = 2(x+y)$.\n2. Vol Int: $\\int 2(x+y) d\\tau = 2$.\n3. Surface Int: Sum flux over 6 faces. Top/Bottom, Front/Back, Left/Right.\n4. Summing them yields 2. Matches!" }
          ]
        },
        {
          id: "les-132-6",
          title: "Stokes' Theorem",
          description: "Fundamental Theorem for Curls.",
          icon: "RotateCw",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "Stokes' Theorem relates a surface integral of curl to:", options: [{ id: "A", text: "Volume integral", isCorrect: false, explanation: "" }, { id: "B", text: "Line integral (Circulation)", isCorrect: true, explanation: "Around the boundary." }] },
            { id: "s2", type: "theory", title: "Stokes' Theorem", content: "$$ \\int_S (\\nabla \\times \\mathbf{v}) \\cdot d\\mathbf{a} = \\oint_P \\mathbf{v} \\cdot d\\mathbf{l} $$\n\nThe flux of curl through a surface equals the circulation around its perimeter." },
            { id: "s3", type: "interactive_canvas", title: "Curl & Circulation", content: "Swirl on surface vs edge flow.", interactiveCanvasId: "curl-interactive" },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The boundary of the surface in Stokes' Theorem is a closed ___.", blankAnswer: "loop" }
          ]
        },
        {
          id: "les-132-7",
          title: "Example 1.11",
          description: "Checking Stokes' Theorem.",
          icon: "Target",
          slides: [
            { id: "s0", type: "example_q", title: "Example 1.11", content: "**Problem:** Check Stokes' Theorem for $\\mathbf{v} = (2xz + 3y^2)\\hat{y} + 4yz^2\\hat{z}$ on a square surface." },
            { id: "s1", type: "solution", title: "Solution", content: "**Result:** 4/3\n\n1. Curl: $\\nabla \\times \\mathbf{v}$.\n2. Surface Int: Integrate curl over square.\n3. Line Int: Integrate $\\mathbf{v} \\cdot d\\mathbf{l}$ around 4 sides.\n4. Both yield same result." }
          ]
        },
        {
          id: "les-132-8",
          title: "Corollaries of Stokes",
          description: "Surface independence.",
          icon: "List",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "Does the flux of curl depend on the shape of the surface?", options: [{ id: "A", text: "Yes", isCorrect: false, explanation: "" }, { id: "B", text: "No, only on the boundary line", isCorrect: true, explanation: "Like a soap film on a wire loop." }] },
            { id: "s2", type: "theory", title: "Surface Independence", content: "Since $\\int (\\nabla \\times \\mathbf{v}) \\cdot d\\mathbf{a} = \\oint \\mathbf{v} \\cdot d\\mathbf{l}$, any surface bounded by the same loop gives the same result.\n\nAlso, $\\oint (\\nabla \\times \\mathbf{v}) \\cdot d\\mathbf{a} = 0$ for any *closed* surface (boundary shrinks to nothing)." },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The flux of curl through any ___ surface is zero.", blankAnswer: "closed" }
          ]
        },
        {
          id: "les-132-9",
          title: "Green's Identities",
          description: "Integration by parts.",
          icon: "RefreshCw",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "Green's identities are derived from:", options: [{ id: "A", text: "Divergence Theorem", isCorrect: true, explanation: "Applied to product of scalar and gradient." }, { id: "B", text: "Stokes' Theorem", isCorrect: false, explanation: "" }] },
            { id: "s2", type: "theory", title: "Green's Identities", content: "**First Identity:**\n$\\int (f \\nabla^2 g + \\nabla f \\cdot \\nabla g) d\\tau = \\oint f \\nabla g \\cdot d\\mathbf{a}$\n\nDerived by applying Div Thm to $\\mathbf{v} = f \\nabla g$." },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "Green's theorem is essentially integration by ___ in 3D.", blankAnswer: "parts" }
          ]
        }
      ]
    },
    {
      id: "unit-133",
      title: "1.3.3 Spherical & Cylindrical",
      description: "Curvilinear Coordinate Systems.",
      color: "duo-green",
      lessons: [
        {
          id: "les-133-1",
          title: "Polar Coordinates",
          description: "2D Curvilinear.",
          icon: "Circle",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "In polar coords, do $\\hat{r}$ and $\\hat{\\theta}$ change direction?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "They depend on position." }, { id: "B", text: "No", isCorrect: false, explanation: "" }] },
            { id: "s2", type: "theory", title: "Polar Coordinates", content: "$x = r \\cos\\theta, y = r \\sin\\theta$.\nUnit vectors:\n$\\hat{r} = \\cos\\theta \\hat{x} + \\sin\\theta \\hat{y}$\n$\\hat{\\theta} = -\\sin\\theta \\hat{x} + \\cos\\theta \\hat{y}$" },
            { id: "s3", type: "interactive_canvas", title: "Spherical/Polar", content: "Visualize the angle dependence.", interactiveCanvasId: "spherical-coords-interactive" },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The polar unit vectors are functions of the angle ___.", blankAnswer: "theta" }
          ]
        },
        {
          id: "les-133-2",
          title: "Spherical Coordinates",
          description: "3D Definition.",
          icon: "Globe",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "In physics notation, $\\theta$ usually represents:", options: [{ id: "A", text: "Azimuthal angle (xy plane)", isCorrect: false, explanation: "" }, { id: "B", text: "Polar angle (from z axis)", isCorrect: true, explanation: "Standard physics convention." }] },
            { id: "s2", type: "theory", title: "Spherical Coordinates", content: "$x = r \\sin\\theta \\cos\\phi$\n$y = r \\sin\\theta \\sin\\phi$\n$z = r \\cos\\theta$\n\n$r$: distance from origin\n$\\theta$: angle from z-axis\n$\\phi$: angle in xy plane" },
            { id: "s3", type: "interactive_canvas", title: "Spherical Grid", content: "Explore r, theta, phi.", interactiveCanvasId: "spherical-coords-interactive" },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The variable $r$ represents the distance from the ___.", blankAnswer: "origin" }
          ]
        },
        {
          id: "les-133-3",
          title: "Spherical Unit Vectors",
          description: "Direction dependence.",
          icon: "Compass",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "Can you pull $\\hat{r}$ out of an integral?", options: [{ id: "A", text: "Yes", isCorrect: false, explanation: "" }, { id: "B", text: "No", isCorrect: true, explanation: "It varies with position." }] },
            { id: "s2", type: "theory", title: "Unit Vectors", content: "$\\hat{r}$ points radially out.\n$\\hat{\\theta}$ points south (tangent to meridian).\n$\\hat{\\phi}$ points east (tangent to latitude).\n\nThey form an orthogonal basis." },
            { id: "s3", type: "interactive_canvas", title: "Unit Vectors", content: "See them rotate.", interactiveCanvasId: "spherical-coords-interactive" },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The spherical unit vectors form an ___ set.", blankAnswer: "orthogonal" }
          ]
        },
        {
          id: "les-133-4",
          title: "Spherical Elements",
          description: "Length and Volume.",
          icon: "Maximize",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "What is the volume element $d\\tau$?", options: [{ id: "A", text: "$dr d\\theta d\\phi$", isCorrect: false, explanation: "Missing Jacobian." }, { id: "B", text: "$r^2 \\sin\\theta dr d\\theta d\\phi$", isCorrect: true, explanation: "" }] },
            { id: "s2", type: "theory", title: "Line and Volume", content: "$d\\mathbf{l} = dr \\hat{r} + r d\\theta \\hat{\\theta} + r \\sin\\theta d\\phi \\hat{\\phi}$\n\n$d\\tau = (dr)(r d\\theta)(r \\sin\\theta d\\phi) = r^2 \\sin\\theta dr d\\theta d\\phi$" },
            { id: "s5", type: "numerical", title: "Volume Calc", content: "Integrate $d\\tau$ for sphere radius R=1. Result/Pi?", numericAnswer: 1.33, numericTolerance: 0.1, notes: "4/3" },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The factor $r^2 \\sin\\theta$ is known as the ___.", blankAnswer: "Jacobian" }
          ]
        },
        {
          id: "les-133-5",
          title: "Gradient (Spherical)",
          description: "Del in spherical.",
          icon: "Mountain",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "Is $\\nabla T = \\partial T/\\partial r \\hat{r} + \\partial T/\\partial \\theta \\hat{\\theta}$...?", options: [{ id: "A", text: "Correct", isCorrect: false, explanation: "Missing metric factors." }, { id: "B", text: "Incorrect", isCorrect: true, explanation: "Need 1/r terms." }] },
            { id: "s2", type: "theory", title: "Gradient", content: "$$ \\nabla T = \\frac{\\partial T}{\\partial r}\\hat{r} + \\frac{1}{r}\\frac{\\partial T}{\\partial \\theta}\\hat{\\theta} + \\frac{1}{r \\sin\\theta}\\frac{\\partial T}{\\partial \\phi}\\hat{\\phi} $$" },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The gradient component in the $\\phi$ direction has a factor of 1 over ___.", blankAnswer: "r sin theta" }
          ]
        },
        {
          id: "les-133-6",
          title: "Div & Curl (Spherical)",
          description: "Complex formulas.",
          icon: "Activity",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "Does $\\nabla \\cdot \\mathbf{v}$ simply sum partials?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "Geometry introduces extra terms." }, { id: "B", text: "Yes", isCorrect: false, explanation: "" }] },
            { id: "s2", type: "theory", title: "Divergence", content: "$$ \\nabla \\cdot \\mathbf{v} = \\frac{1}{r^2}\\frac{\\partial}{\\partial r}(r^2 v_r) + \\frac{1}{r \\sin\\theta}\\frac{\\partial}{\\partial \\theta}(\\sin\\theta v_\\theta) + \\dots $$" },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "You cannot just add partial derivatives in curvilinear coordinates; you must account for the ___ of the unit vectors.", blankAnswer: "derivatives" }
          ]
        },
        {
          id: "les-133-7",
          title: "Example 1.13",
          description: "Volume of Sphere.",
          icon: "Target",
          slides: [
            { id: "s0", type: "example_q", title: "Example 1.13", content: "**Problem:** Calculate volume of sphere radius R using integration." },
            { id: "s1", type: "solution", title: "Solution", content: "**Result:** $\\frac{4}{3}\\pi R^3$\n\n$\\int_0^R r^2 dr \\int_0^\\pi \\sin\\theta d\\theta \\int_0^{2\\pi} d\\phi$\n$= (R^3/3) (2) (2\\pi) = 4/3 \\pi R^3$." }
          ]
        },
        {
          id: "les-133-8",
          title: "Cylindrical Coordinates",
          description: "s, phi, z.",
          icon: "Database",
          slides: [
            { id: "s0", type: "quiz", title: "Concept Check", content: "Cylindrical coords are essentially:", options: [{ id: "A", text: "Polar + z", isCorrect: true, explanation: "" }, { id: "B", text: "Spherical rotated", isCorrect: false, explanation: "" }] },
            { id: "s2", type: "theory", title: "Cylindrical Coordinates", content: "$x = s \\cos\\phi, y = s \\sin\\phi, z = z$.\nUnit vectors: $\\hat{s}, \\hat{\\phi}, \\hat{z}$.\nNote: $\\hat{z}$ is constant, unlike spherical $\\hat{\\theta}$." },
            { id: "s3", type: "interactive_canvas", title: "Cylindrical Grid", content: "Visualizing s, phi, z.", interactiveCanvasId: "component-form-interactive" },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "In cylindrical coordinates, $s$ denotes distance from the ___.", blankAnswer: "z axis" }
          ]
        },
        {
          id: "les-133-9",
          title: "Cylindrical Derivatives",
          description: "Del in cylindrical.",
          icon: "List",
          slides: [
            { id: "s2", type: "theory", title: "Operators", content: "Gradient:\n$\\nabla T = \\frac{\\partial T}{\\partial s}\\hat{s} + \\frac{1}{s}\\frac{\\partial T}{\\partial \\phi}\\hat{\\phi} + \\frac{\\partial T}{\\partial z}\\hat{z}$\n\nDivergence:\n$\\nabla \\cdot \\mathbf{v} = \\frac{1}{s}\\frac{\\partial}{\\partial s}(s v_s) + \\frac{1}{s}\\frac{\\partial v_\\phi}{\\partial \\phi} + \\frac{\\partial v_z}{\\partial z}$" },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "The volume element in cylindrical coordinates is $d\\tau =$ ___.", blankAnswer: "s ds dphi dz" }
          ]
        },
        {
          id: "les-133-10",
          title: "Comparison Strategy",
          description: "When to use what.",
          icon: "CheckCircle",
          slides: [
            { id: "s0", type: "quiz", title: "Strategy", content: "For a charged wire, use:", options: [{ id: "A", text: "Spherical", isCorrect: false, explanation: "" }, { id: "B", text: "Cylindrical", isCorrect: true, explanation: "Matches symmetry." }] },
            { id: "s2", type: "theory", title: "Choosing Coordinates", content: "- Point symmetry -> Spherical.\n- Line/Axis symmetry -> Cylindrical.\n- No symmetry -> Cartesian." },
            { id: "s7", type: "fill_in_blank", title: "Fill in the blank", content: "Always choose the coordinate system that matches the ___ of the problem.", blankAnswer: "symmetry" }
          ]
        }
      ]
    },
    {
      id: "unit-134",
      title: "1.3.4 Foundational Exercises",
      description: "Comprehensive vector calculus review.",
      color: "duo-green",
      lessons: [
        {
          id: "les-134-1",
          title: "Prob 1.29: Path Dependence",
          description: "Testing conservative field.",
          icon: "Move",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 1.29", content: "**Problem:** Calculate $\\int \\mathbf{v} \\cdot d\\mathbf{l}$ for $\\mathbf{v} = x^2\\hat{x} + 2yz\\hat{y} + y^2\\hat{z}$ from origin to (1,1,1) via 3 paths." },
            { id: "s1", type: "solution", title: "Solution", content: "**Result:** 4/3 for all paths.\n\nSince curl is zero, it's path independent. \n$\\nabla \\times \\mathbf{v} = (2y-2y)\\hat{x} + ... = 0$." }
          ]
        },
        {
          id: "les-134-2",
          title: "Prob 1.32: Gradient Check",
          description: "Gradient theorem test.",
          icon: "CheckSquare",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 1.32", content: "**Problem:** Check fundamental theorem for gradients using $T = x^2 + 4xy + 2yz^3$." },
            { id: "s1", type: "solution", title: "Solution", content: "Evaluate T at endpoints. Integrate Gradient. Both match." }
          ]
        },
        {
          id: "les-134-3",
          title: "Prob 1.33: Divergence Check",
          description: "Gauss theorem test.",
          icon: "Box",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 1.33", content: "**Problem:** Test Divergence Theorem for $\\mathbf{v} = xy\\hat{x} + 2yz\\hat{y} + 3zx\\hat{z}$ on a cube." },
            { id: "s1", type: "solution", title: "Solution", content: "Integrate divergence over volume. Integrate flux over 6 faces. Sum matches." }
          ]
        },
        {
          id: "les-134-4",
          title: "Prob 1.34: Stokes Check",
          description: "Triangle path.",
          icon: "RotateCw",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 1.34", content: "**Problem:** Test Stokes' Theorem for $\\mathbf{v} = xy\\hat{x} + ...$ on a triangular surface." },
            { id: "s1", type: "solution", title: "Solution", content: "Compute curl. Integrate over triangle. Compute line integral around 3 sides. Match." }
          ]
        },
        {
          id: "les-134-5",
          title: "Prob 1.38: Unit Vectors",
          description: "Spherical conversion.",
          icon: "Compass",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 1.38", content: "**Problem:** Express $\\hat{r}, \\hat{\\theta}, \\hat{\\phi}$ in terms of $\\hat{x}, \\hat{y}, \\hat{z}$." },
            { id: "s1", type: "solution", title: "Solution", content: "Use geometry. $\\hat{r} = \\sin\\theta\\cos\\phi\\hat{x} + ...$ etc." }
          ]
        },
        {
          id: "les-134-6",
          title: "Prob 1.39: Divergence",
          description: "The Delta Function.",
          icon: "AlertTriangle",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 1.39", content: "**Problem:** Calculate divergence of $\\mathbf{v} = r^{-2} \\hat{r}$." },
            { id: "s1", type: "solution", title: "Solution", content: "Zero everywhere except origin. Integral is $4\\pi$. Thus $4\\pi \\delta^3(\\mathbf{r})$." }
          ]
        },
        {
          id: "les-134-7",
          title: "Prob 1.42: Cylindrical",
          description: "Vector conversion.",
          icon: "Database",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 1.42", content: "**Problem:** Find $\\hat{s}, \\hat{\\phi}$ in terms of x and y." },
            { id: "s1", type: "solution", title: "Solution", content: "$\\\\hat{s} = \\cos\\phi\\hat{x} + \\sin\\phi\\hat{y}$." }
          ]
        },
        {
          id: "les-134-8",
          title: "Prob 1.43: Div/Curl",
          description: "Cylindrical calculus.",
          icon: "Activity",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 1.43", content: "**Problem:** Compute div and curl for $\\mathbf{v} = s(2+\\sin^2\\phi)\\hat{s} + ...$" },
            { id: "s1", type: "solution", title: "Solution", content: "Use cylindrical formulas. Careful with s terms." }
          ]
        },
        {
          id: "les-134-9",
          title: "Prob 1.54: Octant",
          description: "Spherical divergence.",
          icon: "Globe",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 1.54", content: "**Problem:** Check divergence theorem on octant of sphere." },
            { id: "s1", type: "solution", title: "Solution", content: "Curved surface + 3 flat faces. Sum fluxes. Match volume integral." }
          ]
        },
        {
          id: "les-134-10",
          title: "Prob 1.61: Green's",
          description: "Green's Identities.",
          icon: "Book",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 1.61", content: "**Problem:** Derive Green's Second Identity." },
            { id: "s1", type: "solution", title: "Solution", content: "Use $\\mathbf{v} = T \\nabla U$ in divergence theorem. Swap T and U. Subtract." }
          ]
        },
        {
          id: "les-134-11",
          title: "Prob 1.62: Vector Area",
          description: "Surface integral.",
          icon: "Square",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 1.62", content: "**Problem:** Show $\\oint d\\mathbf{a} = 0$ for any closed surface." },
            { id: "s1", type: "solution", title: "Solution", content: "Let $T=1$ in gradient theorem corollary. $\\int \\nabla(1) d\\tau = 0$." }
          ]
        },
        {
          id: "les-134-12",
          title: "Prob 1.64: Delta Sequence",
          description: "Limit definition.",
          icon: "ZoomIn",
          slides: [
            { id: "s0", type: "example_q", title: "Problem 1.64", content: "**Problem:** Show sequence of functions approaches $\\delta$." },
            { id: "s1", type: "solution", title: "Solution", content: "Show peak goes to infinity, width to zero, and integral stays 1." }
          ]
        }
      ]
    },
    {
      id: "unit-13-summary",
      title: "Section Summary",
      description: "Review of Section 1.3.",
      color: "duo-green",
      lessons: [
        {
          id: "les-sum-1",
          title: "Integrals Recap",
          description: "Line, Surface, Volume.",
          icon: "CheckSquare",
          slides: [
            { id: "s0", type: "theory", title: "Integrals", content: "Line integral (Work), Surface integral (Flux), Volume integral (Mass/Charge). Integration is summing infinitesimal elements." }
          ]
        },
        {
          id: "les-sum-2",
          title: "Theorems Recap",
          description: "Fundamental Theorems.",
          icon: "CheckSquare",
          slides: [
            { id: "s0", type: "theory", title: "Fundamental Theorems", content: "Gradient Thm (Line), Divergence Thm (Volume->Surface), Stokes' Thm (Surface->Line). They relate boundary values to internal derivatives." }
          ]
        },
        {
          id: "les-sum-3",
          title: "Coordinates Recap",
          description: "Curvilinear Systems.",
          icon: "CheckSquare",
          slides: [
            { id: "s0", type: "theory", title: "Curvilinear", content: "Spherical ($r, \\theta, \\phi$) and Cylindrical ($s, \\phi, z$). Unit vectors change direction. Volume elements include Jacobians ($r^2\\sin\\theta$, $s$)." }
          ]
        }
      ]
    }
  ]
};