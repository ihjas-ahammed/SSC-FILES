import { Unit } from '../../types';

export const UNIT_2_2_1_PHOTOELECTRIC_CLASSICAL: Unit = {
  id: "unit-2-2-1",
  title: "Classical Fails: Setup & Observables",
  description: "Exp: Photoelectric tube · T: Total Breakdown of wave theory for Light & Electrons",
  color: "duo-blue",
  lessons: [
    // ── Activation ────────────────────────────────────────────────────────
    {
      id: "les-2-2-1-act",
      title: "Warm-Up: Lighting Fires",
      description: "Expectations of treating light as classical waves",
      icon: "Brain",
      slides: [
        {
          id: "pe-prime-1",
          type: "quiz",
          title: "Warm-Up",
          content: "Picture aiming a very strong sunlight onto a wet towel, trying to dry it out. In classical waving terms, if evaporation requires a certain temperature (energy), and you use a **weak flashlight** instead of the Sun, what must you do to dry the towel?",
          options: [
            { id: "A", text: "You can't: a weak light physically can never dry it out.", isCorrect: false, explanation: "If it's just 'supposed' to sum up energy steadily like money into an account, theoretically waiting long enough works." },
            { id: "B", text: "Just wait a VERY long time; eventual accumulated energy will be adequate.", isCorrect: true, explanation: "Classically, a wave distributes energy smoothly. Even a dim light, shining for house, days, or months, should build up enough 'heat' or energy (if perfectly captured!)." }
          ]
        },
        {
          id: "pe-prime-2",
          type: "quiz",
          title: "What ACTUALLY happens to electrons?",
          content: "Keep that classical wave concept in your head. When scientists shined very dim UV light straight at metal, do you expect electrons to fly off immediately or experience lag while gathering 'funds' of energy?",
          options: [
            { id: "A", text: "They experience a calculable time lag.", isCorrect: false, explanation: "That was the classical prediction and what everyone widely assumed." },
            { id: "B", text: "They fly off almost absolutely instantly! The pool is emptied instantaneously.", isCorrect: true, explanation: "They pop off less than $10^{-9}$ s later perfectly defying expectation. Prepare for the photoelectric anomaly!" }
          ]
        }
      ]
    },

    // ── Anatomy of the Set Up ─────────────────────────────────────────────
    {
      id: "les-2-2-1-exparch",
      title: "Exp Tool: The Circuit setup",
      description: "Fig 3.9 and what measurements represent.",
      icon: "LampDesk",
      slides: [
        {
          id: "circ-ex-sll",
          type: "theory",
          title: "Photoelectric Effect Apparatus",
          content: "When Light interacts favorably directly striking isolated surfaces, Electrons (Photoelectrons) eject rapidly! They flow completing a circuit inside a Vacuum Tube where we can map what occurs quantitatively leveraging $V_{ext}$ & $i$.\n\nComponents mapped: Light falls onto targeted metal piece (**Emitter**). Freed electron particles zoom down to adjacent endplate (**Collector**) resolving into direct current $i$.\n\nInstead of calculating their velocity outright computationally from impact: they are 'resisted'. Making the Collector strongly and actively negative essentially *opposes & stops electrons from making flight/landing.*"
        },
        {
          id: "pe-archidefs",
          type: "theory",
          title: "Terms definitions & Values",
          content: "**1. Stopping Potential, ($V_s$)**: External reverse potential $V$ exactly calibrated causing max peak reaching force to flatlines circuit, no current left passing (so electrons *precisely* equal out to losing speed over the final fraction gap).\n $$K_{\\max} = e V_s$$ \n\n**2. Core Bind constraint – Work Function ($\\phi$)**: It reflects exactly how vigorously materials grasp internal negative configurations keeping solid! Required lowest input payment entry possible! *eg Table 3.1: $Na=2.28\\text{eV}$, versus tough to knock loose dense blocks $Pt = 6.35\\text{eV}$.*" 
        },
        {
          id: "vis-circ",
          type: "interactive_canvas",
          title: "Interactive Schematic",
          content: "The apparatus. Negative plate prevents incoming negative mass-points. Vary input Intensity & Freq parameters",
          interactiveCanvasId: "photoelectric-setup" 
        }
      ]
    },    

    // ── The Wave Collapse - 3 specific failures ──────────────────
    {
      id: "les-2-2-1-failures",
      title: "Complete Breakdown of Wave mechanics",
      description: "Classifying failures",
      icon: "Unlink",
      slides: [
        {
           id: "clfail1",
           type: "theory",
           title: "Three Devastating Physics Misses by 1902:",
           content: "Classical theorists ran pure Maxwellian Electromagnetic properties towards this & predicted three parameters precisely observing what reality was mapping which hit walls entirely:\n\n**Failure №1: Stopping the Kinetics.** \nClassical expects Bright blinding waves shake electrons violently out yielding monstrous peaks driving far-reaching speeders $K_{MAX}$. Result? *Max KD limits $exclusively$ depends strictly zero % regarding incident pure intensity volume size.* \n\n**Failure №2: Complete Dead thresholds.** \nThey stated any beam any color should bump and squeeze objects out eventually providing sufficient size! Reality shows hard rigid limit rules: Exposing $Below Freq \\,f_b$ fails always regardless whether the 'lamp' outputs sun-equivalent wattage! (There lives definitive Cutoff thresholds!). "
        },
         {
          id: "iv-curve1",
          type: "interactive_canvas",
          title: "Graph Failure # 1 analysis: Bright doesn't boost velocity",
          content: "Bumping 2X current generation counts but leaves precisely Identical Stopping intercept! Both fall zero concurrent.",
          interactiveCanvasId: "photoelectric-iv"
        },
        {
           id: "clfail3",
           type: "theory",
           title: "Three Devastating Physics Misses .. (Cont.)",
           content: "**Failure №3: Lags. Instants lacking** \nThe expectation (computed mathematically standard size/distance models below) meant extracting heat inputs requires minutes / massive seconds buffering thresholds gathering energy spread across the wave front!\nThey proved instead literal instantaneous trigger breaks on switch operation bounding tighter than nano levels resolving fractions."
        },
        {
            id: "chk1-1x", 
            type: "quiz",
            title: "Check Your Bearings",
            content: "According entirely entirely exclusively based on classical optics assumption! IF intensity brightness directly grew up to high variables... What theoretically occurs next?",
            options: [
                {id : "OpA", text : "Number rate of specific particle count raises while all escapees maximum velocity locks strict equal parameters", isCorrect: false , explanation: "This occurs directly resulting actual REAL-WORLD conditions NOT theoretical classicals!"},
                {id : "OpC", text : "Electron speed leaving plates flies up faster having ripped harder via incoming extra strong E and B electromagnetic values", isCorrect : true, explanation : "Classically greater total force input equates purely to higher extracted work / force mapping over boundaries leading them faster."}
            ]
        }
     ]
     },
     
     // ── Ex 3.2 Time calc (wave buffering estimates) ────── ────────━━──
    {
      id: "ex3-2x1a",
      title: "Exploratory Exercise 3.2 Time lag fail",
      description: "Proffing mathematical delay numbers via classical models that contradicted literal nanometer observations.",
      icon: "Microscope",
      slides: [
         {
          id: "ex32x",
          type: "example_q",
          title: "Example 3.2: Pumping up Power Models (Classical Estimate limits)",
          content: "Let us try validating failure rate 3 mathematically evaluating true scales for classical energy deliveries! \n\nA laser beam applies standard $Intensity = 120 \\text{ W/m}^2$. Sodium target $\\phi=2.3$ eV needed exactly to free 1 parameter! \nArea space bound $A = \\approx 3.1 \\times 10^{-20}$ sqm ! \nAssume exact spread flat absorptions! *How lengthy of a span duration needed classically exactly calculating rate parameters over?*"
        },
        {
          id: "ex32q2s2",
          type: "proof",
          title: "Pumping Delay",
          content: "Let extract real $P_{ave}$ per specific single item scope first prior time resolving checks",
          interactiveSteps : [
            {
               stepText : "Power delivered down to given single spot bounds radius scales by $P = Intensity \\times Area $ where area maps single particle interaction width parameters bounds = $I A$"
            },
            {
                prompt :"Run equation metric check numbers (in watt forms bounds 1J/s), finding $P_{average}(1\\cdot e)!$",
                stepText : " $P_{ave} = 120 \\cdot 3.1 \\cdot 10^{-20} \\approx  3.72 \\dots 10^{-18} \\text{ J}/{\\text{s}}$ bounds available capturing capacities!  ",
                options  :[
                    {id:"ok1", text: "Match correctly checks values at boundaries!", isCorrect: true, explanation: "Moving onward mapping target delivery requests!"}
                 ]
             },
             {
                 prompt: "Taking sodium requirements ($\phi =2.3 \\text{eV}$). Note translation factor. How long strictly classically should release duration delays sum bounds limits? ",
                 stepText: "${Seconds} \\Delta t = \frac{Energy_{needs}}{Power_{given}}  = \\frac{ (2.3) \\frac{1.6 E -19\\text{Joules}}{\\text{eV}} }{P_{average}} = \\frac{ 3.68 E-19}{3.72 E-18} = \\approx **0.1 \\text{seconds}(!!) ** ",
                 options : [
                      {id : "b", text : "$1$ seconds", isCorrect: false , explanation: "Factor boundaries."},
                      {id : "y", text: "$0.10 \\text{s}$ (Macro boundaries delay)", isCorrect : true , explanation : "Yes perfectly exact parameters matched bounds expectations."}
                  ]
              }
            ]
          },
          { 
            id:  "concl2ex",
            type: "theory", 
            title:  "Implication analysis Ex3.2",
            content: "You literally wait a full tenth / third bounds ratio manually looking at lasers hitting simple components checking! \nBUT! Physical experimentation gives $\\Delta t _\\text{observed} << 1  (Nano\\!)\\text{-seconds} $ regardless target scales and dim limits. The mismatch implies physical light isn't a slow spread blanket layer."          
           }
        ]   
     }   
    
  ] 
};