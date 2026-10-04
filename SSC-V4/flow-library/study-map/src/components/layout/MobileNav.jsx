import {
  Bookmark,
  BookOpen,
  Network,
  Target,
  GraduationCap,
} from "lucide-react";
import { useAtlas } from "../../app/AtlasContext";

export default function MobileNav() {
  const { nav, setNav, selectQuestion, question } = useAtlas();
  return (
    <nav className="mobile-nav" aria-label="Mobile navigation">
      <button
        className={nav === "atlas" ? "active" : ""}
        onClick={() => setNav("atlas")}
      >
        <Network size={19} />
        Map
      </button>
      <button
        className={nav === "bank" ? "active" : ""}
        onClick={() => setNav("bank")}
      >
        <BookOpen size={19} />
        Questions
      </button>
      <button
        className="mobile-study-button"
        onClick={() => selectQuestion(question)}
      >
        <GraduationCap size={20} />
        Study
      </button>
      <button
        className={nav === "bookmarks" ? "active" : ""}
        onClick={() => setNav("bookmarks")}
      >
        <Bookmark size={19} />
        Bookmarks
      </button>
      <button
        className={nav === "progress" ? "active" : ""}
        onClick={() => setNav("progress")}
      >
        <Target size={19} />
        Progress
      </button>
    </nav>
  );
}
