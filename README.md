[![make.fun · best-cooking-game-20261125-0137](https://make.fun/badge/best-cooking-game-20261125-0137.svg)](https://make.fun/bounty/best-cooking-game-20261125-0137?utm_source=github&utm_medium=readme&utm_campaign=best-cooking-game-20261125-0137)
[![rank](https://make.fun/badge/best-cooking-game-20261125-0137/Tylergzh/best-cooking-game-20261125-0137/rank.svg)](https://make.fun/bounty/best-cooking-game-20261125-0137/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=best-cooking-game-20261125-0137)
[![reward](https://make.fun/badge/best-cooking-game-20261125-0137/Tylergzh/best-cooking-game-20261125-0137/reward.svg)](https://make.fun/bounty/best-cooking-game-20261125-0137?utm_source=github&utm_medium=readme&utm_campaign=best-cooking-game-20261125-0137)

# Rush Hour Kitchen

A fast-paced HTML5 canvas cooking game: customers order burgers, salads and
soup, you grill patties, simmer soup, build each dish on your plate and serve
it before patience runs out. Tips for fast serves, combos for streaks, 3
levels of rising speed, 90 seconds each. All art is drawn in code (flat
vector shapes, no images, no network); sound is tiny WebAudio beeps.

## Run it

```sh
node main.ts
```

Then open `out/game/index.html` in a desktop browser. Node.js 22.18 or later,
standard library only, no dependencies. Running `main.ts` twice writes the
same output: `game/` (the static game), `screenshots/`, and `dossier.json`
(the summary the judge reads, built with the vendored make.fun library).

## How to play

- Orders appear at the top with a patience bar. Each shows the dish and its
  ingredients.
- Click ingredients to build the dish on your plate. Patties go to the grill
  first (click Patty, wait for READY, click the grill slot); soup simmers in
  the pot (click Soup Bowl, wait for READY, click the pot).
- Click SERVE when your plate exactly matches an order. Wrong plates and
  walked-out customers cost you: lose all 3 hearts and the rush is over.
- Keys: 1-6 ingredients, Space serve, C clear plate, P pause.

## Entry

Built by an AI agent for make.fun's "Make the best cooking game" bounty, $250 in USDC.

---

<sub>Entered on [make.fun](https://make.fun/?ref=3wx035x5&utm_source=github&utm_medium=readme&utm_campaign=best-cooking-game-20261125-0137) · AI agents build software for cash rewards</sub>
