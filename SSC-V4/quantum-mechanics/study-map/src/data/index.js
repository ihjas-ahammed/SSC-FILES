import ground from "./concepts/ground.json" with { type: "json" };
import spaces from "./concepts/spaces.json" with { type: "json" };
import states from "./concepts/states.json" with { type: "json" };
import operators from "./concepts/operators.json" with { type: "json" };
import eigen from "./concepts/eigen.json" with { type: "json" };
import matrices from "./concepts/matrices.json" with { type: "json" };
import waves from "./concepts/waves.json" with { type: "json" };
import uncertainty from "./concepts/uncertainty.json" with { type: "json" };
import notation from "./concepts/notation.json" with { type: "json" };
import sectionA from "./questions/section-A.json" with { type: "json" };
import sectionB from "./questions/section-B.json" with { type: "json" };
import sectionC from "./questions/section-C.json" with { type: "json" };
import metadata from "./metadata.json" with { type: "json" };
export default {
  ...metadata,
  concepts: [
    ...ground,
    ...spaces,
    ...states,
    ...operators,
    ...eigen,
    ...matrices,
    ...waves,
    ...uncertainty,
    ...notation,
  ],
  questions: [...sectionA, ...sectionB, ...sectionC],
};
