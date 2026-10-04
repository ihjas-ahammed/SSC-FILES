import { useEffect, useRef } from "react";
import { Bookmark, ArrowLeft, ArrowRight, Download } from "lucide-react";
import { useAtlas } from "../app/AtlasContext";
import { byName, meta } from "../lib/course.js";
import { bookmarkMarkdown } from "../lib/bookmarks.js";
import ConceptNote from "../components/study/ConceptNote";

export default function BookmarksPage() {
  const {
    bookmarks,
    bookmarkIndex,
    setBookmarkIndex,
    updateBookmarkNote,
    setRead,
    read,
    download,
  } = useAtlas();
  const article = useRef(null);
  const index = Math.min(bookmarkIndex, Math.max(0, bookmarks.length - 1));
  const entry = bookmarks[index];
  useEffect(() => {
    article.current?.scrollIntoView({ block: "start", behavior: "instant" });
  }, [index, entry?.name]);
  const move = (next) =>
    setBookmarkIndex(Math.max(0, Math.min(bookmarks.length - 1, next)));
  return (
    <section className="bookmarks-page">
      <header className="bookmarks-heading">
        <div>
          <span className="eyebrow">YOUR FINAL REVIEW</span>
          <h1>
            <Bookmark size={25} /> Bookmarks
          </h1>
          <p>
            Review in the order you saved each concept. Write what you want to
            remember.
          </p>
        </div>
        {!!bookmarks.length && (
          <button
            className="secondary"
            onClick={() =>
              download(
                new Blob([bookmarkMarkdown(bookmarks)], {
                  type: "text/markdown;charset=utf-8",
                }),
                `${meta.exportPrefix}-bookmarks.md`,
              )
            }
          >
            <Download size={16} /> Download review notes
          </button>
        )}
      </header>
      {!entry ? (
        <div className="bookmarks-empty">
          <Bookmark size={32} />
          <h2>Your review notebook starts here.</h2>
          <p>
            Use Bookmark on any concept note to save it here. The first concept
            you add becomes your first review stop.
          </p>
        </div>
      ) : (
        <div className="bookmark-workspace">
          <nav
            className="bookmark-list"
            aria-label="Bookmarked concepts in saved order"
          >
            <ol>
              {bookmarks.map((b, i) => (
                <li key={b.name}>
                  <button
                    aria-current={i === index ? "step" : undefined}
                    onClick={() => move(i)}
                  >
                    <span>{i + 1}</span>
                    <div>
                      <b>{b.name}</b>
                      <small>
                        {b.note
                          ? "Revision notes saved"
                          : `${byName[b.name].minutes} min read`}
                      </small>
                    </div>
                  </button>
                </li>
              ))}
            </ol>
          </nav>
          <article className="bookmark-review" ref={article}>
            <div className="bookmark-review-nav">
              <button
                className="secondary"
                disabled={index === 0}
                onClick={() => move(index - 1)}
              >
                <ArrowLeft size={15} /> Previous
              </button>
              <span>
                {index + 1} / {bookmarks.length}
              </span>
              <button
                className="secondary"
                disabled={index === bookmarks.length - 1}
                onClick={() => move(index + 1)}
              >
                Next <ArrowRight size={15} />
              </button>
            </div>
            <ConceptNote key={entry.name} name={entry.name} />
            <label className="bookmark-memo">
              My revision notes
              <textarea
                aria-label={`Revision notes for ${entry.name}`}
                value={entry.note}
                rows={5}
                placeholder="Explain this in your own words. Add a memory cue, an example, or a mistake to avoid…"
                onChange={(e) => updateBookmarkNote(entry.name, e.target.value)}
              />
              <small>
                Saved on this device, included in your progress backup.
              </small>
            </label>
            <div className="bookmark-review-actions">
              <button
                className="secondary"
                onClick={() =>
                  setRead((old) => [...new Set([...old, entry.name])])
                }
              >
                {read.includes(entry.name) ? "Marked as read" : "Mark as read"}
              </button>
              <button
                className="primary"
                disabled={index === bookmarks.length - 1}
                onClick={() => move(index + 1)}
              >
                Next bookmarked concept <ArrowRight size={16} />
              </button>
            </div>
          </article>
        </div>
      )}
    </section>
  );
}
