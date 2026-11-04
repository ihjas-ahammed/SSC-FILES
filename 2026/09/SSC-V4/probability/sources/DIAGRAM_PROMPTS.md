# Probability teaching figures

Generated with the built-in gpt-image tool. Files live in `diagrams/teaching/`; an ivory background keeps all ten diagrams readable in either theme. `app/project/probability.figs.js` records lesson mappings, proof-step captions, and alt text. Diagrams are schematic; the adjacent formulas supply exact general results.

## Prompts

### event-overlap.png

Three side-by-side panels explaining inclusion-exclusion: 1 two overlapping circles A and B inside sample space S; 2 same circles with overlap visibly highlighted and label 'Counted twice'; 3 same circles with overlap counted once and exact caption 'Add A and B, subtract the overlap'. No numbered probabilities.

### conditional-bayes.png

Three side-by-side panels: 1 sample space rectangle with overlapping events A and B; 2 zoom into B as the new sample space, highlight A intersection B; 3 branching tree starting Population, branches A and not A, each splits B and not B, highlight the two routes ending at B. Exact short captions 'Keep only B', 'Find A inside B', 'Compare the routes to B'. No numeric probabilities.

### counting.png

Three panels showing how counting works: a two-stage choice tree with 3 first choices each branching to 2 second choices, six leaves; a row of four distinctly colored objects with positions 1 to 4 representing ordered arrangements; a group of four objects with two highlighted to show unordered selection. Captions 'Multiply choices: 3 × 2 = 6', 'Order matters', 'Order does not matter'. Keep six leaves exactly.

### density.png

Three side-by-side panels illustrating continuous probability: a smooth bell-shaped probability density above horizontal axis x; same curve with the region between vertical lines a and b shaded; a cumulative distribution increasing smoothly from 0 to 1, with vertical coordinate labelled F(x). Exact captions 'Density is height', 'Probability is area', 'CDF adds area from the left'. No density y values or specific numeric probabilities.

### expectation.png

Three panels illustrating expectation by indicators: first a row of four coin outcomes H T H H, below them indicator values 1 0 1 1; second combine highlighted success tokens labelled X = I1 + I2 + I3 + I4; third four boxes each labelled p, caption 'Expected count = 4p'. Exact first caption 'Success becomes 1; failure becomes 0'. Do not imply expectation requires independent trials.

### limit-theorem.png

Three panels: 1 a clearly right-skewed individual-observation distribution, labelled 'One observation'; 2 multiple rows of small samples with arrows pointing to each sample mean, labelled 'Repeat the sampling'; 3 a symmetric bell curve labelled 'Standardized sample mean', exact caption 'For large samples, the shape approaches normal'. Footer 'Independent observations, same distribution, finite mean and positive finite variance'. Do not imply original observations become normal.

### Density correction

Use case: precise-object-edit scientific-educational diagram. Edit only the RIGHTMOST CDF panel of this probability teaching image. Remove all amber/yellow shading under the CDF curve and replace that region with the same plain ivory background. Keep the teal increasing CDF curve, the vertical line at x, axes, labels 0 and 1, dashed reference at 1 and all headings unchanged. The CDF's value F(x) is height, not area under the CDF, so add a small teal dot at the intersection of the vertical line and curve and a thin horizontal dashed guide from this dot to the vertical axis. Keep both left panels EXACTLY unchanged. Preserve dimensions and style.

### joint-distribution.png

Two panels. Left: a 2 by 2 probability table with rows X=0, X=1 and columns Y=0, Y=1. Entries are 0.30, 0.20 in first row and 0.10, 0.40 in second row. Row totals 0.50, 0.50; column totals 0.40, 0.60; grand total 1.00. Label 'Add across to find P(X)'. Right: only column Y=1, entries 0.20 and 0.40, normalized conditional probabilities 1/3 for X=0 and 2/3 for X=1. Label 'Given Y=1, divide by 0.60'. Precisely label margins and never interchange X and Y. Use exact numbers.

### tail-bound.png

Two panels. First a schematic nonnegative distribution with vertical threshold a>0 and tail to its right shaded. Caption 'Every tail outcome contributes at least a'. Formula 'E[X] ≥ a P(X ≥ a)'. Second: a schematic symmetric density centered at μ, mark μ−r and μ+r and shade both outer tails. Caption 'Apply the same idea to squared distance'. Formula 'P(|X−μ| ≥ r) ≤ Var(X)/r²'. Footer 'Markov: X ≥ 0, a > 0. Chebyshev: finite variance, r > 0.' Clear labels no numeric scales.

### markov-chain.png

Two panels illustrating a Markov chain. Left state diagram two circles Dry and Rain. Dry self-loop probability 0.8; Dry to Rain arrow 0.2; Rain to Dry arrow 0.4; Rain self-loop 0.6. Every arrow label must be correct, no extra arrows. Right tree from Dry today: tomorrow Dry probability 0.8, tomorrow Rain 0.2; from Dry tomorrow to Rain next day probability 0.2, from Rain tomorrow to Rain next day probability 0.6. Label 'Two routes to Rain in two days'. Formula '0.8 × 0.2 + 0.2 × 0.6 = 0.28'. Footer 'The next-step probabilities depend on the current state.'

### inverse-simulation.png

Two panels illustrating inverse-CDF simulation for the Uniform(2,5) distribution. Left a unit interval from 0 to 1 with one dot at U=0.4. Right number line from 2 to 5 with corresponding dot at X=3.2, arrow from left dot to right dot. Captions 'Draw U uniformly between 0 and 1' and 'Stretch by 3, then shift by 2'. Formula centered below 'X = 2 + 3U'. Footer 'Equal-length intervals remain equally likely after scaling.' No probability density curve.

### Markov support correction

Scientific accuracy correction. In the LEFT Markov inequality panel ONLY, the density for a nonnegative variable must have no curve or filled area to the left of x=0. Remove the teal curve and fill that are to the left of the vertical axis. Add a small label 0 at the horizontal-axis origin. Let the curve start at the vertical axis, then continue with the existing positive support curve and shaded tail to the right of a. Keep all formulas, labels, the right Chebyshev panel, footer, and style unchanged.
