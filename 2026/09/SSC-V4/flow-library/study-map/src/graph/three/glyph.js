import { topicGlyphs, glyphs } from "../../lib/course.js";
// Full notation stays in the note. Compact glyph overrides belong to the course.
export function skillGlyph(concept) {
  if (concept.symbol.length <= 14) return concept.symbol;
  return glyphs[concept.name] || topicGlyphs[concept.group] || "\\cdot";
}
