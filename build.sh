#!/bin/bash
pnpm test &&
npx istanbul-badges-readme --statementsLabel='Coverage' &&
rm -rf ./dist ./tsc &&
pnpm tsc -p tsconfig.build.json &&
node ./esbuild.js &&
cp ./src/index.ts ./dist/index.ts
cp ./src/Slug.svelte ./dist/Slug.svelte
cp ./src/Slug.svelte.d.ts ./dist/Slug.svelte.d.ts
