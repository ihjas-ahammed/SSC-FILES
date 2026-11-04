# Convex Optimization Model Paper 4 — audit and revision

Date: 2026-10-28. Requested audit, removal of section page breaks and resend.

## Findings and changes
- Reviewed all 20 questions for mathematical correctness, assumptions, Module IV scope, repeated questions and mark arithmetic against the Chapter 5 excerpt and previous Papers 1–3.
- No incorrect question statement found. Q18 now explicitly assumes a finite primal optimal value when asking for the strict-feasibility condition for strong duality. This makes the Slater-theorem setting explicit.
- Removed the forced break before Section B and all other forced section breaks. Sections now flow naturally; each question row stays together and each section opening stays with its first question.
- Final output has two A4 pages. Sections A and B are on page 1; Section C is on page 2 because its opening and first question do not fit on page 1. No explicit section page-break rule remains.

## Mathematical checks
- Q11 and Q17 dual signs and equality constraints agree with the textbook (scalar and cone multipliers respectively).
- Q12 has primal value 0, dual supremum 0 without dual attainment, and fails Slater; the question correctly distinguishes these properties.
- Q15 rank hypotheses ensure the equality-constrained least-squares KKT system has a unique primal and equality-multiplier solution.
- Q16 Farkas alternative signs are correct.
- Q18 uses the trace inner product and positive-semidefinite dual multiplier; finite-optimum assumption is now explicit.
- Q19 has x*=2, lambda*=2, p*=d*=5; L(x,2)=5+3(x-2)^2 and L(2,lambda)=5 verify the saddle claim.
- Q20(a) requires no convexity for the implication from a finite saddle point to primal-dual optimality. Q20(b) explicitly assumes finite, equal and attained optima for complementary slackness.

## Scope and marks
- Boyd sections 5.1–5.5 and 5.8–5.9; no sensitivity-analysis questions.
- 10 questions at 3 marks, ceiling 24; 8 at 6 marks, ceiling 36; 2 at 10 marks, answer one. Maximum 70; duration two hours.
- Offered topic marks remain 32/34/32 before choices and section ceilings.
- No question from previous Papers 1–3 is reused. Definitions appear again as ingredients of new duality tasks where appropriate.
- Existing provenance preserved: two related-course LP PYQs, textbook exercises, and newly written textbook-based theory questions. The LP sources are not represented as Convex Optimization course PYQs.

## Rendering checks
Both PDF pages were rendered and visually inspected. Mathematical notation is rendered, table columns align, question rows stay together, and no section heading is orphaned. The final HTML contains no forced break-before or break-after rules.
