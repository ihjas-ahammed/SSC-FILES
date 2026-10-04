import { useRef } from "react";
import { useAtlas } from "../app/AtlasContext";
export default function usePanelResize() {
  const { preferences, setPreferences } = useAtlas();
  const drag = useRef(null);
  const clamp = (width) =>
    Math.round(
      Math.max(
        300,
        Math.min(width, window.innerWidth * 0.62, window.innerWidth - 320),
      ),
    );
  const width = preferences.notePanelWidth
    ? clamp(preferences.notePanelWidth)
    : undefined;
  const setWidth = (n) =>
    setPreferences((p) => ({ ...p, notePanelWidth: clamp(n) }));
  return {
    width,
    separator: {
      role: "separator",
      tabIndex: 0,
      "aria-label": "Resize concept panel",
      "aria-orientation": "vertical",
      "aria-valuemin": 300,
      "aria-valuemax": clamp(window.innerWidth),
      "aria-valuenow":
        width ||
        Math.round(Math.min(480, Math.max(340, window.innerWidth * 0.32))),
      onPointerDown(e) {
        if (e.button !== 0) return;
        e.preventDefault();
        drag.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        setWidth(e.clientX);
      },
      onPointerMove(e) {
        if (drag.current) setWidth(e.clientX);
      },
      onPointerUp(e) {
        drag.current = false;
        if (e.currentTarget.hasPointerCapture(e.pointerId))
          e.currentTarget.releasePointerCapture(e.pointerId);
      },
      onPointerCancel() {
        drag.current = false;
      },
      onLostPointerCapture() {
        drag.current = false;
      },
      onKeyDown(e) {
        if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
          e.preventDefault();
          setWidth(
            (width || window.innerWidth * 0.32) +
              (e.key === "ArrowRight" ? 24 : -24),
          );
        }
      },
    },
  };
}
