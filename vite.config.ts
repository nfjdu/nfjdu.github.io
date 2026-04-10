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
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          mui: ["@mui/material", "@mui/icons-material"],
          three: ["three", "@react-three/fiber", "@react-three/drei"],
          redux: ["redux", "react-redux", "@reduxjs/toolkit"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
