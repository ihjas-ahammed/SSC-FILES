import react from "@vitejs/plugin-react";
import { singleHtml } from "./single-html-plugin.js";
export function studyMapConfig(root) {
  return {
    root,
    configFile: false,
    base: "./",
    publicDir: false,
    plugins: [react(), singleHtml()],
    build: {
      outDir: "build",
      assetsInlineLimit: () => true,
      cssCodeSplit: false,
      modulePreload: false,
      rollupOptions: { output: { inlineDynamicImports: true } },
      chunkSizeWarningLimit: 4000,
    },
  };
}
