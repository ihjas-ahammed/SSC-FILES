export default function PathExplanation({ path, onSelect }) {
  if (!path) return null;
  return (
    <div className="path-explanation" role="status">
      <div>
        <button onClick={() => onSelect(path.a)}>{path.a}</button>
        <span aria-hidden="true">→</span>
        <button onClick={() => onSelect(path.b)}>{path.b}</button>
      </div>
      <p>
        {path.route
          ? "The next stop in your reading route. This line shows reading order."
          : `${path.a} is a prerequisite for ${path.b}. Understand the first idea to build the second.`}
      </p>
    </div>
  );
}
