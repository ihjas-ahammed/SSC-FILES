import { mountStudyMap } from "../../../flow-library/study-map/src/main.jsx";
import course from "../course.js";
const parentUrl =
  location.protocol === "file:"
    ? null
    : location.pathname.includes("/study-map/build/")
      ? "../../build/index.html#/study-map"
      : null;
mountStudyMap(
  { ...course, meta: { ...course.meta, parentUrl } },
  document.getElementById("root"),
);
