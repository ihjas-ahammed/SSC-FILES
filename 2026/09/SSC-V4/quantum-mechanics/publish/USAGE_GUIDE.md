# Minimal How-To-Use Guide · Quantum Mechanics

A concise guide explaining the three core mechanics: accordion dropdown navigation, the reel-like recall screen, and the 4-level mastery progression.

---

## 1. Accordion Dropdown Navigation

- **Hierarchy**: `Course` → `Module` → `Section` → `Concept Note`.
- **Single-Open Depth**: Opening a new module automatically folds the previous one. Exactly one path stays active, preventing infinite mobile scrolling.
- **In-Place Unfolding**: Tapping a concept unfolds its complete note directly in the tree, containing formulas, interactive diagrams, proof cards, and section exercises.

Screenshot reference: `publish/screenshots/02_qm_mobile_curriculum_study_tree.png`

---

## 2. Reel-Like Active Recall (`#recall`)

- **Full-Viewport Cards**: Snaps vertically card-by-card, identical to short-form video reels.
- **Zero Clutter**: No distracting counters or progress bars during active recall to preserve flow state.
- **Active Retrieval**: The question appears first; tap to reveal the hidden proof or answer only after attempting retrieval.
- **Leitner Spaced Repetition**: Rate each attempt:
  - `Missed`: Shuffled back to Box 1 for immediate review.
  - `Partly`: Moves to intermediate review.
  - `Got`: Advances to next Leitner interval.

Screenshot reference: `publish/screenshots/07_qm_mobile_active_recall_flashcards.png`

---

## 3. The 4-Level Mastery System

Progress is strictly earned through proof verification and problem-solving, indicated by standard color tokens:

1. **Level 1 — Read (`var(--lv1)`, Red)**: Note explored and core concepts read.
2. **Level 2 — Worked (`var(--lv2)`, Amber)**: All proofs worked out on paper and self-check questions answered. Auto-reveals section exercises.
3. **Level 3 — Section Green (`var(--lv3)`, Green)**: All recall flashcards passed on first attempt and section exercises locked.
4. **Level 4 — Course Mastered (`var(--lv4)`, Violet)**: Full course syllabus and IIT JAM past papers completed.

Screenshot reference: `publish/screenshots/01_qm_mobile_dashboard_dark.png`
