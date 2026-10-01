# Chapter 10 coverage and review

Source: Ross, *A First Course in Probability*, 10th ed., Chapter 10, local source `chapters/ch10.pdf` (PDF pp. 448–468); transcription `chapters/ch10.txt`; section spans verified against `chapter-manifest.json`. Prepared 2026-10-01.

This is an **extension** set for simulation and later MA/ST study. It is outside the DA core map and does not claim to complete an applied statistics simulation curriculum.

| Section | Source coverage | Concepts and practice included | Omitted / limits |
|---|---|---|---|
| 10.1 Introduction | PDF 449–451 | Monte Carlo event estimator, standard variance, uniform permutation algorithm, random assignment. Written practice proves shuffle uniformity and estimates. | Pseudorandom generator period/quality and full permutation algorithm variants are not assessed. |
| 10.2 Continuous simulation methods | PDF 452–457; subsections 10.2.1 inverse transform (452–453), 10.2.2 rejection (453–457) | Generalized inverse c.d.f., exponential/Weibull transformation, rejection envelope/acceptance proof, expected proposal count. | Normal generators (Box–Muller and polar) and gamma/chi-square algorithms are noted in the source but not given separate lessons; no implementation code is included. |
| 10.3 Discrete simulation | PDF 458–459 | Cumulative-interval inverse method, Bernoulli-sum binomial method, product-of-uniforms Poisson method. Written adaptation of Self-Test Problem 10.3. | No sampler benchmarking or implementation-dependent data structures. |
| 10.4 Variance reduction | PDF 460–463; subsections 10.4.1 antithetic variables, 10.4.2 conditioning, 10.4.3 control variates | Monte Carlo variance, antithetic covariance condition, conditional-expectation variance reduction, optimal control coefficient and minimum variance. Written adaptations of Problems 10.14 and 10.15. | The worked circle estimator is included as a focused exercise; importance sampling and broader simulation-study design are omitted. |

Nine extension concepts, eight written problems, and eight objective questions cover every main section. Every node is tier `ext`, every question maps within chapter 10, and the source problem numbers and example references shown were checked in the supplied PDF/transcription. New practice is labeled original when it is not a source adaptation.
