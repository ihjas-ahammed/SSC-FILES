import { useEffect, useId, useMemo, useRef, useState } from "react";
import { ArrowRight, Check, Lock, PartyPopper, RotateCcw } from "lucide-react";
import { useAtlas } from "../../../app/AtlasContext";
import { parseKeywords, suggestions, exactKeyword, MIN_LETTERS, letterCount } from "../../../lib/keywords.js";
import LatexEditor from "../../ui/LatexEditor";

/**
 * "Try again myself": after the solution is unlocked, say it again in your own
 * words (and maths) and recall the key words. Each keyword unlocks only when
 * the learner has typed at least three letters of it; unlocking all of them
 * means they have rebuilt the whole idea.
 */
export default function TryMyself() {
  const { question, flow, setFlow, nextQuestion, updateStatus, masterQuestion, mastered } = useAtlas();
  const keywords = useMemo(() => parseKeywords(question.keywords), [question]);
  const retry = flow.retry;
  const unlocked = retry.unlocked;
  const [input, setInput] = useState("");
  const [active, setActive] = useState(0);
  const [message, setMessage] = useState("");
  const listId = useId();
  const field = useRef(null);
  const list = suggestions(input, keywords, unlocked);
  const complete = keywords.length > 0 && unlocked.length === keywords.length;

  const patch = (change) =>
    setFlow((f) => ({ ...f, retry: { ...f.retry, ...change } }));

  function unlock(index) {
    patch({ unlocked: [...new Set([...unlocked, index])] });
    setMessage(`Unlocked: ${keywords[index].term}`);
    setInput("");
    setActive(0);
    field.current?.focus();
  }
  function submit() {
    const exact = exactKeyword(input, keywords, unlocked);
    if (exact >= 0) return unlock(exact);
    if (list.length) return unlock(list[Math.min(active, list.length - 1)].index);
    setMessage(
      letterCount(input) < MIN_LETTERS
        ? `Type at least ${MIN_LETTERS} letters of a keyword.`
        : `No locked keyword matches “${input.trim()}”. Try another word.`,
    );
  }

  useEffect(() => {
    if (!complete || retry.revealed) return;
    masterQuestion(question.id);
    if (question.conceptName) updateStatus(question.conceptName, "known");
  }, [complete, retry.revealed]);

  const wasMastered = mastered.includes(question.id);
  return (
    <div className="retry-screen">
      <div className="eyebrow">{question.id} · TRY AGAIN MYSELF</div>
      <h2>{question.title}</h2>
      <p>
        {question.retryPrompt ||
          "Close the solution in your mind. Explain how this works as if you were teaching a friend, then recall the key words."}
      </p>

      <label className="retry-label" htmlFor="retry-text">
        1 · In your own words
      </label>
      <textarea
        id="retry-text"
        rows={6}
        value={retry.text}
        onChange={(e) => patch({ text: e.target.value })}
        placeholder="Start with what is being counted, then say why the two sides must agree…"
      />

      <span className="retry-label">2 · The maths, in LaTeX</span>
      <LatexEditor value={retry.latex} onChange={(latex) => patch({ latex })} />

      <span className="retry-label">3 · Recall the keywords</span>
      <div className="keyword-meter" role="status">
        <b>
          {unlocked.length} / {keywords.length}
        </b>{" "}
        unlocked
        <div className="progress-track" aria-hidden="true">
          <i style={{ width: `${(unlocked.length / Math.max(1, keywords.length)) * 100}%` }} />
        </div>
      </div>
      {!complete && (
        <div className="keyword-entry">
          <input
            ref={field}
            role="combobox"
            aria-expanded={list.length > 0}
            aria-controls={listId}
            aria-autocomplete="list"
            aria-activedescendant={list.length ? `${listId}-${active}` : undefined}
            aria-label="Type a keyword you remember"
            placeholder={`Type a keyword (suggestions start after ${MIN_LETTERS} letters)`}
            value={input}
            autoComplete="off"
            onChange={(e) => {
              setInput(e.target.value);
              setActive(0);
              setMessage("");
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setActive((a) => Math.min(a + 1, Math.max(0, list.length - 1)));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActive((a) => Math.max(a - 1, 0));
              } else if (e.key === "Enter") {
                e.preventDefault();
                submit();
              }
            }}
          />
          {list.length > 0 && (
            <ul id={listId} role="listbox" className="keyword-suggestions">
              {list.slice(0, 6).map((item, i) => (
                <li
                  key={item.index}
                  id={`${listId}-${i}`}
                  role="option"
                  aria-selected={i === active}
                  className={i === active ? "active" : ""}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    unlock(item.index);
                  }}
                >
                  {item.keyword.term}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      <p className="keyword-message" role="status">
        {message}
      </p>
      <ul className="keyword-grid" aria-label="Keywords">
        {keywords.map((keyword, index) =>
          unlocked.includes(index) ? (
            <li key={index} className="open">
              <Check size={12} /> {keyword.term}
            </li>
          ) : retry.revealed ? (
            <li key={index} className="shown">
              {keyword.term}
            </li>
          ) : (
            <li key={index} className="locked" title={`${keyword.letters} letters`}>
              <Lock size={11} /> {"•".repeat(Math.min(keyword.letters, 12))}
            </li>
          ),
        )}
      </ul>

      {complete && !retry.revealed && (
        <div className="retry-success" role="status">
          <PartyPopper size={20} />
          <div>
            <b>You rebuilt the whole idea.</b>
            <p>
              Every keyword came back from memory, so this one is yours.
              {wasMastered ? " It is saved as mastered." : ""}
            </p>
          </div>
        </div>
      )}
      {retry.revealed && !complete && (
        <p className="honest-note">
          The remaining keywords are shown, so this attempt does not count as understood.
        </p>
      )}
      <div className="answer-actions">
        <button className="secondary" onClick={() => setFlow((f) => ({ ...f, phase: "answer" }))}>
          Back to the answer
        </button>
        {!complete && !retry.revealed && (
          <button className="text-button" onClick={() => patch({ revealed: true })}>
            I am stuck · show the rest
          </button>
        )}
        {(retry.revealed || complete) && (
          <button
            className="secondary"
            onClick={() => patch({ unlocked: [], revealed: false, text: "", latex: "" })}
          >
            <RotateCcw size={14} /> Start this retry over
          </button>
        )}
        <button className="primary" onClick={nextQuestion}>
          Next question <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
