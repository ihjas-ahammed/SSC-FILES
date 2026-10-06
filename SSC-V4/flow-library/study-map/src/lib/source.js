import { meta } from "./course.js";
// Blob URLs support browser PDF viewers even when opened from file://.
export function sourcePdfUrl() {
  const asset = meta.sourcePdf;
  // A course may cite a book it cannot redistribute: then only the quoted text is shown.
  if (!asset) return null;
  if (!asset.startsWith("data:")) return asset;
  const bytes = Uint8Array.from(atob(asset.split(",")[1]), (c) =>
    c.charCodeAt(0),
  );
  return URL.createObjectURL(new Blob([bytes], { type: "application/pdf" }));
}
