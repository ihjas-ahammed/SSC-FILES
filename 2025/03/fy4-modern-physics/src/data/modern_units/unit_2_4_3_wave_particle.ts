import { Unit } from '../../types';

export const UNIT_2_4_3_WAVE_PARTICLE: Unit = {
  id: "unit-2-4-3",
  title: "Particles or Waves",
  description: "T: Duality and Complementarity",
  color: "duo-pink",
  lessons: [
    // ── Introduction to the Duality Paradox ──────────────────────────────
    {
      id: "les-2-4-3-1",
      title: "Wave-Particle Duality",
      description: "How can it possibly be both?",
      icon: "AlignHorizontalCenter",
      slides: [
         {
          id: "dual-th1",
          type: "theory",
          title: "The Ultimate Dilemma",
          content: "Is Light a wave spreading evenly across space to perform interferences and diffractions? Yes, it physically perfectly maps to Maxwell.\n\nIs Light a particle, carrying exact packet bounds of $p = h/\\lambda$ and $E = hf$ to impact specifically against localized electrons instantly (Compton / Photo-electric)? Yes! \n\nNo single theory encapsulates both simultaneously. Trying to squeeze light completely into the \"Classical Wave\" mental bucket, or completely into the \"Classical Baseball Point Particle\" bucket, simply fails!"
         },
         {
            id: "chkxsxz1ssxa", 
            type :"quiz",
             title :"Logic Test", 
             content : "Which framework behavior is revealed dynamically depends strictly upon what factor?",
             options : [  
                 { id : "asaqxcqqd-qw", text : "It relies identically upon the TYPE of detector / Experiment apparatus utilized." , isCorrect :true , explanation  : "Exactly. The type of experiment we choose dictates which behavior is revealed."} , 
                 {id : "zxcasx" , text : "Its completely randomized by nature." , isCorrect: false , explanation: "Behavior is strictly determined by the experimental setup."}
            ]
        }     
      ]
    },    

    // ── Complementarity Principle ──────────────────────────────────────────
    {
      id: "les-2-4-3-2",
      title: "Complementarity Principle",
      description: "Niels Bohr philosophical parameters",
      icon: "Aperture",
      slides: [
         {
           id: "pxqjkssa1xxx-3sx", 
           type:"theory", 
           title :  "Bohr's Principle of Complementarity",          
           content : "Niels Bohr established **The Principle of Complementarity** to resolve this paradox:\n\n1. Both sets of properties (Wave and Particle) are required for a complete understanding of light (and matter).\n2. They are mutually exclusive — you cannot observe both wave and particle behaviors simultaneously in the same measurement.\n3. ONE experimental setup reveals one property, while hiding the other."  
         },
         {
           id: "comp-q1",
           type: "quiz",
           title: "Conceptual Check",
           content: "According to the principle of complementarity, if you set up a perfect double-slit experiment that clearly shows interference fringes (wave behavior), can you also perfectly track which slit each photon went through (particle behavior)?",
           options: [
             { id: "A", text: "Yes, with good enough cameras.", isCorrect: false, explanation: "No, observing the path destroys the interference pattern." },
             { id: "B", text: "No, measuring which slit it goes through destroys the wave behavior.", isCorrect: true, explanation: "You can only see one behavior at a time. If you measure the particle path, the wave interference vanishes." }
           ]
         },
         {
              id: "cxasasasaqsasax1-xxqxwx-x", type: "fill_in_blank", title:"Definitions", 
               content :"The Principle of ___ asserts that wave and particle natures cannot be observed simultaneously.",
               blankAnswer: "Complementarity"
         }
      ]
    },    

    // ── Statistical Interpretation photons double slit ─────────────────────
    {
      id: "les-optisswxza1ghn2yy",
      title: "Double-Slit with Single Photons!",
      description: "How probability connects waves and particles.",
      icon: "Fingerprint",
      slides: [
         {
          id : "zxssasajksaqqw2x2", 
           type : "theory", 
           title :  "Bridging the Gap: Probability",          
           content : "How do we connect the wave and the particle? \n\nSuppose we fire photons through a double slit *one at a time*. Each photon hits the screen at a single, localized point (particle behavior). \n\nHowever, if we wait and let millions of single photons hit the screen, their random landing spots slowly build up to form the exact interference fringes predicted by classical wave theory!\n\nThe connection: **The Classical Wave intensity dictates the Quantum Probability.**\n\n$$\\text{Probability to observe photons} \\propto |\\text{electric field amplitude}|^2$$\n\nWhere the wave is strong, many photons land. Where the wave cancels out, no photons land."          
         },   
         {
          id: "sim-photonc-x-12sa32c",
          type: "interactive_canvas",
          title: "Visualizing the impossible",
          content: "As random dots arrive singularly, they appear random. But over time, the wave interference pattern emerges.",
          interactiveCanvasId: "photon-buildup"
         },        
         {
          id: "optis1jjsxxwx0wq01aassaaqw",
          type:"quiz",
          title:"Probability Rules",              
          content :"If the electric field amplitude of a light wave at a certain spot on a screen is precisely ZERO due to destructive interference, what is the probability of a single photon striking that spot?",                 
          options: [
            {id: "Zsq1jxwsxa2", text: "Zero. No photons will ever hit there.", isCorrect : true , explanation : "Because Probability $\\propto |E|^2$. If E is 0, Probability is 0." }, 
            {id: "jasks1xxzzx", text:"50%. Particles are random.", isCorrect : false , explanation : "They are random, but their randomness is strictly guided by the wave probability distribution."}
          ]
         }     
      ]
    }     
  ]
};