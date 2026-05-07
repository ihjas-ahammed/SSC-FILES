import { Unit } from '../../types';

export const UNIT_4_1_1_TRANSFORMATION_BASICS: Unit = {
  id: "unit-4-1-1",
  title: "411 (Transformation Basics)",
  description: "Inertial vs Non-Inertial Frames and Fictitious Forces",
  color: "duo-blue",
  lessons:[
    {
      id: "les-4-1-1-1",
      title: "Inertial vs Non-Inertial",
      description: "When does F=ma apply?",
      icon: "Car",
      slides:[
        {
          id: "wu1",
          type: "quiz",
          title: "Conceptual Warm-up 1",
          content: "When you are in a car that suddenly hits the brakes, you feel thrown forward. Is there a real physical force pushing you forward?",
          options:[
            { id: "A", text: "Yes, the braking force pushes you forward.", isCorrect: false },
            { id: "B", text: "No, it's just your inertia trying to keep you moving at a constant speed.", isCorrect: true, explanation: "You are experiencing the effects of an accelerating (non-inertial) reference frame." }
          ]
        },
        {
          id: "wu2",
          type: "quiz",
          title: "Conceptual Warm-up 2",
          content: "Newton's laws of motion ($F=ma$) are perfectly valid in:",
          options:[
            { id: "A", text: "Any reference frame", isCorrect: false },
            { id: "B", text: "Only in non-accelerating (inertial) reference frames.", isCorrect: true, explanation: "If the frame is accelerating, we must introduce fictitious forces to make the math work." }
          ]
        },
        {
          id: "theory",
          type: "theory",
          title: "The Problem with Earth",
          content: "Newton's laws of motion are applicable only in **inertial** (non-accelerated) frames of reference. \n\nHowever, most real reference frames are accelerating. Since we live on the surface of a large rotating sphere (Earth), our frame of reference is constantly accelerating. Therefore, it is important for us to be able to solve physics problems in **non-inertial** systems."
        }
      ]
    },
    {
      id: "les-4-1-1-2",
      title: "Accelerated Coordinate System",
      description: "Setting up the vectors",
      icon: "TrendingUp",
      slides:[
        {
          id: "theory",
          type: "theory",
          title: "Linearly Accelerating Frame",
          content: "Before tackling rotation, let's look at a frame that is accelerating linearly. \n\nLet $O$ be a reference frame at rest 'with respect to the fixed stars' (an inertial frame). \nLet $O'$ be a second reference frame that is accelerating at a constant acceleration $\\ddot{\\mathbf{r}}$ relative to $O$."
        },
        {
          id: "canvas",
          type: "interactive_canvas",
          title: "Figure 15.1: Coordinate Systems",
          content: "Vector addition connects the particle's position in both frames.",
          interactiveCanvasId: "accelerated-frame-fig15-1"
        }
      ]
    },
    {
      id: "les-4-1-1-3",
      title: "Vector Position Transformation",
      description: "Eq 15.1",
      icon: "Link",
      slides:[
        {
          id: "theory",
          type: "theory",
          title: "Position Vectors",
          content: "Let a particle of mass $m$ be located in space.\n\n*   Its position relative to the inertial frame is $\\mathbf{r}_O$.\n*   Its position relative to the accelerating frame is $\\mathbf{r}_{O'}$.\n*   The position of the origin $O'$ with respect to $O$ is $\\mathbf{r}$."
        },
        {
          id: "proof",
          type: "proof",
          title: "Transforming Acceleration",
          content: "By tip to tail vector addition, $\\mathbf{r}_O = \\mathbf{r} + \\mathbf{r}_{O'}$.",
          proofSteps:[
            "Take the first time derivative to find velocity: $\\dot{\\mathbf{r}}_O = \\dot{\\mathbf{r}} + \\dot{\\mathbf{r}}_{O'}$.",
            "Take the second time derivative to find acceleration: $\\ddot{\\mathbf{r}}_O = \\ddot{\\mathbf{r}} + \\ddot{\\mathbf{r}}_{O'}$.",
            "Rearranging to match the text: $\\ddot{\\mathbf{r}}_O = \\ddot{\\mathbf{r}}_{O'} + \\ddot{\\mathbf{r}}$.",
            "Here, $\\ddot{\\mathbf{r}}$ is the acceleration of reference frame $O'$ relative to inertial frame $O$."
          ]
        },
        {
          id: "mcq",
          type: "quiz",
          title: "Knowledge Check",
          content: "What does $\\ddot{\\mathbf{r}}_O$ represent?",
          options:[
            { id: "A", text: "The acceleration of the frame $O'$.", isCorrect: false },
            { id: "B", text: "The true acceleration of the particle in inertial space.", isCorrect: true, explanation: "This is the acceleration we can plug into Newton's Second Law." }
          ]
        }
      ]
    },
    {
      id: "les-4-1-1-4",
      title: "Equation of Motion",
      description: "Introducing Fictitious Force",
      icon: "FunctionSquare",
      slides:[
        {
          id: "proof",
          type: "proof",
          title: "Newton's Law in the New Frame",
          content: "Let's apply Newton's Second Law, which is valid in the inertial frame $O$.",
          proofSteps:[
            "Newton's Second Law: $m\\ddot{\\mathbf{r}}_O = \\mathbf{F}$ (where $\\mathbf{F}$ is the real physical force).",
            "Substitute our acceleration transformation: $m(\\ddot{\\mathbf{r}}_{O'} + \\ddot{\\mathbf{r}}) = \\mathbf{F}$.",
            "Distribute the mass: $m\\ddot{\\mathbf{r}}_{O'} + m\\ddot{\\mathbf{r}} = \\mathbf{F}$.",
            "Isolate the term for the accelerating frame: $m\\ddot{\\mathbf{r}}_{O'} = \\mathbf{F} - m\\ddot{\\mathbf{r}}$."
          ]
        },
        {
          id: "theory",
          type: "theory",
          title: "The Fictitious Force",
          content: "From the point of view of the observer in the accelerated reference frame, Newton's second law has the form:\n$$ m\\ddot{\\mathbf{r}}_{O'} = \\mathbf{F} - m\\ddot{\\mathbf{r}} $$\n\nThere appears to be an additional force $\\mathbf{f} = -m\\ddot{\\mathbf{r}}$ acting on the particle. Thus the observer in the accelerated system will believe that an additional force is acting on the particle. This is called a **fictitious force**."
        },
        {
          id: "mcq",
          type: "quiz",
          title: "OMR: Fictitious Forces",
          content: "What is a fictitious force?",
          options:[
            { id: "A", text: "A real interaction between two physical bodies.", isCorrect: false },
            { id: "B", text: "A mathematical term representing mass times frame acceleration, moved to the force side of the equation.", isCorrect: true, explanation: "It is a consequence of trying to apply F=ma inside an accelerating frame." },
            { id: "C", text: "A force that doesn't affect the motion of the particle.", isCorrect: false }
          ]
        },
        {
          id: "fib",
          type: "fill_in_blank",
          title: "Key Takeaway",
          content: "A force that arises strictly due to the acceleration of the coordinate system is called a ___ force.",
          blankAnswer: "fictitious"
        }
      ]
    }
  ]
};