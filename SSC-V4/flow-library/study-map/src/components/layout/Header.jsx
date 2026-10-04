import BackButton from "../ui/BackButton";
import {
  Bookmark,
  BookOpen,
  Network,
  Download,
  Target,
  Menu,
  Settings2,
} from "lucide-react";
import { meta } from "../../lib/course.js";
import { useAtlas } from "../../app/AtlasContext";

export default function Header() {
  const { vaultSaved, nav, setNav, setMobileMenu, downloadVault, setModal } =
    useAtlas();
  const { bookmarks } = useAtlas();
  return (
    <header className="topbar">
      <BackButton />
      <button
        className="mobile-menu icon-btn"
        aria-label="Open question menu"
        onClick={() => setMobileMenu(true)}
      >
        <Menu size={21} />
      </button>
      <button className="brand" onClick={() => setNav("bank")}>
        <span className="brand-mark">
          <span aria-hidden="true">{meta.emblem || "✦"}</span>
        </span>
        {meta.brand}
        <span>{meta.brandSuffix}</span>
      </button>
      {meta.parentUrl && (
        <a className="study-parent-link" href={meta.parentUrl}>
          Back to course
        </a>
      )}
      <nav aria-label="Main navigation">
        {[
          { id: "atlas", icon: Network, label: "Knowledge map" },
          { id: "bank", icon: BookOpen, label: "Question bank" },
          {
            id: "bookmarks",
            icon: Bookmark,
            label: `Bookmarks (${bookmarks.length})`,
          },
          { id: "progress", icon: Target, label: "My progress" },
        ].map((n) => (
          <button
            key={n.id}
            className={nav === n.id ? "active" : ""}
            onClick={() => setNav(n.id)}
          >
            <n.icon size={16} />
            {n.label}
          </button>
        ))}
      </nav>
      <div className="topbar-right">
        <button
          className={`mobile-bookmarks icon-btn ${nav === "bookmarks" ? "active" : ""}`}
          aria-label={`Bookmarks (${bookmarks.length})`}
          onClick={() => setNav("bookmarks")}
        >
          <Bookmark size={19} />
        </button>
        <button
          className="icon-btn settings-launch"
          aria-label="App settings"
          onClick={() => setModal("settings")}
        >
          <Settings2 size={20} />
        </button>
        <span className="saved-indicator">
          <span />
          {vaultSaved ? "Saved to your vault" : "Saved on this device"}
        </span>
        <button className="export-button" onClick={downloadVault}>
          <Download size={15} />
          <span>Export vault</span>
        </button>
        <span className="avatar">ME</span>
      </div>
    </header>
  );
}
