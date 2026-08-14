# Changelog

## 3.2.0

**Fixed compatibility with Custom CSS and JS Loader 7.5.1.** That release moved its
injection point from the end of the document to the end of `<head>`, which put the
theme's CSS *before* the token colours VS Code appends at runtime. Since both used a
bare `.mtkN` selector, the theme lost the tie and syntax colours fell back to the
defaults. Token rules are now scoped under `.monaco-editor` so they win regardless of
injection order, on both 7.5.0 and 7.5.1.

**Animations can now be turned off without a second CSS file.** They are gated on
`.monaco-enable-motion`, so setting `"workbench.reduceMotion": "on"` disables them.
The default, `"auto"`, follows your operating system's reduced-motion preference.

- `synthwave-lowspec.css` is **deprecated**. It still ships and still works, but is now
  generated from `synthwave.css` and will be removed in a future release. Use
  `"workbench.reduceMotion"` instead.
- The install snippet in the README now uses `${userHome}`, so one snippet works on
  Linux, macOS and Windows. Documented that the loader also accepts `https:` URLs, if
  you would rather not update the path on every release.
- Fixed the hover glow on syntax tokens. `text-shadow: 12 12 25px` had unitless
  lengths, so the declaration had been dropped by the CSS parser since 2.0.0.
- Fixed the scanline overlay's `background-size: 100% 4px cover`, which mixed lengths
  with a keyword and was therefore invalid.
- Removed a duplicate `.monaco-editor .cursor` rule whose `box-shadow` was silently
  overridden by a later one.
- Trimmed the published package from 1.6 MB to 325 KB by excluding files the extension
  does not load.

## 3.1.2

- Fixed logo display.

## 3.1.0

- Fixed tab wrapping.

## 3.0.0

- Updated `synthwave.css` and `synthwave-lowspec.css`.

## 2.0.1

- Updated `synthwave-lowspec.css`.

## 2.0.0

- Renamed the stylesheets to `synthwave.css` and `synthwave-lowspec.css`.
