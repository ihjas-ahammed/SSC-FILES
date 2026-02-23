export const unit8 = {
  id: 'u1_8',
  title: 'Unit 8: Kepler\'s Laws Revisited',
  lessons: [
    {
      id: 'l1_8_1',
      title: "Synthesizing Newton and Kepler",
      slides: [
        { type: 'theory', title: "Newton Proves Kepler", content: "Newton's laws of motion and universal gravitation mathematically derive all three of Kepler's empirical laws.", formula: "" },
        { type: 'example', title: "Areal Velocity", content: "Areal velocity is dA/dt = L/2m. Since L is constant, areal velocity is constant (Kepler's Second Law).", formula: "\\frac{dA}{dt} = \\frac{L}{2m}" },
        { type: 'proof', title: "Third Law Proof", content: "Integrating areal velocity over a full period T gives the total area of the ellipse. This yields T² ∝ a³.", formula: "T = \\frac{\\pi a b}{L/2m}" },
        { type: 'numerical', question: "If Area A = 12 and Areal Velocity = 3, what is the Period T?", content: "T = Area / Areal Velocity", answer: "4", unit: "s" },
        { type: 'mcq', question: "Kepler's laws were originally empirical. What does empirical mean?", options: ["Derived from Newton's Laws", "Based on theoretical math", "Based on observation and data", "Based on quantum mechanics"], answer: 2 },
        { type: 'mcq', question: "The exact proportionality constant in Kepler's third law depends on:", options: ["The planet's mass", "The Sun's mass", "The eccentricity", "The temperature"], answer: 1 },
        { type: 'fill', text: "Kepler's second law states that the {blank} velocity is constant.", answer: "areal" }
      ]
    }
  ]
};