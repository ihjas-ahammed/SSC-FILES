export const section2 = {
  id: 'sec_2',
  title: 'Section II: Harmonic Motion',
  units: [
    {
      id: 'u2_1',
      title: 'Unit 1: Springs and Pendulums',
      lessons: [
        {
          id: 'l2_1_1',
          title: "Simple Harmonic Motion Basics",
          slides: [
            { type: 'theory', title: "Restoring Force", content: "SHM occurs when the restoring force is proportional to the displacement from equilibrium.", formula: "F = -kx \\implies m\\ddot{x} + kx = 0" },
            { type: 'proof', title: "Energy of Undamped Oscillator", content: "Total energy is the sum of kinetic and potential energy, and remains constant over time.", formula: "E = \\frac{1}{2}m\\dot{x}^2 + \\frac{1}{2}kx^2" },
            { type: 'numerical', question: "A spring of constant k=10 N/m is stretched to x=0.5m. What is the potential energy?", content: "Use V = 0.5 * k * x^2", answer: "1.25", unit: "J" },
            { type: 'mcq', question: "In Simple Harmonic Motion, the acceleration is proportional to:", options: ["Velocity", "Displacement", "Time", "Mass"], answer: 1 },
            { type: 'fill', text: "The restoring force is negatively proportional to the {blank} from equilibrium.", answer: "displacement" }
          ]
        },
        {
          id: 'l2_1_2',
          title: "The Simple Pendulum",
          slides: [
            { type: 'theory', title: "Pendulum Equation", content: "For small angles, a simple pendulum behaves as a harmonic oscillator.", formula: "\\ddot{\\theta} + \\frac{g}{l}\\theta = 0" },
            { type: 'proof', title: "Small Angle Approximation", content: "The restoring force is mg sin(θ). For small θ, sin(θ) ≈ θ.", formula: "ml^2\\ddot{\\theta} + mgl\\theta = 0" },
            { type: 'numerical', question: "If g=9.8 m/s² and l=0.2 m, find the angular frequency squared (ω²).", answer: "49", unit: "rad²/s²" },
            { type: 'mcq', question: "The small angle approximation requires θ to be approximately less than:", options: ["90 degrees", "45 degrees", "20 degrees", "180 degrees"], answer: 2 },
            { type: 'fill', text: "For a pendulum, we approximate sin(θ) ≈ {blank} for small angles.", answer: "theta" }
          ]
        }
      ]
    },
    {
      id: 'u2_2',
      title: 'Unit 2: Damped Harmonic Oscillator',
      lessons: [
        {
          id: 'l2_2_1',
          title: "Introduction to Damping",
          slides: [
            { type: 'theory', title: "Damping Force", content: "Real oscillators lose energy due to retarding forces, often proportional to velocity.", formula: "m\\ddot{x} + b\\dot{x} + kx = 0" },
            { type: 'proof', title: "Auxiliary Equation", content: "Assuming x = e^(pt), we get a quadratic equation for p.", formula: "p^2 + \\frac{b}{m}p + \\frac{k}{m} = 0" },
            { type: 'mcq', question: "What does the term 'b' represent in the damped oscillator equation?", options: ["Spring constant", "Damping coefficient", "Mass", "Angular frequency"], answer: 1 },
            { type: 'fill', text: "A force proportional to velocity that opposes motion is called a {blank} force.", answer: "damping" }
          ]
        },
        {
          id: 'l2_2_2',
          title: "Types of Damping",
          slides: [
            { type: 'theory', title: "Under, Over, and Critical", content: "The system's behavior depends on (b/2m)² compared to k/m.", formula: "\\gamma = \\frac{b}{2m}, \\quad \\omega_0^2 = \\frac{k}{m}" },
            { type: 'mcq', question: "If (b/2m)² < k/m, the system is:", options: ["Overdamped", "Underdamped", "Critically damped", "Undamped"], answer: 1 },
            { type: 'mcq', question: "Which damping causes the system to return to equilibrium fastest without oscillating?", options: ["Underdamped", "Overdamped", "Critically damped", "None of the above"], answer: 2 },
            { type: 'fill', text: "If the roots of the auxiliary equation are complex, the system exhibits {blank} motion.", answer: "oscillatory" }
          ]
        }
      ]
    },
    {
      id: 'u2_3',
      title: 'Unit 3: Forced Oscillations & Resonance',
      lessons: [
        {
          id: 'l2_3_1',
          title: "Forced Harmonic Oscillator",
          slides: [
            { type: 'theory', title: "External Driving Force", content: "An oscillator subjected to a periodic external force will eventually oscillate at the driving frequency.", formula: "m\\ddot{x} + b\\dot{x} + kx = F_0 \\sin(\\omega_d t)" },
            { type: 'proof', title: "Particular Solution", content: "The full solution is the sum of the transient (homogeneous) and steady-state (particular) solutions.", formula: "x(t) = x_g(t) + x_p(t)" },
            { type: 'mcq', question: "The steady-state frequency of a forced oscillator is determined by:", options: ["The natural frequency", "The damping coefficient", "The driving frequency", "The initial displacement"], answer: 2 },
            { type: 'fill', text: "The solution to the inhomogeneous equation is the sum of the complementary function and the {blank} solution.", answer: "particular" }
          ]
        },
        {
          id: 'l2_3_2',
          title: "Resonance and Q Factor",
          slides: [
            { type: 'theory', title: "Resonance", content: "Amplitude peaks when the driving frequency is close to the natural frequency. The sharpness of this peak is defined by the Q factor.", formula: "Q = \\frac{\\omega_0}{\\Delta \\omega}" },
            { type: 'numerical', question: "If resonant frequency is 100 rad/s and the width at half maximum is 2 rad/s, what is the Q factor?", answer: "50", unit: "" },
            { type: 'mcq', question: "A highly damped system will have a resonance curve that is:", options: ["Tall and thin", "Short and wide", "Perfectly flat", "Inverted"], answer: 1 },
            { type: 'fill', text: "The {blank} factor measures the ratio of energy stored to energy lost per cycle.", answer: "quality" }
          ]
        }
      ]
    }
  ]
};