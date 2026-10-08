export function optionsFor(item, salt = 0) {
  const hash = [...item.prompt].reduce(
    (a, c) => (a * 31 + c.charCodeAt(0)) >>> 0,
    salt + 7,
  );
  const shift = hash % item.options.length;
  const options = item.options.map((_, i) => {
    const original = (i + shift) % item.options.length;
    return { text: item.options[original], correct: original === item.correct };
  });
  // Keep the answer and at most two distractors, then rotate again so the
  // answer is not predictably last when it was outside the first three.
  if (options.length <= 3) return options;
  const choices = [
    options.find((option) => option.correct),
    ...options.filter((option) => !option.correct).slice(0, 2),
  ];
  return choices.map((_, i) => choices[(i + (hash % 3)) % 3]);
}
