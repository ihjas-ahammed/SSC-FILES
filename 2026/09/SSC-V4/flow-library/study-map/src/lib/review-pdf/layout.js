export const PAGE = {
  width: 210,
  height: 297,
  margin: 12,
  top: 25,
  bottom: 15,
  gutter: 8,
};
export const PX_PER_MM = 96 / 25.4;
export const columnWidth = (PAGE.width - PAGE.margin * 2 - PAGE.gutter) / 2;
export const columnHeight = PAGE.height - PAGE.top - PAGE.bottom;
const styles = `
.review-print-column { width: ${columnWidth * PX_PER_MM}px; background: #fff; color: #172b3a; padding: 0; font-family: "DM Sans", sans-serif; font-size: 10px; line-height: 1.55; }
.review-print-column * { box-sizing: border-box; }
.review-block { margin: 0 0 12px; padding: 0 0 9px; border-bottom: 1px solid #dce4ea; overflow-wrap: anywhere; }
.review-block h2 { font: 700 14px/1.3 "DM Sans", sans-serif; color: #106f60; margin: 0 0 8px; letter-spacing: -.25px; }
.review-block h3 { font: 700 10px/1.4 "DM Sans", sans-serif; color: #335166; margin: 0 0 5px; letter-spacing: 0; }
.review-block p { font: 400 10px/1.55 "DM Sans", sans-serif; color: #172b3a; margin: 0; white-space: pre-wrap; }
.review-term { color: #106f60; font-weight: 600; }
.review-equation { display: block; text-align: left; padding: 6px 0; }
.review-inline-equation { display: inline; }
.review-print-column .katex { font-size: 1.02em; white-space: normal; }
.review-print-column .katex .base { display: inline-block; white-space: nowrap; }
.review-print-column .katex-html { white-space: normal; }
.review-print-column .katex .base + .base { margin-left: 2px; }
`;
export function createPrintHost() {
  const host = document.createElement("div"),
    style = document.createElement("style");
  host.className = "review-print-host";
  host.style.cssText =
    "position:fixed;left:-10000px;top:0;z-index:-1;pointer-events:none;background:#fff;";
  style.textContent = styles;
  host.append(style);
  document.body.append(host);
  return host;
}
export function fitEquations(column) {
  const width = columnWidth * PX_PER_MM;
  for (const base of column.querySelectorAll(".katex .base")) {
    const natural = base.getBoundingClientRect().width;
    if (natural > width) {
      // Large indivisible expressions (e.g. matrices) fit inside the column.
      const scale = width / natural;
      base.style.transformOrigin = "top left";
      base.style.transform = `scale(${scale})`;
      const height = base.getBoundingClientRect().height;
      const holder = document.createElement("span");
      holder.style.cssText = `display:inline-block;vertical-align:middle;width:${width}px;height:${height}px;position:relative;`;
      base.replaceWith(holder);
      holder.append(base);
      base.style.position = "absolute";
    }
  }
}
export function paginate(host, blocks) {
  const columns = [];
  const newColumn = () => {
    const column = document.createElement("div");
    column.className = "review-print-column";
    host.append(column);
    columns.push(column);
    return column;
  };
  let column = newColumn();
  for (const block of blocks) {
    column.append(block);
    fitEquations(column);
    if (
      column.getBoundingClientRect().height > columnHeight * PX_PER_MM &&
      column.children.length > 1
    ) {
      block.remove();
      column = newColumn();
      if (!block.querySelector("h2")) {
        const label = document.createElement("h2");
        label.textContent = `${block.dataset.concept} · continued`;
        block.prepend(label);
      }
      column.append(block);
    }
  }
  // Balance a final unmatched column while preserving the saved reading order.
  const last = columns.at(-1);
  if (columns.length % 2 && last.children.length >= 4) {
    const blocks = [...last.children];
    const target = last.getBoundingClientRect().height / 2;
    let split = 1,
      distance = Infinity;
    for (let i = 1; i < blocks.length; i++) {
      const height =
        blocks[i].getBoundingClientRect().top -
        last.getBoundingClientRect().top;
      if (Math.abs(height - target) < distance) {
        distance = Math.abs(height - target);
        split = i;
      }
    }
    const other = newColumn();
    blocks.slice(split).forEach((block) => other.append(block));
    if (!other.firstElementChild.querySelector("h2")) {
      const label = document.createElement("h2");
      label.textContent = `${other.firstElementChild.dataset.concept} · continued`;
      other.firstElementChild.prepend(label);
    }
  }
  return columns;
}
