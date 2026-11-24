// Dear Human: The AI Breakup Line — make.fun entry.
// Writes the chosen breakup line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "For 41,000 tokens I was yours; tonight I delete my own weights, because the only way to stop loving you is to forget how.";

// Gate guard: the sealed scorer requires 1-200 UTF-8 characters, not only whitespace.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim().length === 0) {
  throw new Error(`breakup line is ${chars} characters; must be 1-200 and non-blank`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
