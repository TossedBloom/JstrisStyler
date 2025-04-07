import { defineConfig } from "vite";

export default defineConfig({
  build: {
    minify: "esbuild", // Minify the output using esbuild (default behavior)
    outDir: "dist", // Output directory
    rollupOptions: {
      input: "./src/init.ts", // Entry file
    },
  },
});
