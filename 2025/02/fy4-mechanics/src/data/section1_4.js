export const unit4 = {
  id: 'u1_4',
  title: 'Unit 4: Energy & Effective Potential',
  lessons: [
    {
      id: 'l1_4_1',
      title: "Effective Potential Energy",
      slides: [
        { type: 'theory', title: "1D Equivalent Problem", content: "By utilizing the conservation of angular momentum, the radial motion acts like a 1D problem with an 'effective' potential energy.", formula: "V_{eff}(r) = V(r) + \\frac{L^2}{2mr^2}" },
        { type: 'example', title: "Centrifugal Term", content: "The term L²/(2mr²) acts as a repulsive 'centrifugal barrier' preventing the particle from falling into the origin.", formula: "" },
        { type: 'proof', title: "Energy Conservation", content: "Total energy E = Radial KE + Effective Potential. This simplifies analyzing orbital turning points.", formula: "E = \\frac{1}{2}m\\dot{r}^2 + V_{eff}(r)" },
        { type: 'numerical', question: "If L=4, m=2, r=2, calculate the centrifugal term L²/(2mr²).", answer: "1", unit: "J" },
        { type: 'mcq', question: "What does the effective potential energy include?", options: ["Only gravitational potential", "Only kinetic energy", "Real potential + centrifugal term", "Total Energy"], answer: 2 },
        { type: 'mcq', question: "At a turning point (r_min or r_max), what is the radial velocity?", options: ["Maximum", "Zero", "Negative", "Infinite"], answer: 1 },
        { type: 'fill', text: "The term L²/(2mr²) is often called the {blank} potential.", answer: "centrifugal" }
      ]
    }
  ]
};