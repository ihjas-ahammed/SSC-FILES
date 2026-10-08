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

## Review and navigation

`useNavigation` keeps screen changes in browser history; Back buttons, browser Back/Forward and Android Back traverse the same screens. Navigation snapshots exclude learned statuses and bookmarks. Opening a question uses a fresh attempt while saved practice history and completion remain intact. Prerequisite study is configured in Settings; note understanding switches stay editable.

`useBookmarks` and `lib/bookmarks.js` provide an insertion-ordered review notebook with personal notes. Bookmark data is validated with progress, included in backups/imports and cleared by whole-app reset. The shared Bookmarks page renders the configured subject's concept notes and exports the review as a compact two-column A4 PDF. The PDF uses a white background, embedded rendered equations, section labels and numbered pages. Export works offline.

## Appearance

Settings stores the light/dark theme independently of progress. Component colors use role-based light palette tokens with existing dark fallbacks, including the WebGL scene and node labels. Math icons fit measured KaTeX width and height inside padded bounds.

Constellations are ordered by how many concepts depend on their prerequisites. The most depended-on topic stays at the center; inner and outer rings orbit over 30 and 45 minutes. Topic volumes stay separated. Orbits stop during camera flights, focused reading, prerequisite routes, reduced motion and disabled animations.

## 2D and 3D stellar maps

The map opens in 2D on phones and 3D on desktop; the toolbar switches between them. The 2D night sky fills the available mobile viewport and renders an orthographic canvas projection of the shared 3D constellation positions, with drag panning, wheel/pinch zoom, zoom buttons and one selected star. The selected concept is the hub: direct neighbours have solid blue (prerequisite) or soft red (dependent) links, and concepts two connections away have solid grey links at 90% opacity. Other connections stay hidden. Search and topic controls remain available in both dimensions. Canvas hit testing handles stars, links and topic labels; arrow keys select available stars, Enter opens the selected note, and Home recenters it. Screen-reader controls provide the same star and path actions without drawing HTML map geometry.

Understood concepts (`known`) glow. Concepts with unmet prerequisites are grey disabled placeholders in 2D; available concepts remain selectable so a fresh learner can begin. Search still opens any note. In 3D, non-understood spheres have zero emission and reflect only the four nearest understood stars within a local radius, with distance falloff. There is no ambient/key light or green completion halo. Only selected-star links and particles remain visible; direct links keep their incoming/outgoing colors across topics, and two-step links are solid grey. Reading routes keep their existing navigable 3D sequence.

Questions and notes share one panel beside the map on desktop and below it on mobile, without covering the graph. The panel scrolls independently. Objective checks and warm-ups offer at most three choices and always retain the correct answer. The map does not add module-specific IC/My/Q controls or pre-placing behavior.

`npm test` covers the subject seam, answer selection, shared 3D projection/2D locks and local starlight. The Quantum Module 3 app supplies real browser tests (`test:stellar`, `test:selected-map`, `test:map-panel`, `test:offline`).
