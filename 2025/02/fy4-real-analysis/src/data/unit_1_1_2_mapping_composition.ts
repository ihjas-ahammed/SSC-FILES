import { Unit } from '../types';

export const UNIT_1_1_2: Unit = {
  id: "unit-1-1-2",
  title: "Mapping & Composition",
  description: "Cartesian Products, Functions, and Compositions",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-1-2-d1", title: "Definition 1.1.5: Cartesian Product", description: "Combining sets into pairs", icon: "Grid",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "Are the ordered pairs (1,2) and (2,1) the same?", options: [{ id: "A", text: "No, order matters", isCorrect: true, explanation: "In ordered pairs, the position dictates the meaning." }, { id: "B", text: "Yes", isCorrect: false, explanation: "That is only true for sets, not ordered pairs." }] },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "What mathematical operation creates a set of all possible ordered pairs from two sets?", options: [{ id: "A", text: "Cartesian Product", isCorrect: true, explanation: "It forms $A \\times B$." }, { id: "B", text: "Intersection", isCorrect: false, explanation: "Intersection finds common elements." }] },
        { id: "s2", type: "theory", title: "Cartesian Product", content: "**Definition 1.1.5:** If $A$ and $B$ are nonempty sets, the Cartesian product $A \\times B$ is the set of all ordered pairs $(a, b)$ with $a \\in A$ and $b \\in B$.\n\nFormally:\n$A \\times B := \\{(a, b) : a \\in A, b \\in B\\}$" },
        { id: "s3", type: "interactive_canvas", title: "Generating Pairs", content: "Observe how every element in A pairs with every element in B.", interactiveCanvasId: "cartesian-product-canvas" },
        { id: "s4", type: "numerical", title: "Calculate Size", content: "If A has 3 elements and B has 5 elements, how many ordered pairs are in $A \\times B$?", numericAnswer: 15, numericTolerance: 0 },
        { id: "s5", type: "fill_in_blank", title: "Notation", content: "The Cartesian product of A and B is denoted by A ___ B.", blankAnswer: "x" }
      ]
    },
    {
      id: "les-1-1-2-fig2", title: "Figure 1.1.2: Grid Visualization", description: "Cartesian products as discrete grids", icon: "LayoutGrid",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "Can we visualize the Cartesian product as a grid?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "One set forms the X axis, the other forms the Y axis." }, { id: "B", text: "No", isCorrect: false, explanation: "It maps perfectly to a 2D coordinate system." }] },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "If A and B are subsets of the real numbers, what mathematical space do we use to plot $A \\times B$?", options: [{ id: "A", text: "The Cartesian coordinate plane", isCorrect: true, explanation: "Also known as the xy-plane." }, { id: "B", text: "A Venn Diagram", isCorrect: false, explanation: "Venn diagrams don't handle ordered pairs well." }] },
        { id: "s2", type: "theory", title: "Visualizing $A \\times B$", content: "We often draw a diagram to indicate the Cartesian product.\n\nIf $A = \\{1, 2, 3\\}$ and $B = \\{1, 5\\}$, the set $A \\times B$ consists of six distinct points in the plane. It creates a discrete grid pattern." },
        { id: "s3", type: "interactive_canvas", title: "Discrete Grid", content: "Plotting discrete points on the Cartesian plane.", interactiveCanvasId: "cartesian-grid-canvas" }
      ]
    },
    {
      id: "les-1-1-2-fig3", title: "Figure 1.1.3: Continuous Region", description: "Cartesian products of intervals", icon: "Square",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "If sets A and B are continuous intervals, what shape does their Cartesian product form?", options: [{ id: "A", text: "A rectangle", isCorrect: true, explanation: "The intervals act as width and height." }, { id: "B", text: "A single line", isCorrect: false, explanation: "It spans two dimensions." }] },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "Is $A \\times B$ always a discrete set of isolated points?", options: [{ id: "A", text: "No, it can be a continuous region", isCorrect: true, explanation: "If the input sets are intervals of real numbers." }, { id: "B", text: "Yes", isCorrect: false, explanation: "Think about $\\mathbb{R} \\times \\mathbb{R}$." }] },
        { id: "s2", type: "theory", title: "Intervals as Rectangles", content: "When sets are intervals, e.g., $A := \\{x \\in \\mathbb{R} : 1 \\le x \\le 2\\}$ and $B := \\{y \\in \\mathbb{R} : 0 \\le y \\le 1\\}$, the Cartesian product $A \\times B$ forms a solid rectangular region in the plane." },
        { id: "s3", type: "interactive_canvas", title: "Continuous Region", content: "Visualizing the Cartesian product of two continuous intervals.", interactiveCanvasId: "cartesian-rectangle-canvas" },
        { id: "s4", type: "numerical", title: "Area Calculation", content: "What is the area of the rectangle formed by $A \\times B$ if $A = [1,3]$ and $B = [0,2]$?", numericAnswer: 4, numericTolerance: 0 }
      ]
    },
    {
      id: "les-1-1-2-d2", title: "Definition 1.1.6: Functions", description: "Unique mappings", icon: "ArrowRightLeft",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "Can a mathematical function map one input to two different outputs?", options: [{ id: "A", text: "No, outputs must be unique", isCorrect: true, explanation: "This is the fundamental definition of a function." }, { id: "B", text: "Yes", isCorrect: false, explanation: "That would be a relation, not a function." }] },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "What do we call the set of all valid inputs for a function?", options: [{ id: "A", text: "Domain", isCorrect: true, explanation: "Denoted usually as D(f)." }, { id: "B", text: "Range", isCorrect: false, explanation: "Range is the set of outputs." }] },
        { id: "s2", type: "theory", title: "Defining a Function", content: "**Definition 1.1.6:** A function $f$ from $A$ to $B$ is a set of ordered pairs in $A \\times B$ such that for each $a \\in A$ there exists a **unique** $b \\in B$ with $(a, b) \\in f$.\n\n- $D(f)$ is the domain of $f$ (all inputs).\n- $R(f)$ is the range (all actual outputs)." },
        { id: "s3", type: "interactive_canvas", title: "Mapping Inputs to Outputs", content: "Observe how every input points to exactly one output.", interactiveCanvasId: "function-definition-canvas" },
        { id: "s4", type: "fill_in_blank", title: "Graphical Check", content: "The property that an input has a unique output is graphically known as the ___ line test.", blankAnswer: "vertical" }
      ]
    },
    {
      id: "les-1-1-2-fig4", title: "Figure 1.1.4: Function Graphs", description: "Visualizing the vertical line test", icon: "LineChart",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "What visual test checks if a plotted curve represents a valid function?", options: [{ id: "A", text: "Vertical line test", isCorrect: true, explanation: "It ensures one y for every x." }, { id: "B", text: "Horizontal line test", isCorrect: false, explanation: "This tests for injectivity, not if it's a function." }] },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "Can a horizontal line cross a function's graph more than once?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "Yes, many inputs can map to the same output (e.g., $y=x^2$)." }, { id: "B", text: "No", isCorrect: false, explanation: "That rule only applies to one-to-one (injective) functions." }] },
        { id: "s2", type: "theory", title: "Functions as Graphs", content: "A function can be visualized as a graph passing the **vertical line test**.\n\nEvery vertical line $x = a$ with $a \\in A$ intersects the graph of $f$ exactly once. If $b = f(a)$, $b$ is the image of $a$ under $f$." },
        { id: "s3", type: "interactive_canvas", title: "Vertical Line Test", content: "Drag the vertical line to see how it only ever hits the function curve once.", interactiveCanvasId: "function-graph-canvas" },
        { id: "s4", type: "numerical", title: "Circle Test", content: "If a circle is graphed on the plane, what is the maximum number of times a vertical line can intersect it?", numericAnswer: 2, numericTolerance: 0 }
      ]
    },
    {
      id: "les-1-1-2-d3", title: "Definition 1.1.11: Inverse Functions", description: "Reversing the mapping", icon: "Undo2",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "When does a function have a valid inverse function?", options: [{ id: "A", text: "When it is a bijection", isCorrect: true, explanation: "It must be both injective (one-to-one) and surjective (onto)." }, { id: "B", text: "Always", isCorrect: false, explanation: "Not all functions can be reversed uniquely." }] },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "If $f(x) = y$, what does $f^{-1}(y)$ equal?", options: [{ id: "A", text: "$x$", isCorrect: true, explanation: "The inverse perfectly undoes the original function." }, { id: "B", text: "$1/y$", isCorrect: false, explanation: "Inverse notation $f^{-1}$ means functional inverse, not reciprocal." }] },
        { id: "s2", type: "theory", title: "Inverse Functions", content: "**Definition 1.1.11:** If $f: A \\to B$ is a bijection, then $g := \\{(b, a) \\in B \\times A : (a, b) \\in f\\}$ is a function on $B$ into $A$.\n\nThis function is called the **inverse function** of $f$, denoted $f^{-1}$." },
        { id: "s3", type: "interactive_canvas", title: "Swapping Axes", content: "Observe how taking an inverse effectively reflects the graph across the line y = x.", interactiveCanvasId: "inverse-function-canvas" },
        { id: "s4", type: "numerical", title: "Compute Inverse", content: "If $f(x) = 2x / (x-1)$ is a bijection, and we know $f(2) = 4$, what is $f^{-1}(4)$?", numericAnswer: 2, numericTolerance: 0 },
        { id: "s5", type: "fill_in_blank", title: "Concept Check", content: "For an inverse to exist, the function must be both injective and ___.", blankAnswer: "surjective" }
      ]
    },
    {
      id: "les-1-1-2-d4", title: "Definition 1.1.12: Composition", description: "Chaining functions together", icon: "Link",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "How is the composition of $f$ and $g$ written mathematically?", options: [{ id: "A", text: "$g \\circ f$", isCorrect: true, explanation: "This means $g(f(x))$." }, { id: "B", text: "$f \\times g$", isCorrect: false, explanation: "This implies multiplication." }] },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "To evaluate $(g \\circ f)(x)$, which function do you apply first?", options: [{ id: "A", text: "$f$", isCorrect: true, explanation: "You work from the inside out: $g(f(x))$." }, { id: "B", text: "$g$", isCorrect: false, explanation: "The closest function to x is applied first." }] },
        { id: "s2", type: "theory", title: "Composition of Functions", content: "**Definition 1.1.12:** If $f: A \\to B$ and $g: B \\to C$, and if $R(f) \\subseteq D(g)$, then the composite function $g \\circ f$ is the function from $A$ into $C$ defined by:\n\n$(g \\circ f)(x) := g(f(x))$" },
        { id: "s3", type: "interactive_canvas", title: "Chaining Machines", content: "Think of functions as machines. The output of f becomes the input of g.", interactiveCanvasId: "composition-function-canvas" },
        { id: "s4", type: "fill_in_blank", title: "Concept Check", content: "The domain of $g \\circ f$ is a subset of the domain of ___.", blankAnswer: "f" }
      ]
    },
    {
      id: "les-1-1-2-e1", title: "Examples 1.1.13", description: "Evaluating Compositions", icon: "Calculator",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "Is $f \\circ g$ always equal to $g \\circ f$?", options: [{ id: "A", text: "No, composition is not commutative", isCorrect: true, explanation: "The order of chaining matters entirely." }, { id: "B", text: "Yes", isCorrect: false, explanation: "This is a common misconception." }] },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "If $f(x) = x^2$ and $g(x) = x+1$, what is $f(g(x))$?", options: [{ id: "A", text: "$(x+1)^2$", isCorrect: true, explanation: "You plug the entirety of g(x) into f's x." }, { id: "B", text: "$x^2 + 1$", isCorrect: false, explanation: "This would be $g(f(x))$." }] },
        { id: "s2", type: "theory", title: "Order Matters!", content: "**Example 1.1.13:** The order of composition is critical.\n\nIf $f(x) := 2x$ and $g(x) := 3x^2 - 1$, then:\n- $(g \\circ f)(x) = 3(2x)^2 - 1 = 12x^2 - 1$.\n- $(f \\circ g)(x) = 2(3x^2 - 1) = 6x^2 - 2$.\n\nClearly, $g \\circ f \\neq f \\circ g$." },
        { id: "s3", type: "numerical", title: "Compute Composite", content: "If $f(x) = 1 - x^2$ and $g(x) = \\sqrt{x}$, what is the value of $(g \\circ f)(0)$?", numericAnswer: 1, numericTolerance: 0 }
      ]
    }
  ]
};