# Generated abstract-algebra artwork

Created using Codex's built-in GPT Image tool. `generation-log.json` contains the complete prompts and original generation paths. `inventory.json` maps non-derivation cards and UI icons to their generated illustrations.

Each PNG sheet contains four subjects. Each subject has two versions: light above and dark below. The full sheet therefore has two columns and four rows. The processing script measures the palette boundaries, crops with ImageMagick and encodes WebP. It never draws or recolors the artwork. Later correction sheets replace the relevant earlier crops; `manifest.json` records the final source and crop of every image.

The 59 non-derivation figure placements share 45 concept illustrations. Seven generated icon assets complete the set. Each of the 52 assets has separate light and dark files, for 104 WebP images in total.

All 63 derivation cards are excluded from replacement. Their original TeX, steps, JSXGraph data, construction, focus and zoom remain unchanged. The 27 authored JSXGraph derivation setups retain their renderer and dependencies. Questions, progress identifiers and source data are unchanged.

From `study-match/`:

```sh
python3 process_image_sheets.py
python3 build.py --strict
python3 verification/generated_images.py
```

The downloadable HTML embeds all generated images. The hosted app copies them into `dist/app/images/` and precaches both themes. Image content is included in the service-worker version hash. Browser interaction testing is left to the user.
