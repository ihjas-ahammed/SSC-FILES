import { Unit } from '../../types';

export const UNIT_1_5_1_EXPERIMENTAL_TESTS: Unit = {
  id: "unit-1-5-1",
  title: "Experimental Tests of Relativity",
  description: "Exp: Pion decay, Muon decay, Momentum, Doppler, GPS clocks",
  color: "duo-green",
  lessons: [
    // ── Activation ────────────────────────────────────────────────────────
    {
      id: "les-1-5-1-act",
      title: "Priming: Proving Theory",
      description: "How do we know Einstein was right?",
      icon: "Brain",
      slides: [
        {
          id: "prime-1",
          type: "quiz",
          title: "Priming Question",
          content: "Special Relativity makes bizarre predictions: length contraction, time dilation, and a universal speed limit. How do physicists treat these ideas today?",
          options: [
            { id: "A", text: "As interesting mathematical hypotheses that can't be tested.", isCorrect: false, explanation: "They are tested daily!" },
            { id: "B", text: "As established facts verified by extremely precise experiments.", isCorrect: true, explanation: "Every prediction of Special Relativity has been tested and verified to astonishing precision." },
            { id: "C", text: "They are only applicable to light, not matter.", isCorrect: false, explanation: "They apply to all matter and energy." }
          ]
        }
      ]
    },

    // ── Constancy of c (Pion Decay) ───────────────────────────────────────
    {
      id: "les-1-5-1-1",
      title: "Test 1: The Speed of Light",
      description: "Exp: Pion decay photon speed measurement",
      icon: "Zap",
      slides: [
        {
          id: "exp-c-setup",
          type: "theory",
          title: "Testing the Constancy of $c$",
          content: "Einstein's Second Postulate states that light travels at $c$ regardless of the speed of the source.\n\n**The Experiment:** Neutral pions ($\\pi^0$) are produced in particle accelerators moving at an incredible speed of $v = 0.99975c$ relative to the laboratory.\n\nA neutral pion decays into two gamma rays (high-energy photons of light). \n\nWe measure the speed of the gamma rays emitted in the *forward* direction (the direction the pion was moving)."
        },
        {
          id: "exp-c-walk",
          type: "proof",
          title: "Experimental Logic",
          content: "Let's compare the classical and relativistic predictions.",
          interactiveSteps: [
            {
              stepText: "The source (the pion) is moving at $u = 0.99975c$. The light (gamma ray) is emitted forward at $c$ relative to the pion."
            },
            {
              prompt: "What would Galilean relativity predict for the speed of the gamma ray measured in the laboratory?",
              stepText: "Galilean prediction: $c' = c + u = c + 0.99975c = 1.99975c$.",
              options: [
                { id: "A", text: "Nearly $2c$", isCorrect: true, explanation: "Classically, the speeds would add." },
                { id: "B", text: "Exactly $c$", isCorrect: false, explanation: "That is the relativistic prediction." }
              ]
            },
            {
              prompt: "What was actually measured?",
              stepText: "The measured speed was $(2.9977 \\pm 0.0004) \\times 10^8$ m/s — exactly $c$!",
              options: [
                { id: "A", text: "Exactly $c$", isCorrect: true, explanation: "This provided direct, irrefutable evidence for Einstein's Second Postulate." },
                { id: "B", text: "Nearly $2c$", isCorrect: false, explanation: "No, the classical prediction failed completely." }
              ]
            }
          ]
        },
        {
          id: "exp-c-q",
          type: "quiz",
          title: "Conclusion",
          content: "What does the pion decay experiment prove?",
          options: [
            { id: "A", text: "That photons have mass.", isCorrect: false, explanation: "Photons are massless." },
            { id: "B", text: "That the speed of light emitted by a moving source does NOT depend on the source's velocity.", isCorrect: true, explanation: "Even from a source moving at $0.99975c$, the light still travels at exactly $c$ in the lab." }
          ]
        }
      ]
    },

    // ── Time Dilation (Muon Decay in Lab) ─────────────────────────────────
    {
      id: "les-1-5-1-2",
      title: "Test 2: Time Dilation",
      description: "Exp: Laboratory muon decay",
      icon: "Timer",
      slides: [
        {
          id: "exp-td-setup",
          type: "theory",
          title: "Testing Time Dilation",
          content: "We already discussed cosmic ray muons. But time dilation has also been tested with exquisite precision in the lab.\n\n**The Experiment:** Muons are created in an accelerator and trapped in a magnetic storage ring. \n\n- The proper lifetime of a muon at rest is $\\tau_0 = 2.198 \\ \\mu\\text{s}$.\n- The muons in the ring circulated with a momentum $p = 3094$ MeV/c.\n- This momentum corresponds to a highly relativistic speed where $\\gamma \\approx 29.3$."
        },
        {
          id: "exp-td-walk",
          type: "proof",
          title: "Experimental Logic",
          content: "Comparing prediction to measurement.",
          interactiveSteps: [
            {
              stepText: "According to Special Relativity, moving clocks run slow. The lifetime of the circulating muons measured in the lab should be $\\Delta t = \\gamma \\tau_0$."
            },
            {
              prompt: "Calculate the expected dilated lifetime: $\\Delta t = 29.3 \\times 2.198 \\ \\mu\\text{s}$.",
              stepText: "Expected $\\Delta t \\approx 64.4 \\ \\mu\\text{s}$.",
              options: [
                { id: "A", text: "$64.4 \\ \\mu\\text{s}$", isCorrect: true, explanation: "Correct." }
              ]
            },
            {
              prompt: "What was the measured lifetime in the lab?",
              stepText: "The measured lifetime was $64.37 \\ \\mu\\text{s}$, in spectacular agreement with the prediction!",
              options: [
                { id: "A", text: "$64.37 \\ \\mu\\text{s}$", isCorrect: true, explanation: "This verifies the time dilation formula to extremely high precision." }
              ]
            }
          ]
        }
      ]
    },

    // ── Relativistic Momentum Confirmation ────────────────────────────────
    {
      id: "les-1-5-1-3",
      title: "Test 3: Relativistic Momentum",
      description: "Exp: Electron momentum vs velocity",
      icon: "Activity",
      slides: [
        {
          id: "exp-mom-setup",
          type: "theory",
          title: "Testing Relativistic Momentum",
          content: "Classical momentum is $p = mv$. Relativistic momentum is $p = \\gamma mv$.\n\nIf we plot the ratio $p / mv$ against velocity $v/c$:\n- Classical physics predicts the ratio is always **1**.\n- Relativity predicts the ratio is $\\gamma = 1 / \\sqrt{1 - v^2/c^2}$.\n\nExperiments by Bucherer and others measured the momentum and velocity of high-energy electrons emitted in radioactive beta decay."
        },
        {
          id: "exp-mom-q",
          type: "quiz",
          title: "Experimental Result",
          content: "When the experimental data for $p / mv$ was plotted for fast electrons, what did it show?",
          options: [
            { id: "A", text: "It stayed flat at 1.0.", isCorrect: false, explanation: "That would mean classical mechanics is correct." },
            { id: "B", text: "It curved upward exactly following the $\\gamma$ curve.", isCorrect: true, explanation: "The data perfectly matched the relativistic formula, proving that momentum scales by $\\gamma$ at high speeds." }
          ]
        }
      ]
    },

    // ── Ives-Stilwell (Doppler) ───────────────────────────────────────────
    {
      id: "les-1-5-1-4",
      title: "Test 4: Relativistic Doppler",
      description: "Exp: Ives-Stilwell experiment",
      icon: "Waves",
      slides: [
        {
          id: "exp-dopp-setup",
          type: "theory",
          title: "The Ives-Stilwell Experiment (1938)",
          content: "The classical Doppler effect for sound is different from the relativistic Doppler effect for light. The relativistic formula includes a shift due purely to **time dilation**.\n\nIves and Stilwell sent a beam of hydrogen atoms down a tube at high speed. They measured the light emitted forward (approaching) and backward (receding, reflected off a mirror).\n\nIf classical theory were true, the forward and backward shifts would be exactly symmetric ($c \\pm v$). But relativity predicts a tiny asymmetry due to the time dilation factor $\\gamma$."
        },
        {
          id: "exp-dopp-q",
          type: "quiz",
          title: "Experimental Result",
          content: "Did the Ives-Stilwell experiment detect the tiny asymmetric shift predicted by relativity?",
          options: [
            { id: "A", text: "Yes", isCorrect: true, explanation: "The shift perfectly matched the relativistic prediction, providing direct evidence for time dilation affecting frequencies." },
            { id: "B", text: "No", isCorrect: false, explanation: "It did detect it. It was a crucial proof of the relativistic Doppler effect." }
          ]
        }
      ]
    },

    // ── Hafele-Keating / GPS ──────────────────────────────────────────────
    {
      id: "les-1-5-1-5",
      title: "Test 5: Clocks on Planes & GPS",
      description: "Exp: Hafele-Keating and modern GPS",
      icon: "Plane",
      slides: [
        {
          id: "exp-hk-setup",
          type: "theory",
          title: "The Hafele-Keating Experiment (1971)",
          content: "To test the Twin Paradox scenario, physicists put highly precise cesium atomic clocks on commercial airliners and flew them around the world (one eastward, one westward), then compared them to a reference clock on the ground.\n\n**Result:** The flying clocks were out of sync with the ground clock by fractions of a microsecond — exactly the amount predicted by Special Relativity (time dilation from speed) and General Relativity (time speeds up in weaker gravity at altitude)."
        },
        {
          id: "exp-gps-q",
          type: "quiz",
          title: "Modern Application: GPS",
          content: "The Global Positioning System (GPS) relies on satellites orbiting Earth at 14,000 km/h. Does GPS need to account for relativity?",
          options: [
            { id: "A", text: "No, the satellites are too slow for relativity to matter.", isCorrect: false, explanation: "At that speed, time dilation is small but significant. Light travels 300 meters in a microsecond, so a 1 microsecond clock error means a 300 meter position error!" },
            { id: "B", text: "Yes. Without relativistic corrections, GPS would fail by kilometers within a single day.", isCorrect: true, explanation: "GPS is a daily engineering proof of relativity. Satellite clocks are explicitly programmed to offset relativistic time dilation to keep them synced with Earth." }
          ]
        }
      ]
    }
  ]
};