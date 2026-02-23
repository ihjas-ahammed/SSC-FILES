import { Section } from '../types';

export const SECTION_4_2: Section = {
  "id": "section-4-2",
  "title": "Section 2: Fictitious Forces & The Plumb Bob",
  "description": "Deriving the Coriolis and Centrifugal forces and understanding Earth's equatorial bulge.",
  "color": "duo-blue",
  "units": [
    {
      "id": "unit-4-3",
      "title": "Fictitious Forces",
      "description": "Formulating Newton's second law in a rotating frame and analyzing a bug on a record player.",
      "color": "duo-blue",
      "lessons": [
        {
          "id": "lesson-4-3-1-accel-derivation",
          "title": "Deriving Inertial Acceleration",
          "description": "Applying the operator equation to velocity.",
          "icon": "TrendingUp",
          "slides": [
            {
              "id": "s1",
              "type": "theory",
              "title": "Acceleration in Inertial Space",
              "content": "We know the velocity in inertial space is $\\mathbf{v}_i = \\mathbf{v}_r + \\mathbf{\\Omega} \\times \\mathbf{r}$.\n\nTo find the inertial acceleration $\\mathbf{a}_i$, we must apply the operator equation $\\left[\\frac{d}{dt}\\right]_{inertial} = \\left[\\frac{d}{dt}\\right]_{rot} + \\mathbf{\\Omega} \\times$ to the velocity vector $\\mathbf{v}_i$."
            },
            {
              "id": "s2",
              "type": "proof",
              "title": "Interactive Proof: Applying the Operator",
              "content": "Let's apply the operator carefully step-by-step.",
              "interactiveSteps": [
                {
                  "stepText": "We want to evaluate $\\mathbf{a}_i = \\left[\\frac{d}{dt}(\\mathbf{v}_r + \\mathbf{\\Omega} \\times \\mathbf{r})\\right]_{rot} + \\mathbf{\\Omega} \\times (\\mathbf{v}_r + \\mathbf{\\Omega} \\times \\mathbf{r})$."
                },
                {
                  "prompt": "Distribute the rotational time derivative $\\left[\\frac{d}{dt}\\right]_{rot}$ across the first term $(\\mathbf{v}_r + \\mathbf{\\Omega} \\times \\mathbf{r})$. Note that we assume $\\mathbf{\\Omega}$ is constant ($d\\mathbf{\\Omega}/dt = 0$).",
                  "stepText": "It becomes $\\mathbf{a}_r + \\mathbf{\\Omega} \\times \\mathbf{v}_r$.",
                  "options": [
                    { "id": "A", "text": "$\\mathbf{a}_r + \\mathbf{\\Omega} \\times \\mathbf{v}_r$", "isCorrect": true, "explanation": "The derivative of $\\mathbf{v}_r$ in the rotating frame is just $\\mathbf{a}_r$. The derivative of $\\mathbf{r}$ in the rotating frame is $\\mathbf{v}_r$." },
                    { "id": "B", "text": "$\\mathbf{a}_r$", "isCorrect": false, "explanation": "Don't forget to take the derivative of the $\\mathbf{r}$ inside the cross product!" }
                  ]
                },
                {
                  "prompt": "Now distribute the cross product $\\mathbf{\\Omega} \\times$ across the second term $(\\mathbf{v}_r + \\mathbf{\\Omega} \\times \\mathbf{r})$.",
                  "stepText": "It becomes $\\mathbf{\\Omega} \\times \\mathbf{v}_r + \\mathbf{\\Omega} \\times (\\mathbf{\\Omega} \\times \\mathbf{r})$.",
                  "options": [
                    { "id": "A", "text": "$\\mathbf{\\Omega} \\times \\mathbf{v}_r + \\mathbf{\\Omega} \\times (\\mathbf{\\Omega} \\times \\mathbf{r})$", "isCorrect": true, "explanation": "Simple vector distribution." }
                  ]
                },
                {
                  "stepText": "Add them together! The $\\mathbf{\\Omega} \\times \\mathbf{v}_r$ term appears twice. \nFinal equation: $\\mathbf{a}_i = \\mathbf{a}_r + 2\\mathbf{\\Omega} \\times \\mathbf{v}_r + \\mathbf{\\Omega} \\times (\\mathbf{\\Omega} \\times \\mathbf{r})$."
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Understanding the Terms",
              "content": "In the final acceleration equation, what does $\\mathbf{a}_r$ represent?",
              "options": [
                { "id": "1", "text": "The absolute acceleration of the particle in inertial space.", "isCorrect": false, "explanation": "That is $\\mathbf{a}_i$." },
                { "id": "2", "text": "The apparent acceleration of the particle as measured by an observer in the rotating reference frame.", "isCorrect": true, "explanation": "It is exactly what a person on Earth would measure with an accelerometer." }
              ]
            },
            {
              "id": "s4",
              "type": "fill_in_blank",
              "title": "Assumption Check",
              "content": "In this derivation, we assumed the Earth's rotation rate was strictly ___, which is why the $d\\mathbf{\\Omega}/dt$ term vanished.",
              "blankAnswer": "constant"
            }
          ]
        },
        {
          "id": "lesson-4-3-2-newtons-second-law",
          "title": "Newton's Second Law in Rotating Frames",
          "description": "Rearranging the terms to formulate fictitious forces.",
          "icon": "ActivitySquare",
          "slides": [
            {
              "id": "s1",
              "type": "theory",
              "title": "Creating Fictitious Forces",
              "content": "Newton's second law is valid in the inertial frame: $m\\mathbf{a}_i = \\mathbf{F}$, where $\\mathbf{F}$ is the net real physical force.\n\nSubstitute our acceleration equation: $m[\\mathbf{a}_r + 2\\mathbf{\\Omega} \\times \\mathbf{v}_r + \\mathbf{\\Omega} \\times (\\mathbf{\\Omega} \\times \\mathbf{r})] = \\mathbf{F}$."
            },
            {
              "id": "s2",
              "type": "example",
              "title": "The Equation of Motion",
              "content": "To predict motion on Earth, we need an equation for $\\mathbf{a}_r$. Rearranging the terms gives:\n\n$$m\\mathbf{a}_r = \\mathbf{F} - 2m\\mathbf{\\Omega} \\times \\mathbf{v}_r - m\\mathbf{\\Omega} \\times (\\mathbf{\\Omega} \\times \\mathbf{r})$$\n\nThis looks like $F_{net} = ma$. The extra terms on the right act as additional forces pulling on the particle. Because they only arise from the coordinate transformation, they are called **fictitious forces**."
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Nature of Fictitious Forces",
              "content": "Why do physicists use the word \"fictitious\" to describe the Coriolis and Centrifugal forces?",
              "options": [
                { "id": "1", "text": "Because they have no measurable physical effect.", "isCorrect": false, "explanation": "They absolutely cause measurable effects, like hurricanes and the Earth's bulge!" },
                { "id": "2", "text": "Because they are not caused by physical interactions between bodies, but are just mass-times-acceleration terms moved across the equals sign.", "isCorrect": true, "explanation": "Real forces (like gravity or tension) are interactions. Fictitious forces are a geometric consequence of being in a non-inertial frame." },
                { "id": "3", "text": "Because they only exist in theoretical models.", "isCorrect": false, "explanation": "They exist in the frame of any rotating observer." }
              ]
            },
            {
              "id": "s4",
              "type": "fill_in_blank",
              "title": "Formula Structure",
              "content": "When moving the acceleration terms to the right side of the equation to act as forces, their signs must become ___.",
              "blankAnswer": "negative"
            }
          ]
        },
        {
          "id": "lesson-4-3-3-centrifugal-concept",
          "title": "The Centrifugal Force",
          "description": "Analyzing the position-dependent fictitious force.",
          "icon": "Target",
          "slides": [
            {
              "id": "s1",
              "type": "theory",
              "title": "Centrifugal Force Defined",
              "content": "The term $-m\\mathbf{\\Omega} \\times (\\mathbf{\\Omega} \\times \\mathbf{r})$ is called the **Centrifugal force**.\n\n*   It depends ONLY on the position $\\mathbf{r}$ of the particle, not its velocity.\n*   Even an object perfectly at rest on the ground experiences this force.\n*   It points strictly perpendicularly AWAY from the axis of rotation."
            },
            {
              "id": "s2",
              "type": "example",
              "title": "Direction Analysis",
              "content": "Let the axis of rotation be the z-axis ($\\mathbf{\\Omega} = \\Omega \\mathbf{\\hat{k}}$).\nLet $\\mathbf{r}$ be a position vector pointing outward in the xy-plane ($\\mathbf{\\rho}$). \n\nThe inner cross product $\\mathbf{\\Omega} \\times \\mathbf{r}$ points tangentially. \nThe outer cross product $\\mathbf{\\Omega} \\times$ (tangential) points radially INWARD (centripetal).\nThe negative sign flips it to point radially OUTWARD (centrifugal)."
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Dependence on Position",
              "content": "Where on the surface of the Earth is the Centrifugal force strictly zero?",
              "options": [
                { "id": "1", "text": "At the Equator", "isCorrect": false, "explanation": "Here, $\\mathbf{r}$ is perpendicular to $\\mathbf{\\Omega}$, maximizing the cross product." },
                { "id": "2", "text": "At the North and South Poles", "isCorrect": true, "explanation": "At the poles, the position vector $\\mathbf{r}$ is perfectly parallel to the rotation axis $\\mathbf{\\Omega}$. The cross product of parallel vectors is zero." },
                { "id": "3", "text": "It is never zero on the surface.", "isCorrect": false, "explanation": "It depends on the distance from the rotation axis." }
              ]
            },
            {
              "id": "s4",
              "type": "numerical",
              "title": "Centrifugal Magnitude",
              "content": "If a 10 kg mass is located 5 meters away from the axis of a centrifuge rotating at 2 rad/s, what is the magnitude of the centrifugal force in Newtons? \n(Formula: $m \\Omega^2 r_{\\perp}$)",
              "numericAnswer": 200,
              "numericTolerance": 1
            }
          ]
        },
        {
          "id": "lesson-4-3-4-coriolis-concept",
          "title": "The Coriolis Force",
          "description": "Analyzing the velocity-dependent fictitious force.",
          "icon": "Wind",
          "slides": [
            {
              "id": "s1",
              "type": "theory",
              "title": "Coriolis Force Defined",
              "content": "The term $-2m\\mathbf{\\Omega} \\times \\mathbf{v}_r$ is called the **Coriolis force**.\n\n*   It depends strictly on the velocity $\\mathbf{v}_r$ of the particle in the rotating frame.\n*   If an object is stationary, it feels no Coriolis force.\n*   It is always perfectly perpendicular to both the velocity vector and the axis of rotation."
            },
            {
              "id": "s2",
              "type": "example",
              "title": "Perpendicular Nature",
              "content": "Because the force is a cross product involving $\\mathbf{v}_r$, the Coriolis force can never do physical work on a particle!\n\nWork is $W = \\int \\mathbf{F} \\cdot d\\mathbf{r} = \\int \\mathbf{F} \\cdot \\mathbf{v}_r dt$. Since the Coriolis force is always perpendicular to $\\mathbf{v}_r$, the dot product $\\mathbf{F}_{cor} \\cdot \\mathbf{v}_r$ is exactly zero. It can change the direction of an object, but never its speed."
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Direction via Cross Product",
              "content": "Suppose you are standing at the North Pole (where $\\mathbf{\\Omega}$ points straight up). You throw a snowball horizontally straight ahead of you. According to the formula $-2m\\mathbf{\\Omega} \\times \\mathbf{v}_r$, which way is the snowball deflected?",
              "options": [
                { "id": "1", "text": "To the right", "isCorrect": true, "explanation": "Up crossed with Forward points to the Left. The negative sign flips it to the Right." },
                { "id": "2", "text": "To the left", "isCorrect": false, "explanation": "Don't forget the negative sign in the fictitious force formula!" },
                { "id": "3", "text": "Straight down", "isCorrect": false, "explanation": "Cross products are perpendicular to both inputs." }
              ]
            },
            {
              "id": "s4",
              "type": "fill_in_blank",
              "title": "Work and Energy",
              "content": "Because the Coriolis force is always perpendicular to the velocity vector, it does exactly zero ___ on the particle.",
              "blankAnswer": "work"
            }
          ]
        },
        {
          "id": "lesson-4-3-5-worked-15-1-a",
          "title": "Worked Example 15.1: Part (a)",
          "description": "Calculating the inertial velocity of a bug on a record player.",
          "icon": "Disc",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Worked Example 15.1 (a)",
              "content": "An old-fashioned record player is rotating with angular velocity $\\mathbf{\\Omega}_0 = \\Omega_0 \\mathbf{\\hat{k}}$.\n\nA bug crawls with constant speed $v_b$ relative to the record along a groove, moving straight outward from the center.\n\nDetermine the velocity of the bug relative to the room (inertial space)."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "We use cylindrical unit vectors $(\\mathbf{\\hat{\\rho}}, \\mathbf{\\hat{\\phi}}, \\mathbf{\\hat{k}})$ in the rotating frame.",
              "interactiveSteps": [
                {
                  "prompt": "What is the velocity of the bug relative to the record, $\\mathbf{v}_{rot}$?",
                  "stepText": "$\\mathbf{v}_{rot} = v_b \\mathbf{\\hat{\\rho}}$.",
                  "options": [
                    { "id": "A", "text": "$v_b \\mathbf{\\hat{\\rho}}$", "isCorrect": true, "explanation": "It crawls straight outward along the radial line." },
                    { "id": "B", "text": "$v_b \\mathbf{\\hat{\\phi}}$", "isCorrect": false, "explanation": "That would mean it is walking in a circle around the center." }
                  ]
                },
                {
                  "stepText": "The transformation equation is $\\mathbf{v}_i = \\mathbf{v}_{rot} + \\mathbf{\\Omega}_0 \\times \\mathbf{r}$."
                },
                {
                  "prompt": "What is the rotational term $\\mathbf{\\Omega}_0 \\times \\mathbf{r}$?",
                  "stepText": "$\\mathbf{\\Omega}_0 \\times \\mathbf{r} = (\\Omega_0 \\mathbf{\\hat{k}}) \\times (r \\mathbf{\\hat{\\rho}}) = \\Omega_0 r \\mathbf{\\hat{\\phi}}$.",
                  "options": [
                    { "id": "A", "text": "$\\Omega_0 r \\mathbf{\\hat{\\phi}}$", "isCorrect": true, "explanation": "$\\hat{k} \\times \\hat{\\rho} = \\hat{\\phi}$." },
                    { "id": "B", "text": "$\\Omega_0 r \\mathbf{\\hat{\\rho}}$", "isCorrect": false, "explanation": "The cross product must be perpendicular to the radial vector." }
                  ]
                },
                {
                  "stepText": "Adding them together: $\\mathbf{v}_i = v_b \\mathbf{\\hat{\\rho}} + \\Omega_0 r \\mathbf{\\hat{\\phi}}$."
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Angular Equivalents",
              "content": "For convenience in later steps, the book rewrites the radial velocity $v_b$ in terms of an angular equivalent. If we define $\\Omega_b = v_b / r$, what is the new expression for $\\mathbf{v}_i$?",
              "options": [
                { "id": "1", "text": "$\\mathbf{v}_i = (\\Omega_b + \\Omega_0)r \\mathbf{\\hat{\\phi}}$", "isCorrect": false, "explanation": "They are in different vector directions! One is radial, one is tangential." },
                { "id": "2", "text": "$\\mathbf{v}_i = \\Omega_b r \\mathbf{\\hat{\\rho}} + \\Omega_0 r \\mathbf{\\hat{\\phi}}$", "isCorrect": true, "explanation": "We just substituted $v_b = \\Omega_b r$ directly into the radial component." }
              ]
            },
            {
              "id": "s4",
              "type": "numerical",
              "title": "Calculate Velocity Magnitude",
              "content": "If the bug crawls outward at $v_b = 3$ cm/s, the record rotates at $\\Omega_0 = 4$ rad/s, and the bug is currently at $r = 1$ cm.\n\nCalculate the magnitude of the bug's inertial velocity $|\\mathbf{v}_i|$ in cm/s.",
              "numericAnswer": 5,
              "numericTolerance": 0.1
            }
          ]
        },
        {
          "id": "lesson-4-3-6-worked-15-1-b",
          "title": "Worked Example 15.1: Part (b)",
          "description": "Finding acceleration using elementary centripetal physics.",
          "icon": "Repeat",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Worked Example 15.1 (b)",
              "content": "Assume the bug's radial velocity is extremely small, and we approximate its motion as purely tangential. \n\nWe found $\\mathbf{v}_i = \\Omega_b r \\mathbf{\\hat{\\rho}} + \\Omega_0 r \\mathbf{\\hat{\\phi}}$. But if the bug is moving in a circular path, it has NO radial velocity component.\n\nDetermine the acceleration of the bug by elementary means, using the definition of centripetal acceleration."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "We rely on basic Physics 101 formulas.",
              "interactiveSteps": [
                {
                  "stepText": "If the bug has no radial velocity, it is simply riding the record in a circle."
                },
                {
                  "prompt": "If it is crawling tangentially along the groove at speed $v_b = \\Omega_b r$, its total inertial velocity is just the sum of its crawling speed and the record's rotational speed. What is the total tangential velocity $v_i$?",
                  "stepText": "$v_i = (\\Omega_b + \\Omega_0)r$.",
                  "options": [
                    { "id": "A", "text": "$(\\Omega_b + \\Omega_0)r$", "isCorrect": true, "explanation": "The tangential velocities simply add together." },
                    { "id": "B", "text": "$\\Omega_0 r$", "isCorrect": false, "explanation": "The bug is also crawling, adding its own speed." }
                  ]
                },
                {
                  "prompt": "By definition, the centripetal acceleration for an object moving in a circle of radius $r$ at speed $v_i$ is $v_i^2/r$ directed inward. What is the vector $\\mathbf{a}_i$?",
                  "stepText": "$\\mathbf{a}_i = \\frac{[(\\Omega_b + \\Omega_0)r]^2}{r} (-\\mathbf{\\hat{\\rho}})$.",
                  "options": [
                    { "id": "A", "text": "$\\frac{[(\\Omega_b + \\Omega_0)r]^2}{r} (-\\mathbf{\\hat{\\rho}})$", "isCorrect": true, "explanation": "Square the total velocity, divide by r, and point it inward." },
                    { "id": "B", "text": "$(\\Omega_b + \\Omega_0)^2 r^2 (\\mathbf{\\hat{\\rho}})$", "isCorrect": false, "explanation": "Centripetal acceleration points INWARD ($-\\hat{\\rho}$), and one factor of $r$ cancels out." }
                  ]
                },
                {
                  "stepText": "Simplifying gives $\\mathbf{a}_i = -r(\\Omega_b + \\Omega_0)^2 \\mathbf{\\hat{\\rho}}$. This is our elementary baseline."
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Expanding the Square",
              "content": "If we expand the term $-r(\\Omega_b + \\Omega_0)^2 \\mathbf{\\hat{\\rho}}$, we get three terms: $-r\\Omega_b^2$, $-2r\\Omega_b\\Omega_0$, and $-r\\Omega_0^2$. Which of these terms corresponds to the Coriolis acceleration?",
              "options": [
                { "id": "1", "text": "$-r\\Omega_b^2$", "isCorrect": false, "explanation": "This is purely due to the bug's own speed." },
                { "id": "2", "text": "$-2r\\Omega_b\\Omega_0$", "isCorrect": true, "explanation": "The cross term containing both the frame's rotation $\\Omega_0$ and the object's velocity $\\Omega_b$ perfectly matches the form of the Coriolis force!" },
                { "id": "3", "text": "$-r\\Omega_0^2$", "isCorrect": false, "explanation": "This is the standard centrifugal acceleration of the frame." }
              ]
            }
          ]
        },
        {
          "id": "lesson-4-3-7-worked-15-1-c1",
          "title": "Worked Example 15.1: Part (c) Setup",
          "description": "Setting up the operator equation for the bug's acceleration.",
          "icon": "Layers",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Worked Example 15.1 (c) - Part 1",
              "content": "Now we must find the acceleration of the tangentially-crawling bug using the formal operator equation: \n$\\mathbf{a}_i = \\left[\\frac{d\\mathbf{v}_i}{dt}\\right]_{rot} + \\mathbf{\\Omega}_0 \\times \\mathbf{v}_i$\n\nRecall the inertial velocity is $\\mathbf{v}_i = (\\Omega_b + \\Omega_0)r \\mathbf{\\hat{\\phi}}$."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "We must evaluate the rotational derivative $\\left[\\frac{d\\mathbf{v}_i}{dt}\\right]_{rot}$.",
              "interactiveSteps": [
                {
                  "stepText": "We must take the derivative of $\\mathbf{v}_i = (\\Omega_b + \\Omega_0)r \\mathbf{\\hat{\\phi}}$ with respect to the observer standing on the record."
                },
                {
                  "prompt": "Are the magnitudes $\\Omega_b$, $\\Omega_0$, and $r$ changing over time?",
                  "stepText": "No, they are all constant.",
                  "options": [
                    { "id": "A", "text": "Yes", "isCorrect": false, "explanation": "The bug crawls at a constant speed at a constant radius." },
                    { "id": "B", "text": "No", "isCorrect": true, "explanation": "They are constant scalar values." }
                  ]
                },
                {
                  "prompt": "Is the unit vector $\\mathbf{\\hat{\\phi}}$ changing over time from the perspective of the rotating record?",
                  "stepText": "Yes! Because the bug is physically crawling around the record, its $\\mathbf{\\hat{\\phi}}$ vector rotates as it moves.",
                  "options": [
                    { "id": "A", "text": "Yes, because the bug is moving.", "isCorrect": true, "explanation": "The bug crawls at rate $\\Omega_b$, so the unit vector rotates at that exact rate relative to the record." },
                    { "id": "B", "text": "No, unit vectors are fixed.", "isCorrect": false, "explanation": "In cylindrical coordinates, the unit vectors turn as the position angle changes." }
                  ]
                },
                {
                  "stepText": "The rate of change of the angle in the rotating frame is just the bug's speed $\\Omega_b$. Therefore, $\\left[\\frac{d\\mathbf{\\hat{\\phi}}}{dt}\\right]_{rot} = -\\Omega_b \\mathbf{\\hat{\\rho}}$."
                },
                {
                  "stepText": "Substituting this back: $\\left[\\frac{d\\mathbf{v}_i}{dt}\\right]_{rot} = (\\Omega_b + \\Omega_0)r (-\\Omega_b \\mathbf{\\hat{\\rho}})$. This is the first half of our operator equation!"
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Operator Warning",
              "content": "A common mistake when using the operator equation $\\mathbf{a}_i = \\left[\\frac{d\\mathbf{v}_i}{dt}\\right]_{rot} + \\mathbf{\\Omega}_0 \\times \\mathbf{v}_i$ is to plug in the wrong velocity vector. Which vector MUST be used on BOTH sides of the equation?",
              "options": [
                { "id": "1", "text": "$\\mathbf{v}_{rot}$", "isCorrect": false, "explanation": "That would just give you the acceleration of the bug relative to the record, plus a partial cross product." },
                { "id": "2", "text": "$\\mathbf{v}_i$", "isCorrect": true, "explanation": "You must use the INERTIAL velocity $\\mathbf{v}_i$ in both slots to correctly find the inertial acceleration." }
              ]
            }
          ]
        },
        {
          "id": "lesson-4-3-8-worked-15-1-c2",
          "title": "Worked Example 15.1: Part (c) Conclusion",
          "description": "Evaluating the cross product and confirming the match.",
          "icon": "CheckCircle",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Evaluating the Cross Product",
              "content": "We have the first term: $\\left[\\frac{d\\mathbf{v}_i}{dt}\\right]_{rot} = -\\mathbf{\\hat{\\rho}} r(\\Omega_b + \\Omega_0)\\Omega_b$.\n\nNow evaluate the second term of the operator equation: $\\mathbf{\\Omega}_0 \\times \\mathbf{v}_i$.\nRecall $\\mathbf{\\Omega}_0 = \\Omega_0 \\mathbf{\\hat{k}}$ and $\\mathbf{v}_i = (\\Omega_b + \\Omega_0)r \\mathbf{\\hat{\\phi}}$."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "Let's perform the cross product and sum the terms.",
              "interactiveSteps": [
                {
                  "prompt": "Evaluate $(\\Omega_0 \\mathbf{\\hat{k}}) \\times ((\\Omega_b + \\Omega_0)r \\mathbf{\\hat{\\phi}})$. What is the vector direction?",
                  "stepText": "$\\mathbf{\\hat{k}} \\times \\mathbf{\\hat{\\phi}} = -\\mathbf{\\hat{\\rho}}$.",
                  "options": [
                    { "id": "A", "text": "$-\\mathbf{\\hat{\\rho}}$", "isCorrect": true, "explanation": "Right hand rule: Up crossed with Tangential points radially Inward." },
                    { "id": "B", "text": "$\\mathbf{\\hat{\\rho}}$", "isCorrect": false, "explanation": "Check the right hand rule." }
                  ]
                },
                {
                  "stepText": "So the second term is $-\\mathbf{\\hat{\\rho}} \\Omega_0 (\\Omega_b + \\Omega_0)r$."
                },
                {
                  "prompt": "Now add the two terms together: $\\mathbf{a}_i = -\\mathbf{\\hat{\\rho}} r(\\Omega_b + \\Omega_0)\\Omega_b -\\mathbf{\\hat{\\rho}} r(\\Omega_b + \\Omega_0)\\Omega_0$. Factor out the common $-\\mathbf{\\hat{\\rho}} r(\\Omega_b + \\Omega_0)$. What remains?",
                  "stepText": "$-\\mathbf{\\hat{\\rho}} r(\\Omega_b + \\Omega_0)[\\Omega_b + \\Omega_0]$.",
                  "options": [
                    { "id": "A", "text": "$-\\mathbf{\\hat{\\rho}} r(\\Omega_b + \\Omega_0)[\\Omega_b + \\Omega_0]$", "isCorrect": true, "explanation": "Factoring leaves the sum of the two omegas in the bracket." },
                    { "id": "B", "text": "$-\\mathbf{\\hat{\\rho}} r(\\Omega_b + \\Omega_0)[\\Omega_b - \\Omega_0]$", "isCorrect": false, "explanation": "We are adding two negative terms, so the factored inside is a sum." }
                  ]
                },
                {
                  "stepText": "This perfectly simplifies to $\\mathbf{a}_i = -r\\mathbf{\\hat{\\rho}}(\\Omega_b + \\Omega_0)^2$. This is in absolute agreement with the elementary centripetal derivation from Part (b)!"
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Method Confirmation",
              "content": "Why go through the hassle of the complex operator equation if the elementary $v^2/r$ formula yields the exact same answer?",
              "options": [
                { "id": "1", "text": "Because the operator equation is mathematically rigorous and handles general 3D motions where elementary formulas fail.", "isCorrect": true, "explanation": "If the bug crawled radially and tangentially while the record accelerated, the elementary formula would be useless. The operator equation scales to any complexity." },
                { "id": "2", "text": "Because the elementary formula is an approximation.", "isCorrect": false, "explanation": "The elementary formula is exact for perfect circular motion." }
              ]
            },
            {
              "id": "s4",
              "type": "fill_in_blank",
              "title": "Vectors",
              "content": "In both methods, the final acceleration vector points in the $-\\mathbf{\\hat{\\rho}}$ direction, meaning it is purely ___.",
              "blankAnswer": "radial"
            }
          ]
        }
      ]
    },
    {
      "id": "unit-4-4",
      "title": "Centrifugal Force & The Plumb Bob",
      "description": "How the Earth's rotation alters gravity and the shape of the planet.",
      "color": "duo-green",
      "lessons": [
        {
          "id": "lesson-4-4-1-plumb-bob-setup",
          "title": "The Plumb Bob Setup",
          "description": "Forces acting on a stationary hanging mass.",
          "icon": "Anchor",
          "slides": [
            {
              "id": "s1",
              "type": "theory",
              "title": "The Plumb Bob",
              "content": "Most people assume a hanging plumb bob points directly toward the exact center of the Earth. However, the Earth is rotating!\n\nA plumb bob at rest relative to the Earth has $\\mathbf{v}_r = 0$ and $\\mathbf{a}_r = 0$. \nTherefore, the Coriolis force ($-2m\\mathbf{\\Omega}\\times\\mathbf{v}_r$) vanishes entirely."
            },
            {
              "id": "s2",
              "type": "example",
              "title": "Newton's Second Law",
              "content": "The real forces acting on the bob are Tension $\\mathbf{T}$ and gravity $m\\mathbf{g}$.\nApplying the rotating frame equation $m\\mathbf{a}_r = \\mathbf{F}_{real} + \\mathbf{F}_{fictitious}$:\n\n$$0 = \\mathbf{T} + m\\mathbf{g} - m\\mathbf{\\Omega} \\times (\\mathbf{\\Omega} \\times \\mathbf{r})$$"
            },
            {
              "id": "s3",
              "type": "proof",
              "title": "Interactive Proof: Direction of Tension",
              "content": "Let's isolate the Tension vector.",
              "interactiveSteps": [
                {
                  "stepText": "We have $0 = \\mathbf{T} + m\\mathbf{g} - m\\mathbf{\\Omega} \\times (\\mathbf{\\Omega} \\times \\mathbf{r})$."
                },
                {
                  "prompt": "Solve for $\\mathbf{T}$. What does the tension equal?",
                  "stepText": "$\\mathbf{T} = -m\\mathbf{g} + m\\mathbf{\\Omega} \\times (\\mathbf{\\Omega} \\times \\mathbf{r})$.",
                  "options": [
                    { "id": "A", "text": "$\\mathbf{T} = -m\\mathbf{g} + m\\mathbf{\\Omega} \\times (\\mathbf{\\Omega} \\times \\mathbf{r})$", "isCorrect": true, "explanation": "Move the other terms to the other side." },
                    { "id": "B", "text": "$\\mathbf{T} = m\\mathbf{g} + m\\mathbf{\\Omega} \\times (\\mathbf{\\Omega} \\times \\mathbf{r})$", "isCorrect": false, "explanation": "Watch the signs. Gravity must be negative." }
                  ]
                },
                {
                  "stepText": "Notice that $\\mathbf{g}$ points directly to the center of the Earth. But $\\mathbf{T}$ is the sum of $-\\mathbf{g}$ AND a centrifugal term."
                },
                {
                  "stepText": "Therefore, the string (which aligns with $\\mathbf{T}$) does NOT point parallel to $\\mathbf{g}$! It is deflected slightly."
                }
              ]
            },
            {
              "id": "s4",
              "type": "quiz",
              "title": "Centrifugal Deflection",
              "content": "Because the centrifugal force $-m\\mathbf{\\Omega} \\times (\\mathbf{\\Omega} \\times \\mathbf{r})$ always points radially OUTWARD from the axis of rotation, how does it affect the plumb bob's string?",
              "options": [
                { "id": "1", "text": "It pulls the bob slightly towards the equator.", "isCorrect": true, "explanation": "An outward force from the polar axis pulls the bob tangentially towards the wider equator." },
                { "id": "2", "text": "It pulls the bob slightly towards the nearest pole.", "isCorrect": false, "explanation": "That would require an inward force." },
                { "id": "3", "text": "It doesn't affect the angle, only the tension magnitude.", "isCorrect": false, "explanation": "It changes both magnitude and direction." }
              ]
            }
          ]
        },
        {
          "id": "lesson-4-4-2-effective-gravity",
          "title": "Effective Gravity",
          "description": "Defining the combined gravitational-centrifugal field.",
          "icon": "ArrowDownToLine",
          "slides": [
            {
              "id": "s1",
              "type": "theory",
              "title": "Defining Effective Gravity",
              "content": "Because everything on Earth is subjected to both true gravity $\\mathbf{g}$ and the centrifugal force simultaneously, it is highly convenient to lump them together into a single term.\n\nWe define the **effective gravitational acceleration** $\\mathbf{g}_e$ as:\n$$\\mathbf{g}_e = \\mathbf{g} - \\mathbf{\\Omega} \\times (\\mathbf{\\Omega} \\times \\mathbf{r})$$"
            },
            {
              "id": "s2",
              "type": "example",
              "title": "Simplifying the Equation",
              "content": "Using this definition, the equation for our plumb bob becomes extremely simple:\n\n$$\\mathbf{T} + m\\mathbf{g}_e = 0$$\n\nThis means the tension in the string is perfectly directed opposite to $\\mathbf{g}_e$. When we measure \"gravity\" experimentally on Earth, we are actually measuring $\\mathbf{g}_e$, not the pure $\\mathbf{g}$."
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Equator vs Poles",
              "content": "Where on Earth does the effective gravity $\\mathbf{g}_e$ perfectly align with the true gravity $\\mathbf{g}$ pointing to the exact center of the Earth?",
              "options": [
                { "id": "1", "text": "Only at the equator.", "isCorrect": false, "explanation": "At the equator, the centrifugal force points straight up, so it aligns, but what about the poles?" },
                { "id": "2", "text": "Only at the poles.", "isCorrect": false, "explanation": "At the poles, centrifugal force is zero, so they align." },
                { "id": "3", "text": "At both the equator and the poles.", "isCorrect": true, "explanation": "At the equator, centrifugal force is perfectly anti-parallel to gravity (pointing straight up). At the poles, it is exactly zero. In both cases, the resulting $\\mathbf{g}_e$ points to the center." }
              ]
            },
            {
              "id": "s4",
              "type": "numerical",
              "title": "Calculate Centrifugal Effect at Equator",
              "content": "At the equator, $\\mathbf{r}$ is perpendicular to $\\mathbf{\\Omega}$. The centrifugal acceleration magnitude is $\\Omega^2 r$.\n\nGiven $\\Omega = 7.27 \\times 10^{-5}$ rad/s and Earth's radius $r = 6.37 \\times 10^6$ m, what is the value of this outward centrifugal acceleration in m/s$^2$?",
              "numericAnswer": 0.0337,
              "numericTolerance": 0.001
            }
          ]
        },
        {
          "id": "lesson-4-4-3-equatorial-bulge",
          "title": "Earth's Equatorial Bulge",
          "description": "Why the Earth is an oblate spheroid.",
          "icon": "Globe",
          "slides": [
            {
              "id": "s1",
              "type": "theory",
              "title": "The Oblate Spheroid",
              "content": "The centrifugal force is responsible for the fact that the Earth is not a sphere; it has a 'bulge' at the equator.\n\nOver billions of years, the fluid/molten Earth deformed. The surface shifted until it was perfectly perpendicular to the local effective gravity $\\mathbf{g}_e$ everywhere. This shape is an oblate spheroid."
            },
            {
              "id": "s2",
              "type": "example",
              "title": "Local Perpendicular",
              "content": "Because the Earth bulged to match $\\mathbf{g}_e$, the surface of the oceans is strictly perpendicular to $\\mathbf{g}_e$.\n\nTherefore, even though a plumb line does not point toward the exact center of the Earth, it DOES point perfectly perpendicular to the local ground level!"
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Gravitational Variations",
              "content": "Because of the equatorial bulge, you are slightly further from the center of the Earth at the equator than at the poles. Combined with the upward centrifugal force, how does your measured weight change?",
              "options": [
                { "id": "1", "text": "You weigh slightly less at the equator.", "isCorrect": true, "explanation": "Being further away reduces true $g$, AND the centrifugal force pushes you upward, both reducing your effective weight." },
                { "id": "2", "text": "You weigh slightly more at the equator.", "isCorrect": false, "explanation": "The centrifugal force opposes gravity at the equator." },
                { "id": "3", "text": "Your weight is exactly the same everywhere.", "isCorrect": false, "explanation": "Gravity $g_e$ varies by about 0.5%." }
              ]
            },
            {
              "id": "s4",
              "type": "fill_in_blank",
              "title": "Surface alignment",
              "content": "If you pour water onto the surface of the Earth, it settles into a shape that is perfectly perpendicular to the ___ gravitational vector $\\mathbf{g}_e$.",
              "blankAnswer": "effective"
            }
          ]
        },
        {
          "id": "lesson-4-4-4-ex15-3",
          "title": "Exercise 15.3: Surface Forces",
          "description": "Resolving centrifugal forces on spherical vs oblate planets.",
          "icon": "Layers",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Exercise 15.3",
              "content": "Draw the force diagram for a particle on the surface of a perfectly smooth, spherical, rotating planet and show that the particle accelerates towards the equator.\n\nDemonstrate that for a planet with an equatorial bulge, there is no net lateral force."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "Let's resolve the centrifugal force into parallel and perpendicular components.",
              "interactiveSteps": [
                {
                  "stepText": "On a perfectly spherical planet, the surface normal points directly to the center. Gravity also points directly to the center."
                },
                {
                  "prompt": "The centrifugal force points straight outward from the polar axis. Does this vector align perfectly with the surface normal at mid-latitudes (like 45 degrees)?",
                  "stepText": "No, it points at an angle to the normal.",
                  "options": [
                    { "id": "A", "text": "Yes", "isCorrect": false, "explanation": "Only at the equator do they align." },
                    { "id": "B", "text": "No", "isCorrect": true, "explanation": "Because it points away from the axis, not away from the center of the sphere." }
                  ]
                },
                {
                  "stepText": "Because it points at an angle, the centrifugal force can be split into a vertical component (pushing the particle up, making it lighter) and a horizontal component (pushing it laterally along the surface)."
                },
                {
                  "prompt": "In which direction does this unbalanced horizontal component push?",
                  "stepText": "It pushes 'downhill' toward the wider equator.",
                  "options": [
                    { "id": "A", "text": "Towards the equator", "isCorrect": true, "explanation": "The outward force tends to slide objects toward the widest part of the spin." },
                    { "id": "B", "text": "Towards the pole", "isCorrect": false, "explanation": "That would be inward." }
                  ]
                },
                {
                  "stepText": "On an oblate planet, the ground is physically tilted upwards towards the equator just enough so that the 'uphill' gravity slope exactly cancels this 'downhill' centrifugal push. Thus, net lateral force = 0!"
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Oblate Spheroid Stability",
              "content": "Once a spinning planet has reached its perfect oblate spheroid shape, a ball placed on its smooth surface will:",
              "options": [
                { "id": "1", "text": "Roll towards the equator.", "isCorrect": false, "explanation": "The tilt perfectly cancels the force." },
                { "id": "2", "text": "Roll towards the pole.", "isCorrect": false, "explanation": "No net force exists." },
                { "id": "3", "text": "Stay perfectly still.", "isCorrect": true, "explanation": "The surface is defined as an equipotential surface of $\\mathbf{g}_e$, meaning there are no tangential forces anywhere." }
              ]
            }
          ]
        }
      ]
    }
  ]
};