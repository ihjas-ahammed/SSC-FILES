export const unit6 = {
  id: 'u1_6',
  title: 'Unit 6: Equation of the Orbit',
  lessons: [
    {
      id: 'l1_6_1',
      title: "The u-Substitution",
      slides: [
        { type: 'theory', title: "Finding r(theta)", content: "To find the shape of the orbit r(θ), we eliminate time dt. A clever mathematical trick is to substitute u = 1/r.", formula: "u = \\frac{1}{r}" },
        { type: 'example', title: "Transformation", content: "This transforms a difficult non-linear differential equation into a simple linear harmonic oscillator-like equation.", formula: "\\frac{d^2u}{d\\theta^2} + u = \\frac{GMm^2}{L^2}" },
        { type: 'proof', title: "Applying the Chain Rule", content: "We rewrite dr/dt using dr/dθ and dθ/dt. Then substitute u to remove r.", formula: "\\frac{dr}{dt} = -L \\frac{du}{d\\theta}" },
        { type: 'numerical', question: "If r = 0.5, what is the value of u?", answer: "2", unit: "m⁻¹" },
        { type: 'mcq', question: "What substitution is used to find the equation of the orbit?", options: ["u = r^2", "u = 1/r", "u = r/L", "u = e^r"], answer: 1 },
        { type: 'mcq', question: "The resulting differential equation for u(θ) looks like the equation for a:", options: ["Damped oscillator", "Simple harmonic oscillator", "Wave equation", "Heat equation"], answer: 1 },
        { type: 'fill', text: "The substitution u = 1/r gives us the equation of the {blank}.", answer: "orbit" }
      ]
    }
  ]
};