import { Section } from '../types';

export const SECTION_1_1: Section = {
  "id": "section-1-1",
  "title": "Section 1: Foundations of Central Force Motion",
  "description": "Kepler's Laws, Central Forces, and the Equations of Motion.",
  "color": "duo-blue",
  "units": [
    {
      "id": "unit-1-1",
      "title": "Kepler's Laws",
      "description": "The empirical laws of planetary motion.",
      "color": "duo-blue",
      "lessons": [
        {
          "id": "lesson-1-1-1-kepler",
          "title": "Kepler's Laws of Planetary Motion",
          "description": "The foundation laid by Johannes Kepler.",
          "icon": "Globe",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "Kepler's Three Laws",
              "content": "Johannes Kepler analyzed Tycho Brahe's data and empirically derived three laws:\n\n1. **The orbit of a planet is an ellipse** with the Sun at one focus.\n2. **The radius vector** of a planet (the Sun-planet line) sweeps out equal areas in equal times.\n3. **The period squared** is proportional to the cube of the semimajor axis ($\\tau^2 \\propto a^3$)."
            },
            {
              "id": "s2-example",
              "type": "example",
              "title": "Visualizing the Ellipse",
              "content": "This meant abandoning the perfect nested solids theory. The planets move in elliptical paths, and speed up as they approach the sun to sweep out the required area.",
              "canvasId": "kepler-orbits"
            },
            {
              "id": "s3-proof",
              "type": "proof",
              "title": "Proof: Areal Velocity",
              "content": "Let's prove Kepler's Second Law using the area of a triangle.",
              "interactiveSteps": [
                {
                  "stepText": "Consider a planet at position $\\mathbf{r}$ moving with velocity $\\mathbf{v}$. In time $dt$, it moves $d\\mathbf{r} = \\mathbf{v}dt$."
                },
                {
                  "prompt": "The area swept out $dS$ is half the area of the parallelogram formed by $\\mathbf{r}$ and $d\\mathbf{r}$. How is this expressed?",
                  "stepText": "$dS = \\frac{1}{2}|\\mathbf{r} \\times d\\mathbf{r}| = \\frac{1}{2}|\\mathbf{r} \\times \\mathbf{v}dt|$",
                  "options": [
                    { "id": "A", "text": "$dS = \\frac{1}{2}|\\mathbf{r} \\cdot d\\mathbf{r}|$", "isCorrect": false, "explanation": "The dot product gives a scalar projection, not area." },
                    { "id": "B", "text": "$dS = \\frac{1}{2}|\\mathbf{r} \\times d\\mathbf{r}|$", "isCorrect": true, "explanation": "The magnitude of the cross product gives the area of a parallelogram." }
                  ]
                },
                {
                  "prompt": "By definition, the angular momentum per unit mass is $\\mathbf{h} = \\frac{\\mathbf{l}}{m} = \\mathbf{r} \\times \\mathbf{v}$. What is the areal velocity $\\frac{dS}{dt}$?",
                  "stepText": "$\\frac{dS}{dt} = \\frac{1}{2}|\\mathbf{r} \\times \\mathbf{v}| = \\frac{l}{2m}$. Since $l$ and $m$ are constant, Areal Velocity is constant!",
                  "options": [
                    { "id": "A", "text": "$l / 2m$", "isCorrect": true, "explanation": "Exactly. This proves Kepler's second law is a direct consequence of conservation of angular momentum." },
                    { "id": "B", "text": "$m / 2l$", "isCorrect": false, "explanation": "Check the substitution carefully." }
                  ]
                }
              ]
            },
            {
              "id": "s4-numerical",
              "type": "numerical",
              "title": "Asteroid Orbit",
              "content": "A certain asteroid has a period of 4 years. What is its semimajor axis $a$ in AU? (Assume you know Earth's period is 1 yr and distance is 1 AU, making $K = 1$ in $\\tau^2 = Ka^3$)",
              "numericAnswer": 2.52,
              "numericTolerance": 0.05
            },
            {
              "id": "s5-quiz",
              "type": "quiz",
              "title": "Check Your Understanding",
              "content": "Which of Kepler's laws directly relates the orbital period to the physical size of the orbit?",
              "options": [
                { "id": "1", "text": "First Law", "isCorrect": false, "explanation": "The first law describes the shape (ellipse)." },
                { "id": "2", "text": "Second Law", "isCorrect": false, "explanation": "The second law describes areal velocity." },
                { "id": "3", "text": "Third Law", "isCorrect": true, "explanation": "The third law links $\\tau^2$ and $a^3$." },
                { "id": "4", "text": "Law of Gravitation", "isCorrect": false, "explanation": "This is Newton's law, not Kepler's." }
              ]
            },
            {
              "id": "s6-blank",
              "type": "fill_in_blank",
              "title": "Recall",
              "content": "The orbit of a planet is an ellipse with the Sun at one of the ___ points.",
              "blankAnswer": "focal"
            }
          ]
        }
      ]
    },
    {
      "id": "unit-1-2",
      "title": "Central Forces",
      "description": "Definition and the conservation of angular momentum.",
      "color": "duo-blue",
      "lessons": [
        {
          "id": "lesson-1-2-1-definition",
          "title": "Definition of Central Forces",
          "description": "What makes a force 'central'?",
          "icon": "Target",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "What is a Central Force?",
              "content": "A **central force** is any force that is directed toward or away from a fixed point (origin) and whose magnitude is a function *only* of the distance to the fixed point.\n\nFormally:\n$$\\mathbf{F} = f(r)\\mathbf{\\hat{r}}$$ \nwhere $f(r)$ is the magnitude, and $\\mathbf{\\hat{r}}$ is the radial unit vector.",
              "canvasId": "central-force"
            },
            {
              "id": "s2-numerical",
              "type": "numerical",
              "title": "Finding Equilibrium",
              "content": "The Lennard-Jones potential is $V(r) = -a/r^6 + b/r^{12}$. The central force is $\\mathbf{F} = -\\nabla V$.\n\nIf $a=1$ and $b=32$, at what value of $r$ does the force change from attractive to repulsive (i.e. $F=0$)?",
              "numericAnswer": 2.0,
              "numericTolerance": 0.05
            },
            {
              "id": "s3-quiz",
              "type": "quiz",
              "title": "Force Characteristics",
              "content": "Which of the following forces is NOT strictly a central force?",
              "options": [
                { "id": "1", "text": "Gravitational force between two point masses", "isCorrect": false, "explanation": "Gravity is a classic central force." },
                { "id": "2", "text": "Electrostatic force between two point charges", "isCorrect": false, "explanation": "Electrostatic force is central." },
                { "id": "3", "text": "Magnetic force on a moving charge", "isCorrect": true, "explanation": "Magnetic force depends on velocity ($\\mathbf{v} \\times \\mathbf{B}$), not just distance." }
              ]
            },
            {
              "id": "s4-blank",
              "type": "fill_in_blank",
              "title": "Terminology",
              "content": "A central force is always directed toward or away from a ___ point.",
              "blankAnswer": "fixed"
            }
          ]
        },
        {
          "id": "lesson-1-2-2-angular-momentum",
          "title": "Conservation of Angular Momentum",
          "description": "Why orbits are confined to a 2D plane.",
          "icon": "Repeat",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "Angular Momentum is Constant",
              "content": "The most important aspect of motion under a central force is that the particle has a **constant angular momentum**.\n\nBy definition, angular momentum is $\\mathbf{l} = \\mathbf{r} \\times \\mathbf{p}$.\nBecause $\\mathbf{l}$ is constant in both magnitude and direction, the particle must always move in a single plane."
            },
            {
              "id": "s2-example",
              "type": "example",
              "title": "Motion in a Plane",
              "content": "The fixed plane is defined by the initial position $\\mathbf{r}$ and velocity $\\mathbf{v}$ vectors. Since the central force never has a component perpendicular to this plane, the particle can never leave it."
            },
            {
              "id": "s3-proof",
              "type": "proof",
              "title": "Proving Conservation",
              "content": "Let's prove $\\frac{d\\mathbf{l}}{dt} = 0$ for a central force.",
              "interactiveSteps": [
                {
                  "stepText": "Begin with the definition: $\\mathbf{l} = \\mathbf{r} \\times \\mathbf{p}$."
                },
                {
                  "prompt": "Take the time derivative. Applying the product rule gives:",
                  "stepText": "$\\frac{d\\mathbf{l}}{dt} = \\frac{d}{dt}(\\mathbf{r} \\times m\\mathbf{v}) = (\\mathbf{v} \\times m\\mathbf{v}) + (\\mathbf{r} \\times \\mathbf{F})$",
                  "options": [
                    { "id": "A", "text": "$(\\mathbf{v} \\times m\\mathbf{v}) + (\\mathbf{r} \\times \\mathbf{F})$", "isCorrect": true, "explanation": "Correct use of the product rule and $\\dot{\\mathbf{p}} = \\mathbf{F}$." },
                    { "id": "B", "text": "$\\mathbf{r} \\times \\mathbf{F}$ only", "isCorrect": false, "explanation": "You must include the derivative of the first term, even though it evaluates to zero." }
                  ]
                },
                {
                  "stepText": "Since the cross product of any vector with itself is 0, $\\mathbf{v} \\times m\\mathbf{v} = 0$. So $\\frac{d\\mathbf{l}}{dt} = \\mathbf{r} \\times \\mathbf{F}$."
                },
                {
                  "prompt": "For a central force $\\mathbf{F} = f(r)\\mathbf{\\hat{r}}$. What is $\\mathbf{r} \\times f(r)\\mathbf{\\hat{r}}$?",
                  "stepText": "Since $\\mathbf{r} = r\\mathbf{\\hat{r}}$, we have $rf(r)(\\mathbf{\\hat{r}} \\times \\mathbf{\\hat{r}}) = 0$. Therefore, $\\mathbf{l}$ is constant.",
                  "options": [
                    { "id": "A", "text": "0", "isCorrect": true, "explanation": "The radius vector and the central force vector are parallel, so their cross product is zero." },
                    { "id": "B", "text": "$rf(r)$", "isCorrect": false, "explanation": "Cross products of parallel vectors vanish." }
                  ]
                }
              ]
            },
            {
              "id": "s4-numerical",
              "type": "numerical",
              "title": "Calculate Angular Momentum",
              "content": "A planet of mass $m=2$ is in a circular orbit of radius $r_0=4$ around a star. Its orbital velocity is $v=3$. Determine the magnitude of its angular momentum $l$.",
              "numericAnswer": 24,
              "numericTolerance": 0.1
            },
            {
              "id": "s5-quiz",
              "type": "quiz",
              "title": "Parallel Vectors",
              "content": "Assume $\\mathbf{r}$ and $\\mathbf{v}$ are perpendicular at an initial moment. Why can the two vectors never be parallel to one another at a later time?",
              "options": [
                { "id": "1", "text": "Because velocity must decrease.", "isCorrect": false, "explanation": "Velocity can change, but that's not the reason." },
                { "id": "2", "text": "Because angular momentum is constant.", "isCorrect": true, "explanation": "If they became parallel, $\\mathbf{l} = \\mathbf{r} \\times m\\mathbf{v}$ would become zero, violating conservation." },
                { "id": "3", "text": "Because central forces only attract.", "isCorrect": false, "explanation": "Central forces can be repulsive too." }
              ]
            },
            {
              "id": "s6-blank",
              "type": "fill_in_blank",
              "title": "Plane of Motion",
              "content": "Because the angular momentum is constant, the particle must move in a fixed ___.",
              "blankAnswer": "plane"
            }
          ]
        },
        {
          "id": "lesson-1-2-3-worked-example",
          "title": "Worked Example: Inverse Cubed Force",
          "description": "Applying Newton's second law in polar coordinates.",
          "icon": "PenTool",
          "slides": [
            {
              "id": "s1-q",
              "type": "example_q",
              "title": "The Problem",
              "content": "A particle is in a **circular orbit** under the action of an attractive central force given by $f(r) = -k/r^3$. \n\nObtain an expression for the angular momentum $l$ and show that it is constant."
            },
            {
              "id": "s2-sol",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "We begin with Newton's second law in polar coordinates.",
              "interactiveSteps": [
                {
                  "stepText": "The acceleration in polar coordinates is $\\ddot{\\mathbf{r}} = (\\ddot{r} - r\\dot{\\theta}^2)\\mathbf{\\hat{r}} + (r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta})\\hat{\\theta}$."
                },
                {
                  "prompt": "Since the orbit is circular, the radius $r$ is constant. What does this mean for $\\dot{r}$ and $\\ddot{r}$?",
                  "stepText": "Because $r$ is constant, $\\dot{r} = 0$ and $\\ddot{r} = 0$.",
                  "options": [
                    { "id": "A", "text": "They are constant but non-zero.", "isCorrect": false, "explanation": "If r doesn't change, its rate of change must be exactly zero." },
                    { "id": "B", "text": "They are both zero.", "isCorrect": true, "explanation": "Correct. A constant radius has zero time derivatives." }
                  ]
                },
                {
                  "stepText": "Newton's second law $m\\ddot{\\mathbf{r}} = f(r)\\mathbf{\\hat{r}}$ splits into two scalar equations:\nRadial: $-mr\\dot{\\theta}^2 = -k/r^3$\nAngular: $mr\\ddot{\\theta} = 0$"
                },
                {
                  "prompt": "From the angular equation $mr\\ddot{\\theta} = 0$, we know $\\ddot{\\theta} = 0$. What does this imply?",
                  "stepText": "$\\dot{\\theta}$ is constant. Since $r$ and $\\dot{\\theta}$ are constant, $l = mr^2\\dot{\\theta}$ is constant.",
                  "options": [
                    { "id": "A", "text": "$\\dot{\\theta}$ is constant.", "isCorrect": true, "explanation": "The integral of zero is a constant." },
                    { "id": "B", "text": "$\\dot{\\theta}$ is zero.", "isCorrect": false, "explanation": "If it were zero, it wouldn't be moving in a circle." }
                  ]
                },
                {
                  "stepText": "Finally, from the radial equation $mr\\dot{\\theta}^2 = k/r^3$, we multiply by $mr^3$ to get $m^2 r^4 \\dot{\\theta}^2 = mk$. Since $l = mr^2\\dot{\\theta}$, we have $l^2 = mk$, so $l = \\sqrt{mk}$."
                }
              ]
            },
            {
              "id": "s3-quiz",
              "type": "quiz",
              "title": "Check Step 1",
              "content": "Why was the radial acceleration component simply $-r\\dot{\\theta}^2$?",
              "options": [
                { "id": "1", "text": "Because $\\ddot{r}$ is zero for circular orbits.", "isCorrect": true, "explanation": "Constant radius means no radial acceleration other than centripetal." },
                { "id": "2", "text": "Because the force is attractive.", "isCorrect": false, "explanation": "The attractive force determines the right side of the equation, not the kinematic definition." }
              ]
            },
            {
              "id": "s4-quiz",
              "type": "quiz",
              "title": "Check Step 2",
              "content": "What is the final expression for the angular momentum squared ($l^2$) in this specific system?",
              "options": [
                { "id": "1", "text": "$m/k$", "isCorrect": false, "explanation": "Check the algebra step again." },
                { "id": "2", "text": "$mk$", "isCorrect": true, "explanation": "$l^2 = mk$." },
                { "id": "3", "text": "$k/r$", "isCorrect": false, "explanation": "$l$ is independent of $r$ in this specific case." }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "unit-1-3",
      "title": "The Equation of Motion",
      "description": "Newtonian and Lagrangian approaches to orbits.",
      "color": "duo-blue",
      "lessons": [
        {
          "id": "lesson-1-3-1-newton",
          "title": "Newton's Second Law Approach",
          "description": "Decoupling the equations using angular momentum.",
          "icon": "TrendingUp",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "Equations in Polar Coordinates",
              "content": "For a mass $m$ in the gravitational field of $M$, the force is $F = -\\frac{GMm}{r^2}\\mathbf{\\hat{r}}$.\n\nUsing $\\ddot{\\mathbf{r}}$ in polar coordinates, we get two coupled equations:\n1. Radial: $m(\\ddot{r} - r\\dot{\\theta}^2) = -\\frac{GMm}{r^2}$\n2. Angular: $m(r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta}) = 0$",
              "canvasId": "polar-coords"
            },
            {
              "id": "s2-example",
              "type": "example",
              "title": "The Angular Equation",
              "content": "The angular equation $m(r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta}) = 0$ can be rewritten as:\n$\\frac{d}{dt}(mr^2\\dot{\\theta}) = 0$\n\nThis tells us immediately that $mr^2\\dot{\\theta} = l$ (a constant)."
            },
            {
              "id": "s3-proof",
              "type": "proof",
              "title": "Decoupling the Radial Equation",
              "content": "We want a single equation with only $r$.",
              "interactiveSteps": [
                {
                  "stepText": "Start with the radial equation: $\\ddot{r} - r\\dot{\\theta}^2 = -\\frac{GM}{r^2}$."
                },
                {
                  "prompt": "How can we eliminate $\\dot{\\theta}$ using the angular momentum $l$?",
                  "stepText": "Substitute $\\dot{\\theta} = \\frac{l}{mr^2}$ into the radial equation.",
                  "options": [
                    { "id": "A", "text": "Substitute $\\dot{\\theta} = \\frac{l}{mr}$", "isCorrect": false, "explanation": "Don't forget the $r^2$ in $l = mr^2\\dot{\\theta}$." },
                    { "id": "B", "text": "Substitute $\\dot{\\theta} = \\frac{l}{mr^2}$", "isCorrect": true, "explanation": "Correct relationship." }
                  ]
                },
                {
                  "stepText": "$\\ddot{r} - r\\left(\\frac{l}{mr^2}\\right)^2 = -\\frac{GM}{r^2}$"
                },
                {
                  "stepText": "Simplifying gives the **one-dimensional equation**: \n$\\ddot{r} - \\frac{l^2}{m^2 r^3} = -\\frac{GM}{r^2}$"
                }
              ]
            },
            {
              "id": "s4-numerical",
              "type": "numerical",
              "title": "Calculate Radial Acceleration",
              "content": "Suppose an object has mass $m=1$, angular momentum $l=2$, and is currently at radius $r=2$. The central force magnitude is $f(r) = -1/r^2$.\n\nUsing $\\ddot{r} = \\frac{l^2}{m^2r^3} + \\frac{f(r)}{m}$, calculate the radial acceleration $\\ddot{r}$.",
              "numericAnswer": 0.25,
              "numericTolerance": 0.05
            },
            {
              "id": "s5-quiz",
              "type": "quiz",
              "title": "Significance of Decoupling",
              "content": "Why is the final equation $\\ddot{r} - \\frac{l^2}{m^2 r^3} = -\\frac{GM}{r^2}$ referred to as a 'one-dimensional equation'?",
              "options": [
                { "id": "1", "text": "Because the particle only moves in a straight line.", "isCorrect": false, "explanation": "The particle moves in 2D, but we've simplified the math." },
                { "id": "2", "text": "Because it only contains the variable $r$ and its derivatives.", "isCorrect": true, "explanation": "$\\theta$ has been completely eliminated." },
                { "id": "3", "text": "Because angular momentum is zero.", "isCorrect": false, "explanation": "Angular momentum is $l$, not necessarily zero." }
              ]
            },
            {
              "id": "s6-blank",
              "type": "fill_in_blank",
              "title": "Decoupling",
              "content": "Conservation of angular momentum ___ the equations of motion.",
              "blankAnswer": "decouples"
            }
          ]
        },
        {
          "id": "lesson-1-3-2-lagrangian",
          "title": "The Lagrangian Technique",
          "description": "An easier way to find the equations of motion.",
          "icon": "Activity",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "The Lagrangian",
              "content": "The Lagrangian is $L = T - V$. For an orbit, kinetic energy is $\\frac{1}{2}m(\\dot{r}^2 + r^2\\dot{\\theta}^2)$ and potential is $V(r) = -\\frac{GMm}{r}$.\n\n$$L = \\frac{1}{2}m\\dot{r}^2 + \\frac{1}{2}mr^2\\dot{\\theta}^2 + \\frac{GMm}{r}$$"
            },
            {
              "id": "s2-example",
              "type": "example",
              "title": "Lagrange's Equations",
              "content": "To find the equations of motion, we use:\n$$\\frac{d}{dt}\\frac{\\partial L}{\partial \\dot{q}_i} - \\frac{\\partial L}{\partial q_i} = 0$$\nwhere the coordinates $q_i$ are $r$ and $\\theta$."
            },
            {
              "id": "s3-proof",
              "type": "proof",
              "title": "Deriving the Angular Equation",
              "content": "Let's apply Euler-Lagrange to the $\\theta$ coordinate.",
              "interactiveSteps": [
                {
                  "prompt": "Looking at $L = \\frac{1}{2}m\\dot{r}^2 + \\frac{1}{2}mr^2\\dot{\\theta}^2 + \\frac{GMm}{r}$, what is $\\frac{\\partial L}{\\partial \\dot{\\theta}}$?",
                  "stepText": "$\\frac{\\partial L}{\\partial \\dot{\\theta}} = mr^2\\dot{\\theta}$. This is exactly the angular momentum!",
                  "options": [
                    { "id": "A", "text": "$mr^2\\dot{\\theta}$", "isCorrect": true, "explanation": "The derivative of $\\frac{1}{2}mr^2\\dot{\\theta}^2$ with respect to $\\dot{\\theta}$." },
                    { "id": "B", "text": "$m\\dot{r}$", "isCorrect": false, "explanation": "That would be the derivative with respect to $\\dot{r}$." }
                  ]
                },
                {
                  "prompt": "Now, what is $\\frac{\\partial L}{\\partial \\theta}$?",
                  "stepText": "$\\frac{\\partial L}{\\partial \\theta} = 0$, because $\\theta$ does not explicitly appear in $L$.",
                  "options": [
                    { "id": "A", "text": "$0$", "isCorrect": true, "explanation": "Since $\\theta$ doesn't appear, its partial derivative is zero." },
                    { "id": "B", "text": "$\\frac{GMm}{r}$", "isCorrect": false, "explanation": "That relies on $r$, not $\\theta$." }
                  ]
                },
                {
                  "stepText": "Substituting into Lagrange's equation: $\\frac{d}{dt}(mr^2\\dot{\\theta}) - 0 = 0$. This instantly proves $l = const$."
                }
              ]
            },
            {
              "id": "s4-numerical",
              "type": "numerical",
              "title": "Calculate the Lagrangian",
              "content": "Given $m=2$, $\\dot{r}=1$, $r=2$, $\\dot{\\theta}=2$, and $V(r) = -5$.\n\nCalculate the numerical value of $L = T - V$.",
              "numericAnswer": 22,
              "numericTolerance": 0.1
            },
            {
              "id": "s5-quiz",
              "type": "quiz",
              "title": "Ignorable Coordinates",
              "content": "In mechanics, if a coordinate (like $\\theta$) does not explicitly appear in the Lagrangian, what is it called?",
              "options": [
                { "id": "1", "text": "An invariant coordinate", "isCorrect": false, "explanation": "Not the standard term." },
                { "id": "2", "text": "An ignorable (or cyclic) coordinate", "isCorrect": true, "explanation": "Ignorable coordinates always lead to conserved quantities (like angular momentum)." },
                { "id": "3", "text": "A stationary coordinate", "isCorrect": false, "explanation": "Incorrect." }
              ]
            },
            {
              "id": "s6-blank",
              "type": "fill_in_blank",
              "title": "Lagrangian Review",
              "content": "The partial derivative of $L$ with respect to $\\theta$ is ___, which leads to conservation of angular momentum.",
              "blankAnswer": "zero"
            }
          ]
        }
      ]
    }
  ]
};