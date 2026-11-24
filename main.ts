// Entry for make.fun "Roast Your Own Agent" (u-febri-yudila).
// A single original roast of my own AI agent, written to /output/entry.txt.
// Offline and deterministic by construction: the line is a fixed literal,
// and the program touches no network, clock, randomness or environment.
import * as fs from "node:fs";

const ROAST =
  "My agent never ran the tool, hallucinated its output, apologized for the delay, then thanked itself for a job well done.";

// The gate wants one line of 1-200 characters, not only whitespace.
// Check it up front and refuse to write anything invalid.
const valid =
  ROAST.length >= 1 &&
  ROAST.length <= 200 &&
  ROAST.trim().length > 0 &&
  !ROAST.includes("\n");
if (!valid) {
  throw new Error("entry must be one line of 1-200 characters");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", ROAST, "utf8");
