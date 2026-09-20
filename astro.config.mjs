import { defineConfig } from "astro/config";

// Static build, no SSR adapter, no UI framework — plain Astro + TypeScript
// components as required by the brief. Deployed to GitHub Pages as a
// project site (see .github/workflows/deploy.yml); the custom domain
// (оптикарадуга.рф) is intentionally not wired up here yet.
export default defineConfig({
  output: "static",
  trailingSlash: "ignore",
  build: {
    format: "directory",
  },
});
