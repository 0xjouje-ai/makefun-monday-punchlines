// Monday Morning Punchlines — one joke about Monday mornings, <= 200 chars.
// The program writes the joke to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My bed and my alarm went to court Monday morning over custody of me. " +
  "The alarm won — it had the stronger case for waking me up.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
console.log(`Wrote ${joke.length} characters to /output/entry.txt`);
