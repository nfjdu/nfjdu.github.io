import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unfonts from "unplugin-fonts/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      custom: {
        families: [
          {
            name: "Advanced Pixel",
            src: "./src/assets/fonts/advanced-pixel-7.regular.ttf",
            transform(font) {
              return font;
            },
          },
          {
            name: "Karma Future",
            src: "./src/assets/fonts/karma.future-regular.otf",
          },
        ],
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Three.js core (~776 KB) - only loaded with 3D experiments
          if (id.includes("node_modules/three")) {
            return "three";
          }
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
