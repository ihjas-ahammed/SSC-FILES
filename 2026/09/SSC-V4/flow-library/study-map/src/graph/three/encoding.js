import { groups, questions, maxLearningDepth } from "../../lib/course.js";

// Difficulty is an explicit estimate from prerequisite depth, not a test score.
// Use one course-wide scale so filtering and reading routes never resize a star.
export { maxLearningDepth } from "../../lib/course.js";
export function starEncoding(concept) {
  const difficulty = Math.max(0, concept.depth) / maxLearningDepth;
  const questionCount = new Set(concept.usedIn).size;
  const importance = Math.min(1, questionCount / Math.max(1, questions.length));
  return {
    radius: 8 + 14 * difficulty,
    glowOpacity: 0.22 + 0.56 * importance,
    glowSize: 50 + 90 * importance,
    emissive: 0.12 + 0.35 * importance,
    color: groups.find((g) => g.id === concept.group)?.color || "#a6bdf1",
    difficulty,
    importance,
    questionCount,
  };
}
