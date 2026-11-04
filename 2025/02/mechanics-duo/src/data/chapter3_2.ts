import { Section } from '../types';

export const SECTION_3_2: Section = {
  "id": "section-3-2",
  "title": "Section 2: Accelerated Frames & Practicals",
  "description": "Fictitious forces, Coriolis effects, Foucault's Pendulum, and Experimental Physics.",
  "color": "duo-blue",
  "units": [
    {
      "id": "unit-3-4",
      "title": "Accelerated Reference Frames",
      "description": "Understanding motion from the perspective of accelerating and rotating bodies.",
      "color": "duo-blue",
      "lessons": [
        {
          "id": "lesson-3-4-1-linear-accel",
          "title": "Linearly Accelerating Frames",
          "description": "Newton's laws in non-inertial systems.",
          "icon": "ArrowRight",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "Non-Inertial Reference Frames",
              "content": "Newton's laws of motion are only valid in inertial (non-accelerating) frames. However, we live on a rotating Earth, which is an accelerating frame!\n\nIf frame $O'$ accelerates at a constant rate $\\ddot{\\mathbf{r}}$ relative to an inertial frame $O$, the position of a particle is $\\mathbf{r}_O = \\mathbf{r} + \\mathbf{r}_{O'}$.\nTaking the second derivative gives the accelerations: $\\ddot{\\mathbf{r}}_O = \\ddot{\\mathbf{r}}_{O'} + \\ddot{\\mathbf{r}}$."
            },
            {
              "id": "s2-example",
              "type": "example",
              "title": "The Fictitious Force",
              "content": "In the inertial frame, Newton's second law is $\\mathbf{F} = m\\ddot{\\mathbf{r}}_O$.\n\nSubstituting our acceleration equation gives $\\mathbf{F} = m(\\ddot{\\mathbf{r}}_{O'} + \\ddot{\\mathbf{r}})$.\nRearranging for the observer in the accelerating frame $O'$:\n$$m\\ddot{\\mathbf{r}}_{O'} = \\mathbf{F} - m\\ddot{\\mathbf{r}}$$\n\nThe term $\\mathbf{f} = -m\\ddot{\\mathbf{r}}$ is called a **fictitious force**. It appears to act on the particle solely due to the observer's acceleration."
            },
            {
              "id": "s3-proof",
              "type": "proof",
              "title": "Interactive Proof: Feeling the Acceleration",
              "content": "Let's apply this to a real-world scenario: sitting in a car that suddenly accelerates forward.",
              "interactiveSteps": [
                {
                  "stepText": "Let the ground be the inertial frame $O$, and the car be the accelerating frame $O'$ moving with acceleration $\\ddot{\\mathbf{r}} = +a\\mathbf{\\hat{i}}$."
                },
                {
                  "prompt": "According to the equation $\\mathbf{f} = -m\\ddot{\\mathbf{r}}$, what is the fictitious force vector experienced by you (mass $m$) inside the car?",
                  "stepText": "The fictitious force is $\\mathbf{f} = -ma\\mathbf{\\hat{i}}$.",
                  "options": [
                    { "id": "A", "text": "$\\mathbf{f} = +ma\\mathbf{\\hat{i}}$", "isCorrect": false, "explanation": "The formula requires a negative sign." },
                    { "id": "B", "text": "$\\mathbf{f} = -ma\\mathbf{\\hat{i}}$", "isCorrect": true, "explanation": "This perfectly explains why you feel pushed backwards (negative x direction) into your seat!" }
                  ]
                },
                {
                  "prompt": "If no physical force $\\mathbf{F}$ is pushing you forward yet, what is your apparent acceleration $\\ddot{\\mathbf{r}}_{O'}$ in the car's frame?",
                  "stepText": "$\\ddot{\\mathbf{r}}_{O'} = -a\\mathbf{\\hat{i}}$. You accelerate backwards relative to the car until the seat pushes you forward.",
                  "options": [
                    { "id": "A", "text": "$-a\\mathbf{\\hat{i}}$", "isCorrect": true, "explanation": "Correct. Your body tries to stay still while the car moves forward." },
                    { "id": "B", "text": "$0$", "isCorrect": false, "explanation": "You would only have 0 relative acceleration if you were strapped tightly to the car." }
                  ]
                }
              ]
            },
            {
              "id": "s4-quiz",
              "type": "quiz",
              "title": "Nature of Fictitious Forces",
              "content": "Which of the following is true about fictitious forces?",
              "options": [
                { "id": "1", "text": "They represent real physical interactions between bodies.", "isCorrect": false, "explanation": "They do not arise from fundamental interactions like gravity or electromagnetism." },
                { "id": "2", "text": "They are a mathematical consequence of expressing motion in a non-inertial coordinate system.", "isCorrect": true, "explanation": "They are simply $ma$ terms moved to the other side of Newton's equation." },
                { "id": "3", "text": "They only exist in quantum mechanics.", "isCorrect": false, "explanation": "They are purely classical mechanics concepts." }
              ]
            },
            {
              "id": "s5-blank",
              "type": "fill_in_blank",
              "title": "Terminology",
              "content": "A reference frame that is at rest or moving at a constant velocity with respect to the fixed stars is called an ___ reference frame.",
              "blankAnswer": "inertial"
            }
          ]
        },
        {
          "id": "lesson-3-4-2-rotating-frames",
          "title": "Rotating Coordinate Frames",
          "description": "Translating time derivatives between fixed and rotating axes.",
          "icon": "RotateCw",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "Vector Derivatives in Rotating Frames",
              "content": "Consider a coordinate system rigidly attached to the Earth, rotating with angular velocity $\\mathbf{\\Omega}$. \n\nThe time derivative of ANY vector $\\mathbf{U}$ evaluated in the inertial frame is related to the derivative in the rotating frame by the operator equation:\n\n$$\\left[\\frac{d\\mathbf{U}}{dt}\\right]_{inertial} = \\left[\\frac{d\\mathbf{U}}{dt}\\right]_{rot} + \\mathbf{\\Omega} \\times \\mathbf{U}$$"
            },
            {
              "id": "s2-example",
              "type": "example",
              "title": "Velocity Relationship",
              "content": "Applying this to the position vector $\\mathbf{r}$:\n$$\\left[\\frac{d\\mathbf{r}}{dt}\\right]_{inertial} = \\left[\\frac{d\\mathbf{r}}{dt}\\right]_{rot} + \\mathbf{\\Omega} \\times \\mathbf{r}$$\n\nThis translates to: $\\mathbf{v}_i = \\mathbf{v}_r + \\mathbf{\\Omega} \\times \\mathbf{r}$. \nIf a person is standing still on Earth ($\\mathbf{v}_r = 0$), an observer in space sees them moving with velocity $\\mathbf{v}_i = \\mathbf{\\Omega} \\times \\mathbf{r}$."
            },
            {
              "id": "s3-q",
              "type": "example_q",
              "title": "Worked Example 15.1: Bug on a Record",
              "content": "A bug crawls with constant speed $v_b$ outward along a radial line on a record player rotating at $\\mathbf{\\Omega}_0 = \\Omega_0\\mathbf{\\hat{k}}$.\n\nUse the operator equation to find the acceleration of the bug in the inertial frame, $\\mathbf{a}_i$."
            },
            {
              "id": "s4-sol",
              "type": "solution",
              "title": "Interactive Solution: Bug Acceleration",
              "content": "We must apply the operator equation to the velocity vector.",
              "interactiveSteps": [
                {
                  "stepText": "The velocity in the inertial frame is $\\mathbf{v}_i = \\mathbf{v}_r + \\mathbf{\\Omega}_0 \\times \\mathbf{r}$. We must apply the operator $\\left[\\frac{d}{dt}\\right]_{rot} + \\mathbf{\\Omega}_0 \\times$ to $\\mathbf{v}_i$."
                },
                {
                  "prompt": "What is the first term, $\\left[\\frac{d\\mathbf{v}_i}{dt}\\right]_{rot}$?",
                  "stepText": "$\\left[\\frac{d}{dt}(\\mathbf{v}_r + \\mathbf{\\Omega}_0 \\times \\mathbf{r})\\right]_{rot} = \\mathbf{a}_r + \\mathbf{\\Omega}_0 \\times \\mathbf{v}_r$. Since the bug moves at constant speed radially, $\\mathbf{a}_r = 0$.",
                  "options": [
                    { "id": "A", "text": "$\\mathbf{a}_r + \\mathbf{\\Omega}_0 \\times \\mathbf{v}_r$", "isCorrect": true, "explanation": "Correctly applying the rotational time derivative to both parts of v_i." },
                    { "id": "B", "text": "$\\mathbf{a}_r$ only", "isCorrect": false, "explanation": "You must also take the derivative of the $\\Omega_0 \\times r$ term." }
                  ]
                },
                {
                  "prompt": "Now, what is the second term of the operator, $\\mathbf{\\Omega}_0 \\times \\mathbf{v}_i$?",
                  "stepText": "$\\mathbf{\\Omega}_0 \\times (\\mathbf{v}_r + \\mathbf{\\Omega}_0 \\times \\mathbf{r}) = \\mathbf{\\Omega}_0 \\times \\mathbf{v}_r + \\mathbf{\\Omega}_0 \\times (\\mathbf{\\Omega}_0 \\times \\mathbf{r})$.",
                  "options": [
                    { "id": "A", "text": "$\\mathbf{\\Omega}_0 \\times \\mathbf{v}_r + \\mathbf{\\Omega}_0 \\times (\\mathbf{\\Omega}_0 \\times \\mathbf{r})$", "isCorrect": true, "explanation": "Distributing the cross product correctly." },
                    { "id": "B", "text": "$\\mathbf{\\Omega}_0 \\times \\mathbf{v}_r$", "isCorrect": false, "explanation": "You missed substituting the full expression for v_i." }
                  ]
                },
                {
                  "stepText": "Adding them together gives $\\mathbf{a}_i = \\mathbf{a}_r + 2\\mathbf{\\Omega}_0 \\times \\mathbf{v}_r + \\mathbf{\\Omega}_0 \\times (\\mathbf{\\Omega}_0 \\times \\mathbf{r})$. This is the general formula for acceleration!"
                }
              ]
            },
            {
              "id": "s5-quiz",
              "type": "quiz",
              "title": "Exercise 15.2: Angular Velocity Invariance",
              "content": "Prove that the rate of change of the angular velocity of the rotating system is the same in both the inertial and rotating frames. That is, show $\\left[\\frac{d\\mathbf{\\Omega}}{dt}\\right]_{inertial} = \\left[\\frac{d\\mathbf{\\Omega}}{dt}\\right]_{rot}$.",
              "options": [
                { "id": "1", "text": "Because $\\mathbf{\\Omega} \times \\mathbf{\\Omega} = 0$.", "isCorrect": true, "explanation": "Applying the operator to $\\mathbf{\\Omega}$ gives $\\left[\\frac{d\\mathbf{\\Omega}}{dt}\\right]_{rot} + \\mathbf{\\Omega} \\times \\mathbf{\\Omega}$. The cross product of a vector with itself is always zero." },
                { "id": "2", "text": "Because angular velocity is always constant.", "isCorrect": false, "explanation": "Even if it is accelerating (angular acceleration), the rate of change is measured the same in both frames." },
                { "id": "3", "text": "Because it is a scalar.", "isCorrect": false, "explanation": "Angular velocity is a pseudovector." }
              ]
            }
          ]
        },
        {
          "id": "lesson-3-4-3-fictitious-forces",
          "title": "Fictitious Forces Formulation",
          "description": "Coriolis and Centrifugal force equations.",
          "icon": "Wind",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "The Full Acceleration Equation",
              "content": "From the previous lesson, we found the inertial acceleration $\\mathbf{a}_i$ in terms of the rotating frame parameters (assuming $d\\mathbf{\\Omega}/dt = 0$):\n\n$$\\mathbf{a}_i = \\mathbf{a}_r + 2\\mathbf{\\Omega} \\times \\mathbf{v}_r + \\mathbf{\\Omega} \\times (\\mathbf{\\Omega} \\times \\mathbf{r})$$\n\nMultiply by mass $m$ to get $\\mathbf{F} = m\\mathbf{a}_i$, and rearrange to isolate the apparent acceleration $\\mathbf{a}_r$ seen by the rotating observer:"
            },
            {
              "id": "s2-example",
              "type": "example",
              "title": "Newton's Second Law on Earth",
              "content": "Rearranging yields the equation of motion for an observer in a rotating frame:\n\n$$m\\mathbf{a}_r = \\mathbf{F} - 2m\\mathbf{\\Omega} \\times \\mathbf{v}_r - m\\mathbf{\\Omega} \\times (\\mathbf{\\Omega} \\times \\mathbf{r})$$\n\n*   **$\\mathbf{F}$:** Real, physical external forces.\n*   **$-2m\\mathbf{\\Omega} \\times \\mathbf{v}_r$:** The **Coriolis force** (depends on velocity).\n*   **$-m\\mathbf{\\Omega} \\times (\\mathbf{\\Omega} \\times \\mathbf{r})$:** The **Centrifugal force** (depends on position)."
            },
            {
              "id": "s3-quiz",
              "type": "quiz",
              "title": "Direction of Centrifugal Force",
              "content": "Consider the vector $\\mathbf{\\Omega} \\times (\\mathbf{\\Omega} \\times \\mathbf{r})$. What is the direction of the resulting fictitious centrifugal force (which has a negative sign in front)?",
              "options": [
                { "id": "1", "text": "Directly towards the axis of rotation.", "isCorrect": false, "explanation": "That is the direction of the centripetal acceleration $\\Omega \times (\\Omega \times r)$." },
                { "id": "2", "text": "Directly away from the axis of rotation.", "isCorrect": true, "explanation": "The negative sign flips the centripetal direction, making it point radially outward." },
                { "id": "3", "text": "Tangential to the rotation.", "isCorrect": false, "explanation": "Cross products with the axis twice return a radial vector." }
              ]
            },
            {
              "id": "s4-quiz",
              "type": "quiz",
              "title": "Coriolis Dependence",
              "content": "If an object is placed perfectly at rest on the surface of the rotating Earth (relative to the surface), which fictitious force does it NOT experience?",
              "options": [
                { "id": "1", "text": "Centrifugal Force", "isCorrect": false, "explanation": "It experiences this as long as it has a position vector $r$ not on the axis." },
                { "id": "2", "text": "Coriolis Force", "isCorrect": true, "explanation": "The Coriolis force is proportional to $v_r$. If velocity is zero, Coriolis is zero." }
              ]
            }
          ]
        },
        {
          "id": "lesson-3-4-4-centrifugal",
          "title": "Centrifugal Force & The Plumb Bob",
          "description": "Effective gravity and the shape of the Earth.",
          "icon": "Anchor",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "Effective Gravitational Acceleration",
              "content": "A hanging plumb bob on Earth is acted upon by Tension $\\mathbf{T}$, physical gravity $m\\mathbf{g}$, and the centrifugal force. (It is at rest, so Coriolis is zero).\n\n$$m\\mathbf{a}_r = 0 = \\mathbf{T} + m\\mathbf{g} - m\\mathbf{\\Omega} \\times (\\mathbf{\\Omega} \\times \\mathbf{r})$$\n\nWe define **effective gravitational acceleration** $\\mathbf{g}_e$ as:\n$$\\mathbf{g}_e = \\mathbf{g} - \\mathbf{\\Omega} \\times (\\mathbf{\\Omega} \\times \\mathbf{r})$$"
            },
            {
              "id": "s2-example",
              "type": "example",
              "title": "The Plumb Bob Deflection",
              "content": "Because of the centrifugal term pointing outward from the axis, $\\mathbf{g}_e$ does not point exactly towards the center of the Earth (except at the poles and equator).\n\n*   **Northern Hemisphere:** The plumb bob points slightly *below* the center of the Earth.\n*   **Southern Hemisphere:** It points slightly *above* the center."
            },
            {
              "id": "s3-proof",
              "type": "proof",
              "title": "Interactive Proof: The Equatorial Bulge (Exercise 15.3)",
              "content": "Why is the Earth an oblate spheroid?",
              "interactiveSteps": [
                {
                  "stepText": "Imagine a particle on a perfectly smooth, perfectly spherical rotating planet. The forces are gravity (pointing to center) and normal force (pointing away from center)."
                },
                {
                  "prompt": "What does the centrifugal force do?",
                  "stepText": "It points strictly perpendicular and outward from the axis of rotation.",
                  "options": [
                    { "id": "A", "text": "It points towards the equator.", "isCorrect": false, "explanation": "It points outward from the axis." },
                    { "id": "B", "text": "It points outward, perpendicular to the polar axis.", "isCorrect": true, "explanation": "Correct." }
                  ]
                },
                {
                  "prompt": "If you resolve this centrifugal force into components parallel and perpendicular to the spherical surface, what happens?",
                  "stepText": "The parallel component is unbalanced and points towards the equator!",
                  "options": [
                    { "id": "A", "text": "It points towards the poles.", "isCorrect": false, "explanation": "Draw the geometry: outward from the axis pushes things 'down' towards the fatter equator." },
                    { "id": "B", "text": "It points towards the equator.", "isCorrect": true, "explanation": "This unbalanced force caused the early molten Earth to bulge at the equator until the surface sloped enough to perfectly balance it." }
                  ]
                }
              ]
            },
            {
              "id": "s4-quiz",
              "type": "quiz",
              "title": "Local Perpendicular",
              "content": "Despite not pointing at the exact center of the Earth, a plumb line DOES accurately define the local perpendicular to the surface. Why?",
              "options": [
                { "id": "1", "text": "Because liquids (like the oceans) align their surfaces perpendicular to the effective gravity $\\mathbf{g}_e$.", "isCorrect": true, "explanation": "The Earth's equatorial bulge evolved exactly to make the surface perpendicular to the effective gravity vector everywhere!" },
                { "id": "2", "text": "Because the Coriolis force corrects it.", "isCorrect": false, "explanation": "Coriolis force is zero for a stationary plumb bob." },
                { "id": "3", "text": "It is an optical illusion.", "isCorrect": false, "explanation": "It's a physical reality." }
              ]
            },
            {
              "id": "s5-blank",
              "type": "fill_in_blank",
              "title": "Earth's Shape",
              "content": "Because of the centrifugal force, the Earth is not a perfect sphere, but an oblate ___.",
              "blankAnswer": "spheroid"
            }
          ]
        },
        {
          "id": "lesson-3-4-5-coriolis-falling",
          "title": "The Coriolis Force: Falling Body",
          "description": "Calculating the eastward deflection of dropped objects.",
          "icon": "ArrowDown",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "Coordinate System",
              "content": "To study Coriolis effects, we define a local coordinate system:\n*   **z-axis:** Points Up (opposite to $\\mathbf{g}_e$).\n*   **x-axis:** Points East.\n*   **y-axis:** Points North.\n\nLet $\\lambda$ be the colatitude. The Earth's rotation vector is $\\mathbf{\\Omega} = \\Omega\\cos\\lambda \\mathbf{\\hat{j}} + \\Omega\\sin\\lambda \\mathbf{\\hat{k}}$."
            },
            {
              "id": "s2-example",
              "type": "example",
              "title": "A Falling Body",
              "content": "If you drop an object from height $h$, its velocity is primarily downward: $\\mathbf{v}_r \\approx -gt\\mathbf{\\hat{k}}$.\n\nThe Coriolis acceleration is $\\mathbf{a}_c = -2\\mathbf{\\Omega} \\times \\mathbf{v}_r$. \nTaking the cross product of $\\mathbf{\\hat{j}}$ (North) and $-\\mathbf{\\hat{k}}$ (Down) yields an acceleration in the $+\\mathbf{\\hat{i}}$ (East) direction!"
            },
            {
              "id": "s3-proof",
              "type": "proof",
              "title": "Interactive Proof: Eastward Deflection",
              "content": "Let's calculate the exact distance $x$ it deflects East.",
              "interactiveSteps": [
                {
                  "stepText": "The eastward acceleration is $a_x = 2g_e t \\Omega \\sin\\lambda$."
                },
                {
                  "prompt": "Integrate $a_x$ with respect to time to find the eastward velocity $v_x$. The initial $v_x$ is 0.",
                  "stepText": "$v_x = \\int 2g_e t \\Omega \\sin\\lambda dt = g_e t^2 \\Omega \\sin\\lambda$.",
                  "options": [
                    { "id": "A", "text": "$g_e t^2 \\Omega \\sin\\lambda$", "isCorrect": true, "explanation": "The integral of $t$ is $t^2/2$, which cancels the 2." },
                    { "id": "B", "text": "$2g_e t^2 \\Omega \\sin\\lambda$", "isCorrect": false, "explanation": "Remember to divide by 2 when integrating." }
                  ]
                },
                {
                  "prompt": "Integrate $v_x$ with respect to time to find the position $x$.",
                  "stepText": "$x = \\int g_e t^2 \\Omega \\sin\\lambda dt = \\frac{1}{3}g_e t^3 \\Omega \\sin\\lambda$.",
                  "options": [
                    { "id": "A", "text": "$\\frac{1}{3}g_e t^3 \\Omega \\sin\\lambda$", "isCorrect": true, "explanation": "The integral of $t^2$ is $t^3/3$." },
                    { "id": "B", "text": "$\\frac{1}{2}g_e t^3 \\Omega \\sin\\lambda$", "isCorrect": false, "explanation": "Basic calculus error." }
                  ]
                },
                {
                  "stepText": "Substitute the unperturbed time of flight $t = \\sqrt{2h/g_e}$ into this equation to get the total eastward deflection."
                }
              ]
            },
            {
              "id": "s4-numerical",
              "type": "numerical",
              "title": "Exercise 15.5: Calculate Deflection",
              "content": "A stone is dropped from a height of $50$ m. \nHow far is it deflected towards the East? Assume the latitude is $60^\\circ$ N. (So colatitude $\\lambda = 90 - 60 = 30^\\circ$). \n$\\Omega \\approx 7.27 \\times 10^{-5}$ rad/s and $g = 9.8$ m/s$^2$.\n\nAnswer in cm.",
              "numericAnswer": 0.39,
              "numericTolerance": 0.05
            },
            {
              "id": "s5-quiz",
              "type": "quiz",
              "title": "Conservation Explanation",
              "content": "Physically, why does a dropped object deflect Eastward?",
              "options": [
                { "id": "1", "text": "The Earth rotates Westward underneath it.", "isCorrect": false, "explanation": "If the Earth rotated under it, it would appear to deflect West." },
                { "id": "2", "text": "Conservation of angular momentum.", "isCorrect": true, "explanation": "At height $h$, it has a larger radius from the Earth's axis. As it falls, $r$ decreases, so its eastward linear velocity must increase to conserve $L = mvr$." }
              ]
            }
          ]
        },
        {
          "id": "lesson-3-4-6-coriolis-projectile",
          "title": "The Coriolis Force: Projectiles",
          "description": "General equations for artillery and wind.",
          "icon": "Crosshair",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "General Projectile Equations",
              "content": "For a projectile with velocity components $(v_x, v_y, v_z)$, the full acceleration vector including gravity and Coriolis is:\n\n$a_x = 2v_y\\Omega \\cos\\lambda - 2v_z\\Omega \\sin\\lambda$\n$a_y = -2v_x\\Omega \\cos\\lambda$\n$a_z = 2v_x\\Omega \\sin\\lambda - g$"
            },
            {
              "id": "s2-example",
              "type": "example",
              "title": "Worked Example 15.3: Firing East",
              "content": "If you fire a projectile due East in the Northern Hemisphere:\n*   $v_x$ is positive.\n*   $a_y = -2v_x\\Omega \\cos\\lambda$. Since this is negative, the projectile is deflected South.\n*   This means it veers to the **Right** of its intended path."
            },
            {
              "id": "s3-quiz",
              "type": "quiz",
              "title": "Exercise 15.4: Hemispheres",
              "content": "A projectile fired due North in the Northern Hemisphere is deflected to the East (its right). What happens to a projectile fired due East in the Southern Hemisphere?",
              "options": [
                { "id": "1", "text": "Deflected South (to its right).", "isCorrect": false, "explanation": "In the Southern Hemisphere, Coriolis deflections are to the left." },
                { "id": "2", "text": "Deflected North (to its left).", "isCorrect": true, "explanation": "Because the sign of $\\cos\\lambda$ changes when you pass the equator, the deflection is always to the left of motion in the South." }
              ]
            },
            {
              "id": "s4-numerical",
              "type": "numerical",
              "title": "Exercise 15.7: Initial Acceleration",
              "content": "A projectile at $60^\\circ$N ($\\lambda = 30^\\circ$) is fired due East with velocity $300$ m/s at an angle $25^\\circ$ above the horizontal.\n\nCalculate the initial $x$-component of the Coriolis acceleration $a_x(t=0)$ in m/s$^2$. \n*(Note: Firing East means $v_y = 0$, so $a_x = -2v_z\\Omega\\sin\\lambda$. $\\Omega = 7.27 \\times 10^{-5}$)*",
              "numericAnswer": -0.00922,
              "numericTolerance": 0.0005
            },
            {
              "id": "s5-blank",
              "type": "fill_in_blank",
              "title": "Cyclones",
              "content": "The Coriolis force is responsible for the rotation of weather systems. In the Northern Hemisphere, winds flowing inward toward a low-pressure center are deflected to the right, causing hurricanes to rotate ___.",
              "blankAnswer": "counterclockwise"
            }
          ]
        },
        {
          "id": "lesson-3-4-7-foucault-setup",
          "title": "The Foucault Pendulum: Setup",
          "description": "Setting up the differential equations for the precessing pendulum.",
          "icon": "Clock",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "The Foucault Pendulum",
              "content": "A massive bob on a very long string, free to swing in any direction. Because the Earth rotates beneath it, an Earth-bound observer sees the plane of the pendulum's swing slowly rotate (precess).\n\nThe forces are Tension $\\mathbf{T}$, Gravity $m\\mathbf{g}$, and Coriolis $-2m\\mathbf{\\Omega} \\times \\mathbf{v}$.\n\n$m\\mathbf{a} = \\mathbf{T} + m\\mathbf{g} - 2m(\\mathbf{\\Omega} \\times \\mathbf{v})$"
            },
            {
              "id": "s2-example",
              "type": "example",
              "title": "Simplifying the Equations",
              "content": "By projecting the motion onto the x-y plane and assuming the vertical velocity $v_z$ is negligible (because the string is very long), the x and y equations become:\n\n$m\\ddot{x} = -T\\frac{x}{l} + 2mv_y\\Omega \\cos\\lambda$\n$m\\ddot{y} = -T\\frac{y}{l} - 2mv_x\\Omega \\cos\\lambda$"
            },
            {
              "id": "s3-proof",
              "type": "proof",
              "title": "Interactive Proof: Coupled Equations",
              "content": "Let's clean up these equations using pendulum constants.",
              "interactiveSteps": [
                {
                  "stepText": "For small angles, the tension $T \approx mg$. Thus $T/l \approx mg/l$."
                },
                {
                  "prompt": "Substitute $T = mg$ and divide the entire $x$ equation by $m$. What is the result?",
                  "stepText": "$\\ddot{x} = -\\frac{g}{l}x + 2\\dot{y}\\Omega \\cos\\lambda$.",
                  "options": [
                    { "id": "A", "text": "$\\ddot{x} = -\\frac{g}{l}x + 2\\dot{y}\\Omega \\cos\\lambda$", "isCorrect": true, "explanation": "Correct substitution." },
                    { "id": "B", "text": "$\\ddot{x} = -gx + 2\\dot{y}\\Omega \\cos\\lambda$", "isCorrect": false, "explanation": "You lost the string length $l$." }
                  ]
                },
                {
                  "stepText": "We define $\\omega^2 = g/l$ (the natural pendulum frequency) and $K = \\Omega \\cos\\lambda$ (the expected precession rate)."
                },
                {
                  "prompt": "Rewrite the equations using $\\omega$ and $K$.",
                  "stepText": "$\\ddot{x} - 2K\\dot{y} + \\omega^2 x = 0$\n$\\ddot{y} + 2K\\dot{x} + \\omega^2 y = 0$",
                  "options": [
                    { "id": "A", "text": "$\\ddot{x} - 2K\\dot{y} + \\omega^2 x = 0$ \\n $\\ddot{y} + 2K\\dot{x} + \\omega^2 y = 0$", "isCorrect": true, "explanation": "These are the fundamental coupled differential equations of the Foucault pendulum." },
                    { "id": "B", "text": "$\\ddot{x} + \\omega^2 x = 0$", "isCorrect": false, "explanation": "You ignored the Coriolis terms." }
                  ]
                }
              ]
            },
            {
              "id": "s4-quiz",
              "type": "quiz",
              "title": "Physics at the Equator",
              "content": "Looking at the definition $K = \\Omega \\cos\\lambda$, what happens to a Foucault pendulum situated exactly on the equator?",
              "options": [
                { "id": "1", "text": "It precesses very fast.", "isCorrect": false, "explanation": "Check the value of $\\cos\\lambda$ at the equator." },
                { "id": "2", "text": "It does not precess at all.", "isCorrect": true, "explanation": "At the equator, the colatitude $\\lambda = 90^\\circ$. Since $\\cos(90^\\circ) = 0$, $K=0$ and the Coriolis cross-terms vanish." }
              ]
            }
          ]
        },
        {
          "id": "lesson-3-4-8-foucault-solution",
          "title": "The Foucault Pendulum: Solution",
          "description": "Solving the coupled equations using complex numbers.",
          "icon": "Activity",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "The Complex Trick",
              "content": "To solve:\n$\\ddot{x} - 2K\\dot{y} + \\omega^2 x = 0$\n$\\ddot{y} + 2K\\dot{x} + \\omega^2 y = 0$\n\nWe introduce a complex variable $\\zeta = x + iy$. Multiply the second equation by $i$ and add it to the first to get a single equation:\n\n$$\\ddot{\\zeta} + 2iK\\dot{\\zeta} + \\omega^2\\zeta = 0$$"
            },
            {
              "id": "s2-example",
              "type": "example",
              "title": "The Solution",
              "content": "This acts like a damped harmonic oscillator. The roots of the auxiliary equation are $p = -iK \\pm i\\sqrt{K^2 + \\omega^2}$.\n\nSince $\\Omega$ (Earth's rotation) is much slower than $\\omega$ (pendulum swing), $K \\ll \\omega$. We can ignore $K^2$ under the root, leaving $p = -iK \\pm i\\omega$."
            },
            {
              "id": "s3-proof",
              "type": "proof",
              "title": "Interactive Proof: Extracting Precession",
              "content": "Let's see how this creates a precessing plane.",
              "interactiveSteps": [
                {
                  "stepText": "The solution is $\\zeta(t) = C e^{i(\\omega - K)t} + D e^{-i(\\omega + K)t}$."
                },
                {
                  "prompt": "Factor out the common term $e^{-iKt}$ from both parts. What is left inside?",
                  "stepText": "$\\zeta(t) = e^{-iKt} (C e^{i\\omega t} + D e^{-i\\omega t})$.",
                  "options": [
                    { "id": "A", "text": "$e^{-iKt} (C e^{i\\omega t} + D e^{-i\\omega t})$", "isCorrect": true, "explanation": "Factoring exponents means subtracting the power." },
                    { "id": "B", "text": "$e^{-iKt} (C e^{iK t} + D e^{-iK t})$", "isCorrect": false, "explanation": "The omega terms are left inside." }
                  ]
                },
                {
                  "stepText": "Notice the structure: $e^{-iKt}$ represents a slow rotation clockwise in the complex plane at angular velocity $K$. The inner part $(C e^{i\\omega t} + D e^{-i\\omega t})$ represents standard fast 1D harmonic motion."
                },
                {
                  "stepText": "Conclusion: The pendulum oscillates back and forth rapidly, while its entire plane of oscillation slowly rotates at rate $K = \\Omega \\cos\\lambda$."
                }
              ]
            },
            {
              "id": "s4-numerical",
              "type": "numerical",
              "title": "Exercise 15.11: San Francisco",
              "content": "A Foucault pendulum is mounted in San Francisco (latitude $37.77^\\circ$, so colatitude $\\lambda = 90 - 37.77 = 52.23^\\circ$).\n\nThe Earth rotates at $15^\\circ$ per hour. \nCalculate the precession rate $K = \\Omega\\cos\\lambda$ in degrees per hour.",
              "numericAnswer": 9.18,
              "numericTolerance": 0.1
            },
            {
              "id": "s5-blank",
              "type": "fill_in_blank",
              "title": "The North Pole",
              "content": "If you set up a Foucault pendulum exactly at the North Pole, the plane of oscillation will rotate exactly ___ degrees per day.",
              "blankAnswer": "360"
            }
          ]
        }
      ]
    },
    {
      "id": "unit-3-5",
      "title": "Practicals: Experimental Mechanics",
      "description": "Applying physical theories in the laboratory.",
      "color": "duo-blue",
      "lessons": [
        {
          "id": "lesson-3-5-1-pendulums",
          "title": "Pendulums & Gravity (Exp 3, 4, 10)",
          "description": "Measuring 'g' using Compound and Kater's pendulums.",
          "icon": "Clock",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "Compound & Kater's Pendulums",
              "content": "**Compound Pendulum (Exp 3):** A rigid body swinging about an arbitrary pivot. The period is $T = 2\\pi\\sqrt{\\frac{I_{pivot}}{mgd}}$, where $d$ is distance from CM. Used to verify the Parallel Axis Theorem.\n\n**Kater's Pendulum (Exp 4):** A reversible pendulum with two knife edges. By adjusting masses so the period is identical from both pivots ($T_1 \\approx T_2$), it provides a highly accurate measurement of $g$ without needing to know the exact center of mass."
            },
            {
              "id": "s2-example",
              "type": "example",
              "title": "Large Angle Limits (Exp 10)",
              "content": "The standard pendulum equation $T = 2\\pi\\sqrt{l/g}$ relies on the small angle approximation $\\sin\\theta \\approx \\theta$.\n\nIf the initial displacement $\\theta_0$ is large, the period increases. In the lab, you measure $T$ at $10^\\circ, 20^\\circ, 30^\\circ...$ and compare it to the theoretical series expansion $T = T_0(1 + \\frac{1}{16}\\theta_0^2 + ...)$."
            },
            {
              "id": "s3-proof",
              "type": "proof",
              "title": "Interactive Lab: Parallel Axis Verification",
              "content": "How do you use Exp 3 data to verify the Parallel Axis Theorem?",
              "interactiveSteps": [
                {
                  "stepText": "Measure the period $T$ about a pivot distance $d$ from the Center of Mass."
                },
                {
                  "prompt": "Using $T = 2\\pi\\sqrt{\\frac{I_{pivot}}{mgd}}$, how do you experimentally determine $I_{pivot}$?",
                  "stepText": "$I_{pivot} = mgd \\frac{T^2}{4\\pi^2}$.",
                  "options": [
                    { "id": "A", "text": "$I_{pivot} = mgd \\frac{T^2}{4\\pi^2}$", "isCorrect": true, "explanation": "Just rearranging the period formula." },
                    { "id": "B", "text": "$I_{pivot} = \\frac{4\\pi^2 mgd}{T^2}$", "isCorrect": false, "explanation": "Algebra is inverted." }
                  ]
                },
                {
                  "stepText": "Calculate the theoretical $I_{CM} = ML^2 / 12$."
                },
                {
                  "prompt": "What equation do you check your experimental $I_{pivot}$ against?",
                  "stepText": "$I_{pivot} = I_{CM} + md^2$.",
                  "options": [
                    { "id": "A", "text": "$I_{pivot} = I_{CM} + md^2$", "isCorrect": true, "explanation": "This is the Parallel Axis Theorem!" },
                    { "id": "B", "text": "$I_{pivot} = I_{CM} + md$", "isCorrect": false, "explanation": "It is mass times distance squared." }
                  ]
                }
              ]
            },
            {
              "id": "s4-quiz",
              "type": "quiz",
              "title": "Kater's Pendulum Advantage",
              "content": "Why is Kater's Pendulum superior to a simple pendulum for measuring $g$?",
              "options": [
                { "id": "1", "text": "It uses a much heavier mass.", "isCorrect": false, "explanation": "Mass doesn't affect the period of a pendulum." },
                { "id": "2", "text": "It eliminates the need to precisely locate the Center of Mass.", "isCorrect": true, "explanation": "Because it relies on the reversibility principle ($l_1 + l_2 = L$), the internal mass distribution doesn't need to be perfectly known." },
                { "id": "3", "text": "It ignores air resistance.", "isCorrect": false, "explanation": "It still suffers from air resistance." }
              ]
            }
          ]
        },
        {
          "id": "lesson-3-5-2-inertia",
          "title": "Inertia & Energy (Exp 1, 2, 9)",
          "description": "Flywheels, Torsion, and Rolling Objects.",
          "icon": "Repeat",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "Rotational Dynamics Labs",
              "content": "**Flywheel (Exp 1):** A mass falls, pulling a string wound around an axle, converting potential energy into rotational kinetic energy. Used to find the flywheel's Moment of Inertia $I$.\n\n**Torsion Pendulum (Exp 2):** A disc twists a wire. The restoring torque is proportional to the angle. Used to find the Rigidity Modulus $n = \\frac{8\\pi I L}{r^4 T^2}$ of the wire.\n\n**Rolling Cylinder (Exp 9):** A cylinder rolls down a plane. Potential energy ($mgh$) converts into both translational ($\\frac{1}{2}mv^2$) and rotational ($\\frac{1}{2}I\\omega^2$) kinetic energy."
            },
            {
              "id": "s2-example",
              "type": "example",
              "title": "Energy Transformation",
              "content": "In Exp 9, you use a smartphone's gyroscope inserted into a hollow cylinder to record angular velocity $\\omega$.\n\nThe total kinetic energy at the bottom is $KE = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$. Since $v = \\omega r$, you can calculate the total $KE$ purely from the gyroscope data and compare it to the initial $PE = mgh$ to estimate energy lost to heat and sound."
            },
            {
              "id": "s3-proof",
              "type": "proof",
              "title": "Interactive Lab: Torsion Pendulum",
              "content": "How do you verify the moment of inertia in Exp 2?",
              "interactiveSteps": [
                {
                  "stepText": "Place identical masses on the disc to experimentally determine $I_{experimental}$ through period measurements."
                },
                {
                  "prompt": "You must verify this against the theoretical formula for a uniform solid disc of Mass $M$ and Radius $R$. What is that formula?",
                  "stepText": "$I_{direct} = \\frac{1}{2}MR^2$.",
                  "options": [
                    { "id": "A", "text": "$\\frac{1}{2}MR^2$", "isCorrect": true, "explanation": "The standard moment of inertia for a solid disc rotating about its central axis." },
                    { "id": "B", "text": "$MR^2$", "isCorrect": false, "explanation": "This is for a thin ring or hoop." }
                  ]
                },
                {
                  "stepText": "Once $I$ is confirmed, you use it to find the rigidity modulus $n$ of the wire using $n = \\frac{8\\pi I L}{r^4 T^2}$."
                }
              ]
            },
            {
              "id": "s4-quiz",
              "type": "quiz",
              "title": "Smartphone Sensors",
              "content": "In the rolling cylinder experiment, which smartphone sensor is specifically listed in the syllabus to record the rotation?",
              "options": [
                { "id": "1", "text": "Accelerometer", "isCorrect": false, "explanation": "While useful, it measures linear acceleration, not rotation rate." },
                { "id": "2", "text": "Gyroscope", "isCorrect": true, "explanation": "The gyroscope directly measures angular velocity (rad/s)." },
                { "id": "3", "text": "Magnetometer", "isCorrect": false, "explanation": "This measures magnetic fields (compass)." }
              ]
            }
          ]
        },
        {
          "id": "lesson-3-5-3-waves-sound",
          "title": "Waves & Sound (Exp 5, 6, 7, 8)",
          "description": "Melde's string, Sonometer, and Speed of Sound.",
          "icon": "Activity",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "Vibrations in Strings",
              "content": "**Melde's String (Exp 5):** An electrically maintained tuning fork vibrates a string. Used to verify the $\\lambda^2 - T$ law (wavelength squared is proportional to Tension).\n\n**Sonometer (Exp 6):** An AC electromagnet plucks a wire. By drawing an $l^2 - m$ graph (length squared vs mass), you calculate the frequency of the AC current."
            },
            {
              "id": "s2-example",
              "type": "example",
              "title": "Fourier Analysis (Exp 7)",
              "content": "You record the sound of a plucked guitar string using a smartphone microphone. \nUsing an app like Phyphox, you take the **Fast Fourier Transform (FFT)** of the audio. The FFT decomposes the complex sound wave into its constituent sine waves, showing distinct peaks at the fundamental frequency and its harmonics ($2f, 3f...$)."
            },
            {
              "id": "s3-proof",
              "type": "proof",
              "title": "Interactive Lab: Velocity of Sound (Exp 8)",
              "content": "Measuring the speed of sound using phase differences.",
              "interactiveSteps": [
                {
                  "stepText": "Generate a known frequency sine wave using a piezo buzzer. Record it with a microphone placed a distance $d$ away."
                },
                {
                  "stepText": "Compare the electrical signal of the generator with the microphone's signal on an oscilloscope (or using ExpEYES) via an X-Y plot."
                },
                {
                  "prompt": "An X-Y plot of two sine waves creates a Lissajous figure. If the two waves are perfectly IN PHASE, what does the Lissajous figure look like?",
                  "stepText": "A straight diagonal line.",
                  "options": [
                    { "id": "A", "text": "A perfect circle", "isCorrect": false, "explanation": "A circle means they are 90 degrees out of phase." },
                    { "id": "B", "text": "A straight diagonal line", "isCorrect": true, "explanation": "In phase means $X = Y$, which plots as a line $y = x$." }
                  ]
                },
                {
                  "stepText": "You move the microphone until the figure is a straight line, mark the distance, then move it further until it forms a straight line again. The distance moved is exactly one wavelength $\\lambda$!"
                },
                {
                  "stepText": "Multiply the known frequency $f$ by the measured $\\lambda$ to find the velocity of sound $v = f\\lambda$."
                }
              ]
            },
            {
              "id": "s4-quiz",
              "type": "quiz",
              "title": "Melde's Law",
              "content": "In Melde's experiment, the syllabus asks you to verify the $\\lambda^2 - T$ law. Why are they proportional?",
              "options": [
                { "id": "1", "text": "Because $v = \\lambda f$ and $v = \\sqrt{T/\\mu}$. Squaring both sides yields $\\lambda^2 f^2 = T/\\mu$, so $\\lambda^2 \\propto T$.", "isCorrect": true, "explanation": "Since the frequency $f$ of the tuning fork and mass density $\\mu$ are constant, $\\lambda^2$ scales linearly with Tension $T$." },
                { "id": "2", "text": "Because wavelength increases as frequency decreases.", "isCorrect": false, "explanation": "Frequency is held constant by the tuning fork." }
              ]
            }
          ]
        },
        {
          "id": "lesson-3-5-4-data-analysis",
          "title": "Data Analysis & Python (Exp 11)",
          "description": "Standard deviation, errors, and computational physics.",
          "icon": "Cpu",
          "slides": [
            {
              "id": "s1-theory",
              "type": "theory",
              "title": "Experimental Rigor",
              "content": "The syllabus mandates several data analysis steps for ALL experiments:\n1. **Standard Deviation:** A measure of the amount of variation or dispersion in your set of trials.\n2. **Percentage Error:** $\\frac{|Experimental - Theoretical|}{Theoretical} \\times 100\\%$.\n3. **Python Plotting:** Using computational tools to plot graphs instead of manual graph paper."
            },
            {
              "id": "s2-example",
              "type": "example",
              "title": "Smartphones as Minilabs",
              "content": "The course heavily emphasizes using smartphones (via apps like Phyphox) as lab equipment. \n\n*Note of caution from syllabus:* \"Smartphone experiments primarily serve demonstration purposes, with result accuracy contingent upon the precision of phone sensors.\" Always safeguard your device!"
            },
            {
              "id": "s3-proof",
              "type": "proof",
              "title": "Interactive Lab: Python Projects",
              "content": "Exp 11 requires realizing computational projects in Python.",
              "interactiveSteps": [
                {
                  "stepText": "Suppose you are plotting damped oscillations $x(t) = A e^{-\\gamma t}\\cos(\\omega_1 t)$ using Python."
                },
                {
                  "prompt": "Which Python library is the standard choice for plotting 2D graphs like this?",
                  "stepText": "Matplotlib (specifically `matplotlib.pyplot`) is the standard.",
                  "options": [
                    { "id": "A", "text": "Matplotlib", "isCorrect": true, "explanation": "The industry standard for basic plotting in Python." },
                    { "id": "B", "text": "TensorFlow", "isCorrect": false, "explanation": "That is for machine learning." }
                  ]
                },
                {
                  "prompt": "Which Python library is best for handling the arrays of numerical data ($t$ and $x$) efficiently?",
                  "stepText": "NumPy.",
                  "options": [
                    { "id": "A", "text": "NumPy", "isCorrect": true, "explanation": "Provides the `np.array` object and fast math functions like `np.cos()` and `np.exp()`." },
                    { "id": "B", "text": "Django", "isCorrect": false, "explanation": "That is a web framework." }
                  ]
                }
              ]
            },
            {
              "id": "s4-quiz",
              "type": "quiz",
              "title": "Experimental Error",
              "content": "If you perform the Kater's pendulum experiment and calculate $g = 9.6$ m/s$^2$, and the accepted theoretical value is $9.8$ m/s$^2$, what is your approximate percentage error?",
              "options": [
                { "id": "1", "text": "0.2 %", "isCorrect": false, "explanation": "That is the absolute difference." },
                { "id": "2", "text": "2.0 %", "isCorrect": true, "explanation": "$(|9.6 - 9.8| / 9.8) \\times 100 \\approx (0.2 / 9.8) \\times 100 \\approx 2.04\\%$." },
                { "id": "3", "text": "9.8 %", "isCorrect": false, "explanation": "Incorrect formula." }
              ]
            }
          ]
        }
      ]
    }
  ]
};