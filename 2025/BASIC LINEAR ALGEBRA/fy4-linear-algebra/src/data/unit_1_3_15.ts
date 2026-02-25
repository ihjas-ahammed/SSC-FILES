import { Unit } from '../types';

export const UNIT_1_3_15: Unit = {
  id: "unit-1-3-15",
  title: "Linear Transformations and Dependence",
  description: "Exercises 31-32: How T maps dependent and independent sets.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-3-15-ex31", title: "Exercise 31", description: "Mapping dependent sets", icon: "Share2",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "If $\\mathbf{v}_3 = 2\\mathbf{v}_1 + 3\\mathbf{v}_2$, and $T$ is a linear transformation, what is $T(\\mathbf{v}_3)$?", options: [{id:"A", text:"$2T(\\mathbf{v}_1) + 3T(\\mathbf{v}_2)$", isCorrect:true, explanation:"Linear transformations preserve linear combinations."}, {id:"B", text:"$T(2\\mathbf{v}_1) + 3$", isCorrect:false, explanation:"Scalars are pulled entirely out."}] },
        { id: "s1", type: "example_q", title: "Exercise 31", content: "**Problem:** Show that if $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_p\\}$ is linearly dependent in $V$, then the set of images $\\{T(\\mathbf{v}_1), \\dots, T(\\mathbf{v}_p)\\}$ is linearly dependent in $W$." },
        { id: "s2", type: "proof", title: "Interactive Proof", content: "**Goal: Find a non-trivial combination equaling zero in $W$.**", interactiveSteps: [
           { stepText: "Since the original set is linearly dependent, there exist scalars $c_1, \\dots, c_p$, not all zero, such that $c_1\\mathbf{v}_1 + \\dots + c_p\\mathbf{v}_p = \\mathbf{0}$." },
           { prompt: "Apply the transformation $T$ to both sides. What is $T(c_1\\mathbf{v}_1 + \\dots + c_p\\mathbf{v}_p)$?", options: [{id:"A", text:"$c_1T(\\mathbf{v}_1) + \\dots + c_pT(\\mathbf{v}_p)$", isCorrect:true, explanation:"By linearity."}, {id:"B", text:"$T(\\mathbf{0})$", isCorrect:false, explanation:"We need to expand the left side using linearity."}], stepText: "By linearity, $c_1T(\\mathbf{v}_1) + \\dots + c_pT(\\mathbf{v}_p) = T(\\mathbf{0})$." },
           { stepText: "Since $T$ is linear, $T(\\mathbf{0}) = \\mathbf{0}$." },
           { stepText: "Thus, $c_1T(\\mathbf{v}_1) + \\dots + c_pT(\\mathbf{v}_p) = \\mathbf{0}$." },
           { stepText: "Because the weights $c_i$ are exactly the same (and not all zero), this is a non-trivial dependence relation for the images. The image set is linearly dependent." }
        ]},
        { id: "s3", type: "theory", title: "Contrapositive", content: "This fact logically proves its contrapositive: If $T$ maps a set onto a linearly **independent** set, the original set must have been linearly **independent** to begin with! (If it were dependent, the images would be dependent)." }
      ]
    },
    {
      id: "les-1-3-15-ex32", title: "Exercise 32", description: "One-to-One Transformations", icon: "Activity",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "What does it mean for $T$ to be a 'one-to-one' transformation?", options: [{id:"A", text:"$T(\\mathbf{u}) = T(\\mathbf{v})$ implies $\\mathbf{u} = \\mathbf{v}$", isCorrect:true, explanation:"Every output has exactly one unique input."}, {id:"B", text:"$T$ maps everything to $\\mathbf{0}$", isCorrect:false, explanation:"That would be the zero transformation."}] },
        { id: "s1", type: "example_q", title: "Exercise 32", content: "**Problem:** Suppose $T$ is one-to-one. Show that if the set of images $\\{T(\\mathbf{v}_1), \\dots, T(\\mathbf{v}_p)\\}$ is linearly dependent, then $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_p\\}$ is linearly dependent." },
        { id: "s2", type: "proof", title: "Interactive Proof", content: "**Goal: Work backwards from the images to the preimages.**", interactiveSteps: [
           { stepText: "Assume the image set is linearly dependent. There exist scalars $c_i$, not all zero, such that $c_1T(\\mathbf{v}_1) + \\dots + c_pT(\\mathbf{v}_p) = \\mathbf{0}$." },
           { prompt: "Use the linearity of $T$ to combine the left side into a single expression.", options: [{id:"A", text:"$T(c_1\\mathbf{v}_1 + \\dots + c_p\\mathbf{v}_p) = \\mathbf{0}$", isCorrect:true, explanation:"We factor $T$ out."}, {id:"B", text:"$T(\\mathbf{0}) = \\mathbf{0}$", isCorrect:false, explanation:""}], stepText: "We get $T(c_1\\mathbf{v}_1 + \\dots + c_p\\mathbf{v}_p) = \\mathbf{0}$." },
           { prompt: "Since $T$ is one-to-one, what is the only vector that $T$ maps to $\\mathbf{0}$?", options: [{id:"A", text:"The zero vector $\\mathbf{0}$", isCorrect:true, explanation:"$T(\\mathbf{0}) = \\mathbf{0}$, and since it's 1-to-1, nothing else maps to 0."}, {id:"B", text:"It could be any vector in the Null Space.", isCorrect:false, explanation:"If T is 1-to-1, the Null Space only contains the zero vector!"}], stepText: "Therefore, the input vector must be $\\mathbf{0}$: $c_1\\mathbf{v}_1 + \\dots + c_p\\mathbf{v}_p = \\mathbf{0}$." },
           { stepText: "Since the $c_i$ are not all zero, this provides a non-trivial dependence relation for the original vectors. They are dependent." }
        ]},
        { id: "s3", type: "fill_in_blank", title: "Summary", content: "A one-to-one linear transformation maps a linearly independent set to a linearly ___ set.", blankAnswer: "independent" }
      ]
    }
  ]
};