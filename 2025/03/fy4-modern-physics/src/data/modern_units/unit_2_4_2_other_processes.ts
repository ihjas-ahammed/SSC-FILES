import { Unit } from '../../types';

export const UNIT_2_4_2_OTHER_PROCESSES: Unit = {
  id: "unit-2-4-2",
  title: "Other Photon Processes",
  description: "Bremsstrahlung · Pair production · Photoelectric comparisons",
  color: "duo-orange",
  lessons: [
    // ── 0. Activation ─────────────────────────────────────────────────────
    {
      id: "les-2-4-2-act",
      title: "Priming: Mass and Energy",
      description: "Activate prior thinking about mass/energy equivalence",
      icon: "Brain",
      slides: [
        {
          id: "op-prime-1",
          type: "quiz",
          title: "Warm-Up Check",
          content: "Einstein's $E = mc^2$ implies that mass and energy are interchangeable. If you have enough pure energy (like a very high-energy photon), what could potentially happen?",
          options: [
            { id: "A", text: "The photon could literally turn into particles with mass.", isCorrect: true, explanation: "Yes! This is called Pair Production, where light becomes matter." },
            { id: "B", text: "Nothing, photons cannot change into matter because they lack rest mass.", isCorrect: false, explanation: "Energy is energy. If the photon has enough energy, it can create mass." }
          ]
        },
        {
          id: "op-prime-2",
          type: "quiz",
          title: "Warm-Up Check 2",
          content: "If an electron crashes into a solid wall and suddenly stops, where does its kinetic energy go?",
          options: [
            { id: "A", text: "It is destroyed completely.", isCorrect: false, explanation: "Energy cannot be destroyed." },
            { id: "B", text: "It is emitted as new photons (X-rays).", isCorrect: true, explanation: "The sudden deceleration of charges produces radiation. This is called Bremsstrahlung." }
          ]
        }
      ]
    },

    // ── 1. Bremsstrahlung ─────────────────────────────────────────────────
    {
      id: "les-2-4-2-brems",
      title: "Bremsstrahlung (Braking Radiation)",
      description: "Essentially the reverse of Photoelectric emissions",
      icon: "Radiation",
      slides: [
         {
          id: "bq-1aa",
          type: "theory",
          title: "Bremsstrahlung Processes",
          content: "In German, it translates precisely as *'Braking Radiation'*.\nRather than using photons to punch electrons loose (Photoelectric Effect), we accelerate a beam of electrons directly toward a dense metal target.\n\nThe electrons aggressively brake and curve as they pass massive atomic nuclei. \n\nThe suddenly lost kinetic energy is shed instantly by creating **a Photon (an X-Ray)**.\n\nEnergy Conservation dictates:\n\n$$hf = \\frac{hc}{\\lambda} =  K_{e,\\text{before}} - K_{e,\\text{after}} $$"
         },
         {
          id: "b-canvasq12s",
          type: "interactive_canvas",
          title: "Interaction Visualized",
          content: "An electron deflects near a nucleus and emits an X-ray photon.",
          interactiveCanvasId: "bremsstrahlung-diagram"
         }, 
         {
           id : "chkjsjaslqxl", 
            type :"quiz",
             title :"Cutoff boundaries", 
         content : "An electron can make many small collisions, losing a bit of energy each time. But what happens if the electron loses ALL of its kinetic energy $K$ in a single massive braking event?", 
           options : [
             { id:"wsa", text: "It emits a photon with the maximum possible energy, resulting in a minimum cutoff wavelength $\\lambda_{\\min} = hc / K$.", isCorrect :true , explanation: "Yes. If $K_{\\text{after}} = 0$, the photon gets all the energy, resulting in the shortest possible wavelength." },
             { id:"wsb", text: "It emits a photon with the minimum possible energy.", isCorrect: false, explanation: "If it loses all its energy, the photon gets the MAXIMUM energy, not minimum."}
           ]        
        },
        {
          id: "num-brems",
          type: "numerical",
          title: "Calculating $\\lambda_{\\min}$",
          content: "If electrons are accelerated through a potential of 10,000 V, their kinetic energy is $K = 10,000$ eV. What is the minimum wavelength $\\lambda_{\\min}$ produced? (Use $hc = 1240$ eV nm)",
          numericAnswer: 0.124,
          numericTolerance: 0.005
        }         
      ]
    },    

    // ── 2. Pair Production ────────────────────────────────────────────────
    {
      id: "les-2-4-2-pair",
      title: "Pair Production",
      description: "Creating tangible Mass strictly generating from light.",
      icon: "Infinity",
      slides: [
         {
           id: "pxqjksa13sx", 
           type:"theory", 
           title :  "Pair Production and Annihilation",          
           content : "In **Pair Production**, a photon loses all its energy and in the process two particles are created: an electron ($e^-$) and a positron ($e^+$).\n\n$$ hf  = (m_e c^2 + K_{+} ) + (m_e c^2 + K_{-} ) $$\n\nBecause $K_+$ and $K_-$ are always positive, the photon must have an energy of at least $2 m_e c^2$ for this process to occur.\n\nIn the reverse process, **Electron-Positron Annihilation**, an electron and positron collide, disappear, and are replaced by two photons moving in opposite directions (to conserve momentum)."  
         },
         {
           id: "pair-q1",
           type: "quiz",
           title: "Recoil Requirements",
           content: "Like Bremsstrahlung, Pair Production cannot happen for a free photon in empty space. It must happen near a heavy atomic nucleus. Why?",
           options: [
             { id: "A", text: "To absorb the recoil momentum.", isCorrect: true, explanation: "A single photon cannot just split into two massive particles and conserve both energy and momentum without a heavy nucleus nearby to absorb some momentum." },
             { id: "B", text: "Because the nucleus provides the energy.", isCorrect: false, explanation: "The photon provides the energy; the nucleus just anchors the momentum." }
           ]
         },
         {
              id: "cxasasaqx-x", type: "numerical", title:"Threshold Energy", 
               content :"The rest energy of an electron is $0.511$ MeV. What is the absolute minimum (threshold) energy in MeV a photon must have to undergo pair production?",
               numericAnswer: 1.022 , numericTolerance : 0.01
         }
      ]
    },    

    // ── 3. Overview table ─────────────────────────────────────────────────
    {
      id: "les-optis1gx3vj0w2y",
      title: "Consolidated Interaction Map",
      description: "Comparing all three major photon-matter interactions.",
      icon: "Network",
      slides: [
         {
          id : "zxsasa1sl2xasx", 
           type : "theory", title :  "Dominant interactions mapped",          
           content : "1. **Photoelectric Effect:** (Low energy photons, $<1$ MeV). Photon totally disappears. EJECTS a bound electron from an atom. Energy is transferred to the work function and kinetic energy.\n\n2. **Compton Scattering:** (Medium energy, $\\sim 1$ MeV). Photon scatters off a loosely bound electron. Photon SURVIVES but loses energy (longer wavelength). Electron recoils.\n\n3. **Pair Production:** (High energy, $>1.02$ MeV). Photon totally disappears near a nucleus. CREATES an electron-positron pair."                    
         },          
         {
          id: "optis1jjs0lpo011wkl1gqw",type:"quiz",title:"Identify the process",              
          content :"A 2.5 MeV gamma-ray photon enters a lead block and disappears completely, resulting in two charged particles curling in opposite directions in a magnetic field. What process occurred?",                 
          options: [
            {id: "Zq1j11aa2", text: "Pair Production", isCorrect : true , explanation : "Energy is > 1.02 MeV, photon disappears, and an electron/positron pair (which curl oppositely in magnetic fields) is created." }, 
            {id: "jasskl001i1xx", text:"Photoelectric Effect", isCorrect : false , explanation : "Photoelectric effect ejects ONE electron, not two oppositely charged particles."}
          ]
         },
         {
          id: "fitb-overview",
          type: "fill_in_blank",
          title: "Fill in the Blank",
          content: "In Compton scattering, the photon does not disappear; it merely ___ off the electron and changes its wavelength.",
          blankAnswer: "scatters"
         }     
      ]
    }     
  ]
};