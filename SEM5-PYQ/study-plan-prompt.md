# Study plan day image: prompt

Use this prompt when the user uploads a day's entry (the block below, filled in for one day). Build one image for that day only.

## How to use
1. The user uploads the day's entry as a markdown block (fields: Day, Weekday, Subject, Hours, Colour, Icon, Bullets, Course coverage).
2. Build one day-card image from that entry, using the style and layout rules below.
3. Use only the text listed in the entry. Do not add other text, watermarks or a title beyond what is listed.

## Day entry format
```
- **Day:** <number>
- **Weekday:** <name>
- **Subject:** <subject name>
- **Hours:** <number>
- **Colour:** <colour name, hex if given>
- **Icon:** <short description>
- **Bullets:**
  - <topic>
  - <topic>
- **Course coverage:** <percent> covered (<n> of <total> units, using the plan's unit numbering)
```

## Style (matches the study plan poster)
- Flat illustration, pastel palette, soft shadows, rounded cards, plenty of white space.
- No photorealism. No watermark.
- Title area: bold navy text with a thin gold underline, small spaced subtitle "OCTOBER – NOVEMBER 2026".
- Top right: a rounded cream box with a clock icon and the text "Each entry = 3 hours".
- Main area: one large subject card in the subject's colour, with the day number and weekday, the subject name, the hours, the icon, and the bullets.
- Bottom bar: a thin progress bar and the text "Course coverage: <percent>" with "<n> of <total> units".
- Aspect ratio 16:10.

## Subject colours and icons (from the study plan poster)
| Subject | Colour | Icon |
|---|---|---|
| Real Analysis II | light blue | curve on axes |
| Abstract Algebra I | soft yellow | triangle and group symbol |
| Complex Analysis I | light green | spiral or complex plane |
| Convex Optimization | peach | convex bowl-shaped curve |
| Machine Learning I | lavender | small network of connected nodes |
| LaTeX | pink | document with a sigma |
| Physics subjects | not set yet | not set yet |

If an entry gives a colour or icon, the entry wins over this table.

## Example entry (Oct 18, Machine Learning I)
```
- **Day:** 18
- **Weekday:** Sunday
- **Subject:** Machine Learning I
- **Hours:** 3
- **Colour:** lavender
- **Icon:** a small network of connected nodes
- **Bullets:**
  - Probability review: density and distribution functions
  - Expectation, covariance and Bayesian probabilities
  - Gaussian distributions: conditional and marginal
  - Maximum likelihood and Bayesian inference for Gaussians
- **Course coverage:** 17% covered (4 of 23 units, using the plan's unit numbering)
```
