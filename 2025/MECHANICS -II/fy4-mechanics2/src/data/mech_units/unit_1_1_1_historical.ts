import { Unit } from '../../types';

export const UNIT_1_1_1_HISTORICAL: Unit = {
  id: "unit-1-1-1",
  title: "Historical Context",
  description: "Kepler, Brahe, and the pursuit of Truth",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-1-1-1",
      title: "Kepler & Brahe",
      description: "Data meets Math",
      icon: "Telescope",
      slides: [
        {
          id: "priming",
          type: "quiz",
          title: "Priming Check",
          content: "Did Johannes Kepler formulate his laws purely by staring at the sky and using his own imagination?",
          options: [
            { id: "A", text: "Yes, he was a lonely genius.", isCorrect: false, explanation: "He actually relied heavily on someone else's work." },
            { id: "B", text: "No, he relied on precise observational data.", isCorrect: true, explanation: "Kepler synthesized the extremely accurate observational data collected by the astronomer Tycho Brahe." }
          ]
        },
        {
          id: "intuition",
          type: "quiz",
          title: "Intuition Check",
          content: "If you have the best mathematical theory in the world, but it doesn't match the experimental data, what should you do?",
          options: [
            { id: "A", text: "Discard the data", isCorrect: false, explanation: "Science doesn't work that way." },
            { id: "B", text: "Discard the theory", isCorrect: true, explanation: "Nature dictates the rules. A beautiful theory is useless if it disagrees with measurement." }
          ]
        },
        {
          id: "anchor",
          type: "theory",
          title: "The Collaboration",
          content: "In the early 1600s, the best astronomical data in Europe belonged to the eccentric Danish astronomer **Tycho Brahe**.\n\nBrahe was not a great mathematician, but he hired a young, brilliant mathematician named **Johannes Kepler**. Kepler inherited Brahe's data after Brahe's death, turning a lifetime of observations into the laws of planetary motion."
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Data to Theory",
          content: "Kepler's mathematical synthesis of Brahe's scattered data points.",
          interactiveCanvasId: "kepler-brahe-data"
        },
        {
          id: "retrieval",
          type: "fill_in_blank",
          title: "Retrieval Practice",
          content: "Kepler's most valuable contribution to physics was his analysis and synthesis of the observations of Tycho ___.",
          blankAnswer: "Brahe"
        },
        {
          id: "flashback",
          type: "quiz",
          title: "Flashback: The Graduate Student",
          content: "How is the relationship between Kepler and Brahe often described historically?",
          options: [
            { id: "A", text: "Like a modern graduate student and professor.", isCorrect: true, explanation: "Kepler (the aspiring scientist) made the pilgrimage to share the established professor's (Brahe's) knowledge and data." },
            { id: "B", text: "Equal partners from the start.", isCorrect: false, explanation: "Brahe initially wouldn't even let Kepler see the data!" }
          ]
        }
      ]
    },
    {
      id: "les-1-1-1-2",
      title: "Nested Perfect Solids",
      description: "A beautiful, wrong theory",
      icon: "Box",
      slides: [
        {
          id: "priming",
          type: "quiz",
          title: "Priming Check",
          content: "Before discovering elliptical orbits, what did Kepler initially believe dictated the spacing of the planets?",
          options: [
            { id: "A", text: "Gravity from the Sun.", isCorrect: false, explanation: "Newton discovered universal gravitation 70 years later." },
            { id: "B", text: "Geometrical perfect solids.", isCorrect: true, explanation: "He believed God used the five Platonic solids as spacers for the planets." }
          ]
        },
        {
          id: "intuition",
          type: "quiz",
          title: "Intuition Check",
          content: "How many 'Perfect' or regular convex polyhedrons (Platonic solids) exist in 3D geometry?",
          options: [
            { id: "A", text: "Infinite", isCorrect: false, explanation: "You can make infinite 2D polygons, but not 3D regular solids." },
            { id: "B", text: "Exactly Five", isCorrect: true, explanation: "Tetrahedron, Cube, Octahedron, Dodecahedron, and Icosahedron." }
          ]
        },
        {
          id: "anchor",
          type: "theory",
          title: "The Grandiose Theory",
          content: "Kepler noticed there were exactly 6 known planets and exactly 5 \"perfect\" geometric solids.\n\nHis idea: If these solids were placed one inside the other, nested with spheres, their radii would perfectly match the orbits of the planets. He saw this as a glimpse into the \"mind of God.\""
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "The Nested Solids Model",
          content: "A visualization of Kepler's original, deeply geometric model of the solar system.",
          interactiveCanvasId: "platonic-solids-model"
        },
        {
          id: "retrieval",
          type: "fill_in_blank",
          title: "Retrieval Practice",
          content: "Kepler's initial model used nested ___ solids inscribed in spheres.",
          blankAnswer: "perfect"
        },
        {
          id: "flashback",
          type: "quiz",
          title: "Flashback",
          content: "Why did Kepler eventually abandon this incredibly beautiful geometric theory?",
          options: [
            { id: "A", text: "He found a 6th perfect solid.", isCorrect: false, explanation: "Only 5 exist." },
            { id: "B", text: "It did not agree with Brahe's data.", isCorrect: true, explanation: "A prime example of physics respecting data over pure aesthetic theory." }
          ]
        }
      ]
    },
    {
      id: "les-1-1-1-3",
      title: "The Transition to Ellipses",
      description: "Abandoning circles",
      icon: "Circle",
      slides: [
        {
          id: "priming",
          type: "quiz",
          title: "Priming Check",
          content: "For thousands of years, what shape did astronomers assume all celestial bodies moved in?",
          options: [
            { id: "A", text: "Ellipses", isCorrect: false, explanation: "Ellipses were seen as imperfect." },
            { id: "B", text: "Perfect Circles", isCorrect: true, explanation: "The heavens were considered the realm of perfection, and the circle was the perfect shape." }
          ]
        },
        {
          id: "intuition",
          type: "quiz",
          title: "Intuition Check",
          content: "What forced Kepler to try slipping an elliptical orbit into his calculations for the planet Mars?",
          options: [
            { id: "A", text: "A letter from Galileo.", isCorrect: false, explanation: "Galileo was working on mechanics on Earth and early telescope observations." },
            { id: "B", text: "The data showed orbits were not even circles.", isCorrect: true, explanation: "Brahe's data for Mars simply could not be fit to a circular path, no matter how hard Kepler tried." }
          ]
        },
        {
          id: "anchor",
          type: "theory",
          title: "A Shift in Paradigm",
          content: "After a great deal of analysis, Kepler realized the orbits were **Ellipses**, not circles. \n\nIt is to Kepler's immense credit as a scientist that he respected and believed the experimental measurements over his own beautiful theory. This set the stage for modern celestial mechanics."
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Circle to Ellipse",
          content: "Breaking the assumption of celestial perfection.",
          interactiveCanvasId: "circle-to-ellipse"
        },
        {
          id: "retrieval",
          type: "fill_in_blank",
          title: "Retrieval Practice",
          content: "Kepler analyzed the orbit of the planet ___ extensively to realize orbits were elliptical.",
          blankAnswer: "Mars"
        },
        {
          id: "flashback",
          type: "quiz",
          title: "Flashback",
          content: "If a theory is beautiful but disagrees with experimental measurement, it must be:",
          options: [
            { id: "A", text: "Adjusted with a fudge factor", isCorrect: false, explanation: "That's what astronomers before him did with 'epicycles'." },
            { id: "B", text: "Discarded", isCorrect: true, explanation: "Nature determines the way things behave." }
          ]
        }
      ]
    }
  ]
};