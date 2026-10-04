/** Subject data is supplied by the project before mounting. No subject imports here. */
export let concepts = [],
  questions = [],
  groups = [],
  report = {},
  meta = {},
  byName = {},
  byId = {},
  symbolNotes = {},
  topicGlyphs = {},
  glyphs = {},
  storageKey = "",
  maxLearningDepth = 1;
let configured = false;
export function configureCourse(course) {
  if (configured) throw new Error("Mount one study course per page.");
  if (
    !course?.meta?.storageKey ||
    !course.concepts?.length ||
    !course.questions?.length ||
    !course.groups?.length
  )
    throw new Error(
      "A study map needs metadata, concepts, questions and topic groups.",
    );
  concepts = course.concepts;
  questions = course.questions;
  groups = course.groups;
  report = course.report;
  meta = course.meta;
  storageKey = meta.storageKey;
  byName = Object.fromEntries(concepts.map((c) => [c.name, c]));
  byId = Object.fromEntries(concepts.map((c) => [c.id, c]));
  if (
    Object.keys(byName).length !== concepts.length ||
    Object.keys(byId).length !== concepts.length
  )
    throw new Error("Concept names and IDs must be unique.");
  const active = new Set(),
    done = new Set();
  function visit(name) {
    if (!byName[name]) throw new Error("Missing prerequisite: " + name);
    if (active.has(name)) throw new Error("Prerequisite cycle at: " + name);
    if (done.has(name)) return;
    active.add(name);
    byName[name].prerequisites.forEach(visit);
    active.delete(name);
    done.add(name);
  }
  concepts.forEach((c) => visit(c.name));
  questions.forEach((q) => q.terms.forEach(visit));
  symbolNotes = course.symbolNotes || {};
  topicGlyphs = course.topicGlyphs || {};
  glyphs = course.glyphs || {};
  maxLearningDepth = Math.max(1, ...concepts.map((c) => c.depth));
  configured = true;
}
