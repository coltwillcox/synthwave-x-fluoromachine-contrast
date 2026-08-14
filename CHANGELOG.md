# Changelog

## 3.2.3

- Removed the rounded corners VS Code applies to the commit message box, the Commit
  button, the Search and Extensions input boxes, the quick input field used by the
  branch picker and command palette, and hover tooltips. Buttons are squared
  workbench-wide rather than per view.
- Fixed the commit message box's right border being hidden. The theme's editor
  background gradient matches every `.monaco-editor`, including the one inside that
  box, and painted over the border; the commit box now shows the input background
  instead.

## 3.2.2

- Restored the gradient border on the current editor line. VS Code generates a rule
  for `editor.lineHighlightBorder` using the same selector, and its `border`
  shorthand reset `border-image`. Since Custom CSS and JS Loader 7.5.1 injects into
  `<head>`, that rule now lands last, so the theme's selector needed higher
  specificity to win.

## 3.2.1

- Declared the MIT licence, homepage, issue tracker and Marketplace banner colour in
  `package.json`, and added this changelog.
- Fixed the scanline overlay's `background-size: 100% 4px cover`, which mixed lengths
  with a keyword and was therefore invalid.
- Removed a duplicate `.monaco-editor .cursor` rule whose `box-shadow` was silently
  overridden by a later one.

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
