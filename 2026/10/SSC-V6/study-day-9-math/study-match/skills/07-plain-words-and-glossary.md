# Plain-language introductions and linked terms

Write all definitions and intuition-card text directly yourself. Runtime linking
may identify matching terms, but must not invent or generate educational text.

For each newly introduced concept, answer “What is it?” first. Give its category
and meaning, then a concrete mental picture, example and connection to the formal
definition. A list of properties or applications does not replace this answer.
Avoid defining one unfamiliar term only through other unfamiliar terms.

Place an intuition card immediately before the technical introduction. Fields:
type = intuition, term = glossary entry ID, title, meaning, picture, example and
bridge. All text fields are non-empty plain text. The app provides the “In plain
words” treatment and a scrollable reading area.

Example mental picture: a convex set contains the straight string joining any
two of its points. The bridge gives nonnegative coefficients adding to one.
Contrast a filled disk with its outline. An affine set keeps the whole line;
do not describe these as the same condition.

The top-level glossary is an array. Each entry has a unique id, term and direct
definition; aliases and a concrete example are optional. Define neighbourhood,
Hessian, quadratic form, proper cone and other prerequisite terms. Aliases must name the same
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

For this maths course, use explicit coordinates and 2×2 matrices before abstract
Hessian tests. Define a matrix as a rectangular array, a Hessian as a table of
second partial derivatives, an eigenvalue as a multiplier along an eigenvector,
and a quadratic form as the scalar hᵀHh. Keep neighbourhood analyticity distinct
from differentiability at one point. Give minimum and minimal separate meanings.

Glossary popups remain click/tap-only reading aids. The separate short definition
recall flow uses info.body as its correct statement; follow 08-definition-recall.md
for eight-word checks, self-comparison and match-only progression. Do not add
writing boxes to glossary popups, intuition cards, math or graphics cards.

Keep original cards' numeric IDs when inserting introductions. Intuition cards
use separate term-based IDs, and added matrix examples use explicit uid fields,
so existing answers and progress survive.
