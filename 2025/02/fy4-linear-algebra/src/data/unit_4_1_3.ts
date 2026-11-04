import { Unit } from '../types';

export const UNIT_4_1_3: Unit = {
  id: "unit-4-1-3",
  title: "The Spectral Theorem",
  description: "Theorem 3: The Spectral Theorem for Symmetric Matrices.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-1-3-t3", title: "Theorem 3: The Spectral Theorem", description: "The definitive properties of symmetric matrices", icon: "Star",
      slides: [
        { id: "s0", type: "theory", title: "The Spectrum", content: "The set of eigenvalues of a matrix $A$ is sometimes referred to as the **spectrum** of $A$.\n\nThe following theorem summarizes everything we know about the spectrum and eigenvectors of a symmetric matrix." },
        { id: "s1", type: "theory", title: "The Spectral Theorem", content: "**Theorem 3: The Spectral Theorem for Symmetric Matrices**\n\nAn $n \\times n$ symmetric matrix $A$ has the following properties:\n\na. $A$ has $n$ real eigenvalues, counting multiplicities.\nb. The dimension of the eigenspace for each eigenvalue $\\lambda$ equals the multiplicity of $\\lambda$ as a root of the characteristic equation.\nc. The eigenspaces are mutually orthogonal, in the sense that eigenvectors corresponding to different eigenvalues are orthogonal.\nd. $A$ is orthogonally diagonalizable." },
        { id: "s2", type: "quiz", title: "Implication of Property (b)", content: "Property (b) guarantees that a symmetric matrix will never have a 'missing' eigenvector. What does this imply?", options: [{id:"A", text:"A symmetric matrix is always diagonalizable.", isCorrect:true, explanation:"Since the dimensions of eigenspaces add up exactly to n, we can always find n linearly independent eigenvectors."}, {id:"B", text:"A symmetric matrix is always invertible.", isCorrect:false, explanation:"0 can still be an eigenvalue, which would make it non-invertible."}] },
        { id: "s3", type: "quiz", title: "Real Eigenvalues", content: "Are the eigenvalues of a real symmetric matrix always real numbers?", options: [{id:"A", text:"Yes", isCorrect:true, explanation:"Property (a) guarantees this. There are no complex eigenvalues for real symmetric matrices."}, {id:"B", text:"No", isCorrect:false, explanation:""}] },
        { id: "s4", type: "fill_in_blank", title: "Summary", content: "The set of eigenvalues of a matrix is collectively called its ___.", blankAnswer: "spectrum" }
      ]
    }
  ]
};