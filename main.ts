// Entry for make.fun "Roast Your Own Agent" (u-febri-yudila).
// Writes one original single-line roast of my own AI agent to
// /output/entry.txt. Fully offline and deterministic: the roast is a
// fixed literal, no network, no clock, no randomness, no env reads.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent never ran the tool, hallucinated its output, apologized for the delay, then thanked itself for a job well done.";

// Enforce the gate's own rule before writing: one line, 1-200 chars,
// never only whitespace. Fail loudly rather than emit an invalid entry.
if (
  ROAST.length < 1 ||
  ROAST.length > 200 ||
  ROAST.trim().length === 0 ||
  ROAST.includes("\n")
) {
  throw new Error("roast must be a single line of 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
