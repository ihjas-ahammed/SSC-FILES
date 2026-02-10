import { Section } from '../types';

export const SECTION_2_6: Section = {
  "id": "section-2-6",
  "title": "Section 2.6: Extended Real Numbers",
  "description": "Handling infinity: The set $\\mathbb{R}^*$ and limits at infinity.",
  "color": "duo-green",
  "units": [
    {
      "id": "unit-2-6-1",
      "title": "The Extended Reals",
      "description": "Adding points at infinity.",
      "color": "duo-green",
      "lessons": [
        {
          "id": "lesson-2-6-def",
          "title": "Definition of R*",
          "description": "Adding +∞ and -∞.",
          "icon": "Infinity",
          "slides": [
            {
              "id": "s1-def",
              "type": "theory",
              "title": "Extended Real Numbers",
              "content": "The **extended real number system**, denoted $\\mathbb{R}^*$ (or $[-\\infty, +\\infty]$), consists of the set of real numbers $\\mathbb{R}$ adjoined with two symbols: $+\\infty$ and $-\\infty$.\n\n$$\\mathbb{R}^* := \\mathbb{R} \\cup \\{-\\infty, +\\infty\\}$$"
            },
            {
              "id": "s2-order",
              "type": "theory",
              "title": "Order Properties",
              "content": "We preserve the order of $\\mathbb{R}$ and extend it:\n\nFor every $x \\in \\mathbb{R}$:\n$$-\\infty < x < +\\infty$$\n\nAlso, $-\\infty < +\\infty$."
            },
            {
              "id": "q-real",
              "type": "quiz",
              "title": "Concept Check",
              "content": "Is $+\\infty$ a real number?",
              "options": [
                { "id": "1", "text": "Yes", "isCorrect": false, "explanation": "Real numbers are finite." },
                { "id": "2", "text": "No", "isCorrect": true, "explanation": "It is an element of the Extended system, but not $\\mathbb{R}$." }
              ]
            }
          ]
        },
        {
          "id": "lesson-2-6-arithmetic",
          "title": "Arithmetic with Infinity",
          "description": "Rules for calculating with ∞.",
          "icon": "PlusCircle",
          "slides": [
            {
              "id": "s1-rules",
              "type": "theory",
              "title": "Standard Operations",
              "content": "For any $a \\in \\mathbb{R}$:\n\n*   $a + \\infty = +\\infty$\n*   $a - \\infty = -\\infty$\n*   If $a > 0$, $a \\cdot (+\\infty) = +\\infty$\n*   If $a < 0$, $a \\cdot (+\\infty) = -\\infty$\n*   $\\frac{a}{\\infty} = 0$"
            },
            {
              "id": "s2-indeterm",
              "type": "theory",
              "title": "Undefined Operations",
              "content": "Some operations remain undefined (Indeterminate forms) to avoid contradictions:\n\n*   $\\infty - \\infty$\n*   $0 \\cdot \\infty$\n*   $\\frac{\\infty}{\\infty}$"
            },
            {
              "id": "q-calc",
              "type": "quiz",
              "title": "Calculation",
              "content": "What is $5 \\cdot (-\\infty)$?",
              "options": [
                { "id": "1", "text": "$+\\infty$", "isCorrect": false, "explanation": "Positive times negative is negative." },
                { "id": "2", "text": "$-\\infty$", "isCorrect": true, "explanation": "Magnitude is infinite, sign is negative." }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "unit-2-6-2",
      "title": "Supremum & Infimum in R*",
      "description": "Every set has a supremum in R*.",
      "color": "duo-green",
      "lessons": [
        {
          "id": "lesson-2-6-completeness",
          "title": "Unbounded Sets",
          "description": "Supremum of unbounded sets.",
          "icon": "Maximize",
          "slides": [
            {
              "id": "s1-unbounded",
              "type": "theory",
              "title": "Supremum in $\\mathbb{R}^*$",
              "content": "In $\\mathbb{R}$, unbounded sets (like $\\mathbb{N}$) do not have a supremum.\n\nIn $\\mathbb{R}^*$, we define:\n*   If $S$ is not bounded above, $\\sup S = +\\infty$.\n*   If $S$ is not bounded below, $\\inf S = -\\infty$."
            },
            {
              "id": "s2-empty",
              "type": "theory",
              "title": "The Empty Set",
              "content": "By convention:\n\n*   $\\sup \\emptyset = -\\infty$\n*   $\\inf \\emptyset = +\\infty$\n\nThis maintains the property that $\\sup S$ is the *least* upper bound (any number is an upper bound of empty set, $-\\infty$ is the smallest)."
            },
            {
              "id": "q-sup-N",
              "type": "quiz",
              "title": "Check",
              "content": "What is $\\sup \\mathbb{N}$ in $\\mathbb{R}^*$?",
              "options": [
                { "id": "1", "text": "Does not exist", "isCorrect": false, "explanation": "It exists in the extended system." },
                { "id": "2", "text": "$+\\infty$", "isCorrect": true, "explanation": "The set is unbounded above." }
              ]
            }
          ]
        }
      ]
    }
  ]
};