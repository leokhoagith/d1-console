import { buildSync } from "esbuild";

buildSync({
	entryPoints: ["./src/index.ts"],
	outfile: "./bin/cli.js",
	format: "esm",
	bundle: true,
	platform: "node",
	banner: {
		js: "#!/usr/bin/env node\nimport { createRequire } from 'module';const require = createRequire(import.meta.url);",
	},
});
