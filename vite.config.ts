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
          // Core React libraries (~324 KB)
          if (id.includes("node_modules/react") || id.includes("node_modules/react-dom")) {
            return "react-vendor";
          }
          // React Router (~10 KB) - loaded on demand
          if (id.includes("node_modules/react-router")) {
            return "router";
          }
          // MUI Core (~114 KB) - main UI library
          if (id.includes("node_modules/@mui/material")) {
            return "mui-core";
          }
          // MUI System & Emotion (~60 KB) - styling engine
          if (id.includes("node_modules/@mui/system") || id.includes("node_modules/@emotion")) {
            return "mui-system";
          }
          // Three.js core (~776 KB) - only loaded with 3D experiments
          if (id.includes("node_modules/three")) {
            return "three";
          }
          // React Three Fiber & Drei (~157 KB) - only loaded with 3D experiments
          if (id.includes("node_modules/@react-three")) {
            return "react-three";
          }
          // React Spring (~37 KB) - animations for 3D
          if (id.includes("node_modules/@react-spring")) {
            return "react-spring";
          }
          // Framer Motion (~113 KB) - page animations
          if (id.includes("node_modules/framer-motion")) {
            return "framer-motion";
          }
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
