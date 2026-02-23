import { Section } from '../types';

export const SECTION_4_1: Section = {
  "id": "section-4-1",
  "title": "Section 1: Linearly & Rotating Accelerated Frames",
  "description": "Newton's laws in non-inertial systems, fictitious forces, and vector operator transformations.",
  "color": "duo-green",
  "units": [
    {
      "id": "unit-4-1",
      "title": "Linearly Accelerating Frames",
      "description": "Formulating Newton's second law when the observer is accelerating.",
      "color": "duo-green",
      "lessons": [
        {
          "id": "lesson-4-1-1-inertial-vs-non",
          "title": "Inertial vs Non-Inertial Frames",
          "description": "Understanding the limits of Newton's Laws.",
          "icon": "BoxSelect",
          "slides": [
            {
              "id": "s1",
              "type": "theory",
              "title": "The Need for Accelerated Frames",
              "content": "Newton's laws of motion are applicable ONLY in **inertial** frames of reference (frames at rest or moving at a constant velocity with respect to the 'fixed stars').\n\nHowever, we live on the surface of a rotating, orbiting Earth. Our environment is an **accelerated (non-inertial) reference frame**. To solve physical problems realistically, we must adapt Newton's laws to handle observers that are accelerating."
            },
            {
              "id": "s2",
              "type": "example",
              "title": "The Frame Geometries",
              "content": "Let Frame $O$ be a fixed, inertial coordinate system.\nLet Frame $O'$ be a second coordinate system that is accelerating linearly at a constant rate $\\mathbf{\\ddot{r}}$ relative to $O$.\n\nIn this setup, a particle's position can be measured from $O$ as $\\mathbf{r}_O$, or from $O'$ as $\\mathbf{r}_{O'}$.",
              "canvasId": "linear-accel-frame"
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Identifying Frames",
              "content": "Which of the following describes a strictly inertial reference frame?",
              "options": [
                { "id": "1", "text": "A train accelerating out of a station.", "isCorrect": false, "explanation": "Acceleration breaks inertial status." },
                { "id": "2", "text": "A spacecraft floating at a constant velocity in deep space.", "isCorrect": true, "explanation": "Zero acceleration means it is an inertial frame." },
                { "id": "3", "text": "A point on the equator of the spinning Earth.", "isCorrect": false, "explanation": "Rotation inherently involves centripetal acceleration." }
              ]
            },
            {
              "id": "s4",
              "type": "fill_in_blank",
              "title": "Frame Definition",
              "content": "A frame that moves with a changing velocity is called a ___-inertial reference frame.",
              "blankAnswer": "non"
            }
          ]
        },
        {
          "id": "lesson-4-1-2-kinematics",
          "title": "Kinematics of Translation",
          "description": "Relating positions and accelerations across frames.",
          "icon": "TrendingUp",
          "slides": [
            {
              "id": "s1",
              "type": "theory",
              "title": "Vector Addition of Position",
              "content": "Looking at the geometry, the position of a particle of mass $m$ with respect to the inertial frame $O$ is just the vector sum of the frame's offset plus the local position:\n\n$$\\mathbf{r}_O = \\mathbf{r} + \\mathbf{r}_{O'}$$"
            },
            {
              "id": "s2",
              "type": "proof",
              "title": "Interactive Proof: Relating Accelerations",
              "content": "We need to relate the accelerations experienced in both frames.",
              "interactiveSteps": [
                {
                  "stepText": "We start with the position equation: $\\mathbf{r}_O = \\mathbf{r} + \\mathbf{r}_{O'}$."
                },
                {
                  "prompt": "Take the second time derivative of this entire equation. What does it become?",
                  "stepText": "$\\ddot{\\mathbf{r}}_O = \\ddot{\\mathbf{r}} + \\ddot{\\mathbf{r}}_{O'}$.",
                  "options": [
                    { "id": "A", "text": "$\\ddot{\\mathbf{r}}_O = \\ddot{\\mathbf{r}}_{O'}$", "isCorrect": false, "explanation": "You cannot ignore the acceleration of the frame $\\mathbf{r}$ itself." },
                    { "id": "B", "text": "$\\ddot{\\mathbf{r}}_O = \\ddot{\\mathbf{r}} + \\ddot{\\mathbf{r}}_{O'}$", "isCorrect": true, "explanation": "The second derivative distributes linearly across the sum." }
                  ]
                },
                {
                  "stepText": "Since $O$ is an inertial frame, Newton's second law safely applies here: $m\\ddot{\\mathbf{r}}_O = \\mathbf{F}$."
                },
                {
                  "prompt": "Substitute the acceleration equation into Newton's second law. What do you get?",
                  "stepText": "$\\mathbf{F} = m(\\ddot{\\mathbf{r}}_{O'} + \\ddot{\\mathbf{r}})$.",
                  "options": [
                    { "id": "A", "text": "$\\mathbf{F} = m(\\ddot{\\mathbf{r}}_{O'} + \\ddot{\\mathbf{r}})$", "isCorrect": true, "explanation": "Correct substitution." },
                    { "id": "B", "text": "$\\mathbf{F} = m\\ddot{\\mathbf{r}}_{O'}$", "isCorrect": false, "explanation": "This would only be true if the frames were not accelerating relative to each other." }
                  ]
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Physical Meaning",
              "content": "In the equation $\\ddot{\\mathbf{r}}_O = \\ddot{\\mathbf{r}}_{O'} + \\ddot{\\mathbf{r}}$, what does $\\ddot{\\mathbf{r}}_{O'}$ represent?",
              "options": [
                { "id": "1", "text": "The absolute acceleration of the particle in space.", "isCorrect": false, "explanation": "That is $\\ddot{\\mathbf{r}}_O$." },
                { "id": "2", "text": "The apparent acceleration of the particle as seen by the observer in the moving frame.", "isCorrect": true, "explanation": "It is the second derivative of the local position vector." }
              ]
            },
            {
              "id": "s4",
              "type": "fill_in_blank",
              "title": "The Missing Link",
              "content": "To relate the accelerations, we must account for $\\ddot{\\mathbf{r}}$, which represents the acceleration of the reference ___ $O'$ relative to $O$.",
              "blankAnswer": "frame"
            }
          ]
        },
        {
          "id": "lesson-4-1-3-fictitious",
          "title": "Dynamics & Fictitious Force",
          "description": "Moving terms to create the Fictitious Force.",
          "icon": "ActivitySquare",
          "slides": [
            {
              "id": "s1",
              "type": "theory",
              "title": "Rearranging Newton's Law",
              "content": "We found $\\mathbf{F} = m\\ddot{\\mathbf{r}}_{O'} + m\\ddot{\\mathbf{r}}$. \n\nIf we want an equation of motion from the perspective of the observer inside the accelerating frame $O'$, we need to isolate their local acceleration $m\\ddot{\\mathbf{r}}_{O'}$:\n\n$$m\\ddot{\\mathbf{r}}_{O'} = \\mathbf{F} - m\\ddot{\\mathbf{r}}$$"
            },
            {
              "id": "s2",
              "type": "example",
              "title": "The Fictitious Force",
              "content": "The equation $m\\ddot{\\mathbf{r}}_{O'} = \\mathbf{F} + \\mathbf{f}$ looks exactly like standard $ma = F_{net}$. \n\nHowever, the term $\\mathbf{f} = -m\\ddot{\\mathbf{r}}$ is an *additional* apparent force. It is called a **fictitious force** because it doesn't come from any physical interaction (like gravity or electromagnetism), but purely from a mathematical coordinate transformation."
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Direction of the Force",
              "content": "Notice the negative sign in $\\mathbf{f} = -m\\ddot{\\mathbf{r}}$. If an elevator accelerates UPWARD, in what direction does the fictitious force push you?",
              "options": [
                { "id": "1", "text": "Upward", "isCorrect": false, "explanation": "The formula dictates the opposite direction." },
                { "id": "2", "text": "Downward", "isCorrect": true, "explanation": "The negative sign means the fictitious force acts exactly opposite to the acceleration of the frame, pressing you heavier into the floor." }
              ]
            },
            {
              "id": "s4",
              "type": "numerical",
              "title": "Calculate Apparent Weight",
              "content": "A 50 kg person is in an elevator accelerating upward at $2$ m/s$^2$. Gravity provides a downward physical force of $-50 \times 9.8 = -490$ N.\n\nThe fictitious force is $f = -ma = -(50)(2) = -100$ N.\nWhat is the total apparent force (in Newtons) pushing down on the elevator floor?",
              "numericAnswer": 590,
              "numericTolerance": 1
            }
          ]
        },
        {
          "id": "lesson-4-1-4-everyday",
          "title": "Everyday Examples",
          "description": "Applying linear acceleration transformations to daily life.",
          "icon": "Repeat",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "The Accelerating Car",
              "content": "You are sitting in a car that suddenly accelerates straight forward at a constant rate $a$. You feel yourself pressed backwards into your seat.\n\nUse the equation $m\\ddot{\\mathbf{r}}_{O'} = \\mathbf{F} - m\\ddot{\\mathbf{r}}$ to mathematically explain this feeling before the seat pushes back on you."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "Analyze the forces in the car's reference frame.",
              "interactiveSteps": [
                {
                  "stepText": "The car's frame $O'$ is accelerating forward: $\\ddot{\\mathbf{r}} = +a\\mathbf{\\hat{i}}$."
                },
                {
                  "prompt": "Before your body hits the back of the seat, what is the real physical horizontal force $\\mathbf{F}$ acting on you?",
                  "stepText": "$\\mathbf{F} = 0$.",
                  "options": [
                    { "id": "A", "text": "$\\mathbf{F} = 0$", "isCorrect": true, "explanation": "There is no physical hand pushing you backward." },
                    { "id": "B", "text": "$\\mathbf{F} = ma\\mathbf{\\hat{i}}$", "isCorrect": false, "explanation": "This would mean something is physically pulling you forward." }
                  ]
                },
                {
                  "stepText": "Substitute $\\mathbf{F} = 0$ into the frame equation: $m\\ddot{\\mathbf{r}}_{O'} = 0 - m(a\\mathbf{\\hat{i}})$. "
                },
                {
                  "stepText": "So your apparent acceleration in the car is $\\ddot{\\mathbf{r}}_{O'} = -a\\mathbf{\\hat{i}}$. You accelerate backward relative to the dashboard purely because of the fictitious force!"
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "The Seat's Role",
              "content": "Once your back hits the seat, you stop moving relative to the car ($\\ddot{\\mathbf{r}}_{O'} = 0$). To satisfy $0 = \\mathbf{F} - m\\ddot{\\mathbf{r}}$, what must the physical force $\\mathbf{F}$ from the seat be?",
              "options": [
                { "id": "1", "text": "$\\mathbf{F} = 0$", "isCorrect": false, "explanation": "If it were 0, you would keep moving backward." },
                { "id": "2", "text": "$\\mathbf{F} = +m\\ddot{\\mathbf{r}}$", "isCorrect": true, "explanation": "The real normal force from the seat exactly cancels the fictitious force, keeping you at rest in the car." }
              ]
            },
            {
              "id": "s4",
              "type": "numerical",
              "title": "Braking Force",
              "content": "A 1000 kg train brakes, decelerating at $-3$ m/s$^2$. A passenger drops a ball. \nIn the train's frame, what is the magnitude of the fictitious horizontal force on a 2 kg ball?",
              "numericAnswer": 6,
              "numericTolerance": 0.1
            }
          ]
        }
      ]
    },
    {
      "id": "unit-4-2",
      "title": "A Rotating Coordinate Frame",
      "description": "Translating vectors and derivatives between fixed and rotating axes.",
      "color": "duo-green",
      "lessons": [
        {
          "id": "lesson-4-2-1-rotating",
          "title": "Introduction to Rotating Systems",
          "description": "The Earth as an accelerating sphere.",
          "icon": "Globe",
          "slides": [
            {
              "id": "s1",
              "type": "theory",
              "title": "Rotating is Accelerating",
              "content": "Even if an object rotates at a perfectly constant speed, its direction of motion is constantly changing. A continuously changing velocity means there is an inherent acceleration toward the center of the circle.\n\nTherefore, a coordinate system rigidly attached to a rotating sphere (like the Earth) is an accelerated, non-inertial reference frame."
            },
            {
              "id": "s2",
              "type": "example",
              "title": "The Earth Frame",
              "content": "Imagine an inertial frame $(x,y,z)$ centered inside the Earth but fixed to the stars, and a rotating frame $(x',y',z')$ glued to the Earth's crust.\n\nBoth share the same $z$-axis (the North Pole), and the Earth frame rotates at an angular velocity $\\mathbf{\\Omega}$.",
              "canvasId": "rotating-frame"
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "The Standing Observer",
              "content": "An observer stands completely still on the equator. In their rotating coordinate frame $[x',y',z']$, what is their velocity $d\\mathbf{r}/dt$?",
              "options": [
                { "id": "1", "text": "Zero", "isCorrect": true, "explanation": "Relative to the Earth's surface, their position $\\mathbf{r}$ does not change." },
                { "id": "2", "text": "About 460 meters per second", "isCorrect": false, "explanation": "That is their velocity in the inertial frame." }
              ]
            },
            {
              "id": "s4",
              "type": "fill_in_blank",
              "title": "Angular Vector",
              "content": "The Earth rotates at roughly $2\\pi$ radians per day. We represent this as a vector $\\mathbf{\\Omega}$ that points along the axis of ___.",
              "blankAnswer": "rotation"
            }
          ]
        },
        {
          "id": "lesson-4-2-2-velocity-transform",
          "title": "Velocity Transformation",
          "description": "How the inertial frame sees a point in the rotating frame.",
          "icon": "Navigation",
          "slides": [
            {
              "id": "s1",
              "type": "theory",
              "title": "Moving on the Earth",
              "content": "If a person stands completely still on Earth, their velocity in the rotating frame is $[d\\mathbf{r}/dt]_{rot} = 0$.\n\nBut to an astronaut in the inertial frame, the person is sweeping out a giant circle. Their inertial velocity is strictly due to rotation: $\\mathbf{v}_{inertial} = \\mathbf{\\Omega} \\times \\mathbf{r}$."
            },
            {
              "id": "s2",
              "type": "proof",
              "title": "Interactive Proof: Adding Velocities",
              "content": "What if the person is also walking?",
              "interactiveSteps": [
                {
                  "stepText": "Suppose the person is walking with a velocity $\\mathbf{v}_r$ with respect to the Earth."
                },
                {
                  "prompt": "Mathematically, what is $\\mathbf{v}_r$ in terms of derivatives?",
                  "stepText": "$\\mathbf{v}_r = [d\\mathbf{r}/dt]_{rot}$.",
                  "options": [
                    { "id": "A", "text": "$[d\\mathbf{r}/dt]_{rot}$", "isCorrect": true, "explanation": "It's the time derivative of position as measured by the Earth-based observer." },
                    { "id": "B", "text": "$[d\\mathbf{r}/dt]_{inertial}$", "isCorrect": false, "explanation": "That would be their velocity as seen from space." }
                  ]
                },
                {
                  "stepText": "From the point of view of the inertial frame, the total velocity is the sum of their walking velocity PLUS the Earth's rotational velocity."
                },
                {
                  "stepText": "Therefore, $\\mathbf{v}_i = \\mathbf{v}_r + \\mathbf{\\Omega} \\times \\mathbf{r}$."
                },
                {
                  "stepText": "Writing this in full derivative notation: $\\left[\\frac{d\\mathbf{r}}{dt}\\right]_{inertial} = \\left[\\frac{d\\mathbf{r}}{dt}\\right]_{rot} + \\mathbf{\\Omega} \\times \\mathbf{r}$."
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Cross Product Direction",
              "content": "If you are at the equator, $\\mathbf{r}$ points outward and $\\mathbf{\\Omega}$ points North. What direction does the rotational velocity $\\mathbf{\\Omega} \\times \\mathbf{r}$ point?",
              "options": [
                { "id": "1", "text": "East", "isCorrect": true, "explanation": "By the Right Hand Rule, North crossed with Out points East. This is why the sun rises in the East!" },
                { "id": "2", "text": "West", "isCorrect": false, "explanation": "The Earth rotates eastward." },
                { "id": "3", "text": "South", "isCorrect": false, "explanation": "Cross products are perpendicular to both input vectors." }
              ]
            },
            {
              "id": "s4",
              "type": "numerical",
              "title": "Calculate Equatorial Speed",
              "content": "Given Earth's radius $R = 6.37 \\times 10^6$ m and $\\Omega = 7.27 \\times 10^{-5}$ rad/s.\n\nCalculate the magnitude of the inertial velocity $\\Omega \times R$ for a stationary object at the equator (in m/s).",
              "numericAnswer": 463,
              "numericTolerance": 5
            }
          ]
        },
        {
          "id": "lesson-4-2-3-operator",
          "title": "The Operator Equation",
          "description": "Generalizing the derivative transformation to any vector.",
          "icon": "Layers",
          "slides": [
            {
              "id": "s1",
              "type": "theory",
              "title": "Generalizing the Rule",
              "content": "The relationship we found for position $\\mathbf{r}$ applies to the time derivative of **any** vector $\\mathbf{U}$. \n\nThe rate of change of $\\mathbf{U}$ in the inertial system equals the rate of change in the rotating system plus the rotation of the vector itself:\n\n$$\\left[\\frac{d\\mathbf{U}}{dt}\\right]_{inertial} = \\left[\\frac{d\\mathbf{U}}{dt}\\right]_{rot} + \\mathbf{\\Omega} \\times \\mathbf{U}$$"
            },
            {
              "id": "s2",
              "type": "example",
              "title": "The Operator Form",
              "content": "This can be cleanly expressed as a mathematical operator equation. An operator is an instruction to perform a specific math action.\n\n$$\\left[\\frac{d}{dt}\\right]_{inertial} = \\left[\\frac{d}{dt}\\right]_{rot} + \\mathbf{\\Omega} \\times$$ \n\nYou can 'plug' any vector into this operator machine. If you plug in velocity $\\mathbf{v}$, you get the formula for acceleration!"
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Understanding the Terms",
              "content": "In the operator equation, what does the extra term $\\mathbf{\\Omega} \\times$ physically account for?",
              "options": [
                { "id": "1", "text": "It accounts for the fact that the basis vectors (x', y', z') of the rotating frame are themselves changing direction over time.", "isCorrect": true, "explanation": "Even if a vector is constant in the rotating frame, its direction in space is constantly turning, generating a derivative in the inertial frame." },
                { "id": "2", "text": "It accounts for the expansion of the universe.", "isCorrect": false, "explanation": "Not applicable here." },
                { "id": "3", "text": "It is a relativistic correction.", "isCorrect": false, "explanation": "This is purely classical Newtonian mechanics." }
              ]
            },
            {
              "id": "s4",
              "type": "fill_in_blank",
              "title": "Applying the Operator",
              "content": "By applying the operator equation to the velocity vector $\\mathbf{v}$, we generate the formulas for the fictitious forces, namely the Centrifugal and ___ forces.",
              "blankAnswer": "Coriolis"
            }
          ]
        },
        {
          "id": "lesson-4-2-4-ex15-2",
          "title": "Exercise 15.2: Invariance of Omega",
          "description": "Applying the operator to the angular velocity itself.",
          "icon": "Target",
          "slides": [
            {
              "id": "s1",
              "type": "example_q",
              "title": "Exercise 15.2",
              "content": "Prove that the rate of change of the angular velocity $\\mathbf{\\Omega}$ of the rotating system is the exact same in both the inertial and the rotating reference frames."
            },
            {
              "id": "s2",
              "type": "solution",
              "title": "Interactive Solution",
              "content": "We will 'plug' $\\mathbf{\\Omega}$ into the operator equation.",
              "interactiveSteps": [
                {
                  "stepText": "The operator equation is $\\left[\\frac{d}{dt}\\right]_{inertial} = \\left[\\frac{d}{dt}\\right]_{rot} + \\mathbf{\\Omega} \\times$."
                },
                {
                  "prompt": "Apply this operator to the vector $\\mathbf{\\Omega}$. What is the equation?",
                  "stepText": "$\\left[\\frac{d\\mathbf{\\Omega}}{dt}\\right]_{i} = \\left[\\frac{d\\mathbf{\\Omega}}{dt}\\right]_{r} + \\mathbf{\\Omega} \\times \\mathbf{\\Omega}$.",
                  "options": [
                    { "id": "A", "text": "$\\left[\\frac{d\\mathbf{\\Omega}}{dt}\\right]_{i} = \\left[\\frac{d\\mathbf{\\Omega}}{dt}\\right]_{r} + \\mathbf{\\Omega} \\times \\mathbf{\\Omega}$", "isCorrect": true, "explanation": "Direct substitution of $\\mathbf{\\Omega}$ into the operator slot." },
                    { "id": "B", "text": "$\\left[\\frac{d\\mathbf{\\Omega}}{dt}\\right]_{i} = \\left[\\frac{d\\mathbf{\\Omega}}{dt}\\right]_{r} + \\mathbf{\\Omega}$", "isCorrect": false, "explanation": "You missed the cross product operation." }
                  ]
                },
                {
                  "prompt": "Evaluate the mathematical cross product $\\mathbf{\\Omega} \\times \\mathbf{\\Omega}$. What does it equal?",
                  "stepText": "It equals $0$.",
                  "options": [
                    { "id": "A", "text": "$0$", "isCorrect": true, "explanation": "The cross product of any vector with itself is always zero, because the angle between them is 0, and $\\sin(0) = 0$." },
                    { "id": "B", "text": "$\\Omega^2$", "isCorrect": false, "explanation": "That is the dot product $\\mathbf{\\Omega} \\cdot \\mathbf{\\Omega}$." }
                  ]
                },
                {
                  "stepText": "Therefore, $\\left[\\frac{d\\mathbf{\\Omega}}{dt}\\right]_{inertial} = \\left[\\frac{d\\mathbf{\\Omega}}{dt}\\right]_{rot} + 0$. The derivative is identical in both frames!"
                }
              ]
            },
            {
              "id": "s3",
              "type": "quiz",
              "title": "Physical Implication",
              "content": "Since $d\\mathbf{\\Omega}/dt$ is the same in both frames, what happens if the Earth's rotation speeds up?",
              "options": [
                { "id": "1", "text": "Observers on Earth and observers in space will measure different angular accelerations.", "isCorrect": false, "explanation": "We just proved they are mathematically identical." },
                { "id": "2", "text": "Observers on Earth and observers in space will measure the exact same angular acceleration.", "isCorrect": true, "explanation": "Because the extra rotational term $\\Omega \\times \\Omega$ vanishes, angular acceleration is an invariant quantity between these frames." }
              ]
            },
            {
              "id": "s4",
              "type": "fill_in_blank",
              "title": "Vector Math",
              "content": "The cross product vanishes because the cross product calculates the area of a parallelogram formed by two vectors. If the vectors are identical, the area is exactly ___.",
              "blankAnswer": "zero"
            }
          ]
        }
      ]
    }
  ]
};