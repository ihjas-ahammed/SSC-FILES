import { Unit } from '../types';

export const UNIT_3_2_12: Unit = {
  id: "unit-3-2-12",
  title: "Conceptual True/False",
  description: "Exercises 23-24: True/False questions on orthogonality and matrices.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-2-12-ex23", title: "Exercise 23: True/False", description: "Part 1", icon: "CheckCircle",
      slides: [
        { id: "s0", type: "quiz", title: "Question A", content: "Not every linearly independent set in $\\mathbb{R}^n$ is an orthogonal set.", options: [{id:"A", text:"True", isCorrect:true, explanation:"E.g., [1,0] and [1,1] are independent but not orthogonal."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s1", type: "quiz", title: "Question B", content: "If $\\mathbf{y}$ is a linear combination of nonzero vectors from an orthogonal set, then the weights can be computed without row operations on a matrix.", options: [{id:"A", text:"True", isCorrect:true, explanation:"This is Theorem 5 (projection formula for each weight)."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s2", type: "quiz", title: "Question C", content: "If vectors in an orthogonal set of nonzero vectors are normalized, then some of the new vectors may not be orthogonal.", options: [{id:"A", text:"True", isCorrect:false, explanation:"Scaling a vector doesn't change its angle."}, {id:"B", text:"False", isCorrect:true, explanation:"$(c\\mathbf{u}) \\cdot (d\\mathbf{v}) = cd(\\mathbf{u} \\cdot \\mathbf{v}) = 0$. They stay orthogonal."}] },
        { id: "s3", type: "quiz", title: "Question D", content: "A matrix with orthonormal columns is an orthogonal matrix.", options: [{id:"A", text:"True", isCorrect:false, explanation:"Be careful with definitions! It must be a SQUARE matrix."}, {id:"B", text:"False", isCorrect:true, explanation:"An orthogonal matrix must be square. An $m \\times n$ matrix with orthonormal columns is just a matrix with $U^T U = I$."}] },
        { id: "s4", type: "quiz", title: "Question E", content: "If $L$ is a line through $\\mathbf{0}$ and if $\\hat{\\mathbf{y}}$ is the orthogonal projection of $\\mathbf{y}$ onto $L$, then $\\|\\hat{\\mathbf{y}}\\|$ gives the distance from $\\mathbf{y}$ to $L$.", options: [{id:"A", text:"True", isCorrect:false, explanation:"Look closely at the vector used for distance."}, {id:"B", text:"False", isCorrect:true, explanation:"The distance is $\\|\\mathbf{y} - \\hat{\\mathbf{y}}\\|$, the length of the orthogonal component $\\mathbf{z}$."}] }
      ]
    },
    {
      id: "les-3-2-12-ex24", title: "Exercise 24: True/False", description: "Part 2", icon: "CheckCircle",
      slides: [
        { id: "s0", type: "quiz", title: "Question A", content: "Not every orthogonal set in $\\mathbb{R}^n$ is linearly independent.", options: [{id:"A", text:"True", isCorrect:true, explanation:"The set could contain the zero vector, making it dependent."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s1", type: "quiz", title: "Question B", content: "If a set $S = \\{\\mathbf{u}_1, \\dots, \\mathbf{u}_p\\}$ has the property that $\\mathbf{u}_i \\cdot \\mathbf{u}_j = 0$ whenever $i \\neq j$, then $S$ is an orthonormal set.", options: [{id:"A", text:"True", isCorrect:false, explanation:"It is orthogonal."}, {id:"B", text:"False", isCorrect:true, explanation:"To be orthonormal, they must ALSO be unit vectors (length 1)."}] },
        { id: "s2", type: "quiz", title: "Question C", content: "If the columns of an $m \\times n$ matrix $A$ are orthonormal, then the linear mapping $\\mathbf{x} \\mapsto A\\mathbf{x}$ preserves lengths.", options: [{id:"A", text:"True", isCorrect:true, explanation:"Theorem 7a. $\\|A\\mathbf{x}\\| = \\|\\mathbf{x}\\|$."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s3", type: "quiz", title: "Question D", content: "The orthogonal projection of $\\mathbf{y}$ onto $\\mathbf{v}$ is the same as the orthogonal projection of $\\mathbf{y}$ onto $c\\mathbf{v}$ whenever $c \\neq 0$.", options: [{id:"A", text:"True", isCorrect:true, explanation:"The projection depends on the line spanned by the vector, which is the same for $v$ and $cv$."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s4", type: "quiz", title: "Question E", content: "An orthogonal matrix is invertible.", options: [{id:"A", text:"True", isCorrect:true, explanation:"By definition, it is a square invertible matrix such that $U^{-1} = U^T$."}, {id:"B", text:"False", isCorrect:false, explanation:""}] }
      ]
    }
  ]
};