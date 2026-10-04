import katex from "katex";
import { byName } from "../course.js";

export function appendMath(parent, text) {
  for (const part of String(text).split(
    /(\$\$[\s\S]*?\$\$|\$[^$]*?\$|\[\[[^\]]+\]\])/g,
  )) {
    if (part.startsWith("$")) {
      const display = part.startsWith("$$"),
        el = document.createElement("span");
      el.className = display ? "review-equation" : "review-inline-equation";
      el.innerHTML = katex.renderToString(
        part.slice(display ? 2 : 1, display ? -2 : -1),
        {
          displayMode: false,
          throwOnError: false,
          strict: false,
          output: "html",
        },
      );
      parent.append(el);
    } else if (part.startsWith("[[")) {
      const [name, label] = part.slice(2, -2).split("|");
      const el = document.createElement("span");
      el.className = "review-term";
      el.textContent = label || name;
      parent.append(el);
    } else parent.append(document.createTextNode(part));
  }
}
// Break prose into manageable blocks; never split a LaTeX expression.
function chunks(text) {
  const tokens =
    String(text).match(
      /\$\$[\s\S]*?\$\$|\$[^$]*?\$|\[\[[^\]]+\]\]|[^\s$]+|\s+/g,
    ) || [];
  const result = [];
  let buffer = "";
  for (const token of tokens) {
    if (buffer.length + token.length > 520 && buffer.trim()) {
      result.push(buffer.trim());
      buffer = "";
    }
    buffer += token;
  }
  if (buffer.trim()) result.push(buffer.trim());
  return result;
}
function section(title, text, concept, start = false) {
  return chunks(text).map((chunk, i) => {
    const block = document.createElement("section");
    block.className = "review-block";
    block.dataset.concept = concept;
    const heading = document.createElement(start ? "h2" : "h3");
    heading.textContent = i ? `${title} · continued` : title;
    const body = document.createElement("p");
    appendMath(body, chunk);
    block.append(heading, body);
    return block;
  });
}
export function reviewBlocks(bookmarks) {
  return bookmarks.flatMap((entry, i) => {
    const c = byName[entry.name];
    return [
      ...section(
        `${String(i + 1).padStart(2, "0")}  ${c.name}`,
        c.meaning,
        c.name,
        true,
      ),
      ...section("Definition", c.linkedFormal || c.formal, c.name),
      ...section("Example", c.example, c.name),
      ...section(
        "Prerequisites",
        c.prerequisites.join(" · ") || "Ground concept",
        c.name,
      ),
      ...section(
        "My revision notes",
        entry.note || "No personal notes added.",
        c.name,
      ),
    ];
  });
}
