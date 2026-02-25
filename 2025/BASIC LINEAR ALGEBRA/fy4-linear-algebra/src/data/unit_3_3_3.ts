import { Unit } from '../types';

export const UNIT_3_3_3: Unit = {
  id: "unit-3-3-3",
  title: "The Best Approximation Theorem",
  description: "Theorem 9: Distance and approximation.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-3-3-thm9", title: "Theorem 9: Best Approximation", description: "Why projection is best", icon: "Target",
      slides: [
        { id: "s0", type: "quiz", title: "Intro Concept 1", content: "If you want to reach a point $\\mathbf{y}$ in space, but you are stuck on a plane $W$, what is the closest point on the plane to $\\mathbf{y}$?", options: [{id:"A", text:"The orthogonal projection $\\hat{\\mathbf{y}}$", isCorrect:true, explanation:"The shortest path is the perpendicular drop."}, {id:"B", text:"The origin", isCorrect:false, explanation:"Only if y is orthogonal to W."}] },
        { id: "s1", type: "quiz", title: "Intro Concept 2", content: "Is the distance $\|\mathbf{y} - \mathbf{v}\|$ ever smaller than $\|\mathbf{y} - \hat{\mathbf{y}}\|$ if $\mathbf{v}$ is in $W$ and $\mathbf{v} \neq \hat{\mathbf{y}}$?", options: [{id:"A", text:"Yes, if v is closer.", isCorrect:false, explanation:"Theorem 9 says this is impossible."}, {id:"B", text:"No, the projection minimizes the distance.", isCorrect:true, explanation:"The hypotenuse is always longer than the leg."}] },
        { id: "s2", type: "theory", title: "Theorem 9", content: "Let $W$ be a subspace of $\\mathbb{R}^n$, let $\\mathbf{y}$ be any vector in $\\mathbb{R}^n$, and let $\\hat{\\mathbf{y}}$ be the orthogonal projection of $\\mathbf{y}$ onto $W$. Then $\\hat{\\mathbf{y}}$ is the closest point in $W$ to $\\mathbf{y}$, in the sense that\n$$ \\|\\mathbf{y} - \\hat{\\mathbf{y}}\\| < \\|\\mathbf{y} - \\mathbf{v}\\| $$\nfor all $\\mathbf{v}$ in $W$ distinct from $\\hat{\\mathbf{y}}$." },
        { id: "s3", type: "interactive_canvas", title: "Visualizing Best Approximation", content: "Notice that the perpendicular distance (blue line) is shorter than any other path (dotted line) to the plane.", interactiveCanvasId: "best-approx-interactive" },
        { id: "s4", type: "proof", title: "Interactive Proof", content: "**Goal: Use Pythagorean Theorem.**", interactiveSteps: [
           { stepText: "Let $\\mathbf{v}$ be in $W$ with $\\mathbf{v} \\neq \\hat{\\mathbf{y}}$." },
           { stepText: "We can write $\\mathbf{y} - \\mathbf{v} = (\\mathbf{y} - \\hat{\\mathbf{y}}) + (\\hat{\\mathbf{y}} - \\mathbf{v})$." },
           { prompt: "Observe the two terms. $(\\mathbf{y} - \\hat{\\mathbf{y}})$ is $\\mathbf{z} \\in W^\\perp$. What about $(\\hat{\\mathbf{y}} - \\mathbf{v})$?", options: [{id:"A", text:"It is in $W$.", isCorrect:true, explanation:"Difference of two vectors in subspace W is in W."}, {id:"B", text:"It is in $W^\\perp$.", isCorrect:false, explanation:""}], stepText: "So we have a sum of orthogonal vectors." },
           { prompt: "Apply Pythagorean Theorem.", options: [{id:"A", text:"$\\|\\mathbf{y} - \\mathbf{v}\\|^2 = \\|\\mathbf{y} - \\hat{\\mathbf{y}}\\|^2 + \\|\\hat{\\mathbf{y}} - \\mathbf{v}\\|^2$", isCorrect:true, explanation:"Hypotenuse squared equals sum of legs squared."}, {id:"B", text:"$\\|\\mathbf{y} - \\mathbf{v}\\| = \\|\\mathbf{y} - \\hat{\\mathbf{y}}\\| + \\|\\hat{\\mathbf{y}} - \\mathbf{v}\\|$", isCorrect:false, explanation:"Norms don't add linearly like that (triangle inequality is strict)."}], stepText: "Since $\\hat{\\mathbf{y}} \\neq \\mathbf{v}$, the term $\\|\\hat{\\mathbf{y}} - \\mathbf{v}\\|^2$ is strictly positive." },
           { stepText: "Therefore, $\\|\\mathbf{y} - \\mathbf{v}\\|^2 > \\|\\mathbf{y} - \\hat{\\mathbf{y}}\\|^2$. Taking square roots gives the result." }
        ]},
        { id: "s5", type: "fill_in_blank", title: "Definition", content: "The distance from $\\mathbf{y}$ to the subspace $W$ is defined as the length of the vector ___.", blankAnswer: "z" }
      ]
    }
  ]
};