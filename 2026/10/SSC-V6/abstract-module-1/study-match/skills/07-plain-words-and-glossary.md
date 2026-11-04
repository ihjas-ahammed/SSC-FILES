# Plain-language introductions and linked terms

Write all definitions and intuition-card text directly yourself. Runtime linking
may identify matching terms, but must not invent or generate educational text.

For each newly introduced concept, answer “What is it?” first. Give its category
and meaning, then a concrete diagram (`art`) with a short caption (`picture`),
an example and a connection to the formal definition. A list of properties or
applications does not replace this answer. Avoid defining one unfamiliar term
only through other unfamiliar terms.

Place an intuition card immediately before the technical introduction. Fields:
`type = "intuition"`, `term` = glossary entry ID, `title`, `meaning`, `art`
(required: one `<svg viewBox="0 0 260 180" ...>...</svg>` string following `03-svg-art.md`), `picture` (one short
caption line under the diagram saying what to look at), `example` and `bridge`.
All text fields are non-empty plain text. The app renders `art` followed by the
`picture` caption inside the scrollable reading area.

Example mental picture: for a particle on a line, a Hilbert space is a collection
of square-integrable wave functions ψ(x), each whole function being one vector.
The bridge explains inner product and completeness. Do not call only normalized
functions a vector space: adding or scaling them need not keep unit norm.

The top-level glossary is an array. Each entry has a unique id, term and direct
definition; aliases and a concrete example are optional. Define dual space, inner
product, Cauchy sequence and other prerequisite terms. Aliases must name the same
concept, or the distinction must be explicit in the definition.

The runtime links prerequisite terms in prose. Open definitions only on a click,
tap or keyboard activation such as Enter. Hover and keyboard focus alone must not
open a popup. Escape, the close button or clicking outside closes it. Definitions
can link to prerequisites and provide a Previous term button. Do not alter TeX or
diagrams, and do not nest links inside answer buttons or form fields.

Do not link the term a card is defining, including its aliases. An intuition
card automatically excludes its term. List additional defined concepts in the
card's defines array of glossary IDs (for example, both ket and bra). A technical
definition card should also declare defines. Prerequisites remain clickable.

Explain a quantum state as the preparation description used to predict outcome
probabilities. Introduce this before using state in the definition of a ket.
For the mathematical tools chapter, start with two-entry columns and 2×2 matrices:
ket = column, bra = conjugated row, bra-ket = row-by-column scalar, outer product
= column-by-row matrix, operator = matrix acting on a column, adjoint = conjugate
transpose. Reuse one normalized state and a consistent pair of matrices for
commutators and uncertainty. Then connect this finite-dimensional picture to
wave functions; do not present a two-state example as the canonical x–p pair.

Glossary popups remain click/tap-only reading aids. The separate short definition
recall flow uses info.body as its correct statement; follow 08-definition-recall.md
for eight-word checks, self-comparison and match-only progression. Do not add
writing boxes to glossary popups, intuition cards, math or graphics cards.

Keep original cards' numeric IDs when inserting introductions. Intuition cards
use separate term-based IDs, and added matrix examples use explicit uid fields,
so existing answers and progress survive.
