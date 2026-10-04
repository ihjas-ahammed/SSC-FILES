import BackButton from "../ui/BackButton";
import { useState } from "react";
import { BookOpen, Check, Target } from "lucide-react";
import { useAtlas } from "../../app/AtlasContext";
import { byName } from "../../lib/course";
import ConceptNote from "../study/ConceptNote";
import Objective from "../study/Objective";
export default function InlineConcept({ name, travel }) {
  const {
    setRead,
    updateStatus,
    buildSingleRoute,
    read,
    readerTab,
    setReaderTab,
  } = useAtlas();
  const check = readerTab === "check";
  const setCheck = (on) => setReaderTab(on ? "check" : "note");
  const [result, setResult] = useState(null);
  const markRead = () => setRead((old) => [...new Set([...old, name])]);
  return (
    <section
      className="inline-star-content"
      aria-label="Selected concept content"
    >
      {check && (
        <BackButton label="Back to note" onClick={() => setCheck(false)} />
      )}
      <nav className="reader-tabs">
        <button
          className={!check ? "active" : ""}
          onClick={() => setCheck(false)}
        >
          <BookOpen size={14} />
          Read the note
        </button>
        <button
          className={check ? "active" : ""}
          onClick={() => {
            setCheck(true);
            setResult(null);
          }}
        >
          <Target size={14} />
          Self-check
        </button>
      </nav>
      {!check ? (
        <>
          <ConceptNote name={name} navigate={travel} />
          <div className="reader-actions">
            <button className="secondary" onClick={markRead}>
              <Check size={15} />
              {read.includes(name) ? "Read" : "Mark as read"}
            </button>
            <button
              className="primary"
              onClick={() => {
                markRead();
                setCheck(true);
              }}
            >
              Check understanding
            </button>
          </div>
        </>
      ) : (
        <Objective
          item={byName[name].check}
          onResult={(ok) => {
            setResult(ok);
            updateStatus(name, ok ? "known" : "shaky");
            if (ok) markRead();
          }}
          onNext={() => (result ? setCheck(false) : buildSingleRoute(name))}
          nextLabel={result ? "Back to the note" : "Build a reading route"}
        />
      )}
    </section>
  );
}
