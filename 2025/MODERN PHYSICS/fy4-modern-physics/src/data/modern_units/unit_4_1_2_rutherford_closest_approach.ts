import { Unit } from '../../types';

export const UNIT_4_1_2_RUTHERFORD_CLOSEST_APPROACH: Unit = {
  id: "unit-4-1-2",
  title: "The Rutherford Atom & Closest Approach",
  description: "T: The Nuclear Atom · T: Distance of Closest Approach · Ex: 6.4",
  color: "duo-red",
  lessons: [
    {
      id: "les-4-1-2-act",
      title: "Warm-Up: Concentrated Mass",
      description: "Activate prior knowledge",
      icon: "Brain",
      slides: [
        {
          id: "r-act-1",
          type: "quiz",
          title: "Priming Question",
          content: "If an alpha particle (mass 4u) collides head-on with a very light electron (mass 0.0005u), what happens to the alpha particle?",
          options: [
            { id: "A", text: "It bounces straight backward.", isCorrect: false, explanation: "A bowling ball hitting a ping-pong ball doesn't bounce backward. It plows straight through." },
            { id: "B", text: "Its path is barely affected.", isCorrect: true, explanation: "The alpha particle is 8000 times heavier than an electron. To bounce an alpha particle backward, it must hit something much heavier than itself." }
          ]
        }
      ]
    },
    {
      id: "les-4-1-2-1",
      title: "The Rutherford Nuclear Atom",
      description: "T: A concentrated nucleus",
      icon: "Target",
      slides: [
        {
          id: "ruth-theory",
          type: "theory",
          title: "The Nuclear Model",
          content: "To explain the large-angle scattering, Ernest Rutherford proposed a radical new model in 1911:\n\n1. All of the positive charge $+Ze$ and almost all of the mass of the atom are concentrated in a tiny central region called the **nucleus**.\n2. The nucleus is extremely small (diameter $\\sim 10^{-14}$ m) compared to the atom ($\\sim 10^{-10}$ m).\n3. The electrons orbit the nucleus at a large distance, making the atom mostly empty space.\n\nBecause the nucleus is so dense and highly charged, an alpha particle passing very close to it experiences an enormous Coulomb repulsive force, causing extreme hyperbolic deflections."
        },
        {
          id: "ruth-canvas",
          type: "interactive_canvas",
          title: "Rutherford Scattering",
          content: "Most alphas pass through the empty space. A rare few get too close to the nucleus and are scattered wildly.",
          interactiveCanvasId: "alpha-scattering-rutherford"
        },
        {
          id: "ruth-q1",
          type: "quiz",
          title: "Concept Check",
          content: "In Rutherford's model, why do the vast majority of alpha particles pass straight through the foil with no deflection?",
          options: [
            { id: "A", text: "Because the atom is mostly empty space.", isCorrect: true, explanation: "The nucleus is 10,000 times smaller than the atom. The chance of an alpha particle actually hitting or passing near a nucleus is incredibly small. Most just fly through the empty void between the electrons and the nucleus." },
            { id: "B", text: "Because the foil is too thin.", isCorrect: false, explanation: "Even a thin foil has tens of thousands of layers of atoms. The reason they pass through is that the atoms themselves are mostly empty." }
          ]
        }
      ]
    },
    {
      id: "les-4-1-2-2",
      title: "Distance of Closest Approach",
      description: "T: Conservation of energy in head-on collisions",
      icon: "ArrowRightLeft",
      slides: [
        {
          id: "dca-theory",
          type: "theory",
          title: "Distance of Closest Approach ($d$)",
          content: "How large is the nucleus? We can estimate its maximum size by looking at a **head-on collision**.\n\nWhen a positively charged projectile (charge $+ze$, initial kinetic energy $K$) heads directly toward a nucleus (charge $+Ze$), it slows down due to electrostatic repulsion.\n\nAt the distance of closest approach ($d$), the projectile momentarily stops. All of its initial kinetic energy has been converted into electrostatic potential energy $U$:\n$$U = \\frac{1}{4\\pi\\epsilon_0} \\frac{(ze)(Ze)}{d}$$\n\nSetting $K = U$ gives the formula for the closest approach:\n$$\\boxed{d = \\frac{1}{4\\pi\\epsilon_0} \\frac{zZe^2}{K}}$$"
        },
        {
          id: "dca-canvas",
          type: "interactive_canvas",
          title: "Head-On Collision",
          content: "The alpha particle converts all its KE into potential energy before rebounding.",
          interactiveCanvasId: "closest-approach-diagram"
        },
        {
          id: "dca-der",
          type: "proof",
          title: "Interactive Derivation",
          content: "Let's derive the formula for $d$.",
          interactiveSteps: [
            {
              stepText: "Start with conservation of energy: $K_{\\text{initial}} + U_{\\text{initial}} = K_{\\text{final}} + U_{\\text{final}}$."
            },
            {
              prompt: "Assume the alpha particle starts very far away. What is $U_{\\text{initial}}$?",
              stepText: "At $r = \\infty$, the potential energy $U_{\\text{initial}} = 0$.",
              options: [
                { id: "A", text: "$0$", isCorrect: true, explanation: "" }
              ]
            },
            {
              prompt: "At the exact moment of turnaround (closest approach $d$), what is $K_{\\text{final}}$?",
              stepText: "The particle momentarily stops, so $K_{\\text{final}} = 0$.",
              options: [
                { id: "A", text: "$0$", isCorrect: true, explanation: "" }
              ]
            },
            {
              prompt: "Equate the initial and final states: $K = U_{\\text{final}}$. Solve for $d$.",
              stepText: "$$K = \\frac{1}{4\\pi\\epsilon_0} \\frac{zZe^2}{d} \\implies d = \\frac{1}{4\\pi\\epsilon_0} \\frac{zZe^2}{K}$$",
              options: [
                { id: "A", text: "$d = \\frac{1}{4\\pi\\epsilon_0} \\frac{zZe^2}{K}$", isCorrect: true, explanation: "This distance $d$ represents an upper limit on the size of the nucleus!" }
              ]
            }
          ]
        },
        {
          id: "dca-q1",
          type: "quiz",
          title: "Physical Interpretation",
          content: "Why does the distance of closest approach $d$ represent an 'upper limit' on the size of the nucleus, rather than its exact size?",
          options: [
            { id: "A", text: "Because the alpha particle stops and turns around before it physically touches the 'surface' of the nucleus.", isCorrect: true, explanation: "The repulsion stops the alpha particle at distance $d$. Since it doesn't crash into the nucleus, we only know the nucleus must be smaller than $d$." },
            { id: "B", text: "Because the nucleus shrinks when the alpha particle approaches.", isCorrect: false, explanation: "The nucleus does not shrink." }
          ]
        }
      ]
    },
    {
      id: "les-4-1-2-3",
      title: "Ex 6.4: Alpha to Gold",
      description: "Ex: Calculating the closest approach distance",
      icon: "Calculator",
      slides: [
        {
          id: "ex64-q",
          type: "example_q",
          title: "Example 6.4 — Alpha to Gold",
          content: "**Problem:**\nFind the distance of closest approach of an $8.0$ MeV alpha particle incident head-on against a gold foil.\n\n*Constants:*\nAlpha particle: $z = 2$\nGold nucleus: $Z = 79$\n$\\frac{e^2}{4\\pi\\epsilon_0} = 1.44$ MeV·fm"
        },
        {
          id: "ex64-sol",
          type: "proof",
          title: "Interactive Solution",
          content: "Use the closest approach formula: $d = \\frac{1}{4\\pi\\epsilon_0} \\frac{zZe^2}{K}$.",
          interactiveSteps: [
            {
              stepText: "Group the constants to make the calculation easy: \n$$d = \\frac{zZ}{K} \\left( \\frac{e^2}{4\\pi\\epsilon_0} \\right)$$"
            },
            {
              prompt: "Plug in the values: $z=2$, $Z=79$, $K=8.0$ MeV.",
              stepText: "$$d = \\frac{(2)(79)}{8.0 \\text{ MeV}} (1.44 \\text{ MeV}\\cdot\\text{fm})$$",
              options: [
                { id: "A", text: "Proceed", isCorrect: true, explanation: "" }
              ]
            },
            {
              prompt: "Calculate the final distance.",
              stepText: "$$d = \\frac{158}{8.0} (1.44) = 19.75 \\times 1.44 = 28.44 \\text{ fm}$$",
              options: [
                { id: "A", text: "$28$ fm", isCorrect: true, explanation: "Correct! The alpha particle gets as close as 28 femtometers ($28 \\times 10^{-15}$ m)." }
              ]
            }
          ]
        },
        {
          id: "ex64-interp",
          type: "quiz",
          title: "Rutherford's Conclusion",
          content: "The actual physical radius of a gold nucleus is about $7$ fm. Since the alpha particle stopped at $28$ fm, did it penetrate the nucleus?",
          options: [
            { id: "A", text: "No, it remained outside the nucleus entirely.", isCorrect: true, explanation: "Because $28 > 7$, the alpha particle never touches the nuclear matter. It is repelled purely by the Coulomb force from the outside, which is why Rutherford's scattering formula worked perfectly!" },
            { id: "B", text: "Yes, it crashed into the nucleus.", isCorrect: false, explanation: "If it had crashed into the nucleus (e.g. if $K$ was much higher), the strong nuclear force would take over, and the pure Coulomb scattering formula would fail." }
          ]
        }
      ]
    },
    {
      id: "les-4-1-2-4",
      title: "Scattering Rates",
      description: "Ex: Scattering fraction and atomic number Z",
      icon: "Layers",
      slides: [
        {
          id: "rate-theory",
          type: "theory",
          title: "The Scattering Rate",
          content: "While we skip the full derivation, the final Rutherford scattering formula predicts that the number of particles $N(\\theta)$ scattered into a specific angle depends strongly on several factors:\n\n1. **Thickness ($t$):** $N \\propto t$. (Double the foil thickness, double the scattering).\n2. **Kinetic Energy ($K$):** $N \\propto 1/K^2$. (Faster particles plow through and are deflected less).\n3. **Nuclear Charge ($Z$):** $N \\propto Z^2$. (Heavier nuclei exert much stronger repulsive forces).\n\nGeiger and Marsden tested all these proportionalities experimentally and found them to be perfectly accurate."
        },
        {
          id: "rate-q1",
          type: "quiz",
          title: "Concept Check",
          content: "If you replace a gold foil ($Z=79$) with an aluminum foil ($Z=13$) of the same thickness, what will happen to the number of alpha particles scattered at large angles?",
          options: [
            { id: "A", text: "It will drastically decrease.", isCorrect: true, explanation: "Since $N \\propto Z^2$, dropping from $Z=79$ to $Z=13$ means the scattering rate drops by a factor of $(79/13)^2 \\approx 37$. Aluminum nuclei have less charge and repel much less." },
            { id: "B", text: "It will increase.", isCorrect: false, explanation: "Lower $Z$ means less repulsion." }
          ]
        },
        {
          id: "ex63-q",
          type: "example_q",
          title: "Example 6.3 — Alloy Scattering",
          content: "**Problem:**\nAlpha particles are scattered from a thin foil that is an alloy consisting of $25\\%$ gold atoms ($Z=79$) and $75\\%$ copper atoms ($Z=29$).\n\nWhat fraction of the total scattered alpha particles observed at $35^\\circ$ is due to scattering by the gold atoms?"
        },
        {
          id: "ex63-sol",
          type: "proof",
          title: "Interactive Solution",
          content: "The scattering rate depends on the number density $n$ and on $Z^2$.",
          interactiveSteps: [
            {
              stepText: "The ratio of scattering by Gold to Copper is:\n$$\\text{Ratio} = \\frac{n_{\\text{gold}} Z_{\\text{gold}}^2}{n_{\\text{copper}} Z_{\\text{copper}}^2}$$"
            },
            {
              prompt: "Plug in the percentages for $n$ and the $Z$ values: $n_{\\text{gold}}/n_{\\text{copper}} = 25/75 = 1/3$.",
              stepText: "$$\\text{Ratio} = \\frac{1}{3} \\left( \\frac{79}{29} \\right)^2 = \\frac{1}{3} (2.724)^2 = \\frac{1}{3} (7.42) = 2.47$$",
              options: [
                { id: "A", text: "Ratio = 2.47", isCorrect: true, explanation: "Gold scatters 2.47 times more particles than copper, despite copper being 3 times more abundant in the alloy!" }
              ]
            },
            {
              prompt: "Calculate the fraction of the total scattering due to gold. Fraction = Ratio / (Ratio + 1).",
              stepText: "$$\\text{Fraction} = \\frac{2.47}{2.47 + 1} = \\frac{2.47}{3.47} = 0.71$$",
              options: [
                { id: "A", text: "$71\\%$", isCorrect: true, explanation: "Because of the powerful $Z^2$ dependence, the minority gold atoms dominate the wide-angle scattering!" }
              ]
            }
          ]
        }
      ]
    }
  ]
};