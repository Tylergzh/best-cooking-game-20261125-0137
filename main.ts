// Rush Hour Kitchen — hand-in program (Node 22, standard library only).
//
// The game itself is plain static files in game/ beside this file:
// game/index.html opens in a desktop browser and plays with no build step
// and no network request. This program hands it in: it copies game/ and
// screenshots/ into the output directory and writes dossier.json, the
// summary the judge reads, with the vendored make.fun library
// (vendor/makefun-game.ts, the kit's copy, unchanged).
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { cpSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { buildDossier } from "./vendor/makefun-game.ts";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function copyTree(src, dst) {
  if (existsSync(src)) cpSync(src, dst, { recursive: true });
}

mkdirSync(outDir, { recursive: true });
copyTree(join(repoRoot, "game"), join(outDir, "game"));
mkdirSync(join(outDir, "screenshots"), { recursive: true });
copyTree(join(repoRoot, "screenshots"), join(outDir, "screenshots"));

// The caps mirror the gate, so an entry this program hands in is one the
// scorer accepts: at most 4 screenshots, each at most 256 KiB; game/ at most
// 993 files and 48 MiB in all, no path over 1000 bytes; dossier text capped.
writeFileSync(
  join(outDir, "dossier.json"),
  buildDossier(outDir, {
    text_max_bytes: 163840,
    screenshots: { max: 4, max_bytes: 262144 },
    game_max_files: 993,
    game_max_bytes: 50331648,
    game_path_max_bytes: 1000,
  }),
);

console.log("handed in Rush Hour Kitchen to " + outDir);
