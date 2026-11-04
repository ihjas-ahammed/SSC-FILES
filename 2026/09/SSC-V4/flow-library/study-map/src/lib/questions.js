export function optionsFor(item, salt = 0) {
  const hash = [...item.prompt].reduce(
    (a, c) => (a * 31 + c.charCodeAt(0)) >>> 0,
    salt + 7,
  );
  const shift = hash % item.options.length;
  return item.options.map((_, i) => {
    const original = (i + shift) % item.options.length;
    return { text: item.options[original], correct: original === item.correct };
  });
}
