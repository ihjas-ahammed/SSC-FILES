export const unit3 = {
  id: 'u1_3',
  title: 'Unit 3: The Equation of Motion',
  lessons: [
    {
      id: 'l1_3_1',
      title: "Equations of Motion in Polar Coordinates",
      slides: [
        { type: 'theory', title: "Newton's Second Law", content: "For a central force, we separate motion into radial and angular components. The angular component yields conservation of angular momentum.", formula: "m(\\ddot{r} - r\\dot{\\theta}^2) = f(r)" },
        { type: 'example', title: "Coupled Equations", content: "The motion is governed by two variables, r and theta. Using angular momentum, we decouple them.", formula: "\\ddot{\\theta} + \\frac{2\\dot{r}\\dot{\\theta}}{r} = 0" },
        { type: 'proof', title: "Deriving Angular Component", content: "The angular equation equates to the derivative of angular momentum.", formula: "\\frac{d}{dt}(mr^2\\dot{\\theta}) = 0" },
        { type: 'numerical', question: "If angular momentum L=10 and m=2, r=1, what is angular velocity (theta dot)?", content: "L = m * r^2 * theta_dot", answer: "5", unit: "rad/s" },
        { type: 'mcq', question: "What coordinate system is best used for central force motion?", options: ["Cartesian", "Polar", "Cylindrical", "Elliptical"], answer: 1 },
        { type: 'mcq', question: "By substituting angular momentum into the radial equation, we create a:", options: ["1D equation", "3D equation", "Static equation", "Linear equation"], answer: 0 },
        { type: 'fill', text: "Conservation of angular momentum allows us to {blank} the radial and angular equations.", answer: "decouple" }
      ]
    }
  ]
};