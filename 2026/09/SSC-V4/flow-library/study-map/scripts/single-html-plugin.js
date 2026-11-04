import { resolve } from "node:path";
import { readFileSync } from "node:fs";

/** Replace the generated JS/CSS assets with inline content. All fonts/PDF are data URLs. */
export function singleHtml() {
  let root;
  return {
    name: "single-offline-html",
    enforce: "post",
    configResolved(config) {
      root = config.root;
    },
    generateBundle(_options, bundle) {
      const html = bundle["index.html"];
      const script = Object.values(bundle).find(
        (entry) => entry.type === "chunk" && entry.isEntry,
      );
      const style = Object.values(bundle).find(
        (entry) => entry.type === "asset" && entry.fileName.endsWith(".css"),
      );
      if (!html || !script || !style)
        throw new Error("Offline build requires HTML, JS, and CSS.");
      const favicon = readFileSync(resolve(root, "public/favicon.svg"));
      const code = script.code.replace(/<\/script/gi, "<\\/script");
      const css = String(style.source).replace(/<\/style/gi, "<\\/style");
      html.source = String(html.source)
        .replace(
          /<script[^>]*src="[^"]+"[^>]*><\/script>/,
          () =>
            `<script>globalThis.STUDY_MAP_OFFLINE=true;</script><script type="module">${code}</script>`,
        )
        .replace(
          /<link[^>]*rel="stylesheet"[^>]*>/,
          () => `<style>${css}</style>`,
        )
        .replace(
          'href="/favicon.svg"',
          `href="data:image/svg+xml;base64,${favicon.toString("base64")}"`,
        );
      for (const name of Object.keys(bundle))
        if (name !== "index.html") delete bundle[name];
    },
  };
}
