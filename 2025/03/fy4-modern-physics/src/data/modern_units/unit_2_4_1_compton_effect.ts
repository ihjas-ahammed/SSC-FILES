import { Unit } from '../../types';

export const UNIT_2_4_1_COMPTON_EFFECT: Unit = {
  id: "unit-2-4-1",
  title: "The Compton Effect",
  description: "Exp: X-ray photon scattering · Der: Shifts · Math Ex 3.8, Ex 3.9",
  color: "duo-blue",
  lessons: [
    // ── 1. Activation ─────────────────────────────────────────────────────
    {
      id: "les-2-4-1-act",
      title: "Priming: Light Collisions",
      description: "Activate prior thinking",
      icon: "Brain",
      slides: [
        {
          id: "omp-qq1",
          type: "quiz",
          title: "Warm-Up Check",
          content: "If a billiard ball hits a stationary cue ball, it transfers some of its energy. If we treat light as a rigid particle (photon) making a clean elastic collision with an electron, what must happen to the photon's energy?",
          options: [
            { id: "A", text: "It must decrease, passing kinetic energy to the electron.", isCorrect: true, explanation: "Conservation of energy! Since the electron moves, the photon must lose energy." },
            { id: "B", text: "It remains exactly the same; it's a wave bouncing off.", isCorrect: false, explanation: "If it were a perfect wave, its speed and frequency might remain unshifted in standard reflections, but as a Particle, energy must be shed." }
          ]
        },
        {
          id: "omp-qq2",
          type: "quiz",
          title: "From Energy to Wavelength",
          content: "If that photon loses energy (but stays a photon), how will it look afterwards?",
          options: [
            { id: "A", text: "It will move slower than $c$.", isCorrect: false, explanation: "Photons MUST always travel at $c$. $v$ NEVER drops." },
            { id: "B", text: "Its wavelength will INCREASE (it gets redder).", isCorrect: true, explanation: "Since $E = hf = hc/\\lambda$, if $E$ decreases, $\\lambda$ MUST increase." }
          ]
        }
      ]
    },

    // ── 2. Compton Experiment & Setup ─────────────────────────────────────
    {
      id: "les-2-4-1-comp-exst",
      title: "Compton's Experiment",
      description: "Direct observation of X-Ray Scattering",
      icon: "Activity",
      slides: [
        {
          id: "c-exp-bg",
          type: "theory",
          title: "Compton Scattering Setup (1923)",
          content: "Arthur Compton fired a beam of X-rays having a precise wavelength $\\lambda$ at a target of carbon. Carbon was chosen because its outer electrons are so loosely bound they effectively behave as *free, stationary particles* against the intense energy of an incoming X-ray.\n\nClassically, oscillating electromagnetic waves should cause electrons to wiggle, radiating outgoing waves of the *identical* frequency and $\\lambda$. \n\nHowever, tracking the scattered rays via moving detectors revealed that as the deflection angle $\\theta$ grew steeper, the wavelength of the reflected X-ray fundamentally *Stretched*!"
        },
        {
           id: "c-visk1",
           type: "interactive_canvas",
           title: "Particle Billiards Geometry",
           content: "We picture light as a single particle (photon) executing a purely mechanical collision with a localized electron (mass $m_e$).",
           interactiveCanvasId: "compton-scatter"
        },
        {
          id: "cq-2s",
          type: "quiz",
          title: "Observation",
          content: "According to the observed results shown in Figure 3.20 of your textbook, what do the peaks look like at different scattering angles $\\theta$?",
          options: [
            { id: "A", text: "There is one peak that matches the initial wavelength everywhere.", isCorrect: false, explanation: "That would happen if the classical wave theory were right." },
            { id: "B", text: "Two peaks occur: a primary unshifted one, and a newly shifted peak trailing to longer $\\lambda'$ which drifts farther at greater angles.", isCorrect: true, explanation: "Correct! The stationary 'unshifted' peak occurs from scattering off whole carbon atoms rigidly resisting momentum, while the separated peak originates from free electrons." }
          ]
        },
        {
          id: "cq-impl",
          type: "quiz",
          title: "Implication",
          content: "What does the existence of the shifted wavelength peak imply about the nature of light?",
          options: [
            { id: "A", text: "Light interacts with electrons exactly like a particle undergoing a momentum-conserving collision.", isCorrect: true, explanation: "Yes! The shift perfectly matches the kinematics of a particle collision." },
            { id: "B", text: "Light waves are stretched by the gravity of the nucleus.", isCorrect: false, explanation: "Gravity is far too weak here. The effect is due to momentum transfer in a collision." }
          ]
        }
      ]
    },

    // ── 3. Theory: Compton Shift Formula ──────────────────────────────────
    {
      id: "les-2-4-1-cmpeq",
      title: "The Compton Equation",
      description: "Equations Mapping Quantum Collision Geometry",
      icon: "FunctionSquare",
      slides: [
        {
           id: "ceqz-11s",
           type: "theory",
           title: "Calculating the Wavelength penalty",
           content: "Applying strict Relativistic Dynamic conservation (Total relativistic $E$ and localized $p$) yields one of physics' most elegant and powerful derivations.\n\n**Equation 3.47:** \n$$ \\lambda' - \\lambda = \\frac{h}{m_e c} (1 - \\cos \\theta) $$\n\nWhere:\n- $\\lambda' =$ new, longer wavelength.\n- $\\lambda =$ initial incident wave.\n- $\\theta =$ Angle between incident vector and scattered photon output flight.\n- Factor $\\frac{h}{m_e c}$ is defined as the **Compton Wavelength of the electron**, structurally valued at $\\sim 0.00243 \\text{ nm}$."
        },
        {
            id: "chk-eq1xa",
            type: "quiz",
             title : "Conceptual Boundary: Maximum Yield",
             content : "From the expression $\\lambda' - \\lambda = \\frac{h}{m_ec}(1 - \\cos\\theta)$, at what viewing angle $\\theta$ will you record the largest shift in wavelength (meaning maximum energy dumped into the electron)?",
             options: [
                 { id : "X", text : "Straight forward 0 degrees", isCorrect: false, explanation: "$(1 - \\cos(0)) = 1 - 1 = 0$. No energy transfers!"},
                 { id : "Y", text : "180 degrees (direct backscatter)", isCorrect: true , explanation : "$(1 - \\cos(180)) = 1 - (-1) = 2$. It peaks out yielding $2 \\times$ Compton wavelength! Total direct head-on collision."}
             ]
        },
        {
            id: "chk-eq2xa",
            type: "quiz",
             title : "Conceptual Boundary: Minimum Yield",
             content : "If you measure the scattered X-rays at an angle of $\\theta = 0^\\circ$ (straight through), what is the shift in wavelength?",
             options: [
                 { id : "X", text : "Zero", isCorrect: true, explanation: "$(1 - \\cos(0^\\circ)) = 1 - 1 = 0$. The photon transfers no energy if it doesn't deflect."},
                 { id : "Y", text : "The Compton wavelength", isCorrect: false , explanation : "That would occur at 90 degrees."}
             ]
        },
        {
          id: "cmp-canvas1",
          type: "interactive_canvas",
          title: "Visualizing the Shift",
          content: "Notice how the scattering angle affects the energy of both the photon and the recoiling electron.",
          interactiveCanvasId: "compton-scatter"
        },
        {
          id: "fitb-comp",
          type: "fill_in_blank",
          title: "Fill in the Blank",
          content: "The quantity $h/(m_e c)$ is known as the ___ wavelength of the electron.",
          blankAnswer: "Compton"
        }
      ]
    },

    // ── 4. Deriving the Equation ──────────────────────────────────────────
    {
      id: "les-2-4-1-drcqsq",
      title: "Deriving Compton's Core",
      description: "Relativistic Kinematics Step by Step",
      icon: "ListTree",
      slides: [
         {
           id:"dr1",
           type:"theory",
           title:"Target: Equation 3.47",
           content:"**Setting up values:** \nPhoton Initial: $E = pc$ \nPhoton Final: $E' = p'c$ \nElectron Initial: System rest Energy $=  m_e c^2$ \nElectron Final: $E_e$, momentum $p_e$, exit angle $\\phi$. \n\n**Mission:** Combine conservation vectors bridging equations linking to Eq 3.47 via eliminating the unobserved variable $p_e$, $\\phi$, and $E_e$!"
         },
         {
            id: "drs2",
            type: "proof",
             title: "Derivation Mapping",
             content: "Follow Relativistic Energy rules mapping outputs bridging initial and final frameworks:\n\n**Eq 3.42b, 3.42c (Momenta components):**\n$X: \\; p = p_e \\cos\\phi + p' \\cos\\theta$\n$Y: \\; 0 = p_e \\sin\\phi - p' \\sin\\theta$ ",
             interactiveSteps: [
                {
                   prompt : "Our next step is trying to get rid of angle $\\phi$. By isolating the $p_e\\cos\\phi$ and $p_e\\sin\\phi$ terms and summing their squares uniformly! Expand what $(p_e \\cos\\phi)^2 + (p_e \\sin\\phi)^2$ equates to!",
                   stepText :"It simplifies directly to purely $(p_e)^2$ thanks to Pythagorean identity $\\cos^2\\phi+\\sin^2\\phi = 1$!\n\nTherefore, doing this to the right side constraints factors gives Eq 3.44:\n$$  p_e^2 = p^2 - 2 p p' \\cos \\theta + (p')^2$$",
                   options : [ 
                     { id: "a", text: "Proceed, I understand squared addition cancellation trick.", isCorrect : true , explanation : "Excellent. Trigonometry cancellation saves tracking arbitrary flight paths."}
                   ]
                },
                {
                   prompt: "Because we have $(p_e)^2$, we must link it toward Energy using the triangle invariant Identity equation matching! What is that Relativistic constraint relationship?",
                    stepText :"**(Eq 2.39): The Triangle Limit!** \n$E_e^2 = (p_e c)^2 + (m_e c^2)^2$, which expands by multiplying our entire squared $p_e$ above entirely universally by $c^2$ to plug it back in cleanly limiting variables completely!",
                    options : [ 
                      { id: "b" , text:"$E_{e}^2 = c^2 p_e^2 + (m_ec^2)^2$", isCorrect: true, explanation: "Correct mapping rule constraints."}
                    ]
                },
                 {
                   stepText :"Combined fully matching Conservation mapped equations boundaries, one applies pure arithmetic solving limiting fractions variables $E = pc \\rightarrow p = E/c$. Result forms equations dependencies fully mapping $\\lambda'$ variables: \n \n$$ \\frac{1}{E'} - \\frac{1}{E} = \\frac{1}{m_e c^2} (1 - \\cos\\theta) $$\nSubstituting $E = hc/\\lambda$, we obtain the final Compton formula."
                 }
             ]  
         },
         {
          id: "dr-assump",
          type: "quiz",
          title: "Assumptions Check",
          content: "In this derivation, we assume the initial electron is stationary and free. Why is this a valid assumption for outer electrons in carbon struck by X-rays?",
          options: [
            { id: "A", text: "The X-ray photon energy is vastly greater than the binding energy of the electron.", isCorrect: true, explanation: "Outer electrons are bound by only a few eV. X-rays carry thousands of eV, making the binding energy negligible." },
            { id: "B", text: "Carbon has no nucleus to bind the electrons.", isCorrect: false, explanation: "Carbon absolutely has a nucleus. The binding energy is just very small relative to the X-ray." }
          ]
         }
      ]
    },    

    // ── 5. Ex 3.8  ────────────────────────────────────────────────────────
    {
      id: "les-2-4-1-ex8",
      title: "Ex 3.8: Changing Wavelengths",
      description: "Conceptual properties of the Compton Shift",
      icon: "Eye",
      slides: [
        {
          id: "ex38-concept",
          type: "example_q",
          title: "Example 3.8 — Wavelength Source Impact",
          content: "You run the standard carbon setup shooting X-rays of $\\lambda$. Scattered output is observed at angle $\\theta$, producing photon wavelength shift $\\Delta \\lambda = \\lambda' - \\lambda $ and an electron kinetic energy $K_e$. \n\n*Question:* IF you switch to generating significantly *LARGER* incident wavelength $\\lambda$.\nWhat happens at the IDENTICAL scattering angle $\\theta$? \n(a) Does the shift $\\Delta \\lambda$ increase, decrease or stay identical?\n(b) Does ejected electron $K_e$ values increase, decrease or stay identical?  "
        },
        {
          id: "ex38-solsqq",
          type: "proof",
          title: "Exploratory Resolution",
          content: "Checking formulas mappings: $\\lambda' - \\lambda = \\frac{h}{m_e c} (1 - \\cos \\theta)$ ",
           interactiveSteps: [
              {
                prompt:"(a) Given the formula, compare the shift with input changing limitations. ",
                 stepText :"The formula for $\\Delta\\lambda$ depends strictly on the parameter constant $(h / m_e c)$ combined with the angle $\\theta$. It DOES NOT depend on the original $\\lambda$. \nSo the Shift $\\Delta \\lambda$ **remains precisely unchanged**. \n*(1 nm input = 1+shift nm out. 5nm input = 5+shift nm out!)* ",
                 options : [ {id:"a" , text :"$\\Delta \\lambda$ remains equal and constant.", isCorrect : true , explanation : "Yes purely geometric and constant."}]
              }, 
               {
                prompt:"(b) What concerning electron configurations $K_e$ ?",
                 stepText :"If initial $\\lambda$ is larger, the initial total photon energy $E= hc/ \\lambda$ represents a **smaller total energy budget**. Since $\\Delta \\lambda$ is constant, a fixed wavelength shift on a larger wavelength represents a smaller fractional energy loss. Thus $K_e$ MUST **Decrease**.",
                 options : [ {id:"b" , text :"$K_e$ decreases! ", isCorrect : true , explanation : "Yes! Lower energy incident light transfers less kinetic energy to the electron."}]
              }
           ]             
        },
        {
          id: "ex38-interp",
          type: "quiz",
          title: "Physical Interpretation",
          content: "Because $\\Delta\\lambda$ is independent of the incident wavelength, why don't we observe the Compton effect with visible light bouncing off a mirror?",
          options: [
            { id: "A", text: "Visible light has a wavelength of ~500 nm. A shift of ~0.002 nm is too tiny to easily detect as a fraction of the total.", isCorrect: true, explanation: "Correct. For X-rays (~0.1 nm), a 0.002 nm shift is a measurable 2% change. For visible light, it's a 0.0004% change." },
            { id: "B", text: "Visible light doesn't interact with electrons.", isCorrect: false, explanation: "It does (e.g., photoelectric effect). The shift is just too proportionally small." }
          ]
        }
      ]
    },    

    // ── 6. Ex 3.9 Numerics ────────────────────────────────────────────────
    {
      id: "les-2-4-1-ex9",
      title: "Ex 3.9: Compton Calculation",
      description: "Direct numerical resolution",
      icon: "Calculator",
      slides: [
         {
          id: "c-ex3a91",
          type: "example_q",
          title: "Example 3.9",
          content: "X-rays of incident wavelength $\\lambda = 0.2400 \\text{ nm}$ hit and scatter. We observe them at an angle of $\\theta = 60.0^\\circ$ .\n\nFind:\n(a) Scattered wavelength $\\lambda'$ \n(b) Kinetic energy of the scattered electron $K_e$."
        },
        { 
             id: "e0jnn33nsxl12as", 
             type: "numerical" ,  
             title: "Computing Wavelength",
             content: "$$\\lambda' = \\lambda + (0.00243 \\text{ nm}) ( 1 - \\cos(60^\\circ) )$$ \n Compute the final wavelength in nm. ($\\cos 60^\\circ = 0.5$)",
               numericAnswer: 0.2412 , 
               numericTolerance: 0.0005
        },
         {
           id: "1as2qds-eq2aasszx" , type: "proof", 
           title : "Remaining outputs",
           content : "Now calculate the energies.", 
           interactiveSteps:[
             {
               stepText:"$$ E'_{\\text{photon}} = \\frac{1240 \\text{ eV}\\cdot\\text{nm}} {0.2412 \\text{ nm}} = 5141 \\text{ eV} $$ "
             },
             {
             prompt :"If incident $E_{\\text{initial}} = hc/ \\lambda_{\\text{original}} = 1240 / 0.2400 = 5167 \\text{ eV}$, what is the kinetic energy of the electron $K_e$?",          
             stepText :"$$ K_{e} = E_{\\text{initial}} - E'_{\\text{final}}  $$\n \n$$ = ( 5167 \\text{ eV} )  -  ( 5141  \\text{ eV} ) =  26  \\text{ eV} $$",            
                   options : [ {id:"wxxazswwqa1" , text: "$26 \\text{ eV} $ ", isCorrect : true , explanation : "Yes purely balancing equations!"}]            }
           ]             
         },
         {
           id: "num-followup",
           type: "numerical",
           title: "Follow-up",
           content: "If the angle was $\\theta = 90^\\circ$, what would $\\lambda'$ be? (Use $\\cos 90^\\circ = 0$)",
           numericAnswer: 0.2424,
           numericTolerance: 0.0005
         }
      ]
    }
  ]
};