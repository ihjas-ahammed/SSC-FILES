import { byName } from "../../../graph";
import { Pill } from "../../ui/Primitives";
import Objective from "../Objective";
import { useAtlas } from "../../../app/AtlasContext";

export default function Retest() {
  const { flow, setFlow, updateStatus, finishRetest } = useAtlas();
  return (
    <>
      <div className="retest-label">
        <Pill>RETEST</Pill>
        <span>{flow.idk[flow.retestIndex]}</span>
        <p>
          Only the concepts you switched off. Understood concepts stay skipped.
        </p>
      </div>
      <Objective
        key={`retest-${flow.retestIndex}`}
        item={byName[flow.idk[flow.retestIndex]].check}
        retest
        number={flow.retestIndex + 1}
        total={flow.idk.length}
        onResult={(ok) => {
          updateStatus(flow.idk[flow.retestIndex], ok ? "known" : "shaky");
          setFlow((f) => ({
            ...f,
            retestResults: [...f.retestResults.slice(0, f.retestIndex), ok],
          }));
        }}
        onNext={() => {
          if (flow.retestIndex + 1 < flow.idk.length)
            setFlow((f) => ({ ...f, retestIndex: f.retestIndex + 1 }));
          else finishRetest();
        }}
        nextLabel={
          flow.retestIndex + 1 < flow.idk.length
            ? "Next gap"
            : "Finish recall check"
        }
      />
    </>
  );
}
