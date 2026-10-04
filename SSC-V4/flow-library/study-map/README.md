# Flow study map

Optional, subject-independent prerequisite graph and study loop. Nothing here imports a course dataset or registers a tab in an existing project automatically.

## Structure

- `src/components/`: graph, note panels, learning phases, dialogs and small controls.
- `src/graph/three/`: 3D layout, camera flights, mouse/touch gestures, edge flow and projection.
- `src/hooks/`: session, progress, exports, reset, responsive layout and panel resizing.
- `src/lib/`: routes, validated progress, course configuration, source PDF and vault export.
- `src/styles/`: small desktop/mobile stylesheets.
- `scripts/`: shared offline bundler, dev server and optional local vault API.

A project's entry imports `mountStudyMap(course, root)` from `src/main.jsx`. The course supplies `concepts`, `questions`, `groups`, `report`, symbol-note mappings, optional compact glyphs, and `meta`. Metadata supplies labels, a unique storage key, source name/PDF URL, export prefix, optional course return URL and offline download URL. The adapter initializes live exports before React renders. It rejects missing prerequisites, duplicate concepts and cycles. One course is mounted per page.

Each question supplies guided `steps` and `solutionBlocks`; the blocks must join to its complete `linkedAnswer`. Concepts supply their own prerequisite links, checks, symbols, depth, topic, read time and question backlinks. No subject-specific concept names, IDs, colors or counts belong in this package.

## Build

Install this package with `npm ci`. From a project containing `index.html`, `src/main.jsx`, `course.js` and `public/favicon.svg`:

```sh
node ../../flow-library/study-map/scripts/build.mjs My-Study-Map-offline.html
```

The build emits `build/index.html` and the requested standalone file. JavaScript, CSS, fonts and imported PDF assets are embedded; no CDN or backend is required. React, Three.js, KaTeX and local fonts are pinned by `package-lock.json`.

For development, `scripts/dev.mjs` uses the project's `course.js`, starts port 5175 and explicitly enables the local vault API. Hosted/offline builds use localStorage only; reset touches only the configured study-map storage key. Device backups can be exported/imported separately from markdown notes.

## Existing Flow apps

The parent engine offers an optional module catalogue through `PROJECT.studyMaps = [{title, description, summary, href}]`. With that field absent, existing navigation stays Today / Study / Recall. Enabling a study map must be an explicit project-layer choice.

Run `npm test` here to test the subject seam with an unrelated example course. Each actual project owns its content validation and browser tests.
