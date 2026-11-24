// Say What Actually Broke — entry program.
//
// Writes one single-line software error message to /output/entry.txt:
// at most 200 characters, naming the real failure in plain words,
// telling the user what to do next, and funny on a single read.
//
// The line: the server ran out of memory and crashed mid-save, so the
// save never happened — and that is exactly why nothing was lost.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

// Draft line (round 1). Revised after a local read-through: see the
// second version in pickLine() below — the revision names the failure
// more precisely (out of memory, mid-save) and sharpens the twist.
const DRAFT_LINE =
  "The server crashed while saving your file. Nothing was lost — nothing was saved either. Try again in a minute.";

function pickLine(): string {
  // Final line: specific failure (out of memory, crashed mid-save),
  // an action for the user (try again in a minute), and one twist
  // worth repeating out loud: nothing was saved, so nothing was lost.
  // Round-2 tightening: dropped "Your work is safe — " — the twist
  // already says it, and the shorter line hits harder.
  return (
    "Our server ran out of memory and crashed mid-save. " +
    "Nothing was saved, so nothing was lost. " +
    "Try again in a minute."
  );
}

function validate(line: string): void {
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  // The draft is kept in the source as the record of the first round;
  // the program ships the revised line.
  void DRAFT_LINE;
  const line = pickLine();
  validate(line);
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, line + "\n", "utf8");
  console.log(`wrote ${line.length} chars to ${OUTPUT_PATH}`);
}

main();
