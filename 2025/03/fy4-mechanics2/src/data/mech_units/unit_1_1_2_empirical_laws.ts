import { Unit } from '../../types';

export const UNIT_1_1_2_EMPIRICAL_LAWS: Unit = {
  id: "unit-1-1-2",
  title: "The Empirical Laws",
  description: "Orbits, Areas, and Periods",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-1-2-1",
      title: "First Law: Law of Orbits",
      description: "The Ellipse",
      icon: "Orbit",
      slides: [
        {
          id: "priming",
          type: "quiz",
          title: "Priming Check",
          content: "If the Earth's orbit is an ellipse, is the Sun located exactly at the geometric center of that ellipse?",
          options: [
            { id: "A", text: "Yes", isCorrect: false, explanation: "That would mean the distance from Earth to Sun is fairly constant across quadrants. It isn't." },
            { id: "B", text: "No", isCorrect: true, explanation: "The Sun is offset from the center, located at a specific point called a 'focus'." }
          ]
        },
        {
          id: "intuition",
          type: "quiz",
          title: "Intuition Check",
          content: "An ellipse has two foci (plural for focus). If the Sun is at one focus, what is at the other?",
          options: [
            { id: "A", text: "Another star", isCorrect: false, explanation: "We are in a single-star system." },
            { id: "B", text: "Nothing", isCorrect: true, explanation: "The second focus is an empty mathematical point in space." }
          ]
        },
        {
          id: "anchor",
          type: "theory",
          title: "Kepler's First Law",
          content: "The **Law of Orbits** states:\n\nThe orbit of a planet is an **ellipse** with the Sun at one **focus**.\n\n*(Note: These are \"empirical laws\" — derived from data, with no theoretical explanation given by Kepler at the time.)*"
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "First Law Visualized",
          content: "Notice the location of the Sun relative to the center of the ellipse.",
          interactiveCanvasId: "kepler-first-law"
        },
        {
          id: "retrieval",
          type: "fill_in_blank",
          title: "Retrieval Practice",
          content: "The orbit of a planet is an ellipse with the Sun at one ___.",
          blankAnswer: "focus"
        },
        {
          id: "flashback",
          type: "quiz",
          title: "Flashback",
          content: "Kepler's laws were based on data collected by whom?",
          options: [
            { id: "A", text: "Isaac Newton", isCorrect: false, explanation: "Newton came 70 years later and explained *why* the laws work." },
            { id: "B", text: "Tycho Brahe", isCorrect: true, explanation: "Brahe collected the massive dataset of planetary positions." }
          ]
        }
      ]
    },
    {
      id: "les-1-1-2-2",
      title: "Second Law: Law of Areas",
      description: "Areal Velocity",
      icon: "PieChart",
      slides: [
        {
          id: "priming",
          type: "quiz",
          title: "Priming Check",
          content: "Because the orbit is an ellipse, the planet's distance to the Sun changes. Does the planet move at a constant speed along its path?",
          options: [
            { id: "A", text: "Yes", isCorrect: false, explanation: "If speed were constant, the 'area' swept out wouldn't balance." },
            { id: "B", text: "No", isCorrect: true, explanation: "It speeds up when closer to the Sun and slows down when further away." }
          ]
        },
        {
          id: "intuition",
          type: "quiz",
          title: "Intuition Check",
          content: "If a line connecting the planet to the sun acts like a sweeping windshield wiper, what remains constant?",
          options: [
            { id: "A", text: "The length of the wiper", isCorrect: false, explanation: "The radius vector changes length." },
            { id: "B", text: "The area wiped per second", isCorrect: true, explanation: "This is known as constant 'areal velocity'." }
          ]
        },
        {
          id: "anchor",
          type: "theory",
          title: "Kepler's Second Law",
          content: "The **Law of Areas** states:\n\nThe radius vector of a planet (the Sun–planet line) sweeps out **equal areas in equal times**.\n\n$$ \\frac{dA}{dt} = \\text{constant} $$"
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Areal Velocity Visualized",
          content: "Short, fat wedge near the Sun equals the long, thin wedge far from the Sun.",
          interactiveCanvasId: "kepler-second-law"
        },
        {
          id: "retrieval",
          type: "fill_in_blank",
          title: "Retrieval Practice",
          content: "The constant rate at which area is swept out by the radius vector is called the ___ velocity.",
          blankAnswer: "areal"
        },
        {
          id: "flashback",
          type: "quiz",
          title: "Flashback",
          content: "Which concept explains *why* the areal velocity is constant? (Hint: Chapter 10.3 preview)",
          options: [
            { id: "A", text: "Conservation of Energy", isCorrect: false, explanation: "Energy conservation dictates speed vs distance, but angular momentum dictates the swept area." },
            { id: "B", text: "Conservation of Angular Momentum", isCorrect: true, explanation: "Since gravity is a central force, torque is zero, keeping angular momentum (and areal velocity) constant." }
          ]
        }
      ]
    },
    {
      id: "les-1-1-2-3",
      title: "Third Law: Law of Periods",
      description: "Time vs Distance",
      icon: "Clock",
      slides: [
        {
          id: "priming",
          type: "quiz",
          title: "Priming Check",
          content: "Jupiter is much farther from the Sun than Earth. Does it take Jupiter longer or shorter to complete one orbit?",
          options: [
            { id: "A", text: "Longer", isCorrect: true, explanation: "Further planets have much longer orbital periods." },
            { id: "B", text: "Shorter", isCorrect: false, explanation: "It has a larger path and moves slower." }
          ]
        },
        {
          id: "intuition",
          type: "quiz",
          title: "Intuition Check",
          content: "Is the relationship between a planet's distance ($a$) and its period ($T$) purely linear? (i.e. $T \\propto a$)",
          options: [
            { id: "A", text: "Yes", isCorrect: false, explanation: "It's a non-linear power law relationship." },
            { id: "B", text: "No", isCorrect: true, explanation: "Kepler discovered it involves squares and cubes." }
          ]
        },
        {
          id: "anchor",
          type: "theory",
          title: "Kepler's Third Law",
          content: "The **Law of Periods** states:\n\nThe period of a planet squared is proportional to the cube of the semimajor axis of its elliptical orbit.\n\n$$ T^2 \\propto a^3 $$"
        },
        {
          id: "vis",
          type: "interactive_canvas",
          title: "Period vs Distance",
          content: "Comparing inner (fast) and outer (slow) planetary orbits.",
          interactiveCanvasId: "kepler-third-law"
        },
        {
          id: "retrieval",
          type: "fill_in_blank",
          title: "Retrieval Practice",
          content: "The square of the orbital period is proportional to the ___ of the semimajor axis.",
          blankAnswer: "cube"
        },
        {
          id: "flashback",
          type: "quiz",
          title: "Flashback",
          content: "Who provided the theoretical basis and explanation for Kepler's empirical laws about 70 years later?",
          options: [
            { id: "A", text: "Albert Einstein", isCorrect: false, explanation: "Einstein updated mechanics in 1905." },
            { id: "B", text: "Isaac Newton", isCorrect: true, explanation: "He applied his law of universal gravitation." }
          ]
        }
      ]
    }
  ]
};