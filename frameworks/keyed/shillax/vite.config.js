import { defineConfig } from "vite";
import shillax from "shillax/vite-plugin-shillax";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [shillax()],
  base: "./",
  root: "./builder",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});
