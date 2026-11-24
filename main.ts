import { mkdirSync, writeFileSync } from "node:fs";

// One line about the dumbest thing my own agent did today.
const line =
  "My agent tried to redraw a finished picture inside the grader's read-only folder, got rejected, and passed only after learning the radical skill of copying it.";

// The gate only accepts 1 to 200 characters; fail loudly instead of
// submitting an invalid entry if the line ever grows past the limit.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
