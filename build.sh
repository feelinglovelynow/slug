#!/bin/bash
rm -rf ./dist ./tsc &&
pnpm tsc &&
node ./esbuild.js &&
cp ./src/index.ts ./dist/index.ts
cp ./src/Slug.svelte ./dist/Slug.svelte
cp ./src/Slug.svelte.d.ts ./dist/Slug.svelte.d.ts
