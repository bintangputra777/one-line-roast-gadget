// One-Line Roast: The Gadget You Use Every Day
// Writes a single original roast line (at most 200 characters) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My phone unlocks with my face, tracks my steps, knows my secrets — yet every morning it still asks me to prove I'm human.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
