import { Unit } from '../types';

export const UNIT_2_1_2: Unit = {
  id: "unit-2-1-2",
  title: "Graphical Interpretation of Coordinates",
  description: "Visualizing non-standard coordinate systems and Example 3.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-1-2-graphical", title: "Graphical Interpretation", description: "How slanted grids work", icon: "Grid",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "When we use standard graph paper, the grid lines are horizontal and vertical. What happens if we use a basis $\\mathcal{B} = \\{\\mathbf{b}_1, \\mathbf{b}_2\\}$ where the vectors are not perpendicular?", options: [{id:"A", text:"The grid lines become slanted, parallel to the basis vectors.", isCorrect:true, explanation:"The coordinate system maps perfectly to a parallelogram grid."}, {id:"B", text:"We can no longer use a grid.", isCorrect:false, explanation:"We can, it just looks 'skewed'."}] },
        { id: "s1", type: "theory", title: "Graphical Coordinates", content: "A coordinate system on a set consists of a one-to-one mapping of points into $\\mathbb{R}^n$. \n\nFor example, ordinary graph paper provides a coordinate system for the plane using perpendicular axes and standard units. However, replacing the standard basis with a new basis $\\mathcal{B} = \\{\\mathbf{b}_1, \\mathbf{b}_2\\}$ creates a new grid specially adapted to that basis.\n\nThe vector $[\\mathbf{x}]_\\mathcal{B} = \\begin{bmatrix} -2 \\\\ 3 \\end{bmatrix}$ simply means starting at the origin, moving $-2$ units along the $\\mathbf{b}_1$ gridline, and $3$ units along the $\\mathbf{b}_2$ gridline." },
        { id: "s2", type: "example_q", title: "Example 3: Crystallography", content: "**Context:** In crystallography, the description of a crystal lattice is aided by choosing a basis $\\{\\mathbf{u}, \\mathbf{v}, \\mathbf{w}\\}$ for $\\mathbb{R}^3$ that corresponds to three adjacent edges of one \"unit cell\" of the crystal.\n\nAtoms are stacked throughout the lattice. An atom's position is given relative to this specialized basis." },
        { id: "s3", type: "solution", title: "Interactive Solution", content: "**Goal: Identify the coordinates of specific atoms in the cell.**", interactiveSteps: [
           { stepText: "Imagine a unit cell is a slanted box defined by $\\mathbf{u}, \\mathbf{v}, \\mathbf{w}$." },
           { prompt: "If an atom is located exactly at the center of the top face of the cell, how far along $\\mathbf{w}$ (the vertical-ish edge) is it?", options: [{id:"A", text:"$1$ unit", isCorrect:true, explanation:"The top face is entirely at the 1 unit mark along the w direction."}, {id:"B", text:"$1/2$ unit", isCorrect:false, explanation:"That would be the center of the whole box, not the top face."}], stepText: "It is $1$ unit along $\\mathbf{w}$." },
           { prompt: "Since it is in the center of that face, how far along $\\mathbf{u}$ and $\\mathbf{v}$ is it?", options: [{id:"A", text:"$1/2$ along both", isCorrect:true, explanation:"Center implies halfway along the u and v directions."}, {id:"B", text:"$1$ along both", isCorrect:false, explanation:"That would be a corner."}], stepText: "It is $1/2$ along $\\mathbf{u}$ and $1/2$ along $\\mathbf{v}$." },
           { stepText: "Thus, the coordinate vector of the top face-centered atom relative to the basis $\\{\\mathbf{u}, \\mathbf{v}, \\mathbf{w}\\}$ is:\n$$ \\begin{bmatrix} 1/2 \\\\ 1/2 \\\\ 1 \\end{bmatrix} $$" }
        ]},
        { id: "s4", type: "numerical", title: "Body-Centered Coordinates", content: "If an atom is located exactly in the dead center of the unit cell (body-centered), what is its coordinate along the $\\mathbf{u}$ axis?", numericAnswer: 0.5, numericTolerance: 0.01 }
      ]
    }
  ]
};