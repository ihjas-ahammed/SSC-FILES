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
