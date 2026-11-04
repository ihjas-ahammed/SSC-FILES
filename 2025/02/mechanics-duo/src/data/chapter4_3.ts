import { Section } from '../types';

export const SECTION_4_3: Section = {
  "id": "section-4-3",
  "title": "Section 3: The Coriolis Force & Foucault Pendulum",
  "description": "Comprehensive analysis of projectile deflections, falling bodies, and the precessing pendulum.",
  "color": "duo-blue",
  "units": [
    {
      "id": "unit-4-5",
      "title": "The Coriolis Force (Projectiles & Falling)",
      "description": "Detailed derivations of Earth's rotational deflection on moving bodies.",
      "color": "duo-blue",
      "lessons": [
        {
          "id": "lesson-4-5-1-intro-coriolis",
          "title": "The Coriolis Effect & Coordinates",
          "description": "Setting up the local Earth reference frame.",
          "icon": "Globe",
          "slides": [
            {
              "id": "s1",
              "type": "theory",
              "title": "Geophysical Phenomena",
              "content": "The Coriolis force $\\mathbf{F}_c = -2m\\mathbf{\\Omega} \\times \\mathbf{v}_r$ is responsible for oceanic circulation, cyclones, hurricanes, and the deviation of artillery shells. \nIts direction depends intimately on the direction of the velocity vector $\\mathbf{v}_r$."
            },
            {
              "id": "s2",
              "type": "example",
              "title": "Local Cartesian Coordinates",
              "content": "To study this easily, we fix a local $(x,y,z)$ system to the surface of the Earth at colatitude $\\lambda$:\n*   **z-axis:** Points Up (opposite to effective gravity $\\mathbf{g}_e$).\n*   **x-axis:** Points East.\n*   **y-axis:** Points North.\n\nIn this system, the Earth's rotation vector is:\n$\\mathbf{\\Omega} = \\Omega\\sin\\lambda \\mathbf{\\hat{j}} + \\Omega\\cos\\lambda \\mathbf{\\hat{k}}$",
              "canvasId": "coriolis-axes"
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Omega Components",
              "content": "Why does the $\\mathbf{\\Omega}$ vector have no component in the x-direction (East)?",
              "options": [
                { "id": "1", "text": "Because the Earth rotates around an axis running from South to North, completely perpendicular to the East-West line.", "isCorrect": true, "explanation": "The rotation axis exists entirely in the North-Up (y-z) plane." },
                { "id": "2", "text": "Because the Earth doesn't rotate East.", "isCorrect": false, "explanation": "The surface moves East, but the *axis* of rotation points North/Up." }
              ]
            },
            {
              "id": "s4",
              "type": "fill_in_blank",
              "title": "Colatitude",
              "content": "The angle $\\lambda$ represents the colatitude, meaning it is measured from the North ___ downward, rather than from the equator upward.",
              "blankAnswer": "Pole"
            }
          ]
        },
        {
          "id": "lesson-4-5-2-ex15-4-a",
          "title": "Exercise 15.4 (a): Falling Stone",
          "description": "Determining the deflection direction of a dropped object.",
          "icon": "ArrowDown",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Exercise 15.4 (a)",
              "content": "Draw force diagrams to determine the direction of the Coriolis force on a falling stone in the Northern Hemisphere."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "We use the formula $\\mathbf{a}_c = -2\\mathbf{\\Omega} \\times \\mathbf{v}$.",
              "interactiveSteps": [
                {
                  "stepText": "The stone is falling, so its velocity vector $\\mathbf{v}$ points strictly Down ($-\\mathbf{\\hat{k}}$)."
                },
                {
                  "stepText": "The Earth's rotation vector is $\\mathbf{\\Omega} = \\Omega_y\\mathbf{\\hat{j}} + \\Omega_z\\mathbf{\\hat{k}}$ (North and Up)."
                },
                {
                  "prompt": "Evaluate the cross product $\\mathbf{\\Omega} \\times \\mathbf{v}$. What is $\\mathbf{\\hat{j}} \\times (-\\mathbf{\\hat{k}})$?",
                  "stepText": "North $\\times$ Down = West ($-\\mathbf{\\hat{i}}$).",
                  "options": [
                    { "id": "A", "text": "$-\\mathbf{\\hat{i}}$ (West)", "isCorrect": true, "explanation": "Right Hand Rule: fingers North, curl Down, thumb points West." },
                    { "id": "B", "text": "$+\\mathbf{\\hat{i}}$ (East)", "isCorrect": false, "explanation": "Watch the negative sign on the $\\hat{k}$." }
                  ]
                },
                {
                  "stepText": "The cross product of the $\\mathbf{\\hat{k}}$ component of $\\Omega$ with the velocity is zero, since $\\mathbf{\\hat{k}} \\times \\mathbf{\\hat{k}} = 0$."
                },
                {
                  "prompt": "The Coriolis acceleration is $\\mathbf{a}_c = -2(\\mathbf{\\Omega} \\times \\mathbf{v})$. What is the final direction?",
                  "stepText": "$-2(\\text{West}) = \\text{East} (+\\mathbf{\\hat{i}})$.",
                  "options": [
                    { "id": "A", "text": "East", "isCorrect": true, "explanation": "The leading negative sign flips the Westward cross product to the East." },
                    { "id": "B", "text": "West", "isCorrect": false, "explanation": "You forgot the negative sign in the Coriolis formula." }
                  ]
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Hemisphere Check",
              "content": "If you drop a stone in the Southern Hemisphere, which way does it deflect?",
              "options": [
                { "id": "1", "text": "East", "isCorrect": true, "explanation": "In the SH, the y-axis (North) component of $\\Omega$ is negative (it points South and Up). Wait! $\\Omega$ points North and DOWN in the SH relative to local UP. So $\\Omega_y$ is still North, but $\\Omega_z$ is negative. The cross product $\\hat{j} \\times (-\\hat{k})$ is still $-\\hat{i}$. So it STILL deflects East!" },
                { "id": "2", "text": "West", "isCorrect": false, "explanation": "The Earth rotates West-to-East everywhere. A falling object from a higher radius has higher eastward velocity than the ground, so it always lands East." }
              ]
            }
          ]
        },
        {
          "id": "lesson-4-5-3-ex15-4-b",
          "title": "Exercise 15.4 (b): Fired North",
          "description": "Determining the deflection direction of a Northward projectile.",
          "icon": "ArrowUpCircle",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Exercise 15.4 (b)",
              "content": "Determine the direction of the Coriolis force on a projectile fired due North in the Northern Hemisphere."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "Evaluate the cross product $\\mathbf{a}_c = -2\\mathbf{\\Omega} \\times \\mathbf{v}$.",
              "interactiveSteps": [
                {
                  "stepText": "The velocity vector is strictly North: $\\mathbf{v} = v_y\\mathbf{\\hat{j}}$."
                },
                {
                  "stepText": "$\\mathbf{\\Omega} = \\Omega_y\\mathbf{\\hat{j}} + \\Omega_z\\mathbf{\\hat{k}}$."
                },
                {
                  "prompt": "Evaluate $\\mathbf{\\Omega} \\times \\mathbf{v}$. Which component of $\\mathbf{\\Omega}$ survives the cross product with $\\mathbf{\\hat{j}}$?",
                  "stepText": "Only the $\\Omega_z\\mathbf{\\hat{k}}$ component survives, since $\\mathbf{\\hat{j}} \\times \\mathbf{\\hat{j}} = 0$.",
                  "options": [
                    { "id": "A", "text": "The $\\mathbf{\\hat{k}}$ component", "isCorrect": true, "explanation": "Cross products of parallel vectors are zero." },
                    { "id": "B", "text": "The $\\mathbf{\\hat{j}}$ component", "isCorrect": false, "explanation": "That term vanishes." }
                  ]
                },
                {
                  "prompt": "What is $(\\Omega_z\\mathbf{\\hat{k}}) \\times (v_y\\mathbf{\\hat{j}})$?",
                  "stepText": "Up $\\times$ North = West ($-\\mathbf{\\hat{i}}$).",
                  "options": [
                    { "id": "A", "text": "West ($-\\mathbf{\\hat{i}}$)", "isCorrect": true, "explanation": "Correct Right Hand Rule." },
                    { "id": "B", "text": "East ($+\\mathbf{\\hat{i}}$)", "isCorrect": false, "explanation": "Check the Right Hand Rule again." }
                  ]
                },
                {
                  "stepText": "Multiply by the leading $-2$: $-2 (\\text{West}) = \\text{East}$. The projectile deflects to its RIGHT (East)."
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Northern Hemisphere Rule",
              "content": "In the Northern Hemisphere, a projectile fired North deflects East (its right). What if it is fired South?",
              "options": [
                { "id": "1", "text": "It deflects West (its right).", "isCorrect": true, "explanation": "Velocity is $-\\hat{j}$. The cross product $\\hat{k} \\times (-\\hat{j})$ is $+\\hat{i}$ (East). Multiply by $-2$ gives West. When facing South, West is to your right. It ALWAYS deflects to the right!" },
                { "id": "2", "text": "It deflects East (its left).", "isCorrect": false, "explanation": "Do the math carefully." }
              ]
            }
          ]
        },
        {
          "id": "lesson-4-5-4-ex15-4-c",
          "title": "Exercise 15.4 (c): Fired East",
          "description": "Deflection of an Eastward projectile.",
          "icon": "ArrowRightCircle",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Exercise 15.4 (c)",
              "content": "Determine the direction of the Coriolis force on a projectile fired due East in the Northern Hemisphere."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "Evaluate $\\mathbf{a}_c = -2\\mathbf{\\Omega} \\times \\mathbf{v}$.",
              "interactiveSteps": [
                {
                  "stepText": "Velocity is East: $\\mathbf{v} = v_x\\mathbf{\\hat{i}}$."
                },
                {
                  "stepText": "$\\mathbf{\\Omega} = \\Omega_y\\mathbf{\\hat{j}} + \\Omega_z\\mathbf{\\hat{k}}$."
                },
                {
                  "prompt": "Evaluate $\\mathbf{\\Omega} \\times \\mathbf{v}$. Notice that BOTH components of $\\mathbf{\\Omega}$ will survive. What is $\\mathbf{\\hat{j}} \times \\mathbf{\\hat{i}}$?",
                  "stepText": "North $\\times$ East = Down ($-\\mathbf{\\hat{k}}$).",
                  "options": [
                    { "id": "A", "text": "Down ($-\\mathbf{\\hat{k}}$)", "isCorrect": true, "explanation": "Correct." },
                    { "id": "B", "text": "Up ($\\mathbf{\\hat{k}}$)", "isCorrect": false, "explanation": "$\\hat{i} \\times \\hat{j} = \\hat{k}$, so $\\hat{j} \\times \\hat{i} = -\\hat{k}$." }
                  ]
                },
                {
                  "prompt": "What is $\\mathbf{\\hat{k}} \\times \\mathbf{\\hat{i}}$?",
                  "stepText": "Up $\\times$ East = North ($\\mathbf{\\hat{j}}$).",
                  "options": [
                    { "id": "A", "text": "North ($\\mathbf{\\hat{j}}$)", "isCorrect": true, "explanation": "Correct." },
                    { "id": "B", "text": "South ($-\\mathbf{\\hat{j}}$)", "isCorrect": false, "explanation": "Check RHR." }
                  ]
                },
                {
                  "stepText": "So $\\mathbf{\\Omega} \\times \\mathbf{v}$ points Down and North. Multiply by $-2$ to get the final Coriolis force direction: UP and SOUTH."
                },
                {
                  "stepText": "The horizontal deflection is South, which is to the RIGHT of the Eastward motion."
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Upward Force",
              "content": "We found the force points South and UP. What physical effect does this 'UP' component have on the projectile?",
              "options": [
                { "id": "1", "text": "It makes the projectile fall faster.", "isCorrect": false, "explanation": "An upward force opposes gravity." },
                { "id": "2", "text": "It makes the projectile feel slightly lighter, increasing its time of flight.", "isCorrect": true, "explanation": "Moving East adds to the Earth's rotation, increasing 'centrifugal' lift and counteracting gravity slightly." }
              ]
            }
          ]
        },
        {
          "id": "lesson-4-5-5-ex15-4-d",
          "title": "Exercise 15.4 (d): Southern Hemisphere",
          "description": "How the Coriolis vector flips across the equator.",
          "icon": "Repeat",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Exercise 15.4 (d)",
              "content": "Determine the direction of the Coriolis force on a projectile fired due East in the Southern Hemisphere."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "We must adjust the $\\mathbf{\\Omega}$ vector for the Southern Hemisphere.",
              "interactiveSteps": [
                {
                  "stepText": "In the Southern Hemisphere, colatitude $\\lambda > 90^\\circ$. Therefore $\\cos\\lambda$ is negative."
                },
                {
                  "prompt": "Recall $\\mathbf{\\Omega} = \\Omega\\sin\\lambda \\mathbf{\\hat{j}} + \\Omega\\cos\\lambda \\mathbf{\\hat{k}}$. If $\\cos\\lambda$ is negative, what is the direction of the z-component of $\\mathbf{\\Omega}$?",
                  "stepText": "It points Down ($-\\mathbf{\\hat{k}}$).",
                  "options": [
                    { "id": "A", "text": "Down", "isCorrect": true, "explanation": "Relative to the local ground in the SH, the Earth's rotation axis points into the ground." },
                    { "id": "B", "text": "Up", "isCorrect": false, "explanation": "Up is positive z." }
                  ]
                },
                {
                  "stepText": "Velocity is East: $\\mathbf{v} = v_x\\mathbf{\\hat{i}}$."
                },
                {
                  "prompt": "Evaluate the cross product of the vertical component with velocity: $(-\\mathbf{\\hat{k}}) \\times \\mathbf{\\hat{i}}$. What direction is this?",
                  "stepText": "Down $\\times$ East = South ($-\\mathbf{\\hat{j}}$).",
                  "options": [
                    { "id": "A", "text": "South ($-\\mathbf{\\hat{j}}$)", "isCorrect": true, "explanation": "Correct RHR." },
                    { "id": "B", "text": "North ($\\mathbf{\\hat{j}}$)", "isCorrect": false, "explanation": "Check RHR." }
                  ]
                },
                {
                  "stepText": "Multiply this by the $-2$ in the Coriolis formula: $-2(\\text{South}) = \\text{NORTH}$. The horizontal deflection is North."
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Relative Direction",
              "content": "If you are firing East in the Southern Hemisphere, and the deflection is North, which way is the projectile veering relative to you?",
              "options": [
                { "id": "1", "text": "To your Right", "isCorrect": false, "explanation": "Facing East, North is to your left." },
                { "id": "2", "text": "To your Left", "isCorrect": true, "explanation": "This confirms the universal rule: Coriolis forces deflect to the LEFT in the Southern Hemisphere." }
              ]
            }
          ]
        },
        {
          "id": "lesson-4-5-6-falling-zeroth",
          "title": "A Falling Body: Zeroth-Order",
          "description": "Setting up the perturbation method for a dropped mass.",
          "icon": "BoxSelect",
          "slides": [
            {
              "id": "s1",
              "type": "theory",
              "title": "The Differential Equation",
              "content": "The equation of motion for a falling body on Earth is:\n$m\\mathbf{a}_r = m\\mathbf{g}_e - 2m\\mathbf{\\Omega} \\times \\mathbf{v}_r$\n\nDividing by $m$: $\\mathbf{a}_r = \\mathbf{g}_e - 2\\mathbf{\\Omega} \\times \\mathbf{v}_r$."
            },
            {
              "id": "s2",
              "type": "example",
              "title": "The Dilemma",
              "content": "We cannot easily solve $\\mathbf{a}_r = \\mathbf{g}_e - 2\\mathbf{\\Omega} \\times \\mathbf{v}_r$ because we don't know the velocity $\\mathbf{v}_r$ until we integrate the acceleration, but the acceleration depends on the velocity!\n\nSolution: **Successive Approximations** (Perturbation Theory). \nWe assume the Coriolis force is very small, so we first solve the problem ignoring it entirely. This is the \"Zeroth-Order Approximation.\""
            },
            {
              "id": "s3",
              "type": "proof",
              "title": "Interactive Proof: Zeroth-Order",
              "content": "Solve the unperturbed falling body.",
              "interactiveSteps": [
                {
                  "stepText": "Ignore Coriolis. The acceleration is just $\\mathbf{a}_r = \\mathbf{g}_e = -g_e \\mathbf{\\hat{k}}$."
                },
                {
                  "prompt": "Integrate once to find the unperturbed velocity $\\mathbf{v}_r(t)$ for an object dropped from rest.",
                  "stepText": "$\\mathbf{v}_r = -g_e t \\mathbf{\\hat{k}}$.",
                  "options": [
                    { "id": "A", "text": "$\\mathbf{v}_r = -g_e t \\mathbf{\\hat{k}}$", "isCorrect": true, "explanation": "Standard 1D kinematics." },
                    { "id": "B", "text": "$\\mathbf{v}_r = -\\frac{1}{2}g_e t^2 \\mathbf{\\hat{k}}$", "isCorrect": false, "explanation": "That is the position equation." }
                  ]
                },
                {
                  "prompt": "Integrate again to find the unperturbed position $z(t)$ for an object dropped from height $h$.",
                  "stepText": "$z(t) = h - \\frac{1}{2}g_e t^2$.",
                  "options": [
                    { "id": "A", "text": "$z(t) = h - \\frac{1}{2}g_e t^2$", "isCorrect": true, "explanation": "Standard kinematics." }
                  ]
                },
                {
                  "stepText": "The unperturbed time of flight $t_f$ is found when $z=0$, giving $t_f = \\sqrt{2h/g_e}$."
                }
              ]
            },
            {
              "id": "s4",
              "type": "quiz",
              "title": "Perturbation Logic",
              "content": "Why is the method of successive approximations valid for this specific problem?",
              "options": [
                { "id": "1", "text": "Because the Earth is perfectly spherical.", "isCorrect": false, "explanation": "It's an oblate spheroid." },
                { "id": "2", "text": "Because the Coriolis acceleration is several orders of magnitude smaller than gravitational acceleration.", "isCorrect": true, "explanation": "Since $-2\Omega \times v \ll g$, the zeroth-order velocity is $99.99\%$ accurate, making it a perfect seed for the next iteration." }
              ]
            }
          ]
        },
        {
          "id": "lesson-4-5-7-falling-first-order-a",
          "title": "First-Order Coriolis Acceleration",
          "description": "Calculating the precise acceleration components.",
          "icon": "TrendingUp",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "First-Order Correction",
              "content": "Now we calculate the first-order correction to the acceleration by plugging the zeroth-order velocity $\\mathbf{v}_r = -g_e t \\mathbf{\\hat{k}}$ into the Coriolis formula.\n\nCalculate $\\mathbf{a}_c = -2\\mathbf{\\Omega} \\times \\mathbf{v}_r$ analytically."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "Use $\\mathbf{\\Omega} = \\Omega\\sin\\lambda \\mathbf{\\hat{j}} + \\Omega\\cos\\lambda \\mathbf{\\hat{k}}$.",
              "interactiveSteps": [
                {
                  "stepText": "We need $\\mathbf{a}_c = -2[\\Omega\\sin\\lambda \\mathbf{\\hat{j}} + \\Omega\\cos\\lambda \\mathbf{\\hat{k}}] \\times [-g_e t \\mathbf{\\hat{k}}]$."
                },
                {
                  "prompt": "What happens to the cross product of the $\\mathbf{\\hat{k}}$ components?",
                  "stepText": "It vanishes because $\\mathbf{\\hat{k}} \\times \\mathbf{\\hat{k}} = 0$.",
                  "options": [
                    { "id": "A", "text": "It vanishes.", "isCorrect": true, "explanation": "Parallel vectors have zero cross product." },
                    { "id": "B", "text": "It becomes a scalar.", "isCorrect": false, "explanation": "Cross products always yield vectors." }
                  ]
                },
                {
                  "prompt": "We are left with $-2[\\Omega\\sin\\lambda \\mathbf{\\hat{j}}] \\times [-g_e t \\mathbf{\\hat{k}}]$. What is $\\mathbf{\\hat{j}} \\times -\\mathbf{\\hat{k}}$?",
                  "stepText": "It is $-\\mathbf{\\hat{i}}$.",
                  "options": [
                    { "id": "A", "text": "$-\\mathbf{\\hat{i}}$", "isCorrect": true, "explanation": "North x Down = West." },
                    { "id": "B", "text": "$\\mathbf{\\hat{i}}$", "isCorrect": false, "explanation": "Check RHR." }
                  ]
                },
                {
                  "stepText": "Multiply by the scalars: $-2(\\Omega\\sin\\lambda)(g_e t)(-\\mathbf{\\hat{i}}) = 2g_e t \\Omega \\sin\\lambda \\mathbf{\\hat{i}}$."
                },
                {
                  "stepText": "Thus, the first order acceleration is entirely in the $+x$ (East) direction: $a_x = 2g_e t \\Omega \\sin\\lambda$."
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Time Dependence",
              "content": "Why does the Coriolis acceleration $a_x$ increase as time $t$ goes on?",
              "options": [
                { "id": "1", "text": "Because the Earth's rotation $\\Omega$ accelerates over time.", "isCorrect": false, "explanation": "$\\Omega$ is constant." },
                { "id": "2", "text": "Because the falling velocity increases linearly with time.", "isCorrect": true, "explanation": "Coriolis force is proportional to velocity. As the object falls faster, the deflection force becomes stronger." }
              ]
            }
          ]
        },
        {
          "id": "lesson-4-5-8-falling-first-order-x",
          "title": "Integrating for Eastward Deflection",
          "description": "Calculus to find the final displacement x.",
          "icon": "TerminalSquare",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Finding x(t)",
              "content": "We have the first-order acceleration $a_x = 2g_e t \\Omega \\sin\\lambda$.\n\nIntegrate this twice to find the Eastward deflection $x(t)$, assuming the object is dropped from rest ($v_{x0} = 0, x_0 = 0$)."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "Standard polynomial integration.",
              "interactiveSteps": [
                {
                  "stepText": "Integrate $a_x$ to find velocity $v_x$: $v_x = \\int 2g_e t \\Omega \\sin\\lambda dt$."
                },
                {
                  "prompt": "Evaluate the integral of $2t$.",
                  "stepText": "$\\int 2t dt = t^2$. So $v_x = g_e t^2 \\Omega \\sin\\lambda$.",
                  "options": [
                    { "id": "A", "text": "$t^2$", "isCorrect": true, "explanation": "Correct." },
                    { "id": "B", "text": "$2t^2$", "isCorrect": false, "explanation": "Divide by the new power 2." }
                  ]
                },
                {
                  "stepText": "Integrate $v_x$ to find position $x$: $x = \\int g_e t^2 \\Omega \\sin\\lambda dt$."
                },
                {
                  "prompt": "Evaluate the integral of $t^2$.",
                  "stepText": "$\\int t^2 dt = \\frac{1}{3}t^3$. So $x(t) = \\frac{1}{3} g_e t^3 \\Omega \\sin\\lambda$.",
                  "options": [
                    { "id": "A", "text": "$\\frac{1}{3}t^3$", "isCorrect": true, "explanation": "Correct." },
                    { "id": "B", "text": "$\\frac{1}{2}t^3$", "isCorrect": false, "explanation": "Divide by the new power 3." }
                  ]
                },
                {
                  "stepText": "To find the total deflection when it hits the ground, substitute the unperturbed time of flight $t = \\sqrt{2h/g_e}$ into this equation."
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Final Formula Check",
              "content": "If we substitute $t = \\sqrt{2h/g_e}$ into $x = \\frac{1}{3} g_e t^3 \\Omega \\sin\\lambda$, the $g_e$ terms combine. The final total eastward deflection is proportional to:",
              "options": [
                { "id": "1", "text": "$h^2$", "isCorrect": false, "explanation": "We are substituting a square root into a cube." },
                { "id": "2", "text": "$h^{3/2}$", "isCorrect": true, "explanation": "$t^3 = (2h/g_e)^{3/2}$. Deflection scales with height to the 1.5 power." },
                { "id": "3", "text": "$\\sqrt{h}$", "isCorrect": false, "explanation": "" }
              ]
            },
            {
              "id": "s4",
              "type": "fill_in_blank",
              "title": "Acceleration Curve",
              "content": "Because the Coriolis force increases as the object speeds up, the Eastward velocity increases as a ___ function of time, making the position increase as a cubic function.",
              "blankAnswer": "quadratic"
            }
          ]
        },
        {
          "id": "lesson-4-5-9-physical-explanation",
          "title": "Physical Explanation of Eastward Deflection",
          "description": "Conservation of Angular Momentum vs the rotating Earth.",
          "icon": "Repeat",
          "slides": [
            {
              "id": "s1",
              "type": "theory",
              "title": "The Intuition Problem",
              "content": "Students are often mystified by the Eastward deflection. If the Earth rotates Eastward underneath the falling body, shouldn't the body lag behind and land to the West?\n\nThe answer requires looking at the initial state of the object before it was dropped."
            },
            {
              "id": "s2",
              "type": "example",
              "title": "Angular Momentum Conservation",
              "content": "Before it drops, the object is held at height $h$ above the surface. It is traveling in a circle of radius $R+h$ along with the Earth.\n\nIts initial linear velocity is $v_{East} = \\Omega(R+h)$. \nThe surface directly below is traveling at $v_{surf} = \\Omega R$.\n\nBecause $R+h > R$, the object starts with a FASTER Eastward velocity than the ground below it!"
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "During the Fall",
              "content": "As the object falls, gravity exerts no torque around the Earth's axis. Therefore, its angular momentum $L = m v_{East} r$ must be conserved. As its radius $r$ decreases during the fall, what MUST happen to its Eastward velocity $v_{East}$?",
              "options": [
                { "id": "1", "text": "It must increase.", "isCorrect": true, "explanation": "If $r$ gets smaller, $v_{East}$ must get larger to keep the product $v \times r$ constant. It accelerates Eastward!" },
                { "id": "2", "text": "It remains constant.", "isCorrect": false, "explanation": "Then angular momentum would decrease." },
                { "id": "3", "text": "It decreases.", "isCorrect": false, "explanation": "This would violate conservation of angular momentum." }
              ]
            },
            {
              "id": "s4",
              "type": "fill_in_blank",
              "title": "Conclusion",
              "content": "Because the object starts with a faster Eastward velocity than the surface, AND accelerates even more to the East as it falls, it easily outpaces the rotating ground and lands slightly to the ___.",
              "blankAnswer": "East"
            }
          ]
        },
        {
          "id": "lesson-4-5-10-worked-15-2-setup",
          "title": "Worked Example 15.2: Southward Setup",
          "description": "Calculating the 2nd-order Coriolis acceleration.",
          "icon": "ActivitySquare",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Worked Example 15.2",
              "content": "To first order, a falling particle is not deflected towards the South. \nHowever, there is a Southward deflection in the second-order approximation.\n\nSet up the second-order acceleration $a_y$."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "We feed the first-order velocity back into the Coriolis equation.",
              "interactiveSteps": [
                {
                  "stepText": "The general acceleration equation is $a_y = -2v_x\\Omega\\cos\\lambda$."
                },
                {
                  "stepText": "In the zeroth-order approximation, $v_x = 0$, so $a_y = 0$ (no North/South deflection)."
                },
                {
                  "prompt": "But we found a first-order velocity: $v_x = gt^2\\Omega\\sin\\lambda$. Substitute this into the $a_y$ equation.",
                  "stepText": "$a_y = -2(gt^2\\Omega\\sin\\lambda)\\Omega\\cos\\lambda$.",
                  "options": [
                    { "id": "A", "text": "$a_y = -2(gt^2\\Omega\\sin\\lambda)\\Omega\\cos\\lambda$", "isCorrect": true, "explanation": "Correct substitution." },
                    { "id": "B", "text": "$a_y = -2(g\\Omega\\sin\\lambda)\\Omega\\cos\\lambda$", "isCorrect": false, "explanation": "You dropped the time dependence $t^2$." }
                  ]
                },
                {
                  "stepText": "Simplifying: $a_y = -2g\\Omega^2 \\sin\\lambda \\cos\\lambda \\cdot t^2$."
                },
                {
                  "stepText": "Notice the $\\Omega^2$ term. Since $\\Omega \\approx 10^{-5}$, $\\Omega^2 \approx 10^{-10}$. This acceleration is incredibly small!"
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Direction Check",
              "content": "Given $a_y = -2g\\Omega^2 \\sin\\lambda \\cos\\lambda \\cdot t^2$, in which direction does this acceleration point in the Northern Hemisphere (where $\\lambda < 90^\\circ$)?",
              "options": [
                { "id": "1", "text": "North", "isCorrect": false, "explanation": "+y is North. The formula evaluates to a negative number." },
                { "id": "2", "text": "South", "isCorrect": true, "explanation": "The negative sign indicates an acceleration in the -y direction, which is South." }
              ]
            }
          ]
        },
        {
          "id": "lesson-4-5-11-worked-15-2-integrate",
          "title": "Worked Example 15.2: Southward Integration",
          "description": "Finding the final y displacement.",
          "icon": "ArrowDownToLine",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Integrating y(t)",
              "content": "Integrate the acceleration $a_y = -2g\\Omega^2 \\sin\\lambda \\cos\\lambda \\cdot t^2$ twice to find the final position $y(t)$."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "Double integration of a polynomial.",
              "interactiveSteps": [
                {
                  "prompt": "Integrate $t^2$ once to find velocity $v_y$.",
                  "stepText": "$v_y = -\\frac{2}{3}g\\Omega^2 \\sin\\lambda \\cos\\lambda \\cdot t^3$.",
                  "options": [
                    { "id": "A", "text": "$\\frac{-2}{3} t^3$", "isCorrect": true, "explanation": "Integral of $t^2$ is $t^3/3$." },
                    { "id": "B", "text": "$-2 t^3$", "isCorrect": false, "explanation": "Don't forget to divide." }
                  ]
                },
                {
                  "prompt": "Integrate $v_y$ to find position $y(t)$.",
                  "stepText": "$y(t) = -\\frac{2}{12}g\\Omega^2 \\sin\\lambda \\cos\\lambda \\cdot t^4 = -\\frac{1}{6}g\\Omega^2 \\sin\\lambda \\cos\\lambda \\cdot t^4$.",
                  "options": [
                    { "id": "A", "text": "$-\\frac{1}{6} t^4$", "isCorrect": true, "explanation": "Integral of $t^3/3$ is $t^4/12$. And $2/12 = 1/6$." },
                    { "id": "B", "text": "$-\\frac{2}{3} t^4$", "isCorrect": false, "explanation": "Divide by 4." }
                  ]
                },
                {
                  "stepText": "Substitute the time of flight $t = \\sqrt{2h/g}$. This means $t^4 = 4h^2/g^2$."
                },
                {
                  "stepText": "The final deflection is $y = -\\frac{1}{6}g\\Omega^2 \\sin\\lambda \\cos\\lambda \\left(\\frac{4h^2}{g^2}\\right) = -\\frac{2h^2}{3g}\\Omega^2 \\sin\\lambda \\cos\\lambda$."
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Ratio of Deflections",
              "content": "If we take the ratio of the Southward deflection $y$ to the Eastward deflection $x$, what is the functional dependence?",
              "options": [
                { "id": "1", "text": "$y/x \\propto \\Omega t$", "isCorrect": true, "explanation": "The ratio simplifies to $-\\frac{1}{2}(\\Omega \\cos\\lambda)t$. Since $\\Omega t$ is extremely small for typical falls, $y$ is negligible compared to $x$." },
                { "id": "2", "text": "$y/x \\propto \\Omega^2 t^2$", "isCorrect": false, "explanation": "$y$ has $\\Omega^2 t^4$, $x$ has $\\Omega t^3$. The ratio is $\\Omega t$." }
              ]
            }
          ]
        },
        {
          "id": "lesson-4-5-12-projectile-eqs",
          "title": "Projectile General Equations",
          "description": "Summarizing the 3D projectile equations.",
          "icon": "Layers",
          "slides": [
            {
              "id": "s1",
              "type": "theory",
              "title": "The Full Equations of Motion",
              "content": "For a projectile fired with arbitrary velocity $(v_x, v_y, v_z)$, the full acceleration vector (Equation 15.7) is:\n\n$a_x = 2v_y\\Omega \\cos\\lambda - 2v_z\\Omega \\sin\\lambda$\n$a_y = -2v_x\\Omega \\cos\\lambda$\n$a_z = 2v_x\\Omega \\sin\\lambda - g$"
            },
            {
              "id": "s2",
              "type": "example",
              "title": "Physical Interpretation",
              "content": "Look at $a_z$. If you fire a projectile East ($+v_x$), the term $2v_x\\Omega\\sin\\lambda$ is positive (Upward). \nThis upward acceleration opposes gravity $g$, meaning the projectile takes longer to hit the ground. Since it's in the air longer, its total range increases!\n\nConversely, firing West ($-v_x$) creates a downward acceleration, shortening the flight time and decreasing the range."
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "North/South Firing Range",
              "content": "If you fire a projectile strictly North ($v_x = 0$, $v_z = v_0\sin\theta$), look at the $a_z$ equation. How does the Coriolis force affect the time of flight for a North/South shot?",
              "options": [
                { "id": "1", "text": "It increases the time of flight.", "isCorrect": false, "explanation": "Look at $a_z$." },
                { "id": "2", "text": "It has no first-order effect on the time of flight.", "isCorrect": true, "explanation": "If $v_x = 0$, then $a_z = -g$. The vertical acceleration is unaffected to first order, so flight time is unchanged." }
              ]
            },
            {
              "id": "s4",
              "type": "fill_in_blank",
              "title": "The Cross Terms",
              "content": "The Coriolis acceleration always acts perpendicular to the velocity. Therefore, moving in the x direction ($v_x$) creates accelerations exclusively in the y and ___ directions.",
              "blankAnswer": "z"
            }
          ]
        }
      ]
    },
    {
      "id": "unit-4-6",
      "title": "The Foucault Pendulum",
      "description": "Analyzing the slow precession of a swinging pendulum on Earth.",
      "color": "duo-green",
      "lessons": [
        {
          "id": "lesson-4-6-1-foucault-intro",
          "title": "Introduction to the Pendulum",
          "description": "Historical context and basic concept.",
          "icon": "Clock",
          "slides": [
            {
              "id": "s1",
              "type": "theory",
              "title": "Foucault's Demonstration",
              "content": "In 1851, Leon Foucault suspended a massive iron sphere from a 67-meter wire inside the Pantheon in Paris. He released it, and over hours, the crowd watched the plane of its swing slowly rotate clockwise.\n\nThis was the first direct, visual proof that the Earth rotates! The pendulum swings in a fixed plane in inertial space, while the Earth turns underneath it."
            },
            {
              "id": "s2",
              "type": "example",
              "title": "Pole vs Equator",
              "content": "If you place the pendulum exactly at the North Pole, the Earth rotates $360^\\circ$ beneath it every 24 hours. The observer sees a precession rate of $15^\\circ$ per hour.\n\nAt the equator, the plane of the pendulum does not precess at all!",
              "canvasId": "foucault-precess"
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Rate of Precession",
              "content": "The precession rate $\\Omega_{prec}$ depends on the latitude. Which formula correctly predicts 24 hours at the pole and infinity (no precession) at the equator?",
              "options": [
                { "id": "1", "text": "$\\Omega_{prec} = \\Omega \\cos\\lambda$", "isCorrect": true, "explanation": "Where $\\lambda$ is the colatitude. At the pole, $\\lambda=0, \\cos(0)=1$. At the equator, $\\lambda=90^\\circ, \\cos(90)=0$." },
                { "id": "2", "text": "$\\Omega_{prec} = \\Omega \\sin\\lambda$", "isCorrect": false, "explanation": "That would be max at the equator." }
              ]
            },
            {
              "id": "s4",
              "type": "fill_in_blank",
              "title": "Terminology",
              "content": "The slow rotation of the plane of oscillation of the pendulum is called ___.",
              "blankAnswer": "precession"
            }
          ]
        },
        {
          "id": "lesson-4-6-2-foucault-setup",
          "title": "Setting up the Equations",
          "description": "Applying Newton's second law.",
          "icon": "Target",
          "slides": [
            {
              "id": "s1",
              "type": "theory",
              "title": "Forces on the Bob",
              "content": "Let the z-axis be oriented along the local vertical. The bob is acted upon by:\n1. Tension $\\mathbf{T}$\n2. Effective Gravity $m\\mathbf{g}_e$ (which points strictly in $-z$)\n3. Coriolis Force $-2m\\mathbf{\\Omega} \\times \\mathbf{v}$"
            },
            {
              "id": "s2",
              "type": "example",
              "title": "The Vector Equation",
              "content": "The full equation is $m\\mathbf{a} = \\mathbf{T} + m\\mathbf{g}_e - 2m(\\mathbf{\\Omega} \\times \\mathbf{v})$.\n\nWe project this onto the x-y plane. Because the pendulum is very long (67m) and the swing is small, the vertical velocity $v_z$ is effectively zero, simplifying the Coriolis cross product greatly."
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Tension Components",
              "content": "If the pendulum has length $l$ and is displaced by $x$ and $y$, the string pulls back towards the origin. By similar triangles, the x-component of the Tension is $T_x = -T(x/l)$. What is $T_y$?",
              "options": [
                { "id": "1", "text": "$T_y = -T(y/l)$", "isCorrect": true, "explanation": "The tension component is proportional to the displacement fraction $y/l$." },
                { "id": "2", "text": "$T_y = T(z/l)$", "isCorrect": false, "explanation": "That would be the vertical component." }
              ]
            }
          ]
        },
        {
          "id": "lesson-4-6-3-foucault-components",
          "title": "Component Equations",
          "description": "Breaking down the cross product.",
          "icon": "BoxSelect",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Component Breakdown",
              "content": "Expand the Coriolis force $-2m[\\Omega\\sin\\lambda \\mathbf{\\hat{j}} + \\Omega\\cos\\lambda \\mathbf{\\hat{k}}] \\times [v_x\\mathbf{\\hat{i}} + v_y\\mathbf{\\hat{j}}]$ to find the x and y force components."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "Evaluate the cross product.",
              "interactiveSteps": [
                {
                  "stepText": "We ignore $v_z$, so velocity is $v_x\\mathbf{\\hat{i}} + v_y\\mathbf{\\hat{j}}$."
                },
                {
                  "prompt": "Evaluate the $\\mathbf{\\hat{k}}$ component of $\\Omega$ crossed with $v$: $(\\Omega\\cos\\lambda \\mathbf{\\hat{k}}) \\times (v_x\\mathbf{\\hat{i}} + v_y\\mathbf{\\hat{j}})$.",
                  "stepText": "$\\mathbf{\\hat{k}} \\times \\mathbf{\\hat{i}} = \\mathbf{\\hat{j}}$ and $\\mathbf{\\hat{k}} \\times \\mathbf{\\hat{j}} = -\\mathbf{\\hat{i}}$. Result: $\\Omega\\cos\\lambda (v_x\\mathbf{\\hat{j}} - v_y\\mathbf{\\hat{i}})$.",
                  "options": [
                    { "id": "A", "text": "$\\Omega\\cos\\lambda (v_x\\mathbf{\\hat{j}} - v_y\\mathbf{\\hat{i}})$", "isCorrect": true, "explanation": "Correct RHR." }
                  ]
                },
                {
                  "stepText": "Multiply by $-2m$: The Coriolis force is $+2m v_y \\Omega\\cos\\lambda \\mathbf{\\hat{i}} - 2m v_x \\Omega\\cos\\lambda \\mathbf{\\hat{j}}$."
                },
                {
                  "stepText": "Adding the Tension components, the full equations are:\n$m\\ddot{x} = -T(x/l) + 2m v_y \\Omega\\cos\\lambda$\n$m\\ddot{y} = -T(y/l) - 2m v_x \\Omega\\cos\\lambda$"
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Coupling",
              "content": "Notice how the $\\ddot{x}$ equation depends on $v_y$ (which is $\\dot{y}$), and the $\\ddot{y}$ equation depends on $\\dot{x}$. What mathematical term describes this system?",
              "options": [
                { "id": "1", "text": "Coupled differential equations", "isCorrect": true, "explanation": "You cannot solve one without solving the other simultaneously." },
                { "id": "2", "text": "Separable equations", "isCorrect": false, "explanation": "They are the opposite of separated." }
              ]
            }
          ]
        },
        {
          "id": "lesson-4-6-4-foucault-approx",
          "title": "Small Angle Approximations",
          "description": "Cleaning up the constants.",
          "icon": "ActivitySquare",
          "slides": [
            {
              "id": "s1",
              "type": "theory",
              "title": "Defining Constants",
              "content": "For small swings, the vertical acceleration is negligible, so the vertical tension balances gravity: $T \\approx mg$.\n\nSubstitute this into $m\\ddot{x} = -T(x/l) + 2m\\dot{y}\\Omega\\cos\\lambda$:\n$m\\ddot{x} = -mg(x/l) + 2m\\dot{y}\\Omega\\cos\\lambda$"
            },
            {
              "id": "s2",
              "type": "example",
              "title": "Standard Form",
              "content": "Divide by $m$ and define two new constants:\n*   $\\omega^2 = g/l$ (The natural pendulum frequency squared)\n*   $K = \\Omega\\cos\\lambda$ (The Coriolis precession rate)\n\nThe equations become pristine:\n$\\ddot{x} - 2K\\dot{y} + \\omega^2 x = 0$\n$\\ddot{y} + 2K\\dot{x} + \\omega^2 y = 0$"
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Order of Magnitude",
              "content": "In a typical Foucault pendulum, how do the constants $K$ and $\\omega$ compare in magnitude?",
              "options": [
                { "id": "1", "text": "$K \\approx \\omega$", "isCorrect": false, "explanation": "A pendulum swings back and forth in seconds. The earth takes 24 hours to rotate." },
                { "id": "2", "text": "$K \\ll \\omega$", "isCorrect": true, "explanation": "Earth's rotation ($10^{-5}$ rad/s) is vastly smaller than the pendulum swing frequency (~1 rad/s)." }
              ]
            },
            {
              "id": "s4",
              "type": "numerical",
              "title": "Calculate Pendulum Omega",
              "content": "If the original Foucault pendulum had a length $l = 67$ meters, and $g = 9.8$ m/s$^2$, calculate its natural angular frequency $\\omega = \\sqrt{g/l}$ in rad/s.",
              "numericAnswer": 0.38,
              "numericTolerance": 0.02
            }
          ]
        },
        {
          "id": "lesson-4-6-5-foucault-complex",
          "title": "The Complex Variable Trick",
          "description": "Merging two coupled equations into one.",
          "icon": "Layers",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "The Complex Trick",
              "content": "We have:\n$\\ddot{x} - 2K\\dot{y} + \\omega^2 x = 0$\n$\\ddot{y} + 2K\\dot{x} + \\omega^2 y = 0$\n\nMultiply the second equation by $i$ and add it to the first. Let $\\zeta = x + iy$."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "Let's perform the algebra.",
              "interactiveSteps": [
                {
                  "stepText": "Add them: $(\\ddot{x} + i\\ddot{y}) - 2K\\dot{y} + 2iK\\dot{x} + \\omega^2(x + iy) = 0$."
                },
                {
                  "prompt": "Substitute $\\ddot{\\zeta} = \\ddot{x} + i\\ddot{y}$ and $\\zeta = x + iy$. How do we factor the velocity terms $- 2K\\dot{y} + 2iK\\dot{x}$?",
                  "stepText": "Factor out $2iK$: $2iK(\\dot{x} - \\frac{1}{i}\\dot{y})$. Since $1/i = -i$, this is $2iK(\\dot{x} + i\\dot{y}) = 2iK\\dot{\\zeta}$.",
                  "options": [
                    { "id": "A", "text": "$2iK\\dot{\\zeta}$", "isCorrect": true, "explanation": "Correct factorization using $1/i = -i$." },
                    { "id": "B", "text": "$-2iK\\dot{\\zeta}$", "isCorrect": false, "explanation": "Watch the $1/i$ conversion." }
                  ]
                },
                {
                  "stepText": "The resulting single equation is $\\ddot{\\zeta} + 2iK\\dot{\\zeta} + \\omega^2 \\zeta = 0$."
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Equation Type",
              "content": "The equation $\\ddot{\\zeta} + 2iK\\dot{\\zeta} + \\omega^2 \\zeta = 0$ looks mathematically identical to which common physical system?",
              "options": [
                { "id": "1", "text": "A damped harmonic oscillator.", "isCorrect": true, "explanation": "It has a second derivative, a first derivative (damping-like), and a position term. The only difference is the damping coefficient is imaginary!" },
                { "id": "2", "text": "An undamped driven oscillator.", "isCorrect": false, "explanation": "There is no driving force on the RHS." }
              ]
            }
          ]
        },
        {
          "id": "lesson-4-6-6-foucault-roots",
          "title": "Roots of the Auxiliary Equation",
          "description": "Solving the complex ODE.",
          "icon": "TerminalSquare",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Finding the Roots",
              "content": "Solve $\\ddot{\\zeta} + 2iK\\dot{\\zeta} + \\omega^2 \\zeta = 0$ by assuming a solution of the form $\\zeta = e^{pt}$."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "We use the quadratic formula.",
              "interactiveSteps": [
                {
                  "stepText": "The auxiliary equation is $p^2 + 2iKp + \\omega^2 = 0$."
                },
                {
                  "prompt": "Apply the quadratic formula $p = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$. What is $b^2$?",
                  "stepText": "$(2iK)^2 = 4i^2K^2 = -4K^2$.",
                  "options": [
                    { "id": "A", "text": "$-4K^2$", "isCorrect": true, "explanation": "The imaginary $i$ squares to $-1$." },
                    { "id": "B", "text": "$4K^2$", "isCorrect": false, "explanation": "Don't forget to square the $i$." }
                  ]
                },
                {
                  "stepText": "So $p = \\frac{-2iK \\pm \\sqrt{-4K^2 - 4\\omega^2}}{2} = -iK \\pm \\sqrt{-K^2 - \\omega^2} = -iK \\pm i\\sqrt{K^2 + \\omega^2}$."
                },
                {
                  "prompt": "Since $K \\ll \\omega$, we can ignore $K^2$ under the square root. What does the root simplify to?",
                  "stepText": "$p = -iK \\pm i\\omega$.",
                  "options": [
                    { "id": "A", "text": "$p = -iK \\pm i\\omega$", "isCorrect": true, "explanation": "Correct approximation." },
                    { "id": "B", "text": "$p = -iK$", "isCorrect": false, "explanation": "You can't drop the much larger $\\omega$ term!" }
                  ]
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Physical Meaning of Roots",
              "content": "The roots are entirely imaginary ($p = -iK \\pm i\\omega$). What does this imply about the physical motion?",
              "options": [
                { "id": "1", "text": "The motion decays exponentially over time.", "isCorrect": false, "explanation": "Decay requires a negative real part." },
                { "id": "2", "text": "The motion is purely oscillatory.", "isCorrect": true, "explanation": "Pure imaginary roots $e^{i\\theta}$ yield sines and cosines, meaning continuous oscillation without energy loss." }
              ]
            }
          ]
        },
        {
          "id": "lesson-4-6-7-foucault-precession",
          "title": "Extracting the Precession",
          "description": "Factoring the solution to see the rotating plane.",
          "icon": "Repeat",
          "slides": [
            {
              "id": "s1",
              "type": "theory",
              "title": "The Factored Solution",
              "content": "With roots $p = -iK \\pm i\\omega$, the general solution is:\n$\\zeta(t) = A e^{(-iK + i\\omega)t} + B e^{(-iK - i\\omega)t}$\n\nWe can factor out the common term $e^{-iKt}$:\n$\\zeta(t) = e^{-iKt} (A e^{i\\omega t} + B e^{-i\\omega t})$"
            },
            {
              "id": "s2",
              "type": "example",
              "title": "Interpreting the Math",
              "content": "The term in parentheses $(A e^{i\\omega t} + B e^{-i\\omega t})$ is the exact standard solution for a simple 1D pendulum swinging back and forth at frequency $\\omega$.\n\nThe pre-factor $e^{-iKt}$ is a rotation operator in the complex plane. It takes the 1D swinging line and slowly rotates it clockwise at angular velocity $K$."
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Precession Direction",
              "content": "In the Northern Hemisphere, $K = \Omega\cos\lambda$ is positive. The rotation term is $e^{-iKt} = \cos(Kt) - i\sin(Kt)$. In the complex plane (where $+i$ is the y-axis / North), does this represent a clockwise or counter-clockwise rotation?",
              "options": [
                { "id": "1", "text": "Clockwise", "isCorrect": true, "explanation": "A negative angle in standard polar coordinates is a clockwise rotation." },
                { "id": "2", "text": "Counter-clockwise", "isCorrect": false, "explanation": "That would require $e^{+iKt}$." }
              ]
            },
            {
              "id": "s4",
              "type": "fill_in_blank",
              "title": "Final Form",
              "content": "The Foucault pendulum is the ultimate proof that the ___ itself is rotating, not the universe around it.",
              "blankAnswer": "Earth"
            }
          ]
        },
        {
          "id": "lesson-4-6-8-foucault-rotating-frame",
          "title": "Worked Example 15.5: Rotating Frame Trick",
          "description": "Solving by changing coordinates rather than complex numbers.",
          "icon": "SplitSquareHorizontal",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "The Rotating Frame",
              "content": "Instead of the complex trick, imagine looking down on the pendulum from a coordinate system $(x^*, y^*)$ that is already rotating clockwise at the precession rate $K$.\n\nIn this frame, the pendulum simply swings in a straight line $x^* = s(t), y^* = 0$.\nSubstitute this back into Earth coordinates to verify the equation."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "Use the 2D rotation matrix.",
              "interactiveSteps": [
                {
                  "stepText": "To rotate a straight line clockwise by $Kt$, the Earth coordinates are:\n$x = s\\cos(Kt)$\n$y = -s\\sin(Kt)$"
                },
                {
                  "prompt": "Substitute these into the original $\\ddot{x}$ equation. What was the most important cancellation we found in Exercise 15.9?",
                  "stepText": "The Coriolis terms perfectly cancelled the centripetal $K^2$ terms from the second derivative.",
                  "options": [
                    { "id": "A", "text": "The Coriolis terms perfectly cancelled the $K^2$ terms.", "isCorrect": false, "explanation": "Actually, in Ex 15.9 we found they COMBINED to form $+K^2s$, leaving $\\ddot{s} + (K^2+\\omega^2)s = 0$." },
                    { "id": "B", "text": "The Coriolis terms combined with the $K^2$ terms to form $+K^2s$.", "isCorrect": true, "explanation": "Yes, $-sK^2 - (-2sK^2) = +sK^2$." }
                  ]
                },
                {
                  "stepText": "This leaves $\\ddot{s} + (K^2 + \\omega^2)s = 0$."
                },
                {
                  "stepText": "Because $K \\ll \\omega$, we approximate this as $\\ddot{s} + \\omega^2 s = 0$. This proves that the pendulum simply undergoes 1D simple harmonic motion $s(t)$ inside a frame that rotates at rate $K$!"
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Equivalence of Methods",
              "content": "Does this rotating frame trick yield the exact same physical result as the complex variable trick?",
              "options": [
                { "id": "1", "text": "Yes, they are mathematically identical.", "isCorrect": true, "explanation": "The complex exponential $e^{-iKt}$ is literally just the 2D rotation matrix applied to the 1D solution." },
                { "id": "2", "text": "No, the complex trick is more accurate.", "isCorrect": false, "explanation": "They both rely on the exact same $K \\ll \\omega$ approximation." }
              ]
            }
          ]
        }
      ]
    }
  ]
};