export const unit1 = {
  id: 'u1_1',
  title: 'Unit 1: Kepler\'s Laws',
  lessons: [
    {
      id: 'l1_1_1',
      title: "Kepler's First Law",
      slides: [
        { type: 'theory', title: "Law of Orbits", content: "The orbit of a planet is an ellipse with the Sun at one focus.", formula: "" },
        { type: 'example', title: "Example", content: "Earth's orbit around the sun is not a perfect circle, but an ellipse. The sun is slightly off-center at one of the focal points.", formula: "" },
        { type: 'proof', title: "Simple Proof Concept", content: "Newton later showed that an inverse-square force law strictly results in conic sections (ellipse, parabola, hyperbola) for paths.", formula: "F \\propto \\frac{1}{r^2}" },
        { type: 'numerical', question: "If the semi-major axis is 1 AU and semi-minor is 0.999 AU, what is the distance in AU?", content: "Just enter the semi-major axis.", answer: "1", unit: "AU" },
        { type: 'mcq', question: "What is the shape of a planet's orbit according to Kepler's First Law?", options: ["Circle", "Ellipse", "Parabola", "Hyperbola"], answer: 1 },
        { type: 'mcq', question: "Where is the Sun located in the planetary orbit?", options: ["At the exact center", "At one of the foci", "On the orbit's edge", "Outside the ellipse"], answer: 1 },
        { type: 'fill', text: "The orbit of a planet is an {blank} with the Sun at one focus.", answer: "ellipse" }
      ]
    },
    {
      id: 'l1_1_2',
      title: "Kepler's Second Law",
      slides: [
        { type: 'theory', title: "Law of Areas", content: "The radius vector of a planet sweeps out equal areas in equal times.", formula: "\\frac{dA}{dt} = \\text{constant}" },
        { type: 'example', title: "Example", content: "A planet moves faster when closer to the sun (perihelion) and slower when further away (aphelion).", formula: "" },
        { type: 'proof', title: "Proof Concept", content: "This law is a direct mathematical consequence of the conservation of angular momentum for central forces.", formula: "\\frac{dA}{dt} = \\frac{L}{2m}" },
        { type: 'numerical', question: "If dA/dt is 5 units, what area is swept in 2 seconds?", content: "Calculate Area = (dA/dt) * t", answer: "10", unit: "units²" },
        { type: 'mcq', question: "Kepler's second law is a consequence of the conservation of what physical quantity?", options: ["Total Energy", "Linear Momentum", "Angular Momentum", "Mass"], answer: 2 },
        { type: 'mcq', question: "When does a planet move fastest in its orbit?", options: ["At aphelion (furthest)", "At perihelion (closest)", "Speed is constant", "It is random"], answer: 1 },
        { type: 'fill', text: "The radius vector sweeps out equal {blank} in equal times.", answer: "areas" }
      ]
    },
    {
      id: 'l1_1_3',
      title: "Kepler's Third Law",
      slides: [
        { type: 'theory', title: "Law of Periods", content: "The square of the period of a planet is proportional to the cube of the semimajor axis of its elliptical orbit.", formula: "T^2 \\propto a^3" },
        { type: 'example', title: "Example", content: "If we know Earth's period (1 year) and distance (1 AU), we can easily calculate the distance of Jupiter given its period.", formula: "" },
        { type: 'proof', title: "Mathematical Proof", content: "For a circular orbit, setting gravitational force equal to centripetal force yields the relation.", formula: "\\frac{GmM}{r^2} = \\frac{mv^2}{r} \\implies T^2 = \\left(\\frac{4\\pi^2}{GM}\\right)r^3" },
        { type: 'numerical', question: "If a planet has a period (T) of 8 years, what is its semimajor axis (a) in AU? (Assume T² = a³ in these units)", answer: "4", unit: "AU" },
        { type: 'mcq', question: "What does 'T' represent in Kepler's third law?", options: ["Temperature", "Tension", "Time Period", "Torque"], answer: 2 },
        { type: 'mcq', question: "T² is proportional to which power of the semimajor axis?", options: ["Square", "Cube", "Square root", "First power"], answer: 1 },
        { type: 'fill', text: "The period of a planet squared is proportional to the {blank} of the semimajor axis.", answer: "cube" }
      ]
    }
  ]
};