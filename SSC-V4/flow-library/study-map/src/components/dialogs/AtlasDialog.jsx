import { meta } from "../../lib/course.js";
import BackButton from "../ui/BackButton";
import { Atom, X } from "lucide-react";
import { useAtlas } from "../../app/AtlasContext";
import StudySession from "../study/StudySession";
import ConceptReader from "./ConceptReader";
import SourceDialog from "./SourceDialog";
import ModuleRoute from "./ModuleRoute";
import HelpDialog from "./HelpDialog";
import SourceAudit from "./SourceAudit";
import SettingsDialog from "./SettingsDialog";
const screens = {
  settings: SettingsDialog,
  study: StudySession,
  source: SourceDialog,
  "module-route": ModuleRoute,
  help: HelpDialog,
  audit: SourceAudit,
};
export default function AtlasDialog() {
  const { modal, reader, question, closeDialog } = useAtlas();
  if (!modal && !reader) return null;
  const Screen = reader ? ConceptReader : screens[modal];
  return (
    <div className="overlay" onClick={closeDialog}>
      <section
        role="dialog"
        aria-modal="true"
        aria-label={
          reader
            ? reader + " concept"
            : modal === "study"
              ? "Guided study session"
              : "Atlas details"
        }
        tabIndex={-1}
        className={
          "modal " +
          (reader
            ? "focused-reader-modal"
            : modal === "study"
              ? "study-modal"
              : modal === "source"
                ? "source-modal"
                : "")
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-top">
          <BackButton />
          <span>
            <Atom size={16} />
            {reader
              ? "CONCEPT NOTE"
              : modal === "study"
                ? "GUIDED STUDY · " + question.id
                : modal === "source"
                  ? "ORIGINAL QUESTION BANK"
                  : `${meta.brand} ${meta.brandSuffix || ""}`
                      .trim()
                      .toUpperCase()}
          </span>
          <button
            className="icon-btn"
            aria-label="Close dialog"
            onClick={closeDialog}
          >
            <X size={20} />
          </button>
        </div>
        {Screen && <Screen />}
      </section>
    </div>
  );
}
