import { normalizeProgress } from "./progressState.js";
export { storageKey as STORAGE } from "./course.js";
import { storageKey } from "./course.js";
export const OFFLINE =
  location.protocol === "file:" || Boolean(globalThis.STUDY_MAP_OFFLINE);
export function readSaved() {
  try {
    return normalizeProgress(
      JSON.parse(localStorage.getItem(storageKey)) || {},
    );
  } catch {
    return normalizeProgress();
  }
}
