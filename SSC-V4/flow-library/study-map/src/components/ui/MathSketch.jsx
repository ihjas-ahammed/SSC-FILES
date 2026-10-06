import { useEffect, useRef, useState } from "react";
import { Eraser, Undo2, WandSparkles, FlaskConical } from "lucide-react";
import { recognize } from "../../lib/handwriting.js";
import { loadTemplates, classifyGroup } from "../../lib/handwritingTemplates.js";
import MathText from "./MathText";

const HEIGHT = 200;

/**
 * Experimental: draw one line of maths with a finger, pen or mouse. Symbols are
 * guessed by template matching and laid out as LaTeX (powers, subscripts,
 * fractions, binomials, sums). The guess is editable and nothing is graded by it.
 */
export default function MathSketch({ onInsert }) {
  const canvas = useRef(null);
  const strokes = useRef([]);
  const live = useRef(null);
  const [count, setCount] = useState(0);
  const [guess, setGuess] = useState("");
  const [status, setStatus] = useState("Draw left to right, one line.");
  const timer = useRef(null);

  const paint = () => {
    const el = canvas.current;
    if (!el) return;
    const ctx = el.getContext("2d");
    const dpr = el.width / el.clientWidth;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, el.clientWidth, HEIGHT);
    ctx.strokeStyle = getComputedStyle(el).color;
    ctx.lineWidth = 3;
    ctx.lineCap = ctx.lineJoin = "round";
    for (const stroke of [...strokes.current, ...(live.current ? [live.current] : [])]) {
      ctx.beginPath();
      stroke.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
      if (stroke.length === 1) ctx.lineTo(stroke[0].x + 0.1, stroke[0].y);
      ctx.stroke();
    }
  };

  useEffect(() => {
    const el = canvas.current;
    const fit = () => {
      const dpr = window.devicePixelRatio || 1;
      el.width = Math.max(1, Math.round(el.clientWidth * dpr));
      el.height = Math.round(HEIGHT * dpr);
      paint();
    };
    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(el);
    loadTemplates().catch(() => setStatus("Could not load the symbol templates."));
    return () => {
      observer.disconnect();
      clearTimeout(timer.current);
    };
  }, []);

  const read = async () => {
    if (!strokes.current.length) {
      setGuess("");
      setStatus("Draw left to right, one line.");
      return;
    }
    await loadTemplates();
    const result = recognize(strokes.current, classifyGroup);
    setGuess(result.latex);
    setStatus(
      result.unknown
        ? `${result.unknown} of ${result.symbols} symbols were not recognised. Edit the LaTeX below.`
        : `Read ${result.symbols} symbols. Check it before inserting.`,
    );
  };
  const later = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(read, 650);
  };
  const point = (event) => {
    const rect = canvas.current.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  };
  const down = (event) => {
    event.preventDefault();
    canvas.current.setPointerCapture(event.pointerId);
    clearTimeout(timer.current);
    live.current = [point(event)];
    paint();
  };
  const move = (event) => {
    if (!live.current) return;
    live.current.push(point(event));
    paint();
  };
  const up = () => {
    if (!live.current) return;
    strokes.current.push(live.current);
    live.current = null;
    setCount(strokes.current.length);
    paint();
    later();
  };
  const undo = () => {
    strokes.current.pop();
    setCount(strokes.current.length);
    paint();
    read();
  };
  const clear = () => {
    strokes.current = [];
    setCount(0);
    setGuess("");
    setStatus("Draw left to right, one line.");
    paint();
  };

  return (
    <section className="math-sketch" aria-label="Draw a line of maths (experimental)">
      <div className="sketch-head">
        <FlaskConical size={14} />
        <b>Draw math</b>
        <span className="sketch-badge">EXPERIMENTAL</span>
      </div>
      <canvas
        ref={canvas}
        className="sketch-canvas"
        role="img"
        aria-label="Drawing area"
        style={{ height: HEIGHT }}
        onPointerDown={down}
        onPointerMove={move}
        onPointerUp={up}
        onPointerCancel={up}
      />
      <p className="sketch-status" role="status">
        {status}
      </p>
      <label className="sketch-guess">
        <span>LaTeX guess</span>
        <input
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          spellCheck={false}
          aria-label="Recognised LaTeX, editable"
        />
      </label>
      {guess && (
        <div className="sketch-preview" aria-label="Preview">
          <MathText text={`$${guess}$`} />
        </div>
      )}
      <div className="sketch-actions">
        <button className="secondary" onClick={undo} disabled={!count}>
          <Undo2 size={14} /> Undo stroke
        </button>
        <button className="secondary" onClick={clear} disabled={!count}>
          <Eraser size={14} /> Clear
        </button>
        <button className="secondary" onClick={read} disabled={!count}>
          <WandSparkles size={14} /> Read again
        </button>
        <button
          className="primary"
          disabled={!guess}
          onClick={() => {
            onInsert(guess);
            clear();
          }}
        >
          Insert into my LaTeX
        </button>
      </div>
    </section>
  );
}
