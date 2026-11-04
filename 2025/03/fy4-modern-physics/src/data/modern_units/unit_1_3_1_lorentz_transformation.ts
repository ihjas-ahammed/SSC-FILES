import { Unit } from '../../types';

export const UNIT_1_3_1_LORENTZ_TRANSFORMATION: Unit = {
  id: "unit-1-3-1",
  title: "The Lorentz Transformation",
  description: "Der: Transformation equations · Length contraction · Velocity transformation · Relativistic intervals",
  color: "duo-blue",
  lessons: [
    // ── Priming ───────────────────────────────────────────────────────────
    {
      id: "les-1-3-1-act",
      title: "Priming: Coordinates",
      description: "Thinking about events in two frames",
      icon: "Brain",
      slides: [
        {
          id: "prime-1",
          type: "quiz",
          title: "Priming Question 1",
          content: "In Galilean relativity, if $t = 5$ s in frame S, what is $t'$ in frame S'?",
          options: [
            { id: "A", text: "5 s", isCorrect: true, explanation: "Classical physics assumes absolute time: $t' = t$." },
            { id: "B", text: "It depends on position $x$.", isCorrect: false, explanation: "This is the relativistic result. Classically, time is independent of space." },
            { id: "C", text: "It depends on velocity $v$.", isCorrect: false, explanation: "Classically, $t' = t$ regardless of $v$." }
          ]
        },
        {
          id: "prime-2",
          type: "quiz",
          title: "Priming Question 2",
          content: "What happens to the Galilean transformation $x' = x - vt$ when $v$ is close to $c$?",
          options: [
            { id: "A", text: "It works perfectly.", isCorrect: false, explanation: "It fails because it predicts light speeds differ in different frames." },
            { id: "B", text: "It needs a correction factor $\\gamma$.", isCorrect: true, explanation: "The relativistic version is $x' = \\gamma(x - vt)$. The $\\gamma$ factor accounts for length contraction and time dilation effects mixed together." },
            { id: "C", text: "It becomes $x' = x + vt$.", isCorrect: false, explanation: "Sign change only happens if direction reverses." }
          ]
        }
      ]
    },

    // ── Theory: Lorentz Transformation ────────────────────────────────────
    {
      id: "les-1-3-1-1",
      title: "The Lorentz Transformation",
      description: "T: The fundamental equations of Special Relativity",
      icon: "FunctionSquare",
      slides: [
        {
          id: "lt-theory",
          type: "theory",
          title: "The Lorentz Transformation",
          content: "To satisfy Einstein's postulates, we must replace the Galilean transformation with the **Lorentz Transformation**.\n\nFor frame $S'$ moving at $v$ along $+x$ relative to $S$:\n\n$$x' = \\frac{x - vt}{\\sqrt{1 - v^2/c^2}} = \\gamma(x - vt)$$\n$$y' = y$$\n$$z' = z$$\n$$t' = \\frac{t - (v/c^2)x}{\\sqrt{1 - v^2/c^2}} = \\gamma\\left(t - \\frac{vx}{c^2}\\right)$$\n\n**Note:** Space and time are mixed! $t'$ depends on both $t$ and $x$."
        },
        {
          id: "lt-q1",
          type: "quiz",
          title: "Conceptual Check 1",
          content: "Look at the time equation: $t' = \\gamma(t - vx/c^2)$. What does the term $-vx/c^2$ imply?",
          options: [
            { id: "A", text: "Time is absolute.", isCorrect: false, explanation: "The equation shows $t' \\neq t$. Time depends on position $x$." },
            { id: "B", text: "Events simultaneous in S (same $t$, different $x$) are NOT simultaneous in S'.", isCorrect: true, explanation: "If $\\Delta t = 0$ but $\\Delta x \\neq 0$, then $\\Delta t' = -\\gamma v \\Delta x / c^2 \\neq 0$. Simultaneity is relative!" },
            { id: "C", text: "Clocks run backwards.", isCorrect: false, explanation: "It just means the zero-point of time shifts with position; time still flows forward." }
          ]
        },
        {
          id: "lt-q2",
          type: "quiz",
          title: "Conceptual Check 2",
          content: "What happens to these equations when $v \\ll c$?",
          options: [
            { id: "A", text: "They reduce to the Galilean transformation.", isCorrect: true, explanation: "If $v/c \\to 0$, then $\\gamma \to 1$ and $vx/c^2 \to 0$. We get $x' = x - vt$ and $t' = t$. This satisfies the Correspondence Principle." },
            { id: "B", text: "They become undefined.", isCorrect: false, explanation: "They are well-behaved at low speeds." },
            { id: "C", text: "They give $x' = x$ and $t' = t$.", isCorrect: false, explanation: "Only if $v=0$. For small $v$, $x' = x - vt$." }
          ]
        },
        {
          id: "lt-fitb",
          type: "fill_in_blank",
          title: "Fill in the Blank",
          content: "The Lorentz transformation shows that space and ___ are not independent, but form a 4-dimensional continuum.",
          blankAnswer: "time"
        }
      ]
    },

    // ── Derivation: Length Contraction ────────────────────────────────────
    {
      id: "les-1-3-1-2",
      title: "Deriving Length Contraction",
      description: "Der: Recovering L = L0/γ from Lorentz equations",
      icon: "Ruler",
      slides: [
        {
          id: "lc-der-start",
          type: "theory",
          title: "Goal: Derive Length Contraction",
          content: "We previously derived $L = L_0/\\gamma$ using a thought experiment. Now we will derive it formally from the Lorentz transformation.\n\n**Setup:**\n- Rod at rest in $S'$ (moving frame). Endpoints $x'_1, x'_2$.\n- Proper length $L_0 = x'_2 - x'_1$.\n- We measure length $L$ in frame $S$ by locating endpoints $x_1, x_2$ **simultaneously** ($t_1 = t_2 = t$).\n\n**Goal:** Show $x_2 - x_1 = L_0 / \\gamma$."
        },
        {
          id: "lc-der-steps",
          type: "proof",
          title: "Interactive Derivation",
          content: "Use $x' = \\gamma(x - vt)$.",
          interactiveSteps: [
            {
              stepText: "Write the transformation for both endpoints:\n$$x'_1 = \\gamma(x_1 - vt_1)$$\n$$x'_2 = \\gamma(x_2 - vt_2)$$"
            },
            {
              prompt: "Calculate $L_0 = x'_2 - x'_1$. Remember that for a length measurement in $S$, we set $t_1 = t_2 = t$.",
              stepText: "$$L_0 = x'_2 - x'_1 = \\gamma(x_2 - vt) - \\gamma(x_1 - vt)$$",
              options: [
                { id: "A", text: "$L_0 = \\gamma(x_2 - x_1)$", isCorrect: true, explanation: "The $vt$ terms cancel out because $t_1 = t_2$. We are left with $\\gamma(x_2 - x_1)$." },
                { id: "B", text: "$L_0 = x_2 - x_1$", isCorrect: false, explanation: "You forgot the $\\gamma$ factor." },
                { id: "C", text: "$L_0 = \\gamma(x_2 - x_1 - 2vt)$", isCorrect: false, explanation: "Algebra error. $-vt - (-vt) = 0$." }
              ]
            },
            {
              prompt: "Let $L = x_2 - x_1$. Solve for $L$.",
              stepText: "$$L_0 = \\gamma L \\implies L = \\frac{L_0}{\\gamma}$$\n\nThis confirms Length Contraction!",
              options: [
                { id: "A", text: "$L = L_0 / \\gamma$", isCorrect: true, explanation: "Since $\\gamma \\ge 1$, the measured length $L$ is shorter than the proper length $L_0$." },
                { id: "B", text: "$L = L_0 \\gamma$", isCorrect: false, explanation: "Algebra error." }
              ]
            }
          ]
        },
        {
          id: "lc-der-conc",
          type: "quiz",
          title: "Physical Interpretation",
          content: "Why was it important to set $t_1 = t_2$?",
          options: [
            { id: "A", text: "Because length is defined as the distance between endpoints at the same instant.", isCorrect: true, explanation: "If you measure the front at one time and the back at another time while the object moves, you don't get the true length." },
            { id: "B", text: "Because time is absolute.", isCorrect: false, explanation: "Time is not absolute. We simply *chose* to measure simultaneously in S." },
            { id: "C", text: "To make the math easier.", isCorrect: false, explanation: "It's a definition requirement, not just for convenience." }
          ]
        }
      ]
    },

    // ── Derivation: Velocity Transformation ───────────────────────────────
    {
      id: "les-1-3-1-3",
      title: "Deriving Velocity Transformation",
      description: "Der: Recovering velocity addition from Lorentz",
      icon: "ArrowRightLeft",
      slides: [
        {
          id: "vt-der-start",
          type: "theory",
          title: "Goal: Velocity Transformation",
          content: "We previously stated Eq. 2.17: $u_x = \\frac{u'_x + v}{1 + v u'_x/c^2}$.\n\nNow we derive it formally using differentials.\n\n**Definition:** $u_x = \\frac{dx}{dt}$ and $u'_x = \\frac{dx'}{dt'}$."
        },
        {
          id: "vt-der-steps",
          type: "proof",
          title: "Interactive Derivation",
          content: "Start with the inverse Lorentz transformation (S in terms of S'):\n$$x = \\gamma(x' + vt')$$\n$$t = \\gamma(t' + vx'/c^2)$$",
          interactiveSteps: [
            {
              stepText: "Take differentials of the inverse transformation equations:\n$$dx = \\gamma(dx' + v dt')$$\n$$dt = \\gamma(dt' + v dx'/c^2)$$"
            },
            {
              prompt: "Form the ratio $u_x = dx/dt$.",
              stepText: "$$u_x = \\frac{dx}{dt} = \\frac{\\gamma(dx' + v dt')}{\\gamma(dt' + v dx'/c^2)}$$",
              options: [
                { id: "A", text: "$u_x = \\frac{dx' + v dt'}{dt' + v dx'/c^2}$", isCorrect: true, explanation: "The $\\gamma$ factors cancel out." },
                { id: "B", text: "$u_x = \\frac{dx' + v dt'}{dt'}$", isCorrect: false, explanation: "You forgot the $dx'$ term in the time differential." }
              ]
            },
            {
              prompt: "Divide numerator and denominator by $dt'$ and substitute $u'_x = dx'/dt'$.",
              stepText: "$$u_x = \\frac{(dx'/dt') + v}{1 + (v/c^2)(dx'/dt')} = \\frac{u'_x + v}{1 + v u'_x/c^2}$$",
              options: [
                { id: "A", text: "Matches Eq. 2.17 exactly.", isCorrect: true, explanation: "We have derived the relativistic velocity addition formula from the Lorentz transformation." },
                { id: "B", text: "Matches Galilean addition.", isCorrect: false, explanation: "The denominator makes it relativistic." }
              ]
            }
          ]
        }
      ]
    },

    // ── Example 2.10: Two Events ──────────────────────────────────────────
    {
      id: "les-1-3-1-4",
      title: "Ex 2.10: Coordinate Transformation",
      description: "Ex: Transforming coordinates of two events",
      icon: "MapPin",
      slides: [
        {
          id: "ex210-q",
          type: "example_q",
          title: "Example 2.10",
          content: "**Problem:** Two events occur in frame S.\nEvent 1: $x_1 = 0$, $t_1 = 0$.\nEvent 2: $x_2 = 100$ m, $t_2 = 0$ (simultaneous in S).\n\nFrame S' moves at $v = 0.6c$ along +x.\nFind coordinates in S'.\n\n$\\gamma = 1/\\sqrt{1-0.6^2} = 1.25$."
        },
        {
          id: "ex210-sol",
          type: "proof",
          title: "Solution",
          content: "Use $x' = \\gamma(x-vt)$ and $t' = \\gamma(t - vx/c^2)$.",
          interactiveSteps: [
            {
              stepText: "**Event 1:** $x_1=0, t_1=0$. Since Lorentz linear/homogeneous, $x'_1 = 0, t'_1 = 0$."
            },
            {
              prompt: "**Event 2:** Calculate $x'_2 = \\gamma(x_2 - v t_2)$.",
              stepText: "$x'_2 = 1.25(100 - 0) = 125$ m.",
              options: [
                { id: "A", text: "125 m", isCorrect: true, explanation: "Simple length expansion of the coordinate gap?" },
                { id: "B", text: "80 m", isCorrect: false, explanation: "Careful! $\\Delta x' = \\gamma \\Delta x$ for simultaneous events in S. This is NOT length contraction (which involves simultaneous in S')." }
              ]
            },
            {
              prompt: "**Event 2:** Calculate $t'_2 = \\gamma(t_2 - v x_2/c^2)$.",
              stepText: "$t'_2 = 1.25(0 - (0.6c)(100)/c^2) = 1.25(-60/c) = -75/c = -2.5 \\times 10^{-7}$ s.",
              options: [
                { id: "A", text: "$-250$ ns", isCorrect: true, explanation: "Negative time! Event 2 happens *before* Event 1 in S'." },
                { id: "B", text: "0 ns", isCorrect: false, explanation: "Simultaneity is relative." }
              ]
            }
          ]
        },
        {
          id: "ex210-conc",
          type: "quiz",
          title: "Interpretation",
          content: "In S, events were simultaneous. In S', Event 2 happened **before** Event 1. What does this mean?",
          options: [
            { id: "A", text: "Causality is violated.", isCorrect: false, explanation: "These events are spacelike separated ($c\Delta t < \Delta x$). They cannot cause each other, so order reversal is allowed." },
            { id: "B", text: "Simultaneity is relative to the observer.", isCorrect: true, explanation: "Observers disagree on time order for spacelike separated events." }
          ]
        }
      ]
    },

    // ── Example 2.11: Platform-Rocket via Lorentz ─────────────────────────
    {
      id: "les-1-3-1-5",
      title: "Ex 2.11: Rocket Revisited",
      description: "Ex: Solving the rocket problem using full Lorentz equations",
      icon: "Rocket",
      slides: [
        {
          id: "ex211-setup",
          type: "theory",
          title: "Revisiting Ex 2.6",
          content: "In Ex 2.6, we used length contraction/time dilation formulas. Now let's use the full Lorentz transformation.\n\n**Rocket (S')** proper length $L_0 = 100$ m. Speed $v = 0.8c$ ($\\gamma=1.67$).\n**Event 1:** Nose passes platform front ($x'=0, t'=0$ matches $x=0, t=0$).\n**Event 2:** Tail passes platform front ($x'=-100, t'=?$).\n\nIn platform frame S, platform front is at $x=0$. We want to find $t$ for Event 2."
        },
        {
          id: "ex211-sol",
          type: "proof",
          title: "Interactive Solution",
          content: "Map Event 2: Tail passes $x=0$. In S', tail is always at $x'=-100$.",
          interactiveSteps: [
            {
              stepText: "We know for Event 2: $x=0$ (platform front), $x'=-100$ (tail location). We need $t$."
            },
            {
              prompt: "Use $x' = \\gamma(x - vt)$. Plug in knowns.",
              stepText: "$-100 = 1.667(0 - 0.8c t) = -1.667(0.8c)t$\n$$-100 = -1.333 c t$$\n$$t = 100 / (1.333 c) = 75 / c \\approx 250 \\text{ ns}$$",
              options: [
                { id: "A", text: "250 ns", isCorrect: true, explanation: "Matches our previous result ($L/v = 60/0.8c = 250$ ns)." },
                { id: "B", text: "150 ns", isCorrect: false, explanation: "Check math." }
              ]
            }
          ]
        }
      ]
    },

    // ── Example 2.12: Invariant Interval ──────────────────────────────────
    {
      id: "les-1-3-1-6",
      title: "Ex 2.12: The Invariant Interval",
      description: "Ex: Calculating spacetime interval",
      icon: "ShieldCheck",
      slides: [
        {
          id: "inv-theory",
          type: "theory",
          title: "The Spacetime Interval",
          content: "A quantity that is the **same in all inertial frames** is called an invariant.\n\nThe **spacetime interval** $(\Delta s)^2$ is defined as:\n$$(\\Delta s)^2 = (c \Delta t)^2 - (\Delta x)^2$$\n\nProof: $(c \Delta t')^2 - (\Delta x')^2 = \dots = (c \Delta t)^2 - (\Delta x)^2$ (Try it!)."
        },
        {
          id: "ex212-q",
          type: "example_q",
          title: "Example 2.12",
          content: "Two events in S: $\\Delta x = 1500$ m, $\\Delta t = 4$ $\\mu$s.\nFind the interval $(\Delta s)^2$."
        },
        {
          id: "ex212-sol",
          type: "proof",
          title: "Calculation",
          content: "$c = 300$ m/$\\mu$s for convenience.",
          interactiveSteps: [
            {
              prompt: "Calculate $(c \Delta t)^2$.",
              stepText: "$(300 \\times 4)^2 = 1200^2 = 1,440,000$ m$^2$."
            },
            {
              prompt: "Calculate $(\Delta s)^2 = (c \Delta t)^2 - (\Delta x)^2$.",
              stepText: "$1,440,000 - 1500^2 = 1,440,000 - 2,250,000 = -810,000$ m$^2$.",
              options: [
                { id: "A", text: "$-8.1 \\times 10^5$ m$^2$", isCorrect: true, explanation: "Negative interval implies 'spacelike' separation." },
                { id: "B", text: "Positive", isCorrect: false, explanation: "$1.44M - 2.25M$ is negative." }
              ]
            }
          ]
        }
      ]
    }
  ]
};