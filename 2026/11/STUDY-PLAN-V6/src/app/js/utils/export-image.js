/* =========================================================================
   PNG IMAGE EXPORT HELPER (modern-screenshot)
   ========================================================================= */

import { toast } from "./dom.js";

// Let the preview reflow naturally; downloads use the full editorial layout.
export async function exportPng(el, filename, fixedWidth) {
  if (!el || exportPng.busy) return;
  if (!window.modernScreenshot) {
    toast("Image export needs an internet connection (library didn't load)");
    return;
  }
  exportPng.busy = true;
  const copy = el.cloneNode(true);
  copy.classList.add("exporting");
  copy.style.width = (fixedWidth || Number(el.dataset.exportWidth) || el.offsetWidth) + "px";
  copy.style.maxWidth = "none";
  copy.style.position = "absolute";
  copy.style.left = "-20000px";
  copy.style.top = "0";
  copy.style.transform = "none";
  copy.style.boxShadow = "none";
  copy.querySelectorAll(".no-export").forEach(n => n.remove());
  copy.querySelectorAll(".done,.past,.today").forEach(n => n.classList.remove("done", "past", "today"));
  document.body.appendChild(copy);
  try {
    await document.fonts.ready;
    const url = await window.modernScreenshot.domToPng(copy, {
      scale: el.id === "day-card" ? 1080 / copy.offsetWidth : 2,
      width: copy.offsetWidth,
      height: copy.offsetHeight,
      backgroundColor: "#ffffff"
    });
    const a = document.createElement("a");
    a.download = filename;
    a.href = url;
    document.body.appendChild(a);
    a.click();
    a.remove();
    toast("Saved " + filename);
  } catch (err) {
    toast("Export failed: " + err.message);
  } finally {
    copy.remove();
    exportPng.busy = false;
  }
}
