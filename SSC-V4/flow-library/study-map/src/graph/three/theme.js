import * as T from "three";
export const lightMap = () =>
  globalThis.document?.documentElement?.dataset.theme === "light";
export function mapColor(color = "#a6bdf1", light = lightMap()) {
  const value = new T.Color(color);
  if (light) value.lerp(new T.Color(0x153c55), 0.58);
  return value.getHex();
}
export const completedColor = () => (lightMap() ? 0x087c51 : 0x59f9bd);
export const activeColor = () => (lightMap() ? 0x0b638f : 0x00eaff);

export const outgoingColor = () => (lightMap() ? 0xb95567 : 0xf28c98);
// Dependency arrows run from prerequisite (a) to dependent concept (b).
export function pathDirection(edge, selected) {
  return edge.b === selected
    ? "incoming"
    : edge.a === selected
      ? "outgoing"
      : null;
}
export function pathColor(edge, selected) {
  if (edge.complete) return completedColor();
  const direction = pathDirection(edge, selected);
  if (direction === "incoming") return activeColor();
  if (direction === "outgoing") return outgoingColor();
  return edge.route ? 0x009eaf : 0x237484;
}
