import { mountStudyMap } from "../../../flow-library/study-map/src/main.jsx";
import course from "../course.js";
import sourcePdf from "../Module4.pdf?url";
const parentUrl =
  location.protocol === "file:"
    ? null
    : location.pathname.startsWith("/phy/")
      ? course.meta.parentUrl
      : location.pathname.includes("/study-map-4/build/")
        ? "../../build/index.html#/study-map"
        : null;
mountStudyMap(
  { ...course, meta: { ...course.meta, sourcePdf, parentUrl } },
  document.getElementById("root"),
);
