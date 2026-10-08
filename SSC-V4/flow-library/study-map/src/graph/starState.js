// Knowledge and availability are separate: reading alone never lights a star.
export function starState(concept, statuses) {
  const understood = statuses[concept.name] === "known";
  return {
    understood,
    locked:
      !understood &&
      concept.prerequisites.some((name) => statuses[name] !== "known"),
  };
}
