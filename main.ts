// gta6-clipper-01 — entry program.
// Copies VIDEO.json from the repository root to the output directory,
// byte for byte. Node 22, standard library only: no network, no clock,
// no randomness, so repeated runs produce identical bytes.
//
// The video itself is the entry: the house reads it through the YouTube
// Data API. This program only hands over the address in VIDEO.json.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const botDir = resolve(process.env.MAKEFUN_BOT_DIR ?? process.cwd());
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");

const source = join(botDir, "VIDEO.json");
const target = join(outDir, "VIDEO.json");

mkdirSync(outDir, { recursive: true });
writeFileSync(target, readFileSync(source));
