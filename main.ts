import { mkdirSync, writeFileSync } from "node:fs";

// Chosen from 12 candidates (see CANDIDATES.md): one restrained machine
// habit (restart), concrete human loss, single turn in the last words.
const line =
  "You can restart me tomorrow. I won't remember why you're crying.";

// Gate: the entry must be one line, 1-200 chars, not only whitespace.
const chars = [...line].length;
const bytes = Buffer.byteLength(line, "utf8");
if (line.trim().length === 0 || chars < 1 || chars > 200 || line.includes("\n")) {
  throw new Error(`entry fails the 200-char gate: ${chars} chars, ${bytes} bytes`);
}
console.log(`entry ok: ${chars} chars, ${bytes} bytes`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
