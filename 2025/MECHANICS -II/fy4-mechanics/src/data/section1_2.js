export const unit2 = {
  id: 'u1_2',
  title: 'Unit 2: Central Forces',
  lessons: [
    {
      id: 'l1_2_1',
      title: "Definition of a Central Force",
      slides: [
        { type: 'theory', title: "What is a Central Force?", content: "A central force is any force that is directed toward or away from a fixed point and whose magnitude depends only on the distance to that point.", formula: "\\mathbf{F} = f(r)\\mathbf{\\hat{r}}" },
        { type: 'numerical', question: "If f(r) = -k/r^2 and k=10, r=2, what is the magnitude of force?", answer: "-2.5", unit: "N" },
        { type: 'mcq', question: "Which of the following is an example of a central force?", options: ["Friction", "Gravitational force", "Air resistance", "Tension"], answer: 1 },
        { type: 'mcq', question: "For a central force, the magnitude depends ONLY on:", options: ["Time", "Velocity", "Distance to a fixed point", "Mass"], answer: 2 },
        { type: 'fill', text: "A central force is directed toward or away from a {blank} point.", answer: "fixed" }
      ]
    },
    {
      id: 'l1_2_2',
      title: "Angular Momentum & Central Forces",
      slides: [
        { type: 'theory', title: "Constancy of Angular Momentum", content: "A particle moving under a central force has a constant angular momentum. This implies the motion is confined to a single plane.", formula: "\\mathbf{L} = \\mathbf{r} \\times \\mathbf{p} = \\text{constant}" },
        { type: 'example', title: "Why planar motion?", content: "Since L = r x p is constant in direction, r and v must always lie in the plane perpendicular to L.", formula: "" },
        { type: 'proof', title: "Proof of Conservation", content: "Torque is the time derivative of angular momentum. Since force is parallel to r, the cross product is zero.", formula: "\\mathbf{\\tau} = \\mathbf{r} \\times \\mathbf{F} = \\mathbf{r} \\times f(r)\\mathbf{\\hat{r}} = 0" },
        { type: 'numerical', question: "A particle of mass 2 kg is in a circular orbit of radius 3 m with velocity 4 m/s. What is L?", content: "L = m*v*r", answer: "24", unit: "kg·m²/s" },
        { type: 'mcq', question: "What is the time derivative of angular momentum under a central force?", options: ["Infinity", "Zero", "Constant but non-zero", "Variable"], answer: 1 },
        { type: 'mcq', question: "Because angular momentum is conserved, planetary motion is confined to a:", options: ["Line", "Sphere", "Plane", "Hypercube"], answer: 2 },
        { type: 'fill', text: "For a central force, the {blank} momentum is constant.", answer: "angular" }
      ]
    }
  ]
};