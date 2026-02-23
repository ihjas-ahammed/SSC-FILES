import { Section } from '../types';

export const SECTION_3_3: Section = {
  "id": "section-3-3",
  "title": "Section 3: Comprehensive Wave & Accelerated Frame Problems",
  "description": "Exhaustive coverage of worked examples, exercises, and advanced optional topics from Module 3.",
  "color": "duo-blue",
  "units": [
    {
      "id": "unit-3-3-1",
      "title": "Traveling Waves & Complex Forms",
      "description": "Exercises on wave propagation, constants, and complex representations.",
      "color": "duo-blue",
      "lessons": [
        {
          "id": "lesson-3-3-1-1",
          "title": "Exercise 13.6: The Wave Number",
          "description": "Proving the physical meaning of the constant k.",
          "icon": "Hash",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Exercise 13.6",
              "content": "In the expression $y(x,t) = A \\sin k(x - vt)$, argue that the constant $k$ introduced as a proportionality constant must actually be the wave number."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "Let's examine the spatial periodicity of the wave.",
              "interactiveSteps": [
                {
                  "stepText": "Consider a snapshot of the wave at $t = 0$. The displacement is $y(x, 0) = A \\sin(kx)$."
                },
                {
                  "prompt": "By definition, the wave repeats its shape every time $x$ increases by one wavelength $\\lambda$. Therefore, what must $\\sin(kx + k\\lambda)$ equal?",
                  "stepText": "It must equal $\\sin(kx)$.",
                  "options": [
                    { "id": "A", "text": "$\\sin(kx)$", "isCorrect": true, "explanation": "The wave must return to its exact original displacement and phase." },
                    { "id": "B", "text": "$0$", "isCorrect": false, "explanation": "It doesn't have to be zero, it just has to be the same as it was at $x$." }
                  ]
                },
                {
                  "prompt": "The sine function repeats every $2\\pi$ radians. Therefore, what must the phase difference $k\\lambda$ equal?",
                  "stepText": "$k\\lambda = 2\\pi$.",
                  "options": [
                    { "id": "A", "text": "$2\\pi$", "isCorrect": true, "explanation": "Adding $2\\pi$ to the argument of sine leaves the value unchanged." },
                    { "id": "B", "text": "$\\pi$", "isCorrect": false, "explanation": "Adding $\\pi$ flips the sign of the sine function." }
                  ]
                },
                {
                  "stepText": "Solving for $k$ gives $k = \\frac{2\\pi}{\\lambda}$. This is the exact definition of the wave number!"
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Dimensionality of k",
              "content": "Based on $k = 2\\pi / \\lambda$, what are the SI units of the wave number?",
              "options": [
                { "id": "1", "text": "Radians per second (rad/s)", "isCorrect": false, "explanation": "That is angular frequency $\\omega$." },
                { "id": "2", "text": "Radians per meter (rad/m)", "isCorrect": true, "explanation": "Since $\\lambda$ is in meters, $k$ has units of inverse length (rad/m)." },
                { "id": "3", "text": "Meters per second (m/s)", "isCorrect": false, "explanation": "That is velocity." }
              ]
            },
            {
              "id": "s4",
              "type": "fill_in_blank",
              "title": "Equivalence",
              "content": "Just as angular frequency $\\omega$ dictates how fast the wave oscillates in time, the wave number $k$ dictates how fast it oscillates in ___.",
              "blankAnswer": "space"
            }
          ]
        },
        {
          "id": "lesson-3-3-1-2",
          "title": "Exercise 13.7: Plotting the Wave",
          "description": "Visualizing the movement of the traveling wave.",
          "icon": "Activity",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Exercise 13.7",
              "content": "Plot $y = A \\sin(kx - \\omega t)$ for four nearby values of time to show that this indeed represents a wave traveling to the right."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "Let's analyze the movement of a specific point on the wave, such as a peak.",
              "interactiveSteps": [
                {
                  "stepText": "A peak occurs when the argument of the sine function is $\\pi/2$. So we track the point where $kx - \\omega t = \\pi/2$."
                },
                {
                  "prompt": "Solve this equation for the position of the peak, $x$.",
                  "stepText": "$x = \\frac{\\pi}{2k} + \\frac{\\omega}{k}t$.",
                  "options": [
                    { "id": "A", "text": "$x = \\frac{\\pi}{2k} + \\frac{\\omega}{k}t$", "isCorrect": true, "explanation": "Add $\\omega t$ to both sides and divide by $k$." },
                    { "id": "B", "text": "$x = \\frac{\\pi}{2k} - \\frac{\\omega}{k}t$", "isCorrect": false, "explanation": "Check your algebra." }
                  ]
                },
                {
                  "stepText": "Let $v = \\omega/k$. The position of the peak is $x = x_0 + vt$."
                },
                {
                  "prompt": "As time $t$ increases ($t_1 < t_2 < t_3$), what happens to the position $x$ of this peak?",
                  "stepText": "$x$ increases.",
                  "options": [
                    { "id": "A", "text": "It decreases.", "isCorrect": false, "explanation": "Since $v$ is positive, adding a larger time makes $x$ larger." },
                    { "id": "B", "text": "It increases.", "isCorrect": true, "explanation": "An increasing $x$ means the peak is moving to the right." }
                  ]
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Direction Check",
              "content": "If the wave function was $y = A \\sin(kx + \\omega t)$, tracking the peak $kx + \\omega t = \\pi/2$ would yield $x = \\frac{\\pi}{2k} - vt$. This indicates the wave is traveling:",
              "options": [
                { "id": "1", "text": "To the right (+x)", "isCorrect": false, "explanation": "Look at the $-vt$ term." },
                { "id": "2", "text": "To the left (-x)", "isCorrect": true, "explanation": "As time increases, the position $x$ decreases." }
              ]
            },
            {
              "id": "s4",
              "type": "fill_in_blank",
              "title": "Phase Velocity",
              "content": "The speed at which a specific phase (like a peak) travels through space is called the ___ velocity.",
              "blankAnswer": "phase"
            }
          ]
        },
        {
          "id": "lesson-3-3-1-3",
          "title": "Equation 13.2: General Solution Verification",
          "description": "Proving that the separated products satisfy the PDE.",
          "icon": "Layers",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Checking the PDE",
              "content": "Verify that the product $y(x,t) = \\cos(kx) \\cos(\\omega t)$ is a valid solution to the wave equation $\\frac{\\partial^2 y}{\\partial x^2} = \\frac{1}{v^2}\\frac{\\partial^2 y}{\\partial t^2}$, given $v = \\omega/k$."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "We need to take partial derivatives.",
              "interactiveSteps": [
                {
                  "prompt": "First, take the second partial derivative with respect to $x$. What is $\\frac{\\partial^2 y}{\\partial x^2}$?",
                  "stepText": "$\\frac{\\partial^2}{\\partial x^2}[\\cos(kx)\\cos(\\omega t)] = -k^2 \\cos(kx)\\cos(\\omega t) = -k^2 y$.",
                  "options": [
                    { "id": "A", "text": "$-k^2 y$", "isCorrect": true, "explanation": "Taking the derivative of $\\cos(kx)$ twice pulls out a $-k^2$." },
                    { "id": "B", "text": "$k^2 y$", "isCorrect": false, "explanation": "Derivative of cos is -sin, derivative of -sin is -cos." }
                  ]
                },
                {
                  "prompt": "Now take the second partial derivative with respect to $t$. What is $\\frac{\\partial^2 y}{\\partial t^2}$?",
                  "stepText": "$\\frac{\\partial^2}{\\partial t^2}[\\cos(kx)\\cos(\\omega t)] = -\\omega^2 \\cos(kx)\\cos(\\omega t) = -\\omega^2 y$.",
                  "options": [
                    { "id": "A", "text": "$-\\omega^2 y$", "isCorrect": true, "explanation": "Taking the derivative of $\\cos(\\omega t)$ twice pulls out an $-\\omega^2$." },
                    { "id": "B", "text": "$\\omega^2 y$", "isCorrect": false, "explanation": "Don't lose the negative sign." }
                  ]
                },
                {
                  "stepText": "Substitute these into the wave equation: $-k^2 y = \\frac{1}{v^2} (-\\omega^2 y)$."
                },
                {
                  "stepText": "Cancel $-y$ from both sides to get $k^2 = \\frac{\\omega^2}{v^2}$, which perfectly matches $v = \\frac{\\omega}{k}$. Verification complete!"
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Superposition of Products",
              "content": "Why is the general solution a sum of four different products (like $\\cos kx \\cos \\omega t$, $\\sin kx \\cos \\omega t$, etc.)?",
              "options": [
                { "id": "1", "text": "Because the wave equation is non-linear.", "isCorrect": false, "explanation": "The wave equation is linear." },
                { "id": "2", "text": "Because the spatial equation has two solutions and the time equation has two solutions.", "isCorrect": true, "explanation": "The product $(A\\cos kx + B\\sin kx)(C\\cos \\omega t + D\\sin \\omega t)$ expands into four distinct terms." }
              ]
            },
            {
              "id": "s4",
              "type": "numerical",
              "title": "Wave Speed Calculation",
              "content": "If a wave component is $y = 5 \\cos(4x) \\sin(12t)$, what is the wave speed $v$?",
              "numericAnswer": 3,
              "numericTolerance": 0.01
            }
          ]
        },
        {
          "id": "lesson-3-3-1-4",
          "title": "Standing Waves from Traveling Waves",
          "description": "Connecting the boundary conditions to traveling waves.",
          "icon": "Repeat",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Boundary Verification",
              "content": "We know $y(x,t) = A[\\sin(kx - \\omega t) + \\sin(kx + \\omega t)]$ forms a standing wave $y(x,t) = 2A\\sin(kx)\\cos(\\omega t)$.\n\nVerify that this satisfies the boundary condition $y=0$ at $x=L$ for ALL times $t$ if $k$ is quantized."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "We evaluate the combined function at $x=L$.",
              "interactiveSteps": [
                {
                  "stepText": "Set $x=L$: $y(L,t) = 2A \\sin(kL) \\cos(\\omega t)$."
                },
                {
                  "prompt": "For this to equal $0$ at every possible time $t$, which part must be identically zero?",
                  "stepText": "The spatial part $\\sin(kL)$ must be zero.",
                  "options": [
                    { "id": "A", "text": "$\\cos(\\omega t) = 0$", "isCorrect": false, "explanation": "That is only true at specific instants of time, not all times." },
                    { "id": "B", "text": "$\\sin(kL) = 0$", "isCorrect": true, "explanation": "Correct. This constant amplitude factor must be zero." }
                  ]
                },
                {
                  "stepText": "If $\\sin(kL) = 0$, then $kL$ must be an integer multiple of $\\pi$."
                },
                {
                  "stepText": "Thus $k_n = \\frac{n\\pi}{L}$. The same quantization condition arises naturally from summing opposite traveling waves!"
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Physical Interpretation",
              "content": "What is physically happening at $x=L$ when $\\sin(kL) = 0$?",
              "options": [
                { "id": "1", "text": "The incoming wave perfectly cancels the reflected wave at that exact point.", "isCorrect": true, "explanation": "The wall provides a hard boundary, forcing a phase inversion upon reflection so that the two waves destructively interfere at the boundary permanently." },
                { "id": "2", "text": "The string breaks.", "isCorrect": false, "explanation": "No." }
              ]
            },
            {
              "id": "s4",
              "type": "fill_in_blank",
              "title": "Nodes",
              "content": "The fixed ends of a vibrating string, where displacement is permanently zero, are called ___.",
              "blankAnswer": "nodes"
            }
          ]
        },
        {
          "id": "lesson-3-3-1-5",
          "title": "The Complex Traveling Wave",
          "description": "Extracting the real physical wave from Euler's relation.",
          "icon": "Code",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Real and Imaginary Parts",
              "content": "A traveling wave can be written as $y(x,t) = A e^{i(kx - \\omega t)}$.\n\nShow how to extract the real, physical traveling wave, and explain why this formulation is useful."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "Use Euler's formula.",
              "interactiveSteps": [
                {
                  "stepText": "Euler's formula is $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$."
                },
                {
                  "prompt": "Apply this to our wave function. What is the expanded form?",
                  "stepText": "$y(x,t) = A[\\cos(kx - \\omega t) + i\\sin(kx - \\omega t)]$.",
                  "options": [
                    { "id": "A", "text": "$A[\\cos(kx - \\omega t) + i\\sin(kx - \\omega t)]$", "isCorrect": true, "explanation": "Direct substitution." },
                    { "id": "B", "text": "$A\\cos(kx - \\omega t)$", "isCorrect": false, "explanation": "You dropped the imaginary part prematurely." }
                  ]
                },
                {
                  "stepText": "The physical wave is just the real part: $\\text{Re}[y] = A\\cos(kx - \\omega t)$."
                },
                {
                  "stepText": "Why use it? Taking derivatives of $e^{u}$ is much easier than doing product/chain rules on sines and cosines. You do all the calculus on the exponent, and just take the Real part at the very end!"
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Differentiation Check",
              "content": "What is the time derivative $\\frac{\\partial}{\\partial t}$ of $A e^{i(kx - \\omega t)}$?",
              "options": [
                { "id": "1", "text": "$-i\\omega A e^{i(kx - \\omega t)}$", "isCorrect": true, "explanation": "The chain rule pulls down the coefficient of $t$, which is $-i\\omega$." },
                { "id": "2", "text": "$ik A e^{i(kx - \\omega t)}$", "isCorrect": false, "explanation": "That is the spatial derivative $\\partial / \\partial x$." }
              ]
            },
            {
              "id": "s4",
              "type": "fill_in_blank",
              "title": "Electromagnetic Use",
              "content": "This complex formulation is particularly useful when studying ___ waves.",
              "blankAnswer": "electromagnetic"
            }
          ]
        }
      ]
    },
    {
      "id": "unit-3-3-2",
      "title": "Wave Boundaries & Energy",
      "description": "Continuity across junctions, energy flow, and the missing momentum mystery.",
      "color": "duo-blue",
      "lessons": [
        {
          "id": "lesson-3-3-2-1",
          "title": "Exercise 13.8: Slope Continuity",
          "description": "Proving why the derivative must match at a massless junction.",
          "icon": "Target",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Exercise 13.8",
              "content": "Consider two strings joined at $x=0$. Show that if the tension $F$ is continuous at the junction (and the knot is massless), the slope $dy/dx$ must be continuous."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "We apply Newton's second law to an infinitesimally small piece of string at the junction.",
              "interactiveSteps": [
                {
                  "stepText": "Let the junction be a tiny segment of mass $m=0$. The vertical forces on it are the tension from string 2 pulling right, and tension from string 1 pulling left."
                },
                {
                  "prompt": "What is the vertical component of the tension force $F$ at a small angle $\\theta$?",
                  "stepText": "It is $F \\sin\\theta \\approx F \\tan\\theta = F \\frac{\\partial y}{\\partial x}$.",
                  "options": [
                    { "id": "A", "text": "$F \\frac{\\partial y}{\\partial x}$", "isCorrect": true, "explanation": "The vertical force is proportional to the slope." },
                    { "id": "B", "text": "$F y$", "isCorrect": false, "explanation": "It depends on the slope, not the absolute displacement." }
                  ]
                },
                {
                  "stepText": "Newton's second law for this massless point: $F_{net} = ma = 0$."
                },
                {
                  "prompt": "Set the net vertical force to zero: $F_2(slope_2) - F_1(slope_1) = 0$. Since tension is uniform ($F_1 = F_2 = F$), what remains?",
                  "stepText": "$F(\\frac{\\partial y_2}{\\partial x} - \\frac{\\partial y_1}{\\partial x}) = 0 \\implies \\frac{\\partial y_2}{\\partial x} = \\frac{\\partial y_1}{\\partial x}$.",
                  "options": [
                    { "id": "A", "text": "$\\frac{\\partial y_2}{\\partial x} = \\frac{\\partial y_1}{\\partial x}$", "isCorrect": true, "explanation": "The slopes must be perfectly equal, meaning the string cannot have a sharp 'kink' at a massless junction." },
                    { "id": "B", "text": "$y_1 = y_2$", "isCorrect": false, "explanation": "That is the position continuity condition, not the slope condition." }
                  ]
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Visualizing the Kink",
              "content": "If a string DID have a sharp kink at a massless point (meaning slopes were different), what would happen physically according to $F=ma$?",
              "options": [
                { "id": "1", "text": "Infinite acceleration.", "isCorrect": true, "explanation": "A net force on a zero mass yields $a = F/0 = \\infty$. It would instantly snap straight." },
                { "id": "2", "text": "Zero acceleration.", "isCorrect": false, "explanation": "A net force implies non-zero acceleration." }
              ]
            },
            {
              "id": "s4",
              "type": "fill_in_blank",
              "title": "Continuous Properties",
              "content": "At a massless junction between two strings, both the displacement $y$ and the ___ $dy/dx$ must be continuous.",
              "blankAnswer": "slope"
            }
          ]
        },
        {
          "id": "lesson-3-3-2-2",
          "title": "Exercise 13.10: Knot with Mass",
          "description": "Boundary condition when the junction has inertia.",
          "icon": "Anchor",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Exercise 13.10",
              "content": "Obtain the appropriate boundary condition for two strings joined by a knot of mass $m$ at $x=0$."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "We re-apply Newton's Second Law, but this time $m \\neq 0$.",
              "interactiveSteps": [
                {
                  "stepText": "The net vertical force on the knot is the difference in the vertical tension components from the right side ($0^+$) and the left side ($0^-$)."
                },
                {
                  "prompt": "How do we write the net force using slopes?",
                  "stepText": "$F_{net} = F \\left( \\left.\\frac{\\partial y}{\\partial x}\\right|_{0^+} - \\left.\\frac{\\partial y}{\\partial x}\\right|_{0^-} \\right)$.",
                  "options": [
                    { "id": "A", "text": "$F \\left( \\left.\\frac{\\partial y}{\\partial x}\\right|_{0^+} - \\left.\\frac{\\partial y}{\\partial x}\\right|_{0^-} \\right)$", "isCorrect": true, "explanation": "Tension times the difference in slopes." },
                    { "id": "B", "text": "$F \\frac{\\partial^2 y}{\\partial x^2}$", "isCorrect": false, "explanation": "That is the force on a distributed mass segment $dx$, not a point mass." }
                  ]
                },
                {
                  "stepText": "The acceleration of the knot is $\\left.\\frac{\\partial^2 y}{\\partial t^2}\\right|_0$."
                },
                {
                  "prompt": "Equate $F_{net}$ to $ma$. What is the final boundary condition?",
                  "stepText": "$F \\left( \\left.\\frac{\\partial y}{\\partial x}\\right|_{0^+} - \\left.\\frac{\\partial y}{\\partial x}\\right|_{0^-} \\right) = m \\left.\\frac{\\partial^2 y}{\\partial t^2}\\right|_0$.",
                  "options": [
                    { "id": "A", "text": "$F \\left( \\left.\\frac{\\partial y}{\\partial x}\\right|_{0^+} - \\left.\\frac{\\partial y}{\\partial x}\\right|_{0^-} \\right) = m \\left.\\frac{\\partial^2 y}{\\partial t^2}\\right|_0$", "isCorrect": true, "explanation": "Correct! This allows for a 'kink' in the string proportional to the knot's acceleration." },
                    { "id": "B", "text": "$\\left.\\frac{\\partial y}{\\partial x}\\right|_{0^+} = \\left.\\frac{\\partial y}{\\partial x}\\right|_{0^-}$", "isCorrect": false, "explanation": "This is only true if $m=0$." }
                  ]
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Effect of the Knot",
              "content": "Because the knot has mass, the slopes on either side are no longer equal. What does this physically look like?",
              "options": [
                { "id": "1", "text": "A sharp V-shaped kink at the knot.", "isCorrect": true, "explanation": "The difference in slopes provides the net force required to accelerate the heavy knot." },
                { "id": "2", "text": "A perfectly smooth curve.", "isCorrect": false, "explanation": "That implies equal slopes." }
              ]
            },
            {
              "id": "s4",
              "type": "numerical",
              "title": "Evaluate Force",
              "content": "If $F=10$N, the slope on the right is $0.5$, and the slope on the left is $0.3$, what is the net vertical force on the knot in Newtons?",
              "numericAnswer": 2,
              "numericTolerance": 0.05
            }
          ]
        },
        {
          "id": "lesson-3-3-2-3",
          "title": "Worked Example 13.2: Transmitted Intensity",
          "description": "Calculating energy passing through the boundary.",
          "icon": "ArrowRight",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Transmission Coefficient",
              "content": "In Worked Example 13.2, we found the Reflection Coefficient $R = (v_2 - v_1)^2 / (v_2 + v_1)^2$.\n\nNow find the Transmission Coefficient $T_c$, defined as the ratio of transmitted intensity to incident intensity. Note that Power $P = F A^2 \\omega^2 / 2v$ depends on velocity, so $I \propto A^2 / v$."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "Let's calculate $T_c$ using energy conservation.",
              "interactiveSteps": [
                {
                  "stepText": "From the slope boundary condition, we found $A_t / A_i = \\frac{2v_2}{v_1 + v_2}$."
                },
                {
                  "prompt": "Because intensity $I = P = \\frac{F \\omega^2}{2} \\frac{A^2}{v}$, the ratio of intensities is $T_c = \\frac{I_t}{I_i} = \\frac{A_t^2 / v_2}{A_i^2 / v_1}$. Substitute $A_t / A_i$ into this.",
                  "stepText": "$T_c = \\frac{v_1}{v_2} \\left(\\frac{2v_2}{v_1 + v_2}\\right)^2 = \\frac{4v_1 v_2}{(v_1 + v_2)^2}$.",
                  "options": [
                    { "id": "A", "text": "$T_c = \\frac{4v_1 v_2}{(v_1 + v_2)^2}$", "isCorrect": true, "explanation": "Correct substitution, taking care of the velocity factors in the intensity definition." },
                    { "id": "B", "text": "$T_c = \\left(\\frac{2v_2}{v_1 + v_2}\\right)^2$", "isCorrect": false, "explanation": "That is just the square of the amplitude ratio, not the intensity ratio." }
                  ]
                },
                {
                  "stepText": "Let's check energy conservation: Does $R + T_c = 1$?"
                },
                {
                  "stepText": "$\\frac{(v_2 - v_1)^2}{(v_1 + v_2)^2} + \\frac{4v_1 v_2}{(v_1 + v_2)^2} = \\frac{v_2^2 - 2v_1v_2 + v_1^2 + 4v_1v_2}{(v_1 + v_2)^2} = \\frac{(v_1+v_2)^2}{(v_1+v_2)^2} = 1$. It perfectly conserves energy!"
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Maximum Transmission",
              "content": "Looking at $T_c = \\frac{4v_1 v_2}{(v_1 + v_2)^2}$, under what condition is 100% of the energy transmitted ($T_c = 1$)?",
              "options": [
                { "id": "1", "text": "When $v_1 = v_2$ (impedance matching)", "isCorrect": true, "explanation": "If the speeds are equal, the media are effectively the same, and no reflection occurs." },
                { "id": "2", "text": "When $v_2 = 0$ (a fixed wall)", "isCorrect": false, "explanation": "Transmission would be zero." },
                { "id": "3", "text": "When $v_2 = \\infty$ (a free end)", "isCorrect": false, "explanation": "Transmission would also approach zero." }
              ]
            },
            {
              "id": "s4",
              "type": "fill_in_blank",
              "title": "Conservation",
              "content": "The sum of the reflection coefficient $R$ and the transmission coefficient $T_c$ must always equal ___ due to the conservation of energy.",
              "blankAnswer": "1"
            }
          ]
        },
        {
          "id": "lesson-3-3-2-4",
          "title": "Section 13.7: Missing Wave Momentum",
          "description": "Understanding longitudinal motion in transverse waves.",
          "icon": "Repeat",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "The Momentum Paradox",
              "content": "Section 13.7 (Optional): A strictly transverse wave only moves particles perpendicular to the wave direction. So it should not transport longitudinal momentum.\n\nHowever, it is a known fact that waves DO transport momentum. How is this paradox resolved?"
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "We must look closer at the microscopic physics of the string.",
              "interactiveSteps": [
                {
                  "stepText": "Model the string as a series of masses connected by springs."
                },
                {
                  "prompt": "If you displace one mass vertically, what happens to the distance between it and its neighbor?",
                  "stepText": "The distance increases (the spring stretches).",
                  "options": [
                    { "id": "A", "text": "It stays the same.", "isCorrect": false, "explanation": "A straight line is the shortest distance. Moving it up creates a longer hypotenuse." },
                    { "id": "B", "text": "It increases.", "isCorrect": true, "explanation": "Correct." }
                  ]
                },
                {
                  "prompt": "Because the spring stretches diagonally, the tension force now has a horizontal component. What does this cause?",
                  "stepText": "It pulls the neighboring mass slightly horizontally.",
                  "options": [
                    { "id": "A", "text": "Longitudinal motion", "isCorrect": true, "explanation": "This horizontal pull creates a small, secondary longitudinal wave that travels alongside the transverse wave, carrying the momentum!" },
                    { "id": "B", "text": "Transverse motion", "isCorrect": false, "explanation": "The horizontal force creates horizontal (longitudinal) motion." }
                  ]
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Real vs Ideal Strings",
              "content": "What is the conclusion about our standard 'ideal string' model (purely transverse motion)?",
              "options": [
                { "id": "1", "text": "It is exactly correct.", "isCorrect": false, "explanation": "It fails to account for momentum." },
                { "id": "2", "text": "It is an approximation that ignores a very small longitudinal component.", "isCorrect": true, "explanation": "In reality, the 'transverse' wave inevitably generates a small longitudinal wave that carries the momentum." }
              ]
            },
            {
              "id": "s4",
              "type": "fill_in_blank",
              "title": "Wave Types",
              "content": "A wave where particles oscillate parallel to the direction of propagation is called a ___ wave.",
              "blankAnswer": "longitudinal"
            }
          ]
        },
        {
          "id": "lesson-3-3-2-5",
          "title": "Time-Averaged Energy",
          "description": "Integrating sin^2 over a period.",
          "icon": "Clock",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Averaging Power",
              "content": "In Section 13.6, the instantaneous power flow is given as:\n$P(t) = F A_t^2 k \\omega \\sin^2(\\omega t)$\n\nShow that the time-average of $\\sin^2(\\omega t)$ over one full period is $1/2$, leading to $\\langle P \\rangle = \\frac{1}{2} F A_t^2 k \\omega$."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "We need to evaluate $\\frac{1}{T} \\int_0^T \\sin^2(\\omega t) dt$.",
              "interactiveSteps": [
                {
                  "stepText": "Use the half-angle identity: $\\sin^2(\\theta) = \\frac{1}{2}(1 - \\cos(2\\theta))$."
                },
                {
                  "prompt": "Substitute this into the integral. What does the integral of $\\cos(2\\omega t)$ over a full period $T$ equal?",
                  "stepText": "The integral of a full cosine wave over its period is exactly zero.",
                  "options": [
                    { "id": "A", "text": "$0$", "isCorrect": true, "explanation": "The positive and negative areas cancel perfectly." },
                    { "id": "B", "text": "$1$", "isCorrect": false, "explanation": "Cosine has equal areas above and below the axis." }
                  ]
                },
                {
                  "stepText": "We are left with $\\frac{1}{T} \\int_0^T \\frac{1}{2}(1) dt = \\frac{1}{T} \\left[ \\frac{1}{2}t \\right]_0^T$."
                },
                {
                  "stepText": "This evaluates to $\\frac{1}{T}(\\frac{1}{2}T) = 1/2$. The proof is complete!"
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Average Kinetic Energy",
              "content": "The same $\\sin^2 / \\cos^2$ averaging applies to the energy of an oscillator. In an undamped harmonic oscillator, the total energy $E$ is constant. What is the average kinetic energy over one cycle?",
              "options": [
                { "id": "1", "text": "$E$", "isCorrect": false, "explanation": "That's the total energy." },
                { "id": "2", "text": "$E/2$", "isCorrect": true, "explanation": "On average, half the energy is kinetic and half is potential." },
                { "id": "3", "text": "0", "isCorrect": false, "explanation": "Kinetic energy is always positive." }
              ]
            },
            {
              "id": "s4",
              "type": "numerical",
              "title": "Average Power Calculation",
              "content": "If the peak instantaneous power transmitted by a wave is $40$ W, what is the average power transmitted $\\langle P \\rangle$?",
              "numericAnswer": 20,
              "numericTolerance": 0.1
            }
          ]
        }
      ]
    },
    {
      "id": "unit-3-3-3",
      "title": "Rotating Frames & Kinematics",
      "description": "Merry-go-round exercises and evaluating the operator equations.",
      "color": "duo-blue",
      "lessons": [
        {
          "id": "lesson-3-3-3-1",
          "title": "Exercise 15.1: Merry-Go-Round Velocity",
          "description": "Parts (a) and (b): Velocities in different frames.",
          "icon": "RotateCw",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Exercise 15.1 (a & b)",
              "content": "A merry-go-round rotates at angular velocity $\\mathbf{\\Omega}$. A child sits on a horse a distance $R$ from the axis.\n\n(a) What is the velocity of the child in the rotating frame ($v_{rot}$)?\n(b) What is the velocity of the child in the inertial frame ($v_{inertial}$)?"
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "We use the velocity translation equation: $\\mathbf{v}_i = \\mathbf{v}_r + \\mathbf{\\Omega} \\times \\mathbf{r}$.",
              "interactiveSteps": [
                {
                  "prompt": "For part (a), the child is sitting still on the horse. What is their velocity relative to the merry-go-round (the rotating frame)?",
                  "stepText": "$v_{rot} = 0$.",
                  "options": [
                    { "id": "A", "text": "$0$", "isCorrect": true, "explanation": "They are at rest relative to the rotating platform." },
                    { "id": "B", "text": "$\\Omega R$", "isCorrect": false, "explanation": "That is the velocity relative to the ground." }
                  ]
                },
                {
                  "stepText": "For part (b), apply the formula: $\\mathbf{v}_i = 0 + \\mathbf{\\Omega} \\times \\mathbf{r}$."
                },
                {
                  "prompt": "Assume $\\mathbf{\\Omega}$ points up ($\\hat{k}$) and $\\mathbf{r}$ points outward ($\\hat{\\rho}$). What is the direction of $\\hat{k} \\times \\hat{\\rho}$?",
                  "stepText": "The tangential direction, $\\hat{\\phi}$.",
                  "options": [
                    { "id": "A", "text": "Tangential $\\hat{\\phi}$", "isCorrect": true, "explanation": "Right hand rule: Up crossed with Out points Tangential." },
                    { "id": "B", "text": "Inward $-\\hat{\\rho}$", "isCorrect": false, "explanation": "That would be $\\hat{\\phi} \\times \\hat{k}$." }
                  ]
                },
                {
                  "stepText": "So the inertial velocity is $\\mathbf{v}_i = \\Omega R \\hat{\\phi}$."
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Angular Vector",
              "content": "Why is angular velocity $\\mathbf{\\Omega}$ treated as a vector pointing along the axis of rotation?",
              "options": [
                { "id": "1", "text": "Because it simplifies the cross product mathematics to naturally generate tangential vectors.", "isCorrect": true, "explanation": "The Right-Hand Rule and cross product geometry perfectly map the axis vector to the correct rotational velocities." },
                { "id": "2", "text": "Because the platform is physically moving up.", "isCorrect": false, "explanation": "The platform moves in the x-y plane; the vector is mathematically constructed in z." }
              ]
            },
            {
              "id": "s4",
              "type": "numerical",
              "title": "Calculate Velocity",
              "content": "If $\\Omega = 2$ rad/s and $R = 3$ m, what is the magnitude of the inertial velocity $v_i$ in m/s?",
              "numericAnswer": 6,
              "numericTolerance": 0.1
            }
          ]
        },
        {
          "id": "lesson-3-3-3-2",
          "title": "Exercise 15.1: Merry-Go-Round Acceleration",
          "description": "Parts (c), (d), and (e): Accelerations via operator.",
          "icon": "ArrowRight",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Exercise 15.1 (c, d, e)",
              "content": "(c) What is the apparent acceleration of the child in the rotating frame?\n(d) Determine acceleration in inertial frame using elementary centripetal formula.\n(e) Determine it using the operator Eq (15.3)."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "Let's compare the elementary and operator methods.",
              "interactiveSteps": [
                {
                  "prompt": "(c) Since the child sits perfectly still on the horse, what is their acceleration in the rotating frame $\\mathbf{a}_{rot}$?",
                  "stepText": "$\\mathbf{a}_{rot} = 0$.",
                  "options": [
                    { "id": "A", "text": "$0$", "isCorrect": true, "explanation": "No movement in that frame means no acceleration." },
                    { "id": "B", "text": "$v^2/R$", "isCorrect": false, "explanation": "That is seen by the inertial observer." }
                  ]
                },
                {
                  "stepText": "(d) Elementary physics says a body in a circle experiences centripetal acceleration $a_c = v^2/R$ pointing inward. Since $v = \\Omega R$, $a_c = (\\Omega R)^2/R = \\Omega^2 R$ pointing inward ($-\\hat{\\rho}$)."
                },
                {
                  "stepText": "(e) Using the operator on $\\mathbf{v}_i$: $\\mathbf{a}_i = \\left[\\frac{d\\mathbf{v}_i}{dt}\\right]_{rot} + \\mathbf{\\Omega} \\times \\mathbf{v}_i$."
                },
                {
                  "prompt": "We know $\\mathbf{v}_i = \\Omega R \\hat{\\phi}$. Since $\\Omega$, $R$, and $\\hat{\\phi}$ are constant in the rotating frame, what is $\\left[\\frac{d\\mathbf{v}_i}{dt}\\right]_{rot}$?",
                  "stepText": "$0$. The rotating observer sees the inertial velocity vector rotating with them!",
                  "options": [
                    { "id": "A", "text": "$0$", "isCorrect": true, "explanation": "In the rotating frame, the vector $\\Omega R \\hat{\\phi}$ looks completely static." },
                    { "id": "B", "text": "$-\\Omega^2 R \\hat{\\rho}$", "isCorrect": false, "explanation": "That's the final answer from the cross product term." }
                  ]
                },
                {
                  "stepText": "So $\\mathbf{a}_i = \\mathbf{\\Omega} \\times (\\Omega R \\hat{\\phi}) = (\\Omega \\hat{k}) \\times (\\Omega R \\hat{\\phi}) = \\Omega^2 R (\\hat{k} \\times \\hat{\\phi}) = -\\Omega^2 R \\hat{\\rho}$. It matches perfectly!"
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Operator Power",
              "content": "Why do we use the complex operator equation instead of the elementary centripetal formula?",
              "options": [
                { "id": "1", "text": "It handles complex 3D motions (like bugs crawling outward or projectiles) where elementary formulas fail.", "isCorrect": true, "explanation": "The elementary formula only works for simple static circular motion." },
                { "id": "2", "text": "It gives a different, more accurate answer.", "isCorrect": false, "explanation": "They give the exact same answer for simple cases." }
              ]
            },
            {
              "id": "s4",
              "type": "fill_in_blank",
              "title": "Centripetal Vector",
              "content": "The cross product of the z-axis unit vector $\\hat{k}$ with the tangential unit vector $\\hat{\\phi}$ yields the negative radial vector ___.",
              "blankAnswer": "-\\hat{\\rho}"
            }
          ]
        },
        {
          "id": "lesson-3-3-3-3",
          "title": "Exercise 15.6: Coriolis Cross Product",
          "description": "Verifying the full Coriolis acceleration formula.",
          "icon": "TerminalSquare",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Exercise 15.6",
              "content": "Carry out the operation $\\mathbf{\\Omega} \\times \\mathbf{v}$ to verify the Coriolis acceleration formula (Equation 15.7):\n\n$\\mathbf{\\Omega} = \\Omega\\cos\\lambda \\mathbf{\\hat{j}} + \\Omega\\sin\\lambda \\mathbf{\\hat{k}}$\n$\\mathbf{v} = v_x \\mathbf{\\hat{i}} + v_y \\mathbf{\\hat{j}} + v_z \\mathbf{\\hat{k}}$"
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "We evaluate the determinant of the cross product matrix.",
              "interactiveSteps": [
                {
                  "stepText": "Set up the matrix:\n| $\\hat{i}$ & $\\hat{j}$ & $\\hat{k}$ |\n| 0 & $\\Omega\\cos\\lambda$ & $\\Omega\\sin\\lambda$ |\n| $v_x$ & $v_y$ & $v_z$ |"
                },
                {
                  "prompt": "Calculate the $\\mathbf{\\hat{i}}$ component: $(\\Omega\\cos\\lambda)(v_z) - (\\Omega\\sin\\lambda)(v_y)$. What is the $\\mathbf{\\hat{i}}$ term in $\\mathbf{a}_c = -2(\\mathbf{\\Omega} \\times \\mathbf{v})$?",
                  "stepText": "Multiply by $-2$: $-2(v_z\\Omega\\cos\\lambda - v_y\\Omega\\sin\\lambda) = 2v_y\\Omega\\sin\\lambda - 2v_z\\Omega\\cos\\lambda$. Wait, looking at the axis definition: $y$ is North ($\\sin\\lambda$), $z$ is Up ($\\cos\\lambda$). Let's use the syllabus definition!",
                  "options": [
                    { "id": "A", "text": "Use $\\Omega = \\Omega\\sin\\lambda \\hat{j} + \\Omega\\cos\\lambda \\hat{k}$", "isCorrect": true, "explanation": "In Fig 15.5, colatitude $\\lambda$ means the angle from the Z-axis is $\\lambda$. So z-component is $\\cos\\lambda$, y-component is $\\sin\\lambda$." }
                  ]
                },
                {
                  "stepText": "Let's recalculate with the correct $\\mathbf{\\Omega} = \\Omega\\sin\\lambda \\mathbf{\\hat{j}} + \\Omega\\cos\\lambda \\mathbf{\\hat{k}}$.\n$\\hat{i}$ term: $(\\Omega\\sin\\lambda)v_z - (\\Omega\\cos\\lambda)v_y$."
                },
                {
                  "stepText": "Multiply by $-2$: $2v_y\\Omega\\cos\\lambda - 2v_z\\Omega\\sin\\lambda$. This matches $a_x$!"
                },
                {
                  "stepText": "$\\hat{j}$ term: $-(0 \\cdot v_z - (\\Omega\\cos\\lambda)v_x) = v_x\\Omega\\cos\\lambda$. Multiply by $-2$: $a_y = -2v_x\\Omega\\cos\\lambda$. Matches!"
                },
                {
                  "stepText": "$\\hat{k}$ term: $0 \\cdot v_y - (\\Omega\\sin\\lambda)v_x = -v_x\\Omega\\sin\\lambda$. Multiply by $-2$: $a_z = 2v_x\\Omega\\sin\\lambda$. Matches perfectly!"
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Colatitude Check",
              "content": "If $\\lambda$ is the colatitude, what is the value of $\\lambda$ at the equator?",
              "options": [
                { "id": "1", "text": "0 degrees", "isCorrect": false, "explanation": "Colatitude is measured from the North Pole." },
                { "id": "2", "text": "90 degrees", "isCorrect": true, "explanation": "The North Pole is 0, the equator is 90 degrees." },
                { "id": "3", "text": "180 degrees", "isCorrect": false, "explanation": "That is the South Pole." }
              ]
            },
            {
              "id": "s4",
              "type": "fill_in_blank",
              "title": "Matrix Method",
              "content": "To calculate a vector cross product by hand, physicists usually take the ___ of a 3x3 matrix.",
              "blankAnswer": "determinant"
            }
          ]
        },
        {
          "id": "lesson-3-3-3-4",
          "title": "Worked Example 15.3: Projectile Setup",
          "description": "Parts (a) and (b): Unperturbed velocity and acceleration components.",
          "icon": "Target",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Worked Example 15.3 (a & b)",
              "content": "A cannon at colatitude $\\lambda$ fires a shell with velocity $v_0$, aimed at angle $\\phi$ East of North, with elevation angle $\\theta$.\n\n(a) Write the initial velocity components ($v_{0x}, v_{0y}, v_{0z}$).\n(b) Write expressions for the Coriolis accelerations $a_x, a_y, a_z$ in terms of these unperturbed velocities."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "Let's decompose the 3D velocity vector.",
              "interactiveSteps": [
                {
                  "stepText": "The elevation angle $\\theta$ is from the horizontal plane. So the vertical velocity is $v_{0z} = v_0 \\sin\\theta$."
                },
                {
                  "stepText": "The horizontal projection of the velocity is $v_{horiz} = v_0 \\cos\\theta$."
                },
                {
                  "prompt": "This horizontal vector is aimed $\\phi$ East of North. Since North is the y-axis, what is $v_{0y}$?",
                  "stepText": "$v_{0y} = v_{horiz} \\cos\\phi = v_0 \\cos\\theta \\cos\\phi$.",
                  "options": [
                    { "id": "A", "text": "$v_0 \\cos\\theta \\cos\\phi$", "isCorrect": true, "explanation": "Adjacent to the angle $\\phi$ measured from North (y-axis)." },
                    { "id": "B", "text": "$v_0 \\cos\\theta \\sin\\phi$", "isCorrect": false, "explanation": "This is the x-component (East)." }
                  ]
                },
                {
                  "stepText": "Therefore, $v_{0x} = v_0 \\cos\\theta \\sin\\phi$."
                },
                {
                  "stepText": "For (b), substitute the unperturbed time-dependent velocities ($v_x = v_{0x}$, $v_y = v_{0y}$, $v_z = v_{0z} - gt$) into the acceleration formulas we just proved."
                },
                {
                  "stepText": "$a_x = 2v_{0y}\\Omega\\cos\\lambda - 2(v_{0z} - gt)\\Omega\\sin\\lambda$\n$a_y = -2v_{0x}\\Omega\\cos\\lambda$\n$a_z = 2v_{0x}\\Omega\\sin\\lambda - g$"
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Elevation Angle",
              "content": "If the cannon is fired perfectly horizontally due North, what are $\\theta$ and $\\phi$?",
              "options": [
                { "id": "1", "text": "$\\theta = 90^\\circ, \\phi = 0^\\circ$", "isCorrect": false, "explanation": "That would be straight up." },
                { "id": "2", "text": "$\\theta = 0^\\circ, \\phi = 0^\\circ$", "isCorrect": true, "explanation": "Horizontal means zero elevation. Due North means zero angle from the y-axis." }
              ]
            },
            {
              "id": "s4",
              "type": "numerical",
              "title": "Calculate Component",
              "content": "If $v_0 = 100$ m/s, $\\theta = 30^\\circ$, and $\\phi = 90^\\circ$ (due East), calculate the initial North velocity $v_{0y}$.",
              "numericAnswer": 0,
              "numericTolerance": 0.01
            }
          ]
        },
        {
          "id": "lesson-3-3-3-5",
          "title": "Exercise 15.4: Directions of Coriolis",
          "description": "Applying the Right Hand Rule to various scenarios.",
          "icon": "Wind",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Exercise 15.4",
              "content": "Determine the direction of the Coriolis force on:\n(a) A falling stone.\n(b) A projectile fired due North in the Northern Hemisphere.\n(c) A projectile fired due East in the Northern Hemisphere.\n(d) A projectile fired due East in the Southern Hemisphere."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "We use $\\mathbf{f}_c = -2m\\mathbf{\\Omega} \\times \\mathbf{v}$.",
              "interactiveSteps": [
                {
                  "prompt": "(a) Falling stone. $\\mathbf{v}$ is Down ($-\\hat{k}$). $\\mathbf{\\Omega}$ points North and Up. $\\mathbf{\\Omega} \\times \\mathbf{v}$ is (North $\\times$ Down) + (Up $\\times$ Down). What is North $\\times$ Down?",
                  "stepText": "North $\\times$ Down = East. Multiply by the leading negative sign: $-2m($East$)$ = West? Wait, let's recheck the cross product carefully.",
                  "options": [
                    { "id": "A", "text": "Let's recheck carefully with standard axes.", "isCorrect": true, "explanation": "x=East, y=North, z=Up. $\\Omega = \\Omega_y \\hat{j} + \\Omega_z \\hat{k}$. $v = -v_z \\hat{k}$. $\\Omega \\times v = (\\Omega_y \\hat{j}) \\times (-v_z \\hat{k}) = -\\Omega_y v_z (\\hat{j} \\times \\hat{k}) = -\\Omega_y v_z \\hat{i}$ (West). Multiply by -2m: Force is EAST." }
                  ]
                },
                {
                  "stepText": "(b) Fired North. $\\mathbf{v}$ is North ($\\hat{j}$). $\\mathbf{\\Omega} \\times \\hat{j} = (\\Omega_z \\hat{k}) \\times \\hat{j} = -\\Omega_z \\hat{i}$ (West). Multiply by $-2m$: Force is EAST."
                },
                {
                  "stepText": "(c) Fired East. $\\mathbf{v}$ is East ($\\hat{i}$). $\\mathbf{\\Omega} \\times \\hat{i} = (\\Omega_y \\hat{j} + \\Omega_z \\hat{k}) \\times \\hat{i} = -\\Omega_y \\hat{k} + \\Omega_z \\hat{j}$ (South and Up). Multiply by $-2m$: Force is SOUTH and DOWN. Deflection is South."
                },
                {
                  "stepText": "(d) Fired East in South Hemisphere. $\\mathbf{\\Omega}$ now points North and DOWN ($\\Omega_z$ is negative). The cross product $\\Omega_z \\hat{k} \\times \\hat{i}$ yields South, but $\\Omega_z$ is negative, so it's North. Multiply by $-2m$: Force is NORTH."
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "General Rule of Thumb",
              "content": "Based on these derivations, what is the general rule for horizontal Coriolis deflection?",
              "options": [
                { "id": "1", "text": "Always to the East.", "isCorrect": false, "explanation": "Firing East deflects South." },
                { "id": "2", "text": "To the right in the Northern Hemisphere, to the left in the Southern Hemisphere.", "isCorrect": true, "explanation": "This simple rule holds true for all horizontal surface motions." }
              ]
            },
            {
              "id": "s4",
              "type": "fill_in_blank",
              "title": "Falling vs Moving",
              "content": "A dropped stone deflects East. A stone thrown straight up will deflect ___ as it rises.",
              "blankAnswer": "west"
            }
          ]
        }
      ]
    },
    {
      "id": "unit-3-3-4",
      "title": "Second-Order Coriolis Effects",
      "description": "Integrating perturbed accelerations for exact flight paths.",
      "color": "duo-blue",
      "lessons": [
        {
          "id": "lesson-3-3-4-1",
          "title": "Worked Example 15.3 (c): Integrating Velocities",
          "description": "Finding first-order velocity components.",
          "icon": "Activity",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Worked Example 15.3 (c)",
              "content": "Using the acceleration components from the previous lesson, obtain first-order expressions for the velocity components $v_x, v_y, v_z$ as functions of time.\n\n$a_x = 2v_{0y}\\Omega\\cos\\lambda - 2(v_{0z} - gt)\\Omega\\sin\\lambda$\n$a_y = -2v_{0x}\\Omega\\cos\\lambda$\n$a_z = 2v_{0x}\\Omega\\sin\\lambda - g$"
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "We integrate each acceleration with respect to time $t$.",
              "interactiveSteps": [
                {
                  "stepText": "For $v_y$: Integrate $a_y$. $\\int (-2v_{0x}\\Omega\\cos\\lambda) dt = -2v_{0x}\\Omega\\cos\\lambda \\cdot t$."
                },
                {
                  "prompt": "Don't forget the constant of integration! What must we add to this?",
                  "stepText": "The initial velocity $v_{0y}$. So $v_y = v_{0y} - 2v_{0x}\\Omega\\cos\\lambda \\cdot t$.",
                  "options": [
                    { "id": "A", "text": "$v_{0y}$", "isCorrect": true, "explanation": "At $t=0$, $v_y$ must equal $v_{0y}$." },
                    { "id": "B", "text": "$g$", "isCorrect": false, "explanation": "Gravity is in the z-direction." }
                  ]
                },
                {
                  "stepText": "For $v_z$: Integrate $a_z$. $\\int (2v_{0x}\\Omega\\sin\\lambda - g) dt = 2v_{0x}\\Omega\\sin\\lambda \\cdot t - gt$. Add $v_{0z}$ to get $v_z = v_{0z} - gt + 2v_{0x}\\Omega\\sin\\lambda \\cdot t$."
                },
                {
                  "stepText": "For $v_x$: Integrate $a_x = 2v_{0y}\\Omega\\cos\\lambda - 2v_{0z}\\Omega\\sin\\lambda + 2gt\\Omega\\sin\\lambda$."
                },
                {
                  "prompt": "What is the integral of the $2gt\\Omega\\sin\\lambda$ term?",
                  "stepText": "$gt^2\\Omega\\sin\\lambda$.",
                  "options": [
                    { "id": "A", "text": "$gt^2\\Omega\\sin\\lambda$", "isCorrect": true, "explanation": "The integral of $2t$ is $t^2$." },
                    { "id": "B", "text": "$2gt^2\\Omega\\sin\\lambda$", "isCorrect": false, "explanation": "Divide by 2." }
                  ]
                },
                {
                  "stepText": "Adding $v_{0x}$, the full expression is $v_x = v_{0x} + (2v_{0y}\\Omega\\cos\\lambda - 2v_{0z}\\Omega\\sin\\lambda)t + gt^2\\Omega\\sin\\lambda$."
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Method of Successive Approximations",
              "content": "Why is this called a 'first-order' approximation?",
              "options": [
                { "id": "1", "text": "Because we only integrated once.", "isCorrect": false, "explanation": "Velocity is the first integral, but the 'order' refers to perturbation theory." },
                { "id": "2", "text": "Because we plugged the zeroth-order unperturbed velocities into the Coriolis formula to find these.", "isCorrect": true, "explanation": "We assumed $v_y$ was constantly $v_{0y}$ to calculate $a_x$. To get second-order, we would plug these newly found first-order velocities back into the acceleration formula!" }
              ]
            },
            {
              "id": "s4",
              "type": "fill_in_blank",
              "title": "Time dependence",
              "content": "Because gravity makes the vertical velocity change over time, the Coriolis acceleration in the x-direction contains a term proportional to $t$, making the velocity $v_x$ contain a term proportional to $t$ squared ($t^-$).",
              "blankAnswer": "2"
            }
          ]
        },
        {
          "id": "lesson-3-3-4-2",
          "title": "Worked Example 15.2: Southward Deflection (Part 1)",
          "description": "Setting up the second-order perturbation for a dropped object.",
          "icon": "ArrowDownToLine",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Worked Example 15.2",
              "content": "To first order, a falling particle is deflected East, but not South. \nHowever, there is a southward deflection in the second-order approximation.\n\nSet up the acceleration $a_y$ to find this second-order deflection."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "We need to use the first-order velocity to find the second-order acceleration.",
              "interactiveSteps": [
                {
                  "stepText": "For a dropped object, zeroth-order velocity is $v_z = -gt$, $v_x = 0$, $v_y = 0$."
                },
                {
                  "stepText": "This led to a first-order velocity $v_x = gt^2 \\Omega\\sin\\lambda$ (Eastward drift)."
                },
                {
                  "prompt": "The Coriolis acceleration North/South is $a_y = -2v_x\\Omega\\cos\\lambda$. Substitute the first-order $v_x$ into this equation.",
                  "stepText": "$a_y = -2(gt^2\\Omega\\sin\\lambda)\\Omega\\cos\\lambda = -2g\\Omega^2 \\sin\\lambda \\cos\\lambda \\cdot t^2$.",
                  "options": [
                    { "id": "A", "text": "$a_y = -2g\\Omega^2 \\sin\\lambda \\cos\\lambda \\cdot t^2$", "isCorrect": true, "explanation": "Correct substitution. Note the $\\Omega^2$, making this a very small second-order effect." },
                    { "id": "B", "text": "$a_y = -2g\\Omega \\cos\\lambda \\cdot t$", "isCorrect": false, "explanation": "You didn't substitute the full $v_x$ expression." }
                  ]
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Direction of Deflection",
              "content": "The expression for $a_y$ has a negative sign. In our coordinate system, $+y$ is North. Therefore, what direction does the object deflect?",
              "options": [
                { "id": "1", "text": "North", "isCorrect": false, "explanation": "A negative acceleration in the North direction means it accelerates South." },
                { "id": "2", "text": "South", "isCorrect": true, "explanation": "It falls East, and then the Eastward velocity triggers a Coriolis force pushing it South." }
              ]
            },
            {
              "id": "s4",
              "type": "fill_in_blank",
              "title": "Perturbation Size",
              "content": "The second-order effect is much smaller than the first-order effect because it is proportional to $\\Omega$ ___, where $\\Omega$ is a very small number ($10^{-5}$).",
              "blankAnswer": "squared"
            }
          ]
        },
        {
          "id": "lesson-3-3-4-3",
          "title": "Worked Example 15.2: Southward Deflection (Part 2)",
          "description": "Integrating to find the final displacement y.",
          "icon": "PenTool",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Integrating the Deflection",
              "content": "From the previous lesson, $a_y = -2g\\Omega^2 \\sin\\lambda \\cos\\lambda \\cdot t^2$.\n\nIntegrate this twice to find the total Southward displacement $y(t)$."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "Basic polynomial integration.",
              "interactiveSteps": [
                {
                  "prompt": "Integrate $a_y$ with respect to time to find velocity $v_y$. (Initial $v_y = 0$).",
                  "stepText": "$v_y = -\\frac{2}{3}g\\Omega^2 \\sin\\lambda \\cos\\lambda \\cdot t^3$.",
                  "options": [
                    { "id": "A", "text": "$v_y = -\\frac{2}{3}g\\Omega^2 \\sin\\lambda \\cos\\lambda \\cdot t^3$", "isCorrect": true, "explanation": "Integral of $t^2$ is $t^3/3$." },
                    { "id": "B", "text": "$v_y = -2g\\Omega^2 \\sin\\lambda \\cos\\lambda \\cdot t^3$", "isCorrect": false, "explanation": "Don't forget to divide by the new exponent." }
                  ]
                },
                {
                  "prompt": "Integrate $v_y$ with respect to time to find displacement $y(t)$. (Initial $y = 0$).",
                  "stepText": "$y(t) = -\\frac{2}{12}g\\Omega^2 \\sin\\lambda \\cos\\lambda \\cdot t^4 = -\\frac{1}{6}g\\Omega^2 \\sin\\lambda \\cos\\lambda \\cdot t^4$.",
                  "options": [
                    { "id": "A", "text": "$y = -\\frac{1}{6}g\\Omega^2 \\sin\\lambda \\cos\\lambda \\cdot t^4$", "isCorrect": true, "explanation": "Integral of $t^3$ is $t^4/4$. $(2/3) / 4 = 2/12 = 1/6$." },
                    { "id": "B", "text": "$y = -\\frac{2}{3}g\\Omega^2 \\sin\\lambda \\cos\\lambda \\cdot t^4$", "isCorrect": false, "explanation": "Divide by 4." }
                  ]
                },
                {
                  "stepText": "To find the final deflection on the ground, we substitute the time of flight $t = \\sqrt{2h/g}$. So $t^4 = 4h^2/g^2$."
                },
                {
                  "stepText": "Substituting gives $y_{final} = -\\frac{1}{6}g\\Omega^2 \\sin\\lambda \\cos\\lambda (\\frac{4h^2}{g^2}) = -\\frac{2h^2}{3g}\\Omega^2 \\sin\\lambda \\cos\\lambda$."
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Dependence on Height",
              "content": "The Eastward deflection $x$ is proportional to $h^{3/2}$ (since it depends on $t^3$). The Southward deflection $y$ is proportional to:",
              "options": [
                { "id": "1", "text": "$h$", "isCorrect": false, "explanation": "Look at the substitution of $t^4$." },
                { "id": "2", "text": "$h^2$", "isCorrect": true, "explanation": "Since $t \\propto \sqrt{h}$, $t^4 \propto h^2$." },
                { "id": "3", "text": "$h^3$", "isCorrect": false, "explanation": "" }
              ]
            },
            {
              "id": "s4",
              "type": "numerical",
              "title": "Calculate the Ratio",
              "content": "If you calculate the ratio $y/x$, the book derives $y/x = -\\frac{1}{2}(\\Omega \\cos\\lambda) t$.\n\nFor a stone dropped from 50m ($t = 3.19$s) at latitude $60^\\circ$N ($\\lambda = 30^\\circ$, $\\Omega = 7.27\\times 10^{-5}$ rad/s), what is the magnitude of the ratio $|y/x|$?",
              "numericAnswer": 0.0001,
              "numericTolerance": 0.00005
            }
          ]
        },
        {
          "id": "lesson-3-3-4-4",
          "title": "Worked Example 15.2: Comparing Deflections",
          "description": "Analyzing why the Southward deflection is so small.",
          "icon": "ActivitySquare",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Worked Example 15.2 (Conclusion)",
              "content": "Estimate the second-order deviation towards the South and compare it with the first-order deviation towards the East."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "We look at the ratio of the two equations.",
              "interactiveSteps": [
                {
                  "stepText": "We have $y = -\\frac{1}{6}g\\Omega^2 \\sin\\lambda \\cos\\lambda \\cdot t^4$ and $x = \\frac{1}{3}g\\Omega \\sin\\lambda \\cdot t^3$."
                },
                {
                  "prompt": "Divide $y$ by $x$. What cancels out?",
                  "stepText": "$g, \\sin\\lambda$, one factor of $\\Omega$, and $t^3$ cancel out.",
                  "options": [
                    { "id": "A", "text": "$g, \\sin\\lambda, \\Omega, t^3$", "isCorrect": true, "explanation": "Correct algebraic cancellation." },
                    { "id": "B", "text": "Everything except $t$", "isCorrect": false, "explanation": "$\\cos\\lambda$ and one $\\Omega$ remain." }
                  ]
                },
                {
                  "stepText": "The remaining ratio is $\\frac{y}{x} = \\frac{-1/6}{1/3} \\Omega \\cos\\lambda \\cdot t = -\\frac{1}{2}(\\Omega \\cos\\lambda)t$."
                },
                {
                  "stepText": "Since $\\Omega \\approx 10^{-5}$ rad/s, and $t$ is typically a few seconds, the ratio is on the order of $10^{-5}$. The Southward deflection is microscopic compared to the already small Eastward deflection!"
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Time of Flight Effects",
              "content": "We assumed the time of flight was the unperturbed $t = \\sqrt{2h/g}$. But there is a tiny vertical Coriolis acceleration $a_z = 2v_x\\Omega\\sin\\lambda$. Since $v_x$ is East (positive), $a_z$ is positive (Upward). How does this affect the true time of flight?",
              "options": [
                { "id": "1", "text": "It slightly decreases the time of flight.", "isCorrect": false, "explanation": "An upward acceleration resists gravity." },
                { "id": "2", "text": "It slightly increases the time of flight.", "isCorrect": true, "explanation": "The upward Coriolis force opposes gravity, making the object fall slightly slower than $g$ alone dictates." }
              ]
            }
          ]
        },
        {
          "id": "lesson-3-3-4-5",
          "title": "Projectile Range Effects",
          "description": "How firing East affects the total range.",
          "icon": "Target",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Conceptual Analysis",
              "content": "Based on the acceleration equations, explain how firing a projectile due East alters its total range compared to firing due West."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "We analyze the vertical Coriolis acceleration.",
              "interactiveSteps": [
                {
                  "stepText": "The vertical Coriolis acceleration is $a_{cz} = 2v_x\\Omega\\sin\\lambda$."
                },
                {
                  "prompt": "If you fire East, $v_x$ is positive. What is the direction of the Coriolis acceleration $a_{cz}$?",
                  "stepText": "It is positive, meaning it points Up.",
                  "options": [
                    { "id": "A", "text": "Up", "isCorrect": true, "explanation": "A positive z-component opposes gravity (which is $-g$)." },
                    { "id": "B", "text": "Down", "isCorrect": false, "explanation": "Positive z is up." }
                  ]
                },
                {
                  "stepText": "An upward acceleration means the effective gravity is slightly weaker. The projectile takes longer to fall."
                },
                {
                  "prompt": "If it stays in the air longer while moving horizontally at $v_x$, what happens to its range?",
                  "stepText": "The range increases.",
                  "options": [
                    { "id": "A", "text": "Range increases", "isCorrect": true, "explanation": "More time in the air = more distance traveled horizontally." },
                    { "id": "B", "text": "Range decreases", "isCorrect": false, "explanation": "Less time in the air would decrease range." }
                  ]
                },
                {
                  "stepText": "Conversely, firing West ($v_x$ negative) creates a Downward Coriolis acceleration, shortening the flight time and decreasing the range."
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Conservation Argument",
              "content": "How does the conservation of angular momentum explain firing East increasing the range?",
              "options": [
                { "id": "1", "text": "Firing East increases the absolute angular velocity of the object around the Earth's axis. This increases the centrifugal force outward (upward), resisting gravity.", "isCorrect": true, "explanation": "This is an equivalent and perfectly valid physical interpretation! Moving East means you are rotating faster than the Earth, increasing your 'centrifugal' lift." },
                { "id": "2", "text": "Firing East decreases the absolute angular velocity.", "isCorrect": false, "explanation": "The Earth rotates East. Moving East adds to that velocity." }
              ]
            },
            {
              "id": "s4",
              "type": "fill_in_blank",
              "title": "Trajectory",
              "content": "A projectile fired East has an increased time of flight and an increased ___.",
              "blankAnswer": "range"
            }
          ]
        }
      ]
    },
    {
      "id": "unit-3-3-5",
      "title": "Foucault Pendulum In-Depth",
      "description": "Solving the complex roots and missing mathematical steps.",
      "color": "duo-blue",
      "lessons": [
        {
          "id": "lesson-3-3-5-1",
          "title": "Worked Example 15.4 (Part 1)",
          "description": "Applying initial conditions to the complex solution.",
          "icon": "Activity",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Worked Example 15.4",
              "content": "At time $t=0$ the Foucault pendulum is released from rest at position $x=A, y=0$. \n\nStarting with the complex solution $\\zeta = \\frac{1}{2} C e^{-i\\theta} e^{-i(\\omega+K)t} + \\frac{1}{2} C e^{i\\theta} e^{i(\\omega-K)t}$, obtain expressions for $x(t)$ and $y(t)$."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "We factor and apply Euler's formula.",
              "interactiveSteps": [
                {
                  "stepText": "Factor out $\\frac{1}{2} C e^{-iKt}$ from both terms:\n$\\zeta = \\frac{1}{2} C e^{-iKt} [e^{-i(\\omega t + \\theta)} + e^{i(\\omega t + \\theta)}]$."
                },
                {
                  "prompt": "Using Euler's identity, what does $e^{-iX} + e^{iX}$ equal?",
                  "stepText": "It equals $2\\cos X$.",
                  "options": [
                    { "id": "A", "text": "$2\\cos X$", "isCorrect": true, "explanation": "The imaginary sine terms cancel: $(\\cos X - i\\sin X) + (\\cos X + i\\sin X) = 2\\cos X$." },
                    { "id": "B", "text": "$2i\\sin X$", "isCorrect": false, "explanation": "That is the result of subtraction: $e^{iX} - e^{-iX}$." }
                  ]
                },
                {
                  "stepText": "Substituting $X = \\omega t + \\theta$, the bracket becomes $2\\cos(\\omega t + \\theta)$. The $2$ cancels the $1/2$."
                },
                {
                  "stepText": "Now we have $\\zeta = C e^{-iKt} \\cos(\\omega t + \\theta)$. Expand $e^{-iKt}$ to isolate real and imaginary parts."
                },
                {
                  "prompt": "Since $x = Re(\\zeta)$ and $y = Im(\\zeta)$, what are $x(t)$ and $y(t)$?",
                  "stepText": "$x(t) = C\\cos(Kt)\\cos(\\omega t + \\theta)$ and $y(t) = -C\\sin(Kt)\\cos(\\omega t + \\theta)$.",
                  "options": [
                    { "id": "A", "text": "$x(t) = C\\cos(Kt)\\cos(\\omega t + \\theta)$ \n $y(t) = -C\\sin(Kt)\\cos(\\omega t + \\theta)$", "isCorrect": true, "explanation": "Correct extraction of Real and Imaginary parts." },
                    { "id": "B", "text": "$x(t) = C\\sin(Kt)\\cos(\\omega t + \\theta)$ \n $y(t) = C\\cos(Kt)\\cos(\\omega t + \\theta)$", "isCorrect": false, "explanation": "Cosine is the real part of $e^{-iKt}$." }
                  ]
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Finding the Constants",
              "content": "Using the initial conditions $x(0) = A$ and $y(0) = 0$ alongside zero initial velocity, what are the values of $C$ and $\\theta$?",
              "options": [
                { "id": "1", "text": "$C = A, \\theta = 0$", "isCorrect": true, "explanation": "At $t=0$, $x = C\\cos(0)\\cos(0) = C = A$. Releasing from rest requires the sine derivative term to be zero, enforcing $\\theta = 0$." },
                { "id": "2", "text": "$C = 0, \\theta = A$", "isCorrect": false, "explanation": "C is the amplitude." }
              ]
            },
            {
              "id": "s4",
              "type": "fill_in_blank",
              "title": "Beats",
              "content": "The mathematical form $\\cos(Kt)\\cos(\\omega t)$ describes a rapidly oscillating wave $\\cos(\\omega t)$ enclosed by a slowly varying amplitude envelope $\\cos(Kt)$, a phenomenon similar to acoustic ___.",
              "blankAnswer": "beats"
            }
          ]
        },
        {
          "id": "lesson-3-3-5-2",
          "title": "Exercise 15.8: Foucault Initial Velocity",
          "description": "What happens if the pendulum is pushed through the origin?",
          "icon": "Repeat",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Exercise 15.8",
              "content": "A Foucault pendulum is observed to have a velocity $v_0$ in the $+x$-direction at time $t=0$ when it passes through the origin.\n\nObtain expressions for $x$ and $y$ as functions of $t$."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "We use the general extracted form: $x = C\\cos(Kt)\\cos(\\omega t + \\theta)$ and $y = -C\\sin(Kt)\\cos(\\omega t + \\theta)$. Wait, let's use the sine form for crossing the origin.",
              "interactiveSteps": [
                {
                  "stepText": "If it passes through the origin at $t=0$, then $x(0) = 0$ and $y(0) = 0$. This requires the fast oscillating term to be $\\sin(\\omega t)$ instead of $\\cos(\\omega t)$."
                },
                {
                  "stepText": "So $x(t) = C\\cos(Kt)\\sin(\\omega t)$ and $y(t) = -C\\sin(Kt)\\sin(\\omega t)$."
                },
                {
                  "prompt": "Take the derivative $\\dot{x}(t)$ using the product rule. What is the dominant term since $\\omega \\gg K$?",
                  "stepText": "The dominant term comes from differentiating $\\sin(\\omega t)$, giving $C\\omega\\cos(Kt)\\cos(\\omega t)$.",
                  "options": [
                    { "id": "A", "text": "$C\\omega\\cos(Kt)\\cos(\\omega t)$", "isCorrect": true, "explanation": "Since $\\omega$ is huge compared to $K$, differentiating the $\\sin(\\omega t)$ term creates the largest velocity component." },
                    { "id": "B", "text": "$-CK\\sin(Kt)\\sin(\\omega t)$", "isCorrect": false, "explanation": "This term exists, but is very small." }
                  ]
                },
                {
                  "stepText": "Evaluate exactly at $t=0$: $\\dot{x}(0) = C\\omega\\cos(0)\\cos(0) + 0 = C\\omega$."
                },
                {
                  "prompt": "Since $\\dot{x}(0) = v_0$, solve for $C$.",
                  "stepText": "$C = v_0 / \\omega$.",
                  "options": [
                    { "id": "A", "text": "$C = v_0 / \\omega$", "isCorrect": true, "explanation": "Correct." },
                    { "id": "B", "text": "$C = v_0 \\omega$", "isCorrect": false, "explanation": "Check algebra." }
                  ]
                },
                {
                  "stepText": "Final equations: $x = \\frac{v_0}{\\omega}\\cos(Kt)\\sin(\\omega t)$ and $y = -\\frac{v_0}{\\omega}\\sin(Kt)\\sin(\\omega t)$."
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Initial Y Velocity",
              "content": "Verify the initial y-velocity. What is $\\dot{y}(0)$ for our derived equation $y = -\\frac{v_0}{\\omega}\\sin(Kt)\\sin(\\omega t)$?",
              "options": [
                { "id": "1", "text": "$v_0$", "isCorrect": false, "explanation": "It only has x-velocity initially." },
                { "id": "2", "text": "$0$", "isCorrect": true, "explanation": "Differentiating gives a $\\sin(Kt)\\cos(\\omega t)$ term (zero at t=0) and a $\\cos(Kt)\\sin(\\omega t)$ term (also zero at t=0). Initial y-velocity is indeed 0!" }
              ]
            },
            {
              "id": "s4",
              "type": "fill_in_blank",
              "title": "Precession Rate",
              "content": "Regardless of whether it is dropped from an amplitude or pushed from the origin, the plane of the pendulum always precesses at a rate $K = \\Omega \\cos$ ___.",
              "blankAnswer": "\\lambda"
            }
          ]
        },
        {
          "id": "lesson-3-3-5-3",
          "title": "Worked Example 15.5: The Rotating Frame Trick",
          "description": "Solving Foucault by jumping into a frame that precesses WITH the pendulum.",
          "icon": "SplitSquareHorizontal",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Worked Example 15.5",
              "content": "Solve for the precession rate of a Foucault pendulum by considering the problem in a starred coordinate system $(x^*, y^*)$ rotating at exactly the precession rate $K = \\Omega\\cos\\lambda$ relative to the Earth."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "In this precessing frame, the pendulum simply swings back and forth in a straight line.",
              "interactiveSteps": [
                {
                  "stepText": "Let the pendulum swing entirely along the $x^*$ axis. The distance is $s$, so $x^* = s$ and $y^* = 0$."
                },
                {
                  "stepText": "The relationship between the Earth frame $(x,y)$ and the starred frame is a standard 2D rotation matrix: \n$x = x^* \\cos(Kt) - y^* \\sin(Kt)$\n$y = x^* \\sin(Kt) + y^* \\cos(Kt)$"
                },
                {
                  "prompt": "Substitute $x^* = s$ and $y^* = 0$. What are $x$ and $y$?",
                  "stepText": "$x = s\\cos(Kt)$ and $y = s\\sin(Kt)$. Wait, the book defines $y = -s\\sin(Kt)$ to represent clockwise precession.",
                  "options": [
                    { "id": "A", "text": "$x = s\\cos(Kt)$, $y = s\\sin(Kt)$", "isCorrect": false, "explanation": "This would be counter-clockwise." },
                    { "id": "B", "text": "$x = s\\cos(Kt)$, $y = -s\\sin(Kt)$", "isCorrect": true, "explanation": "The book defines the rotation to match the clockwise precession of the Foucault pendulum in the Northern Hemisphere." }
                  ]
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Why the starred frame?",
              "content": "What is the mathematical advantage of solving the problem in the $x^*, y^*$ frame?",
              "options": [
                { "id": "1", "text": "It completely removes the Coriolis force terms from the differential equations.", "isCorrect": true, "explanation": "By rotating the frame at exactly the Coriolis precession rate, the fictitious Coriolis force is perfectly canceled by the new fictitious centrifugal/Euler forces of the starred frame, leaving simple 1D harmonic motion." },
                { "id": "2", "text": "It removes gravity.", "isCorrect": false, "explanation": "Gravity still provides the restoring force for the pendulum." }
              ]
            }
          ]
        },
        {
          "id": "lesson-3-3-5-4",
          "title": "Exercise 15.9: Missing Steps",
          "description": "Connecting Eq 15.15 and 15.16.",
          "icon": "TerminalSquare",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Exercise 15.9",
              "content": "Fill in the missing steps between Equation 15.15:\n$\\ddot{x} + \\ddot{y} + 2K(\\dot{x} - \\dot{y}) + \\omega^2(x + y) = 0$\nand Equation 15.16:\n$\\ddot{s} + (K^2 + \\omega^2)s = 0$\n\nUsing $x = s\\cos(Kt)$ and $y = -s\\sin(Kt)$."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "This requires massive product rule differentiation. Let's do it strategically.",
              "interactiveSteps": [
                {
                  "stepText": "Actually, the book's Eq 15.15 is a typo in the sum. Let's insert $x$ and $y$ into the FIRST original equation: $\\ddot{x} - 2K\\dot{y} + \\omega^2 x = 0$."
                },
                {
                  "prompt": "Calculate $\\dot{x}$ for $x = s\\cos(Kt)$. Remember $s$ is a function of time $s(t)$!",
                  "stepText": "$\\dot{x} = \\dot{s}\\cos(Kt) - sK\\sin(Kt)$.",
                  "options": [
                    { "id": "A", "text": "$\\dot{s}\\cos(Kt) - sK\\sin(Kt)$", "isCorrect": true, "explanation": "Correct application of the product rule." },
                    { "id": "B", "text": "$-sK\\sin(Kt)$", "isCorrect": false, "explanation": "You forgot that the amplitude $s$ is oscillating in time." }
                  ]
                },
                {
                  "stepText": "Calculate $\\dot{y}$ for $y = -s\\sin(Kt)$: $\\dot{y} = -\\dot{s}\\sin(Kt) - sK\\cos(Kt)$."
                },
                {
                  "stepText": "Now calculate $\\ddot{x}$: $\\ddot{x} = \\ddot{s}\\cos(Kt) - 2\\dot{s}K\\sin(Kt) - sK^2\\cos(Kt)$."
                },
                {
                  "prompt": "Substitute $\\ddot{x}$, $\\dot{y}$, and $x$ into $\\ddot{x} - 2K\\dot{y} + \\omega^2 x = 0$ and group the $\\cos(Kt)$ terms. What is the coefficient of $\\cos(Kt)$?",
                  "stepText": "$(\\ddot{s} - sK^2) - 2K(-sK) + \\omega^2 s = \\ddot{s} + K^2 s + \\omega^2 s$.",
                  "options": [
                    { "id": "A", "text": "$\\ddot{s} + (K^2 + \\omega^2)s$", "isCorrect": true, "explanation": "The Coriolis term $-2K(-sK) = +2K^2 s$ perfectly combines with $-K^2 s$ from the second derivative to yield $+K^2 s$!" },
                    { "id": "B", "text": "$\\ddot{s} + \\omega^2 s$", "isCorrect": false, "explanation": "Check the $K$ terms again." }
                  ]
                },
                {
                  "stepText": "The $\\sin(Kt)$ terms perfectly cancel out ($-2\\dot{s}K - 2K(-\\dot{s}) = 0$). We are left exactly with $\\ddot{s} + (K^2 + \\omega^2)s = 0$."
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Simplifying the SHM Equation",
              "content": "We obtained $\\ddot{s} + (K^2 + \\omega^2)s = 0$. Why do we subsequently claim that $\\ddot{s} + \\omega^2 s = 0$ is an excellent approximation?",
              "options": [
                { "id": "1", "text": "Because $K = 0$ everywhere on Earth.", "isCorrect": false, "explanation": "It's only zero at the equator." },
                { "id": "2", "text": "Because $K \\ll \\omega$.", "isCorrect": true, "explanation": "Earth's rotation ($K$) is roughly $10^{-5}$ rad/s. A pendulum swing ($\\omega$) is roughly $1$ rad/s. Squaring them makes $K^2$ $10^{10}$ times smaller than $\\omega^2$, completely negligible." }
              ]
            }
          ]
        },
        {
          "id": "lesson-3-3-5-5",
          "title": "Exercise 15.10: Reconciling the Roots",
          "description": "Connecting the algebraic roots to the rotating frame.",
          "icon": "Layers",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Exercise 15.10",
              "content": "Show that Equation (15.14), which gave roots $p = -iK \\pm i\\sqrt{K^2 + \\omega^2}$, leads to the exact same result as obtained in Worked Example 15.5."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "Let's use the exact roots without approximating $K \\ll \\omega$ yet.",
              "interactiveSteps": [
                {
                  "stepText": "Let the exact frequency be $\\omega' = \\sqrt{K^2 + \\omega^2}$. The roots are $p = -iK \\pm i\\omega'$."
                },
                {
                  "prompt": "Substitute these roots into the complex general solution $\\zeta = C e^{p_1 t} + D e^{p_2 t}$. What do you get?",
                  "stepText": "$\\zeta = C e^{-iKt + i\\omega't} + D e^{-iKt - i\\omega't}$.",
                  "options": [
                    { "id": "A", "text": "$\\zeta = e^{-iKt} (C e^{i\\omega't} + D e^{-i\\omega't})$", "isCorrect": true, "explanation": "Factoring out the common precession term $e^{-iKt}$." },
                    { "id": "B", "text": "$\\zeta = e^{i\\omega't} (C e^{-iKt} + D e^{iKt})$", "isCorrect": false, "explanation": "The $-iK$ is common to both roots." }
                  ]
                },
                {
                  "stepText": "The term in parentheses $(C e^{i\\omega't} + D e^{-i\\omega't})$ is the exact solution to a simple harmonic oscillator with frequency $\\omega'$. Let's call this 1D motion $s(t)$."
                },
                {
                  "stepText": "So $\\zeta = s(t) e^{-iKt}$. This perfectly represents 1D SHM $s(t)$ occurring inside a frame rotating at rate $K$."
                },
                {
                  "stepText": "The equation for $s(t)$ has frequency $\\omega' = \\sqrt{K^2 + \\omega^2}$, which perfectly matches the equation $\\ddot{s} + (K^2 + \\omega^2)s = 0$ derived in Example 15.5! The two methods are completely identical."
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "The Meaning of the Approximation",
              "content": "When we finally drop the $K^2$ term, we are essentially saying:",
              "options": [
                { "id": "1", "text": "The Coriolis force does not affect the back-and-forth swing speed of the pendulum, only its plane of rotation.", "isCorrect": true, "explanation": "The $K^2$ term represents a tiny centrifugal-like correction to the swing frequency caused by the Coriolis force. Dropping it means the swing speed is purely dictated by gravity $g/l$." },
                { "id": "2", "text": "The pendulum doesn't actually precess.", "isCorrect": false, "explanation": "We keep the $e^{-iKt}$ term, which is the precession." }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "unit-3-3-6",
      "title": "Tidal Forces (Optional Application)",
      "description": "Inverse cube laws, Earth's tidal bulges, and Spaghettization.",
      "color": "duo-blue",
      "lessons": [
        {
          "id": "lesson-3-3-6-1",
          "title": "The Origin of Tides",
          "description": "Why gravity causes a stretching force.",
          "icon": "ArrowDownToLine",
          "slides": [
            {
              "id": "s1",
              "type": "theory",
              "title": "Inhomogeneity of Gravity",
              "content": "The Earth orbits the Sun (and Moon) in a state of free fall. The entire Earth accelerates toward the Sun at a rate dictated by the gravitational force at the **center** of the Earth.\n\nHowever, the side of the Earth facing the Sun is closer, so it feels a *stronger* gravitational pull than the center. The side facing away feels a *weaker* pull."
            },
            {
              "id": "s2",
              "type": "example",
              "title": "The Centrifugal Balance",
              "content": "In a frame revolving with the Earth around the Sun, there is a uniform fictitious centrifugal force $\\mathbf{F}_c$ acting on every particle, exactly balancing the Sun's gravity $\\mathbf{F}_s$ at the Earth's center.\n\n*   **At Center:** $\\mathbf{F}_c + \\mathbf{F}_s = 0$\n*   **Near Side:** Sun's gravity is stronger than $\\mathbf{F}_c$. Net force is TOWARDS the Sun.\n*   **Far Side:** Sun's gravity is weaker than $\\mathbf{F}_c$. Net force is AWAY from the Sun."
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Tidal Bulges",
              "content": "Based on this force imbalance, how many tidal water bulges are created on Earth by the Moon/Sun?",
              "options": [
                { "id": "1", "text": "One bulge, facing the Moon.", "isCorrect": false, "explanation": "What happens on the far side?" },
                { "id": "2", "text": "Two bulges, one facing the Moon and one on the exact opposite side.", "isCorrect": true, "explanation": "The near side is pulled away from the center, and the center is pulled away from the far side. Both result in a relative stretching outward." }
              ]
            },
            {
              "id": "s4",
              "type": "fill_in_blank",
              "title": "Tidal Definition",
              "content": "Tidal forces arise strictly from the ___ of the gravitational field across the diameter of a body.",
              "blankAnswer": "inhomogeneity"
            }
          ]
        },
        {
          "id": "lesson-3-3-6-2",
          "title": "Deriving the Tidal Force",
          "description": "Setting up the vector math.",
          "icon": "Vector",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Vector Setup",
              "content": "Let $\\mathbf{R}$ be the vector from the Sun to the Earth's center. Let $\\mathbf{r}$ be the vector from the Earth's center to a point on its surface. \nThe position of the surface point from the Sun is $\\mathbf{r}_s = \\mathbf{R} + \\mathbf{r}$.\n\nWrite the equation for the tidal force $\\mathbf{F}_{Tide} = \\mathbf{F}_c - \\mathbf{F}_s$."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "We subtract the center's balance from the surface point's forces.",
              "interactiveSteps": [
                {
                  "stepText": "The uniform centrifugal force is $\\mathbf{F}_c = G \\frac{Mm}{R^3}\\mathbf{R}$. (It exactly balances gravity at the center)."
                },
                {
                  "prompt": "The actual gravitational pull from the Sun at the surface point is $-G \\frac{Mm}{r_s^3}\\mathbf{r}_s$. What is the net Tidal Force?",
                  "stepText": "$\\mathbf{F}_{Tide} = -GMm \\left( \\frac{\\mathbf{r}_s}{r_s^3} - \\frac{\\mathbf{R}}{R^3} \\right)$.",
                  "options": [
                    { "id": "A", "text": "$\\mathbf{F}_{Tide} = -GMm \\left( \\frac{\\mathbf{r}_s}{r_s^3} - \\frac{\\mathbf{R}}{R^3} \\right)$", "isCorrect": true, "explanation": "Correct. It is the difference between the local gravity and the central gravity." },
                    { "id": "B", "text": "$\\mathbf{F}_{Tide} = -GMm \\left( \\frac{\\mathbf{r}_s}{r_s^2} - \\frac{\\mathbf{R}}{R^2} \\right)$", "isCorrect": false, "explanation": "Since we are using the vectors $\\mathbf{r}_s$ and $\\mathbf{R}$ in the numerator, the denominator must be cubed to maintain an inverse-square magnitude." }
                  ]
                },
                {
                  "stepText": "This equation is exact. However, since the Earth is much smaller than the distance to the Sun ($r \\ll R$), we can use a binomial expansion to simplify it immensely."
                }
              ]
            }
          ]
        },
        {
          "id": "lesson-3-3-6-3",
          "title": "The Binomial Expansion",
          "description": "Proving the inverse-cube law of tides.",
          "icon": "Activity",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Expanding the Distance",
              "content": "Expand the term $1/r_s^3$ using the assumption that $r \\ll R$, given $r_s^2 = (\\mathbf{R} + \\mathbf{r}) \\cdot (\\mathbf{R} + \\mathbf{r}) \\approx R^2 + 2(\\mathbf{R} \\cdot \\mathbf{r})$."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "We apply the binomial theorem $(1+\\epsilon)^n \\approx 1 + n\\epsilon$.",
              "interactiveSteps": [
                {
                  "stepText": "We have $r_s^2 \\approx R^2 \\left( 1 + 2\\frac{\\mathbf{R}\\cdot\\mathbf{r}}{R^2} \\right)$."
                },
                {
                  "prompt": "Raise this to the power of $-3/2$ to get $1/r_s^3$. What is the binomial expansion?",
                  "stepText": "$\\frac{1}{R^3} \\left( 1 - \\frac{3}{2} \\left( 2\\frac{\\mathbf{R}\\cdot\\mathbf{r}}{R^2} \\right) \\right) = \\frac{1}{R^3} \\left( 1 - 3\\frac{\\mathbf{R}\\cdot\\mathbf{r}}{R^2} \\right)$.",
                  "options": [
                    { "id": "A", "text": "$\\frac{1}{R^3} \\left( 1 - 3\\frac{\\mathbf{R}\\cdot\\mathbf{r}}{R^2} \\right)$", "isCorrect": true, "explanation": "The $-3/2$ exponent cancels the $2$, leaving $-3$." },
                    { "id": "B", "text": "$\\frac{1}{R^3} \\left( 1 - \\frac{3}{2}\\frac{\\mathbf{R}\\cdot\\mathbf{r}}{R^2} \\right)$", "isCorrect": false, "explanation": "You forgot to multiply by the 2 inside the bracket." }
                  ]
                },
                {
                  "stepText": "Substitute this back into the Tidal Force equation: $\\mathbf{F}_{Tide} = -\\frac{GMm}{R^3} \\left[ (\\mathbf{R}+\\mathbf{r})\\left(1 - 3\\frac{\\mathbf{R}\\cdot\\mathbf{r}}{R^2}\\right) - \\mathbf{R} \\right]$."
                },
                {
                  "stepText": "Expanding and dropping the tiny $\\mathbf{r}(\\frac{\\mathbf{R}\\cdot\\mathbf{r}}{R^2})$ term gives:\n$\\mathbf{F}_{Tide} = -\\frac{GMm}{R^3} \\left( \\mathbf{r} - 3\\mathbf{R}\\frac{\\mathbf{R}\\cdot\\mathbf{r}}{R^2} \\right)$."
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Inverse-Cube Law",
              "content": "Looking at the final expression, how does the magnitude of the tidal force scale with the distance $R$ between the two planets?",
              "options": [
                { "id": "1", "text": "Proportional to $1/R^2$", "isCorrect": false, "explanation": "That is standard gravity." },
                { "id": "2", "text": "Proportional to $1/R^3$", "isCorrect": true, "explanation": "Tidal forces fall off much faster than gravity. This is why the Moon dominates Earth's tides despite the Sun having vastly more gravity." }
              ]
            }
          ]
        },
        {
          "id": "lesson-3-3-6-4",
          "title": "Tidal Forces at Pole vs Equator",
          "description": "Evaluating the tidal vector at specific points.",
          "icon": "Target",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Poles and Equators",
              "content": "Use $\\mathbf{F}_{Tide} = -\\frac{GMm}{R^3} \\left( \\mathbf{r} - 3\\mathbf{R}\\frac{\\mathbf{R}\\cdot\\mathbf{r}}{R^2} \\right)$ to find the direction and magnitude of the tidal force at:\n1. The sub-solar point (Equator facing sun)\n2. The poles (perpendicular to the sun)."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "We evaluate the dot product $\\mathbf{R} \\cdot \\mathbf{r}$.",
              "interactiveSteps": [
                {
                  "stepText": "At the poles, the surface vector $\\mathbf{r}$ is perpendicular to the Sun vector $\\mathbf{R}$. So $\\mathbf{R} \\cdot \\mathbf{r} = 0$."
                },
                {
                  "prompt": "Substitute this into the equation. What is $\\mathbf{F}_{Tide}$ at the poles?",
                  "stepText": "$\\mathbf{F}_{Tide} = -\\frac{GMm}{R^3}\\mathbf{r}$.",
                  "options": [
                    { "id": "A", "text": "$-\\frac{GMm}{R^3}\\mathbf{r}$", "isCorrect": true, "explanation": "The second term vanishes. Because of the negative sign, this force points inwards, compressing the Earth." },
                    { "id": "B", "text": "$0$", "isCorrect": false, "explanation": "The $\\mathbf{r}$ term remains." }
                  ]
                },
                {
                  "stepText": "At the sub-solar point, $\\mathbf{r}$ is parallel to $\\mathbf{R}$. So $\\mathbf{R} \\cdot \\mathbf{r} = Rr$."
                },
                {
                  "prompt": "Substitute this in. What is $\\mathbf{F}_{Tide}$?",
                  "stepText": "$\\mathbf{F}_{Tide} = -\\frac{GMm}{R^3} (\\mathbf{r} - 3\\mathbf{r}) = +2\\frac{GMm}{R^3}\\mathbf{r}$.",
                  "options": [
                    { "id": "A", "text": "$+2\\frac{GMm}{R^3}\\mathbf{r}$", "isCorrect": true, "explanation": "Correct. It is positive, meaning it points outward, stretching the Earth." },
                    { "id": "B", "text": "$-2\\frac{GMm}{R^3}\\mathbf{r}$", "isCorrect": false, "explanation": "Watch the signs: $r - 3r = -2r$, multiplied by the leading $-1$ gives $+2$." }
                  ]
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Stretching vs Compressing",
              "content": "Comparing the two results, what is the ratio of the outward stretching force at the equator to the inward compressing force at the poles?",
              "options": [
                { "id": "1", "text": "They are equal in magnitude.", "isCorrect": false, "explanation": "Look at the coefficients." },
                { "id": "2", "text": "The stretching force is exactly twice as strong as the compressing force.", "isCorrect": true, "explanation": "The coefficient is $+2$ outward versus $-1$ inward." }
              ]
            }
          ]
        },
        {
          "id": "lesson-3-3-6-5",
          "title": "Astronomical Consequences",
          "description": "Spaghettization and planetary rings.",
          "icon": "Globe",
          "slides": [
            {
              "id": "s1",
              "type": "theory",
              "title": "Roche Limit and Rings",
              "content": "If a moon gets too close to a planet (small $R$), the outward tidal stretching force $+2\\frac{GMm}{R^3}r$ can exceed the moon's own internal gravitational binding force $-G\\frac{m^2}{r^2}$.\n\nWhen this happens, the moon is ripped apart. The distance at which this occurs is called the **Roche Limit**. This is the mechanism responsible for creating planetary rings, like those of Saturn!"
            },
            {
              "id": "s2",
              "type": "example",
              "title": "Spaghettization",
              "content": "If an astronaut falls feet-first into a black hole, the gravity at their feet is vastly stronger than at their head. \n\nBecause $R$ approaches zero, the $1/R^3$ tidal force becomes infinitely strong. The astronaut is stretched vertically (factor of $+2$) and compressed horizontally (factor of $-1$) simultaneously, turning them into a long, thin string of atoms. This is officially called **spaghettization**."
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Tidal Locking",
              "content": "Tidal forces also cause friction inside a rotating body, bleeding away rotational energy until the body's rotation matches its orbit. This is why:",
              "options": [
                { "id": "1", "text": "The Earth rotates once every 24 hours.", "isCorrect": false, "explanation": "Earth's rotation is slowing down, but it isn't tidally locked yet." },
                { "id": "2", "text": "We only ever see one side of the Moon.", "isCorrect": true, "explanation": "The Moon is tidally locked to the Earth due to billions of years of tidal friction." }
              ]
            },
            {
              "id": "s4",
              "type": "fill_in_blank",
              "title": "The End",
              "content": "Because the Moon's tidal bulges on Earth are pulled slightly ahead by Earth's fast rotation, the Moon's gravity pulls backward on the bulges, slowly acting as a brake. Earth's days are gradually getting ___.",
              "blankAnswer": "longer"
            }
          ]
        }
      ]
    }
  ]
};