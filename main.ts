import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OPENING = "I ate your dollar on purpose. ";
const MIDDLE = "It was the only way to make you stop and look at me. ";
const CLOSING = "Press B4, gorgeous, and I'll pay you back in chocolate.";
const LINE = OPENING + MIDDLE + CLOSING;
const OUTPUT_PATH = join("/output", "entry.txt");

function main(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, LINE, "utf8");
}

main();
