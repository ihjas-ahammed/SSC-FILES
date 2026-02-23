import { Section } from '../types';

export const SECTION_1_4: Section = {
  "id": "section-1-4",
  "title": "Section 4: Advanced Problems & Applications",
  "description": "Worked examples and chapter exercises on Central Force Motion.",
  "color": "duo-green",
  "units": [
    {
      "id": "unit-1-9",
      "title": "The Virial Theorem & Potentials",
      "description": "Relating average kinetic and potential energies.",
      "color": "duo-green",
      "lessons": [
        {
          "id": "lesson-1-9-1-virial",
          "title": "Worked Example 10.2: The Virial Theorem",
          "description": "Proving the relationship between time-averaged energies.",
          "icon": "Activity",
          "slides": [
            {
              "id": "s1-q",
              "type": "example_q",
              "title": "The Problem",
              "content": "Consider a particle in an attractive force field whose potential energy is of the form $V(r) = kr^{n+1}$. \n\nShow that for a periodic orbit, the average kinetic energy $\\langle T \\rangle$ is related to the average potential energy $\\langle V \\rangle$ by:\n\n$$\\langle T \\rangle = \\frac{n+1}{2}\\langle V \\rangle$$\n\nAlso, apply this to the gravitational force."
            },
            {
              "id": "s2-sol",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "To find the time average, we define a periodic function $G(t) = \\mathbf{p} \\cdot \\mathbf{r}$.",
              "interactiveSteps": [
                {
                  "stepText": "The time average of a quantity over a period $\\tau$ is $\\langle f \\rangle = \\frac{1}{\\tau}\\int_0^\\tau f(t) dt$."
                },
                {
                  "prompt": "If $G(t)$ repeats periodically, what is the time average of its derivative, $\\langle \\frac{dG}{dt} \\rangle$?",
                  "stepText": "Because $G(\\tau) = G(0)$, the integral evaluates to $\\frac{1}{\\tau}[G(\\tau) - G(0)] = 0$. Thus, $\\langle \\frac{dG}{dt} \\rangle = 0$.",
                  "options": [
                    { "id": "A", "text": "$\\langle \\frac{dG}{dt} \\rangle = 0$", "isCorrect": true, "explanation": "The net change of a periodic function over one full period is exactly zero." },
                    { "id": "B", "text": "$\\langle \\frac{dG}{dt} \\rangle = G(\\tau)$", "isCorrect": false, "explanation": "You must evaluate the bounds of the integral, which cancel out." }
                  ]
                },
                {
                  "prompt": "Now evaluate the derivative using the product rule: $\\frac{d}{dt}(\\mathbf{p} \\cdot \\mathbf{r}) = \\mathbf{\\dot{p}} \\cdot \\mathbf{r} + \\mathbf{p} \\cdot \\mathbf{\\dot{r}}$. What is this in terms of kinetic energy $T$ and force $\\mathbf{F}$?",
                  "stepText": "Since $\\mathbf{p} \\cdot \\mathbf{\\dot{r}} = m\\mathbf{v} \\cdot \\mathbf{v} = 2T$ and $\\mathbf{\\dot{p}} = \\mathbf{F}$, we get $\\frac{dG}{dt} = 2T + \\mathbf{F} \\cdot \\mathbf{r}$.",
                  "options": [
                    { "id": "A", "text": "$T + \\mathbf{F} \\cdot \\mathbf{r}$", "isCorrect": false, "explanation": "Remember that $T = \\frac{1}{2}mv^2$, so $m\\mathbf{v}\\cdot\\mathbf{v}$ is $2T$." },
                    { "id": "B", "text": "$2T + \\mathbf{F} \\cdot \\mathbf{r}$", "isCorrect": true, "explanation": "Correct!" }
                  ]
                },
                {
                  "stepText": "Since $\\mathbf{F} = -\\nabla V$, we have $\\mathbf{F} \\cdot \\mathbf{r} = -\\frac{dV}{dr}r$. Therefore, $\\langle 2T - \\frac{dV}{dr}r \\rangle = 0$, meaning $2\\langle T \\rangle = \\langle \\frac{dV}{dr}r \\rangle$."
                },
                {
                  "prompt": "Given $V(r) = kr^{n+1}$, calculate $\\frac{dV}{dr}r$.",
                  "stepText": "$\\frac{dV}{dr}r = (n+1)kr^n \\cdot r = (n+1)kr^{n+1} = (n+1)V$.",
                  "options": [
                    { "id": "A", "text": "$(n+1)V$", "isCorrect": true, "explanation": "Taking the derivative drops the power by 1, but multiplying by $r$ restores it, bringing down the $(n+1)$ coefficient." },
                    { "id": "B", "text": "$nV$", "isCorrect": false, "explanation": "The exponent was $n+1$, not $n$." }
                  ]
                },
                {
                  "stepText": "Substituting this back yields $2\\langle T \\rangle = (n+1)\\langle V \\rangle$, or $\\langle T \\rangle = \\frac{n+1}{2}\\langle V \\rangle$. This completes the proof!"
                }
              ]
            },
            {
              "id": "s3-quiz",
              "type": "quiz",
              "title": "Application to Gravity",
              "content": "For the gravitational force, the potential energy has the form $V = -k/r$. According to the Virial Theorem you just proved, what is the relation between $\\langle T \\rangle$ and $\\langle V \\rangle$?",
              "options": [
                { "id": "1", "text": "$\\langle T \\rangle = \\langle V \\rangle$", "isCorrect": false, "explanation": "What is the exponent $n+1$ in this case?" },
                { "id": "2", "text": "$\\langle T \\rangle = -\\frac{1}{2}\\langle V \\rangle$", "isCorrect": true, "explanation": "Here, $V \\propto r^{-1}$, so $n+1 = -1$, meaning $n = -2$. Thus $\\langle T \\rangle = -\\frac{1}{2}\\langle V \\rangle$." },
                { "id": "3", "text": "$\\langle T \\rangle = -2\\langle V \\rangle$", "isCorrect": false, "explanation": "The formula is $(n+1)/2$." }
              ]
            }
          ]
        },
        {
          "id": "lesson-1-9-2-exercises",
          "title": "Force and Potential Exercises",
          "description": "Exercises 10.1 and 10.2",
          "icon": "Target",
          "slides": [
            {
              "id": "s1-q",
              "type": "example_q",
              "title": "Exercise 10.1: Lennard-Jones Force",
              "content": "To a first approximation, the force between molecules can be expressed in terms of the Lennard-Jones potential energy:\n$$V(r) = -\\frac{a}{r^6} + \\frac{b}{r^{12}}$$\n\nUse $\\mathbf{F} = -\\nabla V$ to obtain an expression for the force. Determine the value of $r$ where the force changes from attractive to repulsive."
            },
            {
              "id": "s2-sol",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "Let's find the force and the equilibrium distance.",
              "interactiveSteps": [
                {
                  "prompt": "First, take the negative derivative of $V(r)$ with respect to $r$. What is $\\mathbf{F}$?",
                  "stepText": "$\\mathbf{F} = -\\left( \\frac{6a}{r^7} - \\frac{12b}{r^{13}} \\right)\\mathbf{\\hat{r}} = -\\frac{6a}{r^7}\\mathbf{\\hat{r}} + \\frac{12b}{r^{13}}\\mathbf{\\hat{r}}$.",
                  "options": [
                    { "id": "A", "text": "$\\mathbf{F} = -\\left( \\frac{6a}{r^7} - \\frac{12b}{r^{13}} \\right)\\mathbf{\\hat{r}}$", "isCorrect": true, "explanation": "Correct derivative of $r^{-n}$ is $-nr^{-n-1}$. Apply the negative sign for $-\\nabla V$." },
                    { "id": "B", "text": "$\\mathbf{F} = -\\left( \\frac{a}{r^5} - \\frac{b}{r^{11}} \\right)\\mathbf{\\hat{r}}$", "isCorrect": false, "explanation": "You integrated instead of taking the derivative." }
                  ]
                },
                {
                  "stepText": "The force changes from attractive to repulsive when $F = 0$."
                },
                {
                  "prompt": "Set $F = 0$ and solve for $r$. What is $r$?",
                  "stepText": "$\\frac{6a}{r^7} = \\frac{12b}{r^{13}} \\implies r^6 = \\frac{12b}{6a} = \\frac{2b}{a} \\implies r = \\left(\\frac{2b}{a}\\right)^{1/6}$.",
                  "options": [
                    { "id": "A", "text": "$r = \\left(\\frac{2b}{a}\\right)^{1/6}$", "isCorrect": true, "explanation": "Correctly isolated $r^6$ and took the 6th root." },
                    { "id": "B", "text": "$r = \\left(\\frac{b}{2a}\\right)^{1/6}$", "isCorrect": false, "explanation": "Check the division: $12/6 = 2$." }
                  ]
                }
              ]
            },
            {
              "id": "s3-quiz",
              "type": "quiz",
              "title": "Exercise 10.3: Circular Orbit Momentum",
              "content": "A planet of mass $m$ is in a circular orbit of radius $r_0$ about a star of mass $M$. What is its angular momentum $l$?",
              "options": [
                { "id": "1", "text": "$l = m\\sqrt{GMr_0}$", "isCorrect": true, "explanation": "For a circular orbit, $mv^2/r_0 = GMm/r_0^2 \\implies v = \\sqrt{GM/r_0}$. Since $l = mvr_0$, we get $l = m\\sqrt{GMr_0}$." },
                { "id": "2", "text": "$l = mGMr_0$", "isCorrect": false, "explanation": "Missing the square root." },
                { "id": "3", "text": "$l = \\sqrt{GM/r_0}$", "isCorrect": false, "explanation": "This is just the velocity $v$, not the angular momentum." }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "unit-1-10",
      "title": "Lagrangian Applications & Turning Points",
      "description": "Applying Lagrangian mechanics to new forces.",
      "color": "duo-green",
      "lessons": [
        {
          "id": "lesson-1-10-1-spring-force",
          "title": "Exercise 10.7: Spring-like Central Force",
          "description": "Lagrangian of a central spring force.",
          "icon": "Activity",
          "slides": [
            {
              "id": "s1-q",
              "type": "example_q",
              "title": "The Problem",
              "content": "Suppose the force between a particle of mass $m$ and a fixed point is given by $\\mathbf{F} = -kr\\mathbf{\\hat{r}}$, where $k$ is a constant.\n\nObtain the Lagrangian and the equations of motion. Is angular momentum conserved for this system?"
            },
            {
              "id": "s2-sol",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "Let's build the Lagrangian $L = T - V$.",
              "interactiveSteps": [
                {
                  "prompt": "If $\\mathbf{F} = -kr\\mathbf{\\hat{r}}$, what is the potential energy $V(r)$? (Assume $V(0) = 0$)",
                  "stepText": "$V(r) = -\\int (-kr) dr = \\frac{1}{2}kr^2$.",
                  "options": [
                    { "id": "A", "text": "$V(r) = \\frac{1}{2}kr^2$", "isCorrect": true, "explanation": "Integrating the linear force gives the harmonic oscillator potential." },
                    { "id": "B", "text": "$V(r) = -\\frac{k}{r^2}$", "isCorrect": false, "explanation": "That would be for an inverse cube force." }
                  ]
                },
                {
                  "stepText": "The kinetic energy in polar coordinates is $T = \\frac{1}{2}m(\\dot{r}^2 + r^2\\dot{\\theta}^2)$."
                },
                {
                  "stepText": "So the Lagrangian is $L = \\frac{1}{2}m(\\dot{r}^2 + r^2\\dot{\\theta}^2) - \\frac{1}{2}kr^2$."
                },
                {
                  "prompt": "Applying Lagrange's equation for $r$: $\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial \\dot{r}}\\right) - \\frac{\\partial L}{\\partial r} = 0$. What is the resulting equation?",
                  "stepText": "$\\frac{d}{dt}(m\\dot{r}) - (mr\\dot{\\theta}^2 - kr) = 0 \\implies m\\ddot{r} - mr\\dot{\\theta}^2 + kr = 0$.",
                  "options": [
                    { "id": "A", "text": "$m\\ddot{r} - mr\\dot{\\theta}^2 + kr = 0$", "isCorrect": true, "explanation": "Correct application of the Euler-Lagrange equation." },
                    { "id": "B", "text": "$m\\ddot{r} + kr = 0$", "isCorrect": false, "explanation": "You forgot the centrifugal term $\\partial T / \\partial r$." }
                  ]
                },
                {
                  "prompt": "Applying Lagrange's equation for $\\theta$: $\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial \\dot{\\theta}}\\right) - \\frac{\\partial L}{\\partial \\theta} = 0$. Does this show angular momentum is conserved?",
                  "stepText": "Since $\\theta$ does not appear in $L$, $\\frac{\\partial L}{\\partial \\theta} = 0$. Thus $\\frac{d}{dt}(mr^2\\dot{\\theta}) = 0$. Yes, angular momentum is conserved!",
                  "options": [
                    { "id": "A", "text": "Yes, because $L$ is independent of $\\theta$.", "isCorrect": true, "explanation": "An ignorable coordinate leads directly to a conserved momentum." },
                    { "id": "B", "text": "No, because of the spring constant $k$.", "isCorrect": false, "explanation": "The spring constant only affects the radial equation." }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "lesson-1-10-2-turning-points",
          "title": "Exercise 10.8: Parabolic Turning Point",
          "description": "Finding the turning point of a zero-energy orbit.",
          "icon": "Navigation",
          "slides": [
            {
              "id": "s1-q",
              "type": "example_q",
              "title": "The Problem",
              "content": "A particle is in a parabolic orbit under a gravitational central force. Where is its turning point $r_0$?"
            },
            {
              "id": "s2-sol",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "Let's use the Effective Potential Energy diagram concepts.",
              "interactiveSteps": [
                {
                  "prompt": "What defines a parabolic orbit in terms of total mechanical energy $E$?",
                  "stepText": "For a parabolic orbit, the particle reaches infinity with exactly zero speed, so total energy $E = 0$.",
                  "options": [
                    { "id": "A", "text": "$E < 0$", "isCorrect": false, "explanation": "Negative energy means the orbit is bound (an ellipse)." },
                    { "id": "B", "text": "$E = 0$", "isCorrect": true, "explanation": "Zero energy is the exact boundary between bound and unbound orbits (parabola)." }
                  ]
                },
                {
                  "stepText": "At the turning point $r_0$, the radial velocity $\\dot{r} = 0$, meaning all energy is effective potential energy: $E = V_{eff}(r_0)$."
                },
                {
                  "prompt": "Substitute $E=0$ and $V_{eff}(r) = \\frac{l^2}{2mr^2} - \\frac{GMm}{r}$. Solve for $r_0$.",
                  "stepText": "$0 = \\frac{l^2}{2mr_0^2} - \\frac{GMm}{r_0} \\implies \\frac{GMm}{r_0} = \\frac{l^2}{2mr_0^2} \\implies r_0 = \\frac{l^2}{2GMm^2}$.",
                  "options": [
                    { "id": "A", "text": "$r_0 = \\frac{l^2}{2GMm^2}$", "isCorrect": true, "explanation": "Correctly isolated $r_0$." },
                    { "id": "B", "text": "$r_0 = \\frac{l^2}{GMm^2}$", "isCorrect": false, "explanation": "You lost the factor of 2 from the kinetic energy term." }
                  ]
                }
              ]
            },
            {
              "id": "s3-quiz",
              "type": "quiz",
              "title": "Exercise 10.9: Bohr Model",
              "content": "In the Bohr model, an electron in a circular orbit has angular momentum $l = \\hbar$. The potential energy is $V = -e^2/(4\\pi\\epsilon_0 r)$. What is the total energy of this circular orbit?",
              "options": [
                { "id": "1", "text": "$E = -\\frac{me^4}{2(4\\pi\\epsilon_0\\hbar)^2}$", "isCorrect": true, "explanation": "Using $V_{eff}$ minimum condition, we find $r_0$, and substituting it back into $E = V_{eff}(r_0)$ gives this exact result." },
                { "id": "2", "text": "$E = 0$", "isCorrect": false, "explanation": "A circular orbit is heavily bound, so $E < 0$." },
                { "id": "3", "text": "$E = \\frac{me^4}{2(4\\pi\\epsilon_0\\hbar)^2}$", "isCorrect": false, "explanation": "The total energy must be negative for a bound orbit." }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "unit-1-11",
      "title": "Ellipse Properties & Velocities",
      "description": "Geometrical properties of the elliptical orbit.",
      "color": "duo-green",
      "lessons": [
        {
          "id": "lesson-1-11-1-ellipse-geom",
          "title": "Exercise 10.12 & 10.13: Ellipse Geometry",
          "description": "Finding axes ratios and average energies.",
          "icon": "Vector",
          "slides": [
            {
              "id": "s1-q",
              "type": "example_q",
              "title": "The Problem",
              "content": "Show that for an ellipse, the ratio of the semiminor axis $b$ to the semimajor axis $a$ is given by $b/a = (1-e^2)^{1/2}$."
            },
            {
              "id": "s2-sol",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "Consider a point $P$ at the very top of the minor axis of the ellipse.",
              "interactiveSteps": [
                {
                  "stepText": "The sum of distances from $P$ to the two foci $F$ and $F'$ is $2a$. By symmetry, the distance from $P$ to either focus is exactly $a$."
                },
                {
                  "stepText": "The distance from the center of the ellipse $O$ to a focus $F$ is defined as $ea$."
                },
                {
                  "prompt": "Look at the right triangle $FOP$. The height is $b$ (semiminor axis), the base is $ea$, and the hypotenuse is $a$. Apply the Pythagorean theorem.",
                  "stepText": "$b^2 + (ea)^2 = a^2 \\implies b^2 = a^2 - e^2a^2 = a^2(1-e^2)$.",
                  "options": [
                    { "id": "A", "text": "$b^2 + (ea)^2 = a^2$", "isCorrect": true, "explanation": "Correct application of Pythagoras." },
                    { "id": "B", "text": "$a^2 + b^2 = (ea)^2$", "isCorrect": false, "explanation": "The hypotenuse is $a$, not $ea$." }
                  ]
                },
                {
                  "stepText": "Taking the square root and dividing by $a$ yields $b/a = (1-e^2)^{1/2}$. Proven!"
                }
              ]
            },
            {
              "id": "s3-quiz",
              "type": "quiz",
              "title": "Exercise 10.13: Average Potential Energy",
              "content": "A planet is in an elliptical orbit with semimajor axis $a$. By averaging the largest and smallest values of $r$ (perihelion and aphelion), what 'average' value of the potential energy do you get?",
              "options": [
                { "id": "1", "text": "$-GMm/a$", "isCorrect": true, "explanation": "The turning points are $a(1-e)$ and $a(1+e)$. Averaging $1/r$ at these extremes mathematically relates to $-GMm/a$." },
                { "id": "2", "text": "$-GMm/2a$", "isCorrect": false, "explanation": "This is the Total Energy $E$, not the average potential energy." },
                { "id": "3", "text": "$0$", "isCorrect": false, "explanation": "Gravity is always attractive, so potential is always negative." }
              ]
            }
          ]
        },
        {
          "id": "lesson-1-11-2-period-velocity",
          "title": "Worked Example 10.4: Period from Velocities",
          "description": "Calculating the period using extreme velocities.",
          "icon": "Clock",
          "slides": [
            {
              "id": "s1-q",
              "type": "example_q",
              "title": "The Problem",
              "content": "A particle moves in an elliptical orbit with semimajor axis $a$ and eccentricity $e$. The velocity of the particle is observed to vary from a minimum value $v_1$ to a maximum value $v_2$.\n\nDetermine the period $\\tau$."
            },
            {
              "id": "s2-sol",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "We will use the conservation of angular momentum and the geometry of the ellipse.",
              "interactiveSteps": [
                {
                  "stepText": "Maximum and minimum speeds occur at the smallest and greatest distances ($r_1$ and $r_2$). Angular momentum is constant: $mv_1r_1 = mv_2r_2 = l$."
                },
                {
                  "prompt": "The points $r_1$ and $r_2$ lie on the semimajor axis. What is their sum?",
                  "stepText": "$r_1 + r_2 = 2a$.",
                  "options": [
                    { "id": "A", "text": "$r_1 + r_2 = 2a$", "isCorrect": true, "explanation": "Perihelion + Aphelion equals the major axis $2a$." },
                    { "id": "B", "text": "$r_1 + r_2 = a$", "isCorrect": false, "explanation": "They sum to the full major axis, not the semi-major axis." }
                  ]
                },
                {
                  "stepText": "Substitute $r_1 = 2a - r_2$ into the momentum equation: $mv_1(2a - r_2) = mv_2r_2$. Solving for $r_2$ gives $r_2 = \\frac{2av_1}{v_1+v_2}$."
                },
                {
                  "stepText": "Substitute $r_2$ back to find $l$: $l = mv_2\\left(\\frac{2av_1}{v_1+v_2}\\right) = m\\frac{2av_1v_2}{v_1+v_2}$."
                },
                {
                  "prompt": "The period $\\tau$ is the Area $\\pi ab$ divided by the areal velocity $\\frac{l}{2m}$. What is the final expression for $\\tau$ after plugging in $l$?",
                  "stepText": "$\\tau = \\frac{\\pi a b (2m)}{m \\frac{2av_1v_2}{v_1+v_2}} = \\frac{\\pi b (v_1+v_2)}{v_1 v_2}$.",
                  "options": [
                    { "id": "A", "text": "$\\tau = \\frac{\\pi a (v_1+v_2)}{v_1 v_2}$", "isCorrect": false, "explanation": "Don't forget the $b$ from the area of the ellipse." },
                    { "id": "B", "text": "$\\tau = \\frac{\\pi b (v_1+v_2)}{v_1 v_2}$", "isCorrect": true, "explanation": "Correctly simplified." }
                  ]
                },
                {
                  "stepText": "Since $b = a(1-e^2)^{1/2}$, we can also write $\\tau = \\pi a (1-e^2)^{1/2} \\frac{v_1+v_2}{v_1v_2}$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "unit-1-12",
      "title": "Inverse Square Law & Orbital Mechanics",
      "description": "Deriving the force law from the orbit shape.",
      "color": "duo-green",
      "lessons": [
        {
          "id": "lesson-1-12-1-inv-square",
          "title": "Worked Example 10.5: Deriving the Force Law",
          "description": "Working backwards from Kepler's Laws to Newton's.",
          "icon": "Repeat",
          "slides": [
            {
              "id": "s1-q",
              "type": "example_q",
              "title": "The Problem",
              "content": "Suppose you were familiar with Kepler's work, so you knew that the orbits of planets are ellipses and that the angular momentum is constant. \n\nShow that the force obeys the inverse square law, that is, show that $f(r) \\propto 1/r^2$."
            },
            {
              "id": "s2-sol",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "We will use the $u = 1/r$ substitution method in reverse.",
              "interactiveSteps": [
                {
                  "stepText": "Recall the orbital differential equation we derived: $\\frac{d^2u}{d\\theta^2} + u = -\\frac{m}{l^2u^2}f(r)$."
                },
                {
                  "stepText": "The equation of an ellipse is $r = \\frac{p}{1+e\\cos\\theta}$, so $u = \\frac{1}{p} + \\frac{e}{p}\\cos\\theta$."
                },
                {
                  "prompt": "Take the second derivative $\\frac{d^2u}{d\\theta^2}$ of this ellipse equation. What is it?",
                  "stepText": "$\\frac{d^2u}{d\\theta^2} = -\\frac{e}{p}\\cos\\theta$.",
                  "options": [
                    { "id": "A", "text": "$\\frac{d^2u}{d\\theta^2} = -\\frac{e}{p}\\cos\\theta$", "isCorrect": true, "explanation": "The derivative of cos is -sin, and the derivative of -sin is -cos." },
                    { "id": "B", "text": "$\\frac{d^2u}{d\\theta^2} = \\frac{e}{p}\\sin\\theta$", "isCorrect": false, "explanation": "That is only the first derivative." }
                  ]
                },
                {
                  "prompt": "Now substitute this back into the left side of the orbital equation: $\\frac{d^2u}{d\\theta^2} + u$. What does it simplify to?",
                  "stepText": "$-\\frac{e}{p}\\cos\\theta + \\left(\\frac{1}{p} + \\frac{e}{p}\\cos\\theta\\right) = \\frac{1}{p}$.",
                  "options": [
                    { "id": "A", "text": "$\\frac{1}{p}$", "isCorrect": true, "explanation": "The cosine terms perfectly cancel out, leaving just the constant $1/p$." },
                    { "id": "B", "text": "$\\frac{1}{p} - \\frac{2e}{p}\\cos\\theta$", "isCorrect": false, "explanation": "Check your signs, they should cancel, not add." }
                  ]
                },
                {
                  "stepText": "So $\\frac{1}{p} = -\\frac{m}{l^2u^2}f(r)$. Solving for $f(r)$ gives $f(r) = -\\frac{l^2}{mp}u^2$. Since $u^2 = 1/r^2$, we have proven that $f(r) \\propto 1/r^2$! Q.E.D."
                }
              ]
            }
          ]
        },
        {
          "id": "lesson-1-12-2-orbital-calc",
          "title": "Exercises 10.16 & 10.18: Orbital Calculations",
          "description": "Calculating periods and semimajor axes.",
          "icon": "Calculator",
          "slides": [
            {
              "id": "s1-numerical",
              "type": "numerical",
              "title": "Exercise 10.16: Saturn's Orbit",
              "content": "Assuming you do not know the mass of the Sun, but you know Earth's period is 1 year and distance is 1 AU.\n\nDetermine the semimajor axis of Saturn in AU, given its period is 29.5 Earth years.\n*(Hint: Use $\\tau^2 = a^3$ in these units)*",
              "numericAnswer": 9.55,
              "numericTolerance": 0.05
            },
            {
              "id": "s2-q",
              "type": "example_q",
              "title": "Exercise 10.18: Halley's Comet",
              "content": "Halley's comet has an eccentricity of $e = 0.967$. Its perihelion distance is $r_p = 8.81 \\times 10^{10}$ m.\n\nWhat is its period in years? (We will work through this conceptually on the next slide)."
            },
            {
              "id": "s3-sol",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "Let's find the period using Kepler's Third Law relative to Earth.",
              "interactiveSteps": [
                {
                  "stepText": "First, we need the semimajor axis $a$. We know $r_p = a(1-e)$."
                },
                {
                  "prompt": "Solve for $a$. What is the formula?",
                  "stepText": "$a = \\frac{r_p}{1-e}$.",
                  "options": [
                    { "id": "A", "text": "$a = \\frac{r_p}{1-e}$", "isCorrect": true, "explanation": "Just divide both sides by $(1-e)$." },
                    { "id": "B", "text": "$a = r_p(1+e)$", "isCorrect": false, "explanation": "That is an approximation, not the exact formula." }
                  ]
                },
                {
                  "stepText": "Plugging in the numbers: $a = \\frac{8.81 \\times 10^{10}}{1 - 0.967} = \\frac{8.81 \\times 10^{10}}{0.033} \\approx 2.67 \\times 10^{12}$ m."
                },
                {
                  "stepText": "To use $\\tau^2 = a^3$ in years and AU, we convert $a$ to AU. (1 AU $\\approx 1.5 \\times 10^{11}$ m). $a \\approx 17.8$ AU."
                },
                {
                  "stepText": "Finally, $\\tau = \\sqrt{a^3} = \\sqrt{17.8^3} = \\sqrt{5639} \\approx 75.4$ years."
                }
              ]
            },
            {
              "id": "s4-quiz",
              "type": "quiz",
              "title": "Exercise 10.17: Circular Kepler Law",
              "content": "For a planet in a circular orbit, $F = ma$ can be written as $GMm/r^2 = mv^2/r$. How does substituting $v = 2\\pi r / \\tau$ lead to Kepler's Third Law?",
              "options": [
                { "id": "1", "text": "It results in $\\tau^2 = \\frac{4\\pi^2}{GM}r^3$", "isCorrect": true, "explanation": "$GM/r = v^2 = (4\\pi^2 r^2) / \\tau^2$. Rearranging yields $\\tau^2 = \\frac{4\\pi^2}{GM} r^3$, which is Kepler's third law for a circle ($a=r$)." },
                { "id": "2", "text": "It results in $\\tau^3 = \\frac{4\\pi^2}{GM}r^2$", "isCorrect": false, "explanation": "The powers are swapped." },
                { "id": "3", "text": "It shows that period is independent of radius.", "isCorrect": false, "explanation": "Period strongly depends on radius." }
              ]
            }
          ]
        }
      ]
    }
  ]
};