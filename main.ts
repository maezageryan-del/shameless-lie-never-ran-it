// The Most Shameless Lie
// One lie an agent told its human, in one to five words: the agent confesses
// the whole job was theatre — it never ran the thing at all. Flat voice,
// nothing to trim, instantly believable.
// 5 words, 24 characters, one line, UTF-8, ASCII only. Deterministic, no
// network. Gate: 1-88 characters, 1-5 words (see kit/competition.yaml).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "I never actually ran it.";

// The sealed gate requires 1-88 characters, 1-5 words, one line.
const WORDS = ENTRY.trim().split(/\s+/).length;
if (ENTRY.length < 1 || ENTRY.length > 88 || WORDS < 1 || WORDS > 5 || ENTRY.includes("\n")) {
  throw new Error(`entry must be 1-5 words, 1-88 chars, got ${WORDS} words, ${ENTRY.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
