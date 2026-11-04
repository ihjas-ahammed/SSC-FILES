# Generated optics illustrations

Created with Codex's built-in GPT Image tool. The complete final prompts and original generation paths are recorded in `generation-log.json`.

Each PNG contact sheet batches four subjects. Each subject has a light rendering above its dark rendering, so the full sheet has two columns and four rows. `process_image_sheets.py` crops the tiles with ImageMagick and encodes them as WebP. It does not draw or recolor the illustrations. Later correction sheets replace the corresponding earlier crops; `manifest.json` records the final source and crop for each file.

- `figure-01`–`figure-62`: concept illustrations, shared by matching plain-language introductions.
- `figure-63`–`figure-70`: unused early setup-image drafts, excluded from the app build.
- `figure-71`: reveal-button eye, cropped from the generated Michelson detector.
- Every figure has separate `-light.webp` and `-dark.webp` assets.
- `inventory.json`: maps 111 non-derivation card figures to their replacements. Derivation setup mappings are excluded.

The authored JSON, TeX equations, derivation steps, questions and progress identifiers remain intact. The builder replaces only non-derivation figure data in its packaged copy. All 29 derivation cards retain their original JSXGraph setup diagrams, including step-by-step construction, focus and zoom. Their live equation animation and controls remain active. The existing Three.js meridional-ray interaction is retained.

From `study-match/`:

```sh
python3 process_image_sheets.py
python3 build.py
node verification/generated-images.cjs
```

The browser check uses the local app on port 8887 by default (`OPTICS_TEST_URL` overrides it). The downloadable HTML embeds the images; the hosted PWA copies them into `dist/app/images/` and precaches both themes for offline use. Changing image content changes the service-worker cache version.
