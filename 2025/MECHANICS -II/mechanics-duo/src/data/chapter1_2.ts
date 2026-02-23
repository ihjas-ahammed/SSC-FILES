import { Section } from '../types';

export const SECTION_1_2: Section = {
  "id": "section-1-2",
  "title": "Section 2: Energy & Radial Motion",
  "description": "Effective Potential Energy and Solving the Radial Equation.",
  "color": "duo-red",
  "units": [
    {
      "id": "unit-1-4",
      "title": "Energy & Effective Potential",
      "description": "Understanding orbital shapes through energy diagrams.",
      "color": "duo-red",
      "lessons": [
        {
          "id": "lesson-1-4-1-energy-eq",
          "title": "The Energy Equation",
          "description": "Deriving the effective potential energy.",
          "icon": "Zap",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "Total Mechanical Energy",
              "content": "Since gravity is a conservative force, the total mechanical energy $E$ of the system is constant.\n\n$$E = T + V = \\frac{1}{2}m(\\dot{r}^2 + r^2\\dot{\\theta}^2) - \\frac{GMm}{r}$$\n\nUsing the angular momentum $l = mr^2\\dot{\\theta}$, we replace $\\dot{\\theta}$ to get a radial-only equation:\n$$E = \\frac{1}{2}m\\dot{r}^2 + \\frac{l^2}{2mr^2} - \\frac{GMm}{r}$$"
            },
            {
              "id": "s2-example",
              "type": "example",
              "title": "The Effective Potential",
              "content": "The expression for energy groups naturally into a radial kinetic term $\\frac{1}{2}m\\dot{r}^2$ and two position-dependent terms. We define the **Effective Potential Energy** ($V_{eff}$) as:\n\n$$V_{eff} = \\frac{l^2}{2mr^2} - \\frac{GMm}{r}$$\n\nThis turns a 2D orbit problem into a 1D problem of a particle moving in a potential $V_{eff}$."
            },
            {
              "id": "s3-proof",
              "type": "proof",
              "title": "Interactive Derivation: Turning Points",
              "content": "Let's find what happens at the 'turning points' of an orbit (where the distance from the center stops decreasing and starts increasing, or vice versa).",
              "interactiveSteps": [
                {
                  "stepText": "We start with the energy equation: $E = \\frac{1}{2}m\\dot{r}^2 + V_{eff}(r)$."
                },
                {
                  "prompt": "At a turning point, the radial distance $r$ reaches a local maximum or minimum. What must the radial velocity $\\dot{r}$ be at this point?",
                  "stepText": "At a turning point, $\\dot{r} = 0$.",
                  "options": [
                    { "id": "A", "text": "$\\dot{r}$ is at its maximum.", "isCorrect": false, "explanation": "If it were at a maximum, the radius would be changing very fast, not turning around." },
                    { "id": "B", "text": "$\\dot{r} = 0$", "isCorrect": true, "explanation": "Exactly. To change from moving inward to outward, the radial velocity must briefly be zero." }
                  ]
                },
                {
                  "prompt": "If we substitute $\\dot{r} = 0$ into our energy equation, what relationship do we find?",
                  "stepText": "Setting $\\dot{r} = 0$ leaves us with $E = V_{eff}(r)$.",
                  "options": [
                    { "id": "A", "text": "$E = 0$", "isCorrect": false, "explanation": "Total energy E is a constant and doesn't suddenly become zero." },
                    { "id": "B", "text": "$E = V_{eff}(r)$", "isCorrect": true, "explanation": "All the energy is temporarily stored in the effective potential." }
                  ]
                },
                {
                  "stepText": "Thus, the turning points are the roots of the equation $E = \\frac{l^2}{2mr^2} - \\frac{GMm}{r}$."
                }
              ]
            },
            {
              "id": "s4-numerical",
              "type": "numerical",
              "title": "Calculate Effective Potential",
              "content": "Suppose a satellite has $m=1$, angular momentum $l=2$, and is at a radius $r=2$. The gravitational parameter $GM=1$.\n\nCalculate the numerical value of $V_{eff} = \\frac{l^2}{2mr^2} - \\frac{GMm}{r}$.",
              "numericAnswer": 0.0,
              "numericTolerance": 0.05
            },
            {
              "id": "s5-quiz",
              "type": "quiz",
              "title": "Understanding the Terms",
              "content": "The effective potential $V_{eff}$ contains a positive term $\\frac{l^2}{2mr^2}$. What physical effect does this term represent?",
              "options": [
                { "id": "1", "text": "Gravity pulling the object inward.", "isCorrect": false, "explanation": "Gravity is the negative $-GMm/r$ term." },
                { "id": "2", "text": "The centrifugal \"barrier\" pushing the object outward.", "isCorrect": true, "explanation": "This term acts like a repulsive force, preventing the particle from falling straight into the center if it has angular momentum." },
                { "id": "3", "text": "The total mechanical energy of the system.", "isCorrect": false, "explanation": "Total energy is $E$, not just this term." }
              ]
            },
            {
              "id": "s6-blank",
              "type": "fill_in_blank",
              "title": "Terminology",
              "content": "The sum of the actual potential energy and the radial kinetic energy-like term is called the ___ potential energy.",
              "blankAnswer": "effective"
            }
          ]
        },
        {
          "id": "lesson-1-4-2-orbit-shapes",
          "title": "Orbit Shapes and Energy",
          "description": "How total energy dictates the path.",
          "icon": "Activity",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "Energy Diagram",
              "content": "By plotting $V_{eff}$ against $r$, we can determine the nature of the orbit based on the total energy $E$:\n\n*   **$E > 0$:** Unbounded, 1 turning point. (Hyperbola)\n*   **$E = 0$:** Unbounded, radial speed zero at $\\infty$. (Parabola)\n*   **$E < 0$:** Bounded, 2 turning points ($r_{min}$ and $r_{max}$). (Ellipse)\n*   **$E = V_{min}$:** Constant radius. (Circle)"
            },
            {
              "id": "s2-canvas",
              "type": "theory",
              "title": "Visualization: Effective Potential Well",
              "content": "The curve shows the potential well. The horizontal lines represent different total energy levels.",
              "canvasId": "effective-potential"
            },
            {
              "id": "s3-proof",
              "type": "proof",
              "title": "Analyzing a Circular Orbit",
              "content": "Let's mathematically prove the condition for a circular orbit.",
              "interactiveSteps": [
                {
                  "stepText": "A circular orbit means the radius $r$ is constant."
                },
                {
                  "prompt": "If $r$ is constant, what happens to the particle on the Energy Diagram?",
                  "stepText": "It must sit exactly at the minimum of the $V_{eff}$ curve.",
                  "options": [
                    { "id": "A", "text": "It oscillates between two turning points.", "isCorrect": false, "explanation": "That would be an ellipse." },
                    { "id": "B", "text": "It sits at the global minimum of $V_{eff}$.", "isCorrect": true, "explanation": "At the minimum, $\\dot{r}=0$ and $\\ddot{r}=0$, allowing a perfectly stable constant radius." }
                  ]
                },
                {
                  "prompt": "How do we find the minimum of $V_{eff}(r)$ mathematically?",
                  "stepText": "Set the derivative to zero: $\\frac{dV_{eff}}{dr} = 0$.",
                  "options": [
                    { "id": "A", "text": "Set $V_{eff} = 0$", "isCorrect": false, "explanation": "That finds the roots, not the minimum." },
                    { "id": "B", "text": "Set $\\frac{dV_{eff}}{dr} = 0$", "isCorrect": true, "explanation": "Calculus: local minima occur where the first derivative is zero." }
                  ]
                },
                {
                  "stepText": "Taking the derivative: $\\frac{d}{dr}(\\frac{l^2}{2mr^2} - \\frac{GMm}{r}) = -\\frac{l^2}{mr^3} + \\frac{GMm}{r^2} = 0$."
                },
                {
                  "stepText": "Solving for $r$ gives the circular orbit radius: $r_0 = \\frac{l^2}{GMm^2}$."
                }
              ]
            },
            {
              "id": "s4-numerical",
              "type": "numerical",
              "title": "Radial Kinetic Energy",
              "content": "A planet has a total energy $E = -10$ units. At its current position, its effective potential energy is $V_{eff} = -15$ units.\n\nUsing $\\frac{1}{2}m\\dot{r}^2 = E - V_{eff}$, what is its radial kinetic energy?",
              "numericAnswer": 5,
              "numericTolerance": 0.1
            },
            {
              "id": "s5-quiz",
              "type": "quiz",
              "title": "Unbounded Orbits",
              "content": "If a comet comes from deep space (infinity) with some initial speed $v_0 > 0$, what type of orbit will it follow?",
              "options": [
                { "id": "1", "text": "Elliptical", "isCorrect": false, "explanation": "Ellipses have $E < 0$ and cannot reach infinity." },
                { "id": "2", "text": "Parabolic", "isCorrect": false, "explanation": "Parabolic means speed at infinity is exactly 0 ($E = 0$)." },
                { "id": "3", "text": "Hyperbolic", "isCorrect": true, "explanation": "With $v_0 > 0$ at infinity, total energy $E > 0$, which dictates a hyperbola." }
              ]
            },
            {
              "id": "s6-blank",
              "type": "fill_in_blank",
              "title": "Bounded Motion",
              "content": "If the total energy is negative, the particle is trapped in a potential well, and its motion is ___.",
              "blankAnswer": "bounded"
            }
          ]
        }
      ]
    },
    {
      "id": "unit-1-5",
      "title": "Solving the Radial Equation",
      "description": "Integrating the energy equation to find time.",
      "color": "duo-red",
      "lessons": [
        {
          "id": "lesson-1-5-1-radial-eq",
          "title": "Finding Time as a Function of Radius",
          "description": "Integrating the isolated radial velocity.",
          "icon": "Clock",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "The Radial Equation of Motion",
              "content": "The radial equation $m\\ddot{r} - \\frac{l^2}{mr^3} = -\\frac{GMm}{r^2}$ is a second-order differential equation. \n\nWe can solve for motion by using the energy integral we just derived:\n$\\frac{1}{2}m\\dot{r}^2 = E - \\left( \\frac{l^2}{2mr^2} - \\frac{GMm}{r} \\right)$"
            },
            {
              "id": "s2-example",
              "type": "example",
              "title": "Isolating dt",
              "content": "By solving for $\\frac{dr}{dt}$, we can separate variables to find the time $t$ it takes to reach a specific radius $r$:\n\n$$dt = \\frac{dr}{\\sqrt{\\frac{2}{m}(E - V_{eff})}}$$\n\nIntegrating this gives $t(r)$. While in principle invertible to $r(t)$, the integral is often incredibly complex."
            },
            {
              "id": "s3-proof",
              "type": "proof",
              "title": "Setting up the Integral",
              "content": "Let's walk through isolating the derivative.",
              "interactiveSteps": [
                {
                  "stepText": "Start with: $\\frac{1}{2}m\\left(\\frac{dr}{dt}\\right)^2 = E - \\frac{l^2}{2mr^2} + \\frac{GMm}{r}$."
                },
                {
                  "prompt": "First, multiply by $\\frac{2}{m}$. What do you get on the left side?",
                  "stepText": "$\\left(\\frac{dr}{dt}\\right)^2 = \\frac{2}{m}\\left(E - \\frac{l^2}{2mr^2} + \\frac{GMm}{r}\\right)$",
                  "options": [
                    { "id": "A", "text": "$\\left(\\frac{dr}{dt}\\right)^2$", "isCorrect": true, "explanation": "Correct. We multiplied out the $m/2$." },
                    { "id": "B", "text": "$m\\left(\\frac{dr}{dt}\\right)^2$", "isCorrect": false, "explanation": "You need to eliminate the mass from the left side." }
                  ]
                },
                {
                  "prompt": "Next, take the square root of both sides. What does this give us?",
                  "stepText": "$\\frac{dr}{dt} = \\pm \\left[ \\frac{2}{m}\\left(E - \\frac{l^2}{2mr^2} + \\frac{GMm}{r}\\right) \\right]^{1/2}$",
                  "options": [
                    { "id": "A", "text": "The radial velocity $\\dot{r}$", "isCorrect": true, "explanation": "Taking the square root isolates $dr/dt$, which is the radial velocity." },
                    { "id": "B", "text": "The radial acceleration $\\ddot{r}$", "isCorrect": false, "explanation": "Acceleration is the second derivative." }
                  ]
                },
                {
                  "stepText": "Finally, separating $dt$ and $dr$ gives the definite integral:\n $\\int_{r_0}^{r(t)} \\frac{dr}{\\sqrt{\\frac{2}{m}(E - V_{eff})}} = \\int_0^t dt = t$"
                }
              ]
            },
            {
              "id": "s4-numerical",
              "type": "numerical",
              "title": "Calculate Radial Speed",
              "content": "At a certain point in an orbit, $\\frac{2}{m}(E - V_{eff}) = 16$. \n\nWhat is the magnitude of the radial speed $|\\frac{dr}{dt}|$?",
              "numericAnswer": 4,
              "numericTolerance": 0.01
            },
            {
              "id": "s5-quiz",
              "type": "quiz",
              "title": "Constants of Integration",
              "content": "When solving this integral, the total energy $E$ and angular momentum $l$ appear inside. What role do they play?",
              "options": [
                { "id": "1", "text": "They change over time during the integration.", "isCorrect": false, "explanation": "They are conserved quantities." },
                { "id": "2", "text": "They act as arbitrary constants of integration.", "isCorrect": true, "explanation": "Because they are conserved, they behave as constant parameters defined by the initial conditions of the orbit." },
                { "id": "3", "text": "They cancel each other out.", "isCorrect": false, "explanation": "They do not." }
              ]
            },
            {
              "id": "s6-blank",
              "type": "fill_in_blank",
              "title": "Math Strategy",
              "content": "We obtained the time $t$ by evaluating a definite ___.",
              "blankAnswer": "integral"
            }
          ]
        }
      ]
    }
  ]
};