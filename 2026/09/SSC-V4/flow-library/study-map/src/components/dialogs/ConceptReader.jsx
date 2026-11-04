import { ArrowRight, Check, BookOpen, Target } from "lucide-react";
import { byName } from "../../graph";
import Objective from "../study/Objective";
import ConceptNote from "../study/ConceptNote";
import { useAtlas } from "../../app/AtlasContext";

export default function ConceptReader() {
  const {
    setRead,
    reader,
    setReader,
    readerTab,
    setReaderTab,
    readerResult,
    setReaderResult,
    setToast,
    updateStatus,
    buildSingleRoute,
  } = useAtlas();
  return (
    <div className="reader-wrapper">
      <div className="reader-tabs">
        <button
          className={readerTab === "note" ? "active" : ""}
          onClick={() => setReaderTab("note")}
        >
          <BookOpen size={14} />
          Read the note
        </button>
        <button
          className={readerTab === "check" ? "active" : ""}
          onClick={() => {
            setReaderTab("check");
            setReaderResult(null);
          }}
        >
          <Target size={14} />
          Self-check
        </button>
      </div>
      {readerTab === "note" ? (
        <>
          <ConceptNote name={reader} />
          <div className="reader-actions">
            <button
              className="secondary"
              onClick={() => {
                setRead((old) => [...new Set([...old, reader])]);
                setToast("Marked as read. Self-check to mark it known.");
              }}
            >
              <Check size={15} />
              Mark as read
            </button>
            <button
              className="primary"
              onClick={() => {
                setRead((old) => [...new Set([...old, reader])]);
                setReaderTab("check");
              }}
            >
              Check understanding
              <ArrowRight size={15} />
            </button>
          </div>
        </>
      ) : (
        <>
          <Objective
            key={reader}
            item={byName[reader].check}
            onResult={(ok) => {
              setReaderResult(ok);
              updateStatus(reader, ok ? "known" : "shaky");
            }}
            onNext={() => {
              if (readerResult) {
                setRead((old) => [...new Set([...old, reader])]);
                setReader(null);
                setToast(`${reader} · marked known.`);
              } else buildSingleRoute(reader);
            }}
            nextLabel={
              readerResult ? "Got it · back to map" : "Build a reading route"
            }
          />
        </>
      )}
    </div>
  );
}
