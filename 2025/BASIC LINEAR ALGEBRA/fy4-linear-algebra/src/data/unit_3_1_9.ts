import { Unit } from '../types';

export const UNIT_3_1_9: Unit = {
  id: "unit-3-1-9",
  title: "Unit Vectors",
  description: "Exercises 9-12: Normalizing vectors to length 1.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-1-9-ex9", title: "Exercise 9", description: "Vector [-30, 40]", icon: "ArrowUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 9", content: "**Problem:** Find a unit vector in the direction of the given vector:\n$\\begin{bmatrix} -30 \\\\ 40 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Divide by the length.**", interactiveSteps: [
           { prompt: "What is the length of this vector?", options: [{id:"A", text:"50", isCorrect:true, explanation:"$\\sqrt{(-30)^2 + 40^2} = \\sqrt{900+1600} = \\sqrt{2500} = 50$."}, {id:"B", text:"70", isCorrect:false, explanation:""}], stepText: "Length is 50." },
           { stepText: "Divide the vector by 50:\n$\\mathbf{u} = \\frac{1}{50} \\begin{bmatrix} -30 \\\\ 40 \\end{bmatrix} = \\begin{bmatrix} -3/5 \\\\ 4/5 \\end{bmatrix}$." }
        ]}
      ]
    },
    {
      id: "les-3-1-9-ex10", title: "Exercise 10", description: "Vector in R3", icon: "ArrowUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 10", content: "**Problem:** Find a unit vector in the direction of:\n$\\begin{bmatrix} -6 \\\\ 4 \\\\ -3 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Solution", content: "Length squared = $(-6)^2 + 4^2 + (-3)^2 = 36 + 16 + 9 = 61$.\nLength = $\\sqrt{61}$.\n\nUnit vector = $\\begin{bmatrix} -6/\\sqrt{61} \\\\ 4/\\sqrt{61} \\\\ -3/\\sqrt{61} \\end{bmatrix}$." }
      ]
    },
    {
      id: "les-3-1-9-ex11", title: "Exercise 11", description: "Fractions", icon: "ArrowUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 11", content: "**Problem:** Find a unit vector in the direction of:\n$\\begin{bmatrix} 7/4 \\\\ 1/2 \\\\ 1 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Compute norm carefully.**", interactiveSteps: [
           { stepText: "To avoid messy fractions initially, you could scale by 4: $\\mathbf{v}' = [7, 2, 4]^T$. Its length is $\\sqrt{49+4+16} = \\sqrt{69}$." },
           { stepText: "Or work with fractions directly: Length$^2 = (7/4)^2 + (1/2)^2 + 1^2 = 49/16 + 4/16 + 16/16 = 69/16$." },
           { stepText: "Length = $\\sqrt{69}/4$." },
           { stepText: "Unit vector = $\\frac{4}{\\sqrt{69}} \\begin{bmatrix} 7/4 \\\\ 1/2 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 7/\\sqrt{69} \\\\ 2/\\sqrt{69} \\\\ 4/\\sqrt{69} \\end{bmatrix}$." }
        ]}
      ]
    },
    {
      id: "les-3-1-9-ex12", title: "Exercise 12", description: "Fractions 2", icon: "ArrowUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 12", content: "**Problem:** Find a unit vector in the direction of:\n$\\begin{bmatrix} 8/3 \\\\ 2 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Solution", content: "Scale by 3: $\\mathbf{v}' = \\begin{bmatrix} 8 \\\\ 6 \\end{bmatrix}$.\n\nThe length of this scaled vector is $\\sqrt{64+36} = \\sqrt{100} = 10$.\n\nUnit vector is $\\frac{1}{10} \\begin{bmatrix} 8 \\\\ 6 \\end{bmatrix} = \\begin{bmatrix} 4/5 \\\\ 3/5 \\end{bmatrix}$." }
      ]
    }
  ]
};