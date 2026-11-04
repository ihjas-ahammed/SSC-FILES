// Arrows describe dependency direction; travel always leaves the focused endpoint.
export function pathDestination(path, focused) {
  if (!focused) return null;
  return path.a === focused ? path.b : path.b === focused ? path.a : null;
}
export function isComplete(name, statuses) {
  return statuses[name] === "known";
}
export function isPathComplete(path, statuses) {
  return isComplete(path.a, statuses) && isComplete(path.b, statuses);
}
