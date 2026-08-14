/*
 * Generates synthwave-lowspec.css from synthwave.css by stripping every
 * animation.
 *
 * DEPRECATED. synthwave.css now gates its animations on .monaco-enable-motion,
 * so users can disable them with "workbench.reduceMotion": "on" instead of
 * linking a second file. This script exists so the old file keeps working for
 * people whose settings.json still points at it, and is meant to be removed
 * along with synthwave-lowspec.css in a future release.
 */

const fs = require("fs");
const path = require("path");

const dir = __dirname;
const banner =
	"/* GENERATED from synthwave.css by build-lowspec.js -- do not edit.\n" +
	" *\n" +
	" * DEPRECATED: use synthwave.css with \"workbench.reduceMotion\": \"on\".\n" +
	" * This file will be removed in a future release.\n" +
	" */\n";

const src = fs.readFileSync(path.join(dir, "synthwave.css"), "utf8");

const out = src
	// drop animation declarations
	.replace(/^[ \t]*animation:[^;]*;[ \t]*\r?\n?/gm, "")
	// drop @keyframes blocks (one level of nesting: the percentage steps)
	.replace(/@keyframes[^{]*\{(?:[^{}]*\{[^{}]*\})*[^{}]*\}\r?\n?/g, "")
	// drop rules left empty by the above
	.replace(/^[^{}@\n][^{}]*\{\s*\}\r?\n?/gm, "")
	// drop @media blocks left empty
	.replace(/@media[^{]*\{\s*\}\r?\n?/g, "")
	// collapse runs of blank lines
	.replace(/\n{3,}/g, "\n\n")
	.replace(/\n+$/, "\n");

fs.writeFileSync(path.join(dir, "synthwave-lowspec.css"), banner + out);

console.log("synthwave-lowspec.css generated from synthwave.css");
