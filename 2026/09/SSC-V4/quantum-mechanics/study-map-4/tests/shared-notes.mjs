// The Module 3 notes that Module 4 takes as its foundations. They are shared, not copied:
// fixing a note in study-map/src/data/notes fixes it here too.
import ground from "../../study-map/src/data/notes/ground.js";
import spacesA from "../../study-map/src/data/notes/spacesA.js";
import spacesB from "../../study-map/src/data/notes/spacesB.js";
import states from "../../study-map/src/data/notes/states.js";
import operators from "../../study-map/src/data/notes/operators.js";
import eigen from "../../study-map/src/data/notes/eigen.js";
import matrices from "../../study-map/src/data/notes/matrices.js";
import wavesA from "../../study-map/src/data/notes/wavesA.js";
import wavesB from "../../study-map/src/data/notes/wavesB.js";
import uncertainty from "../../study-map/src/data/notes/uncertainty.js";
import notation from "../../study-map/src/data/notes/notation.js";
import powerSeries from "../../study-map/src/data/problems/supportsA.js";
import separable from "../../study-map/src/data/problems/supportsC.js";
export const sharedNotes = [
  ...ground, ...spacesA, ...spacesB, ...states, ...operators, ...eigen, ...matrices,
  ...wavesA, ...wavesB, ...uncertainty, ...notation, ...powerSeries, ...separable,
];
