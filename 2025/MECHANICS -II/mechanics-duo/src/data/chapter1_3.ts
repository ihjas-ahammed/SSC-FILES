import { Section } from '../types';

export const SECTION_1_3: Section = {
  "id": "section-1-3",
  "title": "Section 3: The Orbit Equation & Kepler Revisited",
  "description": "Determining the path of the orbit and proving Kepler's empirical laws.",
  "color": "duo-green",
  "units": [
    {
      "id": "unit-1-6",
      "title": "The Equation of the Orbit",
      "description": "Transforming the radial equation to find the path r(θ).",
      "color": "duo-green",
      "lessons": [
        {
          "id": "lesson-1-6-1-orbit-eq",
          "title": "Finding the Orbit Path",
          "description": "Using a mathematical trick to solve for r(θ).",
          "icon": "Aperture",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "Why r(θ)?",
              "content": "To describe the physical shape of an orbit, we often aren't interested in the position at a specific time $t$. Instead, we want the path: the relationship between the radius $r$ and the angle $\\theta$.\n\nTo find $r(\\theta)$, we need to eliminate time from our differential equations. We do this by using the chain rule:\n$$\\frac{dr}{dt} = \\frac{dr}{d\\theta}\\frac{d\\theta}{dt} = \\frac{dr}{d\\theta}\\dot{\\theta}$$"
            },
            {
              "id": "s2-example",
              "type": "example",
              "title": "The Substitution Variable 'u'",
              "content": "Even after eliminating $dt$, the differential equation is extremely complex and difficult to integrate directly.\n\nThe 'sophisticated technique' to solve this introduces a new variable $u$, defined as the inverse of $r$:\n$$u = \\frac{1}{r}$$\nThis seemingly simple substitution miraculously simplifies the math."
            },
            {
              "id": "s3-proof",
              "type": "proof",
              "title": "Interactive Proof: Transforming the Equation",
              "content": "Let's see how substituting $u = 1/r$ transforms our differential equation.",
              "interactiveSteps": [
                {
                  "stepText": "We know $l = mr^2\\dot{\\theta}$. In terms of $u$, this is $\\dot{\\theta} = \\frac{lu^2}{m}$."
                },
                {
                  "prompt": "Using the chain rule $\\frac{dr}{dt} = \\frac{dr}{d\\theta}\\dot{\\theta}$ and $r = u^{-1}$, what is $\\frac{dr}{dt}$ in terms of $u$?",
                  "stepText": "Since $\\frac{dr}{d\\theta} = -u^{-2}\\frac{du}{d\\theta}$, we get $\\frac{dr}{dt} = -u^{-2}\\frac{du}{d\\theta} \\left(\\frac{lu^2}{m}\\right) = -\\frac{l}{m}\\frac{du}{d\\theta}$.",
                  "options": [
                    { "id": "A", "text": "$\\frac{dr}{dt} = \\frac{l}{m}\\frac{du}{d\\theta}$", "isCorrect": false, "explanation": "Don't forget the negative sign from differentiating $u^{-1}$!" },
                    { "id": "B", "text": "$\\frac{dr}{dt} = -\\frac{l}{m}\\frac{du}{d\\theta}$", "isCorrect": true, "explanation": "The $u^{-2}$ and $u^2$ cancel beautifully, leaving a simple constant coefficient." }
                  ]
                },
                {
                  "stepText": "Taking the second derivative with respect to time yields: $\\ddot{r} = -\\frac{l^2u^2}{m^2}\\frac{d^2u}{d\\theta^2}$."
                },
                {
                  "prompt": "Substitute this $\\ddot{r}$ into the original radial equation $\\ddot{r} - \\frac{l^2}{m^2r^3} = -\\frac{GM}{r^2}$. What form does it take?",
                  "stepText": "It simplifies to: $\\frac{d^2u}{d\\theta^2} + u = \\frac{GMm^2}{l^2}$.",
                  "options": [
                    { "id": "A", "text": "$\\frac{d^2u}{d\\theta^2} + u = \\frac{GMm^2}{l^2}$", "isCorrect": true, "explanation": "Correct! Notice how this looks exactly like the equation for a Simple Harmonic Oscillator!" },
                    { "id": "B", "text": "$\\frac{d^2u}{d\\theta^2} - u^2 = 0$", "isCorrect": false, "explanation": "Check your algebraic reduction." }
                  ]
                }
              ]
            },
            {
              "id": "s4-numerical",
              "type": "numerical",
              "title": "Calculate the Forcing Constant",
              "content": "In the equation $\\frac{d^2u}{d\\theta^2} + u = \\frac{GMm^2}{l^2}$, the right-hand side is a constant.\n\nIf $G = 1$, $M = 100$, $m = 2$, and $l = 20$, calculate the numerical value of this constant $\\frac{GMm^2}{l^2}$.",
              "numericAnswer": 1,
              "numericTolerance": 0.05
            },
            {
              "id": "s5-quiz",
              "type": "quiz",
              "title": "Significance of the Result",
              "content": "The differential equation $\\frac{d^2u}{d\\theta^2} + u = Constant$ is mathematically identical to which common physical system?",
              "options": [
                { "id": "1", "text": "A damped pendulum", "isCorrect": false, "explanation": "There is no damping (first derivative) term." },
                { "id": "2", "text": "A simple harmonic oscillator", "isCorrect": true, "explanation": "It's exactly the SHM equation with a constant driving force, yielding a sinusoidal solution!" },
                { "id": "3", "text": "A particle in free fall", "isCorrect": false, "explanation": "Free fall is constant acceleration, not proportional to position." }
              ]
            },
            {
              "id": "s6-blank",
              "type": "fill_in_blank",
              "title": "The Magic Variable",
              "content": "To solve the orbital equation, we introduce a new variable $u$, defined as the ___ of the radius $r$.",
              "blankAnswer": "inverse"
            }
          ]
        }
      ]
    },
    {
      "id": "unit-1-7",
      "title": "The Equation of an Ellipse",
      "description": "Connecting the physics to pure geometry.",
      "color": "duo-green",
      "lessons": [
        {
          "id": "lesson-1-7-1-ellipse",
          "title": "Geometry of Conic Sections",
          "description": "Defining orbits mathematically.",
          "icon": "Vector",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "The Ellipse",
              "content": "An ellipse is defined geometrically as the locus of points whose distances from two fixed points (the foci, $F$ and $F'$) sum to a constant ($2a$).\n\n$$r + r' = 2a$$\n\nIn polar coordinates, placing the origin at one focus, the equation of a general conic section is:\n$$r = \\frac{p}{1 + e\\cos\\theta}$$"
            },
            {
              "id": "s2-canvas",
              "type": "theory",
              "title": "Visualizing the Ellipse Geometry",
              "content": "The sum of the distances from the planet to the two foci ($r + r'$) is always equal to the major axis $2a$.",
              "canvasId": "ellipse-geometry"
            },
            {
              "id": "s3-proof",
              "type": "proof",
              "title": "Matching Physics to Geometry",
              "content": "Our solution to the orbit equation was $u = A\\cos(\\theta - \\theta_0) + \\frac{GMm^2}{l^2}$. \nConverting back to $r$, we got $r = \\frac{l^2/GMm^2}{1 + \\frac{Al^2}{GMm^2}\\cos\\theta}$.",
              "interactiveSteps": [
                {
                  "stepText": "Compare the physical equation $r = \\frac{l^2/GMm^2}{1 + \\frac{Al^2}{GMm^2}\\cos\\theta}$ to the geometric equation $r = \\frac{a(1-e^2)}{1+e\\cos\\theta}$."
                },
                {
                  "prompt": "By matching the denominators, what physical quantity represents the eccentricity $e$?",
                  "stepText": "The eccentricity is $e = \\frac{Al^2}{GMm^2}$. (Where $A$ is the amplitude of the SHM oscillation).",
                  "options": [
                    { "id": "A", "text": "$e = \\frac{l^2}{GMm^2}$", "isCorrect": false, "explanation": "Look at the coefficient in front of the cosine term." },
                    { "id": "B", "text": "$e = \\frac{Al^2}{GMm^2}$", "isCorrect": true, "explanation": "Matching the terms exactly gives this identity." }
                  ]
                },
                {
                  "prompt": "By matching the numerators, we set $\\frac{l^2}{GMm^2} = a(1-e^2)$. Earlier we found $e^2 = 1 + \\frac{2El^2}{m(GMm)^2}$. What does this make the semimajor axis $a$?",
                  "stepText": "Substituting $e^2$, we get $a = -\\frac{GMm}{2E}$.",
                  "options": [
                    { "id": "A", "text": "$a = -\\frac{GMm}{2E}$", "isCorrect": true, "explanation": "The semimajor axis depends strictly on the total mechanical energy $E$!" },
                    { "id": "B", "text": "$a = E \\cdot l^2$", "isCorrect": false, "explanation": "Check the algebra substitution." }
                  ]
                }
              ]
            },
            {
              "id": "s4-numerical",
              "type": "numerical",
              "title": "Calculate the Semimajor Axis",
              "content": "A planet has a total mechanical energy $E = -5 \\times 10^9$ Joules. \nThe system's parameter $GMm = 3 \\times 10^{20}$ $J \\cdot m$.\n\nCalculate the semimajor axis $a = -\\frac{GMm}{2E}$ in meters.",
              "numericAnswer": 30000000000,
              "numericTolerance": 10000
            },
            {
              "id": "s5-quiz",
              "type": "quiz",
              "title": "Eccentricity Values",
              "content": "Different values of eccentricity $e$ dictate the shape of the orbit. If $e = 0$, what is the shape of the orbit?",
              "options": [
                { "id": "1", "text": "Ellipse", "isCorrect": false, "explanation": "An ellipse has $0 < e < 1$." },
                { "id": "2", "text": "Circle", "isCorrect": true, "explanation": "A circle is a special case of an ellipse with zero eccentricity." },
                { "id": "3", "text": "Parabola", "isCorrect": false, "explanation": "A parabola has exactly $e = 1$." },
                { "id": "4", "text": "Hyperbola", "isCorrect": false, "explanation": "A hyperbola has $e > 1$." }
              ]
            },
            {
              "id": "s6-blank",
              "type": "fill_in_blank",
              "title": "Energy Connection",
              "content": "The minus sign in the semimajor axis formula $a = -GMm/2E$ is necessary because the total energy is ___ for bounded elliptical orbits.",
              "blankAnswer": "negative"
            }
          ]
        }
      ]
    },
    {
      "id": "unit-1-8",
      "title": "Kepler's Laws Revisited",
      "description": "Proving Kepler's Third Law theoretically.",
      "color": "duo-green",
      "lessons": [
        {
          "id": "lesson-1-8-1-proofs",
          "title": "Newton Proves Kepler",
          "description": "Deriving Kepler's Third Law.",
          "icon": "Award",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "The First Two Laws",
              "content": "We have now theoretically proven Kepler's first two laws:\n\n**Law 1 (Ellipses):** We solved Newton's 2nd Law and derived $r(\\theta)$ representing a conic section. For $E < 0$, it is an ellipse.\n**Law 2 (Equal Areas):** The areal velocity $\\frac{dS}{dt} = \\frac{l}{2m}$. Since angular momentum $l$ is conserved, the areal velocity is constant."
            },
            {
              "id": "s2-proof",
              "type": "proof",
              "title": "Interactive Proof: Kepler's Third Law",
              "content": "Let's prove $\\tau^2 \\propto a^3$ where $\\tau$ is the orbital period.",
              "interactiveSteps": [
                {
                  "stepText": "The period $\\tau$ is the total area of the ellipse $S$ divided by the constant areal velocity $\\frac{dS}{dt}$."
                },
                {
                  "prompt": "If the area of an ellipse is $S = \\pi ab$, and the areal velocity is $\\frac{l}{2m}$, what is $\\tau$?",
                  "stepText": "$\\tau = \\frac{\\pi ab}{l/2m} = \\frac{2\\pi m a b}{l}$",
                  "options": [
                    { "id": "A", "text": "$\\tau = \\frac{2\\pi m a b}{l}$", "isCorrect": true, "explanation": "Just simple division: Area / Rate." },
                    { "id": "B", "text": "$\\tau = \\pi a b \\cdot l$", "isCorrect": false, "explanation": "Divide by the rate, don't multiply." }
                  ]
                },
                {
                  "stepText": "Square both sides: $\\tau^2 = \\frac{4\\pi^2 m^2 a^2 b^2}{l^2}$. Recall that for an ellipse, $b = a(1-e^2)^{1/2}$, so $b^2 = a^2(1-e^2)$."
                },
                {
                  "prompt": "We also know from our geometry-physics match that $(1-e^2) = \\frac{l^2}{GMm^2 a}$. Substitute this into $b^2$, then substitute $b^2$ into $\\tau^2$. What remains?",
                  "stepText": "$\\tau^2 = \\frac{4\\pi^2 m^2 a^2}{l^2} \\left( a^2 \\frac{l^2}{GMm^2 a} \\right) = \\frac{4\\pi^2}{GM}a^3$. Kepler's 3rd Law is proven!",
                  "options": [
                    { "id": "A", "text": "$\\tau^2 = \\frac{4\\pi^2}{GM}a^3$", "isCorrect": true, "explanation": "The $m^2$ and $l^2$ terms perfectly cancel out!" },
                    { "id": "B", "text": "$\\tau^2 = \\frac{G}{M}a^2$", "isCorrect": false, "explanation": "Follow the algebra closely, the result is proportional to $a^3$." }
                  ]
                }
              ]
            },
            {
              "id": "s3-example",
              "type": "example",
              "title": "Newton's Correction",
              "content": "Kepler stated $\\tau^2 = K a^3$, where $K$ is identical for all planets.\n\nNewton's derivation showed $K = \\frac{4\\pi^2}{GM}$. However, Newton also realized the Sun is not perfectly stationary; they both orbit the center of mass. The exact mass term in the denominator should be $(M + m)$. Since $M_{sun} \\gg m_{planet}$, Kepler's approximation was incredibly accurate."
            },
            {
              "id": "s4-numerical",
              "type": "numerical",
              "title": "Calculate Period",
              "content": "Assume a star has $GM = 4\\pi^2$ in some chosen unit system. A planet orbits with a semimajor axis $a = 4$ units.\n\nUsing $\\tau^2 = \\frac{4\\pi^2}{GM}a^3$, calculate the orbital period $\\tau$.",
              "numericAnswer": 8,
              "numericTolerance": 0.1
            },
            {
              "id": "s5-quiz",
              "type": "quiz",
              "title": "Constants of Proportionality",
              "content": "According to Newton's theoretical derivation of Kepler's 3rd law (ignoring the reduced mass correction), the ratio $\\tau^2/a^3$ depends ONLY on:",
              "options": [
                { "id": "1", "text": "The mass of the planet.", "isCorrect": false, "explanation": "The mass of the planet $m$ canceled out in the derivation." },
                { "id": "2", "text": "The mass of the Sun (the primary).", "isCorrect": true, "explanation": "The ratio is $\\frac{4\\pi^2}{GM}$, which only contains the constant $G$ and the Sun's mass $M$." },
                { "id": "3", "text": "The angular momentum of the orbit.", "isCorrect": false, "explanation": "Angular momentum dictates the eccentricity, but does not affect the period-axis ratio." }
              ]
            },
            {
              "id": "s6-blank",
              "type": "fill_in_blank",
              "title": "The Third Law",
              "content": "The square of a planet's period is proportional to the ___ of its semimajor axis.",
              "blankAnswer": "cube"
            }
          ]
        }
      ]
    }
  ]
};