import { useState } from "react";
import { RotateCcw, Download, Sparkles } from "lucide-react";
import { meta } from "../../lib/course.js";
import { useAtlas } from "../../app/AtlasContext";
import KnowledgeSwitch from "../ui/KnowledgeSwitch";
export default function SettingsDialog() {
  const [confirmReset, setConfirmReset] = useState(false);
  const { preferences, setPreferences, resetApp, backup } = useAtlas();
  return (
    <div className="settings-body">
      <div className="eyebrow">YOUR STUDY SPACE</div>
      <h2>App settings</h2>
      <div className="settings-row">
        <div>
          <h3>
            <Sparkles size={17} />
            Stellar animations
          </h3>
          <p>Smooth camera travel between constellation blocks.</p>
        </div>
        <KnowledgeSwitch
          name="stellar animations"
          checked={preferences.animations}
          onChange={(on) => setPreferences((p) => ({ ...p, animations: on }))}
        />
      </div>
      {meta.offlineDownload && location.protocol !== "file:" && (
        <a
          className="secondary"
          href={meta.offlineDownload}
          download={`${meta.exportPrefix}-offline.html`}
        >
          <Download size={16} /> Download the offline study map
        </a>
      )}
      <section className="reset-panel">
        <h3>
          <RotateCcw size={18} />
          Reset the whole app
        </h3>
        <p>
          This clears understanding, read notes, completed questions, solution
          unlocks, attempts, routes, practice history, and settings on this
          device. When running locally, it also resets the synced vault
          progress. Your question bank and study notes remain available.
        </p>
        <button className="secondary" onClick={backup}>
          <Download size={16} />
          Back up before resetting
        </button>
        <button className="reset-button" onClick={() => setConfirmReset(true)}>
          <RotateCcw size={16} />
          Reset all progress and settings
        </button>
        {confirmReset && (
          <div className="reset-confirmation" role="alert">
            <p>Clear all saved study progress on this device?</p>
            <button className="reset-button" onClick={resetApp}>
              Confirm reset
            </button>
            <button
              className="secondary"
              onClick={() => setConfirmReset(false)}
            >
              Keep my progress
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
