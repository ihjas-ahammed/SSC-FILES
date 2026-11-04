export const unit5 = {
  id: 'u1_5',
  title: 'Unit 5: Solving Radial Equation',
  lessons: [
    {
      id: 'l1_5_1',
      title: "Integrating the Equation",
      slides: [
        { type: 'theory', title: "Time as a function of r", content: "Using the energy equation, we can solve for radial velocity dr/dt, and integrate it to find the time t as a function of radius r.", formula: "t = \\int \\frac{dr}{\\sqrt{\\frac{2}{m}(E - V_{eff})}}" },
        { type: 'numerical', question: "If E = 10, V_eff = 8, m = 1, what is the radial speed |dr/dt|?", content: "Use E = 1/2 m v_r^2 + V_eff", answer: "2", unit: "m/s" },
        { type: 'mcq', question: "Integrating the energy equation gives us a relationship between:", options: ["r and theta", "r and time", "theta and time", "Energy and mass"], answer: 1 },
        { type: 'mcq', question: "To solve the integral analytically, the constants E and L must be:", options: ["Zero", "Known", "Variable", "Negative"], answer: 1 },
        { type: 'fill', text: "We isolate dr/dt and {blank} to find time t.", answer: "integrate" }
      ]
    }
  ]
};