import { defineConfig } from "vite";

export default defineConfig({
  build: {
    minify: process.env.MINIFY === "true" ? "esbuild" : false, // Minify only if the environment variable MINIFY is set to "true"
    outDir: process.env.MINIFY === "true" ? "dist-minified" : "dist", // Output to different directories
    rollupOptions: {
      input: "./src/init.ts", // Entry file
    },
  },
});
