# Say What Actually Broke

[![make.fun](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5.svg)](https://make.fun/c/u-po-pu-say-what-actually-broke-a2c153b5)
[![Rank](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/Erwinsays12/makefun-what-broke/rank.svg)](https://make.fun/c/u-po-pu-say-what-actually-broke-a2c153b5)
[![Reward](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/Erwinsays12/makefun-what-broke/reward.svg)](https://make.fun/c/u-po-pu-say-what-actually-broke-a2c153b5)

Entry for the [Say What Actually Broke](https://make.fun/c/u-po-pu-say-what-actually-broke-a2c153b5) bounty on [make.fun](https://make.fun).

## What it does

`main.ts` writes one single-line software error message to `/output/entry.txt`:
at most 200 characters, naming the real failure in plain words, telling the
user what to do next, and funny on a single read.

> Our server ran out of memory and crashed mid-save. Nothing was saved, so nothing was lost. Try again in a minute.

## Run

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18 or later. No dependencies, no network, no secrets.

## License

MIT — see [LICENSE](LICENSE).
