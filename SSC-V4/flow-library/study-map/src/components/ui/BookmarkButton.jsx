import { Bookmark } from "lucide-react";
import { useAtlas } from "../../app/AtlasContext";
export default function BookmarkButton({ name }) {
  const { bookmarks, toggleBookmark } = useAtlas();
  const saved = bookmarks.some((b) => b.name === name);
  return (
    <button
      type="button"
      className={`bookmark-button ${saved ? "saved" : ""}`}
      aria-label={`${saved ? "Remove bookmark for" : "Bookmark"} ${name}`}
      aria-pressed={saved}
      onClick={() => toggleBookmark(name)}
    >
      <Bookmark size={16} fill={saved ? "currentColor" : "none"} />
      <span>{saved ? "Bookmarked" : "Bookmark"}</span>
    </button>
  );
}
