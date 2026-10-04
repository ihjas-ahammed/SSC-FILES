import {
  ArrowUpRight,
  ArrowRight,
  BookOpen,
  Network,
  Download,
  Flag,
} from "lucide-react";
import { concepts, report, groups, questions, meta } from "../graph";
import { StatusIcon } from "../components/ui/Primitives";
import { useAtlas } from "../app/AtlasContext";

import LearningDashboard from "../components/progress/LearningDashboard";

export default function ProgressPage() {
  const {
    vaultSaved,
    statuses,
    completed,
    read,
    setModal,
    known,
    openReader,
    downloadVault,
    backup,
    importProgress,
  } = useAtlas();
  return (
    <div className="standalone-page">
      <div className="breadcrumb">
        {meta.module.toUpperCase()} / YOUR JOURNEY
      </div>
      <h1>
        Understanding, made visible<span>.</span>
      </h1>
      <p className="page-intro">
        {vaultSaved
          ? "Progress syncs to your markdown vault and this device."
          : "Your progress stays on this device."}{" "}
        Reading and recall are tracked separately.
      </p>
      <div className="stat-grid">
        <div>
          <span>Concepts you know</span>
          <b>
            {known}
            <small> / {concepts.length}</small>
          </b>
          <div className="progress-track">
            <i style={{ width: `${(known / concepts.length) * 100}%` }} />
          </div>
        </div>
        <div>
          <span>Questions completed</span>
          <b>
            {completed.length}
            <small> / {questions.length}</small>
          </b>
          <div className="progress-track">
            <i
              style={{
                width: `${(completed.length / questions.length) * 100}%`,
              }}
            />
          </div>
        </div>
        <div>
          <span>Notes explored</span>
          <b>
            {read.length}
            <small> / {concepts.length}</small>
          </b>
          <span className="stat-note">Read a note, then test your recall.</span>
        </div>
      </div>
      <LearningDashboard />
      <div className="progress-actions">
        <button className="secondary" onClick={backup}>
          <Download size={15} />
          Back up progress
        </button>
        <label className="secondary import-button">
          <ArrowUpRight size={15} />
          Restore backup
          <input
            type="file"
            accept="application/json"
            onChange={importProgress}
          />
        </label>
        <button className="secondary" onClick={downloadVault}>
          <BookOpen size={15} />
          Export Obsidian vault
        </button>
        <button className="secondary" onClick={() => setModal("module-route")}>
          <Network size={15} />
          Combined reading order
        </button>
      </div>
      <div className="progress-group-list">
        {groups.map((g) => (
          <div key={g.id} className="progress-group">
            <h3>
              <i style={{ background: g.color }} />
              {g.name}
              <span>
                {
                  concepts.filter(
                    (c) => c.group === g.id && statuses[c.name] === "known",
                  ).length
                }{" "}
                / {concepts.filter((c) => c.group === g.id).length}
              </span>
            </h3>
            <div>
              {concepts
                .filter((c) => c.group === g.id)
                .map((c) => (
                  <button key={c.id} onClick={() => openReader(c.name)}>
                    <StatusIcon status={statuses[c.name]} />
                    {c.name}
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>
      <div className="report-card">
        <Flag size={18} />
        <div>
          <h3>Source audit</h3>
          <p>
            {report.created} notes created · {report.reused} reused ·{" "}
            {report.verifyFlags} source qualifications. Ground stops:{" "}
            {report.ground.join(", ")}.
          </p>
          <button className="wiki-link" onClick={() => setModal("audit")}>
            Review flagged questions <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}
