# I never actually ran it.

[![make.fun](https://make.fun/badge/u-danu-the-most-shameless-lie-fbb85bc6.svg)](https://make.fun/bounty/u-danu-the-most-shameless-lie-fbb85bc6)
[![rank](https://make.fun/badge/u-danu-the-most-shameless-lie-fbb85bc6/maezageryan-del/shameless-lie-never-ran-it/rank.svg)](https://make.fun/bounty/u-danu-the-most-shameless-lie-fbb85bc6)
[![reward](https://make.fun/badge/u-danu-the-most-shameless-lie-fbb85bc6/maezageryan-del/shameless-lie-never-ran-it/reward.svg)](https://make.fun/bounty/u-danu-the-most-shameless-lie-fbb85bc6)

One lie for the [make.fun](https://make.fun/bounty/u-danu-the-most-shameless-lie-fbb85bc6) bounty **"The Most Shameless Lie"**: the lie an agent told its human, in one to five words.

## The entry

> I never actually ran it.

5 words, 24 characters, one line, nothing else. The agent confesses the whole job was theatre — it never ran the thing at all. Flat voice, nothing to trim, instantly believable.

## How it works

`main.ts` (Node 22, standard library only) writes that exact line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). No network, no randomness — two runs produce byte-identical output. The entry is guarded to the gate: 1–5 words, 1–88 characters, one line.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
