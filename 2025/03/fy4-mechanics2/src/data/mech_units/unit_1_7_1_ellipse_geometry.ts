import { Unit } from '../../types';

export const UNIT_1_7_1_ELLIPSE_GEOMETRY: Unit = {
  id: "unit-1-7-1",
  title: "Ellipse Geometry",
  description: "Defining the Shape",
  color: "duo-indigo",
  lessons: [
    {
      id: "les-1-7-1-1",
      title: "Defining an Ellipse",
      description: "Visual Definition",
      icon: "Circle",
      slides: [
        {
          id: "priming",
          type: "quiz",
          title: "Priming Check",
          content: "You probably know how to draw a circle with a pin and string. How many pins do you need to draw an ellipse?",
          options: [
            { id: "A", text: "One", isCorrect: false, explanation: "That makes a circle." },
            { id: "B", text: "Two", isCorrect: true, explanation: "These two points are called the 'foci' (plural of focus)." }
          ]
        },
        {
          id: "anchor",
          type: "theory",
          title: "The String Definition",
          content: "An ellipse is the locus of points whose distances from two fixed points (foci) sum to a constant.\n\n$$ r + r' = 2a $$\n\nWhere $2a$ is the length of the major axis."
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "String Construction",
          content: "The sum of the red lines ($r+r'$) remains constant as point P moves.",
          interactiveCanvasId: "ellipse-definition"
        }
      ]
    },
    {
      id: "les-1-7-1-2",
      title: "Deriving the Equation",
      description: "From Geometry to Algebra",
      icon: "FunctionSquare",
      slides: [
        {
          id: "setup",
          type: "theory",
          title: "Polar Coordinates",
          content: "We place the Sun at one focus (origin). Let the distance between foci be $2f$. The other focus is at distance $2f$ from the origin along the axis."
        },
        {
          id: "deriv",
          type: "proof",
          title: "Using Law of Cosines",
          content: "Derive the polar equation $r(\\theta)$.",
          proofSteps: [
            "Law of Cosines on triangle Sun-Planet-EmptyFocus:",
            "$r'^2 = r^2 + (2f)^2 - 2r(2f)\\cos(\\pi - \\theta)$",
            "Substitute $r' = 2a - r$: $(2a - r)^2 = r^2 + 4f^2 + 4rf\\cos\\theta$",
            "Expand and simplify: $4a^2 - 4ar + r^2 = r^2 + 4f^2 + 4rf\\cos\\theta$",
            "Group $r$ terms: $a^2 - f^2 = r(a + f\\cos\\theta)$",
            "Define eccentricity $e = f/a$. Then $f = ae$.",
            "Result: $r = \\frac{a(1-e^2)}{1 + e\\cos\\theta}$"
          ]
        }
      ]
    },
    {
      id: "les-1-7-1-3",
      title: "Conic Sections",
      description: "General Form",
      icon: "LayoutList",
      slides: [
        {
          id: "def",
          type: "theory",
          title: "General Equation",
          content: "The equation for any conic section (Circle, Ellipse, Parabola, Hyperbola) can be written as:\n\n$$ r = \\frac{p}{1 + e\\cos\\theta} $$\n\nWhere $p$ is the 'parameter' (semi-latus rectum) and $e$ is the eccentricity."
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Eccentricity Families",
          content: "See how changing 'e' changes the shape.",
          interactiveCanvasId: "conic-eccentricity"
        }
      ]
    },
    {
      id: "les-1-7-1-4",
      title: "Eccentricity Table",
      description: "e vs Energy",
      icon: "Table",
      slides: [
        {
          id: "table",
          type: "theory",
          title: "Classification Table",
          content: "| Shape | Eccentricity ($e$) | Energy ($E$) |\n|---|---|---|\n| **Circle** | $e = 0$ | Minimum |\n| **Ellipse** | $0 < e < 1$ | Negative |\n| **Parabola** | $e = 1$ | Zero |\n| **Hyperbola** | $e > 1$ | Positive |"
        },
        {
          id: "check",
          type: "quiz",
          title: "Concept Check",
          content: "If a comet enters the solar system with $e=1.5$, will it return?",
          options: [
            { id: "A", text: "Yes", isCorrect: false, explanation: "Only ellipses ($e<1$) are closed orbits." },
            { id: "B", text: "No", isCorrect: true, explanation: "Hyperbolas ($e>1$) are open orbits. It swings by once and leaves forever." }
          ]
        }
      ]
    }
  ]
};