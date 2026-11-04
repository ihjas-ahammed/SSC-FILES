export const unit7 = {
  id: 'u1_7',
  title: 'Unit 7: Equation of an Ellipse',
  lessons: [
    {
      id: 'l1_7_1',
      title: "Conic Sections",
      slides: [
        { type: 'theory', title: "Polar Equation of a Conic", content: "The general solution to the orbit equation is a conic section. The type of conic depends on the eccentricity e.", formula: "r = \\frac{p}{1 + e \\cos\\theta}" },
        { type: 'example', title: "Types of Orbits", content: "e=0 (Circle), 0<e<1 (Ellipse), e=1 (Parabola), e>1 (Hyperbola).", formula: "" },
        { type: 'proof', title: "Relating Constants", content: "By comparing the physics solution to the math equation, p = L^2 / (GMm^2).", formula: "" },
        { type: 'numerical', question: "If eccentricity e = 0, what shape is the orbit? (Enter 0 for Circle, 1 for Ellipse)", answer: "0", unit: "" },
        { type: 'mcq', question: "An orbit with eccentricity e = 1.5 is a:", options: ["Circle", "Ellipse", "Parabola", "Hyperbola"], answer: 3 },
        { type: 'mcq', question: "For an elliptical orbit, the energy E is:", options: ["Positive", "Zero", "Negative", "Imaginary"], answer: 2 },
        { type: 'fill', text: "An orbit with eccentricity e < 1 is an {blank}.", answer: "ellipse" }
      ]
    }
  ]
};