// One Letter: Coffee or Tea — round 1 entry.
// The entry is exactly one letter: "A" for coffee. No word, no explanation,
// no punctuation. The gate requires /output/entry.txt to be exactly 1 char.
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";

// A = coffee. The stance is the whole answer: coffee is the bolder, louder,
// more vivid drink — dark, hot, the jolt that starts the day — where tea is
// the quieter, gentler stance. On the judge's criteria (vivid, funny, true),
// the coffee stance lands harder: it is the drink people actually reach for
// first, and the letter A itself is first, primary, unmistakable.
const LETTER = "A";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");

// Assert immediately: exactly 1 byte, the keeper letter, no trailing newline.
// Byte-level check, not just string length: a stray newline would make the
// entry 2 bytes and fail the gate (1 to 1 characters).
const out = readFileSync("/output/entry.txt", "utf8");
const bytes = Buffer.byteLength(out, "utf8");
if (bytes !== 1 || out !== LETTER) {
  throw new Error(
    `entry.txt must be exactly "A" (1 byte); got ${JSON.stringify(out)} (${bytes} bytes)`,
  );
}
