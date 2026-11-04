export default function useBookmarks({ bookmarks, setBookmarks, setToast }) {
  function toggleBookmark(name) {
    const exists = bookmarks.some((b) => b.name === name);
    setBookmarks((old) =>
      old.some((b) => b.name === name)
        ? old.filter((b) => b.name !== name)
        : [...old, { name, note: "", createdAt: Date.now() }],
    );
    setToast(
      exists
        ? `${name} removed from bookmarks.`
        : `${name} saved for final review.`,
    );
  }
  function updateBookmarkNote(name, note) {
    setBookmarks((old) =>
      old.map((b) => (b.name === name ? { ...b, note } : b)),
    );
  }
  return { toggleBookmark, updateBookmarkNote };
}
